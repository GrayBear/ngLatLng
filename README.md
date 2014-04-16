#ngLatLng


Harness the power of geo location in AngularJS with no maps API. 

##Declaring ngLatLng

Add a refrence to ngLatLng below your angular file
  
  <script src="app/lib/angular/angular.js"></script>
  <script src="../ngLatLng.js"></script>


In your module add a refrence to the module 

  angular.module('demo', ['ngLatLng'])


Add a refrence to the function you require to your controller. 


  .controller('demoCtrl', ['$scope','latLngCurrentPosition','latLngDistance', function ($scope, latLngCurrentPosition, latLngDistance) {


Call the functions your require

##LatLng-Distance 


  $scope.currentPosition = {};
  latLngCurrentPosition().then(function (result) {
  $scope.currentPosition.lat = result.coords.latitude;
  $scope.currentPosition.lng = result.coords.longitude
  }

##atLng-Distance 

  var distance = latLngDistance(place1.lat,place1.lng,place2.lat,place2.lng)





