import type { Metadata } from "next";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";

export const metadata: Metadata = {
  title: "Privacy Policy | Alzus Apps",
  description:
    "Privacy Policy covering all mobile apps and games published by Alzus Apps.",
};

interface PolicySectionProps {
  title: string;
  children: React.ReactNode;
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-900 flex justify-center overflow-hidden font-mono px-4 py-20">
      <div className="fixed inset-0 w-full h-full">
        <SparklesCore
          id="tsparticles-privacy"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#D8B4FE"
          speed={1}
        />
      </div>

      <article className="flex w-full max-w-2xl flex-col gap-8 text-purple-100 relative z-20">
        <header className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-100 via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-purple-300 text-sm">
            Effective date: June 15, 2026
          </p>
          <p className="text-purple-200 leading-relaxed">
            At Alzus Apps, we take your privacy seriously. This Privacy Policy
            applies to all mobile apps and games published by Alzus Apps
            (collectively, the &ldquo;Apps&rdquo;) and describes how we collect,
            use, and share information about you when you use them.
          </p>
        </header>

        <PolicySection title="Information We Collect">
          <p>
            We do not collect any personal information directly from you.
            However, our Apps use third-party services that may collect
            information used to identify your device. These services include:
          </p>
          <ul className="flex flex-col gap-1 list-disc pl-6">
            <li>Google AdMob</li>
            <li>Firebase Analytics</li>
            <li>Firebase Crashlytics</li>
            <li>Google Play Billing (for optional in-app purchases)</li>
          </ul>
          <p>
            These services may collect information such as your device type,
            operating system, device identifiers (including an advertising
            identifier), crash diagnostics, and usage data to help us understand
            how users interact with our Apps, keep them stable, and show
            advertisements.
          </p>
        </PolicySection>

        <PolicySection title="How We Use Your Information">
          <p>We use the information collected by third-party services to:</p>
          <ul className="flex flex-col gap-1 list-disc pl-6">
            <li>
              Display advertisements, including optional, opt-in rewarded ads
              that you choose to watch in exchange for in-app rewards.
            </li>
            <li>
              Understand how users interact with our Apps and improve them.
            </li>
            <li>Detect, diagnose, and fix crashes and technical problems.</li>
            <li>
              Deliver and validate optional in-app purchases you choose to make.
            </li>
          </ul>
          <p>
            We do not share your personal information with third parties except
            as described below.
          </p>
        </PolicySection>

        <PolicySection title="Sharing of Your Information">
          <p>
            We may share anonymized usage, diagnostic, and advertising
            information with the third-party service providers that help us
            operate our Apps (Google AdMob, Google Firebase, and Google Play).
            Their handling of data is governed by Google&rsquo;s Privacy Policy
            at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-300 transition-colors"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
          <p>
            In-app purchases are processed entirely by Google Play. We never
            receive or store your payment-card details.
          </p>
          <p>
            We may also share your information with law enforcement or other
            third parties if we are required to do so by law, or if we believe
            that such action is necessary to comply with the law or to protect
            the rights, property, or safety of our users or others.
          </p>
        </PolicySection>

        <PolicySection title="Your Choices">
          <p>
            You can opt out of personalized advertising and reset or limit your
            advertising identifier in your device settings. You can also stop
            all data collection by uninstalling the App.
          </p>
        </PolicySection>

        <PolicySection title="Data Retention">
          <p>
            We do not retain any personal information. Data collected by
            third-party services is subject to their respective data retention
            policies.
          </p>
        </PolicySection>

        <PolicySection title="Children">
          <p>
            Our Apps are intended for a general audience and are not directed at
            children under 13. We do not knowingly collect personal information
            from children.
          </p>
        </PolicySection>

        <PolicySection title="Updates to Our Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time. If we make
            material changes, we will post a notice in the App or update this
            page.
          </p>
        </PolicySection>

        <PolicySection title="Contact Us">
          <p>
            If you have any questions or concerns about this Privacy Policy, you
            can reach us on Telegram at{" "}
            <a
              href="https://t.me/juanszalegria"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-300 transition-colors"
            >
              t.me/juanszalegria
            </a>{" "}
            or by email at{" "}
            <a
              href="mailto:juanszalegria+apps@gmail.com"
              className="underline hover:text-purple-300 transition-colors"
            >
              juanszalegria+apps@gmail.com
            </a>
            .
          </p>
        </PolicySection>

        <footer>
          <Link
            href="/"
            className="text-purple-300 hover:text-purple-100 transition-colors text-sm"
          >
            &larr; Back to home
          </Link>
        </footer>
      </article>
    </main>
  );
}

function PolicySection({ title, children }: PolicySectionProps) {
  return (
    <section className="flex flex-col gap-3 text-purple-200 leading-relaxed">
      <h2 className="text-2xl font-semibold text-purple-100">{title}</h2>
      {children}
    </section>
  );
}
