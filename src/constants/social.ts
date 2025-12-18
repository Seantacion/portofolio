import { FaLinkedin, FaWhatsapp, FaInstagram, FaFigma } from "react-icons/fa6";
import type { SocialLink } from "@/types/social.types";

export const SOCIAL_LINKS: SocialLink[] = [
    {
        icon: FaLinkedin,
        url: 'https://www.linkedin.com/in/sena-ramadhan',
        hoverColor: 'hover:text-blue-400',
        label: 'LinkedIn'
    },
    {
        icon: FaWhatsapp,
        url: 'https://wa.me/6281321796318',
        hoverColor: 'hover:text-green-400',
        label: 'WhatsApp'
    },
    {
        icon: FaInstagram,
        url: 'https://www.instagram.com/nzsr_',
        hoverColor: 'hover:text-pink-400',
        label: 'Instagram'
    },
    {
        icon: FaFigma,
        url: 'https://www.figma.com/files/team/1346390575943254406/resources/community/@naze',
        hoverColor: 'hover:text-blue-400',
        label: 'Figma'
    }
];