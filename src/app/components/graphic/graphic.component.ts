import { Component, OnInit } from '@angular/core';
// For MDB Angular Free
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss']
})
export class GraphicComponent implements OnInit {

  public chartType1 = 'pie';

  public chartDatasets1: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Lorem Level' }
  ];

  public chartType2 = 'line';

  public chartDatasets2: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Happy Level' }
  ];

  public chartType = 'bar';

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Successful Level' }
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'March', 'April', 'May', 'Jun'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(85, 239, 196,1.0)',
        'rgba(129, 236, 236,1.0)',
        'rgba(116, 185, 255,1.0)',
        'rgba(162, 155, 254,1.0)',
        'rgba(253, 121, 168,1.0)',
        'rgba(255, 118, 117,1.0)'
      ],
      borderColor: [
        'rgba(0, 184, 148,1.0)',
        'rgba(0, 206, 201,1.0)',
        'rgba(9, 132, 227,1.0)',
        'rgba(108, 92, 231,1.0)',
        'rgba(232, 67, 147,1.0)',
        'rgba(214, 48, 49,1.0)'
      ],
      borderWidth: 1.5,
    }];

  public chartOptions: any = {
    responsive: false
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor() { }

  ngOnInit() {
  }


}
