const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
// This is CommonJS syntax for importing code modules in javascript providing
// This is a WHOLE thing right now, but CommonJS is the historical module system that
// Node.JS uses/first used and is entrenched in the echosystem. However, in recent years, javascript has instituted it's own official modules system 
// (EMS) and node now does support that as well, and there's a big push to move to it but uptake has been slow.
// interactions between the two are pretty dicey and there's a lot of consternation and handwringing in the developer community ¯\_(ツ)_/¯.

// This line defines the export (CommonJS syntax) of a configuration object that 11ty will use. Just using this to add in
// the navigation plugin. 
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};