"use strict";

(function () {
  var APP_NAME = "Aung Business Academy";
  var USER_KEY = "aung_business_academy_user";
  var COMPLETED_KEY = "aba_completed_lessons";
  var OLD_COMPLETED_KEY = "aung_business_academy_completed";
  var KPI_KEY = "aba_kpi_data";
  var SETTINGS_KEY = "aba_settings";
  var PREMIUM_KEY = "aung_business_academy_premium";

  var categories = [
    ["Business Fundamentals", "💼", [
      "Business Fundamentals","Value Creation","Customer Problem","Business Model","Revenue Model",
      "Cost Structure","Value Proposition","Market Basics","Business Lifecycle","Business Ownership",
      "Business Objectives","Business Environment","Business Risk","Business Ethics","Business Growth"
    ]],
    ["Business Strategy", "🎯", [
      "Strategic Thinking","Vision Mission Goals","SWOT Analysis","Competitive Advantage","Market Positioning",
      "Business Objectives","Strategy Formulation","Strategic Priorities","Resource Allocation","Strategic Execution",
      "Scenario Planning","Risk Strategy","Growth Strategy","Diversification","Strategy Review"
    ]],
    ["Sales Management", "📈", [
      "Sales Management Fundamentals","Sales Target Setting","Target Breakdown","Territory Planning","Route Planning",
      "Sales Team Structure","Sales Pipeline","Sales Activity Management","Sales Productivity","Sales Performance Review",
      "Sales Forecasting","Sales Coaching","Sales Meeting","Sales Motivation","Sales Incentive",
      "Sales Reporting","Sales Control","Sales Strategy Execution","Sales Manager Dashboard","Sales Manager Daily Routine"
    ]],
    ["Sales Skills", "🤝", [
      "Selling Fundamentals","Prospecting","Customer Approach","Needs Discovery","Questioning Skills",
      "Listening Skills","Product Presentation","Value Selling","Feature Benefit","Objection Handling",
      "Negotiation Basics","Closing Techniques","Follow-up","Cross Selling","Up Selling",
      "Relationship Selling","Key Account Selling","Consultative Selling","Sales Communication","Sales Discipline"
    ]],
    ["Customer Management", "👥", [
      "Customer Segmentation","Customer Profiling","Customer Needs","Customer Value","Customer Journey",
      "Customer Experience","Complaint Handling","Customer Retention","Repeat Purchase","Loyalty",
      "Customer Service Standards","Customer Feedback","Customer Relationship","Customer Profitability","Customer Recovery"
    ]],
    ["Marketing", "📣", [
      "Marketing Fundamentals","Market Research","Segmentation","Targeting","Positioning","Marketing Mix",
      "Product Strategy","Pricing Strategy","Promotion Strategy","Place Strategy","Campaign Planning",
      "Marketing Funnel","Lead Generation","Content Strategy","Digital Marketing","Social Media Marketing",
      "Trade Marketing","Shopper Marketing","Marketing KPI","Marketing ROI"
    ]],
    ["Branding", "🏷️", [
      "Brand Fundamentals","Brand Identity","Brand Positioning","Brand Promise","Brand Value",
      "Brand Awareness","Brand Trust","Brand Communication","Brand Consistency","Brand Growth"
    ]],
    ["Finance", "💰", [
      "Business Finance Basics","Revenue Management","Cost Management","Cash Flow","Working Capital",
      "Budgeting","Financial Planning","Profit Management","Margin Management","Break-even Analysis",
      "Investment Decisions","Financial Controls","Cost Reduction","Cash Management","Financial Decision Making"
    ]],
    ["Accounting & P&L", "📊", [
      "Accounting Basics","Income Statement","P&L Structure","Gross Profit","Gross Margin",
      "Operating Expenses","EBITDA Basics","Balance Sheet Basics","Cash Flow Statement","P&L Analysis"
    ]],
    ["Distribution & Operations", "🚚", [
      "Distribution Fundamentals","Channel Strategy","Distributor Selection","Distributor Management","Stock Management",
      "Inventory Control","Warehouse Basics","Delivery Planning","Order Management","Supply Chain Basics",
      "Service Level","Route to Market","Distribution KPI","Distribution Cost","Operational Excellence"
    ]],
    ["Retail & Modern Trade", "🏪", [
      "Retail Fundamentals","Outlet Classification","Numeric Distribution","Weighted Distribution","Planogram Basics",
      "Shelf Availability","Promotion Execution","Modern Trade Negotiation","Retail KPI","Store Execution"
    ]],
    ["Key Account Management", "🏢", [
      "KAM Fundamentals","Account Selection","Account Planning","Customer Business Plan","Joint Business Planning",
      "Key Account Negotiation","Account Review","Customer Profitability","KAM KPI","Strategic Account Growth"
    ]],
    ["Leadership & Management", "👔", [
      "Leadership Fundamentals","Manager vs Leader","Leadership Styles","Goal Setting","Delegation",
      "Coaching","Feedback","Performance Management","Decision Making","Meeting Management",
      "Team Management","Motivation","Conflict Management","Change Management","Leadership Discipline"
    ]],
    ["People & HR", "🧑‍💼", [
      "HR Fundamentals","Recruitment","Job Description","Onboarding","Training Needs",
      "Employee Development","Performance Appraisal","Attendance Discipline","Compensation Basics","Retention"
    ]],
    ["Negotiation", "🤝", [
      "Negotiation Fundamentals","Preparation","BATNA Basics","Negotiation Objectives","Questioning",
      "Concessions","Price Negotiation","Win-Win Negotiation","Difficult Negotiations","Negotiation Review"
    ]],
    ["Business Development", "🚀", [
      "Business Development Fundamentals","Opportunity Identification","New Market Entry","New Product Opportunity",
      "Partnership Strategy","Channel Expansion","Customer Acquisition","Business Growth Pipeline",
      "Business Proposal","Business Development KPI"
    ]],
    ["KPI & Data Analysis", "📉", [
      "KPI Fundamentals","KPI Design","Target vs Actual","Achievement %","Gap Analysis",
      "Trend Analysis","Sales Dashboard","Productivity Analysis","Data-Based Decision Making","KPI Review"
    ]],
    ["Problem Solving & Decision Making", "🧠", [
      "Problem Definition","Root Cause Analysis","5 Whys","Fishbone","Pareto",
      "Prioritization","Decision Framework","Action Planning","Risk Assessment","Review & Learning"
    ]],
    ["Digital Business & AI", "🤖", [
      "Digital Business Fundamentals","Digital Transformation","AI Fundamentals","AI for Sales",
      "AI for Marketing","AI for Customer Service","AI for Productivity","Data & Automation",
      "AI Business Tools","Responsible AI Use"
    ]],
    ["Productivity & Career", "⚡", [
      "Time Management","Priority Management","Daily Planning","Weekly Planning","Meeting Productivity",
      "Focus Management","Professional Communication","Career Planning","Interview Preparation","Personal Development"
    ]]
  ];

  var lessons = [];
  var lessonId = 1;

  categories.forEach(function (cat, categoryIndex) {
    cat[2].forEach(function (title, lessonIndex) {
      lessons.push({
        id: lessonId++,
        title: title,
        category: cat[0],
        icon: cat[1],
        categoryIndex: categoryIndex,
        lessonIndex: lessonIndex
      });
    });
  });

  function $(selector) {
    return document.querySelector(selector);
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function readJSON(key, fallback) {
    try {
      var value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  function getCompleted() {
    var current = readJSON(COMPLETED_KEY, null);

    if (Array.isArray(current)) {
      return current;
    }

    var old = readJSON(OLD_COMPLETED_KEY, []);
    return Array.isArray(old) ? old : [];
  }

  function saveCompleted(list) {
    writeJSON(COMPLETED_KEY, list);
    writeJSON(OLD_COMPLETED_KEY, list);
  }

  function isCompleted(id) {
    return getCompleted().indexOf(Number(id)) !== -1;
  }

  function getProgress() {
    var completed = getCompleted().length;
    return lessons.length ? Math.round((completed / lessons.length) * 100) : 0;
  }

  function getUser() {
    var saved = readJSON(USER_KEY, {});
    var settings = readJSON(SETTINGS_KEY, {});

    return {
      name: settings.name || saved.name || "Aung Zar Ni Win",
      role: settings.role || saved.role || "Business Manager"
    };
  }

  function setUser(name, role) {
    var user = {
      name: name || "Aung Zar Ni Win",
      role: role || "Business Manager"
    };

    writeJSON(USER_KEY, user);
    writeJSON(SETTINGS_KEY, user);
  }

  function getKPI() {
    var data = readJSON(KPI_KEY, {});

    return {
      target: Number(data.target) || 0,
      actual: Number(data.actual) || 0,
      team: Number(data.team) || 0,
      customers: Number(data.customers) || 0,
      orders: Number(data.orders) || 0,
      pipeline: Number(data.pipeline) || 0
    };
  }

  function saveKPI(data) {
    writeJSON(KPI_KEY, data);
  }

  function getPremium() {
    return readJSON(PREMIUM_KEY, {
      active: false,
      expiry: null,
      status: "Free"
    });
  }

  function isPremium() {
    var p = getPremium();

    if (!p.active) return false;

    if (p.expiry && Number(p.expiry) < Date.now()) {
      p.active = false;
      p.status = "Expired";
      writeJSON(PREMIUM_KEY, p);
      return false;
    }

    return true;
  }

  function formatNumber(value) {
    return Number(value || 0).toLocaleString();
  }

  function getLesson(id) {
    for (var i = 0; i < lessons.length; i++) {
      if (lessons[i].id === Number(id)) return lessons[i];
    }

    return null;
  }

  function getCategoryGuide(category) {
    var guides = {
      "Business Fundamentals": {
        concept: "လုပ်ငန်းတစ်ခုသည် Customer အတွက် Value ဖန်တီးပြီး Revenue နှင့် Profit ရရှိအောင် မည်သို့လုပ်ဆောင်သည်ကို နားလည်ရန်",
        kpi: "Revenue, Gross Profit, Cash Flow",
        application: "Business Model, Customer Value နှင့် Cost Structure ကို Manager အနေဖြင့် ပြန်လည်စစ်ဆေးပါ"
      },
      "Business Strategy": {
        concept: "ရည်မှန်းချက်အောင်မြင်ရန် ဘယ် Market ကိုရွေးမလဲ၊ ဘယ် Priority ကိုအရင်လုပ်မလဲဆိုတာ ဆုံးဖြတ်ခြင်း",
        kpi: "Growth %, Market Share, Strategic Initiative Completion",
        application: "SWOT နှင့် Priority ကိုအသုံးပြုပြီး 90-Day Strategy တစ်ခုချမှတ်ပါ"
      },
      "Sales Management": {
        concept: "Sales Target, Pipeline, Forecast နှင့် Team Execution ကို စနစ်တကျ စီမံခန့်ခွဲခြင်း",
        kpi: "Achievement %, Sales Productivity, Strike Rate, Pipeline Coverage",
        application: "Target ကို Monthly → Weekly → Daily → Salesperson အလိုက် ခွဲပြီး Daily Review ပြုလုပ်ပါ"
      },
      "Sales Skills": {
        concept: "Customer Need ကိုရှာဖွေပြီး Value ကိုရှင်းပြကာ Objection ဖြေရှင်းပြီး Sale ကိုပိတ်နိုင်ခြင်း",
        kpi: "Conversion Rate, Average Order Value, Repeat Purchase",
        application: "Customer conversation တစ်ခုစီမှာ Question → Need → Value → Objection → Close Framework ကိုအသုံးပြုပါ"
      },
      "Customer Management": {
        concept: "Customer ကို Segment လုပ်ပြီး Need, Experience, Retention နှင့် Profitability ကို စီမံခြင်း",
        kpi: "Retention Rate, Repeat Rate, Active Customers, Complaints",
        application: "Top Customers နှင့် At-Risk Customers ကိုခွဲပြီး Follow-up Plan ပြုလုပ်ပါ"
      },
      "Marketing": {
        concept: "Market နှင့် Customer ကိုနားလည်ပြီး Product, Price, Promotion, Place ကိုပေါင်းစပ်အသုံးချခြင်း",
        kpi: "Leads, Conversion, Marketing ROI, Campaign Result",
        application: "Campaign တစ်ခုစီအတွက် Objective → Audience → Offer → Channel → KPI သတ်မှတ်ပါ"
      },
      "Branding": {
        concept: "Customer စိတ်ထဲမှာ မှတ်မိနိုင်ပြီး ယုံကြည်စိတ်ချရသော Brand Identity နှင့် Positioning တည်ဆောက်ခြင်း",
        kpi: "Awareness, Consideration, Repeat Purchase",
        application: "Brand Promise နှင့် Customer Experience တစ်ညီတစ်ညွတ် ဖြစ်မဖြစ် စစ်ဆေးပါ"
      },
      "Finance": {
        concept: "Revenue တိုးတက်မှုသာမက Cost, Cash Flow, Working Capital နှင့် Profit ကိုပါ စီမံခြင်း",
        kpi: "Gross Margin, Operating Expense Ratio, Cash Flow",
        application: "Cash In, Cash Out နှင့် Profit ကို သီးခြားစောင့်ကြည့်ပါ"
      },
      "Accounting & P&L": {
        concept: "Income Statement, Gross Profit, Operating Expenses နှင့် Profitability ကို Manager အမြင်ဖြင့် ဖတ်နိုင်ခြင်း",
        kpi: "Gross Profit, Gross Margin, OPEX Ratio, Net Margin",
        application: "Monthly P&L Review တွင် Revenue → Gross Profit → OPEX → Profit အစဉ်လိုက်စစ်ဆေးပါ"
      },
      "Distribution & Operations": {
        concept: "Channel, Distributor, Stock, Warehouse, Delivery နှင့် Route-to-Market ကို ထိရောက်စွာ စီမံခြင်း",
        kpi: "Numeric Distribution, Fill Rate, Stock Cover, Service Level",
        application: "Stock Out နှင့် Delivery Delay ဖြစ်ရသည့် Root Cause ကို Weekly Review လုပ်ပါ"
      },
      "Retail & Modern Trade": {
        concept: "Outlet Execution, Availability, Shelf Presence နှင့် Promotion ကို စနစ်တကျ ထိန်းချုပ်ခြင်း",
        kpi: "Availability, Distribution, Promo Compliance, Store Execution",
        application: "Outlet Visit တွင် Availability → Visibility → Price → Promotion ကို စစ်ဆေးပါ"
      },
      "Key Account Management": {
        concept: "အရေးကြီးသော Customer Account များအတွက် Joint Business Plan နှင့် Long-Term Growth Plan တည်ဆောက်ခြင်း",
        kpi: "Account Growth, Margin, Retention, JBP Completion",
        application: "Account တစ်ခုချင်းစီအတွက် Customer Objective နှင့် Supplier Objective ကို ချိတ်ဆက်ပါ"
      },
      "Leadership & Management": {
        concept: "Team ကို Direction ပေးခြင်း၊ Goal သတ်မှတ်ခြင်း၊ Delegation, Coaching နှင့် Performance Management ပြုလုပ်ခြင်း",
        kpi: "Goal Completion, Coaching Frequency, Team Productivity",
        application: "Manager အနေဖြင့် Problem ကို ကိုယ်တိုင်ဖြေရှင်းမည့်အစား Team ကို Coaching လုပ်ပါ"
      },
      "People & HR": {
        concept: "မှန်ကန်သောလူကို ရွေးချယ်ပြီး Onboarding, Training, Performance နှင့် Retention ကို စီမံခြင်း",
        kpi: "Time-to-Fill, Training Completion, Retention",
        application: "Role တစ်ခုချင်းစီအတွက် Clear KPI နှင့် Development Plan ထားပါ"
      },
      "Negotiation": {
        concept: "Preparation, Objective, BATNA, Value နှင့် Concession ကို အသုံးပြုပြီး Business Deal ကို စီမံခြင်း",
        kpi: "Win Rate, Margin, Payment Terms",
        application: "Price မလျှော့မီ Value, Volume, Terms နှင့် Trade-off ကို ဆွေးနွေးပါ"
      },
      "Business Development": {
        concept: "Business Growth အတွက် Market, Customer, Product, Partnership နှင့် Channel Opportunity အသစ်များရှာဖွေခြင်း",
        kpi: "Qualified Pipeline, Conversion, New Revenue",
        application: "Opportunity တစ်ခုစီကို Potential → Feasibility → Investment → Return အလိုက် သုံးသပ်ပါ"
      },
      "KPI & Data Analysis": {
        concept: "Data ကို KPI အဖြစ်ပြောင်းပြီး Target vs Actual, Gap နှင့် Trend ကိုအသုံးပြုကာ Decision ချခြင်း",
        kpi: "Achievement %, Gap, Trend, Productivity",
        application: "KPI တစ်ခုကျဆင်းပါက Number ကိုကြည့်ပြီး Root Cause → Action → Owner → Deadline ချမှတ်ပါ"
      },
      "Problem Solving & Decision Making": {
        concept: "Problem ကိုမှန်ကန်စွာသတ်မှတ်ပြီး Root Cause ရှာကာ Priority နှင့် Action Plan ဖြင့် ဖြေရှင်းခြင်း",
        kpi: "Action Closure, Recurrence Rate",
        application: "5 Whys, Fishbone နှင့် Pareto ကိုအသုံးပြုပြီး Root Cause ကိုရှာပါ"
      },
      "Digital Business & AI": {
        concept: "Digital Tools နှင့် AI ကို အသုံးပြုပြီး Productivity, Data Processing, Customer Service နှင့် Decision Making တိုးတက်စေခြင်း",
        kpi: "Time Saved, Adoption, Error Reduction",
        application: "AI ကို Routine Task များတွင် စတင်အသုံးချပြီး Human Review ကို ဆက်လက်ထားပါ"
      },
      "Productivity & Career": {
        concept: "Time, Priority, Focus နှင့် Professional Skills ကို စနစ်တကျ စီမံခြင်း",
        kpi: "Priority Completion, Learning Hours, Weekly Execution",
        application: "နေ့စဉ် Top 3 Priorities သတ်မှတ်ပြီး အရေးကြီးသောအလုပ်ကို အရင်ပြီးအောင်လုပ်ပါ"
      }
    };

    return guides[category] || {
      concept: "Business Management အတွက် လက်တွေ့အသုံးချနိုင်သော အခြေခံ Framework ကို နားလည်ရန်",
      kpi: "Target, Actual, Achievement %, Gap",
      application: "သင်၏ လုပ်ငန်းအခြေအနေတွင် လက်တွေ့အသုံးချပါ"
    };
  }

  function getLessonContent(lesson) {
    var guide = getCategoryGuide(lesson.category);

    return {
      objective: lesson.title + " ကို Business Manager အနေဖြင့် နားလည်ပြီး လက်တွေ့အသုံးချနိုင်ရန်",
      concept: guide.concept,
      why: lesson.title + " သည် Decision Making, Execution နှင့် Business Performance ကို တိုးတက်စေရန် အရေးကြီးသော Management Skill တစ်ခုဖြစ်သည်",
      framework: [
        "အခြေအနေကို အရင်သတ်မှတ်ပါ",
        "လက်ရှိ Data နှင့် KPI ကို စစ်ဆေးပါ",
        "Root Cause သို့မဟုတ် Main Driver ကို ရှာပါ",
        "Action Plan, Owner နှင့် Deadline သတ်မှတ်ပါ",
        "Result ကို KPI ဖြင့် ပြန်လည်တိုင်းတာပါ"
      ],
      application: guide.application,
      example: "ဥပမာ — Sales Result ကျဆင်းနေပါက Salesperson အား အပြစ်တင်မည့်အစား Target vs Actual, Customer Coverage, Order Frequency, Conversion နှင့် Stock Availability ကို စစ်ဆေးပြီး အဓိက Gap ကို ရှာဖွေပါ",
      kpi: guide.kpi,
      checklist: [
        "Objective သတ်မှတ်ပြီးပြီလား",
        "Data ရှိပြီလား",
        "Root Cause သိပြီလား",
        "Action Owner သတ်မှတ်ပြီးပြီလား",
        "Deadline ထားပြီးပြီလား",
        "Result ကို ပြန်တိုင်းတာမလား"
      ],
      assignment: "မိမိလုပ်ငန်းထဲမှ ဤ Topic နှင့်သက်ဆိုင်သော ပြဿနာတစ်ခုရွေးပြီး Target → Current Situation → Gap → Root Cause → Action → KPI ပုံစံဖြင့် ရေးသားပါ",
      takeaways: [
        lesson.title + " ကို Concept အနေနဲ့သာမက လက်တွေ့ Management Process အဖြစ်အသုံးချပါ",
        "Data မပါဘဲ ဆုံးဖြတ်ချက်မချပါနှင့်",
        "Action တစ်ခုချင်းစီတွင် Owner နှင့် Deadline ထားပါ",
        "Result ကို KPI ဖြင့် ပြန်လည်တိုင်းတာပါ"
      ]
    };
  }

  function pageTitle(title, subtitle) {
    return (
      '<div class="page-heading">' +
        '<div>' +
          '<div class="eyebrow">AUNG BUSINESS ACADEMY</div>' +
          '<h1>' + escapeHtml(title) + '</h1>' +
          '<p>' + escapeHtml(subtitle || "") + '</p>' +
        '</div>' +
      '</div>'
    );
  }

  function statCard(icon, label, value, small) {
    return (
      '<div class="stat-card">' +
        '<div class="stat-icon">' + icon + '</div>' +
        '<div class="stat-info">' +
          '<span>' + escapeHtml(label) + '</span>' +
          '<strong>' + escapeHtml(value) + '</strong>' +
          (small ? '<small>' + escapeHtml(small) + '</small>' : '') +
        '</div>' +
      '</div>'
    );
  }

  function progressBar(percent) {
    var p = Math.max(0, Math.min(100, Number(percent) || 0));

    return (
      '<div class="progress-track">' +
        '<div class="progress-fill" style="width:' + p + '%"></div>' +
      '</div>'
    );
  }

  function dashboard() {
    var user = getUser();
    var completed = getCompleted().length;
    var progress = getProgress();
    var kpi = getKPI();

    var achievement = kpi.target > 0
      ? Math.round((kpi.actual / kpi.target) * 100)
      : 0;

    var gap = Math.max(0, kpi.target - kpi.actual);

    var continueLesson = null;

    for (var i = 0; i < lessons.length; i++) {
      if (!isCompleted(lessons[i].id)) {
        continueLesson = lessons[i];
        break;
      }
    }

    if (!continueLesson) continueLesson = lessons[0];

    var categoryCards = categories.map(function (cat, index) {
      var total = cat[2].length;
      var done = 0;

      for (var i = 0; i < lessons.length; i++) {
        if (lessons[i].categoryIndex === index && isCompleted(lessons[i].id)) {
          done++;
        }
      }

      var percent = total ? Math.round((done / total) * 100) : 0;

      return (
        '<button class="category-card" data-action="category" data-category="' + escapeHtml(cat[0]) + '">' +
          '<div class="category-icon">' + cat[1] + '</div>' +
          '<div class="category-main">' +
            '<strong>' + escapeHtml(cat[0]) + '</strong>' +
            '<span>' + total + ' Lessons · ' + done + ' Completed</span>' +
            progressBar(percent) +
          '</div>' +
          '<b>' + percent + '%</b>' +
        '</button>'
      );
    }).join("");

    return (
      pageTitle("Dashboard", "Business Management Command Center") +

      '<section class="welcome-card">' +
        '<div class="welcome-copy">' +
          '<span class="welcome-label">WELCOME BACK</span>' +
          '<h2>' + escapeHtml(user.name) + '</h2>' +
          '<p>Build stronger business management, sales execution and leadership skills</p>' +
          '<div class="welcome-actions">' +
            '<button class="btn btn-primary" data-action="open-lesson" data-id="' + continueLesson.id + '">Continue Learning</button>' +
            '<button class="btn btn-secondary" data-action="section" data-section="sales">Sales Manager</button>' +
          '</div>' +
        '</div>' +
        '<div class="welcome-mark">ABA</div>' +
      '</section>' +

      '<section class="stats-grid">' +
        statCard("▣", "Total Lessons", formatNumber(lessons.length), "Professional Business Curriculum") +
        statCard("✓", "Completed", formatNumber(completed), "Lessons completed") +
        statCard("◔", "Overall Progress", progress + "%", "Learning progress") +
        statCard("◆", "Premium", isPremium() ? "ACTIVE" : "FREE", "Lesson 1 free") +
      '</section>' +

      '<section class="dashboard-grid">' +
        '<div class="panel">' +
          '<div class="panel-header">' +
            '<div><h3>Continue Learning</h3><span>Next recommended lesson</span></div>' +
            '<span class="panel-badge">' + continueLesson.icon + '</span>' +
          '</div>' +
          '<div class="continue-lesson">' +
            '<div class="lesson-number">LESSON ' + continueLesson.id + '</div>' +
            '<h3>' + escapeHtml(continueLesson.title) + '</h3>' +
            '<p>' + escapeHtml(continueLesson.category) + '</p>' +
            '<button class="btn btn-primary" data-action="open-lesson" data-id="' + continueLesson.id + '">Open Lesson</button>' +
          '</div>' +
        '</div>' +

        '<div class="panel">' +
          '<div class="panel-header">' +
            '<div><h3>Sales KPI Snapshot</h3><span>Target vs Actual</span></div>' +
          '</div>' +
          '<div class="mini-kpi-grid">' +
            '<div><span>Target</span><strong>' + formatNumber(kpi.target) + '</strong></div>' +
            '<div><span>Actual</span><strong>' + formatNumber(kpi.actual) + '</strong></div>' +
            '<div><span>Achievement</span><strong>' + achievement + '%</strong></div>' +
            '<div><span>Gap</span><strong>' + formatNumber(gap) + '</strong></div>' +
          '</div>' +
          progressBar(achievement) +
          '<button class="text-button" data-action="section" data-section="kpi">Open KPI Dashboard →</button>' +
        '</div>' +
      '</section>' +

      '<section class="panel">' +
        '<div class="panel-header">' +
          '<div><h3>Business Academy</h3><span>20 professional management categories</span></div>' +
          '<button class="text-button" data-action="section" data-section="academy">View All →</button>' +
        '</div>' +
        '<div class="category-grid">' + categoryCards + '</div>' +
      '</section>'
    );
  }

  function academy() {
    var html = pageTitle("Business Academy", "Professional Business Management Curriculum");

    html += '<div class="stats-grid">';
    html += statCard("▣", "Categories", categories.length, "Management areas");
    html += statCard("▤", "Lessons", lessons.length, "Professional lessons");
    html += statCard("✓", "Completed", getCompleted().length, "Your progress");
    html += statCard("◔", "Progress", getProgress() + "%", "Overall");
    html += '</div>';

    html += '<div class="category-grid academy-grid">';

    categories.forEach(function (cat, index) {
      var done = 0;

      lessons.forEach(function (lesson) {
        if (lesson.categoryIndex === index && isCompleted(lesson.id)) done++;
      });

      var total = cat[2].length;
      var percent = total ? Math.round((done / total) * 100) : 0;

      html +=
        '<button class="academy-category" data-action="category" data-category="' + escapeHtml(cat[0]) + '">' +
          '<div class="academy-category-top">' +
            '<span class="large-icon">' + cat[1] + '</span>' +
            '<span class="arrow">→</span>' +
          '</div>' +
          '<h3>' + escapeHtml(cat[0]) + '</h3>' +
          '<p>' + total + ' lessons</p>' +
          progressBar(percent) +
          '<small>' + done + ' completed · ' + percent + '%</small>' +
        '</button>';
    });

    html += '</div>';

    return html;
  }

  function lessonsPage(categoryFilter, search) {
    var html = pageTitle("Lessons", "Explore and complete the 260-lesson curriculum");

    var filter = categoryFilter || "All";
    var term = String(search || "").toLowerCase();

    html +=
      '<div class="lesson-toolbar">' +
        '<input id="lessonSearch" class="search-input" type="search" placeholder="Search lessons..." value="' + escapeHtml(search || "") + '">' +
        '<select id="categoryFilter" class="select-input">' +
          '<option value="All"' + (filter === "All" ? " selected" : "") + '>All Categories</option>' +
          categories.map(function (cat) {
            return '<option value="' + escapeHtml(cat[0]) + '"' + (filter === cat[0] ? " selected" : "") + '>' + escapeHtml(cat[0]) + '</option>';
          }).join("") +
        '</select>' +
      '</div>';

    var filtered = lessons.filter(function (lesson) {
      var categoryMatch = filter === "All" || lesson.category === filter;
      var searchMatch = !term ||
        lesson.title.toLowerCase().indexOf(term) !== -1 ||
        lesson.category.toLowerCase().indexOf(term) !== -1;

      return categoryMatch && searchMatch;
    });

    html += '<div class="lesson-list">';

    if (!filtered.length) {
      html += '<div class="empty-state"><h3>No lessons found</h3><p>Try another search or category</p></div>';
    }

    filtered.forEach(function (lesson) {
      var done = isCompleted(lesson.id);
      var locked = lesson.id > 1 && !isPremium();

      html +=
        '<div class="lesson-row">' +
          '<div class="lesson-icon">' + lesson.icon + '</div>' +
          '<div class="lesson-info">' +
            '<span class="lesson-category">' + escapeHtml(lesson.category) + '</span>' +
            '<h3>Lesson ' + lesson.id + ' · ' + escapeHtml(lesson.title) + '</h3>' +
            '<p>' + (done ? "Completed" : locked ? "Premium Lesson" : "Available") + '</p>' +
          '</div>' +
          '<div class="lesson-status">' +
            (done ? '<span class="status-complete">✓</span>' :
              locked ? '<span class="status-lock">◆</span>' :
              '<button class="btn btn-small btn-primary" data-action="open-lesson" data-id="' + lesson.id + '">Open</button>') +
          '</div>' +
        '</div>';
    });

    html += '</div>';

    return html;
  }

  function progressPage() {
    var completed = getCompleted();

    var html = pageTitle("My Progress", "Track your academy learning progress");

    html +=
      '<div class="stats-grid">' +
        statCard("▣", "Total", lessons.length, "Lessons") +
        statCard("✓", "Completed", completed.length, "Finished") +
        statCard("◔", "Progress", getProgress() + "%", "Overall") +
        statCard("!", "Remaining", lessons.length - completed.length, "To complete") +
      '</div>';

    html += '<div class="panel"><div class="panel-header"><div><h3>Category Progress</h3><span>Track every management area</span></div></div>';

    categories.forEach(function (cat, index) {
      var total = cat[2].length;
      var done = 0;

      lessons.forEach(function (lesson) {
        if (lesson.categoryIndex === index && isCompleted(lesson.id)) done++;
      });

      var percent = total ? Math.round((done / total) * 100) : 0;

      html +=
        '<div class="progress-category">' +
          '<div class="progress-category-head">' +
            '<strong>' + cat[1] + ' ' + escapeHtml(cat[0]) + '</strong>' +
            '<span>' + done + '/' + total + ' · ' + percent + '%</span>' +
          '</div>' +
          progressBar(percent) +
        '</div>';
    });

    html +=
      '<div class="danger-zone">' +
        '<button class="btn btn-danger" data-action="reset-progress">Reset Lesson Progress</button>' +
      '</div>' +
      '</div>';

    return html;
  }

  function salesPage() {
    var kpi = getKPI();

    var achievement = kpi.target > 0 ? Math.round((kpi.actual / kpi.target) * 100) : 0;
    var gap = Math.max(0, kpi.target - kpi.actual);

    return (
      pageTitle("Sales Manager", "Daily Sales Execution Command Center") +

      '<div class="panel">' +
        '<div class="panel-header"><div><h3>Monthly Sales Control</h3><span>Enter your current business numbers</span></div></div>' +
        '<div class="form-grid">' +
          '<label>Monthly Target<input class="kpi-input" data-kpi="target" type="number" value="' + kpi.target + '"></label>' +
          '<label>Actual Sales<input class="kpi-input" data-kpi="actual" type="number" value="' + kpi.actual + '"></label>' +
          '<label>Team Members<input class="kpi-input" data-kpi="team" type="number" value="' + kpi.team + '"></label>' +
          '<label>Active Customers<input class="kpi-input" data-kpi="customers" type="number" value="' + kpi.customers + '"></label>' +
        '</div>' +
        '<button class="btn btn-primary" data-action="save-kpi">Save KPI</button>' +
      '</div>' +

      '<div class="stats-grid">' +
        statCard("🎯", "Target", formatNumber(kpi.target), "Monthly") +
        statCard("📈", "Actual", formatNumber(kpi.actual), "Current") +
        statCard("✓", "Achievement", achievement + "%", "Target achievement") +
        statCard("⚠", "Gap", formatNumber(gap), "Remaining") +
      '</div>' +

      '<div class="dashboard-grid">' +
        '<div class="panel">' +
          '<div class="panel-header"><div><h3>Daily Manager Routine</h3><span>Execution checklist</span></div></div>' +
          '<ul class="check-list">' +
            '<li>✓ Review yesterday sales</li>' +
            '<li>✓ Check today's target</li>' +
            '<li>✓ Review salesperson activity</li>' +
            '<li>✓ Check customer / outlet coverage</li>' +
            '<li>✓ Review collection and outstanding</li>' +
            '<li>✓ Identify today's top 3 priorities</li>' +
            '<li>✓ End-of-day result review</li>' +
          '</ul>' +
        '</div>' +

        '<div class="panel">' +
          '<div class="panel-header"><div><h3>Target Breakdown</h3><span>Simple execution planning</span></div></div>' +
          '<div class="formula-box">Daily Target = Monthly Target ÷ Working Days</div>' +
          '<div class="formula-box">Gap = Target − Actual</div>' +
          '<div class="formula-box">Achievement % = Actual ÷ Target × 100</div>' +
          '<button class="btn btn-secondary" data-action="section" data-section="tools">Open Business Tools</button>' +
        '</div>' +
      '</div>'
    );
  }

  function kpiPage() {
    var kpi = getKPI();
    var achievement = kpi.target > 0 ? Math.round((kpi.actual / kpi.target) * 100) : 0;
    var gap = Math.max(0, kpi.target - kpi.actual);

    return (
      pageTitle("KPI & Analytics", "Target, Actual, Achievement and Gap") +

      '<div class="stats-grid">' +
        statCard("🎯", "Target", formatNumber(kpi.target), "Monthly target") +
        statCard("📈", "Actual", formatNumber(kpi.actual), "Current result") +
        statCard("✓", "Achievement", achievement + "%", "Performance") +
        statCard("⚠", "Gap", formatNumber(gap), "Remaining") +
      '</div>' +

      '<div class="panel">' +
        '<div class="panel-header"><div><h3>Performance Indicator</h3><span>Target achievement</span></div><strong>' + achievement + '%</strong></div>' +
        progressBar(achievement) +
        '<div class="analytics-grid">' +
          '<div><span>Team</span><strong>' + formatNumber(kpi.team) + '</strong></div>' +
          '<div><span>Customers</span><strong>' + formatNumber(kpi.customers) + '</strong></div>' +
          '<div><span>Orders</span><strong>' + formatNumber(kpi.orders) + '</strong></div>' +
          '<div><span>Pipeline</span><strong>' + formatNumber(kpi.pipeline) + '</strong></div>' +
        '</div>' +
      '</div>' +

      '<div class="panel">' +
        '<div class="panel-header"><div><h3>KPI Management Rule</h3><span>Use numbers to drive action</span></div></div>' +
        '<div class="rule-grid">' +
          '<div><b>1</b><span>Measure</span></div>' +
          '<div><b>2</b><span>Compare</span></div>' +
          '<div><b>3</b><span>Find Gap</span></div>' +
          '<div><b>4</b><span>Find Root Cause</span></div>' +
          '<div><b>5</b><span>Take Action</span></div>' +
          '<div><b>6</b><span>Review</span></div>' +
        '</div>' +
      '</div>'
    );
  }

  function toolsPage() {
    return (
      pageTitle("Business Tools", "Practical calculators for business managers") +

      '<div class="tool-grid">' +

        '<div class="tool-card">' +
          '<div class="tool-icon">💰</div>' +
          '<h3>Profit & Margin</h3>' +
          '<label>Sales<input id="salesValue" type="number" placeholder="Sales"></label>' +
          '<label>Cost<input id="costValue" type="number" placeholder="Cost"></label>' +
          '<button class="btn btn-primary" data-action="profit-calc">Calculate</button>' +
          '<div id="profitResult" class="tool-result"></div>' +
        '</div>' +

        '<div class="tool-card">' +
          '<div class="tool-icon">🎯</div>' +
          '<h3>Sales Target</h3>' +
          '<label>Monthly Target<input id="monthlyTarget" type="number" placeholder="Target"></label>' +
          '<label>Working Days<input id="workingDays" type="number" value="26"></label>' +
          '<button class="btn btn-primary" data-action="target-calc">Calculate</button>' +
          '<div id="targetResult" class="tool-result"></div>' +
        '</div>' +

        '<div class="tool-card">' +
          '<div class="tool-icon">📈</div>' +
          '<h3>Growth</h3>' +
          '<label>Previous Sales<input id="previousSales" type="number" placeholder="Previous"></label>' +
          '<label>Current Sales<input id="currentSales" type="number" placeholder="Current"></label>' +
          '<button class="btn btn-primary" data-action="growth-calc">Calculate</button>' +
          '<div id="growthResult" class="tool-result"></div>' +
        '</div>' +

        '<div class="tool-card">' +
          '<div class="tool-icon">⚖</div>' +
          '<h3>Break-even</h3>' +
          '<label>Fixed Cost<input id="fixedCost" type="number" placeholder="Fixed Cost"></label>' +
          '<label>Contribution / Unit<input id="contribution" type="number" placeholder="Contribution"></label>' +
          '<button class="btn btn-primary" data-action="break-even-calc">Calculate</button>' +
          '<div id="breakEvenResult" class="tool-result"></div>' +
        '</div>' +

      '</div>'
    );
  }

  function reportsPage() {
    var user = getUser();
    var kpi = getKPI();

    return (
      pageTitle("Business Reports", "Management review and reporting workspace") +

      '<div class="report-card">' +
        '<div class="report-header">' +
          '<div><span>AUNG BUSINESS ACADEMY</span><h2>Management Performance Report</h2></div>' +
          '<strong>' + new Date().toLocaleDateString() + '</strong>' +
        '</div>' +

        '<div class="report-section">' +
          '<h3>Manager</h3>' +
          '<p>' + escapeHtml(user.name) + ' · ' + escapeHtml(user.role) + '</p>' +
        '</div>' +

        '<div class="report-section">' +
          '<h3>Sales KPI</h3>' +
          '<div class="report-metrics">' +
            '<div><span>Target</span><b>' + formatNumber(kpi.target) + '</b></div>' +
            '<div><span>Actual</span><b>' + formatNumber(kpi.actual) + '</b></div>' +
            '<div><span>Team</span><b>' + formatNumber(kpi.team) + '</b></div>' +
            '<div><span>Customers</span><b>' + formatNumber(kpi.customers) + '</b></div>' +
          '</div>' +
        '</div>' +

        '<div class="report-section">' +
          '<h3>Academy Progress</h3>' +
          '<p>' + getCompleted().length + ' of ' + lessons.length + ' lessons completed (' + getProgress() + '%)</p>' +
          progressBar(getProgress()) +
        '</div>' +

        '<button class="btn btn-primary" data-action="print-report">Print / Save Report</button>' +
      '</div>'
    );
  }

  function aiCoachPage() {
    return (
      pageTitle("AI Business Coach", "Practical business, sales and management problem solving") +

      '<div class="ai-layout">' +
        '<div class="panel ai-panel">' +
          '<div class="ai-header">' +
            '<div class="ai-avatar">AI</div>' +
            '<div><h3>AI Business Coach</h3><span>Business Management Assistant</span></div>' +
          '</div>' +

          '<div class="quick-prompts">' +
            '<button data-action="quick-ai" data-prompt="My sales target is not being achieved. Help me find the root causes and create an action plan">Sales Problem</button>' +
            '<button data-action="quick-ai" data-prompt="Create a practical daily sales manager action plan">Daily Plan</button>' +
            '<button data-action="quick-ai" data-prompt="How can I improve my sales team performance">Team Performance</button>' +
            '<button data-action="quick-ai" data-prompt="Give me a practical business growth plan">Business Growth</button>' +
          '</div>' +

          '<textarea id="aiPrompt" class="ai-input" placeholder="Describe your business problem..."></textarea>' +

          '<button class="btn btn-primary ai-send" data-action="ask-ai">Ask AI Business Coach</button>' +

          '<div id="aiResult" class="ai-result">' +
            '<div class="ai-placeholder">Your practical business advice will appear here</div>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function aiToolsPage() {
    return (
      pageTitle("AI Business Tools", "Structured tools for managers") +

      '<div class="ai-tools-grid">' +
        '<button class="ai-tool" data-action="ai-tool" data-type="daily">📅<strong>Daily Action Plan</strong><span>Create today's manager priorities</span></button>' +
        '<button class="ai-tool" data-action="ai-tool" data-type="target">🎯<strong>Target Breakdown</strong><span>Monthly to daily execution</span></button>' +
        '<button class="ai-tool" data-action="ai-tool" data-type="root">🧠<strong>Root Cause Analysis</strong><span>Find the real business problem</span></button>' +
        '<button class="ai-tool" data-action="ai-tool" data-type="meeting">👥<strong>Manager Meeting</strong><span>Daily / weekly meeting structure</span></button>' +
        '<button class="ai-tool" data-action="ai-tool" data-type="coaching">🎓<strong>Team Coaching</strong><span>Questions for salesperson coaching</span></button>' +
      '</div>' +

      '<div id="aiToolResult" class="panel ai-result-panel">' +
        '<div class="ai-placeholder">Select an AI Business Tool</div>' +
      '</div>'
    );
  }

  function premiumPage() {
    var active = isPremium();

    return (
      pageTitle("Premium Membership", "Full Business Academy access") +

      '<div class="premium-hero">' +
        '<div>' +
          '<span class="premium-label">ABA PREMIUM</span>' +
          '<h2>' + (active ? "Premium Membership Active" : "Upgrade Your Business Management Skills") + '</h2>' +
          '<p>Lesson 1 is free · Lesson 2+ requires Premium Membership</p>' +
        '</div>' +
        '<div class="premium-status">' + (active ? "ACTIVE" : "FREE") + '</div>' +
      '</div>' +

      '<div class="pricing-grid">' +
        '<div class="price-card"><span>1 MONTH</span><strong>25,000 Ks</strong><p>Full Academy Access</p><button class="btn btn-primary" data-action="payment" data-plan="1 Month">Choose Plan</button></div>' +
        '<div class="price-card featured"><span>3 MONTHS</span><strong>60,000 Ks</strong><p>Full Academy Access</p><button class="btn btn-primary" data-action="payment" data-plan="3 Months">Choose Plan</button></div>' +
        '<div class="price-card"><span>6 MONTHS</span><strong>100,000 Ks</strong><p>Full Academy Access</p><button class="btn btn-primary" data-action="payment" data-plan="6 Months">Choose Plan</button></div>' +
      '</div>' +

      '<div class="panel payment-panel">' +
        '<h3>Payment Methods</h3>' +
        '<div class="payment-methods">' +
          '<div><b>KPay</b><span>Payment details to be provided</span></div>' +
          '<div><b>CB Bank</b><span>Payment details to be provided</span></div>' +
        '</div>' +
        '<p class="muted">Payment ပြုလုပ်ပြီးပါက Membership activation ကို Admin မှ အတည်ပြုပေးနိုင်ရန် Transaction Reference ကို သိမ်းထားပါ</p>' +
      '</div>'
    );
  }

  function settingsPage() {
    var user = getUser();

    return (
      pageTitle("Settings", "Manage your academy profile and local data") +

      '<div class="panel settings-panel">' +
        '<div class="form-grid">' +
          '<label>Display Name<input id="settingName" type="text" value="' + escapeHtml(user.name) + '"></label>' +
          '<label>Role<input id="settingRole" type="text" value="' + escapeHtml(user.role) + '"></label>' +
        '</div>' +
        '<button class="btn btn-primary" data-action="save-settings">Save Settings</button>' +
      '</div>' +

      '<div class="panel danger-panel">' +
        '<h3>Local Data</h3>' +
        '<p>Progress နှင့် KPI data များကို ဤ Browser ၏ Local Storage တွင် သိမ်းထားပါသည်</p>' +
        '<button class="btn btn-danger" data-action="reset-all">Reset All Local Data</button>' +
      '</div>'
    );
  }

  function openLesson(id) {
    var lesson = getLesson(id);

    if (!lesson) return;

    if (lesson.id > 1 && !isPremium()) {
      showPremiumModal();
      return;
    }

    var content = getLessonContent(lesson);
    var done = isCompleted(lesson.id);

    var html =
      pageTitle("Lesson " + lesson.id, lesson.category) +

      '<div class="lesson-reader">' +
        '<div class="lesson-reader-head">' +
          '<span class="lesson-big-icon">' + lesson.icon + '</span>' +
          '<div><span class="lesson-category">' + escapeHtml(lesson.category) + '</span><h2>' + escapeHtml(lesson.title) + '</h2></div>' +
        '</div>' +

        '<section class="lesson-section">' +
          '<span class="section-label">OBJECTIVE</span>' +
          '<p>' + escapeHtml(content.objective) + '</p>' +
        '</section>' +

        '<section class="lesson-section">' +
          '<span class="section-label">CORE CONCEPT</span>' +
          '<p>' + escapeHtml(content.concept) + '</p>' +
        '</section>' +

        '<section class="lesson-section">' +
          '<span class="section-label">WHY IT MATTERS</span>' +
          '<p>' + escapeHtml(content.why) + '</p>' +
        '</section>' +

        '<section class="lesson-section">' +
          '<span class="section-label">PRACTICAL FRAMEWORK</span>' +
          '<ol class="number-list">' +
            content.framework.map(function (item) {
              return '<li>' + escapeHtml(item) + '</li>';
            }).join("") +
          '</ol>' +
        '</section>' +

        '<section class="lesson-section">' +
          '<span class="section-label">MANAGER APPLICATION</span>' +
          '<p>' + escapeHtml(content.application) + '</p>' +
        '</section>' +

        '<section class="lesson-section example-section">' +
          '<span class="section-label">MYANMAR BUSINESS EXAMPLE</span>' +
          '<p>' + escapeHtml(content.example) + '</p>' +
        '</section>' +

        '<section class="lesson-section">' +
          '<span class="section-label">KEY KPI</span>' +
          '<div class="kpi-highlight">' + escapeHtml(content.kpi) + '</div>' +
        '</section>' +

        '<section class="lesson-section">' +
          '<span class="section-label">MANAGER CHECKLIST</span>' +
          '<ul class="check-list">' +
            content.checklist.map(function (item) {
              return '<li>□ ' + escapeHtml(item) + '</li>';
            }).join("") +
          '</ul>' +
        '</section>' +

        '<section class="lesson-section assignment-section">' +
          '<span class="section-label">PRACTICAL ASSIGNMENT</span>' +
          '<p>' + escapeHtml(content.assignment) + '</p>' +
        '</section>' +

        '<section class="lesson-section">' +
          '<span class="section-label">KEY TAKEAWAYS</span>' +
          '<ul class="takeaway-list">' +
            content.takeaways.map(function (item) {
              return '<li>' + escapeHtml(item) + '</li>';
            }).join("") +
          '</ul>' +
        '</section>' +

        '<div class="lesson-actions">' +
          '<button class="btn btn-secondary" data-action="section" data-section="lessons">← Back to Lessons</button>' +
          '<button class="btn ' + (done ? "btn-success" : "btn-primary") + '" data-action="complete" data-id="' + lesson.id + '">' +
            (done ? "✓ Completed" : "Mark as Complete") +
          '</button>' +
        '</div>' +
      '</div>';

    render(html);
  }

  function render(content) {
    var app = $("#app");

    if (!app) {
      console.error("Aung Business Academy: #app not found");
      return;
    }

    try {
      app.innerHTML = content;
      window.scrollTo(0, 0);
      closeMobileMenu();
      updateActiveNav();
    } catch (error) {
      console.error(error);

      app.innerHTML =
        '<div class="panel error-panel">' +
          '<h2>Something went wrong</h2>' +
          '<p>Please refresh the page and try again</p>' +
          '<button class="btn btn-primary" data-action="section" data-section="dashboard">Back to Dashboard</button>' +
        '</div>';
    }
  }

  var currentSection = "dashboard";
  var currentCategory = "All";
  var currentSearch = "";

  function navigate(section) {
    currentSection = section;

    if (section === "dashboard") {
      render(dashboard());
    } else if (section === "academy") {
      render(academy());
    } else if (section === "lessons") {
      render(lessonsPage(currentCategory, currentSearch));
    } else if (section === "progress") {
      render(progressPage());
    } else if (section === "sales") {
      render(salesPage());
    } else if (section === "kpi") {
      render(kpiPage());
    } else if (section === "tools") {
      render(toolsPage());
    } else if (section === "reports") {
      render(reportsPage());
    } else if (section === "ai-coach") {
      render(aiCoachPage());
    } else if (section === "ai-tools") {
      render(aiToolsPage());
    } else if (section === "premium") {
      render(premiumPage());
    } else if (section === "settings") {
      render(settingsPage());
    } else {
      render(dashboard());
    }
  }

  function updateActiveNav() {
    var items = document.querySelectorAll(".nav-item");

    items.forEach(function (item) {
      var section = item.getAttribute("data-section");

      if (section === currentSection) {
        item.classList.add("is-active");
      } else {
        item.classList.remove("is-active");
      }
    });
  }

  function openMobileMenu() {
    var sidebar = $(".sidebar");
    var overlay = $(".mobile-overlay");

    if (sidebar) sidebar.classList.add("is-open");
    if (overlay) overlay.classList.add("is-open");
  }

  function closeMobileMenu() {
    var sidebar = $(".sidebar");
    var overlay = $(".mobile-overlay");

    if (sidebar) sidebar.classList.remove("is-open");
    if (overlay) overlay.classList.remove("is-open");
  }

  function showToast(message) {
    var toast = $("#toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(function () {
      toast.classList.remove("show");
    }, 2200);
  }

  function showPremiumModal() {
    var modal = $("#premiumModal");

    if (!modal) {
      alert("This is a Premium Lesson. Please open Premium Membership.");
      return;
    }

    modal.classList.add("is-open");
  }

  function closePremiumModal() {
    var modal = $("#premiumModal");

    if (modal) modal.classList.remove("is-open");
  }

  function completeLesson(id) {
    var list = getCompleted();
    var number = Number(id);

    if (list.indexOf(number) === -1) {
      list.push(number);
      saveCompleted(list);
      showToast("Lesson completed");
    }

    openLesson(number);
  }

  function resetProgress() {
    if (!confirm("Reset all lesson progress?")) return;

    saveCompleted([]);
    showToast("Lesson progress reset");
    navigate("progress");
  }

  function calculateProfit() {
    var sales = Number($("#salesValue").value) || 0;
    var cost = Number($("#costValue").value) || 0;

    var profit = sales - cost;
    var margin = sales > 0 ? (profit / sales) * 100 : 0;

    $("#profitResult").innerHTML =
      "<strong>Profit: " + formatNumber(profit) + "</strong><br>" +
      "Margin: " + margin.toFixed(1) + "%";
  }

  function calculateTarget() {
    var target = Number($("#monthlyTarget").value) || 0;
    var days = Number($("#workingDays").value) || 1;

    var daily = target / days;
    var weekly = daily * 6;

    $("#targetResult").innerHTML =
      "<strong>Daily Target: " + formatNumber(daily.toFixed(0)) + "</strong><br>" +
      "6-Day Weekly Target: " + formatNumber(weekly.toFixed(0));
  }

  function calculateGrowth() {
    var previous = Number($("#previousSales").value) || 0;
    var current = Number($("#currentSales").value) || 0;

    var growth = previous > 0 ? ((current - previous) / previous) * 100 : 0;

    $("#growthResult").innerHTML =
      "<strong>Growth: " + growth.toFixed(1) + "%</strong>";
  }

  function calculateBreakEven() {
    var fixedCost = Number($("#fixedCost").value) || 0;
    var contribution = Number($("#contribution").value) || 0;

    var result = contribution > 0 ? fixedCost / contribution : 0;

    $("#breakEvenResult").innerHTML =
      "<strong>Break-even Units: " + formatNumber(Math.ceil(result)) + "</strong>";
  }

  function saveKPIFromForm() {
    var old = getKPI();

    var data = {
      target: Number(document.querySelector('[data-kpi="target"]').value) || 0,
      actual: Number(document.querySelector('[data-kpi="actual"]').value) || 0,
      team: Number(document.querySelector('[data-kpi="team"]').value) || 0,
      customers: Number(document.querySelector('[data-kpi="customers"]').value) || 0,
      orders: old.orders,
      pipeline: old.pipeline
    };

    saveKPI(data);
    showToast("KPI saved");
    navigate(currentSection);
  }

  function fallbackAI(prompt) {
    var text = String(prompt || "").toLowerCase();

    if (text.indexOf("sales") !== -1 || text.indexOf("target") !== -1) {
      return [
        "Sales Problem Action Plan",
        "",
        "1. Target vs Actual ကို စစ်ပါ",
        "2. Gap ကို Salesperson / Territory / Customer အလိုက် ခွဲပါ",
        "3. Pipeline Coverage နှင့် Conversion ကို စစ်ပါ",
        "4. Stock / Price / Credit / Competition အခက်အခဲများကို စစ်ပါ",
        "5. Top 3 Root Causes သတ်မှတ်ပါ",
        "6. Owner + Deadline ပါသော Action Plan ချမှတ်ပါ",
        "",
        "KPI: Achievement %, Gap, Coverage, Conversion, Productivity"
      ].join("\n");
    }

    if (text.indexOf("team") !== -1 || text.indexOf("staff") !== -1) {
      return [
        "Team Performance Action Plan",
        "",
        "1. လူတိုင်း၏ Target နှင့် Actual ကို Review လုပ်ပါ",
        "2. High Performer / Low Performer ခွဲပါ",
        "3. Low Performance ၏ Root Cause ရှာပါ",
        "4. Individual Coaching ပြုလုပ်ပါ",
        "5. Weekly KPI Review ပြုလုပ်ပါ",
        "",
        "KPI: Achievement %, Calls, Coverage, Conversion, Orders"
      ].join("\n");
    }

    return [
      "Business Manager Action Plan",
      "",
      "1. Problem ကို တိတိကျကျ သတ်မှတ်ပါ",
      "2. Current Data နှင့် KPI ကို စစ်ပါ",
      "3. Root Cause ကို ရှာပါ",
      "4. Priority Action 3 ခု သတ်မှတ်ပါ",
      "5. Owner နှင့် Deadline ထားပါ",
      "6. Result ကို KPI ဖြင့် ပြန်တိုင်းပါ",
      "",
      "အဓိက KPI: Target, Actual, Achievement %, Gap"
    ].join("\n");
  }

  function askAI(prompt) {
    var result = $("#aiResult");

    if (!result) return;

    if (!prompt || !prompt.trim()) {
      result.innerHTML = '<div class="ai-placeholder">Please describe your business problem first</div>';
      return;
    }

    result.innerHTML = '<div class="ai-loading">AI Business Coach is analyzing...</div>';

    var api = "https://aung-business-academy.onrender.com/api/ai";

    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: prompt
      })
    })
    .then(function (response) {
      if (!response.ok) throw new Error("AI API error");
      return response.json();
    })
    .then(function (data) {
      var answer =
        data.answer ||
        data.response ||
        data.message ||
        "";

      if (!answer) throw new Error("Empty AI response");

      result.innerHTML =
        '<div class="ai-answer">' +
          escapeHtml(answer).replace(/\n/g, "<br>") +
        '</div>';
    })
    .catch(function () {
      result.innerHTML =
        '<div class="ai-answer">' +
          escapeHtml(fallbackAI(prompt)).replace(/\n/g, "<br>") +
        '</div>' +
        '<div class="ai-note">AI server unavailable — local business coaching framework used</div>';
    });
  }

  function aiTool(type) {
    var result = $("#aiToolResult");

    if (!result) return;

    var content = "";

    if (type === "daily") {
      content = "Daily Manager Action Plan\n\n1. Yesterday Result Review\n2. Today's Target\n3. Team Activity Review\n4. Customer / Outlet Coverage\n5. Collection Follow-up\n6. Top 3 Priorities\n7. End-of-Day Review";
    }

    if (type === "target") {
      content = "Target Breakdown\n\nMonthly Target → Working Days → Daily Target → Salesperson Target → Customer / Outlet Target\n\nKPI: Achievement %, Gap, Productivity";
    }

    if (type === "root") {
      content = "Root Cause Analysis\n\nProblem → Data → 5 Whys → Root Cause → Action → Owner → Deadline → KPI Review";
    }

    if (type === "meeting") {
      content = "Manager Meeting Agenda\n\n1. Yesterday Result\n2. Target Achievement\n3. Key Gap\n4. Customer / Market Issues\n5. Team Issues\n6. Today's Priority\n7. Owner & Deadline";
    }

    if (type === "coaching") {
      content = "Salesperson Coaching Questions\n\n1. What is your current target?\n2. Where is the biggest gap?\n3. Which customers can generate immediate business?\n4. What obstacle is stopping execution?\n5. What action will you take today?\n6. What support do you need from your manager?";
    }

    result.innerHTML =
      '<div class="ai-answer">' +
        escapeHtml(content).replace(/\n/g, "<br>") +
      '</div>';
  }

  function handleClick(event) {
    var target = event.target.closest("[data-action]");

    if (!target) return;

    var action = target.getAttribute("data-action");

    if (action === "section") {
      navigate(target.getAttribute("data-section"));
      return;
    }

    if (action === "category") {
      currentCategory = target.getAttribute("data-category") || "All";
      currentSearch = "";
      navigate("lessons");
      return;
    }

    if (action === "open-lesson") {
      openLesson(target.getAttribute("data-id"));
      return;
    }

    if (action === "complete") {
      completeLesson(target.getAttribute("data-id"));
      return;
    }

    if (action === "reset-progress") {
      resetProgress();
      return;
    }

    if (action === "save-kpi") {
      saveKPIFromForm();
      return;
    }

    if (action === "profit-calc") {
      calculateProfit();
      return;
    }

    if (action === "target-calc") {
      calculateTarget();
      return;
    }

    if (action === "growth-calc") {
      calculateGrowth();
      return;
    }

    if (action === "break-even-calc") {
      calculateBreakEven();
      return;
    }

    if (action === "ask-ai") {
      askAI($("#aiPrompt") ? $("#aiPrompt").value : "");
      return;
    }

    if (action === "quick-ai") {
      var prompt = target.getAttribute("data-prompt") || "";
      var input = $("#aiPrompt");

      if (input) input.value = prompt;

      askAI(prompt);
      return;
    }

    if (action === "ai-tool") {
      aiTool(target.getAttribute("data-type"));
      return;
    }

    if (action === "save-settings") {
      var name = $("#settingName") ? $("#settingName").value : "Aung Zar Ni Win";
      var role = $("#settingRole") ? $("#settingRole").value : "Business Manager";

      setUser(name, role);
      showToast("Settings saved");
      navigate("settings");
      return;
    }

    if (action === "reset-all") {
      if (!confirm("Reset all Aung Business Academy local data?")) return;

      try {
        localStorage.removeItem(COMPLETED_KEY);
        localStorage.removeItem(OLD_COMPLETED_KEY);
        localStorage.removeItem(KPI_KEY);
        localStorage.removeItem(SETTINGS_KEY);
      } catch (e) {}

      setUser("Aung Zar Ni Win", "Business Manager");
      showToast("Local data reset");
      navigate("dashboard");
      return;
    }

    if (action === "payment") {
      showToast(target.getAttribute("data-plan") + " selected");
      showPremiumModal();
      return;
    }

    if (action === "print-report") {
      window.print();
      return;
    }

    if (action === "mobile-menu") {
      openMobileMenu();
      return;
    }

    if (action === "close-menu") {
      closeMobileMenu();
      return;
    }

    if (action === "close-premium") {
      closePremiumModal();
      return;
    }
  }

  function initialize() {
    try {
      if (!localStorage.getItem(USER_KEY)) {
        setUser("Aung Zar Ni Win", "Business Manager");
      }

      var app = $("#app");

      if (!app) {
        console.error("ABA ERROR: #app element missing");
        return;
      }

      navigate("dashboard");

      document.addEventListener("click", handleClick);

      var searchInput = document.addEventListener("input", function (event) {
        if (event.target && event.target.id === "lessonSearch") {
          currentSearch = event.target.value;
          if (currentSection === "lessons") {
            render(lessonsPage(currentCategory, currentSearch));

            var newInput = $("#lessonSearch");
            if (newInput) {
              newInput.focus();
              try {
                newInput.setSelectionRange(currentSearch.length, currentSearch.length);
              } catch (e) {}
            }
          }
        }
      });

      document.addEventListener("change", function (event) {
        if (event.target && event.target.id === "categoryFilter") {
          currentCategory = event.target.value;
          currentSearch = "";
          navigate("lessons");
        }
      });

      window.addEventListener("error", function (event) {
        console.error("ABA runtime error:", event.error || event.message);
      });

    } catch (error) {
      console.error("ABA initialization error:", error);

      var app = $("#app");

      if (app) {
        app.innerHTML =
          '<div class="panel error-panel">' +
            '<h2>Aung Business Academy</h2>' +
            '<p>Application initialization error</p>' +
            '<button class="btn btn-primary" onclick="location.reload()">Refresh App</button>' +
          '</div>';
      }
    }
  }

  window.AungBusinessAcademy = {
    lessons: lessons,
    categories: categories,
    getLesson: getLesson,
    getLessonContent: getLessonContent,
    openLesson: openLesson,
    navigate: navigate,
    resetProgress: resetProgress,
    getCompleted: getCompleted,
    getProgress: getProgress,
    isPremium: isPremium
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }

})();
