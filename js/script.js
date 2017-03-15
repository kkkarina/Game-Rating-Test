/*
* @autor kkkarina, 2017 (https://github.com/kkkarina/)
* @title Game-Rating-Test
*/

"use strict";
/*
* @object QuestionBank - объект, представляющий собой банк вопросов и ответов для разрабатываемой программы. 
*/
var QuestionBank = (function () {
    
    /* * @private {Array} Массив вопросов 
    */
    var questions = ['Содержит ли игра сцены или информацию порнографического характера (а также сцены сексуального насилия)?', 'Содержит ли игра бранные выражения?', 'Содержит ли игра информацию о наркотических (психотропных) веществах?', 'Содержится ли в игре пропаганда алкоголя /табачных изделий/азартных игр/проституции/бродяжничества/попрошайничества?', 'Содержит ли игра информацию о противоправном поведении или преступлениях?', 'Содержит ли игра информацию, отрицающую семейные ценности (формирующую неуважение к родителям и (или) другим членам семьи)?', 'Содержит ли игра демонстрацию культуры общества ЛГБТ?', 'Содержит ли игра информацию, побуждающую детей к совершению действий, представляющих угрозу жизни или здоровью ребенка (причинение вреда своему здоровью, самоубийство)?', 'Содержит ли игра сцены жестокости или насилия (НЕ сексуального)?', 'Содержит ли игра сцены несчастного случая, аварии, катастрофы, заболевания, смерти?'];
    
    /** @private {Array} Массив ответов для каждого вопроса с указанием рейтинга для каждого ответа
    */
    var answers = {
      0 : [['Нет', '0+'], ['Да, игра содержит эпизодические ненатуралистические изображение или описание половых отношений между мужчиной и женщиной, за исключением изображения или описания действий сексуального характера','12+'], ['Да, игра содержит информацию о сексе и (или) натуралистические сцены половых отношений, но без подробного изображения и описания действий сексуального характера','16+'], ['Да, игра содержит сцены или информацию порнографического характера (с подробным описанием) или сцены сексуального насилия','18+']],
      1 : [['Нет', '0+'], ['Да, но не относящиеся к нецензурным','16+'], ['Да, игра содержит нецензурную брань','18+']],
      2 : [['Нет', '0+'], ['Да, игра содержит эпизодическое упоминание (без демонстрации) наркотических (психотропных) веществ, но выражается отрицательное, осуждающее отношение к ним и содержится указание на опасность потребления указанной продукции','12+'], ['Да, но они не демонстрируются на экране','16+'], ['Да, в игре содержится данная информация, и данные вещества демонстрируются на экране','18+']],
        3 : [['Нет', '0+'], ['Да, игра содержит эпизодическое упоминание (без демонстрации) одного или нескольких из перечисленных явлений, но не обосновывается и не оправдывается допустимость данных действий и выражается отрицательное, осуждающее отношение к ним и содержится указание на опасность этих явлений','12+'], ['Да, но они не демонстрируются на экране','16+'], ['Да, в игре содержится данная информация, и данные явления демонстрируются на экране','18+']],
        4 : [['Нет', '0+'], ['Да, не обосновывается и не оправдывается их допустимость и выражается отрицательное, осуждающее отношение к лицам, их совершающим','12+'], ['Да, в игре содержится информация, оправдывающая противоправное поведение или преступления','18+']],
        5 : [['Нет', '0+'], ['Да','18+']],
        6 : [['Нет', '0+'], ['Да','18+']],
        7 : [['Нет', '0+'], ['Да','18+']],
        8 : [['Нет', '0+'], ['Да, эпизодические изображение или описание жестокости или насилия без натуралистического показа процесса лишения жизни или нанесения увечий при условии, что выражается сострадание к жертве и отрицательное, осуждающее отношение к жестокости, насилию','12+'], ['Да, но без натуралистического показа процесса лишения жизни или нанесения увечий','16+'], ['Да, с натуралистическим показом процесса лишения жизни или нанесения увечий','18+']],
        9 : [['Нет', '0+'], ['Да, кратковременные и ненатуралистические изображение или описание данных явлений (за исключением тяжелых заболеваний) и (или) их последствий (без демонстрации сцен, которые могут вызывать у детей страх, ужас или панику)','12+'], ['Да, но без натуралистического показа их последствий','16+'], ['Да, игра содержит сцены тяжелых заболеваний, кровопролития, детальные сцены аварий, катастроф, смерти','18+']],
    };
    
    return {
        /** @public Возвращает все ответы на все вопросы с их рейтингами
        * @return {Array} answers - массив ответов и рейтингов
        */
		getAnswersAndRatings: function () {
            return answers;
        },
        
        /** @public Возвращает конкретный вопрос
        * @param {number} i - номер вопроса
        * @return {Array}|| undefined Вопрос или "нет значения"
        */
        getQuestion: function (i) {
            if (i === undefined) {
                i = 0;
            }
            if (!isNaN(i) && (i < questions.length) && (i >= 0)) {
                return questions[i];
            } else {
                return undefined;
            }                        
        },
		
        /** @public Возвращает ответы на конкретный вопрос с их рейтингами 
        * @param {number} i - номер вопроса
        * @return {object} answers[i] - массив ответов и рейтингов на конкретный вопрос
        */
		getAnswerAndRating: function (i) {
            if (i === undefined) {
                i = 0;
            }
            if (!isNaN(i) && (i < this.getAnswersLength()) && (i >= 0)) {
                return answers[i];
            } else {
                return null;
            }
        },
        
        /** @public Возвращает ТОЛЬКО ответы на конкретный вопрос
        * @param {number} a - номер вопроса
        * @return {Array} curansw - массив ответов на конкретный вопрос
        */
        getOnlyAnswersForQ: function (a) {
            if (a === undefined) {
                a = 0;
            }
            if (!isNaN(a) && (a < this.getAnswersLength()) && (a >= 0)) {
                var curansw = [];
                var allansw = answers[a];
                for (var count = 0; count < allansw.length; count++) {
                    curansw.push(allansw[count][0]);
                }
                return curansw;
            } else {
                return [];
            }            
        },
		
        /** @public Возвращает ТОЛЬКО рейтинг определенного ответа на конкретный вопрос
        * @param {number} q - номер вопроса
        * @param {number} i - номер ответа
        * @return {string} answers[q][i][1] - рейтинг ответа
        */
		getRatingOfAnswer: function (q, i) {
            if (i === undefined) {
                i = 0;
            }
            if (q === undefined) {
                q = 0;
            }
            if (!isNaN(q) && !isNaN(i) && (q < this.getAnswersLength()) && (q >= 0) && (i >= 0) && (i < this.getOnlyAnswersForQ(q).length)) {
                return answers[q][i][1];
            } else {
                return undefined;
            }            
        },
		
        /** @public Возвращает количество вопросов
        * @return {number} количество вопросов
        */
		getQuestionsLength: function () {
			return questions.length;
		},
		
        /** @public Возвращает количество ответов
        * @return {number} count - количество ответов
        */
		getAnswersLength: function () {
            var count = 0;
            for (var smt in answers) {
                count++;
            }
			return count;
		}
	}
})();

