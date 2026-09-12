// ======================================================
// AUNG BUSINESS ACADEMY V8
// APP.JS — FULL VERSION
// ======================================================

"use strict";

// ======================================================
// STORAGE
// ======================================================

const STORAGE_KEY =
  "aungBusinessAcademyV8";

// ======================================================
// COURSES
// ======================================================

const COURSES = [

  // ====================================================
  // COURSE 1
  // ====================================================

  {
    id: "sales-management",
    title: "Sales Management Mastery",
    category: "sales",
    color: "blue",
    icon: "↗",

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
            Growth Opportunity တွေကို ထည့်သွင်းစဉ်းစားရပါမယ်။
          </p>
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
        `
      }

    ]
  },

  // ====================================================
  // COURSE 2
  // ====================================================

  {
    id: "leadership",
    title: "Leadership Excellence",
    category: "leadership",
    color: "purple",
    icon: "★",

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
  // COURSE 3
  // ====================================================

  {
    id: "business-strategy",
    title: "Business Strategy",
    category: "business",
    color: "green",
    icon: "◆",

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
  // COURSE 4
  // ====================================================

  {
    id: "business-finance",
    title: "Business Finance",
    category: "finance",
    color: "orange",
    icon: "▣",

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
            Gross Profit =
            Revenue − Cost
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
        `
      }

    ]
  }

];

// ======================================================
// STATE
// ======================================================

let state = null;

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

      target: 0,

      actual: 0,

      history: [],

      priorities: []

    },

    calculator: {

      product: "",

      cost: 0,

      margin: 20

    },

    settings: {

      reminder: true,

      tracking: true

    }

  };

}

// ======================================================
// DATE
// ======================================================

function getTodayKey() {

  const date =
    new Date();

  return [
    date.getFullYear(),
    String(
      date.getMonth() + 1
    ).padStart(2, "0"),
    String(
      date.getDate()
    ).padStart(2, "0")
  ].join("-");

}

// ======================================================
// YESTERDAY
// ======================================================

function getYesterdayKey() {

  const date =
    new Date();

  date.setDate(
    date.getDate() - 1
  );

  return [
    date.getFullYear(),
    String(
      date.getMonth() + 1
    ).padStart(2, "0"),
    String(
      date.getDate()
    ).padStart(2, "0")
  ].join("-");

}

// ======================================================
// ESCAPE HTML
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
// SAVE STATE
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

// ======================================================
// LOAD STATE
// ======================================================

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

    return {

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
      },

      completedLessons:
        Array.isArray(
          parsed.completedLessons
        )
          ? parsed.completedLessons
          : [],

      lessonDates:
        parsed.lessonDates || {},

      activity:
        Array.isArray(
          parsed.activity
        )
          ? parsed.activity
          : []

    };

  } catch (error) {

    console.error(
      "Load state error:",
      error
    );

    return createDefaultState();

  }

}

// ======================================================
// COURSE HELPERS
// ======================================================

function getCourseById(courseId) {

  return COURSES.find(
    course =>
      course.id === courseId
  ) || COURSES[0];

}

function getCurrentCourse() {

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
    Number(
      state.currentLessonIndex
    );

  if (
    !Number.isInteger(index) ||
    index < 0
  ) {

    index = 0;

  }

  if (
    index >= course.lessons.length
  ) {

    index =
      course.lessons.length - 1;

  }

  state.currentLessonIndex =
    index;

  return {

    course,

    index,

    lesson:
      course.lessons[index]

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
    state.completedLessons
  )
    ? state.completedLessons.length
    : 0;

}

function getCourseCompleted(courseId) {

  return COURSES
    .find(
      course =>
        course.id === courseId
    )
    ?.lessons
    .filter(
      (_, index) =>
        state.completedLessons.includes(
          `${courseId}-${index}`
        )
    )
    .length || 0;

}

