// ======================================================
// AUNG BUSINESS ACADEMY V8
// APP.JS — FULL STABLE VERSION
// 14 LESSONS + LESSON LIST VIEW
// ======================================================

"use strict";

// ======================================================
// STORAGE
// ======================================================

const STORAGE_KEY = "aungBusinessAcademyV8";

const VALID_PAGES = [
  "dashboard",
  "courses",
  "lessons",
  "progress",
  "sales",
  "calculator",
  "reports",
  "ai-coach",
  "ai-tools",
  "settings"
];

// ======================================================
// COURSES
// ======================================================

const COURSES = [

  // ====================================================
  // COURSE 1 — FREE
  // ====================================================

  {
    id: "sales-management",
    title: "Sales Management Mastery",
    category: "sales",
    color: "blue",
    icon: "↗",
    premium: false,
    description:
      "Master sales planning, team coaching, territory management and performance management.",

    lessons: [

      {
        title: "Sales Management Fundamentals",
        content: `
          <p>
            Sales Management ဆိုတာ Target ရရှိအောင်
            People, Customer, Market နဲ့ Execution ကို
            စနစ်တကျ စီမံခန့်ခွဲခြင်း ဖြစ်ပါတယ်။
          </p>

          <p>
            Manager တစ်ယောက်အနေနဲ့ Sales Target ကို
            သတ်မှတ်ရုံမဟုတ်ဘဲ Target ရောက်အောင်
            Team ကို ဦးဆောင်ပေးရပါမယ်။
          </p>

          <ul>
            <li>Target Management</li>
            <li>People Management</li>
            <li>Customer Management</li>
            <li>Territory Management</li>
            <li>Performance Management</li>
          </ul>
        `
      },

      {
        title: "Target Planning",
        content: `
          <p>
            Annual Target ကို Monthly Target,
            Weekly Target နဲ့ Daily Target အဖြစ်
            ခွဲခြမ်းစီမံပါ။
          </p>

          <p>
            Target ချမှတ်ရာမှာ Previous Performance,
            Market Potential, Customer Base နဲ့
            Growth Opportunity တွေကို
            ထည့်သွင်းစဉ်းစားရပါမယ်။
          </p>

          <ul>
            <li>Annual Target</li>
            <li>Monthly Target</li>
            <li>Weekly Target</li>
            <li>Daily Target</li>
          </ul>
        `
      },

      {
        title: "Sales Execution",
        content: `
          <p>
            Strategy ကောင်းရုံနဲ့ မလုံလောက်ပါဘူး။
            Field Execution က Sales Result ကို
            တိုက်ရိုက် သက်ရောက်စေပါတယ်။
          </p>

          <p>
            Daily Visit Plan, Customer Coverage,
            Order Generation နဲ့ Follow-up ကို
            စနစ်တကျ လုပ်ဆောင်ပါ။
          </p>

          <ul>
            <li>Daily Visit Plan</li>
            <li>Customer Coverage</li>
            <li>Order Generation</li>
            <li>Follow-up</li>
          </ul>
        `
      },

      {
        title: "Sales Team Coaching",
        content: `
          <p>
            Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်က
            Team Member တွေကို အလုပ်ခိုင်းရုံမဟုတ်ဘဲ
            သူတို့ရဲ့ Capability ကို မြှင့်တင်ပေးခြင်း ဖြစ်ပါတယ်။
          </p>

          <p>
            Coaching, Feedback, Empowerment နဲ့
            Accountability ကို ပေါင်းစပ်အသုံးပြုပါ။
          </p>

          <ul>
            <li>Coaching</li>
            <li>Feedback</li>
            <li>Empowerment</li>
            <li>Accountability</li>
          </ul>
        `
      }

    ]
  },

  // ====================================================
  // COURSE 2 — PREMIUM
  // ====================================================

  {
    id: "leadership",
    title: "Leadership Excellence",
    category: "leadership",
    color: "purple",
    icon: "★",
    premium: true,
    description:
      "Build strong leadership, coaching, communication and team management skills.",

    lessons: [

      {
        title: "Leadership Fundamentals",
        content: `
          <p>
            Leadership ဆိုတာ Position တစ်ခုမဟုတ်ပါ။
            လူတွေကို ရည်မှန်းချက်တစ်ခုအတွက်
            လိုက်ပါလာအောင် Influence လုပ်နိုင်ခြင်း ဖြစ်ပါတယ်။
          </p>

          <ul>
            <li>Vision</li>
            <li>Influence</li>
            <li>Direction</li>
            <li>Accountability</li>
          </ul>
        `
      },

      {
        title: "Coaching & Empowerment",
        content: `
          <p>
            Micromanagement မလုပ်ဘဲ
            Clear Expectations ပေးပြီး
            Team Member တွေကို Ownership ပေးပါ။
          </p>

          <p>
            Performance Review နဲ့ Feedback ကို
            ပုံမှန်ပြုလုပ်ပါ။
          </p>

          <ul>
            <li>Clear Expectations</li>
            <li>Ownership</li>
            <li>Coaching</li>
            <li>Feedback</li>
          </ul>
        `
      },

      {
        title: "Performance Management",
        content: `
          <p>
            KPI, Target, Actual နဲ့ Gap ကို
            ပုံမှန်စောင့်ကြည့်ပါ။
          </p>

          <p>
            Performance Gap ရှိပါက Root Cause ကို
            ရှာပြီး Action Plan ပြုလုပ်ပါ။
          </p>

          <ul>
            <li>KPI Monitoring</li>
            <li>Performance Gap</li>
            <li>Root Cause Analysis</li>
            <li>Action Plan</li>
          </ul>
        `
      },

      {
        title: "Communication Skills",
        content: `
          <p>
            Effective Manager တစ်ယောက်အတွက်
            Clear Communication က အလွန်အရေးကြီးပါတယ်။
          </p>

          <ul>
            <li>Active Listening</li>
            <li>Clear Direction</li>
            <li>Constructive Feedback</li>
            <li>Conflict Management</li>
          </ul>
        `
      }

    ]
  },

  // ====================================================
  // COURSE 3 — PREMIUM
  // ====================================================

  {
    id: "business-strategy",
    title: "Business Strategy",
    category: "business",
    color: "green",
    icon: "◆",
    premium: true,
    description:
      "Learn practical business strategy, market analysis, customer growth and competitive advantage.",

    lessons: [

      {
        title: "Business Strategy Fundamentals",
        content: `
          <p>
            Business Strategy ဆိုတာ Company ရဲ့
            Long-term Direction ကို သတ်မှတ်ပြီး
            Resources တွေကို အကောင်းဆုံးအသုံးချခြင်း ဖြစ်ပါတယ်။
          </p>

          <ul>
            <li>Vision</li>
            <li>Mission</li>
            <li>Strategic Direction</li>
            <li>Resource Allocation</li>
          </ul>
        `
      },

      {
        title: "Market Analysis",
        content: `
          <p>
            Market Size, Customer Need, Competitor
            နဲ့ Market Trend တွေကို လေ့လာပါ။
          </p>

          <p>
            Market အတွင်းမှာ ကိုယ့်လုပ်ငန်းအတွက်
            Growth Opportunity ဘယ်မှာရှိသလဲ ရှာဖွေပါ။
          </p>

          <ul>
            <li>Market Size</li>
            <li>Customer Need</li>
            <li>Competitor Analysis</li>
            <li>Market Trend</li>
          </ul>
        `
      },

      {
        title: "Customer Growth Strategy",
        content: `
          <p>
            Customer အသစ်ရရှိရေးတင်မက
            လက်ရှိ Customer တွေရဲ့ Value ကို
            တိုးမြှင့်ပေးဖို့ လိုအပ်ပါတယ်။
          </p>

          <ul>
            <li>Customer Retention</li>
            <li>Cross Selling</li>
            <li>Up Selling</li>
            <li>Customer Development</li>
          </ul>
        `
      }

    ]
  },

  // ====================================================
  // COURSE 4 — PREMIUM
  // ====================================================

  {
    id: "business-finance",
    title: "Business Finance",
    category: "finance",
    color: "orange",
    icon: "▣",
    premium: true,
    description:
      "Understand revenue, cost, profit, margin, cash flow and practical business finance.",

    lessons: [

      {
        title: "Finance Fundamentals",
        content: `
          <p>
            Business Manager တစ်ယောက်အနေနဲ့
            Revenue, Cost, Profit နဲ့ Cash Flow
            အခြေခံကို နားလည်ထားရပါမယ်။
          </p>

          <ul>
            <li>Revenue</li>
            <li>Cost</li>
            <li>Profit</li>
            <li>Cash Flow</li>
          </ul>
        `
      },

      {
        title: "Profit & Margin",
        content: `
          <p>
            Sales တက်တာနဲ့ Profit တက်တာ မတူပါဘူး။
            Cost နဲ့ Margin ကို စနစ်တကျ စောင့်ကြည့်ရပါမယ်။
          </p>

          <p>
            <strong>Gross Profit = Revenue − Cost</strong>
          </p>

          <p>
            Margin ကို သိရှိထားခြင်းက
            Pricing နဲ့ Profitability Decision တွေအတွက်
            အရေးကြီးပါတယ်။
          </p>
        `
      },

      {
        title: "Cash Flow Management",
        content: `
          <p>
            Profit ရှိပေမယ့် Cash မရှိတဲ့ Business
            ဖြစ်နိုင်ပါတယ်။
          </p>

          <p>
            Receivable, Payable, Inventory နဲ့
            Cash Conversion Cycle ကို စောင့်ကြည့်ပါ။
          </p>

          <ul>
            <li>Accounts Receivable</li>
            <li>Accounts Payable</li>
            <li>Inventory</li>
            <li>Cash Conversion Cycle</li>
          </ul>
        `
      }

    ]
  }

];

