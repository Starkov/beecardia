/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
!function (e, t) {
    function n(e) {
        var t = e.length, n = lt.type(e);
        return lt.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e) {
        var t = St[e] = {};
        return lt.each(e.match(ut) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function r(e, n, i, r) {
        if (lt.acceptData(e)) {
            var a, o, s = lt.expando, l = "string" == typeof n, c = e.nodeType, u = c ? lt.cache : e, h = c ? e[s] : e[s] && s;
            if (h && u[h] && (r || u[h].data) || !l || i !== t)return h || (c ? e[s] = h = Q.pop() || lt.guid++ : h = s), u[h] || (u[h] = {}, c || (u[h].toJSON = lt.noop)), ("object" == typeof n || "function" == typeof n) && (r ? u[h] = lt.extend(u[h], n) : u[h].data = lt.extend(u[h].data, n)), a = u[h], r || (a.data || (a.data = {}), a = a.data), i !== t && (a[lt.camelCase(n)] = i), l ? (o = a[n], null == o && (o = a[lt.camelCase(n)])) : o = a, o
        }
    }

    function a(e, t, n) {
        if (lt.acceptData(e)) {
            var i, r, a, o = e.nodeType, l = o ? lt.cache : e, c = o ? e[lt.expando] : lt.expando;
            if (l[c]) {
                if (t && (a = n ? l[c] : l[c].data)) {
                    lt.isArray(t) ? t = t.concat(lt.map(t, lt.camelCase)) : t in a ? t = [t] : (t = lt.camelCase(t), t = t in a ? [t] : t.split(" "));
                    for (i = 0, r = t.length; r > i; i++)delete a[t[i]];
                    if (!(n ? s : lt.isEmptyObject)(a))return
                }
                (n || (delete l[c].data, s(l[c]))) && (o ? lt.cleanData([e], !0) : lt.support.deleteExpando || l != l.window ? delete l[c] : l[c] = null)
            }
        }
    }

    function o(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(Tt, "-$1").toLowerCase();
            if (i = e.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ct.test(i) ? lt.parseJSON(i) : i
                } catch (a) {
                }
                lt.data(e, n, i)
            } else i = t
        }
        return i
    }

    function s(e) {
        var t;
        for (t in e)if (("data" !== t || !lt.isEmptyObject(e[t])) && "toJSON" !== t)return!1;
        return!0
    }

    function l() {
        return!0
    }

    function c() {
        return!1
    }

    function u(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function h(e, t, n) {
        if (t = t || 0, lt.isFunction(t))return lt.grep(e, function (e, i) {
            var r = !!t.call(e, i, e);
            return r === n
        });
        if (t.nodeType)return lt.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var i = lt.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (Vt.test(t))return lt.filter(t, i, !n);
            t = lt.filter(t, i)
        }
        return lt.grep(e, function (e) {
            return lt.inArray(e, t) >= 0 === n
        })
    }

    function d(e) {
        var t = Ut.split("|"), n = e.createDocumentFragment();
        if (n.createElement)for (; t.length;)n.createElement(t.pop());
        return n
    }

    function f(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function p(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function g(e) {
        var t = an.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)lt._data(n, "globalEval", !t || lt._data(t[i], "globalEval"))
    }

    function _(e, t) {
        if (1 === t.nodeType && lt.hasData(e)) {
            var n, i, r, a = lt._data(e), o = lt._data(t, a), s = a.events;
            if (s) {
                delete o.handle, o.events = {};
                for (n in s)for (i = 0, r = s[n].length; r > i; i++)lt.event.add(t, n, s[n][i])
            }
            o.data && (o.data = lt.extend({}, o.data))
        }
    }

    function v(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !lt.support.noCloneEvent && t[lt.expando]) {
                r = lt._data(t);
                for (i in r.events)lt.removeEvent(t, i, r.handle);
                t.removeAttribute(lt.expando)
            }
            "script" === n && t.text !== e.text ? (p(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), lt.support.html5Clone && e.innerHTML && !lt.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function y(e, n) {
        var i, r, a = 0, o = typeof e.getElementsByTagName !== G ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== G ? e.querySelectorAll(n || "*") : t;
        if (!o)for (o = [], i = e.childNodes || e; null != (r = i[a]); a++)!n || lt.nodeName(r, n) ? o.push(r) : lt.merge(o, y(r, n));
        return n === t || n && lt.nodeName(e, n) ? lt.merge([e], o) : o
    }

    function b(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }

    function w(e, t) {
        if (t in e)return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = Tn.length; r--;)if (t = Tn[r] + n, t in e)return t;
        return i
    }

    function x(e, t) {
        return e = t || e, "none" === lt.css(e, "display") || !lt.contains(e.ownerDocument, e)
    }

    function S(e, t) {
        for (var n, i, r, a = [], o = 0, s = e.length; s > o; o++)i = e[o], i.style && (a[o] = lt._data(i, "olddisplay"), n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && x(i) && (a[o] = lt._data(i, "olddisplay", k(i.nodeName)))) : a[o] || (r = x(i), (n && "none" !== n || !r) && lt._data(i, "olddisplay", r ? n : lt.css(i, "display"))));
        for (o = 0; s > o; o++)i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
        return e
    }

    function C(e, t, n) {
        var i = vn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }

    function T(e, t, n, i, r) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2)"margin" === n && (o += lt.css(e, n + Cn[a], !0, r)), i ? ("content" === n && (o -= lt.css(e, "padding" + Cn[a], !0, r)), "margin" !== n && (o -= lt.css(e, "border" + Cn[a] + "Width", !0, r))) : (o += lt.css(e, "padding" + Cn[a], !0, r), "padding" !== n && (o += lt.css(e, "border" + Cn[a] + "Width", !0, r)));
        return o
    }

    function D(e, t, n) {
        var i = !0, r = "width" === t ? e.offsetWidth : e.offsetHeight, a = hn(e), o = lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, a);
        if (0 >= r || null == r) {
            if (r = dn(e, t, a), (0 > r || null == r) && (r = e.style[t]), yn.test(r))return r;
            i = o && (lt.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + T(e, t, n || (o ? "border" : "content"), i, a) + "px"
    }

    function k(e) {
        var t = X, n = wn[e];
        return n || (n = E(e, t), "none" !== n && n || (un = (un || lt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (un[0].contentWindow || un[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = E(e, t), un.detach()), wn[e] = n), n
    }

    function E(e, t) {
        var n = lt(t.createElement(e)).appendTo(t.body), i = lt.css(n[0], "display");
        return n.remove(), i
    }

    function A(e, t, n, i) {
        var r;
        if (lt.isArray(t))lt.each(t, function (t, r) {
            n || kn.test(e) ? i(e, r) : A(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
        }); else if (n || "object" !== lt.type(t))i(e, t); else for (r in t)A(e + "[" + r + "]", t[r], n, i)
    }

    function B(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, a = t.toLowerCase().match(ut) || [];
            if (lt.isFunction(n))for (; i = a[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }

    function P(e, t, n, i) {
        function r(s) {
            var l;
            return a[s] = !0, lt.each(e[s] || [], function (e, s) {
                var c = s(t, n, i);
                return"string" != typeof c || o || a[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }

        var a = {}, o = e === zn;
        return r(t.dataTypes[0]) || !a["*"] && r("*")
    }

    function N(e, n) {
        var i, r, a = lt.ajaxSettings.flatOptions || {};
        for (r in n)n[r] !== t && ((a[r] ? e : i || (i = {}))[r] = n[r]);
        return i && lt.extend(!0, e, i), e
    }

    function F(e, n, i) {
        var r, a, o, s, l = e.contents, c = e.dataTypes, u = e.responseFields;
        for (s in u)s in i && (n[u[s]] = i[s]);
        for (; "*" === c[0];)c.shift(), a === t && (a = e.mimeType || n.getResponseHeader("Content-Type"));
        if (a)for (s in l)if (l[s] && l[s].test(a)) {
            c.unshift(s);
            break
        }
        if (c[0]in i)o = c[0]; else {
            for (s in i) {
                if (!c[0] || e.converters[s + " " + c[0]]) {
                    o = s;
                    break
                }
                r || (r = s)
            }
            o = o || r
        }
        return o ? (o !== c[0] && c.unshift(o), i[o]) : void 0
    }

    function I(e, t) {
        var n, i, r, a, o = {}, s = 0, l = e.dataTypes.slice(), c = l[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), l[1])for (r in e.converters)o[r.toLowerCase()] = e.converters[r];
        for (; i = l[++s];)if ("*" !== i) {
            if ("*" !== c && c !== i) {
                if (r = o[c + " " + i] || o["* " + i], !r)for (n in o)if (a = n.split(" "), a[1] === i && (r = o[c + " " + a[0]] || o["* " + a[0]])) {
                    r === !0 ? r = o[n] : o[n] !== !0 && (i = a[0], l.splice(s--, 0, i));
                    break
                }
                if (r !== !0)if (r && e["throws"])t = r(t); else try {
                    t = r(t)
                } catch (u) {
                    return{state: "parsererror", error: r ? u : "No conversion from " + c + " to " + i}
                }
            }
            c = i
        }
        return{state: "success", data: t}
    }

    function $() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function M() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function H() {
        return setTimeout(function () {
            Qn = t
        }), Qn = lt.now()
    }

    function R(e, t) {
        lt.each(t, function (t, n) {
            for (var i = (ai[t] || []).concat(ai["*"]), r = 0, a = i.length; a > r; r++)if (i[r].call(e, t, n))return
        })
    }

    function L(e, t, n) {
        var i, r, a = 0, o = ri.length, s = lt.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (r)return!1;
            for (var t = Qn || H(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, a = 1 - i, o = 0, l = c.tweens.length; l > o; o++)c.tweens[o].run(a);
            return s.notifyWith(e, [c, a, n]), 1 > a && l ? n : (s.resolveWith(e, [c]), !1)
        }, c = s.promise({elem: e, props: lt.extend({}, t), opts: lt.extend(!0, {specialEasing: {}}, n), originalProperties: t, originalOptions: n, startTime: Qn || H(), duration: n.duration, tweens: [], createTween: function (t, n) {
            var i = lt.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(i), i
        }, stop: function (t) {
            var n = 0, i = t ? c.tweens.length : 0;
            if (r)return this;
            for (r = !0; i > n; n++)c.tweens[n].run(1);
            return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
        }}), u = c.props;
        for (O(u, c.opts.specialEasing); o > a; a++)if (i = ri[a].call(c, e, u, c.opts))return i;
        return R(c, u), lt.isFunction(c.opts.start) && c.opts.start.call(e, c), lt.fx.timer(lt.extend(l, {elem: e, anim: c, queue: c.opts.queue})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function O(e, t) {
        var n, i, r, a, o;
        for (r in e)if (i = lt.camelCase(r), a = t[i], n = e[r], lt.isArray(n) && (a = n[1], n = e[r] = n[0]), r !== i && (e[i] = n, delete e[r]), o = lt.cssHooks[i], o && "expand"in o) {
            n = o.expand(n), delete e[i];
            for (r in n)r in e || (e[r] = n[r], t[r] = a)
        } else t[i] = a
    }

    function W(e, t, n) {
        var i, r, a, o, s, l, c, u, h, d = this, f = e.style, p = {}, g = [], m = e.nodeType && x(e);
        n.queue || (u = lt._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, h = u.empty.fire, u.empty.fire = function () {
            u.unqueued || h()
        }), u.unqueued++, d.always(function () {
            d.always(function () {
                u.unqueued--, lt.queue(e, "fx").length || u.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === lt.css(e, "display") && "none" === lt.css(e, "float") && (lt.support.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", lt.support.shrinkWrapBlocks || d.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (r in t)if (o = t[r], ti.exec(o)) {
            if (delete t[r], l = l || "toggle" === o, o === (m ? "hide" : "show"))continue;
            g.push(r)
        }
        if (a = g.length) {
            s = lt._data(e, "fxshow") || lt._data(e, "fxshow", {}), "hidden"in s && (m = s.hidden), l && (s.hidden = !m), m ? lt(e).show() : d.done(function () {
                lt(e).hide()
            }), d.done(function () {
                var t;
                lt._removeData(e, "fxshow");
                for (t in p)lt.style(e, t, p[t])
            });
            for (r = 0; a > r; r++)i = g[r], c = d.createTween(i, m ? s[i] : 0), p[i] = s[i] || lt.style(e, i), i in s || (s[i] = c.start, m && (c.end = c.start, c.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function j(e, t, n, i, r) {
        return new j.prototype.init(e, t, n, i, r)
    }

    function V(e, t) {
        var n, i = {height: e}, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)n = Cn[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function z(e) {
        return lt.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var q, U, G = typeof t, X = e.document, J = e.location, K = e.jQuery, Y = e.$, Z = {}, Q = [], et = "1.9.1", tt = Q.concat, nt = Q.push, it = Q.slice, rt = Q.indexOf, at = Z.toString, ot = Z.hasOwnProperty, st = et.trim, lt = function (e, t) {
        return new lt.fn.init(e, t, U)
    }, ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ut = /\S+/g, ht = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, dt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, ft = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, pt = /^[\],:{}\s]*$/, gt = /(?:^|:|,)(?:\s*\[)+/g, mt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, _t = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, vt = /^-ms-/, yt = /-([\da-z])/gi, bt = function (e, t) {
        return t.toUpperCase()
    }, wt = function (e) {
        (X.addEventListener || "load" === e.type || "complete" === X.readyState) && (xt(), lt.ready())
    }, xt = function () {
        X.addEventListener ? (X.removeEventListener("DOMContentLoaded", wt, !1), e.removeEventListener("load", wt, !1)) : (X.detachEvent("onreadystatechange", wt), e.detachEvent("onload", wt))
    };
    lt.fn = lt.prototype = {jquery: et, constructor: lt, init: function (e, n, i) {
        var r, a;
        if (!e)return this;
        if ("string" == typeof e) {
            if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : dt.exec(e), !r || !r[1] && n)return!n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
            if (r[1]) {
                if (n = n instanceof lt ? n[0] : n, lt.merge(this, lt.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n : X, !0)), ft.test(r[1]) && lt.isPlainObject(n))for (r in n)lt.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                return this
            }
            if (a = X.getElementById(r[2]), a && a.parentNode) {
                if (a.id !== r[2])return i.find(e);
                this.length = 1, this[0] = a
            }
            return this.context = X, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : lt.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), lt.makeArray(e, this))
    }, selector: "", length: 0, size: function () {
        return this.length
    }, toArray: function () {
        return it.call(this)
    }, get: function (e) {
        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    }, pushStack: function (e) {
        var t = lt.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
    }, each: function (e, t) {
        return lt.each(this, e, t)
    }, ready: function (e) {
        return lt.ready.promise().done(e), this
    }, slice: function () {
        return this.pushStack(it.apply(this, arguments))
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, eq: function (e) {
        var t = this.length, n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    }, map: function (e) {
        return this.pushStack(lt.map(this, function (t, n) {
            return e.call(t, n, t)
        }))
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: nt, sort: [].sort, splice: [].splice}, lt.fn.init.prototype = lt.fn, lt.extend = lt.fn.extend = function () {
        var e, n, i, r, a, o, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || lt.isFunction(s) || (s = {}), c === l && (s = this, --l); c > l; l++)if (null != (a = arguments[l]))for (r in a)e = s[r], i = a[r], s !== i && (u && i && (lt.isPlainObject(i) || (n = lt.isArray(i))) ? (n ? (n = !1, o = e && lt.isArray(e) ? e : []) : o = e && lt.isPlainObject(e) ? e : {}, s[r] = lt.extend(u, o, i)) : i !== t && (s[r] = i));
        return s
    }, lt.extend({noConflict: function (t) {
        return e.$ === lt && (e.$ = Y), t && e.jQuery === lt && (e.jQuery = K), lt
    }, isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? lt.readyWait++ : lt.ready(!0)
    }, ready: function (e) {
        if (e === !0 ? !--lt.readyWait : !lt.isReady) {
            if (!X.body)return setTimeout(lt.ready);
            lt.isReady = !0, e !== !0 && --lt.readyWait > 0 || (q.resolveWith(X, [lt]), lt.fn.trigger && lt(X).trigger("ready").off("ready"))
        }
    }, isFunction: function (e) {
        return"function" === lt.type(e)
    }, isArray: Array.isArray || function (e) {
        return"array" === lt.type(e)
    }, isWindow: function (e) {
        return null != e && e == e.window
    }, isNumeric: function (e) {
        return!isNaN(parseFloat(e)) && isFinite(e)
    }, type: function (e) {
        return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? Z[at.call(e)] || "object" : typeof e
    }, isPlainObject: function (e) {
        if (!e || "object" !== lt.type(e) || e.nodeType || lt.isWindow(e))return!1;
        try {
            if (e.constructor && !ot.call(e, "constructor") && !ot.call(e.constructor.prototype, "isPrototypeOf"))return!1
        } catch (n) {
            return!1
        }
        var i;
        for (i in e);
        return i === t || ot.call(e, i)
    }, isEmptyObject: function (e) {
        var t;
        for (t in e)return!1;
        return!0
    }, error: function (e) {
        throw new Error(e)
    }, parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || X;
        var i = ft.exec(e), r = !n && [];
        return i ? [t.createElement(i[1])] : (i = lt.buildFragment([e], t, r), r && lt(r).remove(), lt.merge([], i.childNodes))
    }, parseJSON: function (t) {
        return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = lt.trim(t), t && pt.test(t.replace(mt, "@").replace(_t, "]").replace(gt, ""))) ? new Function("return " + t)() : (lt.error("Invalid JSON: " + t), void 0)
    }, parseXML: function (n) {
        var i, r;
        if (!n || "string" != typeof n)return null;
        try {
            e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
        } catch (a) {
            i = t
        }
        return i && i.documentElement && !i.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + n), i
    }, noop: function () {
    }, globalEval: function (t) {
        t && lt.trim(t) && (e.execScript || function (t) {
            e.eval.call(e, t)
        })(t)
    }, camelCase: function (e) {
        return e.replace(vt, "ms-").replace(yt, bt)
    }, nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, i) {
        var r, a = 0, o = e.length, s = n(e);
        if (i) {
            if (s)for (; o > a && (r = t.apply(e[a], i), r !== !1); a++); else for (a in e)if (r = t.apply(e[a], i), r === !1)break
        } else if (s)for (; o > a && (r = t.call(e[a], a, e[a]), r !== !1); a++); else for (a in e)if (r = t.call(e[a], a, e[a]), r === !1)break;
        return e
    }, trim: st && !st.call("﻿ ") ? function (e) {
        return null == e ? "" : st.call(e)
    } : function (e) {
        return null == e ? "" : (e + "").replace(ht, "")
    }, makeArray: function (e, t) {
        var i = t || [];
        return null != e && (n(Object(e)) ? lt.merge(i, "string" == typeof e ? [e] : e) : nt.call(i, e)), i
    }, inArray: function (e, t, n) {
        var i;
        if (t) {
            if (rt)return rt.call(t, e, n);
            for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)if (n in t && t[n] === e)return n
        }
        return-1
    }, merge: function (e, n) {
        var i = n.length, r = e.length, a = 0;
        if ("number" == typeof i)for (; i > a; a++)e[r++] = n[a]; else for (; n[a] !== t;)e[r++] = n[a++];
        return e.length = r, e
    }, grep: function (e, t, n) {
        var i, r = [], a = 0, o = e.length;
        for (n = !!n; o > a; a++)i = !!t(e[a], a), n !== i && r.push(e[a]);
        return r
    }, map: function (e, t, i) {
        var r, a = 0, o = e.length, s = n(e), l = [];
        if (s)for (; o > a; a++)r = t(e[a], a, i), null != r && (l[l.length] = r); else for (a in e)r = t(e[a], a, i), null != r && (l[l.length] = r);
        return tt.apply([], l)
    }, guid: 1, proxy: function (e, n) {
        var i, r, a;
        return"string" == typeof n && (a = e[n], n = e, e = a), lt.isFunction(e) ? (i = it.call(arguments, 2), r = function () {
            return e.apply(n || this, i.concat(it.call(arguments)))
        }, r.guid = e.guid = e.guid || lt.guid++, r) : t
    }, access: function (e, n, i, r, a, o, s) {
        var l = 0, c = e.length, u = null == i;
        if ("object" === lt.type(i)) {
            a = !0;
            for (l in i)lt.access(e, n, l, i[l], !0, o, s)
        } else if (r !== t && (a = !0, lt.isFunction(r) || (s = !0), u && (s ? (n.call(e, r), n = null) : (u = n, n = function (e, t, n) {
            return u.call(lt(e), n)
        })), n))for (; c > l; l++)n(e[l], i, s ? r : r.call(e[l], l, n(e[l], i)));
        return a ? e : u ? n.call(e) : c ? n(e[0], i) : o
    }, now: function () {
        return(new Date).getTime()
    }}), lt.ready.promise = function (t) {
        if (!q)if (q = lt.Deferred(), "complete" === X.readyState)setTimeout(lt.ready); else if (X.addEventListener)X.addEventListener("DOMContentLoaded", wt, !1), e.addEventListener("load", wt, !1); else {
            X.attachEvent("onreadystatechange", wt), e.attachEvent("onload", wt);
            var n = !1;
            try {
                n = null == e.frameElement && X.documentElement
            } catch (i) {
            }
            n && n.doScroll && function r() {
                if (!lt.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(r, 50)
                    }
                    xt(), lt.ready()
                }
            }()
        }
        return q.promise(t)
    }, lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Z["[object " + t + "]"] = t.toLowerCase()
    }), U = lt(X);
    var St = {};
    lt.Callbacks = function (e) {
        e = "string" == typeof e ? St[e] || i(e) : lt.extend({}, e);
        var n, r, a, o, s, l, c = [], u = !e.once && [], h = function (t) {
            for (r = e.memory && t, a = !0, s = l || 0, l = 0, o = c.length, n = !0; c && o > s; s++)if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, c && (u ? u.length && h(u.shift()) : r ? c = [] : d.disable())
        }, d = {add: function () {
            if (c) {
                var t = c.length;
                !function i(t) {
                    lt.each(t, function (t, n) {
                        var r = lt.type(n);
                        "function" === r ? e.unique && d.has(n) || c.push(n) : n && n.length && "string" !== r && i(n)
                    })
                }(arguments), n ? o = c.length : r && (l = t, h(r))
            }
            return this
        }, remove: function () {
            return c && lt.each(arguments, function (e, t) {
                for (var i; (i = lt.inArray(t, c, i)) > -1;)c.splice(i, 1), n && (o >= i && o--, s >= i && s--)
            }), this
        }, has: function (e) {
            return e ? lt.inArray(e, c) > -1 : !(!c || !c.length)
        }, empty: function () {
            return c = [], this
        }, disable: function () {
            return c = u = r = t, this
        }, disabled: function () {
            return!c
        }, lock: function () {
            return u = t, r || d.disable(), this
        }, locked: function () {
            return!u
        }, fireWith: function (e, t) {
            return t = t || [], t = [e, t.slice ? t.slice() : t], !c || a && !u || (n ? u.push(t) : h(t)), this
        }, fire: function () {
            return d.fireWith(this, arguments), this
        }, fired: function () {
            return!!a
        }};
        return d
    }, lt.extend({Deferred: function (e) {
        var t = [
            ["resolve", "done", lt.Callbacks("once memory"), "resolved"],
            ["reject", "fail", lt.Callbacks("once memory"), "rejected"],
            ["notify", "progress", lt.Callbacks("memory")]
        ], n = "pending", i = {state: function () {
            return n
        }, always: function () {
            return r.done(arguments).fail(arguments), this
        }, then: function () {
            var e = arguments;
            return lt.Deferred(function (n) {
                lt.each(t, function (t, a) {
                    var o = a[0], s = lt.isFunction(e[t]) && e[t];
                    r[a[1]](function () {
                        var e = s && s.apply(this, arguments);
                        e && lt.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                    })
                }), e = null
            }).promise()
        }, promise: function (e) {
            return null != e ? lt.extend(e, i) : i
        }}, r = {};
        return i.pipe = i.then, lt.each(t, function (e, a) {
            var o = a[2], s = a[3];
            i[a[1]] = o.add, s && o.add(function () {
                n = s
            }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function () {
                return r[a[0] + "With"](this === r ? i : this, arguments), this
            }, r[a[0] + "With"] = o.fireWith
        }), i.promise(r), e && e.call(r, r), r
    }, when: function (e) {
        var t, n, i, r = 0, a = it.call(arguments), o = a.length, s = 1 !== o || e && lt.isFunction(e.promise) ? o : 0, l = 1 === s ? e : lt.Deferred(), c = function (e, n, i) {
            return function (r) {
                n[e] = this, i[e] = arguments.length > 1 ? it.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
            }
        };
        if (o > 1)for (t = new Array(o), n = new Array(o), i = new Array(o); o > r; r++)a[r] && lt.isFunction(a[r].promise) ? a[r].promise().done(c(r, i, a)).fail(l.reject).progress(c(r, n, t)) : --s;
        return s || l.resolveWith(i, a), l.promise()
    }}), lt.support = function () {
        var t, n, i, r, a, o, s, l, c, u, h = X.createElement("div");
        if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*"), i = h.getElementsByTagName("a")[0], !n || !i || !n.length)return{};
        a = X.createElement("select"), s = a.appendChild(X.createElement("option")), r = h.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", t = {getSetAttribute: "t" !== h.className, leadingWhitespace: 3 === h.firstChild.nodeType, tbody: !h.getElementsByTagName("tbody").length, htmlSerialize: !!h.getElementsByTagName("link").length, style: /top/.test(i.getAttribute("style")), hrefNormalized: "/a" === i.getAttribute("href"), opacity: /^0.5/.test(i.style.opacity), cssFloat: !!i.style.cssFloat, checkOn: !!r.value, optSelected: s.selected, enctype: !!X.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== X.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === X.compatMode, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1}, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, a.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete h.test
        } catch (d) {
            t.deleteExpando = !1
        }
        r = X.createElement("input"), r.setAttribute("value", ""), t.input = "" === r.getAttribute("value"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "t"), r.setAttribute("name", "t"), o = X.createDocumentFragment(), o.appendChild(r), t.appendChecked = r.checked, t.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked, h.attachEvent && (h.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), h.cloneNode(!0).click());
        for (u in{submit: !0, change: !0, focusin: !0})h.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || h.attributes[l].expando === !1;
        return h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === h.style.backgroundClip, lt(function () {
            var n, i, r, a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", o = X.getElementsByTagName("body")[0];
            o && (n = X.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", o.appendChild(n).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = h.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === h.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== o.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(h, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(h, null) || {width: "4px"}).width, i = h.appendChild(X.createElement("div")), i.style.cssText = h.style.cssText = a, i.style.marginRight = i.style.width = "0", h.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof h.style.zoom !== G && (h.innerHTML = "", h.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== h.offsetWidth, t.inlineBlockNeedsLayout && (o.style.zoom = 1)), o.removeChild(n), n = h = r = i = null)
        }), n = a = o = s = i = r = null, t
    }();
    var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Tt = /([A-Z])/g;
    lt.extend({cache: {}, expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""), noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0}, hasData: function (e) {
        return e = e.nodeType ? lt.cache[e[lt.expando]] : e[lt.expando], !!e && !s(e)
    }, data: function (e, t, n) {
        return r(e, t, n)
    }, removeData: function (e, t) {
        return a(e, t)
    }, _data: function (e, t, n) {
        return r(e, t, n, !0)
    }, _removeData: function (e, t) {
        return a(e, t, !0)
    }, acceptData: function (e) {
        if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return!1;
        var t = e.nodeName && lt.noData[e.nodeName.toLowerCase()];
        return!t || t !== !0 && e.getAttribute("classid") === t
    }}), lt.fn.extend({data: function (e, n) {
        var i, r, a = this[0], s = 0, l = null;
        if (e === t) {
            if (this.length && (l = lt.data(a), 1 === a.nodeType && !lt._data(a, "parsedAttrs"))) {
                for (i = a.attributes; s < i.length; s++)r = i[s].name, r.indexOf("data-") || (r = lt.camelCase(r.slice(5)), o(a, r, l[r]));
                lt._data(a, "parsedAttrs", !0)
            }
            return l
        }
        return"object" == typeof e ? this.each(function () {
            lt.data(this, e)
        }) : lt.access(this, function (n) {
            return n === t ? a ? o(a, e, lt.data(a, e)) : null : (this.each(function () {
                lt.data(this, e, n)
            }), void 0)
        }, null, n, arguments.length > 1, null, !0)
    }, removeData: function (e) {
        return this.each(function () {
            lt.removeData(this, e)
        })
    }}), lt.extend({queue: function (e, t, n) {
        var i;
        return e ? (t = (t || "fx") + "queue", i = lt._data(e, t), n && (!i || lt.isArray(n) ? i = lt._data(e, t, lt.makeArray(n)) : i.push(n)), i || []) : void 0
    }, dequeue: function (e, t) {
        t = t || "fx";
        var n = lt.queue(e, t), i = n.length, r = n.shift(), a = lt._queueHooks(e, t), o = function () {
            lt.dequeue(e, t)
        };
        "inprogress" === r && (r = n.shift(), i--), a.cur = r, r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !i && a && a.empty.fire()
    }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return lt._data(e, n) || lt._data(e, n, {empty: lt.Callbacks("once memory").add(function () {
            lt._removeData(e, t + "queue"), lt._removeData(e, n)
        })})
    }}), lt.fn.extend({queue: function (e, n) {
        var i = 2;
        return"string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? lt.queue(this[0], e) : n === t ? this : this.each(function () {
            var t = lt.queue(this, e, n);
            lt._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && lt.dequeue(this, e)
        })
    }, dequeue: function (e) {
        return this.each(function () {
            lt.dequeue(this, e)
        })
    }, delay: function (e, t) {
        return e = lt.fx ? lt.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var i = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(i)
            }
        })
    }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
    }, promise: function (e, n) {
        var i, r = 1, a = lt.Deferred(), o = this, s = this.length, l = function () {
            --r || a.resolveWith(o, [o])
        };
        for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;)i = lt._data(o[s], e + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
        return l(), a.promise(n)
    }});
    var Dt, kt, Et = /[\t\r\n]/g, At = /\r/g, Bt = /^(?:input|select|textarea|button|object)$/i, Pt = /^(?:a|area)$/i, Nt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, Ft = /^(?:checked|selected)$/i, It = lt.support.getSetAttribute, $t = lt.support.input;
    lt.fn.extend({attr: function (e, t) {
        return lt.access(this, lt.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
        return this.each(function () {
            lt.removeAttr(this, e)
        })
    }, prop: function (e, t) {
        return lt.access(this, lt.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
        return e = lt.propFix[e] || e, this.each(function () {
            try {
                this[e] = t, delete this[e]
            } catch (n) {
            }
        })
    }, addClass: function (e) {
        var t, n, i, r, a, o = 0, s = this.length, l = "string" == typeof e && e;
        if (lt.isFunction(e))return this.each(function (t) {
            lt(this).addClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(ut) || []; s > o; o++)if (n = this[o], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
            for (a = 0; r = t[a++];)i.indexOf(" " + r + " ") < 0 && (i += r + " ");
            n.className = lt.trim(i)
        }
        return this
    }, removeClass: function (e) {
        var t, n, i, r, a, o = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
        if (lt.isFunction(e))return this.each(function (t) {
            lt(this).removeClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(ut) || []; s > o; o++)if (n = this[o], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
            for (a = 0; r = t[a++];)for (; i.indexOf(" " + r + " ") >= 0;)i = i.replace(" " + r + " ", " ");
            n.className = e ? lt.trim(i) : ""
        }
        return this
    }, toggleClass: function (e, t) {
        var n = typeof e, i = "boolean" == typeof t;
        return lt.isFunction(e) ? this.each(function (n) {
            lt(this).toggleClass(e.call(this, n, this.className, t), t)
        }) : this.each(function () {
            if ("string" === n)for (var r, a = 0, o = lt(this), s = t, l = e.match(ut) || []; r = l[a++];)s = i ? s : !o.hasClass(r), o[s ? "addClass" : "removeClass"](r); else(n === G || "boolean" === n) && (this.className && lt._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : lt._data(this, "__className__") || "")
        })
    }, hasClass: function (e) {
        for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0)return!0;
        return!1
    }, val: function (e) {
        var n, i, r, a = this[0];
        {
            if (arguments.length)return r = lt.isFunction(e), this.each(function (n) {
                var a, o = lt(this);
                1 === this.nodeType && (a = r ? e.call(this, n, o.val()) : e, null == a ? a = "" : "number" == typeof a ? a += "" : lt.isArray(a) && (a = lt.map(a, function (e) {
                    return null == e ? "" : e + ""
                })), i = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], i && "set"in i && i.set(this, a, "value") !== t || (this.value = a))
            });
            if (a)return i = lt.valHooks[a.type] || lt.valHooks[a.nodeName.toLowerCase()], i && "get"in i && (n = i.get(a, "value")) !== t ? n : (n = a.value, "string" == typeof n ? n.replace(At, "") : null == n ? "" : n)
        }
    }}), lt.extend({valHooks: {option: {get: function (e) {
        var t = e.attributes.value;
        return!t || t.specified ? e.value : e.text
    }}, select: {get: function (e) {
        for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || 0 > r, o = a ? null : [], s = a ? r + 1 : i.length, l = 0 > r ? s : a ? r : 0; s > l; l++)if (n = i[l], !(!n.selected && l !== r || (lt.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && lt.nodeName(n.parentNode, "optgroup"))) {
            if (t = lt(n).val(), a)return t;
            o.push(t)
        }
        return o
    }, set: function (e, t) {
        var n = lt.makeArray(t);
        return lt(e).find("option").each(function () {
            this.selected = lt.inArray(lt(this).val(), n) >= 0
        }), n.length || (e.selectedIndex = -1), n
    }}}, attr: function (e, n, i) {
        var r, a, o, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)return typeof e.getAttribute === G ? lt.prop(e, n, i) : (a = 1 !== s || !lt.isXMLDoc(e), a && (n = n.toLowerCase(), r = lt.attrHooks[n] || (Nt.test(n) ? kt : Dt)), i === t ? r && a && "get"in r && null !== (o = r.get(e, n)) ? o : (typeof e.getAttribute !== G && (o = e.getAttribute(n)), null == o ? t : o) : null !== i ? r && a && "set"in r && (o = r.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : (lt.removeAttr(e, n), void 0))
    }, removeAttr: function (e, t) {
        var n, i, r = 0, a = t && t.match(ut);
        if (a && 1 === e.nodeType)for (; n = a[r++];)i = lt.propFix[n] || n, Nt.test(n) ? !It && Ft.test(n) ? e[lt.camelCase("default-" + n)] = e[i] = !1 : e[i] = !1 : lt.attr(e, n, ""), e.removeAttribute(It ? n : i)
    }, attrHooks: {type: {set: function (e, t) {
        if (!lt.support.radioValue && "radio" === t && lt.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
        }
    }}}, propFix: {tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable"}, prop: function (e, n, i) {
        var r, a, o, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)return o = 1 !== s || !lt.isXMLDoc(e), o && (n = lt.propFix[n] || n, a = lt.propHooks[n]), i !== t ? a && "set"in a && (r = a.set(e, i, n)) !== t ? r : e[n] = i : a && "get"in a && null !== (r = a.get(e, n)) ? r : e[n]
    }, propHooks: {tabIndex: {get: function (e) {
        var n = e.getAttributeNode("tabindex");
        return n && n.specified ? parseInt(n.value, 10) : Bt.test(e.nodeName) || Pt.test(e.nodeName) && e.href ? 0 : t
    }}}}), kt = {get: function (e, n) {
        var i = lt.prop(e, n), r = "boolean" == typeof i && e.getAttribute(n), a = "boolean" == typeof i ? $t && It ? null != r : Ft.test(n) ? e[lt.camelCase("default-" + n)] : !!r : e.getAttributeNode(n);
        return a && a.value !== !1 ? n.toLowerCase() : t
    }, set: function (e, t, n) {
        return t === !1 ? lt.removeAttr(e, n) : $t && It || !Ft.test(n) ? e.setAttribute(!It && lt.propFix[n] || n, n) : e[lt.camelCase("default-" + n)] = e[n] = !0, n
    }}, $t && It || (lt.attrHooks.value = {get: function (e, n) {
        var i = e.getAttributeNode(n);
        return lt.nodeName(e, "input") ? e.defaultValue : i && i.specified ? i.value : t
    }, set: function (e, t, n) {
        return lt.nodeName(e, "input") ? (e.defaultValue = t, void 0) : Dt && Dt.set(e, t, n)
    }}), It || (Dt = lt.valHooks.button = {get: function (e, n) {
        var i = e.getAttributeNode(n);
        return i && ("id" === n || "name" === n || "coords" === n ? "" !== i.value : i.specified) ? i.value : t
    }, set: function (e, n, i) {
        var r = e.getAttributeNode(i);
        return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)), r.value = n += "", "value" === i || n === e.getAttribute(i) ? n : t
    }}, lt.attrHooks.contenteditable = {get: Dt.get, set: function (e, t, n) {
        Dt.set(e, "" === t ? !1 : t, n)
    }}, lt.each(["width", "height"], function (e, t) {
        lt.attrHooks[t] = lt.extend(lt.attrHooks[t], {set: function (e, n) {
            return"" === n ? (e.setAttribute(t, "auto"), n) : void 0
        }})
    })), lt.support.hrefNormalized || (lt.each(["href", "src", "width", "height"], function (e, n) {
        lt.attrHooks[n] = lt.extend(lt.attrHooks[n], {get: function (e) {
            var i = e.getAttribute(n, 2);
            return null == i ? t : i
        }})
    }), lt.each(["href", "src"], function (e, t) {
        lt.propHooks[t] = {get: function (e) {
            return e.getAttribute(t, 4)
        }}
    })), lt.support.style || (lt.attrHooks.style = {get: function (e) {
        return e.style.cssText || t
    }, set: function (e, t) {
        return e.style.cssText = t + ""
    }}), lt.support.optSelected || (lt.propHooks.selected = lt.extend(lt.propHooks.selected, {get: function (e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }})), lt.support.enctype || (lt.propFix.enctype = "encoding"), lt.support.checkOn || lt.each(["radio", "checkbox"], function () {
        lt.valHooks[this] = {get: function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }}
    }), lt.each(["radio", "checkbox"], function () {
        lt.valHooks[this] = lt.extend(lt.valHooks[this], {set: function (e, t) {
            return lt.isArray(t) ? e.checked = lt.inArray(lt(e).val(), t) >= 0 : void 0
        }})
    });
    var Mt = /^(?:input|select|textarea)$/i, Ht = /^key/, Rt = /^(?:mouse|contextmenu)|click/, Lt = /^(?:focusinfocus|focusoutblur)$/, Ot = /^([^.]*)(?:\.(.+)|)$/;
    lt.event = {global: {}, add: function (e, n, i, r, a) {
        var o, s, l, c, u, h, d, f, p, g, m, _ = lt._data(e);
        if (_) {
            for (i.handler && (c = i, i = c.handler, a = c.selector), i.guid || (i.guid = lt.guid++), (s = _.events) || (s = _.events = {}), (h = _.handle) || (h = _.handle = function (e) {
                return typeof lt === G || e && lt.event.triggered === e.type ? t : lt.event.dispatch.apply(h.elem, arguments)
            }, h.elem = e), n = (n || "").match(ut) || [""], l = n.length; l--;)o = Ot.exec(n[l]) || [], p = m = o[1], g = (o[2] || "").split(".").sort(), u = lt.event.special[p] || {}, p = (a ? u.delegateType : u.bindType) || p, u = lt.event.special[p] || {}, d = lt.extend({type: p, origType: m, data: r, handler: i, guid: i.guid, selector: a, needsContext: a && lt.expr.match.needsContext.test(a), namespace: g.join(".")}, c), (f = s[p]) || (f = s[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, r, g, h) !== !1 || (e.addEventListener ? e.addEventListener(p, h, !1) : e.attachEvent && e.attachEvent("on" + p, h))), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), a ? f.splice(f.delegateCount++, 0, d) : f.push(d), lt.event.global[p] = !0;
            e = null
        }
    }, remove: function (e, t, n, i, r) {
        var a, o, s, l, c, u, h, d, f, p, g, m = lt.hasData(e) && lt._data(e);
        if (m && (u = m.events)) {
            for (t = (t || "").match(ut) || [""], c = t.length; c--;)if (s = Ot.exec(t[c]) || [], f = g = s[1], p = (s[2] || "").split(".").sort(), f) {
                for (h = lt.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = u[f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = a = d.length; a--;)o = d[a], !r && g !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || i && i !== o.selector && ("**" !== i || !o.selector) || (d.splice(a, 1), o.selector && d.delegateCount--, h.remove && h.remove.call(e, o));
                l && !d.length && (h.teardown && h.teardown.call(e, p, m.handle) !== !1 || lt.removeEvent(e, f, m.handle), delete u[f])
            } else for (f in u)lt.event.remove(e, f + t[c], n, i, !0);
            lt.isEmptyObject(u) && (delete m.handle, lt._removeData(e, "events"))
        }
    }, trigger: function (n, i, r, a) {
        var o, s, l, c, u, h, d, f = [r || X], p = ot.call(n, "type") ? n.type : n, g = ot.call(n, "namespace") ? n.namespace.split(".") : [];
        if (l = h = r = r || X, 3 !== r.nodeType && 8 !== r.nodeType && !Lt.test(p + lt.event.triggered) && (p.indexOf(".") >= 0 && (g = p.split("."), p = g.shift(), g.sort()), s = p.indexOf(":") < 0 && "on" + p, n = n[lt.expando] ? n : new lt.Event(p, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : lt.makeArray(i, [n]), u = lt.event.special[p] || {}, a || !u.trigger || u.trigger.apply(r, i) !== !1)) {
            if (!a && !u.noBubble && !lt.isWindow(r)) {
                for (c = u.delegateType || p, Lt.test(c + p) || (l = l.parentNode); l; l = l.parentNode)f.push(l), h = l;
                h === (r.ownerDocument || X) && f.push(h.defaultView || h.parentWindow || e)
            }
            for (d = 0; (l = f[d++]) && !n.isPropagationStopped();)n.type = d > 1 ? c : u.bindType || p, o = (lt._data(l, "events") || {})[n.type] && lt._data(l, "handle"), o && o.apply(l, i), o = s && l[s], o && lt.acceptData(l) && o.apply && o.apply(l, i) === !1 && n.preventDefault();
            if (n.type = p, !(a || n.isDefaultPrevented() || u._default && u._default.apply(r.ownerDocument, i) !== !1 || "click" === p && lt.nodeName(r, "a") || !lt.acceptData(r) || !s || !r[p] || lt.isWindow(r))) {
                h = r[s], h && (r[s] = null), lt.event.triggered = p;
                try {
                    r[p]()
                } catch (m) {
                }
                lt.event.triggered = t, h && (r[s] = h)
            }
            return n.result
        }
    }, dispatch: function (e) {
        e = lt.event.fix(e);
        var n, i, r, a, o, s = [], l = it.call(arguments), c = (lt._data(this, "events") || {})[e.type] || [], u = lt.event.special[e.type] || {};
        if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
            for (s = lt.event.handlers.call(this, e, c), n = 0; (a = s[n++]) && !e.isPropagationStopped();)for (e.currentTarget = a.elem, o = 0; (r = a.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((lt.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
            return u.postDispatch && u.postDispatch.call(this, e), e.result
        }
    }, handlers: function (e, n) {
        var i, r, a, o, s = [], l = n.delegateCount, c = e.target;
        if (l && c.nodeType && (!e.button || "click" !== e.type))for (; c != this; c = c.parentNode || this)if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
            for (a = [], o = 0; l > o; o++)r = n[o], i = r.selector + " ", a[i] === t && (a[i] = r.needsContext ? lt(i, this).index(c) >= 0 : lt.find(i, this, null, [c]).length), a[i] && a.push(r);
            a.length && s.push({elem: c, handlers: a})
        }
        return l < n.length && s.push({elem: this, handlers: n.slice(l)}), s
    }, fix: function (e) {
        if (e[lt.expando])return e;
        var t, n, i, r = e.type, a = e, o = this.fixHooks[r];
        for (o || (this.fixHooks[r] = o = Rt.test(r) ? this.mouseHooks : Ht.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new lt.Event(a), t = i.length; t--;)n = i[t], e[n] = a[n];
        return e.target || (e.target = a.srcElement || X), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, a) : e
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) {
        var i, r, a, o = n.button, s = n.fromElement;
        return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || X, a = r.documentElement, i = r.body, e.pageX = n.clientX + (a && a.scrollLeft || i && i.scrollLeft || 0) - (a && a.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || i && i.scrollTop || 0) - (a && a.clientTop || i && i.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || o === t || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
    }}, special: {load: {noBubble: !0}, click: {trigger: function () {
        return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
    }}, focus: {trigger: function () {
        if (this !== X.activeElement && this.focus)try {
            return this.focus(), !1
        } catch (e) {
        }
    }, delegateType: "focusin"}, blur: {trigger: function () {
        return this === X.activeElement && this.blur ? (this.blur(), !1) : void 0
    }, delegateType: "focusout"}, beforeunload: {postDispatch: function (e) {
        e.result !== t && (e.originalEvent.returnValue = e.result)
    }}}, simulate: function (e, t, n, i) {
        var r = lt.extend(new lt.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
        i ? lt.event.trigger(r, null, t) : lt.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
    }}, lt.removeEvent = X.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === G && (e[i] = null), e.detachEvent(i, n))
    }, lt.Event = function (e, t) {
        return this instanceof lt.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l : c) : this.type = e, t && lt.extend(this, t), this.timeStamp = e && e.timeStamp || lt.now(), this[lt.expando] = !0, void 0) : new lt.Event(e, t)
    }, lt.Event.prototype = {isDefaultPrevented: c, isPropagationStopped: c, isImmediatePropagationStopped: c, preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    }, stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = l, this.stopPropagation()
    }}, lt.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        lt.event.special[e] = {delegateType: t, bindType: t, handle: function (e) {
            var n, i = this, r = e.relatedTarget, a = e.handleObj;
            return(!r || r !== i && !lt.contains(i, r)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
        }}
    }), lt.support.submitBubbles || (lt.event.special.submit = {setup: function () {
        return lt.nodeName(this, "form") ? !1 : (lt.event.add(this, "click._submit keypress._submit", function (e) {
            var n = e.target, i = lt.nodeName(n, "input") || lt.nodeName(n, "button") ? n.form : t;
            i && !lt._data(i, "submitBubbles") && (lt.event.add(i, "submit._submit", function (e) {
                e._submit_bubble = !0
            }), lt._data(i, "submitBubbles", !0))
        }), void 0)
    }, postDispatch: function (e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && lt.event.simulate("submit", this.parentNode, e, !0))
    }, teardown: function () {
        return lt.nodeName(this, "form") ? !1 : (lt.event.remove(this, "._submit"), void 0)
    }}), lt.support.changeBubbles || (lt.event.special.change = {setup: function () {
        return Mt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (lt.event.add(this, "propertychange._change", function (e) {
            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), lt.event.add(this, "click._change", function (e) {
            this._just_changed && !e.isTrigger && (this._just_changed = !1), lt.event.simulate("change", this, e, !0)
        })), !1) : (lt.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            Mt.test(t.nodeName) && !lt._data(t, "changeBubbles") && (lt.event.add(t, "change._change", function (e) {
                !this.parentNode || e.isSimulated || e.isTrigger || lt.event.simulate("change", this.parentNode, e, !0)
            }), lt._data(t, "changeBubbles", !0))
        }), void 0)
    }, handle: function (e) {
        var t = e.target;
        return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
    }, teardown: function () {
        return lt.event.remove(this, "._change"), !Mt.test(this.nodeName)
    }}), lt.support.focusinBubbles || lt.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, i = function (e) {
            lt.event.simulate(t, e.target, lt.event.fix(e), !0)
        };
        lt.event.special[t] = {setup: function () {
            0 === n++ && X.addEventListener(e, i, !0)
        }, teardown: function () {
            0 === --n && X.removeEventListener(e, i, !0)
        }}
    }), lt.fn.extend({on: function (e, n, i, r, a) {
        var o, s;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = t);
            for (o in e)this.on(o, n, i, e[o], a);
            return this
        }
        if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1)r = c; else if (!r)return this;
        return 1 === a && (s = r, r = function (e) {
            return lt().off(e), s.apply(this, arguments)
        }, r.guid = s.guid || (s.guid = lt.guid++)), this.each(function () {
            lt.event.add(this, e, r, i, n)
        })
    }, one: function (e, t, n, i) {
        return this.on(e, t, n, i, 1)
    }, off: function (e, n, i) {
        var r, a;
        if (e && e.preventDefault && e.handleObj)return r = e.handleObj, lt(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
        if ("object" == typeof e) {
            for (a in e)this.off(a, n, e[a]);
            return this
        }
        return(n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = c), this.each(function () {
            lt.event.remove(this, e, i, n)
        })
    }, bind: function (e, t, n) {
        return this.on(e, null, t, n)
    }, unbind: function (e, t) {
        return this.off(e, null, t)
    }, delegate: function (e, t, n, i) {
        return this.on(t, e, n, i)
    }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }, trigger: function (e, t) {
        return this.each(function () {
            lt.event.trigger(e, t, this)
        })
    }, triggerHandler: function (e, t) {
        var n = this[0];
        return n ? lt.event.trigger(e, t, n, !0) : void 0
    }}), /*!
     * Sizzle CSS Selector Engine
     * Copyright 2012 jQuery Foundation and other contributors
     * Released under the MIT license
     * http://sizzlejs.com/
     */
        function (e, t) {
            function n(e) {
                return pt.test(e + "")
            }

            function i() {
                var e, t = [];
                return e = function (n, i) {
                    return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = i
                }
            }

            function r(e) {
                return e[L] = !0, e
            }

            function a(e) {
                var t = P.createElement("div");
                try {
                    return e(t)
                } catch (n) {
                    return!1
                } finally {
                    t = null
                }
            }

            function o(e, t, n, i) {
                var r, a, o, s, l, c, u, f, p, g;
                if ((t ? t.ownerDocument || t : O) !== P && B(t), t = t || P, n = n || [], !e || "string" != typeof e)return n;
                if (1 !== (s = t.nodeType) && 9 !== s)return[];
                if (!F && !i) {
                    if (r = gt.exec(e))if (o = r[1]) {
                        if (9 === s) {
                            if (a = t.getElementById(o), !a || !a.parentNode)return n;
                            if (a.id === o)return n.push(a), n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(o)) && H(t, a) && a.id === o)return n.push(a), n
                    } else {
                        if (r[2])return Y.apply(n, Z.call(t.getElementsByTagName(e), 0)), n;
                        if ((o = r[3]) && W.getByClassName && t.getElementsByClassName)return Y.apply(n, Z.call(t.getElementsByClassName(o), 0)), n
                    }
                    if (W.qsa && !I.test(e)) {
                        if (u = !0, f = L, p = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (c = h(e), (u = t.getAttribute("id")) ? f = u.replace(vt, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = c.length; l--;)c[l] = f + d(c[l]);
                            p = ft.test(e) && t.parentNode || t, g = c.join(",")
                        }
                        if (g)try {
                            return Y.apply(n, Z.call(p.querySelectorAll(g), 0)), n
                        } catch (m) {
                        } finally {
                            u || t.removeAttribute("id")
                        }
                    }
                }
                return b(e.replace(ot, "$1"), t, n, i)
            }

            function s(e, t) {
                var n = t && e, i = n && (~t.sourceIndex || X) - (~e.sourceIndex || X);
                if (i)return i;
                if (n)for (; n = n.nextSibling;)if (n === t)return-1;
                return e ? 1 : -1
            }

            function l(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return"input" === n && t.type === e
                }
            }

            function c(e) {
                return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return("input" === n || "button" === n) && t.type === e
                }
            }

            function u(e) {
                return r(function (t) {
                    return t = +t, r(function (n, i) {
                        for (var r, a = e([], n.length, t), o = a.length; o--;)n[r = a[o]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function h(e, t) {
                var n, i, r, a, s, l, c, u = q[e + " "];
                if (u)return t ? 0 : u.slice(0);
                for (s = e, l = [], c = C.preFilter; s;) {
                    (!n || (i = st.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(r = [])), n = !1, (i = ct.exec(s)) && (n = i.shift(), r.push({value: n, type: i[0].replace(ot, " ")}), s = s.slice(n.length));
                    for (a in C.filter)!(i = dt[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), r.push({value: n, type: a, matches: i}), s = s.slice(n.length));
                    if (!n)break
                }
                return t ? s.length : s ? o.error(e) : q(e, l).slice(0)
            }

            function d(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++)i += e[t].value;
                return i
            }

            function f(e, t, n) {
                var i = t.dir, r = n && "parentNode" === i, a = V++;
                return t.first ? function (t, n, a) {
                    for (; t = t[i];)if (1 === t.nodeType || r)return e(t, n, a)
                } : function (t, n, o) {
                    var s, l, c, u = j + " " + a;
                    if (o) {
                        for (; t = t[i];)if ((1 === t.nodeType || r) && e(t, n, o))return!0
                    } else for (; t = t[i];)if (1 === t.nodeType || r)if (c = t[L] || (t[L] = {}), (l = c[i]) && l[0] === u) {
                        if ((s = l[1]) === !0 || s === S)return s === !0
                    } else if (l = c[i] = [u], l[1] = e(t, n, o) || S, l[1] === !0)return!0
                }
            }

            function p(e) {
                return e.length > 1 ? function (t, n, i) {
                    for (var r = e.length; r--;)if (!e[r](t, n, i))return!1;
                    return!0
                } : e[0]
            }

            function g(e, t, n, i, r) {
                for (var a, o = [], s = 0, l = e.length, c = null != t; l > s; s++)(a = e[s]) && (!n || n(a, i, r)) && (o.push(a), c && t.push(s));
                return o
            }

            function m(e, t, n, i, a, o) {
                return i && !i[L] && (i = m(i)), a && !a[L] && (a = m(a, o)), r(function (r, o, s, l) {
                    var c, u, h, d = [], f = [], p = o.length, m = r || y(t || "*", s.nodeType ? [s] : s, []), _ = !e || !r && t ? m : g(m, d, e, s, l), v = n ? a || (r ? e : p || i) ? [] : o : _;
                    if (n && n(_, v, s, l), i)for (c = g(v, f), i(c, [], s, l), u = c.length; u--;)(h = c[u]) && (v[f[u]] = !(_[f[u]] = h));
                    if (r) {
                        if (a || e) {
                            if (a) {
                                for (c = [], u = v.length; u--;)(h = v[u]) && c.push(_[u] = h);
                                a(null, v = [], c, l)
                            }
                            for (u = v.length; u--;)(h = v[u]) && (c = a ? Q.call(r, h) : d[u]) > -1 && (r[c] = !(o[c] = h))
                        }
                    } else v = g(v === o ? v.splice(p, v.length) : v), a ? a(null, o, v, l) : Y.apply(o, v)
                })
            }

            function _(e) {
                for (var t, n, i, r = e.length, a = C.relative[e[0].type], o = a || C.relative[" "], s = a ? 1 : 0, l = f(function (e) {
                    return e === t
                }, o, !0), c = f(function (e) {
                    return Q.call(t, e) > -1
                }, o, !0), u = [function (e, n, i) {
                    return!a && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                }]; r > s; s++)if (n = C.relative[e[s].type])u = [f(p(u), n)]; else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[L]) {
                        for (i = ++s; r > i && !C.relative[e[i].type]; i++);
                        return m(s > 1 && p(u), s > 1 && d(e.slice(0, s - 1)).replace(ot, "$1"), n, i > s && _(e.slice(s, i)), r > i && _(e = e.slice(i)), r > i && d(e))
                    }
                    u.push(n)
                }
                return p(u)
            }

            function v(e, t) {
                var n = 0, i = t.length > 0, a = e.length > 0, s = function (r, s, l, c, u) {
                    var h, d, f, p = [], m = 0, _ = "0", v = r && [], y = null != u, b = A, w = r || a && C.find.TAG("*", u && s.parentNode || s), x = j += null == b ? 1 : Math.random() || .1;
                    for (y && (A = s !== P && s, S = n); null != (h = w[_]); _++) {
                        if (a && h) {
                            for (d = 0; f = e[d++];)if (f(h, s, l)) {
                                c.push(h);
                                break
                            }
                            y && (j = x, S = ++n)
                        }
                        i && ((h = !f && h) && m--, r && v.push(h))
                    }
                    if (m += _, i && _ !== m) {
                        for (d = 0; f = t[d++];)f(v, p, s, l);
                        if (r) {
                            if (m > 0)for (; _--;)v[_] || p[_] || (p[_] = K.call(c));
                            p = g(p)
                        }
                        Y.apply(c, p), y && !r && p.length > 0 && m + t.length > 1 && o.uniqueSort(c)
                    }
                    return y && (j = x, A = b), v
                };
                return i ? r(s) : s
            }

            function y(e, t, n) {
                for (var i = 0, r = t.length; r > i; i++)o(e, t[i], n);
                return n
            }

            function b(e, t, n, i) {
                var r, a, o, s, l, c = h(e);
                if (!i && 1 === c.length) {
                    if (a = c[0] = c[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && 9 === t.nodeType && !F && C.relative[a[1].type]) {
                        if (t = C.find.ID(o.matches[0].replace(bt, wt), t)[0], !t)return n;
                        e = e.slice(a.shift().value.length)
                    }
                    for (r = dt.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !C.relative[s = o.type]);)if ((l = C.find[s]) && (i = l(o.matches[0].replace(bt, wt), ft.test(a[0].type) && t.parentNode || t))) {
                        if (a.splice(r, 1), e = i.length && d(a), !e)return Y.apply(n, Z.call(i, 0)), n;
                        break
                    }
                }
                return k(e, c)(i, t, F, n, ft.test(e)), n
            }

            function w() {
            }

            var x, S, C, T, D, k, E, A, B, P, N, F, I, $, M, H, R, L = "sizzle" + -new Date, O = e.document, W = {}, j = 0, V = 0, z = i(), q = i(), U = i(), G = typeof t, X = 1 << 31, J = [], K = J.pop, Y = J.push, Z = J.slice, Q = J.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)if (this[t] === e)return t;
                return-1
            }, et = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = tt.replace("w", "w#"), it = "([*^$|!~]?=)", rt = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + it + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]", at = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + rt.replace(3, 8) + ")*)|.*)\\)|)", ot = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), st = new RegExp("^" + et + "*," + et + "*"), ct = new RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"), ut = new RegExp(at), ht = new RegExp("^" + nt + "$"), dt = {ID: new RegExp("^#(" + tt + ")"), CLASS: new RegExp("^\\.(" + tt + ")"), NAME: new RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"), TAG: new RegExp("^(" + tt.replace("w", "w*") + ")"), ATTR: new RegExp("^" + rt), PSEUDO: new RegExp("^" + at), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"), needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")}, ft = /[\x20\t\r\n\f]*[+~]/, pt = /^[^{]+\{\s*\[native code/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /^(?:input|select|textarea|button)$/i, _t = /^h\d$/i, vt = /'|\\/g, yt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, bt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, wt = function (e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
            try {
                Z.call(O.documentElement.childNodes, 0)[0].nodeType
            } catch (xt) {
                Z = function (e) {
                    for (var t, n = []; t = this[e++];)n.push(t);
                    return n
                }
            }
            D = o.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, B = o.setDocument = function (e) {
                var i = e ? e.ownerDocument || e : O;
                return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, N = i.documentElement, F = D(i), W.tagNameNoComments = a(function (e) {
                    return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length
                }), W.attributes = a(function (e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return"boolean" !== t && "string" !== t
                }), W.getByClassName = a(function (e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }), W.getByName = a(function (e) {
                    e.id = L + 0, e.innerHTML = "<a name='" + L + "'></a><div name='" + L + "'></div>", N.insertBefore(e, N.firstChild);
                    var t = i.getElementsByName && i.getElementsByName(L).length === 2 + i.getElementsByName(L + 0).length;
                    return W.getIdNotName = !i.getElementById(L), N.removeChild(e), t
                }), C.attrHandle = a(function (e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== G && "#" === e.firstChild.getAttribute("href")
                }) ? {} : {href: function (e) {
                    return e.getAttribute("href", 2)
                }, type: function (e) {
                    return e.getAttribute("type")
                }}, W.getIdNotName ? (C.find.ID = function (e, t) {
                    if (typeof t.getElementById !== G && !F) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function (e) {
                    var t = e.replace(bt, wt);
                    return function (e) {
                        return e.getAttribute("id") === t
                    }
                }) : (C.find.ID = function (e, n) {
                    if (typeof n.getElementById !== G && !F) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== G && i.getAttributeNode("id").value === e ? [i] : t : []
                    }
                }, C.filter.ID = function (e) {
                    var t = e.replace(bt, wt);
                    return function (e) {
                        var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), C.find.TAG = W.tagNameNoComments ? function (e, t) {
                    return typeof t.getElementsByTagName !== G ? t.getElementsByTagName(e) : void 0
                } : function (e, t) {
                    var n, i = [], r = 0, a = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = a[r++];)1 === n.nodeType && i.push(n);
                        return i
                    }
                    return a
                }, C.find.NAME = W.getByName && function (e, t) {
                    return typeof t.getElementsByName !== G ? t.getElementsByName(name) : void 0
                }, C.find.CLASS = W.getByClassName && function (e, t) {
                    return typeof t.getElementsByClassName === G || F ? void 0 : t.getElementsByClassName(e)
                }, $ = [], I = [":focus"], (W.qsa = n(i.querySelectorAll)) && (a(function (e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || I.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || I.push(":checked")
                }), a(function (e) {
                    e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && I.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || I.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), I.push(",.*:")
                })), (W.matchesSelector = n(M = N.matchesSelector || N.mozMatchesSelector || N.webkitMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && a(function (e) {
                    W.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), $.push("!=", at)
                }), I = new RegExp(I.join("|")), $ = new RegExp($.join("|")), H = n(N.contains) || N.compareDocumentPosition ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function (e, t) {
                    if (t)for (; t = t.parentNode;)if (t === e)return!0;
                    return!1
                }, R = N.compareDocumentPosition ? function (e, t) {
                    var n;
                    return e === t ? (E = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === i || H(O, e) ? -1 : t === i || H(O, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function (e, t) {
                    var n, r = 0, a = e.parentNode, o = t.parentNode, l = [e], c = [t];
                    if (e === t)return E = !0, 0;
                    if (!a || !o)return e === i ? -1 : t === i ? 1 : a ? -1 : o ? 1 : 0;
                    if (a === o)return s(e, t);
                    for (n = e; n = n.parentNode;)l.unshift(n);
                    for (n = t; n = n.parentNode;)c.unshift(n);
                    for (; l[r] === c[r];)r++;
                    return r ? s(l[r], c[r]) : l[r] === O ? -1 : c[r] === O ? 1 : 0
                }, E = !1, [0, 0].sort(R), W.detectDuplicates = E, P) : P
            }, o.matches = function (e, t) {
                return o(e, null, null, t)
            }, o.matchesSelector = function (e, t) {
                if ((e.ownerDocument || e) !== P && B(e), t = t.replace(yt, "='$1']"), !(!W.matchesSelector || F || $ && $.test(t) || I.test(t)))try {
                    var n = M.call(e, t);
                    if (n || W.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
                } catch (i) {
                }
                return o(t, P, null, [e]).length > 0
            }, o.contains = function (e, t) {
                return(e.ownerDocument || e) !== P && B(e), H(e, t)
            }, o.attr = function (e, t) {
                var n;
                return(e.ownerDocument || e) !== P && B(e), F || (t = t.toLowerCase()), (n = C.attrHandle[t]) ? n(e) : F || W.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
            }, o.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, o.uniqueSort = function (e) {
                var t, n = [], i = 1, r = 0;
                if (E = !W.detectDuplicates, e.sort(R), E) {
                    for (; t = e[i]; i++)t === e[i - 1] && (r = n.push(i));
                    for (; r--;)e.splice(n[r], 1)
                }
                return e
            }, T = o.getText = function (e) {
                var t, n = "", i = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)n += T(e)
                    } else if (3 === r || 4 === r)return e.nodeValue
                } else for (; t = e[i]; i++)n += T(t);
                return n
            }, C = o.selectors = {cacheLength: 50, createPseudo: r, match: dt, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (e) {
                return e[1] = e[1].replace(bt, wt), e[3] = (e[4] || e[5] || "").replace(bt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            }, CHILD: function (e) {
                return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && o.error(e[0]), e
            }, PSEUDO: function (e) {
                var t, n = !e[5] && e[2];
                return dt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ut.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }}, filter: {TAG: function (e) {
                return"*" === e ? function () {
                    return!0
                } : (e = e.replace(bt, wt).toLowerCase(), function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e
                })
            }, CLASS: function (e) {
                var t = z[e + " "];
                return t || (t = new RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && z(e, function (e) {
                    return t.test(e.className || typeof e.getAttribute !== G && e.getAttribute("class") || "")
                })
            }, ATTR: function (e, t, n) {
                return function (i) {
                    var r = o.attr(i, e);
                    return null == r ? "!=" === t : t ? (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r + " ").indexOf(n) > -1 : "|=" === t ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                }
            }, CHILD: function (e, t, n, i, r) {
                var a = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
                return 1 === i && 0 === r ? function (e) {
                    return!!e.parentNode
                } : function (t, n, l) {
                    var c, u, h, d, f, p, g = a !== o ? "nextSibling" : "previousSibling", m = t.parentNode, _ = s && t.nodeName.toLowerCase(), v = !l && !s;
                    if (m) {
                        if (a) {
                            for (; g;) {
                                for (h = t; h = h[g];)if (s ? h.nodeName.toLowerCase() === _ : 1 === h.nodeType)return!1;
                                p = g = "only" === e && !p && "nextSibling"
                            }
                            return!0
                        }
                        if (p = [o ? m.firstChild : m.lastChild], o && v) {
                            for (u = m[L] || (m[L] = {}), c = u[e] || [], f = c[0] === j && c[1], d = c[0] === j && c[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (d = f = 0) || p.pop();)if (1 === h.nodeType && ++d && h === t) {
                                u[e] = [j, f, d];
                                break
                            }
                        } else if (v && (c = (t[L] || (t[L] = {}))[e]) && c[0] === j)d = c[1]; else for (; (h = ++f && h && h[g] || (d = f = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== _ : 1 !== h.nodeType) || !++d || (v && ((h[L] || (h[L] = {}))[e] = [j, d]), h !== t)););
                        return d -= r, d === i || 0 === d % i && d / i >= 0
                    }
                }
            }, PSEUDO: function (e, t) {
                var n, i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
                return i[L] ? i(t) : i.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, n) {
                    for (var r, a = i(e, t), o = a.length; o--;)r = Q.call(e, a[o]), e[r] = !(n[r] = a[o])
                }) : function (e) {
                    return i(e, 0, n)
                }) : i
            }}, pseudos: {not: r(function (e) {
                var t = [], n = [], i = k(e.replace(ot, "$1"));
                return i[L] ? r(function (e, t, n, r) {
                    for (var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                }) : function (e, r, a) {
                    return t[0] = e, i(t, null, a, n), !n.pop()
                }
            }), has: r(function (e) {
                return function (t) {
                    return o(e, t).length > 0
                }
            }), contains: r(function (e) {
                return function (t) {
                    return(t.textContent || t.innerText || T(t)).indexOf(e) > -1
                }
            }), lang: r(function (e) {
                return ht.test(e || "") || o.error("unsupported lang: " + e), e = e.replace(bt, wt).toLowerCase(), function (t) {
                    var n;
                    do if (n = F ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                    return!1
                }
            }), target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id
            }, root: function (e) {
                return e === N
            }, focus: function (e) {
                return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            }, enabled: function (e) {
                return e.disabled === !1
            }, disabled: function (e) {
                return e.disabled === !0
            }, checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return"input" === t && !!e.checked || "option" === t && !!e.selected
            }, selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
            }, empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return!1;
                return!0
            }, parent: function (e) {
                return!C.pseudos.empty(e)
            }, header: function (e) {
                return _t.test(e.nodeName)
            }, input: function (e) {
                return mt.test(e.nodeName)
            }, button: function (e) {
                var t = e.nodeName.toLowerCase();
                return"input" === t && "button" === e.type || "button" === t
            }, text: function (e) {
                var t;
                return"input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
            }, first: u(function () {
                return[0]
            }), last: u(function (e, t) {
                return[t - 1]
            }), eq: u(function (e, t, n) {
                return[0 > n ? n + t : n]
            }), even: u(function (e, t) {
                for (var n = 0; t > n; n += 2)e.push(n);
                return e
            }), odd: u(function (e, t) {
                for (var n = 1; t > n; n += 2)e.push(n);
                return e
            }), lt: u(function (e, t, n) {
                for (var i = 0 > n ? n + t : n; --i >= 0;)e.push(i);
                return e
            }), gt: u(function (e, t, n) {
                for (var i = 0 > n ? n + t : n; ++i < t;)e.push(i);
                return e
            })}};
            for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[x] = l(x);
            for (x in{submit: !0, reset: !0})C.pseudos[x] = c(x);
            k = o.compile = function (e, t) {
                var n, i = [], r = [], a = U[e + " "];
                if (!a) {
                    for (t || (t = h(e)), n = t.length; n--;)a = _(t[n]), a[L] ? i.push(a) : r.push(a);
                    a = U(e, v(r, i))
                }
                return a
            }, C.pseudos.nth = C.pseudos.eq, C.filters = w.prototype = C.pseudos, C.setFilters = new w, B(), o.attr = lt.attr, lt.find = o, lt.expr = o.selectors, lt.expr[":"] = lt.expr.pseudos, lt.unique = o.uniqueSort, lt.text = o.getText, lt.isXMLDoc = o.isXML, lt.contains = o.contains
        }(e);
    var Wt = /Until$/, jt = /^(?:parents|prev(?:Until|All))/, Vt = /^.[^:#\[\.,]*$/, zt = lt.expr.match.needsContext, qt = {children: !0, contents: !0, next: !0, prev: !0};
    lt.fn.extend({find: function (e) {
        var t, n, i, r = this.length;
        if ("string" != typeof e)return i = this, this.pushStack(lt(e).filter(function () {
            for (t = 0; r > t; t++)if (lt.contains(i[t], this))return!0
        }));
        for (n = [], t = 0; r > t; t++)lt.find(e, this[t], n);
        return n = this.pushStack(r > 1 ? lt.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
    }, has: function (e) {
        var t, n = lt(e, this), i = n.length;
        return this.filter(function () {
            for (t = 0; i > t; t++)if (lt.contains(this, n[t]))return!0
        })
    }, not: function (e) {
        return this.pushStack(h(this, e, !1))
    }, filter: function (e) {
        return this.pushStack(h(this, e, !0))
    }, is: function (e) {
        return!!e && ("string" == typeof e ? zt.test(e) ? lt(e, this.context).index(this[0]) >= 0 : lt.filter(e, this).length > 0 : this.filter(e).length > 0)
    }, closest: function (e, t) {
        for (var n, i = 0, r = this.length, a = [], o = zt.test(e) || "string" != typeof e ? lt(e, t || this.context) : 0; r > i; i++)for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
            if (o ? o.index(n) > -1 : lt.find.matchesSelector(n, e)) {
                a.push(n);
                break
            }
            n = n.parentNode
        }
        return this.pushStack(a.length > 1 ? lt.unique(a) : a)
    }, index: function (e) {
        return e ? "string" == typeof e ? lt.inArray(this[0], lt(e)) : lt.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
        var n = "string" == typeof e ? lt(e, t) : lt.makeArray(e && e.nodeType ? [e] : e), i = lt.merge(this.get(), n);
        return this.pushStack(lt.unique(i))
    }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }}), lt.fn.andSelf = lt.fn.addBack, lt.each({parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
        return lt.dir(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
        return lt.dir(e, "parentNode", n)
    }, next: function (e) {
        return u(e, "nextSibling")
    }, prev: function (e) {
        return u(e, "previousSibling")
    }, nextAll: function (e) {
        return lt.dir(e, "nextSibling")
    }, prevAll: function (e) {
        return lt.dir(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
        return lt.dir(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
        return lt.dir(e, "previousSibling", n)
    }, siblings: function (e) {
        return lt.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
        return lt.sibling(e.firstChild)
    }, contents: function (e) {
        return lt.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : lt.merge([], e.childNodes)
    }}, function (e, t) {
        lt.fn[e] = function (n, i) {
            var r = lt.map(this, t, n);
            return Wt.test(e) || (i = n), i && "string" == typeof i && (r = lt.filter(i, r)), r = this.length > 1 && !qt[e] ? lt.unique(r) : r, this.length > 1 && jt.test(e) && (r = r.reverse()), this.pushStack(r)
        }
    }), lt.extend({filter: function (e, t, n) {
        return n && (e = ":not(" + e + ")"), 1 === t.length ? lt.find.matchesSelector(t[0], e) ? [t[0]] : [] : lt.find.matches(e, t)
    }, dir: function (e, n, i) {
        for (var r = [], a = e[n]; a && 9 !== a.nodeType && (i === t || 1 !== a.nodeType || !lt(a).is(i));)1 === a.nodeType && r.push(a), a = a[n];
        return r
    }, sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }});
    var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Gt = / jQuery\d+="(?:null|\d+)"/g, Xt = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"), Jt = /^\s+/, Kt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Yt = /<([\w:]+)/, Zt = /<tbody/i, Qt = /<|&#?\w+;/, en = /<(?:script|style|link)/i, tn = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, rn = /^$|\/(?:java|ecma)script/i, an = /^true\/(.*)/, on = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sn = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: lt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, ln = d(X), cn = ln.appendChild(X.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, lt.fn.extend({text: function (e) {
        return lt.access(this, function (e) {
            return e === t ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || X).createTextNode(e))
        }, null, e, arguments.length)
    }, wrapAll: function (e) {
        if (lt.isFunction(e))return this.each(function (t) {
            lt(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
            var t = lt(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                return e
            }).append(this)
        }
        return this
    }, wrapInner: function (e) {
        return lt.isFunction(e) ? this.each(function (t) {
            lt(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
            var t = lt(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
        })
    }, wrap: function (e) {
        var t = lt.isFunction(e);
        return this.each(function (n) {
            lt(this).wrapAll(t ? e.call(this, n) : e)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
        }).end()
    }, append: function () {
        return this.domManip(arguments, !0, function (e) {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
        })
    }, prepend: function () {
        return this.domManip(arguments, !0, function (e) {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
        })
    }, before: function () {
        return this.domManip(arguments, !1, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
        })
    }, after: function () {
        return this.domManip(arguments, !1, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
    }, remove: function (e, t) {
        for (var n, i = 0; null != (n = this[i]); i++)(!e || lt.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || lt.cleanData(y(n)), n.parentNode && (t && lt.contains(n.ownerDocument, n) && m(y(n, "script")), n.parentNode.removeChild(n)));
        return this
    }, empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
            for (1 === e.nodeType && lt.cleanData(y(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
            e.options && lt.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
    }, clone: function (e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
            return lt.clone(this, e, t)
        })
    }, html: function (e) {
        return lt.access(this, function (e) {
            var n = this[0] || {}, i = 0, r = this.length;
            if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(Gt, "") : t;
            if (!("string" != typeof e || en.test(e) || !lt.support.htmlSerialize && Xt.test(e) || !lt.support.leadingWhitespace && Jt.test(e) || sn[(Yt.exec(e) || ["", ""])[1].toLowerCase()])) {
                e = e.replace(Kt, "<$1></$2>");
                try {
                    for (; r > i; i++)n = this[i] || {}, 1 === n.nodeType && (lt.cleanData(y(n, !1)), n.innerHTML = e);
                    n = 0
                } catch (a) {
                }
            }
            n && this.empty().append(e)
        }, null, e, arguments.length)
    }, replaceWith: function (e) {
        var t = lt.isFunction(e);
        return t || "string" == typeof e || (e = lt(e).not(this).detach()), this.domManip([e], !0, function (e) {
            var t = this.nextSibling, n = this.parentNode;
            n && (lt(this).remove(), n.insertBefore(e, t))
        })
    }, detach: function (e) {
        return this.remove(e, !0)
    }, domManip: function (e, n, i) {
        e = tt.apply([], e);
        var r, a, o, s, l, c, u = 0, h = this.length, d = this, m = h - 1, _ = e[0], v = lt.isFunction(_);
        if (v || !(1 >= h || "string" != typeof _ || lt.support.checkClone) && nn.test(_))return this.each(function (r) {
            var a = d.eq(r);
            v && (e[0] = _.call(this, r, n ? a.html() : t)), a.domManip(e, n, i)
        });
        if (h && (c = lt.buildFragment(e, this[0].ownerDocument, !1, this), r = c.firstChild, 1 === c.childNodes.length && (c = r), r)) {
            for (n = n && lt.nodeName(r, "tr"), s = lt.map(y(c, "script"), p), o = s.length; h > u; u++)a = c, u !== m && (a = lt.clone(a, !0, !0), o && lt.merge(s, y(a, "script"))), i.call(n && lt.nodeName(this[u], "table") ? f(this[u], "tbody") : this[u], a, u);
            if (o)for (l = s[s.length - 1].ownerDocument, lt.map(s, g), u = 0; o > u; u++)a = s[u], rn.test(a.type || "") && !lt._data(a, "globalEval") && lt.contains(l, a) && (a.src ? lt.ajax({url: a.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0}) : lt.globalEval((a.text || a.textContent || a.innerHTML || "").replace(on, "")));
            c = r = null
        }
        return this
    }}), lt.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
        lt.fn[e] = function (e) {
            for (var n, i = 0, r = [], a = lt(e), o = a.length - 1; o >= i; i++)n = i === o ? this : this.clone(!0), lt(a[i])[t](n), nt.apply(r, n.get());
            return this.pushStack(r)
        }
    }), lt.extend({clone: function (e, t, n) {
        var i, r, a, o, s, l = lt.contains(e.ownerDocument, e);
        if (lt.support.html5Clone || lt.isXMLDoc(e) || !Xt.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (cn.innerHTML = e.outerHTML, cn.removeChild(a = cn.firstChild)), !(lt.support.noCloneEvent && lt.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || lt.isXMLDoc(e)))for (i = y(a), s = y(e), o = 0; null != (r = s[o]); ++o)i[o] && v(r, i[o]);
        if (t)if (n)for (s = s || y(e), i = i || y(a), o = 0; null != (r = s[o]); o++)_(r, i[o]); else _(e, a);
        return i = y(a, "script"), i.length > 0 && m(i, !l && y(e, "script")), i = s = r = null, a
    }, buildFragment: function (e, t, n, i) {
        for (var r, a, o, s, l, c, u, h = e.length, f = d(t), p = [], g = 0; h > g; g++)if (a = e[g], a || 0 === a)if ("object" === lt.type(a))lt.merge(p, a.nodeType ? [a] : a); else if (Qt.test(a)) {
            for (s = s || f.appendChild(t.createElement("div")), l = (Yt.exec(a) || ["", ""])[1].toLowerCase(), u = sn[l] || sn._default, s.innerHTML = u[1] + a.replace(Kt, "<$1></$2>") + u[2], r = u[0]; r--;)s = s.lastChild;
            if (!lt.support.leadingWhitespace && Jt.test(a) && p.push(t.createTextNode(Jt.exec(a)[0])), !lt.support.tbody)for (a = "table" !== l || Zt.test(a) ? "<table>" !== u[1] || Zt.test(a) ? 0 : s : s.firstChild, r = a && a.childNodes.length; r--;)lt.nodeName(c = a.childNodes[r], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (lt.merge(p, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
            s = f.lastChild
        } else p.push(t.createTextNode(a));
        for (s && f.removeChild(s), lt.support.appendChecked || lt.grep(y(p, "input"), b), g = 0; a = p[g++];)if ((!i || -1 === lt.inArray(a, i)) && (o = lt.contains(a.ownerDocument, a), s = y(f.appendChild(a), "script"), o && m(s), n))for (r = 0; a = s[r++];)rn.test(a.type || "") && n.push(a);
        return s = null, f
    }, cleanData: function (e, t) {
        for (var n, i, r, a, o = 0, s = lt.expando, l = lt.cache, c = lt.support.deleteExpando, u = lt.event.special; null != (n = e[o]); o++)if ((t || lt.acceptData(n)) && (r = n[s], a = r && l[r])) {
            if (a.events)for (i in a.events)u[i] ? lt.event.remove(n, i) : lt.removeEvent(n, i, a.handle);
            l[r] && (delete l[r], c ? delete n[s] : typeof n.removeAttribute !== G ? n.removeAttribute(s) : n[s] = null, Q.push(r))
        }
    }});
    var un, hn, dn, fn = /alpha\([^)]*\)/i, pn = /opacity\s*=\s*([^)]*)/, gn = /^(top|right|bottom|left)$/, mn = /^(none|table(?!-c[ea]).+)/, _n = /^margin/, vn = new RegExp("^(" + ct + ")(.*)$", "i"), yn = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"), bn = new RegExp("^([+-])=(" + ct + ")", "i"), wn = {BODY: "block"}, xn = {position: "absolute", visibility: "hidden", display: "block"}, Sn = {letterSpacing: 0, fontWeight: 400}, Cn = ["Top", "Right", "Bottom", "Left"], Tn = ["Webkit", "O", "Moz", "ms"];
    lt.fn.extend({css: function (e, n) {
        return lt.access(this, function (e, n, i) {
            var r, a, o = {}, s = 0;
            if (lt.isArray(n)) {
                for (a = hn(e), r = n.length; r > s; s++)o[n[s]] = lt.css(e, n[s], !1, a);
                return o
            }
            return i !== t ? lt.style(e, n, i) : lt.css(e, n)
        }, e, n, arguments.length > 1)
    }, show: function () {
        return S(this, !0)
    }, hide: function () {
        return S(this)
    }, toggle: function (e) {
        var t = "boolean" == typeof e;
        return this.each(function () {
            (t ? e : x(this)) ? lt(this).show() : lt(this).hide()
        })
    }}), lt.extend({cssHooks: {opacity: {get: function (e, t) {
        if (t) {
            var n = dn(e, "opacity");
            return"" === n ? "1" : n
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": lt.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (e, n, i, r) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var a, o, s, l = lt.camelCase(n), c = e.style;
            if (n = lt.cssProps[l] || (lt.cssProps[l] = w(c, l)), s = lt.cssHooks[n] || lt.cssHooks[l], i === t)return s && "get"in s && (a = s.get(e, !1, r)) !== t ? a : c[n];
            if (o = typeof i, "string" === o && (a = bn.exec(i)) && (i = (a[1] + 1) * a[2] + parseFloat(lt.css(e, n)), o = "number"), !(null == i || "number" === o && isNaN(i) || ("number" !== o || lt.cssNumber[l] || (i += "px"), lt.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), s && "set"in s && (i = s.set(e, i, r)) === t)))try {
                c[n] = i
            } catch (u) {
            }
        }
    }, css: function (e, n, i, r) {
        var a, o, s, l = lt.camelCase(n);
        return n = lt.cssProps[l] || (lt.cssProps[l] = w(e.style, l)), s = lt.cssHooks[n] || lt.cssHooks[l], s && "get"in s && (o = s.get(e, !0, i)), o === t && (o = dn(e, n, r)), "normal" === o && n in Sn && (o = Sn[n]), "" === i || i ? (a = parseFloat(o), i === !0 || lt.isNumeric(a) ? a || 0 : o) : o
    }, swap: function (e, t, n, i) {
        var r, a, o = {};
        for (a in t)o[a] = e.style[a], e.style[a] = t[a];
        r = n.apply(e, i || []);
        for (a in t)e.style[a] = o[a];
        return r
    }}), e.getComputedStyle ? (hn = function (t) {
        return e.getComputedStyle(t, null)
    }, dn = function (e, n, i) {
        var r, a, o, s = i || hn(e), l = s ? s.getPropertyValue(n) || s[n] : t, c = e.style;
        return s && ("" !== l || lt.contains(e.ownerDocument, e) || (l = lt.style(e, n)), yn.test(l) && _n.test(n) && (r = c.width, a = c.minWidth, o = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = s.width, c.width = r, c.minWidth = a, c.maxWidth = o)), l
    }) : X.documentElement.currentStyle && (hn = function (e) {
        return e.currentStyle
    }, dn = function (e, n, i) {
        var r, a, o, s = i || hn(e), l = s ? s[n] : t, c = e.style;
        return null == l && c && c[n] && (l = c[n]), yn.test(l) && !gn.test(n) && (r = c.left, a = e.runtimeStyle, o = a && a.left, o && (a.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em" : l, l = c.pixelLeft + "px", c.left = r, o && (a.left = o)), "" === l ? "auto" : l
    }), lt.each(["height", "width"], function (e, t) {
        lt.cssHooks[t] = {get: function (e, n, i) {
            return n ? 0 === e.offsetWidth && mn.test(lt.css(e, "display")) ? lt.swap(e, xn, function () {
                return D(e, t, i)
            }) : D(e, t, i) : void 0
        }, set: function (e, n, i) {
            var r = i && hn(e);
            return C(e, n, i ? T(e, t, i, lt.support.boxSizing && "border-box" === lt.css(e, "boxSizing", !1, r), r) : 0)
        }}
    }), lt.support.opacity || (lt.cssHooks.opacity = {get: function (e, t) {
        return pn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    }, set: function (e, t) {
        var n = e.style, i = e.currentStyle, r = lt.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", a = i && i.filter || n.filter || "";
        n.zoom = 1, (t >= 1 || "" === t) && "" === lt.trim(a.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = fn.test(a) ? a.replace(fn, r) : a + " " + r)
    }}), lt(function () {
        lt.support.reliableMarginRight || (lt.cssHooks.marginRight = {get: function (e, t) {
            return t ? lt.swap(e, {display: "inline-block"}, dn, [e, "marginRight"]) : void 0
        }}), !lt.support.pixelPosition && lt.fn.position && lt.each(["top", "left"], function (e, t) {
            lt.cssHooks[t] = {get: function (e, n) {
                return n ? (n = dn(e, t), yn.test(n) ? lt(e).position()[t] + "px" : n) : void 0
            }}
        })
    }), lt.expr && lt.expr.filters && (lt.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !lt.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || lt.css(e, "display"))
    }, lt.expr.filters.visible = function (e) {
        return!lt.expr.filters.hidden(e)
    }), lt.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        lt.cssHooks[e + t] = {expand: function (n) {
            for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)r[e + Cn[i] + t] = a[i] || a[i - 2] || a[0];
            return r
        }}, _n.test(e) || (lt.cssHooks[e + t].set = C)
    });
    var Dn = /%20/g, kn = /\[\]$/, En = /\r?\n/g, An = /^(?:submit|button|image|reset|file)$/i, Bn = /^(?:input|select|textarea|keygen)/i;
    lt.fn.extend({serialize: function () {
        return lt.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var e = lt.prop(this, "elements");
            return e ? lt.makeArray(e) : this
        }).filter(function () {
                var e = this.type;
                return this.name && !lt(this).is(":disabled") && Bn.test(this.nodeName) && !An.test(e) && (this.checked || !tn.test(e))
            }).map(function (e, t) {
                var n = lt(this).val();
                return null == n ? null : lt.isArray(n) ? lt.map(n, function (e) {
                    return{name: t.name, value: e.replace(En, "\r\n")}
                }) : {name: t.name, value: n.replace(En, "\r\n")}
            }).get()
    }}), lt.param = function (e, n) {
        var i, r = [], a = function (e, t) {
            t = lt.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(e) || e.jquery && !lt.isPlainObject(e))lt.each(e, function () {
            a(this.name, this.value)
        }); else for (i in e)A(i, e[i], n, a);
        return r.join("&").replace(Dn, "+")
    }, lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        lt.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), lt.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var Pn, Nn, Fn = lt.now(), In = /\?/, $n = /#.*$/, Mn = /([?&])_=[^&]*/, Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Rn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ln = /^(?:GET|HEAD)$/, On = /^\/\//, Wn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, jn = lt.fn.load, Vn = {}, zn = {}, qn = "*/".concat("*");
    try {
        Nn = J.href
    } catch (Un) {
        Nn = X.createElement("a"), Nn.href = "", Nn = Nn.href
    }
    Pn = Wn.exec(Nn.toLowerCase()) || [], lt.fn.load = function (e, n, i) {
        if ("string" != typeof e && jn)return jn.apply(this, arguments);
        var r, a, o, s = this, l = e.indexOf(" ");
        return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), lt.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (o = "POST"), s.length > 0 && lt.ajax({url: e, type: o, dataType: "html", data: n}).done(function (e) {
            a = arguments, s.html(r ? lt("<div>").append(lt.parseHTML(e)).find(r) : e)
        }).complete(i && function (e, t) {
                s.each(i, a || [e.responseText, t, e])
            }), this
    }, lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        lt.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), lt.each(["get", "post"], function (e, n) {
        lt[n] = function (e, i, r, a) {
            return lt.isFunction(i) && (a = a || r, r = i, i = t), lt.ajax({url: e, type: n, dataType: a, data: i, success: r})
        }
    }), lt.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: Nn, type: "GET", isLocal: Rn.test(Pn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": qn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText"}, converters: {"* text": e.String, "text html": !0, "text json": lt.parseJSON, "text xml": lt.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (e, t) {
        return t ? N(N(e, lt.ajaxSettings), t) : N(lt.ajaxSettings, e)
    }, ajaxPrefilter: B(Vn), ajaxTransport: B(zn), ajax: function (e, n) {
        function i(e, n, i, r) {
            var a, h, v, y, w, S = n;
            2 !== b && (b = 2, l && clearTimeout(l), u = t, s = r || "", x.readyState = e > 0 ? 4 : 0, i && (y = F(d, x, i)), e >= 200 && 300 > e || 304 === e ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (lt.lastModified[o] = w), w = x.getResponseHeader("etag"), w && (lt.etag[o] = w)), 204 === e ? (a = !0, S = "nocontent") : 304 === e ? (a = !0, S = "notmodified") : (a = I(d, y), S = a.state, h = a.data, v = a.error, a = !v)) : (v = S, (e || !S) && (S = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || S) + "", a ? g.resolveWith(f, [h, S, x]) : g.rejectWith(f, [x, S, v]), x.statusCode(_), _ = t, c && p.trigger(a ? "ajaxSuccess" : "ajaxError", [x, d, a ? h : v]), m.fireWith(f, [x, S]), c && (p.trigger("ajaxComplete", [x, d]), --lt.active || lt.event.trigger("ajaxStop")))
        }

        "object" == typeof e && (n = e, e = t), n = n || {};
        var r, a, o, s, l, c, u, h, d = lt.ajaxSetup({}, n), f = d.context || d, p = d.context && (f.nodeType || f.jquery) ? lt(f) : lt.event, g = lt.Deferred(), m = lt.Callbacks("once memory"), _ = d.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled", x = {readyState: 0, getResponseHeader: function (e) {
            var t;
            if (2 === b) {
                if (!h)for (h = {}; t = Hn.exec(s);)h[t[1].toLowerCase()] = t[2];
                t = h[e.toLowerCase()]
            }
            return null == t ? null : t
        }, getAllResponseHeaders: function () {
            return 2 === b ? s : null
        }, setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return b || (e = y[n] = y[n] || e, v[e] = t), this
        }, overrideMimeType: function (e) {
            return b || (d.mimeType = e), this
        }, statusCode: function (e) {
            var t;
            if (e)if (2 > b)for (t in e)_[t] = [_[t], e[t]]; else x.always(e[x.status]);
            return this
        }, abort: function (e) {
            var t = e || w;
            return u && u.abort(t), i(0, t), this
        }};
        if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || Nn) + "").replace($n, "").replace(On, Pn[1] + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = lt.trim(d.dataType || "*").toLowerCase().match(ut) || [""], null == d.crossDomain && (r = Wn.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] === Pn[1] && r[2] === Pn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (Pn[3] || ("http:" === Pn[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = lt.param(d.data, d.traditional)), P(Vn, d, n, x), 2 === b)return x;
        c = d.global, c && 0 === lt.active++ && lt.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Ln.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (In.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Mn.test(o) ? o.replace(Mn, "$1_=" + Fn++) : o + (In.test(o) ? "&" : "?") + "_=" + Fn++)), d.ifModified && (lt.lastModified[o] && x.setRequestHeader("If-Modified-Since", lt.lastModified[o]), lt.etag[o] && x.setRequestHeader("If-None-Match", lt.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + qn + "; q=0.01" : "") : d.accepts["*"]);
        for (a in d.headers)x.setRequestHeader(a, d.headers[a]);
        if (d.beforeSend && (d.beforeSend.call(f, x, d) === !1 || 2 === b))return x.abort();
        w = "abort";
        for (a in{success: 1, error: 1, complete: 1})x[a](d[a]);
        if (u = P(zn, d, n, x)) {
            x.readyState = 1, c && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
                x.abort("timeout")
            }, d.timeout));
            try {
                b = 1, u.send(v, i)
            } catch (S) {
                if (!(2 > b))throw S;
                i(-1, S)
            }
        } else i(-1, "No Transport");
        return x
    }, getScript: function (e, n) {
        return lt.get(e, t, n, "script")
    }, getJSON: function (e, t, n) {
        return lt.get(e, t, n, "json")
    }}), lt.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (e) {
        return lt.globalEval(e), e
    }}}), lt.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), lt.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, i = X.head || lt("head")[0] || X.documentElement;
            return{send: function (t, r) {
                n = X.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                    (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
                }, i.insertBefore(n, i.firstChild)
            }, abort: function () {
                n && n.onload(t, !0)
            }}
        }
    });
    var Gn = [], Xn = /(=)\?(?=&|$)|\?\?/;
    lt.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var e = Gn.pop() || lt.expando + "_" + Fn++;
        return this[e] = !0, e
    }}), lt.ajaxPrefilter("json jsonp", function (n, i, r) {
        var a, o, s, l = n.jsonp !== !1 && (Xn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Xn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (a = n.jsonpCallback = lt.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Xn, "$1" + a) : n.jsonp !== !1 && (n.url += (In.test(n.url) ? "&" : "?") + n.jsonp + "=" + a), n.converters["script json"] = function () {
            return s || lt.error(a + " was not called"), s[0]
        }, n.dataTypes[0] = "json", o = e[a], e[a] = function () {
            s = arguments
        }, r.always(function () {
            e[a] = o, n[a] && (n.jsonpCallback = i.jsonpCallback, Gn.push(a)), s && lt.isFunction(o) && o(s[0]), s = o = t
        }), "script") : void 0
    });
    var Jn, Kn, Yn = 0, Zn = e.ActiveXObject && function () {
        var e;
        for (e in Jn)Jn[e](t, !0)
    };
    lt.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return!this.isLocal && $() || M()
    } : $, Kn = lt.ajaxSettings.xhr(), lt.support.cors = !!Kn && "withCredentials"in Kn, Kn = lt.support.ajax = !!Kn, Kn && lt.ajaxTransport(function (n) {
        if (!n.crossDomain || lt.support.cors) {
            var i;
            return{send: function (r, a) {
                var o, s, l = n.xhr();
                if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)l[s] = n.xhrFields[s];
                n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (s in r)l.setRequestHeader(s, r[s])
                } catch (c) {
                }
                l.send(n.hasContent && n.data || null), i = function (e, r) {
                    var s, c, u, h;
                    try {
                        if (i && (r || 4 === l.readyState))if (i = t, o && (l.onreadystatechange = lt.noop, Zn && delete Jn[o]), r)4 !== l.readyState && l.abort(); else {
                            h = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (h.text = l.responseText);
                            try {
                                u = l.statusText
                            } catch (d) {
                                u = ""
                            }
                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = h.text ? 200 : 404
                        }
                    } catch (f) {
                        r || a(-1, f)
                    }
                    h && a(s, u, h, c)
                }, n.async ? 4 === l.readyState ? setTimeout(i) : (o = ++Yn, Zn && (Jn || (Jn = {}, lt(e).unload(Zn)), Jn[o] = i), l.onreadystatechange = i) : i()
            }, abort: function () {
                i && i(t, !0)
            }}
        }
    });
    var Qn, ei, ti = /^(?:toggle|show|hide)$/, ni = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"), ii = /queueHooks$/, ri = [W], ai = {"*": [function (e, t) {
        var n, i, r = this.createTween(e, t), a = ni.exec(t), o = r.cur(), s = +o || 0, l = 1, c = 20;
        if (a) {
            if (n = +a[2], i = a[3] || (lt.cssNumber[e] ? "" : "px"), "px" !== i && s) {
                s = lt.css(r.elem, e, !0) || n || 1;
                do l = l || ".5", s /= l, lt.style(r.elem, e, s + i); while (l !== (l = r.cur() / o) && 1 !== l && --c)
            }
            r.unit = i, r.start = s, r.end = a[1] ? s + (a[1] + 1) * n : n
        }
        return r
    }]};
    lt.Animation = lt.extend(L, {tweener: function (e, t) {
        lt.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var n, i = 0, r = e.length; r > i; i++)n = e[i], ai[n] = ai[n] || [], ai[n].unshift(t)
    }, prefilter: function (e, t) {
        t ? ri.unshift(e) : ri.push(e)
    }}), lt.Tween = j, j.prototype = {constructor: j, init: function (e, t, n, i, r, a) {
        this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (lt.cssNumber[n] ? "" : "px")
    }, cur: function () {
        var e = j.propHooks[this.prop];
        return e && e.get ? e.get(this) : j.propHooks._default.get(this)
    }, run: function (e) {
        var t, n = j.propHooks[this.prop];
        return this.pos = t = this.options.duration ? lt.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : j.propHooks._default.set(this), this
    }}, j.prototype.init.prototype = j.prototype, j.propHooks = {_default: {get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = lt.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
    }, set: function (e) {
        lt.fx.step[e.prop] ? lt.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[lt.cssProps[e.prop]] || lt.cssHooks[e.prop]) ? lt.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
    }}}, j.propHooks.scrollTop = j.propHooks.scrollLeft = {set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }}, lt.each(["toggle", "show", "hide"], function (e, t) {
        var n = lt.fn[t];
        lt.fn[t] = function (e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, i, r)
        }
    }), lt.fn.extend({fadeTo: function (e, t, n, i) {
        return this.filter(x).css("opacity", 0).show().end().animate({opacity: t}, e, n, i)
    }, animate: function (e, t, n, i) {
        var r = lt.isEmptyObject(e), a = lt.speed(t, n, i), o = function () {
            var t = L(this, lt.extend({}, e), a);
            o.finish = function () {
                t.stop(!0)
            }, (r || lt._data(this, "finish")) && t.stop(!0)
        };
        return o.finish = o, r || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
    }, stop: function (e, n, i) {
        var r = function (e) {
            var t = e.stop;
            delete e.stop, t(i)
        };
        return"string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
            var t = !0, n = null != e && e + "queueHooks", a = lt.timers, o = lt._data(this);
            if (n)o[n] && o[n].stop && r(o[n]); else for (n in o)o[n] && o[n].stop && ii.test(n) && r(o[n]);
            for (n = a.length; n--;)a[n].elem !== this || null != e && a[n].queue !== e || (a[n].anim.stop(i), t = !1, a.splice(n, 1));
            (t || !i) && lt.dequeue(this, e)
        })
    }, finish: function (e) {
        return e !== !1 && (e = e || "fx"), this.each(function () {
            var t, n = lt._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], a = lt.timers, o = i ? i.length : 0;
            for (n.finish = !0, lt.queue(this, e, []), r && r.cur && r.cur.finish && r.cur.finish.call(this), t = a.length; t--;)a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
            for (t = 0; o > t; t++)i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish
        })
    }}), lt.each({slideDown: V("show"), slideUp: V("hide"), slideToggle: V("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
        lt.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }), lt.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? lt.extend({}, e) : {complete: n || !n && t || lt.isFunction(e) && e, duration: e, easing: n && t || t && !lt.isFunction(t) && t};
        return i.duration = lt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in lt.fx.speeds ? lt.fx.speeds[i.duration] : lt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            lt.isFunction(i.old) && i.old.call(this), i.queue && lt.dequeue(this, i.queue)
        }, i
    }, lt.easing = {linear: function (e) {
        return e
    }, swing: function (e) {
        return.5 - Math.cos(e * Math.PI) / 2
    }}, lt.timers = [], lt.fx = j.prototype.init, lt.fx.tick = function () {
        var e, n = lt.timers, i = 0;
        for (Qn = lt.now(); i < n.length; i++)e = n[i], e() || n[i] !== e || n.splice(i--, 1);
        n.length || lt.fx.stop(), Qn = t
    }, lt.fx.timer = function (e) {
        e() && lt.timers.push(e) && lt.fx.start()
    }, lt.fx.interval = 13, lt.fx.start = function () {
        ei || (ei = setInterval(lt.fx.tick, lt.fx.interval))
    }, lt.fx.stop = function () {
        clearInterval(ei), ei = null
    }, lt.fx.speeds = {slow: 600, fast: 200, _default: 400}, lt.fx.step = {}, lt.expr && lt.expr.filters && (lt.expr.filters.animated = function (e) {
        return lt.grep(lt.timers,function (t) {
            return e === t.elem
        }).length
    }), lt.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            lt.offset.setOffset(this, e, t)
        });
        var n, i, r = {top: 0, left: 0}, a = this[0], o = a && a.ownerDocument;
        if (o)return n = o.documentElement, lt.contains(n, a) ? (typeof a.getBoundingClientRect !== G && (r = a.getBoundingClientRect()), i = z(o), {top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)}) : r
    }, lt.offset = {setOffset: function (e, t, n) {
        var i = lt.css(e, "position");
        "static" === i && (e.style.position = "relative");
        var r, a, o = lt(e), s = o.offset(), l = lt.css(e, "top"), c = lt.css(e, "left"), u = ("absolute" === i || "fixed" === i) && lt.inArray("auto", [l, c]) > -1, h = {}, d = {};
        u ? (d = o.position(), r = d.top, a = d.left) : (r = parseFloat(l) || 0, a = parseFloat(c) || 0), lt.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (h.top = t.top - s.top + r), null != t.left && (h.left = t.left - s.left + a), "using"in t ? t.using.call(e, h) : o.css(h)
    }}, lt.fn.extend({position: function () {
        if (this[0]) {
            var e, t, n = {top: 0, left: 0}, i = this[0];
            return"fixed" === lt.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), lt.nodeName(e[0], "html") || (n = e.offset()), n.top += lt.css(e[0], "borderTopWidth", !0), n.left += lt.css(e[0], "borderLeftWidth", !0)), {top: t.top - n.top - lt.css(i, "marginTop", !0), left: t.left - n.left - lt.css(i, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            for (var e = this.offsetParent || X.documentElement; e && !lt.nodeName(e, "html") && "static" === lt.css(e, "position");)e = e.offsetParent;
            return e || X.documentElement
        })
    }}), lt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var i = /Y/.test(n);
        lt.fn[e] = function (r) {
            return lt.access(this, function (e, r, a) {
                var o = z(e);
                return a === t ? o ? n in o ? o[n] : o.document.documentElement[r] : e[r] : (o ? o.scrollTo(i ? lt(o).scrollLeft() : a, i ? a : lt(o).scrollTop()) : e[r] = a, void 0)
            }, e, r, arguments.length, null)
        }
    }), lt.each({Height: "height", Width: "width"}, function (e, n) {
        lt.each({padding: "inner" + e, content: n, "": "outer" + e}, function (i, r) {
            lt.fn[r] = function (r, a) {
                var o = arguments.length && (i || "boolean" != typeof r), s = i || (r === !0 || a === !0 ? "margin" : "border");
                return lt.access(this, function (n, i, r) {
                    var a;
                    return lt.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (a = n.documentElement, Math.max(n.body["scroll" + e], a["scroll" + e], n.body["offset" + e], a["offset" + e], a["client" + e])) : r === t ? lt.css(n, i, s) : lt.style(n, i, r, s)
                }, n, o ? r : t, o, null)
            }
        })
    }), e.jQuery = e.$ = lt, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return lt
    })
}(window), /*!
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright 2011, Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
    function (e) {
        function t(t, n, i, r) {
            var a = {data: r || 0 === r || r === !1 ? r : n ? n.data : {}, _wrap: n ? n._wrap : null, tmpl: null, parent: n || null, nodes: [], calls: c, nest: u, wrap: h, html: d, update: f};
            return t && e.extend(a, t, {nodes: [], parent: n}), i && (a.tmpl = i, a._ctnt = a._ctnt || a.tmpl(e, a), a.key = ++w, (S.length ? y : v)[w] = a), a
        }

        function n(t, r, a) {
            var o, s = a ? e.map(a, function (e) {
                return"string" == typeof e ? t.key ? e.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + m + '="' + t.key + '" $2') : e : n(e, t, e._ctnt)
            }) : t;
            return r ? s : (s = s.join(""), s.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (t, n, r, a) {
                o = e(r).get(), l(o), n && (o = i(n).concat(o)), a && (o = o.concat(i(a)))
            }), o ? o : i(s))
        }

        function i(t) {
            var n = document.createElement("div");
            return n.innerHTML = t, e.makeArray(n.childNodes)
        }

        function r(t) {
            return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + e.trim(t).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (t, n, i, r, a, s, l) {
                var c, u, h, d = e.tmpl.tag[i];
                if (!d)throw"Unknown template tag: " + i;
                return c = d._default || [], s && !/\w$/.test(a) && (a += s, s = ""), a ? (a = o(a), l = l ? "," + o(l) + ")" : s ? ")" : "", u = s ? a.indexOf(".") > -1 ? a + o(s) : "(" + a + ").call($item" + l : a, h = s ? u : "(typeof(" + a + ")==='function'?(" + a + ").call($item):(" + a + "))") : h = u = c.$1 || "null", r = o(r), "');" + d[n ? "close" : "open"].split("$notnull_1").join(a ? "typeof(" + a + ")!=='undefined' && (" + a + ")!=null" : "true").split("$1a").join(h).split("$1").join(u).split("$2").join(r || c.$2 || "") + "__.push('"
            }) + "');}return __;")
        }

        function a(t, i) {
            t._wrap = n(t, !0, e.isArray(i) ? i : [_.test(i) ? i : e(i).html()]).join("")
        }

        function o(e) {
            return e ? e.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
        }

        function s(e) {
            var t = document.createElement("div");
            return t.appendChild(e.cloneNode(!0)), t.innerHTML
        }

        function l(n) {
            function i(n) {
                function i(e) {
                    e += c, o = u[e] = u[e] || t(o, v[o.parent.key + c] || o.parent)
                }

                var r, a, o, s, l = n;
                if (s = n.getAttribute(m)) {
                    for (; l.parentNode && 1 === (l = l.parentNode).nodeType && !(r = l.getAttribute(m)););
                    r !== s && (l = l.parentNode ? 11 === l.nodeType ? 0 : l.getAttribute(m) || 0 : 0, (o = v[s]) || (o = y[s], o = t(o, v[l] || y[l]), o.key = ++w, v[w] = o), x && i(s)), n.removeAttribute(m)
                } else x && (o = e.data(n, "tmplItem")) && (i(o.key), v[o.key] = o, l = e.data(n.parentNode, "tmplItem"), l = l ? l.key : 0);
                if (o) {
                    for (a = o; a && a.key != l;)a.nodes.push(n), a = a.parent;
                    delete o._ctnt, delete o._wrap, e.data(n, "tmplItem", o)
                }
            }

            var r, a, o, s, l, c = "_" + x, u = {};
            for (o = 0, s = n.length; s > o; o++)if (1 === (r = n[o]).nodeType) {
                for (a = r.getElementsByTagName("*"), l = a.length - 1; l >= 0; l--)i(a[l]);
                i(r)
            }
        }

        function c(e, t, n, i) {
            return e ? (S.push({_: e, tmpl: t, item: this, data: n, options: i}), void 0) : S.pop()
        }

        function u(t, n, i) {
            return e.tmpl(e.template(t), n, i, this)
        }

        function h(t, n) {
            var i = t.options || {};
            return i.wrapped = n, e.tmpl(e.template(t.tmpl), t.data, i, t.item)
        }

        function d(t, n) {
            var i = this._wrap;
            return e.map(e(e.isArray(i) ? i.join("") : i).filter(t || "*"), function (e) {
                return n ? e.innerText || e.textContent : e.outerHTML || s(e)
            })
        }

        function f() {
            var t = this.nodes;
            e.tmpl(null, null, null, this).insertBefore(t[0]), e(t).remove()
        }

        var p, g = e.fn.domManip, m = "_tmplitem", _ = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, v = {}, y = {}, b = {key: 0, data: {}}, w = 0, x = 0, S = [];
        e.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (t, n) {
            e.fn[t] = function (i) {
                var r, a, o, s, l = [], c = e(i), u = 1 === this.length && this[0].parentNode;
                if (p = v || {}, u && 11 === u.nodeType && 1 === u.childNodes.length && 1 === c.length)c[n](this[0]), l = this; else {
                    for (a = 0, o = c.length; o > a; a++)x = a, r = (a > 0 ? this.clone(!0) : this).get(), e(c[a])[n](r), l = l.concat(r);
                    x = 0, l = this.pushStack(l, t, c.selector)
                }
                return s = p, p = null, e.tmpl.complete(s), l
            }
        }), e.fn.extend({tmpl: function (t, n, i) {
            return e.tmpl(this[0], t, n, i)
        }, tmplItem: function () {
            return e.tmplItem(this[0])
        }, template: function (t) {
            return e.template(t, this[0])
        }, domManip: function (t, n, i) {
            if (t[0] && e.isArray(t[0])) {
                for (var r, a = e.makeArray(arguments), o = t[0], s = o.length, l = 0; s > l && !(r = e.data(o[l++], "tmplItem")););
                r && x && (a[2] = function (t) {
                    e.tmpl.afterManip(this, t, i)
                }), g.apply(this, a)
            } else g.apply(this, arguments);
            return x = 0, p || e.tmpl.complete(v), this
        }}), e.extend({tmpl: function (i, r, o, s) {
            var l, c = !s;
            if (c)s = b, i = e.template[i] || e.template(null, i), y = {}; else if (!i)return i = s.tmpl, v[s.key] = s, s.nodes = [], s.wrapped && a(s, s.wrapped), e(n(s, null, s.tmpl(e, s)));
            return i ? ("function" == typeof r && (r = r.call(s || {})), o && o.wrapped && a(o, o.wrapped), l = e.isArray(r) ? e.map(r, function (e) {
                return e ? t(o, s, i, e) : null
            }) : [t(o, s, i, r)], c ? e(n(s, null, l)) : l) : []
        }, tmplItem: function (t) {
            var n;
            for (t instanceof e && (t = t[0]); t && 1 === t.nodeType && !(n = e.data(t, "tmplItem")) && (t = t.parentNode););
            return n || b
        }, template: function (t, n) {
            return n ? ("string" == typeof n ? n = r(n) : n instanceof e && (n = n[0] || {}), n.nodeType && (n = e.data(n, "tmpl") || e.data(n, "tmpl", r(n.innerHTML))), "string" == typeof t ? e.template[t] = n : n) : t ? "string" != typeof t ? e.template(null, t) : e.template[t] || e.template(null, _.test(t) ? t : e(t)) : null
        }, encode: function (e) {
            return("" + e).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
        }}), e.extend(e.tmpl, {tag: {tmpl: {_default: {$2: "null"}, open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"}, wrap: {_default: {$2: "null"}, open: "$item.calls(__,$1,$2);__=[];", close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"}, each: {_default: {$2: "$index, $value"}, open: "if($notnull_1){$.each($1a,function($2){with(this){", close: "}});}"}, "if": {open: "if(($notnull_1) && $1a){", close: "}"}, "else": {_default: {$1: "true"}, open: "}else if(($notnull_1) && $1a){"}, html: {open: "if($notnull_1){__.push($1a);}"}, "=": {_default: {$1: "$data"}, open: "if($notnull_1){__.push($.encode($1a));}"}, "!": {open: ""}}, complete: function () {
            v = {}
        }, afterManip: function (t, n, i) {
            var r = 11 === n.nodeType ? e.makeArray(n.childNodes) : 1 === n.nodeType ? [n] : [];
            i.call(t, n), l(r), x++
        }})
    }(jQuery), window.Modernizr = function (e, t, n) {
    function i(e) {
        v.cssText = e
    }

    function r(e, t) {
        return typeof e === t
    }

    function a(e, t) {
        return!!~("" + e).indexOf(t)
    }

    function o(e, t) {
        for (var i in e) {
            var r = e[i];
            if (!a(r, "-") && v[r] !== n)return"pfx" == t ? r : !0
        }
        return!1
    }

    function s(e, t, i) {
        for (var a in e) {
            var o = t[e[a]];
            if (o !== n)return i === !1 ? e[a] : r(o, "function") ? o.bind(i || t) : o
        }
        return!1
    }

    function l(e, t, n) {
        var i = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + w.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? o(a, t) : (a = (e + " " + x.join(i + " ") + i).split(" "), s(a, t, n))
    }

    var c, u, h, d = "2.7.1", f = {}, p = !0, g = t.documentElement, m = "modernizr", _ = t.createElement(m), v = _.style, y = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")), b = "Webkit Moz O ms", w = b.split(" "), x = b.toLowerCase().split(" "), S = {}, C = [], T = C.slice, D = function (e, n, i, r) {
        var a, o, s, l, c = t.createElement("div"), u = t.body, h = u || t.createElement("body");
        if (parseInt(i, 10))for (; i--;)s = t.createElement("div"), s.id = r ? r[i] : m + (i + 1), c.appendChild(s);
        return a = ["&#173;", '<style id="s', m, '">', e, "</style>"].join(""), c.id = m, (u ? c : h).innerHTML += a, h.appendChild(c), u || (h.style.background = "", h.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(h)), o = n(c, e), u ? c.parentNode.removeChild(c) : (h.parentNode.removeChild(h), g.style.overflow = l), !!o
    }, k = function () {
        function e(e, a) {
            a = a || t.createElement(i[e] || "div"), e = "on" + e;
            var o = e in a;
            return o || (a.setAttribute || (a = t.createElement("div")), a.setAttribute && a.removeAttribute && (a.setAttribute(e, ""), o = r(a[e], "function"), r(a[e], "undefined") || (a[e] = n), a.removeAttribute(e))), a = null, o
        }

        var i = {select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img"};
        return e
    }(), E = {}.hasOwnProperty;
    h = r(E, "undefined") || r(E.call, "undefined") ? function (e, t) {
        return t in e && r(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return E.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t)throw new TypeError;
        var n = T.call(arguments, 1), i = function () {
            if (this instanceof i) {
                var r = function () {
                };
                r.prototype = t.prototype;
                var a = new r, o = t.apply(a, n.concat(T.call(arguments)));
                return Object(o) === o ? o : a
            }
            return t.apply(e, n.concat(T.call(arguments)))
        };
        return i
    }), S.canvas = function () {
        var e = t.createElement("canvas");
        return!(!e.getContext || !e.getContext("2d"))
    }, S.canvastext = function () {
        return!(!f.canvas || !r(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, S.audio = function () {
        var e = t.createElement("audio"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (i) {
        }
        return n
    };
    for (var A in S)h(S, A) && (u = A.toLowerCase(), f[u] = S[A](), C.push((f[u] ? "" : "no-") + u));
    return f.addTest = function (e, t) {
        if ("object" == typeof e)for (var i in e)h(e, i) && f.addTest(i, e[i]); else {
            if (e = e.toLowerCase(), f[e] !== n)return f;
            t = "function" == typeof t ? t() : t, "undefined" != typeof p && p && (g.className += " " + (t ? "" : "no-") + e), f[e] = t
        }
        return f
    }, i(""), _ = c = null, function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"), i = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
        }

        function i() {
            var e = v.elements;
            return"string" == typeof e ? e.split(" ") : e
        }

        function r(e) {
            var t = _[e[g]];
            return t || (t = {}, m++, e[g] = m, _[m] = t), t
        }

        function a(e, n, i) {
            if (n || (n = t), u)return n.createElement(e);
            i || (i = r(n));
            var a;
            return a = i.cache[e] ? i.cache[e].cloneNode() : p.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e), !a.canHaveChildren || f.test(e) || a.tagUrn ? a : i.frag.appendChild(a)
        }

        function o(e, n) {
            if (e || (e = t), u)return e.createDocumentFragment();
            n = n || r(e);
            for (var a = n.frag.cloneNode(), o = 0, s = i(), l = s.length; l > o; o++)a.createElement(s[o]);
            return a
        }

        function s(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return v.shivMethods ? a(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(v, t.frag)
        }

        function l(e) {
            e || (e = t);
            var i = r(e);
            return!v.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || s(e, i), e
        }

        var c, u, h = "3.7.0", d = e.html5 || {}, f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, g = "_html5shiv", m = 0, _ = {};
        !function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden"in e, u = 1 == e.childNodes.length || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return"undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                c = !0, u = !0
            }
        }();
        var v = {elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: h, shivCSS: d.shivCSS !== !1, supportsUnknownElements: u, shivMethods: d.shivMethods !== !1, type: "default", shivDocument: l, createElement: a, createDocumentFragment: o};
        e.html5 = v, l(t)
    }(this, t), f._version = d, f._prefixes = y, f._domPrefixes = x, f._cssomPrefixes = w, f.hasEvent = k, f.testProp = function (e) {
        return o([e])
    }, f.testAllProps = l, f.testStyles = D, f.prefixed = function (e, t, n) {
        return t ? l(e, t, n) : l(e, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + C.join(" ") : ""), f
}(this, this.document), function (e, t, n) {
    function i(e) {
        return"[object Function]" == m.call(e)
    }

    function r(e) {
        return"string" == typeof e
    }

    function a() {
    }

    function o(e) {
        return!e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function s() {
        var e = _.shift();
        v = 1, e ? e.t ? p(function () {
            ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), s()) : v = 0
    }

    function l(e, n, i, r, a, l, c) {
        function u(t) {
            if (!f && o(h.readyState) && (y.r = f = 1, !v && s(), h.onload = h.onreadystatechange = null, t)) {
                "img" != e && p(function () {
                    w.removeChild(h)
                }, 50);
                for (var i in D[n])D[n].hasOwnProperty(i) && D[n][i].onload()
            }
        }

        var c = c || d.errorTimeout, h = t.createElement(e), f = 0, m = 0, y = {t: i, s: n, e: a, a: l, x: c};
        1 === D[n] && (m = 1, D[n] = []), "object" == e ? h.data = n : (h.src = n, h.type = e), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function () {
            u.call(this, m)
        }, _.splice(r, 0, y), "img" != e && (m || 2 === D[n] ? (w.insertBefore(h, b ? null : g), p(u, c)) : D[n].push(h))
    }

    function c(e, t, n, i, a) {
        return v = 0, t = t || "j", r(e) ? l("c" == t ? S : x, e, t, this.i++, n, i, a) : (_.splice(this.i++, 0, e), 1 == _.length && s()), this
    }

    function u() {
        var e = d;
        return e.loader = {load: c, i: 0}, e
    }

    var h, d, f = t.documentElement, p = e.setTimeout, g = t.getElementsByTagName("script")[0], m = {}.toString, _ = [], v = 0, y = "MozAppearance"in f.style, b = y && !!t.createRange().compareNode, w = b ? f : g.parentNode, f = e.opera && "[object Opera]" == m.call(e.opera), f = !!t.attachEvent && !f, x = y ? "object" : f ? "script" : "img", S = f ? "script" : x, C = Array.isArray || function (e) {
        return"[object Array]" == m.call(e)
    }, T = [], D = {}, k = {timeout: function (e, t) {
        return t.length && (e.timeout = t[0]), e
    }};
    d = function (e) {
        function t(e) {
            var t, n, i, e = e.split("!"), r = T.length, a = e.pop(), o = e.length, a = {url: a, origUrl: a, prefixes: e};
            for (n = 0; o > n; n++)i = e[n].split("="), (t = k[i.shift()]) && (a = t(a, i));
            for (n = 0; r > n; n++)a = T[n](a);
            return a
        }

        function o(e, r, a, o, s) {
            var l = t(e), c = l.autoCallback;
            l.url.split(".").pop().split("?").shift(), l.bypass || (r && (r = i(r) ? r : r[e] || r[o] || r[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, r, a, o, s) : (D[l.url] ? l.noexec = !0 : D[l.url] = 1, a.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (i(r) || i(c)) && a.load(function () {
                u(), r && r(l.origUrl, s, o), c && c(l.origUrl, s, o), D[l.url] = 2
            })))
        }

        function s(e, t) {
            function n(e, n) {
                if (e) {
                    if (r(e))n || (h = function () {
                        var e = [].slice.call(arguments);
                        d.apply(this, e), f()
                    }), o(e, h, t, 0, c); else if (Object(e) === e)for (l in s = function () {
                        var t, n = 0;
                        for (t in e)e.hasOwnProperty(t) && n++;
                        return n
                    }(), e)e.hasOwnProperty(l) && (!n && !--s && (i(h) ? h = function () {
                        var e = [].slice.call(arguments);
                        d.apply(this, e), f()
                    } : h[l] = function (e) {
                        return function () {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t), f()
                        }
                    }(d[l])), o(e[l], h, t, l, c))
                } else!n && f()
            }

            var s, l, c = !!e.test, u = e.load || e.both, h = e.callback || a, d = h, f = e.complete || a;
            n(c ? e.yep : e.nope, !!u), u && n(u)
        }

        var l, c, h = this.yepnope.loader;
        if (r(e))o(e, 0, h, 0); else if (C(e))for (l = 0; l < e.length; l++)c = e[l], r(c) ? o(c, 0, h, 0) : C(c) ? d(c) : Object(c) === c && s(c, h); else Object(e) === e && s(e, h)
    }, d.addPrefix = function (e, t) {
        k[e] = t
    }, d.addFilter = function (e) {
        T.push(e)
    }, d.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", h = function () {
        t.removeEventListener("DOMContentLoaded", h, 0), t.readyState = "complete"
    }, 0)), e.yepnope = u(), e.yepnope.executeStack = s, e.yepnope.injectJs = function (e, n, i, r, l, c) {
        var u, h, f = t.createElement("script"), r = r || d.errorTimeout;
        f.src = e;
        for (h in i)f.setAttribute(h, i[h]);
        n = c ? s : n || a, f.onreadystatechange = f.onload = function () {
            !u && o(f.readyState) && (u = 1, n(), f.onload = f.onreadystatechange = null)
        }, p(function () {
            u || (u = 1, n(1))
        }, r), l ? f.onload() : g.parentNode.insertBefore(f, g)
    }, e.yepnope.injectCss = function (e, n, i, r, o, l) {
        var c, r = t.createElement("link"), n = l ? s : n || a;
        r.href = e, r.rel = "stylesheet", r.type = "text/css";
        for (c in i)r.setAttribute(c, i[c]);
        o || (g.parentNode.insertBefore(r, g), p(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, Modernizr.addTest("audiodata", !!window.Audio), Modernizr.addTest("webaudio", !(!window.webkitAudioContext && !window.AudioContext));