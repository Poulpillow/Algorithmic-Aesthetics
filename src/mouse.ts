// MOUSE PARAMETERS

// CHANGE THE RANDOM FUNCTION
function mouseWheel(e) {
    e.delta
    if (e.delta<0) 
    {
        paramseed.setValue(params.Seed+1)
    }
    if (e.delta>0) 
    {
        paramseed.setValue(params.Seed-1)
    }
    return false
}

// MOVE THE POINTS FUNCTIONS
function mousePressed() {
    for (let i=0 ; i<px.length ; i++)
    {
        if (sqrt(sq(mouseX-width/2-px[i])+sq(mouseY-height/2-py[i]))<50)
        {
            held[i]=true
        }
    }
    
}

function mouseReleased() {
    for (let i=0 ; i<px.length ; i++)
    {
        held[i] = false;
    }
}