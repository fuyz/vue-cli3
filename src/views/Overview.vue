<template>
    <div class="overviewWrap">
        <h3>简介</h3>
        <div class="bg-warning tipBox">
            <h3>warning</h3>
            <p>本文档适用于@ vue / cli 3.x版。对于旧的vue-cli，请看 <a class="outLink" href="https://github.com/vuejs/vue-cli/tree/v2#vue-cli--" target="_blank">这里<i class="el-icon-question"></i></a></p>
        </div>
        <div class="section">
            <p>Vue CLI是一个用于快速Vue.js开发的完整系统，提供：</p>
            <ul>
                <li>
                    <p>通过 <code>@ vue / cli</code> 进行交互式项目搭建。</p>
                </li>
                <li>
                    <p>通过 <code>@ vue / cli</code> + <code>@ vue / cli-service-global</code>进行零配置快速原型设计。</p>
                </li>
                <li>
                    <p>运行时依赖项 （<code>@ vue / cli-service</code>）：</p>
                    <ul>
                        <li>升级;</li>
                        <li>建立在webpack之上，具有合理的默认值; </li>
                        <li>可通过项目内配置文件进行配置;</li>
                        <li>通过插件可扩展</li>
                    </ul>
                </li>
                <li>
                    <p>丰富的官方插件集合了前端生态系统中的最佳工具。</p>
                </li>
                <li>
                    <p>用于创建和管理Vue.js项目的完整图形用户界面。</p>
                </li>
            </ul>
            <p>Vue CLI旨在成为Vue生态系统的标准工具基准。它确保各种构建工具与合理的默认值一起平稳运行，因此您可以专注于编写应用程序，而不是花费数天时间与配置进行争吵。同时，它仍然可以灵活地调整每个工具的配置，而无需弹出。</p>
        </div>
        <div class="section">
            <h3>系统的组成部分</h3>
            <div class="line"></div>
            <p>Vue CLI有几个移动部分 - 如果你查看源代码，你会发现它是一个包含许多单独发布的包的monorepo。</p>

            <h4>CLI</h4>
            <p>CLI（<code>@ vue / cli</code>）是全局安装的npm软件包，在终端中提供vue命令。它提供了通过vue创建快速搭建新项目的能力，或通过vue服务立即创建新想法的原型。您还可以通过vue ui使用图形用户界面管理项目。我们将在本指南的下几部分中介绍它可以做些什么。</p>

            <h4>CLI 插件</h4>
            <p>CLI插件是npm包，为您的Vue CLI项目提供可选功能，例如Babel/TypeScript转换、ESLint集成、单元测试和端到端测试。很容易发现Vue CLI插件，因为它们的名字以<code>@ vue / cli-plugin-</code> （对于内置插件）或 <code>vue-cli-plugin-</code>（对于社区插件）开头。</p>
            <p>在项目中运行 <code>vue-cli-service</code> 二进制文件时，它会自动解析并加载项目的 <code>package.json</code> 中列出的所有CLI插件。</p>
            <p>插件可以作为项目创建过程的一部分包含在内，也可以在以后添加到项目中。它们也可以分组为可重复使用的预设。我们将在插件和预设部分中更深入地讨论这些内容。</p>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'overview',
        created: function () {
        }
    }
</script>
<style scoped lang="scss">
    .overviewWrap {
        width: 800px;
        margin: 0 auto;
        padding: 0 100px;
    }
</style>
