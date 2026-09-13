/* =========================================================
   AUNG BUSINESS ACADEMY
   PROFESSIONAL APP V1.0
   ========================================================= */


/* ================= DATA ================= */

const COURSES = [
  {
    id: 1,
    title: "Sales Management Mastery",
    category: "Sales",
    icon: "📈",
    description:
      "Sales target, team management, customer management နှင့် field execution ကို လေ့လာပါ။"
  },

  {
    id: 2,
    title: "Business Strategy",
    category: "Strategic Thinking",
    icon: "🎯",
    description:
      "Business strategy, market analysis နှင့် competitive advantage ကို လေ့လာပါ။"
  },

  {
    id: 3,
    title: "Marketing & Brand",
    category: "Marketing",
    icon: "📣",
    description:
      "Marketing strategy, branding နှင့် customer positioning ကို လေ့လာပါ။"
  },

  {
    id: 4,
    title: "People & Leadership",
    category: "People Management",
    icon: "👥",
    description:
      "Team leadership, coaching, motivation နှင့် performance management ကို လေ့လာပါ။"
  }
];


const LESSONS = [

  {
    id: 1,
    course: "Sales Management Mastery",
    title: "Sales Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်များ",
    category: "Sales",
    content:
      "Sales Manager သည် Target ချမှတ်ခြင်း၊ Team ကို direction ပေးခြင်း၊ Performance ကို monitor လုပ်ခြင်း၊ Customer relationship တည်ဆောက်ခြင်းနှင့် Market execution ကို စီမံခန့်ခွဲရပါသည်။"
  },

  {
    id: 2,
    course: "Sales Management Mastery",
    title: "Sales Target ကို Field Execution ပြောင်းခြင်း",
    category: "Sales",
    content:
      "Target တစ်ခုရရှိရန် People, Numbers နှင့် Execution ဆိုသည့် အချက်သုံးချက်ကို အဓိကထားပါ။ Gap ကို identify လုပ်ပြီး action plan ချမှတ်ပါ။"
  },

  {
    id: 3,
    course: "Sales Management Mastery",
    title: "Sales Team Coaching",
    category: "People Management",
    content:
      "Team member တစ်ဦးချင်းစီရဲ့ strength နှင့် development area ကို သိရှိပြီး regular coaching နှင့် feedback ပေးပါ။"
  },

  {
    id: 4,
    course: "Business Strategy",
    title: "Business Strategy ဆိုတာဘာလဲ",
    category: "Strategic Thinking",
    content:
      "Business Strategy ဆိုသည်မှာ လုပ်ငန်း၏ ရည်မှန်းချက်ကို အကောင်အထည်ဖော်ရန် ဘယ်ဈေးကွက်၊ ဘယ် Customer နှင့် ဘယ်လိုနည်းလမ်းဖြင့် ယှဉ်ပြိုင်မည်ကို သတ်မှတ်ခြင်းဖြစ်သည်။"
  },

  {
    id: 5,
    course: "Business Strategy",
    title: "Market Analysis",
    category: "Strategic Thinking",
    content:
      "Market size၊ customer needs၊ competitor strength နှင့် market trend များကို လေ့လာပြီး opportunity နှင့် threat ကို ခွဲခြားပါ။"
  },

  {
    id: 6,
    course: "Marketing & Brand",
    title: "Brand ဆိုတာဘာလဲ",
    category: "Brand Basics",
    content:
      "Brand သည် Logo တစ်ခုတည်းမဟုတ်ပါ။ Customer စိတ်ထဲတွင် သင့် Product သို့မဟုတ် Company နှင့်ပတ်သက်ပြီး ဖြစ်ပေါ်နေသော perception ဖြစ်သည်။"
  },

  {
    id: 7,
    course: "Marketing & Brand",
    title: "Customer ကို နားလည်ခြင်း",
    category: "Marketing",
    content:
      "Customer ဘာလိုချင်သလဲ၊ ဘာကြောင့်ဝယ်သလဲ၊ ဘာပြဿနာရှိသလဲကို သိရှိခြင်းက Marketing Strategy ရဲ့ အခြေခံဖြစ်ပါတယ်။"
  },

  {
    id: 8,
    course: "People & Leadership",
    title: "Leadership နှင့် Management",
    category: "People Management",
    content:
      "Manager သည် direction ပေးပြီး performance ကို manage လုပ်သူဖြစ်သည်။ Leader သည် လူများကို influence လုပ်ပြီး ရည်မှန်းချက်တစ်ခုတည်းဆီ ခေါ်ဆောင်သူဖြစ်သည်။"
  },

  {
    id: 9,
    course: "People & Leadership",
    title: "Coaching & Empowerment",
    category: "People Management",
    content:
      "Micromanagement မလုပ်ဘဲ Clear Expectations ပေးပါ။ Team ကို Ownership နှင့် Accountability ပေးပြီး regular review နှင့် feedback ပြုလုပ်ပါ။"
  },

  {
    id: 10,
    course: "Business Strategy",
    title: "Goal Setting",
    category: "Goal Setting",
    content:
      "Goal သည် Specific၊ Measurable၊ Achievable၊ Relevant နှင့် Time-bound ဖြစ်သင့်ပါသည်။"
  },

  {
    id: 11,
    course: "Sales Management Mastery",
    title: "Customer Relationship Management",
    category: "Customer Service",
    content:
      "Customer relationship ကို ထိန်းသိမ်းရန် regular visit၊ service quality၊ problem solving နှင့် follow-up ကို စနစ်တကျ လုပ်ဆောင်ပါ။"
  },

  {
    id: 12,
    course: "Sales Management Mastery",
    title: "Negotiation အခြေခံ",
    category: "Negotiation",
    content:
      "Negotiation တွင် ကိုယ့်လိုအပ်ချက်သာမက Customer ရဲ့လိုအပ်ချက်ကိုလည်း နားလည်ရန် အရေးကြီးပါသည်။ Win-Win solution ရှာပါ။"
  },

  {
    id: 13,
    course: "Business Strategy",
    title: "Profit & Loss အခြေခံ",
    category: "Finance",
    content:
      "Revenue မှ Total Cost ကိုနုတ်ပါက Profit ရရှိပါသည်။ Gross Margin နှင့် Net Profit ကို ခွဲခြားနားလည်ရန် လိုအပ်ပါသည်။"
  },

  {
    id: 14,
    course: "People & Leadership",
    title: "Performance Review",
    category: "Management",
    content:
      "Actual Result နှင့် Target ကို နှိုင်းယှဉ်ပြီး Gap ကို identify လုပ်ပါ။ Root Cause ကိုရှာပြီး Corrective Action Plan ချမှတ်ပါ။"
  }

];


