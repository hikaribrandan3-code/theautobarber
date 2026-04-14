import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: "website" | "article";
}

const SEO = ({ 
  title = "The Auto Barber | Seattle's Premier Mobile Detailing", 
  description = "Seattle's #1 mobile detailing service. Ceramic coatings, master paint correction, PPF, and full detailing. Licensed & insured. We come to you.",
  canonical = "https://theautobarber.com",
  ogType = "website"
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

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
