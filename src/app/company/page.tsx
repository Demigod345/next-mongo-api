export default function Company() {     
    console.log("Rendering Company component");
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Company</h1>
      <p className="my-4">
        This is a web3 app, built with Next.js and Wagmi. It uses the Reown
        AppKit to connect to the Oasis Sapphire Testnet.
      </p>
      <w3m-button />
      <p className="my-4">
        The app has a simple UI that allows you to store and retrieve a value
        from a smart contract.
      </p>
      <p className="my-4">
        The app also uses the Reown AppKit to connect to the Oasis Sapphire
        Testnet and retrieve the current block number.
      </p>
    </div>
  );
}
