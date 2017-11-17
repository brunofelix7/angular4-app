/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { AppComponent } from './components/root/app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';

/* Services */
import { PostService } from './services/post.service';

/* Routes */
import { Routing } from './app.routing';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule, HttpClientModule, Routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent, NavbarComponent, PostComponent ],
  providers: [ PostService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { 

}
