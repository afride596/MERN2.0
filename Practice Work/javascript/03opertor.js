var sellingPrice = 199;
var listingPrice = 800;

var discountPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100;

// Method1


console.log(`discountPercentage is:${Math.round(discountPercentage)}` + "%off");

// method 2

console.log("discountPercentage is:"+Math.round (discountPercentage)+"%off");
