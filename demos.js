/* ════════════════════════════════════════
   INTERACTIVE DEMOS — JavaScript
   Rollback: Remove this file + its link
   ════════════════════════════════════════ */

// ── Demo Translations ──
const demoText = {
    ar: {
        demo_ai_label: 'عرض تفاعلي',
        demo_ai_title: 'مركز قيادة الذكاء الاصطناعي',
        demo_ai_desc: 'هكذا تبدو لوحة قيادة مؤسستك مع GEO — مراقبة لحظية وتحليل ذكي فوري',
        demo_ai_tb: 'AI Command Center — شركة المثال',
        demo_gis_label: 'عرض تفاعلي',
        demo_gis_title: 'خريطة نظم المعلومات المكانية',
        demo_gis_desc: 'خريطة تفاعلية حقيقية توضح كيف يحلّل GEO البنية التحتية الرقمية جغرافياً',
        demo_gis_tb: 'GEO GIS Platform — بغداد، العراق',
        demo_cyber_label: 'عرض تفاعلي',
        demo_cyber_title: 'مركز عمليات الأمن السيبراني',
        demo_cyber_desc: 'مراقبة مستمرة، اكتشاف فوري، واستجابة لحظية — هكذا نحمي أنظمتكم',
        demo_cyber_tb: 'GEO Cybersecurity Operations Center',
        stat_ops: 'عمليات اليوم', stat_rev: 'إيرادات الشهر', stat_emp: 'الموظفون', stat_eff: 'الكفاءة',
        dept_ops: 'العمليات', dept_fin: 'المالية', dept_hr: 'الموارد البشرية', dept_log: 'اللوجستيات',
        dept_tasks: 'مهمة/يوم', dept_accuracy: 'الدقة', dept_hires: 'توظيف جديد', dept_ontime: 'تسليم في الوقت',
        chat_title: 'مساعد GEO الذكي',
        chat_welcome: 'مرحباً! أنا مساعد GEO الذكي. اختر سؤالاً أدناه لأقدم لك التحليل فوراً.',
        chat_reset: 'إعادة المحادثة',
        gis_layers: 'طبقات البيانات',
        gis_layer_infra: 'البنية التحتية',
        gis_layer_readiness: 'الجاهزية الرقمية',
        gis_layer_gov: 'المباني الحكومية',
        gis_info_title: 'معلومات الموقع',
        gis_info_empty: 'انقر على أي علامة في الخريطة لعرض التفاصيل',
        gis_readiness: 'الجاهزية الرقمية',
        gis_current: 'الأنظمة الحالية',
        gis_rec: 'توصية GEO',
        cyber_score_label: 'مستوى الأمان',
        cyber_threats: 'تهديدات تم صدّها', cyber_breaches: 'اختراقات', cyber_response: 'زمن الاستجابة', cyber_uptime: 'وقت التشغيل',
        cyber_feed_title: 'سجل التهديدات المباشر',
        demo_link_text: 'شاهد العرض التفاعلي ←',
        // Chat Q&A
        q1: 'كيف أداء قسم العمليات اليوم؟',
        a1: '<strong>أداء قسم العمليات اليوم جيد جداً</strong> بنسبة كفاءة 87%. تم إنجاز 342 مهمة من أصل 394 مطلوبة. هناك تحسن بنسبة 4.2% مقارنة بالأسبوع الماضي.<br><br><strong>ملاحظة:</strong> خط الإنتاج الثالث يعمل بطاقة 62% فقط — يُنصح بمراجعة جدولة الصيانة.',
        q2: 'ما هي المشكلة الأكبر هذا الأسبوع؟',
        a2: '<strong>المشكلة الرئيسية:</strong> تأخر في قسم اللوجستيات — نسبة التسليم في الوقت المحدد انخفضت إلى 78% (الهدف: 90%).<br><br><strong>السبب المحتمل:</strong> تعطّل مستودع الباب الشرقي ليومين.<br><br><strong>التوصية:</strong> إعادة توزيع الشحنات على مستودعَي المنصور والكرخ مؤقتاً.',
        q3: 'أعطني ملخص الأداء المالي',
        a3: '<strong>إيرادات الشهر الحالي:</strong> $284,500 (↑ 2.1% عن الشهر السابق).<br><strong>المصروفات:</strong> $198,200.<br><strong>صافي الربح:</strong> $86,300.<br><br><strong>أعلى مصدر إيرادات:</strong> عقود المشاريع الحكومية (43%).<br><strong>تنبيه:</strong> فاتورة مورّد المعدات (#4412) مستحقة خلال 5 أيام.',
        q4: 'كم عدد الموظفين الجدد هذا الشهر؟',
        a4: 'تم توظيف <strong>12 موظفاً جديداً</strong> هذا الشهر: 5 في العمليات، 3 في تقنية المعلومات، 2 في المالية، 2 في اللوجستيات.<br><br><strong>معدل الاحتفاظ بالموظفين:</strong> 94.2%.<br><strong>المتوسط الوطني:</strong> 81%.<br>أداء فريق الموارد البشرية يتفوق على المعايير القياسية.',
    },
    en: {
        demo_ai_label: 'LIVE DEMO',
        demo_ai_title: 'AI Command Center',
        demo_ai_desc: 'This is what your organization\'s dashboard looks like with GEO — real-time monitoring and instant intelligent analysis',
        demo_ai_tb: 'AI Command Center — Example Corp.',
        demo_gis_label: 'LIVE DEMO',
        demo_gis_title: 'GIS Interactive Map',
        demo_gis_desc: 'A real interactive map showing how GEO analyzes digital infrastructure geographically',
        demo_gis_tb: 'GEO GIS Platform — Baghdad, Iraq',
        demo_cyber_label: 'LIVE DEMO',
        demo_cyber_title: 'Cybersecurity Operations Center',
        demo_cyber_desc: 'Continuous monitoring, instant detection, and real-time response — this is how we protect your systems',
        demo_cyber_tb: 'GEO Cybersecurity Operations Center',
        stat_ops: 'Operations Today', stat_rev: 'Monthly Revenue', stat_emp: 'Employees', stat_eff: 'Efficiency',
        dept_ops: 'Operations', dept_fin: 'Finance', dept_hr: 'Human Resources', dept_log: 'Logistics',
        dept_tasks: 'tasks/day', dept_accuracy: 'accuracy', dept_hires: 'new hires', dept_ontime: 'on-time delivery',
        chat_title: 'GEO AI Assistant',
        chat_welcome: 'Hello! I\'m GEO\'s AI Assistant. Select a question below for instant analysis.',
        chat_reset: 'Reset Chat',
        gis_layers: 'Data Layers',
        gis_layer_infra: 'Infrastructure',
        gis_layer_readiness: 'Digital Readiness',
        gis_layer_gov: 'Government Buildings',
        gis_info_title: 'Location Info',
        gis_info_empty: 'Click any marker on the map to view details',
        gis_readiness: 'Digital Readiness',
        gis_current: 'Current Systems',
        gis_rec: 'GEO Recommendation',
        cyber_score_label: 'Security Level',
        cyber_threats: 'Threats Blocked', cyber_breaches: 'Breaches', cyber_response: 'Avg Response', cyber_uptime: 'Uptime',
        cyber_feed_title: 'Live Threat Feed',
        demo_link_text: 'See Interactive Demo →',
        q1: 'How is operations performing today?',
        a1: '<strong>Operations is performing very well today</strong> at 87% efficiency. 342 of 394 required tasks completed. This is a 4.2% improvement over last week.<br><br><strong>Note:</strong> Production line 3 is running at only 62% capacity — maintenance scheduling review recommended.',
        q2: 'What\'s the biggest problem this week?',
        a2: '<strong>Main issue:</strong> Logistics delay — on-time delivery dropped to 78% (target: 90%).<br><br><strong>Probable cause:</strong> Eastern Gate warehouse was down for 2 days.<br><br><strong>Recommendation:</strong> Temporarily redistribute shipments to Mansour and Karkh warehouses.',
        q3: 'Give me a financial summary',
        a3: '<strong>Current month revenue:</strong> $284,500 (↑ 2.1% from last month).<br><strong>Expenses:</strong> $198,200.<br><strong>Net profit:</strong> $86,300.<br><br><strong>Top revenue source:</strong> Government project contracts (43%).<br><strong>Alert:</strong> Equipment supplier invoice (#4412) due in 5 days.',
        q4: 'How many new hires this month?',
        a4: '<strong>12 new employees</strong> hired this month: 5 in Operations, 3 in IT, 2 in Finance, 2 in Logistics.<br><br><strong>Employee retention rate:</strong> 94.2%.<br><strong>National average:</strong> 81%.<br>HR team is outperforming industry benchmarks.',
    }
};

