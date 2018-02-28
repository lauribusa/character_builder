import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../shared/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  title = 'Character';

  constructor() { }

  ngOnInit() {
  }

}
