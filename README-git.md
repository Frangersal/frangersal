# 1) Ver estado
git status

# 2) (Opcional) Guardar cambios locales no confirmados
git stash -u

# 3) Traer referencias y tags
git fetch --all --tags

# 4A) ESTRATEGIA MERGE (simple, crea commit de merge)
# Configurar por única vez (local al repo)
git config pull.rebase false
# O en global:
# git config --global pull.rebase false
git pull origin main --no-rebase --tags

# 4B) ESTRATEGIA REBASE (historial lineal)
git config pull.rebase true
# O global:
# git config --global pull.rebase true
git pull --rebase origin main --tags
# Si hay conflictos:
#   - Edita archivos, resuelve conflictos
#   - git add <archivos_resueltos>
#   - git rebase --continue
# Al terminar, empuja:
#   - git push        (si no reescribiste remoto)
#   - git push --force-with-lease origin HEAD:main   (si necesitas forzar por rebase)

# 4C) SOLO FAST-FORWARD (falla si hay commits locales)
git config pull.ff only
# O global:
# git config --global pull.ff only
git pull --ff-only origin main --tags

# 5) Restaurar stash si lo hiciste
# git stash pop
