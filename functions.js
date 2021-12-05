// Functions for name
function getName_Full(id) {
    if (id === null) {
        return null;
    }
    var name = people[id].firstName+" "+people[id].middleName+" "+people[id].lastName;
    return name.trim();
}
function getName_AlmostFull(id) {
    if (id === null) {
        return null;
    }
    //console.log("id"+id)
    var name = people[id].firstName+" "+people[id].middleNameShort+" "+people[id].lastName;
    //console.log("name: "+name)
    return name.trim();
}
function getName_FirstAndMiddleShort(id) {
    if (id === null) {
        return null;
    }
    var name = people[id].firstName+" "+people[id].middleNameShort;
    return name.trim();
}

// Functions for name based on tree-placement
function treeId_to_Id(treeId) {
    for (let i = 0; i < people.length; i++) {
        if (people[i].tree_id.valueOf() == treeId.valueOf()) {
            return i;
        }
    }
    return null;
}
function getName_Full_treeId(treeId) {
    var id = treeId_to_Id(treeId);
    if (id === null) {
        return null;
    }
    return getName_Full(id);
}
function getName_AlmostFull_treeId(treeId) {
    var id = treeId_to_Id(treeId);
    if (id === null) {
        return null;
    }
    return getName_AlmostFull(id);
}
function getName_FirstAndMiddleShort_treeId(treeId) {
    var id = treeId_to_Id(treeId);
    if (id === null) {
        return null;
    }
    return getName_FirstAndMiddleShort(id);
}

// Functions for images
function getMainImg(id) {
    if (id === null || people[id].img_url === null) {
        return null;
    }
    return people[id].img_url[0];
}
function getMainImg_treeId(treeId) {
    var id = treeId_to_Id(treeId);
    if (id === null) {
        return null;
    }
    return getMainImg(id);
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

//Check if dead
function isDead(id) {
    if (id === null) {
        return null;
    }
    return people[id].dead;
}

function isDead_treeId(tree_id) {
    return isDead(treeId_to_Id(tree_id))
}

// Get text
function getInfoText(id) {
    if (id === null) {
        return null;
    }
    return people[id].infoText;
}

function getInfoText_treeId(tree_id) {
    return getInfoText(treeId_to_Id(tree_id));
}
