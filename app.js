// ============================================================
// AUNG BUSINESS ACADEMY
// APP.JS V5
// DASHBOARD + SIDEBAR + LESSONS + TOOLS + AI + PREMIUM
// ============================================================

(function () {
  "use strict";

  // ============================================================
  // CONFIG
  // ============================================================

  const API_BASE_URL =
    "https://aung-business-academy.onrender.com";

  const AI_API_URL =
    API_BASE_URL + "/api/ai";

  const USER_KEY =
    "aung_business_academy_user";

  const COMPLETED_KEY =
    "aung_business_academy_completed";

  const TRIAL_KEY =
    "aung_business_academy_trial";


  // ============================================================
  // LESSONS
  // ============================================================

  const lessons = [

    {
      id: 1,
      title: "Business Fundamentals",
      category: "Business",
      level: "Beginner",
      description: "Understand the basic principles of business.",
      content: "Business starts with solving customer problems and creating value."
    },

    {
      id: 2,
      title: "Business Model",
      category: "Business",
      level: "Beginner",
      description: "Learn how a business creates revenue.",
      content: "A business model explains customers, value, channels, revenue and costs."
    },

    {
      id: 3,
      title: "Market Research",
      category: "Marketing",
      level: "Beginner",
      description: "Learn how to understand your market.",
      content: "Market research helps you understand customers, competitors and demand."
    },

    {
      id: 4,
      title: "Customer Finding",
      category: "Customer Finding",
      level: "Beginner",
      description: "Learn practical customer acquisition.",
      content: "Find customers by understanding their needs, problems and buying behavior."
    },

    {
      id: 5,
      title: "Marketing Fundamentals",
      category: "Marketing",
      level: "Beginner",
      description: "Understand the foundation of marketing.",
      content: "Marketing connects the right product with the right customer."
    },

    {
      id: 6,
      title: "Digital Marketing",
      category: "Digital Marketing",
      level: "Intermediate",
      description: "Learn digital channels for business growth.",
      content: "Digital marketing includes social media, search, content and online advertising."
    },

    {
      id: 7,
      title: "Content Marketing",
      category: "Content Marketing",
      level: "Intermediate",
      description: "Create content that attracts customers.",
      content: "Useful content builds trust and attracts potential customers."
    },

    {
      id: 8,
      title: "Sales Fundamentals",
      category: "Sales",
      level: "Beginner",
      description: "Learn the fundamentals of professional selling.",
      content: "Sales is the process of understanding customer needs and presenting value."
    },

    {
      id: 9,
      title: "Sales Strategy",
      category: "Sales Strategy",
      level: "Intermediate",
      description: "Build a practical sales strategy.",
      content: "A sales strategy defines target customers, channels, activities and targets."
    },

    {
      id: 10,
      title: "Negotiation Skills",
      category: "Negotiation",
      level: "Intermediate",
      description: "Improve your negotiation skills.",
      content: "Good negotiation creates value while protecting your business interests."
    },

    {
      id: 11,
      title: "Sales Management",
      category: "Sales Management",
      level: "Advanced",
      description: "Manage sales teams and performance.",
      content: "Sales managers focus on targets, people, execution, coaching and performance."
    },

    {
      id: 12,
      title: "Leadership Fundamentals",
      category: "Leadership",
      level: "Beginner",
      description: "Understand effective leadership.",
      content: "Leadership means setting direction, developing people and taking responsibility."
    },

    {
      id: 13,
      title: "Strategic Thinking",
      category: "Strategy",
      level: "Advanced",
      description: "Think strategically about business.",
      content: "Strategic thinking connects long-term goals with practical actions."
    },

    {
      id: 14,
      title: "Decision Making",
      category: "Leadership",
      level: "Intermediate",
      description: "Make better business decisions.",
      content: "Good decisions require facts, alternatives, risks and clear priorities."
    },

    {
      id: 15,
      title: "Team Leadership",
      category: "Leadership",
      level: "Intermediate",
      description: "Build and lead strong teams.",
      content: "Strong teams need clear expectations, ownership, coaching and feedback."
    },

    {
      id: 16,
      title: "Brand Fundamentals",
      category: "Branding",
      level: "Beginner",
      description: "Understand the fundamentals of branding.",
      content: "A brand represents the experience and value customers associate with a business."
    },

    {
      id: 17,
      title: "Brand Positioning",
      category: "Branding",
      level: "Intermediate",
      description: "Position your business in the market.",
      content: "Positioning defines why customers should choose your brand."
    },

    {
      id: 18,
      title: "People Management",
      category: "Management",
      level: "Intermediate",
      description: "Manage people effectively.",
      content: "People management includes expectations, communication, coaching and accountability."
    },

    {
      id: 19,
      title: "Recruitment",
      category: "Recruitment",
      level: "Intermediate",
      description: "Learn practical recruitment principles.",
      content: "Good recruitment starts with clear roles, requirements and selection criteria."
    },

    {
      id: 20,
      title: "Performance Management",
      category: "Performance Management",
      level: "Advanced",
      description: "Improve team performance.",
      content: "Performance management requires targets, reviews, feedback and development."
    },

    {
      id: 21,
      title: "Coaching",
      category: "Coaching",
      level: "Advanced",
      description: "Develop people through coaching.",
      content: "Effective coaching helps employees identify gaps and improve their capability."
    },

    {
      id: 22,
      title: "Revenue Management",
      category: "Revenue Management",
      level: "Intermediate",
      description: "Understand business revenue.",
      content: "Revenue is the money generated from selling products or services."
    },

    {
      id: 23,
      title: "Profit & Loss",
      category: "Finance",
      level: "Intermediate",
      description: "Understand profit and loss.",
      content: "Profit is revenue minus the costs required to operate the business."
    },

    {
      id: 24,
      title: "Cash Flow",
      category: "Finance",
      level: "Intermediate",
      description: "Manage business cash flow.",
      content: "Cash flow measures money coming into and leaving a business."
    },

    {
      id: 25,
      title: "Financial Analysis",
      category: "Finance",
      level: "Advanced",
      description: "Analyze business financial performance.",
      content: "Financial analysis helps identify profitability, efficiency and financial risks."
    },

    {
      id: 26,
      title: "Time Management",
      category: "Productivity",
      level: "Beginner",
      description: "Improve your use of time.",
      content: "Prioritize important activities and protect focused working time."
    },

    {
      id: 27,
      title: "Goal Setting",
      category: "Productivity",
      level: "Beginner",
      description: "Set measurable business goals.",
      content: "Effective goals should be clear, measurable and connected to business priorities."
    },

    {
      id: 28,
      title: "Daily Planning",
      category: "Productivity",
      level: "Beginner",
      description: "Plan your day effectively.",
      content: "Daily planning converts important goals into specific actions."
    },

    {
      id: 29,
      title: "Business Growth Strategy",
      category: "Strategy",
      level: "Advanced",
      description: "Create a growth strategy.",
      content: "Growth can come from more customers, higher frequency, new products or new markets."
    },

    {
      id: 30,
      title: "Business Execution",
      category: "Business",
      level: "Advanced",
      description: "Turn strategy into execution.",
      content: "Execution requires clear priorities, ownership, measurement and consistent follow-up."
    }

  ];


  // ============================================================
  // BASIC HELPERS
  // ============================================================

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


  // ============================================================
  // USER
  // ============================================================

  function getUser() {

    try {
      return JSON.parse(
        localStorage.getItem(USER_KEY)
      );
    } catch {
      return null;
    }

  }


  function saveUser(user) {

    localStorage.setItem(
      USER_KEY,
      JSON.stringify(user)
    );

  }


  function isLoggedIn() {
    return !!getUser();
  }


  function getUserName() {

    const user = getUser();

    return user?.name || "Aung";

  }


  // ============================================================
  // LOGIN
  // ============================================================

  function showLoginScreen() {

    showModal(`
      <div class="academy-modal">

        <h2>Welcome to Aung Business Academy</h2>

        <p>Enter your name to start learning.</p>

        <input
          id="loginName"
          class="tool-input"
          type="text"
          placeholder="Your name"
        >

        <button
          class="primary-button"
          onclick="handleLogin()">
          Continue →
        </button>

      </div>
    `);

  }


  function handleLogin() {

    const input = $("loginName");

    const name =
      input?.value.trim();

    if (!name) {

      showToast(
        "Please enter your name."
      );

      return;

    }

    saveUser({
      name: name,
      createdAt: new Date().toISOString()
    });

    closeModal();

    updateUserUI();

    showToast(
      "Welcome, " + name + "!"
    );

  }


  // ============================================================
  // PROGRESS
  // ============================================================

  function getCompletedLessons() {

    try {

      return JSON.parse(
        localStorage.getItem(COMPLETED_KEY)
      ) || [];

    } catch {

      return [];

    }

  }


  function saveCompletedLessons(list) {

    localStorage.setItem(
      COMPLETED_KEY,
      JSON.stringify(list)
    );

  }


  function isCompleted(id) {

    return getCompletedLessons()
      .includes(id);

  }


  // ============================================================
  // USER UI
  // ============================================================

  function updateUserUI() {

    const user = getUser();

    const name =
      user?.name || "Aung";

    document
      .querySelectorAll(".profile strong")
      .forEach(el => {
        el.textContent = name;
      });

    updateDashboard();

  }


  function updateDashboard() {

    const count =
      $("lessonCount");

    const progress =
      $("progress");

    if (count) {
      count.textContent =
        lessons.length;
    }

    const completed =
      getCompletedLessons().length;

    const percent =
      Math.round(
        (completed / lessons.length) * 100
      );

    if (progress) {
      progress.textContent =
        percent + "%";
    }

  }


  // ============================================================
  // DASHBOARD FIX
  // ============================================================

  function goDashboard() {

    closeModal();

    document
      .querySelectorAll(".nav-item")
      .forEach(item =>
        item.classList.remove("active")
      );

    const dashboard =
      document.querySelector(
        '.nav-item[onclick="goDashboard()"]'
      );

    if (dashboard) {
      dashboard.classList.add("active");
    }

    const title =
      $("pageTitle");

    const subtitle =
      $("pageSubtitle");

    if (title) {
      title.textContent =
        "Dashboard";
    }

    if (subtitle) {
      subtitle.textContent =
        "Learn Business. Build Business. Grow Business.";
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    showToast(
      "Dashboard"
    );

  }


  // ============================================================
  // SIDEBAR FIX
  // ============================================================

  function toggleSidebar() {

    const sidebar =
      document.querySelector(".sidebar");

    if (!sidebar) return;

    sidebar.classList.toggle(
      "mobile-open"
    );

  }


  function toggleMenu(menuId) {

    const menu =
      $(menuId);

    if (!menu) return;

    document
      .querySelectorAll(".submenu")
      .forEach(item => {

        if (item !== menu) {
          item.classList.remove("open");
        }

      });

    menu.classList.toggle("open");

  }


  function closeSidebarMobile() {

    const sidebar =
      document.querySelector(".sidebar");

    if (sidebar) {
      sidebar.classList.remove(
        "mobile-open"
      );
    }

  }


  // ============================================================
  // MODAL
  // ============================================================

  function showModal(html) {

    const modal =
      $("appModal");

    const body =
      $("modalBody");

    if (!modal || !body) return;

    body.innerHTML =
      html;

    modal.style.display =
      "flex";

    document.body.style.overflow =
      "hidden";

  }


  function closeModal() {

    const modal =
      $("appModal");

    if (!modal) return;

    modal.style.display =
      "none";

    document.body.style.overflow =
      "";

  }


  // ============================================================
  // PAGE TITLE
  // ============================================================

  function setPage(title, subtitle) {

    const titleEl =
      $("pageTitle");

    const subtitleEl =
      $("pageSubtitle");

    if (titleEl) {
      titleEl.textContent =
        title;
    }

    if (subtitleEl) {
      subtitleEl.textContent =
        subtitle;
    }

  }


  // ============================================================
  // LESSONS
  // ============================================================

  function openLessons() {

    closeSidebarMobile();

    setPage(
      "Business Lessons",
      "Learn practical business skills step by step."
    );

    const categories = [
      "All",
      "Business",
      "Marketing",
      "Sales",
      "Leadership",
      "Strategy",
      "Branding",
      "Management",
      "Finance",
      "Productivity"
    ];

    let html = `

      <div class="lesson-page">

        <h2>📚 Business Lessons</h2>

        <p>
          30 practical lessons from beginner to advanced.
        </p>

        <div class="lesson-filters">

    `;

    categories.forEach((category, index) => {

      html += `
        <button
          class="lesson-filter ${index === 0 ? "active" : ""}"
          onclick="filterLessons('${category}')">

          ${category}

        </button>
      `;

    });

    html += `
        </div>

        <div
          id="lessonList"
          class="quick-grid">

    `;

    lessons.forEach(lesson => {

      html +=
        createLessonCard(lesson);

    });

    html += `
        </div>

      </div>
    `;

    showModal(html);

  }


  function createLessonCard(lesson) {

    const completed =
      isCompleted(lesson.id);

    return `

      <div class="quick-card">

        <div class="quick-icon">
          ${completed ? "✅" : "📘"}
        </div>

        <div>

          <small>
            ${escapeHTML(lesson.category)}
          </small>

          <h3>
            ${escapeHTML(lesson.title)}
          </h3>

          <p>
            ${escapeHTML(lesson.description)}
          </p>

          <button
            class="primary-button"
            onclick="openLesson(${lesson.id})">

            ${completed ? "Review Lesson" : "Start Lesson"} →

          </button>

        </div>

      </div>

    `;

  }


  function filterLessons(category) {

    const list =
      $("lessonList");

    if (!list) return;

    const filtered =
      category === "All"
        ? lessons
        : lessons.filter(
            lesson =>
              lesson.category === category
          );

    list.innerHTML =
      filtered
        .map(createLessonCard)
        .join("");

  }


  function openLesson(id) {

    const lesson =
      lessons.find(
        item => item.id === Number(id)
      );

    if (!lesson) return;

    showLesson(lesson);

  }


  function showLesson(lesson) {

    const completed =
      isCompleted(lesson.id);

    showModal(`

      <div class="lesson-detail">

        <span class="welcome-label">
          ${escapeHTML(lesson.level)}
        </span>

        <h2>
          Lesson ${lesson.id}: 
          ${escapeHTML(lesson.title)}
        </h2>

        <p>
          ${escapeHTML(lesson.description)}
        </p>

        <div class="result-box">

          <h3>Key Learning</h3>

          <p>
            ${escapeHTML(lesson.content)}
          </p>

        </div>

        <button
          class="primary-button"
          onclick="markLessonComplete(${lesson.id})">

          ${completed
            ? "✓ Completed"
            : "Mark as Complete"}

        </button>

        <button
          class="secondary-button"
          onclick="openLessons()">

          ← Back to Lessons

        </button>

      </div>

    `);

  }


  function markLessonComplete(id) {

    const list =
      getCompletedLessons();

    if (!list.includes(Number(id))) {

      list.push(Number(id));

      saveCompletedLessons(list);

    }

    updateDashboard();

    showToast(
      "Lesson completed! 🎉"
    );

    const lesson =
      lessons.find(
        item => item.id === Number(id)
      );

    if (lesson) {
      showLesson(lesson);
    }

  }


  function continueLearning() {

    const completed =
      getCompletedLessons();

    const next =
      lessons.find(
        lesson =>
          !completed.includes(
            lesson.id
          )
      );

    if (next) {

      openLesson(next.id);

    } else {

      showToast(
        "All lessons completed! 🎉"
      );

    }

  }


  // ============================================================
  // CATEGORY
  // ============================================================

  function openCategory(category) {

    closeSidebarMobile();

    const normalized =
      String(category)
        .toLowerCase();

    const results =
      lessons.filter(
        lesson =>
          lesson.category
            .toLowerCase()
            .includes(normalized) ||
          normalized.includes(
            lesson.category.toLowerCase()
          )
      );

    if (!results.length) {

      showModal(`

        <div class="lesson-detail">

          <h2>
            📚 ${escapeHTML(category)}
          </h2>

          <p>
            More lessons for this category
            are coming soon.
          </p>

          <button
            class="primary-button"
            onclick="openLessons()">

            View All Lessons →

          </button>

        </div>

      `);

      return;

    }

    showModal(`

      <div class="lesson-page">

        <h2>
          ${escapeHTML(category)}
        </h2>

        <p>
          ${results.length} lesson(s) available.
        </p>

        <div class="quick-grid">

          ${results
            .map(createLessonCard)
            .join("")}

        </div>

      </div>

    `);

  }


  // ============================================================
  // BUSINESS TOOLS
  // ============================================================

  function openTools() {

    closeSidebarMobile();

    setPage(
      "Business Tools",
      "Practical calculators for your business."
    );

    showModal(`

      <div class="lesson-page">

        <h2>🛠️ Business Tools</h2>

        <p>
          Calculate important business numbers quickly.
        </p>

        <div class="quick-grid">

          ${toolCard(
            "💰",
            "Profit Calculator",
            "Calculate revenue, cost and profit.",
            "openProfitCalculator()"
          )}

          ${toolCard(
            "🏷️",
            "Pricing Calculator",
            "Calculate selling price and margin.",
            "openPricingCalculator()"
          )}

          ${toolCard(
            "⚖️",
            "Break-Even Calculator",
            "Find your break-even sales level.",
            "openBreakEvenCalculator()"
          )}

          ${toolCard(
            "🎯",
            "Sales Target",
            "Calculate required sales.",
            "openSalesTargetCalculator()"
          )}

        </div>

      </div>

    `);

  }


  function toolCard(
    icon,
    title,
    description,
    action
  ) {

    return `

      <div
        class="quick-card"
        onclick="${action}">

        <div class="quick-icon">
          ${icon}
        </div>

        <div>

          <h3>
            ${title}
          </h3>

          <p>
            ${description}
          </p>

          <span>
            Open Tool →

          </span>

        </div>

      </div>

    `;

  }


  function inputField(
    id,
    label,
    placeholder
  ) {

    return `

      <label style="
        display:block;
        margin:12px 0 6px;
        font-weight:600;
      ">

        ${label}

      </label>

      <input
        id="${id}"
        class="tool-input"
        type="number"
        placeholder="${placeholder}"
      >

    `;

  }


  function calculateButton(
    text,
    action
  ) {

    return `

      <button
        class="primary-button"
        onclick="${action}">

        ${text}

      </button>

    `;

  }


  function resultBox(
    id
  ) {

    return `

      <div
        id="${id}"
        class="result-box"
        style="margin-top:18px;">

      </div>

    `;

  }


  function formatNumber(number) {

    return Number(number || 0)
      .toLocaleString("en-US");

  }


  // ============================================================
  // PROFIT
  // ============================================================

  function openProfitCalculator() {

    showModal(`

      <div>

        <h2>💰 Profit Calculator</h2>

        ${inputField(
          "revenue",
          "Revenue",
          "1000000"
        )}

        ${inputField(
          "cost",
          "Total Cost",
          "700000"
        )}

        ${calculateButton(
          "Calculate Profit",
          "calculateProfit()"
        )}

        ${resultBox(
          "profitResult"
        )}

      </div>

    `);

  }


  function calculateProfit() {

    const revenue =
      Number($("revenue")?.value || 0);

    const cost =
      Number($("cost")?.value || 0);

    const profit =
      revenue - cost;

    const margin =
      revenue > 0
        ? (profit / revenue) * 100
        : 0;

    const result =
      $("profitResult");

    if (!result) return;

    result.innerHTML = `

      <h3>
        Profit: ${formatNumber(profit)} Ks
      </h3>

      <p>
        Profit Margin:
        ${margin.toFixed(2)}%
      </p>

    `;

  }


  // ============================================================
  // PRICING
  // ============================================================

  function openPricingCalculator() {

    showModal(`

      <div>

        <h2>🏷️ Pricing Calculator</h2>

        ${inputField(
          "unitCost",
          "Unit Cost",
          "5000"
        )}

        ${inputField(
          "margin",
          "Target Margin %",
          "30"
        )}

        ${calculateButton(
          "Calculate Price",
          "calculatePrice()"
        )}

        ${resultBox(
          "priceResult"
        )}

      </div>

    `);

  }


  function calculatePrice() {

    const cost =
      Number($("unitCost")?.value || 0);

    const margin =
      Number($("margin")?.value || 0);

    if (margin >= 100) {

      showToast(
        "Margin must be below 100%."
      );

      return;

    }

    const price =
      cost / (1 - margin / 100);

    const result =
      $("priceResult");

    if (!result) return;

    result.innerHTML = `

      <h3>
        Recommended Price:
        ${formatNumber(price)} Ks
      </h3>

    `;

  }


  // ============================================================
  // BREAK EVEN
  // ============================================================

  function openBreakEvenCalculator() {

    showModal(`

      <div>

        <h2>⚖️ Break-Even Calculator</h2>

        ${inputField(
          "fixedCost",
          "Fixed Cost",
          "1000000"
        )}

        ${inputField(
          "sellingPrice",
          "Selling Price / Unit",
          "10000"
        )}

        ${inputField(
          "variableCost",
          "Variable Cost / Unit",
          "6000"
        )}

        ${calculateButton(
          "Calculate Break-Even",
          "calculateBreakEven()"
        )}

        ${resultBox(
          "breakEvenResult"
        )}

      </div>

    `);

  }


  function calculateBreakEven() {

    const fixed =
      Number($("fixedCost")?.value || 0);

    const price =
      Number($("sellingPrice")?.value || 0);

    const variable =
      Number($("variableCost")?.value || 0);

    const contribution =
      price - variable;

    if (contribution <= 0) {

      showToast(
        "Selling price must be higher than variable cost."
      );

      return;

    }

    const units =
      fixed / contribution;

    const result =
      $("breakEvenResult");

    if (!result) return;

    result.innerHTML = `

      <h3>
        Break-Even:
        ${Math.ceil(units).toLocaleString()}
        units
      </h3>

      <p>
        Break-Even Sales:
        ${formatNumber(
          Math.ceil(units) * price
        )} Ks
      </p>

    `;

  }


  // ============================================================
  // SALES TARGET
  // ============================================================

  function openSalesTargetCalculator() {

    showModal(`

      <div>

        <h2>🎯 Sales Target Calculator</h2>

        ${inputField(
          "targetRevenue",
          "Target Revenue",
          "10000000"
        )}

        ${inputField(
          "averageOrder",
          "Average Order Value",
          "50000"
        )}

        ${calculateButton(
          "Calculate Sales Target",
          "calculateSalesTarget()"
        )}

        ${resultBox(
          "salesTargetResult"
        )}

      </div>

    `);

  }


  function calculateSalesTarget() {

    const target =
      Number($("targetRevenue")?.value || 0);

    const average =
      Number($("averageOrder")?.value || 0);

    if (average <= 0) {

      showToast(
        "Enter a valid average order value."
      );

      return;

    }

    const orders =
      Math.ceil(target / average);

    const result =
      $("salesTargetResult");

    if (!result) return;

    result.innerHTML = `

      <h3>
        Required Orders:
        ${orders.toLocaleString()}
      </h3>

      <p>
        Target Revenue:
        ${formatNumber(target)} Ks
      </p>

    `;

  }


  // ============================================================
  // AI BUSINESS COACH
  // ============================================================

  function openAI() {

    closeSidebarMobile();

    setPage(
      "AI Business Coach",
      "Get practical AI-powered business guidance."
    );

    showModal(`

      <div class="ai-page">

        <h2>🤖 AI Business Coach</h2>

        <p>
          Ask me anything about business, sales,
          marketing or management.
        </p>

        <div
          id="aiChat"
          class="result-box"
          style="
            min-height:180px;
            max-height:320px;
            overflow-y:auto;
          ">

          <div>
            <strong>AI Coach:</strong>
            Hello! How can I help your business today?
          </div>

        </div>

        <textarea
          id="aiInput"
          class="tool-input"
          rows="4"
          placeholder="Ask your business question..."
          style="width:100%; margin-top:12px;"
        ></textarea>

        <button
          class="primary-button"
          onclick="sendAIMessage()">

          Send to AI →

        </button>

        <div style="margin-top:12px;">

          <button
            class="secondary-button"
            onclick="askAIQuick('How can I increase my sales?')">

            Increase Sales

          </button>

          <button
            class="secondary-button"
            onclick="askAIQuick('How can I improve my team performance?')">

            Team Performance

          </button>

        </div>

      </div>

    `);

  }


  async function sendAIMessage(message) {

    const input =
      $("aiInput");

    const text =
      message ||
      input?.value.trim();

    if (!text) {

      showToast(
        "Please enter a question."
      );

      return;

    }

    appendAIMessage(
      "You",
      text
    );

    if (input) {
      input.value = "";
    }

    appendAIMessage(
      "AI Coach",
      "Thinking..."
    );

    try {

      const response =
        await fetch(
          AI_API_URL,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json"
            },
            body: JSON.stringify({
              message: text
            })
          }
        );

      if (!response.ok) {
        throw new Error(
          "AI server error"
        );
      }

      const data =
        await response.json();

      const answer =
        data.reply ||
        data.response ||
        data.message ||
        "No response received.";

      removeLastAIMessage();

      appendAIMessage(
        "AI Coach",
        answer
      );

    } catch (error) {

      removeLastAIMessage();

      appendAIMessage(
        "AI Coach",
        "AI connection is temporarily unavailable. Please try again."
      );

    }

  }


  function askAIQuick(question) {

    sendAIMessage(
      question
    );

  }


  function appendAIMessage(
    sender,
    message
  ) {

    const chat =
      $("aiChat");

    if (!chat) return;

    const div =
      document.createElement("div");

    div.style.margin =
      "10px 0";

    div.innerHTML = `
      <strong>
        ${escapeHTML(sender)}:
      </strong>

      <span>
        ${escapeHTML(message)}
      </span>
    `;

    chat.appendChild(div);

    chat.scrollTop =
      chat.scrollHeight;

  }


  function removeLastAIMessage() {

    const chat =
      $("aiChat");

    if (!chat) return;

    if (chat.lastElementChild) {
      chat.removeChild(
        chat.lastElementChild
      );
    }

  }


  function scrollAIChat() {

    const chat =
      $("aiChat");

    if (chat) {
      chat.scrollTop =
        chat.scrollHeight;
    }

  }


  async function checkAIHealth() {

    try {

      const response =
        await fetch(
          API_BASE_URL,
          {
            method: "GET"
          }
        );

      return response.ok;

    } catch {

      return false;

    }

  }


  // ============================================================
  // PREMIUM
  // ============================================================

  function getTrialInfo() {

    try {

      return JSON.parse(
        localStorage.getItem(
          TRIAL_KEY
        )
      );

    } catch {

      return null;

    }

  }


  function startTrial() {

    const existing =
      getTrialInfo();

    if (existing) {

      showToast(
        "Your trial has already started."
      );

      return;

    }

    const start =
      Date.now();

    localStorage.setItem(
      TRIAL_KEY,
      JSON.stringify({
        start: start,
        days: 7
      })
    );

    showToast(
      "7-Day Premium Trial Started! 🎉"
    );

    openPremium();

  }


  function getTrialDaysRemaining() {

    const trial =
      getTrialInfo();

    if (!trial) {
      return 0;
    }

    const elapsed =
      Date.now() -
      trial.start;

    const days =
      Math.ceil(
        trial.days -
        elapsed /
          (1000 * 60 * 60 * 24)
      );

    return Math.max(
      0,
      days
    );

  }


  function openPremium() {

    showModal(`

      <div>

        <h2>👑 Premium Academy</h2>

        <p>
          Unlock advanced business learning
          and premium tools.
        </p>

        <div class="result-box">

          <h3>Premium Features</h3>

          <p>✓ Advanced Business Lessons</p>
          <p>✓ Advanced Business Tools</p>
          <p>✓ AI Business Coach</p>
          <p>✓ Business Planning</p>
          <p>✓ Growth Strategy</p>

        </div>

        <h3>
          7-Day Free Trial
        </h3>

        <button
          class="primary-button"
          onclick="startTrial()">

          Start Free Trial →

        </button>

      </div>

    `);

  }


  // ============================================================
  // BUSINESS PLAN
  // ============================================================

  function textInput(
    id,
    label,
    placeholder
  ) {

    return `

      <label style="
        display:block;
        margin:12px 0 6px;
        font-weight:600;
      ">
        ${label}
      </label>

      <input
        id="${id}"
        class="tool-input"
        type="text"
        placeholder="${placeholder}"
      >

    `;

  }


  function openBusinessPlan() {

    closeSidebarMobile();

    setPage(
      "Business Plan",
      "Build a practical business plan step by step."
    );

    showModal(`

      <div>

        <h2>📋 Business Plan</h2>

        <p>
          Enter your basic business information.
        </p>

        ${textInput(
          "businessName",
          "Business Name",
          "Aung Business"
        )}

        ${textInput(
          "businessType",
          "Business Type",
          "Food / Retail / Service"
        )}

        ${textInput(
          "targetCustomer",
          "Target Customer",
          "Who are your customers?"
        )}

        ${textInput(
          "budget",
          "Starting Budget",
          "5000000"
        )}

        ${textInput(
          "goal",
          "Business Goal",
          "Monthly profit target"
        )}

        <button
          class="primary-button"
          onclick="generateBusinessPlan()">

          Generate Plan →

        </button>

        ${resultBox(
          "businessPlanResult"
        )}

      </div>

    `);

  }


  function generateBusinessPlan() {

    const name =
      $("businessName")?.value ||
      "My Business";

    const type =
      $("businessType")?.value ||
      "Business";

    const customer =
      $("targetCustomer")?.value ||
      "Target Customers";

    const budget =
      $("budget")?.value ||
      "Not specified";

    const goal =
      $("goal")?.value ||
      "Business growth";

    const result =
      $("businessPlanResult");

    if (!result) return;

    result.innerHTML = `

      <h3>
        ${escapeHTML(name)}
      </h3>

      <p>
        <strong>Business Type:</strong>
        ${escapeHTML(type)}
      </p>

      <p>
        <strong>Target Customer:</strong>
        ${escapeHTML(customer)}
      </p>

      <p>
        <strong>Starting Budget:</strong>
        ${escapeHTML(budget)}
      </p>

      <p>
        <strong>Main Goal:</strong>
        ${escapeHTML(goal)}
      </p>

      <hr>

      <h4>Action Plan</h4>

      <p>1. Research your target market.</p>
      <p>2. Define your product and value proposition.</p>
      <p>3. Calculate pricing and profit margin.</p>
      <p>4. Build a customer acquisition plan.</p>
      <p>5. Set monthly sales targets.</p>
      <p>6. Track cash flow and profitability.</p>

    `;

  }


  // ============================================================
  // PROFILE
  // ============================================================

  function openProfile() {

    const user =
      getUser();

    const name =
      user?.name ||
      "Aung";

    const completed =
      getCompletedLessons().length;

    const progress =
      Math.round(
        completed /
        lessons.length *
        100
      );

    showModal(`

      <div>

        <h2>👤 My Profile</h2>

        <div class="result-box">

          <h3>
            ${escapeHTML(name)}
          </h3>

          <p>
            Business Learner
          </p>

          <p>
            Lessons Completed:
            ${completed}/${lessons.length}
          </p>

          <p>
            Learning Progress:
            ${progress}%
          </p>

        </div>

      </div>

    `);

  }


  // ============================================================
  // NOTIFICATION
  // ============================================================

  function showNotification() {

    showModal(`

      <div>

        <h2>🔔 Notifications</h2>

        <div class="result-box">

          <p>
            🎓 Keep learning every day.
          </p>

          <p>
            📚 30 business lessons are available.
          </p>

          <p>
            🤖 AI Business Coach is ready.
          </p>

        </div>

      </div>

    `);

  }


  // ============================================================
  // LOGOUT
  // ============================================================

  function logoutUser() {

    localStorage.removeItem(
      USER_KEY
    );

    showToast(
      "Logged out."
    );

    setTimeout(
      showLoginScreen,
      500
    );

  }


  // ============================================================
  // TOAST
  // ============================================================

  function showToast(message) {

    let toast =
      $("academyToast");

    if (!toast) {

      toast =
        document.createElement(
          "div"
        );

      toast.id =
        "academyToast";

      toast.style.position =
        "fixed";

      toast.style.bottom =
        "25px";

      toast.style.left =
        "50%";

      toast.style.transform =
        "translateX(-50%)";

      toast.style.padding =
        "12px 20px";

      toast.style.borderRadius =
        "10px";

      toast.style.background =
        "#111827";

      toast.style.color =
        "#fff";

      toast.style.zIndex =
        "99999";

      toast.style.fontSize =
        "14px";

      document.body.appendChild(
        toast
      );

    }

    toast.textContent =
      message;

    toast.style.display =
      "block";

    clearTimeout(
      toast._timer
    );

    toast._timer =
      setTimeout(
        () => {
          toast.style.display =
            "none";
        },
        2500
      );

  }


  // ============================================================
  // INIT
  // ============================================================

  function init() {

    updateUserUI();

    // Dashboard is the default page.
    setPage(
      "Dashboard",
      "Learn Business. Build Business. Grow Business."
    );

  }


  // ============================================================
  // GLOBAL EXPORTS
  // ============================================================

  window.goDashboard =
    goDashboard;

  window.toggleSidebar =
    toggleSidebar;

  window.toggleMenu =
    toggleMenu;

  window.openLessons =
    openLessons;

  window.openLesson =
    openLesson;

  window.showLesson =
    showLesson;

  window.filterLessons =
    filterLessons;

  window.openCategory =
    openCategory;

  window.markLessonComplete =
    markLessonComplete;

  window.continueLearning =
    continueLearning;

  window.openTools =
    openTools;

  window.openProfitCalculator =
    openProfitCalculator;

  window.calculateProfit =
    calculateProfit;

  window.openPricingCalculator =
    openPricingCalculator;

  window.calculatePrice =
    calculatePrice;

  window.openBreakEvenCalculator =
    openBreakEvenCalculator;

  window.calculateBreakEven =
    calculateBreakEven;

  window.openSalesTargetCalculator =
    openSalesTargetCalculator;

  window.calculateSalesTarget =
    calculateSalesTarget;

  window.openAI =
    openAI;

  window.sendAIMessage =
    sendAIMessage;

  window.askAIQuick =
    askAIQuick;

  window.checkAIHealth =
    checkAIHealth;

  window.openPremium =
    openPremium;

  window.startTrial =
    startTrial;

  window.openBusinessPlan =
    openBusinessPlan;

  window.generateBusinessPlan =
    generateBusinessPlan;

  window.openProfile =
    openProfile;

  window.showNotification =
    showNotification;

  window.logoutUser =
    logoutUser;

  window.closeModal =
    closeModal;

  window.handleLogin =
    handleLogin;


  // ============================================================
  // START
  // ============================================================

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
