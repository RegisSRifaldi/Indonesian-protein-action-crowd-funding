<br />
<p align="center">
    <a href="https://github.com/RegisSRifaldi/Indonesian-protein-action-crowd-funding"> 
    <img src="https://postimg.cc/0K51ynBs" alt="Logo" width="300" height="300">
    </a>

   <p align="center">
   Decentralized Crowfunding | Indonesian Protein Action
   <br/> 
   <br/>
   <a href="https://indonesianproteinaction.netlify.app/">View Demo</a> 
   </p>
</p>

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Deployment](#deployment)
  - [Contract Address](#contract-address)
  - [Run Locally](#run-locally)
- [Authors](#authors)
- [Reference](#reference)

## About The Project

![Screen Shoot](https://postimg.cc/0K51ynBs)
The Indonesian protein action crowdfunding project aims to encourage and provide incentives to people who contribute to humanity.

## Built With

Technologies used in the project:

- [Solidity](https://soliditylang.org/)
- [Hardhat](https://hardhat.org/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node JS](https://nodejs.org/en)
- [Thirdweb](https://thirdweb.com/)

## Getting Started

### Prerequisites

- You need to have the currently maintained [Node.js](https://nodejs.org/en) LTS version installed.

### Installation

1. Clone the repo:

   ```sh
   git clone https://github.com/RegisSRifaldi/Indonesian-protein-action-crowd-funding.git
   ```

2. Install all NPM packages in the `client` directories. Run each of the following commands from the project's directory:

   ```sh
   cd client && npm install
   ```

   ```sh
   cd web3 && npm install
   ```

3. Create file `.env` on folder `web3` copy `PRIVATE_KEY` on `Meta Mask`:
   ```sh
   PRIVATE_KEY=Your_Private_Key
   ```

### Deployment

1. change direcotry

   ```sh
   cd contract
   ```

2. Run this command in terminal

   ```sh
   npx thirdweb@latest deploy
   ```

3. Transactions to deploy ThirdWeb using Metamask using the bsct network
4. Create binance smart chain testnet api for clientid on main.jsx

### Contract Address

1. Copy your Contract Address on tridweb paste
   Folder context/index.jsx

   const { contract } = useContract(

   ```sh
   "Your contract address"
   ```

   );

### Run Locally

You can run this project locally to try it out.

1. Change directory to `client`:

   ```sh
   cd client
   ```

2. Start the vite local development server.

   ```sh
   npm run dev
   ```

3. Open `http://localhost:5173`.

## Authors

[RegisSRifaldi](https://github.com/RegisSRifaldi/)

## Reference

[JavaScript Mastery](https://www.youtube.com/watch?v=BDCT6TYLYdI)
