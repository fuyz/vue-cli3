<template>
    <div class="createWrap">
        <h3 id="instant-prototyping"><a href="#instant-prototyping" aria-hidden="true" class="header-anchor">#</a>创建项目
        </h3>
        <div class="section">
            <h3 id="vue-create"><a href="#vue-create" aria-hidden="true" class="header-anchor">#</a>vue create</h3>
            <div class="line"></div>
            <p>要创建新项目，请运行：</p>
            <div class="bg-dark codeWrap">
                        <pre>
                            <code>
                                <p>vue create hello-world</p>
                            </code>
                        </pre>
            </div>
            <div class="bg-warning tipBox">
                <h3>warning</h3>
                <p>如果您使用带有minTTY的Git Bash在Windows上，则交互式提示将不起作用。您必须以winpty vue.cmd create hello-world启动该命令。</p>
            </div>
            <p>系统将提示您选择预设。您可以选择基本Babel + ESLint设置附带的默认预设，也可以选择“手动选择功能”以选择所需的功能。</p>
            <div class="imgWrap">
                <img src="../assets/1532166749243.jpg" alt="">
            </div>
            <p>默认设置非常适合快速创建新项目的原型，而手动设置提供了更多面向生产项目可能需要的选项。</p>
            <div class="imgWrap">
                <img src="../assets/1532167277961.jpg" alt="">
            </div>
            <p>如果您选择手动选择功能，则在提示的末尾您还可以选择将选择保存为预设，以便将来可以重复使用。我们将在下一节讨论预设和插件。</p>
            <div class="bg-info tipBox">
                <h3>~/.vuerc</h3>
                <p>aved预设将存储在用户主目录中名为.vuerc的JSON文件中。如果要修改已保存的预设/选项，可以通过编辑此文件来执行此操作。</p>
                <p>在项目创建过程中，您可能还会被提示选择首选包管理器，或使用淘宝npm注册表镜像来加快依赖安装。您的选择也将保存在〜/ .vuerc中。</p>
            </div>
            <p>vue create命令有许多选项，你可以通过运行来探索它们：</p>
            <div class="bg-dark codeWrap">
<pre>
<code>
vue create --help
</code>
</pre>
            </div>
            <div class="bg-dark codeWrap">
                        <pre>
<code>
Usage: create [options] &lt;app-name&gt;

create a new project powered by vue-cli-service

Options:

-p, --preset &lt;presetName&gt;       Skip prompts and use saved or remote preset
-d, --default                   Skip prompts and use default preset
-i, --inlinePreset &lt;json&gt;       Skip prompts and use inline JSON string as preset
-m, --packageManager &lt;command&gt;  Use specified npm client when installing dependencies
-r, --registry &lt;url&gt;            Use specified npm registry when installing dependencies (only for npm)
-g, --git [message|false]       Force / skip git initialization, optionally specify initial commit message
-f, --force                     Overwrite target directory if it exists
-c, --clone                     Use git clone when fetching remote preset
-x, --proxy                     Use specified proxy when creating project
-h, --help                      output usage information
</code>
                        </pre>
            </div>

        </div>
        <div class="section">
            <h3 id="using-the-ugi"><a href="#using-the-ugi" aria-hidden="true" class="header-anchor">#</a>UGI的使用</h3>
            <div class="line"></div>
            <p>您还可以使用vue ui命令的图形界面创建和管理项目： </p>
            <div class="bg-dark codeWrap">
                        <pre>
<code>
vue ui
</code>
                        </pre>
            </div>

            <p>vue ui 上面的命令将打开一个带有GUI的浏览器窗口，该GUI将指导您完成项目创建过程</p>
            <div class="imgWrap">
                <img src="../assets/1532168389202.jpg" alt="">
            </div>
        </div>
        <div class="section">
            <h3 id="pull-2.x"><a href="#pull-2.x" aria-hidden="true" class="header-anchor">#</a>拉2.x模板（遗留）</h3>
            <div class="line"></div>
            <p>Vue CLI 3使用相同的vue二进制文件，因此它会覆盖Vue CLI 2（vue-cli）。如果您仍需要旧版vue init功能，则可以安装全局网桥：</p>
            <div class="bg-dark codeWrap">
                <pre>
<code>
<p>npm install -g @vue/cli-init</p>
<p># vue init now works exactly the same as vue-cli@2.x</p>
<p>vue init webpack my-project</p>
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
                /*margin-bottom: 20px;*/
            }
            h4 {
                margin: 50px 0 20px 0;
            }
        }

    }
</style>
