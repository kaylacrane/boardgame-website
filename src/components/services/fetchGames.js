export default {
    fetchGames() {
        return fetch("https://www.boardgamegeek.com/xmlapi/collection/el4ith?played=1")
        .then(response=>response).then(data =>console.log(data))
    }
}