"use strict";

(function () {

  /* =========================================================
     AUNG BUSINESS ACADEMY
     V15.1 STABLE PROFESSIONAL
     ========================================================= */

  var APP_NAME = "Aung Business Academy";
  var API_BASE_URL = "https://aung-business-academy.onrender.com";
  var AI_API_URL = API_BASE_URL + "/api/ai";

  var KEY_COMPLETED = "aba_completed_lessons";
  var KEY_USER = "aung_business_academy_user";
  var KEY_PREMIUM = "aung_business_academy_premium";
  var KEY_KPI = "aung_business_academy_kpi";
  var KEY_SETTINGS = "aung_business_academy_settings";
  var KEY_PAYMENT = "aung_business_academy_payment";

  var DEFAULT_USER = {
    name: "Aung Zar Ni Win",
    role: "Business Manager"
  };

  var state = {
    section: "dashboard",
    lessonId: null,
    category: "All",
    search: "",
    user: DEFAULT_USER,
    completed: [],
    premium: false,
    kpi: {
      target: 500,
      actual: 385,
      team: 4,
      customers: 0,
      orders: 0,
      workingDays: 26,
      pipeline: 0
    }
  };

  /* =========================================================
     SAFE STORAGE
     ========================================================= */

  function readStorage(key, fallback) {
    try {
      var value = localStorage.getItem(key);
      if (value === null) return fallback;
      return JSON.parse(value);
    } catch (error) {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  function removeStorage(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {}
  }

  /* =========================================================
     COURSE DATA
     ========================================================= */

  var courseData = [
    {
      name: "Business Fundamentals",
      icon: "▣",
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
      icon: "↗",
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
      icon: "◆",
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
      icon: "◉",
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
      icon: "✦",
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
      icon: "◇",
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
      icon: "₿",
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
      icon: "▤",
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
      icon: "▰",
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
      icon: "▥",
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
      icon: "◆",
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
      icon: "♟",
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
      icon: "♙",
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
        "Retention"
      ]
    },
    {
      name: "Negotiation",
      icon: "⇄",
      topics: [
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
      icon: "↗",
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
      icon: "▥",
      topics: [
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
      icon: "◎",
      topics: [
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
      icon: "✦",
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
      icon: "◷",
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

  var lessons = [];
  var lessonCounter = 0;

  for (var c = 0; c < courseData.length; c++) {
    for (var t = 0; t < courseData[c].topics.length; t++) {
      lessonCounter++;

      lessons.push({
        id: lessonCounter,
        title: courseData[c].topics[t],
        category: courseData[c].name,
        icon: courseData[c].icon,
        categoryIndex: c,
        lessonIndex: t + 1
      });
    }
  }

  /* =========================================================
     CATEGORY GUIDES
     ========================================================= */

  var guides = {
    "Business Fundamentals": {
      focus: "တန်ဖိုးဖန်တီးမှု၊ Business Model နှင့် အခြေခံစီးပွားရေးစနစ်",
      kpis: ["Revenue", "Gross Profit", "Cash Flow"],
      application: "ကိုယ့်လုပ်ငန်းရဲ့ Customer → Value → Revenue → Cost flow ကို ပြန်စစ်ပါ",
      example: "Customer လိုအပ်ချက်တစ်ခုကို ဖြေရှင်းပေးပြီး ထိုတန်ဖိုးကို ရောင်းချနိုင်မှ Business Model က အလုပ်လုပ်နေတယ်လို့ သတ်မှတ်နိုင်ပါတယ်"
    },
    "Business Strategy": {
      focus: "ဦးတည်ချက်ရွေးချယ်ခြင်း၊ Competitive Advantage နှင့် Execution",
      kpis: ["Growth %", "Market Share", "Strategic Action Completion"],
      application: "ဦးစားပေးရမယ့် 3 ခုကို သတ်မှတ်ပြီး Owner, Deadline, KPI ထားပါ",
      example: "Sales ကျနေတဲ့အချိန်မှာ အရာအားလုံးကို တစ်ပြိုင်နက်မလုပ်ဘဲ Customer Segment တစ်ခုကို အရင်ရွေးပြီး Execution လုပ်ပါ"
    },
    "Sales Management": {
      focus: "Target၊ Territory၊ Pipeline၊ Forecast နှင့် Sales Team Execution",
      kpis: ["Achievement %", "Productivity", "Pipeline Coverage", "Forecast Accuracy"],
      application: "Monthly Target ကို Weekly → Daily → Salesperson အလိုက် ခွဲပြီး Review လုပ်ပါ",
      example: "Target 500 L ဖြစ်ရင် Achievement, Gap, Daily Run Rate နဲ့ Pipeline Coverage ကို နေ့စဉ်ကြည့်ပါ"
    },
    "Sales Skills": {
      focus: "Customer Discovery၊ Value Selling၊ Objection Handling နှင့် Closing",
      kpis: ["Conversion Rate", "Average Order", "Repeat Purchase"],
      application: "Product feature ပြောရုံမဟုတ်ဘဲ Customer Problem → Benefit → Value အတိုင်း ရောင်းပါ",
      example: "ဈေးနှုန်းကို တိုက်ရိုက်လျှော့မပေးခင် Customer အတွက် Value ဘာရှိလဲကို ရှင်းပြပါ"
    },
    "Customer Management": {
      focus: "Customer Value၊ Experience၊ Retention နှင့် Relationship",
      kpis: ["Retention Rate", "Repeat Rate", "Complaint Rate"],
      application: "High Value Customer တွေကို Segment လုပ်ပြီး Follow-up Plan ထားပါ",
      example: "Complaint တစ်ခုကို ဖြေရှင်းရုံမက ထပ်မဖြစ်အောင် Process ကို ပြင်ပါ"
    },
    "Marketing": {
      focus: "Market၊ Customer၊ Campaign နှင့် Marketing ROI",
      kpis: ["Leads", "Conversion", "Marketing ROI"],
      application: "Campaign တစ်ခုချင်းစီအတွက် Objective, Audience, Budget, KPI သတ်မှတ်ပါ",
      example: "Promotion လုပ်ပြီး Sales တက်မတက်ကို Reach တစ်ခုတည်းမကြည့်ဘဲ Conversion နဲ့ ROI ကြည့်ပါ"
    },
    "Branding": {
      focus: "Brand Identity၊ Positioning၊ Trust နှင့် Consistency",
      kpis: ["Awareness", "Consideration", "Repeat Purchase"],
      application: "Brand Promise တစ်ခုကို Channel အားလုံးမှာ Consistent ဖြစ်အောင် ထိန်းပါ",
      example: "Logo တစ်ခုတည်းက Brand မဟုတ်ဘဲ Customer က သင့်လုပ်ငန်းကို ဘယ်လိုမှတ်မိသလဲဆိုတာက Brand Experience ဖြစ်ပါတယ်"
    },
    "Finance": {
      focus: "Revenue၊ Cost၊ Profit၊ Cash Flow နှင့် Financial Control",
      kpis: ["Gross Margin", "OPEX Ratio", "Cash Flow"],
      application: "Sales တက်တာနဲ့ Profit တက်တာ မတူတဲ့အတွက် Margin နဲ့ Cash ကိုပါ Review လုပ်ပါ",
      example: "Revenue တိုးပေမယ့် Margin ကျနေပါက Pricing, Discount, Cost ကို ပြန်စစ်ပါ"
    },
    "Accounting & P&L": {
      focus: "Financial Statements နှင့် P&L Interpretation",
      kpis: ["Gross Profit", "Gross Margin", "Net Margin"],
      application: "P&L ကို Revenue → COGS → Gross Profit → OPEX → Net Profit အတိုင်း ဖတ်ပါ",
      example: "Sales တက်သော်လည်း Net Profit ကျနေရင် Gross Margin နဲ့ Operating Expenses ကို ခွဲစစ်ပါ"
    },
    "Distribution & Operations": {
      focus: "Channel၊ Distributor၊ Stock၊ Route နှင့် Operational Excellence",
      kpis: ["Numeric Distribution", "Fill Rate", "Stock Cover"],
      application: "Right Product + Right Stock + Right Outlet + Right Time ကို စောင့်ကြည့်ပါ",
      example: "Stock မရှိလို့ Sales မရတာဆိုရင် Sales Team Problem မဟုတ်ဘဲ Supply/Inventory Problem ဖြစ်နိုင်ပါတယ်"
    },
    "Retail & Modern Trade": {
      focus: "Outlet Execution၊ Availability၊ Shelf နှင့် Promotion",
      kpis: ["Availability", "Distribution", "Promo Compliance"],
      application: "Outlet တစ်ခုချင်းစီမှာ Availability နဲ့ Execution Standard စစ်ပါ",
      example: "Promotion ရှိပေမယ့် Shelf ပေါ် Product မရှိရင် Promotion Investment ရဲ့ Effectiveness ကျနိုင်ပါတယ်"
    },
    "Key Account Management": {
      focus: "Strategic Account Planning၊ JBP နှင့် Customer Profitability",
      kpis: ["Account Growth", "Margin", "Retention"],
      application: "Key Account တစ်ခုချင်းစီအတွက် Annual Objective, Opportunity, Action Plan ထားပါ",
      example: "Customer Sales တက်ပေမယ့် Margin ကျနေပါက Account Growth ကို Profitability နဲ့တွဲကြည့်ပါ"
    },
    "Leadership & Management": {
      focus: "Goal Setting၊ Delegation၊ Coaching နှင့် Team Performance",
      kpis: ["Goal Completion", "Coaching Frequency", "Team Productivity"],
      application: "Manager က အလုပ်အားလုံးကို ကိုယ်တိုင်လုပ်မယ့်အစား Team ကို Ownership ပေးပါ",
      example: "Salesperson တစ်ယောက် Target မရရင် အပြစ်တင်မယ့်အစား Skill, Activity, Territory, Customer Issue ခွဲစစ်ပါ"
    },
    "People & HR": {
      focus: "Recruitment၊ Development၊ Performance နှင့် Retention",
      kpis: ["Training Completion", "Retention", "Time to Fill"],
      application: "Role တစ်ခုချင်းစီအတွက် Clear JD, KPI, Training Plan ထားပါ",
      example: "Performance မကောင်းတာကို Training လိုတာလား၊ Motivation လိုတာလား၊ Role Fit မဖြစ်တာလား ခွဲခြားပါ"
    },
    "Negotiation": {
      focus: "Preparation၊ Value၊ Concession နှင့် Agreement",
      kpis: ["Win Rate", "Margin", "Payment Terms"],
      application: "Negotiation မစခင် Objective, Minimum Acceptable Result, BATNA သတ်မှတ်ပါ",
      example: "ဈေးနှုန်းတစ်ခုတည်းကို မညှိဘဲ Volume, Payment Terms, Delivery, Promotion တို့နဲ့ Package တစ်ခုလုံးညှိနိုင်ပါတယ်"
    },
    "Business Development": {
      focus: "Opportunity၊ New Market၊ Partnership နှင့် Growth",
      kpis: ["Qualified Pipeline", "Conversion", "New Revenue"],
      application: "Opportunity တစ်ခုချင်းစီကို Value, Market Size, Investment, Risk နဲ့ Evaluate လုပ်ပါ",
      example: "Market အသစ်ဝင်မယ့်အခါ Pilot Area တစ်ခုနဲ့ စပြီး Result အပေါ်မူတည်ပြီး Scale လုပ်ပါ"
    },
    "KPI & Data Analysis": {
      focus: "Measurement၊ Gap Analysis၊ Trend နှင့် Data-Based Decision",
      kpis: ["Achievement %", "Gap", "Trend"],
      application: "Number ကိုကြည့်ပြီး အဆုံးမသတ်ဘဲ Why ဖြစ်တယ်ဆိုတာကို Root Cause အထိသွားပါ",
      example: "Achievement 80% ဆိုတာကို သိရုံနဲ့ မလုံလောက်ဘဲ ဘယ် Territory, Product, Person က Gap ဖြစ်စေတာလဲ ရှာပါ"
    },
    "Problem Solving & Decision Making": {
      focus: "Problem Definition၊ Root Cause၊ Prioritization နှင့် Action",
      kpis: ["Action Closure", "Recurrence Rate", "Resolution Time"],
      application: "Problem → Root Cause → Options → Decision → Action → Review အတိုင်း လုပ်ပါ",
      example: "Sales ကျတာကို Demand မရှိဘူးလို့ ချက်ချင်းမဆုံးဖြတ်ဘဲ Price, Availability, Distribution, Competition ခွဲစစ်ပါ"
    },
    "Digital Business & AI": {
      focus: "Digital Transformation၊ AI၊ Automation နှင့် Productivity",
      kpis: ["Time Saved", "Adoption", "Error Reduction"],
      application: "AI ကို အလုပ်အစားထိုးဖို့ထက် Repetitive Work လျှော့ပြီး Decision Quality တိုးဖို့ အသုံးချပါ",
      example: "Weekly Sales Report ကို AI နဲ့ Summary ပြုလုပ်ပြီး Manager က Action Decision ကို အာရုံစိုက်နိုင်ပါတယ်"
    },
    "Productivity & Career": {
      focus: "Time၊ Priority၊ Focus နှင့် Professional Development",
      kpis: ["Priority Completion", "Learning Hours", "Execution Rate"],
      application: "နေ့စဉ်အရေးကြီးဆုံး 3 ခုကို သတ်မှတ်ပြီး အရင်ဆုံးပြီးအောင်လုပ်ပါ",
      example: "Meeting များပြီး Execution မရတာဆိုရင် Meeting Objective, Agenda, Decision Owner ကို ပြန်သတ်မှတ်ပါ"
    }
  };

  /* =========================================================
     INITIALIZE
     ========================================================= */

  function init() {

    state.user = readStorage(KEY_USER, DEFAULT_USER);

    if (!state.user || !state.user.name) {
      state.user = DEFAULT_USER;
    }

    state.completed = readStorage(KEY_COMPLETED, []);

    if (!Array.isArray(state.completed)) {
      state.completed = [];
    }

    state.premium = !!readStorage(KEY_PREMIUM, false);

    state.kpi = readStorage(KEY_KPI, state.kpi);

    if (!state.kpi || typeof state.kpi !== "object") {
      state.kpi = {
        target: 500,
        actual: 385,
        team: 4,
        customers: 0,
        orders: 0,
        workingDays: 26,
        pipeline: 0
      };
    }

    updateHeader();
    bindEvents();
    renderSection("dashboard");
  }

  /* =========================================================
     HEADER
     ========================================================= */

  function updateHeader() {

    var name = escapeHtml(state.user.name || DEFAULT_USER.name);
    var role = escapeHtml(state.user.role || DEFAULT_USER.role);

    var sideName = document.getElementById("sidebarName");
    var sideRole = document.getElementById("sidebarRole");
    var topName = document.getElementById("topName");
    var topRole = document.getElementById("topRole");
    var date = document.getElementById("todayDate");

    if (sideName) sideName.textContent = state.user.name;
    if (sideRole) sideRole.textContent = state.user.role;
    if (topName) topName.textContent = state.user.name;
    if (topRole) topRole.textContent = state.user.role;

    if (date) {
      var d = new Date();
      date.textContent = d.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
    }

    void name;
    void role;
  }

  /* =========================================================
     HELPERS
     ========================================================= */

  function escapeHtml(value) {
    var div = document.createElement("div");
    div.textContent = String(value === undefined || value === null ? "" : value);
    return div.innerHTML;
  }

  function formatNumber(value) {
    var n = Number(value);
    if (isNaN(n)) n = 0;

    return n.toLocaleString("en-US", {
      maximumFractionDigits: 2
    });
  }

  function getCompletedCount() {
    return state.completed.length;
  }

  function getProgress() {
    if (!lessons.length) return 0;

    return Math.round(
      (getCompletedCount() / lessons.length) * 100
    );
  }

  function isCompleted(id) {
    return state.completed.indexOf(Number(id)) !== -1;
  }

  function isPremiumLesson(id) {
    return Number(id) > 1;
  }

  function canOpenLesson(id) {
    if (!isPremiumLesson(id)) return true;
    return state.premium;
  }

  function getLesson(id) {
    for (var i = 0; i < lessons.length; i++) {
      if (lessons[i].id === Number(id)) {
        return lessons[i];
      }
    }

    return null;
  }

  function getGuide(category) {
    return guides[category] || guides["Business Fundamentals"];
  }

  function achievementPercent() {
    var target = Number(state.kpi.target) || 0;
    var actual = Number(state.kpi.actual) || 0;

    if (target <= 0) return 0;

    return Math.round((actual / target) * 100);
  }

  function gapValue() {
    var target = Number(state.kpi.target) || 0;
    var actual = Number(state.kpi.actual) || 0;

    return target - actual;
  }

  /* =========================================================
     NAVIGATION
     ========================================================= */

  function renderSection(section) {

    state.section = section;
    state.lessonId = null;

    closeMobileMenu();

    updateNav();

    var app = document.getElementById("app");

    if (!app) return;

    try {

      if (section === "dashboard") {
        setPageHeader("Dashboard", "Business Management Command Center");
        app.innerHTML = renderDashboard();
      }

      else if (section === "academy") {
        setPageHeader("Business Academy", "Professional Business Management Learning System");
        app.innerHTML = renderAcademy();
      }

      else if (section === "lessons") {
        setPageHeader("Lessons", "260 Professional Business Lessons");
        app.innerHTML = renderLessons();
      }

      else if (section === "progress") {
        setPageHeader("My Progress", "Learning Progress & Category Performance");
        app.innerHTML = renderProgress();
      }

      else if (section === "sales") {
        setPageHeader("Sales Manager", "Daily Sales Management Command Center");
        app.innerHTML = renderSalesManager();
      }

      else if (section === "kpi") {
        setPageHeader("KPI & Analytics", "Target, Actual, Achievement & Gap");
        app.innerHTML = renderKPI();
      }

      else if (section === "reports") {
        setPageHeader("Business Reports", "Management Review & Performance Summary");
        app.innerHTML = renderReports();
      }

      else if (section === "tools") {
        setPageHeader("Business Tools", "Pricing, Profit, Break-even & Sales Calculators");
        app.innerHTML = renderBusinessTools();
      }

      else if (section === "ai-tools") {
        setPageHeader("AI Business Tools", "Practical AI Tools for Managers");
        app.innerHTML = renderAITools();
      }

      else if (section === "coach") {
        setPageHeader("AI Business Coach", "Business & Sales Problem Solving Assistant");
        app.innerHTML = renderCoach();
      }

      else if (section === "premium") {
        setPageHeader("Premium Membership", "Unlock the Complete Business Academy");
        app.innerHTML = renderPremium();
      }

      else if (section === "settings") {
        setPageHeader("Settings", "Profile & Application Settings");
        app.innerHTML = renderSettings();
      }

      else {
        setPageHeader("Dashboard", "Business Management Command Center");
        app.innerHTML = renderDashboard();
      }

    } catch (error) {

      app.innerHTML =
        '<div class="card">' +
        '<h2>Application Error</h2>' +
        '<p>ဒီ Section ကို ပြသရာမှာ Error တစ်ခုဖြစ်နေပါတယ်</p>' +
        '<button class="btn btn-primary" data-action="go-dashboard">Dashboard သို့ပြန်သွားရန်</button>' +
        '</div>';

      console.error(error);
    }
  }

  function updateNav() {

    var buttons = document.querySelectorAll(".nav-item");

    for (var i = 0; i < buttons.length; i++) {

      var section = buttons[i].getAttribute("data-section");

      if (section === state.section) {
        buttons[i].classList.add("active");
      } else {
        buttons[i].classList.remove("active");
      }
    }
  }

  function setPageHeader(title, subtitle) {

    var titleEl = document.getElementById("pageTitle");
    var subEl = document.getElementById("pageSubtitle");

    if (titleEl) titleEl.textContent = title;
    if (subEl) subEl.textContent = subtitle;
  }

  /* =========================================================
     DASHBOARD
     ========================================================= */

  function renderDashboard() {

    var completed = getCompletedCount();
    var progress = getProgress();
    var achievement = achievementPercent();
    var gap = gapValue();

    var continueLesson = null;

    for (var i = 0; i < lessons.length; i++) {
      if (!isCompleted(lessons[i].id)) {
        continueLesson = lessons[i];
        break;
      }
    }

    if (!continueLesson) {
      continueLesson = lessons[0];
    }

    return (

      '<div class="hero">' +
        '<h1>Welcome back, ' + escapeHtml(state.user.name) + '</h1>' +
        '<p>Build stronger business management, sales execution and leadership skills</p>' +

        '<div class="hero-actions">' +
          '<button class="btn btn-light" data-action="open-lesson" data-id="' + continueLesson.id + '">' +
            'Continue Learning' +
          '</button>' +

          '<button class="btn btn-primary" data-action="go-sales">' +
            'Sales Manager' +
          '</button>' +
        '</div>' +
      '</div>' +

      '<div class="stat-grid">' +

        statCard("▣", "Total Lessons", lessons.length, "Professional lessons") +

        statCard("✓", "Completed", completed, "Lessons completed") +

        statCard("◔", "Overall Progress", progress + "%", "Learning progress") +

        statCard("↗", "Sales Achievement", achievement + "%", "Current KPI") +

      '</div>' +

      '<div class="grid-2">' +

        '<div class="card">' +
          '<div class="section-heading">' +
            '<div>' +
              '<h2>Continue Learning</h2>' +
              '<p>Your next recommended lesson</p>' +
            '</div>' +
            '<span class="badge badge-blue">' + escapeHtml(continueLesson.category) + '</span>' +
          '</div>' +

          '<div class="lesson-item" data-action="open-lesson" data-id="' + continueLesson.id + '">' +
            '<div class="lesson-number">' + continueLesson.id + '</div>' +
            '<div class="lesson-info">' +
              '<h3>' + escapeHtml(continueLesson.title) + '</h3>' +
              '<p>' + escapeHtml(continueLesson.category) + ' • Lesson ' + continueLesson.lessonIndex + '</p>' +
            '</div>' +
            '<div class="lesson-status">→</div>' +
          '</div>' +
        '</div>' +

        '<div class="card">' +
          '<div class="section-heading">' +
            '<div>' +
              '<h2>Sales KPI</h2>' +
              '<p>Current management snapshot</p>' +
            '</div>' +
          '</div>' +

          '<div class="progress-row">' +
            '<div class="progress-head">' +
              '<span>Target vs Actual</span>' +
              '<span>' + formatNumber(state.kpi.actual) + ' / ' + formatNumber(state.kpi.target) + '</span>' +
            '</div>' +
            '<div class="progress-track">' +
              '<div class="progress-fill" style="width:' + Math.min(achievement, 100) + '%"></div>' +
            '</div>' +
          '</div>' +

          '<div class="kpi-box">' +
            '<div class="kpi-mini"><strong>' + formatNumber(state.kpi.target) + '</strong><span>Target</span></div>' +
            '<div class="kpi-mini"><strong>' + formatNumber(state.kpi.actual) + '</strong><span>Actual</span></div>' +
            '<div class="kpi-mini"><strong>' + formatNumber(gap) + '</strong><span>Gap</span></div>' +
          '</div>' +

        '</div>' +

      '</div>' +

      '<div class="section-heading">' +
        '<div>' +
          '<h2>Management Focus</h2>' +
          '<p>Core areas for a professional business manager</p>' +
        '</div>' +
      '</div>' +

      '<div class="focus-grid">' +

        focusCard("↗", "Sales Management", "Target, team, territory, pipeline and execution", "sales") +
        focusCard("♟", "Business Strategy", "Strategy, positioning and growth decisions", "academy") +
        focusCard("♙", "Leadership", "People, coaching and performance management", "academy") +
        focusCard("▥", "KPI & Analytics", "Measure, diagnose and take action", "kpi") +
        focusCard("₿", "Finance", "Profit, margin, cash flow and cost control", "tools") +
        focusCard("✦", "AI & Digital", "Use AI to improve productivity and decisions", "coach") +

      '</div>' +

      '<div style="height:24px"></div>' +

      '<div class="section-heading">' +
        '<div>' +
          '<h2>Academy Categories</h2>' +
          '<p>' + courseData.length + ' professional learning categories</p>' +
        '</div>' +
        '<button class="btn btn-outline" data-action="go-academy">View Academy</button>' +
      '</div>' +

      '<div class="category-grid">' +

        courseData.slice(0, 8).map(function (cat, index) {
          return categoryCard(cat, index);
        }).join("") +

      '</div>'
    );
  }

  function statCard(icon, label, value, note) {

    return (
      '<div class="stat-card">' +
        '<div class="stat-top">' +
          '<div class="stat-icon">' + icon + '</div>' +
        '</div>' +
        '<div class="stat-label">' + label + '</div>' +
        '<div class="stat-value">' + value + '</div>' +
        '<div class="stat-note">' + note + '</div>' +
      '</div>'
    );
  }

  function focusCard(icon, title, text, section) {

    return (
      '<div class="focus-card" data-action="go-section" data-section="' + section + '">' +
        '<div class="focus-icon">' + icon + '</div>' +
        '<h4>' + title + '</h4>' +
        '<p>' + text + '</p>' +
      '</div>'
    );
  }

  function categoryCard(cat, index) {

    return (
      '<div class="category-card" data-action="open-category" data-index="' + index + '">' +
        '<div class="cat-icon">' + cat.icon + '</div>' +
        '<h3>' + escapeHtml(cat.name) + '</h3>' +
        '<p>' + cat.topics.length + ' Lessons</p>' +
      '</div>'
    );
  }

  /* =========================================================
     ACADEMY
     ========================================================= */

  function renderAcademy() {

    return (

      '<div class="hero">' +
        '<h1>Business Academy</h1>' +
        '<p>' + lessons.length + ' professional lessons across ' + courseData.length + ' management categories</p>' +

        '<div class="hero-actions">' +
          '<button class="btn btn-light" data-action="go-lessons">Browse All Lessons</button>' +
          '<button class="btn btn-primary" data-action="go-progress">View My Progress</button>' +
        '</div>' +
      '</div>' +

      '<div class="section-heading">' +
        '<div>' +
          '<h2>Professional Learning Categories</h2>' +
          '<p>Business management, sales, finance, leadership and digital business</p>' +
        '</div>' +
      '</div>' +

      '<div class="category-grid">' +
        courseData.map(function (cat, index) {
          return categoryCard(cat, index);
        }).join("") +
      '</div>'
    );
  }

  /* =========================================================
     LESSONS
     ========================================================= */

  function renderLessons() {

    var filtered = [];

    for (var i = 0; i < lessons.length; i++) {

      var lesson = lessons[i];

      var categoryMatch =
        state.category === "All" ||
        lesson.category === state.category;

      var searchMatch =
        !state.search ||
        lesson.title.toLowerCase().indexOf(state.search.toLowerCase()) !== -1 ||
        lesson.category.toLowerCase().indexOf(state.search.toLowerCase()) !== -1;

      if (categoryMatch && searchMatch) {
        filtered.push(lesson);
      }
    }

    return (

      '<div class="toolbar">' +

        '<div class="search-wrap">' +
          '<input id="lessonSearch" class="search-input" type="search" placeholder="Search lessons..." value="' + escapeHtml(state.search) + '">' +
        '</div>' +

        '<div class="select-wrap">' +
          '<select id="lessonCategory" class="select-input">' +
            '<option value="All">All Categories</option>' +
            courseData.map(function (cat) {
              return '<option value="' + escapeHtml(cat.name) + '"' +
                (state.category === cat.name ? ' selected' : '') +
                '>' + escapeHtml(cat.name) + '</option>';
            }).join("") +
          '</select>' +
        '</div>' +

      '</div>' +

      '<div class="card" style="margin-bottom:15px">' +
        '<div class="section-heading">' +
          '<div>' +
            '<h2>' + filtered.length + ' Lessons</h2>' +
            '<p>Lesson 1 is free • Lesson 2+ requires Premium Membership</p>' +
          '</div>' +
          '<span class="badge ' + (state.premium ? 'badge-green' : 'badge-orange') + '">' +
            (state.premium ? 'PREMIUM ACTIVE' : 'BASIC') +
          '</span>' +
        '</div>' +
      '</div>' +

      '<div class="lesson-list">' +

        (filtered.length ?
          filtered.map(function (lesson) {
            return renderLessonItem(lesson);
          }).join("")
          :
          '<div class="empty-state">No lessons found</div>'
        ) +

      '</div>'
    );
  }

  function renderLessonItem(lesson) {

    var complete = isCompleted(lesson.id);
    var locked = !canOpenLesson(lesson.id);

    return (

      '<div class="lesson-item" data-action="open-lesson" data-id="' + lesson.id + '">' +

        '<div class="lesson-number">' +
          (complete ? "✓" : lesson.id) +
        '</div>' +

        '<div class="lesson-info">' +
          '<h3>' + escapeHtml(lesson.title) + '</h3>' +
          '<p>' +
            escapeHtml(lesson.category) +
            ' • Lesson ' +
            lesson.lessonIndex +
            ' ' +
            (lesson.id === 1 ? '• FREE' : '• PREMIUM') +
          '</p>' +
        '</div>' +

        '<div class="lesson-status ' +
          (complete ? 'lesson-complete' : locked ? 'lesson-lock' : '') +
        '">' +

          (complete ? "✓" : locked ? "◆" : "→") +

        '</div>' +

      '</div>'
    );
  }

  /* =========================================================
     LESSON READER
     ========================================================= */

  function openLesson(id) {

    var lesson = getLesson(id);

    if (!lesson) {
      showToast("Lesson မတွေ့ပါ");
      return;
    }

    if (!canOpenLesson(lesson.id)) {
      showPremiumModal();
      return;
    }

    state.lessonId = lesson.id;

    setPageHeader(
      "Lesson " + lesson.id,
      lesson.category
    );

    var app = document.getElementById("app");

    if (!app) return;

    app.innerHTML = renderLessonReader(lesson);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function renderLessonReader(lesson) {

    var guide = getGuide(lesson.category);
    var content = buildLessonContent(lesson, guide);
    var complete = isCompleted(lesson.id);

    return (

      '<div class="lesson-reader">' +

        '<div class="reader-head">' +

          '<button class="btn btn-light back-btn" data-action="back-lessons">' +
            '← Back to Lessons' +
          '</button>' +

          '<div>' +
            '<span class="badge badge-blue">' + escapeHtml(lesson.category) + '</span>' +
            '<h1>Lesson ' + lesson.id + ': ' + escapeHtml(lesson.title) + '</h1>' +
            '<p>Professional Business Management Learning</p>' +
          '</div>' +

        '</div>' +

        content +

        '<div class="lesson-section">' +

          '<h2>Lesson Completion</h2>' +

          '<div class="tip-box">' +
            (complete ?
              "ဒီ Lesson ကို Completed လုပ်ထားပြီးပါပြီ"
              :
              "Lesson ကိုဖတ်ပြီး Practical Assignment ပြီးဆုံးတဲ့အခါ Completed လုပ်ပါ"
            ) +
          '</div>' +

          '<div class="form-actions">' +

            '<button class="btn ' +
              (complete ? 'btn-outline' : 'btn-success') +
              '" data-action="toggle-complete" data-id="' + lesson.id + '">' +

              (complete ? "✓ Completed — Mark as Incomplete" : "✓ Mark Lesson Complete") +

            '</button>' +

            '<button class="btn btn-primary" data-action="go-coach">' +
              'Ask AI Business Coach' +
            '</button>' +

          '</div>' +

        '</div>' +

      '</div>'
    );
  }

  function buildLessonContent(lesson, guide) {

    var title = lesson.title;

    return (

      '<div class="lesson-section">' +
        '<h2>Overview</h2>' +
        '<p><strong>' + escapeHtml(title) + '</strong> သည် ' +
          escapeHtml(lesson.category) +
          ' အတွင်းမှာ Manager တစ်ယောက်အနေနဲ့ လက်တွေ့အသုံးချနိုင်ဖို့ လေ့လာရမယ့် အဓိကအကြောင်းအရာတစ်ခုဖြစ်ပါတယ်</p>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h2>Objective</h2>' +
        '<ul>' +
          '<li>' + escapeHtml(title) + ' ရဲ့ အဓိကအဓိပ္ပါယ်ကို နားလည်ရန်</li>' +
          '<li>Business Situation ထဲမှာ ဘယ်လိုအသုံးချရမလဲ သိရန်</li>' +
          '<li>Manager KPI နဲ့ ချိတ်ဆက်ပြီး Decision ချနိုင်ရန်</li>' +
        '</ul>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h2>Core Concept</h2>' +
        '<p>' + escapeHtml(guide.focus) + ' ကို အခြေခံပြီး ' +
          escapeHtml(title) +
          ' ကို Business Result ထွက်အောင် အသုံးချရပါတယ်</p>' +
        '<div class="tip-box">' +
          '<strong>Manager Principle</strong><br>' +
          'Knowledge သိထားရုံမဟုတ်ဘဲ KPI → Action → Result အဖြစ် ပြောင်းလဲနိုင်ဖို့ အရေးကြီးပါတယ်' +
        '</div>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h2>Practical Framework</h2>' +
        '<ol>' +
          '<li>လက်ရှိ Business Situation ကို သတ်မှတ်ပါ</li>' +
          '<li>Problem သို့မဟုတ် Opportunity ကို ရှင်းလင်းစွာ သတ်မှတ်ပါ</li>' +
          '<li>Priority Action 3 ခု သတ်မှတ်ပါ</li>' +
          '<li>Owner နှင့် Deadline သတ်မှတ်ပါ</li>' +
          '<li>KPI နဲ့ Result ကို Review လုပ်ပါ</li>' +
        '</ol>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h2>Why It Matters</h2>' +
        '<p>' +
          escapeHtml(title) +
          ' ကို ကောင်းစွာအသုံးချနိုင်ရင် Decision Quality၊ Execution Quality နဲ့ Business Result ကို တိုးတက်စေနိုင်ပါတယ်' +
        '</p>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h2>Manager Application</h2>' +
        '<p>' + escapeHtml(guide.application) + '</p>' +
        '<ul>' +
          '<li>နေ့စဉ် Execution Review လုပ်ပါ</li>' +
          '<li>Weekly KPI Review လုပ်ပါ</li>' +
          '<li>Gap ဖြစ်ရင် Root Cause ကို ရှာပါ</li>' +
          '<li>Action Owner သတ်မှတ်ပါ</li>' +
        '</ul>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h2>Myanmar Business Example</h2>' +
        '<div class="tip-box">' +
          escapeHtml(guide.example) +
        '</div>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h2>KPI</h2>' +
        '<div class="kpi-box">' +

          guide.kpis.map(function (kpi) {
            return (
              '<div class="kpi-mini">' +
                '<strong>' + escapeHtml(kpi) + '</strong>' +
                '<span>Review and improve regularly</span>' +
              '</div>'
            );
          }).join("") +

        '</div>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h2>Manager Checklist</h2>' +
        '<ul class="check-list">' +
          '<li>Objective ရှင်းလင်းပါ</li>' +
          '<li>Current Situation သိထားပါ</li>' +
          '<li>Priority Action သတ်မှတ်ပါ</li>' +
          '<li>KPI ထားပါ</li>' +
          '<li>Owner နှင့် Deadline သတ်မှတ်ပါ</li>' +
          '<li>Result ကို Review လုပ်ပါ</li>' +
        '</ul>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h2>Practical Assignment</h2>' +
        '<p>ကိုယ့်လုပ်ငန်းမှာ <strong>' +
          escapeHtml(title) +
          '</strong> ကို အသုံးချပြီး Action Plan တစ်ခုရေးပါ</p>' +

        '<ol>' +
          '<li>Current Situation</li>' +
          '<li>Main Problem / Opportunity</li>' +
          '<li>3 Priority Actions</li>' +
          '<li>KPI</li>' +
          '<li>Deadline</li>' +
        '</ol>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h2>Key Takeaways</h2>' +
        '<div class="tip-box">' +
          'Manager တစ်ယောက်အနေနဲ့ Concept ကို သိထားရုံမက Business Situation ထဲမှာ အသုံးချပြီး KPI နဲ့ Result ထုတ်နိုင်ရပါမယ်' +
        '</div>' +
      '</div>'
    );
  }

  /* =========================================================
     PROGRESS
     ========================================================= */

  function renderProgress() {

    return (

      '<div class="stat-grid">' +

        statCard("▣", "Total", lessons.length, "Academy lessons") +
        statCard("✓", "Completed", getCompletedCount(), "Completed lessons") +
        statCard("◔", "Progress", getProgress() + "%", "Overall progress") +
        statCard("○", "Remaining", lessons.length - getCompletedCount(), "Lessons remaining") +

      '</div>' +

      '<div class="card" style="margin-bottom:18px">' +
        '<div class="section-heading">' +
          '<div>' +
            '<h2>Overall Learning Progress</h2>' +
            '<p>Continue consistently to complete the academy</p>' +
          '</div>' +
          '<strong>' + getProgress() + '%</strong>' +
        '</div>' +

        '<div class="progress-track">' +
          '<div class="progress-fill" style="width:' + getProgress() + '%"></div>' +
        '</div>' +
      '</div>' +

      '<div class="section-heading">' +
        '<div>' +
          '<h2>Category Progress</h2>' +
          '<p>Track your progress by business discipline</p>' +
        '</div>' +
      '</div>' +

      '<div class="grid-3">' +

        courseData.map(function (cat) {

          var total = 0;
          var done = 0;

          for (var i = 0; i < lessons.length; i++) {
            if (lessons[i].category === cat.name) {
              total++;

              if (isCompleted(lessons[i].id)) {
                done++;
              }
            }
          }

          var pct = total ? Math.round((done / total) * 100) : 0;

          return (
            '<div class="card">' +
              '<div class="section-heading">' +
                '<div>' +
                  '<h3>' + cat.icon + ' ' + escapeHtml(cat.name) + '</h3>' +
                  '<p>' + done + ' / ' + total + ' completed</p>' +
                '</div>' +
                '<strong>' + pct + '%</strong>' +
              '</div>' +
              '<div class="progress-track">' +
                '<div class="progress-fill" style="width:' + pct + '%"></div>' +
              '</div>' +
            '</div>'
          );

        }).join("") +

      '</div>' +

      '<div style="height:20px"></div>' +

      '<button class="btn btn-danger" data-action="reset-progress">' +
        'Reset Learning Progress' +
      '</button>'
    );
  }

  /* =========================================================
     SALES MANAGER
     ========================================================= */

  function renderSalesManager() {

    var target = Number(state.kpi.target) || 0;
    var actual = Number(state.kpi.actual) || 0;
    var achievement = achievementPercent();
    var gap = gapValue();
    var days = Number(state.kpi.workingDays) || 26;
    var dailyTarget = days > 0 ? target / days : 0;

    return (

      '<div class="hero">' +
        '<h1>Sales Manager Command Center</h1>' +
        '<p>Manage target, execution, team performance and daily sales actions</p>' +
      '</div>' +

      '<div class="stat-grid">' +

        statCard("🎯", "Monthly Target", formatNumber(target), "Sales target") +
        statCard("↗", "Actual", formatNumber(actual), "Current actual") +
        statCard("%", "Achievement", achievement + "%", "Target achievement") +
        statCard("△", "Gap", formatNumber(gap), "Remaining gap") +

      '</div>' +

      '<div class="grid-2">' +

        '<div class="card">' +
          '<h3>Daily Execution</h3>' +
          '<p>Monthly Target ကို working days အလိုက် ခွဲပြီး Daily Run Rate ကိုကြည့်ပါ</p>' +

          '<div class="kpi-box">' +
            '<div class="kpi-mini"><strong>' + formatNumber(dailyTarget) + '</strong><span>Daily Target</span></div>' +
            '<div class="kpi-mini"><strong>' + formatNumber(state.kpi.pipeline) + '</strong><span>Pipeline</span></div>' +
            '<div class="kpi-mini"><strong>' + formatNumber(state.kpi.team) + '</strong><span>Team</span></div>' +
          '</div>' +
        '</div>' +

        '<div class="card">' +
          '<h3>Manager Daily Checklist</h3>' +
          '<ul class="check-list">' +
            '<li>Yesterday Sales Review</li>' +
            '<li>Today Target Confirmation</li>' +
            '<li>Pipeline & Customer Follow-up</li>' +
            '<li>Team Activity Review</li>' +
            '<li>End-of-Day Gap Review</li>' +
          '</ul>' +
        '</div>' +

      '</div>' +

      '<div class="card">' +
        '<div class="section-heading">' +
          '<div>' +
            '<h2>Sales Manager Review</h2>' +
            '<p>Use this framework for weekly team reviews</p>' +
          '</div>' +
        '</div>' +

        '<div class="grid-3">' +

          '<div class="tool-card">' +
            '<h3>1. Target</h3>' +
            '<p>Target ဘယ်လောက်ရှိပြီး Actual ဘယ်လောက်ရောက်ပြီလဲ</p>' +
          '</div>' +

          '<div class="tool-card">' +
            '<h3>2. Gap</h3>' +
            '<p>Gap ဖြစ်ရတဲ့ Territory, Product, Person နဲ့ Customer Cause ကိုရှာပါ</p>' +
          '</div>' +

          '<div class="tool-card">' +
            '<h3>3. Action</h3>' +
            '<p>Owner, Action, Deadline နဲ့ Expected Result သတ်မှတ်ပါ</p>' +
          '</div>' +

        '</div>' +
      '</div>'
    );
  }

  /* =========================================================
     KPI
     ========================================================= */

  function renderKPI() {

    var achievement = achievementPercent();
    var gap = gapValue();

    return (

      '<div class="card" style="margin-bottom:18px">' +

        '<div class="section-heading">' +
          '<div>' +
            '<h2>KPI Input</h2>' +
            '<p>သင့်ရဲ့ လက်ရှိ Business KPI ကိုထည့်ပြီး Dashboard ကို Update လုပ်ပါ</p>' +
          '</div>' +
        '</div>' +

        '<div class="kpi-input-grid">' +

          kpiInput("kpiTarget", "Monthly Target", state.kpi.target) +
          kpiInput("kpiActual", "Actual", state.kpi.actual) +
          kpiInput("kpiTeam", "Team Size", state.kpi.team) +
          kpiInput("kpiCustomers", "Customers", state.kpi.customers) +
          kpiInput("kpiOrders", "Orders", state.kpi.orders) +
          kpiInput("kpiWorkingDays", "Working Days", state.kpi.workingDays) +
          kpiInput("kpiPipeline", "Pipeline", state.kpi.pipeline) +

        '</div>' +

        '<div class="form-actions">' +
          '<button class="btn btn-primary" data-action="save-kpi">Save KPI</button>' +
        '</div>' +

      '</div>' +

      '<div class="stat-grid">' +

        statCard("🎯", "Target", formatNumber(state.kpi.target), "Monthly target") +
        statCard("↗", "Actual", formatNumber(state.kpi.actual), "Current actual") +
        statCard("%", "Achievement", achievement + "%", "Target achievement") +
        statCard("△", "Gap", formatNumber(gap), "Target remaining") +

      '</div>' +

      '<div class="card">' +

        '<div class="section-heading">' +
          '<div>' +
            '<h2>Achievement Progress</h2>' +
            '<p>Target vs Actual</p>' +
          '</div>' +
          '<strong>' + achievement + '%</strong>' +
        '</div>' +

        '<div class="progress-track" style="height:14px">' +
          '<div class="progress-fill" style="width:' + Math.min(achievement, 100) + '%"></div>' +
        '</div>' +

      '</div>'
    );
  }

  function kpiInput(id, label, value) {

    return (
      '<div class="form-group">' +
        '<label for="' + id + '">' + label + '</label>' +
        '<input id="' + id + '" class="form-input" type="number" value="' + Number(value || 0) + '">' +
      '</div>'
    );
  }

  /* =========================================================
     REPORTS
     ========================================================= */

  function renderReports() {

    var achievement = achievementPercent();

    return (

      '<div class="grid-2">' +

        '<div class="card">' +
          '<h3>Management Performance Report</h3>' +
          '<p>Current business management snapshot</p>' +

          '<div class="table-wrap">' +
            '<table class="data-table">' +
              '<tr><th>Metric</th><th>Value</th></tr>' +
              '<tr><td>Monthly Target</td><td>' + formatNumber(state.kpi.target) + '</td></tr>' +
              '<tr><td>Actual</td><td>' + formatNumber(state.kpi.actual) + '</td></tr>' +
              '<tr><td>Achievement</td><td>' + achievement + '%</td></tr>' +
              '<tr><td>Gap</td><td>' + formatNumber(gapValue()) + '</td></tr>' +
              '<tr><td>Team</td><td>' + formatNumber(state.kpi.team) + '</td></tr>' +
              '<tr><td>Customers</td><td>' + formatNumber(state.kpi.customers) + '</td></tr>' +
              '<tr><td>Orders</td><td>' + formatNumber(state.kpi.orders) + '</td></tr>' +
            '</table>' +
          '</div>' +

        '</div>' +

        '<div class="card">' +
          '<h3>Learning Report</h3>' +
          '<p>Academy learning performance</p>' +

          '<div class="kpi-box">' +
            '<div class="kpi-mini"><strong>' + lessons.length + '</strong><span>Total Lessons</span></div>' +
            '<div class="kpi-mini"><strong>' + getCompletedCount() + '</strong><span>Completed</span></div>' +
            '<div class="kpi-mini"><strong>' + getProgress() + '%</strong><span>Progress</span></div>' +
          '</div>' +

          '<div style="height:15px"></div>' +

          '<button class="btn btn-primary btn-full" data-action="print-report">' +
            'Print / Save Report' +
          '</button>' +

        '</div>' +

      '</div>' +

      '<div class="card">' +
        '<h3>Weekly Management Review</h3>' +
        '<ul class="check-list">' +
          '<li>Target vs Actual ကို Review လုပ်ပါ</li>' +
          '<li>Gap ရဲ့ Root Cause ကို သတ်မှတ်ပါ</li>' +
          '<li>Top Customers / Territories ကို Review လုပ်ပါ</li>' +
          '<li>Team Performance နဲ့ Coaching Needs ကို သတ်မှတ်ပါ</li>' +
          '<li>Next Week Action Plan ကို Owner နဲ့ Deadline ပါအောင် ရေးပါ</li>' +
        '</ul>' +
      '</div>'
    );
  }

  /* =========================================================
     BUSINESS TOOLS
     ========================================================= */

  function renderBusinessTools() {

    return (

      '<div class="tool-grid">' +

        '<div class="tool-card">' +
          '<h3>💰 Pricing / Profit / Margin</h3>' +
          '<p>Cost နှင့် Selling Price ထည့်ပြီး Profit နဲ့ Margin တွက်ပါ</p>' +

          '<div class="form-group">' +
            '<label>Cost</label>' +
            '<input id="priceCost" class="form-input" type="number" placeholder="0">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Selling Price</label>' +
            '<input id="priceSelling" class="form-input" type="number" placeholder="0">' +
          '</div>' +

          '<button class="btn btn-primary btn-full" data-action="calculate-price">Calculate</button>' +

          '<div id="priceResult"></div>' +
        '</div>' +

        '<div class="tool-card">' +
          '<h3>⚖ Break-even</h3>' +
          '<p>Fixed Cost, Selling Price နဲ့ Variable Cost ကို အသုံးပြုပြီး Break-even Unit တွက်ပါ</p>' +

          '<div class="form-group">' +
            '<label>Fixed Cost</label>' +
            '<input id="beFixed" class="form-input" type="number" placeholder="0">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Selling Price / Unit</label>' +
            '<input id="bePrice" class="form-input" type="number" placeholder="0">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Variable Cost / Unit</label>' +
            '<input id="beVariable" class="form-input" type="number" placeholder="0">' +
          '</div>' +

          '<button class="btn btn-primary btn-full" data-action="calculate-break-even">Calculate</button>' +

          '<div id="beResult"></div>' +
        '</div>' +

        '<div class="tool-card">' +
          '<h3>🎯 Sales Target</h3>' +
          '<p>Monthly Target ကို Working Days နဲ့ Daily Target အဖြစ် ခွဲပါ</p>' +

          '<div class="form-group">' +
            '<label>Monthly Target</label>' +
            '<input id="targetAmount" class="form-input" type="number" placeholder="500">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Working Days</label>' +
            '<input id="targetDays" class="form-input" type="number" value="26">' +
          '</div>' +

          '<button class="btn btn-primary btn-full" data-action="calculate-target">Calculate</button>' +

          '<div id="targetResult"></div>' +
        '</div>' +

        '<div class="tool-card">' +
          '<h3>📈 Growth Calculator</h3>' +
          '<p>Previous Sales နဲ့ Current Sales ကို နှိုင်းယှဉ်ပြီး Growth % တွက်ပါ</p>' +

          '<div class="form-group">' +
            '<label>Previous</label>' +
            '<input id="growthPrevious" class="form-input" type="number" placeholder="0">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Current</label>' +
            '<input id="growthCurrent" class="form-input" type="number" placeholder="0">' +
          '</div>' +

          '<button class="btn btn-primary btn-full" data-action="calculate-growth">Calculate</button>' +

          '<div id="growthResult"></div>' +
        '</div>' +

      '</div>'
    );
  }

  /* =========================================================
     AI BUSINESS TOOLS
     ========================================================= */

  function renderAITools() {

    return (

      '<div class="section-heading">' +
        '<div>' +
          '<h2>AI Business Tools</h2>' +
          '<p>Manager တစ်ယောက်အနေနဲ့ နေ့စဉ်အသုံးချနိုင်တဲ့ Practical Frameworks</p>' +
        '</div>' +
      '</div>' +

      '<div class="tool-grid">' +

        aiToolCard(
          "Daily Sales Action Plan",
          "ဒီနေ့ Sales Target ရအောင် ဘာလုပ်ရမလဲဆိုတာ Action Plan ချပါ",
          "go-coach",
          "Sales target မရနိုင်တဲ့အခြေအနေမှာ ဒီနေ့အတွက် Action Plan တစ်ခုရေးပေးပါ"
        ) +

        aiToolCard(
          "Target Breakdown",
          "Monthly Target ကို Daily / Weekly / Team အလိုက် ခွဲစိတ်ပါ",
          "go-coach",
          "Monthly Sales Target ကို Daily Weekly Team အလိုက် ခွဲပြီး Management Plan ရေးပေးပါ"
        ) +

        aiToolCard(
          "Root Cause Analysis",
          "Sales Gap ဖြစ်ရတဲ့ အကြောင်းရင်းကို Root Cause အထိ ရှာပါ",
          "go-coach",
          "Sales ကျနေတဲ့အခြေအနေကို Root Cause Analysis လုပ်ပေးပါ"
        ) +

        aiToolCard(
          "Meeting Agenda",
          "Sales Team Meeting အတွက် Professional Agenda တည်ဆောက်ပါ",
          "go-coach",
          "Sales Manager အတွက် Weekly Team Meeting Agenda တစ်ခုရေးပေးပါ"
        ) +

        aiToolCard(
          "Coaching Questions",
          "Salesperson Coaching အတွက် မေးခွန်းကောင်းတွေ ထုတ်ပါ",
          "go-coach",
          "Salesperson တစ်ယောက် Target မရတဲ့အခါ Coaching Questions တွေ ရေးပေးပါ"
        ) +

        aiToolCard(
          "Business Plan",
          "Business Idea တစ်ခုအတွက် Actionable Business Plan တည်ဆောက်ပါ",
          "go-coach",
          "SME Business တစ်ခုစဖို့ Professional Business Plan တစ်ခုရေးပေးပါ"
        ) +

      '</div>'
    );
  }

  function aiToolCard(title, text, action, prompt) {

    return (
      '<div class="tool-card">' +
        '<h3>' + escapeHtml(title) + '</h3>' +
        '<p>' + escapeHtml(text) + '</p>' +
        '<button class="btn btn-primary btn-full" data-action="' + action + '" data-prompt="' + escapeHtml(prompt) + '">' +
          'Use AI Tool' +
        '</button>' +
      '</div>'
    );
  }

  /* =========================================================
     AI COACH
     ========================================================= */

  function renderCoach() {

    return (

      '<div class="ai-box">' +

        '<h2>◉ AI Business Coach</h2>' +

        '<p>Business, Sales, Marketing, Team Management နဲ့ Daily Business Problems တွေကို လက်တွေ့အသုံးချနိုင်တဲ့ Action Plan အဖြစ် ဆွေးနွေးနိုင်ပါတယ်</p>' +

        '<div class="quick-prompts">' +

          quickPrompt("Sales Target မရ", "Sales target မရတဲ့အခါ Manager အနေနဲ့ ဘာတွေစစ်ပြီး ဘာတွေကို Action ယူသင့်လဲ") +
          quickPrompt("Team Performance", "Sales team performance ကျနေတဲ့အခါ Coaching နဲ့ Management Plan ရေးပေးပါ") +
          quickPrompt("Business Growth", "SME business တစ်ခုကို Growth ရအောင် ဘယ်လို Strategy ချသင့်လဲ") +
          quickPrompt("Marketing Idea", "မြန်မာနိုင်ငံ SME အတွက် လက်တွေ့အသုံးချနိုင်တဲ့ Marketing Ideas တွေ ပေးပါ") +

        '</div>' +

        '<textarea id="coachPrompt" class="ai-textarea" placeholder="သင့် Business Problem ကို ရေးပါ..."></textarea>' +

        '<div class="form-actions">' +
          '<button class="btn btn-light" data-action="ask-ai">Ask AI Business Coach</button>' +
        '</div>' +

        '<div id="aiResponse" class="ai-response">' +
          'AI Business Coach ကို စတင်အသုံးပြုရန် သင့် Problem ကို အပေါ်မှာရေးပါ' +
        '</div>' +

      '</div>'
    );
  }

  function quickPrompt(label, prompt) {

    return (
      '<button class="quick-prompt" data-action="quick-prompt" data-prompt="' +
      escapeHtml(prompt) +
      '">' +
      escapeHtml(label) +
      '</button>'
    );
  }

  function askAI(prompt) {

    var responseBox = document.getElementById("aiResponse");

    if (!responseBox) return;

    if (!prompt) {
      var textarea = document.getElementById("coachPrompt");

      if (textarea) {
        prompt = textarea.value.trim();
      }
    }

    if (!prompt) {
      responseBox.textContent = "Business Problem တစ်ခုကို အရင်ရေးပါ";
      return;
    }

    responseBox.textContent = "AI Business Coach က အဖြေပြင်ဆင်နေပါတယ်...";

    var fullPrompt =
      "You are an AI Business Coach for a Myanmar business manager. " +
      "Give practical, concise and actionable advice. " +
      "Use clear steps, numbers, KPIs and action plans when useful. " +
      "Answer in Burmese when the user writes Burmese. " +
      "User profile: " +
      state.user.name +
      ", " +
      state.user.role +
      ". " +
      "Business problem: " +
      prompt;

    fetch(AI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: fullPrompt
      })
    })
    .then(function (res) {

      if (!res.ok) {
        throw new Error("AI API unavailable");
      }

      return res.json();
    })
    .then(function (data) {

      var answer =
        data.answer ||
        data.response ||
        data.message ||
        data.result;

      if (!answer) {
        throw new Error("No AI response");
      }

      responseBox.textContent = answer;
    })
    .catch(function () {

      responseBox.textContent = localAIAdvice(prompt);

    });
  }

  function localAIAdvice(prompt) {

    return (
      "AI Business Coach Offline Framework\n\n" +
      "1. Problem ကို တိတိကျကျ သတ်မှတ်ပါ\n" +
      "2. Target vs Actual ကို နှိုင်းယှဉ်ပါ\n" +
      "3. Gap ဖြစ်ရတဲ့ Root Cause ကို ရှာပါ\n" +
      "4. Priority Action 3 ခု သတ်မှတ်ပါ\n" +
      "5. Action တစ်ခုချင်းစီအတွက် Owner နဲ့ Deadline ထားပါ\n" +
      "6. KPI တစ်ခုချင်းစီကို Daily / Weekly Review လုပ်ပါ\n\n" +
      "Manager Action Plan\n" +
      "• Today: Current Situation စစ်ပါ\n" +
      "• This Week: Root Cause ဖြေရှင်းပါ\n" +
      "• Next Week: KPI Result ကို Review လုပ်ပါ\n\n" +
      "အဓိက Problem: " +
      prompt
    );
  }

  /* =========================================================
     PREMIUM
     ========================================================= */

  function renderPremium() {

    return (

      '<div class="premium-hero">' +
        '<h1>◆ Premium Membership</h1>' +
        '<p>Lesson 1 ကို Free အသုံးပြုနိုင်ပြီး Lesson 2 မှစ၍ Professional Academy Lessons, Business Tools နဲ့ AI Business Coach ကို အသုံးပြုရန် Premium Membership လိုအပ်ပါတယ်</p>' +
      '</div>' +

      '<div class="plan-grid">' +

        premiumPlan("1 Month", "25,000 Ks", false) +
        premiumPlan("3 Months", "60,000 Ks", true) +
        premiumPlan("6 Months", "100,000 Ks", false) +

      '</div>' +

      '<div style="height:18px"></div>' +

      '<div class="card">' +
        '<h3>Payment Methods</h3>' +
        '<p><strong>KPay</strong> — Payment account details to be provided by Academy</p>' +
        '<p><strong>CB Bank</strong> — Payment account details to be provided by Academy</p>' +

        '<div class="tip-box">' +
          'Payment ပြီးသွားပါက Transaction Reference ကို သိမ်းထားပြီး Academy Admin မှ Premium Activation ပြုလုပ်ပေးရပါမယ်' +
        '</div>' +

        '<div class="form-actions">' +
          '<button class="btn btn-primary" data-action="payment-request">' +
            'I Have Paid' +
          '</button>' +
        '</div>' +

      '</div>'
    );
  }

  function premiumPlan(name, price, featured) {

    return (
      '<div class="plan-card ' + (featured ? 'featured' : '') + '">' +

        '<span class="badge badge-blue">' +
          (featured ? 'POPULAR' : 'PLAN') +
        '</span>' +

        '<h3>' + name + '</h3>' +

        '<div class="plan-price">' +
          price +
        '</div>' +

        '<ul>' +
          '<li>Full Business Academy</li>' +
          '<li>Premium Lessons</li>' +
          '<li>Business Tools</li>' +
          '<li>AI Business Coach</li>' +
          '<li>Management Resources</li>' +
        '</ul>' +

        '<button class="btn btn-primary btn-full" data-action="payment-plan" data-plan="' + name + '" data-price="' + price + '">' +
          'Choose ' + name +
        '</button>' +

      '</div>'
    );
  }

  function showPremiumModal() {

    var root = document.getElementById("modalRoot");

    if (!root) return;

    root.innerHTML =

      '<div class="modal-backdrop">' +
        '<div class="modal">' +

          '<div class="modal-head">' +
            '<h2>◆ Premium Lesson</h2>' +
            '<button class="close-modal" data-action="close-modal">×</button>' +
          '</div>' +

          '<p>ဒီ Lesson က Premium Membership အတွက်ဖြစ်ပါတယ်</p>' +

          '<div class="tip-box">' +
            '<strong>Free Access</strong><br>' +
            'Lesson 1 သာ Free ဖြစ်ပြီး Lesson 2 မှစ၍ Premium ဖြစ်ပါတယ်' +
          '</div>' +

          '<div style="height:12px"></div>' +

          '<button class="btn btn-primary btn-full" data-action="go-premium">' +
            'View Premium Plans' +
          '</button>' +

        '</div>' +
      '</div>';
  }

  /* =========================================================
     SETTINGS
     ========================================================= */

  function renderSettings() {

    return (

      '<div class="grid-2">' +

        '<div class="card">' +

          '<div class="section-heading">' +
            '<div>' +
              '<h2>Profile Settings</h2>' +
              '<p>Dashboard မှာ ပြသမယ့် Profile Information</p>' +
            '</div>' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Display Name</label>' +
            '<input id="settingName" class="form-input" value="' + escapeHtml(state.user.name) + '">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Role</label>' +
            '<input id="settingRole" class="form-input" value="' + escapeHtml(state.user.role) + '">' +
          '</div>' +

          '<button class="btn btn-primary" data-action="save-settings">' +
            'Save Profile' +
          '</button>' +

        '</div>' +

        '<div class="card">' +

          '<h3>Application Information</h3>' +

          '<p>Aung Business Academy V15.1</p>' +
          '<p>' + lessons.length + ' Business Lessons</p>' +
          '<p>' + courseData.length + ' Categories</p>' +
          '<p>Lesson 1 Free • Lesson 2+ Premium</p>' +
          '<p>Local Storage Enabled</p>' +

          '<button class="btn btn-danger" data-action="reset-app">' +
            'Reset App Data' +
          '</button>' +

        '</div>' +

      '</div>'
    );
  }

  /* =========================================================
     EVENTS
     ========================================================= */

  function bindEvents() {

    document.addEventListener("click", handleClick);

    document.addEventListener("input", function (event) {

      if (event.target && event.target.id === "lessonSearch") {

        state.search = event.target.value;

        var timer = window.__abaSearchTimer;

        if (timer) {
          clearTimeout(timer);
        }

        window.__abaSearchTimer = setTimeout(function () {
          renderSection("lessons");
        }, 180);
      }
    });

    document.addEventListener("change", function (event) {

      if (event.target && event.target.id === "lessonCategory") {

        state.category = event.target.value;
        renderSection("lessons");
      }
    });

    var menu = document.getElementById("menuButton");
    var close = document.getElementById("closeMenu");
    var overlay = document.getElementById("mobileOverlay");

    if (menu) {
      menu.addEventListener("click", function () {
        openMobileMenu();
      });
    }

    if (close) {
      close.addEventListener("click", function () {
        closeMobileMenu();
      });
    }

    if (overlay) {
      overlay.addEventListener("click", function () {
        closeMobileMenu();
      });
    }
  }

  function handleClick(event) {

    var target = event.target;

    while (target && target !== document) {

      if (target.hasAttribute && target.hasAttribute("data-action")) {
        break;
      }

      target = target.parentNode;
    }

    if (!target || target === document) {
      return;
    }

    var action = target.getAttribute("data-action");

    if (action === "go-section") {
      renderSection(target.getAttribute("data-section"));
    }

    else if (action === "go-dashboard") {
      renderSection("dashboard");
    }

    else if (action === "go-academy") {
      renderSection("academy");
    }

    else if (action === "go-lessons") {
      renderSection("lessons");
    }

    else if (action === "go-progress") {
      renderSection("progress");
    }

    else if (action === "go-sales") {
      renderSection("sales");
    }

    else if (action === "go-kpi") {
      renderSection("kpi");
    }

    else if (action === "go-coach") {

      var prompt = target.getAttribute("data-prompt");

      renderSection("coach");

      if (prompt) {

        setTimeout(function () {

          var textarea = document.getElementById("coachPrompt");

          if (textarea) {
            textarea.value = prompt;
          }

        }, 30);
      }
    }

    else if (action === "open-lesson") {
      openLesson(target.getAttribute("data-id"));
    }

    else if (action === "back-lessons") {
      renderSection("lessons");
    }

    else if (action === "toggle-complete") {
      toggleComplete(Number(target.getAttribute("data-id")));
    }

    else if (action === "open-category") {

      var index = Number(target.getAttribute("data-index"));

      if (courseData[index]) {

        state.category = courseData[index].name;
        state.search = "";

        renderSection("lessons");
      }
    }

    else if (action === "reset-progress") {
      resetProgress();
    }

    else if (action === "save-kpi") {
      saveKPI();
    }

    else if (action === "calculate-price") {
      calculatePrice();
    }

    else if (action === "calculate-break-even") {
      calculateBreakEven();
    }

    else if (action === "calculate-target") {
      calculateTarget();
    }

    else if (action === "calculate-growth") {
      calculateGrowth();
    }

    else if (action === "quick-prompt") {

      var quick = target.getAttribute("data-prompt");
      var textarea = document.getElementById("coachPrompt");

      if (textarea) {
        textarea.value = quick;
      }
    }

    else if (action === "ask-ai") {
      askAI();
    }

    else if (action === "payment-plan") {
      paymentRequest(
        target.getAttribute("data-plan"),
        target.getAttribute("data-price")
      );
    }

    else if (action === "payment-request") {
      paymentRequest("Selected Plan", "To be confirmed");
    }

    else if (action === "go-premium") {
      closeModal();
      renderSection("premium");
    }

    else if (action === "close-modal") {
      closeModal();
    }

    else if (action === "save-settings") {
      saveSettings();
    }

    else if (action === "reset-app") {
      resetApp();
    }

    else if (action === "print-report") {
      printReport();
    }
  }

  /* =========================================================
     MOBILE MENU
     ========================================================= */

  function openMobileMenu() {

    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("mobileOverlay");

    if (sidebar) sidebar.classList.add("open");
    if (overlay) overlay.classList.add("open");
  }

  function closeMobileMenu() {

    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("mobileOverlay");

    if (sidebar) sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
  }

  /* =========================================================
     COMPLETION
     ========================================================= */

  function toggleComplete(id) {

    var index = state.completed.indexOf(id);

    if (index === -1) {

      state.completed.push(id);
      showToast("Lesson Completed ✓");

    } else {

      state.completed.splice(index, 1);
      showToast("Lesson ကို Incomplete ပြန်လုပ်ထားပါတယ်");
    }

    writeStorage(KEY_COMPLETED, state.completed);

    openLesson(id);
  }

  function resetProgress() {

    var ok = window.confirm(
      "Learning Progress အားလုံးကို Reset လုပ်မှာ သေချာပါသလား"
    );

    if (!ok) return;

    state.completed = [];

    writeStorage(KEY_COMPLETED, []);

    showToast("Learning Progress Reset ပြီးပါပြီ");

    renderSection("progress");
  }

  /* =========================================================
     KPI SAVE
     ========================================================= */

  function saveKPI() {

    var target = Number(getValue("kpiTarget"));
    var actual = Number(getValue("kpiActual"));
    var team = Number(getValue("kpiTeam"));
    var customers = Number(getValue("kpiCustomers"));
    var orders = Number(getValue("kpiOrders"));
    var workingDays = Number(getValue("kpiWorkingDays"));
    var pipeline = Number(getValue("kpiPipeline"));

    state.kpi = {
      target: target,
      actual: actual,
      team: team,
      customers: customers,
      orders: orders,
      workingDays: workingDays || 26,
      pipeline: pipeline
    };

    writeStorage(KEY_KPI, state.kpi);

    showToast("KPI Saved ✓");

    renderSection("kpi");
  }

  function getValue(id) {

    var el = document.getElementById(id);

    if (!el) return 0;

    return el.value;
  }

  /* =========================================================
     CALCULATORS
     ========================================================= */

  function calculatePrice() {

    var cost = Number(getValue("priceCost"));
    var selling = Number(getValue("priceSelling"));

    var profit = selling - cost;
    var margin = selling > 0 ? (profit / selling) * 100 : 0;

    var result = document.getElementById("priceResult");

    if (!result) return;

    result.innerHTML =
      '<div class="result-box">' +
        '<div class="result-big">' + formatNumber(profit) + '</div>' +
        '<div class="muted">Profit</div>' +
        '<div style="margin-top:8px"><strong>' + margin.toFixed(2) + '%</strong> Margin</div>' +
      '</div>';
  }

  function calculateBreakEven() {

    var fixed = Number(getValue("beFixed"));
    var price = Number(getValue("bePrice"));
    var variable = Number(getValue("beVariable"));

    var contribution = price - variable;

    var units = contribution > 0
      ? fixed / contribution
      : 0;

    var result = document.getElementById("beResult");

    if (!result) return;

    result.innerHTML =
      '<div class="result-box">' +
        '<div class="result-big">' + formatNumber(Math.ceil(units)) + '</div>' +
        '<div class="muted">Break-even Units</div>' +
        '<div style="margin-top:8px">Contribution / Unit: ' + formatNumber(contribution) + '</div>' +
      '</div>';
  }

  function calculateTarget() {

    var target = Number(getValue("targetAmount"));
    var days = Number(getValue("targetDays"));

    var daily = days > 0 ? target / days : 0;

    var result = document.getElementById("targetResult");

    if (!result) return;

    result.innerHTML =
      '<div class="result-box">' +
        '<div class="result-big">' + formatNumber(daily) + '</div>' +
        '<div class="muted">Daily Target</div>' +
        '<div style="margin-top:8px">Weekly Target: ' + formatNumber(daily * 6) + '</div>' +
      '</div>';
  }

  function calculateGrowth() {

    var previous = Number(getValue("growthPrevious"));
    var current = Number(getValue("growthCurrent"));

    var growth = previous !== 0
      ? ((current - previous) / previous) * 100
      : 0;

    var result = document.getElementById("growthResult");

    if (!result) return;

    result.innerHTML =
      '<div class="result-box">' +
        '<div class="result-big">' + growth.toFixed(2) + '%</div>' +
        '<div class="muted">Growth</div>' +
      '</div>';
  }

  /* =========================================================
     SETTINGS
     ========================================================= */

  function saveSettings() {

    var name = document.getElementById("settingName");
    var role = document.getElementById("settingRole");

    state.user = {
      name: name && name.value.trim()
        ? name.value.trim()
        : DEFAULT_USER.name,

      role: role && role.value.trim()
        ? role.value.trim()
        : DEFAULT_USER.role
    };

    writeStorage(KEY_USER, state.user);
    writeStorage(KEY_SETTINGS, state.user);

    updateHeader();

    showToast("Profile Saved ✓");

    renderSection("settings");
  }

  function resetApp() {

    var ok = window.confirm(
      "App data အားလုံးကို Reset လုပ်မှာ သေချာပါသလား"
    );

    if (!ok) return;

    removeStorage(KEY_COMPLETED);
    removeStorage(KEY_USER);
    removeStorage(KEY_KPI);
    removeStorage(KEY_SETTINGS);
    removeStorage(KEY_PAYMENT);

    state.completed = [];
    state.user = DEFAULT_USER;

    state.kpi = {
      target: 500,
      actual: 385,
      team: 4,
      customers: 0,
      orders: 0,
      workingDays: 26,
      pipeline: 0
    };

    updateHeader();

    showToast("App Data Reset ပြီးပါပြီ");

    renderSection("dashboard");
  }

  /* =========================================================
     PAYMENT
     ========================================================= */

  function paymentRequest(plan, price) {

    writeStorage(KEY_PAYMENT, {
      plan: plan,
      price: price,
      status: "pending",
      createdAt: new Date().toISOString()
    });

    var root = document.getElementById("modalRoot");

    if (!root) return;

    root.innerHTML =

      '<div class="modal-backdrop">' +
        '<div class="modal">' +

          '<div class="modal-head">' +
            '<h2>Payment Confirmation</h2>' +
            '<button class="close-modal" data-action="close-modal">×</button>' +
          '</div>' +

          '<p><strong>Plan:</strong> ' + escapeHtml(plan) + '</p>' +
          '<p><strong>Price:</strong> ' + escapeHtml(price) + '</p>' +

          '<div class="form-group">' +
            '<label>Transaction Reference</label>' +
            '<input id="transactionReference" class="form-input" placeholder="Enter transaction reference">' +
          '</div>' +

          '<div class="tip-box">' +
            'ဒီ Form ကို Submit လုပ်ခြင်းဖြင့် Premium ကို အလိုအလျောက် Activate မလုပ်ပါ Premium activation ကို Admin မှ Confirm ပြုလုပ်ရပါမယ်' +
          '</div>' +

          '<div class="form-actions">' +
            '<button class="btn btn-primary" data-action="submit-payment">' +
              'Submit Payment Reference' +
            '</button>' +
          '</div>' +

        '</div>' +
      '</div>';

    var submit = document.querySelector('[data-action="submit-payment"]');

    if (submit) {

      submit.addEventListener("click", function () {

        var ref = document.getElementById("transactionReference");

        var payment = readStorage(KEY_PAYMENT, {});

        payment.reference = ref ? ref.value.trim() : "";
        payment.status = "pending";

        writeStorage(KEY_PAYMENT, payment);

        closeModal();

        showToast("Payment information saved — Pending Admin Confirmation");
      });
    }
  }

  /* =========================================================
     MODAL
     ========================================================= */

  function closeModal() {

    var root = document.getElementById("modalRoot");

    if (root) {
      root.innerHTML = "";
    }
  }

  /* =========================================================
     TOAST
     ========================================================= */

  function showToast(message) {

    var root = document.getElementById("toastRoot");

    if (!root) return;

    root.innerHTML =
      '<div class="toast">' +
        escapeHtml(message) +
      '</div>';

    setTimeout(function () {

      if (root) {
        root.innerHTML = "";
      }

    }, 2600);
  }

  /* =========================================================
     PRINT REPORT
     ========================================================= */

  function printReport() {

    var achievement = achievementPercent();

    var report =
      "<html><head><title>Aung Business Academy Report</title>" +
      "<style>body{font-family:Arial;padding:30px}h1{color:#0f172a}table{border-collapse:collapse;width:100%}td,th{border:1px solid #ddd;padding:10px;text-align:left}</style>" +
      "</head><body>" +

      "<h1>Aung Business Academy</h1>" +
      "<h2>Business Management Report</h2>" +

      "<p>Manager: " + escapeHtml(state.user.name) + "</p>" +

      "<table>" +
      "<tr><th>Metric</th><th>Value</th></tr>" +
      "<tr><td>Target</td><td>" + formatNumber(state.kpi.target) + "</td></tr>" +
      "<tr><td>Actual</td><td>" + formatNumber(state.kpi.actual) + "</td></tr>" +
      "<tr><td>Achievement</td><td>" + achievement + "%</td></tr>" +
      "<tr><td>Gap</td><td>" + formatNumber(gapValue()) + "</td></tr>" +
      "<tr><td>Team</td><td>" + formatNumber(state.kpi.team) + "</td></tr>" +
      "<tr><td>Customers</td><td>" + formatNumber(state.kpi.customers) + "</td></tr>" +
      "<tr><td>Orders</td><td>" + formatNumber(state.kpi.orders) + "</td></tr>" +
      "</table>" +

      "<h2>Learning Progress</h2>" +
      "<p>Total Lessons: " + lessons.length + "</p>" +
      "<p>Completed: " + getCompletedCount() + "</p>" +
      "<p>Progress: " + getProgress() + "%</p>" +

      "</body></html>";

    var win = window.open("", "_blank");

    if (!win) {
      showToast("Browser popup ကို Allow လုပ်ပေးပါ");
      return;
    }

    win.document.open();
    win.document.write(report);
    win.document.close();

    setTimeout(function () {
      win.print();
    }, 500);
  }

  /* =========================================================
     GLOBAL ERROR PROTECTION
     ========================================================= */

  window.addEventListener("error", function (event) {

    console.error(
      "ABA Runtime Error:",
      event.message,
      event.filename,
      event.lineno
    );

  });

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {

    lessons: lessons,

    courseData: courseData,

    getLesson: getLesson,

    openLesson: openLesson,

    goToSection: renderSection,

    getCompleted: function () {
      return state.completed.slice();
    },

    getProgress: getProgress,

    resetProgress: resetProgress,

    state: state

  };

  /* =========================================================
     START APP
     ========================================================= */

  if (document.readyState === "loading") {

    document.addEventListener("DOMContentLoaded", function () {
      init();
    });

  } else {

    init();

  }

})();