/* ================= STATE ================= */

let currentPage = "dashboard";

let completedLessons =
  JSON.parse(
    localStorage.getItem("aba_completed_lessons") || "[]"
  );

let currentLessonIndex = 0;


/* ================= HELPERS ================= */

function $(id) {
  return document.getElementById(id);
}


function escapeHTML(text) {

  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* ================= NAVIGATION ================= */

function navigate(page) {

  const pages = document.querySelectorAll(".page");

  pages.forEach(p => {
    p.classList.remove("active");
  });


  const target = $(page + "Page");

  if (!target) {
    console.warn("Page not found:", page);
    return;
  }


  target.classList.add("active");

  currentPage = page;


  const navItems =
    document.querySelectorAll(".nav-item");

  navItems.forEach(item => {

    item.classList.remove("active");

    if (item.dataset.page === page) {
      item.classList.add("active");
    }

  });


  updatePageTitle(page);


  if (page === "courses") {
    renderCourses();
  }

  if (page === "lessons") {
    renderLessons();
  }

  if (page === "progress") {
    renderProgress();
  }

  if (page === "sales") {
    renderSales();
  }

  if (page === "reports") {
    renderReports();
  }

  closeSidebar();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function updatePageTitle(page) {

  const titles = {

    dashboard: "Dashboard",
    courses: "My Courses",
    lessons: "Lessons",
    progress: "My Progress",
    sales: "Sales Manager",
    calculator: "Pricing Calculator",
    reports: "Reports",
    ai: "AI Business Coach",
    tools: "AI Tools",
    settings: "Settings"

  };


  const title = titles[page] || "Dashboard";

  const el = $("pageTitle");

  if (el) {
    el.textContent = title;
  }

}


/* ================= DASHBOARD ================= */

function goDashboard() {
  navigate("dashboard");
}


function openLessons() {
  navigate("lessons");
}


function continueLearning() {

  if (LESSONS.length === 0) {
    showToast("Lesson မရှိသေးပါ");
    return;
  }

  currentLessonIndex =
    Math.min(
      completedLessons.length,
      LESSONS.length - 1
    );

  openLesson(currentLessonIndex);

}


function openBusinessPlan() {

  openModal(`
  
    <div class="modal-icon">📋</div>

    <h2>Business Plan</h2>

    <p>
      Business Plan တစ်ခုတည်ဆောက်ရန်
      အောက်ပါအချက်များကို စဉ်းစားပါ။
    </p>

    <div style="margin-top:20px;line-height:2;font-size:13px">

      <strong>1. Business Goal</strong><br>
      ဘာကိုအောင်မြင်ချင်သလဲ?

      <br><br>

      <strong>2. Target Customer</strong><br>
      ဘယ်သူ့ကို ရောင်းမလဲ?

      <br><br>

      <strong>3. Value Proposition</strong><br>
      Customer က ဘာကြောင့် သင့်ဆီက ဝယ်သင့်သလဲ?

      <br><br>

      <strong>4. Sales Strategy</strong><br>
      ဘယ်လိုရောင်းမလဲ?

      <br><br>

      <strong>5. Financial Goal</strong><br>
      Revenue နဲ့ Profit ဘယ်လောက်ရချင်သလဲ?

    </div>

  `);

}


/* ================= CATEGORY ================= */

function openCategory(category) {

  navigate("lessons");

  setTimeout(() => {

    const filtered =
      LESSONS.filter(
        lesson =>
          lesson.category.toLowerCase()
          === category.toLowerCase()
      );

    const container =
      $("lessonsContainer");

    if (!container) return;


    if (!filtered.length) {

      container.innerHTML = `

        <div class="course-card">

          <h3>${escapeHTML(category)}</h3>

          <p>
            ဒီ Category အတွက် Lessons များကို
            မကြာမီ ထည့်သွင်းပေးပါမည်။
          </p>

        </div>

      `;

      return;
    }


    container.innerHTML =
      filtered.map(
        (lesson, index) => `

        <div class="lesson-item">

          <div class="lesson-number">
            ${index + 1}
          </div>

          <div class="lesson-info">

            <strong>
              ${escapeHTML(lesson.title)}
            </strong>

            <small>
              ${escapeHTML(lesson.category)}
            </small>

          </div>

          <button
            class="primary-btn"
            onclick="openLessonById(${lesson.id})">

            Learn

          </button>

        </div>

      `
      ).join("");

  }, 100);

}


/* ================= COURSES ================= */

function renderCourses() {

  const container = $("coursesContainer");

  if (!container) return;


  container.innerHTML =
    COURSES.map(course => `

      <div class="course-card">

        <div class="course-card-icon">
          ${course.icon}
        </div>

        <h3>
          ${escapeHTML(course.title)}
        </h3>

        <p>
          ${escapeHTML(course.description)}
        </p>

        <div style="
          height:6px;
          background:#eeeef3;
          border-radius:10px;
          overflow:hidden;
          margin-bottom:14px;
        ">

          <div style="
            width:${courseProgress(course.id)}%;
            height:100%;
            background:linear-gradient(90deg,#6d4aff,#ec4899);
          "></div>

        </div>

        <button
          class="primary-btn"
          onclick="openCourse(${course.id})">

          Open Course

        </button>

      </div>

    `).join("");

}


function courseProgress(courseId) {

  const course =
    COURSES.find(c => c.id === courseId);

  if (!course) return 0;


  const lessons =
    LESSONS.filter(
      lesson =>
        lesson.course === course.title
    );

  if (!lessons.length) return 0;


  const completed =
    lessons.filter(
      lesson =>
        completedLessons.includes(lesson.id)
    ).length;


  return Math.round(
    (completed / lessons.length) * 100
  );

}


function openCourse(courseId) {

  const course =
    COURSES.find(c => c.id === courseId);

  if (!course) return;


  openModal(`

    <h2>
      ${course.icon}
      ${escapeHTML(course.title)}
    </h2>

    <p>
      ${escapeHTML(course.description)}
    </p>

    <div style="margin-top:20px">

      ${
        LESSONS
          .filter(
            lesson =>
              lesson.course === course.title
          )
          .map(
            lesson => `

              <div class="lesson-item">

                <div class="lesson-number">
                  ${lesson.id}
                </div>

                <div class="lesson-info">

                  <strong>
                    ${escapeHTML(lesson.title)}
                  </strong>

                </div>

                <button
                  class="primary-btn"
                  onclick="openLessonById(${lesson.id})">

                  Open

                </button>

              </div>

            `
          ).join("")
      }

    </div>

  `);

}


/* ================= LESSONS ================= */

function renderLessons() {

  const container =
    $("lessonsContainer");

  if (!container) return;


  container.innerHTML =
    LESSONS.map(
      (lesson, index) => {

        const done =
          completedLessons.includes(
            lesson.id
          );


        return `

          <div class="lesson-item">

            <div class="lesson-number">
              ${index + 1}
            </div>

            <div class="lesson-info">

              <strong>
                ${escapeHTML(lesson.title)}
              </strong>

              <small>
                ${escapeHTML(lesson.category)}
                ·
                ${escapeHTML(lesson.course)}
              </small>

            </div>

            <div
              class="lesson-status ${done ? "done" : ""}">

              ${
                done
                  ? "✓ Completed"
                  : "Not Started"
              }

            </div>

            <button
              class="primary-btn"
              onclick="openLessonById(${lesson.id})">

              Open

            </button>

          </div>

        `;

      }
    ).join("");

}


function openLessonById(id) {

  const index =
    LESSONS.findIndex(
      lesson => lesson.id === id
    );

  if (index === -1) return;

  openLesson(index);

}


function openLesson(index) {

  const lesson = LESSONS[index];

  if (!lesson) return;


  currentLessonIndex = index;


  const done =
    completedLessons.includes(
      lesson.id
    );


  openModal(`

    <span style="
      display:inline-block;
      padding:5px 9px;
      background:#eeeaff;
      color:#6d4aff;
      border-radius:7px;
      font-size:9px;
      font-weight:700;
    ">
      ${escapeHTML(lesson.category)}
    </span>

    <h2 style="margin-top:12px">
      ${escapeHTML(lesson.title)}
    </h2>

    <p style="
      margin-top:15px;
      font-size:13px;
      line-height:2;
      color:#374151;
    ">
      ${escapeHTML(lesson.content)}
    </p>


    <div style="
      display:flex;
      gap:10px;
      margin-top:25px;
    ">

      <button
        class="secondary-btn"
        onclick="previousLesson()">

        ← Previous

      </button>

      ${
        done
          ? `
            <button
              class="primary-btn"
              onclick="nextLesson()">

              Next →

            </button>
          `
          : `
            <button
              class="primary-btn"
              onclick="completeLesson()">

              ✓ Complete Lesson

            </button>
          `
      }

    </div>

  `);

}


function previousLesson() {

  if (currentLessonIndex <= 0) {

    showToast("ဒါက ပထမ Lesson ဖြစ်ပါတယ်");

    return;
  }

  currentLessonIndex--;

  openLesson(currentLessonIndex);

}


function nextLesson() {

  if (
    currentLessonIndex >=
    LESSONS.length - 1
  ) {

    closeModal();

    showToast(
      "🎉 Lessons အားလုံးပြီးပါပြီ!"
    );

    return;
  }

  currentLessonIndex++;

  openLesson(currentLessonIndex);

}


function completeLesson() {

  const lesson =
    LESSONS[currentLessonIndex];

  if (!lesson) return;


  if (
    !completedLessons.includes(
      lesson.id
    )
  ) {

    completedLessons.push(
      lesson.id
    );

    localStorage.setItem(
      "aba_completed_lessons",
      JSON.stringify(
        completedLessons
      )
    );

  }


  closeModal();

  updateDashboardStats();

  renderLessons();

  renderProgress();

  showToast(
    "✓ Lesson completed successfully!"
  );

}


/* ================= PROGRESS ================= */

function renderProgress() {

  const container =
    $("progressContainer");

  if (!container) return;


  const total = LESSONS.length;

  const completed =
    completedLessons.length;

  const percentage =
    total
      ? Math.round(
          (completed / total) * 100
        )
      : 0;


  container.innerHTML = `

    <div class="course-progress-card">

      <div class="course-icon">
        📚
      </div>

      <div class="course-main">

        <span class="course-label">
          OVERALL PROGRESS
        </span>

        <h3>
          Aung Business Academy
        </h3>

        <p>
          ${completed} of ${total}
          lessons completed
        </p>

        <div class="progress-row">

          <div class="progress-bar">

            <div
              class="progress-fill"
              style="width:${percentage}%">
            </div>

          </div>

          <strong>
            ${percentage}%
          </strong>

        </div>

      </div>

    </div>


    <div class="stats-grid" style="margin-top:20px">

      <div class="stat-card">

        <div class="stat-icon purple">
          📚
        </div>

        <div>
          <span>Total Lessons</span>
          <strong>${total}</strong>
        </div>

      </div>


      <div class="stat-card">

        <div class="stat-icon green">
          ✓
        </div>

        <div>
          <span>Completed</span>
          <strong>${completed}</strong>
        </div>

      </div>


      <div class="stat-card">

        <div class="stat-icon orange">
          ◔
        </div>

        <div>
          <span>Remaining</span>
          <strong>${total - completed}</strong>
        </div>

      </div>


      <div class="stat-card">

        <div class="stat-icon blue">
          %
        </div>

        <div>
          <span>Progress</span>
          <strong>${percentage}%</strong>
        </div>

      </div>

    </div>

  `;

}


function updateDashboardStats() {

  const total = LESSONS.length;

  const completed =
    completedLessons.length;

  const percentage =
    total
      ? Math.round(
          (completed / total) * 100
        )
      : 0;


  if ($("statCourses")) {
    $("statCourses").textContent =
      COURSES.length;
  }

  if ($("statLessons")) {
    $("statLessons").textContent =
      total;
  }

  if ($("statCompleted")) {
    $("statCompleted").textContent =
      completed;
  }

  if ($("statProgress")) {
    $("statProgress").textContent =
      percentage + "%";
  }

  if ($("courseProgressBar")) {
    $("courseProgressBar").style.width =
      percentage + "%";
  }

  if ($("courseProgressText")) {
    $("courseProgressText").textContent =
      percentage + "%";
  }

}


/* ================= SALES ================= */

function renderSales() {

  const chart =
    $("salesChart");

  if (!chart) return;


  chart.innerHTML = `

    <h3 style="font-size:14px;margin-bottom:15px">
      Sales Performance
    </h3>

    <div style="
      display:flex;
      align-items:flex-end;
      height:150px;
      gap:15px;
      padding:10px;
      border-bottom:1px solid #eee;
    ">

      ${[35,55,45,70,60,82,68]
        .map(
          (height, index) => `

            <div style="
              flex:1;
              height:${height}%;
              background:linear-gradient(
                to top,
                #6d4aff,
                #ec4899
              );
              border-radius:6px 6px 0 0;
              min-width:20px;
            "></div>

          `
        ).join("")}

    </div>

    <p style="
      color:#718096;
      font-size:10px;
      margin-top:10px;
    ">
      Sample performance chart
    </p>

  `;

}


/* ================= CALCULATORS ================= */

function openProfitCalculator() {

  navigate("calculator");

  setTimeout(() => {

    $("profit-revenue")?.focus();

  }, 100);

}


function openPricingCalculator() {

  navigate("calculator");

  setTimeout(() => {

    $("pricing-cost")?.focus();

  }, 100);

}


function openBreakEvenCalculator() {

  navigate("calculator");

  setTimeout(() => {

    $("fixed-cost")?.focus();

  }, 100);

}


function openSalesTargetCalculator() {

  navigate("calculator");

  setTimeout(() => {

    $("sales-target")?.focus();

  }, 100);

}


function calculateProfitTool() {

  const revenue =
    Number(
      $("profit-revenue").value
    );

  const cost =
    Number(
      $("profit-cost").value
    );


  if (
    !revenue ||
    !cost
  ) {

    $("profit-result").textContent =
      "Revenue နှင့် Cost ထည့်ပါ";

    return;
  }


  const profit =
    revenue - cost;

  const margin =
    (profit / revenue) * 100;


  $("profit-result").innerHTML = `

    Profit:
    <strong>
      ${formatMoney(profit)}
    </strong>

    <br>

    Margin:
    <strong>
      ${margin.toFixed(2)}%
    </strong>

  `;

}


function calculatePricingTool() {

  const cost =
    Number(
      $("pricing-cost").value
    );

  const margin =
    Number(
      $("pricing-margin").value
    );


  if (
    !cost ||
    margin <= 0 ||
    margin >= 100
  ) {

    $("price-result").textContent =
      "မှန်ကန်သော Cost နှင့် Margin % ထည့်ပါ";

    return;
  }


  const sellingPrice =
    cost /
    (1 - margin / 100);


  $("price-result").innerHTML = `

    Selling Price:

    <strong>
      ${formatMoney(
        Math.round(sellingPrice)
      )}
    </strong>

  `;

}


function calculateBreakEven() {

  const fixed =
    Number(
      $("fixed-cost").value
    );

  const price =
    Number(
      $("selling-price").value
    );

  const variable =
    Number(
      $("variable-cost").value
    );


  const contribution =
    price - variable;


  if (
    !fixed ||
    !price ||
    !variable ||
    contribution <= 0
  ) {

    $("breakeven-result").textContent =
      "Input များကို မှန်ကန်စွာထည့်ပါ";

    return;
  }


  const units =
    fixed / contribution;


  $("breakeven-result").innerHTML = `

    Break-even:

    <strong>
      ${Math.ceil(units)} units
    </strong>

  `;

}


function calculateSalesTarget() {

  const target =
    Number(
      $("sales-target").value
    );

  const days =
    Number(
      $("working-days").value
    );


  if (
    !target ||
    !days
  ) {

    $("sales-target-result").textContent =
      "Target နှင့် Working Days ထည့်ပါ";

    return;
  }


  const daily =
    target / days;


  $("sales-target-result").innerHTML = `

    Daily Sales Target:

    <strong>
      ${formatMoney(
        Math.round(daily)
      )}
    </strong>

  `;

}


function formatMoney(number) {

  return Number(number || 0)
    .toLocaleString("en-US") + " MMK";

}


/* ================= REPORTS ================= */

function renderReports() {

  const percentage =
    LESSONS.length
      ? Math.round(
          (completedLessons.length /
            LESSONS.length) * 100
        )
      : 0;


  const reportPage =
    $("reportsPage");

  if (!reportPage) return;


  const card =
    reportPage.querySelector(".report-grid");

  if (!card) return;


  card.innerHTML = `

    <div class="report-card">
      <span>Learning Progress</span>
      <strong>${percentage}%</strong>
      <small>Academy completion</small>
    </div>

    <div class="report-card">
      <span>Completed Lessons</span>
      <strong>${completedLessons.length}</strong>
      <small>Total completed</small>
    </div>

    <div class="report-card">
      <span>Available Lessons</span>
      <strong>${LESSONS.length}</strong>
      <small>Total lessons</small>
    </div>

    <div class="report-card">
      <span>Courses</span>
      <strong>${COURSES.length}</strong>
      <small>Professional courses</small>
    </div>

  `;

}


/* ================= AI COACH ================= */

function sendAIMessage() {

  const input =
    $("aiInput");

  const messages =
    $("aiMessages");


  if (!input || !messages) return;


  const question =
    input.value.trim();


  if (!question) return;


  messages.innerHTML += `

    <div class="ai-message user">
      ${escapeHTML(question)}
    </div>

  `;


  input.value = "";


  setTimeout(() => {

    const answer =
      getAIResponse(question);


    messages.innerHTML += `

      <div class="ai-message">
        ${answer}
      </div>

    `;


    messages.scrollTop =
      messages.scrollHeight;

  }, 400);

}


function getAIResponse(question) {

  const q =
    question.toLowerCase();


  if (
    q.includes("sales") ||
    q.includes("ရောင်း")
  ) {

    return `
      Sales တိုးချင်ရင်
      <strong>People + Numbers + Execution</strong>
      ဆိုတဲ့ အချက် ၃ ချက်ကို အရင်စစ်ပါ။
      <br><br>
      1. Team performance ကိုစစ်ပါ။
      <br>
      2. Target vs Actual gap ကိုရှာပါ။
      <br>
      3. Customer နှင့် Market execution action plan ချပါ။
    `;

  }


  if (
    q.includes("team") ||
    q.includes("team")
  ) {

    return `
      Team management မှာ
      <strong>Clear Expectations + Coaching + Accountability</strong>
      ကို အဓိကထားပါ။
      <br><br>
      Micromanagement မလုပ်ဘဲ Team ကို
      ownership ပေးပြီး regular review လုပ်ပါ။
    `;

  }


  if (
    q.includes("profit") ||
    q.includes("အမြတ်")
  ) {

    return `
      Profit = Revenue - Total Cost ဖြစ်ပါတယ်။
      <br><br>
      Profit Margin =
      Profit ÷ Revenue × 100
      ဖြစ်ပါတယ်။
      <br><br>
      Academy ထဲက Profit Calculator ကိုလည်း
      အသုံးပြုနိုင်ပါတယ်။
    `;

  }


  if (
    q.includes("customer") ||
    q.includes("ဖောက်သည်")
  ) {

    return `
      Customer ကိုရှာတဲ့အခါ
      <strong>Need + Problem + Ability to Pay</strong>
      ကို အရင်နားလည်ပါ။
      <br><br>
      Customer ဘာလိုချင်သလဲ၊
      ဘာပြဿနာရှိသလဲ၊
      ဘယ်လို value ပေးနိုင်မလဲဆိုတာ ရှာဖွေပါ။
    `;

  }


  return `
    သင့်မေးခွန်းကို Business Coach အနေနဲ့
    အောက်ပါ Framework နဲ့ စဉ်းစားနိုင်ပါတယ်။
    <br><br>

    <strong>1. Goal</strong> – ဘာကိုအောင်မြင်ချင်သလဲ?
    <br>
    <strong>2. Current Situation</strong> – လက်ရှိအခြေအနေကဘာလဲ?
    <br>
    <strong>3. Gap</strong> – ဘာတွေလိုနေသလဲ?
    <br>
    <strong>4. Action</strong> – ဘာကိုအရင်လုပ်မလဲ?
    <br>
    <strong>5. Measure</strong> – Result ကိုဘယ်လိုတိုင်းမလဲ?
  `;

}


/* ================= TOOLS ================= */

function openTools() {
  navigate("tools");
}


function openAITool() {
  navigate("ai");
}


/* ================= PROFILE ================= */

function openProfile() {

  openModal(`

    <div style="text-align:center">

      <div
        class="avatar"
        style="
          width:70px;
          height:70px;
          margin:0 auto 15px;
          font-size:20px;
        ">

        AZ

      </div>

      <h2>
        Aung Zar Ni Win
      </h2>

      <p>
        Business Manager
      </p>

    </div>


    <div style="
      margin-top:25px;
      display:grid;
      gap:10px;
    ">

      <div class="setting-row"
        style="
          border:1px solid #eee;
          border-radius:10px;
        ">

        <div>

          <strong>
            Learning Goal
          </strong>

          <small>
            30 minutes per day
          </small>

        </div>

      </div>


      <div class="setting-row"
        style="
          border:1px solid #eee;
          border-radius:10px;
        ">

        <div>

          <strong>
            Academy Status
          </strong>

          <small>
            Professional Edition
          </small>

        </div>

      </div>

    </div>

  `);

}


/* ================= NOTIFICATION ================= */

function showNotification() {

  openModal(`

    <h2>🔔 Notifications</h2>

    <div style="
      margin-top:20px;
      padding:15px;
      background:#f8f7ff;
      border-radius:12px;
    ">

      <strong>
        Welcome to Aung Business Academy
      </strong>

      <p style="margin-top:6px">
        သင့် Business Skills တိုးတက်အောင်
        နေ့စဉ် Lesson တစ်ခုစီ လေ့လာပါ။
      </p>

    </div>

  `);

}


/* ================= SEARCH ================= */

function performSearch() {

  const input =
    $("globalSearch");

  if (!input) return;


  const keyword =
    input.value.trim().toLowerCase();


  if (!keyword) return;


  const result =
    LESSONS.filter(
      lesson =>
        lesson.title
          .toLowerCase()
          .includes(keyword) ||

        lesson.category
          .toLowerCase()
          .includes(keyword)
    );


  if (!result.length) {

    showToast(
      "Search result မတွေ့ပါ"
    );

    return;
  }


  navigate("lessons");


  setTimeout(() => {

    const container =
      $("lessonsContainer");

    container.innerHTML =
      result.map(
        (lesson, index) => `

          <div class="lesson-item">

            <div class="lesson-number">
              ${index + 1}
            </div>

            <div class="lesson-info">

              <strong>
                ${escapeHTML(
                  lesson.title
                )}
              </strong>

              <small>
                ${escapeHTML(
                  lesson.category
                )}
              </small>

            </div>

            <button
              class="primary-btn"
              onclick="openLessonById(${lesson.id})">

              Open

            </button>

          </div>

        `
      ).join("");

  }, 100);

}


/* ================= SIDEBAR ================= */

function toggleSidebar() {

  const sidebar =
    $("sidebar");

  const overlay =
    $("sidebarOverlay");


  sidebar?.classList.toggle("open");

  overlay?.classList.toggle("show");

}


function openSidebar() {

  $("sidebar")?.classList.add("open");

  $("sidebarOverlay")?.classList.add("show");

}


function closeSidebar() {

  $("sidebar")?.classList.remove("open");

  $("sidebarOverlay")?.classList.remove("show");

}


/* ================= MODAL ================= */

function openModal(content) {

  const overlay =
    $("modalOverlay");

  const body =
    $("modalBody");


  if (!overlay || !body) return;


  body.innerHTML = content;

  overlay.classList.add("show");

}


function closeModal(event) {

  if (
    event &&
    event.target &&
    event.target.id !==
    "modalOverlay"
  ) {

    return;

  }


  $("modalOverlay")
    ?.classList.remove("show");

}


/* ================= TOAST ================= */

let toastTimer = null;


function showToast(message) {

  const toast =
    $("toast");

  if (!toast) return;


  toast.textContent =
    message;


  toast.classList.add("show");


  clearTimeout(toastTimer);


  toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 2500);

}


/* ================= LOGOUT ================= */

function logoutUser() {

  const confirmed =
    confirm(
      "Logout လုပ်မလား?"
    );


  if (!confirmed) return;


  showToast(
    "Logout feature ကို နောက် Version တွင် ထည့်ပေးပါမည်။"
  );

}


/* ================= INITIALIZE ================= */

function initializeApp() {

  updateDashboardStats();

  renderCourses();

  renderLessons();

  renderProgress();

  renderReports();

  navigate("dashboard");

}


/* ================= KEYBOARD ================= */

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


/* ================= DOM READY ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initializeApp();

  }
);


/* ================= GLOBAL EXPORT ================= */

window.navigate =
  navigate;

window.goDashboard =
  goDashboard;

window.openLessons =
  openLessons;

window.openCategory =
  openCategory;

window.openBusinessPlan =
  openBusinessPlan;

window.openTools =
  openTools;

window.openAITool =
  openAITool;

window.openProfile =
  openProfile;

window.showNotification =
  showNotification;

window.toggleSidebar =
  toggleSidebar;

window.openSidebar =
  openSidebar;

window.closeSidebar =
  closeSidebar;

window.logoutUser =
  logoutUser;

window.continueLearning =
  continueLearning;

window.openLesson =
  openLesson;

window.openLessonById =
  openLessonById;

window.completeLesson =
  completeLesson;

window.previousLesson =
  previousLesson;

window.nextLesson =
  nextLesson;

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

window.performSearch =
  performSearch;

window.openModal =
  openModal;

window.closeModal =
  closeModal;

window.showToast =
  showToast;


/* =========================================================
   END
   ========================================================= */
