import "../styles/form.css";

import {
  MapPin,
  Calendar,
  Wallet,
  Plane,
  Sparkles
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    budget: "",
    style: "Luxury & Comfort",
    interests: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateItinerary = async () => {

    try {

      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:8000/generate-itinerary",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      navigate("/itinerary", {
        state: data
      });

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="form-page">

      {/* Logo */}

      <div className="logo-section">
        <Plane className="logo-icon" />
        <h1>ItineraAI</h1>
      </div>

      {/* Hero */}

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
              name="destination"
              placeholder="e.g. Tokyo, Japan"
              value={formData.destination}
              onChange={handleChange}
            />

          </div>

        </div>

        {/* Row */}

        <div className="row">

          {/* Days */}

          <div className="form-group">

            <label>Duration (Days)</label>

            <div className="input-box">

              <Calendar className="input-icon" />

              <input
                type="number"
                name="days"
                placeholder="7"
                value={formData.days}
                onChange={handleChange}
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
                name="budget"
                placeholder="2500"
                value={formData.budget}
                onChange={handleChange}
              />

            </div>

          </div>

        </div>

        {/* Style */}

        <div className="form-group">

          <label>Travel Style</label>

          <select
            name="style"
            value={formData.style}
            onChange={handleChange}
          >
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
            name="interests"
            placeholder="e.g. Food, temples, beaches"
            value={formData.interests}
            onChange={handleChange}
          ></textarea>

        </div>

        {/* Button */}

        <button
          className="generate-btn"
          onClick={generateItinerary}
        >

          {
            loading
              ? "Generating..."
              : "Generate Itinerary"
          }

          <Sparkles size={20} />

        </button>

      </div>

    </div>
  );
}

export default Form;