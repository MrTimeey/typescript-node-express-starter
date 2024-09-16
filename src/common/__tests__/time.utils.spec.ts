import { describe, expect, it } from 'vitest';
import { currentTimestamp, formatDate } from '../time.utils';

describe('time.utils.ts', () => {
  it('current timestamp not empty', () => {
    const result = currentTimestamp('DD.MM.YYYY');
    expect(result).not.toBe('');
  });
  it('current timestamp use default format', () => {
    const regex = /^\d{4}-\d{2}-\d{2}_\d{2}-\d{2}$/;

    const result = currentTimestamp();

    expect(regex.test(result)).toBe(true);
  });
  it('format date', () => {
    const result = formatDate(new Date(2024, 7, 18), 'DD.MM.YYYY');
    expect(result).toBe('18.08.2024');
  });
});
