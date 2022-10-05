
export class RotatorSystem implements ISystem{
    entity: Entity
    
    constructor(entity: Entity){
        this.entity = entity
    }

    update(dt: number) {
        const transform = this.entity.getComponent(Transform)
        transform.rotate(Vector3.Up(), dt * 150)
    }
}
