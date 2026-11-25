import type { MetadataRoute } from "next";

// Required for route handlers under `output: "export"`.
export const dynamic = "force-static";

// Static export: emitted as robots.txt at the site root (under basePath).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    host: "https://eli-shane-001.github.io",
  };
}
