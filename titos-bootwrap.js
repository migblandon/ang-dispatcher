/**
 * @license Unknown
 * (c) 2016 [company-name] [website]
 * License: MIT
 */
(function(window, angular) {'use strict';
	
angular.module('titosBootwrap', ['ng']).

	service('$hat', ['$window', function $TopNavBar($window){
		
		this.vertical = function(level){
			switch (level) {
				case 4:
					if($window.innerWidth < 1280)
						return 'vertical large';
					return 'vertical small';
				case 3:
					return 'vertical medium';
				case 2:
					return 'vertical large';
				case 1:
					return 'vertical xlarge';
				default:
					return 'vertical xsmall';
			}
		}
		this.horizontal = function(){
			return 'horizontal';
		}
		
		this.toggled = false;
		this.toggle = function(){
			this.toggled = !this.toggled;
		}
	}]);

	
})(window, window.angular);
