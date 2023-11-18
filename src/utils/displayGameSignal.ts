import { signal } from "@preact/signals-react";

export enum DisplayType {
  STAT = 0,
  LIVE = 1,
}

export const display = signal<DisplayType>(DisplayType.STAT);
