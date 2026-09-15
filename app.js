/* =========================================================
   AUNG BUSINESS ACADEMY
   V15 PROFESSIONAL
   MAIN APPLICATION
   ========================================================= */

(function () {
    "use strict";

    /* =====================================================
       CONFIG
    ===================================================== */

    const APP = {
        name: "Aung Business Academy",
        version: "V15 Professional",

        storage: {
            premiumUntil: "aung_business_academy_premium_until_v1",
            completed: "aung_business_academy_completed_lessons_v15"
        }
    };


    /* =====================================================
       COURSE REGISTRY
       Existing detailed courses are connected automatically.
       Other courses are registered here for the academy library.
    ===================================================== */

    const COURSE_META = [
        {
            id: "sales-management",
            category: "SALES",
            icon: "🎯",
            title: "Sales Management Mastery",
            burmeseTitle: "အရောင်းစီမံခန့်ခွဲမှု",
            lessons: 15,
            description: "Sales Strategy • Target • Execution • KPI",
            color: "blue"
        },

        {
            id: "negotiation-mastery",
            category: "SALES",
            icon: "🤝",
            title: "Negotiation Mastery",
            burmeseTitle: "ညှိနှိုင်းဆွေးနွေးမှု ကျွမ်းကျင်ခြင်း",
            lessons: 15,
            description: "Preparation • BATNA • Value • Closing",
            color: "purple"
        },

        {
            id: "marketing-management",
            category: "MARKETING",
            icon: "📣",
            title: "Marketing Management",
            burmeseTitle: "Marketing စီမံခန့်ခွဲမှု",
            lessons: 15,
            description: "Segmentation • Positioning • Brand • Campaign",
            color: "orange"
        },

        {
            id: "leadership-management",
            category: "LEADERSHIP",
            icon: "👑",
            title: "Leadership & Management",
            burmeseTitle: "ခေါင်းဆောင်မှုနှင့် စီမံခန့်ခွဲမှု",
            lessons: 15,
            description: "Leadership • Delegation • Coaching • Accountability",
            color: "purple"
        },

        {
            id: "hr-people-management",
            category: "HR",
            icon: "👥",
            title: "People & HR Management",
            burmeseTitle: "လူအင်အားနှင့် HR စီမံခန့်ခွဲမှု",
            lessons: 15,
            description: "Recruitment • Performance • Motivation • Development",
            color: "green"
        },

        {
            id: "finance-accounting",
            category: "FINANCE",
            icon: "💰",
            title: "Finance for Managers",
            burmeseTitle: "Manager များအတွက် ဘဏ္ဍာရေး",
            lessons: 15,
            description: "P&L • Cost • Margin • Cash • Break-even",
            color: "green"
        },

        {
            id: "business-fundamentals",
            category: "BUSINESS",
            icon: "🏢",
            title: "Business Fundamentals",
            burmeseTitle: "စီးပွားရေးလုပ်ငန်း အခြေခံ",
            lessons: 10,
            description: "Business Model • Customers • Value • Operations",
            color: "blue"
        },

        {
            id: "customer-service",
            category: "CUSTOMER",
            icon: "❤️",
            title: "Customer Service Management",
            burmeseTitle: "ဖောက်သည်ဝန်ဆောင်မှု စီမံခန့်ခွဲမှု",
            lessons: 10,
            description: "Service Quality • Complaint • Retention",
            color: "red"
        },

        {
            id: "strategic-management",
            category: "STRATEGY",
            icon: "♟",
            title: "Strategic Management",
            burmeseTitle: "မဟာဗျူဟာ စီမံခန့်ခွဲမှု",
            lessons: 12,
            description: "SWOT • Competitive Strategy • Execution",
            color: "purple"
        },

        {
            id: "key-account-management",
            category: "SALES",
            icon: "🔑",
            title: "Key Account Management",
            burmeseTitle: "အဓိကဖောက်သည် စီမံခန့်ခွဲမှု",
            lessons: 12,
            description: "KA Planning • Joint Business • Negotiation",
            color: "blue"
        },

        {
            id: "distributor-management",
            category: "DISTRIBUTION",
            icon: "🚚",
            title: "Distributor Management",
            burmeseTitle: "ဖြန့်ချိရေး စီမံခန့်ခွဲမှု",
            lessons: 12,
            description: "RTM • Coverage • Stock • Credit • Review",
            color: "orange"
        },

        {
            id: "retail-modern-trade",
            category: "RETAIL",
            icon: "🛒",
            title: "Retail & Modern Trade",
            burmeseTitle: "လက်လီနှင့် Modern Trade",
            lessons: 12,
            description: "MT • Listing • Promotion • Planogram",
            color: "green"
        },

        {
            id: "business-development",
            category: "BUSINESS",
            icon: "🚀",
            title: "Business Development",
            burmeseTitle: "စီးပွားရေး ဖွံ့ဖြိုးတိုးတက်မှု",
            lessons: 12,
            description: "Opportunity • Partnership • Pipeline • Growth",
            color: "blue"
        },

        {
            id: "productivity-time",
            category: "PRODUCTIVITY",
            icon: "⏱",
            title: "Productivity & Time Management",
            burmeseTitle: "ထိရောက်မှုနှင့် အချိန်စီမံခန့်ခွဲမှု",
            lessons: 12,
            description: "Priorities • Calendar • Focus • Delegation",
            color: "orange"
        },

        {
            id: "data-analysis",
            category: "DATA",
            icon: "📊",
            title: "Data Analysis for Managers",
            burmeseTitle: "Manager များအတွက် Data Analysis",
            lessons: 12,
            description: "Excel Thinking • KPI • Trend • Forecast",
            color: "blue"
        },

        {
            id: "business-communication",
            category: "COMMUNICATION",
            icon: "💬",
            title: "Business Communication",
            burmeseTitle: "Business ဆက်သွယ်ပြောဆိုမှု",
            lessons: 12,
            description: "Email • Presentation • Meeting • Influence",
            color: "purple"
        },

        {
            id: "problem-solving",
            category: "MANAGEMENT",
            icon: "🧩",
            title: "Problem Solving & Decision Making",
            burmeseTitle: "ပြဿနာဖြေရှင်းခြင်းနှင့် ဆုံးဖြတ်ချက်ချခြင်း",
            lessons: 12,
            description: "Root Cause • Options • Decision • Risk",
            color: "red"
        },

        {
            id: "career-personal-leadership",
            category: "CAREER",
            icon: "⭐",
            title: "Career & Personal Leadership",
            burmeseTitle: "Career နှင့် ကိုယ်ပိုင်ခေါင်းဆောင်မှု",
            lessons: 12,
            description: "CV • Interview • Personal Brand • Growth",
            color: "purple"
        }
    ];


    /* =====================================================
       STATE
    ===================================================== */

    let currentView = "dashboard";
    let currentCourseId = null;


    /* =====================================================
       DOM
    ===================================================== */

    const $ = (selector) => document.querySelector(selector);

    const appMain = $("#app-main");
    const pageTitle = $("#pageTitle");

    const sidebar = $("#sidebar");
    const sidebarOverlay = $("#sidebarOverlay");
    const mobileMenuBtn = $("#mobileMenuBtn");

    const premiumModal = $("#premiumModal");
    const premiumModalClose = $("#premiumModalClose");
    const premiumBtn = $("#premiumBtn");
    const activatePremiumBtn = $("#activatePremiumBtn");


    /* =====================================================
       SAFETY
    ===================================================== */

    if (!appMain) {
        console.error("Aung Business Academy: #app-main not found.");
        return;
    }


    /* =====================================================
       COURSE DATA
    ===================================================== */

    function getDetailedCourses() {

        const academy =
            window.AungBusinessAcademy || {};

        const courses =
            academy.COURSES || [];

        return Array.isArray(courses)
            ? courses
            : [];
    }


    function findDetailedCourse(id) {

        const courses = getDetailedCourses();

        return courses.find(
            course => course && course.id === id
        ) || null;
    }


    function getCourse(id) {

        const meta =
            COURSE_META.find(course => course.id === id);

        const detailed =
            findDetailedCourse(id);

        if (detailed) {

            return {
                ...meta,
                ...detailed,

                lessons:
                    Array.isArray(detailed.lessons)
                        ? detailed.lessons
                        : []
            };
        }

        return meta || null;
    }


    function getAllCourses() {

        return COURSE_META.map(course => {

            const detailed =
                findDetailedCourse(course.id);

            if (detailed) {

                return {
                    ...course,
                    ...detailed,

                    lessons:
                        Array.isArray(detailed.lessons)
                            ? detailed.lessons
                            : []
                };
            }

            return {
                ...course,
                lessons: createDemoLessons(course)
            };

        });

    }


    /* =====================================================
       DEMO LESSON DATA
       Used temporarily for courses whose detailed files
       have not yet been created.
    ===================================================== */

    function createDemoLessons(course) {

        const total =
            Number(course.lessons) || 0;

        const lessonTopics = [
            "အခြေခံသဘောတရားနှင့် Manager Thinking",
            "Business Goal နှင့် Objective",
            "Customer နားလည်ခြင်း",
            "Market နှင့် Competitor Analysis",
            "Planning နှင့် Strategy",
            "Execution နှင့် Field Implementation",
            "KPI နှင့် Performance",
            "Problem Solving",
            "Decision Making",
            "Team Management",
            "Review နှင့် Improvement",
            "Professional Manager Action Plan",
            "Business Growth Framework",
            "Practical Case Study",
            "Final Manager Assessment"
        ];

        const lessons = [];

        for (let i = 0; i < total; i++) {

            const topic =
                lessonTopics[i] ||
                `Professional Lesson ${i + 1}`;

            lessons.push({

                id: `${course.id}-lesson-${i + 1}`,

                title:
                    `Lesson ${i + 1} — ${topic}`,

                objective:
                    `${course.title} ကို လက်တွေ့လုပ်ငန်းခွင်မှာ အသုံးချနိုင်ရန် အခြေခံ Framework၊ Manager Thinking နှင့် Practical Action များကို နားလည်ရန်။`,

                content: `
                    <h2>${topic}</h2>

                    <p>
                    ဒီ Lesson သည်
                    <strong>${course.title}</strong>
                    Course ၏ Professional Learning Framework
                    တစ်ခုဖြစ်ပါတယ်။
                    </p>

                    <h3>ဒီ Lesson မှာ ဘာတွေသင်မလဲ?</h3>

                    <ul>
                        <li>လုပ်ငန်းခွင်မှာ အသုံးချနိုင်တဲ့ အခြေခံသဘောတရား</li>
                        <li>Manager တစ်ယောက်အနေနဲ့ စဉ်းစားရမည့်အချက်များ</li>
                        <li>Data နှင့် KPI ကို အသုံးပြုပြီး ဆုံးဖြတ်ခြင်း</li>
                        <li>Team နှင့် Execution ကို စီမံခြင်း</li>
                        <li>လက်တွေ့ Action Plan ပြုလုပ်ခြင်း</li>
                    </ul>

                    <h3>Manager Thinking</h3>

                    <p>
                    Manager က အလုပ်ကို ကိုယ်တိုင်လုပ်ပေးရုံမဟုတ်ဘဲ
                    လူ၊ Process၊ Data နှင့် Result ကို
                    တစ်ခုတည်းအဖြစ် စီမံနိုင်ရပါမယ်။
                    </p>

                    <h3>Practical Action</h3>

                    <ol>
                        <li>မိမိလုပ်ငန်း၏ လက်ရှိအခြေအနေကို ရေးပါ။</li>
                        <li>အဓိက Problem ၃ ခုကို သတ်မှတ်ပါ။</li>
                        <li>Problem တစ်ခုချင်းစီ၏ Root Cause ကို ရှာပါ။</li>
                        <li>Action Plan တစ်ခုစီ ပြုလုပ်ပါ။</li>
                        <li>တစ်ပတ်အတွင်း Result ကို ပြန်လည်သုံးသပ်ပါ။</li>
                    </ol>

                    <h3>Key Takeaway</h3>

                    <p>
                    သင်ယူခြင်း၏ ရည်ရွယ်ချက်သည်
                    စာကို သိရုံမဟုတ်ဘဲ
                    လုပ်ငန်းခွင်တွင် Result ဖြစ်အောင်
                    အသုံးချနိုင်ခြင်း ဖြစ်ပါတယ်။
                    </p>
                `,

                action:
                    "ဒီ Lesson ကို လေ့လာပြီး မိမိလုပ်ငန်းမှာ လက်တွေ့အသုံးချမည့် Action 3 ခုကို ရေးပါ။",

                quiz: [
                    {
                        question:
                            "Manager တစ်ယောက်အတွက် အရေးကြီးဆုံးက ဘာလဲ?",
                        answer:
                            "Result ရရှိအောင် People, Process, Data နှင့် Execution ကို စနစ်တကျ စီမံနိုင်ခြင်း။"
                    }
                ]

            });

        }

        return lessons;
    }


    /* =====================================================
       COMPLETION STORAGE
    ===================================================== */

    function getCompleted() {

        try {

            const data =
                localStorage.getItem(
                    APP.storage.completed
                );

            if (!data) {
                return {};
            }

            const parsed = JSON.parse(data);

            return parsed &&
                typeof parsed === "object"
                ? parsed
                : {};

        } catch (error) {

            console.warn(
                "Could not read completion data.",
                error
            );

            return {};
        }

    }


    function saveCompleted(data) {

        try {

            localStorage.setItem(
                APP.storage.completed,
                JSON.stringify(data)
            );

        } catch (error) {

            console.warn(
                "Could not save completion data.",
                error
            );
        }

    }


    function completionKey(courseId, lessonId) {

        return `${courseId}::${lessonId}`;

    }


    function isLessonCompleted(courseId, lessonId) {

        const data = getCompleted();

        return Boolean(
            data[completionKey(courseId, lessonId)]
        );

    }


    function markLessonCompleted(courseId, lessonId) {

        const data = getCompleted();

        data[
            completionKey(courseId, lessonId)
        ] = true;

        saveCompleted(data);

        updateAllProgress();

        document.dispatchEvent(
            new CustomEvent(
                "aungAcademyProgressUpdated"
            )
        );

    }


    /* =====================================================
       PROGRESS
    ===================================================== */

    function getCourseProgress(courseId) {

        const course =
            getCourse(courseId);

        if (!course) {
            return {
                completed: 0,
                total: 0,
                percent: 0
            };
        }

        const lessons =
            Array.isArray(course.lessons)
                ? course.lessons
                : [];

        const total = lessons.length;

        if (total === 0) {

            return {
                completed: 0,
                total: 0,
                percent: 0
            };

        }

        let completed = 0;

        lessons.forEach(lesson => {

            if (
                isLessonCompleted(
                    courseId,
                    lesson.id
                )
            ) {
                completed++;
            }

        });

        return {

            completed,

            total,

            percent:
                Math.round(
                    (completed / total) * 100
                )

        };

    }


    function getOverallProgress() {

        const courses =
            getAllCourses();

        let total = 0;
        let completed = 0;

        courses.forEach(course => {

            const progress =
                getCourseProgress(course.id);

            total += progress.total;

            completed += progress.completed;

        });

        return {

            total,

            completed,

            remaining:
                Math.max(
                    total - completed,
                    0
                ),

            percent:
                total > 0
                    ? Math.round(
                        (completed / total) * 100
                    )
                    : 0

        };

    }


    /* =====================================================
       PREMIUM
    ===================================================== */

    function getPremiumUntil() {

        try {

            const value =
                localStorage.getItem(
                    APP.storage.premiumUntil
                );

            if (!value) {
                return 0;
            }

            return Number(value) || 0;

        } catch (error) {

            return 0;

        }

    }


    function isPremium() {

        return getPremiumUntil() >
            Date.now();

    }


    function activatePremium() {

        const days = 180;

        const until =
            Date.now() +
            (
                days *
                24 *
                60 *
                60 *
                1000
            );

        localStorage.setItem(
            APP.storage.premiumUntil,
            String(until)
        );

        updatePremiumUI();

        closePremiumModal();

        showToast(
            "💎 Premium 6 Months Activated"
        );

        if (currentCourseId) {

            openCourse(
                currentCourseId
            );

        } else {

            renderView(
                currentView
            );

        }

    }


    function getPremiumDaysRemaining() {

        const until =
            getPremiumUntil();

        if (!until) {
            return 0;
        }

        const difference =
            until - Date.now();

        if (difference <= 0) {
            return 0;
        }

        return Math.ceil(
            difference /
            (
                24 *
                60 *
                60 *
                1000
            )
        );

    }


    function updatePremiumUI() {

        const premium =
            isPremium();

        const days =
            getPremiumDaysRemaining();


        if (premiumStatusElement()) {

            premiumStatusElement().textContent =
                premium
                    ? `💎 Premium • ${days} days remaining`
                    : "Free Plan";

        }


        if (topPremiumStatusElement()) {

            topPremiumStatusElement().textContent =
                premium
                    ? `💎 Premium • ${days} days`
                    : "Free Plan";

        }


        if (premiumBtn) {

            premiumBtn.textContent =
                premium
                    ? "Premium"
                    : "Upgrade";

        }

    }


    function premiumStatusElement() {

        return $("#premiumStatus");

    }


    function topPremiumStatusElement() {

        return $("#topPremiumStatus");

    }


    function canOpenLesson(courseId, lessonIndex) {

        if (isPremium()) {
            return true;
        }

        return lessonIndex === 0;

    }


    /* =====================================================
       MAIN NAVIGATION
    ===================================================== */

    function setActiveNav(view) {

        document
            .querySelectorAll(".nav-item")
            .forEach(button => {

                button.classList.toggle(
                    "active",
                    button.dataset.view === view
                );

            });

    }


    function setPageTitle(title) {

        if (pageTitle) {
            pageTitle.textContent = title;
        }

    }


    function renderView(view) {

        currentView = view;

        currentCourseId = null;

        setActiveNav(view);

        closeMobileMenu();

        switch (view) {

            case "dashboard":
                renderDashboard();
                break;

            case "courses":
                renderCourses();
                break;

            case "lessons":
                renderLessons();
                break;

            case "progress":
                renderProgress();
                break;

            case "sales-manager":
                renderSalesManager();
                break;

            case "pricing":
                renderPricing();
                break;

            case "reports":
                renderReports();
                break;

            case "manager-tools":
                renderManagerTools();
                break;

            case "cv":
                renderCV();
                break;

            case "interview":
                renderInterview();
                break;

            case "ai-coach":
                renderAICoach();
                break;

            case "ai-tools":
                renderAITools();
                break;

            case "settings":
                renderSettings();
                break;

            default:
                renderDashboard();

        }

    }


    /* =====================================================
       DASHBOARD
    ===================================================== */

    function renderDashboard() {

        setPageTitle("Dashboard");

        const courses =
            getAllCourses();

        const progress =
            getOverallProgress();

        const firstCourse =
            courses.find(
                course =>
                    getCourseProgress(course.id).percent < 100
            ) || courses[0];

        const firstProgress =
            firstCourse
                ? getCourseProgress(firstCourse.id)
                : {
                    completed: 0,
                    total: 0,
                    percent: 0
                };


        appMain.innerHTML = `

            <div class="page-header">

                <div class="page-title">
                    Dashboard
                </div>

                <div class="page-subtitle">
                    Your professional business learning dashboard
                </div>

            </div>


            <section class="welcome-card">

                <div class="welcome-content">

                    <div class="welcome-label">
                        WELCOME BACK
                    </div>

                    <div class="welcome-title">
                        Aung Zar Ni Win 👋
                    </div>

                    <div class="welcome-description">
                        Business Manager တစ်ယောက်အနေနဲ့
                        Sales, Marketing, Finance, HR,
                        Leadership နှင့် Business Management
                        Skills များကို စနစ်တကျ တိုးတက်အောင်
                        လေ့လာနိုင်ပါပြီ။
                    </div>

                </div>

            </section>


            <div class="stats-grid">

                ${statCard(
                    "📚",
                    courses.length,
                    "Total Courses"
                )}

                ${statCard(
                    "📖",
                    progress.total,
                    "Total Lessons"
                )}

                ${statCard(
                    "✅",
                    progress.completed,
                    "Completed"
                )}

                ${statCard(
                    "📈",
                    `${progress.percent}%`,
                    "Overall Progress"
                )}

            </div>


            <section class="content-section">

                <div class="section-header">

                    <div>

                        <div class="section-title">
                            🎯 Continue Learning
                        </div>

                        <div class="section-description">
                            Continue your next lesson
                        </div>

                    </div>

                </div>


                ${firstCourse
                    ? continueLearningCard(
                        firstCourse,
                        firstProgress
                    )
                    : emptyState(
                        "📚",
                        "No Courses",
                        "Course data is not available yet."
                    )
                }

            </section>


            <section class="content-section">

                <div class="section-header">

                    <div>

                        <div class="section-title">
                            📚 Recommended Courses
                        </div>

                        <div class="section-description">
                            Build the skills required for professional managers
                        </div>

                    </div>

                    <button
                        class="secondary-btn"
                        type="button"
                        data-action="show-courses">

                        View All Courses

                    </button>

                </div>


                <div class="course-grid">

                    ${courses
                        .slice(0, 6)
                        .map(courseCard)
                        .join("")}

                </div>

            </section>

        `;

        bindDynamicEvents();

    }


    /* =====================================================
       COURSES
    ===================================================== */

    function renderCourses() {

        setPageTitle("My Courses");

        const courses =
            getAllCourses();

        appMain.innerHTML = `

            <div class="page-header">

                <div class="page-title">
                    📚 Course Library
                </div>

                <div class="page-subtitle">
                    Professional business courses for managers
                </div>

            </div>


            <div class="stats-grid">

                ${statCard(
                    "📚",
                    courses.length,
                    "Courses"
                )}

                ${statCard(
                    "📖",
                    getOverallProgress().total,
                    "Lessons"
                )}

                ${statCard(
                    "💎",
                    isPremium() ? "ACTIVE" : "FREE",
                    "Membership"
                )}

                ${statCard(
                    "📈",
                    `${getOverallProgress().percent}%`,
                    "Progress"
                )}

            </div>


            <section class="content-section">

                <div class="course-grid">

                    ${courses
                        .map(courseCard)
                        .join("")}

                </div>

            </section>

        `;

        bindDynamicEvents();

    }


    /* =====================================================
       LESSONS
    ===================================================== */

    function renderLessons() {

        setPageTitle("Lessons");

        const courses =
            getAllCourses();

        appMain.innerHTML = `

            <div class="page-header">

                <div class="page-title">
                    📖 Lessons
                </div>

                <div class="page-subtitle">
                    Select a course to start learning
                </div>

            </div>


            <section class="content-section">

                <div class="course-grid">

                    ${courses
                        .map(course => {

                            const progress =
                                getCourseProgress(
                                    course.id
                                );

                            return `

                                <div
                                    class="course-card">

                                    <div class="course-card-top">

                                        <div class="course-icon">
                                            ${course.icon}
                                        </div>

                                        <div class="course-info">

                                            <div class="course-category">
                                                ${course.category}
                                            </div>

                                            <div class="course-title">
                                                ${escapeHTML(
                                                    course.title
                                                )}
                                            </div>

                                            <div class="course-burmese-title">
                                                ${escapeHTML(
                                                    course.burmeseTitle || ""
                                                )}
                                            </div>

                                        </div>

                                    </div>


                                    <div class="course-description">

                                        ${escapeHTML(
                                            course.description || ""
                                        )}

                                    </div>


                                    <div class="progress-area">

                                        <div class="progress-top">

                                            <span class="progress-label">
                                                ${progress.completed}
                                                /
                                                ${progress.total}
                                                Lessons
                                            </span>

                                            <span class="progress-percent">
                                                ${progress.percent}%
                                            </span>

                                        </div>

                                        <div class="progress-bar">

                                            <div
                                                class="progress-fill"
                                                style="width:${progress.percent}%">
                                            </div>

                                        </div>

                                    </div>


                                    <div class="course-actions">

                                        <button
                                            type="button"
                                            class="primary-btn"
                                            data-open-course="${course.id}">

                                            View Lessons

                                        </button>

                                    </div>

                                </div>

                            `;

                        })
                        .join("")}

                </div>

            </section>

        `;

        bindDynamicEvents();

    }


    /* =====================================================
       COURSE DETAIL
    ===================================================== */

    function openCourse(courseId) {

        const course =
            getCourse(courseId);

        if (!course) {

            showToast(
                "Course မတွေ့ပါ။"
            );

            return;

        }

        currentCourseId =
            courseId;

        setPageTitle(
            course.title
        );

        setActiveNav(
            "courses"
        );

        const progress =
            getCourseProgress(courseId);

        const lessons =
            Array.isArray(course.lessons)
                ? course.lessons
                : [];


        appMain.innerHTML = `

            <div class="page-header">

                <button
                    type="button"
                    class="secondary-btn"
                    data-action="back-courses">

                    ← Back to Courses

                </button>

            </div>


            <section class="course-hero">

                <div class="course-hero-main">

                    <div class="course-hero-icon">
                        ${course.icon}
                    </div>

                    <div class="course-hero-info">

                        <div class="course-hero-category">
                            ${course.category}
                        </div>

                        <div class="course-hero-title">
                            ${escapeHTML(
                                course.title
                            )}
                        </div>

                        <div class="course-hero-subtitle">
                            ${escapeHTML(
                                course.burmeseTitle || ""
                            )}
                        </div>

                    </div>

                </div>


                <div class="course-hero-description">

                    ${escapeHTML(
                        course.description || ""
                    )}

                </div>


                <div class="progress-area">

                    <div class="progress-top">

                        <span class="progress-label">
                            Course Progress
                        </span>

                        <span class="progress-percent">
                            ${progress.percent}%
                        </span>

                    </div>

                    <div class="progress-bar">

                        <div
                            class="progress-fill"
                            style="width:${progress.percent}%">
                        </div>

                    </div>

                    <div class="lesson-meta mt-1">

                        ${progress.completed}
                        /
                        ${progress.total}
                        Lessons Completed

                    </div>

                </div>

            </section>


            <section class="content-section">

                <div class="section-header">

                    <div>

                        <div class="section-title">
                            📖 Course Lessons
                        </div>

                        <div class="section-description">
                            Lesson 1 is free. Lesson 2+ requires Premium.
                        </div>

                    </div>

                </div>


                <div class="lesson-list">

                    ${lessons
                        .map(
                            (lesson, index) =>
                                lessonListItem(
                                    course,
                                    lesson,
                                    index
                                )
                        )
                        .join("")}

                </div>

            </section>

        `;

        bindDynamicEvents();

    }


    /* =====================================================
       LESSON DETAIL
    ===================================================== */

    function openLesson(
        courseId,
        lessonIndex
    ) {

        const course =
            getCourse(courseId);

        if (!course) {
            return;
        }

        const lessons =
            Array.isArray(course.lessons)
                ? course.lessons
                : [];

        if (
            lessonIndex < 0 ||
            lessonIndex >= lessons.length
        ) {
            return;
        }


        if (
            !canOpenLesson(
                courseId,
                lessonIndex
            )
        ) {

            openPremiumModal();

            return;

        }


        const lesson =
            lessons[lessonIndex];

        const completed =
            isLessonCompleted(
                courseId,
                lesson.id
            );

        const progress =
            getCourseProgress(
                courseId
            );


        const modal =
            getOrCreateLessonModal();

        modal.innerHTML = `

            <div class="modal-backdrop"></div>

            <div class="modal-dialog lesson-modal-dialog">

                <div class="lesson-modal-header">

                    <button
                        type="button"
                        class="modal-close"
                        data-close-lesson>

                        ×

                    </button>


                    <div class="lesson-modal-category">

                        ${escapeHTML(
                            course.category
                        )}

                    </div>


                    <div class="lesson-modal-title">

                        ${escapeHTML(
                            lesson.title || ""
                        )}

                    </div>


                    <div class="lesson-modal-progress">

                        <div class="progress-top">

                            <span class="progress-label">

                                Lesson
                                ${lessonIndex + 1}
                                /
                                ${lessons.length}

                            </span>

                            <span class="progress-percent">

                                ${progress.percent}%

                            </span>

                        </div>


                        <div class="progress-bar">

                            <div
                                class="progress-fill"
                                style="width:${progress.percent}%">
                            </div>

                        </div>

                    </div>

                </div>


                <div class="lesson-modal-body">

                    ${lesson.content
                        ? lesson.content
                        : createLessonHTML(
                            lesson
                        )}

                </div>


                <div class="lesson-modal-footer">

                    <div class="lesson-nav-buttons">

                        <button
                            type="button"
                            class="secondary-btn"
                            data-lesson-previous
                            ${lessonIndex === 0
                                ? "disabled"
                                : ""}>

                            ⬅ Previous

                        </button>


                        <button
                            type="button"
                            class="secondary-btn"
                            data-lesson-next
                            ${lessonIndex === lessons.length - 1
                                ? "disabled"
                                : ""}>

                            Next ➡

                        </button>

                    </div>


                    <button
                        type="button"
                        class="primary-btn lesson-complete-btn"
                        data-lesson-complete>

                        ${completed
                            ? "✓ Completed"
                            : "✅ Mark as Completed"}

                    </button>

                </div>

            </div>

        `;


        modal.classList.add(
            "show"
        );

        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";


        modal
            .querySelector(
                "[data-close-lesson]"
            )
            ?.addEventListener(
                "click",
                closeLesson
            );


        modal
            .querySelector(
                "[data-lesson-complete]"
            )
            ?.addEventListener(
                "click",
                () => {

                    markLessonCompleted(
                        courseId,
                        lesson.id
                    );

                    openLesson(
                        courseId,
                        lessonIndex
                    );

                    showToast(
                        "✅ Lesson Completed"
                    );

                }
            );


        modal
            .querySelector(
                "[data-lesson-previous]"
            )
            ?.addEventListener(
                "click",
                () => {

                    if (lessonIndex > 0) {

                        openLesson(
                            courseId,
                            lessonIndex - 1
                        );

                    }

                }
            );


        modal
            .querySelector(
                "[data-lesson-next]"
            )
            ?.addEventListener(
                "click",
                () => {

                    if (
                        lessonIndex <
                        lessons.length - 1
                    ) {

                        openLesson(
                            courseId,
                            lessonIndex + 1
                        );

                    }

                }
            );

    }


    function getOrCreateLessonModal() {

        let modal =
            document.getElementById(
                "lessonModal"
            );

        if (!modal) {

            modal =
                document.createElement(
                    "div"
                );

            modal.id =
                "lessonModal";

            modal.className =
                "modal";

            document.body.appendChild(
                modal
            );

        }

        return modal;

    }


    function closeLesson() {

        const modal =
            document.getElementById(
                "lessonModal"
            );

        if (!modal) {
            return;
        }

        modal.classList.remove(
            "show"
        );

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";

    }


    /* =====================================================
       PROGRESS PAGE
    ===================================================== */

    function renderProgress() {

        setPageTitle(
            "My Progress"
        );

        const courses =
            getAllCourses();

        const overall =
            getOverallProgress();


        appMain.innerHTML = `

            <div class="page-header">

                <div class="page-title">
                    📊 My Progress
                </div>

                <div class="page-subtitle">
                    Track your business learning progress
                </div>

            </div>


            <div class="card overall-progress-card">

                <div class="overall-progress-top">

                    <div>

                        <div class="overall-progress-number">
                            ${overall.percent}%
                        </div>

                        <div class="overall-progress-label">
                            Overall Learning Progress
                        </div>

                    </div>

                    <div class="text-muted">
                        ${overall.completed}
                        completed /
                        ${overall.total}
                        lessons
                    </div>

                </div>


                <div class="progress-bar mt-2">

                    <div
                        class="progress-fill"
                        style="width:${overall.percent}%">
                    </div>

                </div>

            </div>


            <section class="content-section">

                <div class="section-header">

                    <div>

                        <div class="section-title">
                            Course Progress
                        </div>

                    </div>

                </div>


                <div class="lesson-list">

                    ${courses
                        .map(course => {

                            const progress =
                                getCourseProgress(
                                    course.id
                                );

                            return `

                                <div class="lesson-item">

                                    <div class="lesson-number">

                                        ${course.icon}

                                    </div>

                                    <div class="lesson-info">

                                        <div class="lesson-title">

                                            ${escapeHTML(
                                                course.title
                                            )}

                                        </div>

                                        <div class="lesson-meta">

                                            ${progress.completed}
                                            /
                                            ${progress.total}
                                            Lessons Completed

                                        </div>

                                    </div>


                                    <div style="width:130px;">

                                        <div class="progress-bar">

                                            <div
                                                class="progress-fill"
                                                style="width:${progress.percent}%">
                                            </div>

                                        </div>

                                    </div>


                                    <strong>
                                        ${progress.percent}%
                                    </strong>

                                </div>

                            `;

                        })
                        .join("")}

                </div>

            </section>

        `;

    }


    /* =====================================================
       MANAGER TOOLS
    ===================================================== */

    function renderSalesManager() {

        setPageTitle(
            "Sales Manager"
        );

        appMain.innerHTML = `

            ${simplePageHeader(
                "🎯 Sales Manager",
                "Sales performance and field management tools"
            )}


            <div class="tool-grid">

                ${toolCard(
                    "🎯",
                    "Sales Target",
                    "Monthly / weekly sales target planning.",
                    "Open Tool"
                )}

                ${toolCard(
                    "📊",
                    "Sales KPI",
                    "Track achievement, growth, coverage and productivity.",
                    "Open Tool"
                )}

                ${toolCard(
                    "📅",
                    "Sales Planning",
                    "Create practical field execution plans.",
                    "Open Tool"
                )}

                ${toolCard(
                    "🔮",
                    "Sales Forecast",
                    "Estimate future sales using current performance.",
                    "Open Tool"
                )}

                ${toolCard(
                    "👥",
                    "Team Performance",
                    "Review sales team performance and coaching needs.",
                    "Open Tool"
                )}

                ${toolCard(
                    "🚚",
                    "Distributor Review",
                    "Review distributor stock, coverage and execution.",
                    "Open Tool"
                )}

            </div>

        `;

    }


    function renderPricing() {

        setPageTitle(
            "Pricing & KPI"
        );

        appMain.innerHTML = `

            ${simplePageHeader(
                "💰 Pricing & KPI",
                "Business calculations for managers"
            )}


            <div class="tool-grid">

                ${toolCard(
                    "💵",
                    "Profit Calculator",
                    "Calculate revenue, cost and profit.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "📈",
                    "Margin Calculator",
                    "Calculate gross margin and profit margin.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "⚖️",
                    "Break-even Calculator",
                    "Calculate the sales volume required to break even.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "🎯",
                    "Sales Target Calculator",
                    "Convert annual or monthly targets into practical numbers.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "📦",
                    "Stock Calculator",
                    "Review stock coverage and inventory needs.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "💰",
                    "ROI Calculator",
                    "Measure return from business investment.",
                    "Coming Soon"
                )}

            </div>

        `;

    }


    function renderReports() {

        setPageTitle(
            "Reports"
        );

        appMain.innerHTML = `

            ${simplePageHeader(
                "📈 Reports",
                "Business performance reporting center"
            )}


            <div class="card">

                <div style="padding:22px;">

                    <div class="section-title">
                        Management Reports
                    </div>

                    <p class="text-muted mt-2"
                       style="font-size:11px;line-height:1.8;">

                        Sales, Marketing, Finance,
                        Customer, HR နှင့် Business
                        Performance Reports များကို
                        ဒီနေရာမှာ စုစည်းသွားမယ်။

                    </p>

                </div>

            </div>

        `;

    }


    function renderManagerTools() {

        setPageTitle(
            "Manager Tools"
        );

        appMain.innerHTML = `

            ${simplePageHeader(
                "🧰 Manager Tools",
                "Practical tools for business managers"
            )}


            <div class="tool-grid">

                ${toolCard(
                    "📋",
                    "Meeting Planner",
                    "Prepare effective management meetings.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "📝",
                    "Action Plan",
                    "Turn business problems into action plans.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "🔍",
                    "Root Cause Analysis",
                    "Analyze problems using structured frameworks.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "🎯",
                    "SMART Goal",
                    "Create measurable business goals.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "📅",
                    "Weekly Review",
                    "Run a professional weekly business review.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "⚠️",
                    "Risk Assessment",
                    "Identify and prioritize business risks.",
                    "Coming Soon"
                )}

            </div>

        `;

    }


    /* =====================================================
       CAREER
    ===================================================== */

    function renderCV() {

        setPageTitle(
            "Professional CV"
        );

        appMain.innerHTML = `

            ${simplePageHeader(
                "📄 Professional CV",
                "Build a strong manager-level professional profile"
            )}


            <div class="card">

                <div style="padding:22px;">

                    <div class="section-title">
                        Professional CV Builder
                    </div>

                    <p class="text-muted mt-2"
                       style="font-size:11px;line-height:1.8;">

                        CV Builder ကို နောက်အဆင့်မှာ
                        Professional Manager CV format,
                        achievement statements,
                        leadership profile နှင့်
                        interview-ready summary များပါဝင်အောင်
                        တည်ဆောက်သွားမယ်။

                    </p>

                    <button
                        type="button"
                        class="primary-btn mt-3">

                        Start CV Builder

                    </button>

                </div>

            </div>

        `;

    }


    function renderInterview() {

        setPageTitle(
            "Interview Coach"
        );

        appMain.innerHTML = `

            ${simplePageHeader(
                "🎤 Interview Coach",
                "Prepare for Sales Manager and Business Manager interviews"
            )}


            <div class="tool-grid">

                ${toolCard(
                    "🎯",
                    "Sales Manager Interview",
                    "Practice target, KPI, team management and execution questions.",
                    "Start Practice"
                )}

                ${toolCard(
                    "👥",
                    "Leadership Interview",
                    "Prepare leadership and people management questions.",
                    "Start Practice"
                )}

                ${toolCard(
                    "💰",
                    "Business Questions",
                    "Practice P&L, profit, margin and business questions.",
                    "Start Practice"
                )}

                ${toolCard(
                    "🤝",
                    "Negotiation Interview",
                    "Practice customer and commercial negotiation questions.",
                    "Start Practice"
                )}

            </div>

        `;

    }


    /* =====================================================
       AI
    ===================================================== */

    function renderAICoach() {

        setPageTitle(
            "AI Business Coach"
        );

        appMain.innerHTML = `

            ${simplePageHeader(
                "🤖 AI Business Coach",
                "Business problem solving and manager decision support"
            )}

            <div id="aung-ai-coach-container">

                <div class="card">

                    <div style="padding:25px;text-align:center;">

                        <div style="font-size:35px;">
                            🤖
                        </div>

                        <div class="section-title mt-2">
                            AI Business Coach
                        </div>

                        <p class="text-muted mt-2"
                           style="font-size:11px;line-height:1.8;">

                            Sales, Marketing, Finance,
                            HR, Strategy နှင့် Business
                            Management အတွက် AI Coach ကို
                            အသုံးပြုနိုင်ပါတယ်။

                        </p>

                        <button
                            type="button"
                            class="primary-btn mt-3"
                            id="launchAICoach">

                            Open AI Business Coach

                        </button>

                    </div>

                </div>

            </div>

        `;


        $("#launchAICoach")
            ?.addEventListener(
                "click",
                () => {

                    if (
                        window.AungAIBusinessCoach &&
                        typeof
                        window.AungAIBusinessCoach.show ===
                        "function"
                    ) {

                        window.AungAIBusinessCoach.show();

                    } else {

                        showToast(
                            "AI Business Coach file ကို မတွေ့သေးပါ။"
                        );

                    }

                }
            );

    }


    function renderAITools() {

        setPageTitle(
            "AI Tools"
        );

        appMain.innerHTML = `

            ${simplePageHeader(
                "✨ AI Tools",
                "AI-powered business productivity tools"
            )}


            <div class="tool-grid">

                ${toolCard(
                    "📝",
                    "Business Writing",
                    "Business emails, reports and professional writing.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "📊",
                    "Data Insight",
                    "Turn business numbers into management insights.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "🎯",
                    "Target Planner",
                    "Generate practical target execution plans.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "💡",
                    "Business Ideas",
                    "Explore practical business opportunities.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "🔍",
                    "Problem Analyzer",
                    "Analyze business problems and root causes.",
                    "Coming Soon"
                )}

                ${toolCard(
                    "📋",
                    "Action Plan Generator",
                    "Convert ideas into structured action plans.",
                    "Coming Soon"
                )}

            </div>

        `;

    }


    /* =====================================================
       SETTINGS
    ===================================================== */

    function renderSettings() {

        setPageTitle(
            "Settings"
        );

        const premium =
            isPremium();

        appMain.innerHTML = `

            ${simplePageHeader(
                "⚙️ Settings",
                "Application and learning settings"
            )}


            <div class="card">

                <div style="padding:22px;">

                    <div class="section-title">
                        Account
                    </div>

                    <div class="lesson-item"
                         style="margin-top:15px;">

                        <div class="lesson-number">
                            A
                        </div>

                        <div class="lesson-info">

                            <div class="lesson-title">
                                Aung Zar Ni Win
                            </div>

                            <div class="lesson-meta">
                                Business Manager
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div class="card mt-3">

                <div style="padding:22px;">

                    <div class="section-title">
                        💎 Membership
                    </div>

                    <p class="text-muted mt-2"
                       style="font-size:11px;line-height:1.7;">

                        Current Plan:
                        <strong>
                            ${premium
                                ? "Premium"
                                : "Free"}
                        </strong>

                    </p>

                    <button
                        type="button"
                        class="primary-btn mt-3"
                        id="settingsPremiumBtn">

                        ${premium
                            ? "Premium Active"
                            : "View Premium Plans"}

                    </button>

                </div>

            </div>


            <div class="card mt-3">

                <div style="padding:22px;">

                    <div class="section-title">
                        📊 Learning Data
                    </div>

                    <p class="text-muted mt-2"
                       style="font-size:11px;line-height:1.7;">

                        Your lesson completion data is
                        stored locally on this device.

                    </p>

                    <button
                        type="button"
                        class="danger-btn mt-3"
                        id="resetProgressBtn">

                        Reset Learning Progress

                    </button>

                </div>

            </div>

        `;


        $("#settingsPremiumBtn")
            ?.addEventListener(
                "click",
                openPremiumModal
            );


        $("#resetProgressBtn")
            ?.addEventListener(
                "click",
                resetProgress
            );

    }


    /* =====================================================
       COMPONENTS
    ===================================================== */

    function statCard(
        icon,
        value,
        label
    ) {

        return `

            <div class="stat-card">

                <div class="stat-icon">
                    ${icon}
                </div>

                <div class="stat-info">

                    <div class="stat-value">
                        ${value}
                    </div>

                    <div class="stat-label">
                        ${label}
                    </div>

                </div>

            </div>

        `;

    }


    function courseCard(course) {

        const progress =
            getCourseProgress(
                course.id
            );

        const premium =
            isPremium();

        return `

            <div class="course-card">

                <div class="course-card-top">

                    <div class="course-icon">
                        ${course.icon}
                    </div>

                    <div class="course-info">

                        <div class="course-category">
                            ${escapeHTML(
                                course.category
                            )}
                        </div>

                        <div class="course-title">
                            ${escapeHTML(
                                course.title
                            )}
                        </div>

                        <div class="course-burmese-title">
                            ${escapeHTML(
                                course.burmeseTitle || ""
                            )}
                        </div>

                    </div>

                </div>


                <div class="course-description">

                    ${escapeHTML(
                        course.description || ""
                    )}

                </div>


                <div class="course-meta">

                    <span class="course-meta-item">
                        📖 ${course.lessons || 0} Lessons
                    </span>

                    <span class="course-meta-item premium">
                        💎 Lesson 2+
                    </span>

                </div>


                <div class="progress-area">

                    <div class="progress-top">

                        <span class="progress-label">

                            ${progress.completed}
                            /
                            ${progress.total}

                        </span>

                        <span class="progress-percent">

                            ${progress.percent}%

                        </span>

                    </div>


                    <div class="progress-bar">

                        <div
                            class="progress-fill"
                            style="width:${progress.percent}%">
                        </div>

                    </div>

                </div>


                <div class="course-actions">

                    <button
                        type="button"
                        class="primary-btn"
                        data-open-course="${course.id}">

                        ${progress.percent > 0
                            ? "Continue"
                            : "View Course"}

                    </button>

                </div>

            </div>

        `;

    }


    function continueLearningCard(
        course,
        progress
    ) {

        return `

            <div class="card continue-card">

                <div class="continue-main">

                    <div class="continue-icon">
                        ${course.icon}
                    </div>

                    <div class="continue-info">

                        <div class="continue-label">
                            Continue Learning
                        </div>

                        <div class="continue-title">
                            ${escapeHTML(
                                course.title
                            )}
                        </div>

                        <div class="continue-progress">

                            ${progress.completed}
                            /
                            ${progress.total}
                            Lessons •
                            ${progress.percent}%

                        </div>

                    </div>

                </div>


                <button
                    type="button"
                    class="primary-btn"
                    data-open-course="${course.id}">

                    Continue →

                </button>

            </div>

        `;

    }


    function lessonListItem(
        course,
        lesson,
        index
    ) {

        const completed =
            isLessonCompleted(
                course.id,
                lesson.id
            );

        const locked =
            !canOpenLesson(
                course.id,
                index
            );

        return `

            <button
                type="button"
                class="lesson-item
                    ${completed ? "completed" : ""}
                    ${locked ? "locked" : ""}"
                data-open-lesson="${course.id}"
                data-lesson-index="${index}">


                <div class="lesson-number">

                    ${completed
                        ? "✓"
                        : index + 1}

                </div>


                <div class="lesson-info">

                    <div class="lesson-title">

                        ${escapeHTML(
                            lesson.title ||
                            `Lesson ${index + 1}`
                        )}

                    </div>


                    <div class="lesson-meta">

                        ${index === 0
                            ? "FREE LESSON"
                            : "PREMIUM LESSON"}

                    </div>

                </div>


                <div class="lesson-status">

                    ${completed
                        ? "✅"
                        : locked
                            ? "🔒"
                            : "▶️"}

                </div>

            </button>

        `;

    }


    function toolCard(
        icon,
        title,
        description,
        buttonText
    ) {

        return `

            <div class="tool-card">

                <div class="tool-icon">
                    ${icon}
                </div>

                <div class="tool-title">
                    ${escapeHTML(title)}
                </div>

                <div class="tool-description">
                    ${escapeHTML(description)}
                </div>

                <button
                    type="button"
                    class="secondary-btn">

                    ${escapeHTML(buttonText)}

                </button>

            </div>

        `;

    }


    function simplePageHeader(
        title,
        subtitle
    ) {

        return `

            <div class="page-header">

                <div class="page-title">
                    ${title}
                </div>

                <div class="page-subtitle">
                    ${subtitle}
                </div>

            </div>

        `;

    }


    function emptyState(
        icon,
        title,
        description
    ) {

        return `

            <div class="empty-state">

                <div class="empty-icon">
                    ${icon}
                </div>

                <div class="empty-title">
                    ${title}
                </div>

                <div class="empty-description">
                    ${description}
                </div>

            </div>

        `;

    }


    function createLessonHTML(
        lesson
    ) {

        return `

            <h2>
                ${escapeHTML(
                    lesson.title || "Lesson"
                )}
            </h2>

            ${
                lesson.objective
                    ? `
                        <h3>🎯 Learning Objective</h3>

                        <p>
                            ${escapeHTML(
                                lesson.objective
                            )}
                        </p>
                    `
                    : ""
            }

            ${
                lesson.action
                    ? `
                        <h3>📝 Practical Action</h3>

                        <p>
                            ${escapeHTML(
                                lesson.action
                            )}
                        </p>
                    `
                    : ""
            }

            ${
                Array.isArray(lesson.quiz)
                    ? `
                        <h3>❓ Knowledge Check</h3>

                        ${lesson.quiz
                            .map(q => `

                                <div class="card"
                                     style="padding:14px;margin:10px 0;">

                                    <strong>
                                        ${escapeHTML(
                                            q.question || ""
                                        )}
                                    </strong>

                                </div>

                            `)
                            .join("")}

                    `
                    : ""
            }

        `;

    }


    /* =====================================================
       DYNAMIC EVENTS
    ===================================================== */

    function bindDynamicEvents() {

        document
            .querySelectorAll(
                "[data-open-course]"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        openCourse(
                            button.dataset.openCourse
                        );

                    }
                );

            });


        document
            .querySelectorAll(
                "[data-open-lesson]"
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        openLesson(
                            button.dataset.openLesson,
                            Number(
                                button.dataset.lessonIndex
                            )
                        );

                    }
                );

            });


        document
            .querySelectorAll(
                '[data-action="show-courses"]'
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        renderView(
                            "courses"
                        );

                    }
                );

            });


        document
            .querySelectorAll(
                '[data-action="back-courses"]'
            )
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        renderView(
                            "courses"
                        );

                    }
                );

            });

    }


    /* =====================================================
       PREMIUM MODAL
    ===================================================== */

    function openPremiumModal() {

        if (!premiumModal) {
            return;
        }

        premiumModal.classList.add(
            "show"
        );

        premiumModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    }


    function closePremiumModal() {

        if (!premiumModal) {
            return;
        }

        premiumModal.classList.remove(
            "show"
        );

        premiumModal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    function openMobileMenu() {

        sidebar?.classList.add(
            "mobile-open"
        );

        sidebarOverlay?.classList.add(
            "show"
        );

    }


    function closeMobileMenu() {

        sidebar?.classList.remove(
            "mobile-open"
        );

        sidebarOverlay?.classList.remove(
            "show"
        );

    }


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(message) {

        let toast =
            document.getElementById(
                "aungToast"
            );

        if (!toast) {

            toast =
                document.createElement(
                    "div"
                );

            toast.id =
                "aungToast";

            toast.style.position =
                "fixed";

            toast.style.left =
                "50%";

            toast.style.bottom =
                "25px";

            toast.style.transform =
                "translateX(-50%)";

            toast.style.zIndex =
                "10000";

            toast.style.background =
                "#0f172a";

            toast.style.color =
                "#ffffff";

            toast.style.padding =
                "11px 16px";

            toast.style.borderRadius =
                "10px";

            toast.style.fontSize =
                "11px";

            toast.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.2)";

            document.body.appendChild(
                toast
            );

        }

        toast.textContent =
            message;

        toast.style.display =
            "block";

        clearTimeout(
            toast._timer
        );

        toast._timer =
            setTimeout(
                () => {

                    toast.style.display =
                        "none";

                },
                2500
            );

    }


    /* =====================================================
       RESET PROGRESS
    ===================================================== */

    function resetProgress() {

        const confirmReset =
            window.confirm(
                "Learning progress အားလုံးကို ဖျက်မလား?"
            );

        if (!confirmReset) {
            return;
        }

        localStorage.removeItem(
            APP.storage.completed
        );

        showToast(
            "Progress reset လုပ်ပြီးပါပြီ။"
        );

        renderView(
            currentView
        );

    }


    /* =====================================================
       HTML ESCAPE
    ===================================================== */

    function escapeHTML(value) {

        return String(
            value ?? ""
        )
            .replace(
                /&/g,
                "&amp;"
            )
            .replace(
                /</g,
                "&lt;"
            )
            .replace(
                />/g,
                "&gt;"
            )
            .replace(
                /"/g,
                "&quot;"
            )
            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* =====================================================
       GLOBAL PROGRESS REFRESH
    ===================================================== */

    function updateAllProgress() {

        updatePremiumUI();

        if (
            currentView === "dashboard" ||
            currentView === "courses" ||
            currentView === "progress"
        ) {

            renderView(
                currentView
            );

        }

    }


    /* =====================================================
       KEYBOARD
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closePremiumModal();
                closeLesson();
                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       NAVIGATION EVENTS
    ===================================================== */

    document
        .querySelectorAll(
            ".nav-item"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const view =
                        button.dataset.view;

                    if (view) {

                        renderView(
                            view
                        );

                    }

                }
            );

        });


    /* =====================================================
       MOBILE MENU EVENTS
    ===================================================== */

    mobileMenuBtn?.addEventListener(
        "click",
        openMobileMenu
    );

    sidebarOverlay?.addEventListener(
        "click",
        closeMobileMenu
    );


    /* =====================================================
       PREMIUM EVENTS
    ===================================================== */

    premiumBtn?.addEventListener(
        "click",
        openPremiumModal
    );

    premiumModalClose?.addEventListener(
        "click",
        closePremiumModal
    );

    activatePremiumBtn?.addEventListener(
        "click",
        activatePremium
    );

    premiumModal
        ?.querySelector(
            ".modal-backdrop"
        )
        ?.addEventListener(
            "click",
            closePremiumModal
        );


    /* =====================================================
       EXTERNAL PROGRESS EVENT
    ===================================================== */

    document.addEventListener(
        "aungAcademyProgressUpdated",
        () => {

            updatePremiumUI();

            if (
                currentView === "dashboard" ||
                currentView === "courses" ||
                currentView === "progress"
            ) {

                renderView(
                    currentView
                );

            }

        }
    );


    /* =====================================================
       GLOBAL API
    ===================================================== */

    window.AungBusinessAcademyApp = {

        getCourses:
            getAllCourses,

        getCourse,

        openCourse,

        openLesson,

        closeLesson,

        getCourseProgress,

        getOverallProgress,

        isPremium,

        activatePremium,

        openPremiumModal,

        closePremiumModal,

        markLessonCompleted,

        isLessonCompleted,

        renderView,

        showToast

    };


    /* =====================================================
       START APPLICATION
    ===================================================== */

    updatePremiumUI();

    renderDashboard();


})();
