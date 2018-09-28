<template>
    <div class="pluginsWrap">
        <h2 id="plugins-preset"><a href="#plugins-preset" aria-hidden="true" class="header-anchor">#</a>插件和预设</h2>
        <div class="section">
            <h3 id="plugins"><a href="#plugins" aria-hidden="true" class="header-anchor">#</a>插件</h3>
            <div class="line"></div>
            <p>Vue CLI使用基于插件的体系结构。如果检查新创建的项目的 <code>package.json</code>，您将找到以 <code>@ vue / cli-plugin-</code>开头的依赖项。插件可以修改内部webpack配置并将命令注入<code>vue-cli-service</code>。项目创建过程中列出的大多数功能都是作为插件实现的。
            </p>
            <p>基于插件的体系结构使Vue CLI具有灵活性和可扩展性。如果您有兴趣开发插件，请查看 <a href="">插件开发指南</a>。</p>
            <div class="bg-info tipBox">
                <h3>Tip</h3>
                <span>您可以使用带有 <code>vue ui</code> 命令的GUI来安装和管理插件</span>
            </div>

            <h4 id="installing-plugins-in-an-existing-project"><a href="#installing-plugins-in-an-existing-project"
                                                                  aria-hidden="true" class="header-anchor">#</a>在现有项目中安装插件
            </h4>
            <p>
                每个CLI插件都附带一个生成器（创建文件）和一个运行时插件（调整核心webpack配置并注入命令）。当您使用vue create创建新项目时，将根据您的功能选择为您预安装一些插件。如果要将插件安装到已创建的项目中，可以使用vue add命令执行此操作：</p>
            <div class="bg-dark codeWrap">
                <pre>
<code>
vue add @vue/eslint
</code>
                </pre>
            </div>
            <div class="bg-info tipBox">
                <h3>Tip</h3>
                <p>vue add专门用于安装和调用Vue CLI插件。它并不意味着替代正常的npm包。对于普通的npm包，您仍应使用您选择的包管理器。</p>
            </div>
            <div class="bg-warning tipBox">
                <h3>Warning</h3>
                <p>建议在运行vue add之前提交项目的当前状态，因为该命令将调用插件的文件生成器并可能更改现有文件。</p>
            </div>
            <p>该命令将 <code>@ vue / eslint</code> 解析为完整的包名 <code>@ vue / cli-plugin-eslint</code>，从npm安装它，并调用其生成器。</p>
            <div class="bg-dark codeWrap">
                <pre>
<code>
<span># these are equivalent to the previous usage</span>
<span>vue add @vue/cli-plugin-eslint</span>
</code>
                </pre>
            </div>
            <p>如果没有@vue前缀，该命令将解析为未作用域的包。例如，要安装第三方插件vue-cli-plugin-apollo：</p>
            <div class="bg-dark codeWrap">
                <pre>
<code>
<span># installs and invokes vue-cli-plugin-apollo</span>
<span>vue add apollo</span>
</code>
                </pre>
            </div>
            <p>您还可以在特定范围内使用第三方插件。例如，如果插件名为@ foo / vue-cli-plugin-bar，则可以添加：</p>
            <div class="bg-dark codeWrap">
                <pre>
<code>
<span>vue add @foo/bar</span>
</code>
                </pre>
            </div>
            <p>您可以将生成器选项传递给已安装的插件（这将跳过提示）：</p>
            <div class="bg-dark codeWrap">
                <pre>
<code>
<span> vue add @vue/eslint --config airbnb --lintOn save</span>
</code>
                </pre>
            </div>
            <p>vue-router和vuex是特殊情况 - 它们没有自己的插件，但你可以添加它们：</p>
            <div class="bg-dark codeWrap">
                <pre>
<code>
<span> vue add router</span>
<span> vue add vuex</span>
</code>
                </pre>
            </div>
            <p>如果已安装插件，则可以跳过安装并仅使用vue invoke命令调用其生成器。该命令采用与vue add相同的参数。</p>
            <div class="bg-info tipBox">
                <h3>Tip</h3>
                <p>
                    如果由于某种原因，您的插件列在除项目中的插件之外的package.json文件中，则可以设置vuePlugins。项目package.json中的resolveFrom选项，包含其他package.json文件的文件夹的路径。</p>
                <p>例如，如果您有.config / package.json文件：</p>
                <div class="bg-dark codeWrap">
                <pre>
<code>
{
    npm install -g @vue/cli-init
    "vuePlugins": {
        "resolveFrom": ".config"
    }
}
</code>
                </pre>
                </div>

            </div>

            <h4 id="project-local-plugin"><a href="#project-local-plugin" aria-hidden="true" class="header-anchor">#</a>项目本地插件
            </h4>
            <p>如果您需要访问项目中的插件API并且不想为其创建完整插件，则可以使用package.json文件中的vuePlugins.service选项</p>
            <div class="bg-dark codeWrap">
                        <pre>
