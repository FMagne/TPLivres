(function () {
    "use strict";

    var app = angular.module('bookStore', []);

    app.controller('StoreController',  function (){
        this.products = books;
        this.activeFilter = 'name';
        this.reverse = false;
        this.filterOn = function(param){
            if(this.activeFilter != param){
                this.activeFilter = param;
                this.reverse = false;
            }else
                this.reverse = true;
        }
    });

    function CartForm($scope) {
    $scope.invoice = {
        items: [{
            qty: 10,
            description: 'item',
            cost: 9.95}]
    };

    $scope.addItem = function() {
        $scope.invoice.items.push({
            qty: 1,
            description: '',
            cost: 0
        });
    },

    $scope.removeItem = function(index) {
        $scope.invoice.items.splice(index, 1);
    },

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.invoice.items, function(item) {
            total += item.qty * item.cost;
        })

        return total;
    }

    var books = [
        {
            name: 'Tome 1 : La Première Leçon du Sorcier',
            price: 8,
            image: "images/1_wizardsfirstrule.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: 'Tome 2 : La Pierre des Larmes',
            price: 8,
            image: "images/2_stoneoftears.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: 'Tome 3 : Le Sang de la Déchirure',
            price: 8,
            image: "images/3_bloodofthefold.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: 'Tome 4 : Le Temple des Vents',
            price: 8,
            image: "images/4_templeofthewinds.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: "Tome 5 : L'Âme du Feu",
            price: 8,
            image: "images/5_soulofthefire.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: 'Tome 6 : La Foi des Réprouvés',
            price: 8,
            image: "images/6_faithofthefallen.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: 'Tome 7 : Les Piliers de la Création',
            price: 8,
            image: "images/7_thepillarsofcreation.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: "Tome 8 : L'Empire des Vaincus",
            price: 8,
            image: "images/8_nakedempire",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: 'Tome 9 : La Chaîne des Flammes',
            price: 8,
            image: "images/9_chainfire.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: 'Tome 10 : Le Fantôme du Souvenir',
            price: 8,
            image: "images/10_phantom.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: "Tome 11 : L'Ombre d'une Inquisitrice",
            price: 8,
            image: "images/11_confessor.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: 'Tome 12 : La Machine à Présages',
            price: 8,
            image: "images/12_theomenmachine.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: 'Tome 13 : Le Troisième Royaume',
            price: 8,
            image: "images/13_thirdkingdom.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: 'Tome 14 : Le Crépuscule des Prophéties',
            price: 8,
            image: "images/14_severedsouls.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        },
        {
            name: 'Tome 15 : Le Coeur de la Guerre',
            price: 8,
            image: "images/15_warheart.jpg",
            reviews: [{
              stars: 5,
              body: "I love this gem!",
              author: "joe@example.org",
              createdOn: 1397490980837
            }, {
              stars: 1,
              body: "This gem sucks.",
              author: "tim@example.org",
              createdOn: 1397490980837
            }],
            selected: false
        }
    ];
})();
