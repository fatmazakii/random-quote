
var quotes=[
   'Good friends, good books, and a sleepy conscience: this is the ideal life.',
      'Life is what happens to us while we are making other plans.',
      'Laziness \is nothing more than the habit of resting before you get tired. - Jules Renard',
      'There can not be a crisis next week. My schedule \is already full. - Henry Kissinger',
      'My life needs editing. - Mort Sahl',
      'I always wanted to be somebody, but now \I realize \I should have been more specific. - Lily Tomin',
      'If at first you don\'t succeed, find out \if the loser gets anything. - William Lyon Phelps',
      'You\'re only as good as your last haircut. - Fran Lebowitz'
];
 function newQuote(){
    var randomNumber = Math.floor( Math.random()*quotes.length);
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
 }