<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h3 style="color: #6a8bad">🛠️Standard Tooling for Vue.js Development</h3>
        <div>
            <router-link to="/guide">
                <el-button type="success">Get Started<i class="el-icon-arrow-right el-icon--right"></i></el-button>
            </router-link>
        </div>
        <div id="sponsoredBy">
            <div>
                This project is sponsored by
                <img src="https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/bit.png"
                     alt="">
            </div>
        </div>
        <div class="line"></div>

        <div class="feature">
            <el-row :gutter="10" type="flex" justify="space-around">
                <el-col :span="6">
                    <h4>功能丰富</h4>
                    <p>对Babel，TypeScript，ESLint，PostCSS，PWA，单元测试和端到端测试的开箱即用支持</p>
                </el-col>
                <el-col :span="6">
                    <h4>扩展</h4>
                    <p>插件系统允许社区构建和共享可重用的解决方案以满足常见需求。</p>
                </el-col>
                <el-col :span="6">
                    <h4>不需要弹出</h4>
                    <p>Vue CLI完全可配置，无需弹出。这使您的项目从长远来看能够保持最新状态。</p>
                </el-col>
            </el-row>
            <el-row :gutter="10" type="flex" justify="space-around">
                <el-col :span="6">
                    <h4>图形用户界面</h4>
                    <p>通过附带的图形用户界面创建，开发和管理您的项目</p>
                </el-col>
                <el-col :span="6">
                    <h4>即时原型</h4>
                    <p>使用单个Vue文件即时创建新想法。</p>
                </el-col>
                <el-col :span="6">
                    <h4>未来就绪</h4>
                    <p>轻松地为现代浏览器提供本机ES2015代码，或将您的vue组件构建为本机Web组件。</p>
                </el-col>
            </el-row>

        </div>

        <div id="getStart">
            <h2>入门</h2>
            <div class="line"></div>
            <el-row>
                <el-col :span="24">
                    <h4>安装:</h4>
                    <div class="bg-dark codeWrap">
                        <pre>
                            <code>
                                <p>npm install -g @vue/cli</p>
                                <p># OR</p>
                                <p>yarn global add @vue/cli</p>
                            </code>
                        </pre>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <h4>创建项目:</h4>
                    <div class="bg-dark codeWrap">
                        <pre>
                            <code>
                                <p>vue create my-project</p>
                                <p># OR</p>
                                <p>vue ui</p>
                            </code>
                        </pre>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="line"></div>
        <p>麻省理工学院许可证|版权所有©2018-present Evan You</p>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    .hello {
        width: 1000px;
        margin: 0 auto;
        text-align: center;
    }

    #sponsoredBy {
        margin-bottom: 40px;
        div {
            display: inline-block;
            width: 20rem;
            padding: 10px;
            border-radius: 5px;
            background: #eee;
            margin-top: 40px;
        }
        img {
            width: 40px;
            vertical-align: middle;
        }
    }

    .feature {
        width: 1000px;
        margin: 0 auto;
        padding: 1.2rem 0;
        margin-top: 2.5rem;
        .el-row {
            margin-bottom: 40px;
        }
        p {
            text-align: left;
        }
    }

    #getStart {

        h2 {
            text-align: left;
        }
        h4 {
            text-align: left;
            margin: 20px 0;
        }
        code {
            font-size: 14px;
        }
        p {
            margin: 0;
            padding: 0 20px;
            text-align: left;
        }
    }

</style>
