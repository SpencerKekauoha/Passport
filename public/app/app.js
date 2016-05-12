var app = angular.module("app", ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");

    $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "./app/routes/login/loginTmpl.html",
      controller: 'loginCtrl'
    }).state('profile', {
      url: "/profile",
      templateUrl: "./app/routes/profile/profileTmpl.html",
      controller: 'profileCtrl',
      resolve: {
        user: function(mainService, $state) {
          return mainService.getUser().then(function(response) {
            return response.data;
          }).catch(function(err) {
            $state.go('login');
          });
        }
      }
    });
});
