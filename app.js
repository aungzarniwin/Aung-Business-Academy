/* =========================================================
   AUNG BUSINESS ACADEMY
   V8.0 PROFESSIONAL
   Main Application
========================================================= */


/* ================= DATA ================= */

const COURSES = [
  {
    id: 1,
    title: "Sales Management Mastery",
    description:
      "Sales target, team management, field execution and performance management.",
    category: "Sales",
    lessons: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    title: "Business Strategy",
    description:
      "Strategic thinking, market analysis and business decision making.",
    category: "Strategy",
    lessons: [6, 7, 8]
  },
  {
    id: 3,
    title: "Marketing & Brand",
    description:
      "Brand building, customer understanding and marketing fundamentals.",
    category: "Marketing",
    lessons: [9, 10]
  },
  {
    id: 4,
    title: "People & Leadership",
    description:
      "Leadership, coaching, customer service and people development.",
    category: "Leadership",
    lessons: [11, 12, 13, 14]
  }
];


const LESSONS = [

  {
    id: 1,
    courseId: 1,
    title: "Sales Target ဆိုတာဘာလဲ",
    category: "Sales Basics",
    content:
      "Sales target ဆိုတာ သတ်မှတ်ထားတဲ့ အချိန်ကာလအတွင်း ရောင်းချရမယ့် ရည်မှန်းချက်ဖြစ်ပါတယ်။ Manager တစ်ယောက်အနေနဲ့ target ကို monthly, weekly, daily အဖြစ် ခွဲပြီး field execution လုပ်နိုင်ရပါမယ်။"
  },

  {
    id: 2,
    courseId: 1,
    title: "Target ကို Field Execution ပြောင်းနည်း",
    category: "Sales Basics",
    content:
      "Target ရဖို့ လူ၊ နံပါတ်နဲ့ execution သုံးခုကို အာရုံစိုက်ရပါမယ်။ Sales performance ကို analyze လုပ်ပြီး gap ရှာပါ။ ပြီးရင် team ကို coach လုပ်ပြီး action plan တစ်ခုချင်းစီ သတ်မှတ်ပါ။"
  },

  {
    id: 3,
    courseId: 1,
    title: "Sales Team Coaching",
    category: "People Management",
    content:
      "Manager က team ကို micromanage မလုပ်ဘဲ clear expectation ပေးရပါမယ်။ Regular review, feedback, coaching နဲ့ accountability ကို အသုံးပြုပြီး team performance တိုးတက်အောင်လုပ်ပါ။"
  },

  {
    id: 4,
    courseId: 1,
    title: "Sales Gap Analysis",
    category: "Sales Basics",
    content:
      "Target နဲ့ actual ကြားက gap ကို ရှာပါ။ Gap ရဲ့အကြောင်းရင်းကို people, product, price, distribution, competition နဲ့ execution အလိုက် ခွဲခြမ်းစိတ်ဖြာနိုင်ရပါမယ်။"
  },

  {
    id: 5,
    courseId: 1,
    title: "Monthly Sales Review",
    category: "Sales Basics",
    content:
      "Monthly review မှာ achievement, gap, key accounts, team performance နဲ့ next month action plan ကို review လုပ်ရပါမယ်။"
  },

  {
    id: 6,
    courseId: 2,
    title: "Strategic Thinking",
    category: "Strategic Thinking",
    content:
      "Strategy ဆိုတာ လက်ရှိအခြေအနေကနေ ရည်မှန်းချက်ဆီသွားဖို့ resource တွေကို ဘယ်လိုအသုံးချမလဲဆိုတာဖြစ်ပါတယ်။"
  },

  {
    id: 7,
    courseId: 2,
    title: "Market Analysis",
    category: "Strategic Thinking",
    content:
      "Market size, customer needs, competitors, pricing နဲ့ distribution ကို စုစည်းပြီး market opportunity ကို ရှာဖွေပါ။"
  },

  {
    id: 8,
    courseId: 2,
    title: "Business Decision Making",
    category: "Business Basics",
    content:
      "ဆုံးဖြတ်ချက်ချတဲ့အခါ data, customer insight, business impact နဲ့ risk ကို ထည့်သွင်းစဉ်းစားပါ။"
  },

  {
    id: 9,
    courseId: 3,
    title: "Brand Basics",
    category: "Brand Basics",
    content:
      "Brand ဆိုတာ logo တစ်ခုတည်းမဟုတ်ပါဘူး။ Customer ရဲ့ စိတ်ထဲမှာ company/product အပေါ်ရှိတဲ့ perception ဖြစ်ပါတယ်။"
  },

  {
    id: 10,
    courseId: 3,
    title: "Marketing Basics",
    category: "Marketing Basics",
    content:
      "Marketing မှာ customer ကို နားလည်ခြင်း၊ value proposition တည်ဆောက်ခြင်းနဲ့ channel strategy သတ်မှတ်ခြင်းက အရေးကြီးပါတယ်။"
  },

  {
    id: 11,
    courseId: 4,
    title: "Leadership Fundamentals",
    category: "People Management",
    content:
      "ကောင်းမွန်တဲ့ leader တစ်ယောက်ဟာ direction ပေးနိုင်ရမယ်၊ expectation ရှင်းရမယ်၊ လူတွေကို develop လုပ်နိုင်ရမယ်။"
  },

  {
    id: 12,
    courseId: 4,
    title: "Customer Service",
    category: "Customer Service",
    content:
      "Customer service က customer complaint ဖြေရှင်းတာထက် ပိုပါတယ်။ Trust, responsiveness နဲ့ long-term relationship တည်ဆောက်ခြင်းဖြစ်ပါတယ်။"
  },

  {
    id: 13,
    courseId: 4,
    title: "Negotiation Skills",
    category: "Negotiation",
    content:
      "Negotiation မှာ ကိုယ့်အကျိုးအမြတ်ကိုသာ မကြည့်ဘဲ customer ရဲ့ needs နဲ့ win-win solution ကို ရှာဖွေပါ။"
  },

  {
    id: 14,
    courseId: 4,
    title: "Goal Setting",
    category: "Goal Setting",
    content:
      "Goal က ရှင်းလင်းပြီး တိုင်းတာလို့ရရပါမယ်။ SMART framework ကိုအသုံးပြုပြီး deadline နဲ့ action plan သတ်မှတ်ပါ။"
  }

];


