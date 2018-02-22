import { Component, OnInit } from '@angular/core';
// import { CharacterStats } from '../character/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  title = 'Characters List';
  // characterStats: CharacterStats[];
  constructor() { }

  ngOnInit() {
    console.log();
  }

}
