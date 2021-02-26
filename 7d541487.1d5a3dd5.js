(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{134:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/webpack-bundle-analyzer-0fac122b5b5a74559bfc0612d7dea1dc.png"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),l=n(7),i=(n(0),n(90)),r={id:"bundles",title:"Bundles",sidebar_label:"Bundles",slug:"/features"},o={unversionedId:"features/bundles",id:"features/bundles",isDocsHomePage:!1,title:"Bundles",description:"Template and layout bundles are a build-time optimization which ensures",source:"@site/docs\\features\\bundles.md",slug:"/features",permalink:"/shopify-packer/docs/features",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/features/bundles.md",version:"current",sidebar_label:"Bundles",sidebar:"someSidebar",previous:{title:"Webpack",permalink:"/shopify-packer/docs/config/webpack"},next:{title:"Liquid styles",permalink:"/shopify-packer/docs/features/liquid-styles"}},c=[{value:"Automatic bundle creation",id:"automatic-bundle-creation",children:[]},{value:"Shared JS dependencies chunking",id:"shared-js-dependencies-chunking",children:[]},{value:"Template and layout styles",id:"template-and-layout-styles",children:[]},{value:"Including generated bundles in your theme",id:"including-generated-bundles-in-your-theme",children:[]},{value:"Bundle analyzer",id:"bundle-analyzer",children:[]}],s={toc:c};function d(e){var t=e.components,r=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Template and layout bundles are a build-time optimization which ensures\nthat only the JS and CSS needed for the current page is downloaded and\nexecuted. This optimization results in improved page load speed,\nespecially on mobile devices with limited computing power and network capacity."),Object(i.b)("p",null,"In order to take advantage of template and layout bundles,\nyour Packer project's src/script/ folder must include the following folders:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\u2514\u2500\u2500 src\n   \u2514\u2500\u2500 scripts\n   \u2502   \u251c\u2500\u2500 layout\n   \u2502   \u2514\u2500\u2500 templates\n   \u251c\u2500\u2500 layout\n   \u2514\u2500\u2500 templates\n")),Object(i.b)("h3",{id:"automatic-bundle-creation"},"Automatic bundle creation"),Object(i.b)("p",null,"On build, Packer will look for each file in the src/scripts/layout and\nsrc/scripts/templates folders and see if there is a matching file\nin the src/layout and src/templates folders. If there is a match, a\ntemplate or layout bundle is created for that match."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"\u2514\u2500\u2500 src\n   \u2514\u2500\u2500 scripts\n   \u2502   \u251c\u2500\u2500 layout\n   \u2502   \u2502   \u2514\u2500\u2500 theme.js\n   \u2502   \u2514\u2500\u2500 templates\n   \u2502       \u251c\u2500\u2500 index.js\n   \u2502       \u2514\u2500\u2500 product.js\n   \u251c\u2500\u2500 layout\n   \u2502   \u2514\u2500\u2500 theme.liquid\n   \u2514\u2500\u2500 templates\n       \u251c\u2500\u2500 index.liquid\n       \u2514\u2500\u2500 product.liquid\n")),Object(i.b)("p",null,"Using the example above and calling packer build, Packer will look for matching template and\nlayout files inside the src/scripts/ folder and generate the following JS bundles:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"layout.theme.js"),": Both ",Object(i.b)("inlineCode",{parentName:"li"},"theme.liquid")," and ",Object(i.b)("inlineCode",{parentName:"li"},"theme.js")," exist."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"template.index.js"),": Both ",Object(i.b)("inlineCode",{parentName:"li"},"index.liquid")," and ",Object(i.b)("inlineCode",{parentName:"li"},"index.js")," exist."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"template.product.js"),": Both ",Object(i.b)("inlineCode",{parentName:"li"},"product.liquid")," and ",Object(i.b)("inlineCode",{parentName:"li"},"product.js")," exist.")),Object(i.b)("p",null,"Note that the following bundles ",Object(i.b)("strong",{parentName:"p"},"are not")," generated:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"template.page.about-us.js"),": Packer cannot find a ",Object(i.b)("inlineCode",{parentName:"li"},"src/template/page.about-us.liquid")," file."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"template.collection.js"),": Packer cannot find a ",Object(i.b)("inlineCode",{parentName:"li"},"scripts/templates/collection.js")," file.")),Object(i.b)("h3",{id:"shared-js-dependencies-chunking"},"Shared JS dependencies chunking"),Object(i.b)("p",null,"A critical optimization needed for template and layout bundles to be successful\nis to split shared dependencies between bundles into separate chunks.\nThis reduces the amount of duplicate code included in each bundle and\nfurther improves page load performance."),Object(i.b)("p",null,"Let's continue with the file structure from the previous example, and\nsee how shared dependencies are separated:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"index.js")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"@import depA from 'depA';\n@import depB from 'depB';\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"index.js")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"@import depB from 'depB';\n@import depC from 'depC';\n")),Object(i.b)("p",null,"In the example above, we have 2 files which each import 2 dependencies.\nBoth files have a shared dependency, depB. Instead of bundling depB into\ntemplate.index.js and again in template.product.js, Packer splits depB\ninto its own bundle chunk. The resulting generated files are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"template.index.js"),": Code that is only used on the index template."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"template.product.js"),": Code that is only used on the product template."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"template.index@template.product.js"),": Code that is used on both index and product templates.")),Object(i.b)("h3",{id:"template-and-layout-styles"},"Template and layout styles"),Object(i.b)("p",null,"It's also possible to structure your styles so that only those needed\nfor the current page are loaded. This is made possible by the JS bundling\nmentioned above. Let's take a look at what a typical Packer project might\nlook like and how it would take advantage of template and layout styles."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"layout/theme.js")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scss"},"import '../../styles/layout/theme.scss';\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"layout/product.js")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-scss"},"import '../../styles/templates/product.scss';\n")),Object(i.b)("p",null,"Looking at the above examples, we can see that we are importing two\ndifferent SCSS files. We can expect that ",Object(i.b)("inlineCode",{parentName:"p"},"theme.scss")," contains global\nstyles that are used through most of the theme's pages, such as header\nand navigation styles. ",Object(i.b)("inlineCode",{parentName:"p"},"product.scss")," might include styles that are\nspecific to the product template, such as a product image gallery."),Object(i.b)("p",null,"The following imports would generate the following files:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"layout.theme.css.liquid")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"template.product.css.liquid"))),Object(i.b)("h3",{id:"including-generated-bundles-in-your-theme"},"Including generated bundles in your theme"),Object(i.b)("p",null,"Now that you have template and layout bundles with shared dependency chunking,\nyou'll notice that there are a lot of JS files in your compiled Packer project\n(found in the dist folder). It would be pretty tedious to code and manage\nall the ",Object(i.b)("inlineCode",{parentName:"p"},"<script>")," tags for each of these assets. So let's have Packer handle this!"),Object(i.b)("p",null,"packer generates ",Object(i.b)("inlineCode",{parentName:"p"},"script-tags.liquid")," and ",Object(i.b)("inlineCode",{parentName:"p"},"styles-tags.liquid")," snippets\nwhich include ",Object(i.b)("inlineCode",{parentName:"p"},"<script>")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<link>")," tags needed for each bundle.\nThese snippets also include all the liquid logic needed to selectively load\nthese bundles based on the current template and layout.\nAll you need to do is include these snippets in your layout files."),Object(i.b)("p",null,"For example, here is what you would include in your ",Object(i.b)("inlineCode",{parentName:"p"},"layout/theme.liquid"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"{% include 'style-tags' %}\n{% include 'script-tags', layout: 'theme' %}\n")),Object(i.b)("p",null,"where the layout option value is the name of the layout."),Object(i.b)("h3",{id:"bundle-analyzer"},"Bundle analyzer"),Object(i.b)("p",null,"Packer's ",Object(i.b)("a",{parentName:"p",href:"/docs/commands#build"},"build script")," can use Webpack Bundle Analyzer to see what's inside each bundle for further optimization"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Bundle Analyzer",src:n(134).default})))}d.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),d=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(r,".").concat(b)]||u[b]||p[b]||i;return n?l.a.createElement(m,o(o({ref:t},s),{},{components:n})):l.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);