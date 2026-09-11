// ======================================================
// AUNG BUSINESS ACADEMY
// APP.JS V1
// Professional Dashboard Logic
// ======================================================


// ======================================================
// 1. LESSON DATA
// ======================================================

const lessons = [
  {
    id: 1,
    title: "Business Fundamentals",
    category: "Business",
    description: "Learn the basic principles of starting and managing a business.",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Sales & Marketing",
    category: "Sales",
    description: "Understand sales strategy, customer needs and market growth.",
    level: "Beginner"
  },
  {
    id: 3,
    title: "Customer Management",
    category: "Customer",
    description: "Build strong customer relationships and improve retention.",
    level: "Beginner"
  },
  {
    id: 4,
    title: "Pricing Strategy",
    category: "Finance",
    description: "Learn how to calculate selling prices and protect your profit.",
    level: "Intermediate"
  },
  {
    id: 5,
    title: "Profit Management",
    category: "Finance",
    description: "Understand revenue, cost, gross profit and net profit.",
    level: "Intermediate"
  },
  {
    id: 6,
    title: "Sales Team Management",
    category: "Leadership",
    description: "Learn coaching, KPI management and sales team leadership.",
    level: "Intermediate"
  },
  {
    id: 7,
    title: "Business Planning",
    category: "Strategy",
    description: "Create practical business plans and action plans.",
    level: "Intermediate"
  },
  {
    id: 8,
    title: "Business Growth Strategy",
    category: "Strategy",
    description: "Learn practical methods to expand your business.",
    level: "Advanced"
  }
];


// ======================================================
// 2. LOCAL STORAGE
// ======================================================

const STORAGE_KEY = "aung_business_academy";

let academyData = {
  completedLessons: [],
  notifications: true
};


function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      academyData = {
        ...academyData,
        ...JSON.parse(saved)
      };
    }
  } catch (error) {
    console.log("Storage loading error:", error);
  }
}


function saveData() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(academyData)
    );
  } catch (error) {
    console.log("Storage saving error:", error);
  }
}


// ======================================================
// 3. DASHBOARD STATS
// ======================================================

function updateDashboard() {

  const lessonCount = document.getElementById("lessonCount");
  const progress = document.getElementById("progress");

  const totalLessons = lessons.length;

  const completed =
    academyData.completedLessons.length;

  const percentage =
    totalLessons === 0
      ? 0
      : Math.round((completed / totalLessons) * 100);

  if (lessonCount) {
    lessonCount.textContent =
      `${completed} / ${totalLessons}`;
  }

  if (progress) {
    progress.textContent =
      `${percentage}%`;
  }
}


// ======================================================
// 4. MARK LESSON COMPLETE
// ======================================================

function completeLesson(id) {

  if (!academyData.completedLessons.includes(id)) {

    academyData.completedLessons.push(id);

    saveData();
    updateDashboard();

    showToast(
      "Lesson completed successfully!",
      "success"
    );
  }
}


// ======================================================
// 5. GENERIC MODAL
// ======================================================

function createModal(title, content, options = {}) {

  closeModal();

  const overlay = document.createElement("div");

  overlay.className = "aba-modal-overlay";

  overlay.innerHTML = `
    <div class="aba-modal">

      <div class="aba-modal-header">

        <div>
          <h2>${title}</h2>

          ${
            options.subtitle
              ? `<p>${options.subtitle}</p>`
              : ""
          }

        </div>

        <button
          class="aba-modal-close"
          onclick="closeModal()"
        >
          ×
        </button>

      </div>

      <div class="aba-modal-body">
        ${content}
      </div>

    </div>
  `;

  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.classList.add("active");
  }, 10);

  overlay.addEventListener("click", function(e) {

    if (e.target === overlay) {
      closeModal();
    }

  });
}


function closeModal() {

  const modal =
    document.querySelector(".aba-modal-overlay");

  if (modal) {
    modal.remove();
  }
}


