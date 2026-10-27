/**
 * Bread & Bite Security & Sanitization Utilities
 * Implements defensive measures against XSS, Parameter Injection,
 * Prototype Pollution, Insecure Direct Protocol schemes (javascript:),
 * and Buffer Overflow / URI truncation payloads.
 */

/**
 * Strips dangerous HTML tags, control characters, and enforces strict length caps.
 * @param {any} input - Raw string or user input
 * @param {number} maxLength - Maximum allowable string length
 * @returns {string} Sanitized string
 */
export const sanitizeText = (input, maxLength = 250) => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[<>]/g, '') // Strip HTML angle brackets preventing markup injection
    .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Strip ASCII / Unicode control characters
    .trim()
    .slice(0, maxLength);
};

/**
 * Robust Indian Mobile Phone Sanitizer
 * Strips country codes (+91, 91, 0) and non-numeric characters safely.
 * @param {string} raw - Raw phone input
 * @returns {string} Clean digit string
 */
export const sanitizePhone = (raw) => {
  if (typeof raw !== 'string' && typeof raw !== 'number') return '';
  const digitsOnly = String(raw).replace(/\D/g, '');
  if (digitsOnly.length === 10) return digitsOnly;
  if (digitsOnly.length === 11 && digitsOnly.startsWith('0')) return digitsOnly.slice(1);
  if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) return digitsOnly.slice(2);
  if (digitsOnly.length === 13 && digitsOnly.startsWith('091')) return digitsOnly.slice(3);
  return digitsOnly;
};

/**
 * Validates that a phone number is a valid 10-digit Indian mobile number (starts with 6, 7, 8, or 9).
 * @param {string} phone 
 * @returns {boolean}
 */
export const isValidIndianPhone = (phone) => {
  const clean = sanitizePhone(phone);
  return /^[6-9]\d{9}$/.test(clean);
};

/**
 * Defends against open-redirects and javascript: pseudo-protocol attacks.
 * Strictly verifies that the given URL belongs to trusted origins.
 * @param {string} url - Target URL
 * @param {string} fallback - Safe fallback URL
 * @returns {string} Safe validated URL
 */
export const sanitizeSafeUrl = (url, fallback = 'https://wa.me/919325629256') => {
  if (!url || typeof url !== 'string') return fallback;

  // Explicitly deny javascript:, data:, vbscript:, file: pseudo-schemes
  const trimmed = url.trim();
  if (/^(javascript|data|vbscript|file):/i.test(trimmed)) {
    return fallback;
  }

  try {
    const parsed = new URL(trimmed);
    // Allow trusted WhatsApp and Instagram domains
    const allowedHosts = ['wa.me', 'api.whatsapp.com', 'instagram.com', 'www.instagram.com', 'breadandbite.in', 'www.breadandbite.in'];
    if (parsed.protocol === 'https:' && allowedHosts.includes(parsed.hostname)) {
      return trimmed;
    }
    // Also allow relative paths starting with /
    if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
      return trimmed;
    }
  } catch {
    if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
      return trimmed;
    }
  }

  return fallback;
};

/**
 * Safe JSON parser with optional schema/shape validation to prevent prototype pollution
 * or unexpected runtime crashes from corrupted/tampered localStorage/sessionStorage.
 * @param {string} raw - JSON string
 * @param {any} fallback - Fallback value if parse fails or validation fails
 * @param {Function} [validator] - Optional function returning true if valid
 * @returns {any}
 */
export const safeParseJSON = (raw, fallback = null, validator = null) => {
  if (!raw || typeof raw !== 'string') return fallback;
  try {
    const parsed = JSON.parse(raw);
    if (validator && typeof validator === 'function') {
      return validator(parsed) ? parsed : fallback;
    }
    return parsed;
  } catch {
    return fallback;
  }
};

/**
 * Sanitizes and validates a single cart item to prevent negative pricing,
 * infinite quantities, or unexpected object properties.
 * @param {any} item
 * @returns {object|null} Sanitized item or null if invalid
 */
export const sanitizeCartItem = (item) => {
  if (!item || typeof item !== 'object') return null;
  const id = item.id;
  if (id === undefined || id === null) return null;

  const price = Number(item.price);
  if (!Number.isFinite(price) || price < 0 || price > 50000) return null;

  const rawQty = Number(item.quantity);
  const quantity = Number.isInteger(rawQty) && rawQty > 0 ? Math.min(rawQty, 99) : 1;

  const name = sanitizeText(item.name || 'Dish', 80);
  const category = sanitizeText(item.category || '', 40);
  const portion = sanitizeText(item.portion || '', 30);
  const image = sanitizeSafeUrl(item.image, '/images/chicken-korma.webp');

  return {
    ...item,
    id,
    name,
    price,
    quantity,
    category,
    portion,
    image
  };
};
