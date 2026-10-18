@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");

:root {
  --bg: #070910;
  --panel: #101522;
  --panel-hover: #141a2a;
  --border: #242b3e;

  --text: #f5f7ff;
  --muted: #7f8aaa;

  --purple: #8255ff;
  --purple-light: #9b6cff;

  --cyan: #32e6d1;
  --cyan-dark: #20bfb0;

  --orange: #ffbd4d;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: "Manrope", sans-serif;
}

button,
a {
  font-family: inherit;
}

button {
  border: 0;
}

/* =========================
   MAIN BACKGROUND
========================= */

.site {
  min-height: 100vh;

  background:
    radial-gradient(
      circle at 5% 15%,
      rgba(123, 67, 255, 0.18),
      transparent 35%
    ),
    radial-gradient(
      circle at 95% 25%,
      rgba(23, 213, 200, 0.12),
      transparent 30%
    ),
    linear-gradient(
      180deg,
      #090b13 0%,
      #090a12 55%,
      #06070c 100%
    );
}

/* =========================
   HEADER
========================= */

.header {
  height: 60px;
  border-bottom: 1px solid #191e2c;

  background: rgba(7, 9, 16, 0.88);
  backdrop-filter: blur(16px);

  position: sticky;
  top: 0;
  z-index: 20;
}

.header-inner {
  max-width: 1040px;
  height: 100%;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 19px;
  font-weight: 800;
  letter-spacing: 1px;
}

.logo-icon {
  color: var(--cyan);
  margin-right: 10px;
  font-size: 25px;
}

.logo-dot {
  color: var(--cyan);
  margin-left: 4px;
}

/* =========================
   NAVIGATION
========================= */

nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

nav a {
  color: #818aa5;
  text-decoration: none;

  padding: 10px 15px;
  border-radius: 10px;

  font-size: 13px;
  font-weight: 600;

  transition: 0.2s;
}

nav a:hover {
  color: white;
  background: #111525;
}

nav a.active {
  color: #fff;
  background: #17132a;
}

/* =========================
   LANGUAGE
========================= */

.language {
  color: #d7dcf0;
  background: #101522;

  border: 1px solid #293148;
  border-radius: 10px;

  padding: 10px 13px;

  cursor: pointer;
  font-weight: 600;
}

.language:hover {
  background: #161c2d;
}

/* =========================
   CONTAINER
========================= */

.container {
  width: min(1040px, calc(100% - 40px));
  margin: auto;
}

/* =========================
   HERO
========================= */

.hero {
  padding-top: 30px;
  padding-bottom: 32px;
}

.hero h1 {
  margin: 0;

  font-size: clamp(38px, 5vw, 52px);
  line-height: 1.05;

  font-weight: 800;
  letter-spacing: -2px;
}

.hero h1 span {
  background: linear-gradient(
    90deg,
    #35e6d2,
    #41d8d7,
    #9b65ff
  );

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero p {
  margin-top: 14px;

  color: #8490b0;
  font-size: 14px;
}

/* =========================
   CARDS
========================= */

.card {
  background:
    linear-gradient(
      145deg,
      rgba(18, 24, 39, 0.96),
      rgba(12, 16, 27, 0.96)
    );

  border: 1px solid var(--border);
  border-radius: 17px;

  box-shadow:
    inset 0 1px rgba(255, 255, 255, 0.015),
    0 15px 40px rgba(0, 0, 0, 0.12);

  transition:
    transform 0.2s,
    border-color 0.2s;
}

.card:hover {
  border-color: #303950;
}

/* =========================
   STATS
========================= */

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stats .card {
  min-height: 202px;
  padding: 30px 23px;
}

.card-title {
  color: #8490b0;

  font-size: 10px;
  font-weight: 800;

  letter-spacing: 1.5px;
}

.big-number {
  margin-top: 29px;

  font-size: 39px;
  font-weight: 800;
  letter-spacing: -1px;
}

.big-number small {
  color: #8590ad;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1px;
}

.status {
  margin-top: 15px;

  color: #8490b0;
  font-size: 10px;

  display: flex;
  align-items: center;
  gap: 8px;
}

.status span {
  width: 7px;
  height: 7px;

  border-radius: 50%;
  background: var(--cyan);

  box-shadow: 0 0 12px var(--cyan);
}

/* =========================
   XP
========================= */

.progress {
  margin-top: 17px;

  width: 100%;
  height: 5px;

  background: #2a3042;
  border-radius: 20px;
  overflow: hidden;
}

.progress div {
  height: 100%;

  background: linear-gradient(
    90deg,
    #a065ff,
    #36dcd1
  );

  border-radius: inherit;
}

.progress-text {
  margin-top: 13px;

  color: #75809e;
  font-size: 9px;
}

/* =========================
   LEVEL
========================= */

.level {
  margin-top: 27px;

  display: flex;
  align-items: center;
  gap: 14px;
}

.level strong {
  color: var(--orange);

  font-size: 39px;
  line-height: 1;

  letter-spacing: -2px;
}

.level b {
  display: block;
  font-size: 13px;
}

.level span {
  display: block;
  margin-top: 3px;

  color: #78849f;
  font-size: 9px;
}

.next-level {
  margin-top: 24px;

  color: #75819d;
  font-size: 9px;
}

/* =========================
   GAME GRID
========================= */

.game-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;

  gap: 16px;
  margin-top: 20px;
}

