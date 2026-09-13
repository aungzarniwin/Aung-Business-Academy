/* =========================================================
   AUNG BUSINESS ACADEMY
   V8.0 PROFESSIONAL
   Sales Manager Professional Module
========================================================= */


/* ================= DATA ================= */

const COURSES = [
  {
    id: 1,
    title: "Sales Management Mastery",
    description: "Sales target, team management, execution and performance.",
    lessons: [1, 2, 3, 4]
  },
  {
    id: 2,
    title: "Business Strategy",
    description: "Strategic thinking, planning and business growth.",
    lessons: [5, 6, 7]
  },
  {
    id: 3,
    title: "Marketing & Brand",
    description: "Brand positioning and practical marketing fundamentals.",
    lessons: [8, 9, 10]
  },
  {
    id: 4,
    title: "People & Leadership",
    description: "Leadership, coaching, negotiation and people management.",
    lessons: [11, 12, 13, 14]
  }
];


const LESSONS = [

  {
    id: 1,
    courseId: 1,
    category: "Sales Basics",
    title: "Sales Target ဆိုတာဘာလဲ",
    description: "Sales target သတ်မှတ်ခြင်းနှင့် target ကို field execution အဖြစ်ပြောင်းလဲခြင်း။",
    content:
      "Sales Manager တစ်ယောက်အနေနဲ့ target ကို နံပါတ်တစ်ခုအဖြစ်သာ မမြင်သင့်ပါ။ Target ကို လူ၊ နံပါတ်၊ customer၊ territory နဲ့ daily execution အဖြစ် ခွဲခြမ်းစိတ်ဖြာရပါမယ်။"
  },

  {
    id: 2,
    courseId: 1,
    category: "Sales Basics",
    title: "Target Achievement Management",
    description: "Achievement % နှင့် sales gap ကို စီမံခန့်ခွဲခြင်း။",
    content:
      "Achievement = Actual Sales ÷ Target × 100 ဖြစ်ပါတယ်။ Achievement နည်းနေတဲ့အခါ gap ကိုရှာပြီး recovery action plan တည်ဆောက်ရပါမယ်။"
  },

  {
    id: 3,
    courseId: 1,
    category: "People Management",
    title: "Sales Team Coaching",
    description: "Team ကို coaching နဲ့ performance တိုးတက်အောင်လုပ်ခြင်း။",
    content:
      "Manager က micromanagement မလုပ်ဘဲ clear expectation, direction, coaching, performance review နဲ့ accountability တို့ကို အသုံးပြုသင့်ပါတယ်။"
  },

  {
    id: 4,
    courseId: 1,
    category: "Sales Basics",
    title: "Field Execution",
    description: "Sales strategy ကို field execution အဖြစ် ပြောင်းလဲခြင်း။",
    content:
      "Field execution မှာ customer visit, distribution, visibility, stock availability, team productivity နဲ့ competitor activity တွေကို စနစ်တကျ စောင့်ကြည့်ရပါတယ်။"
  },

  {
    id: 5,
    courseId: 2,
    category: "Strategic Thinking",
    title: "Strategic Thinking Fundamentals",
    description: "Business ကို long-term perspective နဲ့စဉ်းစားခြင်း။",
    content:
      "Strategy ဆိုတာ အလုပ်များများလုပ်ခြင်းမဟုတ်ပါ။ ဘယ် market ကိုရွေးမလဲ၊ ဘယ် customer ကိုအာရုံစိုက်မလဲ၊ ဘယ်အရာကို မလုပ်ဘူးလဲဆိုတာ သတ်မှတ်ခြင်းဖြစ်ပါတယ်။"
  },

  {
    id: 6,
    courseId: 2,
    category: "Business Basics",
    title: "Market Analysis",
    description: "Market, customer နဲ့ competitor ကို ခွဲခြမ်းစိတ်ဖြာခြင်း။",
    content:
      "Market analysis မှာ customer needs, competitor strength, pricing, distribution နဲ့ market trend တွေကို သုံးသပ်ပြီး opportunity နဲ့ risk ကိုရှာဖွေရပါတယ်။"
  },

  {
    id: 7,
    courseId: 2,
    category: "Goal Setting",
    title: "Business Goal Setting",
    description: "SMART goals ဖြင့် business goal သတ်မှတ်ခြင်း။",
    content:
      "Goal က Specific, Measurable, Achievable, Relevant, Time-bound ဖြစ်သင့်ပါတယ်။ Goal တစ်ခုချင်းစီအတွက် KPI နဲ့ action plan ထည့်သင့်ပါတယ်။"
  },

  {
    id: 8,
    courseId: 3,
    category: "Brand Basics",
    title: "Brand Fundamentals",
    description: "Brand positioning နှင့် customer perception။",
    content:
      "Brand ဆိုတာ logo တစ်ခုတည်းမဟုတ်ပါ။ Customer က product သို့မဟုတ် company ကို ဘယ်လိုခံစားသလဲဆိုတဲ့ perception ဖြစ်ပါတယ်။"
  },

  {
    id: 9,
    courseId: 3,
    category: "Marketing Basics",
    title: "Marketing Fundamentals",
    description: "Customer needs နဲ့ marketing mix ကို နားလည်ခြင်း။",
    content:
      "Marketing မှာ customer ကို နားလည်ပြီး product, price, place, promotion ကို customer needs နဲ့ ကိုက်ညီအောင် စီမံရပါတယ်။"
  },

  {
    id: 10,
    courseId: 3,
    category: "Customer Service",
    title: "Customer Experience",
    description: "Customer relationship တည်ဆောက်ခြင်း။",
    content:
      "Customer experience က transaction တစ်ကြိမ်ထက် ပိုအရေးကြီးပါတယ်။ Trust, service quality, responsiveness နဲ့ follow-up က customer retention ကိုတိုးစေပါတယ်။"
  },

  {
    id: 11,
    courseId: 4,
    category: "People Management",
    title: "Leadership Style",
    description: "Coaching and empowerment leadership။",
    content:
      "Effective leader က clear expectations ပေးပြီး team ကို ownership နဲ့ accountability ပေးရပါတယ်။ Regular review နဲ့ feedback က performance တိုးတက်စေပါတယ်။"
  },

  {
    id: 12,
    courseId: 4,
    category: "Negotiation",
    title: "Negotiation Skills",
    description: "Win-win negotiation ကို လက်တွေ့အသုံးချခြင်း။",
    content:
      "Negotiation မှာ ကိုယ့်အကျိုးအမြတ်သာ မကြည့်ဘဲ customer ရဲ့ needs ကိုနားလည်ပြီး နှစ်ဖက်လုံးအတွက် value ဖန်တီးရပါတယ်။"
  },

  {
    id: 13,
    courseId: 4,
    category: "People Management",
    title: "Performance Management",
    description: "Team KPI နှင့် performance review။",
    content:
      "Performance management မှာ KPI, review frequency, coaching, action plan နဲ့ accountability ကို တစ်ဆက်တည်း စီမံရပါတယ်။"
  },

  {
    id: 14,
    courseId: 4,
    category: "Finance",
    title: "Profit & Loss Basics",
    description: "Revenue, cost, profit နှင့် margin ကိုနားလည်ခြင်း။",
    content:
      "Revenue ထက် profit ကို ပိုအာရုံစိုက်ရပါမယ်။ Profit = Revenue - Cost ဖြစ်ပြီး margin က business health ကိုတိုင်းတာရာမှာ အရေးကြီးပါတယ်။"
  }

];


