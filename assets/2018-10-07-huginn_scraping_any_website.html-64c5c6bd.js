const n=JSON.parse('{"key":"v-73041b3a","path":"/posts/2018-10-07-huginn_scraping_any_website.html","title":"RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）","lang":"zh-CN","frontmatter":{"title":"RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）","date":"2018-10-07T00:00:00.000Z","category":["自动化"],"tag":["Huginn","rss"],"order":-22,"description":"烧制网页 RSS 源，主要有 FEED43 和 Huginn 两种方法。 FEED43：简单免费，六小时抓取一次，每次抓取 20 条静态页面。 Huginn：自由度高，能自定义抓取频率、内容结构、js 结果、输出样式等；需要搭建服务器，学习 Huginn 抓取规则。 Huginn 准备工作 准备 NAS 或 Debian/Ubuntu 环境的服务器； 参考 deploy Huginn inside of Docker、installation guide for Debian/Ubuntu 来搭建 Huginn。 注册 PhantomJs Cloud ,然后将 API key 保存在 Huginn 的 Credentials 中。很多网站是用 JS 加载动态内容，因此需要 PhantomJs Cloud 来抓取页面 JS 缓存。免费版每天限制抓取 500 次页面，需求不大可建立多个账号使用不同 API key，足够个人使用。","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2018-10-07-huginn_scraping_any_website.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）"}],["meta",{"property":"og:description","content":"烧制网页 RSS 源，主要有 FEED43 和 Huginn 两种方法。 FEED43：简单免费，六小时抓取一次，每次抓取 20 条静态页面。 Huginn：自由度高，能自定义抓取频率、内容结构、js 结果、输出样式等；需要搭建服务器，学习 Huginn 抓取规则。 Huginn 准备工作 准备 NAS 或 Debian/Ubuntu 环境的服务器； 参考 deploy Huginn inside of Docker、installation guide for Debian/Ubuntu 来搭建 Huginn。 注册 PhantomJs Cloud ,然后将 API key 保存在 Huginn 的 Credentials 中。很多网站是用 JS 加载动态内容，因此需要 PhantomJs Cloud 来抓取页面 JS 缓存。免费版每天限制抓取 500 次页面，需求不大可建立多个账号使用不同 API key，足够个人使用。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-18T08:18:19.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:tag","content":"Huginn"}],["meta",{"property":"article:tag","content":"rss"}],["meta",{"property":"article:published_time","content":"2018-10-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-18T08:18:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RSS 进阶篇：Huginn - 真·为任意网页定制 RSS 源（PhantomJs 抓取）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-10-07T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-18T08:18:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"Huginn 准备工作","slug":"huginn-准备工作","link":"#huginn-准备工作","children":[]},{"level":2,"title":"PhantomJs 网页抓取","slug":"phantomjs-网页抓取","link":"#phantomjs-网页抓取","children":[{"level":3,"title":"页面缓存","slug":"页面缓存","link":"#页面缓存","children":[]},{"level":3,"title":"解析网页内容","slug":"解析网页内容","link":"#解析网页内容","children":[]},{"level":3,"title":"获取内容路径","slug":"获取内容路径","link":"#获取内容路径","children":[]},{"level":3,"title":"导出 RSS","slug":"导出-rss","link":"#导出-rss","children":[]}]},{"level":2,"title":"RSS 合集","slug":"rss-合集","link":"#rss-合集","children":[]}],"git":{"createdTime":1689668299000,"updatedTime":1689668299000,"contributors":[{"name":"Goy","email":"851652467@qq.com","commits":1}]},"readingTime":{"minutes":2.76,"words":828},"filePathRelative":"_posts/2018-10-07-huginn_scraping_any_website.md","localizedDate":"2018年10月7日","excerpt":"<p>烧制网页 RSS 源，主要有 <strong>FEED43</strong> 和 <strong>Huginn</strong> 两种方法。</p>\\n<ul>\\n<li>FEED43：简单免费，六小时抓取一次，每次抓取 20 条静态页面。</li>\\n<li>Huginn：自由度高，能自定义<strong>抓取频率、内容结构、js 结果、输出样式</strong>等；需要搭建服务器，学习 Huginn 抓取规则。</li>\\n</ul>\\n<h2> Huginn 准备工作</h2>\\n<ul>\\n<li>\\n<p>准备 NAS 或 Debian/Ubuntu 环境的服务器；</p>\\n</li>\\n<li>\\n<p>参考 <a href=\\"https://github.com/huginn/huginn/blob/master/doc/docker/install.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">deploy Huginn inside of Docker</a>、<a href=\\"https://github.com/huginn/huginn/blob/master/doc/manual/installation.md\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">installation guide for Debian/Ubuntu</a> 来搭建 Huginn。</p>\\n</li>\\n<li>\\n<p>注册 <a href=\\"https://phantomjscloud.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">PhantomJs Cloud</a> ,然后将 API key 保存在 Huginn 的 Credentials 中。很多网站是用 JS 加载动态内容，因此需要 <strong>PhantomJs Cloud</strong> 来抓取页面 JS 缓存。免费版每天限制抓取 500 次页面，需求不大可建立多个账号使用不同 API key，足够个人使用。</p>\\n<figure><img src=\\"https://img.newzone.top/20181006010447.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n</li>\\n</ul>","autoDesc":true}');export{n as data};
