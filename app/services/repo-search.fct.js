angular
.module('app.services')
.factory('repoSearch', function ($http, $q) {
    return {
        requestRepoInfo: function(repoName) {
            // returns promise
            return $http.get('https://api.github.com/search/repositories?q=' + repoName)
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