// ======================================================
// 6. OPEN LESSONS
// ======================================================

function openLessons() {

  let html = `
    <div class="aba-section-intro">
      <p>
        Learn practical business skills step by step.
        Complete lessons to increase your academy progress.
      </p>
    </div>

    <div class="aba-lesson-grid">
  `;

  lessons.forEach((lesson) => {

    const completed =
      academyData.completedLessons.includes(
        lesson.id
      );

    html += `

      <div class="aba-lesson-card">

        <div class="aba-lesson-top">

          <span class="aba-badge">
            ${lesson.level}
          </span>

          ${
            completed
              ? `<span class="aba-completed">✓ Completed</span>`
              : ""
          }

        </div>

        <h3>
          ${lesson.title}
        </h3>

        <small>
          ${lesson.category}
        </small>

        <p>
          ${lesson.description}
        </p>

        <button
          class="aba-primary-btn"
          onclick="startLesson(${lesson.id})"
        >
          ${
            completed
              ? "Review Lesson"
              : "Start Lesson"
          }
        </button>

      </div>

    `;
  });

  html += `
    </div>
  `;

  createModal(
    "Academy Lessons",
    html,
    {
      subtitle:
        `${lessons.length} practical business lessons`
    }
  );
}


// ======================================================
// 7. START LESSON
// ======================================================

function startLesson(id) {

  const lesson =
    lessons.find(
      item => item.id === id
    );

  if (!lesson) return;

  const content = `

    <div class="aba-lesson-detail">

      <span class="aba-badge">
        ${lesson.level}
      </span>

      <h2>
        ${lesson.title}
      </h2>

      <p class="aba-category">
        Category: ${lesson.category}
      </p>

      <div class="aba-learning-box">

        <h3>
          What you will learn
        </h3>

        <p>
          ${lesson.description}
        </p>

        <ul>

          <li>
            Understand the key concepts
          </li>

          <li>
            Apply the knowledge in real business situations
          </li>

          <li>
            Build practical business skills
          </li>

          <li>
            Improve your decision-making ability
          </li>

        </ul>

      </div>

      <div class="aba-lesson-actions">

        <button
          class="aba-primary-btn"
          onclick="completeLesson(${lesson.id}); openLessons();"
        >
          ✓ Mark as Completed
        </button>

        <button
          class="aba-secondary-btn"
          onclick="closeModal()"
        >
          Close
        </button>

      </div>

    </div>

  `;

  createModal(
    lesson.title,
    content,
    {
      subtitle:
        "Aung Business Academy"
    }
  );
}


// ======================================================
// 8. BUSINESS TOOLS
// ======================================================

function openTools() {

  const content = `

    <div class="aba-tools-grid">

      <button
        class="aba-tool-card"
        onclick="openPricingCalculator()"
      >

        <div class="aba-tool-icon">
          💰
        </div>

        <h3>
          Pricing Calculator
        </h3>

        <p>
          Calculate selling price and profit margin.
        </p>

      </button>


      <button
        class="aba-tool-card"
        onclick="openProfitCalculator()"
      >

        <div class="aba-tool-icon">
          📈
        </div>

        <h3>
          Profit Calculator
        </h3>

        <p>
          Calculate revenue, cost and profit.
        </p>

      </button>


      <button
        class="aba-tool-card"
        onclick="openTargetCalculator()"
      >

        <div class="aba-tool-icon">
          🎯
        </div>

        <h3>
          Sales Target
        </h3>

        <p>
          Calculate your daily and monthly target.
        </p>

      </button>


      <button
        class="aba-tool-card"
        onclick="openBreakEvenCalculator()"
      >

        <div class="aba-tool-icon">
          ⚖️
        </div>

        <h3>
          Break-Even
        </h3>

        <p>
          Find your break-even sales volume.
        </p>

      </button>

    </div>

  `;

  createModal(
    "Business Tools",
    content,
    {
      subtitle:
        "Practical tools for business owners and sales managers"
    }
  );
}


