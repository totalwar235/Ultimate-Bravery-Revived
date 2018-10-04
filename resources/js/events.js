// Button Events: Generate, Summoners Rift, Howling Abyss
window.onload = function(){
  var itemSet = {
    abilties: [],
    champion: 'banana',
    items: [],
    map: 'SR',
    masteries: [],
    summoners: [],
  }

  document.getElementById('rift').addEventListener("mousedown", function(){
  itemSet.map = 'SR';
  console.log(itemSet.map)
  });

  document.getElementById('abyss').addEventListener("mousedown", function(){
  itemSet.map = 'HA';
  console.log(itemSet.map)
  });
};
