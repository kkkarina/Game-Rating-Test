QUnit.test('testing.getNextQuestion', function(assert) {
	assert.deepEqual(testing.getNextQuestion(), 'Содержит ли игра сцены или информацию порнографического характера (а также сцены сексуального насилия)?', 'Количество пройденных вопросов qnum = 0');
    for (var i = 1; i < QuestionBank.getQuestionsLength(); i++) {
        testing.getNextQuestion();
    }
    assert.deepEqual(testing.getNextQuestion(), undefined, 'Количество пройденных вопросов qnum больше количества вопросов в тесте');
})

QUnit.test('testing.getNQAnswers', function(assert) {
	testing.beginTesting();
	testing.getNextQuestion();
	assert.deepEqual(testing.getNQAnswers(), [['Нет', '0+'], ['Да, игра содержит эпизодические ненатуралистические изображение или описание половых отношений между мужчиной и женщиной, за исключением изображения или описания действий сексуального характера','12+'], ['Да, игра содержит информацию о сексе и (или) натуралистические сцены половых отношений, но без подробного изображения и описания действий сексуального характера','16+'], ['Да, игра содержит сцены или информацию порнографического характера (с подробным описанием) или сцены сексуального насилия','18+']], 'Количество пройденных вопросов current = 0');
    for (var i = 1; i < 11; i++) {
        testing.getNextQuestion();
    }
    assert.deepEqual(testing.getNQAnswers(), [['Нет', '0+'], ['Да, кратковременные и ненатуралистические изображение или описание данных явлений (за исключением тяжелых заболеваний) и (или) их последствий (без демонстрации сцен, которые могут вызывать у детей страх, ужас или панику)','12+'], ['Да, но без натуралистического показа их последствий','16+'], ['Да, игра содержит сцены тяжелых заболеваний, кровопролития, детальные сцены аварий, катастроф, смерти','18+']], 'Количество пройденных вопросов current равно количетву вопросов, а количество пройденных вопросов qnum больше количества вопросов в тесте');
})

QUnit.test('testing.nextQuestion', function(assert) {
	testing.beginTesting();
	testing.nextQuestion();
	assert.deepEqual(document.getElementById('curQuestText').innerHTML, 'Содержит ли игра сцены или информацию порнографического характера (а также сцены сексуального насилия)?', 'Получение первого вопроса');
	assert.deepEqual(document.getElementById('answ').firstElementChild.innerHTML, 'Нет', 'Получение ответов на первый вопрос');
	testing.nextQuestion();
	assert.deepEqual(document.getElementById('curQuestText').innerHTML, 'Содержит ли игра бранные выражения?', 'Получение следующего вопроса');
	assert.deepEqual(document.getElementById('answ').firstElementChild.innerHTML, 'Нет', 'Получение ответов на следующий вопрос');
    for (var i = 2; i < 10; i++) {
        testing.getNextQuestion();
    }
	testing.nextQuestion();
    assert.deepEqual(document.getElementById('curQuestText').innerHTML, 'Тестирование завершено', 'Окончание тестирования, т.к. вопросов больше нет');
})

QUnit.test('testing.checkAnsw', function(assert) {
	testing.beginTesting();
	testing.checkAnsw('0+');
	assert.deepEqual(document.getElementById('result').innerHTML, '0+', 'Рейтинг не меняется');
	testing.checkAnsw('12+');
	assert.deepEqual(document.getElementById('result').innerHTML, '12+', 'Рейтинг возрастает');
	testing.checkAnsw('6+');
	assert.deepEqual(document.getElementById('result').innerHTML, '12+', 'Рейтинг меньше текущего');
	testing.checkAnsw('18+');
	assert.deepEqual(document.getElementById('result').innerHTML, '18+', 'Рейтинг 18+, тестирование завершается');
	assert.deepEqual(document.getElementById('curQuestText').innerHTML, 'Тестирование завершено', 'Окончание тестирования, т.к. рейтинг максимальный');
})

QUnit.test('testing.isRating', function(assert) {
	assert.deepEqual(testing.isRating(), false, 'Параметы не передан');
	assert.deepEqual(testing.isRating('0'), false, 'Параметр - один символ-цифра');
	assert.deepEqual(testing.isRating('d'), false, 'Параметр - один символ-буква');
	assert.deepEqual(testing.isRating(0), false, 'Параметр - цифра/число');
	assert.deepEqual(testing.isRating('12'), false, 'Параметр - две цифры');
	assert.deepEqual(testing.isRating('q2'), false, 'Параметр - буквацифра');
	assert.deepEqual(testing.isRating('2q'), false, 'Параметр - цифрабуква');
	assert.deepEqual(testing.isRating('q2+'), false, 'Параметр - буквацифра+');
	assert.deepEqual(testing.isRating('2q+'), false, 'Параметры - цифрабуква+');
	assert.deepEqual(testing.isRating('12-'), false, 'Параметр - цифрацифра-');
	assert.deepEqual(testing.isRating('1s-'), false, 'Параметр - цифрабуква-');
	assert.deepEqual(testing.isRating('0+'), true, '0+');
	assert.deepEqual(testing.isRating('18+'), true, '18+');
})

QUnit.test('testing.getMaxRating', function(assert) {
	assert.deepEqual(testing.getMaxRating(), undefined, 'Параметры не переданы');
	assert.deepEqual(testing.getMaxRating('0+'), undefined, 'Второй параметр не передан');
	assert.deepEqual(testing.getMaxRating(undefined, '0+'), undefined, 'Первый параметр не определен');
	assert.deepEqual(testing.getMaxRating('sf', '0+'), undefined, 'Первый параметр не рейтинг');
	assert.deepEqual(testing.getMaxRating('16+', 'ss'), undefined, 'Второй параметр не рейтинг');
	assert.deepEqual(testing.getMaxRating(12,'7sj+'), undefined, 'Оба параметра не рейтинги');
	assert.deepEqual(testing.getMaxRating('12+','12+'), '12+', 'Параметры равны');
	assert.deepEqual(testing.getMaxRating('6+','12+'), '12+', 'Второй параметр больше');
	assert.deepEqual(testing.getMaxRating('18+','12+'), '18+', 'Первый параметр больше');
})

QUnit.test('testing.endTesting', function(assert) {
	testing.beginTesting();
	testing.endTesting();
	assert.deepEqual(document.getElementById('curQuestText').innerHTML, 'Тестирование завершено', 'Окончание тестирования');
})