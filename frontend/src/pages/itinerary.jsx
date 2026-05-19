import "../styles/itinerary.css";

import {
  CalendarDays,
  Wallet,
  Gem
} from "lucide-react";

import { useLocation } from "react-router-dom";

function Itinerary() {

  const location = useLocation();

  const data = location.state;

  return (

    <div className="itinerary-page">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <h1 className="logo">ItineraAI</h1>

      </nav>

      {/* ================= HERO ================= */}

      <section className="hero-section-itinerary">

        <div className="hero-content simple-hero">

          <div>

            <h2>{data.destination}</h2>

            <p>
              Curated AI Itinerary for a Sophisticated Escape
            </p>

          </div>

        </div>

      </section>

      {/* ================= INFO CARDS ================= */}

      <section className="info-cards">

        <div className="info-card">

          <CalendarDays size={24} />

          <span>DURATION</span>

          <h3>{data.days} Days</h3>

        </div>

        <div className="info-card">

          <Wallet size={24} />

          <span>BUDGET</span>

          <h3>{data.budget}</h3>

        </div>

        <div className="info-card">

          <Gem size={24} />

          <span>STYLE</span>

          <h3>{data.style}</h3>

        </div>

      </section>

      {/* ================= DAILY BREAKDOWN ================= */}

      <section className="daily-section">

        <div className="section-title">

          <div className="line"></div>

          <h2>Daily Breakdown</h2>

        </div>

        <div className="days-grid">

          {
            data.itinerary.map((dayItem, index) => (

              <div className="day-card" key={index}>

                <div className="day-header">

                  <div>

                    <h3>Day {dayItem.day}</h3>

                    <p>{dayItem.title}</p>

                  </div>

                  <span className="tag">
                    Day {dayItem.day}
                  </span>

                </div>

                <div className="divider"></div>

                {
                  dayItem.activities.map((activity, idx) => (

                    <div className="activity" key={idx}>

                      <span>{activity.time}</span>

                      <div>

                        <h4>{activity.activity}</h4>

                        <p>{activity.description}</p>

                      </div>

                    </div>

                  ))
                }

              </div>

            ))
          }

        </div>

      </section>

    </div>

  );
}

export default Itinerary;