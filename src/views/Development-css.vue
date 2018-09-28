<template>
    <div class="createWrap">
        <h3 id="instant-prototyping"><a href="#instant-prototyping" aria-hidden="true" class="header-anchor">#</a>使用CSS</h3>
        <p>Vue CLI项目支持PostCSS，CSS模块和预处理器，包括Sass，Less和Stylus。</p>
        <div class="section">
            <h4 >预处理器</h4>
            <div class="line"></div>
            <p>您可以在创建项目时选择预处理器（Sass / Less / Stylus）。如果您没有这样做，内部webpack配置仍然预先配置为处理所有这些配置。您只需手动安装相应的webpack加载器：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
# Sass
npm install -D sass-loader node-sass

# Less
npm install -D less-loader less

# Stylus
npm install -D stylus-loader stylus
                            </code>
                        </pre>
            </div>
            <p>然后您可以导入相应的文件类型，或在* .vue文件中使用它们：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
&lt;style lang="scss"&gt;
$color = red;
&lt;/style&gt;
                            </code>
                        </pre>
            </div>

            <h4>PostCSS</h4>
            <div class="line"></div>
            <p>Vue CLI在内部使用PostCSS。</p>
            <p>您可以通过.postcssrc或postcss-load-config支持的任何配置源配置PostCSS，并通过vue.config.js中的css.loaderOptions.postcss配置postcss-loader。</p>
            <p>默认情况下启用autoprefixer插件。要配置浏览器目标，请使用package.json中的browserslist字段。</p>
            <div class="tipBox bg-info">
                <h3>关于供应商前缀CSS规则的注意事项</h3>
                <p>在生产版本中，Vue CLI会优化您的CSS，并根据您的浏览器目标删除不必要的以供应商为前缀的CSS规则。默认情况下启用autoprefixer后，您应始终只使用非前缀的CSS规则。</p>
            </div>

            <h4>CSS模块</h4>
            <div class="line"></div>
            <p>您可以使用带有 style module 的* .vue文件中的CSS模块开箱即用。 </p>
            <p>要在CSS中将CSS或其他预处理器文件作为CSS模块导入，文件名应以.module结尾。（css | less | sass | scss | styl）：</p>

            <div class="bg-dark codeWrap">
                        <pre>
<code>
import styles from './foo.module.css'
// works for all supported pre-processors as well
import sassStyles from './foo.module.scss'
</code>
                        </pre>
            </div>
            <p>如果要将.module放在文件名中，请在vue.config.js中将css.modules设置为true：</p>
            <div class="bg-dark codeWrap">
                        <pre>
<code>
// vue.config.js
module.exports = {
  css: {
    modules: true
  }
}
</code>
                        </pre>
            </div>
            <p>如果您希望自定义生成的CSS模块类名，可以通过vue.config.js中的css.loaderOptions.css来实现。这里支持所有css-loader选项，例如localIdentName和camelCase：</p>
            <div class="bg-dark codeWrap">
                        <pre>
<code>
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      css: {
        localIdentName: '[name]-[hash]',
        camelCase: 'only'
      }
    }
  }
}
</code>
                        </pre>
            </div>

            <h4>将选项传递给预处理器加载器</h4>
            <div class="line"></div>
            <p>有时您可能希望将选项传递给预处理器的webpack加载器。您可以使用vue.config.js中的css.loaderOptions选项执行此操作。例如，要将一些共享的全局变量传递给所有Sass样式：</p>
            <div class="bg-dark codeWrap">
                        <pre>
<code>
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/variables.scss";`
      }
    }
  }
}
</code>
                        </pre>
            </div>

            <p>可以通过loaderOptions配置加载器包括：</p>

            <ul>
                <li>
                    <a href="">css-loader</a>
                </li>
                <li>
                    <a href="">postcss-loader</a>
                </li>
                <li>
                    <a href="">sass-loader</a>
                </li>
                <li>
                    <a href="">less-loader</a>
                </li>
                <li>
                    <a href="">stylus-loader</a>
                </li>
            </ul>

            <div class="tipBox bg-info">
                <h3>Tip</h3>
                <p>这比使用chainWebpack手动点击特定加载器更受欢迎，因为这些选项需要应用于使用相应加载器的多个位置。</p>
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
