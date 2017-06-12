'use strict';

angular.module('app.repoSearch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider, $http) {
  $routeProvider.when('/repo-search', {
    templateUrl: 'repo-search/repo-search.html',
    controller: 'repoSearchCtrl',
    controllerAs: 'rpc',
  });
}])

.controller('repoSearchCtrl', ['$http', 'repoSearch', 'shared', function($http, repoSearch, shared) {
	var vm = this;
	vm.repoName = "";
	vm.requestResult = "";
    vm.showError = false;
	vm.showResults = false;
    vm.isCollapsed = true;

    vm.requestRep = function() {
        
        // return promise
        repoSearch.requestRepoInfo(vm.repoName)
            // then() called when repos gets back
            .then(function(data) {
                // promise fulfilled
                let reqResult = JSON.parse(JSON.stringify(data));
                
                if( reqResult.total_count === 0 ){
                	console.log("No repo with that name");
                    vm.showError = true;

                } else {
					console.log(JSON.parse(JSON.stringify(data)))
					vm.requestResult = JSON.parse(JSON.stringify(data.items))
					vm.showResults = true;
                    vm.showError = false;
                }

            }, function(error) {
                // promise rejected
                console.log('error', error);
                vm.showResults = false;
            });
    };

}]);