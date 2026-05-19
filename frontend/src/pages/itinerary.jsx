import "../styles/itinerary.css";

import {
  CalendarDays,
  Wallet,
  Gem
} from "lucide-react";

function Itinerary() {

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
            <h2>Kyoto, Japan</h2>
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
          <h3>7 Days</h3>
        </div>

        <div className="info-card">
          <Wallet size={24} />
          <span>BUDGET</span>
          <h3>$3,000</h3>
        </div>

        <div className="info-card">
          <Gem size={24} />
          <span>STYLE</span>
          <h3>Luxury & Comfort</h3>
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
                <h4>Arrival at Kansai Airport</h4>
                <p>
                  Private luxury transfer to The Ritz-Carlton, Kyoto.
                </p>
              </div>

            </div>

            <div className="activity">

              <span>01:00 PM</span>

              <div>
                <h4>Tea Ceremony in Gion</h4>
                <p>
                  Private tea master session in a 17th-century tea house.
                </p>
              </div>

            </div>

            <div className="activity">

              <span>07:00 PM</span>

              <div>
                <h4>Kaiseki Dinner</h4>
                <p>
                  Multi-course traditional meal at Kikuno i Honten.
                </p>
              </div>

            </div>

          </div>

          {/* DAY 2 */}

          <div className="day-card">

            <div className="day-header">

              <div>
                <h3>Day 2</h3>
                <p>Spiritual Path</p>
              </div>

              <span className="tag">Temple Tour</span>

            </div>

            <div className="divider"></div>

            <div className="activity">

              <span>08:30 AM</span>

              <div>
                <h4>Fushimi Inari Shrine</h4>
                <p>
                  Early morning hike through thousands of torii gates.
                </p>
              </div>

            </div>

            <div className="activity">

              <span>12:30 PM</span>

              <div>
                <h4>Shojin Ryori Lunch</h4>
                <p>
                  Traditional Zen Buddhist vegetarian cuisine.
                </p>
              </div>

            </div>

            <div className="activity">

              <span>03:30 PM</span>

              <div>
                <h4>Arashiyama Bamboo Grove</h4>
                <p>
                  Rickshaw tour through ethereal bamboo paths.
                </p>
              </div>

            </div>

          </div>

          {/* DAY 3 */}

          <div className="day-card">

            <div className="day-header">

              <div>
                <h3>Day 3</h3>
                <p>Art & Zen</p>
              </div>

              <span className="tag">Mindfulness</span>

            </div>

            <div className="divider"></div>

            <div className="activity">

              <span>10:00 AM</span>

              <div>
                <h4>Ryoan-ji Rock Garden</h4>
                <p>
                  Contemplation at Japan's most famous dry landscape garden.
                </p>
              </div>

            </div>

            <div className="activity">

              <span>02:00 PM</span>

              <div>
                <h4>Kinkaku-ji Pavilion</h4>
                <p>
                  Photography and Zen temple reflections.
                </p>
              </div>

            </div>

            <div className="activity">

              <span>06:00 PM</span>

              <div>
                <h4>Pontocho Alley Dinner</h4>
                <p>
                  Riverside dining with modern Kyoto-style cuisine.
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