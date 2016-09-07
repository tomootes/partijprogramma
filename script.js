var app = angular.module('single-page-app',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{
    templateUrl: 'pages/partijprogramma.html',
    activetab: 'partijprogramma',
    controller: 'programmaController'
  }).otherwise({
    redirectTo: '/'
  });
});

app.controller('cfgController',function($scope,$route){
  $scope.$route = $route;
});

app.controller('programmaController',function($scope){

  $scope.partijnaam = '.......';

  $scope.gekozenMaatregelen = [];
  $scope.addMaatregel = function(maatregel) {

    if ($scope.gekozenMaatregelen.indexOf(maatregel) === -1) {

      for (var i = 0; i < $scope.maatregelen.length; i++) {
        if ($scope.maatregelen[i].title === maatregel.title) {
          $scope.maatregelen.splice(i, 1);
        }
      }

      $scope.gekozenMaatregelen.push(maatregel);
      console.log(maatregel);
    }

  };

  $scope.maatregelen = [
    {
      title: "Slotgracht om Nederland",
      omzet: -1
    },
    {
      title: "Woningnood oplossen",
      omzet: -3
    },
    {
      title: "Basisbeurs terug",
      omzet: -0.5
    },
    {
      title: "Einde marktverstorende maatregelen als alcoholaccijns en tabakaccijns",
      omzet: 0.5
    },
    {
      title: "Afschaffen van de studies filosofie, antropologie, sterrenkunde enz.",
      omzet: 1
    },
    {
      title: "Stoppen met aflossen staatsschuld",
      omzet: 7
    },
    {
      title: "Doodstraf invoeren, minder gevangenissen",
      omzet: 1
    },
    {
      title: "Vliegveld in Volendam",
      omzet: -1
    },
    {
      title: "Alle treinen op tijd",
      omzet: -0.5
    },
    {
      title: "Geld ontwikkelingssamenwerking afgelopen 20 jaar terugvorderen",
      omzet: 15
    },
    {
      title: "Gulden terug in het basispakket",
      omzet: -3
    },
    {
      title: "Afschaffen kerken, moskeeën en synagoges & boedhistische tempels",
      omzet: 7.2
    },
    {
      title: "Stoppen met dijken, azc’s, windmolens en andere dingen die mensen behoeden van de dood",
      omzet: 12
    },
    {
      title: "Hervorming financieel rendement contabiliteit afbouwpad EU (o.a.)",
      omzet: 9.9
    },
    {
      title: "Gasbaten opvoeren, Groningen evacueren",
      omzet: 5
    },
    {
      title: "Preventief opsluiten van alle radicale hipsters",
      omzet: 3
    },
    {
      title: "Koningshuis halveren",
      omzet: 0.5
    },
    {
      title: "Afschaffen onzinnige ministeries",
      omzet: 2
    },
    {
      title: "Einde aan kunst en cultuur en huisdieren",
      omzet: 3
    },
    {
      title: "Stoppen met Buitenlandse Zaken",
      omzet: 10
    },
    {
      title: "Dikke BMW’s van staatssecretarissen vervangen door Fiat punto’s",
      omzet: 0.000655
    },
    {
      title: " Stoppen met VN, EU, Schengen enzovoort",
      omzet: 0
    }
  ];



});
