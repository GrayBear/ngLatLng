ngLatLng.service('latLngCurrentPosition', ['$window', '$q', function ($window, $q) {
 
    return function () {
        var deferred = $q.defer();
        
        $window.navigator.geolocation.getCurrentPosition(function(position){
            deferred.resolve(position);
        });


        return deferred.promise;

    }

}]);