function Bubble(){

    this.x=random(width);
    this.y=random(height);
    this.c1=random(0,255);
    this.c2=random(0,255);
    this.c3=random(0,255);
    this.d=random(35,55);

    this.show = function() {
        stroke(color(this.c1, this.c2, this.c3));
        noFill();
        ellipse(this.x, this.y, this.d, this.d);       
    }

    this.move = function(){
        this.x=this.x+random(-1,0.5);
        this.y=this.y+random(-1,0.5);
        }

    this.plop = function(edge) {
        if (this.x > (width-this.d/2) || this.x<this.d/2){
            strokeWeight(15);
            ellipse(this.x, this.y, this.d+5, this.d+5); 
            strokeWeight(1);
            return true; 
        }
        if (this.y > (height-this.d/2) || this.y<this.d/2){
            strokeWeight(15);
            ellipse(this.x, this.y, this.d+5, this.d+5); 
            strokeWeight(1);
            return true; 
        }
    }
}