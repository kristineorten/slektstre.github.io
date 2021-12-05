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
function id_to_treeId(id) {
    return people[id].tree_id;
}
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
function getImgByValue(id,v) {
    if (id === null || people[id].img_url === null || people[id].img_url.length < v) {
        return null;
    }
    return people[id].img_url[v-1];
}
function getImgByValue_treeId(treeId,v) {
    var id = treeId_to_Id(treeId);
    if (id === null) {
        return null;
    }
    return getImgByValue(id,v);
}

function getAllImages(id) {
    return people[id].img_url;
}
function getAllImages_treeId(tree_id) {
    return getAllImages(treeId_to_Id(tree_id));
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


// children
function getChildren(id) {
    return people[id].children_id;
}
function getChildren_treeId(tree_id) {
    return getChildren(treeId_to_Id(tree_id));
}

// Building the tree
function buildtree() {
    var name = getName_FirstAndMiddleShort(0)+" og "+getName_AlmostFull(1);
    var img = "<img src=\""+getMainImg(0)+"\"></img><p>";
    document.getElementById("home").innerHTML += buildtree_r(name,"1",1,"id='wrapper'",img);
}

function buildtree_r(name,treeId,lvl,classInfo,img) { /*lvl is the lvl of children*/
    console.log(treeId);
    var html = "";
    var id = treeId_to_Id(treeId);
    var dead = isDead_treeId(treeId);
    if (name === "") {
        name = getName_AlmostFull_treeId(treeId);
    }
    html += "<div "+classInfo+"><span class='label'> \
            <form action='people/index.html' method=GET id="+id+"> \
                <input type='hidden' name='id' value='"+treeId+"'/> \
                <button type='submit' name='submit' value='submit'/>";
    if (img !== null) {
        html += img;
    }
    if (dead) {
        html += "<i class='fas fa-cross'></i><br>";
    }
    html +=     name;
    html +=     "</button></form></span>";

    var children = getChildren_treeId(treeId);
    console.log(children);
    //var children = test[i].children;
    var childClassInfo = "class='entry";
    console.log(children.length);
    if (children.length > 0) {
        html += "<div class='branch lv"+lvl+"'>";
        if (children.length == 1) {
            childClassInfo += " sole'";
        } else {
            childClassInfo += "'";
        }
        for (let t = 0; t < children.length; t++) {
            html += buildtree_r("",treeId+"-"+(t+1),lvl+1,childClassInfo,null);
        }
        html += "</div>";
    }

    // Ending the wrapper-div
    html += "</div>";
    return html;
}
