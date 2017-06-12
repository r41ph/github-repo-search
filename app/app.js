'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'ui.bootstrap',
  'app.services',
  'app.repoSearch',
  'app.repoIssues',
  'app.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/repo-search'});
}]);
