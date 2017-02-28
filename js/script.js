"use strict";

var QuestionBank = (function () {
    
    var questions = [['В компьютерные игры играют люди любого возраста, пола и социального статуса', '6+'], ['Entertainment Software Rating Board (ESRB) — негосударственная организация, которая занимается определением и присвоением рейтингов для компьютерных игр','18+']];
    
    return {
		getQuestionsAndRatings: function () {
            return questions;
        },
        
        getQuestion: function (i = 0) {
            return questions[i][0];
        },
		
		getQuestionAndRating: function (i = 0) {
            return questions[i];
        },
		
		getRating: function (i = 0) {
            return questions[i][1];
        },
		
		getQuestionsLength: function () {
			return questions.length;
		}
	}
})();

var testing = (function () {
    
    var qnum = 0;
	var maxRating = '0+';
	var ongoing = false;
    
    return {		
		getNextQuestion: function () {
			if (qnum < QuestionBank.getQuestionsLength()) {
				return (QuestionBank.getQuestion(qnum++));
			} else {
				return '';
			}            
        },
		
		nextQuestion: function () {
			if (ongoing) {
				var nextQ = this.getNextQuestion();
				if (nextQ == '') {
					testing.endTesting();            	
				} else {
					testingFrame.setQuestionInFrame(nextQ);
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
			maxRating = '0+';
		}
    }
})();

var testingFrame = (function () {
    
    return {
        setQuestionInFrame: function (qtext) {
			document.getElementById('curQuestText').innerHTML = qtext;         
        },
		
		setTheEnd: function () {
			var curText = document.getElementById('curQuestText').innerHTML; 
			if (curText !== 'Тестирование завершено') {
				document.getElementById('curQuestText').innerHTML = 'Тестирование завершено';
			} 			
        },
		
		setRaiting: function (rating) {
			document.getElementById('result').innerHTML = rating;   
		},
		
		setBegin: function () {
			document.getElementById('testBegin').style.display = 'none';
			testing.nextQuestion();
		}
    }
})();

var MyListener = (function () {
			
  return {
	  
	  beginListening: function() {
      
          $(document).mousedown(function(event) {
            
			  var target = $(event.target); 
			  if ((target.prop('tagName') == 'INPUT') && ($(target).attr("name") == 'answButton')) {
				  testing.checkAnsw($(target).attr("value"));
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
})