from flask import Flask, jsonify, request, render_template
from flaskext.mysql import MySQL
import pyodbc
import pymysql.cursors
from decimal import Decimal

app = Flask(__name__)
mysql = MySQL()

# MySQL configurations
app.config['MYSQL_DATABASE_USER'] = 'teamMembers@cs411team57'
app.config['MYSQL_DATABASE_PASSWORD'] = 'whydontwe57!'
app.config['MYSQL_DATABASE_DB'] = '411database'
app.config['MYSQL_DATABASE_HOST'] = 'cs411team57.mysql.database.azure.com'

mysql.init_app(app)

# setting up some routes
@app.route('/api')
def home():
    return {"Hello": "World"}, 200

# GET
@app.route('/')
def get_user():
    cur = mysql.get_db().cursor()
    cur.execute('''select * from 411database.User''')
    r = [dict((cur.description[i][0], value)
                for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify({'myCollection' : r})

# POST
@app.route('/')
def post():
    cur = mysql.get_db().cursor()
    cur.execute('''select * from 411database.User''')
    r = [dict((cur.description[i][0], value)
                for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify({'myCollection' : r})

# create new user
@app.route('/register', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        details = request.form 
        userID = details['userID']
        userPassword = details['userPassword']
        homeAirport = details['homeAirport']
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO User(userID, userPassword, homeAirport) VALUES (%s, %s, %s)"),
        mysql.connection.commit()
        cur.close()
        return "Success"
    return render_template('/front-end/register.js')

# get user info
@app.route('/User')
def User():
    try:
        conn = mysql.connect()
        cur = conn.cursor(pymysql.cursors.DictCursor)
        cur.execute('''SELECT * FROM User''')
        rows = cur.fetchall()
        response = jsonify(rows)
        response.status_code = 200
        return response
    except Exception as e:
        print(e)

    finally:
        cur.close()
        conn.close()

@app.errorhandler(404)
def not_found(error = None):
    message = {
        'status': 404,
        'message': 'Not Found' + request.url
    }
    response = jsonify(message)
    response.status_code = 404

    return response

# get flights
# GET
@app.route('/api/get_flights')
def get_flights():
    cur = mysql.get_db().cursor()
    cur.execute('''SELECT FROM 411database.five_1_airlines''')
    r = [dict((cur.description[i][0], value)
                for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify({'myCollection' : str(r)})
    # str(r) so that decimals are turned into strings to be jsonify




if __name__ == '__main__':
    app.run()