// ======================================================
// STATE
// ======================================================

let state = null;
let academyInitialized = false;

// ======================================================
// DATE
// ======================================================

function getTodayKey() {

  const date = new Date();

  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

function getYesterdayKey() {

  const date = new Date();

  date.setDate(date.getDate() - 1);

  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0")
  ].join("-");
}

// ======================================================
// DEFAULT STATE
// ======================================================

function createDefaultState() {

  return {

    currentPage: "dashboard",

    currentCourseId:
      COURSES[0]?.id || null,

    currentLessonIndex: 0,

    completedLessons: [],

    lessonDates: {},

    activity: [],

    streak: 0,

    lastLearningDate: null,

    dailyGoal: {
      minutes: 0,
      target: 30,
      date: getTodayKey()
    },

    sales: {
      target: 100,
      actual: 0,
      history: [],
      priorities: []
    },

    calculator: {
      product: "Product",
      cost: 10000,
      margin: 20
    },

    settings: {
      reminder: true,
      tracking: true
    }

  };
}

// ======================================================
// STORAGE
// ======================================================

function saveState() {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

  } catch (error) {

    console.error(
      "Save state error:",
      error
    );

  }
}

function loadState() {

  try {

    const saved =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (!saved) {
      return createDefaultState();
    }

    const parsed =
      JSON.parse(saved);

    const defaults =
      createDefaultState();

    const merged = {

      ...defaults,
      ...parsed,

      dailyGoal: {
        ...defaults.dailyGoal,
        ...(parsed.dailyGoal || {})
      },

      sales: {
        ...defaults.sales,
        ...(parsed.sales || {})
      },

      calculator: {
        ...defaults.calculator,
        ...(parsed.calculator || {})
      },

      settings: {
        ...defaults.settings,
        ...(parsed.settings || {})
      }

    };

    merged.completedLessons =
      Array.isArray(
        parsed.completedLessons
      )
        ? parsed.completedLessons
        : [];

    merged.lessonDates =
      parsed.lessonDates &&
      typeof parsed.lessonDates === "object"
        ? parsed.lessonDates
        : {};

    merged.activity =
      Array.isArray(parsed.activity)
        ? parsed.activity
        : [];

    merged.sales.history =
      Array.isArray(
        merged.sales.history
      )
        ? merged.sales.history
        : [];

    merged.sales.priorities =
      Array.isArray(
        merged.sales.priorities
      )
        ? merged.sales.priorities
        : [];

    if (
      !VALID_PAGES.includes(
        merged.currentPage
      )
    ) {

      merged.currentPage =
        "dashboard";

    }

    if (
      !COURSES.some(
        course =>
          course.id ===
          merged.currentCourseId
      )
    ) {

      merged.currentCourseId =
        COURSES[0]?.id || null;

      merged.currentLessonIndex =
        0;

    }

    return merged;

  } catch (error) {

    console.error(
      "Load state error:",
      error
    );

    return createDefaultState();

  }

}

// ======================================================
// HTML ESCAPE
// ======================================================

function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}

// ======================================================
// PREMIUM
// ======================================================

function isPremiumCourse(course) {

  return !!course &&
    course.premium === true;

}

function hasPremiumAccess() {

  try {

    if (window.AungPremium) {

      if (
        typeof window.AungPremium.hasAccess ===
        "function"
      ) {

        return !!window.AungPremium.hasAccess();

      }

      if (
        typeof window.AungPremium.isPremiumActive ===
        "function"
      ) {

        return !!window.AungPremium.isPremiumActive();

      }

      if (
        typeof window.AungPremium.getStatus ===
        "function"
      ) {

        const status =
          window.AungPremium.getStatus();

        if (
          status === "approved" ||
          status === "active" ||
          status === "premium"
        ) {

          return true;

        }

      }

    }

  } catch (error) {

    console.warn(
      "Premium access check failed:",
      error
    );

  }

  // ----------------------------------------------------
  // TRIAL FALLBACK
  // ----------------------------------------------------

  try {

    const trial =
      localStorage.getItem(
        "aung_business_academy_trial"
      );

    if (trial) {

      const data =
        JSON.parse(trial);

      if (
        data &&
        data.start &&
        data.days
      ) {

        const elapsed =
          Date.now() -
          Number(data.start);

        const duration =
          Number(data.days) *
          86400000;

        if (elapsed < duration) {
          return true;
        }

      }

    }

  } catch (error) {

    console.warn(
      "Trial check failed:",
      error
    );

  }

  return false;
}

// ======================================================
// PREMIUM MODAL
// ======================================================

function openPremiumAccess() {

  try {

    if (
      window.AungPremium &&
      typeof window.AungPremium.openPremiumModal ===
      "function"
    ) {

      window.AungPremium.openPremiumModal();

      return;

    }

    if (
      window.AungPremium &&
      typeof window.AungPremium.openPremium ===
      "function"
    ) {

      window.AungPremium.openPremium();

      return;

    }

  } catch (error) {

    console.warn(
      "Premium modal error:",
      error
    );

  }

  showModal(
    "👑 Premium Access",
    `
      <strong>Premium Course ဖြစ်ပါတယ်။</strong>

      <br><br>

      Course 2 — Leadership Excellence<br>
      Course 3 — Business Strategy<br>
      Course 4 — Business Finance

      <br><br>

      Premium Access ရရှိပြီးမှ
      ဒီ Course များကို လေ့လာနိုင်ပါမယ်။
    `,
    "Close",
    closeModal
  );

}

// ======================================================
// COURSE HELPERS
// ======================================================

function getCourseById(courseId) {

  return COURSES.find(
    course =>
      course.id === courseId
  ) || null;

}

function getCurrentCourse() {

  if (!state) return null;

  return getCourseById(
    state.currentCourseId
  );

}

function getCurrentLesson() {

  const course =
    getCurrentCourse();

  if (!course) {

    return {
      course: null,
      index: 0,
      lesson: null
    };

  }

  let index =
    Number(state.currentLessonIndex);

  if (
    !Number.isInteger(index) ||
    index < 0
  ) {

    index = 0;

  }

  if (
    index >=
    course.lessons.length
  ) {

    index =
      course.lessons.length - 1;

  }

  state.currentLessonIndex =
    Math.max(0, index);

  return {

    course,
    index,
    lesson: course.lessons[index]

  };

}

// ======================================================
// LESSON COUNTS
// ======================================================

function getTotalLessons() {

  return COURSES.reduce(
    (total, course) =>
      total + course.lessons.length,
    0
  );

}

function getCompletedCount() {

  return Array.isArray(
    state?.completedLessons
  )
    ? state.completedLessons.length
    : 0;

}

function getCourseCompleted(courseId) {

  const course =
    getCourseById(courseId);

  if (!course || !state) {
    return 0;
  }

  return course.lessons.filter(
    (_, index) =>
      state.completedLessons.includes(
        `${courseId}-${index}`
      )
  ).length;

}

function getCourseProgress(courseId) {

  const course =
    getCourseById(courseId);

  if (
    !course ||
    !course.lessons.length ||
    !state
  ) {

    return 0;

  }

  return Math.round(
    getCourseCompleted(courseId) /
    course.lessons.length *
    100
  );

}

function getOverallProgress() {

  const total =
    getTotalLessons();

  if (!total) return 0;

  return Math.round(
    getCompletedCount() /
    total *
    100
  );

}

// ======================================================
// CONTINUE LEARNING
// ======================================================

