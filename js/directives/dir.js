app.directive('showInfo', function() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'views/templateShowInfo.html'
    };
});