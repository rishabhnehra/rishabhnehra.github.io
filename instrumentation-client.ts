import posthog from "posthog-js";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

// Leave analytics disabled until both build-time settings are configured.
if (projectToken && apiHost) {
  try {
    posthog.init(projectToken, {
      api_host: apiHost,
      defaults: "2026-05-30",
      capture_pageview: "history_change",
      capture_pageleave: true,
      autocapture: true,
      person_profiles: "identified_only",
      disable_session_recording: true,
    });
  } catch (error) {
    console.warn("PostHog initialization failed", error);
  }
}
