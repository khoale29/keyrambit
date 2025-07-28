sudo rm -r -f keyrambit
(COPY KEYRAMBIT TO SERVER // XOA mode_modules, .next di cho nhe)
cd keyrambit
npm install
npm run build
pm2 restart keyrambit
sudo systemctl restart nginx
