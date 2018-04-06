/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSelectChange} from '@angular/material';

@Component({

    selector: 'app-select-demo',
    templateUrl: './select-demo.html',
    styleUrls: ['./select-demo.scss'],
})
export class SelectDemoComponent {
  drinksRequired = false;
  drinkObjectRequired = false;
  pokemonRequired = false;
  drinksDisabled = false;
  pokemonDisabled = false;
  showSelect = false;
  currentDrink: string;
  currentDrinkObject: {}|undefined = {value: 'tea-5', viewValue: 'Tea'};
  currentPokemon: string[];
  currentPokemonFromGroup: string;
  currentDigimon: string;
  latestChangeEvent: MatSelectChange;
  floatLabel = 'auto';
  foodControl = new FormControl('pizza-1');
  topHeightCtrl = new FormControl(0);
  drinksTheme = 'primary';
  pokemonTheme = 'primary';
  compareByValue = true;

  foods = [
    {value: null, viewValue: 'None'},
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  drinks = [
    {value: 'coke-0', viewValue: 'Coke'},
    {value: 'long-name-1', viewValue: 'Decaf Chocolate Brownie Vanilla Gingerbread Frappuccino'},
    {value: 'water-2', viewValue: 'Water'},
    {value: 'pepper-3', viewValue: 'Dr. Pepper'},
    {value: 'coffee-4', viewValue: 'Coffee'},
    {value: 'tea-5', viewValue: 'Tea'},
    {value: 'juice-6', viewValue: 'Orange juice'},
    {value: 'wine-7', viewValue: 'Wine'},
    {value: 'milk-8', viewValue: 'Milk'},
  ];

  pokemon = [
    {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
    {value: 'charizard-1', viewValue: 'Charizard'},
    {value: 'squirtle-2', viewValue: 'Squirtle'},
    {value: 'pikachu-3', viewValue: 'Pikachu'},
    {value: 'jigglypuff-4', viewValue: 'Jigglypuff with a really long name that will truncate'},
    {value: 'ditto-5', viewValue: 'Ditto'},
    {value: 'psyduck-6', viewValue: 'Psyduck'},
  ];

  availableThemes = [
    {value: 'primary', name: 'Primary' },
    {value: 'accent', name: 'Accent' },
    {value: 'warn', name: 'Warn' }
  ];

  pokemonGroups = [
    {
      name: 'Grass',
      pokemon: [
        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
        { value: 'oddish-1', viewValue: 'Oddish' },
        { value: 'bellsprout-2', viewValue: 'Bellsprout' }
      ]
    },
    {
      name: 'Water',
      pokemon: [
        { value: 'squirtle-3', viewValue: 'Squirtle' },
        { value: 'psyduck-4', viewValue: 'Psyduck' },
        { value: 'horsea-5', viewValue: 'Horsea' }
      ]
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        { value: 'charmander-6', viewValue: 'Charmander' },
        { value: 'vulpix-7', viewValue: 'Vulpix' },
        { value: 'flareon-8', viewValue: 'Flareon' }
      ]
    },
    {
      name: 'Psychic',
      pokemon: [
        { value: 'mew-9', viewValue: 'Mew' },
        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
      ]
    }
  ];

  digimon = [
    { value: 'mihiramon-0', viewValue: 'Mihiramon' },
    { value: 'sandiramon-1', viewValue: 'Sandiramon' },
    { value: 'sinduramon-2', viewValue: 'Sinduramon' },
    { value: 'pajiramon-3', viewValue: 'Pajiramon' },
    { value: 'vajiramon-4', viewValue: 'Vajiramon' },
    { value: 'indramon-5', viewValue: 'Indramon' }
  ];

  toggleDisabled() {
    this.foodControl.enabled ? this.foodControl.disable() : this.foodControl.enable();
  }

  setPokemonValue() {
    this.currentPokemon = ['jigglypuff-4', 'psyduck-6'];
  }

  reassignDrinkByCopy() {
    this.currentDrinkObject = {...this.currentDrinkObject};
  }

  compareDrinkObjectsByValue(d1: {value: string}, d2: {value: string}) {
    return d1 && d2 && d1.value === d2.value;
  }

  compareByReference(o1: any, o2: any) {
    return o1 === o2;
  }
}
