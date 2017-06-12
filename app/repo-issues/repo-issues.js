'use strict';

angular.module('app.repoIssues', ['ngRoute'])

.config(['$routeProvider', function($routeProvider, $http) {
  $routeProvider.when('/repo-issues', {
    templateUrl: 'repo-issues/repo-issues.html',
    controller: 'repoIssuesCtrl',
    controllerAs: 'ric',
  });
}])

.controller('repoIssuesCtrl', ['$http', 'repoIssues', 'shared', function($http, repoIssues, shared) {
	var vm = this;
    var request = JSON.parse(JSON.stringify(shared.getRepoInfo()));
    vm.repoName = request.repoName;
    vm.repoOwner = request.repoOwner;
	vm.requestResult = "";
    vm.isCollapsed = true;
    // alert('https://api.github.com/search/issues?q=repo:' + vm.repoOwner + '/' + vm.repoName);

    vm.requestIssues = function() {
        // return promise
        repoIssues.requestRepoIssues(vm.repoOwner,vm.repoName)
            // then() called when repos gets back
            .then(function(data) {
                // promise fulfilled
                let reqResult = JSON.parse(JSON.stringify(data));
                if( reqResult.total_count === 0 ){
                    console.log("No repo issues found");

                } else {
                    // console.log("Repo info: " + JSON.stringify(data))
                    vm.requestResult = JSON.parse(JSON.stringify(data.items))
                }


            }, function(error) {
                // promise rejected
                console.log('error', error);
            });
    };



}]);