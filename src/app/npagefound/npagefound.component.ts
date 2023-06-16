import { Component } from '@angular/core';

@Component({
  selector: 'app-npagefound',
  templateUrl: './npagefound.component.html',
  styleUrls: [ './npagefound.component.css' ]
})
export class NpagefoundComponent{

  year = new Date().getFullYear();

}
