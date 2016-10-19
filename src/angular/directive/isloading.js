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
