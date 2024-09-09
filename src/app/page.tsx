"use client";

import React, { useEffect } from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { User, Zap, RefreshCw } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface SocialLinkProps {
  href: string;
  icon: 'github' | 'linkedin' | 'telegram';
}

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-900 flex flex-col items-center justify-center overflow-hidden font-['Space_Mono'] p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold text-purple-100 mb-4 relative z-20 text-center"
      >
        Alzus Apps
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="text-xl md:text-2xl text-purple-200 mb-8 relative z-20 text-center"
      >
        Innovative, Reliable, Built by Experts.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-8 mb-8 relative z-20"
      >
        <FeatureCard icon={<User size={32} />} title="User-Centric" description="Apps designed for you." />
        <FeatureCard icon={<Zap size={32} />} title="Performance" description="Fast and reliable." />
        <FeatureCard icon={<RefreshCw size={32} />} title="Constant Updates" description="Always improving." />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex space-x-4 relative z-20"
      >
        <SocialLink href="https://github.com/zejiran" icon="github" />
        <SocialLink href="https://www.linkedin.com/in/juanszalegria/" icon="linkedin" />
        <SocialLink href="https://t.me/juanszalegria" icon="telegram" />
      </motion.div>

      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#D8B4FE"
          speed={1}
        />
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center p-4 bg-purple-800 bg-opacity-20 rounded-lg backdrop-blur-sm border border-purple-500 border-opacity-30"
    >
      <div className="text-purple-300 mb-2">{icon}</div>
      <h3 className="text-purple-100 text-lg font-semibold mb-1">{title}</h3>
      <p className="text-purple-200 text-sm text-center">{description}</p>
    </motion.div>
  );
}

function SocialLink({ href, icon }: SocialLinkProps) {
  const iconPath =
    icon === 'github'
      ? "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      : icon === 'linkedin'
      ? "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2"
      : "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-purple-300 hover:text-purple-100 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d={iconPath}></path>
      </svg>
    </a>
  );
}
