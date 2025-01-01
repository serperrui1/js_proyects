#!/bin/bash

# Limpiar la rama gh-pages (si existe)
git checkout gh-pages || git checkout --orphan gh-pages
git rm -rf .

# Copiar Stack-Tower-2D a la subruta correcta
mkdir stack-tower
cp -r Stack-Tower-2D/* stack-tower/

# Copiar tienda-react a la subruta correcta
mkdir tienda
cp -r tienda-react/build/* tienda/

# Commit y push a gh-pages
git add .
git commit -m "Actualización de GitHub Pages"
git push origin gh-pages -f
git checkout master #Volvemos a la rama principal (main)