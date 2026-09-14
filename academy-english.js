(function () {
  "use strict";

  /*
   * ============================================================
   * AUNG BUSINESS ACADEMY
   * BUSINESS ENGLISH — 30 PROFESSIONAL LESSONS
   * ============================================================
   *
   * This file is independent from app.js.
   * It adds Business English after the existing academy lessons.
   *
   * Total Business English Lessons: 30
   * ============================================================
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

  console.log("========================================");
  console.log("AUNG BUSINESS ACADEMY");
  console.log("BUSINESS ENGLISH MODULE");
  console.log("Business English Lessons:", ENGLISH_LESSONS.length);
  console.log("========================================");


  /*
   * ============================================================
   * FIND LESSON PAGE
   * ============================================================
   */

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


  /*
   * ============================================================
   * BUSINESS ENGLISH SECTION
   * ============================================================
   */

  function createEnglishSection() {

    const oldSection =
      document.getElementById("aungBusinessEnglish30");

    if (oldSection) {
      oldSection.remove();
    }

    const page = findLessonPage();

    const section = document.createElement("section");

    section.id = "aungBusinessEnglish30";

    section.style.cssText = `
      width:100%;
      margin:40px 0 30px 0;
      padding:0;
      font-family:
        Arial,
        "Noto Sans Myanmar",
        sans-serif;
    `;


    /*
     * ========================================================
     * HEADER
     * ========================================================
     */

    section.innerHTML = `

      <div style="
        background:
          linear-gradient(
            135deg,
            #0f172a 0%,
            #1d4ed8 100%
          );

        color:white;
        border-radius:22px;
        padding:30px;

        margin-bottom:22px;

        box-shadow:
          0 14px 40px
          rgba(15,23,42,.18);
      ">

        <div style="
          font-size:13px;
          font-weight:800;
          letter-spacing:.5px;
          opacity:.78;
          margin-bottom:10px;
        ">
          AUNG BUSINESS ACADEMY
        </div>


        <h2 style="
          margin:0 0 10px 0;
          font-size:30px;
          line-height:1.35;
        ">
          Business English
        </h2>


        <p style="
          margin:0;
          opacity:.92;
          line-height:1.8;
          font-size:15px;
        ">
          Professional Business English Course
          — 30 Lessons
        </p>


        <div style="
          margin-top:20px;

          display:flex;
          flex-wrap:wrap;

          gap:10px;
        ">

          <span style="
            background:
              rgba(255,255,255,.14);

            padding:
              9px 14px;

            border-radius:20px;

            font-size:13px;

            font-weight:700;
          ">
            30 Lessons
          </span>


          <span style="
            background:
              rgba(255,255,255,.14);

            padding:
              9px 14px;

            border-radius:20px;

            font-size:13px;

            font-weight:700;
          ">
            Burmese Explanation
          </span>


          <span style="
            background:
              rgba(255,255,255,.14);

            padding:
              9px 14px;

            border-radius:20px;

            font-size:13px;

            font-weight:700;
          ">
            Business Application
          </span>


          <span style="
            background:
              rgba(255,255,255,.14);

            padding:
              9px 14px;

            border-radius:20px;

            font-size:13px;

            font-weight:700;
          ">
            Practical English
          </span>

        </div>

      </div>


      <div
        id="aungEnglishLessonGrid"
        style="
          display:grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(280px,1fr)
            );

          gap:16px;
        "
      >
      </div>

    `;


    /*
     * ========================================================
     * PUT BUSINESS ENGLISH AT THE BOTTOM
     * ========================================================
     */

    const careerSection =
      document.getElementById(
        "careerPersonalLeadership"
      );


    if (careerSection) {

      careerSection.insertAdjacentElement(
        "afterend",
        section
      );

    } else {

      page.appendChild(section);

    }


    renderEnglishLessons();

    return section;
  }


  /*
   * ============================================================
   * RENDER 30 LESSONS
   * ============================================================
   */

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

          border:
            1px solid #e2e8f0;

          border-radius:18px;

          padding:20px;

          cursor:pointer;

          transition:
            transform .2s ease,
            box-shadow .2s ease,
            border-color .2s ease;

          box-shadow:
            0 6px 20px
            rgba(15,23,42,.06);
        `;


        card.innerHTML = `

          <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;

            margin-bottom:14px;
          ">

            <span style="
              font-size:11px;
              font-weight:900;

              color:#2563eb;

              letter-spacing:.5px;
            ">
              ENGLISH
            </span>


            <span style="
              font-size:12px;
              color:#64748b;

              font-weight:700;
            ">
              ${index + 1}/30
            </span>

          </div>


          <div style="
            font-size:12px;
            color:#64748b;

            margin-bottom:8px;
          ">
            Business English Lesson
          </div>


          <h3 style="
            margin:0;

            color:#0f172a;

            font-size:17px;

            line-height:1.55;
          ">
            ${title}
          </h3>


          <div style="
            margin-top:16px;

            color:#2563eb;

            font-size:13px;

            font-weight:800;
          ">
            Start Lesson →
          </div>

        `;


        /*
         * HOVER EFFECT
         */

        card.addEventListener(
          "mouseenter",
          function () {

            card.style.transform =
              "translateY(-4px)";

            card.style.boxShadow =
              "0 14px 30px rgba(15,23,42,.12)";

            card.style.borderColor =
              "#93c5fd";
          }
        );


        card.addEventListener(
          "mouseleave",
          function () {

            card.style.transform =
              "translateY(0)";

            card.style.boxShadow =
              "0 6px 20px rgba(15,23,42,.06)";

            card.style.borderColor =
              "#e2e8f0";
          }
        );


        /*
         * OPEN LESSON
         */

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


  /*
   * ============================================================
   * ENGLISH CONTENT
   * ============================================================
   */

  function getEnglishContent(
    title,
    number
  ) {

    const content = {

      objective:
        `ဒီသင်ခန်းစာမှာ "${title}" ကို
        Business Environment ထဲမှာ
        Professional English အဖြစ်
        အသုံးချနိုင်အောင် လေ့လာပါမယ်။`,

      explanation:
        `Business English ဆိုတာ English
        Grammar နဲ့ Vocabulary ကို
        အလွတ်ကျက်ထားရုံနဲ့ မပြီးပါဘူး။

        Customer၊ Manager၊ Team Member၊
        Distributor၊ Supplier၊ Partner နဲ့
        Professional Business Environment
        တွေမှာ ကိုယ့်ရဲ့အကြောင်းအရာကို
        ရှင်းလင်းပြီး ယုံကြည်မှုရှိရှိ
        ပြောဆိုနိုင်ဖို့ ဖြစ်ပါတယ်။

        Business Communication မှာ
        အရေးကြီးဆုံးအချက်က English
        အရမ်းခက်ခဲတဲ့ စကားလုံးတွေ
        အသုံးပြုနိုင်ခြင်း မဟုတ်ပါဘူး။

        ကိုယ်ပြောချင်တဲ့အကြောင်းအရာကို
        ရိုးရှင်း၊ တိကျ၊ ယဉ်ကျေးပြီး
        Business Result ရအောင်
        ဆက်သွယ်နိုင်ခြင်း ဖြစ်ပါတယ်။

        Manager တစ်ယောက်အနေနဲ့
        Customer Meeting၊ Sales Meeting၊
        Team Coaching၊ Negotiation၊
        Presentation နဲ့ Reporting တွေမှာ
        Professional Communication Skill
        က အရေးကြီးတဲ့ Leadership Skill
        တစ်ခုဖြစ်ပါတယ်။`,

      practice:
        `ဒီ Lesson ကို လေ့လာပြီးနောက်
        ကိုယ်တိုင်အသံထွက်ပြီး
        အနည်းဆုံး 5 ကြိမ် လေ့ကျင့်ပါ။

        ပြီးရင် ကိုယ့်လုပ်ငန်းနဲ့သက်ဆိုင်တဲ့
        Sentence 3 ကြောင်းကို
        ကိုယ်တိုင်ဖန်တီးပါ။

        နောက်ဆုံး Customer သို့မဟုတ်
        Manager တစ်ယောက်နဲ့
        ပြောဆိုနေသလို Role Play
        လုပ်ကြည့်ပါ။`,

      application:
        `လုပ်ငန်းခွင်မှာ English ကို
        အသုံးချတဲ့အခါ Translation ကို
        စကားလုံးတိုင်း တိုက်ရိုက်ပြန်မလုပ်ဘဲ
        Business Meaning ကို ဦးစားပေးပါ။

        Customer ကို မရှင်းလင်းတဲ့
        အကြောင်းအရာတစ်ခုကို ရှင်းပြတဲ့အခါ
        အရင်ဆုံး Situation ကို
        သတ်မှတ်ပါ။

        ပြီးရင် Problem ကို ပြောပါ။

        နောက်ဆုံး Solution သို့မဟုတ်
        Next Step ကို ရှင်းပြပါ။

        ဒီလို Structure နဲ့ပြောရင်
        Professional Communication
        ပိုပြီး ထိရောက်လာပါမယ်။`

    };


    /*
     * SPECIAL CONTENT BY LESSON
     */

    const special = [

      [
        "Could you please explain your requirements?",
        "ကျေးဇူးပြု၍ သင့်လိုအပ်ချက်တွေကို ရှင်းပြပေးနိုင်မလား။"
      ],

      [
        "Let me introduce myself.",
        "ကျွန်တော်/ကျွန်မကိုယ်တိုင် မိတ်ဆက်ပေးပါရစေ။"
      ],

      [
        "Let me briefly introduce our company.",
        "ကျွန်တော်တို့ Company အကြောင်း အကျဉ်းချုပ် မိတ်ဆက်ပေးပါရစေ။"
      ],

      [
        "Could you please give me a moment?",
        "ကျေးဇူးပြု၍ ခဏလေး စောင့်ပေးနိုင်မလား။"
      ],

      [
        "Let's discuss the situation.",
        "အခြေအနေကို ဆွေးနွေးကြရအောင်။"
      ],

      [
        "How can I help you today?",
        "ဒီနေ့ ဘယ်လိုကူညီပေးရမလဲ။"
      ],

      [
        "Let me explain our sales proposal.",
        "ကျွန်တော်တို့ရဲ့ Sales Proposal ကို ရှင်းပြပေးပါရစေ။"
      ],

      [
        "Let me walk you through the presentation.",
        "Presentation ကို အဆင့်ဆင့် ရှင်းပြပေးပါရစေ။"
      ],

      [
        "Let me explain the key benefits of this product.",
        "ဒီ Product ရဲ့ အဓိကအကျိုးကျေးဇူးတွေကို ရှင်းပြပေးပါရစေ။"
      ],

      [
        "Could you tell me more about your needs?",
        "သင့်လိုအပ်ချက်တွေအကြောင်း နည်းနည်းပိုပြောပြပေးနိုင်မလား။"
      ],

      [
        "I completely understand your question.",
        "သင့်မေးခွန်းကို အပြည့်အဝ နားလည်ပါတယ်။"
      ],

      [
        "I understand your concern.",
        "သင့်ရဲ့ စိုးရိမ်ချက်ကို နားလည်ပါတယ်။"
      ],

      [
        "Let's find a solution that works for both sides.",
        "နှစ်ဖက်စလုံးအတွက် အဆင်ပြေမယ့် ဖြေရှင်းချက်ကို ရှာကြရအောင်။"
      ],

      [
        "Is there any flexibility on the price?",
        "စျေးနှုန်းမှာ အပြောင်းအလဲလုပ်နိုင်တဲ့ အတိုင်းအတာ ရှိပါသလား။"
      ],

      [
        "Are we ready to move forward?",
        "ရှေ့ဆက်လုပ်ဆောင်ဖို့ အဆင်သင့်ဖြစ်ပြီလား။"
      ],

      [
        "Thank you for choosing our company.",
        "ကျွန်တော်တို့ Company ကို ရွေးချယ်ပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ်။"
      ],

      [
        "I apologize for the inconvenience.",
        "အဆင်မပြေမှုအတွက် တောင်းပန်ပါတယ်။"
      ],

      [
        "Let's start the meeting.",
        "Meeting ကို စတင်ကြရအောင်။"
      ],

      [
        "Thank you for joining the meeting.",
        "Meeting ကို တက်ရောက်ပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ်။"
      ],

      [
        "I'd like to start with the main topic.",
        "အဓိကအကြောင်းအရာနဲ့ စတင်ချင်ပါတယ်။"
      ],

      [
        "Let me give you a quick update.",
        "လက်ရှိအခြေအနေကို အကျဉ်းချုပ် Update ပေးပါရစေ။"
      ],

      [
        "Let me explain the key points.",
        "အဓိကအချက်တွေကို ရှင်းပြပေးပါရစေ။"
      ],

      [
        "I would like to follow up on our previous discussion.",
        "အရင်ဆွေးနွေးခဲ့တဲ့အကြောင်းအရာကို Follow Up လုပ်ချင်ပါတယ်။"
      ],

      [
        "Please find the details below.",
        "အသေးစိတ်အချက်အလက်တွေကို အောက်မှာ ကြည့်ရှုနိုင်ပါတယ်။"
      ],

      [
        "I am writing to follow up on our discussion.",
        "ကျွန်တော်တို့ ဆွေးနွေးခဲ့တာကို Follow Up လုပ်ဖို့ ဒီ Email ကို ရေးပို့တာဖြစ်ပါတယ်။"
      ],

      [
        "Here is the latest sales report.",
        "ဒါက လက်ရှိနောက်ဆုံး Sales Report ဖြစ်ပါတယ်။"
      ],

      [
        "Let me clarify the situation.",
        "အခြေအနေကို ရှင်းလင်းပြောပြပါရစေ။"
      ],

      [
        "Thank you for the opportunity.",
        "အခွင့်အရေးပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ်။"
      ],

      [
        "I have experience leading sales teams.",
        "Sales Team တွေကို ဦးဆောင်တဲ့ အတွေ့အကြုံရှိပါတယ်။"
      ],

      [
        "Effective communication creates better business results.",
        "ထိရောက်တဲ့ Communication က ပိုကောင်းတဲ့ Business Result တွေကို ဖန်တီးပေးပါတယ်။"
      ]

    ];


    const phrase =
      special[number - 1];


    return {
      ...content,
      english: phrase[0],
      myanmar: phrase[1]
    };

  }


  /*
   * ============================================================
   * OPEN LESSON MODAL
   * ============================================================
   */

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


    const data =
      getEnglishContent(
        title,
        number
      );


    const modal =
      document.createElement("div");

    modal.id =
      "aungEnglishModal";


    modal.style.cssText = `
      position:fixed;

      inset:0;

      z-index:999999;

      background:
        rgba(15,23,42,.82);

      overflow-y:auto;

      padding:20px;

      font-family:
        Arial,
        "Noto Sans Myanmar",
        sans-serif;
    `;


    modal.innerHTML = `

      <div style="
        max-width:950px;

        margin:0 auto;

        background:#ffffff;

        border-radius:22px;

        overflow:hidden;

        box-shadow:
          0 30px 80px
          rgba(0,0,0,.28);
      ">


        <!-- HEADER -->

        <div style="
          background:
            linear-gradient(
              135deg,
              #0f172a,
              #1d4ed8
            );

          color:white;

          padding:32px;
        ">

          <div style="
            font-size:12px;

            font-weight:800;

            letter-spacing:.6px;

            opacity:.78;

            margin-bottom:10px;
          ">
            BUSINESS ENGLISH
          </div>


          <h1 style="
            margin:0 0 12px 0;

            font-size:30px;

            line-height:1.45;
          ">
            ${title}
          </h1>


          <div style="
            font-size:14px;

            opacity:.86;
          ">
            Lesson ${number} / 30
          </div>

        </div>


        <!-- BODY -->

        <div style="
          padding:32px;
        ">


          <!-- OBJECTIVE -->

          <section>

            <h2 style="
              margin:0 0 14px 0;

              color:#0f172a;

              font-size:22px;
            ">
              Learning Objective
            </h2>


            <div style="
              background:#eff6ff;

              border-left:
                5px solid #2563eb;

              padding:18px;

              border-radius:10px;

              color:#334155;

              line-height:2;
            ">
              ${data.objective}
            </div>

          </section>


          <!-- EXPLANATION -->

          <section style="
            margin-top:30px;
          ">

            <h2 style="
              margin:0 0 14px 0;

              color:#0f172a;

              font-size:22px;
            ">
              Detailed Explanation
            </h2>


            <div style="
              color:#334155;

              line-height:2.05;

              font-size:15px;

              white-space:pre-line;
            ">
              ${data.explanation}
            </div>

          </section>


          <!-- PROFESSIONAL PHRASE -->

          <section style="
            margin-top:30px;
          ">

            <h2 style="
              margin:0 0 14px 0;

              color:#0f172a;

              font-size:22px;
            ">
              Professional English
            </h2>


            <div style="
              background:#f8fafc;

              border:
                1px solid #e2e8f0;

              border-radius:16px;

              padding:22px;
            ">

              <div style="
                font-size:20px;

                font-weight:800;

                color:#1d4ed8;

                line-height:1.6;

                margin-bottom:12px;
              ">
                ${data.english}
              </div>


              <div style="
                color:#334155;

                line-height:1.8;

                font-size:15px;
              ">
                ${data.myanmar}
              </div>

            </div>

          </section>


          <!-- BUSINESS USAGE TABLE -->

          <section style="
            margin-top:30px;
          ">

            <h2 style="
              margin:0 0 14px 0;

              color:#0f172a;

              font-size:22px;
            ">
              Business Usage
            </h2>


            <div style="
              overflow-x:auto;
            ">

              <table style="
                width:100%;

                border-collapse:
                  collapse;

                min-width:600px;
              ">

                <thead>

                  <tr>

                    <th style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;

                      background:#f1f5f9;

                      text-align:left;
                    ">
                      Business Situation
                    </th>


                    <th style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;

                      background:#f1f5f9;

                      text-align:left;
                    ">
                      Professional English
                    </th>


                    <th style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;

                      background:#f1f5f9;

                      text-align:left;
                    ">
                      မြန်မာအဓိပ္ပါယ်
                    </th>

                  </tr>

                </thead>


                <tbody>

                  <tr>

                    <td style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;
                    ">
                      Customer Discussion
                    </td>

                    <td style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;
                    ">
                      Could you please explain your requirements?
                    </td>

                    <td style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;
                    ">
                      သင့်လိုအပ်ချက်တွေကို
                      ရှင်းပြပေးနိုင်မလား။
                    </td>

                  </tr>


                  <tr>

                    <td style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;
                    ">
                      Meeting
                    </td>

                    <td style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;
                    ">
                      Let's discuss the best solution.
                    </td>

                    <td style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;
                    ">
                      အကောင်းဆုံးဖြေရှင်းချက်ကို
                      ဆွေးနွေးကြရအောင်။
                    </td>

                  </tr>


                  <tr>

                    <td style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;
                    ">
                      Customer Concern
                    </td>

                    <td style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;
                    ">
                      I completely understand your concern.
                    </td>

                    <td style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;
                    ">
                      သင့်စိုးရိမ်ချက်ကို
                      နားလည်ပါတယ်။
                    </td>

                  </tr>


                  <tr>

                    <td style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;
                    ">
                      Follow Up
                    </td>

                    <td style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;
                    ">
                      Let me check and get back to you.
                    </td>

                    <td style="
                      padding:14px;

                      border:
                        1px solid #e2e8f0;
                    ">
                      စစ်ဆေးပြီး
                      ပြန်အကြောင်းပြန်ပါမယ်။
                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </section>


          <!-- BUSINESS APPLICATION -->

          <section style="
            margin-top:30px;
          ">

            <h2 style="
              margin:0 0 14px 0;

              color:#0f172a;

              font-size:22px;
            ">
              Real Business Application
            </h2>


            <div style="
              background:#ecfdf5;

              border:
                1px solid #bbf7d0;

              border-radius:16px;

              padding:22px;

              color:#166534;

              line-height:2;

              white-space:pre-line;
            ">
              ${data.application}
            </div>

          </section>


          <!-- ROLE PLAY -->

          <section style="
            margin-top:30px;
          ">

            <h2 style="
              margin:0 0 14px 0;

              color:#0f172a;

              font-size:22px;
            ">
              Role Play Practice
            </h2>


            <div style="
              background:#fff7ed;

              border:
                1px solid #fed7aa;

              border-radius:16px;

              padding:22px;

              line-height:2;
            ">

              <strong>
                Manager:
              </strong>

              Please explain the current situation.

              <br><br>

              <strong>
                You:
              </strong>

              ${data.english}

              <br><br>

              <strong>
                Manager:
              </strong>

              What should we do next?

              <br><br>

              <strong>
                You:
              </strong>

              Let's discuss the best solution
              and agree on the next steps.

            </div>

          </section>


          <!-- PRACTICE -->

          <section style="
            margin-top:30px;
          ">

            <h2 style="
              margin:0 0 14px 0;

              color:#0f172a;

              font-size:22px;
            ">
              Practical Exercise
            </h2>


            <div style="
              background:#f8fafc;

              border:
                1px solid #e2e8f0;

              border-radius:16px;

              padding:22px;

              line-height:2;

              color:#334155;
            ">
              ${data.practice}
            </div>

          </section>


          <!-- KNOWLEDGE CHECK -->

          <section style="
            margin-top:30px;
          ">

            <h2 style="
              margin:0 0 14px 0;

              color:#0f172a;

              font-size:22px;
            ">
              Knowledge Check
            </h2>


            <div style="
              background:#fefce8;

              border:
                1px solid #fde68a;

              border-radius:16px;

              padding:22px;

              line-height:2;
            ">

              <strong>
                Question 1:
              </strong>

              Business English မှာ
              အရေးကြီးဆုံးအရာက ဘာလဲ?

              <br>

              <strong>
                Answer:
              </strong>

              ရှင်းလင်း၊ တိကျ၊ ယဉ်ကျေးပြီး
              Business Result ရအောင်
              Communication ပြုလုပ်နိုင်ခြင်း ဖြစ်ပါတယ်။

              <br><br>

              <strong>
                Question 2:
              </strong>

              Customer နဲ့ ပြောတဲ့အခါ
              ဘာကို ဦးစားပေးသင့်သလဲ?

              <br>

              <strong>
                Answer:
              </strong>

              Customer ရဲ့ လိုအပ်ချက်နဲ့
              Business Solution ကို
              ဦးစားပေးသင့်ပါတယ်။

            </div>

          </section>


          <!-- REFLECTION -->

          <section style="
            margin-top:30px;
          ">

            <h2 style="
              margin:0 0 14px 0;

              color:#0f172a;

              font-size:22px;
            ">
              Manager Reflection
            </h2>


            <div style="
              background:#eef2ff;

              border:
                1px solid #c7d2fe;

              border-radius:16px;

              padding:22px;

              line-height:2;

              color:#3730a3;
            ">

              ဒီနေ့အလုပ်မှာ
              ဒီ English Phrase ကို
              ဘယ်နေရာမှာ အသုံးပြုနိုင်မလဲ?

              <br><br>

              Customer Meeting လား?

              <br>

              Team Meeting လား?

              <br>

              Manager Communication လား?

              <br>

              Sales Negotiation လား?

              <br><br>

              ကိုယ့်ရဲ့ လက်ရှိအလုပ်နဲ့
              ပြန်ချိတ်ဆက်ပြီး စဉ်းစားပါ။

            </div>

          </section>


          <!-- SUMMARY -->

          <section style="
            margin-top:30px;
          ">

            <h2 style="
              margin:0 0 14px 0;

              color:#0f172a;

              font-size:22px;
            ">
              Lesson Summary
            </h2>


            <div style="
              background:#0f172a;

              color:white;

              border-radius:16px;

              padding:24px;

              line-height:2;
            ">

              Business English ကို
              အလွတ်ကျက်ရုံနဲ့ မလုံလောက်ပါဘူး။

              <br><br>

              နားလည်ရမယ်။

              <br>

              အသံထွက်ရမယ်။

              <br>

              Sentence ဖန်တီးရမယ်။

              <br>

              Role Play လုပ်ရမယ်။

              <br>

              လုပ်ငန်းခွင်မှာ အသုံးချရမယ်။

              <br><br>

              ဒီလို Learn → Practice →
              Apply လုပ်မှ Business English
              Skill တစ်ခုအဖြစ် တိုးတက်လာမှာ ဖြစ်ပါတယ်။

            </div>

          </section>


          <!-- CLOSE -->

          <button
            id="closeAungEnglish"
            style="
              width:100%;

              margin-top:30px;

              padding:16px;

              border:0;

              border-radius:14px;

              background:#0f172a;

              color:white;

              font-size:16px;

              font-weight:800;

              cursor:pointer;
            "
          >
            Close Lesson
          </button>


        </div>

      </div>

    `;


    document.body.appendChild(modal);


    /*
     * CLOSE BUTTON
     */

    const closeButton =
      document.getElementById(
        "closeAungEnglish"
      );


    if (closeButton) {

      closeButton.addEventListener(
        "click",
        function () {

          modal.remove();

        }
      );

    }


    /*
     * CLOSE WHEN CLICK OUTSIDE
     */

    modal.addEventListener(
      "click",
      function (event) {

        if (
          event.target === modal
        ) {

          modal.remove();

        }

      }
    );


    /*
     * ESC KEY
     */

    document.addEventListener(
      "keydown",
      function escHandler(event) {

        if (
          event.key === "Escape"
        ) {

          modal.remove();

          document.removeEventListener(
            "keydown",
            escHandler
          );

        }

      }
    );

  }


  /*
   * ============================================================
   * INITIALIZE
   * ============================================================
   */

  function initEnglish() {

    /*
     * Multiple attempts are intentional.
     * The main academy app may render its
     * Lessons page after this script loads.
     */

    setTimeout(
      function () {
        createEnglishSection();
      },
      700
    );


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


  /*
   * ============================================================
   * START
   * ============================================================
   */

  if (
    document.readyState === "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      initEnglish
    );

  } else {

    initEnglish();

  }


  /*
   * ============================================================
   * PUBLIC API
   * ============================================================
   */

  window.AungBusinessEnglish = {

    lessons:
      ENGLISH_LESSONS,

    total:
      ENGLISH_LESSONS.length,

    open:
      openEnglishLesson

  };


})();
