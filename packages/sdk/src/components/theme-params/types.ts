import type { StateEvents } from '@/classes/with-state/types.js';
import type { RGB } from '@/colors/types.js';

export type ThemeParamsKey =
  | 'accentTextColor'
  | 'bgColor'
  | 'buttonColor'
  | 'buttonTextColor'
  | 'destructiveTextColor'
  | 'headerBgColor'
  | 'hintColor'
  | 'linkColor'
  | 'secondaryBgColor'
  | 'sectionBgColor'
  | 'sectionHeaderTextColor'
  | 'subtitleTextColor'
  | 'textColor';

/**
 * Application [theme parameters](https://docs.telegram-mini-apps.com/platform/theming).
 * Defines palette used by the Telegram application.
 */
export interface ThemeParamsParsed {
  [key: ThemeParamsKey | string]: RGB | undefined;
}

/**
 * ThemeParams internal state.
 */
export interface ThemeParamsState extends ThemeParamsParsed {
}

/**
 * ThemeParams trackable events.
 */
export interface ThemeParamsEvents extends StateEvents<ThemeParamsState> {
}

/**
 * ThemeParams event name.
 */
export type ThemeParamsEventName = keyof ThemeParamsEvents;

/**
 * ThemeParams event listener.
 */
export type ThemeParamsEventListener<E extends ThemeParamsEventName> = ThemeParamsEvents[E];
