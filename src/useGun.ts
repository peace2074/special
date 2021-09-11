import { gun, SEA, Gun }  from'./modules/gun'
const options = { gun, Gun, SEA }


/* eslint-disable no-console */
class GunDb {
  constructor(options) {

    this.init(options) /*?*/
    return this /*? */
  }

  getGun() { return this.gun }

  async init(options) {
    this.SEA = options.SEA
      ? options.SEA
      : await { SEA } from'./modules/gun'


    this.gun = options.gun
      ? options.gun
      : options.Gun
        ? options.Gun
        : await { gun } from'./modules/gun'



    return await this
  }

  async encrypt(payload='payload', key) {
    const pair = 'test' //await this.SEA.pair()
    const enc = await this.SEA.encrypt(payload, pair)/*? */
    const data = await this.SEA.sign(enc, pair)
    return await data
  }
  async decrypt(payload, key){
        const msg = await this.SEA.verify(payload, pair.pub)
    const dec = await this.SEA.decrypt(msg, pair)
  }

  async verify(payload, key) {
    const msg = await this.SEA.verify(payload, pair.pub)
    const dec = await this.decrypt(msg, pair)
    const proof = await this.SEA.work(dec, pair)
    const check = await this.SEA.work(payload, pair)
    return await proof === await check
  }
}
const goodOptions = !!(options.gun && options.Gun) /*? */
const useGun /*? */= {
  Gun,
  GunDb: new GunDb(goodOptions ? options : {}),
}

export { useGun }
