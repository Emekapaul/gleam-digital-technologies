"use client";

import Link from "next/link";
import { roles } from "@/content/careerRoles";
import {
  ArrowRight,
  Briefcase,
  Globe,
  Users,
  ShieldCheck,
  MessageCircle,
  Globe2,
} from "lucide-react";

const values = [
  "Senior-level ownership and accountability",
  "Quality, security, and performance by default",
  "Clear communication and thoughtful collaboration",
  "Remote-first, async-friendly culture",
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 md:py-20">
        {/* Glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-6 ">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 mb-5 md:mt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-[0.2em] text-blue-100 uppercase">
                Careers
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
              Build meaningful solutions with
              <span className="bg-gradient-to-r from-blue-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                {" "}
                people who care
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-2xl">
              Join a senior, remote-first team solving real problems for modern
              businesses with ownership, trust, and long-term impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-300 mb-3">
              Why Gleam
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              A place for professionals who value quality and autonomy.
            </h2>
            <p className="text-lg text-slate-200 mb-6">
              We work with teams that care about doing things properly, from
              architecture and security to UX and delivery. No chaos, no
              shortcuts.
            </p>

            {/* <div className="space-y-4">
              {values.map((value, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 mt-1" />
                  <span className="text-sm md:text-base text-slate-200">
                    {value}
                  </span>
                </div>
              ))}
            </div> */}

            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-blue-300 mt-1" />
                <p className="text-slate-200 text-sm">
                  Small, senior teams with no micromanagement.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Globe className="w-6 h-6 text-emerald-300 mt-1" />
                <p className="text-slate-200 text-sm">
                  Fully remote, async-friendly culture, globally distributed.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-sky-300 mt-1" />
                <p className="text-slate-200 text-sm">
                  Real projects, real ownership, real impact.
                </p>
              </div>
              <div className="flex items-start">
                <ShieldCheck className="w-6 h-6 text-emerald-400 mr-3 mt-1" />
                <span className="text-sm md:text-base text-slate-200">
                  Quality, security, and performance by default
                </span>
              </div>

              <div className="flex items-start">
                <MessageCircle className="w-6 h-6 text-emerald-400 mr-3 mt-1" />
                <span className="text-sm md:text-base text-slate-200">
                  Clear communication and thoughtful collaboration
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/70 shadow-2xl shadow-blue-500/20">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Team collaborating remotely"
                className="h-80 md:h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-transparent to-emerald-400/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-300 mb-3">
              Open Positions
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Current opportunities
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Don’t see the perfect role? We’re always open to hearing from
              strong engineers.
            </p>
          </div>

          <div className="grid gap-6 max-w-3xl mx-auto">
            {roles.length > 0 ? (
              roles.map((role) => (
                <div
                  id={role.slug}
                  key={role.slug}
                  className="scroll-mt-24 rounded-2xl border border-slate-700 bg-slate-950/70 p-6 hover:border-blue-500/60 transition shadow-md shadow-slate-900/60"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {role.title}
                  </h3>
                  <p className="text-sm text-slate-300 mb-4">
                    {role.shortDescription}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-5">
                    <span>{role.location}</span>
                    <span>•</span>
                    <span>{role.type}</span>
                  </div>

                  <Link
                    href={`/careers/${role.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-blue-300 hover:text-blue-200 group"
                  >
                    Apply or View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))
            ) : (
              <div className="text-center rounded-2xl border border-slate-700 bg-slate-950/70 p-10 shadow-md shadow-slate-900/60">
                <h3 className="text-xl font-semibold text-white mb-3">
                  No open roles right now
                </h3>
                <p className="text-slate-300 mb-6">
                  We don’t have any open positions at the moment. We’re a small
                  team and hire thoughtfully, but we’re always open to hearing
                  from strong professionals who align with how we work.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-sm font-semibold text-blue-300 hover:text-blue-200 group"
                >
                  Get in touch
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-sky-400 to-emerald-300 text-slate-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Think you’d be a great fit?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Send us a short note about your experience and what you’d like to
            work on.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-sm md:text-lg font-semibold text-slate-950 hover:bg-blue-200 transition shadow-lg shadow-blue-500/40 group"
          >
            Get in touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
