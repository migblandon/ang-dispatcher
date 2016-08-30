/**
 * @license Unknown
 * (c) 2016 [company-name] [website]
 * License: MIT
 */
(function(window, angular) {'use strict';
	
angular.module('titosBootwrap', ['ng']).


	service('$hat', [function $TopNavBar(){
		this.verde = 'verde';
		this.mild = 'mild';
		this.hot = 'hot';
		this.fire = 'fire';
		this.left = 'left';
		this.right = 'right';
		this.spare = 'spare';
		this.view = 'view';
		this.toggled = false;
		this.toggle = function(){
			this.toggled = !this.toggled;
		}
	}]);

	
})(window, window.angular);
