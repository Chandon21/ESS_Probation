
// Shared JS: theme toggle + active link + helper
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));

function setTheme(mode){
  localStorage.setItem("theme", mode);
  document.documentElement.classList.toggle("dark", mode==="dark");
}
(function initTheme(){
  const saved = localStorage.getItem("theme") || "light";
  setTheme(saved);
})();

document.addEventListener("DOMContentLoaded", () => {
  // Active nav highlight
  const here = location.pathname.split("/").pop() || "index.html";
  $$("nav a").forEach(a => { if(a.getAttribute("href")===here){ a.classList.add("badge"); }});
  // Theme toggle buttons
  $$("#theme-light").forEach(btn => btn.onclick = () => setTheme("light"));
  $$("#theme-dark").forEach(btn => btn.onclick = () => setTheme("dark"));
});
