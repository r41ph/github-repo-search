angular.module('app')
.directive('goToViewIssues',['shared', function (shared) {
return {
    restrict: 'E',
    replace: true,
    scope: {
      owner:'=',
      name:'='
    },
    template: `
		<a 
			ng-href="#!/repo-issues" 
			class="btn btn-primary"
			>
			View Issues
		</a>
    `,
    link: function (scope,element,attrs) {
        element.bind('click', function () {
	        shared.setRepoInfo(scope.name, scope.owner);
	        //alert("repoName: " + JSON.stringify(shared.getRepoInfo()));
        })
    }
}
}]);