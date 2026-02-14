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

// ── Canvas GIS & AI Animation ──
function initCanvas() {
    const canvas = document.getElementById('heroCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height, animationId, time = 0;
    const GOLD = { r: 200, g: 168, b: 78 };
    const g = (a) => `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${a})`;

    // --- State ---
    let markers = [];
    let dataParticles = [];
    let globeAngle = 0;

    function resize() {
        width = canvas.width = canvas.offsetWidth;
        height = canvas.height = canvas.offsetHeight;
        createMarkers();
        createDataParticles();
    }

    // ── GIS Map Markers ──
    function createMarkers() {
        const count = Math.max(6, Math.floor((width * height) / 80000));
        markers = [];
        // Place markers with some margin and good spread
        const cols = Math.ceil(Math.sqrt(count * (width / height)));
        const rows = Math.ceil(count / cols);
        const cellW = width / cols;
        const cellH = height / rows;
        for (let i = 0; i < count; i++) {
            const col = i % cols;
            const row = Math.floor(i / cols);
            markers.push({
                x: cellW * (col + 0.2 + Math.random() * 0.6),
                y: cellH * (row + 0.2 + Math.random() * 0.6),
                r: 3 + Math.random() * 3,
                phase: Math.random() * Math.PI * 2,
                scanSpeed: 0.3 + Math.random() * 0.5,
                scanRadius: 20 + Math.random() * 30,
                hasScan: Math.random() > 0.4,
                importance: Math.random(), // 0-1
            });
        }
    }

    // ── AI Data Particles (travel between markers) ──
    function createDataParticles() {
        const count = Math.max(8, Math.floor(markers.length * 1.5));
        dataParticles = [];
        for (let i = 0; i < count; i++) {
            dataParticles.push(spawnParticle());
        }
    }

    function spawnParticle() {
        const fromIdx = Math.floor(Math.random() * markers.length);
        let toIdx = Math.floor(Math.random() * markers.length);
        if (toIdx === fromIdx) toIdx = (toIdx + 1) % markers.length;
        return {
            from: fromIdx,
            to: toIdx,
            t: Math.random(), // progress 0..1
            speed: 0.002 + Math.random() * 0.004,
            size: 1.5 + Math.random() * 2,
            brightness: 0.4 + Math.random() * 0.6,
        };
    }

    // ── Draw: Coordinate Grid ──
    function drawCoordinateGrid() {
        ctx.strokeStyle = g(0.03);
        ctx.lineWidth = 0.5;
        const spacing = 80;

        // Horizontal lines
        for (let y = spacing; y < height; y += spacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }
        // Vertical lines
        for (let x = spacing; x < width; x += spacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }

        // Tick marks at intersections (faint crosses)
        ctx.strokeStyle = g(0.06);
        ctx.lineWidth = 0.8;
        const tickLen = 4;
        for (let y = spacing; y < height; y += spacing) {
            for (let x = spacing; x < width; x += spacing) {
                ctx.beginPath();
                ctx.moveTo(x - tickLen, y);
                ctx.lineTo(x + tickLen, y);
                ctx.moveTo(x, y - tickLen);
                ctx.lineTo(x, y + tickLen);
                ctx.stroke();
            }
        }
    }

    // ── Draw: Terrain Contour Lines ──
    function drawTerrainGrid() {
        const lineCount = 12;
        const baseY = height * 0.15;
        const rangeY = height * 0.7;
        ctx.lineWidth = 0.8;

        for (let i = 0; i < lineCount; i++) {
            const frac = i / lineCount;
            const opacity = 0.04 + 0.06 * Math.sin(frac * Math.PI);
            ctx.strokeStyle = g(opacity);
            ctx.beginPath();
            const yBase = baseY + frac * rangeY;
            for (let x = 0; x <= width; x += 4) {
                const wave1 = Math.sin((x * 0.003) + time * 0.15 + i * 0.8) * 25;
                const wave2 = Math.sin((x * 0.007) + time * 0.08 + i * 1.3) * 12;
                const wave3 = Math.sin((x * 0.0015) + time * 0.05) * 35;
                const y = yBase + wave1 + wave2 + wave3;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }
    }

    // ── Draw: GIS Map Markers ──
    function drawMapMarkers() {
        markers.forEach((m, idx) => {
            const pulse = 0.6 + 0.4 * Math.sin(time * 1.5 + m.phase);

            // Scan ring (expanding circle)
            if (m.hasScan) {
                const scanT = ((time * m.scanSpeed + m.phase) % (Math.PI * 2)) / (Math.PI * 2);
                const scanR = scanT * m.scanRadius;
                const scanAlpha = (1 - scanT) * 0.12;
                ctx.beginPath();
                ctx.arc(m.x, m.y, scanR, 0, Math.PI * 2);
                ctx.strokeStyle = g(scanAlpha);
                ctx.lineWidth = 1;
                ctx.stroke();

                // Second ring offset
                const scanT2 = ((time * m.scanSpeed + m.phase + Math.PI) % (Math.PI * 2)) / (Math.PI * 2);
                const scanR2 = scanT2 * m.scanRadius;
                const scanAlpha2 = (1 - scanT2) * 0.08;
                ctx.beginPath();
                ctx.arc(m.x, m.y, scanR2, 0, Math.PI * 2);
                ctx.strokeStyle = g(scanAlpha2);
                ctx.stroke();
            }

            // Outer glow
            const glowGrad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 4);
            glowGrad.addColorStop(0, g(0.15 * pulse));
            glowGrad.addColorStop(1, g(0));
            ctx.fillStyle = glowGrad;
            ctx.beginPath();
            ctx.arc(m.x, m.y, m.r * 4, 0, Math.PI * 2);
            ctx.fill();

            // Pin marker (diamond shape for important, circle for others)
            if (m.importance > 0.7) {
                // Diamond shape
                const s = m.r * 1.2 * pulse;
                ctx.beginPath();
                ctx.moveTo(m.x, m.y - s * 1.4);
                ctx.lineTo(m.x + s, m.y);
                ctx.lineTo(m.x, m.y + s * 1.4);
                ctx.lineTo(m.x - s, m.y);
                ctx.closePath();
                ctx.fillStyle = g(0.6 * pulse);
                ctx.fill();
                ctx.strokeStyle = g(0.8);
                ctx.lineWidth = 0.8;
                ctx.stroke();
            } else {
                // Circle marker
                ctx.beginPath();
                ctx.arc(m.x, m.y, m.r * pulse, 0, Math.PI * 2);
                ctx.fillStyle = g(0.45 * pulse);
                ctx.fill();
                ctx.strokeStyle = g(0.5);
                ctx.lineWidth = 0.6;
                ctx.stroke();
            }

            // Tiny coordinate label (simulated)
            if (m.importance > 0.5 && width > 600) {
                ctx.font = '8px Inter, monospace';
                ctx.fillStyle = g(0.15);
                const lat = (33.3 + (m.y / height) * 2).toFixed(2);
                const lon = (44.3 + (m.x / width) * 1.5).toFixed(2);
                ctx.fillText(`${lat}°N ${lon}°E`, m.x + m.r + 6, m.y + 3);
            }
        });
    }

    // ── Draw: AI Neural Paths (data flowing between markers) ──
    function drawNeuralPaths() {
        dataParticles.forEach(p => {
            const from = markers[p.from];
            const to = markers[p.to];
            if (!from || !to) return;

            // Curved path control point
            const mx = (from.x + to.x) / 2;
            const my = (from.y + to.y) / 2;
            const dx = to.x - from.x;
            const dy = to.y - from.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const cx = mx + dy * 0.2;
            const cy = my - dx * 0.2;

            // Draw the path line (very faint)
            ctx.beginPath();
            ctx.moveTo(from.x, from.y);
            ctx.quadraticCurveTo(cx, cy, to.x, to.y);
            ctx.strokeStyle = g(0.04);
            ctx.lineWidth = 0.5;
            ctx.stroke();

            // Calculate particle position on bezier
            const t = p.t;
            const invT = 1 - t;
            const px = invT * invT * from.x + 2 * invT * t * cx + t * t * to.x;
            const py = invT * invT * from.y + 2 * invT * t * cy + t * t * to.y;

            // Particle glow
            const glowR = p.size * 3;
            const glowGrad = ctx.createRadialGradient(px, py, 0, px, py, glowR);
            glowGrad.addColorStop(0, g(0.3 * p.brightness));
            glowGrad.addColorStop(1, g(0));
            ctx.fillStyle = glowGrad;
            ctx.beginPath();
            ctx.arc(px, py, glowR, 0, Math.PI * 2);
            ctx.fill();

            // Particle core
            ctx.beginPath();
            ctx.arc(px, py, p.size, 0, Math.PI * 2);
            ctx.fillStyle = g(0.7 * p.brightness);
            ctx.fill();

            // Trail (fading recent positions)
            const trailLen = 5;
            for (let i = 1; i <= trailLen; i++) {
                const tt = Math.max(0, t - i * 0.015);
                const invTT = 1 - tt;
                const tx = invTT * invTT * from.x + 2 * invTT * tt * cx + tt * tt * to.x;
                const ty = invTT * invTT * from.y + 2 * invTT * tt * cy + tt * tt * to.y;
                const trailAlpha = 0.15 * (1 - i / trailLen) * p.brightness;
                ctx.beginPath();
                ctx.arc(tx, ty, p.size * (1 - i * 0.12), 0, Math.PI * 2);
                ctx.fillStyle = g(trailAlpha);
                ctx.fill();
            }

            // Advance
            p.t += p.speed;
            if (p.t >= 1) {
                // Respawn with new target
                p.from = p.to;
                p.to = Math.floor(Math.random() * markers.length);
                if (p.to === p.from) p.to = (p.to + 1) % markers.length;
                p.t = 0;
                p.speed = 0.002 + Math.random() * 0.004;
            }
        });
    }

    // ── Draw: Globe Wireframe (subtle, bottom-right area) ──
    function drawGlobeWireframe() {
        const cx = width * 0.85;
        const cy = height * 0.75;
        const r = Math.min(width, height) * 0.28;
        const meridians = 8;
        const parallels = 6;

        ctx.lineWidth = 0.5;

        // Outer circle
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = g(0.05);
        ctx.stroke();

        // Parallels (horizontal ellipses)
        for (let i = 1; i < parallels; i++) {
            const frac = (i / parallels) * 2 - 1; // -1 to 1
            const y = cy + frac * r;
            const ellipseR = Math.sqrt(1 - frac * frac) * r;
            ctx.beginPath();
            ctx.ellipse(cx, y, ellipseR, ellipseR * 0.05 + 1, 0, 0, Math.PI * 2);
            ctx.strokeStyle = g(0.03);
            ctx.stroke();
        }

        // Meridians (vertical ellipses rotating)
        for (let i = 0; i < meridians; i++) {
            const angle = (i / meridians) * Math.PI + globeAngle;
            const ellipseRx = Math.abs(Math.cos(angle)) * r;
            ctx.beginPath();
            ctx.ellipse(cx, cy, Math.max(ellipseRx, 1), r, 0, 0, Math.PI * 2);
            ctx.strokeStyle = g(0.03 + 0.015 * Math.abs(Math.cos(angle)));
            ctx.stroke();
        }

        // Equator (brighter)
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, r * 0.05 + 1, 0, 0, Math.PI * 2);
        ctx.strokeStyle = g(0.06);
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Some "data points" on the globe surface
        for (let i = 0; i < 12; i++) {
            const theta = (i * 0.83) + globeAngle * 2;
            const phi = (i * 1.23) % Math.PI;
            const gx = cx + Math.cos(theta) * Math.sin(phi) * r * 0.9;
            const gy = cy + Math.cos(phi) * r * 0.9;
            // Only render if "facing us" (front hemisphere based on cos)
            const facing = Math.sin(theta) * Math.sin(phi);
            if (facing > -0.2) {
                const alpha = 0.08 + facing * 0.12;
                ctx.beginPath();
                ctx.arc(gx, gy, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = g(Math.max(0.02, alpha));
                ctx.fill();
            }
        }

        globeAngle += 0.003;
    }

    // ── Draw: Floating data labels (HUD style) ──
    function drawHUDLabels() {
        if (width < 700) return; // Skip on mobile
        ctx.font = '9px Inter, monospace';

        const labels = [
            { x: width * 0.08, y: height * 0.12, text: 'LAYER: TERRAIN_ANALYSIS' },
            { x: width * 0.08, y: height * 0.15, text: 'STATUS: ACTIVE' },
            { x: width * 0.75, y: height * 0.1, text: 'AI_MODEL: SPATIAL_NET_v3' },
            { x: width * 0.75, y: height * 0.13, text: 'NODES: ' + markers.length },
            { x: width * 0.05, y: height * 0.92, text: 'GEO :: GIS + AI FUSION ENGINE' },
        ];

        labels.forEach((lbl, i) => {
            const flicker = 0.08 + 0.04 * Math.sin(time * 2 + i * 1.7);
            ctx.fillStyle = g(flicker);
            ctx.fillText(lbl.text, lbl.x, lbl.y);
        });
    }

    // ── Main draw loop ──
    function draw() {
        ctx.clearRect(0, 0, width, height);

        drawCoordinateGrid();
        drawTerrainGrid();
        drawGlobeWireframe();
        drawNeuralPaths();
        drawMapMarkers();
        drawHUDLabels();

        time += 0.016; // ~60fps time step
        animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener('resize', () => {
        resize();
    });
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
