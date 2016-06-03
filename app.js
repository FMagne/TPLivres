(function () {
    "use strict";

    var app = angular.module('bookStore', []);

    app.controller('StoreController',  function (){
        this.products = books;
        this.activeFilter = 'name';
        this.reverse = false;

        this.isSelect = function(param){
            return this.tab === param;
        }

        this.selTab = function(param){
            this.tab = param;
        }
        this.filterOn = function(param){
            if(this.activeFilter != param){
                this.activeFilter = param;
                this.reverse = false;
            }else
                this.reverse = true;
        }

        this.selectedItem = function(livre){
            for(var i = 0; i<this.products.length ; i++)
                this.products[i].selected = (i==livre);
        }

        this.item = new Array();
        this.quantite = new Array();

        this.addItem = function(id) {
            var find = false;
            for(var i = 0; i< this.item.length; i++){
                if(this.item[i]==id){
                    this.quantite[i] += 1;
                    find = true;
                }
            }
            if(!find){
                this.item.push(id);
                this.quantite.push(1);
            }
        }
        this.removeItem = function(id) {
           for(var i = 0; i< this.item.length; i++){
                if(this.item[i]==id){
                    this.quantite[i] -= 1;
                    if(this.quantite[i] <= 0){
                        this.item.splice(i,1);
                        this.quantite.splice(i,1);
                    }
                }
            }
        }
        this.total = function(){
            return this.totalSansReduc() - this.reduc();
        }
        this.totalSansReduc = function() {
            var total = 0;
            for(var i = 0;i<this.item.length; i++)
                total+= this.products[this.item[i]].price * this.quantite[i];
            return total;
        }

        this.reduc = function(){
            var compteur = 0;
            var itemsReduc = JSON.parse(JSON.stringify(this.quantite));
            var reduc = parseFloat(0);
            var newTotal = parseFloat(0);
            var price=0;
            if(itemsReduc.length>=2){
                do{
                    compteur = 0;
                    price = 0;
                    for(var i=0; i< itemsReduc.length ; i++){
                        if(itemsReduc[i]!=0){
                            itemsReduc[i] -= 1;
                            compteur++;
                            price += this.products[this.item[i]].price;
                        }
                    }
                    newTotal = price;
                    switch(compteur){
                        case 2:
                            //5%
                            newTotal *= 0.95;
                            break;
                        case 3:
                            //10%
                            newTotal *= 0.90;
                            break;
                        case 4:
                            //20%
                            newTotal *= 0.80;
                            break;
                        case 5:
                            //25%
                            newTotal *= 0.75;
                            break;
                        default:
                            break;
                    }
                    reduc += parseFloat(price) - parseFloat(newTotal);
                }while(compteur!=0);
                return parseFloat(reduc);
            }else
                return 0;

        }
    });


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
            image: "images/8_nakedempire.jpg",
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
