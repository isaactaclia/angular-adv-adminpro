import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public labels1: string[] =[ 'Pan', 'Leche', 'Verdura' ];
  public data1 = {
    labels: this.labels1,
    datasets: [
      { 
        data: [ 10, 15, 40 ] ,
      }
    ]
  }
    
  // public data1 = [
  //   { 
  //     data: [ 350, 450, 100 ] ,
  //     backgroundColor:['#9E1203', '#FF5800', '#FFB414'],
  //   }
  // ]
}
