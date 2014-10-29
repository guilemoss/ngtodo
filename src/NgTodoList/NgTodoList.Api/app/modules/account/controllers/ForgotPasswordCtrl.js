﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('ForgotPasswordCtrl', ForgotPasswordCtrl);

    ForgotPasswordCtrl.$inject = ['$scope', 'UserRepository', '$location'];

    function ForgotPasswordCtrl($scope, UserRepository, $location) {
        $scope.forgotPasswordModel = {
            email: ''
        };

        $scope.rememberPassword = function () {
            UserRepository.register($scope.forgotPasswordModel).then(
                function (result) {
                    toastr.success(result, 'Senha restaurada com sucesso!');
                    $location.path('/forgot-paswword-sucess');
                },
                function (error) {
                    toastr.error(error.data, 'Falha no registro');
                });
        }
    }
})();
