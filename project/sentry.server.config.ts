import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://19e9a99cbae8e88d726c1a9fccf7ebaf@o4508140050055168.ingest.de.sentry.io/4508842956619856",
  
  // Optimized sampling in production
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.2 : 1,

  // Disable debug mode in production
  debug: process.env.NODE_ENV !== 'production',

  // Enable performance monitoring
  enableTracing: true,

  // Custom sampling function for more granular control
  tracesSampler: (samplingContext) => {
    // Sample all error transactions
    if (samplingContext.transactionContext?.name?.includes('error')) {
      return 1.0;
    }
    // Use lower sampling rate for regular transactions in production
    return process.env.NODE_ENV === 'production' ? 0.2 : 1.0;
  },
});