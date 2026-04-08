import {Routes} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';

// Note that the remoteName must match that defined in main.ts
// initFederation({
//   'mfe1': 'http://localhost:4201/remoteEntry.json',
//   'mfe2': 'http://localhost:4202/remoteEntry.json'
// })

export const routes: Routes = [
  {
    path: 'mfe1',
    loadComponent: () =>
      // remoteName matches the definition in main.ts
      // exposedModule matches the "exposes" value in the MFE's federation.config.js
      loadRemoteModule('mfe1', './Component')
        // "App" is the object name and is case-sensitive
        // exposes: {
        //     './Component': './src/app/app.ts',
        //   },
        // then from './src/app/app.ts'
        // `export class App` so we therefore use m.App where "App" comes from the exported component
        .then(m => m.App),
  },
  {
    path: 'mfe2',
    loadComponent: () =>
      loadRemoteModule('mfe2', './Component')
        .then(m => m.App),
  },
  {
    path: 'mfe2-routes',
    // loadChildren allow us to lazy load the remote module
    // the remote module in this instance is the "./routes" module defined as exposed in federation.config.js
    loadChildren: () => loadRemoteModule('mfe2', './routes')
      // the "routes" object is exported and exposed from './src/app/app.routes.ts'
      // this name is CASE-SENSITIVE
      .then(m => m.routes)
  }
];
