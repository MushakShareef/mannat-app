import Image from "next/image";
import Divider from "./Divider";

export default function Hero() {
  return (
    <section id="top" className="relative">

      {/* Background */}
      <div className="relative">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/test2.png"
            alt="Hero Banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10">

          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

            <div className="flex min-h-screen items-center">

              <div className="max-w-2xl py-28">

                <div className="mb-8">

                  <p className="text-xs sm:text-sm uppercase tracking-[0.6em] font-semibold text-gold">
                    DEEN-E-NAFS
                  </p>

                  <div className="mt-4 text-gold text-xl">
                    ✦
                  </div>

                </div>

                <div className="relative inline-block">

                  {/* Soft Divine Glow */}
                  <div
                    className="
                      absolute
                      -inset-8
                      -z-10
                      rounded-full
                      bg-gold/10
                      blur-3xl
                    "
                  />

                  <h1
                    className="
                      font-display
                      italic
                      text-4xl
                      sm:text-5xl
                      lg:text-7xl
                      leading-[1.1]
                      tracking-tight
                      text-ivory
                      drop-shadow-2xl
                    "
                  >
                    In the Name of Allah,
                    <br />
                    The Creator of the Universe
                  </h1>

                </div>

                <p className="
                mt-8
                text-base
                sm:text-lg
                leading-9
                text-ivory/95
                max-w-xl
                ">
                  Nooraani Kalemaat aur Rabta-e-Saltanat course
                  talabaa ko buraiyon par fatah haasil karne ke
                  qaabil banaata hai. Yeh mohabbat, aman,
                  paakizgi aur khushi jaise ilaahi iqdaar ka
                  ehsaas deta hai.
                </p>

                <div className="mt-10 max-w-lg">

                  <div className="flex items-start gap-3">

                    <span className="text-5xl text-gold leading-none">
                      ❝
                    </span>

                    <p className="text-lg italic leading-8 text-gold-soft">
                      Peace begins with knowing the Creator
                      <br />
                      and knowing yourself.
                    </p>

                  </div>

                </div>

                <a
                  href="#AboutUs"
                  className="
                    mt-10
                    inline-flex
                    items-center
                    gap-3
                    rounded-lg
                    border
                    border-gold
                    bg-gold/10
                    px-8
                    py-4
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.25em]
                    text-gold
                    backdrop-blur-sm
                    transition-all
                    duration-500
                    hover:scale-105
                    hover:bg-gold
                    hover:text-deep
                    hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]
                  "
                >
                  Discover More
                  <span>→</span>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Noor-e-Ilahi */}

      <div className="bg-deep py-20">

        <div className="mx-auto max-w-5xl px-6">

          <Image
            src="/images/nooreillahi.webp"
            alt="Noor-e-Ilahi"
            width={900}
            height={500}
            className="mx-auto rounded-xl shadow-2xl"
          />

        </div>

      </div>

      <Divider />

    </section>
  );
}