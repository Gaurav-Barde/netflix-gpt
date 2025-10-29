type TranslationSet = {
  search: string;
  gptInputPlaceholder: string;
};

type LanguageMap = {
  en: TranslationSet;
  hi: TranslationSet;
  es: TranslationSet;
};

export type LanguageCode = keyof typeof lang;

type SupportedLanguagesType = {
  identifier: LanguageCode;
  name: string;
};

export const SUPPORTED_LANGUAGES: SupportedLanguagesType[] = [
  { identifier: "en", name: "English" },
  { identifier: "hi", name: "Hindi" },
  { identifier: "es", name: "Spanish" },
];

const lang: LanguageMap = {
  en: {
    search: "Search",
    gptInputPlaceholder: "What would you like to watch today?",
  },
  hi: {
    search: "खोज",
    gptInputPlaceholder: "आज आप क्या देखना चाहेंगे?",
  },
  es: {
    search: "Buscar",
    gptInputPlaceholder: "¿Qué te gustaría ver hoy?",
  },
};

export default lang;
