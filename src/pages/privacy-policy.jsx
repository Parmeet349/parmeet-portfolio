// src/pages/PrivacyPolicy.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const today = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 px-4">
      {/* subtle background orbs */}
      <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10"></div>
      <div className="pointer-events-none fixed -bottom-32 -right-32 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >

        {/* main glass card */}
        <div className="relative bg-white/6 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
          {/* subtle inner glow */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10"></div>

          <header className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">Privacy Policy</h1>
            <p className="mt-2 text-sm text-white/70">Last updated: <strong>{today}</strong></p>
          </header>

          <article className="prose prose-invert max-w-none text-white/90 prose-headings:text-white prose-p:mb-4">
            <p>
              <strong>Tambola Number Caller</strong> (the "App") is developed by <strong>Parmeet Singh Banga</strong>. This Privacy Policy explains how the App handles information and device permissions.
            </p>

            <h2>1. Information We Do Not Collect</h2>
            <p>
              Tambola Number Caller does <strong>not collect, store, or share any personal data</strong>. The app does not require login, registration, or any user identity.
            </p>

            <h2>2. Device Permissions</h2>
            <p>The App may request the following permissions:</p>
            <ul>
              <li><strong>Internet Access</strong> – Required for loading ads from Google AdMob.</li>
              <li><strong>Vibration</strong> – Optional vibration feedback during gameplay.</li>
            </ul>
            <p>No user data is collected or transmitted as part of requesting these permissions.</p>

            <h2>3. Third-Party Services (AdMob)</h2>
            <p>
              The App uses <strong>Google AdMob</strong> to display advertisements. Google may collect data necessary to serve and optimize ads, such as:
            </p>
            <ul>
              <li>Advertising ID</li>
              <li>Approximate location</li>
              <li>Performance metrics (e.g., ad impressions & crashes)</li>
            </ul>
            <p>
              Data collection by Google is governed by Google’s own privacy policies. Learn more:
              {" "}
              <a
                className="text-blue-300 hover:underline"
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ad Policies
              </a>
              .
            </p>

            <h2>4. Children’s Privacy</h2>
            <p>
              This App is not directed to children under 13, and no data is knowingly collected from minors.
            </p>

            <h2>5. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date.
            </p>

            <h2>6. Contact</h2>
            <p>
              For any privacy-related questions or requests, please contact:
              <br />
              <a className="text-blue-300 hover:underline" href="mailto:parmeet349@gmail.com">
                parmeet349@gmail.com
              </a>
            </p>
          </article>
        </div>
      </motion.div>
    </div>
  );
}
