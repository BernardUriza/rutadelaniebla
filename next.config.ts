import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático: genera un HTML por ruta con su metadata (OG real para
  // crawlers, sin SSR ni truco de prerender). Se despliega tal cual a Azure SWA.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
