"use strict";

(function () {

  var API_BASE_URL = "https://aung-business-academy.onrender.com";
  var AI_API_URL = API_BASE_URL + "/api/ai";

  var USER_KEY = "aung_business_academy_user";
  var COMPLETED_KEY = "aung_business_academy_completed";
  var OLD_COMPLETED_KEY = "aba_completed_lessons";
  var PREMIUM_KEY = "aung_business_academy_premium";
  var PAYMENT_KEY = "aung_business_academy_payment";
  var KPI_KEY = "aung_business_academy_kpi";
  var SETTINGS_KEY = "aung_business_academy_settings";

  var currentSection = "dashboard";
  var currentLessonId = null;
  var currentChat = [];

  var courseData = [
    {
      name: "Business Fundamentals",
      description: "စီးပွားရေးအခြေခံ၊ Value Creation၊ Revenue၊ Cost နှင့် Business Model",
      topics: [
        "Business Fundamentals","Value Creation","Customer Problem","Business Model","Revenue Model",
        "Cost Structure","Value Proposition","Market Basics","Business Lifecycle","Business Ownership",
        "Business Objectives","Business Environment","Business Risk","Business Ethics","Business Growth"
      ]
    },
    {
      name: "Business Strategy",
      description: "Strategy၊ SWOT၊ Competitive Advantage နှင့် Strategic Execution",
      topics: [
        "Strategic Thinking","Vision Mission Goals","SWOT Analysis","Competitive Advantage",
        "Market Positioning","Business Objectives","Strategy Formulation","Strategic Priorities",
        "Resource Allocation","Strategic Execution","Scenario Planning","Risk Strategy",
        "Growth Strategy","Diversification","Strategy Review"
      ]
    },
    {
      name: "Sales Management",
      description: "Target၊ Territory၊ Pipeline၊ Forecast နှင့် Sales Team Management",
      topics: [
        "Sales Management Fundamentals","Sales Target Setting","Target Breakdown","Territory Planning",
        "Route Planning","Sales Team Structure","Sales Pipeline","Sales Activity Management",
        "Sales Productivity","Sales Performance Review","Sales Forecasting","Sales Coaching",
        "Sales Meeting","Sales Motivation","Sales Incentive","Sales Reporting","Sales Control",
        "Sales Strategy Execution","Sales Manager Dashboard","Sales Manager Daily Routine"
      ]
    },
    {
      name: "Sales Skills",
      description: "Prospecting၊ Needs Discovery၊ Objection Handling နှင့် Closing",
      topics: [
        "Selling Fundamentals","Prospecting","Customer Approach","Needs Discovery","Questioning Skills",
        "Listening Skills","Product Presentation","Value Selling","Feature Benefit","Objection Handling",
        "Negotiation Basics","Closing Techniques","Follow-up","Cross Selling","Up Selling",
        "Relationship Selling","Key Account Selling","Consultative Selling","Sales Communication","Sales Discipline"
      ]
    },
    {
      name: "Customer Management",
      description: "Customer Segmentation၊ Retention၊ Service နှင့် Profitability",
      topics: [
        "Customer Segmentation","Customer Profiling","Customer Needs","Customer Value","Customer Journey",
        "Customer Experience","Complaint Handling","Customer Retention","Repeat Purchase","Loyalty",
        "Customer Service Standards","Customer Feedback","Customer Relationship","Customer Profitability","Customer Recovery"
      ]
    },
    {
      name: "Marketing",
      description: "Market Research၊ Segmentation၊ Campaign နှင့် Marketing KPI",
      topics: [
        "Marketing Fundamentals","Market Research","Segmentation","Targeting","Positioning",
        "Marketing Mix","Product Strategy","Pricing Strategy","Promotion Strategy","Place Strategy",
        "Campaign Planning","Marketing Funnel","Lead Generation","Content Strategy","Digital Marketing",
        "Social Media Marketing","Trade Marketing","Shopper Marketing","Marketing KPI","Marketing ROI"
      ]
    },
    {
      name: "Branding",
      description: "Brand Identity၊ Positioning၊ Trust နှင့် Brand Growth",
      topics: [
        "Brand Fundamentals","Brand Identity","Brand Positioning","Brand Promise","Brand Value",
        "Brand Awareness","Brand Trust","Brand Communication","Brand Consistency","Brand Growth"
      ]
    },
    {
      name: "Finance",
      description: "Revenue၊ Cost၊ Cash Flow၊ Profit၊ Margin နှင့် Financial Decisions",
      topics: [
        "Business Finance Basics","Revenue Management","Cost Management","Cash Flow","Working Capital",
        "Budgeting","Financial Planning","Profit Management","Margin Management","Break-even Analysis",
        "Investment Decisions","Financial Controls","Cost Reduction","Cash Management","Financial Decision Making"
      ]
    },
    {
      name: "Accounting & P&L",
      description: "Income Statement၊ P&L၊ Gross Profit၊ OPEX နှင့် Cash Flow",
      topics: [
        "Accounting Basics","Income Statement","P&L Structure","Gross Profit","Gross Margin",
        "Operating Expenses","EBITDA Basics","Balance Sheet Basics","Cash Flow Statement","P&L Analysis"
      ]
    },
    {
      name: "Distribution & Operations",
      description: "Distribution၊ Channel၊ Stock၊ Warehouse နှင့် Route to Market",
      topics: [
        "Distribution Fundamentals","Channel Strategy","Distributor Selection","Distributor Management",
        "Stock Management","Inventory Control","Warehouse Basics","Delivery Planning","Order Management",
        "Supply Chain Basics","Service Level","Route to Market","Distribution KPI","Distribution Cost","Operational Excellence"
      ]
    },
    {
      name: "Retail & Modern Trade",
      description: "Retail Execution၊ Distribution၊ Shelf၊ Promotion နှင့် Modern Trade",
      topics: [
        "Retail Fundamentals","Outlet Classification","Numeric Distribution","Weighted Distribution",
        "Planogram Basics","Shelf Availability","Promotion Execution","Modern Trade Negotiation",
        "Retail KPI","Store Execution"
      ]
    },
    {
      name: "Key Account Management",
      description: "KAM၊ Account Planning၊ JBP၊ Negotiation နှင့် Account Growth",
      topics: [
        "KAM Fundamentals","Account Selection","Account Planning","Customer Business Plan",
        "Joint Business Planning","Key Account Negotiation","Account Review","Customer Profitability",
        "KAM KPI","Strategic Account Growth"
      ]
    },
    {
      name: "Leadership & Management",
      description: "Leadership၊ Delegation၊ Coaching၊ Performance နှင့် Team Management",
      topics: [
        "Leadership Fundamentals","Manager vs Leader","Leadership Styles","Goal Setting","Delegation",
        "Coaching","Feedback","Performance Management","Decision Making","Meeting Management",
        "Team Management","Motivation","Conflict Management","Change Management","Leadership Discipline"
      ]
    },
    {
      name: "People & HR",
      description: "Recruitment၊ Onboarding၊ Training၊ Performance နှင့် Retention",
      topics: [
        "HR Fundamentals","Recruitment","Job Description","Onboarding","Training Needs",
        "Employee Development","Performance Appraisal","Attendance Discipline","Compensation Basics","Retention"
      ]
    },
    {
      name: "Negotiation",
      description: "Preparation၊ BATNA၊ Concession၊ Price Negotiation နှင့် Win-Win",
      topics: [
        "Negotiation Fundamentals","Preparation","BATNA Basics","Negotiation Objectives","Questioning",
        "Concessions","Price Negotiation","Win-Win Negotiation","Difficult Negotiations","Negotiation Review"
      ]
    },
    {
      name: "Business Development",
      description: "Opportunity၊ New Market၊ Partnership၊ Channel Expansion နှင့် Growth",
      topics: [
        "Business Development Fundamentals","Opportunity Identification","New Market Entry",
        "New Product Opportunity","Partnership Strategy","Channel Expansion","Customer Acquisition",
        "Business Growth Pipeline","Business Proposal","Business Development KPI"
      ]
    },
    {
      name: "KPI & Data Analysis",
      description: "KPI Design၊ Target vs Actual၊ Gap၊ Trend နှင့် Dashboard",
      topics: [
        "KPI Fundamentals","KPI Design","Target vs Actual","Achievement %","Gap Analysis",
        "Trend Analysis","Sales Dashboard","Productivity Analysis","Data-Based Decision Making","KPI Review"
      ]
    },
    {
      name: "Problem Solving & Decision Making",
      description: "Root Cause၊ 5 Whys၊ Fishbone၊ Pareto နှင့် Action Planning",
      topics: [
        "Problem Definition","Root Cause Analysis","5 Whys","Fishbone","Pareto",
        "Prioritization","Decision Framework","Action Planning","Risk Assessment","Review & Learning"
      ]
    },
    {
      name: "Digital Business & AI",
      description: "Digital Transformation၊ AI for Sales၊ Marketing နှင့် Automation",
      topics: [
        "Digital Business Fundamentals","Digital Transformation","AI Fundamentals","AI for Sales",
        "AI for Marketing","AI for Customer Service","AI for Productivity","Data & Automation",
        "AI Business Tools","Responsible AI Use"
      ]
    },
    {
      name: "Productivity & Career",
      description: "Time၊ Priority၊ Planning၊ Communication နှင့် Career Development",
      topics: [
        "Time Management","Priority Management","Daily Planning","Weekly Planning",
        "Meeting Productivity","Focus Management","Professional Communication","Career Planning",
        "Interview Preparation","Personal Development"
      ]
    }
  ];

  var lessons = [];
  var lessonCounter = 1;

  courseData.forEach(function (course) {
    course.topics.forEach(function (topic) {
      lessons.push({
        id: lessonCounter,
        number: lessonCounter,
        title: topic,
        category: course.name,
        description: course.description,
        premium: lessonCounter > 1
      });
      lessonCounter++;
    });
  });

  function safeGet(key, fallback) {
    try {
      var value = localStorage.getItem(key);
      if (value === null) return fallback;
      return JSON.parse(value);
    } catch (error) {
      return fallback;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      return false;
    }
  }

  function getUser() {
    return safeGet(USER_KEY, {
      name: "Aung Zar Ni Win",
      role: "Business Manager"
    });
  }

  function getCompleted() {
    var primary = safeGet(COMPLETED_KEY, null);
    var old = safeGet(OLD_COMPLETED_KEY, []);

    if (Array.isArray(primary) && primary.length) {
      return primary;
    }

    if (Array.isArray(old) && old.length) {
      return old;
    }

    return [];
  }

  function setCompleted(list) {
    var clean = [];
    var i;

    for (i = 0; i < list.length; i++) {
      if (clean.indexOf(Number(list[i])) === -1) {
        clean.push(Number(list[i]));
      }
    }

    safeSet(COMPLETED_KEY, clean);
    safeSet(OLD_COMPLETED_KEY, clean);
  }

  function isCompleted(id) {
    return getCompleted().indexOf(Number(id)) !== -1;
  }

  function getProgress() {
    var total = lessons.length;
    var completed = getCompleted().length;

    if (!total) return 0;

    return Math.round((completed / total) * 100);
  }

  function isPremiumActive() {
    var premium = safeGet(PREMIUM_KEY, false);

    if (premium === true) {
      return true;
    }

    if (premium && premium.active === true) {
      return true;
    }

    return false;
  }

  function getKPI() {
    return safeGet(KPI_KEY, {
      target: 500,
      actual: 385,
      team: 4,
      customers: 120,
      orders: 85
    });
  }

  function escapeHTML(value) {
    var text = String(value === undefined || value === null ? "" : value);

    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function money(value) {
    var number = Number(value) || 0;
    return number.toLocaleString("en-US");
  }

  function achievement(target, actual) {
    target = Number(target) || 0;
    actual = Number(actual) || 0;

    if (target <= 0) return 0;

    return Math.round((actual / target) * 100);
  }

  function gap(target, actual) {
    return (Number(target) || 0) - (Number(actual) || 0);
  }

  function showToast(message) {
    var toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.__abaToastTimer);

    window.__abaToastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 2500);
  }

  function updateProfileUI() {
    var user = getUser();

    var ids = [
      ["sidebarName", user.name],
      ["sidebarRole", user.role],
      ["topName", user.name],
      ["topRole", user.role]
    ];

    ids.forEach(function (item) {
      var element = document.getElementById(item[0]);
      if (element) element.textContent = item[1];
    });
  }

  function setPageMeta(title, subtitle) {
    var titleElement = document.getElementById("pageTitle");
    var subtitleElement = document.getElementById("pageSubtitle");

    if (titleElement) titleElement.textContent = title;
    if (subtitleElement) subtitleElement.textContent = subtitle;
  }

  function setActiveNav(section) {
    var items = document.querySelectorAll("[data-section]");

    for (var i = 0; i < items.length; i++) {
      if (items[i].getAttribute("data-section") === section) {
        items[i].classList.add("is-active");
      } else {
        items[i].classList.remove("is-active");
      }
    }
  }

  function closeMobileMenu() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("mobileOverlay");

    if (sidebar) sidebar.classList.remove("mobile-open");
    if (overlay) overlay.classList.remove("is-open");
  }

  function openMobileMenu() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("mobileOverlay");

    if (sidebar) sidebar.classList.add("mobile-open");
    if (overlay) overlay.classList.add("is-open");
  }

  function safeRender(fn) {
    try {
      fn();
    } catch (error) {
      console.error(error);

      var app = document.getElementById("app");

      if (app) {
        app.innerHTML =
          '<div class="error-card">' +
          '<h3>Application Error</h3>' +
          '<p>Page ကို render လုပ်ရာမှာ error ဖြစ်သွားပါတယ်</p>' +
          '<button class="btn btn-primary" data-action="reload-app">Reload App</button>' +
          '</div>';
      }
    }
  }

  function renderDashboard() {
    setPageMeta("Dashboard", "Business Management Command Center");

    var user = getUser();
    var kpi = getKPI();
    var progress = getProgress();
    var completed = getCompleted().length;
    var ach = achievement(kpi.target, kpi.actual);

    document.getElementById("app").innerHTML =
      '<div class="welcome-card">' +
        '<h2>Welcome back, ' + escapeHTML(user.name) + '</h2>' +
        '<p>Business Management နှင့် Sales Management skills ကို professional ပုံစံနဲ့ ဆက်လက်တိုးတက်အောင်လုပ်ပါ</p>' +
        '<div class="welcome-actions">' +
          '<button class="btn btn-primary" data-section="lessons">Continue Learning</button>' +
          '<button class="btn btn-secondary" data-section="sales">Open Sales Manager</button>' +
        '</div>' +
      '</div>' +

      '<div class="stats-grid">' +
        statCard("TOTAL LESSONS", lessons.length, "Professional business lessons") +
        statCard("COMPLETED", completed, "Lessons completed") +
        statCard("OVERALL PROGRESS", progress + "%", "Learning progress") +
        statCard("SALES ACHIEVEMENT", ach + "%", "Target vs actual") +
      '</div>' +

      '<div class="dashboard-grid">' +
        '<div>' +
          '<div class="card">' +
            '<div class="card-title">' +
              '<div><h3>Learning Progress</h3><p>Business Academy learning status</p></div>' +
              '<button class="btn btn-secondary" data-section="progress">View</button>' +
            '</div>' +
            '<div class="progress-row">' +
              '<div class="progress-row-head"><span>Overall Course Progress</span><strong>' + progress + '%</strong></div>' +
              '<div class="progress-wrap"><div class="progress-bar" style="width:' + progress + '%"></div></div>' +
            '</div>' +
            '<div class="action-grid">' +
              actionButton("Business Academy", "Explore all categories", "academy") +
              actionButton("Lessons", "Continue your learning", "lessons") +
              actionButton("KPI & Analytics", "Review business numbers", "kpi") +
              actionButton("AI Business Coach", "Solve a business problem", "ai-coach") +
            '</div>' +
          '</div>' +

          '<div class="card">' +
            '<div class="card-title">' +
              '<div><h3>Continue Learning</h3><p>Latest lessons</p></div>' +
              '<button class="btn btn-secondary" data-section="lessons">All Lessons</button>' +
            '</div>' +
            '<div class="lesson-list">' +
              lessons.slice(0, 5).map(lessonItem).join("") +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div>' +
          '<div class="card">' +
            '<div class="card-title"><div><h3>Sales Snapshot</h3><p>Current manager KPI</p></div></div>' +
            '<div class="metric-big">' + money(kpi.actual) + ' L</div>' +
            '<p style="color:#64748b;font-size:11px">Actual Sales</p>' +
            '<div class="progress-row">' +
              '<div class="progress-row-head"><span>Achievement</span><strong>' + ach + '%</strong></div>' +
              '<div class="progress-wrap"><div class="progress-bar" style="width:' + Math.min(100, ach) + '%"></div></div>' +
            '</div>' +
            '<div class="table-wrap">' +
              '<table class="data-table">' +
                '<tr><td>Target</td><td><strong>' + money(kpi.target) + ' L</strong></td></tr>' +
                '<tr><td>Gap</td><td><strong>' + money(gap(kpi.target, kpi.actual)) + ' L</strong></td></tr>' +
                '<tr><td>Team</td><td><strong>' + money(kpi.team) + '</strong></td></tr>' +
                '<tr><td>Customers</td><td><strong>' + money(kpi.customers) + '</strong></td></tr>' +
                '<tr><td>Orders</td><td><strong>' + money(kpi.orders) + '</strong></td></tr>' +
              '</table>' +
            '</div>' +
          '</div>' +

          '<div class="card">' +
            '<div class="card-title"><div><h3>Manager Command</h3><p>Quick access</p></div></div>' +
            '<div class="action-grid">' +
              actionButton("Sales Manager", "Target and execution", "sales") +
              actionButton("Business Reports", "Management report", "reports") +
              actionButton("Business Tools", "Calculate business numbers", "tools") +
              actionButton("Premium", "Unlock full system", "premium") +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function statCard(label, value, note) {
    return '<div class="stat-card">' +
      '<div class="stat-label">' + escapeHTML(label) + '</div>' +
      '<div class="stat-value">' + escapeHTML(value) + '</div>' +
      '<div class="stat-note">' + escapeHTML(note) + '</div>' +
    '</div>';
  }

  function actionButton(title, description, section) {
    return '<button class="action-btn" data-section="' + section + '">' +
      '<strong>' + escapeHTML(title) + '</strong>' +
      '<span>' + escapeHTML(description) + '</span>' +
    '</button>';
  }

  function lessonItem(lesson) {
    var done = isCompleted(lesson.id);

    return '<div class="lesson-list-item">' +
      '<div class="lesson-left">' +
        '<div class="lesson-number">' + lesson.number + '</div>' +
        '<div class="lesson-info">' +
          '<strong>' + escapeHTML(lesson.title) + '</strong>' +
          '<span>' + escapeHTML(lesson.category) + '</span>' +
        '</div>' +
      '</div>' +
      '<div>' +
        '<span class="badge ' + (done ? "badge-done" : (lesson.premium ? "badge-premium" : "badge-free")) + '">' +
          (done ? "COMPLETED" : (lesson.premium ? "PREMIUM" : "FREE")) +
        '</span> ' +
        '<button class="btn btn-secondary" data-action="open-lesson" data-id="' + lesson.id + '">Open</button>' +
      '</div>' +
    '</div>';
  }

  function renderAcademy() {
    setPageMeta("Business Academy", "Professional Business Management Learning System");

    document.getElementById("app").innerHTML =
      '<div class="page-heading">' +
        '<h2>Business Academy</h2>' +
        '<p>' + lessons.length + ' professional lessons across ' + courseData.length + ' business categories</p>' +
      '</div>' +

      '<div class="academy-stat-grid">' +
        statCard("CATEGORIES", courseData.length, "Business disciplines") +
        statCard("TOTAL LESSONS", lessons.length, "Complete academy") +
        statCard("FREE LESSON", "1", "Lesson 1 only") +
        statCard("PREMIUM", lessons.length - 1, "Lesson 2 onwards") +
      '</div>' +

      '<div class="category-grid">' +
        courseData.map(function (course) {
          return '<div class="category-card">' +
            '<h3>' + escapeHTML(course.name) + '</h3>' +
            '<p>' + escapeHTML(course.description) + '</p>' +
            '<div class="category-count">' + course.topics.length + '</div>' +
            '<p>Lessons</p>' +
            '<button class="btn btn-primary btn-block" data-action="category-lessons" data-category="' + escapeHTML(course.name) + '">View Lessons</button>' +
          '</div>';
        }).join("") +
      '</div>';
  }

  function renderLessons(filterCategory, searchTerm) {
    setPageMeta("Lessons", "Business Academy Lessons");

    var category = filterCategory || "All Categories";
    var search = (searchTerm || "").toLowerCase();

    var filtered = lessons.filter(function (lesson) {
      var categoryMatch = category === "All Categories" || lesson.category === category;
      var searchMatch =
        lesson.title.toLowerCase().indexOf(search) !== -1 ||
        lesson.category.toLowerCase().indexOf(search) !== -1;

      return categoryMatch && searchMatch;
    });

    document.getElementById("app").innerHTML =
      '<div class="page-heading">' +
        '<h2>Lessons</h2>' +
        '<p>Lesson 1 is free, Lesson 2 onwards requires Premium Membership</p>' +
      '</div>' +

      '<div class="card">' +
        '<div class="filter-bar">' +
          '<input id="lessonSearch" class="input" type="search" placeholder="Search lesson..." value="' + escapeHTML(searchTerm || "") + '">' +
          '<select id="lessonCategory" class="select">' +
            '<option>All Categories</option>' +
            courseData.map(function (course) {
              return '<option ' + (course.name === category ? "selected" : "") + '>' + escapeHTML(course.name) + '</option>';
            }).join("") +
          '</select>' +
        '</div>' +

        '<div style="margin-bottom:12px;color:#64748b;font-size:11px">' +
          'Showing ' + filtered.length + ' lessons' +
        '</div>' +

        '<div class="lesson-list">' +
          (filtered.length ? filtered.map(lessonItem).join("") : '<div class="empty-state">Lesson မတွေ့ပါ</div>') +
        '</div>' +
      '</div>';
  }

  function renderProgress() {
    setPageMeta("My Progress", "Learning Progress & Performance");

    var completed = getCompleted();
    var progress = getProgress();

    var rows = courseData.map(function (course) {
      var categoryLessons = lessons.filter(function (lesson) {
        return lesson.category === course.name;
      });

      var done = categoryLessons.filter(function (lesson) {
        return completed.indexOf(lesson.id) !== -1;
      }).length;

      var percent = categoryLessons.length ? Math.round((done / categoryLessons.length) * 100) : 0;

      return '<div class="progress-row">' +
        '<div class="progress-row-head">' +
          '<span>' + escapeHTML(course.name) + '</span>' +
          '<strong>' + done + '/' + categoryLessons.length + ' (' + percent + '%)</strong>' +
        '</div>' +
        '<div class="progress-wrap"><div class="progress-bar" style="width:' + percent + '%"></div></div>' +
      '</div>';
    }).join("");

    document.getElementById("app").innerHTML =
      '<div class="page-heading">' +
        '<h2>My Progress</h2>' +
        '<p>Your academy learning performance</p>' +
      '</div>' +

      '<div class="stats-grid">' +
        statCard("TOTAL", lessons.length, "All lessons") +
        statCard("COMPLETED", completed.length, "Finished") +
        statCard("REMAINING", Math.max(0, lessons.length - completed.length), "Remaining") +
        statCard("PROGRESS", progress + "%", "Overall") +
      '</div>' +

      '<div class="card">' +
        '<div class="card-title">' +
          '<div><h3>Category Progress</h3><p>Track progress by business discipline</p></div>' +
          '<button class="btn btn-danger" data-action="reset-progress">Reset</button>' +
        '</div>' +
        rows +
      '</div>';
  }

  function renderSales() {
    setPageMeta("Sales Manager", "Sales Target, Team Execution & Daily Management");

    var kpi = getKPI();
    var ach = achievement(kpi.target, kpi.actual);
    var salesGap = gap(kpi.target, kpi.actual);
    var dailyTarget = Number(kpi.target) / 26;
    var pipeline = Number(kpi.target) * 3;

    document.getElementById("app").innerHTML =
      '<div class="page-heading">' +
        '<h2>Sales Manager</h2>' +
        '<p>Daily execution command center</p>' +
      '</div>' +

      '<div class="stats-grid">' +
        statCard("TARGET", money(kpi.target) + " L", "Monthly target") +
        statCard("ACTUAL", money(kpi.actual) + " L", "Current sales") +
        statCard("ACHIEVEMENT", ach + "%", "Target achievement") +
        statCard("GAP", money(salesGap) + " L", "Remaining gap") +
      '</div>' +

      '<div class="dashboard-grid">' +
        '<div class="card">' +
          '<div class="card-title"><div><h3>Sales Execution</h3><p>Manager operating view</p></div></div>' +
          '<div class="table-wrap">' +
            '<table class="data-table">' +
              '<tr><th>Metric</th><th>Value</th><th>Manager Action</th></tr>' +
              '<tr><td>Daily Target</td><td>' + dailyTarget.toFixed(1) + ' L</td><td>Set daily team plan</td></tr>' +
              '<tr><td>Pipeline Coverage</td><td>' + pipeline.toFixed(0) + ' L</td><td>Build qualified pipeline</td></tr>' +
              '<tr><td>Team Size</td><td>' + kpi.team + '</td><td>Review salesperson KPI</td></tr>' +
              '<tr><td>Customers</td><td>' + kpi.customers + '</td><td>Focus active customers</td></tr>' +
              '<tr><td>Orders</td><td>' + kpi.orders + '</td><td>Improve conversion</td></tr>' +
            '</table>' +
          '</div>' +
        '</div>' +

        '<div class="card">' +
          '<div class="card-title"><div><h3>Daily Manager Routine</h3><p>Execution checklist</p></div></div>' +
          '<div class="checklist">' +
            '<div class="check-item">☐ Review yesterday actual vs target</div>' +
            '<div class="check-item">☐ Identify sales gap and root cause</div>' +
            '<div class="check-item">☐ Check salesperson performance</div>' +
            '<div class="check-item">☐ Review customer and pipeline movement</div>' +
            '<div class="check-item">☐ Set today's priorities</div>' +
            '<div class="check-item">☐ End-day result review</div>' +
          '</div>' +
        '</div>' +
      '</div>' +

      '<div class="card">' +
        '<div class="card-title"><div><h3>Update Sales KPI</h3><p>Saved locally on this device</p></div></div>' +
        kpiForm(kpi) +
      '</div>';
  }

  function kpiForm(kpi) {
    return '<form id="kpiForm" class="form-grid">' +
      formInput("Target", "kpiTarget", kpi.target) +
      formInput("Actual", "kpiActual", kpi.actual) +
      formInput("Team", "kpiTeam", kpi.team) +
      formInput("Customers", "kpiCustomers", kpi.customers) +
      formInput("Orders", "kpiOrders", kpi.orders) +
      '<div class="full"><button class="btn btn-primary" type="submit">Save KPI</button></div>' +
    '</form>';
  }

  function formInput(label, id, value) {
    return '<div class="form-group">' +
      '<label for="' + id + '">' + label + '</label>' +
      '<input id="' + id + '" class="input" type="number" min="0" step="0.1" value="' + escapeHTML(value) + '">' +
    '</div>';
  }

  function renderKPI() {
    setPageMeta("KPI & Analytics", "Target, Actual, Achievement & Gap Analysis");

    var kpi = getKPI();
    var ach = achievement(kpi.target, kpi.actual);
    var salesGap = gap(kpi.target, kpi.actual);

    document.getElementById("app").innerHTML =
      '<div class="page-heading">' +
        '<h2>KPI & Analytics</h2>' +
        '<p>Business performance dashboard</p>' +
      '</div>' +

      '<div class="stats-grid">' +
        statCard("TARGET", money(kpi.target) + " L", "Target") +
        statCard("ACTUAL", money(kpi.actual) + " L", "Actual") +
        statCard("ACHIEVEMENT", ach + "%", "Achievement") +
        statCard("GAP", money(salesGap) + " L", "Gap") +
      '</div>' +

      '<div class="dashboard-grid">' +
        '<div class="card">' +
          '<div class="card-title"><div><h3>Achievement Analysis</h3><p>Target vs actual</p></div></div>' +
          '<div class="metric-big">' + ach + '%</div>' +
          '<div class="progress-wrap" style="margin-top:15px">' +
            '<div class="progress-bar" style="width:' + Math.min(100, ach) + '%"></div>' +
          '</div>' +
          '<p style="font-size:11px;color:#64748b;margin-top:10px">Target: ' + money(kpi.target) + ' L | Actual: ' + money(kpi.actual) + ' L</p>' +
        '</div>' +

        '<div class="card">' +
          '<div class="card-title"><div><h3>Operational KPI</h3><p>Team and customer indicators</p></div></div>' +
          '<div class="table-wrap">' +
            '<table class="data-table">' +
              '<tr><td>Team</td><td><strong>' + kpi.team + '</strong></td></tr>' +
              '<tr><td>Customers</td><td><strong>' + kpi.customers + '</strong></td></tr>' +
              '<tr><td>Orders</td><td><strong>' + kpi.orders + '</strong></td></tr>' +
              '<tr><td>Average Order</td><td><strong>' + (kpi.orders ? (kpi.actual / kpi.orders).toFixed(2) : "0") + ' L</strong></td></tr>' +
            '</table>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function renderReports() {
    setPageMeta("Business Reports", "Management Reporting Center");

    var kpi = getKPI();
    var ach = achievement(kpi.target, kpi.actual);

    document.getElementById("app").innerHTML =
      '<div class="page-heading">' +
        '<h2>Business Reports</h2>' +
        '<p>Management summary and reporting</p>' +
      '</div>' +

      '<div class="card">' +
        '<div class="card-title">' +
          '<div><h3>Management Summary</h3><p>Current business performance snapshot</p></div>' +
          '<button class="btn btn-primary" data-action="print-report">Print Report</button>' +
        '</div>' +

        '<div class="table-wrap">' +
          '<table class="data-table">' +
            '<tr><th>Area</th><th>Current</th><th>Management Focus</th></tr>' +
            '<tr><td>Sales</td><td>' + money(kpi.actual) + ' L</td><td>Close gap to target</td></tr>' +
            '<tr><td>Achievement</td><td>' + ach + '%</td><td>Improve execution</td></tr>' +
            '<tr><td>Team</td><td>' + kpi.team + '</td><td>Coach low performers</td></tr>' +
            '<tr><td>Customers</td><td>' + kpi.customers + '</td><td>Increase active customer base</td></tr>' +
            '<tr><td>Orders</td><td>' + kpi.orders + '</td><td>Improve conversion and average order</td></tr>' +
          '</table>' +
        '</div>' +
      '</div>' +

      '<div class="card">' +
        '<div class="card-title"><div><h3>Management Questions</h3><p>Use these in weekly reviews</p></div></div>' +
        '<div class="checklist">' +
          '<div class="check-item">1. Target gap ဘာကြောင့် ဖြစ်နေလဲ</div>' +
          '<div class="check-item">2. ဘယ် Territory / Customer / Salesperson က အဓိက သက်ရောက်နေလဲ</div>' +
          '<div class="check-item">3. ဒီအပတ်မှာ ဘာကို အရင်ဆုံး ပြင်မလဲ</div>' +
          '<div class="check-item">4. Action တစ်ခုချင်းစီရဲ့ KPI ဘာလဲ</div>' +
          '<div class="check-item">5. Next review မှာ ဘယ်လို result ကို မျှော်လင့်လဲ</div>' +
        '</div>' +
      '</div>';
  }

  function renderTools() {
    setPageMeta("Business Tools", "Pricing, Profit, Margin, Break-even & Sales Calculators");

    document.getElementById("app").innerHTML =
      '<div class="page-heading">' +
        '<h2>Business Tools</h2>' +
        '<p>Practical calculators for business managers</p>' +
      '</div>' +

      '<div class="tool-grid">' +
        toolCard("Pricing / Profit / Margin", "Calculate selling price, profit and margin", "pricing") +
        toolCard("Break-even", "Calculate break-even sales level", "break-even") +
        toolCard("Sales Target", "Break monthly target into daily target", "sales-target") +
        toolCard("Growth", "Calculate business growth percentage", "growth") +
      '</div>' +

      '<div id="toolResult" class="card" style="display:none"></div>';
  }

  function toolCard(title, description, type) {
    return '<div class="tool-card">' +
      '<h3>' + escapeHTML(title) + '</h3>' +
      '<p>' + escapeHTML(description) + '</p>' +
      '<button class="btn btn-primary" data-action="open-tool" data-tool="' + type + '">Open Tool</button>' +
    '</div>';
  }

  function openTool(type) {
    var modalRoot = document.getElementById("modalRoot");

    var content = "";

    if (type === "pricing") {
      content =
        '<div class="form-grid">' +
          formInput("Cost", "toolCost", 100) +
          formInput("Selling Price", "toolPrice", 150) +
        '</div>' +
        '<button class="btn btn-primary btn-block" data-action="calculate-pricing" style="margin-top:15px">Calculate</button>';
    }

    if (type === "break-even") {
      content =
        '<div class="form-grid">' +
          formInput("Fixed Cost", "beFixed", 1000000) +
          formInput("Selling Price / Unit", "bePrice", 10000) +
          formInput("Variable Cost / Unit", "beVariable", 6000) +
        '</div>' +
        '<button class="btn btn-primary btn-block" data-action="calculate-break-even" style="margin-top:15px">Calculate</button>';
    }

    if (type === "sales-target") {
      content =
        '<div class="form-grid">' +
          formInput("Monthly Target", "stTarget", 500) +
          formInput("Working Days", "stDays", 26) +
        '</div>' +
        '<button class="btn btn-primary btn-block" data-action="calculate-sales-target" style="margin-top:15px">Calculate</button>';
    }

    if (type === "growth") {
      content =
        '<div class="form-grid">' +
          formInput("Previous Sales", "growthPrevious", 300) +
          formInput("Current Sales", "growthCurrent", 385) +
        '</div>' +
        '<button class="btn btn-primary btn-block" data-action="calculate-growth" style="margin-top:15px">Calculate</button>';
    }

    modalRoot.innerHTML =
      '<div class="modal-backdrop is-open" id="toolModal">' +
        '<div class="modal">' +
          '<div class="modal-head">' +
            '<h3>Business Calculator</h3>' +
            '<button class="modal-close" data-action="close-modal">×</button>' +
          '</div>' +
          '<div class="modal-body">' +
            content +
            '<div id="calculatorResult" style="margin-top:15px"></div>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function renderAITools() {
    setPageMeta("AI Business Tools", "Practical AI-Powered Management Tools");

    var tools = [
      ["Daily Sales Action Plan", "နေ့စဉ် sales target အတွက် action plan", "daily-plan"],
      ["Target Gap Analysis", "Target မပြည့်တဲ့အကြောင်းရင်းရှာရန်", "gap-analysis"],
      ["Root Cause Analysis", "Problem ရဲ့ root cause ခွဲခြမ်းရန်", "root-cause"],
      ["Sales Meeting Agenda", "Professional sales meeting agenda", "meeting"],
      ["Team Coaching Questions", "Salesperson coaching questions", "coaching"]
    ];

    document.getElementById("app").innerHTML =
      '<div class="page-heading">' +
        '<h2>AI Business Tools</h2>' +
        '<p>AI ကို manager workflow ထဲမှာ practical အဖြစ် အသုံးချရန်</p>' +
      '</div>' +

      '<div class="tool-grid">' +
        tools.map(function (item) {
          return '<div class="tool-card">' +
            '<h3>' + escapeHTML(item[0]) + '</h3>' +
            '<p>' + escapeHTML(item[1]) + '</p>' +
            '<button class="btn btn-purple" data-action="ai-tool" data-tool="' + item[2] + '">Generate</button>' +
          '</div>';
        }).join("") +
      '</div>' +

      '<div id="aiToolResult" class="card" style="display:none"></div>';
  }

  function renderAICoach() {
    setPageMeta("AI Business Coach", "Business Strategy, Sales & Management Coach");

    document.getElementById("app").innerHTML =
      '<div class="page-heading">' +
        '<h2>AI Business Coach</h2>' +
        '<p>Business problem ကိုရေးပြီး practical action plan ရယူပါ</p>' +
      '</div>' +

      '<div class="card">' +
        '<div id="aiChat" class="ai-chat">' +
          '<div class="ai-message ai-bot">' +
            '<strong>AI Business Coach</strong><br>' +
            'Business problem၊ sales problem၊ marketing idea၊ staff management သို့မဟုတ် business plan အကြောင်း မေးနိုင်ပါတယ်' +
          '</div>' +
        '</div>' +

        '<form id="aiForm" class="chat-form">' +
          '<input id="aiInput" class="input" type="text" placeholder="ဥပမာ - Sales target မပြည့်တာကို ဘယ်လိုပြင်မလဲ" autocomplete="off">' +
          '<button class="btn btn-primary" type="submit">Ask AI</button>' +
        '</form>' +
      '</div>';
  }

  function renderPremium() {
    setPageMeta("Premium Membership", "Unlock the Full Business Management System");

    var active = isPremiumActive();

    document.getElementById("app").innerHTML =
      '<div class="page-heading">' +
        '<h2>Premium Membership</h2>' +
        '<p>Lesson 1 free • Lesson 2 onwards Premium</p>' +
      '</div>' +

      '<div class="notice notice-info">' +
        '<strong>Premium Access</strong><br>' +
        'Premium Membership မှာ full lessons, business tools, AI Business Coach နှင့် management features များ ပါဝင်ပါမယ်' +
      '</div>' +

      (active ?
        '<div class="notice notice-success">Premium Membership Status: ACTIVE</div>' :
        '<div class="notice notice-warning">Premium Membership Status: BASIC / Pending Activation</div>') +

      '<div class="plan-grid">' +
        premiumPlan("1 Month", "25,000 Ks", "25,000", false) +
        premiumPlan("3 Months", "60,000 Ks", "60,000", true) +
        premiumPlan("6 Months", "100,000 Ks", "100,000", false) +
      '</div>' +

      '<div class="card">' +
        '<div class="card-title"><div><h3>Payment Methods</h3><p>Manual payment confirmation</p></div></div>' +
        '<div class="checklist">' +
          '<div class="check-item"><strong>KPay</strong> — Payment ပြီးပါက Transaction Reference ထည့်ပါ</div>' +
          '<div class="check-item"><strong>CB Bank</strong> — Payment ပြီးပါက Transaction Reference ထည့်ပါ</div>' +
        '</div>' +
        '<div class="notice notice-warning" style="margin-top:15px;margin-bottom:0">' +
          'Payment confirmation တင်ပြီးနောက် Premium ကို manually verify / activate လုပ်ရပါမယ်. ဒီ app က payment အတုမဖန်တီးပါ' +
        '</div>' +
      '</div>' +

      '<div class="card">' +
        '<div class="card-title"><div><h3>Payment Confirmation</h3><p>Activation request သိမ်းရန်</p></div></div>' +
        '<form id="paymentForm" class="form-grid">' +
          '<div class="form-group"><label>Plan</label><select id="paymentPlan" class="select"><option>1 Month - 25,000 Ks</option><option>3 Months - 60,000 Ks</option><option>6 Months - 100,000 Ks</option></select></div>' +
          '<div class="form-group"><label>Payment Method</label><select id="paymentMethod" class="select"><option>KPay</option><option>CB Bank</option></select></div>' +
          '<div class="form-group full"><label>Transaction Reference</label><input id="paymentReference" class="input" type="text" placeholder="Transaction reference ထည့်ပါ"></div>' +
          '<div class="full"><button class="btn btn-primary" type="submit">Submit Confirmation</button></div>' +
        '</form>' +
      '</div>';
  }

  function premiumPlan(name, price, amount, featured) {
    return '<div class="plan-card ' + (featured ? "featured" : "") + '">' +
      (featured ? '<div class="featured-label">POPULAR</div>' : '') +
      '<h3>' + name + '</h3>' +
      '<div class="plan-price">' + price + '</div>' +
      '<p>Full Academy + Tools + AI Business Coach</p>' +
      '<button class="btn btn-primary btn-block" data-action="select-plan" data-plan="' + escapeHTML(name + " - " + amount + " Ks") + '">Choose Plan</button>' +
    '</div>';
  }

  function renderSettings() {
    setPageMeta("Settings", "Profile & Application Settings");

    var user = getUser();

    document.getElementById("app").innerHTML =
      '<div class="page-heading">' +
        '<h2>Settings</h2>' +
        '<p>Manage your profile and local app data</p>' +
      '</div>' +

      '<div class="card">' +
        '<div class="card-title"><div><h3>Profile</h3><p>Displayed throughout the academy</p></div></div>' +
        '<form id="settingsForm" class="form-grid">' +
          '<div class="form-group"><label>Name</label><input id="settingsName" class="input" value="' + escapeHTML(user.name) + '"></div>' +
          '<div class="form-group"><label>Role</label><input id="settingsRole" class="input" value="' + escapeHTML(user.role) + '"></div>' +
          '<div class="full"><button class="btn btn-primary" type="submit">Save Profile</button></div>' +
        '</form>' +
      '</div>' +

      '<div class="card">' +
        '<div class="card-title"><div><h3>Application Data</h3><p>Local device storage</p></div></div>' +
        '<button class="btn btn-danger" data-action="reset-all-data">Reset Local App Data</button>' +
      '</div>';
  }

  function renderSection() {
    safeRender(function () {
      updateProfileUI();
      setActiveNav(currentSection);

      if (currentSection === "dashboard") renderDashboard();
      else if (currentSection === "academy") renderAcademy();
      else if (currentSection === "lessons") renderLessons();
      else if (currentSection === "progress") renderProgress();
      else if (currentSection === "sales") renderSales();
      else if (currentSection === "kpi") renderKPI();
      else if (currentSection === "reports") renderReports();
      else if (currentSection === "tools") renderTools();
      else if (currentSection === "ai-tools") renderAITools();
      else if (currentSection === "ai-coach") renderAICoach();
      else if (currentSection === "premium") renderPremium();
      else if (currentSection === "settings") renderSettings();
      else {
        currentSection = "dashboard";
        renderDashboard();
      }
    });
  }

  function goToSection(section) {
    if (!section) return;

    currentSection = section;
    currentLessonId = null;

    closeMobileMenu();
    window.scrollTo(0, 0);

    renderSection();
  }

  function openLesson(id) {
    var lesson = lessons.find(function (item) {
      return item.id === Number(id);
    });

    if (!lesson) {
      showToast("Lesson မတွေ့ပါ");
      return;
    }

    if (lesson.premium && !isPremiumActive()) {
      openPremiumModal(lesson);
      return;
    }

    currentLessonId = lesson.id;

    setPageMeta("Lesson " + lesson.number, lesson.category);

    document.getElementById("app").innerHTML =
      '<div class="lesson-detail">' +
        '<button class="btn btn-secondary" data-section="lessons">← Back to Lessons</button>' +

        '<div class="lesson-hero" style="margin-top:15px">' +
          '<span class="badge ' + (lesson.premium ? "badge-premium" : "badge-free") + '">' +
            (lesson.premium ? "PREMIUM" : "FREE") +
          '</span>' +
          '<h2 style="margin-top:10px">Lesson ' + lesson.number + ': ' + escapeHTML(lesson.title) + '</h2>' +
          '<p>' + escapeHTML(lesson.category) + '</p>' +
        '</div>' +

        lessonContent(lesson) +

        '<div class="card">' +
          '<div class="card-title"><div><h3>Lesson Completion</h3><p>Complete this lesson after applying the key actions</p></div></div>' +
          '<button class="btn ' + (isCompleted(lesson.id) ? "btn-success" : "btn-primary") + ' btn-block" data-action="toggle-complete" data-id="' + lesson.id + '">' +
            (isCompleted(lesson.id) ? "✓ Completed" : "Mark Lesson as Complete") +
          '</button>' +
        '</div>' +

      '</div>';
  }

  function lessonContent(lesson) {
    var category = lesson.category;

    var guide = {
      "Business Fundamentals": {
        concept: "Business ဆိုတာ Customer အတွက် value ဖန်တီးပြီး revenue ရရှိကာ sustainable profit နှင့် cash flow ထိန်းချုပ်နိုင်အောင်လုပ်ဆောင်တဲ့ system တစ်ခုဖြစ်ပါတယ်",
        actions: ["Customer problem ကို သတ်မှတ်ပါ", "Value proposition ကို ရှင်းလင်းပါ", "Revenue နှင့် cost structure ကို ခွဲပါ", "Profit နှင့် cash flow KPI ကို စောင့်ကြည့်ပါ"],
        kpi: "Revenue, Gross Profit, Gross Margin, Cash Flow"
      },
      "Business Strategy": {
        concept: "Strategy ဆိုတာ resource အကန့်အသတ်အတွင်း ဘာကို အဓိကလုပ်မလဲ၊ ဘာကို မလုပ်ဘူးလဲ ဆိုတာကို ရွေးချယ်ခြင်းဖြစ်ပါတယ်",
        actions: ["SWOT ပြုလုပ်ပါ", "Competitive advantage သတ်မှတ်ပါ", "Strategic priorities 3 ခုထက် မပိုအောင်ထားပါ", "Execution review ပြုလုပ်ပါ"],
        kpi: "Growth %, Market Share, Strategic Initiative Completion"
      },
      "Sales Management": {
        concept: "Sales Manager ရဲ့အဓိကတာဝန်က Target ကို Breakdown လုပ်ပြီး Team, Territory, Pipeline, Forecast နဲ့ Execution ကို ထိန်းချုပ်ခြင်းဖြစ်ပါတယ်",
        actions: ["Monthly target ကို daily / salesperson level ခွဲပါ", "Pipeline coverage စစ်ပါ", "Forecast accuracy စောင့်ကြည့်ပါ", "Low performance ကို coaching လုပ်ပါ"],
        kpi: "Achievement %, Productivity, Pipeline Coverage, Forecast Accuracy"
      },
      "Sales Skills": {
        concept: "Professional selling ဆိုတာ Product ကိုပဲမရောင်းဘဲ Customer ရဲ့လိုအပ်ချက်နဲ့ Business Value ကို ချိတ်ဆက်ပြီး decision ကို ဦးဆောင်ပေးခြင်းဖြစ်ပါတယ်",
        actions: ["Open questions မေးပါ", "Customer need ကို နားထောင်ပါ", "Feature ကို benefit အဖြစ်ပြောင်းပါ", "Objection ကို clarify လုပ်ပြီး close လုပ်ပါ"],
        kpi: "Conversion %, Average Order, Repeat Purchase"
      },
      "Customer Management": {
        concept: "Customer Management ရဲ့အဓိကက Customer တစ်ဦးချင်းရဲ့ value, need, experience နဲ့ retention ကို စနစ်တကျစီမံခြင်းဖြစ်ပါတယ်",
        actions: ["Customer segmentation ပြုလုပ်ပါ", "High-value customers သတ်မှတ်ပါ", "Complaint root cause ရှာပါ", "Retention action plan ထားပါ"],
        kpi: "Retention %, Repeat Rate, Active Customers, Complaint Rate"
      },
      "Marketing": {
        concept: "Marketing က Market, Customer, Offer နဲ့ Communication ကို ချိတ်ဆက်ပြီး demand ဖန်တီးပေးတဲ့ business function ဖြစ်ပါတယ်",
        actions: ["Target customer သတ်မှတ်ပါ", "Offer ကို ရှင်းလင်းပါ", "Campaign KPI ထားပါ", "ROI ပြန်တိုင်းပါ"],
        kpi: "Leads, Conversion %, Marketing ROI"
      },
      "Branding": {
        concept: "Brand ဆိုတာ Customer စိတ်ထဲမှာ Business အပေါ် ဖြစ်ပေါ်နေတဲ့ perception နဲ့ trust ဖြစ်ပါတယ်",
        actions: ["Brand promise သတ်မှတ်ပါ", "Positioning ရှင်းပါ", "Communication consistent ဖြစ်ပါစေ", "Customer trust တည်ဆောက်ပါ"],
        kpi: "Awareness, Consideration, Repeat Purchase"
      },
      "Finance": {
        concept: "Finance Management ရဲ့အဓိကက Revenue တိုးစေရုံမက Cost, Profit, Cash Flow နဲ့ Working Capital ကို ထိန်းချုပ်ခြင်းဖြစ်ပါတယ်",
        actions: ["Revenue နှင့် cost ခွဲပါ", "Gross margin စစ်ပါ", "Cash flow forecast ပြုလုပ်ပါ", "Unnecessary cost လျှော့ပါ"],
        kpi: "Gross Margin, OPEX Ratio, Cash Flow"
      },
      "Accounting & P&L": {
        concept: "P&L ကိုဖတ်နိုင်ခြင်းက Business Manager အတွက် financial performance ကို နားလည်ပြီး decision ချနိုင်ဖို့ အရေးကြီးပါတယ်",
        actions: ["Revenue စစ်ပါ", "Gross Profit စစ်ပါ", "OPEX ratio စစ်ပါ", "Net result ကို trend နဲ့ကြည့်ပါ"],
        kpi: "Gross Profit, Gross Margin, OPEX Ratio, Net Margin"
      },
      "Distribution & Operations": {
        concept: "Distribution Management က Product ကို မှန်ကန်တဲ့ Channel မှာ မှန်ကန်တဲ့ Stock နဲ့ Customer ဆီရောက်အောင် စီမံခြင်းဖြစ်ပါတယ်",
        actions: ["Channel structure စစ်ပါ", "Stock cover ထိန်းပါ", "Route efficiency စစ်ပါ", "Service level စောင့်ကြည့်ပါ"],
        kpi: "Numeric Distribution, Fill Rate, Stock Cover, Distribution Cost"
      },
      "Retail & Modern Trade": {
        concept: "Retail execution မှာ availability, visibility, distribution နဲ့ promotion execution က အဓိကဖြစ်ပါတယ်",
        actions: ["Outlet classification ပြုလုပ်ပါ", "Shelf availability စစ်ပါ", "Promotion compliance စစ်ပါ", "Store execution audit လုပ်ပါ"],
        kpi: "Availability %, Distribution %, Promotion Compliance"
      },
      "Key Account Management": {
        concept: "KAM က Account တစ်ခုချင်းစီကို relationship သက်သက်မဟုတ်ဘဲ joint business growth နဲ့ profitability အမြင်နဲ့ စီမံခြင်းဖြစ်ပါတယ်",
        actions: ["Account potential စစ်ပါ", "Account plan ရေးပါ", "JBP ပြုလုပ်ပါ", "Profitability စောင့်ကြည့်ပါ"],
        kpi: "Account Growth, Margin, Retention"
      },
      "Leadership & Management": {
        concept: "Leadership က Team ကို direction ပေးပြီး Management က target, process, people နဲ့ performance ကို စနစ်တကျထိန်းချုပ်ခြင်းဖြစ်ပါတယ်",
        actions: ["Clear goals ပေးပါ", "Delegate လုပ်ပါ", "Regular coaching ပြုလုပ်ပါ", "Performance feedback ပေးပါ"],
        kpi: "Goal Completion, Coaching Cadence, Team Performance"
      },
      "People & HR": {
        concept: "People Management က Right Person, Right Role, Right Development နဲ့ Retention ကို စနစ်တကျစီမံခြင်းဖြစ်ပါတယ်",
        actions: ["Job requirement ရှင်းပါ", "Onboarding plan ထားပါ", "Training needs ရှာပါ", "Performance review ပြုလုပ်ပါ"],
        kpi: "Time-to-Fill, Training Completion, Retention"
      },
      "Negotiation": {
        concept: "Negotiation မှာ preparation, objective, BATNA, value နဲ့ concession discipline က အဓိကဖြစ်ပါတယ်",
        actions: ["Objective သတ်မှတ်ပါ", "BATNA စဉ်းစားပါ", "Customer priority ရှာပါ", "Concession ကို condition နဲ့ပေးပါ"],
        kpi: "Win Rate, Margin, Payment Terms"
      },
      "Business Development": {
        concept: "Business Development က New Customers, New Channels, New Markets နဲ့ New Revenue Opportunities ရှာဖွေဖော်ထုတ်ခြင်းဖြစ်ပါတယ်",
        actions: ["Opportunity map ပြုလုပ်ပါ", "Qualified pipeline တည်ဆောက်ပါ", "Business case ရေးပါ", "Conversion စောင့်ကြည့်ပါ"],
        kpi: "Qualified Pipeline, Conversion, New Revenue"
      },
      "KPI & Data Analysis": {
        concept: "KPI ဆိုတာ Business Objective ကို measurable result အဖြစ် ပြောင်းလဲပြီး decision ချနိုင်အောင် အသုံးပြုတဲ့ measurement system ဖြစ်ပါတယ်",
        actions: ["Objective သတ်မှတ်ပါ", "Target ထားပါ", "Actual စုပါ", "Gap ရှာပြီး action ချပါ"],
        kpi: "Achievement %, Gap, Trend"
      },
      "Problem Solving & Decision Making": {
        concept: "Problem ကို symptom အနေနဲ့မကြည့်ဘဲ root cause ကိုရှာပြီး priority အလိုက် action ချမှသာ sustainable result ရနိုင်ပါတယ်",
        actions: ["Problem statement ရေးပါ", "5 Whys အသုံးပြုပါ", "Root cause စစ်ပါ", "Action owner နှင့် deadline သတ်မှတ်ပါ"],
        kpi: "Recurrence Rate, Action Closure"
      },
      "Digital Business & AI": {
        concept: "Digital Business နဲ့ AI ကို repetitive work လျှော့ချရန်၊ data ကို မြန်မြန်အသုံးချရန်နဲ့ decision quality မြှင့်ရန် အသုံးပြုနိုင်ပါတယ်",
        actions: ["Repetitive tasks ရှာပါ", "AI use case သတ်မှတ်ပါ", "Data quality စစ်ပါ", "Output ကို human review လုပ်ပါ"],
        kpi: "Time Saved, Adoption, Error Reduction"
      },
      "Productivity & Career": {
        concept: "Professional productivity က အလုပ်များများလုပ်ခြင်းမဟုတ်ဘဲ Business Impact အများဆုံးအလုပ်ကို priority ပေးပြီး အချိန်ကို ထိရောက်စွာအသုံးပြုခြင်းဖြစ်ပါတယ်",
        actions: ["Weekly priorities 3 ခုထားပါ", "Daily plan ရေးပါ", "Deep work time ထားပါ", "Weekly review ပြုလုပ်ပါ"],
        kpi: "Priority Completion, Learning Hours"
      }
    };

    var item = guide[category] || guide["Business Fundamentals"];

    return '<div class="card">' +
      '<div class="lesson-section">' +
        '<h3>Core Concept</h3>' +
        '<p>' + escapeHTML(item.concept) + '</p>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h3>Practical Manager Actions</h3>' +
        '<ul>' +
          item.actions.map(function (action) {
            return '<li>' + escapeHTML(action) + '</li>';
          }).join("") +
        '</ul>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h3>Manager Application</h3>' +
        '<p>ဒီ Lesson ကို လက်တွေ့အသုံးချတဲ့အခါ လက်ရှိ Business သို့မဟုတ် Sales Team ထဲက issue တစ်ခုကိုရွေးပြီး action တစ်ခုအဖြစ် ပြောင်းလဲလုပ်ဆောင်ပါ</p>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h3>Recommended KPI</h3>' +
        '<p><strong>' + escapeHTML(item.kpi) + '</strong></p>' +
      '</div>' +

      '<div class="lesson-section">' +
        '<h3>Manager Checklist</h3>' +
        '<div class="checklist">' +
          '<div class="check-item">☐ Objective ကို ရှင်းလင်းထားပါ</div>' +
          '<div class="check-item">☐ Current situation ကို data နဲ့ စစ်ပါ</div>' +
          '<div class="check-item">☐ Action owner သတ်မှတ်ပါ</div>' +
          '<div class="check-item">☐ KPI နဲ့ result ကို ပြန်တိုင်းပါ</div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }

  function openPremiumModal(lesson) {
    var modalRoot = document.getElementById("modalRoot");

    modalRoot.innerHTML =
      '<div class="modal-backdrop is-open">' +
        '<div class="modal">' +
          '<div class="modal-head">' +
            '<h3>Premium Lesson</h3>' +
            '<button class="modal-close" data-action="close-modal">×</button>' +
          '</div>' +
          '<div class="modal-body">' +
            '<div class="notice notice-warning">' +
              '<strong>Lesson ' + lesson.number + ' - ' + escapeHTML(lesson.title) + '</strong><br>' +
              'ဒီ Lesson က Premium Membership လိုအပ်ပါတယ်' +
            '</div>' +
            '<p style="font-size:12px;line-height:1.7">Lesson 1 ကို Free အသုံးပြုနိုင်ပြီး Lesson 2 onwards အတွက် Premium Membership လိုအပ်ပါတယ်</p>' +
            '<button class="btn btn-primary btn-block" data-section="premium">View Premium Plans</button>' +
          '</div>' +
        '</div>' +
      '</div>';
  }

  function closeModal() {
    var root = document.getElementById("modalRoot");

    if (root) root.innerHTML = "";
  }

  function handleClick(event) {
    var target = event.target.closest ? event.target.closest("[data-section], [data-action]") : null;

    if (!target) return;

    var section = target.getAttribute("data-section");
    var action = target.getAttribute("data-action");

    if (section) {
      closeModal();

      if (section === "lessons" && currentSection === "lessons") {
        renderLessons();
      } else {
        goToSection(section);
      }

      return;
    }

    if (!action) return;

    if (action === "open-lesson") {
      openLesson(target.getAttribute("data-id"));
      return;
    }

    if (action === "toggle-complete") {
      toggleComplete(target.getAttribute("data-id"));
      return;
    }

    if (action === "reset-progress") {
      resetProgress();
      return;
    }

    if (action === "reload-app") {
      window.location.reload();
      return;
    }

    if (action === "close-modal") {
      closeModal();
      return;
    }

    if (action === "open-tool") {
      openTool(target.getAttribute("data-tool"));
      return;
    }

    if (action === "calculate-pricing") {
      calculatePricing();
      return;
    }

    if (action === "calculate-break-even") {
      calculateBreakEven();
      return;
    }

    if (action === "calculate-sales-target") {
      calculateSalesTarget();
      return;
    }

    if (action === "calculate-growth") {
      calculateGrowth();
      return;
    }

    if (action === "category-lessons") {
      var category = target.getAttribute("data-category");
      currentSection = "lessons";
      closeMobileMenu();
      setActiveNav("lessons");
      renderLessons(category, "");
      return;
    }

    if (action === "print-report") {
      window.print();
      return;
    }

    if (action === "ai-tool") {
      generateAITool(target.getAttribute("data-tool"));
      return;
    }

    if (action === "select-plan") {
      var plan = target.getAttribute("data-plan");
      goToSection("premium");

      setTimeout(function () {
        var select = document.getElementById("paymentPlan");

        if (select) {
          for (var i = 0; i < select.options.length; i++) {
            if (select.options[i].text.indexOf(plan.split(" - ")[0]) !== -1) {
              select.selectedIndex = i;
              break;
            }
          }
        }

        showToast("Plan selected");
      }, 50);

      return;
    }

    if (action === "reset-all-data") {
      resetAllData();
      return;
    }
  }

  function toggleComplete(id) {
    id = Number(id);

    var completed = getCompleted();
    var index = completed.indexOf(id);

    if (index === -1) {
      completed.push(id);
      showToast("Lesson completed");
    } else {
      completed.splice(index, 1);
      showToast("Lesson completion removed");
    }

    setCompleted(completed);

    if (currentLessonId) {
      openLesson(currentLessonId);
    } else {
      renderSection();
    }
  }

  function resetProgress() {
    if (!window.confirm("Learning progress အားလုံး reset လုပ်မလား")) {
      return;
    }

    setCompleted([]);
    showToast("Progress reset ပြီးပါပြီ");
    renderProgress();
  }

  function resetAllData() {
    if (!window.confirm("Local app data အားလုံးကို ဖျက်မလား")) {
      return;
    }

    try {
      localStorage.removeItem(USER_KEY);
      localStorage.removeItem(COMPLETED_KEY);
      localStorage.removeItem(OLD_COMPLETED_KEY);
      localStorage.removeItem(PREMIUM_KEY);
      localStorage.removeItem(PAYMENT_KEY);
      localStorage.removeItem(KPI_KEY);
      localStorage.removeItem(SETTINGS_KEY);
    } catch (error) {
      console.error(error);
    }

    showToast("App data reset ပြီးပါပြီ");

    setTimeout(function () {
      window.location.reload();
    }, 500);
  }

  function calculatePricing() {
    var cost = Number(document.getElementById("toolCost").value) || 0;
    var price = Number(document.getElementById("toolPrice").value) || 0;

    var profit = price - cost;
    var margin = price > 0 ? (profit / price) * 100 : 0;
    var markup = cost > 0 ? (profit / cost) * 100 : 0;

    showCalculatorResult(
      "<strong>Profit:</strong> " + money(profit) +
      "<br><strong>Margin:</strong> " + margin.toFixed(2) + "%" +
      "<br><strong>Markup:</strong> " + markup.toFixed(2) + "%"
    );
  }

  function calculateBreakEven() {
    var fixed = Number(document.getElementById("beFixed").value) || 0;
    var price = Number(document.getElementById("bePrice").value) || 0;
    var variable = Number(document.getElementById("beVariable").value) || 0;

    var contribution = price - variable;

    if (contribution <= 0) {
      showCalculatorResult("Selling Price က Variable Cost ထက်များရပါမယ်");
      return;
    }

    var units = fixed / contribution;
    var sales = units * price;

    showCalculatorResult(
      "<strong>Break-even Units:</strong> " + units.toFixed(1) +
      "<br><strong>Break-even Sales:</strong> " + money(sales)
    );
  }

  function calculateSalesTarget() {
    var target = Number(document.getElementById("stTarget").value) || 0;
    var days = Number(document.getElementById("stDays").value) || 0;

    var daily = days > 0 ? target / days : 0;

    showCalculatorResult(
      "<strong>Monthly Target:</strong> " + money(target) +
      "<br><strong>Daily Target:</strong> " + daily.toFixed(2)
    );
  }

  function calculateGrowth() {
    var previous = Number(document.getElementById("growthPrevious").value) || 0;
    var current = Number(document.getElementById("growthCurrent").value) || 0;

    if (previous <= 0) {
      showCalculatorResult("Previous Sales ကို 0 ထက်ကြီးအောင်ထည့်ပါ");
      return;
    }

    var growth = ((current - previous) / previous) * 100;

    showCalculatorResult(
      "<strong>Growth:</strong> " + growth.toFixed(2) + "%"
    );
  }

  function showCalculatorResult(html) {
    var result = document.getElementById("calculatorResult");

    if (!result) return;

    result.innerHTML =
      '<div class="notice notice-success">' + html + '</div>';
  }

  function generateAITool(type) {
    var result = document.getElementById("aiToolResult");

    if (!result) return;

    var content = "";

    if (type === "daily-plan") {
      content =
        "<strong>Daily Sales Action Plan</strong><br><br>" +
        "1. Yesterday actual vs target စစ်ပါ<br>" +
        "2. Gap ရဲ့ Top 3 causes ရှာပါ<br>" +
        "3. High-potential customers ကို priority ပေးပါ<br>" +
        "4. Salesperson တစ်ဦးချင်း daily action သတ်မှတ်ပါ<br>" +
        "5. End-of-day actual ကို ပြန်တိုင်းပါ";
    }

    if (type === "gap-analysis") {
      content =
        "<strong>Target Gap Analysis</strong><br><br>" +
        "Target → Actual → Gap → Root Cause → Corrective Action ဆိုတဲ့ flow နဲ့ စစ်ပါ<br><br>" +
        "အရင်ဆုံး Volume, Distribution, Conversion, Average Order နဲ့ Team Productivity ကို ခွဲပြီးကြည့်ပါ";
    }

    if (type === "root-cause") {
      content =
        "<strong>Root Cause Analysis</strong><br><br>" +
        "Problem ကို statement တစ်ကြောင်းနဲ့ရေးပြီး 5 Whys မေးပါ<br>" +
        "People / Process / Product / Customer / Market ဆိုပြီး cause category ခွဲပါ<br>" +
        "Root cause တစ်ခုချင်းစီအတွက် owner နဲ့ deadline ထားပါ";
    }

    if (type === "meeting") {
      content =
        "<strong>Sales Meeting Agenda</strong><br><br>" +
        "1. Target vs Actual<br>" +
        "2. Gap analysis<br>" +
        "3. Territory / Customer update<br>" +
        "4. Pipeline<br>" +
        "5. Key problems<br>" +
        "6. Action owner<br>" +
        "7. Deadline<br>" +
        "8. Next review";
    }

    if (type === "coaching") {
      content =
        "<strong>Team Coaching Questions</strong><br><br>" +
        "• Target ဘာကြောင့် မရသေးလဲ<br>" +
        "• ဘယ် customer ကို priority ပေးမလဲ<br>" +
        "• Pipeline ထဲမှာ ဘယ် opportunity က အနီးဆုံးလဲ<br>" +
        "• ဘာ support လိုအပ်လဲ<br>" +
        "• ဒီနေ့ ဘာ action လုပ်မလဲ";
    }

    result.style.display = "block";
    result.innerHTML = '<div class="notice notice-info">' + content + '</div>';
  }

  async function askAI(question) {
    var chat = document.getElementById("aiChat");

    if (!chat) return;

    currentChat.push({
      role: "user",
      content: question
    });

    chat.innerHTML +=
      '<div class="ai-message ai-user">' +
      escapeHTML(question) +
      '</div>';

    var thinking = document.createElement("div");
    thinking.className = "ai-message ai-bot";
    thinking.textContent = "AI စဉ်းစားနေပါတယ်...";
    chat.appendChild(thinking);

    try {
      var response = await fetch(AI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: question,
          prompt: question,
          context: "You are an AI Business Coach for a Myanmar business manager. Give practical, concise, actionable business advice with steps, KPIs and examples. Respond in the user's language when possible."
        })
      });

      if (!response.ok) {
        throw new Error("AI API unavailable");
      }

      var data = await response.json();

      thinking.remove();

      var answer =
        data.reply ||
        data.response ||
        data.message ||
        data.answer ||
        "AI response မရရှိသေးပါ";

      currentChat.push({
        role: "assistant",
        content: answer
      });

      chat.innerHTML +=
        '<div class="ai-message ai-bot">' +
        escapeHTML(answer).replace(/\n/g, "<br>") +
        '</div>';

    } catch (error) {
      thinking.remove();

      var fallback = localAIFallback(question);

      chat.innerHTML +=
        '<div class="ai-message ai-bot">' +
        '<strong>Business Coach Advice</strong><br>' +
        escapeHTML(fallback).replace(/\n/g, "<br>") +
        '</div>';
    }

    chat.scrollTop = chat.scrollHeight;
  }

  function localAIFallback(question) {
    var q = question.toLowerCase();

    if (q.indexOf("sales") !== -1 || q.indexOf("target") !== -1) {
      return "Sales target မပြည့်ရင် Target → Actual → Gap → Root Cause → Action ဆိုတဲ့ flow နဲ့ စစ်ပါ။ အရင်ဆုံး salesperson, territory, customer, conversion နဲ့ pipeline ကို ခွဲပြီးကြည့်ပါ";
    }

    if (q.indexOf("staff") !== -1 || q.indexOf("team") !== -1) {
      return "Team problem အတွက် expectation ကိုရှင်းပါ၊ KPI ကိုသတ်မှတ်ပါ၊ weekly coaching လုပ်ပါ၊ performance gap ကို data နဲ့ဆွေးနွေးပြီး action owner နဲ့ deadline သတ်မှတ်ပါ";
    }

    if (q.indexOf("marketing") !== -1) {
      return "Marketing အတွက် Target Customer → Problem → Offer → Channel → Campaign → KPI ဆိုတဲ့ flow နဲ့ စီမံပါ။ Leads နဲ့ Conversion ကို အဓိကတိုင်းပါ";
    }

    return "Problem ကို တစ်ကြောင်းနဲ့ သတ်မှတ်ပြီး Current Data → Root Cause → Options → Action → KPI → Review ဆိုတဲ့ management framework နဲ့ ဖြေရှင်းပါ";
  }

  function handleSubmit(event) {
    var target = event.target;

    if (target.id === "kpiForm") {
      event.preventDefault();

      var kpi = {
        target: Number(document.getElementById("kpiTarget").value) || 0,
        actual: Number(document.getElementById("kpiActual").value) || 0,
        team: Number(document.getElementById("kpiTeam").value) || 0,
        customers: Number(document.getElementById("kpiCustomers").value) || 0,
        orders: Number(document.getElementById("kpiOrders").value) || 0
      };

      safeSet(KPI_KEY, kpi);
      showToast("KPI saved");
      renderSection();
      return;
    }

    if (target.id === "settingsForm") {
      event.preventDefault();

      var user = {
        name: document.getElementById("settingsName").value.trim() || "Aung Zar Ni Win",
        role: document.getElementById("settingsRole").value.trim() || "Business Manager"
      };

      safeSet(USER_KEY, user);
      showToast("Profile saved");
      renderSection();
      return;
    }

    if (target.id === "paymentForm") {
      event.preventDefault();

      var plan = document.getElementById("paymentPlan").value;
      var method = document.getElementById("paymentMethod").value;
      var reference = document.getElementById("paymentReference").value.trim();

      if (!reference) {
        showToast("Transaction Reference ထည့်ပါ");
        return;
      }

      safeSet(PAYMENT_KEY, {
        plan: plan,
        method: method,
        reference: reference,
        status: "pending",
        submittedAt: new Date().toISOString()
      });

      showToast("Payment confirmation submitted");

      target.reset();
      return;
    }

    if (target.id === "aiForm") {
      event.preventDefault();

      var input = document.getElementById("aiInput");

      if (!input) return;

      var question = input.value.trim();

      if (!question) {
        showToast("မေးခွန်းထည့်ပါ");
        return;
      }

      input.value = "";
      askAI(question);
    }
  }

  function handleInput(event) {
    if (event.target.id === "lessonSearch") {
      var categoryElement = document.getElementById("lessonCategory");
      var category = categoryElement ? categoryElement.value : "All Categories";

      renderLessons(category, event.target.value);
    }
  }

  function handleChange(event) {
    if (event.target.id === "lessonCategory") {
      var searchElement = document.getElementById("lessonSearch");
      var search = searchElement ? searchElement.value : "";

      renderLessons(event.target.value, search);
    }
  }

  function init() {
    updateProfileUI();
    renderSection();
  }

  document.addEventListener("click", handleClick);
  document.addEventListener("submit", handleSubmit);
  document.addEventListener("input", handleInput);
  document.addEventListener("change", handleChange);

  document.addEventListener("click", function (event) {
    if (event.target.id === "mobileMenuBtn") {
      openMobileMenu();
    }

    if (event.target.id === "mobileOverlay") {
      closeMobileMenu();
    }
  });

  window.addEventListener("error", function (event) {
    console.error("ABA Runtime Error:", event.error || event.message);
  });

  window.AungBusinessAcademy = {
    lessons: lessons,
    courseData: courseData,
    getLessonContent: lessonContent,
    goToSection: goToSection,
    openLesson: openLesson,
    resetProgress: resetProgress,
    getCompleted: getCompleted,
    getProgress: getProgress,
    isPremiumActive: isPremiumActive
  };

  document.addEventListener("DOMContentLoaded", init);

})();
