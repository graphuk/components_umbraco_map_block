angular.module("umbraco").controller("MapBlock.Controller", function ($scope) {

    function Item() {
		this.title = '';
		this.address = '';
		this.ctaText = '';
        this.ctaLink = '';
        this.latitude = '';
        this.longitude = '';
    }

    $scope.control.value = $scope.control.value || new Item();
});