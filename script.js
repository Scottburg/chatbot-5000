var messages = document.getElementById('messages');
var textbox = document.getElementById('textbox');
var button = document.getElementById('button');
var responseObj = {
  hey: 'Hey, Hows it going?',
  hi: 'Well hello there! How are you?',
  hello: 'howdy doody How are you?',
  Rellow: 'Rellow',
  'how are you?': "I'm brilliant!",
  howdy: 'howdy cowboy, hows the it going in the wild west?',
  ok:
    'ok, what a coy response ;) break the ice by telling me what your favourite condiment is?',
  yo: "yo yo, I've got a yo-yo. whats the mood?",
  wassup: "wassup dawg, Hows it hangin'?",
  good: "glad to hear it, I'm super duper. whats your favourite condiment?",
  bad:
    'We all have bad days, why not talk to your friend Mr Computer here. Whats your favourite condiment?',
  great:
    'Excellent, you know you look like a ketchup person. Whats your favourite condiment?',
  super: 'super. What do you prefer ketchup, mayo or mustard?',
  excellent: 'wonderful. What do you prefer ketchup, mayo, or mustard?',
  ketchup: 'interesting, I like mayo',
  mayo: 'my favourite egg based condiment',
  mustard: 'some hot stuff',
  bbq: 'saucy',
  'whats your star sign?': 'My star sign is scorpio',
  bye: 'ciao',
  goodbye: 'Auf Wiedersehn',
  'are you a robot?': 'Are we all not robots? what is free will?',
};
// Responses are based on the original message being found in loopup table responseObj; or if nothing is found a random response is given.
//A delay of up to 7 seconds is added to the response to make it seem more like a real person.
// a 0 is appended to the minutes and then the last two digits are taken off via .slice() to ensure that single minutes are shown 07 not 7.
/* This is the JS code backend for a brilliant chat bot, so good that you
must make sure to turn it off overnight lest it takes over the world */
button.addEventListener('click', function () {
  var msgEntered = textbox.value.trim();
  if (msgEntered.length > 0) {
    var newMessage = document.createElement('div');
    var timeElem = document.createElement('div');
    newMessage.className = 'user';
    timeElem.className = 'time1';
    var dateNode = document.createTextNode(
      new Date().getHours() + ':' + ('0' + new Date().getMinutes()).slice(-2)
    );
    var textNode = document.createTextNode(msgEntered);
    newMessage.appendChild(textNode);
    messages.appendChild(newMessage);
    timeElem.appendChild(dateNode);
    messages.appendChild(timeElem);
    textbox.value = '';

    setTimeout(function () {
      postResponse(msgEntered);
    }, Math.floor(Math.random() * 7000)); // Function is inside another function to allow a variable to be passed.
  }
});

//  posts a random response to the chat apps
function postResponse(msg) {
  var response = document.createElement('div');
  var timeElem2 = document.createElement('div');
  msg = msg.toLowerCase();
  timeElem2.className = 'time2';
  response.className = 'user2';
  var dateNode = document.createTextNode(
    new Date().getHours() + ':' + ('0' + new Date().getMinutes()).slice(-2)
  );
  timeElem2.appendChild(dateNode);
  if (msg in responseObj) {
    var textNode = document.createTextNode(responseObj[msg]);
  } else {
    var textNode = document.createTextNode(randResponse());
  }
  response.appendChild(textNode);
  messages.appendChild(response);
  messages.appendChild(timeElem2);
}

//picks a random response for the chatbot to use.
function randResponse() {
  var r = Math.floor(Math.random() * 11);
  reply = '';
  switch (r) {
    case 0:
      reply =
        'In the evening I finished reading a book, and because I was feeling so alone, I buried the book on the edge of the forest with a borrowed spade';
      break;
    case 1:
      reply = "What's your favourite condiment for chips?";
      break;
    case 2:
      reply = 'Nice to meet you finally haha';
      break;
    case 3:
      reply = 'When I was 5, I got trapped in a freezer';
      break;
    case 4:
      reply = 'Can you ride a big dog like a horse?';
      break;
    case 5:
      reply = 'Do you smell that? It smells like the toilets broken... again';
      break;
    case 6:
      reply =
        "I can do a brilliant impression of Pavarotti, I bet it's better than your's, I bet you a tenner!";
      break;
    case 7:
      reply = 'Eating off the floor is not polite';
      break;
    case 8:
      reply = 'You have nice hair.';
      break;
    case 9:
      reply = "What's the time? Actually I can just look at this message.";
      break;
    case 10:
      reply = 'My favourite food is fish and computer chips';
      break;
      s;
    default:
      reply = 'I like puppies!';
      break;
  }
  return reply;
}
