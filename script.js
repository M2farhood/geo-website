/* ========================================
   GEO Website — JavaScript
   Language switching, canvas animation, scroll effects
   ======================================== */

// ── Translations ──
const translations = {
    ar: {
        nav_about: 'عن GEO',
        nav_services: 'خدماتنا',
        nav_methodology: 'منهجيتنا',
        nav_research: 'الأبحاث',
        nav_team: 'الفريق',
        nav_contact: 'تواصل معنا',
        hero_title: 'حلول تقنية نخبوية',
        hero_subtitle: 'أول شركة حلول تقنية نخبوية متعددة التخصصات في العراق',
        hero_m1: 'اندماج', hero_m2: 'تشخيص', hero_m3: 'تصميم', hero_m4: 'تنفيذ',
        hero_cta: 'اكتشف خدماتنا',
        about_badge: 'من نحن',
        about_title: 'نوع جديد من شركات التقنية',
        about_p1: 'شركة GEO هي نوع جديد من شركات التقنية، صُمّمت خصيصاً للسوق العراقي. لا تبيع برامج جاهزة ولا تقدّم خدمات تقنية مجزّأة، بل تتحمّل المسؤولية الكاملة عن التحوّل الرقمي للمؤسسة من الداخل إلى الخارج.',
        about_p2: 'نحن نندمج داخل المؤسسة العميلة، ندرس سير عملها الحقيقي، نشخّص الفجوات، ثم نصمّم وننفّذ أنظمة ملائمة — لا أدوات عامّة مفروضة على بيئات لا تناسبها.',
        stat_1_num: '٧+', stat_1_label: 'تخصصات تقنية',
        stat_2_num: '٤', stat_2_label: 'مراحل منهجية',
        stat_3_num: '١٠٠٪', stat_3_label: 'ملكية التحوّل الرقمي',
        services_badge: 'خدماتنا',
        services_title: 'ثلاث ركائز أساسية',
        services_desc: 'قدرات متخصصة تعمل معاً لتقديم تحوّل رقمي شامل',
        svc_ai_title: 'الذكاء الاصطناعي',
        svc_ai_desc: 'نماذج تعلّم آلي مخصّصة، أنظمة مراقبة وتحسين لحظية تمكّن صانع القرار من معرفة ما يجري في مؤسسته بنقرات — كأنه يتحدث مع ChatGPT خاص بمؤسسته.',
        svc_ai_t1: 'تحليلات تنبؤية', svc_ai_t2: 'معالجة لغة طبيعية', svc_ai_t3: 'رؤية حاسوبية', svc_ai_t4: 'مراقبة لحظية',
        svc_gis_title: 'نظم المعلومات الجغرافية',
        svc_gis_desc: 'منصات GIS مخصّصة بالكامل لبيانات العميل الجغرافية — خرائط تفاعلية، لوحات قيادة مكانية، وتحليل بيانات جغرافية متكامل مع أنظمة الذكاء الاصطناعي والبنية التحتية.',
        svc_gis_t1: 'خرائط تفاعلية', svc_gis_t2: 'تحليل مكاني', svc_gis_t3: 'لوحات قيادة جغرافية', svc_gis_t4: 'تكامل بيانات',
        svc_cyber_title: 'الأمن السيبراني',
        svc_cyber_desc: 'حماية شاملة من اليوم الأول — تقييم تهديدات، بنية أمنية متينة، مراقبة مستمرة، واستجابة للحوادث. لا نبني الأنظمة فحسب، بل نحميها.',
        svc_cyber_t1: 'تقييم التهديدات', svc_cyber_t2: 'حماية الأنظمة', svc_cyber_t3: 'مراقبة مستمرة', svc_cyber_t4: 'استجابة للحوادث',
        svc_fs_title: 'تطوير برمجيات متكامل',
        svc_fs_desc: 'أنظمة كاملة: واجهة أمامية، خلفية، API، تحليلات وتقارير',
        svc_infra_title: 'هندسة البنية التحتية',
        svc_infra_desc: 'خوادم، قواعد بيانات، استضافة سحابية ومحلية — بنية متينة وقابلة للتوسّع',
        svc_dt_title: 'استراتيجية التحوّل الرقمي',
        svc_dt_desc: 'ملكية كاملة للتحوّل الرقمي — من التشخيص إلى التنفيذ والدعم المستمر',
        method_badge: 'منهجيتنا',
        method_title: 'ما يجعل GEO مختلفة جذرياً',
        method_desc: 'قبل كتابة سطر واحد من الكود، نفهم كيف تعمل مؤسستك فعلياً',
        m_step1_title: 'الاندماج', m_step1_desc: 'نرسل متخصصينا إلى داخل مؤسستك. يجلسون مع كل قسم، يراقبون العمليات اليومية، يوثّقون سير العمل بالتفصيل — لأسبوعين إلى ثلاثة أسابيع.', m_step1_en: 'EMBED',
        m_step2_title: 'التشخيص', m_step2_desc: 'يجتمع الفريق كاملاً لمراجعة التقرير التشخيصي. نحدّد أين يمكن للذكاء الاصطناعي وGIS والأمن السيبراني أن تخلق أكبر قيمة، ونضع خطة تدخّل مرتّبة.', m_step2_en: 'DIAGNOSE',
        m_step3_title: 'التصميم', m_step3_desc: 'كل متخصص يبني في مجاله: الذكاء الاصطناعي، GIS، الأمن السيبراني، البنية التحتية — بتركيز تام وبدون تداخل. النتيجة: جودة أعلى وسرعة أكبر.', m_step3_en: 'DESIGN',
        m_step4_title: 'التنفيذ', m_step4_desc: 'نسلّم نظاماً مكتملاً مع توثيق شامل وتدريب عملي. ثم نبقى — دعم تقني مستمر يضمن أن النظام يتطوّر مع احتياجاتك.', m_step4_en: 'DELIVER',
        research_badge: 'الأبحاث والابتكار',
        research_title: 'ما وراء الخدمات — نحو الابتكار',
        research_desc: 'GEO لا تبني شركة لتبقى بنفس الحجم — بل منصة للتوسع في أكثر مجالات التقنية تقدماً',
        r_quantum_title: 'الحوسبة الكمومية', r_quantum_desc: 'استكشاف التطبيقات العملية للخوارزميات الكمومية في التحسين والمحاكاة واتخاذ القرار',
        r_models_title: 'نماذج اقتصادية كمومية', r_models_desc: 'نماذج اقتصادية مبنية على الحوسبة الكمومية للتنبّؤ وتقييم المخاطر والتخطيط الاستراتيجي',
        r_ai_title: 'نمذجة ذكاء اصطناعي متقدمة', r_ai_desc: 'دفع حدود ما يمكن أن يحققه الذكاء الاصطناعي في القطاعات ذات الصلة بالسوق العراقي والإقليمي',
        r_product_title: 'مخرجات قابلة للتسويق', r_product_desc: 'أبحاث تولّد إيرادات — حلول مُنتَجة وجاهزة للبيع، ليست مجرد تمارين أكاديمية',
        cap_badge: 'ما وراء العرض',
        cap_title: 'ما شاهدته مجرد مثال — إليك ما نبنيه حقاً',
        cap_desc: 'العروض التفاعلية أعلاه هي نماذج مبسّطة. القدرات الحقيقية لـ GEO تمتد أبعد بكثير.',
        cap_ai_title: 'قوة الذكاء الاصطناعي',
        cap_ai_1: 'كشف الأنماط الشاذة قبل وقوعها — تنبؤي وليس تفاعلي',
        cap_ai_2: 'واجهة محادثة ذكية لأي قاعدة بيانات بلغة طبيعية',
        cap_ai_3: 'رؤية حاسوبية لمراقبة الجودة في الخطوط الصناعية',
        cap_ai_4: 'توليد تقارير تلقائية من بيانات المؤسسة الحية',
        cap_ai_5: 'تدريب نماذج تعلّم آلي مخصّصة لاحتياجات العميل',
        cap_gis_title: 'قوة نظم المعلومات الجغرافية',
        cap_gis_1: 'خرائط بنية تحتية على مستوى المدينة بالكامل',
        cap_gis_2: 'تتبع الأسطول والأصول بالزمن الحقيقي',
        cap_gis_3: 'لوحات مراقبة بيئية وتحليل الأراضي',
        cap_gis_4: 'تحليل استخدام الأراضي وتخطيط المناطق',
        cap_gis_5: 'أنظمة دعم القرار المكاني للحكومات والشركات',
        cap_cyber_title: 'قوة الأمن السيبراني',
        cap_cyber_1: 'اختبار اختراق شامل وتقييم الثغرات',
        cap_cyber_2: 'مركز عمليات أمنية يعمل على مدار الساعة',
        cap_cyber_3: 'استجابة فورية للحوادث والتحليل الجنائي الرقمي',
        cap_cyber_4: 'تصميم بنية أمنية من الصفر للمؤسسات',
        cap_cyber_5: 'ضمان الامتثال للمعايير التنظيمية والدولية',
        cap_integration: 'القوة الحقيقية تكمن في تكامل هذه التخصصات الثلاثة — لا شركة في العراق تجمعها تحت سقف واحد.',
        team_badge: 'الفريق',
        team_title: 'الجودة فوق الكمّ',
        team_desc: 'كل شخص يُختار لتميّزه الواضح في تخصصه المحدّد — لا أحد يعمل خارج مجال خبرته',
        t_pm: 'مدير المشاريع', t_pm_desc: 'العمود الفقري التشغيلي — تنسيق المشاريع وضمان التسليم',
        t_ai: 'مهندس الذكاء الاصطناعي', t_ai_desc: 'تصميم وبناء نماذج التعلّم الآلي والأنظمة الذكية',
        t_gis: 'أخصائي نظم المعلومات الجغرافية', t_gis_desc: 'بناء منصات GIS وتحليل البيانات المكانية',
        t_ba: 'محلل الأعمال', t_ba_desc: 'عيون GEO وآذانها داخل مؤسسة العميل',
        t_infra: 'مهندس البنية التحتية', t_infra_desc: 'خوادم، قواعد بيانات، شبكات — كل ما يعمل تحت السطح',
        t_cyber: 'أخصائي الأمن السيبراني', t_cyber_desc: 'حماية جميع الأنظمة — تقييم التهديدات والمراقبة والاستجابة',
        cta_title: 'ابدأ رحلة التحوّل الرقمي',
        cta_desc: 'GEO لا تبيع برمجيات — GEO تبني مستقبل المؤسسات',
        cta_btn_email: 'تواصل عبر البريد',
        footer_tagline: 'الخطوة الأولى نحو بناء مستقبل العراق التقني تبدأ من هنا',
        footer_rights: 'جميع الحقوق محفوظة',
    },
    en: {
        nav_about: 'About',
        nav_services: 'Services',
        nav_methodology: 'Methodology',
        nav_research: 'Research',
        nav_team: 'Team',
        nav_contact: 'Contact',
        hero_title: 'Elite Technology Solutions',
        hero_subtitle: 'The First Multidisciplinary Elite Technology Solutions Company in Iraq',
        hero_m1: 'Embed', hero_m2: 'Diagnose', hero_m3: 'Design', hero_m4: 'Deliver',
        hero_cta: 'Explore Our Services',
        about_badge: 'About Us',
        about_title: 'A New Kind of Technology Company',
        about_p1: 'GEO is a new kind of technology company built for the Iraqi market — one that doesn\'t just sell software or provide fragmented IT services, but takes full ownership of an organization\'s digital transformation from the inside out.',
        about_p2: 'We embed inside our clients, study their real workflows, diagnose the gaps, and then design and deliver systems that fit — not generic tools forced into environments where they don\'t belong.',
        stat_1_num: '7+', stat_1_label: 'Technical Disciplines',
        stat_2_num: '4', stat_2_label: 'Methodology Phases',
        stat_3_num: '100%', stat_3_label: 'Digital Transformation Ownership',
        services_badge: 'Our Services',
        services_title: 'Three Core Pillars',
        services_desc: 'Specialized capabilities working together to deliver comprehensive digital transformation',
        svc_ai_title: 'Artificial Intelligence',
        svc_ai_desc: 'Custom ML models and real-time monitoring systems that let decision-makers see what\'s happening across their entire organization in clicks — like having a ChatGPT for their company.',
        svc_ai_t1: 'Predictive Analytics', svc_ai_t2: 'Natural Language Processing', svc_ai_t3: 'Computer Vision', svc_ai_t4: 'Real-time Monitoring',
        svc_gis_title: 'Geographic Information Systems',
        svc_gis_desc: 'Fully customized GIS platforms — interactive maps, spatial dashboards, and geographic data analysis integrated with AI systems and infrastructure.',
        svc_gis_t1: 'Interactive Maps', svc_gis_t2: 'Spatial Analysis', svc_gis_t3: 'Geographic Dashboards', svc_gis_t4: 'Data Integration',
        svc_cyber_title: 'Cybersecurity',
        svc_cyber_desc: 'Comprehensive protection from day one — threat assessment, robust security architecture, continuous monitoring, and incident response. We don\'t just build systems, we protect them.',
        svc_cyber_t1: 'Threat Assessment', svc_cyber_t2: 'System Protection', svc_cyber_t3: 'Continuous Monitoring', svc_cyber_t4: 'Incident Response',
        svc_fs_title: 'Full-Stack Development',
        svc_fs_desc: 'Complete systems: front-end, back-end, API, analytics, and reporting',
        svc_infra_title: 'Infrastructure Engineering',
        svc_infra_desc: 'Servers, databases, cloud and on-premise hosting — robust and scalable',
        svc_dt_title: 'Digital Transformation Strategy',
        svc_dt_desc: 'Full ownership of digital transformation — from diagnosis to delivery and ongoing support',
        method_badge: 'Our Methodology',
        method_title: 'What Makes GEO Fundamentally Different',
        method_desc: 'Before writing a single line of code, we understand how your organization actually works',
        m_step1_title: 'Embed', m_step1_desc: 'We send our specialists into your organization. They sit with every department, observe daily operations, and document workflows in detail — for two to three weeks.', m_step1_en: 'EMBED',
        m_step2_title: 'Diagnose', m_step2_desc: 'The full team convenes to review the diagnostic report. We identify where AI, GIS, and cybersecurity can create the most value, and build a prioritized intervention plan.', m_step2_en: 'DIAGNOSE',
        m_step3_title: 'Design', m_step3_desc: 'Each specialist builds in their domain: AI, GIS, cybersecurity, infrastructure — with complete focus and zero overlap. The result: higher quality and faster delivery.', m_step3_en: 'DESIGN',
        m_step4_title: 'Deliver', m_step4_desc: 'We deliver a complete system with comprehensive documentation and hands-on training. Then we stay — ongoing technical support ensures the system evolves with your needs.', m_step4_en: 'DELIVER',
        research_badge: 'Research & Innovation',
        research_title: 'Beyond Services — Toward Innovation',
        research_desc: 'GEO is not building a company to stay the same size — it\'s building a platform for continuous expansion into the most advanced areas of technology',
        r_quantum_title: 'Quantum Computing', r_quantum_desc: 'Exploring practical applications of quantum algorithms for optimization, simulation, and decision-making',
        r_models_title: 'Quantum Economic Models', r_models_desc: 'Custom quantum-based economic models for forecasting, risk assessment, and strategic planning',
        r_ai_title: 'Advanced AI Modeling', r_ai_desc: 'Pushing the boundaries of what AI can accomplish in industry verticals relevant to the Iraqi and regional markets',
        r_product_title: 'Marketable Output', r_product_desc: 'Research that generates revenue — productized solutions ready to sell, not just academic exercises',
        cap_badge: 'Beyond the Demo',
        cap_title: 'What You Saw Is Just a Sample — Here\'s What We Really Build',
        cap_desc: 'The interactive demos above are simplified prototypes. GEO\'s real capabilities extend far beyond.',
        cap_ai_title: 'The Power of AI',
        cap_ai_1: 'Anomaly detection before it happens — predictive, not reactive',
        cap_ai_2: 'Natural language chat interface for any database',
        cap_ai_3: 'Computer vision for quality control on industrial lines',
        cap_ai_4: 'Automated report generation from live enterprise data',
        cap_ai_5: 'Custom ML model training tailored to client needs',
        cap_gis_title: 'The Power of GIS',
        cap_gis_1: 'City-scale infrastructure mapping',
        cap_gis_2: 'Real-time fleet and asset tracking',
        cap_gis_3: 'Environmental monitoring and land analysis dashboards',
        cap_gis_4: 'Land-use planning and zoning analysis',
        cap_gis_5: 'Spatial decision support systems for governments and enterprises',
        cap_cyber_title: 'The Power of Cybersecurity',
        cap_cyber_1: 'Comprehensive penetration testing and vulnerability assessment',
        cap_cyber_2: 'Round-the-clock Security Operations Center',
        cap_cyber_3: 'Instant incident response and digital forensics',
        cap_cyber_4: 'Enterprise security architecture from scratch',
        cap_cyber_5: 'Regulatory and international compliance assurance',
        cap_integration: 'The real power lies in integrating these three disciplines — no company in Iraq brings them under one roof.',
        team_badge: 'The Team',
        team_title: 'Quality Over Quantity',
        team_desc: 'Each person is chosen for demonstrable excellence in their specific discipline — no one works outside their area of expertise',
        t_pm: 'Project Manager', t_pm_desc: 'The operational backbone — project coordination and delivery assurance',
        t_ai: 'AI Engineer', t_ai_desc: 'Design and build machine learning models and intelligent systems',
        t_gis: 'GIS Specialist', t_gis_desc: 'Build GIS platforms and analyze spatial data',
        t_ba: 'Business Analyst', t_ba_desc: 'GEO\'s eyes and ears inside the client\'s organization',
        t_infra: 'Infrastructure Engineer', t_infra_desc: 'Servers, databases, networks — everything that runs beneath the surface',
        t_cyber: 'Cybersecurity Specialist', t_cyber_desc: 'Securing all systems — threat assessment, monitoring, and response',
        cta_title: 'Start Your Digital Transformation',
        cta_desc: 'GEO doesn\'t sell software — GEO builds the future of organizations',
        cta_btn_email: 'Contact Us',
        footer_tagline: 'The first step toward building Iraq\'s technology future starts here',
        footer_rights: 'All rights reserved',
    }
};

