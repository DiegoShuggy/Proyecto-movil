const OneSignal = require('onesignal-cordova-plugin');

const initOneSignal = () => {
  OneSignal.setLogLevel(6, 0); // Para depuración, puedes ajustar esto después
  OneSignal.setAppId('29430c16-dd16-4a6f-a7fb-f085bdcb1911'); // Reemplaza con tu ID de OneSignal
  OneSignal.promptForPushNotificationsWithUserResponse();
  
  OneSignal.handleNotificationReceived(() => {
    console.log('Notificación recibida');
  });

  OneSignal.handleNotificationOpened(() => {
    console.log('Notificación abierta');
  });
};

module.exports = { initOneSignal };
