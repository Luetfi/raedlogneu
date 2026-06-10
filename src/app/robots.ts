import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

// KI-/Suchmaschinen-Crawler, die wir ausdrücklich zulassen (GEO-Reichweite).
const ALLOWED_BOTS = [
  '*',
  // OpenAI / ChatGPT
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  // Google (Gemini / AI Overviews)
  'Google-Extended',
  'Googlebot',
  // Anthropic / Claude
  'ClaudeBot',
  'anthropic-ai',
  // Perplexity
  'PerplexityBot',
  // Microsoft / Bing / Copilot
  'Bingbot',
  // Apple Intelligence
  'Applebot',
  'Applebot-Extended',
  // Amazon
  'Amazonbot',
  // Meta AI
  'meta-externalagent',
  'FacebookBot',
  // Weitere
  'cohere-ai',
  'CCBot',
  'Bytespider',
  'DuckDuckBot',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: ALLOWED_BOTS.map((userAgent) => ({
      userAgent,
      allow: '/',
    })),
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
