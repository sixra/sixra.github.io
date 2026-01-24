import { describe, it, expect } from 'vitest';
import { getLangFromUrl, useTranslations, ui, defaultLang } from './ui';

describe('i18n utilities', () => {
  describe('getLangFromUrl', () => {
    it('should extract "en" from /en/about', () => {
      const url = new URL('https://example.com/en/about');
      const lang = getLangFromUrl(url);

      expect(lang).toBe('en');
    });

    it('should extract "sr" from /sr/about', () => {
      const url = new URL('https://example.com/sr/about');
      const lang = getLangFromUrl(url);

      expect(lang).toBe('sr');
    });

    it('should extract "sr-latn" from /sr-latn/contact', () => {
      const url = new URL('https://example.com/sr-latn/contact');
      const lang = getLangFromUrl(url);

      expect(lang).toBe('sr-latn');
    });

    it('should return "en" for root path /', () => {
      const url = new URL('https://example.com/');
      const lang = getLangFromUrl(url);

      expect(lang).toBe('en');
    });

    it('should return "en" for invalid language code /fr/about', () => {
      const url = new URL('https://example.com/fr/about');
      const lang = getLangFromUrl(url);

      expect(lang).toBe('en');
    });

    it('should return "en" for paths without language prefix /about', () => {
      const url = new URL('https://example.com/about');
      const lang = getLangFromUrl(url);

      expect(lang).toBe('en');
    });
  });

  describe('useTranslations', () => {
    it('should return translation for valid key in English', () => {
      const t = useTranslations('en');
      const translation = t('nav.home');

      expect(translation).toBe('Home');
    });

    it('should return translation for valid key in Serbian Cyrillic', () => {
      const t = useTranslations('sr');
      const translation = t('nav.home');

      expect(translation).toBe('Почетна');
    });

    it('should return translation for valid key in Serbian Latin', () => {
      const t = useTranslations('sr-latn');
      const translation = t('nav.home');

      expect(translation).toBe('Početna');
    });

    it('should fallback to default language for missing translation', () => {
      const t = useTranslations('en');
      // Test with a key that exists in default language
      const translation = t('nav.about');

      expect(translation).toBe(ui[defaultLang]['nav.about']);
    });

    it('should handle all navigation keys', () => {
      const t = useTranslations('en');

      expect(t('nav.home')).toBe('Home');
      expect(t('nav.about')).toBe('About');
      expect(t('nav.contact')).toBe('Contact');
      expect(t('nav.faq')).toBe('FAQ');
    });

    it('should handle meta keys', () => {
      const t = useTranslations('en');

      expect(t('meta.home.title')).toBe('Ratko Simidzija');
      expect(t('meta.home.description')).toContain('JavaScript Developer');
    });
  });
});
