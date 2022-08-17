import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IssuesComponents} from './components';
import {SharedServices} from '../../shared/services';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../material/material.module';
import { IssuesCardBodyComponent } from './components/issues-card/issues-card-body/issues-card-body.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    ...IssuesComponents
  ],
  declarations: [
    ...IssuesComponents,
    IssuesCardBodyComponent
  ],
  providers: [
    ...SharedServices
  ]
})
export class IssuesModule { }
