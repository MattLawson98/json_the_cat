const request = require("request");
const fetchbreed = function(name) {
  let adress = `https://api.thecatapi.com/v1/breeds/search?q=${name}`;
  
  request(adress,(error,response) => {
    if (error) {
      console.log("Cannot connect to server:",error);
      return;
    }
    const data = JSON.parse(response.body);
    if (response.body) {
      console.log(data[0].description);
    } else console.log("Breed not found!");
  });
};
fetchbreed(process.argv.slice(2)[0]);
