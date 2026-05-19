import json
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from typing import List

from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    temperature=0.7,
)

destination = input("Enter destination: ")
days = input("Enter number of days: ")
budget = input("Enter budget: ")
travel_style = input("Enter travel style (e.g., adventure, relaxation, culture): ")
interests = input("Enter interests: ")

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

    Return only valid JSON with the following structure:
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
        ],
    }}
    """
)

chain = prompt | llm

response = chain.invoke({
    "destination": destination,
    "days": days,
    "budget": budget,
    "travel_style": travel_style,
    "interests": interests
})

try:
    cleaned_response = response.content.strip()
    cleaned_response = cleaned_response.replace("```json", "")
    cleaned_response = cleaned_response.replace("```", "")
    travel_plan = json.loads(cleaned_response)

    print(f"Destination: {travel_plan['destination']}")
    print(f"Duration: {travel_plan['duration']}")
    print(f"Budget: {travel_plan['budget']}")
    print(f"Travel Style: {travel_plan['travel_style']}")
    print("Itinerary:\n")

    for day in travel_plan['itinerary']:
        print(f"Day {day['day']}:")
        for activity in day['activities']:
            print(f" - {activity}")
        print("\n")

except Exception as e:
    print("Error parsing JSON response")
    print(e)