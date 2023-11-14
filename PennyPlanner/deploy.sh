echo "Switching to branch deployment2"
git checkout deployment2

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r public/* marc@85.215.61.94:/var/www/85.215.61.94/

echo "Done!"