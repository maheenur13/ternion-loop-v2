import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-blue-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-blue-200/50">
              <span className="inline-flex bg-gradient-to-r from-[#027efc] to-[#99ccff] bg-clip-text text-transparent">
                Building the Future
              </span>
            </div>
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-blue-200),var(--color-gray-50),var(--color-blue-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-5xl font-semibold text-transparent md:text-7xl"
              data-aos="fade-up"
            >
              Ternion Loop
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-blue-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Building innovative solutions that transform industries. From sports management to vehicle services and education technology.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-[#027efc] to-[#3399ff] bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/0.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Explore Our Products
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Connect With Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
