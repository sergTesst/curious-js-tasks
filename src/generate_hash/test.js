const assert = require("assert");
const generateHashtag = require("./index");

describe("Hashtag generator test", () => {
  it("Checks an empty result", () => {
    assert.equal(generateHashtag(""), false, "Expected an empty string to return false");
  });

  it("Checks a very long result", () => {
    assert.equal(generateHashtag("a".repeat(140)), false, "Expected string length greater than 140 to return false");
  });

  it("Checks for a correct hashtag", () => {
    assert.equal(generateHashtag("    Hello     World   "), "#HelloWorld", "Should trim empty space");

    assert.equal(
      generateHashtag("Do We have A Hashtag"),
      "#DoWeHaveAHashtag",
      "Expected a Hashtag (#) at the beginning."
    );
    assert.equal(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.");
    assert.equal(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.");
    assert.equal(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.");
    assert.equal(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars");
    assert.equal(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work");
    assert.equal(generateHashtag("a".repeat(140)), false, "Too long");
  });
});
