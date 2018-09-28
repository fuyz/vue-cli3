<template>
    <div class="installWrap">
        <h3>安装</h3>
        <div class="bg-danger tipBox">
            <h3>warning</h3>
            <p>包名称从vue-cli更改为@ vue / cli。如果您在全局安装了以前的vue-cli（1.x或2.x）软件包，则需要先使用npm uninstall vue-cli -g或yarn global remove vue-cli将其卸载</p>
        </div>
        <div class="bg-info tipBox">
            <h3>节点版本要求</h3>
            <p>Vue CLI需要Node.js版本8.9或更高版本（建议使用8.11.0+）。您可以使用nvm或nvm-windows在同一台计算机上管理多个版本的Node。</p>
        </div>
        <div class="section">
            <p>要安装新软件包，请使用以下命令之一：</p>
            <div class="bg-dark codeWrap">
                        <pre>
<code>
npm install -g @vue/cli
# OR
yarn global add @vue/cli
</code>
                        </pre>
            </div>
            <p>安装后，您将可以在命令行中访问vue二进制文件。您可以通过简单地运行vue来验证它是否已正确安装，这应该会向您显示列出所有可用命令的帮助消息。</p>
            <p>您可以使用此命令检查您是否具有正确的版本（3.x）：</p>
            <div class="bg-dark codeWrap">
                        <pre>
<code>
vue --version
</code>
                        </pre>
            </div>
        </div>


    </div>
</template>

<script>

    export default {
        name: 'install',
        created: function () {
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
