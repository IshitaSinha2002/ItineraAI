import json
from dotenv import load_dotenv

from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()

llm = ChatGroq(
    model="llama-3.1-8b-instant",
    temperature=0.7
)

prompt = ChatPromptTemplate.from_template(
    """
    You are an AI Travel Planner.

    Generate a detailed travel itinerary in JSON format.

    User Details:
    Destination: {destination}
    Days: {days}
    Budget: {budget}
    Travel Style: {travel_style}
    Interests: {interests}

    Return ONLY valid JSON.
    Do not include explanations.
    Do not include markdown.

    JSON Format:
    {{
        "destination": "",
        "duration": "",
        "budget": "",
        "travel_style": "",
        "itinerary": [
            {{
                "day": 1,
                "activities": []
            }}
        ]
    }}
    """
)

chain = prompt | llm

def generate_travel_plan(data):

    response = chain.invoke({
        "destination": data.destination,
        "days": data.days,
        "budget": data.budget,
        "travel_style": data.travel_style,
        "interests": data.interests
    })

    cleaned_response = response.content.strip()

    cleaned_response = cleaned_response.replace("```json", "")
    cleaned_response = cleaned_response.replace("```", "")

    travel_plan = json.loads(cleaned_response)

    return travel_plan