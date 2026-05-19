from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TravelRequest(BaseModel):
    destination: str
    days: str
    budget: str
    style: str
    interests: str


@app.post("/generate-itinerary")
def generate_itinerary(request: TravelRequest):

    return {
        "destination": request.destination,
        "days": request.days,
        "budget": request.budget,
        "style": request.style,
        "interests": request.interests
    }