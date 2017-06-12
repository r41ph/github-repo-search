angular.module('app')
.directive('backToSearch',['shared', function (shared) {
return {
    restrict: 'E',
    replace: true,
    scope: {
      owner:'=',
      name:'='
    },
    template: `
		<a 
			ng-href="#!/repo-search" 
			class="btn btn-primary"
			>
			Back to Search
		</a>
    `,
    link: function (scope,element,attrs) {
        var activeSearch = true;
        element.bind('click', function () {
	        shared.setRepoInfo(scope.name, scope.owner, activeSearch);
	        //alert("repoName: " + JSON.stringify(shared.getRepoInfo()));
        })
    }
}
}]);