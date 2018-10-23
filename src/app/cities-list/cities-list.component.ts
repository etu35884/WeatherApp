import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  cityForm = new FormGroup({
    cityName: new FormControl('', [Validators.required]),
    countryCode: new FormControl('', [Validators.required, Validators.maxLength(2), Validators.minLength(2)])
  });
  cities = new Array();
  keys = new Array();

  constructor() { }

  ngOnInit() {
    this.cities = this.allStorage();
    this.keys = Object.keys(localStorage);
  }

  onSubmit(){
    let myStorage = window.localStorage;
    myStorage.setItem(this.cityForm.get('cityName').value, this.cityForm.get('countryCode').value);
    this.reload();
    this.cityForm.get('cityName').setValue('');
    this.cityForm.get('countryCode').setValue('');
  }

  allStorage() {

    var values = [],
        keys = Object.keys(localStorage);
        var i = 0;

    while (i < keys.length) {
        values.push( localStorage.getItem(keys[i]) );
        i++;
    }

    return values;
  }

  remove(i: number){
    localStorage.removeItem(this.keys[i]);
    this.reload();
  }

  reload(){
    this.cities = this.allStorage();
    this.keys = Object.keys(localStorage);
  }

}
