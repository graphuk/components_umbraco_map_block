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

	$scope.addressR
		label: 'bodyText',
		description: 'Load some stuff here',
		view: 'rte',
		value: $scope.control.value.address,
		config: {
			editor: {
				toolbar: ["code", "undo", "redo", "cut", "styleselect", "bold", "italic", "alignleft", "aligncenter", "alignright", "bullist", "numlist", "link"],
				stylesheets: ["rte"],
				dimensions: { height: 400 },
				valueType:"STRING"
			}
		}
	},
	$scope.$watch("addressRte.value", function (newValue, oldValue) {
		$scope.control.value.address = newValue;
	});
});
