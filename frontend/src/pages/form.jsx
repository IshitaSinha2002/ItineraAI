import "../styles/form.css";
import { useNavigate } from "react-router-dom";

import {
  MapPin,
  Calendar,
  Wallet,
  Plane,
  Sparkles
} from "lucide-react";

function Form() {

  const navigate = useNavigate();

  return (
    <div className="form-page">

      {/* Logo */}
      <div className="logo-section">
        <Plane className="logo-icon" />
        <h1>ItineraAI</h1>
      </div>

      {/* Heading */}
      <div className="hero-section">
        <h2>Plan Your Next Adventure</h2>

        <p>
          Tell us your travel preferences and our AI will craft
          a personalized itinerary for you.
        </p>
      </div>

      {/* Form Card */}
      <div className="form-card">

        {/* Destination */}
        <div className="form-group">
          <label>Destination</label>

          <div className="input-box">
            <MapPin className="input-icon" />

            <input
              type="text"
              placeholder="e.g. Tokyo, Japan or Amalfi Coast"
            />
          </div>
        </div>

        {/* Duration + Budget */}
        <div className="row">

          {/* Duration */}
          <div className="form-group">
            <label>Duration (Days)</label>

            <div className="input-box">
              <Calendar className="input-icon" />

              <input
                type="number"
                placeholder="7"
              />
            </div>
          </div>

          {/* Budget */}
          <div className="form-group">
            <label>Budget (USD)</label>

            <div className="input-box">
              <Wallet className="input-icon" />

              <input
                type="text"
                placeholder="2500"
              />
            </div>
          </div>
        </div>

        {/* Travel Style */}
        <div className="form-group">
          <label>Travel Style</label>

          <select>
            <option>Luxury & Comfort</option>
            <option>Adventure</option>
            <option>Relaxation</option>
            <option>Culture</option>
            <option>Backpacking</option>
          </select>
        </div>

        {/* Interests */}
        <div className="form-group">
          <label>Interests & Preferences</label>

          <textarea
            rows="5"
            placeholder="e.g. Fine dining, contemporary art, hidden temples, hiking trails"
          ></textarea>
        </div>

        {/* Button */}
        <button
        className="generate-btn"
        onClick={() => navigate("/itinerary")}
        >
        Generate Itinerary
        <Sparkles size={20} />
        </button>

      </div>
    </div>
  );
}

export default Form;