// ======================================================
// 9. PRICING CALCULATOR
// ======================================================

function openPricingCalculator() {

  const content = `

    <div class="aba-calculator">

      <label>
        Cost Price
      </label>

      <input
        type="number"
        id="costPrice"
        placeholder="Example: 10000"
      >

      <label>
        Desired Profit Margin (%)
      </label>

      <input
        type="number"
        id="profitMargin"
        placeholder="Example: 20"
      >

      <button
        class="aba-primary-btn"
        onclick="calculatePricing()"
      >
        Calculate
      </button>

      <div
        id="pricingResult"
        class="aba-result"
      ></div>

    </div>

  `;

  createModal(
    "Pricing Calculator",
    content,
    {
      subtitle:
        "Calculate the recommended selling price"
    }
  );
}


function calculatePricing() {

  const cost =
    parseFloat(
      document.getElementById("costPrice").value
    );

  const margin =
    parseFloat(
      document.getElementById("profitMargin").value
    );

  const result =
    document.getElementById("pricingResult");

  if (
    isNaN(cost) ||
    isNaN(margin) ||
    cost <= 0 ||
    margin < 0 ||
    margin >= 100
  ) {

    result.innerHTML = `
      <p class="aba-error">
        Please enter valid numbers.
      </p>
    `;

    return;
  }

  const sellingPrice =
    cost / (1 - margin / 100);

  const profit =
    sellingPrice - cost;

  result.innerHTML = `

    <div class="aba-result-item">

      <span>
        Recommended Selling Price
      </span>

      <strong>
        ${formatNumber(sellingPrice)} Ks
      </strong>

    </div>

    <div class="aba-result-item">

      <span>
        Estimated Profit
      </span>

      <strong>
        ${formatNumber(profit)} Ks
      </strong>

    </div>

  `;
}


// ======================================================
// 10. PROFIT CALCULATOR
// ======================================================

function openProfitCalculator() {

  const content = `

    <div class="aba-calculator">

      <label>
        Total Sales Revenue
      </label>

      <input
        type="number"
        id="salesRevenue"
        placeholder="Example: 5000000"
      >

      <label>
        Total Cost
      </label>

      <input
        type="number"
        id="totalCost"
        placeholder="Example: 3500000"
      >

      <button
        class="aba-primary-btn"
        onclick="calculateProfit()"
      >
        Calculate Profit
      </button>

      <div
        id="profitResult"
        class="aba-result"
      ></div>

    </div>

  `;

  createModal(
    "Profit Calculator",
    content,
    {
      subtitle:
        "Calculate gross business profit"
    }
  );
}


function calculateProfit() {

  const revenue =
    parseFloat(
      document.getElementById("salesRevenue").value
    );

  const cost =
    parseFloat(
      document.getElementById("totalCost").value
    );

  const result =
    document.getElementById("profitResult");

  if (
    isNaN(revenue) ||
    isNaN(cost)
  ) {

    result.innerHTML = `
      <p class="aba-error">
        Please enter valid numbers.
      </p>
    `;

    return;
  }

  const profit =
    revenue - cost;

  const margin =
    revenue > 0
      ? (profit / revenue) * 100
      : 0;

  result.innerHTML = `

    <div class="aba-result-item">

      <span>
        Gross Profit
      </span>

      <strong>
        ${formatNumber(profit)} Ks
      </strong>

    </div>

    <div class="aba-result-item">

      <span>
        Profit Margin
      </span>

      <strong>
        ${margin.toFixed(2)}%
      </strong>

    </div>

  `;
}


// ======================================================
// 11. SALES TARGET CALCULATOR
// ======================================================

