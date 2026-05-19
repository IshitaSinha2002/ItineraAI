from pydantic import BaseModel

class TravelRequest(BaseModel):
    destination: str
    days: int
    budget: str
    travel_style: str
    interests: str