"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { User, Zap, RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IconCardProps {
  iconSrc: string;
  alt: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SOCIAL_ICON_PATHS = {
  telegram: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
  github:
    "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
  googleplay: "M5 3l14 9-14 9V3z",
  email: "M2 5h20v14H2z M2 5l10 8 10-8",
} as const;

const SOCIAL_ICON_LABELS = {
  telegram: "Telegram",
  github: "GitHub",
  googleplay: "Google Play",
  email: "Email",
} as const;

type SocialIcon = keyof typeof SOCIAL_ICON_PATHS;

interface SocialLinkProps {
  href: string;
  icon: SocialIcon;
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-900 flex flex-col items-center justify-center overflow-hidden font-mono px-4 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="rounded-full shadow-lg bg-purple-900/50 p-4 mb-8 border border-purple-500 backdrop-blur-lg relative z-20"
        style={{
          width: "150px",
          height: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconCard iconSrc="/logo.webp" alt="Alzus Apps Icon" />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-100 via-purple-200 to-purple-400 bg-clip-text text-transparent mb-4 relative z-20 text-center"
      >
        Alzus Apps
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="text-xl md:text-2xl text-purple-200 mb-8 relative z-20 text-center"
      >
        Innovative, Reliable, Built by Experts.
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-8 mb-8 relative z-20"
      >
        <FeatureCard
          icon={<User size={32} />}
          title="User-Centric"
          description="Apps designed for you."
        />
        <FeatureCard
          icon={<Zap size={32} />}
          title="Performance"
          description="Fast and reliable."
        />
        <FeatureCard
          icon={<RefreshCw size={32} />}
          title="Constant Updates"
          description="Always improving."
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="flex space-x-4 relative z-20"
      >
        <SocialLink href="https://t.me/juanszalegria" icon="telegram" />
        <SocialLink href="https://github.com/zejiran" icon="github" />
        <SocialLink
          href="https://play.google.com/store/apps/dev?id=6019444648349159980"
          icon="googleplay"
        />
        <SocialLink href="mailto:juanszalegria@gmail.com" icon="email" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        className="mt-8 relative z-20"
      >
        <Link
          href="/privacy"
          className="text-purple-400 hover:text-purple-200 transition-colors text-sm"
        >
          Privacy Policy
        </Link>
      </motion.div>

      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#D8B4FE"
          speed={1}
        />
      </div>
    </main>
  );
}

function IconCard({ iconSrc, alt }: IconCardProps) {
  return (
    <Image
      src={iconSrc}
      alt={alt}
      width={150}
      height={150}
      className="rounded-full object-cover"
    />
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
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={SOCIAL_ICON_LABELS[icon]}
      className="text-purple-300 hover:text-purple-100 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d={SOCIAL_ICON_PATHS[icon]}></path>
      </svg>
    </a>
  );
}
