<template>
    <el-container class="guideWrap">
        <el-aside class="aside">
            <ul class="sidebar-links">
                <li>
                    <router-link to="/guide/overview">Global CLI Config</router-link>
                </li>
                <li>
                    <router-link to="/guide/overview">Target Browsers</router-link>
                </li>
                <li>
                    <a class="sidebar-link">vue.config.js</a>
                    <div class="sidebar-group">
                        <ul class="sidebar-group-items">
                            <li><a href="#vue-create">baseUrl</a></li>
                            <li><a href="#using-the-ugi">outputDir</a></li>
                            <li><a href="#pull-2.x">assetsDir</a></li>
                            <li><a href="#vue-create">pages</a></li>
                            <li><a href="#using-the-ugi">lintOnSave</a></li>
                            <li><a href="#pull-2.x"> runtimeCompiler</a></li>
                            <li><a href="#vue-create">transpileDependencies</a></li>
                            <li><a href="#using-the-ugi">productionSourceMap</a></li>
                            <li><a href="#pull-2.x">configureWebpack</a></li>
                            <li><a href="#vue-create">chainWebpack</a></li>
                            <li><a href="#using-the-ugi">css.modules</a></li>
                            <li><a href="#pull-2.x">css.extract</a></li>
                            <li><a href="#pull-2.x">css.sourceMap</a></li>
                            <li><a href="#pull-2.x">css.loaderOptions</a></li>
                            <li><a href="#pull-2.x">devServer</a></li>
                            <li><a href="#pull-2.x">devServer.proxy</a></li>
                            <li><a href="#pull-2.x">parallel</a></li>
                            <li><a href="#pull-2.x">pwa</a></li>
                            <li><a href="#pull-2.x">pluginOptions</a></li>

                        </ul>
                    </div>
                </li>
                <li><a href="#pull-2.x">Babel</a></li>
                <li><a href="#pull-2.x">ESLint</a></li>
                <li><a href="#pull-2.x">TypeScript</a></li>
                <li>
                    <a href="">Unit Testing</a>
                    <ul class="sidebar-group-items">
                        <li><a href="#pull-2.x">Jest</a></li>
                        <li><a href="#pull-2.x">Mocha (via mocha-webpack)</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">E2E Testing</a>
                    <ul class="sidebar-group-items">
                        <li><a href="#pull-2.x">Cypress</a></li>
                        <li><a href="#pull-2.x">Nightwatch</a></li>
                    </ul>
                </li>
                <li>
                    <a href="">Example Configurations</a>
                    <ul class="sidebar-group-items">
                        <li><a href="#pull-2.x">Disable Hashed Filenames</a></li>
                        <li><a href="#pull-2.x">Disable Generating index.html</a></li>
                    </ul>
                </li>
            </ul>
        </el-aside>
        <el-main class="guideMain">
            loading...
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
                padding: 5px 0;
                display: block;
                &:hover {
                    color: #3eaf7c;
                }
            }
        }
    }

    .guideMain {
        padding: 20px 0 20px;
        height: calc(100vh - 60px);
        overflow-y: auto;
    }
</style>
