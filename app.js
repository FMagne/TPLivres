(function () {
    "use strict";

    var app = angular.module('bookStore', []);

    app.controller('StoreController',  function (){
        this.products = book;
        this.activeFilter = 'name';

        this.filterOn = function(param){
            this.activeFilter = param;
        }

    });

    var books = [
        {
            name: 'Tome 1 : La Première Leçon du Sorcier',
            price: 25,
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
            }]
        },
        {
            name: 'Tome 2 : La Pierre des Larmes',
            price: 25,
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
            }]
        },
        {
            name: 'Tome 3 : Le Sang de la Déchirure',
            price: 25,
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
            }]
        },
        {
            name: 'Tome 4 : Le Temple des Vents',
            price: 25,
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
            }]
        },
        {
            name: "Tome 5 : L'Âme du Feu",
            price: 25,
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
            }]
        },
        {
            name: 'Tome 6 : La Foi des Réprouvés',
            price: 25,
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
            }]
        },
        {
            name: 'Tome 7 : Les Piliers de la Création',
            price: 25,
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
            }]
        },
        {
            name: "Tome 8 : L'Empire des Vaincus",
            price: 25,
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
            }]
        },
        {
            name: 'Tome 9 : La Chaîne des Flammes',
            price: 25,
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
            }]
        },
        {
            name: 'Tome 10 : Le Fantôme du Souvenir',
            price: 25,
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
            }]
        },
        {
            name: "Tome 11 : L'Ombre d'une Inquisitrice",
            price: 25,
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
            }]
        },
        {
            name: 'Tome 12 : La Machine à Présages',
            price: 25,
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
            }]
        }
        {
            name: 'Tome 13 : Le Troisième Royaume',
            price: 25,
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
            }]
        }
 {
            name: 'Tome 14 : Le Crépuscule des Prophéties',
            price: 25,
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
            }]
        }
 {
            name: 'Tome 15 : Le Coeur de la Guerre',
            price: 25,
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
            }]
        }
    ];
})();
