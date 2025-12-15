import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
              <span className="font-mono text-lg font-bold">HN</span>
            </div>
            <div>
              <span className="font-sketch text-2xl text-sketch-blue">HackNITR</span>
              <span className="font-mono text-lg ml-1">7.0</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground">
            Made with ❤️ by DSC NIT Rourkela
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            © 2024 HackNITR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
