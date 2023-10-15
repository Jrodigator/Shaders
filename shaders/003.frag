#ifdef GL_ES 
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
const int AMOUNT = 10;

void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution.xy;
    vec3 colour = vec3(uv.y - cos(u_time),uv.x + sin(u_time), uv.x * uv.y + sin(u_time));
    gl_FragColor = vec4(colour, 1.0);
}