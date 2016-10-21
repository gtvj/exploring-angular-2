// Import the Component decorator from @angular/core
import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    templateUrl: 'app/app.component.html'
})

export class AppComponent {
    search_term = '';
    club_is_matched = function(club) {

        let name = club.name.toUpperCase();
        let searched_for = this.search_term.toUpperCase();

        return name.indexOf(searched_for) !== -1;

    };
    league = {
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
    }
}