function getContinueLearning() {

  let course =
    getCurrentCourse();

  if (!course) {

    course =
      COURSES[0];

    state.currentCourseId =
      course?.id || null;

  }

  if (!course) return null;

  let index =
    Number(state.currentLessonIndex);

  if (
    !Number.isInteger(index) ||
    index < 0
  ) {

    index = 0;

  }

  while (
    index < course.lessons.length &&
    state.completedLessons.includes(
      `${course.id}-${index}`
    )
  ) {

    index++;

  }

  if (
    index <
    course.lessons.length
  ) {

    return {

      course,

      index,

      lesson:
        course.lessons[index],

      locked:
        isPremiumCourse(course) &&
        !hasPremiumAccess()

    };

  }

  const currentIndex =
    COURSES.findIndex(
      item =>
        item.id === course.id
    );

  for (
    let i = Math.max(
      0,
      currentIndex + 1
    );

    i < COURSES.length;

    i++
  ) {

    const nextCourse =
      COURSES[i];

    const nextLessonIndex =
      nextCourse.lessons.findIndex(
        (_, lessonIndex) =>
          !state.completedLessons.includes(
            `${nextCourse.id}-${lessonIndex}`
          )
      );

    if (
      nextLessonIndex !== -1
    ) {

      return {

        course: nextCourse,

        index:
          nextLessonIndex,

        lesson:
          nextCourse.lessons[
            nextLessonIndex
          ],

        locked:
          isPremiumCourse(nextCourse) &&
          !hasPremiumAccess()

      };

    }

  }

  return null;

}

// ======================================================
// NAVIGATION
// ======================================================

