function ListCtrl($scope) {

    $scope.items = [
      { text: 'Декадное совещание', date: '30-01-2017', done: true },
      { text: 'Балансовое совещание', date: '12-02-2017', done: false },
      { text: 'Встреча с заказчиком', date: '01-02-2017', done: true },
      { text: 'Банкет', date: '10-02-2017', done: false },
    ];
 
    $scope.addItem = function () {
		$scope.items.push({ text: $scope.todo, date: $scope.setDate, done: false });
        $scope.todo = '';
    };
 

    $scope.remain = function () {
        var count = 0;
        angular.forEach($scope.items, function(item) {
            count += item.done;
        });
        return count;
    };

   $scope.delete = function(item) { 
    var index = $scope.items.indexOf(item); 
    $scope.items.splice(index, 1); 
   };
}


       



