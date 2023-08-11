export type Language = 'pt' | 'en';

export const fallbackLng: Language = 'pt';

export const languages: Language[] = [fallbackLng, 'en'];

export const defaultNS = 'translation';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
