import express, { response } from 'express'; // Import express
import cors from 'cors'; // Import cors
import bodyParser from 'body-parser'; // Import body-parser
import puppeteer from 'puppeteer'; // Import puppeteer for web scraping


const app = express(); // Initialize app here
const PORT = process.env.PORT || 3001;


app.get ('/', (req, res) => {
  res.send('Hello World!');
} );


app.use(cors());
app.use(bodyParser.json());


// Temporary in-memory storage
const scanData = {};
let progress = 0;


// Helper Functions
const getIpAddress = async () => {
  try {
    return await publicIp.v4(); // Use public-ip library to get the public IP address
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return 'Unknown'; // In case of an error, fallback to "Unknown"
  }
};




const getTrackersOrigin = async (url) => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });


    // Extract all the script sources and iframe sources
    const trackerOrigins = await page.evaluate(() => {
      const scriptSources = Array.from(document.querySelectorAll('script[src]')).map(script => script.src);
      const iframeSources = Array.from(document.querySelectorAll('iframe[src]')).map(iframe => iframe.src);
     
      return [...scriptSources, ...iframeSources]; // Combine both sources
    });


    await browser.close();
    return trackerOrigins.length > 0 ? trackerOrigins : ['No trackers found']; // Return found trackers, or fallback message
  } catch (error) {
    console.error('Error fetching tracker origin:', error);
    return 'Unknown'; // Fallback in case of error
  }
};
const calculateRiskRate = (trackers) => {
  if (trackers < 3) {
    return 'Low';
  } else if (trackers >= 3 && trackers <= 6) {
    return 'Medium';
  } else {
    return 'High';
  }
};


// Start scan
app.post('/api/scan/start', async (req, res) => {
  const { url } = req.body;
  const scanId = Date.now().toString();


  const cookies = Math.floor(Math.random() * 10);
  const trackers = Math.floor(Math.random() * 10);
  const total = cookies + trackers;
  const density = total > 0 ? ((trackers / total) * 100).toFixed(2) : 0;


  // Fetch the actual IP address
  let ipAddress = 'Unknown';
  try {
    ipAddress = await getIpAddress();
  } catch (error) {
    console.error('Error fetching IP address:', error);
  }


  // Fetch the actual trackers' origin
  let trackerOrigin = 'Unknown';
  try {
    trackerOrigin = await getTrackersOrigin(url);
  } catch (error) {
    console.error('Error fetching tracker origin:', error);
  }


  // Calculate the risk rate dynamically
  const riskRate = calculateRiskRate(trackers);


  // Store the scan data
  scanData[scanId] = {
    url,
    date: new Date().toISOString(),
    cookies,
    trackers,
    origin: trackerOrigin,
    ip: ipAddress,
    density: Number(density), // Density as percentage
    riskrate: riskRate, // Risk rate based on trackers
  };


  progress = 0;


  // Simulate scan process
  const interval = setInterval(() => {
    progress += 20;
    if (progress >= 100) {
      clearInterval(interval);
    }
  }, 1000);


  res.json({ scanId });
});


// Get scan progress
app.get('/api/scan/progress/:scanId', (req, res) => {
  const scanId = req.params.scanId;
  res.json({ progress, status: progress >= 100 ? 'done' : 'scanning' });
});


// Get scan summary
app.get('/api/scan/summary/:scanId', (req, res) => {
  const scanId = req.params.scanId;
  if (scanData[scanId]) {
    res.json(scanData[scanId]);
  } else {
    res.status(404).json({ error: 'Scan not found' });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
