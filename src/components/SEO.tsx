import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = 'Access Houses and Condos - Premium Pre-Construction Projects in Southern Ontario',
  description = 'Discover beautiful pre-construction condos, single family houses, and townhouses in Southern Ontario. Your trusted partner for premium real estate investments.',
  keywords = 'pre-construction, condos, houses, townhouses, Southern Ontario, real estate, investment, Toronto, Mississauga, Brampton, Hamilton',
  image = '/uploads/2024/08/logo-acess-houses-and-condos-with-text.png',
  url = 'https://accesshousesandcondos.com',
  type = 'website'
}: SEOProps) => {
  return (
    <Head>
      {/* Basic Meta Tags */}\n      <title>{title}</title>\n      <meta name=\"description\" content={description} />\n      <meta name=\"keywords\" content={keywords} />\n      <meta name=\"author\" content=\"Access Houses and Condos\" />\n      <meta name=\"robots\" content=\"index, follow\" />\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n      <meta httpEquiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n      <meta name=\"language\" content=\"English\" />\n      \n      {/* Open Graph Meta Tags */}\n      <meta property=\"og:type\" content={type} />\n      <meta property=\"og:title\" content={title} />\n      <meta property=\"og:description\" content={description} />\n      <meta property=\"og:image\" content={image} />\n      <meta property=\"og:url\" content={url} />\n      <meta property=\"og:site_name\" content=\"Access Houses and Condos\" />\n      <meta property=\"og:locale\" content=\"en_CA\" />\n      \n      {/* Twitter Meta Tags */}\n      <meta name=\"twitter:card\" content=\"summary_large_image\" />\n      <meta name=\"twitter:title\" content={title} />\n      <meta name=\"twitter:description\" content={description} />\n      <meta name=\"twitter:image\" content={image} />\n      \n      {/* Additional Meta Tags */}\n      <meta name=\"theme-color\" content=\"#3078e4\" />\n      <meta name=\"msapplication-TileColor\" content=\"#3078e4\" />\n      \n      {/* Canonical URL */}\n      <link rel=\"canonical\" href={url} />\n      \n      {/* Favicon */}\n      <link rel=\"icon\" href=\"/favicon.ico\" />\n      <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon.png\" />\n      <link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"/favicon-32x32.png\" />\n      <link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"/favicon-16x16.png\" />\n      \n      {/* Preconnect to external domains */}\n      <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n      <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossOrigin=\"anonymous\" />\n      \n      {/* JSON-LD Structured Data */}\n      <script\n        type=\"application/ld+json\"\n        dangerouslySetInnerHTML={{\n          __html: JSON.stringify({\n            \"@context\": \"https://schema.org\",\n            \"@type\": \"RealEstateAgent\",\n            \"name\": \"Access Houses and Condos\",\n            \"description\": description,\n            \"url\": url,\n            \"logo\": image,\n            \"contactPoint\": {\n              \"@type\": \"ContactPoint\",\n              \"email\": \"info@accesshousesandcondos.com\",\n              \"contactType\": \"Customer Service\",\n              \"areaServed\": \"Southern Ontario, Canada\"\n            },\n            \"areaServed\": {\n              \"@type\": \"Place\",\n              \"name\": \"Southern Ontario, Canada\"\n            },\n            \"serviceType\": [\n              \"Pre-construction Real Estate\",\n              \"Condominiums\",\n              \"Single Family Houses\",\n              \"Townhouses\",\n              \"Real Estate Investment\"\n            ]\n          })\n        }}\n      />\n    </Head>\n  );\n};\n\nexport default SEO;