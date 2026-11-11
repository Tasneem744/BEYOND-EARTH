
import { Rocket, ArrowUp } from "lucide-react";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Mission", href: "#mission" },
  { name: "About", href: "#about" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#02040A] px-6 pb-8 pt-14 text-white">

      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[500px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* MAIN FOOTER */}
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-3">

          {/* PROJECT INFO */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-3 text-xl font-bold tracking-wider"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-400">
                <Rocket size={21} />
              </span>

              BEYOND <span className="text-blue-400">EARTH</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Exploring Earth’s hidden similarities with other worlds
              through science, technology, and discovery.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-[0.3em] text-blue-400">
              EXPLORE
            </h3>

            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* TEAM */}
          <div>
            <h3 className="mb-5 text-xs font-semibold tracking-[0.3em] text-blue-400">
              THE CREW
            </h3>

            <p className="mb-4 text-sm text-slate-400">
              Five minds working together to explore beyond limits.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Tasneem", "Dina", "Shaza", "Tarek", "Al Hassan"].map(
                (name) => (
                  <span
                    key={name}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300"
                  >
                    {name}
                  </span>
                )
              )}
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-5 pt-7 sm:flex-row">

          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} BEYOND EARTH. All rights reserved.
          </p>

          <p className="text-xs tracking-widest text-slate-500">
            MADE WITH CURIOSITY <span className="text-blue-400">✦</span>
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-blue-400"
          >
            <ArrowUp size={18} />
          </a>

        </div>

      </div>
    </footer>
  );
}
