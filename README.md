#ngLatLng


Harness the power of geo location in AngularJS with no maps API. 

##Declaring ngLatLng

Add a refrence to ngLatLng below your angular file
 
```html 
  <script src="app/lib/angular/angular.js"></script>
  <script src="../ngLatLng.js"></script>
```

In your module add a refrence to the module 

```javascript 
angular.module('demo', ['ngLatLng'])
```

Add a refrence to the function you require to your controller. 

```javascript 
.controller('demoCtrl', ['$scope','latLngCurrentPosition','latLngDistance', function ($scope, latLngCurrentPosition, latLngDistance) {
```

Call the functions your require

##LatLng-Distance 

```javascript
$scope.currentPosition = {};
latLngCurrentPosition().then(function (result) {
$scope.currentPosition.lat = result.coords.latitude;
$scope.currentPosition.lng = result.coords.longitude
}
```

##atLng-Distance 

```javascript 
var distance = latLngDistance(place1.lat,place1.lng,place2.lat,place2.lng)
```




