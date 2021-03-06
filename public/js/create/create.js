'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl',
		resolve: {
			getAuthor: function(User, $stateParams) {
				return User.find($stateParams.userId)
			}
		}
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope, $state, Post, getAuthor) {

	$scope.previewTrue = false;

	$scope.newPost = {};

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	$scope.createNewPost = function(newPost) {
		console.log("this is getauthor", getAuthor)
		newPost.author = getAuthor._id
		Post.create(newPost)
		.then(function() {
			$state.go('main')
		})
	}

	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) 