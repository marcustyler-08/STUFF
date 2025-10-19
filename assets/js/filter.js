document.addEventListener('DOMContentLoaded', function() {
  const articles = document.querySelectorAll('.article');
  const filterLinks = document.querySelectorAll('[data-tags]');

  filterLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const filterTag = this.getAttribute('data-tags');
      
      if (filterTag === 'show-all') {
        articles.forEach(article => {
          article.style.display = 'inline-block';
        });
      } else {
        articles.forEach(article => {
          const articleTags = article.getAttribute('data-tags');
          if (articleTags.includes(filterTag)) {
            article.style.display = 'inline-block';
          } else {
            article.style.display = 'none';
          }
        });
      }
    });
  });
});
