"use client";

import { useEffect, useRef, useState } from "react";

export default function ImageCard({ src, alt, label }) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className="rounded-[18px] border-l-[5px] border-primary bg-card p-4 shadow-lg">
      {failed ? (
        <div className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-2 rounded-[12px] border border-dashed border-border bg-muted/40 px-4 text-center">
          <p className="text-base font-semibold text-foreground">{label}</p>
          <p className="text-xs italic text-muted-foreground">
            Image coming soon — drop the file at{" "}
            <span className="font-mono text-[10px] not-italic break-all">
              {src}
            </span>
          </p>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="block h-auto w-full rounded-[12px]"
        />
      )}
    </div>
  );
}






// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function ImageCard({ src, alt, label }) {
//   const [failed, setFailed] = useState(false);
//   const imgRef = useRef(null);

//   useEffect(() => {
//     const el = imgRef.current;
//     if (el && el.complete && el.naturalWidth === 0) setFailed(true);
//   }, []);

//   return (
//     <div className="rounded-[18px] border-l-[5px] border-primary bg-card p-5 shadow-lg">
//       {failed ? (
//         <div className="mx-auto flex aspect-[4/3] w-full max-w-[680px] flex-col items-center justify-center gap-2 rounded-[12px] border border-dashed border-border bg-muted/40 px-6 text-center">
//           <p className="text-lg font-semibold text-foreground">{label}</p>
//           <p className="text-sm italic text-muted-foreground">
//             Image coming soon — drop the file at{" "}
//             <span className="font-mono text-xs not-italic">{src}</span>
//           </p>
//         </div>
//       ) : (
//         <img
//           ref={imgRef}
//           src={src}
//           alt={alt}
//           loading="lazy"
//           onError={() => setFailed(true)}
//           className="mx-auto w-full max-w-[680px] rounded-[12px] object-contain"
//         />
//       )}
//     </div>
//   );
// }