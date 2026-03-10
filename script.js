// Başlık yazma/silme animasyonu (tarayıcı başlığını kullan)
(async function () {
  const titleElement = document.getElementById("animatedTitle");
  if (!titleElement) return;

  const fullText = document.title || "BTF | Turkish Armed Forces";

  // Yardımcı bekleme fonksiyonu
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function typeText(speedMs) {
    titleElement.textContent = "";
    for (let i = 1; i <= fullText.length; i++) {
      titleElement.textContent = fullText.slice(0, i);
      await wait(speedMs);
    }
  }

  async function deleteText(speedMs) {
    for (let i = fullText.length; i >= 0; i--) {
      await wait(speedMs);
      titleElement.textContent = fullText.slice(0, i);
    }
  }

  // Sürekli döngü: yaz → 10 sn bekle → 1 ms'de sil → 0.5 sn'de tekrar yaz
  // İlk girişte de baştan başlayarak yazma animasyonu karşılar
  while (true) {
    await typeText(500); // 0.5 saniye/harf
    await wait(10000); // 10 saniye bekle
    await deleteText(1); // 1 ms/harf sil
    await typeText(500); // 0.5 saniye/harf tekrar yaz
  }
})();

// Kapak animasyonu bittikten sonra sayfayı göster
window.addEventListener("load", () => {
  const pageRoot = document.querySelector(".page-root");
  if (pageRoot) {
    // Kapak animasyonu yaklaşık 2.2s + 1.8s => 4s sürüyor, biraz pay bırakalım
    setTimeout(() => {
      pageRoot.classList.add("page-visible");
    }, 2600);
  }
});

// Kopyalama, seçme, sağ tık vb. engellemeler
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("copy", (e) => {
  e.preventDefault();
});

document.addEventListener("cut", (e) => {
  e.preventDefault();
});

document.addEventListener("selectstart", (e) => {
  e.preventDefault();
});

document.addEventListener("dragstart", (e) => {
  e.preventDefault();
});

