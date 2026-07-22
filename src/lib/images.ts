/**
 * Imagery for co2.ug
 * Source: Unsplash
 */

const HF = "https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD";
const UNS = "https://images.unsplash.com";

export const IMAGES = {
  /** Hero: Bwindi rainforest Uganda — Higgsfield soul_location */
  hero: `${HF}/hf_20260528_230746_80bf0865-fe80-432e-a4ce-5c4b8329af91.png`,

  /** Dense rainforest — Bwindi */
  bwindi: `${UNS}/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=75&fm=webp`,

  /** Forest — Kibale */
  kibale: `${UNS}/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=75&fm=webp`,

  /** Wetlands / water — Lake Victoria */
  victoria: `${UNS}/photo-1559827291-72f590e49386?auto=format&fit=crop&w=1600&q=75&fm=webp`,

  /** Reforestation — Albertine Rift */
  albertine: `${UNS}/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1600&q=75&fm=webp`,
} as const;

export type ImageKey = keyof typeof IMAGES;

export const PROJECT_IMAGES = [IMAGES.bwindi, IMAGES.kibale, IMAGES.victoria, IMAGES.albertine];
