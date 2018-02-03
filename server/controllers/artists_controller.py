import time
from ml.song_generator import SongGenerator

class ArtistsController:
    def __init__(self):
        self.availableArtists = [
            {"name": 'Omer Adam', "pictureUrl": 'https://i.scdn.co/image/8f3e48796b2e6a428563a6a333f79b0f2fc383d2'},
            {"name": 'Eden Ben Zaken',
             "pictureUrl": 'https://scontent.fsdv3-1.fna.fbcdn.net/v/t31.0-8/14258229_1886242761599575_5759113442581614264_o.jpg?oh=60bd1d820250fc04c14fc1c63a0cbd1a&oe=5AD83887'},
            {"name": 'Eyal Golan',
             "pictureUrl": 'http://ashdodnet.com/dyncontent/Old/ashdodnet/dyncontent/t_post/2013/11/21/532005257708734602536.jpg'},
            {"name": 'Aviv Geffen',
             "pictureUrl": 'http://www.itb.co.uk/uploads/artists/58d28c22a8389.jpg'},
            {"name": 'Tuna',
             "pictureUrl": 'https://www.disccenter.co.il/content/suppliers/sup_19397.png'}
        ]

    def get_available_artist(self):
        return self.availableArtists

    def generate_song(self, artist_name):
        return SongGenerator(artist_name).generate()
