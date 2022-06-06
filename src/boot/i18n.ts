import { boot } from 'quasar/wrappers';
import messages from 'src/i18n';
import { createI18n } from 'vue-i18n';

export default boot(({ app }) => {
  const i18n = createI18n({
    globalInjection: true,
    locale: 'pt-BR',
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
