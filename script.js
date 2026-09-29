const nav = document.querySelector('.nav');
const toggle = document.querySelector('.menu-toggle');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('#navLinks a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      reveal.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.card, .workflow-step, .section-heading').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  el.style.transition = 'opacity .55s ease, transform .55s ease';
  reveal.observe(el);
});
