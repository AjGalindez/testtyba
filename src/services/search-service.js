const axios = require("axios");

const searchWithLatLong = async (lat, long) => {
  let allRecords;
  await axios
    .get(
      `https://api.tomtom.com/search/2/nearbySearch/.json?key=BNqFbujlbMyUrAOgk0JxBhqHBTwmo4xX&lat=${lat}&lon=${long}&limit=50&categorySet=7315081,7315002,7315082,7315003,7315083,7315084,7315085,7315062,7315086,7315004`
    )
    .then((result) => {
      allRecords = result.data.results.map((item) => {
        return {
          name: item.poi.name,
          categories: item.poi.categories,
          direction: item.address.freeformAddress,
        };
      });
    })
    .catch((error) => {
      console.log("eror", error);
    });
  return allRecords;
};

module.exports = {
  searchWithLatLong,
};
