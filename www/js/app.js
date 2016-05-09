// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ngCordova']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
app.controller('myController', function ($scope, $cordovaBarcodeScanner) {
  var init = function () {
    return new Date.now();
  }
  $scope.scanBar = function () {
    var zbarParams = {
      text_title: "optional",
      text_instructions: "test",
      camera: "back",
      flash: "off",
      drawSight: true
    };
    cloudSky.zBar.scan(zbarParams, function(success) {
      $scope.barcode = success;
      console.log(success);
    }, function (error) {
      $scope.barError = error;
      console.log(error);
    })
  }
})
