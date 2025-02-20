# Sentry Wizard Setup Guide

Follow these exact answers when running `npx @sentry/wizard@latest -i sourcemaps`:

1. **Not in git repository warning**
   - Answer: `Yes` (continue anyway)

2. **Sentry hosting type**
   - Select: `Sentry SaaS (sentry.io)`

3. **Existing Sentry account**
   - Select: `Yes`

4. **Browser login**
   - Action: Wait for browser to open or click the provided link
   - Complete login in browser

5. **Project selection**
   - It will automatically select: `ltmedia/ltmedia-main-website`

6. **Framework selection**
   - Select: `Vite`

7. **Update @sentry/vite-plugin**
   - If asked: Select `Yes`

8. **Modify vite.config.ts**
   - If asked: Select `Yes, add the Sentry Vite plugin`

9. **CI/CD usage**
   - Select: `No` (we'll configure CI/CD later)

10. **Final steps**
    - Wait for completion
    - The wizard will create:
      - .env.sentry-build-plugin
      - Update vite.config.ts
      - Configure source maps

After completion:
1. Build your app: `npm run build`
2. Verify source maps are uploaded in the Sentry dashboard
3. Test with a sample error to ensure everything works