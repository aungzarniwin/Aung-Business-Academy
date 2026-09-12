// ============================================================
// AUNG BUSINESS ACADEMY
// APP.JS V6
// FULL BUSINESS ACADEMY EDITION
// Dashboard + Lessons + Tools + AI + Business Plan
// KPI + Sales + Finance + Growth + Premium + Profile
// ============================================================

(function () {
  "use strict";

  // ============================================================
  // CONFIG
  // ============================================================

  const API_BASE_URL = "https://aung-business-academy.onrender.com";
  const AI_API_URL = API_BASE_URL + "/api/ai";

  const USER_KEY = "aung_business_academy_user";
  const COMPLETED_KEY = "aung_business_academy_completed";
  const TRIAL_KEY = "aung_business_academy_trial";
  const NOTES_KEY = "aung_business_academy_notes";
  const PLAN_KEY = "aung_business_academy_plan";
  const KPI_KEY = "aung_business_academy_kpi";
  const SETTINGS_KEY = "aung_business_academy_settings";

  // ============================================================
  // LESSON DATA
  // ============================================================

  const lessons = [
    {id:1,title:"Business Fundamentals",category:"Business",level:"Beginner",description:"Understand the basic principles of business.",content:"Business starts with solving customer problems and creating value."},
    {id:2,title:"Business Model",category:"Business",level:"Beginner",description:"Learn how a business creates revenue.",content:"A business model explains customers, value, channels, revenue and costs."},
    {id:3,title:"Market Research",category:"Marketing",level:"Beginner",description:"Learn how to understand your market.",content:"Market research helps you understand customers, competitors and demand."},
    {id:4,title:"Customer Finding",category:"Customer Finding",level:"Beginner",description:"Learn practical customer acquisition.",content:"Find customers by understanding their needs, problems and buying behavior."},
    {id:5,title:"Marketing Fundamentals",category:"Marketing",level:"Beginner",description:"Understand the foundation of marketing.",content:"Marketing connects the right product with the right customer."},
    {id:6,title:"Digital Marketing",category:"Digital Marketing",level:"Intermediate",description:"Learn digital channels for business growth.",content:"Digital marketing includes social media, search, content and online advertising."},
    {id:7,title:"Content Marketing",category:"Content Marketing",level:"Intermediate",description:"Create content that attracts customers.",content:"Useful content builds trust and attracts potential customers."},
    {id:8,title:"Sales Fundamentals",category:"Sales",level:"Beginner",description:"Learn the fundamentals of professional selling.",content:"Sales is the process of understanding customer needs and presenting value."},
    {id:9,title:"Sales Strategy",category:"Sales Strategy",level:"Intermediate",description:"Build a practical sales strategy.",content:"A sales strategy defines target customers, channels, activities and targets."},
    {id:10,title:"Negotiation Skills",category:"Negotiation",level:"Intermediate",description:"Improve your negotiation skills.",content:"Good negotiation creates value while protecting your business interests."},
    {id:11,title:"Sales Management",category:"Sales Management",level:"Advanced",description:"Manage sales teams and performance.",content:"Sales managers focus on targets, people, execution, coaching and performance."},
    {id:12,title:"Leadership Fundamentals",category:"Leadership",level:"Beginner",description:"Understand effective leadership.",content:"Leadership means setting direction, developing people and taking responsibility."},
    {id:13,title:"Strategic Thinking",category:"Strategy",level:"Advanced",description:"Think strategically about business.",content:"Strategic thinking connects long-term goals with practical actions."},
    {id:14,title:"Decision Making",category:"Leadership",level:"Intermediate",description:"Make better business decisions.",content:"Good decisions require facts, alternatives, risks and clear priorities."},
    {id:15,title:"Team Leadership",category:"Leadership",level:"Intermediate",description:"Build and lead strong teams.",content:"Strong teams need clear expectations, ownership, coaching and feedback."},
    {id:16,title:"Brand Fundamentals",category:"Branding",level:"Beginner",description:"Understand the fundamentals of branding.",content:"A brand represents the experience and value customers associate with a business."},
    {id:17,title:"Brand Positioning",category:"Branding",level:"Intermediate",description:"Position your business in the market.",content:"Positioning defines why customers should choose your brand."},
    {id:18,title:"People Management",category:"Management",level:"Intermediate",description:"Manage people effectively.",content:"People management includes expectations, communication, coaching and accountability."},
    {id:19,title:"Recruitment",category:"Recruitment",level:"Intermediate",description:"Learn practical recruitment principles.",content:"Good recruitment starts with clear roles, requirements and selection criteria."},
    {id:20,title:"Performance Management",category:"Performance Management",level:"Advanced",description:"Improve team performance.",content:"Performance management requires targets, reviews, feedback and development."},
    {id:21,title:"Coaching",category:"Coaching",level:"Advanced",description:"Develop people through coaching.",content:"Effective coaching helps employees identify gaps and improve their capability."},
    {id:22,title:"Revenue Management",category:"Revenue Management",level:"Intermediate",description:"Understand business revenue.",content:"Revenue is the money generated from selling products or services."},
    {id:23,title:"Profit & Loss",category:"Finance",level:"Intermediate",description:"Understand profit and loss.",content:"Profit is revenue minus the costs required to operate the business."},
    {id:24,title:"Cash Flow",category:"Finance",level:"Intermediate",description:"Manage business cash flow.",content:"Cash flow measures money coming into and leaving a business."},
    {id:25,title:"Financial Analysis",category:"Finance",level:"Advanced",description:"Analyze business financial performance.",content:"Financial analysis helps identify profitability, efficiency and financial risks."},
    {id:26,title:"Time Management",category:"Productivity",level:"Beginner",description:"Improve your use of time.",content:"Prioritize important activities and protect focused working time."},
    {id:27,title:"Goal Setting",category:"Productivity",level:"Beginner",description:"Set measurable business goals.",content:"Effective goals should be clear, measurable and connected to business priorities."},
    {id:28,title:"Daily Planning",category:"Productivity",level:"Beginner",description:"Plan your day effectively.",content:"Daily planning converts important goals into specific actions."},
    {id:29,title:"Business Growth Strategy",category:"Strategy",level:"Advanced",description:"Create a growth strategy.",content:"Growth can come from more customers, higher frequency, new products or new markets."},
    {id:30,title:"Business Execution",category:"Business",level:"Advanced",description:"Turn strategy into execution.",content:"Execution requires clear priorities, ownership, measurement and consistent follow-up."}
  ];

  // ============================================================
  // HELPERS
  // ============================================================

  function $(id) {
    return document.getElementById(id);
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
      .replace(/'/g,"&#039;");
  }

  function num(id, fallback = 0) {
    const value = Number($(id)?.value);
    return Number.isFinite(value) ? value : fallback;
  }

  function formatNumber(value, decimals = 0) {
    const n = Number(value) || 0;
    return n.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  function formatKs(value) {
    return formatNumber(value) + " Ks";
  }

  function todayKey() {
    return new Date().toISOString().slice(0,10);
  }

  function safeJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // ============================================================
  // USER
  // ============================================================

  function getUser() {
    return safeJSON(USER_KEY, null);
  }

  function saveUser(user) {
    saveJSON(USER_KEY, user);
  }

  function getUserName() {
    return getUser()?.name || "Aung";
  }

  function isLoggedIn() {
    return !!getUser();
  }

  function showLoginScreen() {
    showModal(`
      <div class="academy-modal">
        <h2>Welcome to Aung Business Academy</h2>
        <p>Enter your name to start your business learning journey.</p>
        <input id="loginName" class="tool-input" type="text" placeholder="Your name">
        <button class="primary-button" onclick="handleLogin()">Continue →</button>
      </div>
    `);
    setTimeout(() => $("loginName")?.focus(), 100);
  }

  function handleLogin() {
    const input = $("loginName");
    const name = input?.value.trim();

    if (!name) {
      showToast("Please enter your name.");
      return;
    }

    saveUser({
      name,
      createdAt: new Date().toISOString(),
      lastActive: new Date().toISOString()
    });

    closeModal();
    updateUserUI();
    showToast("Welcome, " + name + "! 🎉");
  }

  // ============================================================
  // PROGRESS
  // ============================================================

  function getCompletedLessons() {
    return safeJSON(COMPLETED_KEY, []);
  }

  function saveCompletedLessons(list) {
    saveJSON(COMPLETED_KEY, [...new Set(list.map(Number))]);
  }

  function isCompleted(id) {
    return getCompletedLessons().includes(Number(id));
  }

  function getProgress() {
    return Math.round((getCompletedLessons().length / lessons.length) * 100);
  }

  function updateUserUI() {
    const name = getUserName();

    document.querySelectorAll(".profile strong").forEach(el => {
      el.textContent = name;
    });

    document.querySelectorAll("[data-user-name]").forEach(el => {
      el.textContent = name;
    });

    updateDashboard();
  }

  // ============================================================
  // DASHBOARD
  // ============================================================

  function updateDashboard() {
    const completed = getCompletedLessons().length;
    const progress = getProgress();

    if ($("lessonCount")) $("lessonCount").textContent = lessons.length;
    if ($("progress")) $("progress").textContent = progress + "%";

    document.querySelectorAll("[data-stat='completed']").forEach(el => {
      el.textContent = completed;
    });

    document.querySelectorAll("[data-stat='progress']").forEach(el => {
      el.textContent = progress + "%";
    });

    document.querySelectorAll("[data-progress-bar]").forEach(el => {
      el.style.width = progress + "%";
    });

    const next = lessons.find(x => !isCompleted(x.id));
    document.querySelectorAll("[data-next-lesson]").forEach(el => {
      el.textContent = next ? next.title : "All lessons completed 🎉";
    });
  }

  function goDashboard() {
    closeModal();
    closeSidebarMobile();

    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.remove("active");
    });

    const dashboard = document.querySelector('.nav-item[onclick="goDashboard()"]');
    if (dashboard) dashboard.classList.add("active");

    setPage("Dashboard", "Learn Business. Build Business. Grow Business.");
    updateDashboard();

    window.scrollTo({top:0, behavior:"smooth"});
  }

  function toggleSidebar() {
    document.querySelector(".sidebar")?.classList.toggle("mobile-open");
  }

  function closeSidebarMobile() {
    document.querySelector(".sidebar")?.classList.remove("mobile-open");
  }

  function toggleMenu(menuId) {
    const menu = $(menuId);
    if (!menu) return;

    document.querySelectorAll(".submenu").forEach(item => {
      if (item !== menu) item.classList.remove("open");
    });

    menu.classList.toggle("open");
  }

  function setPage(title, subtitle) {
    if ($("pageTitle")) $("pageTitle").textContent = title;
    if ($("pageSubtitle")) $("pageSubtitle").textContent = subtitle;
  }

  // ============================================================
  // MODAL
  // ============================================================

  function showModal(html) {
    const modal = $("appModal");
    const body = $("modalBody");
    if (!modal || !body) return;

    body.innerHTML = html;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    const modal = $("appModal");
    if (!modal) return;

    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  function closeModalOutside(event) {
    if (event.target?.id === "appModal") closeModal();
  }

  // ============================================================
  // LESSONS
  // ============================================================

  function openLessons() {
    closeSidebarMobile();
    setPage("Business Lessons","Learn practical business skills step by step.");

    const categories = [
      "All","Business","Marketing","Customer Finding","Digital Marketing",
      "Content Marketing","Sales","Sales Strategy","Negotiation",
      "Sales Management","Leadership","Strategy","Branding","Management",
      "Recruitment","Performance Management","Coaching","Revenue Management",
      "Finance","Productivity"
    ];

    showModal(`
      <div class="lesson-page">
        <h2>📚 Business Lessons</h2>
        <p>30 practical lessons from beginner to advanced.</p>

        <div class="academy-stats">
          <div><strong>${getCompletedLessons().length}</strong><span>Completed</span></div>
          <div><strong>${lessons.length}</strong><span>Total Lessons</span></div>
          <div><strong>${getProgress()}%</strong><span>Progress</span></div>
        </div>

        <div class="lesson-filters">
          ${categories.map((c,i) => `
            <button class="lesson-filter ${i===0?"active":""}"
              onclick="filterLessons('${escapeHTML(c)}',this)">
              ${escapeHTML(c)}
            </button>
          `).join("")}
        </div>

        <div id="lessonList" class="quick-grid">
          ${lessons.map(createLessonCard).join("")}
        </div>
      </div>
    `);
  }

  function createLessonCard(lesson) {
    const completed = isCompleted(lesson.id);

    return `
      <div class="quick-card lesson-card">
        <div class="quick-icon">${completed ? "✅" : "📘"}</div>
        <div>
          <small>${escapeHTML(lesson.category)} • ${escapeHTML(lesson.level)}</small>
          <h3>${escapeHTML(lesson.title)}</h3>
          <p>${escapeHTML(lesson.description)}</p>
          <button class="primary-button" onclick="openLesson(${lesson.id})">
            ${completed ? "Review Lesson" : "Start Lesson"} →
          </button>
        </div>
      </div>
    `;
  }

  function filterLessons(category, button) {
    const list = $("lessonList");
    if (!list) return;

    document.querySelectorAll(".lesson-filter").forEach(b => b.classList.remove("active"));
    if (button) button.classList.add("active");

    const filtered = category === "All"
      ? lessons
      : lessons.filter(lesson => lesson.category === category);

    list.innerHTML = filtered.length
      ? filtered.map(createLessonCard).join("")
      : `<div class="result-box"><h3>No lessons found</h3><p>More lessons will be added.</p></div>`;
  }

  function openLesson(id) {
    const lesson = lessons.find(item => item.id === Number(id));
    if (lesson) showLesson(lesson);
  }

  function showLesson(lesson) {
    const completed = isCompleted(lesson.id);
    const previous = lessons.find(x => x.id === lesson.id - 1);
    const next = lessons.find(x => x.id === lesson.id + 1);

    showModal(`
      <div class="lesson-detail">
        <span class="welcome-label">${escapeHTML(lesson.level)}</span>
        <h2>Lesson ${lesson.id}: ${escapeHTML(lesson.title)}</h2>
        <p>${escapeHTML(lesson.description)}</p>

        <div class="result-box">
          <h3>🎯 Key Learning</h3>
          <p>${escapeHTML(lesson.content)}</p>
        </div>

        <div class="result-box">
          <h3>💡 Manager Action</h3>
          <p>Write down one action you can apply today based on this lesson.</p>
        </div>

        <button class="primary-button" onclick="markLessonComplete(${lesson.id})">
          ${completed ? "✓ Completed" : "Mark as Complete"}
        </button>

        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">
          ${previous ? `<button class="secondary-button" onclick="openLesson(${previous.id})">← Previous</button>` : ""}
          ${next ? `<button class="secondary-button" onclick="openLesson(${next.id})">Next →</button>` : ""}
          <button class="secondary-button" onclick="openLessons()">All Lessons</button>
        </div>
      </div>
    `);
  }

  function markLessonComplete(id) {
    const list = getCompletedLessons();
    const n = Number(id);

    if (!list.includes(n)) {
      list.push(n);
      saveCompletedLessons(list);
      showToast("Lesson completed! 🎉");
    } else {
      showToast("Lesson already completed.");
    }

    updateDashboard();
    const lesson = lessons.find(x => x.id === n);
    if (lesson) showLesson(lesson);
  }

  function continueLearning() {
    const next = lessons.find(lesson => !isCompleted(lesson.id));

    if (next) openLesson(next.id);
    else showToast("All 30 lessons completed! 🏆");
  }

  function openCategory(category) {
    closeSidebarMobile();

    const normalized = String(category).toLowerCase();
    const results = lessons.filter(lesson =>
      lesson.category.toLowerCase().includes(normalized) ||
      normalized.includes(lesson.category.toLowerCase())
    );

    if (!results.length) {
      showModal(`
        <div class="lesson-detail">
          <h2>📚 ${escapeHTML(category)}</h2>
          <p>No lessons are currently available in this category.</p>
          <button class="primary-button" onclick="openLessons()">View All Lessons →</button>
        </div>
      `);
      return;
    }

    showModal(`
      <div class="lesson-page">
        <h2>${escapeHTML(category)}</h2>
        <p>${results.length} lesson(s) available.</p>
        <div class="quick-grid">${results.map(createLessonCard).join("")}</div>
      </div>
    `);
  }

  // ============================================================
  // TOOL HELPERS
  // ============================================================

  function inputField(id,label,placeholder,type="number") {
    return `
      <label style="display:block;margin:12px 0 6px;font-weight:600;">${escapeHTML(label)}</label>
      <input id="${escapeHTML(id)}" class="tool-input" type="${type}" placeholder="${escapeHTML(placeholder)}">
    `;
  }

  function calculateButton(text,action) {
    return `<button class="primary-button" onclick="${action}">${escapeHTML(text)}</button>`;
  }

  function resultBox(id) {
    return `<div id="${escapeHTML(id)}" class="result-box" style="margin-top:18px;"></div>`;
  }

  function toolCard(icon,title,description,action) {
    return `
      <div class="quick-card" onclick="${action}">
        <div class="quick-icon">${icon}</div>
        <div>
          <h3>${escapeHTML(title)}</h3>
          <p>${escapeHTML(description)}</p>
          <span>Open Tool →</span>
        </div>
      </div>
    `;
  }

  // ============================================================
  // BUSINESS TOOLS HUB
  // ============================================================

  function openTools() {
    closeSidebarMobile();
    setPage("Business Tools","Practical calculators for your business.");

    showModal(`
      <div class="lesson-page">
        <h2>🛠️ Business Tools</h2>
        <p>Professional calculators for sales, finance, pricing and growth.</p>

        <div class="quick-grid">
          ${toolCard("💰","Profit Calculator","Revenue, cost, profit and margin.","openProfitCalculator()")}
          ${toolCard("🏷️","Pricing Calculator","Selling price from cost and target margin.","openPricingCalculator()")}
          ${toolCard("⚖️","Break-Even Calculator","Units and revenue needed to break even.","openBreakEvenCalculator()")}
          ${toolCard("🎯","Sales Target","Orders required to hit revenue target.","openSalesTargetCalculator()")}
          ${toolCard("📈","Growth Calculator","Calculate growth rate and target revenue.","openGrowthCalculator()")}
          ${toolCard("💵","ROI Calculator","Measure return on investment.","openROICalculator()")}
          ${toolCard("👥","Sales Commission","Calculate team commission.","openCommissionCalculator()")}
          ${toolCard("📦","Inventory Calculator","Estimate stock value and turnover.","openInventoryCalculator()")}
          ${toolCard("📊","Sales KPI Dashboard","Track target, achievement and gap.","openKPIDashboard()")}
          ${toolCard("💸","Cash Flow Planner","Plan inflow, outflow and closing cash.","openCashFlowPlanner()")}
        </div>
      </div>
    `);
  }

  // ============================================================
  // PROFIT
  // ============================================================

  function openProfitCalculator() {
    showModal(`
      <div>
        <h2>💰 Profit Calculator</h2>
        ${inputField("revenue","Revenue","1000000")}
        ${inputField("cost","Total Cost","700000")}
        ${calculateButton("Calculate Profit","calculateProfit()")}
        ${resultBox("profitResult")}
      </div>
    `);
  }

  function calculateProfit() {
    const revenue = num("revenue");
    const cost = num("cost");
    const profit = revenue - cost;
    const margin = revenue > 0 ? profit / revenue * 100 : 0;

    $("profitResult").innerHTML = `
      <h3>Profit: ${formatKs(profit)}</h3>
      <p>Profit Margin: ${margin.toFixed(2)}%</p>
      <p>${profit >= 0 ? "✅ Business is profitable at this level." : "⚠️ Business is currently losing money."}</p>
    `;
  }

  // ============================================================
  // PRICING
  // ============================================================

  function openPricingCalculator() {
    showModal(`
      <div>
        <h2>🏷️ Pricing Calculator</h2>
        ${inputField("unitCost","Unit Cost","5000")}
        ${inputField("margin","Target Margin %","30")}
        ${calculateButton("Calculate Price","calculatePrice()")}
        ${resultBox("priceResult")}
      </div>
    `);
  }

  function calculatePrice() {
    const cost = num("unitCost");
    const margin = num("margin");

    if (cost <= 0 || margin < 0 || margin >= 100) {
      showToast("Enter a valid cost and margin below 100%.");
      return;
    }

    const price = cost / (1 - margin / 100);

    $("priceResult").innerHTML = `
      <h3>Recommended Price: ${formatKs(price)}</h3>
      <p>Gross Profit / Unit: ${formatKs(price - cost)}</p>
      <p>Target Margin: ${margin.toFixed(2)}%</p>
    `;
  }

  // ============================================================
  // BREAK EVEN
  // ============================================================

  function openBreakEvenCalculator() {
    showModal(`
      <div>
        <h2>⚖️ Break-Even Calculator</h2>
        ${inputField("fixedCost","Fixed Cost","1000000")}
        ${inputField("sellingPrice","Selling Price / Unit","10000")}
        ${inputField("variableCost","Variable Cost / Unit","6000")}
        ${calculateButton("Calculate Break-Even","calculateBreakEven()")}
        ${resultBox("breakEvenResult")}
      </div>
    `);
  }

  function calculateBreakEven() {
    const fixed = num("fixedCost");
    const price = num("sellingPrice");
    const variable = num("variableCost");
    const contribution = price - variable;

    if (fixed < 0 || price <= 0 || contribution <= 0) {
      showToast("Selling price must be higher than variable cost.");
      return;
    }

    const units = Math.ceil(fixed / contribution);
    const sales = units * price;

    $("breakEvenResult").innerHTML = `
      <h3>Break-Even: ${formatNumber(units)} units</h3>
      <p>Break-Even Sales: ${formatKs(sales)}</p>
      <p>Contribution / Unit: ${formatKs(contribution)}</p>
    `;
  }

  // ============================================================
  // SALES TARGET
  // ============================================================

  function openSalesTargetCalculator() {
    showModal(`
      <div>
        <h2>🎯 Sales Target Calculator</h2>
        ${inputField("targetRevenue","Target Revenue","10000000")}
        ${inputField("averageOrder","Average Order Value","50000")}
        ${calculateButton("Calculate Sales Target","calculateSalesTarget()")}
        ${resultBox("salesTargetResult")}
      </div>
    `);
  }

  function calculateSalesTarget() {
    const target = num("targetRevenue");
    const average = num("averageOrder");

    if (target <= 0 || average <= 0) {
      showToast("Enter valid target and average order values.");
      return;
    }

    const orders = Math.ceil(target / average);

    $("salesTargetResult").innerHTML = `
      <h3>Required Orders: ${formatNumber(orders)}</h3>
      <p>Target Revenue: ${formatKs(target)}</p>
      <p>Average Order: ${formatKs(average)}</p>
    `;
  }

  // ============================================================
  // GROWTH
  // ============================================================

  function openGrowthCalculator() {
    showModal(`
      <div>
        <h2>📈 Growth Calculator</h2>
        ${inputField("previousRevenue","Previous Revenue","10000000")}
        ${inputField("currentRevenue","Current Revenue","12500000")}
        ${inputField("growthTarget","Target Growth %","20")}
        ${calculateButton("Calculate Growth","calculateGrowth()")}
        ${resultBox("growthResult")}
      </div>
    `);
  }

  function calculateGrowth() {
    const previous = num("previousRevenue");
    const current = num("currentRevenue");
    const target = num("growthTarget");

    if (previous <= 0) {
      showToast("Previous revenue must be greater than zero.");
      return;
    }

    const growth = (current - previous) / previous * 100;
    const targetRevenue = previous * (1 + target / 100);

    $("growthResult").innerHTML = `
      <h3>Actual Growth: ${growth.toFixed(2)}%</h3>
      <p>Target Revenue at ${target.toFixed(2)}% growth: ${formatKs(targetRevenue)}</p>
      <p>${growth >= target ? "🎉 Growth target achieved." : "📌 Additional growth is required."}</p>
    `;
  }

  // ============================================================
  // ROI
  // ============================================================

  function openROICalculator() {
    showModal(`
      <div>
        <h2>💵 ROI Calculator</h2>
        ${inputField("roiInvestment","Investment","5000000")}
        ${inputField("roiReturn","Net Return","7500000")}
        ${calculateButton("Calculate ROI","calculateROI()")}
        ${resultBox("roiResult")}
      </div>
    `);
  }

  function calculateROI() {
    const investment = num("roiInvestment");
    const returned = num("roiReturn");

    if (investment <= 0) {
      showToast("Investment must be greater than zero.");
      return;
    }

    const profit = returned - investment;
    const roi = profit / investment * 100;

    $("roiResult").innerHTML = `
      <h3>ROI: ${roi.toFixed(2)}%</h3>
      <p>Net Return: ${formatKs(profit)}</p>
      <p>Returned Value: ${formatKs(returned)}</p>
    `;
  }

  // ============================================================
  // COMMISSION
  // ============================================================

  function openCommissionCalculator() {
    showModal(`
      <div>
        <h2>👥 Sales Commission Calculator</h2>
        ${inputField("commissionSales","Sales Achievement","10000000")}
        ${inputField("commissionRate","Commission Rate %","2")}
        ${inputField("commissionBonus","Bonus / Incentive","100000")}
        ${calculateButton("Calculate Commission","calculateCommission()")}
        ${resultBox("commissionResult")}
      </div>
    `);
  }

  function calculateCommission() {
    const sales = num("commissionSales");
    const rate = num("commissionRate");
    const bonus = num("commissionBonus");
    const commission = sales * rate / 100;
    const total = commission + bonus;

    $("commissionResult").innerHTML = `
      <h3>Commission: ${formatKs(commission)}</h3>
      <p>Bonus: ${formatKs(bonus)}</p>
      <p><strong>Total Incentive: ${formatKs(total)}</strong></p>
    `;
  }

  // ============================================================
  // INVENTORY
  // ============================================================

  function openInventoryCalculator() {
    showModal(`
      <div>
        <h2>📦 Inventory Calculator</h2>
        ${inputField("inventoryUnits","Units in Stock","1000")}
        ${inputField("inventoryCost","Cost / Unit","5000")}
        ${inputField("inventoryCOGS","Annual COGS","50000000")}
        ${inputField("inventoryAverage","Average Inventory Value","10000000")}
        ${calculateButton("Calculate Inventory","calculateInventory()")}
        ${resultBox("inventoryResult")}
      </div>
    `);
  }

  function calculateInventory() {
    const units = num("inventoryUnits");
    const cost = num("inventoryCost");
    const cogs = num("inventoryCOGS");
    const average = num("inventoryAverage");
    const value = units * cost;
    const turnover = average > 0 ? cogs / average : 0;

    $("inventoryResult").innerHTML = `
      <h3>Current Stock Value: ${formatKs(value)}</h3>
      <p>Inventory Turnover: ${turnover.toFixed(2)}x</p>
      <p>Higher turnover generally means stock is moving faster.</p>
    `;
  }

  // ============================================================
  // CASH FLOW
  // ============================================================

  function openCashFlowPlanner() {
    showModal(`
      <div>
        <h2>💸 Cash Flow Planner</h2>
        ${inputField("openingCash","Opening Cash","5000000")}
        ${inputField("cashInflow","Expected Cash Inflow","10000000")}
        ${inputField("cashOutflow","Expected Cash Outflow","7000000")}
        ${calculateButton("Calculate Cash Flow","calculateCashFlow()")}
        ${resultBox("cashFlowResult")}
      </div>
    `);
  }

  function calculateCashFlow() {
    const opening = num("openingCash");
    const inflow = num("cashInflow");
    const outflow = num("cashOutflow");
    const closing = opening + inflow - outflow;

    $("cashFlowResult").innerHTML = `
      <h3>Closing Cash: ${formatKs(closing)}</h3>
      <p>Net Cash Flow: ${formatKs(inflow - outflow)}</p>
      <p>${closing >= 0 ? "✅ Positive closing cash." : "⚠️ Cash shortfall — review expenses and collections."}</p>
    `;
  }

  // ============================================================
  // KPI DASHBOARD
  // ============================================================

  function openKPIDashboard() {
    const saved = safeJSON(KPI_KEY, {target:10000000,achievement:7500000,customers:100,orders:250});

    showModal(`
      <div>
        <h2>📊 Sales KPI Dashboard</h2>
        ${inputField("kpiTarget","Sales Target",saved.target)}
        ${inputField("kpiAchievement","Sales Achievement",saved.achievement)}
        ${inputField("kpiCustomers","Active Customers",saved.customers)}
        ${inputField("kpiOrders","Orders",saved.orders)}
        ${calculateButton("Analyze KPI","calculateKPI()")}
        ${resultBox("kpiResult")}
      </div>
    `);

    calculateKPI();
  }

  function calculateKPI() {
    const target = num("kpiTarget");
    const achievement = num("kpiAchievement");
    const customers = num("kpiCustomers");
    const orders = num("kpiOrders");

    saveJSON(KPI_KEY,{target,achievement,customers,orders});

    const achievementPct = target > 0 ? achievement / target * 100 : 0;
    const gap = target - achievement;
    const avgOrder = orders > 0 ? achievement / orders : 0;
    const avgCustomer = customers > 0 ? achievement / customers : 0;

    $("kpiResult").innerHTML = `
      <h3>Achievement: ${achievementPct.toFixed(1)}%</h3>
      <p>Target Gap: ${formatKs(gap)}</p>
      <p>Average Order Value: ${formatKs(avgOrder)}</p>
      <p>Revenue / Active Customer: ${formatKs(avgCustomer)}</p>
      <p>${achievementPct >= 100 ? "🏆 Target achieved." : "📌 Focus on the gap and build an action plan."}</p>
    `;
  }

  // ============================================================
  // AI BUSINESS COACH
  // ============================================================

  function openAI() {
    closeSidebarMobile();
    setPage("AI Business Coach","Your practical AI advisor for business, sales and management.");

    showModal(`
      <div class="ai-page">
        <h2>🤖 AI Business Coach</h2>
        <p>Ask about business, sales, marketing, leadership, finance or strategy.</p>

        <div class="ai-quick-grid">
          <button class="secondary-button" onclick="askAIQuick('How can I increase sales in my business?')">📈 Increase Sales</button>
          <button class="secondary-button" onclick="askAIQuick('Create a sales action plan for my team.')">🎯 Sales Plan</button>
          <button class="secondary-button" onclick="askAIQuick('How can I improve team performance?')">👥 Team Performance</button>
          <button class="secondary-button" onclick="askAIQuick('Give me a marketing strategy for a small business.')">📣 Marketing</button>
          <button class="secondary-button" onclick="askAIQuick('Help me create a business growth strategy.')">🚀 Growth</button>
          <button class="secondary-button" onclick="askAIQuick('Analyze the financial health of my business and tell me what numbers I should track.')">💰 Finance</button>
        </div>

        <div id="aiChat" class="result-box ai-chat">
          <div><strong>AI Coach:</strong> Hello ${escapeHTML(getUserName())}! What business challenge can I help you solve today?</div>
        </div>

        <textarea id="aiInput" class="tool-input" rows="4"
          placeholder="Ask your business question..."></textarea>

        <button class="primary-button" onclick="sendAIMessage()">Send to AI →</button>
        <button class="secondary-button" onclick="clearAIChat()">Clear Chat</button>
      </div>
    `);

    setTimeout(() => $("aiInput")?.focus(),100);
  }

  async function sendAIMessage(message) {
    const input = $("aiInput");
    const text = message || input?.value.trim();

    if (!text) {
      showToast("Please enter a question.");
      return;
    }

    appendAIMessage("You",text);
    if (input) input.value = "";

    appendAIMessage("AI Coach","Thinking...");

    try {
      const response = await fetch(AI_API_URL,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          message:
            "You are the AI Business Coach inside Aung Business Academy. " +
            "Give practical, concise and actionable advice. " +
            "When useful, structure the answer into steps, numbers, KPIs and action plans. " +
            "The user may be a Myanmar business owner or sales manager. " +
            "Answer in the same language as the user when possible. " +
            "User question: " + text
        })
      });

      if (!response.ok) throw new Error("AI server error");

      const data = await response.json();
      const answer = data.reply || data.response || data.message || "No response received.";

      removeLastAIMessage();
      appendAIMessage("AI Coach",answer);
    } catch (error) {
      removeLastAIMessage();
      appendAIMessage(
        "AI Coach",
        "AI connection is temporarily unavailable. Please check the server/API connection and try again."
      );
    }
  }

  function askAIQuick(question) {
    sendAIMessage(question);
  }

  function appendAIMessage(sender,message) {
    const chat = $("aiChat");
    if (!chat) return;

    const div = document.createElement("div");
    div.style.margin = "10px 0";
    div.innerHTML = `
      <strong>${escapeHTML(sender)}:</strong>
      <span style="white-space:pre-wrap;">${escapeHTML(message)}</span>
    `;

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
  }

  function removeLastAIMessage() {
    const chat = $("aiChat");
    if (chat?.lastElementChild) chat.removeChild(chat.lastElementChild);
  }

  function clearAIChat() {
    const chat = $("aiChat");
    if (chat) {
      chat.innerHTML = `<div><strong>AI Coach:</strong> Chat cleared. How can I help?</div>`;
    }
  }

  async function checkAIHealth() {
    try {
      const response = await fetch(API_BASE_URL,{method:"GET"});
      return response.ok;
    } catch {
      return false;
    }
  }

  // ============================================================
  // BUSINESS PLAN
  // ============================================================
     // ============================================================
  // BUSINESS PLAN
  // ============================================================

  function textInput(id,label,placeholder) {
    return `
      <label style="display:block;margin:12px 0 6px;font-weight:600;">${escapeHTML(label)}</label>
      <input id="${escapeHTML(id)}" class="tool-input" type="text" placeholder="${escapeHTML(placeholder)}">
    `;
  }

  function openBusinessPlan() {
    closeSidebarMobile();
    setPage("Business Plan","Build a practical business plan step by step.");

    const saved = safeJSON(PLAN_KEY,{});

    showModal(`
      <div>
        <h2>📋 AI Business Plan</h2>
        <p>Create a practical plan for your business.</p>

        ${textInput("businessName","Business Name",saved.name || "Aung Business")}
        ${textInput("businessType","Business Type",saved.type || "Food / Retail / Service")}
        ${textInput("targetCustomer","Target Customer",saved.customer || "Who are your customers?")}
        ${textInput("budget","Starting Budget",saved.budget || "5000000")}
        ${textInput("goal","Business Goal",saved.goal || "Monthly profit target")}
        ${textInput("location","Market / Location",saved.location || "Yangon")}
        ${textInput("strength","Competitive Advantage",saved.strength || "What makes your business different?")}

        <button class="primary-button" onclick="generateBusinessPlan()">Generate Business Plan →</button>
        ${resultBox("businessPlanResult")}
      </div>
    `);
  }

  async function generateBusinessPlan() {
    const data = {
      name:$("businessName")?.value.trim() || "My Business",
      type:$("businessType")?.value.trim() || "Business",
      customer:$("targetCustomer")?.value.trim() || "Target Customers",
      budget:$("budget")?.value.trim() || "Not specified",
      goal:$("goal")?.value.trim() || "Business growth",
      location:$("location")?.value.trim() || "Myanmar",
      strength:$("strength")?.value.trim() || "Customer value"
    };

    saveJSON(PLAN_KEY,data);

    const result = $("businessPlanResult");
    if (!result) return;

    result.innerHTML = `<p><strong>Building your plan...</strong></p>`;

    const prompt =
      `Create a practical business plan for:
Business: ${data.name}
Type: ${data.type}
Target Customer: ${data.customer}
Budget: ${data.budget}
Goal: ${data.goal}
Location: ${data.location}
Competitive Advantage: ${data.strength}

Give:
1. Executive summary
2. Customer profile
3. Value proposition
4. Product/service strategy
5. Pricing strategy
6. Marketing plan
7. Sales plan
8. Operations plan
9. Monthly KPI targets
10. Risks and solutions
11. 30-day action plan.
Keep it practical and easy to execute.`;

    try {
      const response = await fetch(AI_API_URL,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({message:prompt})
      });

      if (!response.ok) throw new Error();

      const json = await response.json();
      const answer = json.reply || json.response || json.message;

      if (!answer) throw new Error();

      result.innerHTML = `
        <h3>🚀 ${escapeHTML(data.name)}</h3>
        <div style="white-space:pre-wrap;">${escapeHTML(answer)}</div>
        <hr>
        <p><strong>Plan saved locally on this device.</strong></p>
      `;
    } catch {
      result.innerHTML = `
        <h3>🚀 ${escapeHTML(data.name)}</h3>
        <p><strong>Business Type:</strong> ${escapeHTML(data.type)}</p>
        <p><strong>Target Customer:</strong> ${escapeHTML(data.customer)}</p>
        <p><strong>Budget:</strong> ${escapeHTML(data.budget)}</p>
        <p><strong>Goal:</strong> ${escapeHTML(data.goal)}</p>
        <hr>
        <h4>30-Day Action Plan</h4>
        <p>1. Research customer demand and competitors.</p>
        <p>2. Define your offer and value proposition.</p>
        <p>3. Set pricing and profit targets.</p>
        <p>4. Build customer acquisition channels.</p>
        <p>5. Set weekly sales KPIs.</p>
        <p>6. Review cash flow and profitability every week.</p>
        <p>7. Coach the team and adjust execution based on results.</p>
        <p>⚠️ AI plan generation needs the backend AI endpoint to be available.</p>
      `;
    }
  }

  // ============================================================
  // NOTES / ACTION PLAN
  // ============================================================

  function getNotes() {
    return safeJSON(NOTES_KEY,[]);
  }

  function saveNotes(notes) {
    saveJSON(NOTES_KEY,notes);
  }

  function openNotes() {
    const notes = getNotes();

    showModal(`
      <div>
        <h2>📝 My Business Notes</h2>
        <p>Capture ideas, decisions, customer insights and action items.</p>

        <textarea id="newNote" class="tool-input" rows="5"
          placeholder="Write your business note..."></textarea>

        <button class="primary-button" onclick="saveNewNote()">Save Note</button>

        <div style="margin-top:20px;">
          ${notes.length
            ? notes.map((n,i)=>`
              <div class="result-box">
                <small>${escapeHTML(n.date)}</small>
                <p style="white-space:pre-wrap;">${escapeHTML(n.text)}</p>
                <button class="secondary-button" onclick="deleteNote(${i})">Delete</button>
              </div>
            `).join("")
            : `<div class="result-box"><p>No notes yet.</p></div>`
          }
        </div>
      </div>
    `);
  }

  function saveNewNote() {
    const text = $("newNote")?.value.trim();

    if (!text) {
      showToast("Write something first.");
      return;
    }

    const notes = getNotes();
    notes.unshift({date:new Date().toLocaleString(),text});
    saveNotes(notes);

    showToast("Note saved.");
    openNotes();
  }

  function deleteNote(index) {
    const notes = getNotes();

    notes.splice(Number(index),1);
    saveNotes(notes);

    openNotes();
  }

  // ============================================================
  // PREMIUM / TRIAL
  // ============================================================

  function getTrialInfo() {
    return safeJSON(TRIAL_KEY,null);
  }

  function startTrial() {
    const existing = getTrialInfo();

    if (existing) {
      showToast("Your trial has already started.");
      return;
    }

    saveJSON(TRIAL_KEY,{
      start:Date.now(),
      days:7
    });

    showToast("7-Day Premium Trial Started! 🎉");
    openPremium();
  }

  function getTrialDaysRemaining() {
    const trial = getTrialInfo();

    if (!trial) return 0;

    const elapsed = Date.now() - trial.start;
    const days = Math.ceil(trial.days - elapsed / 86400000);

    return Math.max(0,days);
  }

  function isPremiumActive() {
    return getTrialDaysRemaining() > 0;
  }

  function openPremium() {
    showModal(`
      <div>
        <h2>👑 Full Business Academy</h2>
        <p>Build your complete business management skillset.</p>

        <div class="result-box">
          <h3>Premium Features</h3>
          <p>✓ Advanced Business Lessons</p>
          <p>✓ Professional Business Tools</p>
          <p>✓ AI Business Coach</p>
          <p>✓ AI Business Plan Generator</p>
          <p>✓ Sales KPI Dashboard</p>
          <p>✓ Growth & Finance Tools</p>
          <p>✓ Business Notes & Action Planning</p>
          <p>✓ Leadership & Management Training</p>
        </div>

        <h3>${isPremiumActive() ? "🟢 Premium Trial Active" : "7-Day Free Trial"}</h3>

        <p>
          ${
            isPremiumActive()
              ? getTrialDaysRemaining() + " day(s) remaining."
              : "Start your free trial on this device."
          }
        </p>

        ${
          !getTrialInfo()
            ? `<button class="primary-button" onclick="startTrial()">Start Free Trial →</button>`
            : ""
        }
      </div>
    `);
  }

  // ============================================================
  // PROFILE
  // ============================================================

  function openProfile() {
    const user = getUser();
    const name = user?.name || "Aung";
    const completed = getCompletedLessons().length;
    const progress = getProgress();
    const notes = getNotes().length;

    showModal(`
      <div>
        <h2>👤 My Profile</h2>

        <div class="result-box">
          <h3>${escapeHTML(name)}</h3>
          <p>Business Learner</p>
          <p>Lessons Completed: ${completed}/${lessons.length}</p>
          <p>Learning Progress: ${progress}%</p>
          <p>Business Notes: ${notes}</p>
          <p>
            Premium Trial:
            ${
              isPremiumActive()
                ? getTrialDaysRemaining() + " day(s) remaining"
                : "Not active"
            }
          </p>
        </div>

        <button class="primary-button" onclick="openNotes()">📝 My Notes</button>
        <button class="secondary-button" onclick="changeUserName()">Change Name</button>
      </div>
    `);
  }

  function changeUserName() {
    showModal(`
      <div>
        <h2>👤 Change Name</h2>

        ${textInput(
          "newUserName",
          "Your Name",
          getUserName()
        )}

        <button class="primary-button" onclick="saveNewUserName()">
          Save Name
        </button>
      </div>
    `);
  }

  function saveNewUserName() {
    const name = $("newUserName")?.value.trim();

    if (!name) {
      showToast("Enter a name.");
      return;
    }

    const user = getUser() || {};

    user.name = name;
    user.lastActive = new Date().toISOString();

    saveUser(user);

    closeModal();
    updateUserUI();

    showToast("Name updated.");
  }

  // ============================================================
  // NOTIFICATIONS
  // ============================================================

  function showNotification() {
    const progress = getProgress();
    const next = lessons.find(x => !isCompleted(x.id));

    showModal(`
      <div>
        <h2>🔔 Academy Notifications</h2>

        <div class="result-box">
          <p>🎓 Keep learning every day.</p>
          <p>📚 ${lessons.length} business lessons are available.</p>
          <p>📊 Current progress: ${progress}%.</p>
          <p>🤖 AI Business Coach is ready.</p>
          <p>🛠️ Professional business tools are available.</p>
          <p>📝 Capture your next action in My Notes.</p>

          <p>
            ${
              next
                ? "➡️ Next lesson: " + escapeHTML(next.title)
                : "🏆 All lessons completed!"
            }
          </p>
        </div>
      </div>
    `);
  }

  // ============================================================
  // SETTINGS
  // ============================================================

  function getSettings() {
    return safeJSON(SETTINGS_KEY,{
      language:"auto"
    });
  }

  function openSettings() {
    const settings = getSettings();

    showModal(`
      <div>
        <h2>⚙️ Academy Settings</h2>

        <div class="result-box">
          <h3>Account</h3>
          <p>
            Current user:
            <strong>${escapeHTML(getUserName())}</strong>
          </p>
        </div>

        <button class="primary-button" onclick="resetLearningProgress()">
          Reset Learning Progress
        </button>

        <button class="secondary-button" onclick="clearAcademyData()">
          Clear Academy Data
        </button>
      </div>
    `);
  }

  function resetLearningProgress() {
    if (!confirm("Reset all completed lessons?")) return;

    localStorage.removeItem(COMPLETED_KEY);

    updateDashboard();

    showToast("Learning progress reset.");

    openSettings();
  }

  function clearAcademyData() {
    if (!confirm("Clear notes, plans, KPI data and progress?")) return;

    [
      COMPLETED_KEY,
      NOTES_KEY,
      PLAN_KEY,
      KPI_KEY,
      TRIAL_KEY,
      SETTINGS_KEY
    ].forEach(key => localStorage.removeItem(key));

    updateDashboard();

    showToast("Academy data cleared.");

    openSettings();
  }

  // ============================================================
  // LOGOUT
  // ============================================================

  function logoutUser() {
    localStorage.removeItem(USER_KEY);

    closeModal();

    showToast("Logged out.");

    setTimeout(() => {
      showLoginScreen();
    },500);
  }

  // ============================================================
  // TOAST
  // ============================================================

  function showToast(message) {
    let toast = $("academyToast");

    if (!toast) {
      toast = document.createElement("div");

      toast.id = "academyToast";

      Object.assign(toast.style,{
        position:"fixed",
        bottom:"25px",
        left:"50%",
        transform:"translateX(-50%)",
        padding:"12px 20px",
        borderRadius:"10px",
        background:"#111827",
        color:"#fff",
        zIndex:"99999",
        fontSize:"14px",
        maxWidth:"90%",
        boxShadow:"0 10px 30px rgba(0,0,0,.2)"
      });

      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.display = "block";

    clearTimeout(toast._timer);

    toast._timer = setTimeout(() => {
      toast.style.display = "none";
    },2500);
  }

  // ============================================================
  // KEYBOARD SHORTCUTS
  // ============================================================

  document.addEventListener("keydown",event => {

    if (event.key === "Escape") {
      closeModal();
    }

    if (
      (event.ctrlKey || event.metaKey) &&
      event.key === "Enter"
    ) {
      if ($("aiInput")) {
        sendAIMessage();
      }
    }

  });

  // ============================================================
  // INIT
  // ============================================================

  function init() {

    updateUserUI();

    setPage(
      "Dashboard",
      "Learn Business. Build Business. Grow Business."
    );

    const modal = $("appModal");

    if (modal) {
      modal.addEventListener(
        "click",
        closeModalOutside
      );
    }

    if (!isLoggedIn()) {
      setTimeout(showLoginScreen,300);
    }
  }

  // ============================================================
  // GLOBAL EXPORTS
  // ============================================================

  window.goDashboard = goDashboard;
  window.toggleSidebar = toggleSidebar;
  window.toggleMenu = toggleMenu;

  window.openLessons = openLessons;
  window.openLesson = openLesson;
  window.showLesson = showLesson;
  window.filterLessons = filterLessons;
  window.openCategory = openCategory;
  window.markLessonComplete = markLessonComplete;
  window.continueLearning = continueLearning;

  window.openTools = openTools;

  window.openProfitCalculator = openProfitCalculator;
  window.calculateProfit = calculateProfit;

  window.openPricingCalculator = openPricingCalculator;
  window.calculatePrice = calculatePrice;

  window.openBreakEvenCalculator = openBreakEvenCalculator;
  window.calculateBreakEven = calculateBreakEven;

  window.openSalesTargetCalculator = openSalesTargetCalculator;
  window.calculateSalesTarget = calculateSalesTarget;

  window.openGrowthCalculator = openGrowthCalculator;
  window.calculateGrowth = calculateGrowth;

  window.openROICalculator = openROICalculator;
  window.calculateROI = calculateROI;

  window.openCommissionCalculator = openCommissionCalculator;
  window.calculateCommission = calculateCommission;

  window.openInventoryCalculator = openInventoryCalculator;
  window.calculateInventory = calculateInventory;

  window.openCashFlowPlanner = openCashFlowPlanner;
  window.calculateCashFlow = calculateCashFlow;

  window.openKPIDashboard = openKPIDashboard;
  window.calculateKPI = calculateKPI;

  window.openAI = openAI;
  window.sendAIMessage = sendAIMessage;
  window.askAIQuick = askAIQuick;
  window.checkAIHealth = checkAIHealth;
  window.clearAIChat = clearAIChat;

  window.openBusinessPlan = openBusinessPlan;
  window.generateBusinessPlan = generateBusinessPlan;

  window.openNotes = openNotes;
  window.saveNewNote = saveNewNote;
  window.deleteNote = deleteNote;

  window.openPremium = openPremium;
  window.startTrial = startTrial;

  window.openProfile = openProfile;
  window.changeUserName = changeUserName;
  window.saveNewUserName = saveNewUserName;

  window.showNotification = showNotification;
  window.openSettings = openSettings;
  window.resetLearningProgress = resetLearningProgress;
  window.clearAcademyData = clearAcademyData;

  window.logoutUser = logoutUser;
  window.closeModal = closeModal;
  window.handleLogin = handleLogin;
  window.showToast = showToast;

  // ============================================================
  // START
  // ============================================================

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }

})();

 
