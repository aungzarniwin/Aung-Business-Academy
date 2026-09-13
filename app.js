/* =========================================================
   AUNG BUSINESS ACADEMY
   STABLE CLICK + NAVIGATION CONTROLLER
   V10.0
   ========================================================= */

(function () {
  "use strict";

  console.log("ABA V10 starting...");

  /* =======================================================
     PAGE CONFIG
  ======================================================= */

  const PAGES = {
    dashboardPage: [
      "Dashboard",
      "Business growth starts with better decisions."
    ],

    coursesPage: [
      "My Courses",
      "Business courses and learning paths"
    ],

    lessonsPage: [
      "Lessons",
      "Learn practical business skills"
    ],

    progressPage: [
      "My Progress",
      "Track your learning progress"
    ],

    salesPage: [
      "Sales Manager",
      "Sales management tools and performance"
    ],

    calculatorPage: [
      "Pricing Calculator",
      "Calculate pricing, profit and targets"
    ],

    reportsPage: [
      "Reports",
      "Business performance overview"
    ],

    aiPage: [
      "AI Business Coach",
      "Business coaching and practical guidance"
    ],

    toolsPage: [
      "AI Tools",
      "Useful business productivity tools"
    ],

    settingsPage: [
      "Settings",
      "Manage your profile and preferences"
    ]
  };


  /* =======================================================
     DATA
  ======================================================= */

  const COURSES = [
    {
      id: 1,
      name: "Sales Management Mastery",
      icon: "📊",
      description:
        "Sales Target, Team Management, Sales Execution, Distributor Management နှင့် KPI Analysis။"
    },

    {
      id: 2,
      name: "Business Fundamentals",
      icon: "🏢",
      description:
        "Business Model, Customer, Revenue, Cost နှင့် Profit အခြေခံများ။"
    },

    {
      id: 3,
      name: "Marketing & Brand",
      icon: "📣",
      description:
        "Marketing Strategy, Customer Segment, Brand Positioning နှင့် Promotion။"
    },

    {
      id: 4,
      name: "People & Leadership",
      icon: "👥",
      description:
        "Team Leadership, Coaching, Motivation နှင့် Performance Management။"
    }
  ];


  const LESSONS = [
    ["လုပ်ငန်းဆိုတာ ဘာလဲ?", "Business Basics"],
    ["Business Model အခြေခံ", "Business Basics"],
    ["Customer ကို နားလည်ခြင်း", "Business Basics"],
    ["Revenue ဘယ်လိုဖြစ်လာသလဲ?", "Business Basics"],
    ["Cost နဲ့ Profit အခြေခံ", "Profit & Loss"],

    ["Strategic Thinking ဆိုတာ", "Strategic Thinking"],
    ["Vision နဲ့ Mission", "Strategic Thinking"],
    ["SWOT Analysis", "Strategic Thinking"],
    ["ပြိုင်ဘက်ကို ခွဲခြမ်းခြင်း", "Strategic Thinking"],

    ["Brand ဆိုတာ ဘာလဲ?", "Brand Basics"],
    ["Brand Positioning", "Brand Basics"],

    ["Marketing အခြေခံ", "Marketing Basics"],
    ["Customer Segment", "Marketing Basics"],
    ["Promotion Strategy", "Marketing Basics"],

    ["Sales Process အခြေခံ", "Sales Basics"],
    ["Sales Target သတ်မှတ်ခြင်း", "Sales Basics"],
    ["Sales Execution", "Sales Basics"],

    ["Customer Relationship Management", "Customer Service"],
    ["Customer Complaint ကို ကိုင်တွယ်ခြင်း", "Customer Service"],

    ["Negotiation အခြေခံ", "Negotiation"],
    ["Price Negotiation", "Negotiation"],

    ["Team Leadership", "People Management"],
    ["Coaching & Feedback", "People Management"],
    ["Performance Management", "People Management"],
    ["Manager ရဲ့ Daily Routine", "People Management"],

    ["Profit Margin တွက်ခြင်း", "Profit & Loss"],
    ["Break-even Point", "Profit & Loss"],

    ["Goal Setting", "Goal Setting"],
    ["KPI သတ်မှတ်ခြင်း", "Goal Setting"],
    ["Execution Plan", "Goal Setting"]
  ].map(function (item, index) {
    return {
      id: index + 1,
      title: item[0],
      category: item[1],
      description:
        "ဒီသင်ခန်းစာမှာ " +
        item[0] +
        " ကို လက်တွေ့ Business အမြင်နဲ့ လေ့လာပါမယ်။"
    };
  });


  /* =======================================================
     STORAGE
  ======================================================= */

  const STORAGE_KEY =
    "ABA_COMPLETED_LESSONS_V10";


  function getCompleted() {

    try {

      const data =
        localStorage.getItem(STORAGE_KEY);

      if (!data) return [];

      const result =
        JSON.parse(data);

      return Array.isArray(result)
        ? result
        : [];

    } catch (error) {

      console.warn(error);

      return [];

    }
  }


  function saveCompleted(list) {

    try {

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(list)
      );

    } catch (error) {

      console.warn(error);

    }

  }


  /* =======================================================
     BASIC HELPERS
  ======================================================= */

  function $(id) {
    return document.getElementById(id);
  }


  function esc(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* =======================================================
     NAVIGATION
  ======================================================= */

  function go(page) {

    if (!PAGES[page]) {
      page = "dashboardPage";
    }


    const pages =
      document.querySelectorAll(".page");


    pages.forEach(function (item) {

      item.classList.remove("active");

      /*
       * IMPORTANT:
       * Do NOT use inline display:none here.
       * CSS controls page visibility.
       */

    });


    const target =
      $(page);


    if (!target) {

      console.error(
        "ABA: page not found:",
        page
      );

      return;

    }


    target.classList.add("active");


    /* Sidebar active */

    document
      .querySelectorAll(
        ".nav-item[data-page]"
      )
      .forEach(function (button) {

        button.classList.toggle(
          "active",
          button.dataset.page === page
        );

      });


    /* Mobile active */

    document
      .querySelectorAll(
        ".mobile-nav [data-page]"
      )
      .forEach(function (button) {

        button.classList.toggle(
          "active",
          button.dataset.page === page
        );

      });


    /* Header */

    const title =
      $("pageTitle");

    const subtitle =
      $("pageSubtitle");


    if (title) {

      title.textContent =
        PAGES[page][0];

    }


    if (subtitle) {

      subtitle.textContent =
        PAGES[page][1];

    }


    /* Close mobile sidebar */

    const sidebar =
      $("sidebar");

    const overlay =
      $("sidebarOverlay");


    if (sidebar) {

      sidebar.classList.remove("open");

    }


    if (overlay) {

      overlay.classList.remove("show");

    }


    /* Render page */

    if (page === "coursesPage") {
      renderCourses();
    }

    if (page === "lessonsPage") {
      renderLessons();
    }

    if (page === "progressPage") {
      updateProgress();
    }

    if (page === "salesPage") {
      renderSales();
    }

    if (page === "reportsPage") {
      renderReports();
    }


    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  window.navigate = go;


  /* =======================================================
     COURSES
  ======================================================= */

  function renderCourses() {

    const box =
      $("coursesList");

    if (!box) return;


    box.innerHTML =
      COURSES.map(function (course) {

        return `
          <div class="course-card">

            <div class="course-cover">
              <span>COURSE</span>
              <strong>${course.icon}</strong>
            </div>

            <div class="course-card-body">

              <span class="eyebrow">
                BUSINESS ACADEMY
              </span>

              <h3>
                ${esc(course.name)}
              </h3>

              <p>
                ${esc(course.description)}
              </p>

              <button
                type="button"
                class="primary-btn small"
                data-page="lessonsPage">

                Start Learning →

              </button>

            </div>

          </div>
        `;

      }).join("");

  }


  /* =======================================================
     LESSONS
  ======================================================= */

  let lessonFilter = "All";
  let lessonSearch = "";


  function renderLessons() {

    const box =
      $("lessonsList");

    if (!box) return;


    const completed =
      getCompleted();


    let list =
      LESSONS.slice();


    if (
      lessonFilter &&
      lessonFilter !== "All"
    ) {

      let category =
        lessonFilter;


      if (lessonFilter === "Sales") {
        category = "Sales Basics";
      }

      if (lessonFilter === "Marketing") {
        category = "Marketing Basics";
      }

      if (lessonFilter === "People Management") {
        category = "People Management";
      }

      if (lessonFilter === "Finance") {
        category = "Profit & Loss";
      }


      list =
        list.filter(function (lesson) {

          return lesson.category === category;

        });

    }


    if (lessonSearch) {

      const search =
        lessonSearch.toLowerCase();


      list =
        list.filter(function (lesson) {

          return (
            lesson.title
              .toLowerCase()
              .includes(search) ||

            lesson.category
              .toLowerCase()
              .includes(search)
          );

        });

    }


    if (!list.length) {

      box.innerHTML = `
        <div style="
          padding:40px;
          text-align:center;
          width:100%;
        ">
          <div style="font-size:40px;">🔎</div>
          <h3>သင်ခန်းစာ မတွေ့ပါ</h3>
          <p>Search / Filter ကို ပြန်စစ်ကြည့်ပါ။</p>
        </div>
      `;

      return;

    }


    box.innerHTML =
      list.map(function (lesson) {

        const done =
          completed.includes(lesson.id);


        return `
          <div
            class="lesson-card"
            data-category="${esc(lesson.category)}">

            <div class="lesson-number">
              ${lesson.id}
            </div>

            <div class="lesson-card-content">

              <span class="lesson-category">
                ${esc(lesson.category)}
              </span>

              <h3>
                ${esc(lesson.title)}
              </h3>

              <p>
                ${esc(lesson.description)}
              </p>

              <button
                type="button"
                class="primary-btn small"
                data-lesson="${lesson.id}">

                ${done
                  ? "✓ Completed"
                  : "Start Lesson →"}

              </button>

            </div>

          </div>
        `;

      }).join("");

  }


  /* =======================================================
     LESSON OPEN
  ======================================================= */

  function openLesson(id) {

    const lesson =
      LESSONS.find(function (item) {

        return item.id === Number(id);

      });


    if (!lesson) return;


    const completed =
      getCompleted().includes(lesson.id);


    openModal(`

      <div class="modal-content-inner">

        <span class="eyebrow">
          ${esc(lesson.category)}
        </span>

        <h2>
          ${esc(lesson.title)}
        </h2>

        <p>
          ${esc(lesson.description)}
        </p>

        <div style="
          margin-top:20px;
          padding:18px;
          background:#f4f6f9;
          border-radius:14px;
        ">

          <strong>
            လက်တွေ့အသုံးချရန်
          </strong>

          <p style="margin-top:8px;">
            ဒီသင်ခန်းစာကနေ ရရှိတဲ့
            အချက်တစ်ခုကို ကိုယ့်လုပ်ငန်းမှာ
            လက်တွေ့အသုံးချကြည့်ပါ။
          </p>

        </div>

        <button
          type="button"
          class="primary-btn"
          style="margin-top:20px;"
          data-complete="${lesson.id}">

          ${
            completed
              ? "✓ Completed — ပြန်ပြောင်းရန်"
              : "✓ Mark as Completed"
          }

        </button>

      </div>

    `);

  }


  /* =======================================================
     PROGRESS
  ======================================================= */

  function updateProgress() {

    const completed =
      getCompleted();

    const total =
      LESSONS.length;

    const count =
      completed.length;

    const percent =
      total
        ? Math.round(
            count / total * 100
          )
        : 0;


    const fields = {

      statCourses: COURSES.length,

      statLessons: total,

      statCompleted: count,

      statProgress:
        percent + "%",

      progressNumber:
        percent + "%",

      progressCompleted:
        count,

      progressRemaining:
        total - count,

      progressText:
        `${total} lessons ထဲမှ ${count} lessons ပြီးဆုံးထားပါသည်။`,

      dashboardCoursePercent:
        `${percent}% completed`

    };


    Object.keys(fields)
      .forEach(function (id) {

        const element =
          $(id);

        if (element) {

          element.textContent =
            fields[id];

        }

      });


    const bar =
      $("dashboardCourseProgress");


    if (bar) {

      bar.style.width =
        percent + "%";

    }

  }


  /* =======================================================
     SALES
  ======================================================= */

  function renderSales() {

    const box =
      $("salesManagerContent");

    if (!box) return;


    box.innerHTML = `

      <div class="stats-grid">

        <div class="stat-card">
          <div class="stat-icon purple">🎯</div>
          <div>
            <span>Target</span>
            <strong>100%</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon green">📈</div>
          <div>
            <span>Achievement</span>
            <strong>0%</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon orange">👥</div>
          <div>
            <span>Team</span>
            <strong>Active</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon pink">📊</div>
          <div>
            <span>KPI</span>
            <strong>Review</strong>
          </div>
        </div>

      </div>

      <div class="section-header">

        <div>
          <h2>Sales Management Framework</h2>
          <p>
            Target → People → Execution → Result
          </p>
        </div>

      </div>

      <div class="learning-grid">

        <div class="learning-card">
          <span>🎯</span>
          <strong>Target Planning</strong>
          <small>Monthly / Weekly / Daily</small>
        </div>

        <div class="learning-card">
          <span>👥</span>
          <strong>Team Management</strong>
          <small>Coaching & Review</small>
        </div>

        <div class="learning-card">
          <span>🚚</span>
          <strong>Distributor Management</strong>
          <small>Coverage & Execution</small>
        </div>

        <div class="learning-card">
          <span>📊</span>
          <strong>KPI Analysis</strong>
          <small>Gap & Action Plan</small>
        </div>

      </div>

    `;

  }


  /* =======================================================
     REPORTS
  ======================================================= */

  function renderReports() {

    const box =
      $("reportsContent");

    if (!box) return;


    const completed =
      getCompleted().length;


    const percent =
      Math.round(
        completed /
        LESSONS.length *
        100
      );


    box.innerHTML = `

      <div class="stats-grid">

        <div class="stat-card">
          <div class="stat-icon purple">📚</div>
          <div>
            <span>Lessons</span>
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
            <span>Progress</span>
            <strong>${percent}%</strong>
          </div>
        </div>

        <div class="stat-card">
          <div class="stat-icon pink">🎓</div>
          <div>
            <span>Courses</span>
            <strong>${COURSES.length}</strong>
          </div>
        </div>

      </div>

    `;

  }


  /* =======================================================
     MODAL
  ======================================================= */

  function openModal(html) {

    const overlay =
      $("modalOverlay");

    const body =
      $("modalBody");


    if (!overlay || !body) {
      return;
    }


    body.innerHTML =
      html;


    overlay.classList.add("show");

    overlay.style.display =
      "flex";


    overlay.style.pointerEvents =
      "auto";

  }


  window.openModal =
    openModal;


  function closeModal() {

    const overlay =
      $("modalOverlay");


    if (!overlay) return;


    overlay.classList.remove("show");

    overlay.style.display =
      "none";

    overlay.style.pointerEvents =
      "none";

  }


  window.closeModal =
    closeModal;


  /* =======================================================
     PROFILE
  ======================================================= */

  function profile() {

    openModal(`

      <div class="modal-content-inner">

        <span class="eyebrow">
          PROFILE
        </span>

        <h2>
          Aung Zar Ni Win
        </h2>

        <p>
          <strong>Position:</strong>
          Business Manager
        </p>

        <p>
          <strong>Academy:</strong>
          Aung Business Academy
        </p>

      </div>

    `);

  }


  /* =======================================================
     CALCULATOR
  ======================================================= */

  function calculator(type) {

    let html = "";


    if (type === "profit") {

      html = `

        <div class="modal-content-inner">

          <h2>💰 Profit Calculator</h2>

          <input
            id="revenue"
            type="number"
            placeholder="Revenue">

          <input
            id="cost"
            type="number"
            placeholder="Total Cost"
            style="margin-top:10px;">

          <button
            type="button"
            class="primary-btn"
            data-calculate="profit"
            style="margin-top:15px;">

            Calculate

          </button>

          <div
            id="calculatorResult"
            style="margin-top:15px;">
          </div>

        </div>

      `;

    }


    else if (type === "pricing") {

      html = `

        <div class="modal-content-inner">

          <h2>🏷️ Pricing Calculator</h2>

          <input
            id="cost"
            type="number"
            placeholder="Cost">

          <input
            id="margin"
            type="number"
            placeholder="Margin %"
            style="margin-top:10px;">

          <button
            type="button"
            class="primary-btn"
            data-calculate="pricing"
            style="margin-top:15px;">

            Calculate

          </button>

          <div
            id="calculatorResult"
            style="margin-top:15px;">
          </div>

        </div>

      `;

    }


    else if (type === "break-even") {

      html = `

        <div class="modal-content-inner">

          <h2>⚖️ Break-even Calculator</h2>

          <input
            id="fixedCost"
            type="number"
            placeholder="Fixed Cost">

          <input
            id="sellingPrice"
            type="number"
            placeholder="Selling Price"
            style="margin-top:10px;">

          <input
            id="variableCost"
            type="number"
            placeholder="Variable Cost"
            style="margin-top:10px;">

          <button
            type="button"
            class="primary-btn"
            data-calculate="break-even"
            style="margin-top:15px;">

            Calculate

          </button>

          <div
            id="calculatorResult"
            style="margin-top:15px;">
          </div>

        </div>

      `;

    }


    else {

      html = `

        <div class="modal-content-inner">

          <h2>🎯 Sales Target Calculator</h2>

          <input
            id="monthlyTarget"
            type="number"
            placeholder="Monthly Target">

          <input
            id="workingDays"
            type="number"
            value="26"
            placeholder="Working Days"
            style="margin-top:10px;">

          <button
            type="button"
            class="primary-btn"
            data-calculate="sales-target"
            style="margin-top:15px;">

            Calculate

          </button>

          <div
            id="calculatorResult"
            style="margin-top:15px;">
          </div>

        </div>

      `;

    }


    openModal(html);

  }


  /* =======================================================
     CALCULATE
  ======================================================= */

  function calculate(type) {

    const result =
      $("calculatorResult");

    if (!result) return;


    if (type === "profit") {

      const revenue =
        Number($("revenue")?.value || 0);

      const cost =
        Number($("cost")?.value || 0);

      result.innerHTML =
        `<strong>Profit = ${(revenue - cost).toLocaleString()}</strong>`;

    }


    if (type === "pricing") {

      const cost =
        Number($("cost")?.value || 0);

      const margin =
        Number($("margin")?.value || 0);


      if (margin >= 100) {

        result.textContent =
          "Margin 100% ထက်နည်းရပါမယ်။";

        return;

      }


      const price =
        cost /
        (1 - margin / 100);


      result.innerHTML =
        `<strong>Selling Price = ${price.toLocaleString()}</strong>`;

    }


    if (type === "break-even") {

      const fixed =
        Number($("fixedCost")?.value || 0);

      const price =
        Number($("sellingPrice")?.value || 0);

      const variable =
        Number($("variableCost")?.value || 0);


      const contribution =
        price - variable;


      if (contribution <= 0) {

        result.textContent =
          "Selling Price က Variable Cost ထက်ကြီးရပါမယ်။";

        return;

      }


      const units =
        fixed / contribution;


      result.innerHTML =
        `<strong>Break-even = ${Math.ceil(units).toLocaleString()} units</strong>`;

    }


    if (type === "sales-target") {

      const target =
        Number($("monthlyTarget")?.value || 0);

      const days =
        Number($("workingDays")?.value || 0);


      if (!days) {

        result.textContent =
          "Working Days ထည့်ပါ။";

        return;

      }


      const daily =
        target / days;


      result.innerHTML =
        `<strong>Daily Target = ${daily.toLocaleString()}</strong>`;

    }

  }


  /* =======================================================
     AI
  ======================================================= */

  function aiResponse(question) {

    const q =
      question.toLowerCase();


    if (
      q.includes("target") ||
      q.includes("sales")
    ) {

      return `
        Sales Target မပြည့်ရင်
        People, Numbers နဲ့ Execution
        သုံးပိုင်းစစ်ပါ။

        1. Team Performance
        2. Target Gap
        3. Customer Coverage
        4. Daily Action Plan
        5. Regular Review
      `;

    }


    if (
      q.includes("team") ||
      q.includes("performance")
    ) {

      return `
        Team Performance တိုးတက်ဖို့
        Clear Expectations ပေးပြီး
        Coaching, Review, Feedback နဲ့
        Accountability ကို စနစ်တကျလုပ်ပါ။
      `;

    }


    if (
      q.includes("profit") ||
      q.includes("margin")
    ) {

      return `
        Profit တိုးဖို့ Revenue တစ်ခုတည်း
        မကြည့်ဘဲ Cost နဲ့ Margin ကိုပါ
        စောင့်ကြည့်ပါ။

        Profit = Revenue − Cost
      `;

    }


    return `
      Business Problem ကို
      Current Situation →
      Root Cause →
      Action Plan →
      KPI →
      Review
      ဆိုတဲ့ Framework နဲ့ ခွဲခြမ်းပါ။
    `;

  }


  function sendAI() {

    const input =
      $("aiInput");

    const chat =
      $("chatMessages");


    if (!input || !chat) return;


    const text =
      input.value.trim();


    if (!text) return;


    chat.insertAdjacentHTML(
      "beforeend",
      `
        <div class="chat-message user">

          <div class="chat-avatar">
            👤
          </div>

          <div class="message-content">

            <strong>You</strong>

            <p>
              ${esc(text)}
            </p>

          </div>

        </div>
      `
    );


    chat.insertAdjacentHTML(
      "beforeend",
      `
        <div class="chat-message ai">

          <div class="chat-avatar">
            🤖
          </div>

          <div class="message-content">

            <strong>
              Aung AI Business Coach
            </strong>

            <p>
              ${esc(aiResponse(text))}
            </p>

          </div>

        </div>
      `
    );


    input.value = "";

    chat.scrollTop =
      chat.scrollHeight;

  }


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  function setupMobile() {

    const menu =
      $("mobileMenu");

    const sidebar =
      $("sidebar");

    const overlay =
      $("sidebarOverlay");


    if (!menu || !sidebar) return;


    menu.addEventListener(
      "click",
      function (event) {

        event.preventDefault();
        event.stopPropagation();


        sidebar.classList.toggle(
          "open"
        );


        if (overlay) {

          overlay.classList.toggle(
            "show",
            sidebar.classList.contains("open")
          );

        }

      }
    );


    if (overlay) {

      overlay.addEventListener(
        "click",
        function () {

          sidebar.classList.remove(
            "open"
          );

          overlay.classList.remove(
            "show"
          );

        }
      );

    }

  }


  /* =======================================================
     SEARCH
  ======================================================= */

  function setupSearch() {

    const global =
      $("globalSearch");

    const lessons =
      $("lessonSearch");


    if (global) {

      global.addEventListener(
        "keydown",
        function (event) {

          if (event.key !== "Enter") {
            return;
          }


          event.preventDefault();


          lessonSearch =
            global.value.trim();


          go("lessonsPage");

          renderLessons();

        }
      );

    }


    if (lessons) {

      lessons.addEventListener(
        "input",
        function () {

          lessonSearch =
            lessons.value.trim();


          renderLessons();

        }
      );

    }

  }


  /* =======================================================
     NOTIFICATION
  ======================================================= */

  function setupNotification() {

    const button =
      $("notificationBtn");


    if (!button) return;


    button.addEventListener(
      "click",
      function () {

        alert(
          "လက်ရှိ Notification အသစ် မရှိသေးပါ။"
        );

      }
    );

  }


  /* =======================================================
     MODAL CLOSE
  ======================================================= */

  function setupModal() {

    const close =
      $("modalClose");

    const overlay =
      $("modalOverlay");


    if (close) {

      close.addEventListener(
        "click",
        closeModal
      );

    }


    if (overlay) {

      overlay.addEventListener(
        "click",
        function (event) {

          if (
            event.target === overlay
          ) {

            closeModal();

          }

        }
      );

    }


    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape"
        ) {

          closeModal();

        }

      }
    );

  }


  /* =======================================================
     MASTER CLICK HANDLER
  ======================================================= */

  function setupClicks() {

    document.addEventListener(
      "click",
      function (event) {

        /*
         * Find the closest actual clickable element.
         */

        const target =
          event.target.closest(
            "[data-page], [data-action], [data-category], [data-calculator], [data-filter], [data-prompt], [data-ai-tool], [data-lesson], [data-complete], [data-calculate]"
          );


        if (!target) {
          return;
        }


        /* PAGE */

        if (target.dataset.page) {

          event.preventDefault();

          go(
            target.dataset.page
          );

          return;

        }


        /* ACTION */

        if (
          target.dataset.action ===
          "lessons"
        ) {

          event.preventDefault();

          go("lessonsPage");

          return;

        }


        if (
          target.dataset.action ===
          "profile"
        ) {

          event.preventDefault();

          profile();

          return;

        }


        /* CATEGORY */

        if (
          target.dataset.category &&
          target.classList.contains(
            "learning-card"
          )
        ) {

          event.preventDefault();

          lessonFilter =
            target.dataset.category;

          go("lessonsPage");

          return;

        }


        /* FILTER */

        if (
          target.dataset.filter
        ) {

          event.preventDefault();

          lessonFilter =
            target.dataset.filter;

          document
            .querySelectorAll(
              ".filter-btn"
            )
            .forEach(
              function (button) {

                button.classList.toggle(
                  "active",
                  button.dataset.filter ===
                    lessonFilter
                );

              }
            );


          renderLessons();

          return;

        }


        /* CALCULATOR */

        if (
          target.dataset.calculator
        ) {

          event.preventDefault();

          calculator(
            target.dataset.calculator
          );

          return;

        }


        /* LESSON */

        if (
          target.dataset.lesson
        ) {

          event.preventDefault();

          openLesson(
            target.dataset.lesson
          );

          return;

        }


        /* COMPLETE */

        if (
          target.dataset.complete
        ) {

          event.preventDefault();


          const id =
            Number(
              target.dataset.complete
            );


          let list =
            getCompleted();


          if (
            list.includes(id)
          ) {

            list =
              list.filter(
                function (item) {
                  return item !== id;
                }
              );

          } else {

            list.push(id);

          }


          saveCompleted(list);

          closeModal();

          renderLessons();

          updateProgress();

          return;

        }


        /* AI PROMPT */

        if (
          target.dataset.prompt
        ) {

          event.preventDefault();

          go("aiPage");


          const input =
            $("aiInput");


          if (input) {

            input.value =
              target.dataset.prompt;

            input.focus();

          }

          return;

        }


        /* AI TOOL */

        if (
          target.dataset.aiTool
        ) {

          event.preventDefault();

          openModal(`

            <div class="modal-content-inner">

              <span class="eyebrow">
                AI BUSINESS TOOL
              </span>

              <h2>
                ${esc(target.dataset.aiTool)}
              </h2>

              <p>
                ဒီ AI Tool ကို Business
                Decision, Strategy နဲ့
                Execution Planning အတွက်
                အသုံးပြုနိုင်ပါတယ်။
              </p>

            </div>

          `);

          return;

        }


        /* CALCULATE */

        if (
          target.dataset.calculate
        ) {

          event.preventDefault();

          calculate(
            target.dataset.calculate
          );

          return;

        }

      },
      true
    );

  }


  /* =======================================================
     AI BUTTON
  ======================================================= */

  function setupAI() {

    const send =
      $("aiSend");

    const input =
      $("aiInput");


    if (send) {

      send.addEventListener(
        "click",
        function (event) {

          event.preventDefault();

          sendAI();

        }
      );

    }


    if (input) {

      input.addEventListener(
        "keydown",
        function (event) {

          if (
            event.key === "Enter"
          ) {

            event.preventDefault();

            sendAI();

          }

        }
      );

    }

  }


  /* =======================================================
     SAFE CLICK CSS
  ======================================================= */

  function installClickCSS() {

    if (
      $("ABA_CLICK_FIX_V10")
    ) {
      return;
    }


    const style =
      document.createElement("style");


    style.id =
      "ABA_CLICK_FIX_V10";


    style.textContent = `

      html,
      body,
      .app,
      .main {
        pointer-events: auto !important;
      }

      button,
      input,
      select,
      textarea,
      a {
        pointer-events: auto !important;
        cursor: pointer;
      }

      .sidebar {
        pointer-events: auto !important;
      }

      .sidebar-overlay {
        pointer-events: none !important;
      }

      .sidebar-overlay.show {
        pointer-events: auto !important;
      }

      .modal-overlay:not(.show) {
        display: none !important;
        pointer-events: none !important;
      }

      .modal-overlay.show {
        display: flex !important;
        pointer-events: auto !important;
      }

      .page {
        pointer-events: auto !important;
      }

      .page.active {
        pointer-events: auto !important;
      }

    `;


    document.head.appendChild(
      style
    );

  }


  /* =======================================================
     INITIALIZE
  ======================================================= */

  function init() {

    try {

      installClickCSS();

      setupClicks();

      setupMobile();

      setupSearch();

      setupNotification();

      setupModal();

      setupAI();


      renderCourses();

      renderLessons();

      updateProgress();

      renderSales();

      renderReports();


      /*
       * Always start at Dashboard.
       */

      go("dashboardPage");


      console.log(
        "ABA V10 READY"
      );

    } catch (error) {

      console.error(
        "ABA INIT ERROR:",
        error
      );


      /*
       * Even if an optional feature
       * fails, keep Dashboard visible.
       */

      document
        .querySelectorAll(".page")
        .forEach(
          function (page) {

            page.classList.remove(
              "active"
            );

          }
        );


      const dashboard =
        $("dashboardPage");


      if (dashboard) {

        dashboard.classList.add(
          "active"
        );

      }

    }

  }


  /* =======================================================
     START
  ======================================================= */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

})();
