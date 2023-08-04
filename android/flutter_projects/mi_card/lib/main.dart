import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My Personal Details',
      home: Scaffold(
        backgroundColor: Colors.teal,
        body: SafeArea(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              CircleAvatar(
                radius: 50.0,
                backgroundImage: AssetImage('images/person.jpg'),
              ),
              Text(
                'Md. Wardun Islam',
                style: TextStyle(
                  fontFamily: 'Pacifico-Regular',
                  fontSize: 40.0,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
              Text(
                'Flutter Developer'.toUpperCase(),
                style: TextStyle(
                  fontFamily: 'RobotoSlab-VariableFont_wght',
                  fontSize: 20.0,
                  letterSpacing: 2.5,
                  color: Colors.teal[100],
                  fontWeight: FontWeight.bold,
                ),
              ),
              SizedBox(
                height: 20.0,
                width: 250.0,
                child: Divider(
                  height: 3.0,
                  color: Colors.teal[100],
                ),
              ),
              Card(
                elevation: 4.0,
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 30.0),
                color: Colors.white,
                child: Padding(
                  padding:
                      EdgeInsets.symmetric(vertical: 15.0, horizontal: 20.0),
                  child: Row(
                    children: <Widget>[
                      Icon(
                        Icons.phone,
                        color: Colors.teal[700],
                      ),
                      SizedBox(
                        width: 10.0,
                      ),
                      Text(
                        '+8801797800497',
                        style:
                            TextStyle(color: Colors.teal[900], fontSize: 20.0),
                      )
                    ],
                  ),
                ),
              ),
              Card(
                elevation: 4.0,
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 30.0),
                color: Colors.white,
                child: Padding(
                  padding:
                      EdgeInsets.symmetric(vertical: 15.0, horizontal: 20.0),
                  child: Row(
                    children: <Widget>[
                      Icon(
                        Icons.email,
                        color: Colors.teal[700],
                      ),
                      SizedBox(
                        width: 10.0,
                      ),
                      Text(
                        'wardunislamnoon@gmail.com',
                        style:
                            TextStyle(color: Colors.teal[900], fontSize: 20.0),
                      )
                    ],
                  ),
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
