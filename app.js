// ======================================================
// AUNG BUSINESS ACADEMY V8
// BUSINESS + SALES + MARKETING + LEADERSHIP
// ======================================================

const STORAGE_KEY = "aungBusinessAcademyV8";


// ======================================================
// COURSE DATA
// ======================================================

const COURSES = [

  {
    id: "sales",
    title: "Sales Management Mastery",
    category: "sales",
    icon: "↗",
    color: "blue",
    description:
      "Master sales planning, team coaching, territory management and performance management.",
    lessons: [

      {
        title: "Sales Target Planning",
        content:
          "A strong Sales Manager converts company objectives into clear field targets. Start with historical performance, market potential, territory capacity and salesperson capability. Break monthly targets into weekly and daily execution plans."
      },

      {
        title: "Team Coaching",
        content:
          "Effective coaching focuses on people, numbers and execution. Identify performance gaps, observe field behavior, provide practical feedback and agree on clear action plans. Coaching should develop ownership rather than create dependency."
      },

      {
        title: "Territory Management",
        content:
          "Territory management means putting the right resources in the right market. Analyze outlet potential, customer coverage, distribution, competitor activity and sales productivity. Use territory priorities to improve market penetration."
      },

      {
        title: "Performance Review",
        content:
          "A professional performance review should compare target versus actual, identify the reasons behind gaps and define corrective actions. Review KPIs regularly and use data to make decisions rather than assumptions."
      }

    ]
  },


  {
    id: "business",
    title: "Business Foundation",
    category: "business",
    icon: "◆",
    color: "green",
    description:
      "Understand the fundamentals of customers, value creation, profit and cash flow.",
    lessons: [

      {
        title: "Business Fundamentals",
        content:
          "Every business needs customers, value, revenue and sustainable profit. Managers should understand how people, processes, products and financial performance connect to create business results."
      },

      {
        title: "Customer & Value",
        content:
          "Customers buy solutions, not simply products. Identify customer needs, pain points and buying behavior. A strong value proposition explains why customers should choose your product or service."
      },

      {
        title: "Profit & Cash Flow",
        content:
          "Revenue alone does not guarantee a healthy business. Managers should understand gross profit, operating costs, margin, receivables and cash flow. Better decisions balance growth with profitability."
      }

    ]
  },


  {
    id: "marketing",
    title: "Marketing & Growth",
    category: "marketing",
    icon: "◎",
    color: "orange",
    description:
      "Learn customer-focused marketing, growth strategies and campaign measurement.",
    lessons: [

      {
        title: "Marketing Basics",
        content:
          "Marketing starts with understanding the customer and market. Define your target customer, positioning, value proposition and competitive advantage before building campaigns."
      },

      {
        title: "Digital Growth",
        content:
          "Digital channels can create awareness, engagement and customer acquisition. Choose channels based on customer behavior and business objectives rather than simply following trends."
      },

      {
        title: "Campaign Measurement",
        content:
          "Measure marketing performance using clear KPIs. Track reach, engagement, leads, conversion, acquisition cost and revenue contribution. Use results to improve the next campaign."
      }

    ]
  },


  {
    id: "leadership",
    title: "Leadership & Team Management",
    category: "leadership",
    icon: "★",
    color: "purple",
    description:
      "Develop leadership, coaching, accountability and high-performance team management.",
    lessons: [

      {
        title: "Leadership Fundamentals",
        content:
          "Leadership means creating direction, clarity and accountability. Set clear expectations, communicate priorities and create an environment where people understand both responsibility and ownership."
      },

      {
        title: "Coaching & Empowerment",
        content:
          "Great managers do not micromanage. They coach people to solve problems, make decisions and improve their capabilities. Empowerment works best when expectations and accountability are clear."
      },

      {
        title: "Performance Management",
        content:
          "Performance management requires clear KPIs, regular reviews, constructive feedback and action plans. Address performance issues early and support employees with practical development plans."
      },

      {
        title: "Team Motivation",
        content:
          "Motivation comes from meaningful goals, recognition, growth opportunities, fairness and trust. Understand individual drivers while keeping the team aligned around shared business objectives."
      }

    ]
  }

];


