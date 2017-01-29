(function () {
  'use strict';

  // Do note declare any component here, do it in separate files
  angular.module('myFirstApp', ['ui.router']);

  angular.module('myFirstApp').controller('mainController', function ($scope) {
    $scope.greet = 'Hi, this is Manu learning Angular!';
  });

  angular.module('myFirstApp').config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRoutesProvider) {

    $urlRoutesProvider.otherwise('/list');

    $stateProvider.state('list', {
      url: '/list',
      template: '<project-list></project-list>'
    });

    $stateProvider.state('view', {
      url: '/view/:id',
      template: '<project-view></project-view>'
    });

    $stateProvider.state('editor', {
      url: '/editor/:id',
      template: '<project-editor></project-editor>'
    });
  }

})();
