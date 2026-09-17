```javascript
"use strict";

/* =========================================================
   AUNG BUSINESS ACADEMY
   V15.1 STABLE PROFESSIONAL
   ========================================================= */

(function () {

  /* =======================================================
     CONFIG
     ======================================================= */

  var APP_NAME = "Aung Business Academy";
  var APP_VERSION = "V15.1";

  var API_BASE_URL = "https://aung-business-academy.onrender.com";
  var AI_API_URL = API_BASE_URL + "/api/ai";

  var USER_KEY = "aung_business_academy_user";
  var COMPLETED_KEY = "aba_completed_lessons";
  var OLD_COMPLETED_KEY = "aung_business_academy_completed";

  var PREMIUM_KEY = "aung_business_academy_premium";
  var PAYMENT_KEY = "aung_business_academy_payment";

  var KPI_KEY = "aung_business_academy_kpi";
  var SETTINGS_KEY = "aung_business_academy_settings";

  var STORAGE_VERSION = "aba_v15_1";


  /* =======================================================
     SAFE STORAGE
     ======================================================= */

  function storageGet(key, fallback) {
    try {
      var value = localStorage.getItem(key);

      if (value === null || value === undefined) {
        return fallback;
      }

      return value;
    } catch (error) {
      return fallback;
    }
  }

  function storageSet(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      return false;
    }
  }

  function storageGetJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);

      if (!raw) {
        return fallback;
      }

      var parsed = JSON.parse(raw);

      return parsed;
    } catch (error) {
      return fallback;
    }
  }

  function storageSetJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }


  /* =======================================================
     USER
     ======================================================= */

  var defaultUser = {
    name: "Aung Zar Ni Win",
    role: "Business Manager"
  };

  var savedUser = storageGetJSON(USER_KEY, defaultUser);

  if (!savedUser || typeof savedUser !== "object") {
    savedUser = defaultUser;
  }

  if (!savedUser.name) {
    savedUser.name = defaultUser.name;
  }

  if (!savedUser.role) {
    savedUser.role = defaultUser.role;
  }


  /* =======================================================
     CATEGORY DATA
     ======================================================= */

  var categoryData = [

    {
      name: "Business Fundamentals",
      icon: "💼",
      description: "Business အခြေခံမှ စီးပွားရေးတန်ဖိုးဖန်တီးမှုအထိ",
      focus: "Business model, value creation, revenue, cost, risk",
      kpis: ["Revenue", "Gross Profit", "Cash Flow"],
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
      icon: "🎯",
      description: "Strategy တည်ဆောက်ခြင်းနှင့် execution",
      focus: "SWOT, positioning, priorities, growth strategy",
      kpis: ["Growth %", "Market Share", "Execution Rate"],
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
      icon: "📈",
      description: "Sales Manager အတွက် Target, Team, Territory နှင့် Forecasting",
      focus: "Target, team performance, territory, pipeline, forecast",
      kpis: ["Achievement %", "Productivity", "Forecast Accuracy"],
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
      description: "Professional selling skills နှင့် customer conversion",
      focus: "Prospecting, discovery, presentation, objection, closing",
      kpis: ["Conversion Rate", "Average Order", "Repeat Rate"],
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
      description: "Customer relationship, retention နှင့် profitability",
      focus: "Segmentation, CX, retention, complaints, loyalty",
      kpis: ["Retention Rate", "Repeat Rate", "Active Customers"],
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
      description: "Market, customer, campaign နှင့် marketing performance",
      focus: "STP, marketing mix, campaign, digital, ROI",
      kpis: ["Leads", "Conversion", "Marketing ROI"],
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
      icon: "⭐",
      description: "Brand identity, positioning နှင့် trust",
      focus: "Identity, promise, awareness, consistency",
      kpis: ["Awareness", "Consideration", "Repeat Purchase"],
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
      description: "Business finance, cash, cost နှင့် profit management",
      focus: "Cash flow, working capital, budgeting, margin",
      kpis: ["Gross Margin", "Cash Flow", "Operating Expense"],
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
      icon: "📑",
      description: "Financial statements နှင့် P&L analysis",
      focus: "Revenue, gross profit, OPEX, EBITDA, P&L",
      kpis: ["Gross Profit", "Gross Margin", "Net Margin"],
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
      description: "Distribution, inventory, route-to-market နှင့် operations",
      focus: "Channel, stock, warehouse, delivery, service level",
      kpis: ["Fill Rate", "Stock Cover", "Distribution"],
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
      description: "Retail execution နှင့် modern trade management",
      focus: "Outlet, shelf, distribution, promotion, execution",
      kpis: ["Availability", "Distribution", "Promo Compliance"],
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
      description: "Strategic account planning နှင့် customer growth",
      focus: "Account plan, JBP, negotiation, profitability",
      kpis: ["Account Growth", "Account Margin", "Retention"],
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
      description: "Leadership, delegation, coaching နှင့် team performance",
      focus: "Goals, delegation, coaching, feedback, decisions",
      kpis: ["Goal Completion", "Coaching Frequency", "Team Performance"],
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
      description: "People management နှင့် employee development",
      focus: "Recruitment, onboarding, training, appraisal, retention",
      kpis: ["Retention", "Training Completion", "Performance"],
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
      description: "Professional negotiation နှင့် commercial outcomes",
      focus: "Preparation, BATNA, objectives, concessions",
      kpis: ["Win Rate", "Margin", "Payment Terms"],
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
      description: "New market, channel, customer နှင့် growth opportunities",
      focus: "Opportunity, market entry, partnership, acquisition",
      kpis: ["Qualified Pipeline", "New Revenue", "Conversion"],
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
      description: "Data ဖြင့် performance ကိုတိုင်းတာပြီး ဆုံးဖြတ်ခြင်း",
      focus: "KPI, target, actual, gap, trend, dashboard",
      kpis: ["Achievement", "Gap", "Trend"],
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
      icon: "🧠",
      description: "Business problem ကို root cause အထိရှာပြီး action ချမှတ်ခြင်း",
      focus: "5 Whys, Fishbone, Pareto, prioritization",
      kpis: ["Action Closure", "Recurrence Rate", "Resolution Time"],
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
      description: "Digital business နှင့် AI ကို business execution တွင်အသုံးချခြင်း",
      focus: "AI, automation, productivity, data",
      kpis: ["Time Saved", "AI Adoption", "Error Reduction"],
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
      icon: "⏱️",
      description: "Manager productivity နှင့် professional career development",
      focus: "Time, priorities, communication, career",
      kpis: ["Priority Completion", "Focus Hours", "Learning Hours"],
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

  var lessons = [];
  var lessonId = 1;

  categoryData.forEach(function (category, categoryIndex) {

    category.lessons.forEach(function (title, lessonIndex) {

      lessons.push({
        id: lessonId,
        title: title,
        category: category.name,
        icon: category.icon,
        categoryIndex: categoryIndex,
        lessonIndex: lessonIndex + 1
      });

      lessonId += 1;
    });

  });

  var TOTAL_LESSONS = lessons.length;


  /* =======================================================
     STATE
     ======================================================= */

  var state = {
    currentSection: "dashboard",
    currentLessonId: null,
    currentCategory: "All",
    searchTerm: "",
    mobileMenuOpen: false
  };


  /* =======================================================
     PREMIUM
     ======================================================= */

  var PAYMENT_PLANS = [
    {
      id: "monthly",
      name: "1 Month",
      price: 25000,
      duration: 30
    },
    {
      id: "quarterly",
      name: "3 Months",
      price: 60000,
      duration: 90
    },
    {
      id: "halfyear",
      name: "6 Months",
      price: 100000,
      duration: 180
    }
  ];

  function getPremiumInfo() {

    var premium = storageGetJSON(PREMIUM_KEY, null);

    if (!premium || !premium.active || !premium.expiry) {
      return {
        active: false,
        expiry: null,
        plan: null,
        remainingDays: 0
      };
    }

    var expiry = new Date(premium.expiry);
    var now = new Date();

    var remaining = Math.ceil(
      (expiry.getTime() - now.getTime()) /
      86400000
    );

    if (remaining <= 0) {

      storageSetJSON(PREMIUM_KEY, {
        active: false,
        expiry: null,
        plan: null
      });

      return {
        active: false,
        expiry: null,
        plan: null,
        remainingDays: 0
      };
    }

    return {
      active: true,
      expiry: premium.expiry,
      plan: premium.plan || null,
      remainingDays: remaining
    };
  }


  function isLessonFree(lesson) {
    return lesson && lesson.id === 1;
  }


  function canOpenLesson(lesson) {

    if (!lesson) {
      return false;
    }

    if (isLessonFree(lesson)) {
      return true;
    }

    return getPremiumInfo().active;
  }


  /* =======================================================
     COMPLETED LESSONS
     ======================================================= */

  function getCompleted() {

    var current = storageGetJSON(COMPLETED_KEY, null);

    if (Array.isArray(current)) {
      return current;
    }

    var old = storageGetJSON(OLD_COMPLETED_KEY, []);

    if (Array.isArray(old)) {
      storageSetJSON(COMPLETED_KEY, old);
      return old;
    }

    return [];
  }


  function setCompleted(list) {

    var unique = [];

    list.forEach(function (id) {

      var numericId = Number(id);

      if (
        numericId &&
        unique.indexOf(numericId) === -1
      ) {
        unique.push(numericId);
      }

    });

    storageSetJSON(COMPLETED_KEY, unique);
    storageSetJSON(OLD_COMPLETED_KEY, unique);

    return unique;
  }


  function isCompleted(id) {

    return getCompleted().indexOf(Number(id)) !== -1;

  }


  function toggleCompleted(id) {

    var completed = getCompleted();
    var numericId = Number(id);

    var index = completed.indexOf(numericId);

    if (index === -1) {

      completed.push(numericId);

      showToast("Lesson completed — progress saved");

    } else {

      completed.splice(index, 1);

      showToast("Lesson marked incomplete");

    }

    setCompleted(completed);

    renderCurrentSection();

  }


  /* =======================================================
     PROGRESS
     ======================================================= */

  function getProgress() {

    var completed = getCompleted();

    if (!TOTAL_LESSONS) {
      return 0;
    }

    return Math.round(
      (completed.length / TOTAL_LESSONS) * 100
    );

  }


  function categoryProgress(categoryName) {

    var categoryLessons = lessons.filter(function (lesson) {
      return lesson.category === categoryName;
    });

    if (!categoryLessons.length) {
      return 0;
    }

    var completed = getCompleted();

    var count = categoryLessons.filter(function (lesson) {
      return completed.indexOf(lesson.id) !== -1;
    }).length;

    return Math.round(
      (count / categoryLessons.length) * 100
    );

  }


  function getNextLesson() {

    var completed = getCompleted();

    var next = lessons.find(function (lesson) {
      return completed.indexOf(lesson.id) === -1;
    });

    return next || lessons[lessons.length - 1];

  }


  /* =======================================================
     FORMAT
     ======================================================= */

  function formatNumber(value) {

    var number = Number(value);

    if (!isFinite(number)) {
      number = 0;
    }

    return number.toLocaleString("en-US", {
      maximumFractionDigits: 2
    });

  }


  function formatKs(value) {

    return formatNumber(value) + " Ks";

  }


  function escapeHtml(value) {

    if (value === null || value === undefined) {
      return "";
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* =======================================================
     DATE
     ======================================================= */

  function getTodayText() {

    try {

      return new Intl.DateTimeFormat(
        "en-US",
        {
          weekday: "short",
          month: "short",
          day: "numeric",
          year: "numeric"
        }
      ).format(new Date());

    } catch (error) {

      return new Date().toDateString();

    }

  }


  /* =======================================================
     CATEGORY GUIDE
     ======================================================= */

  function getCategoryGuide(categoryName) {

    var category = categoryData.find(function (item) {
      return item.name === categoryName;
    });

    if (category) {
      return category;
    }

    return {
      name: categoryName,
      icon: "📘",
      description: "Professional business learning",
      focus: "Business execution",
      kpis: ["Target", "Actual", "Achievement"]
    };

  }


  /* =======================================================
     LESSON CONTENT ENGINE
     ======================================================= */

  function getLessonContent(lesson) {

    var guide = getCategoryGuide(lesson.category);

    var objective = "";
    var concept = "";
    var managerApplication = "";
    var example = "";
    var actionPlan = "";
    var mistakes = [];
    var checklist = [];
    var practice = "";

    switch (lesson.category) {

      case "Sales Management":

        objective =
          "Sales Target ကို team, territory နှင့် daily execution အဖြစ်ခွဲပြီး manager အနေနဲ့ performance ကို control လုပ်နိုင်ရန်";

        concept =
          "Sales Management ဆိုတာ target တစ်ခုချမှတ်ပြီး salesperson activity, customer coverage, pipeline, conversion, forecast နှင့် result ကို စနစ်တကျစီမံခြင်းဖြစ်သည်";

        managerApplication =
          "နေ့စဉ် target → actual → gap ကိုကြည့်ပြီး gap ဖြစ်ရတဲ့အကြောင်းရင်းကို activity level အထိဆင်းစစ်ပါ";

        example =
          "Monthly target 500 L ရှိပြီး actual 385 L ဆိုရင် achievement 77% ဖြစ်ပြီး gap 115 L ရှိသည်။ Manager အနေနဲ့ gap ကို salesperson, territory, customer နှင့် product အလိုက်ခွဲပြီး recovery plan ချရမည်";

        actionPlan =
          "ဒီနေ့ team တစ်ယောက်ချင်းစီအတွက် target, actual, gap, active customers, productive calls နှင့် expected orders ကို review လုပ်ပါ";

        mistakes = [
          "Target ကို result အနေနဲ့ပဲကြည့်ပြီး activity မစစ်ခြင်း",
          "Forecast ကို evidence မရှိဘဲခန့်မှန်းခြင်း",
          "Gap ဖြစ်မှသာ team ကို follow-up လုပ်ခြင်း",
          "Customer coverage နဲ့ sales result ကိုမချိတ်ခြင်း"
        ];

        checklist = [
          "Daily target သတ်မှတ်ထားခြင်း",
          "Salesperson တစ်ယောက်ချင်းစီ actual စစ်ခြင်း",
          "Gap reason သိရှိခြင်း",
          "Recovery action သတ်မှတ်ခြင်း",
          "Next review time သတ်မှတ်ခြင်း"
        ];

        practice =
          "မိမိ team ရဲ့ monthly target ကို salesperson တစ်ယောက်ချင်းစီအလိုက် daily target အဖြစ်ခွဲပြီး gap recovery plan တစ်ခုရေးပါ";

        break;


      case "Sales Skills":

        objective =
          "Customer need ကိုရှာဖွေပြီး value ကိုတင်ပြကာ objection ကိုဖြေရှင်းပြီး conversion မြှင့်တင်ရန်";

        concept =
          "Professional selling မှာ product အကြောင်းပြောခြင်းထက် customer ရဲ့ problem, need, budget နှင့် buying reason ကိုရှာဖွေခြင်းက အဓိကဖြစ်သည်";

        managerApplication =
          "Salesperson call observation ပြုလုပ်ပြီး opening, questioning, listening, presentation, objection handling နှင့် closing အဆင့်တိုင်းကို coach လုပ်ပါ";

        example =
          "Customer က price မြင့်တယ်လို့ပြောလျှင် discount ပေးရန်အလျင်မလိုဘဲ price objection ရဲ့နောက်ကွယ်က value, budget သို့မဟုတ် competitor offer ကိုရှာဖွေပါ";

        actionPlan =
          "နောက် customer visit ၃ ကြိမ်မှာ product presentation မလုပ်ခင် customer ကို အနည်းဆုံး open-ended questions ၃ ခုမေးပါ";

        mistakes = [
          "Customer မပြောခင် product အကြောင်းများစွာပြောခြင်း",
          "Objection ကို discount နဲ့ပဲဖြေရှင်းခြင်း",
          "Closing မတောင်းခြင်း",
          "Follow-up မစနစ်တကျလုပ်ခြင်း"
        ];

        checklist = [
          "Customer need ရှာပြီးပြီလား",
          "Pain point သိပြီလား",
          "Value ကို need နဲ့ချိတ်ထားလား",
          "Objection reason ရှာပြီးပြီလား",
          "Next step ရှင်းလင်းလား"
        ];

        practice =
          "Customer တစ်ယောက်ကိုရောင်းမယ်လို့ယူဆပြီး discovery questions ၅ ခုနှင့် objection response ၃ ခုရေးပါ";

        break;


      case "Marketing":

        objective =
          "Target customer ကိုမှန်ကန်စွာသတ်မှတ်ပြီး marketing activity ကို measurable result နဲ့ချိတ်ဆက်ရန်";

        concept =
          "Marketing ဟာ awareness ဖန်တီးခြင်းတစ်ခုတည်းမဟုတ်ဘဲ right customer ကိုရောက်ရှိစေပြီး lead, conversion, repeat purchase နဲ့ revenue တိုးစေရန်လုပ်ဆောင်ခြင်းဖြစ်သည်";

        managerApplication =
          "Campaign တိုင်းမှာ objective, target audience, activity, budget နှင့် KPI ကို campaign မစခင်သတ်မှတ်ပါ";

        example =
          "Campaign budget 1,000,000 Ks သုံးပြီး qualified leads 200 ရရှိကာ customers 20 ဦး convert ဖြစ်ပါက lead-to-customer conversion ကိုတွက်ပြီး ROI ကို sales value နဲ့စစ်ရမည်";

        actionPlan =
          "လက်ရှိ product တစ်ခုအတွက် target customer, key message, channel, budget နှင့် KPI ၅ ခုပါတဲ့ mini campaign plan ရေးပါ";

        mistakes = [
          "Likes နှင့် views ကို business result လို့ယူဆခြင်း",
          "Target customer မသတ်မှတ်ခြင်း",
          "Campaign KPI မရှိခြင်း",
          "Post များပေမယ့် conversion မတိုင်းတာခြင်း"
        ];

        checklist = [
          "Target customer ရှင်းလင်းလား",
          "Campaign objective ရှိလား",
          "Key message ရှိလား",
          "Budget သတ်မှတ်ထားလား",
          "Result KPI ရှိလား"
        ];

        practice =
          "မိမိ business အတွက် 7-day marketing campaign တစ်ခုကို target, message, channel, budget, KPI အဖြစ်ရေးဆွဲပါ";

        break;


      case "Finance":
      case "Accounting & P&L":

        objective =
          "Business ရဲ့ revenue, cost, margin, profit နှင့် cash flow ကို management decision အတွက်အသုံးချနိုင်ရန်";

        concept =
          "Revenue တိုးခြင်းတစ်ခုတည်းနဲ့ business ကောင်းမွန်တယ်လို့မဆိုနိုင်ပါ။ Gross margin, operating expenses, cash flow နှင့် net profit ကိုအတူတကွကြည့်ရသည်";

        managerApplication =
          "လစဉ် P&L ကို revenue → COGS → gross profit → OPEX → operating profit အဖြစ်ခွဲပြီး ဘယ်နေရာက performance ကိုထိခိုက်နေတယ်ဆိုတာရှာပါ";

        example =
          "Sales 100 million Ks ဖြစ်သော်လည်း gross margin ကျဆင်းပြီး operating expenses တက်လာလျှင် sales growth ရှိပေမယ့် profit မတက်နိုင်ပါ";

        actionPlan =
          "နောက်ဆုံးလ revenue, cost, gross profit နှင့် operating expenses ကို စာရင်းပြုစုပြီး margin ပြောင်းလဲမှုကိုစစ်ပါ";

        mistakes = [
          "Sales တက်တာကို profit တက်တာလို့ယူဆခြင်း",
          "Cash flow မစောင့်ကြည့်ခြင်း",
          "Discount ရဲ့ margin impact မတွက်ခြင်း",
          "Expense ကို category အလိုက်မခွဲခြင်း"
        ];

        checklist = [
          "Revenue သိလား",
          "COGS သိလား",
          "Gross margin တွက်ပြီးလား",
          "OPEX စစ်ပြီးလား",
          "Cash flow စစ်ပြီးလား"
        ];

        practice =
          "မိမိ business ရဲ့ monthly sales, cost နဲ့ expenses ကိုအသုံးပြုပြီး gross profit နှင့် gross margin တွက်ပါ";

        break;


      case "Leadership & Management":
      case "People & HR":

        objective =
          "Team ကို goal တစ်ခုတည်းအောက်မှာ စုစည်းပြီး performance နဲ့ people development ကိုတစ်ပြိုင်တည်းတိုးတက်စေရန်";

        concept =
          "Manager ရဲ့တာဝန်ဟာ ကိုယ်တိုင်အလုပ်လုပ်ခြင်းထက် team က repeatable process နဲ့ result ထုတ်နိုင်အောင် goal, role, coaching, feedback နှင့် accountability တည်ဆောက်ခြင်းဖြစ်သည်";

        managerApplication =
          "Team member တစ်ယောက်ချင်းစီအတွက် expected result, current performance, capability gap နှင့် coaching action သတ်မှတ်ပါ";

        example =
          "Salesperson တစ်ယောက် target မပြည့်လျှင် motivation မရှိဘူးလို့ချက်ချင်းမဆုံးဖြတ်ဘဲ skill gap, territory issue, customer coverage နှင့် activity level ကိုခွဲစစ်ပါ";

        actionPlan =
          "Team member တစ်ယောက်ရွေးပြီး performance gap တစ်ခု၊ root cause တစ်ခုနှင့် coaching action တစ်ခုရေးပါ";

        mistakes = [
          "Problem ဖြစ်တိုင်း manager ကိုယ်တိုင်ဝင်လုပ်ခြင်း",
          "Clear expectation မပေးခြင်း",
          "Feedback ကို performance review အချိန်မှပဲပေးခြင်း",
          "Coaching နဲ့ criticism ကိုရောထွေးခြင်း"
        ];

        checklist = [
          "Goal ရှင်းလင်းလား",
          "Role ရှင်းလင်းလား",
          "Performance gap သိလား",
          "Coaching action ရှိလား",
          "Follow-up date ရှိလား"
        ];

        practice =
          "Team member တစ်ယောက်အတွက် 15-minute coaching session plan တစ်ခုရေးပါ";

        break;


      case "KPI & Data Analysis":

        objective =
          "Target နှင့် actual data ကိုအသုံးပြုပြီး performance gap နဲ့ action priority ကိုသိရှိရန်";

        concept =
          "KPI ဆိုတာ number ပြသရုံမဟုတ်ဘဲ business objective ကိုတိုင်းတာနိုင်ပြီး action ချမှတ်နိုင်တဲ့ measurement ဖြစ်ရသည်";

        managerApplication =
          "KPI dashboard မှာ target, actual, achievement %, gap နှင့် trend ကိုအနည်းဆုံးထည့်ပြီး red/amber/green priority သတ်မှတ်ပါ";

        example =
          "Target 500, Actual 385 ဆိုရင် achievement = 77% ဖြစ်ပြီး gap = 115 ဖြစ်သည်။ နောက်တစ်ဆင့်မှာ gap ရဲ့ root cause ကိုရှာပြီး recovery action ချရမည်";

        actionPlan =
          "မိမိလုပ်ငန်းအတွက် revenue, achievement, customer, productivity, collection စတဲ့ KPI ၅ ခုသတ်မှတ်ပါ";

        mistakes = [
          "KPI များလွန်းခြင်း",
          "Action နဲ့မချိတ်ခြင်း",
          "Actual data မမှန်ခြင်း",
          "Trend မကြည့်ခြင်း"
        ];

        checklist = [
          "Target ရှိလား",
          "Actual ရှိလား",
          "Achievement တွက်ပြီးလား",
          "Gap သိလား",
          "Action သတ်မှတ်ပြီးလား"
        ];

        practice =
          "Target 500 နှင့် Actual 385 ကိုအသုံးပြုပြီး achievement %, gap နှင့် recovery target တွက်ပါ";

        break;


      case "Problem Solving & Decision Making":

        objective =
          "Business problem ကို symptom အဆင့်မှာမရပ်ဘဲ root cause အထိရှာဖွေပြီး measurable action ချမှတ်ရန်";

        concept =
          "Problem solving မှာ What happened ကိုသိရုံမလုံလောက်ပါ။ Why happened ကိုရှာပြီး corrective action နဲ့ preventive action ခွဲခြားရန်လိုသည်";

        managerApplication =
          "Problem တစ်ခုကို 5 Whys, Fishbone သို့မဟုတ် Pareto analysis အသုံးပြုပြီး root cause ကိုရှာပါ";

        example =
          "Sales ကျသွားတယ်ဆိုတာ problem symptom ဖြစ်သည်။ Customer visits ကျသွားတာလား, stock out ဖြစ်တာလား, price issue လား, competitor activity လားဆိုတာဆက်ရှာရမည်";

        actionPlan =
          "လက်ရှိ business problem တစ်ခုရွေးပြီး 5 Whys ကိုအသုံးပြုပါ";

        mistakes = [
          "Symptom ကို root cause လို့ယူဆခြင်း",
          "Data မရှိဘဲဆုံးဖြတ်ခြင်း",
          "Action owner မသတ်မှတ်ခြင်း",
          "Review date မထားခြင်း"
        ];

        checklist = [
          "Problem statement ရှင်းလား",
          "Evidence ရှိလား",
          "Root cause ရှာပြီးလား",
          "Action owner ရှိလား",
          "Review date ရှိလား"
        ];

        practice =
          "မိမိလုပ်ငန်းမှာဖြစ်နေတဲ့ problem တစ်ခုကိုရွေးပြီး 5 Whys analysis ပြုလုပ်ပါ";

        break;


      case "Digital Business & AI":

        objective =
          "AI နှင့် digital tools ကို repetitive work လျှော့ချခြင်း၊ analysis မြန်စေခြင်းနှင့် decision support အတွက်အသုံးချရန်";

        concept =
          "AI ကို human judgement အစားထိုးရန်ထက် research, drafting, analysis, planning, summarization နှင့် productivity တိုးမြှင့်ရန်အသုံးပြုနိုင်သည်";

        managerApplication =
          "နေ့စဉ် repetitive task ၃ ခုရွေးပြီး AI နဲ့ automation လုပ်နိုင်မလားစစ်ပါ";

        example =
          "Weekly sales report ကို manually summary လုပ်မယ့်အစား structured data ထည့်ပြီး AI ကို trend, gap, risk နှင့် action recommendation ပြုလုပ်ခိုင်းနိုင်သည်";

        actionPlan =
          "မိမိနေ့စဉ်လုပ်ငန်းထဲက repetitive task ၃ ခုစာရင်းလုပ်ပြီး AI အသုံးချနိုင်တဲ့ prompt တစ်ခုစီရေးပါ";

        mistakes = [
          "AI output ကိုမစစ်ဘဲအသုံးပြုခြင်း",
          "Sensitive data ကိုမစဉ်းစားဘဲထည့်ခြင်း",
          "Prompt မရှင်းလင်းခြင်း",
          "AI ကို decision maker အဖြစ်သုံးခြင်း"
        ];

        checklist = [
          "Task ကိုရှင်းလင်းစွာသတ်မှတ်ထားလား",
          "Input data မှန်လား",
          "Expected output ရှင်းလား",
          "AI output verify လုပ်ပြီးလား",
          "Final decision ကိုmanager ကစစ်ပြီးလား"
        ];

        practice =
          "မိမိလုပ်ငန်းအတွက် AI ကိုအသုံးချနိုင်တဲ့ task ၅ ခုစာရင်းပြုစုပြီး အကျိုးကျေးဇူးတစ်ခုစီရေးပါ";

        break;


      default:

        objective =
          guide.description + " ကိုနားလည်ပြီး လက်တွေ့ business execution မှာအသုံးချနိုင်ရန်";

        concept =
          lesson.title +
          " ဟာ " +
          guide.name +
          " အတွင်းက အရေးကြီးတဲ့ management concept တစ်ခုဖြစ်ပြီး theory ထက် practical execution ကိုအဓိကထားရမည်";

        managerApplication =
          "ဒီ concept ကိုမိမိလုပ်ငန်းရဲ့ current situation တစ်ခုနဲ့ချိတ်ပြီး target, action, owner နှင့် review date သတ်မှတ်ပါ";

        example =
          "Manager တစ်ယောက်အနေနဲ့ concept ကိုသိရုံမဟုတ်ဘဲ လက်ရှိ business situation တစ်ခုမှာအသုံးချပြီး measurable result နဲ့ပြန်လည်သုံးသပ်ရမည်";

        actionPlan =
          "ဒီနေ့အတွင်း " +
          lesson.title +
          " ကိုမိမိလုပ်ငန်းမှာအသုံးချနိုင်မယ့် action တစ်ခုကိုစတင်ပါ";

        mistakes = [
          "Concept ကိုသိရုံနဲ့ လက်တွေ့မအသုံးချခြင်း",
          "Objective မသတ်မှတ်ခြင်း",
          "KPI မထားခြင်း",
          "Review မလုပ်ခြင်း"
        ];

        checklist = [
          "Concept နားလည်ပြီလား",
          "Business situation နဲ့ချိတ်ထားလား",
          "Action တစ်ခုသတ်မှတ်ပြီးလား",
          "KPI တစ်ခုရှိလား",
          "Review date သတ်မှတ်ပြီးလား"
        ];

        practice =
          lesson.title +
          " ကိုအသုံးချပြီး မိမိ business အတွက် mini action plan တစ်ခုရေးပါ";

        break;

    }


    return {

      objective: objective,
      concept: concept,
      importance:
        "ဒီ lesson ကို manager အနေနဲ့လေ့လာရခြင်းရဲ့အဓိကရည်ရွယ်ချက်က " +
        guide.focus +
        " ကို business result နဲ့ချိတ်ဆက်နိုင်ရန်ဖြစ်သည်",

      details: [
        "Step 1 — လက်ရှိအခြေအနေကို data နဲ့သတ်မှတ်ပါ",
        "Step 2 — Target သို့မဟုတ် desired outcome ကိုသတ်မှတ်ပါ",
        "Step 3 — Gap သို့မဟုတ် root cause ကိုရှာပါ",
        "Step 4 — Action, owner နှင့် deadline သတ်မှတ်ပါ",
        "Step 5 — KPI နဲ့ result ကိုပြန်လည်သုံးသပ်ပါ"
      ],

      example: example,

      managerApplication: managerApplication,

      kpis: guide.kpis,

      mistakes: mistakes,

      checklist: checklist,

      actionPlan: actionPlan,

      practice: practice,

      summary:
        lesson.title +
        " ကိုလေ့လာပြီးနောက် concept → application → KPI → review ဆိုတဲ့ management cycle နဲ့ပြန်အသုံးချပါ"

    };

  }


  /* =======================================================
     APP HTML HELPERS
     ======================================================= */

  function appRoot() {
    return document.getElementById("app");
  }


  function renderError(title, message) {

    var root = appRoot();

    if (!root) {
      return;
    }

    root.innerHTML =
      '<div class="error-card">' +
        '<h3>' + escapeHtml(title) + '</h3>' +
        '<p>' + escapeHtml(message) + '</p>' +
        '<button class="primary-btn" data-action="go-dashboard">Back to Dashboard</button>' +
      '</div>';

  }


  function renderLoading() {

    var root = appRoot();

    if (!root) {
      return;
    }

    root.innerHTML =
      '<div class="loading-screen">' +
        '<div class="loading-card">' +
          '<div class="loading-logo">AZ</div>' +
          '<div class="loading-spinner"></div>' +
          '<h2>Loading Aung Business Academy</h2>' +
          '<p>Preparing your business learning workspace</p>' +
        '</div>' +
      '</div>';

  }


  /* =======================================================
     NAVIGATION DATA
     ======================================================= */

  var sectionMeta = {

    dashboard: {
      title: "Dashboard",
      subtitle: "Business Management Command Center"
    },

    academy: {
      title: "Business Academy",
      subtitle: "Professional business learning system"
    },

    lessons: {
      title: "Business Lessons",
      subtitle: "Practical lessons for business managers"
    },

    progress: {
      title: "Learning Progress",
      subtitle: "Track your academy performance"
    },

    sales: {
      title: "Sales Manager",
      subtitle: "Daily sales execution and team control"
    },

    kpi: {
      title: "KPI & Analytics",
      subtitle: "Target, actual, achievement and gap"
    },

    tools: {
      title: "Business Tools",
      subtitle: "Practical business calculators"
    },

    reports: {
      title: "Business Reports",
      subtitle: "Management reporting and review"
    },

    ai: {
      title: "AI Business Coach",
      subtitle: "Practical AI support for business decisions"
    },

    aiTools: {
      title: "AI Business Tools",
      subtitle: "AI-powered business productivity tools"
    },

    premium: {
      title: "Premium Membership",
      subtitle: "Unlock the complete academy"
    },

    settings: {
      title: "Settings",
      subtitle: "Manage your academy workspace"
    }

  };


  function updateTopbar() {

    var meta = sectionMeta[state.currentSection] || sectionMeta.dashboard;

    var title = document.getElementById("page-title");
    var subtitle = document.getElementById("page-subtitle");
    var date = document.getElementById("today-date");

    if (title) {
      title.textContent = meta.title;
    }

    if (subtitle) {
      subtitle.textContent = meta.subtitle;
    }

    if (date) {
      date.textContent = getTodayText();
    }

  }


  function updateProfileUI() {

    var elements = document.querySelectorAll(
      "[data-user-name]"
    );

    elements.forEach(function (element) {
      element.textContent = savedUser.name;
    });

    var roleElements = document.querySelectorAll(
      "[data-user-role]"
    );

    roleElements.forEach(function (element) {
      element.textContent = savedUser.role;
    });

  }


  function updateNavigation() {

    var navItems = document.querySelectorAll(
      ".nav-item[data-section]"
    );

    navItems.forEach(function (item) {

      var section = item.getAttribute("data-section");

      if (section === state.currentSection) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }

    });

  }


  function closeMobileMenu() {

    state.mobileMenuOpen = false;

    var sidebar = document.querySelector(".sidebar");
    var overlay = document.querySelector(".mobile-overlay");

    if (sidebar) {
      sidebar.classList.remove("mobile-open");
    }

    if (overlay) {
      overlay.classList.remove("active");
    }

  }


  function toggleMobileMenu() {

    state.mobileMenuOpen = !state.mobileMenuOpen;

    var sidebar = document.querySelector(".sidebar");
    var overlay = document.querySelector(".mobile-overlay");

    if (sidebar) {
      sidebar.classList.toggle(
        "mobile-open",
        state.mobileMenuOpen
      );
    }

    if (overlay) {
      overlay.classList.toggle(
        "active",
        state.mobileMenuOpen
      );
    }

  }


  function goToSection(section) {

    if (!sectionMeta[section]) {
      section = "dashboard";
    }

    state.currentSection = section;
    state.currentLessonId = null;

    closeMobileMenu();

    updateTopbar();
    updateNavigation();

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

    var root = appRoot();

    var completed = getCompleted();
    var progress = getProgress();
    var next = getNextLesson();

    var premium = getPremiumInfo();

    var html = "";

    html +=
      '<section class="app-section active">';

    html +=
      '<div class="welcome-section">' +
        '<div>' +
          '<span class="eyebrow">BUSINESS MANAGEMENT COMMAND CENTER</span>' +
          '<h2>Welcome back, <span>' +
            escapeHtml(savedUser.name) +
          '</span></h2>' +
          '<p>Manage your learning, sales execution, KPI and business decisions from one workspace</p>' +
        '</div>' +
        '<button class="primary-btn" data-action="continue-learning">' +
          'Continue Learning →' +
        '</button>' +
      '</div>';

    html +=
      '<div class="stat-grid">' +

        '<div class="stat-card">' +
          '<div class="stat-icon">📚</div>' +
          '<div>' +
            '<span>Total Lessons</span>' +
            '<strong>' + TOTAL_LESSONS + '</strong>' +
          '</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-icon">✓</div>' +
          '<div>' +
            '<span>Completed</span>' +
            '<strong>' + completed.length + '</strong>' +
          '</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-icon">%</div>' +
          '<div>' +
            '<span>Learning Progress</span>' +
            '<strong>' + progress + '%</strong>' +
          '</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-icon">⭐</div>' +
          '<div>' +
            '<span>Membership</span>' +
            '<strong>' +
              (premium.active ? "Premium" : "Basic") +
            '</strong>' +
          '</div>' +
        '</div>' +

      '</div>';

    html +=
      '<div class="dashboard-grid">';

    html +=
      '<div class="panel">' +
        '<div class="panel-header">' +
          '<h3>Learning Progress</h3>' +
          '<span>' + completed.length + ' / ' + TOTAL_LESSONS + '</span>' +
        '</div>' +

        '<div class="big-progress">' +
          '<div class="progress-circle" style="background: radial-gradient(circle at center,#fff 55%,transparent 56%), conic-gradient(#2563eb ' +
            (progress * 3.6) +
            'deg,#e2e8f0 0deg)">' +
            progress + '%' +
          '</div>' +

          '<div class="progress-summary">' +
            '<strong>Business Management Learning</strong>' +
            '<p>Complete practical lessons and apply them to your daily management work</p>' +
            '<div class="progress-track">' +
              '<div class="progress-fill" style="width:' +
                progress +
                '%"></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    html +=
      '<div class="panel">' +
        '<div class="panel-header">' +
          '<h3>Business Snapshot</h3>' +
        '</div>' +

        '<div class="mini-kpi-grid">' +

          '<div class="mini-kpi">' +
            '<span>Lessons</span>' +
            '<strong>' + TOTAL_LESSONS + '</strong>' +
          '</div>' +

          '<div class="mini-kpi">' +
            '<span>Categories</span>' +
            '<strong>' + categoryData.length + '</strong>' +
          '</div>' +

          '<div class="mini-kpi">' +
            '<span>Completed</span>' +
            '<strong>' + completed.length + '</strong>' +
          '</div>' +

          '<div class="mini-kpi">' +
            '<span>Premium</span>' +
            '<strong>' +
              (premium.active ? premium.remainingDays + "d" : "Basic") +
            '</strong>' +
          '</div>' +

        '</div>' +
      '</div>';

    html += '</div>';

    html +=
      '<div class="panel continue-panel">' +

        '<div class="panel-header">' +
          '<h3>Continue Learning</h3>' +
          '<button class="text-btn" data-action="open-lessons">View All</button>' +
        '</div>' +

        '<div class="continue-lesson-card">' +

          '<div class="continue-placeholder">' +

            '<span>' + escapeHtml(next.icon) + '</span>' +

            '<div style="flex:1;min-width:0">' +
              '<strong>' +
                escapeHtml(next.title) +
              '</strong>' +

              '<p>' +
                escapeHtml(next.category) +
                ' • Lesson ' +
                next.lessonIndex +
              '</p>' +
            '</div>' +

            '<button class="primary-btn" data-action="open-lesson" data-lesson-id="' +
              next.id +
            '">' +
              'Open Lesson' +
            '</button>' +

          '</div>' +

        '</div>' +

      '</div>';

    html +=
      '<div class="section-heading">' +
        '<h3>Business Learning Areas</h3>' +
        '<button class="text-btn" data-action="open-academy">View Academy</button>' +
      '</div>';

    html += '<div class="category-grid">';

    categoryData.slice(0, 6).forEach(function (category) {

      html +=
        '<div class="category-card" data-action="open-category" data-category="' +
          escapeHtml(category.name) +
        '">' +

          '<div class="category-icon">' +
            category.icon +
          '</div>' +

          '<h3>' +
            escapeHtml(category.name) +
          '</h3>' +

          '<p>' +
            escapeHtml(category.description) +
          '</p>' +

          '<div class="category-card-footer">' +
            '<span>' +
              category.lessons.length +
              ' lessons' +
            '</span>' +
            '<strong>' +
              categoryProgress(category.name) +
              '%' +
            '</strong>' +
          '</div>' +

        '</div>';

    });

    html += '</div>';

    html += '</section>';

    root.innerHTML = html;

  }


  /* =======================================================
     ACADEMY
     ======================================================= */

  function renderAcademy() {

    var root = appRoot();

    var completed = getCompleted();

    var html =
      '<section class="app-section active">' +

        '<div class="section-hero">' +

          '<div>' +
            '<span class="eyebrow">PROFESSIONAL BUSINESS ACADEMY</span>' +
            '<h2>Business Academy</h2>' +
            '<p>' +
              'Practical business management knowledge organized into professional learning categories' +
            '</p>' +
          '</div>' +

          '<div class="lesson-count-box">' +
            '<strong>' + TOTAL_LESSONS + '</strong>' +
            '<span>Total Lessons</span>' +
          '</div>' +

        '</div>';

    html +=
      '<div class="academy-stats">' +

        '<div class="academy-stat">' +
          '<span>Total Lessons</span>' +
          '<strong>' + TOTAL_LESSONS + '</strong>' +
        '</div>' +

        '<div class="academy-stat">' +
          '<span>Categories</span>' +
          '<strong>' + categoryData.length + '</strong>' +
        '</div>' +

        '<div class="academy-stat">' +
          '<span>Completed</span>' +
          '<strong>' + completed.length + '</strong>' +
        '</div>' +

        '<div class="academy-stat">' +
          '<span>Progress</span>' +
          '<strong>' + getProgress() + '%</strong>' +
        '</div>' +

      '</div>';

    html +=
      '<div class="section-heading">' +
        '<h3>Learning Categories</h3>' +
      '</div>';

    html += '<div class="category-grid large">';

    categoryData.forEach(function (category) {

      html +=
        '<div class="category-card" data-action="open-category" data-category="' +
          escapeHtml(category.name) +
        '">' +

          '<div class="category-icon">' +
            category.icon +
          '</div>' +

          '<h3>' +
            escapeHtml(category.name) +
          '</h3>' +

          '<p>' +
            escapeHtml(category.description) +
          '</p>' +

          '<div class="category-card-footer">' +
            '<span>' +
              category.lessons.length +
              ' lessons' +
            '</span>' +

            '<strong>' +
              categoryProgress(category.name) +
              '%' +
            '</strong>' +
          '</div>' +

          '<div class="progress-track" style="margin-top:10px">' +
            '<div class="progress-fill" style="width:' +
              categoryProgress(category.name) +
            '%"></div>' +
          '</div>' +

        '</div>';

    });

    html += '</div>';

    html += '</section>';

    root.innerHTML = html;

  }


  /* =======================================================
     LESSONS
     ======================================================= */

  function getFilteredLessons() {

    var result = lessons.slice();

    if (state.currentCategory !== "All") {

      result = result.filter(function (lesson) {
        return lesson.category === state.currentCategory;
      });

    }

    var search = state.searchTerm.trim().toLowerCase();

    if (search) {

      result = result.filter(function (lesson) {

        return (
          lesson.title.toLowerCase().indexOf(search) !== -1 ||
          lesson.category.toLowerCase().indexOf(search) !== -1
        );

      });

    }

    return result;

  }


  function renderLessons() {

    var root = appRoot();

    var filtered = getFilteredLessons();

    var html =
      '<section class="app-section active">' +

        '<div class="section-hero compact">' +

          '<div>' +
            '<span class="eyebrow">PRACTICAL BUSINESS LEARNING</span>' +
            '<h2>Business Lessons</h2>' +
            '<p>' +
              'Lesson 1 is free. Premium membership unlocks the complete academy' +
            '</p>' +
          '</div>' +

          '<div class="lesson-count-box">' +
            '<strong>' + filtered.length + '</strong>' +
            '<span>Showing Lessons</span>' +
          '</div>' +

        '</div>';

    html +=
      '<div class="lesson-controls">' +

        '<div class="search-box">' +
          '<span>⌕</span>' +
          '<input id="lesson-search" type="search" placeholder="Search lessons or categories..." value="' +
            escapeHtml(state.searchTerm) +
          '">' +
        '</div>' +

        '<div class="filter-box">' +
          '<select id="category-filter">' +
            '<option value="All">All Categories</option>';

    categoryData.forEach(function (category) {

      html +=
        '<option value="' +
          escapeHtml(category.name) +
        '"' +
          (state.currentCategory === category.name ? " selected" : "") +
        '>' +
          escapeHtml(category.name) +
        '</option>';

    });

    html +=
          '</select>' +
        '</div>' +

      '</div>';

    if (!filtered.length) {

      html +=
        '<div class="empty-state">' +
          '<div>🔎</div>' +
          '<h3>No lessons found</h3>' +
          '<p>Try another keyword or category</p>' +
        '</div>';

    } else {

      html += '<div class="lesson-list">';

      filtered.forEach(function (lesson) {

        var completed = isCompleted(lesson.id);
        var locked = !canOpenLesson(lesson);

        html +=
          '<div class="lesson-item ' +
            (completed ? "completed" : "") +
          '" data-action="open-lesson" data-lesson-id="' +
            lesson.id +
          '">' +

            '<div class="lesson-number">' +
              (completed ? "✓" : lesson.id) +
            '</div>' +

            '<div class="lesson-item-content">' +

              '<strong>' +
                escapeHtml(lesson.title) +
              '</strong>' +

              '<span>' +
                escapeHtml(lesson.category) +
                ' • Lesson ' +
                lesson.lessonIndex +
              '</span>' +

            '</div>' +

            (locked
              ? '<span class="lesson-lock">🔒</span>'
              : '') +

            '<span class="lesson-status">' +
              (completed
                ? "Completed"
                : locked
                  ? "Premium"
                  : "Open") +
            '</span>' +

          '</div>';

      });

      html += '</div>';

    }

    html += '</section>';

    root.innerHTML = html;

    var searchInput = document.getElementById("lesson-search");

    if (searchInput) {

      searchInput.addEventListener("input", function () {

        state.searchTerm = this.value;
        renderLessons();

        var input = document.getElementById("lesson-search");

        if (input) {
          input.focus();

          try {
            input.setSelectionRange(
              input.value.length,
              input.value.length
            );
          } catch (error) {}
        }

      });

    }

    var categoryFilter = document.getElementById("category-filter");

    if (categoryFilter) {

      categoryFilter.addEventListener("change", function () {

        state.currentCategory = this.value;
        renderLessons();

      });

    }

  }


  /* =======================================================
     LESSON READER
     ======================================================= */

  function renderLessonReader() {

    var root = appRoot();

    var lesson = lessons.find(function (item) {
      return item.id === Number(state.currentLessonId);
    });

    if (!lesson) {

      goToSection("lessons");
      return;

    }

    if (!canOpenLesson(lesson)) {

      showPremiumModal(lesson);
      return;

    }

    var content = getLessonContent(lesson);
    var completed = isCompleted(lesson.id);

    var html =
      '<section class="app-section active">' +

        '<div class="lesson-reader-top">' +

          '<button class="secondary-btn" data-action="back-lessons">' +
            '← Back to Lessons' +
          '</button>' +

          '<span class="lesson-status">' +
            (completed ? "Completed" : "In Progress") +
          '</span>' +

        '</div>' +

        '<article class="lesson-reader">' +

          '<header class="lesson-header">' +

            '<div class="lesson-category">' +
              escapeHtml(lesson.icon) +
              ' ' +
              escapeHtml(lesson.category) +
            '</div>' +

            '<h2>' +
              escapeHtml(lesson.title) +
            '</h2>' +

            '<p>' +
              'Lesson ' +
              lesson.id +
              ' of ' +
              TOTAL_LESSONS +
            '</p>' +

            '<div class="lesson-header-meta">' +

              '<span class="lesson-tag">Practical</span>' +
              '<span class="lesson-tag">Manager Application</span>' +
              '<span class="lesson-tag">KPI Based</span>' +
              '<span class="lesson-tag">' +
                (lesson.id === 1 ? "Free" : "Premium") +
              '</span>' +

            '</div>' +

          '</header>';

    html +=
      '<div class="lesson-body">';

    html +=
      '<div class="lesson-content-section">' +
        '<h3>🎯 Learning Objective</h3>' +
        '<div class="lesson-highlight">' +
          '<p>' +
            escapeHtml(content.objective) +
          '</p>' +
        '</div>' +
      '</div>';

    html +=
      '<div class="lesson-content-section">' +
        '<h3>📘 Core Concept</h3>' +
        '<p>' +
          escapeHtml(content.concept) +
        '</p>' +
      '</div>';

    html +=
      '<div class="lesson-content-section">' +
        '<h3>💡 Why It Matters</h3>' +
        '<p>' +
          escapeHtml(content.importance) +
        '</p>' +
      '</div>';

    html +=
      '<div class="lesson-content-section">' +
        '<h3>⚙️ Practical Management Framework</h3>' +
        '<ul>';

    content.details.forEach(function (item) {

      html +=
        '<li>' +
          escapeHtml(item) +
        '</li>';

    });

    html +=
        '</ul>' +
      '</div>';

    html +=
      '<div class="lesson-content-section">' +
        '<h3>🏢 Business Example</h3>' +
        '<div class="lesson-example">' +
          '<p>' +
            escapeHtml(content.example) +
          '</p>' +
        '</div>' +
      '</div>';

    html +=
      '<div class="lesson-content-section">' +
        '<h3>👔 Manager Application</h3>' +
        '<p>' +
          escapeHtml(content.managerApplication) +
        '</p>' +
      '</div>';

    html +=
      '<div class="lesson-content-section">' +
        '<h3>📊 Recommended KPIs</h3>' +
        '<div class="lesson-kpi-grid">';

    content.kpis.forEach(function (kpi) {

      html +=
        '<div class="lesson-kpi">' +
          '<strong>' +
            escapeHtml(kpi) +
          '</strong>' +
          '<span>Track and review regularly</span>' +
        '</div>';

    });

    html +=
        '</div>' +
      '</div>';

    html +=
      '<div class="lesson-content-section">' +
        '<h3>⚠️ Common Mistakes</h3>' +
        '<ul>';

    content.mistakes.forEach(function (item) {

      html +=
        '<li>' +
          escapeHtml(item) +
        '</li>';

    });

    html +=
        '</ul>' +
      '</div>';

    html +=
      '<div class="lesson-content-section">' +
        '<h3>✅ Manager Checklist</h3>' +
        '<div class="lesson-checklist">';

    content.checklist.forEach(function (item) {

      html +=
        '<div class="lesson-check">' +
          '<span>✓</span>' +
          '<span>' +
            escapeHtml(item) +
          '</span>' +
        '</div>';

    });

    html +=
        '</div>' +
      '</div>';

    html +=
      '<div class="lesson-content-section">' +
        '<h3>📝 Practical Assignment</h3>' +
        '<div class="lesson-action">' +
          '<strong>Do This Today</strong>' +
          '<p>' +
            escapeHtml(content.practice) +
          '</p>' +
        '</div>' +
      '</div>';

    html +=
      '<div class="lesson-content-section">' +
        '<h3>🔑 Key Takeaway</h3>' +
        '<p>' +
          escapeHtml(content.summary) +
        '</p>' +
      '</div>';

    html += '</div>';

    html +=
      '<div class="lesson-footer-actions">' +

        '<button class="secondary-btn" data-action="back-lessons">' +
          'Back' +
        '</button>' +

        '<button class="' +
          (completed ? "secondary-btn" : "primary-btn") +
          '" data-action="toggle-complete" data-lesson-id="' +
            lesson.id +
          '">' +
          (completed ? "✓ Completed" : "Mark as Complete") +
        '</button>';

    if (lesson.id < TOTAL_LESSONS) {

      html +=
        '<button class="primary-btn" data-action="next-lesson" data-lesson-id="' +
          (lesson.id + 1) +
        '">' +
          'Next Lesson →' +
        '</button>';

    }

    html +=
      '</div>' +

      '</article>' +

    '</section>';

    root.innerHTML = html;

  }


  /* =======================================================
     PROGRESS PAGE
     ======================================================= */

  function renderProgress() {

    var root = appRoot();

    var completed = getCompleted();
    var progress = getProgress();

    var html =
      '<section class="app-section active">' +

        '<div class="section-hero compact">' +
          '<div>' +
            '<span class="eyebrow">LEARNING PERFORMANCE</span>' +
            '<h2>Your Progress</h2>' +
            '<p>Track completion across the full business academy</p>' +
          '</div>' +

          '<div class="lesson-count-box">' +
            '<strong>' + progress + '%</strong>' +
            '<span>Overall Progress</span>' +
          '</div>' +
        '</div>';

    html +=
      '<div class="progress-overview-grid">' +

        '<div class="panel">' +
          '<div class="panel-header">' +
            '<h3>Academy Completion</h3>' +
          '</div>' +

          '<div class="large-progress-value">' +
            progress + '%' +
          '</div>' +

          '<div class="progress-track large">' +
            '<div class="progress-fill" style="width:' +
              progress +
            '%"></div>' +
          '</div>' +

          '<p>' +
            completed.length +
            ' of ' +
            TOTAL_LESSONS +
            ' lessons completed' +
          '</p>' +

        '</div>' +

        '<div class="panel">' +
          '<div class="panel-header">' +
            '<h3>Learning Status</h3>' +
          '</div>' +

          '<div class="activity-list">' +

            '<div>' +
              '<span>Total Lessons</span>' +
              '<strong>' + TOTAL_LESSONS + '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Completed</span>' +
              '<strong>' + completed.length + '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Remaining</span>' +
              '<strong>' +
                (TOTAL_LESSONS - completed.length) +
              '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Categories</span>' +
              '<strong>' + categoryData.length + '</strong>' +
            '</div>' +

          '</div>' +

        '</div>' +

      '</div>';

    html +=
      '<div class="section-heading">' +
        '<h3>Category Progress</h3>' +
      '</div>';

    html += '<div class="category-progress-list">';

    categoryData.forEach(function (category) {

      var p = categoryProgress(category.name);

      html +=
        '<div class="category-progress-item">' +

          '<div class="category-progress-top">' +

            '<strong>' +
              category.icon +
              ' ' +
              escapeHtml(category.name) +
            '</strong>' +

            '<span>' +
              p +
              '%' +
            '</span>' +

          '</div>' +

          '<div class="progress-track">' +
            '<div class="progress-fill" style="width:' +
              p +
            '%"></div>' +
          '</div>' +

        '</div>';

    });

    html += '</div>';

    html +=
      '<div class="section-heading">' +
        '<h3>Progress Management</h3>' +
      '</div>' +

      '<div class="panel">' +
        '<p style="color:#64748b;font-size:10px;margin-bottom:13px">' +
          'Progress data is stored on this device using local storage' +
        '</p>' +

        '<button class="danger-btn" data-action="reset-progress">' +
          'Reset Lesson Progress' +
        '</button>' +

      '</div>';

    html += '</section>';

    root.innerHTML = html;

  }


  /* =======================================================
     KPI DATA
     ======================================================= */

  function getKPI() {

    var defaults = {
      target: 500,
      actual: 385,
      team: 4,
      customers: 120,
      orders: 0,
      collection: 0,
      workingDays: 26
    };

    var saved = storageGetJSON(KPI_KEY, defaults);

    if (!saved || typeof saved !== "object") {
      saved = defaults;
    }

    return {
      target: Number(saved.target) || 0,
      actual: Number(saved.actual) || 0,
      team: Number(saved.team) || 0,
      customers: Number(saved.customers) || 0,
      orders: Number(saved.orders) || 0,
      collection: Number(saved.collection) || 0,
      workingDays: Number(saved.workingDays) || 26
    };

  }


  function saveKPI(data) {

    storageSetJSON(KPI_KEY, data);

  }


  function calculateAchievement(target, actual) {

    target = Number(target) || 0;
    actual = Number(actual) || 0;

    if (target <= 0) {
      return 0;
    }

    return (actual / target) * 100;

  }


  /* =======================================================
     SALES MANAGER
     ======================================================= */

  function renderSalesManager() {

    var root = appRoot();

    var kpi = getKPI();

    var achievement = calculateAchievement(
      kpi.target,
      kpi.actual
    );

    var gap = kpi.target - kpi.actual;

    var dailyTarget =
      kpi.workingDays > 0
        ? kpi.target / kpi.workingDays
        : 0;

    var dailyActual =
      kpi.workingDays > 0
        ? kpi.actual / kpi.workingDays
        : 0;

    var html =
      '<section class="app-section active">' +

        '<div class="section-hero compact">' +

          '<div>' +
            '<span class="eyebrow">SALES EXECUTION CONTROL</span>' +
            '<h2>Sales Manager</h2>' +
            '<p>Daily target, team performance, customer coverage and execution control</p>' +
          '</div>' +

          '<div class="lesson-count-box">' +
            '<strong>' +
              achievement.toFixed(0) +
              '%' +
            '</strong>' +
            '<span>Achievement</span>' +
          '</div>' +

        '</div>';

    html +=
      '<div class="kpi-grid">' +

        '<div class="metric-card">' +
          '<span>Target</span>' +
          '<strong>' + formatNumber(kpi.target) + '</strong>' +
          '<small>Monthly target</small>' +
        '</div>' +

        '<div class="metric-card">' +
          '<span>Actual</span>' +
          '<strong>' + formatNumber(kpi.actual) + '</strong>' +
          '<small>Current actual</small>' +
        '</div>' +

        '<div class="metric-card">' +
          '<span>Achievement</span>' +
          '<strong>' + achievement.toFixed(1) + '%</strong>' +
          '<small>Actual ÷ Target</small>' +
        '</div>' +

        '<div class="metric-card">' +
          '<span>Gap</span>' +
          '<strong>' + formatNumber(gap) + '</strong>' +
          '<small>Target − Actual</small>' +
        '</div>' +

      '</div>';

    html +=
      '<div class="dashboard-grid">' +

        '<div class="panel">' +

          '<div class="panel-header">' +
            '<h3>Sales Manager Daily Control</h3>' +
          '</div>' +

          '<div class="execution-list">' +

            '<div>' +
              '<span>Daily Target</span>' +
              '<strong>' +
                formatNumber(dailyTarget) +
              '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Daily Actual Average</span>' +
              '<strong>' +
                formatNumber(dailyActual) +
              '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Team Size</span>' +
              '<strong>' +
                kpi.team +
              '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Customer Base</span>' +
              '<strong>' +
                kpi.customers +
              '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Orders</span>' +
              '<strong>' +
                kpi.orders +
              '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Collection</span>' +
              '<strong>' +
                formatNumber(kpi.collection) +
              '</strong>' +
            '</div>' +

          '</div>' +

        '</div>' +

        '<div class="panel">' +

          '<div class="panel-header">' +
            '<h3>Manager Daily Review</h3>' +
          '</div>' +

          '<div class="manager-check-grid">' +

            '<label class="check-card">' +
              '<input type="checkbox">' +
              '<span>' +
                '<strong>Target Review</strong>' +
                '<small>Today target checked</small>' +
              '</span>' +
            '</label>' +

            '<label class="check-card">' +
              '<input type="checkbox">' +
              '<span>' +
                '<strong>Team Review</strong>' +
                '<small>Team performance checked</small>' +
              '</span>' +
            '</label>' +

            '<label class="check-card">' +
              '<input type="checkbox">' +
              '<span>' +
                '<strong>Customer Coverage</strong>' +
                '<small>Priority customers covered</small>' +
              '</span>' +
            '</label>' +

            '<label class="check-card">' +
              '<input type="checkbox">' +
              '<span>' +
                '<strong>Stock Review</strong>' +
                '<small>Availability checked</small>' +
              '</span>' +
            '</label>' +

            '<label class="check-card">' +
              '<input type="checkbox">' +
              '<span>' +
                '<strong>Collection</strong>' +
                '<small>Outstanding checked</small>' +
              '</span>' +
            '</label>' +

            '<label class="check-card">' +
              '<input type="checkbox">' +
              '<span>' +
                '<strong>Tomorrow Plan</strong>' +
                '<small>Next action prepared</small>' +
              '</span>' +
            '</label>' +

          '</div>' +

        '</div>' +

      '</div>';

    html +=
      '<div class="panel">' +

        '<div class="panel-header">' +
          '<h3>Update Sales KPI</h3>' +
          '<span style="color:#64748b;font-size:9px">Data saved on this device</span>' +
        '</div>' +

        '<div class="form-grid">' +

          '<label>' +
            'Monthly Target' +
            '<input id="sales-target" type="number" value="' +
              kpi.target +
            '">' +
          '</label>' +

          '<label>' +
            'Actual' +
            '<input id="sales-actual" type="number" value="' +
              kpi.actual +
            '">' +
          '</label>' +

          '<label>' +
            'Team Size' +
            '<input id="sales-team" type="number" value="' +
              kpi.team +
            '">' +
          '</label>' +

          '<label>' +
            'Customers' +
            '<input id="sales-customers" type="number" value="' +
              kpi.customers +
            '">' +
          '</label>' +

          '<label>' +
            'Orders' +
            '<input id="sales-orders" type="number" value="' +
              kpi.orders +
            '">' +
          '</label>' +

          '<label>' +
            'Collection' +
            '<input id="sales-collection" type="number" value="' +
              kpi.collection +
            '">' +
          '</label>' +

          '<label>' +
            'Working Days' +
            '<input id="sales-days" type="number" value="' +
              kpi.workingDays +
            '">' +
          '</label>' +

          '<div class="form-action">' +
            '<button class="primary-btn" data-action="save-sales-kpi">' +
              'Save KPI' +
            '</button>' +
          '</div>' +

        '</div>' +

      '</div>';

    html += '</section>';

    root.innerHTML = html;

  }


  /* =======================================================
     KPI ANALYTICS
     ======================================================= */

  function renderKPIAnalytics() {

    var root = appRoot();

    var kpi = getKPI();

    var achievement =
      calculateAchievement(
        kpi.target,
        kpi.actual
      );

    var gap = kpi.target - kpi.actual;

    var gapText =
      gap > 0
        ? "Below target by " + formatNumber(gap)
        : "Above target by " + formatNumber(Math.abs(gap));

    var html =
      '<section class="app-section active">' +

        '<div class="section-hero compact">' +

          '<div>' +
            '<span class="eyebrow">PERFORMANCE ANALYTICS</span>' +
            '<h2>KPI & Analytics</h2>' +
            '<p>Turn business numbers into management actions</p>' +
          '</div>' +

          '<div class="lesson-count-box">' +
            '<strong>' +
              achievement.toFixed(0) +
              '%' +
            '</strong>' +
            '<span>Achievement</span>' +
          '</div>' +

        '</div>';

    html +=
      '<div class="kpi-grid">' +

        '<div class="metric-card">' +
          '<span>Target</span>' +
          '<strong>' + formatNumber(kpi.target) + '</strong>' +
          '<small>Current target</small>' +
        '</div>' +

        '<div class="metric-card">' +
          '<span>Actual</span>' +
          '<strong>' + formatNumber(kpi.actual) + '</strong>' +
          '<small>Current actual</small>' +
        '</div>' +

        '<div class="metric-card">' +
          '<span>Achievement</span>' +
          '<strong>' + achievement.toFixed(1) + '%</strong>' +
          '<small>Performance rate</small>' +
        '</div>' +

        '<div class="metric-card">' +
          '<span>Gap</span>' +
          '<strong>' + formatNumber(Math.abs(gap)) + '</strong>' +
          '<small>' + escapeHtml(gapText) + '</small>' +
        '</div>' +

      '</div>';

    html +=
      '<div class="dashboard-grid">' +

        '<div class="panel">' +

          '<div class="panel-header">' +
            '<h3>Target vs Actual</h3>' +
          '</div>' +

          '<div class="activity-list">' +

            '<div>' +
              '<span>Target</span>' +
              '<strong>' +
                formatNumber(kpi.target) +
              '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Actual</span>' +
              '<strong>' +
                formatNumber(kpi.actual) +
              '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Achievement</span>' +
              '<strong>' +
                achievement.toFixed(1) +
                '%' +
              '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Gap</span>' +
              '<strong>' +
                formatNumber(gap) +
              '</strong>' +
            '</div>' +

          '</div>' +

          '<div style="margin-top:15px">' +
            '<div class="progress-track large">' +
              '<div class="progress-fill" style="width:' +
                Math.min(Math.max(achievement, 0), 100) +
              '%"></div>' +
            '</div>' +
          '</div>' +

        '</div>' +

        '<div class="panel">' +

          '<div class="panel-header">' +
            '<h3>Management Interpretation</h3>' +
          '</div>' +

          '<div class="analysis-list">' +

            '<div>' +
              '<span>Achievement</span>' +
              '<strong>' +
                achievement.toFixed(1) +
                '%' +
              '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Daily Target</span>' +
              '<strong>' +
                formatNumber(
                  kpi.target /
                  Math.max(kpi.workingDays, 1)
                ) +
              '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Customer Base</span>' +
              '<strong>' +
                kpi.customers +
              '</strong>' +
            '</div>' +

            '<div>' +
              '<span>Team Size</span>' +
              '<strong>' +
                kpi.team +
              '</strong>' +
            '</div>' +

          '</div>' +

        '</div>' +

      '</div>';

    html +=
      '<div class="panel">' +

        '<div class="panel-header">' +
          '<h3>Recommended KPI Review</h3>' +
        '</div>' +

        '<div class="manager-check-grid">' +

          '<div class="check-card">' +
            '<span>📈</span>' +
            '<span>' +
              '<strong>Trend</strong>' +
              '<small>Compare current result with previous periods</small>' +
            '</span>' +
          '</div>' +

          '<div class="check-card">' +
            '<span>🎯</span>' +
            '<span>' +
              '<strong>Achievement</strong>' +
              '<small>Measure actual against target</small>' +
            '</span>' +
          '</div>' +

          '<div class="check-card">' +
            '<span>🔍</span>' +
            '<span>' +
              '<strong>Gap</strong>' +
              '<small>Identify the biggest performance gap</small>' +
            '</span>' +
          '</div>' +

        '</div>' +

      '</div>';

    html += '</section>';

    root.innerHTML = html;

  }


  /* =======================================================
     BUSINESS TOOLS
     ======================================================= */

  function renderTools() {

    var root = appRoot();

    var html =
      '<section class="app-section active">' +

        '<div class="section-hero compact">' +
          '<div>' +
            '<span class="eyebrow">MANAGER CALCULATORS</span>' +
            '<h2>Business Tools</h2>' +
            '<p>Quick calculations for pricing, profit, break-even, sales target and growth</p>' +
          '</div>' +
        '</div>';

    html += '<div class="tool-grid">';

    html +=
      '<div class="tool-card">' +

        '<div class="tool-icon">💰</div>' +
        '<h3>Profit Calculator</h3>' +

        '<div class="tool-form">' +

          '<label>' +
            'Sales Revenue' +
            '<input id="profit-sales" type="number" placeholder="1000000">' +
          '</label>' +

          '<label>' +
            'Total Cost' +
            '<input id="profit-cost" type="number" placeholder="700000">' +
          '</label>' +

          '<button class="primary-btn" data-action="calculate-profit">' +
            'Calculate' +
          '</button>' +

          '<div id="profit-result" class="tool-result">' +
            'Result will appear here' +
          '</div>' +

        '</div>' +

      '</div>';

    html +=
      '<div class="tool-card">' +

        '<div class="tool-icon">📊</div>' +
        '<h3>Margin Calculator</h3>' +

        '<div class="tool-form">' +

          '<label>' +
            'Selling Price' +
            '<input id="margin-price" type="number" placeholder="100000">' +
          '</label>' +

          '<label>' +
            'Cost' +
            '<input id="margin-cost" type="number" placeholder="70000">' +
          '</label>' +

          '<button class="primary-btn" data-action="calculate-margin">' +
            'Calculate' +
          '</button>' +

          '<div id="margin-result" class="tool-result">' +
            'Result will appear here' +
          '</div>' +

        '</div>' +

      '</div>';

    html +=
      '<div class="tool-card">' +

        '<div class="tool-icon">⚖️</div>' +
        '<h3>Break-even Calculator</h3>' +

        '<div class="tool-form">' +

          '<label>' +
            'Fixed Cost' +
            '<input id="be-fixed" type="number" placeholder="5000000">' +
          '</label>' +

          '<label>' +
            'Selling Price / Unit' +
            '<input id="be-price" type="number" placeholder="100000">' +
          '</label>' +

          '<label>' +
            'Variable Cost / Unit' +
            '<input id="be-variable" type="number" placeholder="70000">' +
          '</label>' +

          '<button class="primary-btn" data-action="calculate-break-even">' +
            'Calculate' +
          '</button>' +

          '<div id="be-result" class="tool-result">' +
            'Result will appear here' +
          '</div>' +

        '</div>' +

      '</div>';

    html +=
      '<div class="tool-card">' +

        '<div class="tool-icon">🎯</div>' +
        '<h3>Sales Target Calculator</h3>' +

        '<div class="tool-form">' +

          '<label>' +
            'Monthly Target' +
            '<input id="target-monthly" type="number" placeholder="500">' +
          '</label>' +

          '<label>' +
            'Working Days' +
            '<input id="target-days" type="number" value="26">' +
          '</label>' +

          '<button class="primary-btn" data-action="calculate-target">' +
            'Calculate' +
          '</button>' +

          '<div id="target-result" class="tool-result">' +
            'Result will appear here' +
          '</div>' +

        '</div>' +

      '</div>';

    html +=
      '<div class="tool-card">' +

        '<div class="tool-icon">📈</div>' +
        '<h3>Growth Calculator</h3>' +

        '<div class="tool-form">' +

          '<label>' +
            'Previous Sales' +
            '<input id="growth-old" type="number" placeholder="100">' +
          '</label>' +

          '<label>' +
            'Current Sales' +
            '<input id="growth-new" type="number" placeholder="120">' +
          '</label>' +

          '<button class="primary-btn" data-action="calculate-growth">' +
            'Calculate' +
          '</button>' +

          '<div id="growth-result" class="tool-result">' +
            'Result will appear here' +
          '</div>' +

        '</div>' +

      '</div>';

    html +=
      '<div class="tool-card">' +

        '<div class="tool-icon">📦</div>' +
        '<h3>Productivity Calculator</h3>' +

        '<div class="tool-form">' +

          '<label>' +
            'Sales Result' +
            '<input id="prod-sales" type="number" placeholder="500">' +
          '</label>' +

          '<label>' +
            'Team Members' +
            '<input id="prod-team" type="number" placeholder="4">' +
          '</label>' +

          '<button class="primary-btn" data-action="calculate-productivity">' +
            'Calculate' +
          '</button>' +

          '<div id="prod-result" class="tool-result">' +
            'Result will appear here' +
          '</div>' +

        '</div>' +

      '</div>';

    html += '</div>';

    html += '</section>';

    root.innerHTML = html;

  }


  /* =======================================================
     REPORTS
     ======================================================= */

  function renderReports() {

    var root = appRoot();

    var kpi = getKPI();

    var achievement =
      calculateAchievement(
        kpi.target,
        kpi.actual
      );

    var html =
      '<section class="app-section active">' +

        '<div class="section-hero compact">' +
          '<div>' +
            '<span class="eyebrow">MANAGEMENT REPORTING</span>' +
            '<h2>Business Reports</h2>' +
            '<p>Simple management summary for sales, KPI and academy performance</p>' +
          '</div>' +
        '</div>';

    html +=
      '<div class="report-grid">' +

        '<div class="report-card">' +
          '<span class="report-icon">🎯</span>' +
          '<div>' +
            '<span>Sales Target</span>' +
            '<strong>' +
              formatNumber(kpi.target) +
            '</strong>' +
            '<small>Current period</small>' +
          '</div>' +
        '</div>' +

        '<div class="report-card">' +
          '<span class="report-icon">📈</span>' +
          '<div>' +
            '<span>Actual</span>' +
            '<strong>' +
              formatNumber(kpi.actual) +
            '</strong>' +
            '<small>Current result</small>' +
          '</div>' +
        '</div>' +

        '<div class="report-card">' +
          '<span class="report-icon">%</span>' +
          '<div>' +
            '<span>Achievement</span>' +
            '<strong>' +
              achievement.toFixed(1) +
              '%</strong>' +
            '<small>Target performance</small>' +
          '</div>' +
        '</div>' +

        '<div class="report-card">' +
          '<span class="report-icon">📚</span>' +
          '<div>' +
            '<span>Academy Progress</span>' +
            '<strong>' +
              getProgress() +
              '%</strong>' +
            '<small>Learning progress</small>' +
          '</div>' +
        '</div>' +

      '</div>';

    html +=
      '<div class="panel">' +

        '<div class="panel-header">' +
          '<h3>Management Summary</h3>' +
        '</div>' +

        '<div class="report-summary-content">' +

          'Current sales target is ' +
          formatNumber(kpi.target) +
          ', with actual result of ' +
          formatNumber(kpi.actual) +
          '. ' +

          'Achievement is ' +
          achievement.toFixed(1) +
          '%. ' +

          'Team size is ' +
          kpi.team +
          ' and customer base is ' +
          kpi.customers +
          '. ' +

          'Management review should focus on target gap, customer coverage, team productivity and recovery actions.' +

        '</div>' +

      '</div>';

    html +=
      '<div class="panel" style="margin-top:17px">' +

        '<div class="panel-header">' +
          '<h3>Next Management Actions</h3>' +
        '</div>' +

        '<div class="execution-list">' +

          '<div>' +
            '<span>1. Review Target vs Actual</span>' +
            '<strong>Today</strong>' +
          '</div>' +

          '<div>' +
            '<span>2. Identify Biggest Gap</span>' +
            '<strong>Priority</strong>' +
          '</div>' +

          '<div>' +
            '<span>3. Assign Recovery Action</span>' +
            '<strong>Owner</strong>' +
          '</div>' +

          '<div>' +
            '<span>4. Review Result</span>' +
            '<strong>Next Cycle</strong>' +
          '</div>' +

        '</div>' +

      '</div>';

    html += '</section>';

    root.innerHTML = html;

  }


  /* =======================================================
     AI COACH
     ======================================================= */

  function renderAI() {

    var root = appRoot();

    var html =
      '<section class="app-section active">' +

        '<div class="section-hero compact">' +

          '<div>' +
            '<span class="eyebrow">AI BUSINESS SUPPORT</span>' +
            '<h2>AI Business Coach</h2>' +
            '<p>Ask practical questions about sales, marketing, people, finance and business problems</p>' +
          '</div>' +

          '<div class="ai-status">' +
            '<span class="status-dot"></span>' +
            'AI Coach Ready' +
          '</div>' +

        '</div>';

    html +=
      '<div class="ai-layout">' +

        '<div class="panel ai-chat-panel">' +

          '<div id="ai-messages" class="ai-messages">' +

            '<div class="ai-message">' +

              '<div class="ai-avatar">AI</div>' +

              '<div class="ai-bubble">' +
                '<strong>AI Business Coach</strong>' +
                '<p>မင်္ဂလာပါ ' +
                  escapeHtml(savedUser.name) +
                  ' — sales, target, team, customer, marketing, finance သို့မဟုတ် business problem တစ်ခုကိုရေးပေးပါ</p>' +
              '</div>' +

            '</div>' +

          '</div>' +

          '<div class="ai-input-area">' +

            '<textarea id="ai-input" placeholder="ဥပမာ — Sales target မပြည့်ရင် manager အနေနဲ့ ဘာတွေစစ်သင့်လဲ"></textarea>' +

            '<button class="primary-btn ai-send-btn" data-action="ask-ai">' +
              'Ask AI' +
            '</button>' +

          '</div>' +

        '</div>' +

        '<div class="panel ai-quick-panel">' +

          '<h3>Quick Questions</h3>' +

          '<div class="quick-prompt-list">' +

            '<button class="quick-prompt" data-action="quick-ai" data-prompt="Sales target မပြည့်ရင် Sales Manager အနေနဲ့ ဘာတွေစစ်ပြီး ဘယ်လို recovery plan ချသင့်လဲ">Sales target မပြည့်ရင်</button>' +

            '<button class="quick-prompt" data-action="quick-ai" data-prompt="Sales team performance ကျနေတဲ့အခါ root cause ကိုဘယ်လိုရှာပြီး coaching လုပ်သင့်လဲ">Team performance ကျရင်</button>' +

            '<button class="quick-prompt" data-action="quick-ai" data-prompt="Customer retention တိုးအောင် practical action plan တစ်ခုရေးပေးပါ">Customer retention</button>' +

            '<button class="quick-prompt" data-action="quick-ai" data-prompt="SME business တစ်ခုအတွက် marketing plan တစ်ခုကို KPI ပါထည့်ပြီးရေးပေးပါ">Marketing plan</button>' +

            '<button class="quick-prompt" data-action="quick-ai" data-prompt="Business cash flow မကောင်းတဲ့အခါ manager အနေနဲ့ ဘာတွေကိုအရင်စစ်သင့်လဲ">Cash flow problem</button>' +

            '<button class="quick-prompt" data-action="quick-ai" data-prompt="Staff performance မကောင်းတဲ့အခါ 30-day coaching plan တစ်ခုရေးပေးပါ">Staff coaching</button>' +

          '</div>' +

        '</div>' +

      '</div>' +

    '</section>';

    root.innerHTML = html;

  }


  function addAIMessage(role, text) {

    var container = document.getElementById("ai-messages");

    if (!container) {
      return;
    }

    var isUser = role === "user";

    var div = document.createElement("div");

    div.className =
      "ai-message" +
      (isUser ? " user" : "");

    div.innerHTML =
      '<div class="ai-avatar">' +
        (isUser ? "YOU" : "AI") +
      '</div>' +

      '<div class="ai-bubble">' +
        '<strong>' +
          (isUser ? "You" : "AI Business Coach") +
        '</strong>' +

        '<p>' +
          escapeHtml(text) +
        '</p>' +

      '</div>';

    container.appendChild(div);

    container.scrollTop = container.scrollHeight;

  }


  function getFallbackAI(question) {

    var q = question.toLowerCase();

    if (
      q.indexOf("target") !== -1 ||
      q.indexOf("sales") !== -1
    ) {

      return (
        "Sales problem ကို 5-step နဲ့စစ်ပါ\n\n" +
        "1. Target vs Actual — gap ဘယ်လောက်ရှိလဲ\n" +
        "2. Customer Coverage — priority customer တွေကိုလုံလောက်စွာ visit လုပ်လား\n" +
        "3. Activity — productive calls, orders, conversion ဘယ်လောက်လဲ\n" +
        "4. Root Cause — stock, price, competitor, people, territory ဘယ်အချက်ကအဓိကလဲ\n" +
        "5. Recovery Plan — owner + action + deadline + KPI သတ်မှတ်ပါ\n\n" +
        "အဓိက KPI: Achievement %, Gap, Productive Calls, Conversion Rate, Average Order"
      );

    }

    if (
      q.indexOf("staff") !== -1 ||
      q.indexOf("team") !== -1 ||
      q.indexOf("employee") !== -1
    ) {

      return (
        "Team performance problem ကို motivation လို့ပဲမယူဆဘဲ capability နဲ့ execution ကိုခွဲစစ်ပါ\n\n" +
        "1. Expected result သတ်မှတ်ပါ\n" +
        "2. Current performance ကို data နဲ့ကြည့်ပါ\n" +
        "3. Gap ရဲ့ root cause ရှာပါ\n" +
        "4. Coaching action သတ်မှတ်ပါ\n" +
        "5. 7-day review ထားပါ\n\n" +
        "KPI: Target Achievement, Activity, Quality, Action Closure"
      );

    }

    if (
      q.indexOf("marketing") !== -1
    ) {

      return (
        "Marketing plan တစ်ခုမှာ Target Customer → Objective → Message → Channel → Budget → KPI ဆိုတဲ့ flow ကိုသုံးပါ\n\n" +
        "KPI အနေနဲ့ Leads, Conversion Rate, Customer Acquisition Cost, Revenue နဲ့ ROI ကိုတိုင်းတာပါ"
      );

    }

    if (
      q.indexOf("cash") !== -1 ||
      q.indexOf("finance") !== -1
    ) {

      return (
        "Cash flow problem ဖြစ်ရင် အရင်ဆုံး Receivable, Inventory, Payable နဲ့ Operating Expense ကိုခွဲစစ်ပါ\n\n" +
        "Priority action:\n" +
        "1. Outstanding collection accelerate လုပ်ပါ\n" +
        "2. Slow-moving stock လျှော့ပါ\n" +
        "3. Non-essential expense ထိန်းပါ\n" +
        "4. Weekly cash forecast ပြုလုပ်ပါ"
      );

    }

    return (
      "ဒီ business problem ကို Action Plan အဖြစ်ပြောင်းဖို့\n\n" +
      "1. Problem ကိုတိတိကျကျရေးပါ\n" +
      "2. Current data စုပါ\n" +
      "3. Root cause ရှာပါ\n" +
      "4. Priority action 3 ခုရွေးပါ\n" +
      "5. KPI + Owner + Deadline သတ်မှတ်ပါ\n" +
      "6. Review date ထားပါ\n\n" +
      "မိမိ business situation နဲ့ actual numbers ထည့်ပေးရင် ပိုတိကျတဲ့ plan တစ်ခုလုပ်နိုင်ပါတယ်"
    );

  }


  async function askAI(question) {

    var cleanQuestion = String(question || "").trim();

    if (!cleanQuestion) {
      showToast("မေးခွန်းတစ်ခုရေးပေးပါ");
      return;
    }

    addAIMessage("user", cleanQuestion);

    var loadingId = "ai-loading-" + Date.now();

    var container = document.getElementById("ai-messages");

    if (container) {

      var loading = document.createElement("div");

      loading.id = loadingId;
      loading.className = "ai-message";

      loading.innerHTML =
        '<div class="ai-avatar">AI</div>' +
        '<div class="ai-bubble">' +
          '<strong>AI Business Coach</strong>' +
          '<p>စဉ်းစားနေပါတယ်...</p>' +
        '</div>';

      container.appendChild(loading);

      container.scrollTop = container.scrollHeight;

    }

    var answer = "";

    try {

      var response = await fetch(AI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt:
            "You are an AI Business Coach for a Myanmar business manager. " +
            "Give practical, concise, actionable business advice. " +
            "Use steps, numbers, KPIs, action plans and examples when useful. " +
            "Answer in Burmese when the user writes Burmese. " +
            "User name: " +
            savedUser.name +
            ". User role: " +
            savedUser.role +
            ".\n\nQuestion:\n" +
            cleanQuestion
        })
      });

      if (!response.ok) {
        throw new Error("AI service unavailable");
      }

      var data = await response.json();

      answer =
        data.answer ||
        data.response ||
        data.message ||
        data.result ||
        "";

      if (!answer) {
        throw new Error("Empty AI response");
      }

    } catch (error) {

      answer = getFallbackAI(cleanQuestion);

    }

    var loadingElement =
      document.getElementById(loadingId);

    if (loadingElement) {
      loadingElement.remove();
    }

    addAIMessage("assistant", answer);

  }


  /* =======================================================
     AI TOOLS
     ======================================================= */

  function renderAITools() {

    var root = appRoot();

    var html =
      '<section class="app-section active">' +

        '<div class="section-hero compact">' +

          '<div>' +
            '<span class="eyebrow">AI BUSINESS PRODUCTIVITY</span>' +
            '<h2>AI Business Tools</h2>' +
            '<p>Use AI to structure business work faster and more consistently</p>' +
          '</div>' +

        '</div>';

    html += '<div class="ai-tool-grid">';

    var tools = [

      {
        icon: "📋",
        title: "Business Plan Builder",
        text: "Business idea ကို structured business plan အဖြစ်ပြောင်းရန်",
        prompt: "SME business တစ်ခုအတွက် professional business plan structure တစ်ခုရေးပေးပါ"
      },

      {
        icon: "📈",
        title: "Sales Action Plan",
        text: "Sales target gap အတွက် recovery action plan",
        prompt: "Sales target gap ရှိတဲ့အခါ 30-day recovery action plan တစ်ခုရေးပေးပါ"
      },

      {
        icon: "📣",
        title: "Marketing Idea Generator",
        text: "Customer acquisition နဲ့ campaign idea များ",
        prompt: "Myanmar SME အတွက် practical marketing campaign ideas 10 ခုရေးပေးပါ"
      },

      {
        icon: "👥",
        title: "Staff Coaching Plan",
        text: "Employee performance တိုးတက်ရေး coaching plan",
        prompt: "Low-performing sales staff အတွက် 30-day coaching plan တစ်ခုရေးပေးပါ"
      },

      {
        icon: "🔍",
        title: "Business Problem Solver",
        text: "Problem ကို root cause analysis နဲ့ဖြေရှင်းရန်",
        prompt: "Business problem တစ်ခုကို root cause analysis နဲ့ဖြေရှင်းတဲ့ framework တစ်ခုရေးပေးပါ"
      },

      {
        icon: "📊",
        title: "KPI Planner",
        text: "Business အတွက် KPI framework တည်ဆောက်ရန်",
        prompt: "Sales manager အတွက် KPI dashboard တစ်ခုမှာထည့်သင့်တဲ့ KPI 15 ခုနဲ့ formula ရေးပေးပါ"
      }

    ];

    tools.forEach(function (tool) {

      html +=
        '<button class="ai-tool-card" data-action="ai-tool" data-prompt="' +
          escapeHtml(tool.prompt) +
        '">' +

          '<span>' +
            tool.icon +
          '</span>' +

          '<strong>' +
            escapeHtml(tool.title) +
          '</strong>' +

          '<small>' +
            escapeHtml(tool.text) +
          '</small>' +

        '</button>';

    });

    html += '</div>';

    html +=
      '<div class="panel" style="margin-top:18px">' +
        '<div class="panel-header">' +
          '<h3>How to Use AI Business Tools</h3>' +
        '</div>' +

        '<div class="lesson-checklist">' +

          '<div class="lesson-check">' +
            '<span>1</span>' +
            '<span>Business situation ကိုရှင်းလင်းစွာဖော်ပြပါ</span>' +
          '</div>' +

          '<div class="lesson-check">' +
            '<span>2</span>' +
            '<span>Actual numbers ရှိရင်ထည့်ပေးပါ</span>' +
          '</div>' +

          '<div class="lesson-check">' +
            '<span>3</span>' +
            '<span>Expected output ကိုပြောပါ</span>' +
          '</div>' +

          '<div class="lesson-check">' +
            '<span>4</span>' +
            '<span>AI output ကို manager judgement နဲ့ပြန်စစ်ပါ</span>' +
          '</div>' +

        '</div>' +

      '</div>';

    html += '</section>';

    root.innerHTML = html;

  }


  /* =======================================================
     PREMIUM PAGE
     ======================================================= */

  function renderPremium() {

    var root = appRoot();

    var premium = getPremiumInfo();

    var html =
      '<section class="app-section active">' +

        '<div class="premium-hero">' +

          '<span class="eyebrow">PREMIUM BUSINESS ACADEMY</span>' +

          '<h2>Unlock the complete <span>Business Academy</span></h2>' +

          '<p>' +
            'Full lessons, practical tools, KPI management and AI Business Coach' +
          '</p>' +

          '<div class="premium-current-status">' +
            (premium.active
              ? "Premium Active — " +
                premium.remainingDays +
                " days remaining"
              : "Basic Membership — Lesson 1 Free") +
          '</div>' +

        '</div>';

    html += '<div class="pricing-grid">';

    PAYMENT_PLANS.forEach(function (plan, index) {

      html +=
        '<div class="pricing-card ' +
          (index === 1 ? "featured" : "") +
        '">' +

          (index === 1
            ? '<span class="popular-label">POPULAR</span>'
            : '') +

          '<span class="plan-label">PREMIUM</span>' +

          '<h3>' +
            plan.name +
          '</h3>' +

          '<div class="price">' +
            '<strong>' +
              formatNumber(plan.price) +
            '</strong>' +
            '<span>Ks</span>' +
          '</div>' +

          '<ul>' +
            '<li>Full ' + TOTAL_LESSONS + ' lessons</li>' +
            '<li>Business Tools</li>' +
            '<li>KPI & Analytics</li>' +
            '<li>AI Business Coach</li>' +
            '<li>AI Business Tools</li>' +
          '</ul>' +

          '<button class="' +
            (index === 1 ? "primary-btn" : "secondary-btn") +
            ' full" data-action="select-plan" data-plan="' +
              plan.id +
            '">' +
            'Choose Plan' +
          '</button>' +

        '</div>';

    });

    html += '</div>';

    html +=
      '<div class="payment-panel">' +

        '<div>' +
          '<h3>Payment Methods</h3>' +
          '<p>Premium activation can be arranged using the available payment methods</p>' +
          '<small>Payment account details should be confirmed before sending payment</small>' +
        '</div>' +

        '<div class="payment-methods">' +
          '<span>KPay</span>' +
          '<span>CB Bank</span>' +
        '</div>' +

      '</div>';

    html += '</section>';

    root.innerHTML = html;

  }


  /* =======================================================
     SETTINGS
     ======================================================= */

  function renderSettings() {

    var root = appRoot();

    var html =
      '<section class="app-section active">' +

        '<div class="section-hero compact">' +

          '<div>' +
            '<span class="eyebrow">WORKSPACE SETTINGS</span>' +
            '<h2>Settings</h2>' +
            '<p>Manage your profile and academy data</p>' +
          '</div>' +

        '</div>';

    html +=
      '<div class="settings-grid">' +

        '<div class="panel">' +

          '<div class="panel-header">' +
            '<h3>Profile</h3>' +
          '</div>' +

          '<div class="settings-form">' +

            '<label>' +
              'Display Name' +
              '<input id="settings-name" type="text" value="' +
                escapeHtml(savedUser.name) +
              '">' +
            '</label>' +

            '<label>' +
              'Role' +
              '<input id="settings-role" type="text" value="' +
                escapeHtml(savedUser.role) +
              '">' +
            '</label>' +

            '<button class="primary-btn" data-action="save-settings">' +
              'Save Profile' +
            '</button>' +

          '</div>' +

        '</div>' +

        '<div class="panel">' +

          '<div class="panel-header">' +
            '<h3>Academy Data</h3>' +
          '</div>' +

          '<div class="settings-actions">' +

            '<button class="secondary-btn full" data-action="go-progress">' +
              'View Learning Progress' +
            '</button>' +

            '<button class="secondary-btn full" data-action="go-premium">' +
              'Manage Premium' +
            '</button>' +

            '<button class="danger-btn full" data-action="reset-app">' +
              'Reset Academy Data' +
            '</button>' +

          '</div>' +

          '<p class="settings-warning">' +
            'Reset Academy Data will remove saved lesson progress and KPI data from this device' +
          '</p>' +

        '</div>';

    html +=
      '<div class="panel">' +

        '<div class="panel-header">' +
          '<h3>System Information</h3>' +
        '</div>' +

        '<div class="system-info">' +

          '<div>' +
            '<span>Application</span>' +
            '<strong>' +
              APP_NAME +
            '</strong>' +
          '</div>' +

          '<div>' +
            '<span>Version</span>' +
            '<strong>' +
              APP_VERSION +
            '</strong>' +
          '</div>' +

          '<div>' +
            '<span>Lessons</span>' +
            '<strong>' +
              TOTAL_LESSONS +
            '</strong>' +
          '</div>' +

          '<div>' +
            '<span>Storage</span>' +
            '<strong>Local</strong>' +
          '</div>' +

        '</div>' +

      '</div>' +

      '</div>' +

      '</section>';

    root.innerHTML = html;

  }


  /* =======================================================
     RENDER CURRENT SECTION
     ======================================================= */

  function renderCurrentSection() {

    try {

      if (state.currentLessonId !== null) {
        renderLessonReader();
        updateTopbar();
        updateNavigation();
        return;
      }

      switch (state.currentSection) {

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
          renderKPIAnalytics();
          break;

        case "tools":
          renderTools();
          break;

        case "reports":
          renderReports();
          break;

        case "ai":
          renderAI();
          break;

        case "aiTools":
          renderAITools();
          break;

        case "premium":
          renderPremium();
          break;

        case "settings":
          renderSettings();
          break;

        default:
          state.currentSection = "dashboard";
          renderDashboard();
          break;

      }

      updateTopbar();
      updateNavigation();
      updateProfileUI();

    } catch (error) {

      console.error(
        "Aung Business Academy render error:",
        error
      );

      renderError(
        "Something went wrong",
        "The page could not be rendered. Please return to Dashboard and try again"
      );

    }

  }


  /* =======================================================
     OPEN LESSON
     ======================================================= */

  function openLesson(id) {

    var lesson = lessons.find(function (item) {
      return item.id === Number(id);
    });

    if (!lesson) {

      showToast("Lesson not found");
      return;

    }

    if (!canOpenLesson(lesson)) {

      showPremiumModal(lesson);
      return;

    }

    state.currentLessonId = lesson.id;
    state.currentSection = "lessons";

    closeMobileMenu();

    renderCurrentSection();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  /* =======================================================
     PREMIUM MODAL
     ======================================================= */

  function showPremiumModal(lesson) {

    var root = document.getElementById("modal-root");

    if (!root) {
      return;
    }

    root.classList.remove("hidden");

    root.innerHTML =
      '<div class="modal-overlay" data-action="close-modal"></div>' +

      '<div class="modal">' +

        '<button class="modal-close" data-action="close-modal">×</button>' +

        '<span class="eyebrow">PREMIUM LESSON</span>' +

        '<h3>Premium Membership Required</h3>' +

        '<p>' +
          escapeHtml(lesson.title) +
          ' ကိုဖွင့်ရန် Premium Membership လိုအပ်ပါသည်. Lesson 1 သာ Free ဖြစ်ပြီး Lesson 2 မှစ၍ Premium ဖြစ်ပါသည်' +
        '</p>' +

        '<div class="modal-plan">' +
          '<strong>Starting from 25,000 Ks / month</strong>' +
          '<p>Full lessons + tools + KPI + AI Business Coach</p>' +
        '</div>' +

        '<div class="modal-actions">' +

          '<button class="secondary-btn" data-action="close-modal">' +
            'Close' +
          '</button>' +

          '<button class="primary-btn" data-action="go-premium">' +
            'View Premium Plans' +
          '</button>' +

        '</div>' +

      '</div>';

  }


  function closeModal() {

    var root = document.getElementById("modal-root");

    if (!root) {
      return;
    }

    root.classList.add("hidden");
    root.innerHTML = "";

  }


  function selectPremiumPlan(planId) {

    var plan = PAYMENT_PLANS.find(function (item) {
      return item.id === planId;
    });

    if (!plan) {
      return;
    }

    var root = document.getElementById("modal-root");

    if (!root) {
      return;
    }

    root.classList.remove("hidden");

    root.innerHTML =
      '<div class="modal-overlay" data-action="close-modal"></div>' +

      '<div class="modal">' +

        '<button class="modal-close" data-action="close-modal">×</button>' +

        '<span class="eyebrow">PREMIUM ACTIVATION</span>' +

        '<h3>' +
          escapeHtml(plan.name) +
        '</h3>' +

        '<p>' +
          'Plan Price: ' +
          formatKs(plan.price) +
        '</p>' +

        '<div class="modal-plan">' +

          '<strong>Payment: KPay + CB Bank</strong>' +

          '<p>' +
            'Payment account details should be confirmed with the academy operator before making payment' +
          '</p>' +

        '</div>' +

        '<div class="modal-actions">' +

          '<button class="secondary-btn" data-action="close-modal">' +
            'Close' +
          '</button>' +

          '<button class="primary-btn" data-action="save-payment-interest" data-plan="' +
            plan.id +
          '">' +
            'Request Activation' +
          '</button>' +

        '</div>' +

      '</div>';

  }


  /* =======================================================
     TOAST
     ======================================================= */

  var toastTimer = null;

  function showToast(message) {

    var toast = document.getElementById("toast");

    if (!toast) {
      return;
    }

    toast.textContent = message;
    toast.classList.remove("hidden");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function () {
      toast.classList.add("hidden");
    }, 2800);

  }


  /* =======================================================
     EVENT ACTIONS
     ======================================================= */

  function handleAction(element) {

    var action = element.getAttribute("data-action");

    if (!action) {
      return;
    }

    switch (action) {

      case "go-dashboard":

        closeModal();
        state.currentLessonId = null;
        goToSection("dashboard");
        break;


      case "open-academy":

        state.currentLessonId = null;
        goToSection("academy");
        break;


      case "open-lessons":

        state.currentLessonId = null;
        goToSection("lessons");
        break;


      case "go-progress":

        closeModal();
        state.currentLessonId = null;
        goToSection("progress");
        break;


      case "go-premium":

        closeModal();
        state.currentLessonId = null;
        goToSection("premium");
        break;


      case "continue-learning":

        var next = getNextLesson();

        if (next) {
          openLesson(next.id);
        }

        break;


      case "open-category":

        state.currentCategory =
          element.getAttribute("data-category") ||
          "All";

        state.searchTerm = "";
        state.currentLessonId = null;

        goToSection("lessons");

        break;


      case "open-lesson":

        openLesson(
          element.getAttribute("data-lesson-id")
        );

        break;


      case "back-lessons":

        state.currentLessonId = null;
        goToSection("lessons");

        break;


      case "toggle-complete":

        toggleCompleted(
          element.getAttribute("data-lesson-id")
        );

        break;


      case "next-lesson":

        openLesson(
          element.getAttribute("data-lesson-id")
        );

        break;


      case "reset-progress":

        resetProgress();
        break;


      case "reset-app":

        resetAppData();
        break;


      case "save-sales-kpi":

        saveSalesKPI();
        break;


      case "calculate-profit":

        calculateProfit();
        break;


      case "calculate-margin":

        calculateMargin();
        break;


      case "calculate-break-even":

        calculateBreakEven();
        break;


      case "calculate-target":

        calculateTarget();
        break;


      case "calculate-growth":

        calculateGrowth();
        break;


      case "calculate-productivity":

        calculateProductivity();
        break;


      case "ask-ai":

        askAIFromInput();
        break;


      case "quick-ai":

        askAI(
          element.getAttribute("data-prompt") || ""
        );

        break;


      case "ai-tool":

        state.currentSection = "ai";

        renderCurrentSection();

        setTimeout(function () {

          askAI(
            element.getAttribute("data-prompt") || ""
          );

        }, 100);

        break;


      case "select-plan":

        selectPremiumPlan(
          element.getAttribute("data-plan")
        );

        break;


      case "save-payment-interest":

        savePaymentInterest(
          element.getAttribute("data-plan")
        );

        break;


      case "close-modal":

        closeModal();
        break;


      case "save-settings":

        saveSettings();
        break;

    }

  }


  /* =======================================================
     SALES KPI SAVE
     ======================================================= */

  function inputValue(id) {

    var element = document.getElementById(id);

    if (!element) {
      return 0;
    }

    return Number(element.value) || 0;

  }


  function saveSalesKPI() {

    var data = {
      target: inputValue("sales-target"),
      actual: inputValue("sales-actual"),
      team: inputValue("sales-team"),
      customers: inputValue("sales-customers"),
      orders: inputValue("sales-orders"),
      collection: inputValue("sales-collection"),
      workingDays: inputValue("sales-days") || 26
    };

    saveKPI(data);

    showToast("Sales KPI saved");

    renderSalesManager();

  }


  /* =======================================================
     CALCULATORS
     ======================================================= */

  function calculateProfit() {

    var sales = inputValue("profit-sales");
    var cost = inputValue("profit-cost");

    var profit = sales - cost;

    var margin =
      sales > 0
        ? (profit / sales) * 100
        : 0;

    var result =
      document.getElementById("profit-result");

    if (result) {

      result.textContent =
        "Profit: " +
        formatNumber(profit) +
        " Ks | Margin: " +
        margin.toFixed(2) +
        "%";

    }

  }


  function calculateMargin() {

    var price = inputValue("margin-price");
    var cost = inputValue("margin-cost");

    var profit = price - cost;

    var margin =
      price > 0
        ? (profit / price) * 100
        : 0;

    var result =
      document.getElementById("margin-result");

    if (result) {

      result.textContent =
        "Profit: " +
        formatNumber(profit) +
        " Ks | Gross Margin: " +
        margin.toFixed(2) +
        "%";

    }

  }


  function calculateBreakEven() {

    var fixedCost = inputValue("be-fixed");
    var price = inputValue("be-price");
    var variable = inputValue("be-variable");

    var contribution =
      price - variable;

    var result =
      document.getElementById("be-result");

    if (contribution <= 0) {

      result.textContent =
        "Selling price must be higher than variable cost";

      return;

    }

    var units =
      fixedCost / contribution;

    var sales =
      units * price;

    result.textContent =
      "Break-even Units: " +
      units.toFixed(2) +
      " | Break-even Sales: " +
      formatNumber(sales) +
      " Ks";

  }


  function calculateTarget() {

    var monthly = inputValue("target-monthly");
    var days = inputValue("target-days");

    var daily =
      days > 0
        ? monthly / days
        : 0;

    var result =
      document.getElementById("target-result");

    if (result) {

      result.textContent =
        "Daily Target: " +
        daily.toFixed(2) +
        " | Working Days: " +
        days;

    }

  }


  function calculateGrowth() {

    var oldValue = inputValue("growth-old");
    var newValue = inputValue("growth-new");

    var growth =
      oldValue !== 0
        ? ((newValue - oldValue) / oldValue) * 100
        : 0;

    var result =
      document.getElementById("growth-result");

    if (result) {

      result.textContent =
        "Growth: " +
        growth.toFixed(2) +
        "%";

    }

  }


  function calculateProductivity() {

    var sales = inputValue("prod-sales");
    var team = inputValue("prod-team");

    var productivity =
      team > 0
        ? sales / team
        : 0;

    var result =
      document.getElementById("prod-result");

    if (result) {

      result.textContent =
        "Sales per Team Member: " +
        productivity.toFixed(2);

    }

  }


  /* =======================================================
     AI INPUT
     ======================================================= */

  function askAIFromInput() {

    var input =
      document.getElementById("ai-input");

    if (!input) {
      return;
    }

    var question = input.value.trim();

    if (!question) {

      showToast("မေးခွန်းတစ်ခုရေးပေးပါ");
      return;

    }

    input.value = "";

    askAI(question);

  }


  /* =======================================================
     PAYMENT INTEREST
     ======================================================= */

  function savePaymentInterest(planId) {

    var plan = PAYMENT_PLANS.find(function (item) {
      return item.id === planId;
    });

    if (!plan) {
      return;
    }

    storageSetJSON(PAYMENT_KEY, {
      plan: plan.id,
      name: plan.name,
      price: plan.price,
      requestedAt: new Date().toISOString()
    });

    closeModal();

    showToast(
      plan.name +
      " activation request saved"
    );

  }


  /* =======================================================
     SETTINGS
     ======================================================= */

  function saveSettings() {

    var nameInput =
      document.getElementById("settings-name");

    var roleInput =
      document.getElementById("settings-role");

    var name =
      nameInput
        ? nameInput.value.trim()
        : savedUser.name;

    var role =
      roleInput
        ? roleInput.value.trim()
        : savedUser.role;

    if (!name) {
      name = "Aung Zar Ni Win";
    }

    if (!role) {
      role = "Business Manager";
    }

    savedUser = {
      name: name,
      role: role
    };

    storageSetJSON(
      USER_KEY,
      savedUser
    );

    storageSetJSON(
      SETTINGS_KEY,
      savedUser
    );

    updateProfileUI();

    showToast("Profile settings saved");

    renderSettings();

  }


  /* =======================================================
     RESET
     ======================================================= */

  function resetProgress() {

    var confirmed =
      window.confirm(
        "Reset all lesson progress?"
      );

    if (!confirmed) {
      return;
    }

    setCompleted([]);

    showToast("Lesson progress reset");

    renderProgress();

  }


  function resetAppData() {

    var confirmed =
      window.confirm(
        "Reset academy progress, KPI and local settings?"
      );

    if (!confirmed) {
      return;
    }

    try {

      localStorage.removeItem(COMPLETED_KEY);
      localStorage.removeItem(OLD_COMPLETED_KEY);
      localStorage.removeItem(KPI_KEY);
      localStorage.removeItem(PAYMENT_KEY);

    } catch (error) {}

    showToast("Academy data reset");

    state.currentLessonId = null;
    goToSection("dashboard");

  }


  /* =======================================================
     GLOBAL EVENT DELEGATION
     ======================================================= */

  function setupEvents() {

    document.addEventListener("click", function (event) {

      var target =
        event.target.closest(
          "[data-action], .nav-item[data-section]"
        );

      if (!target) {
        return;
      }

      if (
        target.classList.contains("nav-item") &&
        target.hasAttribute("data-section")
      ) {

        var section =
          target.getAttribute("data-section");

        state.currentLessonId = null;

        goToSection(section);

        return;

      }

      handleAction(target);

    });


    document.addEventListener("keydown", function (event) {

      if (
        event.key === "Enter" &&
        event.target &&
        event.target.id === "ai-input" &&
        !event.shiftKey
      ) {

        event.preventDefault();

        askAIFromInput();

      }

    });


    var menuToggle =
      document.getElementById("menu-toggle");

    if (menuToggle) {

      menuToggle.addEventListener(
        "click",
        toggleMobileMenu
      );

    }


    var sidebarClose =
      document.getElementById("sidebar-close");

    if (sidebarClose) {

      sidebarClose.addEventListener(
        "click",
        closeMobileMenu
      );

    }


    var mobileOverlay =
      document.querySelector(".mobile-overlay");

    if (mobileOverlay) {

      mobileOverlay.addEventListener(
        "click",
        closeMobileMenu
      );

    }

  }


  /* =======================================================
     GLOBAL ERROR PROTECTION
     ======================================================= */

  window.addEventListener("error", function (event) {

    console.error(
      "Aung Business Academy error:",
      event.error || event.message
    );

  });


  window.addEventListener(
    "unhandledrejection",
    function (event) {

      console.error(
        "Aung Business Academy promise error:",
        event.reason
      );

    }
  );


  /* =======================================================
     INITIALIZE
     ======================================================= */

  function init() {

    try {

      renderLoading();

      setupEvents();

      storageSet(
        "aba_app_version",
        STORAGE_VERSION
      );

      updateTopbar();
      updateProfileUI();

      setTimeout(function () {

        try {

          renderCurrentSection();

        } catch (error) {

          console.error(
            "Initial render error:",
            error
          );

          renderError(
            "Academy could not load",
            "Please refresh the page and try again"
          );

        }

      }, 80);

    } catch (error) {

      console.error(
        "Aung Business Academy initialization error:",
        error
      );

      renderError(
        "Application Error",
        "Please refresh the page and try again"
      );

    }

  }


  /* =======================================================
     PUBLIC API
     ======================================================= */

  window.AungBusinessAcademy = {

    version: APP_VERSION,

    lessons: lessons,

    courseData: categoryData,

    getLessonContent: getLessonContent,

    goToSection: goToSection,

    openLesson: openLesson,

    resetProgress: resetProgress,

    getCompleted: getCompleted,

    getProgress: getProgress,

    getPremiumInfo: getPremiumInfo,

    getTotalLessons: function () {
      return TOTAL_LESSONS;
    },

    getKPI: getKPI

  };


  /* =======================================================
     START
     ======================================================= */

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
```
