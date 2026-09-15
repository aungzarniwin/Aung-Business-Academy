/* =========================================================
   AUNG BUSINESS ACADEMY
   ACADEMY LONG LESSONS
   VERSION 10.0 - BUSINESS FUNDAMENTALS
   ========================================================= */

(function () {
  "use strict";

  /* =========================================================
     1. COURSE INFORMATION
     ========================================================= */

  const COURSE = {
    id: "business-fundamentals",
    category: "BUSINESS",
    icon: "📚",
    title: "Business Fundamentals",
    burmeseTitle: "စီးပွားရေးအခြေခံ",
    description:
      "Business တစ်ခုကို စတင်နားလည်ပြီး Customer, Revenue, Cost, Profit, Planning, Risk နှင့် Growth အထိ အခြေခံကျကျ လေ့လာနိုင်မည့် သင်တန်း။",
    lessons: 10,
    level: "Beginner → Professional"
  };

  /* =========================================================
     2. LESSON DATA
     ========================================================= */

  const LESSONS = [

    {
      id: "bf-01",
      courseId: COURSE.id,
      lessonNo: 1,
      icon: "💼",
      title: "What is Business?",
      burmeseTitle: "စီးပွားရေးဆိုတာဘာလဲ",
      duration: "25 min",

      objective: [
        "Business ဆိုတာဘာလဲဆိုတာ နားလည်ရန်",
        "Customer, Product, Revenue, Cost နှင့် Profit တို့၏ ဆက်နွယ်မှုကို နားလည်ရန်",
        "Business တစ်ခု ဘယ်လိုတန်ဖိုးဖန်တီးပြီး ဝင်ငွေရသလဲ သိရှိရန်"
      ],

      content: `
        <h3>📌 Business ဆိုတာဘာလဲ?</h3>

        <p>
        Business ဆိုတာ Customer ရဲ့ လိုအပ်ချက်၊ ပြဿနာ သို့မဟုတ် ဆန္ဒကို
        ဖြေရှင်းပေးနိုင်တဲ့ Product သို့မဟုတ် Service တစ်ခုကို
        တန်ဖိုးရှိရှိ ဖန်တီးပေးပြီး အဲဒီတန်ဖိုးအတွက် Revenue ရရှိအောင်
        စီမံခန့်ခွဲတဲ့ လုပ်ငန်းစနစ်တစ်ခု ဖြစ်ပါတယ်။
        </p>

        <p>
        Business တစ်ခုမှာ Product ရှိရုံနဲ့ မပြီးပါဘူး။
        Customer ရှိရမယ်၊ Customer က ဝယ်ချင်ရမယ်၊
        Sales ဖြစ်ရမယ်၊ Revenue ရရမယ်၊ Cost ကို ထိန်းချုပ်နိုင်ရမယ်
        ပြီးတော့ Profit ကျန်ရမယ်။
        </p>

        <h3>🔄 Business Flow</h3>

        <div class="lesson-flow">
          <div>👤 Customer</div>
          <span>→</span>
          <div>💎 Value</div>
          <span>→</span>
          <div>📦 Product / Service</div>
          <span>→</span>
          <div>💰 Sales</div>
          <span>→</span>
          <div>💵 Revenue</div>
          <span>→</span>
          <div>📉 Cost</div>
          <span>→</span>
          <div>📈 Profit</div>
        </div>

        <h3>👤 Customer</h3>

        <p>
        Business ရဲ့ အဓိကဗဟိုချက်က Customer ဖြစ်ပါတယ်။
        Customer မရှိဘဲ Business မဖြစ်နိုင်ပါဘူး။
        ဒါကြောင့် Business Manager တစ်ယောက်ဟာ
        “ငါ့ Product ဘာကောင်းလဲ” ဆိုတာထက်
        “Customer ဘာလိုချင်လဲ” ဆိုတာကို အရင်စဉ်းစားရပါတယ်။
        </p>

        <h3>📦 Product / Service</h3>

        <p>
        Product ဆိုတာ Customer ကို ပေးနိုင်တဲ့ ပစ္စည်း၊
        Service ဆိုတာ Customer အတွက် ဆောင်ရွက်ပေးတဲ့ ဝန်ဆောင်မှု ဖြစ်ပါတယ်။
        </p>

        <p>
        Professional Business တစ်ခုက Product ကိုသာ မရောင်းပါဘူး။
        Customer ရရှိမယ့် Benefit နဲ့ Value ကို ရောင်းတာ ဖြစ်ပါတယ်။
        </p>

        <h3>💰 Revenue</h3>

        <p>
        Revenue ဆိုတာ Business က Product သို့မဟုတ် Service ရောင်းချပြီး
        ရရှိလာတဲ့ ဝင်ငွေ ဖြစ်ပါတယ်။
        </p>

        <div class="lesson-example">
          <strong>ဥပမာ</strong><br>
          Product တစ်ခု = 50,000 ကျပ်<br>
          တစ်လအတွင်း = 100 ခု ရောင်းနိုင်ခဲ့ပါက<br><br>
          Revenue = 50,000 × 100<br>
          = <strong>5,000,000 ကျပ်</strong>
        </div>

        <h3>📉 Cost</h3>

        <p>
        Business လည်ပတ်ဖို့ သုံးရတဲ့ငွေတွေကို Cost လို့ခေါ်ပါတယ်။
        Product ဝယ်ယူစရိတ်၊ ဝန်ထမ်းလစာ၊ အိမ်ငှားခ၊ ပို့ဆောင်ခ၊
        Marketing Expense စတာတွေ ပါဝင်ပါတယ်။
        </p>

        <h3>📈 Profit</h3>

        <p>
        Revenue ရလာတာနဲ့ Business အမြတ်ရပြီလို့ မဆိုနိုင်ပါဘူး။
        Cost အားလုံးနုတ်ပြီးမှ ကျန်တဲ့ငွေက Profit ဖြစ်ပါတယ်။
        </p>

        <div class="lesson-formula">
          Profit = Revenue − Total Cost
        </div>

        <h3>👔 Manager Thinking</h3>

        <p>
        Manager တစ်ယောက်အနေနဲ့ Sales တက်တာကိုပဲ မကြည့်သင့်ပါဘူး။
        Revenue တက်နေပေမယ့် Cost ပိုတက်နေရင် Profit ကျနိုင်ပါတယ်။
        </p>

        <p>
        ဒါကြောင့် Business Manager တစ်ယောက်ဟာ
        Revenue, Cost, Profit, Customer နှင့် Growth ကို
        တစ်ပြိုင်နက်တည်း စောင့်ကြည့်ရပါတယ်။
        </p>
      `,

      action: [
        "ကိုယ့်လုပ်ငန်းရဲ့ အဓိက Customer ကို သတ်မှတ်ပါ။",
        "အဓိက Product / Service ၃ ခုကို ရေးပါ။",
        "Monthly Revenue ကို ရေးပါ။",
        "Monthly Cost ကို ရေးပါ။",
        "Profit ကို တွက်ပါ။"
      ],

      quiz: [
        {
          q: "Business ရဲ့ အဓိကဗဟိုချက်က ဘာလဲ?",
          a: "Customer ဖြစ်ပါတယ်။"
        },
        {
          q: "Profit ကို ဘယ်လိုတွက်မလဲ?",
          a: "Profit = Revenue − Total Cost ဖြစ်ပါတယ်။"
        },
        {
          q: "Revenue နဲ့ Profit တူပါသလား?",
          a: "မတူပါဘူး။ Revenue က ဝင်ငွေဖြစ်ပြီး Cost နုတ်ပြီးကျန်တာက Profit ဖြစ်ပါတယ်။"
        }
      ]
    },


    {
      id: "bf-02",
      courseId: COURSE.id,
      lessonNo: 2,
      icon: "🧩",
      title: "Business Model",
      burmeseTitle: "Business Model ဆိုတာဘာလဲ",
      duration: "25 min",

      objective: [
        "Business Model ရဲ့ အဓိပ္ပါယ်ကို နားလည်ရန်",
        "Business က ဘယ်လို Value ဖန်တီးပြီး Revenue ရသလဲ သိရန်",
        "ကိုယ့်လုပ်ငန်းရဲ့ Business Model ကို ခွဲခြမ်းနိုင်ရန်"
      ],

      content: `
        <h3>📌 Business Model ဆိုတာဘာလဲ?</h3>

        <p>
        Business Model ဆိုတာ Business တစ်ခုက Customer ကို
        ဘယ်လို Value ပေးမလဲ၊ ဘယ်လိုရောင်းမလဲ၊ ဘယ်လို Revenue ရမလဲ၊
        ဘယ်လို Cost သုံးမလဲဆိုတဲ့ လုပ်ငန်းစနစ် ဖြစ်ပါတယ်။
        </p>

        <h3>🔑 Business Model ရဲ့ အဓိကအချက်များ</h3>

        <ul class="lesson-list">
          <li>Customer Segment</li>
          <li>Value Proposition</li>
          <li>Product / Service</li>
          <li>Sales Channel</li>
          <li>Customer Relationship</li>
          <li>Revenue Stream</li>
          <li>Key Resources</li>
          <li>Key Partners</li>
          <li>Cost Structure</li>
        </ul>

        <h3>👤 Customer Segment</h3>

        <p>
        ကိုယ့် Product ကို ဘယ်သူတွေဝယ်မလဲဆိုတာ သတ်မှတ်ရပါတယ်။
        Customer ကို အားလုံးလို့ သတ်မှတ်ထားရင် Marketing နဲ့ Sales
        နှစ်ခုစလုံး မထိရောက်နိုင်ပါဘူး။
        </p>

        <h3>💎 Value Proposition</h3>

        <p>
        Customer က “ဘာကြောင့် ဒီ Product ကို ဝယ်သင့်တာလဲ?”
        ဆိုတဲ့မေးခွန်းကို ဖြေနိုင်ရပါမယ်။
        </p>

        <div class="lesson-example">
          <strong>ဥပမာ</strong><br>
          “ဈေးသက်သာတယ်” ဆိုတာ Value တစ်ခု ဖြစ်နိုင်ပါတယ်။<br>
          “အချိန်ကုန်သက်သာတယ်” ဆိုတာလည်း Value ဖြစ်ပါတယ်။<br>
          “Quality ကောင်းတယ်” ဆိုတာလည်း Value ဖြစ်ပါတယ်။
        </div>

        <h3>💵 Revenue Stream</h3>

        <p>
        Business တစ်ခုက ဘယ်နေရာကနေ ငွေရသလဲဆိုတာ သိရပါမယ်။
        Product Sales, Service Fee, Subscription,
        Commission စတဲ့ Revenue Model တွေ ရှိနိုင်ပါတယ်။
        </p>

        <h3>👔 Manager Thinking</h3>

        <p>
        Business Model မရှင်းလင်းရင် Sales တက်အောင် ကြိုးစားနေရင်း
        Profit မကျန်တဲ့အခြေအနေ ဖြစ်နိုင်ပါတယ်။
        </p>
      `,

      action: [
        "ကိုယ့် Customer ကို သတ်မှတ်ပါ။",
        "Customer ရရှိမယ့် Value ၃ ခုရေးပါ။",
        "Revenue ရတဲ့လမ်းကြောင်းကို ရေးပါ။",
        "အဓိက Cost ၅ ခုရေးပါ။"
      ],

      quiz: [
        {
          q: "Business Model ဆိုတာဘာလဲ?",
          a: "Business က Customer ကို Value ပေးပြီး Revenue ရရှိအောင် လုပ်ဆောင်တဲ့ စနစ်ဖြစ်ပါတယ်။"
        },
        {
          q: "Value Proposition ဆိုတာဘာလဲ?",
          a: "Customer က ကိုယ့် Product ကို ဘာကြောင့်ရွေးချယ်သင့်သလဲဆိုတဲ့ အကြောင်းပြချက် ဖြစ်ပါတယ်။"
        }
      ]
    },


    {
      id: "bf-03",
      courseId: COURSE.id,
      lessonNo: 3,
      icon: "👥",
      title: "Customer & Market",
      burmeseTitle: "Customer နှင့် Market",
      duration: "30 min",

      objective: [
        "Customer ကို ခွဲခြမ်းစိတ်ဖြာနိုင်ရန်",
        "Target Customer သတ်မှတ်နိုင်ရန်",
        "Market Need ကို နားလည်ရန်"
      ],

      content: `
        <h3>📌 Customer က ဘာကြောင့်အရေးကြီးသလဲ?</h3>

        <p>
        Business တစ်ခုအတွက် Product ကောင်းတာထက်
        အဲဒီ Product ကို လိုအပ်တဲ့ Customer ရှိဖို့ ပိုအရေးကြီးပါတယ်။
        </p>

        <p>
        Customer မလိုချင်တဲ့ Product ကို Quality ဘယ်လောက်ကောင်းကောင်း
        ရောင်းရခက်ပါတယ်။
        </p>

        <h3>🔍 Customer Analysis</h3>

        <ul class="lesson-list">
          <li>အသက်</li>
          <li>ကျား / မ</li>
          <li>ဝင်ငွေ</li>
          <li>နေထိုင်ရာ</li>
          <li>အလုပ်အကိုင်</li>
          <li>လိုအပ်ချက်</li>
          <li>ပြဿနာ</li>
          <li>ဝယ်ယူမှုအလေ့အထ</li>
        </ul>

        <h3>🎯 Target Customer</h3>

        <p>
        Target Customer ဆိုတာ ကိုယ့် Product ကို အများဆုံးလိုအပ်ပြီး
        ဝယ်ယူနိုင်ခြေမြင့်တဲ့ Customer အုပ်စု ဖြစ်ပါတယ်။
        </p>

        <h3>🧠 Customer Need</h3>

        <p>
        Customer ရဲ့ Need ကို သိဖို့အတွက် မေးခွန်းမေးတတ်ရပါမယ်။
        </p>

        <div class="lesson-example">
          <strong>မေးနိုင်သောမေးခွန်းများ</strong><br><br>
          “လက်ရှိ ဘာအခက်အခဲရှိပါသလဲ?”<br>
          “အခု ဘယ် Product ကို သုံးနေပါသလဲ?”<br>
          “ဘာအချက်ကြောင့် Product ပြောင်းချင်တာလဲ?”<br>
          “အရေးကြီးဆုံးက Price လား၊ Quality လား၊ Service လား?”
        </div>

        <h3>👔 Manager Thinking</h3>

        <p>
        Customer ကို နားမလည်ဘဲ Sales Team ကို Target ပဲပေးနေရင်
        Long-term Growth မရနိုင်ပါဘူး။
        </p>
      `,

      action: [
        "Customer 10 ယောက်ကို စာရင်းလုပ်ပါ။",
        "သူတို့ရဲ့ အဓိက Need ကို ရေးပါ။",
        "အဓိက Pain Point ၃ ခုရှာပါ။",
        "Customer က ဘာကြောင့် ကိုယ့် Product ကိုဝယ်သလဲ စဉ်းစားပါ။"
      ],

      quiz: [
        {
          q: "Target Customer ဆိုတာဘာလဲ?",
          a: "ကိုယ့် Product ကို အများဆုံးလိုအပ်ပြီး ဝယ်ယူနိုင်ခြေမြင့်တဲ့ Customer အုပ်စု ဖြစ်ပါတယ်။"
        },
        {
          q: "Customer Need ကို ဘယ်လိုသိနိုင်မလဲ?",
          a: "Customer ကို မေးမြန်းခြင်း၊ လေ့လာခြင်းနဲ့ Sales Data ကို ခွဲခြမ်းခြင်းကနေ သိနိုင်ပါတယ်။"
        }
      ]
    },


    {
      id: "bf-04",
      courseId: COURSE.id,
      lessonNo: 4,
      icon: "📦",
      title: "Product & Service",
      burmeseTitle: "Product နှင့် Service",
      duration: "25 min",

      objective: [
        "Product နှင့် Service ကို နားလည်ရန်",
        "Feature, Benefit, Value ကို ခွဲခြားနိုင်ရန်",
        "Customer Value ကို တည်ဆောက်နိုင်ရန်"
      ],

      content: `
        <h3>📦 Product ဆိုတာဘာလဲ?</h3>

        <p>
        Product ဆိုတာ Customer ရဲ့ လိုအပ်ချက်ကို ဖြည့်ဆည်းပေးဖို့
        ထုတ်လုပ်ရောင်းချတဲ့ ပစ္စည်း သို့မဟုတ် Solution ဖြစ်ပါတယ်။
        </p>

        <h3>🛠️ Service ဆိုတာဘာလဲ?</h3>

        <p>
        Service ဆိုတာ Customer အတွက် ဆောင်ရွက်ပေးတဲ့
        ဝန်ဆောင်မှု ဖြစ်ပါတယ်။
        </p>

        <h3>⭐ Feature → Benefit → Value</h3>

        <div class="lesson-flow">
          <div>Feature</div>
          <span>→</span>
          <div>Benefit</div>
          <span>→</span>
          <div>Customer Value</div>
        </div>

        <div class="lesson-example">
          <strong>ဥပမာ</strong><br><br>
          Feature = ကားမှာ Fuel Efficiency ကောင်းသည်။<br>
          Benefit = ဆီစားသက်သာသည်။<br>
          Value = Customer ရဲ့ လစဉ်အသုံးစရိတ် လျော့ကျသည်။
        </div>

        <p>
        Salesperson တစ်ယောက်က Feature ပဲပြောနေရင် Customer က
        “ဒါက ငါ့အတွက် ဘာအကျိုးရှိလဲ?” ဆိုတာ မသိနိုင်ပါဘူး။
        </p>

        <p>
        Professional Selling မှာ Feature ကို Benefit အဖြစ်ပြောင်းပြီး
        Customer Value အဖြစ် ရှင်းပြနိုင်ရပါမယ်။
        </p>
      `,

      action: [
        "ကိုယ့် Product ၃ ခုရွေးပါ။",
        "Product တစ်ခုချင်းစီရဲ့ Feature ရေးပါ။",
        "Feature တစ်ခုချင်းစီရဲ့ Benefit ရေးပါ။",
        "Customer ရမယ့် Value ကို ရေးပါ။"
      ],

      quiz: [
        {
          q: "Feature ဆိုတာဘာလဲ?",
          a: "Product ရဲ့ ပါဝင်တဲ့အင်္ဂါရပ် သို့မဟုတ် လုပ်ဆောင်ချက် ဖြစ်ပါတယ်။"
        },
        {
          q: "Benefit ဆိုတာဘာလဲ?",
          a: "Feature ကြောင့် Customer ရရှိတဲ့ အကျိုးကျေးဇူး ဖြစ်ပါတယ်။"
        }
      ]
    },


    {
      id: "bf-05",
      courseId: COURSE.id,
      lessonNo: 5,
      icon: "💰",
      title: "Revenue",
      burmeseTitle: "ဝင်ငွေ Revenue",
      duration: "25 min",

      objective: [
        "Revenue ကို နားလည်ရန်",
        "Revenue တွက်ချက်နိုင်ရန်",
        "Revenue တိုးတက်စေမည့် နည်းလမ်းများ သိရှိရန်"
      ],

      content: `
        <h3>💰 Revenue ဆိုတာဘာလဲ?</h3>

        <p>
        Revenue ဆိုတာ Business က Product သို့မဟုတ် Service
        ရောင်းချခြင်းကနေ ရရှိလာတဲ့ စုစုပေါင်းဝင်ငွေ ဖြစ်ပါတယ်။
        </p>

        <div class="lesson-formula">
          Revenue = Selling Price × Quantity Sold
        </div>

        <div class="lesson-example">
          Product Price = 50,000 ကျပ်<br>
          Quantity = 100 ခု<br><br>
          Revenue = 50,000 × 100<br>
          = <strong>5,000,000 ကျပ်</strong>
        </div>

        <h3>📈 Revenue တိုးစေမယ့် နည်းလမ်းများ</h3>

        <ul class="lesson-list">
          <li>Customer အသစ်ရရှိခြင်း</li>
          <li>Existing Customer ပြန်ဝယ်ခြင်း</li>
          <li>Average Order Value တိုးခြင်း</li>
          <li>Product အသစ်ထည့်ခြင်း</li>
          <li>Distribution တိုးချဲ့ခြင်း</li>
          <li>Sales Team Productivity တိုးခြင်း</li>
        </ul>

        <h3>⚠️ Revenue ≠ Profit</h3>

        <p>
        Revenue များတာနဲ့ Profit များတာ မတူပါဘူး။
        Revenue တိုးပေမယ့် Cost အလွန်တက်နေပါက Profit ကျနိုင်ပါတယ်။
        </p>

        <h3>👔 Manager Thinking</h3>

        <p>
        Revenue Growth နဲ့ Profit Growth ကို အတူတူ စောင့်ကြည့်ရပါမယ်။
        </p>
      `,

      action: [
        "ပြီးခဲ့တဲ့လ Revenue ကို ရေးပါ။",
        "ဒီလ Revenue Target သတ်မှတ်ပါ။",
        "Revenue တိုးစေမယ့် Action ၃ ခုရေးပါ။"
      ],

      quiz: [
        {
          q: "Revenue Formula ကဘာလဲ?",
          a: "Revenue = Selling Price × Quantity Sold ဖြစ်ပါတယ်။"
        },
        {
          q: "Revenue နဲ့ Profit တူပါသလား?",
          a: "မတူပါဘူး။ Cost နုတ်ပြီးမှ Profit ကိုရပါတယ်။"
        }
      ]
    },


    {
      id: "bf-06",
      courseId: COURSE.id,
      lessonNo: 6,
      icon: "📉",
      title: "Cost Management",
      burmeseTitle: "ကုန်ကျစရိတ် စီမံခန့်ခွဲခြင်း",
      duration: "30 min",

      objective: [
        "Cost အမျိုးအစားများကို နားလည်ရန်",
        "Fixed Cost နှင့် Variable Cost ခွဲခြားနိုင်ရန်",
        "Cost Control လုပ်နိုင်ရန်"
      ],

      content: `
        <h3>📉 Cost ဆိုတာဘာလဲ?</h3>

        <p>
        Business တစ်ခုကို လည်ပတ်နိုင်ဖို့ သုံးစွဲရတဲ့ ငွေကြေးနဲ့
        အရင်းအမြစ်အသုံးစရိတ်တွေကို Cost လို့ခေါ်ပါတယ်။
        </p>

        <h3>1️⃣ Fixed Cost</h3>

        <p>
        ရောင်းအားတက်တာကျတာနဲ့ တိုက်ရိုက်မပြောင်းလဲတဲ့ Cost ဖြစ်ပါတယ်။
        </p>

        <ul class="lesson-list">
          <li>Office Rent</li>
          <li>Basic Salary</li>
          <li>Insurance</li>
          <li>Software Subscription</li>
        </ul>

        <h3>2️⃣ Variable Cost</h3>

        <p>
        Sales Volume တိုးလာတာနဲ့အမျှ ပြောင်းလဲလာတဲ့ Cost ဖြစ်ပါတယ်။
        </p>

        <ul class="lesson-list">
          <li>Product Cost</li>
          <li>Packaging</li>
          <li>Delivery</li>
          <li>Sales Commission</li>
        </ul>

        <h3>🎯 Cost Control</h3>

        <p>
        Cost Control ဆိုတာ အရာအားလုံးကို ဖြတ်တောက်ပစ်တာ မဟုတ်ပါဘူး။
        Business Value မဖန်တီးပေးတဲ့ Waste ကို လျှော့ချပြီး
        Resource Productivity ကို မြှင့်တင်တာ ဖြစ်ပါတယ်။
        </p>

        <h3>👔 Manager Thinking</h3>

        <p>
        Cost တစ်ခုကို ဖြတ်မယ့်အခါ “ဒီ Cost ကိုဖြတ်လိုက်ရင်
        Revenue၊ Customer Experience နဲ့ Employee Productivity
        ဘာဖြစ်မလဲ?” ဆိုတာကို စဉ်းစားရပါမယ်။
        </p>
      `,

      action: [
        "Monthly Cost အားလုံးစာရင်းလုပ်ပါ။",
        "Fixed Cost / Variable Cost ခွဲပါ။",
        "မလိုအပ်တဲ့ Cost ၃ ခုရှာပါ။",
        "Cost လျှော့ဖို့ Action Plan ရေးပါ။"
      ],

      quiz: [
        {
          q: "Fixed Cost ဆိုတာဘာလဲ?",
          a: "Sales Volume ပြောင်းလဲတာနဲ့ တိုက်ရိုက်မပြောင်းလဲတဲ့ Cost ဖြစ်ပါတယ်။"
        },
        {
          q: "Cost Control ဆိုတာဘာလဲ?",
          a: "မလိုအပ်တဲ့အသုံးစရိတ်နဲ့ Waste ကို လျှော့ချပြီး Resource Productivity မြှင့်တင်ခြင်း ဖြစ်ပါတယ်။"
        }
      ]
    },


    {
      id: "bf-07",
      courseId: COURSE.id,
      lessonNo: 7,
      icon: "📊",
      title: "Profit & Profit Margin",
      burmeseTitle: "အမြတ်နှင့် အမြတ်ရာခိုင်နှုန်း",
      duration: "30 min",

      objective: [
        "Profit တွက်ချက်နိုင်ရန်",
        "Gross Profit နှင့် Net Profit နားလည်ရန်",
        "Profit Margin တွက်ချက်နိုင်ရန်"
      ],

      content: `
        <h3>📈 Profit ဆိုတာဘာလဲ?</h3>

        <p>
        Business က ရရှိတဲ့ Revenue ထဲက Cost တွေအားလုံးကို နုတ်ပြီး
        ကျန်ရှိတဲ့ အမြတ်ငွေကို Profit လို့ခေါ်ပါတယ်။
        </p>

        <div class="lesson-formula">
          Profit = Revenue − Total Cost
        </div>

        <div class="lesson-example">
          Revenue = 100 သိန်း<br>
          Total Cost = 80 သိန်း<br><br>
          Profit = 20 သိန်း
        </div>

        <h3>💵 Gross Profit</h3>

        <p>
        Revenue ကနေ Cost of Goods Sold ကို နုတ်ပြီးရတဲ့ အမြတ်ကို
        Gross Profit လို့ခေါ်ပါတယ်။
        </p>

        <div class="lesson-formula">
          Gross Profit = Revenue − COGS
        </div>

        <h3>💵 Net Profit</h3>

        <p>
        Gross Profit ထဲက Operating Expenses စတဲ့
        အသုံးစရိတ်တွေကို ထပ်နုတ်ပြီးကျန်တဲ့ Profit ဖြစ်ပါတယ်။
        </p>

        <h3>📊 Profit Margin</h3>

        <div class="lesson-formula">
          Profit Margin = Profit ÷ Revenue × 100
        </div>

        <div class="lesson-example">
          Profit = 20 သိန်း<br>
          Revenue = 100 သိန်း<br><br>
          Profit Margin = 20%
        </div>

        <h3>👔 Manager Thinking</h3>

        <p>
        Manager က Revenue တစ်ခုတည်းမကြည့်ဘဲ
        Margin ကိုပါ အမြဲစောင့်ကြည့်ရပါမယ်။
        </p>
      `,

      action: [
        "ကိုယ့်လုပ်ငန်းရဲ့ Revenue ရေးပါ။",
        "Total Cost ရေးပါ။",
        "Profit တွက်ပါ။",
        "Profit Margin တွက်ပါ။"
      ],

      quiz: [
        {
          q: "Profit Formula ကဘာလဲ?",
          a: "Profit = Revenue − Total Cost ဖြစ်ပါတယ်။"
        },
        {
          q: "Profit Margin ဆိုတာဘာလဲ?",
          a: "Revenue ထဲမှာ Profit ဘယ်လောက်ရာခိုင်နှုန်းပါဝင်သလဲဆိုတာကို ပြတဲ့ KPI ဖြစ်ပါတယ်။"
        }
      ]
    },


    {
      id: "bf-08",
      courseId: COURSE.id,
      lessonNo: 8,
      icon: "📝",
      title: "Business Planning",
      burmeseTitle: "Business Planning",
      duration: "35 min",

      objective: [
        "Business Plan ရေးဆွဲနိုင်ရန်",
        "Goal, Strategy, Action, KPI ချိတ်ဆက်နိုင်ရန်",
        "Planning ကို လက်တွေ့ Execution အဖြစ် ပြောင်းလဲနိုင်ရန်"
      ],

      content: `
        <h3>📝 Business Planning ဆိုတာဘာလဲ?</h3>

        <p>
        Business Planning ဆိုတာ လက်ရှိအခြေအနေကနေ
        အနာဂတ်မှာ ရောက်ချင်တဲ့အခြေအနေကို ဘယ်လိုသွားမလဲဆိုတာ
        စနစ်တကျ စီမံရေးဆွဲခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>🎯 Planning Framework</h3>

        <div class="lesson-flow">
          <div>Current Situation</div>
          <span>→</span>
          <div>Goal</div>
          <span>→</span>
          <div>Strategy</div>
          <span>→</span>
          <div>Action</div>
          <span>→</span>
          <div>KPI</div>
          <span>→</span>
          <div>Review</div>
        </div>

        <h3>1. Current Situation</h3>
        <p>
        လက်ရှိ Sales, Customer, Profit, Team, Market Position
        စတာတွေကို အရင်သိရပါမယ်။
        </p>

        <h3>2. Goal</h3>
        <p>
        Goal က တိကျပြီး တိုင်းတာနိုင်ရပါမယ်။
        </p>

        <div class="lesson-example">
          မကောင်းသော Goal = “Sales တိုးချင်တယ်”<br><br>
          ကောင်းသော Goal = “နောက် ၆ လအတွင်း Monthly Sales ကို 20% တိုးမယ်”
        </div>

        <h3>3. Strategy</h3>
        <p>
        Goal ရောက်ဖို့ ဘယ်နည်းလမ်းသုံးမလဲဆိုတာ Strategy ဖြစ်ပါတယ်။
        </p>

        <h3>4. Action</h3>
        <p>
        Strategy ကို နေ့စဉ်၊ အပတ်စဉ် လုပ်ဆောင်ချက်အဖြစ် ပြောင်းရပါတယ်။
        </p>

        <h3>5. KPI</h3>
        <p>
        လုပ်ဆောင်ချက်အောင်မြင်မှုကို တိုင်းတာဖို့ KPI သတ်မှတ်ရပါတယ်။
        </p>
      `,

      action: [
        "3 လအတွင်း ရောက်ချင်တဲ့ Goal တစ်ခုရေးပါ။",
        "Strategy ၃ ခုရေးပါ။",
        "Action ၅ ခုရေးပါ။",
        "KPI ၃ ခုသတ်မှတ်ပါ။"
      ],

      quiz: [
        {
          q: "Business Plan ရဲ့ အဓိကရည်ရွယ်ချက်ကဘာလဲ?",
          a: "Business Goal ကို ရောက်ရှိဖို့ Strategy နဲ့ Action ကို စနစ်တကျ သတ်မှတ်ခြင်း ဖြစ်ပါတယ်။"
        },
        {
          q: "KPI ဘာကြောင့်လိုအပ်သလဲ?",
          a: "Performance နဲ့ Goal Achievement ကို တိုင်းတာဖို့ လိုအပ်ပါတယ်။"
        }
      ]
    },


    {
      id: "bf-09",
      courseId: COURSE.id,
      lessonNo: 9,
      icon: "⚠️",
      title: "Business Risk",
      burmeseTitle: "Business Risk စီမံခန့်ခွဲခြင်း",
      duration: "30 min",

      objective: [
        "Business Risk အမျိုးအစားများကို နားလည်ရန်",
        "Risk ကို ကြိုတင်သိရှိနိုင်ရန်",
        "Risk Management Plan ပြုလုပ်နိုင်ရန်"
      ],

      content: `
        <h3>⚠️ Business Risk ဆိုတာဘာလဲ?</h3>

        <p>
        Business ရဲ့ Goal နဲ့ Performance ကို ထိခိုက်စေနိုင်တဲ့
        မသေချာမှုတွေကို Business Risk လို့ခေါ်ပါတယ်။
        </p>

        <h3>1️⃣ Market Risk</h3>

        <p>
        Customer Demand ကျခြင်း၊ Competitor အသစ်ဝင်လာခြင်း၊
        Market Trend ပြောင်းလဲခြင်းတို့ ဖြစ်ပါတယ်။
        </p>

        <h3>2️⃣ Financial Risk</h3>

        <p>
        Cash Flow ပြဿနာ၊ Debt များခြင်း၊ Cost တက်ခြင်းတို့ ဖြစ်ပါတယ်။
        </p>

        <h3>3️⃣ Operational Risk</h3>

        <p>
        Stock ပြတ်ခြင်း၊ System ပျက်ခြင်း၊ Distribution ပြဿနာ၊
        Quality Issue စတာတွေ ဖြစ်ပါတယ်။
        </p>

        <h3>4️⃣ People Risk</h3>

        <p>
        Key Employee ထွက်ခြင်း၊ Skilled Staff မရှိခြင်း၊
        Leadership ပြဿနာ စတာတွေ ဖြစ်ပါတယ်။
        </p>

        <h3>🔄 Risk Management Process</h3>

        <div class="lesson-flow">
          <div>Identify</div>
          <span>→</span>
          <div>Assess</div>
          <span>→</span>
          <div>Prevent</div>
          <span>→</span>
          <div>Monitor</div>
          <span>→</span>
          <div>Respond</div>
        </div>

        <h3>👔 Manager Thinking</h3>

        <p>
        Risk ဖြစ်ပြီးမှ ဖြေရှင်းတာထက် Risk ဖြစ်နိုင်ခြေကို
        ကြိုတင်ရှာဖွေပြီး Preventive Action ပြုလုပ်တာက
        Professional Management ဖြစ်ပါတယ်။
        </p>
      `,

      action: [
        "ကိုယ့်လုပ်ငန်းမှာ ဖြစ်နိုင်တဲ့ Risk 10 ခုရေးပါ။",
        "အရေးကြီးဆုံး Risk 3 ခုရွေးပါ။",
        "Risk တစ်ခုချင်းစီအတွက် Prevention Plan ရေးပါ။",
        "Contingency Plan တစ်ခုစီရေးပါ။"
      ],

      quiz: [
        {
          q: "Market Risk ဆိုတာဘာလဲ?",
          a: "Market Demand၊ Competition သို့မဟုတ် Market Trend ပြောင်းလဲမှုကြောင့် ဖြစ်နိုင်တဲ့ Risk ဖြစ်ပါတယ်။"
        },
        {
          q: "Risk Management မှာ ပထမဆုံးဘာလုပ်ရမလဲ?",
          a: "Risk ကို Identify လုပ်ရပါတယ်။"
        }
      ]
    },


    {
      id: "bf-10",
      courseId: COURSE.id,
      lessonNo: 10,
      icon: "🚀",
      title: "Business Growth",
      burmeseTitle: "Business Growth",
      duration: "35 min",

      objective: [
        "Business Growth ဆိုတာဘာလဲ နားလည်ရန်",
        "Growth Strategy အမျိုးအစားများ သိရှိရန်",
        "Sustainable Growth ကို စဉ်းစားတတ်ရန်"
      ],

      content: `
        <h3>🚀 Business Growth ဆိုတာဘာလဲ?</h3>

        <p>
        Business Growth ဆိုတာ Sales တိုးလာတာတစ်ခုတည်း မဟုတ်ပါဘူး။
        Customer Base, Revenue, Profit, Market Share,
        Product Range နဲ့ Business Capacity တိုးတက်လာခြင်းကို
        Business Growth လို့ခေါ်ပါတယ်။
        </p>

        <h3>📈 Growth Strategy 1 — Existing Customer</h3>

        <p>
        လက်ရှိ Customer တွေကို ပိုမိုဝယ်ယူလာအောင်လုပ်ခြင်း၊
        Repeat Purchase တိုးခြင်း၊ Cross-selling နဲ့ Upselling
        ပြုလုပ်ခြင်းတို့ ဖြစ်ပါတယ်။
        </p>

        <h3>📈 Growth Strategy 2 — New Customer</h3>

        <p>
        Customer အသစ်တွေ ရှာဖွေပြီး Market Coverage တိုးချဲ့ခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>📈 Growth Strategy 3 — New Product</h3>

        <p>
        လက်ရှိ Customer Base ကို အသုံးချပြီး Product အသစ်တွေ
        ထပ်မံရောင်းချခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>📈 Growth Strategy 4 — New Market</h3>

        <p>
        နေရာအသစ်၊ Customer Segment အသစ်၊ Channel အသစ်တွေကို
        ဝင်ရောက်ခြင်း ဖြစ်ပါတယ်။
        </p>

        <h3>📊 Growth ကို တိုင်းတာခြင်း</h3>

        <ul class="lesson-list">
          <li>Revenue Growth %</li>
          <li>Profit Growth %</li>
          <li>Customer Growth</li>
          <li>Market Share</li>
          <li>Repeat Purchase Rate</li>
          <li>Average Customer Value</li>
        </ul>

        <h3>👔 Manager Thinking</h3>

        <p>
        Sustainable Growth ဆိုတာ Sales တက်ရုံနဲ့ မပြီးပါဘူး။
        Profitability, Cash Flow, Customer Retention နဲ့
        Team Capacity ကိုပါ ထိန်းသိမ်းထားနိုင်ရပါမယ်။
        </p>

        <div class="lesson-example">
          <strong>Growth Rule</strong><br><br>
          Sales တိုး + Profit တိုး + Customer တိုး
          + Cash Flow ကောင်း = Healthy Business Growth
        </div>
      `,

      action: [
        "လက်ရှိ Revenue ကိုရေးပါ။",
        "နောက် 12 လ Growth Target သတ်မှတ်ပါ။",
        "Growth Strategy 3 ခုရွေးပါ။",
        "Action Plan ရေးပါ။",
        "Monthly KPI သတ်မှတ်ပါ။"
      ],

      quiz: [
        {
          q: "Business Growth ဆိုတာ Sales တိုးတာပဲလား?",
          a: "မဟုတ်ပါဘူး။ Revenue, Profit, Customer, Market Share နဲ့ Capacity တိုးတက်မှုတွေပါ ပါဝင်ပါတယ်။"
        },
        {
          q: "New Market Growth ဆိုတာဘာလဲ?",
          a: "Customer Segment၊ Geographic Area သို့မဟုတ် Channel အသစ်တွေကို ဝင်ရောက်ခြင်း ဖြစ်ပါတယ်။"
        }
      ]
    }

  ];


  /* =========================================================
     3. STORAGE
     ========================================================= */

  const STORAGE_KEY =
    "aung_business_academy_business_fundamentals_completed_v10";

  function getCompleted() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (error) {
      return [];
    }
  }

  function saveCompleted(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function isCompleted(id) {
    return getCompleted().includes(id);
  }

  function markCompleted(id) {
    const completed = getCompleted();

    if (!completed.includes(id)) {
      completed.push(id);
      saveCompleted(completed);
    }

    updateProgress();
    renderLessons();
  }


  /* =========================================================
     4. HTML ESCAPE
     ========================================================= */

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  /* =========================================================
     5. DYNAMIC CSS
     ========================================================= */

  function injectStyles() {

    if (document.getElementById("abaLongLessonStyles")) return;

    const style = document.createElement("style");

    style.id = "abaLongLessonStyles";

    style.textContent = `

      .aba-course-header{
        background:linear-gradient(135deg,#0f172a,#1e293b);
        color:#fff;
        border-radius:20px;
        padding:26px;
        margin-bottom:22px;
        box-shadow:0 12px 30px rgba(15,23,42,.15);
      }

      .aba-course-header-top{
        display:flex;
        align-items:center;
        gap:16px;
      }

      .aba-course-icon{
        width:58px;
        height:58px;
        border-radius:16px;
        background:rgba(255,255,255,.12);
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:30px;
        flex-shrink:0;
      }

      .aba-course-header h2{
        margin:0 0 5px;
        font-size:25px;
      }

      .aba-course-header p{
        margin:0;
        color:#cbd5e1;
        line-height:1.7;
      }

      .aba-course-progress{
        margin-top:20px;
      }

      .aba-progress-track{
        width:100%;
        height:9px;
        background:#334155;
        border-radius:99px;
        overflow:hidden;
      }

      .aba-progress-fill{
        height:100%;
        width:0%;
        background:#22c55e;
        border-radius:99px;
        transition:.3s ease;
      }

      .aba-progress-info{
        display:flex;
        justify-content:space-between;
        margin-top:8px;
        font-size:13px;
        color:#cbd5e1;
      }

      .aba-course-tools{
        display:flex;
        gap:10px;
        margin-bottom:20px;
        flex-wrap:wrap;
      }

      .aba-course-search{
        flex:1;
        min-width:220px;
        border:1px solid #e2e8f0;
        background:#fff;
        padding:13px 16px;
        border-radius:12px;
        outline:none;
        font-size:15px;
      }

      .aba-course-search:focus{
        border-color:#64748b;
        box-shadow:0 0 0 3px rgba(100,116,139,.12);
      }

      .aba-lesson-grid{
        display:grid;
        grid-template-columns:repeat(2,minmax(0,1fr));
        gap:16px;
      }

      .aba-lesson-card{
        background:#fff;
        border:1px solid #e2e8f0;
        border-radius:18px;
        padding:20px;
        cursor:pointer;
        transition:.2s ease;
        position:relative;
      }

      .aba-lesson-card:hover{
        transform:translateY(-2px);
        box-shadow:0 12px 28px rgba(15,23,42,.09);
        border-color:#cbd5e1;
      }

      .aba-lesson-card.completed{
        border-color:#86efac;
        background:#f0fdf4;
      }

      .aba-lesson-number{
        font-size:12px;
        color:#64748b;
        font-weight:700;
        margin-bottom:12px;
      }

      .aba-lesson-icon{
        font-size:30px;
        margin-bottom:10px;
      }

      .aba-lesson-card h3{
        margin:0 0 7px;
        color:#0f172a;
        font-size:18px;
      }

      .aba-lesson-burmese{
        color:#334155;
        font-size:15px;
        line-height:1.6;
        margin-bottom:13px;
      }

      .aba-lesson-meta{
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:12px;
        color:#64748b;
      }

      .aba-complete-badge{
        color:#15803d;
        font-weight:700;
      }

      .aba-lesson-empty{
        background:#fff;
        border:1px dashed #cbd5e1;
        padding:30px;
        border-radius:16px;
        text-align:center;
        color:#64748b;
        grid-column:1/-1;
      }

      .aba-modal-overlay{
        position:fixed;
        inset:0;
        background:rgba(2,6,23,.72);
        z-index:99999;
        display:none;
        align-items:center;
        justify-content:center;
        padding:18px;
      }

      .aba-modal-overlay.show{
        display:flex;
      }

      .aba-modal{
        width:min(920px,100%);
        max-height:92vh;
        background:#fff;
        border-radius:22px;
        overflow:hidden;
        box-shadow:0 25px 80px rgba(0,0,0,.28);
        display:flex;
        flex-direction:column;
      }

      .aba-modal-header{
        padding:20px 22px;
        background:#0f172a;
        color:#fff;
        display:flex;
        justify-content:space-between;
        gap:15px;
        align-items:flex-start;
      }

      .aba-modal-header h2{
        margin:0 0 5px;
        font-size:21px;
      }

      .aba-modal-header p{
        margin:0;
        color:#cbd5e1;
        font-size:14px;
      }

      .aba-modal-close{
        width:38px;
        height:38px;
        border:0;
        border-radius:10px;
        background:rgba(255,255,255,.1);
        color:#fff;
        font-size:22px;
        cursor:pointer;
        flex-shrink:0;
      }

      .aba-modal-body{
        overflow:auto;
        padding:25px;
      }

      .aba-lesson-content{
        color:#1e293b;
        line-height:1.9;
        font-size:15px;
      }

      .aba-lesson-content h3{
        margin:25px 0 10px;
        color:#0f172a;
        font-size:19px;
      }

      .aba-lesson-content h3:first-child{
        margin-top:0;
      }

      .aba-lesson-content p{
        margin:0 0 14px;
      }

      .aba-lesson-list{
        padding-left:20px;
      }

      .aba-lesson-list li{
        margin-bottom:7px;
      }

      .lesson-flow{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:8px;
        flex-wrap:wrap;
        margin:20px 0;
      }

      .lesson-flow div{
        background:#f1f5f9;
        border:1px solid #e2e8f0;
        padding:9px 12px;
        border-radius:10px;
        font-weight:700;
        font-size:13px;
      }

      .lesson-flow span{
        color:#64748b;
        font-weight:700;
      }

      .lesson-example{
        background:#f8fafc;
        border-left:4px solid #334155;
        padding:15px 17px;
        border-radius:10px;
        margin:18px 0;
      }

      .lesson-formula{
        background:#0f172a;
        color:#fff;
        padding:16px;
        border-radius:12px;
        text-align:center;
        font-weight:700;
        margin:18px 0;
        font-size:16px;
      }

      .aba-objective{
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:14px;
        padding:17px;
        margin-bottom:22px;
      }

      .aba-objective h3{
        margin:0 0 10px;
        font-size:17px;
      }

      .aba-action-box{
        background:#eff6ff;
        border:1px solid #bfdbfe;
        border-radius:14px;
        padding:18px;
        margin-top:25px;
      }

      .aba-action-box h3{
        margin-top:0;
      }

      .aba-quiz{
        margin-top:25px;
      }

      .aba-quiz-item{
        background:#f8fafc;
        border:1px solid #e2e8f0;
        border-radius:12px;
        padding:15px;
        margin-bottom:12px;
      }

      .aba-quiz-q{
        font-weight:700;
        margin-bottom:8px;
      }

      .aba-quiz-a{
        color:#475569;
      }

      .aba-modal-footer{
        border-top:1px solid #e2e8f0;
        padding:15px 20px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        gap:10px;
        background:#fff;
      }

      .aba-btn{
        border:0;
        border-radius:11px;
        padding:11px 16px;
        font-size:14px;
        font-weight:700;
        cursor:pointer;
      }

      .aba-btn-primary{
        background:#0f172a;
        color:#fff;
      }

      .aba-btn-success{
        background:#16a34a;
        color:#fff;
      }

      .aba-btn-light{
        background:#f1f5f9;
        color:#0f172a;
      }

      @media(max-width:700px){

        .aba-lesson-grid{
          grid-template-columns:1fr;
        }

        .aba-course-header{
          padding:20px;
          border-radius:16px;
        }

        .aba-course-header h2{
          font-size:21px;
        }

        .aba-modal-overlay{
          padding:0;
        }

        .aba-modal{
          height:100%;
          max-height:100%;
          border-radius:0;
        }

        .aba-modal-body{
          padding:18px;
        }

        .aba-modal-footer{
          padding:12px;
        }

        .aba-btn{
          padding:10px 12px;
        }
      }
    `;

    document.head.appendChild(style);
  }


  /* =========================================================
     6. FIND CONTAINER
     ========================================================= */

  function findContainer() {

    const possibleIds = [
      "lessons",
      "lessonSection",
      "lessonsSection",
      "courseLessons",
      "academyLessons",
      "lessonContainer",
      "mainContent"
    ];

    for (const id of possibleIds) {
      const el = document.getElementById(id);
      if (el) return el;
    }

    return null;
  }


  /* =========================================================
     7. RENDER COURSE
     ========================================================= */

  function renderCourse(container) {

    if (!container) return;

    injectStyles();

    container.innerHTML = "";

    const wrapper = document.createElement("div");

    wrapper.id = "aungBusinessFundamentalsCourse";

    wrapper.innerHTML = `

      <div class="aba-course-header">

        <div class="aba-course-header-top">

          <div class="aba-course-icon">
            ${COURSE.icon}
          </div>

          <div>
            <h2>
              ${escapeHTML(COURSE.title)}
            </h2>

            <p>
              ${escapeHTML(COURSE.burmeseTitle)}
              • ${COURSE.lessons} Lessons
              • ${escapeHTML(COURSE.level)}
            </p>
          </div>

        </div>

        <p style="margin-top:16px;">
          ${escapeHTML(COURSE.description)}
        </p>

        <div class="aba-course-progress">

          <div class="aba-progress-track">
            <div
              id="abaCourseProgressFill"
              class="aba-progress-fill"
            ></div>
          </div>

          <div class="aba-progress-info">
            <span id="abaCourseProgressText">
              0 / ${COURSE.lessons} completed
            </span>

            <span id="abaCourseProgressPercent">
              0%
            </span>
          </div>

        </div>

      </div>

      <div class="aba-course-tools">

        <input
          id="abaLessonSearch"
          class="aba-course-search"
          type="search"
          placeholder="🔍 သင်ခန်းစာရှာရန်..."
        />

      </div>

      <div
        id="abaLessonGrid"
        class="aba-lesson-grid"
      ></div>
    `;

    container.appendChild(wrapper);

    renderLessons();

    const search = document.getElementById("abaLessonSearch");

    if (search) {
      search.addEventListener("input", function () {
        renderLessons(this.value);
      });
    }

    updateProgress();
  }


  /* =========================================================
     8. RENDER LESSON CARDS
     ========================================================= */

  function renderLessons(searchText = "") {

    const grid = document.getElementById("abaLessonGrid");

    if (!grid) return;

    const search = String(searchText).trim().toLowerCase();

    const filtered = LESSONS.filter(function (lesson) {

      if (!search) return true;

      return (
        lesson.title.toLowerCase().includes(search) ||
        lesson.burmeseTitle.toLowerCase().includes(search)
      );
    });

    if (!filtered.length) {

      grid.innerHTML = `
        <div class="aba-lesson-empty">
          🔍 သင်ခန်းစာ မတွေ့ပါ။
        </div>
      `;

      return;
    }

    grid.innerHTML = filtered.map(function (lesson) {

      const completed = isCompleted(lesson.id);

      return `

        <div
          class="aba-lesson-card ${completed ? "completed" : ""}"
          onclick="window.AungBusinessAcademy.openLesson('${lesson.id}')"
        >

          <div class="aba-lesson-number">
            LESSON ${String(lesson.lessonNo).padStart(2, "0")}
          </div>

          <div class="aba-lesson-icon">
            ${lesson.icon}
          </div>

          <h3>
            ${escapeHTML(lesson.title)}
          </h3>

          <div class="aba-lesson-burmese">
            ${escapeHTML(lesson.burmeseTitle)}
          </div>

          <div class="aba-lesson-meta">

            <span>
              ⏱ ${escapeHTML(lesson.duration)}
            </span>

            <span class="aba-complete-badge">
              ${
                completed
                  ? "✓ ပြီးဆုံး"
                  : "မစတင်ရသေး"
              }
            </span>

          </div>

        </div>
      `;
    });
  }


  /* =========================================================
     9. PROGRESS
     ========================================================= */

  function updateProgress() {

    const completed = getCompleted();

    const count = LESSONS.filter(function (lesson) {
      return completed.includes(lesson.id);
    }).length;

    const percent = Math.round(
      (count / LESSONS.length) * 100
    );

    const fill =
      document.getElementById("abaCourseProgressFill");

    const text =
      document.getElementById("abaCourseProgressText");

    const percentEl =
      document.getElementById("abaCourseProgressPercent");

    if (fill) {
      fill.style.width = percent + "%";
    }

    if (text) {
      text.textContent =
        count + " / " + LESSONS.length + " completed";
    }

    if (percentEl) {
      percentEl.textContent = percent + "%";
    }
  }


  /* =========================================================
     10. MODAL
     ========================================================= */

  function createModal() {

    if (document.getElementById("aungProfessionalLessonModal")) {
      return;
    }

    const modal = document.createElement("div");

    modal.id = "aungProfessionalLessonModal";

    modal.className = "aba-modal-overlay";

    modal.innerHTML = `

      <div class="aba-modal">

        <div class="aba-modal-header">

          <div>

            <h2 id="abaModalTitle">
              Lesson
            </h2>

            <p id="abaModalSubtitle">
              Business Fundamentals
            </p>

          </div>

          <button
            class="aba-modal-close"
            onclick="window.AungBusinessAcademy.closeLesson()"
            aria-label="Close"
          >
            ×
          </button>

        </div>

        <div
          id="abaModalBody"
          class="aba-modal-body"
        ></div>

        <div class="aba-modal-footer">

          <button
            id="abaPreviousButton"
            class="aba-btn aba-btn-light"
          >
            ← Previous
          </button>

          <button
            id="abaCompleteButton"
            class="aba-btn aba-btn-success"
          >
            ✓ Mark Complete
          </button>

          <button
            id="abaNextButton"
            class="aba-btn aba-btn-primary"
          >
            Next →
          </button>

        </div>

      </div>
    `;

    document.body.appendChild(modal);

    modal.addEventListener("click", function (event) {

      if (event.target === modal) {
        closeLesson();
      }

    });

    document.addEventListener("keydown", function (event) {

      if (event.key === "Escape") {
        closeLesson();
      }

    });
  }


  /* =========================================================
     11. OPEN LESSON
     ========================================================= */

  let currentLessonId = null;

  function openLesson(id) {

    createModal();

    const lesson = LESSONS.find(function (item) {
      return item.id === id;
    });

    if (!lesson) return;

    currentLessonId = id;

    const modal =
      document.getElementById(
        "aungProfessionalLessonModal"
      );

    const title =
      document.getElementById("abaModalTitle");

    const subtitle =
      document.getElementById("abaModalSubtitle");

    const body =
      document.getElementById("abaModalBody");

    const completeButton =
      document.getElementById("abaCompleteButton");

    const previousButton =
      document.getElementById("abaPreviousButton");

    const nextButton =
      document.getElementById("abaNextButton");

    if (title) {
      title.textContent =
        "Lesson " +
        String(lesson.lessonNo).padStart(2, "0") +
        " — " +
        lesson.burmeseTitle;
    }

    if (subtitle) {
      subtitle.textContent =
        "Business Fundamentals • " +
        lesson.title +
        " • " +
        lesson.duration;
    }

    if (body) {

      const objectives = lesson.objective
        .map(function (item) {
          return `<li>${escapeHTML(item)}</li>`;
        })
        .join("");

      const actions = lesson.action
        .map(function (item) {
          return `<li>${escapeHTML(item)}</li>`;
        })
        .join("");

      const quiz = lesson.quiz
        .map(function (item, index) {
          return `
            <div class="aba-quiz-item">

              <div class="aba-quiz-q">
                ${index + 1}. ${escapeHTML(item.q)}
              </div>

              <div class="aba-quiz-a">
                <strong>အဖြေ:</strong>
                ${escapeHTML(item.a)}
              </div>

            </div>
          `;
        })
        .join("");

      body.innerHTML = `

        <div class="aba-objective">

          <h3>
            🎯 သင်ခန်းစာရည်ရွယ်ချက်
          </h3>

          <ul class="aba-lesson-list">
            ${objectives}
          </ul>

        </div>

        <div class="aba-lesson-content">

          ${lesson.content}

        </div>

        <div class="aba-action-box">

          <h3>
            📝 လက်တွေ့လေ့ကျင့်ခန်း
          </h3>

          <ol class="aba-lesson-list">
            ${actions}
          </ol>

        </div>

        <div class="aba-quiz">

          <h3>
            🧠 Knowledge Check
          </h3>

          ${quiz}

        </div>
      `;
    }

    if (completeButton) {

      const completed = isCompleted(id);

      completeButton.textContent =
        completed
          ? "✓ Completed"
          : "✓ Mark Complete";

      completeButton.disabled = completed;

      completeButton.style.opacity =
        completed ? "0.7" : "1";

      completeButton.onclick = function () {

        markCompleted(id);

        completeButton.textContent =
          "✓ Completed";

        completeButton.disabled = true;

        completeButton.style.opacity = "0.7";
      };
    }

    const index =
      LESSONS.findIndex(function (item) {
        return item.id === id;
      });

    if (previousButton) {

      previousButton.disabled = index <= 0;

      previousButton.style.opacity =
        index <= 0 ? "0.5" : "1";

      previousButton.onclick = function () {

        if (index > 0) {
          openLesson(
            LESSONS[index - 1].id
          );
        }

      };
    }

    if (nextButton) {

      nextButton.disabled =
        index >= LESSONS.length - 1;

      nextButton.style.opacity =
        index >= LESSONS.length - 1
          ? "0.5"
          : "1";

      nextButton.onclick = function () {

        if (index < LESSONS.length - 1) {
          openLesson(
            LESSONS[index + 1].id
          );
        }

      };
    }

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

    const modalBody =
      document.getElementById("abaModalBody");

    if (modalBody) {
      modalBody.scrollTop = 0;
    }
  }


  /* =========================================================
     12. CLOSE LESSON
     ========================================================= */

  function closeLesson() {

    const modal =
      document.getElementById(
        "aungProfessionalLessonModal"
      );

    if (modal) {
      modal.classList.remove("show");
    }

    document.body.style.overflow = "";

    currentLessonId = null;
  }


  /* =========================================================
     13. COURSE SUMMARY
     ========================================================= */

  function getCourseProgress() {

    const completed = getCompleted();

    const count = LESSONS.filter(function (lesson) {
      return completed.includes(lesson.id);
    }).length;

    return {
      total: LESSONS.length,
      completed: count,
      percent: Math.round(
        (count / LESSONS.length) * 100
      )
    };
  }


  /* =========================================================
     14. PUBLIC API
     ========================================================= */

  window.AungBusinessAcademy =
    window.AungBusinessAcademy || {};

  window.AungBusinessAcademy.COURSE =
    COURSE;

  window.AungBusinessAcademy.LESSONS =
    LESSONS;

  window.AungBusinessAcademy.openLesson =
    openLesson;

  window.AungBusinessAcademy.closeLesson =
    closeLesson;

  window.AungBusinessAcademy.markCompleted =
    markCompleted;

  window.AungBusinessAcademy.getCourseProgress =
    getCourseProgress;

  window.AungBusinessAcademy.renderBusinessFundamentals =
    function (container) {

      if (!container) {
        container = findContainer();
      }

      renderCourse(container);
    };


  /* =========================================================
     15. AUTO INITIALIZE
     ========================================================= */

  function initialize() {

    injectStyles();

    createModal();

    const container = findContainer();

    if (container) {
      renderCourse(container);
    }
  }


  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initialize
    );

  } else {

    initialize();

  }


})();
