import { notFound } from "next/navigation";
import Link from "next/link";
import { roles } from "@/content/careerRoles";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function CareerDetail({ params }) {
  const role = roles.find((r) => r.slug === params.slug);

  if (!role) return notFound();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link
          href={`/careers#${params.slug}`}
          className="inline-flex items-center gap-2 text-sm text-blue-300 hover:text-blue-200 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to careers
        </Link>

        <h1 className="text-4xl font-bold mb-4">{role.title}</h1>

        <div className="flex gap-4 text-sm text-slate-400 mb-8">
          <span>{role.location}</span>
          <span>•</span>
          <span>{role.type}</span>
        </div>

        <p className="text-slate-200 mb-8 whitespace-pre-line">
          {role.description}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Responsibilities</h2>
          <ul className="space-y-2 text-slate-300 list-disc list-inside">
            {role.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Requirements</h2>
          <ul className="space-y-2 text-slate-300 list-disc list-inside">
            {role.requirements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <Link
          href={`/careers/${role.slug}/apply`}
          className="inline-flex items-center rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-400 transition group"
        >
          Apply for this role
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
