/// Returns current universal time
/// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC

ngLatLng.service('latLngCurrentTime', [function () {

    return function () {

        var date = new Date();
        console.log(date);
        return {
            date: date,
            year: date.getUTCFullYear(),
            month: date.getUTCMonth(),
            day: date.getUTCDay(),
            time: date.getTime()
        }

    }

}]);