function navigate(page) {

  const target =
    VALID_PAGES.includes(
      String(page)
    )
      ? String(page)
      : "dashboard";

  const pages =
    document.querySelectorAll(
      ".page"
    );

  pages.forEach(section => {

    section.classList.remove(
      "active"
    );

  });

  const pageElement =
    document.getElementById(
      `page-${target}`
    );

  if (!pageElement) {

    const dashboard =
      document.getElementById(
        "page-dashboard"
      );

    if (dashboard) {

      dashboard.classList.add(
        "active"
      );

    }

    if (state) {

      state.currentPage =
        "dashboard";

      saveState();

    }

    return;

  }

  pageElement.classList.add(
    "active"
  );

  document
    .querySelectorAll(
      ".nav-item"
    )
    .forEach(item => {

      item.classList.toggle(
        "active",
        item.dataset.page === target
      );

    });

  const breadcrumb =
    document.getElementById(
      "breadcrumbCurrent"
    );

  if (breadcrumb) {

    const navItem =
      document.querySelector(
        `.nav-item[data-page="${target}"]`
      );

    breadcrumb.textContent =
      navItem
        ? navItem.textContent.trim()
        : target
            .replace(/-/g, " ")
            .replace(
              /\b\w/g,
              c => c.toUpperCase()
            );

  }

  if (state) {

    state.currentPage =
      target;

    saveState();

  }

  closeSidebar();

  switch (target) {

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

    case "sales":
      renderSales();
      break;

    case "calculator":
      renderCalculator();
      break;

    case "reports":
      renderReports();
      break;

    case "settings":
      renderSettings();
      break;

  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

// ======================================================
// DASHBOARD
// ======================================================

function renderDashboard() {

  if (!state) return;

  const statCourses =
    document.getElementById(
      "statCourses"
    );

  const statLessons =
    document.getElementById(
      "statLessons"
    );

  const statCompleted =
    document.getElementById(
      "statCompleted"
    );

  const statProgress =
    document.getElementById(
      "statProgress"
    );

  if (statCourses) {

    statCourses.textContent =
      COURSES.length;

  }

  if (statLessons) {

    statLessons.textContent =
      getTotalLessons();

  }

  if (statCompleted) {

    statCompleted.textContent =
      getCompletedCount();

  }

  if (statProgress) {

    statProgress.textContent =
      `${getOverallProgress()}%`;

  }

  renderContinueLearning();
  renderDailyGoal();
  renderActivity();
  renderRecommendations();

}

// ======================================================
// CONTINUE
// ======================================================

function renderContinueLearning() {

  const data =
    getContinueLearning();

  if (!data) return;

  const {
    course,
    index,
    locked
  } = data;

  const completed =
    getCourseCompleted(
      course.id
    );

  const percentage =
    getCourseProgress(
      course.id
    );

  const title =
    document.getElementById(
      "dashboardCourseTitle"
    );

  const description =
    document.getElementById(
      "dashboardCourseDescription"
    );

  const progressText =
    document.getElementById(
      "dashboardProgressText"
    );

  const progressPercent =
    document.getElementById(
      "dashboardProgressPercent"
    );

  const progressBar =
    document.getElementById(
      "dashboardProgressBar"
    );

  const button =
    document.getElementById(
      "continueLearningBtn"
    );

  if (title) {

    title.textContent =
      course.title;

  }

  if (description) {

    description.textContent =
      course.description;

  }

  if (progressText) {

    progressText.textContent =
      `${completed} of ${course.lessons.length} lessons`;

  }

  if (progressPercent) {

    progressPercent.textContent =
      `${percentage}%`;

  }

  if (progressBar) {

    progressBar.style.width =
      `${percentage}%`;

  }

  if (button) {

    button.textContent =
      locked
        ? "🔒 Unlock Premium →"
        : percentage > 0
          ? "Continue Learning →"
          : "Start Learning →";

    button.dataset.course =
      course.id;

    button.dataset.lesson =
      String(index);

    button.dataset.locked =
      String(locked);

  }

}

// ======================================================
// DAILY GOAL
// ======================================================

function renderDailyGoal() {

  if (!state.dailyGoal) {

    state.dailyGoal = {

      minutes: 0,

      target: 30,

      date: getTodayKey()

    };

  }

  const today =
    getTodayKey();

  if (
    state.dailyGoal.date !== today
  ) {

    state.dailyGoal.date =
      today;

    state.dailyGoal.minutes =
      0;

    saveState();

  }

  const minutes =
    Number(
      state.dailyGoal.minutes
    ) || 0;

  const target =
    Number(
      state.dailyGoal.target
    ) || 30;

  const percentage =
    Math.min(
      100,
      Math.round(
        minutes /
        target *
        100
      )
    );

  const percentEl =
    document.getElementById(
      "goalPercent"
    );

  const minutesEl =
    document.getElementById(
      "goalMinutes"
    );

  if (percentEl) {

    percentEl.textContent =
      `${percentage}%`;

  }

  if (minutesEl) {

    minutesEl.textContent =
      `${minutes} / ${target} min`;

  }

}

// ======================================================
// ACTIVITY
// ======================================================

function renderActivity() {

  const container =
    document.getElementById(
      "activityList"
    );

  if (!container) return;

  if (!state.activity.length) {

    container.innerHTML = `
      <div class="empty-state">
        <div>📚</div>
        <strong>No activity yet</strong>
        <span>Start your first lesson.</span>
      </div>
    `;

    return;

  }

  container.innerHTML =
    state.activity
      .slice(0, 5)
      .map(item => `

        <div class="activity-item">

          <div class="activity-icon">
            ✓
          </div>

          <div class="activity-content">

            <strong>
              ${escapeHTML(item.title)}
            </strong>

            <span>
              ${escapeHTML(item.course)}
            </span>

          </div>

          <small>
            ${escapeHTML(item.time)}
          </small>

        </div>

      `)
      .join("");

}

// ======================================================
// RECOMMENDATIONS
// ======================================================

function renderRecommendations() {

  document
    .querySelectorAll(
      ".recommendation-item"
    )
    .forEach(item => {

      const key =
        item.dataset.course;

      const course =
        COURSES.find(
          c =>
            c.category === key ||
            c.id === key
        );

      if (course) {

        item.dataset.course =
          course.id;

      }

    });

}

// ======================================================
// COURSES PAGE
// ======================================================

function renderCourses(
  filter = "all"
) {

  const container =
    document.getElementById(
      "coursesGrid"
    );

  if (!container) return;

  const courses =
    filter === "all"
      ? COURSES
      : COURSES.filter(
          course =>
            course.category ===
            filter
        );

  container.innerHTML =
    courses
      .map(course => {

        const progress =
          getCourseProgress(
            course.id
          );

        const completed =
          getCourseCompleted(
            course.id
          );

        const premium =
          isPremiumCourse(
            course
          );

        const locked =
          premium &&
          !hasPremiumAccess();

        return `

          <div
            class="course-card
            ${locked ? "premium-locked" : ""}"
          >

            <div class="course-card-top">

              <div
                class="course-icon ${course.color}"
              >
                ${course.icon}
              </div>

              <span
                class="course-badge ${course.category}"
              >
                ${
                  premium
                    ? "👑 PREMIUM"
                    : escapeHTML(
                        course.category
                          .toUpperCase()
                      )
                }
              </span>

            </div>

            <h2>
              ${escapeHTML(course.title)}
            </h2>

            <p>
              ${escapeHTML(course.description)}
            </p>

            <div class="course-meta">

              <span>
                ▣ ${course.lessons.length} Lessons
              </span>

              <strong>
                ${progress}%
              </strong>

            </div>

            <div class="progress-bar">

              <div
                class="progress-fill ${course.color}-fill"
                style="width:${progress}%"
              ></div>

            </div>

            <div class="course-card-footer">

              <span>
                ${completed}/${course.lessons.length}
                completed
              </span>

              <button
                type="button"
                class="secondary-btn open-course"
                data-course="${course.id}"
              >
                ${
                  locked
                    ? "🔒 Unlock Premium"
                    : progress > 0
                      ? "Continue"
                      : "Start Course"
                }
              </button>

            </div>

          </div>

        `;

      })
      .join("");

}

// ======================================================
// LESSON PAGE — 14 LESSONS LIST
// ======================================================

function renderLessons() {

  const courseList =
    document.getElementById(
      "lessonCourseList"
    );

  const content =
    document.getElementById(
      "lessonContent"
    );

  if (!courseList || !content) {
    return;
  }

  // ----------------------------------------------------
  // LEFT SIDE — COURSE LIST
  // ----------------------------------------------------

  courseList.innerHTML =
    COURSES
      .map(course => {

        const progress =
          getCourseProgress(
            course.id
          );

        const completed =
          getCourseCompleted(
            course.id
          );

        const active =
          state.currentCourseId ===
          course.id
            ? "active"
            : "";

        const premium =
          isPremiumCourse(
            course
          );

        const locked =
          premium &&
          !hasPremiumAccess();

        return `

          <button
            type="button"
            class="lesson-course-item ${active}"
            data-course="${course.id}"
          >

            <div
              class="lesson-course-icon ${course.color}"
            >
              ${course.icon}
            </div>

            <div class="lesson-course-info">

              <strong>
                ${locked ? "🔒 " : ""}
                ${escapeHTML(course.title)}
              </strong>

              <span>
                ${
                  premium
                    ? "👑 Premium"
                    : "FREE"
                }
                •
                ${completed}/${course.lessons.length}
                completed
              </span>

              <div class="mini-progress">

                <div
                  style="width:${progress}%"
                ></div>

              </div>

            </div>

          </button>

          <!-- LESSONS UNDER COURSE -->

          <div
            class="lesson-list-under-course"
            data-course-list="${course.id}"
          >

            ${course.lessons
              .map(
                (lesson, index) => {

                  const key =
                    `${course.id}-${index}`;

                  const isCompleted =
                    state.completedLessons
                      .includes(key);

                  const isCurrent =
                    state.currentCourseId ===
                      course.id &&
                    Number(
                      state.currentLessonIndex
                    ) === index;

                  return `

                    <button
                      type="button"
                      class="lesson-list-item
                        ${isCurrent ? "current" : ""}
                        ${isCompleted ? "completed" : ""}"
                      data-course="${course.id}"
                      data-lesson-index="${index}"
                    >

                      <span class="lesson-list-number">

                        ${
                          isCompleted
                            ? "✓"
                            : index + 1
                        }

                      </span>

                      <span class="lesson-list-title">

                        ${escapeHTML(
                          lesson.title
                        )}

                      </span>

                    </button>

                  `;

                }
              )
              .join("")}

          </div>

        `;

      })
      .join("");

  // ----------------------------------------------------
  // CURRENT LESSON CONTENT
  // ----------------------------------------------------

  const current =
    getCurrentLesson();

  if (
    !current.course ||
    !current.lesson
  ) {

    content.innerHTML = `

      <div class="empty-state">

        <div>📚</div>

        <strong>
          Lesson မရှိပါ။
        </strong>

      </div>

    `;

    return;

  }

  const course =
    current.course;

  const index =
    current.index;

  const lesson =
    current.lesson;

  // ----------------------------------------------------
  // PREMIUM LOCK
  // ----------------------------------------------------

  if (
    isPremiumCourse(course) &&
    !hasPremiumAccess()
  ) {

    content.innerHTML = `

      <div
        class="empty-state"
        style="
          text-align:center;
          padding:50px 20px;
        "
      >

        <div
          style="
            font-size:56px;
            margin-bottom:15px;
          "
        >
          🔒
        </div>

        <h2>
          Premium Course
        </h2>

        <p>
          ${escapeHTML(course.title)}
        </p>

        <p>
          ဒီ Course ကိုလေ့လာရန်
          Premium Access လိုအပ်ပါတယ်။
        </p>

        <button
          type="button"
          class="primary-btn"
          id="lessonPremiumButton"
        >
          👑 Unlock Premium
        </button>

      </div>

    `;

    document
      .getElementById(
        "lessonPremiumButton"
      )
      ?.addEventListener(
        "click",
        openPremiumAccess
      );

    return;

  }

  const lessonKey =
    `${course.id}-${index}`;

  const completed =
    state.completedLessons
      .includes(
        lessonKey
      );

  const isFirst =
    index === 0;

  const isLast =
    index ===
    course.lessons.length - 1;

  // ----------------------------------------------------
  // CONTENT
  // ----------------------------------------------------

  content.innerHTML = `

    <div class="lesson-content-header">

      <div>

        <span class="lesson-number">
          LESSON ${index + 1}
          / ${course.lessons.length}
        </span>

        <h2>
          ${escapeHTML(
            lesson.title
          )}
        </h2>

        <p>
          ${escapeHTML(
            course.title
          )}
        </p>

      </div>

      <span
        class="course-badge ${course.category}"
      >
        ${
          isPremiumCourse(course)
            ? "👑 PREMIUM"
            : escapeHTML(
                course.category
                  .toUpperCase()
              )
        }
      </span>

    </div>

    <div class="lesson-body">

      <div
        class="lesson-visual ${course.color}"
      >
        ${course.icon}
      </div>

      <h3>
        ${escapeHTML(
          lesson.title
        )}
      </h3>

      <div class="lesson-text">
        ${lesson.content}
      </div>

    </div>

    <div class="lesson-footer">

      <button
        type="button"
        class="secondary-btn"
        data-lesson-action="previous"
        ${isFirst ? "disabled" : ""}
      >
        ← Previous
      </button>

      <button
        type="button"
        class="primary-btn"
        data-lesson-action="complete"
      >
        ${
          completed
            ? "✓ Completed"
            : "Mark as Complete"
        }
      </button>

      <button
        type="button"
        class="secondary-btn"
        data-lesson-action="next"
        ${isLast ? "disabled" : ""}
      >
        Next →
      </button>

    </div>

  `;

}

// ======================================================
// OPEN COURSE
// ======================================================

function openCourse(courseId) {

  const course =
    getCourseById(
      courseId
    );

  if (!course) {

    showToast(
      "Course မတွေ့ပါ။"
    );

    return;

  }

  if (
    isPremiumCourse(course) &&
    !hasPremiumAccess()
  ) {

    openPremiumAccess();

    return;

  }

  state.currentCourseId =
    course.id;

  let index = 0;

  while (
    index <
      course.lessons.length &&
    state.completedLessons.includes(
      `${course.id}-${index}`
    )
  ) {

    index++;

  }

  if (
    index >=
    course.lessons.length
  ) {

    index =
      course.lessons.length - 1;

  }

  state.currentLessonIndex =
    Math.max(0, index);

  saveState();

  navigate("lessons");

}

// ======================================================
// OPEN SPECIFIC LESSON
// ======================================================

function openLesson(
  courseId,
  lessonIndex
) {

  const course =
    getCourseById(
      courseId
    );

  if (!course) return;

  const index =
    Number(lessonIndex);

  if (
    !Number.isInteger(index) ||
    index < 0 ||
    index >= course.lessons.length
  ) {

    return;

  }

  if (
    isPremiumCourse(course) &&
    !hasPremiumAccess()
  ) {

    openPremiumAccess();

    return;

  }

  state.currentCourseId =
    course.id;

  state.currentLessonIndex =
    index;

  saveState();

  navigate("lessons");

}

// ======================================================
// PREVIOUS LESSON
// ======================================================

function previousLesson() {

  const course =
    getCurrentCourse();

  if (!course) return;

  if (
    state.currentLessonIndex <= 0
  ) {

    showToast(
      "ဒါက ပထမဆုံး Lesson ဖြစ်ပါတယ်။"
    );

    return;

  }

  state.currentLessonIndex--;

  saveState();

  renderLessons();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

// ======================================================
// NEXT LESSON
// ======================================================

function nextLesson() {

  const course =
    getCurrentCourse();

  if (!course) return;

  if (
    state.currentLessonIndex >=
    course.lessons.length - 1
  ) {

    showToast(
      "ဒီ Course ရဲ့ နောက်ဆုံး Lesson ရောက်နေပါပြီ။"
    );

    return;

  }

  state.currentLessonIndex++;

  saveState();

  renderLessons();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

// ======================================================
// STREAK
// ======================================================

function updateLearningStreak() {

  const today =
    getTodayKey();

  const yesterday =
    getYesterdayKey();

  if (
    state.lastLearningDate ===
    today
  ) {

    return;

  }

  if (
    state.lastLearningDate ===
    yesterday
  ) {

    state.streak =
      Math.max(
        1,
        Number(state.streak) + 1
      );

  } else {

    state.streak = 1;

  }

  state.lastLearningDate =
    today;

}

// ======================================================
// COMPLETE LESSON
// ======================================================

function completeLesson(
  courseId,
  index,
  lessonTitle,
  courseTitle
) {

  const course =
    getCourseById(
      courseId
    );

  if (!course) return;

  if (
    isPremiumCourse(course) &&
    !hasPremiumAccess()
  ) {

    openPremiumAccess();

    return;

  }

  const key =
    `${courseId}-${index}`;

  if (
    state.completedLessons
      .includes(key)
  ) {

    showToast(
      "ဒီသင်ခန်းစာကို ပြီးဆုံးပြီးသားပါ။"
    );

    return;

  }

  state.completedLessons.push(
    key
  );

  state.lessonDates[key] =
    Date.now();

  const today =
    getTodayKey();

  if (
    state.dailyGoal.date !==
    today
  ) {

    state.dailyGoal.date =
      today;

    state.dailyGoal.minutes =
      0;

  }

  state.dailyGoal.minutes =
    Math.min(
      Number(
        state.dailyGoal.target
      ) || 30,

      Number(
        state.dailyGoal.minutes
      ) + 15
    );

  updateLearningStreak();

  state.activity.unshift({

    title:
      lessonTitle,

    course:
      courseTitle,

    time:
      "Just now",

    timestamp:
      Date.now()

  });

  state.activity =
    state.activity.slice(
      0,
      10
    );

  // ----------------------------------------------------
  // MOVE TO NEXT LESSON
  // ----------------------------------------------------

  if (
    index <
    course.lessons.length - 1
  ) {

    state.currentCourseId =
      courseId;

    state.currentLessonIndex =
      index + 1;

  } else {

    const courseIndex =
      COURSES.findIndex(
        item =>
          item.id ===
          course.id
      );

    const nextCourse =
      COURSES[
        courseIndex + 1
      ];

    if (nextCourse) {

      state.currentCourseId =
        nextCourse.id;

      state.currentLessonIndex =
        0;

    }

  }

  saveState();

  showToast(
    "သင်ခန်းစာ ပြီးဆုံးပါပြီ ✓"
  );

  renderDashboard();
  renderCourses();
  renderLessons();
  renderProgress();
  renderReports();

}

// ======================================================
// PROGRESS
// ======================================================

function renderProgress() {

  const progress =
    getOverallProgress();

  const completed =
    getCompletedCount();

  const total =
    getTotalLessons();

  const overall =
    document.getElementById(
      "overallProgress"
    );

  const completedEl =
    document.getElementById(
      "progressCompleted"
    );

  const remainingEl =
    document.getElementById(
      "progressRemaining"
    );

  const streakEl =
    document.getElementById(
      "progressStreak"
    );

  if (overall) {

    overall.textContent =
      `${progress}%`;

  }

  if (completedEl) {

    completedEl.textContent =
      completed;

  }

  if (remainingEl) {

    remainingEl.textContent =
      Math.max(
        total - completed,
        0
      );

  }

  if (streakEl) {

    streakEl.textContent =
      state.streak;

  }

  const container =
    document.getElementById(
      "courseProgressList"
    );

  if (!container) return;

  container.innerHTML =
    COURSES
      .map(course => {

        const p =
          getCourseProgress(
            course.id
          );

        const completedCourse =
          getCourseCompleted(
            course.id
          );

        return `

          <div class="course-progress-row">

            <div class="course-progress-name">

              <div
                class="small-icon ${course.color}"
              >
                ${course.icon}
              </div>

              <div>

                <strong>
                  ${
                    isPremiumCourse(course)
                      ? "👑 "
                      : ""
                  }

                  ${escapeHTML(
                    course.title
                  )}
                </strong>

                <span>
                  ${completedCourse}/${course.lessons.length}
                  lessons
                </span>

              </div>

            </div>

            <div class="course-progress-bar">

              <div>

                <span
                  style="width:${p}%"
                ></span>

              </div>

            </div>

            <strong>
              ${p}%
            </strong>

          </div>

        `;

      })
      .join("");

}

// ======================================================
// SALES
// ======================================================

function renderSales() {

  const target =
    Number(
      state.sales.target
    ) || 0;

  const actual =
    Number(
      state.sales.actual
    ) || 0;

  const achievement =
    target > 0
      ? Math.round(
          actual /
          target *
          100
        )
      : 0;

  const gap =
    Math.max(
      target - actual,
      0
    );

  const targetEl =
    document.getElementById(
      "salesTargetDisplay"
    );

  const actualEl =
    document.getElementById(
      "salesActualDisplay"
    );

  const achievementEl =
    document.getElementById(
      "salesAchievementDisplay"
    );

  const gapEl =
    document.getElementById(
      "salesGapDisplay"
    );

  if (targetEl)
    targetEl.textContent =
      target;

  if (actualEl)
    actualEl.textContent =
      actual;

  if (achievementEl)
    achievementEl.textContent =
      `${achievement}%`;

  if (gapEl)
    gapEl.textContent =
      gap;

  const targetInput =
    document.getElementById(
      "salesTargetInput"
    );

  const actualInput =
    document.getElementById(
      "salesActualInput"
    );

  if (targetInput)
    targetInput.value =
      target;

  if (actualInput)
    actualInput.value =
      actual;

  renderSalesChart();
  renderPriorities();

}

// ======================================================
// SALES CHART
// ======================================================

function renderSalesChart() {

  const container =
    document.getElementById(
      "salesChart"
    );

  if (!container) return;

  const history =
    Array.isArray(
      state.sales.history
    )
      ? state.sales.history
      : [];

  if (!history.length) {

    container.innerHTML =
      "";

    return;

  }

  const max =
    Math.max(
      ...history,
      100
    );

  container.innerHTML =
    history
      .map(
        (value, index) => {

          const height =
            Math.round(
              value /
              max *
              100
            );

          return `

            <div
              class="chart-bar-group"
            >

              <span
                class="chart-value"
              >
                ${value}
              </span>

              <div
                class="chart-bar"
                style="height:${height}%"
              ></div>

              <small>
                M${index + 1}
              </small>

            </div>

          `;

        }
      )
      .join("");

}

// ======================================================
// PRIORITIES
// ======================================================

function renderPriorities() {

  const container =
    document.getElementById(
      "priorityList"
    );

  if (!container) return;

  if (
    !state.sales.priorities.length
  ) {

    container.innerHTML = `

      <div class="empty-state">

        <div>🎯</div>

        <strong>
          No priority
        </strong>

        <span>
          Add your next execution priority.
        </span>

      </div>

    `;

    return;

  }

  container.innerHTML =
    state.sales.priorities
      .map(
        (item, index) => `

          <div
            class="priority-item"
          >

            <div
              class="priority-number"
            >
              ${index + 1}
            </div>

            <span>
              ${escapeHTML(item)}
            </span>

            <button
              type="button"
              class="priority-delete"
              data-index="${index}"
            >
              ×
            </button>

          </div>

        `
      )
      .join("");

}

// ======================================================
// CALCULATOR
// ======================================================

function calculatePrice() {

  const productInput =
    document.getElementById(
      "productName"
    );

  const costInput =
    document.getElementById(
      "productCost"
    );

  const marginInput =
    document.getElementById(
      "productMargin"
    );

  if (
    !productInput ||
    !costInput ||
    !marginInput
  ) {

    return;

  }

  const product =
    productInput.value.trim() ||
    "Product";

  const cost =
    Math.max(
      0,
      Number(
        costInput.value
      ) || 0
    );

  const margin =
    Math.max(
      0,
      Math.min(
        99.99,
        Number(
          marginInput.value
        ) || 0
      )
    );

  const price =
    margin >= 100
      ? 0
      : cost /
        (1 - margin / 100);

  const profit =
    price - cost;

  state.calculator = {

    product,

    cost,

    margin

  };

  saveState();

  const resultProduct =
    document.getElementById(
      "resultProduct"
    );

  const resultPrice =
    document.getElementById(
      "resultPrice"
    );

  const resultCost =
    document.getElementById(
      "resultCost"
    );

  const resultProfit =
    document.getElementById(
      "resultProfit"
    );

  const resultMargin =
    document.getElementById(
      "resultMargin"
    );

  if (resultProduct)
    resultProduct.textContent =
      product;

  if (resultPrice)
    resultPrice.textContent =
      formatMoney(price);

  if (resultCost)
    resultCost.textContent =
      formatMoney(cost);

  if (resultProfit)
    resultProfit.textContent =
      formatMoney(profit);

  if (resultMargin)
    resultMargin.textContent =
      `${margin}%`;

}

// ======================================================
// MONEY
// ======================================================

function formatMoney(number) {

  return `${Math.round(
    Number(number) || 0
  ).toLocaleString()} Ks`;

}

// ======================================================
// CALCULATOR RENDER
// ======================================================

function renderCalculator() {

  const data =
    state.calculator;

  const product =
    document.getElementById(
      "productName"
    );

  const cost =
    document.getElementById(
      "productCost"
    );

  const margin =
    document.getElementById(
      "productMargin"
    );

  if (
    !product ||
    !cost ||
    !margin
  ) {

    return;

  }

  product.value =
    data.product;

  cost.value =
    data.cost;

  margin.value =
    data.margin;

  calculatePrice();

}

// ======================================================
// REPORTS
// ======================================================

function renderReports() {

  const reportCourses =
    document.getElementById(
      "reportCourses"
    );

  const reportLessons =
    document.getElementById(
      "reportLessons"
    );

  const reportCompleted =
    document.getElementById(
      "reportCompleted"
    );

  const reportStreak =
    document.getElementById(
      "reportStreak"
    );

  if (reportCourses)
    reportCourses.textContent =
      COURSES.length;

  if (reportLessons)
    reportLessons.textContent =
      getTotalLessons();

  if (reportCompleted)
    reportCompleted.textContent =
      getCompletedCount();

  if (reportStreak)
    reportStreak.textContent =
      state.streak;

  const reportSalesTarget =
    document.getElementById(
      "reportSalesTarget"
    );

  const reportSalesActual =
    document.getElementById(
      "reportSalesActual"
    );

  const reportSalesAchievement =
    document.getElementById(
      "reportSalesAchievement"
    );

  if (reportSalesTarget)
    reportSalesTarget.textContent =
      state.sales.target;

  if (reportSalesActual)
    reportSalesActual.textContent =
      state.sales.actual;

  const achievement =
    state.sales.target > 0
      ? Math.round(
          state.sales.actual /
          state.sales.target *
          100
        )
      : 0;

  if (reportSalesAchievement)
    reportSalesAchievement.textContent =
      `${achievement}%`;

}

// ======================================================
// SETTINGS
// ======================================================

function renderSettings() {

  const reminder =
    document.getElementById(
      "reminderToggle"
    );

  const tracking =
    document.getElementById(
      "trackingToggle"
    );

  if (reminder)
    reminder.checked =
      !!state.settings.reminder;

  if (tracking)
    tracking.checked =
      !!state.settings.tracking;

}

// ======================================================
// AI RESPONSE
// ======================================================

function getAIResponse(question) {

  const q =
    question
      .toLowerCase()
      .trim();

  if (
    q.includes("team") ||
    q.includes("အဖွဲ့") ||
    q.includes("coach") ||
    q.includes("coaching") ||
    q.includes("performance") ||
    q.includes("လုပ်ဆောင်ရည်")
  ) {

    return `

      <strong>
        အဖွဲ့လုပ်ဆောင်ရည် မြှင့်တင်ရန်
      </strong>

      <p>
        ပထမဆုံး Target နဲ့ Actual ကို
        နှိုင်းယှဉ်ပြီး Performance Gap ကို ရှာပါ။
      </p>

      <p>
        Gap ဖြစ်ရတဲ့ Root Cause ကို
        People, Skill, Customer, Territory
        နဲ့ Execution အပိုင်းခွဲပြီး လေ့လာပါ။
      </p>

      <p>
        Action Plan ချမှတ်ပြီး
        အပတ်စဉ် Follow-up လုပ်ပါ။
        Micromanagement မလုပ်ဘဲ
        Coaching နဲ့ Empowerment ကို အသုံးပြုပါ။
      </p>

    `;

  }

  if (
    q.includes("customer") ||
    q.includes("ဖောက်သည်")
  ) {

    return `

      <strong>
        Customer Growth တိုးတက်စေရန်
      </strong>

      <p>
        Customer တွေကို Value နဲ့ Potential
        အလိုက် ခွဲခြားပါ။
      </p>

      <p>
        Customer Need, Complaint,
        Purchase Pattern နဲ့ Business Problem
        ကို နားလည်ပါ။
      </p>

      <p>
        Visit Plan, Follow-up Plan နဲ့
        Customer Development Plan တည်ဆောက်ပါ။
      </p>

    `;

  }

  if (
    q.includes("sales") ||
    q.includes("အရောင်း") ||
    q.includes("target") ||
    q.includes("ရောင်းအား")
  ) {

    return `

      <strong>
        Sales Target တိုးတက်စေရန်
      </strong>

      <p>
        လစဉ် Target ကို အပတ်စဉ်နဲ့
        နေ့စဉ် Target အဖြစ် ခွဲပါ။
      </p>

      <p>
        Sales Gap ကို Salesperson,
        Territory, Product နဲ့ Customer
        အလိုက် ခွဲခြမ်းစိတ်ဖြာပါ။
      </p>

      <p>
        People, Market နဲ့ Execution
        သုံးခုအပေါ် Action Plan ချပြီး
        အပတ်စဉ် Review ပြုလုပ်ပါ။
      </p>

    `;

  }

  if (
    q.includes("finance") ||
    q.includes("profit") ||
    q.includes("အမြတ်") ||
    q.includes("ငွေကြေး")
  ) {

    return `

      <strong>
        Finance Management
      </strong>

      <p>
        Revenue, Cost, Profit, Margin
        နဲ့ Cash Flow ကို ခွဲပြီး စောင့်ကြည့်ပါ။
      </p>

      <p>
        Budget vs Actual ကို ပုံမှန်
        နှိုင်းယှဉ်ပြီး Cost Leakage ကို ရှာပါ။
      </p>

    `;

  }

  if (
    q.includes("hr") ||
    q.includes("employee") ||
    q.includes("ဝန်ထမ်း")
  ) {

    return `

      <strong>
        HR Management
      </strong>

      <p>
        လူမှန်နေရာမှန်၊ Clear KPI,
        Coaching, Recognition နဲ့
        Career Development ကို အဓိကထားပါ။
      </p>

    `;

  }

  if (
    q.includes("strategy") ||
    q.includes("မဟာဗျူဟာ")
  ) {

    return `

      <strong>
        Strategic Management
      </strong>

      <p>
        Market, Customer, Competitor နဲ့
        Company Capability ကို အရင်သုံးသပ်ပါ။
      </p>

      <p>
        Strategic Priority ၃ ခုခန့် သတ်မှတ်ပြီး
        Measurable Action Plan ပြုလုပ်ပါ။
      </p>

    `;

  }

  if (
    q.includes("pricing") ||
    q.includes("price") ||
    q.includes("စျေးနှုန်း")
  ) {

    return `

      <strong>
        Pricing Strategy
      </strong>

      <p>
        Cost တစ်ခုတည်းကို မကြည့်ဘဲ
        Customer Value, Competitor Price နဲ့
        Desired Margin ကို တွဲစဉ်းစားပါ။
      </p>

      <p>
        Margin မလုံလောက်ရင်
        Sales တက်နေသော်လည်း Profit ကျနိုင်ပါတယ်။
      </p>

    `;

  }

  return `

    <strong>
      Business Manager အနေနဲ့
    </strong>

    <p>
      ပြဿနာတစ်ခုကို ဖြေရှင်းတဲ့အခါ
      <strong>လူ၊ နံပါတ်နဲ့ Execution</strong>
      သုံးခုကို အရင်ကြည့်ပါ။
    </p>

    <p>
      Result ကိုတိုင်းတာပါ။
      အကြီးမားဆုံး Gap ကိုရှာပါ။
      Root Cause သတ်မှတ်ပြီး
      Action Plan ချမှတ်ပါ။
    </p>

  `;

}

// ======================================================
// AI MESSAGE
// ======================================================

function sendAIMessage(question) {

  if (!question.trim()) return;

  const container =
    document.getElementById(
      "chatMessages"
    );

  if (!container) return;

  container.insertAdjacentHTML(
    "beforeend",
    `

      <div class="chat-message user">

        <div class="message-avatar">
          AZ
        </div>

        <div class="message-content">

          <strong>
            You
          </strong>

          <p>
            ${escapeHTML(question)}
          </p>

        </div>

      </div>

    `
  );

  const answer =
    getAIResponse(
      question
    );

  setTimeout(() => {

    container.insertAdjacentHTML(
      "beforeend",
      `

        <div
          class="chat-message assistant"
        >

          <div class="message-avatar">
            AI
          </div>

          <div class="message-content">

            <strong>
              Business Coach
            </strong>

            <div>
              ${answer}
            </div>

          </div>

        </div>

      `
    );

    container.scrollTop =
      container.scrollHeight;

  }, 350);

  container.scrollTop =
    container.scrollHeight;

}

// ======================================================
// AI TOOLS
// ======================================================

function openAITool(tool) {

  const messages = {

    sales:
      "လစဉ်အရောင်း Target အတွက် လက်တွေ့လုပ်ဆောင်နိုင်တဲ့ Sales Action Plan တစ်ခုရေးပေးပါ။",

    customer:
      "Customer Growth နဲ့ Customer Retention တိုးတက်အောင် ဘယ်လို Strategy ချမှတ်ရမလဲ။",

    team:
      "Performance မကောင်းတဲ့ Salesperson တစ်ယောက်အတွက် Coaching Plan တစ်ခုရေးပေးပါ။",

    business:
      "လုပ်ငန်းတိုးတက်ဖို့ လက်တွေ့အသုံးချနိုင်တဲ့ Business Growth Strategy တစ်ခုရေးပေးပါ။"

  };

  navigate("ai-coach");

  const input =
    document.getElementById(
      "chatInput"
    );

  if (!input) return;

  input.value =
    messages[tool] || "";

  sendAIMessage(
    input.value
  );

  input.value = "";

}

// ======================================================
// SEARCH
// ======================================================

function performSearch(query) {

  const text =
    query
      .trim()
      .toLowerCase();

  if (!text) return;

  const course =
    COURSES.find(
      course =>
        course.title
          .toLowerCase()
          .includes(text) ||

        course.description
          .toLowerCase()
          .includes(text) ||

        course.category
          .toLowerCase()
          .includes(text)
    );

  if (course) {

    openCourse(
      course.id
    );

    return;

  }

  for (
    const course of COURSES
  ) {

    const index =
      course.lessons.findIndex(
        lesson => {

          const plainContent =
            lesson.content
              .replace(
                /<[^>]*>/g,
                ""
              )
              .toLowerCase();

          return (
            lesson.title
              .toLowerCase()
              .includes(text) ||

            plainContent.includes(text)
          );

        }
      );

    if (index !== -1) {

      if (
        isPremiumCourse(course) &&
        !hasPremiumAccess()
      ) {

        openPremiumAccess();

        return;

      }

      openLesson(
        course.id,
        index
      );

      return;

    }

  }

  showToast(
    "သင်တန်း သို့မဟုတ် သင်ခန်းစာ မတွေ့ပါ။"
  );

}

// ======================================================
// SIDEBAR
// ======================================================

function openSidebar() {

  document
    .getElementById("sidebar")
    ?.classList.add(
      "open"
    );

  document
    .getElementById(
      "sidebarOverlay"
    )
    ?.classList.add(
      "show"
    );

}

function closeSidebar() {

  document
    .getElementById("sidebar")
    ?.classList.remove(
      "open"
    );

  document
    .getElementById(
      "sidebarOverlay"
    )
    ?.classList.remove(
      "show"
    );

}

// ======================================================
// TOAST
// ======================================================

function showToast(message) {

  const toast =
    document.getElementById(
      "toast"
    );

  const toastMessage =
    document.getElementById(
      "toastMessage"
    );

  if (
    !toast ||
    !toastMessage
  ) return;

  toastMessage.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    showToast.timer
  );

  showToast.timer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2500
    );

}

// ======================================================
// MODAL
// ======================================================

function closeModal() {

  document
    .getElementById(
      "modalOverlay"
    )
    ?.classList.remove(
      "show"
    );

}

function showModal(
  title,
  text,
  buttonText = "Close",
  callback = closeModal
) {

  const overlay =
    document.getElementById(
      "modalOverlay"
    );

  const modalTitle =
    document.getElementById(
      "modalTitle"
    );

  const modalText =
    document.getElementById(
      "modalText"
    );

  const modalAction =
    document.getElementById(
      "modalAction"
    );

  if (!overlay) return;

  if (modalTitle) {

    modalTitle.textContent =
      title;

  }

  if (modalText) {

    modalText.innerHTML =
      text;

  }

  if (modalAction) {

    modalAction.textContent =
      buttonText;

    modalAction.onclick =
      callback;

  }

  overlay.classList.add(
    "show"
  );

}

// ======================================================
// LESSON ACTION
// ======================================================

function handleLessonAction(
  action
) {

  if (
    action === "previous"
  ) {

    previousLesson();

    return;

  }

  if (
    action === "next"
  ) {

    nextLesson();

    return;

  }

  if (
    action === "complete"
  ) {

    const current =
      getCurrentLesson();

    if (
      !current.course ||
      !current.lesson
    ) {

      return;

    }

    completeLesson(

      current.course.id,

      current.index,

      current.lesson.title,

      current.course.title

    );

  }

}

// ======================================================
// INITIALIZE EVENTS
// ======================================================

function initializeApp() {

  if (academyInitialized) {
    return;
  }

  // ====================================================
  // GLOBAL CLICK
  // ====================================================

  document.addEventListener(
    "click",
    event => {

      const target =
        event.target;

      if (
        !(target instanceof Element)
      ) {

        return;

      }

      // ------------------------------------------------
      // NAVIGATION
      // ------------------------------------------------

      const nav =
        target.closest(
          ".nav-item"
        );

      if (nav) {

        event.preventDefault();

        navigate(
          nav.dataset.page
        );

        return;

      }

      // ------------------------------------------------
      // DATA GO
      // ------------------------------------------------

      const go =
        target.closest(
          "[data-go]"
        );

      if (go) {

        event.preventDefault();

        navigate(
          go.dataset.go
        );

        return;

      }

      // ------------------------------------------------
      // CONTINUE LEARNING
      // ------------------------------------------------

      const continueButton =
        target.closest(
          "#continueLearningBtn"
        );

      if (continueButton) {

        event.preventDefault();

        const data =
          getContinueLearning();

        if (!data) {

          showToast(
            "သင်တန်း မတွေ့ပါ။"
          );

          return;

        }

        if (data.locked) {

          openPremiumAccess();

          return;

        }

        state.currentCourseId =
          data.course.id;

        state.currentLessonIndex =
          data.index;

        saveState();

        navigate("lessons");

        return;

      }

      // ------------------------------------------------
      // OPEN COURSE
      // ------------------------------------------------

      const openCourseButton =
        target.closest(
          ".open-course"
        );

      if (openCourseButton) {

        event.preventDefault();

        openCourse(
          openCourseButton.dataset.course
        );

        return;

      }

      // ------------------------------------------------
      // COURSE IN LESSON PAGE
      // ------------------------------------------------

      const lessonCourse =
        target.closest(
          ".lesson-course-item"
        );

      if (lessonCourse) {

        event.preventDefault();

        openCourse(
          lessonCourse.dataset.course
        );

        return;

      }

      // ------------------------------------------------
      // SPECIFIC LESSON FROM 14 LESSON LIST
      // ------------------------------------------------

      const lessonItem =
        target.closest(
          ".lesson-list-item"
        );

      if (lessonItem) {

        event.preventDefault();

        openLesson(

          lessonItem.dataset.course,

          lessonItem.dataset.lessonIndex

        );

        return;

      }

      // ------------------------------------------------
      // LESSON ACTION
      // ------------------------------------------------

      const lessonAction =
        target.closest(
          "[data-lesson-action]"
        );

      if (lessonAction) {

        event.preventDefault();

        if (
          lessonAction.disabled
        ) {

          return;

        }

        handleLessonAction(
          lessonAction.dataset.lessonAction
        );

        return;

      }

      // ------------------------------------------------
      // RECOMMENDATION
      // ------------------------------------------------

      const recommendation =
        target.closest(
          ".recommendation-item"
        );

      if (recommendation) {

        event.preventDefault();

        const course =
          getCourseById(
            recommendation.dataset.course
          );

        if (course) {

          openCourse(
            course.id
          );

        }

        return;

      }

      // ------------------------------------------------
      // PRIORITY DELETE
      // ------------------------------------------------

      const deletePriority =
        target.closest(
          ".priority-delete"
        );

      if (deletePriority) {

        event.preventDefault();

        const index =
          Number(
            deletePriority.dataset.index
          );

        if (
          Number.isInteger(index) &&
          index >= 0 &&
          index <
            state.sales.priorities.length
        ) {

          state.sales.priorities.splice(
            index,
            1
          );

          saveState();

          renderPriorities();

          showToast(
            "Priority ဖျက်ပြီးပါပြီ။"
          );

        }

        return;

      }

      // ------------------------------------------------
      // AI QUESTIONS
      // ------------------------------------------------

      const aiQuestion =
        target.closest(
          ".ai-question"
        );

      if (aiQuestion) {

        const input =
          document.getElementById(
            "chatInput"
          );

        if (!input) return;

        input.value =
          aiQuestion.textContent.trim();

        const send =
          document.getElementById(
            "sendChatBtn"
          );

        if (send) {

          send.click();

        }

        return;

      }

      // ------------------------------------------------
      // AI TOOLS
      // ------------------------------------------------

      const aiTool =
        target.closest(
          ".ai-tool-card"
        );

      if (aiTool) {

        event.preventDefault();

        openAITool(
          aiTool.dataset.tool
        );

        return;

      }

    }
  );

  // ====================================================
  // COURSE FILTER
  // ====================================================

  document
    .querySelectorAll(
      ".filter-tab"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              ".filter-tab"
            )
            .forEach(item => {

              item.classList.remove(
                "active"
              );

            });

          button.classList.add(
            "active"
          );

          renderCourses(
            button.dataset.filter ||
            "all"
          );

        }
      );

    });

  // ====================================================
  // SALES
  // ====================================================

  document
    .getElementById(
      "updateSalesBtn"
    )
    ?.addEventListener(
      "click",
      () => {

        const targetInput =
          document.getElementById(
            "salesTargetInput"
          );

        const actualInput =
          document.getElementById(
            "salesActualInput"
          );

        state.sales.target =
          Number(
            targetInput?.value
          ) || 0;

        state.sales.actual =
          Number(
            actualInput?.value
          ) || 0;

        state.sales.history.push(
          state.sales.actual
        );

        state.sales.history =
          state.sales.history.slice(
            -7
          );

        saveState();

        renderSales();

        renderReports();

        showToast(
          "Sales performance updated."
        );

      }
    );

  // ====================================================
  // PRIORITY
  // ====================================================

  document
    .getElementById(
      "addPriorityBtn"
    )
    ?.addEventListener(
      "click",
      () => {

        const input =
          document.getElementById(
            "priorityInput"
          );

        const value =
          input?.value.trim();

        if (!value) {

          showToast(
            "Priority ထည့်ပေးပါ။"
          );

          return;

        }

        state.sales.priorities.push(
          value
        );

        input.value =
          "";

        saveState();

        renderPriorities();

        showToast(
          "Priority ထည့်ပြီးပါပြီ။"
        );

      }
    );

  // ====================================================
  // CALCULATOR
  // ====================================================

  document
    .getElementById(
      "calculateBtn"
    )
    ?.addEventListener(
      "click",
      calculatePrice
    );

  // ====================================================
  // AI CHAT
  // ====================================================

  const sendChatBtn =
    document.getElementById(
      "sendChatBtn"
    );

  const chatInput =
    document.getElementById(
      "chatInput"
    );

  if (
    sendChatBtn &&
    chatInput
  ) {

    sendChatBtn.addEventListener(
      "click",
      () => {

        const value =
          chatInput.value;

        if (!value.trim()) {
          return;
        }

        sendAIMessage(
          value
        );

        chatInput.value =
          "";

      }
    );

    chatInput.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter"
        ) {

          event.preventDefault();

          sendChatBtn.click();

        }

      }
    );

  }

  // ====================================================
  // SEARCH
  // ====================================================

  document
    .getElementById(
      "globalSearch"
    )
    ?.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter"
        ) {

          performSearch(
            event.target.value
          );

        }

      }
    );

  // ====================================================
  // MOBILE
  // ====================================================

  document
    .getElementById(
      "mobileMenu"
    )
    ?.addEventListener(
      "click",
      openSidebar
    );

  document
    .getElementById(
      "sidebarOverlay"
    )
    ?.addEventListener(
      "click",
      closeSidebar
    );

  // ====================================================
  // SETTINGS
  // ====================================================

  document
    .getElementById(
      "reminderToggle"
    )
    ?.addEventListener(
      "change",
      event => {

        state.settings.reminder =
          event.target.checked;

        saveState();

      }
    );

  document
    .getElementById(
      "trackingToggle"
    )
    ?.addEventListener(
      "change",
      event => {

        state.settings.tracking =
          event.target.checked;

        saveState();

      }
    );

  // ====================================================
  // RESET
  // ====================================================

  document
    .getElementById(
      "resetDataBtn"
    )
    ?.addEventListener(
      "click",
      () => {

        const confirmed =
          confirm(
            "Aung Business Academy ရဲ့ Learning Progress အားလုံးကို Reset လုပ်မှာ သေချာပါသလား?"
          );

        if (!confirmed) {
          return;
        }

        localStorage.removeItem(
          STORAGE_KEY
        );

        state =
          createDefaultState();

        saveState();

        renderAll();

        navigate(
          "dashboard"
        );

        showToast(
          "Academy Data အားလုံး Reset ပြီးပါပြီ။"
        );

      }
    );

  // ====================================================
  // NOTIFICATION
  // ====================================================

  document
    .getElementById(
      "notificationBtn"
    )
    ?.addEventListener(
      "click",
      () => {

        showToast(
          "လက်ရှိ Notification မရှိသေးပါ။"
        );

      }
    );

  // ====================================================
  // MODAL
  // ====================================================

  document
    .getElementById(
      "modalClose"
    )
    ?.addEventListener(
      "click",
      closeModal
    );

  document
    .getElementById(
      "modalOverlay"
    )
    ?.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          event.currentTarget
        ) {

          closeModal();

        }

      }
    );

  academyInitialized =
    true;

}

