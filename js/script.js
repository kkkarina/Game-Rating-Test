"use strict";

var QuestionBank = (function () {
    
    var questions = ['Содержит ли игра сцены или информацию порнографического характера?', 'Entertainment Software Rating Board (ESRB) — негосударственная организация, которая занимается определением и присвоением рейтингов для компьютерных игр', 'кря ёпть'];
    
    var answers = {
      0 : [['Нет', '0+'], ['Да, но без подробного изображения и описания действий сексуального характера','16+'], ['Да, игра содержит сцены или информацию порнографического характера','18+']],
      1 : [['Ответ 11', '6+'], ['Ответ 12','18+']],
      2 : [['Ответ 21', '6+'], ['Ответ 22','18+']]
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
            var newInp = document.createElement('input');
            newInp.type = "button";
            newInp.name = 'testBegin';
            newInp.value = 'Начать заново';
            document.getElementById('curQuest').appendChild(newInp);
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