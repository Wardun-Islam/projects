import 'dart:math';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Dice',
      home: DiceeApp(),
    );
  }
}

class DiceeApp extends StatefulWidget {
  @override
  _DiceeAppState createState() => _DiceeAppState();
}

class _DiceeAppState extends State<DiceeApp> {
  int _randonNumber1 = Random.secure().nextInt(6) + 1;
  int _randonNumber2 = Random.secure().nextInt(6) + 1;
  _changeDice() {
    setState(() {
      _randonNumber1 = Random.secure().nextInt(6) + 1;
      _randonNumber2 = Random.secure().nextInt(6) + 1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.red,
      appBar: AppBar(
        centerTitle: true,
        title: Text('Dice'),
        backgroundColor: Colors.red,
      ),
      body: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Expanded(
              flex: 1,
              child: Container(
                child: FlatButton(
                  child: Image.asset(
                    'images/$_randonNumber1.png',
                    color: Colors.lightBlueAccent,
                  ),
                  onPressed: () {
                    _changeDice();
                  },
                ),
              ),
            ),
            Expanded(
              flex: 1,
              child: Container(
                child: FlatButton(
                  child: Image.asset(
                    'images/$_randonNumber2.png',
                    color: Colors.lightBlueAccent,
                  ),
                  onPressed: () {
                    _changeDice();
                  },
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
