import { MenuUserPage } from './../pages/menu-user/menu-user';
import { SearchPage } from './../pages/search/search';

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
import { MyChatsPage } from '../pages/my-chats/my-chats';
import { ChatPage } from '../pages/chat/chat';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { RatingPage } from '../pages/rating/rating';
import { Camera } from '@ionic-native/camera';
import { Dialogs } from '@ionic-native/dialogs';
import { ComponentsModule } from '../components/components.module'; //necesario para que funcione el decorador componente
import { Ionic2RatingModule } from 'ionic2-rating';  
import { EditarProfilePage } from '../pages/editar-profile/editar-profile';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SolicitudesPage } from '../pages/solicitudes/solicitudes';
import { GlobalProvider } from '../providers/global/global';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { MenuprofilePage } from '../pages/menuprofile/menuprofile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegistroPage,
    ProfilePage,
    MyChatsPage,
    ChatPage,
    TimelinePage,  
    UserProfilePage,
    EditarProfilePage,
    SearchPage,
    SolicitudesPage,
    MenuUserPage,
    MenuprofilePage,
    ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: true}),
    Ionic2RatingModule,
    SuperTabsModule.forRoot(),
    IonicStorageModule.forRoot(),
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
    MyChatsPage,
    ChatPage,
    TimelinePage,
    UserProfilePage,
    EditarProfilePage,
    SearchPage,
    SolicitudesPage,
    MenuUserPage,
    MenuprofilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
  ]
})
export class AppModule {}
