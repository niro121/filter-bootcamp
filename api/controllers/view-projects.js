module.exports = {


  friendlyName: 'View projects',


  description: 'Display "Projects" page.',

  inputs: {

  },


  exits: {

    success: {
      viewTemplatePath: 'pages/projects'
    }

  },


  fn: async function (inputs,exits) {

    var uniq = require('lodash.uniq');

    var category_list = await Category.find();
    var tagList = await Projects.find({ select: ['tags'] });

    var simpleArray = [];

    tagList.forEach(tag => {

      tag.tags.forEach(element => {
        simpleArray.push(element)
      });

    });

   var uniqueTags = uniq(simpleArray);

   var data = await Projects.find().limit(2).sort('createdAt ASC');
   var totalDataCount = await Projects.count();

    return exits.success({
      
      category_list : category_list  ?  category_list : [],
      uniqueTags : uniqueTags ? uniqueTags : [],
      data : data ? data : [],
      totalDataCount : totalDataCount ? totalDataCount : 0,
      page:0,

    });


  }


};
