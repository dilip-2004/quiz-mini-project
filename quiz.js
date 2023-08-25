
let quiz={
  totq:[
      {
          q:'Javascript is an language?',
          option:{
              a:'a)Object-Oriented',
              b:'b)Object-Based',
              c:'c)Assembly-language',
              d:'d)High-level'
          }
      },
      {
          q:' Which one of the following also known as Conditional Expression?',
          option:{
              a:'a)Alternative to if-else',
              b:'b)Switch statement',
              c:'c)If-then-else statement',
              d:'d)immediate if'
          }
      },
      {
          q:'In JavaScript, what is a block of statement?',
          option:{
              a:'a)Conditional block',
              b:'b)block that combines a number of statements into a single compound statement',
              c:'c)both conditional block and a single statement',
              d:'d)block that contains a single statement'
          }
      },
      {
          q:'When interpreter encounters an empty statements, what it will do?',
          option:{
              a:'a)Shows a warning',
              b:'b)Prompts to complete the statement',
              c:'c)Throws an error',
              d:'d)Ignores the statements'
          }
      },
      {
          q:'The "function" and " var" are known as?',
          option:{
              a:'a)Keywords',
              b:'b)Data types',
              c:'c)Declaration statements',
              d:'d)Prototypes'
          }
      },
      {
          q:'Which of the following variables takes precedence over the others if the names are the same?',
          option:{
              a:'a)Global variable',
              b:'b)The local element',
              c:'c)The two of the above',
              d:'d)None of the above'
          }
      },
      {
          q:'select your gender?',
          option:{
              a:'a)male',
              b:'b)female',
              c:'c)others',
              d:'d)none of these'
          }
      },
      {
          q:'Which one of the following is the correct way for calling the JavaScript code?',
          option:{
              a:'a)Preprocessor',
              b:'b)riggering Event',
              c:'c)RMI',
              d:'d)Function/Method'
          }
      },
      {
          q:'Which of the following type of a variable is volatile?',
          option:{
              a:'a)Mutable variable',
              b:'b)Dynamic variable',
              c:'c)Volatile variable',
              d:'d)Immutable variable'
          }
      },
      {
          q:'Which of the following option is used as hexadecimal literal beginning?',
          option:{
              a:'a)00',
              b:'b)0x',
              c:'c)0x',
              d:'d)Both 0x and 0X'
          }
      },
      {
          q:'In the JavaScript, which one of the following is not considered as an error?',
          option:{
              a:'a)Syntax error',
              b:'b)Missing of semicolons',
              c:'c)Division by zero',
              d:'d)Missing of Bracket'
          }
      },
      {
          q:'Which of the following number object function returns the value of the number?',
          option:{
              a:'a)toString()',
              b:'b)valueOf()',
              c:'c)toLocaleString()',
              d:'d)toPrecision()'
          }
      }
  ]
};
let useranswer=['answers',];
let correctanswer=['correctanswer','b)Object-Based','d)immediate if','b)block that combines a number of statements into a single compound statement',
'd)Ignores the statements','c)Declaration statements','b)The local element','a)male','d)Function/Method','a)Mutable variable',
'd)Both 0x and 0X','c)Division by zero','b)valueOf()'];
let totQuestionsCount=quiz.totq.length;
let questions;
let htmlcode='';
let currentquestionnumber;
let usertotalmarks=0;
let cqn={
  no:1
};
document.querySelector('.questions').innerHTML=`Q1) ${quiz.totq[0].q}`;
document.querySelector('.option-a').innerHTML=`${quiz.totq[0].option.a}`;
document.querySelector('.option-b').innerHTML=`${quiz.totq[0].option.b}`;
document.querySelector('.option-c').innerHTML=`${quiz.totq[0].option.c}`;
document.querySelector('.option-d').innerHTML=`${quiz.totq[0].option.d}`;

for(let i=0;i<totQuestionsCount;i++)
{
  htmlcode+=`<li class="${i+1}q" onclick="show(${i});">${i+1}</li>`;
}
document.querySelector('ul').innerHTML=htmlcode;

