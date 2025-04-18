#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { createBlogPost } = require('./blog-generator');

/**
 * Command-line interface for blog generation
 */
function runCLI() {
  const args = process.argv.slice(2);
  
  // Show help if requested or no arguments provided
  if (args.includes('--help') || args.includes('-h') || args.length === 0) {
    console.log(`
Blog Generator - Create HTML blog files for Prem Convertors website

Usage:
  node create-blog.js --title "Your Blog Title" --content "path/to/content.html" --desc "Meta description" [--output "./blogs"]

Options:
  --title, -t    Blog title (required)
  --content, -c  Path to HTML content file (required)
  --desc, -d     Meta description for SEO (required)
  --output, -o   Output directory (optional, defaults to ./blogs)
  --help, -h     Show this help message
    `);
    return;
  }

  // Parse arguments
  let title, contentPath, metaDescription, outputDir;
  
  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--title':
      case '-t':
        title = args[++i];
        break;
      case '--content':
      case '-c':
        contentPath = args[++i];
        break;
      case '--desc':
      case '-d':
        metaDescription = args[++i];
        break;
      case '--output':
      case '-o':
        outputDir = args[++i];
        break;
    }
  }

  // Validate required arguments
  if (!title) {
    console.error('Error: Blog title is required (--title)');
    process.exit(1);
  }
  
  if (!contentPath) {
    console.error('Error: Content path is required (--content)');
    process.exit(1);
  }
  
  if (!metaDescription) {
    console.error('Error: Meta description is required (--desc)');
    process.exit(1);
  }

  // Read content file
  let blogContent;
  try {
    blogContent = fs.readFileSync(contentPath, 'utf8');
  } catch (error) {
    console.error(`Error reading content file: ${error.message}`);
    process.exit(1);
  }

  // Generate the blog file
  try {
    const filePath = createBlogPost(title, blogContent, metaDescription, outputDir);
    console.log(`Success! Blog created at: ${filePath}`);
  } catch (error) {
    console.error(`Error creating blog: ${error.message}`);
    process.exit(1);
  }
}

// Run the CLI if this file is executed directly
if (require.main === module) {
  runCLI();
}