/* ================= STATE ================= */

let currentPage = "dashboardPage";

let completedLessons =
  JSON.parse(
    localStorage.getItem("aba_completed_lessons") || "[]"
  );

let currentLessonIndex = 0;


/* ================= SALES DATA ================= */

const defaultSalesData = {
  target: 100000000,
  actual: 75000000,
  period: "Current Month"
};

let salesData =
  JSON.parse(
    localStorage.getItem("aba_sales_data") ||
    JSON.stringify(defaultSalesData)
  );


const defaultTeam = [
  {
    name: "Sales Executive 01",
    target: 25000000,
    actual: 22000000
  },
  {
    name: "Sales Executive 02",
    target: 25000000,
    actual: 21000000
  },
  {
    name: "Sales Executive 03",
    target: 25000000,
    actual: 18000000
  },
  {
    name: "Sales Executive 04",
    target: 25000000,
    actual: 14000000
  }
];


let teamData =
  JSON.parse(
    localStorage.getItem("aba_team_data") ||
    JSON.stringify(defaultTeam)
  );


let actionPlans =
  JSON.parse(
    localStorage.getItem("aba_action_plans") ||
    JSON.stringify([
      {
        id: 1,
        text: "Review sales gap and identify top recovery opportunities.",
        completed: false
      },
      {
        id: 2,
        text: "Coach low-performing team members.",
        completed: false
      },
      {
        id: 3,
        text: "Visit key customers and review monthly opportunities.",
        completed: false
      }
    ])
  );


/* ================= HELPERS ================= */

function $(id) {
  return document.getElementById(id);
}


function escapeHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function saveSalesData() {
  localStorage.setItem(
    "aba_sales_data",
    JSON.stringify(salesData)
  );
}


function saveTeamData() {
  localStorage.setItem(
    "aba_team_data",
    JSON.stringify(teamData)
  );
}


function saveActionPlans() {
  localStorage.setItem(
    "aba_action_plans",
    JSON.stringify(actionPlans)
  );
}


/* ================= NAVIGATION ================= */

function navigate(pageId) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  const page = $(pageId);

  if (!page) {
    return;
  }

  page.classList.add("active");

  currentPage = pageId;

  document
    .querySelectorAll(".nav-item")
    .forEach(item => {

      item.classList.remove("active");

      if (item.dataset.page === pageId) {
        item.classList.add("active");
      }

    });


  updatePageTitle(pageId);

  closeSidebar();

  if (pageId === "dashboardPage") {
    updateDashboardStats();
  }

  if (pageId === "coursesPage") {
    renderCourses();
  }

  if (pageId === "lessonsPage") {
    renderLessons();
  }

  if (pageId === "progressPage") {
    renderProgress();
  }

  if (pageId === "salesPage") {
    renderSales();
  }

  if (pageId === "reportsPage") {
    renderReports();
  }

}


