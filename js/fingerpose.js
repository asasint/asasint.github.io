! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.fp = e() : t.fp = e()
}("undefined" != typeof self ? self : this, function() {
    return r = {}, i.m = n = [function(t, e, n) {
        "use strict";
        n.r(e);
        var r = {};

        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        n.r(r), n.d(r, "DirectionLeftGesture", function() {
            return C
        }), n.d(r, "DirectionRightGesture", function() {
            return A
        });
        var _ = {
                Thumb: 0,
                Index: 1,
                Middle: 2,
                Ring: 3,
                Pinky: 4,
                all: [0, 1, 2, 3, 4],
                nameMapping: {
                    0: "Thumb",
                    1: "Index",
                    2: "Middle",
                    3: "Ring",
                    4: "Pinky"
                },
                pointsMapping: {
                    0: [
                        [0, 1],
                        [1, 2],
                        [2, 3],
                        [3, 4]
                    ],
                    1: [
                        [0, 5],
                        [5, 6],
                        [6, 7],
                        [7, 8]
                    ],
                    2: [
                        [0, 9],
                        [9, 10],
                        [10, 11],
                        [11, 12]
                    ],
                    3: [
                        [0, 13],
                        [13, 14],
                        [14, 15],
                        [15, 16]
                    ],
                    4: [
                        [0, 17],
                        [17, 18],
                        [18, 19],
                        [19, 20]
                    ]
                },
                getName: function(t) {
                    return void 0 !== i(this.nameMapping[t]) && this.nameMapping[t]
                },
                getPoints: function(t) {
                    return void 0 !== i(this.pointsMapping[t]) && this.pointsMapping[t]
                }
            },
            g = {
                NoCurl: 0,
                HalfCurl: 1,
                FullCurl: 2,
                nameMapping: {
                    0: "No Curl",
                    1: "Half Curl",
                    2: "Full Curl"
                },
                getName: function(t) {
                    return void 0 !== i(this.nameMapping[t]) && this.nameMapping[t]
                }
            },
            h = {
                VerticalUp: 0,
                VerticalDown: 1,
                HorizontalLeft: 2,
                HorizontalRight: 3,
                DiagonalUpRight: 4,
                DiagonalUpLeft: 5,
                DiagonalDownRight: 6,
                DiagonalDownLeft: 7,
                nameMapping: {
                    0: "Vertical Up",
                    1: "Vertical Down",
                    2: "Horizontal Left",
                    3: "Horizontal Right",
                    4: "Diagonal Up Right",
                    5: "Diagonal Up Left",
                    6: "Diagonal Down Right",
                    7: "Diagonal Down Left"
                },
                getName: function(t) {
                    return void 0 !== i(this.nameMapping[t]) && this.nameMapping[t]
                }
            };

        function I(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = function(t) {
                        if (t) {
                            if ("string" == typeof t) return l(t, void 0);
                            var e = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(e) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? l(t, void 0) : void 0
                        }
                    }(t))) {
                    var e = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, i, o = !0,
                a = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return o = t.done, t
                },
                e: function(t) {
                    a = !0, i = t
                },
                f: function() {
                    try {
                        o || null == r.return || r.return()
                    } finally {
                        if (a) throw i
                    }
                }
            }
        }

        function l(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        function a(e, t) {
            var n, r = Object.keys(e);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(e), t && (n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), r.push.apply(r, n)), r
        }

        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var u = (o(c.prototype, [{
            key: "estimate",
            value: function(t) {
                var e, n = [],
                    r = [],
                    i = I(_.all);
                try {
                    for (i.s(); !(e = i.n()).done;) {
                        var o, a = e.value,
                            l = _.getPoints(a),
                            u = [],
                            c = [],
                            s = I(l);
                        try {
                            for (s.s(); !(o = s.n()).done;) {
                                var f = o.value,
                                    h = t[f[0]],
                                    d = t[f[1]],
                                    p = this.getSlopes(h, d),
                                    y = p[0],
                                    v = p[1];
                                u.push(y), c.push(v)
                            }
                        } catch (t) {
                            s.e(t)
                        } finally {
                            s.f()
                        }
                        n.push(u), r.push(c)
                    }
                } catch (t) {
                    i.e(t)
                } finally {
                    i.f()
                }
                var g, m = [],
                    b = [],
                    w = I(_.all);
                try {
                    for (w.s(); !(g = w.n()).done;) {
                        var O = g.value,
                            D = O == _.Thumb ? 1 : 0,
                            M = _.getPoints(O),
                            S = t[M[D][0]],
                            C = t[M[1 + D][1]],
                            T = t[M[3][1]],
                            A = this.estimateFingerCurl(S, C, T),
                            R = this.calculateFingerDirection(S, C, T, n[O].slice(D));
                        m[O] = A, b[O] = R
                    }
                } catch (t) {
                    w.e(t)
                } finally {
                    w.f()
                }
                return {
                    curls: m,
                    directions: b
                }
            }
        }, {
            key: "getSlopes",
            value: function(t, e) {
                var n = this.calculateSlope(t[0], t[1], e[0], e[1]);
                return 2 == t.length ? n : [n, this.calculateSlope(t[1], t[2], e[1], e[2])]
            }
        }, {
            key: "angleOrientationAt",
            value: function(t) {
                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = 0,
                    r = 0,
                    i = 0;
                return 75 <= t && t <= 105 ? n = +e : 25 <= t && t <= 155 ? r = +e : i = +e, [n, r, i]
            }
        }, {
            key: "estimateFingerCurl",
            value: function(t, e, n) {
                var r = t[0] - e[0],
                    i = t[0] - n[0],
                    o = e[0] - n[0],
                    a = t[1] - e[1],
                    l = t[1] - n[1],
                    u = e[1] - n[1],
                    c = t[2] - e[2],
                    s = t[2] - n[2],
                    f = e[2] - n[2],
                    h = Math.sqrt(r * r + a * a + c * c),
                    d = Math.sqrt(i * i + l * l + s * s),
                    p = Math.sqrt(o * o + u * u + f * f),
                    y = (p * p + h * h - d * d) / (2 * p * h);
                1 < y ? y = 1 : y < -1 && (y = -1);
                var v = Math.acos(y);
                return (v = 57.2958 * v % 180) > this.options.NO_CURL_START_LIMIT ? g.NoCurl : v > this.options.HALF_CURL_START_LIMIT ? g.HalfCurl : g.FullCurl
            }
        }, {
            key: "estimateHorizontalDirection",
            value: function(t, e, n, r) {
                return r == Math.abs(t) ? 0 < t ? h.HorizontalLeft : h.HorizontalRight : r == Math.abs(e) ? 0 < e ? h.HorizontalLeft : h.HorizontalRight : 0 < n ? h.HorizontalLeft : h.HorizontalRight
            }
        }, {
            key: "estimateVerticalDirection",
            value: function(t, e, n, r) {
                return r == Math.abs(t) ? t < 0 ? h.VerticalDown : h.VerticalUp : r == Math.abs(e) ? e < 0 ? h.VerticalDown : h.VerticalUp : n < 0 ? h.VerticalDown : h.VerticalUp
            }
        }, {
            key: "estimateDiagonalDirection",
            value: function(t, e, n, r, i, o, a, l) {
                var u = this.estimateVerticalDirection(t, e, n, r),
                    c = this.estimateHorizontalDirection(i, o, a, l);
                return u == h.VerticalUp ? c == h.HorizontalLeft ? h.DiagonalUpLeft : h.DiagonalUpRight : c == h.HorizontalLeft ? h.DiagonalDownLeft : h.DiagonalDownRight
            }
        }, {
            key: "calculateFingerDirection",
            value: function(t, e, n, r) {
                var i = t[0] - e[0],
                    o = t[0] - n[0],
                    a = e[0] - n[0],
                    l = t[1] - e[1],
                    u = t[1] - n[1],
                    c = e[1] - n[1],
                    s = Math.max(Math.abs(i), Math.abs(o), Math.abs(a)),
                    f = Math.max(Math.abs(l), Math.abs(u), Math.abs(c)),
                    h = 0,
                    d = 0,
                    p = 0,
                    y = f / (s + 1e-5);
                1.5 < y ? h += this.options.DISTANCE_VOTE_POWER : .66 < y ? d += this.options.DISTANCE_VOTE_POWER : p += this.options.DISTANCE_VOTE_POWER;
                var v = Math.sqrt(i * i + l * l),
                    g = Math.sqrt(o * o + u * u),
                    m = Math.sqrt(a * a + c * c),
                    b = Math.max(v, g, m),
                    w = t[0],
                    O = t[1],
                    D = n[0],
                    M = n[1];
                b == v ? (D = n[0], M = n[1]) : b == m && (w = e[0], O = e[1]);
                var S = [w, O],
                    C = [D, M],
                    T = this.getSlopes(S, C),
                    A = this.angleOrientationAt(T, this.options.TOTAL_ANGLE_VOTE_POWER);
                h += A[0], d += A[1], p += A[2];
                var R, _ = I(r);
                try {
                    for (_.s(); !(R = _.n()).done;) {
                        var j = R.value,
                            E = this.angleOrientationAt(j, this.options.SINGLE_ANGLE_VOTE_POWER);
                        h += E[0], d += E[1], p += E[2]
                    }
                } catch (t) {
                    _.e(t)
                } finally {
                    _.f()
                }
                return h == Math.max(h, d, p) ? this.estimateVerticalDirection(u, l, c, f) : p == Math.max(d, p) ? this.estimateHorizontalDirection(o, i, a, s) : this.estimateDiagonalDirection(u, l, c, f, o, i, a, s)
            }
        }, {
            key: "calculateSlope",
            value: function(t, e, n, r) {
                var i = (e - r) / (t - n),
                    o = 180 * Math.atan(i) / Math.PI;
                return o <= 0 ? o = -o : 0 < o && (o = 180 - o), o
            }
        }]), c);

        function c(t) {
            ! function(t) {
                if (!(t instanceof c)) throw new TypeError("Cannot call a class as a function")
            }(this), this.options = function(i) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(o), !0).forEach(function(t) {
                        var e, n, r;
                        e = i, r = o[n = t], n in e ? Object.defineProperty(e, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = r
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach(function(t) {
                        Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(o, t))
                    })
                }
                return i
            }({}, {
                HALF_CURL_START_LIMIT: 60,
                NO_CURL_START_LIMIT: 130,
                DISTANCE_VOTE_POWER: 1.1,
                SINGLE_ANGLE_VOTE_POWER: .9,
                TOTAL_ANGLE_VOTE_POWER: 1.6
            }, {}, t)
        }

        function d(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = function(t) {
                        if (t) {
                            if ("string" == typeof t) return s(t, void 0);
                            var e = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(e) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? s(t, void 0) : void 0
                        }
                    }(t))) {
                    var e = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, i, o = !0,
                a = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return o = t.done, t
                },
                e: function(t) {
                    a = !0, i = t
                },
                f: function() {
                    try {
                        o || null == r.return || r.return()
                    } finally {
                        if (a) throw i
                    }
                }
            }
        }

        function s(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        function f(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var p = (f(y.prototype, [{
            key: "estimate",
            value: function(t, e) {
                var n, r = [],
                    i = this.estimator.estimate(t),
                    o = [],
                    a = d(_.all);
                try {
                    for (a.s(); !(n = a.n()).done;) {
                        var l = n.value;
                        o.push([_.getName(l), g.getName(i.curls[l]), h.getName(i.directions[l])])
                    }
                } catch (t) {
                    a.e(t)
                } finally {
                    a.f()
                }
                var u, c = d(this.gestures);
                try {
                    for (c.s(); !(u = c.n()).done;) {
                        var s = u.value,
                            f = s.matchAgainst(i.curls, i.directions);
                        e <= f && r.push({
                            name: s.name,
                            confidence: f
                        })
                    }
                } catch (t) {
                    c.e(t)
                } finally {
                    c.f()
                }
                return {
                    poseData: o,
                    gestures: r
                }
            }
        }]), y);

        function y(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            (function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            })(this, y), this.estimator = new u(e), this.gestures = t
        }

        function b(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                    } catch (t) {
                        i = !0, o = t
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                }
            }(t, e) || v(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function w(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = v(t))) {
                    var e = 0,
                        n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: n
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, i, o = !0,
                a = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]()
                },
                n: function() {
                    var t = r.next();
                    return o = t.done, t
                },
                e: function(t) {
                    a = !0, i = t
                },
                f: function() {
                    try {
                        o || null == r.return || r.return()
                    } finally {
                        if (a) throw i
                    }
                }
            }
        }

        function v(t, e) {
            if (t) {
                if ("string" == typeof t) return m(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? m(t, e) : void 0
            }
        }

        function m(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r
        }

        function O(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        var D = (O(S.prototype, [{
                key: "addCurl",
                value: function(t, e, n) {
                    void 0 === this.curls[t] && (this.curls[t] = []), this.curls[t].push([e, n])
                }
            }, {
                key: "addDirection",
                value: function(t, e, n) {
                    void 0 === this.directions[t] && (this.directions[t] = []), this.directions[t].push([e, n])
                }
            }, {
                key: "setWeight",
                value: function(t, e) {
                    this.weights[t] = e;
                    var n = this.weights.reduce(function(t, e) {
                        return t + e
                    }, 0);
                    this.weightsRelative = this.weights.map(function(t) {
                        return 5 * t / n
                    })
                }
            }, {
                key: "matchAgainst",
                value: function(t, e) {
                    var n = 0;
                    for (var r in t) {
                        var i = t[r],
                            o = this.curls[r];
                        if (void 0 !== o) {
                            var a, l = w(o);
                            try {
                                for (l.s(); !(a = l.n()).done;) {
                                    var u = b(a.value, 2),
                                        c = u[0],
                                        s = u[1];
                                    if (i == c) {
                                        n += s * this.weightsRelative[r];
                                        break
                                    }
                                }
                            } catch (t) {
                                l.e(t)
                            } finally {
                                l.f()
                            }
                        } else n += this.weightsRelative[r]
                    }
                    for (var f in e) {
                        var h = e[f],
                            d = this.directions[f];
                        if (void 0 !== d) {
                            var p, y = w(d);
                            try {
                                for (y.s(); !(p = y.n()).done;) {
                                    var v = b(p.value, 2),
                                        g = v[0],
                                        m = v[1];
                                    if (h == g) {
                                        n += m * this.weightsRelative[f];
                                        break
                                    }
                                }
                            } catch (t) {
                                y.e(t)
                            } finally {
                                y.f()
                            }
                        } else n += this.weightsRelative[f]
                    }
                    return n
                }
            }]), S),
            M = new D("directionLeft");

        function S(t) {
            ! function(t) {
                if (!(t instanceof S)) throw new TypeError("Cannot call a class as a function")
            }(this), this.name = t, this.curls = {}, this.directions = {}, this.weights = [1, 1, 1, 1, 1], this.weightsRelative = [1, 1, 1, 1, 1]
        }
        M.addCurl(_.Thumb, g.NoCurl, 1), M.addDirection(_.Thumb, h.VerticalUp, 1), M.addCurl(_.Index, g.NoCurl, 1), M.addDirection(_.Index, h.HorizontalLeft, 1), M.addCurl(_.Middle, g.FullCurl, 1), M.addCurl(_.Ring, g.FullCurl, 1), M.addCurl(_.Pinky, g.FullCurl, 1), M.setWeight(_.Index, 2), M.setWeight(_.Thumb, 2);
        var C = M,
            T = new D("directionRight");
        T.addCurl(_.Thumb, g.NoCurl, 1), T.addDirection(_.Thumb, h.VerticalUp, 1), T.addCurl(_.Index, g.NoCurl, 1), T.addDirection(_.Index, h.HorizontalRight, 1), T.addDirection(_.Index, h.DiagonalUpRight, 1), T.addCurl(_.Middle, g.FullCurl, 1), T.addCurl(_.Ring, g.FullCurl, 1), T.addCurl(_.Pinky, g.FullCurl, 1), T.setWeight(_.Index, 2), T.setWeight(_.Thumb, 2);
        var A = T;
        e.default = {
            GestureEstimator: p,
            GestureDescription: D,
            Finger: _,
            FingerCurl: g,
            FingerDirection: h,
            Gestures: r
        }
    }], i.c = r, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(n, r, function(t) {
                return e[t]
            }.bind(null, r));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 0).default;

    function i(t) {
        if (r[t]) return r[t].exports;
        var e = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return n[t].call(e.exports, e, e.exports, i), e.l = !0, e.exports
    }
    var n, r
});