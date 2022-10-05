import { Wall } from "./wall"
import { Sound } from "./sound"

// Base
const base = new Entity()
base.addComponent(new GLTFShape("models/baseDarkWithCollider.glb"))

engine.addEntity(base)

// Facade
const facade = new Entity()
facade.addComponent(new GLTFShape("models/facade.glb"))
facade.addComponent(new Transform({ position: new Vector3(8, 0.05, 5) }))
facade.getComponent(Transform).rotate(Vector3.Up(), 180)

engine.addEntity(facade)

const wall_left = new Wall(new Vector3(1, 0.05, 10))
wall_left.getComponent(Transform).rotate(Vector3.Up(), 90)

const wall_right = new Wall(new Vector3(15, 0.05, 10))
wall_right.getComponent(Transform).rotate(Vector3.Up(), 90)

const wall_back = new Wall(new Vector3(8, 0.05, 15), new Vector3(14, 10, 0.5))
wall_back.getComponent(Transform).rotate(Vector3.Up(), 180)

//Material
// const brickTexture = new Texture("materials/brick_material.jpeg")
// let brickMaterial = new BasicMaterial()
// brickMaterial.texture = brickTexture

// wall_left.addComponent(brickMaterial)
// wall_right.addComponent(brickMaterial)
// wall_back.addComponent(brickMaterial)

//Background Music
// const jazzSound = new Sound(new AudioClip("sounds/jazz.mp3"), true, true, new Vector3(8, 0, 8))
// jazzSound.getComponent(AudioSource).volume = 1.0
