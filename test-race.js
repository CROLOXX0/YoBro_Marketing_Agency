const http = require('http');

function postData(path, data) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data);
    const options = {
      hostname: '127.0.0.1',
      port: 3000,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    const req = http.request(options, (res) => {
      let responseBody = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { responseBody += chunk; });
      res.on('end', () => { resolve({ status: res.statusCode, body: responseBody }); });
    });

    req.on('error', (e) => { reject(e); });
    req.write(postData);
    req.end();
  });
}

async function run() {
  try {
    console.log("Posting to /api/pricing...");
    // Just post empty pricing update
    const p1 = await postData('/api/pricing', {});
    console.log("Pricing response:", p1.status, p1.body);

    console.log("Posting to /api/settings...");
    const p2 = await postData('/api/settings', { code: "Yobro2026", percentage: 55 });
    console.log("Settings response:", p2.status, p2.body);

    console.log("Reading data.json...");
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    console.log("Current percentage in data.json:", data.discountSettings.percentage);
  } catch (err) {
    console.error(err);
  }
}

run();
