/* start module: movie */
$pyjs['loaded_modules']['movie'] = function (__mod_name__) {
	if($pyjs['loaded_modules']['movie']['__was_initialized__']) return $pyjs['loaded_modules']['movie'];
	var $m = $pyjs['loaded_modules']['movie'];
	$m['__repr__'] = function() { return '<module: movie>'; };
	$m['__was_initialized__'] = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'movie';
	$m['__name__'] = __mod_name__;


	$m['pyjd'] = $p['___import___']('pyjd', null);
	$m['RootPanel'] = $p['___import___']('pyjamas.ui.RootPanel.RootPanel', null, null, false);
	$m['Label'] = $p['___import___']('pyjamas.ui.Label.Label', null, null, false);
	$m['pygwt'] = $p['___import___']('pygwt', null);
	$m['Button'] = $p['___import___']('pyjamas.ui.Button.Button', null, null, false);
	$m['HTTPRequest'] = $p['___import___']('pyjamas.HTTPRequest.HTTPRequest', null, null, false);
	$m['loads'] = $p['___import___']('pyjamas.JSONService.loads', null, null, false);
	$m['TextBox'] = $p['___import___']('pyjamas.ui.TextBox.TextBox', null, null, false);
	$m['Image'] = $p['___import___']('pyjamas.ui.Image.Image', null, null, false);
	$m['AbsolutePanel'] = $p['___import___']('pyjamas.ui.AbsolutePanel.AbsolutePanel', null, null, false);
	$m['dumps'] = $p['___import___']('pyjamas.JSONService.dumps', null, null, false);
	$m['Window'] = $p['___import___']('pyjamas.Window', null, null, false);
	$m['currentMovie'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'movie';
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var img,$add2,$add1,data;
			data = $m['loads'](text);
			if ($p['bool'](data['__contains__']('title'))) {
				$m['movie']['setText'](data['__getitem__']('title'));
				img = data['__getitem__']('img');
				$m['poster']['setUrl']($p['__op_add']($add1='http://www.cse.nd.edu/~cmc/teaching/cse30332_sp15/images/',$add2=$p['str'](img)));
			}
			else {
				$m['movie']['setText']('No Movie for supplied Movie ID #');
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('currentMovie', $p['tuple']($bases), $data);
	})();
	$m['currentRating'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'movie';
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var data,$add4,$add3;
			data = $m['loads'](text);
			if ($p['bool'](data['__contains__']('rating'))) {
				$m['movieRating']['setText']($p['__op_add']($add3='Rating: ',$add4=$p['str'](data['__getitem__']('rating'))));
			}
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('currentRating', $p['tuple']($bases), $data);
	})();
	$m['findMovie'] = function(inp) {
		var INT,$add6,$pyjs_try_err,$add5;
		try {
			$p['float_int'](inp);
			INT = 1;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
				INT = 0;
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		if ($p['bool']($p['op_eq'](INT, 1))) {
			$m['HTTPRequest']()['asyncGet']($p['__op_add']($add5='http://student02.cse.nd.edu:40001/movies/',$add6=$p['str'](inp)), $m['currentMovie']((typeof self == "undefined"?$m['self']:self)));
		}
		else {
			$m['movie']['setText']('Movie not Found. Please Enter an Integer ID');
		}
		return null;
	};
	$m['findMovie']['__name__'] = 'findMovie';

	$m['findMovie']['__bind_type__'] = 0;
	$m['findMovie']['__args__'] = [null,null,['inp']];
	$m['findRating'] = function(inp) {
		var INT,$add8,$pyjs_try_err,$add7;
		try {
			$p['float_int'](inp);
			INT = 1;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err['__name__'] == 'undefined' ? $pyjs_try_err['name'] : $pyjs_try_err['__name__'] );
			$pyjs['__last_exception__'] = {'error': $pyjs_try_err, 'module': $m};
			if (($pyjs_try_err_name == $p['ValueError']['__name__'])||$p['_isinstance']($pyjs_try_err,$p['ValueError'])) {
				INT = 0;
			} else { $pyjs['__active_exception_stack__'] = $pyjs['__last_exception_stack__']; $pyjs['__last_exception_stack__'] = null; throw $pyjs_try_err; }
		}
		if ($p['bool']($p['op_eq'](INT, 1))) {
			$m['HTTPRequest']()['asyncGet']($p['__op_add']($add7='http://student02.cse.nd.edu:40001/ratings/',$add8=$p['str'](inp)), $m['currentRating']((typeof self == "undefined"?$m['self']:self)));
		}
		return null;
	};
	$m['findRating']['__name__'] = 'findRating';

	$m['findRating']['__bind_type__'] = 0;
	$m['findRating']['__args__'] = [null,null,['inp']];
	$m['PutCtrl'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'movie';
		$method = $pyjs__bind_method2('__init__', function(mainpage) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				mainpage = arguments[1];
			}

			self['mainpage'] = mainpage;
			return null;
		}
	, 1, [null,null,['self'],['mainpage']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			$m['HTTPRequest']()['asyncGet']('http://student02.cse.nd.edu:40001/recommendations/156', (typeof getRec == "undefined"?$m['getRec']:getRec)(self));
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('PutCtrl', $p['tuple']($bases), $data);
	})();
	$m['upvote'] = function() {
		var text,data;
		data = $p['dict']([]);
		data['__setitem__']('movie_id', $p['str']($p['getattr']((typeof mainpage == "undefined"?$m['mainpage']:mainpage), 'mid')));
		data['__setitem__']('rating', '5');
		data['__setitem__']('apikey', '9GQWe8XVSy');
		text = $m['dumps'](data);
		$m['HTTPRequest']()['asyncPut']('http://student02.cse.nd.edu:40001/recommendations/156', text, $m['PutCtrl']((typeof self == "undefined"?$m['self']:self)));
		return null;
	};
	$m['upvote']['__name__'] = 'upvote';

	$m['upvote']['__bind_type__'] = 0;
	$m['upvote']['__args__'] = [null,null];
	$m['downvote'] = function() {
		var text,data;
		data = $p['dict']([]);
		data['__setitem__']('movie_id', $p['str']($p['getattr']((typeof mainpage == "undefined"?$m['mainpage']:mainpage), 'mid')));
		data['__setitem__']('rating', '1');
		data['__setitem__']('apikey', '9GQWe8XVSy');
		text = $m['dumps'](data);
		$m['HTTPRequest']()['asyncPut']('http://student02.cse.nd.edu:40001/recommendations/156', text, $m['PutCtrl']((typeof self == "undefined"?$m['self']:self)));
		return null;
	};
	$m['downvote']['__name__'] = 'downvote';

	$m['downvote']['__bind_type__'] = 0;
	$m['downvote']['__args__'] = [null,null];
	$m['getRec'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'movie';
		$method = $pyjs__bind_method2('onCompletion', function(text) {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}
			var result;
			result = $m['loads'](text);
			$m['findMovie'](result['__getitem__']('movie_id'));
			$m['findRating'](result['__getitem__']('movie_id'));
			$m['mainpage']['mid'] = result['__getitem__']('movie_id');
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['onCompletion'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('getRec', $p['tuple']($bases), $data);
	})();
	$m['Site'] = (function(){
		var $cls_definition = new Object();
		var $method;
		$cls_definition['__module__'] = 'movie';
		$method = $pyjs__bind_method2('__init__', function() {
			if (this['__is_instance__'] === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['mid'] = null;
			$m['HTTPRequest']()['asyncGet']('http://student02.cse.nd.edu:40001/recommendations/156', $m['getRec'](self));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		var $bases = new Array(pyjslib['object']);
		var $data = $p['dict']();
		for (var $item in $cls_definition) { $data['__setitem__']($item, $cls_definition[$item]); }
		return $p['_create_class']('Site', $p['tuple']($bases), $data);
	})();
	if ($p['bool']($p['op_eq']((typeof __name__ == "undefined"?$m['__name__']:__name__), '__main__'))) {
		$m['pyjd']['setup']('public/primer.html');
		$m['uid'] = 156;
		$m['mainpage'] = $m['Site']();
		$m['l'] = $m['Label']('Enter movie ID:');
		$m['movie'] = $m['Label']('Movie Title Displayed Here if Found');
		$m['movieRating'] = $m['Label']('Movie Rating Displayed Here if Found');
		$m['poster'] = $m['Image']();
		$m['b1'] = $m['Button']('Up', $m['upvote']);
		$m['b2'] = $m['Button']('Down', $m['downvote']);
		$m['absolute'] = $m['AbsolutePanel']();
		$m['absolute']['add']($m['poster'], 50, 25);
		$m['absolute']['add']($m['b1'], 0, 100);
		$m['absolute']['add']($m['b2'], 250, 100);
		$m['absolute']['add']($m['movie'], 50, 0);
		$m['absolute']['add']($m['movieRating'], 50, 315);
		$m['absolute']['setWidth']('100%');
		$m['absolute']['setHeight']('100%');
		$m['RootPanel']()['add']($m['absolute']);
		$m['pyjd']['run']();
	}
	return this;
}; /* end movie */


/* end module: movie */


/*
PYJS_DEPS: ['pyjd', 'pyjamas.ui.RootPanel.RootPanel', 'pyjamas', 'pyjamas.ui', 'pyjamas.ui.RootPanel', 'pyjamas.ui.Label.Label', 'pyjamas.ui.Label', 'pygwt', 'pyjamas.ui.Button.Button', 'pyjamas.ui.Button', 'pyjamas.HTTPRequest.HTTPRequest', 'pyjamas.HTTPRequest', 'pyjamas.JSONService.loads', 'pyjamas.JSONService', 'pyjamas.ui.TextBox.TextBox', 'pyjamas.ui.TextBox', 'pyjamas.ui.Image.Image', 'pyjamas.ui.Image', 'pyjamas.ui.AbsolutePanel.AbsolutePanel', 'pyjamas.ui.AbsolutePanel', 'pyjamas.JSONService.dumps', 'pyjamas.Window']
*/
