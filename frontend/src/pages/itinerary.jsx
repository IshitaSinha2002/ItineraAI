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

      {/* ================= HERO SECTION ================= */}

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

          <h3>${data.budget}</h3>

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

          {/* DAY 1 */}

          <div className="day-card">

            <div className="day-header">

              <div>
                <h3>Day 1</h3>
                <p>Cultural Immersion</p>
              </div>

              <span className="tag">Arrival</span>

            </div>

            <div className="divider"></div>

            <div className="activity">

              <span>09:00 AM</span>

              <div>
                <h4>Arrival at Destination</h4>

                <p>
                  Check in and explore nearby attractions.
                </p>
              </div>

            </div>

            <div className="activity">

              <span>01:00 PM</span>

              <div>
                <h4>Local Experience</h4>

                <p>
                  Explore famous places and local cuisine.
                </p>
              </div>

            </div>

          </div>

          {/* DAY 2 */}

          <div className="day-card">

            <div className="day-header">

              <div>
                <h3>Day 2</h3>
                <p>Adventure & Exploration</p>
              </div>

              <span className="tag">Adventure</span>

            </div>

            <div className="divider"></div>

            <div className="activity">

              <span>08:00 AM</span>

              <div>
                <h4>Outdoor Activities</h4>

                <p>
                  Enjoy sightseeing and adventure experiences.
                </p>
              </div>

            </div>

            <div className="activity">

              <span>03:00 PM</span>

              <div>
                <h4>City Exploration</h4>

                <p>
                  Visit iconic landmarks and hidden gems.
                </p>
              </div>

            </div>

          </div>

          {/* DAY 3 */}

          <div className="day-card">

            <div className="day-header">

              <div>
                <h3>Day 3</h3>
                <p>Relaxation</p>
              </div>

              <span className="tag">Leisure</span>

            </div>

            <div className="divider"></div>

            <div className="activity">

              <span>10:00 AM</span>

              <div>
                <h4>Relax & Enjoy</h4>

                <p>
                  Spend the day relaxing and shopping.
                </p>
              </div>

            </div>

            <div className="activity">

              <span>06:00 PM</span>

              <div>
                <h4>Farewell Dinner</h4>

                <p>
                  End your journey with a memorable dinner.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Itinerary;