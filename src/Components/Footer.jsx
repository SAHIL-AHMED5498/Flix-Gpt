import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-white/10 px-4 py-10 text-[#808080] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-5 text-sm">Questions? Contact support.</p>
        <div className="grid grid-cols-2 gap-y-3 text-xs sm:grid-cols-4 sm:text-sm">
          <a href="/" className="hover:underline">FAQ</a>
          <a href="/" className="hover:underline">Help Center</a>
          <a href="/" className="hover:underline">Terms of Use</a>
          <a href="/" className="hover:underline">Privacy</a>
          <a href="/" className="hover:underline">Cookie Preferences</a>
          <a href="/" className="hover:underline">Corporate Information</a>
          <a href="/" className="hover:underline">Contact Us</a>
          <a href="/" className="hover:underline">Legal Notices</a>
        </div>
        <p className="mt-6 text-xs text-[#666]">Flix GPT</p>
      </div>
    </footer>
  );
};

export default Footer;
