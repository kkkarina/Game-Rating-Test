"use strict";

var QuestionBank = (function () {
    
    var questions = ['Содержит ли игра сцены или информацию порнографического характера (а также сцены сексуального насилия)?', 'Содержит ли игра бранные выражения?', 'Содержит ли игра информацию о наркотических (психотропных) веществах?', 'Содержится ли в игре пропаганда алкоголя /табачных изделий/азартных игр/проституции/бродяжничества/попрошайничества?', 'Содержит ли игра информацию о противоправном поведении или преступлениях?', 'Содержит ли игра информацию, отрицающую семейные ценности (формирующую неуважение к родителям и (или) другим членам семьи)?', 'Содержит ли игра демонстрацию культуры общества ЛГБТ?', 'Содержит ли игра информацию, побуждающую детей к совершению действий, представляющих угрозу жизни или здоровью ребенка (причинение вреда своему здоровью, самоубийство)?', 'Содержит ли игра сцены жестокости или насилия (НЕ сексуального)?', 'Содержит ли игра сцены несчастного случая, аварии, катастрофы, заболевания, смерти?'];
    
    var answers = {
      0 : [['Нет', '0+'], ['Да, игра содержит эпизодические ненатуралистические изображение или описание половых отношений между мужчиной и женщиной, за исключением изображения или описания действий сексуального характера','12+'], ['Да, игра содержит информацию о сексе и (или) натуралистические сцены половых отношений, но без подробного изображения и описания действий сексуального характера','16+'], ['Да, игра содержит сцены или информацию порнографического характера (с подробным описанием) или сцены сексуального насилия','18+']],
      1 : [['Нет', '0+'], ['Да, но не относящиеся к нецензурным','16+'], ['Да, игра содержит нецензурную брань','18+']],
      2 : [['Нет', '0+'], ['Да, игра содержит эпизодическое упоминание (без демонстрации) наркотических (психотропных) веществ, но выражается отрицательное, осуждающее отношение к ним и содержится указание на опасность потребления указанной продукции','12+'], ['Да, но они не демонстрируются на экране','16+'], ['Да, в игре содержится данная информация, и данные вещества демонстрируются на экране','18+']],
        3 : [['Нет', '0+'], ['ДДа, игра содержит эпизодическое упоминание (без демонстрации) одного или нескольких из перечисленных явлений, но не обосновывается и не оправдывается допустимость данных действий и выражается отрицательное, осуждающее отношение к ним и содержится указание на опасность этих явлений','12+'], ['Да, но они не демонстрируются на экране','16+'], ['Да, в игре содержится данная информация, и данные явления демонстрируются на экране','18+']],
        4 : [['Нет', '0+'], ['Да, не обосновывается и не оправдывается их допустимость и выражается отрицательное, осуждающее отношение к лицам, их совершающим','12+'], ['Да, в игре содержится информация, оправдывающая противоправное поведение или преступления','18+']],
        5 : [['Нет', '0+'], ['Да','18+']],
        6 : [['Нет', '0+'], ['Да','18+']],
        7 : [['Нет', '0+'], ['Да','18+']],
        8 : [['Нет', '0+'], ['Да, эпизодические изображение или описание жестокости или насилия без натуралистического показа процесса лишения жизни или нанесения увечий при условии, что выражается сострадание к жертве и отрицательное, осуждающее отношение к жестокости, насилию','12+'], ['Да, но без натуралистического показа процесса лишения жизни или нанесения увечий','16+'], ['Да, с натуралистическим показом процесса лишения жизни или нанесения увечий','18+']],
        9 : [['Нет', '0+'], ['Да, кратковременные и ненатуралистические изображение или описание данных явлений (за исключением тяжелых заболеваний) и (или) их последствий (без демонстрации сцен, которые могут вызывать у детей страх, ужас или панику)','12+'], ['Да, но без натуралистического показа их последствий','16+'], ['Да, игра содержит сцены тяжелых заболеваний, кровопролития, детальные сцены аварий, катастроф, смерти','18+']],
    };
    
    return {
		getAnswersAndRatings: function () {
            return answers;
        },
        
        getQuestion: function (i = 0) {
            return questions[i];
        },
		
		getAnswerAndRating: function (i = 0) {
            return answers[i];
        },
        
        getOnlyAnswersForQ: function (a = 0) {
            var curansw = [];
            var allansw = answers[a];
            for (var count = 0; count < allansw.length; count++) {
                curansw.push(allansw[count][0]);
            }
            return curansw;
        },
		
		getRatingOfAnswer: function (q = 0, i = 0) {
            return answers[q][i][1];
        },
		
		getQuestionsLength: function () {
			return questions.length;
		},
		
		getAnswersLength: function () {
            var count = 0;
            for (var smt in answers) {
                count++;
            }
			return count;
		}
	}
})();

