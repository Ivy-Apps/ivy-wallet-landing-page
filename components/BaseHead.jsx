import React from "react"

export const BaseHead = ({ title, description, image = "/cover.jpg" }) =>
<>
  {/* Global Metadata */}
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <link rel="icon" type="image/png" href="./icon.png" />
  <link rel="shortcut icon" href="./favicon.ico" />

  {/* Primary Meta Tags */}
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="description" content={description} />

  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  {/* Twitter */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <meta property="twitter:image" content={image} />
</>