function openTargetCalculator() {

  const content = `

    <div class="aba-calculator">

      <label>
        Monthly Sales Target
      </label>

      <input
        type="number"
        id="monthlyTarget"
        placeholder="Example: 30000000"
      >

      <label>
        Working Days
      </label>

      <input
        type="number"
        id="workingDays"
        placeholder="Example: 26"
      >

      <button
        class="aba-primary-btn"
        onclick="calculateTarget()"
      >
        Calculate Target
      </button>

      <div
        id="targetResult"
        class="aba-result"
      ></div>

    </div>

  `;

  createModal(
    "Sales Target Calculator",
    content,
    {
      subtitle:
        "Convert monthly target into daily execution"
    }
  );
}


function calculateTarget() {

  const monthly =
    parseFloat(
      document.getElementById("monthlyTarget").value
    );

  const days =
    parseFloat(
      document.getElementById("workingDays").value
    );

  const result =
    document.getElementById("targetResult");

  if (
    isNaN(monthly) ||
    isNaN(days) ||
    monthly <= 0 ||
    days <= 0
  ) {

    result.innerHTML = `
      <p class="aba-error">
        Please enter valid numbers.
      </p>
    `;

    return;
  }

  const daily =
    monthly / days;

  result.innerHTML = `

    <div class="aba-result-item">

      <span>
        Monthly Target
      </span>

      <strong>
        ${formatNumber(monthly)} Ks
      </strong>

    </div>

    <div class="aba-result-item">

      <span>
        Daily Target
      </span>

      <strong>
        ${formatNumber(daily)} Ks
      </strong>

    </div>

  `;
}


// ======================================================
// 12. BREAK-EVEN CALCULATOR
// ======================================================

function openBreakEvenCalculator() {

  const content = `

    <div class="aba-calculator">

      <label>
        Fixed Cost
      </label>

      <input
        type="number"
        id="fixedCost"
        placeholder="Example: 3000000"
      >

      <label>
        Selling Price per Unit
      </label>

      <input
        type="number"
        id="sellingPriceUnit"
        placeholder="Example: 10000"
      >

      <label>
        Variable Cost per Unit
      </label>

      <input
        type="number"
        id="variableCostUnit"
        placeholder="Example: 6000"
      >

      <button
        class="aba-primary-btn"
        onclick="calculateBreakEven()"
      >
        Calculate
      </button>

      <div
        id="breakEvenResult"
        class="aba-result"
      ></div>

    </div>

  `;

  createModal(
    "Break-Even Calculator",
    content,
    {
      subtitle:
        "Calculate minimum units needed to cover costs"
    }
  );
}


function calculateBreakEven() {

  const fixed =
    parseFloat(
      document.getElementById("fixedCost").value
    );

  const selling =
    parseFloat(
      document.getElementById("sellingPriceUnit").value
    );

  const variable =
    parseFloat(
      document.getElementById("variableCostUnit").value
    );

  const result =
    document.getElementById("breakEvenResult");

  if (
    isNaN(fixed) ||
    isNaN(selling) ||
    isNaN(variable) ||
    selling <= variable
  ) {

    result.innerHTML = `
      <p class="aba-error">
        Please enter valid numbers.
        Selling price must be higher than variable cost.
      </p>
    `;

    return;
  }

  const contribution =
    selling - variable;

  const units =
    fixed / contribution;

  result.innerHTML = `

    <div class="aba-result-item">

      <span>
        Break-Even Units
      </span>

      <strong>
        ${Math.ceil(units).toLocaleString()} units
      </strong>

    </div>

    <div class="aba-result-item">

      <span>
        Contribution / Unit
      </span>

      <strong>
        ${formatNumber(contribution)} Ks
      </strong>

    </div>

  `;
}


// ======================================================
// 13. AI BUSINESS COACH
// ======================================================

