<?php
function returnChampions(){
    $reqURL = "https://na1.api.riotgames.com/lol/platform/v3/champions?api_key=RGAPI-8d9d1e07-2af7-4504-9ea8-6f74cee122a2&locale=en_US&tags=info&dataById=false";

    $jsonResponse = file_get_contents($reqURL)
    echo $jsonResponse;
}
?>