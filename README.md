# Octopus API Demo

This repository contains a simple Node.js script that fetches data from the Octopus Energy API.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Export your Octopus API key in the environment:
   ```bash
   export OCTO_KEY=your_api_key_here
   ```
3. Run the script:
   ```bash
   npm start
   ```

The API key should **never** be committed to this repository. It is consumed via the `OCTO_KEY` environment variable.
