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

## CI / GitHub Actions

Am adăugat un workflow GitHub Actions pentru build și încărcare artefacte.

- **Fișier workflow:** `.github/workflows/ci.yml` ([gallery-filter/.github/workflows/ci.yml](gallery-filter/.github/workflows/ci.yml))
- **Trigger:** `push` pe ramura `main` și `workflow_dispatch` (manual)
- **Detalii:** rulează pe Node.js matrix (18, 20), folosește `npm ci` și `npm run build`, apoi încarcă artefactele de build.

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

Doresc să extind workflow-ul cu teste sau deploy? Spune-mi ce preferi.
