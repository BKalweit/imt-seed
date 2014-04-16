/**
 * Created by jkalweit on 4/6/2014.
 */



function MainCtrl($scope, $location) {

}


function HomeCtrl($scope) {

};


function ItemsCtrl($scope) {

    $scope.items = [];
    $scope.items.push({ id: 1, name: 'Item1' });
    $scope.items.push({ id: 2, name: 'Item2' });

    $scope.newitem = { id: 3, name: 'Item3' };

    $scope.addItem = function () {
        $scope.items.push({
           id: $scope.newitem.id,
           name: $scope.newitem.name
        });
        $scope.newitem = {};
    };
};

function ItemCtrl($scope, $routeParams) {

    $scope.item = {
        id: $routeParams.id,
        name: 'Item' + $routeParams.id
    };

}
