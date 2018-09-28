<template>
    <div class="content">
        <h1 id="working-with-webpack"><a href="#working-with-webpack" aria-hidden="true" class="header-anchor">#</a>
            Working with Webpack</h1>
        <h2 id="simple-configuration"><a href="#simple-configuration" aria-hidden="true" class="header-anchor">#</a>Simple
            Configuration</h2>
        <p>The easiest way to tweak the webpack config is providing an object to the <code>configureWebpack</code>option
            in <code>vue.config.js</code>:</p>
        <div class="bg-dark codeWrap">
            <pre class="language-js">
                <code>
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  }
}
                </code>
            </pre>
        </div>
        <p>The object will be merged into the final webpack config using
            <a href="https://github.com/survivejs/webpack-merge" target="_blank"
               rel="noopener noreferrer">webpack-merge</a>.
        </p>
        <div class="bg-warning tipBox"><p class="custom-block-title">WARNING</p>
            <p>Some webpack options are set based on values in <code>vue.config.js</code> and should not be mutated
                directly. For example, instead of modifying <code>output.path</code>, you should use the
                <code>outputDir</code> option in <code>vue.config.js</code>; instead of modifying <code>output.publicPath</code>,
                you should use the <code>baseUrl</code> option in <code>vue.config.js</code>. This is because the values
                in <code>vue.config.js</code> will be used in multiple places inside the config to ensure everything
                works properly together.</p></div>
        <p>If you need conditional behavior based on the environment, or want to directly mutate the config, use a
            function (which will be lazy evaluated after the env variables are set). The function receives the resolved
            config as the argument. Inside the function, you can either mutate the config directly, OR return an object
            which will be merged:</p>
        <div class="language-js extra-class">
            <pre class="bg-dark codeWrap language-js">
                <code>
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          // modify the options...
          return options
        })
  }
}
                </code>
            </pre>
        </div>
        <h2 id="chaining-advanced"><a href="#chaining-advanced" aria-hidden="true" class="header-anchor">#</a> Chaining
            (Advanced)</h2>
        <p>The internal webpack config is maintained using <a href="https://github.com/mozilla-neutrino/webpack-chain"
                                                              target="_blank"
                                                              rel="noopener noreferrer">webpack-chain</a>. The library
            provides an abstraction over the raw webpack config, with the ability to define named loader rules and named
            plugins, and later "tap" into those rules and modify their options.
        </p>
        <p>This allows us finer-grained control over the internal config. Below you will see some examples of common
            modifications done via the <code>chainWebpack</code> option in <code>vue.config.js</code>.</p>
        <div class="tip custom-block"><p class="custom-block-title">TIP</p>
            <p><a href="#inspecting-the-project-s-webpack-config">vue inspect</a> will be extremely helpful when you are
                trying to access specific loaders via chaining.</p></div>
        <h3 id="modifying-options-of-a-loader"><a href="#modifying-options-of-a-loader" aria-hidden="true"
                                                  class="header-anchor">#</a> Modifying Options of a Loader</h3>
        <div class="bg-dark codeWrap">
            <pre class="language-js"><code>
// vue.config.js
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate for development...
    }
  }
}
</code></pre>
        </div>
        <div class="tip custom-block"><p class="custom-block-title">TIP</p>
            <p>For CSS related loaders, it's recommended to use <a href="/config/#css-loaderoptions" class="">css.loaderOptions</a>
                instead of directly targeting loaders via chaining. This is because there are multiple rules for each
                CSS file type and <code>css.loaderOptions</code> ensures you can affect all rules in one single place.
            </p></div>
        <h3 id="adding-a-new-loader"><a href="#adding-a-new-loader" aria-hidden="true" class="header-anchor">#</a>
            Adding a New Loader</h3>
        <div class="bg-dark codeWrap">
            <pre class="language-js">
                <code>

