require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace indoor sure security trap cruise ridge toss grace basket forget sunny'; 
let testAccounts = [
"0xcadaf857aa8c63d439915c6cf7da46489ef01f6bd351b5679b295ea706137b63",
"0x4e2e0d2f38d939f15a8825b6192291106676d2efbb518375f103467b3aab8114",
"0xd1359c1988af4291df0d6e7f8828a959ef732925e3df38de6e0b2b9d435a615f",
"0x9c19c5a0622fff1928b1c0180d309001ce0f7cc5afc3602eec00b8ce5d2772ed",
"0x8b99ec5f38969a868fcd6c7523b99112989175e5f13b90a0231ef54bd3d1eaad",
"0x98fa4989bf0f4a3854d445ba9c676ec1b7b82628c7b341c05ecedc8df93b57e5",
"0x000a48105c033c64560d51f1675ad59310d75e3c6b4afa74a7492653e87d92fc",
"0x9d3802a6ab1a3b9fa1b29e781d9ed3bd9f29bacab52f41151b48516854179d4b",
"0x690a43604700781f9e4ce84d0b0da36060afbe90d8a9859452bf069ad2a381a8",
"0x3508d3e1670b6d1ef115bb7faf630502906c88185d8a84433a95f86bf4e96d66"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

