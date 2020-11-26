
function openForm() {
  document.getElementById('form-overlay').classList.remove('remove'); 
  document.getElementById('removeMe').style.display = 'none';
}

function closeForm() {
  document.getElementById('form-overlay').classList.add('remove');
  document.getElementById('hero').style.setProperty('background-color', 'initial');
  document.getElementById('removeMe').style.display = 'block';
}

