echo "Switching to branch deployment"
git checkout deployment

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r public/* marc@85.215.61.94:/var/www/85.215.61.94/

echo "Done!"