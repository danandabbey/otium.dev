

const mouse = {
    x: {},
    y: {},
    radius: 150
};

window.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y
    console.log(mouse.x,mouse.y);
});

