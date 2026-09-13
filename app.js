/* =========================================================
   AUNG BUSINESS ACADEMY
   CLICK / NAVIGATION REPAIR
   Version 8.1
   ========================================================= */

(function () {
  "use strict";

  console.log("Aung Business Academy: Click Repair Loaded");

  /* ---------------------------------------------------------
     PAGE MAP
  --------------------------------------------------------- */

  const pageMap = {
    dashboardPage: {
      title: "Dashboard",
      subtitle: "Your business learning overview"
    },

    coursesPage: {
      title: "My Courses",
      subtitle: "Business courses and learning paths"
    },

    lessonsPage: {
      title: "Lessons",
      subtitle: "Learn practical business skills"
    },

    progressPage: {
      title: "My Progress",
      subtitle: "Track your learning progress"
    },

    salesPage: {
      title: "Sales Manager",
      subtitle: "Sales management tools and performance"
    },

    calculatorPage: {
      title: "Pricing Calculator",
      subtitle: "Calculate pricing, profit and targets"
    },

    reportsPage: {
      title: "Reports",
      subtitle: "Business performance overview"
    },

    aiPage: {
      title: "AI Business Coach",
      subtitle: "Business coaching and practical guidance"
    },

    toolsPage: {
      title: "AI Tools",
      subtitle: "Useful business productivity tools"
    },

    settingsPage: {
      title: "Settings",
      subtitle: "Manage your profile and preferences"
    }
  };


  /* ---------------------------------------------------------
     HELPERS
  --------------------------------------------------------- */

  function get(id) {
    return document.getElementById(id);
  }


  function normalizePage(page) {

    if (!page) {
      return "dashboardPage";
    }

    page = String(page)
      .replace("#", "")
      .trim();

    if (pageMap[page]) {
      return page;
    }

    const lower = page.toLowerCase();

    for (const key of Object.keys(pageMap)) {
      if (
        key.toLowerCase() === lower ||
        key.toLowerCase().replace("page", "") === lower.replace("page", "")
      ) {
        return key;
      }
    }

    return "dashboardPage";
  }


  /* ---------------------------------------------------------
     NAVIGATION
  --------------------------------------------------------- */

  function navigate(page) {

    const targetPage = normalizePage(page);

    console.log("NAVIGATE:", targetPage);

    const allPages = document.querySelectorAll(".page");

    if (!allPages.length) {
      console.warn("No .page elements found.");
      return;
    }

    /* Hide all pages */

    allPages.forEach(function (section) {
      section.classList.remove("active");

      section.style.display = "none";
      section.style.pointerEvents = "auto";
    });


    /* Show selected page */

    const target = get(targetPage);

    if (!target) {
      console.error("Page not found:", targetPage);
      return;
    }

    target.classList.add("active");
    target.style.display = "block";
    target.style.pointerEvents = "auto";


    /* -------------------------------------------------------
       SIDEBAR ACTIVE BUTTON
    ------------------------------------------------------- */

    document.querySelectorAll(".nav-item").forEach(function (button) {

      const buttonPage = button.getAttribute("data-page");

      if (normalizePage(buttonPage) === targetPage) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }

    });


    /* -------------------------------------------------------
       MOBILE NAV ACTIVE
    ------------------------------------------------------- */

    document.querySelectorAll(".mobile-nav button").forEach(function (button) {

      const buttonPage = button.getAttribute("data-page");

      if (
        buttonPage &&
        normalizePage(buttonPage) === targetPage
      ) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }

    });


    /* -------------------------------------------------------
       TOP TITLE
    ------------------------------------------------------- */

    const pageTitle = get("pageTitle");
    const pageSubtitle = get("pageSubtitle");

    if (pageTitle) {
      pageTitle.textContent = pageMap[targetPage].title;
    }

    if (pageSubtitle) {
      pageSubtitle.textContent = pageMap[targetPage].subtitle;
    }


    /* -------------------------------------------------------
       CLOSE MOBILE SIDEBAR
    ------------------------------------------------------- */

    const sidebar = get("sidebar");

    if (sidebar) {
      sidebar.classList.remove("open");
    }


    const overlay = get("sidebarOverlay");

    if (overlay) {
      overlay.classList.remove("show");
    }


    /* -------------------------------------------------------
       SCROLL TOP
    ------------------------------------------------------- */

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  /* ---------------------------------------------------------
     CLICK EVENT REPAIR
     CAPTURE PHASE
  --------------------------------------------------------- */

  document.addEventListener(
    "click",
    function (event) {

      const navButton = event.target.closest(
        ".nav-item[data-page], .mobile-nav button[data-page]"
      );

      if (!navButton) {
        return;
      }

      const page = navButton.getAttribute("data-page");

      if (!page) {
        return;
      }

      console.log("CLICK DETECTED:", page);

      event.preventDefault();

      navigate(page);

    },
    true
  );


  /* ---------------------------------------------------------
     OLD HTML COMPATIBILITY
     This keeps existing onclick="navigate(...)"
     working.
  --------------------------------------------------------- */

  window.navigate = navigate;


  /* ---------------------------------------------------------
     OPEN LESSONS
  --------------------------------------------------------- */

  window.openLessons = function () {
    navigate("lessonsPage");
  };


  /* ---------------------------------------------------------
     OPEN CATEGORY
  --------------------------------------------------------- */

  window.openCategory = function (category) {

    navigate("lessonsPage");

    setTimeout(function () {

      if (typeof window.filterLessons === "function") {
        window.filterLessons(category);
      }

    }, 100);

  };


  /* ---------------------------------------------------------
     CALCULATORS
  --------------------------------------------------------- */

  window.openProfitCalculator = function () {

    navigate("calculatorPage");

    setTimeout(function () {
      showToast("Profit Calculator opened");
    }, 100);

  };


  window.openPricingCalculator = function () {

    navigate("calculatorPage");

    setTimeout(function () {
      showToast("Pricing Calculator opened");
    }, 100);

  };


  window.openBreakEvenCalculator = function () {

    navigate("calculatorPage");

    setTimeout(function () {
      showToast("Break-even Calculator opened");
    }, 100);

  };


  window.openSalesTargetCalculator = function () {

    navigate("calculatorPage");

    setTimeout(function () {
      showToast("Sales Target Calculator opened");
    }, 100);

  };


  /* ---------------------------------------------------------
     LESSON FILTER
  --------------------------------------------------------- */

  window.filterLessons = function (category, button) {

    console.log("Filter:", category);

    document.querySelectorAll(".lesson-filter").forEach(function (btn) {
      btn.classList.remove("active");
    });

    if (button) {
      button.classList.add("active");
    }

    const cards = document.querySelectorAll(
      "#lessonsList .lesson-card, #lessonsList .card"
    );

    if (!cards.length) {
      return;
    }

    cards.forEach(function (card) {

      if (
        category === "all" ||
        !category
      ) {
        card.style.display = "";
        return;
      }

      const cardCategory =
        card.getAttribute("data-category") ||
        card.dataset.category ||
        "";

      if (
        cardCategory.toLowerCase() ===
        String(category).toLowerCase()
      ) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }

    });

  };


  /* ---------------------------------------------------------
     AI PROMPT
  --------------------------------------------------------- */

  window.usePrompt = function (prompt) {

    const input = get("aiInput");

    if (!input) {
      return;
    }

    input.value = prompt;

    input.focus();

  };


  /* ---------------------------------------------------------
     AI MESSAGE
  --------------------------------------------------------- */

  window.sendAIMessage = function () {

    const input = get("aiInput");

    if (!input) {
      return;
    }

    const message = input.value.trim();

    if (!message) {
      showToast("Please enter your question.");
      return;
    }

    const chat = get("aiChat");

    if (chat) {

      const userMessage = document.createElement("div");

      userMessage.className = "ai-message user";

      userMessage.innerHTML =
        "<strong>You</strong><p>" +
        escapeHTML(message) +
        "</p>";

      chat.appendChild(userMessage);


      const aiMessage = document.createElement("div");

      aiMessage.className = "ai-message assistant";

      aiMessage.innerHTML =
        "<strong>AI Business Coach</strong>" +
        "<p>သင့်မေးခွန်းကို လက်တွေ့ Business အမြင်နဲ့ ခွဲခြမ်းစိတ်ဖြာပေးပါမယ်။ Sales, Marketing, People Management, Pricing သို့မဟုတ် Business Strategy အကြောင်း ဆက်မေးနိုင်ပါတယ်။</p>";

      chat.appendChild(aiMessage);

      chat.scrollTop = chat.scrollHeight;

    }

    input.value = "";

  };


  /* ---------------------------------------------------------
     AI TOOL
  --------------------------------------------------------- */

  window.openAITool = function (tool) {

    let title = "AI Business Tool";
    let content = "Business tool opened.";

    if (tool) {

      const name = String(tool);

      if (name.toLowerCase().includes("sales")) {
        title = "Sales Strategy Tool";
        content = "Sales target, customer coverage, team execution နှင့် action plan တည်ဆောက်ရန် အသုံးပြုနိုင်ပါသည်။";
      }

      else if (name.toLowerCase().includes("marketing")) {
        title = "Marketing Planner";
        content = "Customer segment, positioning, promotion နှင့် market activity များ စီစဉ်ရန် အသုံးပြုနိုင်ပါသည်။";
      }

      else if (name.toLowerCase().includes("business")) {
        title = "Business Planner";
        content = "Business goal, strategy, execution နှင့် KPI များ တည်ဆောက်ရန် အသုံးပြုနိုင်ပါသည်။";
      }

    }

    openModal(
      "<div class='modal-content-inner'>" +
      "<h2>" + title + "</h2>" +
      "<p>" + content + "</p>" +
      "</div>"
    );

  };


  /* ---------------------------------------------------------
     PROFILE
  --------------------------------------------------------- */

  window.openProfile = function () {

    openModal(
      "<div class='modal-content-inner'>" +
      "<h2>Aung Zar Ni Win</h2>" +
      "<p><strong>Position:</strong> Business Manager</p>" +
      "<p><strong>Academy:</strong> Aung Business Academy</p>" +
      "</div>"
    );

  };


  /* ---------------------------------------------------------
     MODAL
  --------------------------------------------------------- */

  window.openModal = function (html) {

    const overlay = get("modalOverlay");
    const body = get("modalBody");

    if (!overlay || !body) {
      console.warn("Modal elements not found.");
      return;
    }

    body.innerHTML = html;

    overlay.classList.add("show");

    overlay.style.display = "flex";
    overlay.style.pointerEvents = "auto";

  };


  window.closeModal = function () {

    const overlay = get("modalOverlay");

    if (!overlay) {
      return;
    }

    overlay.classList.remove("show");

    overlay.style.display = "none";
    overlay.style.pointerEvents = "none";

  };


  /* ---------------------------------------------------------
     TOAST
  --------------------------------------------------------- */

  window.showToast = function (message) {

    const toast = get("toast");

    if (!toast) {
      console.log("Toast:", message);
      return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(window.__toastTimer);

    window.__toastTimer = setTimeout(function () {
      toast.classList.remove("show");
    }, 2500);

  };


  /* ---------------------------------------------------------
     ESCAPE HTML
  --------------------------------------------------------- */

  function escapeHTML(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* ---------------------------------------------------------
     MOBILE MENU
  --------------------------------------------------------- */

  function setupMobileMenu() {

    const menuButton = get("mobileMenu");
    const sidebar = get("sidebar");

    if (!menuButton || !sidebar) {
      return;
    }

    menuButton.addEventListener("click", function (event) {

      event.preventDefault();
      event.stopPropagation();

      sidebar.classList.toggle("open");

      let overlay = get("sidebarOverlay");

      if (!overlay) {

        overlay = document.createElement("div");

        overlay.id = "sidebarOverlay";
        overlay.className = "sidebar-overlay";

        document.body.appendChild(overlay);

        overlay.addEventListener("click", function () {

          sidebar.classList.remove("open");
          overlay.classList.remove("show");

        });

      }

      if (sidebar.classList.contains("open")) {
        overlay.classList.add("show");
      } else {
        overlay.classList.remove("show");
      }

    });

  }


  /* ---------------------------------------------------------
     MODAL CLOSE
  --------------------------------------------------------- */

  function setupModal() {

    const closeButton = get("modalClose");
    const overlay = get("modalOverlay");

    if (closeButton) {

      closeButton.addEventListener("click", function () {
        closeModal();
      });

    }

    if (overlay) {

      overlay.addEventListener("click", function (event) {

        if (event.target === overlay) {
          closeModal();
        }

      });

    }

    document.addEventListener("keydown", function (event) {

      if (event.key === "Escape") {
        closeModal();
      }

    });

  }


  /* ---------------------------------------------------------
     SEARCH
  --------------------------------------------------------- */

  function setupSearch() {

    const search = get("globalSearch");

    if (!search) {
      return;
    }

    search.addEventListener("keydown", function (event) {

      if (event.key !== "Enter") {
        return;
      }

      event.preventDefault();

      const value = search.value.trim().toLowerCase();

      if (!value) {
        navigate("lessonsPage");
        return;
      }

      navigate("lessonsPage");

      setTimeout(function () {

        const cards = document.querySelectorAll(
          "#lessonsList .lesson-card, #lessonsList .card"
        );

        cards.forEach(function (card) {

          const text = card.textContent.toLowerCase();

          card.style.display =
            text.includes(value) ? "" : "none";

        });

      }, 100);

    });

  }


  /* ---------------------------------------------------------
     NOTIFICATION
  --------------------------------------------------------- */

  function setupNotification() {

    const button = get("notificationBtn");

    if (!button) {
      return;
    }

    button.addEventListener("click", function (event) {

      event.preventDefault();

      showToast("No new notifications.");

    });

  }


  /* ---------------------------------------------------------
     CLICKABILITY CSS REPAIR
  --------------------------------------------------------- */

  function installClickRepairCSS() {

    if (get("abaClickRepairCSS")) {
      return;
    }

    const style = document.createElement("style");

    style.id = "abaClickRepairCSS";

    style.textContent = `

      /* CLICK REPAIR */

      html,
      body {
        pointer-events: auto !important;
      }

      .app {
        pointer-events: auto !important;
      }

      .sidebar {
        pointer-events: auto !important;
        z-index: 1000 !important;
      }

      .sidebar * {
        pointer-events: auto;
      }

      .main {
        pointer-events: auto !important;
        position: relative;
        z-index: 1;
      }

      .topbar {
        position: sticky;
        z-index: 900;
      }

      .nav-item,
      .mobile-nav button,
      button,
      a,
      input,
      select,
      textarea {
        pointer-events: auto !important;
      }

      .sidebar-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,.35);
        z-index: 950;
        display: none;
        pointer-events: none;
      }

      .sidebar-overlay.show {
        display: block;
        pointer-events: auto;
      }

      .modal-overlay {
        z-index: 5000 !important;
      }

      .modal-overlay:not(.show) {
        display: none !important;
        pointer-events: none !important;
      }

      .modal-overlay.show {
        display: flex !important;
        pointer-events: auto !important;
      }

      .modal-overlay.show * {
        pointer-events: auto;
      }

    `;

    document.head.appendChild(style);

  }


  /* ---------------------------------------------------------
     FORCE INITIAL STATE
  --------------------------------------------------------- */

  function initialize() {

    installClickRepairCSS();

    setupMobileMenu();

    setupModal();

    setupSearch();

    setupNotification();


    /* -------------------------------------------------------
       CLOSE MODAL INITIALLY
    ------------------------------------------------------- */

    const overlay = get("modalOverlay");

    if (overlay) {

      overlay.classList.remove("show");

      overlay.style.display = "none";
      overlay.style.pointerEvents = "none";

    }


    /* -------------------------------------------------------
       MAKE DASHBOARD CLICKABLE INITIALLY
    ------------------------------------------------------- */

    document.querySelectorAll(".page").forEach(function (page) {

      page.style.pointerEvents = "auto";

    });


    /* -------------------------------------------------------
       OPEN DASHBOARD
    ------------------------------------------------------- */

    navigate("dashboardPage");


    console.log(
      "Aung Business Academy click repair initialized successfully."
    );

  }


  /* ---------------------------------------------------------
     START
  --------------------------------------------------------- */

  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initialize
    );

  } else {

    initialize();

  }

})();
