module.exports = function(data) {
    return {
      layout: 'article.njk', // use article.njk instead of base.njk since you're rendering articles
      urlo: data.page?.url,
    };
  };
  