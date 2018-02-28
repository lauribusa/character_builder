import { Component, OnInit } from '@angular/core';
// import { CharacterStats } from './character.model';

@Component({
  selector: 'app-character-edit',
  templateUrl: './characterEdit.component.html',
  styleUrls: ['./characterEdit.component.css']
})
export class CharacterEditComponent implements OnInit {
  title = 'Character Selected';

  constructor() {
  }
  ngOnInit() {
  }

}
