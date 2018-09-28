<template>
    <div class="createWrap">
        <h3 id="instant-prototyping"><a href="#instant-prototyping" aria-hidden="true" class="header-anchor">#</a>环境变量和模式
        </h3>
        <p>您可以通过将以下文件放在项目根目录中来指定env变量</p>
        <div class="bg-dark codeWrap">
                        <pre>
                            <code>
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
                            </code>
                        </pre>
        </div>
        <p>env文件只包含环境变量的键=值对：</p>
        <div class="bg-dark codeWrap">
                        <pre>
                            <code>
FOO=bar
VUE_APP_SECRET=secret
                            </code>
                        </pre>
        </div>
        <p>加载的变量将可用于所有vue-cli-service命令，插件和依赖项。</p>

        <div class="section">
            <h4>Modes</h4>
            <p>模式是Vue CLI项目中的一个重要概念。默认情况下，Vue CLI项目中有三种模式：</p>
            <ul>
                <li>development is used by vue-cli-service serve</li>
                <li>production is used by vue-cli-service build and vue-cli-service test:e2e</li>
                <li>test is used by vue-cli-service test:unit</li>
            </ul>
            <p>请注意，模式与NODE_ENV不同，因为模式可以包含多个环境变量。也就是说，默认情况下，每种模式都会将NODE_ENV设置为相同的值 - 例如，NODE_ENV将在开发模式下设置为“development”。</p>
            <p>您可以通过后缀.env文件来设置仅适用于特定模式的环境变量。例如，如果在项目根目录中创建名为.env.development的文件，则该文件中声明的变量将仅在开发模式下加载。</p>
            <p>您可以通过传递--mode选项标志来覆盖用于命令的默认模式。例如，如果要在build命令中使用开发变量，请将其添加到package.json脚本中：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
"dev-build": "vue-cli-service build --mode development",

                            </code>
                        </pre>
            </div>

            <h4>Example: 分段 Mode</h4>
            <div class="line"></div>
            <p>假设我们有一个带有以下.env文件的应用：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
VUE_APP_TITLE=My App
                            </code>
                        </pre>
            </div>
           <p>以下.env.staging文件：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
NODE_ENV=production
VUE_APP_TITLE=My App (staging)
                            </code>
                        </pre>
            </div>
            <ul>
                <li>vue-cli-service build构建一个生产应用程序，加载.env，.env.production和.env.production.local（如果它们存在）;</li>
                <li>vue-cli-service build --mode staging使用.env，.env.staging和.env.staging.local（如果它们存在）在分段模式下构建生产应用程序。</li>
            </ul>
            <p>在这两种情况下，由于NODE_ENV，应用程序都构建为生产应用程序，但在暂存版本中，process.env.VUE_APP_TITLE将被其他值覆盖。 </p>


            <h4>在客户端代码中使用Env变量</h4>
            <p>只有以VUE_APP_开头的变量才会通过webpack.DefinePlugin静态嵌入到客户端软件包中。您可以在应用程序代码中访问它们：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
console.log(process.env.VUE_APP_SECRET)
                            </code>
                        </pre>
            </div>
            <p>在构建期间，process.env.VUE_APP_SECRET将替换为相应的值。在VUE_APP_SECRET = secret的情况下，它将被“secret”替换。</p>
            <p>除了VUE_APP_ *变量之外，还有两个特殊变量在您的应用代码中始终可用：</p>
            <ul>
                <li>liNODE_ENV - 这将是“开发”，“生产”或“测试”之一，具体取决于应用程序运行的模式。 </li>
                <li>BASE_URL - 这对应于vue.config.js中的baseUrl选项，是部署应用程序的基本路径。</li>
            </ul>
            <p>所有已解析的env变量都将在public / index.html中提供，如HTML-Interpolation中所述。</p>
            <div class="bg-info tipBox">
                <h3>Tip</h3>
                <p>您可以在vue.config.js文件中计算env变量。它们仍然需要以VUE_APP_为前缀。这对于版本信息process.env.VUE_APP_VERSION = require（'./ package.json'）非常有用。</p>
            </div>

            <h4>仅限本地变量</h4>
            <div class="line"></div>
            <p>有时您可能有不应该提交到代码库的env变量，尤其是当您的项目托管在公共存储库中时。在这种情况下，您应该使用.env.local文件。默认情况下，.gitignore中会忽略本地env文件。</p>
            <p>.local也可以附加到特定于模式的env文件，例如.env.development.local将在开发期间加载，并被git忽略。</p>

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
