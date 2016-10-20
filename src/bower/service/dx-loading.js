(function () {
  'use strict';

  angular.module('dx.plugIn')
    .factory('dxLoading', ['$http', '$rootScope', function ($http, $rootScope) {
      angular.extend($rootScope.$new(true), {loading: false});
      return {
        isLoading: $http.pendingRequests.length > 0
      }
    }]);

})();
