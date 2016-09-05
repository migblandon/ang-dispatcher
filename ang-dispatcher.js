/**
 * @license Open source
 * (c) 2016  github.com/migblandon/ang-dispatcher
 * License: MIT
 * Created by: Miguel Guevara
 */
(function(window, angular) {'use strict';
/**
 * @doc module
 * @name angDispatcher
 * @description
 *
 * =>angDispatcher<=
 *
 * The 'Dispatcher' makes it easy to reuse modules inside your DOM tree
 *
 * Add the module to your project and you will be ready to use it's directives
 * 
 */
angular.module('angDispatcher', [])
	 /**
   * @doc service
   * @name $dispatcher
   * @description
   * 
   * Dispatcher controller is used by the application to control who is who and where things are going.
   * 
   * 
   * 
   * The $dispatcher service is NOT used outside of this scope. It is meant to live internally/ 
   * */
	.service('$dispatcher', [function(){
		var dest = [];
		var element = [];
		 /**
		 * @doc method
		 * @name $dispatcher#addElement
		 * @description
		 *
		 * 'addElement' first broadcast to any receiver waiting for the element. then,
		 *  it holds the html node for upcoming receivers.
		 * 
		 * @param {html node} el Node that will be clone o be reused.
		 * @param {string} name Alias of the html node.
		 * 
		 **/
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
		/**
		 * @doc method
		 * @name $dispatcher#holder
		 * @description
		 *
		 * 'holder' checks if there are any transmitters in place and saves the html node
		 * 
		 * @param {html node} receiver Element in which another node will be injected.
		 * @param {string} name Alias of the html node.
		 * 
		 **/
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
/**
 * @ngdoc directive
 * @name angCentral
 *
 * @description
 * Clones the html node and passes it to other nodes wherever they are needed.
 * 
 * <div ang-central="example"></div> 
 * ------->or<--------- 
 * <div ang-central=""</div> 
 * ------->or<--------- 
 * <div ang-central></div
 * 
 * Id the node with a name (string), or without a name.
 * 
 * ang-central' can be anywhere in your code, any 'ang-receiver' will identify
 * which node to add according to the name or if it has no name, it adds the 
 * first node that was added to central.
 */
.directive('angCentral', ['$dispatcher', function($dispatcher){
	return {
		restrict: 'EA',
		transclude: true,
		link: function(scope, element, attr){
			$dispatcher.addElement(element, attr.angCentral);
		},
		template: '<div ng-transclude></div>'
	};
		
}])
/**
 * @ngdoc directive
 * @name angReceiver
 *
 * @description
 * adds a cloned node to the appropiate html node
 * 
 * <div ang-receiver="example"></div> 
 * ------->or<---------  
 * <div ang-receiver=""></div> 
 * ------->or<---------  
 * <div ang-receiver></div>
 * 
 * receives a node cloned by 'ang-central'.
 * if the node has a name, it will look for that node. Otherwise, 
 * it will add the first node added from top to bottom of the DOM.
 */
.directive('angReceiver', ['$dispatcher', function($dispatcher){
	return {
		restrict: 'EA',
		transclude: true,
		link: function(scope, element, attr){
			$dispatcher.holder(element, attr.angReceiver);
		}
	};
		
}]);
})(window, window.angular);
