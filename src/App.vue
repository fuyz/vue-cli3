<template>
    <div id="app">
        <el-container>

            <el-header class="nav">

                <el-row type="flex" justify="space-between">
                    <el-col :span="5">
                        <router-link id="logo" to="/">Vue CLI 3（中文版）</router-link>
                    </el-col>
                    <el-col :span="15">
                        <div id="navBar">
                            <el-row :gutter="20" type="flex" justify="end">
                                <el-col :span="3">
                                    <div class="grid-content bg-purple">
                                        <router-link class="navItem" to="/guide">指南</router-link>
                                    </div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="grid-content bg-purple">
                                        <router-link to="/config" class="navItem">配置参考</router-link>
                                    </div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="grid-content bg-purple" style="cursor: not-allowed">
                                        <span class="navItem">插件开发</span>
                                    </div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="grid-content bg-purple">
                                        <span class="navItem">插件</span>
                                        <ul class="sec-nav">
                                            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">Babel
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px"
                                                     y="0px" viewBox="0 0 100 100" width="15" height="15"
                                                     class="icon outbound">
                                                    <path fill="currentColor"
                                                          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                                                    <polygon fill="currentColor"
                                                             points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                                                </svg>
                                            </a></li>
                                            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank">Typescript
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px"
                                                     y="0px" viewBox="0 0 100 100" width="15" height="15"
                                                     class="icon outbound">
                                                    <path fill="currentColor"
                                                          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                                                    <polygon fill="currentColor"
                                                             points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                                                </svg>
                                            </a></li>
                                            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank">ESLint
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px"
                                                     y="0px" viewBox="0 0 100 100" width="15" height="15"
                                                     class="icon outbound">
                                                    <path fill="currentColor"
                                                          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                                                    <polygon fill="currentColor"
                                                             points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                                                </svg>
                                            </a></li>
                                            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank">PWA
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px"
                                                     y="0px" viewBox="0 0 100 100" width="15" height="15"
                                                     class="icon outbound">
                                                    <path fill="currentColor"
                                                          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                                                    <polygon fill="currentColor"
                                                             points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                                                </svg>
                                            </a></li>
                                            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank">Jest
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px"
                                                     y="0px" viewBox="0 0 100 100" width="15" height="15"
                                                     class="icon outbound">
                                                    <path fill="currentColor"
                                                          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                                                    <polygon fill="currentColor"
                                                             points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                                                </svg>
                                            </a></li>
                                            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha" target="_blank">Mocha
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px"
                                                     y="0px" viewBox="0 0 100 100" width="15" height="15"
                                                     class="icon outbound">
                                                    <path fill="currentColor"
                                                          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                                                    <polygon fill="currentColor"
                                                             points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                                                </svg>
                                            </a></li>
                                            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress" target="_blank">Cypress
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px"
                                                     y="0px" viewBox="0 0 100 100" width="15" height="15"
                                                     class="icon outbound">
                                                    <path fill="currentColor"
                                                          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                                                    <polygon fill="currentColor"
                                                             points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                                                </svg>
                                            </a></li>
                                            <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch" target="_blank">Nightwatch
                                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px"
                                                     y="0px" viewBox="0 0 100 100" width="15" height="15"
                                                     class="icon outbound">
                                                    <path fill="currentColor"
                                                          d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                                                    <polygon fill="currentColor"
                                                             points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                                                </svg>
                                            </a></li>
                                        </ul>
                                    </div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="grid-content bg-purple">
                                        <a href="https://github.com/vuejs/vue-cli/blob/dev/CHANGELOG.md" target="_blank"
                                           class="navItem">更改日志
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px"
                                                 viewBox="0 0 100 100" width="15" height="15" class="icon outbound">
                                                <path fill="currentColor"
                                                      d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                                                <polygon fill="currentColor"
                                                         points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                                            </svg>
                                        </a>
                                    </div>
                                </el-col>
                                <el-col :span="3">
                                    <div class="grid-content bg-purple">
                                        <a href="https://github.com/vuejs/vue-cli" target="_blank" class="navItem">GitHub
                                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px"
                                                 viewBox="0 0 100 100" width="15" height="15" class="icon outbound">
                                                <path fill="currentColor"
                                                      d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path>
                                                <polygon fill="currentColor"
                                                         points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon>
                                            </svg>
                                        </a>
                                    </div>
                                </el-col>

                            </el-row>
                        </div>
                    </el-col>
                </el-row>

            </el-header>

            <el-main class="main">

                <router-view></router-view>

            </el-main>

        </el-container>


    </div>
</template>

