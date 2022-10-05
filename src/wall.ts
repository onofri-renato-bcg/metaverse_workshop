export class Wall extends Entity {
    constructor(position: Vector3, scale: Vector3 = new Vector3(10, 10, 0.5)) {
        super()
        engine.addEntity(this)
        this.addComponent(new BoxShape())
        this.addComponent(new Transform({
            position: position,
            scale: scale
        }))
    }
}
