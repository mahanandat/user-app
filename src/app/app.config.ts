import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routeData } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeData)]
};
