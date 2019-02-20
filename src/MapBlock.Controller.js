angular.module("umbraco").controller("MapBlock.Controller", function ($scope, dialogService) {

	function Item() {
		this.title = '';
		this.address = '';
		this.link = null;
		this.latitude = '';
		this.longitude = '';
		this.includeCoordinatesInUrl = false;
	}

	$scope.control.value = $scope.control.value || new Item();

	$scope.addressRte = {
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

	//GibeLinkPicker
	var ngi = angular.element('body').injector();
	var uDialogService = ngi.get('dialogService');
	$scope.chooseLink = function () {
		$scope.control.value.link = null;

		uDialogService.open({
			template: '../App_Plugins/GibeLinkPicker/Dialogs/linkpicker.html',
			show: true,
			callback: function (e) {
				$scope.control.value.link = {
					id: e.id || 0,
					name: e.name || '',
					url: e.url,
					target: e.target || '_self',
					hashtarget: e.hashtarget || ''
				};

				uDialogService.close();
			}
		});
	}

	//GibeLinkPicker
	$scope.editLink = function (item) {
		uDialogService.open({
			template: '../App_Plugins/GibeLinkPicker/Dialogs/linkpicker.html',
			show: true,
			target: item.link,
			callback: function (e) {
				$scope.control.value.link = {
					id: e.id || 0,
					name: e.name || '',
					url: e.url,
					target: e.target || '_self',
					hashtarget: e.hashtarget || ''
				};
				uDialogService.close();
			}
		});
	};

	$scope.removeLink = function () {
		$scope.control.value.link = null;
	};
});
