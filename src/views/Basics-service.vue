<template>
    <div class="serviceWrap">
        <h2 id="instant-prototyping"><a href="#instant-prototyping" aria-hidden="true" class="header-anchor">#</a>CLI 服务</h2>
        <div class="section">
            <h3 id="using-the-binary"><a href="#using-the-binary" aria-hidden="true" class="header-anchor">#</a>使用二进制</h3>
            <div class="line"></div>
            <p>在Vue CLI项目中，@ vue / cli-service安装名为vue-cli-service的二进制文件。您可以在npm脚本中直接访问二进制文件作为vue-cli-service，也可以从终端访问./node_modules/.bin/vue-cli-service。</p>
            <p>这是您将在使用默认预设的项目的package.json中看到的内容：</p>
            <div class="bg-dark codeWrap">
                        <pre>
<code>
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build"
  }
}
</code>
                        </pre>
            </div>
            <p>您可以使用npm或Yarn调用这些脚本：</p>
            <div class="bg-dark codeWrap">
                        <pre>
<code>
npm run serve
# OR
yarn serve
</code>
                        </pre>
            </div>
            <div class="bg-info tipBox">
                <h3>Tip</h3>
                <p>您可以使用带有vue ui命令的GUI运行具有其他功能的脚本。</p>
            </div>
            <p>以下是GUI中的Webpack Analyzer：</p>
            <div class="imgWrap">
                <img src="../assets/ui-analyzer.png" alt="">
            </div>
        </div>

        <div class="section">
            <h3  id="vue-cli-service-serve"><a href="#vue-cli-service-serve" aria-hidden="true" class="header-anchor">#</a>vue-cli-service serve</h3>
            <div class="line"></div>
            <div class="bg-dark codeWrap">
                        <pre>
<code>
Usage: vue-cli-service serve [options] [entry]

Options:

  --open    open browser on server start
  --copy    copy url to clipboard on server start
  --mode    specify env mode (default: development)
  --host    specify host (default: 0.0.0.0)
  --port    specify port (default: 8080)
  --https   use https (default: false)
</code>
                        </pre>
            </div>
            <p>serve命令启动一个开发服务器（基于webpack-dev-server），该服务器带有热模块替换（HMR），开箱即用。</p>
            <p>除命令行标志外，还可以使用vue.config.js中的devServer字段配置dev服务器</p>

        </div>

        <div class="section">
            <h3 id="vue-cli-service-build"><a href="#vue-cli-service-build" aria-hidden="true" class="header-anchor">#</a>vue-cli-service build</h3>
            <div class="line"></div>
            <div class="bg-dark codeWrap">
                <pre>
<code>

Usage: vue-cli-service build [options] [entry|pattern]

Options:

  --mode        specify env mode (default: production)
  --dest        specify output directory (default: dist)
  --modern      build app targeting modern browsers with auto fallback
  --target      app | lib | wc | wc-async (default: app)
  --name        name for lib or web-component mode (default: "name" in package.json or entry filename)
  --no-clean    do not remove the dist directory before building the project
  --report      generate report.html to help analyze bundle content
  --report-json generate report.json to help analyze bundle content
  --watch       watch for changessage: vue-cli-service
</code>
                </pre>
            </div>
            <p>vue-cli-service build在dist /目录中生成一个生产就绪的bundle，缩小了JS / CSS / HTML和自动供应商块拆分以获得更好的缓存。块清单内联到HTML中。</p>

            <p>有一些有用的标志：</p>
            <ul>
                <li>--modern使用现代模式构建您的应用程序，将原生ES2015代码发送到支持它的现代浏览器，并自动回退到旧版软件包。</li>
                <li>--target允许您将项目内的任何组件构建为库或Web组件。有关详细信息，请参阅构建目标。</li>
                <li>--report和--report-json将根据您的构建统计信息生成报告，这些报告可以帮助您分析捆绑包中包含的模块的大小。</li>
            </ul>
        </div>

        <div class="section">
            <h3 id="vue-cli-service-inspect"><a href="#vue-cli-service-inspect" aria-hidden="true" class="header-anchor"></a>vue-cli-service inspect</h3>
            <div class="line"></div>
            <div class="bg-dark codeWrap">
                <pre>
<code>
Usage: vue-cli-service inspect [options] [...paths]

Options:

  --mode    specify env mode (default: development)
</code>
                </pre>
            </div>
            <p>您可以使用vue-cli-service inspect来检查Vue CLI项目中的webpack配置。有关详细信息，请参阅检查Webpack配置。</p>

        </div>

        <div class="section">
            <h3 id="checking-all-available-commands"><a href="#checking-all-available-commands"></a>检查所有可用命令</h3>
            <div class="line"></div>
            <p>某些CLI插件会向vue-cli-service注入其他命令。例如，@ vue / cli-plugin-eslint会注入vue-cli-service lint命令。您可以通过运行来查看所有注入的命令：</p>
            <div class="bg-dark codeWrap">
                <pre>
<code>
npx vue-cli-service help
</code>
                </pre>
            </div>
            <p>您还可以通过以下方式了解每个命令的可用选项：</p>
            <div class="bg-dark codeWrap">
                <pre>
<code>
npx vue-cli-service help [command]
</code>
                </pre>
            </div>
        </div>


        <div class="section">
            <h3 id="caching-and-parallelization"><a href="#caching-and-parallelization" aria-hidden="true" class="header-anchor"></a>缓存和并行化</h3>
            <div class="line"></div>
            <ul>
                <li>默认情况下，为Vue / Babel / TypeScript编译启用了cache-loader。文件缓存在node_modules / .cache中 - 如果遇到编译问题，请始终先尝试删除缓存目录</li>
                <li>当机器具有多于1个CPU内核时，将启用线程加载程序以进行Babel / TypeScript转换。</li>
            </ul>
        </div>

        <div class="section">
            <h3 id="id-git-hooks"><a href="#id-git-hooks" aria-hidden="true" class="header-anchor"></a>Git Hooks</h3>
            <div class="line"></div>
            <p>安装后，@ vue / cli-service还会安装yorkie，它允许您使用package.json中的gitHooks字段轻松指定Git挂钩：</p>
            <div class="bg-dark codeWrap">
                <pre>
<code>
{
  "gitHooks": {
    "pre-commit": "lint-staged"
  }
}
</code>
                </pre>
            </div>
            <div class="tipBox bg-warning">
                <h3>Warning</h3>
                <p>yorkie是哈士奇的一个叉子，与后者不兼容</p>
            </div>

        </div>

        <div class="section">
            <h3 id="configuration-without-ejecting"><a href="#configuration-without-ejecting" aria-hidden="true" class="header-anchor"></a>没有弹出的配置</h3>
            <div class="line"></div>
            <p>通过vue create创建的项目已准备就绪，无需额外配置。这些插件旨在相互协作，因此在大多数情况下，您只需在交互式提示中选择所需的功能即可。</p>
            <p>但是，我们也明白，不可能满足每一个可能的需求，项目的需求也可能随着时间的推移而变化。Vue CLI创建的项目允许您配置工具的几乎每个方面，而无需弹出。有关更多详细信息，请查看配置参考。</p>
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
    .serviceWrap {
        width: 800px;
        margin: 0 auto;
        padding: 0 100px;

    }
</style>
