// Shared Schema.org building blocks, so every page's JSON-LD references
// the exact same brand entity (name, url, logo) instead of five slightly
// different inline copies drifting apart. Always the organization, never
// a named person - see CLAUDE.md-adjacent product principle of keeping
// the founder's name out of machine-readable metadata.
export const BASE_URL = "https://fastforwardtyping.com";

export const organization = {
  "@type": "Organization" as const,
  name: "Fast Forward >> Typing",
  url: BASE_URL,
  logo: `${BASE_URL}/icon.svg`,
};
