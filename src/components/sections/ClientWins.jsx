import ImageCard from "@/components/ui/ImageCard";

const BOARD = "https://canva.link/5z1ko7nsaf4tlfd";

const TESTIMONIAL_IMAGES = [
  { src: "/testimonials/Capture10.PNG", alt: "Client testimonial 1" },
  { src: "/testimonials/Capture11.PNG", alt: "Client testimonial 2" },
  { src: "/testimonials/Capture12.PNG", alt: "Client testimonial 3" },
  { src: "/testimonials/Capture13.PNG", alt: "Client testimonial 4" },
  { src: "/testimonials/Capture.PNG", alt: "Client testimonial 7" },
  { src: "/testimonials/Capture1.PNG", alt: "Client testimonial 8" },
  { src: "/testimonials/Capture2.PNG", alt: "Client testimonial 9" },
  { src: "/testimonials/Capture3.PNG", alt: "Client testimonial 10" },
];

const WINS_IMAGES = [
  { src: "/wins/Screenshot 2026-10-07 at 19.38.39.png", alt: "The Growth Hour Collective win" },
  { src: "/wins/Screenshot 2026-10-07 at 19.38.46.png", alt: "Mecca B. win" },
  { src: "/wins/Screenshot 2026-10-07 at 19.38.54.png", alt: "Erica A. win" },
  { src: "/wins/Screenshot 2026-10-07 at 19.39.01.png", alt: "Client win 4" },
  { src: "/wins/Screenshot 2026-10-07 at 19.39.11.png", alt: "Client win 5" },
];

export default function ClientWins() {
  return (
    <section className="bg-secondary px-6 py-24 text-secondary-foreground">
      <div className="mx-auto max-w-6xl text-center">
        <p className="eyebrow">Recent client wins</p>
        <h2 className="mt-3 text-4xl md:text-5xl">
          Proof that the system works.
        </h2>
        <a
          href={BOARD}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
        >
          View the full client wins board →
        </a>
      </div>

      {/* Testimonials — each card hugs its image's natural shape */}
      <div className="mx-auto mt-12 grid max-w-6xl items-start gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIAL_IMAGES.map((t, i) => (
          <ImageCard
            key={t.src}
            src={t.src}
            alt={t.alt}
            label={`Client Testimonial ${i + 1}`}
          />
        ))}
      </div>


      <div className="mx-auto max-w-6xl text-center mt-21">
        <p className="eyebrow">Recent client reviews</p>
        <h2 className="mt-3 text-4xl md:text-5xl">
          Proof that the system works.
        </h2>
        <a
          href={BOARD}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
        >
          View the full client reviews board →
        </a>
      </div>

      {/* Wins — same natural-shape behavior */}
      <div className="mx-auto mt-6 grid max-w-6xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {WINS_IMAGES.map((w, i) => (
          <ImageCard
            key={w.src}
            src={w.src}
            alt={w.alt}
            label={`Client Win ${i + 1}`}
            // className="h-[900px] w-[900px]"
          />
        ))}
      </div>
    </section>
  );
}






// import ImageCard from "@/components/ui/ImageCard";

// const BOARD = "https://canva.link/5z1ko7nsaf4tlfd";

// const TESTIMONIAL_IMAGES = [
//     { src: "/testimonials/Capture10.PNG", alt: "Client testimonial 1" },
//     { src: "/testimonials/Capture11.PNG", alt: "Client testimonial 2" },
//     { src: "/testimonials/Capture12.PNG", alt: "Client testimonial 3" },
//     { src: "/testimonials/Capture13.PNG", alt: "Client testimonial 4" },
//     // { src: "/testimonials/Capture14.PNG", alt: "Client testimonial 5" },
//     // { src: "/testimonials/Capture15.PNG", alt: "Client testimonial 6" },
//     { src: "/testimonials/Capture.PNG", alt: "Client testimonial 7" },
//     { src: "/testimonials/Capture1.PNG", alt: "Client testimonial 8" },
//     { src: "/testimonials/Capture2.PNG", alt: "Client testimonial 9" },
//     { src: "/testimonials/Capture3.PNG", alt: "Client testimonial 10" },
//     // { src: "/testimonials/Capture4.PNG", alt: "Client testimonial 11" },
//     // { src: "/testimonials/Capture5.PNG", alt: "Client testimonial 12" },
// ];

// const WINS_IMAGES = [
//     { src: "/wins/Screenshot 2026-10-07 at 19.38.39.png", alt: "The Growth Hour Collective win" },
//     { src: "/wins/Screenshot 2026-10-07 at 19.38.46.png", alt: "Mecca B. win" },
//     { src: "/wins/Screenshot 2026-10-07 at 19.38.54.png", alt: "Erica A. win" },
//     { src: "/wins/Screenshot 2026-10-07 at 19.39.01.png", alt: "Client win 4" },
//     { src: "/wins/Screenshot 2026-10-07 at 19.39.11.png", alt: "Client win 5" },
// ];

// export default function ClientWins() {
//     return (
//         <section className="bg-secondary px-6 py-24 text-secondary-foreground">
//             <div className="mx-auto max-w-6xl text-center">
//                 <p className="eyebrow">Recent client wins</p>
//                 <h2 className="mt-3 text-4xl md:text-5xl">
//                     Proof that the system works.
//                 </h2>
//                 <a
//                     href={BOARD}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
//                 >
//                     View the full client wins board →
//                 </a>
//             </div>

//             {/* Testimonials — 9 image cards */}
//             <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-5">
//                 {TESTIMONIAL_IMAGES.map((t, i) => (
//                     <ImageCard
//                         key={t.src}
//                         src={t.src}
//                         alt={t.alt}
//                         label={`Client Testimonial ${i + 1}`}
//                     />
//                 ))}
//             </div>

//             {/* Wins — 5 image cards */}
//             <div className="mx-auto mt-6 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
//                 {WINS_IMAGES.map((w, i) => (
//                     <ImageCard
//                         key={w.src}
//                         src={w.src}
//                         alt={w.alt}
//                         label={`Client Win ${i + 1}`}
//                     />
//                 ))}
//             </div>
//         </section>
//     );
// }