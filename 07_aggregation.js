db.orders.aggregate( [

    // Stage 1: Filter pizza order documents by date range
    {
       $match:
       {
          "date": { $gte: new ISODate( "2020-01-30" ), $lt: new ISODate( "2022-01-30" ) }
       }
    },
    
 
    // Stage 2: Group remaining documents by date and calculate results
    {
       $group:
       {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
          totalOrderValue: { $sum: { $multiply: [ "$price", "$quantity" ] } },
          averageOrderQuantity: { $avg: "$quantity" }
       }
    },
 
    // Stage 3: Sort documents by totalOrderValue in descending order
    {
       $sort: { totalOrderValue: -1 }
    }
 
  ] )