// ── Language System ──
function getDemoLang() {
    return document.documentElement.lang || 'ar';
}

function dt(key) {
    const lang = getDemoLang();
    return (demoText[lang] && demoText[lang][key]) || demoText.ar[key] || key;
}

function applyDemoLanguage() {
    document.querySelectorAll('[data-demo-i18n]').forEach(el => {
        const key = el.getAttribute('data-demo-i18n');
        const val = dt(key);
        if (val) el.textContent = val;
    });
    // Reset AI chat on language switch
    if (window._aiChatInitialized) resetAIChat();
    // Update GIS popups
    if (window._gisMap) refreshGISPopups();
    // Update threat feed
    if (window._cyberInitialized) restartThreatFeed();
}

const langObserver = new MutationObserver(() => applyDemoLanguage());

// ── GIS Map Data ──
const gisLocations = [
    { id: 1, lat: 33.2625, lng: 44.2346, name_ar: 'مطار بغداد الدولي', name_en: 'Baghdad Intl Airport', readiness: 'low', readiness_ar: 'منخفضة', readiness_en: 'Low', current_ar: 'سجلات يدوية للرحلات', current_en: 'Manual flight logs', rec_ar: 'نظام تتبع تلقائي + لوحة قيادة GIS', rec_en: 'Automated tracking + GIS dashboard' },
    { id: 2, lat: 33.315, lng: 44.375, name_ar: 'وزارة التخطيط', name_en: 'Ministry of Planning', readiness: 'medium', readiness_ar: 'متوسطة', readiness_en: 'Medium', current_ar: 'قاعدة بيانات أساسية', current_en: 'Basic database', rec_ar: 'تحليلات ذكاء اصطناعي + نمذجة تنبؤية', rec_en: 'AI analytics + predictive modeling' },
    { id: 3, lat: 33.2719, lng: 44.3816, name_ar: 'جامعة بغداد', name_en: 'University of Baghdad', readiness: 'high', readiness_ar: 'عالية', readiness_en: 'High', current_ar: 'بوابة طلابية + نظام تسجيل', current_en: 'Student portal + registration', rec_ar: 'منصة بيانات بحثية متقدمة', rec_en: 'Advanced research data platform' },
    { id: 4, lat: 33.345, lng: 44.385, name_ar: 'مدينة الطب', name_en: 'Baghdad Medical City', readiness: 'low', readiness_ar: 'منخفضة', readiness_en: 'Low', current_ar: 'سجلات ورقية', current_en: 'Paper-based records', rec_ar: 'سجلات صحية رقمية + خرائط GIS', rec_en: 'Digital health records + GIS mapping' },
    { id: 5, lat: 33.31, lng: 44.39, name_ar: 'وزارة النفط', name_en: 'Ministry of Oil', readiness: 'medium', readiness_ar: 'متوسطة', readiness_en: 'Medium', current_ar: 'أنظمة SCADA أساسية', current_en: 'Basic SCADA systems', rec_ar: 'مراقبة AI + صيانة تنبؤية', rec_en: 'AI monitoring + predictive maintenance' },
    { id: 6, lat: 33.312, lng: 44.387, name_ar: 'البنك المركزي العراقي', name_en: 'Central Bank of Iraq', readiness: 'medium', readiness_ar: 'متوسطة', readiness_en: 'Medium', current_ar: 'نظام مصرفي أساسي', current_en: 'Core banking system', rec_ar: 'تدقيق أمن سيبراني + كشف احتيال بالذكاء الاصطناعي', rec_en: 'Cybersecurity audit + AI fraud detection' },
    { id: 7, lat: 33.32, lng: 44.37, name_ar: 'أمانة بغداد', name_en: 'Baghdad Municipality', readiness: 'low', readiness_ar: 'منخفضة', readiness_en: 'Low', current_ar: 'سجلات يدوية', current_en: 'Manual records', rec_ar: 'خرائط GIS للبنية التحتية + نظام إدارة أصول', rec_en: 'GIS infrastructure mapping + asset management' },
    { id: 8, lat: 33.327, lng: 44.401, name_ar: 'مجلس النواب العراقي', name_en: 'Iraqi Parliament', readiness: 'low', readiness_ar: 'منخفضة', readiness_en: 'Low', current_ar: 'الحد الأدنى من تقنية المعلومات', current_en: 'Minimal IT', rec_ar: 'اتصالات مؤمّنة + إدارة وثائق رقمية', rec_en: 'Secure communications + digital document management' },
];

