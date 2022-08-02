let obj = {
    "id": 1,
    "name": "shawshank",
    "rating": 9.2,
    "description": "escape prison",
    "genre": "its a genre",
    "cast": ["person2", "person3"]
}
let reference = {
    "id": "number",
    "name": "string",
    "rating": "number",
    "description": "string",
    "genre": "string",
    "cast": "object"
}
const checkMovieFormat = (obj) => {
    let c = 0;
    for (let key in obj) {
        c++;
        if (reference[key] !== typeof obj[key]) {
            console.log(key, " is not type of ", reference[key]);
            return false;
        }
    }
    if (c != 6) {
        console.log("total number of keys are diff");
        return false;
    }
    let { cast } = obj;
    for (let i = 0; i < cast.length; i++) {
        if (typeof cast[i] != "string") {
            console.log("cast arrays dont have all strings in it");
            return false;
        }
    }
    return true;
}
let ans = checkMovieFormat(obj);
console.log(ans);

module.exports = checkMovieFormat;