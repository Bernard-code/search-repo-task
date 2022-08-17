import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MaterialModule} from './material/material.module';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {IssuesModule} from './views/issues/issues.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IssuesEffects } from './store/issues.effects';
import { initialState, issuesReducer } from './store/issues.reducer';
import { IssuesFacade } from './store/issues.facade';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    SharedModule,
    IssuesModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('issuesReducer', issuesReducer, {initialState}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([IssuesEffects]),
  ],
  providers: [IssuesFacade, IssuesEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
