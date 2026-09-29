export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About Us",
            features: "Features",
            contact: "Contact",
        },
        hero: {
            headline: "Where stories are",
            title: "Brewed, Bound, and Shared.",
            cta: "Join the Waitlist",
        },
        about: {
            title: "More Than a Coffee Shop",
            description: "Part café, part bookshop, part bindery. At Brew & Bind, you can sip a slow-brewed coffee, get lost in a curated read, or learn to bind your own journal by hand — all in one warm, book-filled space.",
        },
        feature: {
            maintitle: "What's Brewing At This Coffee House",
            maindescription: "Part café, part bookshop, part bindery. At Brew & Bind, you can sip a slow-brewed coffee, get lost in a curated read, or learn to bind your own journal by professional",
            box1: {
                title: "Speciality Coffee",
                description: "Every cup starts with care — slow pour-overs, rich espresso, and rotating seasonal drinks made in small batches. This isn't coffee to rush through; it's coffee to sit with",
            },
            box2: {
                title: "Curated Reads",
                description: "Our shelves are hand-picked, not mass-stocked — fiction, poetry, and local finds that change often enough to keep you coming back. Grab a seat, pick up something unexpected, and stay a while",
            },
            box3: {
                title: "Book Binding Workshop",
                description: "In our hands-on workshops, you'll learn to bind your own journal or sketchbook from scratch — no experience needed, just curiosity and a little patience. Walk out with something coffee-stained and entirely yours",
            },
        },
        form: {
            estd: "ESTD",
            year: "2026",
            title: "Join Our Waiting list",
            subtitle: "A chapter for your coffee break",
            namePlaceholder: "Full Name",
            emailPlaceholder: "Email",
            nameRequired: "Name is required",
            emailRequired: "Email is required",
            cta: "Join the Waitlist",
        },
        footer: {
            home: "Home",
            locationHours: "Location/Hours",
            estd: "ESTD",
            year: "2026",
            tagline: "A chapter for your coffee break",
            comingSoon: "Coming Soon to Cairo",
            whatsBrewing: "Whats Brewing",
            joinWaitlist: "Join Waitlist",
        },
        splash: {
            estd: "ESTD",
            year: "2026",
            brand: "Brew & Bind",
            tagline: "A chapter for your coffee break",
            comingSoon: "Coming Soon to Cairo",
        },
    },
    ar: {
        nav: {
            home: "الرئيسية",
            about: "من نحن",
            features: "المميزات",
            contact: "تواصل معنا",
        },
        hero: {
            headline: "حيث تُصنع الحكايات",
            title: "تُسكب، تُغلّف، وتُشارك.",
            cta: "انضم لقائمة الانتظار",
        },
        about: {
            title: "أكثر من مجرد مقهى",
            description: "مزيج بين المقهى والمكتبة وورشة تجليد الكتب. في Brew & Bind، يمكنك الاستمتاع بقهوة مُعدة بعناية، أو الغوص في قراءة كتاب مختار، أو تعلّم تجليد دفترك الخاص بيدك — كل ذلك في مساحة دافئة محاطة بالكتب.",
        },
        feature: {
            maintitle: "ما الذي يُحضّر في هذا المقهى",
            maindescription: "مزيج بين المقهى والمكتبة وورشة التجليد. في Brew & Bind، يمكنك احتساء قهوة مُقطرة بروية، أو انغمس في قراءة مُنتقاة بعناية، أو تعلم تجليد دفترك الخاص على يد محترفين.",
            box1: {
                title: "قهوة مختصة",
                description: "كل فنجان يبدأ بالعناية — تقطير متأنٍ، إسبريسو غني، ومشروبات موسمية مميزة تُحضر بدفعة محدودة. هذه ليست قهوة تُشرب بسرعة بل قهوة لتتأمل معها.",
            },
            box2: {
                title: "كتب مختارة بعناية",
                description: "أرففنا مقتناة يدوياً وليست عشوائية — روايات، شعر، وإصدارات محلية تتجدد باستمرار لتشتاق للعودة. خذ مقعداً، وخذ كتاباً غير متوقع، وأطل الجلوس قليلاً.ً.",
            },
            box3: {
                title: "ورشة تجليد الكتب",
                description: "في ورش العمل التفاعلية لدينا، ستتعلم تجليد دفتر يومياتك أو كراسة رسمك من الصفر — لا حاجة لخبرة مسبقة، فقط الشغف وقليل من الصبر. واخرج بشيء يحمل أثر القهوة وروحك الخاصة.",
            },
        },
        form: {
            estd: "تأسس",
            year: "٢٠٢٦",
            title: "انضم إلى قائمة الانتظار",
            subtitle: "فصل جديد لاستراحة قهوتك",
            namePlaceholder: "الاسم الكامل",
            emailPlaceholder: "البريد الإلكتروني",
            nameRequired: "الاسم مطلوب",
            emailRequired: "البريد الإلكتروني مطلوب",
            cta: "انضم لقائمة الانتظار",
        },
        footer: {
            home: "الرئيسية",
            locationHours: "الموقع / ساعات العمل",
            estd: "تأسس",
            year: "٢٠٢٦",
            tagline: "فصل جديد لاستراحة قهوتك",
            comingSoon: "قريباً في القاهرة",
            whatsBrewing: "ما يُحضّر لدينا",
            joinWaitlist: "انضم لقائمة الانتظار",
        },
        splash: {
            estd: "تأسس",
            year: "٢٠٢٦",
            brand: "Brew & Bind",
            tagline: "فصل جديد لاستراحة قهوتك",
            comingSoon: "قريباً في القاهرة",
        },
    },
};

export type Locale = "en" | "ar";
export type TranslationType = typeof translations.en;