function updatePageTitle(pageId) {

  const titles = {

    dashboardPage: [
      "Dashboard",
      "Business learning & management system"
    ],

    coursesPage: [
      "My Courses",
      "Professional business courses"
    ],

    lessonsPage: [
      "Lessons",
      "Practical business learning"
    ],

    progressPage: [
      "My Progress",
      "Track your development"
    ],

    salesPage: [
      "Sales Manager",
      "Target, team and execution management"
    ],

    calculatorPage: [
      "Business Calculators",
      "Practical financial tools"
    ],

    reportsPage: [
      "Reports",
      "Business performance analytics"
    ],

    aiPage: [
      "AI Business Coach",
      "Business advice and coaching"
    ],

    toolsPage: [
      "AI Tools",
      "Practical management tools"
    ],

    settingsPage: [
      "Settings",
      "Application settings"
    ]

  };


  const title =
    titles[pageId] ||
    ["Aung Business Academy", "Professional business academy"];


  if ($("pageTitle")) {
    $("pageTitle").textContent = title[0];
  }

  if ($("pageSubtitle")) {
    $("pageSubtitle").textContent = title[1];
  }
}


/* ================= DASHBOARD ================= */

function goDashboard() {
  navigate("dashboardPage");
}


function openLessons() {
  navigate("lessonsPage");
}


function continueLearning() {

  const incomplete =
    LESSONS.find(
      lesson => !completedLessons.includes(lesson.id)
    );

  if (incomplete) {
    openLessonById(incomplete.id);
    return;
  }

  navigate("lessonsPage");
}


function openBusinessPlan() {
  navigate("salesPage");
}


function updateDashboardStats() {

  if ($("statCourses")) {
    $("statCourses").textContent = COURSES.length;
  }

  if ($("statLessons")) {
    $("statLessons").textContent = LESSONS.length;
  }

  const completed =
    completedLessons.length;

  const progress =
    Math.round(
      (completed / LESSONS.length) * 100
    );


  if ($("statCompleted")) {
    $("statCompleted").textContent = completed;
  }

  if ($("statProgress")) {
    $("statProgress").textContent = `${progress}%`;
  }


  const salesCourse =
    COURSES.find(course => course.id === 1);

  const courseCompleted =
    salesCourse.lessons.filter(
      id => completedLessons.includes(id)
    ).length;

  const courseProgress =
    Math.round(
      (courseCompleted / salesCourse.lessons.length) * 100
    );


  if ($("dashboardCourseProgress")) {
    $("dashboardCourseProgress").style.width =
      `${courseProgress}%`;
  }

  if ($("dashboardCourseProgressText")) {
    $("dashboardCourseProgressText").textContent =
      `${courseProgress}% completed`;
  }


  if ($("dailyGoalPercent")) {
    $("dailyGoalPercent").textContent =
      "0%";
  }

  if ($("dailyGoalText")) {
    $("dailyGoalText").textContent =
      "0 / 30 min";
  }
}


/* ================= CATEGORIES ================= */

function openCategory(category) {

  navigate("lessonsPage");

  setTimeout(() => {

    const filtered =
      LESSONS.filter(
        lesson => lesson.category === category
      );

    if (!filtered.length) {

      showToast(
        `${category} အတွက် lesson မရှိသေးပါ။`
      );

      return;
    }

    const list = $("lessonsList");

    if (!list) return;

    list.innerHTML = filtered
      .map(
        (lesson, index) =>
          createLessonHTML(lesson, index)
      )
      .join("");

  }, 50);
}


/* ================= COURSES ================= */

function courseProgress(course) {

  if (!course.lessons.length) {
    return 0;
  }

  const completed =
    course.lessons.filter(
      id => completedLessons.includes(id)
    ).length;

  return Math.round(
    (completed / course.lessons.length) * 100
  );
}


function renderCourses() {

  const container = $("coursesList");

  if (!container) return;

  container.innerHTML =
    COURSES.map(course => {

      const progress =
        courseProgress(course);

      return `
        <div class="course-card">

          <div class="course-card-top">

            <div class="course-card-icon">
              ${course.title.charAt(0)}
            </div>

            <div>
              <h3>${escapeHTML(course.title)}</h3>

              <p>
                ${escapeHTML(course.description)}
              </p>
            </div>

          </div>

          <div class="progress-line">
            <span style="width:${progress}%"></span>
          </div>

          <div class="course-meta">

            <span>${progress}% completed</span>

            <button
              class="text-btn"
              onclick="openCourse(${course.id})"
            >
              Open →
            </button>

          </div>

        </div>
      `;

    }).join("");
}


function openCourse(courseId) {

  const course =
    COURSES.find(
      item => item.id === courseId
    );

  if (!course) return;

  const lessons =
    LESSONS.filter(
      lesson =>
        course.lessons.includes(lesson.id)
    );

  openModal(`

    <span class="eyebrow">
      COURSE
    </span>

    <h2>
      ${escapeHTML(course.title)}
    </h2>

    <p>
      ${escapeHTML(course.description)}
    </p>

    <div class="modal-lesson">

      ${lessons.map(
        lesson => `
          <div style="
            padding:10px 0;
            border-bottom:1px solid #eee;
          ">
            <strong>
              ${lesson.id}. ${escapeHTML(lesson.title)}
            </strong>
          </div>
        `
      ).join("")}

    </div>

  `);
}


/* ================= LESSONS ================= */

function createLessonHTML(lesson, index) {

  const done =
    completedLessons.includes(lesson.id);

  return `
    <div
      class="lesson-card"
      onclick="openLessonById(${lesson.id})"
    >

      <div class="lesson-number">
        ${String(index + 1).padStart(2, "0")}
      </div>

      <div class="lesson-info">

        <h3>
          ${escapeHTML(lesson.title)}
        </h3>

        <p>
          ${escapeHTML(lesson.description)}
        </p>

      </div>

      <div
        class="lesson-status ${done ? "done" : "pending"}"
      >
        ${done ? "✓ Completed" : "Start →"}
      </div>

    </div>
  `;
}


