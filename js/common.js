/* Start:"a:4:{s:4:"full";s:53:"/local/templates/neopolis/js/main.js?1718821715339229";s:6:"source";s:36:"/local/templates/neopolis/js/main.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* libs */
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        r = e.document,
        i = Object.getPrototypeOf,
        o = n.slice,
        a = n.concat,
        s = n.push,
        u = n.indexOf,
        l = {},
        c = l.toString,
        f = l.hasOwnProperty,
        p = f.toString,
        d = p.call(Object),
        h = {},
        g = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType;
        },
        y = function e(t) {
            return null != t && t === t.window;
        },
        v = { type: !0, src: !0, noModule: !0 };
    function m(e, t, n) {
        var i,
            o = (t = t || r).createElement("script");
        if (((o.text = e), n)) for (i in v) n[i] && (o[i] = n[i]);
        t.head.appendChild(o).parentNode.removeChild(o);
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
    }
    var b = "3.3.1",
        w = function (e, t) {
            return new w.fn.init(e, t);
        },
        T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (w.fn = w.prototype = {
        jquery: "3.3.1",
        constructor: w,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return w.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                w.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: s,
        sort: n.sort,
        splice: n.splice,
    }),
        (w.extend = w.fn.extend = function () {
            var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || g(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (n = a[t]),
                            a !== (r = e[t]) &&
                                (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                                    ? (i ? ((i = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && w.isPlainObject(n) ? n : {}), (a[t] = w.extend(l, o, r)))
                                    : void 0 !== r && (a[t] = r));
            return a;
        }),
        w.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e) {
                m(e);
            },
            each: function (e, t) {
                var n,
                    r = 0;
                if (C(e)) {
                    for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
                } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(T, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : u.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var r,
                    i,
                    o = 0,
                    s = [];
                if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
                else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                return a.apply([], s);
            },
            guid: 1,
            support: h,
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
        });
    function C(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !g(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
    }
    var E = (function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f,
            p,
            d,
            h,
            g,
            y,
            v,
            m,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            E = ae(),
            k = ae(),
            S = ae(),
            D = function (e, t) {
                return e === t && (f = !0), 0;
            },
            N = {}.hasOwnProperty,
            A = [],
            j = A.pop,
            q = A.push,
            L = A.push,
            H = A.slice,
            O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1;
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            F = new RegExp("^" + M + "*," + M + "*"),
            _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            X = new RegExp(W),
            U = new RegExp("^" + R + "$"),
            V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i"),
            },
            G = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            K = /[+~]/,
            Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ne = function (e, t) {
                return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            re = function () {
                p();
            },
            ie = me(
                function (e) {
                    return !0 === e.disabled && ("form" in e || "label" in e);
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            L.apply((A = H.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
        } catch (e) {
            L = {
                apply: A.length
                    ? function (e, t) {
                          q.apply(e, H.call(t));
                      }
                    : function (e, t) {
                          var n = e.length,
                              r = 0;
                          while ((e[n++] = t[r++]));
                          e.length = n - 1;
                      },
            };
        }
        function oe(e, t, r, i) {
            var o,
                s,
                l,
                c,
                f,
                h,
                v,
                m = t && t.ownerDocument,
                T = t ? t.nodeType : 9;
            if (((r = r || []), "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return r;
            if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)) {
                if (11 !== T && (f = J.exec(e)))
                    if ((o = f[1])) {
                        if (9 === T) {
                            if (!(l = t.getElementById(o))) return r;
                            if (l.id === o) return r.push(l), r;
                        } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
                    } else {
                        if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(r, t.getElementsByClassName(o)), r;
                    }
                if (n.qsa && !S[e + " "] && (!y || !y.test(e))) {
                    if (1 !== T) (m = t), (v = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        (c = t.getAttribute("id")) ? (c = c.replace(te, ne)) : t.setAttribute("id", (c = b)), (s = (h = a(e)).length);
                        while (s--) h[s] = "#" + c + " " + ve(h[s]);
                        (v = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
                    }
                    if (v)
                        try {
                            return L.apply(r, m.querySelectorAll(v)), r;
                        } catch (e) {
                        } finally {
                            c === b && t.removeAttribute("id");
                        }
                }
            }
            return u(e.replace(B, "$1"), t, r, i);
        }
        function ae() {
            var e = [];
            function t(n, i) {
                return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
            }
            return t;
        }
        function se(e) {
            return (e[b] = !0), e;
        }
        function ue(e) {
            var t = d.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function le(e, t) {
            var n = e.split("|"),
                i = n.length;
            while (i--) r.attrHandle[n[i]] = t;
        }
        function ce(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while ((n = n.nextSibling)) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function de(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function he(e) {
            return se(function (t) {
                return (
                    (t = +t),
                    se(function (n, r) {
                        var i,
                            o = e([], n.length, t),
                            a = o.length;
                        while (a--) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        (n = oe.support = {}),
            (o = oe.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName;
            }),
            (p = oe.setDocument = function (e) {
                var t,
                    i,
                    a = e ? e.ownerDocument || e : w;
                return a !== d && 9 === a.nodeType && a.documentElement
                    ? ((d = a),
                      (h = d.documentElement),
                      (g = !o(d)),
                      w !== d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                      (n.attributes = ue(function (e) {
                          return (e.className = "i"), !e.getAttribute("className");
                      })),
                      (n.getElementsByTagName = ue(function (e) {
                          return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
                      })),
                      (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
                      (n.getById = ue(function (e) {
                          return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
                      })),
                      n.getById
                          ? ((r.filter.ID = function (e) {
                                var t = e.replace(Z, ee);
                                return function (e) {
                                    return e.getAttribute("id") === t;
                                };
                            }),
                            (r.find.ID = function (e, t) {
                                if ("undefined" != typeof t.getElementById && g) {
                                    var n = t.getElementById(e);
                                    return n ? [n] : [];
                                }
                            }))
                          : ((r.filter.ID = function (e) {
                                var t = e.replace(Z, ee);
                                return function (e) {
                                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t;
                                };
                            }),
                            (r.find.ID = function (e, t) {
                                if ("undefined" != typeof t.getElementById && g) {
                                    var n,
                                        r,
                                        i,
                                        o = t.getElementById(e);
                                    if (o) {
                                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        (i = t.getElementsByName(e)), (r = 0);
                                        while ((o = i[r++])) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                    }
                                    return [];
                                }
                            })),
                      (r.find.TAG = n.getElementsByTagName
                          ? function (e, t) {
                                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                            }
                          : function (e, t) {
                                var n,
                                    r = [],
                                    i = 0,
                                    o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                                    return r;
                                }
                                return o;
                            }),
                      (r.find.CLASS =
                          n.getElementsByClassName &&
                          function (e, t) {
                              if ("undefined" != typeof t.getElementsByClassName && g) return t.getElementsByClassName(e);
                          }),
                      (v = []),
                      (y = []),
                      (n.qsa = Q.test(d.querySelectorAll)) &&
                          (ue(function (e) {
                              (h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                  e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"),
                                  e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"),
                                  e.querySelectorAll("[id~=" + b + "-]").length || y.push("~="),
                                  e.querySelectorAll(":checked").length || y.push(":checked"),
                                  e.querySelectorAll("a#" + b + "+*").length || y.push(".#.+[+~]");
                          }),
                          ue(function (e) {
                              e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                              var t = d.createElement("input");
                              t.setAttribute("type", "hidden"),
                                  e.appendChild(t).setAttribute("name", "D"),
                                  e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="),
                                  2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"),
                                  (h.appendChild(e).disabled = !0),
                                  2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"),
                                  e.querySelectorAll("*,:x"),
                                  y.push(",.*:");
                          })),
                      (n.matchesSelector = Q.test((m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                          ue(function (e) {
                              (n.disconnectedMatch = m.call(e, "*")), m.call(e, "[s!='']:x"), v.push("!=", W);
                          }),
                      (y = y.length && new RegExp(y.join("|"))),
                      (v = v.length && new RegExp(v.join("|"))),
                      (t = Q.test(h.compareDocumentPosition)),
                      (x =
                          t || Q.test(h.contains)
                              ? function (e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        r = t && t.parentNode;
                                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                                }
                              : function (e, t) {
                                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                                    return !1;
                                }),
                      (D = t
                          ? function (e, t) {
                                if (e === t) return (f = !0), 0;
                                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return (
                                    r ||
                                    (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === r)
                                        ? e === d || (e.ownerDocument === w && x(w, e))
                                            ? -1
                                            : t === d || (t.ownerDocument === w && x(w, t))
                                            ? 1
                                            : c
                                            ? O(c, e) - O(c, t)
                                            : 0
                                        : 4 & r
                                        ? -1
                                        : 1)
                                );
                            }
                          : function (e, t) {
                                if (e === t) return (f = !0), 0;
                                var n,
                                    r = 0,
                                    i = e.parentNode,
                                    o = t.parentNode,
                                    a = [e],
                                    s = [t];
                                if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                                if (i === o) return ce(e, t);
                                n = e;
                                while ((n = n.parentNode)) a.unshift(n);
                                n = t;
                                while ((n = n.parentNode)) s.unshift(n);
                                while (a[r] === s[r]) r++;
                                return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                            }),
                      d)
                    : d;
            }),
            (oe.matches = function (e, t) {
                return oe(e, null, null, t);
            }),
            (oe.matchesSelector = function (e, t) {
                if (((e.ownerDocument || e) !== d && p(e), (t = t.replace(z, "='$1']")), n.matchesSelector && g && !S[t + " "] && (!v || !v.test(t)) && (!y || !y.test(t))))
                    try {
                        var r = m.call(e, t);
                        if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
                    } catch (e) {}
                return oe(t, d, null, [e]).length > 0;
            }),
            (oe.contains = function (e, t) {
                return (e.ownerDocument || e) !== d && p(e), x(e, t);
            }),
            (oe.attr = function (e, t) {
                (e.ownerDocument || e) !== d && p(e);
                var i = r.attrHandle[t.toLowerCase()],
                    o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
            }),
            (oe.escape = function (e) {
                return (e + "").replace(te, ne);
            }),
            (oe.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (oe.uniqueSort = function (e) {
                var t,
                    r = [],
                    i = 0,
                    o = 0;
                if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(D), f)) {
                    while ((t = e[o++])) t === e[o] && (i = r.push(o));
                    while (i--) e.splice(r[i], 1);
                }
                return (c = null), e;
            }),
            (i = oe.getText = function (e) {
                var t,
                    n = "",
                    r = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                    } else if (3 === o || 4 === o) return e.nodeValue;
                } else while ((t = e[r++])) n += i(t);
                return n;
            }),
            ((r = oe.selectors = {
                cacheLength: 50,
                createPseudo: se,
                match: V,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: {
                    ATTR: function (e) {
                        return (e[1] = e[1].replace(Z, ee)), (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return V.CHILD.test(e[0])
                            ? null
                            : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(Z, ee).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return e.nodeName && e.nodeName.toLowerCase() === t;
                              };
                    },
                    CLASS: function (e) {
                        var t = E[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                                E(e, function (e) {
                                    return t.test(("string" == typeof e.className && e.className) || ("undefined" != typeof e.getAttribute && e.getAttribute("class")) || "");
                                }))
                        );
                    },
                    ATTR: function (e, t, n) {
                        return function (r) {
                            var i = oe.attr(r, e);
                            return null == i
                                ? "!=" === t
                                : !t ||
                                      ((i += ""),
                                      "=" === t
                                          ? i === n
                                          : "!=" === t
                                          ? i !== n
                                          : "^=" === t
                                          ? n && 0 === i.indexOf(n)
                                          : "*=" === t
                                          ? n && i.indexOf(n) > -1
                                          : "$=" === t
                                          ? n && i.slice(-n.length) === n
                                          : "~=" === t
                                          ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                                          : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                        };
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (t, n, u) {
                                  var l,
                                      c,
                                      f,
                                      p,
                                      d,
                                      h,
                                      g = o !== a ? "nextSibling" : "previousSibling",
                                      y = t.parentNode,
                                      v = s && t.nodeName.toLowerCase(),
                                      m = !u && !s,
                                      x = !1;
                                  if (y) {
                                      if (o) {
                                          while (g) {
                                              p = t;
                                              while ((p = p[g])) if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                              h = g = "only" === e && !h && "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (((h = [a ? y.firstChild : y.lastChild]), a && m)) {
                                          (x = (d = (l = (c = (f = (p = y)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2]), (p = d && y.childNodes[d]);
                                          while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                              if (1 === p.nodeType && ++x && p === t) {
                                                  c[e] = [T, d, x];
                                                  break;
                                              }
                                      } else if ((m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x))
                                          while ((p = (++d && p && p[g]) || (x = d = 0) || h.pop()))
                                              if ((s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) && ++x && (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p === t)) break;
                                      return (x -= i) === r || (x % r == 0 && x / r >= 0);
                                  }
                              };
                    },
                    PSEUDO: function (e, t) {
                        var n,
                            i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                        return i[b]
                            ? i(t)
                            : i.length > 1
                            ? ((n = [e, e, "", t]),
                              r.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? se(function (e, n) {
                                        var r,
                                            o = i(e, t),
                                            a = o.length;
                                        while (a--) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                                    })
                                  : function (e) {
                                        return i(e, 0, n);
                                    })
                            : i;
                    },
                },
                pseudos: {
                    not: se(function (e) {
                        var t = [],
                            n = [],
                            r = s(e.replace(B, "$1"));
                        return r[b]
                            ? se(function (e, t, n, i) {
                                  var o,
                                      a = r(e, null, i, []),
                                      s = e.length;
                                  while (s--) (o = a[s]) && (e[s] = !(t[s] = o));
                              })
                            : function (e, i, o) {
                                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                              };
                    }),
                    has: se(function (e) {
                        return function (t) {
                            return oe(e, t).length > 0;
                        };
                    }),
                    contains: se(function (e) {
                        return (
                            (e = e.replace(Z, ee)),
                            function (t) {
                                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
                            }
                        );
                    }),
                    lang: se(function (e) {
                        return (
                            U.test(e || "") || oe.error("unsupported lang: " + e),
                            (e = e.replace(Z, ee).toLowerCase()),
                            function (t) {
                                var n;
                                do {
                                    if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === h;
                    },
                    focus: function (e) {
                        return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                    },
                    enabled: de(!1),
                    disabled: de(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !r.pseudos.empty(e);
                    },
                    header: function (e) {
                        return Y.test(e.nodeName);
                    },
                    input: function (e) {
                        return G.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                    },
                    first: he(function () {
                        return [0];
                    }),
                    last: he(function (e, t) {
                        return [t - 1];
                    }),
                    eq: he(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: he(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: he(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: he(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                        return e;
                    }),
                    gt: he(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                    }),
                },
            }).pseudos.nth = r.pseudos.eq);
        for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) r.pseudos[t] = fe(t);
        for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
        function ye() {}
        (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = oe.tokenize = function (e, t) {
                var n,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = k[e + " "];
                if (c) return t ? 0 : c.slice(0);
                (s = e), (u = []), (l = r.preFilter);
                while (s) {
                    (n && !(i = F.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))), (n = !1), (i = _.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(B, " ") }), (s = s.slice(n.length)));
                    for (a in r.filter) !(i = V[a].exec(s)) || (l[a] && !(i = l[a](i))) || ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
            });
        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function me(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                s = C++;
            return t.first
                ? function (t, n, i) {
                      while ((t = t[r])) if (1 === t.nodeType || a) return e(t, n, i);
                      return !1;
                  }
                : function (t, n, u) {
                      var l,
                          c,
                          f,
                          p = [T, s];
                      if (u) {
                          while ((t = t[r])) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                      } else
                          while ((t = t[r]))
                              if (1 === t.nodeType || a)
                                  if (((f = t[b] || (t[b] = {})), (c = f[t.uniqueID] || (f[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[r] || t;
                                  else {
                                      if ((l = c[o]) && l[0] === T && l[1] === s) return (p[2] = l[2]);
                                      if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                                  }
                      return !1;
                  };
        }
        function xe(e) {
            return e.length > 1
                ? function (t, n, r) {
                      var i = e.length;
                      while (i--) if (!e[i](t, n, r)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n;
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
            return a;
        }
        function Te(e, t, n, r, i, o) {
            return (
                r && !r[b] && (r = Te(r)),
                i && !i[b] && (i = Te(i, o)),
                se(function (o, a, s, u) {
                    var l,
                        c,
                        f,
                        p = [],
                        d = [],
                        h = a.length,
                        g = o || be(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || (!o && t) ? g : we(g, p, e, s, u),
                        v = n ? (i || (o ? e : h || r) ? [] : a) : y;
                    if ((n && n(y, v, s, u), r)) {
                        (l = we(v, d)), r(l, [], s, u), (c = l.length);
                        while (c--) (f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                (l = []), (c = v.length);
                                while (c--) (f = v[c]) && l.push((y[c] = f));
                                i(null, (v = []), l, u);
                            }
                            c = v.length;
                            while (c--) (f = v[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
                        }
                    } else (v = we(v === a ? v.splice(h, v.length) : v)), i ? i(null, a, v, u) : L.apply(a, v);
                })
            );
        }
        function Ce(e) {
            for (
                var t,
                    n,
                    i,
                    o = e.length,
                    a = r.relative[e[0].type],
                    s = a || r.relative[" "],
                    u = a ? 1 : 0,
                    c = me(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    f = me(
                        function (e) {
                            return O(t, e) > -1;
                        },
                        s,
                        !0
                    ),
                    p = [
                        function (e, n, r) {
                            var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                            return (t = null), i;
                        },
                    ];
                u < o;
                u++
            )
                if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
                else {
                    if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                        for (i = ++u; i < o; i++) if (r.relative[e[i].type]) break;
                        return Te(u > 1 && xe(p), u > 1 && ve(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"), n, u < i && Ce(e.slice(u, i)), i < o && Ce((e = e.slice(i))), i < o && ve(e));
                    }
                    p.push(n);
                }
            return xe(p);
        }
        function Ee(e, t) {
            var n = t.length > 0,
                i = e.length > 0,
                o = function (o, a, s, u, c) {
                    var f,
                        h,
                        y,
                        v = 0,
                        m = "0",
                        x = o && [],
                        b = [],
                        w = l,
                        C = o || (i && r.find.TAG("*", c)),
                        E = (T += null == w ? 1 : Math.random() || 0.1),
                        k = C.length;
                    for (c && (l = a === d || a || c); m !== k && null != (f = C[m]); m++) {
                        if (i && f) {
                            (h = 0), a || f.ownerDocument === d || (p(f), (s = !g));
                            while ((y = e[h++]))
                                if (y(f, a || d, s)) {
                                    u.push(f);
                                    break;
                                }
                            c && (T = E);
                        }
                        n && ((f = !y && f) && v--, o && x.push(f));
                    }
                    if (((v += m), n && m !== v)) {
                        h = 0;
                        while ((y = t[h++])) y(x, b, a, s);
                        if (o) {
                            if (v > 0) while (m--) x[m] || b[m] || (b[m] = j.call(u));
                            b = we(b);
                        }
                        L.apply(u, b), c && !o && b.length > 0 && v + t.length > 1 && oe.uniqueSort(u);
                    }
                    return c && ((T = E), (l = w)), x;
                };
            return n ? se(o) : o;
        }
        return (
            (s = oe.compile = function (e, t) {
                var n,
                    r = [],
                    i = [],
                    o = S[e + " "];
                if (!o) {
                    t || (t = a(e)), (n = t.length);
                    while (n--) (o = Ce(t[n]))[b] ? r.push(o) : i.push(o);
                    (o = S(e, Ee(i, r))).selector = e;
                }
                return o;
            }),
            (u = oe.select = function (e, t, n, i) {
                var o,
                    u,
                    l,
                    c,
                    f,
                    p = "function" == typeof e && e,
                    d = !i && a((e = p.selector || e));
                if (((n = n || []), 1 === d.length)) {
                    if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                        if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
                        p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
                    }
                    o = V.needsContext.test(e) ? 0 : u.length;
                    while (o--) {
                        if (((l = u[o]), r.relative[(c = l.type)])) break;
                        if ((f = r.find[c]) && (i = f(l.matches[0].replace(Z, ee), (K.test(u[0].type) && ge(t.parentNode)) || t))) {
                            if ((u.splice(o, 1), !(e = i.length && ve(u)))) return L.apply(n, i), n;
                            break;
                        }
                    }
                }
                return (p || s(e, d))(i, t, !g, n, !t || (K.test(e) && ge(t.parentNode)) || t), n;
            }),
            (n.sortStable = b.split("").sort(D).join("") === b),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ue(function (e) {
                return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ue(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                le("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                ue(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                le("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ue(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                le(P, function (e, t, n) {
                    var r;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
            oe
        );
    })(e);
    (w.find = E), (w.expr = E.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = E.uniqueSort), (w.text = E.getText), (w.isXMLDoc = E.isXML), (w.contains = E.contains), (w.escapeSelector = E.escape);
    var k = function (e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && w(e).is(n)) break;
                    r.push(e);
                }
            return r;
        },
        S = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        D = w.expr.match.needsContext;
    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function j(e, t, n) {
        return g(t)
            ? w.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
              })
            : t.nodeType
            ? w.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : "string" != typeof t
            ? w.grep(e, function (e) {
                  return u.call(t, e) > -1 !== n;
              })
            : w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? w.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : w.find.matches(
                      e,
                      w.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        w.fn.extend({
            find: function (e) {
                var t,
                    n,
                    r = this.length,
                    i = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        w(e).filter(function () {
                            for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
                return r > 1 ? w.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(j(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(j(this, e || [], !0));
            },
            is: function (e) {
                return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
            },
        });
    var q,
        L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || q), "string" == typeof e)) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), A.test(i[1]) && w.isPlainObject(t))) for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : g(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
    }).prototype = w.fn),
        (q = w(r));
    var H = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!D.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    });
    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e;
    }
    w.each(
        {
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
                return k(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
                return k(e, "parentNode", n);
            },
            next: function (e) {
                return P(e, "nextSibling");
            },
            prev: function (e) {
                return P(e, "previousSibling");
            },
            nextAll: function (e) {
                return k(e, "nextSibling");
            },
            prevAll: function (e) {
                return k(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
                return k(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
                return k(e, "previousSibling", n);
            },
            siblings: function (e) {
                return S((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
                return S(e.firstChild);
            },
            contents: function (e) {
                return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
            },
        },
        function (e, t) {
            w.fn[e] = function (n, r) {
                var i = w.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()), this.pushStack(i);
            };
        }
    );
    var M = /[^\x20\t\r\n\f]+/g;
    function R(e) {
        var t = {};
        return (
            w.each(e.match(M) || [], function (e, n) {
                t[n] = !0;
            }),
            t
        );
    }
    w.Callbacks = function (e) {
        e = "string" == typeof e ? R(e) : w.extend({}, e);
        var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function () {
                for (i = i || e.once, r = t = !0; a.length; s = -1) {
                    n = a.shift();
                    while (++s < o.length) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1));
                }
                e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
            },
            l = {
                add: function () {
                    return (
                        o &&
                            (n && !t && ((s = o.length - 1), a.push(n)),
                            (function t(n) {
                                w.each(n, function (n, r) {
                                    g(r) ? (e.unique && l.has(r)) || o.push(r) : r && r.length && "string" !== x(r) && t(r);
                                });
                            })(arguments),
                            n && !t && u()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (e, t) {
                            var n;
                            while ((n = w.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? w.inArray(e, o) > -1 : o.length > 0;
                },
                empty: function () {
                    return o && (o = []), this;
                },
                disable: function () {
                    return (i = a = []), (o = n = ""), this;
                },
                disabled: function () {
                    return !o;
                },
                lock: function () {
                    return (i = a = []), n || t || (o = n = ""), this;
                },
                locked: function () {
                    return !!i;
                },
                fireWith: function (e, n) {
                    return i || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || u()), this;
                },
                fire: function () {
                    return l.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return l;
    };
    function I(e) {
        return e;
    }
    function W(e) {
        throw e;
    }
    function $(e, t, n, r) {
        var i;
        try {
            e && g((i = e.promise)) ? i.call(e).done(t).fail(n) : e && g((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    w.extend({
        Deferred: function (t) {
            var n = [
                    ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                    ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                ],
                r = "pending",
                i = {
                    state: function () {
                        return r;
                    },
                    always: function () {
                        return o.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                        return i.then(null, e);
                    },
                    pipe: function () {
                        var e = arguments;
                        return w
                            .Deferred(function (t) {
                                w.each(n, function (n, r) {
                                    var i = g(e[r[4]]) && e[r[4]];
                                    o[r[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
                                    });
                                }),
                                    (e = null);
                            })
                            .promise();
                    },
                    then: function (t, r, i) {
                        var o = 0;
                        function a(t, n, r, i) {
                            return function () {
                                var s = this,
                                    u = arguments,
                                    l = function () {
                                        var e, l;
                                        if (!(t < o)) {
                                            if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            (l = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                g(l)
                                                    ? i
                                                        ? l.call(e, a(o, n, I, i), a(o, n, W, i))
                                                        : (o++, l.call(e, a(o, n, I, i), a(o, n, W, i), a(o, n, I, n.notifyWith)))
                                                    : (r !== I && ((s = void 0), (u = [e])), (i || n.resolveWith)(s, u));
                                        }
                                    },
                                    c = i
                                        ? l
                                        : function () {
                                              try {
                                                  l();
                                              } catch (e) {
                                                  w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= o && (r !== W && ((s = void 0), (u = [e])), n.rejectWith(s, u));
                                              }
                                          };
                                t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                            };
                        }
                        return w
                            .Deferred(function (e) {
                                n[0][3].add(a(0, e, g(i) ? i : I, e.notifyWith)), n[1][3].add(a(0, e, g(t) ? t : I)), n[2][3].add(a(0, e, g(r) ? r : W));
                            })
                            .promise();
                    },
                    promise: function (e) {
                        return null != e ? w.extend(e, i) : i;
                    },
                },
                o = {};
            return (
                w.each(n, function (e, t) {
                    var a = t[2],
                        s = t[5];
                    (i[t[1]] = a.add),
                        s &&
                            a.add(
                                function () {
                                    r = s;
                                },
                                n[3 - e][2].disable,
                                n[3 - e][3].disable,
                                n[0][2].lock,
                                n[0][3].lock
                            ),
                        a.add(t[3].fire),
                        (o[t[0]] = function () {
                            return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                        }),
                        (o[t[0] + "With"] = a.fireWith);
                }),
                i.promise(o),
                t && t.call(o, o),
                o
            );
        },
        when: function (e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = o.call(arguments),
                a = w.Deferred(),
                s = function (e) {
                    return function (n) {
                        (r[e] = this), (i[e] = arguments.length > 1 ? o.call(arguments) : n), --t || a.resolveWith(r, i);
                    };
                };
            if (t <= 1 && ($(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
            while (n--) $(i[n], s(n), a.reject);
            return a.promise();
        },
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && B.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (w.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var F = w.Deferred();
    (w.fn.ready = function (e) {
        return (
            F.then(e)["catch"](function (e) {
                w.readyException(e);
            }),
            this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0), (!0 !== e && --w.readyWait > 0) || F.resolveWith(r, [w]));
            },
        }),
        (w.ready.then = F.then);
    function _() {
        r.removeEventListener("DOMContentLoaded", _), e.removeEventListener("load", _), w.ready();
    }
    "complete" === r.readyState || ("loading" !== r.readyState && !r.documentElement.doScroll) ? e.setTimeout(w.ready) : (r.addEventListener("DOMContentLoaded", _), e.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === x(n)) {
                i = !0;
                for (s in n) z(e, t, s, n[s], !0, o, a);
            } else if (
                void 0 !== r &&
                ((i = !0),
                g(r) || (a = !0),
                l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                              return l.call(w(e), n);
                          }))),
                t)
            )
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        X = /^-ms-/,
        U = /-([a-z])/g;
    function V(e, t) {
        return t.toUpperCase();
    }
    function G(e) {
        return e.replace(X, "ms-").replace(U, V);
    }
    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function Q() {
        this.expando = w.expando + Q.uid++;
    }
    (Q.uid = 1),
        (Q.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), Y(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var r,
                    i = this.cache(e);
                if ("string" == typeof t) i[G(t)] = n;
                else for (r in t) i[G(r)] = t[r];
                return i;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                        while (n--) delete r[t[n]];
                    }
                    (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
            },
        });
    var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
    function te(e) {
        return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e));
    }
    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (((r = "data-" + t.replace(ee, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
                try {
                    n = te(n);
                } catch (e) {}
                K.set(e, t, n);
            } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function (e, t) {
            K.remove(e, t);
        },
        _data: function (e, t, n) {
            return J.access(e, t, n);
        },
        _removeData: function (e, t) {
            J.remove(e, t);
        },
    }),
        w.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                        n = a.length;
                        while (n--) a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = G(r.slice(5))), ne(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          K.set(this, e);
                      })
                    : z(
                          this,
                          function (t) {
                              var n;
                              if (o && void 0 === t) {
                                  if (void 0 !== (n = K.get(o, e))) return n;
                                  if (void 0 !== (n = ne(o, e))) return n;
                              } else
                                  this.each(function () {
                                      K.set(this, e, t);
                                  });
                          },
                          null,
                          t,
                          arguments.length > 1,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    K.remove(this, e);
                });
            },
        }),
        w.extend({
            queue: function (e, t, n) {
                var r;
                if (e) return (t = (t || "fx") + "queue"), (r = J.get(e, t)), n && (!r || Array.isArray(n) ? (r = J.access(e, t, w.makeArray(n))) : r.push(n)), r || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = w._queueHooks(e, t),
                    a = function () {
                        w.dequeue(e, t);
                    };
                "inprogress" === i && ((i = n.shift()), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    J.get(e, n) ||
                    J.access(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            J.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? w.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = w.queue(this, e, t);
                              w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = w.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
                while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ae = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display"));
        },
        se = function (e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        };
    function ue(e, t, n, r) {
        var i,
            o,
            a = 20,
            s = r
                ? function () {
                      return r.cur();
                  }
                : function () {
                      return w.css(e, t, "");
                  },
            u = s(),
            l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
            c = (w.cssNumber[t] || ("px" !== l && +u)) && ie.exec(w.css(e, t));
        if (c && c[3] !== l) {
            (u /= 2), (l = l || c[3]), (c = +u || 1);
            while (a--) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), w.style(e, t, c + l), (n = n || []);
        }
        return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
    }
    var le = {};
    function ce(e) {
        var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = le[r];
        return i || ((t = n.body.appendChild(n.createElement(r))), (i = w.css(t, "display")), t.parentNode.removeChild(t), "none" === i && (i = "block"), (le[r] = i), i);
    }
    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style &&
                ((n = r.style.display),
                t ? ("none" === n && ((i[o] = J.get(r, "display") || null), i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return fe(this, !0);
        },
        hide: function () {
            return fe(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? w(this).show() : w(this).hide();
                  });
        },
    });
    var pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
    function ye(e, t) {
        var n;
        return (n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n;
    }
    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
    }
    var me = /<|&#?\w+;/;
    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    (a = a || f.appendChild(t.createElement("div"))), (s = (de.exec(o) || ["", ""])[1].toLowerCase()), (u = ge[s] || ge._default), (a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2]), (c = u[0]);
                    while (c--) a = a.lastChild;
                    w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(o));
        (f.textContent = ""), (d = 0);
        while ((o = p[d++]))
            if (r && w.inArray(o, r) > -1) i && i.push(o);
            else if (((l = w.contains(o.ownerDocument, o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)) {
                c = 0;
                while ((o = a[c++])) he.test(o.type || "") && n.push(o);
            }
        return f;
    }
    !(function () {
        var e = r.createDocumentFragment().appendChild(r.createElement("div")),
            t = r.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            (h.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (h.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
    })();
    var be = r.documentElement,
        we = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;
    function Ee() {
        return !0;
    }
    function ke() {
        return !1;
    }
    function Se() {
        try {
            return r.activeElement;
        } catch (e) {}
    }
    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && ((r = r || n), (n = void 0));
            for (s in t) De(e, s, n, r, t[s], o);
            return e;
        }
        if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = ke;
        else if (!i) return e;
        return (
            1 === o &&
                ((a = i),
                ((i = function (e) {
                    return w().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++))),
            e.each(function () {
                w.event.add(this, t, i, r, n);
            })
        );
    }
    (w.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.get(e);
            if (y) {
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                    i && w.find.matchesSelector(be, i),
                    n.guid || (n.guid = w.guid++),
                    (u = y.events) || (u = y.events = {}),
                    (a = y.handle) ||
                        (a = y.handle = function (t) {
                            return "undefined" != typeof w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                        }),
                    (l = (t = (t || "").match(M) || [""]).length);
                while (l--)
                    (d = g = (s = Ce.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        d &&
                            ((f = w.event.special[d] || {}),
                            (d = (i ? f.delegateType : f.bindType) || d),
                            (f = w.event.special[d] || {}),
                            (c = w.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o)),
                            (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
                            f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                            i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                            (w.event.global[d] = !0));
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--)
                    if (((s = Ce.exec(t[l]) || []), (d = g = s[1]), (h = (s[2] || "").split(".").sort()), d)) {
                        (f = w.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")), (a = o = p.length);
                        while (o--)
                            (c = p[o]),
                                (!i && g !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                                    (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) || w.removeEvent(e, d, y.handle), delete u[d]);
                    } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
                w.isEmptyObject(u) && J.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t = w.event.fix(e),
                n,
                r,
                i,
                o,
                a,
                s,
                u = new Array(arguments.length),
                l = (J.get(this, "events") || {})[t.type] || [],
                c = w.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (((t.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, t))) {
                (s = w.event.handlers.call(this, t, l)), (n = 0);
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    (t.currentTarget = o.elem), (r = 0);
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped())
                        (t.rnamespace && !t.rnamespace.test(a.namespace)) ||
                            ((t.handleObj = a), (t.data = a.data), void 0 !== (i = ((w.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + " ")] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                    }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: g(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
                },
                _default: function (e) {
                    return N(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (w.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function (e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ee : ke),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: ke,
            isPropagationStopped: ke,
            isImmediatePropagationStopped: ke,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ee), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ee), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ee), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        w.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && we.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Te.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            w.event.addProp
        ),
        w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return (i && (i === r || w.contains(r, i))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        w.fn.extend({
            on: function (e, t, n, r) {
                return De(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return De(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = ke),
                    this.each(function () {
                        w.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ae = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? w(e).children("tbody")[0] || e : e;
    }
    function He(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && ((o = J.access(e)), (a = J.set(t, o)), (l = o.events))) {
                delete a.handle, (a.events = {});
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
            }
            K.hasData(e) && ((s = K.access(e)), (u = w.extend({}, s)), K.set(t, u));
        }
    }
    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
    }
    function Re(e, t, n, r) {
        t = a.apply([], t);
        var i,
            o,
            s,
            u,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            y = t[0],
            v = g(y);
        if (v || (p > 1 && "string" == typeof y && !h.checkClone && je.test(y)))
            return e.each(function (i) {
                var o = e.eq(i);
                v && (t[0] = y.call(this, i, o.html())), Re(o, t, n, r);
            });
        if (p && ((i = xe(t, e[0].ownerDocument, !1, e, r)), (o = i.firstChild), 1 === i.childNodes.length && (i = o), o || r)) {
            for (u = (s = w.map(ye(i, "script"), He)).length; f < p; f++) (l = i), f !== d && ((l = w.clone(l, !0, !0)), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
            if (u)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < u; f++)
                    (l = s[f]), he.test(l.type || "") && !J.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : m(l.textContent.replace(qe, ""), c, l));
        }
        return e;
    }
    function Ie(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s = e.cloneNode(!0),
                u = w.contains(e.ownerDocument, e);
            if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t)
                if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]);
                else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s;
        },
        cleanData: function (e) {
            for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Y(n)) {
                    if ((t = n[J.expando])) {
                        if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (e) {
                return Ie(this, e, !0);
            },
            remove: function (e) {
                return Ie(this, e);
            },
            text: function (e) {
                return z(
                    this,
                    function (e) {
                        return void 0 === e
                            ? w.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Re(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Le(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Re(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Le(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Re(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return w.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return z(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return Re(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            w.fn[e] = function (e) {
                for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) (n = a === o ? this : this.clone(!0)), w(i[a])[t](n), s.apply(r, n.get());
                return this.pushStack(r);
            };
        });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
        $e = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Be = new RegExp(oe.join("|"), "i");
    !(function () {
        function t() {
            if (c) {
                (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    be.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                (i = "1%" !== t.top),
                    (u = 12 === n(t.marginLeft)),
                    (c.style.right = "60%"),
                    (s = 36 === n(t.right)),
                    (o = 36 === n(t.width)),
                    (c.style.position = "absolute"),
                    (a = 36 === c.offsetWidth || "absolute"),
                    be.removeChild(l),
                    (c = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i,
            o,
            a,
            s,
            u,
            l = r.createElement("div"),
            c = r.createElement("div");
        c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
            w.extend(h, {
                boxSizingReliable: function () {
                    return t(), o;
                },
                pixelBoxStyles: function () {
                    return t(), s;
                },
                pixelPosition: function () {
                    return t(), i;
                },
                reliableMarginLeft: function () {
                    return t(), u;
                },
                scrollboxSize: function () {
                    return t(), a;
                },
            }));
    })();
    function Fe(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;
        return (
            (n = n || $e(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
                !h.pixelBoxStyles() && We.test(a) && Be.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    var ze = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ue = { position: "absolute", visibility: "hidden", display: "block" },
        Ve = { letterSpacing: "0", fontWeight: "400" },
        Ge = ["Webkit", "Moz", "ms"],
        Ye = r.createElement("div").style;
    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1),
            n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e;
    }
    function Je(e) {
        var t = w.cssProps[e];
        return t || (t = w.cssProps[e] = Qe(e) || e), t;
    }
    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (u += w.css(e, n + oe[a], !0, i)),
                r
                    ? ("content" === n && (u -= w.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + oe[a] + "Width", !0, i)))
                    : ((u += w.css(e, "padding" + oe[a], !0, i)), "padding" !== n ? (u += w.css(e, "border" + oe[a] + "Width", !0, i)) : (s += w.css(e, "border" + oe[a] + "Width", !0, i)));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5))), u;
    }
    function et(e, t, n) {
        var r = $e(e),
            i = Fe(e, t, r),
            o = "border-box" === w.css(e, "boxSizing", !1, r),
            a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto";
        }
        return (
            (a = a && (h.boxSizingReliable() || i === e.style[t])),
            ("auto" === i || (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) && ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
            (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
        );
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = G(t),
                    u = Xe.test(t),
                    l = e.style;
                if ((u || (t = Je(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && ((n = ue(e, t, i)), (o = "number")),
                    null != n &&
                        n === n &&
                        ("number" === o && (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
                        h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = G(t);
            return (
                Xe.test(t) || (t = Je(s)),
                (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = Fe(e, t, r)),
                "normal" === i && t in Ve && (i = Ve[t]),
                "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            );
        },
    }),
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n, r) {
                    if (n)
                        return !ze.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? et(e, t, r)
                            : se(e, Ue, function () {
                                  return et(e, t, r);
                              });
                },
                set: function (e, n, r) {
                    var i,
                        o = $e(e),
                        a = "border-box" === w.css(e, "boxSizing", !1, o),
                        s = r && Ze(e, t, r, a, o);
                    return (
                        a && h.scrollboxSize() === o.position && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Ze(e, t, "border", !1, o) - 0.5)),
                        s && (i = ie.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                        Ke(e, n, s)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = _e(h.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Fe(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            se(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (w.cssHooks[e + t] = {
                expand: function (n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
                "margin" !== e && (w.cssHooks[e + t].set = Ke);
        }),
        w.fn.extend({
            css: function (e, t) {
                return z(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
        });
    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i);
    }
    (w.Tween = tt),
        (tt.prototype = {
            constructor: tt,
            init: function (e, t, n, r, i, o) {
                (this.elem = e), (this.prop = n), (this.easing = i || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = tt.propHooks[this.prop];
                return e && e.get ? e.get(this) : tt.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = tt.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : tt.propHooks._default.set(this),
                    this
                );
            },
        }),
        (tt.prototype.init.prototype = tt.prototype),
        (tt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (w.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = tt.prototype.init),
        (w.fx.step = {});
    var nt,
        rt,
        it = /^(?:toggle|show|hide)$/,
        ot = /queueHooks$/;
    function at() {
        rt && (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(at) : e.setTimeout(at, w.fx.interval), w.fx.tick());
    }
    function st() {
        return (
            e.setTimeout(function () {
                nt = void 0;
            }),
            (nt = Date.now())
        );
    }
    function ut(e, t) {
        var n,
            r = 0,
            i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
    }
    function ct(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            f = "width" in t || "height" in t,
            p = this,
            d = {},
            h = e.style,
            g = e.nodeType && ae(e),
            y = J.get(e, "fxshow");
        n.queue ||
            (null == (a = w._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                    a.unqueued || s();
                })),
            a.unqueued++,
            p.always(function () {
                p.always(function () {
                    a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                });
            }));
        for (r in t)
            if (((i = t[r]), it.test(i))) {
                if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
                    if ("show" !== i || !y || void 0 === y[r]) continue;
                    g = !0;
                }
                d[r] = (y && y[r]) || w.style(e, r);
            }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) {
            f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = y && y.display) && (l = J.get(e, "display")),
                "none" === (c = w.css(e, "display")) && (l ? (c = l) : (fe([e], !0), (l = e.style.display || l), (c = w.css(e, "display")), fe([e]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                    "none" === w.css(e, "float") &&
                    (u ||
                        (p.done(function () {
                            h.display = l;
                        }),
                        null == l && ((c = h.display), (l = "none" === c ? "" : c))),
                    (h.display = "inline-block"))),
                n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                        (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                    })),
                (u = !1);
            for (r in d)
                u ||
                    (y ? "hidden" in y && (g = y.hidden) : (y = J.access(e, "fxshow", { display: l })),
                    o && (y.hidden = !g),
                    g && fe([e], !0),
                    p.done(function () {
                        g || fe([e]), J.remove(e, "fxshow");
                        for (r in d) w.style(e, r, d[r]);
                    })),
                    (u = lt(g ? y[r] : 0, r, p)),
                    r in y || ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
        }
    }
    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (((r = G(n)), (i = t[r]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = w.cssHooks[r]) && "expand" in a)) {
                (o = a.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }
    function pt(e, t, n) {
        var r,
            i,
            o = 0,
            a = pt.prefilters.length,
            s = w.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (i) return !1;
                for (var t = nt || st(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1);
            },
            l = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: nt || st(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
                },
            }),
            c = l.props;
        for (ft(c, l.opts.specialEasing); o < a; o++) if ((r = pt.prefilters[o].call(l, e, c, l.opts))) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return (
            w.map(c, lt, l),
            g(l.opts.start) && l.opts.start.call(e, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
        );
    }
    (w.Animation = w.extend(pt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return ue(n.elem, e, ie.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
            for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (pt.tweeners[n] = pt.tweeners[n] || []), pt.tweeners[n].unshift(t);
        },
        prefilters: [ct],
        prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
    })),
        (w.speed = function (e, t, n) {
            var r = e && "object" == typeof e ? w.extend({}, e) : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
            return (
                w.fx.off ? (r.duration = 0) : "number" != typeof r.duration && (r.duration in w.fx.speeds ? (r.duration = w.fx.speeds[r.duration]) : (r.duration = w.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
                }),
                r
            );
        }),
        w.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = w.isEmptyObject(e),
                    o = w.speed(t, n, r),
                    a = function () {
                        var t = pt(this, w.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0);
                    };
                return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = w.timers,
                            a = J.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else for (i in a) a[i] && a[i].stop && ot.test(i) && r(a[i]);
                        for (i = o.length; i--; ) o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                        (!t && n) || w.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = J.get(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = w.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, r, i);
            };
        }),
        w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            w.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r);
            };
        }),
        (w.timers = []),
        (w.fx.tick = function () {
            var e,
                t = 0,
                n = w.timers;
            for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), (nt = void 0);
        }),
        (w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            rt || ((rt = !0), at());
        }),
        (w.fx.stop = function () {
            rt = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, n) {
            return (
                (t = w.fx ? w.fx.speeds[t] || t : t),
                (n = n || "fx"),
                this.queue(n, function (n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function () {
                        e.clearTimeout(i);
                    };
                })
            );
        }),
        (function () {
            var e = r.createElement("input"),
                t = r.createElement("select").appendChild(r.createElement("option"));
            (e.type = "checkbox"), (h.checkOn = "" !== e.value), (h.optSelected = t.selected), ((e = r.createElement("input")).value = "t"), (e.type = "radio"), (h.radioValue = "t" === e.value);
        })();
    var dt,
        ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return z(this, w.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        },
    }),
        w.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? w.prop(e, t, n)
                        : ((1 === o && w.isXMLDoc(e)) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void w.removeAttr(e, t)
                                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                  ? r
                                  : (e.setAttribute(t, n + ""), n)
                              : i && "get" in i && null !== (r = i.get(e, t))
                              ? r
                              : null == (r = w.find.attr(e, t))
                              ? void 0
                              : r);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!h.radioValue && "radio" === t && N(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r = 0,
                    i = t && t.match(M);
                if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
            },
        }),
        (dt = {
            set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || w.find.attr;
            ht[t] = function (e, t, r) {
                var i,
                    o,
                    a = t.toLowerCase();
                return r || ((o = ht[a]), (ht[a] = i), (i = null != n(e, t, r) ? a : null), (ht[a] = o)), i;
            };
        });
    var gt = /^(?:input|select|textarea|button)$/i,
        yt = /^(?:a|area)$/i;
    w.fn.extend({
        prop: function (e, t) {
            return z(this, w.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        },
    }),
        w.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (i = w.propHooks[t])),
                        void 0 !== n ? (i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : gt.test(e.nodeName) || (yt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        h.optSelected ||
            (w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this;
        });
    function vt(e) {
        return (e.match(M) || []).join(" ");
    }
    function mt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : [];
    }
    w.fn.extend({
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).addClass(e.call(this, t, mt(this)));
                });
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                        a = 0;
                        while ((o = t[a++])) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (g(e))
                return this.each(function (t) {
                    w(this).removeClass(e.call(this, t, mt(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
                while ((n = this[u++]))
                    if (((i = mt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
                        a = 0;
                        while ((o = t[a++])) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                        i !== (s = vt(r)) && n.setAttribute("class", s);
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : g(e)
                ? this.each(function (n) {
                      w(this).toggleClass(e.call(this, n, mt(this), t), t);
                  })
                : this.each(function () {
                      var t, i, o, a;
                      if (r) {
                          (i = 0), (o = w(this)), (a = xt(e));
                          while ((t = a[i++])) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                      } else (void 0 !== e && "boolean" !== n) || ((t = mt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""));
                  });
        },
        hasClass: function (e) {
            var t,
                n,
                r = 0;
            t = " " + e + " ";
            while ((n = this[r++])) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        },
    });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            {
                if (arguments.length)
                    return (
                        (r = g(e)),
                        this.each(function (n) {
                            var i;
                            1 === this.nodeType &&
                                (null == (i = r ? e.call(this, n, w(this).val()) : e)
                                    ? (i = "")
                                    : "number" == typeof i
                                    ? (i += "")
                                    : Array.isArray(i) &&
                                      (i = w.map(i, function (e) {
                                          return null == e ? "" : e + "";
                                      })),
                                ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                        })
                    );
                if (i) return (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n;
            }
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : vt(w.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            r,
                            i = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                if (((t = w(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        var n,
                            r,
                            i = e.options,
                            o = w.makeArray(t),
                            a = i.length;
                        while (a--) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = w.inArray(w(e).val(), t) > -1);
                },
            }),
                h.checkOn ||
                    (w.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (h.focusin = "onfocusin" in e);
    var wt = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (t, n, i, o) {
            var a,
                s,
                u,
                l,
                c,
                p,
                d,
                h,
                v = [i || r],
                m = f.call(t, "type") ? t.type : t,
                x = f.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = h = u = i = i || r),
                3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !wt.test(m + w.event.triggered) &&
                    (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
                    (c = m.indexOf(":") < 0 && "on" + m),
                    (t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)),
                    (t.isTrigger = o ? 2 : 3),
                    (t.namespace = x.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                    t.target || (t.target = i),
                    (n = null == n ? [t] : w.makeArray(n, [t])),
                    (d = w.event.special[m] || {}),
                    o || !d.trigger || !1 !== d.trigger.apply(i, n)))
            ) {
                if (!o && !d.noBubble && !y(i)) {
                    for (l = d.delegateType || m, wt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) v.push(s), (u = s);
                    u === (i.ownerDocument || r) && v.push(u.defaultView || u.parentWindow || e);
                }
                a = 0;
                while ((s = v[a++]) && !t.isPropagationStopped())
                    (h = s),
                        (t.type = a > 1 ? l : d.bindType || m),
                        (p = (J.get(s, "events") || {})[t.type] && J.get(s, "handle")) && p.apply(s, n),
                        (p = c && s[c]) && p.apply && Y(s) && ((t.result = p.apply(s, n)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = m),
                    o ||
                        t.isDefaultPrevented() ||
                        (d._default && !1 !== d._default.apply(v.pop(), n)) ||
                        !Y(i) ||
                        (c &&
                            g(i[m]) &&
                            !y(i) &&
                            ((u = i[c]) && (i[c] = null),
                            (w.event.triggered = m),
                            t.isPropagationStopped() && h.addEventListener(m, Tt),
                            i[m](),
                            t.isPropagationStopped() && h.removeEventListener(m, Tt),
                            (w.event.triggered = void 0),
                            u && (i[c] = u))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
            w.event.trigger(r, null, t);
        },
    }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
            },
        }),
        h.focusin ||
            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t);
                        i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            i = J.access(r, t) - 1;
                        i ? J.access(r, t, i) : (r.removeEventListener(e, n, !0), J.remove(r, t));
                    },
                };
            });
    var Ct = e.location,
        Et = Date.now(),
        kt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + t), n;
    };
    var St = /\[\]$/,
        Dt = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    function jt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
            w.each(t, function (t, i) {
                n || St.test(e) ? r(e, i) : jt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
            });
        else if (n || "object" !== x(t)) r(e, t);
        else for (i in t) jt(e + "[" + i + "]", t[i], n, r);
    }
    (w.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                var n = g(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) jt(n, e[n], t, i);
        return r.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e));
                    })
                    .map(function (e, t) {
                        var n = w(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? w.map(n, function (e) {
                                  return { name: t.name, value: e.replace(Dt, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(Dt, "\r\n") };
                    })
                    .get();
            },
        });
    var qt = /%20/g,
        Lt = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Mt = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        It = {},
        Wt = {},
        $t = "*/".concat("*"),
        Bt = r.createElement("a");
    Bt.href = Ct.href;
    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(M) || [];
            if (g(n)) while ((r = o[i++])) "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function _t(e, t, n, r) {
        var i = {},
            o = e === Wt;
        function a(s) {
            var u;
            return (
                (i[s] = !0),
                w.each(e[s] || [], function (e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || o || i[l] ? (o ? !(u = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
            );
        }
        return a(t.dataTypes[0]) || (!i["*"] && a("*"));
    }
    function zt(e, t) {
        var n,
            r,
            i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e;
    }
    function Xt(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in s)
                if (s[i] && s[i].test(r)) {
                    u.unshift(i);
                    break;
                }
        if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function Ut(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)
            if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                        for (i in l)
                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                                break;
                            }
                    if (!0 !== a)
                        if (a && e["throws"]) t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (e) {
                                return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                            }
                }
        return { state: "success", data: t };
    }
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: { "*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, w.ajaxSettings), t) : zt(w.ajaxSettings, e);
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (t, n) {
            "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h = w.ajaxSetup({}, n),
                g = h.context || h,
                y = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
                v = w.Deferred(),
                m = w.Callbacks("once memory"),
                x = h.statusCode || {},
                b = {},
                T = {},
                C = "canceled",
                E = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!s) {
                                s = {};
                                while ((t = Ot.exec(a))) s[t[1].toLowerCase()] = t[2];
                            }
                            t = s[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null;
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (b[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                        return null == c && (h.mimeType = e), this;
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c) E.always(e[E.status]);
                            else for (t in e) x[t] = [x[t], e[t]];
                        return this;
                    },
                    abort: function (e) {
                        var t = e || C;
                        return i && i.abort(t), k(0, t), this;
                    },
                };
            if (
                (v.promise(E),
                (h.url = ((t || h.url || Ct.href) + "").replace(Rt, Ct.protocol + "//")),
                (h.type = n.method || n.type || h.method || h.type),
                (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
                null == h.crossDomain)
            ) {
                l = r.createElement("a");
                try {
                    (l.href = h.url), (l.href = l.href), (h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host);
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if ((h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), _t(It, h, n, E), c)) return E;
            (f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !Mt.test(h.type)),
                (o = h.url.replace(Lt, "")),
                h.hasContent
                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(qt, "+"))
                    : ((d = h.url.slice(o.length)),
                      h.data && (h.processData || "string" == typeof h.data) && ((o += (kt.test(o) ? "&" : "?") + h.data), delete h.data),
                      !1 === h.cache && ((o = o.replace(Ht, "$1")), (d = (kt.test(o) ? "&" : "?") + "_=" + Et++ + d)),
                      (h.url = o + d)),
                h.ifModified && (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]), w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
                ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : h.accepts["*"]);
            for (p in h.headers) E.setRequestHeader(p, h.headers[p]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
            if (((C = "abort"), m.add(h.complete), E.done(h.success), E.fail(h.error), (i = _t(Wt, h, n, E)))) {
                if (((E.readyState = 1), f && y.trigger("ajaxSend", [E, h]), c)) return E;
                h.async &&
                    h.timeout > 0 &&
                    (u = e.setTimeout(function () {
                        E.abort("timeout");
                    }, h.timeout));
                try {
                    (c = !1), i.send(b, k);
                } catch (e) {
                    if (c) throw e;
                    k(-1, e);
                }
            } else k(-1, "No Transport");
            function k(t, n, r, s) {
                var l,
                    p,
                    d,
                    b,
                    T,
                    C = n;
                c ||
                    ((c = !0),
                    u && e.clearTimeout(u),
                    (i = void 0),
                    (a = s || ""),
                    (E.readyState = t > 0 ? 4 : 0),
                    (l = (t >= 200 && t < 300) || 304 === t),
                    r && (b = Xt(h, E, r)),
                    (b = Ut(h, b, E, l)),
                    l
                        ? (h.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T), (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                          204 === t || "HEAD" === h.type ? (C = "nocontent") : 304 === t ? (C = "notmodified") : ((C = b.state), (p = b.data), (l = !(d = b.error))))
                        : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                    (E.status = t),
                    (E.statusText = (n || C) + ""),
                    l ? v.resolveWith(g, [p, C, E]) : v.rejectWith(g, [E, C, d]),
                    E.statusCode(x),
                    (x = void 0),
                    f && y.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
                    m.fireWith(g, [E, C]),
                    f && (y.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
            }
            return E;
        },
        getJSON: function (e, t, n) {
            return w.get(e, t, n, "json");
        },
        getScript: function (e, t) {
            return w.get(e, void 0, t, "script");
        },
    }),
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, n, r, i) {
                return g(n) && ((i = i || r), (r = n), (n = void 0)), w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e));
            };
        }),
        (w._evalUrl = function (e) {
            return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
        }),
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (g(e) && (e = e.call(this[0])),
                        (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                var e = this;
                                while (e.firstElementChild) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return g(e)
                    ? this.each(function (t) {
                          w(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = w(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = g(e);
                return this.each(function (n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Vt = { 0: 200, 1223: 204 },
        Gt = w.ajaxSettings.xhr();
    (h.cors = !!Gt && "withCredentials" in Gt),
        (h.ajax = Gt = !!Gt),
        w.ajaxTransport(function (t) {
            var n, r;
            if (h.cors || (Gt && !t.crossDomain))
                return {
                    send: function (i, o) {
                        var a,
                            s = t.xhr();
                        if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (a in i) s.setRequestHeader(a, i[a]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                    "abort" === e
                                        ? s.abort()
                                        : "error" === e
                                        ? "number" != typeof s.status
                                            ? o(0, "error")
                                            : o(s.status, s.statusText)
                                        : o(Vt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                            };
                        }),
                            (s.onload = n()),
                            (r = s.onerror = s.ontimeout = n("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = r)
                                : (s.onreadystatechange = function () {
                                      4 === s.readyState &&
                                          e.setTimeout(function () {
                                              n && r();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            s.send((t.hasContent && t.data) || null);
                        } catch (e) {
                            if (n) throw e;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e), e;
                },
            },
        }),
        w.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function (i, o) {
                        (t = w("<script>")
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            r.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
            }
        });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || w.expando + "_" + Et++;
            return (this[e] = !0), e;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                a,
                s = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])
                return (
                    (i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    s ? (t[s] = t[s].replace(Qt, "$1" + i)) : !1 !== t.jsonp && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    (t.converters["script json"] = function () {
                        return a || w.error(i + " was not called"), a[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = e[i]),
                    (e[i] = function () {
                        a = arguments;
                    }),
                    r.always(function () {
                        void 0 === o ? w(e).removeProp(i) : (e[i] = o), t[i] && ((t.jsonpCallback = n.jsonpCallback), Yt.push(i)), a && g(o) && o(a[0]), (a = o = void 0);
                    }),
                    "script"
                );
        }),
        (h.createHTMLDocument = (function () {
            var e = r.implementation.createHTMLDocument("").body;
            return (e.innerHTML = "<form></form><form></form>"), 2 === e.childNodes.length;
        })()),
        (w.parseHTML = function (e, t, n) {
            if ("string" != typeof e) return [];
            "boolean" == typeof t && ((n = t), (t = !1));
            var i, o, a;
            return (
                t || (h.createHTMLDocument ? (((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href), t.head.appendChild(i)) : (t = r)),
                (o = A.exec(e)),
                (a = !n && []),
                o ? [t.createElement(o[1])] : ((o = xe([e], t, a)), a && a.length && w(a).remove(), w.merge([], o.childNodes))
            );
        }),
        (w.fn.load = function (e, t, n) {
            var r,
                i,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                s > -1 && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
                g(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
                a.length > 0 &&
                    w
                        .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (o = arguments), a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            w.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = w.css(e, "position"),
                    f = w(e),
                    p = {};
                "static" === c && (e.style.position = "relative"),
                    (s = f.offset()),
                    (o = w.css(e, "top")),
                    (u = w.css(e, "left")),
                    (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? ((a = (r = f.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    g(t) && (t = t.call(e, n, w.extend({}, s))),
                    null != t.top && (p.top = t.top - s.top + a),
                    null != t.left && (p.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, p) : f.css(p);
            },
        }),
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              w.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    r = this[0];
                if (r) return r.getClientRects().length ? ((t = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 };
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                    if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
                        while (e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position")) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (i.left += w.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var e = this.offsetParent;
                    while (e && "static" === w.css(e, "position")) e = e.offsetParent;
                    return e || be;
                });
            },
        }),
        w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function (r) {
                return z(
                    this,
                    function (e, r, i) {
                        var o;
                        if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
                        o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
                    },
                    e,
                    r,
                    arguments.length
                );
            };
        }),
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = _e(h.pixelPosition, function (e, n) {
                if (n) return (n = Fe(e, t)), We.test(n) ? w(e).position()[t] + "px" : n;
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
            w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
                w.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === o ? "margin" : "border");
                    return z(
                        this,
                        function (t, n, i) {
                            var o;
                            return y(t)
                                ? 0 === r.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                : void 0 === i
                                ? w.css(t, n, s)
                                : w.style(t, n, i, s);
                        },
                        t,
                        a ? i : void 0,
                        a
                    );
                };
            });
        }),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            w.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
            };
        }),
        w.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        w.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        }),
        (w.proxy = function (e, t) {
            var n, r, i;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
                return (
                    (r = o.call(arguments, 2)),
                    (i = function () {
                        return e.apply(t || this, r.concat(o.call(arguments)));
                    }),
                    (i.guid = e.guid = e.guid || w.guid++),
                    i
                );
        }),
        (w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = N),
        (w.isFunction = g),
        (w.isWindow = y),
        (w.camelCase = G),
        (w.type = x),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return w;
            });
    var Jt = e.jQuery,
        Kt = e.$;
    return (
        (w.noConflict = function (t) {
            return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Jt), w;
        }),
        t || (e.jQuery = e.$ = w),
        w
    );
});

!(function () {
    "use strict";
    function r(t) {
        if (void 0 === t) throw new Error('Pathformer [constructor]: "element" parameter is required');
        if (t.constructor === String && !(t = document.getElementById(t))) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
        if (!(t instanceof window.SVGElement || t instanceof window.SVGGElement || /^svg$/i.test(t.nodeName))) throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
        (this.el = t), this.scan(t);
    }
    var n, e, t, h;
    function i(t, e, r) {
        n(), (this.isReady = !1), this.setElement(t, e), this.setOptions(e), this.setCallback(r), this.isReady && this.init();
    }
    (r.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"]),
        (r.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"]),
        (r.prototype.scan = function (t) {
            for (var e, r, n, i = t.querySelectorAll(this.TYPES.join(",")), a = 0; a < i.length; a++)
                (r = (0, this[(e = i[a]).tagName.toLowerCase() + "ToPath"])(this.parseAttr(e.attributes))), (n = this.pathMaker(e, r)), e.parentNode.replaceChild(n, e);
        }),
        (r.prototype.lineToPath = function (t) {
            var e = {},
                r = t.x1 || 0,
                n = t.y1 || 0,
                i = t.x2 || 0,
                a = t.y2 || 0;
            return (e.d = "M" + r + "," + n + "L" + i + "," + a), e;
        }),
        (r.prototype.rectToPath = function (t) {
            var e = {},
                r = parseFloat(t.x) || 0,
                n = parseFloat(t.y) || 0,
                i = parseFloat(t.width) || 0,
                a = parseFloat(t.height) || 0;
            if (t.rx || t.ry) {
                var o = parseInt(t.rx, 10) || -1,
                    s = parseInt(t.ry, 10) || -1;
                (o = Math.min(Math.max(o < 0 ? s : o, 0), i / 2)),
                    (s = Math.min(Math.max(s < 0 ? o : s, 0), a / 2)),
                    (e.d =
                        "M " +
                        (r + o) +
                        "," +
                        n +
                        " L " +
                        (r + i - o) +
                        "," +
                        n +
                        " A " +
                        o +
                        "," +
                        s +
                        ",0,0,1," +
                        (r + i) +
                        "," +
                        (n + s) +
                        " L " +
                        (r + i) +
                        "," +
                        (n + a - s) +
                        " A " +
                        o +
                        "," +
                        s +
                        ",0,0,1," +
                        (r + i - o) +
                        "," +
                        (n + a) +
                        " L " +
                        (r + o) +
                        "," +
                        (n + a) +
                        " A " +
                        o +
                        "," +
                        s +
                        ",0,0,1," +
                        r +
                        "," +
                        (n + a - s) +
                        " L " +
                        r +
                        "," +
                        (n + s) +
                        " A " +
                        o +
                        "," +
                        s +
                        ",0,0,1," +
                        (r + o) +
                        "," +
                        n);
            } else e.d = "M" + r + " " + n + " L" + (r + i) + " " + n + " L" + (r + i) + " " + (n + a) + " L" + r + " " + (n + a) + " Z";
            return e;
        }),
        (r.prototype.polylineToPath = function (t) {
            var e,
                r,
                n = {},
                i = t.points.trim().split(" ");
            if (-1 === t.points.indexOf(",")) {
                var a = [];
                for (e = 0; e < i.length; e += 2) a.push(i[e] + "," + i[e + 1]);
                i = a;
            }
            for (r = "M" + i[0], e = 1; e < i.length; e++) -1 !== i[e].indexOf(",") && (r += "L" + i[e]);
            return (n.d = r), n;
        }),
        (r.prototype.polygonToPath = function (t) {
            var e = r.prototype.polylineToPath(t);
            return (e.d += "Z"), e;
        }),
        (r.prototype.ellipseToPath = function (t) {
            var e = {},
                r = parseFloat(t.rx) || 0,
                n = parseFloat(t.ry) || 0,
                i = parseFloat(t.cx) || 0,
                a = parseFloat(t.cy) || 0,
                o = i - r,
                s = a,
                h = parseFloat(i) + parseFloat(r),
                l = a;
            return (e.d = "M" + o + "," + s + "A" + r + "," + n + " 0,1,1 " + h + "," + l + "A" + r + "," + n + " 0,1,1 " + o + "," + l), e;
        }),
        (r.prototype.circleToPath = function (t) {
            var e = {},
                r = parseFloat(t.r) || 0,
                n = parseFloat(t.cx) || 0,
                i = parseFloat(t.cy) || 0,
                a = n - r,
                o = i,
                s = parseFloat(n) + parseFloat(r),
                h = i;
            return (e.d = "M" + a + "," + o + "A" + r + "," + r + " 0,1,1 " + s + "," + h + "A" + r + "," + r + " 0,1,1 " + a + "," + h), e;
        }),
        (r.prototype.pathMaker = function (t, e) {
            var r,
                n,
                i = document.createElementNS("http://www.w3.org/2000/svg", "path");
            for (r = 0; r < t.attributes.length; r++) (n = t.attributes[r]), -1 === this.ATTR_WATCH.indexOf(n.name) && i.setAttribute(n.name, n.value);
            for (r in e) i.setAttribute(r, e[r]);
            return i;
        }),
        (r.prototype.parseAttr = function (t) {
            for (var e, r = {}, n = 0; n < t.length; n++) {
                if (((e = t[n]), -1 !== this.ATTR_WATCH.indexOf(e.name) && -1 !== e.value.indexOf("%")))
                    throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
                r[e.name] = e.value;
            }
            return r;
        }),
        (i.LINEAR = function (t) {
            return t;
        }),
        (i.EASE = function (t) {
            return -Math.cos(t * Math.PI) / 2 + 0.5;
        }),
        (i.EASE_OUT = function (t) {
            return 1 - Math.pow(1 - t, 3);
        }),
        (i.EASE_IN = function (t) {
            return Math.pow(t, 3);
        }),
        (i.EASE_OUT_BOUNCE = function (t) {
            var e = 1 - Math.cos(t * (0.5 * Math.PI)),
                r = Math.pow(e, 1.5),
                n = Math.pow(1 - t, 2);
            return 1 - n + (1 - Math.abs(Math.cos(r * (2.5 * Math.PI)))) * n;
        }),
        (i.prototype.setElement = function (e, r) {
            var t, n;
            if (void 0 === e) throw new Error('Vivus [constructor]: "element" parameter is required');
            if (e.constructor === String && !(e = document.getElementById(e))) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
            if (((this.parentEl = e), r && r.file)) {
                (n = this),
                    (t = function () {
                        var t = document.createElement("div");
                        t.innerHTML = this.responseText;
                        var e = t.querySelector("svg");
                        if (!e) throw new Error("Vivus [load]: Cannot find the SVG in the loaded file : " + r.file);
                        (n.el = e), n.el.setAttribute("width", "100%"), n.el.setAttribute("height", "100%"), n.parentEl.appendChild(n.el), (n.isReady = !0), n.init(), (n = null);
                    });
                var i = new window.XMLHttpRequest();
                return i.addEventListener("load", t), i.open("GET", r.file), void i.send();
            }
            switch (e.constructor) {
                case window.SVGSVGElement:
                case window.SVGElement:
                case window.SVGGElement:
                    (this.el = e), (this.isReady = !0);
                    break;
                case window.HTMLObjectElement:
                    (n = this),
                        (t = function (t) {
                            if (!n.isReady) {
                                if (((n.el = e.contentDocument && e.contentDocument.querySelector("svg")), !n.el && t)) throw new Error("Vivus [constructor]: object loaded does not contain any SVG");
                                n.el &&
                                    (e.getAttribute("built-by-vivus") && (n.parentEl.insertBefore(n.el, e), n.parentEl.removeChild(e), n.el.setAttribute("width", "100%"), n.el.setAttribute("height", "100%")),
                                    (n.isReady = !0),
                                    n.init(),
                                    (n = null));
                            }
                        })() || e.addEventListener("load", t);
                    break;
                default:
                    throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
            }
        }),
        (i.prototype.setOptions = function (t) {
            var e = ["delayed", "sync", "async", "nsync", "oneByOne", "scenario", "scenario-sync"],
                r = ["inViewport", "manual", "autostart"];
            if (void 0 !== t && t.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object');
            if ((t = t || {}).type && -1 === e.indexOf(t.type)) throw new Error("Vivus [constructor]: " + t.type + " is not an existing animation `type`");
            if (((this.type = t.type || e[0]), t.start && -1 === r.indexOf(t.start))) throw new Error("Vivus [constructor]: " + t.start + " is not an existing `start` option");
            if (
                ((this.start = t.start || r[0]),
                (this.isIE = -1 !== window.navigator.userAgent.indexOf("MSIE") || -1 !== window.navigator.userAgent.indexOf("Trident/") || -1 !== window.navigator.userAgent.indexOf("Edge/")),
                (this.duration = h(t.duration, 120)),
                (this.delay = h(t.delay, null)),
                (this.dashGap = h(t.dashGap, 1)),
                (this.forceRender = t.hasOwnProperty("forceRender") ? !!t.forceRender : this.isIE),
                (this.reverseStack = !!t.reverseStack),
                (this.selfDestroy = !!t.selfDestroy),
                (this.onReady = t.onReady),
                (this.map = []),
                (this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null),
                (this.ignoreInvisible = !!t.hasOwnProperty("ignoreInvisible") && !!t.ignoreInvisible),
                (this.animTimingFunction = t.animTimingFunction || i.LINEAR),
                (this.pathTimingFunction = t.pathTimingFunction || i.LINEAR),
                this.delay >= this.duration)
            )
                throw new Error("Vivus [constructor]: delay must be shorter than duration");
        }),
        (i.prototype.setCallback = function (t) {
            if (t && t.constructor !== Function) throw new Error('Vivus [constructor]: "callback" parameter must be a function');
            this.callback = t || function () {};
        }),
        (i.prototype.mapping = function () {
            var t, e, r, n, i, a, o, s;
            for (s = a = o = 0, e = this.el.querySelectorAll("path"), t = 0; t < e.length; t++)
                (r = e[t]),
                    this.isInvisible(r) ||
                        ((i = { el: r, length: Math.ceil(r.getTotalLength()) }),
                        isNaN(i.length)
                            ? window.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", r)
                            : (this.map.push(i),
                              (r.style.strokeDasharray = i.length + " " + (i.length + 2 * this.dashGap)),
                              (r.style.strokeDashoffset = i.length + this.dashGap),
                              (i.length += this.dashGap),
                              (a += i.length),
                              this.renderPath(t)));
            for (
                a = 0 === a ? 1 : a, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (1 < e.length ? e.length - 1 : 1), this.reverseStack && this.map.reverse(), t = 0;
                t < this.map.length;
                t++
            ) {
                switch (((i = this.map[t]), this.type)) {
                    case "delayed":
                        (i.startAt = this.delayUnit * t), (i.duration = this.duration - this.delay);
                        break;
                    case "oneByOne":
                        (i.startAt = (o / a) * this.duration), (i.duration = (i.length / a) * this.duration);
                        break;
                    case "sync":
                    case "async":
                    case "nsync":
                        (i.startAt = 0), (i.duration = this.duration);
                        break;
                    case "scenario-sync":
                        (r = i.el),
                            (n = this.parseAttr(r)),
                            (i.startAt = s + (h(n["data-delay"], this.delayUnit) || 0)),
                            (i.duration = h(n["data-duration"], this.duration)),
                            (s = void 0 !== n["data-async"] ? i.startAt : i.startAt + i.duration),
                            (this.frameLength = Math.max(this.frameLength, i.startAt + i.duration));
                        break;
                    case "scenario":
                        (r = i.el),
                            (n = this.parseAttr(r)),
                            (i.startAt = h(n["data-start"], this.delayUnit) || 0),
                            (i.duration = h(n["data-duration"], this.duration)),
                            (this.frameLength = Math.max(this.frameLength, i.startAt + i.duration));
                }
                (o += i.length), (this.frameLength = this.frameLength || this.duration);
            }
        }),
        (i.prototype.drawer = function () {
            var t = this;
            if (((this.currentFrame += this.speed), this.currentFrame <= 0)) this.stop(), this.reset();
            else {
                if (!(this.currentFrame >= this.frameLength))
                    return (
                        this.trace(),
                        void (this.handle = e(function () {
                            t.drawer();
                        }))
                    );
                this.stop(), (this.currentFrame = this.frameLength), this.trace(), this.selfDestroy && this.destroy();
            }
            this.callback(this), this.instanceCallback && (this.instanceCallback(this), (this.instanceCallback = null));
        }),
        (i.prototype.trace = function () {
            var t, e, r, n;
            for (n = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, t = 0; t < this.map.length; t++)
                (e = (n - (r = this.map[t]).startAt) / r.duration),
                    (e = this.pathTimingFunction(Math.max(0, Math.min(1, e)))),
                    r.progress !== e && ((r.progress = e), (r.el.style.strokeDashoffset = Math.floor(r.length * (1 - e))), this.renderPath(t));
        }),
        (i.prototype.renderPath = function (t) {
            if (this.forceRender && this.map && this.map[t]) {
                var e = this.map[t],
                    r = e.el.cloneNode(!0);
                e.el.parentNode.replaceChild(r, e.el), (e.el = r);
            }
        }),
        (i.prototype.init = function () {
            (this.frameLength = 0), (this.currentFrame = 0), (this.map = []), new r(this.el), this.mapping(), this.starter(), this.onReady && this.onReady(this);
        }),
        (i.prototype.starter = function () {
            switch (this.start) {
                case "manual":
                    return;
                case "autostart":
                    this.play();
                    break;
                case "inViewport":
                    var t = this,
                        e = function () {
                            t.isInViewport(t.parentEl, 1) && (t.play(), window.removeEventListener("scroll", e));
                        };
                    window.addEventListener("scroll", e), e();
            }
        }),
        (i.prototype.getStatus = function () {
            return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress";
        }),
        (i.prototype.reset = function () {
            return this.setFrameProgress(0);
        }),
        (i.prototype.finish = function () {
            return this.setFrameProgress(1);
        }),
        (i.prototype.setFrameProgress = function (t) {
            return (t = Math.min(1, Math.max(0, t))), (this.currentFrame = Math.round(this.frameLength * t)), this.trace(), this;
        }),
        (i.prototype.play = function (t, e) {
            if (((this.instanceCallback = null), t && "function" == typeof t)) (this.instanceCallback = t), (t = null);
            else if (t && "number" != typeof t) throw new Error("Vivus [play]: invalid speed");
            return e && "function" == typeof e && !this.instanceCallback && (this.instanceCallback = e), (this.speed = t || 1), this.handle || this.drawer(), this;
        }),
        (i.prototype.stop = function () {
            return this.handle && (t(this.handle), (this.handle = null)), this;
        }),
        (i.prototype.destroy = function () {
            var t, e;
            for (this.stop(), t = 0; t < this.map.length; t++) ((e = this.map[t]).el.style.strokeDashoffset = null), (e.el.style.strokeDasharray = null), this.renderPath(t);
        }),
        (i.prototype.isInvisible = function (t) {
            var e,
                r = t.getAttribute("data-ignore");
            return null !== r ? "false" !== r : !!this.ignoreInvisible && !(e = t.getBoundingClientRect()).width && !e.height;
        }),
        (i.prototype.parseAttr = function (t) {
            var e,
                r = {};
            if (t && t.attributes) for (var n = 0; n < t.attributes.length; n++) r[(e = t.attributes[n]).name] = e.value;
            return r;
        }),
        (i.prototype.isInViewport = function (t, e) {
            var r = this.scrollY(),
                n = r + this.getViewportH(),
                i = t.getBoundingClientRect(),
                a = i.height,
                o = r + i.top;
            return o + a * (e = e || 0) <= n && r <= o + a;
        }),
        (i.prototype.getViewportH = function () {
            var t = this.docElem.clientHeight,
                e = window.innerHeight;
            return t < e ? e : t;
        }),
        (i.prototype.scrollY = function () {
            return window.pageYOffset || this.docElem.scrollTop;
        }),
        (n = function () {
            i.prototype.docElem ||
                ((i.prototype.docElem = window.document.documentElement),
                (e =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (t) {
                        return window.setTimeout(t, 1e3 / 60);
                    }),
                (t =
                    window.cancelAnimationFrame ||
                    window.webkitCancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    window.oCancelAnimationFrame ||
                    window.msCancelAnimationFrame ||
                    function (t) {
                        return window.clearTimeout(t);
                    }));
        }),
        (h = function (t, e) {
            var r = parseInt(t, 10);
            return 0 <= r ? r : e;
        }),
        "function" == typeof define && define.amd
            ? define([], function () {
                  return i;
              })
            : "object" == typeof exports
            ? (module.exports = i)
            : (window.Vivus = i);
})();
!(function (i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? (module.exports = i(require("jquery"))) : i(jQuery);
})(function (i) {
    "use strict";
    var e = window.Slick || {};
    ((e = (function () {
        var e = 0;
        return function (t, o) {
            var s,
                n = this;
            (n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (e, t) {
                    return i('<button type="button" />').text(t + 1);
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3,
            }),
                (n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                i.extend(n, n.initials),
                (n.activeBreakpoint = null),
                (n.animType = null),
                (n.animProp = null),
                (n.breakpoints = []),
                (n.breakpointSettings = []),
                (n.cssTransitions = !1),
                (n.focussed = !1),
                (n.interrupted = !1),
                (n.hidden = "hidden"),
                (n.paused = !0),
                (n.positionProp = null),
                (n.respondTo = null),
                (n.rowCount = 1),
                (n.shouldClick = !0),
                (n.$slider = i(t)),
                (n.$slidesCache = null),
                (n.transformType = null),
                (n.transitionType = null),
                (n.visibilityChange = "visibilitychange"),
                (n.windowWidth = 0),
                (n.windowTimer = null),
                (s = i(t).data("slick") || {}),
                (n.options = i.extend({}, n.defaults, o, s)),
                (n.currentSlide = n.options.initialSlide),
                (n.originalSettings = n.options),
                void 0 !== document.mozHidden ? ((n.hidden = "mozHidden"), (n.visibilityChange = "mozvisibilitychange")) : void 0 !== document.webkitHidden && ((n.hidden = "webkitHidden"), (n.visibilityChange = "webkitvisibilitychange")),
                (n.autoPlay = i.proxy(n.autoPlay, n)),
                (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
                (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
                (n.changeSlide = i.proxy(n.changeSlide, n)),
                (n.clickHandler = i.proxy(n.clickHandler, n)),
                (n.selectHandler = i.proxy(n.selectHandler, n)),
                (n.setPosition = i.proxy(n.setPosition, n)),
                (n.swipeHandler = i.proxy(n.swipeHandler, n)),
                (n.dragHandler = i.proxy(n.dragHandler, n)),
                (n.keyHandler = i.proxy(n.keyHandler, n)),
                (n.instanceUid = e++),
                (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                n.registerBreakpoints(),
                n.init(!0);
        };
    })()).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
    }),
        (e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
            var s = this;
            if ("boolean" == typeof t) (o = t), (t = null);
            else if (t < 0 || t >= s.slideCount) return !1;
            s.unload(),
                "number" == typeof t
                    ? 0 === t && 0 === s.$slides.length
                        ? i(e).appendTo(s.$slideTrack)
                        : o
                        ? i(e).insertBefore(s.$slides.eq(t))
                        : i(e).insertAfter(s.$slides.eq(t))
                    : !0 === o
                    ? i(e).prependTo(s.$slideTrack)
                    : i(e).appendTo(s.$slideTrack),
                (s.$slides = s.$slideTrack.children(this.options.slide)),
                s.$slideTrack.children(this.options.slide).detach(),
                s.$slideTrack.append(s.$slides),
                s.$slides.each(function (e, t) {
                    i(t).attr("data-slick-index", e);
                }),
                (s.$slidesCache = s.$slides),
                s.reinit();
        }),
        (e.prototype.animateHeight = function () {
            var i = this;
            if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({ height: e }, i.options.speed);
            }
        }),
        (e.prototype.animateSlide = function (e, t) {
            var o = {},
                s = this;
            s.animateHeight(),
                !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
                !1 === s.transformsEnabled
                    ? !1 === s.options.vertical
                        ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t)
                        : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t)
                    : !1 === s.cssTransitions
                    ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                      i({ animStart: s.currentLeft }).animate(
                          { animStart: e },
                          {
                              duration: s.options.speed,
                              easing: s.options.easing,
                              step: function (i) {
                                  (i = Math.ceil(i)), !1 === s.options.vertical ? ((o[s.animType] = "translate(" + i + "px, 0px)"), s.$slideTrack.css(o)) : ((o[s.animType] = "translate(0px," + i + "px)"), s.$slideTrack.css(o));
                              },
                              complete: function () {
                                  t && t.call();
                              },
                          }
                      ))
                    : (s.applyTransition(),
                      (e = Math.ceil(e)),
                      !1 === s.options.vertical ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)") : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
                      s.$slideTrack.css(o),
                      t &&
                          setTimeout(function () {
                              s.disableTransition(), t.call();
                          }, s.options.speed));
        }),
        (e.prototype.getNavTarget = function () {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }),
        (e.prototype.asNavFor = function (e) {
            var t = this.getNavTarget();
            null !== t &&
                "object" == typeof t &&
                t.each(function () {
                    var t = i(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0);
                });
        }),
        (e.prototype.applyTransition = function (i) {
            var e = this,
                t = {};
            !1 === e.options.fade ? (t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) : (t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
                !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
        }),
        (e.prototype.autoPlay = function () {
            var i = this;
            i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
        }),
        (e.prototype.autoPlayClear = function () {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function () {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
                i.interrupted ||
                i.focussed ||
                (!1 === i.options.infinite &&
                    (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? (i.direction = 0) : 0 === i.direction && ((e = i.currentSlide - i.options.slidesToScroll), i.currentSlide - 1 == 0 && (i.direction = 1))),
                i.slideHandler(e));
        }),
        (e.prototype.buildArrows = function () {
            var e = this;
            !0 === e.options.arrows &&
                ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
                (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
                e.slideCount > e.options.slidesToShow
                    ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                      e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                      e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                      e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                      !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                    : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (e.prototype.buildDots = function () {
            var e,
                t,
                o = this;
            if (!0 === o.options.dots) {
                for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
                (o.$dots = t.appendTo(o.options.appendDots)), o.$dots.find("li").first().addClass("slick-active");
            }
        }),
        (e.prototype.buildOut = function () {
            var e = this;
            (e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.$slides.each(function (e, t) {
                    i(t)
                        .attr("data-slick-index", e)
                        .data("originalStyling", i(t).attr("style") || "");
                }),
                e.$slider.addClass("slick-slider"),
                (e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
                (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                e.$slideTrack.css("opacity", 0),
                (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
                i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                !0 === e.options.draggable && e.$list.addClass("draggable");
        }),
        (e.prototype.buildRows = function () {
            var i,
                e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            if (((o = document.createDocumentFragment()), (n = l.$slider.children()), l.options.rows > 1)) {
                for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c));
                        }
                        d.appendChild(a);
                    }
                    o.appendChild(d);
                }
                l.$slider.empty().append(o),
                    l.$slider
                        .children()
                        .children()
                        .children()
                        .css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" });
            }
        }),
        (e.prototype.checkResponsive = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if (("window" === r.respondTo ? (n = a) : "slider" === r.respondTo ? (n = d) : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive)) {
                s = null;
                for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s
                    ? null !== r.activeBreakpoint
                        ? (s !== r.activeBreakpoint || t) &&
                          ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s] ? r.unslick(s) : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)),
                          (l = s))
                        : ((r.activeBreakpoint = s),
                          "unslick" === r.breakpointSettings[s] ? r.unslick(s) : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)),
                          (l = s))
                    : null !== r.activeBreakpoint && ((r.activeBreakpoint = null), (r.options = r.originalSettings), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), (l = s)),
                    e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
            }
        }),
        (e.prototype.changeSlide = function (e, t) {
            var o,
                s,
                n,
                r = this,
                l = i(e.currentTarget);
            switch ((l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), (n = r.slideCount % r.options.slidesToScroll != 0), (o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll), e.data.message)) {
                case "previous":
                    (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    (s = 0 === o ? r.options.slidesToScroll : o), r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (e.prototype.checkNavigable = function (i) {
            var e, t;
            if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1])) i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break;
                    }
                    t = e[o];
                }
            return i;
        }),
        (e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots &&
                null !== e.$dots &&
                (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
                !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"),
                !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                    e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
                    !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                e.$list.off("click.slick", e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(),
                !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
                i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
        }),
        (e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function () {
            var i,
                e = this;
            e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i));
        }),
        (e.prototype.clickHandler = function (i) {
            !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
        }),
        (e.prototype.destroy = function (e) {
            var t = this;
            t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                i(".slick-cloned", t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow &&
                    t.$prevArrow.length &&
                    (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
                t.$nextArrow &&
                    t.$nextArrow.length &&
                    (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
                t.$slides &&
                    (t.$slides
                        .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                        .removeAttr("aria-hidden")
                        .removeAttr("data-slick-index")
                        .each(function () {
                            i(this).attr("style", i(this).data("originalStyling"));
                        }),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slideTrack.detach(),
                    t.$list.detach(),
                    t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                (t.unslicked = !0),
                e || t.$slider.trigger("destroy", [t]);
        }),
        (e.prototype.disableTransition = function (i) {
            var e = this,
                t = {};
            (t[e.transitionType] = ""), !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
        }),
        (e.prototype.fadeSlide = function (i, e) {
            var t = this;
            !1 === t.cssTransitions
                ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }), t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
                : (t.applyTransition(i),
                  t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                  e &&
                      setTimeout(function () {
                          t.disableTransition(i), e.call();
                      }, t.options.speed));
        }),
        (e.prototype.fadeSlideOut = function (i) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
            var e = this;
            null !== i && ((e.$slidesCache = e.$slides), e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit());
        }),
        (e.prototype.focusHandler = function () {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
                t.stopImmediatePropagation();
                var o = i(this);
                setTimeout(function () {
                    e.options.pauseOnFocus && ((e.focussed = o.is(":focus")), e.autoPlay());
                }, 0);
            });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
            return this.currentSlide;
        }),
        (e.prototype.getDotCount = function () {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else for (; e < i.slideCount; ) ++o, (e = t + i.options.slidesToScroll), (t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
            else if (!0 === i.options.centerMode) o = i.slideCount;
            else if (i.options.asNavFor) for (; e < i.slideCount; ) ++o, (e = t + i.options.slidesToScroll), (t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
            else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
            return o - 1;
        }),
        (e.prototype.getLeft = function (i) {
            var e,
                t,
                o,
                s,
                n = this,
                r = 0;
            return (
                (n.slideOffset = 0),
                (t = n.$slides.first().outerHeight(!0)),
                !0 === n.options.infinite
                    ? (n.slideCount > n.options.slidesToShow &&
                          ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
                          (s = -1),
                          !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? (s = -1.5) : 1 === n.options.slidesToShow && (s = -2)),
                          (r = t * n.options.slidesToShow * s)),
                      n.slideCount % n.options.slidesToScroll != 0 &&
                          i + n.options.slidesToScroll > n.slideCount &&
                          n.slideCount > n.options.slidesToShow &&
                          (i > n.slideCount
                              ? ((n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1), (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                              : ((n.slideOffset = (n.slideCount % n.options.slidesToScroll) * n.slideWidth * -1), (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
                    : i + n.options.slidesToShow > n.slideCount && ((n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth), (r = (i + n.options.slidesToShow - n.slideCount) * t)),
                n.slideCount <= n.options.slidesToShow && ((n.slideOffset = 0), (r = 0)),
                !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
                    ? (n.slideOffset = (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 - (n.slideWidth * n.slideCount) / 2)
                    : !0 === n.options.centerMode && !0 === n.options.infinite
                    ? (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth)
                    : !0 === n.options.centerMode && ((n.slideOffset = 0), (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
                (e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r),
                !0 === n.options.variableWidth &&
                    ((o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow)),
                    (e = !0 === n.options.rtl ? (o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0) : o[0] ? -1 * o[0].offsetLeft : 0),
                    !0 === n.options.centerMode &&
                        ((o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1)),
                        (e = !0 === n.options.rtl ? (o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0) : o[0] ? -1 * o[0].offsetLeft : 0),
                        (e += (n.$list.width() - o.outerWidth()) / 2))),
                e
            );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption = function (i) {
            return this.options[i];
        }),
        (e.prototype.getNavigableIndexes = function () {
            var i,
                e = this,
                t = 0,
                o = 0,
                s = [];
            for (!1 === e.options.infinite ? (i = e.slideCount) : ((t = -1 * e.options.slidesToScroll), (o = -1 * e.options.slidesToScroll), (i = 2 * e.slideCount)); t < i; )
                s.push(t), (t = o + e.options.slidesToScroll), (o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
            return s;
        }),
        (e.prototype.getSlick = function () {
            return this;
        }),
        (e.prototype.getSlideCount = function () {
            var e,
                t,
                o = this;
            return (
                (t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0),
                !0 === o.options.swipeToSlide
                    ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
                          if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return (e = n), !1;
                      }),
                      Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
                    : o.options.slidesToScroll
            );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
            this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
        }),
        (e.prototype.init = function (e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") ||
                (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()),
                e && t.$slider.trigger("init", [t]),
                !0 === t.options.accessibility && t.initADA(),
                t.options.autoplay && ((t.paused = !1), t.autoPlay());
        }),
        (e.prototype.initADA = function () {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function (i) {
                    return i >= 0 && i < e.slideCount;
                });
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                null !== e.$dots &&
                    (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
                        var s = o.indexOf(t);
                        i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s && i(this).attr({ "aria-describedby": "slick-slide-control" + e.instanceUid + s });
                    }),
                    e.$dots
                        .attr("role", "tablist")
                        .find("li")
                        .each(function (s) {
                            var n = o[s];
                            i(this).attr({ role: "presentation" }),
                                i(this)
                                    .find("button")
                                    .first()
                                    .attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + s, "aria-controls": "slick-slide" + e.instanceUid + n, "aria-label": s + 1 + " of " + t, "aria-selected": null, tabindex: "-1" });
                        })
                        .eq(e.currentSlide)
                        .find("button")
                        .attr({ "aria-selected": "true", tabindex: "0" })
                        .end());
            for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA();
        }),
        (e.prototype.initArrowEvents = function () {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide),
                i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide),
                !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
        }),
        (e.prototype.initDotEvents = function () {
            var e = this;
            !0 === e.options.dots && (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
                !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
                e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
                e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
                e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
                e.$list.on("click.slick", e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
                !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
                !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
                i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
                i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                i(e.setPosition);
        }),
        (e.prototype.initUI = function () {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
        }),
        (e.prototype.keyHandler = function (i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === i.keyCode && !0 === e.options.accessibility
                    ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } })
                    : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
        }),
        (e.prototype.lazyLoad = function () {
            function e(e) {
                i("img[data-lazy]", e).each(function () {
                    var e = i(this),
                        t = i(this).attr("data-lazy"),
                        o = i(this).attr("data-srcset"),
                        s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    (r.onload = function () {
                        e.animate({ opacity: 0 }, 100, function () {
                            o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                                    e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                }),
                                n.$slider.trigger("lazyLoaded", [n, e, t]);
                        });
                    }),
                        (r.onerror = function () {
                            e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t]);
                        }),
                        (r.src = t);
                });
            }
            var t,
                o,
                s,
                n = this;
            if (
                (!0 === n.options.centerMode
                    ? !0 === n.options.infinite
                        ? (s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2)
                        : ((o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1))), (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
                    : ((o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide), (s = Math.ceil(o + n.options.slidesToShow)), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
                (t = n.$slider.find(".slick-slide").slice(o, s)),
                "anticipated" === n.options.lazyLoad)
            )
                for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), (t = (t = t.add(d.eq(r))).add(d.eq(l))), r--, l++;
            e(t),
                n.slideCount <= n.options.slidesToShow
                    ? e(n.$slider.find(".slick-slide"))
                    : n.currentSlide >= n.slideCount - n.options.slidesToShow
                    ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
                    : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow));
        }),
        (e.prototype.loadSlider = function () {
            var i = this;
            i.setPosition(), i.$slideTrack.css({ opacity: 1 }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext = function () {
            this.changeSlide({ data: { message: "next" } });
        }),
        (e.prototype.orientationChange = function () {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause = function () {
            var i = this;
            i.autoPlayClear(), (i.paused = !0);
        }),
        (e.prototype.play = e.prototype.slickPlay = function () {
            var i = this;
            i.autoPlay(), (i.options.autoplay = !0), (i.paused = !1), (i.focussed = !1), (i.interrupted = !1);
        }),
        (e.prototype.postSlide = function (e) {
            var t = this;
            t.unslicked ||
                (t.$slider.trigger("afterChange", [t, e]),
                (t.animating = !1),
                t.slideCount > t.options.slidesToShow && t.setPosition(),
                (t.swipeLeft = null),
                t.options.autoplay && t.autoPlay(),
                !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
        }),
        (e.prototype.prev = e.prototype.slickPrev = function () {
            this.changeSlide({ data: { message: "previous" } });
        }),
        (e.prototype.preventDefault = function (i) {
            i.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var t,
                o,
                s,
                n,
                r,
                l = this,
                d = i("img[data-lazy]", l.$slider);
            d.length
                ? ((t = d.first()),
                  (o = t.attr("data-lazy")),
                  (s = t.attr("data-srcset")),
                  (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
                  ((r = document.createElement("img")).onload = function () {
                      s && (t.attr("srcset", s), n && t.attr("sizes", n)),
                          t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                          !0 === l.options.adaptiveHeight && l.setPosition(),
                          l.$slider.trigger("lazyLoaded", [l, t, o]),
                          l.progressiveLazyLoad();
                  }),
                  (r.onerror = function () {
                      e < 3
                          ? setTimeout(function () {
                                l.progressiveLazyLoad(e + 1);
                            }, 500)
                          : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad());
                  }),
                  (r.src = o))
                : l.$slider.trigger("allImagesLoaded", [l]);
        }),
        (e.prototype.refresh = function (e) {
            var t,
                o,
                s = this;
            (o = s.slideCount - s.options.slidesToShow),
                !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (t = s.currentSlide),
                s.destroy(!0),
                i.extend(s, s.initials, { currentSlide: t }),
                s.init(),
                e || s.changeSlide({ data: { message: "index", index: t } }, !1);
        }),
        (e.prototype.registerBreakpoints = function () {
            var e,
                t,
                o,
                s = this,
                n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                        for (t = n[e].breakpoint; o >= 0; ) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                        s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
                    }
                s.breakpoints.sort(function (i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (e.prototype.reinit = function () {
            var e = this;
            (e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
                (e.slideCount = e.$slides.length),
                e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0),
                !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger("reInit", [e]);
        }),
        (e.prototype.resize = function () {
            var e = this;
            i(window).width() !== e.windowWidth &&
                (clearTimeout(e.windowDelay),
                (e.windowDelay = window.setTimeout(function () {
                    (e.windowWidth = i(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
                }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
            var o = this;
            if (((i = "boolean" == typeof i ? (!0 === (e = i) ? 0 : o.slideCount - 1) : !0 === e ? --i : i), o.slideCount < 1 || i < 0 || i > o.slideCount - 1)) return !1;
            o.unload(),
                !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
                (o.$slides = o.$slideTrack.children(this.options.slide)),
                o.$slideTrack.children(this.options.slide).detach(),
                o.$slideTrack.append(o.$slides),
                (o.$slidesCache = o.$slides),
                o.reinit();
        }),
        (e.prototype.setCSS = function (i) {
            var e,
                t,
                o = this,
                s = {};
            !0 === o.options.rtl && (i = -i),
                (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (s[o.positionProp] = i),
                !1 === o.transformsEnabled
                    ? o.$slideTrack.css(s)
                    : ((s = {}), !1 === o.cssTransitions ? ((s[o.animType] = "translate(" + e + ", " + t + ")"), o.$slideTrack.css(s)) : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"), o.$slideTrack.css(s)));
        }),
        (e.prototype.setDimensions = function () {
            var i = this;
            !1 === i.options.vertical
                ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding })
                : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()),
                !1 === i.options.vertical && !1 === i.options.variableWidth
                    ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length)))
                    : !0 === i.options.variableWidth
                    ? i.$slideTrack.width(5e3 * i.slideCount)
                    : ((i.slideWidth = Math.ceil(i.listWidth)), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
            var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
        }),
        (e.prototype.setFade = function () {
            var e,
                t = this;
            t.$slides.each(function (o, s) {
                (e = t.slideWidth * o * -1),
                    !0 === t.options.rtl ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 }) : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
            }),
                t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
        }),
        (e.prototype.setHeight = function () {
            var i = this;
            if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e);
            }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption = function () {
            var e,
                t,
                o,
                s,
                n,
                r = this,
                l = !1;
            if (
                ("object" === i.type(arguments[0])
                    ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
                    : "string" === i.type(arguments[0]) &&
                      ((o = arguments[0]), (s = arguments[1]), (l = arguments[2]), "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? (n = "responsive") : void 0 !== arguments[1] && (n = "single")),
                "single" === n)
            )
                r.options[o] = s;
            else if ("multiple" === n)
                i.each(o, function (i, e) {
                    r.options[i] = e;
                });
            else if ("responsive" === n)
                for (t in s)
                    if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0; ) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(s[t]);
                    }
            l && (r.unload(), r.reinit());
        }),
        (e.prototype.setPosition = function () {
            var i = this;
            i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i]);
        }),
        (e.prototype.setProps = function () {
            var i = this,
                e = document.body.style;
            (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
                "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
                (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) || (!0 === i.options.useCSS && (i.cssTransitions = !0)),
                i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : (i.options.zIndex = i.defaults.zIndex)),
                void 0 !== e.OTransform && ((i.animType = "OTransform"), (i.transformType = "-o-transform"), (i.transitionType = "OTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
                void 0 !== e.MozTransform && ((i.animType = "MozTransform"), (i.transformType = "-moz-transform"), (i.transitionType = "MozTransition"), void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
                void 0 !== e.webkitTransform &&
                    ((i.animType = "webkitTransform"), (i.transformType = "-webkit-transform"), (i.transitionType = "webkitTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
                void 0 !== e.msTransform && ((i.animType = "msTransform"), (i.transformType = "-ms-transform"), (i.transitionType = "msTransition"), void 0 === e.msTransform && (i.animType = !1)),
                void 0 !== e.transform && !1 !== i.animType && ((i.animType = "transform"), (i.transformType = "transform"), (i.transitionType = "transition")),
                (i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType);
        }),
        (e.prototype.setSlideClasses = function (i) {
            var e,
                t,
                o,
                s,
                n = this;
            if (((t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode)) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                (e = Math.floor(n.options.slidesToShow / 2)),
                    !0 === n.options.infinite &&
                        (i >= e && i <= n.slideCount - 1 - e
                            ? n.$slides
                                  .slice(i - e + r, i + e + 1)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")
                            : ((o = n.options.slidesToShow + i),
                              t
                                  .slice(o - e + 1 + r, o + e + 2)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")),
                        0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
                    n.$slides.eq(i).addClass("slick-center");
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow
                    ? n.$slides
                          .slice(i, i + n.options.slidesToShow)
                          .addClass("slick-active")
                          .attr("aria-hidden", "false")
                    : t.length <= n.options.slidesToShow
                    ? t.addClass("slick-active").attr("aria-hidden", "false")
                    : ((s = n.slideCount % n.options.slidesToShow),
                      (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
                      n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow
                          ? t
                                .slice(o - (n.options.slidesToShow - s), o + s)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false")
                          : t
                                .slice(o, o + n.options.slidesToShow)
                                .addClass("slick-active")
                                .attr("aria-hidden", "false"));
            ("ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad) || n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function () {
            var e,
                t,
                o,
                s = this;
            if ((!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && ((t = null), s.slideCount > s.options.slidesToShow))) {
                for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1)
                    (t = e - 1),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t - s.slideCount)
                            .prependTo(s.$slideTrack)
                            .addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    (t = e),
                        i(s.$slides[t])
                            .clone(!0)
                            .attr("id", "")
                            .attr("data-slick-index", t + s.slideCount)
                            .appendTo(s.$slideTrack)
                            .addClass("slick-cloned");
                s.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function () {
                        i(this).attr("id", "");
                    });
            }
        }),
        (e.prototype.interrupt = function (i) {
            var e = this;
            i || e.autoPlay(), (e.interrupted = i);
        }),
        (e.prototype.selectHandler = function (e) {
            var t = this,
                o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s);
        }),
        (e.prototype.slideHandler = function (i, e, t) {
            var o,
                s,
                n,
                r,
                l,
                d = null,
                a = this;
            if (((e = e || !1), !((!0 === a.animating && !0 === a.options.waitForAnimate) || (!0 === a.options.fade && a.currentSlide === i))))
                if (
                    (!1 === e && a.asNavFor(i),
                    (o = i),
                    (d = a.getLeft(o)),
                    (r = a.getLeft(a.currentSlide)),
                    (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
                    !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                )
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                    !1 === a.options.fade &&
                        ((o = a.currentSlide),
                        !0 !== t
                            ? a.animateSlide(r, function () {
                                  a.postSlide(o);
                              })
                            : a.postSlide(o));
                else {
                    if (
                        (a.options.autoplay && clearInterval(a.autoPlayTimer),
                        (s =
                            o < 0
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                                    : a.slideCount + o
                                : o >= a.slideCount
                                ? a.slideCount % a.options.slidesToScroll != 0
                                    ? 0
                                    : o - a.slideCount
                                : o),
                        (a.animating = !0),
                        a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                        (n = a.currentSlide),
                        (a.currentSlide = s),
                        a.setSlideClasses(a.currentSlide),
                        a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                        a.updateDots(),
                        a.updateArrows(),
                        !0 === a.options.fade)
                    )
                        return (
                            !0 !== t
                                ? (a.fadeSlideOut(n),
                                  a.fadeSlide(s, function () {
                                      a.postSlide(s);
                                  }))
                                : a.postSlide(s),
                            void a.animateHeight()
                        );
                    !0 !== t
                        ? a.animateSlide(d, function () {
                              a.postSlide(s);
                          })
                        : a.postSlide(s);
                }
        }),
        (e.prototype.startLoad = function () {
            var i = this;
            !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()),
                !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
                i.$slider.addClass("slick-loading");
        }),
        (e.prototype.swipeDirection = function () {
            var i,
                e,
                t,
                o,
                s = this;
            return (
                (i = s.touchObject.startX - s.touchObject.curX),
                (e = s.touchObject.startY - s.touchObject.curY),
                (t = Math.atan2(e, i)),
                (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o <= 360 && o >= 315
                    ? !1 === s.options.rtl
                        ? "left"
                        : "right"
                    : o >= 135 && o <= 225
                    ? !1 === s.options.rtl
                        ? "right"
                        : "left"
                    : !0 === s.options.verticalSwiping
                    ? o >= 35 && o <= 135
                        ? "down"
                        : "up"
                    : "vertical"
            );
        }),
        (e.prototype.swipeEnd = function (i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling)) return (o.scrolling = !1), !1;
            if (((o.interrupted = !1), (o.shouldClick = !(o.touchObject.swipeLength > 10)), void 0 === o.touchObject.curX)) return !1;
            if ((!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe)) {
                switch ((t = o.swipeDirection())) {
                    case "left":
                    case "down":
                        (e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount()), (o.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount()), (o.currentDirection = 1);
                }
                "vertical" != t && (o.slideHandler(e), (o.touchObject = {}), o.$slider.trigger("swipe", [o, t]));
            } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function (i) {
            var e = this;
            if (!(!1 === e.options.swipe || ("ontouchend" in document && !1 === e.options.swipe) || (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))))
                switch (
                    ((e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1),
                    (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                    !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                    i.data.action)
                ) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i);
                }
        }),
        (e.prototype.swipeMove = function (i) {
            var e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            return (
                (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
                !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                    ((e = l.getLeft(l.currentSlide)),
                    (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
                    (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
                    (l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2)))),
                    (r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2)))),
                    !l.options.verticalSwiping && !l.swiping && r > 4
                        ? ((l.scrolling = !0), !1)
                        : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
                          (t = l.swipeDirection()),
                          void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && ((l.swiping = !0), i.preventDefault()),
                          (s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
                          !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
                          (o = l.touchObject.swipeLength),
                          (l.touchObject.edgeHit = !1),
                          !1 === l.options.infinite &&
                              ((0 === l.currentSlide && "right" === t) || (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                              ((o = l.touchObject.swipeLength * l.options.edgeFriction), (l.touchObject.edgeHit = !0)),
                          !1 === l.options.vertical ? (l.swipeLeft = e + o * s) : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
                          !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
                          !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? ((l.swipeLeft = null), !1) : void l.setCSS(l.swipeLeft))))
            );
        }),
        (e.prototype.swipeStart = function (i) {
            var e,
                t = this;
            if (((t.interrupted = !0), 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)) return (t.touchObject = {}), !1;
            void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
                (t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX),
                (t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY),
                (t.dragging = !0);
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
            var i = this;
            null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit());
        }),
        (e.prototype.unload = function () {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
        }),
        (e.prototype.unslick = function (i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]), e.destroy();
        }),
        (e.prototype.updateArrows = function () {
            var i = this;
            Math.floor(i.options.slidesToShow / 2),
                !0 === i.options.arrows &&
                    i.slideCount > i.options.slidesToShow &&
                    !i.options.infinite &&
                    (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                    0 === i.currentSlide
                        ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                        : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode
                        ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                        : i.currentSlide >= i.slideCount - 1 &&
                          !0 === i.options.centerMode &&
                          (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
        }),
        (e.prototype.updateDots = function () {
            var i = this;
            null !== i.$dots &&
                (i.$dots.find("li").removeClass("slick-active").end(),
                i.$dots
                    .find("li")
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass("slick-active"));
        }),
        (e.prototype.visibility = function () {
            var i = this;
            i.options.autoplay && (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
        }),
        (i.fn.slick = function () {
            var i,
                t,
                o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++) if (("object" == typeof s || void 0 === s ? (o[i].slick = new e(o[i], s)) : (t = o[i].slick[s].apply(o[i].slick, n)), void 0 !== t)) return t;
            return o;
        });
});

!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.AOS = t());
})(this, function () {
    "use strict";
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        t = "Expected a function",
        n = NaN,
        o = "[object Symbol]",
        i = /^\s+|\s+$/g,
        a = /^[-+]0x[0-9a-f]+$/i,
        r = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        s = parseInt,
        u = "object" == typeof e && e && e.Object === Object && e,
        d = "object" == typeof self && self && self.Object === Object && self,
        l = u || d || Function("return this")(),
        f = Object.prototype.toString,
        m = Math.max,
        p = Math.min,
        b = function () {
            return l.Date.now();
        };
    function v(e, n, o) {
        var i,
            a,
            r,
            c,
            s,
            u,
            d = 0,
            l = !1,
            f = !1,
            v = !0;
        if ("function" != typeof e) throw new TypeError(t);
        function y(t) {
            var n = i,
                o = a;
            return (i = a = void 0), (d = t), (c = e.apply(o, n));
        }
        function h(e) {
            var t = e - u;
            return void 0 === u || t >= n || t < 0 || (f && e - d >= r);
        }
        function k() {
            var e = b();
            if (h(e)) return x(e);
            s = setTimeout(
                k,
                (function (e) {
                    var t = n - (e - u);
                    return f ? p(t, r - (e - d)) : t;
                })(e)
            );
        }
        function x(e) {
            return (s = void 0), v && i ? y(e) : ((i = a = void 0), c);
        }
        function O() {
            var e = b(),
                t = h(e);
            if (((i = arguments), (a = this), (u = e), t)) {
                if (void 0 === s)
                    return (function (e) {
                        return (d = e), (s = setTimeout(k, n)), l ? y(e) : c;
                    })(u);
                if (f) return (s = setTimeout(k, n)), y(u);
            }
            return void 0 === s && (s = setTimeout(k, n)), c;
        }
        return (
            (n = w(n) || 0),
            g(o) && ((l = !!o.leading), (r = (f = "maxWait" in o) ? m(w(o.maxWait) || 0, n) : r), (v = "trailing" in o ? !!o.trailing : v)),
            (O.cancel = function () {
                void 0 !== s && clearTimeout(s), (d = 0), (i = u = a = s = void 0);
            }),
            (O.flush = function () {
                return void 0 === s ? c : x(b());
            }),
            O
        );
    }
    function g(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    function w(e) {
        if ("number" == typeof e) return e;
        if (
            (function (e) {
                return (
                    "symbol" == typeof e ||
                    ((function (e) {
                        return !!e && "object" == typeof e;
                    })(e) &&
                        f.call(e) == o)
                );
            })(e)
        )
            return n;
        if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(i, "");
        var u = r.test(e);
        return u || c.test(e) ? s(e.slice(2), u ? 2 : 8) : a.test(e) ? n : +e;
    }
    var y = function (e, n, o) {
            var i = !0,
                a = !0;
            if ("function" != typeof e) throw new TypeError(t);
            return g(o) && ((i = "leading" in o ? !!o.leading : i), (a = "trailing" in o ? !!o.trailing : a)), v(e, n, { leading: i, maxWait: n, trailing: a });
        },
        h = "Expected a function",
        k = NaN,
        x = "[object Symbol]",
        O = /^\s+|\s+$/g,
        j = /^[-+]0x[0-9a-f]+$/i,
        E = /^0b[01]+$/i,
        N = /^0o[0-7]+$/i,
        z = parseInt,
        C = "object" == typeof e && e && e.Object === Object && e,
        A = "object" == typeof self && self && self.Object === Object && self,
        q = C || A || Function("return this")(),
        L = Object.prototype.toString,
        T = Math.max,
        M = Math.min,
        S = function () {
            return q.Date.now();
        };
    function D(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
    }
    function H(e) {
        if ("number" == typeof e) return e;
        if (
            (function (e) {
                return (
                    "symbol" == typeof e ||
                    ((function (e) {
                        return !!e && "object" == typeof e;
                    })(e) &&
                        L.call(e) == x)
                );
            })(e)
        )
            return k;
        if (D(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = D(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(O, "");
        var n = E.test(e);
        return n || N.test(e) ? z(e.slice(2), n ? 2 : 8) : j.test(e) ? k : +e;
    }
    var $ = function (e, t, n) {
            var o,
                i,
                a,
                r,
                c,
                s,
                u = 0,
                d = !1,
                l = !1,
                f = !0;
            if ("function" != typeof e) throw new TypeError(h);
            function m(t) {
                var n = o,
                    a = i;
                return (o = i = void 0), (u = t), (r = e.apply(a, n));
            }
            function p(e) {
                var n = e - s;
                return void 0 === s || n >= t || n < 0 || (l && e - u >= a);
            }
            function b() {
                var e = S();
                if (p(e)) return v(e);
                c = setTimeout(
                    b,
                    (function (e) {
                        var n = t - (e - s);
                        return l ? M(n, a - (e - u)) : n;
                    })(e)
                );
            }
            function v(e) {
                return (c = void 0), f && o ? m(e) : ((o = i = void 0), r);
            }
            function g() {
                var e = S(),
                    n = p(e);
                if (((o = arguments), (i = this), (s = e), n)) {
                    if (void 0 === c)
                        return (function (e) {
                            return (u = e), (c = setTimeout(b, t)), d ? m(e) : r;
                        })(s);
                    if (l) return (c = setTimeout(b, t)), m(s);
                }
                return void 0 === c && (c = setTimeout(b, t)), r;
            }
            return (
                (t = H(t) || 0),
                D(n) && ((d = !!n.leading), (a = (l = "maxWait" in n) ? T(H(n.maxWait) || 0, t) : a), (f = "trailing" in n ? !!n.trailing : f)),
                (g.cancel = function () {
                    void 0 !== c && clearTimeout(c), (u = 0), (o = s = i = c = void 0);
                }),
                (g.flush = function () {
                    return void 0 === c ? r : v(S());
                }),
                g
            );
        },
        W = function () {};
    function P(e) {
        e &&
            e.forEach(function (e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                    n = Array.prototype.slice.call(e.removedNodes);
                if (
                    (function e(t) {
                        var n = void 0,
                            o = void 0;
                        for (n = 0; n < t.length; n += 1) {
                            if ((o = t[n]).dataset && o.dataset.aos) return !0;
                            if (o.children && e(o.children)) return !0;
                        }
                        return !1;
                    })(t.concat(n))
                )
                    return W();
            });
    }
    function Y() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }
    var _ = {
            isSupported: function () {
                return !!Y();
            },
            ready: function (e, t) {
                var n = window.document,
                    o = new (Y())(P);
                (W = t), o.observe(n.documentElement, { childList: !0, subtree: !0, removedNodes: !0 });
            },
        },
        B = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        },
        F = (function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
                }
            }
            return function (t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        })(),
        I =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                }
                return e;
            },
        K = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        G = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        J = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        Q = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    function R() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
    }
    var U = new ((function () {
            function e() {
                B(this, e);
            }
            return (
                F(e, [
                    {
                        key: "phone",
                        value: function () {
                            var e = R();
                            return !(!K.test(e) && !G.test(e.substr(0, 4)));
                        },
                    },
                    {
                        key: "mobile",
                        value: function () {
                            var e = R();
                            return !(!J.test(e) && !Q.test(e.substr(0, 4)));
                        },
                    },
                    {
                        key: "tablet",
                        value: function () {
                            return this.mobile() && !this.phone();
                        },
                    },
                    {
                        key: "ie11",
                        value: function () {
                            return "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                        },
                    },
                ]),
                e
            );
        })())(),
        V = function (e, t) {
            var n = void 0;
            return U.ie11() ? (n = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, { detail: t }) : (n = new CustomEvent(e, { detail: t })), document.dispatchEvent(n);
        },
        X = function (e) {
            return e.forEach(function (e, t) {
                return (function (e, t) {
                    var n = e.options,
                        o = e.position,
                        i = e.node,
                        a =
                            (e.data,
                            function () {
                                e.animated &&
                                    ((function (e, t) {
                                        t &&
                                            t.forEach(function (t) {
                                                return e.classList.remove(t);
                                            });
                                    })(i, n.animatedClassNames),
                                    V("aos:out", i),
                                    e.options.id && V("aos:in:" + e.options.id, i),
                                    (e.animated = !1));
                            });
                    n.mirror && t >= o.out && !n.once
                        ? a()
                        : t >= o.in
                        ? e.animated ||
                          ((function (e, t) {
                              t &&
                                  t.forEach(function (t) {
                                      return e.classList.add(t);
                                  });
                          })(i, n.animatedClassNames),
                          V("aos:in", i),
                          e.options.id && V("aos:in:" + e.options.id, i),
                          (e.animated = !0))
                        : e.animated && !n.once && a();
                })(e, window.pageYOffset);
            });
        },
        Z = function (e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop); ) (t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0)), (n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0)), (e = e.offsetParent);
            return { top: n, left: t };
        },
        ee = function (e, t, n) {
            var o = e.getAttribute("data-aos-" + t);
            if (void 0 !== o) {
                if ("true" === o) return !0;
                if ("false" === o) return !1;
            }
            return o || n;
        },
        te = function (e, t) {
            return (
                e.forEach(function (e, n) {
                    var o = ee(e.node, "mirror", t.mirror),
                        i = ee(e.node, "once", t.once),
                        a = ee(e.node, "id"),
                        r = t.useClassNames && e.node.getAttribute("data-aos"),
                        c = [t.animatedClassName].concat(r ? r.split(" ") : []).filter(function (e) {
                            return "string" == typeof e;
                        });
                    t.initClassName && e.node.classList.add(t.initClassName),
                        (e.position = {
                            in: (function (e, t, n) {
                                var o = window.innerHeight,
                                    i = ee(e, "anchor"),
                                    a = ee(e, "anchor-placement"),
                                    r = Number(ee(e, "offset", a ? 0 : t)),
                                    c = a || n,
                                    s = e;
                                i && document.querySelectorAll(i) && (s = document.querySelectorAll(i)[0]);
                                var u = Z(s).top - o;
                                switch (c) {
                                    case "top-bottom":
                                        break;
                                    case "center-bottom":
                                        u += s.offsetHeight / 2;
                                        break;
                                    case "bottom-bottom":
                                        u += s.offsetHeight;
                                        break;
                                    case "top-center":
                                        u += o / 2;
                                        break;
                                    case "center-center":
                                        u += o / 2 + s.offsetHeight / 2;
                                        break;
                                    case "bottom-center":
                                        u += o / 2 + s.offsetHeight;
                                        break;
                                    case "top-top":
                                        u += o;
                                        break;
                                    case "bottom-top":
                                        u += o + s.offsetHeight;
                                        break;
                                    case "center-top":
                                        u += o + s.offsetHeight / 2;
                                }
                                return u + r;
                            })(e.node, t.offset, t.anchorPlacement),
                            out:
                                o &&
                                (function (e, t) {
                                    window.innerHeight;
                                    var n = ee(e, "anchor"),
                                        o = ee(e, "offset", t),
                                        i = e;
                                    return n && document.querySelectorAll(n) && (i = document.querySelectorAll(n)[0]), Z(i).top + i.offsetHeight - o;
                                })(e.node, t.offset),
                        }),
                        (e.options = { once: i, mirror: o, animatedClassNames: c, id: a });
                }),
                e
            );
        },
        ne = function () {
            var e = document.querySelectorAll("[data-aos]");
            return Array.prototype.map.call(e, function (e) {
                return { node: e };
            });
        },
        oe = [],
        ie = !1,
        ae = {
            offset: 120,
            delay: 0,
            easing: "ease",
            duration: 400,
            disable: !1,
            once: !1,
            mirror: !1,
            anchorPlacement: "top-bottom",
            startEvent: "DOMContentLoaded",
            animatedClassName: "aos-animate",
            initClassName: "aos-init",
            useClassNames: !1,
            disableMutationObserver: !1,
            throttleDelay: 99,
            debounceDelay: 50,
        },
        re = function () {
            return document.all && !window.atob;
        },
        ce = function () {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && (ie = !0),
                ie &&
                    ((oe = te(oe, ae)),
                    X(oe),
                    window.addEventListener(
                        "scroll",
                        y(function () {
                            X(oe, ae.once);
                        }, ae.throttleDelay)
                    ));
        },
        se = function () {
            if (((oe = ne()), de(ae.disable) || re())) return ue();
            ce();
        },
        ue = function () {
            oe.forEach(function (e, t) {
                e.node.removeAttribute("data-aos"),
                    e.node.removeAttribute("data-aos-easing"),
                    e.node.removeAttribute("data-aos-duration"),
                    e.node.removeAttribute("data-aos-delay"),
                    ae.initClassName && e.node.classList.remove(ae.initClassName),
                    ae.animatedClassName && e.node.classList.remove(ae.animatedClassName);
            });
        },
        de = function (e) {
            return !0 === e || ("mobile" === e && U.mobile()) || ("phone" === e && U.phone()) || ("tablet" === e && U.tablet()) || ("function" == typeof e && !0 === e());
        };
    return {
        init: function (e) {
            return (
                (ae = I(ae, e)),
                (oe = ne()),
                ae.disableMutationObserver ||
                    _.isSupported() ||
                    (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),
                    (ae.disableMutationObserver = !0)),
                ae.disableMutationObserver || _.ready("[data-aos]", se),
                de(ae.disable) || re()
                    ? ue()
                    : (document.querySelector("body").setAttribute("data-aos-easing", ae.easing),
                      document.querySelector("body").setAttribute("data-aos-duration", ae.duration),
                      document.querySelector("body").setAttribute("data-aos-delay", ae.delay),
                      -1 === ["DOMContentLoaded", "load"].indexOf(ae.startEvent)
                          ? document.addEventListener(ae.startEvent, function () {
                                ce(!0);
                            })
                          : window.addEventListener("load", function () {
                                ce(!0);
                            }),
                      "DOMContentLoaded" === ae.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 && ce(!0),
                      window.addEventListener("resize", $(ce, ae.debounceDelay, !0)),
                      window.addEventListener("orientationchange", $(ce, ae.debounceDelay, !0)),
                      oe)
            );
        },
        refresh: ce,
        refreshHard: se,
    };
});

/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundblendmode-objectfit-touchevents-setclasses !*/
!(function (e, n, t) {
    function r(e, n) {
        return typeof e === n;
    }
    function o() {
        var e, n, t, o, i, s, a;
        for (var f in y)
            if (y.hasOwnProperty(f)) {
                if (((e = []), (n = y[f]), n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))) for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++)
                    (s = e[i]),
                        (a = s.split(".")),
                        1 === a.length ? (Modernizr[a[0]] = o) : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), (Modernizr[a[0]][a[1]] = o)),
                        g.push((o ? "" : "no-") + a.join("-"));
            }
    }
    function i(e) {
        var n = _.className,
            t = Modernizr._config.classPrefix || "";
        if ((x && (n = n.baseVal), Modernizr._config.enableJSClass)) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2");
        }
        Modernizr._config.enableClasses && ((n += " " + t + e.join(" " + t)), x ? (_.className.baseVal = n) : (_.className = n));
    }
    function s(e) {
        return e
            .replace(/([a-z])-([a-z])/g, function (e, n, t) {
                return n + t.toUpperCase();
            })
            .replace(/^-/, "");
    }
    function a() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : x ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
    }
    function f() {
        var e = n.body;
        return e || ((e = a(x ? "svg" : "body")), (e.fake = !0)), e;
    }
    function l(e, t, r, o) {
        var i,
            s,
            l,
            u,
            d = "modernizr",
            c = a("div"),
            p = f();
        if (parseInt(r, 10)) for (; r--; ) (l = a("div")), (l.id = o ? o[r] : d + (r + 1)), c.appendChild(l);
        return (
            (i = a("style")),
            (i.type = "text/css"),
            (i.id = "s" + d),
            (p.fake ? p : c).appendChild(i),
            p.appendChild(c),
            i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(n.createTextNode(e)),
            (c.id = d),
            p.fake && ((p.style.background = ""), (p.style.overflow = "hidden"), (u = _.style.overflow), (_.style.overflow = "hidden"), _.appendChild(p)),
            (s = t(c, e)),
            p.fake ? (p.parentNode.removeChild(p), (_.style.overflow = u), _.offsetHeight) : c.parentNode.removeChild(c),
            !!s
        );
    }
    function u(e, n) {
        return !!~("" + e).indexOf(n);
    }
    function d(e, n) {
        return function () {
            return e.apply(n, arguments);
        };
    }
    function c(e, n, t) {
        var o;
        for (var i in e) if (e[i] in n) return t === !1 ? e[i] : ((o = n[e[i]]), r(o, "function") ? d(o, t || n) : o);
        return !1;
    }
    function p(e) {
        return e
            .replace(/([A-Z])/g, function (e, n) {
                return "-" + n.toLowerCase();
            })
            .replace(/^ms-/, "-ms-");
    }
    function m(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--; ) if (e.CSS.supports(p(n[o]), r)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--; ) i.push("(" + p(n[o]) + ":" + r + ")");
            return (
                (i = i.join(" or ")),
                l("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
                    return "absolute" == getComputedStyle(e, null).position;
                })
            );
        }
        return t;
    }
    function v(e, n, o, i) {
        function f() {
            d && (delete P.style, delete P.modElem);
        }
        if (((i = r(i, "undefined") ? !1 : i), !r(o, "undefined"))) {
            var l = m(e, o);
            if (!r(l, "undefined")) return l;
        }
        for (var d, c, p, v, h, g = ["modernizr", "tspan", "samp"]; !P.style && g.length; ) (d = !0), (P.modElem = a(g.shift())), (P.style = P.modElem.style);
        for (p = e.length, c = 0; p > c; c++)
            if (((v = e[c]), (h = P.style[v]), u(v, "-") && (v = s(v)), P.style[v] !== t)) {
                if (i || r(o, "undefined")) return f(), "pfx" == n ? v : !0;
                try {
                    P.style[v] = o;
                } catch (y) {}
                if (P.style[v] != h) return f(), "pfx" == n ? v : !0;
            }
        return f(), !1;
    }
    function h(e, n, t, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + T.join(s + " ") + s).split(" ");
        return r(n, "string") || r(n, "undefined") ? v(a, n, o, i) : ((a = (e + " " + z.join(s + " ") + s).split(" ")), c(a, n, t));
    }
    var g = [],
        y = [],
        C = {
            _version: "3.3.1",
            _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
            _q: [],
            on: function (e, n) {
                var t = this;
                setTimeout(function () {
                    n(t[e]);
                }, 0);
            },
            addTest: function (e, n, t) {
                y.push({ name: e, fn: n, options: t });
            },
            addAsyncTest: function (e) {
                y.push({ name: null, fn: e });
            },
        },
        Modernizr = function () {};
    (Modernizr.prototype = C), (Modernizr = new Modernizr());
    var _ = n.documentElement,
        x = "svg" === _.nodeName.toLowerCase(),
        b = C._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    C._prefixes = b;
    var w = (C.testStyles = l);
    Modernizr.addTest("touchevents", function () {
        var t;
        if ("ontouchstart" in e || (e.DocumentTouch && n instanceof DocumentTouch)) t = !0;
        else {
            var r = ["@media (", b.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            w(r, function (e) {
                t = 9 === e.offsetTop;
            });
        }
        return t;
    });
    var S = "Moz O ms Webkit",
        T = C._config.usePrefixes ? S.split(" ") : [];
    C._cssomPrefixes = T;
    var j = function (n) {
        var r,
            o = b.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return t;
        if (!n) return !1;
        if (((n = n.replace(/^@/, "")), (r = n.replace(/-/g, "_").toUpperCase() + "_RULE"), r in i)) return "@" + n;
        for (var s = 0; o > s; s++) {
            var a = b[s],
                f = a.toUpperCase() + "_" + r;
            if (f in i) return "@-" + a.toLowerCase() + "-" + n;
        }
        return !1;
    };
    C.atRule = j;
    var z = C._config.usePrefixes ? S.toLowerCase().split(" ") : [];
    C._domPrefixes = z;
    var E = { elem: a("modernizr") };
    Modernizr._q.push(function () {
        delete E.elem;
    });
    var P = { style: E.elem.style };
    Modernizr._q.unshift(function () {
        delete P.style;
    }),
        (C.testAllProps = h);
    var k = (C.prefixed = function (e, n, t) {
        return 0 === e.indexOf("@") ? j(e) : (-1 != e.indexOf("-") && (e = s(e)), n ? h(e, n, t) : h(e, "pfx"));
    });
    Modernizr.addTest("backgroundblendmode", k("backgroundBlendMode", "text")), Modernizr.addTest("objectfit", !!k("objectFit"), { aliases: ["object-fit"] }), o(), i(g), delete C.addTest, delete C.addAsyncTest;
    for (var N = 0; N < Modernizr._q.length; N++) Modernizr._q[N]();
    e.Modernizr = Modernizr;
})(window, document);
window.fp_easings = {
    def: "easeOutQuad",
    linear: function (n, t, e, u) {
        return (e * n) / u + t;
    },
    swing: function (n, t, e, u) {
        return window.fp_easings[window.fp_easings.def](n, t, e, u);
    },
    easeInQuad: function (n, t, e, u) {
        return e * (n /= u) * n + t;
    },
    easeOutQuad: function (n, t, e, u) {
        return -e * (n /= u) * (n - 2) + t;
    },
    easeInOutQuad: function (n, t, e, u) {
        return (n /= u / 2) < 1 ? (e / 2) * n * n + t : (-e / 2) * (--n * (n - 2) - 1) + t;
    },
    easeInCubic: function (n, t, e, u) {
        return e * (n /= u) * n * n + t;
    },
    easeOutCubic: function (n, t, e, u) {
        return e * ((n = n / u - 1) * n * n + 1) + t;
    },
    easeInOutCubic: function (n, t, e, u) {
        return (n /= u / 2) < 1 ? (e / 2) * n * n * n + t : (e / 2) * ((n -= 2) * n * n + 2) + t;
    },
    easeInQuart: function (n, t, e, u) {
        return e * (n /= u) * n * n * n + t;
    },
    easeOutQuart: function (n, t, e, u) {
        return -e * ((n = n / u - 1) * n * n * n - 1) + t;
    },
    easeInOutQuart: function (n, t, e, u) {
        return (n /= u / 2) < 1 ? (e / 2) * n * n * n * n + t : (-e / 2) * ((n -= 2) * n * n * n - 2) + t;
    },
    easeInQuint: function (n, t, e, u) {
        return e * (n /= u) * n * n * n * n + t;
    },
    easeOutQuint: function (n, t, e, u) {
        return e * ((n = n / u - 1) * n * n * n * n + 1) + t;
    },
    easeInOutQuint: function (n, t, e, u) {
        return (n /= u / 2) < 1 ? (e / 2) * n * n * n * n * n + t : (e / 2) * ((n -= 2) * n * n * n * n + 2) + t;
    },
    easeInSine: function (n, t, e, u) {
        return -e * Math.cos((n / u) * (Math.PI / 2)) + e + t;
    },
    easeOutSine: function (n, t, e, u) {
        return e * Math.sin((n / u) * (Math.PI / 2)) + t;
    },
    easeInOutSine: function (n, t, e, u) {
        return (-e / 2) * (Math.cos((Math.PI * n) / u) - 1) + t;
    },
    easeInExpo: function (n, t, e, u) {
        return 0 == n ? t : e * Math.pow(2, 10 * (n / u - 1)) + t;
    },
    easeOutExpo: function (n, t, e, u) {
        return n == u ? t + e : e * (1 - Math.pow(2, (-10 * n) / u)) + t;
    },
    easeInOutExpo: function (n, t, e, u) {
        return 0 == n ? t : n == u ? t + e : (n /= u / 2) < 1 ? (e / 2) * Math.pow(2, 10 * (n - 1)) + t : (e / 2) * (2 - Math.pow(2, -10 * --n)) + t;
    },
    easeInCirc: function (n, t, e, u) {
        return -e * (Math.sqrt(1 - (n /= u) * n) - 1) + t;
    },
    easeOutCirc: function (n, t, e, u) {
        return e * Math.sqrt(1 - (n = n / u - 1) * n) + t;
    },
    easeInOutCirc: function (n, t, e, u) {
        return (n /= u / 2) < 1 ? (-e / 2) * (Math.sqrt(1 - n * n) - 1) + t : (e / 2) * (Math.sqrt(1 - (n -= 2) * n) + 1) + t;
    },
    easeInElastic: function (n, t, e, u) {
        var a = 1.70158,
            r = 0,
            i = e;
        if (0 == n) return t;
        if (1 == (n /= u)) return t + e;
        if ((r || (r = 0.3 * u), i < Math.abs(e))) {
            i = e;
            a = r / 4;
        } else a = (r / (2 * Math.PI)) * Math.asin(e / i);
        return -i * Math.pow(2, 10 * (n -= 1)) * Math.sin(((n * u - a) * (2 * Math.PI)) / r) + t;
    },
    easeOutElastic: function (n, t, e, u) {
        var a = 1.70158,
            r = 0,
            i = e;
        if (0 == n) return t;
        if (1 == (n /= u)) return t + e;
        if ((r || (r = 0.3 * u), i < Math.abs(e))) {
            i = e;
            a = r / 4;
        } else a = (r / (2 * Math.PI)) * Math.asin(e / i);
        return i * Math.pow(2, -10 * n) * Math.sin(((n * u - a) * (2 * Math.PI)) / r) + e + t;
    },
    easeInOutElastic: function (n, t, e, u) {
        var a = 1.70158,
            r = 0,
            i = e;
        if (0 == n) return t;
        if (2 == (n /= u / 2)) return t + e;
        if ((r || (r = u * (0.3 * 1.5)), i < Math.abs(e))) {
            i = e;
            a = r / 4;
        } else a = (r / (2 * Math.PI)) * Math.asin(e / i);
        return n < 1 ? i * Math.pow(2, 10 * (n -= 1)) * Math.sin(((n * u - a) * (2 * Math.PI)) / r) * -0.5 + t : i * Math.pow(2, -10 * (n -= 1)) * Math.sin(((n * u - a) * (2 * Math.PI)) / r) * 0.5 + e + t;
    },
    easeInBack: function (n, t, e, u, a) {
        return null == a && (a = 1.70158), e * (n /= u) * n * ((a + 1) * n - a) + t;
    },
    easeOutBack: function (n, t, e, u, a) {
        return null == a && (a = 1.70158), e * ((n = n / u - 1) * n * ((a + 1) * n + a) + 1) + t;
    },
    easeInOutBack: function (n, t, e, u, a) {
        return null == a && (a = 1.70158), (n /= u / 2) < 1 ? (e / 2) * (n * n * ((1 + (a *= 1.525)) * n - a)) + t : (e / 2) * ((n -= 2) * n * ((1 + (a *= 1.525)) * n + a) + 2) + t;
    },
    easeInBounce: function (n, t, e, u) {
        return e - window.fp_easings.easeOutBounce(u - n, 0, e, u) + t;
    },
    easeOutBounce: function (n, t, e, u) {
        return (n /= u) < 1 / 2.75
            ? e * (7.5625 * n * n) + t
            : n < 2 / 2.75
            ? e * (7.5625 * (n -= 1.5 / 2.75) * n + 0.75) + t
            : n < 2.5 / 2.75
            ? e * (7.5625 * (n -= 2.25 / 2.75) * n + 0.9375) + t
            : e * (7.5625 * (n -= 2.625 / 2.75) * n + 0.984375) + t;
    },
    easeInOutBounce: function (n, t, e, u) {
        return n < u / 2 ? 0.5 * window.fp_easings.easeInBounce(2 * n, 0, e, u) + t : 0.5 * window.fp_easings.easeOutBounce(2 * n - u, 0, e, u) + 0.5 * e + t;
    },
};
//# sourceMappingURL=easings.min.js.map

/**
 * Customized version of iScroll.js 0.1.3
 * It fixes bugs affecting its integration with fullpage.js
 * @license
 */
!(function (r, n, p) {
    var f =
            r.requestAnimationFrame ||
            r.webkitRequestAnimationFrame ||
            r.mozRequestAnimationFrame ||
            r.oRequestAnimationFrame ||
            r.msRequestAnimationFrame ||
            function (t) {
                r.setTimeout(t, 1e3 / 60);
            },
        m = (function () {
            var e = {},
                o = n.createElement("div").style,
                i = (function () {
                    for (var t = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, s = t.length; i < s; i++) if (t[i] + "ransform" in o) return t[i].substr(0, t[i].length - 1);
                    return !1;
                })();
            function t(t) {
                return !1 !== i && ("" === i ? t : i + t.charAt(0).toUpperCase() + t.substr(1));
            }
            (e.getTime =
                Date.now ||
                function () {
                    return new Date().getTime();
                }),
                (e.extend = function (t, i) {
                    for (var s in i) t[s] = i[s];
                }),
                (e.addEvent = function (t, i, s, e) {
                    t.addEventListener(i, s, !!e);
                }),
                (e.removeEvent = function (t, i, s, e) {
                    t.removeEventListener(i, s, !!e);
                }),
                (e.prefixPointerEvent = function (t) {
                    return r.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t;
                }),
                (e.momentum = function (t, i, s, e, o, n) {
                    var r,
                        h,
                        a = t - i,
                        l = p.abs(a) / s;
                    return (
                        (h = l / (n = void 0 === n ? 6e-4 : n)),
                        (r = t + ((l * l) / (2 * n)) * (a < 0 ? -1 : 1)) < e ? ((r = o ? e - (o / 2.5) * (l / 8) : e), (h = (a = p.abs(r - t)) / l)) : 0 < r && ((r = o ? (o / 2.5) * (l / 8) : 0), (h = (a = p.abs(t) + r) / l)),
                        { destination: p.round(r), duration: h }
                    );
                });
            var s = t("transform");
            return (
                e.extend(e, { hasTransform: !1 !== s, hasPerspective: t("perspective") in o, hasTouch: "ontouchstart" in r, hasPointer: !(!r.PointerEvent && !r.MSPointerEvent), hasTransition: t("transition") in o }),
                (e.isBadAndroid = (function () {
                    var t = r.navigator.appVersion;
                    if (!/Android/.test(t) || /Chrome\/\d/.test(t)) return !1;
                    var i = t.match(/Safari\/(\d+.\d)/);
                    return !(i && "object" == typeof i && 2 <= i.length) || parseFloat(i[1]) < 535.19;
                })()),
                e.extend((e.style = {}), { transform: s, transitionTimingFunction: t("transitionTimingFunction"), transitionDuration: t("transitionDuration"), transitionDelay: t("transitionDelay"), transformOrigin: t("transformOrigin") }),
                (e.hasClass = function (t, i) {
                    return new RegExp("(^|\\s)" + i + "(\\s|$)").test(t.className);
                }),
                (e.addClass = function (t, i) {
                    if (!e.hasClass(t, i)) {
                        var s = t.className.split(" ");
                        s.push(i), (t.className = s.join(" "));
                    }
                }),
                (e.removeClass = function (t, i) {
                    if (e.hasClass(t, i)) {
                        var s = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
                        t.className = t.className.replace(s, " ");
                    }
                }),
                (e.offset = function (t) {
                    for (var i = -t.offsetLeft, s = -t.offsetTop; (t = t.offsetParent); ) (i -= t.offsetLeft), (s -= t.offsetTop);
                    return { left: i, top: s };
                }),
                (e.preventDefaultException = function (t, i) {
                    for (var s in i) if (i[s].test(t[s])) return !0;
                    return !1;
                }),
                e.extend((e.eventType = {}), { touchstart: 1, touchmove: 1, touchend: 1, mousedown: 2, mousemove: 2, mouseup: 2, pointerdown: 3, pointermove: 3, pointerup: 3, MSPointerDown: 3, MSPointerMove: 3, MSPointerUp: 3 }),
                e.extend((e.ease = {}), {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function (t) {
                            return t * (2 - t);
                        },
                    },
                    circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        fn: function (t) {
                            return p.sqrt(1 - --t * t);
                        },
                    },
                    back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        fn: function (t) {
                            return (t -= 1) * t * (5 * t + 4) + 1;
                        },
                    },
                    bounce: {
                        style: "",
                        fn: function (t) {
                            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
                        },
                    },
                    elastic: {
                        style: "",
                        fn: function (t) {
                            return 0 === t ? 0 : 1 == t ? 1 : 0.4 * p.pow(2, -10 * t) * p.sin(((t - 0.055) * (2 * p.PI)) / 0.22) + 1;
                        },
                    },
                }),
                (e.tap = function (t, i) {
                    var s = n.createEvent("Event");
                    s.initEvent(i, !0, !0), (s.pageX = t.pageX), (s.pageY = t.pageY), t.target.dispatchEvent(s);
                }),
                (e.click = function (t) {
                    var i,
                        s = t.target;
                    /(SELECT|INPUT|TEXTAREA)/i.test(s.tagName) ||
                        ((i = n.createEvent(r.MouseEvent ? "MouseEvents" : "Event")).initEvent("click", !0, !0),
                        (i.view = t.view || r),
                        (i.detail = 1),
                        (i.screenX = s.screenX || 0),
                        (i.screenY = s.screenY || 0),
                        (i.clientX = s.clientX || 0),
                        (i.clientY = s.clientY || 0),
                        (i.ctrlKey = !!t.ctrlKey),
                        (i.altKey = !!t.altKey),
                        (i.shiftKey = !!t.shiftKey),
                        (i.metaKey = !!t.metaKey),
                        (i.button = 0),
                        (i.relatedTarget = null),
                        (i._constructed = !0),
                        s.dispatchEvent(i));
                }),
                e
            );
        })();
    function t(t, i) {
        for (var s in ((this.wrapper = "string" == typeof t ? n.querySelector(t) : t),
        (this.scroller = this.wrapper.children[0]),
        (this.scrollerStyle = this.scroller.style),
        (this.options = {
            resizeScrollbars: !0,
            mouseWheelSpeed: 20,
            snapThreshold: 0.334,
            disablePointer: !m.hasPointer,
            disableTouch: m.hasPointer || !m.hasTouch,
            disableMouse: m.hasPointer || m.hasTouch,
            startX: 0,
            startY: 0,
            scrollY: !0,
            directionLockThreshold: 5,
            momentum: !0,
            bounce: !0,
            bounceTime: 600,
            bounceEasing: "",
            preventDefault: !0,
            preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/ },
            HWCompositing: !0,
            useTransition: !0,
            useTransform: !0,
            bindToWrapper: void 0 === r.onmousedown,
        }),
        i))
            this.options[s] = i[s];
        (this.translateZ = this.options.HWCompositing && m.hasPerspective ? " translateZ(0)" : ""),
            (this.options.useTransition = m.hasTransition && this.options.useTransition),
            (this.options.useTransform = m.hasTransform && this.options.useTransform),
            (this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough),
            (this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault),
            (this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY),
            (this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX),
            (this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough),
            (this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold),
            (this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? m.ease[this.options.bounceEasing] || m.ease.circular : this.options.bounceEasing),
            (this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling),
            !0 === this.options.tap && (this.options.tap = "tap"),
            this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"),
            "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1),
            (this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1),
            (this.x = 0),
            (this.y = 0),
            (this.directionX = 0),
            (this.directionY = 0),
            (this._events = {}),
            this._init(),
            this.refresh(),
            this.scrollTo(this.options.startX, this.options.startY),
            this.enable();
    }
    function h(t, i, s) {
        var e = n.createElement("div"),
            o = n.createElement("div");
        return (
            !0 === s &&
                ((e.style.cssText = "position:absolute;z-index:9999"),
                (o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
            (o.className = "iScrollIndicator"),
            (e.className =
                "h" == t
                    ? (!0 === s && ((e.style.cssText += ";height:7px;left:2px;right:2px;bottom:0"), (o.style.height = "100%")), "iScrollHorizontalScrollbar")
                    : (!0 === s && ((e.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px"), (o.style.width = "100%")), "iScrollVerticalScrollbar")),
            (e.style.cssText += ";overflow:hidden"),
            i || (e.style.pointerEvents = "none"),
            e.appendChild(o),
            e
        );
    }
    function a(t, i) {
        for (var s in ((this.wrapper = "string" == typeof i.el ? n.querySelector(i.el) : i.el),
        (this.wrapperStyle = this.wrapper.style),
        (this.indicator = this.wrapper.children[0]),
        (this.indicatorStyle = this.indicator.style),
        (this.scroller = t),
        (this.options = { listenX: !0, listenY: !0, interactive: !1, resize: !0, defaultScrollbars: !1, shrink: !1, fade: !1, speedRatioX: 0, speedRatioY: 0 }),
        i))
            this.options[s] = i[s];
        if (
            ((this.sizeRatioX = 1),
            (this.sizeRatioY = 1),
            (this.maxPosX = 0),
            (this.maxPosY = 0),
            this.options.interactive &&
                (this.options.disableTouch || (m.addEvent(this.indicator, "touchstart", this), m.addEvent(r, "touchend", this)),
                this.options.disablePointer || (m.addEvent(this.indicator, m.prefixPointerEvent("pointerdown"), this), m.addEvent(r, m.prefixPointerEvent("pointerup"), this)),
                this.options.disableMouse || (m.addEvent(this.indicator, "mousedown", this), m.addEvent(r, "mouseup", this))),
            this.options.fade)
        ) {
            this.wrapperStyle[m.style.transform] = this.scroller.translateZ;
            var e = m.style.transitionDuration;
            if (!e) return;
            this.wrapperStyle[e] = m.isBadAndroid ? "0.0001ms" : "0ms";
            var o = this;
            m.isBadAndroid &&
                f(function () {
                    "0.0001ms" === o.wrapperStyle[e] && (o.wrapperStyle[e] = "0s");
                }),
                (this.wrapperStyle.opacity = "0");
        }
    }
    (t.prototype = {
        version: "5.2.0",
        _init: function () {
            this._initEvents(),
                (this.options.scrollbars || this.options.indicators) && this._initIndicators(),
                this.options.mouseWheel && this._initWheel(),
                this.options.snap && this._initSnap(),
                this.options.keyBindings && this._initKeys();
        },
        destroy: function () {
            this._initEvents(!0), clearTimeout(this.resizeTimeout), (this.resizeTimeout = null), this._execEvent("destroy");
        },
        _transitionEnd: function (t) {
            t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || ((this.isInTransition = !1), this._execEvent("scrollEnd")));
        },
        _start: function (t) {
            if (1 != m.eventType[t.type] && 0 !== (t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2)) return;
            if (this.enabled && (!this.initiated || m.eventType[t.type] === this.initiated)) {
                !this.options.preventDefault || m.isBadAndroid || m.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                var i,
                    s = t.touches ? t.touches[0] : t;
                (this.initiated = m.eventType[t.type]),
                    (this.moved = !1),
                    (this.distX = 0),
                    (this.distY = 0),
                    (this.directionX = 0),
                    (this.directionY = 0),
                    (this.directionLocked = 0),
                    (this.startTime = m.getTime()),
                    this.options.useTransition && this.isInTransition
                        ? (this._transitionTime(), (this.isInTransition = !1), (i = this.getComputedPosition()), this._translate(p.round(i.x), p.round(i.y)), this._execEvent("scrollEnd"))
                        : !this.options.useTransition && this.isAnimating && ((this.isAnimating = !1), this._execEvent("scrollEnd")),
                    (this.startX = this.x),
                    (this.startY = this.y),
                    (this.absStartX = this.x),
                    (this.absStartY = this.y),
                    (this.pointX = s.pageX),
                    (this.pointY = s.pageY),
                    this._execEvent("beforeScrollStart");
            }
        },
        _move: function (t) {
            if (this.enabled && m.eventType[t.type] === this.initiated) {
                this.options.preventDefault && t.preventDefault();
                var i,
                    s,
                    e,
                    o,
                    n = t.touches ? t.touches[0] : t,
                    r = n.pageX - this.pointX,
                    h = n.pageY - this.pointY,
                    a = m.getTime();
                if (((this.pointX = n.pageX), (this.pointY = n.pageY), (this.distX += r), (this.distY += h), (e = p.abs(this.distX)), (o = p.abs(this.distY)), !(300 < a - this.endTime && e < 10 && o < 10))) {
                    if (
                        (this.directionLocked ||
                            this.options.freeScroll ||
                            (e > o + this.options.directionLockThreshold ? (this.directionLocked = "h") : o >= e + this.options.directionLockThreshold ? (this.directionLocked = "v") : (this.directionLocked = "n")),
                        "h" == this.directionLocked)
                    ) {
                        if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) return void (this.initiated = !1);
                        h = 0;
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) return void (this.initiated = !1);
                        r = 0;
                    }
                    (r = this.hasHorizontalScroll ? r : 0),
                        (h = this.hasVerticalScroll ? h : 0),
                        (i = this.x + r),
                        (s = this.y + h),
                        (0 < i || i < this.maxScrollX) && (i = this.options.bounce ? this.x + r / 3 : 0 < i ? 0 : this.maxScrollX),
                        (0 < s || s < this.maxScrollY) && (s = this.options.bounce ? this.y + h / 3 : 0 < s ? 0 : this.maxScrollY),
                        (this.directionX = 0 < r ? -1 : r < 0 ? 1 : 0),
                        (this.directionY = 0 < h ? -1 : h < 0 ? 1 : 0),
                        this.moved || this._execEvent("scrollStart"),
                        (this.moved = !0),
                        this._translate(i, s),
                        300 < a - this.startTime && ((this.startTime = a), (this.startX = this.x), (this.startY = this.y));
                }
            }
        },
        _end: function (t) {
            if (this.enabled && m.eventType[t.type] === this.initiated) {
                this.options.preventDefault && !m.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                t.changedTouches && t.changedTouches[0];
                var i,
                    s,
                    e = m.getTime() - this.startTime,
                    o = p.round(this.x),
                    n = p.round(this.y),
                    r = p.abs(o - this.startX),
                    h = p.abs(n - this.startY),
                    a = 0,
                    l = "";
                if (((this.isInTransition = 0), (this.initiated = 0), (this.endTime = m.getTime()), !this.resetPosition(this.options.bounceTime))) {
                    if ((this.scrollTo(o, n), !this.moved)) return this.options.tap && m.tap(t, this.options.tap), this.options.click && m.click(t), void this._execEvent("scrollCancel");
                    if (this._events.flick && e < 200 && r < 100 && h < 100) this._execEvent("flick");
                    else {
                        if (
                            (this.options.momentum &&
                                e < 300 &&
                                ((i = this.hasHorizontalScroll ? m.momentum(this.x, this.startX, e, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : { destination: o, duration: 0 }),
                                (s = this.hasVerticalScroll ? m.momentum(this.y, this.startY, e, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : { destination: n, duration: 0 }),
                                (o = i.destination),
                                (n = s.destination),
                                (a = p.max(i.duration, s.duration)),
                                (this.isInTransition = 1)),
                            this.options.snap)
                        ) {
                            var c = this._nearestSnap(o, n);
                            (this.currentPage = c),
                                (a = this.options.snapSpeed || p.max(p.max(p.min(p.abs(o - c.x), 1e3), p.min(p.abs(n - c.y), 1e3)), 300)),
                                (o = c.x),
                                (n = c.y),
                                (this.directionX = 0),
                                (this.directionY = 0),
                                (l = this.options.bounceEasing);
                        }
                        if (o != this.x || n != this.y) return (0 < o || o < this.maxScrollX || 0 < n || n < this.maxScrollY) && (l = m.ease.quadratic), void this.scrollTo(o, n, a, l);
                        this._execEvent("scrollEnd");
                    }
                }
            }
        },
        _resize: function () {
            var t = this;
            clearTimeout(this.resizeTimeout),
                (this.resizeTimeout = setTimeout(function () {
                    t.refresh();
                }, this.options.resizePolling));
        },
        resetPosition: function (t) {
            var i = this.x,
                s = this.y;
            return (
                (t = t || 0),
                !this.hasHorizontalScroll || 0 < this.x ? (i = 0) : this.x < this.maxScrollX && (i = this.maxScrollX),
                !this.hasVerticalScroll || 0 < this.y ? (s = 0) : this.y < this.maxScrollY && (s = this.maxScrollY),
                (i != this.x || s != this.y) && (this.scrollTo(i, s, t, this.options.bounceEasing), !0)
            );
        },
        disable: function () {
            this.enabled = !1;
        },
        enable: function () {
            this.enabled = !0;
        },
        refresh: function () {
            this.wrapper.offsetHeight;
            (this.wrapperWidth = this.wrapper.clientWidth),
                (this.wrapperHeight = this.wrapper.clientHeight),
                (this.scrollerWidth = this.scroller.offsetWidth),
                (this.scrollerHeight = this.scroller.offsetHeight),
                (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
                (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
                (this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0),
                (this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0),
                this.hasHorizontalScroll || ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
                this.hasVerticalScroll || ((this.maxScrollY = 0), (this.scrollerHeight = this.wrapperHeight)),
                (this.endTime = 0),
                (this.directionX = 0),
                (this.directionY = 0),
                (this.wrapperOffset = m.offset(this.wrapper)),
                this._execEvent("refresh"),
                this.resetPosition();
        },
        on: function (t, i) {
            this._events[t] || (this._events[t] = []), this._events[t].push(i);
        },
        off: function (t, i) {
            if (this._events[t]) {
                var s = this._events[t].indexOf(i);
                -1 < s && this._events[t].splice(s, 1);
            }
        },
        _execEvent: function (t) {
            if (this._events[t]) {
                var i = 0,
                    s = this._events[t].length;
                if (s) for (; i < s; i++) this._events[t][i].apply(this, [].slice.call(arguments, 1));
            }
        },
        scrollBy: function (t, i, s, e) {
            (t = this.x + t), (i = this.y + i), (s = s || 0), this.scrollTo(t, i, s, e);
        },
        scrollTo: function (t, i, s, e) {
            (e = e || m.ease.circular), (this.isInTransition = this.options.useTransition && 0 < s);
            var o = this.options.useTransition && e.style;
            !s || o ? (o && (this._transitionTimingFunction(e.style), this._transitionTime(s)), this._translate(t, i)) : this._animate(t, i, s, e.fn);
        },
        scrollToElement: function (t, i, s, e, o) {
            if ((t = t.nodeType ? t : this.scroller.querySelector(t))) {
                var n = m.offset(t);
                (n.left -= this.wrapperOffset.left),
                    (n.top -= this.wrapperOffset.top),
                    !0 === s && (s = p.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
                    !0 === e && (e = p.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
                    (n.left -= s || 0),
                    (n.top -= e || 0),
                    (n.left = 0 < n.left ? 0 : n.left < this.maxScrollX ? this.maxScrollX : n.left),
                    (n.top = 0 < n.top ? 0 : n.top < this.maxScrollY ? this.maxScrollY : n.top),
                    (i = null == i || "auto" === i ? p.max(p.abs(this.x - n.left), p.abs(this.y - n.top)) : i),
                    this.scrollTo(n.left, n.top, i, o);
            }
        },
        _transitionTime: function (t) {
            if (this.options.useTransition) {
                t = t || 0;
                var i = m.style.transitionDuration;
                if (i) {
                    if (((this.scrollerStyle[i] = t + "ms"), !t && m.isBadAndroid)) {
                        this.scrollerStyle[i] = "0.0001ms";
                        var s = this;
                        f(function () {
                            "0.0001ms" === s.scrollerStyle[i] && (s.scrollerStyle[i] = "0s");
                        });
                    }
                    if (this.indicators) for (var e = this.indicators.length; e--; ) this.indicators[e].transitionTime(t);
                }
            }
        },
        _transitionTimingFunction: function (t) {
            if (((this.scrollerStyle[m.style.transitionTimingFunction] = t), this.indicators)) for (var i = this.indicators.length; i--; ) this.indicators[i].transitionTimingFunction(t);
        },
        _translate: function (t, i) {
            if (
                (this.options.useTransform
                    ? (this.scrollerStyle[m.style.transform] = "translate(" + t + "px," + i + "px)" + this.translateZ)
                    : ((t = p.round(t)), (i = p.round(i)), (this.scrollerStyle.left = t + "px"), (this.scrollerStyle.top = i + "px")),
                (this.x = t),
                (this.y = i),
                this.indicators)
            )
                for (var s = this.indicators.length; s--; ) this.indicators[s].updatePosition();
        },
        _initEvents: function (t) {
            var i = t ? m.removeEvent : m.addEvent,
                s = this.options.bindToWrapper ? this.wrapper : r;
            i(r, "orientationchange", this),
                i(r, "resize", this),
                this.options.click && i(this.wrapper, "click", this, !0),
                this.options.disableMouse || (i(this.wrapper, "mousedown", this), i(s, "mousemove", this), i(s, "mousecancel", this), i(s, "mouseup", this)),
                m.hasPointer &&
                    !this.options.disablePointer &&
                    (i(this.wrapper, m.prefixPointerEvent("pointerdown"), this), i(s, m.prefixPointerEvent("pointermove"), this), i(s, m.prefixPointerEvent("pointercancel"), this), i(s, m.prefixPointerEvent("pointerup"), this)),
                m.hasTouch && !this.options.disableTouch && (i(this.wrapper, "touchstart", this), i(s, "touchmove", this), i(s, "touchcancel", this), i(s, "touchend", this)),
                i(this.scroller, "transitionend", this),
                i(this.scroller, "webkitTransitionEnd", this),
                i(this.scroller, "oTransitionEnd", this),
                i(this.scroller, "MSTransitionEnd", this);
        },
        getComputedPosition: function () {
            var t,
                i,
                s = r.getComputedStyle(this.scroller, null);
            return (i = this.options.useTransform ? ((t = +((s = s[m.style.transform].split(")")[0].split(", "))[12] || s[4])), +(s[13] || s[5])) : ((t = +s.left.replace(/[^-\d.]/g, "")), +s.top.replace(/[^-\d.]/g, ""))), { x: t, y: i };
        },
        _initIndicators: function () {
            var t,
                i = this.options.interactiveScrollbars,
                s = "string" != typeof this.options.scrollbars,
                e = [],
                o = this;
            (this.indicators = []),
                this.options.scrollbars &&
                    (this.options.scrollY &&
                        ((t = {
                            el: h("v", i, this.options.scrollbars),
                            interactive: i,
                            defaultScrollbars: !0,
                            customStyle: s,
                            resize: this.options.resizeScrollbars,
                            shrink: this.options.shrinkScrollbars,
                            fade: this.options.fadeScrollbars,
                            listenX: !1,
                        }),
                        this.wrapper.appendChild(t.el),
                        e.push(t)),
                    this.options.scrollX &&
                        ((t = {
                            el: h("h", i, this.options.scrollbars),
                            interactive: i,
                            defaultScrollbars: !0,
                            customStyle: s,
                            resize: this.options.resizeScrollbars,
                            shrink: this.options.shrinkScrollbars,
                            fade: this.options.fadeScrollbars,
                            listenY: !1,
                        }),
                        this.wrapper.appendChild(t.el),
                        e.push(t))),
                this.options.indicators && (e = e.concat(this.options.indicators));
            for (var n = e.length; n--; ) this.indicators.push(new a(this, e[n]));
            function r(t) {
                if (o.indicators) for (var i = o.indicators.length; i--; ) t.call(o.indicators[i]);
            }
            this.options.fadeScrollbars &&
                (this.on("scrollEnd", function () {
                    r(function () {
                        this.fade();
                    });
                }),
                this.on("scrollCancel", function () {
                    r(function () {
                        this.fade();
                    });
                }),
                this.on("scrollStart", function () {
                    r(function () {
                        this.fade(1);
                    });
                }),
                this.on("beforeScrollStart", function () {
                    r(function () {
                        this.fade(1, !0);
                    });
                })),
                this.on("refresh", function () {
                    r(function () {
                        this.refresh();
                    });
                }),
                this.on("destroy", function () {
                    r(function () {
                        this.destroy();
                    }),
                        delete this.indicators;
                });
        },
        _initWheel: function () {
            m.addEvent(this.wrapper, "wheel", this),
                m.addEvent(this.wrapper, "mousewheel", this),
                m.addEvent(this.wrapper, "DOMMouseScroll", this),
                this.on("destroy", function () {
                    clearTimeout(this.wheelTimeout), (this.wheelTimeout = null), m.removeEvent(this.wrapper, "wheel", this), m.removeEvent(this.wrapper, "mousewheel", this), m.removeEvent(this.wrapper, "DOMMouseScroll", this);
                });
        },
        _wheel: function (t) {
            if (this.enabled) {
                r.navigator.userAgent.match(/(MSIE|Trident)/) || t.preventDefault();
                var i,
                    s,
                    e,
                    o,
                    n = this;
                if (
                    (void 0 === this.wheelTimeout && n._execEvent("scrollStart"),
                    clearTimeout(this.wheelTimeout),
                    (this.wheelTimeout = setTimeout(function () {
                        n.options.snap || n._execEvent("scrollEnd"), (n.wheelTimeout = void 0);
                    }, 400)),
                    "deltaX" in t)
                )
                    s = 1 === t.deltaMode ? ((i = -t.deltaX * this.options.mouseWheelSpeed), -t.deltaY * this.options.mouseWheelSpeed) : ((i = -t.deltaX), -t.deltaY);
                else if ("wheelDeltaX" in t) (i = (t.wheelDeltaX / 120) * this.options.mouseWheelSpeed), (s = (t.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
                else if ("wheelDelta" in t) i = s = (t.wheelDelta / 120) * this.options.mouseWheelSpeed;
                else {
                    if (!("detail" in t)) return;
                    i = s = (-t.detail / 3) * this.options.mouseWheelSpeed;
                }
                if (((i *= this.options.invertWheelDirection), (s *= this.options.invertWheelDirection), this.hasVerticalScroll || ((i = s), (s = 0)), this.options.snap))
                    return (e = this.currentPage.pageX), (o = this.currentPage.pageY), 0 < i ? e-- : i < 0 && e++, 0 < s ? o-- : s < 0 && o++, void this.goToPage(e, o);
                (e = this.x + p.round(this.hasHorizontalScroll ? i : 0)),
                    (o = this.y + p.round(this.hasVerticalScroll ? s : 0)),
                    (this.directionX = 0 < i ? -1 : i < 0 ? 1 : 0),
                    (this.directionY = 0 < s ? -1 : s < 0 ? 1 : 0),
                    0 < e ? (e = 0) : e < this.maxScrollX && (e = this.maxScrollX),
                    0 < o ? (o = 0) : o < this.maxScrollY && (o = this.maxScrollY),
                    this.scrollTo(e, o, 0);
            }
        },
        _initSnap: function () {
            (this.currentPage = {}),
                "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)),
                this.on("refresh", function () {
                    var t,
                        i,
                        s,
                        e,
                        o,
                        n,
                        r = 0,
                        h = 0,
                        a = 0,
                        l = this.options.snapStepX || this.wrapperWidth,
                        c = this.options.snapStepY || this.wrapperHeight;
                    if (((this.pages = []), this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight)) {
                        if (!0 === this.options.snap)
                            for (s = p.round(l / 2), e = p.round(c / 2); a > -this.scrollerWidth; ) {
                                for (this.pages[r] = [], o = t = 0; o > -this.scrollerHeight; ) (this.pages[r][t] = { x: p.max(a, this.maxScrollX), y: p.max(o, this.maxScrollY), width: l, height: c, cx: a - s, cy: o - e }), (o -= c), t++;
                                (a -= l), r++;
                            }
                        else
                            for (t = (n = this.options.snap).length, i = -1; r < t; r++)
                                (0 === r || n[r].offsetLeft <= n[r - 1].offsetLeft) && ((h = 0), i++),
                                    this.pages[h] || (this.pages[h] = []),
                                    (a = p.max(-n[r].offsetLeft, this.maxScrollX)),
                                    (o = p.max(-n[r].offsetTop, this.maxScrollY)),
                                    (s = a - p.round(n[r].offsetWidth / 2)),
                                    (e = o - p.round(n[r].offsetHeight / 2)),
                                    (this.pages[h][i] = { x: a, y: o, width: n[r].offsetWidth, height: n[r].offsetHeight, cx: s, cy: e }),
                                    a > this.maxScrollX && h++;
                        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0),
                            this.options.snapThreshold % 1 == 0
                                ? ((this.snapThresholdX = this.options.snapThreshold), (this.snapThresholdY = this.options.snapThreshold))
                                : ((this.snapThresholdX = p.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold)),
                                  (this.snapThresholdY = p.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold)));
                    }
                }),
                this.on("flick", function () {
                    var t = this.options.snapSpeed || p.max(p.max(p.min(p.abs(this.x - this.startX), 1e3), p.min(p.abs(this.y - this.startY), 1e3)), 300);
                    this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t);
                });
        },
        _nearestSnap: function (t, i) {
            if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
            var s = 0,
                e = this.pages.length,
                o = 0;
            if (p.abs(t - this.absStartX) < this.snapThresholdX && p.abs(i - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (0 < t ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX), 0 < i ? (i = 0) : i < this.maxScrollY && (i = this.maxScrollY); s < e; s++)
                if (t >= this.pages[s][0].cx) {
                    t = this.pages[s][0].x;
                    break;
                }
            for (e = this.pages[s].length; o < e; o++)
                if (i >= this.pages[0][o].cy) {
                    i = this.pages[0][o].y;
                    break;
                }
            return (
                s == this.currentPage.pageX && ((s += this.directionX) < 0 ? (s = 0) : s >= this.pages.length && (s = this.pages.length - 1), (t = this.pages[s][0].x)),
                o == this.currentPage.pageY && ((o += this.directionY) < 0 ? (o = 0) : o >= this.pages[0].length && (o = this.pages[0].length - 1), (i = this.pages[0][o].y)),
                { x: t, y: i, pageX: s, pageY: o }
            );
        },
        goToPage: function (t, i, s, e) {
            (e = e || this.options.bounceEasing), t >= this.pages.length ? (t = this.pages.length - 1) : t < 0 && (t = 0), i >= this.pages[t].length ? (i = this.pages[t].length - 1) : i < 0 && (i = 0);
            var o = this.pages[t][i].x,
                n = this.pages[t][i].y;
            (s = void 0 === s ? this.options.snapSpeed || p.max(p.max(p.min(p.abs(o - this.x), 1e3), p.min(p.abs(n - this.y), 1e3)), 300) : s), (this.currentPage = { x: o, y: n, pageX: t, pageY: i }), this.scrollTo(o, n, s, e);
        },
        next: function (t, i) {
            var s = this.currentPage.pageX,
                e = this.currentPage.pageY;
            ++s >= this.pages.length && this.hasVerticalScroll && ((s = 0), e++), this.goToPage(s, e, t, i);
        },
        prev: function (t, i) {
            var s = this.currentPage.pageX,
                e = this.currentPage.pageY;
            --s < 0 && this.hasVerticalScroll && ((s = 0), e--), this.goToPage(s, e, t, i);
        },
        _initKeys: function (t) {
            var i,
                s = { pageUp: 33, pageDown: 34, end: 35, home: 36, left: 37, up: 38, right: 39, down: 40 };
            if ("object" == typeof this.options.keyBindings) for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (i in s) this.options.keyBindings[i] = this.options.keyBindings[i] || s[i];
            m.addEvent(r, "keydown", this),
                this.on("destroy", function () {
                    m.removeEvent(r, "keydown", this);
                });
        },
        _key: function (t) {
            if (this.enabled) {
                var i,
                    s = this.options.snap,
                    e = s ? this.currentPage.pageX : this.x,
                    o = s ? this.currentPage.pageY : this.y,
                    n = m.getTime(),
                    r = this.keyTime || 0;
                switch (
                    (this.options.useTransition && this.isInTransition && ((i = this.getComputedPosition()), this._translate(p.round(i.x), p.round(i.y)), (this.isInTransition = !1)),
                    (this.keyAcceleration = n - r < 200 ? p.min(this.keyAcceleration + 0.25, 50) : 0),
                    t.keyCode)
                ) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? (e += s ? 1 : this.wrapperWidth) : (o += s ? 1 : this.wrapperHeight);
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? (e -= s ? 1 : this.wrapperWidth) : (o -= s ? 1 : this.wrapperHeight);
                        break;
                    case this.options.keyBindings.end:
                        (e = s ? this.pages.length - 1 : this.maxScrollX), (o = s ? this.pages[0].length - 1 : this.maxScrollY);
                        break;
                    case this.options.keyBindings.home:
                        o = e = 0;
                        break;
                    case this.options.keyBindings.left:
                        e += s ? -1 : (5 + this.keyAcceleration) >> 0;
                        break;
                    case this.options.keyBindings.up:
                        o += s ? 1 : (5 + this.keyAcceleration) >> 0;
                        break;
                    case this.options.keyBindings.right:
                        e -= s ? -1 : (5 + this.keyAcceleration) >> 0;
                        break;
                    case this.options.keyBindings.down:
                        o -= s ? 1 : (5 + this.keyAcceleration) >> 0;
                        break;
                    default:
                        return;
                }
                s
                    ? this.goToPage(e, o)
                    : (0 < e ? ((e = 0), (this.keyAcceleration = 0)) : e < this.maxScrollX && ((e = this.maxScrollX), (this.keyAcceleration = 0)),
                      0 < o ? ((o = 0), (this.keyAcceleration = 0)) : o < this.maxScrollY && ((o = this.maxScrollY), (this.keyAcceleration = 0)),
                      this.scrollTo(e, o, 0),
                      (this.keyTime = n));
            }
        },
        _animate: function (n, r, h, a) {
            var l = this,
                c = this.x,
                p = this.y,
                d = m.getTime(),
                u = d + h;
            (this.isAnimating = !0),
                (function t() {
                    var i,
                        s,
                        e,
                        o = m.getTime();
                    if (u <= o) return (l.isAnimating = !1), l._translate(n, r), void (l.resetPosition(l.options.bounceTime) || l._execEvent("scrollEnd"));
                    (e = a((o = (o - d) / h))), (i = (n - c) * e + c), (s = (r - p) * e + p), l._translate(i, s), l.isAnimating && f(t);
                })();
        },
        handleEvent: function (t) {
            switch (t.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(t);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(t);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(t);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(t);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(t);
                    break;
                case "keydown":
                    this._key(t);
                    break;
                case "click":
                    this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation());
            }
        },
    }),
        (a.prototype = {
            handleEvent: function (t) {
                switch (t.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(t);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(t);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(t);
                }
            },
            destroy: function () {
                this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
                    this.options.interactive &&
                        (m.removeEvent(this.indicator, "touchstart", this),
                        m.removeEvent(this.indicator, m.prefixPointerEvent("pointerdown"), this),
                        m.removeEvent(this.indicator, "mousedown", this),
                        m.removeEvent(r, "touchmove", this),
                        m.removeEvent(r, m.prefixPointerEvent("pointermove"), this),
                        m.removeEvent(r, "mousemove", this),
                        m.removeEvent(r, "touchend", this),
                        m.removeEvent(r, m.prefixPointerEvent("pointerup"), this),
                        m.removeEvent(r, "mouseup", this)),
                    this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper);
            },
            _start: function (t) {
                var i = t.touches ? t.touches[0] : t;
                t.preventDefault(),
                    t.stopPropagation(),
                    this.transitionTime(),
                    (this.initiated = !0),
                    (this.moved = !1),
                    (this.lastPointX = i.pageX),
                    (this.lastPointY = i.pageY),
                    (this.startTime = m.getTime()),
                    this.options.disableTouch || m.addEvent(r, "touchmove", this),
                    this.options.disablePointer || m.addEvent(r, m.prefixPointerEvent("pointermove"), this),
                    this.options.disableMouse || m.addEvent(r, "mousemove", this),
                    this.scroller._execEvent("beforeScrollStart");
            },
            _move: function (t) {
                var i,
                    s,
                    e,
                    o,
                    n = t.touches ? t.touches[0] : t;
                m.getTime();
                this.moved || this.scroller._execEvent("scrollStart"),
                    (this.moved = !0),
                    (i = n.pageX - this.lastPointX),
                    (this.lastPointX = n.pageX),
                    (s = n.pageY - this.lastPointY),
                    (this.lastPointY = n.pageY),
                    (e = this.x + i),
                    (o = this.y + s),
                    this._pos(e, o),
                    t.preventDefault(),
                    t.stopPropagation();
            },
            _end: function (t) {
                if (this.initiated) {
                    if (
                        ((this.initiated = !1),
                        t.preventDefault(),
                        t.stopPropagation(),
                        m.removeEvent(r, "touchmove", this),
                        m.removeEvent(r, m.prefixPointerEvent("pointermove"), this),
                        m.removeEvent(r, "mousemove", this),
                        this.scroller.options.snap)
                    ) {
                        var i = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                            s = this.options.snapSpeed || p.max(p.max(p.min(p.abs(this.scroller.x - i.x), 1e3), p.min(p.abs(this.scroller.y - i.y), 1e3)), 300);
                        (this.scroller.x == i.x && this.scroller.y == i.y) ||
                            ((this.scroller.directionX = 0), (this.scroller.directionY = 0), (this.scroller.currentPage = i), this.scroller.scrollTo(i.x, i.y, s, this.scroller.options.bounceEasing));
                    }
                    this.moved && this.scroller._execEvent("scrollEnd");
                }
            },
            transitionTime: function (t) {
                t = t || 0;
                var i = m.style.transitionDuration;
                if (i && ((this.indicatorStyle[i] = t + "ms"), !t && m.isBadAndroid)) {
                    this.indicatorStyle[i] = "0.0001ms";
                    var s = this;
                    f(function () {
                        "0.0001ms" === s.indicatorStyle[i] && (s.indicatorStyle[i] = "0s");
                    });
                }
            },
            transitionTimingFunction: function (t) {
                this.indicatorStyle[m.style.transitionTimingFunction] = t;
            },
            refresh: function () {
                this.transitionTime(),
                    this.options.listenX && !this.options.listenY
                        ? (this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none")
                        : this.options.listenY && !this.options.listenX
                        ? (this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none")
                        : (this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none"),
                    this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll
                        ? (m.addClass(this.wrapper, "iScrollBothScrollbars"),
                          m.removeClass(this.wrapper, "iScrollLoneScrollbar"),
                          this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? (this.wrapper.style.right = "8px") : (this.wrapper.style.bottom = "8px")))
                        : (m.removeClass(this.wrapper, "iScrollBothScrollbars"),
                          m.addClass(this.wrapper, "iScrollLoneScrollbar"),
                          this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? (this.wrapper.style.right = "2px") : (this.wrapper.style.bottom = "2px")));
                this.wrapper.offsetHeight;
                this.options.listenX &&
                    ((this.wrapperWidth = this.wrapper.clientWidth),
                    this.options.resize
                        ? ((this.indicatorWidth = p.max(p.round((this.wrapperWidth * this.wrapperWidth) / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8)), (this.indicatorStyle.width = this.indicatorWidth + "px"))
                        : (this.indicatorWidth = this.indicator.clientWidth),
                    (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
                    "clip" == this.options.shrink ? ((this.minBoundaryX = 8 - this.indicatorWidth), (this.maxBoundaryX = this.wrapperWidth - 8)) : ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
                    (this.sizeRatioX = this.options.speedRatioX || (this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX))),
                    this.options.listenY &&
                        ((this.wrapperHeight = this.wrapper.clientHeight),
                        this.options.resize
                            ? ((this.indicatorHeight = p.max(p.round((this.wrapperHeight * this.wrapperHeight) / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8)), (this.indicatorStyle.height = this.indicatorHeight + "px"))
                            : (this.indicatorHeight = this.indicator.clientHeight),
                        (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
                        "clip" == this.options.shrink ? ((this.minBoundaryY = 8 - this.indicatorHeight), (this.maxBoundaryY = this.wrapperHeight - 8)) : ((this.minBoundaryY = 0), (this.maxBoundaryY = this.maxPosY)),
                        (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
                        (this.sizeRatioY = this.options.speedRatioY || (this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY))),
                    this.updatePosition();
            },
            updatePosition: function () {
                var t = (this.options.listenX && p.round(this.sizeRatioX * this.scroller.x)) || 0,
                    i = (this.options.listenY && p.round(this.sizeRatioY * this.scroller.y)) || 0;
                this.options.ignoreBoundaries ||
                    (t < this.minBoundaryX
                        ? ("scale" == this.options.shrink && ((this.width = p.max(this.indicatorWidth + t, 8)), (this.indicatorStyle.width = this.width + "px")), (t = this.minBoundaryX))
                        : t > this.maxBoundaryX
                        ? (t =
                              "scale" == this.options.shrink
                                  ? ((this.width = p.max(this.indicatorWidth - (t - this.maxPosX), 8)), (this.indicatorStyle.width = this.width + "px"), this.maxPosX + this.indicatorWidth - this.width)
                                  : this.maxBoundaryX)
                        : "scale" == this.options.shrink && this.width != this.indicatorWidth && ((this.width = this.indicatorWidth), (this.indicatorStyle.width = this.width + "px")),
                    i < this.minBoundaryY
                        ? ("scale" == this.options.shrink && ((this.height = p.max(this.indicatorHeight + 3 * i, 8)), (this.indicatorStyle.height = this.height + "px")), (i = this.minBoundaryY))
                        : i > this.maxBoundaryY
                        ? (i =
                              "scale" == this.options.shrink
                                  ? ((this.height = p.max(this.indicatorHeight - 3 * (i - this.maxPosY), 8)), (this.indicatorStyle.height = this.height + "px"), this.maxPosY + this.indicatorHeight - this.height)
                                  : this.maxBoundaryY)
                        : "scale" == this.options.shrink && this.height != this.indicatorHeight && ((this.height = this.indicatorHeight), (this.indicatorStyle.height = this.height + "px"))),
                    (this.x = t),
                    (this.y = i),
                    this.scroller.options.useTransform
                        ? (this.indicatorStyle[m.style.transform] = "translate(" + t + "px," + i + "px)" + this.scroller.translateZ)
                        : ((this.indicatorStyle.left = t + "px"), (this.indicatorStyle.top = i + "px"));
            },
            _pos: function (t, i) {
                t < 0 ? (t = 0) : t > this.maxPosX && (t = this.maxPosX),
                    i < 0 ? (i = 0) : i > this.maxPosY && (i = this.maxPosY),
                    (t = this.options.listenX ? p.round(t / this.sizeRatioX) : this.scroller.x),
                    (i = this.options.listenY ? p.round(i / this.sizeRatioY) : this.scroller.y),
                    this.scroller.scrollTo(t, i);
            },
            fade: function (t, i) {
                if (!i || this.visible) {
                    clearTimeout(this.fadeTimeout), (this.fadeTimeout = null);
                    var s = t ? 250 : 500,
                        e = t ? 0 : 300;
                    (t = t ? "1" : "0"),
                        (this.wrapperStyle[m.style.transitionDuration] = s + "ms"),
                        (this.fadeTimeout = setTimeout(
                            function (t) {
                                (this.wrapperStyle.opacity = t), (this.visible = +t);
                            }.bind(this, t),
                            e
                        ));
                }
            },
        }),
        (t.utils = m),
        "undefined" != typeof module && module.exports
            ? (module.exports = t)
            : "function" == typeof define && define.amd
            ? (define(function () {
                  return t;
              }),
              void 0 !== r && (r.IScroll = t))
            : (r.IScroll = t);
})(window, document, Math),
    /*!
     * Scrolloverflow 2.0.5 module for fullPage.js >= 3
     * https://github.com/alvarotrigo/fullPage.js
     * @license MIT licensed
     *
     * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
     */
    (function (l, c) {
        l.fp_scrolloverflow = (function () {
            l.IScroll || (l.IScroll = module.exports);
            var s = "fp-scrollable",
                n = "." + s,
                t = ".active",
                d = ".fp-section",
                e = d + t,
                o = ".fp-slide",
                u = ".fp-tableCell";
            function r() {
                var p = this;
                function s() {
                    var i;
                    fp_utils.hasClass(c.body, "fp-responsive")
                        ? ((i = p.options.scrollOverflowHandler),
                          e(function (t) {
                              fp_utils.hasClass(fp_utils.closest(t, d), "fp-auto-height-responsive") && i.remove(t);
                          }))
                        : e(t);
                }
                function t(t) {
                    if (!fp_utils.hasClass(t, "fp-noscroll")) {
                        fp_utils.css(t, { overflow: "hidden" });
                        var i,
                            s,
                            e,
                            o = p.options.scrollOverflowHandler,
                            n = o.wrapContent(),
                            r = fp_utils.closest(t, d),
                            h = o.scrollable(t),
                            a = ((s = r), null != (e = fp_utils.closest(s, d)) ? parseInt(getComputedStyle(e)["padding-bottom"]) + parseInt(getComputedStyle(e)["padding-top"]) : 0);
                        null != h ? (i = o.scrollHeight(t)) : ((i = t.scrollHeight), p.options.verticalCentered && (i = f(u, t)[0].scrollHeight));
                        var l = fp_utils.getWindowHeight(),
                            c = l - a;
                        l < i + a
                            ? null != h
                                ? o.update(t, c)
                                : (p.options.verticalCentered ? (fp_utils.wrapInner(f(u, t)[0], n.scroller), fp_utils.wrapInner(f(u, t)[0], n.scrollable)) : (fp_utils.wrapInner(t, n.scroller), fp_utils.wrapInner(t, n.scrollable)),
                                  o.create(t, c, p.iscrollOptions))
                            : o.remove(t),
                            fp_utils.css(t, { overflow: "" });
                    }
                }
                function e(s) {
                    f(d).forEach(function (t) {
                        var i = f(o, t);
                        i.length
                            ? i.forEach(function (t) {
                                  s(t);
                              })
                            : s(t);
                    });
                }
                (p.options = null),
                    (p.init = function (t, i) {
                        return (
                            (p.options = t),
                            (p.iscrollOptions = i),
                            "complete" === c.readyState && (s(), fullpage_api.shared.afterRenderActions()),
                            l.addEventListener("load", function () {
                                s(), fullpage_api.shared.afterRenderActions();
                            }),
                            p
                        );
                    }),
                    (p.createScrollBarForAll = s),
                    (p.createScrollBar = t);
            }
            (IScroll.prototype.wheelOn = function () {
                this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this);
            }),
                (IScroll.prototype.wheelOff = function () {
                    this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this);
                });
            var f = null,
                h = null,
                a = {
                    refreshId: null,
                    iScrollInstances: [],
                    lastScrollY: null,
                    hasBeenInit: !1,
                    iscrollOptions: { scrollbars: !0, mouseWheel: !0, hideScrollbars: !1, fadeScrollbars: !1, disableMouse: !0, interactiveScrollbars: !0 },
                    init: function (t) {
                        (f = fp_utils.$), (h = t);
                        var i = "ontouchstart" in l || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints;
                        return (a.iscrollOptions.click = i), (a.hasBeenInit = !0), (a.iscrollOptions = fp_utils.deepExtend(a.iscrollOptions, t.scrollOverflowOptions)), new r().init(t, a.iscrollOptions);
                    },
                    toggleWheel: function (s) {
                        f(n, f(e)[0]).forEach(function (t) {
                            var i = t.fp_iscrollInstance;
                            null != i && (s ? i.wheelOn() : i.wheelOff());
                        });
                    },
                    setIscroll: function (t, i) {
                        if (a.hasBeenInit) {
                            var s = fp_utils.closest(t, n) || f(n, t)[0],
                                e = i ? "enable" : "disable";
                            s && s.fp_iscrollInstance[e]();
                        }
                    },
                    onLeave: function () {
                        a.toggleWheel(!1);
                    },
                    beforeLeave: function () {
                        a.onLeave();
                    },
                    afterLoad: function () {
                        a.toggleWheel(!0);
                    },
                    create: function (s, e, o) {
                        f(n, s).forEach(function (t) {
                            fp_utils.css(t, { height: e + "px" });
                            var i = t.fp_iscrollInstance;
                            null != i &&
                                a.iScrollInstances.forEach(function (t) {
                                    t.destroy();
                                }),
                                (i = new IScroll(t, o)),
                                a.iScrollInstances.push(i),
                                fp_utils.hasClass(fp_utils.closest(s, d), "active") || i.wheelOff(),
                                (t.fp_iscrollInstance = i);
                        });
                    },
                    isScrolled: function (t, i) {
                        var s = i.fp_iscrollInstance;
                        return !s || ("top" === t ? 0 <= s.y && !fp_utils.getScrollTop(i) : "bottom" === t ? 0 - s.y + fp_utils.getScrollTop(i) + i.offsetHeight >= i.scrollHeight : void 0);
                    },
                    scrollable: function (t) {
                        return f(".fp-slides", t).length ? f(n, f(".fp-slide.active", t)[0])[0] : f(n, t)[0];
                    },
                    scrollHeight: function (t) {
                        return f(".fp-scroller", f(n, t)[0])[0].scrollHeight;
                    },
                    remove: function (t) {
                        if (null != t) {
                            var i = f(n, t)[0];
                            if (null != i) {
                                var s = i.fp_iscrollInstance;
                                null != s && s.destroy(), (i.fp_iscrollInstance = null), fp_utils.unwrap(f(".fp-scroller", t)[0]), fp_utils.unwrap(f(n, t)[0]);
                            }
                        }
                    },
                    update: function (t, i) {
                        clearTimeout(a.refreshId),
                            (a.refreshId = setTimeout(function () {
                                a.iScrollInstances.forEach(function (t) {
                                    t.refresh(), fullpage_api.silentMoveTo(fp_utils.index(f(e)[0]) + 1);
                                });
                            }, 150)),
                            fp_utils.css(f(n, t)[0], { height: i + "px" }),
                            h.verticalCentered && fp_utils.css(f(n, t)[0].parentNode, { height: i + "px" });
                    },
                    wrapContent: function () {
                        var t = c.createElement("div");
                        t.className = s;
                        var i = c.createElement("div");
                        return (i.className = "fp-scroller"), { scrollable: t, scroller: i };
                    },
                };
            return { iscrollHandler: a };
        })();
    })(window, document);
//# sourceMappingURL=scrolloverflow.min.js.map

/*!
 * fullPage 3.0.8 - Extensions 0.1.9
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!(function (e, t, n, o, r) {
    "function" == typeof define && define.amd
        ? define(function () {
              return (e.fullpage = o(t, n)), e.fullpage;
          })
        : "object" == typeof exports
        ? (module.exports = o(t, n))
        : (t.fullpage = o(t, n));
})(this, window, document, function (rn, ln) {
    "use strict";
    var an = "fullpage-wrapper",
        sn = "." + an,
        cn = "fp-responsive",
        un = "fp-notransition",
        fn = "fp-destroyed",
        dn = "fp-enabled",
        vn = "fp-viewing",
        pn = "active",
        hn = "." + pn,
        gn = "fp-completely",
        mn = "fp-section",
        Sn = "." + mn,
        bn = Sn + hn,
        wn = "fp-tableCell",
        yn = "." + wn,
        En = "fp-auto-height",
        xn = "fp-normal-scroll",
        An = "fp-nav",
        Ln = "#" + An,
        Mn = "fp-tooltip",
        Tn = "fp-slide",
        On = "." + Tn,
        kn = On + hn,
        Cn = "fp-slides",
        Hn = "." + Cn,
        Rn = "fp-slidesContainer",
        In = "." + Rn,
        zn = "fp-table",
        Bn = "fp-slidesNav",
        Nn = "." + Bn,
        jn = Nn + " a",
        e = "fp-controlArrow",
        Pn = "." + e,
        Wn = "fp-prev",
        Dn = Pn + ".fp-prev",
        Yn = Pn + ".fp-next";
    function Vn(e, t) {
        rn.console && rn.console[e] && rn.console[e]("fullPage: " + t);
    }
    function Zn(e, t) {
        return (t = 1 < arguments.length ? t : ln) ? t.querySelectorAll(e) : null;
    }
    function Xn(e) {
        e = e || {};
        for (var t = 1, n = arguments.length; t < n; ++t) {
            var o = arguments[t];
            if (o) for (var r in o) o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? (e[r] = o[r]) : (e[r] = Xn(e[r], o[r])));
        }
        return e;
    }
    function Gn(e, t) {
        return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className));
    }
    function Fn() {
        return "innerHeight" in rn ? rn.innerHeight : ln.documentElement.offsetHeight;
    }
    function Un() {
        return rn.innerWidth;
    }
    function Qn(e, t) {
        var n;
        for (n in ((e = l(e)), t))
            if (t.hasOwnProperty(n) && null !== n)
                for (var o = 0; o < e.length; o++) {
                    e[o].style[n] = t[n];
                }
        return e;
    }
    function n(e, t, n) {
        for (var o = e[n]; o && !bo(o, t); ) o = o[n];
        return o;
    }
    function _n(e, t) {
        return n(e, t, "previousElementSibling");
    }
    function Jn(e, t) {
        return n(e, t, "nextElementSibling");
    }
    function Kn(e, t) {
        if (null == t) return e.previousElementSibling;
        var n = Kn(e);
        return n && bo(n, t) ? n : null;
    }
    function $n(e, t) {
        if (null == t) return e.nextElementSibling;
        var n = $n(e);
        return n && bo(n, t) ? n : null;
    }
    function qn(e) {
        return e[e.length - 1];
    }
    function eo(e, t) {
        e = oo(e) ? e[0] : e;
        for (var n = null != t ? Zn(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
            if (n[r] == e) return o;
            1 == n[r].nodeType && o++;
        }
        return -1;
    }
    function l(e) {
        return oo(e) ? e : [e];
    }
    function to(e) {
        e = l(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "none";
        return e;
    }
    function no(e) {
        e = l(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "block";
        return e;
    }
    function oo(e) {
        return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e);
    }
    function ro(e, t) {
        e = l(e);
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.classList ? o.classList.add(t) : (o.className += " " + t);
        }
        return e;
    }
    function io(e, t) {
        e = l(e);
        for (var n = t.split(" "), o = 0; o < n.length; o++) {
            t = n[o];
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.classList ? i.classList.remove(t) : (i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
            }
        }
        return e;
    }
    function lo(e, t) {
        t.appendChild(e);
    }
    function o(e, t, n) {
        var o;
        t = t || ln.createElement("div");
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            ((n && !r) || !n) && ((o = t.cloneNode(!0)), i.parentNode.insertBefore(o, i)), o.appendChild(i);
        }
        return e;
    }
    function ao(e, t) {
        o(e, t, !0);
    }
    function so(e, t) {
        for ("string" == typeof t && (t = yo(t)), e.appendChild(t); e.firstChild !== t; ) t.appendChild(e.firstChild);
    }
    function co(e) {
        for (var t = ln.createDocumentFragment(); e.firstChild; ) t.appendChild(e.firstChild);
        e.parentNode.replaceChild(t, e);
    }
    function uo(e, t) {
        return e && 1 === e.nodeType ? (bo(e, t) ? e : uo(e.parentNode, t)) : null;
    }
    function fo(e, t) {
        r(e, e.nextSibling, t);
    }
    function vo(e, t) {
        r(e, e, t);
    }
    function r(e, t, n) {
        oo(n) || ("string" == typeof n && (n = yo(n)), (n = [n]));
        for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t);
    }
    function po() {
        var e = ln.documentElement;
        return (rn.pageYOffset || e.scrollTop) - (e.clientTop || 0);
    }
    function ho(t) {
        return Array.prototype.filter.call(t.parentNode.children, function (e) {
            return e !== t;
        });
    }
    function go(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
    }
    function mo(e) {
        if ("function" == typeof e) return !0;
        var t = Object.prototype.toString(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t;
    }
    function So(e, t, n) {
        var o;
        (n = void 0 === n ? {} : n), "function" == typeof rn.CustomEvent ? (o = new CustomEvent(t, { detail: n })) : (o = ln.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(o);
    }
    function bo(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
    }
    function wo(e, t) {
        if ("boolean" == typeof t) for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none";
        return e;
    }
    function yo(e) {
        var t = ln.createElement("div");
        return (t.innerHTML = e.trim()), t.firstChild;
    }
    function Eo(e) {
        e = l(e);
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n);
        }
    }
    function i(e, t, n) {
        for (var o = e[n], r = []; o; ) (bo(o, t) || null == t) && r.push(o), (o = o[n]);
        return r;
    }
    function xo(e, t) {
        return i(e, t, "nextElementSibling");
    }
    function Ao(e, t) {
        return i(e, t, "previousElementSibling");
    }
    function Lo(e, t) {
        e.insertBefore(t, e.firstChild);
    }
    return (
        rn.NodeList &&
            !NodeList.prototype.forEach &&
            (NodeList.prototype.forEach = function (e, t) {
                t = t || rn;
                for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this);
            }),
        (rn.fp_utils = {
            $: Zn,
            deepExtend: Xn,
            hasClass: Gn,
            getWindowHeight: Fn,
            css: Qn,
            until: n,
            prevUntil: _n,
            nextUntil: Jn,
            prev: Kn,
            next: $n,
            last: qn,
            index: eo,
            getList: l,
            hide: to,
            show: no,
            isArrayOrList: oo,
            addClass: ro,
            removeClass: io,
            appendTo: lo,
            wrap: o,
            wrapAll: ao,
            wrapInner: so,
            unwrap: co,
            closest: uo,
            after: fo,
            before: vo,
            insertBefore: r,
            getScrollTop: po,
            siblings: ho,
            preventDefault: go,
            isFunction: mo,
            trigger: So,
            matches: bo,
            toggle: wo,
            createElementFromHTML: yo,
            remove: Eo,
            filter: function (e, t) {
                Array.prototype.filter.call(e, t);
            },
            untilAll: i,
            nextAll: xo,
            prevAll: Ao,
            showError: Vn,
            prependTo: Lo,
            toggleClass: function (e, t, n) {
                if (e.classList && null == n) e.classList.toggle(t);
                else {
                    var o = Gn(e, t);
                    (o && null == n) || !n ? io(e, t) : ((!o && null == n) || n) && ro(e, t);
                }
            },
        }),
        function (e, g) {
            var n = (g && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey)) || -1 < ln.domain.indexOf("alvarotrigo.com"),
                r = Zn("html, body"),
                s = Zn("html")[0],
                m = Zn("body")[0];
            if (!Gn(s, dn)) {
                var S = {};
                g = Xn(
                    {
                        menu: !1,
                        anchors: [],
                        lockAnchors: !1,
                        navigation: !1,
                        navigationPosition: "right",
                        navigationTooltips: [],
                        showActiveTooltip: !1,
                        slidesNavigation: !1,
                        slidesNavPosition: "bottom",
                        scrollBar: !1,
                        hybrid: !1,
                        css3: !0,
                        scrollingSpeed: 700,
                        autoScrolling: !0,
                        fitToSection: !0,
                        fitToSectionDelay: 1e3,
                        easing: "easeInOutCubic",
                        easingcss3: "ease",
                        loopBottom: !1,
                        loopTop: !1,
                        loopHorizontal: !0,
                        continuousVertical: !1,
                        continuousHorizontal: !1,
                        scrollHorizontally: !1,
                        interlockedSlides: !1,
                        dragAndMove: !1,
                        offsetSections: !1,
                        resetSliders: !1,
                        fadingEffect: !1,
                        normalScrollElements: null,
                        scrollOverflow: !1,
                        scrollOverflowReset: !1,
                        scrollOverflowHandler: rn.fp_scrolloverflow ? rn.fp_scrolloverflow.iscrollHandler : null,
                        scrollOverflowOptions: null,
                        touchSensitivity: 5,
                        touchWrapper: "string" == typeof e ? Zn(e)[0] : e,
                        bigSectionsDestination: null,
                        keyboardScrolling: !0,
                        animateAnchor: !0,
                        recordHistory: !0,
                        controlArrows: !0,
                        controlArrowColor: "#fff",
                        verticalCentered: !0,
                        sectionsColor: [],
                        paddingTop: 0,
                        paddingBottom: 0,
                        fixedElements: null,
                        responsive: 0,
                        responsiveWidth: 0,
                        responsiveHeight: 0,
                        responsiveSlides: !1,
                        parallax: !1,
                        parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
                        cards: !1,
                        cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 },
                        sectionSelector: ".section",
                        slideSelector: ".slide",
                        v2compatible: !1,
                        afterLoad: null,
                        onLeave: null,
                        afterRender: null,
                        afterResize: null,
                        afterReBuild: null,
                        afterSlideLoad: null,
                        onSlideLeave: null,
                        afterResponsive: null,
                        lazyLoading: !0,
                    },
                    g
                );
                var b,
                    l,
                    c,
                    o,
                    a = !1,
                    i = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    u = "ontouchstart" in rn || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                    w = "string" == typeof e ? Zn(e)[0] : e,
                    y = Fn(),
                    f = Un(),
                    E = !1,
                    t = !0,
                    x = !0,
                    d = [],
                    v = { m: { up: !0, down: !0, left: !0, right: !0 } };
                v.k = Xn({}, v.m);
                var p,
                    h,
                    A,
                    L,
                    M,
                    T,
                    O,
                    k,
                    C,
                    H,
                    R = Dt(),
                    I = { touchmove: "ontouchmove" in rn ? "touchmove" : R.move, touchstart: "ontouchstart" in rn ? "touchstart" : R.down },
                    z = !1,
                    B = !Gn(m, nt("OHNsd3AtZnVsbHBhZ2UtanM5T20=")),
                    N = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                    j = !1;
                try {
                    var P = Object.defineProperty({}, "passive", {
                        get: function () {
                            j = !0;
                        },
                    });
                    rn.addEventListener("testPassive", null, P), rn.removeEventListener("testPassive", null, P);
                } catch (e) {}
                var W,
                    D,
                    Y = Xn({}, g),
                    V = !1,
                    Z = !0,
                    X = {};
                $t(),
                    (rn.fp_easings = Xn(rn.fp_easings, {
                        easeInOutCubic: function (e, t, n, o) {
                            return (e /= o / 2) < 1 ? (n / 2) * e * e * e + t : (n / 2) * ((e -= 2) * e * e + 2) + t;
                        },
                    })),
                    w &&
                        ((S.version = "3.0.8"),
                        (S.setAutoScrolling = oe),
                        (S.setRecordHistory = re),
                        (S.setScrollingSpeed = ie),
                        (S.setFitToSection = le),
                        (S.setLockAnchors = function (e) {
                            g.lockAnchors = e;
                        }),
                        (S.setMouseWheelScrolling = ae),
                        (S.setAllowScrolling = se),
                        (S.setKeyboardScrolling = ue),
                        (S.moveSectionUp = fe),
                        (S.moveSectionDown = de),
                        (S.silentMoveTo = ve),
                        (S.moveTo = pe),
                        (S.moveSlideRight = he),
                        (S.moveSlideLeft = ge),
                        (S.fitToSection = He),
                        (S.reBuild = me),
                        (S.setResponsive = be),
                        (S.getFullpageData = function () {
                            return {
                                options: g,
                                internals: {
                                    container: w,
                                    canScroll: x,
                                    isScrollAllowed: v,
                                    getDestinationPosition: Ye,
                                    isTouch: u,
                                    c: lt,
                                    getXmovement: kt,
                                    removeAnimation: Mt,
                                    getTransforms: Xt,
                                    lazyLoad: Je,
                                    addAnimation: Lt,
                                    performHorizontalMove: yt,
                                    landscapeScroll: St,
                                    silentLandscapeScroll: Vt,
                                    keepSlidesPosition: De,
                                    silentScroll: Zt,
                                    styleSlides: Le,
                                    styleSection: Te,
                                    scrollHandler: Ce,
                                    getEventsPage: Yt,
                                    getMSPointer: Dt,
                                    isReallyTouch: Be,
                                    usingExtension: Ut,
                                    toggleControlArrows: bt,
                                    touchStartHandler: Ne,
                                    touchMoveHandler: ze,
                                },
                            };
                        }),
                        (S.destroy = function (e) {
                            So(w, "destroy", e),
                                oe(!1, "internal"),
                                se(!0),
                                ce(!1),
                                ue(!1),
                                ro(w, fn),
                                [M, L, h, T, O, C, A].forEach(function (e) {
                                    clearTimeout(e);
                                }),
                                rn.removeEventListener("scroll", Ce),
                                rn.removeEventListener("hashchange", ct),
                                rn.removeEventListener("resize", Et),
                                ln.removeEventListener("keydown", ft),
                                ln.removeEventListener("keyup", dt),
                                ["click", "touchstart"].forEach(function (e) {
                                    ln.removeEventListener(e, we);
                                }),
                                ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (e) {
                                    ln.removeEventListener(e, Ee, !0);
                                }),
                                Qt("dragAndMove", "destroy"),
                                e &&
                                    (Zt(0),
                                    Zn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", w).forEach(function (e) {
                                        Qe(e, "src");
                                    }),
                                    Zn("img[data-srcset]").forEach(function (e) {
                                        Qe(e, "srcset");
                                    }),
                                    Eo(Zn(Ln + ", " + Nn + ", " + Pn)),
                                    Qn(Zn(Sn), { height: "", "background-color": "", padding: "" }),
                                    Qn(Zn(On), { width: "" }),
                                    Qn(w, { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }),
                                    Qn(r, { overflow: "", height: "" }),
                                    io(s, dn),
                                    io(m, cn),
                                    m.className.split(/\s+/).forEach(function (e) {
                                        0 === e.indexOf(vn) && io(m, e);
                                    }),
                                    Zn(Sn + ", " + On).forEach(function (e) {
                                        g.scrollOverflowHandler && g.scrollOverflow && g.scrollOverflowHandler.remove(e), io(e, zn + " " + pn + " " + gn);
                                        var t = e.getAttribute("data-fp-styles");
                                        t && e.setAttribute("style", e.getAttribute("data-fp-styles")), Gn(e, mn) && !V && e.removeAttribute("data-anchor");
                                    }),
                                    Ft(w),
                                    [yn, In, Hn].forEach(function (e) {
                                        Zn(e, w).forEach(function (e) {
                                            co(e);
                                        });
                                    }),
                                    rn.scrollTo(0, 0),
                                    [mn, Tn, Rn].forEach(function (e) {
                                        io(Zn("." + e), e);
                                    }));
                        }),
                        (S.getActiveSection = function () {
                            return new nn(Zn(bn)[0]);
                        }),
                        (S.getActiveSlide = function () {
                            return Ge(Zn(kn, Zn(bn)[0])[0]);
                        }),
                        (S.landscapeScroll = St),
                        (S.test = {
                            top: "0px",
                            translate3d: "translate3d(0px, 0px, 0px)",
                            translate3dH: (function () {
                                for (var e = [], t = 0; t < Zn(g.sectionSelector, w).length; t++) e.push("translate3d(0px, 0px, 0px)");
                                return e;
                            })(),
                            left: (function () {
                                for (var e = [], t = 0; t < Zn(g.sectionSelector, w).length; t++) e.push(0);
                                return e;
                            })(),
                            options: g,
                            setAutoScrolling: oe,
                        }),
                        (S.shared = { afterRenderActions: ke, isNormalScrollElement: !1 }),
                        (rn.fullpage_api = S),
                        (rn.fullpage_extensions = !0),
                        g.$ &&
                            Object.keys(S).forEach(function (e) {
                                g.$.fn.fullpage[e] = S[e];
                            }),
                        Ae("continuousHorizontal"),
                        Ae("scrollHorizontally"),
                        Ae("resetSliders"),
                        Ae("interlockedSlides"),
                        Ae("responsiveSlides"),
                        Ae("fadingEffect"),
                        Ae("dragAndMove"),
                        Ae("offsetSections"),
                        Ae("scrollOverflowReset"),
                        Ae("parallax"),
                        Ae("cards"),
                        Qt("dragAndMove", "init"),
                        g.css3 &&
                            (g.css3 = (function () {
                                var e,
                                    t = ln.createElement("p"),
                                    n = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
                                for (var o in ((t.style.display = "block"), ln.body.insertBefore(t, null), n)) void 0 !== t.style[o] && ((t.style[o] = "translate3d(1px,1px,1px)"), (e = rn.getComputedStyle(t).getPropertyValue(n[o])));
                                return ln.body.removeChild(t), void 0 !== e && 0 < e.length && "none" !== e;
                            })()),
                        (g.scrollBar = g.scrollBar || g.hybrid),
                        (function () {
                            if (!g.anchors.length) {
                                var e = "[data-anchor]",
                                    t = Zn(g.sectionSelector.split(",").join(e + ",") + e, w);
                                t.length &&
                                    ((V = !0),
                                    t.forEach(function (e) {
                                        g.anchors.push(e.getAttribute("data-anchor").toString());
                                    }));
                            }
                            if (!g.navigationTooltips.length) {
                                var n = "[data-tooltip]",
                                    o = Zn(g.sectionSelector.split(",").join(n + ",") + n, w);
                                o.length &&
                                    o.forEach(function (e) {
                                        g.navigationTooltips.push(e.getAttribute("data-tooltip").toString());
                                    });
                            }
                        })(),
                        (function () {
                            Qn(w, { height: "100%", position: "relative" }), ro(w, an), ro(s, dn), (y = Fn()), io(w, fn), ro(Zn(g.sectionSelector, w), mn), ro(Zn(g.slideSelector, w), Tn), Qt("parallax", "init");
                            for (var e = Zn(Sn), t = 0; t < e.length; t++) {
                                var n = t,
                                    o = e[t],
                                    r = Zn(On, o),
                                    i = r.length;
                                o.setAttribute("data-fp-styles", o.getAttribute("style")),
                                    Te(o, n),
                                    (l = o),
                                    (a = n),
                                    void 0 !== g.anchors[a] && Gn(l, pn) && Tt(g.anchors[a], a),
                                    g.menu &&
                                        g.css3 &&
                                        null != uo(Zn(g.menu)[0], sn) &&
                                        Zn(g.menu).forEach(function (e) {
                                            m.appendChild(e);
                                        }),
                                    0 < i ? Le(o, r, i) : g.verticalCentered && Ct(o);
                            }
                            var l, a;
                            g.fixedElements &&
                                g.css3 &&
                                Zn(g.fixedElements).forEach(function (e) {
                                    m.appendChild(e);
                                }),
                                g.navigation &&
                                    (function () {
                                        var e = ln.createElement("div");
                                        e.setAttribute("id", An);
                                        var t = ln.createElement("ul");
                                        e.appendChild(t), lo(e, m);
                                        var n = Zn(Ln)[0];
                                        ro(n, "fp-" + g.navigationPosition), g.showActiveTooltip && ro(n, "fp-show-active");
                                        for (var o = "", r = 0; r < Zn(Sn).length; r++) {
                                            var i = "";
                                            g.anchors.length && (i = g.anchors[r]), (o += '<li><a href="#' + i + '"><span class="fp-sr-only">' + Oe(r, "Section") + "</span><span></span></a>");
                                            var l = g.navigationTooltips[r];
                                            void 0 !== l && "" !== l && (o += '<div class="' + Mn + " fp-" + g.navigationPosition + '">' + l + "</div>"), (o += "</li>");
                                        }
                                        (Zn("ul", n)[0].innerHTML = o), Qn(Zn(Ln), { "margin-top": "-" + Zn(Ln)[0].offsetHeight / 2 + "px" }), ro(Zn("a", Zn("li", Zn(Ln)[0])[eo(Zn(bn)[0], Sn)]), pn);
                                    })(),
                                Zn('iframe[src*="youtube.com/embed/"]', w).forEach(function (e) {
                                    var t, n, o;
                                    (n = "enablejsapi=1"), (o = (t = e).getAttribute("src")), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n);
                                }),
                                Qt("fadingEffect", "apply"),
                                Qt("cards", "init"),
                                g.scrollOverflow && (p = g.scrollOverflowHandler.init(g));
                        })(),
                        se(!0),
                        ce(!0),
                        oe(g.autoScrolling, "internal"),
                        At(),
                        Wt(),
                        "complete" === ln.readyState && st(),
                        rn.addEventListener("load", st),
                        g.scrollOverflow || ke(),
                        (function () {
                            for (var e = 1; e < 4; e++) C = setTimeout(xe, 350 * e);
                        })(),
                        B || lt("l"),
                        rn.addEventListener("scroll", Ce),
                        rn.addEventListener("hashchange", ct),
                        rn.addEventListener("blur", gt),
                        rn.addEventListener("resize", Et),
                        ln.addEventListener("keydown", ft),
                        ln.addEventListener("keyup", dt),
                        ["click", "touchstart"].forEach(function (e) {
                            ln.addEventListener(e, we);
                        }),
                        g.normalScrollElements &&
                            (["mouseenter", "touchstart"].forEach(function (e) {
                                ye(e, !1);
                            }),
                            ["mouseleave", "touchend"].forEach(function (e) {
                                ye(e, !0);
                            })),
                        Qt("dragAndMove", "turnOffTouch"));
                var G,
                    F,
                    U,
                    Q = !1,
                    _ = 0,
                    J = 0,
                    K = 0,
                    $ = 0,
                    q = new Date().getTime(),
                    ee = 0,
                    te = 0,
                    ne = y;
                return S;
            }
            function oe(e, t) {
                e || Zt(0), Kt("autoScrolling", e, t);
                var n = Zn(bn)[0];
                if (g.autoScrolling && !g.scrollBar) Qn(r, { overflow: "hidden", height: "100%" }), re(Y.recordHistory, "internal"), Qn(w, { "-ms-touch-action": "none", "touch-action": "none" }), null != n && Zt(n.offsetTop);
                else if ((Qn(r, { overflow: "visible", height: "initial" }), re(!!g.autoScrolling && Y.recordHistory, "internal"), Qn(w, { "-ms-touch-action": "", "touch-action": "" }), Ft(w), null != n)) {
                    var o = Fe(n.offsetTop);
                    o.element.scrollTo(0, o.options);
                }
                So(w, "setAutoScrolling", e);
            }
            function re(e, t) {
                Kt("recordHistory", e, t);
            }
            function ie(e, t) {
                "internal" !== t && Ut("fadingEffect") && S.fadingEffect.update(e), Ut("cards") && S.cards.update(e), Kt("scrollingSpeed", e, t);
            }
            function le(e, t) {
                Kt("fitToSection", e, t);
            }
            function ae(e) {
                e
                    ? ((function () {
                          var e,
                              t = "";
                          rn.addEventListener ? (e = "addEventListener") : ((e = "attachEvent"), (t = "on"));
                          var n = "onwheel" in ln.createElement("div") ? "wheel" : void 0 !== ln.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                              o = !!j && { passive: !1 };
                          "DOMMouseScroll" == n ? ln[e](t + "MozMousePixelScroll", Pe, o) : ln[e](t + n, Pe, o);
                      })(),
                      w.addEventListener("mousedown", vt),
                      w.addEventListener("mouseup", pt))
                    : (ln.addEventListener ? (ln.removeEventListener("mousewheel", Pe, !1), ln.removeEventListener("wheel", Pe, !1), ln.removeEventListener("MozMousePixelScroll", Pe, !1)) : ln.detachEvent("onmousewheel", Pe),
                      w.removeEventListener("mousedown", vt),
                      w.removeEventListener("mouseup", pt));
            }
            function se(t, e) {
                void 0 !== e
                    ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                          Gt(t, e, "m");
                      })
                    : Gt(t, "all", "m"),
                    So(w, "setAllowScrolling", { value: t, directions: e });
            }
            function ce(e) {
                e
                    ? (ae(!0),
                      (function () {
                          if (i || u) {
                              g.autoScrolling && (m.removeEventListener(I.touchmove, Ie, { passive: !1 }), m.addEventListener(I.touchmove, Ie, { passive: !1 }));
                              var e = g.touchWrapper;
                              e.removeEventListener(I.touchstart, Ne), e.removeEventListener(I.touchmove, ze, { passive: !1 }), e.addEventListener(I.touchstart, Ne), e.addEventListener(I.touchmove, ze, { passive: !1 });
                          }
                      })())
                    : (ae(!1),
                      (function () {
                          if (i || u) {
                              g.autoScrolling && (m.removeEventListener(I.touchmove, ze, { passive: !1 }), m.removeEventListener(I.touchmove, Ie, { passive: !1 }));
                              var e = g.touchWrapper;
                              e.removeEventListener(I.touchstart, Ne), e.removeEventListener(I.touchmove, ze, { passive: !1 });
                          }
                      })());
            }
            function ue(t, e) {
                void 0 !== e
                    ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                          Gt(t, e, "k");
                      })
                    : (Gt(t, "all", "k"), (g.keyboardScrolling = t));
            }
            function fe() {
                var e = _n(Zn(bn)[0], Sn);
                e || (!g.loopTop && !g.continuousVertical) || (e = qn(Zn(Sn))), null != e && Ve(e, null, !0);
            }
            function de() {
                var e = Jn(Zn(bn)[0], Sn);
                e || (!g.loopBottom && !g.continuousVertical) || (e = Zn(Sn)[0]), null != e && Ve(e, null, !1);
            }
            function ve(e, t) {
                ie(0, "internal"), pe(e, t), ie(Y.scrollingSpeed, "internal");
            }
            function pe(e, t) {
                var n = It(e);
                void 0 !== t ? zt(e, t) : null != n && Ve(n);
            }
            function he(e) {
                We("right", e);
            }
            function ge(e) {
                We("left", e);
            }
            function me(e) {
                if (!Gn(w, fn)) {
                    (E = !0), (y = Fn()), (f = Un());
                    for (var t = Zn(Sn), n = 0; n < t.length; ++n) {
                        var o = t[n],
                            r = Zn(Hn, o)[0],
                            i = Zn(On, o);
                        g.verticalCentered && Qn(Zn(yn, o), { height: Ht(o) + "px" }), Qn(o, { height: Me(o) + "px" }), 1 < i.length && St(r, Zn(kn, r)[0]);
                    }
                    g.scrollOverflow && p.createScrollBarForAll();
                    var l = eo(Zn(bn)[0], Sn);
                    l && !Ut("fadingEffect") && ve(l + 1), (E = !1), mo(g.afterResize) && e && g.afterResize.call(w, rn.innerWidth, rn.innerHeight), mo(g.afterReBuild) && !e && g.afterReBuild.call(w), So(w, "afterRebuild");
                }
            }
            function Se() {
                return Gn(m, cn);
            }
            function be(e) {
                var t = Se();
                e
                    ? t ||
                      (oe(!1, "internal"),
                      le(!1, "internal"),
                      to(Zn(Ln)),
                      ro(m, cn),
                      mo(g.afterResponsive) && g.afterResponsive.call(w, e),
                      Qt("responsiveSlides", "toSections"),
                      So(w, "afterResponsive", e),
                      g.scrollOverflow && p.createScrollBarForAll())
                    : t && (oe(Y.autoScrolling, "internal"), le(Y.autoScrolling, "internal"), no(Zn(Ln)), io(m, cn), mo(g.afterResponsive) && g.afterResponsive.call(w, e), Qt("responsiveSlides", "toSlides"), So(w, "afterResponsive", e));
            }
            function we(e) {
                var t = e.target;
                t && uo(t, Ln + " a")
                    ? function (e) {
                          go(e);
                          var t = eo(uo(this, Ln + " li"));
                          Ve(Zn(Sn)[t]);
                      }.call(t, e)
                    : bo(t, ".fp-tooltip")
                    ? function () {
                          So(Kn(this), "click");
                      }.call(t)
                    : bo(t, Pn)
                    ? function () {
                          var e = uo(this, Sn);
                          Gn(this, Wn) ? v.m.left && ge(e) : v.m.right && he(e);
                      }.call(t, e)
                    : bo(t, jn) || null != uo(t, jn)
                    ? function (e) {
                          go(e);
                          var t = Zn(Hn, uo(this, Sn))[0],
                              n = Zn(On, t)[eo(uo(this, "li"))];
                          St(t, n);
                      }.call(t, e)
                    : uo(t, g.menu + " [data-menuanchor]") &&
                      function (e) {
                          !Zn(g.menu)[0] || (!g.lockAnchors && g.anchors.length) || (go(e), pe(this.getAttribute("data-menuanchor")));
                      }.call(t, e);
            }
            function ye(e, t) {
                (ln["fp_" + e] = t), ln.addEventListener(e, Ee, !0);
            }
            function Ee(e) {
                var t = e.type,
                    o = !1,
                    r = g.scrollOverflow,
                    i = "mouseleave" === t ? e.toElement || e.relatedTarget : e.target;
                if (i == ln || !i) return ce(!0), void (r && g.scrollOverflowHandler.setIscroll(i, !0));
                "touchend" === t &&
                    ((Z = !1),
                    setTimeout(function () {
                        Z = !0;
                    }, 800)),
                    ("mouseenter" !== t || Z) &&
                        (g.normalScrollElements.split(",").forEach(function (e) {
                            if (!o) {
                                var t = bo(i, e),
                                    n = uo(i, e);
                                (t || n) && (S.shared.isNormalScrollElement || (ce(!1), r && g.scrollOverflowHandler.setIscroll(i, !1)), (S.shared.isNormalScrollElement = !0), (o = !0));
                            }
                        }),
                        !o && S.shared.isNormalScrollElement && (ce(!0), r && g.scrollOverflowHandler.setIscroll(i, !0), (S.shared.isNormalScrollElement = !1)));
            }
            function xe() {
                var e = Fn(),
                    t = Un();
                (y === e && f === t) || ((y = e), (f = t), me(!0));
            }
            function Ae(e) {
                var t = "fp_" + e + "Extension";
                (X[e] = g[e + "Key"]), (S[e] = void 0 !== rn[t] ? new rn[t]() : null), S[e] && S[e].c(e);
            }
            function Le(e, t, n) {
                var o = 100 * n,
                    r = 100 / n,
                    i = ln.createElement("div");
                (i.className = Cn), ao(t, i);
                var l,
                    a,
                    s = ln.createElement("div");
                (s.className = Rn),
                    ao(t, s),
                    Qn(Zn(In, e), { width: o + "%" }),
                    1 < n &&
                        (g.controlArrows &&
                            ((l = e),
                            (a = [yo('<div class="fp-controlArrow fp-prev"></div>'), yo('<div class="fp-controlArrow fp-next"></div>')]),
                            fo(Zn(Hn, l)[0], a),
                            "#fff" !== g.controlArrowColor &&
                                (Qn(Zn(Yn, l), { "border-color": "transparent transparent transparent " + g.controlArrowColor }), Qn(Zn(Dn, l), { "border-color": "transparent " + g.controlArrowColor + " transparent transparent" })),
                            g.loopHorizontal || to(Zn(Dn, l))),
                        g.slidesNavigation &&
                            (function (e, t) {
                                lo(yo('<div class="' + Bn + '"><ul></ul></div>'), e);
                                var n = Zn(Nn, e)[0];
                                ro(n, "fp-" + g.slidesNavPosition);
                                for (var o = 0; o < t; o++) lo(yo('<li><a href="#"><span class="fp-sr-only">' + Oe(o, "Slide") + "</span><span></span></a></li>"), Zn("ul", n)[0]);
                                Qn(n, { "margin-left": "-" + n.innerWidth / 2 + "px" }), ro(Zn("a", Zn("li", n)[0]), pn);
                            })(e, n)),
                    t.forEach(function (e) {
                        Qn(e, { width: r + "%" }), g.verticalCentered && Ct(e);
                    });
                var c = Zn(kn, e)[0];
                null != c && (0 !== eo(Zn(bn), Sn) || (0 === eo(Zn(bn), Sn) && 0 !== eo(c))) ? (Vt(c, "internal"), ro(c, "fp-initial")) : ro(t[0], pn);
            }
            function Me(e) {
                return g.offsetSections && S.offsetSections ? Math.round(S.offsetSections.getWindowHeight(e)) : Fn();
            }
            function Te(e, t) {
                t || null != Zn(bn)[0] || ro(e, pn),
                    (o = Zn(bn)[0]),
                    Qn(e, { height: Me(e) + "px" }),
                    g.paddingTop && Qn(e, { "padding-top": g.paddingTop }),
                    g.paddingBottom && Qn(e, { "padding-bottom": g.paddingBottom }),
                    void 0 !== g.sectionsColor[t] && Qn(e, { "background-color": g.sectionsColor[t] }),
                    void 0 !== g.anchors[t] && e.setAttribute("data-anchor", g.anchors[t]);
            }
            function Oe(e, t) {
                return g.navigationTooltips[e] || g.anchors[e] || t + " " + (e + 1);
            }
            function ke() {
                var e,
                    t,
                    n = Zn(bn)[0];
                ro(n, gn),
                    Je(n),
                    _e(),
                    $e(n),
                    g.scrollOverflow && g.scrollOverflowHandler.afterLoad(),
                    (e = ut()),
                    (t = It(e.section)),
                    (e.section && t && (void 0 === t || eo(t) !== eo(o))) || !mo(g.afterLoad) || Ze("afterLoad", { activeSection: n, element: n, direction: null, anchorLink: n.getAttribute("data-anchor"), sectionIndex: eo(n, Sn) }),
                    mo(g.afterRender) && Ze("afterRender"),
                    So(w, "afterRender");
            }
            function Ce() {
                var e;
                if ((So(w, "onScroll"), (!g.autoScrolling || g.scrollBar || Ut("dragAndMove")) && !Jt())) {
                    var t = Ut("dragAndMove") ? Math.abs(S.dragAndMove.getCurrentScroll()) : po(),
                        n = 0,
                        o = t + Fn() / 2,
                        r = (Ut("dragAndMove") ? S.dragAndMove.getDocumentHeight() : m.offsetHeight - Fn()) === t,
                        i = Zn(Sn);
                    if (r) n = i.length - 1;
                    else if (t) for (var l = 0; l < i.length; ++l) i[l].offsetTop <= o && (n = l);
                    else n = 0;
                    if (!Gn((e = i[n]), pn)) {
                        Q = !0;
                        var a,
                            s,
                            c = Zn(bn)[0],
                            u = eo(c, Sn) + 1,
                            f = Ot(e),
                            d = e.getAttribute("data-anchor"),
                            v = eo(e, Sn) + 1,
                            p = Zn(kn, e)[0],
                            h = { activeSection: c, sectionIndex: v - 1, anchorLink: d, element: e, leavingSection: u, direction: f };
                        p && ((s = p.getAttribute("data-anchor")), (a = eo(p))),
                            x &&
                                (ro(e, pn),
                                io(ho(e), pn),
                                Qt("parallax", "afterLoad"),
                                mo(g.onLeave) && Ze("onLeave", h),
                                mo(g.afterLoad) && Ze("afterLoad", h),
                                Ut("resetSliders") && S.resetSliders.apply({ localIsResizing: E, leavingSection: u }),
                                et(c),
                                Je(e),
                                $e(e),
                                Tt(d, v - 1),
                                g.anchors.length && (b = d),
                                Nt(a, s, d)),
                            clearTimeout(T),
                            (T = setTimeout(function () {
                                Q = !1;
                            }, 100));
                    }
                    g.fitToSection &&
                        (clearTimeout(O),
                        (O = setTimeout(function () {
                            g.fitToSection && Zn(bn)[0].offsetHeight <= y && He();
                        }, g.fitToSectionDelay)));
                }
            }
            function He() {
                x && ((E = !0), Ve(Zn(bn)[0]), (E = !1));
            }
            function Re(e) {
                if (v.m[e]) {
                    var t = "down" === e ? de : fe;
                    if ((Ut("scrollHorizontally") && (t = S.scrollHorizontally.getScrollSection(e, t)), g.scrollOverflow)) {
                        var n = g.scrollOverflowHandler.scrollable(Zn(bn)[0]),
                            o = "down" === e ? "bottom" : "top";
                        if (null != n) {
                            if (!g.scrollOverflowHandler.isScrolled(o, n)) return !0;
                            t();
                        } else t();
                    } else t();
                }
            }
            function Ie(e) {
                g.autoScrolling && Be(e) && v.m.up && go(e);
            }
            function ze(e) {
                var t = uo(e.target, Sn) || Zn(bn)[0];
                if (Be(e)) {
                    g.autoScrolling && go(e);
                    var n = Yt(e);
                    (K = n.y),
                        ($ = n.x),
                        Zn(Hn, t).length && Math.abs(J - $) > Math.abs(_ - K)
                            ? !a && Math.abs(J - $) > (Un() / 100) * g.touchSensitivity && ($ < J ? v.m.right && he(t) : v.m.left && ge(t))
                            : g.autoScrolling && x && Math.abs(_ - K) > (rn.innerHeight / 100) * g.touchSensitivity && (K < _ ? Re("down") : _ < K && Re("up"));
                }
            }
            function Be(e) {
                return void 0 === e.pointerType || "mouse" != e.pointerType;
            }
            function Ne(e) {
                if ((g.fitToSection && (W = !1), Be(e))) {
                    var t = Yt(e);
                    (_ = t.y), (J = t.x);
                }
            }
            function je(e, t) {
                for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r];
                return Math.ceil(n / t);
            }
            function Pe(e) {
                var t = new Date().getTime(),
                    n = Gn(Zn(".fp-completely")[0], xn);
                if (!v.m.down && !v.m.up) return go(e), !1;
                if (g.autoScrolling && !c && !n) {
                    var o = (e = e || rn.event).wheelDelta || -e.deltaY || -e.detail,
                        r = Math.max(-1, Math.min(1, o)),
                        i = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
                        l = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !i;
                    149 < d.length && d.shift(), d.push(Math.abs(o)), g.scrollBar && go(e);
                    var a = t - q;
                    if (((q = t), 200 < a && (d = []), x && !_t())) {
                        var s = je(d, 10);
                        je(d, 70) <= s && l && Re(r < 0 ? "down" : "up");
                    }
                    return !1;
                }
                g.fitToSection && (W = !1);
            }
            function We(e, t) {
                var n = null == t ? Zn(bn)[0] : t,
                    o = Zn(Hn, n)[0];
                if (!(null == o || _t() || a || Zn(On, o).length < 2)) {
                    var r = Zn(kn, o)[0],
                        i = null;
                    if (null == (i = "left" === e ? _n(r, On) : Jn(r, On))) {
                        if (!g.loopHorizontal) return;
                        var l = ho(r);
                        i = "left" === e ? l[l.length - 1] : l[0];
                    }
                    (a = !S.test.isTesting), St(o, i, e);
                }
            }
            function De() {
                for (var e = Zn(kn), t = 0; t < e.length; t++) Vt(e[t], "internal");
            }
            function Ye(e) {
                var t = e.offsetHeight,
                    n = e.offsetTop,
                    o = n,
                    r = Ut("dragAndMove") && S.dragAndMove.isGrabbing ? S.dragAndMove.isScrollingDown() : ee < n,
                    i = o - y + t,
                    l = g.bigSectionsDestination;
                return y < t ? ((r || l) && "bottom" !== l) || (o = i) : (r || (E && null == $n(e))) && (o = i), g.offsetSections && S.offsetSections && (o = S.offsetSections.getSectionPosition(r, o, e)), (ee = o);
            }
            function Ve(e, t, n) {
                if (null != e) {
                    var o,
                        r,
                        i = {
                            element: e,
                            callback: t,
                            isMovementUp: n,
                            dtop: Ye(e),
                            yMovement: Ot(e),
                            anchorLink: e.getAttribute("data-anchor"),
                            sectionIndex: eo(e, Sn),
                            activeSlide: Zn(kn, e)[0],
                            activeSection: Zn(bn)[0],
                            leavingSection: eo(Zn(bn), Sn) + 1,
                            localIsResizing: E,
                        };
                    if (!((i.activeSection == e && !E) || (g.scrollBar && po() === i.dtop && !Gn(e, En)))) {
                        if ((null != i.activeSlide && ((o = i.activeSlide.getAttribute("data-anchor")), (r = eo(i.activeSlide))), !i.localIsResizing)) {
                            var l = i.yMovement;
                            if ((void 0 !== n && (l = n ? "up" : "down"), (i.direction = l), mo(g.onLeave) && !1 === Ze("onLeave", i))) return;
                        }
                        var a;
                        Qt("parallax", "apply", i),
                            Qt("cards", "apply", i),
                            g.autoScrolling &&
                                g.continuousVertical &&
                                void 0 !== i.isMovementUp &&
                                ((!i.isMovementUp && "up" == i.yMovement) || (i.isMovementUp && "down" == i.yMovement)) &&
                                ((s = i).isMovementUp ? vo(Zn(bn)[0], xo(s.activeSection, Sn)) : fo(Zn(bn)[0], Ao(s.activeSection, Sn).reverse()),
                                Zt(Zn(bn)[0].offsetTop),
                                De(),
                                (s.wrapAroundElements = s.activeSection),
                                (s.dtop = s.element.offsetTop),
                                (s.yMovement = Ot(s.element)),
                                (s.leavingSection = eo(s.activeSection, Sn) + 1),
                                (s.sectionIndex = eo(s.element, Sn)),
                                So(Zn(sn)[0], "onContinuousVertical", s),
                                (i = s)),
                            Ut("scrollOverflowReset") && S.scrollOverflowReset.setPrevious(i.activeSection),
                            i.localIsResizing || et(i.activeSection),
                            g.scrollOverflow && g.scrollOverflowHandler.beforeLeave(),
                            ro(e, pn),
                            io(ho(e), pn),
                            Je(e),
                            g.scrollOverflow && g.scrollOverflowHandler.onLeave(),
                            (x = S.test.isTesting),
                            Nt(r, o, i.anchorLink, i.sectionIndex),
                            (function (e) {
                                if (g.css3 && g.autoScrolling && !g.scrollBar) {
                                    var t = "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
                                    Rt(t, !0),
                                        g.scrollingSpeed
                                            ? (clearTimeout(L),
                                              (L = setTimeout(function () {
                                                  Ue(e);
                                              }, g.scrollingSpeed)))
                                            : Ue(e);
                                } else {
                                    var n = Fe(e.dtop);
                                    (S.test.top = -e.dtop + "px"),
                                        qt(n.element, n.options, g.scrollingSpeed, function () {
                                            g.scrollBar
                                                ? setTimeout(function () {
                                                      Ue(e);
                                                  }, 30)
                                                : Ue(e);
                                        });
                                }
                            })(i),
                            (b = i.anchorLink),
                            Tt(i.anchorLink, null == (a = i).wrapAroundElements ? a.sectionIndex : a.isMovementUp ? Zn(Sn).length - 1 : 0);
                    }
                }
                var s;
            }
            function Ze(e, t) {
                var n,
                    o,
                    r,
                    i,
                    l =
                        ((o = e),
                        (r = t),
                        (i = g.v2compatible
                            ? {
                                  afterRender: function () {
                                      return [w];
                                  },
                                  onLeave: function () {
                                      return [r.activeSection, r.leavingSection, r.sectionIndex + 1, r.direction];
                                  },
                                  afterLoad: function () {
                                      return [r.element, r.anchorLink, r.sectionIndex + 1];
                                  },
                                  afterSlideLoad: function () {
                                      return [r.destiny, r.anchorLink, r.sectionIndex + 1, r.slideAnchor, r.slideIndex];
                                  },
                                  onSlideLeave: function () {
                                      return [r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.direction, r.slideIndex];
                                  },
                              }
                            : {
                                  afterRender: function () {
                                      return { section: Xe(Zn(bn)[0]), slide: Ge(Zn(kn, Zn(bn)[0])[0]) };
                                  },
                                  onLeave: function () {
                                      return { origin: Xe(r.activeSection), destination: Xe(r.element), direction: r.direction };
                                  },
                                  afterLoad: function () {
                                      return i.onLeave();
                                  },
                                  afterSlideLoad: function () {
                                      return { section: Xe(r.section), origin: Ge(r.prevSlide), destination: Ge(r.destiny), direction: r.direction };
                                  },
                                  onSlideLeave: function () {
                                      return i.afterSlideLoad();
                                  },
                              })[o]());
                if (g.v2compatible) {
                    if (!1 === g[e].apply(l[0], l.slice(1))) return !1;
                } else if (
                    (So(w, e, l),
                    !1 ===
                        g[e].apply(
                            l[Object.keys(l)[0]],
                            ((n = l),
                            Object.keys(n).map(function (e) {
                                return n[e];
                            }))
                        ))
                )
                    return !1;
                return !0;
            }
            function Xe(e) {
                return e ? new nn(e) : null;
            }
            function Ge(e) {
                return e ? new on(e) : null;
            }
            function Fe(e) {
                var t = {};
                return g.autoScrolling && !g.scrollBar ? ((t.options = -e), (t.element = Zn(sn)[0])) : ((t.options = e), (t.element = rn)), t;
            }
            function Ue(e) {
                var t;
                null != (t = e).wrapAroundElements &&
                    (t.isMovementUp ? vo(Zn(Sn)[0], t.wrapAroundElements) : fo(Zn(Sn)[Zn(Sn).length - 1], t.wrapAroundElements),
                    Zt(Zn(bn)[0].offsetTop),
                    De(),
                    (t.sectionIndex = eo(t.element, Sn)),
                    (t.leavingSection = eo(t.activeSection, Sn) + 1)),
                    mo(g.afterLoad) && !e.localIsResizing && Ze("afterLoad", e),
                    g.scrollOverflow && g.scrollOverflowHandler.afterLoad(),
                    Qt("parallax", "afterLoad"),
                    Qt("scrollOverflowReset", "reset"),
                    Ut("resetSliders") && S.resetSliders.apply(e),
                    e.localIsResizing || $e(e.element),
                    ro(e.element, gn),
                    io(ho(e.element), gn),
                    _e(),
                    (x = !0),
                    mo(e.callback) && e.callback();
            }
            function Qe(e, t) {
                e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t);
            }
            function _e() {
                var e = Zn(".fp-auto-height")[0] || (Se() && Zn(".fp-auto-height-responsive")[0]);
                g.lazyLoading &&
                    e &&
                    Zn(Sn + ":not(" + hn + ")").forEach(function (e) {
                        var t, n, o;
                        (t = e.getBoundingClientRect()), (n = t.top), (o = t.bottom), ((n + 2 < y && 0 < n) || (2 < o && o < y)) && Je(e);
                    });
            }
            function Je(o) {
                g.lazyLoading &&
                    Zn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", tt(o)).forEach(function (n) {
                        if (
                            (["src", "srcset"].forEach(function (e) {
                                var t = n.getAttribute("data-" + e);
                                null != t &&
                                    t &&
                                    (Qe(n, e),
                                    n.addEventListener("load", function () {
                                        Ke(o);
                                    }));
                            }),
                            bo(n, "source"))
                        ) {
                            var e = uo(n, "video, audio");
                            e &&
                                (e.load(),
                                (e.onloadeddata = function () {
                                    Ke(o);
                                }));
                        }
                    });
            }
            function Ke(e) {
                g.scrollOverflow &&
                    (clearTimeout(D),
                    (D = setTimeout(function () {
                        p.createScrollBar(e);
                    }, 200)));
            }
            function $e(e) {
                var t = tt(e);
                Zn("video, audio", t).forEach(function (e) {
                    e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play();
                }),
                    Zn('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                        e.hasAttribute("data-autoplay") && qe(e),
                            (e.onload = function () {
                                e.hasAttribute("data-autoplay") && qe(e);
                            });
                    });
            }
            function qe(e) {
                e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
            }
            function et(e) {
                var t = tt(e);
                Zn("video, audio", t).forEach(function (e) {
                    e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause();
                }),
                    Zn('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                        /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                    });
            }
            function tt(e) {
                var t = Zn(kn, e);
                return t.length && (e = t[0]), e;
            }
            function nt(e) {
                var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                function o(e) {
                    var t,
                        n,
                        o,
                        r,
                        i,
                        l,
                        a = "",
                        s = 0;
                    for (e = e.replace(/[^A-Za-z0-9+/=]/g, ""); s < e.length; )
                        (t = (c.indexOf(e.charAt(s++)) << 2) | ((r = c.indexOf(e.charAt(s++))) >> 4)),
                            (n = ((15 & r) << 4) | ((i = c.indexOf(e.charAt(s++))) >> 2)),
                            (o = ((3 & i) << 6) | (l = c.indexOf(e.charAt(s++)))),
                            (a += String.fromCharCode(t)),
                            64 != i && (a += String.fromCharCode(n)),
                            64 != l && (a += String.fromCharCode(o));
                    return (a = (function (e) {
                        for (var t, n = "", o = 0, r = 0, i = 0; o < e.length; )
                            (r = e.charCodeAt(o)) < 128
                                ? ((n += String.fromCharCode(r)), o++)
                                : 191 < r && r < 224
                                ? ((i = e.charCodeAt(o + 1)), (n += String.fromCharCode(((31 & r) << 6) | (63 & i))), (o += 2))
                                : ((i = e.charCodeAt(o + 1)), (t = e.charCodeAt(o + 2)), (n += String.fromCharCode(((15 & r) << 12) | ((63 & i) << 6) | (63 & t))), (o += 3));
                        return n;
                    })(a));
                }
                function r(e) {
                    return e.slice(3).slice(0, -3);
                }
                return (function (e) {
                    var t = e.split("_");
                    if (1 < t.length) {
                        var n = t[1];
                        return e.replace(r(t[1]), "").split("_")[0] + "_" + o(n.slice(3).slice(0, -3));
                    }
                    return r(e);
                })(o(e));
            }
            function ot(f) {
                var d = void 0 !== X[f] && X[f].length,
                    e = [],
                    v = !1;
                return (
                    oo(X[f]) ? (e = X[f]) : e.push(X[f]),
                    e.forEach(function (e) {
                        var t = (function () {
                                if (ln.domain.length) {
                                    for (var e = ln.domain.replace(/^(www\.)/, "").split("."); 2 < e.length; ) e.shift();
                                    return e.join(".").replace(/(^\.*)|(\.*$)/g, "");
                                }
                                return "";
                            })(),
                            n = ["MTM0bG9jYWxob3N0MjM0", "MTM0MC4xMjM0", "MTM0anNoZWxsLm5ldDIzNA==", "UDdDQU5ZNlNN"],
                            o = nt(n[0]),
                            r = nt(n[1]),
                            i = nt(n[2]),
                            l = nt(n[3]),
                            a = [o, r, i].indexOf(t) < 0 && 0 !== t.length;
                        if (!d && a) return !1;
                        var s = d ? nt(e) : "",
                            c = 1 < (s = s.split("_")).length && -1 < s[1].indexOf(f, s[1].length - f.length),
                            u = s[0].indexOf(t, s[0].length - t.length) < 0;
                        v = v || (!(u && a && l != s[0]) && c) || !a;
                    }),
                    v
                );
            }
            function rt(e) {
                e.forEach(function (e) {
                    if (e.removedNodes[0] && e.removedNodes[0].isEqualNode(F)) {
                        clearTimeout(U);
                        var t = nt("bDIwc2V0VGltZW91dDAzbA==");
                        U = rn[t](it, 900);
                    }
                });
            }
            function it() {
                z = !1;
            }
            function lt(e) {
                if (
                    ((F = ln.createElement("div")),
                    (G = nt(
                        "MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="
                    )),
                    B || (G = G.replace("extensions/", "").replace("Extension", "")),
                    (F.innerHTML = G),
                    (F = F.firstChild),
                    "MutationObserver" in rn && new MutationObserver(rt).observe(ln.body, { childList: !0, subtree: !1 }),
                    (!B || (Ut(e) && S[e])) && (!ot(e) || !B))
                ) {
                    at();
                    var t = nt("MzQ1c2V0SW50ZXJ2YWwxMjM=");
                    rn[t](at, 2e3);
                }
            }
            function at() {
                F &&
                    (z || (Math.random() < 0.5 ? Lo(m, F) : lo(F, m), (z = !0)),
                    F.setAttribute(
                        "style",
                        nt(
                            "MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz"
                        ).replace(/;/g, nt("MTIzICFpbXBvcnRhbnQ7MzQ1"))
                    ));
            }
            function st() {
                var e = ut(),
                    t = e.section,
                    n = e.slide;
                t && (g.animateAnchor ? zt(t, n) : ve(t, n));
            }
            function ct() {
                if (!Q && !g.lockAnchors) {
                    var e = ut(),
                        t = e.section,
                        n = e.slide,
                        o = void 0 === b,
                        r = void 0 === b && void 0 === n && !a;
                    if (t && t.length) {
                        var i = !Ut("dragAndMove") || l;
                        ((t && t !== b && !o) || r || (!a && l != n && i)) && zt(t, n);
                    }
                }
            }
            function ut() {
                var e,
                    t,
                    n = rn.location.hash;
                if (n.length) {
                    var o = n.replace("#", "").split("/"),
                        r = -1 < n.indexOf("#/");
                    e = r ? "/" + o[1] : decodeURIComponent(o[0]);
                    var i = r ? o[2] : o[1];
                    i && i.length && (t = decodeURIComponent(i));
                }
                return { section: e, slide: t };
            }
            function ft(e) {
                clearTimeout(k);
                var t = ln.activeElement,
                    n = e.keyCode;
                9 === n
                    ? (function (e) {
                          var t,
                              n,
                              o,
                              r,
                              i,
                              l,
                              a,
                              s = e.shiftKey,
                              c = ln.activeElement,
                              u = ht(tt(Zn(bn)[0]));
                          function f(e) {
                              return go(e), u[0] ? u[0].focus() : null;
                          }
                          ((t = e), (n = ht(ln)), (o = n.indexOf(ln.activeElement)), (r = t.shiftKey ? o - 1 : o + 1), (i = n[r]), (l = Ge(uo(i, On))), (a = Xe(uo(i, Sn))), l || a) &&
                              (c ? null == uo(c, bn + "," + bn + " " + kn) && (c = f(e)) : f(e), ((!s && c == u[u.length - 1]) || (s && c == u[0])) && go(e));
                      })(e)
                    : bo(t, "textarea") ||
                      bo(t, "input") ||
                      bo(t, "select") ||
                      "true" === t.getAttribute("contentEditable") ||
                      "" === t.getAttribute("contentEditable") ||
                      !g.keyboardScrolling ||
                      !g.autoScrolling ||
                      (-1 < [40, 38, 32, 33, 34].indexOf(n) && go(e),
                      (c = e.ctrlKey),
                      (k = setTimeout(function () {
                          !(function (e) {
                              var t = e.shiftKey,
                                  n = ln.activeElement,
                                  o = bo(n, "video") || bo(n, "audio");
                              if (x || !([37, 39].indexOf(e.keyCode) < 0))
                                  switch (e.keyCode) {
                                      case 38:
                                      case 33:
                                          v.k.up && fe();
                                          break;
                                      case 32:
                                          if (t && v.k.up && !o) {
                                              fe();
                                              break;
                                          }
                                      case 40:
                                      case 34:
                                          v.k.down && ((32 === e.keyCode && o) || de());
                                          break;
                                      case 36:
                                          v.k.up && pe(1);
                                          break;
                                      case 35:
                                          v.k.down && pe(Zn(Sn).length);
                                          break;
                                      case 37:
                                          v.k.left && ge();
                                          break;
                                      case 39:
                                          v.k.right && he();
                                  }
                          })(e);
                      }, 150)));
            }
            function dt(e) {
                t && (c = e.ctrlKey);
            }
            function vt(e) {
                2 == e.which && ((te = e.pageY), w.addEventListener("mousemove", mt));
            }
            function pt(e) {
                2 == e.which && w.removeEventListener("mousemove", mt);
            }
            function ht(e) {
                return [].slice.call(Zn(N, e)).filter(function (e) {
                    return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent;
                });
            }
            function gt() {
                c = t = !1;
            }
            function mt(e) {
                g.autoScrolling && (x && (e.pageY < te && v.m.up ? fe() : e.pageY > te && v.m.down && de()), (te = e.pageY));
            }
            function St(e, t, n) {
                var o = uo(e, Sn),
                    r = {
                        slides: e,
                        destiny: t,
                        direction: n,
                        destinyPos: { left: t.offsetLeft },
                        slideIndex: eo(t),
                        section: o,
                        sectionIndex: eo(o, Sn),
                        anchorLink: o.getAttribute("data-anchor"),
                        slidesNav: Zn(Nn, o)[0],
                        slideAnchor: Pt(t),
                        prevSlide: Zn(kn, o)[0],
                        prevSlideIndex: eo(Zn(kn, o)[0]),
                        localIsResizing: E,
                    };
                (r.xMovement = kt(r.prevSlideIndex, r.slideIndex)),
                    (r.direction = r.direction ? r.direction : r.xMovement),
                    r.localIsResizing || (x = !1),
                    Qt("parallax", "applyHorizontal", r),
                    Qt("cards", "apply", r),
                    g.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && mo(g.onSlideLeave) && !1 === Ze("onSlideLeave", r)
                        ? (a = !1)
                        : (ro(t, pn),
                          io(ho(t), pn),
                          r.localIsResizing || (et(r.prevSlide), Je(t)),
                          bt(r),
                          Gn(o, pn) && !r.localIsResizing && Nt(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex),
                          S.continuousHorizontal && S.continuousHorizontal.apply(r),
                          Jt() ? wt(r) : yt(e, r, !0),
                          g.interlockedSlides && S.interlockedSlides && ((Ut("continuousHorizontal") && void 0 !== n && n !== r.xMovement) || S.interlockedSlides.apply(r)));
            }
            function bt(e) {
                !g.loopHorizontal && g.controlArrows && (wo(Zn(Dn, e.section), 0 !== e.slideIndex), wo(Zn(Yn, e.section), null != $n(e.destiny)));
            }
            function wt(e) {
                var t, n;
                S.continuousHorizontal && S.continuousHorizontal.afterSlideLoads(e),
                    (t = e.slidesNav),
                    (n = e.slideIndex),
                    g.slidesNavigation && null != t && (io(Zn(hn, t), pn), ro(Zn("a", Zn("li", t)[n]), pn)),
                    e.localIsResizing ||
                        (Qt("parallax", "afterSlideLoads"), Qt("scrollOverflowReset", "setPrevious", e.prevSlide), Qt("scrollOverflowReset", "reset"), mo(g.afterSlideLoad) && Ze("afterSlideLoad", e), (x = !0), $e(e.destiny)),
                    (a = !1),
                    Ut("interlockedSlides") && S.interlockedSlides.apply(e);
            }
            function yt(e, t, n) {
                var o = t.destinyPos;
                if (g.css3) {
                    var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                    (S.test.translate3dH[t.sectionIndex] = r),
                        Qn(Lt(Zn(In, e)), Xt(r)),
                        (M = setTimeout(function () {
                            n && wt(t);
                        }, g.scrollingSpeed));
                } else
                    (S.test.left[t.sectionIndex] = Math.round(o.left)),
                        qt(e, Math.round(o.left), g.scrollingSpeed, function () {
                            n && wt(t);
                        });
            }
            function Et() {
                clearTimeout(h),
                    (h = setTimeout(function () {
                        for (var e = 0; e < 4; e++) A = setTimeout(xt, 200 * e);
                    }, 200));
            }
            function xt() {
                if ((So(w, "onResize"), At(), i)) {
                    var e = ln.activeElement;
                    if (!bo(e, "textarea") && !bo(e, "input") && !bo(e, "select")) {
                        var t = Fn();
                        Math.abs(t - ne) > (20 * Math.max(ne, t)) / 100 && (me(!0), (ne = t));
                    }
                } else xe();
            }
            function At() {
                var e = g.responsive || g.responsiveWidth,
                    t = g.responsiveHeight,
                    n = e && rn.innerWidth < e,
                    o = t && rn.innerHeight < t;
                e && t ? be(n || o) : e ? be(n) : t && be(o);
            }
            function Lt(e) {
                var t = "all " + g.scrollingSpeed + "ms " + g.easingcss3;
                return io(e, un), Qn(e, { "-webkit-transition": t, transition: t });
            }
            function Mt(e) {
                return ro(e, un);
            }
            function Tt(e, t) {
                var n, o, r, i;
                (n = e),
                    Zn(g.menu).forEach(function (e) {
                        g.menu && null != e && (io(Zn(hn, e), pn), ro(Zn('[data-menuanchor="' + n + '"]', e), pn));
                    }),
                    (o = e),
                    (r = t),
                    (i = Zn(Ln)[0]),
                    g.navigation && null != i && "none" !== i.style.display && (io(Zn(hn, Zn(Ln)[0]), pn), ro(o ? Zn('a[href="#' + o + '"]', Zn(Ln)[0]) : Zn("a", Zn("li", Zn(Ln)[0])[r]), pn));
            }
            function Ot(e) {
                var t = eo(Zn(bn)[0], Sn),
                    n = eo(e, Sn);
                return t == n ? "none" : n < t ? "up" : "down";
            }
            function kt(e, t) {
                return e == t ? "none" : t < e ? "left" : "right";
            }
            function Ct(e) {
                if (!Gn(e, zn)) {
                    var t = ln.createElement("div");
                    (t.className = wn), (t.style.height = Ht(e) + "px"), ro(e, zn), so(e, t);
                }
            }
            function Ht(e) {
                var t = Me(e);
                if (g.paddingTop || g.paddingBottom) {
                    var n = e;
                    Gn(n, mn) || (n = uo(e, Sn)), (t -= parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]));
                }
                return t;
            }
            function Rt(e, t) {
                t ? Lt(w) : Mt(w),
                    clearTimeout(H),
                    Qn(w, Xt(e)),
                    (S.test.translate3d = e),
                    (H = setTimeout(function () {
                        io(w, un);
                    }, 10));
            }
            function It(e) {
                var t = Zn(Sn + '[data-anchor="' + e + '"]', w)[0];
                if (!t) {
                    var n = void 0 !== e ? e - 1 : 0;
                    t = Zn(Sn)[n];
                }
                return t;
            }
            function zt(e, t) {
                var n = It(e);
                if (null != n) {
                    var o,
                        r,
                        i,
                        l = (null == (i = Zn(On + '[data-anchor="' + (o = t) + '"]', (r = n))[0]) && ((o = void 0 !== o ? o : 0), (i = Zn(On, r)[o])), i);
                    Pt(n) === b || Gn(n, pn)
                        ? Bt(l)
                        : Ve(n, function () {
                              Bt(l);
                          });
                }
            }
            function Bt(e) {
                null != e && St(uo(e, Hn), e);
            }
            function Nt(e, t, n, o) {
                var r = "";
                g.anchors.length && !g.lockAnchors && (e ? (null != n && (r = n), null == t && (t = e), jt(r + "/" + (l = t))) : (null != e && (l = t), jt(n))), Wt();
            }
            function jt(e) {
                if (g.recordHistory) location.hash = e;
                else if (i || u) rn.history.replaceState(void 0, void 0, "#" + e);
                else {
                    var t = rn.location.href.split("#")[0];
                    rn.location.replace(t + "#" + e);
                }
            }
            function Pt(e) {
                if (!e) return null;
                var t = e.getAttribute("data-anchor"),
                    n = eo(e);
                return null == t && (t = n), t;
            }
            function Wt() {
                var e = Zn(bn)[0],
                    t = Zn(kn, e)[0],
                    n = Pt(e),
                    o = Pt(t),
                    r = String(n);
                t && (r = r + "-" + o), (r = r.replace("/", "-").replace("#", ""));
                var i = new RegExp("\\b\\s?" + vn + "-[^\\s]+\\b", "g");
                (m.className = m.className.replace(i, "")), ro(m, vn + "-" + r);
            }
            function Dt() {
                return rn.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" };
            }
            function Yt(e) {
                var t = [];
                return (
                    (t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY),
                    (t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX),
                    u && Be(e) && g.scrollBar && void 0 !== e.touches && ((t.y = e.touches[0].pageY), (t.x = e.touches[0].pageX)),
                    t
                );
            }
            function Vt(e, t) {
                ie(0, "internal"), void 0 !== t && (E = !0), St(uo(e, Hn), e), void 0 !== t && (E = !1), ie(Y.scrollingSpeed, "internal");
            }
            function Zt(e) {
                var t = Math.round(e);
                if (g.css3 && g.autoScrolling && !g.scrollBar) Rt("translate3d(0px, -" + t + "px, 0px)", !1);
                else if (g.autoScrolling && !g.scrollBar) Qn(w, { top: -t + "px" }), (S.test.top = -t + "px");
                else {
                    var n = Fe(t);
                    en(n.element, n.options);
                }
            }
            function Xt(e) {
                return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
            }
            function Gt(t, e, n) {
                "all" !== e
                    ? (v[n][e] = t)
                    : Object.keys(v[n]).forEach(function (e) {
                          v[n][e] = t;
                      });
            }
            function Ft(e) {
                return Qn(e, { "-webkit-transition": "none", transition: "none" });
            }
            function Ut(e) {
                return null !== g[e] && "[object Array]" === Object.prototype.toString.call(g[e]) ? g[e].length && S[e] : g[e] && S[e];
            }
            function Qt(e, t, n) {
                if (Ut(e)) return S[e][t](n);
            }
            function _t() {
                return Ut("dragAndMove") && S.dragAndMove.isAnimating;
            }
            function Jt() {
                return Ut("dragAndMove") && S.dragAndMove.isGrabbing;
            }
            function Kt(e, t, n) {
                (g[e] = t), "internal" !== n && (Y[e] = t);
            }
            function $t() {
                var e = g.licenseKey,
                    t = "font-size: 15px;background:yellow;";
                n
                    ? e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t), console.warn("%c https://alvarotrigo.com/fullPage/", t))
                    : (Vn("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), Vn("error", "https://github.com/alvarotrigo/fullPage.js#options.")),
                    Gn(s, dn)
                        ? Vn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!")
                        : (g.continuousVertical && (g.loopTop || g.loopBottom) && ((g.continuousVertical = !1), Vn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                          !g.scrollOverflow ||
                              (!g.scrollBar && g.autoScrolling) ||
                              Vn("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),
                          !g.continuousVertical ||
                              (!g.scrollBar && g.autoScrolling) ||
                              ((g.continuousVertical = !1), Vn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                          g.scrollOverflow && null == g.scrollOverflowHandler && ((g.scrollOverflow = !1), Vn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
                          g.anchors.forEach(function (t) {
                              var e = [].slice.call(Zn("[name]")).filter(function (e) {
                                      return e.getAttribute("name") && e.getAttribute("name").toLowerCase() == t.toLowerCase();
                                  }),
                                  n = [].slice.call(Zn("[id]")).filter(function (e) {
                                      return e.getAttribute("id") && e.getAttribute("id").toLowerCase() == t.toLowerCase();
                                  });
                              if (n.length || e.length) {
                                  Vn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                                  var o = n.length ? "id" : "name";
                                  (n.length || e.length) && Vn("error", '"' + t + '" is is being used by another element `' + o + "` property");
                              }
                          }));
            }
            function qt(t, n, o, r) {
                var e,
                    i = (e = t).self != rn && Gn(e, Cn) ? e.scrollLeft : !g.autoScrolling || g.scrollBar ? po() : e.offsetTop,
                    l = n - i,
                    a = 0;
                W = !0;
                var s = function () {
                    if (W) {
                        var e = n;
                        (a += 20), o && (e = rn.fp_easings[g.easing](a, i, l, o)), en(t, e), a < o ? setTimeout(s, 20) : void 0 !== r && r();
                    } else a < o && r();
                };
                s();
            }
            function en(e, t) {
                !g.autoScrolling || g.scrollBar || (e.self != rn && Gn(e, Cn)) ? (e.self != rn && Gn(e, Cn) ? (e.scrollLeft = t) : e.scrollTo(0, t)) : (e.style.top = t + "px");
            }
            function tn(e, t) {
                (this.anchor = e.getAttribute("data-anchor")), (this.item = e), (this.index = eo(e, t)), (this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1), (this.isFirst = !this.index);
            }
            function nn(e) {
                tn.call(this, e, Sn);
            }
            function on(e) {
                tn.call(this, e, On);
            }
            $t();
        }
    );
}),
    window.jQuery &&
        window.fullpage &&
        (function (t, n) {
            "use strict";
            t && n
                ? (t.fn.fullpage = function (e) {
                      e = t.extend({}, e, { $: t });
                      new n(this[0], e);
                  })
                : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!");
        })(window.jQuery, window.fullpage);
/*!
 * fullPage 3.0.8
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
!(function (e, t, n, o, r) {
    "function" == typeof define && define.amd
        ? define(function () {
              return (e.fullpage = o(t, n)), e.fullpage;
          })
        : "object" == typeof exports
        ? (module.exports = o(t, n))
        : (t.fullpage = o(t, n));
})(this, window, document, function (Rt, Nt) {
    "use strict";
    var zt = "fullpage-wrapper",
        jt = "." + zt,
        Pt = "fp-responsive",
        Dt = "fp-notransition",
        Vt = "fp-destroyed",
        Wt = "fp-enabled",
        Yt = "fp-viewing",
        Ft = "active",
        Ut = "." + Ft,
        Xt = "fp-completely",
        Kt = "fp-section",
        _t = "." + Kt,
        $t = _t + Ut,
        qt = "fp-tableCell",
        Qt = "." + qt,
        Gt = "fp-auto-height",
        Jt = "fp-normal-scroll",
        Zt = "fp-nav",
        en = "#" + Zt,
        tn = "fp-tooltip",
        nn = "fp-slide",
        on = "." + nn,
        rn = on + Ut,
        ln = "fp-slides",
        an = "." + ln,
        sn = "fp-slidesContainer",
        cn = "." + sn,
        un = "fp-table",
        fn = "fp-slidesNav",
        dn = "." + fn,
        vn = dn + " a",
        e = "fp-controlArrow",
        pn = "." + e,
        hn = "fp-prev",
        gn = pn + ".fp-prev",
        mn = pn + ".fp-next";
    function Sn(e, t) {
        Rt.console && Rt.console[e] && Rt.console[e]("fullPage: " + t);
    }
    function wn(e, t) {
        return (t = 1 < arguments.length ? t : Nt) ? t.querySelectorAll(e) : null;
    }
    function bn(e) {
        e = e || {};
        for (var t = 1, n = arguments.length; t < n; ++t) {
            var o = arguments[t];
            if (o) for (var r in o) o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? (e[r] = o[r]) : (e[r] = bn(e[r], o[r])));
        }
        return e;
    }
    function yn(e, t) {
        return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className));
    }
    function En() {
        return "innerHeight" in Rt ? Rt.innerHeight : Nt.documentElement.offsetHeight;
    }
    function Ln() {
        return Rt.innerWidth;
    }
    function xn(e, t) {
        var n;
        for (n in ((e = l(e)), t))
            if (t.hasOwnProperty(n) && null !== n)
                for (var o = 0; o < e.length; o++) {
                    e[o].style[n] = t[n];
                }
        return e;
    }
    function n(e, t, n) {
        for (var o = e[n]; o && !_n(o, t); ) o = o[n];
        return o;
    }
    function An(e, t) {
        return n(e, t, "previousElementSibling");
    }
    function Tn(e, t) {
        return n(e, t, "nextElementSibling");
    }
    function kn(e) {
        return e.previousElementSibling;
    }
    function On(e) {
        return e.nextElementSibling;
    }
    function Mn(e) {
        return e[e.length - 1];
    }
    function Cn(e, t) {
        e = i(e) ? e[0] : e;
        for (var n = null != t ? wn(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
            if (n[r] == e) return o;
            1 == n[r].nodeType && o++;
        }
        return -1;
    }
    function l(e) {
        return i(e) ? e : [e];
    }
    function Hn(e) {
        e = l(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "none";
        return e;
    }
    function In(e) {
        e = l(e);
        for (var t = 0; t < e.length; t++) e[t].style.display = "block";
        return e;
    }
    function i(e) {
        return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e);
    }
    function Bn(e, t) {
        e = l(e);
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.classList ? o.classList.add(t) : (o.className += " " + t);
        }
        return e;
    }
    function Rn(e, t) {
        e = l(e);
        for (var n = t.split(" "), o = 0; o < n.length; o++) {
            t = n[o];
            for (var r = 0; r < e.length; r++) {
                var i = e[r];
                i.classList ? i.classList.remove(t) : (i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " "));
            }
        }
        return e;
    }
    function Nn(e, t) {
        t.appendChild(e);
    }
    function o(e, t, n) {
        var o;
        t = t || Nt.createElement("div");
        for (var r = 0; r < e.length; r++) {
            var i = e[r];
            ((n && !r) || !n) && ((o = t.cloneNode(!0)), i.parentNode.insertBefore(o, i)), o.appendChild(i);
        }
        return e;
    }
    function zn(e, t) {
        o(e, t, !0);
    }
    function jn(e, t) {
        for ("string" == typeof t && (t = qn(t)), e.appendChild(t); e.firstChild !== t; ) t.appendChild(e.firstChild);
    }
    function Pn(e) {
        for (var t = Nt.createDocumentFragment(); e.firstChild; ) t.appendChild(e.firstChild);
        e.parentNode.replaceChild(t, e);
    }
    function Dn(e, t) {
        return e && 1 === e.nodeType ? (_n(e, t) ? e : Dn(e.parentNode, t)) : null;
    }
    function Vn(e, t) {
        r(e, e.nextSibling, t);
    }
    function Wn(e, t) {
        r(e, e, t);
    }
    function r(e, t, n) {
        i(n) || ("string" == typeof n && (n = qn(n)), (n = [n]));
        for (var o = 0; o < n.length; o++) e.parentNode.insertBefore(n[o], t);
    }
    function Yn() {
        var e = Nt.documentElement;
        return (Rt.pageYOffset || e.scrollTop) - (e.clientTop || 0);
    }
    function Fn(t) {
        return Array.prototype.filter.call(t.parentNode.children, function (e) {
            return e !== t;
        });
    }
    function Un(e) {
        e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
    }
    function Xn(e) {
        if ("function" == typeof e) return !0;
        var t = Object.prototype.toString(e);
        return "[object Function]" === t || "[object GeneratorFunction]" === t;
    }
    function Kn(e, t, n) {
        var o;
        (n = void 0 === n ? {} : n), "function" == typeof Rt.CustomEvent ? (o = new CustomEvent(t, { detail: n })) : (o = Nt.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(o);
    }
    function _n(e, t) {
        return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t);
    }
    function $n(e, t) {
        if ("boolean" == typeof t) for (var n = 0; n < e.length; n++) e[n].style.display = t ? "block" : "none";
        return e;
    }
    function qn(e) {
        var t = Nt.createElement("div");
        return (t.innerHTML = e.trim()), t.firstChild;
    }
    function Qn(e) {
        e = l(e);
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n);
        }
    }
    function a(e, t, n) {
        for (var o = e[n], r = []; o; ) (_n(o, t) || null == t) && r.push(o), (o = o[n]);
        return r;
    }
    function Gn(e, t) {
        return a(e, t, "nextElementSibling");
    }
    function Jn(e, t) {
        return a(e, t, "previousElementSibling");
    }
    return (
        Rt.NodeList &&
            !NodeList.prototype.forEach &&
            (NodeList.prototype.forEach = function (e, t) {
                t = t || Rt;
                for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this);
            }),
        (Rt.fp_utils = {
            $: wn,
            deepExtend: bn,
            hasClass: yn,
            getWindowHeight: En,
            css: xn,
            until: n,
            prevUntil: An,
            nextUntil: Tn,
            prev: kn,
            next: On,
            last: Mn,
            index: Cn,
            getList: l,
            hide: Hn,
            show: In,
            isArrayOrList: i,
            addClass: Bn,
            removeClass: Rn,
            appendTo: Nn,
            wrap: o,
            wrapAll: zn,
            wrapInner: jn,
            unwrap: Pn,
            closest: Dn,
            after: Vn,
            before: Wn,
            insertBefore: r,
            getScrollTop: Yn,
            siblings: Fn,
            preventDefault: Un,
            isFunction: Xn,
            trigger: Kn,
            matches: _n,
            toggle: $n,
            createElementFromHTML: qn,
            remove: Qn,
            filter: function (e, t) {
                Array.prototype.filter.call(e, t);
            },
            untilAll: a,
            nextAll: Gn,
            prevAll: Jn,
            showError: Sn,
        }),
        function (e, E) {
            var n = (E && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(E.licenseKey)) || -1 < Nt.domain.indexOf("alvarotrigo.com"),
                r = wn("html, body"),
                u = wn("html")[0],
                L = wn("body")[0];
            if (!yn(u, Wt)) {
                var h = {};
                E = bn(
                    {
                        menu: !1,
                        anchors: [],
                        lockAnchors: !1,
                        navigation: !1,
                        navigationPosition: "right",
                        navigationTooltips: [],
                        showActiveTooltip: !1,
                        slidesNavigation: !1,
                        slidesNavPosition: "bottom",
                        scrollBar: !1,
                        hybrid: !1,
                        css3: !0,
                        scrollingSpeed: 700,
                        autoScrolling: !0,
                        fitToSection: !0,
                        fitToSectionDelay: 1e3,
                        easing: "easeInOutCubic",
                        easingcss3: "ease",
                        loopBottom: !1,
                        loopTop: !1,
                        loopHorizontal: !0,
                        continuousVertical: !1,
                        continuousHorizontal: !1,
                        scrollHorizontally: !1,
                        interlockedSlides: !1,
                        dragAndMove: !1,
                        offsetSections: !1,
                        resetSliders: !1,
                        fadingEffect: !1,
                        normalScrollElements: null,
                        scrollOverflow: !1,
                        scrollOverflowReset: !1,
                        scrollOverflowHandler: Rt.fp_scrolloverflow ? Rt.fp_scrolloverflow.iscrollHandler : null,
                        scrollOverflowOptions: null,
                        touchSensitivity: 5,
                        touchWrapper: "string" == typeof e ? wn(e)[0] : e,
                        bigSectionsDestination: null,
                        keyboardScrolling: !0,
                        animateAnchor: !0,
                        recordHistory: !0,
                        controlArrows: !0,
                        controlArrowColor: "#fff",
                        verticalCentered: !0,
                        sectionsColor: [],
                        paddingTop: 0,
                        paddingBottom: 0,
                        fixedElements: null,
                        responsive: 0,
                        responsiveWidth: 0,
                        responsiveHeight: 0,
                        responsiveSlides: !1,
                        parallax: !1,
                        parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
                        cards: !1,
                        cardsOptions: { perspective: 100, fadeContent: !0, fadeBackground: !0 },
                        sectionSelector: ".section",
                        slideSelector: ".slide",
                        v2compatible: !1,
                        afterLoad: null,
                        onLeave: null,
                        afterRender: null,
                        afterResize: null,
                        afterReBuild: null,
                        afterSlideLoad: null,
                        onSlideLeave: null,
                        afterResponsive: null,
                        lazyLoading: !0,
                    },
                    E
                );
                var x,
                    i,
                    c,
                    f,
                    a = !1,
                    o = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                    l = "ontouchstart" in Rt || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                    d = "string" == typeof e ? wn(e)[0] : e,
                    A = En(),
                    s = Ln(),
                    g = !1,
                    t = !0,
                    T = !0,
                    v = [],
                    p = { m: { up: !0, down: !0, left: !0, right: !0 } };
                p.k = bn({}, p.m);
                var m,
                    S,
                    w,
                    b,
                    y,
                    k,
                    O,
                    M,
                    C,
                    H = Rt.PointerEvent ? { down: "pointerdown", move: "pointermove" } : { down: "MSPointerDown", move: "MSPointerMove" },
                    I = { touchmove: "ontouchmove" in Rt ? "touchmove" : H.move, touchstart: "ontouchstart" in Rt ? "touchstart" : H.down },
                    B = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
                    R = !1;
                try {
                    var N = Object.defineProperty({}, "passive", {
                        get: function () {
                            R = !0;
                        },
                    });
                    Rt.addEventListener("testPassive", null, N), Rt.removeEventListener("testPassive", null, N);
                } catch (e) {}
                var z,
                    j,
                    P = bn({}, E),
                    D = !1,
                    V = !0,
                    W = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards"];
                Ot(),
                    (Rt.fp_easings = bn(Rt.fp_easings, {
                        easeInOutCubic: function (e, t, n, o) {
                            return (e /= o / 2) < 1 ? (n / 2) * e * e * e + t : (n / 2) * ((e -= 2) * e * e + 2) + t;
                        },
                    })),
                    d &&
                        ((h.version = "3.0.8"),
                        (h.setAutoScrolling = J),
                        (h.setRecordHistory = Z),
                        (h.setScrollingSpeed = ee),
                        (h.setFitToSection = te),
                        (h.setLockAnchors = function (e) {
                            E.lockAnchors = e;
                        }),
                        (h.setMouseWheelScrolling = ne),
                        (h.setAllowScrolling = oe),
                        (h.setKeyboardScrolling = ie),
                        (h.moveSectionUp = le),
                        (h.moveSectionDown = ae),
                        (h.silentMoveTo = se),
                        (h.moveTo = ce),
                        (h.moveSlideRight = ue),
                        (h.moveSlideLeft = fe),
                        (h.fitToSection = Le),
                        (h.reBuild = de),
                        (h.setResponsive = pe),
                        (h.getFullpageData = function () {
                            return E;
                        }),
                        (h.destroy = function (e) {
                            J(!1, "internal"),
                                oe(!0),
                                re(!1),
                                ie(!1),
                                Bn(d, Vt),
                                [y, b, S, k, O, C, w].forEach(function (e) {
                                    clearTimeout(e);
                                }),
                                Rt.removeEventListener("scroll", Ee),
                                Rt.removeEventListener("hashchange", $e),
                                Rt.removeEventListener("resize", it),
                                Nt.removeEventListener("keydown", Qe),
                                Nt.removeEventListener("keyup", Ge),
                                ["click", "touchstart"].forEach(function (e) {
                                    Nt.removeEventListener(e, he);
                                }),
                                ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach(function (e) {
                                    Nt.removeEventListener(e, me, !0);
                                }),
                                e &&
                                    (xt(0),
                                    wn("img[data-src], source[data-src], audio[data-src], iframe[data-src]", d).forEach(function (e) {
                                        De(e, "src");
                                    }),
                                    wn("img[data-srcset]").forEach(function (e) {
                                        De(e, "srcset");
                                    }),
                                    Qn(wn(en + ", " + dn + ", " + pn)),
                                    xn(wn(_t), { height: "", "background-color": "", padding: "" }),
                                    xn(wn(on), { width: "" }),
                                    xn(d, { height: "", position: "", "-ms-touch-action": "", "touch-action": "" }),
                                    xn(r, { overflow: "", height: "" }),
                                    Rn(u, Wt),
                                    Rn(L, Pt),
                                    L.className.split(/\s+/).forEach(function (e) {
                                        0 === e.indexOf(Yt) && Rn(L, e);
                                    }),
                                    wn(_t + ", " + on).forEach(function (e) {
                                        E.scrollOverflowHandler && E.scrollOverflow && E.scrollOverflowHandler.remove(e), Rn(e, un + " " + Ft + " " + Xt);
                                        var t = e.getAttribute("data-fp-styles");
                                        t && e.setAttribute("style", e.getAttribute("data-fp-styles")), yn(e, Kt) && !D && e.removeAttribute("data-anchor");
                                    }),
                                    ct(d),
                                    [Qt, cn, an].forEach(function (e) {
                                        wn(e, d).forEach(function (e) {
                                            Pn(e);
                                        });
                                    }),
                                    xn(d, { "-webkit-transition": "none", transition: "none" }),
                                    Rt.scrollTo(0, 0),
                                    [Kt, nn, sn].forEach(function (e) {
                                        Rn(wn("." + e), e);
                                    }));
                        }),
                        (h.getActiveSection = function () {
                            return new It(wn($t)[0]);
                        }),
                        (h.getActiveSlide = function () {
                            return ze(wn(rn, wn($t)[0])[0]);
                        }),
                        (h.test = {
                            top: "0px",
                            translate3d: "translate3d(0px, 0px, 0px)",
                            translate3dH: (function () {
                                for (var e = [], t = 0; t < wn(E.sectionSelector, d).length; t++) e.push("translate3d(0px, 0px, 0px)");
                                return e;
                            })(),
                            left: (function () {
                                for (var e = [], t = 0; t < wn(E.sectionSelector, d).length; t++) e.push(0);
                                return e;
                            })(),
                            options: E,
                            setAutoScrolling: J,
                        }),
                        (h.shared = { afterRenderActions: ye, isNormalScrollElement: !1 }),
                        (Rt.fullpage_api = h),
                        E.$ &&
                            Object.keys(h).forEach(function (e) {
                                E.$.fn.fullpage[e] = h[e];
                            }),
                        E.css3 &&
                            (E.css3 = (function () {
                                var e,
                                    t = Nt.createElement("p"),
                                    n = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
                                for (var o in ((t.style.display = "block"), Nt.body.insertBefore(t, null), n)) void 0 !== t.style[o] && ((t.style[o] = "translate3d(1px,1px,1px)"), (e = Rt.getComputedStyle(t).getPropertyValue(n[o])));
                                return Nt.body.removeChild(t), void 0 !== e && 0 < e.length && "none" !== e;
                            })()),
                        (E.scrollBar = E.scrollBar || E.hybrid),
                        (function () {
                            if (!E.anchors.length) {
                                var e = "[data-anchor]",
                                    t = wn(E.sectionSelector.split(",").join(e + ",") + e, d);
                                t.length &&
                                    ((D = !0),
                                    t.forEach(function (e) {
                                        E.anchors.push(e.getAttribute("data-anchor").toString());
                                    }));
                            }
                            if (!E.navigationTooltips.length) {
                                var n = "[data-tooltip]",
                                    o = wn(E.sectionSelector.split(",").join(n + ",") + n, d);
                                o.length &&
                                    o.forEach(function (e) {
                                        E.navigationTooltips.push(e.getAttribute("data-tooltip").toString());
                                    });
                            }
                        })(),
                        (function () {
                            xn(d, { height: "100%", position: "relative" }), Bn(d, zt), Bn(u, Wt), (A = En()), Rn(d, Vt), Bn(wn(E.sectionSelector, d), Kt), Bn(wn(E.slideSelector, d), nn);
                            for (var e = wn(_t), t = 0; t < e.length; t++) {
                                var n = t,
                                    o = e[t],
                                    r = wn(on, o),
                                    i = r.length;
                                o.setAttribute("data-fp-styles", o.getAttribute("style")),
                                    (s = o),
                                    (c = n) || null != wn($t)[0] || Bn(s, Ft),
                                    (f = wn($t)[0]),
                                    xn(s, { height: A + "px" }),
                                    E.paddingTop && xn(s, { "padding-top": E.paddingTop }),
                                    E.paddingBottom && xn(s, { "padding-bottom": E.paddingBottom }),
                                    void 0 !== E.sectionsColor[c] && xn(s, { "background-color": E.sectionsColor[c] }),
                                    void 0 !== E.anchors[c] && s.setAttribute("data-anchor", E.anchors[c]),
                                    (l = o),
                                    (a = n),
                                    void 0 !== E.anchors[a] && yn(l, Ft) && ut(E.anchors[a], a),
                                    E.menu &&
                                        E.css3 &&
                                        null != Dn(wn(E.menu)[0], jt) &&
                                        wn(E.menu).forEach(function (e) {
                                            L.appendChild(e);
                                        }),
                                    0 < i ? we(o, r, i) : E.verticalCentered && dt(o);
                            }
                            var l, a, s, c;
                            E.fixedElements &&
                                E.css3 &&
                                wn(E.fixedElements).forEach(function (e) {
                                    L.appendChild(e);
                                }),
                                E.navigation &&
                                    (function () {
                                        var e = Nt.createElement("div");
                                        e.setAttribute("id", Zt);
                                        var t = Nt.createElement("ul");
                                        e.appendChild(t), Nn(e, L);
                                        var n = wn(en)[0];
                                        Bn(n, "fp-" + E.navigationPosition), E.showActiveTooltip && Bn(n, "fp-show-active");
                                        for (var o = "", r = 0; r < wn(_t).length; r++) {
                                            var i = "";
                                            E.anchors.length && (i = E.anchors[r]), (o += '<li><a href="#' + i + '"><span class="fp-sr-only">' + be(r, "Section") + "</span><span></span></a>");
                                            var l = E.navigationTooltips[r];
                                            void 0 !== l && "" !== l && (o += '<div class="' + tn + " fp-" + E.navigationPosition + '">' + l + "</div>"), (o += "</li>");
                                        }
                                        (wn("ul", n)[0].innerHTML = o), xn(wn(en), { "margin-top": "-" + wn(en)[0].offsetHeight / 2 + "px" }), Bn(wn("a", wn("li", wn(en)[0])[Cn(wn($t)[0], _t)]), Ft);
                                    })(),
                                wn('iframe[src*="youtube.com/embed/"]', d).forEach(function (e) {
                                    var t, n, o;
                                    (n = "enablejsapi=1"), (o = (t = e).getAttribute("src")), t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n);
                                }),
                                E.scrollOverflow && (m = E.scrollOverflowHandler.init(E));
                        })(),
                        oe(!0),
                        re(!0),
                        J(E.autoScrolling, "internal"),
                        at(),
                        yt(),
                        "complete" === Nt.readyState && _e(),
                        Rt.addEventListener("load", _e),
                        E.scrollOverflow || ye(),
                        (function () {
                            for (var e = 1; e < 4; e++) C = setTimeout(Se, 350 * e);
                        })(),
                        Rt.addEventListener("scroll", Ee),
                        Rt.addEventListener("hashchange", $e),
                        Rt.addEventListener("blur", tt),
                        Rt.addEventListener("resize", it),
                        Nt.addEventListener("keydown", Qe),
                        Nt.addEventListener("keyup", Ge),
                        ["click", "touchstart"].forEach(function (e) {
                            Nt.addEventListener(e, he);
                        }),
                        E.normalScrollElements &&
                            (["mouseenter", "touchstart"].forEach(function (e) {
                                ge(e, !1);
                            }),
                            ["mouseleave", "touchend"].forEach(function (e) {
                                ge(e, !0);
                            })));
                var Y = !1,
                    F = 0,
                    U = 0,
                    X = 0,
                    K = 0,
                    _ = 0,
                    $ = new Date().getTime(),
                    q = 0,
                    Q = 0,
                    G = A;
                return h;
            }
            function J(e, t) {
                e || xt(0), kt("autoScrolling", e, t);
                var n = wn($t)[0];
                if (E.autoScrolling && !E.scrollBar) xn(r, { overflow: "hidden", height: "100%" }), Z(P.recordHistory, "internal"), xn(d, { "-ms-touch-action": "none", "touch-action": "none" }), null != n && xt(n.offsetTop);
                else if ((xn(r, { overflow: "visible", height: "initial" }), Z(!!E.autoScrolling && P.recordHistory, "internal"), xn(d, { "-ms-touch-action": "", "touch-action": "" }), null != n)) {
                    var o = je(n.offsetTop);
                    o.element.scrollTo(0, o.options);
                }
            }
            function Z(e, t) {
                kt("recordHistory", e, t);
            }
            function ee(e, t) {
                kt("scrollingSpeed", e, t);
            }
            function te(e, t) {
                kt("fitToSection", e, t);
            }
            function ne(e) {
                e
                    ? ((function () {
                          var e,
                              t = "";
                          Rt.addEventListener ? (e = "addEventListener") : ((e = "attachEvent"), (t = "on"));
                          var n = "onwheel" in Nt.createElement("div") ? "wheel" : void 0 !== Nt.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                              o = !!R && { passive: !1 };
                          "DOMMouseScroll" == n ? Nt[e](t + "MozMousePixelScroll", Ce, o) : Nt[e](t + n, Ce, o);
                      })(),
                      d.addEventListener("mousedown", Je),
                      d.addEventListener("mouseup", Ze))
                    : (Nt.addEventListener ? (Nt.removeEventListener("mousewheel", Ce, !1), Nt.removeEventListener("wheel", Ce, !1), Nt.removeEventListener("MozMousePixelScroll", Ce, !1)) : Nt.detachEvent("onmousewheel", Ce),
                      d.removeEventListener("mousedown", Je),
                      d.removeEventListener("mouseup", Ze));
            }
            function oe(t, e) {
                void 0 !== e
                    ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                          Tt(t, e, "m");
                      })
                    : Tt(t, "all", "m");
            }
            function re(e) {
                e
                    ? (ne(!0),
                      (function () {
                          if (o || l) {
                              E.autoScrolling && (L.removeEventListener(I.touchmove, Ae, { passive: !1 }), L.addEventListener(I.touchmove, Ae, { passive: !1 }));
                              var e = E.touchWrapper;
                              e.removeEventListener(I.touchstart, Oe), e.removeEventListener(I.touchmove, Te, { passive: !1 }), e.addEventListener(I.touchstart, Oe), e.addEventListener(I.touchmove, Te, { passive: !1 });
                          }
                      })())
                    : (ne(!1),
                      (function () {
                          if (o || l) {
                              E.autoScrolling && (L.removeEventListener(I.touchmove, Te, { passive: !1 }), L.removeEventListener(I.touchmove, Ae, { passive: !1 }));
                              var e = E.touchWrapper;
                              e.removeEventListener(I.touchstart, Oe), e.removeEventListener(I.touchmove, Te, { passive: !1 });
                          }
                      })());
            }
            function ie(t, e) {
                void 0 !== e
                    ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                          Tt(t, e, "k");
                      })
                    : (Tt(t, "all", "k"), (E.keyboardScrolling = t));
            }
            function le() {
                var e = An(wn($t)[0], _t);
                e || (!E.loopTop && !E.continuousVertical) || (e = Mn(wn(_t))), null != e && Be(e, null, !0);
            }
            function ae() {
                var e = Tn(wn($t)[0], _t);
                e || (!E.loopBottom && !E.continuousVertical) || (e = wn(_t)[0]), null != e && Be(e, null, !1);
            }
            function se(e, t) {
                ee(0, "internal"), ce(e, t), ee(P.scrollingSpeed, "internal");
            }
            function ce(e, t) {
                var n = ht(e);
                void 0 !== t ? gt(e, t) : null != n && Be(n);
            }
            function ue(e) {
                He("right", e);
            }
            function fe(e) {
                He("left", e);
            }
            function de(e) {
                if (!yn(d, Vt)) {
                    (g = !0), (A = En()), (s = Ln());
                    for (var t = wn(_t), n = 0; n < t.length; ++n) {
                        var o = t[n],
                            r = wn(an, o)[0],
                            i = wn(on, o);
                        E.verticalCentered && xn(wn(Qt, o), { height: vt(o) + "px" }), xn(o, { height: A + "px" }), 1 < i.length && ot(r, wn(rn, r)[0]);
                    }
                    E.scrollOverflow && m.createScrollBarForAll();
                    var l = Cn(wn($t)[0], _t);
                    l && se(l + 1), (g = !1), Xn(E.afterResize) && e && E.afterResize.call(d, Rt.innerWidth, Rt.innerHeight), Xn(E.afterReBuild) && !e && E.afterReBuild.call(d);
                }
            }
            function ve() {
                return yn(L, Pt);
            }
            function pe(e) {
                var t = ve();
                e
                    ? t || (J(!1, "internal"), te(!1, "internal"), Hn(wn(en)), Bn(L, Pt), Xn(E.afterResponsive) && E.afterResponsive.call(d, e), E.scrollOverflow && m.createScrollBarForAll())
                    : t && (J(P.autoScrolling, "internal"), te(P.autoScrolling, "internal"), In(wn(en)), Rn(L, Pt), Xn(E.afterResponsive) && E.afterResponsive.call(d, e));
            }
            function he(e) {
                var t = e.target;
                t && Dn(t, en + " a")
                    ? function (e) {
                          Un(e);
                          var t = Cn(Dn(this, en + " li"));
                          Be(wn(_t)[t]);
                      }.call(t, e)
                    : _n(t, ".fp-tooltip")
                    ? function () {
                          Kn(kn(this), "click");
                      }.call(t)
                    : _n(t, pn)
                    ? function () {
                          var e = Dn(this, _t);
                          yn(this, hn) ? p.m.left && fe(e) : p.m.right && ue(e);
                      }.call(t, e)
                    : _n(t, vn) || null != Dn(t, vn)
                    ? function (e) {
                          Un(e);
                          var t = wn(an, Dn(this, _t))[0],
                              n = wn(on, t)[Cn(Dn(this, "li"))];
                          ot(t, n);
                      }.call(t, e)
                    : Dn(t, E.menu + " [data-menuanchor]") &&
                      function (e) {
                          !wn(E.menu)[0] || (!E.lockAnchors && E.anchors.length) || (Un(e), ce(this.getAttribute("data-menuanchor")));
                      }.call(t, e);
            }
            function ge(e, t) {
                (Nt["fp_" + e] = t), Nt.addEventListener(e, me, !0);
            }
            function me(e) {
                var t = e.type,
                    o = !1,
                    r = E.scrollOverflow,
                    i = "mouseleave" === t ? e.toElement || e.relatedTarget : e.target;
                if (i == Nt || !i) return re(!0), void (r && E.scrollOverflowHandler.setIscroll(i, !0));
                "touchend" === t &&
                    ((V = !1),
                    setTimeout(function () {
                        V = !0;
                    }, 800)),
                    ("mouseenter" !== t || V) &&
                        (E.normalScrollElements.split(",").forEach(function (e) {
                            if (!o) {
                                var t = _n(i, e),
                                    n = Dn(i, e);
                                (t || n) && (h.shared.isNormalScrollElement || (re(!1), r && E.scrollOverflowHandler.setIscroll(i, !1)), (h.shared.isNormalScrollElement = !0), (o = !0));
                            }
                        }),
                        !o && h.shared.isNormalScrollElement && (re(!0), r && E.scrollOverflowHandler.setIscroll(i, !0), (h.shared.isNormalScrollElement = !1)));
            }
            function Se() {
                var e = En(),
                    t = Ln();
                (A === e && s === t) || ((A = e), (s = t), de(!0));
            }
            function we(e, t, n) {
                var o = 100 * n,
                    r = 100 / n,
                    i = Nt.createElement("div");
                (i.className = ln), zn(t, i);
                var l,
                    a,
                    s = Nt.createElement("div");
                (s.className = sn),
                    zn(t, s),
                    xn(wn(cn, e), { width: o + "%" }),
                    1 < n &&
                        (E.controlArrows &&
                            ((l = e),
                            (a = [qn('<div class="fp-controlArrow fp-prev"></div>'), qn('<div class="fp-controlArrow fp-next"></div>')]),
                            Vn(wn(an, l)[0], a),
                            "#fff" !== E.controlArrowColor &&
                                (xn(wn(mn, l), { "border-color": "transparent transparent transparent " + E.controlArrowColor }), xn(wn(gn, l), { "border-color": "transparent " + E.controlArrowColor + " transparent transparent" })),
                            E.loopHorizontal || Hn(wn(gn, l))),
                        E.slidesNavigation &&
                            (function (e, t) {
                                Nn(qn('<div class="' + fn + '"><ul></ul></div>'), e);
                                var n = wn(dn, e)[0];
                                Bn(n, "fp-" + E.slidesNavPosition);
                                for (var o = 0; o < t; o++) Nn(qn('<li><a href="#"><span class="fp-sr-only">' + be(o, "Slide") + "</span><span></span></a></li>"), wn("ul", n)[0]);
                                xn(n, { "margin-left": "-" + n.innerWidth / 2 + "px" }), Bn(wn("a", wn("li", n)[0]), Ft);
                            })(e, n)),
                    t.forEach(function (e) {
                        xn(e, { width: r + "%" }), E.verticalCentered && dt(e);
                    });
                var c = wn(rn, e)[0];
                null != c && (0 !== Cn(wn($t), _t) || (0 === Cn(wn($t), _t) && 0 !== Cn(c))) ? Lt(c, "internal") : Bn(t[0], Ft);
            }
            function be(e, t) {
                return E.navigationTooltips[e] || E.anchors[e] || t + " " + (e + 1);
            }
            function ye() {
                var e,
                    t,
                    n = wn($t)[0];
                Bn(n, Xt),
                    We(n),
                    Ve(),
                    Fe(n),
                    E.scrollOverflow && E.scrollOverflowHandler.afterLoad(),
                    (e = qe()),
                    (t = ht(e.section)),
                    (e.section && t && (void 0 === t || Cn(t) !== Cn(f))) || !Xn(E.afterLoad) || Re("afterLoad", { activeSection: n, element: n, direction: null, anchorLink: n.getAttribute("data-anchor"), sectionIndex: Cn(n, _t) }),
                    Xn(E.afterRender) && Re("afterRender");
            }
            function Ee() {
                var e, t, n, o, r, i;
                if (!E.autoScrolling || E.scrollBar) {
                    var l = Yn(),
                        a = ((i = F < (r = l) ? "down" : "up"), (q = F = r), i),
                        s = 0,
                        c = l + En() / 2,
                        u = L.offsetHeight - En() === l,
                        f = wn(_t);
                    if (u) s = f.length - 1;
                    else if (l) for (var d = 0; d < f.length; ++d) f[d].offsetTop <= c && (s = d);
                    else s = 0;
                    if (((t = a), (n = wn($t)[0].offsetTop), (o = n + En()), ("up" != t ? n <= Yn() : o >= Yn() + En()) && (yn(wn($t)[0], Xt) || (Bn(wn($t)[0], Xt), Rn(Fn(wn($t)[0]), Xt))), !yn((e = f[s]), Ft))) {
                        Y = !0;
                        var v,
                            p,
                            h = wn($t)[0],
                            g = Cn(h, _t) + 1,
                            m = ft(e),
                            S = e.getAttribute("data-anchor"),
                            w = Cn(e, _t) + 1,
                            b = wn(rn, e)[0],
                            y = { activeSection: h, sectionIndex: w - 1, anchorLink: S, element: e, leavingSection: g, direction: m };
                        b && ((p = b.getAttribute("data-anchor")), (v = Cn(b))),
                            T && (Bn(e, Ft), Rn(Fn(e), Ft), Xn(E.onLeave) && Re("onLeave", y), Xn(E.afterLoad) && Re("afterLoad", y), Xe(h), We(e), Fe(e), ut(S, w - 1), E.anchors.length && (x = S), St(v, p, S)),
                            clearTimeout(k),
                            (k = setTimeout(function () {
                                Y = !1;
                            }, 100));
                    }
                    E.fitToSection &&
                        (clearTimeout(O),
                        (O = setTimeout(function () {
                            E.fitToSection && wn($t)[0].offsetHeight <= A && Le();
                        }, E.fitToSectionDelay)));
                }
            }
            function Le() {
                T && ((g = !0), Be(wn($t)[0]), (g = !1));
            }
            function xe(e) {
                if (p.m[e]) {
                    var t = "down" === e ? ae : le;
                    if (E.scrollOverflow) {
                        var n = E.scrollOverflowHandler.scrollable(wn($t)[0]),
                            o = "down" === e ? "bottom" : "top";
                        if (null != n) {
                            if (!E.scrollOverflowHandler.isScrolled(o, n)) return !0;
                            t();
                        } else t();
                    } else t();
                }
            }
            function Ae(e) {
                E.autoScrolling && ke(e) && p.m.up && Un(e);
            }
            function Te(e) {
                var t = Dn(e.target, _t) || wn($t)[0];
                if (ke(e)) {
                    E.autoScrolling && Un(e);
                    var n = Et(e);
                    (K = n.y),
                        (_ = n.x),
                        wn(an, t).length && Math.abs(X - _) > Math.abs(U - K)
                            ? !a && Math.abs(X - _) > (Ln() / 100) * E.touchSensitivity && (_ < X ? p.m.right && ue(t) : p.m.left && fe(t))
                            : E.autoScrolling && T && Math.abs(U - K) > (Rt.innerHeight / 100) * E.touchSensitivity && (K < U ? xe("down") : U < K && xe("up"));
                }
            }
            function ke(e) {
                return void 0 === e.pointerType || "mouse" != e.pointerType;
            }
            function Oe(e) {
                if ((E.fitToSection && (z = !1), ke(e))) {
                    var t = Et(e);
                    (U = t.y), (X = t.x);
                }
            }
            function Me(e, t) {
                for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++) n += o[r];
                return Math.ceil(n / t);
            }
            function Ce(e) {
                var t = new Date().getTime(),
                    n = yn(wn(".fp-completely")[0], Jt);
                if (!p.m.down && !p.m.up) return Un(e), !1;
                if (E.autoScrolling && !c && !n) {
                    var o = (e = e || Rt.event).wheelDelta || -e.deltaY || -e.detail,
                        r = Math.max(-1, Math.min(1, o)),
                        i = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
                        l = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !i;
                    149 < v.length && v.shift(), v.push(Math.abs(o)), E.scrollBar && Un(e);
                    var a = t - $;
                    if ((($ = t), 200 < a && (v = []), T)) {
                        var s = Me(v, 10);
                        Me(v, 70) <= s && l && xe(r < 0 ? "down" : "up");
                    }
                    return !1;
                }
                E.fitToSection && (z = !1);
            }
            function He(e, t) {
                var n = null == t ? wn($t)[0] : t,
                    o = wn(an, n)[0];
                if (!(null == o || a || wn(on, o).length < 2)) {
                    var r = wn(rn, o)[0],
                        i = null;
                    if (null == (i = "left" === e ? An(r, on) : Tn(r, on))) {
                        if (!E.loopHorizontal) return;
                        var l = Fn(r);
                        i = "left" === e ? l[l.length - 1] : l[0];
                    }
                    (a = !h.test.isTesting), ot(o, i, e);
                }
            }
            function Ie() {
                for (var e = wn(rn), t = 0; t < e.length; t++) Lt(e[t], "internal");
            }
            function Be(e, t, n) {
                if (null != e) {
                    var o,
                        r,
                        i,
                        l,
                        a,
                        s,
                        c,
                        u,
                        f,
                        d = {
                            element: e,
                            callback: t,
                            isMovementUp: n,
                            dtop:
                                ((r = (o = e).offsetHeight),
                                (i = o.offsetTop),
                                (a = q < (l = i)),
                                (s = l - A + r),
                                (c = E.bigSectionsDestination),
                                A < r ? ((a || c) && "bottom" !== c) || (l = s) : (a || (g && null == On(o))) && (l = s),
                                (q = l)),
                            yMovement: ft(e),
                            anchorLink: e.getAttribute("data-anchor"),
                            sectionIndex: Cn(e, _t),
                            activeSlide: wn(rn, e)[0],
                            activeSection: wn($t)[0],
                            leavingSection: Cn(wn($t), _t) + 1,
                            localIsResizing: g,
                        };
                    if (!((d.activeSection == e && !g) || (E.scrollBar && Yn() === d.dtop && !yn(e, Gt)))) {
                        if ((null != d.activeSlide && ((u = d.activeSlide.getAttribute("data-anchor")), (f = Cn(d.activeSlide))), !d.localIsResizing)) {
                            var v = d.yMovement;
                            if ((void 0 !== n && (v = n ? "up" : "down"), (d.direction = v), Xn(E.onLeave) && !1 === Re("onLeave", d))) return;
                        }
                        E.autoScrolling &&
                            E.continuousVertical &&
                            void 0 !== d.isMovementUp &&
                            ((!d.isMovementUp && "up" == d.yMovement) || (d.isMovementUp && "down" == d.yMovement)) &&
                            ((p = d).isMovementUp ? Wn(wn($t)[0], Gn(p.activeSection, _t)) : Vn(wn($t)[0], Jn(p.activeSection, _t).reverse()),
                            xt(wn($t)[0].offsetTop),
                            Ie(),
                            (p.wrapAroundElements = p.activeSection),
                            (p.dtop = p.element.offsetTop),
                            (p.yMovement = ft(p.element)),
                            (d = p)),
                            d.localIsResizing || Xe(d.activeSection),
                            E.scrollOverflow && E.scrollOverflowHandler.beforeLeave(),
                            Bn(e, Ft),
                            Rn(Fn(e), Ft),
                            We(e),
                            E.scrollOverflow && E.scrollOverflowHandler.onLeave(),
                            (T = h.test.isTesting),
                            St(f, u, d.anchorLink, d.sectionIndex),
                            (function (e) {
                                if (E.css3 && E.autoScrolling && !E.scrollBar) {
                                    var t = "translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)";
                                    pt(t, !0),
                                        E.scrollingSpeed
                                            ? (clearTimeout(b),
                                              (b = setTimeout(function () {
                                                  Pe(e);
                                              }, E.scrollingSpeed)))
                                            : Pe(e);
                                } else {
                                    var n = je(e.dtop);
                                    (h.test.top = -e.dtop + "px"),
                                        Mt(n.element, n.options, E.scrollingSpeed, function () {
                                            E.scrollBar
                                                ? setTimeout(function () {
                                                      Pe(e);
                                                  }, 30)
                                                : Pe(e);
                                        });
                                }
                            })(d),
                            (x = d.anchorLink),
                            ut(d.anchorLink, d.sectionIndex);
                    }
                }
                var p;
            }
            function Re(e, t) {
                var n,
                    o,
                    r,
                    i,
                    l =
                        ((o = e),
                        (r = t),
                        (i = E.v2compatible
                            ? {
                                  afterRender: function () {
                                      return [d];
                                  },
                                  onLeave: function () {
                                      return [r.activeSection, r.leavingSection, r.sectionIndex + 1, r.direction];
                                  },
                                  afterLoad: function () {
                                      return [r.element, r.anchorLink, r.sectionIndex + 1];
                                  },
                                  afterSlideLoad: function () {
                                      return [r.destiny, r.anchorLink, r.sectionIndex + 1, r.slideAnchor, r.slideIndex];
                                  },
                                  onSlideLeave: function () {
                                      return [r.prevSlide, r.anchorLink, r.sectionIndex + 1, r.prevSlideIndex, r.direction, r.slideIndex];
                                  },
                              }
                            : {
                                  afterRender: function () {
                                      return { section: Ne(wn($t)[0]), slide: ze(wn(rn, wn($t)[0])[0]) };
                                  },
                                  onLeave: function () {
                                      return { origin: Ne(r.activeSection), destination: Ne(r.element), direction: r.direction };
                                  },
                                  afterLoad: function () {
                                      return i.onLeave();
                                  },
                                  afterSlideLoad: function () {
                                      return { section: Ne(r.section), origin: ze(r.prevSlide), destination: ze(r.destiny), direction: r.direction };
                                  },
                                  onSlideLeave: function () {
                                      return i.afterSlideLoad();
                                  },
                              })[o]());
                if (E.v2compatible) {
                    if (!1 === E[e].apply(l[0], l.slice(1))) return !1;
                } else if (
                    (Kn(d, e, l),
                    !1 ===
                        E[e].apply(
                            l[Object.keys(l)[0]],
                            ((n = l),
                            Object.keys(n).map(function (e) {
                                return n[e];
                            }))
                        ))
                )
                    return !1;
                return !0;
            }
            function Ne(e) {
                return e ? new It(e) : null;
            }
            function ze(e) {
                return e ? new Bt(e) : null;
            }
            function je(e) {
                var t = {};
                return E.autoScrolling && !E.scrollBar ? ((t.options = -e), (t.element = wn(jt)[0])) : ((t.options = e), (t.element = Rt)), t;
            }
            function Pe(e) {
                var t;
                null != (t = e).wrapAroundElements && (t.isMovementUp ? Wn(wn(_t)[0], t.wrapAroundElements) : Vn(wn(_t)[wn(_t).length - 1], t.wrapAroundElements), xt(wn($t)[0].offsetTop), Ie()),
                    Xn(E.afterLoad) && !e.localIsResizing && Re("afterLoad", e),
                    E.scrollOverflow && E.scrollOverflowHandler.afterLoad(),
                    e.localIsResizing || Fe(e.element),
                    Bn(e.element, Xt),
                    Rn(Fn(e.element), Xt),
                    Ve(),
                    (T = !0),
                    Xn(e.callback) && e.callback();
            }
            function De(e, t) {
                e.setAttribute(t, e.getAttribute("data-" + t)), e.removeAttribute("data-" + t);
            }
            function Ve() {
                var e = wn(".fp-auto-height")[0] || (ve() && wn(".fp-auto-height-responsive")[0]);
                E.lazyLoading &&
                    e &&
                    wn(_t + ":not(" + Ut + ")").forEach(function (e) {
                        var t, n, o;
                        (t = e.getBoundingClientRect()), (n = t.top), (o = t.bottom), ((n + 2 < A && 0 < n) || (2 < o && o < A)) && We(e);
                    });
            }
            function We(o) {
                E.lazyLoading &&
                    wn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", Ke(o)).forEach(function (n) {
                        if (
                            (["src", "srcset"].forEach(function (e) {
                                var t = n.getAttribute("data-" + e);
                                null != t &&
                                    t &&
                                    (De(n, e),
                                    n.addEventListener("load", function () {
                                        Ye(o);
                                    }));
                            }),
                            _n(n, "source"))
                        ) {
                            var e = Dn(n, "video, audio");
                            e &&
                                (e.load(),
                                (e.onloadeddata = function () {
                                    Ye(o);
                                }));
                        }
                    });
            }
            function Ye(e) {
                E.scrollOverflow &&
                    (clearTimeout(j),
                    (j = setTimeout(function () {
                        m.createScrollBar(e);
                    }, 200)));
            }
            function Fe(e) {
                var t = Ke(e);
                wn("video, audio", t).forEach(function (e) {
                    e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play();
                }),
                    wn('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                        e.hasAttribute("data-autoplay") && Ue(e),
                            (e.onload = function () {
                                e.hasAttribute("data-autoplay") && Ue(e);
                            });
                    });
            }
            function Ue(e) {
                e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
            }
            function Xe(e) {
                var t = Ke(e);
                wn("video, audio", t).forEach(function (e) {
                    e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause();
                }),
                    wn('iframe[src*="youtube.com/embed/"]', t).forEach(function (e) {
                        /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
                    });
            }
            function Ke(e) {
                var t = wn(rn, e);
                return t.length && (e = t[0]), e;
            }
            function _e() {
                var e = qe(),
                    t = e.section,
                    n = e.slide;
                t && (E.animateAnchor ? gt(t, n) : se(t, n));
            }
            function $e() {
                if (!Y && !E.lockAnchors) {
                    var e = qe(),
                        t = e.section,
                        n = e.slide,
                        o = void 0 === x,
                        r = void 0 === x && void 0 === n && !a;
                    t && t.length && ((t && t !== x && !o) || r || (!a && i != n)) && gt(t, n);
                }
            }
            function qe() {
                var e,
                    t,
                    n = Rt.location.hash;
                if (n.length) {
                    var o = n.replace("#", "").split("/"),
                        r = -1 < n.indexOf("#/");
                    e = r ? "/" + o[1] : decodeURIComponent(o[0]);
                    var i = r ? o[2] : o[1];
                    i && i.length && (t = decodeURIComponent(i));
                }
                return { section: e, slide: t };
            }
            function Qe(e) {
                clearTimeout(M);
                var t = Nt.activeElement,
                    n = e.keyCode;
                9 === n
                    ? (function (e) {
                          var t,
                              n,
                              o,
                              r,
                              i,
                              l,
                              a,
                              s = e.shiftKey,
                              c = Nt.activeElement,
                              u = et(Ke(wn($t)[0]));
                          function f(e) {
                              return Un(e), u[0] ? u[0].focus() : null;
                          }
                          ((t = e), (n = et(Nt)), (o = n.indexOf(Nt.activeElement)), (r = t.shiftKey ? o - 1 : o + 1), (i = n[r]), (l = ze(Dn(i, on))), (a = Ne(Dn(i, _t))), l || a) &&
                              (c ? null == Dn(c, $t + "," + $t + " " + rn) && (c = f(e)) : f(e), ((!s && c == u[u.length - 1]) || (s && c == u[0])) && Un(e));
                      })(e)
                    : _n(t, "textarea") ||
                      _n(t, "input") ||
                      _n(t, "select") ||
                      "true" === t.getAttribute("contentEditable") ||
                      "" === t.getAttribute("contentEditable") ||
                      !E.keyboardScrolling ||
                      !E.autoScrolling ||
                      (-1 < [40, 38, 32, 33, 34].indexOf(n) && Un(e),
                      (c = e.ctrlKey),
                      (M = setTimeout(function () {
                          !(function (e) {
                              var t = e.shiftKey,
                                  n = Nt.activeElement,
                                  o = _n(n, "video") || _n(n, "audio");
                              if (T || !([37, 39].indexOf(e.keyCode) < 0))
                                  switch (e.keyCode) {
                                      case 38:
                                      case 33:
                                          p.k.up && le();
                                          break;
                                      case 32:
                                          if (t && p.k.up && !o) {
                                              le();
                                              break;
                                          }
                                      case 40:
                                      case 34:
                                          p.k.down && ((32 === e.keyCode && o) || ae());
                                          break;
                                      case 36:
                                          p.k.up && ce(1);
                                          break;
                                      case 35:
                                          p.k.down && ce(wn(_t).length);
                                          break;
                                      case 37:
                                          p.k.left && fe();
                                          break;
                                      case 39:
                                          p.k.right && ue();
                                  }
                          })(e);
                      }, 150)));
            }
            function Ge(e) {
                t && (c = e.ctrlKey);
            }
            function Je(e) {
                2 == e.which && ((Q = e.pageY), d.addEventListener("mousemove", nt));
            }
            function Ze(e) {
                2 == e.which && d.removeEventListener("mousemove", nt);
            }
            function et(e) {
                return [].slice.call(wn(B, e)).filter(function (e) {
                    return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent;
                });
            }
            function tt() {
                c = t = !1;
            }
            function nt(e) {
                E.autoScrolling && (T && (e.pageY < Q && p.m.up ? le() : e.pageY > Q && p.m.down && ae()), (Q = e.pageY));
            }
            function ot(e, t, n) {
                var o,
                    r,
                    i = Dn(e, _t),
                    l = {
                        slides: e,
                        destiny: t,
                        direction: n,
                        destinyPos: { left: t.offsetLeft },
                        slideIndex: Cn(t),
                        section: i,
                        sectionIndex: Cn(i, _t),
                        anchorLink: i.getAttribute("data-anchor"),
                        slidesNav: wn(dn, i)[0],
                        slideAnchor: bt(t),
                        prevSlide: wn(rn, i)[0],
                        prevSlideIndex: Cn(wn(rn, i)[0]),
                        localIsResizing: g,
                    };
                (l.xMovement = ((o = l.prevSlideIndex), (r = l.slideIndex), o == r ? "none" : r < o ? "left" : "right")),
                    (l.direction = l.direction ? l.direction : l.xMovement),
                    l.localIsResizing || (T = !1),
                    E.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && Xn(E.onSlideLeave) && !1 === Re("onSlideLeave", l)
                        ? (a = !1)
                        : (Bn(t, Ft),
                          Rn(Fn(t), Ft),
                          l.localIsResizing || (Xe(l.prevSlide), We(t)),
                          !E.loopHorizontal && E.controlArrows && ($n(wn(gn, i), 0 !== l.slideIndex), $n(wn(mn, i), null != On(t))),
                          yn(i, Ft) && !l.localIsResizing && St(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex),
                          (function (e, t, n) {
                              var o = t.destinyPos;
                              if (E.css3) {
                                  var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                                  (h.test.translate3dH[t.sectionIndex] = r),
                                      xn(st(wn(cn, e)), At(r)),
                                      (y = setTimeout(function () {
                                          n && rt(t);
                                      }, E.scrollingSpeed));
                              } else
                                  (h.test.left[t.sectionIndex] = Math.round(o.left)),
                                      Mt(e, Math.round(o.left), E.scrollingSpeed, function () {
                                          n && rt(t);
                                      });
                          })(e, l, !0));
            }
            function rt(e) {
                var t, n;
                (t = e.slidesNav),
                    (n = e.slideIndex),
                    E.slidesNavigation && null != t && (Rn(wn(Ut, t), Ft), Bn(wn("a", wn("li", t)[n]), Ft)),
                    e.localIsResizing || (Xn(E.afterSlideLoad) && Re("afterSlideLoad", e), (T = !0), Fe(e.destiny)),
                    (a = !1);
            }
            function it() {
                clearTimeout(S),
                    (S = setTimeout(function () {
                        for (var e = 0; e < 4; e++) w = setTimeout(lt, 200 * e);
                    }, 200));
            }
            function lt() {
                if ((at(), o)) {
                    var e = Nt.activeElement;
                    if (!_n(e, "textarea") && !_n(e, "input") && !_n(e, "select")) {
                        var t = En();
                        Math.abs(t - G) > (20 * Math.max(G, t)) / 100 && (de(!0), (G = t));
                    }
                } else Se();
            }
            function at() {
                var e = E.responsive || E.responsiveWidth,
                    t = E.responsiveHeight,
                    n = e && Rt.innerWidth < e,
                    o = t && Rt.innerHeight < t;
                e && t ? pe(n || o) : e ? pe(n) : t && pe(o);
            }
            function st(e) {
                var t = "all " + E.scrollingSpeed + "ms " + E.easingcss3;
                return Rn(e, Dt), xn(e, { "-webkit-transition": t, transition: t });
            }
            function ct(e) {
                return Bn(e, Dt);
            }
            function ut(e, t) {
                var n, o, r;
                (n = e),
                    wn(E.menu).forEach(function (e) {
                        E.menu && null != e && (Rn(wn(Ut, e), Ft), Bn(wn('[data-menuanchor="' + n + '"]', e), Ft));
                    }),
                    (o = e),
                    (r = t),
                    E.navigation && null != wn(en)[0] && (Rn(wn(Ut, wn(en)[0]), Ft), Bn(o ? wn('a[href="#' + o + '"]', wn(en)[0]) : wn("a", wn("li", wn(en)[0])[r]), Ft));
            }
            function ft(e) {
                var t = Cn(wn($t)[0], _t),
                    n = Cn(e, _t);
                return t == n ? "none" : n < t ? "up" : "down";
            }
            function dt(e) {
                if (!yn(e, un)) {
                    var t = Nt.createElement("div");
                    (t.className = qt), (t.style.height = vt(e) + "px"), Bn(e, un), jn(e, t);
                }
            }
            function vt(e) {
                var t = A;
                if (E.paddingTop || E.paddingBottom) {
                    var n = e;
                    yn(n, Kt) || (n = Dn(e, _t));
                    var o = parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]);
                    t = A - o;
                }
                return t;
            }
            function pt(e, t) {
                t ? st(d) : ct(d),
                    xn(d, At(e)),
                    (h.test.translate3d = e),
                    setTimeout(function () {
                        Rn(d, Dt);
                    }, 10);
            }
            function ht(e) {
                var t = wn(_t + '[data-anchor="' + e + '"]', d)[0];
                if (!t) {
                    var n = void 0 !== e ? e - 1 : 0;
                    t = wn(_t)[n];
                }
                return t;
            }
            function gt(e, t) {
                var n = ht(e);
                if (null != n) {
                    var o,
                        r,
                        i,
                        l = (null == (i = wn(on + '[data-anchor="' + (o = t) + '"]', (r = n))[0]) && ((o = void 0 !== o ? o : 0), (i = wn(on, r)[o])), i);
                    bt(n) === x || yn(n, Ft)
                        ? mt(l)
                        : Be(n, function () {
                              mt(l);
                          });
                }
            }
            function mt(e) {
                null != e && ot(Dn(e, an), e);
            }
            function St(e, t, n, o) {
                var r = "";
                E.anchors.length && !E.lockAnchors && (e ? (null != n && (r = n), null == t && (t = e), wt(r + "/" + (i = t))) : (null != e && (i = t), wt(n))), yt();
            }
            function wt(e) {
                if (E.recordHistory) location.hash = e;
                else if (o || l) Rt.history.replaceState(void 0, void 0, "#" + e);
                else {
                    var t = Rt.location.href.split("#")[0];
                    Rt.location.replace(t + "#" + e);
                }
            }
            function bt(e) {
                if (!e) return null;
                var t = e.getAttribute("data-anchor"),
                    n = Cn(e);
                return null == t && (t = n), t;
            }
            function yt() {
                var e = wn($t)[0],
                    t = wn(rn, e)[0],
                    n = bt(e),
                    o = bt(t),
                    r = String(n);
                t && (r = r + "-" + o), (r = r.replace("/", "-").replace("#", ""));
                var i = new RegExp("\\b\\s?" + Yt + "-[^\\s]+\\b", "g");
                (L.className = L.className.replace(i, "")), Bn(L, Yt + "-" + r);
            }
            function Et(e) {
                var t = [];
                return (
                    (t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY),
                    (t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX),
                    l && ke(e) && E.scrollBar && void 0 !== e.touches && ((t.y = e.touches[0].pageY), (t.x = e.touches[0].pageX)),
                    t
                );
            }
            function Lt(e, t) {
                ee(0, "internal"), void 0 !== t && (g = !0), ot(Dn(e, an), e), void 0 !== t && (g = !1), ee(P.scrollingSpeed, "internal");
            }
            function xt(e) {
                var t = Math.round(e);
                if (E.css3 && E.autoScrolling && !E.scrollBar) pt("translate3d(0px, -" + t + "px, 0px)", !1);
                else if (E.autoScrolling && !E.scrollBar) xn(d, { top: -t + "px" }), (h.test.top = -t + "px");
                else {
                    var n = je(t);
                    Ct(n.element, n.options);
                }
            }
            function At(e) {
                return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
            }
            function Tt(t, e, n) {
                "all" !== e
                    ? (p[n][e] = t)
                    : Object.keys(p[n]).forEach(function (e) {
                          p[n][e] = t;
                      });
            }
            function kt(e, t, n) {
                (E[e] = t), "internal" !== n && (P[e] = t);
            }
            function Ot() {
                var e = E.licenseKey,
                    t = "font-size: 15px;background:yellow;";
                n
                    ? e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t), console.warn("%c https://alvarotrigo.com/fullPage/", t))
                    : (Sn("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"), Sn("error", "https://github.com/alvarotrigo/fullPage.js#options.")),
                    yn(u, Wt)
                        ? Sn("error", "Fullpage.js can only be initialized once and you are doing it multiple times!")
                        : (E.continuousVertical && (E.loopTop || E.loopBottom) && ((E.continuousVertical = !1), Sn("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                          !E.scrollOverflow ||
                              (!E.scrollBar && E.autoScrolling) ||
                              Sn("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),
                          !E.continuousVertical ||
                              (!E.scrollBar && E.autoScrolling) ||
                              ((E.continuousVertical = !1), Sn("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                          E.scrollOverflow && null == E.scrollOverflowHandler && ((E.scrollOverflow = !1), Sn("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
                          W.forEach(function (e) {
                              E[e] && Sn("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e);
                          }),
                          E.anchors.forEach(function (t) {
                              var e = [].slice.call(wn("[name]")).filter(function (e) {
                                      return e.getAttribute("name") && e.getAttribute("name").toLowerCase() == t.toLowerCase();
                                  }),
                                  n = [].slice.call(wn("[id]")).filter(function (e) {
                                      return e.getAttribute("id") && e.getAttribute("id").toLowerCase() == t.toLowerCase();
                                  });
                              if (n.length || e.length) {
                                  Sn("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                                  var o = n.length ? "id" : "name";
                                  (n.length || e.length) && Sn("error", '"' + t + '" is is being used by another element `' + o + "` property");
                              }
                          }));
            }
            function Mt(t, n, o, r) {
                var e,
                    i = (e = t).self != Rt && yn(e, ln) ? e.scrollLeft : !E.autoScrolling || E.scrollBar ? Yn() : e.offsetTop,
                    l = n - i,
                    a = 0;
                z = !0;
                var s = function () {
                    if (z) {
                        var e = n;
                        (a += 20), o && (e = Rt.fp_easings[E.easing](a, i, l, o)), Ct(t, e), a < o ? setTimeout(s, 20) : void 0 !== r && r();
                    } else a < o && r();
                };
                s();
            }
            function Ct(e, t) {
                !E.autoScrolling || E.scrollBar || (e.self != Rt && yn(e, ln)) ? (e.self != Rt && yn(e, ln) ? (e.scrollLeft = t) : e.scrollTo(0, t)) : (e.style.top = t + "px");
            }
            function Ht(e, t) {
                (this.anchor = e.getAttribute("data-anchor")), (this.item = e), (this.index = Cn(e, t)), (this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1), (this.isFirst = !this.index);
            }
            function It(e) {
                Ht.call(this, e, _t);
            }
            function Bt(e) {
                Ht.call(this, e, on);
            }
            Ot();
        }
    );
}),
    window.jQuery &&
        window.fullpage &&
        (function (t, n) {
            "use strict";
            t && n
                ? (t.fn.fullpage = function (e) {
                      e = t.extend({}, e, { $: t });
                      new n(this[0], e);
                  })
                : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!");
        })(window.jQuery, window.fullpage);
//# sourceMappingURL=fullpage.min.js.map

(function () {
    window.$clamp = function (c, d) {
        function s(a, b) {
            n.getComputedStyle ||
                (n.getComputedStyle = function (a, b) {
                    this.el = a;
                    this.getPropertyValue = function (b) {
                        var c = /(\-([a-z]){1})/g;
                        "float" == b && (b = "styleFloat");
                        c.test(b) &&
                            (b = b.replace(c, function (a, b, c) {
                                return c.toUpperCase();
                            }));
                        return a.currentStyle && a.currentStyle[b] ? a.currentStyle[b] : null;
                    };
                    return this;
                });
            return n.getComputedStyle(a, null).getPropertyValue(b);
        }
        function t(a) {
            a = a || c.clientHeight;
            var b = u(c);
            return Math.max(Math.floor(a / b), 0);
        }
        function x(a) {
            return u(c) * a;
        }
        function u(a) {
            var b = s(a, "line-height");
            "normal" == b && (b = 1.2 * parseInt(s(a, "font-size")));
            return parseInt(b);
        }
        function l(a) {
            if (a.lastChild.children && 0 < a.lastChild.children.length) return l(Array.prototype.slice.call(a.children).pop());
            if (a.lastChild && a.lastChild.nodeValue && "" != a.lastChild.nodeValue && a.lastChild.nodeValue != b.truncationChar) return a.lastChild;
            a.lastChild.parentNode.removeChild(a.lastChild);
            return l(c);
        }
        function p(a, d) {
            if (d) {
                var e = a.nodeValue.replace(b.truncationChar, "");
                f || ((h = 0 < k.length ? k.shift() : ""), (f = e.split(h)));
                1 < f.length ? ((q = f.pop()), r(a, f.join(h))) : (f = null);
                m && ((a.nodeValue = a.nodeValue.replace(b.truncationChar, "")), (c.innerHTML = a.nodeValue + " " + m.innerHTML + b.truncationChar));
                if (f) {
                    if (c.clientHeight <= d)
                        if (0 <= k.length && "" != h) r(a, f.join(h) + h + q), (f = null);
                        else return c.innerHTML;
                } else "" == h && (r(a, ""), (a = l(c)), (k = b.splitOnChars.slice(0)), (h = k[0]), (q = f = null));
                if (b.animate)
                    setTimeout(
                        function () {
                            p(a, d);
                        },
                        !0 === b.animate ? 10 : b.animate
                    );
                else return p(a, d);
            }
        }
        function r(a, c) {
            a.nodeValue = c + b.truncationChar;
        }
        d = d || {};
        var n = window,
            b = {
                clamp: d.clamp || 2,
                useNativeClamp: "undefined" != typeof d.useNativeClamp ? d.useNativeClamp : !0,
                splitOnChars: d.splitOnChars || [".", "-", "\u2013", "\u2014", " "],
                animate: d.animate || !1,
                truncationChar: d.truncationChar || "\u2026",
                truncationHTML: d.truncationHTML,
            },
            e = c.style,
            y = c.innerHTML,
            z = "undefined" != typeof c.style.webkitLineClamp,
            g = b.clamp,
            v = g.indexOf && (-1 < g.indexOf("px") || -1 < g.indexOf("em")),
            m;
        b.truncationHTML && ((m = document.createElement("span")), (m.innerHTML = b.truncationHTML));
        var k = b.splitOnChars.slice(0),
            h = k[0],
            f,
            q;
        "auto" == g ? (g = t()) : v && (g = t(parseInt(g)));
        var w;
        z && b.useNativeClamp
            ? ((e.overflow = "hidden"), (e.textOverflow = "ellipsis"), (e.webkitBoxOrient = "vertical"), (e.display = "-webkit-box"), (e.webkitLineClamp = g), v && (e.height = b.clamp + "px"))
            : ((e = x(g)), e <= c.clientHeight && (w = p(l(c), e)));
        return { original: y, clamped: w };
    };
})();
/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function () {
    var b, f;
    b = this.jQuery || window.jQuery;
    f = b(window);
    b.fn.stick_in_parent = function (d) {
        var A, w, J, n, B, K, p, q, k, E, t;
        null == d && (d = {});
        t = d.sticky_class;
        B = d.inner_scrolling;
        E = d.recalc_every;
        k = d.parent;
        q = d.offset_top;
        p = d.spacer;
        w = d.bottoming;
        null == q && (q = 0);
        null == k && (k = void 0);
        null == B && (B = !0);
        null == t && (t = "is_stuck");
        A = b(document);
        null == w && (w = !0);
        J = function (a, d, n, C, F, u, r, G) {
            var v, H, m, D, I, c, g, x, y, z, h, l;
            if (!a.data("sticky_kit")) {
                a.data("sticky_kit", !0);
                I = A.height();
                g = a.parent();
                null != k && (g = g.closest(k));
                if (!g.length) throw "failed to find stick parent";
                v = m = !1;
                (h = null != p ? p && a.closest(p) : b("<div />")) && h.css("position", a.css("position"));
                x = function () {
                    var c, f, e;
                    if (
                        !G &&
                        ((I = A.height()),
                        (c = parseInt(g.css("border-top-width"), 10)),
                        (f = parseInt(g.css("padding-top"), 10)),
                        (d = parseInt(g.css("padding-bottom"), 10)),
                        (n = g.offset().top + c + f),
                        (C = g.height()),
                        m && ((v = m = !1), null == p && (a.insertAfter(h), h.detach()), a.css({ position: "", top: "", width: "", bottom: "" }).removeClass(t), (e = !0)),
                        (F = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - q),
                        (u = a.outerHeight(!0)),
                        (r = a.css("float")),
                        h && h.css({ width: a.outerWidth(!0), height: u, display: a.css("display"), "vertical-align": a.css("vertical-align"), float: r }),
                        e)
                    )
                        return l();
                };
                x();
                if (u !== C)
                    return (
                        (D = void 0),
                        (c = q),
                        (z = E),
                        (l = function () {
                            var b, l, e, k;
                            if (
                                !G &&
                                ((e = !1),
                                null != z && (--z, 0 >= z && ((z = E), x(), (e = !0))),
                                e || A.height() === I || x(),
                                (e = f.scrollTop()),
                                null != D && (l = e - D),
                                (D = e),
                                m
                                    ? (w && ((k = e + u + c > C + n), v && !k && ((v = !1), a.css({ position: "fixed", bottom: "", top: c }).trigger("sticky_kit:unbottom"))),
                                      e < F &&
                                          ((m = !1),
                                          (c = q),
                                          null == p && (("left" !== r && "right" !== r) || a.insertAfter(h), h.detach()),
                                          (b = { position: "", width: "", top: "" }),
                                          a.css(b).removeClass(t).trigger("sticky_kit:unstick")),
                                      B && ((b = f.height()), u + q > b && !v && ((c -= l), (c = Math.max(b - u, c)), (c = Math.min(q, c)), m && a.css({ top: c + "px" }))))
                                    : e > F &&
                                      ((m = !0),
                                      (b = { position: "fixed", top: c }),
                                      (b.width = "border-box" === a.css("box-sizing") ? a.outerWidth() + "px" : a.width() + "px"),
                                      a.css(b).addClass(t),
                                      null == p && (a.after(h), ("left" !== r && "right" !== r) || h.append(a)),
                                      a.trigger("sticky_kit:stick")),
                                m && w && (null == k && (k = e + u + c > C + n), !v && k))
                            )
                                return (v = !0), "static" === g.css("position") && g.css({ position: "relative" }), a.css({ position: "absolute", bottom: d, top: "auto" }).trigger("sticky_kit:bottom");
                        }),
                        (y = function () {
                            x();
                            return l();
                        }),
                        (H = function () {
                            G = !0;
                            f.off("touchmove", l);
                            f.off("scroll", l);
                            f.off("resize", y);
                            b(document.body).off("sticky_kit:recalc", y);
                            a.off("sticky_kit:detach", H);
                            a.removeData("sticky_kit");
                            a.css({ position: "", bottom: "", top: "", width: "" });
                            g.position("position", "");
                            if (m) return null == p && (("left" !== r && "right" !== r) || a.insertAfter(h), h.remove()), a.removeClass(t);
                        }),
                        f.on("touchmove", l),
                        f.on("scroll", l),
                        f.on("resize", y),
                        b(document.body).on("sticky_kit:recalc", y),
                        a.on("sticky_kit:detach", H),
                        setTimeout(l, 0)
                    );
            }
        };
        n = 0;
        for (K = this.length; n < K; n++) (d = this[n]), J(b(d));
        return this;
    };
}.call(this));

/*! Copyright (c) 2016 THE ULTRASOFT (http://theultrasoft.com)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Project: Parallaxie
 * Version: 0.5
 *
 * Requires: jQuery 1.9+
 */

(function ($) {
    $.fn.parallaxie = function (options) {
        options = $.extend(
            {
                speed: 0.2,
                repeat: "no-repeat",
                size: "cover",
                pos_x: "center",
                offset: 0,
            },
            options
        );

        this.each(function () {
            var $el = $(this);
            var local_options = $el.data("parallaxie");
            if (typeof local_options !== "object") local_options = {};
            local_options = $.extend({}, options, local_options);

            var image_url = $el.data("image");
            if (typeof image_url === "undefined") {
                image_url = $el.css("background-image");
                if (!image_url) return;

                // APPLY DEFAULT CSS
                var pos_y = local_options.offset + ($el.offset().top - $(window).scrollTop()) * (1 - local_options.speed);
                $el.css({
                    "background-image": image_url,
                    "background-size": local_options.size,
                    "background-repeat": local_options.repeat,
                    "background-attachment": "fixed",
                    "background-position": local_options.pos_x + " " + pos_y + "px",
                });

                // Call by default for the first time on initialization.
                parallax_scroll($el, local_options);

                // Call by whenever the scroll event occurs.
                $(window).scroll(function () {
                    if ($(window).width() > 991) {
                        parallax_scroll($el, local_options);
                    }
                });
            }
        });

        return this;
    };

    function parallax_scroll($el, local_options) {
        var pos_y = local_options.offset + ($el.offset().top - $(window).scrollTop()) * (1 - local_options.speed);
        $el.data("pos_y", pos_y);
        $el.css("background-position", local_options.pos_x + " " + pos_y + "px");
    }
})(jQuery);

/* plugins */

/* separate */
var objectfit = function () {
    $(".h-object-fit").each(function () {
        var $container = $(this),
            imgUrl = $container.find("img").prop("src");

        if (imgUrl) {
            $container.css("background-image", "url(" + imgUrl + ")").addClass("is-fited");
        }
    });
};
if (Modernizr.objectfit === false) {
    objectfit();
}
var $window = $(window);
window.cust = window.cust ? window.cust : {};

// get window width && height
var gW = $window.outerWidth(true),
    gH = $window.outerHeight(true);

$window.on("resize", function () {
    gIw = $window.innerWidth(true);
    gIh = $window.innerHeight(true);
});

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function detectBrowser() {
    // function for detect browser and add it to html tag
    var ua = window.navigator.userAgent,
        html = $("html");

    if (ua.indexOf("MSIE ") > 0) {
        html.addClass("msie msie" + parseInt(ua.substring(ua.indexOf("MSIE ") + 5, ua.indexOf(".", ua.indexOf("MSIE "))), 10));
    }
    if (ua.indexOf("Trident/") > 0) {
        html.addClass("ie ie" + parseInt(ua.substring(ua.indexOf("rv:") + 3, ua.indexOf(".", ua.indexOf("rv:"))), 10));
    }
    if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) || (!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))) {
        html.addClass("ios");
    }
    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
        html.addClass("edge");
    }
    if (ua.toLowerCase().indexOf("safari") != -1) {
        if (ua.toLowerCase().indexOf("chrome") > -1) {
            html.addClass("chrome");
        } else {
            html.addClass("safari");
        }
    }
}
detectBrowser();

function getScrollBarWidth() {
    var inner = document.createElement("p");
    inner.style.height = "200px";
    inner.style.width = "100%";

    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.position = "absolute";
    outer.style.overflow = "hidden";
    outer.style.height = "150px";
    outer.style.width = "200px";
    outer.style.left = "0px";
    outer.style.top = "0px";

    outer.appendChild(inner);
    document.body.appendChild(outer);

    var w1 = inner.offsetWidth;
    outer.style.overflow = "scroll";

    var w2 = inner.offsetWidth;
    if (w1 == w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return w1 - w2; // scroll width
}
getScrollBarWidth();

function is_scroll() {
    // if window has scroll
    return $(document).height() > $(window).height();
}

/* components */
$(document).ready(function () {
    //Menu
    var menuTimeline = gsap.timeline({ paused: true });
    menuTimeline
        .to(".menu", { zIndex: 99999, duration: 0 })
        .fromTo(".menu", { visibility: "hidden", scale: 0.9, opacity: 0 }, { visibility: "visible", scale: 1, opacity: 1, duration: 0.6 })
        .fromTo(".menu__list li", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.2, stagger: 0.1 })
        .fromTo(".menu__footer", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.05 });

    $(".js-menu").on("click", function () {
        if ($(this).hasClass("opened")) {
            $(this).removeClass("opened");
            setTimeout(function () {
                $("body").removeClass("menu-opened");
            }, 1500);
            menuTimeline.reverse().eventCallback("onReverseComplete", function () {
                TweenLite.set(".menu", { clearProps: "all" });
            });
            closeDialog();
        } else {
            $(this).addClass("opened");
            $("body").addClass("menu-opened");
            menuTimeline.play();
            showDialog();
        }
    });

    $(".menu__list").on("mouseenter", "li", function () {
        var $this = $(this);
        var $dataImage = $this.data("image");
        if ($this.hasClass("visible")) {
            return false;
        }
        $this.siblings(".visible").removeClass("visible");
        $this.addClass("visible");
        $(".menu__container").find(".menu__bg.visible").removeClass("visible");
        $(".menu__container")
            .find("#" + $dataImage)
            .addClass("visible");
    });

    $(".menu__list").on("mouseleave", "li", function () {
        var $activeItem = $(".menu__list").find("li.active").data("image");
        $(".menu__container").find(".menu__bg.visible").removeClass("visible");
        $(".menu__list").find("li.visible").removeClass("visible");
        $(".menu__container")
            .find("#" + $activeItem)
            .addClass("visible");
    });

    $(".menu__list").on("click", "li", function () {
        if ($(this).hasClass("active")) return false;
    });
});
$(document).ready(function () {
    if ($(".section-main__slider").length) {
        const slider = $(".section-main__slider");
        var slideAfterChange;

        slider.on("init", function (event, slick) {
            $(".section-main__slider-item.slick-active").find(".animated-skew-el, .animated-transparent-el, .slide-vertical-line").addClass("show");
            $("body").addClass("fixed");

            var activeSvg = $(".section-main__slider-item.slick-active").find(".icon-awward").attr("id");
            var myVivus = new Vivus(activeSvg, { type: "oneByOne", duration: 120, start: "manual" });
            setTimeout(function () {
                myVivus.play();
            }, 1600);
        });

        setTimeout(function () {
            slider.slick({
                infinite: true,
                dots: true,
                arrows: true,
                appendDots: ".section-main__slider__dots .l-container",
                prevArrow: ".plans__arrow.arrow-prev",
                nextArrow: ".plans__arrow.arrow-next",
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                pauseOnHover: false,
                pauseOnFocus: false,
                fade: true,
                autoplay: true,
                autoplaySpeed: 9000,
                cssEase: "ease-out",
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            verticalSwiping: true,
                        },
                    },
                ],
            });
        }, 2400);

        slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            slideAfterChange = $('.section-main__slider-item[data-slick-index="' + nextSlide + '"]');
            $('.section-main__slider-item[data-slick-index="' + currentSlide + '"]')
                .find(".animated-skew-el, .animated-transparent-el, .slide-vertical-line")
                .removeClass("show");
            slideAfterChange.find(".animated-skew-el, .animated-transparent-el, .slide-vertical-line").addClass("show");
            var nextSvg = slideAfterChange.find(".icon-awward").attr("id");
            var myVivus = new Vivus(nextSvg, { type: "oneByOne", duration: 120, start: "manual" });
            myVivus.play(-1);
        });

        slider.on("afterChange", function () {
            var currSvg = slideAfterChange.find(".icon-awward").attr("id");
            var myVivus = new Vivus(currSvg, { type: "oneByOne", duration: 120, start: "manual" });
            setTimeout(function () {
                myVivus.play();
            }, 500);
        });

        slider.on("wheel", function (e) {
            e.preventDefault();

            if (e.originalEvent.deltaY < 0) {
                $(this).slick("slickPrev");
            } else {
                $(this).slick("slickNext");
            }
        });
    }
});

if ($(".section-location").length) {
    ymaps.modules.define("AnimatedLine", ["util.defineClass", "Polyline", "vow"], function (provide, defineClass, Polyline, vow) {
        /**
         * @fileOverview Анимированная линия.
         */
        /**
         * Создает экземпляр анимированной линии.
         * @class AnimatedLine. Представляет собой геообъект с геометрией geometry.LineString.
         * @param {Boolean} [options.animationTime = 4000] Длительность анимации.
         **/
        function AnimatedLine(geometry, properties, options) {
            AnimatedLine.superclass.constructor.call(this, geometry, properties, options);
            this._loopTime = 50;
            this._animationTime = this.options.get("animationTime", 4000);
            // Вычислим длину переданной линии.
            var distance = 0;
            var previousElem = geometry[0];
            this.geometry.getCoordinates().forEach(function (elem) {
                distance += getDistance(elem, previousElem);
                previousElem = elem;
            });
            // Вычислим минимальный интервал отрисовки.
            this._animationInterval = (distance / this._animationTime) * this._loopTime;
            // Создадим массив с более частым расположением промежуточных точек.
            this._smoothCoords = generateSmoothCoords(geometry, this._animationInterval);
        }
        defineClass(AnimatedLine, Polyline, {
            // Анимировать линию.
            start: function () {
                var value = 0;
                var coords = this._smoothCoords;
                var line = this;
                var loopTime = this._loopTime;
                // Будем добавлять по одной точке каждые 50 мс.
                function loop(value, currentTime, previousTime) {
                    if (value < coords.length) {
                        if (!currentTime || currentTime - previousTime > loopTime) {
                            line.geometry.set(value, coords[value]);
                            value++;
                            previousTime = currentTime;
                        }
                        requestAnimationFrame(function (time) {
                            loop(value, time, previousTime || time);
                        });
                    } else {
                        // Бросаем событие окончания отрисовки линии.
                        line.events.fire("animationfinished");
                    }
                }

                loop(value);
            },
            // Убрать отрисованную линию.
            reset: function () {
                this.geometry.setCoordinates([]);
            },
            // Запустить полный цикл анимации.
            animate: function () {
                this.reset();
                this.start();
                var deferred = vow.defer();
                this.events.once("animationfinished", function () {
                    deferred.resolve();
                });
                return deferred.promise();
            },
        });
        // Функция генерации частых координат по заданной линии.
        function generateSmoothCoords(coords, interval) {
            var smoothCoords = [];
            smoothCoords.push(coords[0]);
            for (var i = 1; i < coords.length; i++) {
                var difference = [coords[i][0] - coords[i - 1][0], coords[i][1] - coords[i - 1][1]];
                var maxAmount = Math.max(Math.abs(difference[0] / interval), Math.abs(difference[1] / interval));
                var minDifference = [difference[0] / maxAmount, difference[1] / maxAmount];
                var lastCoord = coords[i - 1];
                while (maxAmount > 1) {
                    lastCoord = [lastCoord[0] + minDifference[0], lastCoord[1] + minDifference[1]];
                    smoothCoords.push(lastCoord);
                    maxAmount--;
                }
                smoothCoords.push(coords[i]);
            }
            return smoothCoords;
        }
        // Функция нахождения расстояния между двумя точками на плоскости.
        function getDistance(point1, point2) {
            return Math.sqrt(Math.pow(point2[0] - point1[0], 2) + Math.pow(point2[1] - point1[1], 2));
        }
        provide(AnimatedLine);
    });
}
if ($(".section-location").length) {
    setTimeout(function () {
        ymaps.ready(["AnimatedLine"]).then(init);
    }, 2600);

    function init(ymaps) {
        var myMap = new ymaps.Map(
            "map",
            {
                center: [55.6896635450203, 37.44667647600558],
                zoom: 11,
                controls: [],
            },
            {}
        );

        //Метки

        var sadovoe_kolco = new ymaps.Polyline(
            [
                // Указываем координаты вершин ломаной.
                [55.76963099772164, 37.59651941048855],
                [55.771130890970866, 37.60003846871611],
                [55.77253396444524, 37.6045445798611],
                [55.77340481212617, 37.6108102201199],
                [55.77367090057581, 37.621539056179465],
                [55.77338062217666, 37.627118050930456],
                [55.77219529618133, 37.636816918728314],
                [55.768784258196725, 37.64904779183621],
                [55.764042175523464, 37.656214654324],
                [55.76157412782659, 37.65750211465115],
                [55.75775076382269, 37.657759606716574],
                [55.7548950945114, 37.65715879189723],
                [55.75242646539413, 37.65604299294706],
                [55.743325065511215, 37.65484136330838],
                [55.740153598190105, 37.65226644265408],
                [55.73441524762241, 37.643597543117956],
                [55.731364133991974, 37.63784688699002],
                [55.729741618891026, 37.62334150063748],
                [55.729644750175645, 37.614758431789824],
                [55.73005644054903, 37.61158269631619],
                [55.73545644587495, 37.59437364327664],
                [55.73857987328382, 37.58621972787138],
                [55.7466415139825, 37.58257192361111],
                [55.752595886132276, 37.58330148446316],
                [55.758984928791506, 37.58467477547878],
                [55.76355825696717, 37.58810800301784],
                [55.767405242865365, 37.593000352261015],
                [55.76963099772164, 37.59651941048855],
            ],
            {},
            {
                // Цвет линии.
                strokeColor: "#1573bf",
                // Ширина линии.
                strokeWidth: 5,
            }
        );

        var ttk = new ymaps.Polyline(
            [
                // Указываем координаты вершин ломаной.
                [55.77337457468692, 37.54637283074614],
                [55.77370113778419, 37.54776757943387],
                [55.77408817197104, 37.55141538369413],
                [55.77460824308188, 37.553325116512724],
                [55.77526134576846, 37.55416196572538],
                [55.77829691954297, 37.55677980172391],
                [55.77959089673462, 37.55772393929714],
                [55.78269868436185, 37.561822354671904],
                [55.791374087138976, 37.57391430187836],
                [55.79172467730289, 37.57477260876312],
                [55.791748855818064, 37.57925726223601],
                [55.79207526429775, 37.58477188397063],
                [55.79214779914241, 37.59507156658783],
                [55.7925588273665, 37.60052181530609],
                [55.793054473254955, 37.61335350323334],
                [55.79307865094114, 37.61749483395232],
                [55.79251047133093, 37.62792326260222],
                [55.79184556972807, 37.63219333935393],
                [55.79205108598605, 37.63807274151458],
                [55.79374353140486, 37.64732099819794],
                [55.79371935413315, 37.64968134213103],
                [55.793235805533975, 37.65236355114593],
                [55.79251047133093, 37.654058707243344],
                [55.791954372588535, 37.65495992947234],
                [55.783430557331414, 37.66616083431853],
                [55.781798123714616, 37.66873575497283],
                [55.779626984446736, 37.673471614599656],
                [55.77715992751616, 37.6802522389893],
                [55.776506856780195, 37.6813680379395],
                [55.77357999737907, 37.68535916495366],
                [55.76910462030862, 37.69289080786748],
                [55.76897760883505, 37.69188229727788],
                [55.76682439871191, 37.69282643485111],
                [55.76288056937247, 37.692483112097214],
                [55.75777477200466, 37.692783519506875],
                [55.75513691700748, 37.69342724967045],
                [55.751845397144315, 37.6958305089478],
                [55.748311543298605, 37.699306651831094],
                [55.745769874324765, 37.69969288992925],
                [55.74337329127439, 37.69823376822515],
                [55.74131550100896, 37.69737546134037],
                [55.7394512910457, 37.69746129202884],
                [55.736448998712525, 37.69870583701176],
                [55.73395498276765, 37.70115201163335],
                [55.73087961657558, 37.705271884680215],
                [55.72608446578605, 37.71102254080815],
                [55.72460705267989, 37.711237117529336],
                [55.723783552156796, 37.71063630270999],
                [55.721482502365035, 37.70514313864751],
                [55.715644491484014, 37.68493001151127],
                [55.713730595951006, 37.67969433951419],
                [55.71196197585646, 37.673857852697786],
                [55.703578107314755, 37.657764598608445],
                [55.703166136574566, 37.654159709692436],
                [55.70578328829408, 37.62077157187505],
                [55.70253605524156, 37.61562173056645],
                [55.70108198245919, 37.61171643424077],
                [55.70125162708337, 37.607811137915085],
                [55.70677679053594, 37.58824174094242],
                [55.709757145056244, 37.58279149222417],
                [55.715281100840784, 37.5755387990479],
                [55.7177278656408, 37.569316074133354],
                [55.720707381250776, 37.55974595236821],
                [55.722742041224144, 37.55322282004399],
                [55.728578986723406, 37.546313449621636],
                [55.7320177725821, 37.54339520621342],
                [55.73441505599908, 37.54245106864019],
                [55.73673955326852, 37.53897492575687],
                [55.74017761724983, 37.535069629431185],
                [55.74978805557992, 37.53210847067876],
                [55.752111633383805, 37.53146474051518],
                [55.76740505140472, 37.53807370352788],
                [55.76907437951926, 37.53987614798589],
                [55.770090457138714, 37.5420219151978],
                [55.77337457468692, 37.54637283074614],
            ],
            {},
            {
                // Цвет линии.
                strokeColor: "#1573bf",
                // Ширина линии.
                strokeWidth: 5,
            }
        );

        var leninskiy_prospect = new ymaps.Polyline(
            [
                // Указываем координаты вершин ломаной.
                [55.73005330705752, 37.61198765231372],
                [55.728915093533104, 37.61198765231372],
                [55.727389350790574, 37.60941273165942],
                [55.709364087305225, 37.583458924564155],
                [55.688057511895494, 37.54534875796186],
                [55.67317460273974, 37.523368286594504],
                [55.6729063444789, 37.52239810452081],
                [55.67065079274679, 37.5191365383587],
                [55.669971676325936, 37.51866446957207],
                [55.65835909089472, 37.50128241113362],
                [55.63697883086443, 37.455672056140116],
                [55.63353164221282, 37.44730356401365],
                [55.56941457310521, 37.1939710096378],
                [55.51938472073493, 37.000578322659265],
                [55.51819164909861, 36.99804631734921],
                [55.513053721497926, 36.990192809353594],
                [55.385195235716616, 36.78470725604873],
                [55.32805767799803, 36.708923820726866],
                [55.32628742200157, 36.70778173967011],
                [55.216154163118105, 36.67919819572385],
                [55.21338148324893, 36.678554465560275],
                [55.187851642324944, 36.67871811159007],
                [55.185911856218624, 36.67846061952465],
                [55.055959113951324, 36.618334649307634],
                [55.054407064005616, 36.61661803553809],
                [54.8968273117823, 36.363434598018394],
                [54.85978021923615, 36.344491530095596],
            ],
            {},
            {
                // Цвет линии.
                strokeColor: "#1573bf",
                // Ширина линии.
                strokeWidth: 5,
            }
        );

        //Линии

        var firstAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.75975848161007, 37.62512669122391],
                [55.758512241641334, 37.61794909990011],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 200,
            }
        );
        var secondAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.758512241641334, 37.61794909990011],
                [55.75710118397424, 37.61518596549938],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 100,
            }
        );
        var thirdAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.75710118397424, 37.61518596549938],
                [55.75126852132811, 37.610164870223485],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var fourthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.75126852132811, 37.610164870223485],
                [55.74889648268418, 37.608190764388524],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 100,
            }
        );
        var fifthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.74889648268418, 37.608190764388524],
                [55.747008430042555, 37.60630248924207],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 200,
            }
        );
        var sixthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.747008430042555, 37.60630248924207],
                [55.74487820920874, 37.60312675376843],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 100,
            }
        );
        var seventhAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.74487820920874, 37.60312675376843],
                [55.74231210630501, 37.59995101829479],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 200,
            }
        );
        var eighthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.74231210630501, 37.59995101829479],
                [55.735678187132386, 37.594801176986195],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 100,
            }
        );
        var ninethAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.735678187132386, 37.594801176986195],
                [55.73248188024918, 37.59111045738167],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 100,
            }
        );
        var tenthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.73248188024918, 37.59111045738167],
                [55.7271056804676, 37.580381621322104],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 60,
            }
        );
        var eleventhAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.7271056804676, 37.580381621322104],
                [55.72516812893438, 37.57445930381722],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 100,
            }
        );
        var twelvesAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.72516812893438, 37.57445930381722],
                [55.72395711019366, 37.565876234969565],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 200,
            }
        );
        var thirdteenthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.72395711019366, 37.565876234969565],
                [55.723182038405206, 37.56364463706916],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 50,
            }
        );
        var fourteenthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.723182038405206, 37.56364463706916],
                [55.7200331503801, 37.562185515365016],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 100,
            }
        );
        var fifteenthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.7200331503801, 37.562185515365016],
                [55.71431605589556, 37.562271346053514],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 700,
            }
        );
        var sixteenthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.71431605589556, 37.562271346053514],
                [55.71281396795254, 37.56184219261112],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 200,
            }
        );
        var seventeenthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.71281396795254, 37.56184219261112],
                [55.71019728914146, 37.55952476402224],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var eighteenthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.71019728914146, 37.55952476402224],
                [55.69274826532756, 37.53386138816772],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var nineteenthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.69274826532756, 37.53386138816772],
                [55.67698895390118, 37.50622390647822],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var twentiesAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.67698895390118, 37.50622390647822],
                [55.66981029227773, 37.49137519737174],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var twentyfirstAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.66981029227773, 37.49137519737174],
                [55.66607492489459, 37.48450874229363],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var twentysecondAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.66607492489459, 37.48450874229363],
                [55.66374620299484, 37.48296378990103],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var twentythirdAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.66374620299484, 37.48296378990103],
                [55.647489789636865, 37.475839842757395],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var twentyfourthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.647489789636865, 37.475839842757395],
                [55.645742428362894, 37.47232078452986],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var twentyfifthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.645742428362894, 37.47232078452986],
                [55.63307171742104, 37.44150756736673],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var twentysixthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.63307171742104, 37.44150756736673],
                [55.62904147164439, 37.434469450911664],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var twentyseventhAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.62904147164439, 37.434469450911664],
                [55.6195711839298, 37.420736540755414],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var twentyeighthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.6195711839298, 37.420736540755414],
                [55.61617103292949, 37.41215347190776],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var twentyninthAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.61617103292949, 37.41215347190776],
                [55.61456800188299, 37.41069435020366],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var thirtyAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.61456800188299, 37.41069435020366],
                [55.60566154448353, 37.4038238231594],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var thirtyfirstAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.60566154448353, 37.4038238231594],
                [55.603134846362686, 37.40451046866721],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );
        var thirtysecondAnimatedLine = new ymaps.AnimatedLine(
            [
                [55.603134846362686, 37.40451046866721],
                [55.600802364552216, 37.40811535758324],
            ],
            {},
            {
                strokeColor: "#ED4543",
                strokeWidth: 5,
                animationTime: 500,
            }
        );

        // Добавляем линии на карту.
        myMap.geoObjects.add(firstAnimatedLine);
        myMap.geoObjects.add(secondAnimatedLine);
        myMap.geoObjects.add(thirdAnimatedLine);
        myMap.geoObjects.add(fourthAnimatedLine);
        myMap.geoObjects.add(fifthAnimatedLine);
        myMap.geoObjects.add(sixthAnimatedLine);
        myMap.geoObjects.add(seventhAnimatedLine);
        myMap.geoObjects.add(eighthAnimatedLine);
        myMap.geoObjects.add(ninethAnimatedLine);
        myMap.geoObjects.add(tenthAnimatedLine);
        myMap.geoObjects.add(eleventhAnimatedLine);
        myMap.geoObjects.add(twelvesAnimatedLine);
        myMap.geoObjects.add(thirdteenthAnimatedLine);
        myMap.geoObjects.add(fourteenthAnimatedLine);
        myMap.geoObjects.add(fifteenthAnimatedLine);
        myMap.geoObjects.add(sixteenthAnimatedLine);
        myMap.geoObjects.add(seventeenthAnimatedLine);
        myMap.geoObjects.add(eighteenthAnimatedLine);
        myMap.geoObjects.add(nineteenthAnimatedLine);
        myMap.geoObjects.add(twentiesAnimatedLine);
        myMap.geoObjects.add(twentyfirstAnimatedLine);
        myMap.geoObjects.add(twentysecondAnimatedLine);
        myMap.geoObjects.add(twentythirdAnimatedLine);
        myMap.geoObjects.add(twentyfourthAnimatedLine);
        myMap.geoObjects.add(twentyfifthAnimatedLine);
        myMap.geoObjects.add(twentysixthAnimatedLine);
        myMap.geoObjects.add(twentyseventhAnimatedLine);
        myMap.geoObjects.add(twentyeighthAnimatedLine);
        myMap.geoObjects.add(twentyninthAnimatedLine);
        myMap.geoObjects.add(thirtyAnimatedLine);
        myMap.geoObjects.add(thirtyfirstAnimatedLine);
        myMap.geoObjects.add(thirtysecondAnimatedLine);

        // Создаем метки.
        BalloonContentBlue = ymaps.templateLayoutFactory.createClass('<div class="baloon baloon-blue">' + "<b>{{properties.name}}</b><br />" + "</div>", {
            build: function () {
                BalloonContentBlue.superclass.build.call(this);
            },
        });

        BalloonContentRed = ymaps.templateLayoutFactory.createClass('<div class="baloon baloon-red">' + "<b>{{properties.name}}</b><br />" + "</div>", {
            build: function () {
                BalloonContentRed.superclass.build.call(this);
            },
        });

        var firstPoint = new ymaps.Placemark(
            [55.75978267968296, 37.625115301573906],
            {
                name: "м. Лубянка",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/m.svg",
                balloonContentLayout: BalloonContentRed,
            }
        );

        var secondPoint = new ymaps.Placemark(
            [55.756964, 37.615524],
            {
                name: "м. Охотный Ряд",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/m.svg",
                balloonContentLayout: BalloonContentRed,
            }
        );

        var thirdPoint = new ymaps.Placemark(
            [55.723247, 37.564105],
            {
                name: "м. Спортивная",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/m.svg",
                balloonContentLayout: BalloonContentRed,
            }
        );
        var fourthPoint = new ymaps.Placemark(
            [55.710438, 37.559317],
            {
                name: "м. Воробьёвы горы",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/m.svg",
                balloonContentLayout: BalloonContentRed,
            }
        );
        var fifthPoint = new ymaps.Placemark(
            [55.692612, 37.533517],
            {
                name: "м. Университет",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/m.svg",
                balloonContentLayout: BalloonContentRed,
            }
        );
        var sixthPoint = new ymaps.Placemark(
            [55.67691, 37.505831],
            {
                name: "м. Проспект Вернадского",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/m.svg",
                balloonContentLayout: BalloonContentRed,
            }
        );
        var sevenPoint = new ymaps.Placemark(
            [55.663629, 37.483095],
            {
                name: "м. Юго-Западная",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/m.svg",
                balloonContentLayout: BalloonContentRed,
            }
        );
        var eightPoint = new ymaps.Placemark(
            [55.64574, 37.472378],
            {
                name: "м. Тропарёво",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/m.svg",
                balloonContentLayout: BalloonContentRed,
            }
        );
        var ninePoint = new ymaps.Placemark(
            [55.633028, 37.441395],
            {
                name: "м. Румянцево",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/m.svg",
                balloonContentLayout: BalloonContentRed,
            }
        );
        var tenPoint = new ymaps.Placemark(
            [55.621811, 37.424048],
            {
                name: "м. Саларьево",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/m.svg",
                balloonContentLayout: BalloonContentRed,
            }
        );
        var elevenPoint = new ymaps.Placemark(
            [55.600696377787266, 37.40689758944554],
            {
                name: "м. Филатов Луг",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/m.svg",
                balloonContentLayout: BalloonContentRed,
            }
        );
        var skolkovo = new ymaps.Placemark(
            [55.684595, 37.341758],
            {
                name: "Инновационный центр Сколково",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/skolkovo.svg",
                balloonContentLayout: BalloonContentBlue,
            }
        );
        var vnukovo = new ymaps.Placemark(
            [55.605785, 37.287748],
            {
                name: "Аэропорт Внуково",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/airport.svg",
                balloonContentLayout: BalloonContentBlue,
            }
        );
        var bcg10 = new ymaps.Placemark(
            [55.63342, 37.453835],
            {
                name: "БЦ «G10»",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/office.svg",
                balloonContentLayout: BalloonContentBlue,
            }
        );
        var bcrumyancevo = new ymaps.Placemark(
            [55.63400638373573, 37.44271799999979],
            {
                name: "БЦ «Румянцево»",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/office.svg",
                balloonContentLayout: BalloonContentBlue,
            }
        );
        var bccomcity = new ymaps.Placemark(
            [55.633647, 37.432022],
            {
                name: "БЦ «Comcity»",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/office.svg",
                balloonContentLayout: BalloonContentBlue,
            }
        );
        var tcfamilyroom = new ymaps.Placemark(
            [55.630031, 37.423602],
            {
                name: "ТЦ «Family Room»",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/shop.svg",
                balloonContentLayout: BalloonContentBlue,
            }
        );
        var tcsalaris = new ymaps.Placemark(
            [55.623569, 37.422243],
            {
                name: "ТЦ «Саларис»",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/shop.svg",
                balloonContentLayout: BalloonContentBlue,
            }
        );
        var neopolis = new ymaps.Placemark(
            [55.62747, 37.412273],
            {
                name: "Neopolis",
            },
            {
                iconLayout: "default#image",
                iconImageHref: "../images/useful/svg/neopolis.svg",
                balloonContentLayout: BalloonContentBlue,
            }
        );

        // Функция анимации пути.
        function playAnimation() {
            secondAnimatedLine.reset();
            thirdAnimatedLine.reset();
            fourthAnimatedLine.reset();
            fifthAnimatedLine.reset();
            sixthAnimatedLine.reset();
            seventhAnimatedLine.reset();
            eighthAnimatedLine.reset();
            ninethAnimatedLine.reset();
            tenthAnimatedLine.reset();
            eleventhAnimatedLine.reset();
            twelvesAnimatedLine.reset();
            thirdteenthAnimatedLine.reset();
            fourteenthAnimatedLine.reset();
            fifteenthAnimatedLine.reset();
            sixteenthAnimatedLine.reset();
            seventeenthAnimatedLine.reset();
            eighteenthAnimatedLine.reset();
            nineteenthAnimatedLine.reset();
            twentiesAnimatedLine.reset();
            twentyfirstAnimatedLine.reset();
            twentysecondAnimatedLine.reset();
            twentythirdAnimatedLine.reset();
            twentyfourthAnimatedLine.reset();
            twentyfifthAnimatedLine.reset();
            twentysixthAnimatedLine.reset();
            twentyseventhAnimatedLine.reset();
            twentyeighthAnimatedLine.reset();
            twentyninthAnimatedLine.reset();
            thirtyAnimatedLine.reset();
            thirtyfirstAnimatedLine.reset();
            thirtysecondAnimatedLine.reset();

            myMap.geoObjects.add(firstPoint);

            firstAnimatedLine
                .animate()
                .then(function () {
                    return secondAnimatedLine.animate();
                })
                .then(function () {
                    myMap.geoObjects.add(firstPoint);
                    return thirdAnimatedLine.animate();
                })
                .then(function () {
                    myMap.geoObjects.add(secondPoint);
                    return fourthAnimatedLine.animate();
                })
                .then(function () {
                    return fifthAnimatedLine.animate();
                })
                .then(function () {
                    return sixthAnimatedLine.animate();
                })
                .then(function () {
                    return seventhAnimatedLine.animate();
                })
                .then(function () {
                    return eighthAnimatedLine.animate();
                })
                .then(function () {
                    return ninethAnimatedLine.animate();
                })
                .then(function () {
                    return tenthAnimatedLine.animate();
                })
                .then(function () {
                    return eleventhAnimatedLine.animate();
                })
                .then(function () {
                    return twelvesAnimatedLine.animate();
                })
                .then(function () {
                    return thirdteenthAnimatedLine.animate();
                })
                .then(function () {
                    return fourteenthAnimatedLine.animate();
                })
                .then(function () {
                    myMap.geoObjects.add(thirdPoint);
                    return fifteenthAnimatedLine.animate();
                })
                .then(function () {
                    return sixteenthAnimatedLine.animate();
                })
                .then(function () {
                    return seventeenthAnimatedLine.animate();
                })
                .then(function () {
                    myMap.geoObjects.add(fourthPoint);
                    return eighteenthAnimatedLine.animate();
                })
                .then(function () {
                    myMap.geoObjects.add(fifthPoint);
                    return nineteenthAnimatedLine.animate();
                })
                .then(function () {
                    myMap.geoObjects.add(sixthPoint);
                    return twentiesAnimatedLine.animate();
                })
                .then(function () {
                    return twentyfirstAnimatedLine.animate();
                })
                .then(function () {
                    return twentysecondAnimatedLine.animate();
                })
                .then(function () {
                    myMap.geoObjects.add(sevenPoint);
                    return twentythirdAnimatedLine.animate();
                })
                .then(function () {
                    return twentyfourthAnimatedLine.animate();
                })
                .then(function () {
                    myMap.geoObjects.add(eightPoint);
                    return twentyfifthAnimatedLine.animate();
                })
                .then(function () {
                    myMap.geoObjects.add(ninePoint);
                    return twentysixthAnimatedLine.animate();
                })
                .then(function () {
                    return twentyseventhAnimatedLine.animate();
                })
                .then(function () {
                    myMap.geoObjects.add(tenPoint);
                    return twentyeighthAnimatedLine.animate();
                })
                .then(function () {
                    return twentyninthAnimatedLine.animate();
                })
                .then(function () {
                    return thirtyAnimatedLine.animate();
                })
                .then(function () {
                    return thirtyfirstAnimatedLine.animate();
                })
                .then(function () {
                    return thirtysecondAnimatedLine.animate();
                })
                .then(function () {
                    myMap.geoObjects.add(elevenPoint);
                });
        }
        playAnimation();

        myMap.controls.add("zoomControl");
        myMap.controls.add("trafficControl");
        myMap.controls.add("geolocationControl");
        myMap.controls.add("rulerControl");

        myMap.geoObjects.add(ttk).add(sadovoe_kolco).add(leninskiy_prospect).add(skolkovo).add(vnukovo).add(bcrumyancevo).add(bcg10).add(bccomcity).add(tcfamilyroom).add(tcsalaris).add(neopolis);
    }
}
$(document).ready(function () {
    if ($(".plans__inner").length) {
        // plans
        $(".plans__slider-nav").on("click", function () {
            var $this = $(this),
                $slideIndex = $this.data("index");
            if ($this.hasClass("active")) {
                return false;
            }
            $this.siblings(".plans__slider-nav.active").removeClass("active");
            $this.addClass("active");
            $(".plans__slider").slick("slickGoTo", $slideIndex);
        });

        // plans slider
        var plansSlider = $(".plans__slider");
        var prevIndex;
        var currentIndex;

        plansSlider.on("init", function () {
            $(".plans__name_mobile").text($(".plans__slider-nav.active").find("span").text());
        });

        plansSlider.slick({
            infinite: true,
            dots: false,
            arrows: true,
            prevArrow: ".plans__arrow.arrow-prev",
            nextArrow: ".plans__arrow.arrow-next",
            speed: 600,
            easing: "ease-in-out",
        });

        plansSlider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            prevIndex = currentSlide;
            currentIndex = nextSlide;
        });

        plansSlider.on("afterChange", function (slick, currentSlide) {
            $(".plans__slider-nav.active").removeClass("active");
            $('.plans__slider-nav[data-index="' + currentIndex + '"]').addClass("active");
            $(".plans__name_mobile").text($(".plans__slider-nav.active").find("span").text());
            animateRightSidebar(prevIndex, currentIndex);
        });

        plansSlider.on("wheel", function (e) {
            e.preventDefault();

            if (e.originalEvent.deltaY < 0) {
                $(this).slick("slickPrev");
            } else {
                $(this).slick("slickNext");
            }
        });

        var animateRightSidebar = function (currentIndex, nextIndex) {
            var sidebarTimeline = gsap.timeline({ paused: true });

            sidebarTimeline.fromTo(
                $('.js-slider-descr[data-slide="' + currentIndex + '"]').children(),
                { opacity: 1 },
                {
                    opacity: 0,
                    duration: 0.4,
                    stagger: 0.03,
                    onComplete: function () {
                        $('.js-slider-descr[data-slide="' + currentIndex + '"]').removeClass("active");
                        $('.js-slider-descr[data-slide="' + nextIndex + '"]').addClass("active");
                    },
                }
            );
            sidebarTimeline.fromTo($('.js-slider-descr[data-slide="' + nextIndex + '"]').children(), { opacity: 0 }, { opacity: 1, duration: 0.4, stagger: 0.03 });
            sidebarTimeline.play();
        };
    }
});
// gallery
$(document).ready(function () {
    if ($(".gallery__inner").length) {
        var choosedSlideIndex;
        var imgDescr;
        var imgSrc;
        var modalSlideBlock;
        var galleryMainSlider = $(".gallery__slider");
        var gallerySliderModal = $(".gallery__slider__modal");
        var gallerySlideBlock = galleryMainSlider.find(".gallery__slide-img");
        var gallerySliderAction = $(".gallery__actions__main-slider");
        var galleryModalSliderAction = $(".gallery__actions__modal-slider");
        var activeModalSlide;
        var modalSlideIndex;
        var modalSlideDescr;

        // gallery modal slider
        $(".gallery__slider").on("click", ".gallery__slide-img", function () {
            choosedSlideIndex = +$(this).data("sliderModalIndex");
            $(".gallery__slide")
                .not(".slick-cloned")
                .find(".gallery__slide-img")
                .each(function () {
                    imgDescr = $(this).data("photoDescr");
                    imgSrc = $(this).find("img").attr("src");
                    modalSlideBlock = '<div class="gallery__slider__modal__item h-object-fit" data-descr="' + imgDescr + '"><img src="' + imgSrc + '"></div>';
                    $(".gallery__slider__modal").append(modalSlideBlock);
                });
            $(".gallery__slider__modal").on("init", function (event, slick) {
                activeModalSlide = $(".gallery__slider__modal__item.slick-active");
                modalSlideIndex = activeModalSlide.data("slickIndex") + 1;
                modalSlideDescr = activeModalSlide.data("descr");

                $(".photo_index").text(modalSlideIndex);
                $(".ptoho_descr").text(modalSlideDescr);
            });
            $(".gallery__slider__modal").slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                speed: 800,
                nextArrow: ".slider__modal__next",
                prevArrow: ".slider__modal__prev",
                initialSlide: choosedSlideIndex,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            swipe: false,
                        },
                    },
                ],
            });
            $(".gallery__slider__modal").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
                var nextModalSlide = $('.gallery__slider__modal__item[data-slick-index="' + nextSlide + '"]');
                modalSlideDescr = nextModalSlide.data("descr");

                $(".photo_index").text(nextSlide + 1);
                $(".ptoho_descr").text(modalSlideDescr);
            });

            gallerySliderAction.hide();
            galleryModalSliderAction.fadeIn(500);
            $(".gallery__slider").addClass("unvisible");
            $(".gallery__slider__modal__wrap").addClass("active");
            showDialog();
        });

        $(document).on("click", ".slider__modal__close", function () {
            $(".gallery__slider__modal__wrap").removeClass("active");
            galleryModalSliderAction.hide();
            gallerySliderAction.fadeIn(500);
            $(".gallery__slider").removeClass("unvisible");
            closeDialog();
            setTimeout(function () {
                $(".gallery__slider__modal").slick("unslick");
                $(".gallery__slider__modal").empty();
            }, 550);
        });

        // gallery main slider
        galleryMainSlider.on("init", function (event, slick) {
            $(".slick-counter__current").text(slick.currentSlide + 1 > 9 ? slick.currentSlide + 1 : "0" + (slick.currentSlide + 1));
            $(".slick-counter__total").text(slick.slideCount > 9 ? slick.slideCount : "0" + slick.slideCount);

            gallerySlideBlock.each(function (i) {
                $(this).attr("data-slider-modal-index", i);
            });
        });
        galleryMainSlider.slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            speed: 800,
            nextArrow: ".gallery-next",
            prevArrow: ".gallery-prev",
        });
        galleryMainSlider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            $(".slick-counter__current").text(nextSlide + 1 > 9 ? nextSlide + 1 : "0" + (nextSlide + 1));
        });

        function mobileSlider() {
            if ($(window).width() < 992 && $(".gallery__slider").hasClass("slick-initialized")) {
                galleryMainSlider.slick("unslick");
            } else if ($(window).width() > 992 && !$(".gallery__slider").hasClass("slick-initialized")) {
                galleryMainSlider.slick({
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: true,
                    speed: 800,
                    nextArrow: ".gallery-next",
                    prevArrow: ".gallery-prev",
                });
            }
        }
        mobileSlider();
        $(window).on("resize", mobileSlider);
    }

    // news content page
    if ($(".content__slider").length) {
        $(".content__slider").on("init", function (event, slick) {
            $(".slider-counter__current").text(slick.currentSlide + 1 > 9 ? slick.currentSlide + 1 : "0" + (slick.currentSlide + 1));
            $(".slider-counter__total").text(slick.slideCount > 9 ? slick.slideCount : "0" + slick.slideCount);
        });
        $(".content__slider").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            speed: 1200,
            nextArrow: ".content__photo-next",
            prevArrow: ".content__photo-prev",
        });
        $(".content__slider").on("beforeChange", function (event, slick, currentSlide, nextSlide) {
            $(".slider-counter__current").text(nextSlide + 1 > 9 ? nextSlide + 1 : "0" + (nextSlide + 1));
        });
    }
});
$(document).ready(function () {
    // sticky block news content page
    if ($(".news-content__aside__inner").length) {
        $(".news-content__aside__inner").stick_in_parent({
            offset_top: 65,
        });
    }

    // sticky block news page
    if ($(".section-news__side-main").length) {
        $(".side-main__inner").stick_in_parent({
            offset_top: 150,
        });
    }
});
$(document).ready(function () {
    if ($(".section-about").length) {
        setTimeout(function () {
            AOS.init();
        }, 3000);

        //About
        var appendFlag = true;
        var presentationBtn = $(".section-about__info-presentation").clone();
        var awwardDesc = $(".section-about__awward-desc").clone();

        $(window).on("load resize", function (e) {
            if ($(window).width() < 992) {
                if (appendFlag) {
                    $(".section-about__info").find(".section-about__info-presentation").remove();
                    $(".section-about__awward").find(".section-about__awward-desc").remove();
                    presentationBtn.appendTo(".section-about__parameters");
                    awwardDesc.insertAfter(".section-about__info-list");
                }
                appendFlag = false;
            } else {
                if (!appendFlag) {
                    $(".section-about__parameters").find(".section-about__info-presentation").remove();
                    presentationBtn.appendTo(".section-about__info");
                    $(".section-about__info-list").find(".section-about__awward-desc").remove();
                    awwardDesc.appendTo(".section-about__awward");
                }
                appendFlag = true;
            }
        });
    }
});
$(document).ready(function () {
    var newsBlock;
    var newsTimeline = gsap.timeline({ paused: true });
    var loadFLag = true;

    $(".js-load-news").on("click", function () {
        $.ajax({
            url: "s/data/news.json",
            dataType: "json",
            success: function (res) {
                buildList(res);
            },
        });
        $(this).closest(".all-news-block").hide();
        newsTimeline.play();
    });
    var buildList = function (data) {
        for (var i = 0; i < data.length; i++) {
            newsBlock = '<a href="' + data[i].link + '" class="news-block news-block__loaded">';
            newsBlock += '<div class="news-block__date">';
            newsBlock += '<span class="news-block__day">' + data[i].day + "</span>";
            newsBlock += '<span class="news-block__month">' + data[i].month + "</span>";
            newsBlock += '<span class="news-block__year">' + data[i].year + "</span>";
            newsBlock += "</div>";
            newsBlock += '<div class="news-block__info">';
            newsBlock += '<p class="news-block__text">' + data[i].text + "</p>";
            newsBlock += "</div>";
            newsBlock += '<div class="news-block__image">';
            newsBlock += '<div class="news-block__image__inner h-object-fit"><img src="' + data[i].img + '" alt="news"></div>';
            newsBlock += "</div>";
            newsBlock += "</a>";
            $(".all-news-block").before(newsBlock);
        }
        newsTimeline.fromTo($(document).find(".news-block__loaded"), { opacity: 0, y: "80" }, { opacity: 1, y: 0, duration: 0.3, stagger: 0.07 });
    };

    $(window).on("scroll", function (e) {
        if ($(window).width() < 992) {
            if ($(document).height() - $(window).scrollTop() - $(window).height() < 50) {
                if (loadFLag) {
                    $.ajax({
                        url: "s/data/news.json",
                        dataType: "json",
                        success: function (res) {
                            buildList(res);
                        },
                    });
                    $(this).closest(".all-news-block").hide();
                    newsTimeline.play();
                }
                loadFLag = false;
            }
        }
    });
});

// the main code

// modal open fix
var scrlTop;
$(window).on("scroll", function () {
    scrlTop = `${window.scrollY}px`;
});
var showDialog = function () {
    var body = document.body;
    body.style.position = "fixed";
    body.style.width = "100%";
    body.style.top = `-${scrlTop}`;
};
var closeDialog = function () {
    var body = document.body;
    var scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    body.style.width = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
};

// line clamp
if ($(".section-news__side-list").length) {
    $(".section-news__side-list").each(function (i, item) {
        var item = $(this).find(".news-block__text").get(0);
        $clamp(item, { clamp: 4 });
    });
}

// parallax
if ($(".parallaxie").length) {
    $(".parallaxie").parallaxie({
        speed: 0.5,
    });
}

$(window).on("load", function () {
    // $('.loader').fadeOut().end().delay(400);
}); /* Start:"a:4:{s:4:"full";s:65:"/local/templates/neopolis/js/lib/sticky-kit.min.js?17188217152798";s:6:"source";s:50:"/local/templates/neopolis/js/lib/sticky-kit.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function () {
    var b, f;
    b = this.jQuery || window.jQuery;
    f = b(window);
    b.fn.stick_in_parent = function (d) {
        var A, w, J, n, B, K, p, q, k, E, t;
        null == d && (d = {});
        t = d.sticky_class;
        B = d.inner_scrolling;
        E = d.recalc_every;
        k = d.parent;
        q = d.offset_top;
        p = d.spacer;
        w = d.bottoming;
        null == q && (q = 0);
        null == k && (k = void 0);
        null == B && (B = !0);
        null == t && (t = "is_stuck");
        A = b(document);
        null == w && (w = !0);
        J = function (a, d, n, C, F, u, r, G) {
            var v, H, m, D, I, c, g, x, y, z, h, l;
            if (!a.data("sticky_kit")) {
                a.data("sticky_kit", !0);
                I = A.height();
                g = a.parent();
                null != k && (g = g.closest(k));
                if (!g.length) throw "failed to find stick parent";
                v = m = !1;
                (h = null != p ? p && a.closest(p) : b("<div />")) && h.css("position", a.css("position"));
                x = function () {
                    var c, f, e;
                    if (
                        !G &&
                        ((I = A.height()),
                        (c = parseInt(g.css("border-top-width"), 10)),
                        (f = parseInt(g.css("padding-top"), 10)),
                        (d = parseInt(g.css("padding-bottom"), 10)),
                        (n = g.offset().top + c + f),
                        (C = g.height()),
                        m && ((v = m = !1), null == p && (a.insertAfter(h), h.detach()), a.css({ position: "", top: "", width: "", bottom: "" }).removeClass(t), (e = !0)),
                        (F = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - q),
                        (u = a.outerHeight(!0)),
                        (r = a.css("float")),
                        h && h.css({ width: a.outerWidth(!0), height: u, display: a.css("display"), "vertical-align": a.css("vertical-align"), float: r }),
                        e)
                    )
                        return l();
                };
                x();
                if (u !== C)
                    return (
                        (D = void 0),
                        (c = q),
                        (z = E),
                        (l = function () {
                            var b, l, e, k;
                            if (
                                !G &&
                                ((e = !1),
                                null != z && (--z, 0 >= z && ((z = E), x(), (e = !0))),
                                e || A.height() === I || x(),
                                (e = f.scrollTop()),
                                null != D && (l = e - D),
                                (D = e),
                                m
                                    ? (w && ((k = e + u + c > C + n), v && !k && ((v = !1), a.css({ position: "fixed", bottom: "", top: c }).trigger("sticky_kit:unbottom"))),
                                      e < F &&
                                          ((m = !1),
                                          (c = q),
                                          null == p && (("left" !== r && "right" !== r) || a.insertAfter(h), h.detach()),
                                          (b = { position: "", width: "", top: "" }),
                                          a.css(b).removeClass(t).trigger("sticky_kit:unstick")),
                                      B && ((b = f.height()), u + q > b && !v && ((c -= l), (c = Math.max(b - u, c)), (c = Math.min(q, c)), m && a.css({ top: c + "px" }))))
                                    : e > F &&
                                      ((m = !0),
                                      (b = { position: "fixed", top: c }),
                                      (b.width = "border-box" === a.css("box-sizing") ? a.outerWidth() + "px" : a.width() + "px"),
                                      a.css(b).addClass(t),
                                      null == p && (a.after(h), ("left" !== r && "right" !== r) || h.append(a)),
                                      a.trigger("sticky_kit:stick")),
                                m && w && (null == k && (k = e + u + c > C + n), !v && k))
                            )
                                return (v = !0), "static" === g.css("position") && g.css({ position: "relative" }), a.css({ position: "absolute", bottom: d, top: "auto" }).trigger("sticky_kit:bottom");
                        }),
                        (y = function () {
                            x();
                            return l();
                        }),
                        (H = function () {
                            G = !0;
                            f.off("touchmove", l);
                            f.off("scroll", l);
                            f.off("resize", y);
                            b(document.body).off("sticky_kit:recalc", y);
                            a.off("sticky_kit:detach", H);
                            a.removeData("sticky_kit");
                            a.css({ position: "", bottom: "", top: "", width: "" });
                            g.position("position", "");
                            if (m) return null == p && (("left" !== r && "right" !== r) || a.insertAfter(h), h.remove()), a.removeClass(t);
                        }),
                        f.on("touchmove", l),
                        f.on("scroll", l),
                        f.on("resize", y),
                        b(document.body).on("sticky_kit:recalc", y),
                        a.on("sticky_kit:detach", H),
                        setTimeout(l, 0)
                    );
            }
        };
        n = 0;
        for (K = this.length; n < K; n++) (d = this[n]), J(b(d));
        return this;
    };
}.call(this)); /* Start:"a:4:{s:4:"full";s:69:"/local/templates/neopolis/js/jquery.maskedinput.min.js?17188217153568";s:6:"source";s:54:"/local/templates/neopolis/js/jquery.maskedinput.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

/* End */
/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
	Version: 1.3.1
*/
(function (e) {
    function t() {
        var e = document.createElement("input"),
            t = "onpaste";
        return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input";
    }
    var n,
        a = t() + ".mask",
        r = navigator.userAgent,
        i = /iphone/i.test(r),
        o = /android/i.test(r);
    (e.mask = { definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" }, dataName: "rawMaskFn", placeholder: "_" }),
        e.fn.extend({
            caret: function (e, t) {
                var n;
                if (0 !== this.length && !this.is(":hidden"))
                    return "number" == typeof e
                        ? ((t = "number" == typeof t ? t : e),
                          this.each(function () {
                              this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((n = this.createTextRange()), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select());
                          }))
                        : (this[0].setSelectionRange
                              ? ((e = this[0].selectionStart), (t = this[0].selectionEnd))
                              : document.selection && document.selection.createRange && ((n = document.selection.createRange()), (e = 0 - n.duplicate().moveStart("character", -1e5)), (t = e + n.text.length)),
                          { begin: e, end: t });
            },
            unmask: function () {
                return this.trigger("unmask");
            },
            mask: function (t, r) {
                var c, l, s, u, f, h;
                return !t && this.length > 0
                    ? ((c = e(this[0])), c.data(e.mask.dataName)())
                    : ((r = e.extend({ placeholder: e.mask.placeholder, completed: null }, r)),
                      (l = e.mask.definitions),
                      (s = []),
                      (u = h = t.length),
                      (f = null),
                      e.each(t.split(""), function (e, t) {
                          "?" == t ? (h--, (u = e)) : l[t] ? (s.push(RegExp(l[t])), null === f && (f = s.length - 1)) : s.push(null);
                      }),
                      this.trigger("unmask").each(function () {
                          function c(e) {
                              for (; h > ++e && !s[e]; );
                              return e;
                          }
                          function d(e) {
                              for (; --e >= 0 && !s[e]; );
                              return e;
                          }
                          function m(e, t) {
                              var n, a;
                              if (!(0 > e)) {
                                  for (n = e, a = c(t); h > n; n++)
                                      if (s[n]) {
                                          if (!(h > a && s[n].test(R[a]))) break;
                                          (R[n] = R[a]), (R[a] = r.placeholder), (a = c(a));
                                      }
                                  b(), x.caret(Math.max(f, e));
                              }
                          }
                          function p(e) {
                              var t, n, a, i;
                              for (t = e, n = r.placeholder; h > t; t++)
                                  if (s[t]) {
                                      if (((a = c(t)), (i = R[t]), (R[t] = n), !(h > a && s[a].test(i)))) break;
                                      n = i;
                                  }
                          }
                          function g(e) {
                              var t,
                                  n,
                                  a,
                                  r = e.which;
                              8 === r || 46 === r || (i && 127 === r)
                                  ? ((t = x.caret()), (n = t.begin), (a = t.end), 0 === a - n && ((n = 46 !== r ? d(n) : (a = c(n - 1))), (a = 46 === r ? c(a) : a)), k(n, a), m(n, a - 1), e.preventDefault())
                                  : 27 == r && (x.val(S), x.caret(0, y()), e.preventDefault());
                          }
                          function v(t) {
                              var n,
                                  a,
                                  i,
                                  l = t.which,
                                  u = x.caret();
                              t.ctrlKey ||
                                  t.altKey ||
                                  t.metaKey ||
                                  32 > l ||
                                  (l &&
                                      (0 !== u.end - u.begin && (k(u.begin, u.end), m(u.begin, u.end - 1)),
                                      (n = c(u.begin - 1)),
                                      h > n && ((a = String.fromCharCode(l)), s[n].test(a) && (p(n), (R[n] = a), b(), (i = c(n)), o ? setTimeout(e.proxy(e.fn.caret, x, i), 0) : x.caret(i), r.completed && i >= h && r.completed.call(x))),
                                      t.preventDefault()));
                          }
                          function k(e, t) {
                              var n;
                              for (n = e; t > n && h > n; n++) s[n] && (R[n] = r.placeholder);
                          }
                          function b() {
                              x.val(R.join(""));
                          }
                          function y(e) {
                              var t,
                                  n,
                                  a = x.val(),
                                  i = -1;
                              for (t = 0, pos = 0; h > t; t++)
                                  if (s[t]) {
                                      for (R[t] = r.placeholder; pos++ < a.length; )
                                          if (((n = a.charAt(pos - 1)), s[t].test(n))) {
                                              (R[t] = n), (i = t);
                                              break;
                                          }
                                      if (pos > a.length) break;
                                  } else R[t] === a.charAt(pos) && t !== u && (pos++, (i = t));
                              return e ? b() : u > i + 1 ? (x.val(""), k(0, h)) : (b(), x.val(x.val().substring(0, i + 1))), u ? t : f;
                          }
                          var x = e(this),
                              R = e.map(t.split(""), function (e) {
                                  return "?" != e ? (l[e] ? r.placeholder : e) : void 0;
                              }),
                              S = x.val();
                          x.data(e.mask.dataName, function () {
                              return e
                                  .map(R, function (e, t) {
                                      return s[t] && e != r.placeholder ? e : null;
                                  })
                                  .join("");
                          }),
                              x.attr("readonly") ||
                                  x
                                      .one("unmask", function () {
                                          x.unbind(".mask").removeData(e.mask.dataName);
                                      })
                                      .bind("focus.mask", function () {
                                          clearTimeout(n);
                                          var e;
                                          (S = x.val()),
                                              (e = y()),
                                              (n = setTimeout(function () {
                                                  b(), e == t.length ? x.caret(0, e) : x.caret(e);
                                              }, 10));
                                      })
                                      .bind("blur.mask", function () {
                                          y(), x.val() != S && x.change();
                                      })
                                      .bind("keydown.mask", g)
                                      .bind("keypress.mask", v)
                                      .bind(a, function () {
                                          setTimeout(function () {
                                              var e = y(!0);
                                              x.caret(e), r.completed && e == x.val().length && r.completed.call(x);
                                          }, 0);
                                      }),
                              y();
                      }));
            },
        });
})(jQuery); /* Start:"a:4:{s:4:"full";s:57:"/local/templates/neopolis/js/jquery.add.js?17188217159620";s:6:"source";s:42:"/local/templates/neopolis/js/jquery.add.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
var $workingMain = function () {
    initGlobal();
    initUserActions();
};

if (window.frameCacheVars !== undefined) {
    if (window.frameCacheVars.AUTO_UPDATE == false) {
        BX.ready($workingMain);
    } else {
        BX.addCustomEvent("onFrameDataReceived", $workingMain);
    }
} else {
    BX.ready($workingMain);
}

function initGlobal() {
    console.log("go!");

    $(document).on("click", "[data-box-ajax] [data-btn-ajax-load]", function () {
        var $url = $(this).data("url-load"),
            $params = $(this).data("params"),
            $loadBox = $(this).data("load-box"),
            $page = $(this).data("page"),
            $thisBtn = $(this),
            $uid = "data-box-ajax",
            $ajax = $("body").data($uid);

        if ($ajax) {
            $ajax.abort();
        }

        $ajax = $.ajax({
            url: $url,
            type: "GET",
            data: {
                ajax: "Y",
            },
        }).done(function (data) {
            data = "<div>" + data + "</div>";
            var $items = $(data)
                    .find("#" + $loadBox + " [data-box-items]")
                    .html(),
                $btn = $(data).find("#" + $loadBox + " [data-btn-ajax-load]");

            $("body")
                .find("#" + $loadBox + " [data-box-items]")
                .append($items);

            if ($btn.length > 0) {
                $thisBtn.data("url-load", $btn.data("url-load"));
            } else {
                $thisBtn.parent().remove();
            }
        });
        $("body").data($uid, $ajax);

        return false;
    });

    setTimeout(function () {
        document.getElementById("loader-wrapper").classList.add("loaded");
    }, 2400);
    setTimeout(function () {
        document.getElementById("loader-wrapper").remove();
    }, 2900);
}

/**
 * Действия пользователя
 */
function initUserActions() {
    var ajaxPath = "/local/tools/.ajax/user.php";

    /**
     * Подписка
     */
    $(document).on("click", "#form-subscribe .btn", function () {
        var _ajax = $("#form-subscribe").data("ajax");
        if (_ajax) {
            _ajax.abort();
        }
        _ajax = $.ajax({
            url: ajaxPath,
            type: "POST",
            data: {
                mail: $("#form-subscribe input[name=EMAIL]").val(),
                action: "addSubscribe",
            },
        }).done(function (data) {
            if (data == "ok") {
                getMessage("Вы успешно подписаны на рассылку.", "message", 5000);
            } else if (data == "not") {
                getMessage("Ошибка, подписаться на рассылку не удалось. Проверьте правильность ввода E-mail.", "error", 5000);
            } else if (data == "double") {
                getMessage("Вы уже подписывались на рассылку ранее.", "message", 5000);
            }
        });
        $("#form-subscribe").data("ajax", _ajax);
        return false;
    });
}

/**
 * Склонение окончаний существительных
 * @param $type
 * @constructor
 */
function DeclensionEnding($type) {
    var $countWord = $type.split(" ");
    if ($countWord.length == 1 && $type.substr($type.length - 1, 1) == "а") {
        $type = $type.substr(0, $type.length - 1) + "у";
    } else if ($countWord.length > 1) {
        $.each($countWord, function (key, value) {
            if (value.substr(value.length - 1, 1) == "а") {
                $countWord[key] = value.substr(0, value.length - 1) + "у";
            } else if (value.substr(value.length - 2, 2) == "ая") {
                $countWord[key] = value.substr(0, value.length - 2) + "ую";
            }
        });
        $type = $countWord.join(" ");
    }
    return $type;
}

/**
 * Форматирование числа
 * @param n
 * @returns {string}
 */
function formatInt(n) {
    return (n + "")
        .split("")
        .reverse()
        .join("")
        .replace(/(\d{3})/g, "$1 ")
        .split("")
        .reverse()
        .join("")
        .replace(/^ /, "");
}
/**
 * Аналог функции in_array в PHP
 * @param needle
 * @param haystack
 * @param strict
 *
 * @returns {boolean}
 */
function in_array(needle, haystack, strict) {
    // Checks if a value exists in an array
    var found = false,
        key,
        strict = !!strict;
    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            found = true;
            break;
        }
    }
    return found;
}

/**
 * Склонение слов
 * @param num
 * @param expressions
 * @returns {*}
 *
 * Пример: declension(1, ['пользователь','пользователя','пользователей'])
 */
function declension(num, expressions) {
    var result;
    count = num % 100;
    if (count >= 5 && count <= 20) {
        result = expressions["2"];
    } else {
        count = count % 10;
        if (count == 1) {
            result = expressions["0"];
        } else if (count >= 2 && count <= 4) {
            result = expressions["1"];
        } else {
            result = expressions["2"];
        }
    }
    return result;
}

/**
 * Плагин склонения, пример
 * @https://github.com/kalys/jquery.russian-declension
 *
 * $('.days').russian_declension();
 * <div class="days" data-one="день" data-several="дня" data-many="дней">7</div>
 * <div class="days" data-one="день" data-several="дня" data-many="дней">1</div>
 * <div class="days" data-one="день" data-several="дня" data-many="дней">2</div
 *
 *
 * $('span.guest').russian_declension({one: "гость", several:"гостя", many: "гостей"});
 */
(function ($, window, undefined) {
    var pluginName = "russian_declension",
        document = window.document,
        defaults = {
            one: "",
            several: "",
            many: "",
            zero: "",
        };

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype.init = function () {
        var title_keys = ["one", "several", "many"];
        var titles = [];
        for (i = 0; i <= 2; i++) {
            if ($(this.element).data(title_keys[i])) {
                titles.push($(this.element).data(title_keys[i]));
            } else {
                titles.push(this.options[title_keys[i]]);
            }
        }

        var number = parseInt($(this.element).html());

        if (!number) {
            number = 0;
        }

        var zero_title = this.options["zero"] || $(this.element).data("zero");
        var title = this.pluralize(number, titles);

        if (number == 0 && zero_title) {
            $(this.element).html(zero_title);
        } else {
            $(this.element).html(number + " " + title);
        }
    };

    Plugin.prototype.pluralize = function (number, titles) {
        var cases = [2, 0, 1, 1, 1, 2];
        return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };

    $(window).on("load", function () {
        $("[data-rudecle]").russian_declension();
    });
})(jQuery, window);

Share = {
    vkontakte: function (purl, ptitle, pimg) {
        url = "http://vkontakte.ru/share.php?";
        url += "url=" + encodeURIComponent(purl);
        url += "&title=" + encodeURIComponent(ptitle);
        url += "&image=" + encodeURIComponent(pimg);
        url += "&noparse=true";
        Share.popup(url);
    },
    odnoklassniki: function (purl, text) {
        url = "http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1";
        url += "&st.comments=" + encodeURIComponent(text);
        url += "&st._surl=" + encodeURIComponent(purl);
        Share.popup(url);
    },
    facebook: function (purl, ptitle, pimg) {
        url = "http://www.facebook.com/sharer.php?";
        url += "u=" + encodeURIComponent(purl);
        url += "&picture=" + encodeURIComponent(pimg);
        url += "&title=" + encodeURIComponent(ptitle);
        Share.popup(url);
    },
    twitter: function (purl, ptitle) {
        url = "http://twitter.com/intent/tweet?";
        url += "text=" + encodeURIComponent(ptitle);
        url += "&url=" + encodeURIComponent(purl);
        Share.popup(url);
    },
    telegram: function (purl, ptitle) {
        url = "https://telegram.me/share/url?";
        url += "url=" + encodeURIComponent(purl);
        url += "&text=" + encodeURIComponent(ptitle);
        Share.popup(url);
    },
    mailru: function (purl, ptitle, pimg, text) {
        url = "http://connect.mail.ru/share?";
        url += "url=" + encodeURIComponent(purl);
        url += "&title=" + encodeURIComponent(ptitle);
        url += "&description=" + encodeURIComponent(text);
        url += "&imageurl=" + encodeURIComponent(pimg);
        Share.popup(url);
    },

    popup: function (url) {
        window.open(url, "", "toolbar=0,status=0,width=626,height=436");
    },
};

$.fn.toggleText = function () {
    if (this.text() == $(this).data("before-text")) this.text($(this).data("after-text"));
    else this.text($(this).data("before-text"));
    return this;
};

$.log = function (message) {
    console.log(message);
};

function dbg(message) {
    console.log(message);
} /* Start:"a:4:{s:4:"full";s:62:"/local/templates/neopolis/js/jquery.messages.js?17188217151198";s:6:"source";s:47:"/local/templates/neopolis/js/jquery.messages.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
function getMessage(msg, type, delay) {
    switch (type) {
        case "error":
            cssClass = "red-popup-thor";
            break;
        case "accept":
            cssClass = "popup-thor";
            break;
        case "message":
        default:
            cssClass = "green-popup-thor";
    }

    if (delay == undefined) {
        delay = 3000;
    }

    if ($("#message-box").length == 0) {
        $("body").append('<div class="tip-message" id="message-box"><div class="tip-hold"><a href="#" class="btn-close" onclick="$(this).parents(\'#message-box\').remove();return false;">close</a><span>' + msg + "</span></div></div>");
    } else {
        if ($("#message-box").css("display") == "none") {
            $("#message-box").removeClass("red-popup-thor green-popup-thor popup-thor").addClass(cssClass).find("span").html(msg);
        } else {
            $("#message-box").remove();
            $("body").append('<div class="tip-message" id="message-box"><div class="tip-hold"><a href="#" class="btn-close">close</a><span>' + msg + "</span></div></div>");
        }
    }
    $("#message-box").addClass(cssClass);
    $("#message-box").fadeIn(200).delay(delay).fadeOut(400);
} /* /local/templates/neopolis/js/main.js?1718821715339229*/ /* /local/templates/neopolis/js/lib/sticky-kit.min.js?17188217152798*/ /* /local/templates/neopolis/js/jquery.maskedinput.min.js?17188217153568*/ /* /local/templates/neopolis/js/jquery.add.js?17188217159620*/ /* /local/templates/neopolis/js/jquery.messages.js?17188217151198*/
/* End */
