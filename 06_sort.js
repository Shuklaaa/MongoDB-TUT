// BUILDING THE DATABASE
db.inventory.insertMany([
    { item: "journal", qty: 25, tags: ["blank", "red"], size: { h: 14, w: 21, uom: "cm" } },
    { item: "mat", qty: 85, tags: ["gray"], size: { h: 27.9, w: 35.5, uom: "cm" } },
    { item: "mousepad", qty: 25, tags: ["gel", "blue"], size: { h: 19, w: 22.85, uom: "cm" } }
 ])



db.inventory.find().sort({qty : -1});  //sorths the data in descending order
db.inventory.find().sort({qty : 1});  //sorths the data in ascending order

db.inventory.find().skip(1); //skips the first document and prints the resto of the elemnts

db.inventory.find().limit(1);  //limits the documents to only one and prints that one