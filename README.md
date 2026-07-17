# recuperarcorreos.cl

Landing de rescate de correo (OST → PST, PST corrupto, buzones huérfanos, migración M365).
Astro + Tailwind v4, lista para Cloudflare Pages con CI/CD desde GitHub — misma mecánica que notebookrepair.cl.

## Antes de publicar: edita 1 archivo

Todo lo personalizable está en **`src/config/site.ts`**:

- `dominio` / `url` → tu dominio exact-match final (ahora es `recuperarcorreos.cl` de placeholder)
- `email` → tu correo de contacto
- `whatsapp` → tu número en formato `569XXXXXXXX` (sin + ni espacios)
- `web3formsKey` → tu Access Key de https://web3forms.com (gratis)

Además, cambia el dominio en `astro.config.mjs` (línea `site:`) y en `public/robots.txt`.

## Correr en local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist
```

## Publicar (Cloudflare Pages)

1. Crea el repo en GitHub y sube el proyecto:
   ```bash
   git init && git add . && git commit -m "init recuperarcorreos"
   git remote add origin https://github.com/abelaguileftoledo/recuperarcorreos.git
   git push -u origin main
   ```
2. Cloudflare → Workers & Pages → Pages → Connect to Git → elige el repo.
3. Build command: `npm run build` · Output directory: `dist` · Framework preset: Astro.
4. Deploy. Luego Custom domain → agrega tu dominio (NIC Chile con nameservers de Cloudflare).
5. Email Routing → crea `contacto@tudominio.cl` reenviando a tu Gmail (igual que en notebookrepair).

## Estructura

```
src/
  config/site.ts        ← ÚNICO archivo a editar
  layouts/Layout.astro  ← SEO, fuentes, JSON-LD
  styles/global.css     ← sistema de diseño (tokens sobrios)
  components/
    Header · Hero · Escenarios · Servicios
    Proceso · Confianza · FAQ · Contacto · Footer
  pages/index.astro
```

## Identidad visual

- Paleta fría y sobria: tinta `#17212b`, papel `#f2f4f3`, acento teal `#0e7a6b` (recuperado / seguro).
- Tipografía: **Newsreader** (serif archivística, titulares) · **IBM Plex Sans** (cuerpo) · **IBM Plex Mono** (detalle técnico: .ost, .pst, folios).
- Elemento de firma: el "registro de recuperación" del hero — transmite competencia forense sin vender humo.
