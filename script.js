const terms = document.querySelectorAll('dt');

function showDef(e) {
  let active = document.querySelector('.active');

  if (active != null) {
    active.classList.remove('active');
  }

  let def = e.target.nextElementSibling;
  
  def.classList.add('active');
}

for (let i=0, ii=terms.length; i<ii; i++) {
  terms[i].addEventListener('click', showDef);
}