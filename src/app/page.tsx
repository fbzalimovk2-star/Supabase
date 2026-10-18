"use client";

import { useState } from "react";

export default function Home() {
  const [coins, setCoins] = useState(190);
  const [xp, setXp] = useState(105);
  const [dailyReceived, setDailyReceived] = useState(true);

  const mineCoins = () => {
    setCoins((value) => value + 10);
    setXp((value) => value + 5);
  };

  const claimDaily = () => {
    if (dailyReceived) return;

    setCoins((value) => value + 50);
    setXp((value) => value + 25);
    setDailyReceived(true);
  };

  return (
    <main className="site">
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">◇</span>
            COINQUEST
            <span className="logo-dot">.</span>
          </div>

          <nav>
            <a className="active" href="#">Главная</a>
            <a href="#missions">Задания</a>
            <a href="#rewards">Награды</a>
          </nav>

          <button className="language">🌐 RU</button>
        </div>
      </header>

      <section className="container">
        <div className="hero">
          <h1>
            Твой путь к <span>вершине</span>
          </h1>
          <p>
            Выполняй задания. Получай награды. Повышай уровень.
          </p>
        </div>

        <div className="stats">
          <div className="card">
            <div className="card-title">БАЛАНС КОЙНОВ</div>

            <div className="big-number">
              {coins}
              <small> COINS</small>
            </div>

            <div className="status">
              <span /> Внутренний баланс
            </div>
          </div>

          <div className="card">
            <div className="card-title">ОПЫТ</div>

            <div className="big-number">
              {xp}
              <small> XP</small>
            </div>

            <div className="progress">
              <div style={{ width: `${xp % 100}%` }} />
            </div>

            <div className="progress-text">
              {xp % 100}/100 XP до уровня
            </div>
          </div>

          <div className="card level-card">
            <div className="card-title">УРОВЕНЬ</div>

            <div className="level">
              <strong>02</strong>
              <div>
                <b>Новичок</b>
                <span>Продолжай играть</span>
              </div>
            </div>

            <div className="next-level">
              Следующая цель: LVL 3
            </div>
          </div>
        </div>

        <div className="game-grid">
          <section className="miner card">
            <div className="section-label">● COIN MINER</div>

            <h2>Майнинг коинов</h2>

            <p>
              Нажимай и получай тестовые коины.
              За каждый клик начисляется опыт.
            </p>

            <button className="coin-button" onClick={mineCoins}>
              <span className="coin">◇</span>
              <small>+10 COINS</small>
            </button>

            <button className="mine-button" onClick={mineCoins}>
              Заработать 10 коинов →
            </button>

            <div className="xp-bonus">
              ✦ +5 XP за каждое начисление
            </div>
          </section>

          <section id="rewards" className="daily card">
            <div className="section-label orange">✦ DAILY REWARD</div>

            <h2>Ежедневный бонус</h2>

            <p>Заглядывай каждый день за подарком</p>

            <div className="reward">
              <strong>◇ +50</strong>
              <span>COINS</span>
            </div>

            <div className="reward-xp">
              +25 XP
            </div>

            <button
              className="daily-button"
              onClick={claimDaily}
              disabled={dailyReceived}
            >
              {dailyReceived
                ? "Уже получено сегодня"
                : "Получить награду"}
            </button>

            <div className="daily-info">
              • Обновляется каждый день
            </div>
          </section>
        </div>

        <section id="missions" className="missions">
          <div className="section-label">YOUR MISSIONS</div>
          <h2>Твои задания</h2>

          <div className="mission-list">
            <div className="mission card">
              <div>
                <b>⚡ Сделай первый майнинг</b>
                <p>Заработай свои первые 10 коинов</p>
              </div>

              <span>+25 XP</span>
            </div>

            <div className="mission card">
              <div>
                <b>🎯 Набери 250 коинов</b>
                <p>Продолжай собирать монеты</p>
              </div>

              <span>+50 XP</span>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
