import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;
if(!uri) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
}
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Querying our database
    const cursor = await client.db("test").collection("greetings").find();
    const array = await cursor.toArray();
    console.log(array);
    console.log("Connected successfully to server");
    return array;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default async function Database() {
  const greetings = await run();
  return (
    <>
      {greetings.map((greetingObj) => (
        <h1>{greetingObj.greeting}</h1>
      ))}
    </>
  );
}