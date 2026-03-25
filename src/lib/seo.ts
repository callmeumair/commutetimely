/**
 * SEO Utility File
 * Generates JSON-LD Structured Data Schema for CommuteTimely
 */

// Global Organization Schema
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CommuteTimely",
    "url": "https://commutetimely.com",
    "logo": "https://commutetimely.com/favicon.ico",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "hello@commutetimely.com",
      "contactType": "customer support"
    },
    "sameAs": [
      "https://twitter.com/CommuteTimely"
    ]
  };
};

export const generateWebsiteSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://commutetimely.com",
    "name": "CommuteTimely",
    "description": "AI-Powered Departure Timing for Every Commute"
  };
};

export const generateBlogPostingSchema = (post: {
  headline: string;
  description: string;
  image: string;
  authorName: string;
  datePublished: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": post.url
    },
    "headline": post.headline,
    "description": post.description,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": post.authorName,
      "url": "https://commutetimely.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CommuteTimely",
      "logo": {
        "@type": "ImageObject",
        "url": "https://commutetimely.com/favicon.ico"
      }
    },
    "datePublished": post.datePublished
  };
};

export const generateBreadcrumbSchema = (items: { name: string; item: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.item
    }))
  };
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
