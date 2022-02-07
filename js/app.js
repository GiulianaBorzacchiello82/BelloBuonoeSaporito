(function() {
	'use strict';
  
// Declare app level module which depends on filters, and services
var app = angular.module('app'	,
			['ngRoute', 'ngMaterial', 'ngTouch']
			
);

/* Configurazione del nostro modulo. Avviene in fase di avvio. 
	Ad esempio, se nella nostra applicazioni avremo necessità di passare un header HTTP in tutte le chiamate che faremo, 
	possiamo farlo in questa fase invece di aggiungere l’header ad ogni singola chiamata.
*/
app.config([ '$httpProvider', function($httpProvider) {
		$httpProvider.defaults.headers.common["Authorization"] = "Basic cGlwcG86cGx1dG8=";
}]);


/* Utilizziamo $routeProvider per configurare il servizio di routing e non il servizio direttamente, 
	dal momento che in fase di configurazione esso non è disponibile.*/
app.config([ '$routeProvider', function($routeProvider) {

	app.resolveScriptDeps = function(dependencies){
		return function($q,$rootScope){
		   var deferred = $q.defer();
		   require (dependencies, function(){
			 $rootScope.$apply(function(){
			   deferred.resolve();
			 });
		   });
		   return deferred.promise;
		};
	};

	$routeProvider
			.when("/contattaci", {	templateUrl: 'src/partials/contattaci.htm', 
									/*resolve: {deps: app.resolveScriptDeps(['app/CRIC/js/controllers/homeController',
									'app/CRIC/js/objects/home'
									])},*/
									controller: 'ContactController'
			} )
			.when("/home", {templateUrl: 'src/partials/home.htm', controller: 'HomeController'} )
			.when("/underMaintenance", {templateUrl: 'src/partials/underMaintenance.htm', controller: 'HomeController'} )
			.when("/", {templateUrl: 'src/partials/home.htm', controller: 'HomeController'} )
			.when("/pageNotFound", {templateUrl: 'src/partials/pageNotFound.htm', controller: 'HomeController'} )
			 .otherwise({redirectTo: "/pageNotFound"});
}]);

/**************************** DIRETTIVE CUSTOMER ***********************/
app.directive("contattaci", function() {
	return {
		restrict: "EAC", /* può essere utilizzata come Elemento/Attributo/Commento*/
		//template: "<h1>Questo è un titolo</h1>" Oppure template URL
		templateUrl: "/src/partials/contattaci.htm"
	};
}).directive("menu", function() {
	debugger;
	return {
		restrict: "E",
		templateUrl: "/src/partials/menu.htm"
		/* possiamo passare delle variabili alla direttiva definite nel controller in cui viene inserita. Quindi  <menu city-list="elencoCitta"></menu>
		,scope: {
			elencoCitta: "=cityList"
		}*/
	};
});

/***************************************************** Controller *********************************************************/

app.controller('TemplateController', ['$scope' , '$location'
	                                , function($scope, $location) {
	
	// inizializza menu
	$scope.menu = [{name:"La compagnia",id:"1",file:"home.htm",path:"/home"},
					{name:"Noi Artisti",id:"2",file:"2.htm",path:"/artisti"},
					{name:"Le rappresentazioni",id:"3",file:"3.htm",path:"/rappresentazioni"},
					{name:"Video",id:"4",file:"4.htm",path:"/video"},
					{name:"Link utili",id:"5",file:"5.htm",path:"/link"},
					{name:"L'angolo della poesia",id:"6",file:"6.htm",path:"/poesia"},
					{name:"Contattaci",id:"7",file:"contattaci.htm",path:"/contattaci"}
					];
	$scope.selectedMenu = $scope.menu[0];

	}]);

	
app.controller('HomeController', ['$scope' 
	, function($scope) {


var home = new Home($scope)
home.init();

}]);


app.controller("NavigationCtrl",  ['$scope' ,  '$location'
									, function($scope, $location) {

	var nav = new Nav($scope);
	nav.init();
	$scope.openMenu = function($mdMenu, ev) {
		nav.openMenu($mdMenu, ev);
	};

	this.notificationsEnabled = true;
	this.toggleNotifications = function() {
		this.notificationsEnabled = !this.notificationsEnabled;
	};

	this.goToPage = function ( menu ) {
		$scope.selectedMenu = menu;
		
		//if ($location.hash() !== newHash) {
		    // set the $location.hash to `newHash` and
			// $anchorScroll will automatically scroll to it
			//$location.hash(menu.path);
			$location.path($scope.selectedMenu.path);
		//}
	}
}]);

app.controller("ContactController", ['$scope' 
, function($scope) {

	var contact = new Contact($scope);
	$scope.prontaPerInvio = false;
	
	$scope.invia = function(utente) {
		return contact.invia(utente);
	};

}]);





/* Servizi */

/*
Un servizio predefinito è $http.
Questo servizio consente di effettuare chiamate Ajax al server e di gestire le risposte in maniera molto semplice
Di seguito un esempio 
*/
/*app.factory('TemplateService', ['$http', '$q', function($http, $q) {
	return function () {
		return {
			getLabels : function(lang) {
				lang = (lang == null ? 'en-US' : lang);
				return $http.get('rest/labels?lang=' + lang);
			},
			
			getPersistentUrl : function(currentAppContext, destAppContext, brand, lang, pathMap) {
				var brand = (brand == null ? '' : brand);
				var lang = (lang == null ? '' : lang);
				
				var params = {
						'currentAppContext' : currentAppContext,
						'destAppContext' : destAppContext,
						'brand': brand,
						'lang': lang
				};
				angular.extend(params, pathMap);
				return $http.post('rest/transversal/persistentUrl', params);
			},
		};
	};
}]);
*/

/* Filters */
app.filter('ellipsis',[ function() {
	return function(text, length) {
		try {
			if (text.length > length) {
				text = text.substring(0, length) + '...';
			}
		} catch (e) {
		}
		return text;
	};
} ]);

app.filter("capitalize",[function(){
			return function(text) {
				var result = text;
				if (text && isNaN(text)) {
					result = text.charAt(0).toUpperCase() + text.substr(1);
				}
				return result;
			}
} ]);



/*****************************  OGGETTI  *************************************/


function Home($scope) {

	var home = this;	
	this.init = function() {
	
	};
	
}

function Nav($scope) {

	var nav = this;	
	this.init = function() {
		$scope.originatorEv= null;
		$scope.isOpen= false;

		$scope.$on('$mdMenuOpen', function(event, menu) { 
			//console.log('opening menu...', event, menu); 
		
		});
		$scope.$on('$mdMenuClose', function(event, menu) { 
			$scope.isOpen = false;
		});

		

	};
	
    this.openMenu = function($mdMenu, ev) {
		
		$scope.originatorEv  = ev;
		$scope.isOpen = !$scope.isOpen;
		if (!$scope.isOpen) {
			$mdMenu.close();
		} else {
			$mdMenu.open(ev);
		}
    };
}

function Contact($scope) {

	this.invia = function(utente) {
		if ($scope.myForm.$valid) {
			//invia dati al server
		} else {
			$scope.prontaPerInvio = true;
		}
	};

}

})();	
  
