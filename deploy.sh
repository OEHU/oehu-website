# Empty build folder
rm -R ../oehu-website-build/*
# Move new build
mv ./build-copy/* ../oehu-website-build/
# Create CNAME file
echo "oehu.org" > CNAME
# Git push
cd ../oehu-website-build/
git add *
git commit -m "New build"
git push -ff
