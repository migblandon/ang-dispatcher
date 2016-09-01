/**
 * @license Unknown
 * (c) 2016 [company-name] [website]
 * License: MIT
 */
(function(window, angular) {'use strict';
	
angular.module('titosBootwrap', ['ng']).

	service('$hat', ['$window', function $TopNavBar($window){
		
		this.vertical = function(amount){
			console.log('Width is => ' + $window.innerWidth + ', with '
			+ amount+' cointaners');
			return 'vertical';
		}
		this.sizing = 'medium';
		this.change = function(){
			console.log('Changed');
		}
		this.horizontal = 'horizontal';
		
		
		this.toggled = false;
		this.toggle = function(){
			this.toggled = !this.toggled;
		}
	}]);

	
})(window, window.angular);
