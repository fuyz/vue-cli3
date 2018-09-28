<template>
    <div class="installWrap">
        <h3 id="instant-prototyping"><a href="#instant-prototyping" aria-hidden="true" class="header-anchor">#</a>即时原型
        </h3>
        <div class="line"></div>
        <div class="section">
            <p>您可以使用vue serve和vue build命令对单个 <code>* .vue</code> 文件进行原型设计，但是它们需要首先安装一个额外的全局插件：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
npm install -g @vue/cli-service-global
                            </code>
                        </pre>
            </div>
            <p><code>vue serve</code>的缺点是它依赖于全局安装的依赖项，这些依赖项可能在不同的机器上不一致。因此，这仅建议用于快速原型设计。</p>
            <h4>vue serve</h4>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
Usage: serve [options] [entry]

serve  a  .js or .vue file in development mode with zero config


Options:

-o, --open  Open browser
-c, --copy  Copy local url to clipboard
-h, --help  output usage information
                            </code>
                        </pre>
            </div>
            <p>您只需要一个App.vue文件</p>
            <div class="bg-dark codeWrap">
                <pre>
                    <code>
&lt;template&gt;
    &lt;h1&gt;Hello!&lt;/h1&gt;
&lt;/template&gt;
                    </code>
                </pre>
            </div>
            <p>然后在包含<code>App.vue</code>文件的目录中运行：</p>
            <div class="bg-dark codeWrap">
                <pre>
                    <code>
vue serve
                    </code>
                </pre>
            </div>
            <p><code>vue serve</code>使用与创建的项目相同的默认设置（webpack，babel，postcss和eslint） vue create。它会自动推断当前目录中的条目文件 - 该条目可以是其中之一<code>main.js</code>，<code>index.js</code>，<code>App.vue</code>或<code>app.vue</code>。您还可以显式指定条目文件：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
vue serve MyComponent.vue
                            </code>
                        </pre>
            </div>
            <p>如果需要，您还可以提供 <code>index.html</code>，<code>package.json</code>，安装和使用本地依赖项，甚至可以使用相应的配置文件配置babel，postcss和eslint
            </p>

            <h4>vue build</h4>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
Usage: build [options] [entry]

build a .js or .vue file in production mode with zero config


Options:

-t, --target &lt;target&gt;  Build target (app | lib | wc | wc-async, default: app)
-n, --name &lt;name&gt;      name for lib or web-component (default: entry filename
-d, --dest &lt;dir&gt;       output directory (default: dist)
-h, --help             output usage information
                            </code>
                        </pre>
            </div>
            <p>您还可以将目标文件构建到生产包中，以便使用vue构建进行部署：</p>
            <div class="bg-dark codeWrap">
                <pre>
                    <code>
vue build MyComponent.vue
                    </code>
                </pre>
            </div>
            <p><code>vue build</code>还提供了将组件构建为库或Web组件的功能。有关详细信息，请参阅 <router-link class="sidebar-link outLink" to="/guide/Development_build">Build Target</router-link>。</p>

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
        width: 800px;
        margin: 0 auto;
        padding: 0 100px;

    }
</style>