// ======================================================
// STATE
// ======================================================

function createDefaultState() {

  return {

    user: {
      name: "Aung Zar Ni Win",
      role: "Business Manager"
    },

    currentCourseId: "sales",

    currentLessonIndex: 0,

    completedLessons: [],

    streak: 0,

    dailyGoal: {
      target: 30,
      minutes: 0
    },

    sales: {
      target: 100,
      actual: 0,
      priorities: [
        "Review team sales performance",
        "Visit priority customers",
        "Follow up on sales gaps"
      ],
      history: [65, 72, 68, 80, 75, 88, 92]
    },

    settings: {
      reminder: true,
      tracking: true
    },

    activity: [],

    calculator: {
      product: "Product",
      cost: 10000,
      margin: 20
    }

  };

}


let state = loadState();


// ======================================================
// STORAGE
// ======================================================

function loadState() {

  try {

    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return createDefaultState();
    }

    return {
      ...createDefaultState(),
      ...JSON.parse(saved)
    };

  } catch (error) {

    console.error(error);

    return createDefaultState();

  }

}


function saveState() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
  );

}


// ======================================================
// HELPERS
// ======================================================

function getTotalLessons() {

  return COURSES.reduce(
    (total, course) => total + course.lessons.length,
    0
  );

}


function getCompletedCount() {

  return state.completedLessons.length;

}


function getOverallProgress() {

  const total = getTotalLessons();

  if (!total) return 0;

  return Math.round(
    (getCompletedCount() / total) * 100
  );

}


function getCourseProgress(courseId) {

  const course = COURSES.find(
    item => item.id === courseId
  );

  if (!course) return 0;

  const completed = course.lessons.filter(
    (_, index) =>
      state.completedLessons.includes(
        `${courseId}-${index}`
      )
  ).length;

  return Math.round(
    (completed / course.lessons.length) * 100
  );

}


function getCourseCompleted(courseId) {

  const course = COURSES.find(
    item => item.id === courseId
  );

  if (!course) return 0;

  return course.lessons.filter(
    (_, index) =>
      state.completedLessons.includes(
        `${courseId}-${index}`
      )
  ).length;

}


function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


// ======================================================
// NAVIGATION
// ======================================================

