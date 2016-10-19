(function () {
  'use strict';

  angular.module('nx.widget')
    .factory('nxIsLoading', ['$http', '$rootScope', function ($http, $rootScope) {

      var scope;
      var defaults = {
        loading: false
      };

      initial();

      return {
        isLoading: isLoading
      };


      function initial() {
        scope = $rootScope.$new(true);
        angular.extend(scope, defaults);
      }

      function isLoading() {
        return $http.pendingRequests.length > 0;
      }
    }]);

})();