// ======================================================
// RENDER ALL
// ======================================================

function renderAll() {

  if (!state) return;

  renderDashboard();

  renderCourses();

  renderLessons();

  renderProgress();

  renderSales();

  renderCalculator();

  renderReports();

  renderSettings();

}

// ======================================================
// INIT
// ======================================================

function initAcademy() {

  if (
    academyInitialized &&
    state
  ) {

    return;

  }

  try {

    state =
      loadState();

    // --------------------------------------------------
    // VALIDATE COURSE
    // --------------------------------------------------

    if (
      !COURSES.some(
        course =>
          course.id ===
          state.currentCourseId
      )
    ) {

      state.currentCourseId =
        COURSES[0]?.id || null;

      state.currentLessonIndex =
        0;

    }

    // --------------------------------------------------
    // VALIDATE LESSON
    // --------------------------------------------------

    const currentCourse =
      getCurrentCourse();

    if (
      currentCourse &&
      (
        !Number.isInteger(
          Number(
            state.currentLessonIndex
          )
        ) ||

        state.currentLessonIndex < 0 ||

        state.currentLessonIndex >=
          currentCourse.lessons.length
      )
    ) {

      state.currentLessonIndex =
        0;

    }

    // --------------------------------------------------
    // VALIDATE PAGE
    // --------------------------------------------------

    if (
      !VALID_PAGES.includes(
        state.currentPage
      )
    ) {

      state.currentPage =
        "dashboard";

    }

    saveState();

    // --------------------------------------------------
    // EVENTS FIRST
    // --------------------------------------------------

    initializeApp();

    // --------------------------------------------------
    // RENDER
    // --------------------------------------------------

    renderAll();

    // --------------------------------------------------
    // RESTORE PAGE
    // --------------------------------------------------

    const savedPage =
      VALID_PAGES.includes(
        state.currentPage
      )
        ? state.currentPage
        : "dashboard";

    const pageElement =
      document.getElementById(
        `page-${savedPage}`
      );

    if (pageElement) {

      navigate(
        savedPage
      );

    } else {

      navigate(
        "dashboard"
      );

    }

    console.log(
      "Aung Business Academy V8 initialized."
    );

    console.log(
      `Courses: ${COURSES.length}`
    );

    console.log(
      `Lessons: ${getTotalLessons()}`
    );

    console.log(
      "Premium Course Lock: ACTIVE"
    );

  } catch (error) {

    console.error(
      "Aung Business Academy initialization failed:",
      error
    );

    state =
      createDefaultState();

    const dashboard =
      document.getElementById(
        "page-dashboard"
      );

    document
      .querySelectorAll(
        ".page"
      )
      .forEach(page => {

        page.classList.remove(
          "active"
        );

      });

    if (dashboard) {

      dashboard.classList.add(
        "active"
      );

    }

    try {

      saveState();

    } catch (_) {}

  }

}

// ======================================================
// DOM READY
// ======================================================

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initAcademy,
    {
      once: true
    }
  );

} else {

  initAcademy();

}

// ======================================================
// GLOBAL API
// ======================================================

window.AungAcademy = {

  get state() {
    return state;
  },

  courses:
    COURSES,

  navigate,

  renderAll,

  renderDashboard,

  renderCourses,

  renderLessons,

  renderProgress,

  renderSales,

  renderReports,

  renderCalculator,

  completeLesson,

  previousLesson,

  nextLesson,

  openCourse,

  openLesson,

  getCurrentCourse,

  getCurrentLesson,

  getContinueLearning,

  getOverallProgress,

  getCourseProgress,

  getTotalLessons,

  getCompletedCount,

  isPremiumCourse,

  hasPremiumAccess,

  openPremiumAccess

};

// ======================================================
// GLOBAL PREMIUM HELPERS
// ======================================================

window.isPremiumCourse =
  isPremiumCourse;

window.hasPremiumAccess =
  hasPremiumAccess;

window.openPremiumAccess =
  openPremiumAccess;

window.closeModal =
  closeModal;
