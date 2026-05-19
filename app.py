import json

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel

from dotenv import load_dotenv

from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()

app = FastAPI()

# ================= CORS =================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================= REQUEST MODEL =================

class TravelRequest(BaseModel):
    destination: str
    days: str
    budget: str
    style: str
    interests: str

# ================= LLM =================

llm = ChatGroq(
    model="llama-3.1-8b-instant",
    temperature=0.7
)

# ================= PROMPT =================

prompt = ChatPromptTemplate.from_template(
    """
    You are an AI Travel Planner.

    Generate a travel itinerary in JSON format.

    Destination: {destination}
    Days: {days}
    Budget: {budget}
    Travel Style: {style}
    Interests: {interests}

    Return ONLY valid JSON.

    Format:

    {{
      "destination": "",
      "days": "",
      "budget": "",
      "style": "",

      "itinerary": [
        {{
          "day": 1,
          "title": "",

          "activities": [
            {{
              "time": "",
              "activity": "",
              "description": ""
            }}
          ]
        }}
      ]
    }}
    """
)

chain = prompt | llm

# ================= API =================

@app.post("/generate-itinerary")
def generate_itinerary(request: TravelRequest):

    response = chain.invoke({

        "destination": request.destination,
        "days": request.days,
        "budget": request.budget,
        "style": request.style,
        "interests": request.interests

    })

    cleaned_response = response.content.strip()

    cleaned_response = cleaned_response.replace(
        "```json",
        ""
    )

    cleaned_response = cleaned_response.replace(
        "```",
        ""
    )

    parsed_response = json.loads(cleaned_response)

    return parsed_response