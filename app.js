"use strict";

/* =========================================================
   AUNG BUSINESS ACADEMY
   V15.1 PROFESSIONAL
   COMPLETE APPLICATION
   ========================================================= */

(function () {

  /* =======================================================
     CONFIG
     ======================================================= */

  const APP_VERSION = "V15.1 Professional";

  const AI_API_URL =
    "https://aung-business-academy.onrender.com/api/ai";

  const STORAGE = {
    completed: "aba_completed_lessons",
    user: "aba_user",
    premium: "aba_premium",
    kpi: "aba_kpi",
    settings: "aba_settings"
  };

  const LEGACY_COMPLETED_KEYS = [
    "aung_business_academy_completed"
  ];

  const PREMIUM_PLANS = [
    {
      id: "monthly",
      name: "1 Month",
      price: 25000,
      duration: "1 month",
      days: 30
    },
    {
      id: "quarterly",
      name: "3 Months",
      price: 60000,
      duration: "3 months",
      days: 90,
      featured: true
    },
    {
      id: "halfyear",
      name: "6 Months",
      price: 100000,
      duration: "6 months",
      days: 180
    }
  ];


  /* =======================================================
     DEFAULT USER
     ======================================================= */

  const DEFAULT_USER = {
    name: "Aung Zar Ni Win",
    role: "Business Manager"
  };


  /* =======================================================
     COURSE DATA
     20 CATEGORIES / 260 LESSONS
     ======================================================= */

  const courseData = [
    {
      name: "Business Fundamentals",
      icon: "💼",
      lessons: [
        "Business Fundamentals",
        "Value Creation",
        "Customer Problem",
        "Business Model",
        "Revenue Model",
        "Cost Structure",
        "Value Proposition",
        "Market Basics",
        "Business Lifecycle",
        "Business Ownership",
        "Business Objectives",
        "Business Environment",
        "Business Risk",
        "Business Ethics",
        "Business Growth"
      ]
    },

    {
      name: "Business Strategy",
      icon: "♟️",
      lessons: [
        "Strategic Thinking",
        "Vision Mission Goals",
        "SWOT Analysis",
        "Competitive Advantage",
        "Market Positioning",
        "Business Objectives",
        "Strategy Formulation",
        "Strategic Priorities",
        "Resource Allocation",
        "Strategic Execution",
        "Scenario Planning",
        "Risk Strategy",
        "Growth Strategy",
        "Diversification",
        "Strategy Review"
      ]
    },

    {
      name: "Sales Management",
      icon: "🎯",
      lessons: [
        "Sales Management Fundamentals",
        "Sales Target Setting",
        "Target Breakdown",
        "Territory Planning",
        "Route Planning",
        "Sales Team Structure",
        "Sales Pipeline",
        "Sales Activity Management",
        "Sales Productivity",
        "Sales Performance Review",
        "Sales Forecasting",
        "Sales Coaching",
        "Sales Meeting",
        "Sales Motivation",
        "Sales Incentive",
        "Sales Reporting",
        "Sales Control",
        "Sales Strategy Execution",
        "Sales Manager Dashboard",
        "Sales Manager Daily Routine"
      ]
    },

    {
      name: "Sales Skills",
      icon: "🤝",
      lessons: [
        "Selling Fundamentals",
        "Prospecting",
        "Customer Approach",
        "Needs Discovery",
        "Questioning Skills",
        "Listening Skills",
        "Product Presentation",
        "Value Selling",
        "Feature Benefit",
        "Objection Handling",
        "Negotiation Basics",
        "Closing Techniques",
        "Follow-up",
        "Cross Selling",
        "Up Selling",
        "Relationship Selling",
        "Key Account Selling",
        "Consultative Selling",
        "Sales Communication",
        "Sales Discipline"
      ]
    },

    {
      name: "Customer Management",
      icon: "👥",
      lessons: [
        "Customer Segmentation",
        "Customer Profiling",
        "Customer Needs",
        "Customer Value",
        "Customer Journey",
        "Customer Experience",
        "Complaint Handling",
        "Customer Retention",
        "Repeat Purchase",
        "Loyalty",
        "Customer Service Standards",
        "Customer Feedback",
        "Customer Relationship",
        "Customer Profitability",
        "Customer Recovery"
      ]
    },

    {
      name: "Marketing",
      icon: "📣",
      lessons: [
        "Marketing Fundamentals",
        "Market Research",
        "Segmentation",
        "Targeting",
        "Positioning",
        "Marketing Mix",
        "Product Strategy",
        "Pricing Strategy",
        "Promotion Strategy",
        "Place Strategy",
        "Campaign Planning",
        "Marketing Funnel",
        "Lead Generation",
        "Content Strategy",
        "Digital Marketing",
        "Social Media Marketing",
        "Trade Marketing",
        "Shopper Marketing",
        "Marketing KPI",
        "Marketing ROI"
      ]
    },

    {
      name: "Branding",
      icon: "🏷️",
      lessons: [
        "Brand Fundamentals",
        "Brand Identity",
        "Brand Positioning",
        "Brand Promise",
        "Brand Value",
        "Brand Awareness",
        "Brand Trust",
        "Brand Communication",
        "Brand Consistency",
        "Brand Growth"
      ]
    },

    {
      name: "Finance",
      icon: "💰",
      lessons: [
        "Business Finance Basics",
        "Revenue Management",
        "Cost Management",
        "Cash Flow",
        "Working Capital",
        "Budgeting",
        "Financial Planning",
        "Profit Management",
        "Margin Management",
        "Break-even Analysis",
        "Investment Decisions",
        "Financial Controls",
        "Cost Reduction",
        "Cash Management",
        "Financial Decision Making"
      ]
    },

    {
      name: "Accounting & P&L",
      icon: "🧾",
      lessons: [
        "Accounting Basics",
        "Income Statement",
        "P&L Structure",
        "Gross Profit",
        "Gross Margin",
        "Operating Expenses",
        "EBITDA Basics",
        "Balance Sheet Basics",
        "Cash Flow Statement",
        "P&L Analysis"
      ]
    },

    {
      name: "Distribution & Operations",
      icon: "🚚",
      lessons: [
        "Distribution Fundamentals",
        "Channel Strategy",
        "Distributor Selection",
        "Distributor Management",
        "Stock Management",
        "Inventory Control",
        "Warehouse Basics",
        "Delivery Planning",
        "Order Management",
        "Supply Chain Basics",
        "Service Level",
        "Route to Market",
        "Distribution KPI",
        "Distribution Cost",
        "Operational Excellence"
      ]
    },

    {
      name: "Retail & Modern Trade",
      icon: "🏪",
      lessons: [
        "Retail Fundamentals",
        "Outlet Classification",
        "Numeric Distribution",
        "Weighted Distribution",
        "Planogram Basics",
        "Shelf Availability",
        "Promotion Execution",
        "Modern Trade Negotiation",
        "Retail KPI",
        "Store Execution"
      ]
    },

    {
      name: "Key Account Management",
      icon: "🏢",
      lessons: [
        "KAM Fundamentals",
        "Account Selection",
        "Account Planning",
        "Customer Business Plan",
        "Joint Business Planning",
        "Key Account Negotiation",
        "Account Review",
        "Customer Profitability",
        "KAM KPI",
        "Strategic Account Growth"
      ]
    },

    {
      name: "Leadership & Management",
      icon: "👔",
      lessons: [
        "Leadership Fundamentals",
        "Manager vs Leader",
        "Leadership Styles",
        "Goal Setting",
        "Delegation",
        "Coaching",
        "Feedback",
        "Performance Management",
        "Decision Making",
        "Meeting Management",
        "Team Management",
        "Motivation",
        "Conflict Management",
        "Change Management",
        "Leadership Discipline"
      ]
    },

    {
      name: "People & HR",
      icon: "🧑‍💼",
      lessons: [
        "HR Fundamentals",
        "Recruitment",
        "Job Description",
        "Onboarding",
        "Training Needs",
        "Employee Development",
        "Performance Appraisal",
        "Attendance Discipline",
        "Compensation Basics",
        "Retention"
      ]
    },

    {
      name: "Negotiation",
      icon: "⚖️",
      lessons: [
        "Negotiation Fundamentals",
        "Preparation",
        "BATNA Basics",
        "Negotiation Objectives",
        "Questioning",
        "Concessions",
        "Price Negotiation",
        "Win-Win Negotiation",
        "Difficult Negotiations",
        "Negotiation Review"
      ]
    },

    {
      name: "Business Development",
      icon: "🚀",
      lessons: [
        "Business Development Fundamentals",
        "Opportunity Identification",
        "New Market Entry",
        "New Product Opportunity",
        "Partnership Strategy",
        "Channel Expansion",
        "Customer Acquisition",
        "Business Growth Pipeline",
        "Business Proposal",
        "Business Development KPI"
      ]
    },

    {
      name: "KPI & Data Analysis",
      icon: "📊",
      lessons: [
        "KPI Fundamentals",
        "KPI Design",
        "Target vs Actual",
        "Achievement %",
        "Gap Analysis",
        "Trend Analysis",
        "Sales Dashboard",
        "Productivity Analysis",
        "Data-Based Decision Making",
        "KPI Review"
      ]
    },

    {
      name: "Problem Solving & Decision Making",
      icon: "🧩",
      lessons: [
        "Problem Definition",
        "Root Cause Analysis",
        "5 Whys",
        "Fishbone",
        "Pareto",
        "Prioritization",
        "Decision Framework",
        "Action Planning",
        "Risk Assessment",
        "Review & Learning"
      ]
    },

    {
      name: "Digital Business & AI",
      icon: "🤖",
      lessons: [
        "Digital Business Fundamentals",
        "Digital Transformation",
        "AI Fundamentals",
        "AI for Sales",
        "AI for Marketing",
        "AI for Customer Service",
        "AI for Productivity",
        "Data & Automation",
        "AI Business Tools",
        "Responsible AI Use"
      ]
    },

    {
      name: "Productivity & Career",
      icon: "⚡",
      lessons: [
        "Time Management",
        "Priority Management",
        "Daily Planning",
        "Weekly Planning",
        "Meeting Productivity",
        "Focus Management",
        "Professional Communication",
        "Career Planning",
        "Interview Preparation",
        "Personal Development"
      ]
    }
  ];


  /* =======================================================
     FLATTEN LESSONS
     ======================================================= */

  const lessons = [];

  courseData.forEach(function (category, categoryIndex) {

    category.lessons.forEach(function (title, lessonIndex) {

      const id =
        categoryIndex + 1 +
        "-" +
        (lessonIndex + 1);

      lessons.push({
        id: id,
        number: lessons.length + 1,
        title: title,
        category: category.name,
        icon: category.icon,
        categoryIndex: categoryIndex,
        lessonIndex: lessonIndex
      });

    });

  });


  /* =======================================================
     STATE
     ======================================================= */

  let currentSection = "dashboard";
  let currentLessonId = null;
  let currentCategory = "All";
  let searchTerm = "";
  let toastTimer = null;
  let confirmAction = null;


  /* =======================================================
     STORAGE HELPERS
     ======================================================= */

  function readJSON(key, fallback) {

    try {

      const raw = localStorage.getItem(key);

      if (!raw) {
        return fallback;
      }

      return JSON.parse(raw);

    } catch (error) {

      console.warn("Storage read error:", key, error);

      return fallback;

    }

  }


  function writeJSON(key, value) {

    try {

      localStorage.setItem(
        key,
        JSON.stringify(value)
      );

      return true;

    } catch (error) {

      console.warn("Storage write error:", key, error);

      return false;

    }

  }


  function getUser() {

    const saved =
      readJSON(STORAGE.user, DEFAULT_USER);

    return {
      name:
        saved &&
        saved.name
          ? saved.name
          : DEFAULT_USER.name,

      role:
        saved &&
        saved.role
          ? saved.role
          : DEFAULT_USER.role
    };

  }


  function saveUser(name, role) {

    writeJSON(STORAGE.user, {
      name: name || DEFAULT_USER.name,
      role: role || DEFAULT_USER.role
    });

  }


  /* =======================================================
     COMPLETION
     ======================================================= */

  function getCompleted() {

    let completed =
      readJSON(STORAGE.completed, null);

    if (!Array.isArray(completed)) {

      completed =
        readJSON(
          LEGACY_COMPLETED_KEYS[0],
          []
        );

    }

    if (!Array.isArray(completed)) {
      completed = [];
    }

    return completed
      .map(String)
      .filter(function (id, index, array) {
        return array.indexOf(id) === index;
      });

  }


  function saveCompleted(list) {

    const clean =
      Array.from(
        new Set(
          list.map(String)
        )
      );

    writeJSON(
      STORAGE.completed,
      clean
    );

    writeJSON(
      LEGACY_COMPLETED_KEYS[0],
      clean
    );

  }


  function isCompleted(id) {

    return getCompleted()
      .includes(String(id));

  }


  function toggleCompleted(id) {

    const completed = getCompleted();

    const stringId = String(id);

    const index =
      completed.indexOf(stringId);

    if (index >= 0) {

      completed.splice(index, 1);

    } else {

      completed.push(stringId);

    }

    saveCompleted(completed);

  }


  function resetProgress() {

    saveCompleted([]);

    renderCurrentSection();

    showToast(
      "Learning progress has been reset",
      "↻"
    );

  }


  /* =======================================================
     PREMIUM
     ======================================================= */

  function getPremium() {

    const data =
      readJSON(
        STORAGE.premium,
        null
      );

    if (!data) {
      return {
        active: false,
        plan: null,
        expiresAt: null
      };
    }

    if (
      data.expiresAt &&
      Date.now() >= Number(data.expiresAt)
    ) {

      return {
        active: false,
        plan: data.plan || null,
        expiresAt: data.expiresAt
      };

    }

    return {
      active: Boolean(data.active),
      plan: data.plan || null,
      expiresAt: data.expiresAt || null
    };

  }


  function isPremium() {

    return getPremium().active;

  }


  /*
   * Static GitHub pages cannot securely verify
   * KPay / CB Bank payments by themselves
   *
   * Premium must therefore be activated by the
   * owner/admin after payment verification
   */

  function activatePremium(planId, days) {

    const plan =
      PREMIUM_PLANS.find(function (item) {
        return item.id === planId;
      });

    if (!plan) {
      return false;
    }

    const duration =
      Number(days) > 0
        ? Number(days)
        : plan.days;

    writeJSON(
      STORAGE.premium,
      {
        active: true,
        plan: plan.id,
        activatedAt: Date.now(),
        expiresAt:
          Date.now() +
          duration * 24 * 60 * 60 * 1000
      }
    );

    updatePremiumUI();

    showToast(
      "Premium Membership activated",
      "💎"
    );

    return true;

  }


  function getPremiumRemainingDays() {

    const premium = getPremium();

    if (
      !premium.active ||
      !premium.expiresAt
    ) {
      return 0;
    }

    return Math.max(
      0,
      Math.ceil(
        (
          Number(premium.expiresAt) -
          Date.now()
        ) /
        (24 * 60 * 60 * 1000)
      )
    );

  }


  /* =======================================================
     LESSON ACCESS
     ======================================================= */

  function isLessonFree(lesson) {

    return lesson.number === 1;

  }


  function canOpenLesson(lesson) {

    if (!lesson) {
      return false;
    }

    return (
      isLessonFree(lesson) ||
      isPremium()
    );

  }


  /* =======================================================
     UTILITIES
     ======================================================= */

  function escapeHtml(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function formatNumber(value) {

    const number = Number(value) || 0;

    return number.toLocaleString(
      "en-US",
      {
        maximumFractionDigits: 2
      }
    );

  }


  function formatKs(value) {

    return formatNumber(value) + " Ks";

  }


  function getProgress() {

    if (!lessons.length) {
      return 0;
    }

    return Math.round(
      (
        getCompleted().length /
        lessons.length
      ) * 100
    );

  }


  function getCategoryProgress(categoryName) {

    const categoryLessons =
      lessons.filter(function (lesson) {
        return lesson.category === categoryName;
      });

    if (!categoryLessons.length) {
      return 0;
    }

    const completed =
      categoryLessons.filter(function (lesson) {
        return isCompleted(lesson.id);
      }).length;

    return Math.round(
      (completed / categoryLessons.length) * 100
    );

  }


  function getNextLesson() {

    const completed = getCompleted();

    return (
      lessons.find(function (lesson) {
        return !completed.includes(
          String(lesson.id)
        );
      }) ||
      lessons[lessons.length - 1] ||
      null
    );

  }


  function getLesson(id) {

    return lessons.find(function (lesson) {

      return String(lesson.id) === String(id);

    }) || null;

  }


  function getCategoryLessons(categoryName) {

    return lessons.filter(function (lesson) {

      return lesson.category === categoryName;

    });

  }


  /* =======================================================
     CATEGORY CONTENT GUIDES
     ======================================================= */

  const categoryGuides = {

    "Business Fundamentals": {
      focus:
        "စီးပွားရေးလုပ်ငန်းက Customer အတွက် Value ဖန်တီးပြီး Revenue နဲ့ Profit ဖြစ်လာအောင် ဘယ်လိုတည်ဆောက်ရမလဲ",

      objective:
        "လုပ်ငန်းရဲ့ Value, Customer, Revenue, Cost နဲ့ Growth ကို Manager တစ်ယောက်အနေနဲ့ ချိတ်ဆက်စဉ်းစားနိုင်ရန်",

      kpis: [
        "Revenue",
        "Gross Profit",
        "Gross Margin",
        "Cash Flow"
      ],

      actions: [
        "Customer ဘာပြဿနာကို ဖြေရှင်းပေးနေလဲ သတ်မှတ်ပါ",
        "Revenue ရလာတဲ့ Source တွေကို စာရင်းပြုစုပါ",
        "အဓိက Cost Drivers တွေကို ခွဲထုတ်ပါ",
        "Value နဲ့ Profit နှစ်ခုလုံးကို လစဉ်ပြန်သုံးသပ်ပါ"
      ]
    },

    "Business Strategy": {
      focus:
        "လုပ်ငန်းအတွက် မှန်ကန်တဲ့ Strategic Priority တွေရွေးချယ်ပြီး Execution အဖြစ် ပြောင်းလဲခြင်း",

      objective:
        "Vision, Market, Competition, Resources နဲ့ Strategic Priorities တွေကို ချိတ်ဆက်ပြီး Strategy ချမှတ်နိုင်ရန်",

      kpis: [
        "Revenue Growth",
        "Market Share",
        "Strategic Initiative Completion",
        "Profit Growth"
      ],

      actions: [
        "လက်ရှိ Business Position ကို သုံးသပ်ပါ",
        "အရေးကြီးဆုံး Strategic Priority 3 ခု ရွေးပါ",
        "Priority တစ်ခုချင်းစီအတွက် Owner သတ်မှတ်ပါ",
        "အပတ်စဉ် Execution Progress ကို Review လုပ်ပါ"
      ]
    },

    "Sales Management": {
      focus:
        "Sales Target, Territory, Team, Pipeline, Forecast နဲ့ Execution ကို Manager တစ်ယောက်အနေနဲ့ ထိန်းချုပ်ခြင်း",

      objective:
        "Sales Target ကို Daily/Weekly/Monthly Execution အဖြစ် ခွဲပြီး Team Performance ကို KPI ဖြင့် စီမံနိုင်ရန်",

      kpis: [
        "Target Achievement %",
        "Sales Gap",
        "Productivity",
        "Pipeline Coverage"
      ],

      actions: [
        "Monthly Target ကို Working Days အလိုက် ခွဲပါ",
        "Salesperson တစ်ဦးချင်း Target သတ်မှတ်ပါ",
        "Daily Activity နဲ့ Sales Result ကို ချိတ်ဆက်ပါ",
        "Gap ရှိရင် Root Cause ရှာပြီး Corrective Action ချပါ"
      ]
    },

    "Sales Skills": {
      focus:
        "Customer Need ကိုရှာဖွေပြီး Value ကို ရောင်းချကာ Objection ဖြေရှင်းပြီး Closing လုပ်နိုင်ခြင်း",

      objective:
        "Prospecting ကနေ Closing နဲ့ Follow-up အထိ Professional Sales Process တစ်ခုလုံးကို လက်တွေ့အသုံးချနိုင်ရန်",

      kpis: [
        "Conversion Rate",
        "Average Order Value",
        "Strike Rate",
        "Repeat Purchase"
      ],

      actions: [
        "Customer ကို မေးခွန်းကောင်းများဖြင့် စတင်ပါ",
        "Need နဲ့ Pain Point ကို မှတ်တမ်းတင်ပါ",
        "Feature ထက် Customer Benefit ကို အဓိကပြောပါ",
        "Objection တိုင်းအတွက် Response Framework ပြင်ဆင်ပါ"
      ]
    },

    "Customer Management": {
      focus:
        "Customer ကို Acquire, Serve, Retain လုပ်ပြီး Customer Lifetime Value တိုးစေခြင်း",

      objective:
        "Customer Segment, Customer Need, Experience, Retention နဲ့ Profitability ကို စနစ်တကျ စီမံနိုင်ရန်",

      kpis: [
        "Retention Rate",
        "Repeat Purchase Rate",
        "Active Customers",
        "Complaint Rate"
      ],

      actions: [
        "Customer ကို Value အလိုက် Segment ခွဲပါ",
        "High-value Customer တွေအတွက် Account Plan ပြုလုပ်ပါ",
        "Complaint Root Cause ကို ပြန်လည်စစ်ဆေးပါ",
        "Repeat Purchase ကို လစဉ်တိုင်းတာပါ"
      ]
    },

    "Marketing": {
      focus:
        "Market ကိုနားလည်ပြီး Right Customer ဆီကို Right Offer နဲ့ Right Channel ကနေ ရောက်ရှိစေခြင်း",

      objective:
        "Market Research, Segmentation, Positioning, Campaign နဲ့ Marketing KPI တွေကို အသုံးချနိုင်ရန်",

      kpis: [
        "Reach",
        "Leads",
        "Conversion",
        "Marketing ROI"
      ],

      actions: [
        "Target Customer Profile သတ်မှတ်ပါ",
        "Customer Problem နဲ့ Offer ကို ချိတ်ပါ",
        "Campaign Objective ကို Number ဖြင့်သတ်မှတ်ပါ",
        "Result ကို ROI နဲ့ ပြန်တိုင်းတာပါ"
      ]
    },

    "Branding": {
      focus:
        "Customer ရဲ့ စိတ်ထဲမှာ ယုံကြည်ရတဲ့ Brand Identity နဲ့ Positioning တည်ဆောက်ခြင်း",

      objective:
        "Brand Identity, Promise, Communication နဲ့ Consistency ကို Business Growth နဲ့ ချိတ်ဆက်နိုင်ရန်",

      kpis: [
        "Brand Awareness",
        "Customer Consideration",
        "Repeat Purchase",
        "Brand Trust"
      ],

      actions: [
        "Brand Promise တစ်ခုကို ရှင်းရှင်းလင်းလင်း သတ်မှတ်ပါ",
        "Customer Touchpoint အားလုံးမှာ Message တူညီပါစေ",
        "Customer Feedback ကို Brand Review မှာ ထည့်သွင်းပါ",
        "Brand Value နဲ့ Sales Result ကို ချိတ်ဆက်တိုင်းတာပါ"
      ]
    },

    "Finance": {
      focus:
        "Revenue, Cost, Cash Flow, Working Capital နဲ့ Profit ကို Business Decision နဲ့ ချိတ်ဆက်ခြင်း",

      objective:
        "Manager တစ်ယောက်အနေနဲ့ Financial Numbers ကိုဖတ်ပြီး Business Decision ချနိုင်ရန်",

      kpis: [
        "Gross Margin",
        "Operating Expense",
        "Cash Flow",
        "Working Capital"
      ],

      actions: [
        "Revenue နဲ့ Cash ရရှိမှုကို ခွဲခြားစစ်ဆေးပါ",
        "Fixed Cost နဲ့ Variable Cost ခွဲပါ",
        "Cash Flow Forecast ပြုလုပ်ပါ",
        "Profit မဟုတ်ဘဲ Cash Position ကိုပါ နေ့စဉ်စောင့်ကြည့်ပါ"
      ]
    },

    "Accounting & P&L": {
      focus:
        "Income Statement, Gross Profit, Operating Expenses နဲ့ P&L ကို Managerial Decision အတွက် အသုံးချခြင်း",

      objective:
        "P&L Statement ကိုဖတ်ပြီး Profit Driver နဲ့ Cost Driver ကို ရှာဖွေနိုင်ရန်",

      kpis: [
        "Revenue",
        "Gross Profit",
        "Gross Margin",
        "Operating Expense Ratio"
      ],

      actions: [
        "Revenue Trend ကို စစ်ဆေးပါ",
        "Gross Margin ပြောင်းလဲမှုကို ရှာပါ",
        "OPEX ရဲ့ အဓိက Driver ကို ခွဲထုတ်ပါ",
        "P&L Result ကနေ Action Plan တစ်ခုချင်းစီ ထုတ်ပါ"
      ]
    },

    "Distribution & Operations": {
      focus:
        "Product ကို Right Place, Right Time, Right Quantity နဲ့ Customer ဆီ ရောက်အောင် Distribution System တည်ဆောက်ခြင်း",

      objective:
        "Channel, Distributor, Stock, Delivery နဲ့ Operational KPI တွေကို ထိန်းချုပ်နိုင်ရန်",

      kpis: [
        "Numeric Distribution",
        "Fill Rate",
        "Stock Cover",
        "Distribution Cost"
      ],

      actions: [
        "Channel အလိုက် Distribution Target သတ်မှတ်ပါ",
        "Stock Cover ကို ပုံမှန်စစ်ပါ",
        "Order-to-Delivery Time တိုင်းတာပါ",
        "Distributor Performance Review လုပ်ပါ"
      ]
    },

    "Retail & Modern Trade": {
      focus:
        "Outlet Execution, Availability, Shelf, Promotion နဲ့ Modern Trade Performance ကို တိုးတက်စေခြင်း",

      objective:
        "Retail Execution ကို measurable KPI တွေနဲ့ စီမံနိုင်ရန်",

      kpis: [
        "Numeric Distribution",
        "Shelf Availability",
        "Promotion Compliance",
        "Sales per Outlet"
      ],

      actions: [
        "Outlet Classification ပြုလုပ်ပါ",
        "Availability Gap ကို စစ်ပါ",
        "Promotion Execution ကို Audit လုပ်ပါ",
        "Store-level Sales Result ကို Review လုပ်ပါ"
      ]
    },

    "Key Account Management": {
      focus:
        "Strategic Customer တစ်ဦးချင်းစီအတွက် Account Plan နဲ့ Joint Business Growth တည်ဆောက်ခြင်း",

      objective:
        "Key Account ကို Revenue တင်မက Profitability နဲ့ Long-term Relationship အထိ စီမံနိုင်ရန်",

      kpis: [
        "Account Growth",
        "Account Margin",
        "Retention",
        "Joint Business Plan Completion"
      ],

      actions: [
        "Account ရဲ့ Business Model ကို နားလည်ပါ",
        "Customer Objective ကို သတ်မှတ်ပါ",
        "Joint Business Plan တည်ဆောက်ပါ",
        "Quarterly Business Review ပြုလုပ်ပါ"
      ]
    },

    "Leadership & Management": {
      focus:
        "Team ကို Goal, Coaching, Feedback, Accountability နဲ့ Performance Management ဖြင့် ဦးဆောင်ခြင်း",

      objective:
        "Manager တစ်ယောက်အနေနဲ့ Team Performance ကို လူတစ်ဦးချင်းစီနဲ့ Team Level နှစ်ခုလုံးမှာ တိုးတက်စေနိုင်ရန်",

      kpis: [
        "Goal Completion",
        "Team Productivity",
        "Coaching Frequency",
        "Employee Retention"
      ],

      actions: [
        "Team Goal ကို ရှင်းရှင်းလင်းလင်း သတ်မှတ်ပါ",
        "Delegation မှာ Outcome ကို သတ်မှတ်ပါ",
        "Regular Coaching ပြုလုပ်ပါ",
        "Performance Review ကို Data အပေါ်အခြေခံပါ"
      ]
    },

    "People & HR": {
      focus:
        "Right People ကို ရွေးချယ်ပြီး Develop, Manage နဲ့ Retain လုပ်ခြင်း",

      objective:
        "Recruitment ကနေ Performance နဲ့ Retention အထိ People Management Process ကို နားလည်ရန်",

      kpis: [
        "Time to Fill",
        "Training Completion",
        "Performance Achievement",
        "Retention Rate"
      ],

      actions: [
        "Role Requirement ကို ရှင်းလင်းစွာသတ်မှတ်ပါ",
        "Onboarding Plan ပြုလုပ်ပါ",
        "Training Need Analysis လုပ်ပါ",
        "Performance နဲ့ Development Plan ချိတ်ပါ"
      ]
    },

    "Negotiation": {
      focus:
        "Preparation, Value, Objectives နဲ့ Concession Management ကို အသုံးချပြီး Business Deal တည်ဆောက်ခြင်း",

      objective:
        "Price တစ်ခုတည်းကို မကြည့်ဘဲ Value, Margin, Terms နဲ့ Relationship ကိုပါ စဉ်းစားနိုင်ရန်",

      kpis: [
        "Win Rate",
        "Gross Margin",
        "Average Deal Value",
        "Payment Terms"
      ],

      actions: [
        "Negotiation မစခင် Objective သတ်မှတ်ပါ",
        "BATNA နဲ့ Minimum Acceptable Position ကို သိထားပါ",
        "Price မဟုတ်တဲ့ Value Variables တွေရှာပါ",
        "Concession ပေးတိုင်း Return တောင်းပါ"
      ]
    },

    "Business Development": {
      focus:
        "New Market, New Customer, New Channel နဲ့ Partnership အခွင့်အလမ်းတွေကို Revenue အဖြစ် ပြောင်းလဲခြင်း",

      objective:
        "Business Opportunity ကို Identify, Qualify, Develop နဲ့ Convert လုပ်နိုင်ရန်",

      kpis: [
        "Qualified Pipeline",
        "Conversion Rate",
        "New Revenue",
        "New Customers"
      ],

      actions: [
        "Opportunity Criteria သတ်မှတ်ပါ",
        "Potential Customer List တည်ဆောက်ပါ",
        "Pipeline Stage သတ်မှတ်ပါ",
        "Opportunity တစ်ခုချင်းစီအတွက် Next Action ထားပါ"
      ]
    },

    "KPI & Data Analysis": {
      focus:
        "Data ကို Number အဖြစ်သာမက Business Decision အတွက် အသုံးချခြင်း",

      objective:
        "Target, Actual, Achievement, Gap နဲ့ Trend ကို ဖတ်ပြီး Action ချနိုင်ရန်",

      kpis: [
        "Achievement %",
        "Gap",
        "Growth %",
        "Productivity"
      ],

      actions: [
        "KPI တစ်ခုချင်းစီရဲ့ Definition သတ်မှတ်ပါ",
        "Target နဲ့ Actual ကို နေ့စဉ် Update လုပ်ပါ",
        "Gap ရဲ့ Root Cause ကို ခွဲပါ",
        "Data → Insight → Action ဆိုတဲ့ Flow နဲ့ Review လုပ်ပါ"
      ]
    },

    "Problem Solving & Decision Making": {
      focus:
        "Problem ကို မှန်ကန်စွာ Define လုပ်ပြီး Root Cause ရှာကာ Action ပြုလုပ်ခြင်း",

      objective:
        "Symptom နဲ့ Root Cause ကို ခွဲခြားပြီး Structured Decision Making ပြုလုပ်နိုင်ရန်",

      kpis: [
        "Action Closure Rate",
        "Problem Recurrence",
        "Resolution Time",
        "Impact"
      ],

      actions: [
        "Problem Statement ကို Number နဲ့ သတ်မှတ်ပါ",
        "5 Whys သို့မဟုတ် Fishbone အသုံးပြုပါ",
        "Root Cause ကို Evidence နဲ့ အတည်ပြုပါ",
        "Owner နဲ့ Deadline ပါတဲ့ Action Plan ချပါ"
      ]
    },

    "Digital Business & AI": {
      focus:
        "Digital Tools နဲ့ AI ကို Business Productivity, Sales, Marketing နဲ့ Decision Making မှာ အသုံးချခြင်း",

      objective:
        "AI ကို အလွယ်သုံးရုံမဟုတ်ဘဲ Business Problem ကို ဖြေရှင်းတဲ့ Tool အဖြစ် အသုံးချနိုင်ရန်",

      kpis: [
        "Time Saved",
        "AI Adoption",
        "Process Efficiency",
        "Error Reduction"
      ],

      actions: [
        "ထပ်ခါထပ်ခါလုပ်နေရတဲ့ Task တွေစာရင်းပြုစုပါ",
        "AI အသုံးချနိုင်တဲ့ Process ကို ရွေးပါ",
        "Output Quality ကို Human Review လုပ်ပါ",
        "Time Saved နဲ့ Business Impact ကို တိုင်းတာပါ"
      ]
    },

    "Productivity & Career": {
      focus:
        "Time, Priority, Focus နဲ့ Professional Skill တွေကို စနစ်တကျ တိုးတက်စေခြင်း",

      objective:
        "Manager တစ်ယောက်အနေနဲ့ Important Work ကို ဦးစားပေးပြီး Consistent Execution ပြုလုပ်နိုင်ရန်",

      kpis: [
        "Priority Completion",
        "Focus Hours",
        "Learning Hours",
        "Goal Completion"
      ],

      actions: [
        "နေ့စဉ် Top 3 Priorities သတ်မှတ်ပါ",
        "Important နဲ့ Urgent ကို ခွဲပါ",
        "Meeting နဲ့ Admin Time ကို ထိန်းပါ",
        "အပတ်စဉ် Personal Performance Review လုပ်ပါ"
      ]
    }

  };


  /* =======================================================
     LESSON CONTENT ENGINE
     ======================================================= */

  function getLessonContent(lesson) {

    if (!lesson) {
      return null;
    }

    const guide =
      categoryGuides[lesson.category] ||
      categoryGuides["Business Fundamentals"];

    const position =
      lesson.lessonIndex + 1;

    const practicalSteps =
      guide.actions.map(function (action) {

        return action;

      });

    const example =
      buildBusinessExample(
        lesson,
        guide
      );

    const mistakes =
      buildMistakes(
        lesson.category
      );

    const managerApplication =
      buildManagerApplication(
        lesson,
        guide
      );

    const practice =
      buildPractice(
        lesson,
        guide
      );

    const takeaways =
      buildTakeaways(
        lesson,
        guide
      );

    return {

      objective:
        guide.objective,

      concept:
        lesson.title +
        " ကို " +
        lesson.category +
        " ရဲ့ Business Context ထဲမှာ နားလည်ဖို့လိုပါတယ်။ " +
        guide.focus +
        " ဆိုတဲ့ အဓိက Principle ကို အခြေခံပြီး ဒီ Lesson ကို လက်တွေ့အသုံးချရမှာ ဖြစ်ပါတယ်",

      why:
        "Manager တစ်ယောက်အနေနဲ့ ဒီအကြောင်းအရာကို သိရုံနဲ့ မလုံလောက်ဘဲ " +
        "Team, Customer, Sales, Cost, Profit သို့မဟုတ် Execution Result တစ်ခုခုနဲ့ ချိတ်ဆက်ပြီး " +
        "ဆုံးဖြတ်ချက်ချနိုင်ဖို့ လိုပါတယ်",

      steps: practicalSteps,

      example: example,

      manager:
        managerApplication,

      kpis: guide.kpis,

      mistakes: mistakes,

      actionPlan: [
        "ဒီနေ့ လက်ရှိလုပ်ငန်းမှာ ဒီ Lesson နဲ့ ဆက်စပ်တဲ့ Situation တစ်ခုရွေးပါ",
        "လက်ရှိ Result ကို Number နဲ့ မှတ်တမ်းတင်ပါ",
        "ပြောင်းလဲရမယ့် Action တစ်ခုကို ရွေးပါ",
        "Owner နဲ့ Deadline သတ်မှတ်ပါ",
        "7 ရက်အတွင်း Result ကို ပြန်တိုင်းတာပါ"
      ],

      checklist: [
        lesson.title + " ရဲ့ အဓိက Concept ကို ရှင်းပြနိုင်ပြီလား",
        "လက်ရှိ Business Situation နဲ့ ချိတ်ဆက်နိုင်ပြီလား",
        "KPI တစ်ခုခုနဲ့ တိုင်းတာနိုင်ပြီလား",
        "Action Plan တစ်ခု ချမှတ်ထားပြီလား",
        "Result ကို Review ပြန်လုပ်မယ့် Date သတ်မှတ်ထားပြီလား"
      ],

      practice: practice,

      takeaways: takeaways,

      position: position

    };

  }


  function buildBusinessExample(lesson, guide) {

    const category =
      lesson.category;

    if (category === "Sales Management") {

      return (
        "ဥပမာ Sales Team ရဲ့ Monthly Target က 500 L ဖြစ်ပြီး Actual က 385 L ဖြစ်နေတယ်ဆိုပါစို့။ " +
        "Manager အနေနဲ့ Gap 115 L ရှိတယ်ဆိုတာ သိရုံနဲ့ မပြီးပါဘူး။ " +
        "Territory, Customer Coverage, Order Frequency, Pipeline နဲ့ Salesperson Productivity ကို ခွဲစစ်ပြီး " +
        "Gap ဖြစ်ရတဲ့ အဓိကအကြောင်းရင်းကို ရှာရပါမယ်။ " +
        "ပြီးရင် Daily Recovery Target သတ်မှတ်ပြီး Team နဲ့ Execute လုပ်ရပါမယ်"
      );

    }

    if (category === "Finance") {

      return (
        "ဥပမာ Revenue တိုးနေသော်လည်း Cash မတိုးဘူးဆိုရင် Credit Sales, Collection, Inventory နဲ့ Payment Terms ကို " +
        "ပြန်စစ်ရပါမယ်။ Profit ရှိနေသော်လည်း Cash Flow မကောင်းနိုင်တဲ့အတွက် Manager က Profit နဲ့ Cash ကို " +
        "သီးခြားစောင့်ကြည့်ရပါမယ်"
      );

    }

    if (category === "Marketing") {

      return (
        "ဥပမာ Campaign တစ်ခုမှာ Reach 100,000 ရပေမယ့် Sales Conversion နည်းနေတယ်ဆိုရင် " +
        "Reach တိုးဖို့ထက် Target Customer, Offer, Message, Landing Experience နဲ့ Conversion Process ကို " +
        "ပြန်စစ်ရပါမယ်"
      );

    }

    if (category === "Leadership & Management") {

      return (
        "ဥပမာ Team Member တစ်ဦးရဲ့ Performance ကျနေတယ်ဆိုရင် ချက်ချင်းအပြစ်တင်တာထက် " +
        "Target Understanding, Skill, Motivation, Resource နဲ့ Workload ကို ခွဲခြမ်းပြီး Root Cause ရှာသင့်ပါတယ်။ " +
        "ပြီးရင် Coaching Plan နဲ့ Follow-up Date သတ်မှတ်ပါ"
      );

    }

    if (category === "Distribution & Operations") {

      return (
        "ဥပမာ Distributor တစ်ဦးမှာ Sales Demand ရှိပေမယ့် Stock မလုံလောက်လို့ Order မဖြည့်နိုင်ဘူးဆိုရင် " +
        "Sales Target တင်တာထက် Stock Cover, Order Cycle, Forecast Accuracy နဲ့ Delivery Lead Time ကို " +
        "အရင်ပြန်စစ်ရပါမယ်"
      );

    }

    if (category === "KPI & Data Analysis") {

      return (
        "ဥပမာ Achievement 80% ဆိုတဲ့ Number တစ်ခုတည်းကို ကြည့်ပြီး Team Performance ဆုံးဖြတ်လို့ မရပါဘူး။ " +
        "Previous Month, Territory, Product Mix, Customer Coverage နဲ့ Gap Driver တွေကိုပါ နှိုင်းယှဉ်ပြီး " +
        "ဘယ်နေရာမှာ Action လိုသလဲ ရှာဖွေရပါမယ်"
      );

    }

    return (
      "ဥပမာ " +
      category +
      " လုပ်ငန်းအခြေအနေတစ်ခုမှာ " +
      lesson.title +
      " ကို အသုံးချမယ်ဆိုရင် လက်ရှိ Situation ကို အရင်သတ်မှတ်ပြီး " +
      "Business Impact ကို တိုင်းတာနိုင်တဲ့ KPI တစ်ခုထားပါ။ " +
      "ပြီးရင် Action တစ်ခုကို စမ်းသပ်ပြီး Result ကို ပြန်တိုင်းတာပါ။ " +
      "ဒီလို Test → Measure → Improve Cycle နဲ့ လုပ်သွားရင် Lesson ကို လက်တွေ့ Business Result အဖြစ် ပြောင်းလဲနိုင်ပါတယ်"
    );

  }


  function buildManagerApplication(lesson, guide) {

    return [
      lesson.title +
        " ကို လေ့လာပြီးတဲ့အခါ Manager အနေနဲ့ " +
        "လက်ရှိ Team သို့မဟုတ် Business မှာ ဘယ်နေရာအသုံးချနိုင်မလဲ သတ်မှတ်ပါ",

      "Current Situation → Target → Gap → Action → KPI ဆိုတဲ့ Flow နဲ့ စီမံပါ",

      guide.actions[0],

      guide.actions[1],

      "Weekly Review မှာ Result ကို Data နဲ့ ပြန်စစ်ပြီး လိုအပ်ရင် Action Plan ပြင်ဆင်ပါ"
    ];

  }


  function buildMistakes(category) {

    const common = [
      "Concept ကို သိရုံနဲ့ လက်တွေ့အသုံးမချခြင်း",
      "Data မရှိဘဲ Assumption နဲ့ ဆုံးဖြတ်ခြင်း",
      "Target သတ်မှတ်ပြီး Action Plan မရှိခြင်း",
      "Result ကို Review မလုပ်ခြင်း"
    ];

    if (category === "Sales Management") {

      return [
        "Monthly Target ကို Daily Execution အဖြစ် မခွဲခြင်း",
        "Sales Result ကိုပဲကြည့်ပြီး Activity Driver မကြည့်ခြင်း",
        "Forecast ကို Actual Data မပါဘဲ ခန့်မှန်းခြင်း",
        "Gap ဖြစ်လာမှသာ Team ကို Follow-up လုပ်ခြင်း",
        "Coaching ထက် Pressure ပေးခြင်း"
      ];

    }

    if (category === "Finance") {

      return [
        "Profit ရှိတာနဲ့ Cash ကောင်းတယ်လို့ ထင်ခြင်း",
        "Cost Driver မခွဲဘဲ Cost Reduction လုပ်ခြင်း",
        "Budget နဲ့ Actual ကို မနှိုင်းယှဉ်ခြင်း",
        "Margin မကြည့်ဘဲ Revenue တစ်ခုတည်းကြည့်ခြင်း",
        "Financial Data ကို Business Action နဲ့ မချိတ်ခြင်း"
      ];

    }

    if (category === "Leadership & Management") {

      return [
        "Team Member အားလုံးကို တူညီတဲ့ Management Style သုံးခြင်း",
        "Problem ဖြစ်မှ Feedback ပေးခြင်း",
        "Delegation လုပ်ပြီး Follow-up မလုပ်ခြင်း",
        "Performance Problem ကို Root Cause မရှာခြင်း",
        "Manager က အလုပ်အားလုံးကို ကိုယ်တိုင်လုပ်ခြင်း"
      ];

    }

    return common;

  }


  function buildPractice(lesson, guide) {

    return [
      {
        question:
          lesson.title +
          " ကို လက်ရှိလုပ်ငန်းမှာ အသုံးချမယ်ဆိုရင် ဘယ် Situation ကနေ စမလဲ",
        answer:
          "လက်ရှိ Business Problem သို့မဟုတ် Opportunity တစ်ခုကို ရွေးပြီး Situation ကို Number နဲ့ သတ်မှတ်ပါ"
      },

      {
        question:
          "ဒီ Lesson အတွက် ဘယ် KPI ကို စောင့်ကြည့်မလဲ",
        answer:
          guide.kpis[0] +
          " ကို အခြေခံပြီး လိုအပ်သလို " +
          guide.kpis[1] +
          " နှင့် ချိတ်ဆက်ပါ"
      },

      {
        question:
          "Result မကောင်းရင် ဘာလုပ်မလဲ",
        answer:
          "Gap ကို သတ်မှတ်ပြီး Root Cause ရှာကာ Owner + Action + Deadline ပါတဲ့ Recovery Plan ပြုလုပ်ပါ"
      }
    ];

  }


  function buildTakeaways(lesson, guide) {

    return [
      lesson.title +
        " ကို Business Result နဲ့ ချိတ်ဆက်ပြီး အသုံးချပါ",

      "Target နဲ့ Actual ကို ခွဲပြီး Gap ကို ရှင်းရှင်းလင်းလင်း သိပါ",

      guide.kpis[0] +
        " ကို ပုံမှန်စောင့်ကြည့်ပါ",

      "Data → Insight → Action → Review Cycle ကို အသုံးပြုပါ",

      "Manager ရဲ့ အဓိကတာဝန်က Activity ကိုသာ မစောင့်ကြည့်ဘဲ Result ကို တိုးတက်စေခြင်း ဖြစ်ပါတယ်"
    ];

  }


  /* =======================================================
     UI HELPERS
     ======================================================= */

  function $(selector) {

    return document.querySelector(selector);

  }


  function $all(selector) {

    return Array.from(
      document.querySelectorAll(selector)
    );

  }


  function showToast(message, icon) {

    const toast = $("#toast");
    const text = $("#toast-message");
    const toastIcon = $("#toast-icon");

    if (!toast || !text) {
      return;
    }

    text.textContent = message;

    if (toastIcon) {
      toastIcon.textContent =
        icon || "✓";
    }

    toast.classList.remove("hidden");

    clearTimeout(toastTimer);

    toastTimer =
      setTimeout(function () {

        toast.classList.add("hidden");

      }, 2800);

  }


  function openModal(id) {

    const modal = $("#" + id);

    if (!modal) {
      return;
    }

    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";

  }


  function closeModal(id) {

    const modal = $("#" + id);

    if (!modal) {
      return;
    }

    modal.classList.add("hidden");

    document.body.style.overflow = "";

  }


  function closeAllModals() {

    $all(".modal-overlay")
      .forEach(function (modal) {

        modal.classList.add("hidden");

      });

    document.body.style.overflow = "";

  }


  /* =======================================================
     PAGE TITLES
     ======================================================= */

  const pageMeta = {

    dashboard: {
      title: "Dashboard",
      subtitle:
        "Business Management Command Center"
    },

    academy: {
      title: "Business Academy",
      subtitle:
        "Professional Business Management Learning"
    },

    lessons: {
      title: "Lessons",
      subtitle:
        "260 Professional Business Lessons"
    },

    progress: {
      title: "My Progress",
      subtitle:
        "Learning performance and completion"
    },

    sales: {
      title: "Sales Manager",
      subtitle:
        "Target, Team and Daily Sales Execution"
    },

    kpi: {
      title: "KPI & Analytics",
      subtitle:
        "Target, Actual, Achievement and Gap"
    },

    tools: {
      title: "Business Tools",
      subtitle:
        "Practical calculators for business decisions"
    },

    reports: {
      title: "Reports",
      subtitle:
        "Learning and business performance reports"
    },

    "ai-coach": {
      title: "AI Business Coach",
      subtitle:
        "Practical AI support for business decisions"
    },

    "ai-tools": {
      title: "AI Business Tools",
      subtitle:
        "AI-powered business problem solving"
    },

    premium: {
      title: "Premium Membership",
      subtitle:
        "Unlock advanced learning and business tools"
    },

    settings: {
      title: "Settings",
      subtitle:
        "Profile and application settings"
    }

  };


  function updatePageMeta(section) {

    const meta =
      pageMeta[section] ||
      pageMeta.dashboard;

    const title = $("#page-title");
    const subtitle = $("#page-subtitle");

    if (title) {
      title.textContent =
        meta.title;
    }

    if (subtitle) {
      subtitle.textContent =
        meta.subtitle;
    }

  }


  function updateNavigation(section) {

    $all(".nav-item")
      .forEach(function (item) {

        item.classList.toggle(
          "active",
          item.dataset.section === section
        );

      });

  }


  function updatePremiumUI() {

    const status =
      $("#sidebar-premium-status");

    if (!status) {
      return;
    }

    if (isPremium()) {

      const days =
        getPremiumRemainingDays();

      status.textContent =
        "Premium • " +
        days +
        " days remaining";

    } else {

      status.textContent =
        "Basic Member";

    }

  }


  /* =======================================================
     NAVIGATION
     ======================================================= */

  function goToSection(section) {

    if (!pageMeta[section]) {
      section = "dashboard";
    }

    currentSection = section;

    currentLessonId = null;

    updatePageMeta(section);
    updateNavigation(section);

    closeSidebar();

    renderCurrentSection();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  /* =======================================================
     DASHBOARD
     ======================================================= */

  function renderDashboard() {

    const app = $("#app");

    if (!app) {
      return;
    }

    const user = getUser();

    const completed =
      getCompleted().length;

    const progress =
      getProgress();

    const next =
      getNextLesson();

    const premium =
      isPremium();

    app.innerHTML = `

      <div class="dashboard-hero">

        <div class="hero-content">

          <span class="hero-label">
            ${APP_VERSION}
          </span>

          <h1 class="hero-title">
            Welcome back, ${escapeHtml(user.name)}
          </h1>

          <p class="hero-description">
            ${escapeHtml(user.role)} အတွက် Business Management,
            Sales Management, KPI, Finance, Leadership နှင့် AI Business
            Skills တွေကို လက်တွေ့အသုံးချနိုင်အောင် စနစ်တကျ လေ့လာနိုင်ပါတယ်
          </p>

          <div class="hero-actions">

            ${
              next
                ? `
                  <button
                    class="btn btn-primary open-lesson"
                    data-lesson-id="${escapeHtml(next.id)}"
                    type="button"
                  >
                    ▶ Continue Learning
                  </button>
                `
                : ""
            }

            <button
              class="btn btn-secondary"
              data-section="sales"
              type="button"
            >
              🎯 Sales Manager
            </button>

          </div>

        </div>

      </div>


      <div class="stat-grid">

        <div class="stat-card">

          <div class="stat-top">

            <div class="stat-label">
              Total Lessons
            </div>

            <div class="stat-icon">
              📚
            </div>

          </div>

          <div class="stat-value">
            ${formatNumber(lessons.length)}
          </div>

          <div class="stat-meta">
            Professional Business Lessons
          </div>

        </div>


        <div class="stat-card stat-success">

          <div class="stat-top">

            <div class="stat-label">
              Completed
            </div>

            <div class="stat-icon">
              ✓
            </div>

          </div>

          <div class="stat-value">
            ${formatNumber(completed)}
          </div>

          <div class="stat-meta">
            Lessons completed
          </div>

        </div>


        <div class="stat-card stat-purple">

          <div class="stat-top">

            <div class="stat-label">
              Learning Progress
            </div>

            <div class="stat-icon">
              📈
            </div>

          </div>

          <div class="stat-value">
            ${progress}%
          </div>

          <div class="stat-meta">
            Overall academy progress
          </div>

        </div>


        <div class="stat-card stat-warning">

          <div class="stat-top">

            <div class="stat-label">
              Membership
            </div>

            <div class="stat-icon">
              💎
            </div>

          </div>

          <div class="stat-value">
            ${premium ? "PRO" : "FREE"}
          </div>

          <div class="stat-meta">
            ${
              premium
                ? getPremiumRemainingDays() + " days remaining"
                : "Lesson 1 free"
            }
          </div>

        </div>

      </div>


      <div class="grid-2">

        <div class="continue-card">

          <div class="continue-label">
            Continue Learning
          </div>

          ${
            next
              ? `
                <div class="continue-title">
                  ${escapeHtml(next.title)}
                </div>

                <div class="continue-category">
                  ${escapeHtml(next.category)}
                </div>

                <div class="progress-wrap">

                  <div class="progress-info">
                    <span>Overall Progress</span>
                    <strong>${progress}%</strong>
                  </div>

                  <div class="progress-bar">
                    <div
                      class="progress-fill"
                      style="width:${progress}%"
                    ></div>
                  </div>

                </div>

                <div class="continue-actions">

                  <span>
                    Lesson ${next.number}
                  </span>

                  <button
                    class="btn open-lesson"
                    data-lesson-id="${escapeHtml(next.id)}"
                    type="button"
                  >
                    Open Lesson →
                  </button>

                </div>
              `
              : `
                <div class="continue-title">
                  All Lessons Completed
                </div>

                <div class="continue-category">
                  Your academy progress is complete
                </div>
              `
          }

        </div>


        <div class="card card-padding">

          <div class="card-title">
            Manager Focus
          </div>

          <div class="card-subtitle">
            Recommended areas for practical business growth
          </div>

          <div class="focus-card" style="margin-top:12px">

            <div class="focus-icon">
              🎯
            </div>

            <div class="focus-title">
              Sales Target & KPI
            </div>

            <div class="focus-description">
              Target → Actual → Gap → Action Plan ဆိုတဲ့
              Management Cycle ကို အသုံးချပါ
            </div>

            <button
              class="focus-link"
              data-section="kpi"
              type="button"
            >
              Open KPI →
            </button>

          </div>

        </div>

      </div>


      <div class="section-title-row">

        <div>
          <div class="section-title">
            Business Management Areas
          </div>

          <div class="section-description">
            Category တစ်ခုရွေးပြီး သင်ခန်းစာများကို ဆက်လေ့လာပါ
          </div>
        </div>

        <button
          class="btn btn-secondary btn-small"
          data-section="academy"
          type="button"
        >
          View All
        </button>

      </div>


      <div class="category-grid">

        ${courseData.slice(0, 8).map(function (category) {

          return `
            <div
              class="category-card"
              data-category="${escapeHtml(category.name)}"
            >

              <div class="category-icon">
                ${category.icon}
              </div>

              <div class="category-name">
                ${escapeHtml(category.name)}
              </div>

              <div class="category-count">
                ${category.lessons.length} Lessons
              </div>

              <div class="category-progress">

                <div class="progress-info">
                  <span>Progress</span>
                  <strong>
                    ${getCategoryProgress(category.name)}%
                  </strong>
                </div>

                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    style="width:${getCategoryProgress(category.name)}%"
                  ></div>
                </div>

              </div>

            </div>
          `;

        }).join("")}

      </div>

    `;

  }


  /* =======================================================
     ACADEMY
     ======================================================= */

  function renderAcademy() {

    const app = $("#app");

    const categories =
      courseData.map(function (category) {

        return `
          <div
            class="category-card"
            data-category="${escapeHtml(category.name)}"
          >

            <div class="category-icon">
              ${category.icon}
            </div>

            <div class="category-name">
              ${escapeHtml(category.name)}
            </div>

            <div class="category-count">
              ${category.lessons.length} Lessons
            </div>

            <div class="category-progress">

              <div class="progress-info">
                <span>Completed</span>
                <strong>
                  ${getCategoryProgress(category.name)}%
                </strong>
              </div>

              <div class="progress-bar">

                <div
                  class="progress-fill"
                  style="width:${getCategoryProgress(category.name)}%"
                ></div>

              </div>

            </div>

          </div>
        `;

      }).join("");

    app.innerHTML = `

      <div class="content-header">

        <div>
          <h1>
            Business Academy
          </h1>

          <p>
            ${lessons.length} professional lessons across
            ${courseData.length} business categories
          </p>
        </div>

        <div class="header-actions">

          <button
            class="btn btn-primary"
            data-section="lessons"
            type="button"
          >
            📖 Open Lessons
          </button>

        </div>

      </div>


      <div class="dashboard-hero">

        <div class="hero-content">

          <span class="hero-label">
            PROFESSIONAL LEARNING SYSTEM
          </span>

          <h1 class="hero-title">
            Business Manager Skill Development
          </h1>

          <p class="hero-description">
            Business Fundamentals ကနေ Sales Management,
            Finance, Leadership, KPI, Digital Business နှင့် AI အထိ
            Manager အတွက် လက်တွေ့အသုံးချနိုင်တဲ့ Learning Path
          </p>

        </div>

      </div>


      <div class="stat-grid">

        <div class="stat-card">
          <div class="stat-label">
            Categories
          </div>

          <div class="stat-value">
            ${courseData.length}
          </div>

          <div class="stat-meta">
            Business management areas
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-label">
            Lessons
          </div>

          <div class="stat-value">
            ${lessons.length}
          </div>

          <div class="stat-meta">
            Professional lessons
          </div>
        </div>

        <div class="stat-card stat-success">
          <div class="stat-label">
            Completed
          </div>

          <div class="stat-value">
            ${getCompleted().length}
          </div>

          <div class="stat-meta">
            Your completed lessons
          </div>
        </div>

        <div class="stat-card stat-purple">
          <div class="stat-label">
            Progress
          </div>

          <div class="stat-value">
            ${getProgress()}%
          </div>

          <div class="stat-meta">
            Overall learning progress
          </div>
        </div>

      </div>


      <div class="section-title-row">

        <div>
          <div class="section-title">
            All Learning Categories
          </div>
        </div>

      </div>


      <div class="category-grid">
        ${categories}
      </div>

    `;

  }


  /* =======================================================
     LESSON LIST
     ======================================================= */

  function getFilteredLessons() {

    return lessons.filter(function (lesson) {

      const matchesCategory =
        currentCategory === "All" ||
        lesson.category === currentCategory;

      const term =
        searchTerm
          .trim()
          .toLowerCase();

      const matchesSearch =
        !term ||
        lesson.title
          .toLowerCase()
          .includes(term) ||
        lesson.category
          .toLowerCase()
          .includes(term);

      return (
        matchesCategory &&
        matchesSearch
      );

    });

  }


  function renderLessons() {

    const app = $("#app");

    const filtered =
      getFilteredLessons();

    const categoryOptions =
      [
        `<option value="All">All Categories</option>`
      ]
      .concat(
        courseData.map(function (category) {

          return `
            <option
              value="${escapeHtml(category.name)}"
              ${
                currentCategory === category.name
                  ? "selected"
                  : ""
              }
            >
              ${escapeHtml(category.name)}
            </option>
          `;

        })
      )
      .join("");

    const list =
      filtered.map(function (lesson) {

        const completed =
          isCompleted(lesson.id);

        const free =
          isLessonFree(lesson);

        const accessible =
          canOpenLesson(lesson);

        return `
          <div
            class="
              lesson-list-item
              ${completed ? "completed" : ""}
              ${!accessible ? "locked" : ""}
            "
          >

            <div class="lesson-number">

              ${
                completed
                  ? "✓"
                  : !accessible
                    ? "🔒"
                    : lesson.number
              }

            </div>


            <div class="lesson-info">

              <div class="lesson-title">
                ${escapeHtml(lesson.title)}
              </div>

              <div class="lesson-category">
                ${lesson.icon}
                ${escapeHtml(lesson.category)}
              </div>

              <div class="lesson-badges">

                ${
                  free
                    ? `
                      <span class="badge badge-free">
                        FREE
                      </span>
                    `
                    : `
                      <span class="badge badge-premium">
                        PREMIUM
                      </span>
                    `
                }

                ${
                  completed
                    ? `
                      <span class="badge badge-complete">
                        COMPLETED
                      </span>
                    `
                    : ""
                }

              </div>

            </div>


            <div class="lesson-action">

              <button
                class="
                  btn
                  btn-small
                  ${
                    accessible
                      ? "btn-primary"
                      : "btn-secondary"
                  }
                  open-lesson
                "
                data-lesson-id="${escapeHtml(lesson.id)}"
                type="button"
              >

                ${
                  completed
                    ? "Review"
                    : accessible
                      ? "Open"
                      : "🔒"
                }

              </button>

            </div>

          </div>
        `;

      }).join("");

    app.innerHTML = `

      <div class="content-header">

        <div>

          <h1>
            Professional Lessons
          </h1>

          <p>
            Lesson 1 is free • Lesson 2+ requires Premium
          </p>

        </div>

        <div class="header-actions">

          <span class="badge badge-complete">
            ${filtered.length} Results
          </span>

        </div>

      </div>


      <div class="filter-bar">

        <div class="search-box">

          <span class="search-icon">
            🔎
          </span>

          <input
            id="lesson-search"
            type="search"
            placeholder="Search lessons or categories..."
            value="${escapeHtml(searchTerm)}"
            autocomplete="off"
          >

        </div>


        <select
          id="category-filter"
          class="select-control"
        >
          ${categoryOptions}
        </select>

      </div>


      <div class="lesson-list">

        ${
          list ||
          `
            <div class="empty-state">

              <div class="empty-icon">
                🔎
              </div>

              <div class="empty-title">
                No lessons found
              </div>

              <div class="empty-text">
                Search keyword သို့မဟုတ် Category ကို ပြောင်းကြည့်ပါ
              </div>

            </div>
          `
        }

      </div>

    `;

    bindLessonFilters();

  }


  function bindLessonFilters() {

    const search =
      $("#lesson-search");

    if (search) {

      search.addEventListener(
        "input",
        function (event) {

          searchTerm =
            event.target.value;

          renderLessons();

          const newSearch =
            $("#lesson-search");

          if (newSearch) {

            newSearch.focus();

            try {

              newSearch.setSelectionRange(
                searchTerm.length,
                searchTerm.length
              );

            } catch (error) {}

          }

        }
      );

    }

    const filter =
      $("#category-filter");

    if (filter) {

      filter.addEventListener(
        "change",
        function (event) {

          currentCategory =
            event.target.value;

          renderLessons();

        }
      );

    }

  }


  /* =======================================================
     LESSON READER
     ======================================================= */

  function renderLesson(lessonId) {

    const lesson =
      getLesson(lessonId);

    if (!lesson) {

      goToSection("lessons");

      return;

    }

    currentLessonId =
      lesson.id;

    if (!canOpenLesson(lesson)) {

      openPremiumModal(
        lesson
      );

      return;

    }

    const content =
      getLessonContent(lesson);

    const completed =
      isCompleted(lesson.id);

    const app =
      $("#app");

    app.innerHTML = `

      <div class="lesson-reader">

        <div class="lesson-reader-header">

          <div class="lesson-reader-category">
            ${lesson.icon}
            ${escapeHtml(lesson.category)}
          </div>

          <div class="lesson-reader-title">
            ${escapeHtml(lesson.title)}
          </div>

          <div class="lesson-reader-meta">

            <span>
              Lesson ${lesson.number} / ${lessons.length}
            </span>

            <span>•</span>

            <span>
              ${completed ? "Completed" : "In Progress"}
            </span>

            <span>•</span>

            <span>
              ${isLessonFree(lesson) ? "Free Lesson" : "Premium Lesson"}
            </span>

          </div>


          <div class="lesson-reader-actions">

            <button
              class="btn btn-secondary back-lessons"
              type="button"
            >
              ← Back to Lessons
            </button>

            <button
              class="
                btn
                ${completed ? "btn-success" : "btn-primary"}
                toggle-complete
              "
              data-lesson-id="${escapeHtml(lesson.id)}"
              type="button"
            >
              ${
                completed
                  ? "✓ Completed"
                  : "✓ Mark Complete"
              }
            </button>

          </div>

        </div>


        ${lessonSection(
          "🎯",
          "Learning Objective",
          `<p>${escapeHtml(content.objective)}</p>`
        )}


        ${lessonSection(
          "📌",
          "Core Concept",
          `<p>${escapeHtml(content.concept)}</p>`
        )}


        ${lessonSection(
          "💡",
          "Why It Matters",
          `<p>${escapeHtml(content.why)}</p>`
        )}


        ${lessonSection(
          "🛠️",
          "Practical Steps",
          `
            <div class="lesson-steps">

              ${
                content.steps.map(function (step, index) {

                  return `
                    <div class="lesson-step">

                      <div class="step-number">
                        ${index + 1}
                      </div>

                      <div class="step-text">
                        ${escapeHtml(step)}
                      </div>

                    </div>
                  `;

                }).join("")
              }

            </div>
          `
        )}


        ${lessonSection(
          "🏢",
          "Business Example",
          `
            <div class="lesson-example">
              ${escapeHtml(content.example)}
            </div>
          `
        )}


        ${lessonSection(
          "👔",
          "Manager Application",
          `
            <div class="lesson-steps">

              ${
                content.manager.map(function (item, index) {

                  return `
                    <div class="lesson-step">

                      <div class="step-number">
                        ${index + 1}
                      </div>

                      <div class="step-text">
                        ${escapeHtml(item)}
                      </div>

                    </div>
                  `;

                }).join("")
              }

            </div>
          `
        )}


        ${lessonSection(
          "📊",
          "Recommended KPI",
          `
            <div class="lesson-kpi-grid">

              ${
                content.kpis.map(function (kpi) {

                  return `
                    <div class="lesson-kpi">

                      <div class="lesson-kpi-name">
                        KPI
                      </div>

                      <div class="lesson-kpi-value">
                        ${escapeHtml(kpi)}
                      </div>

                    </div>
                  `;

                }).join("")
              }

            </div>
          `
        )}


        ${lessonSection(
          "⚠️",
          "Common Mistakes",
          `
            <div class="lesson-checklist">

              ${
                content.mistakes.map(function (item) {

                  return `
                    <div class="check-item">
                      ${escapeHtml(item)}
                    </div>
                  `;

                }).join("")
              }

            </div>
          `
        )}


        ${lessonSection(
          "🚀",
          "7-Day Action Plan",
          `
            <div class="lesson-steps">

              ${
                content.actionPlan.map(function (item, index) {

                  return `
                    <div class="lesson-step">

                      <div class="step-number">
                        ${index + 1}
                      </div>

                      <div class="step-text">
                        ${escapeHtml(item)}
                      </div>

                    </div>
                  `;

                }).join("")
              }

            </div>
          `
        )}


        ${lessonSection(
          "☑️",
          "Manager Checklist",
          `
            <div class="lesson-checklist">

              ${
                content.checklist.map(function (item) {

                  return `
                    <div class="check-item">
                      ${escapeHtml(item)}
                    </div>
                  `;

                }).join("")
              }

            </div>
          `
        )}


        ${lessonSection(
          "📝",
          "Practice",
          `
            <div class="lesson-steps">

              ${
                content.practice.map(function (item, index) {

                  return `
                    <div class="lesson-step">

                      <div class="step-number">
                        ${index + 1}
                      </div>

                      <div>

                        <div class="step-text">
                          <strong>
                            ${escapeHtml(item.question)}
                          </strong>
                        </div>

                        <div
                          class="step-text"
                          style="margin-top:5px"
                        >
                          Answer:
                          ${escapeHtml(item.answer)}
                        </div>

                      </div>

                    </div>
                  `;

                }).join("")
              }

            </div>
          `
        )}


        ${lessonSection(
          "🔑",
          "Key Takeaways",
          `
            <div class="lesson-takeaways">

              ${
                content.takeaways.map(function (item) {

                  return `
                    <div class="takeaway">
                      <span>◆</span>
                      <span>
                        ${escapeHtml(item)}
                      </span>
                    </div>
                  `;

                }).join("")
              }

            </div>
          `
        )}


        <div
          class="card card-padding"
          style="margin-bottom:20px"
        >

          <div class="card-title">
            Next Step
          </div>

          <div class="card-subtitle">
            Lesson ကို Business Result အဖြစ် ပြောင်းလဲပါ
          </div>

          <div
            class="header-actions"
            style="margin-top:12px"
          >

            <button
              class="btn btn-primary"
              data-section="kpi"
              type="button"
            >
              📊 Open KPI
            </button>

            <button
              class="btn btn-secondary"
              data-section="tools"
              type="button"
            >
              🧰 Business Tools
            </button>

            <button
              class="btn btn-secondary"
              data-section="ai-coach"
              type="button"
            >
              🤖 Ask AI Coach
            </button>

          </div>

        </div>

      </div>

    `;

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  function lessonSection(icon, title, content) {

    return `
      <section class="lesson-section">

        <div class="lesson-section-title">

          <span class="lesson-section-title-icon">
            ${icon}
          </span>

          <span>
            ${title}
          </span>

        </div>

        <div class="lesson-section-content">
          ${content}
        </div>

      </section>
    `;

  }


  /* =======================================================
     PROGRESS
     ======================================================= */

  function renderProgress() {

    const app = $("#app");

    const completed =
      getCompleted();

    const progress =
      getProgress();

    const remaining =
      Math.max(
        0,
        lessons.length -
        completed.length
      );

    app.innerHTML = `

      <div class="content-header">

        <div>

          <h1>
            My Learning Progress
          </h1>

          <p>
            Your Business Academy learning performance
          </p>

        </div>

        <div class="header-actions">

          <button
            class="btn btn-danger btn-small reset-progress"
            type="button"
          >
            Reset Progress
          </button>

        </div>

      </div>


      <div class="stat-grid">

        <div class="stat-card">

          <div class="stat-label">
            Overall Progress
          </div>

          <div class="stat-value">
            ${progress}%
          </div>

          <div class="progress-wrap">

            <div class="progress-bar">

              <div
                class="progress-fill"
                style="width:${progress}%"
              ></div>

            </div>

          </div>

        </div>


        <div class="stat-card stat-success">

          <div class="stat-label">
            Completed
          </div>

          <div class="stat-value">
            ${completed.length}
          </div>

          <div class="stat-meta">
            Lessons completed
          </div>

        </div>


        <div class="stat-card stat-warning">

          <div class="stat-label">
            Remaining
          </div>

          <div class="stat-value">
            ${remaining}
          </div>

          <div class="stat-meta">
            Lessons remaining
          </div>

        </div>


        <div class="stat-card stat-purple">

          <div class="stat-label">
            Categories
          </div>

          <div class="stat-value">
            ${courseData.length}
          </div>

          <div class="stat-meta">
            Learning categories
          </div>

        </div>

      </div>


      <div class="section-title-row">

        <div>
          <div class="section-title">
            Category Progress
          </div>

          <div class="section-description">
            Category တစ်ခုချင်းစီရဲ့ Learning Progress
          </div>
        </div>

      </div>


      <div class="grid-2">

        ${
          courseData.map(function (category) {

            const categoryProgress =
              getCategoryProgress(
                category.name
              );

            return `
              <div class="card card-padding">

                <div
                  style="
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    gap:10px;
                  "
                >

                  <div>

                    <div class="card-title">
                      ${category.icon}
                      ${escapeHtml(category.name)}
                    </div>

                    <div class="card-subtitle">
                      ${category.lessons.length} Lessons
                    </div>

                  </div>

                  <strong>
                    ${categoryProgress}%
                  </strong>

                </div>

                <div class="progress-wrap">

                  <div class="progress-bar">

                    <div
                      class="progress-fill"
                      style="width:${categoryProgress}%"
                    ></div>

                  </div>

                </div>

              </div>
            `;

          }).join("")
        }

      </div>

    `;

  }


  /* =======================================================
     SALES MANAGER
     ======================================================= */

  function getKPIData() {

    const saved =
      readJSON(
        STORAGE.kpi,
        {}
      );

    return {
      target: Number(saved.target) || 500,
      actual: Number(saved.actual) || 385,
      workingDays: Number(saved.workingDays) || 26,
      team: Number(saved.team) || 4,
      customers: Number(saved.customers) || 0,
      orders: Number(saved.orders) || 0
    };

  }


  function saveKPIData(data) {

    writeJSON(
      STORAGE.kpi,
      data
    );

  }


  function calculateAchievement(target, actual) {

    target =
      Number(target) || 0;

    actual =
      Number(actual) || 0;

    if (target <= 0) {
      return 0;
    }

    return (
      actual / target
    ) * 100;

  }


  function renderSales() {

    const app = $("#app");

    const data =
      getKPIData();

    const achievement =
      calculateAchievement(
        data.target,
        data.actual
      );

    const gap =
      data.target -
      data.actual;

    const dailyTarget =
      data.workingDays > 0
        ? data.target / data.workingDays
        : 0;

    const dailyActual =
      data.workingDays > 0
        ? data.actual / data.workingDays
        : 0;

    app.innerHTML = `

      <div class="content-header">

        <div>

          <h1>
            Sales Manager Command Center
          </h1>

          <p>
            Target → Actual → Gap → Action
          </p>

        </div>

      </div>


      <div class="grid-4">

        <div class="kpi-highlight">

          <div class="kpi-label">
            TARGET
          </div>

          <div class="kpi-number">
            ${formatNumber(data.target)} L
          </div>

          <div class="kpi-sub">
            Monthly target
          </div>

        </div>


        <div class="kpi-highlight">

          <div class="kpi-label">
            ACTUAL
          </div>

          <div class="kpi-number kpi-positive">
            ${formatNumber(data.actual)} L
          </div>

          <div class="kpi-sub">
            Current actual
          </div>

        </div>


        <div class="kpi-highlight">

          <div class="kpi-label">
            ACHIEVEMENT
          </div>

          <div class="kpi-number">
            ${achievement.toFixed(1)}%
          </div>

          <div class="kpi-sub">
            Target achievement
          </div>

        </div>


        <div class="kpi-highlight">

          <div class="kpi-label">
            GAP
          </div>

          <div
            class="
              kpi-number
              ${gap > 0 ? "kpi-negative" : "kpi-positive"}
            "
          >
            ${formatNumber(Math.abs(gap))} L
          </div>

          <div class="kpi-sub">
            ${gap > 0 ? "Remaining gap" : "Target achieved"}
          </div>

        </div>

      </div>


      <div class="grid-2" style="margin-top:18px">

        <div class="sales-form">

          <div class="card-title">
            🎯 Sales KPI Input
          </div>

          <div class="card-subtitle">
            Daily management အတွက် KPI data update လုပ်ပါ
          </div>


          <div class="form-grid" style="margin-top:15px">

            <div class="form-group">

              <label class="form-label">
                Monthly Target
              </label>

              <input
                id="sales-target"
                class="form-control"
                type="number"
                min="0"
                step="0.01"
                value="${data.target}"
              >

            </div>


            <div class="form-group">

              <label class="form-label">
                Actual Sales
              </label>

              <input
                id="sales-actual"
                class="form-control"
                type="number"
                min="0"
                step="0.01"
                value="${data.actual}"
              >

            </div>


            <div class="form-group">

              <label class="form-label">
                Working Days
              </label>

              <input
                id="sales-days"
                class="form-control"
                type="number"
                min="1"
                max="31"
                value="${data.workingDays}"
              >

            </div>


            <div class="form-group">

              <label class="form-label">
                Team Size
              </label>

              <input
                id="sales-team"
                class="form-control"
                type="number"
                min="1"
                value="${data.team}"
              >

            </div>


            <div class="form-group">

              <label class="form-label">
                Active Customers
              </label>

              <input
                id="sales-customers"
                class="form-control"
                type="number"
                min="0"
                value="${data.customers}"
              >

            </div>


            <div class="form-group">

              <label class="form-label">
                Orders
              </label>

              <input
                id="sales-orders"
                class="form-control"
                type="number"
                min="0"
                value="${data.orders}"
              >

            </div>

          </div>


          <div style="margin-top:14px">

            <button
              class="btn btn-primary save-sales-kpi"
              type="button"
            >
              💾 Save KPI
            </button>

          </div>

        </div>


        <div class="card card-padding">

          <div class="card-title">
            📅 Daily Execution
          </div>

          <div class="card-subtitle">
            Monthly target ကို working days အလိုက် ခွဲထားခြင်း
          </div>


          <div class="grid-2" style="margin-top:15px">

            <div class="kpi-highlight">

              <div class="kpi-label">
                DAILY TARGET
              </div>

              <div class="kpi-number">
                ${dailyTarget.toFixed(2)} L
              </div>

            </div>


            <div class="kpi-highlight">

              <div class="kpi-label">
                DAILY AVERAGE
              </div>

              <div class="kpi-number">
                ${dailyActual.toFixed(2)} L
              </div>

            </div>

          </div>


          <div style="margin-top:15px">

            <div class="progress-info">

              <span>
                Monthly Achievement
              </span>

              <strong>
                ${achievement.toFixed(1)}%
              </strong>

            </div>

            <div class="progress-bar">

              <div
                class="progress-fill"
                style="
                  width:${Math.min(100, Math.max(0, achievement))}%
                "
              ></div>

            </div>

          </div>


          <div
            class="lesson-example"
            style="margin-top:15px"
          >

            Manager Rule:
            Gap ရှိနေပါက Target ကို ထပ်ကြည့်ရုံမဟုတ်ဘဲ
            Territory, Customer Coverage, Order Frequency,
            Productivity နဲ့ Pipeline ကို ခွဲစစ်ပြီး Recovery Action ချပါ

          </div>

        </div>

      </div>


      <div class="section-title-row">

        <div>
          <div class="section-title">
            Sales Manager Daily Review
          </div>
        </div>
      </div>


      <div class="grid-3">

        ${[
          ["Morning", "Daily Target, Team Priority, Customer Plan"],
          ["Midday", "Actual Sales, Pipeline, Critical Gap"],
          ["Evening", "Result, Gap Reason, Tomorrow Action"]
        ].map(function (item) {

          return `
            <div class="focus-card">

              <div class="focus-icon">
                📋
              </div>

              <div class="focus-title">
                ${item[0]} Review
              </div>

              <div class="focus-description">
                ${item[1]}
              </div>

            </div>
          `;

        }).join("")}

      </div>

    `;

  }


  /* =======================================================
     KPI ANALYTICS
     ======================================================= */

  function renderKPI() {

    const app = $("#app");

    const data =
      getKPIData();

    const achievement =
      calculateAchievement(
        data.target,
        data.actual
      );

    const gap =
      data.target -
      data.actual;

    const teamProductivity =
      data.team > 0
        ? data.actual / data.team
        : 0;

    const averageOrder =
      data.orders > 0
        ? data.actual / data.orders
        : 0;

    app.innerHTML = `

      <div class="content-header">

        <div>

          <h1>
            KPI & Analytics
          </h1>

          <p>
            Business performance ကို Number နဲ့ စီမံပါ
          </p>

        </div>

        <div class="header-actions">

          <button
            class="btn btn-primary"
            data-section="sales"
            type="button"
          >
            🎯 Sales Manager
          </button>

        </div>

      </div>


      <div class="grid-4">

        <div class="kpi-highlight">

          <div class="kpi-label">
            TARGET
          </div>

          <div class="kpi-number">
            ${formatNumber(data.target)} L
          </div>

        </div>


        <div class="kpi-highlight">

          <div class="kpi-label">
            ACTUAL
          </div>

          <div class="kpi-number">
            ${formatNumber(data.actual)} L
          </div>

        </div>


        <div class="kpi-highlight">

          <div class="kpi-label">
            ACHIEVEMENT
          </div>

          <div class="kpi-number">
            ${achievement.toFixed(1)}%
          </div>

        </div>


        <div class="kpi-highlight">

          <div class="kpi-label">
            GAP
          </div>

          <div
            class="
              kpi-number
              ${gap > 0 ? "kpi-negative" : "kpi-positive"}
            "
          >
            ${formatNumber(Math.abs(gap))} L
          </div>

        </div>

      </div>


      <div class="section-title-row">

        <div>
          <div class="section-title">
            Management Metrics
          </div>
        </div>

      </div>


      <div class="grid-3">

        <div class="report-card">

          <div class="report-title">
            Team Productivity
          </div>

          <div class="report-value">
            ${teamProductivity.toFixed(2)} L
          </div>

          <div class="report-note">
            Average sales per team member
          </div>

        </div>


        <div class="report-card">

          <div class="report-title">
            Average Order
          </div>

          <div class="report-value">
            ${averageOrder.toFixed(2)} L
          </div>

          <div class="report-note">
            Sales per order
          </div>

        </div>


        <div class="report-card">

          <div class="report-title">
            Customer Base
          </div>

          <div class="report-value">
            ${formatNumber(data.customers)}
          </div>

          <div class="report-note">
            Active customers
          </div>

        </div>

      </div>


      <div class="card card-padding" style="margin-top:18px">

        <div class="card-title">
          KPI Management Framework
        </div>

        <div class="card-subtitle">
          KPI ကို Report အဖြစ်သာ မထားဘဲ Action ဖြစ်အောင် အသုံးချပါ
        </div>


        <div class="table-wrap" style="margin-top:15px">

          <table class="data-table">

            <thead>

              <tr>

                <th>KPI</th>
                <th>Current</th>
                <th>Meaning</th>
                <th>Manager Action</th>

              </tr>

            </thead>

            <tbody>

              <tr>
                <td class="number">Achievement %</td>
                <td>${achievement.toFixed(1)}%</td>
                <td>Target ရဲ့ ဘယ်လောက်ရောက်ပြီလဲ</td>
                <td>Gap Driver စစ်ပါ</td>
              </tr>

              <tr>
                <td class="number">Sales Gap</td>
                <td>${formatNumber(Math.abs(gap))} L</td>
                <td>Target မပြည့်သေးတဲ့ Amount</td>
                <td>Recovery Plan ချပါ</td>
              </tr>

              <tr>
                <td class="number">Team Productivity</td>
                <td>${teamProductivity.toFixed(2)} L</td>
                <td>Member တစ်ဦးချင်း Result</td>
                <td>Coaching လုပ်ပါ</td>
              </tr>

              <tr>
                <td class="number">Average Order</td>
                <td>${averageOrder.toFixed(2)} L</td>
                <td>Order တစ်ခုချင်း Value</td>
                <td>Upsell / Cross-sell စဉ်းစားပါ</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    `;

  }


  /* =======================================================
     BUSINESS TOOLS
     ======================================================= */

  function renderTools() {

    const app = $("#app");

    app.innerHTML = `

      <div class="content-header">

        <div>

          <h1>
            Business Tools
          </h1>

          <p>
            Business Decision အတွက် Practical Calculators
          </p>

        </div>

      </div>


      <div class="tool-grid">


        <!-- PRICING -->

        <div class="tool-card">

          <div class="tool-icon">
            💰
          </div>

          <div class="tool-title">
            Pricing Calculator
          </div>

          <div class="tool-description">
            Cost နဲ့ Desired Margin အပေါ်အခြေခံပြီး Selling Price တွက်ပါ
          </div>


          <div class="tool-form">

            <input
              id="price-cost"
              class="form-control"
              type="number"
              min="0"
              placeholder="Cost"
            >

            <input
              id="price-margin"
              class="form-control"
              type="number"
              min="0"
              max="99.99"
              placeholder="Desired Margin %"
            >

            <button
              class="btn btn-primary calculate-price"
              type="button"
            >
              Calculate
            </button>

          </div>


          <div
            id="price-result"
            class="tool-result"
          >

            <div class="result-label">
              Selling Price
            </div>

            <div class="result-value">
              —
            </div>

          </div>

        </div>


        <!-- PROFIT -->

        <div class="tool-card">

          <div class="tool-icon">
            📈
          </div>

          <div class="tool-title">
            Profit Calculator
          </div>

          <div class="tool-description">
            Revenue နဲ့ Total Cost ကနေ Profit တွက်ပါ
          </div>


          <div class="tool-form">

            <input
              id="profit-revenue"
              class="form-control"
              type="number"
              min="0"
              placeholder="Revenue"
            >

            <input
              id="profit-cost"
              class="form-control"
              type="number"
              min="0"
              placeholder="Total Cost"
            >

            <button
              class="btn btn-primary calculate-profit"
              type="button"
            >
              Calculate
            </button>

          </div>


          <div
            id="profit-result"
            class="tool-result"
          >

            <div class="result-label">
              Profit
            </div>

            <div class="result-value">
              —
            </div>

          </div>

        </div>


        <!-- MARGIN -->

        <div class="tool-card">

          <div class="tool-icon">
            📊
          </div>

          <div class="tool-title">
            Margin Calculator
          </div>

          <div class="tool-description">
            Revenue နဲ့ Cost ကနေ Gross Margin % တွက်ပါ
          </div>


          <div class="tool-form">

            <input
              id="margin-sales"
              class="form-control"
              type="number"
              min="0"
              placeholder="Sales"
            >

            <input
              id="margin-cost"
              class="form-control"
              type="number"
              min="0"
              placeholder="Cost"
            >

            <button
              class="btn btn-primary calculate-margin"
              type="button"
            >
              Calculate
            </button>

          </div>


          <div
            id="margin-result"
            class="tool-result"
          >

            <div class="result-label">
              Margin
            </div>

            <div class="result-value">
              —
            </div>

          </div>

        </div>


        <!-- BREAK EVEN -->

        <div class="tool-card">

          <div class="tool-icon">
            ⚖️
          </div>

          <div class="tool-title">
            Break-even Calculator
          </div>

          <div class="tool-description">
            Fixed Cost နဲ့ Contribution Margin အပေါ်အခြေခံပြီး Break-even Sales တွက်ပါ
          </div>


          <div class="tool-form">

            <input
              id="be-fixed"
              class="form-control"
              type="number"
              min="0"
              placeholder="Fixed Cost"
            >

            <input
              id="be-price"
              class="form-control"
              type="number"
              min="0"
              placeholder="Selling Price"
            >

            <input
              id="be-variable"
              class="form-control"
              type="number"
              min="0"
              placeholder="Variable Cost"
            >

            <button
              class="btn btn-primary calculate-breakeven"
              type="button"
            >
              Calculate
            </button>

          </div>


          <div
            id="be-result"
            class="tool-result"
          >

            <div class="result-label">
              Break-even Units
            </div>

            <div class="result-value">
              —
            </div>

          </div>

        </div>


        <!-- TARGET -->

        <div class="tool-card">

          <div class="tool-icon">
            🎯
          </div>

          <div class="tool-title">
            Sales Target Calculator
          </div>

          <div class="tool-description">
            Monthly Target ကို Daily Target အဖြစ် ခွဲပါ
          </div>


          <div class="tool-form">

            <input
              id="target-monthly"
              class="form-control"
              type="number"
              min="0"
              placeholder="Monthly Target"
            >

            <input
              id="target-days"
              class="form-control"
              type="number"
              min="1"
              placeholder="Working Days"
            >

            <button
              class="btn btn-primary calculate-target"
              type="button"
            >
              Calculate
            </button>

          </div>


          <div
            id="target-result"
            class="tool-result"
          >

            <div class="result-label">
              Daily Target
            </div>

            <div class="result-value">
              —
            </div>

          </div>

        </div>


        <!-- GROWTH -->

        <div class="tool-card">

          <div class="tool-icon">
            🚀
          </div>

          <div class="tool-title">
            Growth Calculator
          </div>

          <div class="tool-description">
            Previous Sales နဲ့ Current Sales Growth % တွက်ပါ
          </div>


          <div class="tool-form">

            <input
              id="growth-previous"
              class="form-control"
              type="number"
              min="0"
              placeholder="Previous Period"
            >

            <input
              id="growth-current"
              class="form-control"
              type="number"
              min="0"
              placeholder="Current Period"
            >

            <button
              class="btn btn-primary calculate-growth"
              type="button"
            >
              Calculate
            </button>

          </div>


          <div
            id="growth-result"
            class="tool-result"
          >

            <div class="result-label">
              Growth
            </div>

            <div class="result-value">
              —
            </div>

          </div>

        </div>

      </div>

    `;

  }


  /* =======================================================
     REPORTS
     ======================================================= */

  function renderReports() {

    const app = $("#app");

    const completed =
      getCompleted();

    const progress =
      getProgress();

    const premium =
      isPremium();

    const kpi =
      getKPIData();

    const achievement =
      calculateAchievement(
        kpi.target,
        kpi.actual
      );

    app.innerHTML = `

      <div class="content-header">

        <div>

          <h1>
            Business Reports
          </h1>

          <p>
            Learning + Business Performance Summary
          </p>

        </div>

        <div class="header-actions">

          <button
            class="btn btn-secondary"
            type="button"
            id="print-report"
          >
            🖨️ Print
          </button>

        </div>

      </div>


      <div class="grid-4">

        <div class="report-card">

          <div class="report-title">
            Learning Progress
          </div>

          <div class="report-value">
            ${progress}%
          </div>

          <div class="report-note">
            ${completed.length} of ${lessons.length} lessons
          </div>

        </div>


        <div class="report-card">

          <div class="report-title">
            Sales Achievement
          </div>

          <div class="report-value">
            ${achievement.toFixed(1)}%
          </div>

          <div class="report-note">
            Target vs Actual
          </div>

        </div>


        <div class="report-card">

          <div class="report-title">
            Sales Gap
          </div>

          <div class="report-value">
            ${formatNumber(
              Math.abs(kpi.target - kpi.actual)
            )} L
          </div>

          <div class="report-note">
            Current sales gap
          </div>

        </div>


        <div class="report-card">

          <div class="report-title">
            Membership
          </div>

          <div class="report-value">
            ${premium ? "PRO" : "FREE"}
          </div>

          <div class="report-note">
            ${
              premium
                ? getPremiumRemainingDays() + " days remaining"
                : "Lesson 1 available"
            }
          </div>

        </div>

      </div>


      <div class="section-title-row">

        <div>
          <div class="section-title">
            Category Performance
          </div>
        </div>

      </div>


      <div class="table-wrap">

        <table class="data-table">

          <thead>

            <tr>

              <th>Category</th>
              <th>Lessons</th>
              <th>Completed</th>
              <th>Progress</th>

            </tr>

          </thead>

          <tbody>

            ${
              courseData.map(function (category) {

                const categoryLessons =
                  getCategoryLessons(
                    category.name
                  );

                const categoryCompleted =
                  categoryLessons.filter(function (lesson) {

                    return isCompleted(
                      lesson.id
                    );

                  }).length;

                return `
                  <tr>

                    <td class="number">
                      ${category.icon}
                      ${escapeHtml(category.name)}
                    </td>

                    <td>
                      ${categoryLessons.length}
                    </td>

                    <td>
                      ${categoryCompleted}
                    </td>

                    <td>
                      ${getCategoryProgress(category.name)}%
                    </td>

                  </tr>
                `;

              }).join("")
            }

          </tbody>

        </table>

      </div>

    `;

  }


  /* =======================================================
     AI COACH
     ======================================================= */

  function renderAICoach() {

    const app = $("#app");

    app.innerHTML = `

      <div class="content-header">

        <div>

          <h1>
            AI Business Coach
          </h1>

          <p>
            Business, Sales, Marketing, Team နှင့် Management ပြဿနာများအတွက်
            Practical AI Support
          </p>

        </div>

      </div>


      <div class="ai-layout">

        <div class="ai-chat">

          <div class="ai-chat-header">

            <div class="ai-avatar">
              🤖
            </div>

            <div>

              <div class="ai-header-title">
                Aung Business AI Coach
              </div>

              <div class="ai-header-status">
                Practical • Actionable • KPI-focused
              </div>

            </div>

          </div>


          <div
            id="ai-messages"
            class="ai-messages"
          >

            <div class="ai-message bot">

              <div class="ai-message-label">
                AI BUSINESS COACH
              </div>

              မင်္ဂလာပါ ${escapeHtml(getUser().name)}
              <br><br>
              Business Problem, Sales Problem, Marketing,
              Team Management, KPI သို့မဟုတ် Business Plan
              အကြောင်း မေးနိုင်ပါတယ်
              <br><br>
              ပြဿနာ → Root Cause → Action → KPI
              ဆိုတဲ့ပုံစံနဲ့ အဖြေထုတ်ပေးပါမယ်

            </div>

          </div>


          <div class="ai-input-area">

            <div class="ai-input-row">

              <textarea
                id="ai-input"
                class="ai-input"
                rows="2"
                placeholder="ဥပမာ - Sales target မပြည့်တာကို ဘယ်လို recovery လုပ်ရမလဲ"
              ></textarea>

              <button
                id="ai-send"
                class="btn btn-primary"
                type="button"
              >
                Send
              </button>

            </div>


            <div class="ai-quick-prompts">

              <button
                class="quick-prompt"
                data-ai-prompt="Sales target မပြည့်တာကို recovery လုပ်ဖို့ practical action plan ပေးပါ"
                type="button"
              >
                Sales Target
              </button>

              <button
                class="quick-prompt"
                data-ai-prompt="Sales team performance တိုးတက်အောင် Manager အနေနဲ့ ဘာလုပ်သင့်လဲ"
                type="button"
              >
                Team Performance
              </button>

              <button
                class="quick-prompt"
                data-ai-prompt="Distributor sales ကျနေတဲ့အခါ root cause ရှာပြီး action plan ချနည်းပြောပါ"
                type="button"
              >
                Distributor
              </button>

              <button
                class="quick-prompt"
                data-ai-prompt="Business growth တိုးတက်အောင် လက်တွေ့အသုံးချနိုင်တဲ့ strategy ၅ ခု ပေးပါ"
                type="button"
              >
                Business Growth
              </button>

            </div>

          </div>

        </div>


        <div class="ai-sidebar">

          <div class="ai-side-card">

            <div class="ai-side-title">
              Quick Business Problems
            </div>

            <div class="ai-side-list">

              <button
                class="ai-side-button"
                data-ai-prompt="Sales target မပြည့်ပါ"
                type="button"
              >
                🎯 Sales Target Problem
              </button>

              <button
                class="ai-side-button"
                data-ai-prompt="Customer မဝယ်တော့ပါ"
                type="button"
              >
                👥 Customer Problem
              </button>

              <button
                class="ai-side-button"
                data-ai-prompt="Team performance ကျနေပါတယ်"
                type="button"
              >
                👔 Team Problem
              </button>

              <button
                class="ai-side-button"
                data-ai-prompt="Profit margin ကျနေပါတယ်"
                type="button"
              >
                💰 Profit Problem
              </button>

            </div>

          </div>


          <div class="ai-side-card">

            <div class="ai-side-title">
              Recommended Flow
            </div>

            <div class="ai-side-list">

              <div class="check-item">
                1. Problem Define
              </div>

              <div class="check-item">
                2. Root Cause
              </div>

              <div class="check-item">
                3. Action Plan
              </div>

              <div class="check-item">
                4. KPI
              </div>

              <div class="check-item">
                5. Review
              </div>

            </div>

          </div>

        </div>

      </div>

    `;

  }


  async function askAI(prompt) {

    const cleanPrompt =
      String(prompt || "").trim();

    if (!cleanPrompt) {
      return;
    }

    const messages =
      $("#ai-messages");

    if (!messages) {
      return;
    }

    addAIMessage(
      cleanPrompt,
      "user"
    );

    const loadingId =
      "ai-loading-" +
      Date.now();

    addAIMessage(
      "စဉ်းစားနေပါတယ်...",
      "bot",
      loadingId
    );

    const systemContext =
      `
You are Aung Business Academy AI Business Coach.

User role:
${getUser().role}

Give practical business advice.

Focus on:
1. Problem definition
2. Root cause
3. Practical actions
4. KPI
5. Timeline
6. Manager application

Use concise Burmese when possible.
Avoid generic motivational content.
Use numbers, steps and measurable actions.

User question:
${cleanPrompt}
`;

    try {

      const response =
        await fetch(
          AI_API_URL,
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body: JSON.stringify({
              prompt:
                systemContext,

              message:
                systemContext
            })
          }
        );

      if (!response.ok) {
        throw new Error(
          "AI request failed"
        );
      }

      const data =
        await response.json();

      const answer =
        data.reply ||
        data.response ||
        data.message ||
        data.answer ||
        data.result ||
        "";

      if (!answer) {
        throw new Error(
          "Empty AI response"
        );
      }

      removeAIMessage(
        loadingId
      );

      addAIMessage(
        answer,
        "bot"
      );

    } catch (error) {

      console.warn(
        "AI API unavailable:",
        error
      );

      removeAIMessage(
        loadingId
      );

      addAIMessage(
        getFallbackAIAnswer(
          cleanPrompt
        ),
        "bot"
      );

    }

  }


  function addAIMessage(
    text,
    type,
    id
  ) {

    const messages =
      $("#ai-messages");

    if (!messages) {
      return;
    }

    const div =
      document.createElement("div");

    div.className =
      "ai-message " +
      type;

    if (id) {
      div.id = id;
    }

    const label =
      type === "user"
        ? "YOU"
        : "AI BUSINESS COACH";

    div.innerHTML = `
      <div class="ai-message-label">
        ${label}
      </div>

      ${escapeHtml(text).replace(/\n/g, "<br>")}
    `;

    messages.appendChild(div);

    messages.scrollTop =
      messages.scrollHeight;

  }


  function removeAIMessage(id) {

    const element =
      document.getElementById(id);

    if (element) {
      element.remove();
    }

  }


  function getFallbackAIAnswer(question) {

    const lower =
      question.toLowerCase();

    if (
      lower.includes("sales") ||
      lower.includes("target")
    ) {

      return (
        "Sales Target Problem အတွက် ဒီ 5 ချက်နဲ့ စတင်ပါ\n\n" +
        "1. Target vs Actual Gap ကို အရင်တွက်ပါ\n" +
        "2. Territory / Customer / Product / Salesperson အလိုက် Gap ခွဲပါ\n" +
        "3. Activity KPI နဲ့ Result KPI ကို နှိုင်းယှဉ်ပါ\n" +
        "4. Recovery Target ကို Daily Level အထိ ခွဲပါ\n" +
        "5. နေ့စဉ် Evening Review နဲ့ Action ပြန်ပြင်ပါ\n\n" +
        "အဓိက KPI: Achievement %, Gap, Productivity, Pipeline Coverage"
      );

    }

    if (
      lower.includes("team") ||
      lower.includes("staff")
    ) {

      return (
        "Team Performance အတွက်\n\n" +
        "1. လူတစ်ဦးချင်း Target vs Actual စစ်ပါ\n" +
        "2. Skill / Will / Resource ပြဿနာ ခွဲပါ\n" +
        "3. High performer နဲ့ Low performer ကို Data နဲ့ နှိုင်းပါ\n" +
        "4. Individual Coaching Plan ချပါ\n" +
        "5. 7 ရက်အတွင်း KPI ပြန်တိုင်းပါ\n\n" +
        "Manager အနေနဲ့ Pressure ထက် Coaching + Accountability ကို အဓိကထားပါ"
      );

    }

    if (
      lower.includes("profit") ||
      lower.includes("margin")
    ) {

      return (
        "Profit / Margin ကျနေတဲ့အခါ\n\n" +
        "1. Revenue Trend စစ်ပါ\n" +
        "2. Gross Margin ပြောင်းလဲမှု စစ်ပါ\n" +
        "3. Product Mix ပြောင်းလဲမှု စစ်ပါ\n" +
        "4. Discount / Trade Spend စစ်ပါ\n" +
        "5. Fixed Cost / Variable Cost Driver ခွဲပါ\n\n" +
        "KPI: Gross Margin %, Gross Profit, OPEX Ratio, Net Profit"
      );

    }

    return (
      "Business Problem ကို ဖြေရှင်းဖို့ ဒီ Framework ကို အသုံးပြုပါ\n\n" +
      "1. Problem ကို Number နဲ့ Define လုပ်ပါ\n" +
      "2. Root Cause 2–3 ခုရှာပါ\n" +
      "3. အကျိုးသက်ရောက်မှုအမြင့်ဆုံး Action တစ်ခုရွေးပါ\n" +
      "4. Owner + Deadline သတ်မှတ်ပါ\n" +
      "5. KPI တစ်ခုထားပါ\n" +
      "6. 7 ရက်အတွင်း Result ပြန် Review လုပ်ပါ"
    );

  }


  /* =======================================================
     AI TOOLS
     ======================================================= */

  function renderAITools() {

    const app = $("#app");

    app.innerHTML = `

      <div class="content-header">

        <div>

          <h1>
            AI Business Tools
          </h1>

          <p>
            Structured prompts for practical business work
          </p>

        </div>

      </div>


      <div class="tool-grid">

        <div class="tool-card">

          <div class="tool-icon">
            🎯
          </div>

          <div class="tool-title">
            Sales Recovery Plan
          </div>

          <div class="tool-description">
            Sales Gap အတွက် Recovery Plan ထုတ်ပါ
          </div>

          <button
            class="btn btn-primary"
            style="margin-top:14px"
            data-ai-prompt="ကျွန်တော့် Sales Target မပြည့်ပါ။ Target vs Actual Gap ကိုခွဲပြီး 7 ရက် Sales Recovery Plan ကို Daily Action, Owner နဲ့ KPI ပါအောင်ရေးပေးပါ"
            data-section="ai-coach"
            type="button"
          >
            Generate with AI
          </button>

        </div>


        <div class="tool-card">

          <div class="tool-icon">
            📣
          </div>

          <div class="tool-title">
            Marketing Idea
          </div>

          <div class="tool-description">
            Product / Customer အလိုက် Marketing Ideas ထုတ်ပါ
          </div>

          <button
            class="btn btn-primary"
            style="margin-top:14px"
            data-ai-prompt="Myanmar SME Business အတွက် Low Budget Marketing Campaign 5 ခုကို Objective, Target Customer, Offer, Channel, KPI ပါအောင်ရေးပေးပါ"
            data-section="ai-coach"
            type="button"
          >
            Generate with AI
          </button>

        </div>


        <div class="tool-card">

          <div class="tool-icon">
            👔
          </div>

          <div class="tool-title">
            Team Coaching
          </div>

          <div class="tool-description">
            Low Performance Team Member အတွက် Coaching Plan
          </div>

          <button
            class="btn btn-primary"
            style="margin-top:14px"
            data-ai-prompt="Salesperson တစ်ဦး Performance ကျနေပါတယ်။ Manager အနေနဲ့ Coaching Conversation, Root Cause Questions, Action Plan နဲ့ KPI Follow-up Plan ရေးပေးပါ"
            data-section="ai-coach"
            type="button"
          >
            Generate with AI
          </button>

        </div>


        <div class="tool-card">

          <div class="tool-icon">
            🧠
          </div>

          <div class="tool-title">
            Business Problem Solver
          </div>

          <div class="tool-description">
            Business Problem ကို Root Cause Framework နဲ့ ခွဲပါ
          </div>

          <button
            class="btn btn-primary"
            style="margin-top:14px"
            data-ai-prompt="Business Problem တစ်ခုကို Problem Statement, 5 Whys, Root Cause, Options, Recommendation မဟုတ်ဘဲ neutral decision analysis, Action Plan နဲ့ KPI အဖြစ်ခွဲပေးပါ"
            data-section="ai-coach"
            type="button"
          >
            Generate with AI
          </button>

        </div>


        <div class="tool-card">

          <div class="tool-icon">
            📑
          </div>

          <div class="tool-title">
            Business Plan
          </div>

          <div class="tool-description">
            Business Idea ကို Structured Business Plan အဖြစ် စီစဉ်ပါ
          </div>

          <button
            class="btn btn-primary"
            style="margin-top:14px"
            data-ai-prompt="Business Idea တစ်ခုအတွက် Customer Problem, Value Proposition, Target Market, Revenue Model, Cost Structure, Marketing, Sales, KPI နဲ့ 90 Day Action Plan ပါတဲ့ Business Plan Framework ရေးပေးပါ"
            data-section="ai-coach"
            type="button"
          >
            Generate with AI
          </button>

        </div>


        <div class="tool-card">

          <div class="tool-icon">
            📊
          </div>

          <div class="tool-title">
            KPI Design
          </div>

          <div class="tool-description">
            Business Function တစ်ခုအတွက် KPI Framework တည်ဆောက်ပါ
          </div>

          <button
            class="btn btn-primary"
            style="margin-top:14px"
            data-ai-prompt="Sales Manager အတွက် KPI Dashboard တစ်ခုတည်ဆောက်ပေးပါ။ Target, Actual, Achievement %, Gap, Productivity, Customer Coverage, Orders, Forecast Accuracy နဲ့ Action Trigger ပါအောင်ရေးပေးပါ"
            data-section="ai-coach"
            type="button"
          >
            Generate with AI
          </button>

        </div>

      </div>

    `;

  }


  /* =======================================================
     PREMIUM PAGE
     ======================================================= */

  function renderPremium() {

    const app = $("#app");

    const premium =
      getPremium();

    app.innerHTML = `

      <div class="premium-hero">

        <span class="premium-hero-badge">
          💎 PREMIUM MEMBERSHIP
        </span>

        <h1>
          Upgrade Your Business Management Skills
        </h1>

        <p>
          Advanced Lessons, Business Tools, KPI System နှင့်
          AI Business Coach ကို အသုံးပြုနိုင်ရန် Premium Membership
        </p>

      </div>


      ${
        premium.active
          ? `
            <div class="locked-card" style="margin-bottom:18px">

              <div class="locked-icon">
                💎
              </div>

              <h3>
                Premium Active
              </h3>

              <p>
                ${getPremiumRemainingDays()} days remaining
              </p>

            </div>
          `
          : ""
      }


      <div class="premium-plans">

        ${PREMIUM_PLANS.map(function (plan) {

          return `
            <div
              class="
                premium-plan
                ${plan.featured ? "featured" : ""}
              "
            >

              ${
                plan.featured
                  ? `
                    <span class="plan-badge">
                      POPULAR
                    </span>
                  `
                  : ""
              }

              <div class="plan-name">
                ${plan.name}
              </div>

              <div class="plan-price">
                ${formatKs(plan.price)}
                <span>
                  / ${plan.duration}
                </span>
              </div>


              <div class="plan-features">

                <div class="plan-feature">
                  Lesson 2+ Premium Lessons
                </div>

                <div class="plan-feature">
                  Business Tools
                </div>

                <div class="plan-feature">
                  KPI & Analytics
                </div>

                <div class="plan-feature">
                  AI Business Coach
                </div>

                <div class="plan-feature">
                  Advanced Business Learning
                </div>

              </div>


              <button
                class="btn btn-primary plan-action premium-plan-select"
                data-plan-id="${plan.id}"
                type="button"
              >
                Choose ${plan.name}
              </button>

            </div>
          `;

        }).join("")}

      </div>


      <div class="card card-padding" style="margin-top:18px">

        <div class="card-title">
          Payment Methods
        </div>

        <div class="card-subtitle">
          Payment ပြီးပါက Admin မှ Premium Access ကို Verify & Activate ပြုလုပ်ပေးရန်လိုအပ်ပါတယ်
        </div>

        <div class="grid-2" style="margin-top:13px">

          <div class="focus-card">

            <div class="focus-icon">
              💳
            </div>

            <div class="focus-title">
              KPay
            </div>

            <div class="focus-description">
              Payment details ကို Admin မှ သတ်မှတ်ပေးပါမယ်
            </div>

          </div>


          <div class="focus-card">

            <div class="focus-icon">
              🏦
            </div>

            <div class="focus-title">
              CB Bank
            </div>

            <div class="focus-description">
              Payment details ကို Admin မှ သတ်မှတ်ပေးပါမယ်
            </div>

          </div>

        </div>

      </div>


      <div class="card card-padding" style="margin-top:18px">

        <div class="card-title">
          Membership Rule
        </div>

        <div class="card-subtitle">
          Free နဲ့ Premium Access စနစ်
        </div>

        <div
          class="lesson-checklist"
          style="margin-top:12px"
        >

          <div class="check-item">
            Lesson 1 — Free
          </div>

          <div class="check-item">
            Lesson 2 to ${lessons.length} — Premium
          </div>

          <div class="check-item">
            Premium = Advanced Lessons + Tools + AI
          </div>

          <div class="check-item">
            7-Day Trial မပါ
          </div>

        </div>

      </div>

    `;

  }


  function openPremiumModal(lesson) {

    const message =
      $("#premium-modal-message");

    if (message) {

      message.textContent =
        lesson
          ? "Lesson " +
            lesson.number +
            " — " +
            lesson.title +
            " သည် Premium Lesson ဖြစ်ပါတယ်"
          : "Advanced Business Academy Features ကို အသုံးပြုရန် Premium Membership လိုအပ်ပါတယ်";

    }

    const container =
      $("#premium-plans-container");

    if (!container) {
      return;
    }

    container.innerHTML =
      PREMIUM_PLANS.map(function (plan) {

        return `
          <div class="modal-plan">

            <div class="modal-plan-name">
              ${plan.name}
            </div>

            <div class="modal-plan-price">
              ${formatKs(plan.price)}
            </div>

            <button
              class="btn btn-primary modal-plan-button premium-plan-select"
              data-plan-id="${plan.id}"
              type="button"
            >
              Select
            </button>

          </div>
        `;

      }).join("");

    openModal(
      "premium-modal"
    );

  }


  /* =======================================================
     SETTINGS
     ======================================================= */

  function renderSettings() {

    const app = $("#app");

    const user =
      getUser();

    const premium =
      getPremium();

    app.innerHTML = `

      <div class="content-header">

        <div>

          <h1>
            Settings
          </h1>

          <p>
            Profile and application preferences
          </p>

        </div>

      </div>


      <div class="settings-grid">


        <div class="settings-card">

          <h3>
            👤 Profile
          </h3>

          <div class="settings-card-description">
            Dashboard မှာ ပြသမယ့် Profile Information
          </div>


          <div class="settings-form">

            <div class="form-group">

              <label class="form-label">
                Display Name
              </label>

              <input
                id="settings-name"
                class="form-control"
                type="text"
                value="${escapeHtml(user.name)}"
              >

            </div>


            <div class="form-group">

              <label class="form-label">
                Role
              </label>

              <input
                id="settings-role"
                class="form-control"
                type="text"
                value="${escapeHtml(user.role)}"
              >

            </div>

          </div>


          <div class="settings-actions">

            <button
              class="btn btn-primary save-settings"
              type="button"
            >
              💾 Save Profile
            </button>

          </div>

        </div>


        <div class="settings-card">

          <h3>
            💎 Membership
          </h3>

          <div class="settings-card-description">
            Current Premium Access
          </div>


          <div class="settings-form">

            <div class="form-group">

              <label class="form-label">
                Status
              </label>

              <input
                class="form-control"
                type="text"
                readonly
                value="${
                  premium.active
                    ? "Premium Active"
                    : "Basic Member"
                }"
              >

            </div>


            <div class="form-group">

              <label class="form-label">
                Remaining
              </label>

              <input
                class="form-control"
                type="text"
                readonly
                value="${
                  premium.active
                    ? getPremiumRemainingDays() + " days"
                    : "—"
                }"
              >

            </div>

          </div>


          <div class="settings-actions">

            <button
              class="btn btn-purple"
              data-section="premium"
              type="button"
            >
              💎 Membership
            </button>

          </div>

        </div>


        <div class="settings-card">

          <h3>
            📚 Learning Data
          </h3>

          <div class="settings-card-description">
            Learning Progress ကို စီမံပါ
          </div>


          <div class="settings-actions">

            <button
              class="btn btn-danger reset-progress"
              type="button"
            >
              Reset Learning Progress
            </button>

          </div>

        </div>


        <div class="settings-card">

          <h3>
            ⚙️ Application
          </h3>

          <div class="settings-card-description">
            Application information
          </div>


          <div class="settings-form">

            <div class="form-group">

              <label class="form-label">
                Version
              </label>

              <input
                class="form-control"
                readonly
                value="${APP_VERSION}"
              >

            </div>


            <div class="form-group">

              <label class="form-label">
                Lesson Database
              </label>

              <input
                class="form-control"
                readonly
                value="${lessons.length} Lessons / ${courseData.length} Categories"
              >

            </div>

          </div>


          <div class="settings-actions">

            <button
              class="btn btn-secondary reset-app"
              type="button"
            >
              Reset App Data
            </button>

          </div>

        </div>

      </div>

    `;

  }


  /* =======================================================
     CONFIRM
     ======================================================= */

  function showConfirm(
    title,
    message,
    callback
  ) {

    const titleEl =
      $("#confirm-title");

    const messageEl =
      $("#confirm-message");

    if (titleEl) {
      titleEl.textContent =
        title;
    }

    if (messageEl) {
      messageEl.textContent =
        message;
    }

    confirmAction =
      callback;

    openModal(
      "confirm-modal"
    );

  }


  /* =======================================================
     CURRENT SECTION RENDER
     ======================================================= */

  function renderCurrentSection() {

    updatePageMeta(
      currentSection
    );

    updateNavigation(
      currentSection
    );

    updatePremiumUI();

    if (currentSection === "dashboard") {
      renderDashboard();
      return;
    }

    if (currentSection === "academy") {
      renderAcademy();
      return;
    }

    if (currentSection === "lessons") {
      renderLessons();
      return;
    }

    if (currentSection === "progress") {
      renderProgress();
      return;
    }

    if (currentSection === "sales") {
      renderSales();
      return;
    }

    if (currentSection === "kpi") {
      renderKPI();
      return;
    }

    if (currentSection === "tools") {
      renderTools();
      return;
    }

    if (currentSection === "reports") {
      renderReports();
      return;
    }

    if (currentSection === "ai-coach") {
      renderAICoach();
      return;
    }

    if (currentSection === "ai-tools") {
      renderAITools();
      return;
    }

    if (currentSection === "premium") {
      renderPremium();
      return;
    }

    if (currentSection === "settings") {
      renderSettings();
      return;
    }

    renderDashboard();

  }


  /* =======================================================
     SIDEBAR
     ======================================================= */

  function openSidebar() {

    const sidebar =
      $("#sidebar");

    const overlay =
      $("#mobile-overlay");

    if (sidebar) {
      sidebar.classList.add("open");
    }

    if (overlay) {
      overlay.classList.add("show");
    }

  }


  function closeSidebar() {

    const sidebar =
      $("#sidebar");

    const overlay =
      $("#mobile-overlay");

    if (sidebar) {
      sidebar.classList.remove("open");
    }

    if (overlay) {
      overlay.classList.remove("show");
    }

  }


  /* =======================================================
     EVENT DELEGATION
     ======================================================= */

  document.addEventListener(
    "click",
    function (event) {

      const target =
        event.target.closest("button, .category-card");

      if (!target) {
        return;
      }


      /* NAVIGATION */

      const section =
        target.dataset.section;

      if (section) {

        if (
          target.dataset.aiPrompt
        ) {

          goToSection(
            "ai-coach"
          );

          setTimeout(
            function () {

              const input =
                $("#ai-input");

              if (input) {

                input.value =
                  target.dataset.aiPrompt;

                input.focus();

              }

            },
            80
          );

          return;

        }

        goToSection(
          section
        );

        return;

      }


      /* CATEGORY */

      if (
        target.classList.contains(
          "category-card"
        )
      ) {

        const category =
          target.dataset.category;

        if (category) {

          currentCategory =
            category;

          searchTerm = "";

          goToSection(
            "lessons"
          );

        }

        return;

      }


      /* LESSON */

      if (
        target.classList.contains(
          "open-lesson"
        )
      ) {

        const id =
          target.dataset.lessonId;

        renderLesson(id);

        return;

      }


      /* BACK */

      if (
        target.classList.contains(
          "back-lessons"
        )
      ) {

        goToSection(
          "lessons"
        );

        return;

      }


      /* COMPLETE */

      if (
        target.classList.contains(
          "toggle-complete"
        )
      ) {

        const id =
          target.dataset.lessonId;

        if (id) {

          toggleCompleted(id);

          renderLesson(id);

          showToast(
            isCompleted(id)
              ? "Lesson completed"
              : "Lesson marked incomplete",
            "✓"
          );

        }

        return;

      }


      /* RESET PROGRESS */

      if (
        target.classList.contains(
          "reset-progress"
        )
      ) {

        showConfirm(
          "Reset Learning Progress",
          "Completed lesson data အားလုံးကို reset လုပ်မလား",
          function () {

            resetProgress();

          }
        );

        return;

      }


      /* RESET APP */

      if (
        target.classList.contains(
          "reset-app"
        )
      ) {

        showConfirm(
          "Reset App Data",
          "Profile, KPI, Learning Progress နှင့် App Data ကို reset လုပ်မလား",
          function () {

            localStorage.removeItem(
              STORAGE.completed
            );

            localStorage.removeItem(
              STORAGE.user
            );

            localStorage.removeItem(
              STORAGE.kpi
            );

            localStorage.removeItem(
              STORAGE.settings
            );

            currentCategory =
              "All";

            searchTerm =
              "";

            showToast(
              "App data reset",
              "↻"
            );

            setTimeout(
              function () {

                location.reload();

              },
              500
            );

          }
        );

        return;

      }


      /* PREMIUM */

      if (
        target.classList.contains(
          "premium-plan-select"
        )
      ) {

        const planId =
          target.dataset.planId;

        const plan =
          PREMIUM_PLANS.find(
            function (item) {
              return item.id === planId;
            }
          );

        if (plan) {

          closeModal(
            "premium-modal"
          );

          showToast(
            plan.name +
            " selected • Payment verification required",
            "💎"
          );

          goToSection(
            "premium"
          );

        }

        return;

      }


      /* SALES SAVE */

      if (
        target.classList.contains(
          "save-sales-kpi"
        )
      ) {

        saveSalesKPI();

        return;

      }


      /* TOOLS */

      if (
        target.classList.contains(
          "calculate-price"
        )
      ) {

        calculatePrice();

        return;

      }

      if (
        target.classList.contains(
          "calculate-profit"
        )
      ) {

        calculateProfit();

        return;

      }

      if (
        target.classList.contains(
          "calculate-margin"
        )
      ) {

        calculateMargin();

        return;

      }

      if (
        target.classList.contains(
          "calculate-breakeven"
        )
      ) {

        calculateBreakEven();

        return;

      }

      if (
        target.classList.contains(
          "calculate-target"
        )
      ) {

        calculateTarget();

        return;

      }

      if (
        target.classList.contains(
          "calculate-growth"
        )
      ) {

        calculateGrowth();

        return;

      }


      /* SETTINGS */

      if (
        target.classList.contains(
          "save-settings"
        )
      ) {

        saveSettings();

        return;

      }


      /* AI */

      if (
        target.classList.contains(
          "quick-prompt"
        ) ||
        target.classList.contains(
          "ai-side-button"
        )
      ) {

        const prompt =
          target.dataset.aiPrompt;

        const input =
          $("#ai-input");

        if (input && prompt) {

          input.value =
            prompt;

          input.focus();

        }

        return;

      }


      /* PRINT */

      if (
        target.id === "print-report"
      ) {

        window.print();

        return;

      }


      /* CONFIRM */

      if (
        target.id === "confirm-cancel"
      ) {

        confirmAction =
          null;

        closeModal(
          "confirm-modal"
        );

        return;

      }


      if (
        target.id === "confirm-ok"
      ) {

        const callback =
          confirmAction;

        confirmAction =
          null;

        closeModal(
          "confirm-modal"
        );

        if (
          typeof callback ===
          "function"
        ) {

          callback();

        }

        return;

      }


      /* MODAL CLOSE */

      if (
        target.id ===
          "premium-modal-close" ||
        target.id ===
          "lesson-modal-close"
      ) {

        closeAllModals();

        return;

      }

    }
  );


  /* =======================================================
     MENU
     ======================================================= */

  document.addEventListener(
    "click",
    function (event) {

      if (
        event.target.closest(
          "#menu-toggle"
        )
      ) {

        openSidebar();

      }

      if (
        event.target.closest(
          "#sidebar-close"
        )
      ) {

        closeSidebar();

      }

      if (
        event.target.id ===
        "mobile-overlay"
      ) {

        closeSidebar();

      }

    }
  );


  /* =======================================================
     AI SEND
     ======================================================= */

  document.addEventListener(
    "click",
    function (event) {

      if (
        event.target.id ===
        "ai-send"
      ) {

        const input =
          $("#ai-input");

        if (input) {

          askAI(
            input.value
          );

          input.value = "";

        }

      }

    }
  );


  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.target.id ===
        "ai-input" &&
        event.key === "Enter" &&
        !event.shiftKey
      ) {

        event.preventDefault();

        const input =
          event.target;

        askAI(
          input.value
        );

        input.value = "";

      }

      if (
        event.key === "Escape"
      ) {

        closeAllModals();

        closeSidebar();

      }

    }
  );


  /* =======================================================
     SALES KPI SAVE
     ======================================================= */

  function saveSalesKPI() {

    const target =
      Number(
        $("#sales-target")?.value
      ) || 0;

    const actual =
      Number(
        $("#sales-actual")?.value
      ) || 0;

    const workingDays =
      Number(
        $("#sales-days")?.value
      ) || 1;

    const team =
      Number(
        $("#sales-team")?.value
      ) || 1;

    const customers =
      Number(
        $("#sales-customers")?.value
      ) || 0;

    const orders =
      Number(
        $("#sales-orders")?.value
      ) || 0;

    saveKPIData({
      target,
      actual,
      workingDays,
      team,
      customers,
      orders
    });

    renderSales();

    showToast(
      "Sales KPI saved",
      "✓"
    );

  }


  /* =======================================================
     SETTINGS SAVE
     ======================================================= */

  function saveSettings() {

    const name =
      $("#settings-name")?.value.trim();

    const role =
      $("#settings-role")?.value.trim();

    saveUser(
      name ||
        DEFAULT_USER.name,
      role ||
        DEFAULT_USER.role
    );

    updateProfileUI();

    showToast(
      "Profile saved",
      "✓"
    );

    renderSettings();

  }


  function updateProfileUI() {

    const user =
      getUser();

    const sidebarName =
      $("#sidebar-user-name");

    const sidebarRole =
      $("#sidebar-user-role");

    const topName =
      $("#topbar-user-name");

    const topRole =
      $("#topbar-user-role");

    if (sidebarName) {
      sidebarName.textContent =
        user.name;
    }

    if (sidebarRole) {
      sidebarRole.textContent =
        user.role;
    }

    if (topName) {
      topName.textContent =
        user.name;
    }

    if (topRole) {
      topRole.textContent =
        user.role;
    }

  }


  /* =======================================================
     CALCULATORS
     ======================================================= */

  function setToolResult(
    id,
    value
  ) {

    const result =
      document.getElementById(id);

    if (!result) {
      return;
    }

    const valueEl =
      result.querySelector(
        ".result-value"
      );

    if (valueEl) {
      valueEl.textContent =
        value;
    }

  }


  function calculatePrice() {

    const cost =
      Number(
        $("#price-cost")?.value
      ) || 0;

    const margin =
      Number(
        $("#price-margin")?.value
      ) || 0;

    if (
      cost <= 0 ||
      margin < 0 ||
      margin >= 100
    ) {

      setToolResult(
        "price-result",
        "Enter valid values"
      );

      return;

    }

    const price =
      cost /
      (1 - margin / 100);

    setToolResult(
      "price-result",
      formatNumber(price)
    );

  }


  function calculateProfit() {

    const revenue =
      Number(
        $("#profit-revenue")?.value
      ) || 0;

    const cost =
      Number(
        $("#profit-cost")?.value
      ) || 0;

    const profit =
      revenue -
      cost;

    setToolResult(
      "profit-result",
      formatNumber(profit)
    );

  }


  function calculateMargin() {

    const sales =
      Number(
        $("#margin-sales")?.value
      ) || 0;

    const cost =
      Number(
        $("#margin-cost")?.value
      ) || 0;

    if (sales <= 0) {

      setToolResult(
        "margin-result",
        "Enter valid sales"
      );

      return;

    }

    const margin =
      (
        (sales - cost) /
        sales
      ) * 100;

    setToolResult(
      "margin-result",
      margin.toFixed(2) + "%"
    );

  }


  function calculateBreakEven() {

    const fixed =
      Number(
        $("#be-fixed")?.value
      ) || 0;

    const price =
      Number(
        $("#be-price")?.value
      ) || 0;

    const variable =
      Number(
        $("#be-variable")?.value
      ) || 0;

    const contribution =
      price -
      variable;

    if (
      fixed <= 0 ||
      contribution <= 0
    ) {

      setToolResult(
        "be-result",
        "Invalid values"
      );

      return;

    }

    const units =
      fixed /
      contribution;

    setToolResult(
      "be-result",
      units.toFixed(2) +
      " units"
    );

  }


  function calculateTarget() {

    const monthly =
      Number(
        $("#target-monthly")?.value
      ) || 0;

    const days =
      Number(
        $("#target-days")?.value
      ) || 0;

    if (
      monthly <= 0 ||
      days <= 0
    ) {

      setToolResult(
        "target-result",
        "Enter valid values"
      );

      return;

    }

    setToolResult(
      "target-result",
      (
        monthly /
        days
      ).toFixed(2)
    );

  }


  function calculateGrowth() {

    const previous =
      Number(
        $("#growth-previous")?.value
      ) || 0;

    const current =
      Number(
        $("#growth-current")?.value
      ) || 0;

    if (previous <= 0) {

      setToolResult(
        "growth-result",
        "Enter valid previous value"
      );

      return;

    }

    const growth =
      (
        (current - previous) /
        previous
      ) * 100;

    setToolResult(
      "growth-result",
      growth.toFixed(2) + "%"
    );

  }


  /* =======================================================
     INITIALIZATION
     ======================================================= */

  function init() {

    updateProfileUI();

    updatePremiumUI();

    updatePageMeta(
      "dashboard"
    );

    updateNavigation(
      "dashboard"
    );

    renderDashboard();

  }


  /* =======================================================
     PUBLIC API
     ======================================================= */

  window.AungBusinessAcademy = {

    version:
      APP_VERSION,

    lessons:
      lessons,

    courseData:
      courseData,

    getLesson:
      getLesson,

    getLessonContent:
      getLessonContent,

    goToSection:
      goToSection,

    openLesson:
      renderLesson,

    resetProgress:
      resetProgress,

    getCompleted:
      getCompleted,

    getProgress:
      getProgress,

    getCategoryProgress:
      getCategoryProgress,

    isPremium:
      isPremium,

    getPremium:
      getPremium,

    activatePremium:
      activatePremium,

    getPremiumRemainingDays:
      getPremiumRemainingDays

  };


  /* =======================================================
     START
     ======================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

})();