function show(questionNumber)
{
  cqn.no=questionNumber+1;
  document.querySelector('.questions').innerHTML=`${questionNumber+1}) ${quiz.totq[questionNumber].q}`;
  document.querySelector('.option-a').innerHTML=`${quiz.totq[questionNumber].option.a}`;
  document.querySelector('.option-b').innerHTML=`${quiz.totq[questionNumber].option.b}`;
  document.querySelector('.option-c').innerHTML=`${quiz.totq[questionNumber].option.c}`;
  document.querySelector('.option-d').innerHTML=`${quiz.totq[questionNumber].option.d}`;
  if(questionNumber===0)
  {
      document.querySelector('.pre-button').style.display='none';
  }
  else if(questionNumber===totQuestionsCount-1)
  {
      document.querySelector('.next-button').style.display='none';
  }
  else if(questionNumber>0 && questionNumber<totQuestionsCount)
  {
      document.querySelector('.pre-button').style.display='block';
      document.querySelector('.next-button').style.display='block';
  }
}

function previous()
{
  showprevious(cqn.no-1);
}

function showprevious(qnumber)
{
  document.querySelector('.questions').innerHTML=`${qnumber}) ${quiz.totq[qnumber-1].q}`;
  document.querySelector('.option-a').innerHTML=`${quiz.totq[qnumber-1].option.a}`;
  document.querySelector('.option-b').innerHTML=`${quiz.totq[qnumber-1].option.b}`;
  document.querySelector('.option-c').innerHTML=`${quiz.totq[qnumber-1].option.c}`;
  document.querySelector('.option-d').innerHTML=`${quiz.totq[qnumber-1].option.d}`;
  if(qnumber===0)
  {
      document.querySelector('.pre-button').style.display='none';
  }
  else if(qnumber===totQuestionsCount-1)
  {
      document.querySelector('.next-button').style.display='none';
  }
  else if(qnumber>0 && qnumber<totQuestionsCount-1)
  {
      document.querySelector('.pre-button').style.display='block';
      document.querySelector('.next-button').style.display='block';
  }
  cqn.no=cqn.no-1;
}

function next()
{
  shownext(cqn.no+1);
}

function shownext(qnumber)
{
  document.querySelector('.questions').innerHTML=`${qnumber}) ${quiz.totq[qnumber-1].q}`;
  document.querySelector('.option-a').innerHTML=`${quiz.totq[qnumber-1].option.a}`;
  document.querySelector('.option-b').innerHTML=`${quiz.totq[qnumber-1].option.b}`;
  document.querySelector('.option-c').innerHTML=`${quiz.totq[qnumber-1].option.c}`;
  document.querySelector('.option-d').innerHTML=`${quiz.totq[qnumber-1].option.d}`;
  if(qnumber===1)
  {
      document.querySelector('.pre-button').style.display='none';
  }
  else if(qnumber===totQuestionsCount+1)
  {
      document.querySelector('.next-button').style.display='none';
  }
  else if(qnumber>1 && qnumber<totQuestionsCount+1)
  {
      document.querySelector('.pre-button').style.display='block';
      document.querySelector('.next-button').style.display='block';
  }
  cqn.no=cqn.no+1;
}

function addanswer(classname)
{
  let uanswer=document.querySelector(`.${classname}`).innerHTML;
  if(classname==='option-a')
  {
      document.querySelector(`.${classname}`).classList.add('change-option-color');
      document.querySelector(`.option-b`).classList.remove('change-option-color');
      document.querySelector(`.option-c`).classList.remove('change-option-color');
      document.querySelector(`.option-d`).classList.remove('change-option-color');
  }
  else if(classname==='option-b')
  {
      document.querySelector(`.option-a`).classList.remove('change-option-color');
      document.querySelector(`.${classname}`).classList.add('change-option-color');
      document.querySelector(`.option-c`).classList.remove('change-option-color');
      document.querySelector(`.option-d`).classList.remove('change-option-color');
  }
  else if(classname==='option-c')
  {
      document.querySelector(`.option-a`).classList.remove('change-option-color');
      document.querySelector(`.option-b`).classList.remove('change-option-color');
      document.querySelector(`.${classname}`).classList.add('change-option-color');
      document.querySelector(`.option-d`).classList.remove('change-option-color');
  }
  else if(classname==='option-d')
  {
      document.querySelector(`.option-a`).classList.remove('change-option-color');
      document.querySelector(`.option-b`).classList.remove('change-option-color');
      document.querySelector(`.option-c`).classList.remove('change-option-color');
      document.querySelector(`.${classname}`).classList.add('change-option-color');
  }
  useranswer[cqn.no]=uanswer;
}

function showanswer()
{
  for(let i=1;i<totQuestionsCount;i++)
  {
      if(useranswer[i]===correctanswer[i])
      {
          usertotalmarks+=1;
      }
  }
  alert(`your marks ${usertotalmarks+1}`);
  usertotalmarks=0;
}