// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const environment = {
  production: false,
  firebase: {
    apiKey:"AIzaSyBDO6kZb1KNKfYUP_tcOMDc-7_fzo3knrs" ,
    authDomain: "recordandola-d401f.firebaseapp.com",
    databaseURL: "https://recordandola-d401f.firebaseio.com",
    projectId: "recordandola-d401f",
    storageBucket: "recordandola-d401f.appspot.com",
    messagingSenderId: "283495314424"
  }
};