/* ================= STATE ================= */

let currentPage = "dashboardPage";
let currentLessonIndex = 0;

let completedLessons =
  JSON.parse(
    localStorage.getItem("aba_completed_lessons") || "[]"
  );


/* ================= SALES DATA ================= */

const DEFAULT_SALES_DATA = {

  target: 30000000,

  actual: 22500000,

  workingDays: 26,

  team: [
    {
      id: 1,
      name: "Aung Aung",
      role: "Sales Executive",
      target: 8000000,
      actual: 6800000
    },
    {
      id: 2,
      name: "Ko Min",
      role: "Sales Executive",
      target: 7000000,
      actual: 5200000
    },
    {
      id: 3,
      name: "Mg Zaw",
      role: "Sales Representative",
      target: 6000000,
      actual: 4800000
    },
    {
      id: 4,
      name: "Su Su",
      role: "Sales Representative",
      target: 5000000,
      actual: 3500000
    }
  ],

  actions: [
    {
      id: 1,
      title: "Review low-performing territories",
      owner: "Sales Manager",
      due: "This Week",
      done: false
    },
    {
      id: 2,
      title: "Coach bottom-performing team members",
      owner: "Sales Manager",
      due: "Friday",
      done: false
    },
    {
      id: 3,
      title: "Visit top 10 key customers",
      owner: "Sales Team",
      due: "This Month",
      done: false
    }
  ]

};


let salesData =
  JSON.parse(
    localStorage.getItem("aba_sales_manager_v1") ||
    JSON.stringify(DEFAULT_SALES_DATA)
  );


/* ================= HELPERS ================= */

function $(id) {
  return document.getElementById(id);
}


function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function saveSalesData() {

  localStorage.setItem(
    "aba_sales_manager_v1",
    JSON.stringify(salesData)
  );

}


function formatMoney(number) {

  const value = Number(number) || 0;

  return value.toLocaleString("en-US") + " MMK";

}


function formatShortMoney(number) {

  const value = Number(number) || 0;

  if (value >= 10000000) {
    return (value / 10000000).toFixed(1) + "M";
  }

  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + "M";
  }

  if (value >= 1000) {
    return (value / 1000).toFixed(0) + "K";
  }

  return value.toLocaleString();
}


/* ================= NAVIGATION ================= */

function navigate(pageId) {

  const page = $(pageId);

  if (!page) return;

  document.querySelectorAll(".page")
    .forEach(page => {
      page.classList.remove("active");
    });

  page.classList.add("active");

  currentPage = pageId;

  document.querySelectorAll(".nav-item")
    .forEach(item => {

      item.classList.remove("active");

      if (item.dataset.page === pageId) {
        item.classList.add("active");
      }

    });


  updatePageTitle(pageId);

  closeSidebar();


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
      "Welcome back, Aung Zar Ni Win"
    ],

    coursesPage: [
      "My Courses",
      "Your business learning journey"
    ],

    lessonsPage: [
      "Lessons",
      "Practical Burmese business lessons"
    ],

    progressPage: [
      "My Progress",
      "Track your academy performance"
    ],

    salesPage: [
      "Sales Manager",
      "Manage sales performance professionally"
    ],

    calculatorPage: [
      "Business Calculator",
      "Calculate your business numbers"
    ],

    reportsPage: [
      "Reports",
      "Business performance reports"
    ],

    aiPage: [
      "AI Business Coach",
      "Your practical business assistant"
    ],

    toolsPage: [
      "AI Tools",
      "Business productivity tools"
    ],

    settingsPage: [
      "Settings",
      "Manage your academy"
    ]

  };


  const info = titles[pageId] || titles.dashboardPage;

  $("pageTitle").textContent = info[0];

  $("pageSubtitle").textContent = info[1];

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
  } else {
    showToast("သင်ခန်းစာအားလုံးပြီးပါပြီ 🎉");
  }

}


function openBusinessPlan() {

  openAITool("Business Plan");

}


