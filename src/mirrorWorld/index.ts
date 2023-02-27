import { MirrorWorld, ClusterEnvironment } from "@mirrorworld/web3.js";
const URLTokenMirror = "mw_U9w4i8sh6hALNUWBE89p0JNzQ2imgg4MfAX";

const mirrorworld = new MirrorWorld({
    //apiKey: `${process.env.REACT_APP_MIRROR_WORLD_API_URL_KEY}`, // Replace this with the API Key for your project
    apiKey: URLTokenMirror,
    env: ClusterEnvironment.testnet, // Can be ClusterEnvionment.mainnet for mainnet
  });
const collection = await mirrorworld.createVerifiedCollection({
    name: "COLLECTION_NAME",
    symbol: "COLLECTION_SYMBOL",
    metadataUri:
      "https://metadata-assets.mirrorworld.fun/sdk/metadata_json/mirror_sdk.json",
  })
  
  // Returns `IVerifiedCollection`
  export interface IVerifiedCollection {
    mint_address: string
    url: string
    update_authority: string
    creator_address: string
    name: string
    symbol: string
    collection?: null
    signature: string
    status: string
  }