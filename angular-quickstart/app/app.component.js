"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Import the Component decorator from @angular/core
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.search_term = '';
        this.club_is_matched = function (club) {
            var name = club.name.toUpperCase();
            var searched_for = this.search_term.toUpperCase();
            return name.indexOf(searched_for) !== -1;
        };
        this.league = {
            "name": "English Premier League 2015/16",
            "clubs": [
                {
                    "key": "chelsea",
                    "name": "Chelsea",
                    "code": "CHE"
                },
                {
                    "key": "arsenal",
                    "name": "Arsenal",
                    "code": "ARS"
                },
                {
                    "key": "tottenham",
                    "name": "Tottenham Hotspur",
                    "code": "TOT"
                },
                {
                    "key": "westham",
                    "name": "West Ham United",
                    "code": "WHU"
                },
                {
                    "key": "crystalpalace",
                    "name": "Crystal Palace",
                    "code": "CRY"
                },
                {
                    "key": "manutd",
                    "name": "Manchester United",
                    "code": "MUN"
                },
                {
                    "key": "mancity",
                    "name": "Manchester City",
                    "code": "MCI"
                },
                {
                    "key": "everton",
                    "name": "Everton",
                    "code": "EVE"
                },
                {
                    "key": "liverpool",
                    "name": "Liverpool",
                    "code": "LIV"
                },
                {
                    "key": "westbrom",
                    "name": "West Bromwich Albion",
                    "code": "WBA"
                },
                {
                    "key": "newcastle",
                    "name": "Newcastle United",
                    "code": "NEW"
                },
                {
                    "key": "stoke",
                    "name": "Stoke City",
                    "code": "STK"
                },
                {
                    "key": "sunderland",
                    "name": "Sunderland",
                    "code": "SUN"
                },
                {
                    "key": "astonvilla",
                    "name": "Aston Villa",
                    "code": "AVL"
                },
                {
                    "key": "southampton",
                    "name": "Southampton",
                    "code": "SOU"
                },
                {
                    "key": "leicester",
                    "name": "Leicester City",
                    "code": "LEI"
                },
                {
                    "key": "bournemouth",
                    "name": "Bournemouth",
                    "code": "BOU"
                },
                {
                    "key": "norwich",
                    "name": "Norwich",
                    "code": "NOR"
                },
                {
                    "key": "watford",
                    "name": "Watford",
                    "code": "WAT"
                },
                {
                    "key": "swansea",
                    "name": "Swansea",
                    "code": "SWA"
                }
            ]
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-component',
            templateUrl: 'app/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map