import 'package:english_words/english_words.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Startup Namer',
      home: RandomWordsState(),
    );
  }
}

class RandomWordsState extends StatefulWidget {
  @override
  _RandomWordsStateState createState() => _RandomWordsStateState();
}

class _RandomWordsStateState extends State<RandomWordsState> {
  final _suggestions = <WordPair>[];
  final _saved = <WordPair>[];
  final _biggerFont = TextStyle(fontSize: 18.0);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Startup Name Generator'),
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.dehaze),
            onPressed: _pushSaved,
          ),
        ],
      ),
      body: _buildSuggestions(),
    );
  }

  Widget _buildSuggestions() {
    return ListView.builder(
      padding: EdgeInsets.symmetric(vertical: 0.0, horizontal: 20.0),
      itemBuilder: (context, i) {
        if (i.isOdd) {
          return Divider(
            thickness: 2.0,
          );
        } else {
          final index = i ~/ 2;
          if (index >= _suggestions.length) {
            for (i = 0; i < 10; i++) {
              _suggestions.add(WordPair.random());
            }
          }
          return _buildRow(_suggestions[index]);
        }
      },
    );
  }

  Widget _buildRow(WordPair word) {
    final _alreadySaved = _saved.contains(word);
    return ListTile(
      title: Text(
        word.asPascalCase,
        style: _biggerFont,
      ),
      trailing: _alreadySaved
          ? Icon(Icons.favorite, color: Colors.red)
          : Icon(Icons.favorite_border),
      onTap: () {
        setState(() {
          _alreadySaved ? _saved.remove(word) : _saved.add(word);
        });
      },
    );
  }

  void _pushSaved() {
    void changeState(pair) {
      setState(() {
        _saved.remove(pair);
      });
    }

    Navigator.of(context).push(
      MaterialPageRoute<void>(
        builder: (BuildContext context) {
          return StatefulBuilder(
              builder: (BuildContext context, StateSetter setState) {
            final Iterable<ListTile> tiles = _saved.map(
              (WordPair pair) {
                return ListTile(
                  title: Text(
                    pair.asPascalCase,
                    style: _biggerFont,
                  ),
                  // Code I added //
                  trailing: Icon(Icons.delete),
                  onTap: () {
                    setState(() {
                      changeState(pair);
                    });
                  },
                  // End //
                );
              },
            );
            final List<Widget> divided = ListTile.divideTiles(
              context: context,
              tiles: tiles,
            ).toList();

            return Scaffold(
              appBar: AppBar(
                title: Text('Saved suggestions'),
              ),
              body: ListView(children: divided),
            );
          });
        },
      ),
    );
  }
}
