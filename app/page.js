"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code,
  Smartphone,
  Database,
  Shield,
  Cloud,
  CheckCircle,
} from "lucide-react";
import Hero from "@/components/ui/Hero";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Modern, responsive websites and web apps built with clean, scalable architectures.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Native-quality experiences for iOS and Android using modern mobile frameworks.",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics & Science",
      description:
        "Turn raw data into dashboards, forecasts, and insights your team can act on.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description:
        "Proactive security to protect your applications, infrastructure, and customers.",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "DevOps & Cloud Engineering",
      description:
        "Reliable, observable cloud platforms with automated deployment pipelines.",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
  ];

  const benefits = [
    "End-to-end delivery: from idea to production",
    "Senior engineers across web, mobile, data, and cloud",
    "Security, performance, and scalability by default",
    "Ongoing partnership, not one-off handovers",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <Hero />
      <section className="relative overflow-hidden bg-slate-950">
        {/* Glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Overview text */}
            <div
              className={`transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold tracking-[0.2em] text-blue-100 uppercase">
                  Gleam Digital Technologies
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight text-white">
                Build, secure, and scale
                <span className="bg-gradient-to-r from-blue-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  {" "}
                  modern digital products
                </span>
                .
              </h2>

              <p className="text-lg md:text-xl text-slate-200 mb-6">
                End-to-end technology services for teams that want to move
                faster with confidence in their infrastructure, data, and
                security.
              </p>

              <p className="text-sm md:text-base text-slate-300 mb-8 max-w-xl">
                From first prototype to production systems, we help you ship
                reliable software, automate operations, and keep your platforms
                secure and scalable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400 transition"
                >
                  Get a free consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-slate-500 bg-transparent px-8 py-4 text-sm font-semibold text-slate-100 hover:border-slate-300 hover:bg-slate-900/60 transition"
                >
                  View services
                </Link>
              </div>
            </div>

            {/* Image */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 shadow-2xl shadow-blue-500/20">
                <img
                  src="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1100"
                  alt="Team collaborating on digital products"
                  className="h-80 w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-blue-500/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-950" id="services">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-300 mb-3">
              Core Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              One partner for your entire digital stack.
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              From front-end experiences to cloud infrastructure and security,
              Gleam Digital Technologies provides the engineering backbone for
              modern businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-700/70 bg-slate-900/70 shadow-md shadow-slate-900/60 hover:border-blue-500/80 hover:shadow-blue-500/30 transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={`${service.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-blue-300">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/40">
                      {service.icon}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                      {service.title}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-300 mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-blue-300 hover:text-blue-200 inline-flex items-center group"
                  >
                    Learn more
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-blue-300 mb-3">
                Why Choose Us
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                A technology partner you can trust, not just a vendor.
              </h2>
              <p className="text-lg text-slate-200 mb-6">
                We bring together senior engineers, modern tooling, and a
                business-first mindset to deliver solutions that actually move
                the needle.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-sm md:text-base text-slate-200">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-blue-300 font-semibold hover:text-blue-200 text-sm md:text-base group"
              >
                Learn about how we work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div>
              <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-950/70 shadow-2xl shadow-blue-500/20">
                <img
                  src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1100"
                  alt="Team discussing strategy"
                  className="h-80 w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-transparent to-emerald-400/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section here */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-sky-400 to-emerald-300 text-slate-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to ship what&apos;s next?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-slate-950">
            Tell us where you are today, and we&apos;ll help you design, build,
            and operate the technology that gets you to where you want to be.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-sm md:text-lg font-semibold text-slate-950 hover:bg-blue-200 transition-colors shadow-lg shadow-blue-500/40 group"
          >
            Book a discovery call
            <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
