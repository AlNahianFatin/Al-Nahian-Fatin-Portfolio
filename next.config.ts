import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        // The Client Router Cache normally keeps prefetched/visited page data in
        // the browser for 30s (dynamic) / 5 min (static) and reuses it on plain
        // reloads and soft navigations, independent of server-side revalidation.
        // Content here is edited from an external dashboard, so we want a normal
        // reload to always go back to the server instead of serving a stale
        // client-cached copy.
        staleTimes: {
            dynamic: 0,
            // Next.js enforces a minimum of 30s for `static`; 0 is not allowed.
            static: 30,
        },
    },
};

export default nextConfig;