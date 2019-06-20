// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ContactComponent } from './contact/contact.component';
// import { NameEditorComponent } from './name-editor/name-editor.component';
// import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ContactComponent,
//     NameEditorComponent,
//     ProfileEditorComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     ReactiveFormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
