"use strict";

(function () {

  /* =========================================================
     AUNG BUSINESS ACADEMY
     V15.1 STABLE PROFESSIONAL
     ========================================================= */

  var APP_VERSION = "V15.1";
  var TOTAL_LESSONS_EXPECTED = 260;

  var KEYS = {
    completed: "aba_completed_lessons",
    completedOld: "aung_business_academy_completed",
    profile: "aba_profile",
    premium: "aba_premium",
    kpi: "aba_kpi",
    settings: "aba_settings",
    payment: "aba_payment_request"
  };

  var API_BASE_URL = "https://aung-business-academy.onrender.com";
  var AI_API_URL = API_BASE_URL + "/api/ai";

  var state = {
    section: "dashboard",
    lessonId: null,
    category: "All",
    search: ""
  };

  /* =========================================================
     STORAGE
     ========================================================= */

  function readStorage(key, fallback) {
    try {
      var value = localStorage.getItem(key);

      if (value === null || value === undefined) {
        return fallback;
      }

      return JSON.parse(value);
    } catch (e) {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  function removeStorage(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  }

  /* =========================================================
     PROFILE
     ========================================================= */

  var profile = readStorage(KEYS.profile, {
    name: "Aung Zar Ni Win",
    role: "Business Manager"
  });

  function getName() {
    return profile.name || "Aung Zar Ni Win";
  }

  function getRole() {
    return profile.role || "Business Manager";
  }

  /* =========================================================
     COURSE DATA
     ========================================================= */

  var courseData = [
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
      icon: "🎯",
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
      icon: "📈",
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
      icon: "📊",
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
      icon: "🏪",
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
      icon: "🏬",
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
        "Retention"
      ]
    },
    {
      name: "Negotiation",
      icon: "🤝",
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
      icon: "📉",
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
      icon: "🧠",
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

  /* =========================================================
     BUILD LESSONS
     ========================================================= */

  var lessons = [];
  var lessonId = 1;

  for (var c = 0; c < courseData.length; c++) {

    for (var l = 0; l < courseData[c].topics.length; l++) {

      lessons.push({
        id: lessonId,
        title: courseData[c].topics[l],
        category: courseData[c].name,
        icon: courseData[c].icon,
        categoryIndex: c,
        lessonIndex: l + 1
      });

      lessonId++;
    }
  }

  /* =========================================================
     COMPLETED LESSONS
     ========================================================= */

  function getCompleted() {
    var data = readStorage(KEYS.completed, null);

    if (!Array.isArray(data)) {
      data = readStorage(KEYS.completedOld, []);
    }

    if (!Array.isArray(data)) {
      data = [];
    }

    return data;
  }

  function isCompleted(id) {
    return getCompleted().indexOf(Number(id)) !== -1;
  }

  function completeLesson(id) {

    var list = getCompleted();
    var numberId = Number(id);

    if (list.indexOf(numberId) === -1) {
      list.push(numberId);
    }

    writeStorage(KEYS.completed, list);
    writeStorage(KEYS.completedOld, list);

    showToast("Lesson completed");

    render();
  }

  function resetProgress() {

    var confirmed = window.confirm(
      "Lesson progress အားလုံးကို reset လုပ်မလား?"
    );

    if (!confirmed) {
      return;
    }

    removeStorage(KEYS.completed);
    removeStorage(KEYS.completedOld);

    state.lessonId = null;
    state.section = "progress";

    showToast("Progress reset ပြီးပါပြီ");

    render();
  }

  /* =========================================================
     PROGRESS
     ========================================================= */

  function getProgress() {

    var completed = getCompleted().length;

    if (lessons.length === 0) {
      return 0;
    }

    return Math.round((completed / lessons.length) * 100);
  }

  function categoryProgress(category) {

    var list = lessons.filter(function (lesson) {
      return lesson.category === category;
    });

    if (list.length === 0) {
      return 0;
    }

    var done = list.filter(function (lesson) {
      return isCompleted(lesson.id);
    }).length;

    return Math.round((done / list.length) * 100);
  }

  /* =========================================================
     PREMIUM
     ========================================================= */

  var premiumPlans = [
    {
      name: "1 Month",
      price: "25,000 Ks",
      duration: "1 Month"
    },
    {
      name: "3 Months",
      price: "60,000 Ks",
      duration: "3 Months"
    },
    {
      name: "6 Months",
      price: "100,000 Ks",
      duration: "6 Months"
    }
  ];

  function isPremium() {

    var data = readStorage(KEYS.premium, null);

    if (!data) {
      return false;
    }

    if (data.active !== true) {
      return false;
    }

    if (data.expiry && Number(data.expiry) < Date.now()) {
      return false;
    }

    return true;
  }

  function premiumRequired(id) {
    return Number(id) > 1 && !isPremium();
  }

  /* =========================================================
     HELPERS
     ========================================================= */

  function escapeHtml(text) {

    if (text === null || text === undefined) {
      return "";
    }

    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getLesson(id) {

    var numberId = Number(id);

    for (var i = 0; i < lessons.length; i++) {
      if (lessons[i].id === numberId) {
        return lessons[i];
      }
    }

    return null;
  }

  function formatNumber(number) {
    return Number(number || 0).toLocaleString();
  }

  function todayText() {

    var d = new Date();

    var options = {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric"
    };

    return d.toLocaleDateString("en-US", options);
  }

  function money(number) {
    return Number(number || 0).toLocaleString() + " Ks";
  }

  function showToast(message) {

    var toast = document.getElementById("toast");

    if (!toast) {
      return;
    }

    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(window.__abaToastTimer);

    window.__abaToastTimer = window.setTimeout(function () {
      toast.classList.remove("show");
    }, 2500);
  }

  /* =========================================================
     CATEGORY GUIDE
     ========================================================= */

  var categoryGuides = {

    "Business Fundamentals": {
      objective: "လုပ်ငန်းတစ်ခုက Customer အတွက် Value ဖန်တီးပြီး Revenue နဲ့ Profit ရအောင် ဘယ်လိုတည်ဆောက်ထားသလဲကို နားလည်ရန်",
      framework: "Customer Problem → Value → Revenue → Cost → Profit → Cash",
      manager: "Business Model ကို Revenue, Cost, Gross Profit နဲ့ Cash Flow အမြင်ကနေ ပြန်လည်သုံးသပ်ပါ",
      kpi: "Revenue, Gross Profit, Gross Margin, Cash Conversion"
    },

    "Business Strategy": {
      objective: "လုပ်ငန်းအတွက် အရေးကြီးဆုံး Priority တွေကိုရွေးပြီး အကောင်အထည်ဖော်နိုင်ရန်",
      framework: "Situation → Choice → Priority → Resource → Execution → Review",
      manager: "SWOT နဲ့ Market Situation ကိုကြည့်ပြီး လုပ်ငန်းရဲ့ Strategic Priorities 3 ခု သတ်မှတ်ပါ",
      kpi: "Growth %, Market Share, Strategic Initiative Completion"
    },

    "Sales Management": {
      objective: "Sales Target ကို Team, Territory, Customer နဲ့ Daily Activity အထိ ခွဲပြီး Execution ထိန်းချုပ်နိုင်ရန်",
      framework: "Target → Breakdown → Pipeline → Activity → Forecast → Execution → Review",
      manager: "နေ့စဉ် Actual, Gap, Pipeline Coverage နဲ့ Salesperson Performance ကို စစ်ပါ",
      kpi: "Achievement %, Gap, Productivity, Strike Rate, Pipeline Coverage"
    },

    "Sales Skills": {
      objective: "Customer Need ကိုရှာဖွေပြီး Value ကိုတင်ပြကာ Objection ကိုကိုင်တွယ်ပြီး Closing ပြုလုပ်နိုင်ရန်",
      framework: "Prepare → Discover → Present Value → Handle Objection → Close → Follow-up",
      manager: "Salesperson တစ်ဦးချင်းကို Role Play နဲ့ Coaching ပြုလုပ်ပါ",
      kpi: "Conversion %, Average Order Value, Close Rate, Repeat Purchase"
    },

    "Customer Management": {
      objective: "Customer တန်ဖိုး၊ Retention နဲ့ Customer Experience ကို စနစ်တကျ စီမံနိုင်ရန်",
      framework: "Segment → Understand → Serve → Retain → Grow",
      manager: "High-value Customer တွေကို သီးခြားစီမံပြီး Complaint နဲ့ Retention ကိုတိုင်းတာပါ",
      kpi: "Retention Rate, Repeat Rate, Complaint Rate, Active Customers"
    },

    "Marketing": {
      objective: "မှန်ကန်တဲ့ Customer ကို မှန်ကန်တဲ့ Message နဲ့ ရောက်ရှိအောင် Marketing ကိုစီမံနိုင်ရန်",
      framework: "Market → Segment → Target → Position → Campaign → Measure",
      manager: "Campaign တစ်ခုချင်းစီမှာ Objective, Budget, KPI နဲ့ ROI သတ်မှတ်ပါ",
      kpi: "Leads, Conversion %, CAC, ROI, Campaign Revenue"
    },

    "Branding": {
      objective: "Customer စိတ်ထဲမှာ တိကျတဲ့ Brand Identity နဲ့ Trust တည်ဆောက်နိုင်ရန်",
      framework: "Identity → Position → Promise → Communication → Consistency → Trust",
      manager: "Brand Message နဲ့ Customer Experience တစ်လျှောက် Consistency ရှိမရှိ စစ်ပါ",
      kpi: "Awareness, Consideration, Repeat Purchase, Brand Preference"
    },

    "Finance": {
      objective: "Revenue တင်မက Profit နဲ့ Cash Flow ကိုပါ Managerial Decision အဖြစ် အသုံးချနိုင်ရန်",
      framework: "Revenue → Cost → Margin → Profit → Cash",
      manager: "Monthly Budget, Actual Cost, Gross Margin နဲ့ Cash Position ကို Review လုပ်ပါ",
      kpi: "Gross Margin, OPEX Ratio, Cash Flow, Working Capital"
    },

    "Accounting & P&L": {
      objective: "P&L နဲ့ Financial Statements ကို Manager တစ်ယောက်အနေနဲ့ ဖတ်နိုင်ရန်",
      framework: "Revenue → COGS → Gross Profit → OPEX → Operating Profit",
      manager: "လစဉ် P&L မှာ Revenue Growth, Gross Margin နဲ့ OPEX Ratio ကိုရှာပါ",
      kpi: "Gross Profit, Gross Margin, OPEX Ratio, Net Margin"
    },

    "Distribution & Operations": {
      objective: "Product ကို Customer ဆီရောက်အောင် Channel, Stock, Route နဲ့ Service Level ကို ထိန်းချုပ်နိုင်ရန်",
      framework: "Channel → Stock → Route → Delivery → Availability → Review",
      manager: "Stock Cover, Delivery Performance နဲ့ Distribution Coverage ကို စစ်ပါ",
      kpi: "Numeric Distribution, Fill Rate, Stock Cover, Delivery SLA"
    },

    "Retail & Modern Trade": {
      objective: "Outlet Execution, Shelf Availability နဲ့ Promotion ကို စနစ်တကျ စီမံနိုင်ရန်",
      framework: "Outlet → Assortment → Shelf → Promotion → Execution → Review",
      manager: "Store Visit မှာ Availability, Planogram, Price နဲ့ Promotion Compliance စစ်ပါ",
      kpi: "Availability %, Distribution %, Promo Compliance, Sales/Outlet"
    },

    "Key Account Management": {
      objective: "အရေးကြီးသော Account များကို Long-term Business Partnership အဖြစ် တည်ဆောက်နိုင်ရန်",
      framework: "Select → Plan → Negotiate → Execute → Review → Grow",
      manager: "Account တစ်ခုချင်းစီအတွက် Customer Business Plan ပြုလုပ်ပါ",
      kpi: "Account Growth, Margin, Retention, Joint Business Plan"
    },

    "Leadership & Management": {
      objective: "Team ကို Direction, Accountability, Coaching နဲ့ Performance အပေါ် စီမံနိုင်ရန်",
      framework: "Direction → Goal → Delegate → Coach → Review → Improve",
      manager: "Weekly 1-on-1, Performance Review နဲ့ Coaching Cadence ထားပါ",
      kpi: "Goal Completion, Coaching Frequency, Team Productivity, Retention"
    },

    "People & HR": {
      objective: "မှန်ကန်တဲ့လူကို ရွေးချယ်၊ တိုးတက်အောင်လုပ်ပြီး Retain လုပ်နိုင်ရန်",
      framework: "Recruit → Onboard → Train → Develop → Review → Retain",
      manager: "Role Clarity, Training Need နဲ့ Performance Expectation ကိုရှင်းလင်းပါ",
      kpi: "Time to Fill, Training Completion, Performance, Retention"
    },

    "Negotiation": {
      objective: "Price တစ်ခုတည်းမဟုတ်ဘဲ Value, Margin, Terms နဲ့ Relationship ကို ထိန်းသိမ်းပြီး ညှိနှိုင်းနိုင်ရန်",
      framework: "Prepare → Objective → BATNA → Ask → Trade → Close",
      manager: "Negotiation မတိုင်ခင် Target, Minimum Acceptable Position နဲ့ Concessions သတ်မှတ်ပါ",
      kpi: "Win Rate, Margin, Payment Terms, Deal Value"
    },

    "Business Development": {
      objective: "New Market, New Customer, New Channel နဲ့ Partnership အခွင့်အလမ်းတွေကို စနစ်တကျ တိုးချဲ့နိုင်ရန်",
      framework: "Identify → Qualify → Develop → Propose → Close → Scale",
      manager: "Opportunity Pipeline တစ်ခုတည်ဆောက်ပြီး Stage တစ်ခုချင်းစီကို Review လုပ်ပါ",
      kpi: "Qualified Pipeline, Conversion, New Revenue, New Customers"
    },

    "KPI & Data Analysis": {
      objective: "Data ကို Report အဖြစ်မထားဘဲ Decision နဲ့ Action အဖြစ် ပြောင်းလဲနိုင်ရန်",
      framework: "Target → Actual → Achievement → Gap → Trend → Action",
      manager: "KPI တစ်ခုချင်းစီမှာ Owner, Target, Review Frequency နဲ့ Action သတ်မှတ်ပါ",
      kpi: "Achievement %, Gap, Trend, Productivity"
    },

    "Problem Solving & Decision Making": {
      objective: "Problem ရဲ့ Root Cause ကိုရှာပြီး Priority အလိုက် ဖြေရှင်းနိုင်ရန်",
      framework: "Define → Diagnose → Prioritize → Decide → Act → Review",
      manager: "5 Whys, Fishbone နဲ့ Pareto ကို အသုံးပြုပြီး Root Cause ကိုခွဲပါ",
      kpi: "Action Closure, Recurrence Rate, Resolution Time"
    },

    "Digital Business & AI": {
      objective: "Digital Tools နဲ့ AI ကို Business Productivity, Sales, Marketing နဲ့ Decision Making မှာ အသုံးချနိုင်ရန်",
      framework: "Problem → Data → Tool → Automation → Measure → Improve",
      manager: "AI အသုံးပြုမယ့် Use Case ကို Time Saved, Quality နဲ့ Business Impact အပေါ်တိုင်းတာပါ",
      kpi: "Time Saved, Adoption, Error Reduction, Productivity"
    },

    "Productivity & Career": {
      objective: "Managerial Productivity နဲ့ Professional Career Development ကို စနစ်တကျ တိုးတက်အောင်လုပ်နိုင်ရန်",
      framework: "Plan → Prioritize → Focus → Execute → Review → Improve",
      manager: "Daily Top 3 Priorities နဲ့ Weekly Review စနစ်ထားပါ",
      kpi: "Priority Completion, Learning Hours, Task Completion"
    }

  };

  /* =========================================================
     LESSON CONTENT
     ========================================================= */

  function getLessonContent(lesson) {

    var guide = categoryGuides[lesson.category];

    if (!guide) {
      guide = {
        objective: "လုပ်ငန်းမှာ လက်တွေ့အသုံးချနိုင်ရန် အခြေခံ Concept ကို နားလည်ခြင်း",
        framework: "Understand → Apply → Measure → Improve",
        manager: "လက်ရှိလုပ်ငန်းမှာ တစ်ခုချင်းစီ အသုံးချပြီး Result ကိုတိုင်းတာပါ",
        kpi: "Target, Actual, Achievement %, Gap"
      };
    }

    return {

      objective: guide.objective,

      concept:
        lesson.title +
        " သည် " +
        lesson.category +
        " အတွင်း Manager တစ်ယောက်အနေနဲ့ လက်တွေ့အသုံးချနိုင်ဖို့ အရေးကြီးတဲ့ Management Concept တစ်ခုဖြစ်ပါတယ်",

      importance:
        "ဒီအကြောင်းအရာကို သိရုံနဲ့မလုံလောက်ဘဲ လက်ရှိလုပ်ငန်းရဲ့ Customer, Sales, Team, Finance နဲ့ Execution အခြေအနေထဲမှာ အသုံးချနိုင်ဖို့လိုပါတယ်",

      framework: guide.framework,

      practical: [
        "လက်ရှိလုပ်ငန်းအခြေအနေကို အရင်သုံးသပ်ပါ",
        "ပြဿနာ သို့မဟုတ် Opportunity ကို တိတိကျကျ သတ်မှတ်ပါ",
        "လုပ်ဆောင်ရမယ့် Priority 3 ခု သတ်မှတ်ပါ",
        "တာဝန်ရှိသူနဲ့ Deadline သတ်မှတ်ပါ",
        "Result ကို KPI နဲ့ ပြန်တိုင်းပြီး ပြင်ဆင်ပါ"
      ],

      manager: guide.manager,

      example:
        "ဥပမာအားဖြင့် Sales Team တစ်ခုမှာ Target မပြည့်ပါက Result ကိုသာကြည့်မယ့်အစား Territory, Customer Coverage, Sales Activity, Conversion နဲ့ Pipeline ကို ခွဲခြမ်းစိတ်ဖြာပြီး ဘယ်နေရာမှာ Gap ဖြစ်နေလဲရှာနိုင်ပါတယ်",

      kpi: guide.kpi,

      checklist: [
        "Objective ကိုရှင်းလင်းစွာ သတ်မှတ်ထားသလား",
        "Target နဲ့ Actual ကို တိုင်းတာထားသလား",
        "Gap ရဲ့အကြောင်းရင်းကို သိထားသလား",
        "Action Owner သတ်မှတ်ထားသလား",
        "Review Date သတ်မှတ်ထားသလား"
      ],

      assignment:
        "မိမိလက်ရှိလုပ်ငန်းကို အခြေခံပြီး ဒီ Lesson ရဲ့ Framework ကိုအသုံးပြုကာ လက်တွေ့ Action Plan တစ်ခုရေးပါ",

      takeaways: [
        "Concept ကို နားလည်ပြီး လက်တွေ့အသုံးချပါ",
        "Result ကို KPI နဲ့တိုင်းတာပါ",
        "Gap ရှိရင် Root Cause ရှာပါ",
        "Action Owner နဲ့ Deadline သတ်မှတ်ပါ",
        "Review → Improve စနစ်ကို အမြဲအသုံးပြုပါ"
      ]

    };
  }

  /* =========================================================
     PAGE META
     ========================================================= */

  var pageMeta = {

    dashboard: [
      "Dashboard",
      "Business Management Command Center"
    ],

    academy: [
      "Business Academy",
      "Professional Business Management Learning"
    ],

    lessons: [
      "Lessons",
      "Business Management Lessons"
    ],

    progress: [
      "My Progress",
      "Learning Progress & Category Performance"
    ],

    sales: [
      "Sales Manager",
      "Sales Target, Team & Execution Management"
    ],

    kpi: [
      "KPI & Analytics",
      "Target, Actual, Achievement & Gap"
    ],

    reports: [
      "Business Reports",
      "Management Reports & Review"
    ],

    tools: [
      "Business Tools",
      "Pricing, Profit, Break-even & Sales Tools"
    ],

    "ai-tools": [
      "AI Business Tools",
      "Practical AI Tools for Managers"
    ],

    "ai-coach": [
      "AI Business Coach",
      "Business Problem Solving with AI"
    ],

    premium: [
      "Premium Membership",
      "Professional Business Academy"
    ],

    settings: [
      "Settings",
      "Profile & App Settings"
    ]

  };

  /* =========================================================
     NAVIGATION
     ========================================================= */

  function goToSection(section) {

    if (!pageMeta[section]) {
      section = "dashboard";
    }

    state.section = section;
    state.lessonId = null;

    closeMobileMenu();

    render();
  }

  /* =========================================================
     DASHBOARD
     ========================================================= */

  function renderDashboard() {

    var completed = getCompleted().length;
    var progress = getProgress();

    var nextLesson = null;

    for (var i = 0; i < lessons.length; i++) {
      if (!isCompleted(lessons[i].id)) {
        nextLesson = lessons[i];
        break;
      }
    }

    if (!nextLesson) {
      nextLesson = lessons[0];
    }

    return (

      '<div class="hero">' +
        '<h2>Welcome back, ' + escapeHtml(getName()) + '</h2>' +
        '<p>Build stronger business management, sales execution and leadership skills</p>' +
        '<div class="hero-actions">' +
          '<button class="btn btn-primary" data-action="open-lesson" data-id="' + nextLesson.id + '">Continue Learning</button>' +
          '<button class="btn btn-light" data-action="go-section" data-section="sales">Open Sales Manager</button>' +
        '</div>' +
      '</div>' +

      '<div class="stats-grid">' +

        '<div class="stat-card">' +
          '<div class="stat-label">TOTAL LESSONS</div>' +
          '<div class="stat-value">' + formatNumber(lessons.length) + '</div>' +
          '<div class="stat-note">Professional business lessons</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-label">COMPLETED</div>' +
          '<div class="stat-value">' + formatNumber(completed) + '</div>' +
          '<div class="stat-note">Lessons completed</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-label">OVERALL PROGRESS</div>' +
          '<div class="stat-value">' + progress + '%</div>' +
          '<div class="stat-note">Learning progress</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-label">PREMIUM</div>' +
          '<div class="stat-value">' + (isPremium() ? "PRO" : "BASIC") + '</div>' +
          '<div class="stat-note">' + (isPremium() ? "Premium active" : "Lesson 1 free") + '</div>' +
        '</div>' +

      '</div>' +

      '<div class="grid grid-2">' +

        '<div class="card card-pad">' +
          '<div class="section-title">Continue Learning</div>' +
          '<div class="lesson-item">' +
            '<div class="lesson-number">' + nextLesson.id + '</div>' +
            '<div class="lesson-info">' +
              '<h3>' + escapeHtml(nextLesson.title) + '</h3>' +
              '<p>' + escapeHtml(nextLesson.category) + '</p>' +
            '</div>' +
            '<button class="btn btn-primary" data-action="open-lesson" data-id="' + nextLesson.id + '">Open</button>' +
          '</div>' +
        '</div>' +

        '<div class="card card-pad">' +
          '<div class="section-title">Learning Progress</div>' +
          '<div class="progress-row">' +
            '<div class="progress-row-head">' +
              '<span>Overall Progress</span>' +
              '<span>' + progress + '%</span>' +
            '</div>' +
            '<div class="progress-track">' +
              '<div class="progress-fill" style="width:' + progress + '%"></div>' +
            '</div>' +
          '</div>' +
          '<p class="muted small">Lesson 1 is free. Lesson 2+ requires Premium Membership</p>' +
        '</div>' +

      '</div>' +

      '<div style="height:20px"></div>' +

      '<div class="card card-pad">' +
        '<div class="section-title">Business Management Focus</div>' +
        '<div class="grid grid-3">' +

          '<div class="category-card card" data-action="go-section" data-section="sales">' +
            '<div class="category-icon">📈</div>' +
            '<h3>Sales Management</h3>' +
            '<p>Target, team, pipeline and execution</p>' +
          '</div>' +

          '<div class="category-card card" data-action="go-section" data-section="kpi">' +
            '<div class="category-icon">📊</div>' +
            '<h3>KPI & Analytics</h3>' +
            '<p>Measure performance and identify gaps</p>' +
          '</div>' +

          '<div class="category-card card" data-action="go-section" data-section="ai-coach">' +
            '<div class="category-icon">🤖</div>' +
            '<h3>AI Business Coach</h3>' +
            '<p>Practical business problem solving</p>' +
          '</div>' +

        '</div>' +
      '</div>'

    );
  }

  /* =========================================================
     ACADEMY
     ========================================================= */

  function renderAcademy() {

    var html =
      '<div class="page-header">' +
        '<h2>Business Academy</h2>' +
        '<p>20 professional categories • ' + lessons.length + ' lessons</p>' +
      '</div>' +

      '<div class="grid grid-4">';

    for (var i = 0; i < courseData.length; i++) {

      var category = courseData[i];
      var percent = categoryProgress(category.name);

      html +=
        '<div class="card category-card" data-action="open-category" data-category="' + escapeHtml(category.name) + '">' +
          '<div class="category-icon">' + category.icon + '</div>' +
          '<h3>' + escapeHtml(category.name) + '</h3>' +
          '<p>' + category.topics.length + ' Lessons</p>' +
          '<div style="height:12px"></div>' +
          '<div class="progress-track">' +
            '<div class="progress-fill" style="width:' + percent + '%"></div>' +
          '</div>' +
          '<p style="margin-top:6px">' + percent + '% completed</p>' +
        '</div>';

    }

    html += '</div>';

    return html;
  }

  /* =========================================================
     LESSON LIST
     ========================================================= */

  function renderLessons() {

    var categories = ["All"];

    for (var i = 0; i < courseData.length; i++) {
      categories.push(courseData[i].name);
    }

    var filtered = lessons.filter(function (lesson) {

      var categoryOK =
        state.category === "All" ||
        lesson.category === state.category;

      var searchText = state.search.toLowerCase();

      var searchOK =
        !searchText ||
        lesson.title.toLowerCase().indexOf(searchText) !== -1 ||
        lesson.category.toLowerCase().indexOf(searchText) !== -1;

      return categoryOK && searchOK;
    });

    var html =
      '<div class="page-header">' +
        '<h2>Business Lessons</h2>' +
        '<p>' + lessons.length + ' professional lessons</p>' +
      '</div>' +

      '<div class="search-row">' +
        '<input id="lessonSearch" class="input search-input" type="search" placeholder="Search lessons..." value="' + escapeHtml(state.search) + '">' +
        '<select id="categoryFilter" class="select" style="max-width:260px">';

    for (var c = 0; c < categories.length; c++) {

      html +=
        '<option value="' + escapeHtml(categories[c]) + '"' +
        (categories[c] === state.category ? " selected" : "") +
        '>' +
        escapeHtml(categories[c]) +
        '</option>';

    }

    html +=
        '</select>' +
      '</div>' +

      '<div class="lesson-list">';

    if (filtered.length === 0) {

      html +=
        '<div class="card card-pad">' +
          '<h3>No lessons found</h3>' +
          '<p class="muted small">Search keyword or category ပြောင်းကြည့်ပါ</p>' +
        '</div>';

    } else {

      for (var x = 0; x < filtered.length; x++) {

        var lesson = filtered[x];
        var done = isCompleted(lesson.id);
        var locked = premiumRequired(lesson.id);

        html +=
          '<div class="lesson-item">' +

            '<div class="lesson-number">' +
              lesson.id +
            '</div>' +

            '<div class="lesson-info">' +
              '<h3>' + escapeHtml(lesson.title) + '</h3>' +
              '<p>' + escapeHtml(lesson.category) + '</p>' +
            '</div>' +

            '<div class="lesson-status ' +
              (done ? "completed" : (locked ? "locked" : "")) +
            '">' +
              (done ? "✓ Completed" : (locked ? "◆ Premium" : "Free")) +
            '</div>' +

            '<button class="btn ' +
              (locked ? "btn-secondary" : "btn-primary") +
              '" data-action="open-lesson" data-id="' + lesson.id + '">' +
              (locked ? "Unlock" : "Open") +
            '</button>' +

          '</div>';

      }

    }

    html += '</div>';

    return html;
  }

  /* =========================================================
     LESSON READER
     ========================================================= */

  function renderLessonReader() {

    var lesson = getLesson(state.lessonId);

    if (!lesson) {
      state.section = "lessons";
      return renderLessons();
    }

    if (premiumRequired(lesson.id)) {
      openPremiumModal(lesson);
      state.section = "lessons";
      state.lessonId = null;
      return renderLessons();
    }

    var content = getLessonContent(lesson);
    var done = isCompleted(lesson.id);

    var html =
      '<div class="lesson-reader">' +

        '<div class="lesson-reader-head">' +
          '<div class="small">Lesson ' + lesson.id + ' • ' + escapeHtml(lesson.category) + '</div>' +
          '<h2>' + escapeHtml(lesson.title) + '</h2>' +
          '<p>Professional Business Management Lesson</p>' +
        '</div>' +

        '<div class="lesson-section">' +
          '<h3>🎯 Objective</h3>' +
          '<p>' + escapeHtml(content.objective) + '</p>' +
        '</div>' +

        '<div class="lesson-section">' +
          '<h3>📘 Core Concept</h3>' +
          '<p>' + escapeHtml(content.concept) + '</p>' +
        '</div>' +

        '<div class="lesson-section">' +
          '<h3>💡 Why It Matters</h3>' +
          '<p>' + escapeHtml(content.importance) + '</p>' +
        '</div>' +

        '<div class="lesson-section">' +
          '<h3>🧩 Practical Framework</h3>' +
          '<p><strong>' + escapeHtml(content.framework) + '</strong></p>' +
          '<ol>';

    for (var i = 0; i < content.practical.length; i++) {
      html += '<li>' + escapeHtml(content.practical[i]) + '</li>';
    }

    html +=
          '</ol>' +
        '</div>' +

        '<div class="lesson-section">' +
          '<h3>👔 Manager Application</h3>' +
          '<p>' + escapeHtml(content.manager) + '</p>' +
        '</div>' +

        '<div class="lesson-section">' +
          '<h3>🇲🇲 Myanmar Business Example</h3>' +
          '<p>' + escapeHtml(content.example) + '</p>' +
        '</div>' +

        '<div class="lesson-section">' +
          '<h3>📊 KPI</h3>' +
          '<p>' + escapeHtml(content.kpi) + '</p>' +
        '</div>' +

        '<div class="lesson-section">' +
          '<h3>✅ Manager Checklist</h3>' +
          '<div class="checklist">';

    for (var j = 0; j < content.checklist.length; j++) {
      html +=
        '<div class="check-item">✓ ' +
          escapeHtml(content.checklist[j]) +
        '</div>';
    }

    html +=
          '</div>' +
        '</div>' +

        '<div class="lesson-section">' +
          '<h3>📝 Assignment</h3>' +
          '<p>' + escapeHtml(content.assignment) + '</p>' +
        '</div>' +

        '<div class="lesson-section">' +
          '<h3>🧠 Key Takeaways</h3>' +
          '<ul>';

    for (var k = 0; k < content.takeaways.length; k++) {
      html += '<li>' + escapeHtml(content.takeaways[k]) + '</li>';
    }

    html +=
          '</ul>' +
        '</div>' +

        '<div class="reader-actions">' +

          '<button class="btn btn-secondary" data-action="back-lessons">' +
            "← Back to Lessons" +
          '</button>' +

          '<button class="btn ' +
            (done ? "btn-success" : "btn-primary") +
            '" data-action="complete-lesson" data-id="' + lesson.id + '">' +
            (done ? "✓ Completed" : "✓ Mark as Complete") +
          '</button>' +

        '</div>' +

      '</div>';

    return html;
  }

  /* =========================================================
     PROGRESS PAGE
     ========================================================= */

  function renderProgress() {

    var completed = getCompleted().length;
    var progress = getProgress();
    var remaining = lessons.length - completed;

    var html =
      '<div class="page-header">' +
        '<h2>My Progress</h2>' +
        '<p>Learning progress across all business categories</p>' +
      '</div>' +

      '<div class="stats-grid">' +

        '<div class="stat-card">' +
          '<div class="stat-label">TOTAL</div>' +
          '<div class="stat-value">' + lessons.length + '</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-label">COMPLETED</div>' +
          '<div class="stat-value">' + completed + '</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-label">REMAINING</div>' +
          '<div class="stat-value">' + remaining + '</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-label">PROGRESS</div>' +
          '<div class="stat-value">' + progress + '%</div>' +
        '</div>' +

      '</div>' +

      '<div class="card card-pad">' +
        '<div class="section-title">Category Progress</div>';

    for (var i = 0; i < courseData.length; i++) {

      var percent = categoryProgress(courseData[i].name);

      html +=
        '<div class="progress-row">' +
          '<div class="progress-row-head">' +
            '<span>' + escapeHtml(courseData[i].name) + '</span>' +
            '<span>' + percent + '%</span>' +
          '</div>' +
          '<div class="progress-track">' +
            '<div class="progress-fill" style="width:' + percent + '%"></div>' +
          '</div>' +
        '</div>';

    }

    html +=
      '</div>' +

      '<div style="height:18px"></div>' +

      '<button class="btn btn-danger" data-action="reset-progress">' +
        'Reset Lesson Progress' +
      '</button>';

    return html;
  }

  /* =========================================================
     SALES MANAGER
     ========================================================= */

  function renderSalesManager() {

    var kpi = readStorage(KEYS.kpi, {
      target: 50000000,
      actual: 38500000,
      team: 4,
      customers: 0,
      orders: 0
    });

    var target = Number(kpi.target || 0);
    var actual = Number(kpi.actual || 0);

    var achievement = target > 0
      ? Math.round((actual / target) * 100)
      : 0;

    var gap = target - actual;

    if (gap < 0) {
      gap = 0;
    }

    var dailyTarget = target / 26;

    return (

      '<div class="page-header">' +
        '<h2>Sales Manager</h2>' +
        '<p>Target, Team, Customer and Daily Execution</p>' +
      '</div>' +

      '<div class="stats-grid">' +

        '<div class="stat-card">' +
          '<div class="stat-label">MONTHLY TARGET</div>' +
          '<div class="stat-value">' + money(target) + '</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-label">ACTUAL</div>' +
          '<div class="stat-value">' + money(actual) + '</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-label">ACHIEVEMENT</div>' +
          '<div class="stat-value">' + achievement + '%</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-label">GAP</div>' +
          '<div class="stat-value">' + money(gap) + '</div>' +
        '</div>' +

      '</div>' +

      '<div class="grid grid-2">' +

        '<div class="card card-pad">' +
          '<div class="section-title">Sales Target Control</div>' +

          '<div class="form-group">' +
            '<label>Monthly Target</label>' +
            '<input id="salesTarget" class="input" type="number" value="' + target + '">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Actual Sales</label>' +
            '<input id="salesActual" class="input" type="number" value="' + actual + '">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Team Members</label>' +
            '<input id="salesTeam" class="input" type="number" value="' + Number(kpi.team || 0) + '">' +
          '</div>' +

          '<button class="btn btn-primary" data-action="save-sales-kpi">Save KPI</button>' +

        '</div>' +

        '<div class="card card-pad">' +
          '<div class="section-title">Daily Execution</div>' +

          '<div class="report-line">' +
            '<span>Daily Target</span>' +
            '<strong>' + money(dailyTarget) + '</strong>' +
          '</div>' +

          '<div class="report-line">' +
            '<span>Target Achievement</span>' +
            '<strong>' + achievement + '%</strong>' +
          '</div>' +

          '<div class="report-line">' +
            '<span>Team</span>' +
            '<strong>' + Number(kpi.team || 0) + '</strong>' +
          '</div>' +

          '<div class="report-line">' +
            '<span>Recommended Focus</span>' +
            '<strong>Gap → Action → Review</strong>' +
          '</div>' +

        '</div>' +

      '</div>' +

      '<div style="height:18px"></div>' +

      '<div class="card card-pad">' +
        '<div class="section-title">Sales Manager Daily Checklist</div>' +
        '<div class="checklist">' +
          '<div class="check-item">✓ Review yesterday actual</div>' +
          '<div class="check-item">✓ Check today target</div>' +
          '<div class="check-item">✓ Review salesperson pipeline</div>' +
          '<div class="check-item">✓ Check customer coverage</div>' +
          '<div class="check-item">✓ Identify target gap</div>' +
          '<div class="check-item">✓ Assign action owner</div>' +
          '<div class="check-item">✓ End-of-day performance review</div>' +
        '</div>' +
      '</div>'

    );
  }

  /* =========================================================
     KPI
     ========================================================= */

  function renderKPI() {

    var kpi = readStorage(KEYS.kpi, {
      target: 50000000,
      actual: 38500000,
      team: 4,
      customers: 0,
      orders: 0
    });

    var target = Number(kpi.target || 0);
    var actual = Number(kpi.actual || 0);
    var achievement = target > 0 ? Math.round((actual / target) * 100) : 0;
    var gap = target - actual;

    return (

      '<div class="page-header">' +
        '<h2>KPI & Analytics</h2>' +
        '<p>Target vs Actual performance dashboard</p>' +
      '</div>' +

      '<div class="stats-grid">' +

        '<div class="stat-card">' +
          '<div class="stat-label">TARGET</div>' +
          '<div class="stat-value">' + money(target) + '</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-label">ACTUAL</div>' +
          '<div class="stat-value">' + money(actual) + '</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-label">ACHIEVEMENT</div>' +
          '<div class="stat-value">' + achievement + '%</div>' +
        '</div>' +

        '<div class="stat-card">' +
          '<div class="stat-label">GAP</div>' +
          '<div class="stat-value">' + money(Math.max(gap, 0)) + '</div>' +
        '</div>' +

      '</div>' +

      '<div class="card card-pad">' +
        '<div class="section-title">Achievement</div>' +
        '<div class="progress-track" style="height:16px">' +
          '<div class="progress-fill" style="width:' + Math.min(achievement, 100) + '%"></div>' +
        '</div>' +
        '<p class="small muted" style="margin-top:8px">' +
          achievement + '% of target achieved' +
        '</p>' +
      '</div>' +

      '<div style="height:18px"></div>' +

      '<div class="grid grid-3">' +

        '<div class="card card-pad">' +
          '<div class="stat-label">TEAM</div>' +
          '<div class="kpi-big">' + Number(kpi.team || 0) + '</div>' +
          '<p class="muted small">Team members</p>' +
        '</div>' +

        '<div class="card card-pad">' +
          '<div class="stat-label">CUSTOMERS</div>' +
          '<div class="kpi-big">' + Number(kpi.customers || 0) + '</div>' +
          '<p class="muted small">Active customers</p>' +
        '</div>' +

        '<div class="card card-pad">' +
          '<div class="stat-label">ORDERS</div>' +
          '<div class="kpi-big">' + Number(kpi.orders || 0) + '</div>' +
          '<p class="muted small">Orders</p>' +
        '</div>' +

      '</div>'

    );
  }

  /* =========================================================
     BUSINESS TOOLS
     ========================================================= */

  function renderTools() {

    return (

      '<div class="page-header">' +
        '<h2>Business Tools</h2>' +
        '<p>Practical calculators for business managers</p>' +
      '</div>' +

      '<div class="grid grid-2">' +

        '<div class="card tool-card">' +
          '<h3>💰 Pricing / Profit / Margin</h3>' +
          '<p>Calculate selling price, profit and gross margin</p>' +

          '<div class="form-group">' +
            '<label>Cost</label>' +
            '<input id="priceCost" class="input" type="number" placeholder="Cost">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Selling Price</label>' +
            '<input id="priceSelling" class="input" type="number" placeholder="Selling Price">' +
          '</div>' +

          '<button class="btn btn-primary" data-action="calculate-price">Calculate</button>' +

          '<div id="priceResult"></div>' +
        '</div>' +

        '<div class="card tool-card">' +
          '<h3>📊 Break-even</h3>' +
          '<p>Calculate units needed to cover fixed costs</p>' +

          '<div class="form-group">' +
            '<label>Fixed Cost</label>' +
            '<input id="beFixed" class="input" type="number">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Selling Price / Unit</label>' +
            '<input id="bePrice" class="input" type="number">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Variable Cost / Unit</label>' +
            '<input id="beVariable" class="input" type="number">' +
          '</div>' +

          '<button class="btn btn-primary" data-action="calculate-break-even">Calculate</button>' +

          '<div id="breakEvenResult"></div>' +
        '</div>' +

        '<div class="card tool-card">' +
          '<h3>🎯 Sales Target</h3>' +
          '<p>Break monthly target into daily execution</p>' +

          '<div class="form-group">' +
            '<label>Monthly Target</label>' +
            '<input id="targetMonth" class="input" type="number">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Working Days</label>' +
            '<input id="targetDays" class="input" type="number" value="26">' +
          '</div>' +

          '<button class="btn btn-primary" data-action="calculate-target">Calculate</button>' +

          '<div id="targetResult"></div>' +
        '</div>' +

        '<div class="card tool-card">' +
          '<h3>📈 Growth Calculator</h3>' +
          '<p>Calculate growth percentage</p>' +

          '<div class="form-group">' +
            '<label>Previous</label>' +
            '<input id="growthPrevious" class="input" type="number">' +
          '</div>' +

          '<div class="form-group">' +
            '<label>Current</label>' +
            '<input id="growthCurrent" class="input" type="number">' +
          '</div>' +

          '<button class="btn btn-primary" data-action="calculate-growth">Calculate</button>' +

          '<div id="growthResult"></div>' +
        '</div>' +

      '</div>'

    );
  }

  /* =========================================================
     AI TOOLS
     ========================================================= */

  function renderAITools() {

    return (

      '<div class="page-header">' +
        '<h2>AI Business Tools</h2>' +
        '<p>Ready-to-use management tools</p>' +
      '</div>' +

      '<div class="grid grid-2">' +

        '<div class="card tool-card">' +
          '<h3>📅 Daily Sales Action Plan</h3>' +
          '<p>နေ့စဉ် Sales Execution Plan</p>' +
          '<button class="btn btn-primary" data-action="ai-template" data-template="daily">' +
            'Generate Plan' +
          '</button>' +
          '<div id="aiToolResult" class="result-box" style="display:none"></div>' +
        '</div>' +

        '<div class="card tool-card">' +
          '<h3>🎯 Target Breakdown</h3>' +
          '<p>Monthly target ကို daily / weekly ခွဲခြမ်းရန်</p>' +
          '<button class="btn btn-primary" data-action="ai-template" data-template="target">' +
            'Create Breakdown' +
          '</button>' +
        '</div>' +

        '<div class="card tool-card">' +
          '<h3>🔎 Root Cause Analysis</h3>' +
          '<p>Problem ရဲ့ Root Cause ရှာရန်</p>' +
          '<button class="btn btn-primary" data-action="ai-template" data-template="root">' +
            'Start Analysis' +
          '</button>' +
        '</div>' +

        '<div class="card tool-card">' +
          '<h3>👔 Coaching Questions</h3>' +
          '<p>Salesperson Coaching အတွက် မေးခွန်းများ</p>' +
          '<button class="btn btn-primary" data-action="ai-template" data-template="coach">' +
            'Create Questions' +
          '</button>' +
        '</div>' +

      '</div>'

    );
  }

  /* =========================================================
     AI COACH
     ========================================================= */

  function renderAICoach() {

    return (

      '<div class="page-header">' +
        '<h2>AI Business Coach</h2>' +
        '<p>Business, Sales, Marketing, Team and Management advice</p>' +
      '</div>' +

      '<div class="card card-pad ai-chat">' +

        '<div class="quick-prompts">' +

          '<button class="quick-prompt" data-action="quick-ai" data-prompt="Sales target မပြည့်တော့ ဘယ်လို action plan ချရမလဲ">Sales Target</button>' +

          '<button class="quick-prompt" data-action="quick-ai" data-prompt="Sales team performance ကျနေတဲ့အခါ manager အနေနဲ့ ဘယ်လို coaching လုပ်ရမလဲ">Team Coaching</button>' +

          '<button class="quick-prompt" data-action="quick-ai" data-prompt="Customer အသစ်တွေ တိုးလာအောင် ဘယ်လို sales strategy သုံးရမလဲ">Customer Growth</button>' +

          '<button class="quick-prompt" data-action="quick-ai" data-prompt="Business profit တိုးအောင် ဘယ်အချက်တွေကို စစ်ဆေးသင့်လဲ">Profit</button>' +

        '</div>' +

        '<div id="aiMessages" class="ai-messages">' +

          '<div class="ai-message bot">' +
            'မင်္ဂလာပါ ' + escapeHtml(getName()) + ' 👋\n\n' +
            'ကျွန်တော်က AI Business Coach ပါ\n\n' +
            'Sales, Marketing, Customer, Team Management, KPI, Profit နဲ့ Business Problem တွေကို မေးနိုင်ပါတယ်\n\n' +
            'Problem ကို တိတိကျကျရေးပေးပါ\n' +
            'ဥပမာ — "ဒီလ Sales Target 80% ပဲရနေတယ် ဘယ်လို Action Plan ချရမလဲ"' +
          '</div>' +

        '</div>' +

        '<div class="ai-input-row">' +
          '<textarea id="aiInput" class="textarea" rows="3" placeholder="Business problem ကိုရေးပါ..."></textarea>' +
          '<button class="btn btn-primary" data-action="ask-ai">Ask AI</button>' +
        '</div>' +

      '</div>'

    );
  }

  /* =========================================================
     PREMIUM
     ========================================================= */

  function renderPremium() {

    return (

      '<div class="premium-hero">' +
        '<h2>Premium Membership PRO</h2>' +
        '<p>Full Business Academy, Premium Lessons, Business Tools & AI Business Coach</p>' +
      '</div>' +

      '<div class="grid grid-3">' +

        '<div class="card plan-card">' +
          '<h3>1 Month</h3>' +
          '<div class="plan-price">25,000 Ks</div>' +
          '<div class="plan-duration">1 Month Access</div>' +
          '<button class="btn btn-primary" data-action="select-plan" data-plan="1 Month" data-price="25,000 Ks">Choose Plan</button>' +
        '</div>' +

        '<div class="card plan-card">' +
          '<h3>3 Months</h3>' +
          '<div class="plan-price">60,000 Ks</div>' +
          '<div class="plan-duration">3 Months Access</div>' +
          '<button class="btn btn-primary" data-action="select-plan" data-plan="3 Months" data-price="60,000 Ks">Choose Plan</button>' +
        '</div>' +

        '<div class="card plan-card">' +
          '<h3>6 Months</h3>' +
          '<div class="plan-price">100,000 Ks</div>' +
          '<div class="plan-duration">6 Months Access</div>' +
          '<button class="btn btn-primary" data-action="select-plan" data-plan="6 Months" data-price="100,000 Ks">Choose Plan</button>' +
        '</div>' +

      '</div>' +

      '<div style="height:20px"></div>' +

      '<div class="card card-pad">' +
        '<div class="section-title">Premium Includes</div>' +

        '<div class="grid grid-2">' +

          '<div class="check-item">✓ Lesson 1 Free Access</div>' +
          '<div class="check-item">✓ Lesson 2+ Premium Lessons</div>' +
          '<div class="check-item">✓ Business Tools</div>' +
          '<div class="check-item">✓ KPI & Analytics</div>' +
          '<div class="check-item">✓ AI Business Tools</div>' +
          '<div class="check-item">✓ AI Business Coach</div>' +

        '</div>' +

      '</div>' +

      '<div style="height:20px"></div>' +

      '<div class="card card-pad">' +
        '<div class="section-title">Payment Methods</div>' +
        '<p class="small muted">KPay + CB Bank</p>' +
        '<p class="small muted" style="margin-top:7px">Payment account details can be added by the academy administrator</p>' +
      '</div>'

    );
  }

  /* =========================================================
     REPORTS
     ========================================================= */

  function renderReports() {

    var completed = getCompleted().length;
    var progress = getProgress();
    var kpi = readStorage(KEYS.kpi, {
      target: 50000000,
      actual: 38500000,
      team: 4
    });

    var achievement =
      Number(kpi.target) > 0
        ? Math.round((Number(kpi.actual) / Number(kpi.target)) * 100)
        : 0;

    return (

      '<div class="page-header">' +
        '<h2>Business Reports</h2>' +
        '<p>Management summary and performance review</p>' +
      '</div>' +

      '<div class="grid grid-2">' +

        '<div class="card card-pad">' +
          '<div class="section-title">Learning Report</div>' +

          '<div class="report-line">' +
            '<span>Total Lessons</span>' +
            '<strong>' + lessons.length + '</strong>' +
          '</div>' +

          '<div class="report-line">' +
            '<span>Completed</span>' +
            '<strong>' + completed + '</strong>' +
          '</div>' +

          '<div class="report-line">' +
            '<span>Progress</span>' +
            '<strong>' + progress + '%</strong>' +
          '</div>' +

        '</div>' +

        '<div class="card card-pad">' +
          '<div class="section-title">Sales Report</div>' +

          '<div class="report-line">' +
            '<span>Target</span>' +
            '<strong>' + money(kpi.target) + '</strong>' +
          '</div>' +

          '<div class="report-line">' +
            '<span>Actual</span>' +
            '<strong>' + money(kpi.actual) + '</strong>' +
          '</div>' +

          '<div class="report-line">' +
            '<span>Achievement</span>' +
            '<strong>' + achievement + '%</strong>' +
          '</div>' +

        '</div>' +

      '</div>' +

      '<div style="height:20px"></div>' +

      '<div class="card card-pad">' +
        '<div class="section-title">Management Review</div>' +
        '<div class="checklist">' +
          '<div class="check-item">✓ Target vs Actual Review</div>' +
          '<div class="check-item">✓ Gap Analysis</div>' +
          '<div class="check-item">✓ Team Performance Review</div>' +
          '<div class="check-item">✓ Customer Coverage Review</div>' +
          '<div class="check-item">✓ Next Action Plan</div>' +
        '</div>' +
      '</div>'

    );
  }

  /* =========================================================
     SETTINGS
     ========================================================= */

  function renderSettings() {

    return (

      '<div class="page-header">' +
        '<h2>Settings</h2>' +
        '<p>Profile and application settings</p>' +
      '</div>' +

      '<div class="card card-pad" style="max-width:650px">' +

        '<div class="section-title">Profile</div>' +

        '<div class="form-group">' +
          '<label>Display Name</label>' +
          '<input id="settingName" class="input" value="' + escapeHtml(getName()) + '">' +
        '</div>' +

        '<div class="form-group">' +
          '<label>Role</label>' +
          '<input id="settingRole" class="input" value="' + escapeHtml(getRole()) + '">' +
        '</div>' +

        '<button class="btn btn-primary" data-action="save-settings">Save Profile</button>' +

      '</div>' +

      '<div style="height:18px"></div>' +

      '<div class="card card-pad" style="max-width:650px">' +
        '<div class="section-title">Application Data</div>' +
        '<p class="small muted" style="margin-bottom:14px">Local device data ကို reset လုပ်နိုင်ပါတယ်</p>' +
        '<button class="btn btn-danger" data-action="reset-app">Reset App Data</button>' +
      '</div>'

    );
  }

  /* =========================================================
     RENDER
     ========================================================= */

  function render() {

    var app = document.getElementById("app");

    if (!app) {
      return;
    }

    try {

      var content = "";

      if (state.lessonId !== null) {
        content = renderLessonReader();
      } else {

        switch (state.section) {

          case "dashboard":
            content = renderDashboard();
            break;

          case "academy":
            content = renderAcademy();
            break;

          case "lessons":
            content = renderLessons();
            break;

          case "progress":
            content = renderProgress();
            break;

          case "sales":
            content = renderSalesManager();
            break;

          case "kpi":
            content = renderKPI();
            break;

          case "reports":
            content = renderReports();
            break;

          case "tools":
            content = renderTools();
            break;

          case "ai-tools":
            content = renderAITools();
            break;

          case "ai-coach":
            content = renderAICoach();
            break;

          case "premium":
            content = renderPremium();
            break;

          case "settings":
            content = renderSettings();
            break;

          default:
            state.section = "dashboard";
            content = renderDashboard();
        }

      }

      app.innerHTML = content;

      updatePageMeta();
      updateProfileUI();

    } catch (error) {

      console.error("ABA Render Error:", error);

      app.innerHTML =
        '<div class="card card-pad">' +
          '<h2>Business Academy</h2>' +
          '<p class="muted" style="margin-top:8px">Workspace ကို ပြန်လည်ဖွင့်နေပါတယ်</p>' +
          '<button class="btn btn-primary" style="margin-top:15px" data-action="go-section" data-section="dashboard">Back to Dashboard</button>' +
        '</div>';

    }

  }

  /* =========================================================
     META / PROFILE UI
     ========================================================= */

  function updatePageMeta() {

    var title = document.getElementById("pageTitle");
    var subtitle = document.getElementById("pageSubtitle");
    var date = document.getElementById("todayDate");

    if (title && pageMeta[state.section]) {
      title.textContent = pageMeta[state.section][0];
    }

    if (subtitle && pageMeta[state.section]) {
      subtitle.textContent = pageMeta[state.section][1];
    }

    if (date) {
      date.textContent = todayText();
    }

    var navItems = document.querySelectorAll(".nav-item");

    for (var i = 0; i < navItems.length; i++) {

      var itemSection = navItems[i].getAttribute("data-section");

      if (itemSection === state.section && state.lessonId === null) {
        navItems[i].classList.add("active");
      } else {
        navItems[i].classList.remove("active");
      }

    }

  }

  function updateProfileUI() {

    var elements = [
      ["sidebarName", getName()],
      ["topName", getName()],
      ["sidebarRole", getRole()],
      ["topRole", getRole()]
    ];

    for (var i = 0; i < elements.length; i++) {

      var el = document.getElementById(elements[i][0]);

      if (el) {
        el.textContent = elements[i][1];
      }

    }

  }

  /* =========================================================
     MOBILE MENU
     ========================================================= */

  function openMobileMenu() {

    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("mobileOverlay");

    if (sidebar) {
      sidebar.classList.add("is-open");
    }

    if (overlay) {
      overlay.classList.add("is-open");
    }

  }

  function closeMobileMenu() {

    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("mobileOverlay");

    if (sidebar) {
      sidebar.classList.remove("is-open");
    }

    if (overlay) {
      overlay.classList.remove("is-open");
    }

  }

  /* =========================================================
     MODAL
     ========================================================= */

  function openModal(html) {

    var modal = document.getElementById("modal");
    var content = document.getElementById("modalContent");

    if (!modal || !content) {
      return;
    }

    content.innerHTML = html;
    modal.classList.add("is-open");
  }

  function closeModal() {

    var modal = document.getElementById("modal");

    if (modal) {
      modal.classList.remove("is-open");
    }

  }

  function openPremiumModal(lesson) {

    openModal(

      '<h2 style="margin-bottom:8px">Premium Membership PRO</h2>' +

      '<p class="muted small" style="margin-bottom:18px">' +
        'Lesson ' + lesson.id + ' — ' + escapeHtml(lesson.title) +
        ' သည် Premium Lesson ဖြစ်ပါတယ်' +
      '</p>' +

      '<div class="grid grid-3">' +

        '<div class="card plan-card">' +
          '<h3>1 Month</h3>' +
          '<div class="plan-price">25,000 Ks</div>' +
          '<button class="btn btn-primary" data-action="select-plan" data-plan="1 Month" data-price="25,000 Ks">Choose</button>' +
        '</div>' +

        '<div class="card plan-card">' +
          '<h3>3 Months</h3>' +
          '<div class="plan-price">60,000 Ks</div>' +
          '<button class="btn btn-primary" data-action="select-plan" data-plan="3 Months" data-price="60,000 Ks">Choose</button>' +
        '</div>' +

        '<div class="card plan-card">' +
          '<h3>6 Months</h3>' +
          '<div class="plan-price">100,000 Ks</div>' +
          '<button class="btn btn-primary" data-action="select-plan" data-plan="6 Months" data-price="100,000 Ks">Choose</button>' +
        '</div>' +

      '</div>' +

      '<p class="small muted" style="margin-top:18px">' +
        'Payment: KPay + CB Bank' +
      '</p>'

    );

  }

  function openPaymentModal(plan, price) {

    openModal(

      '<h2>Premium Payment</h2>' +

      '<p class="muted small" style="margin-top:6px">' +
        escapeHtml(plan) + ' — ' + escapeHtml(price) +
      '</p>' +

      '<div style="height:15px"></div>' +

      '<div class="card card-pad">' +
        '<div class="section-title">Payment Methods</div>' +
        '<p class="small">KPay</p>' +
        '<p class="small" style="margin-top:6px">CB Bank</p>' +
        '<p class="small muted" style="margin-top:10px">' +
          'Account details ကို Academy administrator ထံမှ ရယူပါ' +
        '</p>' +
      '</div>' +

      '<div style="height:15px"></div>' +

      '<div class="form-group">' +
        '<label>Transaction Reference</label>' +
        '<input id="paymentReference" class="input" placeholder="Transaction reference">' +
      '</div>' +

      '<button class="btn btn-primary" data-action="submit-payment" data-plan="' +
        escapeHtml(plan) + '" data-price="' + escapeHtml(price) + '">' +
        'Submit Payment Confirmation' +
      '</button>' +

      '<p class="small muted" style="margin-top:10px">' +
        'Payment confirmation ပို့ပြီးနောက် administrator က verify လုပ်ပေးရပါမယ်' +
      '</p>'

    );

  }

  /* =========================================================
     EVENT HANDLER
     ========================================================= */

  function handleClick(event) {

    var target = event.target;

    while (target && target !== document) {

      if (target.getAttribute) {

        var action = target.getAttribute("data-action");

        if (action) {
          break;
        }

      }

      target = target.parentElement;
    }

    if (!target || target === document) {
      return;
    }

    var actionName = target.getAttribute("data-action");

    /* NAVIGATION */

    if (actionName === "go-section") {

      var section = target.getAttribute("data-section");

      goToSection(section);
      return;
    }

    /* MOBILE NAV ITEM */

    if (target.classList.contains("nav-item")) {

      var navSection = target.getAttribute("data-section");

      if (navSection) {
        goToSection(navSection);
      }

      return;
    }

    /* OPEN LESSON */

    if (actionName === "open-lesson") {

      var id = Number(target.getAttribute("data-id"));

      if (premiumRequired(id)) {

        var lockedLesson = getLesson(id);

        if (lockedLesson) {
          openPremiumModal(lockedLesson);
        }

        return;
      }

      state.lessonId = id;
      render();
      return;
    }

    /* CATEGORY */

    if (actionName === "open-category") {

      state.category = target.getAttribute("data-category") || "All";
      state.search = "";
      state.section = "lessons";

      render();
      return;
    }

    /* BACK */

    if (actionName === "back-lessons") {

      state.lessonId = null;
      state.section = "lessons";

      render();
      return;
    }

    /* COMPLETE */

    if (actionName === "complete-lesson") {

      var completeId = Number(target.getAttribute("data-id"));

      completeLesson(completeId);
      return;
    }

    /* RESET */

    if (actionName === "reset-progress") {

      resetProgress();
      return;
    }

    /* RESET APP */

    if (actionName === "reset-app") {

      var confirmReset = window.confirm(
        "App data အားလုံးကို reset လုပ်မလား?"
      );

      if (!confirmReset) {
        return;
      }

      removeStorage(KEYS.completed);
      removeStorage(KEYS.completedOld);
      removeStorage(KEYS.profile);
      removeStorage(KEYS.kpi);
      removeStorage(KEYS.settings);
      removeStorage(KEYS.payment);
      removeStorage(KEYS.premium);

      profile = {
        name: "Aung Zar Ni Win",
        role: "Business Manager"
      };

      state = {
        section: "dashboard",
        lessonId: null,
        category: "All",
        search: ""
      };

      showToast("App data reset ပြီးပါပြီ");

      render();
      return;
    }

    /* SAVE SETTINGS */

    if (actionName === "save-settings") {

      var nameInput = document.getElementById("settingName");
      var roleInput = document.getElementById("settingRole");

      profile = {
        name: nameInput && nameInput.value
          ? nameInput.value.trim()
          : "Aung Zar Ni Win",

        role: roleInput && roleInput.value
          ? roleInput.value.trim()
          : "Business Manager"
      };

      writeStorage(KEYS.profile, profile);

      showToast("Profile saved");

      render();
      return;
    }

    /* SALES KPI */

    if (actionName === "save-sales-kpi") {

      var targetInput = document.getElementById("salesTarget");
      var actualInput = document.getElementById("salesActual");
      var teamInput = document.getElementById("salesTeam");

      var oldKpi = readStorage(KEYS.kpi, {});

      var newKpi = {
        target: Number(targetInput ? targetInput.value : 0),
        actual: Number(actualInput ? actualInput.value : 0),
        team: Number(teamInput ? teamInput.value : 0),
        customers: Number(oldKpi.customers || 0),
        orders: Number(oldKpi.orders || 0)
      };

      writeStorage(KEYS.kpi, newKpi);

      showToast("Sales KPI saved");

      render();
      return;
    }

    /* PRICE */

    if (actionName === "calculate-price") {

      var cost = Number(
        document.getElementById("priceCost").value || 0
      );

      var selling = Number(
        document.getElementById("priceSelling").value || 0
      );

      var profit = selling - cost;

      var margin = selling > 0
        ? (profit / selling) * 100
        : 0;

      var result = document.getElementById("priceResult");

      if (result) {

        result.className = "result-box";

        result.innerHTML =
          "<strong>Profit:</strong> " + money(profit) +
          "<br><strong>Gross Margin:</strong> " + margin.toFixed(1) + "%";

      }

      return;
    }

    /* BREAK EVEN */

    if (actionName === "calculate-break-even") {

      var fixedCost = Number(
        document.getElementById("beFixed").value || 0
      );

      var bePrice = Number(
        document.getElementById("bePrice").value || 0
      );

      var variableCost = Number(
        document.getElementById("beVariable").value || 0
      );

      var contribution = bePrice - variableCost;

      var units = contribution > 0
        ? fixedCost / contribution
        : 0;

      var beResult = document.getElementById("breakEvenResult");

      if (beResult) {

        beResult.className = "result-box";

        beResult.innerHTML =
          "<strong>Break-even Units:</strong> " +
          Math.ceil(units).toLocaleString();

      }

      return;
    }

    /* TARGET */

    if (actionName === "calculate-target") {

      var monthly = Number(
        document.getElementById("targetMonth").value || 0
      );

      var days = Number(
        document.getElementById("targetDays").value || 26
      );

      var daily = days > 0 ? monthly / days : 0;
      var weekly = daily * 6;

      var targetResult = document.getElementById("targetResult");

      if (targetResult) {

        targetResult.className = "result-box";

        targetResult.innerHTML =
          "<strong>Daily Target:</strong> " + money(daily) +
          "<br><strong>Weekly Target:</strong> " + money(weekly);

      }

      return;
    }

    /* GROWTH */

    if (actionName === "calculate-growth") {

      var previous = Number(
        document.getElementById("growthPrevious").value || 0
      );

      var current = Number(
        document.getElementById("growthCurrent").value || 0
      );

      var growth = previous > 0
        ? ((current - previous) / previous) * 100
        : 0;

      var growthResult = document.getElementById("growthResult");

      if (growthResult) {

        growthResult.className = "result-box";

        growthResult.innerHTML =
          "<strong>Growth:</strong> " +
          growth.toFixed(1) + "%";

      }

      return;
    }

    /* AI TEMPLATE */

    if (actionName === "ai-template") {

      var template = target.getAttribute("data-template");

      var message = "";

      if (template === "daily") {

        message =
          "Daily Sales Action Plan\n\n" +
          "1. Yesterday Actual Review\n" +
          "2. Today's Target\n" +
          "3. Top Customer Focus\n" +
          "4. Salesperson Priority\n" +
          "5. Pipeline Follow-up\n" +
          "6. Target Gap Action\n" +
          "7. End-of-day Review";

      } else if (template === "target") {

        message =
          "Target Breakdown\n\n" +
          "Monthly Target → Weekly Target → Daily Target → Salesperson Target → Customer Target";

      } else if (template === "root") {

        message =
          "Root Cause Analysis\n\n" +
          "Problem → Evidence → 5 Whys → Root Cause → Corrective Action → Owner → Deadline";

      } else {

        message =
          "Sales Coaching Questions\n\n" +
          "1. ဒီအပတ် Target ဘယ်လောက်ရခဲ့လဲ?\n" +
          "2. Gap ရဲ့အဓိကအကြောင်းရင်းကဘာလဲ?\n" +
          "3. Top Customer ဘယ်သူတွေလဲ?\n" +
          "4. Pipeline ဘယ်လောက်ရှိလဲ?\n" +
          "5. မနက်ဖြန်အတွက် ဘာ Action ယူမလဲ?";

      }

      var toolResult = document.getElementById("aiToolResult");

      if (toolResult) {
        toolResult.style.display = "block";
        toolResult.textContent = message;
      }

      return;
    }

    /* QUICK AI */

    if (actionName === "quick-ai") {

      var quickPrompt = target.getAttribute("data-prompt");

      askAI(quickPrompt);
      return;
    }

    /* ASK AI */

    if (actionName === "ask-ai") {

      var aiInput = document.getElementById("aiInput");

      if (!aiInput || !aiInput.value.trim()) {

        showToast("Business problem ကိုရေးပေးပါ");

        return;
      }

      askAI(aiInput.value.trim());

      return;
    }

    /* PREMIUM PLAN */

    if (actionName === "select-plan") {

      var plan = target.getAttribute("data-plan");
      var price = target.getAttribute("data-price");

      openPaymentModal(plan, price);

      return;
    }

    /* PAYMENT */

    if (actionName === "submit-payment") {

      var referenceInput =
        document.getElementById("paymentReference");

      var reference =
        referenceInput
          ? referenceInput.value.trim()
          : "";

      if (!reference) {

        showToast("Transaction Reference ထည့်ပေးပါ");

        return;
      }

      var paymentData = {
        plan: target.getAttribute("data-plan"),
        price: target.getAttribute("data-price"),
        reference: reference,
        status: "pending",
        createdAt: new Date().toISOString()
      };

      writeStorage(KEYS.payment, paymentData);

      closeModal();

      showToast("Payment confirmation submitted");

      return;
    }

    /* CLOSE MODAL */

    if (actionName === "close-modal") {

      closeModal();
      return;
    }

  }

  /* =========================================================
     AI API
     ========================================================= */

  function appendAIMessage(type, text) {

    var box = document.getElementById("aiMessages");

    if (!box) {
      return;
    }

    var message = document.createElement("div");

    message.className = "ai-message " + type;
    message.textContent = text;

    box.appendChild(message);
    box.scrollTop = box.scrollHeight;
  }

  function localAI(prompt) {

    var lower = prompt.toLowerCase();

    if (
      lower.indexOf("sales") !== -1 ||
      lower.indexOf("target") !== -1 ||
      prompt.indexOf("Sales") !== -1 ||
      prompt.indexOf("Target") !== -1
    ) {

      return (
        "Sales Target Gap ကို အောက်ပါအတိုင်း စီမံပါ\n\n" +
        "1. Target vs Actual ကိုတွက်ပါ\n" +
        "2. Gap ကို Territory / Salesperson / Customer အလိုက်ခွဲပါ\n" +
        "3. Pipeline Coverage ကိုစစ်ပါ\n" +
        "4. Top Customer နဲ့ High Potential Customer ကို ဦးစားပေးပါ\n" +
        "5. Sales Activity ကို Daily Target အဖြစ်ပြောင်းပါ\n" +
        "6. Salesperson တစ်ဦးချင်း Coaching လုပ်ပါ\n" +
        "7. End-of-day Actual နဲ့ ပြန် Review လုပ်ပါ\n\n" +
        "အဓိက KPI — Achievement %, Gap, Pipeline Coverage, Productivity, Conversion %"
      );

    }

    if (
      lower.indexOf("team") !== -1 ||
      lower.indexOf("staff") !== -1 ||
      prompt.indexOf("Team") !== -1
    ) {

      return (
        "Team Performance ကျနေပါက\n\n" +
        "1. Result ကိုသာမကြည့်ဘဲ Activity ကိုစစ်ပါ\n" +
        "2. Individual Gap ကိုရှာပါ\n" +
        "3. Root Cause ကို 1-on-1 ဆွေးနွေးပါ\n" +
        "4. Coaching Action သတ်မှတ်ပါ\n" +
        "5. နေ့စဉ် Short Review လုပ်ပါ\n\n" +
        "KPI — Target Achievement, Productivity, Activity, Conversion"
      );

    }

    if (
      lower.indexOf("profit") !== -1 ||
      lower.indexOf("margin") !== -1
    ) {

      return (
        "Profit တိုးချင်ရင် Revenue တစ်ခုတည်းကို မကြည့်ပါနဲ့\n\n" +
        "1. Gross Margin စစ်ပါ\n" +
        "2. Product Mix စစ်ပါ\n" +
        "3. Discount စစ်ပါ\n" +
        "4. Operating Cost စစ်ပါ\n" +
        "5. Low-margin Customer/Product ကိုရှာပါ\n" +
        "6. Cash Flow ကို Review လုပ်ပါ\n\n" +
        "KPI — Gross Margin, OPEX Ratio, Profit, Cash Flow"
      );

    }

    return (
      "Business Problem ကို Action Plan အဖြစ်ပြောင်းပြီး စီမံပါ\n\n" +
      "1. Problem ကိုတိတိကျကျ သတ်မှတ်ပါ\n" +
      "2. Current Data စုပါ\n" +
      "3. Root Cause ရှာပါ\n" +
      "4. Priority Action 3 ခုရွေးပါ\n" +
      "5. Owner နဲ့ Deadline သတ်မှတ်ပါ\n" +
      "6. KPI သတ်မှတ်ပါ\n" +
      "7. Review လုပ်ပြီး ပြင်ဆင်ပါ"
    );

  }

  function askAI(prompt) {

    appendAIMessage("user", prompt);
    appendAIMessage("bot", "AI က အဖြေပြင်ဆင်နေပါတယ်...");

    var box = document.getElementById("aiMessages");

    function replaceLastBot(text) {

      if (!box) {
        return;
      }

      var messages =
        box.querySelectorAll(".ai-message.bot");

      if (messages.length === 0) {
        appendAIMessage("bot", text);
        return;
      }

      var last = messages[messages.length - 1];

      last.textContent = text;
    }

    var controller = null;

    try {

      if (window.AbortController) {
        controller = new AbortController();

        window.setTimeout(function () {
          try {
            controller.abort();
          } catch (e) {}
        }, 12000);
      }

      var request = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt:
            "You are an AI Business Coach for a Myanmar business manager. " +
            "Give practical concise actionable advice. " +
            "Use steps, numbers, KPIs and action plans when useful. " +
            "Answer in the same language as the user when possible.\n\n" +
            prompt
        })
      };

      if (controller) {
        request.signal = controller.signal;
      }

      fetch(AI_API_URL, request)
        .then(function (response) {

          if (!response.ok) {
            throw new Error("AI API error");
          }

          return response.json();
        })
        .then(function (data) {

          var answer =
            data.answer ||
            data.response ||
            data.message ||
            data.result;

          if (!answer) {
            throw new Error("Empty AI response");
          }

          replaceLastBot(String(answer));

        })
        .catch(function () {

          replaceLastBot(localAI(prompt));

        });

    } catch (error) {

      replaceLastBot(localAI(prompt));

    }

  }

  /* =========================================================
     INPUT EVENTS
     ========================================================= */

  document.addEventListener("input", function (event) {

    if (event.target && event.target.id === "lessonSearch") {

      state.search = event.target.value || "";

      var app = document.getElementById("app");

      if (app && state.section === "lessons") {

        app.innerHTML = renderLessons();
        updatePageMeta();

      }

    }

  });

  document.addEventListener("change", function (event) {

    if (event.target && event.target.id === "categoryFilter") {

      state.category =
        event.target.value || "All";

      render();

    }

  });

  /* =========================================================
     GLOBAL CLICK
     ========================================================= */

  document.addEventListener("click", handleClick);

  /* =========================================================
     MOBILE MENU
     ========================================================= */

  document.addEventListener("click", function (event) {

    var target = event.target;

    if (target && target.id === "mobileMenuBtn") {
      openMobileMenu();
    }

    if (target && target.id === "mobileOverlay") {
      closeMobileMenu();
    }

  });

  /* =========================================================
     ESCAPE MODAL
     ========================================================= */

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

      closeModal();
      closeMobileMenu();

    }

  });

  /* =========================================================
     ERROR PROTECTION
     ========================================================= */

  window.addEventListener("error", function (event) {

    console.error(
      "ABA Runtime Error:",
      event.error || event.message
    );

  });

  window.addEventListener(
    "unhandledrejection",
    function (event) {

      console.error(
        "ABA Promise Error:",
        event.reason
      );

    }
  );

  /* =========================================================
     INITIALIZE
     ========================================================= */

  function init() {

    try {

      updateProfileUI();

      render();

    } catch (error) {

      console.error("ABA Init Error:", error);

      var app = document.getElementById("app");

      if (app) {

        app.innerHTML =
          '<div class="card card-pad">' +
            '<h2>Aung Business Academy</h2>' +
            '<p class="muted" style="margin-top:8px">' +
              'Dashboard ကိုဖွင့်ရန် အောက်က Button ကိုနှိပ်ပါ' +
            '</p>' +
            '<button class="btn btn-primary" style="margin-top:15px" data-action="go-section" data-section="dashboard">' +
              'Open Dashboard' +
            '</button>' +
          '</div>';

      }

    }

  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {
    version: APP_VERSION,
    lessons: lessons,
    courseData: courseData,
    getLessonContent: getLessonContent,
    goToSection: goToSection,
    openLesson: function (id) {
      state.lessonId = Number(id);
      render();
    },
    resetProgress: resetProgress,
    getCompleted: getCompleted,
    getProgress: getProgress,
    isPremium: isPremium
  };

  /* =========================================================
     START
     ========================================================= */

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
