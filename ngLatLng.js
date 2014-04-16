///#source 1 1 /src/ngLatLng.mdl.js
var ngLatLng = angular.module('ngLatLng',[]);
///#source 1 1 /src/features/currentposition/currentposition.svc.js
ngLatLng.service('latLngCurrentPosition', ['$window', '$q', function ($window, $q) {

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }

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

    

}]);
///#source 1 1 /src/features/season/season.svc.js
ngLatLng.service('latLngSeason', [function () {}]);
