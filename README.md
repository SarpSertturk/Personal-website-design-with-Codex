# Personal Website: Philosophy Writings by Sarp Sertturk

A mobile-friendly English website presenting 39 philosophy writings written over the course of one year.

**Live website:** [https://sarpsertturk.com](https://sarpsertturk.com)

## Project files

- `index.html`, `styles.css`, and `app.js` provide the site interface and behavior.
- `writings.json` and `translations.json` contain the essay catalog and English text.
- `assets/` contains the author portrait, essay illustrations, and original writing files.
- `dist/` contains the published static site files.
- `docs/Website_Development_Process_Sarp_Sertturk.docx` summarizes the request, development methodology, and result.

## Preview locally

From this folder, run:

```powershell
py -m http.server 8000 --directory dist
```

Then open <http://localhost:8000> in a browser.
