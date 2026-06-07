// Mobile menu
const ham = document.getElementById('ham'),
  mob = document.getElementById('mob'),
  mobClose = document.getElementById('mobClose');
ham.addEventListener('click', () => mob.classList.add('open'));
mobClose.addEventListener('click', () => mob.classList.remove('open'));
mob.addEventListener('click', e => {
  if (e.target === mob) mob.classList.remove('open');
});

// Helper function to toggle nested menus
function setupAccordion(triggerId, contentId) {
  const trigger = document.getElementById(triggerId);
  const content = document.getElementById(contentId);
  if (trigger && content) {
    trigger.addEventListener('click', () => {
      const isOpen = content.style.display === 'block';
      content.style.display = isOpen ? 'none' : 'block';
      const arrow = trigger.querySelector('span');
      if (arrow) {
        arrow.textContent = isOpen ? '▼' : '▲';
      }
    });
  }
}

// Setup all accordions
setupAccordion('mobProd', 'mobProdSub');
setupAccordion('mobImmunology', 'mobImmunologySub');
setupAccordion('mobLateralFlow', 'mobLateralFlowSub');
setupAccordion('mobBiochemistry', 'mobBiochemistrySub');
setupAccordion('mobHematology', 'mobHematologySub');
setupAccordion('mobAnalyzers', 'mobAnalyzersSub');
setupAccordion('mobReagents', 'mobReagentsSub');
setupAccordion('mobElectrolyte', 'mobElectrolyteSub');
setupAccordion('mobMedicalDevices', 'mobMedicalDevicesSub');

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
