import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  path 
}) => {
  const baseUrl = 'https://nss-nit-jsr.vercel.app';
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | NSS NIT Jamshedpur</title>
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}${path}`} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${baseUrl}${path}`} />
      
      {/* JSON-LD Schema Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NSS NIT Jamshedpur",
          "url": baseUrl,
          "description": description
        })}
      </script>
    </Helmet>
  );
};

export default SEO;