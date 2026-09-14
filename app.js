/* =========================================================
   AUNG BUSINESS ACADEMY V8.0 PROFESSIONAL
   STABLE APP.JS
   - 230 Lessons
   - Burmese Lesson Content
   - Progress Tracking
   - Lesson Reader
   - Sales Manager
   - Pricing Calculator
   - Reports
   - AI Business Coach
   - AI Tools
   - Mobile Friendly
   - No External Lesson File
   - No Images
========================================================= */

"use strict";

/* =========================================================
   APP STATE
========================================================= */

const STORAGE_KEY = "aba_completed_lessons";

let currentSection = "dashboard";
let currentLessonId = null;
let currentCategory = "အားလုံး";
let searchTerm = "";

/* =========================================================
   COURSE DATA
========================================================= */

const courseData = [

  {
    id: "business-fundamentals",
    icon: "🏢",
    name: "Business Fundamentals",
    lessons: [
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
    id: "business-strategy",
    icon: "🎯",
    name: "Business Strategy",
    lessons: [
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
    id: "sales-management",
    icon: "💼",
    name: "Sales Management",
    lessons: [
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
    id: "sales-skills",
    icon: "🤝",
    name: "Sales Skills",
    lessons: [
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
    id: "customer-management",
    icon: "👥",
    name: "Customer Management",
    lessons: [
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
    id: "marketing",
    icon: "📣",
    name: "Marketing",
    lessons: [
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
    id: "branding",
    icon: "🏷️",
    name: "Branding",
    lessons: [
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
    id: "finance",
    icon: "💰",
    name: "Finance",
    lessons: [
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
    id: "accounting",
    icon: "📊",
    name: "Accounting & P&L",
    lessons: [
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
    id: "distribution",
    icon: "📦",
    name: "Distribution & Operations",
    lessons: [
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
    id: "retail",
    icon: "🏪",
    name: "Retail & Modern Trade",
    lessons: [
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
    id: "key-account",
    icon: "🤝",
    name: "Key Account Management",
    lessons: [
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
    id: "leadership",
    icon: "👨‍💼",
    name: "Leadership & Management",
    lessons: [
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
    id: "people",
    icon: "👥",
    name: "People & HR",
    lessons: [
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
    id: "negotiation",
    icon: "🗣️",
    name: "Negotiation",
    lessons: [
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
    id: "business-development",
    icon: "💡",
    name: "Business Development",
    lessons: [
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
    id: "kpi",
    icon: "📈",
    name: "KPI & Data Analysis",
    lessons: [
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
    id: "problem-solving",
    icon: "🧠",
    name: "Problem Solving & Decision Making",
    lessons: [
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
    id: "digital-ai",
    icon: "🤖",
    name: "Digital Business & AI",
    lessons: [
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
    id: "productivity",
    icon: "🚀",
    name: "Productivity & Career",
    lessons: [
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

let lessonCounter = 1;

courseData.forEach(course => {
  course.lessons.forEach(title => {
    lessons.push({
      id: lessonCounter,
      title: title,
      category: course.name,
      categoryId: course.id,
      icon: course.icon,
      number: lessonCounter
    });

    lessonCounter++;
  });
});

/* =========================================================
   CATEGORY PROFILES
========================================================= */

const categoryProfiles = {

  "Business Fundamentals": {
    focus: "လုပ်ငန်းတစ်ခု ဘယ်လိုတည်ဆောက်ပြီး ရေရှည်အောင်မြင်အောင် စီမံမလဲ",
    manager: "လုပ်ငန်းရဲ့ Customer, Revenue, Cost, Process နဲ့ Growth ကို ချိတ်ဆက်စဉ်းစားပါ။",
    example: "ဥပမာ - Customer က ဘာလိုချင်သလဲ၊ ကုမ္ပဏီက ဘာ Value ပေးနိုင်သလဲ၊ Revenue ဘယ်ကရမလဲဆိုတာ တစ်ဆက်တည်း စဉ်းစားပါ။"
  },

  "Business Strategy": {
    focus: "လုပ်ငန်းရဲ့ ဦးတည်ချက်၊ ပြိုင်ဆိုင်မှုနဲ့ Growth Direction ကို သတ်မှတ်ခြင်း",
    manager: "အရေးကြီးဆုံး Priority ကို ရွေးပြီး Team အားလုံးကို တစ်လမ်းတည်း လိုက်စေပါ။",
    example: "ဥပမာ - ပြိုင်ဘက်ထက် Distribution ပိုကောင်းအောင်၊ Customer Service ပိုကောင်းအောင် Strategic Priority တစ်ခု သတ်မှတ်နိုင်ပါတယ်။"
  },

  "Sales Management": {
    focus: "Sales Target ကို Team, Territory, Customer နဲ့ Daily Execution အဖြစ် ပြောင်းလဲနိုင်ခြင်း",
    manager: "Target တစ်ခုတည်းကြည့်မနေဘဲ People + Numbers + Execution သုံးခုကို တစ်ပြိုင်နက် Manage လုပ်ပါ။",
    example: "ဥပမာ - Monthly Target 300 သိန်းရှိရင် Territory, Salesperson, Customer နဲ့ Daily Target အထိ Breakdown လုပ်ပါ။"
  },

  "Sales Skills": {
    focus: "Customer ကို နားလည်ပြီး Need အပေါ်အခြေခံကာ Professional Selling ပြုလုပ်ခြင်း",
    manager: "Product ကို ရောင်းဖို့ထက် Customer ရဲ့ Problem ကို ဖြေရှင်းပေးနိုင်ဖို့ Sales Team ကို Coach လုပ်ပါ။",
    example: "ဥပမာ - Customer က Price ကြီးတယ်ဆိုရင် Discount ပေးဖို့ချက်ချင်းမပြောဘဲ Value နဲ့ Benefit ကို ပြန်ရှင်းပြပါ။"
  },

  "Customer Management": {
    focus: "Customer Relationship, Retention နဲ့ Customer Growth ကို စီမံခြင်း",
    manager: "Customer တစ်ယောက်ချင်းစီရဲ့ Need, Value, Potential နဲ့ Relationship ကို သိထားပါ။",
    example: "ဥပမာ - Customer တစ်ယောက်ရဲ့ လက်ရှိဝယ်ယူမှုထက် နောက်ထပ် ဘယ် Product တွေ ထပ်ရောင်းနိုင်မလဲ စဉ်းစားပါ။"
  },

  "Marketing": {
    focus: "Customer, Market နဲ့ Brand ကို ချိတ်ဆက်ပြီး Demand တည်ဆောက်ခြင်း",
    manager: "Marketing Activity တိုင်းကို Objective နဲ့ Measurement ရှိအောင် စီမံပါ။",
    example: "ဥပမာ - Promotion လုပ်ရုံနဲ့ မပြီးဘဲ Reach, Trial, Conversion နဲ့ Sales Impact ကို တိုင်းတာပါ။"
  },

  "Branding": {
    focus: "Customer စိတ်ထဲမှာ Brand ရဲ့ ထူးခြားတဲ့အဓိပ္ပါယ်ကို တည်ဆောက်ခြင်း",
    manager: "Brand Message နဲ့ Customer Experience နှစ်ခု တစ်သမတ်တည်း ဖြစ်အောင် ထိန်းပါ။",
    example: "ဥပမာ - Brand က Premium ဆိုရင် Product, Packaging, Service နဲ့ Communication အားလုံးက Premium ဖြစ်ရပါမယ်။"
  },

  "Finance": {
    focus: "Revenue, Cost, Profit နဲ့ Cash Flow ကို စီးပွားရေးဆုံးဖြတ်ချက်တွေနဲ့ ချိတ်ဆက်ခြင်း",
    manager: "Sales တိုးတာနဲ့ Profit တိုးတာ မတူနိုင်တာကို အမြဲသတိထားပါ။",
    example: "ဥပမာ - Sales တိုးသော်လည်း Discount အများကြီးပေးထားရင် Margin ကျသွားနိုင်ပါတယ်။"
  },

  "Accounting & P&L": {
    focus: "Financial Report ကို ဖတ်ပြီး Business Performance ကို နားလည်ခြင်း",
    manager: "P&L ထဲက Revenue, Gross Profit, Operating Cost နဲ့ Net Profit ကို ပုံမှန် Review လုပ်ပါ။",
    example: "ဥပမာ - Sales တိုးပေမယ့် Gross Margin ကျနေတယ်ဆိုရင် Pricing သို့မဟုတ် Product Mix ကို စစ်ပါ။"
  },

  "Distribution & Operations": {
    focus: "Product ကို မှန်ကန်တဲ့ Customer ဆီ အချိန်မှန်၊ နေရာမှန်ရောက်အောင် စီမံခြင်း",
    manager: "Availability, Stock, Route, Delivery နဲ့ Cost ကို KPI နဲ့ ထိန်းပါ။",
    example: "ဥပမာ - Sales Order ရှိပေမယ့် Stock မရှိရင် Sales Opportunity ဆုံးရှုံးနိုင်ပါတယ်။"
  },

  "Retail & Modern Trade": {
    focus: "Store Level Execution, Shelf Availability နဲ့ Retail Growth ကို စီမံခြင်း",
    manager: "Outlet တစ်ခုချင်းစီရဲ့ Sales Potential နဲ့ Execution Standard ကို သိထားပါ။",
    example: "ဥပမာ - Product ရှိပေမယ့် Shelf ပေါ်မရှိရင် Customer က မမြင်နိုင်လို့ Sales ဆုံးရှုံးနိုင်ပါတယ်။"
  },

  "Key Account Management": {
    focus: "အရေးကြီးသော Customer တွေနဲ့ Strategic Partnership တည်ဆောက်ခြင်း",
    manager: "Short-term Order ထက် Long-term Account Growth ကို ဦးစားပေးပါ။",
    example: "ဥပမာ - Key Account တစ်ခုအတွက် Joint Business Plan တည်ဆောက်ပြီး နှစ်ဖက် Growth Objective သတ်မှတ်ပါ။"
  },

  "Leadership & Management": {
    focus: "Team ကို Direction, Coaching, Accountability နဲ့ Performance အားဖြင့် ဦးဆောင်ခြင်း",
    manager: "Micromanagement မလုပ်ဘဲ Clear Expectations ပေးပြီး Regular Review နဲ့ Coach လုပ်ပါ။",
    example: "ဥပမာ - Salesperson တစ်ယောက် Performance ကျနေရင် အပြစ်တင်မယ့်အစား Root Cause ရှာပြီး Coaching Plan ဆွဲပါ။"
  },

  "People & HR": {
    focus: "မှန်ကန်တဲ့လူကို ရွေးချယ်၊ တိုးတက်အောင် Training ပေးပြီး Retain လုပ်ခြင်း",
    manager: "Right Person + Right Job + Right Development ကို အခြေခံပါ။",
    example: "ဥပမာ - Employee ရဲ့ Skill Gap ကို သိပြီး Training Plan တစ်ခု သတ်မှတ်ပါ။"
  },

  "Negotiation": {
    focus: "နှစ်ဖက်အကျိုးရှိတဲ့ သဘောတူညီချက်ရရှိအောင် စနစ်တကျ ဆွေးနွေးခြင်း",
    manager: "Negotiation မဝင်ခင် Objective, Minimum Acceptable Result နဲ့ Alternative ကို ကြိုတင်သတ်မှတ်ပါ။",
    example: "ဥပမာ - Price မလျှော့နိုင်ရင် Payment Term, Volume, Visibility စတာတွေကို Alternative အဖြစ် ဆွေးနွေးနိုင်ပါတယ်။"
  },

  "Business Development": {
    focus: "အခွင့်အလမ်းအသစ်တွေ ရှာဖွေပြီး Business Growth ဖန်တီးခြင်း",
    manager: "Opportunity ကို Idea အဖြစ်ပဲ မထားဘဲ Revenue Potential နဲ့ Action Plan အဖြစ် ပြောင်းပါ။",
    example: "ဥပမာ - Customer အသစ် 20 ခု ရှာပြီး Potential Revenue နဲ့ Acquisition Cost ကို တွက်ပါ။"
  },

  "KPI & Data Analysis": {
    focus: "Data ကို အသုံးပြုပြီး Business Performance ကို တိုင်းတာခြင်း",
    manager: "Number ကိုကြည့်ရုံမဟုတ်ဘဲ Number ပြောင်းလဲရတဲ့ အကြောင်းရင်းကို ရှာပါ။",
    example: "ဥပမာ - Sales 10% ကျသွားရင် Territory, Product, Customer, Availability စတာတွေကို ခွဲပြီး Analysis လုပ်ပါ။"
  },

  "Problem Solving & Decision Making": {
    focus: "Problem ရဲ့ Root Cause ကို ရှာပြီး မှန်ကန်တဲ့ Decision ချခြင်း",
    manager: "Symptom ကိုပဲ ဖြေရှင်းမနေဘဲ Root Cause ကို အရင်ရှာပါ။",
    example: "ဥပမာ - Sales ကျတာကို Salesperson မကြိုးစားလို့လို့ မဆုံးဖြတ်ခင် Stock, Price, Competitor, Customer Demand စတာတွေ စစ်ပါ။"
  },

  "Digital Business & AI": {
    focus: "Digital Technology နဲ့ AI ကို Business Productivity နဲ့ Growth အတွက် အသုံးချခြင်း",
    manager: "AI ကို လူအစားထိုးဖို့ထက် Decision, Productivity နဲ့ Speed တိုးဖို့ အသုံးချပါ။",
    example: "ဥပမာ - Sales Report အတွက် Data Summary, Customer Analysis နဲ့ Action Recommendation တွေကို AI နဲ့ အကူအညီယူနိုင်ပါတယ်။"
  },

  "Productivity & Career": {
    focus: "Goal, Priority, Time Management နဲ့ Professional Growth ကို စနစ်တကျ စီမံခြင်း",
    manager: "Busy ဖြစ်တာထက် Important Result ရအောင် အချိန်ကို စီမံပါ။",
    example: "ဥပမာ - တစ်နေ့တာမှာ အရေးကြီးဆုံး Result 3 ခုကို အရင်သတ်မှတ်ပြီး အဲဒီအတိုင်း အလုပ်လုပ်ပါ။"
  }

};

/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function $(selector) {
  return document.querySelector(selector);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getCompleted() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

function saveCompleted(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function isCompleted(id) {
  return getCompleted().includes(Number(id));
}

function toggleComplete(id) {
  const lessonId = Number(id);
  let completed = getCompleted();

  if (completed.includes(lessonId)) {
    completed = completed.filter(x => x !== lessonId);
  } else {
    completed.push(lessonId);
  }

  saveCompleted(completed);
}

function getProgress() {
  const completed = getCompleted().length;
  const total = lessons.length;

  return total === 0
    ? 0
    : Math.round((completed / total) * 100);
}

function getCategoryProgress(category) {
  const categoryLessons = lessons.filter(
    lesson => lesson.category === category
  );

  const completed = categoryLessons.filter(
    lesson => isCompleted(lesson.id)
  ).length;

  return categoryLessons.length === 0
    ? 0
    : Math.round((completed / categoryLessons.length) * 100);
}

function getNextIncompleteLesson() {
  return lessons.find(lesson => !isCompleted(lesson.id)) || lessons[0];
}

function getLessonById(id) {
  return lessons.find(lesson => lesson.id === Number(id));
}

function getCategoryIcon(category) {
  const course = courseData.find(c => c.name === category);
  return course ? course.icon : "📚";
}

function progressBar(value) {
  const safe = Math.max(0, Math.min(100, Number(value) || 0));

  return `
    <div class="progress-bar">
      <div class="progress-fill" style="width:${safe}%"></div>
    </div>
  `;
}

/* =========================================================
   DETAILED LESSON CONTENT
========================================================= */

function getLessonContent(lesson) {

  const profile =
    categoryProfiles[lesson.category] ||
    categoryProfiles["Business Fundamentals"];

  const title = lesson.title;

  const keywordMap = {

    "Sales Target": {
      objective: "Sales Target ကို မှန်ကန်စွာ သတ်မှတ်ပြီး Team အတွက် လက်တွေ့အကောင်အထည်ဖော်နိုင်ရန်။",
      concept: "Sales Target ဆိုတာ သတ်မှတ်ထားတဲ့ အချိန်အတွင်း ရရှိရမယ့် Sales Result ကို တိတိကျကျ သတ်မှတ်ထားခြင်း ဖြစ်ပါတယ်။",
      example: "ဥပမာ - တစ်လ Sales Target 300 သိန်းရှိရင် 300 သိန်းဆိုတဲ့ Number တစ်ခုတည်းနဲ့ မရပ်ဘဲ Territory, Customer, Product နဲ့ Salesperson အလိုက် ခွဲခြမ်းရပါမယ်။"
    },

    "Target Breakdown": {
      objective: "ကြီးမားတဲ့ Target ကို လက်တွေ့အကောင်အထည်ဖော်နိုင်တဲ့ အပိုင်းငယ်တွေဖြစ်အောင် ခွဲခြမ်းနိုင်ရန်။",
      concept: "Target Breakdown ဆိုတာ Monthly Target ကို Weekly, Daily, Territory, Customer နဲ့ Salesperson အလိုက် ခွဲခြမ်းခြင်း ဖြစ်ပါတယ်။",
      example: "ဥပမာ - 300 သိန်း Monthly Target ကို 4 Weeks အလိုက် 75 သိန်းစီ သတ်မှတ်ပြီး Team တစ်ယောက်ချင်းစီရဲ့ Capacity အလိုက် ထပ်ခွဲနိုင်ပါတယ်။"
    },

    "Sales Forecasting": {
      objective: "အနာဂတ် Sales Result ကို Data နဲ့ Market Information အပေါ် အခြေခံပြီး ခန့်မှန်းနိုင်ရန်။",
      concept: "Sales Forecast ဆိုတာ လက်ရှိ Pipeline, Historical Sales, Customer Demand နဲ့ Market Situation တွေကို အသုံးပြုပြီး အနာဂတ် Sales ကို ခန့်မှန်းခြင်း ဖြစ်ပါတယ်။",
      example: "ဥပမာ - လက်ရှိ Order Pipeline 200 သိန်းရှိပြီး ပုံမှန် Conversion Rate 70% ဖြစ်ရင် Expected Sales ကို ခန့်မှန်းနိုင်ပါတယ်။"
    },

    "Field Coaching": {
      objective: "Salesperson တွေရဲ့ လက်တွေ့ Field Performance ကို ကြည့်ပြီး Coaching ပေးနိုင်ရန်။",
      concept: "Field Coaching ဆိုတာ Office ထဲကနေ Instruction ပေးရုံမဟုတ်ဘဲ Salesperson နဲ့အတူ Customer Visit သွားပြီး လက်တွေ့အပြုအမူကို ကြည့်ကာ Feedback ပေးခြင်း ဖြစ်ပါတယ်။",
      example: "ဥပမာ - Customer Meeting တစ်ခုမှာ Salesperson ရဲ့ Opening, Questioning, Presentation နဲ့ Closing ကို လေ့လာပြီး Visit ပြီးတဲ့နောက် Feedback ပေးပါ။"
    },

    "SWOT Analysis": {
      objective: "Business ရဲ့ Strength, Weakness, Opportunity နဲ့ Threat ကို ခွဲခြမ်းပြီး Strategy ချနိုင်ရန်။",
      concept: "SWOT Analysis က Internal Factors ဖြစ်တဲ့ Strength/Weakness နဲ့ External Factors ဖြစ်တဲ့ Opportunity/Threat ကို ခွဲခြားစဉ်းစားတဲ့ Framework ဖြစ်ပါတယ်။",
      example: "ဥပမာ - Distribution Network က Strength ဖြစ်နိုင်သလို Competitor Price Promotion က Threat ဖြစ်နိုင်ပါတယ်။"
    },

    "Profit Margin": {
      objective: "Sales တစ်ခုက Business အတွက် အမြတ်ဘယ်လောက်ဖန်တီးပေးနေသလဲ နားလည်နိုင်ရန်။",
      concept: "Profit Margin ဆိုတာ Revenue ထဲက Profit ရဲ့ ရာခိုင်နှုန်း ဖြစ်ပါတယ်။",
      example: "ဥပမာ - Sales 100 သိန်းနဲ့ Gross Profit 25 သိန်းရရင် Gross Profit Margin က 25% ဖြစ်ပါတယ်။"
    },

    "Negotiation Preparation": {
      objective: "Negotiation မဝင်ခင် Objective, Data နဲ့ Alternative ကို ကြိုတင်ပြင်ဆင်နိုင်ရန်။",
      concept: "ကောင်းမွန်တဲ့ Negotiation ရဲ့ အောင်မြင်မှုဟာ Meeting Room ထဲမဝင်ခင် Preparation ကနေ စတင်ပါတယ်။",
      example: "ဥပမာ - Customer က Price Discount တောင်းမယ်ဆိုရင် Price အစား Volume, Payment Term, Visibility စတဲ့ Alternative တွေကို ကြိုတင်ပြင်ဆင်ထားပါ။"
    },

    "5 Why Analysis": {
      objective: "Problem ရဲ့ အပေါ်ယံအကြောင်းရင်းမဟုတ်ဘဲ Root Cause ကို ရှာနိုင်ရန်။",
      concept: "5 Why ဆိုတာ Problem တစ်ခုကို Why ဆိုတဲ့မေးခွန်းကို ထပ်ခါထပ်ခါ မေးပြီး Root Cause အထိ ရောက်အောင် ရှာတဲ့ Problem Solving Technique ဖြစ်ပါတယ်။",
      example: "ဥပမာ - Sales ကျ → Order ကျ → Stock မရှိ → Forecast မမှန် → Planning Process အားနည်း ဆိုပြီး Root Cause အထိ ရှာနိုင်ပါတယ်။"
    },

    "SMART Goal": {
      objective: "ရှင်းလင်းပြီး တိုင်းတာနိုင်တဲ့ Goal တစ်ခုကို သတ်မှတ်နိုင်ရန်။",
      concept: "SMART Goal မှာ Specific, Measurable, Achievable, Relevant, Time-bound ဆိုတဲ့ အချက်တွေ ပါဝင်ပါတယ်။",
      example: "ဥပမာ - Sales တိုးမယ်ဆိုတာထက် 'ဒီလအတွင်း Sales 10% တိုးမယ်' ဆိုရင် ပိုမိုတိုင်းတာနိုင်တဲ့ Goal ဖြစ်ပါတယ်။"
    }

  };

  let special = null;

  Object.keys(keywordMap).forEach(key => {
    if (title.includes(key)) {
      special = keywordMap[key];
    }
  });

  const objective =
    special?.objective ||
    `${title} ကို နားလည်ပြီး လက်တွေ့လုပ်ငန်းခွင်မှာ မှန်ကန်စွာ အသုံးချနိုင်ရန်။`;

  const concept =
    special?.concept ||
    `${title} ဆိုတာ ${profile.focus} နဲ့ ဆက်စပ်ပြီး Business Result ရရှိအောင် စနစ်တကျ အသုံးချရတဲ့ အယူအဆတစ်ခု ဖြစ်ပါတယ်။`;

  const example =
    special?.example ||
    profile.example;

  const details = [
    {
      heading: "၁။ အခြေခံနားလည်မှု",
      text:
        `${title} ကို နားလည်ဖို့အတွက် အဓိကအားဖြင့် Business Objective ကို အရင်သိထားရပါမယ်။ ` +
        `ဒီအကြောင်းအရာကို သီးခြားအယူအဆတစ်ခုအဖြစ် မကြည့်ဘဲ Customer, People, Process, Revenue နဲ့ Result တို့နဲ့ ချိတ်ဆက်စဉ်းစားရပါမယ်။`
    },
    {
      heading: "၂။ Manager အမြင်",
      text:
        `${profile.manager} Manager တစ်ယောက်အနေနဲ့ ကိုယ်တိုင်လုပ်နိုင်ရုံနဲ့ မလုံလောက်ဘဲ ` +
        `Team ကလည်း တူညီတဲ့ Standard နဲ့ လုပ်နိုင်အောင် ရှင်းလင်းစွာ ပြောပြ၊ Coach လုပ်ပြီး Review လုပ်ရပါမယ်။`
    },
    {
      heading: "၃။ လက်တွေ့အသုံးချခြင်း",
      text:
        `${title} ကို လက်တွေ့အသုံးချတဲ့အခါ Plan → Execute → Measure → Improve ဆိုတဲ့ Cycle ကို အသုံးပြုပါ။ ` +
        `Plan မရှိဘဲ လုပ်တာ၊ Measure မလုပ်တာနဲ့ Result မကောင်းတဲ့အခါ Root Cause မရှာတာတွေကို ရှောင်ပါ။`
    },
    {
      heading: "၄။ Data နဲ့ တိုင်းတာခြင်း",
      text:
        `အောင်မြင်မှုကို ခံစားချက်နဲ့ မဆုံးဖြတ်ဘဲ Data နဲ့ တိုင်းတာပါ။ ` +
        `Target, Achievement, Gap, Trend နဲ့ Action ကို အနည်းဆုံး Review လုပ်သင့်ပါတယ်။`
    },
    {
      heading: "၅။ တိုးတက်အောင်လုပ်ခြင်း",
      text:
        `Result မကောင်းရင် လူကိုပဲ အပြစ်တင်မယ့်အစား Process, Resource, Skill, Market နဲ့ Customer Factors တွေကို ခွဲခြမ်းပါ။ ` +
        `ပြီးရင် Corrective Action တစ်ခု သတ်မှတ်ပြီး ပြန်တိုင်းတာပါ။`
    }
  ];

  return {
    objective,
    concept,
    importance:
      `${title} ကို နားလည်ထားခြင်းက Manager တစ်ယောက်အနေနဲ့ ` +
      `${profile.focus} ကို ပိုမိုကောင်းမွန်စွာ စီမံနိုင်စေပါတယ်။ ` +
      `အထူးသဖြင့် Decision Making နဲ့ Business Execution အတွက် အသုံးဝင်ပါတယ်။`,

    details,

    example,

    managerTips: [
      `Objective ကို အရင်သတ်မှတ်ပြီး ${title} ကို အသုံးချပါ။`,
      "Team ကို Clear Expectation ပေးပါ။",
      "Data နဲ့ Result ကို ပုံမှန် Review လုပ်ပါ။",
      "Problem ဖြစ်တဲ့အခါ Root Cause ကို ရှာပါ။",
      "ကောင်းမွန်တဲ့လုပ်ဆောင်ချက်တွေကို Standard Process အဖြစ် ပြောင်းပါ။"
    ],

    mistakes: [
      `${title} ကို Theory အဖြစ်ပဲ လေ့လာပြီး လက်တွေ့မအသုံးချခြင်း။`,
      "Data မကြည့်ဘဲ ခံစားချက်နဲ့ ဆုံးဖြတ်ခြင်း။",
      "Objective မရှင်းဘဲ Team ကို Task ပေးခြင်း။",
      "Problem ဖြစ်တဲ့အခါ Root Cause မရှာဘဲ အမြန်ဖြေရှင်းခြင်း။",
      "Action Plan မရှိဘဲ Meeting နဲ့ Discussion မှာပဲ ရပ်တန့်ခြင်း။"
    ],

    actionPlan: [
      `ဒီနေ့ ${title} ရဲ့ အဓိကအယူအဆကို ပြန်ဖတ်ပါ။`,
      "ကိုယ့်လုပ်ငန်းနဲ့ သက်ဆိုင်တဲ့ Example တစ်ခု ရွေးပါ။",
      "လက်ရှိအခြေအနေကို Data နဲ့ စစ်ပါ။",
      "တိုးတက်စေမယ့် Action 3 ခု ရေးပါ။",
      "တစ်ပတ်အတွင်း Result ကို ပြန် Review လုပ်ပါ။"
    ],

    checklist: [
      "☐ Objective ကို နားလည်ပြီ",
      "☐ Concept ကို ကိုယ့်စကားနဲ့ ပြန်ရှင်းပြနိုင်ပြီ",
      "☐ လက်တွေ့ Example တစ်ခု သိပြီ",
      "☐ Action Plan ရေးပြီးပြီ",
      "☐ Result ကို တိုင်းတာမယ့် KPI သတ်မှတ်ပြီးပြီ"
    ],

    quiz: [
      {
        q: `${title} ကို အသုံးချရာမှာ အရေးကြီးဆုံးအချက်တစ်ခုက ဘာလဲ?`,
        a: "Business Objective နဲ့ ချိတ်ဆက်ပြီး လက်တွေ့အသုံးချခြင်း။"
      },
      {
        q: "Result မကောင်းရင် ဘာလုပ်သင့်သလဲ?",
        a: "Root Cause ရှာပြီး Corrective Action ပြုလုပ်သင့်ပါတယ်။"
      }
    ],

    summary:
      `${title} ဟာ ${profile.focus} အတွက် အရေးကြီးတဲ့ Business Management Skill တစ်ခု ဖြစ်ပါတယ်။ ` +
      `အဓိကက Theory သိရုံမဟုတ်ဘဲ ကိုယ့်လုပ်ငန်းထဲမှာ Plan → Execute → Measure → Improve လုပ်နိုင်ဖို့ ဖြစ်ပါတယ်။`,

    tip:
      `💡 Manager Tip — ${title} ကို တစ်ကြိမ်ဖတ်ပြီး မရပ်ဘဲ ကိုယ့်လုပ်ငန်းထဲက Case တစ်ခုနဲ့ ချိတ်ပြီး လက်တွေ့အသုံးချပါ။`
  };
}

/* =========================================================
   NAVIGATION
========================================================= */

const sectionTitles = {
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

function goToSection(section) {

  if (!sectionTitles[section]) {
    section = "dashboard";
  }

  currentSection = section;

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle(
      "active",
      item.dataset.section === section
    );
  });

  const headerTitle = $("#headerTitle");

  if (headerTitle) {
    headerTitle.textContent =
      sectionTitles[section] || "Aung Business Academy";
  }

  closeMobileMenu();

  renderCurrentSection();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function closeMobileMenu() {
  const sidebar = $("#sidebar");

  if (sidebar) {
    sidebar.classList.remove("open");
  }
}

/* =========================================================
   DASHBOARD
========================================================= */

function renderDashboard() {

  const completed = getCompleted().length;
  const total = lessons.length;
  const progress = getProgress();
  const nextLesson = getNextIncompleteLesson();

  const content = $("#app-content");

  if (!content) return;

  content.innerHTML = `

    <section class="dashboard-page">

      <div class="hero-card">

        <div>
          <div class="eyebrow">AUNG BUSINESS ACADEMY</div>

          <h1>
            Welcome back, Aung Zar Ni Win 👋
          </h1>

          <p>
            Business Management, Sales Leadership နဲ့ Professional Growth
            ကို စနစ်တကျ လေ့လာပြီး လက်တွေ့လုပ်ငန်းခွင်မှာ အသုံးချပါ။
          </p>
        </div>

        <div class="hero-icon">🎓</div>

      </div>


      <div class="stats-grid">

        <div class="stat-card">
          <div class="stat-icon">📚</div>
          <div>
            <div class="stat-number">1</div>
            <div class="stat-label">Active Course</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">📖</div>
          <div>
            <div class="stat-number">${total}</div>
            <div class="stat-label">Total Lessons</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">✅</div>
          <div>
            <div class="stat-number">${completed}</div>
            <div class="stat-label">Completed</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">📊</div>
          <div>
            <div class="stat-number">${progress}%</div>
            <div class="stat-label">Overall Progress</div>
          </div>
        </div>

      </div>


      <div class="section-card">

        <div class="section-card-header">

          <div>
            <div class="section-kicker">CURRENT COURSE</div>
            <h2>Sales Management Mastery</h2>
          </div>

          <span class="status-badge">Professional</span>

        </div>

        <p>
          Sales Management, Team Leadership, Target Management,
          Field Execution နဲ့ Performance Management ကို လေ့လာပါ။
        </p>

        <div class="course-progress-row">
          <span>Course Progress</span>
          <strong>${progress}%</strong>
        </div>

        ${progressBar(progress)}

        <div class="button-row">

          <button
            class="primary-btn"
            data-action="continue-learning"
            type="button"
          >
            ▶ Continue Learning
          </button>

          <button
            class="secondary-btn"
            data-action="show-section"
            data-section="lessons"
            type="button"
          >
            📖 View All Lessons
          </button>

        </div>

        ${
          nextLesson
            ? `
              <div class="next-lesson-box">
                <span>Next Lesson</span>
                <strong>
                  ${escapeHtml(nextLesson.title)}
                </strong>
                <small>
                  ${escapeHtml(nextLesson.category)}
                </small>
              </div>
            `
            : ""
        }

      </div>


      <div class="section-card">

        <div class="section-card-header">
          <div>
            <div class="section-kicker">LEARNING FOCUS</div>
            <h2>🎯 Your Learning Focus</h2>
          </div>
        </div>

        <div class="focus-grid">

          <div class="focus-card">
            <strong>🎯 Sales Leadership</strong>
            <p>Target, Team နဲ့ Field Execution ကို စနစ်တကျ စီမံပါ။</p>
          </div>

          <div class="focus-card">
            <strong>📊 Data & KPI</strong>
            <p>Business Decision တွေကို Data နဲ့ အခြေခံပါ။</p>
          </div>

          <div class="focus-card">
            <strong>🤝 Customer</strong>
            <p>Customer Value နဲ့ Relationship ကို တိုးတက်အောင်လုပ်ပါ။</p>
          </div>

          <div class="focus-card">
            <strong>👨‍💼 Leadership</strong>
            <p>Team ကို Coach လုပ်ပြီး Performance တိုးတက်အောင် ဦးဆောင်ပါ။</p>
          </div>

          <div class="focus-card">
            <strong>💰 Profit</strong>
            <p>Sales တင်မဟုတ်ဘဲ Profit နဲ့ Cash Flow ကိုပါ စဉ်းစားပါ။</p>
          </div>

          <div class="focus-card">
            <strong>🚀 Career Growth</strong>
            <p>Professional Manager တစ်ယောက်အဖြစ် တိုးတက်အောင် လေ့လာပါ။</p>
          </div>

        </div>

      </div>


      <div class="section-card">

        <div class="section-card-header">
          <div>
            <div class="section-kicker">ACADEMY</div>
            <h2>📚 Business Academy Categories</h2>
          </div>
        </div>

        <div class="category-grid">

          ${courseData.map(course => {

            const p = getCategoryProgress(course.name);

            return `
              <button
                class="category-card"
                data-action="filter-category"
                data-category="${escapeHtml(course.name)}"
                type="button"
              >

                <div class="category-icon">
                  ${course.icon}
                </div>

                <div class="category-name">
                  ${escapeHtml(course.name)}
                </div>

                <div class="category-count">
                  ${course.lessons.length} Lessons
                </div>

                ${progressBar(p)}

                <div class="category-percent">
                  ${p}%
                </div>

              </button>
            `;

          }).join("")}

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   COURSES
========================================================= */

function renderCourses() {

  const content = $("#app-content");

  if (!content) return;

  content.innerHTML = `

    <section>

      <div class="page-heading">
        <div>
          <div class="section-kicker">MY LEARNING</div>
          <h1>📚 My Courses</h1>
          <p>
            Business Management နဲ့ Professional Growth အတွက်
            လေ့လာနိုင်တဲ့ Course Structure။
          </p>
        </div>
      </div>

      <div class="course-card-large">

        <div class="course-card-icon">🎓</div>

        <div class="course-card-body">

          <div class="section-kicker">PROFESSIONAL PROGRAM</div>

          <h2>Business Management Mastery</h2>

          <p>
            Business Fundamentals ကနေ Sales Management,
            Leadership, Finance, Negotiation, AI နဲ့ Career Growth
            အထိ စနစ်တကျ လေ့လာနိုင်ပါတယ်။
          </p>

          <div class="course-meta">
            <span>📖 ${lessons.length} Lessons</span>
            <span>📚 20 Categories</span>
            <span>🇲🇲 Burmese</span>
          </div>

          <button
            class="primary-btn"
            data-action="show-section"
            data-section="lessons"
            type="button"
          >
            Start Learning →
          </button>

        </div>

      </div>


      <div class="category-grid">

        ${courseData.map(course => {

          const p = getCategoryProgress(course.name);

          return `
            <div class="course-category-card">

              <div class="course-category-top">

                <div class="category-icon">
                  ${course.icon}
                </div>

                <div>
                  <h3>${escapeHtml(course.name)}</h3>
                  <p>${course.lessons.length} Lessons</p>
                </div>

              </div>

              ${progressBar(p)}

              <div class="course-category-bottom">
                <span>${p}% Complete</span>

                <button
                  class="small-btn"
                  data-action="filter-category"
                  data-category="${escapeHtml(course.name)}"
                  type="button"
                >
                  Open
                </button>
              </div>

            </div>
          `;

        }).join("")}

      </div>

    </section>
  `;
}

/* =========================================================
   LESSON LIST
========================================================= */

function renderLessons() {

  const content = $("#app-content");

  if (!content) return;

  let filtered = lessons.filter(lesson => {

    const categoryMatch =
      currentCategory === "အားလုံး" ||
      lesson.category === currentCategory;

    const searchMatch =
      !searchTerm ||
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.category.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;

  });

  content.innerHTML = `

    <section>

      <div class="page-heading">

        <div>
          <div class="section-kicker">LEARNING LIBRARY</div>
          <h1>📖 Lessons</h1>
          <p>
            ${lessons.length} lessons ကို အဆင့်ဆင့် လေ့လာနိုင်ပါတယ်။
          </p>
        </div>

      </div>


      <div class="lesson-toolbar">

        <input
          id="lessonSearch"
          class="search-input"
          type="search"
          placeholder="🔎 Lesson ရှာရန်..."
          value="${escapeHtml(searchTerm)}"
        />

        <select
          id="categoryFilter"
          class="filter-select"
        >

          <option value="အားလုံး">
            📚 အားလုံး
          </option>

          ${courseData.map(course => `
            <option
              value="${escapeHtml(course.name)}"
              ${currentCategory === course.name ? "selected" : ""}
            >
              ${course.icon} ${escapeHtml(course.name)}
            </option>
          `).join("")}

        </select>

      </div>


      <div class="lesson-result-info">
        ${filtered.length} lessons တွေ့ရှိသည်
      </div>


      <div class="lesson-list">

        ${
          filtered.length
            ? filtered.map(lesson => {

                const done = isCompleted(lesson.id);

                return `
                  <div class="lesson-card">

                    <div class="lesson-number">
                      ${lesson.number}
                    </div>

                    <div class="lesson-main">

                      <div class="lesson-category">
                        ${lesson.icon}
                        ${escapeHtml(lesson.category)}
                      </div>

                      <h3>
                        ${escapeHtml(lesson.title)}
                      </h3>

                      <p>
                        ${done
                          ? "✅ ဒီ Lesson ကို ပြီးဆုံးထားပါပြီ။"
                          : "📖 Lesson ကို ဖတ်ရှုရန် နှိပ်ပါ။"
                        }
                      </p>

                    </div>

                    <div class="lesson-status">

                      ${
                        done
                          ? `<span class="completed-badge">✓ Completed</span>`
                          : `<span class="pending-badge">Not Started</span>`
                      }

                      <button
                        class="small-btn"
                        data-action="open-lesson"
                        data-id="${lesson.id}"
                        type="button"
                      >
                        ${done ? "Review" : "Open"}
                      </button>

                    </div>

                  </div>
                `;

              }).join("")
            : `
              <div class="empty-state">
                <div>🔎</div>
                <h3>Lesson မတွေ့ပါ</h3>
                <p>Search စာလုံး သို့မဟုတ် Category ကို ပြန်ရွေးကြည့်ပါ။</p>
              </div>
            `
        }

      </div>

    </section>
  `;
}

/* =========================================================
   LESSON READER
========================================================= */

function renderLessonReader(id) {

  const lesson = getLessonById(id);

  if (!lesson) {
    goToSection("lessons");
    return;
  }

  currentLessonId = lesson.id;

  const content = $("#app-content");

  if (!content) return;

  const data = getLessonContent(lesson);
  const done = isCompleted(lesson.id);

  const previous =
    lessons.find(l => l.id === lesson.id - 1);

  const next =
    lessons.find(l => l.id === lesson.id + 1);

  content.innerHTML = `

    <section class="lesson-reader">

      <button
        class="back-btn"
        data-action="back-to-lessons"
        type="button"
      >
        ← Lessons သို့ ပြန်သွားရန်
      </button>


      <div class="lesson-reader-header">

        <div class="reader-category">
          ${lesson.icon}
          ${escapeHtml(lesson.category)}
        </div>

        <div class="reader-number">
          Lesson ${lesson.number} / ${lessons.length}
        </div>

        <h1>
          ${escapeHtml(lesson.title)}
        </h1>

        <p>
          ${escapeHtml(data.objective)}
        </p>

      </div>


      <div class="reader-content">


        <div class="lesson-section objective-section">

          <div class="lesson-section-title">
            🎯 Learning Objective
          </div>

          <p>
            ${escapeHtml(data.objective)}
          </p>

        </div>


        <div class="lesson-section">

          <div class="lesson-section-title">
            📖 အဓိပ္ပါယ် / Concept
          </div>

          <p>
            ${escapeHtml(data.concept)}
          </p>

        </div>


        <div class="lesson-section">

          <div class="lesson-section-title">
            ❓ ဘာကြောင့်အရေးကြီးလဲ
          </div>

          <p>
            ${escapeHtml(data.importance)}
          </p>

        </div>


        <div class="lesson-section">

          <div class="lesson-section-title">
            🧠 အသေးစိတ်ရှင်းလင်းချက်
          </div>

          ${data.details.map(item => `
            <div class="detail-block">

              <h3>
                ${escapeHtml(item.heading)}
              </h3>

              <p>
                ${escapeHtml(item.text)}
              </p>

            </div>
          `).join("")}

        </div>


        <div class="lesson-section example-section">

          <div class="lesson-section-title">
            💼 လုပ်ငန်းခွင် Example
          </div>

          <p>
            ${escapeHtml(data.example)}
          </p>

        </div>


        <div class="lesson-section">

          <div class="lesson-section-title">
            💼 Manager လက်တွေ့အသုံးချနည်း
          </div>

          <ul class="lesson-list-bullets">

            ${data.managerTips.map(item => `
              <li>${escapeHtml(item)}</li>
            `).join("")}

          </ul>

        </div>


        <div class="lesson-section warning-section">

          <div class="lesson-section-title">
            ⚠️ Common Mistakes
          </div>

          <ul class="lesson-list-bullets">

            ${data.mistakes.map(item => `
              <li>${escapeHtml(item)}</li>
            `).join("")}

          </ul>

        </div>


        <div class="lesson-section action-section">

          <div class="lesson-section-title">
            🚀 Action Plan
          </div>

          <ol class="lesson-list-bullets">

            ${data.actionPlan.map(item => `
              <li>${escapeHtml(item)}</li>
            `).join("")}

          </ol>

        </div>


        <div class="lesson-section">

          <div class="lesson-section-title">
            ✅ Checklist
          </div>

          <div class="checklist-box">

            ${data.checklist.map(item => `
              <div class="checklist-item">
                ${escapeHtml(item)}
              </div>
            `).join("")}

          </div>

        </div>


        <div class="lesson-section">

          <div class="lesson-section-title">
            📝 Knowledge Check
          </div>

          ${data.quiz.map((item, index) => `
            <div class="quiz-card">

              <strong>
                Q${index + 1}. ${escapeHtml(item.q)}
              </strong>

              <p>
                💡 ${escapeHtml(item.a)}
              </p>

            </div>
          `).join("")}

        </div>


        <div class="lesson-section tip-section">

          <div class="lesson-section-title">
            💡 Manager Tip
          </div>

          <p>
            ${escapeHtml(data.tip)}
          </p>

        </div>


        <div class="lesson-section summary-section">

          <div class="lesson-section-title">
            📋 Summary
          </div>

          <p>
            ${escapeHtml(data.summary)}
          </p>

        </div>


        <div class="lesson-complete-box">

          <button
            class="${done ? "completed-btn" : "primary-btn"}"
            data-action="toggle-complete"
            data-id="${lesson.id}"
            type="button"
          >
            ${done
              ? "✅ Completed — Mark as Uncompleted"
              : "✓ Mark Lesson as Completed"
            }
          </button>

        </div>


        <div class="lesson-navigation">

          ${
            previous
              ? `
                <button
                  class="secondary-btn"
                  data-action="open-lesson"
                  data-id="${previous.id}"
                  type="button"
                >
                  ← Previous
                </button>
              `
              : `<div></div>`
          }


          ${
            next
              ? `
                <button
                  class="primary-btn"
                  data-action="open-lesson"
                  data-id="${next.id}"
                  type="button"
                >
                  Next Lesson →
                </button>
              `
              : `<div></div>`
          }

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   PROGRESS
========================================================= */

function renderProgress() {

  const content = $("#app-content");

  if (!content) return;

  const completed = getCompleted().length;
  const total = lessons.length;
  const progress = getProgress();

  content.innerHTML = `

    <section>

      <div class="page-heading">
        <div>
          <div class="section-kicker">YOUR PERFORMANCE</div>
          <h1>📊 My Progress</h1>
          <p>သင်ယူမှု တိုးတက်မှုကို ဒီနေရာမှာ ကြည့်နိုင်ပါတယ်။</p>
        </div>
      </div>


      <div class="stats-grid">

        <div class="stat-card">
          <div class="stat-icon">📖</div>
          <div>
            <div class="stat-number">${total}</div>
            <div class="stat-label">Total Lessons</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">✅</div>
          <div>
            <div class="stat-number">${completed}</div>
            <div class="stat-label">Completed</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">⏳</div>
          <div>
            <div class="stat-number">${total - completed}</div>
            <div class="stat-label">Remaining</div>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon">🎯</div>
          <div>
            <div class="stat-number">${progress}%</div>
            <div class="stat-label">Progress</div>
          </div>
        </div>

      </div>


      <div class="section-card">

        <div class="section-card-header">
          <h2>Overall Learning Progress</h2>
          <strong>${progress}%</strong>
        </div>

        ${progressBar(progress)}

        <p>
          ${completed} / ${total} lessons ပြီးဆုံးထားပါတယ်။
        </p>

      </div>


      <div class="section-card">

        <div class="section-card-header">
          <h2>📚 Category Progress</h2>
        </div>

        <div class="category-progress-list">

          ${courseData.map(course => {

            const p = getCategoryProgress(course.name);

            return `
              <div class="category-progress-item">

                <div class="category-progress-header">

                  <span>
                    ${course.icon}
                    ${escapeHtml(course.name)}
                  </span>

                  <strong>${p}%</strong>

                </div>

                ${progressBar(p)}

                <small>
                  ${course.lessons.length} lessons
                </small>

              </div>
            `;

          }).join("")}

        </div>

      </div>


      <div class="section-card">

        <div class="section-card-header">
          <h2>⚙️ Progress Management</h2>
        </div>

        <p>
          Progress ကို Reset လုပ်လိုပါက အောက်က Button ကို အသုံးပြုနိုင်ပါတယ်။
        </p>

        <button
          class="danger-btn"
          data-action="reset-progress"
          type="button"
        >
          Reset All Progress
        </button>

      </div>

    </section>
  `;
}

/* =========================================================
   SALES MANAGER
========================================================= */

function renderSalesManager() {

  const content = $("#app-content");

  if (!content) return;

  content.innerHTML = `

    <section>

      <div class="page-heading">
        <div>
          <div class="section-kicker">BUSINESS TOOL</div>
          <h1>💼 Sales Manager</h1>
          <p>
            Sales Manager တစ်ယောက်အနေနဲ့ နေ့စဉ်အသုံးချနိုင်တဲ့ Management Framework။
          </p>
        </div>
      </div>


      <div class="tool-grid">

        <div class="tool-card">
          <div class="tool-icon">🎯</div>
          <h3>Target Management</h3>
          <p>
            Monthly Target ကို Territory, Team, Customer နဲ့ Daily Activity အဖြစ် ခွဲပါ။
          </p>
        </div>

        <div class="tool-card">
          <div class="tool-icon">👥</div>
          <h3>People Management</h3>
          <p>
            Clear Expectations → Coaching → Review → Accountability ကို အသုံးပြုပါ။
          </p>
        </div>

        <div class="tool-card">
          <div class="tool-icon">📊</div>
          <h3>KPI Management</h3>
          <p>
            Sales, Volume, Distribution, Productivity နဲ့ Achievement ကို စောင့်ကြည့်ပါ။
          </p>
        </div>

        <div class="tool-card">
          <div class="tool-icon">🚗</div>
          <h3>Field Execution</h3>
          <p>
            Customer Visit, Route Plan, Coaching နဲ့ Market Feedback ကို ပုံမှန်လုပ်ပါ။
          </p>
        </div>

      </div>


      <div class="section-card">

        <h2>📋 Daily Sales Manager Checklist</h2>

        <div class="checklist-box">

          <div class="checklist-item">☐ Yesterday Sales Result Review</div>
          <div class="checklist-item">☐ Today's Target Check</div>
          <div class="checklist-item">☐ Team Priority Alignment</div>
          <div class="checklist-item">☐ Key Customer Follow-up</div>
          <div class="checklist-item">☐ Stock / Availability Check</div>
          <div class="checklist-item">☐ Field Coaching</div>
          <div class="checklist-item">☐ End-of-Day Review</div>

        </div>

      </div>


      <div class="section-card">

        <h2>🎯 Manager Formula</h2>

        <div class="formula-box">
          <strong>
            Target → Plan → Execute → Measure → Coach → Improve
          </strong>
        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   PRICING CALCULATOR
========================================================= */

function renderPricing() {

  const content = $("#app-content");

  if (!content) return;

  content.innerHTML = `

    <section>

      <div class="page-heading">
        <div>
          <div class="section-kicker">BUSINESS CALCULATOR</div>
          <h1>🧮 Pricing Calculator</h1>
          <p>
            Cost နဲ့ Desired Margin ကို အသုံးပြုပြီး Selling Price တွက်ပါ။
          </p>
        </div>
      </div>


      <div class="calculator-card">

        <div class="form-group">

          <label>Cost Price</label>

          <input
            id="costPrice"
            type="number"
            min="0"
            placeholder="ဥပမာ 100000"
          />

        </div>


        <div class="form-group">

          <label>Desired Profit Margin (%)</label>

          <input
            id="desiredMargin"
            type="number"
            min="0"
            max="99"
            placeholder="ဥပမာ 25"
          />

        </div>


        <button
          class="primary-btn"
          data-action="calculate-price"
          type="button"
        >
          🧮 Calculate Selling Price
        </button>


        <div id="pricingResult" class="calculator-result"></div>

      </div>


      <div class="calculator-card">

        <h2>📈 Sales Target Calculator</h2>

        <div class="form-group">
          <label>Monthly Target</label>
          <input id="monthlyTarget" type="number" min="0" placeholder="ဥပမာ 30000000">
        </div>

        <div class="form-group">
          <label>Working Days</label>
          <input id="workingDays" type="number" min="1" value="26">
        </div>

        <button
          class="primary-btn"
          data-action="calculate-target"
          type="button"
        >
          Calculate Daily Target
        </button>

        <div id="targetResult" class="calculator-result"></div>

      </div>


      <div class="calculator-card">

        <h2>📊 Growth Calculator</h2>

        <div class="form-group">
          <label>Previous Sales</label>
          <input id="previousSales" type="number" min="0" placeholder="Previous">
        </div>

        <div class="form-group">
          <label>Current Sales</label>
          <input id="currentSales" type="number" min="0" placeholder="Current">
        </div>

        <button
          class="primary-btn"
          data-action="calculate-growth"
          type="button"
        >
          Calculate Growth
        </button>

        <div id="growthResult" class="calculator-result"></div>

      </div>

    </section>
  `;
}

/* =========================================================
   REPORTS
========================================================= */

function renderReports() {

  const content = $("#app-content");

  if (!content) return;

  const completed = getCompleted().length;
  const total = lessons.length;
  const progress = getProgress();

  content.innerHTML = `

    <section>

      <div class="page-heading">
        <div>
          <div class="section-kicker">ANALYTICS</div>
          <h1>📈 Reports</h1>
          <p>
            Learning Performance နဲ့ Business Learning Summary။
          </p>
        </div>
      </div>


      <div class="section-card">

        <h2>Learning Performance</h2>

        <div class="report-grid">

          <div class="report-metric">
            <span>Total Lessons</span>
            <strong>${total}</strong>
          </div>

          <div class="report-metric">
            <span>Completed</span>
            <strong>${completed}</strong>
          </div>

          <div class="report-metric">
            <span>Remaining</span>
            <strong>${total - completed}</strong>
          </div>

          <div class="report-metric">
            <span>Progress</span>
            <strong>${progress}%</strong>
          </div>

        </div>

      </div>


      <div class="section-card">

        <h2>📊 Category Performance</h2>

        ${courseData.map(course => {

          const p = getCategoryProgress(course.name);

          return `
            <div class="report-row">

              <div class="report-row-title">
                <span>
                  ${course.icon}
                  ${escapeHtml(course.name)}
                </span>

                <strong>${p}%</strong>
              </div>

              ${progressBar(p)}

            </div>
          `;

        }).join("")}

      </div>


      <div class="section-card">

        <h2>🎯 Recommended Focus</h2>

        <p>
          ${
            progress < 25
              ? "အခြေခံ Business Fundamentals နဲ့ Sales Management ကို အရင်တည်ဆောက်ပါ။"
              : progress < 50
              ? "Sales, Customer Management နဲ့ Leadership ကို ပိုမိုအာရုံစိုက်ပါ။"
              : progress < 75
              ? "Finance, KPI, Negotiation နဲ့ Business Strategy ကို ချိတ်ဆက်လေ့လာပါ။"
              : "လေ့လာထားတာတွေကို လက်တွေ့ Business Case တွေနဲ့ အသုံးချပြီး Professional Growth ကို ဆက်လုပ်ပါ။"
          }
        </p>

      </div>

    </section>
  `;
}

/* =========================================================
   AI BUSINESS COACH
========================================================= */

function renderAICoach() {

  const content = $("#app-content");

  if (!content) return;

  content.innerHTML = `

    <section>

      <div class="page-heading">
        <div>
          <div class="section-kicker">AI & COACHING</div>
          <h1>🤖 AI Business Coach</h1>
          <p>
            Business Problem တစ်ခုကို ရွေးပြီး Manager အမြင်နဲ့ အကြံပြုချက်ရယူပါ။
          </p>
        </div>
      </div>


      <div class="coach-card">

        <div class="form-group">

          <label>Business Problem</label>

          <select id="coachProblem">

            <option value="sales">
              Sales Target မပြည့်ခြင်း
            </option>

            <option value="team">
              Team Performance ကျခြင်း
            </option>

            <option value="customer">
              Customer မတိုးခြင်း
            </option>

            <option value="profit">
              Profit Margin နည်းခြင်း
            </option>

            <option value="motivation">
              Team Motivation နည်းခြင်း
            </option>

            <option value="strategy">
              Business Strategy မရှင်းခြင်း
            </option>

          </select>

        </div>


        <button
          class="primary-btn"
          data-action="coach-advice"
          type="button"
        >
          🤖 Get Coaching Advice
        </button>


        <div id="coachResult" class="coach-result"></div>

      </div>


      <div class="section-card">

        <h2>🧠 Manager Thinking Framework</h2>

        <div class="framework-grid">

          <div>
            <strong>1. What?</strong>
            <p>Problem က ဘာလဲ?</p>
          </div>

          <div>
            <strong>2. Why?</strong>
            <p>ဘာကြောင့် ဖြစ်တာလဲ?</p>
          </div>

          <div>
            <strong>3. Impact?</strong>
            <p>Business Impact ဘာလဲ?</p>
          </div>

          <div>
            <strong>4. Action?</strong>
            <p>ဘာလုပ်မလဲ?</p>
          </div>

          <div>
            <strong>5. Measure?</strong>
            <p>Result ကို ဘယ်လိုတိုင်းမလဲ?</p>
          </div>

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   AI TOOLS
========================================================= */

function renderAITools() {

  const content = $("#app-content");

  if (!content) return;

  content.innerHTML = `

    <section>

      <div class="page-heading">
        <div>
          <div class="section-kicker">PRODUCTIVITY</div>
          <h1>🛠 AI Tools</h1>
          <p>
            Business Manager တစ်ယောက်အနေနဲ့ နေ့စဉ်အသုံးချနိုင်တဲ့ Simple Tools။
          </p>
        </div>
      </div>


      <div class="tool-grid">

        <div class="tool-card">

          <div class="tool-icon">🎯</div>

          <h3>Sales Target Breakdown</h3>

          <p>
            Monthly Target ကို Daily Target အဖြစ် ခွဲပါ။
          </p>

          <button
            class="small-btn"
            data-action="show-section"
            data-section="pricing"
            type="button"
          >
            Open Calculator
          </button>

        </div>


        <div class="tool-card">

          <div class="tool-icon">💰</div>

          <h3>Profit Margin</h3>

          <p>
            Cost နဲ့ Margin ကနေ Selling Price တွက်ပါ။
          </p>

          <button
            class="small-btn"
            data-action="show-section"
            data-section="pricing"
            type="button"
          >
            Calculate
          </button>

        </div>


        <div class="tool-card">

          <div class="tool-icon">📊</div>

          <h3>Growth Analysis</h3>

          <p>
            Previous Sales နဲ့ Current Sales ကို နှိုင်းယှဉ်ပါ။
          </p>

          <button
            class="small-btn"
            data-action="show-section"
            data-section="pricing"
            type="button"
          >
            Analyze
          </button>

        </div>


        <div class="tool-card">

          <div class="tool-icon">🤖</div>

          <h3>Business Coach</h3>

          <p>
            Managerial Problem Solving Framework ကို အသုံးချပါ။
          </p>

          <button
            class="small-btn"
            data-action="show-section"
            data-section="ai-business-coach"
            type="button"
          >
            Ask Coach
          </button>

        </div>

      </div>


      <div class="section-card">

        <h2>💡 AI Productivity Principle</h2>

        <p>
          AI ကို လူအစားထိုးဖို့ထက် Data စုစည်းခြင်း၊
          Analysis ပြုလုပ်ခြင်း၊ Idea ထုတ်ခြင်းနဲ့
          Productivity တိုးတက်စေခြင်းအတွက် အသုံးချပါ။
        </p>

      </div>

    </section>
  `;
}

/* =========================================================
   SETTINGS
========================================================= */

function renderSettings() {

  const content = $("#app-content");

  if (!content) return;

  content.innerHTML = `

    <section>

      <div class="page-heading">
        <div>
          <div class="section-kicker">SYSTEM</div>
          <h1>⚙️ Settings</h1>
          <p>
            Aung Business Academy ရဲ့ Learning Data နဲ့ App Information။
          </p>
        </div>
      </div>


      <div class="settings-card">

        <div class="settings-row">

          <div>
            <strong>👤 Profile</strong>
            <p>Aung Zar Ni Win</p>
          </div>

          <span>Business Manager</span>

        </div>


        <div class="settings-row">

          <div>
            <strong>🎓 Academy Version</strong>
            <p>Professional Learning Platform</p>
          </div>

          <span>V8.0</span>

        </div>


        <div class="settings-row">

          <div>
            <strong>📚 Lessons</strong>
            <p>Business Learning Library</p>
          </div>

          <span>${lessons.length}</span>

        </div>


        <div class="settings-row">

          <div>
            <strong>🇲🇲 Language</strong>
            <p>Lesson Content Language</p>
          </div>

          <span>Burmese</span>

        </div>

      </div>


      <div class="settings-card">

        <h2>💾 Learning Data</h2>

        <p>
          သင်ပြီးဆုံးထားတဲ့ Lesson Progress ကို ဒီ Device ရဲ့
          Browser Local Storage ထဲမှာ သိမ်းထားပါတယ်။
        </p>

        <button
          class="danger-btn"
          data-action="reset-progress"
          type="button"
        >
          Reset Learning Progress
        </button>

      </div>


      <div class="settings-card">

        <h2>ℹ️ About</h2>

        <p>
          <strong>Aung Business Academy V8.0 Professional</strong>
        </p>

        <p>
          Business Fundamentals, Strategy, Sales, Marketing,
          Finance, Leadership, Negotiation, AI နဲ့ Career Development
          အတွက် Learning Platform ဖြစ်ပါတယ်။
        </p>

      </div>

    </section>
  `;
}

/* =========================================================
   RENDER CURRENT SECTION
========================================================= */

function renderCurrentSection() {

  switch (currentSection) {

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
}

/* =========================================================
   CALCULATORS
========================================================= */

function calculatePrice() {

  const costInput = $("#costPrice");
  const marginInput = $("#desiredMargin");
  const result = $("#pricingResult");

  if (!costInput || !marginInput || !result) return;

  const cost = Number(costInput.value);
  const margin = Number(marginInput.value);

  if (
    !Number.isFinite(cost) ||
    !Number.isFinite(margin) ||
    cost <= 0 ||
    margin < 0 ||
    margin >= 100
  ) {
    result.innerHTML = `
      <div class="result-error">
        ⚠️ Cost Price နဲ့ Margin ကို မှန်ကန်စွာ ထည့်ပါ။
      </div>
    `;
    return;
  }

  const sellingPrice =
    cost / (1 - margin / 100);

  const profit =
    sellingPrice - cost;

  result.innerHTML = `
    <div class="result-success">

      <div>
        <span>Cost Price</span>
        <strong>${cost.toLocaleString()}</strong>
      </div>

      <div>
        <span>Profit</span>
        <strong>${profit.toLocaleString()}</strong>
      </div>

      <div>
        <span>Selling Price</span>
        <strong>${sellingPrice.toLocaleString()}</strong>
      </div>

      <div>
        <span>Margin</span>
        <strong>${margin}%</strong>
      </div>

    </div>
  `;
}

function calculateTarget() {

  const target = Number($("#monthlyTarget")?.value);
  const days = Number($("#workingDays")?.value);
  const result = $("#targetResult");

  if (!result) return;

  if (
    !Number.isFinite(target) ||
    !Number.isFinite(days) ||
    target <= 0 ||
    days <= 0
  ) {
    result.innerHTML = `
      <div class="result-error">
        ⚠️ Target နဲ့ Working Days ကို မှန်ကန်စွာ ထည့်ပါ။
      </div>
    `;
    return;
  }

  const daily = target / days;
  const weekly = target / 4;

  result.innerHTML = `
    <div class="result-success">

      <div>
        <span>Monthly Target</span>
        <strong>${target.toLocaleString()}</strong>
      </div>

      <div>
        <span>Weekly Target</span>
        <strong>${weekly.toLocaleString(undefined, {
          maximumFractionDigits: 0
        })}</strong>
      </div>

      <div>
        <span>Daily Target</span>
        <strong>${daily.toLocaleString(undefined, {
          maximumFractionDigits: 0
        })}</strong>
      </div>

    </div>
  `;
}

function calculateGrowth() {

  const previous = Number($("#previousSales")?.value);
  const current = Number($("#currentSales")?.value);
  const result = $("#growthResult");

  if (!result) return;

  if (
    !Number.isFinite(previous) ||
    !Number.isFinite(current) ||
    previous <= 0
  ) {
    result.innerHTML = `
      <div class="result-error">
        ⚠️ Previous Sales နဲ့ Current Sales ကို မှန်ကန်စွာ ထည့်ပါ။
      </div>
    `;
    return;
  }

  const growth =
    ((current - previous) / previous) * 100;

  const direction =
    growth >= 0
      ? "📈 Growth"
      : "📉 Decline";

  result.innerHTML = `
    <div class="result-success">

      <div>
        <span>Previous Sales</span>
        <strong>${previous.toLocaleString()}</strong>
      </div>

      <div>
        <span>Current Sales</span>
        <strong>${current.toLocaleString()}</strong>
      </div>

      <div>
        <span>${direction}</span>
        <strong>${growth.toFixed(2)}%</strong>
      </div>

    </div>
  `;
}

/* =========================================================
   AI COACH LOGIC
========================================================= */

function getCoachAdvice(problem) {

  const advice = {

    sales: `
      <h3>🎯 Sales Target မပြည့်ခြင်း</h3>

      <p>
        ပထမဆုံး Target Gap ကို တိတိကျကျ သိအောင်လုပ်ပါ။
        ပြီးရင် Territory, Customer, Product, Stock,
        Salesperson Performance နဲ့ Market Situation ကို ခွဲခြမ်းပါ။
      </p>

      <ol>
        <li>Target vs Achievement ကို စစ်ပါ။</li>
        <li>Gap ရဲ့ Root Cause ရှာပါ။</li>
        <li>High Potential Customer ကို ဦးစားပေးပါ။</li>
        <li>Team တစ်ယောက်ချင်းစီအတွက် Action Plan သတ်မှတ်ပါ။</li>
        <li>Daily Review နဲ့ Progress ကို စောင့်ကြည့်ပါ။</li>
      </ol>
    `,

    team: `
      <h3>👥 Team Performance ကျခြင်း</h3>

      <p>
        Performance ကျတာကို Motivation တစ်ခုတည်းကြောင့်လို့ မယူဆပါနဲ့။
        Skill, Will, Resource, Target နဲ့ Leadership Factors ကို ခွဲခြမ်းပါ။
      </p>

      <ol>
        <li>Performance Data ကို စစ်ပါ။</li>
        <li>Individual Gap ကို ရှာပါ။</li>
        <li>Skill Gap ရှိရင် Coaching ပေးပါ။</li>
        <li>Expectation ကို ပြန်ရှင်းပါ။</li>
        <li>Follow-up Review ပြုလုပ်ပါ။</li>
      </ol>
    `,

    customer: `
      <h3>🤝 Customer မတိုးခြင်း</h3>

      <p>
        Customer Acquisition မတိုးရင် Market Opportunity,
        Prospect Quality, Sales Approach နဲ့ Value Proposition ကို ပြန်စစ်ပါ။
      </p>

      <ol>
        <li>Target Customer သတ်မှတ်ပါ။</li>
        <li>Potential Customer List တည်ဆောက်ပါ။</li>
        <li>Needs Analysis လုပ်ပါ။</li>
        <li>Customer Problem ကို ဖြေရှင်းပေးပါ။</li>
        <li>Follow-up System ထားပါ။</li>
      </ol>
    `,

    profit: `
      <h3>💰 Profit Margin နည်းခြင်း</h3>

      <p>
        Sales တိုးတာနဲ့ Profit တိုးတာ မတူပါဘူး။
        Price, Cost, Discount, Product Mix နဲ့ Operating Cost ကို စစ်ပါ။
      </p>

      <ol>
        <li>Gross Margin စစ်ပါ။</li>
        <li>Discount Level စစ်ပါ။</li>
        <li>Low Margin Product တွေရှာပါ။</li>
        <li>Cost Control လုပ်ပါ။</li>
        <li>Pricing Strategy ပြန်သုံးသပ်ပါ။</li>
      </ol>
    `,

    motivation: `
      <h3>🔥 Team Motivation နည်းခြင်း</h3>

      <p>
        Motivation ကို Incentive တစ်ခုတည်းနဲ့ မဖြေရှင်းပါနဲ့။
        Purpose, Recognition, Growth, Fairness နဲ့ Leadership ကိုပါ စဉ်းစားပါ။
      </p>

      <ol>
        <li>Team Member တစ်ယောက်ချင်းစီကို နားထောင်ပါ။</li>
        <li>Expectation ကို ရှင်းပါ။</li>
        <li>ကောင်းမွန်တဲ့ Performance ကို အသိအမှတ်ပြုပါ။</li>
        <li>Development Opportunity ပေးပါ။</li>
        <li>Manager အနေနဲ့ Consistent ဖြစ်ပါ။</li>
      </ol>
    `,

    strategy: `
      <h3>🎯 Business Strategy မရှင်းခြင်း</h3>

      <p>
        Strategy မရှင်းရင် Team ရဲ့ Activity တွေ အများကြီးဖြစ်ပေမယ့်
        Business Result မရနိုင်ပါဘူး။
      </p>

      <ol>
        <li>Vision နဲ့ Goal သတ်မှတ်ပါ။</li>
        <li>Market Situation ကို ခွဲခြမ်းပါ။</li>
        <li>Competitive Advantage ရှာပါ။</li>
        <li>Strategic Priorities 3 ခုထက် မပိုအောင် သတ်မှတ်ပါ။</li>
        <li>Execution KPI နဲ့ Review လုပ်ပါ။</li>
      </ol>
    `

  };

  return advice[problem] || advice.sales;
}

/* =========================================================
   RESET PROGRESS
========================================================= */

function resetProgress() {

  const confirmed = window.confirm(
    "Lesson Progress အားလုံးကို Reset လုပ်မလား?"
  );

  if (!confirmed) return;

  localStorage.removeItem(STORAGE_KEY);

  alert("Progress Reset ပြီးပါပြီ။");

  renderCurrentSection();
}

/* =========================================================
   EVENT DELEGATION
========================================================= */

function setupEvents() {

  const content = $("#app-content");

  if (!content) return;

  content.addEventListener("click", function(event) {

    const actionElement =
      event.target.closest("[data-action]");

    if (!actionElement) return;

    const action =
      actionElement.dataset.action;

    /* OPEN LESSON */

    if (action === "open-lesson") {

      const id =
        Number(actionElement.dataset.id);

      renderLessonReader(id);

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      return;
    }


    /* BACK TO LESSONS */

    if (action === "back-to-lessons") {

      currentLessonId = null;

      goToSection("lessons");

      return;
    }


    /* TOGGLE COMPLETE */

    if (action === "toggle-complete") {

      const id =
        Number(actionElement.dataset.id);

      toggleComplete(id);

      renderLessonReader(id);

      return;
    }


    /* CONTINUE LEARNING */

    if (action === "continue-learning") {

      const lesson =
        getNextIncompleteLesson();

      if (lesson) {
        renderLessonReader(lesson.id);
      }

      return;
    }


    /* SHOW SECTION */

    if (action === "show-section") {

      const section =
        actionElement.dataset.section;

      goToSection(section);

      return;
    }


    /* FILTER CATEGORY */

    if (action === "filter-category") {

      currentCategory =
        actionElement.dataset.category || "အားလုံး";

      searchTerm = "";

      currentSection = "lessons";

      document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.toggle(
          "active",
          item.dataset.section === "lessons"
        );
      });

      const headerTitle = $("#headerTitle");

      if (headerTitle) {
        headerTitle.textContent = "Lessons";
      }

      renderLessons();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      return;
    }


    /* RESET */

    if (action === "reset-progress") {

      resetProgress();

      return;
    }


    /* CALCULATE PRICE */

    if (action === "calculate-price") {

      calculatePrice();

      return;
    }


    /* CALCULATE TARGET */

    if (action === "calculate-target") {

      calculateTarget();

      return;
    }


    /* CALCULATE GROWTH */

    if (action === "calculate-growth") {

      calculateGrowth();

      return;
    }


    /* AI COACH */

    if (action === "coach-advice") {

      const problem =
        $("#coachProblem")?.value || "sales";

      const result =
        $("#coachResult");

      if (result) {

        result.innerHTML =
          getCoachAdvice(problem);

        result.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }

      return;
    }

  });


  /* SEARCH */

  content.addEventListener("input", function(event) {

    if (event.target.id !== "lessonSearch") {
      return;
    }

    searchTerm =
      event.target.value.trim();

    renderLessons();

    const input =
      $("#lessonSearch");

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


  /* CATEGORY SELECT */

  content.addEventListener("change", function(event) {

    if (event.target.id !== "categoryFilter") {
      return;
    }

    currentCategory =
      event.target.value || "အားလုံး";

    renderLessons();

  });

}

/* =========================================================
   SIDEBAR NAV EVENTS
========================================================= */

function setupNavigation() {

  const sidebarNav =
    document.querySelector(".sidebar-nav");

  if (!sidebarNav) return;

  sidebarNav.addEventListener("click", function(event) {

    const nav =
      event.target.closest(".nav-item");

    if (!nav) return;

    const section =
      nav.dataset.section;

    if (!section) return;

    goToSection(section);

  });
}

/* =========================================================
   MOBILE SAFETY
========================================================= */

function injectSafeMobileCSS() {

  if (document.getElementById("aba-safe-mobile-css")) {
    return;
  }

  const style =
    document.createElement("style");

  style.id = "aba-safe-mobile-css";

  style.textContent = `

    html,
    body {
      overflow-x: hidden !important;
    }

    .content,
    #app-content {
      max-width: 100%;
      overflow-x: hidden;
    }

    .lesson-reader,
    .lesson-reader-header,
    .reader-content,
    .lesson-section,
    .section-card,
    .calculator-card,
    .coach-card,
    .settings-card,
    .tool-card,
    .course-card-large {
      max-width: 100%;
      overflow-wrap: anywhere;
      word-break: normal;
    }

    .lesson-section p,
    .lesson-section li,
    .reader-content p {
      line-height: 1.9;
    }

    .lesson-navigation {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin-top: 24px;
    }

    .lesson-navigation > * {
      max-width: 48%;
    }

    .button-row {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 18px;
    }

    .lesson-complete-box {
      margin-top: 24px;
      text-align: center;
    }

    .lesson-complete-box button {
      max-width: 100%;
    }

    .quiz-card {
      padding: 16px;
      margin-top: 12px;
      border-radius: 12px;
    }

    .checklist-box {
      display: grid;
      gap: 8px;
    }

    .detail-block {
      margin-top: 18px;
    }

    @media (max-width: 600px) {

      .lesson-navigation {
        flex-direction: column;
      }

      .lesson-navigation > * {
        max-width: 100%;
        width: 100%;
      }

      .button-row {
        flex-direction: column;
      }

      .button-row button {
        width: 100%;
      }

    }

  `;

  document.head.appendChild(style);
}

/* =========================================================
   INITIALIZE
========================================================= */

function init() {

  injectSafeMobileCSS();

  setupNavigation();

  setupEvents();

  goToSection("dashboard");

}

/* =========================================================
   PUBLIC API
========================================================= */

window.AungBusinessAcademy = {

  lessons,

  courseData,

  getLessonContent,

  getCompleted,

  getProgress,

  openLesson: function(id) {
    renderLessonReader(id);
  },

  goToSection,

  resetProgress

};


/* =========================================================
   START
========================================================= */

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

} else {

  init();

}
