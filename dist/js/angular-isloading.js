(function () {
  'use strict';

  angular.module('nx.widget', []);

})();

(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('isloading', ['$http', 'nxIsLoading', function ($http, nxIsLoading) {
      return {
        restrict: 'A',
        scope: true,
        link: function (scope, elem) {
          scope.$watch(nxIsLoading.isLoading, function (inValue) {
            scope.loading = inValue;
          });
        }
      };
    }]);

})();

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
