import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(
    MaterialApp(
      title: 'I am rich',
      home: RichApp(),
    ),
  );
}

class RichApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blueGrey,
      appBar: AppBar(
        centerTitle: true,
        title: Text('I Am Rich'),
        backgroundColor: Colors.blueGrey[700],
      ),
      body: Center(
        child: Image.asset('images/diamond_body.png'),
      ),
    );
  }
}
