import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main() {
  runApp(HelloWorldApp());
}

class HelloWorldApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Hello World',
      home: Scaffold(
        appBar: AppBar(
          backgroundColor: Colors.red,
          centerTitle: true,
          title: Text('Hello World'),
        ),
        body: Center(
          child: Text(
            'Hello World!',
            style: TextStyle(
              fontSize: 18.0,
              color: Colors.red,
              fontWeight: FontWeight.w700,
            ),
          ),
        ),
      ),
    );
  }
}
