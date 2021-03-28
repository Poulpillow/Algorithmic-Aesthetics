// -------------------
//  Parameters and UI
// -------------------

// Mask parameters
let pg: p5.Graphics
let pg2: p5.Graphics
let myShader: p5.Shader
let myShader2: p5.Shader

// Pattern parameters
let r=0     //random rotation
let s=0     //random direction half circle

// Mouse parameters
let px=[]
let py=[]
let held=[]

const gui = new dat.GUI()
const params = {
    //RANDOM
    Seed: 166,

    //NUMBER SQUARE GRID ON ONE LINE
    moduledim: 6,

    //CHANGE PALETTE
    couleur: 0,

    // MASK
    N: 6,
    MaskMode: 0,

    //COORDINATES POINTS MASK
    x12: 140,
    y1: 330,
    y23: -40,
    x3: -260,
    x4: -120,
    y45: 90,
    x56: 310,
    y6: -320,

    Download_Image: () => save(),
}

const paramseed = gui.add(params, "Seed", 0, 255, 1)
gui.add(params, "moduledim", 1, 10, 1)
gui.add(params, "couleur", 0, 4, 1)
gui.add(params, "MaskMode", 0, 3, 1)

const f1 = gui.addFolder('Coordinates triangles');
f1.add(params, "x12", -600, 600, 10)
f1.add(params, "y1", -600, 600, 10)
f1.add(params, "y23", -600, 600, 10)
f1.add(params, "x3", -600, 600, 10)
f1.add(params, "x4", -600, 600, 10)
f1.add(params, "y45", -600, 600, 10)
f1.add(params, "x56", -600, 600, 10)
f1.add(params, "y6", -600, 600, 10)

gui.add(params, "N", 3, 10, 1).onChange(createPoint)

gui.add(params, "Download_Image")


// -------------------
//       Drawing
// -------------------

function draw() 
{
    for (let i=0 ; i<px.length ; i++)
    {
        if (held[i])
        {
            py[i]=mouseY-height/2
            px[i]=mouseX-width/2
        } 
    }

    push()

    noStroke()
    randomSeed(params.Seed)
    rectMode(CENTER)

    const w = width / params.moduledim

    // GRID ROTATION 
    translate (width/2,height/2)
    rotate(2*PI/3)
    translate (-width/2,-height/2)

    // GRID
    for (let i=-params.moduledim/2; i<params.moduledim*1.5; i++)
    {
        for (let j=-params.moduledim/2; j<params.moduledim*1.5; j++)
        {
            push()

            translate((i+0.5) * w, (j+0.5) * w)

            r=random(0,3)
            s=random(0,2)

            // PATTERN RANDOM ROTATION
            if (r<0.5)
            {
                rotate(PI/2)
            }
            else if (r>0.5 && r<1.5)
            {
                rotate(PI)
            }
            else if (r>1.5 && r<2.5)
            {
                rotate(3*PI/2)
            }

            // COLORS AND DRAW PATTERN
            const colors = palette(params.couleur)
            draw_in_one_square(colors[0], colors[1], colors[2])

            pop()
        }
    }
    pop()

    // MASK
    draw_mask_mode()
    image(pg, 0, 0, width, height)
    
}

// -------------------
//    Initialization
// -------------------

function preload() {
    myShader = loadShader("shader/myShader.vert", "shader/myShader.frag")
    myShader2 = loadShader("shader/myShader.vert", "shader/myShader2.frag")
}

function setup() {
    p6_CreateCanvas()
    pg = createGraphics(width, height, WEBGL)
    pg2 = createGraphics(width, height)
    createPoint()
}

function windowResized() {
    p6_ResizeCanvas()
    pg.resizeCanvas(width, height)
    pg2.resizeCanvas(width, height)
}

function createPoint() {
    px=[]
    py=[]
    held=[]
    const rayon = width/4
    for (let i=0; i<params.N ; i++)
    {
        const angle = TAU*i/params.N
        px.push(cos(angle)*rayon)
        py.push(sin(angle)*rayon)
        held.push(false)
    }
}

function draw_in_one_square(colors, colors1, colors2) {
    const w = width / params.moduledim

    // CREATION OF THE SQUARE
    const col = random(colors)
    fill(col)
    rect(0, 0, w, w)

    // CREATION OF THE FIRST HALF-CIRCLE
    const col1 = random(colors1)
    fill(col1)
    stroke(col1)
    arc(0, -w/2, w, w, 0, PI,CHORD)

    // CREATION OF THE SECOND HALF-CIRCLE
    const col2 = random(colors2)
    fill(col2)
    stroke(col2)
    if (s<1)
    {
      arc(0, 0, w, w, 0, PI,CHORD)
    }
    else
    {
      arc(0, +w/2, w, w, PI, TWO_PI,CHORD)
    }
}


