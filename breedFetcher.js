const request = require("request");

const breedFetcher = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
    function(error, response, body) {
      if (error) {
        callback(error);
      }
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        return callback(error);
      }
      callback(error, data[0].description);
    }
  );
};

module.exports = { breedFetcher };