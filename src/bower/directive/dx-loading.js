(function () {
  'use strict';

  angular.module('dx.plugIn')
    .directive('isLoading', ['$http', 'dxLoading', function ($http, dxLoading) {
      return {
        restrict: 'A',
        scope: true,
        link: function (scope, elem) {
          scope.$watch(dxLoading.isLoading, function (inValue) {
            scope.loading = inValue;
          });
        }
      };
    }]);

})();
