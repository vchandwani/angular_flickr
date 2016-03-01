var app = angular.module('test', ['ng', 'ngResource']);

app
        .controller('image', ['$scope', '$http', function AppGallery($scope, $http) {
                $scope.searchTag = function () {
                    $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags='+$scope.tag).success(function (data) {
                    });

                    jsonFlickrFeed = function (data) {
                        $scope.data = data;
                        //console.log(data);
                    }
                }
            }

        ]);