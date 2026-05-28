/**
 * Imagery for co2.ug
 * Source: Unsplash
 */

const UNS = "https://images.unsplash.com";

export const IMAGES = {
  /** Hero: African savanna at golden hour */
  hero: `${UNS}/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=2400&q=85`,

  /** Dense rainforest — Bwindi */
  bwindi: `${UNS}/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=85`,

  /** Forest — Kibale */
  kibale: `${UNS}/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=2400&q=85`,

  /** Wetlands / water — Lake Victoria */
  victoria: `${UNS}/photo-1559827291-72f590e49386?auto=format&fit=crop&w=2400&q=85`,

  /** Reforestation — Albertine Rift */
  albertine: `${UNS}/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=2400&q=85`,
} as const;

export type ImageKey = keyof typeof IMAGES;

export const PROJECT_IMAGES = [IMAGES.bwindi, IMAGES.kibale, IMAGES.victoria, IMAGES.albertine];