function renderLessons() {

  const list = $("lessonsList");

  if (!list) return;

  list.innerHTML =
    LESSONS
      .map(
        (lesson, index) =>
          createLessonHTML(lesson, index)
      )
      .join("");
}


function openLessonById(id) {

  const index =
    LESSONS.findIndex(
      lesson => lesson.id === id
    );

  if (index < 0) return;

  currentLessonIndex = index;

  openLesson();
}


function openLesson() {

  const lesson =
    LESSONS[currentLessonIndex];

  if (!lesson) return;

  const done =
    completedLessons.includes(lesson.id);


  openModal(`

    <span class="eyebrow">
      ${escapeHTML(lesson.category)}
    </span>

    <h2>
      ${escapeHTML(lesson.title)}
    </h2>

    <p>
      ${escapeHTML(lesson.description)}
    </p>

    <div class="modal-lesson">
      ${escapeHTML(lesson.content)}
    </div>

    <div class="modal-actions">

      <button
        class="secondary-btn"
        onclick="previousLesson()"
      >
        ← Previous
      </button>

      <button
        class="secondary-btn"
        onclick="nextLesson()"
      >
        Next →
      </button>

      <button
        class="primary-btn"
        onclick="completeLesson()"
      >
        ${done ? "Completed ✓" : "Mark Complete"}
      </button>

    </div>

  `);
}


function previousLesson() {

  if (currentLessonIndex > 0) {

    currentLessonIndex--;

    openLesson();

  }
}


function nextLesson() {

  if (
    currentLessonIndex <
    LESSONS.length - 1
  ) {

    currentLessonIndex++;

    openLesson();

  }
}


function completeLesson() {

  const lesson =
    LESSONS[currentLessonIndex];

  if (!lesson) return;


  if (!completedLessons.includes(lesson.id)) {

    completedLessons.push(lesson.id);

    localStorage.setItem(
      "aba_completed_lessons",
      JSON.stringify(completedLessons)
    );

    showToast("Lesson completed ✓");

  } else {

    showToast("ဒီ lesson ကိုပြီးထားပြီးပါပြီ။");

  }


  updateDashboardStats();

  renderLessons();

  openLesson();
}


/* ================= PROGRESS ================= */

function renderProgress() {

  const container =
    $("progressContent");

  if (!container) return;

  const completed =
    completedLessons.length;

  const progress =
    Math.round(
      (completed / LESSONS.length) * 100
    );


  container.innerHTML = `

    <div class="stats-grid">

      <div class="stat-card">
        <div class="stat-icon purple">▤</div>
        <div>
          <span>Total Courses</span>
          <strong>${COURSES.length}</strong>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon pink">▣</div>
        <div>
          <span>Total Lessons</span>
          <strong>${LESSONS.length}</strong>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon green">✓</div>
        <div>
          <span>Completed</span>
          <strong>${completed}</strong>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon orange">◔</div>
        <div>
          <span>Overall Progress</span>
          <strong>${progress}%</strong>
        </div>
      </div>

    </div>


    <div class="panel" style="margin-top:20px">

      <div class="panel-header">

        <div>
          <h3>Course Progress</h3>
          <p>Track every course.</p>
        </div>

      </div>


      ${COURSES.map(course => {

        const p =
          courseProgress(course);

        return `

          <div style="margin-bottom:20px">

            <div style="
              display:flex;
              justify-content:space-between;
              margin-bottom:7px;
              font-size:11px;
              font-weight:700;
            ">

              <span>
                ${escapeHTML(course.title)}
              </span>

              <span>
                ${p}%
              </span>

            </div>

            <div class="progress-line">

              <span
                style="width:${p}%"
              ></span>

            </div>

          </div>

        `;

      }).join("")}

    </div>

  `;
}


/* =========================================================
   SALES MANAGER PROFESSIONAL MODULE
========================================================= */

function formatMoney(number) {

  const value =
    Number(number) || 0;

  return new Intl.NumberFormat(
    "en-US"
  ).format(Math.round(value));
}


function calculateAchievement(
  target,
  actual
) {

  target = Number(target) || 0;
  actual = Number(actual) || 0;

  if (target <= 0) {
    return 0;
  }

  return (
    actual / target
  ) * 100;
}


function calculateGap(
  target,
  actual
) {

  target = Number(target) || 0;
  actual = Number(actual) || 0;

  return Math.max(
    target - actual,
    0
  );
}


function calculateDailyTarget(
  target,
  workingDays = 26
) {

  target = Number(target) || 0;

  if (workingDays <= 0) {
    return 0;
  }

  return target / workingDays;
}


function getAchievementStatus(
  achievement
) {

  if (achievement >= 100) {
    return {
      text: "Target Achieved",
      className: "good"
    };
  }

  if (achievement >= 80) {
    return {
      text: "On Track",
      className: "warning"
    };
  }

  return {
    text: "Recovery Required",
    className: "danger"
  };
}


