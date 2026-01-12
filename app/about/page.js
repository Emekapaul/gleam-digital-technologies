import Link from "next/link";
import { Target, Users, Lightbulb, Rocket, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About",
  description:
    "Learn about Gleam Digital Technologies, our mission, who we serve, and how we help teams build, secure, and scale digital products.",
  openGraph: {
    title: "About Us | Gleam Digital Technologies",
    description:
      "Gleam Digital Technologies is a modern tech partner helping startups, SMBs, and enterprises ship reliable, secure software.",
  },
};

export default function About() {
  const process = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Discover",
      description:
        "We start by deeply understanding your goals, constraints, and existing systems so we solve the right problem.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Design",
      description:
        "We translate insights into clear architectures, roadmaps, and prototypes aligned with your business outcomes.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Build",
      description:
        "We deliver high-quality solutions using modern tools, agile delivery, and tight feedback loops with your team.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch",
      description:
        "We deploy, monitor, and continuously improve your solution so it remains fast, secure, and reliable.",
    },
  ];

  const clients = [
    {
      type: "Startups",
      description:
        "Rapid MVP development, pivots, and product iterations to help you reach product–market fit faster.",
    },
    {
      type: "SMBs",
      description:
        "Modernizing legacy systems, automating operations, and building tools that unlock growth.",
    },
    {
      type: "Enterprises",
      description:
        "Scalable architectures, cloud migration, and enterprise-grade security for complex environments.",
    },
    {
      type: "Personal Projects",
      description:
        "Bringing individual ideas to life with professional engineering support and clear guidance.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
        {/* Glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-purple-600/25 blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 mb-5 md:mt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-[0.2em] text-blue-100 uppercase">
                About Gleam Digital Technologies
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              Building the digital backbone of
              <span className="bg-gradient-to-r from-blue-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                {" "}
                modern businesses
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-6">
              We are a technology partner for teams that want to build, secure,
              and scale high-performing digital products without the guesswork.
            </p>

            <p className="text-sm md:text-base text-slate-300 max-w-xl">
              From first concept to production-grade systems, we help you
              connect strategy, design, and engineering into one cohesive,
              reliable experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-300 mb-3">
                Our Mission
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Turning complex technology into clear, measurable business
                value.
              </h2>
              <p className="text-lg text-slate-200 mb-4">
                At Gleam Digital Technologies, we believe technology should
                simplify, not complicate. Our mission is to help organizations
                modernize their infrastructure, automate workflows, and protect
                their data while staying agile and innovative.
              </p>
              <p className="text-lg text-slate-300 mb-6">
                We combine deep expertise in software engineering, cloud, data,
                and security with a strong understanding of business realities.
                Whether you&apos;re validating a new idea or scaling a mature
                platform, we meet you where you are and move with you.
              </p>

              <ul className="space-y-3 mb-4">
                <li className="flex gap-3 text-slate-200">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>
                    Modernize legacy systems without disrupting operations.
                  </span>
                </li>
                <li className="flex gap-3 text-slate-200">
                  <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                  <span>
                    Automate routine work so your team can focus on what
                    matters.
                  </span>
                </li>
                <li className="flex gap-3 text-slate-200">
                  <span className="mt-1 h-2 w-2 rounded-full bg-purple-400" />
                  <span>
                    Design secure, scalable foundations for long-term growth.
                  </span>
                </li>
              </ul>

              <p className="text-lg text-slate-100 font-semibold">
                We&apos;re not just implementers, we&apos;re partners invested
                in your success.
              </p>
            </div>
            <div>
              <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 shadow-2xl shadow-blue-500/20">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1100&q=80"
                  alt="Team collaboration"
                  className="h-80 w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-blue-500/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-300 mb-3">
              Who We Serve
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Built for teams at every stage.
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              We partner with startups, growing businesses, and enterprises to
              design and ship technology that actually gets used, and delivers
              results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6 shadow-md shadow-slate-900/40 hover:border-blue-500/70 hover:shadow-blue-500/30 transition-all"
              >
                <h3 className="text-xl font-semibold text-blue-200 mb-2">
                  {client.type}
                </h3>
                <p className="text-sm text-slate-300">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-300 mb-3">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              A process designed for clarity and momentum.
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our approach keeps you involved at every step, transparent,
              predictable, and focused on outcomes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 h-full shadow-xl shadow-blue-500/30 hover:-translate-y-1 transition-transform">
                  <div className="mb-4 text-blue-100">{step.icon}</div>
                  <div className="text-3xl font-bold mb-2 opacity-70">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-blue-100 text-sm">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-7 -translate-y-1/2">
                    <ArrowRight className="w-7 h-7 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-10 text-center">
              What sets Gleam Digital apart.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-950/60 rounded-2xl border border-slate-700/80 p-8 shadow-md shadow-slate-900/50">
                <h3 className="text-xl font-semibold text-blue-200 mb-3">
                  Technical Excellence
                </h3>
                <p className="text-slate-300">
                  Our team stays ahead of modern frameworks, cloud platforms,
                  and security practices, so your stack doesn&apos;t fall
                  behind.
                </p>
              </div>
              <div className="bg-slate-950/60 rounded-2xl border border-slate-700/80 p-8 shadow-md shadow-slate-900/50">
                <h3 className="text-xl font-semibold text-blue-200 mb-3">
                  Business-First Thinking
                </h3>
                <p className="text-slate-300">
                  We tie every technical decision back to metrics that matter:
                  revenue, efficiency, risk reduction, and user experience.
                </p>
              </div>
              <div className="bg-slate-950/60 rounded-2xl border border-slate-700/80 p-8 shadow-md shadow-slate-900/50">
                <h3 className="text-xl font-semibold text-blue-200 mb-3">
                  Clear Communication
                </h3>
                <p className="text-slate-300">
                  No black boxes. You get visibility into priorities, tradeoffs,
                  and progress at every stage of the engagement.
                </p>
              </div>
              <div className="bg-slate-950/60 rounded-2xl border border-slate-700/80 p-8 shadow-md shadow-slate-900/50">
                <h3 className="text-xl font-semibold text-blue-200 mb-3">
                  Long-Term Partnership
                </h3>
                <p className="text-slate-300">
                  We&apos;re here beyond launch, helping you evolve your
                  product, respond to new opportunities, and scale with
                  confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s build what&apos;s next for your business.
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Share your vision, and we&apos;ll help you shape it into a secure,
            scalable, and high-performing digital solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm md:text-base font-semibold text-blue-700 shadow-lg shadow-blue-500/40 hover:bg-blue-50 transition-colors group"
          >
            Get in touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
