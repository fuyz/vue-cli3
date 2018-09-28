<template>
    <div class="createWrap">
        <h3 id="instant-prototyping"><a href="#instant-prototyping" aria-hidden="true" class="header-anchor">#</a>HTML和静态资源
        </h3>
        <div class="section">
            <h3 >HTML</h3>
            <div class="line"></div>
            <h4>The Index File</h4>
            <p><code>public / index.html</code>文件是一个将使用 <code>html-webpack-plugin</code>处理的模板。在构建期间，将自动注入资产链接。此外，Vue
                CLI还会自动注入资源提示（预加载/预取），清单/图标链接（使用PWA插件时）以及构建期间生成的JavaScript和CSS文件的资产链接</p>
            <h4>插值</h4>
            <p>由于索引文件用作模板，因此您可以使用lodash模板语法在其中插入值：</p>
            <ul>
                <li>非转义插值： <code>&lt;％= VALUE％&gt;</code>;</li>
                <li>HTML转义插值：<code>&lt;％ - VALUE％&gt;</code>;</li>
                <li>JavaScript控制流：<code>&lt;％expression％&gt;</code>。</li>
            </ul>
            <p>除了html-webpack-plugin公开的默认值之外，所有客户端env变量也可以直接使用。例如，要使用BASE_URL值：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
&lt;link rel="icon" href="&lt;%= BASE_URL %&gt;favicon.ico" &gt;
                            </code>
                        </pre>
            </div>
            <p>也可以看看 <a class="outLink" href="">baseUrl</a></p>

            <h4>预载</h4>
            <p><code>&lt;link rel =“prefetch” &gl; </code> 是一种资源提示，它告诉浏览器在页面加载完成后，在浏览器的空闲时间内预取用户可能在不久的将来访问的内容。</p>
            <p>默认情况下，Vue CLI应用程序将自动为异步块生成的所有JavaScript文件生成预取提示（通过动态导入（）进行按需代码拆分）。</p>
            <p>提示是使用@ vue / preload-webpack-plugin注入的，可以通过chainWebpack修改/删除为config.plugin（'prefetch'）。</p>

            <div class="bg-dark codeWrap">
                        <pre>
<code>
// vue.config.js
module.exports = {
  chainWebpack: config => {
    // remove the prefetch plugin
    config.plugins.delete('prefetch')

    // or:
    // modify its options:
    config.plugin('prefetch').tap(options => {
      options.fileBlackList.push([/myasyncRoute(.)+?\.js$/])
      return options
    })
  }
}
</code>
                        </pre>
            </div>

            <div class="tipBox bg-info">
                <h3>Tip</h3>
                <p>预取链接将消耗带宽。如果您有一个包含许多异步块的大型应用程序，并且您的用户主要是移动设备，因此可以识别带宽，您可能需要禁用预取链接。</p>
            </div>

            <h4>构建多页面应用程序</h4>
            <p>并非每个应用都必须是SPA。 Vue CLI支持使用vue.config.js中的pages选项构建多页面应用程序。构建的应用程序将有效地共享多个条目之间的公共块，以获得最佳的加载性能。</p>

            <h3>静态资产处理</h3>
            <div class="line"></div>
            <p>静态资产可以通过两种不同的方式处理： </p>
            <ul>
                <li>用JavaScript导入或通过相对路径在模板/ CSS中引用。此类引用将由webpack处理。</li>
                <li>放置在公共目录中并通过绝对路径引用。这些资产将被复制，而不是通过webpack。</li>
            </ul>
            <h4>相对路径导入</h4>
            <p>当您使用JavaScript，CSS或* .vue文件中的相对路径（必须以 . 开头）引用静态资产时，该资产将包含在webpack的依赖关系图中。在此编译过程中，所有资产URL（例如 <code>&lt;img
                src =“...”&gt;，background：url（...）</code>和CSS <code>@import</code>都将解析为模块依赖项。</p>
            <p>例如，<code>url（./ image.png）</code>将被翻译为<code>require（'./ image.png'）</code>，并且</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
&lt;img src="./image.png"&gl;
                            </code>
                        </pre>
            </div>
            <p>将编译成：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
h('img', { attrs: { src: require('./image.png') }})
                            </code>
                        </pre>
            </div>
            <p>在内部，我们使用文件加载器来确定具有版本哈希值和正确公共基本路径的最终文件位置，并使用url-loader有条件地内联小于10kb的资源，从而减少HTTP请求的数量。</p>
            <h4>网址转换规则</h4>
            <ul>
                <li>如果URL是绝对路径（例如/images/foo.png），它将按原样保留。</li>
                <li>如果URL以 . 开头，则将其解释为相对模块请求，并根据文件系统上的文件夹结构进行解析。</li>
                <li>如果URL以〜开头，则将其后的任何内容解释为模块请求。这意味着您甚至可以引用节点模块内的资产：
                    <div class="bg-dark codeWrap">
                        <pre>
                            <code>
&lt;img src="~/some-npm-package/foo.png"&gl;
                            </code>
                        </pre>
                    </div>
                </li>
                <li>如果URL以@开头，则它也被解释为模块请求。这很有用，因为Vue CLI默认将@别名为 <code>&lt;projectRoot&gl;/src</code>。</li>
            </ul>
            <h4>公共文件夹</h4>
            <p>放置在公用文件夹中的任何静态资产都将被复制，而不是通过webpack。您需要使用绝对路径引用它们。</p>
            <p>请注意，我们建议将资产作为模块依赖关系图的一部分导入，以便它们通过webpack获得以下好处：</p>
            <ul>
                <li>脚本和样式表被缩小并捆绑在一起以避免额外的网络请求。</li>
                <li>缺少文件会导致编译错误，而不是用户的404错误。</li>
                <li>结果文件名包含内容哈希，因此您无需担心浏览器缓存旧版本。</li>
            </ul>
            <p>公共目录作为转义填充提供，当您通过绝对路径引用它时，您需要考虑应用程序的部署位置。如果您的应用未部署在域的根目录，则需要在URL前添加baseUrl：</p>
            <ul>
                <li>在public / index.html或html-webpack-plugin用作模板的其他HTML文件中，您需要在链接前加上 <code>&lt;％= BASE_URL％&gl;</code>：
                    <div class="bg-dark codeWrap">
                        <pre>
                            <code>
&lt;link rel="icon" href="&lt;%= BASE_URL %&gt;favicon.ico"&gt;
                            </code>
                        </pre>
                    </div>
                </li>
                <li>在模板中，您需要先将基本URL传递给组件：
                    <div class="bg-dark codeWrap">
                        <pre>
                            <code>
data () {
  return {
    baseUrl: process.env.BASE_URL
  }
}
                            </code>
                        </pre>
                    </div>
                    <p>然后：</p>
                    <div class="bg-dark codeWrap">
                        <pre>
                            <code>
&lt;img :src="`${baseUrl}my-image.png`" &gl;
                            </code>
                        </pre>
                    </div>
                </li>
            </ul>

            <h4>何时使用公用文件夹</h4>
            <ul>
                <li>您需要在构建输出中具有特定名称的文件。  </li>
                <li>您有数千个图像，需要动态引用它们的路径。</li>
                <li>某些库可能与Webpack不兼容，您没有其他选择，只能将其包含为 <code>&lt;script&gt;</code> 标记。</li>
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
