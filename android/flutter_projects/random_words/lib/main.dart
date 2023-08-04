import 'package:english_words/english_words.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main() => runApp(RandomWordApp());

// ignore: must_be_immutable
class RandomWordApp extends StatelessWidget {
  TextStyle largeTextStyle = TextStyle(
    fontSize: 24.0,
    fontWeight: FontWeight.w700,
    color: Colors.blueGrey[700],
  );
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Word Generator',
      home: Scaffold(
        backgroundColor: Colors.white,
        appBar: AppBar(
          title: Text('Random Word Generator'),
          backgroundColor: Colors.blueGrey[700],
        ),
        body: Center(
          child: Text(
            WordPair.random().asPascalCase,
            style: largeTextStyle,
          ),
        ),
      ),
    );
  }
}
