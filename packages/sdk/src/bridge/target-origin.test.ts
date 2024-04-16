import { setTargetOrigin, targetOrigin } from '@/bridge/target-origin.js';
import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => {
  vi.restoreAllMocks();
});

describe('setTargetOrigin', () => {
  it('should return set value via targetOrigin() function', () => {
    setTargetOrigin('my test');
    expect(targetOrigin()).toEqual('my test');
  });
});
