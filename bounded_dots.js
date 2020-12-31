let ctx;
        let timeout = 20;
        let rect_size = 80;
        let rects_x = Math.round(730/rect_size)+1;
        let rects_y = Math.round(600/rect_size)+1;
        let speed_x = 2;
        let speed_y = 2;
        let radius = 10;
        let dots = [];
        let dots_num = 25;
        let bound_distance = 200;
    
        
    function loop() {
       // ctx.strokeStyle = 'rgba(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
      
      //ctx.strokeRect(Math.round(Math.random()*730),Math.round(Math.random()*600),5,5);
      ctx.clearRect(0,0,730,600);
      for (let dot in dots) {
        dots[dot].pos_x += dots[dot].speed_x;
        dots[dot].pos_y += dots[dot].speed_y;
      } 
      for (let dot in dots) {
            if (dots[dot].pos_x > 730-radius) {
            dots[dot].speed_x = -dots[dot].speed_x;
        } else if (dots[dot].pos_y > 600-radius) {
            dots[dot].speed_y = -dots[dot].speed_y;
        } else if (dots[dot].pos_x < radius) {
            dots[dot].speed_x = -dots[dot].speed_x;
        } else if (dots[dot].pos_y < radius) {
            dots[dot].speed_y = -dots[dot].speed_y;
        }
      }
            for (let dot in dots) {
        let new_dots = Object.assign([], dots);
        new_dots.pop(dot);
        for (let new_dot in new_dots) {
            if (Math.sqrt((new_dots[new_dot].pos_x - dots[dot].pos_x)**2 + (new_dots[new_dot].pos_y - dots[dot].pos_y)**2)  < bound_distance) {
                ctx.beginPath();
                ctx.moveTo(new_dots[new_dot].pos_x, new_dots[new_dot].pos_y);
                let gradient = ctx.createLinearGradient(new_dots[new_dot].pos_x, new_dots[new_dot].pos_y,dots[dot].pos_x, dots[dot].pos_y);
                gradient.addColorStop(0, new_dots[new_dot].color);
                gradient.addColorStop(1, dots[dot].color);
                ctx.strokeStyle = gradient;
                ctx.lineTo(dots[dot].pos_x, dots[dot].pos_y);
                ctx.stroke();
            }
        }
      }
      for (let dot in dots) {
        ctx.beginPath();
        ctx.fillStyle = dots[dot].color;
        ctx.moveTo(dots[dot].pos_x, dots[dot].pos_y);
        ctx.arc(dots[dot].pos_x, dots[dot].pos_y, radius, 0, Math.PI*2, true);
        ctx.fill();
      }
      

        setTimeout(loop, timeout);    
    }
    
  function draw() {
        let canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
            console.log(true);
            ctx = canvas.getContext('2d');
            ctx.lineWidth = 2;
            //ctx.strokeStyle = 'rgb(210,210,210)';
            for (let i = 0; i < dots_num; i++) {
                dots.push(
                        {
                            pos_x:Math.round(Math.random()*500),
                            pos_y:Math.round(Math.random()*500),
                            speed_x:Math.round(Math.random()*(-10)+5),
                            speed_y:Math.round(Math.random()*(-10)+5),
                            color: 'rgb(' + Math.round(Math.random()*240) + ',' + Math.round(Math.random()*240) + ',' + Math.round(Math.random()*240) + ')'
                        }
                            );
            }
        }  
        
    loop();
    }
 