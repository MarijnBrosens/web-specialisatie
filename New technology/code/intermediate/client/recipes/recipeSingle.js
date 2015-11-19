Template.RecipeSingle.onCreated(function () {
	var self = this;
	self.autorun(function () {
		// enkel subscriben op huidige id
		var id = FlowRouter.getParam('id');
		self.subscribe('singleRecipe', id);
	});
});

Template.RecipeSingle.helpers({
	// alle recepten
	recipe: ()=> {
		var id = FlowRouter.getParam('id');
		return Recipes.findOne({_id: id});
	}
});