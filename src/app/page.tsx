"use client";

import { useEffect, useState } from "react";

type Mission = {
  id: number;
  title: string;
  description: string;
  target: number;
  reward: number;
  progress: number;
};

const initialMissions: Mission[] = [
  {
    id: 1,
    title: "Первый майнинг",
    description: "Заработай свои первые 50 коинов",
    target: 50,
    reward: 25,
    progress: 0,
  },
  {
    id: 2,
    title: "Новичок",
    description: "Набери 250 коинов",
    target: 250,
    reward: 50,
    progress: 0,
  },
  {
    id: 3,
    title: "Активный игрок",
    description: "Сделай 25 майнингов",
    target: 25,
    reward: 100,
    progress: 0,
  },
];

export default function Home() {
  const [coins, setCoins] = useState(190);
  const [xp, setXp] = useState(105);
  const [clicks, setClicks] = useState(0);
  const [dailyReceived, setDailyReceived] = useState(false);
  const [missions, setMissions] = useState(initialMissions);
  const [floatingCoins, setFloatingCoins] = useState<number[]>([]);

  /*
   * Загружаем сохранение
   */
  useEffect(() => {
    const saved = localStorage.getItem("coinquest");

    if (!saved) return;

    try {
      const data = JSON.parse(saved);

      setCoins(data.coins ?? 190);
      setXp(data.xp ?? 105);
      setClicks(data.clicks ?? 0);
      setDailyReceived(data.dailyReceived ?? false);
      setMissions(data.missions ?? initialMissions);
    } catch {
      console.log("Не удалось загрузить сохранение");
    }
  }, []);

  /*
   * Сохраняем прогресс
   */
  useEffect(() => {
    localStorage.setItem(
      "coinquest",
      JSON.stringify({
        coins,
        xp,
        clicks,
        dailyReceived,
        missions,
      })
    );
  }, [coins, xp, clicks, dailyReceived, missions]);

  /*
   * Уровень
   */
  const level = Math.floor(xp / 100) + 1;

  const currentLevelXp = xp % 100;

  /*
   * Майнинг
   */
  const mineCoins = () => {
    setCoins((value) => value + 10);
    setXp((value) => value + 5);
    setClicks((value) => value + 1);

    const id = Date.now();

    setFloatingCoins((items) => [...items, id]);

    setTimeout(() => {
      setFloatingCoins((items) =>
        items.filter((item) => item !== id)
      );
    }, 900);

    /*
     * Обновляем задания
     */
    setMissions((items) =>
      items.map((mission) => {
        if (mission.id === 1) {
          return {
            ...mission,
            progress: Math.min(mission.target, coins + 10),
          };
        }

        if (mission.id === 2) {
          return {
            ...mission,
            progress: Math.min(mission.target, coins + 10),
          };
        }

        if (mission.id === 3) {
          return {
            ...mission,
            progress: Math.min(
              mission.target,
              clicks + 1
            ),
          };
        }

        return mission;
      })
    );
  };

  /*
   * Ежедневная награда
   */
  const claimDaily = () => {
    if (dailyReceived) return;

    setCoins((value) => value + 50);
    setXp((value) => value + 25);
    setDailyReceived(true);
  };

  /*
   * Сбросить игру
   */
  const resetGame = () => {
    localStorage.removeItem("coinquest");

    setCoins(190);
    setXp(105);
    setClicks(0);
    setDailyReceived(false);
    setMissions(initialMissions);
  };

  return (
    <main className="site">

      {/* ================= HEADER ================= */}

      <header className="header">
        <div className="header-inner">

          <div className="logo">
            <span className="logo-icon">◇</span>
            COINQUEST
            <span className="logo-dot">.</span>
          </div>

          <nav>
            <a className="active" href="#">
              Главная
            </a>

            <a href="#missions">
              Задания
            </a>

            <a href="#rewards">
              Награды
            </a>
          </nav>

          <button className="language">
            🌐 RU
          </button>

        </div>
      </header>


      {/* ================= CONTENT ================= */}

      <section className="container">

        {/* HERO */}

        <div className="hero">

          <h1>
            Твой путь к{" "}
            <span>вершине</span>
          </h1>

          <p>
            Выполняй задания. Получай награды.
            Повышай уровень.
          </p>

        </div>


        {/* ================= STATS ================= */}

        <div className="stats">

          {/* COINS */}

          <div className="card">

            <div className="card-title">
              БАЛАНС КОЙНОВ
            </div>

            <div className="big-number">
              {coins}
              <small> COINS</small>
            </div>

            <div className="status">
              <span />
              Внутренний баланс
            </div>

          </div>


          {/* XP */}

          <div className="card">

            <div className="card-title">
              ОПЫТ
            </div>

            <div className="big-number">
              {xp}
              <small> XP</small>
            </div>

            <div className="progress">
              <div
                style={{
                  width: `${currentLevelXp}%`,
                }}
              />
            </div>

            <div className="progress-text">
              {currentLevelXp}/100 XP до уровня
            </div>

          </div>


          {/* LEVEL */}

          <div className="card level-card">

            <div className="card-title">
              УРОВЕНЬ
            </div>

            <div className="level">

              <strong>
                {String(level).padStart(2, "0")}
              </strong>

              <div>

                <b>
                  {level < 3
                    ? "Новичок"
                    : level < 5
                    ? "Игрок"
                    : "Мастер"}
                </b>

                <span>
                  Продолжай играть
                </span>

              </div>

            </div>

            <div className="next-level">
              Следующая цель: LVL {level + 1}
            </div>

          </div>

        </div>


        {/* ================= GAME ================= */}

        <div className="game-grid">

          {/* MINER */}

          <section className="miner card">

            <div className="section-label">
              ● COIN MINER
            </div>

            <h2>
              Майнинг коинов
            </h2>

            <p>
              Нажимай и получай тестовые коины.
              За каждый клик начисляется опыт.
            </p>


            {/* COIN */}

            <div className="coin-wrapper">

              {floatingCoins.map((id) => (
                <span
                  key={id}
                  className="floating-coin"
                >
                  +10
                </span>
              ))}

              <button
                className="coin-button"
                onClick={mineCoins}
              >
                <span className="coin">
                  ◇
                </span>

                <small>
                  +10 COINS
                </small>
              </button>

            </div>


            <button
              className="mine-button"
              onClick={mineCoins}
            >
              Заработать 10 коинов →
            </button>

            <div className="xp-bonus">
              ✦ +5 XP за каждое начисление
            </div>

          </section>


          {/* DAILY */}

          <section
            id="rewards"
            className="daily card"
          >

            <div className="section-label orange">
              ✦ DAILY REWARD
            </div>

            <h2>
              Ежедневный бонус
            </h2>

            <p>
              Заглядывай каждый день за подарком
            </p>


            <div className="reward">

              <strong>
                ◇ +50
              </strong>

              <span>
                COINS
              </span>

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


        {/* ================= MISSIONS ================= */}

        <section
          id="missions"
          className="missions"
        >

          <div className="section-label">
            YOUR MISSIONS
          </div>

          <h2>
            Твои задания
          </h2>


          <div className="mission-list">

            {missions.map((mission) => {

              const completed =
                mission.progress >= mission.target;

              const progress =
                Math.min(
                  100,
                  (mission.progress /
                    mission.target) *
                    100
                );

              return (
                <div
                  className="mission card"
                  key={mission.id}
                >

                  <div className="mission-info">

                    <b>
                      {completed
                        ? "✓ "
                        : "⚡ "}
                      {mission.title}
                    </b>

                    <p>
                      {mission.description}
                    </p>

                    <div className="mission-progress">

                      <div>
                        <span
                          style={{
                            width: `${progress}%`,
                          }}
                        />
                      </div>

                      <small>
                        {mission.progress}/
                        {mission.target}
                      </small>

                    </div>

                  </div>


                  <span>
                    +{mission.reward} XP
                  </span>

                </div>
              );
            })}

          </div>

        </section>


        {/* ================= RESET ================= */}

        <div className="reset-wrapper">

          <button
            className="reset-button"
            onClick={resetGame}
          >
            Сбросить прогресс
          </button>

        </div>

      </section>

    </main>
  );
}
