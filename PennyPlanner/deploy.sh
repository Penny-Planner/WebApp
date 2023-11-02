echo "Switching to branch development"
git checkout development

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r public/* marc@85.215.104.144:/var/www/penny-planner.eu/

echo "Done!"