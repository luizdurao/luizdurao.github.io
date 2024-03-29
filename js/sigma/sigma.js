/* sigmajs.org - an open-source light-weight JavaScript graph drawing library - Version: 0.1 - Author:  Alexis Jacomy - License: MIT */
var sigma = { tools: {}, classes: {}, instances: {} };
(function () {
    Array.prototype.some ||
        (Array.prototype.some = function (g, i) {
            var k = this.length;
            if ("function" != typeof g) throw new TypeError();
            for (var m = 0; m < k; m++) if (m in this && g.call(i, this[m], m, this)) return !0;
            return !1;
        });
    Array.prototype.forEach ||
        (Array.prototype.forEach = function (g, i) {
            var k = this.length;
            if (typeof g != "function") throw new TypeError();
            for (var m = 0; m < k; m++) m in this && g.call(i, this[m], m, this);
        });
    Array.prototype.map ||
        (Array.prototype.map = function (g, i) {
            var k = this.length;
            if (typeof g != "function") throw new TypeError();
            for (var m = Array(k), b = 0; b < k; b++) b in this && (m[b] = g.call(i, this[b], b, this));
            return m;
        });
    Array.prototype.filter ||
        (Array.prototype.filter = function (g, i) {
            var k = this.length;
            if (typeof g != "function") throw new TypeError();
            for (var m = [], b = 0; b < k; b++)
                if (b in this) {
                    var j = this[b];
                    g.call(i, j, b, this) && m.push(j);
                }
            return m;
        });
    if (!Object.keys) {
        var i = Object,
            q = Object.prototype.hasOwnProperty,
            g = !{ toString: null }.propertyIsEnumerable("toString"),
            p = "toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),
            z = p.length;
        i.keys = function (i) {
            if ((typeof i !== "object" && typeof i !== "function") || i === null) throw new TypeError("Object.keys called on non-object");
            var x = [],
                k;
            for (k in i) q.call(i, k) && x.push(k);
            if (g) for (k = 0; k < z; k++) q.call(i, p[k]) && x.push(p[k]);
            return x;
        };
    }
})();
sigma.classes.Cascade = function () {
    this.p = {};
    this.config = function (i, q) {
        if ("string" == typeof i && void 0 == q) return this.p[i];
        var g = "object" == typeof i && void 0 == q ? i : {};
        "string" == typeof i && (g[i] = q);
        for (var p in g) void 0 != this.p[p] && (this.p[p] = g[p]);
        return this;
    };
};
sigma.classes.EventDispatcher = function () {
    var i = {},
        q = this;
    this.one = function (g, p) {
        if (!p || !g) return q;
        ("string" == typeof g ? g.split(" ") : g).forEach(function (g) {
            i[g] || (i[g] = []);
            i[g].push({ h: p, one: !0 });
        });
        return q;
    };
    this.bind = function (g, p) {
        if (!p || !g) return q;
        ("string" == typeof g ? g.split(" ") : g).forEach(function (g) {
            i[g] || (i[g] = []);
            i[g].push({ h: p, one: !1 });
        });
        return q;
    };
    this.unbind = function (g, p) {
        g || (i = {});
        var z = "string" == typeof g ? g.split(" ") : g;
        p
            ? z.forEach(function (g) {
                  i[g] &&
                      (i[g] = i[g].filter(function (g) {
                          return g.h != p;
                      }));
                  i[g] && 0 == i[g].length && delete i[g];
              })
            : z.forEach(function (g) {
                  delete i[g];
              });
        return q;
    };
    this.dispatch = function (g, p) {
        i[g] &&
            (i[g].forEach(function (i) {
                i.h({ type: g, content: p, target: q });
            }),
            (i[g] = i[g].filter(function (g) {
                return !g.one;
            })));
        return q;
    };
};
(function () {
    function i() {
        function b(a) {
            return {
                x: a.x,
                y: a.y,
                size: a.size,
                degree: a.degree,
                inDegree: a.inDegree,
                outDegree: a.outDegree,
                displayX: a.displayX,
                displayY: a.displayY,
                displaySize: a.displaySize,
                label: a.label,
                id: a.id,
                color: a.color,
                fixed: a.fixed,
                active: a.active,
                hidden: a.hidden,
                forceLabel: a.forceLabel,
                attr: a.attr,
            };
        }
        function j(a) {
            return { source: a.source.id, target: a.target.id, size: a.size, type: a.type, weight: a.weight, displaySize: a.displaySize, label: a.label, hidden: a.hidden, id: a.id, attr: a.attr, color: a.color };
        }
        function f() {
            c.nodes = [];
            c.nodesIndex = {};
            c.edges = [];
            c.edgesIndex = {};
            return c;
        }
        sigma.classes.Cascade.call(this);
        sigma.classes.EventDispatcher.call(this);
        var c = this;
        this.p = { minNodeSize: 0, maxNodeSize: 0, minEdgeSize: 0, maxEdgeSize: 0, scalingMode: "inside", nodesPowRatio: 0.5, edgesPowRatio: 0 };
        this.borders = {};
        f();
        this.addNode = function (a, b) {
            if (c.nodesIndex[a]) throw Error('Node "' + a + '" already exists.');
            var b = b || {},
                d = {
                    x: 0,
                    y: 0,
                    size: 1,
                    degree: 0,
                    inDegree: 0,
                    outDegree: 0,
                    fixed: !1,
                    active: !1,
                    hidden: !1,
                    forceLabel: !1,
                    label: a.toString(),
                    id: a.toString(),
                    attr: {},
                },
                f;
            for (f in b)
                switch (f) {
                    case "id":
                        break;
                    case "x":
                    case "y":
                    case "size":
                        d[f] = +b[f];
                        break;
                    case "fixed":
                    case "active":
                    case "hidden":
                    case "forceLabel":
                        d[f] = !!b[f];
                        break;
                    case "color":
                    case "label":
                        d[f] = b[f];
                        break;
                    default:
                        d.attr[f] = b[f];
                }
            c.nodes.push(d);
            c.nodesIndex[a.toString()] = d;
            return c;
        };
        this.addEdge = function (a, b, d, f) {
            if (c.edgesIndex[a]) throw Error('Edge "' + a + '" already exists.');
            if (!c.nodesIndex[b]) throw Error("Edge's source \"" + b + '" does not exist yet.');
            if (!c.nodesIndex[d]) throw Error("Edge's target \"" + d + '" does not exist yet.');
            f = f || {};
            b = { source: c.nodesIndex[b], target: c.nodesIndex[d], size: 1, weight: 1, displaySize: 0.5, label: a.toString(), id: a.toString(), hidden: !1, attr: {} };
            b.source.degree++;
            b.source.outDegree++;
            b.target.degree++;
            b.target.inDegree++;
            for (var o in f)
                switch (o) {
                    case "id":
                    case "source":
                    case "target":
                        break;
                    case "hidden":
                        b[o] = !!f[o];
                        break;
                    case "size":
                    case "weight":
                        b[o] = +f[o];
                        break;
                    case "color":
                        b[o] = f[o].toString();
                        break;
                    case "type":
                        b[o] = f[o].toString();
                        break;
                    case "label":
                        b[o] = f[o];
                        break;
                    default:
                        b.attr[o] = f[o];
                }
            c.edges.push(b);
            c.edgesIndex[a.toString()] = b;
            return c;
        };
        this.dropNode = function (a) {
            ((a instanceof Array ? a : [a]) || []).forEach(function (a) {
                if (c.nodesIndex[a]) {
                    var b = null;
                    c.nodes.some(function (c, f) {
                        return c.id == a ? ((b = f), !0) : !1;
                    });
                    null != b && c.nodes.splice(b, 1);
                    delete c.nodesIndex[a];
                    c.edges = c.edges.filter(function (b) {
                        return b.source.id == a ? (delete c.edgesIndex[b.id], b.target.degree--, b.target.inDegree--, !1) : b.target.id == a ? (delete c.edgesIndex[b.id], b.source.degree--, b.source.outDegree--, !1) : !0;
                    });
                } else sigma.log('Node "' + a + '" does not exist.');
            });
            return c;
        };
        this.dropEdge = function (a) {
            ((a instanceof Array ? a : [a]) || []).forEach(function (a) {
                if (c.edgesIndex[a]) {
                    c.edgesIndex[a].source.degree--;
                    c.edgesIndex[a].source.outDegree--;
                    c.edgesIndex[a].target.degree--;
                    c.edgesIndex[a].target.inDegree--;
                    var b = null;
                    c.edges.some(function (c, f) {
                        return c.id == a ? ((b = f), !0) : !1;
                    });
                    null != b && c.edges.splice(b, 1);
                    delete c.edgesIndex[a];
                } else sigma.log('Edge "' + a + '" does not exist.');
            });
            return c;
        };
        this.iterEdges = function (a, b) {
            var d = b
                    ? b.map(function (a) {
                          return c.edgesIndex[a];
                      })
                    : c.edges,
                f = d.map(j);
            f.forEach(a);
            d.forEach(function (a, b) {
                var d = f[b],
                    l;
                for (l in d)
                    switch (l) {
                        case "id":
                        case "displaySize":
                            break;
                        case "weight":
                        case "size":
                            a[l] = +d[l];
                            break;
                        case "source":
                        case "target":
                            a[l] = c.nodesIndex[l] || a[l];
                            break;
                        case "hidden":
                            a[l] = !!d[l];
                            break;
                        case "color":
                        case "label":
                        case "type":
                            a[l] = (d[l] || "").toString();
                            break;
                        default:
                            a.attr[l] = d[l];
                    }
            });
            return c;
        };
        this.iterNodes = function (a, f) {
            var d = f
                    ? f.map(function (a) {
                          return c.nodesIndex[a];
                      })
                    : c.nodes,
                j = d.map(b);
            j.forEach(a);
            d.forEach(function (a, b) {
                var d = j[b],
                    c;
                for (c in d)
                    switch (c) {
                        case "id":
                        case "attr":
                        case "degree":
                        case "inDegree":
                        case "outDegree":
                        case "displayX":
                        case "displayY":
                        case "displaySize":
                            break;
                        case "x":
                        case "y":
                        case "size":
                            a[c] = +d[c];
                            break;
                        case "fixed":
                        case "active":
                        case "hidden":
                        case "forceLabel":
                            a[c] = !!d[c];
                            break;
                        case "color":
                        case "label":
                            a[c] = (d[c] || "").toString();
                            break;
                        default:
                            a.attr[c] = d[c];
                    }
            });
            return c;
        };
        this.getEdges = function (a) {
            var b = ((a instanceof Array ? a : [a]) || []).map(function (a) {
                return j(c.edgesIndex[a]);
            });
            return a instanceof Array ? b : b[0];
        };
        this.getNodes = function (a) {
            var f = ((a instanceof Array ? a : [a]) || []).map(function (a) {
                return b(c.nodesIndex[a]);
            });
            return a instanceof Array ? f : f[0];
        };
        this.empty = f;
        this.rescale = function (a, b, d, f) {
            var j = 0,
                h = 0;
            d &&
                c.nodes.forEach(function (a) {
                    h = Math.max(a.size, h);
                });
            f &&
                c.edges.forEach(function (a) {
                    j = Math.max(a.size, j);
                });
            var h = h || 1,
                j = j || 1,
                g,
                l,
                s,
                t;
            d &&
                c.nodes.forEach(function (a) {
                    l = Math.max(a.x, l || a.x);
                    g = Math.min(a.x, g || a.x);
                    t = Math.max(a.y, t || a.y);
                    s = Math.min(a.y, s || a.y);
                });
            var A = "outside" == c.p.scalingMode ? Math.max(a / Math.max(l - g, 1), b / Math.max(t - s, 1)) : Math.min(a / Math.max(l - g, 1), b / Math.max(t - s, 1)),
                i = (c.p.maxNodeSize || h) / A;
            l += i;
            g -= i;
            t += i;
            s -= i;
            var A = "outside" == c.p.scalingMode ? Math.max(a / Math.max(l - g, 1), b / Math.max(t - s, 1)) : Math.min(a / Math.max(l - g, 1), b / Math.max(t - s, 1)),
                u,
                k;
            !c.p.maxNodeSize && !c.p.minNodeSize ? ((u = 1), (k = 0)) : c.p.maxNodeSize == c.p.minNodeSize ? ((u = 0), (k = c.p.maxNodeSize)) : ((u = (c.p.maxNodeSize - c.p.minNodeSize) / h), (k = c.p.minNodeSize));
            var B, E;
            !c.p.maxEdgeSize && !c.p.minEdgeSize ? ((B = 1), (E = 0)) : ((B = c.p.maxEdgeSize == c.p.minEdgeSize ? 0 : (c.p.maxEdgeSize - c.p.minEdgeSize) / j), (E = c.p.minEdgeSize));
            d &&
                c.nodes.forEach(function (c) {
                    c.displaySize = c.size * u + k;
                    if (!c.fixed) {
                        c.displayX = (c.x - (l + g) / 2) * A + a / 2;
                        c.displayY = (c.y - (t + s) / 2) * A + b / 2;
                    }
                });
            f &&
                c.edges.forEach(function (a) {
                    a.displaySize = a.size * B + E;
                });
            return c;
        };
        this.translate = function (a, b, d, f, j) {
            var h = Math.pow(d, c.p.nodesPowRatio);
            f &&
                c.nodes.forEach(function (c) {
                    c.fixed || ((c.displayX = c.displayX * d + a), (c.displayY = c.displayY * d + b));
                    c.displaySize *= h;
                });
            h = Math.pow(d, c.p.edgesPowRatio);
            j &&
                c.edges.forEach(function (a) {
                    a.displaySize *= h;
                });
            return c;
        };
        this.setBorders = function () {
            c.borders = {};
            c.nodes.forEach(function (a) {
                c.borders.minX = Math.min(void 0 == c.borders.minX ? a.displayX - a.displaySize : c.borders.minX, a.displayX - a.displaySize);
                c.borders.maxX = Math.max(void 0 == c.borders.maxX ? a.displayX + a.displaySize : c.borders.maxX, a.displayX + a.displaySize);
                c.borders.minY = Math.min(void 0 == c.borders.minY ? a.displayY - a.displaySize : c.borders.minY, a.displayY - a.displaySize);
                c.borders.maxY = Math.max(void 0 == c.borders.maxY ? a.displayY - a.displaySize : c.borders.maxY, a.displayY - a.displaySize);
            });
        };
        this.checkHover = function (a, b) {
            var d,
                f,
                j,
                h = [],
                g = [];
            c.nodes.forEach(function (c) {
                if (c.hidden) c.hover = !1;
                else {
                    d = Math.abs(c.displayX - a);
                    f = Math.abs(c.displayY - b);
                    j = c.displaySize;
                    var s = c.hover,
                        t = d < j && f < j && Math.sqrt(d * d + f * f) < j;
                    s && !t ? ((c.hover = !1), g.push(c.id)) : t && !s && ((c.hover = !0), h.push(c.id));
                }
            });
            h.length && c.dispatch("overnodes", h);
            g.length && c.dispatch("outnodes", g);
            return c;
        };
    }
    function q(b, j) {
        function f() {
            var a;
            a = "<p>GLOBAL :</p>";
            for (var b in c.p.globalProbes) a += "<p>" + b + " : " + c.p.globalProbes[b]() + "</p>";
            a += "<br><p>LOCAL :</p>";
            for (b in c.p.localProbes) a += "<p>" + b + " : " + c.p.localProbes[b]() + "</p>";
            c.p.dom.innerHTML = a;
            return c;
        }
        sigma.classes.Cascade.call(this);
        var c = this;
        this.instance = b;
        this.monitoring = !1;
        this.p = {
            fps: 40,
            dom: j,
            globalProbes: { "Time (ms)": sigma.chronos.getExecutionTime, Queue: sigma.chronos.getQueuedTasksCount, Tasks: sigma.chronos.getTasksCount, FPS: sigma.chronos.getFPS },
            localProbes: {
                "Nodes count": function () {
                    return c.instance.graph.nodes.length;
                },
                "Edges count": function () {
                    return c.instance.graph.edges.length;
                },
            },
        };
        this.activate = function () {
            c.monitoring || (c.monitoring = window.setInterval(f, 1e3 / c.p.fps));
            return c;
        };
        this.desactivate = function () {
            c.monitoring && (window.clearInterval(c.monitoring), (c.monitoring = null), (c.p.dom.innerHTML = ""));
            return c;
        };
    }
    function g(b) {
        var j = b.changedTouches[0],
            f = "";
        switch (b.type) {
            case "touchstart":
                f = "mousedown";
                break;
            case "touchmove":
                f = "mousemove";
                break;
            case "touchend":
                f = "mouseup";
                break;
            default:
                return;
        }
        var c = document.createEvent("MouseEvent");
        c.initMouseEvent(f, !0, !0, window, 1, j.pageX, j.pageY, 0, 0, !1, !1, !1, !1, 0, null);
        j.target.dispatchEvent(c);
        b.preventDefault();
    }
    function p(b) {
        function j(b) {
            a.p.mouseEnabled &&
                (f(a.mouseX, a.mouseY, a.ratio * (0 < ((void 0 != b.wheelDelta && b.wheelDelta) || (void 0 != b.detail && -b.detail)) ? a.p.zoomMultiply : 1 / a.p.zoomMultiply)),
                a.p.blockScroll && (b.preventDefault ? b.preventDefault() : (b.returnValue = !1)));
        }
        function f(b, d, f) {
            if (
                !a.isMouseDown &&
                (window.clearInterval(a.interpolationID),
                (m = void 0 != f),
                (w = a.stageX),
                (n = b),
                (o = a.stageY),
                (l = d),
                (h = f || a.ratio),
                (h = Math.min(Math.max(h, a.p.minRatio), a.p.maxRatio)),
                (u = a.p.directZooming ? 1 - (m ? a.p.zoomDelta : a.p.dragDelta) : 0),
                a.ratio != h || a.stageX != n || a.stageY != l)
            )
                c(), (a.interpolationID = window.setInterval(c, 50)), a.dispatch("startinterpolate");
        }
        function c() {
            u += m ? a.p.zoomDelta : a.p.dragDelta;
            u = Math.min(u, 1);
            var b = sigma.easing.quadratic.easeout(u),
                c = a.ratio;
            a.ratio = c * (1 - b) + h * b;
            m ? ((a.stageX = n + ((a.stageX - n) * a.ratio) / c), (a.stageY = l + ((a.stageY - l) * a.ratio) / c)) : ((a.stageX = w * (1 - b) + n * b), (a.stageY = o * (1 - b) + l * b));
            a.dispatch("interpolate");            1 <= u &&
                (window.clearInterval(a.interpolationID),
                (b = a.ratio),
                m ? ((a.ratio = h), (a.stageX = n + ((a.stageX - n) * a.ratio) / b), (a.stageY = l + ((a.stageY - l) * a.ratio) / b)) : ((a.stageX = n), (a.stageY = l)),
                a.dispatch("stopinterpolate"));
        }
        sigma.classes.Cascade.call(this);
        sigma.classes.EventDispatcher.call(this);
        var a = this;
        this.p = { minRatio: 1, maxRatio: 32, marginRatio: 1, zoomDelta: 0.1, dragDelta: 0.3, zoomMultiply: 2, directZooming: !1, blockScroll: !0, inertia: 1.1, mouseEnabled: !0, touchEnabled: !0 };
        var i = 0,
            d = 0,
            w = 0,
            o = 0,
            h = 1,
            n = 0,
            l = 0,
            s = 0,
            t = 0,
            A = 0,
            k = 0,
            u = 0,
            m = !1;
        this.stageY = this.stageX = 0;
        this.ratio = 1;
        this.mouseY = this.mouseX = 0;
        this.isTouchDown = this.isMouseDown = !1;
        b.addEventListener("DOMMouseScroll", j, !0);
        b.addEventListener("mousewheel", j, !0);
        b.addEventListener(
            "mousemove",
            function (b) {
                a.mouseX = (void 0 != b.offsetX && b.offsetX) || (void 0 != b.layerX && b.layerX) || (void 0 != b.clientX && b.clientX);
                a.mouseY = (void 0 != b.offsetY && b.offsetY) || (void 0 != b.layerY && b.layerY) || (void 0 != b.clientY && b.clientY);
                if (a.isMouseDown) {
                    var c = a.mouseX - i + w,
                        h = a.mouseY - d + o;
                    if (c != a.stageX || h != a.stageY) (t = s), (k = A), (s = c), (A = h), (a.stageX = c), (a.stageY = h), a.dispatch("drag");
                }
                a.dispatch("move");
                b.preventDefault ? b.preventDefault() : (b.returnValue = !1);
            },
            !0
        );
        b.addEventListener(
            "mousedown",
            function (b) {
                a.p.mouseEnabled &&
                    ((a.isMouseDown = !0),
                    a.dispatch("mousedown"),
                    (w = a.stageX),
                    (o = a.stageY),
                    (i = a.mouseX),
                    (d = a.mouseY),
                    (t = s = a.stageX),
                    (k = A = a.stageY),
                    a.dispatch("startdrag"),
                    b.preventDefault ? b.preventDefault() : (b.returnValue = !1));
            },
            !0
        );
        document.addEventListener(
            "mouseup",
            function (b) {
                a.p.mouseEnabled &&
                    a.isMouseDown &&
                    ((a.isMouseDown = !1),
                    a.dispatch("mouseup"),
                    (w != a.stageX || o != a.stageY) && f(a.stageX + a.p.inertia * (a.stageX - t), a.stageY + a.p.inertia * (a.stageY - k)),
                    b.preventDefault ? b.preventDefault() : (b.returnValue = !1));
            },
            !0
        );
        b.addEventListener("touchstart", g, !0, true);
        b.addEventListener("touchmove", g, !0, true);
        document.addEventListener("touchend", g, !0, true);
        b.addEventListener("touchcancel", g, !0, true);
        this.checkBorders = function () {
            return a;
        };
        this.interpolate = f;
    }
    function z(b, j, f, c, a, g, d) {
        function i(a) {
            var b = c,
                d = "fixed" == h.p.labelSize ? h.p.defaultLabelSize : h.p.labelSizeRatio * a.displaySize;
            b.font = (h.p.hoverFontStyle || h.p.fontStyle || "") + " " + d + "px " + (h.p.hoverFont || h.p.font || "");
            b.fillStyle = "node" == h.p.labelHoverBGColor ? a.color || h.p.defaultNodeColor : h.p.defaultHoverLabelBGColor;
            b.beginPath();
            h.p.labelHoverShadow && ((b.shadowOffsetX = 0), (b.shadowOffsetY = 0), (b.shadowBlur = 4), (b.shadowColor = h.p.labelHoverShadowColor));
            sigma.tools.drawRoundRect(b, Math.round(a.displayX - d / 2 - 2), Math.round(a.displayY - d / 2 - 2), Math.round(b.measureText(a.label).width + 1.5 * a.displaySize + d / 2 + 4), Math.round(d + 4), Math.round(d / 2 + 2), "left");
            b.closePath();
            b.fill();
            b.shadowOffsetX = 0;
            b.shadowOffsetY = 0;
            b.shadowBlur = 0;
            b.beginPath();
            b.fillStyle = "node" == h.p.nodeBorderColor ? a.color || h.p.defaultNodeColor : h.p.defaultNodeBorderColor;
            b.arc(Math.round(a.displayX), Math.round(a.displayY), a.displaySize + h.p.borderSize, 0, 2 * Math.PI, !0);
            b.closePath();
            b.fill();
            b.beginPath();
            b.fillStyle = "node" == h.p.nodeHoverColor ? a.color || h.p.defaultNodeColor : h.p.defaultNodeHoverColor;
            b.arc(Math.round(a.displayX), Math.round(a.displayY), a.displaySize, 0, 2 * Math.PI, !0);
            b.closePath();
            b.fill();
            b.fillStyle = "node" == h.p.labelHoverColor ? a.color || h.p.defaultNodeColor : h.p.defaultLabelHoverColor;
            b.fillText(a.label, Math.round(a.displayX + 1.5 * a.displaySize), Math.round(a.displayY + d / 2 - 3));
            return h;
        }
        function o(a) {
            if (isNaN(a.x) || isNaN(a.y)) throw Error("A node's coordinate is not a number (id: " + a.id + ")");
            return !a.hidden && a.displayX + a.displaySize > -n / 3 && a.displayX - a.displaySize < (4 * n) / 3 && a.displayY + a.displaySize > -l / 3 && a.displayY - a.displaySize < (4 * l) / 3;
        }
        sigma.classes.Cascade.call(this);
        var h = this;
        this.p = {
            labelColor: "default",
            defaultLabelColor: "#000",
            labelHoverBGColor: "default",
            defaultHoverLabelBGColor: "#fff",
            labelHoverShadow: !0,
            labelHoverShadowColor: "#000",
            labelHoverColor: "default",
            defaultLabelHoverColor: "#000",
            labelActiveBGColor: "default",
            defaultActiveLabelBGColor: "#fff",
            labelActiveShadow: !0,
            labelActiveShadowColor: "#000",
            labelActiveColor: "default",
            defaultLabelActiveColor: "#000",
            labelSize: "fixed",
            defaultLabelSize: 12,
            labelSizeRatio: 2,
            labelThreshold: 6,
            font: "Arial",
            hoverFont: "",
            activeFont: "",
            fontStyle: "",
            hoverFontStyle: "",
            activeFontStyle: "",
            edgeColor: "source",
            defaultEdgeColor: "#aaa",
            defaultEdgeType: "line",
            defaultNodeColor: "#aaa",
            nodeHoverColor: "node",
            defaultNodeHoverColor: "#fff",
            nodeActiveColor: "node",
            defaultNodeActiveColor: "#fff",
            borderSize: 0,
            nodeBorderColor: "node",
            defaultNodeBorderColor: "#fff",
            edgesSpeed: 200,
            nodesSpeed: 200,
            labelsSpeed: 200,
        };
        var n = g,
            l = d;
        this.currentLabelIndex = this.currentNodeIndex = this.currentEdgeIndex = 0;
        this.task_drawLabel = function () {
            for (var b = a.nodes.length, c = 0; c++ < h.p.labelsSpeed && h.currentLabelIndex < b; )
                if (h.isOnScreen(a.nodes[h.currentLabelIndex])) {
                    var d = a.nodes[h.currentLabelIndex++],
                        j = f;
                    if (d.displaySize >= h.p.labelThreshold || d.forceLabel) {
                        var g = "fixed" == h.p.labelSize ? h.p.defaultLabelSize : h.p.labelSizeRatio * d.displaySize;
                        j.font = h.p.fontStyle + g + "px " + h.p.font;
                        j.fillStyle = "node" == h.p.labelColor ? d.color || h.p.defaultNodeColor : h.p.defaultLabelColor;
                        j.fillText(d.label, Math.round(d.displayX + 1.5 * d.displaySize), Math.round(d.displayY + g / 2 - 3));
                    }
                } else h.currentLabelIndex++;
            return h.currentLabelIndex < b;
        };
        this.task_drawEdge = function () {
            for (var b = a.edges.length, c, d, f = 0; f++ < h.p.edgesSpeed && h.currentEdgeIndex < b; )
                if (((e = a.edges[h.currentEdgeIndex]), (c = e.source), (d = e.target), e.hidden || c.hidden || d.hidden || (!h.isOnScreen(c) && !h.isOnScreen(d)))) h.currentEdgeIndex++;
                else {
                    c = a.edges[h.currentEdgeIndex++];
                    d = c.source.displayX;
                    var g = c.source.displayY,
                        o = c.target.displayX,
                        i = c.target.displayY,
                        l = c.color;
                    if (!l)
                        switch (h.p.edgeColor) {
                            case "source":
                                l = c.source.color || h.p.defaultNodeColor;
                                break;
                            case "target":
                                l = c.target.color || h.p.defaultNodeColor;
                                break;
                            default:
                                l = h.p.defaultEdgeColor;
                        }
                    var n = j;
                    switch (c.type || h.p.defaultEdgeType) {
                        case "curve":
                            n.strokeStyle = l;
                            n.lineWidth = c.displaySize / 3;
                            n.beginPath();
                            n.moveTo(d, g);
                            n.quadraticCurveTo((d + o) / 2 + (i - g) / 4, (g + i) / 2 + (d - o) / 4, o, i);
                            n.stroke();
                            break;
                        default:
                            (n.strokeStyle = l), (n.lineWidth = c.displaySize / 3), n.beginPath(), n.moveTo(d, g), n.lineTo(o, i), n.stroke();
                    }
                }
            return h.currentEdgeIndex < b;
        };
        this.task_drawNode = function () {
            for (var c = a.nodes.length, d = 0; d++ < h.p.nodesSpeed && h.currentNodeIndex < c; )
                if (h.isOnScreen(a.nodes[h.currentNodeIndex])) {
                    var f = a.nodes[h.currentNodeIndex++],
                        j = Math.round(10 * f.displaySize) / 10,
                        g = b;
                    g.fillStyle = f.color;
                    g.beginPath();
                    g.arc(f.displayX, f.displayY, j, 0, 2 * Math.PI, !0);
                    g.closePath();
                    g.fill();
                    f.hover && i(f);
                } else h.currentNodeIndex++;
            return h.currentNodeIndex < c;
        };
        this.drawActiveNode = function (a) {
            var b = c;
            if (!o(a)) return h;
            var d = "fixed" == h.p.labelSize ? h.p.defaultLabelSize : h.p.labelSizeRatio * a.displaySize;
            b.font = (h.p.activeFontStyle || h.p.fontStyle || "") + " " + d + "px " + (h.p.activeFont || h.p.font || "");
            b.fillStyle = "node" == h.p.labelHoverBGColor ? a.color || h.p.defaultNodeColor : h.p.defaultActiveLabelBGColor;
            b.beginPath();
            h.p.labelActiveShadow && ((b.shadowOffsetX = 0), (b.shadowOffsetY = 0), (b.shadowBlur = 4), (b.shadowColor = h.p.labelActiveShadowColor));
            sigma.tools.drawRoundRect(b, Math.round(a.displayX - d / 2 - 2), Math.round(a.displayY - d / 2 - 2), Math.round(b.measureText(a.label).width + 1.5 * a.displaySize + d / 2 + 4), Math.round(d + 4), Math.round(d / 2 + 2), "left");
            b.closePath();
            b.fill();
            b.shadowOffsetX = 0;
            b.shadowOffsetY = 0;
            b.shadowBlur = 0;
            b.beginPath();
            b.fillStyle = "node" == h.p.nodeBorderColor ? a.color || h.p.defaultNodeColor : h.p.defaultNodeBorderColor;
            b.arc(Math.round(a.displayX), Math.round(a.displayY), a.displaySize + h.p.borderSize, 0, 2 * Math.PI, !0);
            b.closePath();
            b.fill();
            b.beginPath();
            b.fillStyle = "node" == h.p.nodeActiveColor ? a.color || h.p.defaultNodeColor : h.p.defaultNodeActiveColor;
            b.arc(Math.round(a.displayX), Math.round(a.displayY), a.displaySize, 0, 2 * Math.PI, !0);
            b.closePath();
            b.fill();
            b.fillStyle = "node" == h.p.labelActiveColor ? a.color || h.p.defaultNodeColor : h.p.defaultLabelActiveColor;
            b.fillText(a.label, Math.round(a.displayX + 1.5 * a.displaySize), Math.round(a.displayY + d / 2 - 3));
            return h;
        };
        this.drawHoverNode = i;
        this.isOnScreen = o;
        this.resize = function (a, b) {
            n = a;
            l = b;
            return h;
        };
    }
    function F(b, g) {
        function f() {
            sigma.chronos
                .removeTask("node_" + d.id, 2)
                .removeTask("edge_" + d.id, 2)
                .removeTask("label_" + d.id, 2)
                .stopTasks();
            return d;
        }
        function c(a, b) {
            d.domElements[a] = document.createElement(b);
            d.domElements[a].style.position = "absolute";
            d.domElements[a].setAttribute("id", "sigma_" + a + "_" + d.id);
            d.domElements[a].setAttribute("class", "sigma_" + a + "_" + b);
            d.domElements[a].setAttribute("width", d.width + "px");
            d.domElements[a].setAttribute("height", d.height + "px");
            d.domRoot.appendChild(d.domElements[a]);
            return d;
        }
        function a() {
            d.p.drawHoverNodes &&
                (d.graph.checkHover(d.mousecaptor.mouseX, d.mousecaptor.mouseY),
                d.graph.nodes.forEach(function (a) {
                    a.hover && !a.active && d.plotter.drawHoverNode(a);
                }));
            return d;
        }
        function D() {
            d.p.drawActiveNodes &&
                d.graph.nodes.forEach(function (a) {
                    a.active && d.plotter.drawActiveNode(a);
                });
            return d;
        }
        sigma.classes.Cascade.call(this);
        sigma.classes.EventDispatcher.call(this);
        var d = this;
        this.id = g.toString();
        this.p = {
            auto: !0,
            drawNodes: 2,
            drawEdges: 1,
            drawLabels: 2,
            lastNodes: 2,
            lastEdges: 0,
            lastLabels: 2,
            drawHoverNodes: !0,
            drawActiveNodes: !0,
        };
        this.domRoot = b;
        this.width = this.domRoot.offsetWidth;
        this.height = this.domRoot.offsetHeight;
        this.graph = new i();
        this.domElements = {};
        c("edges", "canvas");
        c("nodes", "canvas");
        c("labels", "canvas");
        c("hover", "canvas");
        c("monitor", "div");
        c("mouse", "canvas");
        this.plotter = new z(this.domElements.nodes.getContext("2d"), this.domElements.edges.getContext("2d"), this.domElements.labels.getContext("2d"), this.domElements.hover.getContext("2d"), this.graph, this.width, this.height);
        this.monitor = new q(this, this.domElements.monitor);
        this.mousecaptor = new p(this.domElements.mouse, this.id);
        this.mousecaptor
            .bind("drag interpolate", function () {
                d.draw(d.p.auto ? 2 : d.p.drawNodes, d.p.auto ? 0 : d.p.drawEdges, d.p.auto ? 2 : d.p.drawLabels, !0);
            })
            .bind("stopdrag stopinterpolate", function () {
                d.draw(d.p.auto ? 2 : d.p.drawNodes, d.p.auto ? 1 : d.p.drawEdges, d.p.auto ? 2 : d.p.drawLabels, !0);
            })
            .bind("mousedown mouseup", function (a) {
                var b = d.graph.nodes
                    .filter(function (a) {
                        return !!a.hover;
                    })
                    .map(function (a) {
                        return a.id;
                    });
                d.dispatch("mousedown" == a.type ? "downgraph" : "upgraph");
                b.length && d.dispatch("mousedown" == a.type ? "downnodes" : "upnodes", b);
            })
            .bind("move", function () {
                d.domElements.hover.getContext("2d").clearRect(0, 0, d.domElements.hover.width, d.domElements.hover.height);
                a();
                D();
            });
        sigma.chronos
            .bind("startgenerators", function () {
                sigma.chronos.getGeneratorsIDs().some(function (a) {
                    return !!a.match(RegExp("_ext_" + d.id + "$", ""));
                }) && d.draw(d.p.auto ? 2 : d.p.drawNodes, d.p.auto ? 0 : d.p.drawEdges, d.p.auto ? 2 : d.p.drawLabels);
            })
            .bind("stopgenerators", function () {
                d.draw();
            });
        for (var w = 0; w < m.plugins.length; w++) m.plugins[w](this);
        this.draw = function (a, b, c, g) {
            if (
                g &&
                sigma.chronos.getGeneratorsIDs().some(function (a) {
                    return !!a.match(RegExp("_ext_" + d.id + "$", ""));
                })
            )
                return d;
            a = void 0 == a ? d.p.drawNodes : a;
            b = void 0 == b ? d.p.drawEdges : b;
            c = void 0 == c ? d.p.drawLabels : c;
            g = { nodes: a, edges: b, labels: c };
            d.p.lastNodes = a;
            d.p.lastEdges = b;
            d.p.lastLabels = c;
            f();
            d.graph.rescale(d.width, d.height, 0 < a, 0 < b).setBorders();
            d.mousecaptor.checkBorders(d.graph.borders, d.width, d.height);
            d.graph.translate(d.mousecaptor.stageX, d.mousecaptor.stageY, d.mousecaptor.ratio, 0 < a, 0 < b);
            d.dispatch("graphscaled");
            for (var j in d.domElements) "canvas" == d.domElements[j].nodeName.toLowerCase() && (void 0 == g[j] || 0 <= g[j]) && d.domElements[j].getContext("2d").clearRect(0, 0, d.domElements[j].width, d.domElements[j].height);
            d.plotter.currentEdgeIndex = 0;
            d.plotter.currentNodeIndex = 0;
            d.plotter.currentLabelIndex = 0;
            j = null;
            g = !1;
            if (a)
                if (1 < a) for (; d.plotter.task_drawNode(); );
                else sigma.chronos.addTask(d.plotter.task_drawNode, "node_" + d.id, !1), (g = !0), (j = "node_" + d.id);
            if (c)
                if (1 < c) for (; d.plotter.task_drawLabel(); );
                else j ? sigma.chronos.queueTask(d.plotter.task_drawLabel, "label_" + d.id, j) : sigma.chronos.addTask(d.plotter.task_drawLabel, "label_" + d.id, !1), (g = !0), (j = "label_" + d.id);
            if (b)
                if (1 < b) for (; d.plotter.task_drawEdge(); );
                else j ? sigma.chronos.queueTask(d.plotter.task_drawEdge, "edge_" + d.id, j) : sigma.chronos.addTask(d.plotter.task_drawEdge, "edge_" + d.id, !1), (g = !0), (j = "edge_" + d.id);
            d.dispatch("draw");
            d.refresh();
            g && sigma.chronos.runTasks();
            return d;
        };
        this.resize = function (a, b) {
            var c = d.width,
                f = d.height;
            void 0 != a && void 0 != b ? ((d.width = a), (d.height = b)) : ((d.width = d.domRoot.offsetWidth), (d.height = d.domRoot.offsetHeight));
            if (c != d.width || f != d.height) {
                for (var j in d.domElements) d.domElements[j].setAttribute("width", d.width + "px"), d.domElements[j].setAttribute("height", d.height + "px");
                d.plotter.resize(d.width, d.height);
                d.draw(d.p.lastNodes, d.p.lastEdges, d.p.lastLabels, !0);
            }
            return d;
        };
        this.refresh = function () {
            d.domElements.hover.getContext("2d").clearRect(0, 0, d.domElements.hover.width, d.domElements.hover.height);
            a();
            D();
            return d;
        };
        this.drawHover = a;
        this.drawActive = D;
        this.clearSchedule = f;
        window.addEventListener("resize", function () {
            d.resize();
        });
    }
    function x(b) {
        var j = this;
        sigma.classes.EventDispatcher.call(this);
        this._core = b;
        this.kill = function () {};
        this.getID = function () {
            return b.id;
        };
        this.configProperties = function (f, c) {
            var a = b.config(f, c);
            return a == b ? j : a;
        };
        this.drawingProperties = function (f, c) {
            var a = b.plotter.config(f, c);
            return a == b.plotter ? j : a;
        };
        this.mouseProperties = function (f, c) {
            var a = b.mousecaptor.config(f, c);
            return a == b.mousecaptor ? j : a;
        };
        this.graphProperties = function (f, c) {
            var a = b.graph.config(f, c);
            return a == b.graph ? j : a;
        };
        this.getMouse = function () {
            return { mouseX: b.mousecaptor.mouseX, mouseY: b.mousecaptor.mouseY, down: b.mousecaptor.isMouseDown };
        };
        this.position = function (f, c, a) {
            if (0 == arguments.length) return { stageX: b.mousecaptor.stageX, stageY: b.mousecaptor.stageY, ratio: b.mousecaptor.ratio };
            b.mousecaptor.stageX = void 0 != f ? f : b.mousecaptor.stageX;
            b.mousecaptor.stageY = void 0 != c ? c : b.mousecaptor.stageY;
            b.mousecaptor.ratio = void 0 != a ? a : b.mousecaptor.ratio;
            return j;
        };
        this.goTo = function (f, c, a) {
            b.mousecaptor.interpolate(f, c, a);
            return j;
        };
        this.zoomTo = function (f, c, a) {
            a = Math.min(Math.max(b.mousecaptor.config("minRatio"), a), b.mousecaptor.config("maxRatio"));
            a == b.mousecaptor.ratio
                ? b.mousecaptor.interpolate(f - b.width / 2 + b.mousecaptor.stageX, c - b.height / 2 + b.mousecaptor.stageY)
                : b.mousecaptor.interpolate((a * f - (b.mousecaptor.ratio * b.width) / 2) / (a - b.mousecaptor.ratio), (a * c - (b.mousecaptor.ratio * b.height) / 2) / (a - b.mousecaptor.ratio), a);
            return j;
        };
        this.resize = function (f, c) {
            b.resize(f, c);
            return j;
        };
        this.draw = function (f, c, a, g) {
            b.draw(f, c, a, g);
            return j;
        };
        this.refresh = function () {
            b.refresh();
            return j;
        };
        this.addGenerator = function (f, c, a) {
            sigma.chronos.addGenerator(f + "_ext_" + b.id, c, a);
            return j;
        };
        this.removeGenerator = function (f) {
            sigma.chronos.removeGenerator(f + "_ext_" + b.id);
            return j;
        };
        this.addNode = function (f, c) {
            b.graph.addNode(f, c);
            return j;
        };
        this.addEdge = function (f, c, a, g) {
            b.graph.addEdge(f, c, a, g);
            return j;
        };
        this.dropNode = function (f) {
            b.graph.dropNode(f);
            return j;
        };
        this.dropEdge = function (f) {
            b.graph.dropEdge(f);
            return j;
        };
        this.pushGraph = function (f, c) {
            f.nodes &&
                f.nodes.forEach(function (a) {
                    a.id && (!c || !b.graph.nodesIndex[a.id]) && j.addNode(a.id, a);
                });
            f.edges &&
                f.edges.forEach(function (a) {
                    (validID = a.source && a.target && a.id) && (!c || !b.graph.edgesIndex[a.id]) && j.addNode(a.id, a.source, a.target, a);
                });
            return j;
        };
        this.emptyGraph = function () {
            b.graph.empty();
            return j;
        };
        this.getNodesCount = function () {
            return b.graph.nodes.length;
        };
        this.getEdgesCount = function () {
            return b.graph.edges.length;
        };
        this.iterNodes = function (f, c) {
            b.graph.iterNodes(f, c);
            return j;
        };
        this.iterEdges = function (f, c) {
            b.graph.iterEdges(f, c);
            return j;
        };
        this.getNodes = function (f) {
            return b.graph.getNodes(f);
        };
        this.getEdges = function (f) {
            return b.graph.getEdges(f);
        };
        this.activateMonitoring = function () {
            return b.monitor.activate();
        };
        this.desactivateMonitoring = function () {
            return b.monitor.desactivate();
        };
        b.bind("downnodes upnodes downgraph upgraph", function (b) {
            j.dispatch(b.type, b.content);
        });
        b.graph.bind("overnodes outnodes", function (b) {
            j.dispatch(b.type, b.content);
        });
    }
    var k = 0,
        m = { plugins: [] };
    sigma.init = function (b) {
        b = new F(b, (++k).toString());
        sigma.instances[k] = new x(b);
        return sigma.instances[k];
    };
    sigma.addPlugin = function (b, g, f) {
        x.prototype[b] = g;
        m.plugins.push(f);
    };
    sigma.chronos = new (function () {
        function b(a) {
            window.setTimeout(a, 0);
            return h;
        }
        function g() {
            for (h.dispatch("frameinserted"); n && v.length && f(); );
            !n || !v.length ? a() : ((B = new Date().getTime()), m++, (z = u - p), (q = p - z), h.dispatch("insertframe"), b(g));
        }
        function f() {
            C %= v.length;
            if (!v[C].task()) {
                var a = v[C].taskName;
                y = y.filter(function (b) {
                    b.taskParent == a && v.push({ taskName: b.taskName, task: b.task });
                    return b.taskParent != a;
                });
                h.dispatch("killed", v.splice(C--, 1)[0]);
            }
            C++;
            u = new Date().getTime() - B;
            return u <= q;
        }
        function c() {
            n = !0;
            m = C = 0;
            x = B = new Date().getTime();
            h.dispatch("start");
            h.dispatch("insertframe");
            b(g);
            return h;
        }
        function a() {
            h.dispatch("stop");
            n = !1;
            return h;
        }
        function i(a, b, d) {
            if ("function" != typeof a) throw Error('Task "' + b + '" is not a function');
            v.push({ taskName: b, task: a });
            n = !(!n && !((d && c()) || 1));
            return h;
        }
        function d(a) {
            return a
                ? Object.keys(r).filter(function (a) {
                      return !!r[a].on;
                  }).length
                : Object.keys(r).length;
        }
        function w() {
            Object.keys(r).length
                ? (h.dispatch("startgenerators"),
                  h.unbind("killed", o),
                  b(function () {
                      for (var a in r) (r[a].on = !0), i(r[a].task, a, !1);
                  }),
                  h.bind("killed", o).runTasks())
                : h.dispatch("stopgenerators");
            return h;
        }
        function o(a) {
            void 0 != r[a.content.taskName] && (r[a.content.taskName].del || !r[a.content.taskName].condition() ? delete r[a.content.taskName] : (r[a.content.taskName].on = !1), 0 == d(!0) && w());
        }
        sigma.classes.EventDispatcher.call(this);
        var h = this,
            n = !1,
            l = 80,
            k = 0,
            m = 0,
            p = 1e3 / l,
            q = p,
            u = 0,
            x = 0,
            B = 0,
            z = 0,
            r = {},
            v = [],
            y = [],
            C = 0;
        this.frequency = function (a) {
            return void 0 != a ? ((l = Math.abs(1 * a)), (p = 1e3 / l), (m = 0), h) : l;
        };
        this.runTasks = c;
        this.stopTasks = a;
        this.insertFrame = b;
        this.addTask = i;
        this.queueTask = function (a, b, c) {
            if ("function" != typeof a) throw Error('Task "' + b + '" is not a function');
            if (
                !v.concat(y).some(function (a) {
                    return a.taskName == c;
                })
            )
                throw Error('Parent task "' + c + '" of "' + b + '" is not attached.');
            y.push({ taskParent: c, taskName: b, task: a });
            return h;
        };
        this.removeTask = function (b, c) {
            if (void 0 == b) (v = []), 1 == c ? (y = []) : 2 == c && ((v = y), (y = [])), a();
            else {
                var d = "string" == typeof b ? b : "";
                v = v.filter(function (a) {
                    return ("string" == typeof b ? a.taskName == b : a.task == b) ? ((d = a.taskName), !1) : !0;
                });
                0 < c &&
                    (y = y.filter(function (a) {
                        1 == c && a.taskParent == d && v.push(a);
                        return a.taskParent != d;
                    }));
            }
            n = !(v.length && (!a() || 1));
            return h;
        };
        this.addGenerator = function (a, b, c) {
            if (void 0 != r[a]) return h;
            r[a] = { task: b, condition: c };
            0 == d(!0) && w();
            return h;
        };
        this.removeGenerator = function (a) {
            r[a] && ((r[a].on = !1), (r[a].del = !0));
            return h;
        };
        this.startGenerators = w;
        this.getGeneratorsIDs = function () {
            return Object.keys(r);
        };
        this.getFPS = function () {
            n && (k = Math.round(1e4 * (m / (new Date().getTime() - x))) / 10);
            return k;
        };
        this.getTasksCount = function () {
            return v.length;
        };
        this.getQueuedTasksCount = function () {
            return y.length;
        };
        this.getExecutionTime = function () {
            return B - x;
        };
        return this;
    })();
    sigma.debugMode = 0;
    sigma.log = function () {
        if (1 == sigma.debugMode) for (var b in arguments) console.log(arguments[b]);
        else if (1 < sigma.debugMode) for (b in arguments) throw Error(arguments[b]);
        return sigma;
    };
    sigma.easing = { linear: {}, quadratic: {} };
    sigma.easing.linear.easenone = function (b) {
        return b;
    };
    sigma.easing.quadratic.easein = function (b) {
        return b * b;
    };
    sigma.easing.quadratic.easeout = function (b) {
        return -b * (b - 2);
    };
    sigma.easing.quadratic.easeinout = function (b) {
        return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1);
    };
    sigma.tools.drawRoundRect = function (b, g, f, c, a, i, d) {
        var i = i ? i : 0,
            k = d ? d : [],
            k = "string" == typeof k ? k.split(" ") : k,
            d = i && (0 <= k.indexOf("topleft") || 0 <= k.indexOf("top") || 0 <= k.indexOf("left")),
            m = i && (0 <= k.indexOf("topright") || 0 <= k.indexOf("top") || 0 <= k.indexOf("right")),
            h = i && (0 <= k.indexOf("bottomleft") || 0 <= k.indexOf("bottom") || 0 <= k.indexOf("left")),
            k = i && (0 <= k.indexOf("bottomright") || 0 <= k.indexOf("bottom") || 0 <= k.indexOf("right"));
        b.moveTo(g, f + i);
        d ? b.arcTo(g, f, g + i, f, i) : b.lineTo(g, f);
        m ? (b.lineTo(g + c - i, f), b.arcTo(g + c, f, g + c, f + i, i)) : b.lineTo(g + c, f);
        k ? (b.lineTo(g + c, f + a - i), b.arcTo(g + c, f + a, g + c - i, f + a, i)) : b.lineTo(g + c, f + a);
        h ? (b.lineTo(g + i, f + a), b.arcTo(g, f + a, g, f + a - i, i)) : b.lineTo(g, f + a);
        b.lineTo(g, f + i);
    };
    sigma.tools.getRGB = function (b, g) {
        var b = b.toString(),
            f = { r: 0, g: 0, b: 0 };
        if (3 <= b.length && "#" == b.charAt(0)) {
            var c = b.length - 1;
            6 == c
                ? (f = { r: parseInt(b.charAt(1) + b.charAt(2), 16), g: parseInt(b.charAt(3) + b.charAt(4), 16), b: parseInt(b.charAt(5) + b.charAt(5), 16) })
                : 3 == c && (f = { r: parseInt(b.charAt(1) + b.charAt(1), 16), g: parseInt(b.charAt(2) + b.charAt(2), 16), b: parseInt(b.charAt(3) + b.charAt(3), 16) });
        }
        g && (f = [f.r, f.g, f.b]);
        return f;
    };
    sigma.tools.rgbToHex = function (b, g, f) {
        return sigma.tools.toHex(b) + sigma.tools.toHex(g) + sigma.tools.toHex(f);
    };
    sigma.tools.toHex = function (b) {
        b = parseInt(b, 10);
        if (isNaN(b)) return "00";
        b = Math.max(0, Math.min(b, 255));
        return "0123456789ABCDEF".charAt((b - (b % 16)) / 16) + "0123456789ABCDEF".charAt(b % 16);
    };
    sigma.publicPrototype = x.prototype;
})();
