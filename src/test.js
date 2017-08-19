import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'iterator-deprecated/models/test';

F.attach(QUnit);

QUnit.module('iterator-deprecated functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('iterator-deprecated main page shows up', function() {
  F('title').text('iterator-deprecated', 'Title is set');
});
