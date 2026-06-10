/**
 * Centralized typography design tokens.
 *
 * Sizes are defined in `globals.css` (`:root` CSS variables + `.type-*` classes).
 * Import `type` and apply with `cn()` - color/spacing stay on the component.
 */
export const type = {
  /** Page hero h1 - 36 → 48 → 60px */
  heroHeadline: "type-hero-headline",
  /** Home hero h1 - 30 → 36 → 48 → 60px */
  heroHeadlineHome: "type-hero-headline-home",

  /** Section h2 - 30 → 36 → 48px */
  sectionHeadline: "type-section-headline",
  /** Section h2 large - 36 → 48px */
  sectionHeadlineLg: "type-section-headline-lg",
  /** Section h2 medium - 30 → 36px */
  sectionHeadlineMd: "type-section-headline-md",

  /** Card h3 - 20 → 24px */
  cardHeadline: "type-card-headline",
  /** Card h3 - 24px */
  cardHeadlineMd: "type-card-headline-md",
  /** Card h3 - 18 → 20px */
  cardHeadlineSm: "type-card-headline-sm",
  /** Card h3 semibold - 20px */
  cardHeadlineSemibold: "type-card-headline-semibold",
  /** Card h3 medium - 20 → 24px */
  cardHeadlineMedium: "type-card-headline-medium",
  /** Feature block h3 - 24 → 36px */
  featureHeadline: "type-feature-headline",

  /** Stat number - 36 → 48px */
  stat: "type-stat",
  /** Large stat - 48px */
  statLg: "type-stat-lg",

  /** Subheadline - 18 → 20px */
  subheadline: "type-subheadline",
  subheadlineSemibold: "type-subheadline-semibold",
  subheadlineNormal: "type-subheadline-normal",
  /** Emphasized subheadline - 20 → 24px */
  subheadlineLg: "type-subheadline-lg",

  /** Body - 16px */
  body: "type-body",
  /** Body - 18px */
  bodyLg: "type-body-lg",
  /** Body - 16 → 18px */
  bodyResponsive: "type-body-responsive",
  /** Body - 14 → 16px */
  bodySm: "type-body-sm",
  /** Body - 15 → 16px */
  bodyCaption: "type-body-caption",

  /** Role / byline - 16px semibold */
  role: "type-role",
  /** Small index label */
  index: "type-index",
  /** Step / pillar badge - 16px bold */
  badge: "type-badge",
} as const;

export type TypographyToken = (typeof type)[keyof typeof type];
