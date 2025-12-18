// sections/FooterSection/index.tsx

import { SOCIAL_LINKS } from "@/constants/social";

export default function FooterSection() {
  return (
    <footer className="w-full pt-20 md:pt-10 pb-40 bg-black text-white flex flex-col items-center gap-6">
      {/* CTA */}
      <h2 className="text-lg text-center font-light">Let's Connect!</h2>

      {/* Social Links */}
      <div className="flex gap-6 text-3xl">
        {SOCIAL_LINKS.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.hoverColor} transition`}
              aria-label={social.label}
            >
              <Icon />
            </a>
          );
        })}
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">
        Design & built by Sena Ramadhan.
      </p>
    </footer>
  );
}