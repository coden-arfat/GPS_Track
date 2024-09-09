# GPS Tracker Software

A simple GPS tracker application built with Express.js. This application allows you to track and log GPS data from your device.

## Features

- Track GPS data in real-time
- Log GPS data to a file or database
- CLI based interface to view tracked data

## Installation

### Termux

1. **Update Termux packages:**
    ```bash
    pkg update && pkg upgrade
    ```

2. **Install Node.js and npm:**
    ```bash
    pkg install nodejs
    ```

3. **Clone the repository:**
    ```bash
    git clone https://github.com/coden-arfat/GPS_Track.git
    cd GPS_Track
    ```

4. **Install dependencies:**
    ```bash
    npm install
    ```

5. **Start the application:**
    ```bash
    npm start
    ```

6. **Access the web interface:**
    Open your browser and go to `http://localhost:3000`.

7. **Share your localhost URL using Cloudflare Tunnel:**
    - Install Cloudflare Tunnel (formerly Argo Tunnel) using `cloudflared`:
        ```bash
        pkg install cloudflared
        ```
    - Authenticate `cloudflared` with your Cloudflare account:
        ```bash
        cloudflared login
        ```
    - Create a tunnel and expose your localhost URL:
        ```bash
        cloudflared tunnel --url http://localhost:3000
        ```
    - Cloudflare Tunnel will provide a public URL to access your application.

### Linux

1. **Update system packages:**
    ```bash
    sudo apt update && sudo apt upgrade
    ```

2. **Install Node.js and npm:**
    ```bash
    sudo apt install nodejs npm
    ```

3. **Clone the repository:**
    ```bash
    git clone https://github.com/coden-arfat/GPS_Track.git
    cd GPS_Track
    ```

4. **Install dependencies:**
    ```bash
    npm install
    ```

5. **Start the application:**
    ```bash
    npm start
    ```

6. **Access the web interface:**
    Open your browser and go to `http://localhost:3000`.

7. **Share your localhost URL using Cloudflare Tunnel:**
    - Install Cloudflare Tunnel (formerly Argo Tunnel) using `cloudflared`:
        ```bash
        sudo apt install cloudflared
        ```
    - Authenticate `cloudflared` with your Cloudflare account:
        ```bash
        cloudflared login
        ```
    - Create a tunnel and expose your localhost URL:
        ```bash
        cloudflared tunnel --url http://localhost:3000
        ```
    - Cloudflare Tunnel will provide a public URL to access your application.

### Windows

1. **Download and install Node.js:**
    - Go to the [Node.js download page](https://nodejs.org/en/download/)
    - Download and install the LTS version.

2. **Clone the repository:**
    ```powershell
    git clone https://github.com/coden-arfat/GPS_Track.git
    cd GPS_Track
    ```

3. **Install dependencies:**
    ```powershell
    npm install
    ```

4. **Start the application:**
    ```powershell
    npm start
    ```

5. **Access the web interface:**
    Open your browser and go to `http://localhost:3000`.

6. **Share your localhost URL using Cloudflare Tunnel:**
    - Download and install Cloudflare Tunnel (formerly Argo Tunnel) from the [Cloudflare website](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps).
    - Authenticate `cloudflared` with your Cloudflare account:
        ```powershell
        cloudflared login
        ```
    - Create a tunnel and expose your localhost URL:
        ```powershell
        cloudflared tunnel --url http://localhost:3000
        ```
    - Cloudflare Tunnel will provide a public URL to access your application.

### macOS

1. **Install Homebrew (if not already installed):**
    ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```

2. **Install Node.js and npm:**
    ```bash
    brew install node
    ```

3. **Clone the repository:**
    ```bash
    git clone https://github.com/coden-arfat/GPS_Track.git
    cd GPS_Track
    ```

4. **Install dependencies:**
    ```bash
    npm install
    ```

5. **Start the application:**
    ```bash
    npm start
    ```

6. **Access the web interface:**
    Open your browser and go to `http://localhost:3000`.

7. **Share your localhost URL using Cloudflare Tunnel:**
    - Install Cloudflare Tunnel (formerly Argo Tunnel) using Homebrew:
        ```bash
        brew install cloudflared
        ```
    - Authenticate `cloudflared` with your Cloudflare account:
        ```bash
        cloudflared login
        ```
    - Create a tunnel and expose your localhost URL:
        ```bash
        cloudflared tunnel --url http://localhost:3000
        ```
    - Cloudflare Tunnel will provide a public URL to access your application.

## Configuration

You may need to adjust configuration settings depending on your requirements. Check the `config.js` file for available options.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to contribute by submitting issues or pull requests. Please follow the [contribution guidelines](CONTRIBUTING.md) if you have any changes.

## Contact

For any questions or support, please reach out via [Twitter](https://x.com/yn_arfat).
