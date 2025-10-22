export interface Translation {
  nav: {
    about: string;
    services: string;
    innovations: string;
    knowledgeModels: string;
    cooperation: string;
    ourStory: string;
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
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
  };
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      innovations: "Innovations",
      knowledgeModels: "Knowledge Models",
      cooperation: "Cooperation",
      ourStory: "Our Story",
      contact: "Contact"
    },
    hero: {
      title: "Innovations in neuropsychological research",
      subtitle: "We combine the latest AI technologies with scientific research, automating research and marketing processes for the future of science.",
      cta1: "Discover our solutions",
      cta2: "Contact us"
    },
    about: {
      title: "Tomorrow comes today",
      subtitle: "We use language models, AI agents and broadly understood artificial intelligence to revolutionize scientific research and marketing processes.",
      item1: {
        title: "AI-Driven Research",
        description: "Application of artificial intelligence to optimize and accelerate research processes"
      },
      item2: {
        title: "Automated Research Workflows",
        description: "Intelligent automation of complex research and laboratory procedures"
      },
      item3: {
        title: "Integrated Scientific Infrastructure",
        description: "Our own laboratories and modern technological facilities for conducting advanced experiments"
      },
      item4: {
        title: "Collaborative Innovation Networks",
        description: "Cooperation with universities, research institutes and industrial partners"
      },
      item5: {
        title: "Custom Model Fine-Tuning",
        description: "Training AI models on organizational data to understand company-specific language and methodologies"
      },
      item6: {
        title: "Neuromarketing Intelligence",
        description: "AI-powered neuromarketing research – deep analysis of consumer reactions"
      },
      item7: {
        title: "Cognitive Agent Teams",
        description: "Teams of autonomous AI agents performing research and analytical tasks"
      },
      item8: {
        title: "Model Evaluation & Validation",
        description: "Testing frameworks ensuring model accuracy, consistency, and domain-specific understanding"
      },
      item9: {
        title: "Smart Experimentation Platforms",
        description: "Platforms for remote conducting and managing research experiments using AI"
      }
    },
    aiSection: {
      col1: {
        subtitle: "AI & Neuroscience Convergence",
        p1: "The convergence of artificial intelligence and neuroscience research is opening unprecedented opportunities in understanding human cognition and behavior. By combining advanced AI algorithms with neuroscientific methodologies, we can now decode complex patterns in brain activity that were previously impossible to analyze. Machine learning models can process vast amounts of neurological data in real-time, identifying subtle correlations between neural activity and cognitive processes.",
        p2: "This synergy enables researchers to predict behavioral responses, understand decision-making mechanisms, and uncover the intricate workings of the human mind with remarkable precision. The integration of AI in neuroscience is not just accelerating research—it's fundamentally transforming our approach to understanding consciousness, memory formation, and the neural basis of learning."
      },
      col2: {
        subtitle: "AI as Exploration Tool",
        p1: "Artificial intelligence is revolutionizing not only how we analyze data but how we explore scientific questions. Traditional research methods are being augmented by AI-powered tools that can generate hypotheses, simulate complex scenarios, and discover patterns that human researchers might overlook.",
        p2: "Deep learning algorithms can navigate multi-dimensional data spaces, uncovering hidden relationships and suggesting novel research directions. These tools enable scientists to explore \"what-if\" scenarios at unprecedented scales, testing thousands of hypotheses simultaneously and identifying the most promising avenues for investigation. This exploratory capability transforms AI from a mere analytical instrument into a collaborative research partner, ultimately accelerating the pace of scientific discovery and innovation across all disciplines."
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
      title: "Organizational Knowledge Models",
      subtitle: "Building cognitive architectures that transform how organizations capture, process, and utilize their collective intelligence",
      item1: {
        title: "Corporate Ontology Architecture",
        description: "Building structured organizational knowledge models that define entities, relationships, and business logic. We create semantic frameworks that capture your company's unique domain expertise, decision patterns, and operational rules."
      },
      item2: {
        title: "Data Sourcing and Labeling",
        description: "Professional data sourcing and annotation services for training custom AI models. We provide high-quality, domain-specific training datasets for computer vision, natural language processing, and generative AI applications. Expert labeling ensures accuracy and consistency across diverse data types."
      },
      item3: {
        title: "Organizational Cognitive Models",
        description: "Hybrid symbolic-linguistic models that function as your organization's digital brain. Not a chatbot, but a comprehensive cognitive architecture that understands context, relationships, and organizational reasoning patterns."
      },
      item4: {
        title: "Custom Model Fine-Tuning",
        description: "Training large language models on your organizational data to create AI that speaks your company's language, understands your methodologies, and follows your specific rules and terminology. Domain-specific intelligence tailored to your business context."
      },
      item5: {
        title: "Model Evaluation & Validation",
        description: "Rigorous testing frameworks ensuring cognitive model consistency, context understanding, and accurate domain comprehension. We validate that models maintain logical coherence and don't confuse concepts like POS with UX in your specific context."
      },
      item6: {
        title: "Adaptive Learning Systems",
        description: "Cognitive architectures with memory layers (token-based and long-term) that continuously learn from new cases, adapting to evolving organizational knowledge and improving over time through real-world interactions."
      },
      item7: {
        title: "Knowledge Model Versioning",
        description: "Enterprise-grade version control for your organizational cognitive models. Track changes, manage updates, roll back when needed, and maintain consistency across your AI infrastructure as business knowledge evolves."
      },
      item8: {
        title: "AI-Driven Research Automation",
        description: "Intelligent systems that optimize and accelerate research workflows – from experiment design to data analysis. Autonomous agents handle complex analytical tasks while maintaining scientific rigor and methodological consistency."
      },
      item9: {
        title: "Integrated Scientific Infrastructure",
        description: "Our own laboratories and modern technological facilities equipped with AI-enhanced measurement systems, automated data collection, and real-time analysis capabilities for conducting advanced neuropsychological experiments."
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
          description: "We transform scientific discoveries into market-ready solutions through strategic partnerships and commercialization expertise. Our extensive network connects researchers with industry leaders, investors, and implementation partners. We facilitate technology transfer, provide business development support, and create pathways from laboratory findings to real-world applications, ensuring research innovations generate tangible economic and social impact."
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
      subtitle: "Start cooperation with the leader in neuropsychological research and AI",
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
      subtitle: "From research pioneers to AI innovation leaders",
      paragraph1: "The company was founded by professionals working at the intersection of marketing, advertising, and research. Initially, we focused primarily on research projects, but the breakthrough moment came in 2005 when we created an eyetracking laboratory for Telekomunikacja Polska. This experience opened new possibilities – since then, we have systematically expanded our offerings to include comprehensive research solutions: from consulting, through infrastructure development, to implementation and training.",
      paragraph2: "In 2006, we completed our first delivery of research equipment and training for Maria Curie-Skłodowska University in Lublin. Since then, we have delivered over 300 eyetracking systems and conducted over 400 studies for companies, scientific institutions, and research agencies throughout Poland.",
      paragraph3: "Beyond typical consumer and psychological research, we have also undertaken fascinating projects in unusual environments: correctional facilities, airline cockpits, with special forces operators, air traffic controllers, and in analyzing the ergonomics of forestry machinery. Challenging, non-standard projects are our specialty – we eagerly await the next ones.",
      paragraph4: "Since 2017, we have been introducing artificial intelligence into research processes, and since 2023, we have been using and developing our own tools for both analysis and modeling, as well as managing company processes including marketing and sales. Today, specialized agents – for example, those creating research quotes or analyzing specific UX problems – function as members of project teams. We currently help clients implement AI solutions in both scientific and consumer research, as well as in marketing and sales processes."
    }
  },
  pl: {
    nav: {
      about: "O nas",
      services: "Usługi",
      innovations: "Innowacje",
      knowledgeModels: "Modele wiedzy",
      cooperation: "Współpraca",
      ourStory: "Nasza Historia",
      contact: "Kontakt"
    },
    hero: {
      title: "Innowacje w badaniach neuropsychologicznych",
      subtitle: "Łączymy najnowsze technologie AI z badaniami naukowymi, automatyzując procesy badawcze i marketingowe dla przyszłości nauki.",
      cta1: "Poznaj nasze rozwiązania",
      cta2: "Skontaktuj się z nami"
    },
    about: {
      title: "Jutro zaczyna się dziś",
      subtitle: "Wykorzystujemy modele językowe, agentów AI i szeroko pojętą sztuczną inteligencję do rewolucjonizacji badań naukowych i procesów marketingowych.",
      item1: {
        title: "AI-Driven Research",
        description: "Zastosowanie sztucznej inteligencji do optymalizacji i przyspieszania procesów badawczych"
      },
      item2: {
        title: "Automated Research Workflows",
        description: "Inteligentna automatyzacja złożonych procedur badawczych i laboratoryjnych"
      },
      item3: {
        title: "Integrated Scientific Infrastructure",
        description: "Własne laboratoria i nowoczesne zaplecze technologiczne do prowadzenia zaawansowanych eksperymentów"
      },
      item4: {
        title: "Collaborative Innovation Networks",
        description: "Współpraca z uczelniami, instytutami badawczymi i partnerami przemysłowymi"
      },
      item5: {
        title: "Fine-tuning dedykowanych modeli",
        description: "Trenowanie modeli AI na danych organizacyjnych w celu zrozumienia języka i metodologii firmy"
      },
      item6: {
        title: "Neuromarketing Intelligence",
        description: "Badania neuromarketingowe wspierane przez AI – głęboka analiza reakcji konsumenckich"
      },
      item7: {
        title: "Cognitive Agent Teams",
        description: "Zespoły autonomicznych agentów AI realizujących zadania badawcze i analityczne"
      },
      item8: {
        title: "Ewaluacja i walidacja modeli",
        description: "Frameworki testowe zapewniające dokładność, spójność i domenowe zrozumienie modeli"
      },
      item9: {
        title: "Smart Experimentation Platforms",
        description: "Platformy do zdalnego prowadzenia i zarządzania eksperymentami badawczymi z wykorzystaniem AI"
      }
    },
    aiSection: {
      col1: {
        subtitle: "Konwergencja AI i neuronauki",
        p1: "Połączenie sztucznej inteligencji i badań neuronaukowych otwiera niespotykane możliwości w zrozumieniu ludzkiej kognitywności i zachowania. Łącząc zaawansowane algorytmy AI z metodologiami neuronaukowymi, możemy teraz dekodować złożone wzorce w aktywności mózgu, które wcześniej były niemożliwe do analizy. Modele uczenia maszynowego przetwarzają ogromne ilości danych neurologicznych w czasie rzeczywistym, identyfikując subtelne korelacje między aktywnością neuronalną a procesami poznawczymi.",
        p2: "Ta synergia umożliwia naukowcom przewidywanie reakcji behawioralnych, zrozumienie mechanizmów podejmowania decyzji i odkrywanie zawiłości ludzkiego umysłu z niezwykłą precyzją. Integracja AI w neuronauce nie tylko przyspiesza badania—ale fundamentalnie transformuje nasze podejście do rozumienia świadomości, tworzenia pamięci i neuronalnych podstaw uczenia się."
      },
      col2: {
        subtitle: "AI jako narzędzie eksploracji",
        p1: "Sztuczna inteligencja rewolucjonizuje nie tylko sposób analizy danych, ale także sposób eksploracji pytań naukowych. Tradycyjne metody badawcze są wzmacniane przez narzędzia oparte na AI, które mogą generować hipotezy, symulować złożone scenariusze i odkrywać wzorce, które badacze mogliby przeoczyć.",
        p2: "Algorytmy głębokiego uczenia mogą nawigować po wielowymiarowych przestrzeniach danych, odkrywając ukryte relacje i sugerując nowe kierunki badań. Te narzędzia umożliwiają naukowcom eksplorację scenariuszy \"co jeśli\" na bezprecedensową skalę, testując tysiące hipotez jednocześnie i identyfikując najbardziej obiecujące kierunki badań. Ta zdolność eksploracyjna przekształca AI z prostego instrumentu analitycznego w partnera badawczego, ostatecznie przyspieszając tempo odkryć naukowych i innowacji we wszystkich dyscyplinach."
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
      title: "Organizacyjne modele wiedzy",
      subtitle: "Budowa architektur kognitywnych, które transformują sposób, w jaki organizacje przechwytują, przetwarzają i wykorzystują swoją zbiorową inteligencję",
      item1: {
        title: "Ontologia korporacyjna i ekstrakcja wiedzy",
        description: "Budowa strukturalnych modeli wiedzy organizacyjnej definiujących byty, relacje i logikę biznesową. Przekształcamy nieustrukturyzowane materiały firmowe w struktury semantyczne – fakty, decyzje, reguły i procesy. Nasze frameworki semantyczne przechwytują unikalną wiedzę domenową, wzorce decyzyjne i reguły operacyjne, przetwarzając dokumentację i komunikację w maszynowo czytelną wiedzę organizacyjną."
      },
      item2: {
        title: "Data Sourcing and Labeling",
        description: "Profesjonalne usługi pozyskiwania i anotacji danych do trenowania niestandardowych modeli AI. Dostarczamy wysokiej jakości, domenowo-specyficzne zbiory treningowe dla computer vision, przetwarzania języka naturalnego i aplikacji generatywnego AI. Eksperckie etykietowanie zapewnia dokładność i spójność dla różnorodnych typów danych."
      },
      item3: {
        title: "Fine-tuning i trening dedykowanych modeli",
        description: "Trenowanie dużych modeli językowych na danych organizacyjnych w celu stworzenia AI mówiącego językiem firmy, rozumiejącego metodologie i przestrzegającego specyficznych reguł i terminologii. Inteligencja domenowa dostosowana do kontekstu biznesowego, zapewniająca prawdziwe zrozumienie unikalnego środowiska operacyjnego."
      },
      item4: {
        title: "Ewaluacja i walidacja modeli",
        description: "Rygorystyczne frameworki testowe zapewniające spójność modelu kognitywnego, rozumienie kontekstu i dokładną kompresję domeny. Weryfikujemy, że modele zachowują logiczną koherencję i nie mylą pojęć jak POS z UX w Twoim specyficznym kontekście. Kompleksowe procesy ewaluacji gwarantują niezawodność i precyzję."
      },
      item5: {
        title: "Adaptacyjne uczenie i wersjonowanie",
        description: "Architektury kognitywne z warstwami pamięci (tokenową i długoterminową), które nieustannie uczą się z nowych przypadków, adaptując się do ewoluującej wiedzy organizacyjnej. Kontrola wersji klasy enterprise śledzi zmiany, zarządza aktualizacjami i utrzymuje spójność w infrastrukturze AI w miarę ewolucji wiedzy biznesowej."
      },
      item6: {
        title: "Infrastruktura badań AI",
        description: "Zintegrowana infrastruktura naukowa i technologiczna łącząca inteligentną automatyzację badań z zaawansowanymi systemami pomiarowymi. Nasze laboratoria i platformy optymalizują przepływy badawcze od projektowania eksperymentów po analizę danych, oferując automatyczną zbiórkę danych i możliwości analizy w czasie rzeczywistym dla prowadzenia najnowocześniejszych eksperymentów neuropsychologicznych."
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
          description: "Przekształcamy odkrycia naukowe w gotowe do wprowadzenia na rynek rozwiązania poprzez strategiczne partnerstwa i ekspertyzę w zakresie komercjalizacji. Nasza rozległa sieć łączy naukowców z liderami przemysłu, inwestorami i partnerami wdrożeniowymi. Ułatwiamy transfer technologii, zapewniamy wsparcie w rozwoju biznesu i tworzymy ścieżki od odkryć laboratoryjnych do zastosowań w rzeczywistym świecie, zapewniając, że innowacje badawcze generują wymierny wpływ ekonomiczny i społeczny."
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
      subtitle: "Rozpocznij współpracę z liderem w dziedzinie badań neuropsychologicznych i AI",
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
      subtitle: "Od pionierów badań do liderów innowacji AI",
      paragraph1: "Spółka powstała z inicjatywy osób działających na styku marketingu, reklamy i badań. Na początku koncentrowaliśmy się głównie na realizacji projektów badawczych, jednak przełomowym momentem było stworzenie laboratorium eyetrackingowego dla Telekomunikacji Polskiej w 2005 roku. To doświadczenie otworzyło przed nami nowe możliwości – od tego czasu systematycznie rozwijamy ofertę o kompleksowe rozwiązania badawcze: od doradztwa, przez budowę infrastruktury, aż po wdrożenia i szkolenia.",
      paragraph2: "Już w 2006 roku zrealizowaliśmy pierwszą dostawę sprzętu badawczego i szkolenie dla Uniwersytetu Marii Curie-Skłodowskiej w Lublinie. Od tamtej pory dostarczyliśmy ponad 300 systemów eyetrackingowych i przeprowadziliśmy ponad 400 badań dla firm, instytucji naukowych i agencji badawczych w całej Polsce.",
      paragraph3: "Poza typowymi badaniami konsumenckimi czy psychologicznymi, realizowaliśmy też niezwykle ciekawe projekty w nietypowych środowiskach: zakładach karnych, kokpitach pilotów liniowych, z operatorami sił specjalnych, kontrolerami lotów i przy analizie ergonomii maszyn leśnych. Trudne, niestandardowe projekty to nasza specjalność – z ciekawością czekamy na kolejne.",
      paragraph4: "Od 2017 roku wprowadzamy sztuczną inteligencję do procesów badawczych, a od 2023 roku korzystamy i rozwijamy własne narzędzia zarówno do analiz, jak i modelowania oraz zarządzania procesami w firmie, w tym marketingiem i sprzedażą. Obecnie agenci wyspecjalizowani np. w tworzeniu wycen badań lub analiz konkretnych problemów UX, są bytami funkcjonującymi jak członkowie zespołów projektowych. Obecnie pomagamy klientom w implementacji rozwiązań AI zarówno w badaniach naukowych i konsumenckich, jak i procesach marketingowych i sprzedaży."
    }
  },
  zh: {
    nav: {
      about: "关于我们",
      services: "服务",
      innovations: "创新",
      knowledgeModels: "知识模型",
      cooperation: "合作",
      ourStory: "我们的故事",
      contact: "联系"
    },
    hero: {
      title: "神经心理学研究创新",
      subtitle: "我们将最新的人工智能技术与科学研究相结合，为科学的未来自动化研究和营销流程。",
      cta1: "了解我们的解决方案",
      cta2: "联系我们"
    },
    about: {
      title: "明天今天到来",
      subtitle: "我们使用语言模型、AI代理和广义人工智能来革命化科学研究和营销流程。",
      item1: {
        title: "AI驱动研究",
        description: "应用人工智能优化和加速研究流程"
      },
      item2: {
        title: "自动化研究工作流",
        description: "复杂研究和实验室程序的智能自动化"
      },
      item3: {
        title: "综合科学基础设施",
        description: "用于开展高级实验的自有实验室和现代技术设施"
      },
      item4: {
        title: "协作创新网络",
        description: "与大学、研究机构和工业合作伙伴的合作"
      },
      item5: {
        title: "定制模型微调",
        description: "在组织数据上训练AI模型以理解公司特定语言和方法论"
      },
      item6: {
        title: "神经营销智能",
        description: "AI支持的神经营销研究 - 深入分析消费者反应"
      },
      item7: {
        title: "认知代理团队",
        description: "执行研究和分析任务的自主AI代理团队"
      },
      item8: {
        title: "模型评估与验证",
        description: "测试框架确保模型准确性、一致性和领域特定理解"
      },
      item9: {
        title: "智能实验平台",
        description: "使用AI进行远程研究实验的平台"
      }
    },
    aiSection: {
      col1: {
        subtitle: "AI与神经科学的融合",
        p1: "人工智能与神经科学研究的融合正在为理解人类认知和行为开辟前所未有的机会。通过将先进的AI算法与神经科学方法论相结合，我们现在可以解码以前无法分析的大脑活动中的复杂模式。机器学习模型可以实时处理大量神经数据，识别神经活动与认知过程之间的微妙相关性。",
        p2: "这种协同作用使研究人员能够预测行为反应，理解决策机制，并以惊人的精度揭示人类思维的复杂运作。AI在神经科学中的整合不仅加速了研究——它从根本上改变了我们理解意识、记忆形成和学习神经基础的方法。"
      },
      col2: {
        subtitle: "AI作为探索工具",
        p1: "人工智能不仅革新了我们分析数据的方式，也革新了我们探索科学问题的方式。传统的研究方法正在被AI驱动的工具增强，这些工具可以生成假设、模拟复杂场景并发现人类研究人员可能忽略的模式。",
        p2: "深度学习算法可以导航多维数据空间，发现隐藏的关系并建议新的研究方向。这些工具使科学家能够以前所未有的规模探索\"假设\"场景，同时测试数千个假设并识别最有前途的研究途径。这种探索能力将AI从单纯的分析工具转变为协作研究伙伴，最终加速所有学科的科学发现和创新步伐。"
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
      title: "组织知识模型",
      subtitle: "构建认知架构，改变组织捕获、处理和利用其集体智能的方式",
      item1: {
        title: "企业本体架构",
        description: "构建结构化组织知识模型，定义实体、关系和业务逻辑。我们创建语义框架，捕捉公司独特的领域专业知识、决策模式和运营规则。"
      },
      item2: {
        title: "数据采购与标注",
        description: "为训练定制AI模型提供专业的数据采购和标注服务。我们为计算机视觉、自然语言处理和生成式AI应用提供高质量、特定领域的训练数据集。专家标注确保各种数据类型的准确性和一致性。"
      },
      item3: {
        title: "组织认知模型",
        description: "混合符号-语言模型，作为组织的数字大脑。不是聊天机器人，而是理解上下文、关系和组织推理模式的综合认知架构。"
      },
      item4: {
        title: "定制模型微调",
        description: "在组织数据上训练大型语言模型，创建AI说公司语言，理解方法论，遵循特定规则和术语。针对业务上下文量身定制的领域智能。"
      },
      item5: {
        title: "模型评估与验证",
        description: "严格的测试框架确保认知模型的一致性、上下文理解和准确的领域理解。我们验证模型保持逻辑连贯性，不在特定上下文中混淆POS和UX等概念。"
      },
      item6: {
        title: "自适应学习系统",
        description: "具有记忆层（基于令牌和长期）的认知架构，从新案例中持续学习，适应不断发展的组织知识，并通过真实世界的互动不断改进。"
      },
      item7: {
        title: "知识模型版本控制",
        description: "企业级组织认知模型的版本控制。跟踪更改，管理更新，必要时回滚，并在业务知识演变时保持AI基础设施的一致性。"
      },
      item8: {
        title: "AI驱动研究自动化",
        description: "优化和加速研究工作流的智能系统——从实验设计到数据分析。自主代理处理复杂分析任务，同时保持科学严谨性和方法论一致性。"
      },
      item9: {
        title: "集成科学基础设施",
        description: "我们自有的实验室和现代技术设施，配备AI增强的测量系统、自动数据收集和实时分析能力，用于开展高级神经心理学实验。"
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
          description: "我们通过战略合作伙伴关系和商业化专业知识将科学发现转化为市场就绪的解决方案。我们广泛的网络将研究人员与行业领袖、投资者和实施合作伙伴联系起来。我们促进技术转让，提供业务发展支持，并创建从实验室发现到实际应用的途径，确保研究创新产生切实的经济和社会影响。"
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
      subtitle: "与神经心理学研究和AI领域的领导者开始合作",
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
      subtitle: "从研究先驱到AI创新领导者",
      paragraph1: "公司由在营销、广告和研究交叉领域工作的专业人士创立。最初，我们主要专注于研究项目，但突破时刻发生在2005年，当时我们为波兰电信创建了眼动追踪实验室。这一经验为我们打开了新的可能性——从那时起，我们系统地扩展了我们的产品，包括全面的研究解决方案：从咨询、基础设施建设到实施和培训。",
      paragraph2: "2006年，我们完成了第一次为卢布林玛丽亚·居里-斯克沃多夫斯卡大学提供研究设备和培训的交付。从那时起，我们在整个波兰为公司、科研机构和研究机构交付了300多个眼动追踪系统，进行了400多项研究。",
      paragraph3: "除了典型的消费者和心理研究，我们还在不寻常的环境中进行了令人着迷的项目：惩教设施、航空公司驾驶舱、与特种部队操作员、空中交通管制员以及分析林业机械的人体工程学。具有挑战性的非标准项目是我们的专长——我们热切期待下一个项目。",
      paragraph4: "自2017年以来，我们一直在将人工智能引入研究过程，自2023年以来，我们一直在使用和开发自己的工具进行分析和建模，以及管理公司流程，包括营销和销售。今天，专门的代理——例如创建研究报价或分析特定UX问题的代理——作为项目团队成员发挥作用。我们目前帮助客户在科学和消费者研究以及营销和销售流程中实施AI解决方案。"
    }
  }
};