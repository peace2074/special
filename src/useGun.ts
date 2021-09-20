import { gun, SEA, Gun } from './modules/gun'

type _gun = typeof gun
type _SEA = typeof SEA
type _Gun = typeof Gun

interface _readyOptions {
  gun: _gun
  SEA: _SEA
  Gun: _Gun
}
const readyOptions: _readyOptions = { gun, SEA, Gun }

interface useGun {
  gun: _gun
  SEA: _SEA
  Gun: _Gun
  options: _readyOptions|{}
}

class UseGun implements useGun {
  options = {}
  gun = gun
  SEA = SEA
  Gun = Gun
  lib = {
    gun,
    SEA,
    Gun,
  }

  Constructor() {
    this.lib = { ...readyOptions }
    return this.lib
  }

  getGun = () => this.lib.gun

  // Self.encrypt = async function(payload: string|[]|{}, key: string) {
  //   const pair = await this.SEA.pair()
  //   const enc = await this.SEA.encrypt(payload, key)/* ? */
  //   const data = await this.SEA.sign(enc, pair)
  //   return await data
  // }
  // Self.decrypt = async function(payload: string|[]|{}, pub: string) {
  //   const msg = await this.SEA.verify(payload, pub)
  //   const dec = await this.SEA.decrypt(msg, pub)
  //   return dec
  // }

  // useGun.prototype.verify = async function(payload: string|[]|{}, key) {
  //   const msg = await this.SEA.verify(payload, pair.pub)
  //   const dec = await this.decrypt(msg, pair)
  //   const proof = await this.SEA.work(dec, pair)
  //   const check = await this.SEA.work(payload, pair)
  //   return await proof === await check
  // }
}

export { UseGun }
