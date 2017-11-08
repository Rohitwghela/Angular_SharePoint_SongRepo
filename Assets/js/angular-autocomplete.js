'use strict';

/**
 * A directive for adding google places autocomplete to a text box
 * google places autocomplete info: https://developers.google.com/maps/documentation/javascript/places
 *
 * Usage:
 *
 * + ng-model - autocomplete textbox value
 *
 * + details - more detailed autocomplete result, includes address parts, latlng, etc. (Optional)
 *
 * + options - configuration for the autocomplete (Optional)
 *
 *       + types: type,        String, values can be 'geocode', 'establishment', '(regions)', or '(cities)'
 *       + bounds: bounds,     Google maps LatLngBounds Object, biases results to bounds, but may return results outside these bounds
 *       + country: country    String, ISO 3166-1 Alpha-2 compatible country code. examples; 'ca', 'us', 'gb'
 *       + watchEnter:         Boolean, true; on Enter select top autocomplete result. false(default); enter ends autocomplete
 *
 * example:
 *
 *    options = {
 *        types: '(cities)',
 *        country: 'ca'
 *    }
**/

angular.module("ngAutocomplete", [])
  .directive('ngAutocomplete', function () {
      return {
          require: 'ngModel',
          scope: {
              ngModel: '=',
              options: '=?',
              details: '=?'
          },
          link: function (scope, element, attrs, controller) {

              //options for autocomplete
              var opts;
              var watchEnter = false; //convert options provided to opts
              var initOpts = function () {

                  opts = {};
                  if (scope.options) {
                      if (scope.options.watchEnter !== true) {
                          watchEnter = false;
                      } else {
                          watchEnter = true;
                      }

                      if (scope.options.types) {
                          opts.types = [];
                          opts.types.push(scope.options.types);
                          scope.gPlace.setTypes(opts.types);
                      } else {
                          scope.gPlace.setTypes([]);
                      }
                  }
              };


              controller.$render = function () {
                  var location = controller.$viewValue;
                  element.val(location);
              };

              //watch options provided to directive
              scope.watchOptions = function () {
                  return scope.options;
              };
              scope.$watch(scope.watchOptions, function () {
                  initOpts();
              }, true);

          }
      };
  });