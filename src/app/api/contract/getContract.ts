import { OasisSapphireTestnet } from "./OasisSapphireTestnet";
import { ethers, verifyMessage, Wallet } from "ethers";
import contractABI from "./contractABI.json" assert { type: "json" };
const contractAddress = "0xb41175aa3ff245c29BE0EC53AB37c8c319259daA";

let contract = null;

export default async function GetContract() {
    if (contract == null) {
        const url = OasisSapphireTestnet.rpcUrls.public.http[0];
        const privateKey = '0x' + process.env.PRIVATE_KEY;
        // console.log(privateKey);
        const signer = await new ethers.Wallet(privateKey);
        const provider = await new ethers.JsonRpcProvider(url);
        // console.log(signer);
        const wallet = signer.connect(provider);
        // console.log(wallet);
        // const wallet = await new ethers.Wallet(privateKey)
        console.log(signer.address);
    
        contract = new ethers.Contract(contractAddress, contractABI, wallet);
    }

    return contract;
}