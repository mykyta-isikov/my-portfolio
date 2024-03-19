import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled'
      })
    ),
    provideHttpClient(),
    provideAngularSvgIcon(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"my-portfolio-isikov","appId":"1:974777437538:web:8ec75b531f2b9e556f703b","storageBucket":"my-portfolio-isikov.appspot.com","apiKey":"AIzaSyACZMyJgXdfpAuWcoxE-PpVaJLl2lvd-R4","authDomain":"my-portfolio-isikov.firebaseapp.com","messagingSenderId":"974777437538","measurementId":"G-T1RS835F5H"}))), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService
  ]
};
