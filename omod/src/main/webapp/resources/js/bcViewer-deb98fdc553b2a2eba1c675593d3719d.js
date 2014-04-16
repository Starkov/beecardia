/*! jQuery UI - v1.10.3 - 2013-06-28
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.position.js, jquery.ui.tooltip.js
 * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */
function SignalProcessing() {
    this._outParams, this._inParams, this._inSignal, this._processors = {}, this._preProcessors = ["FlipSignal", "HighPassFilter", "SmoothFilter", "BaselineFilter"], this._postProcessors = ["AdjustYResolution", "AdjustChannelOffset"], this._defaultSamplingRate = 400;
    for (var e in SignalProcessing.processors)"BaseProcessor" !== e && (this._processors[e] = new SignalProcessing.processors[e])
}
function $$(e, t) {
    return(t || "undefined" == typeof $$[e]) && ($$[e] = $(e)), $$[e]
}
!function (e, t) {
    function n(t, n) {
        var a, s, o, r = t.nodeName.toLowerCase();
        return"area" === r ? (a = t.parentNode, s = a.name, t.href && s && "map" === a.nodeName.toLowerCase() ? (o = e("img[usemap=#" + s + "]")[0], !!o && i(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || n : n) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return"hidden" === e.css(this, "visibility")
        }).length
    }

    var a = 0, s = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {version: "1.10.3", keyCode: {BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38}}), e.fn.extend({focus: function (t) {
        return function (n, i) {
            return"number" == typeof n ? this.each(function () {
                var t = this;
                setTimeout(function () {
                    e(t).focus(), i && i.call(t)
                }, n)
            }) : t.apply(this, arguments)
        }
    }(e.fn.focus), scrollParent: function () {
        var t;
        return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
            return/(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
        }).eq(0) : this.parents().filter(function () {
            return/(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
        }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
    }, zIndex: function (n) {
        if (n !== t)return this.css("zIndex", n);
        if (this.length)for (var i, a, s = e(this[0]); s.length && s[0] !== document;) {
            if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (a = parseInt(s.css("zIndex"), 10), !isNaN(a) && 0 !== a))return a;
            s = s.parent()
        }
        return 0
    }, uniqueId: function () {
        return this.each(function () {
            this.id || (this.id = "ui-id-" + ++a)
        })
    }, removeUniqueId: function () {
        return this.each(function () {
            s.test(this.id) && e(this).removeAttr("id")
        })
    }}), e.extend(e.expr[":"], {data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
        return function (n) {
            return!!e.data(n, t)
        }
    }) : function (t, n, i) {
        return!!e.data(t, i[3])
    }, focusable: function (t) {
        return n(t, !isNaN(e.attr(t, "tabindex")))
    }, tabbable: function (t) {
        var i = e.attr(t, "tabindex"), a = isNaN(i);
        return(a || i >= 0) && n(t, !a)
    }}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, i) {
        function a(t, n, i, a) {
            return e.each(s, function () {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }

        var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], o = i.toLowerCase(), r = {innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight};
        e.fn["inner" + i] = function (n) {
            return n === t ? r["inner" + i].call(this) : this.each(function () {
                e(this).css(o, a(this, n) + "px")
            })
        }, e.fn["outer" + i] = function (t, n) {
            return"number" != typeof t ? r["outer" + i].call(this, t) : this.each(function () {
                e(this).css(o, a(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart"in document.createElement("div"), e.fn.extend({disableSelection: function () {
        return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
            e.preventDefault()
        })
    }, enableSelection: function () {
        return this.unbind(".ui-disableSelection")
    }}), e.extend(e.ui, {plugin: {add: function (t, n, i) {
        var a, s = e.ui[t].prototype;
        for (a in i)s.plugins[a] = s.plugins[a] || [], s.plugins[a].push([n, i[a]])
    }, call: function (e, t, n) {
        var i, a = e.plugins[t];
        if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)for (i = 0; a.length > i; i++)e.options[a[i][0]] && a[i][1].apply(e.element, n)
    }}, hasScroll: function (t, n) {
        if ("hidden" === e(t).css("overflow"))return!1;
        var i = n && "left" === n ? "scrollLeft" : "scrollTop", a = !1;
        return t[i] > 0 ? !0 : (t[i] = 1, a = t[i] > 0, t[i] = 0, a)
    }})
}(jQuery), function (e, t) {
    var n = 0, i = Array.prototype.slice, a = e.cleanData;
    e.cleanData = function (t) {
        for (var n, i = 0; null != (n = t[i]); i++)try {
            e(n).triggerHandler("remove")
        } catch (s) {
        }
        a(t)
    }, e.widget = function (n, i, a) {
        var s, o, r, l, c = {}, u = n.split(".")[0];
        n = n.split(".")[1], s = u + "-" + n, a || (a = i, i = e.Widget), e.expr[":"][s.toLowerCase()] = function (t) {
            return!!e.data(t, s)
        }, e[u] = e[u] || {}, o = e[u][n], r = e[u][n] = function (e, n) {
            return this._createWidget ? (arguments.length && this._createWidget(e, n), t) : new r(e, n)
        }, e.extend(r, o, {version: a.version, _proto: e.extend({}, a), _childConstructors: []}), l = new i, l.options = e.widget.extend({}, l.options), e.each(a, function (n, a) {
            return e.isFunction(a) ? (c[n] = function () {
                var e = function () {
                    return i.prototype[n].apply(this, arguments)
                }, t = function (e) {
                    return i.prototype[n].apply(this, e)
                };
                return function () {
                    var n, i = this._super, s = this._superApply;
                    return this._super = e, this._superApply = t, n = a.apply(this, arguments), this._super = i, this._superApply = s, n
                }
            }(), t) : (c[n] = a, t)
        }), r.prototype = e.widget.extend(l, {widgetEventPrefix: o ? l.widgetEventPrefix : n}, c, {constructor: r, namespace: u, widgetName: n, widgetFullName: s}), o ? (e.each(o._childConstructors, function (t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, r, n._proto)
        }), delete o._childConstructors) : i._childConstructors.push(r), e.widget.bridge(n, r)
    }, e.widget.extend = function (n) {
        for (var a, s, o = i.call(arguments, 1), r = 0, l = o.length; l > r; r++)for (a in o[r])s = o[r][a], o[r].hasOwnProperty(a) && s !== t && (n[a] = e.isPlainObject(s) ? e.isPlainObject(n[a]) ? e.widget.extend({}, n[a], s) : e.widget.extend({}, s) : s);
        return n
    }, e.widget.bridge = function (n, a) {
        var s = a.prototype.widgetFullName || n;
        e.fn[n] = function (o) {
            var r = "string" == typeof o, l = i.call(arguments, 1), c = this;
            return o = !r && l.length ? e.widget.extend.apply(null, [o].concat(l)) : o, r ? this.each(function () {
                var i, a = e.data(this, s);
                return a ? e.isFunction(a[o]) && "_" !== o.charAt(0) ? (i = a[o].apply(a, l), i !== a && i !== t ? (c = i && i.jquery ? c.pushStack(i.get()) : i, !1) : t) : e.error("no such method '" + o + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'")
            }) : this.each(function () {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new a(o, this))
            }), c
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {disabled: !1, create: null}, _createWidget: function (t, i) {
        i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {remove: function (e) {
            e.target === i && this.destroy()
        }}), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function () {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    }, _destroy: e.noop, widget: function () {
        return this.element
    }, option: function (n, i) {
        var a, s, o, r = n;
        if (0 === arguments.length)return e.widget.extend({}, this.options);
        if ("string" == typeof n)if (r = {}, a = n.split("."), n = a.shift(), a.length) {
            for (s = r[n] = e.widget.extend({}, this.options[n]), o = 0; a.length - 1 > o; o++)s[a[o]] = s[a[o]] || {}, s = s[a[o]];
            if (n = a.pop(), i === t)return s[n] === t ? null : s[n];
            s[n] = i
        } else {
            if (i === t)return this.options[n] === t ? null : this.options[n];
            r[n] = i
        }
        return this._setOptions(r), this
    }, _setOptions: function (e) {
        var t;
        for (t in e)this._setOption(t, e[t]);
        return this
    }, _setOption: function (e, t) {
        return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
    }, enable: function () {
        return this._setOption("disabled", !1)
    }, disable: function () {
        return this._setOption("disabled", !0)
    }, _on: function (n, i, a) {
        var s, o = this;
        "boolean" != typeof n && (a = i, i = n, n = !1), a ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (a = i, i = this.element, s = this.widget()), e.each(a, function (a, r) {
            function l() {
                return n || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : t
            }

            "string" != typeof r && (l.guid = r.guid = r.guid || l.guid || e.guid++);
            var c = a.match(/^(\w+)\s*(.*)$/), u = c[1] + o.eventNamespace, h = c[2];
            h ? s.delegate(h, u, l) : i.bind(u, l)
        })
    }, _off: function (e, t) {
        t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
    }, _delay: function (e, t) {
        function n() {
            return("string" == typeof e ? i[e] : e).apply(i, arguments)
        }

        var i = this;
        return setTimeout(n, t || 0)
    }, _hoverable: function (t) {
        this.hoverable = this.hoverable.add(t), this._on(t, {mouseenter: function (t) {
            e(t.currentTarget).addClass("ui-state-hover")
        }, mouseleave: function (t) {
            e(t.currentTarget).removeClass("ui-state-hover")
        }})
    }, _focusable: function (t) {
        this.focusable = this.focusable.add(t), this._on(t, {focusin: function (t) {
            e(t.currentTarget).addClass("ui-state-focus")
        }, focusout: function (t) {
            e(t.currentTarget).removeClass("ui-state-focus")
        }})
    }, _trigger: function (t, n, i) {
        var a, s, o = this.options[t];
        if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent)for (a in s)a in n || (n[a] = s[a]);
        return this.element.trigger(n, i), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
    }}, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, n) {
        e.Widget.prototype["_" + t] = function (i, a, s) {
            "string" == typeof a && (a = {effect: a});
            var o, r = a ? a === !0 || "number" == typeof a ? n : a.effect || n : t;
            a = a || {}, "number" == typeof a && (a = {duration: a}), o = !e.isEmptyObject(a), a.complete = s, a.delay && i.delay(a.delay), o && e.effects && e.effects.effect[r] ? i[t](a) : r !== t && i[r] ? i[r](a.duration, a.easing, s) : i.queue(function (n) {
                e(this)[t](), s && s.call(i[0]), n()
            })
        }
    })
}(jQuery), function (e, t) {
    function n(e, t, n) {
        return[parseFloat(e[0]) * (f.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (f.test(e[1]) ? n / 100 : 1)]
    }

    function i(t, n) {
        return parseInt(e.css(t, n), 10) || 0
    }

    function a(t) {
        var n = t[0];
        return 9 === n.nodeType ? {width: t.width(), height: t.height(), offset: {top: 0, left: 0}} : e.isWindow(n) ? {width: t.width(), height: t.height(), offset: {top: t.scrollTop(), left: t.scrollLeft()}} : n.preventDefault ? {width: 0, height: 0, offset: {top: n.pageY, left: n.pageX}} : {width: t.outerWidth(), height: t.outerHeight(), offset: t.offset()}
    }

    e.ui = e.ui || {};
    var s, o = Math.max, r = Math.abs, l = Math.round, c = /left|center|right/, u = /top|center|bottom/, h = /[\+\-]\d+(\.[\d]+)?%?/, d = /^\w+/, f = /%$/, p = e.fn.position;
    e.position = {scrollbarWidth: function () {
        if (s !== t)return s;
        var n, i, a = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = a.children()[0];
        return e("body").append(a), n = o.offsetWidth, a.css("overflow", "scroll"), i = o.offsetWidth, n === i && (i = a[0].clientWidth), a.remove(), s = n - i
    }, getScrollInfo: function (t) {
        var n = t.isWindow ? "" : t.element.css("overflow-x"), i = t.isWindow ? "" : t.element.css("overflow-y"), a = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth, s = "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight;
        return{width: s ? e.position.scrollbarWidth() : 0, height: a ? e.position.scrollbarWidth() : 0}
    }, getWithinInfo: function (t) {
        var n = e(t || window), i = e.isWindow(n[0]);
        return{element: n, isWindow: i, offset: n.offset() || {left: 0, top: 0}, scrollLeft: n.scrollLeft(), scrollTop: n.scrollTop(), width: i ? n.width() : n.outerWidth(), height: i ? n.height() : n.outerHeight()}
    }}, e.fn.position = function (t) {
        if (!t || !t.of)return p.apply(this, arguments);
        t = e.extend({}, t);
        var s, f, g, _, m, v, b = e(t.of), y = e.position.getWithinInfo(t.within), w = e.position.getScrollInfo(y), C = (t.collision || "flip").split(" "), S = {};
        return v = a(b), b[0].preventDefault && (t.at = "left top"), f = v.width, g = v.height, _ = v.offset, m = e.extend({}, _), e.each(["my", "at"], function () {
            var e, n, i = (t[this] || "").split(" ");
            1 === i.length && (i = c.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = c.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = h.exec(i[0]), n = h.exec(i[1]), S[this] = [e ? e[0] : 0, n ? n[0] : 0], t[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
        }), 1 === C.length && (C[1] = C[0]), "right" === t.at[0] ? m.left += f : "center" === t.at[0] && (m.left += f / 2), "bottom" === t.at[1] ? m.top += g : "center" === t.at[1] && (m.top += g / 2), s = n(S.at, f, g), m.left += s[0], m.top += s[1], this.each(function () {
            var a, c, u = e(this), h = u.outerWidth(), d = u.outerHeight(), p = i(this, "marginLeft"), v = i(this, "marginTop"), x = h + p + i(this, "marginRight") + w.width, T = d + v + i(this, "marginBottom") + w.height, D = e.extend({}, m), E = n(S.my, u.outerWidth(), u.outerHeight());
            "right" === t.my[0] ? D.left -= h : "center" === t.my[0] && (D.left -= h / 2), "bottom" === t.my[1] ? D.top -= d : "center" === t.my[1] && (D.top -= d / 2), D.left += E[0], D.top += E[1], e.support.offsetFractions || (D.left = l(D.left), D.top = l(D.top)), a = {marginLeft: p, marginTop: v}, e.each(["left", "top"], function (n, i) {
                e.ui.position[C[n]] && e.ui.position[C[n]][i](D, {targetWidth: f, targetHeight: g, elemWidth: h, elemHeight: d, collisionPosition: a, collisionWidth: x, collisionHeight: T, offset: [s[0] + E[0], s[1] + E[1]], my: t.my, at: t.at, within: y, elem: u})
            }), t.using && (c = function (e) {
                var n = _.left - D.left, i = n + f - h, a = _.top - D.top, s = a + g - d, l = {target: {element: b, left: _.left, top: _.top, width: f, height: g}, element: {element: u, left: D.left, top: D.top, width: h, height: d}, horizontal: 0 > i ? "left" : n > 0 ? "right" : "center", vertical: 0 > s ? "top" : a > 0 ? "bottom" : "middle"};
                h > f && f > r(n + i) && (l.horizontal = "center"), d > g && g > r(a + s) && (l.vertical = "middle"), l.important = o(r(n), r(i)) > o(r(a), r(s)) ? "horizontal" : "vertical", t.using.call(this, e, l)
            }), u.offset(e.extend(D, {using: c}))
        })
    }, e.ui.position = {fit: {left: function (e, t) {
        var n, i = t.within, a = i.isWindow ? i.scrollLeft : i.offset.left, s = i.width, r = e.left - t.collisionPosition.marginLeft, l = a - r, c = r + t.collisionWidth - s - a;
        t.collisionWidth > s ? l > 0 && 0 >= c ? (n = e.left + l + t.collisionWidth - s - a, e.left += l - n) : e.left = c > 0 && 0 >= l ? a : l > c ? a + s - t.collisionWidth : a : l > 0 ? e.left += l : c > 0 ? e.left -= c : e.left = o(e.left - r, e.left)
    }, top: function (e, t) {
        var n, i = t.within, a = i.isWindow ? i.scrollTop : i.offset.top, s = t.within.height, r = e.top - t.collisionPosition.marginTop, l = a - r, c = r + t.collisionHeight - s - a;
        t.collisionHeight > s ? l > 0 && 0 >= c ? (n = e.top + l + t.collisionHeight - s - a, e.top += l - n) : e.top = c > 0 && 0 >= l ? a : l > c ? a + s - t.collisionHeight : a : l > 0 ? e.top += l : c > 0 ? e.top -= c : e.top = o(e.top - r, e.top)
    }}, flip: {left: function (e, t) {
        var n, i, a = t.within, s = a.offset.left + a.scrollLeft, o = a.width, l = a.isWindow ? a.scrollLeft : a.offset.left, c = e.left - t.collisionPosition.marginLeft, u = c - l, h = c + t.collisionWidth - o - l, d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, p = -2 * t.offset[0];
        0 > u ? (n = e.left + d + f + p + t.collisionWidth - o - s, (0 > n || r(u) > n) && (e.left += d + f + p)) : h > 0 && (i = e.left - t.collisionPosition.marginLeft + d + f + p - l, (i > 0 || h > r(i)) && (e.left += d + f + p))
    }, top: function (e, t) {
        var n, i, a = t.within, s = a.offset.top + a.scrollTop, o = a.height, l = a.isWindow ? a.scrollTop : a.offset.top, c = e.top - t.collisionPosition.marginTop, u = c - l, h = c + t.collisionHeight - o - l, d = "top" === t.my[1], f = d ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, p = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, g = -2 * t.offset[1];
        0 > u ? (i = e.top + f + p + g + t.collisionHeight - o - s, e.top + f + p + g > u && (0 > i || r(u) > i) && (e.top += f + p + g)) : h > 0 && (n = e.top - t.collisionPosition.marginTop + f + p + g - l, e.top + f + p + g > h && (n > 0 || h > r(n)) && (e.top += f + p + g))
    }}, flipfit: {left: function () {
        e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
    }, top: function () {
        e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
    }}}, function () {
        var t, n, i, a, s, o = document.getElementsByTagName("body")[0], r = document.createElement("div");
        t = document.createElement(o ? "div" : "body"), i = {visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none"}, o && e.extend(i, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (s in i)t.style[s] = i[s];
        t.appendChild(r), n = o || document.documentElement, n.insertBefore(t, n.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", a = e(r).offset().left, e.support.offsetFractions = a > 10 && 11 > a, t.innerHTML = "", n.removeChild(t)
    }()
}(jQuery), function (e) {
    function t(t, n) {
        var i = (t.attr("aria-describedby") || "").split(/\s+/);
        i.push(n), t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(i.join(" ")))
    }

    function n(t) {
        var n = t.data("ui-tooltip-id"), i = (t.attr("aria-describedby") || "").split(/\s+/), a = e.inArray(n, i);
        -1 !== a && i.splice(a, 1), t.removeData("ui-tooltip-id"), i = e.trim(i.join(" ")), i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
    }

    var i = 0;
    e.widget("ui.tooltip", {version: "1.10.3", options: {content: function () {
        var t = e(this).attr("title") || "";
        return e("<a>").text(t).html()
    }, hide: !0, items: "[title]:not([disabled])", position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"}, show: !0, tooltipClass: null, track: !1, close: null, open: null}, _create: function () {
        this._on({mouseover: "open", focusin: "open"}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
    }, _setOption: function (t, n) {
        var i = this;
        return"disabled" === t ? (this[n ? "_disable" : "_enable"](), this.options[t] = n, void 0) : (this._super(t, n), "content" === t && e.each(this.tooltips, function (e, t) {
            i._updateContent(t)
        }), void 0)
    }, _disable: function () {
        var t = this;
        e.each(this.tooltips, function (n, i) {
            var a = e.Event("blur");
            a.target = a.currentTarget = i[0], t.close(a, !0)
        }), this.element.find(this.options.items).addBack().each(function () {
            var t = e(this);
            t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
        })
    }, _enable: function () {
        this.element.find(this.options.items).addBack().each(function () {
            var t = e(this);
            t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
        })
    }, open: function (t) {
        var n = this, i = e(t ? t.target : this.element).closest(this.options.items);
        i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && "mouseover" === t.type && i.parents().each(function () {
            var t, i = e(this);
            i.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, n.close(t, !0)), i.attr("title") && (i.uniqueId(), n.parents[this.id] = {element: this, title: i.attr("title")}, i.attr("title", ""))
        }), this._updateContent(i, t))
    }, _updateContent: function (e, t) {
        var n, i = this.options.content, a = this, s = t ? t.type : null;
        return"string" == typeof i ? this._open(t, e, i) : (n = i.call(e[0], function (n) {
            e.data("ui-tooltip-open") && a._delay(function () {
                t && (t.type = s), this._open(t, e, n)
            })
        }), n && this._open(t, e, n), void 0)
    }, _open: function (n, i, a) {
        function s(e) {
            c.of = e, o.is(":hidden") || o.position(c)
        }

        var o, r, l, c = e.extend({}, this.options.position);
        if (a) {
            if (o = this._find(i), o.length)return o.find(".ui-tooltip-content").html(a), void 0;
            i.is("[title]") && (n && "mouseover" === n.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), t(i, o.attr("id")), o.find(".ui-tooltip-content").html(a), this.options.track && n && /^mouse/.test(n.type) ? (this._on(this.document, {mousemove: s}), s(n)) : o.position(e.extend({of: i}, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (l = this.delayedShow = setInterval(function () {
                o.is(":visible") && (s(c.of), clearInterval(l))
            }, e.fx.interval)), this._trigger("open", n, {tooltip: o}), r = {keyup: function (t) {
                if (t.keyCode === e.ui.keyCode.ESCAPE) {
                    var n = e.Event(t);
                    n.currentTarget = i[0], this.close(n, !0)
                }
            }, remove: function () {
                this._removeTooltip(o)
            }}, n && "mouseover" !== n.type || (r.mouseleave = "close"), n && "focusin" !== n.type || (r.focusout = "close"), this._on(!0, i, r)
        }
    }, close: function (t) {
        var i = this, a = e(t ? t.currentTarget : this.element), s = this._find(a);
        this.closing || (clearInterval(this.delayedShow), a.data("ui-tooltip-title") && a.attr("title", a.data("ui-tooltip-title")), n(a), s.stop(!0), this._hide(s, this.options.hide, function () {
            i._removeTooltip(e(this))
        }), a.removeData("ui-tooltip-open"), this._off(a, "mouseleave focusout keyup"), a[0] !== this.element[0] && this._off(a, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function (t, n) {
            e(n.element).attr("title", n.title), delete i.parents[t]
        }), this.closing = !0, this._trigger("close", t, {tooltip: s}), this.closing = !1)
    }, _tooltip: function (t) {
        var n = "ui-tooltip-" + i++, a = e("<div>").attr({id: n, role: "tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
        return e("<div>").addClass("ui-tooltip-content").appendTo(a), a.appendTo(this.document[0].body), this.tooltips[n] = t, a
    }, _find: function (t) {
        var n = t.data("ui-tooltip-id");
        return n ? e("#" + n) : e()
    }, _removeTooltip: function (e) {
        e.remove(), delete this.tooltips[e.attr("id")]
    }, _destroy: function () {
        var t = this;
        e.each(this.tooltips, function (n, i) {
            var a = e.Event("blur");
            a.target = a.currentTarget = i[0], t.close(a, !0), e("#" + n).remove(), i.data("ui-tooltip-title") && (i.attr("title", i.data("ui-tooltip-title")), i.removeData("ui-tooltip-title"))
        })
    }})
}(jQuery), bcViewer = function (e, t) {
    $(document).ready($.proxy(this._init, this, e, t))
}, bcViewer.prototype._init = function (e, t) {
    this._recordTypes = {ARNIKA: 0, PHYSIOBANK: 1, STANDALONE: 2}, this._viewers = {}, this._globals = {}, this._globals._bcViewer = this, this._globals._config = t, this._globals._utils = new bcViewer.Utils, this._recordType = e.recordType || this._recordTypes.ARNIKA, this._globals._dataFetcher = this._recordType === this._recordTypes.STANDALONE ? new bcViewer.StandaloneDataFetcher(this._globals, this._recordType) : new bcViewer.WebDataFetcher(this._globals, this._recordType), this._globals.keyCodes = {shift: 16}, $.extend(this, this._globals), this.isRealtimeMode = !e.recordHash && !e.recordURL, this.view = new bcViewer.View(this._globals), this._recordHash, this._recordURL, this._metadata, this._state = {}, this._allowedHashParams = {timePosition: {inState: !0, castFunc: parseInt}, zoomX: {inState: !0, castFunc: parseInt}, zoomY: {inState: !0, castFunc: parseInt}, baselineCorrection: {inState: !0, castFunc: function (e) {
        return"true" === e
    }}, smooth: {inState: !0, castFunc: function (e) {
        return"true" === e
    }}, measurement: {inState: !1, castFunc: function (e) {
        return $.map(e.split(","), function (e) {
            return parseInt(e)
        })
    }}}, this._hashParams = {}, this._initialTimePosition, this._loadingViewers, this.isDesktop = this._utils.getScreenType() === this._utils.SCREEN_TYPES.DESKTOP, this._initViewers(e.recordHash, e.recordURL)
}, bcViewer.prototype._initViewers = function (e, t) {
    this._viewers = {main: new bcViewer.ECGViewer(this._globals, "main", this._config.ecgViewer), context: new bcViewer.ContextViewer(this._globals, "context", this._config.contextViewer), timeline: new bcViewer.TimelineViewer(this._globals, "timeline", this._config.timelineViewer), hr: new bcViewer.HRViewer(this._globals, "hr", this._config.HRViewer), events: new bcViewer.EventsViewer(this._globals, "events", this._config.eventsViewer)}, this._loadingViewers = this._utils.getObjectKeys(this._viewers);
    var n = this.view.getDimensions(), i = {timePosition: 0, zoomX: this._config.ecgViewer.DEFAULT_ZOOM.x, zoomY: this._config.ecgViewer.DEFAULT_ZOOM.y, width: n.width, height: n.height, baselineCorrection: this._config.ecgViewer.DEFAULT_FILTERS.BASELINE, smooth: this._config.ecgViewer.DEFAULT_FILTERS.SMOOTH};
    this._getHashParams(), this._updateDefaultStateFromHashParams(i), this._allViewerDo("disableViewer"), this._initialTimePosition = i.timePosition, delete i.timePosition, this.onStateChange(i, !1, !0), !this.isDesktop && this._allViewerDo("adjustToScreenType"), this.isRealtimeMode ? this._allViewerDo("initRealtimeMode") : (this._recordHash = e, this._recordURL = t, this.loadRecord())
}, bcViewer.prototype.loadRecord = function () {
    var e = this._recordTypes;
    switch (this._recordType) {
        case e.PHYSIOBANK:
            this._onSaveRecordToServerComplete();
            break;
        case e.ARNIKA:
            this._startSaveRecordToServer();
            break;
        default:
            this._dataFetcher.getRecordData(this._recordURL, $.proxy(this._onSaveRecordToServerComplete, this))
    }
}, bcViewer.prototype.getRecordHash = function () {
    return this._recordHash
}, bcViewer.prototype._startSaveRecordToServer = function () {
    this._utils.callAPI({url: "/api/load_study", data: {record_hash: this._recordHash}, cache: !1, type: "GET", context: this, success: function () {
        this._pollSaveRecordToServerProgress()
    }})
}, bcViewer.prototype._pollSaveRecordToServerProgress = function () {
    this._utils.callAPI({url: "/api/get_study_progress", data: {record_hash: this._recordHash}, cache: !1, type: "GET", context: this, success: function (e) {
        var t = e.progress;
        this.view.onSaveRecordToServerProgress(t), t >= 100 && parseInt(e.decompressed, 10) ? this._onSaveRecordToServerComplete() : setTimeout($.proxy(this._pollSaveRecordToServerProgress, this), 1e3)
    }})
}, bcViewer.prototype._onSaveRecordToServerComplete = function () {
    this._dataFetcher.getMetadata($.proxy(this._onGotMetadata, this))
}, bcViewer.prototype._onGotMetadata = function (e) {
    this._metadata = e, this._allViewerDo("onGotMetadata", e), $(document).trigger($.Event("GotMetadata", e)), this.onStateChange({timePosition: this._initialTimePosition}, !1, !1)
}, bcViewer.prototype._getHashParams = function () {
    for (var e = window.location.hash.substring(1).split("&"), t = 0; t < e.length; t++) {
        var n = e[t].split("=");
        "undefined" != typeof this._allowedHashParams[n[0]] && (this._hashParams[n[0]] = n[1])
    }
}, bcViewer.prototype._updateDefaultStateFromHashParams = function (e) {
    var t = this._allowedHashParams;
    $.each(this._hashParams, $.proxy(function (n, i) {
        "undefined" != typeof t[n] && t[n].inState && (e[n] = "undefined" != typeof t[n] ? t[n].castFunc(i) : i)
    }, this))
}, bcViewer.prototype.updateHash = function (e) {
    $.each(e, $.proxy(function (e, t) {
        "undefined" != typeof this._allowedHashParams[e] && (this._hashParams[e] = t)
    }, this)), this._updateUrlHash()
}, bcViewer.prototype.removeParamsFromHash = function (e) {
    for (var t = 0; t < e.length; t++)delete this._hashParams[e[t]];
    this._updateUrlHash()
}, bcViewer.prototype._updateUrlHash = function () {
    var e = [];
    $.each(this._hashParams, $.proxy(function (t, n) {
        e.push(t + "=" + n)
    }, this)), window.location.replace(("" + window.location).split("#")[0] + "#" + e.join("&"))
}, bcViewer.prototype.onStateChange = function (e, t, n) {
    t = "undefined" == typeof t ? !0 : t, n = "undefined" == typeof n ? !1 : n, $.extend(this._state, e), this._dataFetcher.disableECGDataRequests(), this._allViewerDo("onStateChange", e, n), this._dataFetcher.enableECGDataRequests(), t && this.updateHash(this._state)
}, bcViewer.prototype._allViewerDo = function (e) {
    var t = arguments;
    $.each(this._viewers, function (n, i) {
        var a = Array.prototype.slice.call(t);
        a.shift(), i[e] && i[e].apply(i, a)
    })
}, bcViewer.prototype.onStateChangeRequest = function (e) {
    "undefined" != typeof this._viewers && this.onStateChange(e)
}, bcViewer.prototype.getViewerState = function (e) {
    return"undefined" == typeof this._viewers[e] ? {} : this._viewers[e].getState()
}, bcViewer.prototype.onDragMove = function (e) {
    this._allViewerDo("onDragMove", e)
}, bcViewer.prototype.onDataFetchStart = function () {
    this._allViewerDo("onDataFetchStart")
}, bcViewer.prototype.onDataFetchEnd = function () {
    this._allViewerDo("onDataFetchEnd")
}, bcViewer.prototype.getMainWidth = function () {
    return this._viewers.main ? this._viewers.main._state.width : 0
}, bcViewer.prototype.onViewerReady = function (e) {
    var t = this._loadingViewers.indexOf(e);
    this._loadingViewers.splice(t, 1), 0 === this._loadingViewers.length && (this._allViewerDo("onAllViewersReady"), this._passParamsToViewers(), $(document).trigger($.Event("ViewerReady")))
}, bcViewer.prototype._passParamsToViewers = function () {
    var e = {}, t = this._allowedHashParams;
    $.each(this._hashParams, $.proxy(function (n, i) {
        "undefined" == typeof t[n] || t[n].inState || (e[n] = "undefined" != typeof t[n] ? t[n].castFunc(i) : i)
    }, this));
    var n = !1;
    "undefined" != typeof e.measurement && 4 === e.measurement.length && (e.measurement = $.grep(e.measurement, this._utils.isNumber), 4 === e.measurement.length && (n = !0)), n && this._allViewerDo("onGotMeasurementParams", {start: {x: e.measurement[0], y: e.measurement[1]}, end: {x: e.measurement[2], y: e.measurement[3]}})
}, bcViewer.prototype.changeBaselineCorrectionState = function (e) {
    this.onStateChangeRequest({baselineCorrection: e})
}, bcViewer.prototype.changeSmoothState = function (e) {
    this.onStateChangeRequest({smooth: e})
}, function () {
    var e = !1, t = /xyz/.test(function () {
    }) ? /\b_super\b/ : /.*/, n = function () {
    };
    n.extend = function (n) {
        function i() {
            !e && this.construct && this.construct.apply(this, arguments)
        }

        var a = this.prototype;
        e = !0;
        var s = new this;
        e = !1;
        for (var o in n)s[o] = "function" == typeof n[o] && "function" == typeof a[o] && t.test(n[o]) ? function (e, t) {
            return function () {
                var n = this._super;
                this._super = a[e];
                var i = t.apply(this, arguments);
                return this._super = n, i
            }
        }(o, n[o]) : n[o];
        return i.prototype = s, i.prototype.constructor = i, i.extend = arguments.callee, i
    }, bcViewer.Class = n
}(), SignalProcessing.prototype.setInputSignal = function (e, t) {
    if (this._inParams = {numberOfChannels: t.numberOfChannels, samplingRate: t.samplingRate || this._defaultSamplingRate, numberOfSamples: t.numberOfSamples, ry: t.ry}, this._inParams.rx = 1e3 / this._inParams.samplingRate, 0 === this._inParams.ry)throw"ry cann't be set to zero";
    if (0 === e[0].length)throw"Input signal must have at least one channel";
    this._inSignal = e
}, SignalProcessing.prototype.getOutputSignal = function (e) {
    var t = this._inSignal.map(function (e) {
        return e.slice()
    });
    if (this._outParams = $.extend({}, !0, e), 0 === this._outParams.rx)throw"rx cann't be set to zero";
    if (e.requestedChannels)this._outParams.requestedChannels = e.requestedChannels; else {
        this._outParams.requestedChannels = [];
        for (var n = 0; n < t[0].length; n++)this._outParams.requestedChannels.push(n)
    }
    this._outParams.samplingRate = 1e3 / this._outParams.rx;
    var i = this._preProcessors, a = this._postProcessors, s = this._initProcessorsPipeline(i, t);
    this._initProcessorsPipeline(["Resampling"], t);
    for (var o = this._initProcessorsPipeline(a, t), i = this._removeDisabledProcessors(i), a = this._removeDisabledProcessors(a), r = this._getPostProcessFunc(), l = this._processors.Resampling, c = Math.round(this._outParams.startTime / this._inParams.rx), u = 0, h = []; h.length < this._outParams.cx && (u++, !(c >= t.length));) {
        var d = t[c];
        c++, d = this._processVector(i, d), s > u || (d = l.processVector(d), d && (r.call(this, a, d, h), o > u && (h = [])))
    }
    return h
}, SignalProcessing.prototype.configProcessor = function (e, t) {
    this._processors[e] && this._processors[e].config(t)
}, SignalProcessing.prototype._initProcessorsPipeline = function (e, t) {
    for (var n = 0, i = 0; i < e.length; i++) {
        var a = e[i], s = this._processors[a];
        s.init(this._inParams, this._outParams, t), n = Math.max(n, s.minimumNumberOfSamplesNeeded())
    }
    return n
}, SignalProcessing.prototype._removeDisabledProcessors = function (e) {
    for (var t = [], n = 0; n < e.length; n++) {
        var i = e[n];
        this._processors[i].getConfig().enabled && t.push(i)
    }
    return t
}, SignalProcessing.prototype._processVector = function (e, t) {
    for (var n = 0; n < e.length; n++)t = this._processors[e[n]].processVector(t);
    return t
}, SignalProcessing.prototype._getPostProcessFunc = function () {
    var e, t = this._processors.Resampling;
    return e = t.isDownSampling() ? function (e, t, n) {
        n.push(this._processVector(e, t))
    } : function (e, t, n) {
        for (var i = 0; i < t.length; i++)n.push(this._processVector(e, t[i]))
    }
}, SignalProcessing.processors = {}, SignalProcessing.processors.BaseProcessor = bcViewer.Class.extend({construct: function () {
    this._config = {enabled: !0}
}, init: function () {
}, config: function (e) {
    for (var t in e)this._config[t] = e[t]
}, getConfig: function () {
    return this._config
}, minimumNumberOfSamplesNeeded: function () {
    return 0
}, processVector: function () {
}}), SignalProcessing.processors.FlipSignal = SignalProcessing.processors.BaseProcessor.extend({processVector: function (e) {
    for (var t = 0; t < e.length; t++)e[t] = -1 * e[t];
    return e
}}), SignalProcessing.processors.HighPassFilter = SignalProcessing.processors.BaseProcessor.extend({construct: function () {
    this._super.apply(this, arguments), this._transientResponseTime = 5
}, init: function (e, t, n) {
    var i = e.samplingRate * this._transientResponseTime;
    this._alpha = Math.exp(-1 / i), this._beta = 1 - this._alpha, this._lastVector = n[0]
}, processVector: function (e) {
    for (var t = [], n = 0; n < e.length; n++)this._lastVector[n] = this._alpha * this._lastVector[n] + this._beta * e[n], t[n] = e[n] - this._lastVector[n];
    return t
}}), SignalProcessing.processors.Resampling = SignalProcessing.processors.BaseProcessor.extend({init: function (e, t, n) {
    this._isDownSampling = e.samplingRate > t.samplingRate, this._resamplingFunc = this._isDownSampling ? this.downSample : this.upSample, this._step = t.rx / e.rx, this._prevVector, this._currentPosition, this._isDownSampling && this._initDownSampling(n[0].length)
}, _initDownSampling: function (e) {
    this._step = Math.round(this._step), this._vectorNum = 0, this._currentVector = [], this._min = [], this._max = [], this._wasMaxFoundRecent = [], this._reverse = [], this._prevMin = [], this._prevMax = [];
    for (var t = 0; e > t; t++)this._min.push(Number.MAX_VALUE), this._max.push(-Number.MAX_VALUE), this._prevMin.push(Number.MAX_VALUE), this._prevMax.push(-Number.MAX_VALUE), this._wasMaxFoundRecent.push(!1), this._reverse.push(!1)
}, isDownSampling: function () {
    return this._isDownSampling
}, _updateMinMax: function (e) {
    for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n > this._max[t] && (this._max[t] = n, this._wasMaxFoundRecent[t] = !0), n < this._min[t] && (this._min[t] = n, this._wasMaxFoundRecent[t] = !1)
    }
}, _getDownSampledVector: function (e) {
    for (var t = [], n = 0; n < e.length; n++)this._max[n] > this._prevMax[n] && this._min[n] < this._prevMin[n] ? this._wasMaxFoundRecent[n] ? this._currentVector[n] = this._min[n] : (this._currentVector[n] = this._max[n], this._reverse[n] = !0) : (this._max[n] > this._prevMax[n] && (this._min[n] = this._prevMax[n]), this._min[n] < this._prevMin[n] && (this._max[n] = this._prevMin[n], this._reverse[n] = !0)), t[n] = this._currentVector[n], this._currentVector[n] = this._reverse[n] ? this._min[n] : this._max[n], this._prevMax[n] = this._max[n], this._prevMin[n] = this._min[n], this._min[n] = Number.MAX_VALUE, this._max[n] = -Number.MAX_VALUE, this._reverse[n] = !1;
    return t
}, downSample: function (e) {
    var t = null;
    return this._vectorNum++, this._updateMinMax(e), 0 === this._currentVector.length && (this._currentVector = e), 0 === this._vectorNum % this._step && (t = this._getDownSampledVector(e)), t
}, upSample: function (e) {
    if ("undefined" == typeof this._currentPosition)return this._currentPosition = this._step, this._prevVector = e, e;
    for (var t = [], n = this._currentPosition; 1 > n; n += this._step) {
        for (var i = [], a = 0; a < e.length; a++)i[a] = e[a] + (e[a] - this._prevVector[a]) * n;
        t.push(i)
    }
    return this._prevVector = e, this._currentPosition = n - 1, t
}, processVector: function (e) {
    return this._resamplingFunc(e)
}}), SignalProcessing.processors.AdjustYResolution = SignalProcessing.processors.BaseProcessor.extend({init: function (e, t) {
    this._coeff = 1e3 / t.ry / e.ry
}, processVector: function (e) {
    for (var t = [], n = 0; n < e.length; n++)t[n] = e[n] * this._coeff;
    return t
}}), SignalProcessing.processors.AdjustChannelOffset = SignalProcessing.processors.BaseProcessor.extend({init: function (e, t) {
    this._requestedChannels = t.requestedChannels, this._offset = [];
    for (var n = this._requestedChannels.length, i = t.cy / (2 * n), a = 0; n > a; a++)this._offset[a] = i * (2 * a + 1);
    n > 1 && (this._offset[0] += i / 10, this._offset[n - 1] -= i / 10)
}, processVector: function (e) {
    for (var t = [], n = 0; n < this._requestedChannels.length; n++) {
        var i = this._requestedChannels[n];
        t[n] = e[i] + this._offset[n]
    }
    return t
}}), SignalProcessing.processors.Average = SignalProcessing.processors.BaseProcessor.extend({construct: function (e) {
    if (this._super.apply(this, arguments), 0 === e)throw"Average width can't be set to zero";
    this._windowWidth = e
}, init: function (e) {
    this._buffer = [], this._bufferSum = [], this._currentPointer = 0;
    for (var t = 0; e > t; t++) {
        this._buffer[t] = new Array(this._windowWidth), this._bufferSum[t] = 0;
        for (var n = 0; n < this._buffer[t].length; n++)this._buffer[t][n] = 0, this._bufferSum[t] += this._buffer[t][n]
    }
}, getBuffer: function () {
    return this._buffer
}, getMidVector: function () {
    for (var e = Math.floor((this._currentPointer + this._windowWidth / 2) % this._windowWidth), t = [], n = 0; n < this._buffer.length; n++)t.push(this._buffer[n][e]);
    return t
}, processVector: function (e) {
    for (var t = [], n = 0; n < e.length; n++)this._bufferSum[n] -= this._buffer[n][this._currentPointer], this._bufferSum[n] += e[n], this._buffer[n][this._currentPointer] = e[n], t[n] = this._bufferSum[n] / this._windowWidth;
    return this._currentPointer = (this._currentPointer + 1) % this._windowWidth, t
}}), SignalProcessing.processors.SmoothFilter = SignalProcessing.processors.BaseProcessor.extend({construct: function () {
    this._super.apply(this, arguments), this._smoothCutoff = 50, this._filterGain = 1
}, init: function (e, t, n) {
    this._filterGain = Math.round(e.samplingRate / this._smoothCutoff), this._avgFilter = new SignalProcessing.processors.Average(this._filterGain), this._avgFilter.init(n[0].length)
}, minimumNumberOfSamplesNeeded: function () {
    return this._config.enabled ? this._filterGain : Math.round(this._filterGain / 2)
}, processVector: function (e) {
    return this._avgFilter.processVector(e)
}}), SignalProcessing.processors.BaselineFilter = SignalProcessing.processors.BaseProcessor.extend({init: function (e, t, n) {
    this._width = e.samplingRate, this._avgFilter = new SignalProcessing.processors.Average(this._width), this._avgFilter.init(n[0].length)
}, minimumNumberOfSamplesNeeded: function () {
    return this._config.enabled ? this._width : Math.round(this._width / 2)
}, processVector: function (e) {
    for (var t = [], n = this._avgFilter.getMidVector(), i = this._avgFilter.processVector(e), a = 0; a < e.length; a++)t[a] = n[a] - i[a];
    return t
}}), bcViewer.Config = function (e) {
    this.ecgViewer = {CACHE_WINDOW_SIZE: 3, DEFAULT_ZOOM: {x: 25, y: 10}, DEFAULT_FILTERS: {BASELINE: !1, SMOOTH: !1}, SHOW_GRID: !0, MEASUREMENT: {MIN_HR: 10, MAX_HR: 400}, REALTIME: {BUFFERING_INITIAL_SIZE: 200, BUFFER_INCREMENT_SIZE: 100}}, this.contextViewer = {HIDDEN: !1, CACHE_WINDOW_SIZE: 3, DEFAULT_SELECTED_CHANNEL: 0, HEIGHT: 28, DEFAULT_ZOOM: {x: 5, y: 2}, SHOW_GRID: !1}, this.timelineViewer = {HIDDEN: !1, HEIGHT: 20}, this.HRViewer = {HIDDEN: !1, HEIGHT: 80}, this.eventsViewer = {HIDDEN: !1, HEIGHT: 24, DEFAULT_SELECTED_EVENT_ID: 2}, this.ecgGrid = {SMALL_BLOCK_LINE_COLOR: "#E9E9E9", BIG_BLOCK_LINE_COLOR: "#D1D1D1", SMALL_BLOCKS_PER_BIG_BLOCK: 10}, this.DEFAULT_COLOR = "#000000", this.DEFAULT_CHANNEL_COLOR = "#000000", this.DEFAULT_ANNOTATION_COLOR = "#000000", this.DEFAULT_EVENT_GRAPH_COLOR = "#000000", this.COLORS_NUMBER = 3, this.COLORS = {Ch0: "#0000a0", Ch1: "#017b1b", Ch2: "#0a9092"}, this.HIDE_HEADER = !0, $.extend(!0, this, e), this.ecgGrid.NUM_PIXELS_PER_SMALL_BLOCK = 4, this.ecgGrid.SMALL_BLOCK_SIZE = 1, this.PIXELS_SIZE = this.ecgGrid.SMALL_BLOCK_SIZE / this.ecgGrid.NUM_PIXELS_PER_SMALL_BLOCK, this.PIXEL_PER_MM = 1 / this.PIXELS_SIZE, this.PIXEL_FACTOR = 1e3 * this.PIXELS_SIZE, this.HRViewer.WIDTH = this.timelineViewer.WIDTH, this.eventsViewer.WIDTH = this.timelineViewer.WIDTH
}, bcViewer.Utils = function () {
    this._defaultThrottleDelay = 100, this.SCREEN_TYPES = {DESKTOP: "desktop", TABLET: "tablet", PHONE: "phone"}
}, bcViewer.Utils.prototype.callAPI = function (e) {
    return $.ajax(e)
}, bcViewer.Utils.prototype.filterObjectByKeys = function (e, t) {
    for (var n = {}, i = 0; i < t.length; i++) {
        var a = t[i];
        "undefined" != typeof e[a] && (n[a] = e[a])
    }
    return n
}, bcViewer.Utils.prototype.capitalizeFirstLetter = function (e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}, bcViewer.Utils.prototype.formatDate = function (e, t) {
    var n = new Date(e), i = n.getDate(), a = n.getMonth() + 1, s = n.getFullYear(), o = t;
    return o = o.replace(/yyyy/, s), o = o.replace(/yy/, String(s).substr(2)), o = o.replace(/MM/, this.zeroPadd(a)), o = o.replace(/M/, a), o = o.replace(/dd/, this.zeroPadd(i)), o = o.replace(/d/, i)
}, bcViewer.Utils.prototype.formatTime = function (e, t) {
    var n = new Date(e);
    return this.getTimeString(n.getHours(), n.getMinutes(), n.getSeconds(), t)
}, bcViewer.Utils.prototype.formatTimeDuration = function (e, t) {
    var n = this.normalizeTime(e);
    return this.getTimeString(n.hours, n.minutes, n.seconds, t)
}, bcViewer.Utils.prototype.getTimeString = function (e, t, n, i) {
    var a = i;
    return a = a.replace(/HH/, this.zeroPadd(e)), a = a.replace(/MM/, this.zeroPadd(t)), a = a.replace(/SS/, this.zeroPadd(n))
}, bcViewer.Utils.prototype.normalizeTime = function (e) {
    var t = Math.floor(e / 1e3), n = Math.floor(t / 60), i = Math.floor(n / 60);
    return{seconds: t % 60, minutes: n % 60, hours: i}
}, bcViewer.Utils.prototype.zeroPadd = function (e) {
    return(10 > e ? "0" : "") + e
}, bcViewer.Utils.prototype.isNumber = function (e) {
    return!isNaN(parseFloat(e)) && isFinite(e)
}, bcViewer.Utils.prototype.throttle = function (e, t, n, i) {
    var a = i;
    "undefined" == typeof a && (a = this._defaultThrottleDelay), "undefined" != typeof bcViewer.Utils.prototype.throttle[t] && clearTimeout(bcViewer.Utils.prototype.throttle[t]), bcViewer.Utils.prototype.throttle[t] = setTimeout(function () {
        delete bcViewer.Utils.prototype.throttle[t], n.call(e)
    }, a)
}, bcViewer.Utils.prototype.getObjectKeys = function (e) {
    var t = [];
    if (Object.keys)t = Object.keys(e); else for (var n in e)t.push(n);
    return t
}, bcViewer.Utils.prototype.getScrollbarsWidth = function () {
    var e = document.createElement("div");
    e.style.visibility = "hidden", e.style.width = "100px", document.body.appendChild(e);
    var t = e.offsetWidth;
    e.style.overflow = "scroll";
    var n = document.createElement("div");
    n.style.width = "100%", e.appendChild(n);
    var i = n.offsetWidth;
    return e.parentNode.removeChild(e), t - i
}, bcViewer.Utils.prototype.getScreenType = function () {
    var e = document.documentElement.clientWidth;
    return e >= 768 && 1024 >= e ? this.SCREEN_TYPES.TABLET : this.SCREEN_TYPES.DESKTOP
}, jQuery.fn.cssNumber = function (e) {
    var t = parseFloat(this.css(e));
    return isNaN(t) ? 0 : t
}, "undefined" == typeof jQuery.fn.tooltip && (jQuery.fn.tooltip = function () {
}), bcViewer.ViewerState = function (e) {
    $.extend(this, e)
}, bcViewer.ViewerState.prototype.clone = function () {
    return new bcViewer.ViewerState(this)
}, bcViewer.ViewerState.prototype.getNewState = function (e) {
    var t = this.clone();
    return $.extend(t, e), t
}, bcViewer.ViewerState.prototype.affectedBy = function (e) {
    for (var t in e)if (this[t] !== e[t])return!0;
    return!1
}, bcViewer.ViewerState.prototype.equalTo = function (e) {
    for (var t in e)if (e.hasOwnProperty(t) && this[t] !== e[t])return!1;
    return!0
}, bcViewer.BaseDataFetcher = bcViewer.Class.extend({construct: function (e, t) {
    $.extend(this, e), this._events, this._metadata, this._annotationLegend, this._recordType = t
}, _fetch: function (e) {
    this._liveAjaxRequests++, 1 === this._liveAjaxRequests && this._bcViewer.onDataFetchStart();
    var t = e.complete;
    return e.complete = $.proxy(function () {
        this._liveAjaxRequests--, t && t.apply(this, arguments), 0 === this._liveAjaxRequests && this._bcViewer.onDataFetchEnd()
    }, this), this._utils.callAPI(e)
}, getAnnotationLegend: function (e) {
    "undefined" != typeof this._annotationLegend && e && e(this._annotationLegend);
    var t = "/assets/annotation_" + this._recordType + "_en.json";
    this._fetch({url: t, cache: !0, type: "GET", context: this, success: function (t) {
        this._annotationLegend = t, e && e(t)
    }})
}, getMetadata: function (e) {
    e && e({})
}, getHRData: function (e, t, n) {
    n && n({})
}, getEventsData: function (e, t, n) {
    n && n({})
}, getEventsNPInfo: function (e, t, n) {
    n && n({})
}, enableECGDataRequests: function () {
}, disableECGDataRequests: function () {
}, requestECGData: function (e, t, n) {
    n && n({})
}, abortECGDataRequest: function () {
}}), bcViewer.WebDataFetcher = bcViewer.BaseDataFetcher.extend({construct: function () {
    this._super.apply(this, arguments), this._ecgDataRequests = {}, this._ecgDataRequestsEnabled = !0, this._ecgDataRequestsAjax, this._eventsDataRequestAjax, this._eventsDataRequestCallbacks = [], this._liveAjaxRequests = 0, this._REALTIME_EMULATION_ACTIVE = !0, this._REALTIME_HW_EMULATION_ACTIVE = !1, this._REALTIME_EMULATION_ACTIVE && (this._emulationRecordHash = "Rec9F178D20AFEC6BEC7E2184A644ED4A5969CC6CD3", this._rtPos = 0, this._rtBlockSize = 150)
}, getMetadata: function (e) {
    "undefined" != typeof this._metadata && e && e(this._metadata), this._fetch({url: "/api/read_metadata", data: {record_hash: this._bcViewer.getRecordHash(), record_type: this._recordType}, cache: !1, type: "GET", context: this, success: function (t) {
        this._metadata = t, this._metadata.StartTime *= 1e3;
        var n = (new Date).getTimezoneOffset(), i = new Date(this._metadata.StartTime + 1e3 * 60 * n);
        this._metadata.StartTime = i.getTime(), e && e(t)
    }})
}, getHRData: function (e, t, n) {
    this._eventsDataRequestCallbacks.push(function (e) {
        for (var t = e.events[0], i = !0, a = 0; i && t.graph && a < t.graph.length;)t.graph[a].series.length > 0 && (i = !1), a++;
        var s = i ? {} : t;
        n(s)
    }), this._getEventsData(this._bcViewer.getRecordHash(), e, t)
}, getEventsData: function (e, t, n) {
    var i = function (e) {
        for (var t = e.events.slice(1), i = {}, a = 0; a < t.length; a++) {
            var s = t[a];
            s.lines && 0 !== s.lines.length && (i[s.id] = s)
        }
        n(i)
    };
    this._eventsDataRequestCallbacks.push(i), this._getEventsData(this._bcViewer.getRecordHash(), e, t)
}, _getEventsData: function (e, t, n) {
    "undefined" == typeof this._eventsDataRequestAjax && (this._eventsDataRequestAjax = this._fetch({url: "/api/get_events", data: {record_hash: e, record_type: this._recordType, cx: t, cy: n}, cache: !1, type: "GET", context: this, success: function (e) {
        delete this._eventsDataRequestAjax;
        for (var t; t = this._eventsDataRequestCallbacks.pop();)t && t(e)
    }}))
}, getEventsNPInfo: function (e, t, n) {
    this._fetch({url: "/api/getevent_np_info", data: {record_hash: e, startTime: t, get_bookmarks: 0}, cache: !0, type: "GET", context: this, success: function (e) {
        for (var t = {}, i = 0; i < e.length; i++) {
            var a = e[i];
            t[a.id] = a.all
        }
        n && n(t)
    }})
}, enableECGDataRequests: function () {
    this._ecgDataRequestsEnabled = !0, this._executeECGDataRequest()
}, disableECGDataRequests: function () {
    this._ecgDataRequestsEnabled = !1
}, requestECGData: function (e, t, n) {
    this._ecgDataRequests[t] && delete this._ecgDataRequests[t], this._ecgDataRequests[t] = {params: e, callback: n}, this._ecgDataRequestsEnabled && this._executeECGDataRequest()
}, _executeECGDataRequest: function () {
    var e = this._ecgDataRequests;
    $.isEmptyObject(e) || (this._getECGData(e, function (t) {
        $.each(e, function (e, n) {
            var i = n.callback;
            i(t[e])
        })
    }), this._ecgDataRequests = {})
}, _getECGData: function (e, t) {
    this._ecgDataRequestsAjax && this._ecgDataRequestsAjax.abort(), this._ecgDataRequestsAjax = this._fetch({url: "/api/read_data", data: this._getECGDataAjaxParams(e), cache: !0, type: "GET", context: this, success: function (n) {
        delete this._ecgDataRequestsAjax;
        var i = this.__TEMP_FUNC_fixResultData(e, n);
        t && t(i)
    }})
}, abortECGDataRequest: function () {
    this._ecgDataRequestsAjax && this._ecgDataRequestsAjax.abort()
}, _getECGDataAjaxParams: function (e) {
    var t = {record_hash: this._bcViewer.getRecordHash(), record_type: this._recordType}, n = 0;
    for (var i in e) {
        var a = e[i].params;
        for (var s in a)t[s + n] = a[s];
        t["name" + n] = i, n++
    }
    var n = 0;
    t.cx = t.cy = t.rx = t.ry = t.startTime = t.startPointOffset = t.endPointOffset = 0;
    for (var i in e) {
        var a = e[i].params;
        for (var s in a) {
            var o = "main" === i ? s : "preview" + s.replace(/[a-z]/, function (e) {
                return e.toUpperCase()
            });
            delete t[s + n], t[o] = a[s]
        }
        n++
    }
    return t.previewCy = 135, t
}, __TEMP_FUNC_fixResultData: function (e, t) {
    var n = {};
    n.main = {}, n.main.series = t.data.series;
    var i;
    if ("" !== t.data.series[0].name) {
        i = [];
        for (var a = 0; a < t.data.series.length; a++)i[a] = t.data.series[a].name
    }
    n.main.leadNames = i;
    for (var a = 0; a < t.data.series.length; a++)t.data.series[a].index = a;
    n.main.qrs = [];
    for (var s = t.data.qrs || [], a = 0; a < s.length; a++) {
        var o = s[a].points[0][0], r = s[a].caption.split(" ");
        n.main.qrs[a] = {caption: r[2] || r[0], color: s[a].color, x: o}
    }
    if (!t.preview)return n;
    for (var l = e.context && e.context.params.selectedChannel, a = 0; a < t.preview.series.length; a++)t.preview.series[a].index = a;
    n.context = {}, n.context.series = [], n.context.series[0] = t.preview.series[l];
    for (var c = n.context.series[0].points, u = t.preview.series[l].offset, h = $$("#bc_viewer .bcv_context_canvas").height() / 2, a = 0; a < c.length; a++)c[a][1] -= u - h;
    return n.context.leadNames = i, n
}, toggleRealtimeMode: function (e, t) {
    return this._REALTIME_EMULATION_ACTIVE ? (t && t(e), void 0) : (this._REALTIME_HW_EMULATION_ACTIVE && e ? this._startSimulation(t) : this._toggleOsc(e, t), void 0)
}, _toggleOsc: function (e, t) {
    this._fetch({url: e ? "/osc/start" : "/osc/stop", cache: !0, type: "GET", context: this, success: function () {
        t && t(e)
    }})
}, _startSimulation: function (e) {
    var t = $.proxy(this._toggleOsc, this);
    this._fetch({url: "/osc/emulation?type=saw", cache: !0, type: "GET", context: this, success: function () {
        t(!0, e)
    }})
}, getRealtimeData: function (e, t) {
    var n = "/osc/read_data";
    this._REALTIME_EMULATION_ACTIVE && (n = "/api/read_data"), this._fetch({url: n, data: this._REALTIME_EMULATION_ACTIVE ? this._getSimulatedRTDataAjaxParams(e) : e, cache: !0, type: "GET", context: this, success: function (e) {
        this._REALTIME_EMULATION_ACTIVE && (e.series = e.data.series), t && t(e)
    }}), this._REALTIME_EMULATION_ACTIVE && (this._rtPos += this._rtBlockSize)
}, _getSimulatedRTDataAjaxParams: function () {
    return{bl: !1, cx: this._rtBlockSize, cy: 586, endPointOffset: 13640, name0: "main", previewCy: 135, record_hash: this._emulationRecordHash, record_type: 0, rx: 10, ry: 25, sm: !1, startPointOffset: 0, startTime: this._rtPos}
}}), bcViewer.StandaloneDataFetcher = bcViewer.BaseDataFetcher.extend({construct: function () {
    this._super.apply(this, arguments), this._signalProcessing = new SignalProcessing
}, getRecordData: function (e, t) {
    this._fetch({url: e, cache: !1, type: "GET", context: this, dataType: "json", success: function (e) {
        this._onGotRecordData(e, t)
    }})
}, _onGotRecordData: function (e, t) {
    this._ecgData = e.ecg, this._metadata = {Duration: e.header.duration || e.footer.duration, NumberOfChannels: e.header.numberOfLeads || e.footer.numberOfLeads, StartTime: e.header.startTime || e.footer.startTime, NumberOfSamples: e.header.numberOfSamples || e.footer.numberOfSamples, SamplingRate: e.header.samplingRate || e.footer.samplingRate, ry: e.header.unitsPerMv || e.footer.unitsPerMv, startTimeZone: e.header.startTimeZone || e.footer.startTimeZone}, this._signalProcessing.setInputSignal(this._ecgData, {numberOfChannels: this._metadata.NumberOfChannels, numberOfSamples: this._metadata.NumberOfSamples, samplingRate: this._metadata.SamplingRate, ry: this._metadata.ry}), t && t()
}, getMetadata: function (e) {
    this._metadata.StartTime *= 1e3, this._metadata.StartTime -= 1e3 * 60 * this._metadata.startTimeZone, e && e(this._metadata)
}, requestECGData: function (e, t, n) {
    "undefined" != typeof e.selectedChannel && (e.requestedChannels = [e.selectedChannel]), this._signalProcessing.configProcessor("SmoothFilter", {enabled: e.sm}), this._signalProcessing.configProcessor("BaselineFilter", {enabled: e.bl});
    var i = this._signalProcessing.getOutputSignal(e), a = this._convertSignalFormat(i, e.requestedChannels);
    n && n(a)
}, _convertSignalFormat: function (e, t) {
    for (var n = {series: [], qrs: []}, i = 0; i < e[0].length; i++) {
        var a = {}, s = t ? t[i] : i;
        for (a.color = "Ch" + s, a.index = s, a.points = [], j = 0; j < e.length; j++) {
            var o = [j, e[j][i]];
            a.points.push(o)
        }
        n.series.push(a)
    }
    return n
}}), bcViewer.BaseCanvas = bcViewer.Class.extend({construct: function (e, t, n, i) {
    this._config = e, this.canvas = t ? $$(t)[0] : document.createElement("canvas"), this.$ = $(this.canvas), this._width, this._height, "undefined" != typeof n && this.setWidth(n), "undefined" != typeof i && this.setHeight(i), this.context = this.canvas.getContext("2d")
}, clear: function () {
    this.context.fillStyle = "#FFFFFF", this.context.fillRect(0, 0, this._width, this._height)
}, setHeight: function (e) {
    e !== this._height && (this.canvas.height = e, this.canvas.style.height = e + "px", this._height = e)
}, setWidth: function (e) {
    e !== this._width && (this.canvas.width = e, this._width = e)
}, _getColor: function (e, t) {
    return t = t || this._config.DEFAULT_COLOR, this._config.COLORS[e] || t
}, _getPositionFromPoint: function (e) {
    return{x: e[0], y: e[1]}
}, initTooltip: function (e) {
    e = e || {}, e.items = "canvas", this.$.tooltip(e)
}, showTooltip: function (e) {
    e && this.$.tooltip(e), this.$.tooltip("open")
}, hideTooltip: function () {
    this.$.tooltip("close").tooltip("disable")
}, changeTooltip: function (e) {
    this.$.tooltip({content: e})
}, drawLabel: function (e, t, n, i) {
    "undefined" != typeof i && $.each(i, $.proxy(function (e, t) {
        this.context[e] = t
    }, this)), this.context.fillText(e, t, n)
}, getDimensions: function () {
    return{width: this._width, height: this._height}
}}), bcViewer.ECGCacheCanvas = bcViewer.BaseCanvas.extend({construct: function () {
    this._super.apply(this, arguments), this._annotationMarkLength = 10, this._annotationMarkWidth = 1, this._annotationMarkCaptionOffset = {x: 5, y: 2}
}, draw: function (e, t, n) {
    if (this.context.clearRect(0, 0, this._width, this._height), t && this.context.drawImage(t.canvas, n, 0), null !== e) {
        for (var i = 0; i < e.series.length; i++) {
            var a = e.series[i], s = a.points;
            this.context.beginPath();
            var o = this._getPositionFromPoint(s[0]);
            for (this.context.moveTo(o.x, o.y), j = 1; j < s.length; j++)o = this._getPositionFromPoint(s[j]), this.context.lineTo(o.x, o.y);
            var r = "Ch" + a.index % this._config.COLORS_NUMBER, l = this._getColor(r, this._config.DEFAULT_CHANNEL_COLOR);
            this.context.strokeStyle = l, this.context.stroke()
        }
        this._drawAnnotations(e.qrs)
    }
}, _drawAnnotations: function (e) {
    if (e) {
        this.context.save();
        for (var t = 0; t < e.length; t++) {
            var n = e[t - 1] && e[t - 1].x;
            this._drawAnnotationMark(e[t], n)
        }
        this.context.restore()
    }
}, _drawAnnotationMark: function (e, t) {
    this.context.beginPath(), this.context.moveTo(e.x, 0), this.context.lineTo(e.x, this._annotationMarkLength), this.context.moveTo(e.x, this._height), this.context.lineTo(e.x, this._height - this._annotationMarkLength);
    var n = this._getColor(e.color, this._config.DEFAULT_ANNOTATION_COLOR);
    this.context.strokeStyle = n, this.context.lineWidth = this._annotationMarkWidth, this.context.stroke(), this.context.fillStyle = n, this.context.textBaseline = "bottom";
    var i = this.context.measureText(e.caption).width, a = e.x - i - this._annotationMarkCaptionOffset.x;
    t && t >= a || (this.drawLabel(e.caption, a, this._annotationMarkLength + this._annotationMarkCaptionOffset.y), this.drawLabel(e.caption, a, this._height - this._annotationMarkCaptionOffset.y))
}}), bcViewer.ECGViewerCanvas = bcViewer.BaseCanvas.extend({construct: function () {
    this._super.apply(this, arguments), this._annotationLineWidth = 1, this._savedData = {}, this._drawUtility = new bcViewer.DrawUtility(this)
}, drawAnnotationLine: function (e) {
    this._savedData[e.x] = this.context.getImageData(e.x - this._annotationLineWidth, 0, 2 * this._annotationLineWidth, this._height), this.context.save(), this.context.beginPath(), this.context.lineWidth = this._annotationLineWidth;
    var t = this._getColor(e.color, this._config.DEFAULT_ANNOTATION_COLOR);
    this.context.strokeStyle = t, this.context.moveTo(e.x, 0), this.context.lineTo(e.x, this._height), this.context.stroke(), this.context.restore()
}, removeAnnotationLine: function (e) {
    this.context.putImageData(this._savedData[e], e - this._annotationLineWidth, 0), delete this._savedData[e]
}, getTextWidth: function (e) {
    return this.context.measureText(e).width
}, getPosFromEvent: function (e) {
    var t = Math.round(e.pageX - this.$.offset().left), n = Math.round(e.pageY - this.$.offset().top);
    return{x: t, y: n}
}, onStartMeasuring: function (e) {
    this._drawUtility.setMeasurementStartPos(e)
}, drawMeasurements: function (e, t) {
    this._drawUtility.drawMeasurements(e, t)
}, clearMeasurements: function () {
    this._drawUtility.clearMeasurements()
}, initMeasurement: function () {
    this._drawUtility.init()
}}), bcViewer.RTECGViewerCanvas = bcViewer.BaseCanvas.extend({construct: function () {
    this._super.apply(this, arguments), this._xCoord = 0, this._isShiftNeeded = !1, this._gridBigBlockSize, this._bgSnapshot, this._bgSnapshotWidth, this._gridOffset, this._saveGridColNumber = 3, this._cacheCanvas = document.createElement("canvas"), this._cacheCanvasContext = this._cacheCanvas.getContext("2d")
}, init: function (e) {
    this._gridBigBlockSize = e, this._bgSnapshotWidth = this._gridBigBlockSize * this._saveGridColNumber, this._bgSnapshot = this.context.getImageData(0, 0, this._bgSnapshotWidth, this._height), this._gridOffset = this._width % this._gridBigBlockSize, this._cacheCanvas.width = this._width, this._cacheCanvas.height = this._height
}, draw: function (e, t) {
    this._isShiftNeeded && this._shift(t), this._drawData(e, t), this._isShiftNeeded === !1 && this._xCoord >= this._width && (this._isShiftNeeded = !0)
}, _drawData: function (e, t) {
    for (var n = 0; n < e.length; n++) {
        this.context.beginPath();
        var i = "Ch" + n % this._config.COLORS_NUMBER, a = this._getColor(i, this._config.DEFAULT_CHANNEL_COLOR);
        this.context.strokeStyle = a;
        for (var s = this._xCoord, o = 0; t > o; o++)this.context.moveTo(s, e[n][o]), this.context.lineTo(s + 1, e[n][o + 1]), this.context.stroke(), s++
    }
    this._isShiftNeeded === !1 && (this._xCoord += t - 1)
}, _shift: function (e) {
    var t = e - 1, n = this._width - t - this._gridOffset, i = this._bgSnapshotWidth - this._gridOffset;
    this._cacheCanvasContext.drawImage(this.canvas, 0, 0), this.clear(), this.context.drawImage(this._cacheCanvas, -t, 0), this.context.putImageData(this._bgSnapshot, n, 0, this._gridOffset, 0, i, this._height), this._xCoord = this._width - t, this._gridOffset = (this._gridOffset + t) % this._gridBigBlockSize
}}), bcViewer.ECGGridCanvas = bcViewer.BaseCanvas.extend({construct: function () {
    this._super.apply(this, arguments), this._smallBlockLineWidth = .5, this._bigBlockLineWidth = 1, this._startDrawingFrom = .5
}, draw: function () {
    var e = this._config.ecgGrid;
    this.context.clearRect(0, 0, this._width, this._height);
    var t = e.SMALL_BLOCKS_PER_BIG_BLOCK * e.NUM_PIXELS_PER_SMALL_BLOCK;
    this.drawHorizontalLines(this._startDrawingFrom, this._width, e.NUM_PIXELS_PER_SMALL_BLOCK, this._height, this._smallBlockLineWidth, e.SMALL_BLOCK_LINE_COLOR), this.drawHorizontalLines(this._startDrawingFrom, this._width, t, this._height, this._bigBlockLineWidth, e.BIG_BLOCK_LINE_COLOR), this.drawVerticalLines(this._startDrawingFrom, this._height, e.NUM_PIXELS_PER_SMALL_BLOCK, this._width, this._smallBlockLineWidth, e.SMALL_BLOCK_LINE_COLOR), this.drawVerticalLines(this._startDrawingFrom, this._height, t, this._width, this._bigBlockLineWidth, e.BIG_BLOCK_LINE_COLOR)
}, drawHorizontalLines: function (e, t, n, i, a, s) {
    this.context.strokeStyle = s, this.context.lineWidth = a, this.context.beginPath();
    for (var o = e; t >= o;)this.context.moveTo(o, 0), this.context.lineTo(o, i), o += n;
    this.context.stroke()
}, drawVerticalLines: function (e, t, n, i, a, s) {
    this.context.strokeStyle = s, this.context.lineWidth = a, this.context.beginPath();
    for (var o = e; t >= o;)this.context.moveTo(0, o), this.context.lineTo(i, o), o += n;
    this.context.stroke()
}}), bcViewer.TimelineCanvas = bcViewer.BaseCanvas.extend({construct: function () {
    this._super.apply(this, arguments), this._tickHeight = 5, this._majorTickHeight = 7
}, drawTimeline: function (e) {
    var t = new Date, n = e.startDrawingAt;
    this.clear(), this._setStyle(), this.context.beginPath();
    for (var i = 0; n < this._width;) {
        t.setTime(1e3 * (e.startTime + n * e.onePixelDuration));
        var a = 0 === i % e.numOfSegmentsPerBlock, s = a ? this._majorTickHeight : this._tickHeight;
        this._drawTick(n, s), a && n > 0 && (this._drawTick(n + 1, s), 0 !== e.startTime && this.drawLabel(this._getPrintTime(t), n, 10)), n += e.segmentWidth, i++
    }
    this.context.stroke()
}, _drawTick: function (e, t) {
    this.context.moveTo(e, this._height), this.context.lineTo(e, this._height - t)
}, _getPrintTime: function (e) {
    var t = e.getHours(), n = e.getMinutes();
    return 10 > t && (t = "0" + t), 10 > n && (n = "0" + n), t + ":" + n
}, _setStyle: function () {
    this.context.strokeStyle = "#000000", this.context.font = "10px Arial", this.context.fillStyle = "#222", this.context.textAlign = "center"
}}), bcViewer.HRCanvas = bcViewer.BaseCanvas.extend({draw: function (e) {
    this.clear();
    for (var t = 0; t < e.length; t++) {
        var n = e[t].series;
        if (n.length) {
            var i = this._getColor(e[t].color, this._config.DEFAULT_EVENT_GRAPH_COLOR);
            this.context.strokeStyle = i, this.context.beginPath();
            var a = this._getPositionFromPoint(n[0]);
            for (this.context.moveTo(a.x, a.y), j = 1; j < n.length; j++)a = this._getPositionFromPoint(n[j]), this.context.lineTo(a.x, a.y);
            this.context.stroke()
        }
    }
}}), bcViewer.EventCanvas = bcViewer.BaseCanvas.extend({construct: function () {
    this._super.apply(this, arguments), this._midHeight = Math.ceil(this._height / 2)
}, draw: function (e) {
    this.clear();
    for (var t = 0; t < e.length; t++) {
        if (this.context.beginPath(), this.context.strokeStyle = "#" + e[t][1], $.isArray(e[t][0])) {
            var n = this._getPositionFromPoint(e[t][0]);
            this.context.moveTo(n.x, 0), this.context.lineTo(n.x, this._height), this.context.moveTo(n.x, this._midHeight), this.context.lineTo(n.y, this._midHeight), this.context.moveTo(n.y, 0), this.context.lineTo(n.y, this._height)
        } else {
            var i = e[t][0];
            this.context.moveTo(i, 0), this.context.lineTo(i, this._height)
        }
        this.context.stroke()
    }
}}), bcViewer.DrawUtility = bcViewer.Class.extend({construct: function (e) {
    this._targetCanvas = e, this._targetContext = this._targetCanvas.context, this._cacheCanvas, this._cacheContext, this._lastBB, this._lastMeasuringTextDim, this._measuringStartPos = {x: 0, y: 0}, this._measurementConfig = {boundingBox: {color: "#000", width: "1"}, text: {color: "#000", font: "Bold Italic 12px Arial", height: 16, padding: 5, bbPadding: 5}}
}, init: function () {
    var e = this._targetCanvas.getDimensions();
    ("undefined" == typeof this._cacheCanvas || e.width !== this._cacheCanvas.width || e.height !== this._cacheCanvas.height) && (delete this._cacheCanvas, this._cacheCanvas = document.createElement("canvas"), this._cacheContext = this._cacheCanvas.getContext("2d"), this._cacheCanvas.width = e.width, this._cacheCanvas.height = e.height), this._cacheContext.clearRect(0, 0, this._cacheCanvas.width, this._cacheCanvas.height), this._cacheContext.drawImage(this._targetCanvas.canvas, 0, 0), delete this._lastBB, delete this._lastMeasuringTextDim
}, setMeasurementStartPos: function (e) {
    this._measuringStartPos = e
}, drawMeasurements: function (e, t) {
    this.clearMeasurements();
    var n = this._getMeasuringBoundingBox(e);
    this._drawBoundingBox(n), this._drawResultText(e, t), this._adjustBoundingBox(n), this._lastBB = n
}, clearMeasurements: function () {
    "undefined" != typeof this._lastBB && (this._targetContext.clearRect(this._lastBB.x, this._lastBB.y, this._lastBB.width, this._lastBB.height), 0 !== this._lastBB.height && 0 !== this._lastBB.width && this._targetContext.drawImage(this._cacheCanvas, this._lastBB.x, this._lastBB.y, this._lastBB.width, this._lastBB.height, this._lastBB.x, this._lastBB.y, this._lastBB.width, this._lastBB.height))
}, _drawBoundingBox: function (e) {
    this._targetContext.beginPath(), this._targetContext.strokeStyle = this._measurementConfig.boundingBox.color, this._targetContext.lineWidth = this._measurementConfig.boundingBox.width, this._targetContext.rect(e.x, e.y, e.width, e.height), this._targetContext.stroke()
}, _drawResultText: function (e, t) {
    this._targetContext.font = this._measurementConfig.text.font, this._targetContext.fillStyle = this._measurementConfig.text.color;
    var n = this._targetCanvas.getTextWidth(t), i = this._measurementConfig.text.height, a = this._measurementConfig.text.padding, s = this._measurementConfig.text.bbPadding, o = this._targetCanvas.getDimensions(), r = this._measuringStartPos.x, l = this._measuringStartPos.y - s;
    this._measuringStartPos.y > e.y && (l += i + 2 * s), this._measuringStartPos.x >= e.x && (r = Math.max(r - n, a)), i + a > l && (l += i + a + s), l > o.height - a && (l -= i + a + s), r + n > o.width && (r -= r + n - o.width + a), this._targetContext.fillText(t, r, l), this._lastMeasuringTextDim = {x: r, y: l, width: n, height: i + this._measurementConfig.text.bbPadding}
}, _adjustBoundingBox: function (e) {
    if ("undefined" != typeof e) {
        var t = this._measurementConfig.text.padding;
        if (this._lastMeasuringTextDim) {
            var n = 1;
            this._lastMeasuringTextDim.x < e.x && (n = e.x - this._lastMeasuringTextDim.x + 1), e.x -= n, e.y -= this._lastMeasuringTextDim.height, e.width += this._lastMeasuringTextDim.width - e.width > 2 ? this._lastMeasuringTextDim.width - e.width + this._lastMeasuringTextDim.height : 2, e.width += 2 * n, e.height += 2 * this._lastMeasuringTextDim.height + t
        } else e.x -= 1, e.y -= 1, e.width += 2, e.height += 2;
        var i = this._targetCanvas.getDimensions();
        e.x = Math.max(0, e.x), e.y = Math.max(0, e.y);
        var a = i.width - e.x;
        e.width = Math.min(a, e.width);
        var s = i.height - e.y;
        e.height = Math.min(s, e.height)
    }
}, _getMeasuringBoundingBox: function (e) {
    var t = Math.min(e.x, this._measuringStartPos.x), n = Math.min(e.y, this._measuringStartPos.y), i = Math.max(e.x, this._measuringStartPos.x), a = Math.max(e.y, this._measuringStartPos.y);
    return{x: t, y: n, width: i - t, height: a - n}
}}), bcViewer.View = function (e) {
    this.globals = e, $.extend(this, e), $$("#bc_viewer").width(this._config.BC_VIEWER_WIDTH || "100%"), $$("#bc_viewer").height(this._config.BC_VIEWER_HEIGHT || "100%"), this._width = $$("#bc_viewer").width(), this._height = $$("#bc_viewer").height(), this._isResizeStarted = !1, ("undefined" == typeof this._config.BC_VIEWER_WIDTH || "undefined" == typeof this._config.BC_VIEWER_HEIGHT) && $(window).on("resize", $.proxy(function () {
        if (this._isResizeStarted === !1) {
            var e = this._width !== $$("#bc_viewer").width(), t = this._height !== $$("#bc_viewer").height();
            this._bcViewer._allViewerDo("onWindowStartResizing", e, t), this._isResizeStarted = !0
        }
        this._utils.throttle(this, "resize", this._onWindowResize)
    }, this)), this._bcViewer.isRealtimeMode && $$("#bc_viewer").addClass("bcv_realtime"), this._setECGViewerPosition(), this._config.HIDE_HEADER && $$(".bcv_header").css("display", "none"), $("#bc_viewer").tooltip()
}, bcViewer.View.prototype.onSaveRecordToServerProgress = function () {
}, bcViewer.View.prototype._onWindowResize = function () {
    this._bcViewer.isDesktop && (this._width = $$("#bc_viewer").width(), this._height = $$("#bc_viewer").height(), this._bcViewer.onStateChangeRequest({width: this._width, height: this._height}), this._isResizeStarted = !1)
}, bcViewer.View.prototype.getDimensions = function () {
    return{width: this._width, height: this._height}
}, bcViewer.View.prototype._setECGViewerPosition = function () {
    this._config.ecgViewer.BOTTOM = $$(".bcv_context_viewer").height() + $$(".bcv_ecg_control_panel").outerHeight();
    var e = this._config.HRViewer.HIDDEN ? 0 : this._config.HRViewer.HEIGHT + $$(".bcv_hr_header").cssNumber("border-bottom"), t = this._config.eventsViewer.HIDDEN ? 0 : this._config.eventsViewer.HEIGHT, n = this._config.timelineViewer.HIDDEN ? 0 : this._config.timelineViewer.HEIGHT + $$(".bcv_timeline_header").cssNumber("border-bottom"), i = this._config.HIDE_HEADER ? 0 : $$(".bcv_header").outerHeight() + $$(".bcv_header").cssNumber("margin-bottom");
    if (this._config.ecgViewer.TOP = i + $$(".bcv_current_view_info").outerHeight() + e + t + n + $$(".bcv_events_container").cssNumber("border-top") + $$(".bcv_events_container").cssNumber("border-bottom"), this._bcViewer.isRealtimeMode && (this._config.ecgViewer.TOP = 0), this._config.contextViewer.HIDDEN) {
        var a = "none" === $$(".bcv_ecg_control_panel").css("display"), s = a ? 0 : $$(".bcv_ecg_control_panel").outerHeight(), o = a ? 0 : $$(".bcv_ecg_control_panel").cssNumber("border-top");
        this._config.ecgViewer.BOTTOM = s + o + $$(".bcv_canvas_wrapper").cssNumber("border-top")
    }
}, bcViewer.BaseViewer = bcViewer.Class.extend({construct: function (e, t, n) {
    $.extend(this, e), this._globals = e, this._globals._viewer = this, this._metadata, this.name = t, this.config = {}, $.extend(this.config, n), this._isInitCycle = !0, this.isViewerReady = !1, this._supportedStateChanges = ["timePosition"], this.initSupportedStateChanges(), this._state = new bcViewer.ViewerState({width: this.config.WIDTH, height: this.config.HEIGHT}), this._isViewerDisabled = !1
}, onStateChange: function (e, t) {
    var n = this._utils.filterObjectByKeys(e, this._supportedStateChanges);
    return this.scaleStateChangesToViewer(n), $.extend(this._state, n), this.config.HIDDEN ? (t && this._onLoadingEnd(), void 0) : (this.applyStateChanges(n, t), void 0)
}, applyStateChanges: function (e) {
    this._view && this._view.onStateChange(e)
}, onStateChangeRequest: function (e, t) {
    var n = t ? this : this._bcViewer;
    n.onStateChange(e)
}, scaleStateChangesToViewer: function (e) {
    var t = this._utils.capitalizeFirstLetter;
    for (var n in e) {
        var i = "scale" + t(n) + "ToViewer";
        this._view && this._view[i] && (e[n] = this._view[i](e))
    }
}, initSupportedStateChanges: function () {
    "undefined" == typeof this.config.WIDTH && this._supportedStateChanges.push("width"), "undefined" == typeof this.config.HEIGHT && this._supportedStateChanges.push("height")
}, onWindowStartResizing: function (e, t) {
    this._view.onWindowStartResizing(e, t)
}, getState: function () {
    return this._model ? this._model.getState() : this._state
}, onDragMove: function (e) {
    this._view.onDragMove && this._view.onDragMove(e)
}, onGotMetadata: function (e) {
    this._metadata = e
}, getTimeFromStartString: function (e) {
    var t, n = bcGlobals.locale.timeFormat, i = this._metadata.StartTime;
    return 0 === i ? (timeSpan = this._utils.formatTimeDuration(e, n), t = $.tmpl(bcGlobals.locale.timeSpanFromStart, {timeSpan: timeSpan}).text()) : t = this._utils.formatTime(i + e, n), t
}, _onLoadingEnd: function () {
    this._bcViewer.onViewerReady(this.name), this.isViewerReady = !0
}, isDisabled: function () {
    return this._isViewerDisabled
}, disableViewer: function () {
    this._isViewerDisabled = !0, this._view.disableViewer()
}, enableViewer: function () {
    this._isViewerDisabled = !1, this._view.enableViewer()
}, initRealtimeMode: function () {
    this.enableViewer(), this._onLoadingEnd()
}, adjustToScreenType: function () {
}, onGotMeasurementParams: function () {
}}), bcViewer.BaseViewer.View = bcViewer.Class.extend({construct: function (e, t, n, i, a) {
    this._globals = e, $.extend(this, e), this._model = this._viewer.getModel && this._viewer.getModel(), n = n || bcViewer.BaseCanvas, this._canvas = new n(this._config, t, i, a), this._canvasSelector = t, this._registerToEvents && this._registerToEvents(), this._viewer.config.HIDDEN && this.hideViewer()
}, onStateChange: function (e) {
    var t = this._utils.capitalizeFirstLetter;
    for (var n in e) {
        var i = "on" + t(n) + "Change";
        this[i] && this[i](this._getState())
    }
}, onWidthChange: function (e) {
    this._canvas.setWidth(e.width)
}, onHeightChange: function (e) {
    this._canvas.setHeight(e.height)
}, scaleWidthToViewer: function () {
    return $$(this._canvasSelector).parent().width()
}, scaleHeightToViewer: function () {
    return $$(this._canvasSelector).parent().height()
}, _getState: function () {
    return this._viewer.getState()
}, onWindowStartResizing: function (e) {
    e && this._canvas.clear()
}, getElementsToHide: function () {
}, hideViewer: function () {
    for (var e = this.getElementsToHide(), t = 0; t < e.length; t++)$$(e[t]).hide()
}, disableViewer: function () {
    $$(this._canvasSelector).addClass("bcv_disabled_canvas")
}, enableViewer: function () {
    $$(this._canvasSelector).removeClass("bcv_disabled_canvas")
}}), bcViewer.BaseWavesViewer = bcViewer.BaseViewer.extend({construct: function () {
    this._super.apply(this, arguments), this._state.zoomX = this.config.DEFAULT_ZOOM.x, this._state.zoomY = this.config.DEFAULT_ZOOM.y
}, _init: function (e, t, n, i) {
    var a = this._state.width, s = this._state.height;
    this._model = new e(this._globals, this._state), this._view = new t(this._globals, n, i, a, s)
}, applyStateChanges: function (e, t) {
    var n = $.proxy(function () {
        this._view.onStateChange(e), t ? (this._view._canvas.clear(), this._view.onInitCycle && this._view.onInitCycle.apply(this._view, arguments)) : this._view.onGotECGData.apply(this._view, arguments)
    }, this);
    this._model.onStateChange(e, n, t)
}, getModel: function () {
    return this._model
}, onGotMetadata: function () {
    this._super.apply(this, arguments), this._model.updateDuration(this._metadata.Duration)
}}), bcViewer.BaseWavesViewer.View = bcViewer.BaseViewer.View.extend({onGotECGData: function (e) {
    this._viewer.isDisabled() && this._viewer.enableViewer(), this._canvas.setHeight(e.height), this._canvas.setWidth(this._canvas.$.width()), this.drawImage(e.sourceCanvas, e.xOffset, e.yOffset), this._onCurrentVisibleWindowChange(e.visibleWindowStartTime, e.visibleWindowEndTime, e.visibleWindowDuration), !this._viewer.isViewerReady && this._viewer._onLoadingEnd()
}, drawImage: function (e, t, n) {
    this._canvas.clear(), this._canvas.context.drawImage(e, t, n)
}, _onCurrentVisibleWindowChange: function () {
}}), bcViewer.BaseWavesViewer.Model = bcViewer.Class.extend({construct: function (e, t) {
    this._globals = e, $.extend(this, e), this._state = new bcViewer.ViewerState(t), this._requestedState = new bcViewer.ViewerState(t), this._stateTimeCalculations = {}, this._requestedStateTimeCalculations = {}, this._cacheWindowSize = Math.max(this._viewer.config.CACHE_WINDOW_SIZE, 3), this._shouldDrawGrid = this._viewer.config.SHOW_GRID;
    var n = t.width && t.width * this._cacheWindowSize;
    this._ecgCacheCanvas = new bcViewer.ECGCacheCanvas(this._config, null, n, t.height), this._ecgGridCanvas = this._shouldDrawGrid ? new bcViewer.ECGGridCanvas(this._config, null, n, t.height) : null, this._numberOfPixelsPerBigBlock = this._config.ecgGrid.SMALL_BLOCKS_PER_BIG_BLOCK * this._config.ecgGrid.NUM_PIXELS_PER_SMALL_BLOCK, this._waitingForECGData = !1, this._qrsData, this._duration = 0, this._ecgData, this._leadNames, this._rtIsBufferReady = !1, this._rtReadInterval = 800, this._rtWriteInterval = 50, this._rtReadClock = null, this._rtWriteClock = null, this._rtBuffer = [], this._rtWriteIndex = 0, this._rtWriteBlockSize = 5, this._rtWriteCallback, this._rtBufferSizeBeforeWriting = this._viewer.config.REALTIME ? this._viewer.config.REALTIME.BUFFERING_INITIAL_SIZE : 200, this._rtBufferIncrementSize = this._viewer.config.REALTIME ? this._viewer.config.REALTIME.BUFFER_INCREMENT_SIZE : 100
}, onStateChange: function (e, t, n) {
    if ($.extend(this._requestedState, e), n) {
        $.extend(this._state, this._requestedState);
        var i = this._handleInitCycle();
        return t && t(i), void 0
    }
    if (this._bcViewer.isRealtimeMode)return $.extend(this._state, this._requestedState), void 0;
    if (this._waitingForECGData || !this._state.equalTo(this._requestedState)) {
        this._requestedStateTimeCalculations = this._getTimeCalculations(this._requestedState), this._gotDataForRequestedStateInCache() && (this._changeStateToReuqestedState(), this._sendECGDataBackToCallback(t)), ("undefined" != typeof e.width || "undefined" != typeof e.height || "undefined" != typeof e.zoomY) && (this._shouldDrawGrid = this._viewer.config.SHOW_GRID), this._waitingForECGData = !0;
        var a = this._getDataParamsForRequestedState();
        this._dataFetcher.requestECGData(a, this._viewer.name, $.proxy(function (e) {
            this._waitingForECGData = !1, this._ecgData = e, this._ecgCacheCanvas.setHeight(a.cy), this._ecgCacheCanvas.setWidth(a.cx), this._ecgCacheCanvas.draw(e, this._ecgGridCanvas, this._getGridOffset()), this._stateTimeCalculations.startTime = this._requestedStateTimeCalculations.startTime, this._stateTimeCalculations.endTime = this._requestedStateTimeCalculations.endTime, this._changeStateToReuqestedState(), this._qrsData = e.qrs, this._leadNames = e.leadNames, this._sendECGDataBackToCallback(t)
        }, this)), this._drawGridIfNeeded(a.cy)
    }
}, _getGridOffset: function () {
    return-(this.convertTimeToPixels(this._requestedStateTimeCalculations.startTime, this._state) % this._numberOfPixelsPerBigBlock)
}, _drawGridIfNeeded: function (e) {
    this._shouldDrawGrid && (this._ecgGridCanvas.setHeight(e), this._ecgGridCanvas.setWidth(this._requestedState.width * this._cacheWindowSize + this._numberOfPixelsPerBigBlock), this._ecgGridCanvas.draw(), this._shouldDrawGrid = !1)
}, _changeStateToReuqestedState: function () {
    $.extend(this._state, this._requestedState), this._stateTimeCalculations.visibleWindowStartTime = this._requestedStateTimeCalculations.visibleWindowStartTime, this._stateTimeCalculations.visibleWindowEndTime = this._requestedStateTimeCalculations.visibleWindowEndTime
}, _sendECGDataBackToCallback: function (e) {
    var t = this._getCacheCanvasXOffset(this._state.timePosition);
    t = Math.max(0, t);
    var n = {sourceCanvas: this._ecgCacheCanvas.canvas, xOffset: -t, yOffset: 0, width: this._ecgCacheCanvas._width, height: this._ecgCacheCanvas._height, visibleWindowStartTime: this._requestedStateTimeCalculations.visibleWindowStartTime, visibleWindowEndTime: this._requestedStateTimeCalculations.visibleWindowEndTime, visibleWindowDuration: this._requestedStateTimeCalculations.visibleWindowDuration};
    e && e(n)
}, getState: function () {
    return this._state
}, _getCacheCanvasXOffset: function (e) {
    var t = e - this._stateTimeCalculations.startTime, n = this.convertTimeToPixels(t, this._state), i = this._duration - e, a = Math.max(0, n - this._state.width / 2);
    if (i <= this._requestedStateTimeCalculations.visibleWindowDuration / 2) {
        var s = this._duration - this.convertPixelsToTime(this._state.width, this._state), o = s - this._stateTimeCalculations.startTime;
        a = this.convertTimeToPixels(o, this._state)
    }
    return a
}, _gotDataForRequestedStateInCache: function () {
    return"undefined" == typeof this._stateTimeCalculations.startTime ? !1 : this._requestedState.zoomX !== this._state.zoomX || this._requestedState.zoomY !== this._state.zoomY || this._requestedState.selectedChannel !== this._state.selectedChannel || this._requestedState.width !== this._state.width || this._requestedState.height !== this._state.height || this._requestedState.baselineCorrection !== this._state.baselineCorrection || this._requestedState.smooth !== this._state.smooth ? !1 : this._requestedStateTimeCalculations.visibleWindowStartTime >= this._stateTimeCalculations.startTime && this._requestedStateTimeCalculations.visibleWindowEndTime <= this._stateTimeCalculations.endTime ? !0 : !1
}, _getDataParamsForRequestedState: function () {
    var e = this._requestedStateTimeCalculations, t = this._requestedState, n = this.convertTimeToPixels(this._duration - e.startTime, t);
    return{cx: Math.round(Math.max(Math.min(t.width * this._cacheWindowSize, n), t.width)), cy: Math.round(t.height), rx: Math.round(e.onePixelDuration), ry: Math.round(this._config.PIXEL_FACTOR / t.zoomY), startTime: e.startTime, startPointOffset: e.visibleWindowStartTime, endPointOffset: e.visibleWindowEndTime, selectedChannel: t.selectedChannel && t.selectedChannel, bl: t.baselineCorrection, sm: t.smooth}
}, _getTimeCalculations: function (e) {
    if ("undefined" == typeof e.timePosition || "undefined" == typeof e.width || "undefined" == typeof e.zoomX)throw"Can't calculate time window without timePosition, width or zoomX";
    var t = this._getOnePixelDuration(e), n = e.width * t, i = Math.max(0, e.timePosition - n / 2 - (this._cacheWindowSize - 1) / 2 * n), a = Math.max(0, e.timePosition - n / 2);
    return this._duration - e.timePosition <= n / 2 && (a = Math.max(0, this._duration - n)), {onePixelDuration: t, visibleWindowDuration: n, startTime: i, endTime: Math.min(i + n * this._cacheWindowSize, this._duration), visibleWindowStartTime: a, visibleWindowEndTime: Math.min(a + n, this._duration)}
}, _getOnePixelDuration: function (e) {
    return this._config.PIXEL_FACTOR / e.zoomX
}, convertTimeToPixels: function (e, t) {
    return e / this._getOnePixelDuration(t)
}, convertPixelsToTime: function (e, t) {
    return e * this._getOnePixelDuration(t)
}, convertTimeToVisibleWindowPixels: function (e, t) {
    var n = e - this._stateTimeCalculations.visibleWindowStartTime;
    return this.convertTimeToPixels(n, t)
}, convertVisibleWindowPixelsToTime: function (e, t) {
    var n = this.convertPixelsToTime(e, t);
    return n + this._stateTimeCalculations.visibleWindowStartTime
}, getCacheTimeWindow: function () {
    return this._stateTimeCalculations
}, updateState: function (e) {
    $.extend(this._requestedState, e), "undefined" != typeof e.timePosition && (this._requestedStateTimeCalculations = this._getTimeCalculations(this._requestedState)), this._changeStateToReuqestedState()
}, onDragStart: function () {
    this._dataFetcher.abortECGDataRequest()
}, isDragAvailable: function () {
    return this.convertTimeToPixels(this._duration, this._state) > this._state.width
}, getECGDataForDrag: function (e, t) {
    var n = this._getCacheCanvasXOffset(this._state.timePosition);
    n -= e, 0 !== e && t && t(this._ecgCacheCanvas.canvas, -n, 0, this._ecgCacheCanvas._width, this._ecgCacheCanvas._height)
}, updateDuration: function (e) {
    this._duration = e
}, updateZoomXIfNeeded: function () {
    if (this._duration < this.convertPixelsToTime(this._state.width, this._state)) {
        var e = this._state.zoomX / (this._duration / this.convertPixelsToTime(this._state.width, this._state));
        return this.updateState({zoomX: e}), !0
    }
    return!1
}, getQRSAnnotations: function () {
    return this._qrsData
}, canDragToTimePosition: function (e) {
    var t = this._getCacheCanvasXOffset(e), n = this._state.width * ((this._cacheWindowSize + 1) / 2), i = this.convertPixelsToTime(this._state.width / 2, this._state);
    return(t > 0 || e == i) && n > t
}, _handleInitCycle: function () {
    this._shouldDrawGrid && (this._drawGridIfNeeded(this._state.height), this._ecgCacheCanvas.setHeight(this._state.height), this._ecgCacheCanvas.setWidth(this._state.width), this._ecgCacheCanvas.draw(null, this._ecgGridCanvas, 0)), this._shouldDrawGrid = this._viewer.config.SHOW_GRID;
    var e = {sourceCanvas: this._ecgCacheCanvas.canvas, xOffset: 0, yOffset: 0};
    return e
}, getLeadNames: function () {
    return this._leadNames
}, getVisibleChannelsPointsInRange: function (e, t, n) {
    if (e >= this._ecgData.series.length)return[];
    var i = this._stateTimeCalculations.visibleWindowStartTime - this._stateTimeCalculations.startTime, a = Math.round(this.convertTimeToPixels(i, this._state)), s = t + a, o = n + a;
    return this._ecgData.series[e].points.slice(s, o)
}, getData: function (e, t) {
    var n = this._stateTimeCalculations.visibleWindowStartTime - this._stateTimeCalculations.startTime, i = this.convertTimeToPixels(n, this._state), a = {x: i + e.x, y: e.y};
    t && t(this._ecgCacheCanvas.canvas, a)
}, toggleRealtimeMode: function (e, t) {
    this._dataFetcher.toggleRealtimeMode(e, t)
}, onRealtimeModeChanged: function (e, t) {
    e ? (this._rtReadClock = setInterval($.proxy(this._rtReadData, this), this._rtReadInterval), this._rtWriteCallback = t) : (clearInterval(this._rtReadClock), clearInterval(this._rtWriteClock), this._rtReadClock = null, this._rtWriteClock = null)
}, _rtReadData: function () {
    var e = this._getOnePixelDuration(this.getState()), t = this.getState(), n = {cy: t.height, rx: e, ry: this._config.PIXEL_FACTOR / t.zoomY, sm: t.smooth, bl: t.baselineCorrection};
    this._dataFetcher.getRealtimeData(n, $.proxy(this._rtGotData, this))
}, _rtGotData: function (e) {
    if (this._rtIsBufferReady === !1) {
        for (var t = 0; t < e.series.length; t++)this._rtBuffer[t] = [];
        this._rtIsBufferReady = !0
    }
    for (var t = 0; t < e.series.length; t++)this._rtBuffer[t] = this._rtBuffer[t].concat(e.series[t].points);
    null === this._rtWriteClock && this._rtBuffer[0].length - this._rtWriteIndex >= this._rtBufferSizeBeforeWriting && (this._rtWriteClock = setInterval($.proxy(this._rtWriteData, this, this._rtWriteCallback), this._rtWriteInterval))
}, _rtWriteData: function (e) {
    if ("undefined" != typeof this._rtBuffer[0] && "undefined" != typeof this._rtBuffer[0][this._rtWriteIndex]) {
        var t = [], n = Math.min(this._rtWriteBlockSize, this._rtBuffer[0].length - this._rtWriteIndex);
        if (1 === n)return this._rtBufferSizeBeforeWriting += this._rtBufferIncrementSize, clearInterval(this._rtWriteClock), this._rtWriteClock = null, void 0;
        for (var i = 0; i < this._rtBuffer.length; i++) {
            t[i] = [];
            for (var a = 0; n > a; a++)t[i][a] = this._rtBuffer[i][this._rtWriteIndex + a][1]
        }
        e(t, n), this._rtWriteIndex += n - 1;
        for (var i = 0; i < this._rtBuffer.length; i++)for (var a = this._rtWriteIndex - 1; a > this._rtWriteIndex - n; a--)delete this._rtBuffer[i][a]
    }
}}), bcViewer.ECGViewer = bcViewer.BaseWavesViewer.extend({construct: function () {
    this._super.apply(this, arguments), this._supportedStateChanges.push("zoomX", "zoomY", "baselineCorrection", "smooth"), this.MIDDLE_ZOOM_Y = 10, this._isCurrentViewDetailsUpdated = !1, this._countdownRequestsOnLoad = 2;
    var e = this._bcViewer.isRealtimeMode ? bcViewer.RTECGViewerCanvas : bcViewer.ECGViewerCanvas;
    this._init(bcViewer.BaseWavesViewer.Model, bcViewer.ECGViewer.View, "#bc_viewer .bcv_main_canvas", e), this._dataFetcher.getAnnotationLegend($.proxy(this.onGotAnnotationLegend, this))
}, getStartTime: function () {
    return this._metadata.StartTime
}, onDataFetchStart: function () {
    this._view.onDataFetchStart()
}, onDataFetchEnd: function () {
    this._view.onDataFetchEnd()
}, onAllViewersReady: function () {
    this._view.onAllViewersReady()
}, onGotMetadata: function () {
    this._super.apply(this, arguments), this._view.updateDate(this._metadata.StartTime)
}, onGotAnnotationLegend: function (e) {
    this._view.onGotAnnotationLegend(e), this._onLoadingEnd()
}, _onLoadingEnd: function () {
    this._countdownRequestsOnLoad--, 0 === this._countdownRequestsOnLoad && (this._view.onLoadingEnd(), this._super.apply(this, arguments))
}, onStateChange: function (e, t) {
    this._super(e, t), this._view.clearMeasurements(!1)
}, initRealtimeMode: function () {
    this._super.apply(this, arguments), this._view.initRealtimeMode()
}, adjustToScreenType: function () {
    this._super.apply(this, arguments), this._view.adjustToScreenType()
}, onGotMeasurementParams: function (e) {
    this._view.onGotMeasurementParams(e)
}}), bcViewer.ECGViewer.View = bcViewer.BaseWavesViewer.View.extend({construct: function () {
    this._super.apply(this, arguments), this._dragStartX, this._newTimePositionAfterDrag, this._notWaitingForECGData = !0, this._qrsDataMap, this._annotationHoverX, this._annotationHoverSensitivity = 2, this._visibleWindowTimeParams = {startOffset: 0, endOffset: 0, duration: 0}, this._currentViewDetails = {date: 0, zoom: 0, ampl: 0, timeSpan: 0, currentDetailsSeperator: bcGlobals.locale.currentDetailsSeperator, timeSpanFromStart: bcGlobals.locale.timeSpanFromStart}, this._currentViewDetailsTemplate = "#bcv_current_info_no_date", this._canvas.initTooltip({hide: !1}), this._tooltipPosition = "top-35", $$(".bcv_ecg_viewer").css("top", this._viewer.config.TOP), $$(".bcv_ecg_viewer").css("bottom", this._viewer.config.BOTTOM), this._isMeasuringMode = !1, this._isMeasuring = !1, this._measuringStartPos, this._isDragWhileMeasuring, this._isMeasuringWhileDrag, this._measurementNeedInit = !0, this._shouldClearMeasurements = !1, this._shiftModes = {SHIFT_UP: 0, DRAG_WHILE_MEASURE: 1, MEASURE_WHILE_DRAG: 2}, this._currentShiftMode = this._shiftModes.SHIFT_UP, this._leadNamesConfig = {xOffset: 10, padding: 5, minY: 23, labelStyle: {fillStyle: "#000", textBaseline: "bottom"}}, this._scrollbarsWidth = this._utils.getScrollbarsWidth()
}, _registerToEvents: function () {
    $$("#bc_viewer .bcv_zoom_x_controls").delegate("button", "click", $.proxy(this.onZoomChangeRequest, this, "zoomX", "button")), $$("#bc_viewer .bcv_zoom_y_controls").delegate("button", "click", $.proxy(this.onZoomChangeRequest, this, "zoomY", "button")), $$("#bc_viewer .bcv_zoom_x_list").on("change", $.proxy(this.onZoomChangeRequest, this, "zoomX", "list")), $$("#bc_viewer .bcv_zoom_y_list").on("change", $.proxy(this.onZoomChangeRequest, this, "zoomY", " list")), $$(".bcv_baseline_correction_button").on("click", $.proxy(this.onBaselineCorrectionRequest, this)), $$(".bcv_smooth_button").on("click", $.proxy(this.onSmoothRequest, this)), $$(".bcv_measure_button").on("click", $.proxy(this.onMeasureClicked, this)), $$("#bc_viewer .bcv_main_canvas").on("mousedown touchstart", $.proxy(this.onMouseDown, this)), $$("#bc_viewer .bcv_main_canvas").on("mouseup touchend", $.proxy(this.onMouseUp, this)), $$("#bc_viewer .bcv_main_canvas").on("mousemove touchmove", $.proxy(this.onMouseMove, this)), $$("#bc_viewer .bcv_main_canvas").on("mouseout touchcancel", $.proxy(this.onMouseUp, this)), $$(document).on("keydown", $.proxy(this.onKeyDown, this)), $$(document).on("keyup", $.proxy(this.onKeyUp, this))
}, onStateChange: function () {
    return delete this._annotationHoverX, this.clearMeasurements(!0), this._super.apply(this, arguments)
}, _buildQRSDataMap: function () {
    var e = this._model.getQRSAnnotations();
    delete this._qrsDataMap, this._qrsDataMap = {};
    for (var t = this._model.getCacheTimeWindow(), n = this._model.convertTimeToPixels(t.visibleWindowStartTime - t.startTime, this._getState()), i = 0; i < e.length; i++) {
        var a = Math.round(e[i].x - n);
        this._qrsDataMap[a] = e[i], this._qrsDataMap[a].x = a;
        for (var s = 1; s <= this._annotationHoverSensitivity; s++)this._qrsDataMap[a + s] = this._qrsDataMap[a - s] = this._qrsDataMap[a]
    }
}, onGotECGData: function () {
    this._notWaitingForECGData = !0, this._super.apply(this, arguments), this._drawLeadNames(), this._buildQRSDataMap(), this._measurementNeedInit = !0
}, onZoomChangeRequest: function (e, t, n) {
    var i = {};
    i[e] = "button" === t ? parseInt($(n.target).attr("value")) : parseInt($(n.target).find(":selected").val()), "zoomY" === e && (i.doesMainViewerGotScrollbars = i.zoomY > this._viewer.MIDDLE_ZOOM_Y, i.width = $$("#bc_viewer").width()), this._viewer.onStateChangeRequest(i)
}, _onZoomChange: function (e, t, n) {
    t.find(".bcv_control_button").each(function () {
        $(this).attr("disabled", $(this).attr("value") == e[n])
    })
}, onZoomXChange: function (e) {
    this._onZoomChange(e, $$("#bc_viewer .bcv_zoom_x_controls"), "zoomX"), this._currentViewDetails.zoom = $.tmpl(bcGlobals.locale.currentViewZoom, {zoom: e.zoomX}).text(), this._updateCurrentViewDetails(), $$(".bcv_zoom_x_list").val(e.zoomX)
}, onZoomYChange: function (e) {
    this._onZoomChange(e, $$("#bc_viewer .bcv_zoom_y_controls"), "zoomY"), this._currentViewDetails.ampl = $.tmpl(bcGlobals.locale.currentViewAmpl, {ampl: e.zoomY}).text(), this._updateCurrentViewDetails(), $$(".bcv_zoom_y_list").val(e.zoomY)
}, onSmoothChange: function (e) {
    this._changeFilterButtonState(".bcv_smooth_button", e.smooth)
}, onBaselineCorrectionChange: function (e) {
    this._changeFilterButtonState(".bcv_baseline_correction_button", e.baselineCorrection)
}, onWindowStartResizing: function (e, t) {
    this._bcViewer.isDesktop && (e || t) && this._canvas.clear()
}, _onFilterChange: function (e, t) {
    var n = $$(e).attr("selected");
    this._changeFilterButtonState(e, !n);
    var i = {};
    i[t] = !n, this._viewer.onStateChangeRequest(i)
}, _changeFilterButtonState: function (e, t) {
    $$(e).attr("selected", t)
}, onBaselineCorrectionRequest: function () {
    this._onFilterChange(".bcv_baseline_correction_button", "baselineCorrection")
}, onSmoothRequest: function () {
    this._onFilterChange(".bcv_smooth_button", "smooth")
}, onMeasureClicked: function () {
    var e = !$$(".bcv_measure_button").attr("selected");
    this._toggleMeasurement(e)
}, _initMeasurements: function () {
    this._measurementNeedInit = !1, this._canvas.initMeasurement(), $$(".bcv_measurement_result").show(), $$(".bcv_measurement_result").text("")
}, clearMeasurements: function (e) {
    this._shouldClearMeasurements && (e && this._canvas.clearMeasurements(), $$(".bcv_measurement_result").hide(), delete this._measuringStartPos, this._bcViewer.removeParamsFromHash(["measurement"]), this._shouldClearMeasurements = !1)
}, _toggleMeasurement: function (e) {
    $$(".bcv_measure_button").attr("selected", e), this._isMeasuringMode = e, e ? $$(".bcv_main_canvas").addClass("measurement_canvas") : $$(".bcv_main_canvas").removeClass("measurement_canvas")
}, _onCurrentVisibleWindowChange: function (e, t, n) {
    this._visibleWindowTimeParams.startOffset = e, this._visibleWindowTimeParams.endOffset = t, this._visibleWindowTimeParams.duration = n, this._updateCurrentVisibleWindowTime(this._visibleWindowTimeParams)
}, _updateCurrentVisibleWindowTime: function (e) {
    var t = bcGlobals.locale.timeFormat, n = this._viewer.getStartTime(), i = 0 === n ? this._utils.formatTimeDuration(e.startOffset, t) : this._utils.formatTime(n + e.startOffset, t), a = 0 === n ? this._utils.formatTimeDuration(e.endOffset, t) : this._utils.formatTime(n + e.endOffset, t);
    this._currentViewDetails.timeSpan = $.tmpl(bcGlobals.locale.timeSpanFormat, {startTime: i, endTime: a}).text(), this._currentViewDetails.timeSpanFromStart = $.tmpl(bcGlobals.locale.timeSpanFromStart, {timeSpan: this._currentViewDetails.timeSpan}).text(), this._updateCurrentViewDetails()
}, updateDate: function (e) {
    if (0 !== e) {
        var t = this._utils.formatDate(e, bcGlobals.locale.dateFormat);
        this._currentViewDetailsTemplate = "#bcv_current_info_with_date", this._currentViewDetails.date = t, this._updateCurrentVisibleWindowTime(this._visibleWindowTimeParams)
    } else this._currentViewDetailsTemplate = "#bcv_current_info_no_date"
}, _updateCurrentViewDetails: function () {
    $$(".bcv_current_view_info").html($(this._currentViewDetailsTemplate).tmpl(this._currentViewDetails))
}, onMouseDown: function (e) {
    this._isMeasuringMode ? (this._onMeasuringStart(e), this._isMeasuring = !0) : this.onDragStart(e)
}, onDragStart: function (e) {
    if (e.preventDefault(), this._model.isDragAvailable()) {
        this.clearMeasurements(!1), this._model.onDragStart(), this._dragStartX = e.pageX || e.originalEvent.touches[0].pageX;
        var t = this._getState(), n = this._visibleWindowTimeParams.duration / 2;
        t.timePosition < n ? this._viewer.onStateChangeRequest({timePosition: n}) : t.timePosition > this._viewer._metadata.Duration - n && this._viewer.onStateChangeRequest({timePosition: this._viewer._metadata.Duration - n})
    }
}, onMouseUp: function (e) {
    if (this._isMeasuring)this._onMeasuringStop(e); else {
        if ("undefined" == typeof this._dragStartX)return;
        this._viewer.onStateChangeRequest({timePosition: this._newTimePositionAfterDrag}), delete this._dragStartX, delete this._newTimePositionAfterDrag
    }
}, onMouseMove: function (e) {
    if (this._isMeasuring)this._onMeasuringMouseMove(e); else if (!this._isMeasuringMode) {
        if (this._showQRSAnnotation(e), "undefined" == typeof this._dragStartX)return;
        var t = this.getDragOffset(e.pageX || e.originalEvent.touches[0].pageX), n = this._getState(), i = this._model.convertPixelsToTime(t, n), a = Math.max(0, n.timePosition - i);
        this._model.canDragToTimePosition(a) ? (this._newTimePositionAfterDrag = a, this._bcViewer.onDragMove(a)) : this._notWaitingForECGData && (this._viewer.onStateChangeRequest({timePosition: this._newTimePositionAfterDrag}), this._notWaitingForECGData = !1)
    }
}, onDragMove: function (e) {
    var t = this._getState(), n = this._model.convertTimeToPixels(t.timePosition - e, t);
    this._model.getECGDataForDrag(n, $.proxy(this.drawImage, this));
    var i = this._model.convertPixelsToTime(n, t);
    timeParams = {duration: this._visibleWindowTimeParams.duration, startOffset: this._visibleWindowTimeParams.startOffset - i, endOffset: this._visibleWindowTimeParams.endOffset - i}, this._updateCurrentVisibleWindowTime(timeParams)
}, getDragOffset: function (e) {
    var t = e - this._dragStartX, n = this._getState(), i = this._model.convertTimeToPixels(this._visibleWindowTimeParams.startOffset, n), a = this._model.convertTimeToPixels(this._visibleWindowTimeParams.endOffset, n);
    this._model.convertTimeToPixels(this._visibleWindowTimeParams.duration, n);
    var s = this._model.convertTimeToPixels(this._viewer._metadata.Duration, n);
    return 0 >= i - t ? t = i : a - t >= s && (t = -(s - a)), t
}, _showQRSAnnotation: function (e) {
    var t = Math.round(e.pageX - this._canvas.$.offset().left), n = this._qrsDataMap && this._qrsDataMap[t] && this._qrsDataMap[t].x;
    if ("undefined" != typeof this._annotationHoverX && this._annotationHoverX != n && (this._canvas.removeAnnotationLine(this._annotationHoverX), delete this._annotationHoverX, this._canvas.hideTooltip()), n && this._annotationHoverX != n) {
        this._annotationHoverX = n, this._canvas.drawAnnotationLine(this._qrsDataMap[t]);
        var i = this._qrsDataMap[t].caption;
        this._annotationLegend[i] && this._canvas.showTooltip({content: this._annotationLegend[i], position: {of: e, my: this._tooltipPosition}})
    }
}, _deleteLastAnnotation: function () {
    "undefined" != typeof this._annotationHoverX && (this._canvas.removeAnnotationLine(this._annotationHoverX), delete this._annotationHoverX, this._canvas.hideTooltip())
}, onDataFetchStart: function () {
    $$(".bcv_updating_notification").show()
}, onDataFetchEnd: function () {
    $$(".bcv_updating_notification").hide()
}, onAllViewersReady: function () {
    $$(".bcv_loading_notification").hide()
}, onInitCycle: function (e) {
    this.drawImage(e.sourceCanvas, e.xOffset, e.yOffset)
}, onGotAnnotationLegend: function (e) {
    this._annotationLegend = e
}, onLoadingEnd: function () {
    this._bcViewer.isRealtimeMode || $$(".bcv_current_view_info").css("display", "inline-block")
}, _drawLeadNames: function () {
    var e = this._model.getLeadNames();
    if ("undefined" != typeof e)for (var t = this._leadNamesConfig, n = 0; n < e.length; n++) {
        for (var i = this._canvas.getTextWidth(e[n]), a = this._model.getVisibleChannelsPointsInRange(n, t.xOffset - t.padding, t.xOffset + i + t.padding), s = a[0][1], o = 1; o < a.length; o++)s = Math.min(a[o][1], s);
        this._canvas.drawLabel(e[n], t.xOffset, Math.max(s - t.padding, t.minY), t.labelStyle)
    }
}, disableViewer: function () {
    $$(".bcv_filters_group button").prop("disabled", !0), this._super.apply(this, arguments)
}, enableViewer: function () {
    $$(".bcv_filters_group button").removeProp("disabled"), this._super.apply(this, arguments)
}, _onMeasuringStart: function (e) {
    this._measurementNeedInit && this._initMeasurements(), e.preventDefault(), this._measuringStartPos = this._canvas.getPosFromEvent(e), this._canvas.onStartMeasuring(this._measuringStartPos)
}, _onMeasuringMouseMove: function (e) {
    var t = this._canvas.getPosFromEvent(e);
    this._measure(t)
}, _onMeasuringStop: function (e) {
    var t = this._canvas.getPosFromEvent(e);
    this._measure(t), this._isMeasuring = !1, this._bcViewer.updateHash({measurement: [this._measuringStartPos.x, this._measuringStartPos.y, t.x, t.y].join(",")})
}, _measure: function (e) {
    var t = Math.abs(e.x - this._measuringStartPos.x), n = Math.abs(e.y - this._measuringStartPos.y);
    if (0 === t && 0 === n)return $$(".bcv_measurement_result").text(""), this._canvas.clearMeasurements(!0), void 0;
    var i = this._model.convertPixelsToTime(t, this._getState()), a = this._model._config.PIXEL_FACTOR / this._model._state.zoomY * n, s = Math.round(6e4 / i), o = "";
    s >= this._viewer.config.MEASUREMENT.MIN_HR && s <= this._viewer.config.MEASUREMENT.MAX_HR && (o = $.tmpl(bcGlobals.locale.measurementHRResult, {hr: s}).text()), measurementResultText = $.tmpl(bcGlobals.locale.measurementResult, {zoom: i, ampl: a, hr_str: o}).text();
    var r = measurementResultText.replace(/\s/g, " ");
    $$(".bcv_measurement_result").text(r), this._canvas.drawMeasurements(e, measurementResultText), this._shouldClearMeasurements = !0
}, onKeyDown: function (e) {
    e.keyCode === this._globals.keyCodes.shift && this._currentShiftMode === this._shiftModes.SHIFT_UP && (this._isMeasuringMode ? (this._currentShiftMode = this._shiftModes.DRAG_WHILE_MEASURE, this._toggleMeasurement(!1)) : (this._currentShiftMode = this._shiftModes.MEASURE_WHILE_DRAG, this._deleteLastAnnotation(), this._toggleMeasurement(!0)))
}, onKeyUp: function (e) {
    e.keyCode === this._globals.keyCodes.shift && (this._currentShiftMode === this._shiftModes.DRAG_WHILE_MEASURE ? (this._deleteLastAnnotation(), this._toggleMeasurement(!0)) : this._currentShiftMode === this._shiftModes.MEASURE_WHILE_DRAG && this._toggleMeasurement(!1), this._currentShiftMode = this._shiftModes.SHIFT_UP)
}, scaleWidthToViewer: function (e) {
    var t = $$(this._canvasSelector).parent().width();
    return"undefined" != typeof e.width || "undefined" != typeof e.height, "undefined" == typeof e.zoomY, t
}, initRealtimeMode: function () {
    var e = this._config.ecgGrid.SMALL_BLOCKS_PER_BIG_BLOCK * this._config.ecgGrid.NUM_PIXELS_PER_SMALL_BLOCK;
    this._canvas.init(e), this._model.toggleRealtimeMode(!0, $.proxy(this._onRealtimeModeChanged, this))
}, _onRealtimeModeChanged: function (e) {
    this._model.onRealtimeModeChanged(e, $.proxy(this._onRTGotData, this))
}, _onRTGotData: function (e, t) {
    this._canvas.draw(e, t)
}, onWindowUnload: function () {
    this._model.toggleRealtimeRecord(!1), this._model.toggleRealtimeMode(!1)
}, adjustToScreenType: function () {
    $$(".bcv_baseline_correction_button").removeClass("bcv_sprite").addClass("bcv_sprite_big"), $$(".bcv_smooth_button").removeClass("bcv_sprite").addClass("bcv_sprite_big"), $$(".bcv_realtime_record_toggle").removeClass("bcv_sprite").addClass("bcv_sprite_big")
}, onGotMeasurementParams: function (e) {
    var t = this._getState();
    e.start.x < 0 || e.end.x < 0 || e.start.x > t.width || e.end.x > t.width || e.start.y < 0 || e.end.y < 0 || e.start.y > t.height || e.end.y > t.height || (this._measurementNeedInit && this._initMeasurements(), this._measuringStartPos = e.start, this._canvas.onStartMeasuring(e.start), this._measure(e.end))
}}), bcViewer.ContextViewer = bcViewer.BaseWavesViewer.extend({construct: function () {
    this._super.apply(this, arguments), this._supportedStateChanges.push("selectedChannel", "baselineCorrection", "smooth", "doesMainViewerGotScrollbars"), this._state.selectedChannel = this.config.DEFAULT_SELECTED_CHANNEL, this._init(bcViewer.BaseWavesViewer.Model, bcViewer.ContextViewer.View, "#bc_viewer .bcv_context_canvas"), this._widthRatio = 1
}, onStateChange: function (e, t) {
    if (this.config.HIDDEN)return t && this._onLoadingEnd(), void 0;
    if ("undefined" != typeof e.zoomX && !t) {
        var n = this.getState();
        this._view.updateZoomXRatio(e.zoomX, n.zoomX / this._widthRatio), this._view.updateHighlightWidth(n)
    }
    this._super(e, t)
}, applyStateChanges: function (e, t) {
    if ("undefined" != typeof e.width) {
        var n = this._bcViewer.getViewerState("main").zoomX, i = this.getState().zoomX / this._widthRatio;
        this._view.updateZoomXRatio(n, i);
        var a = this.getContextAndMainWidthRatio(this._state.width);
        this._model.updateState({zoomX: a * i}), this._widthRatio = a
    }
    this._super(e, t)
}, getContextAndMainWidthRatio: function (e) {
    var t = this._bcViewer.getMainWidth();
    return 0 === t ? 1 : e / t || 1
}, onGotMetadata: function () {
    this._super.apply(this, arguments), this._view.buildChannelsDropdown(this._metadata.NumberOfChannels, this._state.selectedChannel);
    var e = this._model.updateZoomXIfNeeded();
    if (e) {
        var t = this.getState(), n = this._bcViewer.getViewerState("main").zoomX, i = t.zoomX / this._widthRatio;
        this._view.updateZoomXRatio(n, i), this._view.updateHighlightWidth(t)
    }
}}), bcViewer.ContextViewer.View = bcViewer.BaseWavesViewer.View.extend({construct: function () {
    this._super.apply(this, arguments), this._zoomXRatio, this._DRAG_MODES = {HIGHLIGHT_MOVE: 0, WAVES_MOVE: 1}, this._dragMode = this._DRAG_MODES.HIGHLIGHT_MOVE, this._areLeadNamesInDropdown = !1
}, _registerToEvents: function () {
    $$("#bc_viewer .bcv_context_viewer .bcv_canvas_wrapper").on("click", $.proxy(this.onCanvasClicked, this)), $$("#bc_viewer .bcv_context_viewer .bcv_canvas_wrapper").on("mousemove", $.proxy(this.onMouseMove, this)), $$("#bc_viewer .bcv_context_viewer .bcv_canvas_wrapper").on("mouseenter", $.proxy(this.onMouseEnter, this)), $$("#bc_viewer .bcv_context_viewer .bcv_canvas_wrapper").on("mouseleave", $.proxy(this.onMouseLeave, this)), $$(".bcv_channels_list").on("change", $.proxy(this.onChannelSelected, this))
}, onCanvasClicked: function (e) {
    if (!this._viewer.isDisabled()) {
        var t = e.pageX - $$("#bc_viewer .bcv_context_viewer .bcv_canvas_wrapper").offset().left, n = this._model.convertVisibleWindowPixelsToTime(t, this._getState());
        this._viewer.onStateChangeRequest({timePosition: n})
    }
}, selectChannel: function (e) {
    $$(".bcv_channels_list").val(e)
}, getSelectedChannelId: function () {
    return $$(".bcv_channels_list").find(":selected").val()
}, onChannelSelected: function () {
    this._viewer.onStateChangeRequest({selectedChannel: this.getSelectedChannelId()})
}, onWidthChange: function (e) {
    this._super(e), this.updateHighlightWidth(e)
}, updateZoomXRatio: function (e, t) {
    this._zoomXRatio = t / e
}, updateHighlightWidth: function (e) {
    if ("undefined" != typeof e.width) {
        var t = Math.min(this._zoomXRatio, 1), n = e.width * t;
        $$("#bc_viewer .bcv_context_highlight").width(Math.floor(n)), $$("#bc_viewer .bcv_context_highlight_on_hover").width(Math.floor(n)), e.timePosition && this.updateHighlightPosition(e.timePosition, e)
    }
}, updateHighlightPosition: function (e, t) {
    var n = this._model.convertTimeToVisibleWindowPixels(e, t);
    this._setHighlightPosition($$("#bc_viewer .bcv_context_highlight"), n)
}, onTimePositionChange: function (e) {
    this.updateHighlightPosition(e.timePosition, e)
}, buildChannelsDropdown: function (e, t) {
    for (var n = [], i = 0; e > i; i++) {
        var a = $.tmpl(bcGlobals.locale.channelAbbreviation, {channel_number: i + 1}).text();
        n.push({value: i, text: a})
    }
    $$(".bcv_channels_list").append($("#bcv_dropdown_option").tmpl(n)), this.selectChannel(t)
}, getElementsToHide: function () {
    return[".bcv_context_viewer"]
}, onDragMove: function (e) {
    var t = this._getState(), n = this._model.convertTimeToPixels(e, t), i = this._model.convertTimeToPixels(this._viewer._metadata.Duration, t);
    if ($$("#bc_viewer .bcv_context_highlight").width(), n < t.width / 2 || n + t.width / 2 >= i)this._model.updateState({timePosition: e}), this._dragMode === this._DRAG_MODES.WAVES_MOVE && (this._dragMode = this._DRAG_MODES.HIGHLIGHT_MOVE, this._model.getECGDataForDrag(0, $.proxy(this.drawImage, this))), this.updateHighlightPosition(e, t); else {
        this._dragMode === this._DRAG_MODES.HIGHLIGHT_MOVE && (this._dragMode = this._DRAG_MODES.WAVES_MOVE, this._model.updateState({timePosition: e}), this.updateHighlightPosition(e, t));
        var a = this._model.convertTimeToPixels(t.timePosition - e, t);
        this._model.getECGDataForDrag(a, $.proxy(this.drawImage, this))
    }
}, onMouseMove: function (e) {
    if (!this._viewer.isDisabled()) {
        this._getState();
        var t = e.pageX - $$("#bc_viewer .bcv_context_viewer .bcv_canvas_wrapper").offset().left;
        this._setHighlightPosition($$(".bcv_context_highlight_on_hover"), t)
    }
}, onMouseEnter: function () {
    this._viewer.isDisabled() || this._bcViewer.isDesktop && $$(".bcv_context_highlight_on_hover").show()
}, onMouseLeave: function () {
    $$(".bcv_context_highlight_on_hover").hide()
}, _setHighlightPosition: function (e, t) {
    var n = this._getState(), i = e.width(), a = Math.min(Math.max(0, t - i / 2), n.width - i);
    e.css("left", Math.floor(a))
}, onGotECGData: function () {
    if (!this._areLeadNamesInDropdown) {
        var e = this._model.getLeadNames();
        if ("undefined" != typeof e) {
            for (var t = [], n = 0; n < e.length; n++)t.push({value: n, text: e[n]});
            $$(".bcv_channels_list").empty(), $$(".bcv_channels_list").append($("#bcv_dropdown_option").tmpl(t))
        }
        this._areLeadNamesInDropdown = !0
    }
    this._super.apply(this, arguments)
}, disableViewer: function () {
    $$(".bcv_channels_list").prop("disabled", !0), $$(".bcv_context_viewer .bcv_canvas_wrapper").addClass("bcv_canvas_wrapper_disabled"), this._super.apply(this, arguments)
}, enableViewer: function () {
    $$(".bcv_channels_list").removeProp("disabled"), $$(".bcv_context_viewer .bcv_canvas_wrapper").removeClass("bcv_canvas_wrapper_disabled"), this._super.apply(this, arguments)
}}), bcViewer.TimelineViewer = bcViewer.BaseViewer.extend({construct: function () {
    this._super.apply(this, arguments), this._onePixelDuration, this._view = new bcViewer.TimelineViewer.View(this._globals, "#bc_viewer .bcv_timeline_canvas", bcViewer.TimelineCanvas, this._state.width, this._state.height), this._isTimeLineReady = !1
}, applyStateChanges: function (e, t) {
    if (this._super(e, t), !t) {
        this._isTimelineReady || (this._buildTimeLine(), this._view.setCurrentTime(this._state.timePosition), this._isTimelineReady = !0);
        var n = "undefined" != typeof e.timePosition;
        ("undefined" != typeof e.width || "undefined" != typeof e.height) && (this._buildTimeLine(), n = !0), n && this._view.setCurrentTime(this._state.timePosition)
    }
}, _buildTimeLine: function () {
    this._onePixelDuration = this._metadata.Duration / this._state.width, this._view.drawTimeline(this._metadata, this._state.width), this.enableViewer(), !this.isViewerReady && this._onLoadingEnd()
}, convertTimeToPixels: function (e) {
    return e / this._onePixelDuration
}, convertPixelsToTime: function (e) {
    return e * this._onePixelDuration
}}), bcViewer.TimelineViewer.View = bcViewer.BaseViewer.View.extend({construct: function () {
    this._super.apply(this, arguments), this._minBlockWidth = 40, this._minSegmentWidth = this._minBlockWidth / 2, this._allowedBlockDurations = [1, 5, 10, 30, 60, 300, 600, 1800], this._tooltipIsInitialized = !1
}, _registerToEvents: function () {
    $$("#bc_viewer .bcv_event_viewer_canvases").on("click", $.proxy(this.onEventViewerCanvasesClicked, this)), $$("#bc_viewer .bcv_timeline_canvas").on("mousemove", $.proxy(this.onViewerMouseMove, this))
}, drawTimeline: function (e, t) {
    $$("#bc_viewer .bcv_timeline_header").text("(" + this._utils.formatTimeDuration(e.Duration, bcGlobals.locale.timeFormat) + ")");
    var n = Math.floor(e.StartTime / 1e3), i = e.Duration / 1e3, a = i / t, s = this._selectBlockDuration(i, a), o = s / a, r = Math.floor(o / this._minSegmentWidth), l = o / r, c = n + this._minSegmentWidth * a, u = c + s - (c + s) % s, h = (u - n) / a, d = h - o;
    this._canvas.drawTimeline({startTime: n, onePixelDuration: a, startDrawingAt: d, segmentWidth: l, numOfSegmentsPerBlock: r})
}, _selectBlockDuration: function (e, t) {
    var n, a = t * this._minBlockWidth;
    if (this._allowedBlockDurations.length - 1, a > this._allowedBlockDurations[this._allowedBlockDurations.length - 1])n = 3600 * Math.ceil(a / 3600); else for (i = 0; i < this._allowedBlockDurations.length; i++)if (a < this._allowedBlockDurations[i]) {
        n = this._allowedBlockDurations[i];
        break
    }
    return n
}, setCurrentTime: function (e) {
    var t = this._viewer.convertTimeToPixels(e);
    $$("#bc_viewer .bcv_time_indicator").css("left", t), this._tooltipIsInitialized || (this._canvas.initTooltip({content: this._viewer.getTimeFromStartString(e), track: !0}), this._tooltipIsInitialized = !0)
}, onEventViewerCanvasesClicked: function (e) {
    var t = e.pageX - $$("#bc_viewer .bcv_event_viewer_canvases").offset().left, n = this._viewer.convertPixelsToTime(t);
    this._viewer.onStateChangeRequest({timePosition: n})
}, getElementsToHide: function () {
    return[".bcv_timeline_header", ".bcv_timeline_canvas"]
}, onDragMove: function (e) {
    this.setCurrentTime(e)
}, onViewerMouseMove: function (e) {
    var t = e.pageX - $$("#bc_viewer .bcv_event_viewer_canvases").offset().left, n = this._viewer.convertPixelsToTime(t), i = this._viewer.getTimeFromStartString(n);
    this._canvas.changeTooltip(i)
}, disableViewer: function () {
    $$(".bcv_event_viewer_canvases").addClass("bcv_event_viewer_canvases_disabled"), this._super.apply(this, arguments)
}, enableViewer: function () {
    $$(".bcv_event_viewer_canvases").removeClass("bcv_event_viewer_canvases_disabled"), this._super.apply(this, arguments)
}}), bcViewer.HRViewer = bcViewer.BaseViewer.extend({construct: function () {
    this._super.apply(this, arguments), this._view = new bcViewer.HRViewer.View(this._globals, "#bc_viewer .bcv_hr_canvas", bcViewer.HRCanvas, this._state.width, this._state.height)
}, applyStateChanges: function (e, t) {
    this._super(e), t || this._dataFetcher.getHRData(this._state.width, this._state.height, $.proxy(this._view.onGotHRData, this._view))
}}), bcViewer.HRViewer.View = bcViewer.BaseViewer.View.extend({onGotHRData: function (e) {
    e.graph && (this._viewer.enableViewer(), this._canvas.draw(e.graph)), !this._viewer.isViewerReady && this._viewer._onLoadingEnd()
}, getElementsToHide: function () {
    return[".bcv_hr_header", ".bcv_hr_canvas"]
}, disableViewer: function () {
    $$(".bcv_hr_header").addClass("bcv_disabled_header"), this._super.apply(this, arguments)
}, enableViewer: function () {
    $$(".bcv_hr_header").removeClass("bcv_disabled_header"), this._super.apply(this, arguments)
}}), bcViewer.EventsViewer = bcViewer.BaseViewer.extend({construct: function () {
    this._super.apply(this, arguments), this._currentSelectedEventId, this._selectionUIUpdated = !1, this._data, this._eventsNP = {data: {}, currentRange: {start: -1, end: -1}}, this._view = new bcViewer.EventsViewer.View(this._globals, "#bc_viewer .bcv_events_canvas", bcViewer.EventCanvas, this._state.width, this._state.height)
}, applyStateChanges: function (e, t) {
    this._super(e), t || (this._dataFetcher.getEventsData(this._state.width, this._state.height, $.proxy(this.onGotEventsData, this)), this._fetchNewEventNPInfoIfNeeded(e.timePosition))
}, onGotEventsData: function (e) {
    this._data = e, $.isEmptyObject(this._data) || (this.enableViewer(), this._selectionUIUpdated || (this._view.updateEventSelection(e), this._currentSelectedEventId = "undefined" == typeof this._currentSelectedEventId ? this.config.DEFAULT_SELECTED_EVENT_ID : this._currentSelectedEventId, this._selectionUIUpdated = !0), this._view.selectEvent(this._currentSelectedEventId), this._updateEventNPRange(this._currentSelectedEventId)), !this.isViewerReady && this._onLoadingEnd()
}, onEventSelectedRequest: function (e) {
    this._currentSelectedEventId = e, this._view.drawEvent(e), this._updateEventNPRange(e), this._fetchNewEventNPInfoIfNeeded(this._state.timePosition)
}, _updateEventNPRange: function (e) {
    if ("undefined" != typeof this._currentSelectedEventId && "undefined" != typeof this._eventsNP.data[e]) {
        var t = this._eventsNP.data[e];
        t[0], this._eventsNP.currentRange.start = t[0], this._eventsNP.currentRange.end = t[t.length - 1]
    }
}, getNextEventPosition: function () {
    for (var e = this._state.timePosition, t = this._eventsNP.data[this._currentSelectedEventId], n = 0; n < t.length; n++)if (e < t[n])return t[n]
}, getPrevEventPosition: function () {
    for (var e = this._state.timePosition, t = this._eventsNP.data[this._currentSelectedEventId], n = t.length - 1; n >= 0; n--)if (e > t[n])return t[n]
}, onGotEventsNPInfo: function (e) {
    this._eventsNP.data = e, this._updateEventNPRange(this._currentSelectedEventId)
}, _fetchNewEventNPInfoIfNeeded: function (e) {
    "undefined" != typeof e && "undefined" != typeof this._currentSelectedEventId && (this._timePositionIsInNPRange(e) || this._dataFetcher.getEventsNPInfo(this._bcViewer.getRecordHash(), e, $.proxy(this.onGotEventsNPInfo, this)))
}, _timePositionIsInNPRange: function (e) {
    return e > this._eventsNP.currentRange.start && e < this._eventsNP.currentRange.end
}, getData: function () {
    return this._data
}}), bcViewer.EventsViewer.View = bcViewer.BaseViewer.View.extend({construct: function () {
    this._super.apply(this, arguments)
}, _registerToEvents: function () {
    $$("#bc_viewer .bcv_events_viewer_header .bcv_event_prev").on("click", $.proxy(this.onPrevEventClicked, this)), $$("#bc_viewer .bcv_events_viewer_header .bcv_event_next").on("click", $.proxy(this.onNextEventClicked, this)), $$(".bcv_events_list").on("change", $.proxy(this.onEventSelected, this))
}, updateEventSelection: function (e) {
    this._buildEventsDropdown(this._config.EVENTS_LIST, e)
}, selectEvent: function (e) {
    $$(".bcv_events_list").val(e), this.onEventSelected()
}, getSelectedEventId: function () {
    return $$(".bcv_events_list").find(":selected").val()
}, onEventSelected: function () {
    this._viewer.onEventSelectedRequest(this.getSelectedEventId())
}, onPrevEventClicked: function () {
    var e = this._viewer.getPrevEventPosition();
    e && this._viewer.onStateChangeRequest({timePosition: e})
}, onNextEventClicked: function () {
    var e = this._viewer.getNextEventPosition();
    e && this._viewer.onStateChangeRequest({timePosition: e})
}, drawEvent: function (e) {
    var t = this._viewer.getData(), n = t[e];
    this._canvas.draw(n.lines)
}, _buildEventsDropdown: function (e, t) {
    optionsData = [], $.each(t, function (e, t) {
        var n = t.lines.length;
        if (n > 0) {
            var i = bcGlobals.locale.events["e_" + e] + " (" + t.lines.length + ")";
            optionsData.push({value: e, text: i})
        }
    }), $$(".bcv_events_list").append($("#bcv_dropdown_option").tmpl(optionsData))
}, getElementsToHide: function () {
    return[".bcv_events_header", ".bcv_events_canvas"]
}, disableViewer: function () {
    $$(".bcv_events_list").prop("disabled", !0), $$(".bcv_event_button").prop("disabled", !0), this._super.apply(this, arguments)
}, enableViewer: function () {
    $$(".bcv_events_list").removeProp("disabled"), $$(".bcv_event_button").removeProp("disabled"), this._super.apply(this, arguments)
}});