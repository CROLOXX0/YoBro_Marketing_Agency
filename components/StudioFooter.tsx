import Link from "next/link";

export default function StudioFooter() {
  return (
    <footer className="w-full py-16 bg-surface-container-lowest dark:bg-surface-dim border-t border-outline-variant/10 flat no shadows">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="md:col-span-1 mb-8 md:mb-0">
          <Link
            className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface mb-4 block hover:translate-x-1 transition-transform duration-300"
            href="#"
          >
            YoBro Studio
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">Built for the modern web.</p>
          <p className="font-label-sm text-label-sm text-on-surface-variant opacity-60">
            © {new Date().getFullYear()} YoBro Studio. All rights reserved.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm font-semibold text-on-surface tracking-wider uppercase mb-2">Navigation</h4>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors w-max hover:translate-x-1 transition-transform duration-300" href="#services">Services</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors w-max hover:translate-x-1 transition-transform duration-300" href="#portfolio">Portfolio</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors w-max hover:translate-x-1 transition-transform duration-300" href="#process">Process</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors w-max hover:translate-x-1 transition-transform duration-300" href="#faq">FAQ</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm font-semibold text-on-surface tracking-wider uppercase mb-2">Legal</h4>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors w-max hover:translate-x-1 transition-transform duration-300" href="/privacy">Privacy Policy</Link>
          <Link className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors w-max hover:translate-x-1 transition-transform duration-300" href="/terms">Terms of Service</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-label-sm text-label-sm font-semibold text-on-surface tracking-wider uppercase mb-2">Social</h4>
          <div className="flex gap-4">
            <a className="text-on-surface-variant hover:text-primary transition-colors hover:-translate-y-1 duration-300" href="#" aria-label="Website">
              <span className="material-symbols-outlined" data-icon="language">language</span>
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors hover:-translate-y-1 duration-300" href="#" aria-label="Share">
              <span className="material-symbols-outlined" data-icon="share">share</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
