var app = angular.module('wedding', []);

app.controller('ImageCarouselController', function($scope) {
    $scope.images = [
        'img/P1010227.jpg',
        'img/P1010251.jpg',
        'img/P1010298.jpg'
    ];
});