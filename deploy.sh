#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
# cd dist

# place .nojekyll to bypass Jekyll processing
# echo > .nojekyll
echo > dist/.nojekyll

# if you are deploying to a custom domain
# echo 'www.shawa.dev' > CNAME

# git init
# git checkout -B main
git add -A
git commit --allow-empty -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f origin gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:mo-shawa/mo-shawa.git main:gh-pages

cd -