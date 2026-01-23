// Profile information
export const PROFILE = {
  username: 'CyberCata',
  image:`${import.meta.env.BASE_URL}Cata_Pic.JPG`,
};

// Original social media links (for icons below username)
export const SOCIAL_LINKS = [
  { name: 'TikTok', url: 'https://www.tiktok.com/@catacisneros' },
  { name: 'YouTube', url: 'https://www.youtube.com/@cybercata' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/catalinacisneros/' },
  { name: 'GitHub', url: 'https://github.com/catacisneros' },
  { name: 'Instagram', url: 'https://www.instagram.com/cyber.cata/' },
  { name: 'Website', url: 'https://catacisneros.github.io' },
];

// Original affiliate URLs
export const SPOKEO_AFFILIATE_URL = "https://www.spokeo.com/people-search?g=name_landing_1_A3498442389";
export const VPN_AFFILIATE_URL = "https://go.nordvpn.net/aff_c?offer_id=612&aff_id=138174&url_id=14830";
export const PASSWORD_MANAGER_AFFILIATE_URL = "https://go.nordpass.io/aff_c?offer_id=488&aff_id=138174&url_id=9356";

// Footer text (edítalo libremente)
export const FOOTER_TEXT = "Este sitio lo programe yo (cata) en mi tiempo libre y es con fines educativos ☺ Algunos enlaces pueden ser de afiliado, sin costo adicional para ti. Úsalo de forma legal y responsable";

// Affiliate links for buttons
export const AFFILIATE_LINKS = [
  {
    platform: 'Spokeo',
    icon: 'FaSearch',
    title: 'Revisa tu huella digital',
    subtitle: 'Descubre qué información tuya es pública',
    url: SPOKEO_AFFILIATE_URL,
  },
  {
    platform: 'NordVPN',
    icon: 'FaShieldAlt',
    title: 'Protege tu privacidad',
    subtitle: 'Cifra tu conexión y evita rastreos en línea con una VPN',
    url: VPN_AFFILIATE_URL,
  },
  {
    platform: 'NordPass',
    icon: 'FaLock',
    title: 'Asegura tus accesos',
    subtitle: 'Guarda y genera contraseñas seguras',
    url: PASSWORD_MANAGER_AFFILIATE_URL,
  },
  {
    platform: 'TikTok Osint',
    icon: 'FaTiktok',
    title: 'Aprende más sobre OSINT',
    subtitle: 'Sígueme en TikTok donde subo videos sobre ciberseguridad',
    url: 'https://www.tiktok.com/@catacisneros/playlist/herramientas%20OSINT%20%F0%9F%94%90-7591422039857154847',
  },
];

