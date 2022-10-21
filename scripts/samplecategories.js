module.exports = {


  friendlyName: 'Samplecategories',


  description: 'Samplecategories something.',


  fn: async function () {

    
    var category1 = await Category.create({name:'Web'}).fetch();

    var category2 = await Category.create({name:'Mobile'}).fetch();

    console.log(" Category Creation Successful");


  }


};

