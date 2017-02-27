"use strict";

var QuestionBank = (function () {
    
    var questions = ['В компьютерные игры играют люди любого возраста, пола и социального статуса', 'Entertainment Software Rating Board (ESRB) — негосударственная организация, которая занимается определением и присвоением рейтингов для компьютерных игр'];
    
    return {
		getQuestions: function () {
            return this.questions;
        },
        
        getQuestion: function (i = 0) {
            return this.questions[i];
        },
        
        qq: function () {
            console.log(this.questions);
        }
	}
})();

var testingFrame = (function () {
    
    var qnum = 0;
    
    return {
        setQuestionInFrame: function () {
            var qtext = QuestionBank.getQuestion[qnum];
            qnum++;
            document.getElementById('curQuest').innerHTML = qtext;
        }
    }
})();

var MyListener = (function () {
			
  return {
	  
	  beginListening: function() {
      
          $(document).mousedown(function(event) {
            
            
             
        })
    },
      
      initialize: function () {

    }
  }
    
})();

$(document).ready(function() {
    //testingFrame.setQuestionInFrame();
    //console.log(QuestionBank.getQuestions());
    QuestionBank.
})