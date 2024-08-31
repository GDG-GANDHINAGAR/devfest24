import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService} from '@angular/fire/analytics';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {IMAGE_LOADER, ImageLoaderConfig} from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes, withInMemoryScrolling({
      anchorScrolling: "enabled", scrollPositionRestoration: "enabled"
    })),
    provideClientHydration(),
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `https://df24.b-cdn.net/${config.src}`;
      },
    },
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({
      "projectId": "gdg-gnr",
      "appId": "1:865471101877:web:a309f20a7c8547c684f7fc",
      "storageBucket": "gdg-gnr.appspot.com",
      "apiKey": "AIzaSyC8DWAignVPtgY4Fw3X_pNDzu40o9mmCcM",
      "authDomain": "gdg-gnr.firebaseapp.com",
      "messagingSenderId": "865471101877",
      "measurementId": "G-1YB0B0MY23"
    })), provideAuth(() => getAuth()),

    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
  ]
};
