declare module 'OneSignalConfig' {
  export function initOneSignal(): void;
}

declare module 'onesignal-cordova-plugin' {
  export function setLogLevel(logLevel: number, logLevelConsole: number): void;
  export function setAppId(appId: string): void;
  export function promptForPushNotificationsWithUserResponse(): void;
  export function handleNotificationReceived(callback: () => void): void;
  export function handleNotificationOpened(callback: () => void): void;
}
