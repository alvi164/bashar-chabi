/**
 * Bashar Chabi - Privacy-Conscious Analytics Abstraction
 * Section 27 Compliance:
 * Strictly limited to allowlisted event names and non-PII properties.
 * Disabled during automated test environments.
 */

export type AllowedAnalyticsEvent =
  | 'property_search'
  | 'property_view'
  | 'property_favourite'
  | 'visit_request'
  | 'listing_create'
  | 'listing_submit'
  | 'service_request'
  | 'language_change';

export interface SafeAnalyticsPayload {
  area?: string;
  category?: string;
  propertyType?: string;
  furnishing?: string;
  language?: string;
  itemCount?: number;
}

export const analytics = {
  track(event: AllowedAnalyticsEvent, payload?: SafeAnalyticsPayload) {
    // Disable during tests
    if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'test') {
      return;
    }

    // In browser, sanitize payload to ensure no PII is ever recorded
    const sanitizedPayload: SafeAnalyticsPayload = {};
    if (payload?.area) sanitizedPayload.area = payload.area;
    if (payload?.category) sanitizedPayload.category = payload.category;
    if (payload?.propertyType) sanitizedPayload.propertyType = payload.propertyType;
    if (payload?.furnishing) sanitizedPayload.furnishing = payload.furnishing;
    if (payload?.language) sanitizedPayload.language = payload.language;
    if (typeof payload?.itemCount === 'number') sanitizedPayload.itemCount = payload.itemCount;

    // Log in development or pipe to privacy-compliant analytics service in future
    if (import.meta.env.DEV) {
      // Safe development debug
      // eslint-disable-next-line no-console
      console.debug(`[Analytics: ${event}]`, sanitizedPayload);
    }
  },
};
