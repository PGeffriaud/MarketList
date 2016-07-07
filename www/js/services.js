angular.module('starter.services', [])

    .factory('Items', function($firebaseArray) {
        var itemsRef = new Firebase('https://ionicexample-f26c5.firebaseio.com/items');
        var items = $firebaseArray(itemsRef);

        return {
            all: function() {
                return items;
            },
            addItem: function(name) {
                items.$add({
                    'name': name
                });
            },
            removeItem: function(item) {
                items.$remove(item);
            }
        };
    })
    
    .factory('Connection', function() {
            var auth = firebase.auth();
        return {
            signInWithGoogle: function(googleUser) {
                var provider = new firebase.auth.GoogleAuthProvider();
                auth.signInWithGoogle(provider);
            },

            signInWithMail: function(email, password) {
                auth.signInWithEmailAndPassword(email, password)
                    .catch(function(error) {
                        console.log(error);
                    });
            },

            signUpWithMail: function(email, password) {
                auth.createUserWithEmailAndPassword(email, password)
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        }
    });

    