function getCourseProgress(courseId) {

  const course =
    getCourseById(courseId);

  if (
    !course ||
    !course.lessons.length
  ) {

    return 0;

  }

  const completed =
    getCourseCompleted(courseId);

  return Math.round(
    completed /
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

  if (!course) {

    return null;

  }

  let index =
    Number(
      state.currentLessonIndex
    );

  if (
    !Number.isInteger(index) ||
    index < 0
  ) {

    index = 0;

  }

  if (
    index >= course.lessons.length
  ) {

    index =
      course.lessons.length - 1;

  }

  // Current lesson already completed?
  // Find next incomplete lesson.

  while (
    index <
      course.lessons.length &&
    state.completedLessons.includes(
      `${course.id}-${index}`
    )
  ) {

    index++;

  }

  // Course completed.
  if (
    index >= course.lessons.length
  ) {

    index =
      course.lessons.length - 1;

  }

  return {

    course,

    index,

    lesson:
      course.lessons[index]

  };

}

// ======================================================
// NAVIGATION
// ======================================================

function navigate(page) {

  if (!page) return;

  const target =
    String(page);

  document
    .querySelectorAll(
      ".page"
    )
    .forEach(section => {

      section.classList.remove(
        "active"
      );

    });

  const pageElement =
    document.getElementById(
      target
    );

  if (pageElement) {

    pageElement.classList.add(
      "active"
    );

  }

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

  state.currentPage =
    target;

  saveState();

  closeSidebar();

  if (target === "dashboard") {

    renderDashboard();

  }

  if (target === "courses") {

    renderCourses();

  }

  if (target === "lessons") {

    renderLessons();

  }

  if (target === "progress") {

    renderProgress();

  }

  if (target === "sales") {

    renderSales();

  }

  if (target === "calculator") {

    renderCalculator();

  }

  if (target === "reports") {

    renderReports();

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

  const total =
    getTotalLessons();

  const completed =
    getCompletedCount();

  const progress =
    getOverallProgress();

  const coursesCount =
    document.getElementById(
      "dashboardCourses"
    );

  const lessonCount =
    document.getElementById(
      "dashboardLessons"
    );

  const completedEl =
    document.getElementById(
      "dashboardCompleted"
    );

  const progressEl =
    document.getElementById(
      "dashboardProgress"
    );

  if (coursesCount) {

    coursesCount.textContent =
      COURSES.length;

  }

  if (lessonCount) {

    lessonCount.textContent =
      total;

  }

  if (completedEl) {

    completedEl.textContent =
      completed;

  }

  if (progressEl) {

    progressEl.textContent =
      `${progress}%`;

  }

  // Alternative IDs used by some layouts

  const courseStat =
    document.getElementById(
      "courseCount"
    );

  if (courseStat) {

    courseStat.textContent =
      COURSES.length;

  }

  const lessonStat =
    document.getElementById(
      "lessonCount"
    );

  if (lessonStat) {

    lessonStat.textContent =
      total;

  }

  const completeStat =
    document.getElementById(
      "completedCount"
    );

  if (completeStat) {

    completeStat.textContent =
      completed;

  }

  const overallStat =
    document.getElementById(
      "overallProgress"
    );

  if (overallStat) {

    overallStat.textContent =
      `${progress}%`;

  }

  renderContinueLearning();

  renderDailyGoal();

  renderActivity();

  renderRecommendations();

}

// ======================================================
// CONTINUE LEARNING UI
// ======================================================

function renderContinueLearning() {

  const data =
    getContinueLearning();

  if (!data) return;

  const {

    course,

    index,

    lesson

  } = data;

  // Common dashboard IDs

  const title =
    document.getElementById(
      "continueCourseTitle"
    );

  const description =
    document.getElementById(
      "continueCourseDescription"
    );

  const progress =
    document.getElementById(
      "continueCourseProgress"
    );

  const completed =
    getCourseCompleted(
      course.id
    );

  const percentage =
    getCourseProgress(
      course.id
    );

  if (title) {

    title.textContent =
      course.title;

  }

  if (description) {

    description.textContent =
      course.description;

  }

  if (progress) {

    progress.textContent =
      `${completed} of ${course.lessons.length} lessons`;

  }

  const progressPercent =
    document.getElementById(
      "continueProgressPercent"
    );

  if (progressPercent) {

    progressPercent.textContent =
      `${percentage}%`;

  }

  const progressFill =
    document.getElementById(
      "continueProgressFill"
    );

  if (progressFill) {

    progressFill.style.width =
      `${percentage}%`;

  }

  // Dashboard card button

  const button =
    document.getElementById(
      "continueLearningBtn"
    );

  if (button) {

    button.textContent =
      percentage > 0
        ? "Continue Learning →"
        : "Start Learning →";

    button.dataset.course =
      course.id;

    button.dataset.lesson =
      index;

  }

}

// ======================================================
// DAILY GOAL
// ======================================================

function renderDailyGoal() {

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
      "dailyGoalPercent"
    );

  const minutesEl =
    document.getElementById(
      "dailyGoalMinutes"
    );

  const fillEl =
    document.getElementById(
      "dailyGoalFill"
    );

  if (percentEl) {

    percentEl.textContent =
      `${percentage}%`;

  }

  if (minutesEl) {

    minutesEl.textContent =
      `${minutes} / ${target} min`;

  }

  if (fillEl) {

    fillEl.style.width =
      `${percentage}%`;

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

  if (
    !state.activity.length
  ) {

    container.innerHTML = `

      <div class="empty-state">

        <div>📚</div>

        <strong>
          No activity yet
        </strong>

        <span>
          Start your first lesson.
        </span>

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

  const container =
    document.getElementById(
      "recommendationList"
    );

  if (!container) return;

  const recommendations =
    COURSES
      .slice(0, 3);

  container.innerHTML =
    recommendations
      .map(course => `

        <div
          class="recommendation-item"
          data-course="${course.id}"
        >

          <div class="recommendation-icon">
            ${course.icon}
          </div>

          <div>

            <strong>
              ${escapeHTML(course.title)}
            </strong>

            <span>
              ${escapeHTML(course.description)}
            </span>

          </div>

          <b>
            →
          </b>

        </div>

      `)
      .join("");

}

// ======================================================
// COURSES
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
            course.category === filter
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

        return `

          <div class="course-card">

            <div class="course-card-top">

              <div class="course-icon ${course.color}">
                ${course.icon}
              </div>

              <span
                class="course-badge ${course.category}"
              >
                ${escapeHTML(
                  course.category.toUpperCase()
                )}
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
                  progress > 0
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
// LESSONS
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

  if (
    !courseList ||
    !content
  ) {

    console.error(
      "Lesson elements not found."
    );

    return;

  }

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
                ${escapeHTML(course.title)}
              </strong>

              <span>
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

        `;

      })
      .join("");

  const current =
    getCurrentLesson();

  if (
    !current.course ||
    !current.lesson
  ) {

    content.innerHTML = `
      <div class="empty-state">
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

  const lessonKey =
    `${course.id}-${index}`;

  const completed =
    state.completedLessons.includes(
      lessonKey
    );

  const isFirst =
    index === 0;

  const isLast =
    index ===
    course.lessons.length - 1;

  content.innerHTML = `

    <div class="lesson-content-header">

      <div>

        <span class="lesson-number">
          LESSON ${index + 1}
        </span>

        <h2>
          ${escapeHTML(lesson.title)}
        </h2>

        <p>
          ${escapeHTML(course.title)}
        </p>

      </div>

      <span
        class="course-badge ${course.category}"
      >
        ${escapeHTML(
          course.category.toUpperCase()
        )}
      </span>

    </div>

    <div class="lesson-body">

      <div
        class="lesson-visual ${course.color}"
      >
        ${course.icon}
      </div>

      <h3>
        ${escapeHTML(lesson.title)}
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
// SELECT COURSE
// ======================================================

function openCourse(courseId) {

  const course =
    getCourseById(courseId);

  if (!course) {

    showToast(
      "Course မတွေ့ပါ။"
    );

    return;

  }

  state.currentCourseId =
    course.id;

  // Find first incomplete lesson

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
    index >= course.lessons.length
  ) {

    index =
      course.lessons.length - 1;

  }

  state.currentLessonIndex =
    Math.max(
      0,
      index
    );

  saveState();

  navigate("lessons");

  renderLessons();

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
    state.lastLearningDate === today
  ) {

    return;

  }

  if (
    state.lastLearningDate === yesterday
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

  const key =
    `${courseId}-${index}`;

  const alreadyCompleted =
    state.completedLessons.includes(
      key
    );

  if (!alreadyCompleted) {

    state.completedLessons.push(
      key
    );

    // ----------------------------------------------
    // Learning date
    // ----------------------------------------------

    state.lessonDates[key] =
      Date.now();

    // ----------------------------------------------
    // Daily goal
    // ----------------------------------------------

    const today =
      getTodayKey();

    if (
      state.dailyGoal.date !== today
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

    // ----------------------------------------------
    // Streak
    // ----------------------------------------------

    updateLearningStreak();

    // ----------------------------------------------
    // Activity
    // ----------------------------------------------

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

    saveState();

    showToast(
      "သင်ခန်းစာ ပြီးဆုံးပါပြီ ✓"
    );

    // ----------------------------------------------
    // Move current lesson to next lesson
    // ----------------------------------------------

    const course =
      getCourseById(courseId);

    if (
      course &&
      index <
        course.lessons.length - 1
    ) {

      state.currentCourseId =
        courseId;

      state.currentLessonIndex =
        index + 1;

      saveState();

    }

  } else {

    showToast(
      "ဒီသင်ခန်းစာကို ပြီးဆုံးပြီးသားပါ။"
    );

  }

  renderLessons();

  renderDashboard();

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

  if (overall)
    overall.textContent =
      `${progress}%`;

  if (completedEl)
    completedEl.textContent =
      completed;

  if (remainingEl)
    remainingEl.textContent =
      total - completed;

  if (streakEl)
    streakEl.textContent =
      state.streak;

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
                  ${escapeHTML(course.title)}
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

            <div class="chart-bar-group">

              <span class="chart-value">
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

          <div class="priority-item">

            <div class="priority-number">
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
    Number(
      costInput.value
    ) || 0;

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
// RENDER CALCULATOR
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

  const total =
    getTotalLessons();

  const completed =
    getCompletedCount();

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

  if (reportCourses)
    reportCourses.textContent =
      COURSES.length;

  if (reportLessons)
    reportLessons.textContent =
      total;

  if (reportCompleted)
    reportCompleted.textContent =
      completed;

  if (reportStreak)
    reportStreak.textContent =
      state.streak;

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
// AI COACH
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
      <strong>
        လူ၊ နံပါတ်နဲ့ Execution
      </strong>
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
// SEND AI MESSAGE
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
    getAIResponse(question);

  setTimeout(() => {

    container.insertAdjacentHTML(
      "beforeend",
      `

        <div class="chat-message assistant">

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

  navigate(
    "ai-coach"
  );

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
    const course
    of COURSES
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

            plainContent
              .includes(text)

          );

        }
      );

    if (index !== -1) {

      state.currentCourseId =
        course.id;

      state.currentLessonIndex =
        index;

      saveState();

      navigate(
        "lessons"
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
    .getElementById(
      "sidebar"
    )
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
    .getElementById(
      "sidebar"
    )
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
  ) {

    return;

  }

  toastMessage.textContent =
    message;

  toast.classList.add(
    "show"
  );

  clearTimeout(
    showToast.timer
  );

  showToast.timer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2500);

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

let academyInitialized =
  false;

function initializeApp() {

  if (
    academyInitialized
  ) {

    return;

  }

  academyInitialized =
    true;

  // ====================================================
  // GLOBAL CLICK DELEGATION
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

      // ----------------------------------------------
      // NAVIGATION
      // ----------------------------------------------

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

      // ----------------------------------------------
      // DATA GO
      // ----------------------------------------------

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

      // ----------------------------------------------
      // CONTINUE LEARNING
      // ----------------------------------------------

      const continueLearning =
        target.closest(
          "#continueLearningBtn"
        );

      if (
        continueLearning
      ) {

        event.preventDefault();

        const data =
          getContinueLearning();

        if (!data) {

          showToast(
            "Course မတွေ့ပါ။"
          );

          return;

        }

        state.currentCourseId =
          data.course.id;

        state.currentLessonIndex =
          data.index;

        saveState();

        navigate(
          "lessons"
        );

        renderLessons();

        return;

      }

      // ----------------------------------------------
      // COURSE
      // ----------------------------------------------

      const openCourseButton =
        target.closest(
          ".open-course"
        );

      if (
        openCourseButton
      ) {

        event.preventDefault();

        openCourse(
          openCourseButton.dataset.course
        );

        return;

      }

      // ----------------------------------------------
      // LESSON COURSE
      // ----------------------------------------------

      const lessonCourse =
        target.closest(
          ".lesson-course-item"
        );

      if (
        lessonCourse
      ) {

        event.preventDefault();

        openCourse(
          lessonCourse.dataset.course
        );

        return;

      }

      // ----------------------------------------------
      // LESSON ACTION
      // ----------------------------------------------

      const lessonAction =
        target.closest(
          "[data-lesson-action]"
        );

      if (
        lessonAction
      ) {

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

      // ----------------------------------------------
      // RECOMMENDATION
      // ----------------------------------------------

      const recommendation =
        target.closest(
          ".recommendation-item"
        );

      if (
        recommendation
      ) {

        event.preventDefault();

        openCourse(
          recommendation.dataset.course
        );

        return;

      }

      // ----------------------------------------------
      // PRIORITY DELETE
      // ----------------------------------------------

      const deletePriority =
        target.closest(
          ".priority-delete"
        );

      if (
        deletePriority
      ) {

        event.preventDefault();

        const index =
          Number(
            deletePriority.dataset.index
          );

        if (

          Number.isInteger(
            index
          ) &&

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

      // ----------------------------------------------
      // AI QUESTIONS
      // ----------------------------------------------

      const aiQuestion =
        target.closest(
          ".ai-question"
        );

      if (
        aiQuestion
      ) {

        const input =
          document.getElementById(
            "chatInput"
          );

        const send =
          document.getElementById(
            "sendChatBtn"
          );

        if (
          !input ||
          !send
        ) {

          return;

        }

        input.value =
          aiQuestion.textContent.trim();

        send.click();

        return;

      }

      // ----------------------------------------------
      // AI TOOLS
      // ----------------------------------------------

      const aiTool =
        target.closest(
          ".ai-tool-card"
        );

      if (
        aiTool
      ) {

        openAITool(
          aiTool.dataset.tool
        );

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
            .forEach(item =>
              item.classList.remove(
                "active"
              )
            );

          button.classList.add(
            "active"
          );

          renderCourses(
            button.dataset.filter
          );

        }
      );

    });

  // ====================================================
  // CONTINUE LEARNING DIRECT EVENT
  // ====================================================

  const continueBtn =
    document.getElementById(
      "continueLearningBtn"
    );

  if (continueBtn) {

    continueBtn.onclick =
      function(event) {

        event.preventDefault();
        event.stopPropagation();

        const data =
          getContinueLearning();

        if (!data) {

          showToast(
            "Course မတွေ့ပါ။"
          );

          return;

        }

        state.currentCourseId =
          data.course.id;

        state.currentLessonIndex =
          data.index;

        saveState();

        navigate(
          "lessons"
        );

        renderLessons();

      };

  }

  // ====================================================
  // SALES UPDATE
  // ====================================================

  const updateSalesBtn =
    document.getElementById(
      "updateSalesBtn"
    );

  if (
    updateSalesBtn
  ) {

    updateSalesBtn.addEventListener(
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

  }

  // ====================================================
  // ADD PRIORITY
  // ====================================================

  const addPriorityBtn =
    document.getElementById(
      "addPriorityBtn"
    );

  if (
    addPriorityBtn
  ) {

    addPriorityBtn.addEventListener(
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

  }

  // ====================================================
  // CALCULATOR
  // ====================================================

  const calculateBtn =
    document.getElementById(
      "calculateBtn"
    );

  if (
    calculateBtn
  ) {

    calculateBtn.addEventListener(
      "click",
      calculatePrice
    );

  }

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

        if (
          !value.trim()
        ) {

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
          event.key ===
          "Enter"
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

  const search =
    document.getElementById(
      "globalSearch"
    );

  if (search) {

    search.addEventListener(
      "keydown",
      event => {

        if (
          event.key ===
          "Enter"
        ) {

          performSearch(
            event.target.value
          );

        }

      }
    );

  }

  // ====================================================
  // MOBILE SIDEBAR
  // ====================================================

  const mobileMenu =
    document.getElementById(
      "mobileMenu"
    );

  if (
    mobileMenu
  ) {

    mobileMenu.addEventListener(
      "click",
      openSidebar
    );

  }

  const overlay =
    document.getElementById(
      "sidebarOverlay"
    );

  if (
    overlay
  ) {

    overlay.addEventListener(
      "click",
      closeSidebar
    );

  }

  // ====================================================
  // SETTINGS
  // ====================================================

  const reminder =
    document.getElementById(
      "reminderToggle"
    );

  if (
    reminder
  ) {

    reminder.addEventListener(
      "change",
      event => {

        state.settings.reminder =
          event.target.checked;

        saveState();

      }
    );

  }

  const tracking =
    document.getElementById(
      "trackingToggle"
    );

  if (
    tracking
  ) {

    tracking.addEventListener(
      "change",
      event => {

        state.settings.tracking =
          event.target.checked;

        saveState();

      }
    );

  }

  // ====================================================
  // RESET
  // ====================================================

  const resetBtn =
    document.getElementById(
      "resetDataBtn"
    );

  if (
    resetBtn
  ) {

    resetBtn.addEventListener(
      "click",
      () => {

        const confirmed =
          confirm(
            "Aung Business Academy ရဲ့ Learning Progress အားလုံးကို Reset လုပ်မှာ သေချာပါသလား?"
          );

        if (!confirmed)
          return;

        localStorage.removeItem(
          STORAGE_KEY
        );

        state =
          createDefaultState();

        saveState();

        renderAll();

        showToast(
          "Academy Data အားလုံး Reset ပြီးပါပြီ။"
        );

      }
    );

  }

  // ====================================================
  // NOTIFICATION
  // ====================================================

  const notification =
    document.getElementById(
      "notificationBtn"
    );

  if (
    notification
  ) {

    notification.addEventListener(
      "click",
      () => {

        showToast(
          "လက်ရှိ Notification မရှိသေးပါ။"
        );

      }
    );

  }

  // ====================================================
  // MODAL
  // ====================================================

  const modalClose =
    document.getElementById(
      "modalClose"
    );

  if (
    modalClose
  ) {

    modalClose.addEventListener(
      "click",
      closeModal
    );

  }

  const modalOverlay =
    document.getElementById(
      "modalOverlay"
    );

  if (
    modalOverlay
  ) {

    modalOverlay.addEventListener(
      "click",
      event => {

        if (
          event.target.id ===
          "modalOverlay"
        ) {

          closeModal();

        }

      }
    );

  }

}

// ======================================================
// RENDER ALL
// ======================================================

function renderAll() {

  renderDashboard();

  renderCourses();

  renderLessons();

  renderProgress();

  renderSales();

  renderCalculator();

  renderReports();

  const reminder =
    document.getElementById(
      "reminderToggle"
    );

  const tracking =
    document.getElementById(
      "trackingToggle"
    );

  if (
    reminder
  ) {

    reminder.checked =
      !!state.settings.reminder;

  }

  if (
    tracking
  ) {

    tracking.checked =
      !!state.settings.tracking;

  }

}

// ======================================================
// INIT
// ======================================================

function initAcademy() {

  state =
    loadState();

  // ----------------------------------------------------
  // Validate current course
  // ----------------------------------------------------

  const currentCourseExists =
    COURSES.some(
      course =>
        course.id ===
        state.currentCourseId
    );

  if (
    !currentCourseExists
  ) {

    state.currentCourseId =
      COURSES[0]?.id ||
      null;

    state.currentLessonIndex =
      0;

    saveState();

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

  initializeApp();

  renderAll();

  // ----------------------------------------------------
  // Restore current page
  // ----------------------------------------------------

  if (
    state.currentPage
  ) {

    const page =
      document.getElementById(
        state.currentPage
      );

    if (page) {

      navigate(
        state.currentPage
      );

    }

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

  completeLesson,

  previousLesson,

  nextLesson,

  openCourse,

  getCurrentCourse,

  getCurrentLesson,

  getOverallProgress,

  getCourseProgress,

  getTotalLessons,

  getCompletedCount

};
