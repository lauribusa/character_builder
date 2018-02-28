import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../shared/character.service';
import { Character } from '../shared/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: any;
  title = 'Characters List';

  constructor(public characterService: CharacterService) {

  }

  ngOnInit() {
    this.characterService.getAll().then(result => {
      console.log(result);
      this.characters = result;
      console.log(this.characters[1].name);

    });
  }
}
