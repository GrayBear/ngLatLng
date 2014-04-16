///#source 1 1 /src/ngLatLng.mdl.js
var ngLatLng = angular.module('ngLatLng',[]);
///#source 1 1 /src/features/currentposition/currentposition.svc.js
ngLatLng.service('latLngCurrentPosition', ['$window', '$q', function ($window, $q) {
 
    return function () {
        var deferred = $q.defer();
        
        $window.navigator.geolocation.getCurrentPosition(function(position){
            deferred.resolve(position);
        });


        return deferred.promise;

    }

}]);
///#source 1 1 /src/features/dayNight/dayNight.svc.js
ngLatLng.service('latLngDayNight', [function () { }]);
///#source 1 1 /src/features/distance/distance.svc.js
ngLatLng.service('latLngDistance', [function () {
    
    return function (lat1, lon1, lat2, lon2) {

        var radiusOfPlanet = 6371;
        var dLat = deg2rad(lat2 - lat1);  
        var dLon = deg2rad(lon2 - lon1);
        var a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var distance = radiusOfPlanet * c; 
        return distance;
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180)
    }
    

}]);
///#source 1 1 /src/features/season/season.svc.js
ngLatLng.service('latLngSeason', [function () {}]);
