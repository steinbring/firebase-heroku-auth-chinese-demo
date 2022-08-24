import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app';

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "< value from https://console.firebase.google.com/ goes here >",
  authDomain: "< value from https://console.firebase.google.com/ goes here >",
  databaseURL: "< value from https://console.firebase.google.com/ goes here >",
  projectId: "< value from https://console.firebase.google.com/ goes here >",
  storageBucket: "< value from https://console.firebase.google.com/ goes here >",
  messagingSenderId: "< value from https://console.firebase.google.com/ goes here >",
  appId: "< value from https://console.firebase.google.com/ goes here >",
  measurementId: "< value from https://console.firebase.google.com/ goes here >"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
