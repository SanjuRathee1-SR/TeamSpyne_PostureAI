<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>PostureAI — Sign In</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
<style>
  :root {
    --cream: #f0ebe0;
    --dark-brown: #2c1a0e;
    --warm-brown: #5c3d1e;
    --teal: #2d7a6b;
    --teal-light: #3a9b8a;
    --amber: #c97d30;
    --text-muted: #8a7768;
    --border: rgba(92,61,30,0.15);
    --card-bg: #faf8f4;
  }
 
  * { margin: 0; padding: 0; box-sizing: border-box; }
 
  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    min-height: 100vh;
    display: flex;
    overflow: hidden;
  }
 
  /* Left Panel */
  .left-panel {
    width: 52%;
    background: var(--dark-brown);
    padding: 48px 56px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
  }
 
  .left-panel::before {
    content: '';
    position: absolute;
    top: -120px; right: -120px;
    width: 380px; height: 380px;
    background: radial-gradient(circle, rgba(45,122,107,0.25) 0%, transparent 70%);
    pointer-events: none;
  }
 
  .left-panel::after {
    content: '';
    position: absolute;
    bottom: -80px; left: -80px;
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(201,125,48,0.15) 0%, transparent 70%);
    pointer-events: none;
  }
 
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }
 
  .logo-icon {
    width: 36px; height: 36px;
    background: var(--cream);
    border-radius: 9px;
    display: flex; align-items: center; justify-content: center;
  }
 
  .logo-icon svg { color: var(--dark-brown); }
 
  .logo-name {
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 1.1rem;
    color: var(--cream);
    letter-spacing: -0.01em;
  }
 
  .left-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 40px;
  }
 
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 100px;
    padding: 6px 14px;
    font-size: 0.75rem;
    color: rgba(240,235,224,0.7);
    letter-spacing: 0.04em;
    margin-bottom: 36px;
    width: fit-content;
  }
 
  .badge-dot {
    width: 6px; height: 6px;
    background: var(--teal-light);
    border-radius: 50%;
    animation: pulse 2s ease-in-out infinite;
  }
 
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
  }
 
  .hero-text h1 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2.4rem, 4vw, 3.2rem);
    color: var(--cream);
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
  }
 
  .hero-text h1 em {
    font-style: italic;
    color: var(--teal-light);
  }
 
  .hero-text p {
    font-size: 0.9rem;
    color: rgba(240,235,224,0.55);
    line-height: 1.6;
    max-width: 340px;
    margin-top: 16px;
    font-weight: 300;
  }
 
  /* Skeleton visual */
  .skeleton-preview {
    margin-top: 40px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
 
  .skeleton-svg {
    flex-shrink: 0;
  }
 
  .skeleton-stats {
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
  }
 
  .stat-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.75rem;
  }
 
  .stat-label {
    color: rgba(240,235,224,0.45);
    width: 70px;
    font-weight: 300;
  }
 
  .stat-bar-track {
    flex: 1;
    height: 4px;
    background: rgba(255,255,255,0.08);
    border-radius: 2px;
    overflow: hidden;
  }
 
  .stat-bar-fill {
    height: 100%;
    border-radius: 2px;
    transition: width 0.8s ease;
  }
 
  .stat-val {
    color: rgba(240,235,224,0.7);
    font-size: 0.7rem;
    width: 28px;
    text-align: right;
  }
 
  /* Right Panel */
  .right-panel {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 48px 40px;
  }
 
  .auth-card {
    width: 100%;
    max-width: 400px;
    animation: slideUp 0.5s ease both;
  }
 
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
 
  .auth-card h2 {
    font-family: 'DM Serif Display', serif;
    font-size: 1.85rem;
    color: var(--dark-brown);
    letter-spacing: -0.02em;
    margin-bottom: 6px;
  }
 
  .auth-card .subtitle {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 32px;
    font-weight: 300;
  }
 
  /* Tab switcher */
  .tab-switcher {
    display: flex;
    background: rgba(92,61,30,0.07);
    border-radius: 10px;
    padding: 3px;
    margin-bottom: 28px;
    position: relative;
  }
 
  .tab-btn {
    flex: 1;
    padding: 9px;
    border: none;
    background: none;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-muted);
    border-radius: 8px;
    transition: color 0.2s;
    position: relative;
    z-index: 1;
  }
 
  .tab-btn.active {
    color: var(--dark-brown);
  }
 
  .tab-slider {
    position: absolute;
    top: 3px; bottom: 3px;
    width: calc(50% - 3px);
    background: var(--card-bg);
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(44,26,14,0.1);
    transition: left 0.25s cubic-bezier(.4,0,.2,1);
    left: 3px;
  }
 
  .tab-slider.right { left: calc(50%); }
 
  /* Form */
  .form-group {
    margin-bottom: 16px;
  }
 
  .form-label {
    display: block;
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--warm-brown);
    margin-bottom: 7px;
    letter-spacing: 0.02em;
  }
 
  .form-input {
    width: 100%;
    padding: 11px 15px;
    border: 1.5px solid var(--border);
    border-radius: 10px;
    background: var(--card-bg);
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    color: var(--dark-brown);
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    -webkit-appearance: none;
  }
 
  .form-input::placeholder {
    color: rgba(138,119,104,0.45);
    font-weight: 300;
  }
 
  .form-input:focus {
    border-color: var(--teal);
    box-shadow: 0 0 0 3px rgba(45,122,107,0.1);
  }
 
  .form-input.error {
    border-color: #d94f4f;
    box-shadow: 0 0 0 3px rgba(217,79,79,0.08);
  }
 
  .error-msg {
    font-size: 0.75rem;
    color: #c0392b;
    margin-top: 5px;
    display: none;
  }
 
  .error-msg.show { display: block; }
 
  /* Password wrapper */
  .input-wrapper {
    position: relative;
  }
 
  .toggle-pw {
    position: absolute;
    right: 12px;
    top: 50%; transform: translateY(-50%);
    background: none; border: none;
    cursor: pointer; padding: 4px;
    color: var(--text-muted);
    line-height: 0;
  }
 
  .form-footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
  }
 
  .forgot-link {
    font-size: 0.78rem;
    color: var(--teal);
    text-decoration: none;
    font-weight: 500;
  }
 
  .forgot-link:hover { text-decoration: underline; }
 
  /* Submit button */
  .btn-primary {
    width: 100%;
    padding: 13px;
    background: var(--dark-brown);
    color: var(--cream);
    border: none;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
    position: relative;
    overflow: hidden;
  }
 
  .btn-primary:hover {
    background: var(--warm-brown);
    box-shadow: 0 4px 16px rgba(44,26,14,0.2);
  }
 
  .btn-primary:active { transform: scale(0.99); }
 
  .btn-primary .btn-inner {
    display: flex; align-items: center; justify-content: center; gap: 8px;
  }
 
  /* Divider */
  .divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 22px 0;
  }
 
  .divider-line {
    flex: 1;
    height: 1px;
    background: var(--border);
  }
 
  .divider-text {
    font-size: 0.75rem;
    color: var(--text-muted);
    font-weight: 300;
  }
 
  /* Social buttons */
  .social-btns {
    display: flex;
    gap: 10px;
  }
 
  .btn-social {
    flex: 1;
    padding: 10px 12px;
    background: var(--card-bg);
    border: 1.5px solid var(--border);
    border-radius: 10px;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--dark-brown);
    transition: border-color 0.2s, background 0.2s;
  }
 
  .btn-social:hover {
    border-color: rgba(92,61,30,0.3);
    background: #f5f1eb;
  }
 
  .btn-social img {
    width: 16px; height: 16px;
  }
 
  /* Terms */
  .terms-text {
    font-size: 0.72rem;
    color: var(--text-muted);
    text-align: center;
    margin-top: 20px;
    line-height: 1.5;
    font-weight: 300;
  }
 
  .terms-text a {
    color: var(--teal);
    text-decoration: none;
  }
 
  .terms-text a:hover { text-decoration: underline; }
 
  /* Success state */
  .success-screen {
    display: none;
    text-align: center;
    padding: 20px 0;
    animation: slideUp 0.4s ease both;
  }
 
  .success-icon {
    width: 60px; height: 60px;
    background: rgba(45,122,107,0.1);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 20px;
  }
 
  .success-screen h3 {
    font-family: 'DM Serif Display', serif;
    font-size: 1.5rem;
    color: var(--dark-brown);
    margin-bottom: 8px;
  }
 
  .success-screen p {
    font-size: 0.85rem;
    color: var(--text-muted);
    font-weight: 300;
    margin-bottom: 24px;
  }
 
  .btn-teal {
    display: inline-block;
    padding: 12px 32px;
    background: var(--teal);
    color: #fff;
    border: none;
    border-radius: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s, box-shadow 0.2s;
    text-decoration: none;
  }
 
  .btn-teal:hover {
    background: var(--teal-light);
    box-shadow: 0 4px 14px rgba(45,122,107,0.3);
  }
 
  /* Loading spinner */
  .spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
    display: none;
  }
 
  @keyframes spin { to { transform: rotate(360deg); } }
 
  /* Checkbox */
  .checkbox-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 16px;
  }
 
  .checkbox-row input[type="checkbox"] {
    margin-top: 2px;
    accent-color: var(--teal);
    flex-shrink: 0;
    cursor: pointer;
  }
 
  .checkbox-row label {
    font-size: 0.8rem;
    color: var(--text-muted);
    cursor: pointer;
    line-height: 1.5;
    font-weight: 300;
  }
 
  @media (max-width: 720px) {
    .left-panel { display: none; }
    .right-panel { padding: 32px 20px; }
    body { overflow: auto; }
  }
