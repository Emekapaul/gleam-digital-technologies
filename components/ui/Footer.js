import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand + summary */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative h-14 w-20 sm:h-20 sm:w-44">
                <Image
                  src="/Artboard2.svg"
                  alt="Gleam Digital Technologies logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
            <p className=" text-slate-400 mb-4 max-w-md">
              Build, secure, and scale your digital products with a single
              partner. We provide end-to-end technology services across web,
              mobile, data, security, and cloud.
            </p>
            <p className=" text-slate-400">
              <a
                href="mailto:info@gleamdigitaltechnologies.com"
                className="hover:text-blue-300 transition-colors"
              >
                info@gleamdigitaltechnologies.com
              </a>
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className=" font-semibold text-slate-100 mb-4 uppercase tracking-[0.18em]">
              Services
            </h3>
            <ul className="space-y-2 ">
              <li>
                <Link
                  href="/services#web-development"
                  className="hover:text-blue-300 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#mobile-app-development"
                  className="hover:text-blue-300 transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#data-science-analysis"
                  className="hover:text-blue-300 transition-colors"
                >
                  Data Analytics &amp; Data Science
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cybersecurity"
                  className="hover:text-blue-300 transition-colors"
                >
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  href="/services#devops-cloud-engineering"
                  className="hover:text-blue-300 transition-colors"
                >
                  DevOps &amp; Cloud Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className=" font-semibold text-slate-100 mb-4 uppercase tracking-[0.18em]">
              Company
            </h3>
            <ul className="space-y-2 ">
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-blue-300 transition-colors"
                >
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-blue-300 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Gleam Digital Technologies. All
            rights reserved.
          </p>
          <p className="text-sm">Remote-first · Serving clients worldwide</p>
        </div>
      </div>
    </footer>
  );
}
