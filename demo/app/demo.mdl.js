angular.module('demo', ['ngLatLng'])
    .controller('demoCtrl', [
        '$scope',
        'placesLatLng',
        'latLngCurrentPosition',
        'latLngDistance',
        'latLngCurrentTime',
        function ($scope, placesLatLng, latLngCurrentPosition, latLngDistance, latLngCurrentTime) {

            console.log(latLngCurrentTime);

            $scope.currentTime = latLngCurrentTime();
 
            $scope.currentPosition = {};
            $scope.places = placesLatLng.getPlaces();

            latLngCurrentPosition().then(function (result) {
                $scope.currentPosition.lat = result.coords.latitude;
                $scope.currentPosition.lng = result.coords.longitude

                console.log($scope.places);

                for (var i = 0; i < $scope.places.length; i++) {

                    var distance = latLngDistance(
                        result.coords.latitude,
                        result.coords.longitude,
                        $scope.places[i].lat,
                        $scope.places[i].lng)

                    $scope.places[i].distance = distance;

                };


            });
        }])
    .service('placesLatLng', [function () {

        this.getPlaces = function () {

            return this.places;

        };


        this.places = [{
            city: "Munich",
            lat: 48.133000000000003,
            lng: -10.433,
        },
                {
                    city: "London",
                    lat: 51.303000000000003,
                    lng: 0.732,
                },
                {
                    city: "New York",
                    lat: 40.425100000000003,
                    lng: 73.98,
                },
                {
                    city: "Cape Town",
                    lat: -33.92486,
                    lng: 18.4240552,
                },
                {
                    city: "Hong Kong",
                    lat: 22.302698,
                    lng: 114.160501,
                },
                {
                    city: "North Pole",
                    lat: 90.00000,
                    lng: 0.000,
                },
                {
                    city: "South Pole",
                    lat: -90.00000,
                    lng: 0.000,
                },
                {
                    city: "Quito, Ecuador (Equator)",
                    lat: -0.150,
                    lng: 78.350,
                },
                {
                    city: "Sydney",
                    lat: -33.520,
                    lng: 151.13,
                },
        ]




    }]);