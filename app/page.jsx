import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <h1 className="h1 mb-6">
              hello I’m <br /> <span className="text-accent">Ahmed Hakim</span>{" "}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I’m a self-taught junior front-end developer with about 1.5 years
              of focused learning. I build modern interfaces with HTML, CSS,
              JavaScript/TypeScript and React.js/Next.js, focusing on clean,
              reusable components and responsive layouts that feel ready for
              real-world use.
            </p>

            {/* btn and socials */}
            <div className="mt-6 flex flex-col gap-6 xl:items-start">
              {/* buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 xl:justify-start">
                {/* Download CV */}
                <Button
                  asChild
                  size="lg"
                  className="flex items-center gap-2 rounded-lg bg-accent px-6 py-4 text-sm font-semibold text-primary 
               hover:bg-accent/90 transition-colors duration-200"
                >
                  <a href="/assets/Ahmed_Hakim_Frontend_CV.pdf" download>
                    <FiDownload className="text-lg" />
                    <span>Download CV</span>
                  </a>
                </Button>

                {/* View work */}
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-lg border-white/30 bg-transparent px-6 py-4 text-sm font-semibold text-white/80 
               hover:border-accent hover:text-white/90 transition-colors duration-200"
                >
                  <a href="/work">View work</a>
                </Button>
              </div>

              {/* socials */}
              <div className="flex flex-col items-center gap-3 xl:flex-row xl:items-center">
                <span className="text-xs uppercase tracking-[0.2em] text-white/50 text-center xl:text-left">
                  Connect
                </span>
                <Social
                  containerStyles="flex gap-4 justify-center"
                  iconStyles="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center 
                text-white/70 text-base hover:border-accent hover:text-accent hover:-translate-y-[2px]
                transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
