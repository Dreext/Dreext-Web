const toggles = document.querySelectorAll('[data-action="toggle-project"]');

toggles.forEach((button) => {
  const targetId = button.getAttribute('data-target');
  const visual = document.getElementById(targetId);

  if (!visual) return;

  // Sync initial button text if the preview is already visible on load
  if (visual.classList.contains('visible')) {
    button.textContent = 'Hide Preview';
  }

  button.addEventListener('click', () => {
    const willShow = !visual.classList.contains('visible');
    visual.classList.toggle('visible');
    button.textContent = willShow ? 'Hide Preview' : 'Show Preview';
  });
});

// Wire up live preview updates for sub-images (e.g., mask effects, text around)
const previewInputs = document.querySelectorAll('[data-preview]');

previewInputs.forEach((input) => {
  const targetId = input.getAttribute('data-preview');
  const img = document.getElementById(targetId);
  if (!img) return;

  const fallback = img.getAttribute('data-fallback') || '';

  const update = () => {
    const value = input.value.trim();
    img.src = value || fallback;
  };

  input.addEventListener('input', update);
});
