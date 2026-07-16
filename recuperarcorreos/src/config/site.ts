// ────────────────────────────────────────────────────────────────
//  ÚNICO lugar que tienes que editar antes de publicar.
//  Cambia estos valores y todo el sitio (meta tags, JSON-LD,
//  botones de contacto, footer) se actualiza solo.
// ────────────────────────────────────────────────────────────────

export const site = {
  // Marca y dominio (placeholder exact-match; reemplaza por el tuyo)
  nombre: "Recuperar Correos",
  dominio: "recuperarcorreos.cl",
  url: "https://recuperarcorreos.cl",

  // Contacto
  email: "contacto@recuperarcorreos.cl",

  // WhatsApp: número en formato internacional SIN + ni espacios.
  // Chile: 569XXXXXXXX
  whatsapp: "56972901775",
  whatsappMensaje:
    "Hola, necesito recuperar correos. Les cuento mi caso:",

  // Web3Forms: pega aquí tu Access Key (https://web3forms.com)
  web3formsKey: "9c3f28e8-b3da-4828-95ea-29ff69f93b0b",

  // Cobertura
  ciudad: "Santiago",
  region: "Región Metropolitana",
  pais: "Chile",
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMensaje
)}`;
