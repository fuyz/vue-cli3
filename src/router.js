import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Guide from './views/Guide.vue'
import Overview from './views/Overview.vue'
import Install from './views/Install.vue'

import Basics_instant from './views/Basics-instant.vue'
import Basics_create from './views/Basics-create.vue'
import Basics_plugins from './views/Basics-plugins.vue'
import Basics_service from './views/Basics-service.vue'

import Development_compatibility from './views/Development-compatibility'
import Development_static from './views/Development-static'
import Development_css from './views/Development-css'
import Development_webpack from './views/Development-webpack'
import Development_env from './views/Development-env'
import Development_build from './views/Development-build'
import Development_deployment from './views/Development-deployment'
import Config from './views/Config.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/guide',
            name: 'guide',
            component: Guide,
            children: [
                {
                    path: '/',
                    component: Overview
                },
                {
                    path: 'overview',
                    component: Overview,
                },
                {
                    path: 'install',
                    component: Install,
                },
                {
                    path: 'Basics_instant',
                    component: Basics_instant
                },
                {
                    path: 'Basics_create',
                    component: Basics_create
                },
                {
                    path: 'Basics_plugins',
                    component: Basics_plugins
                },
                {
                    path: 'Basics_service',
                    component: Basics_service
                },
                {
                    path: 'Development_compatibility',
                    component: Development_compatibility
                },
                {
                    path: 'Development_static',
                    component: Development_static
                },
                {
                    path: 'Development_css',
                    component: Development_css
                }, {
                    path: 'Development_webpack',
                    component: Development_webpack
                }, {
                    path: 'Development_env',
                    component: Development_env
                },
                {
                    path: 'Development_build',
                    component: Development_build
                },
                {
                    path: 'Development_deployment',
                    component: Development_deployment
                }

            ]
        },
        {
            path: '/config',
            name: 'config',
            component: Config
        }
    ]
})