// vue.config.js/ vue.config.js
modulemodule.exports xports = {
  chainWebpack  chainWebpack: config config =>> {
    config    config.module
      odule       .ruleule('vue'vue')
            .usese('vue-loader'vue-loader')
                .loaderoader('vue-loader'vue-loader')
                .tapap(options ptions =>> {
                    // modify the options.../ modify the options...
                    returneturn options
        options         })
    }
}
</code>
            </pre>
        </div>
        <h3 id="replacing-loaders-of-a-rule"><a href="#replacing-loaders-of-a-rule" aria-hidden="true"
                                                class="header-anchor">#</a> Replacing Loaders of a Rule</h3>
        <p>If you want to replace an existing <a
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config/base.js"
                target="_blank" rel="noopener noreferrer">Base Loader

        </a>, for example using <code>vue-svg-loader</code> to inline SVG files instead of loading the file:
        </p>
        <div class="language-js extra-class"><pre class="language-js"><code><span
                class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span
                    class="token punctuation">{</span>
  chainWebpack<span class="token punctuation">:</span> config <span class="token operator">=&gt;</span> <span
                    class="token punctuation">{</span>
    <span class="token keyword">const</span> svgRule <span class="token operator">=</span> config<span
                    class="token punctuation">.</span>module<span class="token punctuation">.</span><span
                    class="token function">rule</span><span class="token punctuation">(</span><span
                    class="token string">'svg'</span><span class="token punctuation">)</span>

    <span class="token comment">// clear all existing loaders.</span>
    <span class="token comment">// if you don't do this, the loader below will be appended to</span>
    <span class="token comment">// existing loaders of the rule.</span>
    svgRule<span class="token punctuation">.</span>uses<span class="token punctuation">.</span><span
                    class="token function">clear</span><span class="token punctuation">(</span><span
                    class="token punctuation">)</span>

    <span class="token comment">// add replacement loader(s)</span>
    svgRule
      <span class="token punctuation">.</span><span class="token function">use</span><span
                    class="token punctuation">(</span><span class="token string">'vue-svg-loader'</span><span
                    class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">loader</span><span
                    class="token punctuation">(</span><span class="token string">'vue-svg-loader'</span><span
                    class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
        </div>
        <h3 id="modifying-options-of-a-plugin"><a href="#modifying-options-of-a-plugin" aria-hidden="true"
                                                  class="header-anchor">#</a> Modifying Options of a Plugin</h3>
        <div class="language-js extra-class"><pre class="language-js"><code><span
                class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span
                    class="token punctuation">{</span>
  chainWebpack<span class="token punctuation">:</span> config <span class="token operator">=&gt;</span> <span
                    class="token punctuation">{</span>
    config
      <span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span
                    class="token string">'html'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">tap</span><span
                    class="token punctuation">(</span>args <span class="token operator">=&gt;</span> <span
                    class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token comment">/* new args to pass to html-webpack-plugin's constructor */</span><span
                    class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
        </div>
        <p>You will need to familiarize yourself with <a
                href="https://github.com/mozilla-neutrino/webpack-chain#getting-started" target="_blank"
                rel="noopener noreferrer">webpack-chain's API

        </a> and <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/config"
                    target="_blank" rel="noopener noreferrer">read some source code

        </a> in order to understand how to leverage the full power of this option, but it gives you a more expressive
            and safer way to modify the webpack config than directly mutation values.
        </p>
        <p>For example, say you want to change the default location of <code>index.html</code> from <code>/Users/username/proj/public/index.html</code>
            to <code>/Users/username/proj/app/templates/index.html</code>. By referencing <a
                    href="https://github.com/jantimon/html-webpack-plugin#options" target="_blank"
                    rel="noopener noreferrer">html-webpack-plugin

            </a> you can see a list of options you can pass in. To change our template path we can pass in a new
            template path with the following config:
        </p>
        <div class="language-js extra-class"><pre class="language-js"><code><span
                class="token comment">// vue.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span
                    class="token punctuation">{</span>
  chainWebpack<span class="token punctuation">:</span> config <span class="token operator">=&gt;</span> <span
                    class="token punctuation">{</span>
    config
      <span class="token punctuation">.</span><span class="token function">plugin</span><span class="token punctuation">(</span><span
                    class="token string">'html'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">tap</span><span
                    class="token punctuation">(</span>args <span class="token operator">=&gt;</span> <span
                    class="token punctuation">{</span>
        args<span class="token punctuation">[</span><span class="token number">0</span><span
                    class="token punctuation">]</span><span class="token punctuation">.</span>template <span
                    class="token operator">=</span> <span class="token string">'/Users/username/proj/app/templates/index.html'</span>
        <span class="token keyword">return</span> args
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>
        </div>
        <p>You can confirm that this change has taken place by examining the vue webpack config with the <code>vue
            inspect</code> utility, which we will discuss next.</p>
        <h2 id="inspecting-the-project-s-webpack-config"><a href="#inspecting-the-project-s-webpack-config"
                                                            aria-hidden="true" class="header-anchor">#</a> Inspecting
            the Project's Webpack Config</h2>
        <p>Since <code>@vue/cli-service</code> abstracts away the webpack config, it may be more difficult to understand
            what is included in the config, especially when you are trying to make tweaks yourself.</p>
        <p><code>vue-cli-service</code> exposes the <code>inspect</code> command for inspecting the resolved webpack
            config. The global <code>vue</code> binary also provides the <code>inspect</code> command, and it simply
            proxies to <code>vue-cli-service inspect</code> in your project.</p>
        <p>The command will print the resolved webpack config to stdout, which also contains hints on how to access
            rules and plugins via chaining.</p>
        <p>You can redirect the output into a file for easier inspection:</p>
        <div class="language-bash extra-class"><pre class="language-bash"><code>vue inspect <span
                class="token operator">&gt;</span> output.js
</code></pre>
        </div>
        <p>Note the output is not a valid webpack config file, it's a serialized format only meant for inspection.</p>
        <p>You can also inspect a subset of the config by specifying a path:</p>
        <div class="language-bash extra-class"><pre class="language-bash"><code><span class="token comment"># only inspect the first rule</span>
vue inspect module.rules.0
</code></pre>
        </div>
        <p>Or, target a named rule or plugin:</p>
        <div class="language-bash extra-class"><pre class="language-bash"><code>vue inspect --rule vue
vue inspect --plugin html
</code></pre>
        </div>
        <p>Finally, you can list all named rules and plugins:</p>
        <div class="language-bash extra-class"><pre class="language-bash"><code>vue inspect --rules
vue inspect --plugins
</code></pre>
        </div>
        <h2 id="using-resolved-config-as-a-file"><a href="#using-resolved-config-as-a-file" aria-hidden="true"
                                                    class="header-anchor">#</a> Using Resolved Config as a File</h2>
        <p>Some external tools may need access to the resolved webpack config as a file, for example IDEs or command
            line tools that expects a webpack config path. In that case you can use the following path:</p>
        <div class="language- extra-class"><pre class="language-text"><code>&lt;projectRoot&gt;/node_modules/@vue/cli-service/webpack.config.js
</code></pre>
        </div>
        <p>This file dynamically resolves and exports the exact same webpack config used in <code>vue-cli-service</code>
            commands, including those from plugins and even your custom configurations.</p></div>
</template>

<script>
    export default {
        name: "Development-webpack"
    }
</script>

<style scoped>
    .content {
        width: 800px;
        margin: 0 auto;
        padding: 0 100px;
    }

</style>