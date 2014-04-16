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