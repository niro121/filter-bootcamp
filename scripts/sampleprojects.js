module.exports = {


  friendlyName: 'Sampleprojects',


  description: 'Sampleprojects something.',


  fn: async function () {

    for (let index = 0; index < 5; index++) {

      var project = await Projects.create({name:'Project ' + index, category : "63522537a09354389327ba73" , tags: ["Dilshan", "Kalpa"] }).fetch();
      
    }

    for (let index = 5; index < 10; index++) {

      var project = await Projects.create({name:'Project ' + index, category : "63522537a09354389327ba74",  tags: ["Chamindu", "Lasika"]}).fetch();
      
    }

  }


};

