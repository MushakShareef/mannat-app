import MediaPlaceholder from "./MediaPlaceholder";
import Divider from "./Divider";
import Image from "next/image";

const BENEFITS = [
  "Apne zhn aur aql ko khuda par markooz rakhne me.",
  "Zindgi me mohabbat, aman aur khushi dene me.",
  "Roohani tour par ba-ikhtiyar rooh banne me.",
  "Khuda ki kurbat mehsoos karne me.",
  "Khud me bhut zyada tabdeeli mehsoos karne me.",
  "Apni zindgi ko sada aur kamyab banane me.",
  "Doosron ke saath apne tallukat ko behtar banane me.",
  "Farishta banne ka tajurba karne me.",
];

export default function Music() {
  return (
    <section id="Music" className="scroll-mt-20 bg-panel py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold">
              Music
            </p>
            <h2 className="font-display text-3xl italic text-ivory sm:text-4xl">
              Moosiqi
            </h2>

            <p className="font-urdu mt-6 text-lg text-ivory">
              ہمارے پاس راحت بخش، سکون بخش اور روح افزہ خالص موسیقی کے نغمے اور
              ترانے ہیں۔ جو روح کے لیے مفید ہے۔ موسیقی جو خدائی علم پر مبنی
              ہیں۔ یہ ترانے مددگار ہیں:
            </p>

            <p className="mt-6 leading-relaxed text-ivory-dim">
              Hamare paas rahat bakhsh, sukoon bakhsh aur rooh afza khalis
              mosiqi ke nagme aur tarane hain, jo rooh ke liye mufeed hai.
              Mosiqi jo khudai ilm par mabni hai. Ye tarane madadgar hain:
            </p>

            <ol className="mt-6 space-y-2.5">
              {BENEFITS.map((line, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-ivory-dim leading-relaxed"
                >
                  <span className="font-display italic text-gold">
                    {i + 1}.
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>

            <div className="mt-8">
              <a
                href="#Music"
                className="inline-flex items-center gap-2 border-b border-gold pb-1 text-sm uppercase tracking-[0.2em] text-gold-soft transition-colors hover:border-gold-soft"
              >
                Discover More <span aria-hidden>&rarr;</span>
              </a>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md space-y-6">
            {/* <Image
              src="/images/hero-banner.jpg"
              alt="Mannat banner"
              width={2142}
              height={322}
              className="w-full h-auto"
            /> */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <video
                src="/images/meditation2.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="h-full w-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 sm:mt-20">
        <Divider />
      </div>
    </section>
  );
}
