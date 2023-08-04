import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class ExpenseRow extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Card(
      color: Colors.white70,
      shadowColor: Colors.black,
      elevation: 10,
      child: ListTile(
        title: Text('21/12/21'),
      ),
    );
  }
}
