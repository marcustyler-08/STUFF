document.addEventListener('DOMContentLoaded', function() {
  const articles = document.querySelectorAll('.article');
  const filterLinks = document.querySelectorAll('#left [data-tags]');
  const isHomepage = articles.length > 0;

  filterLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const filterTag = this.getAttribute('data-tags');
      
      // If not on homepage, go to homepage with the filter tag
      if (!isHomepage) {
        const baseUrl = window.location.origin + window.location.pathname.split('/').slice(0, -2).join('/') + '/';
        window.location.href = baseUrl + '?filter=' + filterTag;
        return;
      }
      
      // Filter logic for homepage
      if (filterTag === 'show-all') {
        articles.forEach(article => {
          article.style.display = 'flex';
        });
      } else {
        articles.forEach(article => {
          const articleTags = article.getAttribute('data-tags');
          if (articleTags && articleTags.includes(filterTag)) {
            article.style.display = 'flex';
          } else {
            article.style.display = 'none';
          }
        });
      }
    });
  });

  // Apply filter from URL parameter on page load
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  
  if (filterParam && isHomepage) {
    if (filterParam === 'show-all') {
      articles.forEach(article => {
        article.style.display = 'flex';
      });
    } else {
      articles.forEach(article => {
        const articleTags = article.getAttribute('data-tags');
        if (articleTags && articleTags.includes(filterParam)) {
          article.style.display = 'flex';
        } else {
          article.style.display = 'none';
        }
      });
    }
  }
});
