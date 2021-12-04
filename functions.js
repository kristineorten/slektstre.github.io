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

// Functions for name based on tree-placement
function treeId_to_Id(treeId) {
    for (let i = 2; i < people.length; i++) {
        if (people[i].tree_id == treeId) {
            return i;
        }
    }
    return null;
}
function getName_Full_treeId(treeId) {
    return getName_Full(treeId_to_Id(treeId));
}
function getName_AlmostFull_treeId(treeId) {
    return getName_AlmostFull_treeId(treeId_to_Id(treeId));
}
function getName_FirstAndMiddleShort_treeId(treeId) {
    return getName_FirstAndMiddleShort_treeId(treeId_to_Id(treeId));
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
