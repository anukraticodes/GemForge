"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Github, Linkedin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-12">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
  <span className="text-blue-500">G</span>
  <span className="text-red-500">e</span>
  <span className="text-yellow-500">m</span>
  <span className="text-blue-500">F</span>
  <span className="text-green-500">o</span>
  <span className="text-red-500">r</span>
  <span className="text-yellow-500">g</span>
  <span className="text-blue-500">e</span>
</h1>

            <p className="text-lg mb-4 leading-relaxed text-muted-foreground">
              <strong>GemForge</strong> is an AI-powered code generation tool designed to bridge the gap between natural language and production-ready UI code.
              Built using <span className="font-semibold text-primary">Google Gemini</span>, <span className="font-semibold text-primary">Firebase Genkit</span>, and <span className="font-semibold text-primary">Tailwind CSS</span>, it empowers developers to create HTML, React, or JavaScript components instantly from simple prompts.
            </p>

            <p className="text-lg mb-4 leading-relaxed text-muted-foreground">
              Whether you're a beginner learning frontend technologies or a seasoned developer building MVPs and prototypes, GemForge streamlines the process by combining
              <span className="font-semibold text-primary"> AI innovation </span> with
              <span className="font-semibold text-primary"> Google's powerful developer ecosystem</span>.
            </p>

            <p className="text-lg mb-4 leading-relaxed text-muted-foreground">
              GemForge is built for the <strong>Google Developer Groups (GDG)</strong> community as a showcase of what’s possible with Google’s AI-first development tools.
            </p>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold mb-2">About the Creator</h2>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">
                Hi, I’m <strong>Anukrati Chaturvedi</strong>, a passionate developer and builder. This project is a result of my exploration into generative AI, developer tooling, and the Google ecosystem. 
                I believe in making technology more accessible, and GemForge is one step in that direction.
              </p>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2">Connect with me</h3>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://github.com/anukraticodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/anukratichaturvedi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/3">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <Image
                src="/me.jpg" // Replace with actual path
                alt="Anukrati Chaturvedi"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} GemForge. Powered by Google Gemini, built by Anukrati.
      </footer>
    </div>
  );
}