<script>
    /* eslint-disable */
    import $ from 'jquery'

    export default {
        name: 'app',
        mounted: function () {
            this.$nextTick(function () {
                $('#navBar .grid-content').click(function () {
                    $('#navBar a').removeClass('on');
                    $(this).find('a').addClass('on');
                })
            })

        },
        methods: {}
    }
</script>
<style lang="scss" >
    h1 {
        font-size: 3rem;
        margin: 0;
    }

    h2 {
        font-size: 2rem;
        margin: 0;

    }

    h3 {
        font-size: 1.5rem;
        margin: 0;

    }

    h4 {
        font-size: 1.2rem;
        margin: 0;

    }

    ul {
        padding-left: 20px;
        p{
            text-indent: 0;
        }
    }

    p {
        margin: 5px 0;
        line-height: 1.8em;
        text-indent: 2em;
    }

    i {
        text-indent: 0;
        margin: 0 2px;
    }

    .tipBox {
        box-sizing: border-box;
        font-size: 14px;
        text-align: left;
        padding: 10px 20px;
        margin: 15px 0;
        border-left-width: 8px;
        border-left-style: solid;
        h3{
            margin: 0;
            font-size: 1.2rem;
        }
    }

    .bg-warning {
        background-color: rgba(255, 229, 100, .3);
        color: #6b5900;
        border-color: #e7c000;
    }

    .bg-danger {
        background-color: #ffe6e6;
        color: #4d0000;
        border-color: #c00;
    }

    .bg-info {
        background-color: #f3f5f7;
        border-color: #42b983;
    }

    .codeWrap.bg-dark {
        margin: 20px 0;
        padding: 0 20px;
        font-size: 14px;
        border-radius: 10px;
        background-color: #282c34;
        color: white;
        pre {
            margin: 0;
            overflow: auto;
            p {
                margin: 0;
            }
            code {
                color: white;
                font-size: 1em;
            }
        }

    }

    code {
        color: #476582;
        padding: .25rem .5rem;
        margin: 0;
        font-size: .85em;
        background-color: rgba(27, 31, 35, .05);
        border-radius: 3px;
    }

    a.header-anchor {
        font-size: .85em;
        float: left;
        margin-left: -.87em;
        padding-right: .23em;
        margin-top: .125em;
        opacity: 0;
        color: #3eaf7c;
    }

    h1:hover .header-anchor, h2:hover .header-anchor, h3:hover .header-anchor, h4:hover .header-anchor, h5:hover .header-anchor, h6:hover .header-anchor {
        opacity: 1;
    }

    .outLink {
        color: #3eaf7c;
        font-size: 14px;
        margin: 0 5px;
    }

    .line {
        border-bottom: 1px solid #eaecef;
    }

    .imgWrap {
        width: 100%;
        margin: 30px 0;
        padding: 0 100px;
        box-sizing: border-box;
        img {
            width: 100%;
        }
    }

    #app {
        position: relative;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        .nav {
            position: fixed;
            top: 0;
            z-index: 100;
            width: 100%;
            background: white;
            min-width: 1300px;
            line-height: 60px;
            border-bottom: 1px solid #eaecef;
            text-align: center;
            #logo {
                font-weight: 700;
                font-size: 20px;
            }
            #navBar {
                color: #2c3e50;
                font-weight: 400;
                .grid-content {
                    position: relative;
                    cursor: pointer;
                    &:hover > a {
                        border-bottom: 2px solid #42b983;
                    }
                    &:hover .sec-nav{
                        display: block;
                    }
                }
                .navItem {
                    padding-bottom: 3px;
                    &.router-link-exact-active {
                        border-bottom: 2px solid #42b983;
                    }
                    &.on {
                        border-bottom: 2px solid #42b983;
                    }
                    svg {
                        color: #aaa;
                        font-size: 14px;
                        margin: 0px;
                    }
                }
                .sec-nav {
                    display: none;
                    position: absolute;
                    top: 50px;
                    list-style: none;
                    border: 1px solid #eaecef;
                    background: white;
                    border-radius: 5px;
                    padding: 0 10px;
                    margin: 0;
                    width: 110px;
                    li {
                        line-height: 30px;
                        text-align: left;
                        a{
                            font-size: 14px;
                        }
                        &:hover>a{
                            color: #42b983;
                        }
                    }
                }
            }
            a {
                color: #2c3e50;
                text-decoration: none;
            }
        }
        .main {
            padding-top: 60px;
            padding-right: 0;

            .section {
                margin-top: 30px;
                h3 {
                    text-align: left;
                    /*margin-bottom: 20px;*/
                }
                h4 {
                    margin: 20px 0 10px 0;
                }
                p {
                    margin: 5px 0;
                    /*text-indent: 2em;*/
                }
            }

        }
    }


</style>
