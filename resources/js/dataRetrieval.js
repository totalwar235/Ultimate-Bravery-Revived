const reqURL = "https://na1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-8d9d1e07-2af7-4504-9ea8-6f74cee122a2";

let myHeaders = new Headers();
myHeaders.append('Origin', "https://totalwar235.github.io/Ultimate-Bravery-Revived/");
myHeaders.append('Accept-Charset', "application/x-www-form-urlencoded; charset=UTF-8");
myHeaders.append('X-Riot-Token', 'RGAPI-8d9d1e07-2af7-4504-9ea8-6f74cee122a2');
myHeaders.append('Accept-Language', "en-US,en;q=0.9");
myHeaders.append('User-Agent', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36");

let req = new Request( reqURL, {
  method: 'GET',
  headers: myHeaders,
  mode: 'no-cors'
});

fetch(req)
  .then( (response) => {
    if(response.ok){
      return response.json();
    } else {
      throw new Error('BAD HTTP REQUEST');
    }
  })
  .then( (jsonData) => {
    console.log(jsonData);
  })
  .catch( (err) => {
    console.log('ERROR:', err.message);
  });

// function loadChampionList() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//         championList = JSON.parse(this.responseText);
//         console.log(championList);
//       }
//     };
//     xhttp.open("GET", URL);
//     xhttp.send();
//   }

//   function loadItemList() {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         itemList = JSON.parse(this.responseText);
//       }
//     };
//     xhttp.open("GET", "https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=info&dataById=false", true);
//     xhttp.send();
//   }
//
// loadChampionList();
