echo "Switching to branch deployment"
git checkout deployment

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r public/* marc@85.215.104.144:/var/www/85.215.104.144/

echo "Done!"