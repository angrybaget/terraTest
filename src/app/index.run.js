(function() {
  'use strict';

  angular
    .module('lionTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
