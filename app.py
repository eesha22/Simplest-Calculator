from flask import Flask, jsonify, request, render_template
import math
app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/calculate', methods=['POST'])

def calculate():
    num = request.json
    operate = num.get('operate')
    ans = eval(operate,{"__builtins__": None}, math.__dict__)
    return jsonify(ans=ans)

if __name__ == '__main__':
    app.run(debug=True)