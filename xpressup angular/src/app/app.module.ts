import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { Config } from './commons/config';

import { AppComponent } from './app.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { SearchResultService } from './services/search-result.service';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,   
    ReactiveFormsModule,
    CKEditorModule,
    QuillModule,
    UiSwitchModule
  ],
  providers: [
    Config,
    SearchResultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
