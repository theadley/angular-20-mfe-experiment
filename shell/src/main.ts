import { initFederation } from '@angular-architects/native-federation';

initFederation({
  // 'mfe1': 'http://localhost:4201/remoteEntry.json',
  'mfe1': 'https://kriogen777-n8n.s3.eu-north-1.amazonaws.com/mfe1/remoteEntry.json',
  // "src/proxy.conf.json"
  // angular.json[38] "proxyConfig": "src/proxy.conf.json"
  // 'mfe1': 'https://localhost:4200/s3/mfe1/remoteEntry.json',
  'mfe2': 'http://localhost:4202/remoteEntry.json'
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
