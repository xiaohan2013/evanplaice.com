import { Component, View } from 'angular2/core';
import { MarkdownComponent } from 'ng2-markdown-component';

@Component({
  selector: 'project',
  inputs: [ 'project', 'last' ],
  templateUrl: 'app/projects/project.component.html',
  styles: [`
    h2, h3 {
      margin-bottom: 10px !important;
    }
    h3 {
      margin-top: 10px;

    }
  `],
  directives: [ MarkdownComponent ]
})
export class ProjectComponent {
  constructor () {
    // console.log('project');
  }

  descLink () {
    if (this.project.description) {
      return 'content/projects/' + this.project.description;
    }
  }
}
