import router from './router'
import Cookies from 'js-cookie'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (Cookies.get('token')) {
    next()
    // if (to.path === '/login') {
    //   next({ path: '/' })
    // } else {
    //   if (store.getters.roles.length === 0) {
    //     store.dispatch('GetInfo').then(res => { // 拉取用户信息
    //       next()
    //     }).catch((err) => {
    //       store.dispatch('FedLogOut').then(() => {
    //         Message.error(err || 'Verification failed, please login again')
    //         next({ path: '/' })
    //       })
    //     })
    //   }
    //    else {
    //     next()
    //   }
    // }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})

router.afterEach(() => {
})