</style>
</head>
<body>
 
<!-- Left Panel -->
<div class="left-panel">
  <a href="#" class="logo">
    <div class="logo-icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    </div>
    <span class="logo-name">PostureAI</span>
  </a>
 
  <div class="left-content">
    <div class="badge">
      <div class="badge-dot"></div>
      Real-time · Private · Browser-only
    </div>
 
    <div class="hero-text">
      <h1>Your spine<br>is talking.<br><em>Are you<br>listening?</em></h1>
      <p>PostureAI watches your posture silently in the background. Zero uploads. Zero hardware. Just your existing webcam.</p>
    </div>
 
    <div class="skeleton-preview">
      <svg class="skeleton-svg" width="72" height="96" viewBox="0 0 72 96">
        <!-- skeleton figure -->
        <circle cx="36" cy="14" r="10" fill="none" stroke="rgba(240,235,224,0.2)" stroke-width="1.5"/>
        <line x1="36" y1="24" x2="36" y2="54" stroke="#3a9b8a" stroke-width="2"/>
        <line x1="36" y1="34" x2="16" y2="48" stroke="#3a9b8a" stroke-width="2"/>
        <line x1="36" y1="34" x2="56" y2="48" stroke="#3a9b8a" stroke-width="2"/>
        <line x1="36" y1="54" x2="22" y2="80" stroke="#3a9b8a" stroke-width="2"/>
        <line x1="36" y1="54" x2="50" y2="80" stroke="#3a9b8a" stroke-width="2"/>
        <circle cx="36" cy="34" r="3.5" fill="#fff" opacity="0.8"/>
        <circle cx="16" cy="48" r="3" fill="#fff" opacity="0.7"/>
        <circle cx="56" cy="48" r="3" fill="#fff" opacity="0.7"/>
        <circle cx="36" cy="54" r="3" fill="#fff" opacity="0.8"/>
      </svg>
 
      <div class="skeleton-stats">
        <div class="stat-row">
          <span class="stat-label">Neck tilt</span>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width:20%;background:#3a9b8a"></div>
          </div>
          <span class="stat-val">12°</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Shoulder</span>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width:55%;background:#c97d30"></div>
          </div>
          <span class="stat-val">17°</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">Spine</span>
          <div class="stat-bar-track">
            <div class="stat-bar-fill" style="width:13%;background:#3a9b8a"></div>
          </div>
          <span class="stat-val">8°</span>
        </div>
        <div class="stat-row" style="margin-top:4px;">
          <span style="color:rgba(240,235,224,0.3);font-size:0.7rem;font-weight:300;">Score</span>
          <span style="color:#f59e0b;font-size:0.85rem;font-weight:500;margin-left:4px;">63</span>
          <span style="color:rgba(240,235,224,0.4);font-size:0.7rem;margin-left:4px;font-weight:300;">— Shoulder uneven</span>
        </div>
      </div>
    </div>
  </div>
