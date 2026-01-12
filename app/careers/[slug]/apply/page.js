"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Upload, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ApplyPage({ params }) {
  const { toast } = useToast();
  const [status, setStatus] = useState("idle");
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("role", params.slug);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed");

      toast({
        title: "Application submitted",
        description:
          "Thank you for your interest. Our team will review your application and reach out if there’s a match.",
      });

      e.target.reset();
      setStatus("success");
    } catch {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description:
          "We couldn’t submit your application. Please try again or email us directly.",
      });
      setStatus("idle");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-20">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Back */}
        <Link
          href={`/careers/${params.slug}`}
          className="inline-flex items-center text-sm text-blue-300 hover:text-blue-200 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to role
        </Link>

        {/* Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-slate-900/80 p-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Job Application
          </h1>
          <p className="text-sm text-slate-300 mb-8">
            Please fill in your details below. All fields marked * are required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label">First name *</label>
                <input
                  name="firstName"
                  required
                  className="input"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="label">Last name *</label>
                <input
                  name="lastName"
                  required
                  className="input"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label">Email address *</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="input"
                  placeholder="john.doe@email.com"
                />
              </div>
              <div>
                <label className="label">Phone number *</label>
                <input
                  name="phone"
                  required
                  type="tel"
                  className="input"
                  placeholder="+1 234 567 8900"
                />
              </div>
            </div>

            {/* Location */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="label">Country *</label>
                <input
                  name="country"
                  required
                  className="input"
                  placeholder="Country"
                />
              </div>
              <div>
                <label className="label">State / Region *</label>
                <input
                  name="state"
                  required
                  className="input"
                  placeholder="State"
                />
              </div>
              <div>
                <label className="label">City *</label>
                <input
                  name="city"
                  required
                  className="input"
                  placeholder="City"
                />
              </div>
            </div>

            {/* Links */}
            <div>
              <label className="label">LinkedIn / Portfolio</label>
              <input
                name="portfolio"
                className="input"
                placeholder="https://linkedin.com/in/yourname"
              />
            </div>

            {/* Resume */}
            <div>
              <label className="label">Resume / CV *</label>
              <label className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 cursor-pointer hover:border-blue-400 transition">
                <span className="text-sm text-slate-300">
                  Upload PDF or DOC (max 5MB)
                </span>
                <Upload className="w-5 h-5 text-blue-300" />
                <input
                  type="file"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  required
                  hidden
                  onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                />
              </label>
              {fileName && (
                <p className="mt-2 text-xs text-emerald-400">
                  Selected file: {fileName}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              disabled={status === "sending"}
              className="w-full rounded-full bg-blue-500 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 hover:bg-blue-400 transition disabled:opacity-60"
            >
              {status === "sending"
                ? "Submitting application…"
                : "Submit application"}
            </button>
          </form>
        </div>
      </div>

      {/* Shared styles */}
      <style jsx>{`
        .label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #cbd5f5;
        }

        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #334155;
          background: #020617;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          color: #f8fafc;
          outline: none;
          transition: border 0.2s, box-shadow 0.2s;
        }

        .input:focus {
          border-color: #60a5fa;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
}
