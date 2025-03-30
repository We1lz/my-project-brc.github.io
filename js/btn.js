function toggleMenu() {
    var background=document.getElementById("font");
    background.classList.toggle("show")
}

async function copyText() {
    try {
      const text = document.getElementById('textToCopy').textContent;
      await navigator.clipboard.writeText(text);
      alert('Текст скопирован!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Ошибка при копировании!');
    }
  }

window.onload=function() {
  bool=false
  var results=document.getElementById("results");
  if (bool==true) {
    results.classList.toggle("show");
  }
}