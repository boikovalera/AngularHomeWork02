import { NgModule } from '@angular/core';
import { NgCommonComponent } from './ng-common.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NgCommonComponent,
    FooterComponent
  ],
  imports: [
  ],
  exports: [
    NgCommonComponent,
    FooterComponent
  ]
})
export class NgCommonModule { }
