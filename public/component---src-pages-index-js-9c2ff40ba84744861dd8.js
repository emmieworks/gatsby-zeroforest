(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return f}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("vOnD"),o=a("7oih"),c=a("EYWl"),m=a("Zg9t"),s=a("9eSz"),d=a.n(s),g=i.c.h1.withConfig({displayName:"pages__PageTitle",componentId:"sc-1h3el4u-0"})(["text-align:center;margin-bottom:30px;position:relative;padding:10px;font-family:allura,cursive;font-size:2rem;&:after{position:absolute;bottom:10px;left:calc(50% - 30px);width:60px;height:1px;content:'';border-radius:3px;background:var(--gray);}"]),p=i.c.p.withConfig({displayName:"pages__Description",componentId:"sc-1h3el4u-1"})(["text-align:center;margin-bottom:var(--middleMargin);"]),u=i.c.article.withConfig({displayName:"pages__Article",componentId:"sc-1h3el4u-2"})(["margin-bottom:var(--smallMargin);padding-bottom:var(--smallMargin);border-bottom:1px dashed var(--lightGray);&:last-child{border-bottom:none;}.flex{z-index:10;display:flex;flex-direction:row;justify-content:space-between;align-items:center;@media screen and (max-width:780px){flex-direction:column;.left,.right{width:100%;max-width:100%;flex:1;}}}.left{flex:2;position:relative;}.right{flex:3;padding:30px;@media screen and (max-width:780px){padding:30px 0;}}.category{font-family:'Allura',cursive;font-size:1.8rem;position:absolute;color:var(--secondary);top:0px;left:-20px;transform:rotate(-15deg);z-index:10;}h3{font-size:1.1rem;padding-bottom:15px;a{text-decoration:none;}}p{font-size:0.9rem;line-height:1.8;padding-bottom:15px;}.info{display:flex;justify-content:space-between;color:var(--primary);@media screen and (max-width:780px){flex-direction:column;.date{margin-bottom:10px;}}}.tag{font-size:0.8rem;display:inline-block;color:var(--primary);text-decoration:none;transition:all 200ms ease-in;position:relative;&:not(:last-child):after{content:'/';padding:0.5rem;}}"]);t.default=function(e){var t=e.data,a=e.location,n=t.allMarkdownRemark.edges;return l.a.createElement(o.a,null,l.a.createElement(c.a,{location:a,title:"Home"}),l.a.createElement("div",{className:"container"},l.a.createElement(g,null,"Blog"),l.a.createElement(p,null,"Web制作／デザインをテーマに発信しています"),n.map((function(e){var a=e.node,n=a.frontmatter.tags?a.frontmatter.tags.map((function(e){return l.a.createElement(r.Link,{to:("/tags/"+e+"/").toLowerCase(),className:"tag",key:e},e)})):"";return l.a.createElement(u,{key:a.fields.slug},l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"left"},l.a.createElement("div",{className:"category"},a.frontmatter.category),l.a.createElement("figure",null,l.a.createElement(r.Link,{to:a.fields.slug,className:"link"},a.frontmatter.featured?l.a.createElement(d.a,{fluid:a.frontmatter.featured.childImageSharp.fluid,alt:a.frontmatter.title}):l.a.createElement(d.a,{fluid:t.noimage.childImageSharp.fluid,alt:a.frontmatter.title})))),l.a.createElement("div",{className:"right"},l.a.createElement("h3",null,l.a.createElement(r.Link,{to:a.fields.slug,className:"link"},a.frontmatter.title)),l.a.createElement("section",{className:"pc"},l.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.frontmatter.description||a.excerpt}})),l.a.createElement("div",{className:"info"},l.a.createElement("small",{className:"date"},a.frontmatter.date),l.a.createElement("div",null,n)))))})),l.a.createElement(r.Link,{to:"/blog/",className:"btn"},"SEE MORE")),l.a.createElement(m.a,null))};var f="2755929647"},Zg9t:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("vOnD"),i=a("Wbzz"),o=r.c.div.withConfig({displayName:"BlogMenu__Wrapper",componentId:"sc-1cq89ly-0"})(["margin-top:1rem;padding:1rem 0;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:center;div{width:30%;margin-top:var(--smallMargin);;margin-bottom:var(--smallMargin);;padding:0 auto;font-family:'Montserrat',sans-serif;a{text-decoration:none;}}ul{margin-top:10px;border-left:1px solid var(--secondary);padding-left:30px;li{padding:8px;}}@media screen and (max-width:780px){flex-direction:column;div{width:100%;}}}"]);t.a=function(){return l.a.createElement(o,{className:"container"},l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(i.Link,{to:"/category/programming/"},"Programming")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/html/"},"HTML")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/css/"},"CSS")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/javascript/"},"JavaScript")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/category/wordpress/"},"WordPress")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/gatsby/"},"Gatsby")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/git/"},"git")))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(i.Link,{to:"/category/design/"},"Design")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/illustrator/"},"illustrator")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/デザイン独学/"},"デザイン独学")))),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement(i.Link,{to:"/category/column/"},"Column")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/活動記録/"},"活動記録")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/journal/"},"Journal")),l.a.createElement("li",null,l.a.createElement(i.Link,{to:"/tags/私の愛用品/"},"私の愛用品")))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-9c2ff40ba84744861dd8.js.map