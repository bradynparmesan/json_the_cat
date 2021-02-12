// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a correct string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, breedDescription) => {
      assert.equal(error, null);
      const expDescription = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expDescription, breedDescription.trim()); // test to compare fetched description to expected
      done();
    });
  });

  it('returns an undefined description for an invalid/non-existent breed, via callback', (done) => {
    fetchBreedDescription('cheshire', (error, breedDescription) => {
      assert.equal(error, null);
      assert.equal(breedDescription, undefined); // tests for non-existent breed and incorrect breed entry
      done();
    });
  });
});