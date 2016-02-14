
(function () {
  'use strict';

  angular
    .module('a2firstlook')
    .service('CardService', CardService);

  CardService.$inject = [];
  function CardService() {
    this.getCards = getCards;
    var cacheBuster = '?bust=' + Date.now();

    var demoFile = 'plnkr.demo.html' + cacheBuster;
    var cards = [
      {
        id: 0,
        title: 'Angular 2 Storyline Tracker',
        example: 'storyline-tracker/' + demoFile,
        summary: 'Example of all of the concepts put together in an application.'
      },
      {
        id: 1,
        title: 'A1 - A2: Angular 1 Controller',
        example: 'a1-a2/a1/controller/' + demoFile,
        summary: 'Simple example of an Angular 1 Controller.'
      },
      {
        id: 2,
        title: 'A1 - A2: Angular 2 Component',
        example: 'a1-a2/a2/component/' + demoFile,
        summary: 'Simple example of an Angular 2 Component.'
      },
      {
        id: 3,
        title: 'A1 - A2: Angular 1 Structural Directives',
        example: 'a1-a2/a1/structural-directives/' + demoFile,
        summary: 'Simple example of an Angular 1 Structural Directive.'
      },
      {
        id: 4,
        title: 'A1 - A2: Angular 2 Structural Directives',
        example: 'a1-a2/a2/structural-directives/' + demoFile,
        summary: 'Simple example of an Angular 2 Structural Directive.'
      },
      {
        id: 5,
        title: 'A1 - A2: Angular 1 Two-Way Data Binding',
        example: 'a1-a2/a1/2-way/' + demoFile,
        summary: 'Simple example of Angular 1 Two-Way Data Binding.'
      },
      {
        id: 6,
        title: 'A1 - A2: Angular 2 Two-Way Data Binding',
        example: 'a1-a2/a2/2-way/' + demoFile,
        summary: 'Simple example of Angular 2 Two-Way Data Binding.'
      },
      {
        id: 7,
        title: 'A1 - A2: Angular 1 Property Binding',
        example: 'a1-a2/a1/property-binding/' + demoFile,
        summary: 'Simple example of Angular 1 Property Binding.'
      },
      {
        id: 8,
        title: 'A1 - A2: Angular 2 Property Binding',
        example: 'a1-a2/a2/property-binding/' + demoFile,
        summary: 'Simple example of Angular 2 Property Binding.'
      },
      {
        id: 9,
        title: 'A1 - A2: Angular 1 Event Binding',
        example: 'a1-a2/a1/binding-events/' + demoFile,
        summary: 'Simple example of Angular 1 Event Binding.'
      },
      {
        id: 10,
        title: 'A1 - A2: Angular 2 Event Binding',
        example: 'a1-a2/a2/binding-events/' + demoFile,
        summary: 'Simple example of Angular 2 Event Binding.'
      },
      {
        id: 11,
        title: 'A1 - A2: Angular 1 Services and DI',
        example: 'a1-a2/a1/services/' + demoFile,
        summary: 'Simple example of Angular 1 Services and DI.'
      },
      {
        id: 12,
        title: 'A1 - A2: Angular 2 Services and DI',
        example: 'a1-a2/a2/services/' + demoFile,
        summary: 'Simple example of Angular 2 Services and DI.'
      },
      {
        id: 13,
        title: 'A2: Components',
        example: 'component-simple/' + demoFile,
        summary: 'A Component contains application logic that controls a region of the user interface that we call a view.'
      },
      {
        id: 14,
        title: 'A2: Nested Components',
        example: 'component-nest/' + demoFile,
        summary: 'A Component may contain other components.'
      },
      {
        id: 15,
        title: 'A2: Input/Output Components',
        example: 'component-input-output/' + demoFile,
        summary: 'A Component may have input properties and output events.'
      },
      {
        id: 16,
        title: 'A2: Data Binding and Directives',
        example: 'data-binding/' + demoFile,
        summary: 'Interpolation, Property Binding, Event Binding, Two Way Binding, and built-in Directives.'
      },
      {
        id: 17,
        title: 'A2: Need Services',
        example: 'need-services/' + demoFile,
        summary: 'A Service provides anything our application needs. It often shares data or functions between other Angular features'
      },
      {
        id: 18,
        title: 'A2: Services and Dependency Injection',
        example: 'services-and-di/' + demoFile,
        summary: 'Dependency Injection is how we provide an instance of a class to another Angular feature.'
      },
      {
        id: 19,
        title: 'A2: Component Lifecycle Hooks',
        example: 'lifecycle/' + demoFile,
        summary: 'Lifecycle Hooks allow us to tap into specific moments in the application lifecycle to perform logic.'
      },
      {
        id: 20,
        title: 'A2: Needs Http',
        example: 'need-http/' + demoFile,
        summary: 'Angular applications can connect with a web server to get or save data using HTTP. This example lacks http, whereas the next example has it.'
      },
      {
        id: 21,
        title: 'A2: Http',
        example: 'http/' + demoFile,
        summary: 'Angular applications can connect with a web server to get or save data using HTTP.'
      },
      {
        id: 22,
        title: 'A2: Http with Async Pipe',
        example: 'http-async/' + demoFile,
        summary: 'Using Http with Observables and the Async Pipe.'
      },
      {
        id: 23,
        title: 'A2: Http with Promises',
        example: 'http-promise/' + demoFile,
        summary: 'Using Http with promises.'
      }
    ];

    ////////////////

    function getCards() {
      return cards;
    }

  }
})();




    // }, {
    //   id: 1,
    //   title: 'Modules',
    //   example: 'modules.html',
    //   summary: 'We assemble our application from modules. A module exports something of value such as a Service, Component, or a shared value. '
    // }, {
    //   id: 2,
    //   title: 'Components',
    //   example: 'modules.html',
    //   summary: 'A Component contains application logic that controls a region of the user interface that we call a view.'
    // }, {
    //   id: 3,
    //   title: 'Templates',
    //   example: 'modules.html',
    //   summary: 'Templates are mostly HTML, and they tell Angular how to render the Component.'
    // }, {
    //   id: 4,
    //   title: 'Angular Metadata',
    //   example: 'modules.html',
    //   summary: 'We use Metadata to tell Angular more about the objects we build. For example, we use metadata to tell Angular how to know where to find a Component\s template.'
    // }, {
    //   id: 5,
    //   title: 'Data Binding',
    //   example: 'modules.html',
    //   summary: 'We use data binding to help coordinate communication between a Component and its template.'
    // }, {
    //   id: 6,
    //   title: 'Directives',
    //   example: 'modules.html',
    //   summary: 'When Angular renders templates, it transforms the DOM according to instructions from Directives'
    // }, {
    //   id: 7,
    //   title: 'Services',
    //   example: 'modules.html',
    //   summary: 'A Service provides anything our application needs. It often shares data or functions between other Angular features'
    // }, {
    //   id: 8,
    //   title: 'Dependency Injection',
    //   example: 'modules.html',
    //   summary: 'Dependency Injection is how we provide an instance of a class to another Angular feature.'
    // }, {
    //   id: 9,
    //   title: 'Lifecycle Hooks',
    //   example: 'modules.html',
    //   summary: 'Lifecycle Hooks allow us to tap into specific moments in the application lifecycle to perform logic. We often use these for moments during the Component and Router lifecycle.'
    // }, {
    //   id: 10,
    //   title: 'Routing',
    //   example: 'modules.html',
    //   summary: 'Routing allows our application to navigate between different Components, passing parameters where needed.'
    // }, {
    //   id: 11,
    //   title: 'HTTP',
    //   example: 'http.rxjs.html',
    //   summary: 'Angular applications can connect with a web server to get or save data using HTTP.'
    // }, {
    //   id: 12,
    //   title: 'Pipes',
    //   example: 'modules.html',
    //   summary: 'Pipes allow us to transform data for display in a Template.'
    // }
