import { describe, it, expect } from 'vitest';
import { formatTaka, toBanglaDigits } from '../../utils/currency.ts';

describe('Currency and Digit Utilities', () => {
  it('converts western digits to Bengali numerals correctly', () => {
    expect(toBanglaDigits('0123456789')).toBe('০১২৩৪৫৬৭৮৯');
    expect(toBanglaDigits('Rent: 25000')).toBe('Rent: ২৫০০০');
  });

  it('formats BDT 25000 in Bangla mode as ৳২৫,০০০', () => {
    const formattedBn = formatTaka(25000, 'bn');
    expect(formattedBn).toBe('৳২৫,০০০');
  });

  it('formats BDT 25000 in English mode as ৳25,000', () => {
    const formattedEn = formatTaka(25000, 'en');
    expect(formattedEn).toBe('৳25,000');
  });

  it('handles zero and edge values gracefully', () => {
    expect(formatTaka(0, 'bn')).toBe('৳০');
    expect(formatTaka(0, 'en')).toBe('৳0');
    expect(formatTaka(NaN, 'bn')).toBe('৳০');
  });
});
