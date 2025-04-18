const { DateTime } = require('luxon')

module.exports = function(eleventyConfig) {

    // tell to get it css . if eleventy doesnt pass thruough something from src to public. you gotta tell it explicitly to do so.
    // eleventyConfig.addPassthroughCopy('./src/style.css')
    // eleventyConfig.addPassthroughCopy('./src/assets')
    eleventyConfig.addPassthroughCopy('./src/images')
    eleventyConfig.addPassthroughCopy('./src/js')
    eleventyConfig.addPassthroughCopy('./src/css')
    eleventyConfig.addPassthroughCopy('./src/fonts')
    eleventyConfig.addPassthroughCopy('./src/video')
    eleventyConfig.addPassthroughCopy('./src/blog/blogs.json')
    eleventyConfig.addPassthroughCopy('./src/admin/config.yml')

    // eleventyConfig.addPassthroughCopy('./src/admin/config.yml')
    
    eleventyConfig.addFilter("postDate", (dateObj)=>{
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })

    eleventyConfig.addCollection("post", function(collectionApi) {
        return collectionApi.getFilteredByGlob("./src/blog/*.md").sort((a, b) => {
          return b.date - a.date; // Sort by descending date
        });
      });
      
    return {
        dir:{
            input:"src",
            output:"public"
        }
    }
}