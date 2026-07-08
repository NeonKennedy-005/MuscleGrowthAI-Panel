import React from 'react';
import { useAppConfig } from '../contexts/AppConfigContext';

const CopyrightNotice = ({ variant = 'footer', className = '' }) => {
  const { config } = useAppConfig();
  const isSidebar = variant === 'sidebar';
  const textClass = isSidebar ? 'sidebar-copyright-text' : 'footer-text';
  const patentsClass = isSidebar ? 'sidebar-patents-link' : 'footer-patents-link';
  const combinedClass = className ? `${textClass} ${className}` : textClass;

  // Prefer the author/copyright line from config (app.footer_text). This keeps
  // the footer themed per-panel instead of hardcoding a single brand.
  const footerText = config?.app?.footer_text?.trim();

  // When a panel provides its own footer_text (author/copyright line), show only
  // that and skip the Neon.ai brand + patents link.
  if (footerText) {
    return <p className={combinedClass}>{footerText}</p>;
  }

  return (
    <p className={combinedClass}>
      {'\u00A9 '}
      {isSidebar ? (
        'Neon.ai'
      ) : (
        <a
          href="https://neon.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-neon-link"
        >
          <img src="/neon-logo.png" alt="" className="footer-neon-logo" />
          Neon.ai
        </a>
      )}
      . All rights reserved.
      {' '}
      <a
        href="https://www.neon.ai/contact"
        target="_blank"
        rel="noopener noreferrer"
        className={patentsClass}
      >
        Patents and licensing.
      </a>
    </p>
  );
};

export default CopyrightNotice;
