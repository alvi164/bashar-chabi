import { describe, it, expect } from 'vitest';
import {
  isValidUserRole,
  isValidServiceCategory,
  isValidHttpsUrl,
  validateImageUrls,
  isValidServiceTransition,
  isValidVisitTransition,
  isValidPropertyTransition,
  validatePropertyInput,
} from '../../utils/validation.ts';
import { isFutureDate } from '../../utils/date.ts';

describe('Role and Domain Allowlist Validation', () => {
  it('permits valid normal user roles', () => {
    expect(isValidUserRole('tenant')).toBe(true);
    expect(isValidUserRole('landlord_or_agent')).toBe(true);
    expect(isValidUserRole('service_provider')).toBe(true);
  });

  it('strictly blocks admin from normal user self-selection', () => {
    expect(isValidUserRole('admin')).toBe(false);
    expect(isValidUserRole('super_admin')).toBe(false);
    expect(isValidUserRole('')).toBe(false);
  });

  it('validates launch service categories accurately', () => {
    expect(isValidServiceCategory('moving')).toBe(true);
    expect(isValidServiceCategory('cleaning')).toBe(true);
    expect(isValidServiceCategory('plumbing')).toBe(true);
    expect(isValidServiceCategory('electrical')).toBe(true);
    expect(isValidServiceCategory('ac_service')).toBe(true);
    expect(isValidServiceCategory('appliance_repair')).toBe(true);
    expect(isValidServiceCategory('luxury_spa')).toBe(false);
  });
});

describe('HTTPS URL Validation', () => {
  it('accepts valid https URLs only', () => {
    expect(isValidHttpsUrl('https://example.com/photo.jpg')).toBe(true);
    expect(isValidHttpsUrl('https://images.site.com/house.png')).toBe(true);
  });

  it('rejects unencrypted http or javascript scheme URLs', () => {
    expect(isValidHttpsUrl('http://insecure.com/photo.jpg')).toBe(false);
    expect(isValidHttpsUrl('javascript:alert(1)')).toBe(false);
    expect(isValidHttpsUrl('ftp://files.com/img.jpg')).toBe(false);
    expect(isValidHttpsUrl('invalid-url')).toBe(false);
  });

  it('enforces maximum 8 images limit', () => {
    const nineUrls = Array(9).fill('https://example.com/img.jpg');
    const result = validateImageUrls(nineUrls);
    expect(result.valid).toBe(false);
    expect(result.error).toContain('Maximum 8 images');
  });
});

describe('State Transition State Machines', () => {
  it('validates permitted service request state transitions', () => {
    expect(isValidServiceTransition('requested', 'reviewing')).toBe(true);
    expect(isValidServiceTransition('reviewing', 'assigned')).toBe(true);
    expect(isValidServiceTransition('assigned', 'in_progress')).toBe(true);
    expect(isValidServiceTransition('in_progress', 'completed')).toBe(true);
    expect(isValidServiceTransition('requested', 'cancelled')).toBe(true);
    expect(isValidServiceTransition('assigned', 'disputed')).toBe(true);

    // Illegal transitions
    expect(isValidServiceTransition('requested', 'completed')).toBe(false);
    expect(isValidServiceTransition('completed', 'requested')).toBe(false);
    expect(isValidServiceTransition('cancelled', 'in_progress')).toBe(false);
  });

  it('validates visit request state transitions', () => {
    expect(isValidVisitTransition('requested', 'confirmed')).toBe(true);
    expect(isValidVisitTransition('requested', 'declined')).toBe(true);
    expect(isValidVisitTransition('requested', 'cancelled')).toBe(true);
    expect(isValidVisitTransition('confirmed', 'completed')).toBe(true);
    expect(isValidVisitTransition('confirmed', 'cancelled')).toBe(true);

    // Illegal transitions
    expect(isValidVisitTransition('declined', 'confirmed')).toBe(false);
    expect(isValidVisitTransition('completed', 'requested')).toBe(false);
  });

  it('validates property moderation state transitions', () => {
    expect(isValidPropertyTransition('draft', 'pending_review')).toBe(true);
    expect(isValidPropertyTransition('pending_review', 'published')).toBe(true);
    expect(isValidPropertyTransition('pending_review', 'rejected')).toBe(true);
    expect(isValidPropertyTransition('published', 'rented')).toBe(true);

    // Illegal transitions: draft directly to published without moderation
    expect(isValidPropertyTransition('draft', 'published')).toBe(false);
    expect(isValidPropertyTransition('rejected', 'published')).toBe(false);
  });
});

describe('Property Form Input Validation', () => {
  it('flags missing Bengali title and non-positive rent', () => {
    const result = validatePropertyInput({
      titleBn: '',
      monthlyRent: -100,
      bedrooms: -1,
      sizeSqFt: 0,
      descriptionBn: 'Short',
    });

    expect(result.isValid).toBe(false);
    expect(result.errors.titleBn).toBeDefined();
    expect(result.errors.monthlyRent).toBeDefined();
    expect(result.errors.bedrooms).toBeDefined();
    expect(result.errors.sizeSqFt).toBeDefined();
    expect(result.errors.descriptionBn).toBeDefined();
  });

  it('passes for complete valid property inputs', () => {
    const result = validatePropertyInput({
      titleBn: 'মিরপুরে মনোরম ৩ বেডের ফ্ল্যাট',
      monthlyRent: 25000,
      deposit: 50000,
      serviceCharge: 3000,
      area: 'Mirpur',
      bedrooms: 3,
      bathrooms: 2,
      sizeSqFt: 1250,
      descriptionBn: 'সম্পূর্ণ আলো-বাতাসপূর্ণ চমৎকার আবাসিক পরিবেশের ফ্ল্যাট।',
      imageUrls: ['https://example.com/flat1.jpg'],
    });

    expect(result.isValid).toBe(true);
    expect(Object.keys(result.errors).length).toBe(0);
  });
});

describe('Date Validation', () => {
  it('correctly identifies future vs past dates', () => {
    const future = new Date(Date.now() + 86400000 * 5).toISOString();
    const past = '2020-01-01T00:00:00.000Z';
    expect(isFutureDate(future)).toBe(true);
    expect(isFutureDate(past)).toBe(false);
  });
});
