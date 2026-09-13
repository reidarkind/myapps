# myapps

Portal for hobbyappene [Bananmatte](https://reidarkind.github.io/bananmatte/), [StoreAlfabet](https://reidarkind.github.io/storealfabet/) og [FactHunter](https://reidarkind.github.io/facthunter/).

Live: [reidarkind.github.io/myapps](https://reidarkind.github.io/myapps/)

Støtte: [buymeacoffee.com/reidarkind](https://buymeacoffee.com/reidarkind)

## Lokalt

```powershell
node --test test/i18n.test.mjs
python -m http.server 4173
```

Åpne `http://127.0.0.1:4173/`.

## Deploy

Push til `main` kjører test og GitHub Pages.

Første gang: GitHub → Settings → Pages → Source = **GitHub Actions**.