function renderSales() {

  if (!$("salesTargetInput")) {
    return;
  }


  $("salesTargetInput").value =
    salesData.target || "";

  $("salesActualInput").value =
    salesData.actual || "";


  $("salesPeriod").textContent =
    salesData.period || "Current Month";


  const target =
    Number(salesData.target) || 0;

  const actual =
    Number(salesData.actual) || 0;


  const achievement =
    calculateAchievement(
      target,
      actual
    );

  const gap =
    calculateGap(
      target,
      actual
    );

  const dailyTarget =
    calculateDailyTarget(target);


  updateElement(
    "salesTargetDisplay",
    `${formatMoney(target)} MMK`
  );

  updateElement(
    "salesActualDisplay",
    `${formatMoney(actual)} MMK`
  );

  updateElement(
    "salesAchievementDisplay",
    `${achievement.toFixed(1)}%`
  );

  updateElement(
    "salesGapDisplay",
    `${formatMoney(gap)} MMK`
  );

  updateElement(
    "achievementPercentLarge",
    `${achievement.toFixed(1)}%`
  );

  updateElement(
    "dailyTargetDisplay",
    `Daily Target: ${formatMoney(dailyTarget)} MMK`
  );


  const progress =
    Math.min(
      achievement,
      100
    );


  if ($("achievementProgressBar")) {

    $("achievementProgressBar").style.width =
      `${progress}%`;

  }


  const status =
    getAchievementStatus(
      achievement
    );


  if ($("achievementStatus")) {

    $("achievementStatus").textContent =
      status.text;

    $("achievementStatus").style.color =
      status.className === "good"
        ? "var(--success)"
        : status.className === "warning"
        ? "#c27a00"
        : "var(--danger)";

  }


  renderTeamPerformance();

  renderActionPlans();
}


function updateElement(
  id,
  value
) {

  const element = $(id);

  if (element) {
    element.textContent = value;
  }
}


function updateSalesPerformance() {

  const target =
    Number(
      $("salesTargetInput").value
    ) || 0;

  const actual =
    Number(
      $("salesActualInput").value
    ) || 0;


  if (target <= 0) {

    showToast(
      "Monthly Target ထည့်ပေးပါ။"
    );

    return;
  }


  if (actual < 0) {

    showToast(
      "Actual Sales မှားနေပါတယ်။"
    );

    return;
  }


  salesData = {
    target,
    actual,
    period: "Current Month"
  };


  saveSalesData();

  renderSales();

  showToast(
    "Sales performance updated ✓"
  );
}


/* ================= TEAM ================= */

function renderTeamPerformance() {

  const body =
    $("teamPerformanceBody");

  if (!body) return;


  body.innerHTML =
    teamData.map(
      member => {

        const achievement =
          calculateAchievement(
            member.target,
            member.actual
          );

        const status =
          getAchievementStatus(
            achievement
          );


        return `

          <tr>

            <td>
              ${escapeHTML(member.name)}
            </td>

            <td>
              ${formatMoney(member.target)}
            </td>

            <td>
              ${formatMoney(member.actual)}
            </td>

            <td>
              <strong>
                ${achievement.toFixed(1)}%
              </strong>
            </td>

            <td>

              <span
                class="status-pill ${status.className}"
              >
                ${status.text}
              </span>

            </td>

          </tr>

        `;

      }
    ).join("");
}


function addTeamMember() {

  const name =
    prompt(
      "Team member name:"
    );

  if (!name) return;


  const target =
    Number(
      prompt(
        "Monthly target (MMK):",
        "25000000"
      )
    ) || 0;


  const actual =
    Number(
      prompt(
        "Actual sales (MMK):",
        "0"
      )
    ) || 0;


  if (target <= 0) {

    showToast(
      "Target မှန်ကန်စွာထည့်ပါ။"
    );

    return;
  }


  teamData.push({
    name,
    target,
    actual
  });


  saveTeamData();

  renderTeamPerformance();

  showToast(
    "Team member added ✓"
  );
}


/* ================= ACTION PLAN ================= */

function renderActionPlans() {

  const container =
    $("actionPlanList");

  if (!container) return;


  if (!actionPlans.length) {

    container.innerHTML = `
      <div style="
        padding:20px;
        text-align:center;
        color:#718096;
        font-size:11px;
      ">
        No action plans yet.
      </div>
    `;

    return;
  }


  container.innerHTML =
    actionPlans.map(
      action => `

        <div
          class="action-item ${
            action.completed
              ? "completed"
              : ""
          }"
        >

          <button
            class="action-check"
            onclick="toggleActionPlan(${action.id})"
          >
            ${action.completed ? "✓" : ""}
          </button>

          <div class="action-text">
            ${escapeHTML(action.text)}
          </div>

          <button
            class="action-delete"
            onclick="deleteActionPlan(${action.id})"
          >
            ×
          </button>

        </div>

      `
    ).join("");
}


function addActionPlan() {

  const text =
    prompt(
      "Sales action plan:"
    );

  if (!text) return;


  actionPlans.push({
    id: Date.now(),
    text,
    completed: false
  });


  saveActionPlans();

  renderActionPlans();

  showToast(
    "Action plan added ✓"
  );
}


function toggleActionPlan(id) {

  const action =
    actionPlans.find(
      item => item.id === id
    );

  if (!action) return;

  action.completed =
    !action.completed;


  saveActionPlans();

  renderActionPlans();
}


function deleteActionPlan(id) {

  actionPlans =
    actionPlans.filter(
      item => item.id !== id
    );

  saveActionPlans();

  renderActionPlans();

  showToast(
    "Action plan deleted."
  );
}


