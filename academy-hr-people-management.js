/* =========================================================
   AUNG BUSINESS ACADEMY
   HR & PEOPLE MANAGEMENT COURSE
   Burmese Professional Lessons
   ========================================================= */

(function () {
  "use strict";

  const HR_COURSE = {
    id: "hr-people-management",
    category: "HR",
    icon: "👥",
    title: "HR & People Management",
    burmeseTitle: "HR နှင့် လူအင်အားစီမံခန့်ခွဲမှု",
    description:
      "လူမှန်နေရာမှန် ခန့်ထားခြင်း၊ Performance Management၊ Coaching၊ Motivation၊ Training နှင့် Employee Development ကို စနစ်တကျ စီမံခန့်ခွဲနိုင်ရန်။"
  };

  const HR_LESSONS = [

    {
      id: "hr-01",
      title: "Lesson 01 — HR Fundamentals | HR အခြေခံ",

      objective: `
        HR Management ရဲ့ အဓိကတာဝန်များ၊ People Management နဲ့
        Business Performance တို့ရဲ့ ဆက်စပ်မှုကို နားလည်နိုင်ရန်။
      `,

      content: `
        <h2>👥 HR Management ဆိုတာဘာလဲ</h2>

        <p>
          HR Management ဆိုတာ Company ရဲ့ လူအင်အားကို
          ရွေးချယ်ခြင်း၊ ခန့်ထားခြင်း၊ လေ့ကျင့်ပေးခြင်း၊
          Performance တိုင်းတာခြင်း၊ Motivation ပေးခြင်းနှင့်
          တိုးတက်အောင်လုပ်ပေးခြင်းတို့ကို စနစ်တကျ စီမံခန့်ခွဲခြင်းဖြစ်ပါတယ်။
        </p>

        <h3>HR ရဲ့ အဓိကတာဝန်များ</h3>

        <ul>
          <li>Workforce Planning</li>
          <li>Recruitment & Selection</li>
          <li>Onboarding</li>
          <li>Training & Development</li>
          <li>Performance Management</li>
          <li>Employee Engagement</li>
          <li>Compensation & Benefits</li>
          <li>Employee Relations</li>
        </ul>

        <h3>People = Business Asset</h3>

        <p>
          Product ကောင်း၊ System ကောင်း၊ Budget ကောင်းရှိပေမယ့်
          လူတွေက Performance မကောင်းရင် Business Result ကောင်းဖို့
          ခက်ခဲပါတယ်။
        </p>

        <h3>Manager Thinking</h3>

        <p>
          Manager တစ်ယောက်ရဲ့ အလုပ်က လူတွေကို အလုပ်လုပ်ခိုင်းရုံမဟုတ်ပါဘူး။
          သူတို့ရဲ့ Capability ကို မြှင့်တင်ပြီး Business Result ရအောင်
          ဦးဆောင်ပေးရတာဖြစ်ပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Team ထဲမှာ လူတစ်ယောက်ချင်းစီရဲ့
        Strength ၁ ခု၊ Development Area ၁ ခုကို ရေးပါ။
      `,

      quiz: `
        HR Management ရဲ့ အဓိကရည်ရွယ်ချက်က ဘာလဲ?<br><br>
        <strong>
        လူအင်အားကို မှန်ကန်စွာ စီမံခန့်ခွဲပြီး
        Business Performance တိုးတက်စေရန် ဖြစ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "hr-02",
      title: "Lesson 02 — Workforce Planning & Organization | လူအင်အားစီမံကိန်း",

      objective: `
        Business Objective အပေါ်မူတည်ပြီး လိုအပ်တဲ့
        လူအင်အားအရေအတွက်၊ ကျွမ်းကျင်မှုနှင့် Role များကို
        ကြိုတင်စီမံနိုင်ရန်။
      `,

      content: `
        <h2>📋 Workforce Planning</h2>

        <p>
          Workforce Planning ဆိုတာ Business ရဲ့ လက်ရှိနဲ့
          အနာဂတ်လိုအပ်ချက်အတွက် လူဘယ်နှစ်ယောက်လိုမလဲ၊
          ဘယ် Skill တွေလိုမလဲဆိုတာ ကြိုတင်စီမံခြင်းဖြစ်ပါတယ်။
        </p>

        <h3>စဉ်းစားရမယ့်အချက်များ</h3>

        <ul>
          <li>Business Growth</li>
          <li>Sales Target</li>
          <li>New Branch / Territory</li>
          <li>Workload</li>
          <li>Employee Turnover</li>
          <li>Required Skills</li>
        </ul>

        <h3>ဥပမာ</h3>

        <p>
          Sales Territory ၅ ခုကနေ ၈ ခုအထိ တိုးချဲ့မယ်ဆိုရင်
          Sales Team အရေအတွက်၊ Supervisor အရေအတွက်၊
          Support Staff လိုအပ်ချက်တွေကို ကြိုတင်တွက်ချက်ရပါမယ်။
        </p>

        <h3>Right Person + Right Role</h3>

        <p>
          လူအရေအတွက်များတာထက် Role နဲ့ Capability ကိုက်ညီတာက
          ပိုအရေးကြီးပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Business Team ရဲ့ လက်ရှိ လူအင်အားနဲ့
        လာမယ့် ၁ နှစ်အတွင်း လိုအပ်နိုင်တဲ့ လူအင်အားကို နှိုင်းယှဉ်ပါ။
      `,

      quiz: `
        Workforce Planning က ဘာအတွက်လဲ?<br><br>
        <strong>
        Business ရဲ့ လက်ရှိနဲ့ အနာဂတ်လူအင်အားလိုအပ်ချက်ကို
        ကြိုတင်စီမံရန် ဖြစ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "hr-03",
      title: "Lesson 03 — Recruitment & Selection | ဝန်ထမ်းရွေးချယ်ခြင်း",

      objective: `
        Job Requirement သတ်မှတ်ခြင်း၊ Candidate ရှာဖွေခြင်း၊
        Interview နှင့် Selection ကို စနစ်တကျ ပြုလုပ်နိုင်ရန်။
      `,

      content: `
        <h2>🔎 Recruitment & Selection</h2>

        <p>
          Recruitment ဆိုတာ လိုအပ်တဲ့ Candidate တွေကို ရှာဖွေခြင်းဖြစ်ပြီး
          Selection ဆိုတာ အကောင်းဆုံးကိုက်ညီတဲ့ Candidate ကို
          ရွေးချယ်ခြင်းဖြစ်ပါတယ်။
        </p>

        <h3>Step 1 — Job Description</h3>

        <ul>
          <li>Job Title</li>
          <li>Key Responsibilities</li>
          <li>KPI</li>
          <li>Required Skills</li>
          <li>Experience</li>
          <li>Reporting Line</li>
        </ul>

        <h3>Step 2 — Candidate Evaluation</h3>

        <p>
          CV တစ်ခုတည်းကို ကြည့်ပြီး ဆုံးဖြတ်မယ့်အစား
          Experience, Skill, Attitude, Problem Solving,
          Communication နဲ့ Role Fit ကို စစ်ဆေးရပါမယ်။
        </p>

        <h3>Interview Rule</h3>

        <p>
          "ဒီလူကို သဘောကျလား?" ဆိုတာထက်
          "ဒီလူက Role ရဲ့ Requirement ကို ဖြည့်နိုင်လား?"
          ဆိုတာကို အခြေခံရပါမယ်။
        </p>
      `,

      action: `
        ကိုယ့် Company မှာ လိုအပ်နေတဲ့ Position တစ်ခုအတွက်
        Job Description နဲ့ KPI ၃ ခုရေးပါ။
      `,

      quiz: `
        Selection မှာ ဘာကိုအဓိကကြည့်သင့်သလဲ?<br><br>
        <strong>
        Candidate ရဲ့ Capability နဲ့ Job Requirement ကိုက်ညီမှုကို
        အဓိကကြည့်သင့်ပါတယ်။
        </strong>
      `
    },

    {
      id: "hr-04",
      title: "Lesson 04 — Onboarding & Training | ဝန်ထမ်းစတင်ပေါင်းစည်းခြင်း",

      objective: `
        Employee အသစ်များကို Company, Role, Process နှင့်
        Performance Expectation များနားလည်အောင်
        စနစ်တကျ Onboarding ပြုလုပ်နိုင်ရန်။
      `,

      content: `
        <h2>🚀 Employee Onboarding</h2>

        <p>
          Employee အသစ်တစ်ယောက် အလုပ်စဝင်တဲ့နေ့ကနေ
          Role ကို ကောင်းစွာလုပ်နိုင်တဲ့အချိန်အထိ
          စနစ်တကျ ပံ့ပိုးပေးခြင်းကို Onboarding လို့ခေါ်ပါတယ်။
        </p>

        <h3>Onboarding Checklist</h3>

        <ol>
          <li>Company Introduction</li>
          <li>Team Introduction</li>
          <li>Job Description</li>
          <li>KPI & Target</li>
          <li>SOP / Process</li>
          <li>Tools & System</li>
          <li>First 30-Day Plan</li>
          <li>Manager Check-in</li>
        </ol>

        <h3>Training Need Analysis</h3>

        <p>
          Training ပေးတဲ့အခါ လူတိုင်းကို တူညီတဲ့ Training ပေးရုံမဟုတ်ဘဲ
          သူတို့ရဲ့ Skill Gap ကို ရှာဖွေပြီး လိုအပ်တဲ့ Training ကို
          ပေးရပါမယ်။
        </p>

        <h3>Learning Cycle</h3>

        <p>
          Learn → Practice → Feedback → Improve → Repeat
        </p>
      `,

      action: `
        Employee အသစ်တစ်ယောက်အတွက် First 30-Day
        Onboarding Plan တစ်ခုရေးပါ။
      `,

      quiz: `
        Onboarding ရဲ့ အဓိကရည်ရွယ်ချက်က?<br><br>
        <strong>
        Employee အသစ်ကို Company, Role, Process နဲ့
        Performance Expectation တွေကို မြန်မြန်နားလည်စေရန် ဖြစ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "hr-05",
      title: "Lesson 05 — Performance Management | Performance စီမံခြင်း",

      objective: `
        KPI, Target, Performance Review နှင့် Feedback ကို အသုံးပြုပြီး
        Employee Performance ကို တိုးတက်အောင် စီမံနိုင်ရန်။
      `,

      content: `
        <h2>📈 Performance Management</h2>

        <p>
          Performance Management ဆိုတာ Employee တွေကို
          Target သတ်မှတ်ပေးပြီး Result ကို တိုင်းတာကာ
          Feedback နှင့် Coaching ဖြင့် တိုးတက်အောင်လုပ်ပေးတဲ့
          Continuous Process ဖြစ်ပါတယ်။
        </p>

        <h3>Performance Cycle</h3>

        <p>
          Goal Setting → Execution → Monitoring →
          Feedback → Review → Development
        </p>

        <h3>KPI ကောင်းတစ်ခုရဲ့ လက္ခဏာ</h3>

        <ul>
          <li>Specific</li>
          <li>Measurable</li>
          <li>Achievable</li>
          <li>Relevant</li>
          <li>Time-bound</li>
        </ul>

        <h3>Example</h3>

        <p>
          "Sales ကောင်းအောင်လုပ်ပါ" ဆိုတာ KPI မကောင်းပါဘူး။
        </p>

        <p>
          "လစဉ် Sales Target 100 သိန်းကို အနည်းဆုံး 95%
          Achievement ရရှိရန်" ဆိုတာ ပိုမိုတိုင်းတာနိုင်တဲ့ KPI ဖြစ်ပါတယ်။
        </p>
      `,

      action: `
        Team Member တစ်ယောက်အတွက် Result KPI ၂ ခုနဲ့
        Activity KPI ၂ ခု သတ်မှတ်ပါ။
      `,

      quiz: `
        Performance Management ကို တစ်နှစ်တစ်ခါပဲလုပ်သင့်သလား?<br><br>
        <strong>
        မလုပ်သင့်ပါ။ Regular Check-in, Feedback နဲ့ Coaching
        ပြုလုပ်သင့်ပါတယ်။
        </strong>
      `
    },

    {
      id: "hr-06",
      title: "Lesson 06 — Coaching & Leadership | Coaching နှင့် Leadership",

      objective: `
        Employee ကို Micromanage မလုပ်ဘဲ Coaching, Feedback နှင့်
        Empowerment ဖြင့် Performance တိုးတက်အောင် ဦးဆောင်နိုင်ရန်။
      `,

      content: `
        <h2>🎯 Coaching & Leadership</h2>

        <p>
          Manager က အလုပ်တိုင်းကို ကိုယ်တိုင်လုပ်ပေးတာဟာ
          Leadership မဟုတ်ပါဘူး။
          Team Member ကို ကိုယ်တိုင်စဉ်းစား၊ ဆုံးဖြတ်၊
          ပြဿနာဖြေရှင်းနိုင်အောင် တိုးတက်ပေးတာက ပိုကောင်းတဲ့ Leadership ဖြစ်ပါတယ်။
        </p>

        <h3>Coaching Model</h3>

        <ol>
          <li>Goal — ဘာရချင်လဲ?</li>
          <li>Reality — လက်ရှိအခြေအနေက ဘယ်လိုလဲ?</li>
          <li>Options — ဘာတွေ လုပ်လို့ရလဲ?</li>
          <li>Action — ဘာကို ဘယ်တော့လုပ်မလဲ?</li>
        </ol>

        <h3>Good Manager Behaviour</h3>

        <ul>
          <li>Clear Expectations</li>
          <li>Regular Review</li>
          <li>Constructive Feedback</li>
          <li>Empowerment</li>
          <li>Accountability</li>
          <li>Recognition</li>
        </ul>

        <h3>Micromanagement vs Coaching</h3>

        <p>
          Micromanagement က "ဘယ်လိုလုပ်ရမလဲ" ကို အမြဲပြောပါတယ်။
          Coaching က "မင်းဘယ်လိုလုပ်မလဲ" ကို မေးပြီး
          Employee ကို ကိုယ်တိုင်စဉ်းစားစေပါတယ်။
        </p>
      `,

      action: `
        Team Member တစ်ယောက်နဲ့ 15 မိနစ် Coaching Session ပြုလုပ်ပြီး
        သူ့ကိုယ်တိုင် Solution ပြောလာအောင် မေးခွန်းများသုံးပါ။
      `,

      quiz: `
        Coaching ရဲ့ အဓိကရည်ရွယ်ချက်က?<br><br>
        <strong>
        Employee ကို ကိုယ်တိုင်စဉ်းစားပြီး ပြဿနာဖြေရှင်းနိုင်တဲ့
        Capability တိုးတက်စေရန် ဖြစ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "hr-07",
      title: "Lesson 07 — Employee Motivation & Engagement",

      objective: `
        Employee Motivation, Recognition, Engagement နှင့်
        Retention ကို တိုးတက်အောင် စီမံနိုင်ရန်။
      `,

      content: `
        <h2>🔥 Employee Motivation</h2>

        <p>
          Motivation ဆိုတာ ဝန်ထမ်းတစ်ယောက်က အလုပ်ကို
          စိတ်ပါဝင်စားစွာ ကြိုးစားလုပ်ဆောင်စေတဲ့
          အတွင်းပိုင်းနှင့် အပြင်ပိုင်း အကြောင်းရင်းများဖြစ်ပါတယ်။
        </p>

        <h3>Motivation Factors</h3>

        <ul>
          <li>Fair Pay</li>
          <li>Recognition</li>
          <li>Career Growth</li>
          <li>Learning Opportunity</li>
          <li>Meaningful Work</li>
          <li>Good Manager</li>
          <li>Trust & Respect</li>
        </ul>

        <h3>Engagement</h3>

        <p>
          Employee Engagement မြင့်ရင် Employee က
          "အလုပ်တက်ရုံ" မဟုတ်ဘဲ Company Result ကို
          ကိုယ့်ရလဒ်လို သဘောထားပြီး ပါဝင်လာနိုင်ပါတယ်။
        </p>

        <h3>Manager ရဲ့ Role</h3>

        <p>
          Motivation ကို Salary တစ်ခုတည်းနဲ့ မဖြေရှင်းနိုင်ပါဘူး။
          Recognition, Growth, Trust, Feedback နဲ့
          Career Opportunity တွေကလည်း အရေးကြီးပါတယ်။
        </p>
      `,

      action: `
        Team Member တစ်ယောက်ချင်းစီအတွက်
        သူတို့ကို Motivation ပေးနိုင်မယ့် Factor တစ်ခုစီ
        ရှာဖွေပါ။
      `,

      quiz: `
        Employee Motivation ကို Salary တစ်ခုတည်းနဲ့
        တည်ဆောက်နိုင်သလား?<br><br>
        <strong>
        မနိုင်ပါ။ Recognition, Growth, Trust, Career Opportunity
        စတာတွေလည်း အရေးကြီးပါတယ်။
        </strong>
      `
    },

    {
      id: "hr-08",
      title: "Lesson 08 — Team Management & Conflict Resolution",

      objective: `
        Team Structure, Collaboration, Conflict နှင့်
        Communication Problem များကို စနစ်တကျ ဖြေရှင်းနိုင်ရန်။
      `,

      content: `
        <h2>🤝 Team Management</h2>

        <p>
          Team Management ဆိုတာ လူတစ်ယောက်ချင်းစီရဲ့
          Strength ကို အသုံးချပြီး Shared Goal တစ်ခုအတွက်
          ပူးပေါင်းလုပ်ဆောင်နိုင်အောင် စီမံခြင်းဖြစ်ပါတယ်။
        </p>

        <h3>High-Performance Team</h3>

        <ul>
          <li>Clear Goal</li>
          <li>Clear Roles</li>
          <li>Open Communication</li>
          <li>Trust</li>
          <li>Accountability</li>
          <li>Collaboration</li>
        </ul>

        <h3>Conflict ဖြစ်ရတဲ့ အကြောင်းရင်းများ</h3>

        <ul>
          <li>Role မရှင်းလင်းခြင်း</li>
          <li>Communication မကောင်းခြင်း</li>
          <li>Resource မလုံလောက်ခြင်း</li>
          <li>Target မတူခြင်း</li>
          <li>Personal Differences</li>
        </ul>

        <h3>Conflict Resolution Framework</h3>

        <ol>
          <li>Listen to Both Sides</li>
          <li>Identify Facts</li>
          <li>Find Root Cause</li>
          <li>Agree on Solution</li>
          <li>Set Clear Action</li>
          <li>Follow Up</li>
        </ol>
      `,

      action: `
        Team ထဲက Conflict တစ်ခုကို ရွေးပြီး
        Root Cause → Solution → Action → Follow-up
        ပုံစံနဲ့ စီစဉ်ပါ။
      `,

      quiz: `
        Conflict ကို ဖြေရှင်းတဲ့အခါ ပထမဆုံးဘာလုပ်သင့်သလဲ?<br><br>
        <strong>
        ပါဝင်သူနှစ်ဖက်လုံးရဲ့ အမြင်ကို နားထောင်ပြီး
        အချက်အလက်အပေါ် အခြေခံသင့်ပါတယ်။
        </strong>
      `
    },

    {
      id: "hr-09",
      title: "Lesson 09 — Career Development & Succession Planning",

      objective: `
        Employee Career Development နဲ့ အနာဂတ် Leadership Pipeline ကို
        စနစ်တကျ တည်ဆောက်နိုင်ရန်။
      `,

      content: `
        <h2>🌱 Employee Development</h2>

        <p>
          High-performing Employee တွေကို လက်ရှိ Role မှာပဲ
          အမြဲထားတာထက် အနာဂတ်မှာ ဘယ် Role ကို တက်နိုင်မလဲဆိုတာ
          ကြိုတင်စီမံပေးသင့်ပါတယ်။
        </p>

        <h3>Development Areas</h3>

        <ul>
          <li>Technical Skill</li>
          <li>Leadership Skill</li>
          <li>Communication</li>
          <li>Problem Solving</li>
          <li>Business Knowledge</li>
          <li>Decision Making</li>
        </ul>

        <h3>70–20–10 Learning Concept</h3>

        <ul>
          <li>70% — On-the-job Experience</li>
          <li>20% — Coaching / Mentoring</li>
          <li>10% — Formal Training</li>
        </ul>

        <h3>Succession Planning</h3>

        <p>
          Key Position တစ်ခုက လူတစ်ယောက်မရှိတော့ရင်
          Business ရပ်တန့်မသွားအောင် အစားထိုးနိုင်မယ့်
          Future Talent ကို ကြိုတင်ပြင်ဆင်ထားခြင်းဖြစ်ပါတယ်။
        </p>
      `,

      action: `
        ကိုယ့် Team ထဲက High Potential Employee ၂ ယောက်ကို
        ရွေးပြီး သူတို့ရဲ့ Next Role နဲ့ Development Plan
        သတ်မှတ်ပါ။
      `,

      quiz: `
        Succession Planning ရဲ့ အဓိကရည်ရွယ်ချက်က?<br><br>
        <strong>
        အရေးကြီးတဲ့ Position များအတွက် အနာဂတ်
        အစားထိုးနိုင်မယ့် Talent Pipeline တည်ဆောက်ရန် ဖြစ်ပါတယ်။
        </strong>
      `
    },

    {
      id: "hr-10",
      title: "Lesson 10 — HR Analytics & People Performance",

      objective: `
        HR Data နှင့် People KPI များကို အသုံးပြုပြီး
        Employee Performance, Retention နှင့် Workforce Efficiency
        ကို ဆုံးဖြတ်ချက်ချနိုင်အောင် စီမံနိုင်ရန်။
      `,

      content: `
        <h2>📊 HR Analytics</h2>

        <p>
          HR Analytics ဆိုတာ Employee Data ကို စုဆောင်း၊
          ခွဲခြမ်းစိတ်ဖြာပြီး People-related Decision တွေကို
          Data အပေါ်အခြေခံချမှတ်ခြင်းဖြစ်ပါတယ်။
        </p>

        <h3>အရေးကြီး HR KPI များ</h3>

        <table>
          <tr>
            <th>KPI</th>
            <th>ဘာကိုတိုင်းတာသလဲ</th>
          </tr>
          <tr>
            <td>Headcount</td>
            <td>ဝန်ထမ်းအရေအတွက်</td>
          </tr>
          <tr>
            <td>Turnover Rate</td>
            <td>ဝန်ထမ်းထွက်ခွာမှု</td>
          </tr>
          <tr>
            <td>Absenteeism</td>
            <td>အလုပ်ပျက်ကွက်မှု</td>
          </tr>
          <tr>
            <td>Training Completion</td>
            <td>Training ပြီးမြောက်မှု</td>
          </tr>
          <tr>
            <td>Performance Achievement</td>
            <td>KPI ရလဒ်</td>
          </tr>
        </table>

        <h3>Manager Dashboard</h3>

        <ul>
          <li>Team Headcount</li>
          <li>Target Achievement</li>
          <li>Top Performers</li>
          <li>Low Performers</li>
          <li>Training Needs</li>
          <li>Turnover Risk</li>
          <li>Succession Candidates</li>
        </ul>

        <h3>Final HR Framework</h3>

        <p>
          Right People → Right Role → Clear Goal →
          Coaching → Performance → Development →
          Engagement → Retention
        </p>

        <p>
          HR ရဲ့ အဆုံးသတ်ရည်ရွယ်ချက်က လူတွေကို ထိန်းထားရုံမဟုတ်ပါဘူး။
          <strong>
          လူတွေရဲ့ Capability ကို Business Result အဖြစ် ပြောင်းလဲပေးနိုင်ဖို့
          ဖြစ်ပါတယ်။
          </strong>
        </p>
      `,

      action: `
        ကိုယ့် Team အတွက် HR Dashboard တစ်ခုဖန်တီးပြီး
        Headcount, Performance, Training, Attendance နဲ့
        Turnover Risk ကို လစဉ်စောင့်ကြည့်ပါ။
      `,

      quiz: `
        HR Analytics ကို ဘာကြောင့်အသုံးပြုသင့်သလဲ?<br><br>
        <strong>
        People Decision တွေကို ခန့်မှန်းချက်တစ်ခုတည်းမဟုတ်ဘဲ
        Data အပေါ်အခြေခံပြီး ဆုံးဖြတ်နိုင်ရန် ဖြစ်ပါတယ်။
        </strong>
      `
    }

  ];

  /* =========================================================
     LOCAL STORAGE
     ========================================================= */

  const STORAGE_KEY =
    "aung_business_academy_hr_people_management_completed_v1";

  function getCompleted() {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_KEY)
      ) || {};
    } catch (error) {
      return {};
    }
  }

  function saveCompleted(data) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );
  }

  function isCompleted(id) {
    const completed = getCompleted();
    return completed[id] === true;
  }

  function getProgress() {

    const completed = getCompleted();

    const total = HR_LESSONS.length;

    const completedCount =
      HR_LESSONS.filter(function (lesson) {
        return completed[lesson.id] === true;
      }).length;

    const percent =
      total === 0
        ? 0
        : Math.round(
            (completedCount / total) * 100
          );

    return {
      completed: completedCount,
      total: total,
      percent: percent
    };
  }

  function completeLesson(id) {

    const completed = getCompleted();

    completed[id] = true;

    saveCompleted(completed);

    const progress = getProgress();

    window.dispatchEvent(
      new CustomEvent(
        "aungAcademyProgressUpdated",
        {
          detail: {
            courseId: HR_COURSE.id,
            lessonId: id,
            progress: progress
          }
        }
      )
    );

    return progress;
  }

  /* =========================================================
     REGISTER COURSE
     ========================================================= */

  window.AungBusinessAcademy =
    window.AungBusinessAcademy || {};

  window.AungBusinessAcademy.HR_COURSE =
    HR_COURSE;

  window.AungBusinessAcademy.HR_LESSONS =
    HR_LESSONS;

  window.AungBusinessAcademy.getHRProgress =
    getProgress;

  window.AungBusinessAcademy.completeHRLesson =
    completeLesson;

  window.AungBusinessAcademy.isHRLessonCompleted =
    isCompleted;

  window.AungBusinessAcademy.COURSES =
    window.AungBusinessAcademy.COURSES || [];

  const alreadyExists =
    window.AungBusinessAcademy.COURSES.some(
      function (course) {
        return course.id === HR_COURSE.id;
      }
    );

  if (!alreadyExists) {

    window.AungBusinessAcademy.COURSES.push({
      ...HR_COURSE,
      lessons: HR_LESSONS
    });

  }

  console.log(
    "Aung Business Academy — HR & People Management loaded: 10 lessons"
  );

})();
