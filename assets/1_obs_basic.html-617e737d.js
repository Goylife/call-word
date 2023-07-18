import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as h,c as d,a,b as e,d as n,e as r}from"./app-8d7261b9.js";const l={},s={href:"https://obsproject.com/",target:"_blank",rel:"noopener noreferrer"},c=r('<h2 id="主界面" tabindex="-1"><a class="header-anchor" href="#主界面" aria-hidden="true">#</a> 主界面</h2><p>OBS 界面看起来有些复杂，但可以分为菜单栏、预览区、主按钮区和运行状态四个区块。日常使用中，我们只需要接触主按钮区，它包括场景、来源、混音器、转场特效和控制按钮。</p><figure><img src="https://img.newzone.top/2023-01-05-20-47-16.png" alt="" tabindex="0" loading="lazy"><figcaption>OBS 主界面</figcaption></figure><h3 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h3><p>场景（Scenes）是指直播中不同的场面。不同的场景可以用于不同的领域或场合，例如自习室场景、街拍场景、个人访问、卖货直播。</p><p>场景有四个按钮，从左到右依次为：添加场景，删除场景，向上移动场景，向下移动场景。</p><figure><img src="https://img.newzone.top/2023-01-05-21-16-34.png" alt="" tabindex="0" loading="lazy"><figcaption>场景按钮</figcaption></figure><h3 id="来源" tabindex="-1"><a class="header-anchor" href="#来源" aria-hidden="true">#</a> 来源</h3><p>来源（Source）是指场景中的素材，比如摄像头画面、图像、音频等。来源区有 7 个按钮，上方两个为源属性和滤镜，下方 5 个按钮依次为：添加来源，删除来源，源属性，向上移动源，向下移动源。</p><figure><img src="https://img.newzone.top/2023-01-05-22-47-14.png" alt="" tabindex="0" loading="lazy"><figcaption>来源按钮</figcaption></figure><h3 id="混音器" tabindex="-1"><a class="header-anchor" href="#混音器" aria-hidden="true">#</a> 混音器</h3><p>混音器（Audio Mixer）是直播的音频控制器。点击混音器左下角的齿轮按钮，进入「高级音频属性」，可管理所有的音频设备。</p><p>混音器设置中，「音频监听」最为重要。默认为「关闭监听」，指音频仅对直播间观众播放，主播听不到。「仅监听 (输出静音)」表示观众听不到，但主播能听到，观众可通过主播话筒的收音听到声音。「监听并输出」表示主播和观众都能听到。「监听并输出」模式中，建议主播使用耳麦，而不是话筒，否则观众容易听不清主播说话的声音，话筒声音会被输出音频盖住。</p><figure><img src="https://img.newzone.top/2023-01-06-01-22-30.png" alt="" tabindex="0" loading="lazy"><figcaption>直播高级音频属性</figcaption></figure><h3 id="转场特效" tabindex="-1"><a class="header-anchor" href="#转场特效" aria-hidden="true">#</a> 转场特效</h3><p>转场特效（Scene Transitions）指的是在两个场景或素材之间，采用渐变、移动、滑入滑出等技巧，实现场景或情节之间平滑过渡的效果。</p><h3 id="控制按钮" tabindex="-1"><a class="header-anchor" href="#控制按钮" aria-hidden="true">#</a> 控制按钮</h3><p>控制按钮（Controls）区域集成了 OBS 的核心功能，按钮分别为「开始直播」「开始录制」「启动虚拟摄像机」「工作室模式」。</p><p>「启动虚拟摄像机」是将 OBS 场景作为摄像头画面对外输出，适合将画面输出到不支持 OBS 推流的平台或软件。例如，抖音直播要求粉丝在一万以上才能使用 OBS 推流，而启用虚拟摄像头后，将直播摄像头设为「OBS-Camera」即可达到类似推流效果。</p><p>「工作室模式」下，显示区域会分为两块：左侧为预览区，右侧为输出区。点击中间按钮「转场特效」，即可将左侧预览区输出到直播画面。</p><figure><img src="https://img.newzone.top/2023-01-06-01-38-21.png" alt="" tabindex="0" loading="lazy"><figcaption>工作室模式</figcaption></figure><h2 id="设置" tabindex="-1"><a class="header-anchor" href="#设置" aria-hidden="true">#</a> 设置</h2><p>在使用 OBS 直播前，请先点击右上角菜单栏中的「文件」&gt;「设置」，调整 OBS 的设置。</p><h3 id="直播" tabindex="-1"><a class="header-anchor" href="#直播" aria-hidden="true">#</a> 直播</h3><p>点击「设置」&gt;「直播」，将「服务」调整为自定义，服务器和推流码则按平台要求输入。</p><figure><img src="https://img.newzone.top/2022-06-30-14-33-34.png" alt="" tabindex="0" loading="lazy"><figcaption>推流服务器设置</figcaption></figure><h3 id="输出" tabindex="-1"><a class="header-anchor" href="#输出" aria-hidden="true">#</a> 输出</h3><p>点击「设置」&gt;「输出」，将「输出模式」设为高级，其他设置参考下方样例。</p><ul><li>「直播设置」&gt;「编码器」中，如果你的显卡配置不错，尽量选硬件编码，如 <code>NVIDIA NVENC H.264</code>。</li><li>「编码器设置」&gt;「比特率」用来设置直播的清晰度，推荐 4000-6000 Kbps。注意：直播并非越清晰越好，它对网络稳定性要求较高，过高的清晰度可能导致直播卡顿。我的自习室直播间只有 2500 Kbps。</li></ul><figure><img src="https://img.newzone.top/2023-01-05-20-06-39.png" alt="" tabindex="0" loading="lazy"><figcaption>直播输出设置</figcaption></figure><h3 id="音频" tabindex="-1"><a class="header-anchor" href="#音频" aria-hidden="true">#</a> 音频</h3><p>点击「设置」&gt;「音频」&gt;「通用」，将声道设为单声道。除非你是歌唱主播，否则无需使用立体声。</p><h3 id="视频" tabindex="-1"><a class="header-anchor" href="#视频" aria-hidden="true">#</a> 视频</h3><p>点击「设置」&gt;「视频」，按需设置直播分辨率，通常为 <code>1920x1080</code> 或 <code>1280x720</code>。如果你是做电商直播，需要进行<strong>竖屏直播</strong>，就将分辨率反过来设置，比如 <code>1080x1920</code> 或 <code>720x1280</code>。「输出（画布）分辨率」与「基础（缩放）分辨率」建议设为相同数值，避免出现缩放问题。</p><p>「常用帧率」在日常直播中只需要 30，游戏直播建议调整到 60。</p><figure><img src="https://img.newzone.top/2023-01-05-20-22-29.png" alt="" tabindex="0" loading="lazy"><figcaption>直播分辨率设置</figcaption></figure><h3 id="高级" tabindex="-1"><a class="header-anchor" href="#高级" aria-hidden="true">#</a> 高级</h3><p>点击「设置」&gt;「高级」，将「进程优先级」设为高，以降低电脑卡顿的概率。然后，启用「直播延迟」和「自动重连」功能，以避免直播事故的发生。「直播延迟」启用后，观众看到的直播画面会比实时要慢，延迟时间一般为 3~20 秒。</p><figure><img src="https://img.newzone.top/2023-01-05-21-09-13.png" alt="" tabindex="0" loading="lazy"><figcaption>OBS 高级设置</figcaption></figure><h2 id="直播来源" tabindex="-1"><a class="header-anchor" href="#直播来源" aria-hidden="true">#</a> 直播来源</h2><p>了解 OBS 界面和设置后，我们回到主按钮区的「来源」，深入了解来源种类和滤镜。直播来源种类繁多，可以分为四类：静态来源、音频来源、视频来源和组合来源。</p><figure><img src="https://img.newzone.top/2023-01-06-02-10-05.png" alt="" tabindex="0" loading="lazy"><figcaption>直播来源</figcaption></figure><h3 id="静态来源" tabindex="-1"><a class="header-anchor" href="#静态来源" aria-hidden="true">#</a> 静态来源</h3><ul><li>文本（GDI+）：添加文字，并可设置背景和移动效果。</li><li>色源：添加指定色彩的纯色画面素材。</li><li>图像：添加静态图像素材。</li><li>图像幻灯片放映：以幻灯片形式播放指定图像文件。</li><li>浏览器：以浏览器方式显示网址内容或打开本地 html 文件。</li></ul><h3 id="音频来源" tabindex="-1"><a class="header-anchor" href="#音频来源" aria-hidden="true">#</a> 音频来源</h3><ul><li>音频输入采集：话筒输入。</li><li>音频输出采集：音响输出。</li><li>应用程序音频捕获：获取指定应用程序的音频输出。</li></ul><h3 id="视频来源" tabindex="-1"><a class="header-anchor" href="#视频来源" aria-hidden="true">#</a> 视频来源</h3>',47),p=a("li",null,"视频采集设备：捕获设备的视频画面，多用于摄像头。",-1),g=a("li",null,"窗口采集：捕获指定程序的窗口画面。使用窗口采集时，窗口不能最小化，否则窗口会卡住不同步。",-1),f=a("li",null,"游戏源：采集游戏画面。",-1),u=a("li",null,"显示器采集：捕获单个显示器的完整视频画面。",-1),b=a("li",null,"媒体源：播放本地或在线的音视频文件。",-1),m={href:"https://www.videolan.org/vlc/",target:"_blank",rel:"noopener noreferrer"},x=r('<h3 id="组合输出" tabindex="-1"><a class="header-anchor" href="#组合输出" aria-hidden="true">#</a> 组合输出</h3><ul><li>场景：将指定场景作为来源输入当前场景中。</li><li>来源镜像：将指定来源复制到当前场景。</li><li>分组：将来源置于同一分组，可批量更改可见性和锁定状态。</li></ul><h2 id="滤镜" tabindex="-1"><a class="header-anchor" href="#滤镜" aria-hidden="true">#</a> 滤镜</h2><p>选择「来源」&gt;「滤镜」，可对来源素材进行裁剪、过滤、增益等多种处理。滤镜可分为效果滤镜和音视频滤镜。下文将介绍几种常用滤镜。</p><h3 id="常用滤镜" tabindex="-1"><a class="header-anchor" href="#常用滤镜" aria-hidden="true">#</a> 常用滤镜</h3><ul><li>裁剪/填充：效果滤镜，对来源进行裁剪，剪去多余的部分。</li><li>噪音阈值：音视频滤镜，当背景有噪音时，设置噪音阈值来控制底噪，降低噪音干扰。</li><li>增益：音视频滤镜，当麦克风声音过大或过小时，可以通过增益滤镜调整音量，但是不宜设置数值过大，容易造成声音失真。</li></ul><h3 id="色度键-抠图" tabindex="-1"><a class="header-anchor" href="#色度键-抠图" aria-hidden="true">#</a> 色度键（抠图）</h3><p>「色度键」属于效果滤镜，能将指定颜色变为透明，多用于绿幕实时抠图，可以在直播时把绿幕替换为其他场景。</p><figure><img src="https://img.newzone.top/20210328235013.gif?imageMogr2/format/webp" alt="色度键滤镜一键抠图" tabindex="0" loading="lazy"><figcaption>色度键滤镜一键抠图</figcaption></figure><h3 id="模糊" tabindex="-1"><a class="header-anchor" href="#模糊" aria-hidden="true">#</a> 模糊</h3>',10),_={href:"https://github.com/Xaymar/obs-StreamFX/releases",target:"_blank",rel:"noopener noreferrer"},z=r('<figure><img src="https://img.newzone.top/2023-01-08-06-49-05.png" alt="" tabindex="0" loading="lazy"><figcaption>右侧为模糊效果</figcaption></figure><figure><img src="https://img.newzone.top/2023-01-06-02-51-10.png" alt="" tabindex="0" loading="lazy"><figcaption>模糊滤镜设置</figcaption></figure><h3 id="图像蒙版" tabindex="-1"><a class="header-anchor" href="#图像蒙版" aria-hidden="true">#</a> 图像蒙版</h3><p>「图像蒙版/混合」属于效果滤镜，可在摄像头（视频采集设备）上添加定制外框。其中，最常用的应用是主播圆形头像。类型选择「Alpha 蒙版（Alpha 通道）」，路径选择头像形状图片。头像形状图片可任意定制，比如在 1920*1080 的画布上画一个圆形，并填充黑色，其他区域为透明，然后将其导出为 PNG 格式。如果你不想自己画，也可以使用下方示例图片。</p><figure><img src="https://img.newzone.top/2023-05-11-09-04-30.png?imageMogr2/thumbnail/500x" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="色彩校正" tabindex="-1"><a class="header-anchor" href="#色彩校正" aria-hidden="true">#</a> 色彩校正</h3>',6),S={href:"https://github.com/Xaymar/obs-StreamFX/wiki/Filter-Color-Grade",target:"_blank",rel:"noopener noreferrer"},w=a("figure",null,[a("img",{src:"https://img.newzone.top/2023-01-08-07-01-17.png",alt:"",tabindex:"0",loading:"lazy"}),a("figcaption",null,"色彩校正")],-1),B=a("h3",{id:"应用-lut",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#应用-lut","aria-hidden":"true"},"#"),e(" 应用 LUT")],-1),O={href:"https://wwva.lanzoue.com/iEyOs0k8kj3g",target:"_blank",rel:"noopener noreferrer"},y=r('<p>自制 LUT 文件参照下列步骤：</p><ol><li>将 OBS 滤镜插件目录下的 original.png 复制到 Photoshop。</li><li>进入 Photoshop 右侧的调整界面，选择第二行的最右侧「创建新的颜色查找调节图层」。</li><li>载入自带的 3DLUT 文件，调整后导出为 png 文件。这个 png 就是直播能用的 LUT 文件。如果自带 LUT 不能满足需求，则使用 Premiere 调节定制 LUT cube 文件。</li></ol><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="直播延迟严重" tabindex="-1"><a class="header-anchor" href="#直播延迟严重" aria-hidden="true">#</a> 直播延迟严重</h3><p>选择「设置」&gt;「高级」，检查「直播延迟」是否启用了。主流机器不会导致直播严重延迟，出现延迟的原因多是因为启用了「直播延迟」设置。</p><h3 id="一直断开重连" tabindex="-1"><a class="header-anchor" href="#一直断开重连" aria-hidden="true">#</a> 一直断开重连</h3><p>右下角弹出提示「OBS Studio 已断开连接。正在重新连接...」，这说明直播服务设置错误。选择「设置」&gt;「直播」，更新服务器和推流码内容。注意：某些平台只要断开，推流码就会改变。</p><h2 id="后续" tabindex="-1"><a class="header-anchor" href="#后续" aria-hidden="true">#</a> 后续</h2><p>我原本想一篇写完 OBS 的入门，但基础使用已经占据了较长篇幅。为了避免重蹈上一篇的覆辙，OBS 插件的介绍会放在篇二更新。</p>',9);function L(k,T){const i=o("ExternalLinkIcon");return h(),d("div",null,[a("p",null,[a("a",s,[e("Open Broadcaster Software"),n(i)]),e("（OBS）是一款免费开源的视频录制和直播应用，支持 Windows、Mac 和 Linux 平台。大部分直播软件都是基于 OBS 内核开发的。无论你准备在哪个平台直播，OBS 都是最推荐的直播入门软件。本文将从基础开始，为新手介绍 OBS 的界面、设置和直播使用方法。")]),c,a("ul",null,[p,g,f,u,b,a("li",null,[e("VLC 视频源：安装 "),a("a",m,[e("VLC"),n(i)]),e(" 才能启用本来源。「VLC 视频源」用于多个音视频按序播放，支持字幕。")])]),x,a("p",null,[e("「模糊」属于效果滤镜，可将指定区域模糊化以维护隐私。推荐设置：类型设为「Dual Filtering（双重过滤）」，大小为 4，应用蒙版后可以选择模糊区域。与 Gaussian 类型相比，Dual Filtering 生成模糊效果最快，对配置要求更低。要使用模糊滤镜，需要安装插件 "),a("a",_,[e("StreamFX"),n(i)]),e("。")]),z,a("p",null,[a("a",S,[e("色彩校正"),n(i)]),e("（Color Grading）属于效果滤镜，使用伽玛、对比度、亮度、饱和度、色调偏移、不透明度、颜色叠加、添加颜色来改变或校正最终画面的颜色和亮度。")]),w,B,a("p",null,[e("「应用 LUT」属于效果滤镜。它使用 LUT 对画面进行色彩调整，相当于手机修图用的风格滤镜，能够大大提升画面效果。初期可以使用我的 "),a("a",O,[e("LUT 设置"),n(i)]),e("，「路径」指向解压后的 png 文件。")]),y])}const V=t(l,[["render",L],["__file","1_obs_basic.html.vue"]]);export{V as default};
