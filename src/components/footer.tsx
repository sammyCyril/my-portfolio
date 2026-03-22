"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center gap-6">

        {/* Name */}
        <h2 className="text-lg font-semibold">
          Samuel Aigbefo
        </h2>

        {/* Social Links */}
        <div className="flex items-center gap-8">

  <Link
    href="https://www.linkedin.com/in/aigbefosamuel/"
    target="_blank"
    className="flex flex-col items-center text-muted-foreground hover:text-primary transition"
  >
    <Linkedin className="w-5 h-5" />
    <span className="text-xs mt-1">LinkedIn</span>
  </Link>

  <Link
    href="https://x.com/Samcyril_"
    target="_blank"
    className="flex flex-col items-center text-muted-foreground hover:text-primary transition"
  >
    <Twitter className="w-5 h-5" />
    <span className="text-xs mt-1">Twitter</span>
  </Link>

  <Link
    href="https://github.com/sammyCyril"
    target="_blank"
    className="flex flex-col items-center text-muted-foreground hover:text-primary transition"
  >
    <Github className="w-5 h-5" />
    <span className="text-xs mt-1">GitHub</span>
  </Link>

</div>

        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} Samuel Aigbefo. All rights reserved.
        </p>

      </div>
    </footer>
  );
}