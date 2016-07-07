angular.module('starter.controllers', [])
    
    .controller('ListCtrl', function($scope, Items) {
        $scope.items = Items.all();

        $scope.item = {
            name: ''
        };

        $scope.addItem = function() {
            var name = $scope.item.name;
            if (name) {
                Items.addItem(name);
            }
            $scope.item = {
                name: ''
            };
        };

        $scope.removeItem = function (item) {
            Items.removeItem(item);
        };

        $scope.foo = function () {
            console.log('some foo');
        }
    });