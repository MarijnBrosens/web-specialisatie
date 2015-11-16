Resolutions = new Mongo.Collection('resolutions');

if (Meteor.isClient) {
  Template.body.helpers({
    resolutions: function () {
    	if( Session.get('hideFinished')){
    		return Resolutions.find({ checked: {$ne: true}});
    	} else {
    		return Resolutions.find();
    	}
    },
    hideFinished: function () {
    	return Session.get('hideFinished');
    }
  });

  Template.body.events({ // in body
  	'submit .new-resolution' :  function (event) {
  		var title = event.target.title.value; // waarde van title ophalen

  		Resolutions.insert({
  			title: title,
  			createdAt: new Date()
  		}); // title toevoegen

  		event.target.title.value = ''; // field leeg zetten
  		return false; // refresh van pagina voorkomen
  	},
  	'change .hide-finished': function (event) {
  		Session.set('hideFinished', event.target.checked);
  	}
  });

  Template.resolution.events({ // in de template resolution
  	'click .toggle-checked' : function () {
  		Resolutions.update( this._id, { $set: {
  			checked: !this.checked
  		}});
  	},
  	'click .delete' : function () {
  		Resolutions.remove(this._id); // delete huidige id
  	}
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
  // code to run on server at startup
  });
}