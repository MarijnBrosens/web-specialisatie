//Meteor.subscribe('recipes');
//console.log(Meteor.settings.public.ga.account);

Template.Recipes.onCreated(function () {
	var self = this;
	self.autorun(function () {
		self.subscribe('recipes');
	});
});

Template.Recipes.helpers({
	// alle recepten
	recipes: ()=> {
		return Recipes.find({

		});
	}
});