import 'dart:core';
import 'Question.dart';

class QuestionBank {
  List<Question> _questionBank;
  int _currentQuestionNumber;

  final _questions = [
    'Manchester United won the 2013-14 English Premier League.',
    "Leonardo da Vinci's Mona Lisa does not have eyebrows.",
    "The S in Harry S. Truman stands for 'Samuel'.",
    "Luigi is taller than Mario?",
    "There is a Donald Trump Board Game, which was made in 1989.",
    "Microphones can be used not only to pick up sound, but also to project sound similar to a speaker.",
    "In association football, or soccer, a corner kick is when the game restarts after someone scores a goal.",
    "'Sonic the Hedgehog 2' originally was going to have a time travel system.",
    "The internet browser Firefox is named after the Red Panda.",
    "Codemasters is the developer of the Gran Turismo series."
  ];

  final _answers = [
    false,
    true,
    false,
    true,
    true,
    true,
    false,
    true,
    true,
    false
  ];

  QuestionBank() {
    this._currentQuestionNumber = 0;
    this._questionBank = new List<Question>();
    for (int i = 0; i < 10; i++) {
      addQuestions(new Question(_questions[i], _answers[i]));
    }
  }

  void addQuestions(Question question) {
    _questionBank.add(question);
  }

  String getQuestion() {
    return _questionBank[_currentQuestionNumber].question;
  }

  int getCurrentQuestionNumber() => _currentQuestionNumber;

  bool checkAnswer(bool yourAnswer) =>
      _questionBank[_currentQuestionNumber].answer == yourAnswer;

  int getTotalQuestionNumber() => _questionBank.length;

  void incrementCurrentQuestionNumber() {
    _currentQuestionNumber++;
  }

  void reset() {
    _currentQuestionNumber = 0;
  }
}
