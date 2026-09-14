/* =========================================================
   AUNG BUSINESS ACADEMY
   V15 PROFESSIONAL
   COMPLETE APP.JS
   230 BURMESE BUSINESS LESSONS
   ========================================================= */

"use strict";

/* =========================================================
   STORAGE
   ========================================================= */

const STORAGE_KEY = "aba_completed_lessons";

function getCompleted() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(data) ? data.map(Number) : [];
  } catch (e) {
    return [];
  }
}

function saveCompleted(list) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...new Set(list.map(Number))])
  );
}

function isCompleted(id) {
  return getCompleted().includes(Number(id));
}

function toggleComplete(id) {
  const list = getCompleted();
  const n = Number(id);

  if (list.includes(n)) {
    saveCompleted(list.filter(x => x !== n));
  } else {
    saveCompleted([...list, n]);
  }

  renderCurrent();
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  renderCurrent();
}

/* =========================================================
   COURSE DATA
   ========================================================= */

const courseData = [

{
name:"Business Fundamentals",
icon:"🏢",
lessons:[
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
name:"Business Strategy",
icon:"🎯",
lessons:[
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
name:"Sales Management",
icon:"💼",
lessons:[
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
name:"Sales Skills",
icon:"🤝",
lessons:[
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
name:"Customer Management",
icon:"👥",
lessons:[
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
name:"Marketing",
icon:"📣",
lessons:[
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
name:"Branding",
icon:"🏷️",
lessons:[
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
name:"Finance",
icon:"💰",
lessons:[
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
name:"Accounting & P&L",
icon:"📊",
lessons:[
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
name:"Distribution & Operations",
icon:"📦",
lessons:[
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
name:"Retail & Modern Trade",
icon:"🏪",
lessons:[
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
name:"Key Account Management",
icon:"🤝",
lessons:[
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
name:"Leadership & Management",
icon:"👨‍💼",
lessons:[
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
name:"People & HR",
icon:"👥",
lessons:[
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
name:"Negotiation",
icon:"🗣️",
lessons:[
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
name:"Business Development",
icon:"💡",
lessons:[
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
name:"KPI & Data Analysis",
icon:"📈",
lessons:[
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
name:"Problem Solving & Decision Making",
icon:"🧠",
lessons:[
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
name:"Digital Business & AI",
icon:"🤖",
lessons:[
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
name:"Productivity & Career",
icon:"🚀",
lessons:[
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
   FLATTEN LESSONS
   ========================================================= */

const lessons = [];

courseData.forEach((course, categoryIndex) => {
  course.lessons.forEach((title, lessonIndex) => {
    lessons.push({
      id: lessons.length + 1,
      title,
      category: course.name,
      icon: course.icon,
      categoryIndex,
      lessonIndex
    });
  });
});

/* =========================================================
   STATE
   ========================================================= */

let currentSection = "dashboard";
let currentLessonId = null;
let currentCategory = "All";
let searchTerm = "";

/* =========================================================
   HELPERS
   ========================================================= */

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

function getLesson(id) {
  return lessons.find(l => l.id === Number(id));
}

function getCategoryLessons(category) {
  return lessons.filter(l => l.category === category);
}

function getProgress() {
  const total = lessons.length;
  const completed = getCompleted().filter(id =>
    lessons.some(l => l.id === id)
  ).length;

  return total ? Math.round((completed / total) * 100) : 0;
}

function categoryProgress(category) {
  const list = getCategoryLessons(category);
  if (!list.length) return 0;

  const done = list.filter(l => isCompleted(l.id)).length;
  return Math.round(done / list.length * 100);
}

function formatNumber(n) {
  return Number(n || 0).toLocaleString();
}

/* =========================================================
   V15 LESSON CONTENT
   ========================================================= */

function getLessonContent(lesson) {

  const title = lesson.title;
  const category = lesson.category;

  const content = {
    objective:
      `${title} ကို နားလည်ပြီး လုပ်ငန်းခွင်မှာ မှန်ကန်စွာ အသုံးချနိုင်ရန်။`,

    concept:
      `${title} ဆိုတာ ${category} နယ်ပယ်ထဲမှာ လုပ်ငန်းရလဒ်ကောင်းရဖို့ အသုံးပြုရတဲ့ အရေးကြီးတဲ့ အယူအဆတစ်ခု ဖြစ်ပါတယ်။`,

    importance:
      `Manager တစ်ယောက်အနေနဲ့ ဒီအကြောင်းအရာကို နားလည်ထားခြင်းက ဆုံးဖြတ်ချက်ချရာမှာ ပိုတိကျစေပြီး Team၊ Customer၊ Sales နဲ့ Business Result တွေကို ပိုကောင်းအောင် စီမံနိုင်စေပါတယ်။`,

    details:[
      {
        heading:"၁။ အခြေခံနားလည်မှု",
        text:
          `${title} ကို အရင်ဆုံး အဓိပ္ပါယ်တိတိကျကျ နားလည်ရပါမယ်။ အဓိပ္ပါယ်ကို သိရုံနဲ့ မပြီးဘဲ မိမိလုပ်ငန်းရဲ့ အခြေအနေနဲ့ ချိတ်ဆက်စဉ်းစားရပါမယ်။`
      },
      {
        heading:"၂။ Manager အမြင်",
        text:
          `Manager တစ်ယောက်အနေနဲ့ ${title} ကို Team လုပ်ဆောင်ချက်၊ Customer လိုအပ်ချက်၊ Business Target နဲ့ ချိတ်ဆက်ပြီး ကြည့်ရပါမယ်။ ပြဿနာတစ်ခုတွေ့ရင် အကြောင်းရင်းကိုရှာပြီး Action Plan ချမှတ်နိုင်ရပါမယ်။`
      },
      {
        heading:"၃။ လက်တွေ့အသုံးချခြင်း",
        text:
          `နေ့စဉ်လုပ်ငန်းမှာ Plan → Execute → Measure → Review → Improve ဆိုတဲ့ စနစ်ကို အသုံးပြုပါ။ လုပ်ပြီးသွားတဲ့အလုပ်ကို မတိုင်းတာဘဲထားရင် တကယ်တိုးတက်လာမှုကို မသိနိုင်ပါဘူး။`
      },
      {
        heading:"၄။ Data နှင့်တိုင်းတာခြင်း",
        text:
          `${title} နဲ့ဆိုင်တဲ့ KPI၊ Sales Result၊ Customer Feedback၊ Cost၊ Profit သို့မဟုတ် Team Performance စတဲ့ အချက်အလက်တွေကို စုဆောင်းပြီး အခြေအနေမှန်ကို သုံးသပ်ပါ။`
      },
      {
        heading:"၅။ တိုးတက်အောင်လုပ်ခြင်း",
        text:
          `ရလဒ်မကောင်းတဲ့အခါ လူတစ်ယောက်ကိုသာ အပြစ်တင်တာထက် Process၊ Resource၊ Skill၊ Planning နဲ့ Execution ဘယ်နေရာမှာ Gap ရှိသလဲ ရှာပြီး ပြန်လည်တိုးတက်အောင်လုပ်ပါ။`
      }
    ],

    example:
      `ဥပမာအားဖြင့် Sales Team တစ်ခုမှာ Target မပြည့်ဘူးဆိုရင် Target မပြည့်တာကိုသာ ကြည့်မနေဘဲ Customer Coverage၊ Outlet Visit၊ Product Availability၊ Conversion Rate နဲ့ Team Execution ကို ခွဲပြီး သုံးသပ်နိုင်ပါတယ်။`,

    managerTips:[
      `အရေးကြီးတဲ့အချက်ကို Team ကို ရိုးရှင်းစွာရှင်းပြပါ။`,
      `Target ကို တိကျတဲ့ Action တွေအဖြစ် ပြောင်းပါ။`,
      `Data ကို အခြေခံပြီး ဆုံးဖြတ်ပါ။`,
      `Team ကို Coaching လုပ်ပြီး Feedback ပေးပါ။`,
      `Result ကို ပုံမှန် Review လုပ်ပြီး လိုအပ်တာ ပြင်ဆင်ပါ။`
    ],

    mistakes:[
      `အဓိပ္ပါယ်ကို နားမလည်ဘဲ အလွတ်ကျက်သုံးခြင်း။`,
      `Data မကြည့်ဘဲ ခန့်မှန်းပြီး ဆုံးဖြတ်ခြင်း။`,
      `Plan ရှိပေမယ့် Execution မရှိခြင်း။`,
      `Team ကို Feedback မပေးခြင်း။`,
      `Result မကောင်းတဲ့အခါ Root Cause မရှာခြင်း။`
    ],

    actionPlan:[
      `ဒီနေ့ မိမိလုပ်ငန်းနဲ့ဆိုင်တဲ့ အခြေအနေတစ်ခုကို ရွေးပါ။`,
      `${title} နဲ့ ဘယ်လိုဆက်စပ်နေသလဲ ရေးပါ။`,
      `လက်ရှိ Gap ၃ ခုကို ရှာပါ။`,
      `Gap တစ်ခုချင်းစီအတွက် Action တစ်ခု သတ်မှတ်ပါ။`,
      `၇ ရက်အတွင်း Result ကို ပြန် Review လုပ်ပါ။`
    ],

    checklist:[
      `${title} ရဲ့ အဓိပ္ပါယ်ကို ရှင်းပြနိုင်ပါသလား။`,
      `မိမိလုပ်ငန်းနဲ့ ချိတ်ဆက်နိုင်ပါသလား။`,
      `KPI သို့မဟုတ် Data တစ်ခု သတ်မှတ်ထားပါသလား။`,
      `Action Plan ရှိပါသလား။`,
      `Result ကို Review လုပ်မယ့်အချိန် သတ်မှတ်ထားပါသလား။`
    ],

    quiz:[
      `${title} ကို ဘာကြောင့် နားလည်ထားဖို့လိုသလဲ။`,
      `Manager တစ်ယောက်အနေနဲ့ ဘယ်လိုအသုံးချနိုင်သလဲ။`,
      `ဘယ် KPI သို့မဟုတ် Data နဲ့ တိုင်းတာနိုင်သလဲ။`
    ],

    summary:
      `${title} ကို သီအိုရီအဖြစ်သာ မထားဘဲ မိမိလုပ်ငန်းရဲ့ လက်တွေ့အခြေအနေမှာ အသုံးချပါ။ ရလဒ်ကို တိုင်းတာပြီး Gap ကိုရှာကာ ဆက်လက်တိုးတက်အောင်လုပ်ခြင်းက Professional Manager တစ်ယောက်ရဲ့ အရေးကြီးတဲ့ အလေ့အကျင့်ဖြစ်ပါတယ်။`
  };

  return content;
}

/* =========================================================
   APP CONTENT
   ========================================================= */

function appContent() {
  return document.getElementById("app-content");
}

/* =========================================================
   DASHBOARD V15
   ========================================================= */

function renderDashboard() {

  const completed = getCompleted().length;
  const progress = getProgress();

  const nextLesson =
    lessons.find(l => !isCompleted(l.id)) || lessons[0];

  appContent().innerHTML = `

    <section class="dashboard-hero">
      <h1>မင်္ဂလာပါ Aung Zar Ni Win 👋</h1>
      <p>
        Aung Business Academy V15 မှာ Business, Sales,
        Marketing, Finance, Leadership နဲ့ Management
        အကြောင်းအရာတွေကို လက်တွေ့အသုံးချနိုင်အောင် လေ့လာနိုင်ပါတယ်။
      </p>
    </section>

    <div class="stats-grid">

      <div class="stat-card">
        <div class="stat-icon">📚</div>
        <div class="stat-label">Total Lessons</div>
        <div class="stat-value">${formatNumber(lessons.length)}</div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">✅</div>
        <div class="stat-label">Completed</div>
        <div class="stat-value">${formatNumber(completed)}</div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">📈</div>
        <div class="stat-label">Progress</div>
        <div class="stat-value">${progress}%</div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">🏢</div>
        <div class="stat-label">Categories</div>
        <div class="stat-value">${courseData.length}</div>
      </div>

    </div>

    <div class="card" style="margin-bottom:20px;">
      <div class="card-body">

        <div style="display:flex;justify-content:space-between;gap:12px;align-items:flex-start;flex-wrap:wrap;">

          <div style="min-width:0;flex:1;">
            <div style="color:#2563eb;font-size:11px;font-weight:800;margin-bottom:5px;">
              CONTINUE LEARNING
            </div>

            <h2 style="margin:0 0 7px;font-size:19px;line-height:1.5;overflow-wrap:anywhere;">
              ${escapeHtml(nextLesson.title)}
            </h2>

            <p style="margin:0;color:#64748b;font-size:12px;line-height:1.8;">
              ${escapeHtml(nextLesson.category)}
            </p>
          </div>

          <button
            class="btn btn-primary"
            data-action="open-lesson"
            data-id="${nextLesson.id}"
            type="button">
            ဆက်လေ့လာမယ် →
          </button>

        </div>

        <div style="margin-top:16px;">
          <div class="progress-bar">
            <div class="progress-fill" style="width:${progress}%"></div>
          </div>

          <div class="progress-text">
            <span>Overall Progress</span>
            <span>${progress}%</span>
          </div>
        </div>

      </div>
    </div>

    <div style="margin-bottom:20px;">
      <h2 class="section-title">🎯 Your Learning Focus</h2>
      <p class="section-subtitle">
        Professional Manager တစ်ယောက်ဖြစ်ဖို့ အရေးကြီးတဲ့ အဓိကနယ်ပယ်များ
      </p>

      <div class="focus-grid">

        ${[
          ["💼","Sales Management","Sales Target၊ Team၊ Forecast နဲ့ Execution ကို စီမံပါ။"],
          ["🎯","Business Strategy","Business Direction နဲ့ Growth Strategy တည်ဆောက်ပါ။"],
          ["👥","Leadership","Team ကို Coaching၊ Feedback နဲ့ Motivation ပေးပါ။"],
          ["📊","Data Analysis","KPI နဲ့ Data ကို အသုံးပြုပြီး ဆုံးဖြတ်ပါ။"],
          ["💰","Finance","Revenue၊ Cost၊ Profit နဲ့ Cash Flow ကို နားလည်ပါ။"],
          ["🤖","AI & Digital","AI နဲ့ Digital Tools ကို Business မှာ အသုံးချပါ။"]
        ].map(x => `
          <div class="focus-card">
            <div style="font-size:23px;margin-bottom:7px;">${x[0]}</div>
            <h3>${x[1]}</h3>
            <p>${x[2]}</p>
          </div>
        `).join("")}

      </div>
    </div>

    <div>
      <h2 class="section-title">📚 Business Academy Categories</h2>
      <p class="section-subtitle">
        သင်ယူလိုတဲ့ Business နယ်ပယ်ကို ရွေးချယ်ပါ
      </p>

      <div class="category-grid">
        ${courseData.map((c,i) => `
          <div
            class="category-card"
            data-action="filter-category"
            data-category="${escapeHtml(c.name)}">

            <div class="category-icon">${c.icon}</div>
            <div class="category-name">${escapeHtml(c.name)}</div>
            <div class="category-count">
              ${c.lessons.length} Lessons · ${categoryProgress(c.name)}%
            </div>

          </div>
        `).join("")}
      </div>
    </div>
  `;
}

/* =========================================================
   COURSES
   ========================================================= */

function renderCourses() {

  appContent().innerHTML = `

    <h1 class="section-title">📚 My Courses</h1>

    <p class="section-subtitle">
      Aung Business Academy V15 ရဲ့ Professional Business Learning Program
    </p>

    <div class="grid grid-2">

      ${courseData.map(c => {

        const p = categoryProgress(c.name);

        return `
          <div class="course-card">

            <div class="course-icon">${c.icon}</div>

            <h2 class="course-title">
              ${escapeHtml(c.name)}
            </h2>

            <p class="course-description">
              ${c.lessons.length} lessons ပါဝင်ပြီး
              ${escapeHtml(c.name)} ကို အခြေခံမှ လက်တွေ့အထိ လေ့လာနိုင်ပါတယ်။
            </p>

            <div class="progress-bar">
              <div class="progress-fill" style="width:${p}%"></div>
            </div>

            <div class="progress-text">
              <span>${p}% Completed</span>
              <span>${c.lessons.length} Lessons</span>
            </div>

            <div style="margin-top:14px;">
              <button
                class="btn btn-primary btn-small"
                data-action="filter-category"
                data-category="${escapeHtml(c.name)}"
                type="button">
                Lessons ကြည့်မယ်
              </button>
            </div>

          </div>
        `;
      }).join("")}

    </div>
  `;
}

/* =========================================================
   LESSONS
   ========================================================= */

function renderLessons() {

  let list = lessons;

  if (currentCategory !== "All") {
    list = list.filter(l => l.category === currentCategory);
  }

  if (searchTerm.trim()) {
    const q = searchTerm.toLowerCase();

    list = list.filter(l =>
      l.title.toLowerCase().includes(q) ||
      l.category.toLowerCase().includes(q)
    );
  }

  appContent().innerHTML = `

    <h1 class="section-title">📖 Lessons</h1>

    <p class="section-subtitle">
      230 Business Lessons ကို ကိုယ်တိုင်ရွေးပြီး လေ့လာနိုင်ပါတယ်။
    </p>

    <div class="lesson-toolbar">

      <div class="search-box">
        <input
          id="lessonSearch"
          type="search"
          value="${escapeHtml(searchTerm)}"
          placeholder="Lesson ရှာပါ..."
          autocomplete="off">
      </div>

      <select id="lessonCategory" class="filter-select">

        <option value="All"
          ${currentCategory === "All" ? "selected" : ""}>
          All Categories
        </option>

        ${courseData.map(c => `
          <option
            value="${escapeHtml(c.name)}"
            ${currentCategory === c.name ? "selected" : ""}>
            ${escapeHtml(c.name)}
          </option>
        `).join("")}

      </select>

    </div>

    <div style="margin-bottom:12px;color:#64748b;font-size:11px;">
      ${list.length} lessons found
    </div>

    <div class="lesson-list">

      ${
        list.length
        ?
        list.map(l => `
          <div
            class="lesson-item"
            data-action="open-lesson"
            data-id="${l.id}">

            <div class="lesson-number">
              ${l.id}
            </div>

            <div class="lesson-item-content">

              <div class="lesson-item-title">
                ${escapeHtml(l.title)}
              </div>

              <div class="lesson-item-category">
                ${l.icon} ${escapeHtml(l.category)}
              </div>

            </div>

            <div class="lesson-status">
              ${isCompleted(l.id) ? "✅" : "›"}
            </div>

          </div>
        `).join("")
        :
        `
          <div class="empty-state">
            <div class="empty-icon">🔍</div>
            <h3>Lesson မတွေ့ပါ</h3>
            <p>Search စာသား သို့မဟုတ် Category ကို ပြန်စစ်ပါ။</p>
          </div>
        `
      }

    </div>
  `;
}

/* =========================================================
   LESSON READER
   ========================================================= */

function renderLessonReader(id) {

  const lesson = getLesson(id);

  if (!lesson) {
    goToSection("lessons");
    return;
  }

  currentLessonId = lesson.id;

  const c = getLessonContent(lesson);

  const index = lessons.findIndex(l => l.id === lesson.id);

  const previous = lessons[index - 1];
  const next = lessons[index + 1];

  appContent().innerHTML = `

    <div style="margin-bottom:14px;">
      <button
        class="btn btn-secondary btn-small"
        data-action="back-lessons"
        type="button">
        ← Lessons
      </button>
    </div>

    <article class="lesson-reader">

      <header class="lesson-reader-header">

        <div class="lesson-reader-category">
          ${lesson.icon} ${escapeHtml(lesson.category)}
        </div>

        <h1 class="lesson-reader-title">
          ${escapeHtml(lesson.title)}
        </h1>

        <div style="margin-top:12px;color:#64748b;font-size:11px;">
          Lesson ${lesson.id} of ${lessons.length}
        </div>

      </header>

      <div class="lesson-reader-body">

        <section class="lesson-section">

          <h3>🎯 Learning Objective</h3>

          <p>${escapeHtml(c.objective)}</p>

        </section>

        <section class="lesson-section">

          <h3>📖 အဓိပ္ပါယ်နှင့် Concept</h3>

          <p>${escapeHtml(c.concept)}</p>

        </section>

        <section class="lesson-section">

          <h3>❓ ဘာကြောင့်အရေးကြီးလဲ</h3>

          <p>${escapeHtml(c.importance)}</p>

        </section>

        ${c.details.map(d => `
          <section class="lesson-section">

            <h3>${escapeHtml(d.heading)}</h3>

            <p>${escapeHtml(d.text)}</p>

          </section>
        `).join("")}

        <section class="lesson-section">

          <h3>💼 လုပ်ငန်းခွင် Example</h3>

          <div class="lesson-example">

            <strong>လက်တွေ့ဥပမာ</strong>

            <p>${escapeHtml(c.example)}</p>

          </div>

        </section>

        <section class="lesson-section">

          <h3>💡 Manager Tips</h3>

          <ul>
            ${c.managerTips.map(x =>
              `<li>${escapeHtml(x)}</li>`
            ).join("")}
          </ul>

        </section>

        <section class="lesson-section">

          <h3>⚠️ Common Mistakes</h3>

          <ul>
            ${c.mistakes.map(x =>
              `<li>${escapeHtml(x)}</li>`
            ).join("")}
          </ul>

        </section>

        <section class="lesson-section">

          <h3>🚀 Action Plan</h3>

          <ol>
            ${c.actionPlan.map(x =>
              `<li>${escapeHtml(x)}</li>`
            ).join("")}
          </ol>

        </section>

        <section class="lesson-section">

          <h3>✅ Checklist</h3>

          <div class="checklist">

            ${c.checklist.map(x => `
              <div class="check-item">
                <span>☐</span>
                <span>${escapeHtml(x)}</span>
              </div>
            `).join("")}

          </div>

        </section>

        <section class="lesson-section">

          <h3>📝 Knowledge Check</h3>

          <ol>
            ${c.quiz.map(x =>
              `<li>${escapeHtml(x)}</li>`
            ).join("")}
          </ol>

        </section>

        <section class="lesson-section">

          <h3>📌 Summary</h3>

          <p>${escapeHtml(c.summary)}</p>

        </section>

      </div>

      <footer class="lesson-reader-actions">

        ${
          previous
          ?
          `<button
             class="btn btn-secondary"
             data-action="open-lesson"
             data-id="${previous.id}"
             type="button">
             ← Previous
           </button>`
          :
          `<button class="btn btn-secondary" disabled type="button">
             ← Previous
           </button>`
        }

        <button
          class="btn ${isCompleted(lesson.id) ? "btn-success" : "btn-primary"}"
          data-action="toggle-complete"
          data-id="${lesson.id}"
          type="button">

          ${isCompleted(lesson.id)
            ? "✅ Completed"
            : "☑️ Mark Complete"}

        </button>

        ${
          next
          ?
          `<button
             class="btn btn-primary"
             data-action="open-lesson"
             data-id="${next.id}"
             type="button">
             Next →
           </button>`
          :
          `<button class="btn btn-primary" disabled type="button">
             Next →
           </button>`
        }

      </footer>

    </article>
  `;

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

/* =========================================================
   PROGRESS
   ========================================================= */

function renderProgress() {

  const completed = getCompleted().length;
  const progress = getProgress();

  appContent().innerHTML = `

    <h1 class="section-title">📊 My Progress</h1>

    <p class="section-subtitle">
      သင်ယူပြီးသော Lessons နှင့် Category တစ်ခုချင်းစီရဲ့ Progress ကို ကြည့်ပါ။
    </p>

    <div class="stats-grid">

      <div class="stat-card">
        <div class="stat-icon">📚</div>
        <div class="stat-label">Total</div>
        <div class="stat-value">${lessons.length}</div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">✅</div>
        <div class="stat-label">Completed</div>
        <div class="stat-value">${completed}</div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">📈</div>
        <div class="stat-label">Progress</div>
        <div class="stat-value">${progress}%</div>
      </div>

      <div class="stat-card">
        <div class="stat-icon">🎯</div>
        <div class="stat-label">Remaining</div>
        <div class="stat-value">${lessons.length - completed}</div>
      </div>

    </div>

    <div class="card" style="margin-bottom:18px;">
      <div class="card-body">

        <h3 style="margin:0 0 10px;font-size:15px;">
          Overall Learning Progress
        </h3>

        <div class="progress-bar">
          <div class="progress-fill" style="width:${progress}%"></div>
        </div>

        <div class="progress-text">
          <span>${completed} / ${lessons.length} completed</span>
          <span>${progress}%</span>
        </div>

      </div>
    </div>

    <div class="grid grid-2">

      ${courseData.map(c => {

        const p = categoryProgress(c.name);

        return `
          <div class="report-card">

            <h3>
              ${c.icon} ${escapeHtml(c.name)}
            </h3>

            <div class="progress-bar">
              <div class="progress-fill" style="width:${p}%"></div>
            </div>

            <div class="progress-text">
              <span>${c.lessons.length} lessons</span>
              <span>${p}%</span>
            </div>

          </div>
        `;

      }).join("")}

    </div>

    <div style="margin-top:20px;">

      <button
        class="btn btn-danger"
        data-action="reset-progress"
        type="button">
        Reset Progress
      </button>

    </div>
  `;
}

/* =========================================================
   SALES MANAGER
   ========================================================= */

function renderSalesManager() {

  appContent().innerHTML = `

    <h1 class="section-title">💼 Sales Manager</h1>

    <p class="section-subtitle">
      Sales Manager တစ်ယောက်အနေနဲ့ Target မှ Result အထိ စနစ်တကျ စီမံရန်။
    </p>

    <div class="grid grid-2">

      <div class="card">
        <div class="card-body">

          <h3 style="margin:0 0 12px;">🎯 Sales Manager Framework</h3>

          <div class="checklist">

            <div class="check-item">
              <span>1.</span>
              <span>Target သတ်မှတ်ပါ</span>
            </div>

            <div class="check-item">
              <span>2.</span>
              <span>Target ကို Team နှင့် Territory အလိုက် ခွဲပါ</span>
            </div>

            <div class="check-item">
              <span>3.</span>
              <span>Daily Execution Plan ပြုလုပ်ပါ</span>
            </div>

            <div class="check-item">
              <span>4.</span>
              <span>KPI ဖြင့် တိုင်းတာပါ</span>
            </div>

            <div class="check-item">
              <span>5.</span>
              <span>Review → Coaching → Improve လုပ်ပါ</span>
            </div>

          </div>

        </div>
      </div>

      <div class="card">
        <div class="card-body">

          <h3 style="margin:0 0 12px;">📌 Manager Mindset</h3>

          <p style="margin:0;color:#475569;font-size:13px;line-height:2;">
            Manager က အလုပ်အားလုံးကို ကိုယ်တိုင်လုပ်ရတာမဟုတ်ပါဘူး။
            Team ကို ရှင်းလင်းတဲ့ Expectation ပေးပြီး Coaching၊
            Support နဲ့ Accountability ပြုလုပ်ကာ Result ရအောင်
            စီမံရတာဖြစ်ပါတယ်။
          </p>

        </div>
      </div>

    </div>
  `;
}

/* =========================================================
   PRICING CALCULATOR
   ========================================================= */

function renderPricing() {

  appContent().innerHTML = `

    <h1 class="section-title">🧮 Pricing Calculator</h1>

    <p class="section-subtitle">
      Cost နဲ့ Desired Margin ကို အသုံးပြုပြီး Selling Price တွက်ချက်ပါ။
    </p>

    <div class="calculator-grid">

      <div class="card">
        <div class="card-body">

          <div class="form-group">

            <label>Cost</label>

            <input
              id="priceCost"
              class="form-control"
              type="number"
              min="0"
              placeholder="ဥပမာ 10000">

          </div>

          <div class="form-group">

            <label>Desired Margin (%)</label>

            <input
              id="priceMargin"
              class="form-control"
              type="number"
              min="0"
              max="99"
              placeholder="ဥပမာ 30">

          </div>

          <button
            class="btn btn-primary"
            data-action="calculate-price"
            type="button">
            Calculate
          </button>

        </div>
      </div>

      <div class="result-box">

        <div class="result-label">
          Recommended Selling Price
        </div>

        <div
          id="priceResult"
          class="result-value">
          —
        </div>

        <div style="margin-top:12px;color:#475569;font-size:11px;line-height:1.8;">
          Formula: Cost ÷ (1 − Margin)
        </div>

      </div>

    </div>
  `;
}

/* =========================================================
   REPORTS
   ========================================================= */

function renderReports() {

  const completed = getCompleted().length;
  const progress = getProgress();

  appContent().innerHTML = `

    <h1 class="section-title">📈 Reports</h1>

    <p class="section-subtitle">
      Academy Learning Performance Report
    </p>

    <div class="report-grid">

      <div class="report-card">

        <h3>📊 Learning Summary</h3>

        <div class="metric-row">
          <span class="metric-name">Total Lessons</span>
          <span class="metric-value">${lessons.length}</span>
        </div>

        <div class="metric-row">
          <span class="metric-name">Completed Lessons</span>
          <span class="metric-value">${completed}</span>
        </div>

        <div class="metric-row">
          <span class="metric-name">Remaining Lessons</span>
          <span class="metric-value">${lessons.length - completed}</span>
        </div>

        <div class="metric-row">
          <span class="metric-name">Overall Progress</span>
          <span class="metric-value">${progress}%</span>
        </div>

      </div>

      <div class="report-card">

        <h3>🏆 Strong Categories</h3>

        ${courseData
          .map(c => ({
            name:c.name,
            icon:c.icon,
            p:categoryProgress(c.name)
          }))
          .sort((a,b) => b.p - a.p)
          .slice(0,5)
          .map(x => `
            <div class="metric-row">
              <span class="metric-name">
                ${x.icon} ${escapeHtml(x.name)}
              </span>
              <span class="metric-value">${x.p}%</span>
            </div>
          `).join("")}

      </div>

    </div>
  `;
}

/* =========================================================
   AI BUSINESS COACH
   ========================================================= */

function renderAICoach() {

  appContent().innerHTML = `

    <h1 class="section-title">🤖 AI Business Coach</h1>

    <p class="section-subtitle">
      Business Problem တစ်ခုကို ရေးပြီး Managerial Thinking နဲ့ ဖြေရှင်းကြည့်ပါ။
    </p>

    <div class="ai-box">

      <div class="form-group">

        <label>
          သင့် Business Problem
        </label>

        <textarea
          id="coachQuestion"
          class="form-control"
          placeholder="ဥပမာ - Sales Target မပြည့်ရင် ဘာလုပ်ရမလဲ?"></textarea>

      </div>

      <button
        class="btn btn-primary"
        data-action="ask-coach"
        type="button">
        🤖 Coach Me
      </button>

      <div
        id="coachResult"
        style="margin-top:15px;">
      </div>

    </div>
  `;
}

/* =========================================================
   AI TOOLS
   ========================================================= */

function renderAITools() {

  appContent().innerHTML = `

    <h1 class="section-title">🛠 AI & Business Tools</h1>

    <p class="section-subtitle">
      Daily Business Management အတွက် အသုံးဝင်တဲ့ Tools များ။
    </p>

    <div class="grid grid-2">

      <div class="card">
        <div class="card-body">

          <h3 style="margin:0 0 14px;">
            🎯 Sales Target Breakdown
          </h3>

          <div class="form-group">
            <label>Monthly Target</label>
            <input
              id="targetMonth"
              class="form-control"
              type="number"
              placeholder="ဥပမာ 100000000">
          </div>

          <div class="form-group">
            <label>Working Days</label>
            <input
              id="targetDays"
              class="form-control"
              type="number"
              value="26">
          </div>

          <button
            class="btn btn-primary"
            data-action="calculate-target"
            type="button">
            Calculate
          </button>

          <div id="targetResult" style="margin-top:15px;"></div>

        </div>
      </div>

      <div class="card">
        <div class="card-body">

          <h3 style="margin:0 0 14px;">
            📈 Growth Calculator
          </h3>

          <div class="form-group">
            <label>Previous Sales</label>
            <input
              id="growthOld"
              class="form-control"
              type="number">
          </div>

          <div class="form-group">
            <label>Current Sales</label>
            <input
              id="growthNew"
              class="form-control"
              type="number">
          </div>

          <button
            class="btn btn-primary"
            data-action="calculate-growth"
            type="button">
            Calculate Growth
          </button>

          <div id="growthResult" style="margin-top:15px;"></div>

        </div>
      </div>

    </div>
  `;
}

/* =========================================================
   SETTINGS
   ========================================================= */

function renderSettings() {

  appContent().innerHTML = `

    <h1 class="section-title">⚙️ Settings</h1>

    <p class="section-subtitle">
      Aung Business Academy V15 Settings
    </p>

    <div class="card">

      <div class="card-body">

        <div class="settings-list">

          <div class="settings-item">

            <div class="settings-item-text">

              <div class="settings-item-title">
                👤 Profile
              </div>

              <div class="settings-item-description">
                Aung Zar Ni Win · Business Manager
              </div>

            </div>

          </div>

          <div class="settings-item">

            <div class="settings-item-text">

              <div class="settings-item-title">
                🎓 Academy Version
              </div>

              <div class="settings-item-description">
                Aung Business Academy V15 Professional
              </div>

            </div>

          </div>

          <div class="settings-item">

            <div class="settings-item-text">

              <div class="settings-item-title">
                📚 Lessons
              </div>

              <div class="settings-item-description">
                ${lessons.length} Business Lessons
              </div>

            </div>

          </div>

          <div class="settings-item">

            <div class="settings-item-text">

              <div class="settings-item-title">
                💾 Progress Storage
              </div>

              <div class="settings-item-description">
                Browser Local Storage
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  `;
}

/* =========================================================
   NAVIGATION
   ========================================================= */

const sectionTitles = {
  dashboard:"Aung Business Academy",
  courses:"My Courses",
  lessons:"Lessons",
  progress:"My Progress",
  "sales-manager":"Sales Manager",
  pricing:"Pricing Calculator",
  reports:"Reports",
  "ai-business-coach":"AI Business Coach",
  "ai-tools":"AI Tools",
  settings:"Settings"
};

function updateHeader() {

  const header = document.getElementById("headerTitle");

  if (header) {
    header.textContent =
      sectionTitles[currentSection] ||
      "Aung Business Academy";
  }

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle(
      "active",
      item.dataset.section === currentSection
    );
  });
}

function goToSection(section) {

  currentSection = section;
  currentLessonId = null;

  if (section !== "lessons") {
    currentCategory = "All";
    searchTerm = "";
  }

  updateHeader();

  switch(section) {

    case "dashboard":
      renderDashboard();
      break;

    case "courses":
      renderCourses();
      break;

    case "lessons":
      renderLessons();
      break;

    case "progress":
      renderProgress();
      break;

    case "sales-manager":
      renderSalesManager();
      break;

    case "pricing":
      renderPricing();
      break;

    case "reports":
      renderReports();
      break;

    case "ai-business-coach":
      renderAICoach();
      break;

    case "ai-tools":
      renderAITools();
      break;

    case "settings":
      renderSettings();
      break;

    default:
      renderDashboard();
  }

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

/* =========================================================
   RENDER CURRENT
   ========================================================= */

function renderCurrent() {

  if (currentLessonId) {
    renderLessonReader(currentLessonId);
    return;
  }

  goToSection(currentSection);
}

/* =========================================================
   CLICK EVENTS
   ========================================================= */

document.addEventListener("click", function(event) {

  const nav = event.target.closest(".nav-item");

  if (nav) {

    const section = nav.dataset.section;

    if (section) {
      goToSection(section);

      const sidebar =
        document.getElementById("sidebar");

      if (sidebar) {
        sidebar.classList.remove("open");
      }
    }

    return;
  }

  const actionElement =
    event.target.closest("[data-action]");

  if (!actionElement) return;

  const action =
    actionElement.dataset.action;

  /* Open lesson */

  if (action === "open-lesson") {

    const id =
      Number(actionElement.dataset.id);

    if (id) {
      renderLessonReader(id);
    }

    return;
  }

  /* Back */

  if (action === "back-lessons") {

    currentLessonId = null;
    goToSection("lessons");

    return;
  }

  /* Complete */

  if (action === "toggle-complete") {

    const id =
      Number(actionElement.dataset.id);

    toggleComplete(id);

    return;
  }

  /* Category */

  if (action === "filter-category") {

    currentCategory =
      actionElement.dataset.category || "All";

    searchTerm = "";

    currentSection = "lessons";

    updateHeader();
    renderLessons();

    return;
  }

  /* Reset */

  if (action === "reset-progress") {

    const ok =
      window.confirm(
        "Learning Progress အားလုံးကို Reset လုပ်မလား?"
      );

    if (ok) {
      resetProgress();
    }

    return;
  }

  /* Pricing */

  if (action === "calculate-price") {

    const cost =
      Number(document.getElementById("priceCost")?.value || 0);

    const margin =
      Number(document.getElementById("priceMargin")?.value || 0);

    const result =
      document.getElementById("priceResult");

    if (!result) return;

    if (cost <= 0 || margin < 0 || margin >= 100) {

      result.textContent =
        "မှန်ကန်တဲ့ Cost နှင့် Margin ထည့်ပါ။";

      return;
    }

    const price =
      cost / (1 - margin / 100);

    result.textContent =
      Math.round(price).toLocaleString();

    return;
  }

  /* Target */

  if (action === "calculate-target") {

    const monthly =
      Number(document.getElementById("targetMonth")?.value || 0);

    const days =
      Number(document.getElementById("targetDays")?.value || 0);

    const result =
      document.getElementById("targetResult");

    if (!result) return;

    if (monthly <= 0 || days <= 0) {

      result.innerHTML = `
        <div class="alert alert-warning">
          Target နှင့် Working Days ထည့်ပါ။
        </div>
      `;

      return;
    }

    const daily = monthly / days;
    const weekly = daily * 6;

    result.innerHTML = `
      <div class="result-box">
        <div class="result-label">Daily Target</div>
        <div class="result-value">
          ${Math.round(daily).toLocaleString()}
        </div>

        <div style="margin-top:10px;color:#64748b;font-size:11px;">
          Weekly Approx:
          ${Math.round(weekly).toLocaleString()}
        </div>
      </div>
    `;

    return;
  }

  /* Growth */

  if (action === "calculate-growth") {

    const oldValue =
      Number(document.getElementById("growthOld")?.value || 0);

    const newValue =
      Number(document.getElementById("growthNew")?.value || 0);

    const result =
      document.getElementById("growthResult");

    if (!result) return;

    if (oldValue <= 0) {

      result.innerHTML = `
        <div class="alert alert-warning">
          Previous Sales ထည့်ပါ။
        </div>
      `;

      return;
    }

    const growth =
      ((newValue - oldValue) / oldValue) * 100;

    result.innerHTML = `
      <div class="result-box">
        <div class="result-label">
          Sales Growth
        </div>

        <div class="result-value">
          ${growth.toFixed(2)}%
        </div>
      </div>
    `;

    return;
  }

  /* AI Coach */

  if (action === "ask-coach") {

    const input =
      document.getElementById("coachQuestion");

    const result =
      document.getElementById("coachResult");

    if (!input || !result) return;

    const question =
      input.value.trim();

    if (!question) {

      result.innerHTML = `
        <div class="alert alert-warning">
          Business Problem တစ်ခု ရေးထည့်ပါ။
        </div>
      `;

      return;
    }

    let response = `
      <strong>🤖 Managerial Advice</strong><br><br>
      ပထမဆုံး Problem ကို တိတိကျကျ သတ်မှတ်ပါ။
      ပြီးရင် Root Cause ကို ရှာပါ။ Data ကို စစ်ဆေးပြီး
      Action Plan တစ်ခု သတ်မှတ်ပါ။ Action ပြီးနောက်
      KPI နဲ့ Result ကို ပြန်တိုင်းတာပြီး လိုအပ်တာကို
      ပြန်လည်တိုးတက်အောင်လုပ်ပါ။
      <br><br>
      <strong>Framework:</strong>
      Problem → Root Cause → Action → KPI → Review
    `;

    const q = question.toLowerCase();

    if (
      q.includes("sales") ||
      q.includes("target") ||
      question.includes("အရောင်း")
    ) {

      response = `
        <strong>🤖 Sales Manager Advice</strong><br><br>
        Sales Target မပြည့်ရင် Target ကို Daily / Weekly
        အလိုက် ခွဲပြီး Execution ကို စစ်ပါ။
        <br><br>
        ၁။ Customer Coverage<br>
        ၂။ Outlet Visit<br>
        ၃။ Product Availability<br>
        ၄။ Conversion Rate<br>
        ၅။ Salesperson Productivity<br>
        ၆။ Competitor Activity
        <br><br>
        အချက်တစ်ခုချင်းစီရဲ့ Gap ကိုရှာပြီး
        Owner + Action + Deadline သတ်မှတ်ပါ။
      `;
    }

    result.innerHTML = `
      <div class="ai-message">
        ${response}
      </div>
    `;

    return;
  }

});

/* =========================================================
   INPUT EVENTS
   ========================================================= */

document.addEventListener("input", function(event) {

  if (event.target.id === "lessonSearch") {

    searchTerm = event.target.value || "";

    renderLessons();

    const input =
      document.getElementById("lessonSearch");

    if (input) {
      input.focus();

      try {
        input.setSelectionRange(
          searchTerm.length,
          searchTerm.length
        );
      } catch(e){}
    }
  }

});

document.addEventListener("change", function(event) {

  if (event.target.id === "lessonCategory") {

    currentCategory =
      event.target.value || "All";

    renderLessons();
  }

});

/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function() {

  currentSection = "dashboard";

  updateHeader();

  renderDashboard();

});

/* =========================================================
   PUBLIC API
   ========================================================= */

window.AungBusinessAcademy = {

  lessons,

  courseData,

  getLessonContent,

  goToSection,

  openLesson:function(id) {
    renderLessonReader(id);
  },

  resetProgress,

  getCompleted,

  getProgress:function() {
    return getProgress();
  }

};

console.log(
  "Aung Business Academy V15 loaded:",
  lessons.length,
  "lessons"
);
