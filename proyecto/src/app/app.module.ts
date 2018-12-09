import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimelinePage } from '../pages/timeline/timeline';
import { RegistroPage } from '../pages/registro/registro';
import { ProfilePage } from '../pages/profile/profile';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { RatingPage } from '../pages/rating/rating';
import { Camera } from '@ionic-native/camera';
import { Dialogs } from '@ionic-native/dialogs';
import { ComponentsModule } from '../components/components.module'; //necesario para que funcione el decorador componente
import { Ionic2RatingModule } from 'ionic2-rating';  
import { PublicarPostPage } from '../pages/publicar-post/publicar-post';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    ProfilePage,
    TimelinePage,  
    UserProfilePage,
    PublicarPostPage,
    
    
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistroPage,
    ProfilePage,
    TimelinePage,
    UserProfilePage,
    PublicarPostPage,
   
     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
