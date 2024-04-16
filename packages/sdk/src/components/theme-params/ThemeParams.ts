import { on } from '@/bridge/events/on.js';
import type { CleanupFn } from '@/bridge/events/types/misc.js';
import { WithState } from '@/classes/with-state/WithState.js';
import { isColorDark } from '@/colors/isColorDark.js';
import type { RGB } from '@/colors/types.js';

import { parseThemeParams } from './parseThemeParams.js';
import type { ThemeParamsParsed, ThemeParamsState } from './types.js';

/**
 * @see Usage: https://docs.telegram-mini-apps.com/platform/theming
 * @see API: https://docs.telegram-mini-apps.com/packages/tma-js-sdk/components/theme-params
 */
export class ThemeParams extends WithState<ThemeParamsState> {
  /**
   * @since v6.10
   */
  get accentTextColor(): RGB | undefined {
    return this.get('accentTextColor');
  }

  get bgColor(): RGB | undefined {
    return this.get('bgColor');
  }

  get buttonColor(): RGB | undefined {
    return this.get('buttonColor');
  }

  get buttonTextColor(): RGB | undefined {
    return this.get('buttonTextColor');
  }

  get destructiveTextColor(): RGB | undefined {
    return this.get('destructiveTextColor');
  }

  /**
   * Returns the copy of the internal state of the current component instance.
   */
  getState(): ThemeParamsParsed {
    return this.clone();
  }

  /**
   * @since v6.10
   */
  get headerBgColor(): RGB | undefined {
    return this.get('headerBgColor');
  }

  get hintColor(): RGB | undefined {
    return this.get('hintColor');
  }

  /**
   * @returns True in case, current color scheme is recognized as dark. This
   * value is calculated according to theme bg color.
   */
  get isDark(): boolean {
    return !this.bgColor || isColorDark(this.bgColor);
  }

  get linkColor(): RGB | undefined {
    return this.get('linkColor');
  }

  get secondaryBgColor(): RGB | undefined {
    return this.get('secondaryBgColor');
  }

  /**
   * @since v6.10
   */
  get sectionBgColor(): RGB | undefined {
    return this.get('sectionBgColor');
  }

  /**
   * @since v6.10
   */
  get sectionHeaderTextColor(): RGB | undefined {
    return this.get('sectionHeaderTextColor');
  }

  /**
   * Starts listening to theme changes and applies them.
   * @returns Function to stop listening.
   */
  listen(): CleanupFn {
    return on('theme_changed', (event) => {
      this.set(parseThemeParams(event.theme_params));
    });
  }

  /**
   * @since v6.10
   */
  get subtitleTextColor(): RGB | undefined {
    return this.get('subtitleTextColor');
  }

  get textColor(): RGB | undefined {
    return this.get('textColor');
  }
}
