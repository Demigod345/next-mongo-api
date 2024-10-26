import { OasisSapphireTestnet } from "./OasisSapphireTestnet";
import { ethers, verifyMessage, Wallet } from "ethers";
import contractABI from "./contractABI.json" assert { type: "json" };
const contractAddress = "0xb41175aa3ff245c29BE0EC53AB37c8c319259daA";
import * as sapphire from '@oasisprotocol/sapphire-paratime';

let Contract: ethers.Contract | null = null;

if (!process.env.PRIVATE_KEY) {
    throw new Error('Invalid/Missing environment variable: "PRIVATE_KEY"')
}

export default async function GetContract(){
    if (Contract == null) {
        const url = OasisSapphireTestnet.rpcUrls.public.http[0];
        const privateKey = '0x' + process.env.PRIVATE_KEY;
        const signer = sapphire
                        .wrap(new ethers.Wallet(privateKey))
                        .connect(ethers.getDefaultProvider(sapphire.NETWORKS.testnet.defaultGateway));

        console.log(signer.address);
        Contract = new ethers.Contract(contractAddress, contractABI, signer);
    }
    return Contract;
}