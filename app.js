angular.module('linkApp', [])

.controller('mainController', function ($scope) {

    // Set the defaul Bootswatch name
    $scope.css = 'cosmo';

    // Create list of Bootswatches
    $scope.bootstraps = [
      { name: 'Basic', url: 'cosmo' },
      { name: 'Darkly', url: 'darkly' },
      { name: 'Slate', url: 'slate' },
      { name: 'Sandstone', url: 'sandstone' },
      { name: 'Yeti', url: 'yeti'}
    ];

    // Set the default layout
    $scope.layout = 'normal';

    // Create list of layout files
    $scope.layouts = [
      { name: 'Boring', url: 'normal' },
      { name: 'Circles', url: 'circle' },
      { name: 'In Your Face', url: 'large' }
    ];

});