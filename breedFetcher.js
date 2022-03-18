const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  let adress = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(adress,(error,response) => {
    if (error) {
      return callback(error);
    }
    if (response.body) {
      const data = JSON.parse(response.body);
      if (data[0] !== undefined) {
        if (data[0].description) {
          return callback(null,data[0].description);
        }
      } else return callback("This breed has no description!");
    } else return callback("This breed is not found!");
  });
};

module.exports = { fetchBreedDescription };
