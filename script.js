const lines = [
  "initializing portfolio...",
  "loading project history...",
  "checking system architecture...",
  "loading delivery metrics...",
  "access granted // welcome."
];

const target = document.getElementById("typing");
let line = 0, char = 0, deleting = false;

function typeTerminal() {
  const text = lines[line];

  if (!deleting) {
    target.textContent = text.slice(0, ++char);
    if (char === text.length) {
      deleting = true;
      setTimeout(typeTerminal, 1200);
      return;
    }
  } else {
    target.textContent = text.slice(0, --char);
    if (char === 0) {
      deleting = false;
      line = (line + 1) % lines.length;
    }
  }
  setTimeout(typeTerminal, deleting ? 28 : 48);
}
typeTerminal();

const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll("nav a")];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      ));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

const music=document.getElementById("backgroundMusic");const musicToggle=document.getElementById("musicToggle");const musicIcon=document.getElementById("musicIcon");const musicLabel=document.getElementById("musicLabel");const profileAvatar=document.getElementById("profileAvatar");
function setMusicUI(playing){musicToggle.classList.toggle("playing",playing);musicToggle.setAttribute("aria-pressed",String(playing));musicToggle.setAttribute("aria-label",playing?"Mute background music":"Play background music");musicIcon.textContent=playing?"▮▮":"▶";musicLabel.textContent=playing?"MUTE MUSIC":"PLAY MUSIC";profileAvatar.classList.toggle("playing",playing)}
musicToggle.addEventListener("click",async()=>{try{if(music.paused){await music.play();setMusicUI(true)}else{music.pause();setMusicUI(false)}}catch(e){setMusicUI(false);console.warn("Music could not be started:",e)}});music.addEventListener("play",()=>setMusicUI(true));music.addEventListener("pause",()=>setMusicUI(false));music.addEventListener("ended",()=>setMusicUI(false));setMusicUI(false);
