// ==========================================
// AUNG BUSINESS ACADEMY
// APP.JS V1
// ==========================================


// -------------------------------
// DATA
// -------------------------------

const lessons = [
  {
    title: "Business ဆိုတာဘာလဲ?",
    description: "Business ရဲ့ အခြေခံသဘောတရားကို နားလည်ပါ။",
    premium: false
  },
  {
    title: "Business Idea ဘယ်လိုရွေးမလဲ?",
    description: "ကိုယ်နဲ့ကိုက်ညီတဲ့ Business Idea ရွေးချယ်နည်း။",
    premium: false
  },
  {
    title: "Customer ဘယ်လိုရှာမလဲ?",
    description: "ကိုယ့်ရဲ့ Target Customer ကို သတ်မှတ်နည်း။",
    premium: false
  },
  {
    title: "Product ဘယ်လိုရွေးမလဲ?",
    description: "Customer လိုအပ်ချက်နဲ့ကိုက်တဲ့ Product ရွေးနည်း။",
    premium: false
  },
  {
    title: "Sales တိုးအောင် ဘယ်လိုလုပ်မလဲ?",
    description: "Sales တိုးတက်အောင် အသုံးချနိုင်တဲ့ အခြေခံနည်းလမ်းများ။",
    premium: false
  },
  {
    title: "Marketing Strategy",
    description: "Business အတွက် Marketing Strategy တည်ဆောက်နည်း။",
    premium: true
  },
  {
    title: "Pricing Strategy",
    description: "Product Price ကို မှန်ကန်စွာသတ်မှတ်နည်း။",
    premium: true
  },
  {
    title: "Profit & Cost Management",
    description: "ကုန်ကျစရိတ်နဲ့ အမြတ်ကို စီမံခန့်ခွဲနည်း။",
    premium: true
  },
  {
    title: "Business Plan",
    description: "Business Plan တစ်ခုကို အစမှအဆုံးရေးဆွဲနည်း။",
    premium: true
  },
  {
    title: "Business Growth Strategy",
    description: "Business ကို တိုးချဲ့ပြီး Scale လုပ်နည်း။",
    premium: true
  }
];


// -------------------------------
// INITIALIZE
// -------------------------------

document.addEventListener("DOMContentLoaded", function () {

  const lessonCount = document.getElementById("lessonCount");

  if (lessonCount) {
    lessonCount.textContent = lessons.length;
  }

  updateProgress();

});


// -------------------------------
// START LEARNING
// -------------------------------

function startLearning() {

  alert(
    "🚀 Welcome to Aung Business Academy!\n\n" +
    "Your Business Journey Starts Now."
  );

  openLessons();
}


// -------------------------------
// OPEN LESSONS
// -------------------------------

function openLessons() {

  let message = "📚 BUSINESS LESSONS\n\n";

  lessons.forEach((lesson, index) => {

    if (lesson.premium) {
      message +=
        `${index + 1}. 🔒 ${lesson.title} — PREMIUM\n`;
    } else {
      message +=
        `${index + 1}. 🟢 ${lesson.title} — FREE\n`;
    }

  });

  alert(message);
}


// -------------------------------
// OPEN TOOLS
// -------------------------------

function openTools() {

  alert(
    "🧰 BUSINESS TOOLS\n\n" +
    "Coming Soon:\n\n" +
    "• Profit Calculator\n" +
    "• Pricing Calculator\n" +
    "• Break-even Calculator\n" +
    "• Sales Target Calculator\n" +
    "• Business Plan Generator"
  );

}


// -------------------------------
// AI BUSINESS COACH
// -------------------------------

function openAI() {

  alert(
    "🤖 AI BUSINESS COACH\n\n" +
    "🔒 Premium Feature\n\n" +
    "Upgrade to Premium to unlock your AI Business Coach."
  );

}


// -------------------------------
// PREMIUM
// -------------------------------

function openPremium() {

  alert(
    "👑 PREMIUM ACADEMY\n\n" +
    "Unlock:\n\n" +
    "✓ Advanced Business Lessons\n" +
    "✓ Business Strategy\n" +
    "✓ Pricing Strategy\n" +
    "✓ Marketing Strategy\n" +
    "✓ Sales Strategy\n" +
    "✓ Business Tools\n" +
    "✓ Business Templates\n" +
    "✓ AI Business Coach\n\n" +
    "💳 Subscription System — Coming Soon"
  );

}


// -------------------------------
// PROGRESS
// -------------------------------

function updateProgress() {

  const progress = document.getElementById("progress");

  if (!progress) return;

  const completed =
    Number(localStorage.getItem("completedLessons")) || 0;

  const freeLessons =
    lessons.filter(lesson => !lesson.premium).length;

  const percentage =
    freeLessons === 0
      ? 0
      : Math.round((completed / freeLessons) * 100);

  progress.textContent = percentage + "%";

}
