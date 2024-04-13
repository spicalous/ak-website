set -e
set -x
npm run build
rm -r docs/*
cp -R src/.vuepress/dist/* docs/