function openAI() {

  const content = `

    <div class="aba-ai-box">

      <div class="aba-ai-icon">
        🤖
      </div>

      <h2>
        AI Business Coach
      </h2>

      <p>
        Your personal AI assistant for business,
        sales, marketing and management decisions.
      </p>

      <div class="aba-ai-features">

        <div>
          ✓ Sales strategy
        </div>

        <div>
          ✓ Business planning
        </div>

        <div>
          ✓ Marketing ideas
        </div>

        <div>
          ✓ Customer strategy
        </div>

        <div>
          ✓ Sales team coaching
        </div>

      </div>

      <div class="aba-premium-lock">

        🔒 Premium Feature

        <br>

        <small>
          AI Business Coach will be available
          in the Premium Academy.
        </small>

      </div>

      <button
        class="aba-primary-btn"
        onclick="openPremium()"
      >
        Upgrade to Premium
      </button>

    </div>

  `;

  createModal(
    "AI Business Coach",
    content,
    {
      subtitle:
        "AI-powered business support"
    }
  );
}


// ======================================================
// 14. PREMIUM ACADEMY
// ======================================================

function openPremium() {

  const content = `

    <div class="aba-premium-box">

      <div class="aba-premium-large-icon">
        👑
      </div>

      <h2>
        Aung Business Academy Premium
      </h2>

      <p>
        Unlock advanced business education,
        professional tools and AI Business Coach.
      </p>

      <div class="aba-premium-list">

        <div>
          ✓ Advanced Business Courses
        </div>

        <div>
          ✓ AI Business Coach
        </div>

        <div>
          ✓ Advanced Business Calculators
        </div>

        <div>
          ✓ Sales Management Training
        </div>

        <div>
          ✓ Leadership Training
        </div>

        <div>
          ✓ Business Growth Strategies
        </div>

      </div>

      <div class="aba-price">

        Premium Academy

        <strong>
          Coming Soon
        </strong>

      </div>

      <button
        class="aba-primary-btn"
        onclick="showToast('Premium subscription system coming soon!', 'success'); closeModal();"
      >
        Join Premium
      </button>

    </div>

  `;

  createModal(
    "Premium Academy",
    content,
    {
      subtitle:
        "Unlock your next level"
    }
  );
}


// ======================================================
// 15. SIDEBAR FUNCTIONS
// ======================================================

function toggleMenu(id) {

  const menu =
    document.getElementById(id);

  if (!menu) return;

  menu.classList.toggle("show");

}


function toggleSidebar() {

  const sidebar =
    document.querySelector(".sidebar");

  if (!sidebar) return;

  sidebar.classList.toggle(
    "mobile-open"
  );

}


// ======================================================
// 16. MOBILE SIDEBAR AUTO CLOSE
// ======================================================

document.addEventListener(
  "click",
  function(e) {

    if (
      window.innerWidth > 900
    ) {
      return;
    }

    const sidebar =
      document.querySelector(".sidebar");

    const mobileMenu =
      document.querySelector(".mobile-menu");

    if (!sidebar) return;

    if (
      sidebar.classList.contains(
        "mobile-open"
      ) &&
      !sidebar.contains(e.target) &&
      !mobileMenu?.contains(e.target)
    ) {

      sidebar.classList.remove(
        "mobile-open"
      );

    }

  }
);


// ======================================================
// 17. NUMBER FORMAT
// ======================================================

function formatNumber(number) {

  return Math.round(number)
    .toLocaleString("en-US");

}


// ======================================================
// 18. TOAST NOTIFICATION
// ======================================================

function showToast(
  message,
  type = "success"
) {

  const existing =
    document.querySelector(
      ".aba-toast"
    );

  if (existing) {
    existing.remove();
  }

  const toast =
    document.createElement("div");

  toast.className =
    `aba-toast ${type}`;

  toast.innerHTML = `
    <span>
      ${type === "success" ? "✓" : "!"}
    </span>

    <span>
      ${message}
    </span>
  `;

  document.body.appendChild(toast);

  setTimeout(() => {

    toast.classList.add(
      "hide"
    );

    setTimeout(() => {
      toast.remove();
    }, 300);

  }, 2500);
}


