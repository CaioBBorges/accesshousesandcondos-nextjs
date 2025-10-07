import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Access Houses and Condos',
    short_name: 'AccessHC',
    description: 'Premium Pre-Construction Projects in Southern Ontario',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3078e4',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}