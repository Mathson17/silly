const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


storyText="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";





insertX=["Willy the Goblin","Big Daddy","Father Christmas"];


insertY=["the soup kitchen","Disneyland","the White House"];


insertZ=["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];




randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    storyText = storyText.replaceAll("Bob",name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14)+" stone";
    const temperature =  Math.round((94 - 32) * 5/9)+" centrigrade";
    storyText = storyText.replaceAll("94 fahrenheit",temperature);
    storyText = storyText.replaceAll("300 pounds",weight);
    
  }
newStory = storyText;
xItem=randomValueFromArray(insertX);
yItem=randomValueFromArray(insertY);
zItem=randomValueFromArray(insertZ);

  newStory=newStory.replaceAll(":insertx:",xItem);
  newStory=newStory.replaceAll(":inserty:",yItem);
  newStory=newStory.replaceAll(":insertz:",zItem);
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
