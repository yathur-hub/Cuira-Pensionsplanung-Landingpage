/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface HeroCopy {
  preHeadline: string;
  headline: string;
  subHeadline: string;
  bullets: string[];
  primaryCTA: string;
  secondaryCTA: string;
  trustLabel: string;
  microCopy: string;
  conceptNote: string;
}

export interface ComparisonPoint {
  title: string;
  desc: string;
}

export interface ComparisonRow {
  label: string;
  cuira: string | boolean;
  banks: string | boolean;
  insurance: string | boolean;
  wealth: string | boolean;
}

export interface ComparisonCopy {
  sectionTag: string;
  headline: string;
  intro: string;
  argument: string;
  points: ComparisonPoint[];
  trustArguments: string[];
  table: ComparisonRow[];
  closing: string;
  ctaText: string;
}

export interface FullCopy {
  hero: HeroCopy;
  comparison: ComparisonCopy;
}