/*
* @object testing - объект, представляющий собой контроллер, следящий за процессом тестирования. 
*/
var testing = (function () {
    
    /** @private {number} Количество пройденных вопросов
    */
    var qnum = 0;
	
    /** @private {number} Номер текущего вопроса
    */
    var current = 0;
	
    /** @private {string} Максимальный рейтинг игры на данный момент
    */
	var maxRating = '0+';
	
    /** @private {boolean} Показатель, запущен или нет процесс тестирования
    */
	var ongoing = false;
	    
    return {	
		
		/** @public {boolean} Определяет, является ли переданная строка рейтингом
		*/
		isRating: function (str) {
			if ((str != undefined) && (str.length != 0) && (str.length <= 3) && (!isNaN(str[0]))) {
				if (isNaN(str[1])) {
					if ((str[1] == '+') && str.length == 2) {
						return true;
					}
				}		
				if (!isNaN(str[1]) && str.length == 3) {
					if (str[2] == '+') {
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}
			} else {
				return false;
			}      
		},
				
        /** @public Возвращает следующий вопрос для теста
        * @return {string} следующий вопрос для теста или "нет значения"
        */
		getNextQuestion: function () {
			if (qnum < QuestionBank.getQuestionsLength()) {
                current = qnum;
				return (QuestionBank.getQuestion(qnum++));
			} else {
				return undefined;
			}            
        },
        
        /** @public Возвращает все ответы и их рейтинг для текущего вопроса в тесте
        * @return {object} Список ответов и их рейтинг для текущего вопроса в тесте или пустой список
        */
        getNQAnswers: function () {
            if (current < QuestionBank.getAnswersLength()) {                
				return (QuestionBank.getAnswerAndRating(current));
			} else {
				return null;
			} 
        },
		
        /** @public Устанавливает в тесте следующий вопрос и ответы к нему
        * @see testingFrame
        */
		nextQuestion: function () {
			if (ongoing) {
				var nextQ = this.getNextQuestion();
				if (nextQ == undefined) {
					testing.endTesting();            	
				} else {
					testingFrame.setQuestionInFrame(nextQ);
                    testingFrame.setAnswersInFrame(this.getNQAnswers());
				}
			}            
        },
		
        /** @public Оценивает текущий ответ пользователя на заданный вопрос и принимает решение, продолжать ли тестирование
        * @param {string} currating - рейтинг ответа пользователя
        */
		checkAnsw: function (currating) {
			if (ongoing) {
				maxRating = this.getMaxRating(maxRating, currating);
				if (maxRating != undefined) {
					testingFrame.setRaiting(maxRating);
					if (maxRating == '18+') {
						this.endTesting();
					} else {
						this.nextQuestion();
					}
				} else {
					this.endTesting();
				}				
			}
		},
		
        /** @public Сравнивает два рейтинга
        * @param {string} f - первый переданный рейтинг
        * @param {string} s - второй переданный рейтинг
        * @return {string} наибольший рейтинг
        */
		getMaxRating: function (f, s) {
			if ((f != undefined) && (s != undefined) && (this.isRating(f)) && (this.isRating(s))) {
					if (parseInt(f.substring(0, f.length-1)) >= parseInt(s.substring(0, s.length-1))) {
					return f;
				} else {
					return s;
				}
			} else {
				return undefined;
			}			
		},
		
        /** @public Завершает процесс тестирования
        */
		endTesting: function () {
			testingFrame.setTheEnd();
			qnum = QuestionBank.getQuestionsLength();
			ongoing = false;
		},
		
		/** @public Начинает процесс тестирования
        */
        beginTesting: function () {
			ongoing = true;
			qnum = 0;
            current = 0;
			maxRating = '0+';
		}
    }
})();

/*
* @object testingFrame - объект, отвечающий за связь процесса тестирования (объекта testing) и интерфейса.
*/
var testingFrame = (function () {
    
    /** @private Получает количество элементов в коллекции
    * @param {object} obj - коллекция
    * @return {number} count - количество элементов в коллекции
    */
    function getObjectLength (obj) {
        var count = 0;
		if (obj != null) {
			for (var smt in obj) {
                count++;
            }
			return count;
		} else {
			return 0;
		}            
    }
    
    return {
        /** @public Вставляет вопрос в окно вопросов
        * @param {string} qtext - вопрос
        */
        setQuestionInFrame: function (qtext) {
			document.getElementById('curQuestText').innerHTML = qtext;         
        },
		
        /** @public Оповещает пользователя о завершении тестирования
        * @this {testingFrame} 
        */
		setTheEnd: function () {
			var curText = document.getElementById('curQuestText').innerHTML; 
            document.getElementById('answ').innerHTML = '';
			if (curText !== 'Тестирование завершено') {
				document.getElementById('curQuestText').innerHTML = 'Тестирование завершено';
			} 	
            this.addBeginButton();
        },
        
        /** @public Показывает кнопку "Начать тестирование заново"
        */
        addBeginButton: function () {
            document.getElementById('testBegin').value = 'Начать тестирование заново';
            document.getElementById('testBegin').style.display = 'block';
        },
		
        /** @public Устанавливает рейтинг в окно рейтинга
        */
		setRaiting: function (rating) {
			document.getElementById('result').innerHTML = rating;   
		},
		
        /** @public Изменяет интерфейс в связи с началом тестирования
        * @see testing
        */
		setBegin: function () {
			document.getElementById('testBegin').style.display = 'none';
			document.getElementById('result').innerHTML = '';
			testing.nextQuestion();
		},
        
        /** @public Вставляет ответы на вопрос в окно ответов 
        */
        setAnswersInFrame: function (answ) {
            document.getElementById('answ').innerHTML = ''; 
            var answlen = getObjectLength(answ);
            for (var i = 0; i < answlen; i++) {
                var newInp = document.createElement('div');
                newInp.innerHTML = answ[i][0];
                newInp.id = answ[i][1];
                switch (answ[i][1]) {
                    case '0+': newInp.classList.add('yellow'); break;
                    case '6+': newInp.classList.add ('blue'); break;
                    case '12+': newInp.classList.add('darkGreen'); break;
                    case '16+': newInp.classList.add('pink'); break;
                    case '18+': newInp.classList.add('red'); break;
                }
                document.getElementById('answ').appendChild(newInp);
            }
        }
    }
})();

/*
* @object MyListener - объект-слушатель действий пользователя и состояния системы.
*/
var MyListener = (function () {
			
  return {
      
	  /** @public Слушатель действий пользователя и состояния системы
      */
	  beginListening: function() {
      
          $(document).mousedown(function(event) {
            
			  var target = $(event.target); 
			  if ((target.prop('tagName') == 'DIV') && ($(target).parent().attr('id') == 'answ')) {
				  testing.checkAnsw($(target).attr("id"));
			  }
			  if ((target.prop('tagName') == 'INPUT') && ($(target).attr("id") == 'testBegin')) {
				  testing.beginTesting();
				  testingFrame.setBegin();				  
			  }
        })
    }
	  
  }
})();

/** Глобальная функция-"слушатель", которая запускается при полной загрузке веб-страницы.
*/
$(document).ready(function() {
	MyListener.beginListening();	
})