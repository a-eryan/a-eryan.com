/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
      dangerouslyAllowSVG: true, //allow SVG images to be used in next/image components
      // contentDispositionType: 'attachment', //default value
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", //since SVG files can contain scripts, we need to restrict script execution, just to be safe
    },  
};

export default nextConfig;
