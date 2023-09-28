// This file contains the site configuration for the theme.

// Metadata, SEO, and Social
export const SITE_TITLE = "Manual Theme"
export const SITE_DESCRIPTION = "A documentation template for Astro"
export const SITE_URL = "https://manual.otterlord.dev"
export const SITE_DEFAULT_OG_IMAGE = "/assets/og-image.png"

// Docs Sidebar
// Define the left sidebar items here.
// The path should match the folder name in src/content/docs/
export const SIDEBAR_ITEMS = {
  "Introducción": [
    "/docs/tutorials/build-x",
  ],
  "Instalación": [
    "/docs/instalacion/instalacion-linux",
    "/docs/instalacion/instalacion-windows",
    "/docs/instalacion/instalacion-mac",
    "/docs/instalacion/instalacion-android",
    "/docs/instalacion/instalacion-iphone",
  ],
  // "Guides": [
  //   "/docs/guides/migrate-from-z",
  // ]
}
