const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
const selected = [];
const summary = document.querySelector('#order-summary');
const orderLink = document.querySelector('#order-link');
document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => {
  selected.push(button.dataset.product);
  summary.textContent = `${selected.length} container${selected.length === 1 ? '' : 's'} selected: ${selected.join(', ')}.`;
  orderLink.textContent = 'Call to place order →';
  orderLink.href = `tel:5197788158`;
  document.querySelector('#order').scrollIntoView({ behavior: 'smooth', block: 'center' });
}));
document.querySelector('#year').textContent = new Date().getFullYear();
