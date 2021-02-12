const request = require("request");

const breedFetcher = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, // api search for breed
    function(error, response, body) {
      if (error) {
        callback(error);
      }
      const data = JSON.parse(body); //parse data into string format
      if (data[0] === undefined) { //if no data for breed (does not exist), return undefined
        return callback(error);
      }
      callback(error, data[0].description);
    }
  );
};

module.exports = breedFetcher;