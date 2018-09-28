<template>
    <div class="installWrap">
        <h3 id="instant-prototyping"><a href="#instant-prototyping" aria-hidden="true" class="header-anchor">#</a>即时原型</h3>
        <!--<div class="bg-danger tipBox">-->
            <!--<h3>warning</h3>-->
            <!--<span>包名称从vue-cli更改为@ vue / cli。如果您在全局安装了以前的vue-cli（1.x或2.x）软件包，则需要先使用npm uninstall vue-cli -g或yarn global remove vue-cli将其卸载</span>-->
        <!--</div>-->
        <!--<div class="bg-info tipBox">-->
            <!--<h3>节点版本要求</h3>-->
            <!--<span>Vue CLI需要Node.js版本8.9或更高版本（建议使用8.11.0+）。您可以使用nvm或nvm-windows在同一台计算机上管理多个版本的Node。</span>-->
        <!--</div>-->
        <div class="section">
            <p>您可以使用vue serve和vue build命令对单个 <code>* .vue</code> 文件进行原型设计，但是它们需要首先安装一个额外的全局插件：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
                                <p>npm install -g @vue/cli-service-global</p>
                            </code>
                        </pre>
            </div>
            <p><code>vue serve</code>的缺点是它依赖于全局安装的依赖项，这些依赖项可能在不同的机器上不一致。因此，这仅建议用于快速原型设计。</p>
            <h4>vue serve</h4>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
                                <p>vue --version</p>
                                <p>Usage: serve [options] [entry]</p>
                                <p>serve  a  .js or .vue file in development mode with zero config</p>
                                <p>Options:</p>
                                <p>-o, --open  Open browser</p>
                                <p>-c, --copy  Copy local url to clipboard</p>
                                <p>-h, --help  output usage information</p>
                            </code>
                        </pre>
            </div>
            <p>然后在包含<code>App.vue</code>文件的目录中运行：</p>
            <p><code>vue serve</code>使用与创建的项目相同的默认设置（webpack，babel，postcss和eslint）</p>
            <p>vue创造。它会自动推断当前目录中的条目文件 - 该条目可以是其中之一</p>
            <p><code>main.js</code>，<code>index.js</code>，<code>App.vue</code>或<code>app.vue</code>。您还可以显式指定条目文件：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
                                <p>vue serve MyComponent.vue</p>
                            </code>
                        </pre>
            </div>
            <p>如果需要，您还可以提供 <code>index.html</code>，<code>package.json</code>，安装和使用本地依赖项，甚至可以使用相应的配置文件配置babel，postcss和eslint</p>

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
    .installWrap {
        padding: 0 100px;
        .section {
            margin-top: 50px;
            h3 {
                text-align: left;
                /*margin-bottom: 20px;*/
            }
            h4 {
                margin: 50px 0 20px 0;
            }
        }

    }
</style>
