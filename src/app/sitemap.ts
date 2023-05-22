import { monthsAvailables } from '@/utils/monthsAvailables'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const months = monthsAvailables[2023]

  const monthsSitemap = months.map((month) => ({
    url: `${process.env.NEXT_PUBLIC_API_URL}/mes/${month}`,
    lastModified: new Date(),
  }))

  const routes = ['', '/mes'].map((route) => ({
    url: `${process.env.NEXT_PUBLIC_API_URL}${route}`,
    lastModified: new Date(),
  }))

  return [...routes, ...monthsSitemap]
}
