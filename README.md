# Problemas y retos de el México presente

Aplicación editorial creada con React, Vite, Bootstrap 5, Bootstrap Icons, React Router y Recharts. El sitio organiza los temas en rutas internas y presenta los datos mediante gráficas y visualizaciones.

## Instalar dependencias

```bash
npm install
```

## Correr en desarrollo

```bash
npm run dev
```

## Compilar para producción

```bash
npm run build
```

## Cambiar imágenes

Todas las URLs de imágenes están en:

```txt
src/data/topicImages.js
```

Cada entrada incluye `src`, `alt` y `caption`. Cambia solo ese archivo para reemplazar imágenes por tema.

## Editar datos de gráficas

Los datos usados por Recharts están centralizados en:

```txt
src/data/chartData.js
```

Ahí se pueden ajustar proyecciones, porcentajes y comparativas sin tocar los componentes visuales.

## Editar contenido principal

El contenido temático está en:

```txt
src/data/topics.js
src/data/navigation.js
```

Las páginas están en:

```txt
src/pages/
```

Los componentes reutilizables están en:

```txt
src/components/
src/components/charts/
```

Los estilos personalizados están en:

```txt
src/styles/
```
