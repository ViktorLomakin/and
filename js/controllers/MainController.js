app.controller('MainController', ['$scope', 'photos', function($scope, photos) {
    $scope.test = { name: 'Vik'};
    photos.success(function(data) {
        $scope.photos = data;
    });
}]);