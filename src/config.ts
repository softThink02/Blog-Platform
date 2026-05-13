const buildConfig = () => {
  const blogId = process.env.BLOG_ID || '';
  const name = process.env.BLOG_DISPLAY_NAME || "Real Estate";
  const copyright = process.env.BLOG_COPYRIGHT || "David X";
  const defaultTitle =
    process.env.TITLE || "Properties with David X";
  const defaultDescription = process.env.BLOG_DESCRIPTION || "Blog about Real Estate";

  return {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_url",
    wisp: {
      blogId,
    },
  };
};

export const config = buildConfig();
