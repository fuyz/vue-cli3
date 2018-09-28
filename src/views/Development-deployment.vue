<template>
    <div class="createWrap">
        <h2 id="instant-prototyping"><a href="#instant-prototyping" aria-hidden="true" class="header-anchor">#</a>部署
        </h2>

        <section class="section">
            <h3>一般准则</h3>
            <div class="line"></div>
            <p>如果您使用Vue CLI以及作为其部署的一部分处理静态资产的后端框架，您需要做的就是确保Vue CLI在正确的位置生成构建的文件，然后遵循后端框架的部署指令。</p>
            <p>如果您正在与后端分开开发前端应用程序 -
                即您的后端为您的前端公开API以进行通信，那么您的前端本质上是一个纯粹的静态应用程序。您可以将dist目录中的构建内容部署到任何静态文件服务器，但请确保设置正确的baseUrl。</p>

            <h4>在本地预览</h4>
            <p>dist目录旨在由HTTP服务器提供服务，因此如果直接通过file：// protocol打开dist /
                index.html，它将无法工作。在本地预览生产版本的最简单方法是使用Node.js静态文件服务器，例如：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
npm install -g serve
# -s flag means serve it in Single-Page Application mode
# which deals with the routing problem below
serve -s dist
                    </code>
                </pre>
            </div>

            <h4>Routing with history.pushState</h4>
            <p>如果在历史记录模式下使用Vue Router，则简单的静态文件服务器将失败。例如，如果您使用带有/ todos / 42路由的Vue Router，则开发服务器已配置为正确响应localhost：3000 /
                todos / 42，但是为生产版本提供服务的简单静态服务器将以404响应。</p>
            <p>要解决此问题，您需要将生产服务器配置为回退到index.html，以查找与静态文件不匹配的任何请求。 Vue Router docs提供常见服务器设置的配置说明。</p>

            <h4>CORS </h4>
            <p>如果您的静态前端部署到后端API的不同域，则需要正确配置CORS。</p>

            <h4>PWA </h4>
            <p>如果您使用的是PWA插件，则必须通过HTTPS提供您的应用，以便可以正确注册Service Worker。</p>

            <h3>Platform Guides</h3>
            <div class="line"></div>
            <h4>GitHub Pages</h4>
            <ul>
                <li>
                    <p>在vue.config.js中设置正确的baseUrl。 </p>
                    <p>如果要部署到https：// &lt;USERNAME> .github.io /，则可以省略baseUrl，因为它默认为“/”。 </p>
                    <p>如果要部署到https：// &lt;USERNAME&gt; .github.io / &lt;REPO> /，（即您的存储库位于https://github.com/ &lt;USERNAME>
                        / &lt;REPO>），请将baseUrl设置为“/ &lt;REPO&gt;
                        /”。例如，如果您的repo名称是“my-project”，则您的vue.config.js应如下所示：</p>
                    <div class="codeWrap bg-dark">
                        <pre>
                            <code>
module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/my-project/'
    : '/'
}
                            </code>
                        </pre>
                    </div>
                </li>
                <li>
                    <p>在项目内部，使用以下内容创建deploy.sh（突出显示的行适当地取消注释）并运行它以进行部署：</p>
                    <div class="codeWrap bg-dark">
                        <pre>
                            <code>
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://&lt;USERNAME>.github.io
# git push -f git@github.com:&lt;USERNAME>/&lt;USERNAME>.github.io.git master

# if you are deploying to https://&lt;USERNAME>.github.io/&lt;REPO>
# git push -f git@github.com:&lt;USERNAME>/&lt;REPO>.git master:gh-pages

cd -
                            </code>
                        </pre>
                    </div>
                </li>
            </ul>

            <div class="tipBox bg-info">
                <h3>Tip</h3>
                <p>您还可以在CI设置中运行上述脚本，以便在每次推送时启用自动部署</p>
            </div>

            <h4>GitLab页面 </h4>
            <p>正如GitLab Pages文档所述，一切都发生在存储库根目录下的.gitlab-ci.yml文件中。这个工作示例将帮助您入门：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
# .gitlab-ci.yml file to be placed in the root of your repository

pages: # the job must be named pages
  image: node:latest
  stage: deploy
  script:
    - npm ci
    - npm run build
    - mv public public-vue # GitLab Pages hooks on the public folder
    - mv dist public # rename the dist folder (result of npm run build)
  artifacts:
    paths:
      - public # artifact path must be /public for GitLab Pages to pick it up
  only:
    - master
                    </code>
                </pre>
            </div>
            <p>
                通常，您的静态网站将托管在https://yourUserName.gitlab.io/yourProjectName上，因此您还需要创建一个初始的vue.config.js文件来更新BASE_URL值以匹配：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
// vue.config.js file to be place in the root of your repository
// make sure you update `yourProjectName` with the name of your GitLab project

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/yourProjectName/'
    : '/'
}
                    </code>
                </pre>
            </div>
            <p>请阅读GitLab页面域上的文档，了解有关项目网站托管的URL的更多信息。请注意，您也可以使用自定义域。 </p>
            <p>在推送到您的存储库之前，提交.gitlab-ci.yml和vue.config.js文件。将触发GitLab CI管道：成功后，访问项目的“设置”>“页面”以查看您的网站链接，然后单击它。</p>

            <h4>Netlify </h4>
            <ul>
                <li>
                    在Netlify上，使用以下设置从GitHub设置新项目：
                    <ul>
                        <li>构建命令：npm run build或yarn build</li>
                        <li>发布目录：dist</li>
                    </ul>
                </li>
                <li>点击部署按钮！</li>
            </ul>

            <h4>Firebase</h4>
            <p>在Firebase控制台上创建一个新的Firebase项目。有关如何设置项目的信息，请参阅此文档。 </p>
            <p>确保您已在全局安装了firebase-tools：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
npm install -g firebase-tools
                    </code>
                </pre>
            </div>
            <p>从项目的根目录，使用以下命令初始化firebase：</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
firebase init
                    </code>
                </pre>
            </div>
            <p>Firebase会询问有关如何设置项目的一些问题。 </p>
            <ul>
                <li>选择要设置项目的Firebase CLI功能。一定要选择托管。</li>
                <li>选择项目的默认Firebase项目。 </li>
                <li> 将您的公共目录设置为dist（或您的构建输出的位置），该目录将上传到Firebase Hosting。</li>
            </ul>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
// firebase.json

{
  "hosting": {
    "public": "app"
  }
}
                    </code>
                </pre>
            </div>
            <p>选择“是”将项目配置为单页面应用程序。这将在您的dist文件夹上创建index.html并配置您的托管信息。</p>
            <div class="codeWrap bg-dark">
                <pre>
                    <code>
// firebase.json

{
  "hosting": {
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
                    </code>
                </pre>
            </div>

            <p>运行npm run build来构建项目。 </p>
            <p>要在Firebase Hosting上部署项目，请运行以下命令：</p>
            <p>如果您希望部署项目中使用的其他Firebase CLI功能，请运行firebase deploy而不使用--only选项。 </p>
            <p>您现在可以通过https：// &lt;YOUR-PROJECT-ID> .firebaseapp.com访问您的项目。 </p>
            <p>有关更多详细信息，请参阅Firebase文档。</p>

        </section>


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
            margin-top: 40px;
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
