import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 px-4">
      {/* Background glows */}
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10"></div>
      <div className="pointer-events-none fixed -bottom-32 -right-32 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-blue-300 transition"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>

        {/* Glass Card */}
        <div className="relative bg-white/6 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10"></div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-white/70 mb-6">
            Last updated: <strong>{today}</strong>
          </p>

          {/* Content */}
          <article className="prose prose-invert max-w-none text-white/90 prose-headings:text-white prose-p:mb-4">
            <p>
              <strong>Tambola Number Caller (Housie)</strong> (“the App”) is
              developed and owned by <strong>Parmeet Singh Banga</strong>{" "}
              (“we”, “our”, “us”). We respect your privacy. This Privacy Policy
              explains what information we collect, how it is used, and your
              rights regarding your data.
            </p>

            <h2>1. No Personal Data Collection</h2>
            <p>
              We <strong>do not collect, store, process, or share any personal
              or sensitive user data</strong>.
            </p>
            <ul>
              <li>No account creation or login is required.</li>
              <li>We do not collect your name, email, phone number, or address.</li>
              <li>We do not collect precise location data.</li>
              <li>We do not store any user profiles on our servers.</li>
            </ul>
            <p>
              When you download and use the App, all activity remains on your
              device, except for data that may be processed by third-party
              services such as ad networks (described below).
            </p>

            <h2>2. Advertising Disclosure (AdMob)</h2>
            <p>
              The App displays advertisements using{" "}
              <strong>Google AdMob</strong>. While we do not personally collect
              or store user data, AdMob may automatically collect certain
              information for the purpose of showing and measuring ads.
            </p>
            <p>AdMob may collect, for example:</p>
            <ul>
              <li>IP address</li>
              <li>Advertising ID (AAID / IDFA)</li>
              <li>Device information (such as model, OS version)</li>
              <li>App usage information and basic performance metrics</li>
              <li>Approximate location (e.g., city or region)</li>
            </ul>
            <p>
              This data collection and use is governed by Google’s own privacy
              policy:
            </p>
            <p>
              <a
                className="text-blue-300 hover:underline"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
            </p>
            <p>
              You can manage or limit personalized advertising on your device
              by changing your system settings:
            </p>
            <ul>
              <li>
                <strong>Android:</strong> Settings &gt; Google &gt; Ads &gt;{" "}
                “Opt out of Ads Personalization” (or similar wording depending
                on your version).
              </li>
            </ul>

            <h2>3. No Gambling or Real-Money Rewards</h2>
            <p>
              <strong>Tambola Number Caller (Housie)</strong> is a utility app
              that generates random numbers for offline Tambola/Housie games.
            </p>
            <ul>
              <li>
                The App does <strong>not</strong> offer, enable, or facilitate
                real-money gambling.
              </li>
              <li>
                The App does <strong>not</strong> provide cash prizes or
                monetary rewards.
              </li>
              <li>
                The App is intended purely for entertainment and number calling
                during offline games with family, friends, or events.
              </li>
            </ul>
            <p>
              Any use of the App in connection with money, prizes, or wagers is
              solely the responsibility of the user and is not encouraged or
              supported by us.
            </p>

            <h2>4. Third-Party Services Used</h2>
            <p>
              We use the following third-party service within the App:
            </p>
            <ul>
              <li>
                <strong>Google AdMob</strong> – for displaying ads inside the
                App. You can read Google’s privacy policy here:{" "}
                <a
                  className="text-blue-300 hover:underline"
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy
                </a>
              </li>
            </ul>
            <p>
              We do not integrate any other analytics SDKs or third-party
              tracking tools beyond what is required for advertising.
            </p>

            <h2>5. Children’s Privacy</h2>
            <p>
              While the App may be used in family or group settings, it is not
              specifically directed at children under the age of 13.
            </p>
            <p>
              We do not knowingly collect personal data from children. If you
              believe that a child has provided personal information through the
              App, please contact us, and we will take steps to delete such
              information if it is within our control.
            </p>

            <h2>6. Security</h2>
            <p>
              Since we do not collect or store personal data on our own servers,
              there is no user database associated with the App. Any data
              processed by third-party services (such as Google AdMob) is
              handled according to their respective policies and security
              measures.
            </p>

            <h2>7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do,
              we will revise the “Last updated” date at the top of this page.
              The latest version will always be available at this URL.
            </p>
            <p>
              We encourage you to review this Privacy Policy periodically to
              stay informed about how your information is handled.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              the App, you can contact us at:
            </p>
            <p>
              Email:{" "}
              <a
                className="text-blue-300 hover:underline"
                href="mailto:bangaparmeet.ca@gmail.com"
              >
                bangaparmeet.ca@gmail.com
              </a>
            </p>
          </article>
        </div>
      </motion.div>
    </div>
  );
}
