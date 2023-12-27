class Ground{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        var Options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,Options)
        World.add(world,this.body)
    }
    display(){
        push()
        translate (this.body.position.x,this.body.position.y)
        fill("purple")
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop ()
    }
}