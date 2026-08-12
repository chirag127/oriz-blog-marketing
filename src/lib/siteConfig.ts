export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'marketing-blog',
  name: 'RankRoom',
  origin: 'https://marketing-blog.oriz.in',
  tagline: 'Marketing & SEO that compounds',
  description:
    'Plain, tested tactics for SEO, content marketing, and email — written for people who ship, not agencies who bill.',
}