function openCategory(category) {

  const results =
    LESSONS.filter(
      lesson =>
        lesson.category.toLowerCase()
          .includes(category.toLowerCase()) ||
        category.toLowerCase()
          .includes(lesson.category.toLowerCase())
    );


  let html = `
    <h3>${escapeHTML(category)}</h3>
    <p>ဒီ category ထဲက သင်ခန်းစာများ</p>
  `;


  if (!results.length) {

    html += `
      <div class="calc-result">
        ဒီ category အတွက် lesson အသစ်များ မကြာမီ ထပ်ထည့်ပေးပါမယ်။
      </div>
    `;

  } else {

    html += `<div class="lessons-list">`;

    results.forEach(lesson => {

      html += `
        <div class="lesson-item">

          <div class="lesson-number">
            ${lesson.id}
          </div>

          <div class="lesson-info">
            <strong>${escapeHTML(lesson.title)}</strong>
            <small>${escapeHTML(lesson.category)}</small>
          </div>

          <button
            class="btn primary"
            onclick="closeModal(); openLessonById(${lesson.id})"
          >
            Open
          </button>

        </div>
      `;

    });

    html += `</div>`;

  }


  openModal(html);

}


/* ================= COURSES ================= */

function courseProgress(course) {

  if (!course.lessons.length) return 0;

  const completed =
    course.lessons.filter(
      id => completedLessons.includes(id)
    ).length;

  return Math.round(
    (completed / course.lessons.length) * 100
  );

}


function renderCourses() {

  const container = $("coursesGrid");

  if (!container) return;

  container.innerHTML =
    COURSES.map(course => {

      const progress = courseProgress(course);

      return `
        <div class="course-card">

          <span class="eyebrow">
            ${escapeHTML(course.category)}
          </span>

          <h3>${escapeHTML(course.title)}</h3>

          <p>
            ${escapeHTML(course.description)}
          </p>

          <div class="progress-row">
            <span>Progress</span>
            <strong>${progress}%</strong>
          </div>

          <div class="progress">
            <div
              class="progress-bar"
              style="width:${progress}%"
            ></div>
          </div>

          <br>

          <button
            class="btn primary full"
            onclick="openCourse(${course.id})"
          >
            Open Course
          </button>

        </div>
      `;

    }).join("");

}


function openCourse(courseId) {

  const course =
    COURSES.find(c => c.id === courseId);

  if (!course) return;

  const lessons =
    LESSONS.filter(
      lesson => course.lessons.includes(lesson.id)
    );


  let html = `
    <h3>${escapeHTML(course.title)}</h3>
    <p>${escapeHTML(course.description)}</p>

    <div class="lessons-list">
  `;


  lessons.forEach(lesson => {

    const done =
      completedLessons.includes(lesson.id);

    html += `
      <div class="lesson-item">

        <div class="lesson-number">
          ${lesson.id}
        </div>

        <div class="lesson-info">
          <strong>${escapeHTML(lesson.title)}</strong>
          <small>${escapeHTML(lesson.category)}</small>
        </div>

        ${
          done
            ? `<span class="lesson-completed">✓ Done</span>`
            : `<button class="btn primary"
                onclick="closeModal();openLessonById(${lesson.id})">
                Open
              </button>`
        }

      </div>
    `;

  });


  html += `</div>`;

  openModal(html);

}


/* ================= LESSONS ================= */

function renderLessons() {

  const container = $("lessonsList");

  if (!container) return;


  container.innerHTML =
    LESSONS.map((lesson, index) => {

      const done =
        completedLessons.includes(lesson.id);

      return `
        <div class="lesson-item">

          <div class="lesson-number">
            ${index + 1}
          </div>

          <div class="lesson-info">
            <strong>${escapeHTML(lesson.title)}</strong>
            <small>
              ${escapeHTML(lesson.category)}
            </small>
          </div>

          ${
            done
              ? `<span class="lesson-completed">✓ Completed</span>`
              : ""
          }

          <button
            class="btn ${done ? "outline" : "primary"}"
            onclick="openLessonById(${lesson.id})"
          >
            ${done ? "Review" : "Start"}
          </button>

        </div>
      `;

    }).join("");

}


function openLessonById(id) {

  const index =
    LESSONS.findIndex(
      lesson => lesson.id === id
    );

  if (index === -1) return;

  currentLessonIndex = index;

  openLesson();

}


function openLesson() {

  const lesson =
    LESSONS[currentLessonIndex];

  if (!lesson) return;


  const done =
    completedLessons.includes(lesson.id);


  const html = `

    <span class="eyebrow">
      LESSON ${lesson.id}
    </span>

    <h3>
      ${escapeHTML(lesson.title)}
    </h3>

    <p>
      ${escapeHTML(lesson.content)}
    </p>

    <div class="calc-result">
      Category: ${escapeHTML(lesson.category)}
    </div>

    <br>

    <div style="display:flex;gap:8px;">

      <button
        class="btn outline"
        onclick="previousLesson()"
      >
        ← Previous
      </button>

      <button
        class="btn primary"
        onclick="completeLesson()"
      >
        ${done ? "✓ Completed" : "Complete Lesson"}
      </button>

      <button
        class="btn outline"
        onclick="nextLesson()"
      >
        Next →
      </button>

    </div>

  `;


  openModal(html);

}


function previousLesson() {

  if (currentLessonIndex > 0) {

    currentLessonIndex--;

    openLesson();

  }

}


