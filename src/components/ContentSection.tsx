import Image from "next/image";
import MediaPlaceholder from "./MediaPlaceholder";
import Divider from "./Divider";

type MediaSpec = {
  type?: "image" | "video";
  label: string;
  ratio?: string;
  src?: string; // <-- NEW: path to real file in /public, e.g. "/images/about-us.jpg"
};

type ContentSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  urduParagraphs: string[];
  romanParagraphs: string[];
  ctaLabel?: string;
  ctaHref?: string;
  media: MediaSpec[];
  reverse?: boolean;
  tone?: "panel" | "deep";
};

export default function ContentSection({
  id,
  eyebrow,
  title,
  urduParagraphs,
  romanParagraphs,
  ctaLabel,
  ctaHref,
  media,
  reverse = false,
  tone = "deep",
}: ContentSectionProps) {
  return (
    <><section
      id={id}
      className={`scroll-mt-20 py-12 sm:py-16 ${tone === "panel" ? "bg-panel" : "bg-deep"}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          className={`
            grid
            lg:grid-cols-2
            items-center
            gap-10
            lg:gap-20
            ${
              reverse
                ? "lg:[&>*:first-child]:order-2"
                : ""
            }
          `}
        >
          <div>
            <p
              className="
                text-sm
                uppercase
                tracking-[0.45em]
                font-semibold
                text-gold
              "
            >
              {eyebrow}
            </p>
            <h2
              className="
                mt-2
                font-display
                italic
                text-4xl
                sm:text-5xl
                leading-tight
                tracking-tight
                text-ivory
                drop-shadow-lg
              "
            >
              {title}
            </h2>

            <div className="mt-5 h-px w-28 bg-gold/40"></div>

            <div className="mt-6 space-y-3">
              {urduParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="
                    font-urdu
                    text-2xl
                    leading-[2.2]
                    text-ivory
                  "
                >
                  {p}
                </p>
              ))}
            </div>
            
            <div className="mt-6 space-y-4">
              {romanParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="
                    text-base
                    leading-8
                    text-ivory/80
                  "
                >
                  {p}
                </p>
              ))}
            </div>

            {ctaLabel && ctaHref && (
              <div className="mt-8">
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 border-b border-gold pb-1 text-sm uppercase tracking-[0.2em] text-gold-soft transition-colors hover:border-gold-soft"
                >
                {ctaLabel}
                <span aria-hidden>&rarr;</span>
              </a>)
          </div>
          
          )}
        </div>
        

        <div
          className={`grid gap-6 ${media.length > 1 ? "grid-cols-2" : "grid-cols-1"} mx-auto w-full max-w-md`}
        >
          {media.map((m, i) => {
            const wrapperClass = media.length > 1 && i % 2 === 1 ? "mt-8" : undefined;
            const ratio = m.ratio ?? "aspect-[3/4]";

            // If a real src is provided, render actual image/video
            if (m.src) {
              if (m.type === "video") {
                return (
                  <div
                    key={i}
                    className={`relative ${ratio} w-full overflow-hidden rounded-sm ${wrapperClass ?? ""}`}
                  >
                    <video
                      src={m.src}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover rounded-2xl"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  className={`
                  relative
                  ${ratio}
                  w-full
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gold/20
                  shadow-2xl
                  transition-all
                  duration-700
                  hover:scale-[1.03]
                  hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]
                  ${wrapperClass ?? ""}
                  `}
                >
                  <Image
                      src={m.src}
                      alt={m.label}
                      fill
                      className="
                          object-cover
                          transition-all
                          duration-700
                          hover:scale-105
                          hover:brightness-110
                      "
                  />
                </div>
              );
            }

            // Otherwise, keep showing the placeholder
            return (
              <MediaPlaceholder
                key={i}
                type={m.type ?? "image"}
                label={m.label}
                ratio={ratio}
                className={wrapperClass} />
            );
          })}
        </div>
      </div>
      </div>
    </section>
    <div className="mt-16 sm:mt-30">
      <Divider />
    </div></>
  );
}
