#!/bin/bash

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Restarting PM2 process..."
pm2 restart keyrambit

echo "Restarting Nginx..."
sudo systemctl restart nginx

echo "✅ Deployment complete."