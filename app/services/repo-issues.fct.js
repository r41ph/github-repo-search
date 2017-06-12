angular
.module('app.services')
.factory('repoIssues', function ($http, $q) {
    return {
        requestRepoIssues: function(repoOwner, repoName) {

            // returns promise
            return $http.get('https://api.github.com/search/issues?q=repo:' + repoOwner + '/' + repoName)
                .then(function(response) {
                    if (typeof response.data === 'object') {
                        return response.data;
                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }

                }, function(response) {
                    // something went wrong
                    return $q.reject(response.data);
                });
        }
    };
});