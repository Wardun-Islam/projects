class Question {
  String _question;
  bool _answer;

  Question(this._question, this._answer);

  bool get answer => _answer;

  set answer(bool value) {
    _answer = value;
  }

  String get question => _question;

  set question(String value) {
    _question = value;
  }

  bool checkAnswer(bool yourAnswer) {
    return yourAnswer == answer;
  }
}
