document.documentElement.classList.add('js-enabled');

const revealItems = document.querySelectorAll('[data-reveal]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute('data-revealed', 'true');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.14
  });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.setAttribute('data-revealed', 'true'));
}
