
import "@google/model-viewer";

export default function MissionSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#02040A] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,#14254b_0%,#080d1d_42%,#02040a_80%)]" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(1px 1px at 10% 20%, white 99%, transparent),
              radial-gradient(1px 1px at 80% 30%, white 99%, transparent),
              radial-gradient(2px 2px at 50% 70%, white 99%, transparent),
              radial-gradient(1px 1px at 30% 85%, white 99%, transparent),
              radial-gradient(1px 1px at 90% 90%, white 99%, transparent)
            `,
            backgroundSize: "300px 300px",
          }}
        />

        <div className="absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      {/* ORBIT DECORATION */}
      <div className="pointer-events-none absolute right-[-20%] top-[15%] h-[650px] w-[1000px] rotate-[-25deg] rounded-[50%] border border-blue-300/[0.07]" />

      <div className="pointer-events-none absolute right-[-25%] top-[20%] h-[750px] w-[1100px] rotate-[-25deg] rounded-[50%] border border-purple-300/[0.06]" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-16">

        {/* HEADER */}
        <div className="flex items-center gap-3 pt-12">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]" />
          <span className="font-mono text-[10px] tracking-[0.35em] text-gray-400 md:text-xs">
            NASA SPACE APPS // OUR MISSION
          </span>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid min-h-[750px] items-center lg:grid-cols-[0.9fr_1.1fr]">

          {/* TEXT */}
          <div className="relative z-20 py-16 lg:py-24">

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-300">
                BEYOND OUR PLANET
              </span>
            </div>

            <h2 className="text-[40px] font-light leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">
              One Planet.
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text font-medium text-transparent">
                Infinite
              </span>
              <span className="block">Possibilities.</span>
            </h2>

            <p className="mt-7 max-w-[460px] text-xs leading-7 text-gray-400 md:text-sm">
              What if the key to understanding other worlds
              was already here on Earth?

              Explore extreme environments, discover planetary
              similarities, and uncover new possibilities
              for the future of space exploration.
            </p>

            {/* CORE IDEA */}
            <div className="mt-10 flex max-w-[440px] items-start gap-5">
              <div className="h-20 w-[2px] shrink-0 bg-gradient-to-b from-cyan-400 to-transparent" />

              <div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-cyan-400">
                  THE CORE IDEA
                </span>

                <h3 className="mt-2 text-base font-medium tracking-wide">
                  Earth Analog Environments
                </h3>

                <p className="mt-2 text-[11px] leading-6 text-gray-500 md:text-xs">
                  Studying Earth's extreme landscapes to understand
                  environments beyond our planet.
                </p>
              </div>
            </div>

            {/* PROCESS */}
            <div className="mt-12 flex max-w-[430px] justify-between border-t border-white/10 pt-6">
              {[
                ["01", "EXPLORE"],
                ["02", "COMPARE"],
                ["03", "DISCOVER"],
              ].map(([number, label]) => (
                <div key={number}>
                  <span className="text-xl font-light text-cyan-300">
                    {number}
                  </span>
                  <p className="mt-2 text-[9px] tracking-[0.2em] text-gray-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3D SPACE SCENE */}
          <div className="relative min-h-[580px] lg:min-h-[750px]">

            {/* ATMOSPHERE GLOW */}
            <div className="pointer-events-none absolute right-[5%] top-[8%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[110px]" />

            {/* ORBIT RING */}
            <div className="pointer-events-none absolute left-[5%] top-[20%] h-[430px] w-[650px] rotate-[-25deg] rounded-[50%] border border-cyan-300/[0.12]" />

            {/* MOON */}
            <div className="pointer-events-auto absolute left-[0%] top-[5%] z-10 h-[180px] w-[180px] opacity-80 md:left-[5%] md:top-[10%] md:h-[230px] md:w-[230px]">
              <model-viewer
                src="/assets/models/moon_small.glb"
                alt="NASA Moon 3D Model"
                auto-rotate
                rotation-per-second="8deg"
                camera-controls
                disable-pan
                disable-zoom
                interaction-prompt="none"
                shadow-intensity="0"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "transparent",
                }}
              />
            </div>

            {/* MOON LABEL */}
            <div className="pointer-events-none absolute left-[2%] top-[35%] z-20 md:left-[8%]">
              <span className="font-mono text-[9px] tracking-[0.25em] text-purple-300">
                SATELLITE 001
              </span>
              <p className="mt-1 text-xs text-white/80">The Moon</p>
            </div>

            {/* EARTH GLOW */}
            <div className="pointer-events-none absolute right-[-5%] top-[5%] h-[450px] w-[450px] rounded-full bg-blue-500/15 blur-[90px] md:h-[570px] md:w-[570px]" />

            {/* EARTH */}
            <div className="pointer-events-auto absolute right-[-15%] top-[12%] z-10 h-[420px] w-[420px] md:right-[-12%] md:top-[8%] md:h-[600px] md:w-[600px]">
              <model-viewer
                src="/assets/models/Earth_1_12756.glb"
                alt="Planet Earth 3D Model"
                auto-rotate
                rotation-per-second="5deg"
                camera-controls
                disable-pan
                disable-zoom
                interaction-prompt="none"
                shadow-intensity="0"
                exposure="1.2"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "transparent",
                }}
              />
            </div>

            {/* EARTH LABEL */}
            <div className="pointer-events-none absolute right-[5%] top-[12%] z-20 md:right-[8%] md:top-[15%]">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
                <span className="font-mono text-[9px] tracking-[0.25em] text-cyan-200">
                  PLANET 001
                </span>
              </div>
              <p className="ml-4 mt-1 text-xs text-white/80">Earth</p>
            </div>

            {/* SCENE CORNER DETAILS */}
            <div className="pointer-events-none absolute bottom-[25%] left-[8%] hidden md:block">
              <span className="font-mono text-[9px] tracking-[0.2em] text-gray-600">
                29.9792° N / 31.1342° E
              </span>
              <div className="mt-2 h-px w-24 bg-gradient-to-r from-cyan-400/60 to-transparent" />
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="relative z-30 flex flex-col justify-between gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center">
          <span className="font-mono text-[9px] tracking-[0.2em] text-gray-600">
            PLANETARY SCIENCE / SPACE EXPLORATION
          </span>

          <div className="flex items-center gap-3">
            <span className="h-px w-5 bg-cyan-400" />
            <span className="font-mono text-[9px] tracking-[0.2em] text-gray-500">
              SCROLL TO EXPLORE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
