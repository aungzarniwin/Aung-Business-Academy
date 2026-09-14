/* =========================================================
   AUNG BUSINESS ACADEMY V8.0 PROFESSIONAL
   FULL APP.JS
   Mobile Responsive + 230 Burmese Lessons
   ========================================================= */

(() => {
  "use strict";

  const STORAGE_KEY = "aba_completed_lessons";

  /* =========================================================
     LESSON DATA
     ========================================================= */

  const courseData = [
    {
      key: "business",
      icon: "🏢",
      name: "Business Fundamentals",
      description: "Business အခြေခံနှင့် Manager Mindset",
      titles: [
        "Business ဆိုတာဘာလဲ",
        "Business Owner ရဲ့အမြင်",
        "Customer Value ဆိုတာဘာလဲ",
        "Value Proposition တည်ဆောက်ခြင်း",
        "Business Model အခြေခံ",
        "Revenue Model နားလည်ခြင်း",
        "Customer Segment ခွဲခြားခြင်း",
        "Market နားလည်ခြင်း",
        "Business Goal သတ်မှတ်ခြင်း",
        "Business Process အခြေခံ",
        "Business Risk နားလည်ခြင်း",
        "Business Growth အခြေခံ",
        "Sustainable Business တည်ဆောက်ခြင်း",
        "Business Culture",
        "Business Manager Mindset"
      ]
    },
    {
      key: "strategy",
      icon: "🎯",
      name: "Business Strategy",
      description: "Strategy, Planning နှင့် Market Growth",
      titles: [
        "Strategic Thinking အခြေခံ",
        "Vision နှင့် Mission",
        "Business Strategy တည်ဆောက်ခြင်း",
        "SWOT Analysis",
        "Market Analysis",
        "Competitor Analysis",
        "Competitive Advantage",
        "Market Positioning",
        "Growth Strategy",
        "Market Expansion",
        "Product Expansion",
        "Strategic Priorities",
        "Annual Business Planning",
        "Execution Strategy",
        "Strategy Review"
      ]
    },
    {
      key: "sales-management",
      icon: "💼",
      name: "Sales Management",
      description: "Sales Manager အတွက် အဓိကကျသော Management Skills",
      titles: [
        "Sales Management အခြေခံ",
        "Sales Manager ရဲ့တာဝန်",
        "Sales Target သတ်မှတ်ခြင်း",
        "Target Breakdown",
        "Monthly Sales Planning",
        "Daily Sales Execution",
        "Territory Management",
        "Sales Team Structure",
        "Sales Route Planning",
        "Sales Forecasting",
        "Sales Pipeline Management",
        "Distributor Management",
        "Sales Meeting Management",
        "Field Coaching",
        "Performance Review",
        "Sales Incentive",
        "Sales Productivity",
        "Sales Control",
        "Sales Recovery Plan",
        "Sales Manager Action Plan"
      ]
    },
    {
      key: "sales-skills",
      icon: "🤝",
      name: "Sales Skills",
      description: "Professional Selling နှင့် Closing Skills",
      titles: [
        "Selling အခြေခံ",
        "Prospecting",
        "Lead Generation",
        "Customer Approach",
        "Opening Conversation",
        "Needs Analysis",
        "Questioning Skills",
        "Active Listening",
        "Consultative Selling",
        "Product Presentation",
        "Benefit Selling",
        "Solution Selling",
        "Objection Handling",
        "Price Objection",
        "Competitor Objection",
        "Negotiation in Sales",
        "Closing Techniques",
        "Follow-up",
        "Repeat Sales",
        "Professional Selling Mindset"
      ]
    },
    {
      key: "customer",
      icon: "👥",
      name: "Customer Management",
      description: "Customer Relationship နှင့် Retention",
      titles: [
        "Customer Management အခြေခံ",
        "Customer Relationship",
        "Customer Needs",
        "Customer Expectation",
        "Customer Segmentation",
        "Customer Value",
        "Customer Retention",
        "Customer Loyalty",
        "Customer Visit Planning",
        "Customer Communication",
        "Customer Complaint Management",
        "Service Recovery",
        "Customer Feedback",
        "Customer Lifetime Value",
        "Customer Growth Plan"
      ]
    },
    {
      key: "marketing",
      icon: "📣",
      name: "Marketing",
      description: "Marketing Strategy နှင့် Customer Growth",
      titles: [
        "Marketing အခြေခံ",
        "Marketing Strategy",
        "Consumer Understanding",
        "Market Segmentation",
        "Target Market",
        "STP Strategy",
        "Marketing Mix 4P",
        "Product Strategy",
        "Price Strategy",
        "Place Strategy",
        "Promotion Strategy",
        "Consumer Promotion",
        "Trade Promotion",
        "Digital Marketing",
        "Social Media Marketing",
        "Content Marketing",
        "Marketing Campaign",
        "Campaign Measurement",
        "Competitor Marketing",
        "Marketing Plan"
      ]
    },
    {
      key: "branding",
      icon: "🏷️",
      name: "Branding",
      description: "Brand တည်ဆောက်ခြင်းနှင့် Positioning",
      titles: [
        "Brand ဆိုတာဘာလဲ",
        "Brand Identity",
        "Brand Positioning",
        "Brand Promise",
        "Brand Personality",
        "Brand Awareness",
        "Brand Equity",
        "Brand Loyalty",
        "Brand Communication",
        "Brand Growth Strategy"
      ]
    },
    {
      key: "finance",
      icon: "💰",
      name: "Finance",
      description: "Finance နှင့် Profit Management",
      titles: [
        "Finance အခြေခံ",
        "Revenue နားလည်ခြင်း",
        "Cost နားလည်ခြင်း",
        "Fixed Cost နှင့် Variable Cost",
        "Profit နားလည်ခြင်း",
        "Gross Profit",
        "Net Profit",
        "Profit Margin",
        "Cash Flow",
        "Working Capital",
        "Budgeting",
        "Financial Planning",
        "Pricing နှင့် Profit",
        "Cost Control",
        "Financial Mindset for Managers"
      ]
    },
    {
      key: "accounting",
      icon: "📊",
      name: "Accounting & P&L",
      description: "P&L နှင့် Financial Report နားလည်ခြင်း",
      titles: [
        "Accounting အခြေခံ",
        "P&L Statement",
        "Balance Sheet အခြေခံ",
        "Revenue Recognition",
        "Cost Recording",
        "Gross Margin Analysis",
        "Accounts Receivable",
        "Credit Control",
        "Inventory Accounting",
        "Financial Report ဖတ်နည်း"
      ]
    },
    {
      key: "operations",
      icon: "📦",
      name: "Distribution & Operations",
      description: "Distribution နှင့် Operational Excellence",
      titles: [
        "Operations Management",
        "Distribution အခြေခံ",
        "Route-to-Market",
        "Distribution Channel",
        "Distributor Selection",
        "Distributor Performance",
        "Stock Management",
        "Inventory Control",
        "Stock Availability",
        "Warehouse Management",
        "Order Management",
        "Delivery Management",
        "Route Planning",
        "Operational KPI",
        "Operational Excellence"
      ]
    },
    {
      key: "modern-trade",
      icon: "🏪",
      name: "Retail & Modern Trade",
      description: "Retail နှင့် Modern Trade Management",
      titles: [
        "Modern Trade အခြေခံ",
        "Retail Business Model",
        "Modern Trade Customer",
        "Store Classification",
        "Planogram အခြေခံ",
        "Shelf Availability",
        "Perfect Store",
        "Promotion Execution",
        "Retail KPI",
        "Modern Trade Growth Plan"
      ]
    },
    {
      key: "kam",
      icon: "🤝",
      name: "Key Account Management",
      description: "Key Account နှင့် Strategic Customer Management",
      titles: [
        "Key Account Management အခြေခံ",
        "Key Account ဆိုတာဘာလဲ",
        "Account Segmentation",
        "Account Planning",
        "Joint Business Planning",
        "Account Growth Strategy",
        "Customer Negotiation",
        "Account Profitability",
        "Strategic Customer Relationship",
        "Key Account Review"
      ]
    },
    {
      key: "leadership",
      icon: "👨‍💼",
      name: "Leadership & Management",
      description: "Leadership နှင့် Team Management",
      titles: [
        "Leadership အခြေခံ",
        "Manager နှင့် Leader",
        "Leadership Mindset",
        "Clear Expectations",
        "Delegation",
        "Coaching",
        "Feedback",
        "Team Motivation",
        "Team Communication",
        "Performance Management",
        "Accountability",
        "Decision Making",
        "Conflict Management",
        "Change Management",
        "High Performance Team"
      ]
    },
    {
      key: "people",
      icon: "👥",
      name: "People & HR",
      description: "People Management နှင့် Employee Development",
      titles: [
        "People Management အခြေခံ",
        "Recruitment",
        "Interviewing",
        "Right Person Right Job",
        "Employee Onboarding",
        "Training Needs Analysis",
        "Training Planning",
        "Employee Motivation",
        "Employee Development",
        "Career Development"
      ]
    },
    {
      key: "negotiation",
      icon: "🗣️",
      name: "Negotiation",
      description: "Professional Negotiation Skills",
      titles: [
        "Negotiation အခြေခံ",
        "Negotiation Preparation",
        "Negotiation Objective",
        "BATNA အခြေခံ",
        "Win-Win Negotiation",
        "Price Negotiation",
        "Trade Term Negotiation",
        "Difficult Negotiation",
        "Negotiation Communication",
        "Negotiation Closing"
      ]
    },
    {
      key: "business-development",
      icon: "💡",
      name: "Business Development",
      description: "New Business နှင့် Growth Opportunity",
      titles: [
        "Business Development အခြေခံ",
        "New Business Opportunity",
        "Opportunity Identification",
        "Market Opportunity Analysis",
        "New Customer Acquisition",
        "Partnership Strategy",
        "Business Proposal",
        "Business Expansion",
        "Growth Opportunity",
        "Business Development Plan"
      ]
    },
    {
      key: "kpi",
      icon: "📈",
      name: "KPI & Data Analysis",
      description: "KPI, Reporting နှင့် Data-driven Management",
      titles: [
        "KPI အခြေခံ",
        "Sales KPI",
        "Revenue KPI",
        "Volume KPI",
        "Distribution KPI",
        "Productivity KPI",
        "Achievement Analysis",
        "Gap Analysis",
        "Sales Dashboard",
        "Data-driven Management"
      ]
    },
    {
      key: "problem-solving",
      icon: "🧠",
      name: "Problem Solving & Decision Making",
      description: "Problem Solving နှင့် Managerial Decision Making",
      titles: [
        "Problem Solving အခြေခံ",
        "Problem Identification",
        "Root Cause Analysis",
        "5 Why Analysis",
        "Fishbone Analysis",
        "Data-based Problem Solving",
        "Corrective Action",
        "Preventive Action",
        "Decision Making Framework",
        "Managerial Decision Making"
      ]
    },
    {
      key: "ai",
      icon: "🤖",
      name: "Digital Business & AI",
      description: "Digital Business နှင့် AI အသုံးချခြင်း",
      titles: [
        "Digital Business အခြေခံ",
        "Digital Transformation",
        "AI ဆိုတာဘာလဲ",
        "AI for Business",
        "AI for Sales",
        "AI for Marketing",
        "AI for Customer Service",
        "AI for Reporting",
        "AI Productivity Tools",
        "AI Business Strategy"
      ]
    },
    {
      key: "productivity",
      icon: "🚀",
      name: "Productivity & Career",
      description: "Personal Productivity နှင့် Career Growth",
      titles: [
        "Goal Setting",
        "SMART Goal",
        "Action Planning",
        "Time Management",
        "Priority Management",
        "Daily Planning",
        "Weekly Review",
        "Professional Communication",
        "Career Development",
        "30-Day Professional Growth Plan"
      ]
    }
  ];

  /* =========================================================
     BUILD 230 LESSONS
     ========================================================= */

  const lessons = [];
  let lessonId = 1;

  courseData.forEach(category => {
    category.titles.forEach((title, index) => {
      lessons.push({
        id: lessonId++,
        category: category.key,
        categoryName: category.name,
        categoryIcon: category.icon,
        number: index + 1,
        title
      });
    });
  });

  /* =========================================================
     STORAGE
     ========================================================= */

  function getCompleted() {
    try {
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  function saveCompleted(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function isCompleted(id) {
    return getCompleted().includes(Number(id));
  }

  function markCompleted(id) {
    const list = getCompleted();
    id = Number(id);

    if (!list.includes(id)) {
      list.push(id);
      saveCompleted(list);
    }

    renderCurrent();
  }

  function markIncomplete(id) {
    id = Number(id);
    saveCompleted(getCompleted().filter(x => x !== id));
    renderCurrent();
  }

  function getProgress() {
    const completed = getCompleted().length;
    return {
      completed,
      total: lessons.length,
      percent: lessons.length
        ? Math.round((completed / lessons.length) * 100)
        : 0
    };
  }

  /* =========================================================
     MOBILE / RESPONSIVE CSS
     ========================================================= */

  const mobileStyle = document.createElement("style");

  mobileStyle.textContent = `
    html,
    body {
      width:100% !important;
      max-width:100% !important;
      min-width:0 !important;
      overflow-x:hidden !important;
    }

    body {
      margin:0 !important;
    }

    .app {
      width:100% !important;
      max-width:100% !important;
      min-width:0 !important;
      overflow-x:hidden !important;
    }

    .main {
      min-width:0 !important;
      max-width:100% !important;
      overflow-x:hidden !important;
    }

    .content {
      width:100% !important;
      max-width:100% !important;
      min-width:0 !important;
      overflow-x:hidden !important;
      box-sizing:border-box !important;
    }

    .aba-dashboard,
    .aba-page,
    .aba-hero,
    .aba-stats,
    .aba-course-card,
    .aba-focus-grid,
    .aba-category-grid {
      min-width:0 !important;
      max-width:100% !important;
      box-sizing:border-box !important;
    }

    .aba-hero *,
    .aba-stat *,
    .aba-course-card *,
    .aba-focus-card *,
    .aba-category-card *,
    .aba-page * {
      max-width:100%;
      box-sizing:border-box;
    }

    @media (max-width:768px) {
      .main {
        width:100% !important;
        max-width:100% !important;
        margin-left:0 !important;
        min-width:0 !important;
      }

      .main-header {
        width:100% !important;
        max-width:100% !important;
        box-sizing:border-box !important;
        padding:0 12px !important;
      }

      .header-title {
        font-size:16px !important;
        white-space:normal !important;
        overflow-wrap:anywhere !important;
      }

      .header-right .badge {
        display:none !important;
      }

      .content {
        width:100% !important;
        padding:12px !important;
      }

      .aba-dashboard,
      .aba-page {
        width:100% !important;
        overflow:hidden !important;
      }

      .aba-hero {
        width:100% !important;
        padding:20px 16px !important;
        overflow:hidden !important;
      }

      .aba-hero h1 {
        width:100% !important;
        font-size:22px !important;
        line-height:1.45 !important;
        white-space:normal !important;
        overflow-wrap:anywhere !important;
        word-break:normal !important;
      }

      .aba-hero p {
        width:100% !important;
        font-size:14px !important;
        line-height:1.8 !important;
        white-space:normal !important;
        overflow-wrap:anywhere !important;
      }

      .aba-stats {
        width:100% !important;
        display:grid !important;
        grid-template-columns:repeat(2,minmax(0,1fr)) !important;
        gap:10px !important;
      }

      .aba-stat {
        width:100% !important;
        min-width:0 !important;
        overflow:hidden !important;
        padding:14px 10px !important;
      }

      .aba-stat-number {
        font-size:21px !important;
        white-space:normal !important;
        overflow-wrap:anywhere !important;
      }

      .aba-stat-label {
        font-size:12px !important;
        line-height:1.5 !important;
        white-space:normal !important;
        overflow-wrap:anywhere !important;
      }

      .aba-course-card {
        width:100% !important;
        padding:18px !important;
        overflow:hidden !important;
      }

      .aba-course-title {
        width:100% !important;
        font-size:19px !important;
        line-height:1.5 !important;
        white-space:normal !important;
        overflow-wrap:anywhere !important;
      }

      .aba-course-description {
        width:100% !important;
        font-size:13px !important;
        line-height:1.8 !important;
        white-space:normal !important;
        overflow-wrap:anywhere !important;
      }

      .aba-buttons {
        width:100% !important;
        display:flex !important;
        flex-direction:column !important;
        gap:8px !important;
      }

      .aba-buttons .aba-btn {
        width:100% !important;
      }

      .aba-focus-grid,
      .aba-category-grid {
        width:100% !important;
        grid-template-columns:1fr !important;
      }

      .aba-focus-card,
      .aba-category-card {
        width:100% !important;
        min-width:0 !important;
        overflow:hidden !important;
      }

      .aba-section-title {
        font-size:19px !important;
        line-height:1.5 !important;
        white-space:normal !important;
      }

      .lesson-grid {
        grid-template-columns:1fr !important;
      }

      .lesson-card {
        min-width:0 !important;
        width:100% !important;
      }

      .lesson-card-title,
      .lesson-card-description {
        white-space:normal !important;
        overflow-wrap:anywhere !important;
      }

      .category-filter {
        max-width:100% !important;
        overflow-x:auto !important;
        -webkit-overflow-scrolling:touch !important;
        scrollbar-width:none !important;
      }

      .category-filter::-webkit-scrollbar {
        display:none !important;
      }

      .form-grid {
        grid-template-columns:1fr !important;
      }

      .tool-grid {
        grid-template-columns:1fr !important;
      }
    }

    @media (max-width:480px) {
      .content {
        padding:10px !important;
      }

      .aba-hero {
        padding:18px 15px !important;
        border-radius:15px !important;
      }

      .aba-hero h1 {
        font-size:20px !important;
        line-height:1.5 !important;
      }

      .aba-hero p {
        font-size:13px !important;
        line-height:1.8 !important;
      }

      .aba-stats {
        gap:8px !important;
      }

      .aba-stat {
        padding:12px 9px !important;
      }

      .aba-stat-number {
        font-size:20px !important;
      }

      .aba-course-title {
        font-size:18px !important;
      }
    }
  `;

  document.head.appendChild(mobileStyle);

  /* =========================================================
     GLOBAL STYLES FOR APP SECTIONS
     ========================================================= */

  const appStyle = document.createElement("style");

  appStyle.textContent = `
    .aba-page {
      width:100%;
    }

    .aba-hero {
      background:linear-gradient(135deg,#111827,#1f2937);
      color:white;
      border-radius:20px;
      padding:28px;
      margin-bottom:20px;
      box-shadow:0 12px 30px rgba(0,0,0,.12);
    }

    .aba-hero h1 {
      margin:0 0 10px;
      font-size:30px;
      line-height:1.4;
    }

    .aba-hero p {
      margin:0;
      opacity:.9;
      line-height:1.8;
    }

    .aba-stats {
      display:grid;
      grid-template-columns:repeat(4,minmax(0,1fr));
      gap:14px;
      margin-bottom:24px;
    }

    .aba-stat {
      background:#fff;
      border:1px solid #e5e7eb;
      border-radius:16px;
      padding:20px;
      box-shadow:0 5px 18px rgba(0,0,0,.05);
    }

    .aba-stat-number {
      font-size:28px;
      font-weight:800;
      color:#111827;
      margin-bottom:5px;
    }

    .aba-stat-label {
      color:#6b7280;
      font-size:14px;
      line-height:1.5;
    }

    .aba-section {
      margin-bottom:26px;
    }

    .aba-section-title {
      font-size:22px;
      font-weight:800;
      color:#111827;
      margin:0 0 14px;
    }

    .aba-course-card {
      background:#fff;
      border:1px solid #e5e7eb;
      border-radius:18px;
      padding:24px;
      box-shadow:0 6px 20px rgba(0,0,0,.05);
    }

    .aba-course-title {
      font-size:22px;
      font-weight:800;
      margin-bottom:8px;
      color:#111827;
    }

    .aba-course-description {
      color:#6b7280;
      line-height:1.8;
      margin-bottom:16px;
    }

    .aba-progress {
      height:10px;
      background:#e5e7eb;
      border-radius:99px;
      overflow:hidden;
      margin:10px 0 8px;
    }

    .aba-progress-bar {
      height:100%;
      background:#111827;
      border-radius:99px;
      transition:width .3s ease;
    }

    .aba-progress-text {
      font-size:13px;
      color:#6b7280;
    }

    .aba-buttons {
      display:flex;
      gap:10px;
      margin-top:18px;
      flex-wrap:wrap;
    }

    .aba-btn {
      border:0;
      border-radius:10px;
      padding:11px 16px;
      font-weight:700;
      cursor:pointer;
      background:#111827;
      color:#fff;
    }

    .aba-btn.secondary {
      background:#f3f4f6;
      color:#111827;
    }

    .aba-focus-grid {
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:14px;
    }

    .aba-focus-card {
      background:#fff;
      border:1px solid #e5e7eb;
      border-radius:15px;
      padding:18px;
    }

    .aba-focus-icon {
      font-size:25px;
      margin-bottom:8px;
    }

    .aba-focus-title {
      font-weight:800;
      margin-bottom:5px;
    }

    .aba-focus-text {
      font-size:13px;
      line-height:1.7;
      color:#6b7280;
    }

    .aba-category-grid {
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:14px;
    }

    .aba-category-card {
      background:#fff;
      border:1px solid #e5e7eb;
      border-radius:15px;
      padding:18px;
      cursor:pointer;
      transition:.2s;
    }

    .aba-category-card:hover {
      transform:translateY(-2px);
      box-shadow:0 8px 20px rgba(0,0,0,.08);
    }

    .aba-category-icon {
      font-size:28px;
      margin-bottom:8px;
    }

    .aba-category-name {
      font-weight:800;
      margin-bottom:5px;
    }

    .aba-category-description {
      font-size:13px;
      line-height:1.6;
      color:#6b7280;
      margin-bottom:8px;
    }

    .aba-category-count {
      font-size:12px;
      font-weight:700;
      color:#111827;
    }

    .page-heading {
      margin-bottom:20px;
    }

    .page-heading h1 {
      margin:0 0 6px;
      font-size:27px;
    }

    .page-heading p {
      margin:0;
      color:#6b7280;
      line-height:1.7;
    }

    .lesson-grid {
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:14px;
    }

    .lesson-card {
      background:#fff;
      border:1px solid #e5e7eb;
      border-radius:15px;
      padding:18px;
      cursor:pointer;
      transition:.2s;
      min-width:0;
    }

    .lesson-card:hover {
      box-shadow:0 8px 22px rgba(0,0,0,.08);
      transform:translateY(-2px);
    }

    .lesson-number {
      font-size:12px;
      font-weight:800;
      color:#6b7280;
      margin-bottom:7px;
    }

    .lesson-card-title {
      font-size:17px;
      font-weight:800;
      line-height:1.55;
      margin-bottom:9px;
      color:#111827;
    }

    .lesson-meta {
      display:flex;
      justify-content:space-between;
      align-items:center;
      gap:8px;
      font-size:12px;
      color:#6b7280;
    }

    .completed-badge {
      color:#15803d;
      font-weight:800;
    }

    .category-filter {
      display:flex;
      gap:8px;
      overflow-x:auto;
      padding-bottom:8px;
      margin-bottom:18px;
    }

    .category-filter button {
      flex:0 0 auto;
      border:1px solid #d1d5db;
      background:#fff;
      border-radius:999px;
      padding:8px 13px;
      cursor:pointer;
      font-weight:600;
      font-size:12px;
    }

    .category-filter button.active {
      background:#111827;
      color:#fff;
      border-color:#111827;
    }

    .search-box {
      width:100%;
      padding:12px 14px;
      border:1px solid #d1d5db;
      border-radius:10px;
      margin-bottom:14px;
      font-size:15px;
      box-sizing:border-box;
      outline:none;
    }

    .search-box:focus {
      border-color:#111827;
    }

    .lesson-reader {
      background:#fff;
      border:1px solid #e5e7eb;
      border-radius:18px;
      padding:24px;
    }

    .reader-top {
      display:flex;
      justify-content:space-between;
      gap:10px;
      align-items:center;
      margin-bottom:20px;
      flex-wrap:wrap;
    }

    .reader-category {
      color:#6b7280;
      font-size:13px;
    }

    .reader-title {
      font-size:28px;
      line-height:1.5;
      margin:0 0 10px;
    }

    .lesson-content {
      line-height:1.9;
      color:#374151;
    }

    .lesson-content h3 {
      color:#111827;
      margin-top:24px;
      margin-bottom:8px;
    }

    .lesson-content ul {
      padding-left:20px;
    }

    .lesson-content li {
      margin-bottom:7px;
    }

    .reader-actions {
      display:flex;
      gap:8px;
      flex-wrap:wrap;
      margin-top:24px;
    }

    .tool-grid {
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:14px;
    }

    .tool-card {
      background:#fff;
      border:1px solid #e5e7eb;
      border-radius:15px;
      padding:20px;
    }

    .tool-card h3 {
      margin:0 0 8px;
    }

    .tool-card p {
      color:#6b7280;
      line-height:1.7;
      font-size:13px;
    }

    .form-grid {
      display:grid;
      grid-template-columns:repeat(2,minmax(0,1fr));
      gap:14px;
    }

    .form-group {
      margin-bottom:14px;
    }

    .form-group label {
      display:block;
      margin-bottom:6px;
      font-weight:700;
      font-size:13px;
    }

    .form-group input,
    .form-group textarea,
    .form-group select {
      width:100%;
      padding:11px 12px;
      border:1px solid #d1d5db;
      border-radius:9px;
      box-sizing:border-box;
      font-size:14px;
    }

    .result-box {
      background:#f3f4f6;
      border-radius:12px;
      padding:16px;
      margin-top:14px;
      line-height:1.8;
    }

    .empty-state {
      background:#fff;
      border:1px dashed #d1d5db;
      border-radius:15px;
      padding:35px 20px;
      text-align:center;
      color:#6b7280;
    }
  `;

  document.head.appendChild(appStyle);

  /* =========================================================
     HELPERS
     ========================================================= */

  const content = document.getElementById("app-content");

  function esc(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function categoryByKey(key) {
    return courseData.find(c => c.key === key);
  }

  function lessonById(id) {
    return lessons.find(l => l.id === Number(id));
  }

  function renderCurrent() {
    const current = window.__ABA_CURRENT_VIEW || "dashboard";

    if (current === "dashboard") renderDashboard();
    else if (current === "courses") renderCourses();
    else if (current === "lessons") renderLessons();
    else if (current === "progress") renderProgress();
    else if (current === "sales-manager") renderSalesManager();
    else if (current === "pricing") renderPricing();
    else if (current === "reports") renderReports();
    else if (current === "ai-business-coach") renderAICoach();
    else if (current === "ai-tools") renderAITools();
    else if (current === "settings") renderSettings();
    else renderDashboard();
  }

  function updateHeader(title) {
    const header = document.getElementById("headerTitle");
    if (header) header.textContent = title;
  }

  function updateActiveNav(section) {
    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.toggle(
        "active",
        item.dataset.section === section
      );
    });
  }

  function showSection(section) {
    window.__ABA_CURRENT_VIEW = section;
    updateActiveNav(section);

    const titles = {
      dashboard: "Dashboard",
      courses: "My Courses",
      lessons: "Lessons",
      progress: "My Progress",
      "sales-manager": "Sales Manager",
      pricing: "Pricing Calculator",
      reports: "Reports",
      "ai-business-coach": "AI Business Coach",
      "ai-tools": "AI Tools",
      settings: "Settings"
    };

    updateHeader(titles[section] || "Aung Business Academy");
    renderCurrent();

    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  }

  /* =========================================================
     DASHBOARD
     ========================================================= */

  function renderDashboard() {
    const progress = getProgress();

    content.innerHTML = `
      <div class="aba-page aba-dashboard">

        <section class="aba-hero">
          <h1>Welcome back, Aung Zar Ni Win 👋</h1>
          <p>
            Aung Business Academy မှာ Business Management,
            Sales Management နဲ့ Leadership Skills တွေကို
            လေ့လာပြီး သင့်ရဲ့ Professional Career ကို တိုးတက်အောင်လုပ်ပါ။
          </p>
        </section>

        <section class="aba-stats">
          <div class="aba-stat">
            <div class="aba-stat-number">1</div>
            <div class="aba-stat-label">Active Course</div>
          </div>

          <div class="aba-stat">
            <div class="aba-stat-number">${lessons.length}</div>
            <div class="aba-stat-label">Total Lessons</div>
          </div>

          <div class="aba-stat">
            <div class="aba-stat-number">${progress.completed}</div>
            <div class="aba-stat-label">Completed Lessons</div>
          </div>

          <div class="aba-stat">
            <div class="aba-stat-number">${progress.percent}%</div>
            <div class="aba-stat-label">Overall Progress</div>
          </div>
        </section>

        <section class="aba-section">
          <h2 class="aba-section-title">Current Course</h2>

          <div class="aba-course-card">
            <div class="aba-course-title">
              Sales Management Mastery
            </div>

            <div class="aba-course-description">
              Sales Management, Team Leadership, Target Planning,
              Field Execution, Customer Management နဲ့
              Business Growth Skills တွေကို လေ့လာနိုင်ပါတယ်။
            </div>

            <strong>Course Progress ${progress.percent}%</strong>

            <div class="aba-progress">
              <div
                class="aba-progress-bar"
                style="width:${progress.percent}%"
              ></div>
            </div>

            <div class="aba-progress-text">
              ${progress.completed} / ${lessons.length} lessons completed
            </div>

            <div class="aba-buttons">
              <button
                class="aba-btn"
                data-action="continue-learning"
              >
                Continue Learning
              </button>

              <button
                class="aba-btn secondary"
                data-action="view-lessons"
              >
                View All Lessons
              </button>
            </div>
          </div>
        </section>

        <section class="aba-section">
          <h2 class="aba-section-title">🎯 Your Learning Focus</h2>

          <div class="aba-focus-grid">
            ${[
              ["💼","Sales Management","Sales Team, Target, Forecast နှင့် Field Execution"],
              ["🤝","Customer Management","Customer Relationship နှင့် Retention"],
              ["📊","Business Finance","Revenue, Cost, Profit နှင့် P&L"],
              ["👨‍💼","Leadership","Team Leadership, Coaching နှင့် Performance"],
              ["🎯","Business Strategy","Strategy, Planning နှင့် Growth"],
              ["🤖","Digital & AI","Business အတွက် AI နှင့် Digital Tools"]
            ].map(x => `
              <div class="aba-focus-card">
                <div class="aba-focus-icon">${x[0]}</div>
                <div class="aba-focus-title">${x[1]}</div>
                <div class="aba-focus-text">${x[2]}</div>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="aba-section">
          <h2 class="aba-section-title">
            📚 Business Academy Categories
          </h2>

          <div class="aba-category-grid">
            ${courseData.map(category => `
              <div
                class="aba-category-card"
                data-category="${category.key}"
              >
                <div class="aba-category-icon">
                  ${category.icon}
                </div>

                <div class="aba-category-name">
                  ${category.name}
                </div>

                <div class="aba-category-description">
                  ${category.description}
                </div>

                <div class="aba-category-count">
                  ${category.titles.length} Lessons →
                </div>
              </div>
            `).join("")}
          </div>
        </section>

      </div>
    `;
  }

  /* =========================================================
     COURSES
     ========================================================= */

  function renderCourses() {
    content.innerHTML = `
      <div class="aba-page">
        <div class="page-heading">
          <h1>📚 My Courses</h1>
          <p>
            Aung Business Academy ရဲ့ Business Learning Programs
          </p>
        </div>

        <div class="aba-course-card">
          <div class="aba-course-title">
            Sales Management Mastery
          </div>

          <div class="aba-course-description">
            Sales Manager တစ်ယောက်အနေနဲ့ လိုအပ်တဲ့
            Sales Planning, Team Management, Customer Management,
            Leadership, KPI နဲ့ Business Strategy Skills တွေကို
            တစ်နေရာတည်းမှာ လေ့လာနိုင်ပါတယ်။
          </div>

          <div class="aba-buttons">
            <button
              class="aba-btn"
              data-action="view-lessons"
            >
              📖 Start Learning
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /* =========================================================
     LESSONS
     ========================================================= */

  function renderLessons(categoryKey = "all", searchText = "") {
    window.__ABA_LESSON_CATEGORY = categoryKey;
    window.__ABA_LESSON_SEARCH = searchText;

    let filtered = lessons;

    if (categoryKey !== "all") {
      filtered = filtered.filter(
        lesson => lesson.category === categoryKey
      );
    }

    if (searchText.trim()) {
      const q = searchText.trim().toLowerCase();

      filtered = filtered.filter(lesson =>
        lesson.title.toLowerCase().includes(q) ||
        lesson.categoryName.toLowerCase().includes(q)
      );
    }

    content.innerHTML = `
      <div class="aba-page">

        <div class="page-heading">
          <h1>📖 Lessons</h1>
          <p>
            Burmese Business Lessons ${lessons.length} ခု
          </p>
        </div>

        <input
          id="lessonSearch"
          class="search-box"
          type="search"
          placeholder="Lesson ရှာရန်..."
          value="${esc(searchText)}"
        />

        <div class="category-filter">
          <button
            class="${categoryKey === "all" ? "active" : ""}"
            data-category-filter="all"
          >
            All
          </button>

          ${courseData.map(category => `
            <button
              class="${categoryKey === category.key ? "active" : ""}"
              data-category-filter="${category.key}"
            >
              ${category.icon} ${category.name}
            </button>
          `).join("")}
        </div>

        <div class="lesson-grid">
          ${
            filtered.length
              ? filtered.map(lesson => `
                <div
                  class="lesson-card"
                  data-lesson-id="${lesson.id}"
                >
                  <div class="lesson-number">
                    Lesson ${lesson.id}
                  </div>

                  <div class="lesson-card-title">
                    ${lesson.title}
                  </div>

                  <div class="lesson-meta">
                    <span>
                      ${lesson.categoryIcon}
                      ${lesson.categoryName}
                    </span>

                    ${
                      isCompleted(lesson.id)
                        ? `<span class="completed-badge">✓ Completed</span>`
                        : `<span>Start →</span>`
                    }
                  </div>
                </div>
              `).join("")
              : `
                <div class="empty-state">
                  Lesson မတွေ့ပါ။
                </div>
              `
          }
        </div>
      </div>
    `;

    const search = document.getElementById("lessonSearch");

    if (search) {
      search.addEventListener("input", e => {
        renderLessons(
          window.__ABA_LESSON_CATEGORY || "all",
          e.target.value
        );
      });
    }
  }

  /* =========================================================
     LESSON CONTENT
     ========================================================= */

  function getLessonContent(lesson) {
    const title = lesson.title;

    return {
      objective:
        `${title} ကို နားလည်ပြီး လက်တွေ့လုပ်ငန်းခွင်မှာ အသုံးချနိုင်ရန်။`,

      overview:
        `${title} သည် Business Manager နှင့် Sales Manager တစ်ယောက်အတွက် အရေးကြီးသော အခြေခံကျွမ်းကျင်မှုတစ်ခု ဖြစ်ပါတယ်။ Business Result ကောင်းရဖို့ Knowledge တစ်ခုတည်းမဟုတ်ဘဲ Planning, Execution, Measurement နဲ့ Continuous Improvement တွေကို ပေါင်းစပ်အသုံးချရပါတယ်။`,

      keyPoints: [
        `${title} ရဲ့ အဓိကအဓိပ္ပါယ်ကို နားလည်ပါ။`,
        "Business Objective နဲ့ ချိတ်ဆက်စဉ်းစားပါ။",
        "Data နဲ့ အချက်အလက်တွေကို အသုံးပြုပါ။",
        "Plan → Execute → Measure → Improve ဆိုတဲ့ Cycle ကို အသုံးချပါ။",
        "Team နဲ့ Customer ကို အာရုံစိုက်ပြီး ရလဒ်ကို တိုင်းတာပါ။"
      ],

      details: [
        {
          heading:"၁။ အခြေခံနားလည်မှု",
          text:`${title} ကို ကောင်းကောင်းနားလည်ဖို့ အရင်ဆုံး ရည်ရွယ်ချက်၊ လုပ်ငန်းစဉ်နဲ့ Expected Result ကို ရှင်းရှင်းလင်းလင်း သိထားရပါမယ်။`
        },
        {
          heading:"၂။ Manager အမြင်",
          text:"Manager တစ်ယောက်အနေနဲ့ ကိုယ်တိုင်လုပ်ပေးတာထက် Team ကို မှန်ကန်တဲ့ Direction ပေးပြီး Result ရအောင် စီမံခန့်ခွဲနိုင်ဖို့ အရေးကြီးပါတယ်။"
        },
        {
          heading:"၃။ လက်တွေ့အသုံးချခြင်း",
          text:"နေ့စဉ်လုပ်ငန်းမှာ Customer, Sales, People, Cost နဲ့ Performance Data တွေကိုကြည့်ပြီး Action Plan တစ်ခုချင်းစီ ချမှတ်အသုံးချပါ။"
        },
        {
          heading:"၄။ တိုင်းတာခြင်း",
          text:"လုပ်ဆောင်ချက်ကောင်းမကောင်းကို Feeling နဲ့မဆုံးဖြတ်ဘဲ KPI, Achievement, Gap နဲ့ Business Result တွေကနေ တိုင်းတာသင့်ပါတယ်။"
        },
        {
          heading:"၅။ တိုးတက်အောင်လုပ်ခြင်း",
          text:"ရလဒ်မကောင်းရင် လူကို အပြစ်တင်တာထက် Root Cause ကိုရှာပြီး Corrective Action နဲ့ Preventive Action ပြုလုပ်သင့်ပါတယ်။"
        }
      ],

      managerTips: [
        "နေ့စဉ် Priority 3 ခု သတ်မှတ်ပါ။",
        "Team ကို Clear Expectation ပေးပါ။",
        "Field မှာ Coaching လုပ်ပါ။",
        "Weekly KPI Review ပြုလုပ်ပါ။",
        "Customer Feedback ကို အမြဲနားထောင်ပါ။"
      ],

      mistakes: [
        "Plan မရှိဘဲ လုပ်ဆောင်ခြင်း",
        "Data မကြည့်ဘဲ ဆုံးဖြတ်ခြင်း",
        "Team ကို Micromanage လုပ်ခြင်း",
        "Customer Need ကို မနားလည်ခြင်း",
        "Result မတိုင်းတာခြင်း"
      ],

      actionPlan: [
        "ဒီ Lesson မှာ သင်ယူခဲ့တဲ့ အချက် ၃ ခုကို ရေးပါ။",
        "မိမိလုပ်ငန်းမှာ အသုံးချနိုင်မယ့် အချက် ၁ ခုရွေးပါ။",
        "ဒီအပတ်အတွင်း လက်တွေ့အသုံးချပါ။",
        "ရလဒ်ကို တိုင်းတာပါ။",
        "နောက်တစ်ဆင့် Improvement တစ်ခု သတ်မှတ်ပါ။"
      ],

      checklist: [
        "Concept ကို နားလည်ပြီ",
        "Business နဲ့ ချိတ်ဆက်စဉ်းစားနိုင်ပြီ",
        "လက်တွေ့အသုံးချနိုင်ပြီ",
        "KPI နဲ့ တိုင်းတာနိုင်ပြီ",
        "Action Plan ချမှတ်ပြီးပြီ"
      ],

      summary:
        `${title} ကို Manager တစ်ယောက်အနေနဲ့ Knowledge အဖြစ်သာမက လက်တွေ့လုပ်ငန်းခွင်မှာ အသုံးချနိုင်ဖို့ အရေးကြီးပါတယ်။`
    };
  }

  /* =========================================================
     OPEN LESSON
     ========================================================= */

  function openLesson(id) {
    const lesson = lessonById(id);

    if (!lesson) return;

    window.__ABA_CURRENT_LESSON = lesson.id;

    const data = getLessonContent(lesson);
    const completed = isCompleted(lesson.id);

    const index = lessons.findIndex(x => x.id === lesson.id);

    const previous = lessons[index - 1];
    const next = lessons[index + 1];

    updateHeader(`Lesson ${lesson.id}`);

    content.innerHTML = `
      <div class="aba-page">

        <div class="lesson-reader">

          <div class="reader-top">
            <button
              class="aba-btn secondary"
              data-action="back-lessons"
            >
              ← Back to Lessons
            </button>

            <div class="reader-category">
              ${lesson.categoryIcon}
              ${lesson.categoryName}
            </div>
          </div>

          <h1 class="reader-title">
            Lesson ${lesson.id}: ${lesson.title}
          </h1>

          <div class="lesson-content">

            <h3>🎯 Learning Objective</h3>
            <p>${data.objective}</p>

            <h3>📚 Overview</h3>
            <p>${data.overview}</p>

            <h3>🔑 Key Points</h3>
            <ul>
              ${data.keyPoints.map(x => `<li>${x}</li>`).join("")}
            </ul>

            ${data.details.map(item => `
              <h3>${item.heading}</h3>
              <p>${item.text}</p>
            `).join("")}

            <h3>💼 Manager Tips</h3>
            <ul>
              ${data.managerTips.map(x => `<li>${x}</li>`).join("")}
            </ul>

            <h3>⚠️ Common Mistakes</h3>
            <ul>
              ${data.mistakes.map(x => `<li>${x}</li>`).join("")}
            </ul>

            <h3>🚀 Action Plan</h3>
            <ol>
              ${data.actionPlan.map(x => `<li>${x}</li>`).join("")}
            </ol>

            <h3>✅ Checklist</h3>
            <ul>
              ${data.checklist.map(x => `<li>${x}</li>`).join("")}
            </ul>

            <h3>📝 Summary</h3>
            <p>${data.summary}</p>

          </div>

          <div class="reader-actions">

            ${
              previous
                ? `
                  <button
                    class="aba-btn secondary"
                    data-open-lesson="${previous.id}"
                  >
                    ← Previous
                  </button>
                `
                : ""
            }

            ${
              completed
                ? `
                  <button
                    class="aba-btn secondary"
                    data-action="mark-incomplete"
                    data-id="${lesson.id}"
                  >
                    ↩ Mark Incomplete
                  </button>
                `
                : `
                  <button
                    class="aba-btn"
                    data-action="mark-complete"
                    data-id="${lesson.id}"
                  >
                    ✓ Complete Lesson
                  </button>
                `
            }

            ${
              next
                ? `
                  <button
                    class="aba-btn"
                    data-open-lesson="${next.id}"
                  >
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
     PROGRESS
     ========================================================= */

  function renderProgress() {
    const progress = getProgress();
    const completed = getCompleted();

    content.innerHTML = `
      <div class="aba-page">

        <div class="page-heading">
          <h1>📊 My Progress</h1>
          <p>
            သင့်ရဲ့ Learning Progress ကို စောင့်ကြည့်ပါ။
          </p>
        </div>

        <div class="aba-stats">
          <div class="aba-stat">
            <div class="aba-stat-number">${progress.completed}</div>
            <div class="aba-stat-label">Completed</div>
          </div>

          <div class="aba-stat">
            <div class="aba-stat-number">${progress.total}</div>
            <div class="aba-stat-label">Total Lessons</div>
          </div>

          <div class="aba-stat">
            <div class="aba-stat-number">${progress.percent}%</div>
            <div class="aba-stat-label">Progress</div>
          </div>

          <div class="aba-stat">
            <div class="aba-stat-number">${progress.total - progress.completed}</div>
            <div class="aba-stat-label">Remaining</div>
          </div>
        </div>

        <div class="aba-course-card">
          <div class="aba-course-title">
            Overall Learning Progress
          </div>

          <div class="aba-progress">
            <div
              class="aba-progress-bar"
              style="width:${progress.percent}%"
            ></div>
          </div>

          <div class="aba-progress-text">
            ${progress.percent}% completed
          </div>
        </div>

        <div style="height:20px"></div>

        <div class="aba-section">
          <h2 class="aba-section-title">
            Completed Lessons
          </h2>

          ${
            completed.length
              ? `
                <div class="lesson-grid">
                  ${completed.map(id => {
                    const lesson = lessonById(id);
                    if (!lesson) return "";

                    return `
                      <div
                        class="lesson-card"
                        data-lesson-id="${lesson.id}"
                      >
                        <div class="lesson-number">
                          Lesson ${lesson.id}
                        </div>

                        <div class="lesson-card-title">
                          ${lesson.title}
                        </div>

                        <div class="lesson-meta">
                          <span>${lesson.categoryName}</span>
                          <span class="completed-badge">
                            ✓ Completed
                          </span>
                        </div>
                      </div>
                    `;
                  }).join("")}
                </div>
              `
              : `
                <div class="empty-state">
                  아직 Completed Lesson မရှိသေးပါ။
                  Lesson တစ်ခုကို စတင်လေ့လာပါ။
                </div>
              `
          }
        </div>
      </div>
    `;
  }

  /* =========================================================
     SALES MANAGER
     ========================================================= */

  function renderSalesManager() {
    const tools = [
      ["🎯","Target Planning","Sales Target ကို Monthly / Weekly / Daily ခွဲပြီး Plan ချနိုင်ရန်"],
      ["📈","Sales Forecasting","Sales Forecast နဲ့ Gap Analysis ပြုလုပ်ရန်"],
      ["👥","Team Management","Sales Team ကို Coaching နှင့် Performance Management လုပ်ရန်"],
      ["🗺️","Territory Management","Territory နဲ့ Route ကို ထိရောက်စွာ စီမံရန်"],
      ["🤝","Customer Management","Key Customer နှင့် Distributor Relationship တည်ဆောက်ရန်"],
      ["📊","KPI Management","Sales KPI ကို Review ပြုလုပ်ပြီး Action Plan ချရန်"]
    ];

    content.innerHTML = `
      <div class="aba-page">

        <div class="page-heading">
          <h1>💼 Sales Manager</h1>
          <p>
            Sales Manager တစ်ယောက်အတွက် လက်တွေ့အသုံးချနိုင်တဲ့ Toolkit
          </p>
        </div>

        <div class="tool-grid">
          ${tools.map(t => `
            <div class="tool-card">
              <div style="font-size:30px;margin-bottom:10px">
                ${t[0]}
              </div>
              <h3>${t[1]}</h3>
              <p>${t[2]}</p>
            </div>
          `).join("")}
        </div>

        <div style="height:20px"></div>

        <div class="aba-course-card">
          <div class="aba-course-title">
            Sales Manager Daily Routine
          </div>

          <div class="aba-course-description">
            1. Yesterday Result Review<br>
            2. Today's Target သတ်မှတ်ခြင်း<br>
            3. Team Priority သတ်မှတ်ခြင်း<br>
            4. Field Coaching<br>
            5. Customer / Distributor Visit<br>
            6. KPI Update<br>
            7. End-of-Day Review
          </div>
        </div>
      </div>
    `;
  }

  /* =========================================================
     PRICING CALCULATOR
     ========================================================= */

  function renderPricing() {
    content.innerHTML = `
      <div class="aba-page">

        <div class="page-heading">
          <h1>🧮 Pricing Calculator</h1>
          <p>
            Cost နဲ့ Desired Margin ကိုအသုံးပြုပြီး Selling Price တွက်ပါ။
          </p>
        </div>

        <div class="aba-course-card">

          <div class="form-grid">

            <div class="form-group">
              <label>Cost Price</label>
              <input
                id="costPrice"
                type="number"
                placeholder="ဥပမာ 100000"
              >
            </div>

            <div class="form-group">
              <label>Desired Margin (%)</label>
              <input
                id="marginPercent"
                type="number"
                placeholder="ဥပမာ 20"
              >
            </div>

          </div>

          <button
            class="aba-btn"
            data-action="calculate-price"
          >
            Calculate Price
          </button>

          <div id="priceResult"></div>

        </div>
      </div>
    `;
  }

  function calculatePrice() {
    const cost = Number(
      document.getElementById("costPrice")?.value || 0
    );

    const margin = Number(
      document.getElementById("marginPercent")?.value || 0
    );

    const result = document.getElementById("priceResult");

    if (!cost || margin < 0 || margin >= 100) {
      result.innerHTML = `
        <div class="result-box">
          Cost Price နှင့် Margin ကို မှန်ကန်စွာ ထည့်ပါ။
        </div>
      `;
      return;
    }

    const sellingPrice = cost / (1 - margin / 100);
    const profit = sellingPrice - cost;

    result.innerHTML = `
      <div class="result-box">
        <strong>Selling Price:</strong>
        ${sellingPrice.toLocaleString()}<br>

        <strong>Estimated Profit:</strong>
        ${profit.toLocaleString()}<br>

        <strong>Margin:</strong>
        ${margin}%
      </div>
    `;
  }

  /* =========================================================
     REPORTS
     ========================================================= */

  function renderReports() {
    const progress = getProgress();

    content.innerHTML = `
      <div class="aba-page">

        <div class="page-heading">
          <h1>📈 Reports</h1>
          <p>
            Business Performance နှင့် Learning KPI ကို ကြည့်ရှုပါ။
          </p>
        </div>

        <div class="aba-stats">

          <div class="aba-stat">
            <div class="aba-stat-number">
              ${progress.percent}%
            </div>
            <div class="aba-stat-label">
              Learning Achievement
            </div>
          </div>

          <div class="aba-stat">
            <div class="aba-stat-number">
              ${progress.completed}
            </div>
            <div class="aba-stat-label">
              Lessons Completed
            </div>
          </div>

          <div class="aba-stat">
            <div class="aba-stat-number">
              ${lessons.length}
            </div>
            <div class="aba-stat-label">
              Available Lessons
            </div>
          </div>

          <div class="aba-stat">
            <div class="aba-stat-number">
              ${lessons.length - progress.completed}
            </div>
            <div class="aba-stat-label">
              Remaining Lessons
            </div>
          </div>

        </div>

        <div class="aba-course-card">
          <div class="aba-course-title">
            Manager KPI Mindset
          </div>

          <div class="aba-course-description">
            Good Manager တစ်ယောက်ဟာ Activity ကိုသာမကြည့်ဘဲ
            Business Result, Achievement, Gap, Cost, Productivity
            နဲ့ Customer Result တွေကို တိုင်းတာပါတယ်။
          </div>
        </div>

      </div>
    `;
  }

  /* =========================================================
     AI BUSINESS COACH
     ========================================================= */

  function renderAICoach() {
    content.innerHTML = `
      <div class="aba-page">

        <div class="page-heading">
          <h1>🤖 AI Business Coach</h1>
          <p>
            Business နှင့် Sales ပြဿနာတွေကို မေးမြန်းနိုင်ပါတယ်။
          </p>
        </div>

        <div class="aba-course-card">

          <div class="form-group">
            <label>
              သင့်ရဲ့ Business Question
            </label>

            <textarea
              id="coachQuestion"
              rows="6"
              placeholder="ဥပမာ - Sales Target မပြည့်ရင် ဘာလုပ်သင့်လဲ?"
            ></textarea>
          </div>

          <button
            class="aba-btn"
            data-action="ask-coach"
          >
            🤖 Ask Business Coach
          </button>

          <div id="coachResult"></div>

        </div>
      </div>
    `;
  }

  function askCoach() {
    const input = document.getElementById("coachQuestion");
    const result = document.getElementById("coachResult");

    if (!input || !result) return;

    const question = input.value.trim();

    if (!question) {
      result.innerHTML = `
        <div class="result-box">
          မေးခွန်းတစ်ခု ထည့်ပေးပါ။
        </div>
      `;
      return;
    }

    let answer = `
      သင့်မေးခွန်းကို Manager အမြင်နဲ့ စဉ်းစားမယ်ဆိုရင်
      အောက်ပါ Framework ကို အသုံးပြုနိုင်ပါတယ်။
      <br><br>
      <strong>1. Problem ကို သတ်မှတ်ပါ</strong><br>
      ပြဿနာက ဘာလဲဆိုတာ Data နဲ့ ရှင်းရှင်းလင်းလင်းသိပါ။
      <br><br>
      <strong>2. Root Cause ရှာပါ</strong><br>
      5 Why နည်းလမ်းနဲ့ အကြောင်းရင်းကို ရှာပါ။
      <br><br>
      <strong>3. Action Plan ချပါ</strong><br>
      ဘယ်သူက ဘာလုပ်မလဲ၊ ဘယ်နေ့ပြီးမလဲ သတ်မှတ်ပါ။
      <br><br>
      <strong>4. KPI နဲ့တိုင်းပါ</strong><br>
      Result ကို Data နဲ့ ပြန်စစ်ပါ။
      <br><br>
      <strong>5. Improve လုပ်ပါ</strong><br>
      မအောင်မြင်ရင် Plan ကို ပြန်ပြင်ပြီး ဆက်လက်လုပ်ဆောင်ပါ။
    `;

    const q = question.toLowerCase();

    if (
      q.includes("sales") ||
      q.includes("ရောင်း") ||
      q.includes("target")
    ) {
      answer = `
        <strong>Sales Manager အနေနဲ့ အောက်ပါအတိုင်း စတင်ပါ။</strong>
        <br><br>
        1. Target Gap ကိုတွက်ပါ။<br>
        2. Territory / Customer အလိုက် Gap ခွဲပါ။<br>
        3. Top Opportunity Customer တွေကို ဦးစားပေးပါ။<br>
        4. Sales Team နဲ့ Daily Action Plan ချပါ။<br>
        5. Field Coaching လုပ်ပါ။<br>
        6. Daily Achievement ကို Review လုပ်ပါ။<br>
        7. Gap ပြန်ဖြည့်ဖို့ Recovery Plan ချပါ။
      `;
    }

    result.innerHTML = `
      <div class="result-box">
        <strong>🤖 Business Coach Answer</strong>
        <br><br>
        ${answer}
      </div>
    `;
  }

  /* =========================================================
     AI TOOLS
     ========================================================= */

  function renderAITools() {
    content.innerHTML = `
      <div class="aba-page">

        <div class="page-heading">
          <h1>🛠 AI Tools</h1>
          <p>
            Business Productivity တိုးတက်စေရန် အသုံးချနိုင်သော Tools
          </p>
        </div>

        <div class="tool-grid">

          <div class="tool-card">
            <div style="font-size:30px">📝</div>
            <h3>Business Writing</h3>
            <p>
              Professional Business Message, Proposal
              နှင့် Communication ပြုလုပ်ရန်။
            </p>
          </div>

          <div class="tool-card">
            <div style="font-size:30px">📊</div>
            <h3>Data Thinking</h3>
            <p>
              KPI, Sales Data နှင့် Performance ကို
              Data-based နည်းလမ်းဖြင့် စဉ်းစားရန်။
            </p>
          </div>

          <div class="tool-card">
            <div style="font-size:30px">💡</div>
            <h3>Idea Generator</h3>
            <p>
              Business Growth နှင့် Customer Opportunity
              Idea တွေ စဉ်းစားရန်။
            </p>
          </div>

          <div class="tool-card">
            <div style="font-size:30px">🎯</div>
            <h3>Action Planner</h3>
            <p>
              Goal ကို Action Plan အဖြစ် ပြောင်းလဲရန်။
            </p>
          </div>

        </div>
      </div>
    `;
  }

  /* =========================================================
     SETTINGS
     ========================================================= */

  function renderSettings() {
    content.innerHTML = `
      <div class="aba-page">

        <div class="page-heading">
          <h1>⚙️ Settings</h1>
          <p>
            Academy Settings နှင့် Learning Data
          </p>
        </div>

        <div class="aba-course-card">

          <div class="aba-course-title">
            Profile
          </div>

          <div class="form-group">
            <label>Name</label>
            <input
              value="Aung Zar Ni Win"
              readonly
            >
          </div>

          <div class="form-group">
            <label>Role</label>
            <input
              value="Business Manager"
              readonly
            >
          </div>

        </div>

        <div style="height:20px"></div>

        <div class="aba-course-card">

          <div class="aba-course-title">
            Learning Data
          </div>

          <div class="aba-course-description">
            Completed Lessons ကို Reset လုပ်နိုင်ပါတယ်။
            Reset လုပ်ပြီးရင် Progress ပြန်စပါမယ်။
          </div>

          <button
            class="aba-btn"
            data-action="reset-progress"
          >
            Reset Learning Progress
          </button>

        </div>

      </div>
    `;
  }

  /* =========================================================
     NAVIGATION EVENTS
     ========================================================= */

  document.addEventListener("click", event => {

    const nav = event.target.closest(".nav-item");

    if (nav) {
      event.preventDefault();
      showSection(nav.dataset.section);
      return;
    }

    const lessonCard = event.target.closest("[data-lesson-id]");

    if (
      lessonCard &&
      !event.target.closest("button")
    ) {
      openLesson(lessonCard.dataset.lessonId);
      return;
    }

    const openLessonButton =
      event.target.closest("[data-open-lesson]");

    if (openLessonButton) {
      openLesson(openLessonButton.dataset.openLesson);
      return;
    }

    const categoryCard =
      event.target.closest("[data-category]");

    if (
      categoryCard &&
      !event.target.closest("[data-category-filter]")
    ) {
      showSection("lessons");
      renderLessons(categoryCard.dataset.category, "");
      return;
    }

    const categoryFilter =
      event.target.closest("[data-category-filter]");

    if (categoryFilter) {
      renderLessons(
        categoryFilter.dataset.category,
        window.__ABA_LESSON_SEARCH || ""
      );
      return;
    }

    const action =
      event.target.closest("[data-action]");

    if (!action) return;

    const type = action.dataset.action;

    if (type === "continue-learning") {
      const completed = getCompleted();

      const nextLesson =
        lessons.find(lesson =>
          !completed.includes(lesson.id)
        ) || lessons[0];

      openLesson(nextLesson.id);
      return;
    }

    if (type === "view-lessons") {
      showSection("lessons");
      return;
    }

    if (type === "back-lessons") {
      showSection("lessons");
      return;
    }

    if (type === "mark-complete") {
      markCompleted(action.dataset.id);
      return;
    }

    if (type === "mark-incomplete") {
      markIncomplete(action.dataset.id);
      return;
    }

    if (type === "calculate-price") {
      calculatePrice();
      return;
    }

    if (type === "ask-coach") {
      askCoach();
      return;
    }

    if (type === "reset-progress") {
      const confirmReset =
        window.confirm(
          "Learning Progress အားလုံးကို Reset လုပ်မလား?"
        );

      if (confirmReset) {
        saveCompleted([]);
        renderSettings();
        alert("Learning Progress Reset ပြီးပါပြီ။");
      }

      return;
    }
  });

  /* =========================================================
     INITIALIZE
     ========================================================= */

  window.__ABA_CURRENT_VIEW = "dashboard";
  window.__ABA_LESSON_CATEGORY = "all";
  window.__ABA_LESSON_SEARCH = "";

  renderDashboard();
  updateActiveNav("dashboard");
  updateHeader("Dashboard");

  /* =========================================================
     PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy = {
    lessons,
    categories: courseData,

    showSection,
    renderDashboard,
    renderLessons,
    openLesson,

    markCompleted,
    markIncomplete,

    getProgress,

    calculatePrice,
    askCoach,

    resetProgress() {
      saveCompleted([]);
      renderCurrent();
    }
  };

})();
