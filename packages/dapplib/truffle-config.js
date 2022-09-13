require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict process broken skull stone note mirror purity gesture casino slot genre'; 
let testAccounts = [
"0x0de86599207da83a770568df0bbc1031165ced3c02684d3e8bb3752089b15c15",
"0x6f18c8bc906547f03729ee5836adf2c0d890bf154d67742e82f45e56a8b01b62",
"0x4527ae43d1c7e861f7bc6055219e0958c636944f586be84329bccd6fad6431d2",
"0x802b239cd2702e0bdcc3f06d2270cdefbc1fdf0ebcaf27393c27ea9ac467f36d",
"0x6445aa2e4b88ecda4f98b3fc90a21a8b9017520465e9c867bd208d8019e892f5",
"0x87cf93706082280df4a246ae3db06c63259df62e3da5f4385535a431c3559f56",
"0xa995da3482c860460b5a23642f91c1afd2e381aaf0eb5336cff2f390b850899c",
"0x46adadb247cf6334549a8be69ac9fadca876634b52c6c5264643262dfeddb7d9",
"0x8777a065c3447dd294ef19aea7fbf6b68929981aac0072d9f438e9466887ea73",
"0xd91072ec1062a659fdf61315130ae6a36eb2f5928949e3d4d91bebb20aedff80"
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

