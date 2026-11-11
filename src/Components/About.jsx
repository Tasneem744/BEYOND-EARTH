
import "@google/model-viewer";

const team = [
  {
    name: "Tasneem",
    number: "01",
    model: "/assets/models/teams/Z2 Spacesuit (1).glb",
  },
  {
    name: "Dina",
    number: "02",
    model: "/assets/models/teams/Mark III Spacesuit.glb",
  },
  {
    name: "Shaza",
    number: "03",
    model: "/assets/models/teams/Astronaut (1).glb",
  },
  {
    name: "Tarek",
    number: "04",
    model: "/assets/models/teams/Gemini Spacesuit (1).glb",
  },
  {
    name: "Al Hassan",
    number: "05",
    model: "/assets/models/teams/Extravehicular Mobility Unit.glb",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#02040A] px-6 py-24 text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[450px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:45px_45px]" />

        <div className="absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.4em] text-blue-400">
            THE PEOPLE BEHIND THE MISSION
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            MEET THE{" "}
            <span className="text-blue-400">CREW</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
            Five explorers. One mission.
            Driven by curiosity, united by discovery.
          </p>
        </div>

        {/* TEAM GRID */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5 lg:gap-4">

          {team.map((member) => (
            <div
              key={member.number}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] px-3 pb-7 pt-5 transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-blue-500/[0.05]"
            >

              {/* MEMBER NUMBER */}
              <span className="z-10 self-start pl-2 text-xs tracking-widest text-blue-400/70">
                / {member.number}
              </span>

              {/* LIGHT EFFECT */}
              <div className="pointer-events-none absolute top-20 h-36 w-36 rounded-full bg-blue-500/10 blur-[55px] transition-all duration-500 group-hover:bg-blue-400/25" />

              {/* 3D ASTRONAUT */}
              <div className="relative z-10 h-[240px] w-full md:h-[270px]">
                <model-viewer
                  src={member.model}
                  alt={`${member.name} astronaut`}
                  camera-controls
                  auto-rotate
                  auto-rotate-delay="0"
                  rotation-per-second="18deg"
                  interaction-prompt="none"
                  disable-zoom
                  shadow-intensity="1"
                  exposure="1.1"
                  environment-image="neutral"
                  camera-orbit="0deg 75deg 105%"
                  field-of-view="30deg"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                  }}
                />
              </div>

              {/* MEMBER INFO */}
              <div className="relative z-10 mt-3 text-center">
                <p className="mb-2 text-[9px] tracking-[0.3em] text-blue-400">
                  CREW MEMBER
                </p>

                <h3 className="text-xl font-semibold tracking-wide transition-colors duration-300 group-hover:text-blue-300 md:text-2xl">
                  {member.name}
                </h3>

                <div className="mx-auto mt-3 h-[2px] w-8 rounded-full bg-blue-500/60 transition-all duration-500 group-hover:w-16" />
              </div>

            </div>
          ))}

        </div>

        {/* BOTTOM TEXT */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="h-10 w-px bg-gradient-to-b from-blue-500/60 to-transparent" />

          <p className="text-center text-[10px] tracking-[0.3em] text-slate-500">
            ONE TEAM · ONE VISION · INFINITE POSSIBILITIES
          </p>
        </div>

      </div>
    </section>
  );
}
