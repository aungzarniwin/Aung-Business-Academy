<!DOCTYPE html>
<html lang="my">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
<meta name="theme-color" content="#6d28d9">
<title>Aung Business Academy</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --primary:#6d28d9;
  --primary2:#8b5cf6;
  --bg:#f5f7fb;
  --card:#fff;
  --text:#172033;
  --muted:#6b7280;
  --border:#e5e7eb;
  --green:#16a34a;
  --orange:#f59e0b;
  --blue:#2563eb;
}
html,body{
  width:100%;
  min-height:100%;
}
body{
  font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;
  background:var(--bg);
  color:var(--text);
}
button,input{
  font:inherit;
}
button{
  border:0;
  cursor:pointer;
}
.app{
  min-height:100vh;
}
/* SIDEBAR */
.sidebar{
  position:fixed;
  left:0;
  top:0;
  bottom:0;
  width:260px;
  background:#fff;
  border-right:1px solid var(--border);
  z-index:1000;
  display:flex;
  flex-direction:column;
  overflow-y:auto;
}
.sidebar-logo{
  height:82px;
  display:flex;
  align-items:center;
  gap:12px;
  padding:18px 20px;
  border-bottom:1px solid var(--border);
}
.logo-mark{
  width:42px;
  height:42px;
  border-radius:13px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:linear-gradient(135deg,var(--primary),var(--primary2));
  color:#fff;
  font-size:23px;
  font-weight:800;
}
.logo-text{
  display:flex;
  flex-direction:column;
}
.logo-text strong{
  font-size:15px;
}
.logo-text span{
  font-size:12px;
  color:var(--muted);
}
.sidebar-profile{
  margin:16px;
  padding:13px;
  border:1px solid var(--border);
  border-radius:14px;
  display:flex;
  align-items:center;
  gap:10px;
  cursor:pointer;
}
.profile-avatar,
.top-avatar{
  width:40px;
  height:40px;
  border-radius:50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background:#ede9fe;
  color:var(--primary);
  font-weight:800;
}
.profile-info{
  flex:1;
  min-width:0;
  display:flex;
  flex-direction:column;
}
.profile-info strong{
  font-size:13px;
}
.profile-info span{
  font-size:11px;
  color:var(--muted);
}
.profile-arrow{
  color:#9ca3af;
  font-size:22px;
}
.sidebar-nav{
  padding:4px 12px;
  flex:1;
}
.nav-section-title{
  padding:18px 10px 8px;
  color:#9ca3af;
  font-size:10px;
  font-weight:800;
  letter-spacing:1px;
}
.nav-item{
  width:100%;
  min-height:46px;
  margin:2px 0;
  padding:0 12px;
  border-radius:11px;
  background:transparent;
  color:#4b5563;
  display:flex;
  align-items:center;
  gap:12px;
  text-align:left;
  transition:.2s;
}
.nav-item:hover{
  background:#f5f3ff;
  color:var(--primary);
}
.nav-item.active{
  background:#ede9fe;
  color:var(--primary);
  font-weight:700;
}
.nav-icon{
  width:23px;
  text-align:center;
  font-size:17px;
}
.nav-badge{
  margin-left:auto;
  font-size:9px;
  background:var(--primary);
  color:#fff;
  border-radius:8px;
  padding:3px 6px;
}
.sidebar-footer{
  padding:15px;
}
.academy-status{
  padding:10px 12px;
  background:#f9fafb;
  border-radius:10px;
  color:#6b7280;
  font-size:11px;
  display:flex;
  align-items:center;
  gap:7px;
}
.status-dot{
  width:7px;
  height:7px;
  border-radius:50%;
  background:#22c55e;
}
/* MAIN */
.main{
  margin-left:260px;
  min-height:100vh;
}
.topbar{
  height:82px;
  background:#fff;
  border-bottom:1px solid var(--border);
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 30px;
  position:sticky;
  top:0;
  z-index:500;
}
.topbar-left{
  display:flex;
  align-items:center;
  gap:15px;
}
.page-heading h1{
  font-size:22px;
  line-height:1.2;
}
.page-heading p{
  margin-top:4px;
  color:var(--muted);
  font-size:12px;
}
.topbar-right{
  display:flex;
  align-items:center;
  gap:12px;
}
.global-search{
  width:230px;
  height:40px;
  border:1px solid var(--border);
  border-radius:11px;
  display:flex;
  align-items:center;
  gap:8px;
  padding:0 12px;
  background:#fff;
}
.global-search input{
  border:0;
  outline:0;
  width:100%;
  background:transparent;
  font-size:12px;
}
.icon-btn{
  width:40px;
  height:40px;
  border-radius:11px;
  background:#f8fafc;
  position:relative;
}
.notification-dot{
  position:absolute;
  width:7px;
  height:7px;
  border-radius:50%;
  background:#ef4444;
  top:8px;
  right:8px;
}
.top-profile{
  display:flex;
  align-items:center;
  gap:8px;
  background:transparent;
}
.top-avatar{
  width:36px;
  height:36px;
}
.top-profile-name{
  font-size:12px;
  font-weight:700;
}
.mobile-menu{
  display:none;
  width:40px;
  height:40px;
  background:#f3f4f6;
  border-radius:10px;
  font-size:20px;
}
/* PAGE */
.page{
  display:none;
  padding:30px;
}
.page.active{
  display:block;
}
.eyebrow{
  display:block;
  color:var(--primary);
  font-size:10px;
  font-weight:800;
  letter-spacing:1.2px;
  margin-bottom:8px;
}
.page-intro{
  margin-bottom:25px;
}
.page-intro h2{
  font-size:27px;
  margin-bottom:7px;
}
.page-intro p{
  color:var(--muted);
  font-size:13px;
}
/* BUTTONS */
.primary-btn{
  background:linear-gradient(135deg,var(--primary),var(--primary2));
  color:#fff;
  border-radius:10px;
  padding:12px 18px;
  font-weight:700;
  font-size:13px;
  transition:.2s;
}
.primary-btn:hover{
  transform:translateY(-1px);
  opacity:.95;
}
.primary-btn.small{
  padding:9px 13px;
  font-size:11px;
}
.secondary-btn{
  background:#f3f4f6;
  color:#374151;
  border-radius:9px;
  padding:9px 14px;
  font-size:12px;
  font-weight:700;
}
.text-btn{
  background:transparent;
  color:var(--primary);
  font-size:12px;
  font-weight:700;
}
/* HERO */
.dashboard-hero{
  min-height:300px;
  padding:35px;
  border-radius:22px;
  background:linear-gradient(135deg,#24104f,#6d28d9 65%,#8b5cf6);
  color:#fff;
  display:flex;
  justify-content:space-between;
  align-items:center;
  overflow:hidden;
  position:relative;
}
.hero-content{
  max-width:650px;
  position:relative;
  z-index:2;
}
.hero-content .eyebrow{
  color:#ddd6fe;
}
.hero-content h2{
  font-size:34px;
  line-height:1.2;
  margin-bottom:15px;
}
.hero-content p{
  color:#e9e5ff;
  font-size:14px;
  line-height:1.8;
  max-width:610px;
  margin-bottom:22px;
}
.hero-visual{
  width:280px;
  height:230px;
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
}
.hero-circle{
  width:170px;
  height:170px;
  border-radius:50%;
  background:rgba(255,255,255,.13);
  border:1px solid rgba(255,255,255,.25);
  display:flex;
  align-items:center;
  justify-content:center;
}
.hero-icon{
  font-size:70px;
}
.floating-card{
  position:absolute;
  padding:9px 13px;
  background:rgba(255,255,255,.95);
  color:#312e81;
  border-radius:10px;
  font-size:11px;
  font-weight:800;
  box-shadow:0 10px 30px rgba(0,0,0,.15);
}
.floating-card-1{top:15px;right:5px}
.floating-card-2{bottom:18px;left:5px}
.floating-card-3{bottom:3px;right:20px}
/* STATS */
.stats-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:15px;
  margin:22px 0;
}
.stat-card{
  background:#fff;
  border:1px solid var(--border);
  border-radius:16px;
  padding:18px;
  display:flex;
  align-items:center;
  gap:13px;
}
.stat-icon{
  width:44px;
  height:44px;
  border-radius:12px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
}
.stat-icon.purple{background:#ede9fe}
.stat-icon.green{background:#dcfce7}
.stat-icon.orange{background:#fef3c7}
.stat-icon.blue{background:#dbeafe}
.stat-icon.pink{background:#fce7f3}
.stat-card span{
  display:block;
  color:var(--muted);
  font-size:11px;
  margin-bottom:4px;
}
.stat-card strong{
  font-size:21px;
}
/* DASHBOARD */
.dashboard-grid{
  display:grid;
  grid-template-columns:1.4fr 1fr;
  gap:18px;
}
.dashboard-card{
  background:#fff;
  border:1px solid var(--border);
  border-radius:18px;
  padding:22px;
  margin-bottom:20px;
}
.section-header{
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  gap:15px;
  margin-bottom:18px;
}
.section-header h2{
  font-size:18px;
}
.course-progress-box{
  background:#f8fafc;
  border-radius:14px;
  padding:18px;
  margin-bottom:16px;
}
.course-progress-top{
  display:flex;
  justify-content:space-between;
  margin-bottom:12px;
}
.course-progress-top strong{
  display:block;
  font-size:13px;
}
.course-progress-top span{
  display:block;
  color:var(--primary);
  font-size:11px;
  margin-top:4px;
}
.progress-track{
  width:100%;
  height:8px;
  border-radius:20px;
  background:#e5e7eb;
  overflow:hidden;
}
.progress-fill{
  height:100%;
  background:linear-gradient(90deg,var(--primary),var(--primary2));
  border-radius:20px;
  transition:.3s;
}
.course-progress-bottom{
  display:flex;
  justify-content:space-between;
  margin-top:12px;
  color:var(--muted);
  font-size:11px;
}
.course-progress-bottom strong{
  color:#374151;
}
.quick-actions{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:10px;
}
.quick-action{
  text-align:left;
  padding:14px;
  border:1px solid var(--border);
  border-radius:12px;
  background:#fff;
  transition:.2s;
}
.quick-action:hover{
  border-color:#c4b5fd;
  background:#faf8ff;
}
.quick-action span{
  display:block;
  font-size:22px;
  margin-bottom:7px;
}
.quick-action strong{
  display:block;
  font-size:12px;
}
.quick-action small{
  display:block;
  color:var(--muted);
  margin-top:4px;
  font-size:10px;
}
.dashboard-section{
  margin-top:30px;
}
.learning-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:14px;
}
.learning-card{
  text-align:left;
  padding:20px;
  background:#fff;
  border:1px solid var(--border);
  border-radius:16px;
  transition:.2s;
}
.learning-card:hover{
  transform:translateY(-2px);
  border-color:#c4b5fd;
  box-shadow:0 8px 25px rgba(0,0,0,.05);
}
.learning-card span{
  display:block;
  font-size:27px;
  margin-bottom:12px;
}
.learning-card strong{
  display:block;
  font-size:13px;
}
.learning-card small{
  display:block;
  color:var(--muted);
  font-size:10px;
  margin-top:5px;
}
/* COURSES */
.courses-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:18px;
}
.course-card{
  background:#fff;
  border:1px solid var(--border);
  border-radius:18px;
  overflow:hidden;
}
.course-cover{
  height:120px;
  padding:20px;
  background:linear-gradient(135deg,#ede9fe,#ddd6fe);
  display:flex;
  align-items:flex-start;
  justify-content:space-between;
}
.course-cover span{
  font-size:10px;
  font-weight:800;
  color:#6d28d9;
}
.course-cover strong{
  font-size:42px;
}
.course-card-body{
  padding:20px;
}
.course-card-body h3{
  font-size:17px;
  margin-bottom:8px;
}
.course-card-body p{
  color:var(--muted);
  font-size:12px;
  line-height:1.7;
  margin-bottom:16px;
}
/* LESSONS */
.lesson-toolbar{
  background:#fff;
  border:1px solid var(--border);
  padding:15px;
  border-radius:15px;
  display:flex;
  justify-content:space-between;
  gap:15px;
  margin-bottom:18px;
}
.lesson-search{
  min-width:250px;
  height:40px;
  display:flex;
  align-items:center;
  gap:8px;
  border:1px solid var(--border);
  border-radius:10px;
  padding:0 11px;
}
.lesson-search input{
  width:100%;
  border:0;
  outline:0;
  font-size:12px;
}
.lesson-filters{
  display:flex;
  gap:6px;
  flex-wrap:wrap;
}
.filter-btn{
  padding:9px 12px;
  border-radius:9px;
  background:#f3f4f6;
  color:#6b7280;
  font-size:11px;
}
.filter-btn.active{
  background:#ede9fe;
  color:var(--primary);
  font-weight:700;
}
.lessons-grid{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:14px;
}
.lesson-card{
  background:#fff;
  border:1px solid var(--border);
  border-radius:16px;
  padding:17px;
  display:flex;
  gap:14px;
}
.lesson-number{
  width:40px;
  height:40px;
  flex:none;
  border-radius:11px;
  background:#ede9fe;
  color:var(--primary);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:12px;
  font-weight:800;
}
.lesson-card-content{
  flex:1;
}
.lesson-category{
  color:var(--primary);
  font-size:9px;
  font-weight:800;
  text-transform:uppercase;
}
.lesson-card h3{
  font-size:14px;
  margin:6px 0;
}
.lesson-card p{
  color:var(--muted);
  font-size:11px;
  line-height:1.6;
  margin-bottom:12px;
}
/* PROGRESS */
.progress-overview{
  background:#fff;
  border:1px solid var(--border);
  border-radius:18px;
  padding:25px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:20px;
}
.progress-main-card{
  display:flex;
  align-items:center;
  gap:20px;
}
.progress-big-number{
  width:110px;
  height:110px;
  border-radius:50%;
  background:#ede9fe;
  display:flex;
  align-items:center;
  justify-content:center;
}
.progress-big-number span{
  color:var(--primary);
  font-size:27px;
  font-weight:800;
}
.progress-main-card h3{
  margin-bottom:7px;
}
.progress-main-card p{
  color:var(--muted);
  font-size:12px;
}
.progress-stats{
  display:flex;
  gap:30px;
}
.mini-stat strong{
  display:block;
  font-size:24px;
}
.mini-stat span{
  color:var(--muted);
  font-size:11px;
}
/* CALCULATORS / TOOLS */
.calculator-grid,
.tools-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:15px;
}
.calculator-card,
.tool-card{
  background:#fff;
  border:1px solid var(--border);
  border-radius:16px;
  padding:22px;
  text-align:left;
  transition:.2s;
}
.calculator-card:hover,
.tool-card:hover{
  border-color:#c4b5fd;
  transform:translateY(-2px);
}
.calculator-card span,
.tool-card span{
  display:block;
  font-size:30px;
  margin-bottom:14px;
}
.calculator-card strong,
.tool-card strong{
  display:block;
  font-size:14px;
}
.calculator-card small,
.tool-card small{
  display:block;
  color:var(--muted);
  font-size:11px;
  margin-top:6px;
}
/* AI */
.ai-layout{
  display:grid;
  grid-template-columns:1.6fr .8fr;
  gap:18px;
}
.ai-chat-card,
.ai-prompt-card{
  background:#fff;
  border:1px solid var(--border);
  border-radius:18px;
  overflow:hidden;
}
.ai-chat-header{
  padding:18px;
  display:flex;
  align-items:center;
  gap:12px;
  border-bottom:1px solid var(--border);
}
.ai-avatar{
  width:42px;
  height:42px;
  border-radius:12px;
  background:#ede9fe;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:20px;
}
.ai-chat-header strong{
  display:block;
  font-size:13px;
}
.ai-chat-header span{
  display:block;
  color:#22c55e;
  font-size:10px;
  margin-top:4px;
}
.chat-messages{
  height:380px;
  overflow-y:auto;
  padding:18px;
}
.chat-message{
  display:flex;
  gap:10px;
  margin-bottom:18px;
}
.chat-avatar{
  width:32px;
  height:32px;
  border-radius:10px;
  background:#f3f4f6;
  display:flex;
  align-items:center;
  justify-content:center;
  flex:none;
}
.message-content strong{
  font-size:11px;
}
.message-content p{
  margin-top:5px;
  color:#4b5563;
  font-size:12px;
  line-height:1.7;
  white-space:pre-line;
}
.chat-message.user{
  flex-direction:row-reverse;
}
.chat-input-area{
  padding:14px;
  border-top:1px solid var(--border);
  display:flex;
  gap:8px;
}
.chat-input-area input{
  flex:1;
  min-width:0;
  border:1px solid var(--border);
  border-radius:10px;
  padding:11px;
  outline:0;
  font-size:12px;
}
.ai-prompt-card{
  padding:20px;
  height:max-content;
}
.ai-prompt-card h3{
  margin-bottom:15px;
}
.ai-prompt{
  width:100%;
  text-align:left;
  padding:12px;
  margin-bottom:8px;
  background:#f8fafc;
  border-radius:10px;
  font-size:11px;
  color:#374151;
}
.ai-prompt:hover{
  background:#ede9fe;
  color:var(--primary);
}
/* SETTINGS */
.settings-card{
  background:#fff;
  border:1px solid var(--border);
  border-radius:18px;
  overflow:hidden;
}
.settings-row{
  min-height:75px;
  padding:15px 20px;
  border-bottom:1px solid var(--border);
  display:flex;
  align-items:center;
  gap:14px;
}
.settings-row:last-child{
  border-bottom:0;
}
.settings-icon{
  width:40px;
  height:40px;
  border-radius:10px;
  background:#f3f4f6;
  display:flex;
  align-items:center;
  justify-content:center;
}
.settings-info{
  flex:1;
}
.settings-info strong{
  display:block;
  font-size:13px;
}
.settings-info span{
  display:block;
  color:var(--muted);
  font-size:11px;
  margin-top:3px;
}
.settings-value{
  color:var(--muted);
  font-size:11px;
}
/* MODAL */
.modal-overlay{
  position:fixed;
  inset:0;
  background:rgba(15,23,42,.55);
  display:none;
  align-items:center;
  justify-content:center;
  padding:20px;
  z-index:3000;
}
.modal-overlay.show{
  display:flex;
}
.modal{
  width:min(520px,100%);
  max-height:90vh;
  overflow-y:auto;
  background:#fff;
  border-radius:20px;
  position:relative;
  padding:25px;
  box-shadow:0 25px 70px rgba(0,0,0,.25);
}
.modal-close{
  position:absolute;
  top:12px;
  right:14px;
  width:34px;
  height:34px;
  border-radius:50%;
  background:#f3f4f6;
  font-size:22px;
  color:#6b7280;
}
.modal-content-inner h2{
  font-size:22px;
  margin-bottom:12px;
}
.modal-content-inner p{
  color:#6b7280;
  font-size:13px;
  line-height:1.8;
}
.modal-content-inner input{
  width:100%;
  height:42px;
  border:1px solid var(--border);
  border-radius:10px;
  padding:0 12px;
  outline:0;
  font-size:12px;
}
/* MOBILE NAV */
.mobile-nav{
  display:none;
}
/* OVERLAY */
.sidebar-overlay{
  display:none;
}
/* RESPONSIVE */
@media(max-width:1100px){
  .stats-grid{
    grid-template-columns:repeat(2,1fr);
  }
  .calculator-grid,
  .tools-grid{
    grid-template-columns:repeat(2,1fr);
  }
  .learning-grid{
    grid-template-columns:repeat(2,1fr);
  }
}
@media(max-width:800px){
  .sidebar{
    transform:translateX(-100%);
    transition:.25s;
    box-shadow:10px 0 30px rgba(0,0,0,.12);
  }
  .sidebar.open{
    transform:translateX(0);
  }
  .sidebar-overlay{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.35);
    z-index:900;
    display:block;
    opacity:0;
    pointer-events:none;
    transition:.2s;
  }
  .sidebar-overlay.show{
    opacity:1;
    pointer-events:auto;
  }
  .main{
    margin-left:0;
    padding-bottom:72px;
  }
  .topbar{
    height:70px;
    padding:0 15px;
  }
  .mobile-menu{
    display:block;
  }
  .top-profile-name,
  .global-search{
    display:none;
  }
  .page{
    padding:20px 15px;
  }
  .dashboard-hero{
    min-height:auto;
    padding:25px 20px;
  }
  .hero-content h2{
    font-size:27px;
  }
  .hero-visual{
    display:none;
  }
  .dashboard-grid,
  .ai-layout{
    grid-template-columns:1fr;
  }
  .lessons-grid,
  .courses-grid{
    grid-template-columns:1fr;
  }
  .lesson-toolbar{
    flex-direction:column;
  }
  .lesson-search{
    min-width:0;
  }
  .progress-overview{
    flex-direction:column;
    align-items:flex-start;
    gap:25px;
  }
  .mobile-nav{
    position:fixed;
    display:flex;
    left:0;
    right:0;
    bottom:0;
    height:65px;
    background:#fff;
    border-top:1px solid var(--border);
    z-index:2000;
    justify-content:space-around;
  }
  .mobile-nav button{
    flex:1;
    background:#fff;
    color:#9ca3af;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:3px;
  }
  .mobile-nav button.active{
    color:var(--primary);
  }
  .mobile-nav span{
    font-size:18px;
  }
  .mobile-nav small{
    font-size:9px;
  }
}
@media(max-width:520px){
  .stats-grid{
    grid-template-columns:1fr 1fr;
    gap:9px;
  }
  .stat-card{
    padding:12px;
  }
  .stat-icon{
    width:36px;
    height:36px;
  }
  .stat-card strong{
    font-size:17px;
  }
  .learning-grid,
  .calculator-grid,
  .tools-grid{
    grid-template-columns:1fr 1fr;
    gap:9px;
  }
  .learning-card,
  .calculator-card,
  .tool-card{
    padding:15px;
  }
  .quick-actions{
    grid-template-columns:1fr;
  }
  .page-heading h1{
    font-size:18px;
  }
}
</style>
</head>
<body>
<div class="app">
<!-- =====================================================
     SIDEBAR
===================================================== -->
<aside class="sidebar" id="sidebar">
  <div class="sidebar-logo">
<div class="logo-mark">A</div>
<div class="logo-text">
  <strong>Aung Business</strong>
  <span>Academy</span>
</div>
  </div>
  <div class="sidebar-profile" data-action="profile">
<div class="profile-avatar">A</div>
<div class="profile-info">
  <strong>Aung Zar Ni Win</strong>
  <span>Business Manager</span>
</div>
<span class="profile-arrow">›</span>
  </div>
  <nav class="sidebar-nav">
<div class="nav-section-title">MAIN MENU</div>
<button class="nav-item active" data-page="dashboardPage">
  <span class="nav-icon">🏠</span>
  <span>Dashboard</span>
</button>
<button class="nav-item" data-page="coursesPage">
  <span class="nav-icon">📚</span>
  <span>My Courses</span>
</button>
<button class="nav-item" data-page="lessonsPage">
  <span class="nav-icon">📖</span>
  <span>Lessons</span>
</button>
<button class="nav-item" data-page="progressPage">
  <span class="nav-icon">📈</span>
  <span>My Progress</span>
</button>
<div class="nav-section-title">BUSINESS</div>
<button class="nav-item" data-page="salesPage">
  <span class="nav-icon">🎯</span>
  <span>Sales Manager</span>
</button>
<button class="nav-item" data-page="calculatorPage">
  <span class="nav-icon">🧮</span>
  <span>Pricing Calculator</span>
</button>
<button class="nav-item" data-page="reportsPage">
  <span class="nav-icon">📊</span>
  <span>Reports</span>
</button>
<div class="nav-section-title">AI & TOOLS</div>
<button class="nav-item" data-page="aiPage">
  <span class="nav-icon">🤖</span>
  <span>AI Business Coach</span>
  <span class="nav-badge">AI</span>
</button>
<button class="nav-item" data-page="toolsPage">
  <span class="nav-icon">🛠️</span>
  <span>AI Tools</span>
</button>
<div class="nav-section-title">SYSTEM</div>
<button class="nav-item" data-page="settingsPage">
  <span class="nav-icon">⚙️</span>
  <span>Settings</span>
</button>
  </nav>
  <div class="sidebar-footer">
    <div class="academy-status">
      <span class="status-dot"></span>
      V8.0 Professional
    </div>
  </div>
</aside>
<div class="sidebar-overlay" id="sidebarOverlay"></div>
<!-- =====================================================
     MAIN
===================================================== -->
<main class="main">
<header class="topbar">
  <div class="topbar-left">
<button class="mobile-menu" id="mobileMenu">
  ☰
</button>
<div class="page-heading">
  <h1 id="pageTitle">Dashboard</h1>
  <p id="pageSubtitle">
    Business growth starts with better decisions.
  </p>
</div>
  </div>
  <div class="topbar-right">
<div class="global-search">
  <span>🔍</span>
  <input
    id="globalSearch"
    type="search"
    placeholder="Search lessons..."
  >
</div>
<button class="icon-btn" id="notificationBtn">
  🔔
  <span class="notification-dot"></span>
</button>
<button class="top-profile" data-action="profile">
  <span class="top-avatar">A</span>
  <span class="top-profile-name">
    Aung
  </span>
</button>
  </div>
</header>
<!-- =====================================================
     DASHBOARD
===================================================== -->
<section class="page active" id="dashboardPage">
  <div class="dashboard-hero">
<div class="hero-content">
  <span class="eyebrow">
    AUNG BUSINESS ACADEMY
  </span>
  <h2>
    Build Better Business.<br>
    Become a Better Leader.
  </h2>
  <p>
    လက်တွေ့အသုံးချနိုင်တဲ့ Business Management
    Skills တွေကို တစ်ဆင့်ချင်းလေ့လာပြီး
    ကိုယ့်ရဲ့ Career နဲ့ Business ကို တိုးတက်အောင်လုပ်ပါ။
  </p>
  <button class="primary-btn" data-page="lessonsPage">
    Start Learning →
  </button>
</div>
<div class="hero-visual">
  <div class="hero-circle">
    <div class="hero-icon">📊</div>
  </div>
  <div class="floating-card floating-card-1">
    🎯 Target
  </div>
  <div class="floating-card floating-card-2">
    📈 Growth
  </div>
  <div class="floating-card floating-card-3">
    👥 Leadership
  </div>
</div>
  </div>
  <div class="stats-grid">
<div class="stat-card">
  <div class="stat-icon purple">📚</div>
  <div>
    <span>Courses</span>
    <strong id="statCourses">4</strong>
  </div>
</div>
<div class="stat-card">
  <div class="stat-icon blue">📖</div>
  <div>
    <span>Lessons</span>
    <strong id="statLessons">30</strong>
  </div>
</div>
<div class="stat-card">
  <div class="stat-icon green">✓</div>
  <div>
    <span>Completed</span>
    <strong id="statCompleted">0</strong>
  </div>
</div>
<div class="stat-card">
  <div class="stat-icon orange">📈</div>
  <div>
    <span>Progress</span>
    <strong id="statProgress">0%</strong>
  </div>
</div>
  </div>
  <div class="dashboard-grid">
<div class="dashboard-card">
  <div class="section-header">
    <div>
      <span class="eyebrow">CURRENT COURSE</span>
      <h2>Sales Management Mastery</h2>
    </div>
    <button class="text-btn" data-page="coursesPage">
      View All →
    </button>
  </div>
  <div class="course-progress-box">
    <div class="course-progress-top">
      <div>
        <strong>Your Learning Progress</strong>
        <span id="dashboardCoursePercent">
          0% completed
        </span>
      </div>
    </div>
    <div class="progress-track">
      <div
        class="progress-fill"
        id="dashboardCourseProgress"
        style="width:0%"
      ></div>
    </div>
    <div class="course-progress-bottom">
      <span>🎯 Daily Goal</span>
      <strong>0 / 30 min</strong>
    </div>
  </div>
  <button class="primary-btn" data-page="lessonsPage">
    Continue Learning →
  </button>
</div>
<div class="dashboard-card">
  <div class="section-header">
    <div>
      <span class="eyebrow">QUICK ACTIONS</span>
      <h2>Business Tools</h2>
    </div>
  </div>
  <div class="quick-actions">
    <button class="quick-action" data-page="salesPage">
      <span>🎯</span>
      <strong>Sales Manager</strong>
      <small>Manage sales performance</small>
    </button>
    <button class="quick-action" data-page="calculatorPage">
      <span>🧮</span>
      <strong>Calculator</strong>
      <small>Profit & pricing tools</small>
    </button>
    <button class="quick-action" data-page="reportsPage">
      <span>📊</span>
      <strong>Reports</strong>
      <small>Track your performance</small>
    </button>
    <button class="quick-action" data-page="aiPage">
      <span>🤖</span>
      <strong>AI Coach</strong>
      <small>Get business guidance</small>
    </button>
  </div>
</div>
  </div>
  <div class="section-header dashboard-section">
<div>
  <span class="eyebrow">LEARNING PATH</span>
  <h2>Explore Business Skills</h2>
</div>
<button class="text-btn" data-page="lessonsPage">
  All Lessons →
</button>
  </div>
  <div class="learning-grid">
<button class="learning-card" data-category="Business Basics">
  <span>🏢</span>
  <strong>Business Basics</strong>
  <small>Business fundamentals</small>
</button>
<button class="learning-card" data-category="Strategic Thinking">
  <span>🧠</span>
  <strong>Strategic Thinking</strong>
  <small>Strategy & decision making</small>
</button>
<button class="learning-card" data-category="Brand Basics">
  <span>⭐</span>
  <strong>Brand Basics</strong>
  <small>Build a strong brand</small>
</button>
<button class="learning-card" data-category="Marketing Basics">
  <span>📣</span>
  <strong>Marketing Basics</strong>
  <small>Marketing fundamentals</small>
</button>
<button class="learning-card" data-category="Sales Basics">
  <span>💼</span>
  <strong>Sales Basics</strong>
  <small>Sales execution</small>
</button>
<button class="learning-card" data-category="Negotiation">
  <span>🤝</span>
  <strong>Negotiation</strong>
  <small>Win-win negotiation</small>
</button>
<button class="learning-card" data-category="People Management">
  <span>👥</span>
  <strong>People Management</strong>
  <small>Lead winning teams</small>
</button>
<button class="learning-card" data-category="Profit & Loss">
  <span>💰</span>
  <strong>Profit & Loss</strong>
  <small>Understand business numbers</small>
</button>
<button class="learning-card" data-category="Goal Setting">
  <span>🎯</span>
  <strong>Goal Setting</strong>
  <small>Goals & KPI</small>
</button>
  </div>
</section>
<!-- =====================================================
     COURSES
===================================================== -->
<section class="page" id="coursesPage">
  <div class="page-intro">
    <span class="eyebrow">MY COURSES</span>
    <h2>Business Learning Paths</h2>
    <p>လုပ်ငန်းခွင်မှာ တိုက်ရိုက်အသုံးချနိုင်တဲ့ Business Skills တွေကို လေ့လာပါ။</p>
  </div>
  <div class="courses-grid" id="coursesList"></div>
</section>
<!-- =====================================================
     LESSONS
===================================================== -->
<section class="page" id="lessonsPage">
  <div class="page-intro">
    <span class="eyebrow">LESSONS</span>
    <h2>Practical Business Lessons</h2>
    <p>Business Management အတွက် လက်တွေ့အသုံးချနိုင်တဲ့ သင်ခန်းစာများ။</p>
  </div>
  <div class="lesson-toolbar">
<div class="lesson-search">
  <span>🔍</span>
  <input
    id="lessonSearch"
    type="search"
    placeholder="သင်ခန်းစာရှာရန်..."
  >
</div>
<div class="lesson-filters">
  <button class="filter-btn active" data-filter="All">
    All
  </button>
  <button class="filter-btn" data-filter="Sales">
    Sales
  </button>
  <button class="filter-btn" data-filter="Marketing">
    Marketing
  </button>
  <button class="filter-btn" data-filter="People Management">
    People
  </button>
  <button class="filter-btn" data-filter="Finance">
    Finance
  </button>
</div>
  </div>
  <div class="lessons-grid" id="lessonsList"></div>
</section>
<!-- =====================================================
     PROGRESS
===================================================== -->
<section class="page" id="progressPage">
  <div class="page-intro">
    <span class="eyebrow">MY PROGRESS</span>
    <h2>Learning Progress</h2>
    <p>သင်ယူပြီးသော သင်ခန်းစာများကို စောင့်ကြည့်ပါ။</p>
  </div>
  <div class="progress-overview">
<div class="progress-main-card">
  <div class="progress-big-number">
    <span id="progressNumber">0%</span>
  </div>
  <div>
    <h3>Overall Progress</h3>
    <p id="progressText">
      30 lessons ထဲမှ 0 lessons ပြီးဆုံးထားပါသည်။
    </p>
  </div>
</div>
<div class="progress-stats">
  <div class="mini-stat">
    <strong id="progressCompleted">0</strong>
    <span>Completed</span>
  </div>
  <div class="mini-stat">
    <strong id="progressRemaining">30</strong>
    <span>Remaining</span>
  </div>
</div>
  </div>
  <div class="dashboard-card">
<div class="section-header">
  <div>
    <span class="eyebrow">LEARNING GOAL</span>
    <h2>Keep Going</h2>
  </div>
</div>
<p style="color:#6b7280;font-size:13px;line-height:1.8;margin-bottom:15px">
  နေ့တိုင်း အနည်းဆုံး သင်ခန်းစာတစ်ခု ပြီးအောင် လေ့လာပါ။
</p>
<button class="primary-btn" data-page="lessonsPage">
  Continue Learning →
</button>
  </div>
</section>
<!-- =====================================================
     SALES
===================================================== -->
<section class="page" id="salesPage">
  <div class="page-intro">
    <span class="eyebrow">SALES MANAGEMENT</span>
    <h2>Sales Manager</h2>
    <p>Sales Target, Team Performance, Execution နဲ့ KPI Management။</p>
  </div>
  <div id="salesManagerContent"></div>
  <div class="dashboard-card">
<div class="section-header">
  <div>
    <span class="eyebrow">MANAGEMENT FRAMEWORK</span>
    <h2>People → Numbers → Execution</h2>
  </div>
</div>
<p style="color:#6b7280;font-size:13px;line-height:1.8">
  Target ကို Field Execution အဖြစ် ပြောင်းလဲနိုင်ခြင်းက
  Sales Manager တစ်ယောက်ရဲ့ အဓိကတာဝန်ဖြစ်ပါတယ်။
</p>
  </div>
</section>
<!-- =====================================================
     CALCULATOR
===================================================== -->
<section class="page" id="calculatorPage">
  <div class="page-intro">
    <span class="eyebrow">BUSINESS CALCULATORS</span>
    <h2>Pricing & Profit Calculator</h2>
    <p>Business Decision တွေအတွက် အခြေခံ Financial Calculations တွက်ချက်ပါ။</p>
  </div>
  <div class="calculator-grid">
<button class="calculator-card" data-calculator="profit">
  <span>💰</span>
  <strong>Profit Calculator</strong>
  <small>Revenue − Cost</small>
</button>
<button class="calculator-card" data-calculator="pricing">
  <span>🏷️</span>
  <strong>Pricing Calculator</strong>
  <small>Cost + Margin</small>
</button>
<button class="calculator-card" data-calculator="break-even">
  <span>⚖️</span>
  <strong>Break-even Calculator</strong>
  <small>Fixed & Variable Cost</small>
</button>
<button class="calculator-card" data-calculator="sales-target">
  <span>🎯</span>
  <strong>Sales Target Calculator</strong>
  <small>Monthly → Daily Target</small>
</button>
  </div>
</section>
<!-- =====================================================
     REPORTS
===================================================== -->
<section class="page" id="reportsPage">
  <div class="page-intro">
    <span class="eyebrow">REPORTS</span>
    <h2>Business Performance</h2>
    <p>Learning နှင့် Business performance ကို စောင့်ကြည့်ပါ။</p>
  </div>
  <div id="reportsContent"></div>
  <div class="dashboard-card">
<div class="section-header">
  <div>
    <span class="eyebrow">PERFORMANCE</span>
    <h2>Keep Improving</h2>
  </div>
</div>
<p style="color:#6b7280;font-size:13px;line-height:1.8">
  Data ကိုကြည့်ပြီး Gap ကိုရှာပါ။
  Gap ကို Action Plan အဖြစ်ပြောင်းပါ။
</p>
  </div>
</section>
<!-- =====================================================
     AI
===================================================== -->
<section class="page" id="aiPage">
  <div class="page-intro">
    <span class="eyebrow">AI BUSINESS COACH</span>
    <h2>Aung AI Business Coach</h2>
    <p>Business Problem တွေကို Framework နဲ့ ခွဲခြမ်းစဉ်းစားပါ။</p>
  </div>
  <div class="ai-layout">
<div class="ai-chat-card">
  <div class="ai-chat-header">
    <div class="ai-avatar">🤖</div>
    <div>
      <strong>Aung AI Business Coach</strong>
      <span>Online • Business Assistant</span>
    </div>
  </div>
  <div class="chat-messages" id="chatMessages">
    <div class="chat-message ai">
      <div class="chat-avatar">🤖</div>
      <div class="message-content">
        <strong>Aung AI Business Coach</strong>
        <p>
          မင်္ဂလာပါ။ သင့် Business Problem ကို မေးနိုင်ပါတယ်။
        </p>
      </div>
    </div>
  </div>
  <div class="chat-input-area">
    <input
      id="aiInput"
      type="text"
      placeholder="Business Problem ကို ရိုက်ထည့်ပါ..."
    >
    <button class="primary-btn" id="aiSend">
      Send
    </button>
  </div>
</div>
<div class="ai-prompt-card">
  <span class="eyebrow">QUICK QUESTIONS</span>
  <h3>Try asking</h3>
  <button class="ai-prompt" data-prompt="Sales Target မပြည့်ရင် ဘာလုပ်ရမလဲ?">
    🎯 Sales Target မပြည့်ရင် ဘာလုပ်ရမလဲ?
  </button>
  <button class="ai-prompt" data-prompt="Team Performance တိုးတက်အောင် ဘယ်လိုလုပ်ရမလဲ?">
    👥 Team Performance တိုးတက်အောင်?
  </button>
  <button class="ai-prompt" data-prompt="Profit Margin တိုးအောင် ဘာလုပ်ရမလဲ?">
    💰 Profit Margin တိုးအောင်?
  </button>
  <button class="ai-prompt" data-prompt="Sales Manager တစ်ယောက်ရဲ့ Daily Routine ဘယ်လိုထားသင့်လဲ?">
    📅 Sales Manager Daily Routine?
  </button>
</div>
  </div>
</section>
<!-- =====================================================
     AI TOOLS
===================================================== -->
<section class="page" id="toolsPage">
  <div class="page-intro">
    <span class="eyebrow">AI TOOLS</span>
    <h2>Business Productivity Tools</h2>
    <p>Business Planning နဲ့ Sales Management အတွက် Tools များ။</p>
  </div>
  <div class="tools-grid">
<button class="tool-card" data-ai-tool="Sales Action Plan">
  <span>🎯</span>
  <strong>Sales Action Plan</strong>
  <small>Target Gap ကို Action Plan ပြောင်းရန်</small>
</button>
<button class="tool-card" data-ai-tool="Customer Strategy">
  <span>👥</span>
  <strong>Customer Strategy</strong>
  <small>Key Customer Plan</small>
</button>
<button class="tool-card" data-ai-tool="Business Strategy">
  <span>🧠</span>
  <strong>Business Strategy</strong>
  <small>Strategic Thinking Framework</small>
</button>
<button class="tool-card" data-ai-tool="Team Coaching">
  <span>👨‍🏫</span>
  <strong>Team Coaching</strong>
  <small>Coaching & Feedback</small>
</button>
  </div>
</section>
<!-- =====================================================
     SETTINGS
===================================================== -->
<section class="page" id="settingsPage">
  <div class="page-intro">
    <span class="eyebrow">SETTINGS</span>
    <h2>Settings</h2>
    <p>Academy Profile နှင့် App Preferences။</p>
  </div>
  <div class="settings-card">
<div class="settings-row">
  <div class="settings-icon">👤</div>
  <div class="settings-info">
    <strong>Profile</strong>
    <span>Aung Zar Ni Win</span>
  </div>
  <button class="secondary-btn" data-action="profile">
    View
  </button>
</div>
<div class="settings-row">
  <div class="settings-icon">🎓</div>
  <div class="settings-info">
    <strong>Academy</strong>
    <span>Aung Business Academy</span>
  </div>
  <span class="settings-value">V8.0</span>
</div>
<div class="settings-row">
  <div class="settings-icon">💾</div>
  <div class="settings-info">
    <strong>Learning Data</strong>
    <span>Saved locally on this device</span>
  </div>
  <span class="settings-value">Active</span>
</div>
<div class="settings-row">
  <div class="settings-icon">💎</div>
  <div class="settings-info">
    <strong>Premium</strong>
    <span>Premium features</span>
  </div>
  <button class="secondary-btn" data-page="coursesPage">
    Explore
  </button>
</div>
  </div>
</section>
</main>
<!-- MOBILE NAV -->
<nav class="mobile-nav">
  <button class="active" data-page="dashboardPage">
    <span>🏠</span>
    <small>Home</small>
  </button>
  <button data-page="lessonsPage">
    <span>📖</span>
    <small>Lessons</small>
  </button>
  <button data-page="salesPage">
    <span>🎯</span>
    <small>Sales</small>
  </button>
  <button data-page="aiPage">
    <span>🤖</span>
    <small>AI</small>
  </button>
  <button data-page="settingsPage">
    <span>⚙️</span>
    <small>Settings</small>
  </button>
</nav>
<!-- MODAL -->
<div class="modal-overlay" id="modalOverlay">
  <div class="modal">
<button class="modal-close" id="modalClose">
  ×
</button>
<div id="modalBody"></div>
  </div>
</div>
</div>
<script>
/* =========================================================
   AUNG BUSINESS ACADEMY
   SINGLE FILE APPLICATION
   ========================================================= */
(function(){
"use strict";
/* =========================
   DATA
========================= */
const pages={
  dashboardPage:["Dashboard","Business growth starts with better decisions."],
  coursesPage:["My Courses","Business courses and learning paths"],
  lessonsPage:["Lessons","Learn practical business skills"],
  progressPage:["My Progress","Track your learning progress"],
  salesPage:["Sales Manager","Sales management tools and performance"],
  calculatorPage:["Pricing Calculator","Calculate pricing, profit and targets"],
  reportsPage:["Reports","Business performance overview"],
  aiPage:["AI Business Coach","Business coaching and practical guidance"],
  toolsPage:["AI Tools","Useful business productivity tools"],
  settingsPage:["Settings","Manage your profile and preferences"]
};
const courses=[
  {
    name:"Sales Management Mastery",
    icon:"📊",
    description:"Sales Target, Team Management, Sales Execution, Distributor Management နှင့် KPI Analysis။"
  },
  {
    name:"Business Fundamentals",
    icon:"🏢",
    description:"Business Model, Customer, Revenue, Cost နှင့် Profit အခြေခံများ။"
  },
  {
    name:"Marketing & Brand",
    icon:"📣",
    description:"Marketing Strategy, Customer Segment, Brand Positioning နှင့် Promotion။"
  },
  {
    name:"People & Leadership",
    icon:"👥",
    description:"Team Leadership, Coaching, Motivation နှင့် Performance Management။"
  }
];
const lessonData=[
["လုပ်ငန်းဆိုတာ ဘာလဲ?","Business Basics"],
["Business Model အခြေခံ","Business Basics"],
["Customer ကို နားလည်ခြင်း","Business Basics"],
["Revenue ဘယ်လိုဖြစ်လာသလဲ?","Business Basics"],
["Cost နဲ့ Profit အခြေခံ","Profit & Loss"],
["Strategic Thinking ဆိုတာ","Strategic Thinking"],
["Vision နဲ့ Mission","Strategic Thinking"],
["SWOT Analysis","Strategic Thinking"],
["ပြိုင်ဘက်ကို ခွဲခြမ်းခြင်း","Strategic Thinking"],
["Brand ဆိုတာ ဘာလဲ?","Brand Basics"],
["Brand Positioning","Brand Basics"],
["Marketing အခြေခံ","Marketing Basics"],
["Customer Segment","Marketing Basics"],
["Promotion Strategy","Marketing Basics"],
["Sales Process အခြေခံ","Sales Basics"],
["Sales Target သတ်မှတ်ခြင်း","Sales Basics"],
["Sales Execution","Sales Basics"],
["Customer Relationship Management","Customer Service"],
["Customer Complaint ကို ကိုင်တွယ်ခြင်း","Customer Service"],
["Negotiation အခြေခံ","Negotiation"],
["Price Negotiation","Negotiation"],
["Team Leadership","People Management"],
["Coaching & Feedback","People Management"],
["Performance Management","People Management"],
["Manager ရဲ့ Daily Routine","People Management"],
["Profit Margin တွက်ခြင်း","Profit & Loss"],
["Break-even Point","Profit & Loss"],
["Goal Setting","Goal Setting"],
["KPI သတ်မှတ်ခြင်း","Goal Setting"],
["Execution Plan","Goal Setting"]
];
const lessons=lessonData.map((x,i)=>({
  id:i+1,
  title:x[0],
  category:x[1],
  description:"ဒီသင်ခန်းစာမှာ "+x[0]+" ကို လက်တွေ့ Business အမြင်နဲ့ လေ့လာပါမယ်။"
}));
/* =========================
   HELPERS
========================= */
const $=id=>document.getElementById(id);
function escapeHTML(value){
  return String(value)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}
function completedLessons(){
  try{
    const data=localStorage.getItem(
      "AUNG_BUSINESS_ACADEMY_COMPLETED"
    );
    if(!data)return[];
    const parsed=JSON.parse(data);
    return Array.isArray(parsed)?parsed:[];
  }catch(e){
    return[];
  }
}
function saveCompleted(list){
  try{
    localStorage.setItem(
      "AUNG_BUSINESS_ACADEMY_COMPLETED",
      JSON.stringify(list)
    );
  }catch(e){}
}
/* =========================
   NAVIGATION
========================= */
function navigate(page){
  if(!pages[page]){
    page="dashboardPage";
  }
  document
    .querySelectorAll(".page")
    .forEach(p=>{
      p.classList.remove("active");
    });
  const target=$(page);
  if(target){
    target.classList.add("active");
  }
  document
    .querySelectorAll("[data-page]")
    .forEach(button=>{
      button.classList.toggle(
        "active",
        button.dataset.page===page
      );
    });
  if($("pageTitle")){
    $("pageTitle").textContent=pages[page][0];
  }
  if($("pageSubtitle")){
    $("pageSubtitle").textContent=pages[page][1];
  }
  $("sidebar")?.classList.remove("open");
  $("sidebarOverlay")?.classList.remove("show");
  if(page==="coursesPage")renderCourses();
  if(page==="lessonsPage")renderLessons();
  if(page==="progressPage")updateProgress();
  if(page==="salesPage")renderSales();
  if(page==="reportsPage")renderReports();
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}
window.navigate=navigate;
/* =========================
   COURSES
========================= */
function renderCourses(){
  const box=$("coursesList");
  if(!box)return;
  box.innerHTML=courses.map(course=>`
    <div class="course-card">
      <div class="course-cover">
        <span>COURSE</span>
        <strong>${course.icon}</strong>
      </div>
      <div class="course-card-body">
        <span class="eyebrow">
          BUSINESS ACADEMY
        </span>
        <h3>
          ${escapeHTML(course.name)}
        </h3>
        <p>
          ${escapeHTML(course.description)}
        </p>
        <button
          class="primary-btn small"
          data-page="lessonsPage"
        >
          Start Learning →
        </button>
      </div>
    </div>
  `).join("");
}
/* =========================
   LESSONS
========================= */
let lessonFilter="All";
let lessonSearch="";
function renderLessons(){
  const box=$("lessonsList");
  if(!box)return;
  let list=[...lessons];
  if(lessonFilter!=="All"){
    let category=lessonFilter;
    if(lessonFilter==="Sales")
      category="Sales Basics";
    if(lessonFilter==="Marketing")
      category="Marketing Basics";
    if(lessonFilter==="Finance")
      category="Profit & Loss";
    list=list.filter(
      x=>x.category===category
    );
  }
  if(lessonSearch){
    const q=lessonSearch.toLowerCase();
    list=list.filter(x=>
      x.title.toLowerCase().includes(q) ||
      x.category.toLowerCase().includes(q)
    );
  }
  const done=completedLessons();
  if(!list.length){
    box.innerHTML=`
      <div style="
        background:#fff;
        border:1px solid #e5e7eb;
        border-radius:16px;
        padding:40px;
        text-align:center;
        grid-column:1/-1
      ">
        <div style="font-size:40px">🔎</div>
        <h3 style="margin:10px 0">
          သင်ခန်းစာ မတွေ့ပါ
        </h3>
        <p style="color:#6b7280;font-size:12px">
          Search / Filter ကို ပြန်စစ်ကြည့်ပါ။
        </p>
      </div>
    `;
    return;
  }
  box.innerHTML=list.map(lesson=>{
    const isDone=done.includes(lesson.id);
    return`
      <div class="lesson-card">
        <div class="lesson-number">
          ${lesson.id}
        </div>
        <div class="lesson-card-content">
          <span class="lesson-category">
            ${escapeHTML(lesson.category)}
          </span>
          <h3>
            ${escapeHTML(lesson.title)}
          </h3>
          <p>
            ${escapeHTML(lesson.description)}
          </p>
          <button
            class="primary-btn small"
            data-lesson="${lesson.id}"
          >
            ${isDone?"✓ Completed":"Start Lesson →"}
          </button>
        </div>
      </div>
    `;
  }).join("");
}
/* =========================
   PROGRESS
========================= */
function updateProgress(){
  const done=completedLessons();
  const total=lessons.length;
  const count=done.length;
  const percent=total
    ?Math.round(count/total*100)
    :0;
  if($("statCourses"))
    $("statCourses").textContent=courses.length;
  if($("statLessons"))
    $("statLessons").textContent=total;
  if($("statCompleted"))
    $("statCompleted").textContent=count;
  if($("statProgress"))
    $("statProgress").textContent=percent+"%";
  if($("progressNumber"))
    $("progressNumber").textContent=percent+"%";
  if($("progressCompleted"))
    $("progressCompleted").textContent=count;
  if($("progressRemaining"))
    $("progressRemaining").textContent=total-count;
  if($("progressText"))
    $("progressText").textContent=
      `${total} lessons ထဲမှ ${count} lessons ပြီးဆုံးထားပါသည်။`;
  if($("dashboardCoursePercent"))
    $("dashboardCoursePercent").textContent=
      percent+"% completed";
  if($("dashboardCourseProgress"))
    $("dashboardCourseProgress").style.width=
      percent+"%";
}
/* =========================
   SALES
========================= */
function renderSales(){
  const box=$("salesManagerContent");
  if(!box)return;
  box.innerHTML=`
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon purple">🎯</div>
        <div>
          <span>Target</span>
          <strong>100%</strong>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon green">📈</div>
        <div>
          <span>Achievement</span>
          <strong>0%</strong>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon orange">👥</div>
        <div>
          <span>Team</span>
          <strong>Active</strong>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon pink">📊</div>
        <div>
          <span>KPI</span>
          <strong>Review</strong>
        </div>
      </div>
    </div>
    <div class="dashboard-card">
      <div class="section-header">
        <div>
          <span class="eyebrow">
            SALES MANAGEMENT
          </span>
          <h2>
            Sales Management Framework
          </h2>
        </div>
      </div>
      <div class="learning-grid">
        <div class="learning-card">
          <span>🎯</span>
          <strong>Target Planning</strong>
          <small>Monthly / Weekly / Daily</small>
        </div>
        <div class="learning-card">
          <span>👥</span>
          <strong>Team Management</strong>
          <small>Coaching & Review</small>
        </div>
        <div class="learning-card">
          <span>🚚</span>
          <strong>Distributor Management</strong>
          <small>Coverage & Execution</small>
        </div>
        <div class="learning-card">
          <span>📊</span>
          <strong>KPI Analysis</strong>
          <small>Gap & Action Plan</small>
        </div>
      </div>
    </div>
  `;
}
/* =========================
   REPORTS
========================= */
function renderReports(){
  const box=$("reportsContent");
  if(!box)return;
  const completed=completedLessons().length;
  const percent=Math.round(
    completed/lessons.length*100
  );
  box.innerHTML=`
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon purple">📚</div>
        <div>
          <span>Lessons</span>
          <strong>${lessons.length}</strong>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon green">✓</div>
        <div>
          <span>Completed</span>
          <strong>${completed}</strong>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon orange">◔</div>
        <div>
          <span>Progress</span>
          <strong>${percent}%</strong>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon pink">🎓</div>
        <div>
          <span>Courses</span>
          <strong>${courses.length}</strong>
        </div>
      </div>
    </div>
  `;
}
/* =========================
   MODAL
========================= */
function openModal(html){
  const overlay=$("modalOverlay");
  const body=$("modalBody");
  if(!overlay||!body)return;
  body.innerHTML=html;
  overlay.classList.add("show");
}
function closeModal(){
  $("modalOverlay")?.classList.remove("show");
}
function showProfile(){
  openModal(`
    <div class="modal-content-inner">
      <span class="eyebrow">
        PROFILE
      </span>
      <h2>
        Aung Zar Ni Win
      </h2>
      <p>
        <strong>Position:</strong>
        Business Manager
      </p>
      <p>
        <strong>Academy:</strong>
        Aung Business Academy
      </p>
    </div>
  `);
}
/* =========================
   LESSON MODAL
========================= */
function openLesson(id){
  const lesson=lessons.find(
    x=>x.id===Number(id)
  );
  if(!lesson)return;
  const done=completedLessons();
  const isDone=done.includes(lesson.id);
  openModal(`
    <div class="modal-content-inner">
      <span class="eyebrow">
        ${escapeHTML(lesson.category)}
      </span>
      <h2>
        ${escapeHTML(lesson.title)}
      </h2>
      <p>
        ${escapeHTML(lesson.description)}
      </p>
      <div style="
        margin-top:20px;
        padding:18px;
        background:#f4f6f9;
        border-radius:14px;
      ">
        <strong>
          လက်တွေ့အသုံးချရန်
        </strong>
        <p style="margin-top:8px">
          ဒီသင်ခန်းစာကနေ ရရှိတဲ့
          အချက်တစ်ခုကို ကိုယ့်လုပ်ငန်းမှာ
          လက်တွေ့အသုံးချကြည့်ပါ။
        </p>
      </div>
      <button
        class="primary-btn"
        style="margin-top:20px;width:100%"
        data-complete="${lesson.id}"
      >
        ${isDone
          ?"✓ Completed — ပြန်ပြောင်းရန်"
          :"✓ Mark as Completed"}
      </button>
    </div>
  `);
}
/* =========================
   CALCULATORS
========================= */
function calculator(type){
  let html="";
  if(type==="profit"){
    html=`
      <div class="modal-content-inner">
        <h2>💰 Profit Calculator</h2>
        <input
          id="calcRevenue"
          type="number"
          placeholder="Revenue"
        >
        <input
          id="calcCost"
          type="number"
          placeholder="Total Cost"
          style="margin-top:10px"
        >
        <button
          class="primary-btn"
          data-calculate="profit"
          style="margin-top:15px;width:100%"
        >
          Calculate
        </button>
        <div
          id="calculatorResult"
          style="margin-top:15px"
        ></div>
      </div>
    `;
  }
  if(type==="pricing"){
    html=`
      <div class="modal-content-inner">
        <h2>🏷️ Pricing Calculator</h2>
        <input
          id="calcCost"
          type="number"
          placeholder="Cost"
        >
        <input
          id="calcMargin"
          type="number"
          placeholder="Margin %"
          style="margin-top:10px"
        >
        <button
          class="primary-btn"
          data-calculate="pricing"
          style="margin-top:15px;width:100%"
        >
          Calculate
        </button>
        <div
          id="calculatorResult"
          style="margin-top:15px"
        ></div>
      </div>
    `;
  }
  if(type==="break-even"){
    html=`
      <div class="modal-content-inner">
        <h2>⚖️ Break-even Calculator</h2>
        <input
          id="fixedCost"
          type="number"
          placeholder="Fixed Cost"
        >
        <input
          id="sellingPrice"
          type="number"
          placeholder="Selling Price"
          style="margin-top:10px"
        >
        <input
          id="variableCost"
          type="number"
          placeholder="Variable Cost"
          style="margin-top:10px"
        >
        <button
          class="primary-btn"
          data-calculate="break-even"
          style="margin-top:15px;width:100%"
        >
          Calculate
        </button>
        <div
          id="calculatorResult"
          style="margin-top:15px"
        ></div>
      </div>
    `;
  }
  if(type==="sales-target"){
    html=`
      <div class="modal-content-inner">
        <h2>🎯 Sales Target Calculator</h2>
        <input
          id="monthlyTarget"
          type="number"
          placeholder="Monthly Target"
        >
        <input
          id="workingDays"
          type="number"
          value="26"
          placeholder="Working Days"
          style="margin-top:10px"
        >
        <button
          class="primary-btn"
          data-calculate="sales-target"
          style="margin-top:15px;width:100%"
        >
          Calculate
        </button>
        <div
          id="calculatorResult"
          style="margin-top:15px"
        ></div>
      </div>
    `;
  }
  openModal(html);
}
function calculate(type){
  const result=$("calculatorResult");
  if(!result)return;
  if(type==="profit"){
    const revenue=Number(
      $("calcRevenue")?.value||0
    );
    const cost=Number(
      $("calcCost")?.value||0
    );
    result.innerHTML=`
      <div style="
        padding:14px;
        background:#dcfce7;
        border-radius:10px;
        color:#166534;
        font-weight:800
      ">
        Profit = ${(revenue-cost).toLocaleString()}
      </div>
    `;
  }
  if(type==="pricing"){
    const cost=Number(
      $("calcCost")?.value||0
    );
    const margin=Number(
      $("calcMargin")?.value||0
    );
    if(margin>=100){
      result.textContent=
        "Margin 100% ထက်နည်းရပါမယ်။";
      return;
    }
    const price=cost/(1-margin/100);
    result.innerHTML=`
      <div style="
        padding:14px;
        background:#ede9fe;
        border-radius:10px;
        color:#5b21b6;
        font-weight:800
      ">
        Selling Price = ${price.toLocaleString()}
      </div>
    `;
  }
  if(type==="break-even"){
    const fixed=Number(
      $("fixedCost")?.value||0
    );
    const price=Number(
      $("sellingPrice")?.value||0
    );
    const variable=Number(
      $("variableCost")?.value||0
    );
    const contribution=price-variable;
    if(contribution<=0){
      result.textContent=
        "Selling Price က Variable Cost ထက်ကြီးရပါမယ်။";
      return;
    }
    const units=fixed/contribution;
    result.innerHTML=`
      <div style="
        padding:14px;
        background:#fef3c7;
        border-radius:10px;
        color:#92400e;
        font-weight:800
      ">
        Break-even = ${Math.ceil(units).toLocaleString()} units
      </div>
    `;
  }
  if(type==="sales-target"){
    const target=Number(
      $("monthlyTarget")?.value||0
    );
    const days=Number(
      $("workingDays")?.value||0
    );
    if(!days){
      result.textContent=
        "Working Days ထည့်ပါ။";
      return;
    }
    const daily=target/days;
    result.innerHTML=`
      <div style="
        padding:14px;
        background:#dbeafe;
        border-radius:10px;
        color:#1d4ed8;
        font-weight:800
      ">
        Daily Target = ${daily.toLocaleString()}
      </div>
    `;
  }
}
/* =========================
   AI COACH
========================= */
function aiAnswer(text){
  const q=text.toLowerCase();
  if(
    q.includes("target")||
    q.includes("sales")
  ){
    return`
Sales Target မပြည့်ရင်
People, Numbers နဲ့ Execution
သုံးပိုင်းစစ်ပါ။
1. Team Performance
2. Target Gap
3. Customer Coverage
4. Daily Action Plan
5. Regular Review
`;
  }
  if(
    q.includes("team")||
    q.includes("performance")
  ){
    return`
Team Performance တိုးတက်ဖို့
Clear Expectations ပေးပြီး
Coaching, Review, Feedback နဲ့
Accountability ကို စနစ်တကျလုပ်ပါ။
`;
  }
  if(
    q.includes("profit")||
    q.includes("margin")
  ){
    return`
Profit တိုးဖို့ Revenue တစ်ခုတည်း
မကြည့်ဘဲ Cost နဲ့ Margin ကိုပါ
စောင့်ကြည့်ပါ။
Profit = Revenue − Cost
`;
  }
  return`
Business Problem ကို
Current Situation →
Root Cause →
Action Plan →
KPI →
Review
ဆိုတဲ့ Framework နဲ့ ခွဲခြမ်းပါ။
`;
}
function sendAI(){
  const input=$("aiInput");
  const chat=$("chatMessages");
  if(!input||!chat)return;
  const text=input.value.trim();
  if(!text)return;
  chat.insertAdjacentHTML(
    "beforeend",
    `
    <div class="chat-message user">
      <div class="chat-avatar">
        👤
      </div>
      <div class="message-content">
        <strong>You</strong>
        <p>
          ${escapeHTML(text)}
        </p>
      </div>
    </div>
    `
  );
  chat.insertAdjacentHTML(
    "beforeend",
    `
    <div class="chat-message ai">
      <div class="chat-avatar">
        🤖
      </div>
      <div class="message-content">
        <strong>
          Aung AI Business Coach
        </strong>
        <p>
          ${escapeHTML(aiAnswer(text))}
        </p>
      </div>
    </div>
    `
  );
  input.value="";
  chat.scrollTop=chat.scrollHeight;
}
/* =========================
   CLICK CONTROLLER
========================= */
document.addEventListener(
  "click",
  function(event){
    const target=event.target.closest(
      "[data-page],[data-action],[data-category],[data-filter],[data-calculator],[data-lesson],[data-complete],[data-calculate],[data-prompt],[data-ai-tool]"
    );
    if(!target)return;
    event.preventDefault();
    if(target.dataset.page){
      navigate(
        target.dataset.page
      );
      return;
    }
    if(target.dataset.action==="profile"){
      showProfile();
      return;
    }
    if(target.dataset.category){
      lessonFilter=target.dataset.category;
      navigate("lessonsPage");
      return;
    }
    if(target.dataset.filter){
      lessonFilter=target.dataset.filter;
      document
        .querySelectorAll(".filter-btn")
        .forEach(btn=>{
          btn.classList.toggle(
            "active",
            btn.dataset.filter===lessonFilter
          );
        });
      renderLessons();
      return;
    }
    if(target.dataset.calculator){
      calculator(
        target.dataset.calculator
      );
      return;
    }
    if(target.dataset.lesson){
      openLesson(
        target.dataset.lesson
      );
      return;
    }
    if(target.dataset.complete){
      const id=Number(
        target.dataset.complete
      );
      let list=completedLessons();
      if(list.includes(id)){
        list=list.filter(
          x=>x!==id
        );
      }else{
        list.push(id);
      }
      saveCompleted(list);
      closeModal();
      renderLessons();
      updateProgress();
      return;
    }
    if(target.dataset.prompt){
      navigate("aiPage");
      const input=$("aiInput");
      if(input){
        input.value=
          target.dataset.prompt;
        setTimeout(()=>{
          input.focus();
        },100);
      }
      return;
    }
    if(target.dataset.aiTool){
      openModal(`
        <div class="modal-content-inner">
          <span class="eyebrow">
            AI BUSINESS TOOL
          </span>
          <h2>
            ${escapeHTML(target.dataset.aiTool)}
          </h2>
          <p>
            ဒီ AI Tool ကို Business Decision,
            Strategy နဲ့ Execution Planning
            အတွက် အသုံးပြုနိုင်ပါတယ်။
          </p>
        </div>
      `);
      return;
    }
    if(target.dataset.calculate){
      calculate(
        target.dataset.calculate
      );
      return;
    }
  },
  true
);
/* =========================
   MOBILE MENU
========================= */
$("mobileMenu")?.addEventListener(
  "click",
  function(){
    $("sidebar")?.classList.toggle("open");
    $("sidebarOverlay")?.classList.toggle(
      "show",
      $("sidebar")?.classList.contains("open")
    );
  }
);
$("sidebarOverlay")?.addEventListener(
  "click",
  function(){
    $("sidebar")?.classList.remove("open");
    $("sidebarOverlay")?.classList.remove("show");
  }
);
/* =========================
   MODAL
========================= */
$("modalClose")?.addEventListener(
  "click",
  closeModal
);
$("modalOverlay")?.addEventListener(
  "click",
  function(event){
    if(event.target===$("modalOverlay")){
      closeModal();
    }
  }
);
document.addEventListener(
  "keydown",
  function(event){
    if(event.key==="Escape"){
      closeModal();
    }
  }
);
/* =========================
   SEARCH
========================= */
$("lessonSearch")?.addEventListener(
  "input",
  function(){
    lessonSearch=this.value.trim();
    renderLessons();
  }
);
$("globalSearch")?.addEventListener(
  "keydown",
  function(event){
    if(event.key!=="Enter")return;
    lessonSearch=this.value.trim();
    navigate("lessonsPage");
    renderLessons();
  }
);
/* =========================
   NOTIFICATION
========================= */
$("notificationBtn")?.addEventListener(
  "click",
  function(){
    openModal(`
      <div class="modal-content-inner">
        <span class="eyebrow">
          NOTIFICATION
        </span>
        <h2>
          🔔 Notifications
        </h2>
        <p>
          လက်ရှိ Notification အသစ် မရှိသေးပါ။
        </p>
      </div>
    `);
  }
);
/* =========================
   AI SEND
========================= */
$("aiSend")?.addEventListener(
  "click",
  sendAI
);
$("aiInput")?.addEventListener(
  "keydown",
  function(event){
    if(event.key==="Enter"){
      event.preventDefault();
      sendAI();
    }
  }
);
/* =========================
   INITIALIZE
========================= */
renderCourses();
renderLessons();
renderSales();
renderReports();
updateProgress();
navigate("dashboardPage");
console.log(
  "AUNG BUSINESS ACADEMY — SINGLE FILE READY"
);
})();
</script>
</body>
</html>
