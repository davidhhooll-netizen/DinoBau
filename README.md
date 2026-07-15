# DP Bau

Landing Page für DP Bau (Dinu Popusoi) – Gebäudereinigung, Brückeninstandsetzung und Glasfaser-/Tiefbauarbeiten.

Statische Seite ohne Build-Schritt: alles (HTML, CSS, JS) in einer einzigen `index.html`. Externe Assets nur via CDN (particles.js, typed.js, ScrollReveal) und Google Fonts. Bilder in `assets/` werden aktuell nicht verwendet.

## Lokal ansehen

```
open index.html
```

## Kontaktformular einrichten (Web3Forms)

Das Formular sendet per [Web3Forms](https://web3forms.com) an `dinu.bau.kr@gmail.com`.

1. Auf https://web3forms.com mit `dinu.bau.kr@gmail.com` einen kostenlosen Access Key anfordern (per E-Mail bestätigen).
2. In `index.html` den Platzhalter `YOUR_WEB3FORMS_ACCESS_KEY` (im `<input type="hidden" name="access_key">`) durch den erhaltenen Key ersetzen.

## Hosting

Kann direkt z. B. über GitHub Pages veröffentlicht werden (Branch `main`, Root-Verzeichnis).
