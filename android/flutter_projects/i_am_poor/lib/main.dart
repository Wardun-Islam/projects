import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'I am poor',
      home: PoorApp(),
    );
  }
}

class PoorApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.yellowAccent,
      appBar: AppBar(
        centerTitle: true,
        title: Text(
          'I am poor',
          style: TextStyle(color: Colors.black),
        ),
        backgroundColor: Colors.yellowAccent[700],
      ),
      body: Center(
        child: Image.asset('images/coal.png'),
      ),
    );
  }
}
