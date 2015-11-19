Meteor.publish('recipes',function () {
	// enkel de recepten van de gebruiker
	return Recipes.find({ author: this.userId });
});

Meteor.publish('singleRecipe',function (id) {
	// enkel 1 recept van de gebruiker
	check(id,String);

	return Recipes.find({_id: id});
});