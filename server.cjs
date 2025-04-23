// CommonJS version of server for compatibility
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

// MIME types for different file extensions
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
  };

  // Create HTTP server
  const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url}`);
    
    // Normalize the URL path
    let filePath = '.' + req.url;
    if (filePath === './') {
      filePath = './index.html';
    }
    

     // Get file extension
      const extname = path.extname(filePath);
      let contentType = MIME_TYPES[extname] || 'application/octet-stream';
      
      // Read the file
      fs.readFile(filePath, (err, content) => {
        if (err) {
          if (err.code === 'ENOENT') {
            console.error(`File not found: ${filePath}`);
            // Page not found
            fs.readFile('./index.html', (err, content) => {
              if (err) {
                // If even the index.html is not found
                console.error('index.html not found', err);
                res.writeHead(500);
                res.end('Error: Could not load index.html');
              } else {

                 // Serve index.html for any non-existing path (SPA behavior)
            console.log('Serving index.html as fallback');
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        // Server error
        console.error(`Server error: ${err.code}`, err);
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success - file found and read
      console.log(`Serving: ${filePath} as ${contentType}`);
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});


// List all files in directory for debugging
console.log('Files in current directory:');
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
  } else {
    files.forEach(file => {
      console.log('- ' + file);
    });
  }
});
// Start server
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${PORT}/`);
    console.log(`Access the app at http://localhost:${PORT}/`);
  });