<code>
{
  "vuePlugins": {
    "service": ["my-commands.js"]
  }
}
</code>
                        </pre>
            </div>
            <p>每个文件都需要导出一个以插件API作为第一个参数的函数。有关插件API的更多信息，请查看插件开发指南。</p>
            <p>您还可以使用vuePlugins.ui选项添加与UI插件类似的文件：</p>
            <div class="bg-dark codeWrap">
                <pre>
                    <code>
{
  "vuePlugins": {
    "ui": ["my-ui.js"]
  }
}
                    </code>
                </pre>
            </div>
            <p>有关更多信息，请阅读 <a href="">UI插件API</a>。</p>
        </div>

        <div class="section">
            <h3 id="preset"><a href="#preset" aria-hidden="true" class="header-anchor">#</a>预设</h3>
            <div class="line"></div>
            <p>Vue CLI预设是一个JSON对象，包含用于创建新项目的预定义选项和插件，以便用户无需通过提示选择它们。</p>
            <p>在vue create期间保存的预设存储在用户主目录（〜/ .vuerc）的配置文件中。您可以直接编辑此文件以调整/添加/删除已保存的预设。 </p>
            <p>这是一个示例预设：</p>
            <div class="bg-dark codeWrap">
                <pre>
                    <code>
{
  "useConfigFiles": true,
  "router": true,
  "vuex": true,
  "cssPreprocessor": "sass",
  "plugins": {
    "@vue/cli-plugin-babel": {},
    "@vue/cli-plugin-eslint": {
      "config": "airbnb",
      "lintOn": ["save", "commit"]
    }
  }
}
                    </code>
                </pre>
            </div>
            <p>插件生成器使用预设数据生成相应的项目文件。除上述字段外，您还可以为集成工具添加其他配置：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
{
  "useConfigFiles": true,
  "plugins": {...},
  "configs": {
    "vue": {...},
    "postcss": {...},
    "eslintConfig": {...},
    "jest": {...}
  }
}
                    </code>
                </pre>
            </div>
            <p>这些附加配置将合并到package.json或相应的配置文件中，具体取决于useConfigFiles的值。例如，使用“useConfigFiles”：true，configs.vue的值将合并到vue.config.js中。</p>

            <h4 id=""><a href="#using-the-ugi" aria-hidden="true" class="header-anchor">#</a>预设插件版本控制</h4>
            <p>您可以显式指定正在使用的插件的版本：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
{
  "plugins": {
    "@vue/cli-plugin-eslint": {
      "version": "^3.0.0",
      // ... other options for this plugin
    }
  }
}
                    </code>
                </pre>
            </div>
            <p>请注意，官方插件不需要这样做 - 如果省略，CLI将自动使用注册表中提供的最新版本。但是，建议为预设中列出的任何第三方插件提供显式版本范围</p>

            <h4>允许插件提示</h4>
            <p>每个插件都可以在项目创建过程中注入自己的提示，但是当您使用预设时，将跳过这些提示，因为Vue CLI假定已在预设中声明了所有插件选项。</p>
            <p>在某些情况下，您可能希望预设仅声明所需的插件，同时通过让用户完成插件注入的提示来保留一些灵活性。</p>
            <p>对于这种情况，您可以在插件的选项中指定 <code>"prompts": true</code> 以允许其注入提示：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
{
  "plugins": {
    "@vue/cli-plugin-eslint": {
      // let the users pick their own ESLint config
      "prompts": true
    }
  }
}
                    </code>
                </pre>
            </div>

            <h4>远程预设</h4>
            <p>您可以通过在git仓库中发布预设来与其他开发人员共享预设。 repo应包含包含预设数据的preset.json文件。然后，您可以在创建项目时使用--preset选项来使用远程预设：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
# use preset from GitHub repo
vue create --preset username/repo my-project
                    </code>
                </pre>
            </div>
            <p>GitLab和BitBucket也受支持。如果从私有存储库中获取，请确保使用--clone选项：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
vue create --preset gitlab:username/repo --clone my-project
vue create --preset bitbucket:username/repo --clone my-project
                    </code>
                </pre>
            </div>

            <h4>本地文件系统预设</h4>
            <p>在开发远程预设时，必须将预设重复推送到远程仓库以进行测试，这可能会非常繁琐。为简化工作流，--preset标志还接受本地.json文件：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
vue create --preset local.json my-project
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
    .pluginsWrap {
        width: 800px;
        margin: 0 auto;
        padding: 0 100px;

    }
</style>
