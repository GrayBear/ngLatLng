﻿angular.module('demo', ['ngLatLng'])
    .controller('demoCtrl', ['$scope', 'placesLatLng', 'latLngCurrentPosition', function ($scope, placesLatLng, latLngCurrentPosition) {

        $scope.currentPosition = {};
        $scope.places = placesLatLng.getPlaces();

        latLngCurrentPosition().then(function (result) {
            $scope.currentPosition.lat = result.coords.latitude;
            $scope.currentPosition.lng = result.coords.longitude
        });
    }])
    .service('placesLatLng', [function () {

        this.getPlaces = function () {
 
            return this.places;

        };


        this.places = {
            cities: {
                Munich: {
                    city: "Munich",
                    lat: 48.133000000000003,
                    lng: -10.433,
                },
                London: {
                    city: "London",
                    lat: 51.303000000000003,
                    lng: 0.732,
                },
                NewYork: {
                    city: "New York",
                    lat: 40.425100000000003,
                    lng: 73.98,
                },
                CapeTown: {
                    city: "Cape Town",
                    lat: -33.92486,
                    lng: 18.4240552,
                },
                HongKong: {
                    city: "Hong Kong",
                    lat: 22.302698,
                    lng: 114.160501,
                },
            }
        }




    }]);