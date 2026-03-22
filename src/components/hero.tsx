"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, ArrowRight, Code2, Server, Smartphone } from "lucide-react";
import { Typewriter } from "react-simple-typewriter"; //  install: npm i react-simple-typewriter

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30 px-4"
    >
      {/* Optional subtle background effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03]" />
      </div>

      <div className="relative z-10 max-w-5xl w-full text-center space-y-8">
        {/* Profile Image + Stack hint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-primary/60 to-accent opacity-70 blur-xl group-hover:opacity-100 transition duration-500" />
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-primary/20">
              <Image
                src="/projects/officepic.jpeg"
                alt="Samuel Aigbefo"
                fill
                sizes="160px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Headline + Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Samuel Aigbefo
            </span>
          </h1>

          <p className="mt-4 text-xl sm:text-2xl font-medium text-muted-foreground">
            Full-Stack Developer crafting{" "}
            <span className="text-primary font-semibold">
              <Typewriter
                words={[
                  "scalable web apps",
                  "modern APIs & backends",
                  "beautiful UIs",
                  "end-to-end solutions",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1800}
              />
            </span>
          </p>
        </motion.div>

        {/* Quick value prop / mini stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border">
            <Code2 className="w-4 h-4" /> Frontend
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border">
            <Server className="w-4 h-4" /> Backend
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border">
            <Smartphone className="w-4 h-4" /> Mobile-ready
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Button size="lg" className="group min-w-[180px]">
            <a href="#contact">
              Let's Work Together
              
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="min-w-[180px] group"
            
          >
            <a href="/projects/resume.pdf" download>
              Download Resume
              
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}