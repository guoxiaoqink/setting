
function getOptionId() {
    let id = new Date().getTime() + Math.random().toString(36).substr(2);
    return id;
}

function getLotId() {
    let id = Math.random().toString(36).substr(2) + new Date().getTime();
    return id;
}

module.exports = {
    getOptionId,
    getLotId
};