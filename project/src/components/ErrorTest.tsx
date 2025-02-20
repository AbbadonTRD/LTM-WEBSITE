'use client';

import * as Sentry from "@sentry/nextjs";
import { useEffect } from 'react';

export const ErrorTest = () => {
  useEffect(() => {
    // Initialize Sentry feedback button
    Sentry.init({
      dsn: "https://19e9a99cbae8e88d726c1a9fccf7ebaf@o4508140050055168.ingest.de.sentry.io/4508842956619856",
    });
  }, []);

  return (
    <div className="space-y-4">
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        onClick={() => {
          Sentry.captureMessage("Test message from development");
          throw new Error("Test error for Sentry verification");
        }}
      >
        Test Sentry Error
      </button>
      <button
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
        onClick={() => {
          Sentry.showFeedbackDialog();
        }}
      >
        Open Feedback Form
      </button>
    </div>
  );
};