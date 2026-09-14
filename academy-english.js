(function () {
  "use strict";

  /*
   * AUNG BUSINESS ACADEMY
   * BUSINESS ENGLISH 30 LESSONS
   */

  const ENGLISH_LESSONS = [
    "Business English Fundamentals",
    "Introducing Yourself Professionally",
    "Introducing Your Company",
    "Workplace Vocabulary",
    "Daily Business Conversations",
    "Speaking with Customers",
    "Sales English Basics",
    "Sales Presentation English",
    "Product Explanation English",
    "Asking the Right Questions",
    "Handling Customer Questions",
    "Handling Customer Objections",
    "Negotiation English",
    "Price Negotiation English",
    "Closing Sales in English",
    "Customer Service English",
    "Handling Complaints in English",
    "Business Meeting English",
    "Joining a Meeting",
    "Leading a Meeting",
    "Giving a Business Update",
    "Presentation English",
    "Email Writing Basics",
    "Professional Email Structure",
    "Request and Follow-Up Emails",
    "Reporting English",
    "Management Communication English",
    "Interview English",
    "Sales Manager Interview English",
    "Professional Business English Mastery"
  ];

  console.log("================================");
  console.log("🇬🇧 BUSINESS ENGLISH MODULE");
  console.log("English Lessons:", ENGLISH_LESSONS.length);
  console.log("================================");

  function findLessonPage() {
    const selectors = [
      "#page-lessons",
      "#lessons",
      "#lessonPage",
      ".lessons-page",
      ".lessons-content",
      "[data-page='lessons']",
      "main"
    ];

    for (const selector of selectors) {
      const element = document.querySelector(selector);

      if (element) {
        return element;
      }
    }

    return document.body;
  }

  function createEnglishSection() {

    /*
     * Remove only our previous English section.
     * Do NOT touch the existing 230 Business lessons.
     */

    const old =
      document.getElementById(
        "aungBusinessEnglish30"
      );

    if (old) {
      old.remove();
    }

    const page = findLessonPage();

    const section = document.createElement("section");

    section.id = "aungBusinessEnglish30";

    section.style.cssText = `
      width:100%;
      margin:25px 0;
      padding:0;
      font-family:Arial,"Noto Sans Myanmar",sans-serif;
    `;

    section.innerHTML = `
      <div style="
        background:linear-gradient(
          135deg,
          #0f172a 0%,
          #1d4ed8 100%
        );
        color:white;
        border-radius:20px;
        padding:25px;
        margin-bottom:20px;
        box-shadow:0 12px 35px rgba(15,23,42,.18);
      ">

        <div style="
          font-size:13px;
          font-weight:700;
          opacity:.8;
          margin-bottom:8px;
        ">
          AUNG BUSINESS ACADEMY
        </div>

        <h2 style="
          margin:0 0 8px 0;
          font-size:27px;
        ">
          🇬🇧 Business English
        </h2>

        <p style="
          margin:0;
          opacity:.9;
          line-height:1.7;
        ">
          Professional Business English Course
          — 30 Lessons
        </p>

        <div style="
          margin-top:18px;
          display:flex;
          flex-wrap:wrap;
          gap:10px;
        ">

          <span style="
            background:rgba(255,255,255,.15);
            padding:8px 13px;
            border-radius:20px;
            font-size:13px;
          ">
            🇬🇧 30 Lessons
          </span>

          <span style="
            background:rgba(255,255,255,.15);
            padding:8px 13px;
            border-radius:20px;
            font-size:13px;
          ">
            📖 Burmese Explanation
          </span>

          <span style="
            background:rgba(255,255,255,.15);
            padding:8px 13px;
            border-radius:20px;
            font-size:13px;
          ">
            💼 Business Application
          </span>

        </div>

      </div>

      <div style="
        display:grid;
        grid-template-columns:
          repeat(auto-fit,minmax(280px,1fr));
        gap:15px;
      " id="aungEnglishLessonGrid">
      </div>
    `;

    /*
     * Put English module at the TOP of the lesson page.
     */

const careerSection = document.getElementById("careerPersonalLeadership");

if (careerSection) {
  careerSection.insertAdjacentElement("afterend", section);
} else {
  page.appendChild(section);
}

    renderEnglishLessons();

    return section;
  }

  function renderEnglishLessons() {

    const grid =
      document.getElementById(
        "aungEnglishLessonGrid"
      );

    if (!grid) {
      return;
    }

    grid.innerHTML = "";

    ENGLISH_LESSONS.forEach(
      function (title, index) {

        const card =
          document.createElement("div");

        card.style.cssText = `
          background:#ffffff;
          border:1px solid #e2e8f0;
          border-radius:16px;
          padding:18px;
          cursor:pointer;
          transition:all .2s ease;
          box-shadow:
            0 5px 18px rgba(15,23,42,.06);
        `;

        card.innerHTML = `

          <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:12px;
          ">

            <span style="
              font-size:12px;
              font-weight:800;
              color:#2563eb;
            ">
              🇬🇧 ENGLISH
            </span>

            <span style="
              font-size:12px;
              color:#64748b;
            ">
              ${index + 1}/30
            </span>

          </div>

          <div style="
            font-size:12px;
            color:#64748b;
            margin-bottom:7px;
          ">
            Business English Lesson
          </div>

          <h3 style="
            margin:0;
            color:#0f172a;
            font-size:17px;
            line-height:1.5;
          ">
            ${title}
          </h3>

          <div style="
            margin-top:14px;
            color:#2563eb;
            font-size:13px;
            font-weight:700;
          ">
            📖 Start Lesson →
          </div>
        `;

        card.addEventListener(
          "mouseenter",
          function () {
            card.style.transform =
              "translateY(-3px)";
            card.style.boxShadow =
              "0 12px 28px rgba(15,23,42,.12)";
          }
        );

        card.addEventListener(
          "mouseleave",
          function () {
            card.style.transform =
              "translateY(0)";
            card.style.boxShadow =
              "0 5px 18px rgba(15,23,42,.06)";
          }
        );

        card.addEventListener(
          "click",
          function () {
            openEnglishLesson(
              title,
              index + 1
            );
          }
        );

        grid.appendChild(card);
      }
    );
  }

  function openEnglishLesson(
    title,
    number
  ) {

    const existing =
      document.getElementById(
        "aungEnglishModal"
      );

    if (existing) {
      existing.remove();
    }

    const modal =
      document.createElement("div");

    modal.id = "aungEnglishModal";

    modal.style.cssText = `
      position:fixed;
      inset:0;
      z-index:999999;
      background:rgba(15,23,42,.78);
      overflow-y:auto;
      padding:20px;
    `;

    const phrases = [
      [
        "Could you please explain your requirements?",
        "ကျေးဇူးပြု၍ သင့်လိုအပ်ချက်တွေကို ရှင်းပြပေးနိုင်မလား။"
      ],
      [
        "Let me explain the situation clearly.",
        "အခြေအနေကို ရှင်းရှင်းလင်းလင်း ရှင်းပြပေးပါမယ်။"
      ],
      [
        "I would like to discuss the next steps.",
        "နောက်တစ်ဆင့်လုပ်ဆောင်ရမယ့်အရာတွေကို ဆွေးနွေးချင်ပါတယ်။"
      ],
      [
        "Let me check and get back to you.",
        "စစ်ဆေးပြီး ပြန်အကြောင်းပြန်ပါမယ်။"
      ],
      [
        "Thank you for your feedback.",
        "သင့်ရဲ့အကြံပြုချက်အတွက် ကျေးဇူးတင်ပါတယ်။"
      ]
    ];

    const phrase =
      phrases[
        (number - 1) %
        phrases.length
      ];

    modal.innerHTML = `

      <div style="
        max-width:900px;
        margin:0 auto;
        background:white;
        border-radius:20px;
        overflow:hidden;
      ">

        <div style="
          background:linear-gradient(
            135deg,
            #0f172a,
            #1d4ed8
          );
          color:white;
          padding:28px;
        ">

          <div style="
            font-size:13px;
            opacity:.8;
            margin-bottom:8px;
          ">
            🇬🇧 BUSINESS ENGLISH
          </div>

          <h1 style="
            margin:0 0 10px 0;
            font-size:28px;
            line-height:1.4;
          ">
            ${title}
          </h1>

          <div style="opacity:.85;">
            Lesson ${number} / 30
          </div>

        </div>

        <div style="padding:28px;">

          <h2>🎯 Learning Objective</h2>

          <p style="
            line-height:2;
            color:#334155;
          ">
            ဒီ Lesson မှာ
            <b>${title}</b>
            ကို Business Environment မှာ
            Professional English အဖြစ်
            အသုံးပြုနိုင်အောင် လေ့လာပါမယ်။
          </p>

          <hr style="
            border:0;
            border-top:1px solid #e2e8f0;
            margin:25px 0;
          ">

          <h2>📖 Detailed Explanation</h2>

          <p style="
            line-height:2;
            color:#334155;
          ">
            Business English ဆိုတာ English
            စကားလုံးတွေကို အလွတ်ကျက်ရုံမဟုတ်ပါဘူး။
            Customer၊ Manager၊ Team Member၊
            Distributor နဲ့ Professional Business
            Environment တွေမှာ
            ရှင်းလင်းပြီး ယုံကြည်မှုရှိရှိ
            ဆက်သွယ်ပြောဆိုနိုင်ဖို့ ဖြစ်ပါတယ်။
          </p>

          <h2 style="margin-top:28px;">
            💬 Professional English
          </h2>

          <div style="
            background:#eff6ff;
            border-left:5px solid #2563eb;
            padding:20px;
            border-radius:10px;
            margin-top:12px;
          ">

            <div style="
              font-size:18px;
              font-weight:700;
              color:#1d4ed8;
              margin-bottom:10px;
            ">
              ${phrase[0]}
            </div>

            <div style="
              color:#334155;
              line-height:1.8;
            ">
              ${phrase[1]}
            </div>

          </div>

          <h2 style="margin-top:28px;">
            📊 Business Usage
          </h2>

          <table style="
            width:100%;
            border-collapse:collapse;
            margin-top:12px;
          ">

            <tr>
              <th style="
                padding:12px;
                border:1px solid #e2e8f0;
                background:#f1f5f9;
                text-align:left;
              ">
                English
              </th>

              <th style="
                padding:12px;
                border:1px solid #e2e8f0;
                background:#f1f5f9;
                text-align:left;
              ">
                မြန်မာ
              </th>

            </tr>

            <tr>

              <td style="
                padding:12px;
                border:1px solid #e2e8f0;
              ">
                Please give me a moment.
              </td>

              <td style="
                padding:12px;
                border:1px solid #e2e8f0;
              ">
                ခဏလေးစောင့်ပေးပါ။
              </td>

            </tr>

            <tr>

              <td style="
                padding:12px;
                border:1px solid #e2e8f0;
              ">
                Let's discuss the best solution.
              </td>

              <td style="
                padding:12px;
                border:1px solid #e2e8f0;
              ">
                အကောင်းဆုံးဖြေရှင်းချက်ကို
                ဆွေးနွေးကြရအောင်။
              </td>

            </tr>

            <tr>

              <td style="
                padding:12px;
                border:1px solid #e2e8f0;
              ">
                I completely understand your concern.
              </td>

              <td style="
                padding:12px;
                border:1px solid #e2e8f0;
              ">
                သင့်စိုးရိမ်ချက်ကို
                နားလည်ပါတယ်။
              </td>

            </tr>

          </table>

          <h2 style="margin-top:28px;">
            💼 Real Business Application
          </h2>

          <p style="
            line-height:2;
            color:#334155;
          ">
            Customer နဲ့ ဆက်သွယ်တဲ့အခါ
            ရိုရိုသေသေ၊ တိတိကျကျ၊
            နားလည်လွယ်အောင် ပြောဆိုပါ။
            English ကောင်းပြဖို့ထက်
            Business Result ရဖို့ကို
            ဦးစားပေးရပါမယ်။
          </p>

          <h2 style="margin-top:28px;">
            🚀 Practice
          </h2>

          <div style="
            background:#ecfdf5;
            padding:20px;
            border-radius:12px;
            line-height:2;
          ">
            1. ဒီနေ့ Phrase ကို 5 ကြိမ်အသံထွက်ပါ။<br>
            2. ကိုယ်တိုင် Sentence 3 ခုဖန်တီးပါ။<br>
            3. Customer Conversation အဖြစ် Role Play လုပ်ပါ။<br>
            4. မနက်ဖြန်မှာ ပြန်လည်အသုံးချပါ။
          </div>

          <button
            id="closeAungEnglish"
            style="
              width:100%;
              margin-top:25px;
              padding:14px;
              border:0;
              border-radius:12px;
              background:#0f172a;
              color:white;
              font-size:16px;
              font-weight:700;
              cursor:pointer;
            "
          >
            Close Lesson
          </button>

        </div>
      </div>
    `;

    document.body.appendChild(modal);

    document
      .getElementById("closeAungEnglish")
      .addEventListener(
        "click",
        function () {
          modal.remove();
        }
      );

    modal.addEventListener(
      "click",
      function (event) {
        if (event.target === modal) {
          modal.remove();
        }
      }
    );
  }

  function initEnglish() {

    /*
     * Give the existing app time to load.
     */

    setTimeout(
      function () {
        createEnglishSection();
      },
      700
    );

    /*
     * Run again after navigation.
     */

    setTimeout(
      function () {
        createEnglishSection();
      },
      1800
    );

    setTimeout(
      function () {
        createEnglishSection();
      },
      3500
    );
  }

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initEnglish
    );

  } else {

    initEnglish();

  }

  window.AungBusinessEnglish = {
    lessons: ENGLISH_LESSONS,
    total: ENGLISH_LESSONS.length,
    open: openEnglishLesson
  };

})();
