import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string; 
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonicalUrl }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content="URL_TO_YOUR_PREVIEW_IMAGE" /> */}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {/* <meta property="twitter:image" content="URL_TO_YOUR_PREVIEW_IMAGE" /> */}
      {canonicalUrl && <meta property="twitter:url" content={canonicalUrl} />}
    </Helmet>
  );
};

export default SEO; 