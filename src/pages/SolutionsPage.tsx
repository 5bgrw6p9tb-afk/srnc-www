import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Eye, Building2, GraduationCap, Users, Lightbulb, FlaskConical, MonitorCheck, Package, ShoppingCart, LayoutDashboard, Network, BookOpen, Presentation, Award } from 'lucide-react';
import { Translation } from '../translations';
import { SEOHead } from '../components/SEOHead';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SolutionsPageProps {
  t: Translation;
  currentLang: string;
}

function AnimatedSection({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const solutionsData = {
  en: {
    pageTitle: 'Our Solutions',
    pageSubtitle: 'Comprehensive research services from methodology design to laboratory implementation',
    sections: [
      {
        id: 'scientific-research',
        title: 'Scientific Research',
        subtitle: 'End-to-end research support for academic and R&D institutions',
        description: 'We provide comprehensive scientific research services including external project management for universities, methodology development, and scientific networking. Our team of experienced researchers supports institutions in designing, executing, and publishing high-impact studies.',
        icon: Microscope,
        color: '#2E455C',
        features: [
          { icon: Users, title: 'External Project Management', desc: 'Complete project coordination for universities and research institutions, from grant applications to final reporting' },
          { icon: FlaskConical, title: 'Methodology Development', desc: 'Custom research methodology design tailored to specific research questions and available resources' },
          { icon: Network, title: 'Scientific Networking', desc: 'Connecting researchers with industry partners, academic collaborators, and funding opportunities' },
          { icon: Lightbulb, title: 'Research Brokering', desc: 'Facilitating knowledge transfer between academia and business, identifying commercialization opportunities' }
        ]
      },
      {
        id: 'neuromarketing',
        title: 'Neuromarketing Research',
        subtitle: 'Data-driven insights into consumer behavior and decision-making',
        description: 'Our neuromarketing division combines eye-tracking, biometrics, and behavioral analysis to decode how consumers perceive, process, and respond to marketing stimuli. We help brands optimize their communication across all touchpoints.',
        icon: Eye,
        color: '#DB1500',
        features: [
          { icon: MonitorCheck, title: 'Advertising Research', desc: 'Testing TV commercials, digital ads, and print materials for attention capture, emotional engagement, and message retention' },
          { icon: ShoppingCart, title: 'Shopper Research', desc: 'In-store and online shopping behavior analysis, shelf optimization, and path-to-purchase studies' },
          { icon: LayoutDashboard, title: 'UX/CX Research', desc: 'Website, app, and digital product usability testing with eye-tracking and biometric validation' },
          { icon: Package, title: 'Packaging Research', desc: 'Pack design evaluation, shelf standout testing, and visual hierarchy optimization for packaging' }
        ]
      },
      {
        id: 'laboratory',
        title: 'Research Laboratory Development',
        subtitle: 'Design, build, and implement state-of-the-art research facilities',
        description: 'We specialize in creating turnkey research laboratories for universities, corporations, and research institutions. From initial concept to full operation, we handle every aspect of laboratory development including equipment selection, space design, and staff training.',
        icon: Building2,
        color: '#059669',
        features: [
          { icon: Lightbulb, title: 'Laboratory Design', desc: 'Custom laboratory layouts optimized for specific research methodologies and workflow efficiency' },
          { icon: FlaskConical, title: 'Equipment Integration', desc: 'Selection and integration of eye-trackers, EEG systems, biometric sensors, and behavioral observation tools' },
          { icon: MonitorCheck, title: 'Software Solutions', desc: 'Implementation of data collection, analysis, and visualization platforms tailored to research needs' },
          { icon: Users, title: 'Operational Support', desc: 'Ongoing technical support, maintenance, and equipment upgrades to ensure continuous operation' }
        ]
      },
      {
        id: 'training',
        title: 'Professional Training',
        subtitle: 'Building research competencies in organizations',
        description: 'Our training programs equip researchers, marketers, and UX professionals with practical skills in eye-tracking research, neuromarketing methodologies, and data analysis. We offer both standardized courses and customized training solutions.',
        icon: GraduationCap,
        color: '#7c3aed',
        features: [
          { icon: Eye, title: 'Eye-Tracking Fundamentals', desc: 'Comprehensive training on eye-tracking technology, study design, and data interpretation' },
          { icon: BookOpen, title: 'Research Methodology', desc: 'Academic-level courses on experimental design, statistical analysis, and research best practices' },
          { icon: Presentation, title: 'Workshops & Seminars', desc: 'Hands-on workshops on specific topics: neuromarketing, UX research, shopper insights' },
          { icon: Award, title: 'Certification Programs', desc: 'Professional certification in eye-tracking research and neuromarketing methodologies' }
        ]
      }
    ],
    cta: {
      title: 'Ready to Start?',
      subtitle: 'Contact us to discuss how we can support your research goals',
      button: 'Get in Touch'
    }
  },
  pl: {
    pageTitle: 'Nasze Rozwiazania',
    pageSubtitle: 'Kompleksowe uslugi badawcze od projektowania metodologii po wdrozenie laboratoriow',
    sections: [
      {
        id: 'scientific-research',
        title: 'Badania Naukowe',
        subtitle: 'Kompleksowe wsparcie badawcze dla instytucji akademickich i R&D',
        description: 'Swiadczymy kompleksowe uslugi badawcze obejmujace zewnetrzne zarzadzanie projektami dla uczelni, tworzenie metodologii oraz networking naukowy. Nasz zespol doswiadczonych badaczy wspiera instytucje w projektowaniu, realizacji i publikacji badan o wysokim wplywie.',
        icon: Microscope,
        color: '#2E455C',
        features: [
          { icon: Users, title: 'Zewnetrzne zarzadzanie projektami', desc: 'Kompletna koordynacja projektow dla uczelni i instytucji badawczych, od wnioskow grantowych po raportowanie koncowe' },
          { icon: FlaskConical, title: 'Tworzenie metodologii', desc: 'Projektowanie metodologii badawczej dopasowanej do konkretnych pytan badawczych i dostepnych zasobow' },
          { icon: Network, title: 'Networking naukowy', desc: 'Laczenie badaczy z partnerami przemyslowymi, wspolpracownikami akademickimi i mozliwosciami finansowania' },
          { icon: Lightbulb, title: 'Brokering naukowy', desc: 'Ulatwianie transferu wiedzy miedzy nauka a biznesem, identyfikacja mozliwosci komercjalizacji' }
        ]
      },
      {
        id: 'neuromarketing',
        title: 'Badania Neuromarketingowe',
        subtitle: 'Wglad w zachowania konsumenckie i procesy decyzyjne oparty na danych',
        description: 'Nasz dzial neuromarketingu laczy eye-tracking, biometrie i analize behawioralna, aby dekodowac jak konsumenci postrzegaja, przetwarzaja i reaguja na bodzce marketingowe. Pomagamy markom optymalizowac komunikacje we wszystkich punktach styku.',
        icon: Eye,
        color: '#DB1500',
        features: [
          { icon: MonitorCheck, title: 'Badania reklam', desc: 'Testowanie reklam telewizyjnych, cyfrowych i drukowanych pod katem przyciagania uwagi, zaangazowania emocjonalnego i zapamietywania przekazu' },
          { icon: ShoppingCart, title: 'Badania shopper', desc: 'Analiza zachowan zakupowych w sklepie i online, optymalizacja polek i badania sciezki zakupowej' },
          { icon: LayoutDashboard, title: 'Badania UX/CX', desc: 'Testy uzywalnosci stron, aplikacji i produktow cyfrowych z eye-trackingiem i walidacja biometryczna' },
          { icon: Package, title: 'Badania opakowan', desc: 'Ewaluacja projektow opakowan, testowanie wyrozniania sie na polce i optymalizacja hierarchii wizualnej' }
        ]
      },
      {
        id: 'laboratory',
        title: 'Budowa Laboratoriow Badawczych',
        subtitle: 'Projektowanie, budowa i wdrazanie nowoczesnych obiektow badawczych',
        description: 'Specjalizujemy sie w tworzeniu laboratoriow badawczych pod klucz dla uczelni, korporacji i instytucji badawczych. Od wstepnej koncepcji po pelne uruchomienie, zajmujemy sie kazdym aspektem rozwoju laboratorium, wlaczajac dobor sprzetu, projektowanie przestrzeni i szkolenie personelu.',
        icon: Building2,
        color: '#059669',
        features: [
          { icon: Lightbulb, title: 'Projektowanie laboratoriow', desc: 'Indywidualne uklady laboratoriow zoptymalizowane pod katem konkretnych metodologii badawczych i efektywnosci pracy' },
          { icon: FlaskConical, title: 'Integracja sprzetu', desc: 'Dobor i integracja eye-trackerow, systemow EEG, sensorow biometrycznych i narzedzi obserwacji behawioralnej' },
          { icon: MonitorCheck, title: 'Rozwiazania programowe', desc: 'Wdrozenie platform do zbierania, analizy i wizualizacji danych dostosowanych do potrzeb badawczych' },
          { icon: Users, title: 'Wsparcie operacyjne', desc: 'Ciagla pomoc techniczna, konserwacja i aktualizacje sprzetu zapewniajace nieprzerwane dzialanie' }
        ]
      },
      {
        id: 'training',
        title: 'Szkolenia Profesjonalne',
        subtitle: 'Budowanie kompetencji badawczych w organizacjach',
        description: 'Nasze programy szkoleniowe wyposaża badaczy, marketerow i specjalistow UX w praktyczne umiejetnosci w zakresie badan eye-trackingowych, metodologii neuromarketingowych i analizy danych. Oferujemy zarowno kursy standardowe, jak i indywidualne rozwiazania szkoleniowe.',
        icon: GraduationCap,
        color: '#7c3aed',
        features: [
          { icon: Eye, title: 'Podstawy eye-trackingu', desc: 'Kompleksowe szkolenie z technologii eye-tracking, projektowania badan i interpretacji danych' },
          { icon: BookOpen, title: 'Metodologia badan', desc: 'Kursy na poziomie akademickim z projektowania eksperymentow, analizy statystycznej i najlepszych praktyk badawczych' },
          { icon: Presentation, title: 'Warsztaty i seminaria', desc: 'Praktyczne warsztaty na konkretne tematy: neuromarketing, badania UX, shopper insights' },
          { icon: Award, title: 'Programy certyfikacji', desc: 'Profesjonalna certyfikacja w zakresie badan eye-trackingowych i metodologii neuromarketingowych' }
        ]
      }
    ],
    cta: {
      title: 'Gotowy, zeby zaczac?',
      subtitle: 'Skontaktuj sie z nami, aby omowic jak mozemy wesprzec Twoje cele badawcze',
      button: 'Skontaktuj sie'
    }
  },
  zh: {
    pageTitle: '我们的解决方案',
    pageSubtitle: '从方法论设计到实验室实施的综合研究服务',
    sections: [
      {
        id: 'scientific-research',
        title: '科学研究',
        subtitle: '为学术和研发机构提供端到端的研究支持',
        description: '我们提供全面的科学研究服务，包括大学的外部项目管理、方法论开发和科学网络。我们经验丰富的研究团队支持机构设计、执行和发表具有高影响力的研究。',
        icon: Microscope,
        color: '#2E455C',
        features: [
          { icon: Users, title: '外部项目管理', desc: '为大学和研究机构提供完整的项目协调，从拨款申请到最终报告' },
          { icon: FlaskConical, title: '方法论开发', desc: '根据具体研究问题和可用资源定制研究方法设计' },
          { icon: Network, title: '科学网络', desc: '将研究人员与行业合作伙伴、学术合作者和资金机会联系起来' },
          { icon: Lightbulb, title: '研究中介', desc: '促进学术界与商业之间的知识转移，识别商业化机会' }
        ]
      },
      {
        id: 'neuromarketing',
        title: '神经营销研究',
        subtitle: '基于数据的消费者行为和决策洞察',
        description: '我们的神经营销部门结合眼动追踪、生物识别和行为分析，解码消费者如何感知、处理和响应营销刺激。我们帮助品牌优化所有接触点的沟通。',
        icon: Eye,
        color: '#DB1500',
        features: [
          { icon: MonitorCheck, title: '广告研究', desc: '测试电视广告、数字广告和印刷材料的注意力捕获、情感参与和信息保留' },
          { icon: ShoppingCart, title: '购物者研究', desc: '店内和在线购物行为分析、货架优化和购买路径研究' },
          { icon: LayoutDashboard, title: 'UX/CX研究', desc: '网站、应用程序和数字产品可用性测试，配合眼动追踪和生物识别验证' },
          { icon: Package, title: '包装研究', desc: '包装设计评估、货架突出测试和包装视觉层次优化' }
        ]
      },
      {
        id: 'laboratory',
        title: '研究实验室开发',
        subtitle: '设计、建造和实施最先进的研究设施',
        description: '我们专注于为大学、企业和研究机构创建交钥匙研究实验室。从初始概念到全面运营，我们处理实验室开发的各个方面，包括设备选择、空间设计和员工培训。',
        icon: Building2,
        color: '#059669',
        features: [
          { icon: Lightbulb, title: '实验室设计', desc: '针对特定研究方法和工作流程效率优化的定制实验室布局' },
          { icon: FlaskConical, title: '设备集成', desc: '眼动追踪器、脑电图系统、生物传感器和行为观察工具的选择和集成' },
          { icon: MonitorCheck, title: '软件解决方案', desc: '根据研究需求定制的数据收集、分析和可视化平台实施' },
          { icon: Users, title: '运营支持', desc: '持续的技术支持、维护和设备升级，确保持续运营' }
        ]
      },
      {
        id: 'training',
        title: '专业培训',
        subtitle: '在组织中建立研究能力',
        description: '我们的培训计划为研究人员、营销人员和用户体验专业人员提供眼动追踪研究、神经营销方法和数据分析的实用技能。我们提供标准化课程和定制培训解决方案。',
        icon: GraduationCap,
        color: '#7c3aed',
        features: [
          { icon: Eye, title: '眼动追踪基础', desc: '眼动追踪技术、研究设计和数据解释的全面培训' },
          { icon: BookOpen, title: '研究方法论', desc: '实验设计、统计分析和研究最佳实践的学术级课程' },
          { icon: Presentation, title: '研讨会和讲座', desc: '特定主题的实践研讨会：神经营销、用户体验研究、购物者洞察' },
          { icon: Award, title: '认证项目', desc: '眼动追踪研究和神经营销方法的专业认证' }
        ]
      }
    ],
    cta: {
      title: '准备开始了吗？',
      subtitle: '联系我们讨论如何支持您的研究目标',
      button: '联系我们'
    }
  },
  ja: {
    pageTitle: '私たちのソリューション',
    pageSubtitle: '方法論設計から研究所実装までの包括的な研究サービス',
    sections: [
      {
        id: 'scientific-research',
        title: '科学研究',
        subtitle: '学術およびR&D機関向けのエンドツーエンド研究サポート',
        description: '大学向けの外部プロジェクト管理、方法論開発、科学ネットワーキングを含む包括的な科学研究サービスを提供しています。経験豊富な研究者チームが、インパクトの高い研究の設計、実行、出版において機関をサポートします。',
        icon: Microscope,
        color: '#2E455C',
        features: [
          { icon: Users, title: '外部プロジェクト管理', desc: '大学・研究機関向けの完全なプロジェクト調整、助成金申請から最終報告まで' },
          { icon: FlaskConical, title: '方法論開発', desc: '特定の研究課題と利用可能なリソースに合わせたカスタム研究方法論設計' },
          { icon: Network, title: '科学ネットワーキング', desc: '研究者を産業パートナー、学術協力者、資金調達機会と結びつける' },
          { icon: Lightbulb, title: '研究ブローカリング', desc: '学術界とビジネス間の知識移転を促進し、商業化の機会を特定' }
        ]
      },
      {
        id: 'neuromarketing',
        title: 'ニューロマーケティング研究',
        subtitle: '消費者行動と意思決定へのデータ駆動型インサイト',
        description: '当社のニューロマーケティング部門は、アイトラッキング、バイオメトリクス、行動分析を組み合わせ、消費者がマーケティング刺激をどのように知覚、処理、反応するかを解読します。すべてのタッチポイントでブランドのコミュニケーション最適化を支援します。',
        icon: Eye,
        color: '#DB1500',
        features: [
          { icon: MonitorCheck, title: '広告研究', desc: 'テレビCM、デジタル広告、印刷物の注目度、感情的エンゲージメント、メッセージ記憶のテスト' },
          { icon: ShoppingCart, title: 'ショッパー研究', desc: '店舗およびオンラインでの購買行動分析、棚最適化、購買経路研究' },
          { icon: LayoutDashboard, title: 'UX/CX研究', desc: 'アイトラッキングと生体認証による、ウェブサイト、アプリ、デジタル製品のユーザビリティテスト' },
          { icon: Package, title: 'パッケージ研究', desc: 'パッケージデザイン評価、棚での目立ち度テスト、パッケージの視覚的階層最適化' }
        ]
      },
      {
        id: 'laboratory',
        title: '研究ラボ開発',
        subtitle: '最先端の研究施設の設計、構築、実装',
        description: '大学、企業、研究機関向けのターンキー研究ラボの構築を専門としています。初期コンセプトから完全運用まで、機器選定、空間設計、スタッフトレーニングを含むラボ開発のあらゆる側面を担当します。',
        icon: Building2,
        color: '#059669',
        features: [
          { icon: Lightbulb, title: 'ラボ設計', desc: '特定の研究方法論とワークフロー効率に最適化されたカスタムラボレイアウト' },
          { icon: FlaskConical, title: '機器統合', desc: 'アイトラッカー、EEGシステム、生体センサー、行動観察ツールの選定と統合' },
          { icon: MonitorCheck, title: 'ソフトウェアソリューション', desc: '研究ニーズに合わせたデータ収集、分析、可視化プラットフォームの実装' },
          { icon: Users, title: '運用サポート', desc: '継続的な技術サポート、メンテナンス、機器アップグレードで継続的な運用を確保' }
        ]
      },
      {
        id: 'training',
        title: 'プロフェッショナルトレーニング',
        subtitle: '組織における研究能力の構築',
        description: '当社のトレーニングプログラムは、研究者、マーケター、UX専門家にアイトラッキング研究、ニューロマーケティング方法論、データ分析の実践的スキルを提供します。標準化されたコースとカスタマイズされたトレーニングソリューションの両方を提供しています。',
        icon: GraduationCap,
        color: '#7c3aed',
        features: [
          { icon: Eye, title: 'アイトラッキング基礎', desc: 'アイトラッキング技術、研究設計、データ解釈の包括的トレーニング' },
          { icon: BookOpen, title: '研究方法論', desc: '実験デザイン、統計分析、研究ベストプラクティスに関するアカデミックレベルのコース' },
          { icon: Presentation, title: 'ワークショップ・セミナー', desc: '特定のトピックに関する実践的ワークショップ：ニューロマーケティング、UX研究、ショッパーインサイト' },
          { icon: Award, title: '認定プログラム', desc: 'アイトラッキング研究とニューロマーケティング方法論の専門認定' }
        ]
      }
    ],
    cta: {
      title: '始める準備はできましたか？',
      subtitle: '研究目標をどのようにサポートできるか、お問い合わせください',
      button: 'お問い合わせ'
    }
  }
};

const seoContent: Record<string, { title: string; description: string; keywords: string }> = {
  en: {
    title: 'Research Solutions | Eye Tracking | Neuromarketing | Laboratory Development | SRNC',
    description: 'Comprehensive research solutions: scientific research & project management, neuromarketing studies (advertising, shopper, UX/CX, packaging), research laboratory development, and professional eye tracking training.',
    keywords: 'eye tracking solutions, neuromarketing research, research laboratory development, eye tracking training, scientific research services, shopper research, UX research, advertising research, packaging research, cognitive science research, visual attention studies, EEG research services, biometric research, consumer behavior research'
  },
  pl: {
    title: 'Rozwiazania Badawcze | Eye Tracking | Neuromarketing | Budowa Laboratoriow | SRNC',
    description: 'Kompleksowe rozwiazania badawcze: badania naukowe i zarzadzanie projektami, badania neuromarketingowe (reklama, shopper, UX/CX, opakowania), budowa laboratoriow badawczych oraz szkolenia z eye trackingu.',
    keywords: 'rozwiazania eye tracking, badania neuromarketingowe, budowa laboratorium badawczego, szkolenia eye tracking, uslugi badawcze, badania shopper, badania UX, badania reklam, badania opakowan, badania kognitywne, badania uwagi wzrokowej, badania EEG, badania biometryczne'
  },
  zh: {
    title: '研究解决方案 | 眼动追踪 | 神经营销 | 实验室建设 | SRNC',
    description: '全面的研究解决方案：科学研究与项目管理、神经营销研究（广告、购物者、用户体验、包装）、研究实验室建设和专业眼动追踪培训。',
    keywords: '眼动追踪解决方案, 神经营销研究, 研究实验室建设, 眼动追踪培训, 科学研究服务, 购物者研究, 用户体验研究, 广告研究, 包装研究'
  },
  ja: {
    title: '研究ソリューション | アイトラッキング | ニューロマーケティング | ラボ開発 | SRNC',
    description: '包括的な研究ソリューション：科学研究とプロジェクト管理、ニューロマーケティング研究（広告、ショッパー、UX/CX、パッケージ）、研究ラボ開発、専門的なアイトラッキングトレーニング。',
    keywords: 'アイトラッキングソリューション, ニューロマーケティング研究, 研究ラボ開発, アイトラッキングトレーニング, 科学研究サービス, ショッパー研究, UX研究, 広告研究, パッケージ研究'
  }
};

export function SolutionsPage({ t, currentLang }: SolutionsPageProps) {
  const data = solutionsData[currentLang as keyof typeof solutionsData] || solutionsData.en;
  const seo = seoContent[currentLang] || seoContent.en;

  return (
    <div className="pt-20">
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath="/solutions"
      />
      <section className="relative py-24 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(219,21,0,0.15),transparent)]" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 relative">
          <AnimatedSection className="max-w-[900px] mx-auto text-center">
            <span className="inline-block text-[13px] text-[#DB1500] font-semibold tracking-wider uppercase mb-4">Solutions</span>
            <h1 className="text-[48px] sm:text-[64px] lg:text-[72px] font-[800] leading-[1.05] tracking-tight mb-6">
              {data.pageTitle}
            </h1>
            <p className="text-[18px] sm:text-[20px] leading-[1.6] text-zinc-400">
              {data.pageSubtitle}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {data.sections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`relative py-24 ${sectionIndex % 2 === 0 ? 'bg-zinc-950' : 'bg-zinc-900/30'}`}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
              <AnimatedSection>
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="h-16 w-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${section.color}20` }}
                  >
                    <section.icon className="h-8 w-8" style={{ color: section.color }} />
                  </div>
                  <div>
                    <h2 className="text-[36px] sm:text-[42px] font-[700] leading-[1.1] tracking-tight">{section.title}</h2>
                  </div>
                </div>
                <p className="text-[17px] leading-[1.5] text-zinc-300 mb-4">{section.subtitle}</p>
                <p className="text-[15px] leading-[1.8] text-zinc-500">{section.description}</p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {section.features.map((feature, i) => (
                    <div
                      key={i}
                      className="group p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-300"
                    >
                      <div
                        className="h-10 w-10 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${section.color}15` }}
                      >
                        <feature.icon className="h-5 w-5" style={{ color: section.color }} />
                      </div>
                      <h4 className="text-[15px] font-[600] mb-2 leading-tight">{feature.title}</h4>
                      <p className="text-[13px] leading-[1.7] text-zinc-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}

      <section className="relative py-24 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
          <AnimatedSection className="text-center">
            <h2 className="text-[36px] sm:text-[48px] font-[700] leading-[1.1] tracking-tight mb-4">{data.cta.title}</h2>
            <p className="text-[17px] leading-[1.7] text-zinc-400 max-w-[600px] mx-auto mb-8">{data.cta.subtitle}</p>
            <Link
              to="/contact"
              className="group px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-100 transition-all rounded-full font-semibold text-[15px] inline-flex items-center justify-center gap-3"
            >
              {data.cta.button}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