</div>
 
<!-- Right Panel -->
<div class="right-panel">
  <div class="auth-card">
 
    <!-- Success Screen (hidden by default) -->
    <div class="success-screen" id="successScreen">
      <div class="success-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2d7a6b" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <h3 id="successTitle">Welcome back!</h3>
      <p id="successMsg">You're signed in. Redirecting to your dashboard…</p>
      <a href="#" class="btn-teal" id="successCta">Go to Dashboard →</a>
    </div>
 
    <!-- Auth Form -->
    <div id="authForm">
      <h2 id="formHeading">Welcome back</h2>
      <p class="subtitle" id="formSubtitle">Sign in to continue tracking your posture</p>
 
      <div class="tab-switcher" id="tabSwitcher">
        <div class="tab-slider" id="tabSlider"></div>
        <button class="tab-btn active" id="tabSignIn" onclick="switchTab('signin')">Sign In</button>
        <button class="tab-btn" id="tabSignUp" onclick="switchTab('signup')">Sign Up</button>
      </div>
 
      <!-- Name field (signup only) -->
      <div class="form-group" id="nameGroup" style="display:none;">
        <label class="form-label" for="nameInput">Full Name</label>
        <input class="form-input" id="nameInput" type="text" placeholder="Alex Johnson" autocomplete="name" />
        <div class="error-msg" id="nameError">Please enter your name.</div>
      </div>
 
      <div class="form-group">
        <label class="form-label" for="emailInput">Email</label>
        <input class="form-input" id="emailInput" type="email" placeholder="you@example.com" autocomplete="email" />
        <div class="error-msg" id="emailError">Please enter a valid email.</div>
      </div>
 
      <div class="form-group">
        <label class="form-label" for="passwordInput">Password</label>
        <div class="input-wrapper">
          <input class="form-input" id="passwordInput" type="password" placeholder="••••••••" autocomplete="current-password" />
          <button class="toggle-pw" onclick="togglePassword()" title="Show/hide password" type="button">
            <svg id="eyeIcon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
        <div class="error-msg" id="passwordError">Password must be at least 8 characters.</div>
      </div>
 
      <!-- Forgot password (signin only) -->
      <div class="form-footer" id="forgotRow">
        <a href="#" class="forgot-link">Forgot password?</a>
      </div>
 
      <!-- Terms checkbox (signup only) -->
      <div class="checkbox-row" id="termsRow" style="display:none;margin-top:12px;">
        <input type="checkbox" id="termsCheck" />
        <label for="termsCheck">I agree to the <a href="#" style="color:var(--teal)">Terms of Service</a> and <a href="#" style="color:var(--teal)">Privacy Policy</a></label>
      </div>
 
      <button class="btn-primary" id="submitBtn" onclick="handleSubmit()">
        <div class="btn-inner">
          <div class="spinner" id="btnSpinner"></div>
          <span id="btnText">Sign In</span>
        </div>
      </button>
 
      <div class="divider">
        <div class="divider-line"></div>
        <span class="divider-text">or continue with</span>
        <div class="divider-line"></div>
      </div>
 
      <div class="social-btns">
        <button class="btn-social" onclick="socialAuth('Google')">
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google
        </button>
        <button class="btn-social" onclick="socialAuth('GitHub')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--dark-brown)">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          GitHub
        </button>
      </div>
 
      <p class="terms-text">
        Your data stays on your device. We never store video.<br>
        <a href="#">Learn about our privacy approach →</a>
      </p>
    </div>
 
  </div>
