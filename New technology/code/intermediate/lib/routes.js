if(Meteor.isClient)
{

	Accounts.onLogin(function () {
		FlowRouter.go('recipe-book');
	});

	Accounts.onLogout(function () {
		FlowRouter.go('home');
	});

}


FlowRouter.triggers.enter([function(context,redirect){
	// indien geen user -> go home
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		/*if(Meteor.userId){
			FlowRouter.go('recipe-book');
		}*/

		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipe-book', {
	name: 'recipe-book',
	action() {
		// main: Recipes laad de Recipes template in de mainlayout
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});

FlowRouter.route('/recipe/:id', {
	name: 'recipe',
	action() {
		// main: Recipes laad de Recipes template in de mainlayout
		BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
	}
});