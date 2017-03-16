import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from '../service/in-memory-data.service';
import {MyApp} from './app.component';
import {BookshelfPage} from '../pages/bookshelf/bookshelf.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {BookService} from '../service/books.service';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    MyApp,
    BookshelfPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [BrowserModule, FormsModule, HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BookshelfPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
  ],
  providers: [BookService,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