var testing = (function () {
    
    var qnum = 0;
    var current = 0;
	var maxRating = '0+';
	var ongoing = false;
    
    return {		
		getNextQuestion: function () {
			if (qnum < QuestionBank.getQuestionsLength()) {
                current = qnum;
				return (QuestionBank.getQuestion(qnum++));
			} else {
				return '';
			}            
        },
        
        getNQAnswers: function () {
            if (current < QuestionBank.getAnswersLength()) {                
				return (QuestionBank.getAnswerAndRating(current));
			} else {
				return [];
			} 
        },
		
		nextQuestion: function () {
			if (ongoing) {
				var nextQ = this.getNextQuestion();
				if (nextQ == '') {
					testing.endTesting();            	
				} else {
					testingFrame.setQuestionInFrame(nextQ);
                    testingFrame.setAnswersInFrame(this.getNQAnswers());
				}
			}            
        },
		
		checkAnsw: function (currating) {
			if (ongoing) {
				maxRating = this.getMaxRating(maxRating, currating);
				testingFrame.setRaiting(maxRating);
				if (maxRating == '18+') {
					this.endTesting();
				} else {
					this.nextQuestion();
				}
			}
		},
		
		getMaxRating: function (f, s) {
			if (parseInt(f.substring(0, f.length-1)) >= parseInt(s.substring(0, s.length-1))) {
				return f;
			} else {
				return s;
			}
		},
		
		endTesting: function () {
			testingFrame.setTheEnd();
			qnum = QuestionBank.getQuestionsLength();
			ongoing = false;
		},
		
		beginTesting: function () {
			ongoing = true;
			qnum = 0;
            current = 0;
			maxRating = '0+';
		}
    }
})();

var testingFrame = (function () {
    
    function getObjectLength (obj) {
        var count = 0;
            for (var smt in obj) {
                count++;
            }
			return count;
    }
    
    return {
        setQuestionInFrame: function (qtext) {
			document.getElementById('curQuestText').innerHTML = qtext;         
        },
		
		setTheEnd: function () {
			var curText = document.getElementById('curQuestText').innerHTML; 
            document.getElementById('answ').innerHTML = '';
			if (curText !== 'Тестирование завершено') {
				document.getElementById('curQuestText').innerHTML = 'Тестирование завершено';
			} 	
            this.addBeginButton();
        },
        
        addBeginButton: function () {
            /*var newInp = document.createElement('input');
            newInp.type = "button";
            newInp.name = 'testBegin';
            newInp.id = 'testBegin';
            newInp.value = 'Начать заново';
            document.getElementById('curQuest').appendChild(newInp);*/
            document.getElementById('testBegin').value = 'Начать тестирование заново';
            document.getElementById('testBegin').style.display = 'block';
        },
		
		setRaiting: function (rating) {
			document.getElementById('result').innerHTML = rating;   
		},
		
		setBegin: function () {
			document.getElementById('testBegin').style.display = 'none';
			testing.nextQuestion();
		},
        
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

var MyListener = (function () {
			
  return {
	  
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

$(document).ready(function() {
	MyListener.beginListening();	
    //console.log(QuestionBank.getOnlyAnswersForQ(0));
})