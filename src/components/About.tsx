import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-terminal-green text-xs mb-8 flex items-center gap-2">
          <span className="text-muted">0x00</span>
          <span className="w-8 h-px bg-terminal-dark inline-block" />
          ABOUT
        </h2>

        <div className="rounded-lg overflow-hidden border border-border mb-6">
          <Image
            src="/manasva_banner.jpg"
            alt="Manasva Katyal banner"
            width={1400}
            height={349}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="border border-border rounded-lg bg-surface p-6 sm:p-8 text-sm leading-relaxed">
          <div className="text-muted text-xs mb-4">
            /* developer_profile.h */
          </div>

          <p className="text-foreground mb-4">
            Hello, my name is <span className="text-terminal-green">Manasva</span>!
            I am a third-year student at the University of Waterloo, pursuing a
            Computer Science degree with a{" "}
            <span className="text-terminal-dim">
              Digital Hardware specialization
            </span>
            .
          </p>

          <p className="text-foreground mb-4">
            I am currently working at{" "}
            <span className="text-terminal-green">AWS</span> as an SDE Intern,
            on load-balancing and connection-shedding optimization for Keyspaces,
            a serverless Cassandra-compatible database service. In the past,
            I&apos;ve worked on embedded software for electric aircraft at{" "}
            <span className="text-terminal-green">BETA Technologies</span> and
            next-generation autonomous networks at{" "}
            <span className="text-terminal-green">Nokia</span>.
          </p>

          <p className="text-foreground mb-4">
            As a dedicated programming and robotics enthusiast, I am constantly
            seeking new challenges and innovative ways to effectively utilize my
            technical skills. I am very passionate about embedded systems, AI/ML,
            mechatronics, astrophysics, and aviation.
          </p>

          <p className="text-foreground">
            I am also a recreational pilot, holding a{" "}
            <span className="text-terminal-dim">GPL</span> (glider pilot license)
            and <span className="text-terminal-dim">PPL</span> (private pilot
            license), and have a deep appreciation for the freedom and adventure
            that flying offers.
          </p>
        </div>
      </div>
    </section>
  );
}
