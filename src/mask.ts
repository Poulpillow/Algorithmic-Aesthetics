// MASK FUNCTION

function draw_mask_mode() {
    if (params.MaskMode==0)         // Original Artwork
    {
        // Create the mask
        pg.background('#E4E3E7')
        pg.noStroke()
        pg.fill(0)

        // Random animation of the triangles
        pg.shader(myShader)
        noiseDetail(1,0.5)
        pg.triangle(
            params.x12 ,
            params.y1  , 
            params.x12 , 
            params.y23 , 
            params.x3  , 
            params.y23 
        )
        pg.triangle(
            params.x4  , 
            params.y45 , 
            params.x56 , 
            params.y45 , 
            params.x56 , 
            params.y6  
        )   
    }

    else if (params.MaskMode==1)    // Animation 1 + User's changes with parameters
    {
        // Create the masks
        pg.background('#E4E3E7')
        pg.noStroke()
        pg.fill(0)
    
        // Cut a shape in the mask with triangles
        pg.shader(myShader)
        pg.triangle(
            params.x12 + 50 * sin(frameCount * 0.04), 
            params.y1  + 50 * sin(frameCount * 0.04), 
            params.x12 + 50 * sin(frameCount * 0.04), 
            params.y23 + 50 * sin(frameCount * 0.04), 
            params.x3  + 50 * sin(frameCount * 0.04), 
            params.y23 + 50 * sin(frameCount * 0.04)
        )
        pg.triangle(
            params.x4  + 50 * sin(frameCount * 0.04),
            params.y45 + 50 * sin(frameCount * 0.04), 
            params.x56 + 50 * sin(frameCount * 0.04), 
            params.y45 + 50 * sin(frameCount * 0.04), 
            params.x56 + 50 * sin(frameCount * 0.04), 
            params.y6  + 50 * sin(frameCount * 0.04)
        )
    }
    else if (params.MaskMode==2)                        // Animation 2 + User's changes with parameters
    {
        // Create the mask
        pg.background('#E4E3E7')
        pg.noStroke()
        pg.fill(0)

        // Random animation of the triangles
        pg.shader(myShader)
        noiseDetail(1,0.5)
        pg.triangle(
            params.x12 + noise(frameCount*0.1)*100,
            params.y1  + noise(frameCount*0.1+10)*100, 
            params.x12 + noise(frameCount*0.1+20)*100, 
            params.y23 + noise(frameCount*0.1+30)*100, 
            params.x3  + noise(frameCount*0.1+40)*100, 
            params.y23 + noise(frameCount*0.1+50)*100
        )
        pg.triangle(
            params.x4  + noise(frameCount*0.1+50)*100, 
            params.y45 + noise(frameCount*0.1+60)*100, 
            params.x56 + noise(frameCount*0.1+70)*100, 
            params.y45 + noise(frameCount*0.1+80)*100, 
            params.x56 + noise(frameCount*0.1+90)*100, 
            params.y6  + noise(frameCount*0.1+100)*100
        )
    }

    else                            // User's changes with the mouse
    {
        // Create the masks
        pg2.background('#E4E3E7')
        pg2.noStroke()
        pg.noStroke()
        pg2.fill(0)
 
        pg2.push()

        pg2.translate(width/2,height/2)

        // Shape of the mask
        pg2.beginShape()
        for (let i=0 ; i<px.length ; i++)
        {
            pg2.vertex(px[i],py[i])
        }
        pg2.endShape(CLOSE)

        pg2.pop()

        pg.shader(myShader2)
        myShader2.setUniform('tex0', pg2);
        myShader2.setUniform("u_resolution", [width, height]);
        pg.rect(-width/2,-height/2,width,height)
    }
    
}