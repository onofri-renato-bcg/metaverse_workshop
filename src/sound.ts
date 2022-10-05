export class Sound extends Entity {
    constructor(audio: AudioClip, loop: boolean, play: boolean = false, transform?: Vector3) {
      super()
      engine.addEntity(this)
      this.addComponent(new AudioSource(audio))
      this.getComponent(AudioSource).loop = loop
      this.getComponent(AudioSource).playing = play 
      this.addComponent(new Transform())
  
      if (transform) {
        this.getComponent(Transform).position = transform
      } else {
        this.setParent(Attachable.AVATAR)
      }
    }
  
  }
