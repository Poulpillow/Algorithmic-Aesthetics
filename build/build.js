function palette(index) {
    if (index == 0) {
        var color0 = [
            '#314C7B',
            '#314C7B',
            '#314C7B',
            '#314C7B',
            '#1664A6',
            '#1664A6',
            '#1664A6',
            '#1664A6',
            '#5A4F57',
            '#5A4F57',
            '#C9C8D0'
        ];
        var color1 = [
            '#314C7B',
            '#314C7B',
            '#314C7B',
            '#314C7B',
            '#1664A6',
            '#1664A6',
            '#1664A6',
            '#1664A6',
            '#5A4F57',
            '#5A4F57',
            '#5A4F57',
            '#C9C8D0',
            '#C9C8D0',
            '#CDC15D',
            '#226C79'
        ];
        var color2 = [
            '#314C7B',
            '#314C7B',
            '#314C7B',
            '#314C7B',
            '#1664A6',
            '#1664A6',
            '#1664A6',
            '#1664A6',
            '#5A4F57',
            '#5A4F57',
            '#5A4F57',
            '#C9C8D0',
            '#C9C8D0',
            '#CDC15D',
            '#226C79'
        ];
        return [color0, color1, color2];
    }
    else if (index == 1) {
        var color0 = [
            '#ff9d00',
            '#ff9d00',
            '#ff9d00',
            '#ff9d00',
            '#ffc929',
            '#ffc929',
            '#ffc929',
            '#ffc929',
            '#5d686e',
            '#5d686e',
            '#daebf5'
        ];
        var color1 = [
            '#ff9d00',
            '#ff9d00',
            '#ff9d00',
            '#ff9d00',
            '#ffc929',
            '#ffc929',
            '#ffc929',
            '#ffc929',
            '#5d686e',
            '#5d686e',
            '#5d686e',
            '#daebf5',
            '#daebf5',
            '#b481e3',
            '#e181e3'
        ];
        var color2 = [
            '#ff9d00',
            '#ff9d00',
            '#ff9d00',
            '#ff9d00',
            '#ffc929',
            '#ffc929',
            '#ffc929',
            '#ffc929',
            '#5d686e',
            '#5d686e',
            '#5d686e',
            '#daebf5',
            '#daebf5',
            '#b481e3',
            '#e181e3'
        ];
        return [color0, color1, color2];
    }
    else if (index == 2) {
        var color0 = [
            '#60a138',
            '#60a138',
            '#60a138',
            '#60a138',
            '#c6ff63',
            '#c6ff63',
            '#c6ff63',
            '#c6ff63',
            '#535426',
            '#535426',
            '#fdffb8'
        ];
        var color1 = [
            '#60a138',
            '#60a138',
            '#60a138',
            '#60a138',
            '#c6ff63',
            '#c6ff63',
            '#c6ff63',
            '#c6ff63',
            '#535426',
            '#535426',
            '#535426',
            '#fdffb8',
            '#fdffb8',
            '#f74848',
            '#f56ea4'
        ];
        var color2 = [
            '#60a138',
            '#60a138',
            '#60a138',
            '#60a138',
            '#c6ff63',
            '#c6ff63',
            '#c6ff63',
            '#c6ff63',
            '#535426',
            '#535426',
            '#535426',
            '#fdffb8',
            '#fdffb8',
            '#f74848',
            '#f56ea4'
        ];
        return [color0, color1, color2];
    }
    else if (index == 3) {
        var color0 = [
            '#631573',
            '#631573',
            '#631573',
            '#631573',
            '#bd5ad1',
            '#bd5ad1',
            '#bd5ad1',
            '#bd5ad1',
            '#1d185e',
            '#1d185e',
            '#d5d3f2'
        ];
        var color1 = [
            '#631573',
            '#631573',
            '#631573',
            '#631573',
            '#bd5ad1',
            '#bd5ad1',
            '#bd5ad1',
            '#bd5ad1',
            '#1d185e',
            '#1d185e',
            '#1d185e',
            '#d5d3f2',
            '#d5d3f2',
            '#76e8c6',
            '#76e2e8'
        ];
        var color2 = [
            '#631573',
            '#631573',
            '#631573',
            '#631573',
            '#bd5ad1',
            '#bd5ad1',
            '#bd5ad1',
            '#bd5ad1',
            '#1d185e',
            '#1d185e',
            '#1d185e',
            '#d5d3f2',
            '#d5d3f2',
            '#76e8c6',
            '#76e2e8'
        ];
        return [color0, color1, color2];
    }
    else if (index == 4) {
        var color0 = [
            '#CB3921',
            '#CB3921',
            '#CB3921',
            '#CB3921',
            '#E98C28',
            '#E98C28',
            '#E98C28',
            '#E98C28',
            '#462A3B',
            '#462A3B',
            '#FEE002'
        ];
        var color1 = [
            '#CB3921',
            '#CB3921',
            '#CB3921',
            '#CB3921',
            '#E98C28',
            '#E98C28',
            '#E98C28',
            '#E98C28',
            '#462A3B',
            '#462A3B',
            '#462A3B',
            '#FEE002',
            '#FEE002',
            '#80C6E2',
            '#5C72AF'
        ];
        var color2 = [
            '#CB3921',
            '#CB3921',
            '#CB3921',
            '#CB3921',
            '#E98C28',
            '#E98C28',
            '#E98C28',
            '#E98C28',
            '#462A3B',
            '#462A3B',
            '#462A3B',
            '#FEE002',
            '#FEE002',
            '#80C6E2',
            '#5C72AF'
        ];
        return [color0, color1, color2];
    }
}
function draw_mask_mode() {
    if (params.MaskMode == 0) {
        pg.background('#E4E3E7');
        pg.noStroke();
        pg.fill(0);
        pg.shader(myShader);
        noiseDetail(1, 0.5);
        pg.triangle(params.x12, params.y1, params.x12, params.y23, params.x3, params.y23);
        pg.triangle(params.x4, params.y45, params.x56, params.y45, params.x56, params.y6);
    }
    else if (params.MaskMode == 1) {
        pg.background('#E4E3E7');
        pg.noStroke();
        pg.fill(0);
        pg.shader(myShader);
        pg.triangle(params.x12 + 50 * sin(frameCount * 0.04), params.y1 + 50 * sin(frameCount * 0.04), params.x12 + 50 * sin(frameCount * 0.04), params.y23 + 50 * sin(frameCount * 0.04), params.x3 + 50 * sin(frameCount * 0.04), params.y23 + 50 * sin(frameCount * 0.04));
        pg.triangle(params.x4 + 50 * sin(frameCount * 0.04), params.y45 + 50 * sin(frameCount * 0.04), params.x56 + 50 * sin(frameCount * 0.04), params.y45 + 50 * sin(frameCount * 0.04), params.x56 + 50 * sin(frameCount * 0.04), params.y6 + 50 * sin(frameCount * 0.04));
    }
    else if (params.MaskMode == 2) {
        pg.background('#E4E3E7');
        pg.noStroke();
        pg.fill(0);
        pg.shader(myShader);
        noiseDetail(1, 0.5);
        pg.triangle(params.x12 + noise(frameCount * 0.1) * 100, params.y1 + noise(frameCount * 0.1 + 10) * 100, params.x12 + noise(frameCount * 0.1 + 20) * 100, params.y23 + noise(frameCount * 0.1 + 30) * 100, params.x3 + noise(frameCount * 0.1 + 40) * 100, params.y23 + noise(frameCount * 0.1 + 50) * 100);
        pg.triangle(params.x4 + noise(frameCount * 0.1 + 50) * 100, params.y45 + noise(frameCount * 0.1 + 60) * 100, params.x56 + noise(frameCount * 0.1 + 70) * 100, params.y45 + noise(frameCount * 0.1 + 80) * 100, params.x56 + noise(frameCount * 0.1 + 90) * 100, params.y6 + noise(frameCount * 0.1 + 100) * 100);
    }
    else {
        pg2.background('#E4E3E7');
        pg2.noStroke();
        pg.noStroke();
        pg2.fill(0);
        pg2.push();
        pg2.translate(width / 2, height / 2);
        pg2.beginShape();
        for (var i = 0; i < px.length; i++) {
            pg2.vertex(px[i], py[i]);
        }
        pg2.endShape(CLOSE);
        pg2.pop();
        pg.shader(myShader2);
        myShader2.setUniform('tex0', pg2);
        myShader2.setUniform("u_resolution", [width, height]);
        pg.rect(-width / 2, -height / 2, width, height);
    }
}
function mouseWheel(e) {
    e.delta;
    if (e.delta < 0) {
        paramseed.setValue(params.Seed + 1);
    }
    if (e.delta > 0) {
        paramseed.setValue(params.Seed - 1);
    }
    return false;
}
function mousePressed() {
    for (var i = 0; i < px.length; i++) {
        if (sqrt(sq(mouseX - width / 2 - px[i]) + sq(mouseY - height / 2 - py[i])) < 50) {
            held[i] = true;
        }
    }
}
function mouseReleased() {
    for (var i = 0; i < px.length; i++) {
        held[i] = false;
    }
}
var pg;
var pg2;
var myShader;
var myShader2;
var r = 0;
var s = 0;
var px = [];
var py = [];
var held = [];
var gui = new dat.GUI();
var params = {
    Seed: 166,
    moduledim: 6,
    couleur: 0,
    N: 6,
    MaskMode: 0,
    x12: 140,
    y1: 330,
    y23: -40,
    x3: -260,
    x4: -120,
    y45: 90,
    x56: 310,
    y6: -320,
    Download_Image: function () { return save(); },
};
var paramseed = gui.add(params, "Seed", 0, 255, 1);
gui.add(params, "moduledim", 1, 10, 1);
gui.add(params, "couleur", 0, 4, 1);
gui.add(params, "MaskMode", 0, 3, 1);
var f1 = gui.addFolder('Coordinates triangles');
f1.add(params, "x12", -600, 600, 10);
f1.add(params, "y1", -600, 600, 10);
f1.add(params, "y23", -600, 600, 10);
f1.add(params, "x3", -600, 600, 10);
f1.add(params, "x4", -600, 600, 10);
f1.add(params, "y45", -600, 600, 10);
f1.add(params, "x56", -600, 600, 10);
f1.add(params, "y6", -600, 600, 10);
gui.add(params, "N", 3, 10, 1).onChange(createPoint);
gui.add(params, "Download_Image");
function draw() {
    for (var i = 0; i < px.length; i++) {
        if (held[i]) {
            py[i] = mouseY - height / 2;
            px[i] = mouseX - width / 2;
        }
    }
    push();
    noStroke();
    randomSeed(params.Seed);
    rectMode(CENTER);
    var w = width / params.moduledim;
    translate(width / 2, height / 2);
    rotate(2 * PI / 3);
    translate(-width / 2, -height / 2);
    for (var i = -params.moduledim / 2; i < params.moduledim * 1.5; i++) {
        for (var j = -params.moduledim / 2; j < params.moduledim * 1.5; j++) {
            push();
            translate((i + 0.5) * w, (j + 0.5) * w);
            r = random(0, 3);
            s = random(0, 2);
            if (r < 0.5) {
                rotate(PI / 2);
            }
            else if (r > 0.5 && r < 1.5) {
                rotate(PI);
            }
            else if (r > 1.5 && r < 2.5) {
                rotate(3 * PI / 2);
            }
            var colors = palette(params.couleur);
            draw_in_one_square(colors[0], colors[1], colors[2]);
            pop();
        }
    }
    pop();
    draw_mask_mode();
    image(pg, 0, 0, width, height);
}
function preload() {
    myShader = loadShader("shader/myShader.vert", "shader/myShader.frag");
    myShader2 = loadShader("shader/myShader.vert", "shader/myShader2.frag");
}
function setup() {
    p6_CreateCanvas();
    pg = createGraphics(width, height, WEBGL);
    pg2 = createGraphics(width, height);
    createPoint();
}
function windowResized() {
    p6_ResizeCanvas();
    pg.resizeCanvas(width, height);
    pg2.resizeCanvas(width, height);
}
function createPoint() {
    px = [];
    py = [];
    held = [];
    var rayon = width / 4;
    for (var i = 0; i < params.N; i++) {
        var angle = TAU * i / params.N;
        px.push(cos(angle) * rayon);
        py.push(sin(angle) * rayon);
        held.push(false);
    }
}
function draw_in_one_square(colors, colors1, colors2) {
    var w = width / params.moduledim;
    var col = random(colors);
    fill(col);
    rect(0, 0, w, w);
    var col1 = random(colors1);
    fill(col1);
    stroke(col1);
    arc(0, -w / 2, w, w, 0, PI, CHORD);
    var col2 = random(colors2);
    fill(col2);
    stroke(col2);
    if (s < 1) {
        arc(0, 0, w, w, 0, PI, CHORD);
    }
    else {
        arc(0, +w / 2, w, w, PI, TWO_PI, CHORD);
    }
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map