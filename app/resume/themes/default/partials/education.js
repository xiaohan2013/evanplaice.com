import { Component, View } from 'angular2/core';
import { TEMPLATE_DIRECTIVES, TEMPLATE_PIPES } from 'app/resume/themes/default/default';

import 'font-awesome/css/font-awesome.min.css!css';

@Component({
  selector: 'education',
  inputs: [ 'education' ]
})
@View({
  template:  `
  <hr>
  <section id="education">
    <header title="Education"><span class="fa fa-lg fa-mortar-board"></span></header>
    <div *ngFor="#school of education.history">
      <h3><template [ngIf]="school.title">{{ school.title }}, </template>{{ school.institution }}</h3>
      <duration [start]="school.start" [end]="school.end"></duration>
      <p>{{ school.summary }}<p>
      <curriculum [curriculum]="school.curriculum"></curriculum>
    </div>
  </section>
  `,
  directives: [ TEMPLATE_DIRECTIVES ],
  pipes: [ TEMPLATE_PIPES ]
})
export class EducationComponent {}
