<template>
    <div class="createWrap">
        <h2 id="instant-prototyping"><a href="#instant-prototyping" aria-hidden="true" class="header-anchor">#</a>Build
            Targets</h2>
        <p>运行vue-cli-service构建时，可以通过--target选项指定不同的构建目标。这允许您使用相同的代码库为不同的用例生成不同的构建。</p>

        <div class="section">
            <h3>App</h3>
            <div class="line"></div>
            <p>App是默认的构建目标。在这种模式下：</p>
            <ul>
                <li>index.html包含资产和资源提示注入</li>
                <li>供应商库拆分为单独的块以实现更好的缓存</li>
                <li>10kb以下的静态资产被内联到JavaScript中</li>
                <li>公共中的静态资产被复制到输出目录中</li>
            </ul>

            <h3>Library</h3>
            <div class="line"></div>
            <div class="bg-info tipBox">
                <div >关于Vue依赖关系的注释</div>
                <p>
                    在lib模式下，Vue被外部化。这意味着即使您的代码导入了Vue，捆绑包也不会捆绑Vue。如果通过bundler使用lib，它将尝试通过bundler加载Vue作为依赖项;否则，它会回退到全局Vue变量。</p>
            </div>
            <p>您可以使用构建单个条目作为库</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
vue-cli-service build --target lib --name myLib [entry]

File                     Size                     Gzipped

dist/myLib.umd.min.js    13.28 kb                 8.42 kb
dist/myLib.umd.js        20.95 kb                 10.22 kb
dist/myLib.common.js     20.57 kb                 10.09 kb
dist/myLib.css           0.33 kb                  0.23 kb
                    </code>
                </pre>
            </div>

            <p>该条目可以是.js或.vue文件。如果未指定任何条目，则将使用src / App.vue。</p>
            <p>lib构建输出： </p>
            <ul>
                <li>dist / myLib.common.js：用于通过捆绑包消费的CommonJS捆绑包（遗憾的是，webpack目前还不支持捆绑包的ES模块输出格式）</li>
                <li>dist / myLib.umd.js：一种UMD包，可直接在浏览器或AMD加载器中使用</li>
                <li>dist / myLib.umd.min.js：UMD版本的缩小版本。</li>
                <li>dist / myLib.css：提取的CSS文件（可以通过在vue.config.js中设置css：{extract：false}强制内联）</li>
            </ul>
            <h4>Vue与JS / TS条目文件</h4>
            <p>使用.vue文件作为条目时，库将直接公开Vue组件本身，因为该组件始终是默认导出。</p>
            <p>但是，当您使用.js或.ts文件作为条目时，它可能包含命名导出，因此您的库将作为模块公开。这意味着您的库的默认导出必须在UMD构建中作为window.yourLib.default访问，或者作为const
                myLib = require（'mylib'）访问。默认在CommonJS构建中。如果您没有任何已命名的导出并希望直接公开默认导出，则可以在vue.config.js中使用以下webpack配置：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}
                    </code>
                </pre>
            </div>

            <h3>Web Component</h3>
            <div class="line"></div>
            <div class="tipBox bg-info">
                <div>兼容性说明 </div>
                <p>Web组件模式不支持IE11及更低版本。更多细节</p>
            </div>
            <div class="tipBox bg-info">
                <div>关于Vue依赖关系的注释 </div>
                <p>在Web组件模式下，Vue被外部化。这意味着即使您的代码导入了Vue，捆绑包也不会捆绑Vue。该捆绑包将假设Vue在主机页面上可用作全局变量。</p>
            </div>
            <p>您可以使用构建单个条目作为Web组件</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
vue-cli-service build --target wc --name my-element [entry]
                    </code>
                </pre>
            </div>
            <p>请注意，该条目应为* .vue文件。 Vue CLI将自动将组件包装并注册为Web组件，并且不需要在main.js中自行完成。您可以将main.js用作演示应用程序，仅用于开发。</p>
            <p>构建将生成一个单独的JavaScript文件（及其缩小版本），内嵌所有内容。该脚本包含在页面中时，会注册 my-element 自定义元素，该元素使用@ vue /
                web-component-wrapper包装目标Vue组件。包装器自动代理属性，属性，事件和插槽。有关更多详细信息，请参阅@ vue / web-component-wrapper的文档。</p>
            <p>请注意，捆绑包依赖于Vue在页面上全局可用。 此模式允许组件的使用者将Vue组件用作普通DOM元素</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
&lt; script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
&lt; script src="path/to/my-element.js"&gt;&lt;/script&gt;
&lt;!-- use in plain HTML, or in any other framework --&gt;
&lt; my-element&gt;&lt;/my-element &gt;
                    </code>
                </pre>
            </div>
            <h4>注册多个Web组件的捆绑包 </h4>
            <p>构建Web组件包时，您还可以使用glob作为条目来定位多个组件：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
vue-cli-service build --target wc --name foo 'src/components/*.vue'
                    </code>
                </pre>
            </div>
            <p>构建多个Web组件时， - name将用作前缀，自定义元素名称将从组件文件名中推断出来。例如，使用--name foo和名为HelloWorld.vue的组件，生成的自定义元素将注册为&lt;foo-hello-world&gt;。</p>


            <h4>异步Web组件</h4>
            <p>
                当定位多个Web组件时，捆绑包可能会变得非常大，并且用户可能只使用捆绑包中注册的一些组件。异步Web组件模式生成一个代码拆分包，其中包含一个小的条目文件，该文件提供所有组件之间的共享运行时，并预先注册所有自定义元素。然后，只有在页面上使用相应自定义元素的实例时，才会按需提取组件的实际实现：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
vue-cli-service build --target wc-async --name foo 'src/components/*.vue'

File                Size                        Gzipped

dist/foo.0.min.js    12.80 kb                    8.09 kb
dist/foo.min.js      7.45 kb                     3.17 kb
dist/foo.1.min.js    2.91 kb                     1.02 kb
dist/foo.js          22.51 kb                    6.67 kb
dist/foo.0.js        17.27 kb                    8.83 kb
dist/foo.1.js        5.24 kb                     1.64 kb
                    </code>
                </pre>
            </div>
            <p>现在在页面上，用户只需要包含Vue和条目文件：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
&lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;
&lt;script src="path/to/foo.min.js"&gt;&lt;/script&gt;
&lt;!-- foo-one's implementation chunk is auto fetched when it's used --&gt;
&lt;foo-one>&gt;&lt;/foo-one&gt;
                    </code>
                </pre>
            </div>

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
                margin: 30px 0 10px 0;
            }
            li {
                line-height: 1.8em;
                p {
                    text-indent: 0;
                }
            }
        }

    }
</style>
