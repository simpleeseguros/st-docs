import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "es-ES",
  title: " ",
  description: "Documentación ST",
  head: [
    // Agrega el enlace al favicon
    [
      "link",
      { rel: "icon", href: "https://simplee.cl/favicon.ico", title: "Teams" },
    ],
  ],
  themeConfig: {
    logo: "https://teams-qa.simplee.cl/_nuxt/img/simplee.68895d0.png",
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },

    nav: [
      { text: "Inicio", link: "/" },
      { text: "Manual de Usuario(KAM's)", link: "/st/" },
    ],

    sidebar: [
      {
        text: "Manual de Usuario-ST",
        items: [
          { text: "Introducción", link: "/st/" },
          { text: "Registro e Iniciar Sesión", link: "/st/registrarse" },
          { text: "Solicitudes", link: "/st/solicitudes" },
          { text: "Leads", link: "/st/leads" },
          { text: "Clientes", link: "/st/clientes" },
          { text: "Postventa", link: "/st/postventa" },
          { text: "Cobranza", link: "/st/cobranza" },
          { text: "Cotizadores", link: "/st/cotizadores" },
          { text: "Configuración", link: "/st/configuracion" },
        ],
      },
      {
        text: "API Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/apidev/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "instagram", link: "https://www.instagram.com/simpleeseguros/" },
      { icon: "facebook", link: "https://www.facebook.com/simpleeseguros/" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/simplee-seguros/",
      },
    ],
  },
});
