import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { Hello1ContainerComponent } from './features/hello1/hello1-container.component';
import { Hello2Component } from './features/hello2/container/hello2.component';
import { Hello2ContainerComponent } from './features/hello1/hello2-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Hello1ContainerComponent,
    Hello2ContainerComponent,
    Hello2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
