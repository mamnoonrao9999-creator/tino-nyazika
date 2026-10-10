import Calendly from "@/components/ui/Calendly";

const CAL = "https://calendly.com/tinonyazika/strategic-call-w-tino?month=2026-10";
const btn =
  "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors";

export default function FinalCta() {
  return (
    <section className="px-6 py-24 text-center">
      <h2 className="text-4xl md:text-5xl">
        Let's build your organic content engine.
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg italic text-muted-foreground">
        If you're ready to become the go-to in your niche without spending your
        week figuring out what to post, let's talk.
      </p>
      <a
        href={CAL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} mt-8 bg-primary text-primary-foreground hover:bg-primary/85`}
      >
        Book a call with me personally
      </a>
      <Calendly />
    </section>
  );
}