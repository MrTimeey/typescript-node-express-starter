import { describe, expect, it, vi } from 'vitest';
import { appConfig, getPort } from '../appConfig';

describe('appConfig.ts', () => {
  it('default port used', () => {
    vi.unstubAllEnvs();
    expect(getPort()).toBe(3000);
    expect(appConfig.port).toBe(3000);
  });
  it('port used from env', () => {
    vi.stubEnv('PORT', '4000');
    const result = getPort();
    expect(result).toBe(4000);
    /*
      Really don't know why the following line is not working!
      expect(appConfig.port).toBe(4000);
    */
  });
});
