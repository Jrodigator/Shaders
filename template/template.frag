#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
const int AMOUNT = 10;

void main(){
    // OUTPUT COLOR 
    vec3 colour = vec3(0.0, 1.0, 0.0);
   gl_FragColor = vec4(colour, 1.0); 
}

