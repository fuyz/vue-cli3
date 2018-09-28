<template>
    <el-container class="guideWrap">
        <el-aside class="aside">
            <ul class="sidebar-links">
                <li>
                    <router-link to="/guide/overview">简介</router-link>
                </li>
                <li>
                    <router-link class="sidebar-link" to="/guide/install">安装</router-link>
                    <div class="sidebar-group">
                        <div class="sidebar-heading open"><span>基础</span><!----></div>
                        <ul class="sidebar-group-items">
                            <li>
                                <router-link class="sidebar-link" to="/guide/Basics_instant" @click.native="toggleNav">
                                    及时原型
                                </router-link>
                            </li>
                            <li>
                                <router-link class="sidebar-link" to="/guide/Basics_create" @click.native="toggleNav">
                                    创建项目
                                </router-link>
                                <ul class="third-sidebar">
                                    <li>
                                        <a href="#vue-create">vue create</a>
                                    </li>
                                    <li>
                                        <a href="#using-the-ugi">UGI的使用</a>
                                    </li>
                                    <li>
                                        <a href="#pull-2.x">拉2.x模板（遗留）</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <router-link class="sidebar-link" to="/guide/Basics_plugins" @click.native="toggleNav">
                                    插件和预设
                                </router-link>
                                <ul class="third-sidebar">
                                    <li>
                                        <a href="#plugins">插件</a>
                                    </li>
                                    <li>
                                        <a href="#preset">预设</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <router-link class="sidebar-link" to="/guide/Basics_service" @click.native="toggleNav">
                                    CLI 服务
                                </router-link>
                                <ul class="third-sidebar">
                                    <li>
                                        <a href="#using-the-binary">使用二进制</a>
                                    </li>
                                    <li>
                                        <a href="#vue-cli-service-serve">vue-cli-service serve</a>
                                    </li>
                                    <li>
                                        <a href="#vue-cli-service-build">vue-cli-service build</a>
                                    </li>
                                    <li>
                                        <a href="#vue-cli-service-inspect">vue-cli-service inspect</a>
                                    </li>
                                    <li>
                                        <a href="#checking-all-available-commands">检查所有可用命令</a>
                                    </li>
                                    <li>
                                        <a href="#caching-and-parallelization">缓存和并行化</a>
                                    </li>
                                    <li>
                                        <a href="#git-hooks">Git Hooks</a>
                                    </li>
                                    <li>
                                        <a href="#configuration-without-ejecting">没有弹出的配置</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="sidebar-group">
                        <div class="sidebar-heading"><span>开发</span><!----></div>
                        <ul class="sidebar-group-items">
                            <li>
                                <router-link class="sidebar-link" to="/guide/Development_compatibility"
                                             @click.native="toggleNav">浏览器兼容性
                                </router-link>
                            </li>
                            <li>
                                <router-link class="sidebar-link" to="/guide/Development_static"
                                             @click.native="toggleNav">HTML和静态资源
                                </router-link>
                            </li>
                            <li>
                                <router-link class="sidebar-link" to="/guide/Development_css" @click.native="toggleNav">
                                    使用CSS
                                </router-link>
                            </li>
                            <li>
                                <router-link class="sidebar-link" to="/guide/Development_webpack"
                                             @click.native="toggleNav">使用Webpack
                                </router-link>
                            </li>
                            <li>
                                <router-link class="sidebar-link" to="/guide/Development_env" @click.native="toggleNav">
                                    环境变量和模式
                                </router-link>
                            </li>
                            <li>
                                <router-link class="sidebar-link" to="/guide/Development_build"
                                             @click.native="toggleNav">打包
                                </router-link>
                            </li>
                            <li>
                                <router-link class="sidebar-link" to="/guide/Development_deployment"
                                             @click.native="toggleNav">部署
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </el-aside>
        <el-main class="guideMain">

            <router-view></router-view>

        </el-main>
    </el-container>
</template>

<script>
    /* eslint-disable */
    import $ from 'jquery'

    export default {
        // name: 'guide',
        created: function () {
        },
        methods: {
            toggleNav: function (e) {
                $('.third-sidebar').hide();
                $(e.target).siblings('.third-sidebar').show();

                setTimeout(function () {
                    $('.guideMain').scrollTop = 0;

                }, 1000)

            }
        }
    }
</script>
<style lang="scss">
    .guideWrap {
        width: 100%;
        height: calc(100vh - 80px);
    }

    .aside {
        height: 100%;
        border-right: 1px solid #eaecef;
        text-align: left;
        ul {
            list-style: none;
            .sidebar-heading {
                font-weight: 600;
                font-size: 1rem;
            }
            .router-link-active {
                color: #42b983;
                border-right: 5px solid #3eaf7c;
            }
            .third-sidebar {
                display: none;
            }
            a {
                font-size: 0.9rem;
                color: #2c3e50;
                text-decoration: none;
                font-weight: 400;
                padding: 8px 0;
                display: block;
                &:hover {
                    color: #3eaf7c;
                }
            }
        }
    }

    .guideMain {
        padding: 20px 0 100px!important;
        height: calc(100vh - 60px);
        overflow-y: auto;
    }
</style>
