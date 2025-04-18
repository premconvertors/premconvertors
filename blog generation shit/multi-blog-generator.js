const { createBlogPost } = require('./blog-generator');
const fs = require('fs');
const path = require('path');

/**
 * Generate multiple blog posts at once
 * @param {Array} blogData - Array of blog objects with title, content, and metaDescription
 * @param {string} outputDir - Directory to save blog files
 * @param {boolean} useAsync - Whether to use async/await for file operations
 */
async function generateMultipleBlogs(blogData, outputDir = './blogs', useAsync = true) {
  console.log(`Starting to generate ${blogData.length} blog posts...`);
  
  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  if (useAsync) {
    // Async version - better for many large files
    const promises = blogData.map(async (blog, index) => {
      try {
        const filePath = createBlogPost(blog.title, blog.content, blog.metaDescription, outputDir);
        console.log(`[${index + 1}/${blogData.length}] Created: ${path.basename(filePath)}`);
        return filePath;
      } catch (error) {
        console.error(`Error creating blog "${blog.title}": ${error.message}`);
        return null;
      }
    });
    
    const results = await Promise.all(promises);
    const successCount = results.filter(result => result !== null).length;
    
    console.log(`\nCompleted: ${successCount} of ${blogData.length} blogs successfully created.`);
  } else {
    // Synchronous version - simpler but blocks
    let successCount = 0;
    
    blogData.forEach((blog, index) => {
      try {
        const filePath = createBlogPost(blog.title, blog.content, blog.metaDescription, outputDir);
        console.log(`[${index + 1}/${blogData.length}] Created: ${path.basename(filePath)}`);
        successCount++;
      } catch (error) {
        console.error(`Error creating blog "${blog.title}": ${error.message}`);
      }
    });
    
    console.log(`\nCompleted: ${successCount} of ${blogData.length} blogs successfully created.`);
  }
}

// Example blog data
// const blogData = [
//   {
//     title: "Sustainable Paper Manufacturing",
//     content: `
//       <h4 class="mb-3">Sustainable Paper Manufacturing Practices</h4>
//       <p>The paper industry has evolved significantly to adopt more eco-friendly approaches...</p>
//       <h5 class="mt-4 mb-3">Reducing Environmental Impact</h5>
//       <p>Modern paper mills are implementing technology to minimize waste and pollution...</p>
//     `,
//     metaDescription: "Learn about sustainable practices in modern paper manufacturing."
//   },
//   {
//     title: "Recycled Paper Products",
//     content: `
//       <h4 class="mb-3">Benefits of Recycled Paper Products</h4>
//       <p>Using recycled paper helps reduce environmental impact in numerous ways...</p>
//       <h5 class="mt-4 mb-3">Quality Improvements</h5>
//       <p>Today's recycled paper products match virgin paper in quality and performance...</p>
//     `,
//     metaDescription: "Discover the environmental benefits and quality of modern recycled paper products."
//   },
//   // Add more blog objects here...
// ];

// Run the function if this file is executed directly
if (require.main === module) {
  // Set useAsync to true for better performance with many blogs
  generateMultipleBlogs(blogData, './blogs', true);
}

module.exports = { generateMultipleBlogs };