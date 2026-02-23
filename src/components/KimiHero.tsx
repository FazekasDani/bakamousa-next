"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const statements = [
  "When I couldn't afford rent anymore",
  "September 11, 2001",
  "When the algorithm chose my news",
  "After COVID, nothing felt the same",
  "The 2008 crash — everything after was pretend",
  "When my kids stopped trusting institutions",
  "Brexit. It broke something.",
  "When facts became opinions",
  "Climate anxiety hit me all at once",
  "The day I deleted social media",
  "When groceries doubled in price",
  "AI started writing the news",
];

export default function KimiHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const localTriggers = useRef<ScrollTrigger[]>([]);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % statements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Entrance animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Carousel cards entrance
      if (carouselRef.current) {
        const cards = carouselRef.current.querySelectorAll(".statement-card");
        gsap.fromTo(
          cards,
          { rotateX: 90, opacity: 0 },
          { rotateX: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "expo.out", delay: 0.5 }
        );
      }

      // Prompt section entrance
      if (promptRef.current) {
        const heading = promptRef.current.querySelector("h1");
        const input = promptRef.current.querySelector(".input-wrapper");

        gsap.fromTo(
          heading,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "expo.out", delay: 0.8 }
        );

        gsap.fromTo(
          input,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "expo.out", delay: 1.2 }
        );
      }

      // Scroll indicator
      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 2 }
      );

      // Scroll-driven parallax
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          if (carouselRef.current) {
            gsap.to(carouselRef.current, { y: -self.progress * 100, duration: 0.1 });
          }
          if (promptRef.current) {
            gsap.to(promptRef.current, {
              y: -self.progress * 50,
              opacity: 1 - self.progress * 0.5,
              duration: 0.1,
            });
          }
        },
      });
      localTriggers.current.push(st);
    });

    return () => {
      localTriggers.current.forEach((st) => st.kill());
      localTriggers.current = [];
      ctx.revert();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setInputValue("");
      }, 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-off-white to-white" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-warm-grey rounded-full blur-3xl opacity-50 animate-[float_6s_ease-in-out_infinite]" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-off-white rounded-full blur-3xl opacity-40 animate-[float_6s_ease-in-out_infinite]"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      {/* Diagonal divider SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <line x1="55" y1="0" x2="45" y2="100" stroke="var(--stone)" strokeWidth="0.1" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="relative z-10 w-full px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center max-w-7xl mx-auto">
          {/* Left side - Statement Carousel */}
          <div ref={carouselRef} className="relative h-[400px] lg:h-[500px]" style={{ perspective: "1200px" }}>
            <div className="relative w-full h-full flex items-center justify-center">
              {statements.map((statement, index) => {
                const offset = index - currentIndex;
                const absOffset = Math.abs(offset);
                const isActive = index === currentIndex;

                return (
                  <div
                    key={index}
                    className={`statement-card absolute w-full max-w-lg px-8 py-6 transition-all duration-700 ${
                      isActive ? "z-30" : absOffset === 1 ? "z-20" : "z-10"
                    }`}
                    style={{
                      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      transform: `
                        translateY(${offset * 60}px)
                        rotateX(${offset * -15}deg)
                        scale(${isActive ? 1 : absOffset === 1 ? 0.9 : 0.8})
                      `,
                      opacity: isActive ? 1 : absOffset === 1 ? 0.5 : 0.2,
                      filter: isActive ? "none" : "blur(2px)",
                    }}
                  >
                    <p
                      className={`text-2xl lg:text-3xl font-medium leading-snug transition-colors duration-500 ${
                        isActive ? "text-ink" : "text-stone"
                      }`}
                    >
                      {statement}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Carousel indicators */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
              {statements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-ink w-6"
                      : "bg-stone hover:bg-earth w-1.5"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Input prompt */}
          <div ref={promptRef} className="flex flex-col items-start lg:items-end text-left lg:text-right">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-8 text-ink">
              When did the world
              <br />
              <span className="text-highlight">start changing</span> for you?
            </h1>

            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="input-wrapper relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Share your moment..."
                  disabled={isSubmitted}
                  className="w-full px-6 py-4 pr-14 bg-white border border-stone rounded-full text-base text-ink placeholder:text-earth focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/10 transition-all duration-300 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitted || !inputValue.trim()}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                    isSubmitted
                      ? "bg-green-600 text-white"
                      : "bg-ink text-white hover:bg-charcoal disabled:opacity-30 disabled:cursor-not-allowed"
                  }`}
                >
                  {isSubmitted ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </div>
              {isSubmitted && (
                <p className="mt-3 text-sm text-green-700 animate-[fade-in-up_0.5s_ease-out_forwards]">
                  Thank you for sharing your moment.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-earth"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
