import Gun from 'gun/gun'
import('gun/sea')
const VueGun = import('vue-gun')
const options = { peers: ['http://localhost:4000/gun','http://gunjs.herokuapp.com:9000/gun'] }
const gun = Gun(options)
const SEA = gun.SEA
export { gun, SEA, Gun }
export default gun
export const install: GunModule = ({ app }, options) => {
  if (options && options.gun)
    app.prototype.$gun = options.gun
  app.use(VueGun, { gun })
}

// const options = { peers: ['http://gunjs.herokuapp.com:9000/gun'] }
