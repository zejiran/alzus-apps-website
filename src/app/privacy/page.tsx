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
            Effective date: January 1, 2025
          </p>
          <p className="text-purple-200">
            This Privacy Policy applies to all mobile apps and games published
            by Alzus Apps (collectively, the &ldquo;Apps&rdquo;). It explains
            how information is handled when you use any of our Apps.
          </p>
        </header>

        <PolicySection title="Information We Collect">
          We do not collect any personal information directly from you. However,
          our Apps use third-party services that may collect information used to
          identify you. These services, such as Google AdMob and Firebase
          Analytics, gather data including device type, operating system, device
          identifiers, and usage metrics.
        </PolicySection>

        <PolicySection title="How We Use Your Information">
          The data collected by these third-party services is used to display
          relevant ads, improve our Apps, and analyze user interaction patterns
          so we can enhance the overall experience.
        </PolicySection>

        <PolicySection title="Sharing of Your Information">
          We may share anonymized information with third-party service
          providers. We may also disclose information when legally required or
          when necessary to protect the rights, safety, or property of our users
          and others.
        </PolicySection>

        <PolicySection title="Your Choices">
          You can disable personalized ads through your device settings and opt
          out of data collection via your device preferences or the opt-out
          mechanisms offered by the relevant third-party services.
        </PolicySection>

        <PolicySection title="Data Retention">
          We do not retain any personal information ourselves. Data collected by
          third-party services is subject to their respective data retention
          policies.
        </PolicySection>

        <PolicySection title="Children's Privacy">
          Our Apps are not directed to children under the age of 13, and we do
          not knowingly collect personal information from children. If you
          believe a child has provided us with personal information, please
          contact us so we can take appropriate action.
        </PolicySection>

        <PolicySection title="Updates to Our Privacy Policy">
          We may update this Privacy Policy from time to time. Material changes
          will be communicated via email or an in-app notice. Continued use of
          our Apps after an update constitutes acceptance of the revised policy.
        </PolicySection>

        <PolicySection title="Contact Us">
          If you have any questions about this Privacy Policy, you can reach us
          on Telegram at{" "}
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
            href="mailto:juanszalegria@gmail.com"
            className="underline hover:text-purple-300 transition-colors"
          >
            juanszalegria@gmail.com
          </a>
          .
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
    <section className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-purple-200 leading-relaxed">{children}</p>
    </section>
  );
}