function createSalesAction(type) {

  const templates = {

    "Target Recovery":
      "Review sales gap and create a 7-day target recovery plan.",

    "Team Coaching":
      "Coach low-performing team members based on KPI gaps.",

    "Market Visit":
      "Conduct key market visits and identify immediate sales opportunities.",

    "Customer Review":
      "Review key customers, sales potential and next purchase opportunities."

  };


  actionPlans.push({
    id: Date.now(),
    text: templates[type],
    completed: false
  });


  saveActionPlans();

  renderActionPlans();

  showToast(
    `${type} action plan created ✓`
  );
}


/* ================= CALCULATORS ================= */

function openProfitCalculator() {

  navigate("calculatorPage");

  setTimeout(() => {

    $("profitRevenue")?.focus();

  }, 100);
}


function openPricingCalculator() {

  navigate("calculatorPage");

  setTimeout(() => {

    $("pricingCost")?.focus();

  }, 100);
}


function openBreakEvenCalculator() {

  navigate("calculatorPage");

  setTimeout(() => {

    $("breakFixedCost")?.focus();

  }, 100);
}


function openSalesTargetCalculator() {

  navigate("calculatorPage");

  setTimeout(() => {

    $("targetMonthly")?.focus();

  }, 100);
}


function calculateProfitTool() {

  const revenue =
    Number(
      $("profitRevenue").value
    ) || 0;

  const cost =
    Number(
      $("profitCost").value
    ) || 0;


  const profit =
    revenue - cost;


  const margin =
    revenue > 0
      ? (profit / revenue) * 100
      : 0;


  $("profitResult").innerHTML = `

    <strong>
      Profit: ${formatMoney(profit)} MMK
    </strong>

    <br>

    Profit Margin:
    <strong>
      ${margin.toFixed(2)}%
    </strong>

  `;
}


function calculatePricingTool() {

  const cost =
    Number(
      $("pricingCost").value
    ) || 0;

  const margin =
    Number(
      $("pricingMargin").value
    ) || 0;


  if (margin >= 100) {

    $("pricingResult").textContent =
      "Margin must be below 100%.";

    return;
  }


  const price =
    cost /
    (1 - margin / 100);


  const markup =
    cost > 0
      ? ((price - cost) / cost) * 100
      : 0;


  $("pricingResult").innerHTML = `

    Selling Price:
    <strong>
      ${formatMoney(price)} MMK
    </strong>

    <br>

    Markup:
    <strong>
      ${markup.toFixed(2)}%
    </strong>

  `;
}


function calculateBreakEven() {

  const fixedCost =
    Number(
      $("breakFixedCost").value
    ) || 0;

  const sellingPrice =
    Number(
      $("breakSellingPrice").value
    ) || 0;

  const variableCost =
    Number(
      $("breakVariableCost").value
    ) || 0;


  const contribution =
    sellingPrice - variableCost;


  if (contribution <= 0) {

    $("breakEvenResult").textContent =
      "Selling price must be higher than variable cost.";

    return;
  }


  const units =
    fixedCost / contribution;


  $("breakEvenResult").innerHTML = `

    Break-even Units:
    <strong>
      ${Math.ceil(units).toLocaleString()}
    </strong>

    <br>

    Break-even Sales:
    <strong>
      ${formatMoney(units * sellingPrice)} MMK
    </strong>

  `;
}


function calculateSalesTarget() {

  const monthly =
    Number(
      $("targetMonthly").value
    ) || 0;

  const days =
    Number(
      $("targetDays").value
    ) || 0;


  if (days <= 0) {

    $("salesTargetResult").textContent =
      "Working days must be greater than 0.";

    return;
  }


  const daily =
    monthly / days;


  $("salesTargetResult").innerHTML = `

    Daily Sales Target:
    <strong>
      ${formatMoney(daily)} MMK
    </strong>

    <br>

    Monthly Target:
    <strong>
      ${formatMoney(monthly)} MMK
    </strong>

  `;
}


/* ================= REPORTS ================= */

function renderReports() {

  const container =
    $("reportsContent");

  if (!container) return;


  const achievement =
    calculateAchievement(
      salesData.target,
      salesData.actual
    );


  const salesStatus =
    getAchievementStatus(
      achievement
    );


  container.innerHTML = `

    <div class="sales-kpi-grid">

      <div class="sales-kpi">

        <div class="kpi-top">
          <span>Sales Target</span>
          <div class="kpi-icon purple">🎯</div>
        </div>

        <strong>
          ${formatMoney(salesData.target)}
        </strong>

        <small>MMK</small>

      </div>


      <div class="sales-kpi">

        <div class="kpi-top">
          <span>Actual Sales</span>
          <div class="kpi-icon green">💰</div>
        </div>

        <strong>
          ${formatMoney(salesData.actual)}
        </strong>

        <small>MMK</small>

      </div>


      <div class="sales-kpi">

        <div class="kpi-top">
          <span>Achievement</span>
          <div class="kpi-icon pink">↗</div>
        </div>

        <strong>
          ${achievement.toFixed(1)}%
        </strong>

        <small>
          ${salesStatus.text}
        </small>

      </div>


      <div class="sales-kpi">

        <div class="kpi-top">
          <span>Lessons Completed</span>
          <div class="kpi-icon orange">✓</div>
        </div>

        <strong>
          ${completedLessons.length}
        </strong>

        <small>
          of ${LESSONS.length}
        </small>

      </div>

    </div>


    <div class="panel">

      <div class="panel-header">

        <div>
          <h3>Manager Summary</h3>
          <p>Current performance overview.</p>
        </div>

      </div>

      <p style="
        font-size:11px;
        line-height:1.8;
        color:#718096;
      ">

        Current sales achievement is
        <strong style="color:#6d4aff">
          ${achievement.toFixed(1)}%
        </strong>.

        ${
          achievement >= 100
            ? "The current target has been achieved. Focus on sustainable growth and margin."
            : achievement >= 80
            ? "Performance is relatively on track. Focus on closing the remaining sales gap."
            : "A recovery plan is required. Prioritize high-potential customers, team coaching and field execution."
        }

      </p>

    </div>

  `;
}


