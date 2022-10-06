import { Wall } from "./wall"
import { Door } from "./door"
import { Sound } from "./sound"
import { RotatorSystem } from "./rotator"
// import * as EthereumController from "@decentraland/EthereumController"
// import * as crypto from "@dcl/crypto-scene-utils"
// import * as ui from "@dcl/ui-scene-utils"

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
const brickTexture = new Texture("materials/brick_material.jpeg")
let brickMaterial = new BasicMaterial()
brickMaterial.texture = brickTexture

wall_left.addComponent(brickMaterial)
wall_right.addComponent(brickMaterial)
wall_back.addComponent(brickMaterial)

//Background Music
const jazzSound = new Sound(new AudioClip("sounds/jazz.mp3"), true, true, new Vector3(8, 0, 8))
jazzSound.getComponent(AudioSource).volume = 1.0
// jazzSound.getComponent(AudioSource).volume = 0.0
// const jazzMuffledSound = new Sound(new AudioClip("sounds/jazzMuffled.mp3"), true, true)

const openDoorSound = new Sound(new AudioClip("sounds/openDoor.mp3"), false)
const accessDeniedSound = new Sound(new AudioClip("sounds/accessDenied.mp3"), false)

// let userAddress: string

// Contract for RTFKT x Atari wearables collection
// const contractAddress = "0x6b47e7066c7db71aa04a1d5872496fe05c4c331f"
// const contractAddress = "0xff89924E438bF11d8860Ae33d0B5723a7fF59533"

// Door
const door = new Door(new GLTFShape("models/door.glb"))
door.setParent(facade)
door.addComponent(
  new OnPointerDown(
    () => {
      door.playDoorOpen()
      openDoorSound.getComponent(AudioSource).playOnce()
      jazzSound.getComponent(AudioSource).volume = 1.0
      // checkTokens()
    },
    {
      button: ActionButton.PRIMARY,
      hoverText: "Enter Club",
      showFeedback: true,
    }
  )
)

// UI
// let noSign = new ui.CenterImage("images/no-sign.png", 1, true, 0, 20, 128, 128, {
//   sourceHeight: 512,
//   sourceWidth: 512,
//   sourceLeft: 0,
//   sourceTop: 0,
// })

const nft_man = new Entity()
nft_man.addComponent(new Transform({position: new Vector3(8, 2, 12), scale: new Vector3(2, 2, 1)}))
nft_man.addComponent(new NFTShape(
  "ethereum://0x495f947276749Ce646f68AC8c248420045cb7b5e/88777079088522037926244333246303946687107377434356165921969121296162456862721",
  {
    style: PictureFrameStyle.Gold_Edges,
    color: Color3.Yellow()
  }
))

engine.addEntity(nft_man)
engine.addSystem(new RotatorSystem(nft_man))

// On load
// executeTask(async () => {
//   try {
//     userAddress = await EthereumController.getUserAccount()
//     log("User Address: ", userAddress)
//   } catch (error) {
//     log(error.toString())
//   }
// })

// Check player's wallet to see if they're holding any tokens relating to that contract address
// async function checkTokens() {
//   let balance = await crypto.currency.balance(contractAddress, userAddress)
//   log("BALANCE: ", balance)

//   if (Number(balance) > 0) {
//     door.playDoorOpen()
//     openDoorSound.getComponent(AudioSource).playOnce()
//     jazzSound.getComponent(AudioSource).volume = 1.0
//   } else {
//     noSign.show(1)
//     accessDeniedSound.getComponent(AudioSource).playOnce()
//     jazzMuffledSound.getComponent(AudioSource).volume = 1.0
//   }
// }
