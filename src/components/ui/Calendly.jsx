"use client";

import { useEffect, useRef, useState } from "react";

const CAL_EMBED =
  "https://calendly.com/tinonyazika/strategic-call-w-tino?hide_gdpr_banner=1";

export default function Calendly() {
  const [height, setHeight] = useState(700);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const onMessage = (e) => {
      if (!e.origin.includes("calendly.com")) return;
      const data = e.data;
      if (!data || typeof data !== "object") return;

      const h =
        data?.payload?.height ??
        data?.height ??
        (typeof data?.payload === "number" ? data.payload : undefined);

      if (typeof h === "number" && h > 200) {
        setHeight(Math.min(h, 1400));
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div className="calendly-wrap mx-auto mt-10 max-w-6xl overflow-hidden rounded-[18px] border border-border bg-card shadow-sm">
      <div
        ref={wrapperRef}
        className="calendly-scroll max-h-[700px] overflow-y-auto"
      >
        <iframe
          src={CAL_EMBED}
          title="Book a call with Tino"
          className="block w-full"
          style={{ height: `${height}px`, border: 0 }}
          loading="lazy"
        />
      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";

// const CAL_EMBED =
//   "https://calendly.com/tinonyazika/strategic-call-w-tino?hide_gdpr_banner=1";

// export default function Calendly() {
//   const [height, setHeight] = useState(700); // sensible start
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     const onMessage = (e) => {
//       if (!e.origin.includes("calendly.com")) return;
//       const data = e.data;
//       if (!data || typeof data !== "object") return;

//       // Calendly sends a few shapes across versions; grab whichever has a number.
//       const h =
//         data?.payload?.height ??
//         data?.height ??
//         (typeof data?.payload === "number" ? data.payload : undefined);

//       if (typeof h === "number" && h > 200) {
//         setHeight(Math.min(h, 1400)); // clamp so it never gets silly
//       }
//     };

//     window.addEventListener("message", onMessage);
//     return () => window.removeEventListener("message", onMessage);
//   }, []);

//   return (
//     <div className="calendly-wrap mx-auto mt-10 max-w-6xl overflow-hidden rounded-[18px] border border-border bg-card shadow-sm">
//       <div
//         ref={wrapperRef}
//         className="calendly-scroll max-h-[700px] overflow-y-auto"
//       >
//         <iframe
//           src={CAL_EMBED}
//           title="Book a call with Tino"
//           className="block w-full"
//           style={{ height: `${height}px`, border: 0 }}
//           loading="lazy"
//         />
//       </div>
//     </div>
//   );
// }