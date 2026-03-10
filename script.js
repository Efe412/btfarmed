<<<<<<< HEAD
// Başlık yazma/silme animasyonu (tarayıcı başlığını kullan)
(async function () {
  const titleElement = document.getElementById("animatedTitle");
  if (!titleElement) return;

  const fullText = document.title || "BTF | Turkish Armed Forces";

  titleElement.textContent = fullText.slice(0, currentLength);

  setInterval(() => {
    if (typingForward) {
      if (currentLength < fullText.length) {
        currentLength++;
      } else {
        // Tamamı yazıldıysa, bir sonraki turda silmeye başlayalım
        typingForward = false;
      }
    } else {
      // Silme aşaması, en az 1 harf kalsın
      if (currentLength > 1) {
        currentLength--;
      } else {
        typingForward = true;
      }
    }

    titleElement.textContent = fullText.slice(0, currentLength);
  }, 1000);
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


