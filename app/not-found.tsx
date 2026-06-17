import Link from "next/link";
import { ArrowRight, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-margin-mobile md:px-section-padding text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 blur-3xl opacity-20 bg-primary-fixed rounded-full" />
        <FileQuestion className="w-24 h-24 text-primary-fixed relative z-10 mx-auto" />
      </div>
      
      <h1 className="font-headline-lg text-headline-lg md:text-display-sm font-bold text-on-surface mb-4">
        404 - Page Not Found
      </h1>
      
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-8">
        Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
      </p>
      
      <Link 
        href="/"
        className="inline-flex items-center justify-center gap-2 bg-primary-fixed text-on-primary-fixed px-6 py-3 rounded-full font-label-lg font-semibold hover:bg-primary-fixed-dim transition-colors group"
      >
        Back to Home
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
