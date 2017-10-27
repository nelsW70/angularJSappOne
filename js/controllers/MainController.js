
app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Featured Reads';
  $scope.promo = 'Not safe for the beach (or anywhere else)';
  $scope.products = [
  {
    name: 'Brave New World Revisited',
    author: 'Aldous Huxley',
    publisher: 'Harper & Brothers',
    price: 12,
    pubdate: new Date('1957', '03', '08'),
    cover: 'img/Huxley.jpg',
    likes: 0,
    dislikes: 0
  },
  {
    name: 'Four Arguments for the Elimination of Television',
    author: 'Jerry Mander',
    publisher: 'Harper Collins',
    price: 17,
    pubdate: new Date('1978', '08', '01'),
    cover: 'img/FourArgumentsForTheEliminationOfTelevision.jpg',
    likes: 0,
    dislikes: 0
  },
  {
    name: 'Jaws',
    author: 'Peter Benchley',
    publisher: 'Doubleday',
    price: 14,
    pubdate: new Date('1974', '01', '03'),
    cover: 'img/Jaws.jpg',
    likes: 0,
    dislikes: 0
  },
  {
    name: 'The Sweet Hereafter',
    author: 'Russell Banks',
    publisher: 'Harper Collins',
    price: 11,
    pubdate: new Date('1991', '10', '25'),
    cover: 'img/SweetHereafter.jpg',
    likes: 0,
    dislikes: 0
  }
];
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  }
}]);
