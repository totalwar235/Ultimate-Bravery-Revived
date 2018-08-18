function loadChampionList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       championList = JSON.parse(this.responseText);
      }
    };
    xhttp.open("GET", "https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=info&dataById=false", true);
    xhttp.send();
  }

  function loadItemList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        itemList = JSON.parse(this.responseText);
      }
    };
    xhttp.open("GET", "https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=info&dataById=false", true);
    xhttp.send();
  }