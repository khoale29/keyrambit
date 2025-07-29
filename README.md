# Keyrambit Deployment Instructions

1. **Remove existing keyrambit directory**:
   ```bash
   sudo rm -r -f keyrambit
   ```

2. **Copy keyrambit to server**:
   - Copy the keyrambit project to the server.
   - Ensure `node_modules` and `.next` directories are removed for a clean setup.

3. **Navigate to project directory**:
   ```bash
   cd keyrambit
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Build the project**:
   ```bash
   npm run build
   ```

6. **Restart keyrambit process with PM2**:
   ```bash
   pm2 restart keyrambit
   ```

7. **Restart Nginx**:
   ```bash
   sudo systemctl restart nginx
   ```
