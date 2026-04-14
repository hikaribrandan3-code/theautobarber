import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: "website" | "article";
}

const SEO = ({ 
  title = "Area 51 Detailing | Naples' Premier Mobile Detailing", 
  description = "Naples' #1 mobile detailing service. Ceramic coatings, master paint correction, PPF, and full detailing. Licensed & insured. We come to you.",
  canonical = "https://area51detailing.com",
  ogType = "website"
}: SEOProps) => {
  const fullTitle = title.includes("Area 51") ? title : `${title} | Area 51 Detailing`;
  
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
