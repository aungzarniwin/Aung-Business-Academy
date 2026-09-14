/* =========================================================
   AUNG BUSINESS ACADEMY
   STABLE V8
   Dashboard + Courses + Lessons + Progress
   Sales + Calculator + Reports + AI Coach + Settings
   ========================================================= */

(function () {

  "use strict";

  /* ================= CONFIG ================= */

  const STORAGE_KEY = "aungBusinessAcademy";

  const API_BASE_URL =
    "https://aung-business-academy.onrender.com";

  const AI_API_URL =
    API_BASE_URL + "/api/ai";


  /* ================= LESSONS ================= */

  const lessons = [

    {
      id: 1,
      title: "Sales Manager တစ်ယောက်၏ အခန်းကဏ္ဍ",
      category: "Sales",
      level: "Beginner",
      description: "Sales Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်တွေကို နားလည်ပါ။",
      content:
        "Sales Manager ဆိုတာ Target ရရှိအောင် Team, Customer, Market နဲ့ Execution ကို စီမံခန့်ခွဲပေးရတဲ့ Leader ဖြစ်ပါတယ်။\n\n" +
        "အဓိကတာဝန်တွေက People Management, Sales Target, KPI Management, Customer Management, Market Execution နဲ့ Coaching ဖြစ်ပါတယ်။"
    },

    {
      id: 2,
      title: "Sales Target သတ်မှတ်နည်း",
      category: "Sales",
      level: "Beginner",
      description: "Sales Target ကို မှန်ကန်စွာ သတ်မှတ်နည်း။",
      content:
        "Sales Target သတ်မှတ်တဲ့အခါ Historical Sales, Market Potential, Customer Base, Distribution နဲ့ Growth Objective တွေကို ထည့်သွင်းစဉ်းစားရပါတယ်။\n\n" +
        "Target ကို Monthly, Weekly, Daily အဖြစ် ခွဲပြီး Team Member တစ်ယောက်ချင်းစီအထိ Cascade လုပ်သင့်ပါတယ်။"
    },

    {
      id: 3,
      title: "Sales Target ကို Field Execution ပြောင်းနည်း",
      category: "Sales",
      level: "Intermediate",
      description: "Target ကို Field Action အဖြစ် ပြောင်းလဲပါ။",
      content:
        "Target တစ်ခုရှိရုံနဲ့ မလုံလောက်ပါဘူး။ Target ကို Customers, Calls, Productive Visits, Orders, Volume နဲ့ Revenue အဖြစ် ခွဲချရပါမယ်။\n\n" +
        "People + Numbers + Execution ဆိုတဲ့ Framework နဲ့ Team ကို စီမံပါ။"
    },

    {
      id: 4,
      title: "Sales KPI နားလည်ခြင်း",
      category: "Sales",
      level: "Intermediate",
      description: "Sales KPI တွေကို နားလည်ပြီး Manage လုပ်ပါ။",
      content:
        "အရေးကြီးတဲ့ Sales KPI တွေက Achievement %, Volume, Revenue, Strike Rate, Numeric Distribution, Weighted Distribution, Productive Calls နဲ့ Average Order Value ဖြစ်ပါတယ်။\n\n" +
        "KPI ကို Report အတွက်သာမက Action Plan ချမှတ်ဖို့ အသုံးပြုပါ။"
    },

    {
      id: 5,
      title: "Sales Team ကို ဦးဆောင်နည်း",
      category: "Leadership",
      level: "Intermediate",
      description: "Sales Team ကို Effective Leadership နဲ့ ဦးဆောင်ပါ။",
      content:
        "Team Leadership ရဲ့ အဓိကက Clear Expectations, Coaching, Feedback, Recognition နဲ့ Accountability ဖြစ်ပါတယ်။\n\n" +
        "Manager က Micromanage မလုပ်ဘဲ Team ကို Ownership ရရှိအောင် Empower လုပ်သင့်ပါတယ်။"
    },

    {
      id: 6,
      title: "Coaching & Feedback",
      category: "Leadership",
      level: "Intermediate",
      description: "Team Member တွေကို Coaching လုပ်နည်း။",
      content:
        "Effective Coaching မှာ Observation, Questioning, Feedback, Action Plan နဲ့ Follow-up ပါဝင်ပါတယ်။\n\n" +
        "Feedback ပေးတဲ့အခါ Person ကိုမတိုက်ခိုက်ဘဲ Behavior နဲ့ Result ကို အခြေခံပြီး ပြောပါ။"
    },

    {
      id: 7,
      title: "Customer Relationship Management",
      category: "Sales",
      level: "Intermediate",
      description: "Customer Relationship ကို တိုးတက်အောင်လုပ်ပါ။",
      content:
        "Customer Relationship Management ရဲ့ အဓိကက Customer Need ကို နားလည်ခြင်း၊ Trust တည်ဆောက်ခြင်းနဲ့ Consistent Follow-up ဖြစ်ပါတယ်။\n\n" +
        "Top Customers တွေကို Strategic Account အဖြစ် စီမံခန့်ခွဲပါ။"
    },

    {
      id: 8,
      title: "Negotiation အခြေခံ",
      category: "Sales",
      level: "Intermediate",
      description: "Professional Negotiation ရဲ့ အခြေခံများ။",
      content:
        "Negotiation မှာ Win-Win Solution ရရှိဖို့ အရေးကြီးပါတယ်။\n\n" +
        "Customer ရဲ့ Need, Interest, Budget နဲ့ Decision Criteria ကို အရင်နားလည်ပြီးမှ Proposal ပြုလုပ်ပါ။"
    },

    {
      id: 9,
      title: "Market Analysis",
      category: "Strategy",
      level: "Intermediate",
      description: "Market ကို Analyze လုပ်နည်း။",
      content:
        "Market Analysis မှာ Market Size, Growth, Customer Segments, Distribution, Pricing နဲ့ Trends တွေကို လေ့လာရပါတယ်။\n\n" +
        "Field Information ကို Regularly Collect လုပ်ပြီး Decision Making မှာ အသုံးပြုပါ။"
    },

    {
      id: 10,
      title: "Competitor Analysis",
      category: "Strategy",
      level: "Intermediate",
      description: "Competitor တွေကို Strategic Analysis လုပ်ပါ။",
      content:
        "Competitor Analysis မှာ Product, Price, Promotion, Distribution, Strength နဲ့ Weakness တွေကို နှိုင်းယှဉ်ပါ။\n\n" +
        "Competitor Information ကို Copy လုပ်ဖို့မဟုတ်ဘဲ ကိုယ့်ရဲ့ Competitive Advantage တည်ဆောက်ဖို့ အသုံးပြုပါ။"
    },

    {
      id: 11,
      title: "Distribution Management",
      category: "Sales",
      level: "Advanced",
      description: "Distribution Network ကို စီမံခန့်ခွဲပါ။",
      content:
        "Distribution Management ရဲ့ အဓိကက Right Product, Right Outlet, Right Quantity, Right Time ဖြစ်ပါတယ်။\n\n" +
        "Distributor Stock, Coverage, Outlet Expansion နဲ့ Service Level ကို Regular Review လုပ်ပါ။"
    },

    {
      id: 12,
      title: "Sales Forecasting",
      category: "Sales",
      level: "Advanced",
      description: "Sales Forecast ကို မှန်ကန်စွာ ခန့်မှန်းပါ။",
      content:
        "Sales Forecasting မှာ Historical Trend, Seasonality, Pipeline, Distribution နဲ့ Market Condition ကို ထည့်သွင်းစဉ်းစားရပါတယ်။\n\n" +
        "Forecast ကို Realistic ဖြစ်အောင် Field Team Information နဲ့ Validate လုပ်ပါ။"
    },

    {
      id: 13,
      title: "Profit & Loss အခြေခံ",
      category: "Finance",
      level: "Beginner",
      description: "Business P&L ရဲ့ အခြေခံကို နားလည်ပါ။",
      content:
        "Revenue - Cost = Profit ဖြစ်ပါတယ်။\n\n" +
        "Sales Manager တစ်ယောက်အနေနဲ့ Revenue တစ်ခုတည်းမဟုတ်ဘဲ Margin, Trade Spend နဲ့ Profitability ကိုပါ နားလည်ထားသင့်ပါတယ်။"
    },

    {
      id: 14,
      title: "Gross Margin နားလည်ခြင်း",
      category: "Finance",
      level: "Intermediate",
      description: "Gross Margin ကို တွက်ချက်နားလည်ပါ။",
      content:
        "Gross Profit = Selling Price - Cost Price ဖြစ်ပါတယ်။\n\n" +
        "Gross Margin % = Gross Profit / Selling Price × 100 ဖြစ်ပါတယ်။\n\n" +
        "Margin ကို နားလည်ခြင်းက Pricing Decision နဲ့ Product Mix Decision တွေအတွက် အရေးကြီးပါတယ်။"
    },

    {
      id: 15,
      title: "Business Goal Setting",
      category: "Strategy",
      level: "Beginner",
      description: "Business Goal ကို သတ်မှတ်နည်း။",
      content:
        "Goal က Clear, Measurable, Achievable, Relevant နဲ့ Time-bound ဖြစ်သင့်ပါတယ်။\n\n" +
        "Goal ကို Monthly, Weekly နဲ့ Daily Actions အဖြစ် ခွဲပါ။"
    },

    {
      id: 16,
      title: "Daily Sales Planning",
      category: "Sales",
      level: "Beginner",
      description: "နေ့စဉ် Sales Plan ပြုလုပ်နည်း။",
      content:
        "နေ့စဉ် Sales Planning မှာ Priority Customers, Route, Target, Calls နဲ့ Expected Orders တွေ သတ်မှတ်ပါ။\n\n" +
        "နေ့ကုန်မှာ Plan vs Actual ကို Review လုပ်ပါ။"
    },

    {
      id: 17,
      title: "Weekly Sales Review",
      category: "Sales",
      level: "Intermediate",
      description: "Weekly Sales Review ကို Effective လုပ်ပါ။",
      content:
        "Weekly Review မှာ Target, Actual, Gap, Root Cause နဲ့ Next Action ကို အဓိကထားပါ။\n\n" +
        "Report တင်ရုံမဟုတ်ဘဲ Action Plan နဲ့အဆုံးသတ်ပါ။"
    },

    {
      id: 18,
      title: "Problem Solving",
      category: "Strategy",
      level: "Intermediate",
      description: "Business Problem တွေကို ဖြေရှင်းနည်း။",
      content:
        "Problem ကို Symptom နဲ့ Root Cause ခွဲခြားပါ။\n\n" +
        "5 Why, Fishbone Analysis နဲ့ Action Plan တွေကို အသုံးပြုနိုင်ပါတယ်။"
    },

    {
      id: 19,
      title: "Time Management",
      category: "Productivity",
      level: "Beginner",
      description: "အချိန်ကို Effective ဖြစ်အောင် စီမံပါ။",
      content:
        "အရေးကြီးတာနဲ့ အရေးပေါ်တာကို ခွဲခြားပါ။\n\n" +
        "Manager တစ်ယောက်အနေနဲ့ Low-value Activities တွေကို လျှော့ပြီး High-impact Activities တွေကို ဦးစားပေးပါ။"
    },

    {
      id: 20,
      title: "Business Communication",
      category: "Business",
      level: "Beginner",
      description: "Professional Business Communication။",
      content:
        "Professional Communication မှာ Clear, Concise, Specific နဲ့ Action-oriented ဖြစ်ဖို့လိုပါတယ်။\n\n" +
        "Message တစ်ခုတိုင်းမှာ ဘာဖြစ်တယ်၊ ဘာလုပ်ရမယ်၊ ဘယ်အချိန်ပြီးရမယ်ဆိုတာ ရှင်းလင်းပါ။"
    },

    {
      id: 21,
      title: "Brand Basics",
      category: "Marketing",
      level: "Beginner",
      description: "Brand ရဲ့ အခြေခံသဘောတရား။",
      content:
        "Brand ဆိုတာ Logo တစ်ခုတည်းမဟုတ်ပါဘူး။ Customer ရဲ့ Mind ထဲမှာ ကိုယ့် Business အပေါ်ရှိတဲ့ Perception ဖြစ်ပါတယ်။"
    },

    {
      id: 22,
      title: "Marketing Basics",
      category: "Marketing",
      level: "Beginner",
      description: "Marketing ရဲ့ အခြေခံ။",
      content:
        "Marketing ရဲ့ အဓိကက Right Customer ကို Right Value Proposition နဲ့ ရောက်ရှိစေခြင်း ဖြစ်ပါတယ်။\n\n" +
        "Product, Price, Place, Promotion ကို နားလည်ပါ။"
    },

    {
      id: 23,
      title: "Customer Service Excellence",
      category: "Business",
      level: "Intermediate",
      description: "Customer Service ကို တိုးတက်အောင်လုပ်ပါ။",
      content:
        "Customer Service က Customer Retention နဲ့ Loyalty အတွက် အရေးကြီးပါတယ်။\n\n" +
        "Listen, Understand, Solve, Follow-up ဆိုတဲ့ Framework ကို အသုံးပြုပါ။"
    },

    {
      id: 24,
      title: "Key Account Management",
      category: "Sales",
      level: "Advanced",
      description: "Key Accounts တွေကို Strategic Management လုပ်ပါ။",
      content:
        "Key Account Management မှာ Account Potential, Stakeholder Mapping, Joint Business Planning နဲ့ Relationship Management ပါဝင်ပါတယ်။"
    },

    {
      id: 25,
      title: "Sales Negotiation Advanced",
      category: "Sales",
      level: "Advanced",
      description: "Advanced Negotiation Skills။",
      content:
        "Advanced Negotiation မှာ BATNA, Value Creation, Trade-offs နဲ့ Concession Management ကို နားလည်ထားသင့်ပါတယ်။"
    },

    {
      id: 26,
      title: "Decision Making",
      category: "Strategy",
      level: "Advanced",
      description: "Better Business Decisions ချမှတ်နည်း။",
      content:
        "Decision Making မှာ Data, Risk, Opportunity Cost နဲ့ Business Impact ကို ထည့်သွင်းစဉ်းစားပါ။\n\n" +
        "Perfect Information ကိုစောင့်မနေဘဲ Available Data နဲ့ Timely Decision ချမှတ်ပါ။"
    },

    {
      id: 27,
      title: "Sales Motivation",
      category: "Leadership",
      level: "Intermediate",
      description: "Sales Team ကို Motivate လုပ်နည်း။",
      content:
        "Motivation က Salary တစ်ခုတည်းမဟုတ်ပါဘူး။ Recognition, Growth Opportunity, Ownership, Coaching နဲ့ Clear Goals တွေလည်း အရေးကြီးပါတယ်။"
    },

    {
      id: 28,
      title: "Sales Reporting",
      category: "Sales",
      level: "Intermediate",
      description: "Effective Sales Reporting။",
      content:
        "Sales Report မှာ Numbers, Trend, Gap, Root Cause နဲ့ Action Plan ပါဝင်သင့်ပါတယ်။\n\n" +
        "Data များများထည့်တာထက် Decision ချနိုင်မယ့် Information ကို တိတိကျကျတင်ပြပါ။"
    },

    {
      id: 29,
      title: "Strategic Sales Planning",
      category: "Strategy",
      level: "Advanced",
      description: "Strategic Sales Plan တည်ဆောက်ပါ။",
      content:
        "Strategic Sales Planning မှာ Market, Customer, Product, Channel, People နဲ့ Target ကို ချိတ်ဆက်စဉ်းစားရပါတယ်။\n\n" +
        "Strategy ကို Execution Plan နဲ့ KPI တွေဖြင့် Support လုပ်ပါ။"
    },

    {
      id: 30,
      title: "Professional Sales Manager ဖြစ်လာရန်",
      category: "Sales",
      level: "Advanced",
      description: "Professional Sales Manager တစ်ယောက်ဖြစ်ရန် လိုအပ်သော Mindset။",
      content:
        "Professional Sales Manager တစ်ယောက်ဟာ Target ရရှိအောင်သာ မလုပ်ဘဲ People Development, Customer Growth, Profitability နဲ့ Sustainable Business Growth ကိုပါ တာဝန်ယူရပါတယ်။\n\n" +
        "People + Numbers + Execution + Leadership = Professional Sales Manager"
    }

  ];


  /* ================= HELPERS ================= */

  const $ = (selector) =>
    document.querySelector(selector);

  const $$ = (selector) =>
    Array.from(document.querySelectorAll(selector));


  function safeJSON(key, fallback) {

    try {
      const value = localStorage.getItem(key);

      if (!value) return fallback;

      return JSON.parse(value);

    } catch (error) {

      return fallback;

    }

  }


  function saveJSON(key, value) {

    try {

      localStorage.setItem(
        key,
        JSON.stringify(value)
      );

    } catch (error) {

      console.warn("Storage error:", error);

    }

  }


  function escapeHTML(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* ================= STATE ================= */

  function getState() {

    return safeJSON(
      STORAGE_KEY,
      {
        userName: "Aung Zar Ni Win",
        completed: [],
        dailyMinutes: 0,
        lastDate: "",
        settings: {
          reminder: false,
          autoSave: true
        }
      }
    );

  }


  function saveState(state) {

    saveJSON(STORAGE_KEY, state);

  }


  function getCompleted() {

    const state = getState();

    return Array.isArray(state.completed)
      ? state.completed
      : [];

  }


  function isCompleted(id) {

    return getCompleted().includes(Number(id));

  }


  function getProgress() {

    const completed =
      getCompleted().length;

    return Math.round(
      (completed / lessons.length) * 100
    );

  }


  /* ================= USER ================= */

  function updateUserUI() {

    const state = getState();

    const name =
      state.userName || "Aung Zar Ni Win";

    const first =
      name.trim().charAt(0).toUpperCase() || "A";

    $("#sidebarUserName").textContent = name;

    $("#topUserName").textContent = name;

    $("#dashboardUserName").textContent = name;

    $("#topAvatar").textContent = first;

    $(".profile-avatar").textContent = first;

    if ($("#settingsName")) {

      $("#settingsName").value = name;

    }

  }


  /* ================= NAVIGATION ================= */

  const pageTitles = {

    dashboard: [
      "Dashboard",
      "Welcome back to your Business Academy."
    ],

    courses: [
      "My Courses",
      "Your Business Learning Journey."
    ],

    lessons: [
      "Lessons",
      "Business & Sales Management Lessons."
    ],

    progress: [
      "My Progress",
      "Track your learning progress."
    ],

    sales: [
      "Sales Manager",
      "Sales Target & KPI Planning Tool."
    ],

    calculator: [
      "Pricing Calculator",
      "Profit, Margin & Pricing Analysis."
    ],

    reports: [
      "Reports",
      "Business Performance Overview."
    ],

    coach: [
      "AI Business Coach",
      "Your practical business advisor."
    ],

    aitools: [
      "AI Tools",
      "Business management tools."
    ],

    settings: [
      "Settings",
      "Academy settings."
    ]

  };


  function showPage(pageId) {

    const page =
      document.getElementById(pageId);

    if (!page) return;

    $$(".page").forEach(item => {

      item.classList.remove("active");

    });

    page.classList.add("active");


    $$(".menu-item").forEach(item => {

      item.classList.toggle(
        "active",
        item.dataset.page === pageId
      );

    });


    const title =
      pageTitles[pageId] ||
      ["Aung Business Academy", ""];


    $("#pageTitle").textContent =
      title[0];

    $("#pageSubtitle").textContent =
      title[1];


    closeMobileMenu();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });


    refreshPage(pageId);

  }


  function refreshPage(pageId) {

    updateDashboard();

    if (pageId === "lessons") {

      renderLessons();

    }

    if (pageId === "progress") {

      renderProgress();

    }

    if (pageId === "reports") {

      updateReports();

    }

  }


  /* ================= MOBILE MENU ================= */

  function openMobileMenu() {

    $("#sidebar").classList.add("open");

    $("#sidebarOverlay").classList.add("show");

  }


  function closeMobileMenu() {

    $("#sidebar").classList.remove("open");

    $("#sidebarOverlay").classList.remove("show");

  }


  /* ================= DASHBOARD ================= */

  function updateDashboard() {

    const state = getState();

    const completed =
      getCompleted().length;

    const progress =
      getProgress();

    $("#lessonCount").textContent =
      lessons.length;

    $("#courseLessonCount").textContent =
      lessons.length;

    $("#completedCount").textContent =
      completed;

    $("#progressPercent").textContent =
      progress + "%";

    $("#courseProgressText").textContent =
      progress + "%";

    $("#courseProgress").style.width =
      progress + "%";


    $("#lessonSummaryCompleted").textContent =
      completed;

    $("#lessonSummaryTotal").textContent =
      lessons.length;


    $("#bigProgress").textContent =
      progress + "%";

    $("#progressCompleted").textContent =
      completed + " / " + lessons.length;

    $("#progressCompletedOnly").textContent =
      completed;

    $("#progressRemaining").textContent =
      Math.max(0, lessons.length - completed);


    $("#overallProgressBar").style.width =
      progress + "%";


    const minutes =
      Number(state.dailyMinutes || 0);

    const goal =
      Math.min(minutes, 30);

    $("#goalMinutes").textContent =
      goal;


    const degrees =
      Math.min(goal / 30, 1) * 360;

    $(".goal-circle").style.background =
      `conic-gradient(#2563eb ${degrees}deg, #e2e8f0 ${degrees}deg)`;


    if (goal >= 30) {

      $("#goalMessage").textContent =
        "🎉 Daily goal completed! Great work.";

    } else if (goal > 0) {

      $("#goalMessage").textContent =
        "Keep going. You're making progress!";

    } else {

      $("#goalMessage").textContent =
        "Start your learning journey today.";

    }

  }


  /* ================= LESSONS ================= */

  let currentLessonId = null;


  function renderLessons() {

    const container =
      $("#lessonList");

    if (!container) return;


    const search =
      ($("#lessonSearch")?.value || "")
        .trim()
        .toLowerCase();

    const category =
      $("#lessonCategory")?.value || "all";


    const filtered =
      lessons.filter(lesson => {

        const matchesSearch =
          !search ||
          lesson.title.toLowerCase().includes(search) ||
          lesson.description.toLowerCase().includes(search);

        const matchesCategory =
          category === "all" ||
          lesson.category === category;

        return matchesSearch && matchesCategory;

      });


    if (!filtered.length) {

      container.innerHTML = `
        <div class="card">
          <strong>No lessons found.</strong>
          <p class="muted">
            Search keyword သို့မဟုတ် category ကို ပြောင်းကြည့်ပါ။
          </p>
        </div>
      `;

      return;

    }


    container.innerHTML =
      filtered.map(lesson => {

        const completed =
          isCompleted(lesson.id);

        return `

          <div class="lesson-item">

            <div class="lesson-number">
              ${lesson.id}
            </div>

            <div class="lesson-info">

              <h3>
                ${escapeHTML(lesson.title)}
              </h3>

              <p>
                ${escapeHTML(lesson.description)}
              </p>

              <div class="lesson-tags">

                <span class="lesson-tag">
                  ${escapeHTML(lesson.category)}
                </span>

                <span class="lesson-tag">
                  ${escapeHTML(lesson.level)}
                </span>

              </div>

            </div>

            ${
              completed
              ? `<span class="completed-badge">✓ Completed</span>`
              : ""
            }

            <button
              class="btn ${completed ? "btn-secondary" : "btn-primary"} lesson-open"
              data-id="${lesson.id}">
              ${completed ? "Review" : "Start"}
            </button>

          </div>

        `;

      }).join("");


    $$(".lesson-open").forEach(button => {

      button.addEventListener(
        "click",
        function () {

          openLesson(
            Number(this.dataset.id)
          );

        }
      );

    });

  }


  function openLesson(id) {

    const lesson =
      lessons.find(item => item.id === id);

    if (!lesson) return;

    currentLessonId = id;

    $("#modalLessonNumber").textContent =
      "Lesson " + lesson.id;

    $("#modalLessonTitle").textContent =
      lesson.title;

    $("#modalLessonBody").textContent =
      lesson.content;


    const completed =
      isCompleted(id);

    $("#completeLessonBtn").textContent =
      completed
      ? "✓ Completed"
      : "✓ Complete Lesson";


    $("#completeLessonBtn").disabled =
      completed;


    $("#previousLessonBtn").disabled =
      id <= 1;

    $("#nextLessonBtn").disabled =
      id >= lessons.length;


    $("#lessonModal").classList.add("show");

  }


  function closeLessonModal() {

    $("#lessonModal").classList.remove("show");

    currentLessonId = null;

  }


  function completeCurrentLesson() {

    if (!currentLessonId) return;

    const state =
      getState();

    if (!Array.isArray(state.completed)) {

      state.completed = [];

    }


    if (!state.completed.includes(currentLessonId)) {

      state.completed.push(
        currentLessonId
      );

      state.completed.sort(
        (a,b) => a-b
      );


      state.dailyMinutes =
        Number(state.dailyMinutes || 0) + 20;

      state.lastDate =
        new Date().toISOString().slice(0,10);

      saveState(state);

      showToast(
        "Lesson completed successfully! 🎉"
      );

    }


    updateDashboard();

    renderLessons();

    renderProgress();

    closeLessonModal();

  }


  function openPreviousLesson() {

    if (!currentLessonId) return;

    if (currentLessonId <= 1) return;

    openLesson(
      currentLessonId - 1
    );

  }


  function openNextLesson() {

    if (!currentLessonId) return;

    if (currentLessonId >= lessons.length) return;

    openLesson(
      currentLessonId + 1
    );

  }


  /* ================= PROGRESS ================= */

  function renderProgress() {

    const container =
      $("#progressLessonList");

    if (!container) return;


    container.innerHTML =
      lessons.map(lesson => {

        const completed =
          isCompleted(lesson.id);

        return `

          <div class="progress-lesson">

            <span>
              ${lesson.id}. ${escapeHTML(lesson.title)}
            </span>

            ${
              completed
              ? `<span class="completed-badge">✓ Completed</span>`
              : `<span style="color:#94a3b8;font-size:10px;">Not completed</span>`
            }

          </div>

        `;

      }).join("");

  }


  /* ================= SALES CALCULATOR ================= */

  function calculateSales() {

    const target =
      Number($("#salesTarget").value || 0);

    const days =
      Number($("#workingDays").value || 0);

    const members =
      Number($("#teamMembers").value || 0);


    if (
      target <= 0 ||
      days <= 0 ||
      members <= 0
    ) {

      $("#salesResult").innerHTML =
        "Target, Working Days နဲ့ Team Members ကို မှန်ကန်စွာ ထည့်ပါ။";

      return;

    }


    const daily =
      target / days;

    const perPerson =
      target / members;

    const personDaily =
      perPerson / days;


    $("#salesResult").innerHTML = `

      <strong>Sales Target Analysis</strong>

      <br><br>

      Monthly Target:
      <strong>${formatNumber(target)}</strong>

      <br>

      Daily Team Target:
      <strong>${formatNumber(daily)}</strong>

      <br>

      Target / Team Member:
      <strong>${formatNumber(perPerson)}</strong>

      <br>

      Daily Target / Person:
      <strong>${formatNumber(personDaily)}</strong>

    `;

  }


  /* ================= PRICING CALCULATOR ================= */

  function calculatePricing() {

    const cost =
      Number($("#costPrice").value || 0);

    const selling =
      Number($("#sellingPrice").value || 0);

    const quantity =
      Number($("#quantity").value || 1);


    if (cost <= 0 || selling <= 0) {

      showToast(
        "Cost Price နဲ့ Selling Price ထည့်ပါ။"
      );

      return;

    }


    const profit =
      selling - cost;

    const margin =
      (profit / selling) * 100;

    const totalProfit =
      profit * quantity;


    $("#profitResult").textContent =
      formatNumber(profit);

    $("#marginResult").textContent =
      margin.toFixed(2) + "%";

    $("#totalProfitResult").textContent =
      formatNumber(totalProfit);

  }


  function formatNumber(number) {

    return Number(number || 0)
      .toLocaleString("en-US", {
        maximumFractionDigits: 2
      });

  }


  /* ================= REPORTS ================= */

  function updateReports() {

    const progress =
      getProgress();

    const completed =
      getCompleted().length;

    const remaining =
      lessons.length - completed;


    $("#reportProgress").textContent =
      progress + "%";

    $("#reportCompleted").textContent =
      completed;

    $("#reportRemaining").textContent =
      remaining;

  }


  /* ================= AI COACH ================= */

  async function askAICoach(question) {

    const text =
      question ||
      $("#coachInput").value.trim();


    if (!text) {

      showToast(
        "Business Question တစ်ခု ထည့်ပါ။"
      );

      return;

    }


    $("#coachResult").textContent =
      "🤖 AI Coach စဉ်းစားနေပါတယ်...";


    try {

      const response =
        await fetch(
          AI_API_URL,
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json"
            },

            body: JSON.stringify({

              message:
                "You are the AI Business Coach inside Aung Business Academy. " +
                "Give practical, concise and actionable business advice. " +
                "The user may be a Myanmar Sales Manager or Business Manager. " +
                "Answer in the same language as the user when possible. " +
                "Use steps, KPIs and action plans when useful. " +
                "User question: " + text

            })

          }
        );


      if (!response.ok) {

        throw new Error(
          "AI server error"
        );

      }


      const data =
        await response.json();


      const answer =
        data.answer ||
        data.response ||
        data.message ||
        data.result ||
        "AI response မရရှိသေးပါ။";


      $("#coachResult").textContent =
        answer;


    } catch (error) {

      console.error(
        "AI Coach Error:",
        error
      );


      $("#coachResult").textContent =
        "AI server ကို လက်ရှိချိတ်ဆက်မရသေးပါ။ " +
        "သင့် Business Question ကို အောက်မှာထားပြီး နောက်တစ်ကြိမ် ပြန်စမ်းပါ။";

    }

  }


  /* ================= AI TOOLS ================= */

  function openAITool(type) {

    const questions = {

      "business-plan":
        "Myanmar SME Business အတွက် Professional Business Plan တစ်ခုကို အဆင့်လိုက်ရေးပေးပါ။",

      "sales-plan":
        "Sales Target ကို Field Execution Action Plan အဖြစ် ပြောင်းလဲပေးပါ။",

      "coaching":
        "Sales Team Member တစ်ယောက်ရဲ့ Performance တိုးတက်အောင် Coaching Plan တစ်ခုရေးပေးပါ။",

      "problem":
        "Business Problem ကို Root Cause Analysis နဲ့ ဖြေရှင်းဖို့ Framework တစ်ခု ပေးပါ။"

    };


    showPage("coach");


    if ($("#coachInput")) {

      $("#coachInput").value =
        questions[type] || "";

    }

  }


  /* ================= SETTINGS ================= */

  function saveProfile() {

    const name =
      $("#settingsName").value.trim();


    if (!name) {

      showToast(
        "Name ထည့်ပါ။"
      );

      return;

    }


    const state =
      getState();

    state.userName =
      name;

    state.settings =
      state.settings || {};


    state.settings.reminder =
      $("#goalReminder").checked;

    state.settings.autoSave =
      $("#autoSave").checked;


    saveState(state);

    updateUserUI();

    showToast(
      "Profile saved successfully."
    );

  }


  function loadSettings() {

    const state =
      getState();

    const settings =
      state.settings || {};


    $("#goalReminder").checked =
      Boolean(settings.reminder);

    $("#autoSave").checked =
      settings.autoSave !== false;

  }


  function resetProgress() {

    const confirmed =
      window.confirm(
        "Learning progress အားလုံးကို Reset လုပ်မှာ သေချာပါသလား?"
      );


    if (!confirmed) return;


    const state =
      getState();

    state.completed = [];

    state.dailyMinutes = 0;


    saveState(state);

    updateDashboard();

    renderLessons();

    renderProgress();

    updateReports();

    showToast(
      "Learning progress reset လုပ်ပြီးပါပြီ။"
    );

  }


  /* ================= TOAST ================= */

  let toastTimer = null;


  function showToast(message) {

    const toast =
      $("#toast");

    if (!toast) return;


    toast.textContent =
      message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
      setTimeout(
        () => {
          toast.classList.remove("show");
        },
        2500
      );

  }


  /* ================= EVENT LISTENERS ================= */

  function bindEvents() {

    /* Navigation */

    $$(".menu-item").forEach(button => {

      button.addEventListener(
        "click",
        function () {

          showPage(
            this.dataset.page
          );

        }
      );

    });


    /* Page Links */

    $$("[data-page-link]").forEach(button => {

      button.addEventListener(
        "click",
        function () {

          showPage(
            this.dataset.pageLink
          );

        }
      );

    });


    /* Mobile Menu */

    $("#mobileMenu")
      ?.addEventListener(
        "click",
        openMobileMenu
      );


    $("#sidebarOverlay")
      ?.addEventListener(
        "click",
        closeMobileMenu
      );


    /* Modal */

    $("#modalClose")
      ?.addEventListener(
        "click",
        closeLessonModal
      );


    $("#completeLessonBtn")
      ?.addEventListener(
        "click",
        completeCurrentLesson
      );


    $("#previousLessonBtn")
      ?.addEventListener(
        "click",
        openPreviousLesson
      );


    $("#nextLessonBtn")
      ?.addEventListener(
        "click",
        openNextLesson
      );


    $("#lessonModal")
      ?.addEventListener(
        "click",
        function (event) {

          if (
            event.target === this
          ) {

            closeLessonModal();

          }

        }
      );


    /* Lesson Search */

    $("#lessonSearch")
      ?.addEventListener(
        "input",
        renderLessons
      );


    $("#lessonCategory")
      ?.addEventListener(
        "change",
        renderLessons
      );


    /* Sales */

    $("#calculateSalesBtn")
      ?.addEventListener(
        "click",
        calculateSales
      );


    /* Pricing */

    $("#calculatePriceBtn")
      ?.addEventListener(
        "click",
        calculatePricing
      );


    /* AI */

    $("#askCoachBtn")
      ?.addEventListener(
        "click",
        () => askAICoach()
      );


    $$(".ai-question").forEach(button => {

      button.addEventListener(
        "click",
        function () {

          $("#coachInput").value =
            this.dataset.question;

          askAICoach(
            this.dataset.question
          );

        }
      );

    });


    /* AI Tools */

    $$("[data-ai-tool]").forEach(button => {

      button.addEventListener(
        "click",
        function () {

          openAITool(
            this.dataset.aiTool
          );

        }
      );

    });


    /* Settings */

    $("#saveNameBtn")
      ?.addEventListener(
        "click",
        saveProfile
      );


    $("#resetProgressBtn")
      ?.addEventListener(
        "click",
        resetProgress
      );


    /* Keyboard */

    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape"
        ) {

          closeLessonModal();
          closeMobileMenu();

        }

      }
    );

  }


  /* ================= INITIALIZE ================= */

  function init() {

    bindEvents();

    updateUserUI();

    loadSettings();

    updateDashboard();

    renderLessons();

    renderProgress();

    updateReports();

    showPage("dashboard");

    console.log(
      "Aung Business Academy V8 loaded successfully."
    );

    console.log(
      "Lessons:",
      lessons.length
    );

  }


  /* ================= START ================= */

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