// ======================================================
// 19. NOTIFICATION
// ======================================================

function showNotification() {

  createModal(
    "Notifications",
    `
      <div class="aba-notification-box">

        <div class="aba-notification-item">

          <strong>
            Welcome to Aung Business Academy
          </strong>

          <p>
            Start your first business lesson today.
          </p>

        </div>

        <div class="aba-notification-item">

          <strong>
            Business Tools Available
          </strong>

          <p>
            Try the Pricing and Profit Calculators.
          </p>

        </div>

      </div>
    `,
    {
      subtitle:
        "Your latest academy updates"
    }
  );
}


// ======================================================
// 20. PROFILE
// ======================================================

function openProfile() {

  createModal(
    "My Profile",
    `
      <div class="aba-profile-box">

        <div class="aba-profile-avatar">
          A
        </div>

        <h2>
          Academy Member
        </h2>

        <p>
          Aung Business Academy
        </p>

        <div class="aba-profile-stats">

          <div>
            <strong>
              ${academyData.completedLessons.length}
            </strong>

            <span>
              Completed
            </span>
          </div>

          <div>
            <strong>
              ${Math.round(
                (
                  academyData.completedLessons.length /
                  lessons.length
                ) * 100
              )}%
            </strong>

            <span>
              Progress
            </span>
          </div>

        </div>

      </div>
    `,
    {
      subtitle:
        "Your academy profile"
    }
  );
}


// ======================================================
// 21. INITIALIZE
// ======================================================

function initializeAcademy() {

  loadData();

  updateDashboard();

  console.log(
    "Aung Business Academy initialized."
  );

}


// ======================================================
// 22. DOM READY
// ======================================================

document.addEventListener(
  "DOMContentLoaded",
  function() {

    initializeAcademy();

    // Notification button
    const notification =
      document.querySelector(
        ".notification"
      );

    if (notification) {

      notification.addEventListener(
        "click",
        showNotification
      );

    }


    // Profile button
    const profile =
      document.querySelector(
        ".profile"
      );

    if (profile) {

      profile.addEventListener(
        "click",
        openProfile
      );

    }


    // Close sidebar after navigation
    const navItems =
      document.querySelectorAll(
        ".nav-item"
      );

    navItems.forEach(item => {

      item.addEventListener(
        "click",
        function() {

          if (
            window.innerWidth <= 900
          ) {

            const sidebar =
              document.querySelector(
                ".sidebar"
              );

            sidebar?.classList.remove(
              "mobile-open"
            );

          }

        }
      );

    });

  }
);


// ======================================================
// 23. EXTRA MODAL CSS
// ======================================================

const dynamicStyle =
document.createElement("style");

