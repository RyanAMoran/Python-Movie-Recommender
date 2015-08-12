# Ryan Moran
# CSE 30332
# Pyjamas movie recommender
# A simple movie recommender that accesses online movie database provided for class use and allows the user to rate movies, which
# effects the rating stored in the database and will be reflected to other users.
import pyjd
from pyjamas.ui.RootPanel import RootPanel
from pyjamas.ui.Label import Label
import pygwt
from pyjamas.ui.Button import Button
from pyjamas.HTTPRequest import HTTPRequest
from pyjamas.JSONService import loads
from pyjamas.ui.TextBox import TextBox
from pyjamas.ui.Image import Image
from pyjamas.ui.AbsolutePanel import AbsolutePanel
from pyjamas.JSONService import dumps
from pyjamas import Window

class currentMovie:
	def onCompletion(self, text):
		data = loads(text)
		if 'title' in data:
			movie.setText(data['title'])
			img = data['img']
			poster.setUrl('http://www.cse.nd.edu/~cmc/teaching/cse30332_sp15/images/'+str(img))
		else:
			movie.setText("No Movie for supplied Movie ID #")

class currentRating:
	def onCompletion(self, text):
		data = loads(text)
		if 'rating' in data:
			movieRating.setText("Rating: "+str(data['rating']))

def findMovie(inp):
	try:
		int(inp)
		INT = 1
	except ValueError:
		INT = 0
	if INT == 1:
		HTTPRequest().asyncGet("http://student02.cse.nd.edu:40001/movies/"+str(inp), currentMovie(self))
	else:
		movie.setText("Movie not Found. Please Enter an Integer ID")

def findRating(inp):
	try:
		int(inp)
		INT = 1
	except ValueError:
		INT = 0
	if INT == 1:
		HTTPRequest().asyncGet("http://student02.cse.nd.edu:40001/ratings/"+str(inp), currentRating(self))

class PutCtrl:
        def __init__(self, mainpage):
                self.mainpage = mainpage

        def onCompletion(self, text):
		HTTPRequest().asyncGet("http://student02.cse.nd.edu:40001/recommendations/156", getRec(self))

def upvote():
	data = {}
	data['movie_id'] = str(mainpage.mid)
	data['rating'] = '5'
	data['apikey'] = '9GQWe8XVSy'
	text = dumps(data)
	HTTPRequest().asyncPut("http://student02.cse.nd.edu:40001/recommendations/156", text, PutCtrl(self))

def downvote():
	data = {}
	data['movie_id'] = str(mainpage.mid)
	data['rating'] = '1'
	data['apikey'] = '9GQWe8XVSy'
	text = dumps(data)
	HTTPRequest().asyncPut("http://student02.cse.nd.edu:40001/recommendations/156", text, PutCtrl(self))

class getRec:
	def onCompletion(self, text):
		result = loads(text)
		findMovie(result['movie_id'])
		findRating(result['movie_id'])
		mainpage.mid = result['movie_id']
		

class Site:
	def __init__(self):
		self.mid = None
		HTTPRequest().asyncGet("http://student02.cse.nd.edu:40001/recommendations/156", getRec(self))


if __name__=='__main__':
	pyjd.setup("public/primer.html")
	mainpage = Site()
	l = Label("Enter movie ID:")
	movie = Label("Movie Title Displayed Here if Found")
	movieRating = Label("Movie Rating Displayed Here if Found")
	poster = Image()
	b1 = Button("Up",upvote)
	b2 = Button("Down", downvote)
	absolute = AbsolutePanel()
	absolute.add(poster,50,25)
	absolute.add(b1,0,100)
	absolute.add(b2,250,100)
	absolute.add(movie,50,0)
	absolute.add(movieRating,50,315)
	absolute.setWidth("100%")
        absolute.setHeight("100%")
	RootPanel().add(absolute)
	pyjd.run()