const pages = [
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


function navigate(page) {

  if (!pages.includes(page)) return;

  document.querySelectorAll(".page").forEach(
    item => item.classList.remove("active")
  );

  document
    .getElementById(`page-${page}`)
    ?.classList.add("active");


  document.querySelectorAll(".nav-item").forEach(
    item => {

      item.classList.toggle(
        "active",
        item.dataset.page === page
      );

    }
  );


  const names = {
    dashboard: "Dashboard",
    courses: "My Courses",
    lessons: "Lessons",
    progress: "My Progress",
    sales: "Sales Manager",
    calculator: "Pricing Calculator",
    reports: "Reports",
    "ai-coach": "AI Business Coach",
    "ai-tools": "AI Tools",
    settings: "Settings"
  };


  document.getElementById(
    "breadcrumbCurrent"
  ).textContent = names[page];


  if (page === "dashboard") renderDashboard();

  if (page === "courses") renderCourses();

  if (page === "lessons") renderLessons();

  if (page === "progress") renderProgress();

  if (page === "sales") renderSales();

  if (page === "calculator") renderCalculator();

  if (page === "reports") renderReports();

  closeSidebar();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ======================================================
// DASHBOARD
// ======================================================

function renderDashboard() {

  const total = getTotalLessons();
  const completed = getCompletedCount();
  const progress = getOverallProgress();

  document.getElementById("statCourses")
    .textContent = COURSES.length;

  document.getElementById("statLessons")
    .textContent = total;

  document.getElementById("statCompleted")
    .textContent = completed;

  document.getElementById("statProgress")
    .textContent = `${progress}%`;


  const course =
    COURSES.find(
      item => item.id === state.currentCourseId
    ) || COURSES[0];


  const courseProgress =
    getCourseProgress(course.id);

  const courseCompleted =
    getCourseCompleted(course.id);


  document.getElementById(
    "dashboardCourseTitle"
  ).textContent = course.title;


  document.getElementById(
    "dashboardCourseDescription"
  ).textContent = course.description;


  document.getElementById(
    "dashboardProgressText"
  ).textContent =
    `${courseCompleted} of ${course.lessons.length} lessons`;


  document.getElementById(
    "dashboardProgressPercent"
  ).textContent =
    `${courseProgress}%`;


  document.getElementById(
    "dashboardProgressBar"
  ).style.width =
    `${courseProgress}%`;


  document.getElementById(
    "goalMinutes"
  ).textContent =
    `${state.dailyGoal.minutes} / ${state.dailyGoal.target} min`;


  const goal =
    Math.min(
      100,
      Math.round(
        (state.dailyGoal.minutes /
          state.dailyGoal.target) * 100
      )
    );


  document.getElementById(
    "goalPercent"
  ).textContent = `${goal}%`;


  renderActivity();

}


function renderActivity() {

  const container =
    document.getElementById("activityList");


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
            <strong>${escapeHTML(item.title)}</strong>
            <span>${escapeHTML(item.course)}</span>
          </div>

          <small>${escapeHTML(item.time)}</small>

        </div>
      `)
      .join("");

}


// ======================================================
// COURSES
// ======================================================

function renderCourses(filter = "all") {

  const container =
    document.getElementById("coursesGrid");


  const courses =
    filter === "all"
      ? COURSES
      : COURSES.filter(
          course => course.category === filter
        );


  container.innerHTML =
    courses.map(course => {

      const progress =
        getCourseProgress(course.id);

      const completed =
        getCourseCompleted(course.id);


      return `
        <div class="course-card">

          <div class="course-card-top">

            <div class="course-icon ${course.color}">
              ${course.icon}
            </div>

            <span class="course-badge ${course.category}">
              ${course.category.toUpperCase()}
            </span>

          </div>

          <h2>${course.title}</h2>

          <p>${course.description}</p>

          <div class="course-meta">
            <span>▣ ${course.lessons.length} Lessons</span>
            <strong>${progress}%</strong>
          </div>

          <div class="progress-bar">
            <div
              class="progress-fill ${course.color}-fill"
              style="width:${progress}%"
            ></div>
          </div>

          <div class="course-card-footer">

            <span>
              ${completed}/${course.lessons.length} completed
            </span>

            <button
              class="secondary-btn open-course"
              data-course="${course.id}"
            >
              ${progress > 0 ? "Continue" : "Start Course"}
            </button>

          </div>

        </div>
      `;

    }).join("");


  document.querySelectorAll(".open-course")
    .forEach(button => {

      button.addEventListener("click", () => {

        state.currentCourseId =
          button.dataset.course;

        state.currentLessonIndex = 0;

        saveState();

        navigate("lessons");

      });

    });

}


// ======================================================
// LESSONS
// ======================================================

function renderLessons() {

  const courseList =
    document.getElementById("lessonCourseList");

  const content =
    document.getElementById("lessonContent");


  courseList.innerHTML =
    COURSES.map(course => {

      const progress =
        getCourseProgress(course.id);

      return `
        <button
          class="lesson-course-item
          ${state.currentCourseId === course.id ? "active" : ""}"
          data-course="${course.id}"
        >

          <div class="lesson-course-icon ${course.color}">
            ${course.icon}
          </div>

          <div class="lesson-course-info">

            <strong>${course.title}</strong>

            <span>
              ${getCourseCompleted(course.id)}
              /${course.lessons.length} completed
            </span>

            <div class="mini-progress">
              <div
                style="width:${progress}%"
              ></div>
            </div>

          </div>

        </button>
      `;

    }).join("");


  document.querySelectorAll(".lesson-course-item")
    .forEach(button => {

      button.addEventListener("click", () => {

        state.currentCourseId =
          button.dataset.course;

        state.currentLessonIndex = 0;

        saveState();

        renderLessons();

      });

    });


  const course =
    COURSES.find(
      item => item.id === state.currentCourseId
    ) || COURSES[0];


  const index =
    Math.min(
      state.currentLessonIndex,
      course.lessons.length - 1
    );


  const lesson =
    course.lessons[index];


  const lessonKey =
    `${course.id}-${index}`;


  const completed =
    state.completedLessons.includes(
      lessonKey
    );


  content.innerHTML = `

    <div class="lesson-content-header">

      <div>
        <span class="lesson-number">
          LESSON ${index + 1}
        </span>

        <h2>${lesson.title}</h2>

        <p>${course.title}</p>
      </div>

      <span class="course-badge ${course.category}">
        ${course.category.toUpperCase()}
      </span>

    </div>


    <div class="lesson-body">

      <div class="lesson-visual ${course.color}">
        ${course.icon}
      </div>

      <h3>${lesson.title}</h3>

      <p>
        ${lesson.content}
      </p>

      <div class="lesson-tip">

        <strong>Manager Tip</strong>

        <span>
          Apply this concept to a real business situation
          and turn the idea into a measurable action.
        </span>

      </div>

    </div>


    <div class="lesson-footer">

      <button
        class="secondary-btn"
        id="previousLessonBtn"
        ${index === 0 ? "disabled" : ""}
      >
        ← Previous
      </button>

      <button
        class="primary-btn"
        id="completeLessonBtn"
      >
        ${
          completed
            ? "✓ Completed"
            : "Mark as Complete"
        }
      </button>

      <button
        class="secondary-btn"
        id="nextLessonBtn"
        ${index === course.lessons.length - 1 ? "disabled" : ""}
      >
        Next →
      </button>

    </div>
  `;


  document
    .getElementById("previousLessonBtn")
    ?.addEventListener("click", () => {

      if (index > 0) {

        state.currentLessonIndex =
          index - 1;

        saveState();

        renderLessons();

      }

    });


  document
    .getElementById("nextLessonBtn")
    ?.addEventListener("click", () => {

      if (index < course.lessons.length - 1) {

        state.currentLessonIndex =
          index + 1;

        saveState();

        renderLessons();

      }

    });


  document
    .getElementById("completeLessonBtn")
    ?.addEventListener("click", () => {

      completeLesson(
        course.id,
        index,
        lesson.title,
        course.title
      );

    });

}


function completeLesson(
  courseId,
  index,
  lessonTitle,
  courseTitle
) {

  const key =
    `${courseId}-${index}`;


  if (!state.completedLessons.includes(key)) {

    state.completedLessons.push(key);

    state.dailyGoal.minutes =
      Math.min(
        state.dailyGoal.target,
        state.dailyGoal.minutes + 15
      );


    state.activity.unshift({

      title: lessonTitle,

      course: courseTitle,

      time: "Just now"

    });


    state.activity =
      state.activity.slice(0, 10);


    state.streak =
      Math.max(1, state.streak);


    saveState();

    showToast("Lesson completed successfully!");

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

  document.getElementById(
    "overallProgress"
  ).textContent =
    `${progress}%`;

  document.getElementById(
    "progressCompleted"
  ).textContent =
    completed;

  document.getElementById(
    "progressRemaining"
  ).textContent =
    total - completed;

  document.getElementById(
    "progressStreak"
  ).textContent =
    state.streak;


  const container =
    document.getElementById(
      "courseProgressList"
    );


  container.innerHTML =
    COURSES.map(course => {

      const p =
        getCourseProgress(course.id);

      const completedCourse =
        getCourseCompleted(course.id);


      return `
        <div class="course-progress-row">

          <div class="course-progress-name">

            <div class="small-icon ${course.color}">
              ${course.icon}
            </div>

            <div>
              <strong>${course.title}</strong>
              <span>
                ${completedCourse}/${course.lessons.length}
                lessons
              </span>
            </div>

          </div>

          <div class="course-progress-bar">
            <div>
              <span style="width:${p}%"></span>
            </div>
          </div>

          <strong>${p}%</strong>

        </div>
      `;

    }).join("");

}


// ======================================================
// SALES
// ======================================================

function renderSales() {

  const target =
    Number(state.sales.target) || 0;

  const actual =
    Number(state.sales.actual) || 0;

  const achievement =
    target > 0
      ? Math.round((actual / target) * 100)
      : 0;

  const gap =
    Math.max(target - actual, 0);


  document.getElementById(
    "salesTargetDisplay"
  ).textContent = target;

  document.getElementById(
    "salesActualDisplay"
  ).textContent = actual;

  document.getElementById(
    "salesAchievementDisplay"
  ).textContent = `${achievement}%`;

  document.getElementById(
    "salesGapDisplay"
  ).textContent = gap;


  document.getElementById(
    "salesTargetInput"
  ).value = target;

  document.getElementById(
    "salesActualInput"
  ).value = actual;


  renderSalesChart();

  renderPriorities();

}


function renderSalesChart() {

  const container =
    document.getElementById("salesChart");


  const max =
    Math.max(...state.sales.history, 100);


  container.innerHTML =
    state.sales.history.map(
      (value, index) => {

        const height =
          Math.round(
            (value / max) * 100
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
    ).join("");

}


function renderPriorities() {

  const container =
    document.getElementById("priorityList");


  container.innerHTML =
    state.sales.priorities.map(
      (item, index) => `

        <div class="priority-item">

          <div class="priority-number">
            ${index + 1}
          </div>

          <span>${escapeHTML(item)}</span>

          <button
            class="priority-delete"
            data-index="${index}"
          >
            ×
          </button>

        </div>

      `
    ).join("");


  document.querySelectorAll(".priority-delete")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          state.sales.priorities.splice(
            Number(button.dataset.index),
            1
          );

          saveState();

          renderPriorities();

          showToast("Priority removed.");

        }
      );

    });

}


// ======================================================
// CALCULATOR
// ======================================================

function calculatePrice() {

  const product =
    document.getElementById(
      "productName"
    ).value || "Product";

  const cost =
    Number(
      document.getElementById(
        "productCost"
      ).value
    ) || 0;

  const margin =
    Number(
      document.getElementById(
        "productMargin"
      ).value
    ) || 0;


  const price =
    margin >= 100
      ? 0
      : cost / (1 - margin / 100);


  const profit =
    price - cost;


  state.calculator = {
    product,
    cost,
    margin
  };


  saveState();


  document.getElementById(
    "resultProduct"
  ).textContent =
    product;


  document.getElementById(
    "resultPrice"
  ).textContent =
    formatMoney(price);


  document.getElementById(
    "resultCost"
  ).textContent =
    formatMoney(cost);


  document.getElementById(
    "resultProfit"
  ).textContent =
    formatMoney(profit);


  document.getElementById(
    "resultMargin"
  ).textContent =
    `${margin}%`;

}


function formatMoney(number) {

  return `${Math.round(number).toLocaleString()} Ks`;

}


function renderCalculator() {

  const data =
    state.calculator;


  document.getElementById(
    "productName"
  ).value =
    data.product;


  document.getElementById(
    "productCost"
  ).value =
    data.cost;


  document.getElementById(
    "productMargin"
  ).value =
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


  document.getElementById(
    "reportCourses"
  ).textContent =
    COURSES.length;

  document.getElementById(
    "reportLessons"
  ).textContent =
    total;

  document.getElementById(
    "reportCompleted"
  ).textContent =
    completed;

  document.getElementById(
    "reportStreak"
  ).textContent =
    state.streak;


  document.getElementById(
    "reportSalesTarget"
  ).textContent =
    state.sales.target;

  document.getElementById(
    "reportSalesActual"
  ).textContent =
    state.sales.actual;


  const achievement =
    state.sales.target > 0
      ? Math.round(
          state.sales.actual /
          state.sales.target *
          100
        )
      : 0;


  document.getElementById(
    "reportSalesAchievement"
  ).textContent =
    `${achievement}%`;

}


// ======================================================
// AI BUSINESS COACH
// ======================================================

function getAIResponse(question) {

  const q =
    question.toLowerCase();


  if (
    q.includes("team") ||
    q.includes("coach") ||
    q.includes("performance")
  ) {

    return `
      Start with the numbers, identify the performance gap,
      understand the root cause and create a specific action plan.
      Then coach the salesperson through regular follow-up.
      Focus on coaching and empowerment rather than micromanagement.
    `;

  }


  if (
    q.includes("customer") ||
    q.includes("retention")
  ) {

    return `
      Segment customers by value and potential. Identify your
      key customers, understand their needs, review service issues
      and create regular contact plans. Retention improves when
      customers consistently receive measurable value.
    `;

  }


  if (
    q.includes("sales") ||
    q.includes("target")
  ) {

    return `
      Break the monthly target into weekly and daily targets.
      Analyze the gap by salesperson, territory, product and customer.
      Then create three priorities: people, market and execution.
      Review progress every week.
    `;

  }


  return `
    I recommend starting with three areas: people, numbers and execution.
    Define the business objective, measure the current performance,
    identify the biggest gap and create a practical action plan.
    Review the result regularly and improve the plan based on data.
  `;

}


function sendAIMessage(question) {

  if (!question.trim()) return;


  const container =
    document.getElementById(
      "chatMessages"
    );


  container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="chat-message user">

        <div class="message-avatar">
          AZ
        </div>

        <div class="message-content">
          <strong>You</strong>
          <p>${escapeHTML(question)}</p>
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

            <strong>Business Coach</strong>

            <p>
              ${answer}
            </p>

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
      "Create a monthly sales action plan based on target, territory and team performance.",

    customer:
      "Create a customer growth and retention strategy.",

    team:
      "Create a coaching plan for an underperforming salesperson.",

    business:
      "Create a practical business growth strategy."
  };


  navigate("ai-coach");


  const input =
    document.getElementById(
      "chatInput"
    );


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
    query.trim().toLowerCase();


  if (!text) return;


  const course =
    COURSES.find(course =>
      course.title
        .toLowerCase()
        .includes(text)
    );


  if (course) {

    state.currentCourseId =
      course.id;

    state.currentLessonIndex =
      0;

    saveState();

    navigate("lessons");

    return;

  }


  for (const course of COURSES) {

    const index =
      course.lessons.findIndex(
        lesson =>
          lesson.title
            .toLowerCase()
            .includes(text)
      );


    if (index !== -1) {

      state.currentCourseId =
        course.id;

      state.currentLessonIndex =
        index;

      saveState();

      navigate("lessons");

      return;

    }

  }


  showToast("No course or lesson found.");

}


// ======================================================
// SIDEBAR
// ======================================================

function openSidebar() {

  document
    .getElementById("sidebar")
    .classList.add("open");

  document
    .getElementById("sidebarOverlay")
    .classList.add("show");

}


function closeSidebar() {

  document
    .getElementById("sidebar")
    .classList.remove("open");

  document
    .getElementById("sidebarOverlay")
    .classList.remove("show");

}


// ======================================================
// TOAST
// ======================================================

function showToast(message) {

  const toast =
    document.getElementById("toast");

  document.getElementById(
    "toastMessage"
  ).textContent =
    message;


  toast.classList.add("show");


  setTimeout(() => {

    toast.classList.remove("show");

  }, 2500);

}


// ======================================================
// EVENT LISTENERS
// ======================================================

document.addEventListener(
  "click",
  event => {

    const nav =
      event.target.closest(
        ".nav-item"
      );


    if (nav) {

      navigate(
        nav.dataset.page
      );

      return;

    }


    const go =
      event.target.closest(
        "[data-go]"
      );


    if (go) {

      navigate(
        go.dataset.go
      );

      return;

    }


    const recommendation =
      event.target.closest(
        "[data-course]"
      );


    if (
      recommendation &&
      recommendation.classList.contains(
        "recommendation-item"
      )
    ) {

      state.currentCourseId =
        recommendation.dataset.course;

      state.currentLessonIndex =
        0;

      saveState();

      navigate("lessons");

    }

  }
);


// Course filters

document.querySelectorAll(
  ".filter-tab"
).forEach(button => {

  button.addEventListener(
    "click",
    () => {

      document.querySelectorAll(
        ".filter-tab"
      ).forEach(
        item =>
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


// Continue Learning

document
  .getElementById(
    "continueLearningBtn"
  )
  .addEventListener(
    "click",
    () => {

      navigate("lessons");

    }
  );


// Sales Update

document
  .getElementById(
    "updateSalesBtn"
  )
  .addEventListener(
    "click",
    () => {

      state.sales.target =
        Number(
          document.getElementById(
            "salesTargetInput"
          ).value
        ) || 0;


      state.sales.actual =
        Number(
          document.getElementById(
            "salesActualInput"
          ).value
        ) || 0;


      state.sales.history.push(
        state.sales.actual
      );


      state.sales.history =
        state.sales.history.slice(-7);


      saveState();

      renderSales();

      renderReports();

      showToast(
        "Sales performance updated."
      );

    }
  );


// Add Priority

document
  .getElementById(
    "addPriorityBtn"
  )
  .addEventListener(
    "click",
    () => {

      const input =
        document.getElementById(
          "priorityInput"
        );


      const value =
        input.value.trim();


      if (!value) {

        showToast(
          "Please enter a priority."
        );

        return;

      }


      state.sales.priorities.push(
        value
      );


      input.value = "";

      saveState();

      renderPriorities();

      showToast(
        "Priority added."
      );

    }
  );


// Calculator

document
  .getElementById(
    "calculateBtn"
  )
  .addEventListener(
    "click",
    calculatePrice
  );


// AI Chat

document
  .getElementById(
    "sendChatBtn"
  )
  .addEventListener(
    "click",
    () => {

      const input =
        document.getElementById(
          "chatInput"
        );


      sendAIMessage(
        input.value
      );


      input.value = "";

    }
  );


document
  .getElementById(
    "chatInput"
  )
  .addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Enter"
      ) {

        document
          .getElementById(
            "sendChatBtn"
          )
          .click();

      }

    }
  );


// AI Questions

document.querySelectorAll(
  ".ai-question"
).forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const input =
        document.getElementById(
          "chatInput"
        );


      input.value =
        button.textContent.trim();


      document
        .getElementById(
          "sendChatBtn"
        )
        .click();

    }
  );

});


// AI Tools

document.querySelectorAll(
  ".ai-tool-card"
).forEach(button => {

  button.addEventListener(
    "click",
    () => {

      openAITool(
        button.dataset.tool
      );

    }
  );

});


// Search

document
  .getElementById(
    "globalSearch"
  )
  .addEventListener(
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


// Mobile

document
  .getElementById(
    "mobileMenu"
  )
  .addEventListener(
    "click",
    openSidebar
  );


document
  .getElementById(
    "sidebarOverlay"
  )
  .addEventListener(
    "click",
    closeSidebar
  );


// Settings

document
  .getElementById(
    "reminderToggle"
  )
  .addEventListener(
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
  .addEventListener(
    "change",
    event => {

      state.settings.tracking =
        event.target.checked;

      saveState();

    }
  );


// Reset

document
  .getElementById(
    "resetDataBtn"
  )
  .addEventListener(
    "click",
    () => {

      const confirmReset =
        confirm(
          "Reset all Academy progress?"
        );


      if (!confirmReset) return;


      localStorage.removeItem(
        STORAGE_KEY
      );


      state =
        createDefaultState();


      saveState();

      renderAll();

      showToast(
        "Academy data has been reset."
      );

    }
  );


// Notification

document
  .getElementById(
    "notificationBtn"
  )
  .addEventListener(
    "click",
    () => {

      showToast(
        "You are up to date."
      );

    }
  );


// Modal

document
  .getElementById(
    "modalClose"
  )
  .addEventListener(
    "click",
    closeModal
  );


document
  .getElementById(
    "modalOverlay"
  )
  .addEventListener(
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


function closeModal() {

  document
    .getElementById(
      "modalOverlay"
    )
    .classList.remove(
      "show"
    );

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

}


// ======================================================
// INIT
// ======================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderAll();

  }
);


// ======================================================
// GLOBAL API
// ======================================================

window.AungAcademy = {

  state,

  courses: COURSES,

  navigate,

  renderAll,

  completeLesson,

  getOverallProgress,

  getCourseProgress

};