</div>
 
<script>
let currentTab = 'signin';
 
function switchTab(tab) {
  currentTab = tab;
  const slider = document.getElementById('tabSlider');
  const signInBtn = document.getElementById('tabSignIn');
  const signUpBtn = document.getElementById('tabSignUp');
  const nameGroup = document.getElementById('nameGroup');
  const termsRow = document.getElementById('termsRow');
  const forgotRow = document.getElementById('forgotRow');
  const btnText = document.getElementById('btnText');
  const heading = document.getElementById('formHeading');
  const subtitle = document.getElementById('formSubtitle');
 
  clearErrors();
 
  if (tab === 'signin') {
    slider.classList.remove('right');
    signInBtn.classList.add('active');
    signUpBtn.classList.remove('active');
    nameGroup.style.display = 'none';
    termsRow.style.display = 'none';
    forgotRow.style.display = 'flex';
    btnText.textContent = 'Sign In';
    heading.textContent = 'Welcome back';
    subtitle.textContent = 'Sign in to continue tracking your posture';
    document.getElementById('passwordInput').setAttribute('autocomplete', 'current-password');
  } else {
    slider.classList.add('right');
    signUpBtn.classList.add('active');
    signInBtn.classList.remove('active');
    nameGroup.style.display = 'block';
    termsRow.style.display = 'flex';
    forgotRow.style.display = 'none';
    btnText.textContent = 'Create Account';
    heading.textContent = 'Create account';
    subtitle.textContent = 'Start your posture journey today';
    document.getElementById('passwordInput').setAttribute('autocomplete', 'new-password');
  }
}
 
