1. db.inventory.find()  //fetch all database
db.inventory.find({})  //fetch all database
2. db.inventory.find({qty:25})

3. db.inventory.find( { tags: { $in: [ "red", "D" ] } } )

// QUERY
db.inventory.find( { status: { $in: [ "A", "D" ] } } )


// AND OPERATION
db.inventory.find( { status: "A", qty: { $lt: 30 } } )

// OR OPERATION
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )

// FETCH ONLY ONE DOCUMENT NOT AN ARRAY
db.inventory.findOne( { status: { $in: [ "A", "D" ] } } )