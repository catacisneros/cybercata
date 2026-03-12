// Profile information
export const PROFILE = {
  username: 'CyberCata',
  subtitle: 'Ciberseguridad, hacking y redes',
  socialProof: [
    '+70k aprendiendo ciberseguridad conmigo',
  ],
  socialCta: 'Encuéntrame aquí',
  image: `${import.meta.env.BASE_URL}Cata_Pic.JPG`,
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

// Link cards (icon + title + subtitle)
export const AFFILIATE_LINKS = [
  {
    platform: 'Spokeo',
    logo: `${import.meta.env.BASE_URL}touch-icon_512.6eb08158.png`,
    title: 'Revisa tu huella digital',
    subtitle: 'Descubre qué información tuya es pública',
    url: SPOKEO_AFFILIATE_URL,
  },
  {
    platform: 'NordVPN',
    logo: `${import.meta.env.BASE_URL}NordVPN_Logo_RGB_Secondary_White.png`,
    title: 'Consigue NordVPN',
    subtitle: 'Protege tu vida digital, evita las ciber amenazas',
    url: VPN_AFFILIATE_URL,
  },
  {
    logo: `${import.meta.env.BASE_URL}NordVPN_Logo_RGB_Secondary_White.png`,
    title: 'Asegura tus accesos',
    subtitle: 'Guarda y genera contraseñas seguras',
    url: PASSWORD_MANAGER_AFFILIATE_URL,
  },
  {
    platform: 'Cybersecurity Portfolio',
    icon: 'FaGlobe',
    title: 'My Portfolio',
    subtitle: 'My projects, experience, certifications, etc.',
    url: 'https://catacisneros.github.io',
  },
];

// Footer text (add as many lines as you want)
export const FOOTER_LINES = [
  'Algunos enlaces son afiliados',
  '  ',
  '© 2026 CyberCata',
  'Built by Cata',
];

