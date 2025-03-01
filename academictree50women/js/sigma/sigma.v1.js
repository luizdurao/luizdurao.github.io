var Sigma;
(() => {
    var t = {
            796: (t) => {
                t.exports = function (t, e) {
                    var r = e.length;
                    if (0 !== r) {
                        var i = t.length;
                        t.length += r;
                        for (var n = 0; n < r; n++) t[i + n] = e[n];
                    }
                };
            },
            187: (t) => {
                "use strict";
                var e,
                    r = "object" == typeof Reflect ? Reflect : null,
                    i =
                        r && "function" == typeof r.apply
                            ? r.apply
                            : function (t, e, r) {
                                  return Function.prototype.apply.call(t, e, r);
                              };
                e =
                    r && "function" == typeof r.ownKeys
                        ? r.ownKeys
                        : Object.getOwnPropertySymbols
                        ? function (t) {
                              return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
                          }
                        : function (t) {
                              return Object.getOwnPropertyNames(t);
                          };
                var n =
                    Number.isNaN ||
                    function (t) {
                        return t != t;
                    };
                function o() {
                    o.init.call(this);
                }
                (t.exports = o),
                    (t.exports.once = function (t, e) {
                        return new Promise(function (r, i) {
                            function n(r) {
                                t.removeListener(e, o), i(r);
                            }
                            function o() {
                                "function" == typeof t.removeListener && t.removeListener("error", n), r([].slice.call(arguments));
                            }
                            g(t, e, o, { once: !0 }),
                                "error" !== e &&
                                    (function (t, e, r) {
                                        "function" == typeof t.on && g(t, "error", e, { once: !0 });
                                    })(t, n);
                        });
                    }),
                    (o.EventEmitter = o),
                    (o.prototype._events = void 0),
                    (o.prototype._eventsCount = 0),
                    (o.prototype._maxListeners = void 0);
                var a = 10;
                function s(t) {
                    if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
                }
                function h(t) {
                    return void 0 === t._maxListeners ? o.defaultMaxListeners : t._maxListeners;
                }
                function l(t, e, r, i) {
                    var n, o, a, l;
                    if (
                        (s(r),
                        void 0 === (o = t._events) ? ((o = t._events = Object.create(null)), (t._eventsCount = 0)) : (void 0 !== o.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), (o = t._events)), (a = o[e])),
                        void 0 === a)
                    )
                        (a = o[e] = r), ++t._eventsCount;
                    else if (("function" == typeof a ? (a = o[e] = i ? [r, a] : [a, r]) : i ? a.unshift(r) : a.push(r), (n = h(t)) > 0 && a.length > n && !a.warned)) {
                        a.warned = !0;
                        var c = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                        (c.name = "MaxListenersExceededWarning"), (c.emitter = t), (c.type = e), (c.count = a.length), (l = c), console && console.warn && console.warn(l);
                    }
                    return t;
                }
                function c() {
                    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), (this.fired = !0), 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
                }
                function u(t, e, r) {
                    var i = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
                        n = c.bind(i);
                    return (n.listener = r), (i.wrapFn = n), n;
                }
                function d(t, e, r) {
                    var i = t._events;
                    if (void 0 === i) return [];
                    var n = i[e];
                    return void 0 === n
                        ? []
                        : "function" == typeof n
                        ? r
                            ? [n.listener || n]
                            : [n]
                        : r
                        ? (function (t) {
                              for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
                              return e;
                          })(n)
                        : p(n, n.length);
                }
                function f(t) {
                    var e = this._events;
                    if (void 0 !== e) {
                        var r = e[t];
                        if ("function" == typeof r) return 1;
                        if (void 0 !== r) return r.length;
                    }
                    return 0;
                }
                function p(t, e) {
                    for (var r = new Array(e), i = 0; i < e; ++i) r[i] = t[i];
                    return r;
                }
                function g(t, e, r, i) {
                    if ("function" == typeof t.on) i.once ? t.once(e, r) : t.on(e, r);
                    else {
                        if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
                        t.addEventListener(e, function n(o) {
                            i.once && t.removeEventListener(e, n), r(o);
                        });
                    }
                }
                Object.defineProperty(o, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                    set: function (t) {
                        if ("number" != typeof t || t < 0 || n(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                        a = t;
                    },
                }),
                    (o.init = function () {
                        (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) || ((this._events = Object.create(null)), (this._eventsCount = 0)), (this._maxListeners = this._maxListeners || void 0);
                    }),
                    (o.prototype.setMaxListeners = function (t) {
                        if ("number" != typeof t || t < 0 || n(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                        return (this._maxListeners = t), this;
                    }),
                    (o.prototype.getMaxListeners = function () {
                        return h(this);
                    }),
                    (o.prototype.emit = function (t) {
                        for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
                        var n = "error" === t,
                            o = this._events;
                        if (void 0 !== o) n = n && void 0 === o.error;
                        else if (!n) return !1;
                        if (n) {
                            var a;
                            if ((e.length > 0 && (a = e[0]), a instanceof Error)) throw a;
                            var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                            throw ((s.context = a), s);
                        }
                        var h = o[t];
                        if (void 0 === h) return !1;
                        if ("function" == typeof h) i(h, this, e);
                        else {
                            var l = h.length,
                                c = p(h, l);
                            for (r = 0; r < l; ++r) i(c[r], this, e);
                        }
                        return !0;
                    }),
                    (o.prototype.addListener = function (t, e) {
                        return l(this, t, e, !1);
                    }),
                    (o.prototype.on = o.prototype.addListener),
                    (o.prototype.prependListener = function (t, e) {
                        return l(this, t, e, !0);
                    }),
                    (o.prototype.once = function (t, e) {
                        return s(e), this.on(t, u(this, t, e)), this;
                    }),
                    (o.prototype.prependOnceListener = function (t, e) {
                        return s(e), this.prependListener(t, u(this, t, e)), this;
                    }),
                    (o.prototype.removeListener = function (t, e) {
                        var r, i, n, o, a;
                        if ((s(e), void 0 === (i = this._events))) return this;
                        if (void 0 === (r = i[t])) return this;
                        if (r === e || r.listener === e) 0 == --this._eventsCount ? (this._events = Object.create(null)) : (delete i[t], i.removeListener && this.emit("removeListener", t, r.listener || e));
                        else if ("function" != typeof r) {
                            for (n = -1, o = r.length - 1; o >= 0; o--)
                                if (r[o] === e || r[o].listener === e) {
                                    (a = r[o].listener), (n = o);
                                    break;
                                }
                            if (n < 0) return this;
                            0 === n
                                ? r.shift()
                                : (function (t, e) {
                                      for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                                      t.pop();
                                  })(r, n),
                                1 === r.length && (i[t] = r[0]),
                                void 0 !== i.removeListener && this.emit("removeListener", t, a || e);
                        }
                        return this;
                    }),
                    (o.prototype.off = o.prototype.removeListener),
                    (o.prototype.removeAllListeners = function (t) {
                        var e, r, i;
                        if (void 0 === (r = this._events)) return this;
                        if (void 0 === r.removeListener)
                            return 0 === arguments.length ? ((this._events = Object.create(null)), (this._eventsCount = 0)) : void 0 !== r[t] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete r[t]), this;
                        if (0 === arguments.length) {
                            var n,
                                o = Object.keys(r);
                            for (i = 0; i < o.length; ++i) "removeListener" !== (n = o[i]) && this.removeAllListeners(n);
                            return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
                        }
                        if ("function" == typeof (e = r[t])) this.removeListener(t, e);
                        else if (void 0 !== e) for (i = e.length - 1; i >= 0; i--) this.removeListener(t, e[i]);
                        return this;
                    }),
                    (o.prototype.listeners = function (t) {
                        return d(this, t, !0);
                    }),
                    (o.prototype.rawListeners = function (t) {
                        return d(this, t, !1);
                    }),
                    (o.listenerCount = function (t, e) {
                        return "function" == typeof t.listenerCount ? t.listenerCount(e) : f.call(t, e);
                    }),
                    (o.prototype.listenerCount = f),
                    (o.prototype.eventNames = function () {
                        return this._eventsCount > 0 ? e(this._events) : [];
                    });
            },
            186: (t) => {
                t.exports = function (t) {
                    return null !== t && "object" == typeof t && "function" == typeof t.addUndirectedEdgeWithKey && "function" == typeof t.dropNode && "boolean" == typeof t.multi;
                };
            },
            973: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, { default: () => i });
                const i = "precision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
            },
            912: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, { default: () => i });
                const i =
                    "attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_radius;\nattribute vec4 a_color;\nattribute vec3 a_barycentric;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadWidthLengthRatio = 0.66;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl and\n  // edge.clamped.vert.glsl. Please read it to get better comments on what's\n  // happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n  float adaptedWebGLNodeRadius = a_radius * 2.0 * u_correctionRatio * u_sqrtZoomRatio;\n  float adaptedWebGLArrowHeadLength = adaptedWebGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n  float adaptedWebGLArrowHeadHalfWidth = adaptedWebGLArrowHeadLength * arrowHeadWidthLengthRatio / 2.0;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * (adaptedWebGLNodeRadius * unitNormal.y)\n    + db * ((adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.y + adaptedWebGLArrowHeadHalfWidth * unitNormal.x)\n    + dc * ((adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.y - adaptedWebGLArrowHeadHalfWidth * unitNormal.x),\n\n      da * (-adaptedWebGLNodeRadius * unitNormal.x)\n    + db * (-(adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.x + adaptedWebGLArrowHeadHalfWidth * unitNormal.y)\n    + dc * (-(adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength) * unitNormal.x - adaptedWebGLArrowHeadHalfWidth * unitNormal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
            },
            620: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, { default: () => i });
                const i =
                    "attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\nattribute float a_radius;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\nconst float arrowHeadLengthThicknessRatio = 2.5;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // These first computations are taken from edge.vert.glsl. Please read it to\n  // get better comments on what's happening:\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n\n  // Here, we move the point to leave space for the arrow head:\n  float direction = sign(a_radius);\n  float adaptedWebGLNodeRadius = direction * a_radius * 2.0 * u_correctionRatio * u_sqrtZoomRatio;\n  float adaptedWebGLArrowHeadLength = adaptedWebGLThickness * 2.0 * arrowHeadLengthThicknessRatio;\n\n  vec2 compensationVector = vec2(-direction * unitNormal.y, direction * unitNormal.x) * (adaptedWebGLNodeRadius + adaptedWebGLArrowHeadLength);\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * adaptedWebGLThickness + compensationVector, 1)).xy, 0, 1);\n\n  v_thickness = webGLThickness / u_sqrtZoomRatio;\n\n  v_normal = unitNormal;\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
            },
            498: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, { default: () => i });
                const i =
                    "precision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float feather = 0.001;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, transparent, t);\n}\n";
            },
            223: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, { default: () => i });
                const i =
                    'attribute vec4 a_color;\nattribute vec2 a_normal;\nattribute vec2 a_position;\n\nuniform mat3 u_matrix;\nuniform float u_sqrtZoomRatio;\nuniform float u_correctionRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 1.7;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  float normalLength = length(a_normal);\n  vec2 unitNormal = a_normal / normalLength;\n\n  // We require edges to be at least `minThickness` pixels thick *on screen*\n  // (so we need to compensate the SQRT zoom ratio):\n  float pixelsThickness = max(normalLength, minThickness * u_sqrtZoomRatio);\n\n  // Then, we need to retrieve the normalized thickness of the edge in the WebGL\n  // referential (in a ([0, 1], [0, 1]) space), using our "magic" correction\n  // ratio:\n  float webGLThickness = pixelsThickness * u_correctionRatio;\n\n  // Finally, we adapt the edge thickness to the "SQRT rule" in sigma (so that\n  // items are not too big when zoomed in, and not too small when zoomed out).\n  // The exact computation should be `adapted = value * zoom / sqrt(zoom)`, but\n  // it\'s simpler like this:\n  float adaptedWebGLThickness = webGLThickness * u_sqrtZoomRatio;\n\n  // Here is the proper position of the vertex\n  gl_Position = vec4((u_matrix * vec3(a_position + unitNormal * adaptedWebGLThickness, 1)).xy, 0, 1);\n\n  // For the fragment shader though, we need a thickness that takes the "magic"\n  // correction ratio into account (as in webGLThickness), but so that the\n  // antialiasing effect does not depend on the zoom level. So here\'s yet\n  // another thickness version:\n  v_thickness = webGLThickness / u_sqrtZoomRatio;\n\n  v_normal = unitNormal;\n  v_color = a_color;\n  v_color.a *= bias;\n}\n';
            },
            262: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, { default: () => i });
                const i =
                    "precision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float radius = 0.5;\nconst vec4 transparent = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = radius - length(m);\n\n  float t = 0.0;\n  if (dist > v_border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / v_border;\n\n  gl_FragColor = mix(transparent, v_color, t);\n}\n";
            },
            106: (t, e, r) => {
                "use strict";
                r.r(e), r.d(e, { default: () => i });
                const i =
                    "attribute vec2 a_position;\nattribute float a_size;\nattribute vec4 a_color;\n\nuniform float u_ratio;\nuniform float u_scale;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size * u_ratio * u_scale * 2.0;\n\n  v_border = (1.0 / u_ratio) * (0.5 / a_size);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
            },
            764: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        }),
                    o =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var a = r(751),
                    s = o(r(358)),
                    h = r(928),
                    l = r(699),
                    c = 1.5,
                    u = (function (t) {
                        function e() {
                            var e = t.call(this) || this;
                            return (e.x = 0.5), (e.y = 0.5), (e.angle = 0), (e.ratio = 1), (e.minRatio = null), (e.maxRatio = null), (e.nextFrame = null), (e.previousState = null), (e.enabled = !0), (e.previousState = e.getState()), e;
                        }
                        return (
                            n(e, t),
                            (e.from = function (t) {
                                return new e().setState(t);
                            }),
                            (e.prototype.enable = function () {
                                return (this.enabled = !0), this;
                            }),
                            (e.prototype.disable = function () {
                                return (this.enabled = !1), this;
                            }),
                            (e.prototype.getState = function () {
                                return { x: this.x, y: this.y, angle: this.angle, ratio: this.ratio };
                            }),
                            (e.prototype.hasState = function (t) {
                                return this.x === t.x && this.y === t.y && this.ratio === t.ratio && this.angle === t.angle;
                            }),
                            (e.prototype.getPreviousState = function () {
                                var t = this.previousState;
                                return t ? { x: t.x, y: t.y, angle: t.angle, ratio: t.ratio } : null;
                            }),
                            (e.prototype.getBoundedRatio = function (t) {
                                var e = t;
                                return "number" == typeof this.minRatio && (e = Math.max(e, this.minRatio)), "number" == typeof this.maxRatio && (e = Math.min(e, this.maxRatio)), e;
                            }),
                            (e.prototype.validateState = function (t) {
                                var e = {};
                                return (
                                    "number" == typeof t.x && (e.x = t.x), "number" == typeof t.y && (e.y = t.y), "number" == typeof t.angle && (e.angle = t.angle), "number" == typeof t.ratio && (e.ratio = this.getBoundedRatio(t.ratio)), e
                                );
                            }),
                            (e.prototype.isAnimated = function () {
                                return !!this.nextFrame;
                            }),
                            (e.prototype.setState = function (t) {
                                if (!this.enabled) return this;
                                this.previousState = this.getState();
                                var e = this.validateState(t);
                                return (
                                    "number" == typeof e.x && (this.x = e.x),
                                    "number" == typeof e.y && (this.y = e.y),
                                    "number" == typeof e.angle && (this.angle = e.angle),
                                    "number" == typeof e.ratio && (this.ratio = e.ratio),
                                    this.hasState(this.previousState) || this.emit("updated", this.getState()),
                                    this
                                );
                            }),
                            (e.prototype.updateState = function (t) {
                                return this.setState(t(this.getState())), this;
                            }),
                            (e.prototype.animate = function (t, e, r) {
                                var i = this;
                                if (this.enabled) {
                                    var n = Object.assign({}, a.ANIMATE_DEFAULTS, e),
                                        o = this.validateState(t),
                                        l = "function" == typeof n.easing ? n.easing : s.default[n.easing],
                                        c = Date.now(),
                                        u = this.getState(),
                                        d = function () {
                                            var t = (Date.now() - c) / n.duration;
                                            if (t >= 1) return (i.nextFrame = null), i.setState(o), void (i.animationCallback && (i.animationCallback.call(null), (i.animationCallback = void 0)));
                                            var e = l(t),
                                                r = {};
                                            "number" == typeof o.x && (r.x = u.x + (o.x - u.x) * e),
                                                "number" == typeof o.y && (r.y = u.y + (o.y - u.y) * e),
                                                "number" == typeof o.angle && (r.angle = u.angle + (o.angle - u.angle) * e),
                                                "number" == typeof o.ratio && (r.ratio = u.ratio + (o.ratio - u.ratio) * e),
                                                i.setState(r),
                                                (i.nextFrame = (0, h.requestFrame)(d));
                                        };
                                    this.nextFrame ? ((0, h.cancelFrame)(this.nextFrame), this.animationCallback && this.animationCallback.call(null), (this.nextFrame = (0, h.requestFrame)(d))) : d(), (this.animationCallback = r);
                                }
                            }),
                            (e.prototype.animatedZoom = function (t) {
                                if (t) {
                                    if ("number" == typeof t) return this.animate({ ratio: this.ratio / t });
                                    this.animate({ ratio: this.ratio / (t.factor || c) }, t);
                                } else this.animate({ ratio: this.ratio / c });
                            }),
                            (e.prototype.animatedUnzoom = function (t) {
                                if (t) {
                                    if ("number" == typeof t) return this.animate({ ratio: this.ratio * t });
                                    this.animate({ ratio: this.ratio * (t.factor || c) }, t);
                                } else this.animate({ ratio: this.ratio * c });
                            }),
                            (e.prototype.animatedReset = function (t) {
                                this.animate({ x: 0.5, y: 0.5, ratio: 1, angle: 0 }, t);
                            }),
                            (e.prototype.copy = function () {
                                return e.from(this.getState());
                            }),
                            e
                        );
                    })(l.TypedEventEmitter);
                e.default = u;
            },
            291: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        }),
                    o =
                        (this && this.__assign) ||
                        function () {
                            return (
                                (o =
                                    Object.assign ||
                                    function (t) {
                                        for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                        return t;
                                    }),
                                o.apply(this, arguments)
                            );
                        };
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.getWheelDelta = e.getTouchCoords = e.getTouchesArray = e.getWheelCoords = e.getMouseCoords = e.getPosition = void 0);
                var a = r(699);
                function s(t, e) {
                    var r = e.getBoundingClientRect();
                    return { x: t.clientX - r.left, y: t.clientY - r.top };
                }
                function h(t, e) {
                    var r = o(o({}, s(t, e)), {
                        sigmaDefaultPrevented: !1,
                        preventSigmaDefault: function () {
                            r.sigmaDefaultPrevented = !0;
                        },
                        original: t,
                    });
                    return r;
                }
                function l(t) {
                    for (var e = [], r = 0, i = Math.min(t.length, 2); r < i; r++) e.push(t[r]);
                    return e;
                }
                function c(t) {
                    if (void 0 !== t.deltaY) return (-3 * t.deltaY) / 360;
                    if (void 0 !== t.detail) return t.detail / -9;
                    throw new Error("Captor: could not extract delta from event.");
                }
                (e.getPosition = s),
                    (e.getMouseCoords = h),
                    (e.getWheelCoords = function (t, e) {
                        return o(o({}, h(t, e)), { delta: c(t) });
                    }),
                    (e.getTouchesArray = l),
                    (e.getTouchCoords = function (t, e) {
                        return {
                            touches: l(t.touches).map(function (t) {
                                return s(t, e);
                            }),
                            original: t,
                        };
                    }),
                    (e.getWheelDelta = c);
                var u = (function (t) {
                    function e(e, r) {
                        var i = t.call(this) || this;
                        return (i.container = e), (i.renderer = r), i;
                    }
                    return n(e, t), e;
                })(a.TypedEventEmitter);
                e.default = u;
            },
            269: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        }),
                    o =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (t, e, r, i) {
                                  void 0 === i && (i = r),
                                      Object.defineProperty(t, i, {
                                          enumerable: !0,
                                          get: function () {
                                              return e[r];
                                          },
                                      });
                              }
                            : function (t, e, r, i) {
                                  void 0 === i && (i = r), (t[i] = e[r]);
                              }),
                    a =
                        (this && this.__setModuleDefault) ||
                        (Object.create
                            ? function (t, e) {
                                  Object.defineProperty(t, "default", { enumerable: !0, value: e });
                              }
                            : function (t, e) {
                                  t.default = e;
                              }),
                    s =
                        (this && this.__importStar) ||
                        function (t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t) for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && o(e, t, r);
                            return a(e, t), e;
                        };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var h = s(r(291)),
                    l = (function (t) {
                        function e(e, r) {
                            var i = t.call(this, e, r) || this;
                            return (
                                (i.enabled = !0),
                                (i.draggedEvents = 0),
                                (i.downStartTime = null),
                                (i.lastMouseX = null),
                                (i.lastMouseY = null),
                                (i.isMouseDown = !1),
                                (i.isMoving = !1),
                                (i.movingTimeout = null),
                                (i.startCameraState = null),
                                (i.clicks = 0),
                                (i.doubleClickTimeout = null),
                                (i.currentWheelDirection = 0),
                                (i.handleClick = i.handleClick.bind(i)),
                                (i.handleRightClick = i.handleRightClick.bind(i)),
                                (i.handleDown = i.handleDown.bind(i)),
                                (i.handleUp = i.handleUp.bind(i)),
                                (i.handleMove = i.handleMove.bind(i)),
                                (i.handleWheel = i.handleWheel.bind(i)),
                                (i.handleOut = i.handleOut.bind(i)),
                                e.addEventListener("click", i.handleClick, !1),
                                e.addEventListener("contextmenu", i.handleRightClick, !1),
                                e.addEventListener("mousedown", i.handleDown, !1),
                                e.addEventListener("wheel", i.handleWheel, !1),
                                e.addEventListener("mouseout", i.handleOut, !1),
                                document.addEventListener("mousemove", i.handleMove, !1),
                                document.addEventListener("mouseup", i.handleUp, !1),
                                i
                            );
                        }
                        return (
                            n(e, t),
                            (e.prototype.kill = function () {
                                var t = this.container;
                                t.removeEventListener("click", this.handleClick),
                                    t.removeEventListener("contextmenu", this.handleRightClick),
                                    t.removeEventListener("mousedown", this.handleDown),
                                    t.removeEventListener("wheel", this.handleWheel),
                                    t.removeEventListener("mouseout", this.handleOut),
                                    document.removeEventListener("mousemove", this.handleMove),
                                    document.removeEventListener("mouseup", this.handleUp);
                            }),
                            (e.prototype.handleClick = function (t) {
                                var e = this;
                                if (this.enabled) {
                                    if ((this.clicks++, 2 === this.clicks))
                                        return (this.clicks = 0), "number" == typeof this.doubleClickTimeout && (clearTimeout(this.doubleClickTimeout), (this.doubleClickTimeout = null)), this.handleDoubleClick(t);
                                    setTimeout(function () {
                                        (e.clicks = 0), (e.doubleClickTimeout = null);
                                    }, 300),
                                        this.draggedEvents < 3 && this.emit("click", (0, h.getMouseCoords)(t, this.container));
                                }
                            }),
                            (e.prototype.handleRightClick = function (t) {
                                this.enabled && this.emit("rightClick", (0, h.getMouseCoords)(t, this.container));
                            }),
                            (e.prototype.handleDoubleClick = function (t) {
                                if (this.enabled) {
                                    t.preventDefault(), t.stopPropagation();
                                    var e = (0, h.getMouseCoords)(t, this.container);
                                    if ((this.emit("doubleClick", e), !e.sigmaDefaultPrevented)) {
                                        var r = this.renderer.getCamera(),
                                            i = r.getBoundedRatio(r.getState().ratio / 2.2);
                                        r.animate(this.renderer.getViewportZoomedState((0, h.getPosition)(t, this.container), i), { easing: "quadraticInOut", duration: 200 });
                                    }
                                }
                            }),
                            (e.prototype.handleDown = function (t) {
                                if (this.enabled) {
                                    if (0 === t.button) {
                                        this.startCameraState = this.renderer.getCamera().getState();
                                        var e = (0, h.getPosition)(t, this.container),
                                            r = e.x,
                                            i = e.y;
                                        (this.lastMouseX = r), (this.lastMouseY = i), (this.draggedEvents = 0), (this.downStartTime = Date.now()), (this.isMouseDown = !0);
                                    }
                                    this.emit("mousedown", (0, h.getMouseCoords)(t, this.container));
                                }
                            }),
                            (e.prototype.handleUp = function (t) {
                                var e = this;
                                if (this.enabled && this.isMouseDown) {
                                    var r = this.renderer.getCamera();
                                    (this.isMouseDown = !1), "number" == typeof this.movingTimeout && (clearTimeout(this.movingTimeout), (this.movingTimeout = null));
                                    var i = (0, h.getPosition)(t, this.container),
                                        n = i.x,
                                        o = i.y,
                                        a = r.getState(),
                                        s = r.getPreviousState() || { x: 0, y: 0 };
                                    this.isMoving
                                        ? r.animate({ x: a.x + 3 * (a.x - s.x), y: a.y + 3 * (a.y - s.y) }, { duration: 200, easing: "quadraticOut" })
                                        : (this.lastMouseX === n && this.lastMouseY === o) || r.setState({ x: a.x, y: a.y }),
                                        (this.isMoving = !1),
                                        setTimeout(function () {
                                            (e.draggedEvents = 0), e.renderer.refresh();
                                        }, 0),
                                        this.emit("mouseup", (0, h.getMouseCoords)(t, this.container));
                                }
                            }),
                            (e.prototype.handleMove = function (t) {
                                var e = this;
                                if (this.enabled) {
                                    var r = (0, h.getMouseCoords)(t, this.container);
                                    if ((this.emit("mousemovebody", r), t.target === this.container && this.emit("mousemove", r), !r.sigmaDefaultPrevented && this.isMouseDown)) {
                                        (this.isMoving = !0),
                                            this.draggedEvents++,
                                            "number" == typeof this.movingTimeout && clearTimeout(this.movingTimeout),
                                            (this.movingTimeout = window.setTimeout(function () {
                                                (e.movingTimeout = null), (e.isMoving = !1);
                                            }, 100));
                                        var i = this.renderer.getCamera(),
                                            n = (0, h.getPosition)(t, this.container),
                                            o = n.x,
                                            a = n.y,
                                            s = this.renderer.viewportToFramedGraph({ x: this.lastMouseX, y: this.lastMouseY }),
                                            l = this.renderer.viewportToFramedGraph({ x: o, y: a }),
                                            c = s.x - l.x,
                                            u = s.y - l.y,
                                            d = i.getState(),
                                            f = d.x + c,
                                            p = d.y + u;
                                        i.setState({ x: f, y: p }), (this.lastMouseX = o), (this.lastMouseY = a), t.preventDefault(), t.stopPropagation();
                                    }
                                }
                            }),
                            (e.prototype.handleWheel = function (t) {
                                var e = this;
                                if (this.enabled) {
                                    t.preventDefault(), t.stopPropagation();
                                    var r = (0, h.getWheelDelta)(t);
                                    if (r) {
                                        var i = (0, h.getWheelCoords)(t, this.container);
                                        if ((this.emit("wheel", i), !i.sigmaDefaultPrevented)) {
                                            var n = r > 0 ? 1 / 1.7 : 1.7,
                                                o = this.renderer.getCamera(),
                                                a = o.getBoundedRatio(o.getState().ratio * n),
                                                s = r > 0 ? 1 : -1,
                                                l = Date.now();
                                            (this.currentWheelDirection === s && this.lastWheelTriggerTime && l - this.lastWheelTriggerTime < 50) ||
                                                (o.animate(this.renderer.getViewportZoomedState((0, h.getPosition)(t, this.container), a), { easing: "quadraticOut", duration: 250 }, function () {
                                                    e.currentWheelDirection = 0;
                                                }),
                                                (this.currentWheelDirection = s),
                                                (this.lastWheelTriggerTime = l));
                                        }
                                    }
                                }
                            }),
                            (e.prototype.handleOut = function () {}),
                            e
                        );
                    })(h.default);
                e.default = l;
            },
            508: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        }),
                    o =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (t, e, r, i) {
                                  void 0 === i && (i = r),
                                      Object.defineProperty(t, i, {
                                          enumerable: !0,
                                          get: function () {
                                              return e[r];
                                          },
                                      });
                              }
                            : function (t, e, r, i) {
                                  void 0 === i && (i = r), (t[i] = e[r]);
                              }),
                    a =
                        (this && this.__setModuleDefault) ||
                        (Object.create
                            ? function (t, e) {
                                  Object.defineProperty(t, "default", { enumerable: !0, value: e });
                              }
                            : function (t, e) {
                                  t.default = e;
                              }),
                    s =
                        (this && this.__importStar) ||
                        function (t) {
                            if (t && t.__esModule) return t;
                            var e = {};
                            if (null != t) for (var r in t) "default" !== r && Object.prototype.hasOwnProperty.call(t, r) && o(e, t, r);
                            return a(e, t), e;
                        },
                    h =
                        (this && this.__read) ||
                        function (t, e) {
                            var r = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!r) return t;
                            var i,
                                n,
                                o = r.call(t),
                                a = [];
                            try {
                                for (; (void 0 === e || e-- > 0) && !(i = o.next()).done; ) a.push(i.value);
                            } catch (t) {
                                n = { error: t };
                            } finally {
                                try {
                                    i && !i.done && (r = o.return) && r.call(o);
                                } finally {
                                    if (n) throw n.error;
                                }
                            }
                            return a;
                        };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var l = s(r(291)),
                    c = (function (t) {
                        function e(e, r) {
                            var i = t.call(this, e, r) || this;
                            return (
                                (i.enabled = !0),
                                (i.isMoving = !1),
                                (i.hasMoved = !1),
                                (i.touchMode = 0),
                                (i.startTouchesPositions = []),
                                (i.handleStart = i.handleStart.bind(i)),
                                (i.handleLeave = i.handleLeave.bind(i)),
                                (i.handleMove = i.handleMove.bind(i)),
                                e.addEventListener("touchstart", i.handleStart, !1),
                                e.addEventListener("touchend", i.handleLeave, !1),
                                e.addEventListener("touchcancel", i.handleLeave, !1),
                                e.addEventListener("touchmove", i.handleMove, !1),
                                i
                            );
                        }
                        return (
                            n(e, t),
                            (e.prototype.kill = function () {
                                var t = this.container;
                                t.removeEventListener("touchstart", this.handleStart),
                                    t.removeEventListener("touchend", this.handleLeave),
                                    t.removeEventListener("touchcancel", this.handleLeave),
                                    t.removeEventListener("touchmove", this.handleMove);
                            }),
                            (e.prototype.getDimensions = function () {
                                return { width: this.container.offsetWidth, height: this.container.offsetHeight };
                            }),
                            (e.prototype.dispatchRelatedMouseEvent = function (t, e, r, i) {
                                var n = r || e.touches[0],
                                    o = new MouseEvent(t, { clientX: n.clientX, clientY: n.clientY, altKey: e.altKey, ctrlKey: e.ctrlKey });
                                (o.isFakeSigmaMouseEvent = !0), (i || this.container).dispatchEvent(o);
                            }),
                            (e.prototype.handleStart = function (t) {
                                var e = this;
                                if (this.enabled) {
                                    t.preventDefault(), 1 === t.touches.length && this.dispatchRelatedMouseEvent("mousedown", t);
                                    var r = (0, l.getTouchesArray)(t.touches);
                                    if (
                                        ((this.touchMode = r.length),
                                        (this.startCameraState = this.renderer.getCamera().getState()),
                                        (this.startTouchesPositions = r.map(function (t) {
                                            return (0, l.getPosition)(t, e.container);
                                        })),
                                        (this.lastTouches = r),
                                        (this.lastTouchesPositions = this.startTouchesPositions),
                                        2 === this.touchMode)
                                    ) {
                                        var i = h(this.startTouchesPositions, 2),
                                            n = i[0],
                                            o = n.x,
                                            a = n.y,
                                            s = i[1],
                                            c = s.x,
                                            u = s.y;
                                        (this.startTouchesAngle = Math.atan2(u - a, c - o)), (this.startTouchesDistance = Math.sqrt(Math.pow(c - o, 2) + Math.pow(u - a, 2)));
                                    }
                                    this.emit("touchdown", (0, l.getTouchCoords)(t, this.container));
                                }
                            }),
                            (e.prototype.handleLeave = function (t) {
                                if (this.enabled) {
                                    switch (
                                        (t.preventDefault(),
                                        0 === t.touches.length &&
                                            this.lastTouches &&
                                            this.lastTouches.length &&
                                            (this.dispatchRelatedMouseEvent("mouseup", t, this.lastTouches[0], document), this.hasMoved || this.dispatchRelatedMouseEvent("click", t, this.lastTouches[0])),
                                        this.movingTimeout && ((this.isMoving = !1), clearTimeout(this.movingTimeout)),
                                        this.touchMode)
                                    ) {
                                        case 2:
                                            if (1 === t.touches.length) {
                                                this.handleStart(t), t.preventDefault();
                                                break;
                                            }
                                        case 1:
                                            if (this.isMoving) {
                                                var e = this.renderer.getCamera(),
                                                    r = e.getState(),
                                                    i = e.getPreviousState() || { x: 0, y: 0 };
                                                e.animate({ x: r.x + 3 * (r.x - i.x), y: r.y + 3 * (r.y - i.y) }, { duration: 200, easing: "quadraticOut" });
                                            }
                                            (this.hasMoved = !1), (this.isMoving = !1), (this.touchMode = 0);
                                    }
                                    this.emit("touchup", (0, l.getTouchCoords)(t, this.container));
                                }
                            }),
                            (e.prototype.handleMove = function (t) {
                                var e,
                                    r = this;
                                if (this.enabled) {
                                    t.preventDefault(), 1 === t.touches.length && this.dispatchRelatedMouseEvent("mousemove", t);
                                    var i = (0, l.getTouchesArray)(t.touches),
                                        n = i.map(function (t) {
                                            return (0, l.getPosition)(t, r.container);
                                        });
                                    if (
                                        ((this.lastTouches = i),
                                        (this.lastTouchesPositions = n),
                                        this.hasMoved ||
                                            (this.hasMoved = n.some(function (t, e) {
                                                var i = r.startTouchesPositions[e];
                                                return t.x !== i.x || t.y !== i.y;
                                            })),
                                        this.hasMoved)
                                    ) {
                                        (this.isMoving = !0),
                                            this.movingTimeout && clearTimeout(this.movingTimeout),
                                            (this.movingTimeout = window.setTimeout(function () {
                                                r.isMoving = !1;
                                            }, 200));
                                        var o = this.renderer.getCamera(),
                                            a = this.startCameraState;
                                        switch (this.touchMode) {
                                            case 1:
                                                var s = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]),
                                                    c = s.x,
                                                    u = s.y,
                                                    d = this.renderer.viewportToFramedGraph(n[0]),
                                                    f = d.x,
                                                    p = d.y;
                                                o.setState({ x: a.x + c - f, y: a.y + u - p });
                                                break;
                                            case 2:
                                                var g = {},
                                                    v = n[0],
                                                    m = v.x,
                                                    y = v.y,
                                                    b = n[1],
                                                    _ = b.x,
                                                    x = b.y,
                                                    w = Math.atan2(x - y, _ - m) - this.startTouchesAngle,
                                                    E = Math.hypot(x - y, _ - m) / this.startTouchesDistance,
                                                    L = o.getBoundedRatio(a.ratio / E);
                                                (g.ratio = L), (g.angle = a.angle + w);
                                                var F = this.getDimensions(),
                                                    C = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], { cameraState: a }),
                                                    A = Math.min(F.width, F.height),
                                                    T = A / F.width,
                                                    P = L / A;
                                                (p = y - A / 2 / (A / F.height)),
                                                    (f = (e = h([(f = m - A / 2 / T) * Math.cos(-g.angle) - p * Math.sin(-g.angle), p * Math.cos(-g.angle) + f * Math.sin(-g.angle)], 2))[0]),
                                                    (p = e[1]),
                                                    (g.x = C.x - f * P),
                                                    (g.y = C.y + p * P),
                                                    o.setState(g);
                                        }
                                        this.emit("touchmove", (0, l.getTouchCoords)(t, this.container));
                                    }
                                }
                            }),
                            e
                        );
                    })(l.default);
                e.default = c;
            },
            730: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.edgeLabelsToDisplayFromNodes = e.LabelGrid = void 0);
                var r = (function () {
                        function t(t, e) {
                            (this.key = t), (this.size = e);
                        }
                        return (
                            (t.compare = function (t, e) {
                                return t.size > e.size ? -1 : t.size < e.size || t.key > e.key ? 1 : -1;
                            }),
                            t
                        );
                    })(),
                    i = (function () {
                        function t() {
                            (this.width = 0), (this.height = 0), (this.cellSize = 0), (this.columns = 0), (this.rows = 0), (this.cells = {});
                        }
                        return (
                            (t.prototype.resizeAndClear = function (t, e) {
                                (this.width = t.width), (this.height = t.height), (this.cellSize = e), (this.columns = Math.ceil(t.width / e)), (this.rows = Math.ceil(t.height / e)), (this.cells = {});
                            }),
                            (t.prototype.getIndex = function (t) {
                                var e = Math.floor(t.x / this.cellSize);
                                return Math.floor(t.y / this.cellSize) * this.columns + e;
                            }),
                            (t.prototype.add = function (t, e, i) {
                                var n = new r(t, e),
                                    o = this.getIndex(i),
                                    a = this.cells[o];
                                a || ((a = []), (this.cells[o] = a)), a.push(n);
                            }),
                            (t.prototype.organize = function () {
                                for (var t in this.cells) this.cells[t].sort(r.compare);
                            }),
                            (t.prototype.getLabelsToDisplay = function (t, e) {
                                var r = this.cellSize * this.cellSize,
                                    i = ((r / t / t) * e) / r,
                                    n = Math.ceil(i),
                                    o = [];
                                for (var a in this.cells) for (var s = this.cells[a], h = 0; h < Math.min(n, s.length); h++) o.push(s[h].key);
                                return o;
                            }),
                            t
                        );
                    })();
                (e.LabelGrid = i),
                    (e.edgeLabelsToDisplayFromNodes = function (t) {
                        var e = t.graph,
                            r = t.hoveredNode,
                            i = t.highlightedNodes,
                            n = t.displayedNodeLabels,
                            o = [];
                        return (
                            e.forEachEdge(function (t, e, a, s) {
                                (a === r || s === r || i.has(a) || i.has(s) || (n.has(a) && n.has(s))) && o.push(t);
                            }),
                            o
                        );
                    });
            },
            134: function (t, e, r) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.rectangleCollidesWithQuad = e.squareCollidesWithQuad = e.getCircumscribedAlignedRectangle = e.isRectangleAligned = void 0);
                var n = i(r(796)),
                    o = !1;
                function a(t) {
                    return t.x1 === t.x2 || t.y1 === t.y2;
                }
                function s(t) {
                    var e = Math.sqrt(Math.pow(t.x2 - t.x1, 2) + Math.pow(t.y2 - t.y1, 2)),
                        r = ((t.y1 - t.y2) * t.height) / e,
                        i = ((t.x2 - t.x1) * t.height) / e,
                        n = { x: t.x1, y: t.y1 },
                        o = { x: t.x2, y: t.y2 },
                        a = { x: t.x1 + r, y: t.y1 + i },
                        s = { x: t.x2 + r, y: t.y2 + i },
                        h = Math.min(n.x, o.x, a.x, s.x),
                        l = Math.max(n.x, o.x, a.x, s.x),
                        c = Math.min(n.y, o.y, a.y, s.y);
                    return { x1: h, y1: c, x2: l, y2: c, height: Math.max(n.y, o.y, a.y, s.y) - c };
                }
                function h(t, e, r, i, n, o, a) {
                    return t < i + o && t + r > i && e < n + a && e + r > n;
                }
                function l(t, e, r, i, n, o, a, s) {
                    return t < n + a && t + r > n && e < o + s && e + i > o;
                }
                function c(t, e, r, i, n, o) {
                    var a = t < r + n / 2;
                    return e < i + o / 2 ? (a ? 1 : 2) : a ? 3 : 4;
                }
                (e.isRectangleAligned = a), (e.getCircumscribedAlignedRectangle = s), (e.squareCollidesWithQuad = h), (e.rectangleCollidesWithQuad = l);
                var u = (function () {
                    function t(t) {
                        var e;
                        void 0 === t && (t = {}), (this.containers = (((e = {})[5460] = []), e)), (this.cache = null), (this.lastRectangle = null);
                        var r = Math.pow(4, 5);
                        (this.data = new Float32Array(((4 * r - 1) / 3) * 4)), t.boundaries ? this.resize(t.boundaries) : this.resize({ x: 0, y: 0, width: 1, height: 1 });
                    }
                    return (
                        (t.prototype.add = function (t, e, r, i) {
                            return (
                                (function (t, e, r, i, n, a, s) {
                                    for (var l = n - s, c = a - s, u = 2 * s, d = 0, f = 0; ; ) {
                                        if (d >= 5) return (r[f] = r[f] || []), void r[f].push(i);
                                        var p = 4 * f + 4,
                                            g = 4 * f + 8,
                                            v = 4 * f + 12,
                                            m = 4 * f + 16,
                                            y = h(l, c, u, e[p + 0], e[p + 1], e[p + 2], e[p + 3]),
                                            b = h(l, c, u, e[g + 0], e[g + 1], e[g + 2], e[g + 3]),
                                            _ = h(l, c, u, e[v + 0], e[v + 1], e[v + 2], e[v + 3]),
                                            x = h(l, c, u, e[m + 0], e[m + 1], e[m + 2], e[m + 3]),
                                            w = [y, b, _, x].reduce(function (t, e) {
                                                return e ? t + 1 : t;
                                            }, 0);
                                        if (0 === w && 0 === d)
                                            return (
                                                r[5460].push(i),
                                                void (
                                                    !o &&
                                                    r[5460].length >= 5 &&
                                                    ((o = !0),
                                                    console.warn("sigma/quadtree.insertNode: At least 5 nodes are outside the global quadtree zone. You might have a problem with the normalization function or the custom bounding box."))
                                                )
                                            );
                                        if (0 === w) throw new Error("sigma/quadtree.insertNode: no collision (level: ".concat(d, ", key: ").concat(i, ", x: ").concat(n, ", y: ").concat(a, ", size: ").concat(s, ")."));
                                        if (3 === w) throw new Error("sigma/quadtree.insertNode: 3 impossible collisions (level: ".concat(d, ", key: ").concat(i, ", x: ").concat(n, ", y: ").concat(a, ", size: ").concat(s, ")."));
                                        if (w > 1) return (r[f] = r[f] || []), void r[f].push(i);
                                        d++, y && (f = p), b && (f = g), _ && (f = v), x && (f = m);
                                    }
                                })(0, this.data, this.containers, t, e, r, i),
                                this
                            );
                        }),
                        (t.prototype.resize = function (t) {
                            this.clear(),
                                (this.data[0] = t.x),
                                (this.data[1] = t.y),
                                (this.data[2] = t.width),
                                (this.data[3] = t.height),
                                (function (t, e) {
                                    for (var r = [0, 0]; r.length; ) {
                                        var i = r.pop(),
                                            n = r.pop(),
                                            o = 4 * n + 4,
                                            a = 4 * n + 8,
                                            s = 4 * n + 12,
                                            h = 4 * n + 16,
                                            l = e[n + 0],
                                            c = e[n + 1],
                                            u = e[n + 2] / 2,
                                            d = e[n + 3] / 2;
                                        (e[o + 0] = l),
                                            (e[o + 1] = c),
                                            (e[o + 2] = u),
                                            (e[o + 3] = d),
                                            (e[a + 0] = l + u),
                                            (e[a + 1] = c),
                                            (e[a + 2] = u),
                                            (e[a + 3] = d),
                                            (e[s + 0] = l),
                                            (e[s + 1] = c + d),
                                            (e[s + 2] = u),
                                            (e[s + 3] = d),
                                            (e[h + 0] = l + u),
                                            (e[h + 1] = c + d),
                                            (e[h + 2] = u),
                                            (e[h + 3] = d),
                                            i < 4 && (r.push(h, i + 1), r.push(s, i + 1), r.push(a, i + 1), r.push(o, i + 1));
                                    }
                                })(0, this.data);
                        }),
                        (t.prototype.clear = function () {
                            var t;
                            return (this.containers = (((t = {})[5460] = []), t)), this;
                        }),
                        (t.prototype.point = function (t, e) {
                            var r = this.containers[5460].slice(),
                                i = 0,
                                o = 0;
                            do {
                                this.containers[i] && (0, n.default)(r, this.containers[i]), (i = 4 * i + 4 * c(t, e, this.data[i + 0], this.data[i + 1], this.data[i + 2], this.data[i + 3])), o++;
                            } while (o <= 5);
                            return r;
                        }),
                        (t.prototype.rectangle = function (t, e, r, i, o) {
                            var h = this.lastRectangle;
                            return (
                                (h && t === h.x1 && r === h.x2 && e === h.y1 && i === h.y2 && o === h.height) ||
                                    ((this.lastRectangle = { x1: t, y1: e, x2: r, y2: i, height: o }),
                                    a(this.lastRectangle) || (this.lastRectangle = s(this.lastRectangle)),
                                    (this.cache = (function (t, e, r, i, o, a, s) {
                                        for (var h, c = [0, 0], u = []; c.length; ) {
                                            var d = c.pop(),
                                                f = c.pop();
                                            if (((h = r[f]) && (0, n.default)(u, h), !(d >= 5))) {
                                                var p = 4 * f + 4,
                                                    g = 4 * f + 8,
                                                    v = 4 * f + 12,
                                                    m = 4 * f + 16,
                                                    y = l(i, o, a, s, e[p + 0], e[p + 1], e[p + 2], e[p + 3]),
                                                    b = l(i, o, a, s, e[g + 0], e[g + 1], e[g + 2], e[g + 3]),
                                                    _ = l(i, o, a, s, e[v + 0], e[v + 1], e[v + 2], e[v + 3]),
                                                    x = l(i, o, a, s, e[m + 0], e[m + 1], e[m + 2], e[m + 3]);
                                                y && c.push(p, d + 1), b && c.push(g, d + 1), _ && c.push(v, d + 1), x && c.push(m, d + 1);
                                            }
                                        }
                                        return u;
                                    })(0, this.data, this.containers, t, e, Math.abs(t - r) || Math.abs(e - i), o)),
                                    (0, n.default)(this.cache, this.containers[5460])),
                                this.cache
                            );
                        }),
                        t
                    );
                })();
                e.default = u;
            },
            265: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        }),
                    o =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var a = o(r(159)),
                    s = o(r(764)),
                    h = o(r(134)),
                    l = o(r(269)),
                    c = (function (t) {
                        function e() {
                            return (null !== t && t.apply(this, arguments)) || this;
                        }
                        return n(e, t), (e.Camera = s.default), (e.QuadTree = h.default), (e.MouseCaptor = l.default), (e.Sigma = a.default), e;
                    })(a.default);
                t.exports = c;
            },
            942: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.default = function (t, e, r, i, n) {
                        var o = n.edgeLabelSize,
                            a = n.edgeLabelFont,
                            s = n.edgeLabelWeight,
                            h = n.edgeLabelColor.attribute ? e[n.edgeLabelColor.attribute] || n.edgeLabelColor.color || "#000" : n.edgeLabelColor.color,
                            l = e.label;
                        if (l) {
                            (t.fillStyle = h), (t.font = "".concat(s, " ").concat(o, "px ").concat(a));
                            var c,
                                u,
                                d = r.size,
                                f = i.size,
                                p = r.x,
                                g = r.y,
                                v = i.x,
                                m = i.y,
                                y = v - p,
                                b = m - g,
                                _ = Math.sqrt(y * y + b * b);
                            if (!(_ < d + f)) {
                                (c = ((p += (y * d) / _) + (v -= (y * f) / _)) / 2), (u = ((g += (b * d) / _) + (m -= (b * f) / _)) / 2), (y = v - p), (b = m - g), (_ = Math.sqrt(y * y + b * b));
                                var x,
                                    w = t.measureText(l).width;
                                if (w > _) {
                                    for (l += "…", w = t.measureText(l).width; w > _ && l.length > 1; ) (l = l.slice(0, -2) + "…"), (w = t.measureText(l).width);
                                    if (l.length < 4) return;
                                }
                                (x = y > 0 ? (b > 0 ? Math.acos(y / _) : Math.asin(b / _)) : b > 0 ? Math.acos(y / _) + Math.PI : Math.asin(y / _) + Math.PI / 2),
                                    t.save(),
                                    t.translate(c, u),
                                    t.rotate(x),
                                    t.fillText(l, -w / 2, e.size / 2 + o),
                                    t.restore();
                            }
                        }
                    });
            },
            61: function (t, e, r) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var n = i(r(622));
                e.default = function (t, e, r) {
                    var i = r.labelSize,
                        o = r.labelFont,
                        a = r.labelWeight;
                    if (((t.font = "".concat(a, " ").concat(i, "px ").concat(o)), (t.fillStyle = "#FFF"), (t.shadowOffsetX = 0), (t.shadowOffsetY = 0), (t.shadowBlur = 8), (t.shadowColor = "#000"), "string" == typeof e.label)) {
                        var s = t.measureText(e.label).width,
                            h = Math.round(s + 5),
                            l = Math.round(i + 4),
                            c = Math.max(e.size, i / 2) + 2,
                            u = Math.asin(l / 2 / c),
                            d = Math.sqrt(Math.abs(Math.pow(c, 2) - Math.pow(l / 2, 2)));
                        t.beginPath(), t.moveTo(e.x + d, e.y + l / 2), t.lineTo(e.x + c + h, e.y + l / 2), t.lineTo(e.x + c + h, e.y - l / 2), t.lineTo(e.x + d, e.y - l / 2), t.arc(e.x, e.y, c, u, -u), t.closePath(), t.fill();
                    } else t.beginPath(), t.arc(e.x, e.y, e.size + 2, 0, 2 * Math.PI), t.closePath(), t.fill();
                    (t.shadowOffsetX = 0), (t.shadowOffsetY = 0), (t.shadowBlur = 0), (0, n.default)(t, e, r);
                };
            },
            622: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.default = function (t, e, r) {
                        if (e.label) {
                            var i = r.labelSize,
                                n = r.labelFont,
                                o = r.labelWeight,
                                a = r.labelColor.attribute ? e[r.labelColor.attribute] || r.labelColor.color || "#000" : r.labelColor.color;
                            (t.fillStyle = a), (t.font = "".concat(o, " ").concat(i, "px ").concat(n)), t.fillText(e.label, e.x + e.size + 3, e.y + i / 3);
                        }
                    });
            },
            195: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.createEdgeCompoundProgram = e.AbstractEdgeProgram = void 0);
                var o = (function (t) {
                    function e(e, r, i, n, o) {
                        return t.call(this, e, r, i, n, o) || this;
                    }
                    return n(e, t), e;
                })(r(171).AbstractProgram);
                (e.AbstractEdgeProgram = o),
                    (e.createEdgeCompoundProgram = function (t) {
                        return (function () {
                            function e(e, r) {
                                this.programs = t.map(function (t) {
                                    return new t(e, r);
                                });
                            }
                            return (
                                (e.prototype.bufferData = function () {
                                    this.programs.forEach(function (t) {
                                        return t.bufferData();
                                    });
                                }),
                                (e.prototype.allocate = function (t) {
                                    this.programs.forEach(function (e) {
                                        return e.allocate(t);
                                    });
                                }),
                                (e.prototype.bind = function () {}),
                                (e.prototype.computeIndices = function () {
                                    this.programs.forEach(function (t) {
                                        return t.computeIndices();
                                    });
                                }),
                                (e.prototype.render = function (t) {
                                    this.programs.forEach(function (e) {
                                        e.bind(), e.bufferData(), e.render(t);
                                    });
                                }),
                                (e.prototype.process = function (t, e, r, i, n) {
                                    this.programs.forEach(function (o) {
                                        return o.process(t, e, r, i, n);
                                    });
                                }),
                                e
                            );
                        })();
                    });
            },
            909: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.createNodeCompoundProgram = e.AbstractNodeProgram = void 0);
                var o = (function (t) {
                    function e(e, r, i, n, o) {
                        var a = t.call(this, e, r, i, n, o) || this;
                        (a.positionLocation = e.getAttribLocation(a.program, "a_position")), (a.sizeLocation = e.getAttribLocation(a.program, "a_size")), (a.colorLocation = e.getAttribLocation(a.program, "a_color"));
                        var s = e.getUniformLocation(a.program, "u_matrix");
                        if (null === s) throw new Error("AbstractNodeProgram: error while getting matrixLocation");
                        a.matrixLocation = s;
                        var h = e.getUniformLocation(a.program, "u_ratio");
                        if (null === h) throw new Error("AbstractNodeProgram: error while getting ratioLocation");
                        a.ratioLocation = h;
                        var l = e.getUniformLocation(a.program, "u_scale");
                        if (null === l) throw new Error("AbstractNodeProgram: error while getting scaleLocation");
                        return (a.scaleLocation = l), a;
                    }
                    return (
                        n(e, t),
                        (e.prototype.bind = function () {
                            var t = this.gl;
                            t.enableVertexAttribArray(this.positionLocation),
                                t.enableVertexAttribArray(this.sizeLocation),
                                t.enableVertexAttribArray(this.colorLocation),
                                t.vertexAttribPointer(this.positionLocation, 2, t.FLOAT, !1, this.attributes * Float32Array.BYTES_PER_ELEMENT, 0),
                                t.vertexAttribPointer(this.sizeLocation, 1, t.FLOAT, !1, this.attributes * Float32Array.BYTES_PER_ELEMENT, 8),
                                t.vertexAttribPointer(this.colorLocation, 4, t.UNSIGNED_BYTE, !0, this.attributes * Float32Array.BYTES_PER_ELEMENT, 12);
                        }),
                        e
                    );
                })(r(171).AbstractProgram);
                (e.AbstractNodeProgram = o),
                    (e.createNodeCompoundProgram = function (t) {
                        return (function () {
                            function e(e, r) {
                                this.programs = t.map(function (t) {
                                    return new t(e, r);
                                });
                            }
                            return (
                                (e.prototype.bufferData = function () {
                                    this.programs.forEach(function (t) {
                                        return t.bufferData();
                                    });
                                }),
                                (e.prototype.allocate = function (t) {
                                    this.programs.forEach(function (e) {
                                        return e.allocate(t);
                                    });
                                }),
                                (e.prototype.bind = function () {}),
                                (e.prototype.render = function (t) {
                                    this.programs.forEach(function (e) {
                                        e.bind(), e.bufferData(), e.render(t);
                                    });
                                }),
                                (e.prototype.process = function (t, e, r) {
                                    this.programs.forEach(function (i) {
                                        return i.process(t, e, r);
                                    });
                                }),
                                e
                            );
                        })();
                    });
            },
            171: (t, e, r) => {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.AbstractProgram = void 0);
                var i = r(706),
                    n = (function () {
                        function t(t, e, r, n, o) {
                            (this.array = new Float32Array()), (this.points = n), (this.attributes = o), (this.gl = t), (this.vertexShaderSource = e), (this.fragmentShaderSource = r);
                            var a = t.createBuffer();
                            if (null === a) throw new Error("AbstractProgram: error while creating the buffer");
                            (this.buffer = a),
                                t.bindBuffer(t.ARRAY_BUFFER, this.buffer),
                                (this.vertexShader = (0, i.loadVertexShader)(t, this.vertexShaderSource)),
                                (this.fragmentShader = (0, i.loadFragmentShader)(t, this.fragmentShaderSource)),
                                (this.program = (0, i.loadProgram)(t, [this.vertexShader, this.fragmentShader]));
                        }
                        return (
                            (t.prototype.bufferData = function () {
                                var t = this.gl;
                                t.bufferData(t.ARRAY_BUFFER, this.array, t.DYNAMIC_DRAW);
                            }),
                            (t.prototype.allocate = function (t) {
                                this.array = new Float32Array(this.points * this.attributes * t);
                            }),
                            (t.prototype.hasNothingToRender = function () {
                                return 0 === this.array.length;
                            }),
                            t
                        );
                    })();
                e.AbstractProgram = n;
            },
            569: function (t, e, r) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var n = r(195),
                    o = i(r(805)),
                    a = i(r(483)),
                    s = (0, n.createEdgeCompoundProgram)([a.default, o.default]);
                e.default = s;
            },
            805: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        }),
                    o =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var a = r(928),
                    s = o(r(912)),
                    h = o(r(973)),
                    l = (function (t) {
                        function e(e) {
                            var r = t.call(this, e, s.default, h.default, 3, 9) || this;
                            (r.positionLocation = e.getAttribLocation(r.program, "a_position")),
                                (r.colorLocation = e.getAttribLocation(r.program, "a_color")),
                                (r.normalLocation = e.getAttribLocation(r.program, "a_normal")),
                                (r.radiusLocation = e.getAttribLocation(r.program, "a_radius")),
                                (r.barycentricLocation = e.getAttribLocation(r.program, "a_barycentric"));
                            var i = e.getUniformLocation(r.program, "u_matrix");
                            if (null === i) throw new Error("EdgeArrowHeadProgram: error while getting matrixLocation");
                            r.matrixLocation = i;
                            var n = e.getUniformLocation(r.program, "u_sqrtZoomRatio");
                            if (null === n) throw new Error("EdgeArrowHeadProgram: error while getting sqrtZoomRatioLocation");
                            r.sqrtZoomRatioLocation = n;
                            var o = e.getUniformLocation(r.program, "u_correctionRatio");
                            if (null === o) throw new Error("EdgeArrowHeadProgram: error while getting correctionRatioLocation");
                            return (r.correctionRatioLocation = o), r.bind(), r;
                        }
                        return (
                            n(e, t),
                            (e.prototype.bind = function () {
                                var t = this.gl;
                                t.enableVertexAttribArray(this.positionLocation),
                                    t.enableVertexAttribArray(this.normalLocation),
                                    t.enableVertexAttribArray(this.radiusLocation),
                                    t.enableVertexAttribArray(this.colorLocation),
                                    t.enableVertexAttribArray(this.barycentricLocation),
                                    t.vertexAttribPointer(this.positionLocation, 2, t.FLOAT, !1, 9 * Float32Array.BYTES_PER_ELEMENT, 0),
                                    t.vertexAttribPointer(this.normalLocation, 2, t.FLOAT, !1, 9 * Float32Array.BYTES_PER_ELEMENT, 8),
                                    t.vertexAttribPointer(this.radiusLocation, 1, t.FLOAT, !1, 9 * Float32Array.BYTES_PER_ELEMENT, 16),
                                    t.vertexAttribPointer(this.colorLocation, 4, t.UNSIGNED_BYTE, !0, 9 * Float32Array.BYTES_PER_ELEMENT, 20),
                                    t.vertexAttribPointer(this.barycentricLocation, 3, t.FLOAT, !1, 9 * Float32Array.BYTES_PER_ELEMENT, 24);
                            }),
                            (e.prototype.computeIndices = function () {}),
                            (e.prototype.process = function (t, e, r, i, n) {
                                if (i) for (var o = 27 * n, s = o + 27; o < s; o++) this.array[o] = 0;
                                else {
                                    var h = r.size || 1,
                                        l = e.size || 1,
                                        c = t.x,
                                        u = t.y,
                                        d = e.x,
                                        f = e.y,
                                        p = (0, a.floatColor)(r.color),
                                        g = d - c,
                                        v = f - u,
                                        m = g * g + v * v,
                                        y = 0,
                                        b = 0;
                                    m && ((y = -v * (m = 1 / Math.sqrt(m)) * h), (b = g * m * h));
                                    var _ = 27 * n,
                                        x = this.array;
                                    (x[_++] = d),
                                        (x[_++] = f),
                                        (x[_++] = -y),
                                        (x[_++] = -b),
                                        (x[_++] = l),
                                        (x[_++] = p),
                                        (x[_++] = 1),
                                        (x[_++] = 0),
                                        (x[_++] = 0),
                                        (x[_++] = d),
                                        (x[_++] = f),
                                        (x[_++] = -y),
                                        (x[_++] = -b),
                                        (x[_++] = l),
                                        (x[_++] = p),
                                        (x[_++] = 0),
                                        (x[_++] = 1),
                                        (x[_++] = 0),
                                        (x[_++] = d),
                                        (x[_++] = f),
                                        (x[_++] = -y),
                                        (x[_++] = -b),
                                        (x[_++] = l),
                                        (x[_++] = p),
                                        (x[_++] = 0),
                                        (x[_++] = 0),
                                        (x[_] = 1);
                                }
                            }),
                            (e.prototype.render = function (t) {
                                if (!this.hasNothingToRender()) {
                                    var e = this.gl,
                                        r = this.program;
                                    e.useProgram(r),
                                        e.uniformMatrix3fv(this.matrixLocation, !1, t.matrix),
                                        e.uniform1f(this.sqrtZoomRatioLocation, Math.sqrt(t.ratio)),
                                        e.uniform1f(this.correctionRatioLocation, t.correctionRatio),
                                        e.drawArrays(e.TRIANGLES, 0, this.array.length / 9);
                                }
                            }),
                            e
                        );
                    })(r(195).AbstractEdgeProgram);
                e.default = l;
            },
            483: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        }),
                    o =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var a = r(195),
                    s = r(928),
                    h = o(r(620)),
                    l = o(r(498)),
                    c = (function (t) {
                        function e(e) {
                            var r = t.call(this, e, h.default, l.default, 4, 6) || this,
                                i = e.createBuffer();
                            if (null === i) throw new Error("EdgeClampedProgram: error while getting resolutionLocation");
                            (r.indicesBuffer = i),
                                (r.positionLocation = e.getAttribLocation(r.program, "a_position")),
                                (r.colorLocation = e.getAttribLocation(r.program, "a_color")),
                                (r.normalLocation = e.getAttribLocation(r.program, "a_normal")),
                                (r.radiusLocation = e.getAttribLocation(r.program, "a_radius"));
                            var n = e.getUniformLocation(r.program, "u_matrix");
                            if (null === n) throw new Error("EdgeClampedProgram: error while getting matrixLocation");
                            r.matrixLocation = n;
                            var o = e.getUniformLocation(r.program, "u_sqrtZoomRatio");
                            if (null === o) throw new Error("EdgeClampedProgram: error while getting cameraRatioLocation");
                            r.sqrtZoomRatioLocation = o;
                            var a = e.getUniformLocation(r.program, "u_correctionRatio");
                            if (null === a) throw new Error("EdgeClampedProgram: error while getting viewportRatioLocation");
                            return (
                                (r.correctionRatioLocation = a),
                                (r.canUse32BitsIndices = (0, s.canUse32BitsIndices)(e)),
                                (r.IndicesArray = r.canUse32BitsIndices ? Uint32Array : Uint16Array),
                                (r.indicesArray = new r.IndicesArray()),
                                (r.indicesType = r.canUse32BitsIndices ? e.UNSIGNED_INT : e.UNSIGNED_SHORT),
                                r.bind(),
                                r
                            );
                        }
                        return (
                            n(e, t),
                            (e.prototype.bind = function () {
                                var t = this.gl;
                                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indicesBuffer),
                                    t.enableVertexAttribArray(this.positionLocation),
                                    t.enableVertexAttribArray(this.normalLocation),
                                    t.enableVertexAttribArray(this.colorLocation),
                                    t.enableVertexAttribArray(this.radiusLocation),
                                    t.vertexAttribPointer(this.positionLocation, 2, t.FLOAT, !1, 6 * Float32Array.BYTES_PER_ELEMENT, 0),
                                    t.vertexAttribPointer(this.normalLocation, 2, t.FLOAT, !1, 6 * Float32Array.BYTES_PER_ELEMENT, 8),
                                    t.vertexAttribPointer(this.colorLocation, 4, t.UNSIGNED_BYTE, !0, 6 * Float32Array.BYTES_PER_ELEMENT, 16),
                                    t.vertexAttribPointer(this.radiusLocation, 1, t.FLOAT, !1, 6 * Float32Array.BYTES_PER_ELEMENT, 20);
                            }),
                            (e.prototype.process = function (t, e, r, i, n) {
                                if (i) for (var o = 24 * n, a = o + 24; o < a; o++) this.array[o] = 0;
                                else {
                                    var h = r.size || 1,
                                        l = t.x,
                                        c = t.y,
                                        u = e.x,
                                        d = e.y,
                                        f = e.size || 1,
                                        p = (0, s.floatColor)(r.color),
                                        g = u - l,
                                        v = d - c,
                                        m = g * g + v * v,
                                        y = 0,
                                        b = 0;
                                    m && ((y = -v * (m = 1 / Math.sqrt(m)) * h), (b = g * m * h));
                                    var _ = 24 * n,
                                        x = this.array;
                                    (x[_++] = l),
                                        (x[_++] = c),
                                        (x[_++] = y),
                                        (x[_++] = b),
                                        (x[_++] = p),
                                        (x[_++] = 0),
                                        (x[_++] = l),
                                        (x[_++] = c),
                                        (x[_++] = -y),
                                        (x[_++] = -b),
                                        (x[_++] = p),
                                        (x[_++] = 0),
                                        (x[_++] = u),
                                        (x[_++] = d),
                                        (x[_++] = y),
                                        (x[_++] = b),
                                        (x[_++] = p),
                                        (x[_++] = f),
                                        (x[_++] = u),
                                        (x[_++] = d),
                                        (x[_++] = -y),
                                        (x[_++] = -b),
                                        (x[_++] = p),
                                        (x[_] = -f);
                                }
                            }),
                            (e.prototype.computeIndices = function () {
                                for (var t = this.array.length / 6, e = t + t / 2, r = new this.IndicesArray(e), i = 0, n = 0; i < t; i += 4)
                                    (r[n++] = i), (r[n++] = i + 1), (r[n++] = i + 2), (r[n++] = i + 2), (r[n++] = i + 1), (r[n++] = i + 3);
                                this.indicesArray = r;
                            }),
                            (e.prototype.bufferData = function () {
                                t.prototype.bufferData.call(this);
                                var e = this.gl;
                                e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indicesArray, e.STATIC_DRAW);
                            }),
                            (e.prototype.render = function (t) {
                                if (!this.hasNothingToRender()) {
                                    var e = this.gl,
                                        r = this.program;
                                    e.useProgram(r),
                                        e.uniformMatrix3fv(this.matrixLocation, !1, t.matrix),
                                        e.uniform1f(this.sqrtZoomRatioLocation, Math.sqrt(t.ratio)),
                                        e.uniform1f(this.correctionRatioLocation, t.correctionRatio),
                                        e.drawElements(e.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
                                }
                            }),
                            e
                        );
                    })(a.AbstractEdgeProgram);
                e.default = c;
            },
            753: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        }),
                    o =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var a = r(928),
                    s = o(r(223)),
                    h = o(r(498)),
                    l = (function (t) {
                        function e(e) {
                            var r = t.call(this, e, s.default, h.default, 4, 5) || this,
                                i = e.createBuffer();
                            if (null === i) throw new Error("EdgeProgram: error while creating indicesBuffer");
                            (r.indicesBuffer = i),
                                (r.positionLocation = e.getAttribLocation(r.program, "a_position")),
                                (r.colorLocation = e.getAttribLocation(r.program, "a_color")),
                                (r.normalLocation = e.getAttribLocation(r.program, "a_normal"));
                            var n = e.getUniformLocation(r.program, "u_matrix");
                            if (null === n) throw new Error("EdgeProgram: error while getting matrixLocation");
                            r.matrixLocation = n;
                            var o = e.getUniformLocation(r.program, "u_correctionRatio");
                            if (null === o) throw new Error("EdgeProgram: error while getting correctionRatioLocation");
                            r.correctionRatioLocation = o;
                            var l = e.getUniformLocation(r.program, "u_sqrtZoomRatio");
                            if (null === l) throw new Error("EdgeProgram: error while getting sqrtZoomRatioLocation");
                            return (
                                (r.sqrtZoomRatioLocation = l),
                                (r.canUse32BitsIndices = (0, a.canUse32BitsIndices)(e)),
                                (r.IndicesArray = r.canUse32BitsIndices ? Uint32Array : Uint16Array),
                                (r.indicesArray = new r.IndicesArray()),
                                (r.indicesType = r.canUse32BitsIndices ? e.UNSIGNED_INT : e.UNSIGNED_SHORT),
                                r.bind(),
                                r
                            );
                        }
                        return (
                            n(e, t),
                            (e.prototype.bind = function () {
                                var t = this.gl;
                                t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indicesBuffer),
                                    t.enableVertexAttribArray(this.positionLocation),
                                    t.enableVertexAttribArray(this.normalLocation),
                                    t.enableVertexAttribArray(this.colorLocation),
                                    t.vertexAttribPointer(this.positionLocation, 2, t.FLOAT, !1, 5 * Float32Array.BYTES_PER_ELEMENT, 0),
                                    t.vertexAttribPointer(this.normalLocation, 2, t.FLOAT, !1, 5 * Float32Array.BYTES_PER_ELEMENT, 8),
                                    t.vertexAttribPointer(this.colorLocation, 4, t.UNSIGNED_BYTE, !0, 5 * Float32Array.BYTES_PER_ELEMENT, 16);
                            }),
                            (e.prototype.computeIndices = function () {
                                for (var t = this.array.length / 5, e = t + t / 2, r = new this.IndicesArray(e), i = 0, n = 0; i < t; i += 4)
                                    (r[n++] = i), (r[n++] = i + 1), (r[n++] = i + 2), (r[n++] = i + 2), (r[n++] = i + 1), (r[n++] = i + 3);
                                this.indicesArray = r;
                            }),
                            (e.prototype.bufferData = function () {
                                t.prototype.bufferData.call(this);
                                var e = this.gl;
                                e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indicesArray, e.STATIC_DRAW);
                            }),
                            (e.prototype.process = function (t, e, r, i, n) {
                                if (i) for (var o = 20 * n, s = o + 20; o < s; o++) this.array[o] = 0;
                                else {
                                    var h = r.size || 1,
                                        l = t.x,
                                        c = t.y,
                                        u = e.x,
                                        d = e.y,
                                        f = (0, a.floatColor)(r.color),
                                        p = u - l,
                                        g = d - c,
                                        v = p * p + g * g,
                                        m = 0,
                                        y = 0;
                                    v && ((m = -g * (v = 1 / Math.sqrt(v)) * h), (y = p * v * h));
                                    var b = 20 * n,
                                        _ = this.array;
                                    (_[b++] = l),
                                        (_[b++] = c),
                                        (_[b++] = m),
                                        (_[b++] = y),
                                        (_[b++] = f),
                                        (_[b++] = l),
                                        (_[b++] = c),
                                        (_[b++] = -m),
                                        (_[b++] = -y),
                                        (_[b++] = f),
                                        (_[b++] = u),
                                        (_[b++] = d),
                                        (_[b++] = m),
                                        (_[b++] = y),
                                        (_[b++] = f),
                                        (_[b++] = u),
                                        (_[b++] = d),
                                        (_[b++] = -m),
                                        (_[b++] = -y),
                                        (_[b] = f);
                                }
                            }),
                            (e.prototype.render = function (t) {
                                if (!this.hasNothingToRender()) {
                                    var e = this.gl,
                                        r = this.program;
                                    e.useProgram(r),
                                        e.uniformMatrix3fv(this.matrixLocation, !1, t.matrix),
                                        e.uniform1f(this.sqrtZoomRatioLocation, Math.sqrt(t.ratio)),
                                        e.uniform1f(this.correctionRatioLocation, t.correctionRatio),
                                        e.drawElements(e.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
                                }
                            }),
                            e
                        );
                    })(r(195).AbstractEdgeProgram);
                e.default = l;
            },
            582: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        }),
                    o =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var a = r(928),
                    s = o(r(106)),
                    h = o(r(262)),
                    l = (function (t) {
                        function e(e) {
                            var r = t.call(this, e, s.default, h.default, 1, 4) || this;
                            return r.bind(), r;
                        }
                        return (
                            n(e, t),
                            (e.prototype.process = function (t, e, r) {
                                var i = this.array,
                                    n = 1 * r * 4;
                                if (e) return (i[n++] = 0), (i[n++] = 0), (i[n++] = 0), void (i[n++] = 0);
                                var o = (0, a.floatColor)(t.color);
                                (i[n++] = t.x), (i[n++] = t.y), (i[n++] = t.size), (i[n] = o);
                            }),
                            (e.prototype.render = function (t) {
                                if (!this.hasNothingToRender()) {
                                    var e = this.gl,
                                        r = this.program;
                                    e.useProgram(r),
                                        e.uniform1f(this.ratioLocation, 1 / Math.sqrt(t.ratio)),
                                        e.uniform1f(this.scaleLocation, t.scalingRatio),
                                        e.uniformMatrix3fv(this.matrixLocation, !1, t.matrix),
                                        e.drawArrays(e.POINTS, 0, this.array.length / 4);
                                }
                            }),
                            e
                        );
                    })(r(909).AbstractNodeProgram);
                e.default = l;
            },
            706: (t, e) => {
                "use strict";
                function r(t, e, r) {
                    var i = "VERTEX" === t ? e.VERTEX_SHADER : e.FRAGMENT_SHADER,
                        n = e.createShader(i);
                    if (null === n) throw new Error("loadShader: error while creating the shader");
                    if ((e.shaderSource(n, r), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS))) {
                        var o = e.getShaderInfoLog(n);
                        throw (e.deleteShader(n), new Error("loadShader: error while compiling the shader:\n".concat(o, "\n").concat(r)));
                    }
                    return n;
                }
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.loadProgram = e.loadFragmentShader = e.loadVertexShader = void 0),
                    (e.loadVertexShader = function (t, e) {
                        return r("VERTEX", t, e);
                    }),
                    (e.loadFragmentShader = function (t, e) {
                        return r("FRAGMENT", t, e);
                    }),
                    (e.loadProgram = function (t, e) {
                        var r,
                            i,
                            n = t.createProgram();
                        if (null === n) throw new Error("loadProgram: error while creating the program.");
                        for (r = 0, i = e.length; r < i; r++) t.attachShader(n, e[r]);
                        if ((t.linkProgram(n), !t.getProgramParameter(n, t.LINK_STATUS))) throw (t.deleteProgram(n), new Error("loadProgram: error while linking the program."));
                        return n;
                    });
            },
            310: function (t, e, r) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.resolveSettings = e.validateSettings = e.DEFAULT_EDGE_PROGRAM_CLASSES = e.DEFAULT_NODE_PROGRAM_CLASSES = e.DEFAULT_SETTINGS = void 0);
                var n = r(928),
                    o = i(r(622)),
                    a = i(r(61)),
                    s = i(r(942)),
                    h = i(r(582)),
                    l = i(r(753)),
                    c = i(r(569));
                (e.DEFAULT_SETTINGS = {
                    hideEdgesOnMove: !1,
                    hideLabelsOnMove: !1,
                    renderLabels: !0,
                    renderEdgeLabels: !1,
                    enableEdgeClickEvents: !1,
                    enableEdgeWheelEvents: !1,
                    enableEdgeHoverEvents: !1,
                    defaultNodeColor: "#999",
                    defaultNodeType: "circle",
                    defaultEdgeColor: "#ccc",
                    defaultEdgeType: "line",
                    labelFont: "Arial",
                    labelSize: 14,
                    labelWeight: "normal",
                    labelColor: { color: "#000" },
                    edgeLabelFont: "Arial",
                    edgeLabelSize: 14,
                    edgeLabelWeight: "normal",
                    edgeLabelColor: { attribute: "color" },
                    stagePadding: 30,
                    labelDensity: 1,
                    labelGridCellSize: 100,
                    labelRenderedSizeThreshold: 6,
                    nodeReducer: null,
                    edgeReducer: null,
                    zIndex: !1,
                    minCameraRatio: null,
                    maxCameraRatio: null,
                    labelRenderer: o.default,
                    hoverRenderer: a.default,
                    edgeLabelRenderer: s.default,
                    allowInvalidContainer: !1,
                    nodeProgramClasses: {},
                    nodeHoverProgramClasses: {},
                    edgeProgramClasses: {},
                }),
                    (e.DEFAULT_NODE_PROGRAM_CLASSES = { circle: h.default }),
                    (e.DEFAULT_EDGE_PROGRAM_CLASSES = { arrow: c.default, line: l.default }),
                    (e.validateSettings = function (t) {
                        if ("number" != typeof t.labelDensity || t.labelDensity < 0) throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
                        var e = t.minCameraRatio,
                            r = t.maxCameraRatio;
                        if ("number" == typeof e && "number" == typeof r && r < e) throw new Error("Settings: invalid camera ratio boundaries. Expecting `maxCameraRatio` to be greater than `minCameraRatio`.");
                    }),
                    (e.resolveSettings = function (t) {
                        var r = (0, n.assign)({}, e.DEFAULT_SETTINGS, t);
                        return (r.nodeProgramClasses = (0, n.assign)({}, e.DEFAULT_NODE_PROGRAM_CLASSES, r.nodeProgramClasses)), (r.edgeProgramClasses = (0, n.assign)({}, e.DEFAULT_EDGE_PROGRAM_CLASSES, r.edgeProgramClasses)), r;
                    });
            },
            159: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        }),
                    o =
                        (this && this.__assign) ||
                        function () {
                            return (
                                (o =
                                    Object.assign ||
                                    function (t) {
                                        for (var e, r = 1, i = arguments.length; r < i; r++) for (var n in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                        return t;
                                    }),
                                o.apply(this, arguments)
                            );
                        },
                    a =
                        (this && this.__values) ||
                        function (t) {
                            var e = "function" == typeof Symbol && Symbol.iterator,
                                r = e && t[e],
                                i = 0;
                            if (r) return r.call(t);
                            if (t && "number" == typeof t.length)
                                return {
                                    next: function () {
                                        return t && i >= t.length && (t = void 0), { value: t && t[i++], done: !t };
                                    },
                                };
                            throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
                        },
                    s =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                Object.defineProperty(e, "__esModule", { value: !0 });
                var h = s(r(796)),
                    l = s(r(764)),
                    c = s(r(269)),
                    u = s(r(134)),
                    d = r(699),
                    f = r(928),
                    p = r(730),
                    g = r(310),
                    v = s(r(508)),
                    m = r(700),
                    y = r(628);
                function b(t, e, r) {
                    if (!r.hasOwnProperty("x") || !r.hasOwnProperty("y"))
                        throw new Error(
                            'Sigma: could not find a valid position (x, y) for node "'.concat(
                                e,
                                '". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?'
                            )
                        );
                    return (
                        r.color || (r.color = t.defaultNodeColor),
                        r.label || "" === r.label || (r.label = null),
                        void 0 !== r.label && null !== r.label ? (r.label = "" + r.label) : (r.label = null),
                        r.size || (r.size = 2),
                        r.hasOwnProperty("hidden") || (r.hidden = !1),
                        r.hasOwnProperty("highlighted") || (r.highlighted = !1),
                        r.hasOwnProperty("forceLabel") || (r.forceLabel = !1),
                        (r.type && "" !== r.type) || (r.type = t.defaultNodeType),
                        r.zIndex || (r.zIndex = 0),
                        r
                    );
                }
                function _(t, e, r) {
                    return (
                        r.color || (r.color = t.defaultEdgeColor),
                        r.label || (r.label = ""),
                        r.size || (r.size = 0.5),
                        r.hasOwnProperty("hidden") || (r.hidden = !1),
                        r.hasOwnProperty("forceLabel") || (r.forceLabel = !1),
                        (r.type && "" !== r.type) || (r.type = t.defaultEdgeType),
                        r.zIndex || (r.zIndex = 0),
                        r
                    );
                }
                var x = (function (t) {
                    function e(e, r, i) {
                        void 0 === i && (i = {});
                        var n = t.call(this) || this;
                        if (
                            ((n.elements = {}),
                            (n.canvasContexts = {}),
                            (n.webGLContexts = {}),
                            (n.activeListeners = {}),
                            (n.quadtree = new u.default()),
                            (n.labelGrid = new p.LabelGrid()),
                            (n.nodeDataCache = {}),
                            (n.edgeDataCache = {}),
                            (n.nodesWithForcedLabels = []),
                            (n.edgesWithForcedLabels = []),
                            (n.nodeExtent = { x: [0, 1], y: [0, 1] }),
                            (n.matrix = (0, m.identity)()),
                            (n.invMatrix = (0, m.identity)()),
                            (n.correctionRatio = 1),
                            (n.customBBox = null),
                            (n.normalizationFunction = (0, f.createNormalizationFunction)({ x: [0, 1], y: [0, 1] })),
                            (n.cameraSizeRatio = 1),
                            (n.width = 0),
                            (n.height = 0),
                            (n.pixelRatio = (0, f.getPixelRatio)()),
                            (n.displayedLabels = new Set()),
                            (n.highlightedNodes = new Set()),
                            (n.hoveredNode = null),
                            (n.hoveredEdge = null),
                            (n.renderFrame = null),
                            (n.renderHighlightedNodesFrame = null),
                            (n.needToProcess = !1),
                            (n.needToSoftProcess = !1),
                            (n.checkEdgesEventsFrame = null),
                            (n.nodePrograms = {}),
                            (n.nodeHoverPrograms = {}),
                            (n.edgePrograms = {}),
                            (n.settings = (0, g.resolveSettings)(i)),
                            (0, g.validateSettings)(n.settings),
                            (0, f.validateGraph)(e),
                            !(r instanceof HTMLElement))
                        )
                            throw new Error("Sigma: container should be an html element.");
                        for (var o in ((n.graph = e),
                        (n.container = r),
                        n.createWebGLContext("edges", { preserveDrawingBuffer: !0 }),
                        n.createCanvasContext("edgeLabels"),
                        n.createWebGLContext("nodes"),
                        n.createCanvasContext("labels"),
                        n.createCanvasContext("hovers"),
                        n.createWebGLContext("hoverNodes"),
                        n.createCanvasContext("mouse"),
                        n.webGLContexts)) {
                            var a = n.webGLContexts[o];
                            a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA), a.enable(a.BLEND);
                        }
                        for (var s in n.settings.nodeProgramClasses) {
                            var h = n.settings.nodeProgramClasses[s];
                            n.nodePrograms[s] = new h(n.webGLContexts.nodes, n);
                            var d = h;
                            s in n.settings.nodeHoverProgramClasses && (d = n.settings.nodeHoverProgramClasses[s]), (n.nodeHoverPrograms[s] = new d(n.webGLContexts.hoverNodes, n));
                        }
                        for (var s in n.settings.edgeProgramClasses) {
                            var y = n.settings.edgeProgramClasses[s];
                            n.edgePrograms[s] = new y(n.webGLContexts.edges, n);
                        }
                        return (
                            n.resize(),
                            (n.camera = new l.default()),
                            n.bindCameraHandlers(),
                            (n.mouseCaptor = new c.default(n.elements.mouse, n)),
                            (n.touchCaptor = new v.default(n.elements.mouse, n)),
                            n.bindEventHandlers(),
                            n.bindGraphHandlers(),
                            n.handleSettingsUpdate(),
                            n.process(),
                            n.render(),
                            n
                        );
                    }
                    return (
                        n(e, t),
                        (e.prototype.createCanvas = function (t) {
                            var e = (0, f.createElement)("canvas", { position: "absolute" }, { class: "sigma-".concat(t) });
                            return (this.elements[t] = e), this.container.appendChild(e), e;
                        }),
                        (e.prototype.createCanvasContext = function (t) {
                            var e = this.createCanvas(t);
                            return (this.canvasContexts[t] = e.getContext("2d", { preserveDrawingBuffer: !1, antialias: !1 })), this;
                        }),
                        (e.prototype.createWebGLContext = function (t, e) {
                            var r,
                                i = this.createCanvas(t),
                                n = o({ preserveDrawingBuffer: !1, antialias: !1 }, e || {});
                            return (r = i.getContext("webgl2", n)) || (r = i.getContext("webgl", n)), r || (r = i.getContext("experimental-webgl", n)), (this.webGLContexts[t] = r), this;
                        }),
                        (e.prototype.bindCameraHandlers = function () {
                            var t = this;
                            return (
                                (this.activeListeners.camera = function () {
                                    t._scheduleRefresh();
                                }),
                                this.camera.on("updated", this.activeListeners.camera),
                                this
                            );
                        }),
                        (e.prototype.mouseIsOnNode = function (t, e, r) {
                            var i = t.x,
                                n = t.y,
                                o = e.x,
                                a = e.y;
                            return i > o - r && i < o + r && n > a - r && n < a + r && Math.sqrt(Math.pow(i - o, 2) + Math.pow(n - a, 2)) < r;
                        }),
                        (e.prototype.getQuadNodes = function (t) {
                            var e = this.viewportToFramedGraph(t);
                            return this.quadtree.point(e.x, 1 - e.y);
                        }),
                        (e.prototype.getNodeAtPosition = function (t) {
                            for (var e = t.x, r = t.y, i = this.getQuadNodes(t), n = 1 / 0, o = null, a = 0, s = i.length; a < s; a++) {
                                var h = i[a],
                                    l = this.nodeDataCache[h],
                                    c = this.framedGraphToViewport(l),
                                    u = this.scaleSize(l.size);
                                if (!l.hidden && this.mouseIsOnNode(t, c, u)) {
                                    var d = Math.sqrt(Math.pow(e - c.x, 2) + Math.pow(r - c.y, 2));
                                    d < n && ((n = d), (o = h));
                                }
                            }
                            return o;
                        }),
                        (e.prototype.bindEventHandlers = function () {
                            var t = this;
                            (this.activeListeners.handleResize = function () {
                                (t.needToSoftProcess = !0), t._scheduleRefresh();
                            }),
                                window.addEventListener("resize", this.activeListeners.handleResize),
                                (this.activeListeners.handleMove = function (e) {
                                    var r = {
                                            event: e,
                                            preventSigmaDefault: function () {
                                                e.preventSigmaDefault();
                                            },
                                        },
                                        i = t.getNodeAtPosition(e);
                                    if (i && t.hoveredNode !== i && !t.nodeDataCache[i].hidden)
                                        return t.hoveredNode && t.emit("leaveNode", o(o({}, r), { node: t.hoveredNode })), (t.hoveredNode = i), t.emit("enterNode", o(o({}, r), { node: i })), void t.scheduleHighlightedNodesRender();
                                    if (t.hoveredNode) {
                                        var n = t.nodeDataCache[t.hoveredNode],
                                            a = t.framedGraphToViewport(n),
                                            s = t.scaleSize(n.size);
                                        if (!t.mouseIsOnNode(e, a, s)) {
                                            var h = t.hoveredNode;
                                            return (t.hoveredNode = null), t.emit("leaveNode", o(o({}, r), { node: h })), void t.scheduleHighlightedNodesRender();
                                        }
                                    }
                                    !0 === t.settings.enableEdgeHoverEvents
                                        ? t.checkEdgeHoverEvents(r)
                                        : "debounce" === t.settings.enableEdgeHoverEvents &&
                                          (t.checkEdgesEventsFrame ||
                                              (t.checkEdgesEventsFrame = (0, f.requestFrame)(function () {
                                                  t.checkEdgeHoverEvents(r), (t.checkEdgesEventsFrame = null);
                                              })));
                                });
                            var e = function (e) {
                                return function (r) {
                                    var i = {
                                            event: r,
                                            preventSigmaDefault: function () {
                                                r.preventSigmaDefault();
                                            },
                                        },
                                        n = r.original.isFakeSigmaMouseEvent ? t.getNodeAtPosition(r) : t.hoveredNode;
                                    if (n) return t.emit("".concat(e, "Node"), o(o({}, i), { node: n }));
                                    if ("wheel" === e ? t.settings.enableEdgeWheelEvents : t.settings.enableEdgeClickEvents) {
                                        var a = t.getEdgeAtPoint(r.x, r.y);
                                        if (a) return t.emit("".concat(e, "Edge"), o(o({}, i), { edge: a }));
                                    }
                                    return t.emit("".concat(e, "Stage"), i);
                                };
                            };
                            return (
                                (this.activeListeners.handleClick = e("click")),
                                (this.activeListeners.handleRightClick = e("rightClick")),
                                (this.activeListeners.handleDoubleClick = e("doubleClick")),
                                (this.activeListeners.handleWheel = e("wheel")),
                                (this.activeListeners.handleDown = e("down")),
                                this.mouseCaptor.on("mousemove", this.activeListeners.handleMove),
                                this.mouseCaptor.on("click", this.activeListeners.handleClick),
                                this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick),
                                this.mouseCaptor.on("doubleClick", this.activeListeners.handleDoubleClick),
                                this.mouseCaptor.on("wheel", this.activeListeners.handleWheel),
                                this.mouseCaptor.on("mousedown", this.activeListeners.handleDown),
                                this
                            );
                        }),
                        (e.prototype.bindGraphHandlers = function () {
                            var t = this,
                                e = this.graph;
                            return (
                                (this.activeListeners.graphUpdate = function () {
                                    (t.needToProcess = !0), t._scheduleRefresh();
                                }),
                                (this.activeListeners.softGraphUpdate = function () {
                                    (t.needToSoftProcess = !0), t._scheduleRefresh();
                                }),
                                (this.activeListeners.dropNodeGraphUpdate = function (e) {
                                    delete t.nodeDataCache[e.key], t.hoveredNode === e.key && (t.hoveredNode = null), t.activeListeners.graphUpdate();
                                }),
                                (this.activeListeners.dropEdgeGraphUpdate = function (e) {
                                    delete t.edgeDataCache[e.key], t.hoveredEdge === e.key && (t.hoveredEdge = null), t.activeListeners.graphUpdate();
                                }),
                                (this.activeListeners.clearEdgesGraphUpdate = function () {
                                    (t.edgeDataCache = {}), (t.hoveredEdge = null), t.activeListeners.graphUpdate();
                                }),
                                (this.activeListeners.clearGraphUpdate = function () {
                                    (t.nodeDataCache = {}), (t.hoveredNode = null), t.activeListeners.clearEdgesGraphUpdate();
                                }),
                                e.on("nodeAdded", this.activeListeners.graphUpdate),
                                e.on("nodeDropped", this.activeListeners.dropNodeGraphUpdate),
                                e.on("nodeAttributesUpdated", this.activeListeners.softGraphUpdate),
                                e.on("eachNodeAttributesUpdated", this.activeListeners.graphUpdate),
                                e.on("edgeAdded", this.activeListeners.graphUpdate),
                                e.on("edgeDropped", this.activeListeners.dropEdgeGraphUpdate),
                                e.on("edgeAttributesUpdated", this.activeListeners.softGraphUpdate),
                                e.on("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate),
                                e.on("edgesCleared", this.activeListeners.clearEdgesGraphUpdate),
                                e.on("cleared", this.activeListeners.clearGraphUpdate),
                                this
                            );
                        }),
                        (e.prototype.unbindGraphHandlers = function () {
                            var t = this.graph;
                            t.removeListener("nodeAdded", this.activeListeners.graphUpdate),
                                t.removeListener("nodeDropped", this.activeListeners.dropNodeGraphUpdate),
                                t.removeListener("nodeAttributesUpdated", this.activeListeners.softGraphUpdate),
                                t.removeListener("eachNodeAttributesUpdated", this.activeListeners.graphUpdate),
                                t.removeListener("edgeAdded", this.activeListeners.graphUpdate),
                                t.removeListener("edgeDropped", this.activeListeners.dropEdgeGraphUpdate),
                                t.removeListener("edgeAttributesUpdated", this.activeListeners.softGraphUpdate),
                                t.removeListener("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate),
                                t.removeListener("edgesCleared", this.activeListeners.clearEdgesGraphUpdate),
                                t.removeListener("cleared", this.activeListeners.clearGraphUpdate);
                        }),
                        (e.prototype.checkEdgeHoverEvents = function (t) {
                            var e = this.hoveredNode ? null : this.getEdgeAtPoint(t.event.x, t.event.y);
                            return e !== this.hoveredEdge && (this.hoveredEdge && this.emit("leaveEdge", o(o({}, t), { edge: this.hoveredEdge })), e && this.emit("enterEdge", o(o({}, t), { edge: e })), (this.hoveredEdge = e)), this;
                        }),
                        (e.prototype.getEdgeAtPoint = function (t, e) {
                            var r,
                                i,
                                n = this,
                                o = this.edgeDataCache,
                                s = this.nodeDataCache;
                            if (!(0, y.isPixelColored)(this.webGLContexts.edges, t * this.pixelRatio, e * this.pixelRatio)) return null;
                            var h = this.viewportToGraph({ x: t, y: e }),
                                l = h.x,
                                c = h.y,
                                u = 0;
                            if (
                                (this.graph.someEdge(function (t, e, r, i, a, h) {
                                    var l = a.x,
                                        c = a.y,
                                        d = h.x,
                                        f = h.y;
                                    if (o[t].hidden || s[r].hidden || s[i].hidden) return !1;
                                    if (l !== d || c !== f) {
                                        var p = Math.sqrt(Math.pow(d - l, 2) + Math.pow(f - c, 2)),
                                            g = n.graphToViewport({ x: l, y: c }),
                                            v = g.x,
                                            m = g.y,
                                            y = n.graphToViewport({ x: d, y: f }),
                                            b = y.x,
                                            _ = y.y,
                                            x = Math.sqrt(Math.pow(b - v, 2) + Math.pow(_ - m, 2));
                                        return (u = p / x), !0;
                                    }
                                }),
                                !u)
                            )
                                return null;
                            var d = this.graph.filterEdges(function (t, e, r, i, a, h) {
                                return !(o[t].hidden || s[r].hidden || s[i].hidden) && (!!(0, y.doEdgeCollideWithPoint)(l, c, a.x, a.y, h.x, h.y, (o[t].size * u) / n.cameraSizeRatio) || void 0);
                            });
                            if (0 === d.length) return null;
                            var f = d[d.length - 1],
                                p = -1 / 0;
                            try {
                                for (var g = a(d), v = g.next(); !v.done; v = g.next()) {
                                    var m = v.value,
                                        b = this.graph.getEdgeAttribute(m, "zIndex");
                                    b >= p && ((f = m), (p = b));
                                }
                            } catch (t) {
                                r = { error: t };
                            } finally {
                                try {
                                    v && !v.done && (i = g.return) && i.call(g);
                                } finally {
                                    if (r) throw r.error;
                                }
                            }
                            return f;
                        }),
                        (e.prototype.process = function (t) {
                            var e = this;
                            void 0 === t && (t = !1);
                            var r = this.graph,
                                i = this.settings,
                                n = this.getDimensions(),
                                o = [1 / 0, -1 / 0],
                                a = [1 / 0, -1 / 0];
                            this.quadtree.clear(),
                                this.labelGrid.resizeAndClear(n, i.labelGridCellSize),
                                (this.highlightedNodes = new Set()),
                                (this.nodeExtent = (0, f.graphExtent)(r)),
                                (this.nodesWithForcedLabels = []),
                                (this.edgesWithForcedLabels = []);
                            var s = new l.default(),
                                h = (0, f.matrixFromCamera)(s.getState(), this.getDimensions(), this.getGraphDimensions(), this.getSetting("stagePadding") || 0);
                            this.normalizationFunction = (0, f.createNormalizationFunction)(this.customBBox || this.nodeExtent);
                            for (var c = {}, u = r.nodes(), d = 0, p = u.length; d < p; d++) {
                                var g = u[d],
                                    v = Object.assign({}, r.getNodeAttributes(g));
                                i.nodeReducer && (v = i.nodeReducer(g, v)),
                                    (c[(y = b(this.settings, g, v)).type] = (c[y.type] || 0) + 1),
                                    (this.nodeDataCache[g] = y),
                                    this.normalizationFunction.applyTo(y),
                                    y.forceLabel && this.nodesWithForcedLabels.push(g),
                                    this.settings.zIndex && (y.zIndex < o[0] && (o[0] = y.zIndex), y.zIndex > o[1] && (o[1] = y.zIndex));
                            }
                            for (var m in this.nodePrograms) {
                                if (!this.nodePrograms.hasOwnProperty(m)) throw new Error('Sigma: could not find a suitable program for node type "'.concat(m, '"!'));
                                t || this.nodePrograms[m].allocate(c[m] || 0), (c[m] = 0);
                            }
                            for (
                                this.settings.zIndex &&
                                    o[0] !== o[1] &&
                                    (u = (0, f.zIndexOrdering)(
                                        o,
                                        function (t) {
                                            return e.nodeDataCache[t].zIndex;
                                        },
                                        u
                                    )),
                                    d = 0,
                                    p = u.length;
                                d < p;
                                d++
                            ) {
                                g = u[d];
                                var y = this.nodeDataCache[g];
                                this.quadtree.add(g, y.x, 1 - y.y, y.size / this.width), "string" != typeof y.label || y.hidden || this.labelGrid.add(g, y.size, this.framedGraphToViewport(y, { matrix: h }));
                                var x = this.nodePrograms[y.type];
                                if (!x) throw new Error('Sigma: could not find a suitable program for node type "'.concat(y.type, '"!'));
                                x.process(y, y.hidden, c[y.type]++), y.highlighted && !y.hidden && this.highlightedNodes.add(g);
                            }
                            this.labelGrid.organize();
                            var w = {},
                                E = r.edges();
                            for (d = 0, p = E.length; d < p; d++) {
                                var L = E[d];
                                (v = Object.assign({}, r.getEdgeAttributes(L))),
                                    i.edgeReducer && (v = i.edgeReducer(L, v)),
                                    (w[(y = _(this.settings, 0, v)).type] = (w[y.type] || 0) + 1),
                                    (this.edgeDataCache[L] = y),
                                    y.forceLabel && !y.hidden && this.edgesWithForcedLabels.push(L),
                                    this.settings.zIndex && (y.zIndex < a[0] && (a[0] = y.zIndex), y.zIndex > a[1] && (a[1] = y.zIndex));
                            }
                            for (var m in this.edgePrograms) {
                                if (!this.edgePrograms.hasOwnProperty(m)) throw new Error('Sigma: could not find a suitable program for edge type "'.concat(m, '"!'));
                                t || this.edgePrograms[m].allocate(w[m] || 0), (w[m] = 0);
                            }
                            for (
                                this.settings.zIndex &&
                                    a[0] !== a[1] &&
                                    (E = (0, f.zIndexOrdering)(
                                        a,
                                        function (t) {
                                            return e.edgeDataCache[t].zIndex;
                                        },
                                        E
                                    )),
                                    d = 0,
                                    p = E.length;
                                d < p;
                                d++
                            ) {
                                (L = E[d]), (y = this.edgeDataCache[L]);
                                var F = r.extremities(L),
                                    C = this.nodeDataCache[F[0]],
                                    A = this.nodeDataCache[F[1]],
                                    T = y.hidden || C.hidden || A.hidden;
                                this.edgePrograms[y.type].process(C, A, y, T, w[y.type]++);
                            }
                            for (var m in this.edgePrograms) {
                                var P = this.edgePrograms[m];
                                t || "function" != typeof P.computeIndices || P.computeIndices();
                            }
                            return this;
                        }),
                        (e.prototype.handleSettingsUpdate = function () {
                            return (this.camera.minRatio = this.settings.minCameraRatio), (this.camera.maxRatio = this.settings.maxCameraRatio), this.camera.setState(this.camera.validateState(this.camera.getState())), this;
                        }),
                        (e.prototype._refresh = function () {
                            return this.needToProcess ? this.process() : this.needToSoftProcess && this.process(!0), (this.needToProcess = !1), (this.needToSoftProcess = !1), this.render(), this;
                        }),
                        (e.prototype._scheduleRefresh = function () {
                            var t = this;
                            return (
                                this.renderFrame ||
                                    (this.renderFrame = (0, f.requestFrame)(function () {
                                        t._refresh(), (t.renderFrame = null);
                                    })),
                                this
                            );
                        }),
                        (e.prototype.renderLabels = function () {
                            if (!this.settings.renderLabels) return this;
                            var t = this.camera.getState(),
                                e = this.labelGrid.getLabelsToDisplay(t.ratio, this.settings.labelDensity);
                            (0, h.default)(e, this.nodesWithForcedLabels), (this.displayedLabels = new Set());
                            for (var r = this.canvasContexts.labels, i = 0, n = e.length; i < n; i++) {
                                var a = e[i],
                                    s = this.nodeDataCache[a];
                                if (!this.displayedLabels.has(a) && !s.hidden) {
                                    var l = this.framedGraphToViewport(s),
                                        c = l.x,
                                        u = l.y,
                                        d = this.scaleSize(s.size);
                                    (!s.forceLabel && d < this.settings.labelRenderedSizeThreshold) ||
                                        c < -150 ||
                                        c > this.width + 150 ||
                                        u < -50 ||
                                        u > this.height + 50 ||
                                        (this.displayedLabels.add(a), this.settings.labelRenderer(r, o(o({ key: a }, s), { size: d, x: c, y: u }), this.settings));
                                }
                            }
                            return this;
                        }),
                        (e.prototype.renderEdgeLabels = function () {
                            if (!this.settings.renderEdgeLabels) return this;
                            var t = this.canvasContexts.edgeLabels;
                            t.clearRect(0, 0, this.width, this.height);
                            for (
                                var e = (0, p.edgeLabelsToDisplayFromNodes)({ graph: this.graph, hoveredNode: this.hoveredNode, displayedNodeLabels: this.displayedLabels, highlightedNodes: this.highlightedNodes }).concat(
                                        this.edgesWithForcedLabels
                                    ),
                                    r = new Set(),
                                    i = 0,
                                    n = e.length;
                                i < n;
                                i++
                            ) {
                                var a = e[i],
                                    s = this.graph.extremities(a),
                                    h = this.nodeDataCache[s[0]],
                                    l = this.nodeDataCache[s[1]],
                                    c = this.edgeDataCache[a];
                                r.has(a) ||
                                    c.hidden ||
                                    h.hidden ||
                                    l.hidden ||
                                    (this.settings.edgeLabelRenderer(
                                        t,
                                        o(o({ key: a }, c), { size: this.scaleSize(c.size) }),
                                        o(o(o({ key: s[0] }, h), this.framedGraphToViewport(h)), { size: this.scaleSize(h.size) }),
                                        o(o(o({ key: s[1] }, l), this.framedGraphToViewport(l)), { size: this.scaleSize(l.size) }),
                                        this.settings
                                    ),
                                    r.add(a));
                            }
                            return this;
                        }),
                        (e.prototype.renderHighlightedNodes = function () {
                            var t = this,
                                e = this.canvasContexts.hovers;
                            e.clearRect(0, 0, this.width, this.height);
                            var r = [];
                            this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden && r.push(this.hoveredNode),
                                this.highlightedNodes.forEach(function (e) {
                                    e !== t.hoveredNode && r.push(e);
                                }),
                                r.forEach(function (r) {
                                    return (function (r) {
                                        var i = t.nodeDataCache[r],
                                            n = t.framedGraphToViewport(i),
                                            a = n.x,
                                            s = n.y,
                                            h = t.scaleSize(i.size);
                                        t.settings.hoverRenderer(e, o(o({ key: r }, i), { size: h, x: a, y: s }), t.settings);
                                    })(r);
                                });
                            var i = {};
                            for (var n in (r.forEach(function (e) {
                                var r = t.nodeDataCache[e].type;
                                i[r] = (i[r] || 0) + 1;
                            }),
                            this.nodeHoverPrograms))
                                this.nodeHoverPrograms[n].allocate(i[n] || 0), (i[n] = 0);
                            for (var n in (r.forEach(function (e) {
                                var r = t.nodeDataCache[e];
                                t.nodeHoverPrograms[r.type].process(r, r.hidden, i[r.type]++);
                            }),
                            this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT),
                            this.nodeHoverPrograms)) {
                                var a = this.nodeHoverPrograms[n];
                                a.bind(),
                                    a.bufferData(),
                                    a.render({ matrix: this.matrix, width: this.width, height: this.height, ratio: this.camera.ratio, correctionRatio: this.correctionRatio / this.camera.ratio, scalingRatio: this.pixelRatio });
                            }
                        }),
                        (e.prototype.scheduleHighlightedNodesRender = function () {
                            var t = this;
                            this.renderHighlightedNodesFrame ||
                                this.renderFrame ||
                                (this.renderHighlightedNodesFrame = (0, f.requestFrame)(function () {
                                    (t.renderHighlightedNodesFrame = null), t.renderHighlightedNodes(), t.renderEdgeLabels();
                                }));
                        }),
                        (e.prototype.render = function () {
                            var t = this;
                            this.emit("beforeRender");
                            var e = function () {
                                return t.emit("afterRender"), t;
                            };
                            if (
                                (this.renderFrame && ((0, f.cancelFrame)(this.renderFrame), (this.renderFrame = null), (this.needToProcess = !1), (this.needToSoftProcess = !1)),
                                this.resize(),
                                this.clear(),
                                this.updateCachedValues(),
                                !this.graph.order)
                            )
                                return e();
                            var r = this.mouseCaptor,
                                i = this.camera.isAnimated() || r.isMoving || r.draggedEvents || r.currentWheelDirection,
                                n = this.camera.getState(),
                                o = this.getDimensions(),
                                a = this.getGraphDimensions(),
                                s = this.getSetting("stagePadding") || 0;
                            for (var h in ((this.matrix = (0, f.matrixFromCamera)(n, o, a, s)),
                            (this.invMatrix = (0, f.matrixFromCamera)(n, o, a, s, !0)),
                            (this.correctionRatio = (0, f.getMatrixImpact)(this.matrix, n, o)),
                            this.nodePrograms))
                                (l = this.nodePrograms[h]).bind(),
                                    l.bufferData(),
                                    l.render({ matrix: this.matrix, width: this.width, height: this.height, ratio: n.ratio, correctionRatio: this.correctionRatio / n.ratio, scalingRatio: this.pixelRatio });
                            if (!this.settings.hideEdgesOnMove || !i)
                                for (var h in this.edgePrograms) {
                                    var l;
                                    (l = this.edgePrograms[h]).bind(),
                                        l.bufferData(),
                                        l.render({ matrix: this.matrix, width: this.width, height: this.height, ratio: n.ratio, correctionRatio: this.correctionRatio / n.ratio, scalingRatio: this.pixelRatio });
                                }
                            return (this.settings.hideLabelsOnMove && i) || (this.renderLabels(), this.renderEdgeLabels(), this.renderHighlightedNodes()), e();
                        }),
                        (e.prototype.updateCachedValues = function () {
                            var t = this.camera.getState().ratio;
                            this.cameraSizeRatio = Math.sqrt(t);
                        }),
                        (e.prototype.getCamera = function () {
                            return this.camera;
                        }),
                        (e.prototype.getContainer = function () {
                            return this.container;
                        }),
                        (e.prototype.getGraph = function () {
                            return this.graph;
                        }),
                        (e.prototype.setGraph = function (t) {
                            t !== this.graph &&
                                (this.unbindGraphHandlers(),
                                (this.nodeDataCache = {}),
                                (this.edgeDataCache = {}),
                                this.displayedLabels.clear(),
                                this.highlightedNodes.clear(),
                                (this.hoveredNode = null),
                                (this.hoveredEdge = null),
                                (this.nodesWithForcedLabels.length = 0),
                                (this.edgesWithForcedLabels.length = 0),
                                null !== this.checkEdgesEventsFrame && ((0, f.cancelFrame)(this.checkEdgesEventsFrame), (this.checkEdgesEventsFrame = null)),
                                (this.graph = t),
                                this.bindGraphHandlers(),
                                this.process(),
                                this.render());
                        }),
                        (e.prototype.getMouseCaptor = function () {
                            return this.mouseCaptor;
                        }),
                        (e.prototype.getTouchCaptor = function () {
                            return this.touchCaptor;
                        }),
                        (e.prototype.getDimensions = function () {
                            return { width: this.width, height: this.height };
                        }),
                        (e.prototype.getGraphDimensions = function () {
                            var t = this.customBBox || this.nodeExtent;
                            return { width: t.x[1] - t.x[0] || 1, height: t.y[1] - t.y[0] || 1 };
                        }),
                        (e.prototype.getNodeDisplayData = function (t) {
                            var e = this.nodeDataCache[t];
                            return e ? Object.assign({}, e) : void 0;
                        }),
                        (e.prototype.getEdgeDisplayData = function (t) {
                            var e = this.edgeDataCache[t];
                            return e ? Object.assign({}, e) : void 0;
                        }),
                        (e.prototype.getSettings = function () {
                            return o({}, this.settings);
                        }),
                        (e.prototype.getSetting = function (t) {
                            return this.settings[t];
                        }),
                        (e.prototype.setSetting = function (t, e) {
                            return (this.settings[t] = e), (0, g.validateSettings)(this.settings), this.handleSettingsUpdate(), (this.needToProcess = !0), this._scheduleRefresh(), this;
                        }),
                        (e.prototype.updateSetting = function (t, e) {
                            return (this.settings[t] = e(this.settings[t])), (0, g.validateSettings)(this.settings), this.handleSettingsUpdate(), (this.needToProcess = !0), this._scheduleRefresh(), this;
                        }),
                        (e.prototype.resize = function () {
                            var t = this.width,
                                e = this.height;
                            if (((this.width = this.container.offsetWidth), (this.height = this.container.offsetHeight), (this.pixelRatio = (0, f.getPixelRatio)()), 0 === this.width)) {
                                if (!this.settings.allowInvalidContainer) throw new Error("Sigma: Container has no width. You can set the allowInvalidContainer setting to true to stop seeing this error.");
                                this.width = 1;
                            }
                            if (0 === this.height) {
                                if (!this.settings.allowInvalidContainer) throw new Error("Sigma: Container has no height. You can set the allowInvalidContainer setting to true to stop seeing this error.");
                                this.height = 1;
                            }
                            if (t === this.width && e === this.height) return this;
                            for (var r in (this.emit("resize"), this.elements)) {
                                var i = this.elements[r];
                                (i.style.width = this.width + "px"), (i.style.height = this.height + "px");
                            }
                            for (var r in this.canvasContexts)
                                this.elements[r].setAttribute("width", this.width * this.pixelRatio + "px"),
                                    this.elements[r].setAttribute("height", this.height * this.pixelRatio + "px"),
                                    1 !== this.pixelRatio && this.canvasContexts[r].scale(this.pixelRatio, this.pixelRatio);
                            for (var r in this.webGLContexts)
                                this.elements[r].setAttribute("width", this.width * this.pixelRatio + "px"),
                                    this.elements[r].setAttribute("height", this.height * this.pixelRatio + "px"),
                                    this.webGLContexts[r].viewport(0, 0, this.width * this.pixelRatio, this.height * this.pixelRatio);
                            return this;
                        }),
                        (e.prototype.clear = function () {
                            return (
                                this.webGLContexts.nodes.clear(this.webGLContexts.nodes.COLOR_BUFFER_BIT),
                                this.webGLContexts.edges.clear(this.webGLContexts.edges.COLOR_BUFFER_BIT),
                                this.webGLContexts.hoverNodes.clear(this.webGLContexts.hoverNodes.COLOR_BUFFER_BIT),
                                this.canvasContexts.labels.clearRect(0, 0, this.width, this.height),
                                this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height),
                                this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height),
                                this
                            );
                        }),
                        (e.prototype.refresh = function () {
                            return (this.needToProcess = !0), this._refresh(), this;
                        }),
                        (e.prototype.scheduleRefresh = function () {
                            return (this.needToProcess = !0), this._scheduleRefresh(), this;
                        }),
                        (e.prototype.getViewportZoomedState = function (t, e) {
                            var r = this.camera.getState(),
                                i = r.ratio,
                                n = r.angle,
                                o = r.x,
                                a = r.y,
                                s = e / i,
                                h = { x: this.width / 2, y: this.height / 2 },
                                l = this.viewportToFramedGraph(t),
                                c = this.viewportToFramedGraph(h);
                            return { angle: n, x: (l.x - c.x) * (1 - s) + o, y: (l.y - c.y) * (1 - s) + a, ratio: e };
                        }),
                        (e.prototype.viewRectangle = function () {
                            var t = (0 * this.width) / 8,
                                e = (0 * this.height) / 8,
                                r = this.viewportToFramedGraph({ x: 0 - t, y: 0 - e }),
                                i = this.viewportToFramedGraph({ x: this.width + t, y: 0 - e }),
                                n = this.viewportToFramedGraph({ x: 0, y: this.height + e });
                            return { x1: r.x, y1: r.y, x2: i.x, y2: i.y, height: i.y - n.y };
                        }),
                        (e.prototype.framedGraphToViewport = function (t, e) {
                            void 0 === e && (e = {});
                            var r = !!e.cameraState || !!e.viewportDimensions || !!e.graphDimensions,
                                i = e.matrix
                                    ? e.matrix
                                    : r
                                    ? (0, f.matrixFromCamera)(
                                          e.cameraState || this.camera.getState(),
                                          e.viewportDimensions || this.getDimensions(),
                                          e.graphDimensions || this.getGraphDimensions(),
                                          e.padding || this.getSetting("stagePadding") || 0
                                      )
                                    : this.matrix,
                                n = (0, m.multiplyVec2)(i, t);
                            return { x: ((1 + n.x) * this.width) / 2, y: ((1 - n.y) * this.height) / 2 };
                        }),
                        (e.prototype.viewportToFramedGraph = function (t, e) {
                            void 0 === e && (e = {});
                            var r = !!e.cameraState || !!e.viewportDimensions || !e.graphDimensions,
                                i = e.matrix
                                    ? e.matrix
                                    : r
                                    ? (0, f.matrixFromCamera)(
                                          e.cameraState || this.camera.getState(),
                                          e.viewportDimensions || this.getDimensions(),
                                          e.graphDimensions || this.getGraphDimensions(),
                                          e.padding || this.getSetting("stagePadding") || 0,
                                          !0
                                      )
                                    : this.invMatrix,
                                n = (0, m.multiplyVec2)(i, { x: (t.x / this.width) * 2 - 1, y: 1 - (t.y / this.height) * 2 });
                            return isNaN(n.x) && (n.x = 0), isNaN(n.y) && (n.y = 0), n;
                        }),
                        (e.prototype.viewportToGraph = function (t, e) {
                            return void 0 === e && (e = {}), this.normalizationFunction.inverse(this.viewportToFramedGraph(t, e));
                        }),
                        (e.prototype.graphToViewport = function (t, e) {
                            return void 0 === e && (e = {}), this.framedGraphToViewport(this.normalizationFunction(t), e);
                        }),
                        (e.prototype.getBBox = function () {
                            return (0, f.graphExtent)(this.graph);
                        }),
                        (e.prototype.getCustomBBox = function () {
                            return this.customBBox;
                        }),
                        (e.prototype.setCustomBBox = function (t) {
                            return (this.customBBox = t), this._scheduleRefresh(), this;
                        }),
                        (e.prototype.kill = function () {
                            this.emit("kill"),
                                this.removeAllListeners(),
                                this.camera.removeListener("updated", this.activeListeners.camera),
                                window.removeEventListener("resize", this.activeListeners.handleResize),
                                this.mouseCaptor.kill(),
                                this.touchCaptor.kill(),
                                this.unbindGraphHandlers(),
                                (this.quadtree = new u.default()),
                                (this.nodeDataCache = {}),
                                (this.edgeDataCache = {}),
                                (this.nodesWithForcedLabels = []),
                                (this.edgesWithForcedLabels = []),
                                this.highlightedNodes.clear(),
                                this.renderFrame && ((0, f.cancelFrame)(this.renderFrame), (this.renderFrame = null)),
                                this.renderHighlightedNodesFrame && ((0, f.cancelFrame)(this.renderHighlightedNodesFrame), (this.renderHighlightedNodesFrame = null));
                            for (var t = this.container; t.firstChild; ) t.removeChild(t.firstChild);
                        }),
                        (e.prototype.scaleSize = function (t) {
                            return t / this.cameraSizeRatio;
                        }),
                        (e.prototype.getCanvases = function () {
                            return o({}, this.elements);
                        }),
                        e
                    );
                })(d.TypedEventEmitter);
                e.default = x;
            },
            699: function (t, e, r) {
                "use strict";
                var i,
                    n =
                        (this && this.__extends) ||
                        ((i = function (t, e) {
                            return (
                                (i =
                                    Object.setPrototypeOf ||
                                    ({ __proto__: [] } instanceof Array &&
                                        function (t, e) {
                                            t.__proto__ = e;
                                        }) ||
                                    function (t, e) {
                                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                                    }),
                                i(t, e)
                            );
                        }),
                        function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
                            function r() {
                                this.constructor = t;
                            }
                            i(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
                        });
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.TypedEventEmitter = void 0);
                var o = (function (t) {
                    function e() {
                        var e = t.call(this) || this;
                        return (e.rawEmitter = e), e;
                    }
                    return n(e, t), e;
                })(r(187).EventEmitter);
                e.TypedEventEmitter = o;
            },
            751: function (t, e, r) {
                "use strict";
                var i =
                    (this && this.__importDefault) ||
                    function (t) {
                        return t && t.__esModule ? t : { default: t };
                    };
                Object.defineProperty(e, "__esModule", { value: !0 }), (e.animateNodes = e.ANIMATE_DEFAULTS = void 0);
                var n = r(928),
                    o = i(r(358));
                (e.ANIMATE_DEFAULTS = { easing: "quadraticInOut", duration: 150 }),
                    (e.animateNodes = function (t, r, i, a) {
                        var s = Object.assign({}, e.ANIMATE_DEFAULTS, i),
                            h = "function" == typeof s.easing ? s.easing : o.default[s.easing],
                            l = Date.now(),
                            c = {};
                        for (var u in r) {
                            var d = r[u];
                            for (var f in ((c[u] = {}), d)) c[u][f] = t.getNodeAttribute(u, f);
                        }
                        var p = null,
                            g = function () {
                                p = null;
                                var e = (Date.now() - l) / s.duration;
                                if (e >= 1) {
                                    for (var i in r) {
                                        var o = r[i];
                                        for (var u in o) t.setNodeAttribute(i, u, o[u]);
                                    }
                                    "function" == typeof a && a();
                                } else {
                                    for (var i in ((e = h(e)), r)) {
                                        o = r[i];
                                        var d = c[i];
                                        for (var u in o) t.setNodeAttribute(i, u, o[u] * e + d[u] * (1 - e));
                                    }
                                    p = (0, n.requestFrame)(g);
                                }
                            };
                        return (
                            g(),
                            function () {
                                p && (0, n.cancelFrame)(p);
                            }
                        );
                    });
            },
            634: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.HTML_COLORS = void 0),
                    (e.HTML_COLORS = {
                        black: "#000000",
                        silver: "#C0C0C0",
                        gray: "#808080",
                        grey: "#808080",
                        white: "#FFFFFF",
                        maroon: "#800000",
                        red: "#FF0000",
                        purple: "#800080",
                        fuchsia: "#FF00FF",
                        green: "#008000",
                        lime: "#00FF00",
                        olive: "#808000",
                        yellow: "#FFFF00",
                        navy: "#000080",
                        blue: "#0000FF",
                        teal: "#008080",
                        aqua: "#00FFFF",
                        darkblue: "#00008B",
                        mediumblue: "#0000CD",
                        darkgreen: "#006400",
                        darkcyan: "#008B8B",
                        deepskyblue: "#00BFFF",
                        darkturquoise: "#00CED1",
                        mediumspringgreen: "#00FA9A",
                        springgreen: "#00FF7F",
                        cyan: "#00FFFF",
                        midnightblue: "#191970",
                        dodgerblue: "#1E90FF",
                        lightseagreen: "#20B2AA",
                        forestgreen: "#228B22",
                        seagreen: "#2E8B57",
                        darkslategray: "#2F4F4F",
                        darkslategrey: "#2F4F4F",
                        limegreen: "#32CD32",
                        mediumseagreen: "#3CB371",
                        turquoise: "#40E0D0",
                        royalblue: "#4169E1",
                        steelblue: "#4682B4",
                        darkslateblue: "#483D8B",
                        mediumturquoise: "#48D1CC",
                        indigo: "#4B0082",
                        darkolivegreen: "#556B2F",
                        cadetblue: "#5F9EA0",
                        cornflowerblue: "#6495ED",
                        rebeccapurple: "#663399",
                        mediumaquamarine: "#66CDAA",
                        dimgray: "#696969",
                        dimgrey: "#696969",
                        slateblue: "#6A5ACD",
                        olivedrab: "#6B8E23",
                        slategray: "#708090",
                        slategrey: "#708090",
                        lightslategray: "#778899",
                        lightslategrey: "#778899",
                        mediumslateblue: "#7B68EE",
                        lawngreen: "#7CFC00",
                        chartreuse: "#7FFF00",
                        aquamarine: "#7FFFD4",
                        skyblue: "#87CEEB",
                        lightskyblue: "#87CEFA",
                        blueviolet: "#8A2BE2",
                        darkred: "#8B0000",
                        darkmagenta: "#8B008B",
                        saddlebrown: "#8B4513",
                        darkseagreen: "#8FBC8F",
                        lightgreen: "#90EE90",
                        mediumpurple: "#9370DB",
                        darkviolet: "#9400D3",
                        palegreen: "#98FB98",
                        darkorchid: "#9932CC",
                        yellowgreen: "#9ACD32",
                        sienna: "#A0522D",
                        brown: "#A52A2A",
                        darkgray: "#A9A9A9",
                        darkgrey: "#A9A9A9",
                        lightblue: "#ADD8E6",
                        greenyellow: "#ADFF2F",
                        paleturquoise: "#AFEEEE",
                        lightsteelblue: "#B0C4DE",
                        powderblue: "#B0E0E6",
                        firebrick: "#B22222",
                        darkgoldenrod: "#B8860B",
                        mediumorchid: "#BA55D3",
                        rosybrown: "#BC8F8F",
                        darkkhaki: "#BDB76B",
                        mediumvioletred: "#C71585",
                        indianred: "#CD5C5C",
                        peru: "#CD853F",
                        chocolate: "#D2691E",
                        tan: "#D2B48C",
                        lightgray: "#D3D3D3",
                        lightgrey: "#D3D3D3",
                        thistle: "#D8BFD8",
                        orchid: "#DA70D6",
                        goldenrod: "#DAA520",
                        palevioletred: "#DB7093",
                        crimson: "#DC143C",
                        gainsboro: "#DCDCDC",
                        plum: "#DDA0DD",
                        burlywood: "#DEB887",
                        lightcyan: "#E0FFFF",
                        lavender: "#E6E6FA",
                        darksalmon: "#E9967A",
                        violet: "#EE82EE",
                        palegoldenrod: "#EEE8AA",
                        lightcoral: "#F08080",
                        khaki: "#F0E68C",
                        aliceblue: "#F0F8FF",
                        honeydew: "#F0FFF0",
                        azure: "#F0FFFF",
                        sandybrown: "#F4A460",
                        wheat: "#F5DEB3",
                        beige: "#F5F5DC",
                        whitesmoke: "#F5F5F5",
                        mintcream: "#F5FFFA",
                        ghostwhite: "#F8F8FF",
                        salmon: "#FA8072",
                        antiquewhite: "#FAEBD7",
                        linen: "#FAF0E6",
                        lightgoldenrodyellow: "#FAFAD2",
                        oldlace: "#FDF5E6",
                        magenta: "#FF00FF",
                        deeppink: "#FF1493",
                        orangered: "#FF4500",
                        tomato: "#FF6347",
                        hotpink: "#FF69B4",
                        coral: "#FF7F50",
                        darkorange: "#FF8C00",
                        lightsalmon: "#FFA07A",
                        orange: "#FFA500",
                        lightpink: "#FFB6C1",
                        pink: "#FFC0CB",
                        gold: "#FFD700",
                        peachpuff: "#FFDAB9",
                        navajowhite: "#FFDEAD",
                        moccasin: "#FFE4B5",
                        bisque: "#FFE4C4",
                        mistyrose: "#FFE4E1",
                        blanchedalmond: "#FFEBCD",
                        papayawhip: "#FFEFD5",
                        lavenderblush: "#FFF0F5",
                        seashell: "#FFF5EE",
                        cornsilk: "#FFF8DC",
                        lemonchiffon: "#FFFACD",
                        floralwhite: "#FFFAF0",
                        snow: "#FFFAFA",
                        lightyellow: "#FFFFE0",
                        ivory: "#FFFFF0",
                    });
            },
            358: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.cubicInOut = e.cubicOut = e.cubicIn = e.quadraticInOut = e.quadraticOut = e.quadraticIn = e.linear = void 0),
                    (e.linear = function (t) {
                        return t;
                    }),
                    (e.quadraticIn = function (t) {
                        return t * t;
                    }),
                    (e.quadraticOut = function (t) {
                        return t * (2 - t);
                    }),
                    (e.quadraticInOut = function (t) {
                        return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
                    }),
                    (e.cubicIn = function (t) {
                        return t * t * t;
                    }),
                    (e.cubicOut = function (t) {
                        return --t * t * t + 1;
                    }),
                    (e.cubicInOut = function (t) {
                        return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
                    });
                var r = { linear: e.linear, quadraticIn: e.quadraticIn, quadraticOut: e.quadraticOut, quadraticInOut: e.quadraticInOut, cubicIn: e.cubicIn, cubicOut: e.cubicOut, cubicInOut: e.cubicInOut };
                e.default = r;
            },
            628: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.doEdgeCollideWithPoint = e.isPixelColored = void 0),
                    (e.isPixelColored = function (t, e, r) {
                        var i = new Uint8Array(4);
                        return t.readPixels(e, t.drawingBufferHeight - r, 1, 1, t.RGBA, t.UNSIGNED_BYTE, i), i[3] > 0;
                    }),
                    (e.doEdgeCollideWithPoint = function (t, e, r, i, n, o, a) {
                        return !(
                            (t < r - a && t < n - a) ||
                            (e < i - a && e < o - a) ||
                            (t > r + a && t > n + a) ||
                            (e > i + a && e > o + a) ||
                            !(Math.abs((n - r) * (i - e) - (r - t) * (o - i)) / Math.sqrt(Math.pow(n - r, 2) + Math.pow(o - i, 2)) < a / 2)
                        );
                    });
            },
            928: function (t, e, r) {
                "use strict";
                var i =
                        (this && this.__read) ||
                        function (t, e) {
                            var r = "function" == typeof Symbol && t[Symbol.iterator];
                            if (!r) return t;
                            var i,
                                n,
                                o = r.call(t),
                                a = [];
                            try {
                                for (; (void 0 === e || e-- > 0) && !(i = o.next()).done; ) a.push(i.value);
                            } catch (t) {
                                n = { error: t };
                            } finally {
                                try {
                                    i && !i.done && (r = o.return) && r.call(o);
                                } finally {
                                    if (n) throw n.error;
                                }
                            }
                            return a;
                        },
                    n =
                        (this && this.__importDefault) ||
                        function (t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.validateGraph = e.canUse32BitsIndices = e.extractPixel = e.getMatrixImpact = e.matrixFromCamera = e.getCorrectionRatio = e.floatColor = e.floatArrayColor = e.parseColor = e.zIndexOrdering = e.createNormalizationFunction = e.graphExtent = e.getPixelRatio = e.createElement = e.cancelFrame = e.requestFrame = e.assignDeep = e.assign = e.isPlainObject = void 0);
                var o = n(r(186)),
                    a = r(700),
                    s = r(634);
                function h(t) {
                    return "object" == typeof t && null !== t && t.constructor === Object;
                }
                (e.isPlainObject = h),
                    (e.assign = function (t) {
                        for (var e = [], r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                        t = t || {};
                        for (var i = 0, n = e.length; i < n; i++) {
                            var o = e[i];
                            o && Object.assign(t, o);
                        }
                        return t;
                    }),
                    (e.assignDeep = function t(e) {
                        for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
                        e = e || {};
                        for (var n = 0, o = r.length; n < o; n++) {
                            var a = r[n];
                            if (a) for (var s in a) h(a[s]) ? (e[s] = t(e[s], a[s])) : (e[s] = a[s]);
                        }
                        return e;
                    }),
                    (e.requestFrame =
                        "undefined" != typeof requestAnimationFrame
                            ? function (t) {
                                  return requestAnimationFrame(t);
                              }
                            : function (t) {
                                  return setTimeout(t, 0);
                              }),
                    (e.cancelFrame =
                        "undefined" != typeof cancelAnimationFrame
                            ? function (t) {
                                  return cancelAnimationFrame(t);
                              }
                            : function (t) {
                                  return clearTimeout(t);
                              }),
                    (e.createElement = function (t, e, r) {
                        var i = document.createElement(t);
                        if (e) for (var n in e) i.style[n] = e[n];
                        if (r) for (var n in r) i.setAttribute(n, r[n]);
                        return i;
                    }),
                    (e.getPixelRatio = function () {
                        return void 0 !== window.devicePixelRatio ? window.devicePixelRatio : 1;
                    }),
                    (e.graphExtent = function (t) {
                        if (!t.order) return { x: [0, 1], y: [0, 1] };
                        var e = 1 / 0,
                            r = -1 / 0,
                            i = 1 / 0,
                            n = -1 / 0;
                        return (
                            t.forEachNode(function (t, o) {
                                var a = o.x,
                                    s = o.y;
                                a < e && (e = a), a > r && (r = a), s < i && (i = s), s > n && (n = s);
                            }),
                            { x: [e, r], y: [i, n] }
                        );
                    }),
                    (e.createNormalizationFunction = function (t) {
                        var e = i(t.x, 2),
                            r = e[0],
                            n = e[1],
                            o = i(t.y, 2),
                            a = o[0],
                            s = o[1],
                            h = Math.max(n - r, s - a),
                            l = (n + r) / 2,
                            c = (s + a) / 2;
                        (0 === h || Math.abs(h) === 1 / 0 || isNaN(h)) && (h = 1), isNaN(l) && (l = 0), isNaN(c) && (c = 0);
                        var u = function (t) {
                            return { x: 0.5 + (t.x - l) / h, y: 0.5 + (t.y - c) / h };
                        };
                        return (
                            (u.applyTo = function (t) {
                                (t.x = 0.5 + (t.x - l) / h), (t.y = 0.5 + (t.y - c) / h);
                            }),
                            (u.inverse = function (t) {
                                return { x: l + h * (t.x - 0.5), y: c + h * (t.y - 0.5) };
                            }),
                            (u.ratio = h),
                            u
                        );
                    }),
                    (e.zIndexOrdering = function (t, e, r) {
                        return r.sort(function (t, r) {
                            var i = e(t) || 0,
                                n = e(r) || 0;
                            return i < n ? -1 : i > n ? 1 : 0;
                        });
                    });
                var l = new Int8Array(4),
                    c = new Int32Array(l.buffer, 0, 1),
                    u = new Float32Array(l.buffer, 0, 1),
                    d = /^\s*rgba?\s*\(/,
                    f = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
                function p(t) {
                    var e = 0,
                        r = 0,
                        i = 0,
                        n = 1;
                    if ("#" === t[0])
                        4 === t.length
                            ? ((e = parseInt(t.charAt(1) + t.charAt(1), 16)), (r = parseInt(t.charAt(2) + t.charAt(2), 16)), (i = parseInt(t.charAt(3) + t.charAt(3), 16)))
                            : ((e = parseInt(t.charAt(1) + t.charAt(2), 16)), (r = parseInt(t.charAt(3) + t.charAt(4), 16)), (i = parseInt(t.charAt(5) + t.charAt(6), 16))),
                            9 === t.length && (n = parseInt(t.charAt(7) + t.charAt(8), 16) / 255);
                    else if (d.test(t)) {
                        var o = t.match(f);
                        o && ((e = +o[1]), (r = +o[2]), (i = +o[3]), o[4] && (n = +o[4]));
                    }
                    return { r: e, g: r, b: i, a: n };
                }
                e.parseColor = p;
                var g = {};
                for (var v in s.HTML_COLORS) (g[v] = m(s.HTML_COLORS[v])), (g[s.HTML_COLORS[v]] = g[v]);
                function m(t) {
                    if (void 0 !== g[t]) return g[t];
                    var e = p(t),
                        r = e.r,
                        i = e.g,
                        n = e.b,
                        o = e.a;
                    (o = (255 * o) | 0), (c[0] = 4278190079 & ((o << 24) | (n << 16) | (i << 8) | r));
                    var a = u[0];
                    return (g[t] = a), a;
                }
                function y(t, e) {
                    var r = t.height / t.width,
                        i = e.height / e.width;
                    return (r < 1 && i > 1) || (r > 1 && i < 1) ? 1 : Math.min(Math.max(i, 1 / i), Math.max(1 / r, r));
                }
                (e.floatArrayColor = function (t) {
                    var e = p((t = s.HTML_COLORS[t] || t)),
                        r = e.r,
                        i = e.g,
                        n = e.b,
                        o = e.a;
                    return new Float32Array([r / 255, i / 255, n / 255, o]);
                }),
                    (e.floatColor = m),
                    (e.getCorrectionRatio = y),
                    (e.matrixFromCamera = function (t, e, r, i, n) {
                        var o = t.angle,
                            s = t.ratio,
                            h = t.x,
                            l = t.y,
                            c = e.width,
                            u = e.height,
                            d = (0, a.identity)(),
                            f = Math.min(c, u) - 2 * i,
                            p = y(e, r);
                        return (
                            n
                                ? ((0, a.multiply)(d, (0, a.translate)((0, a.identity)(), h, l)),
                                  (0, a.multiply)(d, (0, a.scale)((0, a.identity)(), s)),
                                  (0, a.multiply)(d, (0, a.rotate)((0, a.identity)(), o)),
                                  (0, a.multiply)(d, (0, a.scale)((0, a.identity)(), c / f / 2 / p, u / f / 2 / p)))
                                : ((0, a.multiply)(d, (0, a.scale)((0, a.identity)(), (f / c) * 2 * p, (f / u) * 2 * p)),
                                  (0, a.multiply)(d, (0, a.rotate)((0, a.identity)(), -o)),
                                  (0, a.multiply)(d, (0, a.scale)((0, a.identity)(), 1 / s)),
                                  (0, a.multiply)(d, (0, a.translate)((0, a.identity)(), -h, -l))),
                            d
                        );
                    }),
                    (e.getMatrixImpact = function (t, e, r) {
                        var i = (0, a.multiplyVec2)(t, { x: Math.cos(e.angle), y: Math.sin(e.angle) }, 0),
                            n = i.x,
                            o = i.y;
                        return 1 / Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2)) / r.width;
                    }),
                    (e.extractPixel = function (t, e, r, i) {
                        var n = i || new Uint8Array(4);
                        return t.readPixels(e, r, 1, 1, t.RGBA, t.UNSIGNED_BYTE, n), n;
                    }),
                    (e.canUse32BitsIndices = function (t) {
                        return ("undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext) || !!t.getExtension("OES_element_index_uint");
                    }),
                    (e.validateGraph = function (t) {
                        if (!(0, o.default)(t)) throw new Error("Sigma: invalid graph instance.");
                        t.forEachNode(function (t, e) {
                            if (!Number.isFinite(e.x) || !Number.isFinite(e.y)) throw new Error("Sigma: Coordinates of node ".concat(t, " are invalid. A node must have a numeric 'x' and 'y' attribute."));
                        });
                    });
            },
            700: (t, e) => {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                    (e.multiplyVec2 = e.multiply = e.translate = e.rotate = e.scale = e.identity = void 0),
                    (e.identity = function () {
                        return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
                    }),
                    (e.scale = function (t, e, r) {
                        return (t[0] = e), (t[4] = "number" == typeof r ? r : e), t;
                    }),
                    (e.rotate = function (t, e) {
                        var r = Math.sin(e),
                            i = Math.cos(e);
                        return (t[0] = i), (t[1] = r), (t[3] = -r), (t[4] = i), t;
                    }),
                    (e.translate = function (t, e, r) {
                        return (t[6] = e), (t[7] = r), t;
                    }),
                    (e.multiply = function (t, e) {
                        var r = t[0],
                            i = t[1],
                            n = t[2],
                            o = t[3],
                            a = t[4],
                            s = t[5],
                            h = t[6],
                            l = t[7],
                            c = t[8],
                            u = e[0],
                            d = e[1],
                            f = e[2],
                            p = e[3],
                            g = e[4],
                            v = e[5],
                            m = e[6],
                            y = e[7],
                            b = e[8];
                        return (
                            (t[0] = u * r + d * o + f * h),
                            (t[1] = u * i + d * a + f * l),
                            (t[2] = u * n + d * s + f * c),
                            (t[3] = p * r + g * o + v * h),
                            (t[4] = p * i + g * a + v * l),
                            (t[5] = p * n + g * s + v * c),
                            (t[6] = m * r + y * o + b * h),
                            (t[7] = m * i + y * a + b * l),
                            (t[8] = m * n + y * s + b * c),
                            t
                        );
                    }),
                    (e.multiplyVec2 = function (t, e, r) {
                        void 0 === r && (r = 1);
                        var i = t[0],
                            n = t[1],
                            o = t[3],
                            a = t[4],
                            s = t[6],
                            h = t[7],
                            l = e.x,
                            c = e.y;
                        return { x: l * i + c * o + s * r, y: l * n + c * a + h * r };
                    });
            },
        },
        e = {};
    function r(i) {
        var n = e[i];
        if (void 0 !== n) return n.exports;
        var o = (e[i] = { exports: {} });
        return t[i].call(o.exports, o, o.exports, r), o.exports;
    }
    (r.d = (t, e) => {
        for (var i in e) r.o(e, i) && !r.o(t, i) && Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
        (r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (r.r = (t) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
        });
    var i = r(265);
    Sigma = i;
})();
