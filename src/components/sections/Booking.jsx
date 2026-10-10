import Calendly from "@/components/ui/Calendly";

export default function Booking() {
  return (
    <section className="px-6 py-20 text-center">
      <h2 className="text-3xl md:text-4xl">
        Ready to build your organic presence?
      </h2>
      <p className="mt-3 text-lg italic text-muted-foreground">
        Book a call and let's see if we're a good fit.
      </p>
      <Calendly />
    </section>
  );
}