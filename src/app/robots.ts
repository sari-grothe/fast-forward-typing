import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Every real route is locale-prefixed (/de/dashboard, not
        // /dashboard), so a bare "/dashboard/" pattern never matches
        // anything - use a wildcard locale segment instead. /settings
        // and /practice don't exist as routes (removed, they were
        // dead entries); /certificate is a real, valuable page now
        // (waitlist, benefits, FAQ) and should be crawlable - it's
        // kept out of index only per-lesson via noindex, see
        // lessons/[id]/page.tsx, not blocked wholesale here.
        disallow: ["/api/", "/*/dashboard"],
      },
    ],
    sitemap: "https://fastforwardtyping.com/sitemap.xml",
  };
}
