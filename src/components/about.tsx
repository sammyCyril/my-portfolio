"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { techStack } from "../app/data/techStack"; // assuming this is an array of strings like ["React", "Next.js", ...]
import { Code2, Database, Server, Globe, Smartphone, Cpu } from "lucide-react"; // or use a tech-specific icon map

// Optional: map tech names to icons for visual pop (expand as needed)
const techIcons: Record<string, React.ReactNode> = {
  React: <Code2 className="w-4 h-4" />,
  "Next.js": <Globe className="w-4 h-4" />,
  Node: <Server className="w-4 h-4" />,
  TypeScript: <Cpu className="w-4 h-4" />,
  Tailwind: <Database className="w-4 h-4" />, // placeholder
  // Add more for your actual stack
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center md:justify-start"
          >
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 opacity-0 group-hover:opacity-70 blur-2xl transition-opacity duration-700" />
              
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border-4 border-background/80">
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

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
            </h2>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a full stack developer, passionate about building scalable, high performance web applications that feel intuitive and delightful. 
              With 4+ years of experience, I focus on clean code, strong architecture, and user centered design turning complex problems into smooth, reliable experiences.
            </p>

            {/* Tech Stack - with icons */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">My Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-muted/70 border border-muted-foreground/20 text-sm font-medium hover:bg-muted transition-colors"
                  >
                    {techIcons[tech] || <Code2 className="w-4 h-4" />}
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Optional Stats - uncomment & customize */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">4+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}