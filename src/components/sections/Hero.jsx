const CAL = "https://calendly.com/tinonyazika/strategic-call-w-tino?month=2026-10";
const LOOM = "https://www.loom.com/share/2bde08e064e444d79cfe3b0498447a8a";
const LOOM_EMBED = "https://www.loom.com/embed/2bde08e064e444d79cfe3b0498447a8a";

const ext = { target: "_blank", rel: "noopener noreferrer" };
const btn =
  "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors";

export default function Hero() {
  return (
    <section className="bg-secondary px-6 pb-20 pt-8 text-secondary-foreground">
      <div className="mx-auto max-w-6xl">
        <span className="text-lg font-bold tracking-[0.3em] text-primary">
          TINO
        </span>
      </div>

      <div className="mx-auto mt-14 max-w-5xl text-center">
        <h1 className="text-4xl font-normal md:text-6xl">
          Work with me to turn your
          <br />
          social media into a consistent source of{" "}
          <em className="text-primary">attention, authority &amp; leads.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-lg italic text-secondary-foreground/80">
          Organic social media management for local businesses and personal
          brands that want to become the go-to in their niche.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-6xl overflow-hidden rounded-[12px] border border-secondary-foreground/15">
        <div className="relative aspect-video">
          <iframe
            src={LOOM_EMBED}
            title="Watch the Loom"
            className="absolute inset-0 h-full w-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a
          href={CAL}
          {...ext}
          className={`${btn} bg-primary text-primary-foreground hover:bg-primary/85`}
        >
          Book a call
        </a>
        <a
          href={LOOM}
          {...ext}
          className={`${btn} border border-primary text-primary hover:bg-primary/10`}
        >
          Watch the Loom
        </a>
      </div>
    </section>
  );
}