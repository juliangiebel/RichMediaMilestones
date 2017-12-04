//Modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//App/Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HelpPage } from '../pages/help/help';
import { OptionsPage } from '../pages/options/options';
import { DataFormModalPageModule } from '../pages/data-form-modal/data-form-modal.module';
import { DetailModalPageModule} from '../pages/detail-modal/detail-modal.module';
import { MapPage } from '../pages/map/map';
//Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
//Providers
import { DataProvider } from '../providers/data/data';
import { GpsProvider } from '../providers/gps/gps';
//Components
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HelpPage,
    OptionsPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    ComponentsModule,
    DataFormModalPageModule,
    DetailModalPageModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HelpPage,
    OptionsPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Geolocation,
    GpsProvider 
  ]
})
export class AppModule {}
