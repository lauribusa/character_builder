import { Component, OnInit } from '@angular/core'
import { CharacterService } from '../shared/character.service'
import { Character } from '../shared/character.model'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  character: Character[];

  constructor(public characterService: CharacterService) {
    //console.log(characterService);
    this.character = new Array;
  }

  ngOnInit() {
    this.characterService.getAll().then(result => {
      console.log(result);
      console.log(result[1].name);

      this.character.push(result as Character);
      console.log(this.character);
      console.log(this.character[0]);

    });
  }
}
