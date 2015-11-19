// Monog.Cikkection : nieuwer dan Meteor.Collection
Recipes = new Mongo.Collection('recipes');


// de personen die mogen inserten
Recipes.allow({
	insert: function (userId, doc) {
		// als userId bestaat
		return !!userId;
	},
	update: function (userId, doc) {
		return !!userId;
	}
});


Ingredient = new SimpleSchema({
	name: {
		type: String
	},
	amount : {
		type: String
	}
});


// gebruik van quickform en simpleschema
RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	desc: { // description
		type: String,
		label: "Description"
	},
	ingredients: {
		type: [Ingredient] 
		// 1 op veel relatie
		//zonder square brackets zou het maar 1 ingredient kunnen zijn
	},
	inMenu: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}

	},
	author: {
		type: String,
		label: "Author",
		autoValue: function () {
			return this.userId
		},
		autoform: {
			type: 'hidden'
		}
	},
	createdAt: {
		type: Date,
		label: "Created at",
		autoValue: function () {
			return new Date()
		},
		autoform: {
			type: 'hidden'
		}
	}
});


Meteor.methods({
	// aan menu toevoegen - verwijderen
	toggleMenuItem: function (id, currentState) {
		Recipes.update(id, {
			$set: {
				inMenu: !currentState
			}
		});
	}
});



Recipes.attachSchema( RecipeSchema );