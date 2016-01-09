(function () {
  'use strict';

  angular
    .module('a2firstlook')
    .controller('CardController', CardController);

  CardController.$inject = [];

  function CardController() {
    var vm = this;

    vm.cards = [{
        id: 1,
        title: 'Components',
        summary: 'Components are wicked cool, let\'s go create one.'
      }, {
        id: 2,
        title: 'Templates',
        summary: 'Templates are wicked cool, let\'s go create one.'
      }, {
        id: 3,
        title: 'Data Binding',
        summary: 'Data Binding is wicked cool, let\'s go play.'
      }, {
        id: 4,
        title: 'Pipes',
        summary: 'Pipes are fun, let\'s go tinker.'
      }, {
        id: 5,
        title: 'Services',
        summary: 'Services are super simple, let\'s see how.'
      }];
  }
})();