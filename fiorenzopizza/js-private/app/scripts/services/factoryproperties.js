angular.module('giavacms-private')

    .factory('factoryItems',
    ['$rootScope', 'RsResource', '$q', 'APP_PROPERTIES',
        function ($rootScope, RsResource, $q, APP_PROPERTIES) {
            var service = {};
            //service.bannertypes;
            //service.richcontenttypes = {};


            service.getBannertypes = function () {
                var d = $q.defer();
                if (angular.isUndefined(service.bannertypes)) {
                    console.log(JSON.stringify(reqParams));
                    var reqParams = {};
                    reqParams['host'] = APP_PROPERTIES.HOST;
                    reqParams['startRow'] = 0;
                    reqParams['pageSize'] = 0;
                    reqParams['entityPath'] = 'bannertypes';
                    RsResource.query(reqParams, function (data) {
                        service.bannertypes = data;
                        d.resolve(service.bannertypes);
                    });
                } else {
                    d.resolve(service.bannertypes);
                }
                return d.promise;
            }

            service.getRichcontenttypes = function () {
                var d = $q.defer();
                if (angular.isUndefined(service.richcontenttypes)) {
                    var reqParams = {};
                    reqParams['host'] = APP_PROPERTIES.HOST;
                    reqParams['startRow'] = 0;
                    reqParams['pageSize'] = 0;

                    reqParams['entityPath'] = 'richcontenttypes';
                    console.log(JSON.stringify(reqParams));
                    RsResource.query(reqParams, function (data) {
                        service.richcontenttypes = data;
                        d.resolve(service.richcontenttypes);
                    });
                } else {
                    d.resolve(service.richcontenttypes);
                }
                return d.promise;
            }

            service.getCategories = function () {
                var d = $q.defer();
                if (angular.isUndefined(service.categories)) {
                    var reqParams = {};
                    reqParams['host'] = APP_PROPERTIES.HOST;
                    reqParams['startRow'] = 0;
                    reqParams['pageSize'] = 0;

                    reqParams['entityPath'] = 'categories';
                    console.log(JSON.stringify(reqParams));
                    RsResource.query(reqParams, function (data) {
                        service.categories = data;
                        d.resolve(service.categories);
                    });
                } else {
                    d.resolve(service.categories);
                }
                return d.promise;
            }

            service.getFeatures = function () {
                var d = $q.defer();
                if (angular.isUndefined(service.features)) {
                    var reqParams = {};
                    reqParams['host'] = APP_PROPERTIES.HOST;
                    reqParams['startRow'] = 0;
                    reqParams['pageSize'] = 0;

                    reqParams['entityPath'] = 'features';
                    reqParams['id2'] = 'names';
                    console.log(JSON.stringify(reqParams));
                    RsResource.query(reqParams, function (data) {
                        service.features = data;
                        d.resolve(service.features);
                    });
                } else {
                    d.resolve(service.features);
                }
                return d.promise;
            }

            service.getFeatureItems = function () {
                var d = $q.defer();
                if (angular.isUndefined(service.featureItems)) {
                    var reqParams = {};
                    reqParams['host'] = APP_PROPERTIES.HOST;
                    reqParams['startRow'] = 0;
                    reqParams['pageSize'] = 0;

                    reqParams['entityPath'] = 'features';
                    reqParams['id2'] = 'items';
                    console.log(JSON.stringify(reqParams));
                    RsResource.query(reqParams, function (data) {
                        service.featureItems = data;
                        d.resolve(service.featureItems);
                    });
                } else {
                    d.resolve(service.featureItems);
                }
                return d.promise;
            }

            $rootScope.$on('richcontenttypes', function () {
                service.richcontenttypes = undefined;
            });

            $rootScope.$on('bannertypes', function () {
                service.bannertypes = undefined;
            });

            $rootScope.$on('categories', function () {
                service.categories = undefined;
            });

            $rootScope.$on('features', function () {
                service.features = undefined;
                service.featureItems = undefined;
            });


            return service;
        }
    ])
;
