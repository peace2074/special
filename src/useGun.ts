const { gun, SEA, Gun } = import('./modules/gun')
const options
   = {
     gun,
     Gun,
     SEA,
   }

/* eslint-disable no-console */
class GunDb {
  constructor(options) {
    this.init(options)
    return this
  }

  getGun() { return this.gun }

  async init(options) {
    this.SEA = options.SEA
      ? options.SEA
      : import('gun/sea')

    this.gun = options.gun
      ? options.gun
      : options.Gun
        ? options.Gun
        : import('gun/gun')

    return this
  }

  async encrypt(payload) {
    const pair = await this.SEA.pair()
    const enc = await this.SEA.encrypt(payload, pair)
    const data = await this.SEA.sign(enc, pair)
    return await data
  }

  async verify(payload) {
    const msg = await this.SEA.verify(payload, pair.pub)
    const dec = await this.SEA.decrypt(msg, pair)
    const proof = await this.SEA.work(dec, pair)
    const check = await this.SEA.work(payload, pair)
    return await proof === await check
  }
}
const goodOptions = !!(options.gun && options.Gun)
const useGun = {
  Gun,
  GunDb: new GunDb(goodOptions ? options : {}),
}

export { useGun }
