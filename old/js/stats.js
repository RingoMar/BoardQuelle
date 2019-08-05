
// // let cheerio = require('cheerio')

// // For each .item, we add all the structure of a company to the stats array
// // Don't try to understand what follows because we will do it differently.
// requirejs(["cheerio/cheerio-master/index.js"], function(util) {
//   let $ = cheerio.load('https://twitchstats.net/streamer/zaquelle')
//   var stats = []
//   $('.list.items .item').each(function (index, element) {
//     stats[index] = {}
//     var header = $(element).find('.conta')
//     stats[index]['Follows'] = $(header).find('[class=abxnm1]').text()
//     stats[index]['views'] = $(header).find('[class=abxnm2]').text()
//   // stats[index]['description'] = $(header).find('[rel=description]').text()
//   // stats[index]['url'] = $(header).find('.header [itemprop=name] a').getAttribute('href')
//   });
// });
// console.log(stats)
