import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const country = formData.get("country");
    const state = formData.get("state");
    const city = formData.get("city");
    const portfolio = formData.get("portfolio");
    const role = formData.get("role");
    const file = formData.get("cv");

    if (!firstName || !lastName || !email || !file) {
      return new Response("Missing required fields", { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: "careers@gleamdigitaltechnologies.com",
      reply_to: email,
      subject: `Job Application – ${role}`,
      html: `
        <h2>New Job Application</h2>

        <p><strong>Role:</strong> ${role}</p>

        <hr />

        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Location:</strong> ${city}, ${state}, ${country}</p>
        ${
          portfolio
            ? `<p><strong>Portfolio / LinkedIn:</strong> <a href="${portfolio}">${portfolio}</a></p>`
            : ""
        }

        <hr />

        <p>The applicant’s resume is attached to this email.</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer.toString("base64"),
        },
      ],
    });

    console.log("Resend result:", result);

    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: "We’ve received your application",
      html: `
        <p>Hi ${firstName},</p>

        <p>
          Thank you for applying for the <strong>${role}</strong> position at
          Gleam Digital Technologies Ltd.
        </p>

        <p>
          We’ve received your application and our team is currently reviewing
          submissions. If your experience aligns with our requirements, we’ll
          reach out to you for the next steps.
        </p>

        <p>
          We appreciate your interest in working with us and wish you the best.
        </p>

        <p>
          Kind regards,<br />
          <strong>Gleam Digital Technologies Ltd.</strong><br />
          careers@gleamdigitaltechnologies.com
        </p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Job application error:", error);
    return new Response("Failed to submit application", { status: 500 });
  }
}
