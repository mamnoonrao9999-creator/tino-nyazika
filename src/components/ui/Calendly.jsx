const CAL_EMBED =
  "https://calendly.com/tinonyazika/strategic-call-w-tino?hide_gdpr_banner=1";

export default function Calendly() {
  return (
    <div className="mx-auto mt-10 max-w-[680px] overflow-hidden rounded-[18px] border border-border bg-card shadow-sm">
      <iframe
        src={CAL_EMBED}
        title="Book a call with Tino"
        className="h-[700px] w-full"
        loading="lazy"
      />
    </div>
  );
}