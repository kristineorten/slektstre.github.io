// Functions for name
function getName_Full(id) {
    var name = people[id].firstName+" "+people[id].middleName+" "+people[id].lastName;
    return name.trim();
}
function getName_AlmostFull(id) {
    var name = people[id].firstName+" "+people[id].middleNameShort+" "+people[id].lastName;
    return name.trim();
}
function getName_FirstAndMiddleShort(id) {
    var name = people[id].firstName+" "+people[id].middleNameShort;
    return name.trim();
}

// Functions for images
function getMainImg(id) {
    return people[id].img_url[0];
}

// Functions for years: birth and died
function getYears_BornAndDied(id) {
    var out = "";
    if (people[id].yearBorn != 0) {
        out += people[id].yearBorn
    } else {
        out += "?"
    }
    out += " - "
    if (people[id].dead) {
        if (people[id].yearDied != 0) {
            out += people[id].yearDied
        } else {
            out += "?"
        }
    } else {
        out += "d.d."
    }
    return out
}
