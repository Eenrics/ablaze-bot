export {};

declare global {
  interface Window {
    Telegram: TelegramType;
  }
}

interface TelegramType {
  WebApp: {
    ready: () => void;
  };
}