function togglePassword() {
  const input = document.getElementById('passwordInput');
  const icon = document.getElementById('eyeIcon');
  if (input.type === 'password') {
    input.type = 'text';
    icon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>`;
  } else {
    input.type = 'password';
    icon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>`;
  }
}
 
function clearErrors() {
  document.querySelectorAll('.error-msg').forEach(e => e.classList.remove('show'));
  document.querySelectorAll('.form-input').forEach(e => e.classList.remove('error'));
}
 
function showError(fieldId, errorId) {
  document.getElementById(fieldId).classList.add('error');
  document.getElementById(errorId).classList.add('show');
}
 
function validate() {
  clearErrors();
  let valid = true;
 
  if (currentTab === 'signup') {
    const name = document.getElementById('nameInput').value.trim();
    if (!name) { showError('nameInput', 'nameError'); valid = false; }
  }
 
  const email = document.getElementById('emailInput').value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showError('emailInput', 'emailError');
    valid = false;
  }
 
  const pw = document.getElementById('passwordInput').value;
  if (pw.length < 8) {
    showError('passwordInput', 'passwordError');
    valid = false;
  }
 
  if (currentTab === 'signup') {
    const terms = document.getElementById('termsCheck').checked;
    if (!terms) {
      const label = document.querySelector('#termsRow label');
      label.style.color = '#c0392b';
      setTimeout(() => label.style.color = '', 2000);
      valid = false;
    }
  }
 
  return valid;
}
 
function handleSubmit() {
  if (!validate()) return;
 
  const btn = document.getElementById('submitBtn');
  const spinner = document.getElementById('btnSpinner');
  const btnText = document.getElementById('btnText');
 
  btn.disabled = true;
  spinner.style.display = 'block';
  btnText.textContent = currentTab === 'signin' ? 'Signing in…' : 'Creating account…';
 
  // Simulate auth (replace with real API call)
  setTimeout(() => {
    spinner.style.display = 'none';
    btn.disabled = false;
 
    const nameVal = document.getElementById('nameInput').value.trim();
    const emailVal = document.getElementById('emailInput').value.trim();
    const displayName = currentTab === 'signup' && nameVal
      ? nameVal.split(' ')[0]
      : emailVal.split('@')[0];
 
    document.getElementById('authForm').style.display = 'none';
    const success = document.getElementById('successScreen');
    success.style.display = 'block';
 
    if (currentTab === 'signin') {
      document.getElementById('successTitle').textContent = `Welcome back, ${displayName}!`;
      document.getElementById('successMsg').textContent = "You're signed in. Redirecting to your dashboard…";
    } else {
      document.getElementById('successTitle').textContent = `You're all set, ${displayName}!`;
      document.getElementById('successMsg').textContent = "Your account is ready. Let's start tracking your posture.";
      document.getElementById('successCta').textContent = 'Start Tracking →';
    }
 
    // Auto-redirect simulation
    setTimeout(() => {
      document.getElementById('successCta').style.animation = 'pulse 1s ease infinite';
    }, 1500);
  }, 1400);
}
 
function socialAuth(provider) {
  const btn = event.currentTarget;
  btn.style.opacity = '0.6';
  btn.style.pointerEvents = 'none';
  const orig = btn.innerHTML;
  btn.innerHTML = `<span style="font-size:0.8rem;color:var(--teal)">Connecting…</span>`;
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.style.opacity = '';
    btn.style.pointerEvents = '';
    // In production: window.location.href = `/auth/${provider.toLowerCase()}`
    alert(`${provider} OAuth would redirect here in production.`);
  }, 1200);
}
 
// Enter key support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.getElementById('authForm').style.display !== 'none') {
    handleSubmit();
  }
});
</script>
</body>
</html>
