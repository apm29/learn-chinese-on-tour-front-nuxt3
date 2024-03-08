import en from './locales/en.json'
import zh from './locales/zh.json'
import fr from './locales/fr.json'
import es from './locales/es.json'

export default defineI18nConfig(() => ({
    legacy: false,  // 是否兼容之前
    fallbackLocale: 'en',  // 区配不到的语言就用en
    messages: {
        en: en,
        zh: zh,
        fr: fr,
        es: es,
    }
}))
