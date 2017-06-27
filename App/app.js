(function () {
    'use strict';

    var app = angular.module('app', ['ui.router']);
    app.config(function ($stateProvider, $urlRouterProvider) {

        // For any unmatched url, redirect to /main
        $urlRouterProvider.otherwise("/main");

        $stateProvider
            .state('main', {
                url: "/main",
                templateUrl: "app/htmls/main.html"
            })
            .state("about", {
                url: "/aboutMe",
                templateUrl: "app/htmls/about.html"
            })
            .state("projects", {
                url: "/projects",
                templateUrl: "app/htmls/projects.html"
            })
            .state("contact", {
                url: "/contactpage",
                templateUrl: "app/htmls/contact.html"
            })
    });
})();