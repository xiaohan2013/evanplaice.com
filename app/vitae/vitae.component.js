import { Component, View, Inject } from 'angular2/core';
import { MODERN_COMPONENT, ResumeService } from 'ng2-resume/resume';

@Component({
  selector: 'vitae',
  injectables: [ ResumeService ],
  templateUrl: 'app/vitae/vitae.component.html',
  directives: [ MODERN_COMPONENT ]
})
export class VitaeComponent {

  constructor (@Inject(ResumeService) resumeService) {
    // console.log('vitae');
    // link to the vitae data
    resumeService.loadResume('jspm_packages/github/evanplaice/resume@0.0.8/Evan.Plaice-Full.Stack.Dev.json');
    resumeService.resume$.subscribe(update => this.resume = update);
  }
}
