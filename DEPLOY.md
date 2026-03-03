# Deploy a Vercel - KREAR Landing

## Pre-requisitos
- Cuenta en Vercel
- Vercel CLI instalado: `npm i -g vercel`

## Opción 1: Deploy desde GitHub (Recomendado)

1. Push del código a GitHub
2. En Vercel Dashboard: **Add New Project**
3. Importar el repositorio
4. Vercel detecta automáticamente Next.js
5. Click en **Deploy**

**Variables de entorno**: Si necesitás configurar alguna, hacelo en Project Settings > Environment Variables

## Opción 2: Deploy desde CLI

```bash
# Login (solo la primera vez)
vercel login

# Deploy a preview
vercel

# Deploy a producción
vercel --prod
```

## Configuración

El proyecto ya tiene:
- ✅ `vercel.json` con configuración optimizada
- ✅ `.vercelignore` para excluir archivos innecesarios
- ✅ `next.config.ts` con optimizaciones de producción
- ✅ Headers de seguridad configurados
- ✅ Compresión habilitada
- ✅ Optimización de imágenes

## Build local

```bash
npm run build
npm run start
```

## Región

Configurado para usar **gru1** (São Paulo) por defecto en `vercel.json`.
Para cambiarlo editá el archivo según tu necesidad:
- `gru1` - São Paulo, Brazil
- `iad1` - Washington, DC, USA
- `sfo1` - San Francisco, CA, USA

## Monitoreo

Una vez deployado, podés ver:
- Analytics en Vercel Dashboard
- Logs en tiempo real
- Performance metrics
- Edge Network distribution
