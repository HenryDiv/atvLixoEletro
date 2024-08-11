function clickLogo() {
  location.reload();
}

window.revelar = ScrollReveal({ reset: true });


revelar.reveal(".efeito01-esq", {
  duration: 2000,
  distance: "100px",
  delay: 200,
});

revelar.reveal(".efeito01-dir", {
  duration: 2000,
  distance: "100px",
});

revelar.reveal(".efeito03-dir", {
  duration: 2000,
  distance: "100px",
  delay: 200,
});

revelar.reveal(".efeito03-esq", {
  duration: 2000,
  distance: "100px",
});

revelar.reveal(".efeito04-txt", {
  duration: 2000,
  distance: "100px",
});

revelar.reveal(".efeito04-map", {
  duration: 2000,
  distance: "100px",
});

revelar.reveal(".efeito02",{
  duration:2000,
  distance:"80px",
});