<template>
    <div class="createWrap">
        <h3 id="instant-prototyping"><a href="#instant-prototyping" aria-hidden="true" class="header-anchor">#</a>浏览器兼容性
        </h3>
        <div class="section">
            <h3 id="vue-create"><a href="#vue-create" aria-hidden="true" class="header-anchor">#</a>browserslist</h3>
            <div class="line"></div>
            <p>您会注意到package.json中的browserslist字段（或单独的.browserslistrc文件），指定项目所针对的一系列浏览器。@ babel / preset-env和autoprefixer将使用此值自动确定需要转换的JavaScript功能以及所需的CSS供应商前缀。</p>
            <p>请参阅 <a class="outLink" href="https://github.com/browserslist/browserslist" target="_blank">此处<i class="el-icon-question"></i></a> 了解如何指定浏览器范围。</p>
           
            <h3><a href=""></a>Polyfills</h3>
            <div class="line"></div>
            <p>默认的Vue CLI项目使用 <code>@ vue / babel-preset-app</code> ，它使用 <code>@ babel / preset-env</code> 和 <code>browserslist</code>配置来确定项目所需的Polyfill。</p>
            <p>默认情况下，它将 <code>useBuiltIns：'usage'</code>传递给 <code>@ babel / preset-env</code>，它会根据源代码中使用的语言功能自动检测所需的polyfill。这样可确保最终捆绑包中仅包含最少量的polyfills。但是，这也意味着如果您的某个依赖项对polyfill有特定要求，默认情况下Babel将无法检测到它。</p>
            <p>如果您的某个依赖项需要polyfill，您有几个选项：</p>
            <ol>
                <li>如果依赖项是在目标环境不支持的ES版本中编写的：将该依赖项添加到 <code>vue.config.js</code>中的 <code>transpileDependencies</code>选项。这将为该依赖性启用语法转换和基于使用情况的polyfill检测。</li>
                <li>如果相关性发布ES5代码并明确列出所需的polyfill：您可以使用 <code>@ vue / babel-preset-app</code>的polyfills选项预先包含所需的polyfill请注意，默认情况下包含es6.promise，因为libs依赖Promise是很常见的。
                    <div class="bg-dark codeWrap">
                        <pre>
                            <code>
// babel.config.js
module.exports = {
  presets: [
    ['@vue/app', {
      polyfills: [
        'es6.promise',
        'es6.symbol'
      ]
    }]
  ]
}
                            </code>
                        </pre>
                    </div>
                </li>
                <li>如果依赖项包含ES5代码，但使用ES6 +功能而未明确列出polyfill要求（例如Vuetify）：使用useBuiltIns：'entry'然后将import'@ babel / polyfill'添加到您的条目文件中。这将根据您的browserslist目标导入所有polyfill，这样您就不必再担心依赖性polyfill，但可能会增加一些未使用的polyfill的最终包大小。</li>

            </ol>
            <p>有关详细信息，请参阅@ babel-preset / env docs。</p>

        </div>
        <div class="section">
            <h3 id="using-the-ugi"><a href="#using-the-ugi" aria-hidden="true" class="header-anchor">#</a>Modern Mode</h3>
            <div class="line"></div>
            <p>使用Babel，我们可以利用ES2015 +中的所有最新语言功能，但这也意味着我们必须提供转换和polyfilled bundle以支持旧版浏览器。这些转换后的包通常比原始的本机ES2015 +代码更冗长，并且解析和运行速度也更慢。鉴于今天大多数现代浏览器都对原生ES2015提供了不错的支持，我们不得不向这些浏览器发送更重，效率更低的代码，因为我们必须支持旧版本。</p>
            <p>Vue CLI提供“现代模式”来帮助您解决此问题。使用以下命令构建生产时：</p>
            <div class="bg-dark codeWrap">
                        <pre>
<code>
vue-cli-service build --modern
</code>
                        </pre>
            </div>
            <p>Vue CLI将生成两个版本的应用程序：一个针对支持ES模块的现代浏览器的现代软件包，以及一个针对不支持ES模块的旧版浏览器的旧版软件包。</p>
            <p>但很酷的部分是没有特殊的部署要求。生成的HTML文件自动采用Phillip Walton的优秀帖子中讨论的技术：</p>
            <ul>
                <li>
                    <p>现代捆绑包在支持它的浏览器中加载 <code>&lt;script type =“module” &gt;</code> ;它们也是使用 <code> &lt;link rel =“modulepreload”&gt;</code> 预先加载的。</p>
                </li>
                <li><p>旧版软件包加载了 <code>&lt;script nomodule&gt;</code> ，支持ES模块的浏览器会忽略它。</p></li>
                <li><p>还会自动注入Safari 10中 <code>&lt;script nomodule&gt;</code> 的修复程序。</p></li>
                <li><p>对于Hello World应用程序，现代捆绑包已经缩小了16％。在生产中，现代捆绑包通常会显着加快解析和评估速度，从而提高应用程序的加载性能。</p></li>
            </ul>

        </div>


    </div>
</template>

<script>

    export default {
        name: 'install',
        created: () => {

        }
    }
</script>
<style scoped lang="scss">
    .createWrap {
        width: 800px;
        margin: 0 auto;
        padding: 0 100px;
        .section {
            margin-top: 30px;
            h3 {
                text-align: left;
                margin-top: 20px;
            }
            h4 {
                margin: 50px 0 20px 0;
            }
            li{
                line-height: 1.8em;
                p{
                    text-indent: 0;
                }
            }
        }

    }
</style>
