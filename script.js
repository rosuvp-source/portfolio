document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Message sent successfully! (Demo)');
        form.reset();
      } catch (error) {
        alert('Failed to send message. Please try again.');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
});