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
        title: 'Modules',
        summary: `We assemble our application from modules. A module exports something of value such as a Service, Component, or a shared value. `
      }, {
        id: 2,
        title: 'Components',
        summary: `A Component contains application logic that controls a region of the user interface that we call a view.`
      }, {
        id: 3,
        title: 'Templates',
        summary: `Templates are mostly HTML, and they tell Angular how to render the Component.`
      }, {
        id: 4,
        title: 'Angular Metadata',
        summary: `We use Metadata to tell Angular more about the objects we build. For example, we use metadata to tell Angular how to know where to find a Component\s template.`
      }, {
        id: 5,
        title: 'Data Binding',
        summary: `We use data binding to help coordinate communication between a Component and it\'s template.`
      }, {
        id: 6,
        title: 'Directives',
        summary: `When Angular renders templates, it transforms the DOM according to instructions from Directives`
      }, {
        id: 7,
        title: 'Services',
        summary: `A Service provides anything our application needs. It often shares data or functions between other Angular features`
      }, {
        id: 8,
        title: 'Dependency Injection',
        summary: `Dependency Injection is how we provide an instance of a class to another Angular feature.`
      }, {
        id: 9,
        title: 'Lifecycle Hooks',
        summary: `Lifecycle Hooks allow us to tap into specific moments in the applicaiton lifecycle to perform logic. We often use these for moments during the Component and Router lifecycle.`
      }, {
        id: 10,
        title: 'Routing',
        summary: `Routing allows our application to navigate between different Components, passing parameters where needed.`
      }, {
        id: 11,
        title: 'HTTP',
        summary: `Angular applications can connect with a web server to get or save data using HTTP.`
      }, {
        id: 12,
        title: 'Pipes',
        summary: `Pipes allow us to transform data for display in a Template.`
      }];
  }
})();