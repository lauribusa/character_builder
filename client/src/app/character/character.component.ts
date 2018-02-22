import { Component, OnInit } from '@angular/core';
// import { CharacterStats } from './character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  title = 'Character Selected';

  constructor() {
  }
  ngOnInit() {
  }

}
