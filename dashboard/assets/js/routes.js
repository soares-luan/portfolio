'use strict';

/**
 * Route configuration for the RDash module.
 */
 dashApp.config(['$stateProvider', '$urlRouterProvider',
 	function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
        .state('/', {
        	url: '/',
            controller:'MasterCtrl',
            templateUrl: 'templates/index.htm'
        })
        .state('sobre', {
            url: '/sobre',
            controller:'SobreCtrl',
            templateUrl: 'templates/sobre.htm'
        })
        .state('habilidades', {
            url: '/habilidades/',
            controller:'HabilidadeIndexCtrl',
            templateUrl: 'templates/habilidade/index.htm'
        }).state('habilidades-edit', {
            url: '/habilidades/edit/:key',
            controller:'HabilidadeEditCtrl',
            templateUrl: 'templates/habilidade/edit.htm'
        })
        .state('habilidades-add', {
            url: '/habilidades/add/',
            controller:'HabilidadeAddCtrl',
            templateUrl: 'templates/habilidade/add.htm'
        })
        .state('atividades', {
            url: '/atividades/',
            controller:'AtividadeIndexCtrl',
            templateUrl: 'templates/atividade/index.htm'
        }).state('atividades-edit', {
            url: '/atividades/edit/:key',
            controller:'AtividadeEditCtrl',
            templateUrl: 'templates/atividade/edit.htm'
        })
        .state('atividades-add', {
            url: '/atividades/add/',
            controller:'AtividadeAddCtrl',
            templateUrl: 'templates/atividade/add.htm'
        })
        .state('experiencias', {
            url: '/experiencias',
            templateUrl: 'templates/experiencias.htm'
        });
    }
    ]);