/* ================= AI BUSINESS COACH ================= */

function sendAIMessage() {

  const input =
    $("aiInput");

  if (!input) return;


  const text =
    input.value.trim();


  if (!text) return;


  addAIMessage(
    text,
    "user"
  );


  input.value = "";


  setTimeout(() => {

    const response =
      getAIResponse(text);

    addAIMessage(
      response,
      "assistant"
    );

  }, 400);
}


function addAIMessage(
  text,
  type
) {

  const container =
    $("aiMessages");

  if (!container) return;


  const message =
    document.createElement("div");

  message.className =
    `ai-message ${type}`;


  message.innerHTML = `

    <div class="ai-avatar">
      AI
    </div>

    <div class="ai-bubble">
      ${escapeHTML(text)}
    </div>

  `;


  container.appendChild(message);

  container.scrollTop =
    container.scrollHeight;
}


function getAIResponse(question) {

  const q =
    question.toLowerCase();


  if (
    q.includes("sales") ||
    q.includes("ရောင်း")
  ) {

    return "Sales တိုးချင်ရင် Target, Actual, Gap ကိုအရင်ခွဲခြမ်းပါ။ ပြီးရင် high-potential customers, distribution, team productivity နဲ့ daily field execution ကို အာရုံစိုက်ပါ။";
  }


  if (
    q.includes("team") ||
    q.includes("ဝန်ထမ်း")
  ) {

    return "Team management မှာ clear expectation, coaching, regular review နဲ့ accountability ကို အဓိကထားပါ။ Micromanagement ထက် ownership ပေးတာပိုထိရောက်ပါတယ်။";
  }


  if (
    q.includes("target") ||
    q.includes("ပစ်မှတ်")
  ) {

    return "Target ကို monthly number တစ်ခုအဖြစ်မထားဘဲ weekly target, daily target, territory target နဲ့ salesperson target အဖြစ် ခွဲပါ။";
  }


  if (
    q.includes("marketing") ||
    q.includes("brand")
  ) {

    return "Marketing strategy တည်ဆောက်ရာမှာ customer needs, competitor, positioning, pricing နဲ့ distribution ကို အရင်နားလည်ပါ။";
  }


  if (
    q.includes("profit") ||
    q.includes("အမြတ်")
  ) {

    return "Revenue တိုးတာတစ်ခုတည်းမဟုတ်ဘဲ cost control နဲ့ margin ကိုပါ စောင့်ကြည့်ပါ။ Profit = Revenue - Cost ဖြစ်ပါတယ်။";
  }


  if (
    q.includes("leadership") ||
    q.includes("ခေါင်းဆောင်")
  ) {

    return "Effective leadership က direction ပေးခြင်း၊ coaching လုပ်ခြင်း၊ accountability တည်ဆောက်ခြင်းနဲ့ team ကို ownership ပေးခြင်းပေါ်မှာ အခြေခံပါတယ်။";
  }


  return "ဒီကိစ္စကို Sales, People, Strategy, Customer, Finance ဆိုပြီး အပိုင်းခွဲပြီး စဉ်းစားကြည့်ပါ။ ပြဿနာရဲ့ root cause ကိုရှာပြီး measurable action plan တစ်ခုတည်ဆောက်တာက အကောင်းဆုံးပါ။";
}


/* ================= AI TOOLS ================= */

function openTools() {
  navigate("toolsPage");
}


function openAITool(tool) {

  const messages = {

    "Sales Plan":
      "ဒီနေ့ Sales Plan တစ်ခုလုပ်မယ်ဆိုရင် Target → Gap → Key Customers → Team Actions → Daily Follow-up အစီအစဉ်နဲ့ စတင်ပါ။",

    "Customer Strategy":
      "Customer Strategy အတွက် Key Customer တွေကို Potential, Current Sales, Growth Opportunity နဲ့ Risk အလိုက် ခွဲခြားပါ။",

    "Team Coaching":
      "Team Coaching မှာ performance gap ကို identify လုပ်ပြီး observation → feedback → action → follow-up cycle ကို အသုံးပြုပါ။",

    "Business Strategy":
      "Business Strategy တည်ဆောက်ရာမှာ Market → Customer → Competitor → Capability → Growth Opportunity ကို အစဉ်လိုက် သုံးသပ်ပါ။"

  };


  openModal(`

    <span class="eyebrow">
      AI BUSINESS TOOL
    </span>

    <h2>
      ${escapeHTML(tool)}
    </h2>

    <div class="modal-lesson">
      ${escapeHTML(messages[tool] || "Tool information")}
    </div>

    <div class="modal-actions">

      <button
        class="primary-btn"
        onclick="navigate('aiPage'); closeModal()"
      >
        Open AI Coach
      </button>

    </div>

  `);
}


