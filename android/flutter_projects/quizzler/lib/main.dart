import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'QuestionBank.dart';

void main() {
  runApp(MaterialApp(
    title: 'Quizzler',
    home: MyApp(),
  ));
}

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  Future<void> _showMyDialog() async {
    return showDialog<void>(
      context: context,
      barrierDismissible: false, // user must tap button!
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text('Quiz Finished!'),
          content: SingleChildScrollView(
            child: ListBody(
              children: <Widget>[
                Text('This is the last question of that question bank.'),
              ],
            ),
          ),
          actions: <Widget>[
            FlatButton(
              child: Text('Reset'),
              onPressed: () {
                Navigator.of(context).pop();
              },
            ),
          ],
        );
      },
    );
  }

  int _last = 0;
  List<bool> _scoreKepper = [];
  final QuestionBank questionBank = new QuestionBank();
  void changeState(bool answer) {
    if (questionBank.checkAnswer(answer)) {
      _scoreKepper.add(true);
    } else {
      _scoreKepper.add(false);
    }
    if (questionBank.getCurrentQuestionNumber() < 9)
      questionBank.incrementCurrentQuestionNumber();
    else {
      _last++;
    }
    if (_last == 2) {
      questionBank.reset();
      _scoreKepper.clear();
      _showMyDialog();
      _last = 0;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blueGrey[900],
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Expanded(
                flex: 5,
                child: Center(
                  child: Text(
                    questionBank.getQuestion(),
                    style: TextStyle(
                      fontSize: 20.0,
                      color: Colors.white,
                    ),
                  ),
                ),
              ),
              Expanded(
                child: Container(
                  margin: EdgeInsets.all(16.0),
                  child: FlatButton(
                    onPressed: () {
                      setState(() {
                        changeState(true);
                      });
                    },
                    color: Colors.green,
                    child: Text(
                      'True',
                      style: TextStyle(
                        fontSize: 20.0,
                        color: Colors.white,
                      ),
                    ),
                  ),
                ),
              ),
              Expanded(
                child: Container(
                  margin: EdgeInsets.all(16.0),
                  child: FlatButton(
                    onPressed: () {
                      setState(() {
                        changeState(false);
                      });
                    },
                    color: Colors.red,
                    child: Text('False',
                        style: TextStyle(
                          fontSize: 20.0,
                          color: Colors.white,
                        )),
                  ),
                ),
              ),
              Expanded(
                child: ListView(
                  reverse: false,
                  scrollDirection: Axis.horizontal,
                  children: _scoreKepper.map((score) {
                    return Icon(
                      score ? Icons.check : Icons.close,
                      color: score ? Colors.green : Colors.red,
                    );
                  }).toList(),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
