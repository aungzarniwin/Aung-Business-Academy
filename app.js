"use strict";

(function () {

  /* =========================================================
     AUNG BUSINESS ACADEMY V15.1 STABLE
     ========================================================= */

  var API_BASE_URL = "https://aung-business-academy.onrender.com";
  var AI_API_URL = API_BASE_URL + "/api/ai";

  var KEYS = {
    completed: "aba_completed_lessons",
    premium: "aba_premium_status",
    premiumExpiry: "aba_premium_expiry",
    profile: "aba_profile",
    kpi: "aba_kpi_data",
    settings: "aba_settings"
  };

  var state = {
    section: "dashboard",
    lessonId: null,
    category: "All",
    search: "",
    aiLoading: false
  };

  /* =========================================================
     CATEGORY DATA
     ========================================================= */

  var courseData = [
    {
      name: "Business Fundamentals",
      icon: "💼",
      guide: "Understand how a business creates value, earns revenue and manages resources",
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
      guide: "Build strategic priorities, competitive advantage and execution discipline",
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
      guide: "Manage targets, territory, pipeline, forecasting and team execution",
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
      guide: "Develop practical customer selling, negotiation and closing skills",
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
      guide: "Improve customer experience, retention and customer profitability",
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
      guide: "Build market understanding, campaigns, channels and marketing ROI",
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
      icon: "🏷️",
      guide: "Build brand identity, positioning, trust and consistency",
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
      guide: "Manage revenue, cost, cash flow, margin and financial decisions",
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
      icon: "📑",
      guide: "Read income statements, P&L, balance sheet and cash flow information",
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
      guide: "Manage channels, distributors, inventory, logistics and execution",
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
      guide: "Improve retail execution, availability, promotion and store performance",
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
      icon: "⭐",
      guide: "Manage strategic accounts, profitability and joint business plans",
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
      guide: "Lead people, set goals, coach teams and improve performance",
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
      guide: "Build people systems for recruitment, development and retention",
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
      guide: "Prepare, negotiate value, manage concessions and protect margin",
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
      guide: "Identify opportunities, enter markets and build growth pipelines",
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
      guide: "Measure performance, diagnose gaps and make data-based decisions",
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
      guide: "Find root causes, prioritize issues and create action plans",
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
      guide: "Apply digital tools, automation and AI to practical business work",
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
      icon: "🎯",
      guide: "Improve time management, focus, communication and professional growth",
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
     BUILD 260 LESSONS
     ========================================================= */

  var lessons = [];
  var lessonCounter = 1;

  for (var c = 0; c < courseData.length; c++) {
    var course = courseData[c];

    for (var l = 0; l < course.topics.length; l++) {
      lessons.push({
        id: lessonCounter,
        title: course.topics[l],
        category: course.name,
        icon: course.icon,
        guide: course.guide,
        categoryIndex: c,
        lessonIndex: l + 1
      });

      lessonCounter++;
    }
  }

  /* =========================================================
     STORAGE
     ========================================================= */

  function safeGet(key, fallback) {
    try {
      var value = localStorage.getItem(key);
      if (value === null) {
        return fallback;
      }
      return value;
    } catch (e) {
      return fallback;
    }
  }

  function safeSet(key, value) {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (e) {
      return false;
    }
  }

  function safeRemove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  }

  function getJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) {
        return fallback;
      }
      return JSON.parse(raw);
    } catch (e) {
      return fallback;
    }
  }

  function setJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }

  /* =========================================================
     PROFILE
     ========================================================= */

  function getProfile() {
    var profile = getJSON(KEYS.profile, null);

    if (!profile) {
      profile = {
        name: "Aung Zar Ni Win",
        role: "Business Manager"
      };
    }

    return profile;
  }

  function saveProfile(name, role) {
    setJSON(KEYS.profile, {
      name: name || "Aung Zar Ni Win",
      role: role || "Business Manager"
    });

    updateProfileUI();
  }

  function updateProfileUI() {
    var profile = getProfile();

    var ids = [
      ["sidebarName", profile.name],
      ["topName", profile.name],
      ["sidebarRole", profile.role],
      ["topRole", profile.role]
    ];

    for (var i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i][0]);
      if (el) {
        el.textContent = ids[i][1];
      }
    }
  }

  /* =========================================================
     COMPLETED LESSONS
     ========================================================= */

  function getCompleted() {
    var data = getJSON(KEYS.completed, []);

    if (!Array.isArray(data)) {
      return [];
    }

    return data;
  }

  function isCompleted(id) {
    return getCompleted().indexOf(Number(id)) !== -1;
  }

  function toggleCompleted(id) {
    id = Number(id);

    var completed = getCompleted();
    var index = completed.indexOf(id);

    if (index === -1) {
      completed.push(id);
      setJSON(KEYS.completed, completed);
      showToast("Lesson completed");
    } else {
      completed.splice(index, 1);
      setJSON(KEYS.completed, completed);
      showToast("Lesson marked incomplete");
    }
  }

  function resetProgress() {
    var confirmed = window.confirm(
      "Reset all lesson progress?\n\nThis will remove your completed lesson records"
    );

    if (!confirmed) {
      return;
    }

    safeRemove(KEYS.completed);
    showToast("Learning progress has been reset");
    renderCurrent();
  }

  function getProgress() {
    var completed = getCompleted();

    if (!lessons.length) {
      return 0;
    }

    return Math.round((completed.length / lessons.length) * 100);
  }

  function getCategoryProgress(category) {
    var list = lessons.filter(function (lesson) {
      return lesson.category === category;
    });

    var completed = list.filter(function (lesson) {
      return isCompleted(lesson.id);
    }).length;

    if (!list.length) {
      return 0;
    }

    return Math.round((completed / list.length) * 100);
  }

  /* =========================================================
     PREMIUM
     ========================================================= */

  function isPremium() {
    var status = safeGet(KEYS.premium, "false");

    if (status !== "true") {
      return false;
    }

    var expiry = Number(safeGet(KEYS.premiumExpiry, "0"));

    if (expiry > 0 && Date.now() > expiry) {
      safeSet(KEYS.premium, "false");
      safeRemove(KEYS.premiumExpiry);
      return false;
    }

    return true;
  }

  function getPremiumPlanText() {
    if (!isPremium()) {
      return "BASIC";
    }

    var expiry = Number(safeGet(KEYS.premiumExpiry, "0"));

    if (!expiry) {
      return "PRO";
    }

    var days = Math.ceil((expiry - Date.now()) / 86400000);

    if (days <= 0) {
      return "BASIC";
    }

    return "PRO • " + days + " days";
  }

  function canOpenLesson(id) {
    id = Number(id);

    /*
      Lesson 1 = FREE
      Lesson 2+ = PREMIUM
    */

    if (id === 1) {
      return true;
    }

    return isPremium();
  }

  /* =========================================================
     HELPERS
     ========================================================= */

  function escapeHtml(value) {
    return String(value === undefined || value === null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function formatNumber(value) {
    var number = Number(value);

    if (isNaN(number)) {
      number = 0;
    }

    return number.toLocaleString("en-US");
  }

  function getLesson(id) {
    id = Number(id);

    for (var i = 0; i < lessons.length; i++) {
      if (lessons[i].id === id) {
        return lessons[i];
      }
    }

    return null;
  }

  function getFirstIncomplete() {
    for (var i = 0; i < lessons.length; i++) {
      if (!isCompleted(lessons[i].id)) {
        return lessons[i];
      }
    }

    return lessons[0] || null;
  }

  function getCategoryIcon(category) {
    for (var i = 0; i < courseData.length; i++) {
      if (courseData[i].name === category) {
        return courseData[i].icon;
      }
    }

    return "📚";
  }

  /* =========================================================
     PAGE TITLES
     ========================================================= */

  var pageTitles = {
    dashboard: ["Dashboard", "Business Management Command Center"],
    academy: ["Business Academy", "Professional Business Management Learning"],
    lessons: ["Lessons", "260 Professional Business Lessons"],
    progress: ["My Progress", "Learning performance and completion"],
    sales: ["Sales Manager", "Sales target, team and execution management"],
    kpi: ["KPI & Analytics", "Measure performance and identify gaps"],
    reports: ["Business Reports", "Management reports and performance summaries"],
    tools: ["Business Tools", "Practical business calculators and tools"],
    "ai-tools": ["AI Business Tools", "AI-powered management workflows"],
    coach: ["AI Business Coach", "Practical business problem solving"],
    premium: ["Premium Membership", "Professional learning and business tools"],
    settings: ["Settings", "Profile and application settings"]
  };

  function updatePageTitle() {
    var title = pageTitles[state.section] || pageTitles.dashboard;

    var titleEl = document.getElementById("pageTitle");
    var subtitleEl = document.getElementById("pageSubtitle");

    if (titleEl) {
      titleEl.textContent = title[0];
    }

    if (subtitleEl) {
      subtitleEl.textContent = title[1];
    }
  }

  function updateActiveNav() {
    var navs = document.querySelectorAll(".nav-item");

    for (var i = 0; i < navs.length; i++) {
      navs[i].classList.remove("active");

      if (navs[i].getAttribute("data-section") === state.section) {
        navs[i].classList.add("active");
      }
    }
  }

  /* =========================================================
     NAVIGATION
     ========================================================= */

  function goToSection(section) {
    if (!section) {
      section = "dashboard";
    }

    state.section = section;
    state.lessonId = null;

    closeMobileMenu();
    updatePageTitle();
    updateActiveNav();
    renderCurrent();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /* =========================================================
     DASHBOARD
     ========================================================= */

  function renderDashboard() {
    var profile = getProfile();
    var completed = getCompleted().length;
    var progress = getProgress();
    var nextLesson = getFirstIncomplete();

    var nextTitle = nextLesson
      ? escapeHtml(nextLesson.title)
      : "All lessons completed";

    var nextId = nextLesson ? nextLesson.id : 1;

    var premiumText = getPremiumPlanText();

    return `
      <div class="hero">
        <h2>Welcome back, ${escapeHtml(profile.name)}</h2>
        <p>Build stronger business management, sales execution and leadership skills</p>

        <div class="hero-actions">
          <button class="btn btn-white" data-action="open-lesson" data-id="${nextId}">
            Continue Learning
          </button>

          <button class="btn btn-primary" data-section="sales">
            Open Sales Manager
          </button>
        </div>
      </div>

      <div class="grid grid-4">

        <div class="card stat-card">
          <div class="stat-label">Total Lessons</div>
          <div class="stat-value">${lessons.length}</div>
          <div class="stat-note">Professional business lessons</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Completed</div>
          <div class="stat-value">${completed}</div>
          <div class="stat-note">Lessons completed</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Overall Progress</div>
          <div class="stat-value">${progress}%</div>
          <div class="stat-note">Learning progress</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Membership</div>
          <div class="stat-value">${escapeHtml(premiumText)}</div>
          <div class="stat-note">Lesson 1 free • Lesson 2+ Premium</div>
        </div>

      </div>

      <div style="height:18px"></div>

      <div class="grid grid-2">

        <div class="card card-pad">
          <div class="section-title">Continue Learning</div>

          <p class="muted small">Next recommended lesson</p>

          <h3 style="margin-top:7px;font-size:17px">
            ${nextTitle}
          </h3>

          <div class="progress-wrap">
            <div class="progress-row">
              <span>Overall Progress</span>
              <strong>${progress}%</strong>
            </div>

            <div class="progress-bar">
              <div class="progress-fill" style="width:${progress}%"></div>
            </div>
          </div>

          <button
            class="btn btn-primary"
            style="margin-top:15px"
            data-action="open-lesson"
            data-id="${nextId}">
            Open Lesson
          </button>
        </div>

        <div class="card card-pad">
          <div class="section-title">Membership Status</div>

          <div class="result-box">
            <strong>${escapeHtml(premiumText)}</strong>
            <p class="muted small" style="margin-top:6px">
              Lesson 1 is free. Lesson 2 and above require Premium Membership
            </p>
          </div>

          <button
            class="btn ${isPremium() ? "btn-success" : "btn-primary"}"
            style="margin-top:14px"
            data-section="premium">
            ${isPremium() ? "View Premium Status" : "Upgrade to Premium"}
          </button>
        </div>

      </div>

      <div style="height:22px"></div>

      <div class="section-title">Business Management Focus</div>

      <div class="grid grid-3">

        <div class="card focus-card">
          <div class="focus-icon">📈</div>
          <h3>Sales Management</h3>
          <p>Target, team, pipeline and execution</p>
        </div>

        <div class="card focus-card">
          <div class="focus-icon">📊</div>
          <h3>KPI & Analytics</h3>
          <p>Measure performance and identify gaps</p>
        </div>

        <div class="card focus-card">
          <div class="focus-icon">🤖</div>
          <h3>AI Business Coach</h3>
          <p>Practical business problem solving</p>
        </div>

      </div>

      <div style="height:22px"></div>

      <div class="section-title">Academy Categories</div>

      <div class="grid grid-4">
        ${renderCategoryCards()}
      </div>
    `;
  }

  /* =========================================================
     ACADEMY
     ========================================================= */

  function renderAcademy() {
    return `
      <div class="page-head">
        <h2>Business Academy</h2>
        <p>Professional business management curriculum with ${lessons.length} lessons</p>
      </div>

      <div class="card card-pad" style="margin-bottom:18px">
        <div class="progress-row">
          <span>Overall Learning Progress</span>
          <strong>${getProgress()}%</strong>
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width:${getProgress()}%"></div>
        </div>
      </div>

      <div class="grid grid-3">
        ${renderCategoryCards()}
      </div>
    `;
  }

  function renderCategoryCards() {
    var html = "";

    for (var i = 0; i < courseData.length; i++) {
      var category = courseData[i];
      var progress = getCategoryProgress(category.name);

      html += `
        <div
          class="card category-card"
          data-action="filter-category"
          data-category="${escapeHtml(category.name)}">

          <div class="category-icon">${category.icon}</div>

          <h3>${escapeHtml(category.name)}</h3>

          <p>${category.topics.length} lessons</p>

          <div class="progress-wrap">
            <div class="progress-row">
              <span>Progress</span>
              <strong>${progress}%</strong>
            </div>

            <div class="progress-bar">
              <div class="progress-fill" style="width:${progress}%"></div>
            </div>
          </div>
        </div>
      `;
    }

    return html;
  }

  /* =========================================================
     LESSONS
     ========================================================= */

  function renderLessons() {
    var filtered = lessons.filter(function (lesson) {

      var categoryMatch =
        state.category === "All" ||
        lesson.category === state.category;

      var text =
        lesson.title.toLowerCase() +
        " " +
        lesson.category.toLowerCase();

      var searchMatch =
        !state.search ||
        text.indexOf(state.search.toLowerCase()) !== -1;

      return categoryMatch && searchMatch;
    });

    var options = `<option value="All">All Categories</option>`;

    for (var i = 0; i < courseData.length; i++) {
      options += `
        <option
          value="${escapeHtml(courseData[i].name)}"
          ${state.category === courseData[i].name ? "selected" : ""}>
          ${escapeHtml(courseData[i].name)}
        </option>
      `;
    }

    var html = `
      <div class="page-head">
        <h2>Lessons</h2>
        <p>Lesson 1 is free. Lesson 2 and above require Premium Membership</p>
      </div>

      <div class="lesson-toolbar">

        <input
          id="lessonSearch"
          class="search-box"
          type="search"
          placeholder="Search lessons..."
          value="${escapeHtml(state.search)}">

        <select id="categoryFilter" class="select-box">
          ${options}
        </select>

      </div>

      <div class="card card-pad" style="margin-bottom:18px">
        Showing ${filtered.length} of ${lessons.length} lessons
      </div>

      <div class="lesson-list">
    `;

    for (var j = 0; j < filtered.length; j++) {
      var lesson = filtered[j];
      var complete = isCompleted(lesson.id);
      var free = lesson.id === 1;

      html += `
        <div class="lesson-item">

          <div class="lesson-number">
            ${lesson.id}
          </div>

          <div class="lesson-info">
            <h3>${escapeHtml(lesson.title)}</h3>
            <p>
              ${escapeHtml(lesson.category)}
              • ${free ? "Free" : "Premium"}
            </p>
          </div>

          <div class="lesson-status">
            ${complete
              ? '<span class="completed-mark">✓</span>'
              : free
                ? '<span class="lock-mark">○</span>'
                : '<span class="lock-mark">◆</span>'}
          </div>

          <div class="lesson-actions">

            <button
              class="btn ${free || isPremium() ? "btn-primary" : "btn-secondary"}"
              data-action="open-lesson"
              data-id="${lesson.id}">
              ${complete ? "Review" : free ? "Open" : "Premium"}
            </button>

          </div>

        </div>
      `;
    }

    html += `
      </div>
    `;

    return html;
  }

  /* =========================================================
     LESSON CONTENT
     ========================================================= */

  function getLessonContent(lesson) {

    var category = lesson.category;

    var objectiveMap = {
      "Business Fundamentals": "Understand how the business creates customer value and converts that value into sustainable revenue and profit",
      "Business Strategy": "Learn how to choose strategic priorities and translate them into measurable execution",
      "Sales Management": "Build a disciplined system for target setting, pipeline management, forecasting and team execution",
      "Sales Skills": "Develop practical selling skills from customer discovery to negotiation and closing",
      "Customer Management": "Improve customer value, retention, experience and long-term profitability",
      "Marketing": "Connect customer insight, market strategy, campaigns and measurable marketing results",
      "Branding": "Build a clear brand identity, positioning and customer trust",
      "Finance": "Use financial information to manage revenue, cost, margin, cash and business decisions",
      "Accounting & P&L": "Read and interpret financial statements for better management decisions",
      "Distribution & Operations": "Improve channel coverage, stock availability, logistics and operational execution",
      "Retail & Modern Trade": "Improve store execution, availability, promotion and retail performance",
      "Key Account Management": "Manage strategic accounts through planning, negotiation, profitability and growth",
      "Leadership & Management": "Lead teams through goals, delegation, coaching, feedback and performance management",
      "People & HR": "Build practical people systems for recruitment, development and retention",
      "Negotiation": "Prepare effectively, negotiate value and protect commercial outcomes",
      "Business Development": "Identify new opportunities and convert them into a measurable growth pipeline",
      "KPI & Data Analysis": "Turn business data into clear performance measures and management actions",
      "Problem Solving & Decision Making": "Find root causes, prioritize issues and make practical decisions",
      "Digital Business & AI": "Apply digital tools and AI to improve productivity, decisions and business execution",
      "Productivity & Career": "Improve professional productivity, focus, communication and career development"
    };

    var kpiMap = {
      "Business Fundamentals": "Revenue, gross profit, cash conversion and customer value",
      "Business Strategy": "Growth, market share, strategic initiative completion",
      "Sales Management": "Target achievement, productivity, pipeline coverage, forecast accuracy",
      "Sales Skills": "Conversion rate, average order value, repeat purchase",
      "Customer Management": "Retention rate, repeat rate, complaints, active customers",
      "Marketing": "Reach, leads, conversion, ROI",
      "Branding": "Awareness, consideration, trust, repeat purchase",
      "Finance": "Gross margin, operating expense ratio, cash flow",
      "Accounting & P&L": "Gross profit, OPEX ratio, operating margin",
      "Distribution & Operations": "Numeric distribution, fill rate, stock cover, service level",
      "Retail & Modern Trade": "Availability, distribution, promotion compliance",
      "Key Account Management": "Account growth, margin, retention, JBP completion",
      "Leadership & Management": "Goal completion, coaching cadence, team productivity",
      "People & HR": "Time-to-fill, training completion, retention",
      "Negotiation": "Win rate, margin, payment terms",
      "Business Development": "Qualified pipeline, conversion, new revenue",
      "KPI & Data Analysis": "Achievement %, gap, trend, productivity",
      "Problem Solving & Decision Making": "Action closure, recurrence rate, resolution time",
      "Digital Business & AI": "Time saved, adoption, error reduction",
      "Productivity & Career": "Priority completion, focus time, learning hours"
    };

    var managerMap = {
      "Business Fundamentals": "Review the business model, revenue sources, cost structure and customer value with your team",
      "Business Strategy": "Convert the topic into one strategic priority, one owner and measurable milestones",
      "Sales Management": "Use the concept during daily sales review, target tracking, pipeline review and coaching",
      "Sales Skills": "Practice the skill in customer calls and review the result after each customer interaction",
      "Customer Management": "Apply the concept to your highest-value customers and identify one retention action",
      "Marketing": "Connect the concept to a real campaign, target customer and measurable commercial outcome",
      "Branding": "Check whether customer-facing communication is consistent with the intended brand position",
      "Finance": "Use the concept to identify one financial improvement opportunity in the business",
      "Accounting & P&L": "Review the relevant P&L or financial line and connect it to an operational business driver",
      "Distribution & Operations": "Use the concept during route, stock, distributor and service-level reviews",
      "Retail & Modern Trade": "Translate the concept into outlet-level execution standards and measurable compliance",
      "Key Account Management": "Apply the concept to account planning, customer profitability and joint business planning",
      "Leadership & Management": "Use the concept in team meetings, coaching and performance reviews",
      "People & HR": "Turn the concept into a practical people-management process or team standard",
      "Negotiation": "Prepare the facts, objectives, alternatives and concessions before the next negotiation",
      "Business Development": "Add the concept to your opportunity pipeline and assign a clear next action",
      "KPI & Data Analysis": "Use the concept to identify a performance gap and decide the next management action",
      "Problem Solving & Decision Making": "Apply a structured root-cause and action-planning process to one current problem",
      "Digital Business & AI": "Identify one repetitive business task that can be improved using digital tools or AI",
      "Productivity & Career": "Convert the lesson into one repeatable professional habit"
    };

    var objective =
      objectiveMap[category] ||
      "Understand the concept and apply it to practical business management";

    var kpi =
      kpiMap[category] ||
      "Target, actual, achievement and gap";

    var manager =
      managerMap[category] ||
      "Apply the lesson to one current business situation";

    return {
      objective: objective,
      concept:
        lesson.title +
        " is a practical management concept within " +
        category +
        ". The manager should understand the principle, identify the business situation where it applies and convert it into a measurable action",

      importance:
        "The value of this lesson comes from application rather than memorization. A professional manager should be able to explain the concept, use it in a real situation and measure the result",

      steps: [
        "Define the current business situation and the result you want to improve",
        "Identify the key factors that influence the result",
        "Choose a practical action that the team can execute",
        "Assign an owner, deadline and measurable KPI",
        "Review the result and adjust the action based on evidence"
      ],

      example:
        "Myanmar business example: A sales or business manager identifies a performance gap, discusses the root cause with the team, chooses a focused action for the market or customer group and reviews the KPI during the next management meeting",

      manager: manager,

      kpi: kpi,

      checklist: [
        "I understand the core concept",
        "I can explain why it matters",
        "I identified a real business application",
        "I assigned a measurable KPI",
        "I have a next action and review date"
      ],

      assignment:
        "Choose one real business situation related to this lesson. Write the current situation, target result, three actions, responsible person and KPI. Review the result after implementation",

      takeaways: [
        "Understand the concept before applying it",
        "Connect actions to business outcomes",
        "Use clear ownership and deadlines",
        "Measure performance with the right KPI",
        "Review and improve continuously"
      ]
    };
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

    if (!canOpenLesson(lesson.id)) {
      return renderPremiumGate(lesson);
    }

    var content = getLessonContent(lesson);
    var complete = isCompleted(lesson.id);

    var previous = getLesson(lesson.id - 1);
    var next = getLesson(lesson.id + 1);

    return `
      <div class="lesson-reader">

        <button
          class="btn btn-secondary"
          data-section="lessons"
          style="margin-bottom:14px">
          ← Back to Lessons
        </button>

        <div class="lesson-header">
          <div class="badge">
            ${escapeHtml(lesson.category)}
            • Lesson ${lesson.id} of ${lessons.length}
          </div>

          <h2>${escapeHtml(lesson.title)}</h2>

          <p>
            Professional Business Management Learning
          </p>
        </div>

        <div class="card lesson-section">
          <h3>Objective</h3>
          <p>${escapeHtml(content.objective)}</p>
        </div>

        <div class="card lesson-section">
          <h3>Core Concept</h3>
          <p>${escapeHtml(content.concept)}</p>
        </div>

        <div class="card lesson-section">
          <h3>Why It Matters</h3>
          <p>${escapeHtml(content.importance)}</p>
        </div>

        <div class="card lesson-section">
          <h3>Practical Framework</h3>

          ${content.steps.map(function (step, index) {
            return `
              <div class="framework-step">
                <div class="step-number">${index + 1}</div>
                <div style="font-size:13px;line-height:1.65">
                  ${escapeHtml(step)}
                </div>
              </div>
            `;
          }).join("")}

        </div>

        <div class="card lesson-section">
          <h3>Myanmar Business Example</h3>
          <p>${escapeHtml(content.example)}</p>
        </div>

        <div class="card lesson-section">
          <h3>Manager Application</h3>
          <p>${escapeHtml(content.manager)}</p>
        </div>

        <div class="card lesson-section">
          <h3>KPI</h3>

          <div class="kpi-box">
            ${escapeHtml(content.kpi)}
          </div>
        </div>

        <div class="card lesson-section">
          <h3>Manager Checklist</h3>

          <ul>
            ${content.checklist.map(function (item) {
              return `<li>${escapeHtml(item)}</li>`;
            }).join("")}
          </ul>
        </div>

        <div class="card lesson-section">
          <h3>Assignment</h3>
          <p>${escapeHtml(content.assignment)}</p>
        </div>

        <div class="card lesson-section">
          <h3>Key Takeaways</h3>

          <ul>
            ${content.takeaways.map(function (item) {
              return `<li>${escapeHtml(item)}</li>`;
            }).join("")}
          </ul>
        </div>

        <div class="lesson-footer">

          <div>
            ${
              previous
              ? `
                <button
                  class="btn btn-secondary"
                  data-action="open-lesson"
                  data-id="${previous.id}">
                  ← Previous
                </button>
              `
              : ""
            }
          </div>

          <div style="display:flex;gap:8px;flex-wrap:wrap">

            <button
              class="btn ${complete ? "btn-warning" : "btn-success"}"
              data-action="toggle-complete"
              data-id="${lesson.id}">
              ${complete ? "✓ Completed — Mark Incomplete" : "✓ Mark Lesson Complete"}
            </button>

            ${
              next
              ? `
                <button
                  class="btn btn-primary"
                  data-action="open-lesson"
                  data-id="${next.id}">
                  Next Lesson →
                </button>
              `
              : ""
            }

          </div>

        </div>

      </div>
    `;
  }

  /* =========================================================
     PREMIUM GATE
     ========================================================= */

  function renderPremiumGate(lesson) {

    return `
      <div class="page-head">
        <h2>Premium Membership Required</h2>
        <p>Lesson ${lesson.id} is part of the Premium curriculum</p>
      </div>

      <div class="premium-hero">
        <h2>◆ Premium Business Academy</h2>
        <p>
          Lesson 1 is free. Lesson 2 and above require Premium Membership
        </p>

        <div style="margin-top:20px">
          <button
            class="btn btn-white"
            data-section="premium">
            View Premium Plans
          </button>
        </div>
      </div>

      <div class="card card-pad">
        <h3 style="margin-bottom:8px">
          ${escapeHtml(lesson.title)}
        </h3>

        <p class="muted small">
          Upgrade to Premium to unlock this lesson, advanced business tools and AI Business Coach features
        </p>
      </div>
    `;
  }

  /* =========================================================
     PROGRESS
     ========================================================= */

  function renderProgress() {

    var completed = getCompleted().length;
    var remaining = lessons.length - completed;
    var progress = getProgress();

    return `
      <div class="page-head">
        <h2>My Progress</h2>
        <p>Track your learning performance across the Academy</p>
      </div>

      <div class="grid grid-4">

        <div class="card stat-card">
          <div class="stat-label">Total Lessons</div>
          <div class="stat-value">${lessons.length}</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Completed</div>
          <div class="stat-value">${completed}</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Remaining</div>
          <div class="stat-value">${remaining}</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Progress</div>
          <div class="stat-value">${progress}%</div>
        </div>

      </div>

      <div style="height:18px"></div>

      <div class="card card-pad">
        <div class="section-title">Overall Progress</div>

        <div class="progress-row">
          <span>${completed} of ${lessons.length} lessons</span>
          <strong>${progress}%</strong>
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>

        <button
          class="btn btn-danger"
          style="margin-top:18px"
          data-action="reset-progress">
          Reset Learning Progress
        </button>
      </div>

      <div style="height:22px"></div>

      <div class="section-title">Category Progress</div>

      <div class="grid grid-2">
        ${courseData.map(function (course) {

          var p = getCategoryProgress(course.name);

          return `
            <div class="card card-pad">

              <div style="display:flex;justify-content:space-between;gap:10px">
                <strong style="font-size:13px">
                  ${course.icon} ${escapeHtml(course.name)}
                </strong>

                <strong style="font-size:12px">
                  ${p}%
                </strong>
              </div>

              <div class="progress-wrap">
                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    style="width:${p}%">
                  </div>
                </div>
              </div>

              <p class="muted small" style="margin-top:7px">
                ${course.topics.length} lessons
              </p>

            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  /* =========================================================
     SALES MANAGER
     ========================================================= */

  function getKPI() {
    return getJSON(KEYS.kpi, {
      target: 500,
      actual: 385,
      team: 4,
      customers: 0,
      orders: 0,
      workingDays: 26
    });
  }

  function saveKPI(data) {
    setJSON(KEYS.kpi, data);
  }

  function renderSales() {

    var kpi = getKPI();

    var target = Number(kpi.target) || 0;
    var actual = Number(kpi.actual) || 0;

    var achievement =
      target > 0
      ? Math.round((actual / target) * 100)
      : 0;

    var gap = target - actual;

    if (gap < 0) {
      gap = 0;
    }

    var dailyTarget =
      Number(kpi.workingDays) > 0
      ? target / Number(kpi.workingDays)
      : 0;

    return `
      <div class="page-head">
        <h2>Sales Manager</h2>
        <p>Daily target, execution, team performance and management review</p>
      </div>

      <div class="grid grid-4">

        <div class="card stat-card">
          <div class="stat-label">Monthly Target</div>
          <div class="stat-value">${formatNumber(target)} L</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Actual</div>
          <div class="stat-value">${formatNumber(actual)} L</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Achievement</div>
          <div class="stat-value">${achievement}%</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Gap</div>
          <div class="stat-value">${formatNumber(gap)} L</div>
        </div>

      </div>

      <div style="height:18px"></div>

      <div class="grid grid-2">

        <div class="card card-pad">

          <div class="section-title">Sales Target Control</div>

          <div class="kpi-input-grid">

            <div class="form-group">
              <label>Monthly Target</label>
              <input id="salesTarget" class="input" type="number" value="${target}">
            </div>

            <div class="form-group">
              <label>Actual Sales</label>
              <input id="salesActual" class="input" type="number" value="${actual}">
            </div>

            <div class="form-group">
              <label>Working Days</label>
              <input id="workingDays" class="input" type="number" value="${kpi.workingDays}">
            </div>

          </div>

          <button
            class="btn btn-primary"
            style="margin-top:15px"
            data-action="save-sales-kpi">
            Save Sales KPI
          </button>

        </div>

        <div class="card card-pad">

          <div class="section-title">Daily Execution</div>

          <div class="result-box">
            <div class="muted small">Daily Target</div>
            <div class="result-big">
              ${dailyTarget.toFixed(1)} L
            </div>
          </div>

          <div class="result-box" style="margin-top:10px">
            <div class="muted small">Current Gap</div>
            <div class="result-big">
              ${gap.toFixed(1)} L
            </div>
          </div>

        </div>

      </div>

      <div style="height:20px"></div>

      <div class="grid grid-3">

        <div class="card focus-card">
          <div class="focus-icon">🎯</div>
          <h3>Target Control</h3>
          <p>Break monthly target into daily, territory and salesperson targets</p>
        </div>

        <div class="card focus-card">
          <div class="focus-icon">👥</div>
          <h3>Team Coaching</h3>
          <p>Review individual performance, activity and execution barriers</p>
        </div>

        <div class="card focus-card">
          <div class="focus-icon">📋</div>
          <h3>Daily Review</h3>
          <p>Check yesterday actual, today's target, pipeline and action plan</p>
        </div>

      </div>
    `;
  }

  /* =========================================================
     KPI
     ========================================================= */

  function renderKPI() {

    var data = getKPI();

    var target = Number(data.target) || 0;
    var actual = Number(data.actual) || 0;

    var achievement =
      target > 0
      ? Math.round(actual / target * 100)
      : 0;

    var gap = target - actual;

    return `
      <div class="page-head">
        <h2>KPI & Analytics</h2>
        <p>Target vs Actual performance dashboard</p>
      </div>

      <div class="grid grid-4">

        <div class="card stat-card">
          <div class="stat-label">Target</div>
          <div class="stat-value">${formatNumber(target)}</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Actual</div>
          <div class="stat-value">${formatNumber(actual)}</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Achievement</div>
          <div class="stat-value">${achievement}%</div>
        </div>

        <div class="card stat-card">
          <div class="stat-label">Gap</div>
          <div class="stat-value">${formatNumber(gap < 0 ? 0 : gap)}</div>
        </div>

      </div>

      <div style="height:18px"></div>

      <div class="card card-pad">

        <div class="section-title">Achievement</div>

        <div class="progress-row">
          <span>Target vs Actual</span>
          <strong>${achievement}%</strong>
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width:${Math.min(achievement,100)}%"></div>
        </div>

      </div>

      <div style="height:18px"></div>

      <div class="grid grid-3">

        <div class="card card-pad">
          <div class="section-title">Team</div>
          <div class="result-big">${formatNumber(data.team)}</div>
          <div class="muted small">Team members</div>
        </div>

        <div class="card card-pad">
          <div class="section-title">Customers</div>
          <div class="result-big">${formatNumber(data.customers)}</div>
          <div class="muted small">Active customers</div>
        </div>

        <div class="card card-pad">
          <div class="section-title">Orders</div>
          <div class="result-big">${formatNumber(data.orders)}</div>
          <div class="muted small">Current orders</div>
        </div>

      </div>

      <div style="height:18px"></div>

      <div class="card card-pad">

        <div class="section-title">Additional KPI Data</div>

        <div class="kpi-input-grid">

          <div class="form-group">
            <label>Team Members</label>
            <input id="kpiTeam" class="input" type="number" value="${data.team}">
          </div>

          <div class="form-group">
            <label>Active Customers</label>
            <input id="kpiCustomers" class="input" type="number" value="${data.customers}">
          </div>

          <div class="form-group">
            <label>Orders</label>
            <input id="kpiOrders" class="input" type="number" value="${data.orders}">
          </div>

        </div>

        <button
          class="btn btn-primary"
          style="margin-top:15px"
          data-action="save-kpi-data">
          Save KPI Data
        </button>

      </div>
    `;
  }

  /* =========================================================
     REPORTS
     ========================================================= */

  function renderReports() {

    var profile = getProfile();
    var kpi = getKPI();

    var achievement =
      Number(kpi.target) > 0
      ? Math.round(Number(kpi.actual) / Number(kpi.target) * 100)
      : 0;

    return `
      <div class="page-head">
        <h2>Business Reports</h2>
        <p>Management summary for review and decision making</p>
      </div>

      <div class="card card-pad">

        <div class="section-title">
          Business Performance Report
        </div>

        <p class="muted small">
          Manager: ${escapeHtml(profile.name)}
        </p>

        <div style="height:15px"></div>

        <div class="grid grid-2">

          <div class="result-box">
            <div class="muted small">Sales Target</div>
            <div class="result-big">${formatNumber(kpi.target)} L</div>
          </div>

          <div class="result-box">
            <div class="muted small">Actual Sales</div>
            <div class="result-big">${formatNumber(kpi.actual)} L</div>
          </div>

          <div class="result-box">
            <div class="muted small">Achievement</div>
            <div class="result-big">${achievement}%</div>
          </div>

          <div class="result-box">
            <div class="muted small">Learning Progress</div>
            <div class="result-big">${getProgress()}%</div>
          </div>

        </div>

        <button
          class="btn btn-dark"
          style="margin-top:18px"
          data-action="print-report">
          Print / Save Report
        </button>

      </div>

      <div style="height:18px"></div>

      <div class="grid grid-3">

        <div class="card focus-card">
          <div class="focus-icon">📅</div>
          <h3>Daily Review</h3>
          <p>Review target, actual, gap and today's priority actions</p>
        </div>

        <div class="card focus-card">
          <div class="focus-icon">📊</div>
          <h3>Weekly Review</h3>
          <p>Compare weekly performance and identify execution patterns</p>
        </div>

        <div class="card focus-card">
          <div class="focus-icon">🎯</div>
          <h3>Action Plan</h3>
          <p>Convert management findings into owners, deadlines and KPIs</p>
        </div>

      </div>
    `;
  }

  /* =========================================================
     BUSINESS TOOLS
     ========================================================= */

  function renderTools() {

    return `
      <div class="page-head">
        <h2>Business Tools</h2>
        <p>Practical calculators for daily business decisions</p>
      </div>

      <div class="grid grid-2">

        <div class="card tool-card">

          <h3>Pricing / Profit / Margin</h3>

          <p>
            Calculate selling price, profit and gross margin
          </p>

          <div class="form-group">
            <label>Cost</label>
            <input id="priceCost" class="input" type="number" placeholder="0">
          </div>

          <div class="form-group" style="margin-top:10px">
            <label>Selling Price</label>
            <input id="priceSelling" class="input" type="number" placeholder="0">
          </div>

          <button
            class="btn btn-primary"
            style="margin-top:12px"
            data-action="calculate-price">
            Calculate
          </button>

          <div id="priceResult" class="tool-result">
            Enter values and calculate
          </div>

        </div>

        <div class="card tool-card">

          <h3>Break-even Calculator</h3>

          <p>
            Calculate break-even units from fixed cost and contribution
          </p>

          <div class="form-group">
            <label>Fixed Cost</label>
            <input id="beFixed" class="input" type="number" placeholder="0">
          </div>

          <div class="form-group" style="margin-top:10px">
            <label>Selling Price / Unit</label>
            <input id="bePrice" class="input" type="number" placeholder="0">
          </div>

          <div class="form-group" style="margin-top:10px">
            <label>Variable Cost / Unit</label>
            <input id="beVariable" class="input" type="number" placeholder="0">
          </div>

          <button
            class="btn btn-primary"
            style="margin-top:12px"
            data-action="calculate-break-even">
            Calculate
          </button>

          <div id="beResult" class="tool-result">
            Enter values and calculate
          </div>

        </div>

        <div class="card tool-card">

          <h3>Sales Target Breakdown</h3>

          <p>
            Convert monthly target into daily target
          </p>

          <div class="form-group">
            <label>Monthly Target</label>
            <input id="targetAmount" class="input" type="number" placeholder="0">
          </div>

          <div class="form-group" style="margin-top:10px">
            <label>Working Days</label>
            <input id="targetDays" class="input" type="number" value="26">
          </div>

          <button
            class="btn btn-primary"
            style="margin-top:12px"
            data-action="calculate-target">
            Calculate
          </button>

          <div id="targetResult" class="tool-result">
            Enter values and calculate
          </div>

        </div>

        <div class="card tool-card">

          <h3>Growth Calculator</h3>

          <p>
            Calculate growth percentage from previous to current result
          </p>

          <div class="form-group">
            <label>Previous</label>
            <input id="growthPrevious" class="input" type="number" placeholder="0">
          </div>

          <div class="form-group" style="margin-top:10px">
            <label>Current</label>
            <input id="growthCurrent" class="input" type="number" placeholder="0">
          </div>

          <button
            class="btn btn-primary"
            style="margin-top:12px"
            data-action="calculate-growth">
            Calculate
          </button>

          <div id="growthResult" class="tool-result">
            Enter values and calculate
          </div>

        </div>

      </div>
    `;
  }

  /* =========================================================
     AI BUSINESS TOOLS
     ========================================================= */

  function renderAITools() {

    return `
      <div class="page-head">
        <h2>AI Business Tools</h2>
        <p>Structured workflows for practical management work</p>
      </div>

      <div class="grid grid-2">

        <div class="card tool-card">
          <h3>📅 Daily Sales Action Plan</h3>
          <p>Build a focused daily execution plan around target, customers and activities</p>
          <button
            class="btn btn-primary"
            data-action="ai-tool"
            data-tool="daily-sales">
            Generate Plan
          </button>
        </div>

        <div class="card tool-card">
          <h3>🎯 Target Breakdown</h3>
          <p>Break a monthly target into daily and team execution levels</p>
          <button
            class="btn btn-primary"
            data-action="ai-tool"
            data-tool="target-breakdown">
            Generate Breakdown
          </button>
        </div>

        <div class="card tool-card">
          <h3>🔎 Root Cause Analysis</h3>
          <p>Structure a business problem using root-cause thinking</p>
          <button
            class="btn btn-primary"
            data-action="ai-tool"
            data-tool="root-cause">
            Start Analysis
          </button>
        </div>

        <div class="card tool-card">
          <h3>👥 Coaching Questions</h3>
          <p>Generate practical questions for sales team coaching</p>
          <button
            class="btn btn-primary"
            data-action="ai-tool"
            data-tool="coaching">
            Generate Questions
          </button>
        </div>

      </div>

      <div id="aiToolResult" style="margin-top:18px"></div>
    `;
  }

  function runAITool(tool) {

    var output = "";

    if (tool === "daily-sales") {
      output =
        "DAILY SALES ACTION PLAN\n\n" +
        "1. Review yesterday target vs actual\n" +
        "2. Identify today's highest-value customers\n" +
        "3. Prioritize open opportunities and overdue follow-ups\n" +
        "4. Set salesperson-level activity targets\n" +
        "5. Review collection and stock availability\n" +
        "6. Conduct end-of-day actual vs target review\n\n" +
        "KPI: Sales achievement %, productive calls, orders, conversion and collection";

    } else if (tool === "target-breakdown") {
      output =
        "TARGET BREAKDOWN FRAMEWORK\n\n" +
        "Monthly Target → Working Days → Daily Target → Territory Target → Salesperson Target\n\n" +
        "Management rule:\n" +
        "Target should be converted into measurable execution activities\n\n" +
        "Review:\n" +
        "Target / Actual / Achievement % / Gap / Action";

    } else if (tool === "root-cause") {
      output =
        "ROOT CAUSE ANALYSIS\n\n" +
        "1. Define the exact problem\n" +
        "2. Quantify the gap\n" +
        "3. Ask Why repeatedly\n" +
        "4. Separate symptoms from root causes\n" +
        "5. Identify controllable causes\n" +
        "6. Create corrective action\n" +
        "7. Assign owner and deadline\n" +
        "8. Review whether the problem recurs";

    } else if (tool === "coaching") {
      output =
        "SALES COACHING QUESTIONS\n\n" +
        "1. What is your current target and actual?\n" +
        "2. Which customers are driving the gap?\n" +
        "3. What opportunities are in your pipeline?\n" +
        "4. Which customer objection is blocking the sale?\n" +
        "5. What action will you take today?\n" +
        "6. What support do you need from your manager?\n" +
        "7. What KPI will prove improvement?";
    }

    var result = document.getElementById("aiToolResult");

    if (result) {
      result.innerHTML = `
        <div class="card ai-response">
          ${escapeHtml(output)}
        </div>
      `;
    }
  }

  /* =========================================================
     AI BUSINESS COACH
     ========================================================= */

  function renderCoach() {

    return `
      <div class="page-head">
        <h2>AI Business Coach</h2>
        <p>Practical business problem solving for managers</p>
      </div>

      <div class="card ai-box">

        <div class="section-title">
          Ask your business question
        </div>

        <textarea
          id="aiPrompt"
          class="ai-prompt"
          placeholder="Example: My sales team is below target. Help me identify the root causes and create a 7-day action plan"></textarea>

        <div class="quick-prompts">

          <button
            class="quick-prompt"
            data-action="quick-prompt"
            data-prompt="My sales team is below target. Give me a practical root cause analysis and action plan">
            Sales below target
          </button>

          <button
            class="quick-prompt"
            data-action="quick-prompt"
            data-prompt="Help me improve sales team productivity and daily execution">
            Team productivity
          </button>

          <button
            class="quick-prompt"
            data-action="quick-prompt"
            data-prompt="Give me practical ideas to increase customer retention and repeat sales">
            Customer retention
          </button>

          <button
            class="quick-prompt"
            data-action="quick-prompt"
            data-prompt="Help me prepare a professional weekly business review">
            Weekly review
          </button>

        </div>

        <button
          class="btn btn-primary"
          data-action="ask-coach">
          Ask AI Business Coach
        </button>

        <div id="aiResponse"></div>

      </div>
    `;
  }

  /* =========================================================
     AI API
     ========================================================= */

  function fallbackAI(prompt) {

    return (
      "AI Business Coach — Practical Response\n\n" +
      "Your business question:\n" +
      prompt +
      "\n\n" +
      "Recommended Management Approach\n\n" +
      "1. Define the exact business problem and quantify the gap\n" +
      "2. Separate symptoms from root causes\n" +
      "3. Identify the top three controllable causes\n" +
      "4. Create specific actions with owners and deadlines\n" +
      "5. Measure the result using clear KPIs\n" +
      "6. Review progress daily or weekly depending on the problem\n\n" +
      "Suggested KPIs\n" +
      "• Target vs Actual\n" +
      "• Achievement %\n" +
      "• Gap\n" +
      "• Productivity\n" +
      "• Conversion\n" +
      "• Customer retention\n\n" +
      "Action Plan\n" +
      "Today: define the gap and top causes\n" +
      "Tomorrow: execute the highest-impact action\n" +
      "This week: review KPI movement and adjust execution"
    );
  }

  function askAI() {

    var input = document.getElementById("aiPrompt");
    var response = document.getElementById("aiResponse");

    if (!input || !response) {
      return;
    }

    var prompt = input.value.trim();

    if (!prompt) {
      showToast("Please enter a business question");
      return;
    }

    if (state.aiLoading) {
      return;
    }

    state.aiLoading = true;

    response.innerHTML = `
      <div class="ai-response">
        AI Business Coach is preparing your answer...
      </div>
    `;

    var fullPrompt =
      "You are an AI Business Coach for a Myanmar business manager.\n\n" +
      "Give practical, professional and actionable management advice.\n" +
      "Use clear steps, KPIs, numbers, priorities and action plans where appropriate.\n" +
      "Answer in Burmese when the user asks in Burmese.\n" +
      "Avoid unnecessary theory.\n\n" +
      "User question:\n" +
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
        throw new Error("AI server unavailable");
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
        throw new Error("No AI answer");
      }

      response.innerHTML = `
        <div class="ai-response">
          ${escapeHtml(answer)}
        </div>
      `;

      state.aiLoading = false;
    })
    .catch(function () {

      response.innerHTML = `
        <div class="ai-response">
          ${escapeHtml(fallbackAI(prompt))}
        </div>
      `;

      state.aiLoading = false;
    });
  }

  /* =========================================================
     PREMIUM PAGE
     ========================================================= */

  function renderPremium() {

    var active = isPremium();

    return `
      <div class="premium-hero">

        <h2>◆ Premium Membership</h2>

        <p>
          Unlock Lesson 2+, advanced business tools and AI Business Coach
        </p>

        <div style="margin-top:15px">
          <strong>
            Current Status: ${active ? "PRO" : "BASIC"}
          </strong>
        </div>

      </div>

      <div class="grid grid-3">

        ${renderPlan("1 Month", "25,000 Ks", "1 month", false)}

        ${renderPlan("3 Months", "60,000 Ks", "3 months", true)}

        ${renderPlan("6 Months", "100,000 Ks", "6 months", false)}

      </div>

      <div style="height:18px"></div>

      <div class="card payment-box">

        <div class="section-title">Payment Methods</div>

        <span class="payment-method">KPay</span>
        <span class="payment-method">CB Bank</span>

        <p class="muted small" style="margin-top:12px">
          Payment account details can be configured separately
        </p>

      </div>

      <div style="height:18px"></div>

      <div class="card payment-box">

        <div class="section-title">
          Membership Activation
        </div>

        <p class="muted small" style="margin-bottom:12px">
          Enter an activation code provided by the Academy administrator
        </p>

        <div style="display:flex;gap:8px;flex-wrap:wrap">

          <input
            id="activationCode"
            class="input"
            style="max-width:350px"
            placeholder="Enter activation code">

          <button
            class="btn btn-primary"
            data-action="activate-premium">
            Activate
          </button>

        </div>

        <p class="muted small" style="margin-top:12px">
          No automatic premium activation is performed from payment information
        </p>

      </div>

      <div style="height:18px"></div>

      <div class="card card-pad">

        <div class="section-title">
          Premium Includes
        </div>

        <div class="grid grid-2">

          <div class="result-box">
            ✓ Lesson 1 free
          </div>

          <div class="result-box">
            ✓ Lesson 2+ full curriculum
          </div>

          <div class="result-box">
            ✓ Business Tools
          </div>

          <div class="result-box">
            ✓ AI Business Tools
          </div>

          <div class="result-box">
            ✓ AI Business Coach
          </div>

          <div class="result-box">
            ✓ Professional management system
          </div>

        </div>

      </div>
    `;
  }

  function renderPlan(name, price, period, featured) {

    return `
      <div class="card plan-card ${featured ? "featured" : ""}">

        <div class="plan-name">${name}</div>

        <div class="plan-price">${price}</div>

        <div class="plan-period">${period}</div>

        <ul>
          <li>✓ 260 Business Lessons</li>
          <li>✓ Lesson 2+ Premium</li>
          <li>✓ Business Tools</li>
          <li>✓ AI Business Coach</li>
          <li>✓ KPI & Analytics</li>
        </ul>

        <button
          class="btn btn-primary"
          data-action="payment-info"
          data-plan="${name}">
          Choose ${name}
        </button>

      </div>
    `;
  }

  /* =========================================================
     SETTINGS
     ========================================================= */

  function renderSettings() {

    var profile = getProfile();

    return `
      <div class="page-head">
        <h2>Settings</h2>
        <p>Manage your profile and local application data</p>
      </div>

      <div class="grid grid-2">

        <div class="card card-pad">

          <div class="section-title">Profile</div>

          <div class="setting-row">

            <label>Display Name</label>

            <input
              id="settingName"
              class="input"
              value="${escapeHtml(profile.name)}">

          </div>

          <div class="setting-row">

            <label>Role</label>

            <input
              id="settingRole"
              class="input"
              value="${escapeHtml(profile.role)}">

          </div>

          <button
            class="btn btn-primary"
            style="margin-top:15px"
            data-action="save-settings">
            Save Profile
          </button>

        </div>

        <div class="card card-pad">

          <div class="section-title">Application</div>

          <div class="result-box">
            <strong>Aung Business Academy</strong>
            <p class="muted small" style="margin-top:5px">
              V15.1 Professional Business Management System
            </p>
          </div>

          <div class="result-box" style="margin-top:10px">
            <strong>${lessons.length} Lessons</strong>
            <p class="muted small" style="margin-top:5px">
              20 professional business categories
            </p>
          </div>

          <button
            class="btn btn-danger"
            style="margin-top:15px"
            data-action="reset-all">
            Reset Local App Data
          </button>

        </div>

      </div>
    `;
  }

  /* =========================================================
     RENDER
     ========================================================= */

  function renderCurrent() {

    var app = document.getElementById("app");

    if (!app) {
      return;
    }

    try {

      var html = "";

      if (state.lessonId !== null) {
        html = renderLessonReader();
      } else {

        switch (state.section) {

          case "dashboard":
            html = renderDashboard();
            break;

          case "academy":
            html = renderAcademy();
            break;

          case "lessons":
            html = renderLessons();
            break;

          case "progress":
            html = renderProgress();
            break;

          case "sales":
            html = renderSales();
            break;

          case "kpi":
            html = renderKPI();
            break;

          case "reports":
            html = renderReports();
            break;

          case "tools":
            html = renderTools();
            break;

          case "ai-tools":
            html = renderAITools();
            break;

          case "coach":
            html = renderCoach();
            break;

          case "premium":
            html = renderPremium();
            break;

          case "settings":
            html = renderSettings();
            break;

          default:
            state.section = "dashboard";
            html = renderDashboard();
        }
      }

      app.innerHTML = html;

    } catch (error) {

      console.error("ABA Render Error:", error);

      app.innerHTML = `
        <div class="error-card">
          <h2>Aung Business Academy</h2>
          <p>
            The page could not be rendered correctly
          </p>

          <button
            class="btn btn-primary"
            style="margin-top:15px"
            data-section="dashboard">
            Return to Dashboard
          </button>
        </div>
      `;
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
     TOAST
     ========================================================= */

  function showToast(message) {

    var root = document.getElementById("toastRoot");

    if (!root) {
      return;
    }

    root.innerHTML =
      '<div class="toast">' +
      escapeHtml(message) +
      "</div>";

    window.setTimeout(function () {
      root.innerHTML = "";
    }, 2600);
  }

  /* =========================================================
     CALCULATORS
     ========================================================= */

  function calculatePrice() {

    var cost = Number(document.getElementById("priceCost").value) || 0;
    var selling = Number(document.getElementById("priceSelling").value) || 0;

    var profit = selling - cost;

    var margin =
      selling > 0
      ? (profit / selling) * 100
      : 0;

    var result = document.getElementById("priceResult");

    if (result) {
      result.innerHTML =
        "Profit: <strong>" +
        profit.toFixed(2) +
        "</strong><br>" +
        "Gross Margin: <strong>" +
        margin.toFixed(1) +
        "%</strong>";
    }
  }

  function calculateBreakEven() {

    var fixed = Number(document.getElementById("beFixed").value) || 0;
    var price = Number(document.getElementById("bePrice").value) || 0;
    var variable = Number(document.getElementById("beVariable").value) || 0;

    var contribution = price - variable;

    var units =
      contribution > 0
      ? fixed / contribution
      : 0;

    var result = document.getElementById("beResult");

    if (result) {

      if (contribution <= 0) {
        result.textContent =
          "Selling price must be greater than variable cost";
      } else {
        result.innerHTML =
          "Contribution / Unit: <strong>" +
          contribution.toFixed(2) +
          "</strong><br>" +
          "Break-even Units: <strong>" +
          Math.ceil(units) +
          "</strong>";
      }
    }
  }

  function calculateTarget() {

    var amount =
      Number(document.getElementById("targetAmount").value) || 0;

    var days =
      Number(document.getElementById("targetDays").value) || 0;

    var daily =
      days > 0
      ? amount / days
      : 0;

    var result = document.getElementById("targetResult");

    if (result) {
      result.innerHTML =
        "Daily Target: <strong>" +
        daily.toFixed(2) +
        "</strong>";
    }
  }

  function calculateGrowth() {

    var previous =
      Number(document.getElementById("growthPrevious").value) || 0;

    var current =
      Number(document.getElementById("growthCurrent").value) || 0;

    var growth =
      previous !== 0
      ? ((current - previous) / previous) * 100
      : 0;

    var result =
      document.getElementById("growthResult");

    if (result) {
      result.innerHTML =
        "Growth: <strong>" +
        growth.toFixed(1) +
        "%</strong>";
    }
  }

  /* =========================================================
     MODAL
     ========================================================= */

  function showPremiumModal() {

    var root = document.getElementById("modalRoot");

    if (!root) {
      return;
    }

    root.innerHTML = `
      <div class="modal-backdrop" data-action="close-modal">

        <div class="modal" onclick="event.stopPropagation()">

          <div class="modal-head">
            <h2>◆ Premium Membership</h2>

            <button
              class="modal-close"
              data-action="close-modal">
              ×
            </button>
          </div>

          <p class="muted small">
            Lesson 1 is free. Lesson 2 and above require Premium Membership
          </p>

          <div style="height:15px"></div>

          <div class="grid grid-3">

            <div class="result-box">
              <strong>1 Month</strong>
              <div style="font-size:20px;font-weight:800;margin-top:6px">
                25,000 Ks
              </div>
            </div>

            <div class="result-box">
              <strong>3 Months</strong>
              <div style="font-size:20px;font-weight:800;margin-top:6px">
                60,000 Ks
              </div>
            </div>

            <div class="result-box">
              <strong>6 Months</strong>
              <div style="font-size:20px;font-weight:800;margin-top:6px">
                100,000 Ks
              </div>
            </div>

          </div>

          <div style="height:15px"></div>

          <p class="small">
            Payment Methods: <strong>KPay</strong> / <strong>CB Bank</strong>
          </p>

          <button
            class="btn btn-primary"
            style="margin-top:15px"
            data-section="premium"
            data-action="close-modal">
            Open Premium Membership
          </button>

        </div>

      </div>
    `;
  }

  function closeModal() {

    var root = document.getElementById("modalRoot");

    if (root) {
      root.innerHTML = "";
    }
  }

  /* =========================================================
     EVENT DELEGATION
     ========================================================= */

  function handleClick(event) {

    var target = event.target;

    var button = target.closest
      ? target.closest("[data-action], [data-section]")
      : null;

    if (!button) {
      return;
    }

    var action = button.getAttribute("data-action");
    var section = button.getAttribute("data-section");

    if (section) {

      if (action === "close-modal") {
        closeModal();
      }

      goToSection(section);
      return;
    }

    if (!action) {
      return;
    }

    switch (action) {

      case "open-lesson":

        var id = Number(button.getAttribute("data-id"));

        if (!canOpenLesson(id)) {
          showPremiumModal();
          return;
        }

        state.lessonId = id;
        state.section = "lessons";

        updatePageTitle();
        updateActiveNav();
        renderCurrent();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        break;

      case "toggle-complete":

        toggleCompleted(
          Number(button.getAttribute("data-id"))
        );

        renderCurrent();

        break;

      case "reset-progress":

        resetProgress();

        break;

      case "filter-category":

        state.category =
          button.getAttribute("data-category") || "All";

        state.search = "";
        state.section = "lessons";
        state.lessonId = null;

        updatePageTitle();
        updateActiveNav();
        renderCurrent();

        break;

      case "calculate-price":

        calculatePrice();

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

      case "ask-coach":

        askAI();

        break;

      case "quick-prompt":

        var prompt =
          button.getAttribute("data-prompt") || "";

        var promptInput =
          document.getElementById("aiPrompt");

        if (promptInput) {
          promptInput.value = prompt;
          promptInput.focus();
        }

        break;

      case "ai-tool":

        runAITool(
          button.getAttribute("data-tool")
        );

        break;

      case "save-sales-kpi":

        saveSalesKPI();

        break;

      case "save-kpi-data":

        saveAdditionalKPI();

        break;

      case "save-settings":

        saveSettings();

        break;

      case "reset-all":

        resetAllData();

        break;

      case "payment-info":

        showToast(
          "Payment instructions can be configured in Premium Membership"
        );

        break;

      case "activate-premium":

        activatePremium();

        break;

      case "close-modal":

        closeModal();

        break;

      case "print-report":

        printReport();

        break;
    }
  }

  /* =========================================================
     SAVE SALES KPI
     ========================================================= */

  function saveSalesKPI() {

    var data = getKPI();

    var target =
      Number(document.getElementById("salesTarget").value) || 0;

    var actual =
      Number(document.getElementById("salesActual").value) || 0;

    var days =
      Number(document.getElementById("workingDays").value) || 26;

    data.target = target;
    data.actual = actual;
    data.workingDays = days;

    saveKPI(data);

    showToast("Sales KPI saved");

    renderCurrent();
  }

  function saveAdditionalKPI() {

    var data = getKPI();

    data.team =
      Number(document.getElementById("kpiTeam").value) || 0;

    data.customers =
      Number(document.getElementById("kpiCustomers").value) || 0;

    data.orders =
      Number(document.getElementById("kpiOrders").value) || 0;

    saveKPI(data);

    showToast("KPI data saved");

    renderCurrent();
  }

  /* =========================================================
     SETTINGS
     ========================================================= */

  function saveSettings() {

    var name =
      document.getElementById("settingName").value.trim();

    var role =
      document.getElementById("settingRole").value.trim();

    saveProfile(
      name || "Aung Zar Ni Win",
      role || "Business Manager"
    );

    showToast("Profile saved");

    renderCurrent();
  }

  function resetAllData() {

    var confirmed = window.confirm(
      "Reset local application data?\n\nThis will remove your local profile, KPI and lesson progress"
    );

    if (!confirmed) {
      return;
    }

    safeRemove(KEYS.completed);
    safeRemove(KEYS.profile);
    safeRemove(KEYS.kpi);
    safeRemove(KEYS.settings);

    showToast("Local app data reset");

    updateProfileUI();

    state.section = "dashboard";
    state.lessonId = null;

    updatePageTitle();
    updateActiveNav();
    renderCurrent();
  }

  /* =========================================================
     PREMIUM ACTIVATION
     ========================================================= */

  function activatePremium() {

    var input =
      document.getElementById("activationCode");

    if (!input) {
      return;
    }

    var code = input.value.trim();

    if (!code) {
      showToast("Please enter an activation code");
      return;
    }

    /*
      Real activation codes should be managed by the
      Academy administrator or backend.

      This demo does NOT invent a fake code.
    */

    showToast(
      "Activation code submitted for verification"
    );

    input.value = "";
  }

  /* =========================================================
     PRINT
     ========================================================= */

  function printReport() {

    var kpi = getKPI();

    var achievement =
      Number(kpi.target) > 0
      ? Math.round(Number(kpi.actual) / Number(kpi.target) * 100)
      : 0;

    var profile = getProfile();

    var report =
      "<html><head><title>ABA Business Report</title>" +
      "<style>" +
      "body{font-family:Arial;padding:40px;color:#172033}" +
      "h1{font-size:24px}" +
      "p{font-size:14px}" +
      ".box{border:1px solid #ddd;padding:15px;margin:10px 0}" +
      "</style></head><body>" +

      "<h1>Aung Business Academy</h1>" +

      "<p>Business Performance Report</p>" +

      "<div class='box'>Manager: " +
      escapeHtml(profile.name) +
      "</div>" +

      "<div class='box'>Sales Target: " +
      formatNumber(kpi.target) +
      " L</div>" +

      "<div class='box'>Actual Sales: " +
      formatNumber(kpi.actual) +
      " L</div>" +

      "<div class='box'>Achievement: " +
      achievement +
      "%</div>" +

      "<div class='box'>Learning Progress: " +
      getProgress() +
      "%</div>" +

      "</body></html>";

    var win = window.open("", "_blank");

    if (!win) {
      showToast("Please allow pop-ups to print the report");
      return;
    }

    win.document.write(report);
    win.document.close();

    win.focus();

    window.setTimeout(function () {
      win.print();
    }, 300);
  }

  /* =========================================================
     INPUT EVENTS
     ========================================================= */

  function handleInput(event) {

    var id = event.target.id;

    if (id === "lessonSearch") {

      state.search = event.target.value;
      renderCurrent();

      var searchInput =
        document.getElementById("lessonSearch");

      if (searchInput) {
        searchInput.focus();

        try {
          searchInput.setSelectionRange(
            searchInput.value.length,
            searchInput.value.length
          );
        } catch (e) {}
      }
    }
  }

  function handleChange(event) {

    if (event.target.id === "categoryFilter") {

      state.category = event.target.value;
      state.search = "";

      renderCurrent();
    }
  }

  /* =========================================================
     INITIALIZATION
     ========================================================= */

  function init() {

    /*
      Important stability checks
    */

    if (lessons.length !== 260) {
      console.warn(
        "ABA lesson count is " + lessons.length
      );
    }

    updateProfileUI();
    updatePageTitle();
    updateActiveNav();

    renderCurrent();

    var menuButton =
      document.getElementById("menuButton");

    if (menuButton) {
      menuButton.addEventListener(
        "click",
        openMobileMenu
      );
    }

    var overlay =
      document.getElementById("mobileOverlay");

    if (overlay) {
      overlay.addEventListener(
        "click",
        closeMobileMenu
      );
    }

    document.addEventListener(
      "click",
      handleClick
    );

    document.addEventListener(
      "input",
      handleInput
    );

    document.addEventListener(
      "change",
      handleChange
    );

    window.addEventListener(
      "error",
      function (event) {
        console.error(
          "ABA Runtime Error:",
          event.error || event.message
        );
      }
    );
  }

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {
    lessons: lessons,
    courseData: courseData,
    getLessonContent: getLessonContent,
    goToSection: goToSection,
    openLesson: function (id) {

      id = Number(id);

      if (!canOpenLesson(id)) {
        showPremiumModal();
        return;
      }

      state.section = "lessons";
      state.lessonId = id;

      updatePageTitle();
      updateActiveNav();
      renderCurrent();
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