/* ================= PROFILE ================= */

function openProfile() {

  openModal(`

    <span class="eyebrow">
      PROFILE
    </span>

    <h2>
      Aung Zar Ni Win
    </h2>

    <p>
      Business Manager
    </p>

    <div class="modal-lesson">

      <strong>
        Aung Business Academy
      </strong>

      <br><br>

      Professional learning and sales management platform.

    </div>

  `);
}


/* ================= NOTIFICATION ================= */

function showNotification() {

  showToast(
    "No new notifications."
  );
}


/* ================= SEARCH ================= */

function performSearch() {

  const input =
    $("globalSearch");

  if (!input) return;


  const query =
    input.value
      .trim()
      .toLowerCase();


  if (!query) return;


  const lesson =
    LESSONS.find(
      item =>
        item.title
          .toLowerCase()
          .includes(query) ||
        item.category
          .toLowerCase()
          .includes(query)
    );


  if (lesson) {

    openLessonById(
      lesson.id
    );

    input.value = "";

    return;
  }


  const course =
    COURSES.find(
      item =>
        item.title
          .toLowerCase()
          .includes(query)
    );


  if (course) {

    navigate("coursesPage");

    openCourse(course.id);

    input.value = "";

    return;
  }


  showToast(
    "Search result မတွေ့ပါ။"
  );
}


/* ================= SIDEBAR ================= */

function toggleSidebar() {

  const sidebar =
    $("sidebar");

  if (!sidebar) return;

  sidebar.classList.toggle("open");
}


function openSidebar() {

  const sidebar =
    $("sidebar");

  if (!sidebar) return;

  sidebar.classList.add("open");
}


function closeSidebar() {

  const sidebar =
    $("sidebar");

  if (!sidebar) return;

  sidebar.classList.remove("open");
}


/* ================= MODAL ================= */

function openModal(html) {

  const overlay =
    $("modalOverlay");

  const body =
    $("modalBody");

  if (!overlay || !body) return;

  body.innerHTML = html;

  overlay.classList.add("show");
}


function closeModal() {

  const overlay =
    $("modalOverlay");

  if (!overlay) return;

  overlay.classList.remove("show");
}


/* ================= TOAST ================= */

let toastTimer;


function showToast(message) {

  const toast =
    $("toast");

  if (!toast) return;


  toast.textContent =
    message;


  toast.classList.add("show");


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2500);
}


/* ================= LOGOUT ================= */

function logoutUser() {

  showToast(
    "Logout function will be connected with account system later."
  );
}


/* ================= INITIALIZE ================= */

function initializeApp() {

  updateDashboardStats();

  renderCourses();

  renderLessons();

  renderProgress();

  renderSales();

  renderReports();

  navigate("dashboardPage");


  /* SEARCH */

  const search =
    $("globalSearch");

  if (search) {

    search.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Enter"
        ) {

          performSearch();

        }

      }
    );

  }


  /* MODAL CLICK OUTSIDE */

  const overlay =
    $("modalOverlay");

  if (overlay) {

    overlay.addEventListener(
      "click",
      event => {

        if (
          event.target === overlay
        ) {

          closeModal();

        }

      }
    );

  }


  /* ESC */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeModal();

        closeSidebar();

      }

    }
  );

}


/* ================= GLOBAL EXPORT ================= */

window.navigate = navigate;

window.goDashboard = goDashboard;

window.openLessons = openLessons;

window.continueLearning =
  continueLearning;

window.openBusinessPlan =
  openBusinessPlan;

window.openCategory =
  openCategory;

window.openCourse =
  openCourse;

window.openLessonById =
  openLessonById;

window.openLesson =
  openLesson;

window.previousLesson =
  previousLesson;

window.nextLesson =
  nextLesson;

window.completeLesson =
  completeLesson;

window.openProfitCalculator =
  openProfitCalculator;

window.openPricingCalculator =
  openPricingCalculator;

window.openBreakEvenCalculator =
  openBreakEvenCalculator;

window.openSalesTargetCalculator =
  openSalesTargetCalculator;

window.calculateProfitTool =
  calculateProfitTool;

window.calculatePricingTool =
  calculatePricingTool;

window.calculateBreakEven =
  calculateBreakEven;

window.calculateSalesTarget =
  calculateSalesTarget;

window.updateSalesPerformance =
  updateSalesPerformance;

window.addTeamMember =
  addTeamMember;

window.addActionPlan =
  addActionPlan;

window.toggleActionPlan =
  toggleActionPlan;

window.deleteActionPlan =
  deleteActionPlan;

window.createSalesAction =
  createSalesAction;

window.sendAIMessage =
  sendAIMessage;

window.openAITool =
  openAITool;

window.openTools =
  openTools;

window.openProfile =
  openProfile;

window.showNotification =
  showNotification;

window.performSearch =
  performSearch;

window.toggleSidebar =
  toggleSidebar;

window.openSidebar =
  openSidebar;

window.closeSidebar =
  closeSidebar;

window.openModal =
  openModal;

window.closeModal =
  closeModal;

window.showToast =
  showToast;

window.logoutUser =
  logoutUser;


/* ================= START ================= */

document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);
