(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{397:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/media-services?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Media Services Documentation"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h4",{attrs:{id:"a-lap-around-azure-media-player"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-lap-around-azure-media-player","aria-hidden":"true"}},[t._v("#")]),t._v(" A Lap Around Azure Media Player")]),t._v(" "),a("p",[t._v("Check out "),a("router-link",{attrs:{to:"./tip179.html"}},[t._v("Part 2 - Using Media Analytics to search for specific terms in a Video")])],1),t._v(" "),a("p",[t._v("More and more, video has become an integral part of immersive, modern applications, and with the Azure Media Player your applications can easily surface audio and video content—hosted in Azure Media Services—in the format best for the current viewing device.")]),t._v(" "),a("p",[t._v("A quick way to get started is to take a look at the "),a("a",{attrs:{href:"https://ampdemo.azureedge.net/azuremediaplayer.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Media Player demo"),a("OutboundLink")],1),t._v(", which you can use to experiment with tracks in your own Azure Media Services account or just play back one of the two dozen hosted samples.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/amp.png")}}),t._v(" "),a("p",[t._v("Just by perusing the samples you get an idea of the variety of adaptive streaming formats and DRM technologies supported. If you look under the “Chosen Player Options” in the left sidebar, you can see what format and playback technology has been selected for your current device. Here DASH stands for Dynamic Adaptive Streaming over HTTP, an international standard for adaptive bitrate streaming.")]),t._v(" "),a("p",[t._v("However, when playing on an iPhone using Safari, for example, notice that the Azure Media Player opts for the HTTP Live Streaming (HLS) option using native HTML5. For older platforms, Adobe Flash or Microsoft Silverlight might even be selected. Consult the "),a("a",{attrs:{href:"http://amp.azure.net/libs/amp/latest/docs/index.html#compatibility-matrix",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatibility matrix"),a("OutboundLink")],1),t._v(" to get a better understanding of how the "),a("em",[t._v("default")]),t._v(" rendering options differ among various browser and platform combinations.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/amp-ios.jpg")}}),t._v(" "),a("p",[t._v("Media geeks out there will also be interested in the various diagnostics that can be captured as the video is playing. If you suspect your media will be playing in environments with limited bandwidth, you could simulate a throttled network with Chrome’s Developer Tools or another utility and visualize the effect on bitrates and buffering.")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/files/amp-diag.png")}}),t._v(" "),a("p",[t._v("Embedding the player into your own web application is simple and can be done via an IFrame or, optionally, using the HTML5 video tag with some JavaScript to customize behavior. The Code tab of the Azure Media Player Demo app provides both approaches.  For the IFrame option, you can paste the tag into the <body> of a bare bones HTML document and quickly view the result. The HTML5/JavaScript option provides a bit of HTML markup as well as ancillary script (that you would generally save separately and refer to in a <script> tag). Below is the JavaScript snippet provided for our sample video")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myOptions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tnativeControlsForTouch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcontrols"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tautoplay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\twidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"640"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\theight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"400"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmyPlayer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("amp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"azuremediaplayer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" myOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmyPlayer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://amssamples.streaming.mediaservices.windows.net/830584f8-f0c8-4e41-968b-6538b9380aa5/TearsOfSteelTeaser.ism/manifest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/vnd.ms-sstr+xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"protectionInfo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AES"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authenticationToken"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<redacted token>"')]),t._v("\n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("p",[t._v("Note that the "),a("code",[t._v("amp")]),t._v(" object has a number of "),a("a",{attrs:{href:"https://amp.azure.net/libs/amp/latest/docs/index.html#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("options"),a("OutboundLink")],1),t._v(" that can be used to customize the capabilities of the player, including whether controls should be displayed, options for playback speed, "),a("a",{attrs:{href:"https://amp.azure.net/libs/amp/latest/samples/dynamic_webvtt.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("live captioning"),a("OutboundLink")],1),t._v(", and hot keys for controlling the volume, screen size, and play position. Programmatically, you can tap into "),a("a",{attrs:{href:"https://amp.azure.net/libs/amp/latest/docs/index.html#amp.eventname",target:"_blank",rel:"noopener noreferrer"}},[t._v("events"),a("OutboundLink")],1),t._v(" just as you would expect for any JavaScript object. There is even a "),a("a",{attrs:{href:"http://amp.azure.net/libs/amp/latest/docs/PLUGINS.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("plug-in model"),a("OutboundLink")],1),t._v(" through which you and other developers can enhance player functionality.")]),t._v(" "),a("p",[t._v("For more details on specific capabilities, as well as code for a variety of scenarios, be sure to check out the latest "),a("a",{attrs:{href:"http://amp.azure.net/libs/amp/latest/docs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs"),a("OutboundLink")],1),t._v(" and particularly "),a("a",{attrs:{href:"http://amp.azure.net/libs/amp/latest/docs/samples.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("these samples"),a("OutboundLink")],1),t._v(", which show how to exercise more of the player options themselves like playback speed, localization of captions, and event handling.")])])},[],!1,null,null,null);e.default=n.exports}}]);