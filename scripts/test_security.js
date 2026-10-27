import {
  sanitizeText,
  sanitizePhone,
  isValidIndianPhone,
  sanitizeSafeUrl,
  safeParseJSON,
  sanitizeCartItem
} from '../src/utils/security.js';

console.log('--- RUNNING SECURITY ATTACK VECTOR DEFENSIVE SUITE ---');
let passed = 0;
let total = 0;

function assert(cond, name) {
  total++;
  if (cond) {
    console.log('✓ PASS:', name);
    passed++;
  } else {
    console.error('✗ FAIL:', name);
  }
}

// 1. XSS in customer inputs
const xssPayload = '<script>alert("XSS")</script>Hello World';
const cleanXss = sanitizeText(xssPayload, 60);
assert(!cleanXss.includes('<script>') && !cleanXss.includes('</script>') && cleanXss === 'scriptalert("XSS")/scriptHello World', 'XSS tags stripped from input');

// 2. Control characters & null bytes
const ctrlPayload = 'John\x00\x08Doe\x1F';
assert(sanitizeText(ctrlPayload, 20) === 'JohnDoe', 'Control characters and null bytes stripped');

// 3. Buffer overflow & URI truncation mitigation
const hugePayload = 'A'.repeat(10000);
assert(sanitizeText(hugePayload, 50).length === 50, 'Enforces max length truncate');

// 4. Open Redirect & dangerous pseudo-protocols
assert(sanitizeSafeUrl('javascript:alert(document.cookie)') === 'https://wa.me/919325629256', 'Blocks javascript: protocol execution');
assert(sanitizeSafeUrl('data:text/html;base64,PHNjcmlwdD4=') === 'https://wa.me/919325629256', 'Blocks data: protocol injection');
assert(sanitizeSafeUrl('https://evil-phishing-site.com') === 'https://wa.me/919325629256', 'Blocks open redirect to external evil host');
assert(sanitizeSafeUrl('https://wa.me/919325629256?text=test').startsWith('https://wa.me/919325629256'), 'Allows legitimate WhatsApp hotline URL');

// 5. Phone Validation & Sanitization
assert(sanitizePhone('+91 93256 29256') === '9325629256', 'Sanitizes +91 formatted phone');
assert(sanitizePhone('09325629256') === '9325629256', 'Sanitizes leading 0 phone');
assert(isValidIndianPhone('9325629256') === true, 'Accepts valid Indian mobile starting with 9');
assert(isValidIndianPhone('1234567890') === false, 'Rejects invalid mobile starting with 1');
assert(isValidIndianPhone('abcdefghij') === false, 'Rejects alphabetic phone');
assert(isValidIndianPhone('932562925') === false, 'Rejects 9-digit short phone');

// 6. LocalStorage Tampering / Prototype Pollution Resistance
const malformedStorage = '{"__proto__": {"polluted": true}}';
const parsedArray = safeParseJSON(malformedStorage, [], Array.isArray);
assert(Array.isArray(parsedArray) && parsedArray.length === 0, 'SafeParseJSON rejects non-array when validator requires array');

// 7. Cart Item Validation (Negative pricing / Infinity / NaN attack)
assert(sanitizeCartItem({ id: 1, name: 'Keema', price: -199, quantity: 2 }) === null, 'Rejects negative pricing in cart item');
assert(sanitizeCartItem({ id: 1, name: 'Keema', price: 'invalid', quantity: 2 }) === null, 'Rejects NaN pricing in cart item');
assert(sanitizeCartItem({ id: 1, name: 'Keema', price: Infinity, quantity: 2 }) === null, 'Rejects Infinity pricing in cart item');
const validItem = sanitizeCartItem({ id: 1, name: '<script>Keema</script>', price: 199, quantity: 1000 });
assert(validItem.name === 'scriptKeema/script' && validItem.quantity === 99, 'Sanitizes item name and clamps excessive quantity to 99');

console.log(`\n========================================`);
console.log(`SECURITY TEST SUMMARY: ${passed}/${total} test suites passed.`);
console.log(`========================================`);
if (passed !== total) process.exit(1);
