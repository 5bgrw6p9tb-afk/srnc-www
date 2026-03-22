export interface Translation {
  nav: {
    about: string;
    services: string;
    innovations: string;
    knowledgeModels: string;
    cooperation: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
  };
  about: {
    title: string;
    subtitle: string;
    item1: {
      title: string;
      description: string;
    };
    item2: {
      title: string;
      description: string;
    };
    item3: {
      title: string;
      description: string;
    };
    item4: {
      title: string;
      description: string;
    };
    item5: {
      title: string;
      description: string;
    };
    item6: {
      title: string;
      description: string;
    };
    item7: {
      title: string;
      description: string;
    };
    item8: {
      title: string;
      description: string;
    };
    item9: {
      title: string;
      description: string;
    };
  };
  aiSection: {
    col1: {
      subtitle: string;
      p1: string;
      p2: string;
    };
    col2: {
      subtitle: string;
      p1: string;
      p2: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    eyetracking: {
      title: string;
      description: string;
      features: string[];
    };
    digitalForce: {
      title: string;
      description: string;
      features: string[];
    };
    mindcloud: {
      title: string;
      description: string;
      features: string[];
    };
  };
  cooperation: {
    title: string;
    subtitle: string;
    columns: {
      technology: {
        title: string;
        description: string;
      };
      commercialization: {
        title: string;
        description: string;
      };
    };
    stats: {
      partnerships: string;
      universities: string;
      projects: string;
      publications: string;
    };
    cta: string;
  };
  knowledgeModels: {
    title: string;
    subtitle: string;
    item1: {
      title: string;
      description: string;
    };
    item2: {
      title: string;
      description: string;
    };
    item3: {
      title: string;
      description: string;
    };
    item4: {
      title: string;
      description: string;
    };
    item5: {
      title: string;
      description: string;
    };
    item6: {
      title: string;
      description: string;
    };
    item7: {
      title: string;
      description: string;
    };
    item8: {
      title: string;
      description: string;
    };
    item9: {
      title: string;
      description: string;
    };
  };
  partners: {
    title: string;
    business: string;
    academic: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    form: {
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    rights: string;
  };
  partners: {
    title: string;
    business: string;
    academic: string;
  };
  ourStory: {
    title: string;
    subtitle: string;
    milestone1: string;
    milestone2: string;
    aiHighlight: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      innovations: "Innovations",
      knowledgeModels: "Research Labs",
      cooperation: "Cooperation",
      contact: "Contact"
    },
    hero: {
      title: "We Build Multidisciplinary Research Laboratories",
      subtitle: "We design integrated spaces where neuroscience, psychology, physiology, and cognitive science converge to explore visual perception, attention, and human decision-making processes.",
      cta1: "Discover our solutions",
      cta2: "Contact us"
    },
    about: {
      title: "Where Disciplines Meet",
      subtitle: "We create research environments that bridge neuroscience, cognitive psychology, physiology, and behavioral science—focusing on visual cognition, attention mechanisms, and multisensory integration.",
      item1: {
        title: "Visual Cognition Research",
        description: "Eye-tracking and gaze analysis to understand visual attention, perception patterns, and information processing"
      },
      item2: {
        title: "Multisensory Integration Labs",
        description: "Facilities combining visual, auditory, and haptic stimuli to study cross-modal perception"
      },
      item3: {
        title: "Integrated Research Infrastructure",
        description: "Our own multidisciplinary laboratories equipped for neurocognitive, psychophysiological, and behavioral experiments"
      },
      item4: {
        title: "Cross-Disciplinary Collaboration",
        description: "Bringing together neuroscientists, psychologists, physiologists, and UX researchers in shared research spaces"
      },
      item5: {
        title: "Cognitive Process Modeling",
        description: "Understanding decision-making, memory formation, and attention allocation through empirical research"
      },
      item6: {
        title: "Neuromarketing Science",
        description: "Combining eye-tracking, biometric sensors, and behavioral methods to decode consumer cognition"
      },
      item7: {
        title: "Attention & Perception Studies",
        description: "Investigating visual saliency, attentional capture, and the neural basis of conscious awareness"
      },
      item8: {
        title: "Human Factors & Ergonomics",
        description: "Analyzing how humans interact with interfaces, environments, and complex systems"
      },
      item9: {
        title: "Remote Research Platforms",
        description: "Digital tools enabling distributed cognitive and behavioral experiments across locations"
      }
    },
    aiSection: {
      col1: {
        subtitle: "Multidisciplinary Cognitive Science",
        p1: "The convergence of multiple scientific disciplines is opening unprecedented opportunities in understanding human perception and cognition. By combining neuroscience, psychology, physiology, and behavioral research, we can now decode complex patterns in visual processing, attention mechanisms, and decision-making that were previously fragmented across isolated fields.",
        p2: "Eye-tracking technology, combined with electrophysiological measurements and cognitive testing, reveals subtle correlations between gaze behavior, neural activity, and conscious awareness. This multidisciplinary synergy enables researchers to predict perceptual responses and understand attentional strategies with remarkable precision."
      },
      col2: {
        subtitle: "Visual Cognition as Research Focus",
        p1: "Visual perception is the primary gateway through which humans process environmental information, making it a cornerstone of cognitive research. Eye-tracking methodologies reveal not only where people look, but how they allocate attention, process visual hierarchies, and make split-second decisions based on visual cues.",
        p2: "Advanced measurement techniques allow researchers to map visual scan paths, identify attentional bottlenecks, and understand the temporal dynamics of visual information processing. This focus on visual cognition provides actionable insights for interface design, marketing communication, and human-machine interaction."
      },
      col3: {
        subtitle: "AI-Powered Analysis & Knowledge Models",
        p1: "We leverage artificial intelligence to analyze complex multidimensional data from eye-tracking, biometrics, and behavioral experiments. Machine learning models help us identify patterns invisible to traditional statistical methods, building comprehensive knowledge models of cognitive processes and consumer behavior.",
        p2: "Our AI tools automate data processing, accelerate hypothesis testing, and enable real-time experimental adjustments. By combining rigorous scientific methodology with advanced computational analysis, we transform raw research data into actionable insights and predictive models for business applications."
      }
    },
    services: {
      title: "Business Units",
      subtitle: "Three specialized units creating a complete research offer",
      eyetracking: {
        title: "Eyetracking Solutions",
        description: "We specialize in advanced neuromarketing research using eye-tracking technology. We provide precise data on consumer behavior and their reactions to various visual stimuli.",
        features: [
          "• Neuromarketing research",
          "• Consumer behavior analysis",
          "• Marketing materials testing",
          "• User interface optimization"
        ]
      },
      digitalForce: {
        title: "Digital Force",
        description: "We design and build modern laboratories and research systems. Our technological solutions ensure the highest quality and precision in conducting scientific research.",
        features: [
          "• Research laboratory design",
          "• Measurement and analytical systems",
          "• AI technology integration",
          "• Maintenance and technical support"
        ]
      },
      mindcloud: {
        title: "Mindcloud One",
        description: "We handle comprehensive marketing processes supported by artificial intelligence. We combine research data with advanced marketing strategies, creating effective campaigns based on scientific foundations.",
        features: [
          "• AI-based marketing strategies",
          "• Consumer data analysis",
          "• Personalized campaigns",
          "• Marketing process automation"
        ]
      }
    },
    knowledgeModels: {
      title: "Multidisciplinary Research Laboratories",
      subtitle: "Creating integrated research environments where neuroscience, psychology, physiology, and cognitive science converge to explore human perception and cognition",
      item1: {
        title: "Eye-Tracking & Gaze Analysis Labs",
        description: "State-of-the-art facilities equipped with remote and mobile eye-trackers for studying visual attention, reading patterns, interface usability, and consumer behavior in controlled and naturalistic settings."
      },
      item2: {
        title: "Psychophysiological Measurement",
        description: "Integrated biometric systems capturing heart rate, skin conductance, facial expressions, and pupil dilation to understand emotional and cognitive responses during visual processing tasks."
      },
      item3: {
        title: "Visual Perception Research Spaces",
        description: "Controlled laboratory environments designed for presenting precisely calibrated visual stimuli while recording eye movements, neural responses, and behavioral data."
      },
      item4: {
        title: "Collaborative Research Infrastructure",
        description: "Shared laboratory spaces facilitating collaboration between neuroscientists, psychologists, UX researchers, and marketing scientists working on visual cognition projects."
      },
      item5: {
        title: "Cognitive Testing Environments",
        description: "Specialized setups for investigating attention, memory, decision-making, and perceptual processes through behavioral experiments and cognitive assessments."
      },
      item6: {
        title: "Applied Neuromarketing Facilities",
        description: "Research labs combining eye-tracking, biometrics, and implicit association testing to decode consumer attention, preference formation, and purchasing decisions."
      },
      item7: {
        title: "Human Factors & Usability Labs",
        description: "Ergonomic testing environments analyzing how users interact with interfaces, products, and environments through gaze behavior and performance metrics."
      },
      item8: {
        title: "Experimental Design Consultation",
        description: "Expert support in designing rigorous multidisciplinary studies that integrate eye-tracking, psychophysiology, and behavioral methodologies for robust scientific findings."
      },
      item9: {
        title: "Mobile & Remote Research Platforms",
        description: "Portable eye-tracking systems and online experimental platforms enabling cognitive research in real-world contexts and distributed participant populations."
      }
    },
    cooperation: {
      title: "Academic Alliance",
      subtitle: "We build bridges between science and practical application of technology, cooperating with leading universities and research and development units in Poland and abroad.",
      columns: {
        technology: {
          title: "Technology & Methodologies for Science",
          description: "We provide cutting-edge technological solutions and research methodologies that enable scientific breakthroughs. Our advanced AI systems, automated research platforms, and precision measurement tools support researchers in conducting innovative studies with unprecedented accuracy and efficiency. We develop custom solutions tailored to specific research needs, integrating state-of-the-art technology with proven scientific methods."
        },
        commercialization: {
          title: "Commercialization & Networking",
          description: "We transform scientific discoveries into market-ready solutions through strategic partnerships and commercialization expertise. Our extensive network connects researchers with industry leaders, investors, and implementation partners. We facilitate technology transfer, provide business development support, and create pathways from laboratory findings to real-world applications."
        }
      },
      stats: {
        partnerships: "Research partnerships",
        universities: "Partner universities",
        projects: "Completed projects",
        publications: "Scientific publications"
      },
      cta: "Become our partner"
    },
    contact: {
      title: "Contact us",
      subtitle: "Start cooperation with the leader in Neurocognitive Research and AI",
      address: "Address",
      phone: "Phone",
      email: "Email",
      form: {
        name: "Full name",
        email: "Email address",
        company: "Company/University name",
        message: "Message",
        submit: "Send message"
      }
    },
    footer: {
      rights: "© 2024 SRNC. All rights reserved."
    },
    partners: {
      title: "Our Partners",
      business: "Business Partners",
      academic: "Academic Partners"
    },
    ourStory: {
      title: "Our Story",
      subtitle: "From eye-tracking pioneers to multidisciplinary research leaders",
      milestone1: "The breakthrough came in 2005 with creating Poland's first professional eye-tracking laboratory for Telekomunikacja Polska, which opened entirely new possibilities for visual cognition research. This experience transformed our approach to studying human perception and sparked systematic expansion into multidisciplinary neurocognitive science. Since then, we've evolved into a comprehensive research solutions provider, delivering everything from laboratory design and methodological consulting to full research implementation and professional training programs.",
      milestone2: "Eye-tracking systems delivered since 2006 to universities and companies across Poland, alongside over 400 multidisciplinary research studies conducted for diverse clients. We've tackled extraordinary projects in unconventional environments: correctional facilities, airline cockpits, with special forces operators, air traffic controllers, and analyzing forestry machinery ergonomics. These challenging, non-standard projects combining visual perception, cognitive psychology, and human factors research have become our trademark.",
      aiHighlight: "Today, we operate integrated multidisciplinary laboratories where neuroscience, psychology, physiology, and cognitive science converge. Our research spaces are designed for collaboration between disciplines, enabling comprehensive investigation of visual attention, perceptual processes, and decision-making mechanisms. We bridge fundamental cognitive research with applied questions in marketing, UX design, and human-machine interaction—creating actionable insights from rigorous scientific methodology."
    }
  },
  pl: {
    nav: {
      about: "O nas",
      services: "Usługi",
      innovations: "Innowacje",
      knowledgeModels: "Laboratoria badawcze",
      cooperation: "Współpraca",
      contact: "Kontakt"
    },
    hero: {
      title: "Budujemy multidyscyplinarne laboratoria badawcze",
      subtitle: "Projektujemy zintegrowane przestrzenie, w których neuronauka, psychologia, fizjologia i kognitywistyka łączą się, aby badać wzrokowe procesy percepcji, uwagi i podejmowania decyzji.",
      cta1: "Poznaj nasze rozwiązania",
      cta2: "Skontaktuj się z nami"
    },
    about: {
      title: "Tam, gdzie dyscypliny się spotykają",
      subtitle: "Tworzymy środowiska badawcze łączące neuronaukę, psychologię kognitywną, fizjologię i nauki behawioralne—koncentrując się na poznaniu wzrokowym, mechanizmach uwagi i integracji wielozmysłowej.",
      item1: {
        title: "Badania poznania wzrokowego",
        description: "Eye-tracking i analiza spojrzenia do zrozumienia uwagi wzrokowej, wzorców percepcji i przetwarzania informacji"
      },
      item2: {
        title: "Laboratoria integracji wielozmysłowej",
        description: "Obiekty łączące bodźce wzrokowe, słuchowe i dotykowe do badania percepcji międzymodalnej"
      },
      item3: {
        title: "Zintegrowana infrastruktura badawcza",
        description: "Własne laboratoria multidyscyplinarne wyposażone do eksperymentów neurokognitywnych, psychofizjologicznych i behawioralnych"
      },
      item4: {
        title: "Współpraca międzydyscyplinarna",
        description: "Łączenie neuronaukowców, psychologów, fizjologów i badaczy UX we wspólnych przestrzeniach badawczych"
      },
      item5: {
        title: "Modelowanie procesów poznawczych",
        description: "Rozumienie podejmowania decyzji, tworzenia pamięci i alokacji uwagi poprzez badania empiryczne"
      },
      item6: {
        title: "Nauka neuromarketingu",
        description: "Łączenie eye-trackingu, sensorów biometrycznych i metod behawioralnych do dekodowania poznania konsumenckiego"
      },
      item7: {
        title: "Badania uwagi i percepcji",
        description: "Analiza istotności wizualnej, przyciągania uwagi i neuronalnych podstaw świadomego postrzegania"
      },
      item8: {
        title: "Czynniki ludzkie i ergonomia",
        description: "Analiza interakcji ludzi z interfejsami, środowiskami i złożonymi systemami"
      },
      item9: {
        title: "Platformy badań zdalnych",
        description: "Narzędzia cyfrowe umożliwiające rozproszone eksperymenty poznawcze i behawioralne w różnych lokalizacjach"
      }
    },
    aiSection: {
      col1: {
        subtitle: "Multidyscyplinarna kognitywistyka",
        p1: "Konwergencja wielu dyscyplin naukowych otwiera niespotykane możliwości w zrozumieniu ludzkiej percepcji i poznania. Łącząc neuronaukę, psychologię, fizjologię i badania behawioralne, możemy teraz dekodować złożone wzorce przetwarzania wzrokowego, mechanizmów uwagi i podejmowania decyzji, które wcześniej były rozdrobnione między izolowanymi dziedzinami.",
        p2: "Technologia eye-trackingu w połączeniu z pomiarami elektrofizjologicznymi i testami poznawczymi ujawnia subtelne korelacje między zachowaniami wzrokowymi, aktywnością neuronalną a świadomym postrzeganiem. Ta multidyscyplinarna synergia umożliwia naukowcom przewidywanie reakcji percepcyjnych i rozumienie strategii uwagowych z niezwykłą precyzją."
      },
      col2: {
        subtitle: "Poznanie wzrokowe jako fokus badawczy",
        p1: "Percepcja wzrokowa to podstawowa brama, przez którą ludzie przetwarzają informacje środowiskowe, co czyni ją fundamentem badań kognitywnych. Metodologie eye-trackingowe ujawniają nie tylko to, gdzie ludzie patrzą, ale jak alokują uwagę, przetwarzają hierarchie wizualne i podejmują błyskawiczne decyzje na podstawie wskazówek wzrokowych.",
        p2: "Zaawansowane techniki pomiarowe pozwalają badaczom mapować wzrokowe ścieżki skanowania, identyfikować wąskie gardła uwagowe i rozumieć dynamikę czasową przetwarzania informacji wzrokowej. To skupienie na poznaniu wzrokowym dostarcza praktycznych wniosków dla projektowania interfejsów, komunikacji marketingowej i interakcji człowiek-maszyna."
      },
      col3: {
        subtitle: "Analiza AI i modele wiedzy",
        p1: "Wykorzystujemy sztuczną inteligencję do analizy złożonych wielowymiarowych danych z eye-trackingu, biometrii i eksperymentów behawioralnych. Modele uczenia maszynowego pomagają nam identyfikować wzorce niewidoczne dla tradycyjnych metod statystycznych, budując kompleksowe modele wiedzy o procesach poznawczych i zachowaniach konsumenckich.",
        p2: "Nasze narzędzia AI automatyzują przetwarzanie danych, przyspieszają testowanie hipotez i umożliwiają dostosowywanie eksperymentów w czasie rzeczywistym. Łącząc rygorystyczną metodologię naukową z zaawansowaną analizą obliczeniową, przekształcamy surowe dane badawcze w praktyczne wnioski i modele predykcyjne dla zastosowań biznesowych."
      }
    },
    services: {
      title: "Jednostki biznesowe",
      subtitle: "Trzy wyspecjalizowane jednostki tworzące kompletną ofertę badawczą",
      eyetracking: {
        title: "Eyetracking Solutions",
        description: "Specjalizujemy się w zaawansowanych badaniach neuromarketingowych wykorzystujących technologię śledzenia wzroku. Dostarczamy precyzyjne dane o zachowaniach konsumentów i ich reakcjach na różne bodźce wizualne.",
        features: [
          "• Badania neuromarketingowe",
          "• Analiza zachowań konsumenckich",
          "• Testowanie materiałów marketingowych",
          "• Optymalizacja interfejsów użytkownika"
        ]
      },
      digitalForce: {
        title: "Digital Force",
        description: "Projektujemy i budujemy nowoczesne laboratoria oraz systemy badawcze. Nasze rozwiązania technologiczne zapewniają najwyższą jakość i precyzję w przeprowadzaniu badań naukowych.",
        features: [
          "• Projektowanie laboratoriów badawczych",
          "• Systemy pomiarowe i analityczne",
          "• Integracja technologii AI",
          "• Konserwacja i wsparcie techniczne"
        ]
      },
      mindcloud: {
        title: "Mindcloud One",
        description: "Odpowiadamy za kompleksowe procesy marketingowe wsparte sztuczną inteligencją. Łączymy dane z badań z zaawansowanymi strategiami marketingowymi, tworząc skuteczne kampanie oparte na naukowych podstawach.",
        features: [
          "• Strategie marketingowe oparte na AI",
          "• Analiza danych konsumenckich",
          "• Kampanie personalizowane",
          "• Automatyzacja procesów marketingowych"
        ]
      }
    },
    knowledgeModels: {
      title: "Multidyscyplinarne laboratoria badawcze",
      subtitle: "Tworzenie zintegrowanych środowisk badawczych, w których neuronauka, psychologia, fizjologia i kognitywistyka łączą się, aby badać ludzką percepcję i poznanie",
      item1: {
        title: "Laboratoria eye-trackingu i analizy spojrzenia",
        description: "Nowoczesne obiekty wyposażone w zdalne i mobilne eye-trackery do badania uwagi wzrokowej, wzorców czytania, użyteczności interfejsów i zachowań konsumenckich w warunkach kontrolowanych i naturalnych."
      },
      item2: {
        title: "Pomiary psychofizjologiczne",
        description: "Zintegrowane systemy biometryczne rejestrujące tętno, przewodność skóry, ekspresje mimiczne i rozszerzenie źrenicy w celu zrozumienia reakcji emocjonalnych i poznawczych podczas zadań przetwarzania wzrokowego."
      },
      item3: {
        title: "Przestrzenie badań percepcji wzrokowej",
        description: "Kontrolowane środowiska laboratoryjne zaprojektowane do prezentowania precyzyjnie skalibrowanych bodźców wzrokowych przy jednoczesnym rejestrowaniu ruchów oczu, odpowiedzi neuronalnych i danych behawioralnych."
      },
      item4: {
        title: "Infrastruktura współpracy badawczej",
        description: "Wspólne przestrzenie laboratoryjne ułatwiające współpracę między neuronaukowcami, psychologami, badaczami UX i naukowcami marketingu pracującymi nad projektami poznania wzrokowego."
      },
      item5: {
        title: "Środowiska testów poznawczych",
        description: "Wyspecjalizowane stanowiska do badania uwagi, pamięci, podejmowania decyzji i procesów percepcyjnych poprzez eksperymenty behawioralne i oceny kognitywne."
      },
      item6: {
        title: "Obiekty stosowanego neuromarketingu",
        description: "Laboratoria badawcze łączące eye-tracking, biometrię i testy asocjacji implicitnych do dekodowania uwagi konsumenckiej, formowania preferencji i decyzji zakupowych."
      },
      item7: {
        title: "Laboratoria czynników ludzkich i użyteczności",
        description: "Środowiska testów ergonomicznych analizujące, jak użytkownicy wchodzą w interakcję z interfejsami, produktami i środowiskami poprzez zachowania wzrokowe i metryki wydajności."
      },
      item8: {
        title: "Konsultacje w zakresie projektowania eksperymentów",
        description: "Wsparcie eksperckie w projektowaniu rygorystycznych badań multidyscyplinarnych integrujących eye-tracking, psychofizjologię i metodologie behawioralne dla solidnych wyników naukowych."
      },
      item9: {
        title: "Mobilne i zdalne platformy badawcze",
        description: "Przenośne systemy eye-trackingowe i internetowe platformy eksperymentalne umożliwiające badania kognitywne w rzeczywistych kontekstach i rozproszonych populacjach uczestników."
      }
    },
    cooperation: {
      title: "Współpraca z uczelniami",
      subtitle: "Budujemy mosty między nauką a praktycznym zastosowaniem technologii, współpracując z czołowymi uczelniami i jednostkami badawczo-rozwojowymi w Polsce i za granicą.",
      columns: {
        technology: {
          title: "Technologia i metodologie na nauki",
          description: "Dostarczamy najnowocześniejsze rozwiązania technologiczne i metodologie badawcze, które umożliwiają przełomy naukowe. Nasze zaawansowane systemy AI, zautomatyzowane platformy badawcze i precyzyjne narzędzia pomiarowe wspierają naukowców w prowadzeniu innowacyjnych badań z niespotykaną dokładnością i efektywnością. Opracowujemy niestandardowe rozwiązania dostosowane do konkretnych potrzeb badawczych, integrując najnowszą technologię ze sprawdzonymi metodami naukowymi."
        },
        commercialization: {
          title: "Komercjalizacja i networking",
          description: "Przekształcamy odkrycia naukowe w gotowe do wprowadzenia na rynek rozwiązania poprzez strategiczne partnerstwa i ekspertyzę w zakresie komercjalizacji. Nasza rozległa sieć łączy naukowców z liderami przemysłu, inwestorami i partnerami wdrożeniowymi. Ułatwiamy transfer technologii, zapewniamy wsparcie w rozwoju biznesu i tworzymy ścieżki od odkryć laboratoryjnych do zastosowań w rzeczywistym świecie."
        }
      },
      stats: {
        partnerships: "Partnerstw badawczych",
        universities: "Uczelni partnerskich",
        projects: "Zrealizowanych projektów",
        publications: "Publikacji naukowych"
      },
      cta: "Zostań naszym partnerem"
    },
    contact: {
      title: "Skontaktuj się z nami",
      subtitle: "Rozpocznij współpracę z liderem w dziedzinie badań neurokognitywnych i AI",
      address: "Adres",
      phone: "Telefon",
      email: "Email",
      form: {
        name: "Imię i nazwisko",
        email: "Adres email",
        company: "Nazwa firmy/uczelni",
        message: "Wiadomość",
        submit: "Wyślij wiadomość"
      }
    },
    footer: {
      rights: "© 2024 SRNC. Wszelkie prawa zastrzeżone."
    },
    partners: {
      title: "Nasi Partnerzy",
      business: "Partnerzy Biznesowi",
      academic: "Partnerzy Naukowi"
    },
    ourStory: {
      title: "Nasza Historia",
      subtitle: "Od pionierów eye-trackingu do liderów badań multidyscyplinarnych",
      milestone1: "Przełom nastąpił w 2005 roku wraz ze stworzeniem pierwszego profesjonalnego laboratorium eye-trackingowego w Polsce dla Telekomunikacji Polskiej, które otworzyło przed nami zupełnie nowe możliwości badań poznania wzrokowego. To doświadczenie przekształciło nasze podejście do badania ludzkiej percepcji i zapoczątkowało systematyczny rozwój w kierunku multidyscyplinarnej neuronauki kognitywnej. Od tego czasu rozwinęliśmy się w kompleksowego partnera badawczego, dostarczającego wszystko — od projektowania laboratoriów i konsultacji metodologicznych, po pełne wdrożenia badawcze i profesjonalne programy szkoleniowe.",
      milestone2: "Systemów eye-trackingowych dostarczonych od 2006 roku dla uczelni i firm w całej Polsce, wraz z ponad 400 multidyscyplinarnymi badaniami przeprowadzonymi dla różnorodnych klientów. Realizowaliśmy niezwykłe projekty w nietypowych środowiskach: zakładach karnych, kokpitach pilotów liniowych, z operatorami sił specjalnych, kontrolerami lotów oraz przy analizie ergonomii maszyn leśnych. Te trudne, niestandardowe projekty łączące percepcję wzrokową, psychologię poznawczą i badania czynników ludzkich stały się naszą wizytówką.",
      aiHighlight: "Dziś prowadzimy zintegrowane laboratoria multidyscyplinarne, w których neuronauka, psychologia, fizjologia i kognitywistyka się przenikają. Nasze przestrzenie badawcze są zaprojektowane do współpracy między dyscyplinami, umożliwiając kompleksowe badanie uwagi wzrokowej, procesów percepcyjnych i mechanizmów podejmowania decyzji. Łączymy fundamentalne badania kognitywne z praktycznymi pytaniami marketingu, projektowania UX i interakcji człowiek-maszyna—tworząc praktyczne wnioski z rygorystycznej metodologii naukowej."
    }
  },
  zh: {
    nav: {
      about: "关于我们",
      services: "服务",
      innovations: "创新",
      knowledgeModels: "研究实验室",
      cooperation: "合作",
      contact: "联系"
    },
    hero: {
      title: "我们建设多学科研究实验室",
      subtitle: "我们设计整合的空间，让神经科学、心理学、生理学和认知科学汇聚，探索视觉感知、注意力和人类决策过程。",
      cta1: "了解我们的解决方案",
      cta2: "联系我们"
    },
    about: {
      title: "学科交汇之处",
      subtitle: "我们创建研究环境，连接神经科学、认知心理学、生理学和行为科学——聚焦视觉认知、注意机制和多感官整合。",
      item1: {
        title: "视觉认知研究",
        description: "眼动追踪和注视分析，理解视觉注意力、感知模式和信息处理"
      },
      item2: {
        title: "多感官整合实验室",
        description: "结合视觉、听觉和触觉刺激的设施，研究跨模态感知"
      },
      item3: {
        title: "综合研究基础设施",
        description: "我们自有的多学科实验室，配备用于神经认知、心理生理学和行为实验"
      },
      item4: {
        title: "跨学科协作",
        description: "在共享研究空间中汇集神经科学家、心理学家、生理学家和用户体验研究人员"
      },
      item5: {
        title: "认知过程建模",
        description: "通过实证研究理解决策、记忆形成和注意力分配"
      },
      item6: {
        title: "神经营销科学",
        description: "结合眼动追踪、生物传感器和行为方法解码消费者认知"
      },
      item7: {
        title: "注意力与感知研究",
        description: "研究视觉显著性、注意力捕获和意识感知的神经基础"
      },
      item8: {
        title: "人因工程学",
        description: "分析人类如何与界面、环境和复杂系统交互"
      },
      item9: {
        title: "远程研究平台",
        description: "数字工具使跨地点的分布式认知和行为实验成为可能"
      }
    },
    aiSection: {
      col1: {
        subtitle: "多学科认知科学",
        p1: "多个科学学科的融合为理解人类感知和认知开辟了前所未有的机会。通过结合神经科学、心理学、生理学和行为研究，我们现在可以解码视觉处理、注意机制和决策中的复杂模式，这些模式以前分散在孤立的领域中。",
        p2: "眼动追踪技术与电生理测量和认知测试相结合，揭示了注视行为、神经活动和意识感知之间的微妙相关性。这种多学科协同作用使研究人员能够以惊人的精度预测感知反应和理解注意策略。"
      },
      col2: {
        subtitle: "视觉认知作为研究重点",
        p1: "视觉感知是人类处理环境信息的主要门户，使其成为认知研究的基石。眼动追踪方法不仅揭示了人们看哪里，还揭示了他们如何分配注意力、处理视觉层次结构，以及基于视觉线索做出瞬间决策。",
        p2: "先进的测量技术使研究人员能够绘制视觉扫描路径、识别注意瓶颈并理解视觉信息处理的时间动态。这种对视觉认知的关注为界面设计、营销传播和人机交互提供了可操作的见解。"
      },
      col3: {
        subtitle: "AI分析与知识模型",
        p1: "我们利用人工智能分析来自眼动追踪、生物识别和行为实验的复杂多维数据。机器学习模型帮助我们识别传统统计方法无法看到的模式，构建关于认知过程和消费者行为的综合知识模型。",
        p2: "我们的AI工具自动化数据处理，加速假设测试，并实现实时实验调整。通过将严格的科学方法论与先进的计算分析相结合，我们将原始研究数据转化为可操作的见解和业务应用的预测模型。"
      }
    },
    services: {
      title: "业务单元",
      subtitle: "三个专业单元创造完整的研究服务",
      eyetracking: {
        title: "眼动追踪解决方案",
        description: "我们专注于使用眼动追踪技术的先进神经营销研究。我们提供关于消费者行为及其对各种视觉刺激反应的精确数据。",
        features: [
          "• 神经营销研究",
          "• 消费者行为分析",
          "• 营销材料测试",
          "• 用户界面优化"
        ]
      },
      digitalForce: {
        title: "数字力量",
        description: "我们设计和建造现代实验室和研究系统。我们的技术解决方案确保进行科学研究的最高质量和精度。",
        features: [
          "• 研究实验室设计",
          "• 测量和分析系统",
          "• AI技术集成",
          "• 维护和技术支持"
        ]
      },
      mindcloud: {
        title: "思维云一号",
        description: "我们负责由人工智能支持的综合营销流程。我们将研究数据与先进的营销策略相结合，创造基于科学基础的有效活动。",
        features: [
          "• 基于AI的营销策略",
          "• 消费者数据分析",
          "• 个性化活动",
          "• 营销流程自动化"
        ]
      }
    },
    knowledgeModels: {
      title: "多学科研究实验室",
      subtitle: "创建整合的研究环境，让神经科学、心理学、生理学和认知科学汇聚，探索人类感知和认知",
      item1: {
        title: "眼动追踪与注视分析实验室",
        description: "配备远程和移动眼动追踪器的最先进设施，用于在受控和自然环境中研究视觉注意力、阅读模式、界面可用性和消费者行为。"
      },
      item2: {
        title: "心理生理测量",
        description: "集成生物测量系统，捕获心率、皮肤电导、面部表情和瞳孔扩张，以了解视觉处理任务期间的情绪和认知反应。"
      },
      item3: {
        title: "视觉感知研究空间",
        description: "受控实验室环境，设计用于呈现精确校准的视觉刺激，同时记录眼动、神经反应和行为数据。"
      },
      item4: {
        title: "协作研究基础设施",
        description: "共享实验室空间，促进神经科学家、心理学家、用户体验研究人员和营销科学家之间在视觉认知项目上的合作。"
      },
      item5: {
        title: "认知测试环境",
        description: "专门设置用于通过行为实验和认知评估研究注意力、记忆、决策和感知过程。"
      },
      item6: {
        title: "应用神经营销设施",
        description: "结合眼动追踪、生物识别和内隐联想测试的研究实验室，解码消费者注意力、偏好形成和购买决策。"
      },
      item7: {
        title: "人因工程与可用性实验室",
        description: "人体工程学测试环境，通过注视行为和性能指标分析用户如何与界面、产品和环境交互。"
      },
      item8: {
        title: "实验设计咨询",
        description: "在设计严格的多学科研究方面提供专家支持，整合眼动追踪、心理生理学和行为方法论，以获得可靠的科学发现。"
      },
      item9: {
        title: "移动和远程研究平台",
        description: "便携式眼动追踪系统和在线实验平台，使在现实世界环境和分布式参与者群体中进行认知研究成为可能。"
      }
    },
    cooperation: {
      title: "大学合作",
      subtitle: "我们在科学与技术实际应用之间架起桥梁，与国内外领先的大学和研发单位合作。",
      columns: {
        technology: {
          title: "科学技术与方法论",
          description: "我们提供尖端技术解决方案和研究方法论，实现科学突破。我们先进的人工智能系统、自动化研究平台和精密测量工具支持研究人员以前所未有的准确性和效率进行创新研究。我们开发针对特定研究需求的定制解决方案，将最先进的技术与经过验证的科学方法相结合。"
        },
        commercialization: {
          title: "商业化与网络",
          description: "我们通过战略合作伙伴关系和商业化专业知识将科学发现转化为市场就绪的解决方案。我们广泛的网络将研究人员与行业领袖、投资者和实施合作伙伴联系起来。我们促进技术转让，提供业务发展支持，并创建从实验室发现到实际应用的途径。"
        }
      },
      stats: {
        partnerships: "研究合作伙伴关系",
        universities: "合作大学",
        projects: "完成项目",
        publications: "科学出版物"
      },
      cta: "成为我们的合作伙伴"
    },
    contact: {
      title: "联系我们",
      subtitle: "与神经认知研究和AI领域的领导者开始合作",
      address: "地址",
      phone: "电话",
      email: "邮箱",
      form: {
        name: "姓名",
        email: "邮箱地址",
        company: "公司/大学名称",
        message: "消息",
        submit: "发送消息"
      }
    },
    footer: {
      rights: "© 2024 SRNC. 版权所有。"
    },
    partners: {
      title: "我们的合作伙伴",
      business: "商业合作伙伴",
      academic: "学术合作伙伴"
    },
    ourStory: {
      title: "我们的故事",
      subtitle: "从眼动追踪先驱到多学科研究领导者",
      milestone1: "2005年的突破来自为波兰电信创建波兰首个专业眼动追踪实验室，这为视觉认知研究打开了全新的可能性。这一经验改变了我们研究人类感知的方法，并引发了向多学科神经认知科学的系统性扩展。从那时起，我们已发展成为综合研究解决方案提供商，提供从实验室设计和方法论咨询到完整研究实施和专业培训计划的一切服务。",
      milestone2: "自2006年以来为波兰各地的大学和公司交付的眼动追踪系统，以及为不同客户进行的400多项多学科研究。我们在非常规环境中处理了非凡的项目：惩教设施、航空公司驾驶舱、与特种部队操作员、空中交通管制员合作，以及分析林业机械的人体工程学。这些结合视觉感知、认知心理学和人因研究的挑战性非标准项目已成为我们的标志。",
      aiHighlight: "今天，我们运营整合的多学科实验室，神经科学、心理学、生理学和认知科学在这里汇聚。我们的研究空间设计用于学科间的协作，能够全面研究视觉注意力、感知过程和决策机制。我们将基础认知研究与营销、用户体验设计和人机交互中的应用问题相连接——从严格的科学方法论中创造可操作的见解。"
    }
  },
  ja: {
    nav: {
      about: "会社概要",
      services: "サービス",
      innovations: "イノベーション",
      knowledgeModels: "研究ラボ",
      cooperation: "協力",
      contact: "お問い合わせ"
    },
    hero: {
      title: "私たちは学際的研究ラボを構築します",
      subtitle: "神経科学、心理学、生理学、認知科学が融合し、視覚認知、注意、人間の意思決定プロセスを探求する統合空間を設計します。",
      cta1: "ソリューションを見る",
      cta2: "お問い合わせ"
    },
    about: {
      title: "学問分野が出会う場所",
      subtitle: "神経科学、認知心理学、生理学、行動科学を橋渡しする研究環境を創造し、視覚認知、注意メカニズム、多感覚統合に焦点を当てています。",
      item1: {
        title: "視覚認知研究",
        description: "視覚的注意、知覚パターン、情報処理を理解するためのアイトラッキングと視線分析"
      },
      item2: {
        title: "多感覚統合ラボ",
        description: "クロスモーダル知覚を研究するための視覚、聴覚、触覚刺激を組み合わせた施設"
      },
      item3: {
        title: "統合研究インフラ",
        description: "神経認知、精神生理学、行動実験のための自社の学際的研究施設"
      },
      item4: {
        title: "学際的コラボレーション",
        description: "共有研究スペースで神経科学者、心理学者、生理学者、UXリサーチャーを結集"
      },
      item5: {
        title: "認知プロセスモデリング",
        description: "実証研究を通じた意思決定、記憶形成、注意配分の理解"
      },
      item6: {
        title: "ニューロマーケティング科学",
        description: "アイトラッキング、生体センサー、行動手法を組み合わせた消費者認知の解読"
      },
      item7: {
        title: "注意と知覚の研究",
        description: "視覚的顕著性、注意の捕捉、意識的認識の神経基盤の調査"
      },
      item8: {
        title: "人間工学",
        description: "人間がインターフェース、環境、複雑なシステムとどのように相互作用するかの分析"
      },
      item9: {
        title: "リモート研究プラットフォーム",
        description: "場所を超えた分散型認知・行動実験を可能にするデジタルツール"
      }
    },
    aiSection: {
      col1: {
        subtitle: "学際的認知科学",
        p1: "複数の科学分野の融合は、人間の知覚と認知を理解する前例のない機会を開いています。神経科学、心理学、生理学、行動研究を組み合わせることで、以前は孤立した分野に分断されていた視覚処理、注意メカニズム、意思決定の複雑なパターンを解読できるようになりました。",
        p2: "電気生理学的測定と認知テストを組み合わせたアイトラッキング技術は、視線行動、神経活動、意識的認識の間の微妙な相関関係を明らかにします。この学際的な相乗効果により、研究者は知覚反応を予測し、注意戦略を驚くべき精度で理解できます。"
      },
      col2: {
        subtitle: "研究焦点としての視覚認知",
        p1: "視覚知覚は人間が環境情報を処理する主要なゲートウェイであり、認知研究の基盤となっています。アイトラッキング手法は、人々がどこを見ているかだけでなく、どのように注意を配分し、視覚階層を処理し、視覚的手がかりに基づいて瞬時の決定を下すかを明らかにします。",
        p2: "高度な測定技術により、研究者は視覚スキャンパスをマッピングし、注意のボトルネックを特定し、視覚情報処理の時間的ダイナミクスを理解できます。視覚認知への焦点は、インターフェースデザイン、マーケティングコミュニケーション、人間-機械インタラクションに実用的な洞察を提供します。"
      },
      col3: {
        subtitle: "AI分析と知識モデル",
        p1: "私たちは、アイトラッキング、バイオメトリクス、行動実験からの複雑な多次元データを分析するために人工知能を活用しています。機械学習モデルは、従来の統計手法では見えないパターンを特定し、認知プロセスと消費者行動の包括的な知識モデルを構築するのに役立ちます。",
        p2: "私たちのAIツールはデータ処理を自動化し、仮説検証を加速し、リアルタイムの実験調整を可能にします。厳格な科学的方法論と高度な計算分析を組み合わせることで、生の研究データをビジネスアプリケーションのための実用的な洞察と予測モデルに変換します。"
      }
    },
    services: {
      title: "事業部門",
      subtitle: "完全な研究サービスを創造する3つの専門部門",
      eyetracking: {
        title: "アイトラッキングソリューション",
        description: "アイトラッキング技術を使用した高度なニューロマーケティング研究を専門としています。消費者行動とさまざまな視覚刺激への反応に関する正確なデータを提供します。",
        features: [
          "・ニューロマーケティング研究",
          "・消費者行動分析",
          "・マーケティング資料テスト",
          "・ユーザーインターフェース最適化"
        ]
      },
      digitalForce: {
        title: "デジタルフォース",
        description: "現代の研究室と研究システムを設計・構築します。私たちの技術ソリューションは、科学研究の実施において最高の品質と精度を保証します。",
        features: [
          "・研究ラボ設計",
          "・測定・分析システム",
          "・AI技術統合",
          "・メンテナンスと技術サポート"
        ]
      },
      mindcloud: {
        title: "マインドクラウドワン",
        description: "人工知能でサポートされた包括的なマーケティングプロセスを担当します。研究データと高度なマーケティング戦略を組み合わせ、科学的基盤に基づいた効果的なキャンペーンを作成します。",
        features: [
          "・AIベースのマーケティング戦略",
          "・消費者データ分析",
          "・パーソナライズドキャンペーン",
          "・マーケティングプロセス自動化"
        ]
      }
    },
    knowledgeModels: {
      title: "学際的研究ラボ",
      subtitle: "神経科学、心理学、生理学、認知科学が融合し、人間の知覚と認知を探求する統合研究環境の創造",
      item1: {
        title: "アイトラッキング・視線分析ラボ",
        description: "制御された環境と自然な環境で視覚的注意、読書パターン、インターフェースの使いやすさ、消費者行動を研究するためのリモートおよびモバイルアイトラッカーを備えた最先端の施設。"
      },
      item2: {
        title: "精神生理学的測定",
        description: "視覚処理タスク中の感情的・認知的反応を理解するために、心拍数、皮膚コンダクタンス、表情、瞳孔拡大を捕捉する統合バイオメトリックシステム。"
      },
      item3: {
        title: "視覚知覚研究スペース",
        description: "眼球運動、神経反応、行動データを記録しながら、精密に較正された視覚刺激を提示するように設計された制御された研究環境。"
      },
      item4: {
        title: "協力研究インフラ",
        description: "視覚認知プロジェクトに取り組む神経科学者、心理学者、UXリサーチャー、マーケティング科学者間のコラボレーションを促進する共有ラボスペース。"
      },
      item5: {
        title: "認知テスト環境",
        description: "行動実験と認知評価を通じて、注意、記憶、意思決定、知覚プロセスを調査するための専門的なセットアップ。"
      },
      item6: {
        title: "応用ニューロマーケティング施設",
        description: "消費者の注意、嗜好形成、購買決定を解読するためのアイトラッキング、バイオメトリクス、潜在連合テストを組み合わせた研究ラボ。"
      },
      item7: {
        title: "人間工学・ユーザビリティラボ",
        description: "視線行動とパフォーマンス指標を通じて、ユーザーがインターフェース、製品、環境とどのように相互作用するかを分析する人間工学テスト環境。"
      },
      item8: {
        title: "実験デザインコンサルティング",
        description: "堅牢な科学的発見のためにアイトラッキング、精神生理学、行動方法論を統合する厳格な学際的研究の設計における専門家サポート。"
      },
      item9: {
        title: "モバイル・リモート研究プラットフォーム",
        description: "現実世界のコンテキストと分散した参加者集団での認知研究を可能にするポータブルアイトラッキングシステムとオンライン実験プラットフォーム。"
      }
    },
    cooperation: {
      title: "大学連携",
      subtitle: "私たちは、国内外の主要大学や研究開発機関と協力し、科学と技術の実用化の架け橋を築いています。",
      columns: {
        technology: {
          title: "科学のための技術と方法論",
          description: "科学的ブレークスルーを可能にする最先端の技術ソリューションと研究方法論を提供します。高度なAIシステム、自動化された研究プラットフォーム、精密測定ツールは、研究者が前例のない精度と効率で革新的な研究を行うことをサポートします。特定の研究ニーズに合わせたカスタムソリューションを開発し、最先端技術と実証された科学的方法を統合します。"
        },
        commercialization: {
          title: "商業化とネットワーキング",
          description: "戦略的パートナーシップと商業化の専門知識を通じて、科学的発見を市場対応ソリューションに変換します。広範なネットワークは、研究者を業界リーダー、投資家、実装パートナーと結びつけます。技術移転を促進し、ビジネス開発サポートを提供し、研究室の発見から実世界のアプリケーションへの道を作ります。"
        }
      },
      stats: {
        partnerships: "研究パートナーシップ",
        universities: "パートナー大学",
        projects: "完了プロジェクト",
        publications: "科学論文"
      },
      cta: "パートナーになる"
    },
    contact: {
      title: "お問い合わせ",
      subtitle: "神経認知研究とAIのリーダーとの協力を開始",
      address: "住所",
      phone: "電話",
      email: "メール",
      form: {
        name: "氏名",
        email: "メールアドレス",
        company: "会社名/大学名",
        message: "メッセージ",
        submit: "メッセージを送信"
      }
    },
    footer: {
      rights: "© 2024 SRNC. All rights reserved."
    },
    partners: {
      title: "パートナー",
      business: "ビジネスパートナー",
      academic: "学術パートナー"
    },
    ourStory: {
      title: "私たちの物語",
      subtitle: "アイトラッキングのパイオニアから学際的研究のリーダーへ",
      milestone1: "2005年、ポーランド電信向けにポーランド初の専門アイトラッキング研究所を設立したことでブレークスルーが起こり、視覚認知研究のまったく新しい可能性が開かれました。この経験は人間の知覚研究へのアプローチを変革し、学際的神経認知科学への体系的な拡大を促しました。それ以来、私たちは研究所設計や方法論コンサルティングから完全な研究実施や専門トレーニングプログラムまで、すべてを提供する包括的な研究ソリューションプロバイダーへと進化しました。",
      milestone2: "2006年以降、ポーランド全土の大学や企業に納入されたアイトラッキングシステム、そして多様なクライアント向けに実施された400以上の学際的研究。矯正施設、航空機コックピット、特殊部隊オペレーター、航空管制官との協力、林業機械の人間工学分析など、型破りな環境で特別なプロジェクトに取り組んできました。視覚知覚、認知心理学、人的要因研究を組み合わせたこれらの挑戦的で非標準的なプロジェクトが私たちのトレードマークとなっています。",
      aiHighlight: "今日、私たちは神経科学、心理学、生理学、認知科学が融合する統合学際研究所を運営しています。私たちの研究スペースは、分野間のコラボレーションのために設計されており、視覚的注意、知覚プロセス、意思決定メカニズムの包括的な調査を可能にします。基礎的な認知研究とマーケティング、UXデザイン、人間-機械インタラクションにおける応用課題を橋渡しし、厳格な科学的方法論から実用的な洞察を創造します。"
    }
  }
};