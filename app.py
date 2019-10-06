# import necessary libraries

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify



#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///Eaters.sqlite")

# reflect an existing database into a new model
Base = declarative_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Passenger = Base.classes.Eaters

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

# create route that renders index.html template
# @app.route("/")
# def home():
#     return render_template("PH_HTML.html")

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/Eater_Type<br/>"
        f"/api/v1.0/Gender"
    )


@app.route("/api/v1.0/names")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all eater types"""
    # Query all passengers
    results = session.query(Eaters.Eater_Type).all()

    session.close()

    # Convert list of tuples into normal list
    all_names = list(np.ravel(results))

    return jsonify(all_names)
# @app.route("/glossary")
# def gloss():
#     return render_template("glossary.html")

# @app.route("/Motivations")
# def mot():
#     return render_template("questions.html")

# @app.route("/Visualizations")
# def viz():
#     return render_template("home.html")

# @app.route("/Map")
# def mapp():
#     return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
