// Functions for name
function getName_Full(id) {
    return people[id].firstName+" "+people[id].middleName+" "+people[id].lastName;
}
function getName_AlmostFull(id) {
    return people[id].firstName+" "+people[id].middleNameShort+" "+people[id].lastName;
}
function getName_FirstAndMiddleShort(id) {
    return people[id].firstName+" "+people[id].middleNameShort;
}

// Functions for images
function getMainImg(id) {
    return people[id].img_url[0];
}
