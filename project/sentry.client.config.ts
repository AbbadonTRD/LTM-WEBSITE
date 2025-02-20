import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://19e9a99cbae8e88d726c1a9fccf7ebaf@o4508140050055168.ingest.de.sentry.io/4508842956619856",

  // Optimized sampling in production
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.2 : 1,

  // Disable debug mode in production
  debug: process.env.NODE_ENV !== 'production',

  // Optimize replay sampling rates for production
  replaysOnErrorSampleRate: process.env.NODE_ENV === 'production' ? 0.5 : 1.0,
  replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Performance monitoring
  enableTracing: true,
  
  // Optimize bundle size
  autoSessionTracking: true,
  sendClientReports: true,

  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      colorScheme: "system",
      buttonLabel: "Send Feedback",
      submitButtonLabel: "Send",
      cancelButtonLabel: "Cancel",
      formTitle: "Report an issue",
      successMessage: "Thank you for your feedback!",
      formPlaceholder: "Please describe the issue you encountered..."
    }),
  ],
});