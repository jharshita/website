(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(152),o=n(150),u=n(7),c=n.n(u),s=(n(147),function(t){function e(){return t.apply(this,arguments)||this}return c()(e,t),e.prototype.render=function(){return r.a.createElement("p",null,"Hello World!!!")},e}(a.Component));e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement(s,null))}},146:function(t,e,n){var a;t.exports=(a=n(149))&&a.default||a},147:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(33),c=n.n(u);n.d(e,"a",function(){return c.a});n(146);var s=r.a.createContext({}),l=function(t){return r.a.createElement(s.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},149:function(t,e,n){"use strict";n.r(e);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(55),c=n(2),s=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?r.a.createElement(u.a,Object.assign({location:e,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},150:function(t,e,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(156),s=n.n(c);function l(t){var e=t.description,n=t.lang,r=t.meta,o=t.title,u=a.data.site,c=e||u.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:c}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},l.propTypes={description:u.a.string,lang:u.a.string,meta:u.a.arrayOf(u.a.object),title:u.a.string.isRequired},e.a=l},151:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},152:function(t,e,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),u=n.n(o),c=n(147),s=n(7),l=n.n(s),p=n(153),d=n.n(p),f=n(154);function m(){var t=d()(['\n\t& {\n\t\theight: 25px;\n\t\twidth: calc(25px * 3.2);\n\t\tdisplay: block;\n\t\tposition: relative;\n\t\tbackground: #053582;\n\t\t&:before {\n\t\t\tcontent: "";\n\t\t\theight: 180px;\n\t\t\twidth: 25px;\n\t\t\ttop: -180px / 2 + 9;\n\t\t\tbackground: #000000;\n\t\t\tposition: absolute;\n\t\t}\n\t\t&:after {\n\t\t\tcontent: "";\n\t\t\theight: 180px;\n\t\t\twidth: 25px;\n\t\t\tbackground: #000000;\n\t\t\tposition: absolute;\n\t\t\tright: -50px;\n\t\t\ttop: -180px / 2 + 9;\n\t\t}\n\t}\n']);return m=function(){return t},t}function g(){var t=d()(["\n\tdisplay: flex;\n\talign-items: center;\n\theight: 400px;\n\tjustify-content: flex-start;\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\tbackground-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);\n\tmargin-bottom: 1.45rem;\n"]);return g=function(){return t},t}var h=f.a.div(g()),y=(f.a.div(m()),function(t){function e(){return t.apply(this,arguments)||this}return l()(e,t),e.prototype.render=function(){return i.a.createElement(h,null,"hello")},e}(r.Component)),b=(n(155),function(t){var e=t.children;return i.a.createElement(c.b,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,null),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:a})});b.propTypes={children:u.a.node.isRequired};e.a=b}}]);
//# sourceMappingURL=component---src-pages-index-js-7d6b8e19b8199b84c252.js.map