function nextLesson() {

  if (currentLessonIndex < LESSONS.length - 1) {

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

  }


  updateDashboardStats();

  renderLessons();

  showToast("Lesson completed successfully 🎉");

  openLesson();

}


/* ================= PROGRESS ================= */

function renderProgress() {

  const container = $("progressContent");

  if (!container) return;


  const total = LESSONS.length;

  const completed = completedLessons.length;

  const progress =
    Math.round((completed / total) * 100);


  let html = `

    <div class="stats-grid">

      <div class="stat-card">
        <div class="stat-icon purple">📚</div>
        <div>
          <span>Total Lessons</span>
          <strong>${total}</strong>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon green">✅</div>
        <div>
          <span>Completed</span>
          <strong>${completed}</strong>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon orange">📈</div>
        <div>
          <span>Progress</span>
          <strong>${progress}%</strong>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon pink">🎯</div>
        <div>
          <span>Remaining</span>
          <strong>${total - completed}</strong>
        </div>
      </div>

    </div>

    <div class="card">

      <div class="card-header">
        <div>
          <span class="eyebrow">OVERALL PROGRESS</span>
          <h3>Academy Learning Progress</h3>
        </div>

        <strong>${progress}%</strong>
      </div>

      <div class="large-progress">
        <div
          class="progress-bar"
          style="width:${progress}%"
        ></div>
      </div>

    </div>

  `;


  COURSES.forEach(course => {

    const p = courseProgress(course);

    html += `

      <div class="card">

        <div class="card-header">

          <div>
            <span class="eyebrow">
              ${escapeHTML(course.category)}
            </span>

            <h3>
              ${escapeHTML(course.title)}
            </h3>
          </div>

          <strong>${p}%</strong>

        </div>

        <div class="progress">
          <div
            class="progress-bar"
            style="width:${p}%"
          ></div>
        </div>

      </div>

    `;

  });


  container.innerHTML = html;

}


function updateDashboardStats() {

  const completed = completedLessons.length;

  const total = LESSONS.length;

  const progress =
    Math.round((completed / total) * 100);


  if ($("statCourses")) {
    $("statCourses").textContent =
      COURSES.length;
  }

  if ($("statLessons")) {
    $("statLessons").textContent =
      LESSONS.length;
  }

  if ($("statCompleted")) {
    $("statCompleted").textContent =
      completed;
  }

  if ($("statProgress")) {
    $("statProgress").textContent =
      progress + "%";
  }


  const course =
    COURSES[0];

  const courseP =
    courseProgress(course);


  if ($("currentCourseProgress")) {
    $("currentCourseProgress").textContent =
      courseP + "%";
  }

  if ($("currentCourseBar")) {
    $("currentCourseBar").style.width =
      courseP + "%";
  }

}


/* =========================================================
   SALES MANAGER PROFESSIONAL MODULE
========================================================= */

function renderSales() {

  calculateSalesKPI();

  renderTeamPerformance();

  renderActionPlans();

}


function calculateSalesKPI() {

  const target =
    Number(salesData.target) || 0;

  const actual =
    Number(salesData.actual) || 0;

  const days =
    Number(salesData.workingDays) || 1;


  const achievement =
    target > 0
      ? (actual / target) * 100
      : 0;


  const gap =
    Math.max(target - actual, 0);


  const dailyTarget =
    target / days;


  $("salesTargetDisplay").textContent =
    formatMoney(target);

  $("salesActualDisplay").textContent =
    formatMoney(actual);

  $("salesAchievementDisplay").textContent =
    achievement.toFixed(1) + "%";

  $("salesGapDisplay").textContent =
    formatMoney(gap);


  $("bigAchievement").textContent =
    achievement.toFixed(1) + "%";


  $("salesProgressBar").style.width =
    Math.min(achievement, 100) + "%";


  $("performanceActual").textContent =
    formatShortMoney(actual);

  $("performanceTarget").textContent =
    formatShortMoney(target);

  $("performanceGap").textContent =
    formatShortMoney(gap);


  $("dailyTargetDisplay").textContent =
    formatMoney(dailyTarget);


  const status =
    $("achievementStatus");


  status.className =
    "status-badge";


  if (achievement >= 100) {

    status.classList.add("success");

    status.textContent =
      "Target Achieved";

    $("managerTip").textContent =
      "Excellent performance. Focus on exceeding the target and sustaining team momentum.";

  }

  else if (achievement >= 75) {

    status.classList.add("warning");

    status.textContent =
      "On Track";

    $("managerTip").textContent =
      "Focus on closing the remaining gap and improving team execution.";

  }

  else {

    status.classList.add("danger");

    status.textContent =
      "Needs Attention";

    $("managerTip").textContent =
      "Achievement is below 75%. Review territory, team and customer execution immediately.";

  }

}


function saveSalesKPI() {

  const target =
    Number($("salesTargetInput").value);

  const actual =
    Number($("salesActualInput").value);

  const days =
    Number($("workingDaysInput").value);


  if (!target || target <= 0) {

    showToast("Monthly Target ထည့်ပါ");

    return;

  }


  if (actual < 0) {

    showToast("Actual Sales မှားနေပါတယ်");

    return;

  }


  if (!days || days <= 0) {

    showToast("Working Days ထည့်ပါ");

    return;

  }


  salesData.target = target;

  salesData.actual = actual;

  salesData.workingDays = days;


  saveSalesData();

  calculateSalesKPI();

  showToast("Sales KPI saved successfully ✓");

}


