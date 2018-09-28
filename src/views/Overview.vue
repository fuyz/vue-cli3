<template>
    <el-container class="guideWrap">
        <el-container>
            <el-aside class="aside">
                <ul class="sidebar-links">
                    <li><a href="/guide/" class="sidebar-link">简介</a></li>
                    <li><a href="/guide/installation.html" class="active sidebar-link">安装</a></li>
                    <li>
                        <div class="sidebar-group">
                            <p class="sidebar-heading open"><span>基础</span><!----></p>
                            <ul class="sidebar-group-items">
                                <li><a href="/guide/prototyping.html" class="sidebar-link">及时原型</a></li>
                                <li><a href="/guide/creating-a-project.html" class="sidebar-link">创建项目</a>
                                </li>
                                <li><a href="/guide/plugins-and-presets.html"
                                       class="sidebar-link">插件和预设</a></li>
                                <li><a href="/guide/cli-service.html" class="sidebar-link">CLI 服务</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div class="sidebar-group"><p class="sidebar-heading"><span>开发</span><!----></p>
                            <ul class="sidebar-group-items">
                                <li><a href="/guide/browser-compatibility.html" class="sidebar-link">浏览器兼容性</a>
                                </li>
                                <li><a href="/guide/html-and-static-assets.html" class="sidebar-link">HTML和静态资源</a>
                                </li>
                                <li><a href="/guide/css.html" class="sidebar-link">使用CSS</a></li>
                                <li><a href="/guide/webpack.html" class="sidebar-link">使用Webpack</a></li>
                                <li><a href="/guide/mode-and-env.html" class="sidebar-link">环境变量和模式</a>
                                </li>
                                <li><a href="/guide/build-targets.html" class="sidebar-link">打包</a></li>
                                <li><a href="/guide/deployment.html" class="sidebar-link">部署</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </el-aside>
            <el-main>

                <router-view/>

            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'guide',
        components: {
            HelloWorld
        }
    }
</script>
<style lang="scss">
    .aside {
        width: 200px;
        height: calc(100vh - 60px);
        border-right: 1px solid #eaecef;
        text-align: left;
        ul{
            list-style: none;
            .sidebar-heading{
                font-weight: 600;
                font-size: 1rem;
            }
            a{
                font-size: 0.9rem;
                color: #2c3e50;
                text-decoration: none;
                font-weight: 400;
                padding: 8px 0;
                display: block;
                &:hover{
                    color: #3eaf7c;
                }
            }
        }
    }
</style>
