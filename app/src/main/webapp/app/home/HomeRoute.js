/**
 * Developed by Navid Ghahremani (ghahramani.navid@gmail.com)
 */

(function (angular) {
    'use strict';

    angular
        .module('app.home')
        .run(runHome);

    runHome.$inject = ['routerHelper', 'AccountConstants'];
    /* @ngInject */
    function runHome(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/',
                    parent: 'app',
                    data: {
                        authorities: [],
                        pageTitle: 'home.title.main'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'app/home/HomeView.html',
                            controller: 'HomeController',
                            controllerAs: 'vm'
                        }
                    },
                    resolve: {
                        language: language
                    },
                    menu: {
                        icon: 'home',
                        text: 'global.menu.home',
                        order: -20
                    }
                }
            }
        ];
    }

    language.$inject = [
        '$translate',
        '$translatePartialLoader'
    ];
    /* @ngInject */
    function language($translate, $translatePartialLoader) {
        $translatePartialLoader.addPart('home');
        return $translate.refresh();
    }
})(angular);