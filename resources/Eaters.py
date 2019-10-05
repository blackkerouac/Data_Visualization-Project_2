{
 "cells": [
  {
   "cell_type": "code",
   "execution_count": 1,
   "metadata": {
    "nbgrader": {
     "grade": false,
     "grade_id": "cell-73b2f38ad9371a0f",
     "locked": false,
     "schema_version": 1,
     "solution": true
    }
   },
   "outputs": [],
   "source": [
    "# Imports\n",
    "import pandas as pd\n",
    "import sqlalchemy\n",
    "from sqlalchemy import create_engine, MetaData\n",
    "from sqlalchemy.ext.declarative import declarative_base\n",
    "from sqlalchemy import Column, Integer, String, Numeric, Text, Float, ForeignKey\n",
    "from sqlalchemy.orm import sessionmaker, relationship"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 2,
   "metadata": {
    "nbgrader": {
     "grade": false,
     "grade_id": "cell-4348a03f380dfb6f",
     "locked": false,
     "schema_version": 1,
     "solution": true
    }
   },
   "outputs": [],
   "source": [
    "# Create Engine\n",
    "engine = create_engine(\"sqlite:///Eaters.sqlite\")"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 3,
   "metadata": {
    "nbgrader": {
     "grade": false,
     "grade_id": "cell-80d9eb4438af8d35",
     "locked": false,
     "schema_version": 1,
     "solution": true
    }
   },
   "outputs": [],
   "source": [
    "# Declare a Base object here\n",
    "Base = declarative_base()"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 4,
   "metadata": {
    "nbgrader": {
     "grade": false,
     "grade_id": "cell-002f39eb815802b5",
     "locked": false,
     "schema_version": 1,
     "solution": true
    }
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "__main__.Eaters"
      ]
     },
     "execution_count": 4,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "# Define the ORM class for `Eaters`\n",
    "### BEGIN SOLUTION\n",
    "class Eaters(Base):\n",
    "    \n",
    "    __tablename__ = 'eaters'\n",
    "\n",
    "    Survey_ID = Column(Integer, primary_key=True)\n",
    "    Eater_Type = Column(Text)\n",
    "    Motivation_Animal_Protection = Column(Text)\n",
    "    Motivation_Concern_for_Environment = Column(Text)\n",
    "    Motivation_Cost = Column(Text)\n",
    "    Motivation_Health = Column(Text)\n",
    "    Motivation_Religious_Spiritual_Beliefs = Column(Text)\n",
    "    Motivation_Social_Influence = Column(Text)\n",
    "    Motivation_Social_Justice_or_World_Hunger = Column(Text)\n",
    "    Motivation_Taste_Preferences = Column(Text)\n",
    "    Motivation_Following_Food_Trend = Column(Text)\n",
    "    Motivation_Feelings_of_Disgust_about_Meat = Column(Text)\n",
    "    Age_Transitioned_to_Vegnism = Column(Integer)\n",
    "    Gender = Column(Text)\n",
    "    State = Column(Text)\n",
    "    Education = Column(Text)\n",
    "    Political = Column(Text)\n",
    "    Race_Ethnicity = Column(Text)\n",
    "    Religion = Column(Text)\n",
    "    \n",
    "    def __repr__(self):\n",
    "        return f\"id={self.id}, name={self.station}\"\n",
    "    \n",
    "Eaters\n",
    "### END SOLUTION"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 5,
   "metadata": {
    "nbgrader": {
     "grade": false,
     "grade_id": "cell-5218105c2b354fdf",
     "locked": false,
     "schema_version": 1,
     "solution": true
    }
   },
   "outputs": [],
   "source": [
    "# Use `create_all` to create the tables\n",
    "### BEGIN SOLUTION\n",
    "Base.metadata.create_all(engine)\n",
    "### END SOLUTION"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 6,
   "metadata": {
    "nbgrader": {
     "grade": false,
     "grade_id": "cell-afd7af1e5402db5f",
     "locked": false,
     "schema_version": 1,
     "solution": true
    }
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "['eaters']"
      ]
     },
     "execution_count": 6,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "# Verify that the table names exist in the database\n",
    "### BEGIN SOLUTION\n",
    "engine.table_names()\n",
    "### END SOLUTION"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 7,
   "metadata": {
    "nbgrader": {
     "grade": false,
     "grade_id": "cell-770279fd4ca289f3",
     "locked": false,
     "schema_version": 1,
     "solution": true
    }
   },
   "outputs": [],
   "source": [
    "# Use Pandas to Bulk insert each CSV file into their appropriate table\n",
    "### BEGIN SOLUTION\n",
    "def populate_eaters(engine, table, csvfile):\n",
    "    \"\"\"Populates a table from a Pandas DataFrame.\"\"\"\n",
    "    # connect to the database\n",
    "    conn = engine.connect()\n",
    "    \n",
    "    # Load the CSV file into a pandas dataframe \n",
    "    df_of_data_to_insert = pd.read_csv(csvfile)\n",
    "    \n",
    "    # Orient='records' creates a list of data to write\n",
    "    # http://pandas-docs.github.io/pandas-docs-travis/io.html#orient-options\n",
    "    data = df_of_data_to_insert.to_dict(orient='records')\n",
    "\n",
    "    # Optional: Delete all rows in the table \n",
    "    conn.execute(table.delete())\n",
    "\n",
    "    # Insert the dataframe into the database in one bulk insert\n",
    "    conn.execute(table.insert(), data)\n",
    "    \n",
    "# Call the function to insert the data for each table\n",
    "populate_eaters(engine, Eaters.__table__, 'Eaters.csv')\n",
    "### END SOLUTION"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": 8,
   "metadata": {
    "nbgrader": {
     "grade": false,
     "grade_id": "cell-0e70107d966ea1e6",
     "locked": false,
     "schema_version": 1,
     "solution": true
    }
   },
   "outputs": [
    {
     "data": {
      "text/plain": [
       "[(62, 'Omnivore', None, None, None, None, None, None, None, None, None, None, None, 'Female', 'California', 'Bachelors degree', 'Neutral/Centrist', 'White', 'Do not actively practice a religion')]"
      ]
     },
     "execution_count": 8,
     "metadata": {},
     "output_type": "execute_result"
    }
   ],
   "source": [
    "# Use a basic query to validate that the data was inserted correctly for table `measurement`\n",
    "### BEGIN SOLUTION\n",
    "engine.execute(\"SELECT * FROM eaters LIMIT 1\").fetchall()\n",
    "### END SOLUTION"
   ]
  }
 ],
 "metadata": {
  "celltoolbar": "Create Assignment",
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.6.8"
  },
  "varInspector": {
   "cols": {
    "lenName": 16,
    "lenType": 16,
    "lenVar": 40
   },
   "kernels_config": {
    "python": {
     "delete_cmd_postfix": "",
     "delete_cmd_prefix": "del ",
     "library": "var_list.py",
     "varRefreshCmd": "print(var_dic_list())"
    },
    "r": {
     "delete_cmd_postfix": ") ",
     "delete_cmd_prefix": "rm(",
     "library": "var_list.r",
     "varRefreshCmd": "cat(var_dic_list()) "
    }
   },
   "types_to_exclude": [
    "module",
    "function",
    "builtin_function_or_method",
    "instance",
    "_Feature"
   ],
   "window_display": false
  }
 },
 "nbformat": 4,
 "nbformat_minor": 2
}
