// ======================================================
// AUNG BUSINESS ACADEMY
// APP.JS V5 - STABLE VERSION
// ======================================================

(function () {
  "use strict";

  // ======================================================
  // LESSON DATA
  // ======================================================

  const lessons = [
    {
      id: 1,
      title: "Business Basics",
      category: "Leadership & Strategy",
      description:
        "လုပ်ငန်းတစ်ခု စတင်ရာတွင် သိထားသင့်သော အခြေခံအချက်များကို လေ့လာပါ။",
      keyPoints: [
        "Business ဆိုတာ Customer Problem ကို ဖြေရှင်းပေးပြီး Value ဖန်တီးပေးခြင်းဖြစ်သည်။",
        "Customer, Product, Price, Marketing နှင့် Profit တို့ကို နားလည်ရန်လိုသည်။",
        "လုပ်ငန်းမစမီ Target Customer ကို သတ်မှတ်ထားသင့်သည်။"
      ]
    },
    {
      id: 2,
      title: "Strategic Thinking",
      category: "Leadership & Strategy",
      description:
        "ရေရှည်လုပ်ငန်းတိုးတက်မှုအတွက် Strategic Thinking ကို လေ့လာပါ။",
      keyPoints: [
        "လက်ရှိအခြေအနေကို Analyze လုပ်ပါ။",
        "Goal ကို ရှင်းရှင်းလင်းလင်း သတ်မှတ်ပါ။",
        "Action Plan တစ်ခု ဖန်တီးပြီး အကောင်အထည်ဖော်ပါ။"
      ]
    },
    {
      id: 3,
      title: "Brand Basics",
      category: "Branding",
      description:
        "Customer တွေရဲ့စိတ်ထဲမှာ မှတ်မိနေမယ့် Brand တစ်ခုကို တည်ဆောက်နည်း။",
      keyPoints: [
        "Brand ဆိုတာ Logo တစ်ခုတည်းမဟုတ်ပါ။",
        "Customer Experience က Brand အပေါ် သက်ရောက်မှုရှိသည်။",
        "Brand Promise ကို ရှင်းလင်းစွာ သတ်မှတ်ပါ။"
      ]
    },
    {
      id: 4,
      title: "Marketing Basics",
      category: "Marketing",
      description:
        "Customer ကို ရှာဖွေပြီး Product ကို မှန်ကန်စွာ Marketing လုပ်နည်း။",
      keyPoints: [
        "Target Customer ကို သိပါ။",
        "Customer Need ကို နားလည်ပါ။",
        "မှန်ကန်တဲ့ Marketing Channel ကို ရွေးချယ်ပါ။"
      ]
    },
    {
      id: 5,
      title: "Sales Basics",
      category: "Sales",
      description:
        "Sales Process ကို နားလည်ပြီး ရောင်းအားတိုးအောင် လုပ်ဆောင်နည်း။",
      keyPoints: [
        "Prospecting",
        "Customer Need Analysis",
        "Presentation",
        "Negotiation",
        "Closing"
      ]
    },
    {
      id: 6,
      title: "Negotiation",
      category: "Sales",
      description:
        "Customer နဲ့ Win-Win Agreement ရအောင် Negotiation လုပ်နည်း။",
      keyPoints: [
        "Customer ရဲ့ Need ကို အရင်နားထောင်ပါ။",
        "Price တစ်ခုတည်းကို မအာရုံစိုက်ပါနှင့်။",
        "Value ကို ရှင်းပြပါ။"
      ]
    },
    {
      id: 7,
      title: "Customer Service",
      category: "Service Delivery",
      description:
        "Customer Satisfaction နဲ့ Customer Loyalty တိုးတက်အောင် ဝန်ဆောင်မှုပေးနည်း။",
      keyPoints: [
        "Customer ကို နားထောင်ပါ။",
        "Problem ကို မြန်မြန်ဖြေရှင်းပါ။",
        "After-Sales Service ကို အာရုံစိုက်ပါ။"
      ]
    },
    {
      id: 8,
      title: "People Management",
      category: "Management & HR",
      description:
        "Team ကို ထိရောက်စွာ ဦးဆောင်ပြီး Performance တိုးတက်အောင် လုပ်နည်း။",
      keyPoints: [
        "Clear Expectations သတ်မှတ်ပါ။",
        "Team ကို Coaching ပေးပါ။",
        "Performance ကို Regular Review လုပ်ပါ။",
        "Ownership နဲ့ Accountability ပေးပါ။"
      ]
    },
    {
      id: 9,
      title: "Profit & Loss",
      category: "Financial Statements",
      description:
        "Revenue, Cost နဲ့ Profit ကို နားလည်ပြီး လုပ်ငန်းအမြတ်ကို စီမံခန့်ခွဲနည်း။",
      keyPoints: [
        "Revenue = ရောင်းအားမှရရှိသော ဝင်ငွေ",
        "Cost = လုပ်ငန်းကုန်ကျစရိတ်",
        "Profit = Revenue - Cost",
        "Profit Margin ကို စောင့်ကြည့်ပါ။"
      ]
    },
    {
      id: 10,
      title: "Goal Setting",
      category: "Personal Productivity",
      description:
        "Business Goal ကို သတ်မှတ်ပြီး အကောင်အထည်ဖော်နိုင်အောင် စီမံနည်း။",
      keyPoints: [
        "Specific Goal သတ်မှတ်ပါ။",
        "Measurable Target ထားပါ။",
        "Deadline သတ်မှတ်ပါ။",
        "Daily Action Plan ပြုလုပ်ပါ။"
      ]
    }
  ];

  // ======================================================
  // CATEGORY DATA
  // ======================================================

  const categories = {
    "Leadership & Strategy": [
      "Leadership Basics",
      "Strategic Thinking",
      "Decision Making",
      "Team Leadership"
    ],

    Branding: [
      "Brand Basics",
      "Brand Positioning",
      "Brand Identity"
    ],

    Marketing: [
      "Marketing Basics",
      "Digital Marketing",
      "Content Marketing",
      "Marketing Strategy"
    ],

    Sales: [
      "Sales Basics",
      "Customer Finding",
      "Sales Strategy",
      "Negotiation",
      "Sales Management"
    ],

    "Service Delivery": [
      "Customer Service",
      "Service Quality",
      "Customer Experience"
    ],

    "Management & HR": [
      "People Management",
      "Recruitment",
      "Performance Management",
      "Coaching"
    ],

    "Financial Statements": [
      "Revenue",
      "Profit & Loss",
      "Cash Flow",
      "Financial Analysis"
    ],

    "Personal Productivity": [
      "Time Management",
      "Goal Setting",
      "Daily Planning"
    ]
  };

  // ======================================================
  // STORAGE
  // ======================================================

  const STORAGE_KEY = "aung_business_academy_v5";

  function getProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (!saved) {
        return [];
      }

      const data = JSON.parse(saved);

      if (!Array.isArray(data.completedLessons)) {
        return [];
      }

      return data.completedLessons;
    } catch (error) {
      console.log("Storage error:", error);
      return [];
    }
  }

  function saveProgress(completedLessons) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          completedLessons: completedLessons
        })
      );
    } catch (error) {
      console.log("Save error:", error);
    }
  }

  // ======================================================
  // DASHBOARD
  // ======================================================

  function updateDashboard() {
    const completed = getProgress();

    const lessonCount = document.getElementById("lessonCount");
    const progress = document.getElementById("progress");

    if (lessonCount) {
      lessonCount.textContent = lessons.length;
    }

    if (progress) {
      const percentage =
        lessons.length === 0
          ? 0
          : Math.round((completed.length / lessons.length) * 100);

      progress.textContent = percentage + "%";
    }
  }

  // ======================================================
  // MODAL
  // ======================================================

  function removeModal() {
    const modal = document.getElementById("abaModal");

    if (modal) {
      modal.remove();
    }
  }

  window.closeModal = removeModal;

  function showModal(title, content) {
    removeModal();

    const html = `
      <div id="abaModal" class="aba-modal">
        <div class="aba-modal-overlay" onclick="closeModal()"></div>

        <div class="aba-modal-box">

          <button class="aba-modal-close" onclick="closeModal()">
            ×
          </button>

          <div class="aba-modal-title">
            ${title}
          </div>

          <div class="aba-modal-content">
            ${content}
          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", html);
  }

  // ======================================================
  // LESSONS
  // ======================================================

  window.openLessons = function () {
    let html = `
      <div class="aba-lessons">
        <p class="aba-intro">
          လုပ်ငန်းအခြေခံမှ Business Growth အထိ
          လက်တွေ့အသုံးချနိုင်သော Lessons များကို လေ့လာပါ။
        </p>

        <div class="aba-lesson-list">
    `;

    const completed = getProgress();

    lessons.forEach(function (lesson) {
      const isCompleted = completed.includes(lesson.id);

      html += `
        <div class="aba-lesson-card">

          <div class="aba-lesson-number">
            ${lesson.id}
          </div>

          <div class="aba-lesson-info">

            <h3>${lesson.title}</h3>

            <span class="aba-category">
              ${lesson.category}
            </span>

            <p>
              ${lesson.description}
            </p>

          </div>

          <button
            class="aba-lesson-button"
            onclick="openLesson(${lesson.id})"
          >
            ${isCompleted ? "Review" : "Learn"}
          </button>

        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    showModal("📚 Business Lessons", html);
  };

  window.openLesson = function (lessonId) {
    const lesson = lessons.find(function (item) {
      return item.id === lessonId;
    });

    if (!lesson) {
      return;
    }

    const completed = getProgress();
    const isCompleted = completed.includes(lesson.id);

    let pointsHTML = "";

    lesson.keyPoints.forEach(function (point) {
      pointsHTML += `
        <li>${point}</li>
      `;
    });

    const content = `
      <div class="aba-single-lesson">

        <div class="aba-lesson-category">
          ${lesson.category}
        </div>

        <h2>
          ${lesson.title}
        </h2>

        <p class="aba-lesson-description">
          ${lesson.description}
        </p>

        <h3>Key Points</h3>

        <ul class="aba-key-points">
          ${pointsHTML}
        </ul>

        ${
          isCompleted
            ? `
              <div class="aba-completed">
                ✓ Lesson Completed
              </div>
            `
            : `
              <button
                class="aba-complete-button"
                onclick="completeLesson(${lesson.id})"
              >
                ✓ Mark as Completed
              </button>
            `
        }

      </div>
    `;

    showModal("📖 " + lesson.title, content);
  };

  window.completeLesson = function (lessonId) {
    const completed = getProgress();

    if (!completed.includes(lessonId)) {
      completed.push(lessonId);
    }

    saveProgress(completed);

    updateDashboard();

    showToast("Lesson completed successfully!");

    openLesson(lessonId);
  };

  // ======================================================
  // CATEGORY
  // ======================================================

  window.openCategory = function (categoryName) {
    const items = categories[categoryName];

    if (!items) {
      openLessons();
      return;
    }

    let html = `
      <p class="aba-intro">
        ${categoryName} မှာ လေ့လာနိုင်မည့် Topics များ
      </p>

      <div class="aba-topic-list">
    `;

    items.forEach(function (item) {
      html += `
        <button
          class="aba-topic-button"
          onclick="openTopic('${escapeAttribute(item)}')"
        >
          ${item}
          <span>→</span>
        </button>
      `;
    });

    html += `
      </div>
    `;

    showModal("📚 " + categoryName, html);
  };

  window.openTopic = function (topic) {
    const matchedLesson = lessons.find(function (lesson) {
      return lesson.title.toLowerCase() === topic.toLowerCase();
    });

    if (matchedLesson) {
      openLesson(matchedLesson.id);
      return;
    }

    const content = `
      <div class="aba-topic-page">

        <div class="aba-topic-icon">
          📘
        </div>

        <h2>${topic}</h2>

        <p>
          ဒီ Topic ကို Aung Business Academy ရဲ့
          နောက်ထပ် Lesson Update တွေမှာ
          လက်တွေ့အသုံးချနိုင်အောင် ထည့်သွင်းပေးသွားပါမယ်။
        </p>

        <div class="aba-coming">
          Coming Soon
        </div>

      </div>
    `;

    showModal("📘 " + topic, content);
  };

  // ======================================================
  // BUSINESS TOOLS
  // ======================================================

  window.openTools = function () {
    const html = `
      <div class="aba-tools-grid">

        <button
          class="aba-tool-card"
          onclick="openProfitCalculator()"
        >
          <span>💰</span>
          <strong>Profit Calculator</strong>
          <small>Calculate your business profit</small>
        </button>

        <button
          class="aba-tool-card"
          onclick="openMarginCalculator()"
        >
          <span>📊</span>
          <strong>Margin Calculator</strong>
          <small>Calculate profit margin</small>
        </button>

        <button
          class="aba-tool-card"
          onclick="openBreakEvenCalculator()"
        >
          <span>⚖️</span>
          <strong>Break-Even Calculator</strong>
          <small>Find your break-even point</small>
        </button>

        <button
          class="aba-tool-card"
          onclick="openSalesTargetCalculator()"
        >
          <span>🎯</span>
          <strong>Sales Target Calculator</strong>
          <small>Plan your sales target</small>
        </button>

      </div>
    `;

    showModal("🛠️ Business Tools", html);
  };

  // ======================================================
  // PROFIT CALCULATOR
  // ======================================================

  window.openProfitCalculator = function () {
    const html = `
      <div class="aba-calculator">

        <label>Total Revenue</label>

        <input
          id="revenueInput"
          type="number"
          placeholder="e.g. 1000000"
        >

        <label>Total Cost</label>

        <input
          id="costInput"
          type="number"
          placeholder="e.g. 700000"
        >

        <button
          class="aba-calc-button"
          onclick="calculateProfit()"
        >
          Calculate Profit
        </button>

        <div id="profitResult"></div>

      </div>
    `;

    showModal("💰 Profit Calculator", html);
  };

  window.calculateProfit = function () {
    const revenue =
      Number(document.getElementById("revenueInput").value) || 0;

    const cost =
      Number(document.getElementById("costInput").value) || 0;

    const profit = revenue - cost;

    const result = document.getElementById("profitResult");

    if (result) {
      result.innerHTML = `
        <div class="aba-result">
          <strong>Profit</strong>
          <span>${formatMoney(profit)} Ks</span>
        </div>
      `;
    }
  };

  // ======================================================
  // MARGIN CALCULATOR
  // ======================================================

  window.openMarginCalculator = function () {
    const html = `
      <div class="aba-calculator">

        <label>Selling Price</label>

        <input
          id="sellingPriceInput"
          type="number"
          placeholder="e.g. 10000"
        >

        <label>Cost Price</label>

        <input
          id="costPriceInput"
          type="number"
          placeholder="e.g. 7000"
        >

        <button
          class="aba-calc-button"
          onclick="calculateMargin()"
        >
          Calculate Margin
        </button>

        <div id="marginResult"></div>

      </div>
    `;

    showModal("📊 Margin Calculator", html);
  };

  window.calculateMargin = function () {
    const selling =
      Number(document.getElementById("sellingPriceInput").value) || 0;

    const cost =
      Number(document.getElementById("costPriceInput").value) || 0;

    let margin = 0;

    if (selling > 0) {
      margin = ((selling - cost) / selling) * 100;
    }

    const result = document.getElementById("marginResult");

    if (result) {
      result.innerHTML = `
        <div class="aba-result">
          <strong>Profit Margin</strong>
          <span>${margin.toFixed(2)}%</span>
        </div>
      `;
    }
  };

  // ======================================================
  // BREAK EVEN
  // ======================================================

  window.openBreakEvenCalculator = function () {
    const html = `
      <div class="aba-calculator">

        <label>Fixed Cost</label>

        <input
          id="fixedCostInput"
          type="number"
          placeholder="e.g. 500000"
        >

        <label>Selling Price per Unit</label>

        <input
          id="unitPriceInput"
          type="number"
          placeholder="e.g. 10000"
        >

        <label>Variable Cost per Unit</label>

        <input
          id="variableCostInput"
          type="number"
          placeholder="e.g. 6000"
        >

        <button
          class="aba-calc-button"
          onclick="calculateBreakEven()"
        >
          Calculate
        </button>

        <div id="breakEvenResult"></div>

      </div>
    `;

    showModal("⚖️ Break-Even Calculator", html);
  };

  window.calculateBreakEven = function () {
    const fixed =
      Number(document.getElementById("fixedCostInput").value) || 0;

    const price =
      Number(document.getElementById("unitPriceInput").value) || 0;

    const variable =
      Number(document.getElementById("variableCostInput").value) || 0;

    let breakEven = 0;

    if (price > variable) {
      breakEven = fixed / (price - variable);
    }

    const result = document.getElementById("breakEvenResult");

    if (result) {
      result.innerHTML = `
        <div class="aba-result">
          <strong>Break-Even Units</strong>
          <span>${Math.ceil(breakEven)}</span>
        </div>
      `;
    }
  };

  // ======================================================
  // SALES TARGET
  // ======================================================

  window.openSalesTargetCalculator = function () {
    const html = `
      <div class="aba-calculator">

        <label>Monthly Sales Target</label>

        <input
          id="salesTargetInput"
          type="number"
          placeholder="e.g. 30000000"
        >

        <label>Number of Working Days</label>

        <input
          id="workingDaysInput"
          type="number"
          placeholder="e.g. 26"
        >

        <button
          class="aba-calc-button"
          onclick="calculateSalesTarget()"
        >
          Calculate
        </button>

        <div id="salesTargetResult"></div>

      </div>
    `;

    showModal("🎯 Sales Target Calculator", html);
  };

  window.calculateSalesTarget = function () {
    const target =
      Number(document.getElementById("salesTargetInput").value) || 0;

    const days =
      Number(document.getElementById("workingDaysInput").value) || 0;

    const daily = days > 0 ? target / days : 0;

    const result = document.getElementById("salesTargetResult");

    if (result) {
      result.innerHTML = `
        <div class="aba-result">
          <strong>Daily Sales Target</strong>
          <span>${formatMoney(daily)} Ks</span>
        </div>
      `;
    }
  };

  // ======================================================
  // AI BUSINESS COACH
  // ======================================================

  window.openAI = function () {
    const html = `
      <div class="aba-ai">

        <div class="aba-ai-header">
          🤖
        </div>

        <h2>AI Business Coach</h2>

        <p>
          သင့်လုပ်ငန်းနဲ့ပတ်သက်ပြီး
          Business Strategy, Sales, Marketing,
          Customer နဲ့ Management အကြောင်း မေးနိုင်ပါတယ်။
        </p>

        <textarea
          id="aiQuestion"
          placeholder="ဥပမာ - ကျွန်တော့်လုပ်ငန်းရောင်းအားကျနေတယ်။ ဘာလုပ်သင့်လဲ?"
        ></textarea>

        <button
          class="aba-ai-button"
          onclick="askBusinessCoach()"
        >
          Ask Business Coach
        </button>

        <div id="aiAnswer"></div>

      </div>
    `;

    showModal("🤖 AI Business Coach", html);
  };

  window.askBusinessCoach = function () {
    const input = document.getElementById("aiQuestion");
    const answer = document.getElementById("aiAnswer");

    if (!input || !answer) {
      return;
    }

    const question = input.value.trim();

    if (!question) {
      answer.innerHTML = `
        <div class="aba-warning">
          မေးခွန်းတစ်ခု ရိုက်ထည့်ပါ။
        </div>
      `;
      return;
    }

    answer.innerHTML = `
      <div class="aba-ai-response">

        <strong>Business Coach Advice</strong>

        <p>
          သင့်မေးခွန်းကို ဖြေရှင်းရန်
          Customer, Sales, Cost နဲ့ Competition
          အခြေအနေတွေကို အရင် Analyze လုပ်ပါ။
        </p>

        <p>
          <strong>Step 1:</strong>
          လက်ရှိ Problem ကို တိတိကျကျ သတ်မှတ်ပါ။
        </p>

        <p>
          <strong>Step 2:</strong>
          Data နဲ့ Sales Performance ကို စစ်ဆေးပါ။
        </p>

        <p>
          <strong>Step 3:</strong>
          Action Plan တစ်ခု ချမှတ်ပြီး အကောင်အထည်ဖော်ပါ။
        </p>

      </div>
    `;
  };

  // ======================================================
  // PREMIUM
  // ======================================================

  window.openPremium = function () {
    const html = `
      <div class="aba-premium">

        <div class="aba-premium-icon">
          👑
        </div>

        <h2>Premium Academy</h2>

        <p>
          Advanced Business Lessons,
          Professional Business Tools,
          Templates နှင့် AI Business Features
          များကို Premium Version တွင် အသုံးပြုနိုင်ပါမည်။
        </p>

        <div class="aba-premium-features">

          <div>✓ Advanced Business Courses</div>
          <div>✓ Professional Templates</div>
          <div>✓ Advanced Business Tools</div>
          <div>✓ AI Business Coach</div>
          <div>✓ Business Planning System</div>

        </div>

        <button
          class="aba-premium-button"
          onclick="showToast('Premium will be available soon!'); closeModal();"
        >
          Premium Coming Soon
        </button>

      </div>
    `;

    showModal("👑 Premium Academy", html);
  };

  // ======================================================
  // BUSINESS PLAN
  // ======================================================

  window.openBusinessPlan = function () {
    const html = `
      <div class="aba-business-plan">

        <h2>Business Plan</h2>

        <p>
          Business တစ်ခုတည်ဆောက်ရန် အောက်ပါအချက်များကို
          စီစဉ်ရေးဆွဲပါ။
        </p>

        <div class="aba-plan-list">

          <div>
            <strong>1. Business Idea</strong>
            <p>ဘာလုပ်ငန်းလုပ်မလဲ?</p>
          </div>

          <div>
            <strong>2. Target Customer</strong>
            <p>ဘယ်သူတွေကို ရောင်းမလဲ?</p>
          </div>

          <div>
            <strong>3. Product / Service</strong>
            <p>ဘာ Value ပေးမလဲ?</p>
          </div>

          <div>
            <strong>4. Marketing Strategy</strong>
            <p>Customer ကို ဘယ်လိုရှာမလဲ?</p>
          </div>

          <div>
            <strong>5. Sales Strategy</strong>
            <p>ဘယ်လိုရောင်းမလဲ?</p>
          </div>

          <div>
            <strong>6. Financial Plan</strong>
            <p>Revenue, Cost, Profit ကို ဘယ်လိုစီမံမလဲ?</p>
          </div>

        </div>

      </div>
    `;

    showModal("📋 Business Plan", html);
  };

  // ======================================================
  // PROFILE
  // ======================================================

  window.openProfile = function () {
    const completed = getProgress();

    const html = `
      <div class="aba-profile-page">

        <div class="aba-profile-avatar">
          A
        </div>

        <h2>Aung</h2>

        <p>Business Learner</p>

        <div class="aba-profile-stat">
          <strong>${completed.length}</strong>
          <span>Lessons Completed</span>
        </div>

      </div>
    `;

    showModal("👤 Profile", html);
  };

  // ======================================================
  // NOTIFICATIONS
  // ======================================================

  window.openNotifications = function () {
    const html = `
      <div class="aba-notifications">

        <div class="aba-notification-item">
          🚀
          <div>
            <strong>Welcome to Aung Business Academy</strong>
            <p>Start your business learning journey today.</p>
          </div>
        </div>

        <div class="aba-notification-item">
          📚
          <div>
            <strong>10 Free Lessons Available</strong>
            <p>Learn practical business skills step by step.</p>
          </div>
        </div>

      </div>
    `;

    showModal("🔔 Notifications", html);
  };

  // ======================================================
  // TOAST
  // ======================================================

  window.showToast = function (message) {
    const oldToast = document.getElementById("abaToast");

    if (oldToast) {
      oldToast.remove();
    }

    const toast = document.createElement("div");

    toast.id = "abaToast";
    toast.className = "aba-toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(function () {
      toast.classList.add("hide");

      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 2200);
  };

  // ======================================================
  // HELPERS
  // ======================================================

  function formatMoney(value) {
    return Math.round(value).toLocaleString("en-US");
  }

  function escapeAttribute(value) {
    return String(value)
      .replace(/\\/g, "\\\\")
      .replace(/'/g, "\\'");
  }

  // ======================================================
  // SIDEBAR SUBMENU
  // ======================================================

  function connectSubmenus() {
    const buttons = document.querySelectorAll(".submenu button");

    buttons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        const topic = button.textContent.trim();

        if (!topic) {
          return;
        }

        openTopic(topic);
      });
    });
  }

  // ======================================================
  // BUSINESS PLAN NAV
  // ======================================================

  function connectBusinessPlan() {
    const elements = document.querySelectorAll(".nav-item");

    elements.forEach(function (element) {
      const text = element.textContent.trim();

      if (text.indexOf("Business Plan") !== -1) {
        element.addEventListener("click", function (event) {
          event.preventDefault();
          event.stopPropagation();

          openBusinessPlan();
        });
      }
    });
  }

  // ======================================================
  // INITIALIZE
  // ======================================================

  function initialize() {
    updateDashboard();
    connectSubmenus();
    connectBusinessPlan();

    console.log("Aung Business Academy V5 loaded successfully.");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }

})();