dynamicStyle.textContent = `

/* ==========================================
   MODAL
========================================== */

.aba-modal-overlay {

  position: fixed;

  inset: 0;

  background:
    rgba(0, 0, 0, 0.65);

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 20px;

  z-index: 9999;

  opacity: 0;

  transition:
    opacity 0.2s ease;

}

.aba-modal-overlay.active {

  opacity: 1;

}

.aba-modal {

  width: 100%;

  max-width: 850px;

  max-height: 90vh;

  overflow-y: auto;

  background: #ffffff;

  border-radius: 20px;

  box-shadow:
    0 25px 80px
    rgba(0,0,0,.30);

  transform:
    translateY(20px);

  transition:
    transform .25s ease;

}

.aba-modal-overlay.active
.aba-modal {

  transform:
    translateY(0);

}

.aba-modal-header {

  display: flex;

  justify-content: space-between;

  align-items: flex-start;

  padding: 25px 28px;

  border-bottom:
    1px solid #eeeeee;

}

.aba-modal-header h2 {

  margin: 0;

  font-size: 24px;

  color: #111827;

}

.aba-modal-header p {

  margin: 6px 0 0;

  color: #6b7280;

}

.aba-modal-close {

  border: none;

  background: #f3f4f6;

  width: 38px;

  height: 38px;

  border-radius: 50%;

  font-size: 25px;

  cursor: pointer;

}

.aba-modal-body {

  padding: 28px;

}


/* ==========================================
   LESSONS
========================================== */

.aba-lesson-grid {

  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 18px;

}

.aba-lesson-card {

  border:
    1px solid #e5e7eb;

  border-radius: 16px;

  padding: 20px;

  background: #ffffff;

  transition:
    transform .2s,
    box-shadow .2s;

}

.aba-lesson-card:hover {

  transform:
    translateY(-3px);

  box-shadow:
    0 10px 30px
    rgba(0,0,0,.08);

}

.aba-lesson-top {

  display: flex;

  justify-content:
    space-between;

  align-items: center;

  margin-bottom: 14px;

}

.aba-badge {

  display: inline-block;

  padding: 5px 10px;

  border-radius: 20px;

  background: #eef2ff;

  color: #4f46e5;

  font-size: 12px;

  font-weight: 700;

}

.aba-completed {

  color: #16a34a;

  font-size: 12px;

  font-weight: 700;

}

.aba-lesson-card h3 {

  margin:
    0 0 6px;

  color: #111827;

}

.aba-lesson-card small {

  color: #6366f1;

  font-weight: 600;

}

.aba-lesson-card p {

  color: #6b7280;

  line-height: 1.6;

}


/* ==========================================
   BUTTONS
========================================== */

.aba-primary-btn {

  border: none;

  background:
    linear-gradient(
      135deg,
      #4f46e5,
      #7c3aed
    );

  color: white;

  padding:
    11px 18px;

  border-radius: 10px;

  font-weight: 700;

  cursor: pointer;

  transition:
    transform .2s,
    opacity .2s;

}

.aba-primary-btn:hover {

  transform:
    translateY(-1px);

  opacity: .92;

}

.aba-secondary-btn {

  border:
    1px solid #d1d5db;

  background: #ffffff;

  color: #374151;

  padding:
    11px 18px;

  border-radius: 10px;

  font-weight: 700;

  cursor: pointer;

}


/* ==========================================
   TOOLS
========================================== */

.aba-tools-grid {

  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 18px;

}

.aba-tool-card {

  text-align: left;

  border:
    1px solid #e5e7eb;

  background: #fff;

  border-radius: 16px;

  padding: 22px;

  cursor: pointer;

  transition:
    transform .2s,
    box-shadow .2s;

}

.aba-tool-card:hover {

  transform:
    translateY(-3px);

  box-shadow:
    0 10px 30px
    rgba(0,0,0,.08);

}

.aba-tool-icon {

  font-size: 30px;

  margin-bottom: 12px;

}

.aba-tool-card h3 {

  margin:
    0 0 7px;

}

.aba-tool-card p {

  margin: 0;

  color: #6b7280;

  line-height: 1.5;

}


/* ==========================================
   CALCULATOR
========================================== */

.aba-calculator {

  max-width: 550px;

  margin: auto;

}

.aba-calculator label {

  display: block;

  margin:
    14px 0 7px;

  font-weight: 700;

  color: #374151;

}

.aba-calculator input {

  width: 100%;

  padding: 13px;

  border:
    1px solid #d1d5db;

  border-radius: 10px;

  outline: none;

  font-size: 15px;

}

.aba-calculator input:focus {

  border-color:
    #6366f1;

}

.aba-calculator
.aba-primary-btn {

  margin-top: 18px;

  width: 100%;

}

.aba-result {

  margin-top: 20px;

  padding: 15px;

  background: #f8fafc;

  border-radius: 12px;

}

.aba-result-item {

  display: flex;

  justify-content: space-between;

  gap: 20px;

  padding: 10px 0;

  border-bottom:
    1px solid #e5e7eb;

}

.aba-result-item:last-child {

  border-bottom: none;

}

.aba-result-item strong {

  color: #4f46e5;

}

.aba-error {

  color: #dc2626;

  font-weight: 600;

}


/* ==========================================
   AI / PREMIUM
========================================== */

.aba-ai-box,
.aba-premium-box {

  text-align: center;

  max-width: 600px;

  margin: auto;

}

.aba-ai-icon,
.aba-premium-large-icon {

  font-size: 55px;

  margin-bottom: 10px;

}

.aba-ai-features,
.aba-premium-list {

  text-align: left;

  display: grid;

  gap: 10px;

  margin:
    22px 0;

}

.aba-ai-features div,
.aba-premium-list div {

  padding: 12px;

  border-radius: 10px;

  background: #f8fafc;

}

.aba-premium-lock {

  padding: 18px;

  border-radius: 14px;

  background:
    #fff7ed;

  color: #c2410c;

  font-weight: 700;

  margin-bottom: 20px;

}

.aba-premium-lock small {

  display: block;

  margin-top: 7px;

  font-weight: 500;

}

.aba-price {

  margin:
    20px 0;

  padding: 18px;

  border-radius: 14px;

  background:
    linear-gradient(
      135deg,
      #eef2ff,
      #f5f3ff
    );

}

.aba-price strong {

  display: block;

  margin-top: 5px;

  color: #4f46e5;

  font-size: 20px;

}


/* ==========================================
   PROFILE
========================================== */

.aba-profile-box {

  text-align: center;

}

.aba-profile-avatar {

  width: 80px;

  height: 80px;

  margin: auto;

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  background:
    linear-gradient(
      135deg,
      #4f46e5,
      #7c3aed
    );

  color: white;

  font-size: 30px;

  font-weight: 800;

}

.aba-profile-stats {

  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 15px;

  margin-top: 25px;

}

.aba-profile-stats div {

  background: #f8fafc;

  padding: 18px;

  border-radius: 12px;

}

.aba-profile-stats strong {

  display: block;

  font-size: 24px;

  color: #4f46e5;

}

.aba-profile-stats span {

  color: #6b7280;

  font-size: 13px;

}


/* ==========================================
   TOAST
========================================== */

.aba-toast {

  position: fixed;

  right: 25px;

  bottom: 25px;

  z-index: 10000;

  display: flex;

  gap: 10px;

  align-items: center;

  padding:
    14px 18px;

  border-radius: 12px;

  background: #111827;

  color: white;

  box-shadow:
    0 10px 30px
    rgba(0,0,0,.2);

  animation:
    abaToastIn .3s ease;

}

.aba-toast.success {

  border-left:
    4px solid #22c55e;

}

.aba-toast.hide {

  opacity: 0;

  transform:
    translateY(10px);

  transition:
    all .3s;

}

@keyframes abaToastIn {

  from {

    opacity: 0;

    transform:
      translateY(10px);

  }

  to {

    opacity: 1;

    transform:
      translateY(0);

  }

}


/* ==========================================
   NOTIFICATION
========================================== */

.aba-notification-item {

  padding: 16px;

  background: #f8fafc;

  border-radius: 12px;

  margin-bottom: 12px;

}

.aba-notification-item p {

  color: #6b7280;

  margin-bottom: 0;

}


/* ==========================================
   RESPONSIVE
========================================== */

@media (max-width: 700px) {

  .aba-modal {

    max-height: 94vh;

    border-radius: 16px;

  }

  .aba-modal-body {

    padding: 20px;

  }

  .aba-lesson-grid,
  .aba-tools-grid {

    grid-template-columns: 1fr;

  }

  .aba-modal-header {

    padding: 20px;

  }

  .aba-toast {

    left: 15px;

    right: 15px;

    bottom: 15px;

  }

}

`;

document.head.appendChild(
  dynamicStyle
);
