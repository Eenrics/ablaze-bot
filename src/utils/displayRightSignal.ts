import { signal } from "@preact/signals-react";

export enum DisplayRightType {
  HITWIN = 0,
  BALLDRAWN = 1,
}

export const displayRight = signal<DisplayRightType>(DisplayRightType.HITWIN);
