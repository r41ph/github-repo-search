angular
.module('app.services')
.factory('shared', function () {
	var data = {
        repoName: '',
        repoOwner: ''
    };

    return {
        getRepoInfo: function() {
            return data;
        },
        setRepoInfo: function(repoName, repoOwner) {
        	data.repoName = repoName;
            data.repoOwner = repoOwner;
        }
    };
});