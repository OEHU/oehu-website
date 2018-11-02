# Set node version
nvm use 9.0
# Run build
npm run build
# Empty build folder
rm -R build/*
# Move new build
mv build-copy/* build/

# Go to build
cd build
# Create CNAME file
echo "oehu.org" > CNAME
# Add all files + commit
git add *
git commit -m "New build"
# Push
git push -ff