// ── Cybersecurity Threat Feed Data ──
const threatEvents = {
    ar: [
        { type: 'ok', text: '<strong>جدار الحماية:</strong> تم حجب IP مشبوه 185.220.xx.xx — محاولة مسح منافذ', time: '14:32:07' },
        { type: 'ok', text: '<strong>IDS:</strong> محاولة SQL Injection تم تحييدها — المصدر: واجهة API خارجية', time: '14:31:45' },
        { type: 'warn', text: '<strong>المصادقة:</strong> 3 محاولات تسجيل دخول فاشلة — الحساب: admin_finance', time: '14:31:22' },
        { type: 'ok', text: '<strong>التشفير:</strong> تجديد شهادة TLS — الخادم: db-primary', time: '14:30:58' },
        { type: 'ok', text: '<strong>التحديثات:</strong> تطبيق تحديث أمني — 12 نظاماً تم تحديثه', time: '14:30:15' },
        { type: 'warn', text: '<strong>الشبكة:</strong> ارتفاع غير عادي في حركة البيانات — القطاع: IoT-Zone-3', time: '14:29:44' },
        { type: 'ok', text: '<strong>النسخ الاحتياطي:</strong> نسخ احتياطي كامل — 2.4TB — سلامة البيانات مؤكدة', time: '14:29:01' },
        { type: 'ok', text: '<strong>الصلاحيات:</strong> مراجعة صلاحيات الوصول المميز — 14 حساباً تم تدقيقه', time: '14:28:33' },
        { type: 'critical', text: '<strong>تنبيه حرج:</strong> محاولة وصول غير مصرّح لقاعدة البيانات — تم الحجب فوراً', time: '14:28:10' },
        { type: 'ok', text: '<strong>الفحص:</strong> فحص ثغرات شامل مكتمل — 0 ثغرات حرجة', time: '14:27:45' },
    ],
    en: [
        { type: 'ok', text: '<strong>Firewall:</strong> Blocked suspicious IP 185.220.xx.xx — Port scan detected', time: '14:32:07' },
        { type: 'ok', text: '<strong>IDS:</strong> SQL injection attempt neutralized — Source: External API', time: '14:31:45' },
        { type: 'warn', text: '<strong>Auth:</strong> 3 failed login attempts — Account: admin_finance', time: '14:31:22' },
        { type: 'ok', text: '<strong>Encryption:</strong> TLS certificate renewed — Server: db-primary', time: '14:30:58' },
        { type: 'ok', text: '<strong>Patch:</strong> Security update applied — 12 systems updated', time: '14:30:15' },
        { type: 'warn', text: '<strong>Network:</strong> Unusual traffic spike detected — Segment: IoT-Zone-3', time: '14:29:44' },
        { type: 'ok', text: '<strong>Backup:</strong> Full backup completed — 2.4TB — Integrity verified', time: '14:29:01' },
        { type: 'ok', text: '<strong>Access:</strong> Privileged access reviewed — 14 accounts audited', time: '14:28:33' },
        { type: 'critical', text: '<strong>Critical Alert:</strong> Unauthorized database access attempt — Blocked immediately', time: '14:28:10' },
        { type: 'ok', text: '<strong>Scan:</strong> Full vulnerability scan complete — 0 critical vulnerabilities', time: '14:27:45' },
    ]
};

