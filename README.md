# Gallery Filter Project

O aplicație de galerie modernă realizată cu JavaScript Vanilla și Tailwind CSS.

## Funcționalități
- **Filtrare Dinamică**: Filtrează imagini fără reîncărcarea paginii.
- **UI Responsiv**: Layout-ul se adaptează de la mobil la desktop (Grid).
- **Animații Fluide**: Tranziții de scalare și opacitate la filtrare.
- **Accesibilitate**: Utilizarea atributelor data și structură semantică.

## Instrucțiuni de rulare
1. Clonează repository-ul.
2. Deschide `index.html` în browser sau rulează local din folderul `gallery-filter` folosind `npm` / `vite`.

## Arhitectură Cod
- **HTML**: Folosește clase utility-first de la Tailwind.
- **CSS Custom**: Am adăugat o clasă `.is-hidden` pentru a gestiona tranzițiile.
- **JS**: Logica este modulară, separând responsabilitatea de filtrare de cea de actualizare a interfeței (UI).

## CI / GitHub Actions & Demo Live

Am adăugat un workflow GitHub Actions care construiește proiectul, încarcă artefactele și publică build-ul pe GitHub Pages.

- **Fișier workflow:** `.github/workflows/ci.yml` ([gallery-filter/.github/workflows/ci.yml](gallery-filter/.github/workflows/ci.yml))
- **Trigger:** `push` pe ramura `main` și `workflow_dispatch` (manual)
- **Detalii:** rulează pe Node.js matrix (18, 20), folosește `npm ci` și `npm run build`, încarcă artefactele și apoi publică conținutul `dist` pe GitHub Pages.

Demo Live și badge:

- Demo Live: https://Druid45ra.github.io/gallery-filter/
- Workflow status: ![CI status](https://github.com/Druid45ra/gallery-filter/actions/workflows/ci.yml/badge.svg?branch=main)

Cum rulezi workflow-ul local:

- Prin GH CLI (rulează de oriunde):

```bash
gh workflow run ci.yml -R Druid45ra/gallery-filter --ref main
```

- Prin script `npm` (din folderul `gallery-filter`):

```bash
cd gallery-filter
npm run run-workflow
```

Dacă vrei, pot adăuga un badge de Pages sau pași adiționali în workflow (teste, deploy către altă platformă, invalidare cache). Spune-mi ce preferi.
