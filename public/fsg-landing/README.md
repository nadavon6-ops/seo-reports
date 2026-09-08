# FSG · Landing Page

Landing page para **Fernanda Sepúlveda Grasins**, abogada · derecho inmobiliario.

## Stack actual

Single-page React con Babel in-browser. Funciona abriendo `index.html` directo, pero está pensado para ser migrado a **Next.js 15 + TypeScript** antes de deploy.

## Estructura

```
landing_page/
├── index.html              # Entry point (reemplazar por Next layout)
├── colors_and_type.css     # Design tokens globales (copiar a app/globals.css)
├── site.css                # Layout + componentes (mover a cada component.module.css)
├── components/             # 8 componentes JSX → portar a .tsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── ServiceDetail.jsx
│   ├── Process.jsx
│   ├── About.jsx
│   ├── ContactModal.jsx
│   └── FooterParts.jsx
├── assets/                 # logos + retratos → mover a public/
├── fonts/                  # Nexa OTF → mover a public/fonts/
├── screenshots/            # referencia visual (01..05)
└── HANDOFF.html            # brief completo — abrir primero
```

## Para Claude Code

**Lee `HANDOFF.html` primero.** Tiene los screenshots, tokens, reglas y el plan de migración.

### Reglas de replicación
- **Replicar, no rediseñar.** Los screenshots son el contrato visual.
- **Migrar JSX verbatim** a TSX. Tipar props, agregar `'use client'` donde haga falta.
- **No cambiar** colores, tipografías, spacing, copy, layouts.
- **Sí puedes:** optimizar con `next/image`, setup rutas, conectar form a Resend.

### Migración a Next.js

```bash
npx create-next-app@latest fsg-web --typescript --app --eslint --no-tailwind
cd fsg-web

# tokens y assets
cp ../landing_page/colors_and_type.css app/globals.css
cp -r ../landing_page/fonts public/
cp -r ../landing_page/assets public/

# componentes
mkdir components
cp ../landing_page/components/*.jsx components/
# renombrar uno por uno a .tsx y tipar
```

### Rutas sugeridas (App Router)

```
app/
├── layout.tsx          # Header + Footer + globals
├── page.tsx            # Hero + Services + Process + About preview
├── servicios/
│   └── [slug]/page.tsx
├── sobre-mi/page.tsx
└── contacto/page.tsx
```

### Deploy a Vercel

```bash
git init
git add .
git commit -m "feat: FSG landing migrated to Next"
git remote add origin <repo-url>
git push -u origin main
# conectar en vercel.com/new → auto-detecta Next
```

## Design tokens

Ver `colors_and_type.css`. Paleta cuatripartita estricta:
- Navy `#1C3163` — `--navy-700`
- Ink `#00071B` — `--navy-950`
- Dorado `#D6B585` — `--gold-500`
- Paper `#FEFFFF` — `--paper`

Tipografía: **Nexa** (Light/Regular/Bold) + **Cormorant Garamond** itálica para acentos.

## Reglas de marca

- Español. Sentence case. Tratamiento "usted" o voz neutra.
- Cero emoji. Cero superlativos. Cero "tú" informal.
- Cifras chilenas: `UF 1.250` · `CLP 45.000.000`.
- Dorado es joya, no muro. 2% de la página máximo.

— *Atendido personalmente.*