// ── Number Counter Animation ──
function animateCounter(el, target, suffix = '') {
    const duration = 1800;
    const start = performance.now();
    const isFloat = target % 1 !== 0;
    function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const current = isFloat ? (target * ease).toFixed(1) : Math.floor(target * ease);
        el.textContent = Number(current).toLocaleString() + suffix;
        if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
}

// ════════════════════════════════
// AI COMMAND CENTER
// ════════════════════════════════
function initAIDemo() {
    const section = document.getElementById('demo-ai');
    if (!section) return;

    // Animate counters on scroll
    const counters = section.querySelectorAll('.dash-stat-value[data-target]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(c => {
                    const target = parseFloat(c.dataset.target);
                    const suffix = c.dataset.suffix || '';
                    animateCounter(c, target, suffix);
                });
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });
    observer.observe(section);

    // Animate mini chart bars
    section.querySelectorAll('.mini-chart .bar').forEach(bar => {
        const h = bar.dataset.height;
        bar.style.height = '4px';
        setTimeout(() => { bar.style.height = h + '%'; }, 300);
    });

    // Chat setup
    setupAIChat();
    window._aiChatInitialized = true;
}

function setupAIChat() {
    const btns = document.querySelectorAll('.chat-suggest-btn');
    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => handleChatQuestion(i + 1, btn));
    });
    const resetBtn = document.querySelector('.chat-reset-btn');
    if (resetBtn) resetBtn.addEventListener('click', resetAIChat);
}

