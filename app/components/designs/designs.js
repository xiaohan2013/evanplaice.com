import {
  Component,
  View
} from 'angular2';

@Component ({
  selector: 'designs'
})
@View ({
  templateUrl: 'app/components/designs/designs.html'
})
export class DesignsComponent {
  constructor() {
    console.log('designs')
  }
}