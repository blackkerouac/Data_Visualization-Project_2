#!/usr/bin/env python
# coding: utf-8

# In[1]:


# Imports
import pandas as pd
import sqlalchemy
from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String, Numeric, Text, Float, ForeignKey
from sqlalchemy.orm import sessionmaker, relationship


# In[2]:


# Create Engine
engine = create_engine("sqlite:///Eaters.sqlite")


# In[3]:


# Declare a Base object here
Base = declarative_base()


# In[4]:


# Define the ORM class for `Eaters`
### BEGIN SOLUTION
class Eaters(Base):
    
    __tablename__ = 'eaters'

    Survey_ID = Column(Integer, primary_key=True)
    Eater_Type = Column(Text)
    Motivation_Animal_Protection = Column(Text)
    Motivation_Concern_for_Environment = Column(Text)
    Motivation_Cost = Column(Text)
    Motivation_Health = Column(Text)
    Motivation_Religious_Spiritual_Beliefs = Column(Text)
    Motivation_Social_Influence = Column(Text)
    Motivation_Social_Justice_or_World_Hunger = Column(Text)
    Motivation_Taste_Preferences = Column(Text)
    Motivation_Following_Food_Trend = Column(Text)
    Motivation_Feelings_of_Disgust_about_Meat = Column(Text)
    Age_Transitioned_to_Vegnism = Column(Integer)
    Gender = Column(Text)
    State = Column(Text)
    Education = Column(Text)
    Political = Column(Text)
    Race_Ethnicity = Column(Text)
    Religion = Column(Text)
    
    def __repr__(self):
        return f"id={self.id}, name={self.station}"
    
Eaters
### END SOLUTION


# In[5]:


# Use `create_all` to create the tables
### BEGIN SOLUTION
Base.metadata.create_all(engine)
### END SOLUTION


# In[6]:


# Verify that the table names exist in the database
### BEGIN SOLUTION
engine.table_names()
### END SOLUTION


# In[7]:


# Use Pandas to Bulk insert each CSV file into their appropriate table
### BEGIN SOLUTION
def populate_eaters(engine, table, csvfile):
    """Populates a table from a Pandas DataFrame."""
    # connect to the database
    conn = engine.connect()
    
    # Load the CSV file into a pandas dataframe 
    df_of_data_to_insert = pd.read_csv(csvfile)
    
    # Orient='records' creates a list of data to write
    # http://pandas-docs.github.io/pandas-docs-travis/io.html#orient-options
    data = df_of_data_to_insert.to_dict(orient='records')

    # Optional: Delete all rows in the table 
    conn.execute(table.delete())

    # Insert the dataframe into the database in one bulk insert
    conn.execute(table.insert(), data)
    
# Call the function to insert the data for each table
populate_eaters(engine, Eaters.__table__, 'Eaters.csv')
### END SOLUTION


# In[8]:


# Use a basic query to validate that the data was inserted correctly for table `measurement`
### BEGIN SOLUTION
engine.execute("SELECT * FROM eaters LIMIT 1").fetchall()
### END SOLUTION

