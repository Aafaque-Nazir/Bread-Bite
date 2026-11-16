/**
 * Bread & Bite Official Ordering & Social Links
 * Centralized configuration for Swiggy, Zomato, WhatsApp, and social channels.
 * 
 * Note: Swiggy and Zomato use masked outbound endpoints (/out/swiggy, /out/zomato)
 * backed by 302 redirects in _redirects and disallowed in robots.txt.
 * This prevents search engine crawler bot-blocks from hurting technical SEO scores.
 */

export const ORDER_LINKS = {
  swiggy: '/out/swiggy',
  zomato: '/out/zomato',
  rawSwiggy: 'https://www.swiggy.com/direct/brand/675246?source=swiggy-direct&subSource=generic',
  rawZomato: 'https://link.zomato.com/xqzv/rshare?id=10960061830563279',
  whatsappPhone: '+91 93256 29256',
  whatsappUrl: 'https://wa.me/919325629256',
  instagram: 'https://www.instagram.com/bread_and_bite/',
  email: 'breadandbite777@gmail.com',
  phone: '+919325629256'
};
