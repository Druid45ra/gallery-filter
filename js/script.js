/**
 * Gallery Filter Module
 * Responsabil pentru filtrarea elementelor din DOM bazat pe categorii.
 */

document.addEventListener("DOMContentLoaded", () => {
  const filterContainer = document.querySelector("#filter-buttons");
  const galleryItems = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".filter-btn");

  /**
   * Funcția principală de filtrare
   * @param {string} filterValue - Categoria selectată (ex: 'peisaj', 'all')
   */
  const filterGallery = (filterValue) => {
    galleryItems.forEach((item) => {
      const category = item.getAttribute("data-category");

      // Logica de filtrare: afișăm dacă e "all" sau dacă se potrivește categoria
      if (filterValue === "all" || category === filterValue) {
        // Eliminăm clasa de ascundere cu o mică întârziere pentru re-flow dacă e cazul
        item.style.display = "block";
        setTimeout(() => {
          item.classList.remove("is-hidden");
        }, 10);
      } else {
        // Adăugăm clasa de animație și apoi ascundem din DOM
        item.classList.add("is-hidden");
        // Așteptăm terminarea tranziției CSS (400ms) înainte de display: none
        setTimeout(() => {
          if (item.classList.contains("is-hidden")) {
            item.style.display = "none";
          }
        }, 400);
      }
    });
  };

  /**
   * Actualizează aspectul vizual al butoanelor de filtrare
   * @param {HTMLElement} activeBtn - Butonul care a fost apăsat
   */
  const updateActiveButton = (activeBtn) => {
    buttons.forEach((btn) => {
      btn.classList.remove(
        "bg-indigo-600",
        "text-white",
        "shadow-md",
        "active"
      );
      btn.classList.add("bg-white", "text-gray-700", "border-gray-200");
    });

    activeBtn.classList.remove("bg-white", "text-gray-700", "border-gray-200");
    activeBtn.classList.add(
      "bg-indigo-600",
      "text-white",
      "shadow-md",
      "active"
    );
  };

  // Event Listener folosind delegarea (opțional aici, dar bun ca practică)
  filterContainer.addEventListener("click", (e) => {
    const clickedBtn = e.target.closest(".filter-btn");

    if (!clickedBtn) return;

    const filterValue = clickedBtn.getAttribute("data-filter");

    updateActiveButton(clickedBtn);
    filterGallery(filterValue);
  });
});
