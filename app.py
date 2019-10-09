# import necessary libraries
import numpy as np 
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify



#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///resources/Eaters.sqlite")

# reflect an existing database into a new model
Base = automap_base()
<<<<<<< HEAD
=======

>>>>>>> 67899bc239d0d0f41bcff1f9b3c6dc3214ea4554
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Eaters = Base.classes.eaters

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/Eater_Data"
    )

@app.route("/api/v1.0/Eater_Data")
def data_display():
    session = Session(engine)

    """Return a list of eater data including the age, gender, state, education, political party, race, and religion of each eater"""
    # Query all data in Eaters
    session = Session(engine)
    results = session.query(Eaters.Motivation_Animal_Protection, Eaters.Motivation_Concern_for_Environment, Eaters.Motivation_Cost, Eaters.Motivation_Health, Eaters.Motivation_Religious_Spiritual_Beliefs, Eaters.Motivation_Social_Influence, Eaters.Motivation_Social_Justice_or_World_Hunger, Eaters.Motivation_Taste_Preferences, Eaters.Motivation_Following_Food_Trend, Eaters.Motivation_Feelings_of_Disgust_about_Meat, Eaters.Eater_Type, Eaters.Age_Transitioned_to_Vegnism, Eaters.Gender, Eaters.State, Eaters.Education, Eaters.Political, Eaters.Race_Ethnicity, Eaters.Religion).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_demographics and other stuff
    all_demographics = []
    for Motivation_Animal_Protection, Motivation_Concern_for_Environment, Motivation_Cost, Motivation_Health, Motivation_Religious_Spiritual_Beliefs, Motivation_Social_Influence, Motivation_Social_Justice_or_World_Hunger, Motivation_Taste_Preferences, Motivation_Following_Food_Trend, Motivation_Feelings_of_Disgust_about_Meat, Eater_Type, Age_Transitioned_to_Vegnism, Gender, State, Education, Political, Race_Ethnicity, Religion in results:
        eater_dict = {}
        eater_dict["Motivation_Animal_Protection"] = Motivation_Animal_Protection
        eater_dict["Motivation_Concern_for_Environment"] = Motivation_Concern_for_Environment
        eater_dict["Motivation_Cost"] = Motivation_Cost
        eater_dict["Motivation_Health"] = Motivation_Health
        eater_dict["Motivation_Religious_Spiritual_Beliefs"] = Motivation_Religious_Spiritual_Beliefs
        eater_dict["Motivation_Social_Influence"] = Motivation_Social_Influence
        eater_dict["Motivation_Social_Justice_or_World_Hunger"] = Motivation_Social_Justice_or_World_Hunger
        eater_dict["Motivation_Taste_Preferences"] = Motivation_Taste_Preferences
        eater_dict["Motivation_Following_Food_Trend"] = Motivation_Following_Food_Trend
        eater_dict["Motivation_Feelings_of_Disgust_about_Meat"] = Motivation_Feelings_of_Disgust_about_Meat
        eater_dict["Eater_Type"] = Eater_Type
        eater_dict["Age_Transitioned_to_Vegnism"] = Age_Transitioned_to_Vegnism
        eater_dict["Gender"] = Gender
        eater_dict["State"] = State
        eater_dict["Education"] = Education
        eater_dict["Political"] = Political
        eater_dict["Race_Ethnicity"] = Race_Ethnicity 
        eater_dict["Religion"] = Religion
        all_demographics.append(eater_dict)

    return jsonify(all_demographics)


if __name__ == "__main__":
    app.run(debug=True)
