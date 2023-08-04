import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'components/ExpenseRow.dart';

void main() {
  runApp(
    MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Expense Manager'),
        ),
        body: SafeArea(
          child: Center(
            child: ListView(
              children: [
                ExpenseRow(),
                ExpenseRow(),
                ExpenseRow(),
                ExpenseRow()
              ],
            ),
          ),
        ),
      ),
    ),
  );
}
