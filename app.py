from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from models import TravelRequest
from ai_service import generate_travel_plan

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "AI Travel Planner API Running"}

@app.post("/generate-itinerary")
def generate_itinerary(request: TravelRequest):

    result = generate_travel_plan(request)

    return result