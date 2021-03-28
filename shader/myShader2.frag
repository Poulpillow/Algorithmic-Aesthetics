precision mediump float;
uniform vec2 u_resolution;
uniform sampler2D tex0;

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution/2.;
    uv.y=1.-uv.y;
    if (texture2D(tex0,uv).r<0.5)
    {
        gl_FragColor=vec4(0.);
    }
    else
    {
        gl_FragColor=vec4(0.95,0.95,0.95,1.);
    }
}