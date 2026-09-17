"use strict";

/* =========================================================
   AUNG BUSINESS ACADEMY
   V15.1 PROFESSIONAL
   ========================================================= */

(function () {

  /* =======================================================
     CONFIG
     ======================================================= */

  const APP_VERSION = "V15.1 Professional";

  const API_BASE_URL =
    "https://aung-business-academy.onrender.com";

  const AI_API_URL =
    API_BASE_URL + "/api/ai";

  const STORAGE = {
    COMPLETED: "aba_completed_lessons",
    USER: "aung_business_academy_user",
    PREMIUM: "aung_business_academy_premium",
    KPI: "aung_business_academy_kpi",
    SETTINGS: "aung_business_academy_settings"
  };

  const PAYMENT_PLANS = [
    {
      id: "monthly",
      name: "1 Month",
      price: 25000,
      duration: "1 month",
      days: 30,
      featured: false
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
      id: "half-year",
      name: "6 Months",
      price: 100000,
      duration: "6 months",
      days: 180,
      featured: false
    }
  ];

  /*
   * Payment account details are intentionally not hard-coded
   * because account numbers must be supplied by the owner
   */
  const PAYMENT_METHODS = [
    {
      name: "KPay",
      detail: "Payment account details can be added by admin"
    },
    {
      name: "CB Bank",
      detail: "Payment account details can be added by admin"
    }
  ];

  /* =======================================================
     CATEGORY DATA
     ======================================================= */

  const CATEGORY_DEFINITIONS = [
    {
      name: "Business Fundamentals",
      icon: "🏢",
      topics: [
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
      icon: "♟",
      topics: [
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
      topics: [
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
      topics: [
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
      topics: [
        "Customer Segmentation",
        "Customer Profiling",
        "Customer Needs",
        "Customer Value",
        "Customer Journey",
        "Customer Experience",
        "Complaint Handling",
        "Customer Retention",
        "Repeat Purchase",
        "Customer Loyalty",
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
      topics: [
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
      icon: "⭐",
      topics: [
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
      topics: [
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
      topics: [
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
      topics: [
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
      icon: "🏬",
      topics: [
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
      icon: "💼",
      topics: [
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
      topics: [
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
      topics: [
        "HR Fundamentals",
        "Recruitment",
        "Job Description",
        "Onboarding",
        "Training Needs",
        "Employee Development",
        "Performance Appraisal",
        "Attendance Discipline",
        "Compensation Basics",
        "Employee Retention"
      ]
    },

    {
      name: "Negotiation",
      icon: "⚖️",
      topics: [
        "Negotiation Fundamentals",
        "Negotiation Preparation",
        "BATNA Basics",
        "Negotiation Objectives",
        "Negotiation Questioning",
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
      topics: [
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
      topics: [
        "KPI Fundamentals",
        "KPI Design",
        "Target vs Actual",
        "Achievement Percentage",
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
      topics: [
        "Problem Definition",
        "Root Cause Analysis",
        "5 Whys",
        "Fishbone Analysis",
        "Pareto Analysis",
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
      topics: [
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
      topics: [
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
     CREATE LESSONS
     ======================================================= */

  const courseData = CATEGORY_DEFINITIONS.map(function (category, categoryIndex) {

    return {
      name: category.name,
      icon: category.icon,
      lessons: category.topics.map(function (title, lessonIndex) {
        return {
          id: categoryIndex === 0
            ? lessonIndex + 1
            : CATEGORY_DEFINITIONS
                .slice(0, categoryIndex)
                .reduce(function (total, item) {
                  return total + item.topics.length;
                }, 0) + lessonIndex + 1,

          title: title,
          category: category.name,
          icon: category.icon,
          categoryIndex: categoryIndex,
          lessonIndex: lessonIndex
        };
      })
    };
  });

  const lessons = [];

  courseData.forEach(function (category) {
    category.lessons.forEach(function (lesson) {
      lessons.push(lesson);
    });
  });

  /* =======================================================
     STATE
     ======================================================= */

  let currentSection = "dashboard";
  let currentLessonId = null;
  let currentCategory = "All";
  let searchTerm = "";

  let aiMessages = [];

  /* =======================================================
     DOM
     ======================================================= */

  const app = document.getElementById("app");
  const sidebar = document.getElementById("sidebar");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const modalRoot = document.getElementById("modalRoot");
  const toastRoot = document.getElementById("toastRoot");

  const pageTitle = document.getElementById("pageTitle");
  const pageSubtitle = document.getElementById("pageSubtitle");

  /* =======================================================
     STORAGE HELPERS
     ======================================================= */

  function readJSON(key, fallback) {
    try {
      const value = localStorage.getItem(key);

      if (!value) {
        return fallback;
      }

      return JSON.parse(value);

    } catch (error) {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  function getCompleted() {
    const current = readJSON(STORAGE.COMPLETED, []);

    if (!Array.isArray(current)) {
      return [];
    }

    return current
      .map(Number)
      .filter(function (id) {
        return Number.isFinite(id);
      });
  }

  function setCompleted(ids) {
    writeJSON(
      STORAGE.COMPLETED,
      Array.from(new Set(ids.map(Number)))
    );
  }

  function getUser() {

    const saved = readJSON(STORAGE.USER, null);

    if (
      saved &&
      typeof saved === "object"
    ) {
      return {
        name: saved.name || "Aung Zar Ni Win",
        role: saved.role || "Business Manager"
      };
    }

    return {
      name: "Aung Zar Ni Win",
      role: "Business Manager"
    };
  }

  function saveUser(user) {
    writeJSON(STORAGE.USER, user);
    updateProfileUI();
  }

  function getKPI() {

    const saved = readJSON(STORAGE.KPI, null);

    if (
      saved &&
      typeof saved === "object"
    ) {
      return {
        target: Number(saved.target) || 500,
        actual: Number(saved.actual) || 0,
        team: Number(saved.team) || 4,
        customers: Number(saved.customers) || 0,
        orders: Number(saved.orders) || 0,
        workingDays: Number(saved.workingDays) || 26
      };
    }

    return {
      target: 500,
      actual: 0,
      team: 4,
      customers: 0,
      orders: 0,
      workingDays: 26
    };
  }

  function saveKPI(kpi) {
    writeJSON(STORAGE.KPI, kpi);
  }

  /* =======================================================
     PREMIUM
     ======================================================= */

  function getPremiumInfo() {

    const saved = readJSON(STORAGE.PREMIUM, null);

    if (!saved || typeof saved !== "object") {
      return {
        active: false,
        planId: null,
        activatedAt: null,
        expiresAt: null
      };
    }

    const expiresAt = Number(saved.expiresAt) || 0;

    if (
      saved.active === true &&
      expiresAt > Date.now()
    ) {
      return {
        active: true,
        planId: saved.planId || null,
        activatedAt: saved.activatedAt || null,
        expiresAt: expiresAt
      };
    }

    return {
      active: false,
      planId: null,
      activatedAt: null,
      expiresAt: null
    };
  }

  function activatePremium(planId) {

    const plan = PAYMENT_PLANS.find(function (item) {
      return item.id === planId;
    });

    if (!plan) {
      return false;
    }

    const now = Date.now();

    const data = {
      active: true,
      planId: plan.id,
      activatedAt: now,
      expiresAt: now + (plan.days * 24 * 60 * 60 * 1000)
    };

    writeJSON(STORAGE.PREMIUM, data);

    updatePremiumUI();

    return true;
  }

  function premiumRemainingDays() {

    const info = getPremiumInfo();

    if (!info.active) {
      return 0;
    }

    const diff = info.expiresAt - Date.now();

    return Math.max(
      0,
      Math.ceil(diff / (24 * 60 * 60 * 1000))
    );
  }

  function isPremiumLesson(lesson) {
    return lesson && lesson.id > 1;
  }

  /* =======================================================
     HELPERS
     ======================================================= */

  function escapeHTML(value) {

    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatNumber(value, decimals) {

    const number = Number(value) || 0;

    return number.toLocaleString("en-US", {
      minimumFractionDigits: decimals || 0,
      maximumFractionDigits: decimals || 0
    });
  }

  function getLesson(id) {

    return lessons.find(function (lesson) {
      return lesson.id === Number(id);
    }) || null;
  }

  function getCategoryLessons(categoryName) {

    if (categoryName === "All") {
      return lessons;
    }

    return lessons.filter(function (lesson) {
      return lesson.category === categoryName;
    });
  }

  function getProgress() {

    const completed = getCompleted();

    if (!lessons.length) {
      return 0;
    }

    return Math.round(
      (completed.length / lessons.length) * 100
    );
  }

  function getCategoryProgress(categoryName) {

    const categoryLessons =
      getCategoryLessons(categoryName);

    if (!categoryLessons.length) {
      return 0;
    }

    const completed = getCompleted();

    const completedCount =
      categoryLessons.filter(function (lesson) {
        return completed.includes(lesson.id);
      }).length;

    return Math.round(
      (completedCount / categoryLessons.length) * 100
    );
  }

  function getCompletedCount() {
    return getCompleted().length;
  }

  function getAchievement(target, actual) {

    const t = Number(target) || 0;
    const a = Number(actual) || 0;

    if (t <= 0) {
      return 0;
    }

    return (a / t) * 100;
  }

  function getGap(target, actual) {

    const t = Number(target) || 0;
    const a = Number(actual) || 0;

    return t - a;
  }

  /* =======================================================
     PROFILE UI
     ======================================================= */

  function updateProfileUI() {

    const user = getUser();

    const sideName =
      document.getElementById("sidebarProfileName");

    const sideRole =
      document.getElementById("sidebarProfileRole");

    const topName =
      document.getElementById("topProfileName");

    const topRole =
      document.getElementById("topProfileRole");

    if (sideName) {
      sideName.textContent = user.name;
    }

    if (sideRole) {
      sideRole.textContent = user.role;
    }

    if (topName) {
      topName.textContent = user.name;
    }

    if (topRole) {
      topRole.textContent = user.role;
    }
  }

  function updatePremiumUI() {

    const info = getPremiumInfo();

    const status =
      document.getElementById("sidebarPremiumStatus");

    const dot =
      document.getElementById("premiumDot");

    if (!status || !dot) {
      return;
    }

    if (info.active) {

      status.textContent =
        "Active • " + premiumRemainingDays() + " days";

      dot.classList.add("active");

    } else {

      status.textContent = "Basic Access";

      dot.classList.remove("active");
    }
  }

  /* =======================================================
     HEADER
     ======================================================= */

  const SECTION_META = {
    dashboard: {
      title: "Dashboard",
      subtitle: "Professional Business Management Learning"
    },

    academy: {
      title: "Business Academy",
      subtitle: "Structured learning for business managers"
    },

    lessons: {
      title: "Lessons",
      subtitle: "Build practical business and management capability"
    },

    progress: {
      title: "My Progress",
      subtitle: "Track your learning development"
    },

    sales: {
      title: "Sales Manager",
      subtitle: "Target, execution, team and customer management"
    },

    kpi: {
      title: "KPI & Analytics",
      subtitle: "Measure performance with management numbers"
    },

    tools: {
      title: "Business Tools",
      subtitle: "Practical calculators for business decisions"
    },

    reports: {
      title: "Business Reports",
      subtitle: "Review business and learning performance"
    },

    coach: {
      title: "AI Business Coach",
      subtitle: "Practical AI support for business decisions"
    },

    "ai-tools": {
      title: "AI Business Tools",
      subtitle: "Use AI for planning, sales and management"
    },

    premium: {
      title: "Premium Membership",
      subtitle: "Unlock the complete professional learning system"
    },

    settings: {
      title: "Settings",
      subtitle: "Manage your profile and application data"
    }
  };

  function updateHeader(section) {

    const meta =
      SECTION_META[section] ||
      SECTION_META.dashboard;

    pageTitle.textContent = meta.title;
    pageSubtitle.textContent = meta.subtitle;
  }

  /* =======================================================
     NAVIGATION
     ======================================================= */

  function openMobileMenu() {

    sidebar.classList.add("open");
    mobileOverlay.classList.add("show");
  }

  function closeMobileMenu() {

    sidebar.classList.remove("open");
    mobileOverlay.classList.remove("show");
  }

  function goToSection(section) {

    if (!SECTION_META[section]) {
      section = "dashboard";
    }

    currentSection = section;
    currentLessonId = null;

    updateHeader(section);

    document.querySelectorAll(".nav-item").forEach(function (item) {

      item.classList.toggle(
        "active",
        item.dataset.section === section
      );

    });

    closeMobileMenu();

    renderCurrentSection();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /* =======================================================
     LESSON CONTENT GUIDES
     ======================================================= */

  const CATEGORY_GUIDES = {

    "Business Fundamentals": {
      objective:
        "လုပ်ငန်းတစ်ခုကို အခြေခံစနစ်မှ စီးပွားရေးတန်ဖိုးဖန်တီးနိုင်တဲ့အဆင့်အထိ နားလည်ပြီး စနစ်တကျ စီမံနိုင်ရန်",

      concept:
        "Business Fundamentals မှာ Customer Problem, Value Creation, Revenue, Cost, Market နဲ့ Business Model တို့ကို ချိတ်ဆက်ပြီး လုပ်ငန်းရဲ့ အခြေခံ Logic ကို နားလည်ရပါတယ်",

      importance:
        "အခြေခံ Business Logic မခိုင်မာရင် Sales တိုးလာသော်လည်း Profit, Cash Flow နဲ့ Sustainability ပိုင်းမှာ ပြဿနာဖြစ်နိုင်ပါတယ်",

      kpi: [
        "Revenue",
        "Gross Margin",
        "Operating Cost",
        "Customer Count",
        "Repeat Purchase"
      ],

      steps: [
        "လုပ်ငန်းက ဖြေရှင်းပေးနေတဲ့ Customer Problem ကို ရှင်းရှင်းလင်းလင်းသတ်မှတ်ပါ",
        "Customer အတွက် ဖန်တီးပေးတဲ့ Value ကို သတ်မှတ်ပါ",
        "Revenue ဘယ်ကနေ ဝင်လာတယ်ဆိုတာ ခွဲပါ",
        "အဓိက Cost Drivers တွေကို စာရင်းပြုစုပါ",
        "Revenue, Cost, Profit နဲ့ Cash Flow ကို လစဉ်ပြန်သုံးသပ်ပါ"
      ],

      example:
        "ဥပမာ Distribution Business တစ်ခုမှာ Sales တိုးလာတာတစ်ခုတည်းမကြည့်ဘဲ Gross Margin, Discount, Delivery Cost နဲ့ Collection Days တွေကိုပါ တွဲကြည့်မှ တကယ့် Business Performance ကို သိနိုင်ပါတယ်",

      manager:
        "Manager အနေနဲ့ နေ့စဉ်လုပ်ငန်းဆောင်ရွက်ချက်တွေကို Revenue, Cost, Customer Value နဲ့ Profitability တို့နဲ့ ချိတ်ဆက်စဉ်းစားပါ",

      mistakes: [
        "Sales တိုးတာကို Business Growth တစ်ခုတည်းအဖြစ်ယူဆခြင်း",
        "Cost Structure မသိဘဲ Discount ပေးခြင်း",
        "Customer Problem ထက် Product ကိုသာ အာရုံစိုက်ခြင်း"
      ]
    },

    "Business Strategy": {
      objective:
        "လုပ်ငန်းရဲ့ Direction, Priority နဲ့ Execution ကို တစ်စနစ်တည်းချိတ်ဆက်နိုင်ရန်",

      concept:
        "Strategy ဆိုတာ အရာအားလုံးလုပ်တာမဟုတ်ဘဲ ဘယ် Market ကို ဘယ် Customer အတွက် ဘယ် Value နဲ့ အာရုံစိုက်မလဲဆိုတာ ရွေးချယ်ခြင်းဖြစ်ပါတယ်",

      importance:
        "Resource ကန့်သတ်ထားတဲ့အချိန်မှာ Priority မှန်ကန်စွာသတ်မှတ်နိုင်ခြင်းက Execution Quality ကို တိုးစေပါတယ်",

      kpi: [
        "Revenue Growth",
        "Market Coverage",
        "Gross Margin",
        "Customer Growth",
        "Strategic Initiative Completion"
      ],

      steps: [
        "Current Business Position ကို သုံးသပ်ပါ",
        "Target Market နဲ့ Customer ကို သတ်မှတ်ပါ",
        "Competitive Advantage ကို သတ်မှတ်ပါ",
        "Strategic Priorities 3 ခုမှ 5 ခုအထိ သတ်မှတ်ပါ",
        "Priority တစ်ခုချင်းစီအတွက် KPI နဲ့ Owner သတ်မှတ်ပါ"
      ],

      example:
        "Sales တိုးဖို့ဆိုပြီး Territory အားလုံးကို တစ်ပြိုင်နက်တည်းတိုးချဲ့မယ့်အစား High Potential Territory ကို ဦးစားပေးပြီး Distribution, Coverage နဲ့ Sales Productivity KPI တွေထားနိုင်ပါတယ်",

      manager:
        "Strategy ကို PowerPoint မှာပဲမထားဘဲ Weekly Execution Review နဲ့ KPI Dashboard ထဲမှာ ချိတ်ဆက်ထားပါ",

      mistakes: [
        "Priority အလွန်များခြင်း",
        "Strategy ရှိသော်လည်း Owner မသတ်မှတ်ခြင်း",
        "KPI မရှိဘဲ Strategy ကို ပြန်သုံးသပ်ခြင်း"
      ]
    },

    "Sales Management": {
      objective:
        "Sales Team ကို Target, Territory, Pipeline, Forecast, Coaching နဲ့ Execution အရ စနစ်တကျ ဦးဆောင်နိုင်ရန်",

      concept:
        "Sales Management က Target တစ်ခုတည်းကို စောင့်ကြည့်တာမဟုတ်ဘဲ Target ရရှိဖို့လိုအပ်တဲ့ Activity, Coverage, Conversion, Productivity နဲ့ Team Capability ကို စီမံတာဖြစ်ပါတယ်",

      importance:
        "Target Gap ကို လကုန်မှသိတာထက် နေ့စဉ်နဲ့ အပတ်စဉ် Data ကနေ စောစောသိပြီး Corrective Action လုပ်နိုင်စေပါတယ်",

      kpi: [
        "Target Achievement %",
        "Sales Volume",
        "Sales Gap",
        "Outlet Coverage",
        "Productivity",
        "Collection"
      ],

      steps: [
        "Monthly Target ကို Weekly နဲ့ Daily Target အဖြစ်ခွဲပါ",
        "Territory နဲ့ Salesperson အလိုက် Target ခွဲပါ",
        "Daily Activity ကို Sales Result နဲ့ချိတ်ပါ",
        "Weekly Forecast Review ပြုလုပ်ပါ",
        "Gap ဖြစ်ရင် Root Cause နဲ့ Corrective Action သတ်မှတ်ပါ"
      ],

      example:
        "Monthly Target 500 L ရှိပြီး Working Days 25 ရက်ဆို Daily Target 20 L ဖြစ်ပါတယ်။ Day 15 မှာ Actual 250 L သာရှိရင် Remaining Target 250 L ကို ကျန်ရက်တွေအလိုက် ပြန်ခွဲပြီး Action Plan တည်ဆောက်ရပါမယ်",

      manager:
        "Daily Manager Routine အနေနဲ့ Target → Actual → Gap → Reason → Action → Owner → Deadline အတိုင်း Review လုပ်ပါ",

      mistakes: [
        "Target ကို လကုန်မှ စစ်ခြင်း",
        "Activity KPI မထားခြင်း",
        "Forecast ကို ခန့်မှန်းချက်သက်သက်အဖြစ် သုံးခြင်း"
      ]
    },

    "Sales Skills": {
      objective:
        "Customer ကို နားလည်ပြီး Value-based Selling နဲ့ Conversion တိုးတက်အောင် လုပ်နိုင်ရန်",

      concept:
        "Professional Selling မှာ Product Features ပြောတာထက် Customer Need ကိုရှာပြီး Business Value နဲ့ ဖြေရှင်းချက်ပေးနိုင်ဖို့ အရေးကြီးပါတယ်",

      importance:
        "Customer ရဲ့ လိုအပ်ချက်ကို မှန်မှန်ကန်ကန်ရှာနိုင်ရင် Price-only Selling လျော့ပြီး Value Selling ပိုလုပ်နိုင်ပါတယ်",

      kpi: [
        "Conversion Rate",
        "Average Order Value",
        "New Customer Count",
        "Repeat Purchase",
        "Follow-up Completion"
      ],

      steps: [
        "Customer အကြောင်း ကြိုတင်ပြင်ဆင်ပါ",
        "Open-ended Question မေးပါ",
        "Customer ရဲ့ Need နဲ့ Pain Point ကို နားထောင်ပါ",
        "Feature မဟုတ်ဘဲ Benefit နဲ့ Value ကို ရှင်းပြပါ",
        "Objection ကို အကြောင်းရင်းရှာပြီး ဖြေရှင်းပါ"
      ],

      example:
        "Customer က Price ကြီးတယ်လို့ပြောရင် Discount ပေးဖို့ချက်ချင်းမပြောဘဲ Budget, Expected Return, Product Benefit နဲ့ Alternative Options ကို ပြန်ဆွေးနွေးနိုင်ပါတယ်",

      manager:
        "Salesperson Coaching မှာ Result တစ်ခုတည်းမကြည့်ဘဲ Call Quality, Questioning, Listening, Presentation နဲ့ Closing ကို Observation ပြုလုပ်ပါ",

      mistakes: [
        "Customer မပြောခင် Product အများကြီးရှင်းပြခြင်း",
        "Price Objection ကို Discount နဲ့ပဲဖြေခြင်း",
        "Follow-up မလုပ်ခြင်း"
      ]
    },

    "Customer Management": {
      objective:
        "Customer Value, Retention နဲ့ Long-term Relationship ကို စနစ်တကျ တည်ဆောက်နိုင်ရန်",

      concept:
        "Customer Management ဆိုတာ Customer အားလုံးကို တူညီစွာဆက်ဆံခြင်းမဟုတ်ဘဲ Value, Need, Potential နဲ့ Relationship အရ Segment လုပ်ပြီး စီမံခြင်းဖြစ်ပါတယ်",

      importance:
        "New Customer ရှာဖွေရေးကုန်ကျစရိတ်ထက် Existing Customer Retention နဲ့ Repeat Purchase ကို စနစ်တကျတိုးမြှင့်နိုင်ခြင်းက Business Sustainability အတွက် အရေးကြီးပါတယ်",

      kpi: [
        "Retention Rate",
        "Repeat Purchase",
        "Customer Value",
        "Complaint Resolution",
        "Customer Growth"
      ],

      steps: [
        "Customer ကို Segment ခွဲပါ",
        "High Value Customer ကို သီးခြားစီမံပါ",
        "Customer Need နဲ့ Buying Pattern မှတ်တမ်းတင်ပါ",
        "Complaint နဲ့ Feedback ကို စနစ်တကျမှတ်ပါ",
        "Repeat Purchase နဲ့ Retention ကို လစဉ်စောင့်ကြည့်ပါ"
      ],

      example:
        "Customer 100 ယောက်ထဲက Top 20 Customer တွေက Revenue ရဲ့ အများစုကို ဖန်တီးနေတယ်ဆိုရင် အဲဒီ Account တွေအတွက် Dedicated Review နဲ့ Retention Plan လုပ်နိုင်ပါတယ်",

      manager:
        "Customer Portfolio ကို Revenue တစ်ခုတည်းမကြည့်ဘဲ Profitability, Potential နဲ့ Relationship Risk ပါ ထည့်သွင်းစဉ်းစားပါ",

      mistakes: [
        "Customer အားလုံးကို တူညီစွာစီမံခြင်း",
        "Complaint ကို Data မဖြစ်အောင်ထားခြင်း",
        "Customer Profitability မကြည့်ခြင်း"
      ]
    },

    "Marketing": {
      objective:
        "Market, Customer, Positioning, Campaign နဲ့ Marketing KPI ကို စနစ်တကျ စီမံနိုင်ရန်",

      concept:
        "Marketing ရဲ့ အဓိကတာဝန်က Right Customer ကို Right Value Proposition နဲ့ Right Channel မှာ ရောက်ရှိအောင်လုပ်ခြင်းဖြစ်ပါတယ်",

      importance:
        "Campaign တစ်ခုအောင်မြင်မှုကို Likes နဲ့ Reach တစ်ခုတည်းမကြည့်ဘဲ Lead, Conversion, Revenue နဲ့ ROI အထိ ချိတ်ဆက်ကြည့်ရပါမယ်",

      kpi: [
        "Reach",
        "Leads",
        "Conversion",
        "Revenue",
        "Marketing ROI"
      ],

      steps: [
        "Target Customer ကို သတ်မှတ်ပါ",
        "Customer Need ကို လေ့လာပါ",
        "Clear Value Proposition တည်ဆောက်ပါ",
        "Channel နဲ့ Campaign ကို ရွေးချယ်ပါ",
        "Campaign Result ကို KPI နဲ့ Review လုပ်ပါ"
      ],

      example:
        "Promotion Campaign တစ်ခုမှာ Reach 100,000 ရှိတာထက် Qualified Leads 2,000 ရပြီး Conversion 10% ဖြစ်တာက Business Result အတွက် ပိုအဓိပ္ပါယ်ရှိနိုင်ပါတယ်",

      manager:
        "Marketing နဲ့ Sales Team KPI ကို ချိတ်ဆက်ပြီး Lead → Opportunity → Conversion → Revenue Funnel တစ်ခုတည်းအဖြစ် စောင့်ကြည့်ပါ",

      mistakes: [
        "Reach ကို Sales Result လို့ယူဆခြင်း",
        "Target Customer မသတ်မှတ်ဘဲ Campaign လုပ်ခြင်း",
        "ROI မတွက်ခြင်း"
      ]
    },

    "Branding": {
      objective:
        "Brand Identity, Positioning နဲ့ Customer Trust ကို ရေရှည်တည်ဆောက်နိုင်ရန်",

      concept:
        "Brand ဆိုတာ Logo တစ်ခုတည်းမဟုတ်ဘဲ Customer က Business ကို တွေ့တဲ့အခါ ခံစားရတဲ့ Meaning, Promise နဲ့ Experience စုစုပေါင်းဖြစ်ပါတယ်",

      importance:
        "Brand Consistency က Customer Trust နဲ့ Recognition တိုးတက်စေပါတယ်",

      kpi: [
        "Brand Awareness",
        "Customer Recall",
        "Repeat Purchase",
        "Customer Trust",
        "Brand Search"
      ],

      steps: [
        "Brand Purpose သတ်မှတ်ပါ",
        "Target Customer ကို ရှင်းပါ",
        "Brand Positioning သတ်မှတ်ပါ",
        "Brand Promise တည်ဆောက်ပါ",
        "Communication အားလုံးမှာ Consistency ထိန်းပါ"
      ],

      example:
        "Brand တစ်ခုက Quality, Service နဲ့ Professionalism ကို Promise လုပ်ထားရင် Sales Team, Customer Service နဲ့ Marketing Content အားလုံးမှာ အဲဒီ Promise နဲ့ ကိုက်ညီရပါမယ်",

      manager:
        "Brand ကို Marketing Team တစ်ခုတည်းရဲ့ တာဝန်မဟုတ်ဘဲ Customer Touchpoint အားလုံးရဲ့ တာဝန်အဖြစ် စီမံပါ",

      mistakes: [
        "Logo ကို Brand အဖြစ်သာယူဆခြင်း",
        "Communication မတူညီခြင်း",
        "Customer Experience နဲ့ Brand Promise မကိုက်ခြင်း"
      ]
    },

    "Finance": {
      objective:
        "Revenue, Cost, Profit, Cash Flow နဲ့ Working Capital ကို Manager အမြင်နဲ့ စီမံနိုင်ရန်",

      concept:
        "Finance Management က Accounting Report ဖတ်ခြင်းထက် Business Decision တွေမှာ Money Impact ကို နားလည်ပြီး ထိန်းချုပ်ခြင်းဖြစ်ပါတယ်",

      importance:
        "Sales တိုးနေသော်လည်း Margin ကျခြင်း၊ Cash မဝင်ခြင်းနဲ့ Cost တက်ခြင်းတွေကြောင့် Business Performance ကျနိုင်ပါတယ်",

      kpi: [
        "Revenue",
        "Gross Profit",
        "Gross Margin %",
        "Operating Cost",
        "Cash Flow"
      ],

      steps: [
        "Revenue ကို Product နဲ့ Customer အလိုက် ခွဲပါ",
        "Direct Cost နဲ့ Indirect Cost ခွဲပါ",
        "Gross Margin ကို စောင့်ကြည့်ပါ",
        "Cash Inflow နဲ့ Outflow ကို Plan လုပ်ပါ",
        "Monthly P&L Review ပြုလုပ်ပါ"
      ],

      example:
        "Revenue 100 သိန်းရှိပေမယ့် Gross Margin 15% သာရှိပြီး Operating Cost 20 သိန်းဆိုရင် Revenue ကြီးတာနဲ့ Profit ရှိမယ်လို့ မဆိုနိုင်ပါ",

      manager:
        "Manager တစ်ယောက်အနေနဲ့ Decision တစ်ခုချင်းစီရဲ့ Revenue, Cost, Margin နဲ့ Cash Impact ကို အနည်းဆုံးစဉ်းစားပါ",

      mistakes: [
        "Revenue ကို Profit လို့ယူဆခြင်း",
        "Cash Flow မစောင့်ကြည့်ခြင်း",
        "Discount Impact မတွက်ခြင်း"
      ]
    },

    "Accounting & P&L": {
      objective:
        "P&L နဲ့ Financial Statements ကို Managerial Decision အတွက် အသုံးချနိုင်ရန်",

      concept:
        "P&L က Revenue ကနေ Cost တွေဖြတ်ပြီး Business က ဘယ်လောက် Profit ဖန်တီးနိုင်သလဲဆိုတာ ပြသတဲ့ Management Tool တစ်ခုဖြစ်ပါတယ်",

      importance:
        "P&L ကို နားလည်နိုင်ရင် Sales, Pricing, Cost Control နဲ့ Resource Allocation ဆုံးဖြတ်ချက်တွေ ပိုတိကျလာနိုင်ပါတယ်",

      kpi: [
        "Revenue",
        "Gross Profit",
        "Gross Margin",
        "Operating Expense",
        "Net Profit"
      ],

      steps: [
        "Revenue ကို စစ်ပါ",
        "Cost of Sales ကို စစ်ပါ",
        "Gross Profit နဲ့ Margin တွက်ပါ",
        "Operating Expense ကို ခွဲပါ",
        "Actual P&L ကို Budget နဲ့ နှိုင်းယှဉ်ပါ"
      ],

      example:
        "Revenue တိုးပေမယ့် Gross Margin လျော့နေတယ်ဆိုရင် Price, Discount, Product Mix နဲ့ Cost တို့ကို ပြန်စစ်ရပါမယ်",

      manager:
        "Monthly P&L Review မှာ Variance တစ်ခုချင်းစီအတွက် Reason နဲ့ Action Owner သတ်မှတ်ပါ",

      mistakes: [
        "P&L ကို Finance Team တာဝန်လို့ပဲမြင်ခြင်း",
        "Variance မစစ်ခြင်း",
        "Gross Margin မကြည့်ခြင်း"
      ]
    },

    "Distribution & Operations": {
      objective:
        "Distribution, Stock, Delivery, Channel နဲ့ Operational Efficiency ကို စနစ်တကျ စီမံနိုင်ရန်",

      concept:
        "Operations ရဲ့ ရည်ရွယ်ချက်က Right Product, Right Place, Right Time, Right Cost နဲ့ Customer ဆီရောက်အောင် စနစ်တကျ လုပ်ဆောင်ခြင်းဖြစ်ပါတယ်",

      importance:
        "Stock မလုံလောက်ခြင်း၊ Delivery Delay နဲ့ Distribution Cost မြင့်ခြင်းတွေက Sales Result ကို တိုက်ရိုက်ထိခိုက်နိုင်ပါတယ်",

      kpi: [
        "Numeric Distribution",
        "Stock Availability",
        "Order Fill Rate",
        "Delivery Accuracy",
        "Distribution Cost"
      ],

      steps: [
        "Channel Structure ကို သတ်မှတ်ပါ",
        "Stock Level နဲ့ Reorder Point သတ်မှတ်ပါ",
        "Order Processing Time ကို စောင့်ကြည့်ပါ",
        "Delivery Route ကို Optimize လုပ်ပါ",
        "Distribution KPI ကို Weekly Review လုပ်ပါ"
      ],

      example:
        "Sales Team က Order ရနေသော်လည်း Stock Availability 85% သာရှိရင် Lost Sales ဖြစ်နိုင်တာကြောင့် Sales နဲ့ Operations KPI ကို ချိတ်ဆက်ရပါမယ်",

      manager:
        "Sales Forecast ကို Stock Planning နဲ့ ချိတ်ဆက်ပြီး Supply Gap ကို ကြိုတင်သိရှိအောင်လုပ်ပါ",

      mistakes: [
        "Sales နဲ့ Operations သီးခြားစီလုပ်ခြင်း",
        "Stock Accuracy မစစ်ခြင်း",
        "Delivery Cost မတွက်ခြင်း"
      ]
    },

    "Retail & Modern Trade": {
      objective:
        "Retail Outlet, Shelf Execution, Distribution နဲ့ Modern Trade KPI တွေကို စီမံနိုင်ရန်",

      concept:
        "Retail Execution မှာ Product ရှိရုံနဲ့ မပြီးဘဲ Right Outlet, Right Shelf, Right Availability နဲ့ Right Promotion Execution လိုအပ်ပါတယ်",

      importance:
        "Shelf Availability နဲ့ Visibility က Consumer Purchase Decision ကို တိုက်ရိုက်သက်ရောက်နိုင်ပါတယ်",

      kpi: [
        "Numeric Distribution",
        "Weighted Distribution",
        "Shelf Availability",
        "Promotion Compliance",
        "Sales per Outlet"
      ],

      steps: [
        "Outlet Classification ပြုလုပ်ပါ",
        "Priority Outlet သတ်မှတ်ပါ",
        "Availability စောင့်ကြည့်ပါ",
        "Promotion Execution စစ်ပါ",
        "Outlet Productivity ကို Review လုပ်ပါ"
      ],

      example:
        "Outlet 500 ရှိပေမယ့် Priority Outlet 100 ခုမှာ Stock Out ဖြစ်နေတယ်ဆိုရင် Total Outlet Count ထက် Priority Availability ကို ဦးစားပေးရပါမယ်",

      manager:
        "Field Team ကို Outlet Visit Count တစ်ခုတည်းနဲ့ မတိုင်းဘဲ Productive Call နဲ့ Execution Quality ကိုပါ စောင့်ကြည့်ပါ",

      mistakes: [
        "Outlet Count တစ်ခုတည်းကြည့်ခြင်း",
        "Stock Out မစောင့်ကြည့်ခြင်း",
        "Promotion Compliance မစစ်ခြင်း"
      ]
    },

    "Key Account Management": {
      objective:
        "Strategic Customer တွေကို Long-term Business Partnership အဖြစ် စီမံနိုင်ရန်",

      concept:
        "KAM မှာ Transaction တစ်ကြိမ်ချင်းစီထက် Customer ရဲ့ Business Objective နဲ့ ကိုယ့် Business Objective ကို ချိတ်ဆက်ပြီး Joint Value ဖန်တီးခြင်းက အရေးကြီးပါတယ်",

      importance:
        "Key Account တွေက Revenue နဲ့ Strategic Value အများကြီးပေးနိုင်တာကြောင့် Dedicated Planning လိုအပ်ပါတယ်",

      kpi: [
        "Account Revenue",
        "Account Profitability",
        "Growth %",
        "Share of Wallet",
        "Joint Business Plan Completion"
      ],

      steps: [
        "Strategic Account ကို သတ်မှတ်ပါ",
        "Customer Business ကို နားလည်ပါ",
        "Account Plan ပြုလုပ်ပါ",
        "Joint Business Opportunity ရှာပါ",
        "Quarterly Business Review ပြုလုပ်ပါ"
      ],

      example:
        "Customer ရဲ့ Sales Growth Objective ကို သိထားရင် Product Promotion တစ်ခုတည်းမဟုတ်ဘဲ Joint Growth Plan တည်ဆောက်နိုင်ပါတယ်",

      manager:
        "KAM Review မှာ Revenue တစ်ခုတည်းမကြည့်ဘဲ Profitability, Growth Potential နဲ့ Relationship Risk ပါ ထည့်ပါ",

      mistakes: [
        "Price Negotiation တစ်ခုတည်းကို KAM လို့ယူဆခြင်း",
        "Customer Business Plan မသိခြင်း",
        "Account Review မလုပ်ခြင်း"
      ]
    },

    "Leadership & Management": {
      objective:
        "Team ကို Goal, Accountability, Coaching နဲ့ Performance Management အရ ထိရောက်စွာ ဦးဆောင်နိုင်ရန်",

      concept:
        "Leadership က ကိုယ်တိုင်လုပ်နိုင်ခြင်းထက် Team က ရလဒ်ကောင်းရအောင် Direction, Support, Accountability နဲ့ Capability တည်ဆောက်ပေးခြင်းဖြစ်ပါတယ်",

      importance:
        "Manager တစ်ယောက်ရဲ့ Long-term Performance က Individual Output ထက် Team Capability နဲ့ ပိုဆိုင်ပါတယ်",

      kpi: [
        "Team Achievement",
        "Productivity",
        "Employee Development",
        "Retention",
        "Execution Quality"
      ],

      steps: [
        "Clear Goal သတ်မှတ်ပါ",
        "Role နဲ့ Responsibility ခွဲပါ",
        "Delegate လုပ်ပါ",
        "Coaching နဲ့ Feedback ပေးပါ",
        "Performance Review နဲ့ Development Plan လုပ်ပါ"
      ],

      example:
        "Salesperson တစ်ယောက် Target မရရင် Result ကိုသာ ပြောမယ့်အစား Territory, Customer Coverage, Conversion နဲ့ Skill Gap ကို ခွဲခြမ်းပြီး Coaching Plan လုပ်နိုင်ပါတယ်",

      manager:
        "Team Meeting တိုင်းမှာ Problem တစ်ခုချင်းစီအတွက် Owner, Action နဲ့ Deadline ထားပါ",

      mistakes: [
        "Manager က အားလုံးကို ကိုယ်တိုင်လုပ်ခြင်း",
        "Feedback ကို လကုန်မှပေးခြင်း",
        "Accountability မသတ်မှတ်ခြင်း"
      ]
    },

    "People & HR": {
      objective:
        "Right People ကို ရွေးချယ်၊ ဖွံ့ဖြိုး၊ ထိန်းသိမ်းပြီး Performance Culture တည်ဆောက်နိုင်ရန်",

      concept:
        "People Management မှာ Recruitment ကနေ Onboarding, Training, Performance, Development နဲ့ Retention အထိ Employee Lifecycle တစ်ခုလုံးကို စီမံရပါတယ်",

      importance:
        "လုပ်ငန်းရဲ့ Execution Quality ကို People Capability က တိုက်ရိုက်သက်ရောက်ပါတယ်",

      kpi: [
        "Hiring Time",
        "Training Completion",
        "Performance Achievement",
        "Attendance",
        "Employee Retention"
      ],

      steps: [
        "Clear Job Description ပြုလုပ်ပါ",
        "Right Candidate ကို ရွေးပါ",
        "Structured Onboarding လုပ်ပါ",
        "Training Need ကို သတ်မှတ်ပါ",
        "Performance Review နဲ့ Development Plan ပြုလုပ်ပါ"
      ],

      example:
        "Salesperson အသစ်တစ်ယောက်ကို Product Knowledge ပဲသင်ပေးတာထက် Territory, Customer Visit, Reporting နဲ့ KPI အထိ Onboarding Plan ထည့်သင့်ပါတယ်",

      manager:
        "Employee Problem ဖြစ်မှ Training လုပ်တာထက် Skill Gap ကို ကြိုတင်သိပြီး Development Plan လုပ်ပါ",

      mistakes: [
        "Job Description မရှင်းခြင်း",
        "Onboarding မစနစ်ကျခြင်း",
        "Performance Feedback မပေးခြင်း"
      ]
    },

    "Negotiation": {
      objective:
        "Price, Terms, Service နဲ့ Business Conditions တွေကို Professional Negotiation နဲ့ စီမံနိုင်ရန်",

      concept:
        "Negotiation ဆိုတာ ကိုယ်လိုချင်တာရဖို့ပဲ မဟုတ်ဘဲ Both Sides ရဲ့ Value, Interest နဲ့ Alternatives ကို နားလည်ပြီး Sustainable Agreement တည်ဆောက်ခြင်းဖြစ်ပါတယ်",

      importance:
        "Preparation မရှိတဲ့ Negotiation မှာ Price Discount, Margin Loss နဲ့ Relationship Risk ဖြစ်နိုင်ပါတယ်",

      kpi: [
        "Gross Margin",
        "Discount %",
        "Win Rate",
        "Agreement Value",
        "Negotiation Cycle Time"
      ],

      steps: [
        "Objective ကို ကြိုတင်သတ်မှတ်ပါ",
        "Minimum Acceptable Position သိပါ",
        "Customer Interest ကို ရှာပါ",
        "Concession ကို တန်ဖိုးနဲ့လဲလှယ်ပါ",
        "Agreement ကို Written Confirmation ပြုလုပ်ပါ"
      ],

      example:
        "Customer က Price လျှော့ဖို့တောင်းရင် Price ကို တိုက်ရိုက်လျှော့မယ့်အစား Volume, Payment Term, Order Frequency နဲ့ Service Scope ကို ပြန်ဆွေးနွေးနိုင်ပါတယ်",

      manager:
        "Negotiation တိုင်းမှာ Give နဲ့ Get နှစ်ခုလုံး ရှိအောင် သတ်မှတ်ပါ",

      mistakes: [
        "Preparation မရှိခြင်း",
        "ချက်ချင်း Discount ပေးခြင်း",
        "BATNA မသိခြင်း"
      ]
    },

    "Business Development": {
      objective:
        "New Market, New Customer, Partnership နဲ့ Growth Opportunity တွေကို ရှာဖွေပြီး အကောင်အထည်ဖော်နိုင်ရန်",

      concept:
        "Business Development က Sales ရဲ့ တိုက်ရိုက် Order ရယူခြင်းထက် ရေရှည် Growth Opportunity တွေကို ရှာဖွေ၊ စမ်းသပ်ပြီး Scale လုပ်ခြင်းဖြစ်ပါတယ်",

      importance:
        "Existing Business တစ်ခုတည်းပေါ် မူတည်ခြင်းထက် New Growth Engine တွေ တည်ဆောက်နိုင်ပါတယ်",

      kpi: [
        "New Opportunities",
        "New Customers",
        "Pipeline Value",
        "Conversion",
        "New Revenue"
      ],

      steps: [
        "Market Opportunity ရှာပါ",
        "Potential Customer ကို သတ်မှတ်ပါ",
        "Business Case ပြုလုပ်ပါ",
        "Pilot Test လုပ်ပါ",
        "Result ကောင်းရင် Scale လုပ်ပါ"
      ],

      example:
        "လက်ရှိ Channel တစ်ခုအပြင် Online B2B Channel တစ်ခု စမ်းသပ်ပြီး 3 လအတွင်း Lead, Conversion နဲ့ Revenue ကို တိုင်းတာနိုင်ပါတယ်",

      manager:
        "Opportunity တစ်ခုချင်းစီကို Potential, Cost, Time နဲ့ Risk အရ Prioritize လုပ်ပါ",

      mistakes: [
        "Idea များပြီး Execution မရှိခြင်း",
        "Pilot မလုပ်ဘဲ အကြီးစားရင်းနှီးမြှုပ်နှံခြင်း",
        "KPI မသတ်မှတ်ခြင်း"
      ]
    },

    "KPI & Data Analysis": {
      objective:
        "Business Data ကို KPI အဖြစ် ပြောင်းလဲပြီး Decision Making အတွက် အသုံးချနိုင်ရန်",

      concept:
        "KPI က Number တစ်ခုတည်းမဟုတ်ဘဲ Target, Actual, Gap, Trend နဲ့ Action ကို ချိတ်ဆက်ထားတဲ့ Management System ဖြစ်ပါတယ်",

      importance:
        "Data-based Management က Opinion နဲ့ Assumption ပေါ်မူတည်ပြီး ဆုံးဖြတ်တာကို လျှော့ချပေးနိုင်ပါတယ်",

      kpi: [
        "Target",
        "Actual",
        "Achievement %",
        "Gap",
        "Trend"
      ],

      steps: [
        "Business Objective ကို သတ်မှတ်ပါ",
        "Objective နဲ့ဆိုင်တဲ့ KPI ရွေးပါ",
        "Target သတ်မှတ်ပါ",
        "Actual Data စုပါ",
        "Gap နဲ့ Root Cause ကို Review လုပ်ပါ"
      ],

      example:
        "Target 500 L, Actual 385 L ဆို Achievement 77% ဖြစ်ပြီး Gap 115 L ဖြစ်ပါတယ်။ Gap ရဲ့ အကြောင်းရင်းကို Territory, Customer, Product နဲ့ Salesperson အလိုက် ခွဲစိတ်နိုင်ပါတယ်",

      manager:
        "KPI Review မှာ Number ပြောပြီးမပြီးဘဲ Number → Reason → Action → Owner → Deadline အထိ သွားပါ",

      mistakes: [
        "KPI အလွန်များခြင်း",
        "Target မရှိဘဲ Actual ကြည့်ခြင်း",
        "Gap ဖြစ်ရတဲ့အကြောင်းရင်း မရှာခြင်း"
      ]
    },

    "Problem Solving & Decision Making": {
      objective:
        "Business Problem ကို Root Cause အထိ ရှာပြီး Actionable Decision ချနိုင်ရန်",

      concept:
        "Problem Solving မှာ Symptom ကို ဖြေရှင်းတာထက် Root Cause ကို ရှာပြီး ပြန်မဖြစ်အောင် System Improvement လုပ်ဖို့ လိုပါတယ်",

      importance:
        "တူညီတဲ့ Problem ထပ်ခါထပ်ခါဖြစ်နေရင် Quick Fix ထက် Root Cause Management လိုအပ်ပါတယ်",

      kpi: [
        "Problem Resolution Time",
        "Recurring Problem Rate",
        "Action Completion",
        "Decision Cycle Time",
        "Risk Reduction"
      ],

      steps: [
        "Problem ကို တိတိကျကျ Define လုပ်ပါ",
        "Data စုပါ",
        "5 Whys သို့မဟုတ် Fishbone သုံးပါ",
        "Root Cause ကို Validate လုပ်ပါ",
        "Corrective Action နဲ့ Preventive Action ခွဲပါ"
      ],

      example:
        "Sales ကျတယ်ဆိုတာ Problem Statement မလုံလောက်ပါ။ Territory Coverage ကျတာလား, Stock Out လား, Price Issue လား, Customer Demand ကျတာလား ခွဲစိတ်ရပါမယ်",

      manager:
        "Problem Review မှာ လူကို အပြစ်တင်တာထက် Process, Data နဲ့ Root Cause ကို ဦးစားပေးပါ",

      mistakes: [
        "Symptom ကို Root Cause လို့ယူဆခြင်း",
        "Data မစစ်ဘဲဆုံးဖြတ်ခြင်း",
        "Action Owner မထားခြင်း"
      ]
    },

    "Digital Business & AI": {
      objective:
        "Digital Tools နဲ့ AI ကို Business Productivity, Sales, Marketing နဲ့ Decision Making မှာ အသုံးချနိုင်ရန်",

      concept:
        "AI ကို လူအစားထိုးဖို့ထက် Research, Analysis, Content, Planning, Automation နဲ့ Decision Support အတွက် အသုံးချနိုင်ပါတယ်",

      importance:
        "Digital Capability က Manager ရဲ့ Speed နဲ့ Productivity ကို မြှင့်တင်နိုင်ပါတယ်",

      kpi: [
        "Time Saved",
        "Task Completion",
        "Lead Generation",
        "Content Output",
        "Process Automation"
      ],

      steps: [
        "အချိန်ကုန်တဲ့ Repetitive Task ရှာပါ",
        "AI သုံးနိုင်တဲ့ Task ခွဲပါ",
        "Clear Prompt တည်ဆောက်ပါ",
        "AI Output ကို Human Review လုပ်ပါ",
        "Result နဲ့ Time Saving ကို တိုင်းပါ"
      ],

      example:
        "Weekly Sales Report ကို AI နဲ့ Summary, Risk, Gap နဲ့ Action Plan အဖြစ် ပြောင်းနိုင်ပေမယ့် Final Business Decision ကို Manager က ပြန်စစ်ရပါမယ်",

      manager:
        "AI ကို Decision Maker မဟုတ်ဘဲ Decision Support Tool အဖြစ် အသုံးချပါ",

      mistakes: [
        "AI Output ကို မစစ်ဘဲ အသုံးပြုခြင်း",
        "Sensitive Data မထိန်းသိမ်းခြင်း",
        "Prompt မရှင်းခြင်း"
      ]
    },

    "Productivity & Career": {
      objective:
        "Manager တစ်ယောက်အနေနဲ့ Time, Priority, Communication နဲ့ Career Development ကို စနစ်တကျ စီမံနိုင်ရန်",

      concept:
        "Productivity ဆိုတာ အလုပ်များများလုပ်ခြင်းမဟုတ်ဘဲ Business Impact မြင့်တဲ့အလုပ်တွေကို Priority အလိုက် ပြီးမြောက်အောင်လုပ်နိုင်ခြင်းဖြစ်ပါတယ်",

      importance:
        "Manager တွေအတွက် Time နဲ့ Attention က Limited Resource ဖြစ်တာကြောင့် Priority Management အရေးကြီးပါတယ်",

      kpi: [
        "Priority Completion",
        "Weekly Goal Completion",
        "Meeting Efficiency",
        "Task Completion",
        "Development Hours"
      ],

      steps: [
        "Weekly Priority 3 ခုမှ 5 ခု သတ်မှတ်ပါ",
        "Daily Top 3 Task သတ်မှတ်ပါ",
        "Low-value Task လျှော့ပါ",
        "Meeting Outcome ကို ရှင်းထားပါ",
        "Weekly Review နဲ့ Learning Plan ပြုလုပ်ပါ"
      ],

      example:
        "နေ့တိုင်း Task 15 ခုလုပ်ဖို့ကြိုးစားတာထက် Sales Gap, Team Coaching နဲ့ Key Customer တို့လို Business Impact မြင့်တဲ့ Task 3 ခုကို ဦးစားပေးနိုင်ပါတယ်",

      manager:
        "နေ့စဉ်အလုပ်စတင်မီ Today Top 3 နဲ့ End-of-Day Review ကို Habit တစ်ခုအဖြစ်တည်ဆောက်ပါ",

      mistakes: [
        "Urgent အားလုံးကို Important လို့ယူဆခြင်း",
        "Calendar မစီမံခြင်း",
        "Learning Time မထားခြင်း"
      ]
    }

  };

  /* =======================================================
     CONTENT FALLBACK
     ======================================================= */

  const DEFAULT_GUIDE = {
    objective:
      "ဒီ Lesson မှာ Business Management အတွက် လက်တွေ့အသုံးချနိုင်တဲ့ အခြေခံစနစ်နဲ့ Management Thinking ကို တည်ဆောက်ရန်",

    concept:
      "ဒီအကြောင်းအရာကို Business Objective, Customer, Process, People, KPI နဲ့ Action တို့ကို ချိတ်ဆက်ပြီး စဉ်းစားရပါမယ်",

    importance:
      "Management Decision တွေမှာ Concept ကို သိရုံမဟုတ်ဘဲ Business Result နဲ့ ချိတ်ဆက်အသုံးချနိုင်ဖို့ အရေးကြီးပါတယ်",

    kpi: [
      "Target",
      "Actual",
      "Achievement %",
      "Gap",
      "Action Completion"
    ],

    steps: [
      "လက်ရှိ Business Situation ကို သုံးသပ်ပါ",
      "အဓိက Problem သို့မဟုတ် Opportunity ကို သတ်မှတ်ပါ",
      "Data နဲ့ Evidence စုပါ",
      "Action Plan တည်ဆောက်ပါ",
      "KPI နဲ့ Result ကို Review လုပ်ပါ"
    ],

    example:
      "လုပ်ငန်းမှာ ဒီအကြောင်းအရာနဲ့ သက်ဆိုင်တဲ့ Current Situation တစ်ခုကို ရွေးပြီး Target, Actual, Gap နဲ့ Action Plan အဖြစ် ပြောင်းလဲအသုံးချနိုင်ပါတယ်",

    manager:
      "Manager အနေနဲ့ ဒီ Concept ကို Team Meeting, Weekly Review နဲ့ KPI Management ထဲမှာ လက်တွေ့အသုံးချပါ",

    mistakes: [
      "Concept ကို သိရုံနဲ့ လက်တွေ့မအသုံးချခြင်း",
      "Data မသုံးဘဲ ခန့်မှန်းခြင်း",
      "Action Owner နဲ့ Deadline မထားခြင်း"
    ]
  };

  function getGuide(lesson) {

    return CATEGORY_GUIDES[lesson.category] ||
      DEFAULT_GUIDE;
  }

  function getLessonContent(lesson) {

    const guide = getGuide(lesson);

    const title = lesson.title;

    return {
      objective:
        guide.objective +
        " — " +
        title +
        " ကို အဓိကထားပြီး လက်တွေ့အသုံးချနိုင်ရန်",

      concept:
        title +
        " ကို " +
        guide.concept,

      importance:
        guide.importance,

      details: guide.steps,

      example:
        guide.example,

      managerTips:
        guide.manager,

      mistakes:
        guide.mistakes,

      actionPlan: [
        "လက်ရှိအခြေအနေကို စာရင်းပြုစုပါ",
        title + " နဲ့သက်ဆိုင်တဲ့ Gap တစ်ခုကို သတ်မှတ်ပါ",
        "ဒီအပတ်အတွင်း လုပ်ဆောင်မယ့် Action 1 ခု သတ်မှတ်ပါ",
        "KPI တစ်ခုရွေးပြီး Result တိုင်းပါ",
        "Weekly Review မှာ Result ကို ပြန်သုံးသပ်ပါ"
      ],

      checklist: [
        title + " ကို ကိုယ့်လုပ်ငန်းနဲ့ ချိတ်ဆက်နိုင်ပြီလား",
        "Target နဲ့ Actual ကို သတ်မှတ်ထားပြီလား",
        "Gap ရဲ့ Root Cause ကို သိပြီလား",
        "Action Owner နဲ့ Deadline ရှိပြီလား",
        "KPI နဲ့ Result ကို တိုင်းတာနိုင်ပြီလား"
      ],

      kpi: guide.kpi,

      practice:
        "ကိုယ့်လုပ်ငန်းထဲက လက်ရှိ Problem သို့မဟုတ် Opportunity တစ်ခုကို ရွေးပါ။ " +
        title +
        " Concept ကို အသုံးပြုပြီး Situation → Gap → Action → KPI ပုံစံနဲ့ ရေးပါ",

      takeaway: [
        title + " ကို Business Result နဲ့ ချိတ်ဆက်စဉ်းစားပါ",
        "Data နဲ့ Evidence ကို အခြေခံပါ",
        "Action ကို တိတိကျကျ သတ်မှတ်ပါ",
        "KPI နဲ့ Result ကို ပြန်တိုင်းပါ"
      ]
    };
  }

  /* =======================================================
     DASHBOARD
     ======================================================= */

  function renderDashboard() {

    const user = getUser();
    const completed = getCompletedCount();
    const progress = getProgress();
    const kpi = getKPI();

    const achievement =
      getAchievement(kpi.target, kpi.actual);

    const gap =
      getGap(kpi.target, kpi.actual);

    const continueLesson =
      lessons.find(function (lesson) {
        return !getCompleted().includes(lesson.id);
      }) || lessons[0];

    const premium = getPremiumInfo();

    app.innerHTML = `
      <section class="dashboard-hero">

        <div class="eyebrow">AUNG BUSINESS ACADEMY</div>

        <h1>Welcome back, ${escapeHTML(user.name)}</h1>

        <p>
          Business Management နဲ့ Sales Management Skills တွေကို
          Professional Learning System တစ်ခုထဲမှာ လေ့လာပြီး
          လက်တွေ့ Business Decision တွေမှာ အသုံးချနိုင်အောင် တည်ဆောက်ထားပါတယ်
        </p>

        <div class="hero-actions">

          <button
            class="btn btn-primary"
            type="button"
            data-action="go-lessons">
            📚 Continue Learning
          </button>

          <button
            class="btn"
            type="button"
            data-action="go-kpi">
            📊 Open KPI Dashboard
          </button>

          <button
            class="btn"
            type="button"
            data-action="go-coach">
            🤖 Ask AI Coach
          </button>

        </div>

        <div class="hero-meta">
          <strong>${progress}%</strong>
          <span>Learning Progress</span>
        </div>

      </section>

      <div class="grid grid-4">

        <div class="card stat-card">
          <div class="stat-top">
            <span class="stat-label">Total Lessons</span>
            <span class="stat-icon">📚</span>
          </div>
          <div class="stat-value">${formatNumber(lessons.length)}</div>
          <div class="stat-foot">Professional business lessons</div>
        </div>

        <div class="card stat-card">
          <div class="stat-top">
            <span class="stat-label">Completed</span>
            <span class="stat-icon">✓</span>
          </div>
          <div class="stat-value">${formatNumber(completed)}</div>
          <div class="stat-foot">Lessons completed</div>
        </div>

        <div class="card stat-card">
          <div class="stat-top">
            <span class="stat-label">Sales Achievement</span>
            <span class="stat-icon">🎯</span>
          </div>
          <div class="stat-value">${formatNumber(achievement, 0)}%</div>
          <div class="stat-foot">
            Target ${formatNumber(kpi.target, 1)} L
          </div>
        </div>

        <div class="card stat-card">
          <div class="stat-top">
            <span class="stat-label">Premium Status</span>
            <span class="stat-icon">♛</span>
          </div>

          <div class="stat-value">
            ${premium.active ? "PRO" : "BASIC"}
          </div>

          <div class="stat-foot">
            ${
              premium.active
                ? premiumRemainingDays() + " days remaining"
                : "Lesson 1 free"
            }
          </div>
        </div>

      </div>

      <div class="grid grid-2 dashboard-columns">

        <div class="card continue-card">

          <div class="card-title">
            <h3>Continue Learning</h3>
            <span>${completed}/${lessons.length}</span>
          </div>

          <div class="continue-course">

            <div class="course-icon">
              ${continueLesson.icon}
            </div>

            <div class="continue-info">

              <h3>
                ${escapeHTML(continueLesson.title)}
              </h3>

              <p>
                ${escapeHTML(continueLesson.category)}
              </p>

              <div class="progress-row">
                <span>Overall progress</span>
                <strong>${progress}%</strong>
              </div>

              <div class="progress-track">
                <div
                  class="progress-fill"
                  style="width:${progress}%">
                </div>
              </div>

            </div>

            <button
              class="btn btn-primary"
              type="button"
              data-open-lesson="${continueLesson.id}">
              Open
            </button>

          </div>

        </div>

        <div class="card card-padding">

          <div class="card-title">
            <h3>Sales Performance</h3>
            <span>Current KPI</span>
          </div>

          <div class="progress-row">
            <span>Target vs Actual</span>
            <strong>${formatNumber(achievement, 1)}%</strong>
          </div>

          <div class="progress-track">
            <div
              class="progress-fill"
              style="width:${Math.min(achievement, 100)}%">
            </div>
          </div>

          <div class="grid grid-3" style="margin-top:16px">

            <div>
              <div class="stat-label">Target</div>
              <strong>${formatNumber(kpi.target, 1)} L</strong>
            </div>

            <div>
              <div class="stat-label">Actual</div>
              <strong>${formatNumber(kpi.actual, 1)} L</strong>
            </div>

            <div>
              <div class="stat-label">Gap</div>
              <strong>
                ${formatNumber(Math.max(gap, 0), 1)} L
              </strong>
            </div>

          </div>

        </div>

      </div>

      <section style="margin-top:20px">

        <div class="section-header">
          <div class="eyebrow">CORE DEVELOPMENT</div>
          <h2>Professional Management Areas</h2>
          <p>
            Business Manager တစ်ယောက်အနေနဲ့ လိုအပ်တဲ့ Core Capability တွေကို
            တစ်နေရာတည်းမှာ လေ့လာနိုင်ပါတယ်
          </p>
        </div>

        <div class="feature-grid">

          ${renderFeatureCard(
            "🎯",
            "Sales Management",
            "Sales Target, Territory, Forecast, Coaching နဲ့ Team Performance",
            "sales"
          )}

          ${renderFeatureCard(
            "📈",
            "KPI & Analytics",
            "Target, Actual, Achievement, Gap နဲ့ Business Decision",
            "kpi"
          )}

          ${renderFeatureCard(
            "💰",
            "Finance & Profit",
            "Pricing, Margin, Break-even, P&L နဲ့ Cash Flow",
            "tools"
          )}

          ${renderFeatureCard(
            "👔",
            "Leadership",
            "Team Management, Coaching, Delegation နဲ့ Performance",
            "academy"
          )}

          ${renderFeatureCard(
            "🤖",
            "AI Business Coach",
            "Business Problem တွေအတွက် Practical AI Support",
            "coach"
          )}

          ${renderFeatureCard(
            "🚀",
            "Business Growth",
            "Strategy, Marketing, Customer နဲ့ Business Development",
            "academy"
          )}

        </div>

      </section>

      <section style="margin-top:22px">

        <div class="section-header">
          <div class="eyebrow">ACADEMY</div>
          <h2>Learning Categories</h2>
          <p>
            ${CATEGORY_DEFINITIONS.length} categories
            • ${lessons.length} professional lessons
          </p>
        </div>

        <div class="category-grid">

          ${CATEGORY_DEFINITIONS.slice(0, 8)
            .map(renderCategoryCard)
            .join("")}

        </div>

      </section>
    `;
  }

  function renderFeatureCard(icon, title, description, section) {

    return `
      <div class="feature-card">

        <div class="feature-icon">
          ${icon}
        </div>

        <h3>${escapeHTML(title)}</h3>

        <p>${escapeHTML(description)}</p>

        <button
          class="btn btn-soft"
          type="button"
          data-section="${escapeHTML(section)}">
          Open Module →
        </button>

      </div>
    `;
  }

  function renderCategoryCard(category) {

    const progress =
      getCategoryProgress(category.name);

    return `
      <div
        class="category-card"
        data-category-open="${escapeHTML(category.name)}">

        <div class="category-icon">
          ${category.icon}
        </div>

        <h4>${escapeHTML(category.name)}</h4>

        <p>
          ${category.topics.length} lessons
        </p>

        <div class="progress-row">
          <span>Progress</span>
          <strong>${progress}%</strong>
        </div>

        <div class="progress-track">
          <div
            class="progress-fill"
            style="width:${progress}%">
          </div>
        </div>

      </div>
    `;
  }

  /* =======================================================
     ACADEMY
     ======================================================= */

  function renderAcademy() {

    app.innerHTML = `
      <section class="section-header">

        <div class="eyebrow">PROFESSIONAL LEARNING</div>

        <h2>Business Academy</h2>

        <p>
          Business Management, Sales Management, Leadership,
          Finance, Marketing, KPI နဲ့ AI အပါအဝင်
          ${lessons.length} Lessons ကို စနစ်တကျ လေ့လာနိုင်ပါတယ်
        </p>

      </section>

      <div class="grid grid-4">

        <div class="card stat-card">
          <div class="stat-label">Categories</div>
          <div class="stat-value">${CATEGORY_DEFINITIONS.length}</div>
          <div class="stat-foot">Business capability areas</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Lessons</div>
          <div class="stat-value">${lessons.length}</div>
          <div class="stat-foot">Professional lessons</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Completed</div>
          <div class="stat-value">${getCompletedCount()}</div>
          <div class="stat-foot">Your completed lessons</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Progress</div>
          <div class="stat-value">${getProgress()}%</div>
          <div class="stat-foot">Overall learning progress</div>
        </div>

      </div>

      <section style="margin-top:20px">

        <div class="category-grid">

          ${CATEGORY_DEFINITIONS
            .map(renderCategoryCard)
            .join("")}

        </div>

      </section>
    `;
  }

  /* =======================================================
     LESSONS
     ======================================================= */

  function renderLessons() {

    const filtered = lessons.filter(function (lesson) {

      const categoryMatch =
        currentCategory === "All" ||
        lesson.category === currentCategory;

      const text =
        (
          lesson.title +
          " " +
          lesson.category
        ).toLowerCase();

      const searchMatch =
        !searchTerm ||
        text.includes(searchTerm.toLowerCase());

      return categoryMatch && searchMatch;
    });

    const completed = getCompleted();

    app.innerHTML = `
      <section class="section-header">

        <div class="eyebrow">LEARNING LIBRARY</div>

        <h2>Lessons</h2>

        <p>
          Lesson 1 is free
          • Lesson 2+ requires Premium Membership
        </p>

      </section>

      <div class="card card-padding">

        <div class="search-bar">

          <input
            id="lessonSearch"
            type="search"
            value="${escapeHTML(searchTerm)}"
            placeholder="Search lesson or category...">

        </div>

        <div class="filter-row">

          <button
            class="filter-btn ${currentCategory === "All" ? "active" : ""}"
            type="button"
            data-category-filter="All">
            All
          </button>

          ${CATEGORY_DEFINITIONS
            .map(function (category) {

              return `
                <button
                  class="filter-btn ${
                    currentCategory === category.name
                      ? "active"
                      : ""
                  }"
                  type="button"
                  data-category-filter="${escapeHTML(category.name)}">
                  ${escapeHTML(category.name)}
                </button>
              `;

            })
            .join("")}

        </div>

        <div style="
          margin-bottom:12px;
          color:#64748b;
          font-size:9px;
        ">
          Showing ${filtered.length} lessons
        </div>

        <div class="lesson-list">

          ${
            filtered.length
              ? filtered.map(function (lesson) {

                  const isCompleted =
                    completed.includes(lesson.id);

                  const premium =
                    isPremiumLesson(lesson);

                  const locked =
                    premium && !getPremiumInfo().active;

                  return `
                    <div class="lesson-item ${
                      isCompleted ? "completed" : ""
                    }">

                      <div class="lesson-number">
                        ${lesson.id}
                      </div>

                      <div class="lesson-info">

                        <h4>
                          ${escapeHTML(lesson.title)}
                        </h4>

                        <p>
                          ${escapeHTML(lesson.category)}
                        </p>

                      </div>

                      <div class="lesson-actions">

                        ${
                          locked
                            ? `<span class="lesson-lock">♛</span>`
                            : ""
                        }

                        <span class="lesson-status ${
                          isCompleted
                            ? "complete"
                            : premium
                              ? "premium"
                              : ""
                        }">

                          ${
                            isCompleted
                              ? "COMPLETED"
                              : premium
                                ? "PREMIUM"
                                : "FREE"
                          }

                        </span>

                        <button
                          class="btn ${
                            locked
                              ? "btn-premium"
                              : "btn-primary"
                          }"
                          type="button"
                          data-open-lesson="${lesson.id}">

                          ${
                            locked
                              ? "Unlock"
                              : isCompleted
                                ? "Review"
                                : "Open"
                          }

                        </button>

                      </div>

                    </div>
                  `;

                }).join("")
              : `
                <div class="empty-state">
                  <div class="empty-state-icon">🔎</div>
                  <h3>No lessons found</h3>
                  <p>Search keyword သို့မဟုတ် category ပြန်ရွေးပါ</p>
                </div>
              `
          }

        </div>

      </div>
    `;
  }

  /* =======================================================
     LESSON READER
     ======================================================= */

  function openLesson(id) {

    const lesson = getLesson(id);

    if (!lesson) {
      showToast(
        "Lesson မတွေ့ပါ",
        "error"
      );
      return;
    }

    if (
      isPremiumLesson(lesson) &&
      !getPremiumInfo().active
    ) {

      showPremiumModal(lesson);

      return;
    }

    currentLessonId = lesson.id;

    updateHeader("lessons");

    renderLessonReader(lesson);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function renderLessonReader(lesson) {

    const content =
      getLessonContent(lesson);

    const completed =
      getCompleted().includes(lesson.id);

    const premium =
      isPremiumLesson(lesson);

    const previous =
      getLesson(lesson.id - 1);

    const next =
      getLesson(lesson.id + 1);

    app.innerHTML = `
      <div class="lesson-reader">

        <button
          class="btn btn-soft"
          type="button"
          data-action="back-lessons">
          ← Back to Lessons
        </button>

        <div style="height:12px"></div>

        <article class="lesson-header">

          <div class="lesson-header-top">

            <div class="lesson-header-icon">
              ${lesson.icon}
            </div>

            <div>

              <div class="eyebrow">
                LESSON ${lesson.id}
              </div>

              <h1>
                ${escapeHTML(lesson.title)}
              </h1>

              <p>
                ${escapeHTML(lesson.category)}
              </p>

              <div class="lesson-badges">

                <span class="badge badge-blue">
                  ${escapeHTML(lesson.category)}
                </span>

                ${
                  premium
                    ? `
                      <span class="badge badge-gold">
                        PREMIUM
                      </span>
                    `
                    : `
                      <span class="badge badge-green">
                        FREE
                      </span>
                    `
                }

                ${
                  completed
                    ? `
                      <span class="badge badge-green">
                        COMPLETED
                      </span>
                    `
                    : ""
                }

              </div>

            </div>

          </div>

        </article>

        <section class="card lesson-section">

          <h3>🎯 Learning Objective</h3>

          <p>
            ${escapeHTML(content.objective)}
          </p>

        </section>

        <section class="card lesson-section">

          <h3>📘 Core Concept</h3>

          <p>
            ${escapeHTML(content.concept)}
          </p>

        </section>

        <section class="card lesson-section">

          <h3>💡 Why It Matters</h3>

          <p>
            ${escapeHTML(content.importance)}
          </p>

        </section>

        <section class="card lesson-section">

          <h3>🧭 Practical Steps</h3>

          <div class="lesson-points">

            ${content.details
              .map(function (item, index) {

                return `
                  <div class="lesson-point">
                    <strong>${index + 1}.</strong>
                    ${escapeHTML(item)}
                  </div>
                `;

              })
              .join("")}

          </div>

        </section>

        <section class="card lesson-section">

          <h3>🏢 Business Example</h3>

          <div class="example-box">

            <strong>Manager Situation</strong>

            <p>
              ${escapeHTML(content.example)}
            </p>

          </div>

        </section>

        <section class="card lesson-section">

          <h3>👔 Manager Application</h3>

          <p>
            ${escapeHTML(content.managerTips)}
          </p>

        </section>

        <section class="card lesson-section">

          <h3>📊 Recommended KPIs</h3>

          <div class="lesson-points">

            ${content.kpi
              .map(function (item) {

                return `
                  <div class="lesson-point">
                    ${escapeHTML(item)}
                  </div>
                `;

              })
              .join("")}

          </div>

        </section>

        <section class="card lesson-section">

          <h3>⚠️ Common Mistakes</h3>

          <div class="lesson-points">

            ${content.mistakes
              .map(function (item) {

                return `
                  <div class="lesson-point">
                    ${escapeHTML(item)}
                  </div>
                `;

              })
              .join("")}

          </div>

        </section>

        <section class="card lesson-section">

          <h3>📝 Practice</h3>

          <p>
            ${escapeHTML(content.practice)}
          </p>

        </section>

        <section class="card lesson-section">

          <h3>🚀 Action Plan</h3>

          <ol class="action-list">

            ${content.actionPlan
              .map(function (item) {

                return `
                  <li>
                    ${escapeHTML(item)}
                  </li>
                `;

              })
              .join("")}

          </ol>

        </section>

        <section class="card lesson-section">

          <h3>☑️ Manager Checklist</h3>

          <div class="checklist">

            ${content.checklist
              .map(function (item) {

                return `
                  <div class="check-item">
                    ${escapeHTML(item)}
                  </div>
                `;

              })
              .join("")}

          </div>

        </section>

        <section class="card lesson-section">

          <h3>🧠 Key Takeaways</h3>

          <div class="lesson-points">

            ${content.takeaway
              .map(function (item) {

                return `
                  <div class="lesson-point">
                    ${escapeHTML(item)}
                  </div>
                `;

              })
              .join("")}

          </div>

        </section>

        <div class="lesson-footer-actions">

          <button
            class="btn"
            type="button"
            ${
              previous
                ? `data-open-lesson="${previous.id}"`
                : "disabled"
            }>
            ← Previous
          </button>

          <button
            class="btn ${
              completed
                ? "btn-success"
                : "btn-primary"
            }"
            type="button"
            data-action="toggle-complete">

            ${
              completed
                ? "✓ Completed"
                : "Mark as Completed"
            }

          </button>

          <button
            class="btn"
            type="button"
            ${
              next
                ? `data-open-lesson="${next.id}"`
                : "disabled"
            }>
            Next →
          </button>

        </div>

      </div>
    `;
  }

  function toggleLessonComplete() {

    if (!currentLessonId) {
      return;
    }

    const lesson =
      getLesson(currentLessonId);

    if (!lesson) {
      return;
    }

    if (
      isPremiumLesson(lesson) &&
      !getPremiumInfo().active
    ) {
      showPremiumModal(lesson);
      return;
    }

    const completed = getCompleted();

    const index =
      completed.indexOf(lesson.id);

    if (index >= 0) {

      completed.splice(index, 1);

      showToast(
        "Lesson completion ပြန်ဖျက်လိုက်ပါပြီ",
        "success"
      );

    } else {

      completed.push(lesson.id);

      showToast(
        "Lesson completed ✓",
        "success"
      );
    }

    setCompleted(completed);

    renderLessonReader(lesson);

    updatePremiumUI();
  }

  /* =======================================================
     PROGRESS
     ======================================================= */

  function renderProgress() {

    const completed =
      getCompleted();

    const overall =
      getProgress();

    app.innerHTML = `
      <section class="section-header">

        <div class="eyebrow">LEARNING ANALYTICS</div>

        <h2>My Progress</h2>

        <p>
          ကိုယ့်ရဲ့ Learning Progress ကို Category အလိုက်
          စောင့်ကြည့်နိုင်ပါတယ်
        </p>

      </section>

      <div class="grid grid-4">

        <div class="card stat-card">
          <div class="stat-label">Overall Progress</div>
          <div class="stat-value">${overall}%</div>
          <div class="stat-foot">All lessons</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Completed</div>
          <div class="stat-value">${completed.length}</div>
          <div class="stat-foot">Completed lessons</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Remaining</div>
          <div class="stat-value">
            ${Math.max(lessons.length - completed.length, 0)}
          </div>
          <div class="stat-foot">Lessons remaining</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Categories</div>
          <div class="stat-value">${CATEGORY_DEFINITIONS.length}</div>
          <div class="stat-foot">Learning areas</div>
        </div>

      </div>

      <section style="margin-top:20px">

        <div class="card card-padding">

          <div class="card-title">
            <h3>Category Progress</h3>
            <span>Learning development</span>
          </div>

          <div class="lesson-list">

            ${CATEGORY_DEFINITIONS
              .map(function (category) {

                const categoryLessons =
                  getCategoryLessons(category.name);

                const done =
                  categoryLessons.filter(function (lesson) {
                    return completed.includes(lesson.id);
                  }).length;

                const percent =
                  getCategoryProgress(category.name);

                return `
                  <div
                    class="lesson-item"
                    data-category-open="${escapeHTML(category.name)}">

                    <div class="lesson-number">
                      ${category.icon}
                    </div>

                    <div class="lesson-info">

                      <h4>
                        ${escapeHTML(category.name)}
                      </h4>

                      <p>
                        ${done}/${categoryLessons.length}
                        lessons completed
                      </p>

                      <div style="margin-top:8px">
                        <div class="progress-track">
                          <div
                            class="progress-fill"
                            style="width:${percent}%">
                          </div>
                        </div>
                      </div>

                    </div>

                    <strong style="font-size:11px">
                      ${percent}%
                    </strong>

                  </div>
                `;

              })
              .join("")}

          </div>

        </div>

      </section>

      <section style="margin-top:17px">

        <div class="card card-padding">

          <div class="card-title">
            <h3>Learning Reset</h3>
            <span>Data control</span>
          </div>

          <p style="
            color:#64748b;
            font-size:10px;
            line-height:1.6;
          ">
            Progress ကို ပြန်စချင်ရင် Reset Progress ကို အသုံးပြုနိုင်ပါတယ်
          </p>

          <button
            class="btn btn-danger"
            type="button"
            data-action="reset-progress">
            Reset Learning Progress
          </button>

        </div>

      </section>
    `;
  }

  /* =======================================================
     SALES MANAGER
     ======================================================= */

  function renderSalesManager() {

    const kpi = getKPI();

    const achievement =
      getAchievement(kpi.target, kpi.actual);

    const gap =
      getGap(kpi.target, kpi.actual);

    const dailyTarget =
      kpi.workingDays > 0
        ? kpi.target / kpi.workingDays
        : 0;

    const remaining =
      Math.max(kpi.target - kpi.actual, 0);

    app.innerHTML = `
      <section class="section-header">

        <div class="eyebrow">SALES MANAGEMENT</div>

        <h2>Sales Manager Command Center</h2>

        <p>
          Target → Actual → Gap → Action ကို
          Daily Management System အဖြစ် အသုံးပြုနိုင်ပါတယ်
        </p>

      </section>

      <div class="grid grid-4">

        <div class="card kpi-big">
          <div class="kpi-big-label">Monthly Target</div>
          <div class="kpi-big-value">
            ${formatNumber(kpi.target, 1)} L
          </div>
          <div class="kpi-big-foot">
            ${kpi.workingDays} working days
          </div>
        </div>

        <div class="card kpi-big">
          <div class="kpi-big-label">Actual Sales</div>
          <div class="kpi-big-value">
            ${formatNumber(kpi.actual, 1)} L
          </div>
          <div class="kpi-big-foot">
            Current actual
          </div>
        </div>

        <div class="card kpi-big">
          <div class="kpi-big-label">Achievement</div>
          <div class="kpi-big-value">
            ${formatNumber(achievement, 1)}%
          </div>
          <div class="kpi-big-foot">
            Target achievement
          </div>
        </div>

        <div class="card kpi-big">
          <div class="kpi-big-label">Gap</div>
          <div class="kpi-big-value">
            ${formatNumber(Math.max(gap, 0), 1)} L
          </div>
          <div class="kpi-big-foot">
            Remaining ${formatNumber(remaining, 1)} L
          </div>
        </div>

      </div>

      <div class="grid grid-2" style="margin-top:17px">

        <div class="card manager-card">

          <h3>Daily Manager Numbers</h3>

          <p>
            Monthly Target ကို Working Days အလိုက်
            Daily Execution Target အဖြစ် ခွဲထားပါတယ်
          </p>

          <div class="manager-list">

            <div class="manager-list-item">
              <span>🎯</span>
              Daily Target
              <strong style="margin-left:auto">
                ${formatNumber(dailyTarget, 1)} L
              </strong>
            </div>

            <div class="manager-list-item">
              <span>📈</span>
              Current Achievement
              <strong style="margin-left:auto">
                ${formatNumber(achievement, 1)}%
              </strong>
            </div>

            <div class="manager-list-item">
              <span>⚠️</span>
              Remaining Gap
              <strong style="margin-left:auto">
                ${formatNumber(Math.max(gap, 0), 1)} L
              </strong>
            </div>

            <div class="manager-list-item">
              <span>👥</span>
              Team Size
              <strong style="margin-left:auto">
                ${formatNumber(kpi.team)}
              </strong>
            </div>

          </div>

        </div>

        <div class="card manager-card">

          <h3>Daily Manager Routine</h3>

          <p>
            Field Execution ကို Daily Management Rhythm နဲ့ ထိန်းပါ
          </p>

          <div class="manager-list">

            ${[
              "Morning Target Review",
              "Territory & Customer Priority",
              "Field Execution Monitoring",
              "Midday Gap Check",
              "End-of-Day Actual Review",
              "Next-Day Action Planning"
            ].map(function (item, index) {

              return `
                <div class="manager-list-item">
                  <span>${index + 1}</span>
                  ${escapeHTML(item)}
                </div>
              `;

            }).join("")}

          </div>

        </div>

      </div>

      <section style="margin-top:17px">

        <div class="card card-padding">

          <div class="card-title">
            <h3>Update Sales KPI</h3>
            <span>Saved locally</span>
          </div>

          <form id="salesKPIForm">

            <div class="form-grid">

              <div class="form-group">
                <label class="form-label">
                  Monthly Target
                </label>

                <input
                  class="form-control"
                  type="number"
                  step="0.1"
                  name="target"
                  value="${kpi.target}"
                  required>
              </div>

              <div class="form-group">
                <label class="form-label">
                  Actual Sales
                </label>

                <input
                  class="form-control"
                  type="number"
                  step="0.1"
                  name="actual"
                  value="${kpi.actual}"
                  required>
              </div>

              <div class="form-group">
                <label class="form-label">
                  Team Size
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="team"
                  value="${kpi.team}"
                  min="1"
                  required>
              </div>

              <div class="form-group">
                <label class="form-label">
                  Working Days
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="workingDays"
                  value="${kpi.workingDays}"
                  min="1"
                  required>
              </div>

              <div class="form-group">
                <label class="form-label">
                  Active Customers
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="customers"
                  value="${kpi.customers}"
                  min="0">
              </div>

              <div class="form-group">
                <label class="form-label">
                  Orders
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="orders"
                  value="${kpi.orders}"
                  min="0">
              </div>

            </div>

            <div class="form-actions">

              <button
                class="btn btn-primary"
                type="submit">
                Save KPI
              </button>

            </div>

          </form>

        </div>

      </section>
    `;
  }

  /* =======================================================
     KPI
     ======================================================= */

  function renderKPI() {

    const kpi = getKPI();

    const achievement =
      getAchievement(kpi.target, kpi.actual);

    const gap =
      getGap(kpi.target, kpi.actual);

    const dailyTarget =
      kpi.workingDays > 0
        ? kpi.target / kpi.workingDays
        : 0;

    app.innerHTML = `
      <section class="section-header">

        <div class="eyebrow">DATA MANAGEMENT</div>

        <h2>KPI & Analytics</h2>

        <p>
          Business Performance ကို Target, Actual,
          Achievement နဲ့ Gap အဖြစ် မြင်နိုင်အောင် စီမံထားပါတယ်
        </p>

      </section>

      <div class="grid grid-4">

        <div class="card stat-card">
          <div class="stat-label">Target</div>
          <div class="stat-value">
            ${formatNumber(kpi.target, 1)}
          </div>
          <div class="stat-foot">Monthly target</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Actual</div>
          <div class="stat-value">
            ${formatNumber(kpi.actual, 1)}
          </div>
          <div class="stat-foot">Current actual</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Achievement</div>
          <div class="stat-value">
            ${formatNumber(achievement, 1)}%
          </div>
          <div class="stat-foot">Actual ÷ Target</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Gap</div>
          <div class="stat-value">
            ${formatNumber(Math.max(gap, 0), 1)}
          </div>
          <div class="stat-foot">Target remaining</div>
        </div>

      </div>

      <div class="grid grid-2" style="margin-top:17px">

        <div class="card card-padding">

          <div class="card-title">
            <h3>Achievement Dashboard</h3>
            <span>${formatNumber(achievement, 1)}%</span>
          </div>

          <div class="progress-track" style="height:12px">
            <div
              class="progress-fill"
              style="width:${Math.min(achievement, 100)}%">
            </div>
          </div>

          <div class="grid grid-3" style="margin-top:18px">

            <div>
              <div class="stat-label">
                Daily Target
              </div>
              <strong>
                ${formatNumber(dailyTarget, 1)}
              </strong>
            </div>

            <div>
              <div class="stat-label">
                Team
              </div>
              <strong>
                ${formatNumber(kpi.team)}
              </strong>
            </div>

            <div>
              <div class="stat-label">
                Customers
              </div>
              <strong>
                ${formatNumber(kpi.customers)}
              </strong>
            </div>

          </div>

        </div>

        <div class="card card-padding">

          <div class="card-title">
            <h3>Management Formula</h3>
            <span>Core KPI</span>
          </div>

          <div class="lesson-points">

            <div class="lesson-point">
              Achievement % = Actual ÷ Target × 100
            </div>

            <div class="lesson-point">
              Gap = Target − Actual
            </div>

            <div class="lesson-point">
              Daily Target = Monthly Target ÷ Working Days
            </div>

            <div class="lesson-point">
              Productivity = Result ÷ Activity
            </div>

          </div>

        </div>

      </div>

      <section style="margin-top:17px">

        <div class="card card-padding">

          <div class="card-title">
            <h3>Manager KPI Checklist</h3>
            <span>Weekly Review</span>
          </div>

          <div class="checklist">

            <div class="check-item">
              Target ကို ရှင်းလင်းစွာ သတ်မှတ်ထားပါ
            </div>

            <div class="check-item">
              Actual Data ကို အချိန်မီ update လုပ်ပါ
            </div>

            <div class="check-item">
              Achievement % ကို စောင့်ကြည့်ပါ
            </div>

            <div class="check-item">
              Gap ရဲ့ Root Cause ကို ရှာပါ
            </div>

            <div class="check-item">
              Corrective Action နဲ့ Owner သတ်မှတ်ပါ
            </div>

          </div>

        </div>

      </section>
    `;
  }

  /* =======================================================
     BUSINESS TOOLS
     ======================================================= */

  function renderTools() {

    app.innerHTML = `
      <section class="section-header">

        <div class="eyebrow">MANAGEMENT TOOLS</div>

        <h2>Business Tools</h2>

        <p>
          Pricing, Profit, Margin, Break-even,
          Sales Target နဲ့ Growth တွက်ချက်နိုင်ပါတယ်
        </p>

      </section>

      <div class="grid grid-2">

        <div class="card tool-card">

          <div class="tool-icon">💰</div>

          <h3>Pricing Calculator</h3>

          <p>
            Cost နဲ့ Desired Margin အပေါ်မူတည်ပြီး
            Selling Price ကို တွက်ချက်ပါ
          </p>

          <form id="pricingForm">

            <div class="form-grid">

              <div class="form-group">
                <label class="form-label">
                  Cost
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="cost"
                  step="0.01"
                  required>
              </div>

              <div class="form-group">
                <label class="form-label">
                  Desired Margin %
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="margin"
                  step="0.1"
                  value="20"
                  required>
              </div>

            </div>

            <div class="form-actions">
              <button
                class="btn btn-primary"
                type="submit">
                Calculate Price
              </button>
            </div>

          </form>

          <div
            id="pricingResult"
            class="result-box">
          </div>

        </div>

        <div class="card tool-card">

          <div class="tool-icon">🎯</div>

          <h3>Sales Target Calculator</h3>

          <p>
            Monthly Target ကို Daily Target အဖြစ်ခွဲပါ
          </p>

          <form id="targetForm">

            <div class="form-grid">

              <div class="form-group">
                <label class="form-label">
                  Monthly Target
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="target"
                  step="0.1"
                  required>
              </div>

              <div class="form-group">
                <label class="form-label">
                  Working Days
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="days"
                  value="26"
                  min="1"
                  required>
              </div>

            </div>

            <div class="form-actions">
              <button
                class="btn btn-primary"
                type="submit">
                Calculate Target
              </button>
            </div>

          </form>

          <div
            id="targetResult"
            class="result-box">
          </div>

        </div>

        <div class="card tool-card">

          <div class="tool-icon">📈</div>

          <h3>Growth Calculator</h3>

          <p>
            Previous နဲ့ Current Result ကို နှိုင်းယှဉ်ပြီး Growth %
            တွက်ပါ
          </p>

          <form id="growthForm">

            <div class="form-grid">

              <div class="form-group">
                <label class="form-label">
                  Previous
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="previous"
                  step="0.1"
                  required>
              </div>

              <div class="form-group">
                <label class="form-label">
                  Current
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="current"
                  step="0.1"
                  required>
              </div>

            </div>

            <div class="form-actions">
              <button
                class="btn btn-primary"
                type="submit">
                Calculate Growth
              </button>
            </div>

          </form>

          <div
            id="growthResult"
            class="result-box">
          </div>

        </div>

        <div class="card tool-card">

          <div class="tool-icon">⚖️</div>

          <h3>Break-even Calculator</h3>

          <p>
            Fixed Cost, Selling Price နဲ့ Variable Cost ကိုသုံးပြီး
            Break-even Units တွက်ပါ
          </p>

          <form id="breakEvenForm">

            <div class="form-grid">

              <div class="form-group">
                <label class="form-label">
                  Fixed Cost
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="fixed"
                  step="0.01"
                  required>
              </div>

              <div class="form-group">
                <label class="form-label">
                  Selling Price
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="price"
                  step="0.01"
                  required>
              </div>

              <div class="form-group">
                <label class="form-label">
                  Variable Cost / Unit
                </label>

                <input
                  class="form-control"
                  type="number"
                  name="variable"
                  step="0.01"
                  required>
              </div>

            </div>

            <div class="form-actions">
              <button
                class="btn btn-primary"
                type="submit">
                Calculate Break-even
              </button>
            </div>

          </form>

          <div
            id="breakEvenResult"
            class="result-box">
          </div>

        </div>

      </div>
    `;
  }

  /* =======================================================
     REPORTS
     ======================================================= */

  function renderReports() {

    const completed =
      getCompletedCount();

    const progress =
      getProgress();

    const kpi =
      getKPI();

    const achievement =
      getAchievement(kpi.target, kpi.actual);

    const categoriesCompleted =
      CATEGORY_DEFINITIONS.filter(function (category) {

        return getCategoryProgress(category.name) === 100;

      }).length;

    app.innerHTML = `
      <section class="section-header">

        <div class="eyebrow">BUSINESS REPORTING</div>

        <h2>Business Reports</h2>

        <p>
          Learning Performance နဲ့ Business KPI ကို
          Management Review အတွက် တစ်နေရာတည်းမှာ ကြည့်နိုင်ပါတယ်
        </p>

      </section>

      <div class="grid grid-4">

        <div class="card stat-card">
          <div class="stat-label">Learning Progress</div>
          <div class="stat-value">${progress}%</div>
          <div class="stat-foot">Overall</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Completed Lessons</div>
          <div class="stat-value">${completed}</div>
          <div class="stat-foot">Out of ${lessons.length}</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Sales Achievement</div>
          <div class="stat-value">
            ${formatNumber(achievement, 1)}%
          </div>
          <div class="stat-foot">Current KPI</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Categories Complete</div>
          <div class="stat-value">
            ${categoriesCompleted}
          </div>
          <div class="stat-foot">
            Out of ${CATEGORY_DEFINITIONS.length}
          </div>
        </div>

      </div>

      <section style="margin-top:17px">

        <div class="card card-padding">

          <div class="card-title">
            <h3>Category Report</h3>
            <span>Progress analysis</span>
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

                ${CATEGORY_DEFINITIONS
                  .map(function (category) {

                    const categoryLessons =
                      getCategoryLessons(category.name);

                    const done =
                      categoryLessons.filter(function (lesson) {

                        return getCompleted()
                          .includes(lesson.id);

                      }).length;

                    const percent =
                      getCategoryProgress(category.name);

                    return `
                      <tr>

                        <td>
                          ${category.icon}
                          ${escapeHTML(category.name)}
                        </td>

                        <td>
                          ${categoryLessons.length}
                        </td>

                        <td>
                          ${done}
                        </td>

                        <td>
                          ${percent}%
                        </td>

                      </tr>
                    `;

                  })
                  .join("")}

              </tbody>

            </table>

          </div>

        </div>

      </section>

      <section style="margin-top:17px">

        <div class="card card-padding">

          <div class="card-title">
            <h3>Management Review Framework</h3>
            <span>Weekly</span>
          </div>

          <div class="grid grid-3">

            <div class="lesson-point">
              1. What happened?
            </div>

            <div class="lesson-point">
              2. Why did it happen?
            </div>

            <div class="lesson-point">
              3. What will we do next?
            </div>

          </div>

        </div>

      </section>
    `;
  }

  /* =======================================================
     AI COACH
     ======================================================= */

  function renderCoach() {

    if (!aiMessages.length) {

      aiMessages = [
        {
          role: "assistant",
          text:
            "မင်္ဂလာပါ Aung Zar Ni Win\n\n" +
            "ကျွန်တော်က AI Business Coach ပါ\n\n" +
            "Sales, Marketing, KPI, Team Management, " +
            "Business Strategy, Finance နဲ့ Business Problem တွေကို " +
            "လက်တွေ့ Action Plan အနေနဲ့ ဆွေးနွေးနိုင်ပါတယ်\n\n" +
            "အောက်က Quick Prompt တစ်ခုကိုရွေးနိုင်သလို " +
            "ကိုယ့် Problem ကို တိုက်ရိုက်ရေးနိုင်ပါတယ်"
        }
      ];

    }

    app.innerHTML = `
      <section class="section-header">

        <div class="eyebrow">AI MANAGEMENT SUPPORT</div>

        <h2>AI Business Coach</h2>

        <p>
          Business Problem ကို Situation → Analysis →
          Action Plan → KPI ပုံစံနဲ့ ဆွေးနွေးနိုင်ပါတယ်
        </p>

      </section>

      <div class="ai-layout">

        <aside class="card ai-sidebar">

          <h3>Quick Prompts</h3>

          <div class="quick-prompts">

            ${[
              "Sales Target မရတော့ ဘာလုပ်သင့်လဲ",
              "Sales Team Performance ကျနေတယ်",
              "Customer အသစ် ဘယ်လိုရှာမလဲ",
              "Marketing Plan တစ်ခုလုပ်ပေးပါ",
              "Business Profit တိုးအောင် ဘာလုပ်မလဲ",
              "Staff Performance မကောင်းရင် ဘယ်လို Manage မလဲ",
              "Sales KPI Dashboard ဘယ်လိုတည်ဆောက်မလဲ"
            ].map(function (prompt) {

              return `
                <button
                  class="quick-prompt"
                  type="button"
                  data-ai-prompt="${escapeHTML(prompt)}">
                  ${escapeHTML(prompt)}
                </button>
              `;

            }).join("")}

          </div>

        </aside>

        <section class="ai-main">

          <div id="aiMessages" class="ai-messages">

            ${renderAIMessages()}

          </div>

          <form id="aiForm" class="ai-composer">

            <textarea
              id="aiInput"
              name="message"
              placeholder="Business Problem ကို ရေးပါ..."
              required></textarea>

            <button
              class="btn btn-primary"
              type="submit">
              Send
            </button>

          </form>

        </section>

      </div>
    `;
  }

  function renderAIMessages() {

    return aiMessages.map(function (message) {

      return `
        <div class="ai-message ${message.role}">
          ${escapeHTML(message.text)}
        </div>
      `;

    }).join("");
  }

  async function askCoach(message) {

    const cleanMessage =
      String(message || "").trim();

    if (!cleanMessage) {
      return;
    }

    aiMessages.push({
      role: "user",
      text: cleanMessage
    });

    renderCoach();

    const messagesContainer =
      document.getElementById("aiMessages");

    if (messagesContainer) {
      messagesContainer.scrollTop =
        messagesContainer.scrollHeight;
    }

    try {

      const response =
        await fetch(AI_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            prompt:
              "You are an AI Business Coach for a Myanmar business manager. " +
              "Give practical, concise and actionable advice. " +
              "Use steps, numbers, KPIs and action plans when useful. " +
              "Answer in Burmese when the user writes Burmese. " +
              "Do not invent facts. " +
              "User question: " +
              cleanMessage
          })
        });

      if (!response.ok) {
        throw new Error("AI API unavailable");
      }

      const data =
        await response.json();

      const answer =
        data.answer ||
        data.response ||
        data.message ||
        data.result ||
        "";

      if (!answer) {
        throw new Error("Empty AI response");
      }

      aiMessages.push({
        role: "assistant",
        text: answer
      });

    } catch (error) {

      aiMessages.push({
        role: "assistant",
        text: getOfflineCoachAnswer(cleanMessage)
      });

    }

    renderCoach();

    setTimeout(function () {

      const container =
        document.getElementById("aiMessages");

      if (container) {
        container.scrollTop =
          container.scrollHeight;
      }

    }, 20);
  }

  function getOfflineCoachAnswer(question) {

    const q =
      question.toLowerCase();

    if (
      q.includes("sales") ||
      q.includes("target") ||
      q.includes("ရောင်း") ||
      q.includes("target မရ")
    ) {

      return (
        "Sales Target Gap ဖြစ်နေရင် ဒီ 5 Step နဲ့စစ်ပါ\n\n" +
        "1. Target vs Actual ကိုတွက်ပါ\n" +
        "2. Gap ကို Territory / Salesperson / Customer အလိုက်ခွဲပါ\n" +
        "3. Root Cause ကိုရှာပါ — Coverage, Stock, Price, Demand, Execution\n" +
        "4. Remaining Target ကို ကျန် Working Days အလိုက်ပြန်ခွဲပါ\n" +
        "5. Daily Action + Owner + Deadline ထားပါ\n\n" +
        "အဓိက KPI = Achievement %, Gap, Productive Calls, " +
        "Conversion နဲ့ Collection"
      );
    }

    if (
      q.includes("staff") ||
      q.includes("team") ||
      q.includes("ဝန်ထမ်း")
    ) {

      return (
        "Team Performance ကျရင် Result ကိုသာကြည့်မနေဘဲ\n\n" +
        "1. KPI Gap ရှာပါ\n" +
        "2. Skill Gap နဲ့ Will Gap ခွဲပါ\n" +
        "3. Coaching 1:1 လုပ်ပါ\n" +
        "4. Clear Action နဲ့ Deadline ထားပါ\n" +
        "5. Weekly Review လုပ်ပါ\n\n" +
        "Manager အနေနဲ့ လူကိုအပြစ်တင်တာထက် " +
        "Root Cause နဲ့ Capability Development ကို ဦးစားပေးပါ"
      );
    }

    if (
      q.includes("profit") ||
      q.includes("margin") ||
      q.includes("အမြတ်")
    ) {

      return (
        "Profit တိုးဖို့ Revenue တိုးတာတစ်ခုတည်း မလုံလောက်ပါ\n\n" +
        "1. Gross Margin စစ်ပါ\n" +
        "2. Discount လျှော့နိုင်မလားစစ်ပါ\n" +
        "3. Product Mix ပြောင်းနိုင်မလားစစ်ပါ\n" +
        "4. Operating Cost လျှော့နိုင်မလားစစ်ပါ\n" +
        "5. Low-profit Customer / Product ကို Review လုပ်ပါ\n\n" +
        "KPI = Revenue, Gross Margin, Operating Cost, " +
        "Net Profit"
      );
    }

    return (
      "ဒီ Problem ကို Managerial Framework နဲ့ စဉ်းစားကြည့်ပါ\n\n" +
      "1. Situation — လက်ရှိဘာဖြစ်နေလဲ\n" +
      "2. Gap — ဘာနဲ့ဘာကွာနေလဲ\n" +
      "3. Root Cause — ဘာကြောင့်ဖြစ်နေလဲ\n" +
      "4. Action — ဘာလုပ်မလဲ\n" +
      "5. KPI — Result ကို ဘယ်လိုတိုင်းမလဲ\n\n" +
      "Problem ရဲ့ Target, Actual နဲ့ လက်ရှိအခြေအနေကို " +
      "ပေးရင် ပိုတိကျတဲ့ Action Plan တည်ဆောက်နိုင်ပါတယ်"
    );
  }

  /* =======================================================
     AI TOOLS
     ======================================================= */

  function renderAITools() {

    app.innerHTML = `
      <section class="section-header">

        <div class="eyebrow">AI PRODUCTIVITY</div>

        <h2>AI Business Tools</h2>

        <p>
          AI ကို Business Planning နဲ့ Management Workflow ထဲမှာ
          အသုံးချနိုင်အောင် Quick Tools တွေထည့်ထားပါတယ်
        </p>

      </section>

      <div class="grid grid-2">

        ${renderAIToolCard(
          "📋",
          "Business Problem Solver",
          "Problem ကို Root Cause နဲ့ Action Plan အဖြစ် ပြောင်းပါ",
          "Business Problem တစ်ခုကို 5 Whys, Root Cause, Corrective Action နဲ့ KPI အဖြစ် ခွဲခြမ်းပေးပါ"
        )}

        ${renderAIToolCard(
          "🎯",
          "Sales Action Planner",
          "Sales Gap အတွက် Daily Action Plan တည်ဆောက်ပါ",
          "Sales Target မရတဲ့အခြေအနေမှာ Gap Analysis, Daily Action, Team Owner နဲ့ KPI ပါတဲ့ Action Plan ပြုလုပ်ပေးပါ"
        )}

        ${renderAIToolCard(
          "📣",
          "Marketing Idea Generator",
          "Business အတွက် Marketing Ideas ရှာပါ",
          "Myanmar SME Business တစ်ခုအတွက် Target Customer, Offer, Campaign Channel နဲ့ KPI ပါတဲ့ Marketing Campaign Ideas 5 ခု ပြုလုပ်ပေးပါ"
        )}

        ${renderAIToolCard(
          "👥",
          "Team Coaching Planner",
          "Staff Performance အတွက် Coaching Plan ပြုလုပ်ပါ",
          "Salesperson Performance ကျနေတဲ့အခြေအနေအတွက် Coaching Questions, Action Plan, KPI နဲ့ Follow-up Plan ပြုလုပ်ပေးပါ"
        )}

      </div>
    `;
  }

  function renderAIToolCard(icon, title, description, prompt) {

    return `
      <div class="card tool-card">

        <div class="tool-icon">
          ${icon}
        </div>

        <h3>${escapeHTML(title)}</h3>

        <p>${escapeHTML(description)}</p>

        <button
          class="btn btn-primary"
          type="button"
          data-ai-tool="${escapeHTML(prompt)}">
          Generate with AI →
        </button>

      </div>
    `;
  }

  /* =======================================================
     PREMIUM
     ======================================================= */

  function renderPremium() {

    const info =
      getPremiumInfo();

    app.innerHTML = `
      <section class="premium-hero">

        <div class="eyebrow" style="color:#fbbf24">
          PREMIUM MEMBERSHIP
        </div>

        <h1>
          Unlock Professional Business Academy
        </h1>

        <p>
          Complete lessons, advanced business tools,
          KPI management နဲ့ AI Business Coach ကို
          Premium Membership နဲ့ အသုံးပြုနိုင်ပါတယ်
        </p>

        ${
          info.active
            ? `
              <div style="
                margin-top:15px;
                color:#86efac;
                font-size:11px;
                font-weight:700;
              ">
                ✓ Premium Active
                • ${premiumRemainingDays()} days remaining
              </div>
            `
            : `
              <div style="
                margin-top:15px;
                color:#fbbf24;
                font-size:10px;
              ">
                Lesson 1 is free
                • Lesson 2+ requires Premium
              </div>
            `
        }

      </section>

      <div class="pricing-grid">

        ${PAYMENT_PLANS
          .map(function (plan) {

            return `
              <div class="card pricing-card ${
                plan.featured
                  ? "featured"
                  : ""
              }">

                ${
                  plan.featured
                    ? `
                      <div class="pricing-label">
                        POPULAR
                      </div>
                    `
                    : ""
                }

                <h3>
                  ${escapeHTML(plan.name)}
                </h3>

                <div class="pricing-price">
                  ${formatNumber(plan.price)} Ks
                  <span>/ ${escapeHTML(plan.duration)}</span>
                </div>

                <ul class="pricing-features">

                  <li>Full Academy Lessons</li>
                  <li>Premium Lessons 2+</li>
                  <li>Business Tools</li>
                  <li>KPI & Analytics</li>
                  <li>AI Business Coach</li>
                  <li>AI Business Tools</li>
                  <li>Professional Learning System</li>

                </ul>

                <button
                  class="btn ${
                    plan.featured
                      ? "btn-premium"
                      : "btn-primary"
                  }"
                  type="button"
                  data-plan="${plan.id}">
                  ${
                    info.active
                      ? "View Plan"
                      : "Choose Plan"
                  }
                </button>

              </div>
            `;

          })
          .join("")}

      </div>

      <section style="margin-top:17px">

        <div class="card payment-box">

          <div class="card-title">
            <h3>Payment Methods</h3>
            <span>Myanmar Payment</span>
          </div>

          <div class="payment-methods">

            ${PAYMENT_METHODS
              .map(function (method) {

                return `
                  <div class="payment-method">

                    <strong>
                      ${escapeHTML(method.name)}
                    </strong>

                    <span>
                      ${escapeHTML(method.detail)}
                    </span>

                  </div>
                `;

              })
              .join("")}

          </div>

          <div style="
            margin-top:14px;
            padding:11px;
            border-radius:8px;
            background:#fffbeb;
            color:#92400e;
            font-size:9px;
            line-height:1.6;
          ">
            Payment ပြုလုပ်ပြီးပါက Admin မှ Premium Access
            အတည်ပြုပေးရပါမယ်
          </div>

        </div>

      </section>
    `;
  }

  function showPremiumModal(lesson) {

    modalRoot.innerHTML = `
      <div class="modal-root">

        <div class="modal-card">

          <div class="modal-header">

            <h3>
              ♛ Premium Lesson
            </h3>

            <button
              class="modal-close"
              type="button"
              data-action="close-modal">
              ×
            </button>

          </div>

          <div class="modal-body">

            <div style="
              width:50px;
              height:50px;
              border-radius:12px;
              background:#fffbeb;
              display:grid;
              place-items:center;
              font-size:23px;
              margin-bottom:14px;
            ">
              ♛
            </div>

            <h3 style="
              margin:0;
              font-size:16px;
            ">
              ${escapeHTML(lesson.title)}
            </h3>

            <p style="
              color:#64748b;
              font-size:10px;
              line-height:1.7;
              margin-top:7px;
            ">
              Lesson 2 နှင့်အထက်သည် Premium Membership
              အတွက်ဖြစ်ပါတယ်
            </p>

            <div class="grid grid-3" style="
              margin-top:16px;
            ">

              ${PAYMENT_PLANS
                .map(function (plan) {

                  return `
                    <div style="
                      padding:11px;
                      border:1px solid #e2e8f0;
                      border-radius:9px;
                    ">

                      <strong style="
                        display:block;
                        font-size:10px;
                      ">
                        ${escapeHTML(plan.name)}
                      </strong>

                      <span style="
                        display:block;
                        margin-top:5px;
                        font-size:12px;
                        font-weight:800;
                      ">
                        ${formatNumber(plan.price)} Ks
                      </span>

                    </div>
                  `;

                })
                .join("")}

            </div>

          </div>

          <div class="modal-footer">

            <button
              class="btn"
              type="button"
              data-action="close-modal">
              Close
            </button>

            <button
              class="btn btn-premium"
              type="button"
              data-action="go-premium">
              View Premium Plans
            </button>

          </div>

        </div>

      </div>
    `;
  }

  function showPlanModal(planId) {

    const plan =
      PAYMENT_PLANS.find(function (item) {
        return item.id === planId;
      });

    if (!plan) {
      return;
    }

    modalRoot.innerHTML = `
      <div class="modal-root">

        <div class="modal-card">

          <div class="modal-header">

            <h3>
              ${escapeHTML(plan.name)} Premium
            </h3>

            <button
              class="modal-close"
              type="button"
              data-action="close-modal">
              ×
            </button>

          </div>

          <div class="modal-body">

            <div style="
              font-size:28px;
              font-weight:800;
            ">
              ${formatNumber(plan.price)} Ks
            </div>

            <div style="
              margin-top:4px;
              color:#64748b;
              font-size:9px;
            ">
              ${escapeHTML(plan.duration)}
            </div>

            <div style="
              margin-top:18px;
            ">

              <div class="check-item">
                Full Business Academy
              </div>

              <div class="check-item">
                Premium Lessons
              </div>

              <div class="check-item">
                Business Tools
              </div>

              <div class="check-item">
                KPI & Analytics
              </div>

              <div class="check-item">
                AI Business Coach
              </div>

            </div>

            <div style="
              margin-top:17px;
              padding:13px;
              border-radius:9px;
              background:#f8fafc;
              font-size:9px;
              color:#475569;
              line-height:1.7;
            ">
              Payment Method: KPay + CB Bank
              <br>
              Payment ပြီးပါက Admin Verification
              လိုအပ်ပါတယ်
            </div>

          </div>

          <div class="modal-footer">

            <button
              class="btn"
              type="button"
              data-action="close-modal">
              Close
            </button>

          </div>

        </div>

      </div>
    `;
  }

  /* =======================================================
     SETTINGS
     ======================================================= */

  function renderSettings() {

    const user =
      getUser();

    app.innerHTML = `
      <section class="section-header">

        <div class="eyebrow">ACCOUNT SETTINGS</div>

        <h2>Settings</h2>

        <p>
          Profile information နဲ့ Learning Data ကို စီမံနိုင်ပါတယ်
        </p>

      </section>

      <div class="grid grid-2">

        <div class="card settings-card">

          <h3>Profile</h3>

          <form id="profileForm">

            <div class="form-group">

              <label class="form-label">
                Display Name
              </label>

              <input
                class="form-control"
                type="text"
                name="name"
                value="${escapeHTML(user.name)}"
                required>

            </div>

            <div
              class="form-group"
              style="margin-top:12px">

              <label class="form-label">
                Role
              </label>

              <input
                class="form-control"
                type="text"
                name="role"
                value="${escapeHTML(user.role)}"
                required>

            </div>

            <div class="form-actions">

              <button
                class="btn btn-primary"
                type="submit">
                Save Profile
              </button>

            </div>

          </form>

        </div>

        <div class="card settings-card">

          <h3>Application</h3>

          <div class="lesson-points">

            <div class="lesson-point">
              Version: ${APP_VERSION}
            </div>

            <div class="lesson-point">
              Lessons: ${lessons.length}
            </div>

            <div class="lesson-point">
              Categories: ${CATEGORY_DEFINITIONS.length}
            </div>

            <div class="lesson-point">
              Storage: Browser LocalStorage
            </div>

          </div>

        </div>

      </div>

      <section style="margin-top:17px">

        <div class="card settings-card">

          <h3>Data Management</h3>

          <p style="
            color:#64748b;
            font-size:10px;
            line-height:1.6;
          ">
            Learning Progress ကိုသာ Reset လုပ်မလား
            App Data အားလုံးကို Reset လုပ်မလား ရွေးချယ်နိုင်ပါတယ်
          </p>

          <div class="form-actions">

            <button
              class="btn btn-danger"
              type="button"
              data-action="reset-progress">
              Reset Learning Progress
            </button>

            <button
              class="btn btn-danger"
              type="button"
              data-action="reset-all">
              Reset App Data
            </button>

          </div>

        </div>

      </section>
    `;
  }

  /* =======================================================
     RESET
     ======================================================= */

  function resetProgress() {

    const confirmed =
      window.confirm(
        "Learning Progress အားလုံးကို Reset လုပ်မလား?"
      );

    if (!confirmed) {
      return;
    }

    setCompleted([]);

    showToast(
      "Learning Progress Reset ပြီးပါပြီ",
      "success"
    );

    renderCurrentSection();
  }

  function resetAllData() {

    const confirmed =
      window.confirm(
        "App Data အားလုံးကို Reset လုပ်မလား?"
      );

    if (!confirmed) {
      return;
    }

    try {

      Object.keys(STORAGE).forEach(function (key) {
        localStorage.removeItem(STORAGE[key]);
      });

    } catch (error) {
      /* ignore */
    }

    aiMessages = [];

    updateProfileUI();
    updatePremiumUI();

    showToast(
      "App Data Reset ပြီးပါပြီ",
      "success"
    );

    goToSection("dashboard");
  }

  /* =======================================================
     CURRENT SECTION
     ======================================================= */

  function renderCurrentSection() {

    switch (currentSection) {

      case "dashboard":
        renderDashboard();
        break;

      case "academy":
        renderAcademy();
        break;

      case "lessons":
        renderLessons();
        break;

      case "progress":
        renderProgress();
        break;

      case "sales":
        renderSalesManager();
        break;

      case "kpi":
        renderKPI();
        break;

      case "tools":
        renderTools();
        break;

      case "reports":
        renderReports();
        break;

      case "coach":
        renderCoach();
        break;

      case "ai-tools":
        renderAITools();
        break;

      case "premium":
        renderPremium();
        break;

      case "settings":
        renderSettings();
        break;

      default:
        currentSection = "dashboard";
        renderDashboard();
        break;
    }
  }

  /* =======================================================
     TOAST
     ======================================================= */

  function showToast(message, type) {

    const toast =
      document.createElement("div");

    toast.className =
      "toast " + (type || "");

    toast.textContent =
      message;

    toastRoot.appendChild(toast);

    setTimeout(function () {

      toast.style.opacity = "0";
      toast.style.transform = "translateY(8px)";

      setTimeout(function () {

        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }

      }, 200);

    }, 2600);
  }

  /* =======================================================
     MODAL CLOSE
     ======================================================= */

  function closeModal() {
    modalRoot.innerHTML = "";
  }

  /* =======================================================
     EVENT DELEGATION
     ======================================================= */

  document.addEventListener("click", function (event) {

    const nav =
      event.target.closest(".nav-item");

    if (nav && nav.dataset.section) {

      goToSection(
        nav.dataset.section
      );

      return;
    }

    const sectionButton =
      event.target.closest(
        "[data-section]"
      );

    if (
      sectionButton &&
      sectionButton.dataset.section
    ) {

      goToSection(
        sectionButton.dataset.section
      );

      return;
    }

    const openButton =
      event.target.closest(
        "[data-open-lesson]"
      );

    if (openButton) {

      openLesson(
        Number(openButton.dataset.openLesson)
      );

      return;
    }

    const categoryFilter =
      event.target.closest(
        "[data-category-filter]"
      );

    if (categoryFilter) {

      currentCategory =
        categoryFilter.dataset.categoryFilter;

      renderLessons();

      return;
    }

    const categoryOpen =
      event.target.closest(
        "[data-category-open]"
      );

    if (categoryOpen) {

      currentCategory =
        categoryOpen.dataset.categoryOpen;

      currentSection = "lessons";

      updateHeader("lessons");

      document.querySelectorAll(".nav-item")
        .forEach(function (item) {

          item.classList.toggle(
            "active",
            item.dataset.section === "lessons"
          );

        });

      renderLessons();

      return;
    }

    const action =
      event.target.closest(
        "[data-action]"
      );

    if (action) {

      const actionName =
        action.dataset.action;

      if (actionName === "go-lessons") {
        goToSection("lessons");
        return;
      }

      if (actionName === "go-kpi") {
        goToSection("kpi");
        return;
      }

      if (actionName === "go-coach") {
        goToSection("coach");
        return;
      }

      if (actionName === "back-lessons") {
        goToSection("lessons");
        return;
      }

      if (actionName === "toggle-complete") {
        toggleLessonComplete();
        return;
      }

      if (actionName === "reset-progress") {
        resetProgress();
        return;
      }

      if (actionName === "reset-all") {
        resetAllData();
        return;
      }

      if (actionName === "close-modal") {
        closeModal();
        return;
      }

      if (actionName === "go-premium") {
        closeModal();
        goToSection("premium");
        return;
      }
    }

    const plan =
      event.target.closest(
        "[data-plan]"
      );

    if (plan) {

      showPlanModal(
        plan.dataset.plan
      );

      return;
    }

    const quickPrompt =
      event.target.closest(
        "[data-ai-prompt]"
      );

    if (quickPrompt) {

      goToSection("coach");

      setTimeout(function () {

        askCoach(
          quickPrompt.dataset.aiPrompt
        );

      }, 30);

      return;
    }

    const aiTool =
      event.target.closest(
        "[data-ai-tool]"
      );

    if (aiTool) {

      const prompt =
        aiTool.dataset.aiTool;

      goToSection("coach");

      setTimeout(function () {

        askCoach(prompt);

      }, 30);

      return;
    }

  });

  /* =======================================================
     INPUT EVENTS
     ======================================================= */

  document.addEventListener("input", function (event) {

    if (
      event.target &&
      event.target.id === "lessonSearch"
    ) {

      searchTerm =
        event.target.value;

      renderLessons();
    }

  });

  /* =======================================================
     FORM EVENTS
     ======================================================= */

  document.addEventListener("submit", function (event) {

    event.preventDefault();

    const form =
      event.target;

    /* SALES KPI */

    if (
      form.id === "salesKPIForm"
    ) {

      const data =
        new FormData(form);

      saveKPI({
        target: Number(data.get("target")) || 0,
        actual: Number(data.get("actual")) || 0,
        team: Number(data.get("team")) || 0,
        customers: Number(data.get("customers")) || 0,
        orders: Number(data.get("orders")) || 0,
        workingDays:
          Number(data.get("workingDays")) || 1
      });

      showToast(
        "Sales KPI Saved ✓",
        "success"
      );

      renderSalesManager();

      return;
    }

    /* PRICING */

    if (
      form.id === "pricingForm"
    ) {

      const data =
        new FormData(form);

      const cost =
        Number(data.get("cost")) || 0;

      const margin =
        Number(data.get("margin")) || 0;

      const result =
        document.getElementById(
          "pricingResult"
        );

      if (
        margin >= 100 ||
        cost <= 0
      ) {

        result.innerHTML = `
          <strong>Invalid Input</strong>
          <span>
            Cost နဲ့ Margin ကို မှန်ကန်စွာ ထည့်ပါ
          </span>
        `;

      } else {

        const price =
          cost /
          (1 - margin / 100);

        const profit =
          price - cost;

        result.innerHTML = `
          <strong>
            ${formatNumber(price, 2)}
          </strong>
          <span>
            Selling Price
            • Profit ${formatNumber(profit, 2)}
          </span>
        `;
      }

      result.classList.add("show");

      return;
    }

    /* TARGET */

    if (
      form.id === "targetForm"
    ) {

      const data =
        new FormData(form);

      const target =
        Number(data.get("target")) || 0;

      const days =
        Number(data.get("days")) || 1;

      const daily =
        target / days;

      const result =
        document.getElementById(
          "targetResult"
        );

      result.innerHTML = `
        <strong>
          ${formatNumber(daily, 2)}
        </strong>
        <span>
          Daily Target
        </span>
      `;

      result.classList.add("show");

      return;
    }

    /* GROWTH */

    if (
      form.id === "growthForm"
    ) {

      const data =
        new FormData(form);

      const previous =
        Number(data.get("previous")) || 0;

      const current =
        Number(data.get("current")) || 0;

      const result =
        document.getElementById(
          "growthResult"
        );

      if (previous === 0) {

        result.innerHTML = `
          <strong>N/A</strong>
          <span>
            Previous value သည် 0 မဖြစ်ရပါ
          </span>
        `;

      } else {

        const growth =
          (
            (current - previous) /
            previous
          ) * 100;

        result.innerHTML = `
          <strong>
            ${formatNumber(growth, 2)}%
          </strong>
          <span>
            Growth Rate
          </span>
        `;
      }

      result.classList.add("show");

      return;
    }

    /* BREAK EVEN */

    if (
      form.id === "breakEvenForm"
    ) {

      const data =
        new FormData(form);

      const fixed =
        Number(data.get("fixed")) || 0;

      const price =
        Number(data.get("price")) || 0;

      const variable =
        Number(data.get("variable")) || 0;

      const result =
        document.getElementById(
          "breakEvenResult"
        );

      const contribution =
        price - variable;

      if (
        fixed <= 0 ||
        contribution <= 0
      ) {

        result.innerHTML = `
          <strong>Invalid Input</strong>
          <span>
            Selling Price သည် Variable Cost ထက် မြင့်ရပါမယ်
          </span>
        `;

      } else {

        const units =
          fixed / contribution;

        result.innerHTML = `
          <strong>
            ${formatNumber(Math.ceil(units))}
          </strong>
          <span>
            Break-even Units
          </span>
        `;
      }

      result.classList.add("show");

      return;
    }

    /* AI */

    if (
      form.id === "aiForm"
    ) {

      const input =
        document.getElementById(
          "aiInput"
        );

      if (!input) {
        return;
      }

      const message =
        input.value.trim();

      if (!message) {
        return;
      }

      input.value = "";

      askCoach(message);

      return;
    }

    /* PROFILE */

    if (
      form.id === "profileForm"
    ) {

      const data =
        new FormData(form);

      const name =
        String(data.get("name") || "").trim();

      const role =
        String(data.get("role") || "").trim();

      if (!name || !role) {

        showToast(
          "Name နဲ့ Role ထည့်ပေးပါ",
          "error"
        );

        return;
      }

      saveUser({
        name: name,
        role: role
      });

      showToast(
        "Profile Saved ✓",
        "success"
      );

      renderSettings();

      return;
    }

  });

  /* =======================================================
     MOBILE MENU
     ======================================================= */

  const mobileMenu =
    document.getElementById(
      "mobileMenu"
    );

  const sidebarClose =
    document.getElementById(
      "sidebarClose"
    );

  if (mobileMenu) {
    mobileMenu.addEventListener(
      "click",
      openMobileMenu
    );
  }

  if (sidebarClose) {
    sidebarClose.addEventListener(
      "click",
      closeMobileMenu
    );
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener(
      "click",
      closeMobileMenu
    );
  }

  /* =======================================================
     KEYBOARD
     ======================================================= */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
      closeModal();
      closeMobileMenu();
    }

  });

  /* =======================================================
     INITIALIZE
     ======================================================= */

  function init() {

    updateProfileUI();

    updatePremiumUI();

    updateHeader(
      currentSection
    );

    renderCurrentSection();

  }

  /* =======================================================
     PUBLIC API
     ======================================================= */

  window.AungBusinessAcademy = {

    version: APP_VERSION,

    lessons: lessons,

    courseData: courseData,

    getLessonContent: getLessonContent,

    goToSection: goToSection,

    openLesson: openLesson,

    resetProgress: resetProgress,

    getCompleted: getCompleted,

    getProgress: getProgress,

    getKPI: getKPI,

    saveKPI: saveKPI,

    getPremiumInfo: getPremiumInfo,

    activatePremium: activatePremium,

    showPremiumModal: showPremiumModal

  };

  /* START */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

})();
