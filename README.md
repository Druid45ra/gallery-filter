# Gallery Filter Project

O aplicație de galerie modernă realizată cu JavaScript Vanilla și Tailwind CSS.

## Funcționalități
- **Filtrare Dinamică**: Filtrează imagini fără reîncărcarea paginii.
- **UI Responsiv**: Layout-ul se adaptează de la mobil la desktop (Grid).
- **Animații Fluide**: Tranziții de scalare și opacitate la filtrare.
- **Accesibilitate**: Utilizarea atributelor data și structură semantică.

## Instrucțiuni de rulare
1. Clonează folderul proiectului.
2. Deschide `index.html` în orice browser modern.
3. (Opțional) Dacă dorești să modifici Tailwind, asigură-te că ai procesorul activat, deși în acest demo am folosit varianta CDN pentru ușurință.

## Arhitectură Cod
- **HTML**: Folosește clase utility-first de la Tailwind.
- **CSS Custom**: Am adăugat o clasă `.is-hidden` în head pentru a gestiona tranziția între `opacity: 0` și `display: none`.
- **JS**: Logica este modulară, separând responsabilitatea de filtrare de cea de actualizare a interfeței (UI).
# gallery-filter
