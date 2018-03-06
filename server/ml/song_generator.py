from __future__ import print_function
from keras.models import Sequential, load_model
from keras.layers import Dense, Activation
from keras.layers import LSTM
import numpy as np
import string
import random
import io

diversity = 0.5
sentences = []
next_chars = []


class SongGenerator:
    def __init__(self, artist_name, maxLen):
        self.maxLen = maxLen
        self.artist_name = artist_name.lower().replace(' ', '_')

    def get_start_text_from_corpus(self, word_corpus):
        spaceIndexes = [i for i, letter in enumerate(word_corpus[: len(word_corpus) - self.maxLen - 1]) if letter == '\n']
        start_index = random.randint(0, len(spaceIndexes) - 1)

        return word_corpus[spaceIndexes[start_index] + 1:spaceIndexes[start_index] + 1 + self.maxLen]

    def convert_text_to_one_hot(self, text, chars_corpus, char_to_indices):
        text_one_hot_array = np.zeros((1, self.maxLen, len(chars_corpus)))
        for t, char in enumerate(text):
            text_one_hot_array[0, t, char_to_indices[char]] = 1.

        return text_one_hot_array

    def sample(self, preds):
        preds = np.asarray(preds).astype('float64')
        preds = np.log(preds) / diversity
        exp_preds = np.exp(preds)
        preds = exp_preds / np.sum(exp_preds)
        probas = np.random.multinomial(1, preds, 1)

        return np.argmax(probas)

    def load_model(self, char_corpus):
        self.model = Sequential()
        self.model.add(LSTM(256, input_shape=(self.maxLen, len(char_corpus))))
        self.model.add(Dense(len(char_corpus)))
        self.model.add(Activation('softmax'))

        loadedModel = load_model('assets/' + self.artist_name + '.h5')
        self.model.set_weights(loadedModel.get_weights())

    def generate_rest_of_song(self, song, word_corpus):
        chars_corpus = sorted(list(set(word_corpus)))
        char_to_indices = dict((char, index) for index, char in enumerate(chars_corpus))
        indices_to_char = dict((index, char) for index, char in enumerate(chars_corpus))
        related_chars = song

        self.load_model(chars_corpus)

        for i in range(400):
            related_chars_one_hot_array = self.convert_text_to_one_hot(related_chars, chars_corpus, char_to_indices)
            preds = self.model.predict(related_chars_one_hot_array, verbose=0, batch_size=1)[0]
            next_index = self.sample(preds)
            next_char = indices_to_char[next_index]

            song += next_char
            related_chars = related_chars[1:] + next_char

        return song

    def generate(self):
        word_corpus = io.open('assets/' + self.artist_name + '.txt', encoding='utf-8').read().lower().replace('line', '\n')
        translator = str.maketrans('', '', '!"#$%&()*+,-./:;<=>?@[\]^_`{|}')
        word_corpus = word_corpus.translate(translator)
        
        song_start = self.get_start_text_from_corpus(word_corpus)

        return self.generate_rest_of_song(song_start, word_corpus)
