import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../shared/character.service';
import { CharacterStats } from '../shared/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characterStats: CharacterStats[];

  constructor(public characterService: CharacterService) {
    this.characterStats = new Array;

  }

  ngOnInit() {
    this.characterService.getAll().then(result => {
      console.log(this.characterStats);
    });

  }
}
