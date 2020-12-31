let size = 300;
        let x1 = 250;
        let y1 = 280;
        let x2 = x1+size;
        let y2 = y1;
        let x3 = x1+size/2;
        let y3 = y1+Math.sqrt(3 * (size/2) **2);
        let depth = 7;
    
        
    function draw_fractal(px1,py1,px2,py2,px3,py3,d,s,ctx) {
        if (d) {
            //console.log(px1,py1,px2,py2,px3,py3);
            ctx.beginPath();
            ctx.moveTo(px1,py1);
            ctx.lineTo(px2,py2);
            ctx.lineTo(px3,py3);
            ctx.closePath();
            ctx.stroke();
            //ctx.beginPath();
            //new_h =Math.sqrt(3 * (s/4)**2)
            //x1 =  (px1+px2)/2 - s/2
            //y1 = (py1+py2)/2 - h
            draw_fractal((px1+px2)/2 - s/4, (py1+py2)/2 - Math.sqrt(3 * (s/4)**2),(px1+px2)/2 + s/4, (py1+py2)/2 - Math.sqrt(3 * (s/4)**2), (px1+px2)/2, (py1+py2)/2,d-1, s/2, ctx);
            
            
            ctx.fillStyle = '#FF0000';
            //ctx.arc((px1+px2)/2,(py1+py2)/2,2,0,Math.PI*2,false);
            //ctx.moveTo((px2+px3)/2,(py2+py3)/2);
            
            //ctx.arc((px2+px3)/2,(py2+py3)/2,5,0,Math.PI*2,false);
            draw_fractal((px2+px3)/2,(py2+py3)/2, (px2+px3)/2 + s/2, (py2+py3)/2, (px2+px3)/2 + s/4, (py2+py3)/2 +Math.sqrt(3 * (s/4    )**2), d-1, s/2, ctx);
            //ctx.moveTo((px1+px3)/2,(py1+py3)/2);
            //ctx.arc((px1+px3)/2,(py1+py3)/2,5,0,Math.PI*2,false);
            draw_fractal((px1+px3)/2 - s/2, (py1+py3)/2, (px1+px3)/2, (py1+py3)/2, (px1+px2)/2 - s/2, (py2+py3)/2 +Math.sqrt(3 * (s/4)**2), d-1, s/2, ctx);
            //ctx.fill();
            //draw_fractal(size/2,d-1);
            //draw_fractal(size/2,d-1);
            //draw_fractal(size/2,d-1);
    
        }   
    }    
    function draw() {
        let canvas = document.getElementById('tutorial');
        if (canvas.getContext) {
            console.log(true);
            let ctx = canvas.getContext('2d');
            ctx.lineWidth = 1;
            draw_fractal(x1,y1,x2,y2,x3,y3,depth,size,ctx);
        }   
    }