! function e(t, i, n) {
    function o(s, a) {
        if (!i[s]) {
            if (!t[s]) {
                var c = "function" == typeof require && require;
                if (!a && c) return c(s, !0);
                if (r) return r(s, !0);
                var d = new Error("Cannot find module '" + s + "'");
                throw d.code = "MODULE_NOT_FOUND", d
            }
            var l = i[s] = {
                exports: {}
            };
            t[s][0].call(l.exports, function(e) {
                return o(t[s][1][e] || e)
            }, l, l.exports, e, t, i, n)
        }
        return i[s].exports
    }
    for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
    return o
}({
    1: [function(e, t, i) {
        ! function(e, i) {
            void 0 !== t && t.exports ? t.exports = i() : "function" == typeof define && define.amd ? define(i) : this.bowser = i()
        }(0, function() {
            function e(e) {
                function i(t) {
                    var i = e.match(t);
                    return i && i.length > 1 && i[1] || ""
                }
                var n, o = i(/(ipod|iphone|ipad)/i).toLowerCase(),
                    r = /like android/i.test(e),
                    s = !r && /android/i.test(e),
                    a = /CrOS/.test(e),
                    c = i(/edge\/(\d+(\.\d+)?)/i),
                    d = i(/version\/(\d+(\.\d+)?)/i),
                    l = /tablet/i.test(e),
                    u = !l && /[^-]mobi/i.test(e);
                /opera|opr/i.test(e) ? n = {
                    name: "Opera",
                    opera: t,
                    version: d || i(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
                } : /yabrowser/i.test(e) ? n = {
                    name: "Yandex Browser",
                    yandexbrowser: t,
                    version: d || i(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
                } : /windows phone/i.test(e) ? (n = {
                    name: "Windows Phone",
                    windowsphone: t
                }, c ? (n.msedge = t, n.version = c) : (n.msie = t, n.version = i(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(e) ? n = {
                    name: "Internet Explorer",
                    msie: t,
                    version: i(/(?:msie |rv:)(\d+(\.\d+)?)/i)
                } : a ? n = {
                    name: "Chrome",
                    chromeBook: t,
                    chrome: t,
                    version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                } : /chrome.+? edge/i.test(e) ? n = {
                    name: "Microsoft Edge",
                    msedge: t,
                    version: c
                } : /chrome|crios|crmo/i.test(e) ? n = {
                    name: "Chrome",
                    chrome: t,
                    version: i(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
                } : o ? (n = {
                    name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
                }, d && (n.version = d)) : /sailfish/i.test(e) ? n = {
                    name: "Sailfish",
                    sailfish: t,
                    version: i(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
                } : /seamonkey\//i.test(e) ? n = {
                    name: "SeaMonkey",
                    seamonkey: t,
                    version: i(/seamonkey\/(\d+(\.\d+)?)/i)
                } : /firefox|iceweasel/i.test(e) ? (n = {
                    name: "Firefox",
                    firefox: t,
                    version: i(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
                }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(e) && (n.firefoxos = t)) : /silk/i.test(e) ? n = {
                    name: "Amazon Silk",
                    silk: t,
                    version: i(/silk\/(\d+(\.\d+)?)/i)
                } : s ? n = {
                    name: "Android",
                    version: d
                } : /phantom/i.test(e) ? n = {
                    name: "PhantomJS",
                    phantom: t,
                    version: i(/phantomjs\/(\d+(\.\d+)?)/i)
                } : /blackberry|\bbb\d+/i.test(e) || /rim\stablet/i.test(e) ? n = {
                    name: "BlackBerry",
                    blackberry: t,
                    version: d || i(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
                } : /(web|hpw)os/i.test(e) ? (n = {
                    name: "WebOS",
                    webos: t,
                    version: d || i(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
                }, /touchpad\//i.test(e) && (n.touchpad = t)) : n = /bada/i.test(e) ? {
                    name: "Bada",
                    bada: t,
                    version: i(/dolfin\/(\d+(\.\d+)?)/i)
                } : /tizen/i.test(e) ? {
                    name: "Tizen",
                    tizen: t,
                    version: i(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || d
                } : /safari/i.test(e) ? {
                    name: "Safari",
                    safari: t,
                    version: d
                } : {
                    name: i(/^(.*)\/(.*) /),
                    version: function(t) {
                        var i = e.match(t);
                        return i && i.length > 1 && i[2] || ""
                    }(/^(.*)\/(.*) /)
                }, !n.msedge && /(apple)?webkit/i.test(e) ? (n.name = n.name || "Webkit", n.webkit = t, !n.version && d && (n.version = d)) : !n.opera && /gecko\//i.test(e) && (n.name = n.name || "Gecko", n.gecko = t, n.version = n.version || i(/gecko\/(\d+(\.\d+)?)/i)), n.msedge || !s && !n.silk ? o && (n[o] = t, n.ios = t) : n.android = t;
                var f = "";
                n.windowsphone ? f = i(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o ? (f = i(/os (\d+([_\s]\d+)*) like mac os x/i), f = f.replace(/[_\s]/g, ".")) : s ? f = i(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? f = i(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? f = i(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? f = i(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (f = i(/tizen[\/\s](\d+(\.\d+)*)/i)), f && (n.osversion = f);
                var p = f.split(".")[0];
                return l || "ipad" == o || s && (3 == p || 4 == p && !u) || n.silk ? n.tablet = t : (u || "iphone" == o || "ipod" == o || s || n.blackberry || n.webos || n.bada) && (n.mobile = t), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.chrome && n.version >= 20 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 ? n.a = t : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 ? n.c = t : n.x = t, n
            }
            var t = !0,
                i = e("undefined" != typeof navigator ? navigator.userAgent : "");
            return i.test = function(e) {
                for (var t = 0; t < e.length; ++t) {
                    var n = e[t];
                    if ("string" == typeof n && n in i) return !0
                }
                return !1
            }, i._detect = e, i
        })
    }, {}],
    2: [function(e, t, i) {
        var n = e("bowser"),
            o = document.queryCommandSupported;
        document.queryCommandSupported = function(e) {
            if ("copy" === e || "cut" === e) {
                if (n.chrome) return n.version >= 43;
                if (n.firefox) return n.version >= 41
            }
            return o.apply(this, arguments)
        }
    }, {
        bowser: 1
    }]
}, {}, [2]),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Clipboard = e()
    }
}(function() {
    var e;
    return function e(t, i, n) {
        function o(s, a) {
            if (!i[s]) {
                if (!t[s]) {
                    var c = "function" == typeof require && require;
                    if (!a && c) return c(s, !0);
                    if (r) return r(s, !0);
                    var d = new Error("Cannot find module '" + s + "'");
                    throw d.code = "MODULE_NOT_FOUND", d
                }
                var l = i[s] = {
                    exports: {}
                };
                t[s][0].call(l.exports, function(e) {
                    return o(t[s][1][e] || e)
                }, l, l.exports, e, t, i, n)
            }
            return i[s].exports
        }
        for (var r = "function" == typeof require && require, s = 0; s < n.length; s++) o(n[s]);
        return o
    }({
        1: [function(e, t, i) {
            var n = e("matches-selector");
            t.exports = function(e, t, i) {
                for (var o = i ? e : e.parentNode; o && o !== document;) {
                    if (n(o, t)) return o;
                    o = o.parentNode
                }
            }
        }, {
            "matches-selector": 5
        }],
        2: [function(e, t, i) {
            function n(e, t, i, n, r) {
                var s = o.apply(this, arguments);
                return e.addEventListener(i, s, r), {
                    destroy: function() {
                        e.removeEventListener(i, s, r)
                    }
                }
            }

            function o(e, t, i, n) {
                return function(i) {
                    i.delegateTarget = r(i.target, t, !0), i.delegateTarget && n.call(e, i)
                }
            }
            var r = e("closest");
            t.exports = n
        }, {
            closest: 1
        }],
        3: [function(e, t, i) {
            i.node = function(e) {
                return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType
            }, i.nodeList = function(e) {
                var t = Object.prototype.toString.call(e);
                return void 0 !== e && ("[object NodeList]" === t || "[object HTMLCollection]" === t) && "length" in e && (0 === e.length || i.node(e[0]))
            }, i.string = function(e) {
                return "string" == typeof e || e instanceof String
            }, i.fn = function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }
        }, {}],
        4: [function(e, t, i) {
            function n(e, t, i) {
                if (!e && !t && !i) throw new Error("Missing required arguments");
                if (!a.string(t)) throw new TypeError("Second argument must be a String");
                if (!a.fn(i)) throw new TypeError("Third argument must be a Function");
                if (a.node(e)) return o(e, t, i);
                if (a.nodeList(e)) return r(e, t, i);
                if (a.string(e)) return s(e, t, i);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }

            function o(e, t, i) {
                return e.addEventListener(t, i), {
                    destroy: function() {
                        e.removeEventListener(t, i)
                    }
                }
            }

            function r(e, t, i) {
                return Array.prototype.forEach.call(e, function(e) {
                    e.addEventListener(t, i)
                }), {
                    destroy: function() {
                        Array.prototype.forEach.call(e, function(e) {
                            e.removeEventListener(t, i)
                        })
                    }
                }
            }

            function s(e, t, i) {
                return c(document.body, e, t, i)
            }
            var a = e("./is"),
                c = e("delegate");
            t.exports = n
        }, {
            "./is": 3,
            delegate: 2
        }],
        5: [function(e, t, i) {
            function n(e, t) {
                if (r) return r.call(e, t);
                for (var i = e.parentNode.querySelectorAll(t), n = 0; n < i.length; ++n)
                    if (i[n] == e) return !0;
                return !1
            }
            var o = Element.prototype,
                r = o.matchesSelector || o.webkitMatchesSelector || o.mozMatchesSelector || o.msMatchesSelector || o.oMatchesSelector;
            t.exports = n
        }, {}],
        6: [function(e, t, i) {
            function n(e) {
                var t;
                if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) e.focus(), e.setSelectionRange(0, e.value.length), t = e.value;
                else {
                    e.hasAttribute("contenteditable") && e.focus();
                    var i = window.getSelection(),
                        n = document.createRange();
                    n.selectNodeContents(e), i.removeAllRanges(), i.addRange(n), t = i.toString()
                }
                return t
            }
            t.exports = n
        }, {}],
        7: [function(e, t, i) {
            function n() {}
            n.prototype = {
                on: function(e, t, i) {
                    var n = this.e || (this.e = {});
                    return (n[e] || (n[e] = [])).push({
                        fn: t,
                        ctx: i
                    }), this
                },
                once: function(e, t, i) {
                    function n() {
                        o.off(e, n), t.apply(i, arguments)
                    }
                    var o = this;
                    return n._ = t, this.on(e, n, i)
                },
                emit: function(e) {
                    var t = [].slice.call(arguments, 1),
                        i = ((this.e || (this.e = {}))[e] || []).slice(),
                        n = 0,
                        o = i.length;
                    for (n; o > n; n++) i[n].fn.apply(i[n].ctx, t);
                    return this
                },
                off: function(e, t) {
                    var i = this.e || (this.e = {}),
                        n = i[e],
                        o = [];
                    if (n && t)
                        for (var r = 0, s = n.length; s > r; r++) n[r].fn !== t && n[r].fn._ !== t && o.push(n[r]);
                    return o.length ? i[e] = o : delete i[e], this
                }
            }, t.exports = n
        }, {}],
        8: [function(t, i, n) {
            ! function(o, r) {
                if ("function" == typeof e && e.amd) e(["module", "select"], r);
                else if (void 0 !== n) r(i, t("select"));
                else {
                    var s = {
                        exports: {}
                    };
                    r(s, o.select), o.clipboardAction = s.exports
                }
            }(this, function(e, t) {
                "use strict";

                function i(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
                var n = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(t),
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                    },
                    r = function() {
                        function e(e, t) {
                            for (var i = 0; i < t.length; i++) {
                                var n = t[i];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                            }
                        }
                        return function(t, i, n) {
                            return i && e(t.prototype, i), n && e(t, n), t
                        }
                    }(),
                    s = function() {
                        function e(t) {
                            i(this, e), this.resolveOptions(t), this.initSelection()
                        }
                        return e.prototype.resolveOptions = function() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            this.action = e.action, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = ""
                        }, e.prototype.initSelection = function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }, e.prototype.selectFake = function() {
                            var e = this,
                                t = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandler = document.body.addEventListener("click", function() {
                                return e.removeFake()
                            }), this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "fixed", this.fakeElem.style[t ? "right" : "left"] = "-9999px", this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, document.body.appendChild(this.fakeElem), this.selectedText = (0, n.default)(this.fakeElem), this.copyText()
                        }, e.prototype.removeFake = function() {
                            this.fakeHandler && (document.body.removeEventListener("click"), this.fakeHandler = null), this.fakeElem && (document.body.removeChild(this.fakeElem), this.fakeElem = null)
                        }, e.prototype.selectTarget = function() {
                            this.selectedText = (0, n.default)(this.target), this.copyText()
                        }, e.prototype.copyText = function() {
                            var e = void 0;
                            try {
                                e = document.execCommand(this.action)
                            } catch (t) {
                                e = !1
                            }
                            this.handleResult(e)
                        }, e.prototype.handleResult = function(e) {
                            e ? this.emitter.emit("success", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            }) : this.emitter.emit("error", {
                                action: this.action,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }, e.prototype.clearSelection = function() {
                            this.target && this.target.blur(), window.getSelection().removeAllRanges()
                        }, e.prototype.destroy = function() {
                            this.removeFake()
                        }, r(e, [{
                            key: "action",
                            set: function() {
                                var e = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                                if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                            },
                            get: function() {
                                return this._action
                            }
                        }, {
                            key: "target",
                            set: function(e) {
                                if (void 0 !== e) {
                                    if (!e || "object" !== (void 0 === e ? "undefined" : o(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                    if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                    if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                    this._target = e
                                }
                            },
                            get: function() {
                                return this._target
                            }
                        }]), e
                    }();
                e.exports = s
            })
        }, {
            select: 6
        }],
        9: [function(t, i, n) {
            ! function(o, r) {
                if ("function" == typeof e && e.amd) e(["module", "./clipboard-action", "tiny-emitter", "good-listener"], r);
                else if (void 0 !== n) r(i, t("./clipboard-action"), t("tiny-emitter"), t("good-listener"));
                else {
                    var s = {
                        exports: {}
                    };
                    r(s, o.clipboardAction, o.tinyEmitter, o.goodListener), o.clipboard = s.exports
                }
            }(this, function(e, t, i, n) {
                "use strict";

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function r(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function s(e, t) {
                    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }

                function a(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }

                function c(e, t) {
                    var i = "data-clipboard-" + e;
                    if (t.hasAttribute(i)) return t.getAttribute(i)
                }
                var d = o(t),
                    l = o(i),
                    u = o(n),
                    f = function(e) {
                        function t(i, n) {
                            r(this, t);
                            var o = s(this, e.call(this));
                            return o.resolveOptions(n), o.listenClick(i), o
                        }
                        return a(t, e), t.prototype.resolveOptions = function() {
                            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                            this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText
                        }, t.prototype.listenClick = function(e) {
                            var t = this;
                            this.listener = (0, u.default)(e, "click", function(e) {
                                return t.onClick(e)
                            })
                        }, t.prototype.onClick = function(e) {
                            var t = e.delegateTarget || e.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new d.default({
                                action: this.action(t),
                                target: this.target(t),
                                text: this.text(t),
                                trigger: t,
                                emitter: this
                            })
                        }, t.prototype.defaultAction = function(e) {
                            return c("action", e)
                        }, t.prototype.defaultTarget = function(e) {
                            var t = c("target", e);
                            return t ? document.querySelector(t) : void 0
                        }, t.prototype.defaultText = function(e) {
                            return c("text", e)
                        }, t.prototype.destroy = function() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }, t
                    }(l.default);
                e.exports = f
            })
        }, {
            "./clipboard-action": 8,
            "good-listener": 4,
            "tiny-emitter": 7
        }]
    }, {}, [9])(9)
}),
function(e) {
    "use strict";

    function t() {
        var e = r.value = decodeURIComponent(r.value.trim());
        r.classList.remove("valid"), r.classList.toggle("invalid", e.length), o.value = "", o.classList.remove("valid"), s.disabled = !0;
        for (var t in n) {
            var i = n[t][0],
                a = n[t][1];
            if (i.test(e)) {
                r.classList.remove("invalid"), r.classList.add("valid"), o.value = e.replace(i, a), o.classList.add("valid"), s.disabled = !1;
                break
            }
        }
    }

    function i(e) {
        setTimeout(function() {
            e.target.select()
        }, 1)
    }
    var n = [
            [/^(https?):\/\/gitlab\.com\/([^\/]+\/[^\/]+)\/(?:raw|blob)\/(.+\..+?)(?:\?.*)?$/i, "$1://" + cdn_domain + "/$2/raw/$3"],
            [/^(https?):\/\/bitbucket\.org\/([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+\..+?)(?:\?.*)?$/i, "$1://" + cdn_domain + "/$2/raw/$3"],
            [/^(https?):\/\/bitbucket\.org\/snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+\..+?))$/i, "$1://" + cdn_domain + "/!api/2.0/snippets/$2/$3/files/$4"],
            [/^(https?):\/\/bitbucket\.org\/snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+\..+?))$/i, "$1://" + cdn_domain + "/!api/2.0/snippets/$2/HEAD/files/$3"],
            [/^(https?):\/\/bitbucket\.org\/\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+\..+?)(?:\?.*)?$/i, "$1://" + cdn_domain + "/!api/2.0/snippets/$2/files/$3"],
            [/^(https?):\/\/api\.bitbucket\.org\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+\..+?)(?:\?.*)?$/i, "$1://" + cdn_domain + "/!api/2.0/snippets/$2/files/$3"],
            [/^(https?):\/\/raw\.github(?:usercontent)?\.com\/([^\/]+\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+\..+)/i, "$1://" + cdn_domain + "/$2/$3"],
            [/^(https?):\/\/github\.com\/(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i, "$1://" + cdn_domain + "/$2/$3/$4"],
            [/^(https?):\/\/gist\.github(?:usercontent)?\.com\/(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+\..+)$/i, "$1://" + cdn_domain + "/$2"]
        ],
        o = e.getElementById("url-prod"),
        r = e.getElementById("url");
    new Clipboard(".inp-copy-button");
    var s = e.getElementById("url-prod-copy");
    e.queryCommandSupported && e.queryCommandSupported("copy") && (s.style.display = "inline-block"), r.addEventListener("input", t, !1), /(iPhone|iPad|iPod)/i.test(navigator.userAgent) && (inputProd.removeAttribute("readonly"), inputProd.addEventListener("keydown", function(e) {
        e.preventDefault()
    })), t(), o.addEventListener("focus", i), r.addEventListener("focus", i)
}(document);
