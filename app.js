/* =====================================================
   AUNG BUSINESS ACADEMY
   APP.JS V6
   Stable Click System
===================================================== */

(function () {

  "use strict";


  /* =====================================================
     LESSON DATA
  ===================================================== */

  const lessons = [

    {
      id: 1,
      title: "Business Foundation",
      category: "Business Basics",
      icon: "🚀",
      description:
        "Understand the basic principles of starting and running a business.",

      content: `
        <h2>Business Foundation</h2>

        <p>
          Business တစ်ခုကို စတင်တဲ့အခါ အခြေခံအနေနဲ့
          Customer, Product, Market နဲ့ Money ဆိုတဲ့
          အချက်တွေကို နားလည်ထားဖို့လိုပါတယ်။
        </p>

        <h3>1. Customer</h3>

        <p>
          ဘယ်သူတွေကို ရောင်းမလဲဆိုတာ အရင်ဆုံးသိရပါမယ်။
          Customer ကို မသိဘဲ Product ကို ရောင်းဖို့ခက်ပါတယ်။
        </p>

        <h3>2. Product</h3>

        <p>
          Customer ရဲ့ ပြဿနာကို ဖြေရှင်းပေးနိုင်တဲ့
          Product သို့မဟုတ် Service ဖြစ်ဖို့လိုပါတယ်။
        </p>

        <h3>3. Market</h3>

        <p>
          Market size, competitor နဲ့ customer demand ကို
          လေ့လာရပါမယ်။
        </p>

        <h3>4. Money</h3>

        <p>
          Revenue, Cost, Profit နဲ့ Cash Flow ကို
          စနစ်တကျ စီမံရပါမယ်။
        </p>
      `
    },


    {
      id: 2,
      title: "Finding Your Customer",
      category: "Marketing",
      icon: "🎯",
      description:
        "Learn how to identify and understand your target customer.",

      content: `
        <h2>Finding Your Customer</h2>

        <p>
          Customer ကို ရှာတဲ့အခါ လူတိုင်းကို Target မထားဘဲ
          သင့် Product နဲ့ အကိုက်ညီဆုံး Customer ကို
          သတ်မှတ်ရပါမယ်။
        </p>

        <h3>Target Customer</h3>

        <p>
          အသက်၊ နေရာ၊ ဝင်ငွေ၊ အလုပ်အကိုင်၊ လိုအပ်ချက်နဲ့
          ဝယ်ယူမှုအလေ့အထတွေကို လေ့လာပါ။
        </p>

        <h3>Customer Problem</h3>

        <p>
          Customer ဘာပြဿနာရှိသလဲ သိမှ
          သင့် Product ရဲ့ Value ကို ပြနိုင်မှာဖြစ်ပါတယ်။
        </p>
      `
    },


    {
      id: 3,
      title: "Sales Fundamentals",
      category: "Sales",
      icon: "💰",
      description:
        "Learn the basic principles of professional selling.",

      content: `
        <h2>Sales Fundamentals</h2>

        <p>
          Sales ဆိုတာ Product ကို အတင်းရောင်းတာမဟုတ်ပါဘူး။
          Customer ရဲ့ Need ကို နားလည်ပြီး
          သင့် Solution က ဘယ်လို Value ပေးနိုင်သလဲ
          ပြသပေးတာဖြစ်ပါတယ်။
        </p>

        <h3>Sales Process</h3>

        <p>
          Prospecting → Qualification → Presentation →
          Objection Handling → Closing → Follow-up
        </p>

        <h3>Key Point</h3>

        <p>
          အကောင်းဆုံး Salesperson က စကားအများဆုံးပြောသူမဟုတ်ပါဘူး။
          Customer ကို အကောင်းဆုံးနားထောင်သူ ဖြစ်ပါတယ်။
        </p>
      `
    },


    {
      id: 4,
      title: "Marketing Basics",
      category: "Marketing",
      icon: "📣",
      description:
        "Understand the core concepts of marketing.",

      content: `
        <h2>Marketing Basics</h2>

        <p>
          Marketing ရဲ့ အဓိကရည်ရွယ်ချက်က
          Customer ကို သိအောင်လုပ်ခြင်း၊
          စိတ်ဝင်စားအောင်လုပ်ခြင်းနဲ့
          ဝယ်ယူစေခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>4P Marketing Mix</h3>

        <p>
          Product<br>
          Price<br>
          Place<br>
          Promotion
        </p>
      `
    },


    {
      id: 5,
      title: "Leadership Basics",
      category: "Leadership",
      icon: "👑",
      description:
        "Learn the fundamentals of effective leadership.",

      content: `
        <h2>Leadership Basics</h2>

        <p>
          Leader တစ်ယောက်ရဲ့ အလုပ်က လူတွေကို
          အမိန့်ပေးရုံမဟုတ်ပါဘူး။
          Direction ပေးခြင်း၊ People Development လုပ်ခြင်းနဲ့
          Team ကို Result ရအောင် ဦးဆောင်ခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>Good Leader</h3>

        <p>
          Clear Expectations + Coaching + Accountability +
          Feedback = Strong Team
        </p>
      `
    },


    {
      id: 6,
      title: "Profit & Loss",
      category: "Finance",
      icon: "📊",
      description:
        "Understand revenue, cost and profit.",

      content: `
        <h2>Profit & Loss</h2>

        <p>
          Business ရဲ့ အခြေခံ Formula က
        </p>

        <p>
          <strong>Profit = Revenue - Cost</strong>
        </p>

        <p>
          Revenue တက်တာတစ်ခုတည်းနဲ့ Business အောင်မြင်တာ
          မဟုတ်ပါဘူး။ Cost ကိုလည်း ထိန်းချုပ်နိုင်ဖို့လိုပါတယ်။
        </p>
      `
    },


    {
      id: 7,
      title: "Cash Flow",
      category: "Finance",
      icon: "💵",
      description:
        "Learn why cash flow is critical to business.",

      content: `
        <h2>Cash Flow</h2>

        <p>
          Profit ရှိပေမယ့် Cash မရှိရင် Business လည်ပတ်ဖို့
          ခက်နိုင်ပါတယ်။
        </p>

        <h3>Cash Flow Management</h3>

        <p>
          Receivable, Payable, Inventory နဲ့
          Operating Expenses တွေကို စနစ်တကျစီမံပါ။
        </p>
      `
    },


    {
      id: 8,
      title: "Team Management",
      category: "Management",
      icon: "👥",
      description:
        "Learn how to manage and develop your team.",

      content: `
        <h2>Team Management</h2>

        <p>
          Team Management ရဲ့ အဓိကက
          လူမှန်ကို နေရာမှန်မှာထားပြီး
          Clear KPI နဲ့ Coaching ပေးခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>Manager Responsibilities</h3>

        <p>
          Set expectations<br>
          Monitor performance<br>
          Coach people<br>
          Give feedback<br>
          Build accountability
        </p>
      `
    },


    {
      id: 9,
      title: "Time Management",
      category: "Productivity",
      icon: "⏰",
      description:
        "Learn how to manage your time and priorities.",

      content: `
        <h2>Time Management</h2>

        <p>
          အရေးကြီးတာနဲ့ အရေးပေါ်တာကို ခွဲခြားနိုင်ဖို့လိုပါတယ်။
        </p>

        <h3>Daily Priority</h3>

        <p>
          တစ်နေ့တာအတွက် အရေးကြီးဆုံး 3 ခုကို
          သတ်မှတ်ပြီး အရင်ဆုံးလုပ်ပါ။
        </p>
      `
    },


    {
      id: 10,
      title: "Business Strategy",
      category: "Strategy",
      icon: "🧠",
      description:
        "Learn how to build a practical business strategy.",

      content: `
        <h2>Business Strategy</h2>

        <p>
          Strategy ဆိုတာ ဘာလုပ်မလဲဆိုတာတင်မဟုတ်ဘဲ
          ဘာကို မလုပ်ဘူးဆိုတာကိုပါ ဆုံးဖြတ်ခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>Strategy Questions</h3>

        <p>
          ဘယ် Customer ကို Target လုပ်မလဲ?<br>
          ဘာ Value ပေးမလဲ?<br>
          Competitor ထက် ဘာပိုကောင်းမလဲ?<br>
          ဘယ်လို Profit ရအောင်လုပ်မလဲ?
        </p>
      `
    }

  ];


  /* =====================================================
     STORAGE
  ===================================================== */

  const STORAGE_KEY = "aung_business_academy_completed";


  function getCompleted() {

    try {

      return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

    } catch (error) {

      return [];

    }

  }


  function saveCompleted(list) {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(list)
    );

  }


  /* =====================================================
     DASHBOARD
  ===================================================== */

  function updateDashboard() {

    const lessonCount =
      document.getElementById("lessonCount");

    const progress =
      document.getElementById("progress");

    if (lessonCount) {

      lessonCount.textContent =
        lessons.length;

    }

    if (progress) {

      const completed =
        getCompleted();

      const percentage =
        Math.round(
          (completed.length / lessons.length) * 100
        );

      progress.textContent =
        percentage + "%";

    }

  }


  /* =====================================================
     MODAL
  ===================================================== */

  function closeModal() {

    const modal =
      document.getElementById("abaModal");

    if (modal) {

      modal.remove();

    }

  }


  function showModal(title, body, options = {}) {

    closeModal();

    const modal =
      document.createElement("div");

    modal.id = "abaModal";

    modal.style.cssText = `
      position:fixed;
      inset:0;
      z-index:99999;
      background:rgba(0,0,0,.65);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:20px;
      overflow-y:auto;
    `;


    const box =
      document.createElement("div");

    box.style.cssText = `
      position:relative;
      width:min(760px,100%);
      max-height:90vh;
      overflow-y:auto;
      background:#ffffff;
      border-radius:20px;
      padding:28px;
      box-shadow:0 25px 70px rgba(0,0,0,.3);
      color:#172033;
      font-family:Arial,sans-serif;
    `;


    box.innerHTML = `

      <button
        id="abaClose"
        style="
          position:absolute;
          right:16px;
          top:14px;
          width:38px;
          height:38px;
          border:0;
          border-radius:50%;
          background:#f1f3f7;
          font-size:22px;
          cursor:pointer;
        "
      >
        ×
      </button>

      <div style="padding-right:45px;">

        <h2 style="
          margin:0 0 18px;
          font-size:28px;
          line-height:1.3;
        ">
          ${title}
        </h2>

      </div>

      <div style="
        font-size:16px;
        line-height:1.8;
        overflow-wrap:anywhere;
        word-break:normal;
      ">
        ${body}
      </div>

    `;


    modal.appendChild(box);

    document.body.appendChild(modal);


    document
      .getElementById("abaClose")
      .addEventListener(
        "click",
        closeModal
      );


    modal.addEventListener(
      "click",
      function (event) {

        if (event.target === modal) {

          closeModal();

        }

      }
    );


    document.addEventListener(
      "keydown",
      function escHandler(event) {

        if (event.key === "Escape") {

          closeModal();

          document.removeEventListener(
            "keydown",
            escHandler
          );

        }

      }
    );


    if (options.onReady) {

      options.onReady(box);

    }

  }


  /* =====================================================
     DASHBOARD
  ===================================================== */

  function goDashboard() {

    closeModal();

    const title =
      document.getElementById("pageTitle");

    const subtitle =
      document.getElementById("pageSubtitle");

    if (title) {

      title.textContent =
        "Dashboard";

    }

    if (subtitle) {

      subtitle.textContent =
        "Learn Business. Build Business. Grow Business.";

    }

    updateDashboard();

  }


  /* =====================================================
     LESSONS
  ===================================================== */

  function openLessons() {

    showModal(
      "📚 Business Lessons",
      `
        <p>
          Welcome to Aung Business Academy.
          Choose a lesson below to start learning.
        </p>

        <div style="
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
          gap:14px;
          margin-top:20px;
        ">

          ${lessons.map(function (lesson) {

            const completed =
              getCompleted().includes(lesson.id);

            return `

              <button
                onclick="openLesson(${lesson.id})"
                style="
                  text-align:left;
                  padding:18px;
                  border:1px solid #e5e7eb;
                  border-radius:14px;
                  background:#f8fafc;
                  cursor:pointer;
                  color:#172033;
                "
              >

                <div style="
                  font-size:28px;
                  margin-bottom:8px;
                ">
                  ${lesson.icon}
                </div>

                <strong style="
                  display:block;
                  font-size:17px;
                  margin-bottom:6px;
                ">
                  ${lesson.title}
                </strong>

                <small style="
                  display:block;
                  color:#667085;
                  line-height:1.5;
                ">
                  ${lesson.description}
                </small>

                <div style="
                  margin-top:10px;
                  font-size:13px;
                  font-weight:bold;
                ">
                  ${completed ? "✓ Completed" : "Start Lesson →"}
                </div>

              </button>

            `;

          }).join("")}

        </div>
      `
    );

  }


  function openLesson(id) {

    const lesson =
      lessons.find(function (item) {

        return item.id === id;

      });


    if (!lesson) {

      showToast("Lesson not found.");

      return;

    }


    const completed =
      getCompleted().includes(id);


    showModal(
      `${lesson.icon} ${lesson.title}`,
      `

        <div style="
          color:#667085;
          margin-bottom:18px;
          font-weight:bold;
        ">
          ${lesson.category}
        </div>

        <div>
          ${lesson.content}
        </div>

        <div style="
          margin-top:25px;
          padding-top:20px;
          border-top:1px solid #eee;
        ">

          <button
            onclick="completeLesson(${id})"
            style="
              width:100%;
              padding:14px 18px;
              border:0;
              border-radius:12px;
              background:#111827;
              color:white;
              font-size:16px;
              font-weight:bold;
              cursor:pointer;
            "
          >
            ${completed ? "✓ Lesson Completed" : "Mark as Completed"}
          </button>

        </div>

      `
    );

  }


  function completeLesson(id) {

    const completed =
      getCompleted();


    if (!completed.includes(id)) {

      completed.push(id);

      saveCompleted(completed);

    }


    updateDashboard();

    showToast(
      "Lesson completed successfully! 🎉"
    );


    setTimeout(function () {

      openLessons();

    }, 500);

  }


  /* =====================================================
     CATEGORY
  ===================================================== */

  function openCategory(category) {

    const matching =
      lessons.filter(function (lesson) {

        return lesson.category
          .toLowerCase()
          .includes(category.toLowerCase()) ||
          category
            .toLowerCase()
            .includes(lesson.category.toLowerCase());

      });


    showModal(
      category,
      `

        <p>
          <strong>${category}</strong>
          business learning section.
        </p>

        <p>
          ဒီ Category အတွက် lessons တွေကို
          အောက်မှာ လေ့လာနိုင်ပါတယ်။
        </p>

        ${
          matching.length
            ? matching.map(function (lesson) {

                return `

                  <button
                    onclick="openLesson(${lesson.id})"
                    style="
                      display:block;
                      width:100%;
                      text-align:left;
                      margin:10px 0;
                      padding:16px;
                      border:1px solid #e5e7eb;
                      border-radius:12px;
                      background:#f8fafc;
                      cursor:pointer;
                    "
                  >
                    ${lesson.icon}
                    <strong>
                      ${lesson.title}
                    </strong>
                    →
                  </button>

                `;

              }).join("")
            : `
                <div style="
                  padding:20px;
                  border-radius:12px;
                  background:#f5f6f8;
                ">
                  More lessons coming soon.
                </div>
              `
        }

      `
    );

  }


  /* =====================================================
     BUSINESS TOOLS
  ===================================================== */

  function openTools() {

    showModal(
      "🛠️ Business Tools",
      `

        <p>
          Use these simple tools to understand
          your business numbers.
        </p>

        <div style="
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:15px;
          margin-top:20px;
        ">

          <button
            onclick="profitCalculator()"
            style="
              padding:22px;
              border:1px solid #e5e7eb;
              border-radius:15px;
              background:#f8fafc;
              cursor:pointer;
              text-align:left;
            "
          >
            💰
            <strong style="display:block;margin-top:8px;">
              Profit Calculator
            </strong>
            <small>
              Calculate your business profit.
            </small>
          </button>


          <button
            onclick="pricingCalculator()"
            style="
              padding:22px;
              border:1px solid #e5e7eb;
              border-radius:15px;
              background:#f8fafc;
              cursor:pointer;
              text-align:left;
            "
          >
            🧮
            <strong style="display:block;margin-top:8px;">
              Pricing Calculator
            </strong>
            <small>
              Calculate selling price and margin.
            </small>
          </button>


          <button
            onclick="breakEvenCalculator()"
            style="
              padding:22px;
              border:1px solid #e5e7eb;
              border-radius:15px;
              background:#f8fafc;
              cursor:pointer;
              text-align:left;
            "
          >
            📊
            <strong style="display:block;margin-top:8px;">
              Break-even Calculator
            </strong>
            <small>
              Find your break-even point.
            </small>
          </button>


          <button
            onclick="salesTargetCalculator()"
            style="
              padding:22px;
              border:1px solid #e5e7eb;
              border-radius:15px;
              background:#f8fafc;
              cursor:pointer;
              text-align:left;
            "
          >
            🎯
            <strong style="display:block;margin-top:8px;">
              Sales Target
            </strong>
            <small>
              Plan your sales target.
            </small>
          </button>

        </div>

      `
    );

  }


  /* =====================================================
     PROFIT CALCULATOR
  ===================================================== */

  function profitCalculator() {

    showModal(
      "💰 Profit Calculator",
      `

        <label>Revenue</label>

        <input
          id="calcRevenue"
          type="number"
          placeholder="e.g. 1000000"
          style="
            width:100%;
            padding:13px;
            margin:8px 0 15px;
            border:1px solid #ddd;
            border-radius:10px;
          "
        >

        <label>Total Cost</label>

        <input
          id="calcCost"
          type="number"
          placeholder="e.g. 700000"
          style="
            width:100%;
            padding:13px;
            margin:8px 0 15px;
            border:1px solid #ddd;
            border-radius:10px;
          "
        >

        <button
          onclick="calculateProfit()"
          style="
            width:100%;
            padding:14px;
            border:0;
            border-radius:10px;
            background:#111827;
            color:white;
            font-weight:bold;
            cursor:pointer;
          "
        >
          Calculate Profit
        </button>

        <div
          id="profitResult"
          style="
            margin-top:18px;
            font-size:20px;
            font-weight:bold;
          "
        ></div>

      `
    );

  }


  function calculateProfit() {

    const revenue =
      Number(
        document.getElementById("calcRevenue").value
      ) || 0;


    const cost =
      Number(
        document.getElementById("calcCost").value
      ) || 0;


    const profit =
      revenue - cost;


    const result =
      document.getElementById("profitResult");


    result.innerHTML =
      `Profit: ${profit.toLocaleString()} Ks`;

  }


  /* =====================================================
     PRICING CALCULATOR
  ===================================================== */

  function pricingCalculator() {

    showModal(
      "🧮 Pricing Calculator",
      `

        <label>Product Cost</label>

        <input
          id="priceCost"
          type="number"
          placeholder="e.g. 5000"
          style="
            width:100%;
            padding:13px;
            margin:8px 0 15px;
            border:1px solid #ddd;
            border-radius:10px;
          "
        >

        <label>Desired Profit Margin (%)</label>

        <input
          id="priceMargin"
          type="number"
          placeholder="e.g. 30"
          style="
            width:100%;
            padding:13px;
            margin:8px 0 15px;
            border:1px solid #ddd;
            border-radius:10px;
          "
        >

        <button
          onclick="calculatePrice()"
          style="
            width:100%;
            padding:14px;
            border:0;
            border-radius:10px;
            background:#111827;
            color:white;
            font-weight:bold;
            cursor:pointer;
          "
        >
          Calculate Selling Price
        </button>

        <div
          id="priceResult"
          style="
            margin-top:18px;
            font-size:20px;
            font-weight:bold;
          "
        ></div>

      `
    );

  }


  function calculatePrice() {

    const cost =
      Number(
        document.getElementById("priceCost").value
      ) || 0;


    const margin =
      Number(
        document.getElementById("priceMargin").value
      ) || 0;


    if (margin >= 100) {

      document.getElementById(
        "priceResult"
      ).textContent =
        "Margin must be below 100%.";

      return;

    }


    const price =
      cost / (1 - margin / 100);


    document.getElementById(
      "priceResult"
    ).textContent =
      `Selling Price: ${Math.round(price).toLocaleString()} Ks`;

  }


  /* =====================================================
     BREAK EVEN
  ===================================================== */

  function breakEvenCalculator() {

    showModal(
      "📊 Break-even Calculator",
      `

        <label>Fixed Cost</label>

        <input
          id="fixedCost"
          type="number"
          placeholder="e.g. 500000"
          style="
            width:100%;
            padding:13px;
            margin:8px 0 15px;
            border:1px solid #ddd;
            border-radius:10px;
          "
        >

        <label>Selling Price / Unit</label>

        <input
          id="sellingPrice"
          type="number"
          placeholder="e.g. 10000"
          style="
            width:100%;
            padding:13px;
            margin:8px 0 15px;
            border:1px solid #ddd;
            border-radius:10px;
          "
        >

        <label>Variable Cost / Unit</label>

        <input
          id="variableCost"
          type="number"
          placeholder="e.g. 6000"
          style="
            width:100%;
            padding:13px;
            margin:8px 0 15px;
            border:1px solid #ddd;
            border-radius:10px;
          "
        >

        <button
          onclick="calculateBreakEven()"
          style="
            width:100%;
            padding:14px;
            border:0;
            border-radius:10px;
            background:#111827;
            color:white;
            font-weight:bold;
            cursor:pointer;
          "
        >
          Calculate
        </button>

        <div
          id="breakEvenResult"
          style="
            margin-top:18px;
            font-size:20px;
            font-weight:bold;
          "
        ></div>

      `
    );

  }


  function calculateBreakEven() {

    const fixed =
      Number(
        document.getElementById("fixedCost").value
      ) || 0;


    const selling =
      Number(
        document.getElementById("sellingPrice").value
      ) || 0;


    const variable =
      Number(
        document.getElementById("variableCost").value
      ) || 0;


    const contribution =
      selling - variable;


    const result =
      document.getElementById(
        "breakEvenResult"
      );


    if (contribution <= 0) {

      result.textContent =
        "Selling price must be higher than variable cost.";

      return;

    }


    const units =
      Math.ceil(
        fixed / contribution
      );


    result.textContent =
      `Break-even: ${units.toLocaleString()} units`;

  }


  /* =====================================================
     SALES TARGET
  ===================================================== */

  function salesTargetCalculator() {

    showModal(
      "🎯 Sales Target Calculator",
      `

        <label>Monthly Sales Target</label>

        <input
          id="monthlyTarget"
          type="number"
          placeholder="e.g. 30000000"
          style="
            width:100%;
            padding:13px;
            margin:8px 0 15px;
            border:1px solid #ddd;
            border-radius:10px;
          "
        >

        <label>Working Days</label>

        <input
          id="workingDays"
          type="number"
          placeholder="e.g. 26"
          style="
            width:100%;
            padding:13px;
            margin:8px 0 15px;
            border:1px solid #ddd;
            border-radius:10px;
          "
        >

        <button
          onclick="calculateSalesTarget()"
          style="
            width:100%;
            padding:14px;
            border:0;
            border-radius:10px;
            background:#111827;
            color:white;
            font-weight:bold;
            cursor:pointer;
          "
        >
          Calculate
        </button>

        <div
          id="salesTargetResult"
          style="
            margin-top:18px;
            font-size:20px;
            font-weight:bold;
          "
        ></div>

      `
    );

  }


  function calculateSalesTarget() {

    const target =
      Number(
        document.getElementById("monthlyTarget").value
      ) || 0;


    const days =
      Number(
        document.getElementById("workingDays").value
      ) || 0;


    const result =
      document.getElementById(
        "salesTargetResult"
      );


    if (days <= 0) {

      result.textContent =
        "Please enter valid working days.";

      return;

    }


    const daily =
      target / days;


    result.textContent =
      `Daily Target: ${Math.round(daily).toLocaleString()} Ks`;

  }


  /* =====================================================
     AI BUSINESS COACH
  ===================================================== */

  function openAI() {

    showModal(
      "🤖 AI Business Coach",
      `

        <div style="
          padding:20px;
          background:#f8fafc;
          border-radius:14px;
        ">

          <h3>
            AI Business Coach
          </h3>

          <p>
            AI Business Coach သည် Premium Feature
            အဖြစ် ထည့်သွင်းပေးသွားမည်ဖြစ်ပါတယ်။
          </p>

          <p>
            Future version မှာ Business Strategy,
            Sales, Marketing, Finance နဲ့ Management
            အတွက် AI advice ရရှိနိုင်ပါမယ်။
          </p>

        </div>

        <button
          onclick="openPremium()"
          style="
            margin-top:20px;
            width:100%;
            padding:14px;
            border:0;
            border-radius:10px;
            background:#111827;
            color:white;
            font-weight:bold;
            cursor:pointer;
          "
        >
          👑 View Premium
        </button>

      `
    );

  }


  /* =====================================================
     PREMIUM
  ===================================================== */

  function openPremium() {

    showModal(
      "👑 Premium Academy",
      `

        <div style="
          padding:20px;
          background:#f8fafc;
          border-radius:14px;
        ">

          <h3>
            Premium Academy
          </h3>

          <p>
            Advanced business education and tools
            coming soon.
          </p>

          <ul style="line-height:2;">
            <li>Advanced Business Courses</li>
            <li>Business Templates</li>
            <li>Advanced Calculators</li>
            <li>AI Business Coach</li>
            <li>Business Plan Builder</li>
            <li>Sales & Marketing Tools</li>
          </ul>

        </div>

        <div style="
          margin-top:20px;
          padding:16px;
          background:#fff7ed;
          border-radius:12px;
        ">
          🔒 Subscription system coming soon.
        </div>

      `
    );

  }


  /* =====================================================
     BUSINESS PLAN
  ===================================================== */

  function openBusinessPlan() {

    showModal(
      "📋 Business Plan",
      `

        <p>
          Build your business plan step by step.
        </p>

        <label>Business Name</label>

        <input
          id="businessName"
          placeholder="Enter business name"
          style="
            width:100%;
            padding:13px;
            margin:8px 0 15px;
            border:1px solid #ddd;
            border-radius:10px;
          "
        >

        <label>Product / Service</label>

        <input
          id="businessProduct"
          placeholder="What do you sell?"
          style="
            width:100%;
            padding:13px;
            margin:8px 0 15px;
            border:1px solid #ddd;
            border-radius:10px;
          "
        >

        <label>Target Customer</label>

        <input
          id="businessCustomer"
          placeholder="Who are your customers?"
          style="
            width:100%;
            padding:13px;
            margin:8px 0 15px;
            border:1px solid #ddd;
            border-radius:10px;
          "
        >

        <button
          onclick="generateBusinessPlan()"
          style="
            width:100%;
            padding:14px;
            border:0;
            border-radius:10px;
            background:#111827;
            color:white;
            font-weight:bold;
            cursor:pointer;
          "
        >
          Generate Plan
        </button>

        <div
          id="businessPlanResult"
          style="
            margin-top:20px;
            line-height:1.8;
          "
        ></div>

      `
    );

  }


  function generateBusinessPlan() {

    const name =
      document.getElementById(
        "businessName"
      ).value || "My Business";


    const product =
      document.getElementById(
        "businessProduct"
      ).value || "Product / Service";


    const customer =
      document.getElementById(
        "businessCustomer"
      ).value || "Target Customers";


    document.getElementById(
      "businessPlanResult"
    ).innerHTML = `

      <div style="
        padding:18px;
        background:#f8fafc;
        border-radius:14px;
      ">

        <h3>
          ${name}
        </h3>

        <p>
          <strong>Product:</strong>
          ${product}
        </p>

        <p>
          <strong>Target Customer:</strong>
          ${customer}
        </p>

        <h4>
          90-Day Action Plan
        </h4>

        <ol>
          <li>Validate customer demand.</li>
          <li>Define product and pricing.</li>
          <li>Build sales channels.</li>
          <li>Launch marketing activities.</li>
          <li>Track revenue and profit.</li>
          <li>Improve based on customer feedback.</li>
        </ol>

      </div>

    `;

  }


  /* =====================================================
     PROFILE
  ===================================================== */

  function openProfile() {

    showModal(
      "👤 My Profile",
      `

        <div style="
          text-align:center;
          padding:20px;
        ">

          <div style="
            width:80px;
            height:80px;
            margin:0 auto 15px;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            background:#111827;
            color:white;
            font-size:32px;
            font-weight:bold;
          ">
            A
          </div>

          <h3>
            Aung
          </h3>

          <p>
            Business Learner
          </p>

          <p>
            Completed Lessons:
            <strong>
              ${getCompleted().length}
            </strong>
          </p>

        </div>

      `
    );

  }


  /* =====================================================
     NOTIFICATION
  ===================================================== */

  function showNotification() {

    showModal(
      "🔔 Notifications",
      `

        <div style="
          padding:18px;
          background:#f8fafc;
          border-radius:12px;
        ">

          <strong>
            Welcome to Aung Business Academy!
          </strong>

          <p>
            Start your first business lesson today.
          </p>

        </div>

      `
    );

  }


  /* =====================================================
     LOGOUT
  ===================================================== */

  function logoutUser() {

    const confirmLogout =
      confirm(
        "Are you sure you want to log out?"
      );


    if (confirmLogout) {

      showToast(
        "Logged out successfully."
      );

    }

  }


  /* =====================================================
     TOAST
  ===================================================== */

  function showToast(message) {

    const old =
      document.getElementById("abaToast");

    if (old) {

      old.remove();

    }


    const toast =
      document.createElement("div");

    toast.id = "abaToast";

    toast.textContent =
      message;


    toast.style.cssText = `
      position:fixed;
      left:50%;
      bottom:25px;
      transform:translateX(-50%);
      z-index:100000;
      background:#111827;
      color:white;
      padding:13px 20px;
      border-radius:999px;
      font-size:14px;
      box-shadow:0 10px 30px rgba(0,0,0,.25);
    `;


    document.body.appendChild(toast);


    setTimeout(function () {

      toast.remove();

    }, 2500);

  }


  /* =====================================================
     SIDEBAR
  ===================================================== */

  function toggleMenu(id) {

    const menu =
      document.getElementById(id);


    if (!menu) {

      return;

    }


    menu.classList.toggle("show");

  }


  function toggleSidebar() {

    const sidebar =
      document.querySelector(".sidebar");


    if (!sidebar) {

      return;

    }


    sidebar.classList.toggle(
      "mobile-open"
    );

  }


  /* =====================================================
     MAKE FUNCTIONS PUBLIC
     IMPORTANT FOR HTML ONCLICK
  ===================================================== */

  window.goDashboard =
    goDashboard;

  window.toggleMenu =
    toggleMenu;

  window.toggleSidebar =
    toggleSidebar;

  window.openLessons =
    openLessons;

  window.openLesson =
    openLesson;

  window.completeLesson =
    completeLesson;

  window.openCategory =
    openCategory;

  window.openTools =
    openTools;

  window.profitCalculator =
    profitCalculator;

  window.calculateProfit =
    calculateProfit;

  window.pricingCalculator =
    pricingCalculator;

  window.calculatePrice =
    calculatePrice;

  window.breakEvenCalculator =
    breakEvenCalculator;

  window.calculateBreakEven =
    calculateBreakEven;

  window.salesTargetCalculator =
    salesTargetCalculator;

  window.calculateSalesTarget =
    calculateSalesTarget;

  window.openAI =
    openAI;

  window.openPremium =
    openPremium;

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


  /* =====================================================
     INITIALIZE
  ===================================================== */

  function init() {

    updateDashboard();

    console.log(
      "Aung Business Academy V6 loaded successfully."
    );

  }


  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  } else {

    init();

  }


})();
