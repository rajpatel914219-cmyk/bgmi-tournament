importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDsJUtZdIXcsB0w_2MQhMBXxIgbI3ijOvg",
  authDomain: "incoinpaysliveearning.firebaseapp.com",
  projectId: "incoinpaysliveearning",
  storageBucket: "incoinpaysliveearning.firebasestorage.app",
  messagingSenderId: "971873814750",
  appId: "1:971873814750:web:7418c7da119e4725ed9a4f"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {

  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "/icon.png"
    }
  );

});
