        </div>

          <small>
            ${escapeHTML(item.time)}
          </small>

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
              ${escapeHTML(course.category.toUpperCase())}
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

    }).join("");

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

  if (!courseList || !content) {

    console.error(
      "Lesson elements not found."
    );

    return;

  }

  courseList.innerHTML =
    COURSES.map(course => {

      const progress =
        getCourseProgress(course.id);

      const completed =
        getCourseCompleted(course.id);

      const active =
        state.currentCourseId === course.id
          ? "active"
          : "";

      return `

        <button
          type="button"
          class="lesson-course-item ${active}"
          data-course="${course.id}"
        >

          <div class="lesson-course-icon ${course.color}">
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

    }).join("");

  const current =
    getCurrentLesson();

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

      <span class="course-badge ${course.category}">
        ${escapeHTML(course.category.toUpperCase())}
      </span>

    </div>

    <div class="lesson-body">

      <div class="lesson-visual ${course.color}">
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
// LESSON NAVIGATION
// ======================================================

function previousLesson() {

  const course =
    getCurrentCourse();

  if (state.currentLessonIndex <= 0) {

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

function nextLesson() {

  const course =
    getCurrentCourse();

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
    state.completedLessons.includes(key);

  if (!alreadyCompleted) {

    state.completedLessons.push(key);

    state.dailyGoal.minutes =
      Math.min(
        state.dailyGoal.target,
        state.dailyGoal.minutes + 15
      );

    state.activity.unshift({

      title:
        lessonTitle,

      course:
        courseTitle,

      time:
        "Just now"

    });

    state.activity =
      state.activity.slice(0, 10);

    state.streak =
      Math.max(
        1,
        state.streak
      );

    saveState();

    showToast(
      "သင်ခန်းစာ ပြီးဆုံးပါပြီ ✓"
    );

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
    targetEl.textContent = target;

  if (actualEl)
    actualEl.textContent = actual;

  if (achievementEl)
    achievementEl.textContent =
      `${achievement}%`;

  if (gapEl)
    gapEl.textContent = gap;

  const targetInput =
    document.getElementById(
      "salesTargetInput"
    );

  const actualInput =
    document.getElementById(
      "salesActualInput"
    );

  if (targetInput)
    targetInput.value = target;

  if (actualInput)
    actualInput.value = actual;

  renderSalesChart();
  renderPriorities();

}

function renderSalesChart() {

  const container =
    document.getElementById(
      "salesChart"
    );

  if (!container) return;

  const history =
    Array.isArray(state.sales.history)
      ? state.sales.history
      : [];

  if (!history.length) {

    container.innerHTML = "";

    return;

  }

  const max =
    Math.max(...history, 100);

  container.innerHTML =
    history.map(
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
    ).join("");

}

function renderPriorities() {

  const container =
    document.getElementById(
      "priorityList"
    );

  if (!container) return;

  if (!state.sales.priorities.length) {

    container.innerHTML = `
      <div class="empty-state">
        <div>🎯</div>
        <strong>No priority</strong>
        <span>Add your next execution priority.</span>
      </div>
    `;

    return;

  }

  container.innerHTML =
    state.sales.priorities.map(
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
    ).join("");

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
    Number(costInput.value) || 0;

  const margin =
    Math.max(
      0,
      Math.min(
        99.99,
        Number(marginInput.value) || 0
      )
    );

  const price =
    cost /
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

function formatMoney(number) {

  return `${Math.round(
    Number(number) || 0
  ).toLocaleString()} Ks`;

}

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
    question.toLowerCase().trim();

  if (
    q.includes("team") ||
    q.includes("အဖွဲ့") ||
    q.includes("coach") ||
    q.includes("coaching") ||
    q.includes("performance") ||
    q.includes("လုပ်ဆောင်ရည်")
  ) {

    return `
      <strong>အဖွဲ့လုပ်ဆောင်ရည် မြှင့်တင်ရန်</strong>
      <p>
        ပထမဆုံး Target နဲ့ Actual ကို နှိုင်းယှဉ်ပြီး
        Performance Gap ကို ရှာပါ။
      </p>
      <p>
        Gap ဖြစ်ရတဲ့ Root Cause ကို
        လူ၊ Skill၊ Customer၊ နယ်မြေနဲ့ Execution
        အပိုင်းခွဲပြီး လေ့လာပါ။
      </p>
      <p>
        Action Plan ချမှတ်ပြီး အပတ်စဉ် Follow-up လုပ်ပါ။
        Micromanagement မလုပ်ဘဲ Coaching နဲ့ Empowerment
        ကို အသုံးပြုပါ။
      </p>
    `;

  }

  if (
    q.includes("customer") ||
    q.includes("ဖောက်သည်")
  ) {

    return `
      <strong>Customer Growth တိုးတက်စေရန်</strong>
      <p>
        Customer တွေကို Value နဲ့ Potential အလိုက် ခွဲခြားပါ။
      </p>
      <p>
        အဓိက Customer တွေရဲ့ လိုအပ်ချက်၊ Complaint၊
        ဝယ်ယူမှုပုံစံနဲ့ Business Problem ကို နားလည်ပါ။
      </p>
      <p>
        Visit Plan၊ Follow-up Plan နဲ့
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
      <strong>Sales Target တိုးတက်စေရန်</strong>
      <p>
        လစဉ် Target ကို အပတ်စဉ်နဲ့ နေ့စဉ် Target အဖြစ် ခွဲပါ။
      </p>
      <p>
        Sales Gap ကို Salesperson၊ Territory၊ Product နဲ့
        Customer အလိုက် ခွဲခြမ်းစိတ်ဖြာပါ။
      </p>
      <p>
        People၊ Market နဲ့ Execution သုံးခုအပေါ်
        Action Plan ချပြီး အပတ်စဉ် Review ပြုလုပ်ပါ။
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
      <strong>Finance Management</strong>
      <p>
        Revenue၊ Cost၊ Profit၊ Margin နဲ့ Cash Flow ကို
        တစ်ခုချင်းစီ ခွဲပြီး စောင့်ကြည့်ပါ။
      </p>
      <p>
        Budget vs Actual ကို ပုံမှန်နှိုင်းယှဉ်ပြီး
        မလိုအပ်တဲ့ Cost နဲ့ Cash Leakage ကို ရှာပါ။
      </p>
    `;

  }

  if (
    q.includes("hr") ||
    q.includes("employee") ||
    q.includes("ဝန်ထမ်း")
  ) {

    return `
      <strong>HR Management</strong>
      <p>
        လူမှန်နေရာမှန်၊ Clear KPI၊ Coaching၊
        Recognition နဲ့ Career Development ကို အဓိကထားပါ။
      </p>
    `;

  }

  if (
    q.includes("strategy") ||
    q.includes("မဟာဗျူဟာ")
  ) {

    return `
      <strong>Strategic Management</strong>
      <p>
        Market၊ Customer၊ Competitor နဲ့
        Company Capability ကို အရင်သုံးသပ်ပါ။
      </p>
      <p>
        ပြီးရင် Strategic Priority ၃ ခုလောက် သတ်မှတ်ပြီး
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
      <strong>Pricing Strategy</strong>
      <p>
        Cost တစ်ခုတည်းကို မကြည့်ဘဲ Customer Value၊
        Competitor Price နဲ့ Desired Margin ကို တွဲပြီး စဉ်းစားပါ။
      </p>
      <p>
        Margin မလုံလောက်ရင် ရောင်းအားတက်နေသော်လည်း
        Profit ကျဆင်းနိုင်ပါတယ်။
      </p>
    `;

  }

  return `
    <strong>Business Manager အနေနဲ့</strong>
    <p>
      ပြဿနာတစ်ခုကို ဖြေရှင်းတဲ့အခါ
      <strong>လူ၊ နံပါတ်နဲ့ လက်တွေ့အကောင်အထည်ဖော်မှု</strong>
      သုံးခုကို အရင်ကြည့်ပါ။
    </p>
    <p>
      ရလဒ်ကို တိုင်းတာပါ။ အကြီးမားဆုံး Gap ကို ရှာပါ။
      Root Cause ကို သတ်မှတ်ပြီး Action Plan ချမှတ်ပါ။
    </p>
  `;

}

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
            <div>${answer}</div>
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
    query.trim().toLowerCase();

  if (!text) return;

  const course =
    COURSES.find(course =>
      course.title.toLowerCase().includes(text) ||
      course.description.toLowerCase().includes(text) ||
      course.category.toLowerCase().includes(text)
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
        lesson => {

          const plainContent =
            lesson.content
              .replace(/<[^>]*>/g, "")
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

      state.currentCourseId =
        course.id;

      state.currentLessonIndex =
        index;

      saveState();

      navigate("lessons");

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
    ?.classList.add("open");

  document
    .getElementById("sidebarOverlay")
    ?.classList.add("show");

}

function closeSidebar() {

  document
    .getElementById("sidebar")
    ?.classList.remove("open");

  document
    .getElementById("sidebarOverlay")
    ?.classList.remove("show");

}

// ======================================================
// TOAST
// ======================================================

function showToast(message) {

  const toast =
    document.getElementById("toast");

  const toastMessage =
    document.getElementById("toastMessage");

  if (!toast || !toastMessage)
    return;

  toastMessage.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer =
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);

}

// ======================================================
// MODAL
// ======================================================

function closeModal() {

  document
    .getElementById("modalOverlay")
    ?.classList.remove("show");

}

// ======================================================
// LESSON ACTION
// ======================================================

function handleLessonAction(action) {

  if (action === "previous") {
    previousLesson();
    return;
  }

  if (action === "next") {
    nextLesson();
    return;
  }

  if (action === "complete") {

    const current =
      getCurrentLesson();

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

let academyInitialized = false;

function initializeApp() {

  if (academyInitialized) {
    return;
  }

  academyInitialized = true;

  // ----------------------------------------------------
  // GLOBAL CLICK DELEGATION
  // ----------------------------------------------------

  document.addEventListener(
    "click",
    event => {

      const target =
        event.target;

      if (!(target instanceof Element)) {
        return;
      }

      // NAVIGATION
      const nav =
        target.closest(".nav-item");

      if (nav) {

        event.preventDefault();

        navigate(
          nav.dataset.page
        );

        return;

      }

      // DATA GO
      const go =
        target.closest("[data-go]");

      if (go) {

        event.preventDefault();

        navigate(
          go.dataset.go
        );

        return;

      }

      // COURSE
      const openCourse =
        target.closest(".open-course");

      if (openCourse) {

        event.preventDefault();

        const courseId =
          openCourse.dataset.course;

        const course =
          COURSES.find(
            item =>
              item.id === courseId
          );

        if (!course) return;

        state.currentCourseId =
          courseId;

        state.currentLessonIndex =
          0;

        saveState();

        navigate("lessons");

        return;

      }

      // LESSON COURSE
      const lessonCourse =
        target.closest(
          ".lesson-course-item"
        );

      if (lessonCourse) {

        event.preventDefault();

        const courseId =
          lessonCourse.dataset.course;

        const course =
          COURSES.find(
            item =>
              item.id === courseId
          );

        if (!course) return;

        state.currentCourseId =
          courseId;

        state.currentLessonIndex =
          0;

        saveState();

        renderLessons();

        return;

      }

      // LESSON ACTION
      const lessonAction =
        target.closest(
          "[data-lesson-action]"
        );

      if (lessonAction) {

        event.preventDefault();

        if (lessonAction.disabled) {
          return;
        }

        handleLessonAction(
          lessonAction.dataset.lessonAction
        );

        return;

      }

      // RECOMMENDATION
      const recommendation =
        target.closest(
          ".recommendation-item"
        );

      if (recommendation) {

        event.preventDefault();

        const courseId =
          recommendation.dataset.course;

        const course =
          COURSES.find(
            item =>
              item.id === courseId
          );

        if (!course) return;

        state.currentCourseId =
          courseId;

        state.currentLessonIndex =
          0;

        saveState();

        navigate("lessons");

        return;

      }

      // PRIORITY DELETE
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

      // AI QUESTIONS
      const aiQuestion =
        target.closest(".ai-question");

      if (aiQuestion) {

        const input =
          document.getElementById(
            "chatInput"
          );

        const send =
          document.getElementById(
            "sendChatBtn"
          );

        if (!input || !send)
          return;

        input.value =
          aiQuestion.textContent.trim();

        send.click();

        return;

      }

      // AI TOOLS
      const aiTool =
        target.closest(
          ".ai-tool-card"
        );

      if (aiTool) {

        openAITool(
          aiTool.dataset.tool
        );

      }

    }
  );

  // ----------------------------------------------------
  // COURSE FILTER
  // ----------------------------------------------------

  document
    .querySelectorAll(".filter-tab")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(".filter-tab")
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

  // ----------------------------------------------------
  // CONTINUE LEARNING
  // ----------------------------------------------------

  const continueBtn =
    document.getElementById(
      "continueLearningBtn"
    );

  if (continueBtn) {

    continueBtn.addEventListener(
      "click",
      () => navigate("lessons")
    );

  }

  // ----------------------------------------------------
  // SALES UPDATE
  // ----------------------------------------------------

  const updateSalesBtn =
    document.getElementById(
      "updateSalesBtn"
    );

  if (updateSalesBtn) {

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
          state.sales.history.slice(-7);

        saveState();

        renderSales();
        renderReports();

        showToast(
          "Sales performance updated."
        );

      }
    );

  }

  // ----------------------------------------------------
  // ADD PRIORITY
  // ----------------------------------------------------

  const addPriorityBtn =
    document.getElementById(
      "addPriorityBtn"
    );

  if (addPriorityBtn) {

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

        input.value = "";

        saveState();

        renderPriorities();

        showToast(
          "Priority ထည့်ပြီးပါပြီ။"
        );

      }
    );

  }

  // ----------------------------------------------------
  // CALCULATOR
  // ----------------------------------------------------

  const calculateBtn =
    document.getElementById(
      "calculateBtn"
    );

  if (calculateBtn) {

    calculateBtn.addEventListener(
      "click",
      calculatePrice
    );

  }

  // ----------------------------------------------------
  // AI CHAT
  // ----------------------------------------------------

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

        if (!value.trim())
          return;

        sendAIMessage(value);

        chatInput.value = "";

      }
    );

    chatInput.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          event.preventDefault();

          sendChatBtn.click();

        }

      }
    );

  }

  // ----------------------------------------------------
  // SEARCH
  // ----------------------------------------------------

  const search =
    document.getElementById(
      "globalSearch"
    );

  if (search) {

    search.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          performSearch(
            event.target.value
          );

        }

      }
    );

  }

  // ----------------------------------------------------
  // MOBILE SIDEBAR
  // ----------------------------------------------------

  const mobileMenu =
    document.getElementById(
      "mobileMenu"
    );

  if (mobileMenu) {
    mobileMenu.addEventListener(
      "click",
      openSidebar
    );
  }

  const overlay =
    document.getElementById(
      "sidebarOverlay"
    );

  if (overlay) {
    overlay.addEventListener(
      "click",
      closeSidebar
    );
  }

  // ----------------------------------------------------
  // SETTINGS
  // ----------------------------------------------------

  const reminder =
    document.getElementById(
      "reminderToggle"
    );

  if (reminder) {

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

  if (tracking) {

    tracking.addEventListener(
      "change",
      event => {

        state.settings.tracking =
          event.target.checked;

        saveState();

      }
    );

  }

  // ----------------------------------------------------
  // RESET
  // ----------------------------------------------------

  const resetBtn =
    document.getElementById(
      "resetDataBtn"
    );

  if (resetBtn) {

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

  // ----------------------------------------------------
  // NOTIFICATION
  // ----------------------------------------------------

  const notification =
    document.getElementById(
      "notificationBtn"
    );

  if (notification) {

    notification.addEventListener(
      "click",
      () => {

        showToast(
          "လက်ရှိ Notification မရှိသေးပါ။"
        );

      }
    );

  }

  // ----------------------------------------------------
  // MODAL
  // ----------------------------------------------------

  const modalClose =
    document.getElementById(
      "modalClose"
    );

  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeModal
    );

  }

  const modalOverlay =
    document.getElementById(
      "modalOverlay"
    );

  if (modalOverlay) {

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

  if (reminder) {

    reminder.checked =
      !!state.settings.reminder;

  }

  if (tracking) {

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

  renderLessons,

  completeLesson,

  previousLesson,

  nextLesson,

  getOverallProgress,

  getCourseProgress,

  getTotalLessons

};
