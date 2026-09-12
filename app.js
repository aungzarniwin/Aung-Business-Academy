// ======================================================
// AUNG BUSINESS ACADEMY V8
// COMPLETE PROFESSIONAL BUSINESS ACADEMY
// 13 COURSES + EXISTING LESSONS PRESERVED
// Myanmar Lesson Edition
// ======================================================

const STORAGE_KEY = "aungBusinessAcademyV8";

// ======================================================
// COURSE DATA
// ======================================================

const COURSES = [

  // ====================================================
  // 01. SALES MANAGEMENT
  // ====================================================

  {
    id: "sales",
    title: "Sales Management Mastery",
    category: "sales",
    icon: "↗",
    color: "blue",
    description:
      "အရောင်းရည်မှန်းချက်၊ အရောင်းအဖွဲ့၊ နယ်မြေစီမံခန့်ခွဲမှုနှင့် လုပ်ဆောင်ရည်ကို ထိရောက်စွာ စီမံခန့်ခွဲနိုင်ရန် လေ့လာပါ။",

    lessons: [

      {
        title: "အရောင်းရည်မှန်းချက် စီမံခြင်း",
        content: `
          <p>
            အရောင်းရည်မှန်းချက်ဆိုတာ ကုမ္ပဏီက သတ်မှတ်ပေးထားတဲ့
            ရောင်းအားရလဒ်ကို အဖွဲ့နဲ့ လက်တွေ့အကောင်အထည်ဖော်နိုင်အောင်
            စီမံပေးခြင်းဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>လစဉ် Target ကို အပတ်စဉ်နှင့် နေ့စဉ် Target အဖြစ် ခွဲခြားပါ။</li>
            <li>Salesperson တစ်ဦးချင်းစီ၏ စွမ်းဆောင်ရည်အလိုက် Target ခွဲဝေပါ။</li>
            <li>နယ်မြေ၊ Customer Potential နှင့် ယခင်ရောင်းအားကို သုံးသပ်ပါ။</li>
            <li>Target နှင့် Actual ကို ပုံမှန်နှိုင်းယှဉ်ပါ။</li>
            <li>Gap ဖြစ်ရသည့် အကြောင်းရင်းကို ရှာဖွေပြီး Action Plan ချမှတ်ပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>
          <p>
            လစဉ် Target ကို ယူပြီး အပတ်စဉ် Target၊
            Salesperson တစ်ဦးချင်း Target နှင့်
            အဓိက Customer Target များအဖြစ် ခွဲရေးပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Target ဆိုတာ နံပါတ်တစ်ခုတည်းမဟုတ်ပါ။
              လူ၊ နံပါတ်နှင့် Field Execution သုံးခုကို တွဲဖက်စီမံရပါတယ်။
            </span>
          </div>
        `
      },

      {
        title: "အရောင်းအဖွဲ့ကို Coaching ပေးခြင်း",
        content: `
          <p>
            Sales Manager တစ်ယောက်အတွက် Coaching ဆိုတာ
            အဖွဲ့ဝင်ကို အမိန့်ပေးခြင်းထက် သူကိုယ်တိုင်
            ပြဿနာကို နားလည်ပြီး ဖြေရှင်းနိုင်အောင် လမ်းညွှန်ပေးခြင်းဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Salesperson ရဲ့ Result ကို အရင်စစ်ဆေးပါ။</li>
            <li>Field မှာ Customer နဲ့ ဘယ်လိုဆက်ဆံနေသလဲ လေ့လာပါ။</li>
            <li>Skill Gap နဲ့ Knowledge Gap ကို ခွဲခြားပါ။</li>
            <li>မှန်ကန်တဲ့နည်းလမ်းကို ကိုယ်တိုင်ပြပြီး လေ့ကျင့်စေပါ။</li>
            <li>Feedback ပေးပြီး နောက်တစ်ကြိမ် ပြန်စစ်ဆေးပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>
          <p>
            Underperforming Salesperson တစ်ဦးကို ရွေးပြီး
            သူ့ရဲ့ Target၊ Actual၊ Customer Coverage နဲ့
            Field Behavior ကို စစ်ဆေးပါ။
            ပြီးရင် တစ်ပတ်စာ Coaching Action Plan တစ်ခု ချမှတ်ပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              အဖြေကို ချက်ချင်းပေးမယ့်အစား မေးခွန်းမေးပြီး
              သူကိုယ်တိုင် အဖြေရှာနိုင်အောင် Coaching ပေးပါ။
            </span>
          </div>
        `
      },

      {
        title: "အရောင်းနယ်မြေ စီမံခန့်ခွဲခြင်း",
        content: `
          <p>
            Territory Management ဆိုတာ အရောင်းနယ်မြေအလိုက်
            Customer၊ Salesperson၊ Route နှင့် Resource များကို
            ထိရောက်စွာ ခွဲဝေစီမံခြင်းဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>နယ်မြေတစ်ခုချင်းစီရဲ့ Sales Potential ကို သုံးသပ်ပါ။</li>
            <li>Customer များကို အရေးပါမှုအလိုက် ခွဲခြားပါ။</li>
            <li>Customer Coverage နှင့် Visit Frequency သတ်မှတ်ပါ။</li>
            <li>Route Plan နှင့် PJP ကို စနစ်တကျ ပြုလုပ်ပါ။</li>
            <li>Competitor လှုပ်ရှားမှုကို ပုံမှန်စောင့်ကြည့်ပါ။</li>
            <li>အလားအလာမြင့်တဲ့ နယ်မြေကို Resource ပိုပေးပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>
          <p>
            မိမိတာဝန်ယူရတဲ့ နယ်မြေကို Customer Potential အလိုက်
            A, B, C အုပ်စုခွဲပြီး Visit Frequency သတ်မှတ်ပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Customer အားလုံးကို တူညီတဲ့အချိန်မပေးပါနဲ့။
              Potential မြင့်တဲ့ Customer နဲ့ နယ်မြေကို ဦးစားပေးပါ။
            </span>
          </div>
        `
      },

      {
        title: "လုပ်ဆောင်ရည် သုံးသပ်ခြင်း",
        content: `
          <p>
            Performance Review ဆိုတာ Target နဲ့ Actual ကို
            နှိုင်းယှဉ်ပြီး Gap ရဲ့ အကြောင်းရင်းကို ရှာဖွေကာ
            နောက်တစ်ဆင့် Action Plan ချမှတ်ခြင်းဖြစ်ပါတယ်။
          </p>

          <h4>စစ်ဆေးသင့်တဲ့ KPI များ</h4>
          <ul>
            <li>Sales Volume</li>
            <li>Revenue</li>
            <li>Target Achievement</li>
            <li>Customer Coverage</li>
            <li>Distribution</li>
            <li>AR / Collection</li>
            <li>Salesperson Productivity</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>
          <p>
            Target မပြည့်တဲ့ Salesperson တစ်ဦးကို ရွေးပြီး
            လူ၊ Customer၊ Product၊ နယ်မြေနှင့် Execution
            အပိုင်းတွေခွဲပြီး Root Cause ရှာပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Performance Review မှာ ခံစားချက်နဲ့ မဆုံးဖြတ်ဘဲ
              Data နဲ့ Fact ကို အခြေခံပြီး ဆုံးဖြတ်ပါ။
            </span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // 02. BUSINESS FOUNDATION
  // ====================================================

  {
    id: "business",
    title: "Business Foundation",
    category: "business",
    icon: "◆",
    color: "green",

    description:
      "စီးပွားရေးအခြေခံ၊ Customer Value၊ အမြတ်နှင့် ငွေကြေးလည်ပတ်မှုကို နားလည်စေရန် လေ့လာပါ။",

    lessons: [

      {
        title: "စီးပွားရေး အခြေခံသဘောတရားများ",
        content: `
          <p>
            စီးပွားရေးတစ်ခု အောင်မြင်ဖို့ Customer၊ Product၊
            Value၊ Revenue၊ Profit နှင့် Cash Flow တို့ကို
            တစ်ခုနဲ့တစ်ခု ချိတ်ဆက်နားလည်ဖို့ လိုပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Customer ဘယ်သူလဲဆိုတာ သိရမယ်။</li>
            <li>Customer အတွက် ဘာတန်ဖိုးပေးနိုင်လဲ သိရမယ်။</li>
            <li>Revenue ဘယ်လိုရလာသလဲ နားလည်ရမယ်။</li>
            <li>Cost နဲ့ Profit ကို စောင့်ကြည့်ရမယ်။</li>
            <li>Cash Flow ကို စနစ်တကျ ထိန်းချုပ်ရမယ်။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>
          <p>
            Customer → Product → Sales → Revenue →
            Cost → Profit ဆိုတဲ့ လုပ်ငန်းစီးကြောင်းကို
            စာရွက်ပေါ်မှာ ရေးဆွဲကြည့်ပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              ရောင်းအားတက်တာတစ်ခုတည်းနဲ့ Business ကောင်းတယ်လို့
              မဆိုနိုင်ပါဘူး။ Profit နဲ့ Cash Flow ကိုပါ ကြည့်ရပါတယ်။
            </span>
          </div>
        `
      },

      {
        title: "ဖောက်သည်နှင့် တန်ဖိုးဖန်တီးခြင်း",
        content: `
          <p>
            Customer တွေဟာ Product ကိုပဲ ဝယ်တာမဟုတ်ပါဘူး။
            သူတို့ရဲ့ လိုအပ်ချက်၊ ပြဿနာနဲ့ ရရှိမယ့်တန်ဖိုးကို
            ဖြေရှင်းပေးနိုင်တဲ့ Solution ကို ဝယ်ကြတာဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Customer လိုအပ်ချက်ကို နားထောင်ပါ။</li>
            <li>Customer ရဲ့ အဓိကပြဿနာကို ရှာပါ။</li>
            <li>Customer အုပ်စုများကို ခွဲခြားပါ။</li>
            <li>မိမိ Product ရဲ့ တန်ဖိုးကို ရှင်းပြပါ။</li>
            <li>Complaint များကို အမြန်ဖြေရှင်းပါ။</li>
            <li>Customer Relationship ကို ရေရှည်တည်ဆောက်ပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>
          <p>
            အဓိက Customer ၅ ယောက်ကို ရွေးပြီး
            သူတို့ရဲ့ အကြီးမားဆုံး Business Problem ကို ရေးပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Product ရောင်းဖို့ပဲ မကြိုးစားပါနဲ့။
              Customer ရဲ့ Business Problem ကို ဖြေရှင်းပေးပါ။
            </span>
          </div>
        `
      },

      {
        title: "အမြတ်နှင့် ငွေကြေးလည်ပတ်မှု",
        content: `
          <p>
            Revenue များတာနဲ့ Business က အမြတ်များတယ်လို့ မဆိုနိုင်ပါဘူး။
            Cost၊ Margin၊ Receivable နဲ့ Cash Flow ကိုလည်း
            Manager တစ်ယောက်အနေနဲ့ နားလည်ထားရပါမယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Revenue နဲ့ Profit ကို ခွဲခြားနားလည်ပါ။</li>
            <li>Gross Margin ကို စောင့်ကြည့်ပါ။</li>
            <li>Fixed Cost နဲ့ Variable Cost ကို ခွဲပါ။</li>
            <li>Customer Receivable ကို ထိန်းချုပ်ပါ။</li>
            <li>Stock များလွန်းခြင်းကို ရှောင်ပါ။</li>
            <li>Cash Inflow နဲ့ Cash Outflow ကို စောင့်ကြည့်ပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>
          <p>
            မိမိလုပ်ငန်းရဲ့ လစဉ် Revenue၊ Cost၊ Profit နဲ့
            Receivable ကို စာရင်းချပြီး ဘယ်နေရာမှာ
            ငွေကြေးပိတ်ဆို့နေလဲ ရှာပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              ရောင်းအားတက်ဖို့အရေးကြီးသလို ရောင်းရငွေကို
              အချိန်မီ ပြန်လည်ကောက်ခံနိုင်ဖို့လည်း အရေးကြီးပါတယ်။
            </span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // 03. MARKETING
  // ====================================================

  {
    id: "marketing",
    title: "Marketing & Growth",
    category: "marketing",
    icon: "◎",
    color: "orange",

    description:
      "Marketing အခြေခံ၊ Digital Growth နှင့် Campaign တိုင်းတာခြင်းကို လေ့လာပါ။",

    lessons: [

      {
        title: "Marketing အခြေခံများ",
        content: `
          <p>
            Marketing ဆိုတာ Product ကို ကြော်ငြာရုံတင်မဟုတ်ပါဘူး။
            Market၊ Customer၊ Positioning၊ Value Proposition နဲ့
            Competitive Advantage ကို နားလည်ပြီး Customer Demand
            ဖန်တီးခြင်းဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Target Customer ကို သတ်မှတ်ပါ။</li>
            <li>Market ကို လေ့လာပါ။</li>
            <li>Competitor ကို နားလည်ပါ။</li>
            <li>မိမိ Product ရဲ့ ထူးခြားချက်ကို သတ်မှတ်ပါ။</li>
            <li>Customer အတွက် Value Proposition တည်ဆောက်ပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>
          <p>
            မိမိ Product တစ်ခုကို ရွေးပြီး
            ဘယ်သူအတွက်လဲ၊ ဘာပြဿနာကို ဖြေရှင်းပေးလဲ၊
            ဘာကြောင့် ကျွန်တော်တို့ကို ရွေးသင့်လဲဆိုတာ ရေးပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Marketing က Customer ကို ဆွဲဆောင်ပြီး
              Sales က Demand ကို Business Result အဖြစ် ပြောင်းပေးပါတယ်။
            </span>
          </div>
        `
      },

      {
        title: "Digital ဖြင့် လုပ်ငန်းတိုးတက်စေခြင်း",
        content: `
          <p>
            Digital Channel များကို အသုံးပြုပြီး Customer Awareness၊
            Engagement၊ Lead Generation နှင့် Sales Conversion ကို
            တိုးတက်စေနိုင်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Customer ဘယ် Digital Channel ကို အသုံးများလဲ သိပါ။</li>
            <li>အသုံးဝင်တဲ့ Content ဖန်တီးပါ။</li>
            <li>Customer Engagement ကို တိုးတက်အောင်လုပ်ပါ။</li>
            <li>Lead ရရှိအောင် Call-to-Action ထည့်ပါ။</li>
            <li>Lead ကနေ Sales ဖြစ်လာမှုကို တိုင်းတာပါ။</li>
            <li>ရလဒ်ကောင်းတဲ့ Channel ကို ပိုမိုအာရုံစိုက်ပါ။</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>
          <p>
            Customer အုပ်စုတစ်ခုကို ရွေးပြီး တစ်ပတ်စာ Content
            အစီအစဉ်တစ်ခု ဆွဲပါ။ Content → Lead →
            Follow-up → Sale ဆိုတဲ့ လမ်းကြောင်းကို သတ်မှတ်ပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Content ရဲ့ ရည်ရွယ်ချက်က Like ရဖို့တင်မဟုတ်ပါဘူး။
              Customer ကို Lead နဲ့ Sale အဖြစ် ပြောင်းလဲနိုင်ဖို့ ဖြစ်ပါတယ်။
            </span>
          </div>
        `
      },

      {
        title: "Marketing Campaign တိုင်းတာခြင်း",
        content: `
          <p>
            Campaign တစ်ခုအောင်မြင်တယ် မအောင်မြင်ဘူးဆိုတာ
            ခံစားချက်နဲ့ မဆုံးဖြတ်ဘဲ Data နဲ့ တိုင်းတာရပါတယ်။
          </p>

          <h4>စောင့်ကြည့်သင့်တဲ့ KPI များ</h4>
          <ul>
            <li>Reach</li>
            <li>Engagement</li>
            <li>Leads</li>
            <li>Conversion</li>
            <li>Customer Acquisition Cost</li>
            <li>Revenue Contribution</li>
            <li>Return on Investment</li>
          </ul>

          <h4>လက်တွေ့လုပ်ဆောင်ရန်</h4>
          <p>
            Campaign တစ်ခုအတွက် Objective တစ်ခုသတ်မှတ်ပြီး
            KPI ၃ ခုမှ ၅ ခုအထိ ရွေးပါ။
          </p>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Like နဲ့ View အရေအတွက်တစ်ခုတည်း မကြည့်ပါနဲ့။
              Lead၊ Conversion နဲ့ Revenue ကိုပါ ကြည့်ပါ။
            </span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // 04. LEADERSHIP
  // ====================================================

  {
    id: "leadership",
    title: "Leadership & Team Management",
    category: "leadership",
    icon: "★",
    color: "purple",

    description:
      "ခေါင်းဆောင်မှု၊ Coaching၊ Empowerment၊ Accountability နှင့် Team Motivation ကို လေ့လာပါ။",

    lessons: [

      {
        title: "ခေါင်းဆောင်မှု အခြေခံများ",
        content: `
          <p>
            Leadership ဆိုတာ ရာထူးရှိခြင်းတစ်ခုတည်း မဟုတ်ပါဘူး။
            လူတွေကို ဦးတည်ချက်ပေးခြင်း၊ ရည်မှန်းချက်ရှင်းလင်းပေးခြင်း၊
            တာဝန်ယူမှုရှိစေခြင်းနဲ့ ယုံကြည်မှုတည်ဆောက်ခြင်း ဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Team အတွက် ရည်မှန်းချက်ရှင်းလင်းစွာ သတ်မှတ်ပါ။</li>
            <li>Expectation ကို အစကတည်းက ရှင်းပြပါ။</li>
            <li>တာဝန်နဲ့ Ownership ကို ခွဲခြားပေးပါ။</li>
            <li>Communication ကို ပုံမှန်ပြုလုပ်ပါ။</li>
            <li>Data နဲ့ Fact ကို အသုံးပြုပါ။</li>
            <li>ကိုယ်တိုင် စံနမူနာကောင်း ပြပါ။</li>
          </ul>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              ကောင်းမွန်တဲ့ Leader တစ်ယောက်ဟာ လူတွေကို ဖိအားပေးတာထက်
              Direction နဲ့ Clarity ပေးနိုင်ရပါတယ်။
            </span>
          </div>
        `
      },

      {
        title: "Coaching နှင့် လုပ်ပိုင်ခွင့်ပေးခြင်း",
        content: `
          <p>
            ကောင်းမွန်တဲ့ Manager တစ်ယောက်ဟာ အရာအားလုံးကို
            ကိုယ်တိုင်ထိန်းချုပ်မနေဘဲ Team Member တွေကို
            ဆုံးဖြတ်နိုင်၊ ပြဿနာဖြေရှင်းနိုင်အောင် လုပ်ပိုင်ခွင့်ပေးပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>အလုပ်အားလုံးကို ကိုယ်တိုင် မလုပ်ပါနဲ့။</li>
            <li>Team Member ရဲ့ အားသာချက်ကို သိပါ။</li>
            <li>တာဝန်ကို ရှင်းလင်းစွာ လွှဲအပ်ပါ။</li>
            <li>Decision Making အတွက် လုပ်ပိုင်ခွင့်ပေးပါ။</li>
            <li>Result အတွက် Accountability ထားပါ။</li>
            <li>Feedback နဲ့ Coaching ကို ပုံမှန်ပေးပါ။</li>
          </ul>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Micromanagement မလုပ်ပါနဲ့။ Direction ပေးပြီး
              Ownership နဲ့ Accountability ကို Team ကို ပေးပါ။
            </span>
          </div>
        `
      },

      {
        title: "လုပ်ဆောင်ရည် စီမံခန့်ခွဲခြင်း",
        content: `
          <p>
            Performance Management ဆိုတာ တစ်နှစ်တစ်ခါ Review လုပ်တာမဟုတ်ပါဘူး။
            KPI၊ Regular Review၊ Feedback၊ Coaching နဲ့
            Development Plan တွေကို ဆက်တိုက်လုပ်ဆောင်ခြင်း ဖြစ်ပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>KPI ကို ရှင်းလင်းစွာ သတ်မှတ်ပါ။</li>
            <li>Target နဲ့ Actual ကို ပုံမှန်စစ်ပါ။</li>
            <li>Performance Gap ကို အမြန်ရှာပါ။</li>
            <li>Root Cause ကို လေ့လာပါ။</li>
            <li>Development Plan ချမှတ်ပါ။</li>
            <li>ကောင်းမွန်တဲ့ Performance ကို Recognition ပေးပါ။</li>
          </ul>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Performance Management ကို ပြဿနာဖြစ်တဲ့အချိန်မှ စမလုပ်ဘဲ
              နေ့စဉ်နဲ့ အပတ်စဉ် အလေ့အကျင့်တစ်ခုအဖြစ် လုပ်ပါ။
            </span>
          </div>
        `
      },

      {
        title: "အဖွဲ့အား တက်ကြွစေခြင်း",
        content: `
          <p>
            Team Motivation ဆိုတာ လစာနဲ့ Bonus ပေးရုံနဲ့ မပြီးပါဘူး။
            ရည်မှန်းချက်၊ အသိအမှတ်ပြုမှု၊ တိုးတက်ခွင့်၊
            တရားမျှတမှုနဲ့ ယုံကြည်မှုတွေကလည်း အရေးကြီးပါတယ်။
          </p>

          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Team ရဲ့ ရည်မှန်းချက်ကို ရှင်းလင်းစွာ ပြောပြပါ။</li>
            <li>ကောင်းမွန်တဲ့ Performance ကို အသိအမှတ်ပြုပါ။</li>
            <li>တိုးတက်နိုင်မယ့် အခွင့်အရေးပေးပါ။</li>
            <li>လူတိုင်းကို တရားမျှတစွာ ဆက်ဆံပါ။</li>
            <li>Team အတွင်း Communication ကောင်းအောင်လုပ်ပါ။</li>
            <li>တစ်ဦးချင်းစီရဲ့ Motivation Driver ကို နားလည်ပါ။</li>
          </ul>

          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>
              Motivation ရှိတဲ့ Team တစ်ခုအတွက်
              Clarity၊ Fairness နဲ့ Recognition သုံးခုကို အမြဲထိန်းထားပါ။
            </span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // 05. FINANCE MANAGEMENT
  // ====================================================

  {
    id: "finance",
    title: "Finance Management",
    category: "finance",
    icon: "₿",
    color: "teal",

    description:
      "Manager တစ်ယောက်အနေနဲ့ Revenue၊ Cost၊ Profit၊ Margin၊ Budget နှင့် Cash Flow ကို နားလည်စီမံနိုင်ရန် လေ့လာပါ။",

    lessons: [

      {
        title: "Revenue နှင့် Profit Management",
        content: `
          <p>
            Business Manager တစ်ယောက်အနေနဲ့ ရောင်းအားတက်တာနဲ့
            အမြတ်တက်တာ မတူကြောင်း နားလည်ထားရပါမယ်။
          </p>
          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Revenue ကို မှန်ကန်စွာတွက်ချက်ပါ။</li>
            <li>Cost of Goods ကို စောင့်ကြည့်ပါ။</li>
            <li>Gross Profit နှင့် Net Profit ကို ခွဲခြားပါ။</li>
            <li>Margin ကျဆင်းရတဲ့ အကြောင်းရင်းရှာပါ။</li>
            <li>Profitability အပေါ် Product Mix သက်ရောက်မှုကို ကြည့်ပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Sales Volume တိုးဖို့သာမက Profit Quality ကိုပါ စီမံပါ။</span>
          </div>
        `
      },

      {
        title: "Budget နှင့် Cost Control",
        content: `
          <p>
            Budget ဆိုတာ ငွေသုံးစွဲဖို့ စာရင်းရေးထားခြင်းသာမက
            Business Priority အလိုက် Resource ခွဲဝေပေးတဲ့ Management Tool ဖြစ်ပါတယ်။
          </p>
          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Fixed Cost နှင့် Variable Cost ခွဲပါ။</li>
            <li>Monthly Budget သတ်မှတ်ပါ။</li>
            <li>Actual Spending ကို Budget နှင့် နှိုင်းယှဉ်ပါ။</li>
            <li>မလိုအပ်တဲ့ Cost များကို လျှော့ချပါ။</li>
            <li>Cost Reduction က Customer Value ကို မထိခိုက်စေဖို့ သတိထားပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>ကုန်ကျစရိတ်လျှော့တာထက် Value မဖန်တီးတဲ့ Cost ကို လျှော့ပါ။</span>
          </div>
        `
      },

      {
        title: "Cash Flow Management",
        content: `
          <p>
            Profit ရှိပေမယ့် Cash မရှိနိုင်ပါတယ်။
            ဒါကြောင့် Cash Inflow၊ Cash Outflow နှင့် Receivable ကို
            Manager တစ်ယောက်က စောင့်ကြည့်ရပါမယ်။
          </p>
          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Customer Collection ကို စီမံပါ။</li>
            <li>Receivable Aging ကို စစ်ပါ။</li>
            <li>Supplier Payment ကို စီမံပါ။</li>
            <li>Stock မှာ ငွေပိတ်မနေစေပါနဲ့။</li>
            <li>Cash Forecast ပြုလုပ်ပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Cash Flow မကောင်းရင် Profit ရှိနေသော်လည်း Business အခက်အခဲဖြစ်နိုင်ပါတယ်။</span>
          </div>
        `
      },

      {
        title: "Financial KPI နှင့် Management Report",
        content: `
          <p>
            Manager တစ်ယောက်အတွက် Financial Report ကို Accountant အလုပ်အဖြစ်သာ
            မမြင်ဘဲ Decision Making အတွက် အသုံးချရပါမယ်။
          </p>
          <h4>စောင့်ကြည့်ရန်</h4>
          <ul>
            <li>Revenue Growth</li>
            <li>Gross Margin</li>
            <li>Operating Cost</li>
            <li>Net Profit</li>
            <li>Receivable</li>
            <li>Cash Flow</li>
            <li>Budget vs Actual</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Financial KPI တစ်ခုချင်းစီက ဘယ် Management Decision ကို သက်ရောက်သလဲ စဉ်းစားပါ။</span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // 06. HR MANAGEMENT
  // ====================================================

  {
    id: "hr",
    title: "HR Management",
    category: "hr",
    icon: "♟",
    color: "pink",

    description:
      "Recruitment၊ Training၊ Performance Management၊ Employee Engagement နှင့် Talent Development ကို လေ့လာပါ။",

    lessons: [

      {
        title: "Recruitment နှင့် Talent Selection",
        content: `
          <p>
            လူမှန်နေရာမှန် ရွေးချယ်ခြင်းက Team Performance အတွက် အခြေခံဖြစ်ပါတယ်။
          </p>
          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Job Description ကို ရှင်းလင်းစွာ သတ်မှတ်ပါ။</li>
            <li>Competency နဲ့ Experience ကို သတ်မှတ်ပါ။</li>
            <li>Interview ကို Structured ဖြစ်အောင်လုပ်ပါ။</li>
            <li>Technical Skill နဲ့ Attitude နှစ်ခုလုံးစစ်ပါ။</li>
            <li>Role Fit ကို အကဲဖြတ်ပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>လူတစ်ယောက်ကို CV ကောင်းလို့သာ မရွေးဘဲ Role Fit နဲ့ Potential ကိုပါ ကြည့်ပါ။</span>
          </div>
        `
      },

      {
        title: "Training နှင့် Employee Development",
        content: `
          <p>
            Training ရဲ့ ရည်ရွယ်ချက်က သင်တန်းတက်ပြီး Certificate ရဖို့မဟုတ်ဘဲ
            အလုပ်လုပ်ဆောင်ရည် တိုးတက်စေဖို့ ဖြစ်ပါတယ်။
          </p>
          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Skill Gap ရှာပါ။</li>
            <li>Training Need Analysis ပြုလုပ်ပါ။</li>
            <li>Practical Training ထည့်ပါ။</li>
            <li>Coaching နဲ့ Follow-up ပြုလုပ်ပါ။</li>
            <li>Training Result ကို KPI နဲ့ တိုင်းတာပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Training ပြီးတာနဲ့ မပြီးပါဘူး။ Field မှာ အသုံးချနိုင်မှုကို စစ်ပါ။</span>
          </div>
        `
      },

      {
        title: "Employee Performance Management",
        content: `
          <p>
            Employee Performance Management မှာ Expectation၊ KPI၊ Review၊
            Feedback နှင့် Development Plan တို့ကို ဆက်စပ်စီမံရပါတယ်။
          </p>
          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>KPI ကို measurable ဖြစ်အောင် သတ်မှတ်ပါ။</li>
            <li>Regular One-on-One Review ပြုလုပ်ပါ။</li>
            <li>Performance Gap ကို စောစီးစွာ ရှာပါ။</li>
            <li>Improvement Plan ပြုလုပ်ပါ။</li>
            <li>Good Performance ကို Recognition ပေးပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Annual Review ထက် Continuous Feedback က ပိုထိရောက်ပါတယ်။</span>
          </div>
        `
      },

      {
        title: "Employee Engagement နှင့် Retention",
        content: `
          <p>
            Employee Retention က Salary တစ်ခုတည်းပေါ် မူတည်တာမဟုတ်ပါဘူး။
            Leadership၊ Growth၊ Recognition၊ Fairness နဲ့ Work Environment က အရေးကြီးပါတယ်။
          </p>
          <h4>အဓိကအချက်များ</h4>
          <ul>
            <li>Employee Feedback နားထောင်ပါ။</li>
            <li>Career Growth Path ရှင်းပြပါ။</li>
            <li>Recognition System ထားပါ။</li>
            <li>Manager-Employee Trust တည်ဆောက်ပါ။</li>
            <li>High Performer များကို ထိန်းသိမ်းပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>လူတွေကို ထိန်းသိမ်းချင်ရင် သူတို့ရဲ့ အနာဂတ်တိုးတက်မှုကို ပြသပေးပါ။</span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // 07. STRATEGIC MANAGEMENT
  // ====================================================

  {
    id: "strategy",
    title: "Strategic Management",
    category: "strategy",
    icon: "◇",
    color: "indigo",

    description:
      "Business Strategy၊ SWOT၊ Competitive Strategy၊ Market Opportunity နှင့် Strategic Decision Making ကို လေ့လာပါ။",

    lessons: [

      {
        title: "Business Strategy အခြေခံ",
        content: `
          <p>
            Strategy ဆိုတာ လုပ်စရာအလုပ်တွေစာရင်းမဟုတ်ဘဲ
            ဘယ်နေရာမှာ ယှဉ်ပြိုင်မလဲ၊ ဘယ်လိုအနိုင်ရမလဲဆိုတာ သတ်မှတ်ခြင်းဖြစ်ပါတယ်။
          </p>
          <ul>
            <li>Vision နှင့် Mission သတ်မှတ်ပါ။</li>
            <li>Target Market ရွေးပါ။</li>
            <li>Competitive Advantage သတ်မှတ်ပါ။</li>
            <li>Strategic Priorities သတ်မှတ်ပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Strategy က Focus ကို ဖန်တီးပေးပါတယ်။ အရာအားလုံးကို တစ်ပြိုင်နက် မလုပ်ပါနဲ့။</span>
          </div>
        `
      },

      {
        title: "SWOT နှင့် Market Analysis",
        content: `
          <p>
            Market Strategy ချမှတ်ရာမှာ မိမိရဲ့ Strength၊ Weakness၊
            Opportunity နဲ့ Threat ကို နားလည်ရပါမယ်။
          </p>
          <ul>
            <li>Strengths ကို ရှာပါ။</li>
            <li>Weaknesses ကို သတ်မှတ်ပါ။</li>
            <li>Market Opportunities ကို ရှာပါ။</li>
            <li>Competitor Threats ကို သုံးသပ်ပါ။</li>
            <li>SWOT ကို Action Plan အဖြစ် ပြောင်းပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>SWOT ကို စာရင်းရေးရုံနဲ့ မပြီးဘဲ SO, WO, ST, WT Strategy ထုတ်ပါ။</span>
          </div>
        `
      },

      {
        title: "Competitive Strategy",
        content: `
          <p>
            Competitor ကို သိရုံနဲ့ မလုံလောက်ပါဘူး။
            Customer က ဘာကြောင့် မိမိကို ရွေးသင့်သလဲဆိုတဲ့
            Competitive Advantage ကို တည်ဆောက်ရပါမယ်။
          </p>
          <ul>
            <li>Competitor Product ကို နှိုင်းယှဉ်ပါ။</li>
            <li>Price Positioning ကို စစ်ပါ။</li>
            <li>Distribution Strength ကို ကြည့်ပါ။</li>
            <li>Brand Strength ကို သုံးသပ်ပါ။</li>
            <li>Customer Experience ကို တိုးတက်စေပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>ပြိုင်ဘက်ကို copy မလုပ်ဘဲ Customer အတွက် ပိုကောင်းတဲ့ Value တည်ဆောက်ပါ။</span>
          </div>
        `
      },

      {
        title: "Strategic Decision Making",
        content: `
          <p>
            Manager တစ်ယောက်ရဲ့ အရေးကြီးဆုံးတာဝန်တစ်ခုက
            Data နဲ့ Risk ကို သုံးသပ်ပြီး အချိန်မှန် Decision ချမှတ်နိုင်ခြင်း ဖြစ်ပါတယ်။
          </p>
          <ul>
            <li>Problem ကို ရှင်းလင်းစွာ သတ်မှတ်ပါ။</li>
            <li>Data စုဆောင်းပါ။</li>
            <li>Alternative များ ပြုလုပ်ပါ။</li>
            <li>Risk နဲ့ Benefit ကို နှိုင်းယှဉ်ပါ။</li>
            <li>Decision ပြီးရင် Result ကို Review လုပ်ပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Decision မချခင် Data ကြည့်ပါ။ Decision ချပြီးရင် Result ကြည့်ပါ။</span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // 08. CUSTOMER & KEY ACCOUNT
  // ====================================================

  {
    id: "keyaccount",
    title: "Customer & Key Account Management",
    category: "customer",
    icon: "◎",
    color: "cyan",

    description:
      "Key Customer များကို စနစ်တကျ စီမံပြီး ရောင်းအား၊ Relationship နှင့် Long-term Business Value တိုးတက်အောင် လေ့လာပါ။",

    lessons: [

      {
        title: "Customer Segmentation",
        content: `
          <p>Customer အားလုံးကို တူညီစွာ မစီမံသင့်ပါဘူး။ Potential နှင့် Value အလိုက် Segment ခွဲရပါမယ်။</p>
          <ul>
            <li>A/B/C Customer Classification</li>
            <li>Sales Potential</li>
            <li>Profitability</li>
            <li>Growth Opportunity</li>
            <li>Strategic Importance</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>High-value Customer တွေကို Resource ပိုမိုအာရုံစိုက်ပါ။</span>
          </div>
        `
      },

      {
        title: "Key Account Planning",
        content: `
          <p>Key Account Plan ဆိုတာ Customer တစ်ဦးချင်းစီအတွက် Growth Opportunity နဲ့ Action Plan တည်ဆောက်ခြင်းဖြစ်ပါတယ်။</p>
          <ul>
            <li>Customer Business Profile</li>
            <li>Current Sales</li>
            <li>Potential Sales</li>
            <li>Decision Makers</li>
            <li>Competitor Position</li>
            <li>Growth Action Plan</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Customer ကို Order ရဖို့သာ မတွေ့ဘဲ Customer Business ကို တိုးတက်အောင် ကူညီပါ။</span>
          </div>
        `
      },

      {
        title: "Customer Relationship Management",
        content: `
          <p>ရေရှည် Customer Relationship က Trust၊ Consistency၊ Communication နဲ့ Problem Solving ပေါ်မှာ တည်ဆောက်ထားတာပါ။</p>
          <ul>
            <li>Regular Customer Visit</li>
            <li>Business Review</li>
            <li>Complaint Resolution</li>
            <li>Follow-up</li>
            <li>Relationship Mapping</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Customer ပြဿနာကို မြန်မြန်ဖြေရှင်းနိုင်ခြင်းက Relationship ကို ပိုခိုင်မာစေပါတယ်။</span>
          </div>
        `
      },

      {
        title: "Customer Growth Strategy",
        content: `
          <p>Customer Growth ကို New Customer ရှာခြင်းတစ်ခုတည်းနဲ့ မစဉ်းစားဘဲ Existing Customer မှာ Share of Wallet တိုးဖို့လည်း စဉ်းစားပါ။</p>
          <ul>
            <li>Cross-selling</li>
            <li>Upselling</li>
            <li>New Product Introduction</li>
            <li>Volume Growth</li>
            <li>Customer Retention</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>ရှိပြီးသား Customer ကို တိုးတက်စေခြင်းက Customer အသစ်ရှာခြင်းထက် ပိုထိရောက်နိုင်ပါတယ်။</span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // 09. DISTRIBUTION & SUPPLY CHAIN
  // ====================================================

  {
    id: "distribution",
    title: "Distribution & Supply Chain",
    category: "distribution",
    icon: "▣",
    color: "lime",

    description:
      "Distributor Management၊ Route-to-Market၊ Inventory နှင့် Supply Chain Execution ကို လေ့လာပါ။",

    lessons: [

      {
        title: "Distributor Management",
        content: `
          <p>Distributor က Sales Channel တစ်ခုသာမက Market Execution Partner တစ်ခုဖြစ်ပါတယ်။</p>
          <ul>
            <li>Distributor Sales Target</li>
            <li>Stock Level</li>
            <li>Collection</li>
            <li>Coverage</li>
            <li>Team Productivity</li>
            <li>Business Review</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Distributor ကို Order ယူတဲ့ Partner အဖြစ်မဟုတ်ဘဲ Growth Partner အဖြစ် စီမံပါ။</span>
          </div>
        `
      },

      {
        title: "Route-to-Market Strategy",
        content: `
          <p>Product ကို Customer ထံ အချိန်မှန်၊ နေရာမှန်နဲ့ ထိရောက်တဲ့ Cost ဖြင့် ရောက်ရှိစေဖို့ Route-to-Market Strategy လိုအပ်ပါတယ်။</p>
          <ul>
            <li>Direct Distribution</li>
            <li>Indirect Distribution</li>
            <li>Wholesaler</li>
            <li>Retail</li>
            <li>Modern Trade</li>
            <li>Digital / Online Channel</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Channel တစ်ခုချင်းစီရဲ့ Cost နဲ့ Potential ကို နှိုင်းယှဉ်ပြီး Resource ခွဲပါ။</span>
          </div>
        `
      },

      {
        title: "Inventory Management",
        content: `
          <p>Stock မလုံလောက်ရင် Sales ဆုံးရှုံးနိုင်ပြီး Stock များလွန်းရင် Cash ပိတ်နိုင်ပါတယ်။</p>
          <ul>
            <li>Stock Cover</li>
            <li>Fast / Slow Moving Products</li>
            <li>Reorder Level</li>
            <li>Stock Aging</li>
            <li>Inventory Accuracy</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Stock ကို Volume အဖြစ်သာ မကြည့်ဘဲ Cash အဖြစ်လည်း ကြည့်ပါ။</span>
          </div>
        `
      },

      {
        title: "Supply Chain Performance",
        content: `
          <p>Supply Chain က Sales Result ကို တိုက်ရိုက်သက်ရောက်နိုင်ပါတယ်။ Availability မရှိရင် Demand ရှိလည်း Sales မဖြစ်နိုင်ပါဘူး။</p>
          <ul>
            <li>Forecasting</li>
            <li>Availability</li>
            <li>Order Fulfillment</li>
            <li>Delivery Performance</li>
            <li>Stock Accuracy</li>
            <li>Cost Efficiency</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Sales၊ Supply Chain နဲ့ Finance သုံးခုကို ချိတ်ဆက်စီမံပါ။</span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // 10. DATA & KPI
  // ====================================================

  {
    id: "data",
    title: "Data & KPI Management",
    category: "data",
    icon: "▥",
    color: "violet",

    description:
      "Business Data၊ KPI Dashboard၊ Performance Analysis နှင့် Data-driven Decision Making ကို လေ့လာပါ။",

    lessons: [

      {
        title: "KPI အခြေခံများ",
        content: `
          <p>KPI ဆိုတာ Business Result ကို တိုင်းတာနိုင်တဲ့ အဓိက Performance Indicator ဖြစ်ပါတယ်။</p>
          <ul>
            <li>Sales KPI</li>
            <li>Revenue KPI</li>
            <li>Distribution KPI</li>
            <li>Productivity KPI</li>
            <li>Customer KPI</li>
            <li>Financial KPI</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>KPI များလွန်းရင် Focus ပျောက်နိုင်ပါတယ်။ အရေးကြီးဆုံး KPI ကို ရွေးပါ။</span>
          </div>
        `
      },

      {
        title: "Sales Data Analysis",
        content: `
          <p>Sales Data ကို ကြည့်တဲ့အခါ Number ကိုသာ မကြည့်ဘဲ Trend၊ Gap နဲ့ Root Cause ကို ရှာရပါမယ်။</p>
          <ul>
            <li>Target vs Actual</li>
            <li>Growth vs Previous Period</li>
            <li>Product Performance</li>
            <li>Territory Performance</li>
            <li>Customer Performance</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Data က ဘာဖြစ်နေတယ်ဆိုတာ ပြောပေးပြီး Analysis က ဘာကြောင့်ဖြစ်တယ်ဆိုတာ ရှာပေးပါတယ်။</span>
          </div>
        `
      },

      {
        title: "Dashboard နှင့် Management Report",
        content: `
          <p>ကောင်းမွန်တဲ့ Dashboard က Manager ကို အရေးကြီးတဲ့ Information ကို မြန်မြန်မြင်နိုင်စေပါတယ်။</p>
          <ul>
            <li>Sales Summary</li>
            <li>Target Achievement</li>
            <li>Top / Bottom Performance</li>
            <li>Trend</li>
            <li>Key Issues</li>
            <li>Action Plan</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Dashboard ကို လှဖို့ထက် Decision ချနိုင်ဖို့ တည်ဆောက်ပါ။</span>
          </div>
        `
      },

      {
        title: "Data-driven Decision Making",
        content: `
          <p>Data-driven Management ဆိုတာ ခံစားချက်ထက် Evidence ကို အခြေခံပြီး ဆုံးဖြတ်ခြင်းဖြစ်ပါတယ်။</p>
          <ul>
            <li>Fact စုဆောင်းပါ။</li>
            <li>Trend ရှာပါ။</li>
            <li>Gap သတ်မှတ်ပါ။</li>
            <li>Root Cause ရှာပါ။</li>
            <li>Action Plan ချပါ။</li>
            <li>Result ကို ပြန်တိုင်းပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Data ကို Report အဖြစ်မထားဘဲ Action အဖြစ် ပြောင်းလဲပါ။</span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // 11. NEGOTIATION & COMMUNICATION
  // ====================================================

  {
    id: "negotiation",
    title: "Negotiation & Communication",
    category: "communication",
    icon: "↔",
    color: "red",

    description:
      "Business Communication၊ Negotiation၊ Presentation နှင့် Conflict Management Skills ကို လေ့လာပါ။",

    lessons: [

      {
        title: "Business Communication",
        content: `
          <p>Manager တစ်ယောက်အတွက် Communication က Information ပေးခြင်းထက် နားလည်မှုနဲ့ Action ဖြစ်အောင် ဆောင်ရွက်ပေးနိုင်ခြင်း ဖြစ်ပါတယ်။</p>
          <ul>
            <li>Clear Message</li>
            <li>Active Listening</li>
            <li>Right Channel</li>
            <li>Feedback</li>
            <li>Follow-up</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>ပြောပြီးပြီလို့ မယူဆပါနဲ့။ တစ်ဖက်လူ နားလည်ပြီး Action လုပ်နိုင်ပြီလား စစ်ပါ။</span>
          </div>
        `
      },

      {
        title: "Negotiation Skills",
        content: `
          <p>Negotiation က ကိုယ့်ဘက်က အမြဲအနိုင်ရဖို့မဟုတ်ဘဲ နှစ်ဖက်လုံးအတွက် အကျိုးရှိတဲ့ သဘောတူညီချက် ရှာဖို့ဖြစ်ပါတယ်။</p>
          <ul>
            <li>Prepare Before Negotiation</li>
            <li>Understand Customer Need</li>
            <li>Know Your Minimum Position</li>
            <li>Focus on Value</li>
            <li>Build Win-Win Agreement</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Price တစ်ခုတည်းနဲ့ Negotiation မလုပ်ဘဲ Value၊ Service နဲ့ Terms ကိုပါ အသုံးပြုပါ။</span>
          </div>
        `
      },

      {
        title: "Presentation Skills",
        content: `
          <p>Business Presentation က Information အများကြီးပြောခြင်းထက် Decision Maker နားလည်ပြီး ဆုံးဖြတ်နိုင်အောင် တင်ပြခြင်း ဖြစ်ပါတယ်။</p>
          <ul>
            <li>Clear Objective</li>
            <li>Simple Structure</li>
            <li>Relevant Data</li>
            <li>Key Message</li>
            <li>Clear Recommendation</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Presentation တစ်ခုမှာ “ဘာဖြစ်နေသလဲ၊ ဘာကြောင့်လဲ၊ ဘာလုပ်သင့်လဲ” သုံးခုရှင်းရပါမယ်။</span>
          </div>
        `
      },

      {
        title: "Conflict Management",
        content: `
          <p>Conflict ကို ရှောင်တာထက် Root Cause ကို ရှာပြီး Professional ဖြစ်အောင် ဖြေရှင်းနိုင်ရပါမယ်။</p>
          <ul>
            <li>Listen to Both Sides</li>
            <li>Separate Fact from Emotion</li>
            <li>Identify Root Cause</li>
            <li>Agree on Solution</li>
            <li>Follow-up</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>လူကို မတိုက်ခိုက်ဘဲ ပြဿနာကို ဖြေရှင်းပါ။</span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // 12. DIGITAL BUSINESS & AI
  // ====================================================

  {
    id: "digital",
    title: "Digital Business & AI",
    category: "digital",
    icon: "AI",
    color: "cyan",

    description:
      "Digital Business၊ AI Tools၊ Automation နှင့် AI-assisted Management ကို လက်တွေ့အသုံးချနိုင်ရန် လေ့လာပါ။",

    lessons: [

      {
        title: "Digital Business အခြေခံ",
        content: `
          <p>Digital Business ဆိုတာ Technology သုံးရုံမဟုတ်ဘဲ Customer Experience နဲ့ Business Process ကို Digital ဖြင့် ပိုကောင်းအောင် ပြောင်းလဲခြင်းဖြစ်ပါတယ်။</p>
          <ul>
            <li>Digital Customer Journey</li>
            <li>Online Sales</li>
            <li>Digital Marketing</li>
            <li>Customer Data</li>
            <li>Automation</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Technology ကို သုံးဖို့သုံးတာမဟုတ်ဘဲ Time၊ Cost နဲ့ Customer Experience တိုးတက်ဖို့ သုံးပါ။</span>
          </div>
        `
      },

      {
        title: "AI for Business Managers",
        content: `
          <p>AI ကို Manager တစ်ယောက်အနေနဲ့ Analysis၊ Planning၊ Communication နဲ့ Productivity မြှင့်တင်ရာမှာ အသုံးချနိုင်ပါတယ်။</p>
          <ul>
            <li>Report Summarization</li>
            <li>Business Analysis</li>
            <li>Action Plan</li>
            <li>Meeting Preparation</li>
            <li>Content Creation</li>
            <li>Idea Generation</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>AI က Manager ကို အစားထိုးဖို့ထက် Manager ရဲ့ Thinking Speed နဲ့ Productivity ကို မြှင့်တင်ဖို့ အသုံးချပါ။</span>
          </div>
        `
      },

      {
        title: "AI ဖြင့် Sales နှင့် Marketing တိုးတက်စေခြင်း",
        content: `
          <p>AI ကို Sales Forecast၊ Customer Analysis၊ Content Creation နဲ့ Campaign Planning တွေမှာ အသုံးချနိုင်ပါတယ်။</p>
          <ul>
            <li>Customer Segmentation</li>
            <li>Sales Analysis</li>
            <li>Content Ideas</li>
            <li>Campaign Planning</li>
            <li>Customer Response Drafting</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>AI Output ကို အမြဲစစ်ဆေးပြီး Business Context နဲ့ ကိုက်ညီအောင် ပြန်လည်ဆုံးဖြတ်ပါ။</span>
          </div>
        `
      },

      {
        title: "Business Automation",
        content: `
          <p>Automation က ထပ်ခါတလဲလဲလုပ်ရတဲ့ အလုပ်တွေကို System နဲ့ Tool တွေသုံးပြီး အချိန်လျှော့ချနိုင်စေပါတယ်။</p>
          <ul>
            <li>Automated Reports</li>
            <li>Customer Follow-up</li>
            <li>Data Collection</li>
            <li>Reminder Systems</li>
            <li>Workflow Automation</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>အချိန်အများဆုံးစားတဲ့ Repetitive Task ကို အရင် Automation လုပ်ပါ။</span>
          </div>
        `
      }

    ]
  },

  // ====================================================
  // 13. ENTREPRENEURSHIP
  // ====================================================

  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    category: "entrepreneurship",
    icon: "◆",
    color: "yellow",

    description:
      "Business Idea၊ Business Model၊ Pricing၊ Startup Finance နှင့် Growth Strategy ကို လေ့လာပါ။",

    lessons: [

      {
        title: "Business Idea နှင့် Opportunity",
        content: `
          <p>ကောင်းမွန်တဲ့ Business Idea ဆိုတာ Product ရှိတာထက် Customer Problem ကို ဖြေရှင်းပေးနိုင်တဲ့ Opportunity ဖြစ်ပါတယ်။</p>
          <ul>
            <li>Customer Problem ရှာပါ။</li>
            <li>Market Size သုံးသပ်ပါ။</li>
            <li>Existing Solutions လေ့လာပါ။</li>
            <li>Demand ရှိမရှိ စမ်းသပ်ပါ။</li>
            <li>Unique Value သတ်မှတ်ပါ။</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>ကိုယ်ကြိုက်တဲ့ Product ထက် Customer လိုချင်တဲ့ Solution ကို အရင်ရှာပါ။</span>
          </div>
        `
      },

      {
        title: "Business Model",
        content: `
          <p>Business Model က Customer ထံ Value ပေးပြီး Revenue ဘယ်လိုရမလဲဆိုတာ ရှင်းလင်းစေပါတယ်။</p>
          <ul>
            <li>Target Customer</li>
            <li>Value Proposition</li>
            <li>Revenue Stream</li>
            <li>Cost Structure</li>
            <li>Distribution Channel</li>
            <li>Key Resources</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>ရောင်းအားရနိုင်တာနဲ့ Business Model ကောင်းတာ မတူပါဘူး။ Profitability ကိုပါ စဉ်းစားပါ။</span>
          </div>
        `
      },

      {
        title: "Pricing နှင့် Profitability",
        content: `
          <p>Pricing က Cost ပေါ်မှာသာ မတည်ဘဲ Customer Value၊ Competitor Position နဲ့ Desired Profit Margin ပေါ်မှာလည်း မူတည်ပါတယ်။</p>
          <ul>
            <li>Cost-based Pricing</li>
            <li>Value-based Pricing</li>
            <li>Competitor Pricing</li>
            <li>Gross Margin</li>
            <li>Discount Control</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Discount ပေးတိုင်း Sales တိုးနိုင်ပေမယ့် Profit ကျနိုင်တာကို သတိထားပါ။</span>
          </div>
        `
      },

      {
        title: "Business Growth Strategy",
        content: `
          <p>Business Growth အတွက် Customer အသစ်ရှာခြင်း၊ Existing Customer တိုးခြင်း၊ Product တိုးခြင်းနဲ့ Market ချဲ့ခြင်းတို့ကို စနစ်တကျ စီမံနိုင်ရပါမယ်။</p>
          <ul>
            <li>Customer Acquisition</li>
            <li>Customer Retention</li>
            <li>Product Expansion</li>
            <li>Market Expansion</li>
            <li>Partnership</li>
            <li>Operational Scale</li>
          </ul>
          <div class="lesson-tip">
            <strong>Manager Tip</strong>
            <span>Growth မလုပ်ခင် Unit Economics နဲ့ Cash Flow ခိုင်မာမှုကို အရင်စစ်ပါ။</span>
          </div>
        `
      }

    ]
  }

];


// ======================================================
// V8.1 LEARNING SYSTEM
// ======================================================

const ACADEMY_VERSION = "8.1";

const ACHIEVEMENTS = [
  {
    id: "first-lesson",
    title: "First Step",
    description: "Complete your first lesson.",
    icon: "🎯"
  },
  {
    id: "five-lessons",
    title: "Getting Started",
    description: "Complete 5 lessons.",
    icon: "📚"
  },
  {
    id: "ten-lessons",
    title: "Learning Builder",
    description: "Complete 10 lessons.",
    icon: "🏆"
  },
  {
    id: "first-course",
    title: "Course Finisher",
    description: "Complete your first course.",
    icon: "🎓"
  },
  {
    id: "seven-day-streak",
    title: "7 Day Streak",
    description: "Learn for 7 consecutive days.",
    icon: "🔥"
  },
  {
    id: "thirty-day-streak",
    title: "30 Day Streak",
    description: "Learn for 30 consecutive days.",
    icon: "⚡"
  },
  {
    id: "halfway",
    title: "Halfway There",
    description: "Reach 50% overall progress.",
    icon: "🚀"
  },
  {
    id: "academy-complete",
    title: "Academy Graduate",
    description: "Complete every lesson in the academy.",
    icon: "👑"
  }
];

// Premium is metadata-driven so the original 13 course records remain untouched.
// Existing data can opt in with course.premium === true or lesson.premium === true.
function isPremiumCourse(course) {
  return !!(course && course.premium === true);
}

function isPremiumLesson(course, index) {
  const lesson = course?.lessons?.[index];
  return !!(
    isPremiumCourse(course) ||
    (lesson && lesson.premium === true)
  );
}

function hasPremiumAccess() {
  return !!(
    state &&
    (
      state.isPremium === true ||
      state.premium?.isPremium === true ||
      state.subscription === "premium"
    )
  );
}

function canAccessLesson(course, index) {
  return !isPremiumLesson(course, index) || hasPremiumAccess();
}

function getDateKey(date = new Date()) {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getDateDiffInDays(fromKey, toKey) {
  if (!fromKey || !toKey) return null;

  const from = new Date(`${fromKey}T00:00:00`);
  const to = new Date(`${toKey}T00:00:00`);

  if (Number.isNaN(from.getTime()) || Number.isNaN(to.getTime())) {
    return null;
  }

  return Math.round((to - from) / 86400000);
}

function recordLearningDay() {
  const today = getDateKey();

  if (!state.learning) {
    state.learning = {
      lastActivityDate: null,
      longestStreak: Number(state.streak) || 0,
      activityDates: []
    };
  }

  if (!Array.isArray(state.learning.activityDates)) {
    state.learning.activityDates = [];
  }

  const last = state.learning.lastActivityDate;

  if (last !== today) {
    const diff = getDateDiffInDays(last, today);

    if (diff === 1) {
      state.streak = Math.max(1, Number(state.streak) || 0) + 1;
    } else if (diff === 0) {
      // Same day: do not increase the streak twice.
      state.streak = Math.max(1, Number(state.streak) || 1);
    } else {
      state.streak = 1;
    }

    state.learning.lastActivityDate = today;

    if (!state.learning.activityDates.includes(today)) {
      state.learning.activityDates.push(today);
    }

    state.learning.activityDates =
      state.learning.activityDates.slice(-366);

    state.learning.longestStreak = Math.max(
      Number(state.learning.longestStreak) || 0,
      Number(state.streak) || 0
    );
  } else {
    state.streak = Math.max(1, Number(state.streak) || 1);
  }
}

function getNextIncompleteLesson(courseId) {
  const course = COURSES.find(item => item.id === courseId);
  if (!course) return 0;

  const index = course.lessons.findIndex(
    (_, lessonIndex) =>
      !state.completedLessons.includes(`${courseId}-${lessonIndex}`)
  );

  return index >= 0 ? index : 0;
}

function getContinueLearningTarget() {
  // Prefer the last active course/lesson when it still has unfinished work.
  const savedCourseId =
    state.learning?.lastCourseId || state.currentCourseId;

  const savedCourse =
    COURSES.find(course => course.id === savedCourseId);

  if (savedCourse) {
    const savedIndex = Number(
      state.learning?.lastLessonIndex ??
      state.currentLessonIndex ??
      0
    );

    const safeIndex = Math.max(
      0,
      Math.min(
        Number.isFinite(savedIndex) ? savedIndex : 0,
        savedCourse.lessons.length - 1
      )
    );

    if (
      !state.completedLessons.includes(
        `${savedCourse.id}-${safeIndex}`
      )
    ) {
      return {
        courseId: savedCourse.id,
        lessonIndex: safeIndex
      };
    }

    const nextIndex = getNextIncompleteLesson(savedCourse.id);

    if (
      savedCourse.lessons.length &&
      !state.completedLessons.includes(
        `${savedCourse.id}-${nextIndex}`
      )
    ) {
      return {
        courseId: savedCourse.id,
        lessonIndex: nextIndex
      };
    }
  }

  // Otherwise find the first unfinished lesson in the academy.
  for (const course of COURSES) {
    const index = getNextIncompleteLesson(course.id);

    if (
      course.lessons.length &&
      !state.completedLessons.includes(
        `${course.id}-${index}`
      )
    ) {
      return {
        courseId: course.id,
        lessonIndex: index
      };
    }
  }

  return {
    courseId: COURSES[0]?.id || null,
    lessonIndex: 0
  };
}

function openCourseAtProgress(courseId, requestedIndex = null) {
  const course = COURSES.find(item => item.id === courseId);

  if (!course) return false;

  let index =
    requestedIndex === null
      ? getNextIncompleteLesson(courseId)
      : Number(requestedIndex);

  if (!Number.isFinite(index)) {
    index = 0;
  }

  index = Math.max(
    0,
    Math.min(index, course.lessons.length - 1)
  );

  if (!canAccessLesson(course, index)) {
    showPremiumLock(course, index);
    return false;
  }

  state.currentCourseId = courseId;
  state.currentLessonIndex = index;

  state.learning = state.learning || {};
  state.learning.lastCourseId = courseId;
  state.learning.lastLessonIndex = index;

  saveState();
  navigate("lessons");

  return true;
}

function getCourseCompletionCount() {
  return COURSES.filter(
    course =>
      getCourseProgress(course.id) === 100
  ).length;
}

function isAchievementUnlocked(id) {
  return Array.isArray(state.achievements) &&
    state.achievements.some(item => item.id === id);
}

function unlockAchievement(id) {
  const achievement =
    ACHIEVEMENTS.find(item => item.id === id);

  if (!achievement || isAchievementUnlocked(id)) {
    return false;
  }

  state.achievements.push({
    id: achievement.id,
    title: achievement.title,
    description: achievement.description,
    icon: achievement.icon,
    unlockedAt: new Date().toISOString()
  });

  showToast(
    `${achievement.icon} Achievement: ${achievement.title}`
  );

  return true;
}

function checkAchievements() {
  if (!Array.isArray(state.achievements)) {
    state.achievements = [];
  }

  const completed = getCompletedCount();
  const progress = getOverallProgress();

  if (completed >= 1) {
    unlockAchievement("first-lesson");
  }

  if (completed >= 5) {
    unlockAchievement("five-lessons");
  }

  if (completed >= 10) {
    unlockAchievement("ten-lessons");
  }

  if (getCourseCompletionCount() >= 1) {
    unlockAchievement("first-course");
  }

  if (Number(state.streak) >= 7) {
    unlockAchievement("seven-day-streak");
  }

  if (Number(state.streak) >= 30) {
    unlockAchievement("thirty-day-streak");
  }

  if (progress >= 50) {
    unlockAchievement("halfway");
  }

  if (progress >= 100) {
    unlockAchievement("academy-complete");
  }
}

function getQuizForLesson(courseId, lessonIndex) {
  const course = COURSES.find(item => item.id === courseId);
  const lesson = course?.lessons?.[lessonIndex];

  return lesson?.quiz || course?.quiz || null;
}

function getQuizResultKey(courseId, lessonIndex) {
  return `${courseId}-${lessonIndex}`;
}

function submitQuiz(courseId, lessonIndex, answers) {
  const quiz = getQuizForLesson(courseId, lessonIndex);

  if (!quiz || !Array.isArray(quiz.questions) || !quiz.questions.length) {
    return {
      available: false,
      message: "ဒီ Lesson အတွက် Quiz မထည့်ရသေးပါ။"
    };
  }

  const normalizedAnswers = Array.isArray(answers) ? answers : [];
  let correct = 0;

  quiz.questions.forEach((question, index) => {
    const answer = normalizedAnswers[index];
    const expected = question.answer;

    if (
      answer !== undefined &&
      String(answer).toLowerCase() === String(expected).toLowerCase()
    ) {
      correct++;
    }
  });

  const score = Math.round(
    correct / quiz.questions.length * 100
  );

  const passingScore =
    Number(quiz.passingScore) || 70;

  const passed = score >= passingScore;

  state.quizResults = state.quizResults || {};
  state.quizResults[
    getQuizResultKey(courseId, lessonIndex)
  ] = {
    score,
    correct,
    total: quiz.questions.length,
    passed,
    completedAt: new Date().toISOString()
  };

  saveState();

  return {
    available: true,
    score,
    correct,
    total: quiz.questions.length,
    passingScore,
    passed
  };
}

function getQuizResult(courseId, lessonIndex) {
  return (
    state.quizResults?.[
      getQuizResultKey(courseId, lessonIndex)
    ] || null
  );
}

function isCourseCertificateEligible(courseId) {
  const course = COURSES.find(item => item.id === courseId);

  if (!course || getCourseProgress(courseId) < 100) {
    return false;
  }

  // If quizzes exist, every available quiz must be passed.
  const quizLessons = course.lessons
    .map((lesson, index) => ({
      lesson,
      index,
      quiz: getQuizForLesson(courseId, index)
    }))
    .filter(item =>
      item.quiz &&
      Array.isArray(item.quiz.questions) &&
      item.quiz.questions.length
    );

  return quizLessons.every(item =>
    state.quizResults?.[
      getQuizResultKey(courseId, item.index)
    ]?.passed === true
  );
}

function issueCertificate(courseId) {
  const course = COURSES.find(item => item.id === courseId);

  if (!course) {
    return null;
  }

  if (!isCourseCertificateEligible(courseId)) {
    return null;
  }

  state.certificates = Array.isArray(state.certificates)
    ? state.certificates
    : [];

  const existing = state.certificates.find(
    item => item.courseId === courseId
  );

  if (existing) {
    return existing;
  }

  const certificate = {
    id:
      `CERT-${courseId.toUpperCase()}-${Date.now()}`,
    courseId,
    courseTitle: course.title,
    issuedAt: new Date().toISOString(),
    status: "issued"
  };

  state.certificates.push(certificate);
  saveState();

  return certificate;
}

function getAchievementSummary() {
  return {
    unlocked: Array.isArray(state.achievements)
      ? state.achievements.length
      : 0,
    total: ACHIEVEMENTS.length,
    items: ACHIEVEMENTS.map(item => ({
      ...item,
      unlocked: isAchievementUnlocked(item.id)
    }))
  };
}

function showPremiumLock(course, index) {
  const lesson = course?.lessons?.[index];
  const lessonTitle = lesson?.title || "Premium Lesson";

  showModal(
    "Premium Lesson 🔒",
    `"${escapeHTML(lessonTitle)}" သည် Premium Content ဖြစ်ပါတယ်။ Premium Access ရရှိပြီးမှ ဆက်လက်လေ့လာနိုင်ပါမယ်။`,
    "Continue"
  );
}

function syncLearningPointer() {
  if (!state.learning) {
    state.learning = {};
  }

  state.learning.lastCourseId =
    state.currentCourseId;

  state.learning.lastLessonIndex =
    Number(state.currentLessonIndex) || 0;
}

// ======================================================
// STATE
// ======================================================

function createDefaultState() {

  return {

    version: 81,

    user: {
      name: "Aung Zar Ni Win",
      role: "Business Manager"
    },

    currentCourseId: "sales",
    currentLessonIndex: 0,

    completedLessons: [],

    streak: 0,

    learning: {
      lastActivityDate: null,
      longestStreak: 0,
      activityDates: [],
      lastCourseId: "sales",
      lastLessonIndex: 0
    },

    achievements: [],

    quizResults: {},

    certificates: [],

    // Premium-ready account state.
    // Keep false until a real subscription/payment flow is connected.
    isPremium: false,

    premium: {
      isPremium: false,
      plan: "free"
    },

    dailyGoal: {
      target: 30,
      minutes: 0
    },

    sales: {
      target: 100,
      actual: 0,

      priorities: [
        "အဖွဲ့ရဲ့ အရောင်းလုပ်ဆောင်ရည် ပြန်လည်စစ်ဆေးရန်",
        "အဓိက Customer များကို သွားရောက်တွေ့ဆုံရန်",
        "Sales Gap များကို Follow-up လုပ်ရန်"
      ],

      history: [65, 72, 68, 80, 75, 88, 92]
    },

    settings: {
      reminder: true,
      tracking: true
    },

    activity: [],

    calculator: {
      product: "Product",
      cost: 10000,
      margin: 20
    }

  };

}

let state;

// ======================================================
// STORAGE
// ======================================================

function loadState() {

  try {

    const saved =
      localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return createDefaultState();
    }

    const parsed =
      JSON.parse(saved);

    const defaults =
      createDefaultState();

    const merged = {

      ...defaults,
      ...parsed,

      user: {
        ...defaults.user,
        ...(parsed.user || {})
      },

      dailyGoal: {
        ...defaults.dailyGoal,
        ...(parsed.dailyGoal || {})
      },

      sales: {
        ...defaults.sales,
        ...(parsed.sales || {})
      },

      settings: {
        ...defaults.settings,
        ...(parsed.settings || {})
      },

      calculator: {
        ...defaults.calculator,
        ...(parsed.calculator || {})
      },

      learning: {
        ...defaults.learning,
        ...(parsed.learning || {})
      },

      premium: {
        ...defaults.premium,
        ...(parsed.premium || {})
      },

      completedLessons:
        Array.isArray(parsed.completedLessons)
          ? parsed.completedLessons
          : [],

      activity:
        Array.isArray(parsed.activity)
          ? parsed.activity
          : [],

      achievements:
        Array.isArray(parsed.achievements)
          ? parsed.achievements
          : [],

      quizResults:
        parsed.quizResults &&
        typeof parsed.quizResults === "object"
          ? parsed.quizResults
          : {},

      certificates:
        Array.isArray(parsed.certificates)
          ? parsed.certificates
          : []

    };

    // Backward compatibility with V8.0 streak data.
    merged.streak =
      Number.isFinite(Number(merged.streak))
        ? Number(merged.streak)
        : 0;

    merged.currentLessonIndex =
      Number.isFinite(Number(merged.currentLessonIndex))
        ? Number(merged.currentLessonIndex)
        : 0;

    if (!merged.learning.lastCourseId) {
      merged.learning.lastCourseId =
        merged.currentCourseId || defaults.currentCourseId;
    }

    if (
      !Number.isFinite(
        Number(merged.learning.lastLessonIndex)
      )
    ) {
      merged.learning.lastLessonIndex =
        merged.currentLessonIndex;
    }

    merged.version = 81;

    return merged;

  } catch (error) {

    console.error("Storage Error:", error);

    return createDefaultState();

  }

}

function saveState() {

  try {

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );

  } catch (error) {

    console.error(
      "Save State Error:",
      error
    );

  }

}

// ======================================================
// HELPERS
// ======================================================

function getTotalLessons() {

  return COURSES.reduce(
    (total, course) =>
      total + course.lessons.length,
    0
  );

}

function getCompletedCount() {

  return new Set(
    Array.isArray(state.completedLessons)
      ? state.completedLessons
      : []
  ).size;

}

function getOverallProgress() {

  const total =
    getTotalLessons();

  if (!total) return 0;

  return Math.round(
    getCompletedCount() /
    total *
    100
  );

}

function getCourseProgress(courseId) {

  const course =
    COURSES.find(
      item => item.id === courseId
    );

  if (!course) return 0;

  const completed =
    course.lessons.filter(
      (_, index) =>
        state.completedLessons.includes(
          `${courseId}-${index}`
        )
    ).length;

  if (!course.lessons.length) {
    return 0;
  }

  return Math.round(
    completed /
    course.lessons.length *
    100
  );

}

function getCourseCompleted(courseId) {

  const course =
    COURSES.find(
      item => item.id === courseId
    );

  if (!course) return 0;

  return course.lessons.filter(
    (_, index) =>
      state.completedLessons.includes(
        `${courseId}-${index}`
      )
  ).length;

}

function escapeHTML(value) {

  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}

function getCurrentCourse() {

  return (
    COURSES.find(
      course =>
        course.id === state.currentCourseId
    ) || COURSES[0]
  );

}

function getCurrentLesson() {

  const course =
    getCurrentCourse();

  let index =
    Number(state.currentLessonIndex);

  if (!Number.isFinite(index)) {
    index = 0;
  }

  index =
    Math.max(
      0,
      Math.min(
        index,
        course.lessons.length - 1
      )
    );

  state.currentLessonIndex =
    index;

  syncLearningPointer();

  return {
    course,
    index,
    lesson: course.lessons[index]
  };

}

// ======================================================
// NAVIGATION
// ======================================================

const pages = [
  "dashboard",
  "courses",
  "lessons",
  "progress",
  "sales",
  "calculator",
  "reports",
  "ai-coach",
  "ai-tools",
  "settings"
];

function navigate(page) {

  if (!pages.includes(page)) {
    return;
  }

  document
    .querySelectorAll(".page")
    .forEach(item => {
      item.classList.remove("active");
    });

  const targetPage =
    document.getElementById(
      `page-${page}`
    );

  if (targetPage) {
    targetPage.classList.add("active");
  }

  document
    .querySelectorAll(".nav-item")
    .forEach(item => {

      item.classList.toggle(
        "active",
        item.dataset.page === page
      );

    });

  const names = {

    dashboard: "Dashboard",
    courses: "My Courses",
    lessons: "Lessons",
    progress: "My Progress",
    sales: "Sales Manager",
    calculator: "Pricing Calculator",
    reports: "Reports",
    "ai-coach": "AI Business Coach",
    "ai-tools": "AI Tools",
    settings: "Settings"

  };

  const breadcrumb =
    document.getElementById(
      "breadcrumbCurrent"
    );

  if (breadcrumb) {
    breadcrumb.textContent =
      names[page] || page;
  }

  if (page === "dashboard")
    renderDashboard();

  if (page === "courses")
    renderCourses();

  if (page === "lessons")
    renderLessons();

  if (page === "progress")
    renderProgress();

  if (page === "sales")
    renderSales();

  if (page === "calculator")
    renderCalculator();

  if (page === "reports")
    renderReports();

  closeSidebar();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

// ======================================================
// DASHBOARD
// ======================================================

function renderDashboard() {

  const total =
    getTotalLessons();

  const completed =
    getCompletedCount();

  const progress =
    getOverallProgress();

  const statCourses =
    document.getElementById("statCourses");

  const statLessons =
    document.getElementById("statLessons");

  const statCompleted =
    document.getElementById("statCompleted");

  const statProgress =
    document.getElementById("statProgress");

  if (statCourses)
    statCourses.textContent =
      COURSES.length;

  if (statLessons)
    statLessons.textContent =
      total;

  if (statCompleted)
    statCompleted.textContent =
      completed;

  if (statProgress)
    statProgress.textContent =
      `${progress}%`;

  const continueTarget =
    getContinueLearningTarget();

  const course =
    COURSES.find(
      item => item.id === continueTarget.courseId
    ) || getCurrentCourse();

  const courseProgress =
    getCourseProgress(course.id);

  const courseCompleted =
    getCourseCompleted(course.id);

  const title =
    document.getElementById(
      "dashboardCourseTitle"
    );

  const description =
    document.getElementById(
      "dashboardCourseDescription"
    );

  const progressText =
    document.getElementById(
      "dashboardProgressText"
    );

  const progressPercent =
    document.getElementById(
      "dashboardProgressPercent"
    );

  const progressBar =
    document.getElementById(
      "dashboardProgressBar"
    );

  if (title)
    title.textContent =
      course.title;

  if (description)
    description.textContent =
      course.description;

  if (progressText)
    progressText.textContent =
      `${courseCompleted} of ${course.lessons.length} lessons`;

  if (progressPercent)
    progressPercent.textContent =
      `${courseProgress}%`;

  if (progressBar)
    progressBar.style.width =
      `${courseProgress}%`;

  const goal =
    state.dailyGoal.target > 0
      ? Math.min(
          100,
          Math.round(
            state.dailyGoal.minutes /
            state.dailyGoal.target *
            100
          )
        )
      : 0;

  const goalMinutes =
    document.getElementById("goalMinutes");

  const goalPercent =
    document.getElementById("goalPercent");

  if (goalMinutes)
    goalMinutes.textContent =
      `${state.dailyGoal.minutes} / ${state.dailyGoal.target} min`;

  if (goalPercent)
    goalPercent.textContent =
      `${goal}%`;

  renderActivity();

}

function renderActivity() {

  const container =
    document.getElementById(
      "activityList"
    );

  if (!container) return;

  if (!state.activity.length) {

    container.innerHTML = `
      <div class="empty-state">
        <div>📚</div>
        <strong>No activity yet</strong>
        <span>Start your first lesson.</span>
      </div>
    `;

    return;

  }

  container.innerHTML =
    state.activity
      .slice(0, 5)
      .map(item => `

        <div class="activity-item">

          <div class="activity-icon">
            ✓
          </div>

          <div class="activity-content">

            <strong>
              ${escapeHTML(item.title)}
            </strong>

            <span>
              ${escapeHTML(item.course)}
            </span>

          </div>

          <small>
            ${escapeHTML(item.time)}
          </small>

        </div>

      `)
      .join("");

}

// ======================================================
// COURSES
// ======================================================

function renderCourses(
  filter = "all"
) {

  const container =
    document.getElementById(
      "coursesGrid"
    );

  if (!container) return;

  const courses =
    filter === "all"
      ? COURSES
      : COURSES.filter(
          course =>
            course.category === filter
        );

  container.innerHTML =
    courses.map(course => {

      const progress =
        getCourseProgress(course.id);

      const completed =
        getCourseCompleted(course.id);

      const locked =
        isPremiumCourse(course) &&
        !hasPremiumAccess();

      const actionLabel =
        locked
          ? "🔒 Premium"
          : progress > 0
            ? "Continue"
            : "Start Course";

      return `

        <div class="course-card ${locked ? "premium-locked" : ""}">

          <div class="course-card-top">

            <div class="course-icon ${course.color}">
              ${course.icon}
            </div>

            <span class="course-badge ${course.category}">
              ${escapeHTML(course.category.toUpperCase())}
            </span>

          </div>

          <h2>
            ${escapeHTML(course.title)}
          </h2>

          <p>
            ${escapeHTML(course.description)}
          </p>

          <div class="course-meta">

            <span>
              ▣ ${course.lessons.length} Lessons
            </span>

            <strong>
              ${progress}%
            </strong>

          </div>

          <div class="progress-bar">

            <div
              class="progress-fill ${course.color}-fill"
              style="width:${progress}%"
            ></div>

          </div>

          <div class="course-card-footer">

            <span>
              ${completed}/${course.lessons.length}
              completed
            </span>

            <button
              type="button"
              class="secondary-btn open-course"
              data-course="${course.id}"
              ${locked ? 'data-premium-lock="true"' : ""}
            >
              ${actionLabel}
            </button>

          </div>

        </div>

      `;

    }).join("");

}

// ======================================================
// LESSONS
// ======================================================

function renderLessons() {

  const courseList =
    document.getElementById(
      "lessonCourseList"
    );

  const content =
    document.getElementById(
      "lessonContent"
    );

  if (!courseList || !content) {

    console.error(
      "Lesson elements not found."
    );

    return;

  }

  courseList.innerHTML =
    COURSES.map(course => {

      const progress =
        getCourseProgress(course.id);

      const completed =
        getCourseCompleted(course.id);

      const active =
        state.currentCourseId === course.id
          ? "active"
          : "";

      const locked =
        isPremiumCourse(course) &&
        !hasPremiumAccess();

      return `

        <button
          type="button"
          class="lesson-course-item ${active} ${locked ? "premium-locked" : ""}"
          data-course="${course.id}"
        >

          <div class="lesson-course-icon ${course.color}">
            ${course.icon}
          </div>

          <div class="lesson-course-info">

            <strong>
              ${escapeHTML(course.title)}
              ${locked ? " 🔒" : ""}
            </strong>

            <span>
              ${completed}/${course.lessons.length}
              completed
            </span>

            <div class="mini-progress">
              <div
                style="width:${progress}%"
              ></div>
            </div>

          </div>

        </button>

      `;

    }).join("");

  const current =
    getCurrentLesson();

  const course =
    current.course;

  const index =
    current.index;

  const lesson =
    current.lesson;

  const lessonKey =
    `${course.id}-${index}`;

  const completed =
    state.completedLessons.includes(
      lessonKey
    );

  const locked =
    !canAccessLesson(course, index);

  const isFirst =
    index === 0;

  const isLast =
    index ===
    course.lessons.length - 1;

  if (locked) {

    content.innerHTML = `

      <div class="lesson-content-header">

        <div>

          <span class="lesson-number">
            LESSON ${index + 1}
          </span>

          <h2>
            ${escapeHTML(lesson.title)}
          </h2>

          <p>
            ${escapeHTML(course.title)}
          </p>

        </div>

        <span class="course-badge ${course.category}">
          ${escapeHTML(course.category.toUpperCase())}
        </span>

      </div>

      <div class="lesson-body premium-lock-card">

        <div class="lesson-visual ${course.color}">
          🔒
        </div>

        <h3>
          Premium Content
        </h3>

        <div class="lesson-text">
          <p>
            ဒီသင်ခန်းစာကို လေ့လာရန် Premium Access လိုအပ်ပါတယ်။
          </p>
        </div>

        <button
          type="button"
          class="primary-btn"
          data-premium-action="open"
        >
          Unlock Premium →
        </button>

      </div>

      <div class="lesson-footer">

        <button
          type="button"
          class="secondary-btn"
          data-lesson-action="previous"
          ${isFirst ? "disabled" : ""}
        >
          ← Previous
        </button>

        <button
          type="button"
          class="secondary-btn"
          data-lesson-action="next"
          ${isLast ? "disabled" : ""}
        >
          Next →
        </button>

      </div>

    `;

    return;
  }

  content.innerHTML = `

    <div class="lesson-content-header">

      <div>

        <span class="lesson-number">
          LESSON ${index + 1}
        </span>

        <h2>
          ${escapeHTML(lesson.title)}
        </h2>

        <p>
          ${escapeHTML(course.title)}
        </p>

      </div>

      <span class="course-badge ${course.category}">
        ${escapeHTML(course.category.toUpperCase())}
      </span>

    </div>

    <div class="lesson-body">

      <div class="lesson-visual ${course.color}">
        ${course.icon}
      </div>

      <h3>
        ${escapeHTML(lesson.title)}
      </h3>

      <div class="lesson-text">
        ${lesson.content}
      </div>

      ${
        getQuizForLesson(course.id, index)
          ? `
            <div class="lesson-quiz-ready" data-quiz-course="${course.id}" data-quiz-index="${index}">
              <strong>📝 Quiz Ready</strong>
              <span>Quiz structure is available for this lesson.</span>
            </div>
          `
          : ""
      }

    </div>

    <div class="lesson-footer">

      <button
        type="button"
        class="secondary-btn"
        data-lesson-action="previous"
        ${isFirst ? "disabled" : ""}
      >
        ← Previous
      </button>

      <button
        type="button"
        class="primary-btn"
        data-lesson-action="complete"
      >
        ${
          completed
            ? "✓ Completed"
            : "Mark as Complete"
        }
      </button>

      <button
        type="button"
        class="secondary-btn"
        data-lesson-action="next"
        ${isLast ? "disabled" : ""}
      >
        Next →
      </button>

    </div>

  `;

}

// ======================================================
// LESSON NAVIGATION
// ======================================================

function previousLesson() {

  const course =
    getCurrentCourse();

  if (state.currentLessonIndex <= 0) {

    showToast(
      "ဒါက ပထမဆုံး Lesson ဖြစ်ပါတယ်။"
    );

    return;

  }

  const nextIndex =
    state.currentLessonIndex - 1;

  if (!canAccessLesson(course, nextIndex)) {
    showPremiumLock(course, nextIndex);
    return;
  }

  state.currentLessonIndex =
    nextIndex;

  syncLearningPointer();
  saveState();

  renderLessons();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

function nextLesson() {

  const course =
    getCurrentCourse();

  if (
    state.currentLessonIndex >=
    course.lessons.length - 1
  ) {

    showToast(
      "ဒီ Course ရဲ့ နောက်ဆုံး Lesson ရောက်နေပါပြီ။"
    );

    return;

  }

  const nextIndex =
    state.currentLessonIndex + 1;

  if (!canAccessLesson(course, nextIndex)) {
    showPremiumLock(course, nextIndex);
    return;
  }

  state.currentLessonIndex =
    nextIndex;

  syncLearningPointer();
  saveState();

  renderLessons();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

// ======================================================
// COMPLETE LESSON
// ======================================================

function completeLesson(
  courseId,
  index,
  lessonTitle,
  courseTitle
) {

  const course =
    COURSES.find(
      item => item.id === courseId
    );

  if (!course) return;

  if (!canAccessLesson(course, index)) {
    showPremiumLock(course, index);
    return;
  }

  const key =
    `${courseId}-${index}`;

  const alreadyCompleted =
    state.completedLessons.includes(key);

  if (!alreadyCompleted) {

    state.completedLessons.push(key);

    state.dailyGoal.minutes =
      Math.min(
        state.dailyGoal.target,
        state.dailyGoal.minutes + 15
      );

    state.activity.unshift({

      title:
        lessonTitle,

      course:
        courseTitle,

      time:
        "Just now"

    });

    state.activity =
      state.activity.slice(0, 10);

    // Real consecutive-day streak.
    recordLearningDay();

    // Remember where the learner is.
    state.currentCourseId = courseId;
    state.currentLessonIndex = index;
    syncLearningPointer();

    checkAchievements();

    saveState();

    showToast(
      "သင်ခန်းစာ ပြီးဆုံးပါပြီ ✓"
    );

    if (getCourseProgress(courseId) === 100) {
      issueCertificate(courseId);
    }

  } else {

    showToast(
      "ဒီသင်ခန်းစာကို ပြီးဆုံးပြီးသားပါ။"
    );

  }

  renderLessons();
  renderDashboard();
  renderProgress();
  renderReports();

}

// ======================================================
// PROGRESS
// ======================================================

function renderProgress() {

  const progress =
    getOverallProgress();

  const completed =
    getCompletedCount();

  const total =
    getTotalLessons();

  const overall =
    document.getElementById(
      "overallProgress"
    );

  const completedEl =
    document.getElementById(
      "progressCompleted"
    );

  const remainingEl =
    document.getElementById(
      "progressRemaining"
    );

  const streakEl =
    document.getElementById(
      "progressStreak"
    );

  if (overall)
    overall.textContent =
      `${progress}%`;

  if (completedEl)
    completedEl.textContent =
      completed;

  if (remainingEl)
    remainingEl.textContent =
      total - completed;

  if (streakEl)
    streakEl.textContent =
      state.streak;

  renderAchievementPanel();

  const container =
    document.getElementById(
      "courseProgressList"
    );

  if (!container) return;

  container.innerHTML =
    COURSES.map(course => {

      const p =
        getCourseProgress(course.id);

      const completedCourse =
        getCourseCompleted(course.id);

      return `

        <div class="course-progress-row">

          <div class="course-progress-name">

            <div class="small-icon ${course.color}">
              ${course.icon}
            </div>

            <div>

              <strong>
                ${escapeHTML(course.title)}
              </strong>

              <span>
                ${completedCourse}/${course.lessons.length}
                lessons
              </span>

            </div>

          </div>

          <div class="course-progress-bar">

            <div>
              <span
                style="width:${p}%"
              ></span>
            </div>

          </div>

          <strong>
            ${p}%
          </strong>

        </div>

      `;

    }).join("");

}

// ======================================================
// ACHIEVEMENTS
// ======================================================

function renderAchievementPanel() {

  const containers = [
    document.getElementById("achievementList"),
    document.getElementById("achievementsList")
  ].filter(Boolean);

  if (!containers.length) return;

  const summary = getAchievementSummary();

  containers.forEach(container => {

    container.innerHTML =
      summary.items.map(item => `

        <div class="achievement-item ${item.unlocked ? "unlocked" : "locked"}">

          <div class="achievement-icon">
            ${item.unlocked ? item.icon : "🔒"}
          </div>

          <div class="achievement-content">
            <strong>
              ${escapeHTML(item.title)}
            </strong>
            <span>
              ${escapeHTML(item.description)}
            </span>
          </div>

        </div>

      `).join("");

  });

}

// ======================================================
// SALES
// ======================================================

function renderSales() {

  const target =
    Number(state.sales.target) || 0;

  const actual =
    Number(state.sales.actual) || 0;

  const achievement =
    target > 0
      ? Math.round(
          actual /
          target *
          100
        )
      : 0;

  const gap =
    Math.max(
      target - actual,
      0
    );

  const targetEl =
    document.getElementById(
      "salesTargetDisplay"
    );

  const actualEl =
    document.getElementById(
      "salesActualDisplay"
    );

  const achievementEl =
    document.getElementById(
      "salesAchievementDisplay"
    );

  const gapEl =
    document.getElementById(
      "salesGapDisplay"
    );

  if (targetEl)
    targetEl.textContent = target;

  if (actualEl)
    actualEl.textContent = actual;

  if (achievementEl)
    achievementEl.textContent =
      `${achievement}%`;

  if (gapEl)
    gapEl.textContent = gap;

  const targetInput =
    document.getElementById(
      "salesTargetInput"
    );

  const actualInput =
    document.getElementById(
      "salesActualInput"
    );

  if (targetInput)
    targetInput.value = target;

  if (actualInput)
    actualInput.value = actual;

  renderSalesChart();
  renderPriorities();

}

function renderSalesChart() {

  const container =
    document.getElementById(
      "salesChart"
    );

  if (!container) return;

  const history =
    Array.isArray(state.sales.history)
      ? state.sales.history
      : [];

  if (!history.length) {

    container.innerHTML = "";

    return;

  }

  const max =
    Math.max(...history, 100);

  container.innerHTML =
    history.map(
      (value, index) => {

        const height =
          Math.round(
            value /
            max *
            100
          );

        return `

          <div class="chart-bar-group">

            <span class="chart-value">
              ${value}
            </span>

            <div
              class="chart-bar"
              style="height:${height}%"
            ></div>

            <small>
              M${index + 1}
            </small>

          </div>

        `;

      }
    ).join("");

}

function renderPriorities() {

  const container =
    document.getElementById(
      "priorityList"
    );

  if (!container) return;

  if (!state.sales.priorities.length) {

    container.innerHTML = `
      <div class="empty-state">
        <div>🎯</div>
        <strong>No priority</strong>
        <span>Add your next execution priority.</span>
      </div>
    `;

    return;

  }

  container.innerHTML =
    state.sales.priorities.map(
      (item, index) => `

        <div class="priority-item">

          <div class="priority-number">
            ${index + 1}
          </div>

          <span>
            ${escapeHTML(item)}
          </span>

          <button
            type="button"
            class="priority-delete"
            data-index="${index}"
          >
            ×
          </button>

        </div>

      `
    ).join("");

}

// ======================================================
// CALCULATOR
// ======================================================

function calculatePrice() {

  const productInput =
    document.getElementById(
      "productName"
    );

  const costInput =
    document.getElementById(
      "productCost"
    );

  const marginInput =
    document.getElementById(
      "productMargin"
    );

  if (
    !productInput ||
    !costInput ||
    !marginInput
  ) {
    return;
  }

  const product =
    productInput.value.trim() ||
    "Product";

  const cost =
    Number(costInput.value) || 0;

  const margin =
    Math.max(
      0,
      Math.min(
        99.99,
        Number(marginInput.value) || 0
      )
    );

  const price =
    cost /
    (1 - margin / 100);

  const profit =
    price - cost;

  state.calculator = {
    product,
    cost,
    margin
  };

  saveState();

  const resultProduct =
    document.getElementById(
      "resultProduct"
    );

  const resultPrice =
    document.getElementById(
      "resultPrice"
    );

  const resultCost =
    document.getElementById(
      "resultCost"
    );

  const resultProfit =
    document.getElementById(
      "resultProfit"
    );

  const resultMargin =
    document.getElementById(
      "resultMargin"
    );

  if (resultProduct)
    resultProduct.textContent =
      product;

  if (resultPrice)
    resultPrice.textContent =
      formatMoney(price);

  if (resultCost)
    resultCost.textContent =
      formatMoney(cost);

  if (resultProfit)
    resultProfit.textContent =
      formatMoney(profit);

  if (resultMargin)
    resultMargin.textContent =
      `${margin}%`;

}

function formatMoney(number) {

  return `${Math.round(
    Number(number) || 0
  ).toLocaleString()} Ks`;

}

function renderCalculator() {

  const data =
    state.calculator;

  const product =
    document.getElementById(
      "productName"
    );

  const cost =
    document.getElementById(
      "productCost"
    );

  const margin =
    document.getElementById(
      "productMargin"
    );

  if (
    !product ||
    !cost ||
    !margin
  ) {
    return;
  }

  product.value =
    data.product;

  cost.value =
    data.cost;

  margin.value =
    data.margin;

  calculatePrice();

}

// ======================================================
// REPORTS
// ======================================================

function renderReports() {

  const total =
    getTotalLessons();

  const completed =
    getCompletedCount();

  const reportCourses =
    document.getElementById(
      "reportCourses"
    );

  const reportLessons =
    document.getElementById(
      "reportLessons"
    );

  const reportCompleted =
    document.getElementById(
      "reportCompleted"
    );

  const reportStreak =
    document.getElementById(
      "reportStreak"
    );

  const reportSalesTarget =
    document.getElementById(
      "reportSalesTarget"
    );

  const reportSalesActual =
    document.getElementById(
      "reportSalesActual"
    );

  const reportSalesAchievement =
    document.getElementById(
      "reportSalesAchievement"
    );

  if (reportCourses)
    reportCourses.textContent =
      COURSES.length;

  if (reportLessons)
    reportLessons.textContent =
      total;

  if (reportCompleted)
    reportCompleted.textContent =
      completed;

  if (reportStreak)
    reportStreak.textContent =
      state.streak;

  if (reportSalesTarget)
    reportSalesTarget.textContent =
      state.sales.target;

  if (reportSalesActual)
    reportSalesActual.textContent =
      state.sales.actual;

  const achievement =
    state.sales.target > 0
      ? Math.round(
          state.sales.actual /
          state.sales.target *
          100
        )
      : 0;

  if (reportSalesAchievement)
    reportSalesAchievement.textContent =
      `${achievement}%`;

}

// ======================================================
// AI COACH
// ======================================================

function getAIResponse(question) {

  const q =
    question.toLowerCase().trim();

  if (
    q.includes("team") ||
    q.includes("အဖွဲ့") ||
    q.includes("coach") ||
    q.includes("coaching") ||
    q.includes("performance") ||
    q.includes("လုပ်ဆောင်ရည်")
  ) {

    return `
      <strong>အဖွဲ့လုပ်ဆောင်ရည် မြှင့်တင်ရန်</strong>
      <p>
        ပထမဆုံး Target နဲ့ Actual ကို နှိုင်းယှဉ်ပြီး
        Performance Gap ကို ရှာပါ။
      </p>
      <p>
        Gap ဖြစ်ရတဲ့ Root Cause ကို
        လူ၊ Skill၊ Customer၊ နယ်မြေနဲ့ Execution
        အပိုင်းခွဲပြီး လေ့လာပါ။
      </p>
      <p>
        Action Plan ချမှတ်ပြီး အပတ်စဉ် Follow-up လုပ်ပါ။
        Micromanagement မလုပ်ဘဲ Coaching နဲ့ Empowerment
        ကို အသုံးပြုပါ။
      </p>
    `;

  }

  if (
    q.includes("customer") ||
    q.includes("ဖောက်သည်")
  ) {

    return `
      <strong>Customer Growth တိုးတက်စေရန်</strong>
      <p>
        Customer တွေကို Value နဲ့ Potential အလိုက် ခွဲခြားပါ။
      </p>
      <p>
        အဓိက Customer တွေရဲ့ လိုအပ်ချက်၊ Complaint၊
        ဝယ်ယူမှုပုံစံနဲ့ Business Problem ကို နားလည်ပါ။
      </p>
      <p>
        Visit Plan၊ Follow-up Plan နဲ့
        Customer Development Plan တည်ဆောက်ပါ။
      </p>
    `;

  }

  if (
    q.includes("sales") ||
    q.includes("အရောင်း") ||
    q.includes("target") ||
    q.includes("ရောင်းအား")
  ) {

    return `
      <strong>Sales Target တိုးတက်စေရန်</strong>
      <p>
        လစဉ် Target ကို အပတ်စဉ်နဲ့ နေ့စဉ် Target အဖြစ် ခွဲပါ။
      </p>
      <p>
        Sales Gap ကို Salesperson၊ Territory၊ Product နဲ့
        Customer အလိုက် ခွဲခြမ်းစိတ်ဖြာပါ။
      </p>
      <p>
        People၊ Market နဲ့ Execution သုံးခုအပေါ်
        Action Plan ချပြီး အပတ်စဉ် Review ပြုလုပ်ပါ။
      </p>
    `;

  }

  if (
    q.includes("finance") ||
    q.includes("profit") ||
    q.includes("အမြတ်") ||
    q.includes("ငွေကြေး")
  ) {

    return `
      <strong>Finance Management</strong>
      <p>
        Revenue၊ Cost၊ Profit၊ Margin နဲ့ Cash Flow ကို
        တစ်ခုချင်းစီ ခွဲပြီး စောင့်ကြည့်ပါ။
      </p>
      <p>
        Budget vs Actual ကို ပုံမှန်နှိုင်းယှဉ်ပြီး
        မလိုအပ်တဲ့ Cost နဲ့ Cash Leakage ကို ရှာပါ။
      </p>
    `;

  }

  if (
    q.includes("hr") ||
    q.includes("employee") ||
    q.includes("ဝန်ထမ်း")
  ) {

    return `
      <strong>HR Management</strong>
      <p>
        လူမှန်နေရာမှန်၊ Clear KPI၊ Coaching၊
        Recognition နဲ့ Career Development ကို အဓိကထားပါ။
      </p>
    `;

  }

  if (
    q.includes("strategy") ||
    q.includes("မဟာဗျူဟာ")
  ) {

    return `
      <strong>Strategic Management</strong>
      <p>
        Market၊ Customer၊ Competitor နဲ့
        Company Capability ကို အရင်သုံးသပ်ပါ။
      </p>
      <p>
        ပြီးရင် Strategic Priority ၃ ခုလောက် သတ်မှတ်ပြီး
        Measurable Action Plan ပြုလုပ်ပါ။
      </p>
    `;

  }

  if (
    q.includes("pricing") ||
    q.includes("price") ||
    q.includes("စျေးနှုန်း")
  ) {

    return `
      <strong>Pricing Strategy</strong>
      <p>
        Cost တစ်ခုတည်းကို မကြည့်ဘဲ Customer Value၊
        Competitor Price နဲ့ Desired Margin ကို တွဲပြီး စဉ်းစားပါ။
      </p>
      <p>
        Margin မလုံလောက်ရင် ရောင်းအားတက်နေသော်လည်း
        Profit ကျဆင်းနိုင်ပါတယ်။
      </p>
    `;

  }

  return `
    <strong>Business Manager အနေနဲ့</strong>
    <p>
      ပြဿနာတစ်ခုကို ဖြေရှင်းတဲ့အခါ
      <strong>လူ၊ နံပါတ်နဲ့ လက်တွေ့အကောင်အထည်ဖော်မှု</strong>
      သုံးခုကို အရင်ကြည့်ပါ။
    </p>
    <p>
      ရလဒ်ကို တိုင်းတာပါ။ အကြီးမားဆုံး Gap ကို ရှာပါ။
      Root Cause ကို သတ်မှတ်ပြီး Action Plan ချမှတ်ပါ။
    </p>
  `;

}

function sendAIMessage(question) {

  if (!question.trim()) return;

  const container =
    document.getElementById(
      "chatMessages"
    );

  if (!container) return;

  container.insertAdjacentHTML(
    "beforeend",
    `
      <div class="chat-message user">
        <div class="message-avatar">
          AZ
        </div>
        <div class="message-content">
          <strong>You</strong>
          <p>${escapeHTML(question)}</p>
        </div>
      </div>
    `
  );

  const answer =
    getAIResponse(question);

  setTimeout(() => {

    container.insertAdjacentHTML(
      "beforeend",
      `
        <div class="chat-message assistant">
          <div class="message-avatar">
            AI
          </div>
          <div class="message-content">
            <strong>Business Coach</strong>
            <div>${answer}</div>
          </div>
        </div>
      `
    );

    container.scrollTop =
      container.scrollHeight;

  }, 350);

  container.scrollTop =
    container.scrollHeight;

}

// ======================================================
// AI TOOLS
// ======================================================

function openAITool(tool) {

  const messages = {

    sales:
      "လစဉ်အရောင်း Target အတွက် လက်တွေ့လုပ်ဆောင်နိုင်တဲ့ Sales Action Plan တစ်ခုရေးပေးပါ။",

    customer:
      "Customer Growth နဲ့ Customer Retention တိုးတက်အောင် ဘယ်လို Strategy ချမှတ်ရမလဲ။",

    team:
      "Performance မကောင်းတဲ့ Salesperson တစ်ယောက်အတွက် Coaching Plan တစ်ခုရေးပေးပါ။",

    business:
      "လုပ်ငန်းတိုးတက်ဖို့ လက်တွေ့အသုံးချနိုင်တဲ့ Business Growth Strategy တစ်ခုရေးပေးပါ။"

  };

  navigate("ai-coach");

  const input =
    document.getElementById(
      "chatInput"
    );

  if (!input) return;

  input.value =
    messages[tool] || "";

  sendAIMessage(
    input.value
  );

  input.value = "";

}

// ======================================================
// SEARCH
// ======================================================

function performSearch(query) {

  const text =
    query.trim().toLowerCase();

  if (!text) return;

  const course =
    COURSES.find(course =>
      course.title.toLowerCase().includes(text) ||
      course.description.toLowerCase().includes(text) ||
      course.category.toLowerCase().includes(text)
    );

  if (course) {

    state.currentCourseId =
      course.id;

    state.currentLessonIndex =
      0;

    saveState();

    navigate("lessons");

    return;

  }

  for (const course of COURSES) {

    const index =
      course.lessons.findIndex(
        lesson => {

          const plainContent =
            lesson.content
              .replace(/<[^>]*>/g, "")
              .toLowerCase();

          return (
            lesson.title
              .toLowerCase()
              .includes(text) ||
            plainContent.includes(text)
          );

        }
      );

    if (index !== -1) {

      state.currentCourseId =
        course.id;

      state.currentLessonIndex =
        index;

      saveState();

      navigate("lessons");

      return;

    }

  }

  showToast(
    "သင်တန်း သို့မဟုတ် သင်ခန်းစာ မတွေ့ပါ။"
  );

}

// ======================================================
// SIDEBAR
// ======================================================

function openSidebar() {

  document
    .getElementById("sidebar")
    ?.classList.add("open");

  document
    .getElementById("sidebarOverlay")
    ?.classList.add("show");

}

function closeSidebar() {

  document
    .getElementById("sidebar")
    ?.classList.remove("open");

  document
    .getElementById("sidebarOverlay")
    ?.classList.remove("show");

}

// ======================================================
// TOAST
// ======================================================

function showToast(message) {

  const toast =
    document.getElementById("toast");

  const toastMessage =
    document.getElementById("toastMessage");

  if (!toast || !toastMessage)
    return;

  toastMessage.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer =
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);

}

// ======================================================
// MODAL
// ======================================================

function closeModal() {

  document
    .getElementById("modalOverlay")
    ?.classList.remove("show");

}

// ======================================================
// LESSON ACTION
// ======================================================

function handleLessonAction(action) {

  if (action === "previous") {
    previousLesson();
    return;
  }

  if (action === "next") {
    nextLesson();
    return;
  }

  if (action === "complete") {

    const current =
      getCurrentLesson();

    completeLesson(
      current.course.id,
      current.index,
      current.lesson.title,
      current.course.title
    );

  }

}

// ======================================================
// INITIALIZE EVENTS
// ======================================================

let academyInitialized = false;

function initializeApp() {

  if (academyInitialized) {
    return;
  }

  academyInitialized = true;

  // ----------------------------------------------------
  // GLOBAL CLICK DELEGATION
  // ----------------------------------------------------

  document.addEventListener(
    "click",
    event => {

      const target =
        event.target;

      if (!(target instanceof Element)) {
        return;
      }

      // NAVIGATION
      const nav =
        target.closest(".nav-item");

      if (nav) {

        event.preventDefault();

        navigate(
          nav.dataset.page
        );

        return;

      }

      // DATA GO
      const go =
        target.closest("[data-go]");

      if (go) {

        event.preventDefault();

        navigate(
          go.dataset.go
        );

        return;

      }

      // COURSE
      const openCourse =
        target.closest(".open-course");

      if (openCourse) {

        event.preventDefault();

        const courseId =
          openCourse.dataset.course;

        const course =
          COURSES.find(
            item =>
              item.id === courseId
          );

        if (!course) return;

        if (
          openCourse.dataset.premiumLock === "true" &&
          !hasPremiumAccess()
        ) {
          showPremiumLock(course, 0);
          return;
        }

        openCourseAtProgress(courseId);

        return;

      }

      // LESSON COURSE
      const lessonCourse =
        target.closest(
          ".lesson-course-item"
        );

      if (lessonCourse) {

        event.preventDefault();

        const courseId =
          lessonCourse.dataset.course;

        const course =
          COURSES.find(
            item =>
              item.id === courseId
          );

        if (!course) return;

        if (isPremiumCourse(course) && !hasPremiumAccess()) {
          showPremiumLock(course, 0);
          return;
        }

        openCourseAtProgress(courseId);

        return;

      }

      // PREMIUM ACTION
      const premiumAction =
        target.closest("[data-premium-action]");

      if (premiumAction) {

        event.preventDefault();

        showPremiumLock(
          getCurrentCourse(),
          state.currentLessonIndex
        );

        return;

      }

      // LESSON ACTION
      const lessonAction =
        target.closest(
          "[data-lesson-action]"
        );

      if (lessonAction) {

        event.preventDefault();

        if (lessonAction.disabled) {
          return;
        }

        handleLessonAction(
          lessonAction.dataset.lessonAction
        );

        return;

      }

      // RECOMMENDATION
      const recommendation =
        target.closest(
          ".recommendation-item"
        );

      if (recommendation) {

        event.preventDefault();

        const courseId =
          recommendation.dataset.course;

        const course =
          COURSES.find(
            item =>
              item.id === courseId
          );

        if (!course) return;

        openCourseAtProgress(courseId);

        return;

      }

      // PRIORITY DELETE
      const deletePriority =
        target.closest(
          ".priority-delete"
        );

      if (deletePriority) {

        event.preventDefault();

        const index =
          Number(
            deletePriority.dataset.index
          );

        if (
          Number.isInteger(index) &&
          index >= 0 &&
          index <
            state.sales.priorities.length
        ) {

          state.sales.priorities.splice(
            index,
            1
          );

          saveState();

          renderPriorities();

          showToast(
            "Priority ဖျက်ပြီးပါပြီ။"
          );

        }

        return;

      }

      // AI QUESTIONS
      const aiQuestion =
        target.closest(".ai-question");

      if (aiQuestion) {

        const input =
          document.getElementById(
            "chatInput"
          );

        const send =
          document.getElementById(
            "sendChatBtn"
          );

        if (!input || !send)
          return;

        input.value =
          aiQuestion.textContent.trim();

        send.click();

        return;

      }

      // AI TOOLS
      const aiTool =
        target.closest(
          ".ai-tool-card"
        );

      if (aiTool) {

        openAITool(
          aiTool.dataset.tool
        );

      }

    }
  );

  // ----------------------------------------------------
  // COURSE FILTER
  // ----------------------------------------------------

  document
    .querySelectorAll(".filter-tab")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(".filter-tab")
            .forEach(item =>
              item.classList.remove(
                "active"
              )
            );

          button.classList.add(
            "active"
          );

          renderCourses(
            button.dataset.filter
          );

        }
      );

    });

  // ----------------------------------------------------
  // CONTINUE LEARNING
  // ----------------------------------------------------

  const continueBtn =
    document.getElementById(
      "continueLearningBtn"
    );

  if (continueBtn) {

    continueBtn.addEventListener(
      "click",
      () => {

        const target =
          getContinueLearningTarget();

        if (!target.courseId) return;

        openCourseAtProgress(
          target.courseId,
          target.lessonIndex
        );

      }
    );

  }

  // ----------------------------------------------------
  // SALES UPDATE
  // ----------------------------------------------------

  const updateSalesBtn =
    document.getElementById(
      "updateSalesBtn"
    );

  if (updateSalesBtn) {

    updateSalesBtn.addEventListener(
      "click",
      () => {

        const targetInput =
          document.getElementById(
            "salesTargetInput"
          );

        const actualInput =
          document.getElementById(
            "salesActualInput"
          );

        state.sales.target =
          Number(
            targetInput?.value
          ) || 0;

        state.sales.actual =
          Number(
            actualInput?.value
          ) || 0;

        state.sales.history.push(
          state.sales.actual
        );

        state.sales.history =
          state.sales.history.slice(-7);

        saveState();

        renderSales();
        renderReports();

        showToast(
          "Sales performance updated."
        );

      }
    );

  }

  // ----------------------------------------------------
  // ADD PRIORITY
  // ----------------------------------------------------

  const addPriorityBtn =
    document.getElementById(
      "addPriorityBtn"
    );

  if (addPriorityBtn) {

    addPriorityBtn.addEventListener(
      "click",
      () => {

        const input =
          document.getElementById(
            "priorityInput"
          );

        const value =
          input?.value.trim();

        if (!value) {

          showToast(
            "Priority ထည့်ပေးပါ။"
          );

          return;

        }

        state.sales.priorities.push(
          value
        );

        input.value = "";

        saveState();

        renderPriorities();

        showToast(
          "Priority ထည့်ပြီးပါပြီ။"
        );

      }
    );

  }

  // ----------------------------------------------------
  // CALCULATOR
  // ----------------------------------------------------

  const calculateBtn =
    document.getElementById(
      "calculateBtn"
    );

  if (calculateBtn) {

    calculateBtn.addEventListener(
      "click",
      calculatePrice
    );

  }

  // ----------------------------------------------------
  // AI CHAT
  // ----------------------------------------------------

  const sendChatBtn =
    document.getElementById(
      "sendChatBtn"
    );

  const chatInput =
    document.getElementById(
      "chatInput"
    );

  if (
    sendChatBtn &&
    chatInput
  ) {

    sendChatBtn.addEventListener(
      "click",
      () => {

        const value =
          chatInput.value;

        if (!value.trim())
          return;

        sendAIMessage(value);

        chatInput.value = "";

      }
    );

    chatInput.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          event.preventDefault();

          sendChatBtn.click();

        }

      }
    );

  }

  // ----------------------------------------------------
  // SEARCH
  // ----------------------------------------------------

  const search =
    document.getElementById(
      "globalSearch"
    );

  if (search) {

    search.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          performSearch(
            event.target.value
          );

        }

      }
    );

  }

  // ----------------------------------------------------
  // MOBILE SIDEBAR
  // ----------------------------------------------------

  const mobileMenu =
    document.getElementById(
      "mobileMenu"
    );

  if (mobileMenu) {
    mobileMenu.addEventListener(
      "click",
      openSidebar
    );
  }

  const overlay =
    document.getElementById(
      "sidebarOverlay"
    );

  if (overlay) {
    overlay.addEventListener(
      "click",
      closeSidebar
    );
  }

  // ----------------------------------------------------
  // SETTINGS
  // ----------------------------------------------------

  const reminder =
    document.getElementById(
      "reminderToggle"
    );

  if (reminder) {

    reminder.addEventListener(
      "change",
      event => {

        state.settings.reminder =
          event.target.checked;

        saveState();

      }
    );

  }

  const tracking =
    document.getElementById(
      "trackingToggle"
    );

  if (tracking) {

    tracking.addEventListener(
      "change",
      event => {

        state.settings.tracking =
          event.target.checked;

        saveState();

      }
    );

  }

  // ----------------------------------------------------
  // RESET
  // ----------------------------------------------------

  const resetBtn =
    document.getElementById(
      "resetDataBtn"
    );

  if (resetBtn) {

    resetBtn.addEventListener(
      "click",
      () => {

        const confirmed =
          confirm(
            "Aung Business Academy ရဲ့ Learning Progress အားလုံးကို Reset လုပ်မှာ သေချာပါသလား?"
          );

        if (!confirmed)
          return;

        localStorage.removeItem(
          STORAGE_KEY
        );

        state =
          createDefaultState();

        saveState();

        renderAll();

        showToast(
          "Academy Data အားလုံး Reset ပြီးပါပြီ။"
        );

      }
    );

  }

  // ----------------------------------------------------
  // NOTIFICATION
  // ----------------------------------------------------

  const notification =
    document.getElementById(
      "notificationBtn"
    );

  if (notification) {

    notification.addEventListener(
      "click",
      () => {

        showToast(
          "လက်ရှိ Notification မရှိသေးပါ။"
        );

      }
    );

  }

  // ----------------------------------------------------
  // MODAL
  // ----------------------------------------------------

  const modalClose =
    document.getElementById(
      "modalClose"
    );

  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeModal
    );

  }

  const modalOverlay =
    document.getElementById(
      "modalOverlay"
    );

  if (modalOverlay) {

    modalOverlay.addEventListener(
      "click",
      event => {

        if (
          event.target.id ===
          "modalOverlay"
        ) {

          closeModal();

        }

      }
    );

  }

}

// ======================================================
// RENDER ALL
// ======================================================

function renderAll() {

  renderDashboard();

  renderCourses();

  renderLessons();

  renderProgress();

  renderSales();

  renderCalculator();

  renderReports();
  renderAchievementPanel();

  const reminder =
    document.getElementById(
      "reminderToggle"
    );

  const tracking =
    document.getElementById(
      "trackingToggle"
    );

  if (reminder) {

    reminder.checked =
      !!state.settings.reminder;

  }

  if (tracking) {

    tracking.checked =
      !!state.settings.tracking;

  }

}

// ======================================================
// INIT
// ======================================================

function initAcademy() {

  state =
    loadState();

  // Migrate/normalize V8.0 data without changing the 13-course content.
  if (!Array.isArray(state.achievements)) state.achievements = [];
  if (!state.learning) state.learning = createDefaultState().learning;
  if (!state.quizResults) state.quizResults = {};
  if (!Array.isArray(state.certificates)) state.certificates = [];
  if (!state.premium) state.premium = { isPremium: false, plan: "free" };
  state.version = 81;
  syncLearningPointer();
  saveState();

  console.log(
    `Aung Business Academy V${ACADEMY_VERSION} initialized.`
  );

  console.log(
    `Courses: ${COURSES.length}`
  );

  console.log(
    `Lessons: ${getTotalLessons()}`
  );

  initializeApp();

  renderAll();

}

// ======================================================
// DOM READY
// ======================================================

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initAcademy,
    {
      once: true
    }
  );

} else {

  initAcademy();

}

// ======================================================
// GLOBAL API
// ======================================================

window.AungAcademy = {

  get state() {
    return state;
  },

  courses:
    COURSES,

  navigate,

  renderAll,

  renderLessons,

  completeLesson,

  previousLesson,

  nextLesson,

  getOverallProgress,

  getCourseProgress,

  getTotalLessons,

  getContinueLearningTarget,
  openCourseAtProgress,
  checkAchievements,
  getAchievementSummary,
  ACHIEVEMENTS,
  hasPremiumAccess,
  isPremiumCourse,
  isPremiumLesson,
  getQuizForLesson,
  submitQuiz,
  getQuizResult,
  isCourseCertificateEligible,
  issueCertificate

};
