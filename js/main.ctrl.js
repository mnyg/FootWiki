/*global angular */
angular.module('app').controller("MainController", function () {
    "use strict";
    var vm = this;
    vm.title = 'FootWiki';
    vm.searchInput = '';
    vm.player = [
        {
            name: 'Andy Carrol',
            year: 1988
        },
        {
            name: 'Wayne Rooney',
            year: 1991
        }
    ];
    vm.orders = [
        {
            id: 1,
            title: 'Year Ascending',
            key: 'year',
            reverse: false
        },
        {
            id: 2,
            title: 'Year Descending',
            key: 'year',
            reverse: true
        },
        {
            id: 3,
            title: 'Name Ascending',
            key: 'name',
            reverse: false
        },
        {
            id: 1,
            title: 'Name Descending',
            key: 'name',
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
});
