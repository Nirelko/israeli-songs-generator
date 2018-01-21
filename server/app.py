from flask import Flask, jsonify, request, url_for
from controllers import artists_controller

app = Flask(__name__, static_url_path='/static')

ArtistsController = artists_controller.ArtistsController()

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/artists')
def get_artists():
    return jsonify(ArtistsController.get_available_artist())

@app.route('/api/artists/generateSong')
def generate_song():
    return jsonify(ArtistsController.generate_song(request.args.get('artistName', '')))

if __name__ == '__main__':
    app.run(debug=True)
