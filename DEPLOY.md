# Guía de Despliegue para AJ CAR 25 Website

Este documento proporciona instrucciones detalladas para desplegar el sitio web de AJ CAR 25 en Vercel.

## Requisitos Previos

- Una cuenta en [Vercel](https://vercel.com/)
- Git instalado en tu computadora
- Node.js instalado (versión 18.x o superior)

## Pasos para Desplegar en Vercel

### 1. Preparación del Repositorio

Asegúrate de que tu repositorio esté actualizado y todos los cambios estén confirmados.

```bash
git add .
git commit -m "Preparación para despliegue en Vercel"
git push origin main
```

### 2. Despliegue usando Vercel CLI (Opción Recomendada)

La forma más sencilla es usar la CLI de Vercel:

1. **Instala Vercel CLI globalmente**:
   ```bash
   npm install -g vercel
   ```

2. **Inicia sesión en Vercel**:
   ```bash
   vercel login
   ```

3. **Despliega el proyecto**:
   ```bash
   vercel --prod
   ```

4. Sigue las instrucciones en pantalla. Vercel detectará automáticamente la configuración necesaria gracias al archivo `vercel.json`.

### 3. Despliegue desde la Interfaz Web de Vercel

Si prefieres usar la interfaz web:

1. Ve a [Vercel](https://vercel.com/) e inicia sesión
2. Haz clic en "Add New..." → "Project"
3. Importa tu repositorio desde GitHub, GitLab o Bitbucket
4. En la configuración del proyecto:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`
5. Haz clic en "Deploy"

### 4. Configuración de Variables de Entorno (si es necesario)

Si tu aplicación requiere variables de entorno específicas para producción, puedes configurarlas en:

1. Panel de proyecto de Vercel → Settings → Environment Variables
2. Añade las variables necesarias para producción

### 5. Verificación del Despliegue

Una vez completado el despliegue:

1. Verifica que la aplicación funcione correctamente visitando la URL proporcionada por Vercel
2. Comprueba que todas las rutas funcionen correctamente
3. Verifica que las API y la conexión con el backend funcionen

### 6. Configuración de Dominio Personalizado (Opcional)

Si tienes un dominio propio:

1. En el panel de proyecto de Vercel, ve a Settings → Domains
2. Añade tu dominio personalizado y sigue las instrucciones para configurar los registros DNS

## Solución de Problemas Comunes

### Error 404 en Rutas de la Aplicación
- Verifica la configuración de rutas en `vercel.json`
- Asegúrate de que el output directory sea `dist/public`

### Problemas con la API
- Verifica que las rutas de API estén correctamente configuradas
- Asegúrate de que la ruta `/api/*` esté apuntando a `index.js`

### Fallos en el Despliegue
- Revisa los logs de construcción en Vercel
- Verifica que todas las dependencias estén correctamente instaladas

---

Para más ayuda, consulta la [documentación oficial de Vercel](https://vercel.com/docs).