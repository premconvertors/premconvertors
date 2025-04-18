const fs = require('fs');
const path = require('path');

/**
 * Creates a blog HTML file from the provided parameters
 * @param {string} title - The blog title
 * @param {string} blogContent - The HTML content for the blog
 * @param {string} metaDescription - Meta description for SEO
 * @param {string} [outputDir='./blogs'] - Directory to save the blog file
 * @returns {string} Path to the created blog file
 */
function createBlogPost(title, blogContent, metaDescription, outputDir = './blogs') {
  // Create filename from title - replace spaces with hyphens and remove special characters
  const filename = title
    .toLowerCase()
    .replace(/\s+/g, '-')        // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '')    // Remove non-word chars (except hyphens)
    .replace(/\-\-+/g, '-')      // Replace multiple hyphens with single hyphen
    .replace(/^-+/, '')          // Trim hyphens from start
    .replace(/-+$/, '');         // Trim hyphens from end
  
  // Ensure the output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Full path for the new file
  const filePath = path.join(outputDir, `${filename}.html`);
  
  // Generate the HTML content
  const htmlTemplate = `<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="description" content="${metaDescription}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="theme-color" content="#ffffff">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="twitter:title" content="${title}">
        <meta name="twitter:description" content="${metaDescription}">
        <meta name="twitter:image" content="images/favicon.jpg">
        <meta property="og:title" content="${title}">
        <meta property="og:description" content="${metaDescription}">
        <meta property="og:type" content="article">
        <meta property="og:image" content="images/news/blog-header.jpg">
        <meta property="og:site_name" content="Prem Convertors">
        <meta property="article:author" content="Prem Convertors">





        <title>${title} - Prem Convertors</title>

        <!-- CSS FILES -->  
        <link rel="preconnect" href="https://fonts.googleapis.com">
        
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">                      
        <link href="../css/bootstrap.min.css" rel="stylesheet">

        <link href="../css/bootstrap-icons.css" rel="stylesheet">

        <link href="../css/tooplate-crispy-kitchen.css" rel="stylesheet">
        
        <link rel="shortcut icon" href="../images/favicon.png" type="image/x-icon">

        <style>
            h1 { font-size: 28px !important; }
            h2 { font-size: 24px !important; }
        </style>
    </head>
    
    <body>
        
        <nav class="navbar navbar-expand-lg bg-white shadow-lg">
            <div class="container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <a class="navbar-brand" href="../index.html">
                    <img src="../images/favicon.png" alt="logo" style="height: 70px;">
                    Prem Convertors
                </a>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="../index.html">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="../about.html">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="../blog.html">Blog</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="../contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <main>
            <header class="site-header site-news-detail-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h4>${title}</h4>
                        </div>
                    </div>
                </div>
            </header>

            <section class="news-detail section-padding pt-0">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-12">
                        <img src="../images/news/blog-header.jpg" class="img-fluid news-detail-image" alt="Prem Convertors photo">
                            <div class="col-lg-10 col-10 mx-auto mt-5">
                                ${blogContent}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="comments section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h4 class="text-center mb-4">Ready to take next step?</h4>
                            <h6 class="text-center mb-4">Get a free quote to understand our pricing!</h6>
                        </div>
                        
                        <div class="col-lg-7 col-12 mx-auto">
                            <iframe data-tally-src="https://tally.so/embed/mJM4M4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="276" frameborder="0" marginheight="0" marginwidth="0" title="Contact form"></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section class="related-news section-padding bg-white">
                <div class="container">
                    <div class="row">
                        <h2 class="text-center mb-lg-5 mb-4">Related News</h2>
                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="news-thumb mb-4">
                                <a href="../blog1.html">
                                    <img src="../images/news/gilles-lambert-S_LhjpfIdm4-unsplash.jpg" class="img-fluid news-image" alt="">
                                </a>
                                
                                <div class="news-text-info">
                                    <h5 class="news-title mt-2">
                                        <a href="../blog1.html" class="news-title-link">Is Coconut good for your health?</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>

                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="news-thumb mb-4">
                                <a href="../blog2.html">
                                    <img src="../images/news/ella-olsson-mmnKI8kMxpc-unsplash.jpg" class="img-fluid news-image" alt="">
                                </a>
                                
                                <div class="news-text-info"><h5 class="news-title mt-2">
                                        <a href="../blog2.html" class="news-title-link">How to run a sushi business?</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>

                        <div class="col-lg-4 col-md-6 col-12">
                            <div class="news-thumb mb-4">
                                <a href="../blog3.html">
                                    <img src="../images/news/louis-hansel-GiIiRV0FjwU-unsplash.jpg" class="img-fluid news-image" alt="">
                                </a>
                                
                                <div class="news-text-info">
                                    <h5 class="news-title mt-2">
                                        <a href="../blog3.html" class="news-title-link">Learning a fine dining experience</a>
                                    </h5>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="site-footer section-padding">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h4 class="text-white mb-4 me-5">Prem Convertors</h4>
                    </div>

                    <div class="col-lg-4 col-md-7 col-xs-12 tooplate-mt30">
                        <h6 class="text-white mb-lg-4 mb-3">Location</h6>
                        <p>Sai Rd, Baddi, Himachal Pradesh, India - 173205</p>
                        <a href="https://maps.app.goo.gl/93R8yfAR8LaW1jzUA" class="custom-btn btn btn-dark mt-2">Directions</a>
                    </div>

                    <div class="col-lg-4 col-md-5 col-xs-12 tooplate-mt30">
                        <h6 class="text-white mb-lg-4 mb-3">Contact</h6>
                        <p>Tel: <a href="tel: 9805005775" class="tel-link">9805005775</a></p>
                        <p>Tel: <a href="tel: 9736744977" class="tel-link">9736744977</a></p>
                    </div>

                    <div class="col-lg-4 col-md-6 col-xs-12 tooplate-mt30">
                        <h6 class="text-white mb-lg-4 mb-3">Social</h6>
                        <ul class="social-icon">
                            <li><a href="https://m.facebook.com/people/Prem-Paper_Convertors/61555990806437" class="social-icon-link bi-facebook"></a></li>
                        </ul>
                    
                        <p class="copyright-text tooplate-mt60">Copyright © 2025 Prem Convertors Co., Ltd.
                        <br>Website developed by <a rel="nofollow" href="https://webxfearless.pages.dev/" target="_blank">WebXFearless</a></p>
                    </div>
                </div>
            </div>
        </footer>
        <button data-tally-open="mJM4M4" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" 
    style="position: fixed; bottom: 20px; right: 20px; background-color: #0073e6; color: white; 
    border: none; border-radius: 50px; padding: 12px 20px; font-size: 16px; cursor: pointer; 
    box-shadow: 0px 4px 6px rgba(0,0,0,0.1);z-index:100;">
    Get in Touch!
    <span style="position: absolute; top: -5px; right: -5px; background-color: green; 
    color: white; font-size: 12px; font-weight: bold; border-radius: 50%; width: 18px; 
    height: 18px; display: flex; align-items: center; justify-content: center;">.</span>
</button>
        <!-- JAVASCRIPT FILES -->
        <script async src="https://tally.so/widgets/embed.js"></script>
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/custom.js"></script>
        <script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Blog",
            "headline": "${title}",
            "description": "${metaDescription}",
            "author": {
                "@type": "Manufacturer",
                "name": "Prem Convertors"
            },
            "publisher": {
                "@type": "Manufacturer",
                "name": "Prem Convertors",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9736744977",
                    "contactType": "Phone"
                }
            }
        }
    </script>
    </body>
</html>`;

  // Write the file
  fs.writeFileSync(filePath, htmlTemplate);
  
  console.log(`Blog created successfully: ${filePath}`);
  return filePath;
}

/**
 * Example usage:
 * 
 * const title = "How to Make Perfect Pasta";
 * const blogContent = `
 *   <h4 class="mb-3">The Perfect Pasta Guide</h4>
 *   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
 *   <h5 class="mt-4 mb-3">Ingredients</h5>
 *   <p>Here are the ingredients you'll need...</p>
 * `;
 * const metaDescription = "Learn how to make perfect pasta with our step-by-step guide";
 * 
 * createBlogPost(title, blogContent, metaDescription);
 */

module.exports = { createBlogPost };

