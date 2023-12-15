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
export interface HISTORTYPE {
  daily_id: number;
  draw: number[];
}
