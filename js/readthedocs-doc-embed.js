!function t(e,n,r){function o(s,a){if(!n[s]){if(!e[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(i)return i(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return o(n?n:t)},l,l.exports,t,e,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(t,e,n){function r(){var t={navBar:null,win:null,winScroll:!1,winResize:!1,linkScroll:!1,winPosition:0,winHeight:null,docHeight:null,isRunning:null};return t.enable=function(){var t=this;o(function(e){t.init(e),t.reset(),t.win.on("hashchange",t.reset),t.win.on("scroll",function(){t.linkScroll||(t.winScroll=!0)}),setInterval(function(){t.winScroll&&t.onScroll()},25),t.win.on("resize",function(){t.winResize=!0}),setInterval(function(){t.winResize&&t.onResize()},25),t.onResize()})},t.init=function(t){var e=(t(document),this);this.navBar=t("div.wy-side-scroll:first"),this.win=t(window),t(document).on("click","[data-toggle='wy-nav-top']",function(){t("[data-toggle='wy-nav-shift']").toggleClass("shift"),t("[data-toggle='rst-versions']").toggleClass("shift")}).on("click",".wy-menu-vertical .current ul li a",function(){var n=t(this);t("[data-toggle='wy-nav-shift']").removeClass("shift"),t("[data-toggle='rst-versions']").toggleClass("shift"),e.toggleCurrent(n),e.hashChange()}).on("click","[data-toggle='rst-current-version']",function(){t("[data-toggle='rst-versions']").toggleClass("shift-up")}),t("table.docutils:not(.field-list)").wrap("<div class='wy-table-responsive'></div>"),t(".wy-menu-vertical ul").not(".simple").siblings("a").each(function(){var n=t(this);expand=t('<span class="toctree-expand"></span>'),expand.on("click",function(t){return e.toggleCurrent(n),t.stopPropagation(),!1}),n.prepend(expand)})},t.reset=function(){var t=encodeURI(window.location.hash);if(t)try{var e=$(".wy-menu-vertical").find('[href="'+t+'"]');$(".wy-menu-vertical li.toctree-l1 li.current").removeClass("current"),e.closest("li.toctree-l2").addClass("current"),e.closest("li.toctree-l3").addClass("current"),e.closest("li.toctree-l4").addClass("current")}catch(n){console.log("Error expanding nav for anchor",n)}},t.onScroll=function(){this.winScroll=!1;var t=this.win.scrollTop(),e=t+this.winHeight,n=this.navBar.scrollTop(),r=n+(t-this.winPosition);0>t||e>this.docHeight||(this.navBar.scrollTop(r),this.winPosition=t)},t.onResize=function(){this.winResize=!1,this.winHeight=this.win.height(),this.docHeight=$(document).height()},t.hashChange=function(){this.linkScroll=!0,this.win.one("hashchange",function(){this.linkScroll=!1})},t.toggleCurrent=function(t){var e=t.closest("li");e.siblings("li.current").removeClass("current"),e.siblings().find("li.current").removeClass("current"),e.find("> ul li.current").removeClass("current"),e.toggleClass("current")},t}var o="undefined"!=typeof window?window.jQuery:t("jquery");e.exports.ThemeNav=r(),"undefined"!=typeof window&&(window.SphinxRtdTheme={StickyNav:e.exports.ThemeNav})},{jQuery:"jquery"}],2:[function(t,e,n){function r(){var t=s.get(),e={project:t.project,version:t.version,page:t.page,theme:t.get_theme_name(),format:"jsonp"};"docroot"in t&&(e.docroot=t.docroot),"source_suffix"in t&&(e.source_suffix=t.source_suffix),0===window.location.pathname.indexOf("/projects/")&&(e.subproject=!0),$.ajax({url:t.api_host+"/api/v2/footer_html/",crossDomain:!0,xhrFields:{withCredentials:!0},dataType:"jsonp",data:e,success:function(t){a.init(t.version_compare),o(t),i()},error:function(){console.error("Error loading Read the Docs footer")}})}function o(t){var e=s.get();if(e.is_rtd_theme()?$("div.rst-other-versions").html(t.html):$("body").append(t.html),t.version_active?!t.version_supported:$(".rst-current-version").addClass("rst-out-of-date"),t.promo&&e.show_promo()){var n=new c.Promo(t.promo_data.id,t.promo_data.text,t.promo_data.link,t.promo_data.image);n&&n.display()}}function i(){function t(t){return/^(GET|HEAD|OPTIONS|TRACE)$/.test(t)}$.ajaxSetup({beforeSend:function(e,n){t(n.type)||e.setRequestHeader("X-CSRFToken",$("a.bookmark[token]").attr("token"))}})}var s=t("./rtd-data"),a=t("./version-compare"),c=t("../sponsorship");e.exports={init:r}},{"../sponsorship":9,"./rtd-data":5,"./version-compare":7}],3:[function(t,e,n){function r(){$.ajax({url:"https://api.grokthedocs.com/static/javascript/bundle-client.js",crossDomain:!0,dataType:"script"})}e.exports={init:r}},{}],4:[function(t,e,n){function r(){var t=o.get();if("builder"in t&&"mkdocs"==t.builder){$("<input>").attr({type:"hidden",name:"project",value:t.project}).appendTo("#rtd-search-form"),$("<input>").attr({type:"hidden",name:"version",value:t.version}).appendTo("#rtd-search-form"),$("<input>").attr({type:"hidden",name:"type",value:"file"}).appendTo("#rtd-search-form"),$("#rtd-search-form").prop("action",t.api_host+"/search/");var e=$("nav.wy-nav-side:first"),n=$(window),r="stickynav",i=function(){e.height()<=n.height()?e.addClass(r):e.removeClass(r)};n.on("resize",i),i()}}var o=t("./rtd-data");e.exports={init:r}},{"./rtd-data":5}],5:[function(t,e,n){function r(){var t=Object.create(o),e={api_host:"https://readthedocs.org"};return $.extend(t,e,window.READTHEDOCS_DATA),t}var o={is_rtd_theme:function(){return"sphinx_rtd_theme"===this.get_theme_name()},is_sphinx_builder:function(){return!("builder"in this)||"mkdocs"!=this.builder},get_theme_name:function(){return"sphinx_rtd_theme"!==this.theme&&1===$("div.rst-other-versions").length?"sphinx_rtd_theme":this.theme},show_promo:function(){return"https://readthedocs.com"!==this.api_host&&this.is_sphinx_builder()&&this.is_rtd_theme()}};e.exports={get:r}},{}],6:[function(t,e,n){function r(){var t=o.get();if($(document).on("click","[data-toggle='rst-current-version']",function(){var t=$("[data-toggle='rst-versions']").hasClass("shift-up")?"was_open":"was_closed";_gaq&&_gaq.push(["rtfd._setAccount","UA-17997319-1"],["rtfd._trackEvent","Flyout","Click",t])}),!("builder"in t)||"builder"in t&&"mkdocs"!=t.builder){var e=i.ThemeNav;if($(document).ready(function(){setTimeout(function(){e.navBar||e.enable()},1e3)}),t.is_rtd_theme()){var n=jquery("div.wy-side-scroll:first");if(!n.length){var r=jquery("nav.wy-nav-side:first"),s=$("<div />").addClass("wy-side-scroll");r.children().detach().appendTo(s),s.prependTo(r),e.navBar=s}}}}var o=t("./rtd-data"),i=t("./../../../../../../bower_components/sphinx-rtd-theme/js/theme.js");e.exports={init:r}},{"./../../../../../../bower_components/sphinx-rtd-theme/js/theme.js":1,"./rtd-data":5}],7:[function(t,e,n){function r(t){var e=o.get();if(!t.is_highest){var n=window.location.pathname.replace(e.version,t.slug),r=$('<div class="admonition warning"> <p class="first admonition-title">Note</p> <p class="last"> You are not using the most up to date version of the library. <a href="#"></a> is the newest version.</p></div>');r.find("a").attr("href",n).text(t.version);var i=$("div.body");i.length||(i=$("div.document")),i.prepend(r)}}var o=t("./rtd-data");e.exports={init:r}},{"./rtd-data":5}],8:[function(t,e,n){var r=(t("./sponsorship"),t("./doc-embed/footer.js")),o=t("./doc-embed/grokthedocs-client"),i=t("./doc-embed/mkdocs"),s=(t("./doc-embed/rtd-data"),t("./doc-embed/sphinx"));$(document).ready(function(){r.init(),s.init(),o.init(),i.init()})},{"./doc-embed/footer.js":2,"./doc-embed/grokthedocs-client":3,"./doc-embed/mkdocs":4,"./doc-embed/rtd-data":5,"./doc-embed/sphinx":6,"./sponsorship":9}],9:[function(t,e,n){function r(t,e,n,r){this.id=t,this.text=e,this.link=n,this.image=r,this.promo=null}e.exports={Promo:r},r.prototype.create=function(){function t(){_gaq&&_gaq.push(["rtfd._setAccount","UA-17997319-1"],["rtfd._trackEvent","Promo","Click",e.id])}var e=this,n=$("nav.wy-nav-side");if(n.length){promo=$("<div />").attr("class","wy-menu rst-pro");{var r=$("<div />").attr("class","rst-pro-about"),o=$("<a />").attr("href","http://docs.readthedocs.org/en/latest/sponsors.html#sponsorship-information").appendTo(r);$("<i />").attr("class","fa fa-info-circle").appendTo(o)}if(r.appendTo(promo),e.image){{var i=$("<a />").attr("class","rst-pro-image-wrapper").attr("href",e.link).attr("target","_blank").on("click",t);$("<img />").attr("class","rst-pro-image").attr("src",e.image).appendTo(i)}promo.append(i)}var s=$("<span />").html(e.text);return $(s).find("a").each(function(){$(this).attr("class","rst-pro-link").attr("href",e.link).attr("target","_blank").on("click",t)}),promo.append(s),promo.appendTo(n),promo.wrapper=$("<div />").attr("class","rst-pro-wrapper").appendTo(n),promo}},r.prototype.display=function(){var t=this.promo;t||(t=this.promo=this.create()),t&&t.show()},r.prototype.disable=function(){},r.from_variants=function(t){if(0==t.length)return null;var e=Math.floor(Math.random()*t.length),n=t[e],o=n.text,i=n.link,s=n.image,a=n.id;return new r(a,o,i,s)}},{}]},{},[8]);