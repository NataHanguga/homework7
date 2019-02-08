import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  elements: any = [{
      id: 1,
      first: 'Mark',
      last: 'Otto',
      handle: '@mdo',
      age: 30
    },
    {
      id: 2,
      first: 'Jacob',
      last: 'Thornton',
      handle: '@fat',
      age: 22
    },
    {
      id: 3,
      first: 'Larry',
      last: 'the Bird',
      handle: '@twitter',
      age: 18
    },
  ];

  headElements = ['ID', 'First', 'Last', 'Handle', 'Age'];

  constructor() {}

  ngOnInit() {}

}
