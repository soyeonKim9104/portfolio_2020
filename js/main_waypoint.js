$(function () {
    var $device = $('.device');
    var $features = $('.features');
    var $location = $('.location');

    var waypoints = $device.waypoint(function(direction) {
        $device.find('img').addClass('animate');
    }, {
        offset: '50%'
    });

    var waypoints2 = $features.waypoint(function(direction) {
        $features.find('img').addClass('grow-img');
        $features.find('h4').addClass('animate');
    }, {
        offset: '50%'
    });

    var waypoints3 = $location.waypoint(function(direction) {
        $('.stripe').each(function (idx) {
            var $this = $(this);
            setTimeout(function () {$this.addClass('animate_down');}, 100*idx);
        });
    }, {
        offset: '50%'
    });

});