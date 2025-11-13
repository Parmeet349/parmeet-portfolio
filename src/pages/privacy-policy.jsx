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
              <strong>Tambola Number Caller</strong> (“the App”) is developed by{" "}
              <strong>Parmeet Singh Banga</strong>. This policy explains how the App handles
              data and permissions.
            </p>

            <h2>1. Information We Do Not Collect</h2>
            <p>
              The app does <strong>not collect, store, or share any personal data</strong>.
              No login or user identity is required.
            </p>

            <h2>2. Device Permissions</h2>
            <p>The app may request:</p>
            <ul>
              <li><strong>Internet Access</strong> – for loading AdMob ads</li>
              <li><strong>Vibration</strong> – optional gameplay feedback</li>
            </ul>

            <h2>3. Third-Party Services (AdMob)</h2>
            <p>Google AdMob may collect:</p>
            <ul>
              <li>Advertising ID</li>
              <li>Approximate location</li>
              <li>Performance metrics</li>
            </ul>

            <p>
              Read Google’s policy:{" "}
              <a
                className="text-blue-300 hover:underline"
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Ad Policies
              </a>
            </p>

            <h2>4. Children’s Privacy</h2>
            <p>No data is collected knowingly from children under 13.</p>

            <h2>5. Changes to This Policy</h2>
            <p>Updates may be made; they will appear on this page.</p>

            <h2>6. Contact</h2>
            <p>
              For questions:{" "}
              <a className="text-blue-300 hover:underline" href="mailto:parmeet@parmeetsingh.ca">
                parmeet@parmeetsingh.ca
              </a>
            </p>
          </article>
        </div>
      </motion.div>
    </div>
  );
}
