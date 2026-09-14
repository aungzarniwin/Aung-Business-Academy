/* ============================================================
   AUNG BUSINESS ACADEMY
   ACADEMY UPGRADE.JS
   PROFESSIONAL ACADEMY + BUSINESS ENGLISH
   ============================================================

   PURPOSE
   ------------------------------------------------------------
   - Does NOT replace app.js
   - Does NOT replace existing lessons
   - Adds Professional Academy layer
   - Adds 11-course structure
   - Adds Business English 45 lessons
   - Adds course dashboard
   - Adds lesson catalog
   - Adds Business English learning area
   - Adds practice / notes / progress
   - Connects to existing app functions when available
   - Safe fallback if old V15 functions are unavailable

   INSTALLATION
   ------------------------------------------------------------
   1. Create academy-upgrade.js
   2. Paste this entire file
   3. Save / Commit
   4. Add this line in index.html AFTER app.js:

      <script src="academy-upgrade.js"></script>

   ============================================================ */

(function () {

  "use strict";

  /* ==========================================================
     CONFIG
     ========================================================== */

  const AU_VERSION = "1.0.0";

  const AU_KEYS = {
    progress: "aung_academy_upgrade_progress",
    notes: "aung_academy_upgrade_notes",
    practice: "aung_academy_upgrade_practice",
    selectedCourse: "aung_academy_upgrade_selected_course",
    selectedLesson: "aung_academy_upgrade_selected_lesson"
  };


  /* ==========================================================
     SAFE HELPERS
     ========================================================== */

  function auGet(key, fallback) {

    try {

      const value =
        localStorage.getItem(key);

      if (value === null) {
        return fallback;
      }

      return JSON.parse(value);

    } catch (error) {

      console.warn(
        "Academy Upgrade localStorage read error:",
        error
      );

      return fallback;

    }

  }


  function auSet(key, value) {

    try {

      localStorage.setItem(
        key,
        JSON.stringify(value)
      );

      return true;

    } catch (error) {

      console.warn(
        "Academy Upgrade localStorage write error:",
        error
      );

      return false;

    }

  }


  function auEscape(value) {

    const text =
      String(value ?? "");

    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function auNumber(value) {

    const number =
      Number(value);

    return Number.isFinite(number)
      ? number
      : 0;

  }


  function auMoney(value) {

    return auNumber(value)
      .toLocaleString("en-US");

  }


  function auPercent(value) {

    return Math.max(
      0,
      Math.min(
        100,
        auNumber(value)
      )
    ).toFixed(0);

  }


  function auCall(functionName, ...args) {

    try {

      if (
        typeof window[functionName] ===
        "function"
      ) {

        return window[functionName](...args);

      }

    } catch (error) {

      console.warn(
        "Academy Upgrade function call failed:",
        functionName,
        error
      );

    }

    return null;

  }


  function auPremium() {

    try {

      if (
        typeof window.hasPremiumAccess ===
        "function"
      ) {

        return !!window.hasPremiumAccess();

      }

      if (
        window.AungPremium &&
        typeof window.AungPremium.hasAccess ===
        "function"
      ) {

        return !!window.AungPremium.hasAccess();

      }

      const raw =
        localStorage.getItem(
          "aung_business_academy_premium"
        );

      if (!raw) {
        return false;
      }

      const data =
        JSON.parse(raw);

      if (
        !data ||
        !data.expiresAt
      ) {

        return false;

      }

      return (
        Date.now() <
        Number(data.expiresAt)
      );

    } catch (error) {

      return false;

    }

  }


  function auOpenPremium() {

    if (
      typeof window.openPremium ===
      "function"
    ) {

      window.openPremium();
      return;

    }

    if (
      typeof window.openPremiumAccess ===
      "function"
    ) {

      window.openPremiumAccess();
      return;

    }

    alert(
      "Premium Academy ကိုဖွင့်ရန် Premium Access လိုအပ်ပါတယ်"
    );

  }


  function auUserName() {

    try {

      if (
        typeof window.getUserName ===
        "function"
      ) {

        return window.getUserName();

      }

    } catch (error) {}

    try {

      const raw =
        localStorage.getItem(
          "aung_business_academy_user"
        );

      if (raw) {

        const user =
          JSON.parse(raw);

        return (
          user?.name ||
          "Aung"
        );

      }

    } catch (error) {}

    return "Aung";

  }


  /* ==========================================================
     COURSE DATA
     ========================================================== */

  const AU_COURSES = [

    {
      id: "business-fundamentals",
      icon: "📘",
      title: "Business Fundamentals",
      titleMM: "စီးပွားရေးအခြေခံ",
      description:
        "Build a strong foundation in business, customers, revenue, cost and profit.",
      lessons: 8,
      level: "Beginner",
      premium: false
    },

    {
      id: "strategic-management",
      icon: "🎯",
      title: "Strategic Management",
      titleMM: "မဟာဗျူဟာ စီမံခန့်ခွဲမှု",
      description:
        "Learn strategy, SWOT, competition, goals and business decision making.",
      lessons: 8,
      level: "Intermediate",
      premium: true
    },

    {
      id: "marketing-management",
      icon: "📣",
      title: "Marketing Management",
      titleMM: "Marketing စီမံခန့်ခွဲမှု",
      description:
        "Plan marketing, branding, campaigns, customer segments and marketing KPI.",
      lessons: 10,
      level: "Intermediate",
      premium: true
    },

    {
      id: "sales-management",
      icon: "📈",
      title: "Sales Management",
      titleMM: "အရောင်း စီမံခန့်ခွဲမှု",
      description:
        "Master targets, pipeline, forecasting, sales KPI and team management.",
      lessons: 10,
      level: "Intermediate",
      premium: true
    },

    {
      id: "financial-management",
      icon: "💰",
      title: "Financial Management",
      titleMM: "ဘဏ္ဍာရေး စီမံခန့်ခွဲမှု",
      description:
        "Understand P&L, cash flow, margin, break-even, ROI and financial decisions.",
      lessons: 10,
      level: "Intermediate",
      premium: true
    },

    {
      id: "people-leadership",
      icon: "👥",
      title: "People & Leadership",
      titleMM: "လူနှင့် ခေါင်းဆောင်မှု",
      description:
        "Build teams, coach people, manage performance and lead effectively.",
      lessons: 10,
      level: "Intermediate",
      premium: true
    },

    {
      id: "customer-management",
      icon: "🤝",
      title: "Customer Management",
      titleMM: "Customer စီမံခန့်ခွဲမှု",
      description:
        "Develop CRM, retention, customer satisfaction and key account skills.",
      lessons: 10,
      level: "Intermediate",
      premium: true
    },

    {
      id: "operations-inventory",
      icon: "📦",
      title: "Operations & Inventory",
      titleMM: "လုပ်ငန်းနှင့် Stock စီမံခန့်ခွဲမှု",
      description:
        "Improve operations, SOP, productivity, stock control and supply chain.",
      lessons: 10,
      level: "Intermediate",
      premium: true
    },

    {
      id: "negotiation-communication",
      icon: "🗣️",
      title: "Negotiation & Communication",
      titleMM: "ညှိနှိုင်းခြင်းနှင့် ဆက်သွယ်ရေး",
      description:
        "Improve negotiation, communication, presentation and business conversation.",
      lessons: 10,
      level: "Intermediate",
      premium: true
    },

    {
      id: "business-growth",
      icon: "🚀",
      title: "Business Growth & Entrepreneurship",
      titleMM: "Business Growth နှင့် Entrepreneurship",
      description:
        "Learn opportunity, startup planning, expansion, scaling and growth strategy.",
      lessons: 10,
      level: "Advanced",
      premium: true
    },

    {
      id: "business-english",
      icon: "🇬🇧",
      title: "Business English",
      titleMM: "စီးပွားရေးအင်္ဂလိပ်စာ",
      description:
        "Practical English for managers, meetings, sales, negotiation, presentation and interviews.",
      lessons: 45,
      level: "Beginner → Advanced",
      premium: true
    }

  ];


  /* ==========================================================
     BUSINESS ENGLISH — 45 LESSONS
     ========================================================== */

  const AU_BUSINESS_ENGLISH = [

    {
      id: 1,
      title: "Business Vocabulary",
      mm: "စီးပွားရေးသုံး အင်္ဂလိပ်စကားလုံးများ",
      category: "Foundation",
      level: "Beginner"
    },

    {
      id: 2,
      title: "Professional Self Introduction",
      mm: "Professional ကိုယ်ရေးမိတ်ဆက်",
      category: "Foundation",
      level: "Beginner"
    },

    {
      id: 3,
      title: "Introducing Your Company",
      mm: "ကိုယ့် Company ကို မိတ်ဆက်ခြင်း",
      category: "Foundation",
      level: "Beginner"
    },

    {
      id: 4,
      title: "Job & Position Vocabulary",
      mm: "ရာထူးနှင့် အလုပ်အကိုင် Vocabulary",
      category: "Foundation",
      level: "Beginner"
    },

    {
      id: 5,
      title: "Numbers & Business Figures",
      mm: "Business Numbers နှင့် Data",
      category: "Foundation",
      level: "Beginner"
    },

    {
      id: 6,
      title: "Speaking in Meetings",
      mm: "Meeting တွင် အင်္ဂလိပ်လိုပြောခြင်း",
      category: "Meetings",
      level: "Beginner"
    },

    {
      id: 7,
      title: "Giving Opinions",
      mm: "ကိုယ့်အမြင်ကို ပြောခြင်း",
      category: "Meetings",
      level: "Beginner"
    },

    {
      id: 8,
      title: "Agreeing & Disagreeing",
      mm: "သဘောတူခြင်း၊ မတူခြင်း",
      category: "Meetings",
      level: "Beginner"
    },

    {
      id: 9,
      title: "Asking Professional Questions",
      mm: "Professional မေးခွန်းများမေးခြင်း",
      category: "Meetings",
      level: "Beginner"
    },

    {
      id: 10,
      title: "Making Suggestions",
      mm: "အကြံပြုချက်ပေးခြင်း",
      category: "Meetings",
      level: "Beginner"
    },

    {
      id: 11,
      title: "Managerial Communication",
      mm: "Manager Communication",
      category: "Management",
      level: "Intermediate"
    },

    {
      id: 12,
      title: "Giving Instructions",
      mm: "ညွှန်ကြားချက်ပေးခြင်း",
      category: "Management",
      level: "Intermediate"
    },

    {
      id: 13,
      title: "Giving Feedback",
      mm: "Feedback ပေးခြင်း",
      category: "Management",
      level: "Intermediate"
    },

    {
      id: 14,
      title: "Team Discussion",
      mm: "Team Discussion",
      category: "Management",
      level: "Intermediate"
    },

    {
      id: 15,
      title: "Performance Review",
      mm: "Performance Review ပြုလုပ်ခြင်း",
      category: "Management",
      level: "Intermediate"
    },

    {
      id: 16,
      title: "Sales Conversation",
      mm: "Sales Conversation",
      category: "Sales English",
      level: "Intermediate"
    },

    {
      id: 17,
      title: "Customer Meeting",
      mm: "Customer Meeting",
      category: "Sales English",
      level: "Intermediate"
    },

    {
      id: 18,
      title: "Product Presentation",
      mm: "Product Presentation",
      category: "Sales English",
      level: "Intermediate"
    },

    {
      id: 19,
      title: "Handling Objections",
      mm: "Customer Objection ကို ကိုင်တွယ်ခြင်း",
      category: "Sales English",
      level: "Intermediate"
    },

    {
      id: 20,
      title: "Closing a Deal",
      mm: "Deal ပိတ်ခြင်း",
      category: "Sales English",
      level: "Intermediate"
    },

    {
      id: 21,
      title: "Negotiation Vocabulary",
      mm: "Negotiation Vocabulary",
      category: "Negotiation",
      level: "Intermediate"
    },

    {
      id: 22,
      title: "Making Offers",
      mm: "Offer ပြုလုပ်ခြင်း",
      category: "Negotiation",
      level: "Intermediate"
    },

    {
      id: 23,
      title: "Counter Offers",
      mm: "Counter Offer ပြုလုပ်ခြင်း",
      category: "Negotiation",
      level: "Intermediate"
    },

    {
      id: 24,
      title: "Negotiating Price",
      mm: "ဈေးနှုန်းညှိနှိုင်းခြင်း",
      category: "Negotiation",
      level: "Intermediate"
    },

    {
      id: 25,
      title: "Reaching Agreement",
      mm: "သဘောတူညီချက်ရယူခြင်း",
      category: "Negotiation",
      level: "Intermediate"
    },

    {
      id: 26,
      title: "Business Presentation",
      mm: "Business Presentation",
      category: "Presentation",
      level: "Intermediate"
    },

    {
      id: 27,
      title: "Presenting Data",
      mm: "Data ကို Presentation လုပ်ခြင်း",
      category: "Presentation",
      level: "Intermediate"
    },

    {
      id: 28,
      title: "Explaining Charts",
      mm: "Chart များရှင်းပြခြင်း",
      category: "Presentation",
      level: "Intermediate"
    },

    {
      id: 29,
      title: "Executive Presentation",
      mm: "Executive Presentation",
      category: "Presentation",
      level: "Advanced"
    },

    {
      id: 30,
      title: "Q&A",
      mm: "Presentation Q&A ဖြေခြင်း",
      category: "Presentation",
      level: "Intermediate"
    },

    {
      id: 31,
      title: "Professional Email",
      mm: "Professional Email ရေးခြင်း",
      category: "Business Writing",
      level: "Intermediate"
    },

    {
      id: 32,
      title: "Email Requests",
      mm: "Email ဖြင့် Request ပြုလုပ်ခြင်း",
      category: "Business Writing",
      level: "Intermediate"
    },

    {
      id: 33,
      title: "Email Follow-up",
      mm: "Follow-up Email ရေးခြင်း",
      category: "Business Writing",
      level: "Intermediate"
    },

    {
      id: 34,
      title: "Business Reports",
      mm: "Business Report ရေးခြင်း",
      category: "Business Writing",
      level: "Advanced"
    },

    {
      id: 35,
      title: "Meeting Minutes",
      mm: "Meeting Minutes ရေးခြင်း",
      category: "Business Writing",
      level: "Intermediate"
    },

    {
      id: 36,
      title: "CV & Resume English",
      mm: "CV နှင့် Resume English",
      category: "Career English",
      level: "Intermediate"
    },

    {
      id: 37,
      title: "Job Interview English",
      mm: "Job Interview English",
      category: "Career English",
      level: "Intermediate"
    },

    {
      id: 38,
      title: "Manager Interview English",
      mm: "Manager Interview English",
      category: "Career English",
      level: "Advanced"
    },

    {
      id: 39,
      title: "Answering Difficult Questions",
      mm: "ခက်ခဲသော မေးခွန်းများဖြေခြင်း",
      category: "Career English",
      level: "Advanced"
    },

    {
      id: 40,
      title: "Professional Networking",
      mm: "Professional Networking",
      category: "Career English",
      level: "Intermediate"
    },

    {
      id: 41,
      title: "AI English Conversation",
      mm: "AI နှင့် English Conversation",
      category: "AI English",
      level: "Intermediate"
    },

    {
      id: 42,
      title: "Business Role Play",
      mm: "Business Role Play",
      category: "AI English",
      level: "Intermediate"
    },

    {
      id: 43,
      title: "Customer Role Play",
      mm: "Customer Role Play",
      category: "AI English",
      level: "Intermediate"
    },

    {
      id: 44,
      title: "Manager Role Play",
      mm: "Manager Role Play",
      category: "AI English",
      level: "Advanced"
    },

    {
      id: 45,
      title: "Interview Role Play",
      mm: "Interview Role Play",
      category: "AI English",
      level: "Advanced"
    }

  ];


  /* ==========================================================
     NEW COURSE LESSON TITLES
     ========================================================== */

  const AU_NEW_LESSONS = {

    "business-fundamentals": [
      "Understanding Business",
      "Business Model",
      "Customer Value",
      "Revenue Model",
      "Cost Structure",
      "Profit Fundamentals",
      "Business Health",
      "Business Planning"
    ],

    "strategic-management": [
      "Vision & Mission",
      "SWOT Analysis",
      "Competitor Analysis",
      "Market Position",
      "Strategic Goals",
      "Strategic Planning",
      "Risk Management",
      "Competitive Advantage"
    ],

    "marketing-management": [
      "Marketing Fundamentals",
      "Customer Segmentation",
      "Target Market",
      "Brand Positioning",
      "Brand Strategy",
      "Marketing Plan",
      "Campaign Planning",
      "Marketing KPI",
      "Digital Marketing",
      "Marketing ROI"
    ],

    "sales-management": [
      "Sales Management Fundamentals",
      "Sales Target",
      "Sales Planning",
      "Sales Pipeline",
      "Sales Forecast",
      "Territory Management",
      "Customer Development",
      "Sales KPI",
      "Sales Team Management",
      "Sales Review"
    ],

    "financial-management": [
      "Revenue & Cost",
      "Gross Profit",
      "Net Profit",
      "Gross Margin",
      "Net Margin",
      "P&L",
      "Cash Flow",
      "Break-even",
      "ROI",
      "Financial Decision Making"
    ],

    "people-leadership": [
      "Leadership Fundamentals",
      "Team Building",
      "Delegation",
      "Coaching",
      "Motivation",
      "Performance Management",
      "Employee KPI",
      "Feedback",
      "Conflict Management",
      "Leadership Review"
    ],

    "customer-management": [
      "Customer Journey",
      "CRM Fundamentals",
      "Customer Segmentation",
      "Customer Retention",
      "Customer Satisfaction",
      "Complaint Handling",
      "Customer Value",
      "Key Account Management",
      "Customer KPI",
      "Retention Strategy"
    ],

    "operations-inventory": [
      "Operations Fundamentals",
      "SOP Management",
      "Productivity",
      "Inventory Fundamentals",
      "Stock Control",
      "Stock Turnover",
      "Reorder Point",
      "Supply Chain",
      "Cost Control",
      "Operational KPI"
    ],

    "negotiation-communication": [
      "Business Communication",
      "Professional Communication",
      "Negotiation Fundamentals",
      "Negotiation Preparation",
      "Bargaining",
      "Objection Handling",
      "Deal Analysis",
      "Presentation Skills",
      "Meeting Management",
      "Difficult Conversations"
    ],

    "business-growth": [
      "Entrepreneurial Mindset",
      "Business Opportunity",
      "Business Model Development",
      "Market Validation",
      "Startup Planning",
      "Growth Strategy",
      "New Product Development",
      "Business Expansion",
      "Scaling",
      "Long-term Strategy"
    ]

  };


  /* ==========================================================
     COURSE ICON COLOR / CATEGORY HELPERS
     ========================================================== */

  function auCourseById(courseId) {

    return AU_COURSES.find(
      course =>
        course.id === courseId
    ) || null;

  }


  function auGetProgress() {

    return auGet(
      AU_KEYS.progress,
      {}
    );

  }


  function auSaveProgress(progress) {

    auSet(
      AU_KEYS.progress,
      progress
    );

  }


  function auIsCompleted(
    courseId,
    lessonId
  ) {

    const progress =
      auGetProgress();

    return !!(
      progress[
        courseId
      ] &&
      progress[
        courseId
      ][lessonId]
    );

  }


  function auMarkComplete(
    courseId,
    lessonId
  ) {

    const progress =
      auGetProgress();

    if (
      !progress[courseId]
    ) {

      progress[courseId] = {};

    }

    progress[
      courseId
    ][lessonId] = {
      completed: true,
      completedAt:
        new Date().toISOString()
    };

    auSaveProgress(progress);

    try {

      if (
        courseId ===
        "business-english"
      ) {

        const globalLessons =
          window.lessons;

        if (
          Array.isArray(
            globalLessons
          )
        ) {

          // Business English uses its own progress
          // and does not alter existing lesson IDs

        }

      }

    } catch (error) {}

  }


  function auCourseProgress(
    course
  ) {

    const progress =
      auGetProgress();

    const courseProgress =
      progress[
        course.id
      ] || {};

    const total =
      Number(course.lessons) || 0;

    if (!total) {
      return 0;
    }

    const completed =
      Object.keys(
        courseProgress
      ).filter(
        key =>
          courseProgress[key] &&
          courseProgress[key].completed
      ).length;

    return Math.min(
      100,
      Math.round(
        completed /
        total *
        100
      )
    );

  }


  /* ==========================================================
     EXISTING LESSON COUNT
     ========================================================== */

  function auExistingLessonCount() {

    try {

      if (
        Array.isArray(
          window.lessons
        )
      ) {

        return window.lessons.length;

      }

    } catch (error) {}

    return 230;

  }


  /* ==========================================================
     TOTAL ACADEMY COUNT
     ========================================================== */

  function auNewLessonCount() {

    return (
      Object.values(
        AU_NEW_LESSONS
      )
      .reduce(
        (
          total,
          list
        ) =>
          total +
          list.length,
        0
      )
      +
      AU_BUSINESS_ENGLISH.length
    );

  }


  function auTotalTarget() {

    return Math.max(
      300,
      auExistingLessonCount() +
      auNewLessonCount()
    );

  }


  /* ==========================================================
     OPEN ACADEMY
     ========================================================== */

  function openAcademyUpgrade() {

    auRenderAcademy();

  }


  function auRenderAcademy() {

    const existing =
      auExistingLessonCount();

    const target =
      auTotalTarget();

    const user =
      auUserName();

    const premium =
      auPremium();

    let html = `

      <div class="au-wrapper">

        <div class="au-hero">

          <div class="au-hero-main">

            <div class="au-eyebrow">
              AUNG BUSINESS ACADEMY
            </div>

            <h1>
              Professional Academy
            </h1>

            <p>
              Business Management + Business English + AI Learning
            </p>

            <div class="au-welcome">
              မင်္ဂလာပါ
              <strong>
                ${auEscape(user)}
              </strong>
              👋
            </div>

          </div>

          <div class="au-status">

            <div class="au-status-icon">
              ${premium ? "🟢" : "🔒"}
            </div>

            <strong>
              ${premium
                ? "Premium Active"
                : "Free Academy"}
            </strong>

            <span>
              ${premium
                ? "Full professional learning access"
                : "Basic learning access"}
            </span>

          </div>

        </div>


        <div class="au-stats">

          <div class="au-stat">

            <span>
              Existing Lessons
            </span>

            <strong>
              ${existing}
            </strong>

            <small>
              Preserved
            </small>

          </div>


          <div class="au-stat">

            <span>
              Academy Courses
            </span>

            <strong>
              ${AU_COURSES.length}
            </strong>

            <small>
              Professional courses
            </small>

          </div>


          <div class="au-stat">

            <span>
              Business English
            </span>

            <strong>
              45
            </strong>

            <small>
              Lessons
            </small>

          </div>


          <div class="au-stat">

            <span>
              Academy Target
            </span>

            <strong>
              ${target}+
            </strong>

            <small>
              Total lessons
            </small>

          </div>

        </div>


        <div class="au-toolbar">

          <button
            class="au-button au-button-primary"
            onclick="window.auShowAllCourses()"
          >
            🎓 All Courses
          </button>

          <button
            class="au-button"
            onclick="window.auOpenBusinessEnglish()"
          >
            🇬🇧 Business English
          </button>

          <button
            class="au-button"
            onclick="window.auOpenExistingLessons()"
          >
            📚 Existing Lessons
          </button>

          <button
            class="au-button"
            onclick="window.auOpenLearningProgress()"
          >
            📊 My Progress
          </button>

        </div>


        <div
          id="au-course-area"
          class="au-course-area"
        ></div>

      </div>

    `;


    auOpenModal(
      html
    );

    auShowAllCourses();

  }


  /* ==========================================================
     MODAL
     ========================================================== */

  function auOpenModal(
    html
  ) {

    try {

      if (
        typeof window.showModal ===
        "function"
      ) {

        window.showModal(
          html
        );

        return;

      }

    } catch (error) {

      console.warn(
        "Existing showModal failed:",
        error
      );

    }


    const old =
      document.getElementById(
        "auStandaloneModal"
      );

    if (old) {
      old.remove();
    }


    const modal =
      document.createElement(
        "div"
      );

    modal.id =
      "auStandaloneModal";

    modal.className =
      "au-standalone-modal";

    modal.innerHTML = `

      <div class="au-standalone-inner">

        <button
          class="au-close"
          onclick="window.auCloseStandaloneModal()"
        >
          ×
        </button>

        ${html}

      </div>

    `;


    document.body.appendChild(
      modal
    );

  }


  function auCloseStandaloneModal() {

    const modal =
      document.getElementById(
        "auStandaloneModal"
      );

    if (modal) {
      modal.remove();
    }

  }


  /* ==========================================================
     COURSE LIST
     ========================================================== */

  function auShowAllCourses() {

    const area =
      document.getElementById(
        "au-course-area"
      );

    if (!area) {
      return;
    }


    let html = `

      <div class="au-section-head">

        <div>

          <span class="au-label">
            PROFESSIONAL CURRICULUM
          </span>

          <h2>
            🎓 Academy Courses
          </h2>

          <p>
            Business, Management, Finance, Leadership, Growth and Business English
          </p>

        </div>

      </div>


      <div class="au-course-grid">

    `;


    AU_COURSES.forEach(
      course => {

        const progress =
          auCourseProgress(
            course
          );

        const locked =
          course.premium &&
          !auPremium();


        html += `

          <div
            class="au-course-card
            ${locked ? "au-locked" : ""}"
          >

            <div class="au-course-top">

              <div class="au-course-icon">
                ${course.icon}
              </div>

              <div class="au-course-level">
                ${auEscape(course.level)}
              </div>

            </div>


            <h3>
              ${auEscape(course.title)}
            </h3>

            <div class="au-course-mm">
              ${auEscape(course.titleMM)}
            </div>

            <p>
              ${auEscape(course.description)}
            </p>


            <div class="au-course-meta">

              <span>
                📚 ${course.lessons} Lessons
              </span>

              ${
                course.premium
                  ? `<span>🔒 Premium</span>`
                  : `<span>🆓 Free</span>`
              }

            </div>


            <div class="au-progress">

              <div
                class="au-progress-bar"
                style="width:${progress}%"
              ></div>

            </div>


            <div class="au-progress-text">
              ${progress}% Complete
            </div>


            <button
              class="au-course-button"
              onclick="window.auOpenCourse('${course.id}')"
            >

              ${
                locked
                  ? "🔒 Unlock Course"
                  : "▶️ Open Course"
              }

            </button>

          </div>

        `;

      }
    );


    html += `

      </div>

    `;


    area.innerHTML =
      html;

  }


  /* ==========================================================
     OPEN COURSE
     ========================================================== */

  function auOpenCourse(
    courseId
  ) {

    const course =
      auCourseById(
        courseId
      );

    if (!course) {
      return;
    }


    if (
      course.premium &&
      !auPremium()
    ) {

      auOpenPremium();

      return;

    }


    if (
      courseId ===
      "business-english"
    ) {

      auOpenBusinessEnglish();

      return;

    }


    auOpenNewCourse(
      course
    );

  }


  function auOpenNewCourse(
    course
  ) {

    const lessonsList =
      AU_NEW_LESSONS[
        course.id
      ] || [];


    let html = `

      <div class="au-course-detail">

        <button
          class="au-back"
          onclick="window.auShowAllCourses()"
        >
          ← Back to Courses
        </button>


        <div class="au-detail-header">

          <div class="au-detail-icon">
            ${course.icon}
          </div>

          <div>

            <div class="au-label">
              PROFESSIONAL COURSE
            </div>

            <h2>
              ${auEscape(course.title)}
            </h2>

            <p>
              ${auEscape(course.titleMM)}
            </p>

          </div>

        </div>


        <div class="au-learning-flow">

          <span>📖 Learn</span>
          <span>→</span>
          <span>💼 Practice</span>
          <span>→</span>
          <span>🧮 Tool</span>
          <span>→</span>
          <span>📊 KPI</span>
          <span>→</span>
          <span>🤖 AI</span>
          <span>→</span>
          <span>📝 Quiz</span>

        </div>


        <div class="au-lesson-list">

    `;


    lessonsList.forEach(
      (
        title,
        index
      ) => {

        const lessonId =
          index + 1;

        const complete =
          auIsCompleted(
            course.id,
            lessonId
          );


        html += `

          <div
            class="au-lesson-row"
          >

            <div class="au-lesson-number">
              ${String(
                lessonId
              ).padStart(2, "0")}
            </div>


            <div class="au-lesson-info">

              <strong>
                ${auEscape(title)}
              </strong>

              <span>
                ${
                  complete
                    ? "Completed"
                    : "Learn → Practice → KPI → AI"
                }
              </span>

            </div>


            <div class="au-lesson-status">

              ${
                complete
                  ? "✅"
                  : "▶️"
              }

            </div>


            <button
              class="au-small-button"
              onclick="window.auOpenNewLesson('${course.id}',${lessonId})"
            >
              Open
            </button>

          </div>

        `;

      }
    );


    html += `

        </div>

      </div>

    `;


    const area =
      document.getElementById(
        "au-course-area"
      );

    if (area) {

      area.innerHTML =
        html;

      return;

    }


    auOpenModal(
      html
    );

  }


  /* ==========================================================
     NEW COURSE LESSON
     ========================================================== */

  function auOpenNewLesson(
    courseId,
    lessonId
  ) {

    const course =
      auCourseById(
        courseId
      );

    if (!course) {
      return;
    }


    const list =
      AU_NEW_LESSONS[
        courseId
      ] || [];


    const title =
      list[
        Number(lessonId) - 1
      ];


    if (!title) {
      return;
    }


    const complete =
      auIsCompleted(
        courseId,
        lessonId
      );


    let toolName =
      "Business Practice Tool";

    let kpiName =
      "Business KPI";

    if (
      courseId ===
      "marketing-management"
    ) {

      toolName =
        "Marketing Planner";

      kpiName =
        "Marketing ROI / Campaign KPI";

    }

    if (
      courseId ===
      "sales-management"
    ) {

      toolName =
        "Sales Target / Pipeline Tool";

      kpiName =
        "Achievement / Growth / Forecast";

    }

    if (
      courseId ===
      "financial-management"
    ) {

      toolName =
        "P&L / Margin / Break-even Tool";

      kpiName =
        "Profit / Margin / ROI";

    }

    if (
      courseId ===
      "operations-inventory"
    ) {

      toolName =
        "Inventory Calculator";

      kpiName =
        "Stock Turnover / Reorder";

    }

    if (
      courseId ===
      "people-leadership"
    ) {

      toolName =
        "Team Performance Planner";

      kpiName =
        "Employee KPI";

    }


    const html = `

      <div class="au-lesson-view">

        <button
          class="au-back"
          onclick="window.auOpenCourse('${courseId}')"
        >
          ← Back
        </button>


        <div class="au-lesson-header">

          <div class="au-lesson-course">
            ${course.icon}
            ${auEscape(course.title)}
          </div>

          <h2>
            Lesson ${lessonId}: ${auEscape(title)}
          </h2>

          <p>
            ${auEscape(course.titleMM)}
          </p>

        </div>


        <div class="au-learning-grid">

          <div class="au-learning-card">

            <div class="au-learning-icon">
              📖
            </div>

            <h3>
              Learn
            </h3>

            <p>
              ဒီ Lesson ရဲ့ အဓိက Business Concept ကို နားလည်အောင် လေ့လာပါ
            </p>

          </div>


          <div class="au-learning-card">

            <div class="au-learning-icon">
              💼
            </div>

            <h3>
              Practice
            </h3>

            <p>
              ကိုယ့် Business အခြေအနေနဲ့ လက်တွေ့အသုံးချပါ
            </p>

          </div>


          <div class="au-learning-card">

            <div class="au-learning-icon">
              🧮
            </div>

            <h3>
              Tool
            </h3>

            <p>
              ${auEscape(toolName)}
            </p>

          </div>


          <div class="au-learning-card">

            <div class="au-learning-icon">
              📊
            </div>

            <h3>
              KPI
            </h3>

            <p>
              ${auEscape(kpiName)}
            </p>

          </div>


          <div class="au-learning-card">

            <div class="au-learning-icon">
              🤖
            </div>

            <h3>
              AI Advisor
            </h3>

            <p>
              ဒီ Lesson နဲ့ပတ်သက်ပြီး AI Business Advisor ကို မေးနိုင်ပါတယ်
            </p>

          </div>


          <div class="au-learning-card">

            <div class="au-learning-icon">
              📝
            </div>

            <h3>
              Quiz
            </h3>

            <p>
              Lesson knowledge ကို စစ်ဆေးပါ
            </p>

          </div>

        </div>


        <div class="au-practice-box">

          <h3>
            💼 Practical Business Exercise
          </h3>

          <p>
            ဒီ Lesson ကို ကိုယ့်လုပ်ငန်းနဲ့ ချိတ်ဆက်ပြီး အောက်ကနေ ကိုယ်ပိုင် Action ကို ရေးပါ
          </p>

          <textarea
            id="auPracticeText"
            class="au-textarea"
            placeholder="ဒီ Lesson ကနေ သင်ယူပြီး ကိုယ့် Business မှာ ဘာလုပ်မလဲ..."
          ></textarea>


          <div class="au-action-row">

            <button
              class="au-button"
              onclick="window.auSavePractice('${courseId}',${lessonId})"
            >
              💾 Save Practice
            </button>


            <button
              class="au-button"
              onclick="window.auAskLessonAI('${courseId}',${lessonId})"
            >
              🤖 Ask AI
            </button>


            <button
              class="au-button au-button-primary"
              onclick="window.auCompleteNewLesson('${courseId}',${lessonId})"
            >
              ${
                complete
                  ? "✅ Completed"
                  : "✓ Mark Complete"
              }
            </button>

          </div>

        </div>


        <div
          id="auLessonAIResult"
          class="au-ai-result"
        ></div>

      </div>

    `;


    const area =
      document.getElementById(
        "au-course-area"
      );

    if (area) {

      area.innerHTML =
        html;

      const saved =
        auGet(
          AU_KEYS.practice,
          {}
        );

      const savedText =
        saved?.[
          courseId
        ]?.[
          lessonId
        ] || "";

      const input =
        document.getElementById(
          "auPracticeText"
        );

      if (input) {
        input.value =
          savedText;
      }

      return;

    }


    auOpenModal(
      html
    );

  }


  /* ==========================================================
     SAVE PRACTICE
     ========================================================== */

  function auSavePractice(
    courseId,
    lessonId
  ) {

    const input =
      document.getElementById(
        "auPracticeText"
      );

    const text =
      input?.value.trim() ||
      "";


    const data =
      auGet(
        AU_KEYS.practice,
        {}
      );


    if (!data[courseId]) {

      data[courseId] = {};

    }


    data[
      courseId
    ][
      lessonId
    ] = text;


    auSet(
      AU_KEYS.practice,
      data
    );


    auToast(
      "Practice saved successfully ✓"
    );

  }


  /* ==========================================================
     COMPLETE LESSON
     ========================================================== */

  function auCompleteNewLesson(
    courseId,
    lessonId
  ) {

    auMarkComplete(
      courseId,
      lessonId
    );


    auToast(
      "Lesson completed ✓"
    );


    auOpenNewLesson(
      courseId,
      lessonId
    );

  }


  /* ==========================================================
     LESSON AI
     ========================================================== */

  async function auAskLessonAI(
    courseId,
    lessonId
  ) {

    const course =
      auCourseById(
        courseId
      );

    const list =
      AU_NEW_LESSONS[
        courseId
      ] || [];

    const title =
      list[
        Number(lessonId) - 1
      ] || "Business Lesson";


    const result =
      document.getElementById(
        "auLessonAIResult"
      );


    if (result) {

      result.innerHTML = `
        <div class="au-ai-loading">
          🤖 AI Business Advisor is thinking...
        </div>
      `;

    }


    const question =
      `
You are the AI Business Advisor inside Aung Business Academy.

Lesson:
${title}

Course:
${course?.title || ""}

Explain this lesson in practical business terms.

Give:
1. Key concept
2. Myanmar business example
3. Practical action
4. KPI to track
5. Common mistake
6. 7-day action recommendation

Answer in Burmese when possible.
`;


    try {

      let answer = null;


      if (
        typeof window.v12SafeAIFetch ===
        "function"
      ) {

        answer =
          await window.v12SafeAIFetch(
            question
          );

      } else if (
        typeof window.sendAIMessage ===
        "function"
      ) {

        answer =
          await window.sendAIMessage(
            question
          );

      }


      if (!answer) {

        answer =
          "AI connection မရသေးပါ, ဒီ Lesson ကို လက်တွေ့ Business Example နဲ့ ကိုယ်တိုင် Practice လုပ်နိုင်ပါတယ်";

      }


      if (
        typeof answer ===
        "object"
      ) {

        answer =
          answer.reply ||
          answer.response ||
          answer.message ||
          JSON.stringify(
            answer
          );

      }


      if (result) {

        result.innerHTML = `

          <div class="au-ai-answer">

            <div class="au-ai-title">
              🤖 AI Business Advisor
            </div>

            <div class="au-ai-content">
              ${auEscape(answer)}
            </div>

          </div>

        `;

      }

    } catch (error) {

      console.error(
        "Academy AI Error:",
        error
      );


      if (result) {

        result.innerHTML = `

          <div class="au-ai-answer">

            <div class="au-ai-title">
              🤖 AI Business Advisor
            </div>

            <div class="au-ai-content">
              AI server မရသေးပါ, ဒါပေမယ့် Lesson Practice ကို ဆက်လုပ်နိုင်ပါတယ်
            </div>

          </div>

        `;

      }

    }

  }


  /* ==========================================================
     BUSINESS ENGLISH
     ========================================================== */

  function auOpenBusinessEnglish() {

    const course =
      auCourseById(
        "business-english"
      );


    if (
      course?.premium &&
      !auPremium()
    ) {

      auOpenPremium();

      return;

    }


    const area =
      document.getElementById(
        "au-course-area"
      );


    if (!area) {
      return;
    }


    let html = `

      <div class="au-english">

        <button
          class="au-back"
          onclick="window.auShowAllCourses()"
        >
          ← Back to Courses
        </button>


        <div class="au-english-hero">

          <div class="au-english-icon">
            🇬🇧
          </div>

          <div>

            <div class="au-label">
              BUSINESS ENGLISH ACADEMY
            </div>

            <h2>
              Business English
            </h2>

            <p>
              အလုပ်မှာ တကယ်အသုံးချနိုင်တဲ့ Professional English
            </p>

          </div>

        </div>


        <div class="au-english-flow">

          <span>
            Vocabulary
          </span>

          <span>→</span>

          <span>
            Speaking
          </span>

          <span>→</span>

          <span>
            Business Practice
          </span>

          <span>→</span>

          <span>
            AI Role Play
          </span>

          <span>→</span>

          <span>
            Quiz
          </span>

        </div>


        <div class="au-english-category">

    `;


    let currentCategory =
      "";


    AU_BUSINESS_ENGLISH.forEach(
      lesson => {

        if (
          currentCategory !==
          lesson.category
        ) {

          if (
            currentCategory
          ) {

            html +=
              "</div>";

          }


          currentCategory =
            lesson.category;


          html += `

            <div class="au-category-title">
              ${auEscape(
                lesson.category
              )}
            </div>

            <div class="au-english-list">

          `;

        }


        const complete =
          auIsCompleted(
            "business-english",
            lesson.id
          );


        html += `

          <div class="au-english-row">

            <div class="au-english-number">
              ${String(
                lesson.id
              ).padStart(2, "0")}
            </div>


            <div class="au-english-info">

              <strong>
                ${auEscape(
                  lesson.title
                )}
              </strong>

              <span>
                ${auEscape(
                  lesson.mm
                )}
              </span>

            </div>


            <div class="au-english-level">
              ${auEscape(
                lesson.level
              )}
            </div>


            <div class="au-english-status">
              ${
                complete
                  ? "✅"
                  : "○"
              }
            </div>


            <button
              class="au-small-button"
              onclick="window.auOpenEnglishLesson(${lesson.id})"
            >
              Open
            </button>

          </div>

        `;

      }
    );


    if (
      currentCategory
    ) {

      html +=
        "</div>";

    }


    html += `

        </div>

      </div>

    `;


    area.innerHTML =
      html;

  }


  /* ==========================================================
     BUSINESS ENGLISH LESSON
     ========================================================== */

  function auOpenEnglishLesson(
    lessonId
  ) {

    const lesson =
      AU_BUSINESS_ENGLISH.find(
        item =>
          item.id ===
          Number(lessonId)
      );


    if (!lesson) {
      return;
    }


    const complete =
      auIsCompleted(
        "business-english",
        lesson.id
      );


    const practice =
      auGet(
        AU_KEYS.practice,
        {}
      );


    const saved =
      practice?.[
        "business-english"
      ]?.[
        lesson.id
      ] || "";


    const area =
      document.getElementById(
        "au-course-area"
      );


    if (!area) {
      return;
    }


    area.innerHTML = `

      <div class="au-english-lesson">

        <button
          class="au-back"
          onclick="window.auOpenBusinessEnglish()"
        >
          ← Back to Business English
        </button>


        <div class="au-english-lesson-header">

          <div class="au-big-english-icon">
            🇬🇧
          </div>

          <div>

            <div class="au-label">
              ${auEscape(
                lesson.category
              )}
            </div>

            <h2>
              Lesson ${lesson.id}
              —
              ${auEscape(
                lesson.title
              )}
            </h2>

            <p>
              ${auEscape(
                lesson.mm
              )}
            </p>

          </div>

        </div>


        <div class="au-english-learning-grid">

          <div class="au-english-card">

            <div class="au-learning-icon">
              🗣️
            </div>

            <h3>
              Speaking
            </h3>

            <p>
              ဒီ Topic ကို English လို ကိုယ်တိုင်ပြောကြည့်ပါ
            </p>

          </div>


          <div class="au-english-card">

            <div class="au-learning-icon">
              ✍️
            </div>

            <h3>
              Writing
            </h3>

            <p>
              Professional sentence တစ်ကြောင်းကို ကိုယ်တိုင်ရေးပါ
            </p>

          </div>


          <div class="au-english-card">

            <div class="au-learning-icon">
              💼
            </div>

            <h3>
              Business Situation
            </h3>

            <p>
              Meeting, customer, manager သို့မဟုတ် workplace situation တစ်ခုမှာ အသုံးချပါ
            </p>

          </div>


          <div class="au-english-card">

            <div class="au-learning-icon">
              🤖
            </div>

            <h3>
              AI Role Play
            </h3>

            <p>
              AI နဲ့ Business English conversation practice လုပ်ပါ
            </p>

          </div>

        </div>


        <div class="au-phrase-box">

          <h3>
            💡 Practice Method
          </h3>

          <p>
            ① Read → ② Speak → ③ Write → ④ Practice → ⑤ AI Role Play
          </p>

        </div>


        <div class="au-practice-box">

          <h3>
            ✍️ Your English Practice
          </h3>

          <textarea
            id="auPracticeText"
            class="au-textarea"
            placeholder="Write your English sentence or business response here..."
          >${auEscape(
            saved
          )}</textarea>


          <div class="au-action-row">

            <button
              class="au-button"
              onclick="window.auSavePractice('business-english',${lesson.id})"
            >
              💾 Save Practice
            </button>


            <button
              class="au-button"
              onclick="window.auAskEnglishAI(${lesson.id})"
            >
              🤖 Practice with AI
            </button>


            <button
              class="au-button au-button-primary"
              onclick="window.auCompleteEnglishLesson(${lesson.id})"
            >
              ${
                complete
                  ? "✅ Completed"
                  : "✓ Mark Complete"
              }
            </button>

          </div>

        </div>


        <div
          id="auLessonAIResult"
          class="au-ai-result"
        ></div>

      </div>

    `;

  }


  /* ==========================================================
     ENGLISH AI
     ========================================================== */

  async function auAskEnglishAI(
    lessonId
  ) {

    const lesson =
      AU_BUSINESS_ENGLISH.find(
        item =>
          item.id ===
          Number(lessonId)
      );


    if (!lesson) {
      return;
    }


    const input =
      document.getElementById(
        "auPracticeText"
      );


    const userText =
      input?.value.trim() ||
      "";


    const result =
      document.getElementById(
        "auLessonAIResult"
      );


    if (result) {

      result.innerHTML = `
        <div class="au-ai-loading">
          🤖 English Coach is thinking...
        </div>
      `;

    }


    const prompt =
      `
You are a professional Business English Coach inside Aung Business Academy.

Lesson:
${lesson.title}

Myanmar explanation:
${lesson.mm}

Student practice:
${userText || "No answer yet"}

Please help the student learn practical business English.

Give:
1. Correct English
2. More professional version
3. Myanmar explanation
4. Useful vocabulary
5. One realistic business example
6. One short speaking practice
7. One follow-up question

Use simple English and Burmese.
`;


    try {

      let answer = null;


      if (
        typeof window.v12SafeAIFetch ===
        "function"
      ) {

        answer =
          await window.v12SafeAIFetch(
            prompt
          );

      } else if (
        typeof window.sendAIMessage ===
        "function"
      ) {

        answer =
          await window.sendAIMessage(
            prompt
          );

      }


      if (!answer) {

        answer =
          "AI English Coach မရသေးပါ, သင့်ရေးထားတဲ့ sentence ကို အရင် practice လုပ်နိုင်ပါတယ်";

      }


      if (
        typeof answer ===
        "object"
      ) {

        answer =
          answer.reply ||
          answer.response ||
          answer.message ||
          JSON.stringify(
            answer
          );

      }


      if (result) {

        result.innerHTML = `

          <div class="au-ai-answer">

            <div class="au-ai-title">
              🇬🇧 AI English Coach
            </div>

            <div class="au-ai-content">
              ${auEscape(answer)}
            </div>

          </div>

        `;

      }

    } catch (error) {

      console.error(
        "English AI error:",
        error
      );


      if (result) {

        result.innerHTML = `

          <div class="au-ai-answer">

            <div class="au-ai-title">
              🇬🇧 AI English Coach
            </div>

            <div class="au-ai-content">
              AI connection မရသေးပါ, Practice ကို ဆက်လုပ်နိုင်ပါတယ်
            </div>

          </div>

        `;

      }

    }

  }


  function auCompleteEnglishLesson(
    lessonId
  ) {

    auMarkComplete(
      "business-english",
      Number(lessonId)
    );


    auToast(
      "Business English Lesson completed ✓"
    );


    auOpenEnglishLesson(
      Number(lessonId)
    );

  }


  /* ==========================================================
     EXISTING LESSONS
     ========================================================== */

  function auOpenExistingLessons() {

    try {

      if (
        typeof window.openLessons ===
        "function"
      ) {

        window.openLessons();

        return;

      }

    } catch (error) {

      console.warn(
        "Existing Lessons failed:",
        error
      );

    }


    alert(
      "လက်ရှိ Lessons section ကို Main Academy မှာ ဆက်လက်အသုံးပြုနိုင်ပါတယ်"
    );

  }


  /* ==========================================================
     LEARNING PROGRESS
     ========================================================== */

  function auOpenLearningProgress() {

    const progress =
      auGetProgress();


    let completed =
      0;


    Object.keys(
      progress
    ).forEach(
      courseId => {

        const lessons =
          progress[
            courseId
          ] || {};


        Object.keys(
          lessons
        ).forEach(
          lessonId => {

            if (
              lessons[
                lessonId
              ]?.completed
            ) {

              completed++;

            }

          }
        );

      }
    );


    const html = `

      <div class="au-progress-page">

        <button
          class="au-back"
          onclick="window.auShowAllCourses()"
        >
          ← Back to Courses
        </button>


        <div class="au-section-head">

          <div>

            <span class="au-label">
              LEARNING ANALYTICS
            </span>

            <h2>
              📊 My Academy Progress
            </h2>

            <p>
              သင်ယူပြီးသော Professional Academy Lessons
            </p>

          </div>

        </div>


        <div class="au-progress-summary">

          <div class="au-progress-big">

            <strong>
              ${completed}
            </strong>

            <span>
              New Academy Lessons Completed
            </span>

          </div>


          <div class="au-progress-big">

            <strong>
              ${AU_COURSES.length}
            </strong>

            <span>
              Courses
            </span>

          </div>


          <div class="au-progress-big">

            <strong>
              45
            </strong>

            <span>
              Business English Lessons
            </span>

          </div>

        </div>


        <div class="au-course-progress-list">

    `;


    let output =
      html;


    AU_COURSES.forEach(
      course => {

        const percentage =
          auCourseProgress(
            course
          );


        output += `

          <div class="au-progress-course">

            <div>

              <strong>
                ${course.icon}
                ${auEscape(
                  course.title
                )}
              </strong>

              <span>
                ${percentage}%
              </span>

            </div>


            <div class="au-progress">

              <div
                class="au-progress-bar"
                style="width:${percentage}%"
              ></div>

            </div>

          </div>

        `;

      }
    );


    output += `

        </div>

      </div>

    `;


    const area =
      document.getElementById(
        "au-course-area"
      );


    if (area) {

      area.innerHTML =
        output;

    }

  }


  /* ==========================================================
     TOAST
     ========================================================== */

  function auToast(
    message
  ) {

    try {

      if (
        typeof window.showToast ===
        "function"
      ) {

        window.showToast(
          message
        );

        return;

      }

    } catch (error) {}


    const old =
      document.getElementById(
        "auToast"
      );

    if (old) {
      old.remove();
    }


    const toast =
      document.createElement(
        "div"
      );

    toast.id =
      "auToast";

    toast.textContent =
      message;


    toast.style.cssText = `
      position:fixed;
      left:50%;
      bottom:30px;
      transform:translateX(-50%);
      z-index:2147483647;
      background:#111827;
      color:#ffffff;
      padding:12px 18px;
      border-radius:12px;
      font-weight:700;
      box-shadow:0 10px 30px rgba(0,0,0,.25);
      font-family:Arial,sans-serif;
    `;


    document.body.appendChild(
      toast
    );


    setTimeout(
      () => {
        toast.remove();
      },
      2500
    );

  }


  /* ==========================================================
     SIDEBAR BUTTON
     ========================================================== */

  function auFindSidebar() {

    return (
      document.querySelector(
        ".sidebar"
      ) ||
      document.querySelector(
        "#sidebar"
      ) ||
      document.querySelector(
        ".app-sidebar"
      ) ||
      document.querySelector(
        "aside"
      )
    );

  }


  function auAddSidebarButton() {

    if (
      document.getElementById(
        "auProfessionalAcademyButton"
      )
    ) {

      return true;

    }


    const sidebar =
      auFindSidebar();


    if (!sidebar) {

      return false;

    }


    const button =
      document.createElement(
        "button"
      );


    button.id =
      "auProfessionalAcademyButton";


    button.type =
      "button";


    button.className =
      "nav-item au-sidebar-button";


    button.innerHTML =
      `
        <span class="nav-icon">🎓</span>
        <span>Professional Academy</span>
      `;


    button.addEventListener(
      "click",
      function () {

        try {

          if (
            typeof window.closeSidebarMobile ===
            "function"
          ) {

            window.closeSidebarMobile();

          }

        } catch (error) {}


        openAcademyUpgrade();

      }
    );


    const settings =
      sidebar.querySelector(
        '[onclick*="Settings"]'
      );


    if (settings) {

      sidebar.insertBefore(
        button,
        settings
      );

    } else {

      sidebar.appendChild(
        button
      );

    }


    return true;

  }


  /* ==========================================================
     FLOATING BUTTON
     ========================================================== */

  function auAddFloatingButton() {

    if (
      document.getElementById(
        "auFloatingAcademy"
      )
    ) {

      return;

    }


    const button =
      document.createElement(
        "button"
      );


    button.id =
      "auFloatingAcademy";


    button.type =
      "button";


    button.textContent =
      "🎓 Academy";


    button.onclick =
      openAcademyUpgrade;


    button.style.cssText = `
      position:fixed;
      right:20px;
      bottom:20px;
      z-index:999998;
      border:0;
      border-radius:14px;
      padding:13px 17px;
      background:#111827;
      color:#ffffff;
      font-size:14px;
      font-weight:800;
      cursor:pointer;
      box-shadow:0 8px 25px rgba(0,0,0,.25);
      font-family:Arial,sans-serif;
    `;


    document.body.appendChild(
      button
    );

  }


  /* ==========================================================
     CSS
     ========================================================== */

  function auInjectStyles() {

    if (
      document.getElementById(
        "auProfessionalStyles"
      )
    ) {

      return;

    }


    const style =
      document.createElement(
        "style"
      );


    style.id =
      "auProfessionalStyles";


    style.textContent = `

      .au-wrapper {
        width:100%;
        max-width:1250px;
        margin:0 auto;
        padding:10px;
        font-family:
          Arial,
          "Noto Sans Myanmar",
          sans-serif;
        color:#111827;
      }


      .au-hero {
        display:flex;
        justify-content:space-between;
        gap:20px;
        padding:28px;
        border-radius:24px;
        background:
          linear-gradient(
            135deg,
            #111827,
            #1e3a8a
          );
        color:#ffffff;
        margin-bottom:18px;
      }


      .au-hero-main {
        flex:1;
      }


      .au-eyebrow,
      .au-label {
        font-size:11px;
        font-weight:800;
        letter-spacing:.12em;
        opacity:.75;
        margin-bottom:7px;
      }


      .au-hero h1 {
        margin:0 0 8px;
        font-size:32px;
        line-height:1.15;
      }


      .au-hero p {
        margin:0 0 15px;
        opacity:.9;
      }


      .au-welcome {
        font-size:14px;
      }


      .au-status {
        min-width:190px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:20px;
        border-radius:18px;
        background:rgba(255,255,255,.12);
        backdrop-filter:blur(8px);
        text-align:center;
      }


      .au-status-icon {
        font-size:28px;
        margin-bottom:5px;
      }


      .au-status span {
        margin-top:5px;
        font-size:12px;
        opacity:.75;
      }


      .au-stats {
        display:grid;
        grid-template-columns:
          repeat(
            4,
            minmax(0,1fr)
          );
        gap:12px;
        margin-bottom:18px;
      }


      .au-stat {
        padding:18px;
        background:#ffffff;
        border:1px solid #e5e7eb;
        border-radius:18px;
        box-shadow:
          0 5px 20px
          rgba(15,23,42,.05);
      }


      .au-stat span,
      .au-stat small {
        display:block;
        color:#64748b;
      }


      .au-stat span {
        font-size:12px;
        font-weight:700;
      }


      .au-stat strong {
        display:block;
        margin:7px 0;
        font-size:27px;
      }


      .au-stat small {
        font-size:11px;
      }


      .au-toolbar {
        display:flex;
        gap:8px;
        flex-wrap:wrap;
        margin-bottom:20px;
      }


      .au-button,
      .au-course-button,
      .au-small-button,
      .au-back {
        border:1px solid #dbe3ee;
        background:#ffffff;
        color:#111827;
        border-radius:11px;
        padding:10px 14px;
        font-weight:700;
        cursor:pointer;
        transition:.2s ease;
      }


      .au-button:hover,
      .au-course-button:hover,
      .au-small-button:hover,
      .au-back:hover {
        transform:translateY(-1px);
        box-shadow:
          0 5px 16px
          rgba(15,23,42,.08);
      }


      .au-button-primary,
      .au-course-button {
        background:#111827;
        color:#ffffff;
        border-color:#111827;
      }


      .au-section-head {
        margin-bottom:15px;
      }


      .au-section-head h2 {
        margin:3px 0;
        font-size:25px;
      }


      .au-section-head p {
        margin:0;
        color:#64748b;
      }


      .au-course-grid {
        display:grid;
        grid-template-columns:
          repeat(
            3,
            minmax(0,1fr)
          );
        gap:14px;
      }


      .au-course-card {
        background:#ffffff;
        border:1px solid #e5e7eb;
        border-radius:20px;
        padding:18px;
        box-shadow:
          0 5px 20px
          rgba(15,23,42,.05);
      }


      .au-course-card.au-locked {
        opacity:.82;
      }


      .au-course-top {
        display:flex;
        justify-content:space-between;
        align-items:center;
      }


      .au-course-icon {
        font-size:34px;
      }


      .au-course-level {
        font-size:10px;
        font-weight:800;
        padding:5px 8px;
        border-radius:20px;
        background:#f1f5f9;
        color:#475569;
      }


      .au-course-card h3 {
        margin:15px 0 4px;
        font-size:18px;
      }


      .au-course-mm {
        font-size:12px;
        color:#2563eb;
        font-weight:700;
        margin-bottom:8px;
      }


      .au-course-card p {
        color:#64748b;
        font-size:13px;
        line-height:1.6;
        min-height:62px;
      }


      .au-course-meta {
        display:flex;
        justify-content:space-between;
        gap:8px;
        font-size:11px;
        font-weight:700;
        color:#64748b;
        margin:13px 0;
      }


      .au-progress {
        height:8px;
        background:#e5e7eb;
        border-radius:99px;
        overflow:hidden;
      }


      .au-progress-bar {
        height:100%;
        background:
          linear-gradient(
            90deg,
            #2563eb,
            #7c3aed
          );
        border-radius:99px;
        transition:.3s ease;
      }


      .au-progress-text {
        margin:6px 0 12px;
        font-size:11px;
        color:#64748b;
        font-weight:700;
      }


      .au-course-button {
        width:100%;
      }


      .au-back {
        margin-bottom:15px;
      }


      .au-detail-header,
      .au-english-hero,
      .au-english-lesson-header {
        display:flex;
        align-items:center;
        gap:15px;
        margin-bottom:18px;
      }


      .au-detail-icon,
      .au-big-english-icon {
        width:65px;
        height:65px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:18px;
        background:#eff6ff;
        font-size:34px;
      }


      .au-detail-header h2,
      .au-english-lesson-header h2 {
        margin:0 0 5px;
      }


      .au-detail-header p,
      .au-english-lesson-header p {
        margin:0;
        color:#64748b;
      }


      .au-learning-flow,
      .au-english-flow {
        display:flex;
        align-items:center;
        gap:7px;
        flex-wrap:wrap;
        padding:12px;
        margin-bottom:16px;
        border-radius:14px;
        background:#f8fafc;
        font-size:11px;
        font-weight:800;
        color:#475569;
      }


      .au-lesson-list {
        display:flex;
        flex-direction:column;
        gap:8px;
      }


      .au-lesson-row,
      .au-english-row {
        display:grid;
        grid-template-columns:
          45px
          1fr
          auto
          auto;
        align-items:center;
        gap:10px;
        padding:13px;
        border:1px solid #e5e7eb;
        border-radius:14px;
        background:#ffffff;
      }


      .au-lesson-number,
      .au-english-number {
        width:38px;
        height:38px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:10px;
        background:#eff6ff;
        color:#2563eb;
        font-weight:800;
        font-size:12px;
      }


      .au-lesson-info strong,
      .au-english-info strong {
        display:block;
        font-size:14px;
      }


      .au-lesson-info span,
      .au-english-info span {
        display:block;
        margin-top:3px;
        color:#64748b;
        font-size:11px;
      }


      .au-lesson-status,
      .au-english-status {
        font-size:17px;
      }


      .au-practice-box {
        margin-top:18px;
        padding:18px;
        border-radius:18px;
        background:#f8fafc;
        border:1px solid #e5e7eb;
      }


      .au-practice-box h3 {
        margin:0 0 6px;
      }


      .au-practice-box p {
        color:#64748b;
        font-size:13px;
      }


      .au-textarea {
        width:100%;
        min-height:130px;
        resize:vertical;
        border:1px solid #dbe3ee;
        border-radius:12px;
        padding:13px;
        font:inherit;
        outline:none;
        margin:10px 0;
      }


      .au-textarea:focus {
        border-color:#2563eb;
        box-shadow:
          0 0 0 3px
          rgba(37,99,235,.1);
      }


      .au-action-row {
        display:flex;
        gap:8px;
        flex-wrap:wrap;
      }


      .au-ai-result {
        margin-top:15px;
      }


      .au-ai-answer {
        border-radius:16px;
        padding:16px;
        background:#eff6ff;
        border:1px solid #bfdbfe;
      }


      .au-ai-title {
        font-weight:800;
        margin-bottom:8px;
      }


      .au-ai-content {
        white-space:pre-wrap;
        line-height:1.7;
        font-size:13px;
      }


      .au-ai-loading {
        padding:15px;
        border-radius:14px;
        background:#f8fafc;
        color:#475569;
        font-weight:700;
      }


      .au-learning-grid,
      .au-english-learning-grid {
        display:grid;
        grid-template-columns:
          repeat(
            3,
            minmax(0,1fr)
          );
        gap:12px;
      }


      .au-learning-card,
      .au-english-card {
        padding:16px;
        border-radius:16px;
        border:1px solid #e5e7eb;
        background:#ffffff;
      }


      .au-learning-icon {
        font-size:25px;
        margin-bottom:7px;
      }


      .au-learning-card h3,
      .au-english-card h3 {
        margin:0 0 5px;
      }


      .au-learning-card p,
      .au-english-card p {
        margin:0;
        color:#64748b;
        font-size:12px;
        line-height:1.6;
      }


      .au-category-title {
        margin:20px 0 9px;
        font-weight:900;
        color:#111827;
        font-size:15px;
      }


      .au-english-list {
        display:flex;
        flex-direction:column;
        gap:7px;
      }


      .au-english-level {
        font-size:10px;
        font-weight:800;
        color:#64748b;
        white-space:nowrap;
      }


      .au-phrase-box {
        margin:15px 0;
        padding:15px;
        border-radius:16px;
        background:#f0fdf4;
        border:1px solid #bbf7d0;
      }


      .au-phrase-box h3 {
        margin:0 0 5px;
      }


      .au-phrase-box p {
        margin:0;
        color:#166534;
        font-size:13px;
        font-weight:700;
      }


      .au-progress-summary {
        display:grid;
        grid-template-columns:
          repeat(
            3,
            minmax(0,1fr)
          );
        gap:12px;
        margin-bottom:18px;
      }


      .au-progress-big {
        padding:20px;
        border-radius:18px;
        background:#ffffff;
        border:1px solid #e5e7eb;
        text-align:center;
      }


      .au-progress-big strong {
        display:block;
        font-size:30px;
        margin-bottom:5px;
      }


      .au-progress-big span {
        color:#64748b;
        font-size:12px;
      }


      .au-progress-course {
        padding:14px;
        background:#ffffff;
        border:1px solid #e5e7eb;
        border-radius:15px;
        margin-bottom:8px;
      }


      .au-progress-course > div:first-child {
        display:flex;
        justify-content:space-between;
        margin-bottom:8px;
        font-size:13px;
      }


      .au-standalone-modal {
        position:fixed;
        inset:0;
        z-index:2147483000;
        background:rgba(15,23,42,.72);
        overflow:auto;
        padding:20px;
      }


      .au-standalone-inner {
        position:relative;
        width:100%;
        max-width:1250px;
        margin:30px auto;
        background:#f8fafc;
        border-radius:22px;
        padding:20px;
        min-height:80vh;
      }


      .au-close {
        position:absolute;
        right:16px;
        top:12px;
        width:38px;
        height:38px;
        border:0;
        border-radius:50%;
        background:#111827;
        color:#ffffff;
        font-size:24px;
        cursor:pointer;
        z-index:5;
      }


      .au-sidebar-button {
        width:100%;
      }


      @media (max-width:900px) {

        .au-course-grid {
          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );
        }

        .au-stats {
          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );
        }

        .au-learning-grid,
        .au-english-learning-grid {
          grid-template-columns:
            repeat(
              2,
              minmax(0,1fr)
            );
        }

      }


      @media (max-width:650px) {

        .au-wrapper {
          padding:5px;
        }

        .au-hero {
          flex-direction:column;
          padding:20px;
        }

        .au-hero h1 {
          font-size:25px;
        }

        .au-status {
          min-width:0;
        }

        .au-stats {
          grid-template-columns:1fr 1fr;
        }

        .au-course-grid {
          grid-template-columns:1fr;
        }

        .au-learning-grid,
        .au-english-learning-grid {
          grid-template-columns:1fr;
        }

        .au-lesson-row,
        .au-english-row {
          grid-template-columns:
            38px
            1fr
            auto;
        }

        .au-lesson-status,
        .au-english-status {
          display:none;
        }

        .au-english-level {
          display:none;
        }

        .au-standalone-modal {
          padding:5px;
        }

        .au-standalone-inner {
          margin:5px auto;
          padding:12px;
          border-radius:16px;
        }

        #auFloatingAcademy {
          right:12px !important;
          bottom:12px !important;
        }

      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* ==========================================================
     GLOBAL EXPORTS
     ========================================================== */

  window.openAcademyUpgrade =
    openAcademyUpgrade;

  window.auShowAllCourses =
    auShowAllCourses;

  window.auOpenCourse =
    auOpenCourse;

  window.auOpenNewLesson =
    auOpenNewLesson;

  window.auSavePractice =
    auSavePractice;

  window.auCompleteNewLesson =
    auCompleteNewLesson;

  window.auAskLessonAI =
    auAskLessonAI;

  window.auOpenBusinessEnglish =
    auOpenBusinessEnglish;

  window.auOpenEnglishLesson =
    auOpenEnglishLesson;

  window.auAskEnglishAI =
    auAskEnglishAI;

  window.auCompleteEnglishLesson =
    auCompleteEnglishLesson;

  window.auOpenExistingLessons =
    auOpenExistingLessons;

  window.auOpenLearningProgress =
    auOpenLearningProgress;

  window.auCloseStandaloneModal =
    auCloseStandaloneModal;

  window.AungAcademyUpgrade =
    {
      version: AU_VERSION,
      courses: AU_COURSES,
      businessEnglish:
        AU_BUSINESS_ENGLISH,
      existingLessonCount:
        auExistingLessonCount,
      targetLessonCount:
        auTotalTarget,
      premium:
        auPremium
    };


  /* ==========================================================
     INITIALIZATION
     ========================================================== */

  function auInit() {

    try {

      auInjectStyles();

      auAddSidebarButton();

      auAddFloatingButton();

      console.log(
        "🎓 Aung Business Academy Upgrade loaded",
        {
          version:
            AU_VERSION,
          existingLessons:
            auExistingLessonCount(),
          courses:
            AU_COURSES.length,
          businessEnglish:
            AU_BUSINESS_ENGLISH.length,
          target:
            auTotalTarget()
        }
      );

    } catch (error) {

      console.error(
        "Academy Upgrade initialization error:",
        error
      );

    }

  }


  function auRetryInit() {

    try {

      auAddSidebarButton();

    } catch (error) {}

  }


  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      auInit,
      {
        once:true
      }
    );

  } else {

    auInit();

  }


  /*
     Sidebar may be rebuilt by the existing V15 application,
     so retry a few times without modifying the old app
  */

  setTimeout(
    auRetryInit,
    500
  );

  setTimeout(
    auRetryInit,
    1200
  );

  setTimeout(
    auRetryInit,
    2500
  );

  setTimeout(
    auRetryInit,
    5000
  );


  /*
     MutationObserver only watches for sidebar changes
  */

  try {

    const observer =
      new MutationObserver(
        function () {

          auAddSidebarButton();

        }
      );


    if (document.body) {

      observer.observe(
        document.body,
        {
          childList:true,
          subtree:true
        }
      );

    }

  } catch (error) {

    console.warn(
      "Academy Upgrade observer unavailable:",
      error
    );

  }


})();