function renderTeamPerformance() {

  const body =
    $("teamPerformanceBody");

  if (!body) return;


  if (!salesData.team.length) {

    body.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center;color:#888;">
          Team member မရှိသေးပါ။
        </td>
      </tr>
    `;

    return;

  }


  body.innerHTML =
    salesData.team.map(member => {

      const achievement =
        member.target > 0
          ? (member.actual / member.target) * 100
          : 0;


      let status =
        "Needs Attention";

      let className =
        "team-danger";


      if (achievement >= 100) {

        status = "Excellent";

        className = "team-good";

      }

      else if (achievement >= 75) {

        status = "On Track";

        className = "team-warning";

      }


      return `

        <tr>

          <td>
            <span class="team-name">
              ${escapeHTML(member.name)}
            </span>
          </td>

          <td>
            <span class="team-role">
              ${escapeHTML(member.role)}
            </span>
          </td>

          <td>
            ${formatShortMoney(member.target)}
          </td>

          <td>
            ${formatShortMoney(member.actual)}
          </td>

          <td>
            <span class="team-achievement ${className}">
              ${achievement.toFixed(1)}%
            </span>
          </td>

          <td>
            <span class="${className}">
              ${status}
            </span>
          </td>

          <td>

            <button
              class="table-delete"
              onclick="removeTeamMember(${member.id})"
            >
              ×
            </button>

          </td>

        </tr>

      `;

    }).join("");

}


function openAddTeamMember() {

  const html = `

    <h3>Add Team Member</h3>

    <p>
      Team performance ကို track လုပ်ဖို့
      member information ထည့်ပါ။
    </p>

    <div class="modal-form">

      <label>Name</label>

      <input
        id="newTeamName"
        placeholder="ဥပမာ - Aung Aung"
      >

      <label>Role</label>

      <input
        id="newTeamRole"
        placeholder="Sales Executive"
      >

      <label>Target (MMK)</label>

      <input
        id="newTeamTarget"
        type="number"
        placeholder="5000000"
      >

      <label>Actual (MMK)</label>

      <input
        id="newTeamActual"
        type="number"
        placeholder="3500000"
      >

      <button
        class="btn primary"
        onclick="addTeamMember()"
      >
        Add Team Member
      </button>

    </div>

  `;


  openModal(html);

}


function addTeamMember() {

  const name =
    $("newTeamName").value.trim();

  const role =
    $("newTeamRole").value.trim();

  const target =
    Number($("newTeamTarget").value);

  const actual =
    Number($("newTeamActual").value);


  if (!name || !role || !target) {

    showToast("Team member information အပြည့်အစုံထည့်ပါ");

    return;

  }


  salesData.team.push({

    id: Date.now(),

    name,

    role,

    target,

    actual: actual || 0

  });


  saveSalesData();

  closeModal();

  renderTeamPerformance();

  showToast("Team member added ✓");

}


function removeTeamMember(id) {

  const confirmed =
    confirm("ဒီ team member ကိုဖျက်မလား?");

  if (!confirmed) return;


  salesData.team =
    salesData.team.filter(
      member => member.id !== id
    );


  saveSalesData();

  renderTeamPerformance();

  showToast("Team member removed");

}


/* ================= ACTION PLAN ================= */

function renderActionPlans() {

  const container =
    $("actionPlanList");

  if (!container) return;


  if (!salesData.actions.length) {

    container.innerHTML = `
      <div class="calc-result">
        Action plan မရှိသေးပါ။
      </div>
    `;

    return;

  }


  container.innerHTML =
    salesData.actions.map(action => {

      return `

        <div class="action-item">

          <button
            class="action-check ${action.done ? "done" : ""}"
            onclick="toggleActionPlan(${action.id})"
          >
            ${action.done ? "✓" : ""}
          </button>

          <div class="action-content">

            <strong
              style="${
                action.done
                  ? "text-decoration:line-through;color:#999;"
                  : ""
              }"
            >
              ${escapeHTML(action.title)}
            </strong>

            <small>
              Owner: ${escapeHTML(action.owner)}
              • Due: ${escapeHTML(action.due)}
            </small>

          </div>

          <button
            class="action-delete"
            onclick="deleteActionPlan(${action.id})"
          >
            ×
          </button>

        </div>

      `;

    }).join("");

}


function openActionPlanForm() {

  const html = `

    <h3>Add Action Plan</h3>

    <p>
      Sales target ရဖို့ လုပ်ဆောင်ရမယ့် action ကို ထည့်ပါ။
    </p>

    <div class="modal-form">

      <label>Action</label>

      <input
        id="actionTitle"
        placeholder="ဥပမာ - Top customers visit"
      >

      <label>Owner</label>

      <input
        id="actionOwner"
        placeholder="Sales Manager"
      >

      <label>Due</label>

      <input
        id="actionDue"
        placeholder="Friday"
      >

      <button
        class="btn primary"
        onclick="addActionPlan()"
      >
        Add Action Plan
      </button>

    </div>

  `;


  openModal(html);

}


function addActionPlan() {

  const title =
    $("actionTitle").value.trim();

  const owner =
    $("actionOwner").value.trim() ||
    "Sales Manager";

  const due =
    $("actionDue").value.trim() ||
    "This Week";


  if (!title) {

    showToast("Action Plan ရေးပါ");

    return;

  }


  salesData.actions.push({

    id: Date.now(),

    title,

    owner,

    due,

    done: false

  });


  saveSalesData();

  closeModal();

  renderActionPlans();

  showToast("Action Plan added ✓");

}


function toggleActionPlan(id) {

  const action =
    salesData.actions.find(
      item => item.id === id
    );

  if (!action) return;


  action.done =
    !action.done;


  saveSalesData();

  renderActionPlans();

}


function deleteActionPlan(id) {

  salesData.actions =
    salesData.actions.filter(
      action => action.id !== id
    );


  saveSalesData();

  renderActionPlans();

  showToast("Action Plan deleted");

}


function resetSalesData() {

  const confirmed =
    confirm(
      "Sales Manager data အားလုံးကို default ပြန်ထားမလား?"
    );

  if (!confirmed) return;


  salesData =
    JSON.parse(
      JSON.stringify(DEFAULT_SALES_DATA)
    );


  saveSalesData();

  renderSales();

  showToast("Sales Manager reset complete");

}


function exportSalesReport() {

  const target =
    salesData.target;

  const actual =
    salesData.actual;

  const achievement =
    target
      ? ((actual / target) * 100).toFixed(1)
      : 0;

  const gap =
    Math.max(target - actual, 0);


  const reportWindow =
    window.open("", "_blank");


  if (!reportWindow) {

    showToast("Popup blocked. Please allow popups.");

    return;

  }


  reportWindow.document.write(`

    <!DOCTYPE html>

    <html>

    <head>

      <title>Aung Business Academy - Sales Report</title>

      <style>

        body {
          font-family: Arial, sans-serif;
          padding: 40px;
          color: #172033;
        }

        h1 {
          margin-bottom: 5px;
        }

        .date {
          color: #777;
          margin-bottom: 30px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }

        th {
          background: #f5f5f5;
        }

        .summary {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 10px;
        }

        .box {
          border: 1px solid #ddd;
          padding: 15px;
        }

        .box strong {
          display: block;
          font-size: 20px;
          margin-top: 8px;
        }

      </style>

    </head>

    <body>

      <h1>AUNG BUSINESS ACADEMY</h1>

      <h2>Sales Manager Performance Report</h2>

      <div class="date">
        Generated: ${new Date().toLocaleDateString()}
      </div>


      <div class="summary">

        <div class="box">
          Monthly Target
          <strong>${formatMoney(target)}</strong>
        </div>

        <div class="box">
          Actual Sales
          <strong>${formatMoney(actual)}</strong>
        </div>

        <div class="box">
          Achievement
          <strong>${achievement}%</strong>
        </div>

        <div class="box">
          Sales Gap
          <strong>${formatMoney(gap)}</strong>
        </div>

      </div>


      <h3>Team Performance</h3>

      <table>

        <thead>

          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Target</th>
            <th>Actual</th>
            <th>Achievement</th>
          </tr>

        </thead>

        <tbody>

          ${
            salesData.team.map(member => {

              const p =
                member.target
                  ? (
                    member.actual /
                    member.target *
                    100
                  ).toFixed(1)
                  : 0;

              return `

                <tr>

                  <td>
                    ${escapeHTML(member.name)}
                  </td>

                  <td>
                    ${escapeHTML(member.role)}
                  </td>

                  <td>
                    ${formatMoney(member.target)}
                  </td>

                  <td>
                    ${formatMoney(member.actual)}
                  </td>

                  <td>
                    ${p}%
                  </td>

                </tr>

              `;

            }).join("")

          }

        </tbody>

      </table>


      <script>
        window.onload = function() {
          window.print();
        };
      <\/script>

    </body>

    </html>

  `);

  reportWindow.document.close();

}


/* ================= CALCULATORS ================= */

function openProfitCalculator() {

  navigate("calculatorPage");

  setTimeout(() => {

    document
      .querySelector("#profitRevenue")
      ?.focus();

  }, 100);

}


function openPricingCalculator() {

  navigate("calculatorPage");

  setTimeout(() => {

    document
      .querySelector("#pricingCost")
      ?.focus();

  }, 100);

}


function openBreakEvenCalculator() {

  navigate("calculatorPage");

  setTimeout(() => {

    document
      .querySelector("#breakFixed")
      ?.focus();

  }, 100);

}


function openSalesTargetCalculator() {

  navigate("calculatorPage");

  setTimeout(() => {

    document
      .querySelector("#targetMonthly")
      ?.focus();

  }, 100);

}


function calculateProfitTool() {

  const revenue =
    Number($("profitRevenue").value);

  const cost =
    Number($("profitCost").value);


  if (!revenue || revenue < 0) {

    $("profitResult").textContent =
      "Revenue ထည့်ပါ";

    return;

  }


  const profit =
    revenue - cost;


  const margin =
    revenue > 0
      ? (profit / revenue) * 100
      : 0;


  $("profitResult").innerHTML = `
    Profit: ${formatMoney(profit)}
    <br>
    Margin: ${margin.toFixed(1)}%
  `;

}


function calculatePricingTool() {

  const cost =
    Number($("pricingCost").value);

  const margin =
    Number($("pricingMargin").value);


  if (!cost || margin < 0) {

    $("pricingResult").textContent =
      "Cost နှင့် Margin ထည့်ပါ";

    return;

  }


  if (margin >= 100) {

    $("pricingResult").textContent =
      "Margin 100% အောက်ဖြစ်ရပါမယ်";

    return;

  }


  const price =
    cost / (1 - margin / 100);


  const markup =
    ((price - cost) / cost) * 100;


  $("pricingResult").innerHTML = `
    Selling Price:
    ${formatMoney(price)}
    <br>
    Markup: ${markup.toFixed(1)}%
  `;

}


function calculateBreakEven() {

  const fixed =
    Number($("breakFixed").value);

  const price =
    Number($("breakPrice").value);

  const variable =
    Number($("breakVariable").value);


  if (!fixed || !price) {

    $("breakResult").textContent =
      "Values အားလုံးထည့်ပါ";

    return;

  }


  const contribution =
    price - variable;


  if (contribution <= 0) {

    $("breakResult").textContent =
      "Price must be higher than variable cost";

    return;

  }


  const units =
    fixed / contribution;


  const revenue =
    units * price;


  $("breakResult").innerHTML = `
    Break-even Units:
    ${Math.ceil(units).toLocaleString()}
    <br>
    Break-even Sales:
    ${formatMoney(revenue)}
  `;

}


function calculateSalesTarget() {

  const monthly =
    Number($("targetMonthly").value);

  const days =
    Number($("targetDays").value);


  if (!monthly || !days) {

    $("targetResult").textContent =
      "Monthly Target နှင့် Working Days ထည့်ပါ";

    return;

  }


  const daily =
    monthly / days;


  $("targetResult").innerHTML = `
    Daily Target:
    ${formatMoney(daily)}
    <br>
    Weekly Approx:
    ${formatMoney(daily * 7)}
  `;

}


/* ================= REPORTS ================= */

function renderReports() {

  const container =
    $("reportsContent");

  if (!container) return;


  const target =
    salesData.target;

  const actual =
    salesData.actual;

  const achievement =
    target
      ? (actual / target * 100)
      : 0;


  container.innerHTML = `

    <div class="sales-kpi-grid">

      <div class="sales-kpi">
        <span>Sales Target</span>
        <strong>${formatMoney(target)}</strong>
      </div>

      <div class="sales-kpi">
        <span>Actual Sales</span>
        <strong>${formatMoney(actual)}</strong>
      </div>

      <div class="sales-kpi">
        <span>Achievement</span>
        <strong>${achievement.toFixed(1)}%</strong>
      </div>

      <div class="sales-kpi">
        <span>Team Members</span>
        <strong>${salesData.team.length}</strong>
      </div>

    </div>

    <div class="card">

      <div class="card-header">

        <div>
          <span class="eyebrow">MANAGEMENT SUMMARY</span>
          <h3>Sales Performance Summary</h3>
        </div>

        <button
          class="btn primary"
          onclick="exportSalesReport()"
        >
          Print Report
        </button>

      </div>

      <p>
        Monthly target achievement is
        <strong>${achievement.toFixed(1)}%</strong>.
        Remaining sales gap is
        <strong>${formatMoney(
          Math.max(target - actual, 0)
        )}</strong>.
      </p>

    </div>

  `;

}


/* ================= AI BUSINESS COACH ================= */

function sendAIMessage() {

  const input =
    $("aiInput");

  const message =
    input.value.trim();


  if (!message) return;


  addAIMessage(
    message,
    "user"
  );


  input.value = "";


  setTimeout(() => {

    const response =
      getAIResponse(message);

    addAIMessage(
      response,
      "ai"
    );

  }, 400);

}


function addAIMessage(text, type) {

  const container =
    $("aiMessages");

  if (!container) return;


  if (type === "user") {

    container.innerHTML += `

      <div
        class="ai-message"
        style="justify-content:flex-end;"
      >

        <div
          class="message-content"
          style="background:#eeeaff;"
        >
          <p>${escapeHTML(text)}</p>
        </div>

      </div>

    `;

  } else {

    container.innerHTML += `

      <div class="ai-message">

        <div class="ai-avatar">
          AI
        </div>

        <div class="message-content">

          <strong>
            AI Business Coach
          </strong>

          <p>
            ${escapeHTML(text)}
          </p>

        </div>

      </div>

    `;

  }


  container.scrollTop =
    container.scrollHeight;

}


function getAIResponse(message) {

  const text =
    message.toLowerCase();


  if (
    text.includes("sales") ||
    text.includes("ရောင်း")
  ) {

    return "Sales တိုးချင်ရင် Target → Gap Analysis → Customer Priority → Team Coaching → Daily Action Plan ဆိုတဲ့ flow နဲ့ လုပ်ပါ။";

  }


  if (
    text.includes("team") ||
    text.includes("ဝန်ထမ်း")
  ) {

    return "Team management မှာ clear expectation ပေးပြီး regular review, coaching, feedback နဲ့ accountability ကို အဓိကထားပါ။";

  }


  if (
    text.includes("marketing") ||
    text.includes("စျေးကွက်")
  ) {

    return "Marketing မှာ Customer ဘယ်သူလဲ၊ ဘာလိုချင်လဲ၊ ဘာ value ပေးနိုင်လဲ၊ ဘယ် channel ကနေ ရောက်မလဲဆိုတာ အရင်သတ်မှတ်ပါ။";

  }


  if (
    text.includes("profit") ||
    text.includes("အမြတ်")
  ) {

    return "Profit တိုးဖို့ Revenue တိုးတာအပြင် Cost Control, Pricing, Product Mix နဲ့ Gross Margin ကိုလည်း စောင့်ကြည့်ပါ။";

  }


  if (
    text.includes("target") ||
    text.includes("ပစ်မှတ်")
  ) {

    return "Target ကို Monthly → Weekly → Daily အဖြစ်ခွဲပြီး လူ၊ customer, territory နဲ့ action plan တွေနဲ့ ချိတ်ဆက်ပါ။";

  }


  return "သင့်ပြဿနာကို Target, People, Numbers နဲ့ Execution ဆိုပြီး ၄ ပိုင်းခွဲပြီး စဉ်းစားကြည့်ပါ။ Data ရှိရင် ပိုပြီး practical ဖြစ်အောင် plan ဆွဲနိုင်ပါတယ်။";

}


function openAITool(tool) {

  navigate("aiPage");


  const input =
    $("aiInput");


  if (input) {

    input.value =
      tool + " အတွက် practical plan တစ်ခု ဆွဲပေးပါ။";

    sendAIMessage();

  }

}


/* ================= TOOLS ================= */

function openTools() {

  navigate("toolsPage");

}


/* ================= PROFILE ================= */

function openProfile() {

  const html = `

    <h3>My Profile</h3>

    <div class="profile-mini">

      <div class="avatar">
        AZ
      </div>

      <div>
        <strong>Aung Zar Ni Win</strong>
        <small>Business Manager</small>
      </div>

    </div>

    <div class="calc-result">

      Aung Business Academy

      <br><br>

      Status: Professional

      <br>

      Learning Language: Burmese

    </div>

  `;


  openModal(html);

}


/* ================= NOTIFICATION ================= */

function showNotification() {

  openModal(`

    <h3>Notifications</h3>

    <p>
      🎯 Sales Manager module is ready.
    </p>

    <p>
      📚 Continue your academy lessons.
    </p>

    <p>
      🚀 Keep building your business skills.
    </p>

  `);

}


/* ================= SEARCH ================= */

function performSearch() {

  const input =
    $("globalSearch");

  if (!input) return;


  const query =
    input.value.trim().toLowerCase();


  if (!query) return;


  const result =
    LESSONS.find(
      lesson =>
        lesson.title
          .toLowerCase()
          .includes(query) ||
        lesson.category
          .toLowerCase()
          .includes(query)
    );


  if (result) {

    showToast(
      `Found: ${result.title}`
    );

  }

}


/* ================= SIDEBAR ================= */

function toggleSidebar() {

  const sidebar =
    $("sidebar");

  if (!sidebar) return;

  sidebar.classList.toggle("open");

}


function openSidebar() {

  $("sidebar")?.classList.add("open");

}


function closeSidebar() {

  $("sidebar")?.classList.remove("open");

}


/* ================= MODAL ================= */

function openModal(content) {

  $("modalBody").innerHTML =
    content;

  $("modalOverlay").classList.add("show");

}


function closeModal() {

  $("modalOverlay")
    .classList.remove("show");

}


function showToast(message) {

  const toast =
    $("toast");

  if (!toast) return;


  toast.textContent =
    message;

  toast.classList.add("show");


  clearTimeout(
    window.toastTimer
  );


  window.toastTimer =
    setTimeout(() => {

      toast.classList.remove("show");

    }, 2500);

}


/* ================= LOGOUT ================= */

function logoutUser() {

  showToast(
    "Logout system will be connected with account system later."
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


  const overlay =
    $("modalOverlay");

  if (overlay) {

    overlay.addEventListener(
      "click",
      function(event) {

        if (
          event.target === overlay
        ) {

          closeModal();

        }

      }
    );

  }

}


document.addEventListener(
  "DOMContentLoaded",
  initializeApp
);


/* ================= GLOBAL EXPORT ================= */

window.navigate = navigate;

window.goDashboard = goDashboard;

window.openLessons = openLessons;

window.continueLearning = continueLearning;

window.openBusinessPlan = openBusinessPlan;

window.openCategory = openCategory;

window.openCourse = openCourse;

window.openLessonById = openLessonById;

window.openLesson = openLesson;

window.previousLesson = previousLesson;

window.nextLesson = nextLesson;

window.completeLesson = completeLesson;

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


/* SALES */

window.renderSales =
  renderSales;

window.saveSalesKPI =
  saveSalesKPI;

window.openAddTeamMember =
  openAddTeamMember;

window.addTeamMember =
  addTeamMember;

window.removeTeamMember =
  removeTeamMember;

window.openActionPlanForm =
  openActionPlanForm;

window.addActionPlan =
  addActionPlan;

window.toggleActionPlan =
  toggleActionPlan;

window.deleteActionPlan =
  deleteActionPlan;

window.resetSalesData =
  resetSalesData;

window.exportSalesReport =
  exportSalesReport;
