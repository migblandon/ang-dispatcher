/**
 * @license Unknown
 * (c) 2016 [company-name] [website]
 * License: MIT
 * Created by: Miguel Guevara
 */
(function(window, angular) {'use strict';

angular.module('angDispatcher', [])
	.service('$spareController', [function(){
		var dest = [];
		var element = [];
		var signal = function(receiver){
			receiver.html(element.html());
		};
		this.addElement = function(el, name){
			if(dest.length > 0)
				angular.forEach(dest, function(receiver){
					if(receiver.name == name)
						receiver.item.html(el.html());
					else if(!receiver.name)
						receiver.item.html(el.html());
				});
			element.push({item: el, name: name});
		};
		this.holder = function(receiver, name){
			if(name){
				var r = element.find(function(item){
					return item.name == name;
				});
				if(r) receiver.html(r.item.html());
				else dest.push({item: receiver, name: name});
			}
			else if(element.length > 0){
				receiver.html(element[0].item.html());
			}
			else {
				dest.push({item: receiver, name: name});
			}
		};	
}])
.directive('angCentral', ['$spareController', function($spareController){
	return {
		restrict: 'EA',
		transclude: true,
		link: function(scope, element, attr){
			$spareController.addElement(element, attr.angCentral);
		},
		template: '<div ng-transclude></div>'
	};
		
}])
.directive('angReceiver', ['$spareController', function($spareController){
	return {
		restrict: 'EA',
		transclude: true,
		link: function(scope, element, attr){
			$spareController.holder(element, attr.angReceiver);
		}
	};
		
}]);


	
})(window, window.angular);
