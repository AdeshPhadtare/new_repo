<<<<<<< HEAD
// Make cards keyboard-accessible and open the linked module.
// Card uses data-href attribute; if the href starts with "http" it opens _blank,
// otherwise it navigates in same tab.

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    // click behavior
    card.addEventListener('click', () => activateCard(card));
    // keyboard: Enter or Space triggers card
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateCard(card);
      }
    });
  });
});

function activateCard(card) {
  const href = card.getAttribute('data-href') || '';
  if (!href) return;
  if (href.startsWith('http://') || href.startsWith('https://')) {
    // open external links in new tab
    window.open(href, '_blank', 'noopener');
  } else {
    // internal page
    window.location.href = href;
  }
}
=======
// Make cards keyboard-accessible and open the linked module.
// Card uses data-href attribute; if the href starts with "http" it opens _blank,
// otherwise it navigates in same tab.

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    // click behavior
    card.addEventListener('click', () => activateCard(card));
    // keyboard: Enter or Space triggers card
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        activateCard(card);
      }
    });
  });
});

function activateCard(card) {
  const href = card.getAttribute('data-href') || '';
  if (!href) return;
  if (href.startsWith('http://') || href.startsWith('https://')) {
    // open external links in new tab
    window.open(href, '_blank', 'noopener');
  } else {
    // internal page
    window.location.href = href;
  }
}
>>>>>>> 93f9e82910ad1b6518f19f6af92e2879c4c0c9d3
