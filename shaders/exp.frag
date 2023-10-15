#ifdef GL_ES
    precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
const int AMOUNT = 20;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    vec2 uv0 = uv;

    vec2 coord = 20.0 * (gl_FragCoord.xy - u_resolution / 2.0) / min(u_resolution.y, u_resolution.x);
    vec3 color = vec3(0.0);
    float len = length(vec2(coord.x, coord.y));
    float d = length(uv) * exp(-length(uv0));

    color.x += sin(len * 0.5 + u_time * 0.5);
    color.y += sin(len * 0.5 + u_time * 0.5 + 2.0);
    color.z += sin(len * 0.5 + u_time * 0.5 + 4.0);
    //color.x *= color.y;
    for (int i = 1; i < AMOUNT; i++) {
        float a = u_time * float(i) * 0.5;
        float c = sin(a*0.5) * cos(a) * sin(len * 3.0 - a) * cos(len * 3.0 - a);
        color += d * c;
    }

    gl_FragColor = vec4(color, 1.0);
}