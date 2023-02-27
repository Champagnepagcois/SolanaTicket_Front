import axios from "axios";
const type = {};
var data = JSON.stringify({
  mint_address: "9pd6wUcfZpPBsrQFxqEkMjfbyaqraQRsiQtD8D4wqa6W",
  price: 1.1,
  confirmation: "finalized",
});

type.CreateTransactionToBuyNFT = async (data) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://api.mirrorworld.fun/v1/devnet/solana/marketplace/transaction/buy",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: data,
  };
  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export default type;
