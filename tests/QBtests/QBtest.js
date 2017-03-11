QUnit.test('QuestionBank.getQuestion', function(assert) {
	assert.deepEqual(QuestionBank.getQuestion('1d'), undefined, 'Неверный индекс');
    assert.deepEqual(QuestionBank.getQuestion(-1), undefined, 'Отрицательный индекс');
    assert.deepEqual(QuestionBank.getQuestion(0), 'Содержит ли игра сцены или информацию порнографического характера (а также сцены сексуального насилия)?', 'Вывод вопроса, при i = 0');
    assert.deepEqual(QuestionBank.getQuestion(), 'Содержит ли игра сцены или информацию порнографического характера (а также сцены сексуального насилия)?', 'Нет аргумента - замена на 0');
    assert.deepEqual(QuestionBank.getQuestion(5), 'Содержит ли игра информацию, отрицающую семейные ценности (формирующую неуважение к родителям и (или) другим членам семьи)?', 'Вывод вопроса, при i = 5');
    assert.deepEqual(QuestionBank.getQuestion(10), undefined, 'Выход за пределы значений массива');
})

QUnit.test('QuestionBank.getAnswerAndRating', function(assert) {
    assert.deepEqual(QuestionBank.getAnswerAndRating('1d'), null, 'Неверный индекс');
	assert.deepEqual(QuestionBank.getAnswerAndRating(-1), null, 'Отрицательный индекс');
    assert.deepEqual(QuestionBank.getAnswerAndRating(0), [['Нет', '0+'], ['Да, игра содержит эпизодические ненатуралистические изображение или описание половых отношений между мужчиной и женщиной, за исключением изображения или описания действий сексуального характера','12+'], ['Да, игра содержит информацию о сексе и (или) натуралистические сцены половых отношений, но без подробного изображения и описания действий сексуального характера','16+'], ['Да, игра содержит сцены или информацию порнографического характера (с подробным описанием) или сцены сексуального насилия','18+']], 'ok');
    assert.deepEqual(QuestionBank.getAnswerAndRating(), [['Нет', '0+'], ['Да, игра содержит эпизодические ненатуралистические изображение или описание половых отношений между мужчиной и женщиной, за исключением изображения или описания действий сексуального характера','12+'], ['Да, игра содержит информацию о сексе и (или) натуралистические сцены половых отношений, но без подробного изображения и описания действий сексуального характера','16+'], ['Да, игра содержит сцены или информацию порнографического характера (с подробным описанием) или сцены сексуального насилия','18+']], 'Нет аргумента - замена на 0');
    assert.deepEqual(QuestionBank.getAnswerAndRating(5), [['Нет', '0+'], ['Да','18+']], 'ok');
    assert.deepEqual(QuestionBank.getAnswerAndRating(10), null, 'Выход за пределы значений массива');
})

QUnit.test('QuestionBank.getOnlyAnswersForQ', function(assert) {
    assert.deepEqual(QuestionBank.getOnlyAnswersForQ('1id'), [], 'Неверный индекс'); 
	assert.deepEqual(QuestionBank.getOnlyAnswersForQ(-1), [], 'Отрицательный индекс');
    assert.deepEqual(QuestionBank.getOnlyAnswersForQ(0), ['Нет', 'Да, игра содержит эпизодические ненатуралистические изображение или описание половых отношений между мужчиной и женщиной, за исключением изображения или описания действий сексуального характера', 'Да, игра содержит информацию о сексе и (или) натуралистические сцены половых отношений, но без подробного изображения и описания действий сексуального характера', 'Да, игра содержит сцены или информацию порнографического характера (с подробным описанием) или сцены сексуального насилия'], 'ok');
    assert.deepEqual(QuestionBank.getOnlyAnswersForQ(), ['Нет', 'Да, игра содержит эпизодические ненатуралистические изображение или описание половых отношений между мужчиной и женщиной, за исключением изображения или описания действий сексуального характера', 'Да, игра содержит информацию о сексе и (или) натуралистические сцены половых отношений, но без подробного изображения и описания действий сексуального характера', 'Да, игра содержит сцены или информацию порнографического характера (с подробным описанием) или сцены сексуального насилия'], 'Нет аргумента - замена на 0');
    assert.deepEqual(QuestionBank.getOnlyAnswersForQ(5), ['Нет', 'Да'], 'ok');
    assert.deepEqual(QuestionBank.getOnlyAnswersForQ(10), [], 'Выход за пределы значений массива');
})

QUnit.test('QuestionBank.getRatingOfAnswer', function(assert) {
    assert.deepEqual(QuestionBank.getRatingOfAnswer(), '0+', 'Параметры не переданы'); 
	assert.deepEqual(QuestionBank.getRatingOfAnswer(1), '0+', 'Передан один параметр в верном диапазоне значений');
    assert.deepEqual(QuestionBank.getRatingOfAnswer(-1), undefined, 'Передан один параметр в неверном диапазоне значений');
    assert.deepEqual(QuestionBank.getRatingOfAnswer('hd21'), undefined, 'Передан один параметр, который не число');
    assert.deepEqual(QuestionBank.getRatingOfAnswer('sj8',1), undefined, 'Первый параметр не число');
    assert.deepEqual(QuestionBank.getRatingOfAnswer(1,'sj8'), undefined, 'Второй параметр не число');
    assert.deepEqual(QuestionBank.getRatingOfAnswer(-1, 1), undefined, 'Первый параметр принимает значение вне диапазона');
    assert.deepEqual(QuestionBank.getRatingOfAnswer(10, 1), undefined, 'Первый параметр принимает значение вне диапазона');
    assert.deepEqual(QuestionBank.getRatingOfAnswer(1, -1), undefined, 'Второй параметр принимает значение вне диапазона');
    assert.deepEqual(QuestionBank.getRatingOfAnswer(1, 10), undefined, 'Второй параметр принимает значение вне диапазона');
    assert.deepEqual(QuestionBank.getRatingOfAnswer(5, 1), '18+', 'Оба параметра в нужном диапазоне');
})