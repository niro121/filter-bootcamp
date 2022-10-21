module.exports = {


  friendlyName: 'Filter category',


  description: '',


  inputs: {

    category_id : {
      type : 'string'
    },

    page : {
      type : 'number'
    },

    selectedTags : {
      type : 'ref'
    }

  },


  exits: {

  },


  fn: async function (inputs,exits) {

    console.log(inputs);

    var data = await Projects.find(
      {
        category:inputs.category_id,
        tags: inputs.selectedTags
      }
      ).paginate(inputs.page, 2).sort('createdAt ASC');

    console.log(data);

    return exits.success({
      data : data ? data : [],
    });


  }


};