.miner,
.daily {
  min-height: 430px;
  padding: 27px;
}

.section-label {
  color: var(--cyan);

  font-size: 10px;
  font-weight: 800;

  letter-spacing: 1.5px;
}

.section-label.orange {
  color: var(--orange);
}

.miner h2,
.daily h2 {
  margin: 10px 0 0;

  font-size: 20px;
  letter-spacing: -0.5px;
}

.miner p,
.daily p {
  margin-top: 13px;

  color: #8290ae;
  font-size: 12px;
  line-height: 1.7;
}

/* =========================
   COIN BUTTON
========================= */

.coin-button {
  width: 164px;
  height: 164px;

  margin: 28px auto 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  color: var(--cyan);

  cursor: pointer;

  background:
    radial-gradient(
      circle,
      rgba(104, 66, 180, 0.35),
      rgba(20, 25, 40, 0.5) 60%
    );

  border: 1px solid #7454d7;

  box-shadow:
    0 0 0 7px rgba(130, 85, 255, 0.06),
    0 0 35px rgba(120, 73, 255, 0.2);

  transition: 0.2s;
}

.coin-button:hover {
  transform: scale(1.04);

  box-shadow:
    0 0 0 10px rgba(130, 85, 255, 0.08),
    0 0 50px rgba(120, 73, 255, 0.3);
}

.coin-button:active {
  transform: scale(0.96);
}

.coin {
  font-size: 44px;

  text-shadow:
    0 0 20px rgba(50, 230, 209, 0.6);
}

.coin-button small {
  margin-top: 5px;

  font-size: 9px;
  font-weight: 800;
}

/* =========================
   MAIN BUTTON
========================= */

.mine-button {
  width: 100%;
  height: 50px;

  border-radius: 11px;

  color: white;
  background:
    linear-gradient(
      90deg,
      #8b52f8,
      #6358e9
    );

  font-size: 12px;
  font-weight: 800;

  cursor: pointer;

  box-shadow:
    0 10px 25px rgba(106, 75, 240, 0.25);

  transition: 0.2s;
}

.mine-button:hover {
  transform: translateY(-2px);

  box-shadow:
    0 13px 30px rgba(106, 75, 240, 0.35);
}

.mine-button:active {
  transform: translateY(0);
}

.xp-bonus {
  text-align: center;

  margin-top: 15px;

  color: #8490ae;
  font-size: 9px;
}

/* =========================
   DAILY REWARD
========================= */

.daily {
  border-color: #3a312c;

  background:
    radial-gradient(
      circle at 100% 0%,
      rgba(137, 79, 38, 0.17),
      transparent 45%
    ),
    #11131d;
}

.reward {
  margin-top: 49px;

  display: flex;
  align-items: baseline;
  justify-content: center;

  gap: 6px;
}

.reward strong {
  font-size: 43px;
  letter-spacing: -2px;
}

.reward span {
  color: #8490ae;
  font-size: 9px;
  font-weight: 700;
}

.reward-xp {
  text-align: center;

  margin-top: 8px;

  color: var(--orange);
  font-size: 10px;
  font-weight: 700;
}

.daily-button {
  width: 100%;
  height: 49px;

  margin-top: 22px;

  border-radius: 11px;

  background: #927544;
  color: #17120a;

  font-size: 11px;
  font-weight: 800;

  cursor: pointer;

  transition: 0.2s;
}

.daily-button:not(:disabled):hover {
  background: #b18d55;
  transform: translateY(-2px);
}

.daily-button:disabled {
  cursor: default;
  opacity: 0.9;
}

.daily-info {
  text-align: center;

  margin-top: 15px;

  color: #8a826c;
  font-size: 9px;
}

/* =========================
   MISSIONS
========================= */

.missions {
  padding: 46px 0 80px;
}

.missions h2 {
  margin: 8px 0 18px;

  font-size: 25px;
}

.mission-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mission {
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mission b {
  font-size: 13px;
}

.mission p {
  margin: 5px 0 0;

  color: #78849f;
  font-size: 10px;
}

.mission > span {
  color: var(--purple-light);

  font-size: 11px;
  font-weight: 800;
}

/* =========================
   MOBILE
========================= */

@media (max-width: 800px) {
  .header-inner {
    padding: 0 20px;
  }

  nav {
    display: none;
  }

  .container {
    width: min(100% - 28px, 600px);
  }

  .hero {
    padding-top: 35px;
  }

  .hero h1 {
    font-size: 38px;
  }

  .stats {
    grid-template-columns: 1fr;
  }

  .stats .card {
    min-height: auto;
  }

  .game-grid {
    grid-template-columns: 1fr;
  }

  .miner,
  .daily {
    min-height: auto;
  }

  .daily {
    padding-bottom: 30px;
  }
}

@media (max-width: 450px) {
  .logo {
    font-size: 15px;
  }

  .language {
    padding: 8px 10px;
    font-size: 11px;
  }

  .hero h1 {
    font-size: 34px;
  }

  .big-number {
    font-size: 35px;
  }

  .coin-button {
    width: 145px;
    height: 145px;
  }
}
