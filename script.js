// Live datetime
function updateTime() {
  const now = new Date();

  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  };

  const date = now.toLocaleDateString(undefined, options);
  const time = now.toLocaleTimeString();

  document.getElementById("datetime").innerHTML = `${date}<br>${time}`;
}
 
setInterval(updateTime, 1000);
updateTime();






const aboutWrap = document.querySelector('.about-wrap');
const aboutBtn = document.querySelector('.about');

function isMobile() {
  return window.matchMedia("(max-width: 600px)").matches;
}

aboutBtn.addEventListener('click', () => {
  if (!isMobile()) return; // 🔥 stops it on desktop

  aboutWrap.classList.toggle('open');

  if (aboutWrap.classList.contains('open')) {
    aboutBtn.textContent = 'Close';
  } else {
    aboutBtn.textContent = 'About';
  }
});