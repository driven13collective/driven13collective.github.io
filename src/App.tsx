import React, { useEffect, useState } from 'react';
import { HomePage } from './pages/HomePage';
import { ReturnsPage } from './pages/ReturnsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { ShippingPage } from './pages/ShippingPage';
import { ContactPage } from './pages/ContactPage';
import { LegendTierPage } from './pages/LegendTierPage';
import { ChampionTierPage } from './pages/ChampionTierPage';
import { ContenderTierPage } from './pages/ContenderTierPage';
import { ProspectTierPage } from './pages/ProspectTierPage';
import { ManifestoPage } from './pages/ManifestoPage';
import { LookbookPage } from './pages/LookbookPage';
import { AboutPage } from './pages/AboutPage';
import { StorePage } from './pages/StorePage';

// Simple path-based router
const useRouter = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    // Handle navigation clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.href.startsWith(window.location.origin)) {
        const url = new URL(anchor.href);
        // Only handle internal non-hash links without target
        if (!url.hash && !anchor.target) {
          e.preventDefault();
          window.history.pushState({}, '', url.pathname);
          setPath(url.pathname);
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return path;
};

const App: React.FC = () => {
  const path = useRouter();

  const renderPage = () => {
    switch (path) {
      case '/returns':
        return <ReturnsPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      case '/shipping':
        return <ShippingPage />;
      case '/contact':
        return <ContactPage />;
      case '/tier/legend':
        return <LegendTierPage />;
      case '/tier/champion':
        return <ChampionTierPage />;
      case '/tier/contender':
        return <ContenderTierPage />;
      case '/tier/prospect':
        return <ProspectTierPage />;
      case '/manifesto':
        return <ManifestoPage />;
      case '/lookbook':
        return <LookbookPage />;
      case '/about':
        return <AboutPage />;
      case '/store':
        return <StorePage />;
      default:
        return <HomePage />;
    }
  };

  return renderPage();
};

export default App;
