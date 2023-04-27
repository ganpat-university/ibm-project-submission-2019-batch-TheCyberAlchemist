import { Component, OnInit } from '@angular/core';
import { invoke } from '@tauri-apps/api';
import { NavbarService } from '../shared/navbar/navbar.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(private navSercvice: NavbarService) { 
    // this.navSercvice.pageChangedTo.emit(
    //   "Homepage"
    // );
    let a = invoke("plugin:po|get_indents_for_wo")
    .then((result: any) => {
      return result;
    });
  }

  ngOnInit(): void {

  }

}
