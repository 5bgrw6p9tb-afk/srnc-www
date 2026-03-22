import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
}

const defaultKeywords = 'eye tracking, eye-tracking, eyetracking, cognitive science, visual cognition, neuromarketing, attention research, perception studies, EEG research, biometric research, visual attention, gaze tracking, consumer research, UX research, shopper research, packaging research, advertising research, scientific research, research methodology, research laboratory, cognitive neuroscience, visual perception, attention measurement, fixation analysis, saccade analysis, heatmaps, AOI analysis, pupillometry';

export function SEOHead({
  title = 'SRNC - Eye Tracking Research | Cognitive Science | Neuromarketing Laboratory',
  description = 'SRNC specializes in eye tracking research, cognitive science, visual cognition, and neuromarketing studies. We provide scientific research services, EEG analysis, attention measurement, and research laboratory development.',
  keywords = defaultKeywords,
  canonicalPath = '/',
  ogImage = '/SRNC O copy.jpg'
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;

    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', `https://srnc.pl${canonicalPath}`, true);
    updateMetaTag('og:image', `https://srnc.pl${ogImage}`, true);

    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `https://srnc.pl${ogImage}`);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = `https://srnc.pl${canonicalPath}`;
    }
  }, [title, description, keywords, canonicalPath, ogImage]);

  return null;
}
