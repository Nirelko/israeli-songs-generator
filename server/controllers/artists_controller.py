import time
from ml.song_generator import SongGenerator

class ArtistsController:
    def __init__(self):
        self.availableArtists = [
            {"name": 'מזרחית', 
             "pictureUrl": 'http://www.radiom.co.il/LOGO2.png',
             "maxLen": 15
             },
            {"name": 'פופ',
             "pictureUrl": 'https://cdn.shopify.com/s/files/1/2397/1553/files/PopMusicRecords_Tees_Colour_720x.jpg?v=1506446168',
             "maxLen": 15
             },
            {"name": 'רוק',
             "pictureUrl": 'https://is3-ssl.mzstatic.com/image/thumb/Music3/v4/40/9a/b7/409ab7b6-ba97-6bf2-33e0-2a1166e7baf0/889211446995.jpg/268x0w.jpg',
             "maxLen": 15
             },
            {"name": 'ישראל הישנה',
             "pictureUrl": 'http://images.maariv.co.il/image/upload/f_auto,fl_lossy/t_ArticleControlTransformaionFaceDetect/437395',
             "maxLen": 15
            }
        ]

        self.songGenerator = SongGenerator()

    def get_available_artist(self):
        return self.availableArtists

    def generate_song(self, artist_name):
        return self.songGenerator.generate(artist_name, [artist["maxLen"] for artist in self.availableArtists if artist["name"] == artist_name][0])
