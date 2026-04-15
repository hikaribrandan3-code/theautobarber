import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: "website" | "article";
  ogImage?: string;
}

const SEO = ({ 
  title = "The Auto Barber | Seattle's Premier Detailing Studio", 
  description = "Seattle's #1 car protection studio in Skyway. Ceramic coatings, master paint correction, PPF, and full detailing. Licensed & insured. The Barber's standard for every car.",
  canonical = "https://theautobarber.com",
  ogType = "website",
  ogImage = "/images/hikari-red-car.jpg"
}: SEOProps) => {
  const fullTitle = title.includes("The Auto Barber") ? title : `${title} | The Auto Barber`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
