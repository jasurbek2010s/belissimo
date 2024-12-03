const items = document.querySelector('.carousel-items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function updateCarousel() {
  items.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => {
  index = (index > 0) ? index - 1 : 0;
  updateCarousel();
});

next.addEventListener('click', () => {
  index = (index < items.children.length - 1) ? index + 1 : index;
  updateCarousel();
});

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.btn.active').classList.remove('active');
      button.classList.add('active');
    });
  });

  const buttons = document.querySelectorAll('.btn');
const infoBox = document.getElementById('infoBox');

// Tugmani bosganda
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Hozirgi active tugmani o‘chirish
    document.querySelector('.btn.active').classList.remove('active');
    button.classList.add('active');

    // Info-boxni o‘zgartirish
    if (button.getAttribute('data-type') === 'pickup') {
      infoBox.classList.add('pickup');
      infoBox.innerHTML = '<span class="info-text">Filialni tanlang</span><span class="edit-icon">✏️</span>';
    } else {
      infoBox.classList.remove('pickup');
      infoBox.innerHTML = '<span class="info-text">Yetkazib berish manzilini tanlang</span><span class="edit-icon">✏️</span>';
    }
  });
});