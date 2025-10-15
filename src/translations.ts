export interface Translation {
  nav: {
    about: string;
    services: string;
    innovations: string;
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
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      innovations: "Innovations",
      cooperation: "Cooperation",
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
        title: "Predictive Analytics & Modeling",
        description: "Predictive models supporting business decisions and forecasting consumer behaviors"
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
        title: "Data-Centric Research Design",
        description: "Data-driven research approach – from experiment design to result analysis"
      },
      item9: {
        title: "Smart Experimentation Platforms",
        description: "Platforms for remote conducting and managing research experiments using AI"
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
    cooperation: {
      title: "Academic Alliance",
      subtitle: "We build bridges between science and practical application of technology, cooperating with leading universities and research and development units in Poland and abroad.",
      columns: {
        technology: {
          title: "Technology & Methodologies for Science",
          description: "We provide cutting-edge technological solutions and research methodologies that enable scientific breakthroughs. Our advanced AI systems, automated research platforms, and precision measurement tools support researchers in conducting innovative studies with unprecedented accuracy and efficiency.\n We develop custom solutions tailored to specific research needs, integrating state-of-the-art technology with proven scientific methods."
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
    }
  },
  pl: {
    nav: {
      about: "O nas",
      services: "Usługi",
      innovations: "Innowacje",
      cooperation: "Współpraca",
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
        title: "Predictive Analytics & Modeling",
        description: "Modele predykcyjne wspierające decyzje biznesowe i prognozujące zachowania konsumenckie"
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
        title: "Data-Centric Research Design",
        description: "Podejście badawcze oparte na danych – od projektowania eksperymentów po analizę wyników"
      },
      item9: {
        title: "Smart Experimentation Platforms",
        description: "Platformy do zdalnego prowadzenia i zarządzania eksperymentami badawczymi z wykorzystaniem AI"
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
    }
  },
  zh: {
    nav: {
      about: "关于我们",
      services: "服务",
      innovations: "创新",
      cooperation: "合作",
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
        title: "预测分析与建模",
        description: "支持商业决策和预测消费者行为的预测模型"
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
        title: "数据中心研究设计",
        description: "数据驱动的研究方法 - 从实验设计到结果分析"
      },
      item9: {
        title: "智能实验平台",
        description: "使用AI进行远程研究实验的平台"
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
    }
  }
};