let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage();
}

function applyLanguage() {
    const html = document.documentElement;
    const body = document.body;
    const toggle = document.getElementById('lang-toggle');

    // Set direction and lang
    html.lang = currentLang;
    html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';

    // Update button text
    toggle.textContent = currentLang === 'ar' ? 'EN' : 'عربي';

    // Update page title
    document.title = currentLang === 'ar' ? 'GEO — حلول تقنية نخبوية' : 'GEO — Elite Technology Solutions';

    // Translate all elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

// ── Canvas: GIS Map + AI Neural Animation ──
function initCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height, time = 0;
    const GOLD = { r: 200, g: 168, b: 78 };
    const g = (a) => `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${a})`;

    // ── City nodes (represent real Iraqi cities on the map) ──
    const cityData = [
        { name: 'Baghdad', lat: 33.31, lon: 44.37, size: 6, primary: true },
        { name: 'Basra', lat: 30.51, lon: 47.78, size: 4.5, primary: true },
        { name: 'Erbil', lat: 36.19, lon: 44.01, size: 4.5, primary: true },
        { name: 'Mosul', lat: 36.34, lon: 43.12, size: 4, primary: false },
        { name: 'Najaf', lat: 32.00, lon: 44.34, size: 3.5, primary: false },
        { name: 'Karbala', lat: 32.62, lon: 44.02, size: 3, primary: false },
        { name: 'Kirkuk', lat: 35.47, lon: 44.39, size: 3.5, primary: false },
        { name: 'Sulaymaniyah', lat: 35.56, lon: 45.43, size: 3, primary: false },
        { name: 'Nasiriyah', lat: 31.04, lon: 46.26, size: 3, primary: false },
        { name: 'Amarah', lat: 31.84, lon: 47.15, size: 2.5, primary: false },
        { name: 'Tikrit', lat: 34.61, lon: 43.68, size: 2.5, primary: false },
        { name: 'Samawah', lat: 31.32, lon: 45.28, size: 2.5, primary: false },
    ];

    // Connections (AI neural links between cities)
    const connections = [
        [0, 1], [0, 2], [0, 3], [0, 4], [0, 6],  // Baghdad hub
        [1, 8], [1, 9], [2, 3], [2, 7], [3, 10],  // Secondary
        [4, 5], [6, 7], [6, 10], [8, 11], [5, 11], // Tertiary
    ];

    let cities = [];
    let dataFlows = [];

    // ── Map projection: lat/lon → canvas coordinates ──
    // Map bounds (covers Iraq region with padding)
    const mapBounds = { latMin: 29.5, latMax: 37.5, lonMin: 41.5, lonMax: 49.0 };

    function project(lat, lon) {
        const px = ((lon - mapBounds.lonMin) / (mapBounds.lonMax - mapBounds.lonMin));
        const py = 1 - ((lat - mapBounds.latMin) / (mapBounds.latMax - mapBounds.latMin));
        // Center the map on the canvas with margins
        const marginX = width * 0.12;
        const marginY = height * 0.1;
        const mapW = width - marginX * 2;
        const mapH = height - marginY * 2;
        return {
            x: marginX + px * mapW,
            y: marginY + py * mapH
        };
    }

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        // Rebuild projected positions
        cities = cityData.map((c, i) => {
            const pos = project(c.lat, c.lon);
            return { ...c, x: pos.x, y: pos.y, phase: i * 0.7, idx: i };
        });
        createDataFlows();
    }

    function createDataFlows() {
        dataFlows = [];
        connections.forEach(([from, to]) => {
            // 1–2 particles per connection
            const count = 1 + (cities[from].primary && cities[to].primary ? 1 : 0);
            for (let i = 0; i < count; i++) {
                dataFlows.push({
                    from, to,
                    t: Math.random(),
                    speed: 0.0015 + Math.random() * 0.003,
                    size: 1.5 + Math.random() * 1.5,
                    reverse: Math.random() > 0.5,
                });
            }
        });
    }

    // ── Draw: Clean lat/lon grid ──
    function drawGrid() {
        ctx.lineWidth = 0.5;
        // Latitude lines (every 1 degree)
        for (let lat = 30; lat <= 37; lat++) {
            const p1 = project(lat, mapBounds.lonMin);
            const p2 = project(lat, mapBounds.lonMax);
            const isWhole = lat % 2 === 0;
            ctx.strokeStyle = g(isWhole ? 0.06 : 0.025);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            // Label
            if (isWhole && width > 600) {
                ctx.font = '9px Inter, monospace';
                ctx.fillStyle = g(0.1);
                ctx.fillText(`${lat}°N`, p1.x - 36, p1.y + 3);
            }
        }
        // Longitude lines (every 1 degree)
        for (let lon = 42; lon <= 48; lon++) {
            const p1 = project(mapBounds.latMax, lon);
            const p2 = project(mapBounds.latMin, lon);
            const isWhole = lon % 2 === 0;
            ctx.strokeStyle = g(isWhole ? 0.06 : 0.025);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            if (isWhole && width > 600) {
                ctx.font = '9px Inter, monospace';
                ctx.fillStyle = g(0.1);
                ctx.fillText(`${lon}°E`, p1.x - 10, p1.y - 8);
            }
        }
    }

    // ── Draw: Simplified Iraq border outline ──
    function drawIraqOutline() {
        // Simplified Iraq border coordinates
        const border = [
            [29.1, 47.7], [30.0, 48.0], [30.5, 47.8], [31.0, 47.7],
            [32.0, 47.4], [33.0, 46.0], [33.7, 45.8], [34.5, 45.5],
            [35.0, 45.7], [35.8, 45.4], [36.3, 45.3], [37.1, 44.8],
            [37.3, 44.2], [37.1, 43.5], [36.8, 43.0], [36.5, 42.5],
            [36.8, 42.0], [37.1, 42.4], [37.3, 42.2], [37.1, 41.3],
            [36.0, 41.2], [35.5, 41.0], [34.5, 41.2], [33.5, 41.5],
            [33.0, 41.6], [32.5, 42.0], [32.0, 42.5], [31.5, 42.8],
            [31.0, 43.5], [30.5, 44.0], [30.0, 44.5], [29.5, 45.0],
            [29.0, 46.0], [28.8, 47.0], [29.1, 47.7],
        ];

        ctx.beginPath();
        border.forEach(([lat, lon], i) => {
            const p = project(lat, lon);
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        ctx.strokeStyle = g(0.12);
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Subtle fill
        ctx.fillStyle = g(0.02);
        ctx.fill();
    }

    // ── Draw: City markers ──
    function drawCities() {
        cities.forEach(c => {
            const pulse = 0.7 + 0.3 * Math.sin(time * 0.8 + c.phase);
            const r = c.size * pulse;

            // Outer glow for primary cities
            if (c.primary) {
                const glowR = r * 5;
                const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, glowR);
                grad.addColorStop(0, g(0.1 * pulse));
                grad.addColorStop(1, g(0));
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(c.x, c.y, glowR, 0, Math.PI * 2);
                ctx.fill();

                // Slow scan ring
                const scanPhase = (time * 0.3 + c.phase) % (Math.PI * 2);
                const scanT = scanPhase / (Math.PI * 2);
                const scanR = scanT * 35;
                ctx.beginPath();
                ctx.arc(c.x, c.y, scanR, 0, Math.PI * 2);
                ctx.strokeStyle = g((1 - scanT) * 0.1);
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }

            // City dot
            ctx.beginPath();
            ctx.arc(c.x, c.y, r, 0, Math.PI * 2);
            ctx.fillStyle = g(c.primary ? 0.7 * pulse : 0.4 * pulse);
            ctx.fill();

            // Outer ring
            ctx.beginPath();
            ctx.arc(c.x, c.y, r + 1.5, 0, Math.PI * 2);
            ctx.strokeStyle = g(c.primary ? 0.4 : 0.2);
            ctx.lineWidth = 0.6;
            ctx.stroke();

            // City name label
            if (width > 600) {
                ctx.font = c.primary ? 'bold 10px Inter, sans-serif' : '8px Inter, sans-serif';
                ctx.fillStyle = g(c.primary ? 0.25 : 0.12);
                ctx.fillText(c.name, c.x + r + 6, c.y + 3);
            }
        });
    }

    // ── Draw: AI neural connections between cities ──
    function drawConnections() {
        connections.forEach(([fromIdx, toIdx]) => {
            const from = cities[fromIdx];
            const to = cities[toIdx];
            if (!from || !to) return;

            // Faint connection line
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            // Gentle curve
            const mx = (from.x + to.x) / 2;
            const my = (from.y + to.y) / 2;
            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const cx = mx + dy * 0.12;
            const cy = my - dx * 0.12;
            ctx.quadraticCurveTo(cx, cy, to.x, to.y);

            const isPrimary = from.primary && to.primary;
            ctx.strokeStyle = g(isPrimary ? 0.08 : 0.04);
            ctx.lineWidth = isPrimary ? 0.8 : 0.5;
            ctx.stroke();
        });
    }

    // ── Draw: AI data particles flowing along connections ──
    function drawDataFlows() {
        dataFlows.forEach(p => {
            const from = cities[p.reverse ? p.to : p.from];
            const to = cities[p.reverse ? p.from : p.to];
            if (!from || !to) return;

            const mx = (from.x + to.x) / 2;
            const my = (from.y + to.y) / 2;
            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const cx = mx + dy * 0.12;
            const cy = my - dx * 0.12;

            // Position on bezier
            const t = p.t;
            const invT = 1 - t;
            const px = invT * invT * from.x + 2 * invT * t * cx + t * t * to.x;
            const py = invT * invT * from.y + 2 * invT * t * cy + t * t * to.y;

            // Glow
            const glowR = p.size * 4;
            const grad = ctx.createRadialGradient(px, py, 0, px, py, glowR);
            grad.addColorStop(0, g(0.35));
            grad.addColorStop(1, g(0));
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(px, py, glowR, 0, Math.PI * 2);
            ctx.fill();

            // Core
            ctx.beginPath();
            ctx.arc(px, py, p.size, 0, Math.PI * 2);
            ctx.fillStyle = g(0.8);
            ctx.fill();

            // Advance
            p.t += p.speed;
            if (p.t >= 1) {
                p.t = 0;
                p.reverse = Math.random() > 0.5;
            }
        });
    }

    // ── Draw: Subtle rotating globe (top-left corner) ──
    let globeAngle = 0;
    function drawGlobe() {
        const cx = width * 0.1;
        const cy = height * 0.2;
        const r = Math.min(width, height) * 0.1;

        // Outer circle
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = g(0.06);
        ctx.lineWidth = 0.6;
        ctx.stroke();

        // Meridians
        for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI + globeAngle;
            const rx = Math.abs(Math.cos(angle)) * r;
            ctx.beginPath();
            ctx.ellipse(cx, cy, Math.max(rx, 0.5), r, 0, 0, Math.PI * 2);
            ctx.strokeStyle = g(0.03 + 0.02 * Math.abs(Math.cos(angle)));
            ctx.lineWidth = 0.4;
            ctx.stroke();
        }

        // Equator
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, 2, 0, 0, Math.PI * 2);
        ctx.strokeStyle = g(0.06);
        ctx.lineWidth = 0.5;
        ctx.stroke();

        globeAngle += 0.002;
    }

    // ── Main draw loop ──
    function draw() {
        ctx.clearRect(0, 0, width, height);

        drawGrid();
        drawIraqOutline();
        drawConnections();
        drawDataFlows();
        drawCities();
        drawGlobe();

        time += 0.016;
        requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
}

// ── Scroll Effects ──
function initScrollEffects() {
    const navbar = document.getElementById('navbar');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll reveal
    const revealElements = document.querySelectorAll('.service-card, .method-step, .research-card, .team-card, .stat-item, .about-text p, .cap-pillar');
    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    // Trigger SVG animation for capability pillars
                    if (entry.target.classList.contains('cap-pillar')) {
                        entry.target.classList.add('animate');
                    }
                }, parseInt(delay));
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(el => observer.observe(el));
}

// ── Mobile Menu ──
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.remove('active');
}

// ── Smooth Scroll for nav links ──
document.addEventListener('DOMContentLoaded', () => {
    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.addEventListener('click', () => closeMobileMenu());
    });
});

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    initScrollEffects();
    applyLanguage(); // Apply default language
});
