import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import search from './modules/search'
import permission from './modules/permission'
import VuexPersist from 'vuex-persist'


Vue.use(Vuex)

const vuexLocal = new VuexPersist({
  storage: window.localStorage // 可选，sessionStorage/indexDB
})

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    permission,
    search
  },
  getters,
  plugins: [vuexLocal.plugin]
})

export default store