function handleChatQuestion(num, btn) {
    const lang = getDemoLang();
    const q = demoText[lang]['q' + num];
    const a = demoText[lang]['a' + num];
    const messages = document.querySelector('.chat-messages');
    btn.disabled = true;

    // User message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.textContent = q;
    messages.appendChild(userMsg);

    // Typing indicator
    const typing = document.createElement('div');
    typing.className = 'typing-dots';
    typing.innerHTML = '<span></span><span></span><span></span>';
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;

    // Bot response after delay
    setTimeout(() => {
        typing.remove();
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-msg bot';
        botMsg.innerHTML = a;
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 1500);
}

function resetAIChat() {
    const messages = document.querySelector('.chat-messages');
    if (!messages) return;
    messages.innerHTML = `<div class="chat-msg bot" data-demo-i18n="chat_welcome">${dt('chat_welcome')}</div>`;
    document.querySelectorAll('.chat-suggest-btn').forEach(btn => {
        btn.disabled = false;
        const qKey = btn.dataset.q;
        if (qKey) btn.textContent = dt(qKey);
    });
}

// ════════════════════════════════
// GIS LIVE MAP
// ════════════════════════════════
function initGISDemo() {
    if (typeof L === 'undefined') {
        console.warn('Leaflet not loaded, GIS demo disabled');
        return;
    }
    const mapEl = document.getElementById('gisMap');
    if (!mapEl) return;

    const map = L.map('gisMap', {
        center: [33.31, 44.37],
        zoom: 12,
        zoomControl: true,
        scrollWheelZoom: false,
    });
    window._gisMap = map;

    // Dark tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 18,
    }).addTo(map);

    // Custom gold marker icon
    const goldIcon = L.divIcon({
        className: 'geo-marker',
        html: `<div style="width:14px;height:14px;background:#C8A84E;border:2px solid #E4CC7A;border-radius:50%;box-shadow:0 0 12px rgba(200,168,78,0.5);"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
    });

    // Readiness zones (circle overlays)
    const readinessColors = { low: '#F87171', medium: '#FBBF24', high: '#34D399' };
    window._gisZones = [];
    gisLocations.forEach(loc => {
        const zone = L.circle([loc.lat, loc.lng], {
            radius: 1200,
            color: readinessColors[loc.readiness],
            fillColor: readinessColors[loc.readiness],
            fillOpacity: 0.08,
            weight: 1,
            opacity: 0.3,
        });
        zone._geoId = loc.id;
        window._gisZones.push(zone);
    });

    // Markers
    window._gisMarkers = [];
    gisLocations.forEach(loc => {
        const lang = getDemoLang();
        const name = lang === 'ar' ? loc.name_ar : loc.name_en;
        const marker = L.marker([loc.lat, loc.lng], { icon: goldIcon })
            .bindPopup(`<strong>${name}</strong>`, { className: 'geo-popup' });
        marker._geoData = loc;
        marker.on('click', () => showGISInfo(loc));
        marker.addTo(map);
        window._gisMarkers.push(marker);
    });

    // Layer toggles
    window._gisLayerState = { infra: false, readiness: true, gov: true };
    toggleGISReadiness(true); // Show readiness zones initially
    setupGISLayers();
}

function setupGISLayers() {
    document.querySelectorAll('.gis-layer-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const layer = btn.dataset.layer;
            btn.classList.toggle('active');
            if (layer === 'readiness') toggleGISReadiness(btn.classList.contains('active'));
            if (layer === 'gov') toggleGISMarkers(btn.classList.contains('active'));
        });
    });
}

function toggleGISReadiness(show) {
    if (!window._gisMap || !window._gisZones) return;
    window._gisZones.forEach(z => {
        if (show) z.addTo(window._gisMap);
        else window._gisMap.removeLayer(z);
    });
}

function toggleGISMarkers(show) {
    if (!window._gisMap || !window._gisMarkers) return;
    window._gisMarkers.forEach(m => {
        if (show) m.addTo(window._gisMap);
        else window._gisMap.removeLayer(m);
    });
}

function showGISInfo(loc) {
    const lang = getDemoLang();
    const detail = document.querySelector('.gis-info-detail');
    const empty = document.querySelector('.gis-info-empty');
    if (!detail || !empty) return;

    empty.style.display = 'none';
    detail.classList.add('active');

    detail.querySelector('.gis-info-name').textContent = lang === 'ar' ? loc.name_ar : loc.name_en;

    const badge = detail.querySelector('.readiness-badge');
    badge.textContent = lang === 'ar' ? loc.readiness_ar : loc.readiness_en;
    badge.className = 'readiness-badge ' + loc.readiness;

    detail.querySelector('[data-field="current"]').textContent = lang === 'ar' ? loc.current_ar : loc.current_en;
    detail.querySelector('[data-field="rec"]').textContent = lang === 'ar' ? loc.rec_ar : loc.rec_en;
}

function refreshGISPopups() {
    if (!window._gisMarkers) return;
    const lang = getDemoLang();
    window._gisMarkers.forEach(m => {
        const loc = m._geoData;
        const name = lang === 'ar' ? loc.name_ar : loc.name_en;
        m.setPopupContent(`<strong>${name}</strong>`);
    });
}

// ════════════════════════════════
// CYBERSECURITY OPERATIONS
// ════════════════════════════════
let threatInterval = null;

function initCyberDemo() {
    const section = document.getElementById('demo-cyber');
    if (!section) return;

    // Animate security score ring on scroll
    const ring = section.querySelector('.score-ring-fill');
    const scoreVal = section.querySelector('.score-ring-value');
    if (ring) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const circumference = 2 * Math.PI * 54;
                    ring.style.strokeDasharray = circumference;
                    ring.style.strokeDashoffset = circumference * (1 - 0.94);
                    if (scoreVal) animateCounter(scoreVal, 94);
                    observer.disconnect();
                }
            });
        }, { threshold: 0.3 });
        observer.observe(section);
    }

    // Animate stat counters
    const statCounterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.querySelectorAll('.cyber-stat-value[data-target]').forEach(c => {
                    const target = parseFloat(c.dataset.target);
                    const suffix = c.dataset.suffix || '';
                    animateCounter(c, target, suffix);
                });
                statCounterObserver.disconnect();
            }
        });
    }, { threshold: 0.3 });
    statCounterObserver.observe(section);

    // Start threat feed
    startThreatFeed();
    window._cyberInitialized = true;
}

function startThreatFeed() {
    const feed = document.querySelector('.threat-feed-list');
    if (!feed) return;
    const lang = getDemoLang();
    const events = threatEvents[lang] || threatEvents.ar;

    // Show initial events
    feed.innerHTML = '';
    events.slice(0, 5).forEach(ev => addThreatItem(feed, ev, false));

    // Add new events periodically
    let idx = 5;
    threatInterval = setInterval(() => {
        const ev = events[idx % events.length];
        const newEv = { ...ev, time: getCurrentTime() };
        addThreatItem(feed, newEv, true);
        idx++;
        // Keep feed manageable
        while (feed.children.length > 12) feed.removeChild(feed.lastChild);
    }, 3500);
}

function restartThreatFeed() {
    if (threatInterval) clearInterval(threatInterval);
    startThreatFeed();
}

function addThreatItem(feed, ev, prepend) {
    const iconMap = { ok: '✓', warn: '!', critical: '✕' };
    const item = document.createElement('div');
    item.className = 'threat-item';
    item.innerHTML = `
        <div class="threat-icon ${ev.type}">${iconMap[ev.type]}</div>
        <div class="threat-text">${ev.text}</div>
        <div class="threat-time">${ev.time}</div>
    `;
    if (prepend && feed.firstChild) feed.insertBefore(item, feed.firstChild);
    else feed.appendChild(item);
}

function getCurrentTime() {
    const now = new Date();
    return now.toTimeString().slice(0, 8);
}

// ════════════════════════════════
// INIT ALL DEMOS
// ════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    // Observe language changes
    langObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    // Apply demo translations
    applyDemoLanguage();

    // Init each demo when scrolled into view (lazy init)
    const lazyInit = (sectionId, initFn) => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initFn();
                    obs.disconnect();
                }
            });
        }, { threshold: 0.1, rootMargin: '200px' });
        obs.observe(section);
    };

    lazyInit('demo-ai', initAIDemo);
    lazyInit('demo-gis', initGISDemo);
    lazyInit('demo-cyber', initCyberDemo);
});
