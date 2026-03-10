(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  89970,
  83495,
  (t) => {
    "use strict";
    function e(t) {
      if (void 0 === t)
        throw ReferenceError(
          "this hasn't been initialised - super() hasn't been called",
        );
      return t;
    }
    function r(t, e) {
      ((t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e));
    }
    var i,
      n,
      s,
      o,
      a,
      l,
      u,
      c,
      h,
      f,
      p,
      d,
      m,
      g,
      v,
      _,
      y,
      x,
      b,
      w,
      T,
      S,
      k,
      E,
      M,
      O,
      C = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: { lineHeight: "" },
      },
      P = { duration: 0.5, overwrite: !1, delay: 0 },
      A = 2 * Math.PI,
      R = A / 4,
      z = 0,
      N = Math.sqrt,
      D = Math.cos,
      L = Math.sin,
      j = function (t) {
        return "string" == typeof t;
      },
      F = function (t) {
        return "function" == typeof t;
      },
      I = function (t) {
        return "number" == typeof t;
      },
      Y = function (t) {
        return void 0 === t;
      },
      B = function (t) {
        return "object" == typeof t;
      },
      X = function (t) {
        return !1 !== t;
      },
      W = function () {
        return "u" > typeof window;
      },
      H = function (t) {
        return F(t) || j(t);
      },
      U =
        ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
        function () {},
      q = Array.isArray,
      V = /random\([^)]+\)/g,
      $ = /,\s*/g,
      G = /(?:-?\.?\d|\.)+/gi,
      Q = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      Z = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      K = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      J = /[+-]=-?[.\d]+/,
      tt = /[^,'"\[\]\s]+/gi,
      te = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      tr = {},
      ti = {},
      tn = function (t) {
        return (ti = tN(t, tr)) && rE;
      },
      ts = function (t, e) {
        return console.warn(
          "Invalid property",
          t,
          "set to",
          e,
          "Missing plugin? gsap.registerPlugin()",
        );
      },
      to = function (t, e) {
        return !e && console.warn(t);
      },
      ta = function (t, e) {
        return (t && (tr[t] = e) && ti && (ti[t] = e)) || tr;
      },
      tl = function () {
        return 0;
      },
      tu = { suppressEvents: !0, isStart: !0, kill: !1 },
      tc = { suppressEvents: !0, kill: !1 },
      th = { suppressEvents: !0 },
      tf = {},
      tp = [],
      td = {},
      tm = {},
      tg = {},
      tv = 30,
      t_ = [],
      ty = "",
      tx = function (t) {
        var e,
          r,
          i = t[0];
        if ((B(i) || F(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
          for (r = t_.length; r-- && !t_[r].targetTest(i); );
          e = t_[r];
        }
        for (r = t.length; r--; )
          (t[r] && (t[r]._gsap || (t[r]._gsap = new eX(t[r], e)))) ||
            t.splice(r, 1);
        return t;
      },
      tb = function (t) {
        return t._gsap || tx(en(t))[0]._gsap;
      },
      tw = function (t, e, r) {
        return (r = t[e]) && F(r)
          ? t[e]()
          : (Y(r) && t.getAttribute && t.getAttribute(e)) || r;
      },
      tT = function (t, e) {
        return (t = t.split(",")).forEach(e) || t;
      },
      tS = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      tk = function (t) {
        return Math.round(1e7 * t) / 1e7 || 0;
      },
      tE = function (t, e) {
        var r = e.charAt(0),
          i = parseFloat(e.substr(2));
        return (
          (t = parseFloat(t)),
          "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
        );
      },
      tM = function (t, e) {
        for (var r = e.length, i = 0; 0 > t.indexOf(e[i]) && ++i < r; );
        return i < r;
      },
      tO = function () {
        var t,
          e,
          r = tp.length,
          i = tp.slice(0);
        for (t = 0, td = {}, tp.length = 0; t < r; t++)
          (e = i[t]) &&
            e._lazy &&
            (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      },
      tC = function (t) {
        return !!(t._initted || t._startAt || t.add);
      },
      tP = function (t, e, r, i) {
        (tp.length && !y && tO(),
          t.render(e, r, i || !!(y && e < 0 && tC(t))),
          tp.length && !y && tO());
      },
      tA = function (t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(tt).length < 2
          ? e
          : j(t)
            ? t.trim()
            : t;
      },
      tR = function (t) {
        return t;
      },
      tz = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      },
      tN = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      tD = function t(e, r) {
        for (var i in r)
          "__proto__" !== i &&
            "constructor" !== i &&
            "prototype" !== i &&
            (e[i] = B(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i]);
        return e;
      },
      tL = function (t, e) {
        var r,
          i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i;
      },
      tj = function (t) {
        var e,
          r = t.parent || b,
          i = t.keyframes
            ? ((e = q(t.keyframes)),
              function (t, r) {
                for (var i in r)
                  i in t ||
                    ("duration" === i && e) ||
                    "ease" === i ||
                    (t[i] = r[i]);
              })
            : tz;
        if (X(t.inherit))
          for (; r; ) (i(t, r.vars.defaults), (r = r.parent || r._dp));
        return t;
      },
      tF = function (t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; );
        return r < 0;
      },
      tI = function (t, e, r, i, n) {
        (void 0 === r && (r = "_first"), void 0 === i && (i = "_last"));
        var s,
          o = t[i];
        if (n) for (s = e[n]; o && o[n] > s; ) o = o._prev;
        return (
          o
            ? ((e._next = o._next), (o._next = e))
            : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[i] = e),
          (e._prev = o),
          (e.parent = e._dp = t),
          e
        );
      },
      tY = function (t, e, r, i) {
        (void 0 === r && (r = "_first"), void 0 === i && (i = "_last"));
        var n = e._prev,
          s = e._next;
        (n ? (n._next = s) : t[r] === e && (t[r] = s),
          s ? (s._prev = n) : t[i] === e && (t[i] = n),
          (e._next = e._prev = e.parent = null));
      },
      tB = function (t, e) {
        (t.parent &&
          (!e || t.parent.autoRemoveChildren) &&
          t.parent.remove &&
          t.parent.remove(t),
          (t._act = 0));
      },
      tX = function (t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
          for (var r = t; r; ) ((r._dirty = 1), (r = r.parent));
        return t;
      },
      tW = function (t) {
        for (var e = t.parent; e && e.parent; )
          ((e._dirty = 1), e.totalDuration(), (e = e.parent));
        return t;
      },
      tH = function (t, e, r, i) {
        return (
          t._startAt &&
          (y
            ? t._startAt.revert(tc)
            : (t.vars.immediateRender && !t.vars.autoRevert) ||
              t._startAt.render(e, !0, i))
        );
      },
      tU = function (t) {
        return t._repeat ? tq(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
      },
      tq = function (t, e) {
        var r = Math.floor((t = tk(t / e)));
        return t && r === t ? r - 1 : r;
      },
      tV = function (t, e) {
        return (
          (t - e._start) * e._ts +
          (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        );
      },
      t$ = function (t) {
        return (t._end = tk(
          t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0),
        ));
      },
      tG = function (t, e) {
        var r = t._dp;
        return (
          r &&
            r.smoothChildTiming &&
            t._ts &&
            ((t._start = tk(
              r._time -
                (t._ts > 0
                  ? e / t._ts
                  : -(((t._dirty ? t.totalDuration() : t._tDur) - e) / t._ts)),
            )),
            t$(t),
            r._dirty || tX(r, t)),
          t
        );
      },
      tQ = function (t, e) {
        var r;
        if (
          ((e._time ||
            (!e._dur && e._initted) ||
            (e._start < t._time && (e._dur || !e.add))) &&
            ((r = tV(t.rawTime(), e)),
            (!e._dur || et(0, e.totalDuration(), r) - e._tTime > 1e-8) &&
              e.render(r, !0)),
          tX(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
        ) {
          if (t._dur < t.duration())
            for (r = t; r._dp; )
              (r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp));
          t._zTime = -1e-8;
        }
      },
      tZ = function (t, e, r, i) {
        return (
          e.parent && tB(e),
          (e._start = tk(
            (I(r) ? r : r || t !== b ? t9(t, r, e) : t._time) + e._delay,
          )),
          (e._end = tk(
            e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0),
          )),
          tI(t, e, "_first", "_last", t._sort ? "_start" : 0),
          t1(e) || (t._recent = e),
          i || tQ(t, e),
          t._ts < 0 && tG(t, t._tTime),
          t
        );
      },
      tK = function (t, e) {
        return (
          (tr.ScrollTrigger || ts("scrollTrigger", e)) &&
          tr.ScrollTrigger.create(e, t)
        );
      },
      tJ = function (t, e, r, i, n) {
        return (e1(t, e, n), t._initted)
          ? !r &&
            t._pt &&
            !y &&
            ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
            E !== eM.frame
            ? (tp.push(t), (t._lazy = [n, i]), 1)
            : void 0
          : 1;
      },
      t0 = function t(e) {
        var r = e.parent;
        return (
          r && r._ts && r._initted && !r._lock && (0 > r.rawTime() || t(r))
        );
      },
      t1 = function (t) {
        var e = t.data;
        return "isFromStart" === e || "isStart" === e;
      },
      t2 = function (t, e, r, i) {
        var n,
          s,
          o,
          a = t.ratio,
          l =
            e < 0 ||
            (!e &&
              ((!t._start && t0(t) && !(!t._initted && t1(t))) ||
                ((t._ts < 0 || t._dp._ts < 0) && !t1(t))))
              ? 0
              : 1,
          u = t._rDelay,
          c = 0;
        if (
          (u &&
            t._repeat &&
            ((s = tq((c = et(0, t._tDur, e)), u)),
            t._yoyo && 1 & s && (l = 1 - l),
            s !== tq(t._tTime, u) &&
              ((a = 1 - l),
              t.vars.repeatRefresh && t._initted && t.invalidate())),
          l !== a || y || i || 1e-8 === t._zTime || (!e && t._zTime))
        ) {
          if (!t._initted && tJ(t, e, i, r, c)) return;
          for (
            o = t._zTime,
              t._zTime = e || 1e-8 * !!r,
              r || (r = e && !o),
              t.ratio = l,
              t._from && (l = 1 - l),
              t._time = 0,
              t._tTime = c,
              n = t._pt;
            n;
          )
            (n.r(l, n.d), (n = n._next));
          (e < 0 && tH(t, e, r, !0),
            t._onUpdate && !r && em(t, "onUpdate"),
            c && t._repeat && !r && t.parent && em(t, "onRepeat"),
            (e >= t._tDur || e < 0) &&
              t.ratio === l &&
              (l && tB(t, 1),
              r ||
                y ||
                (em(t, l ? "onComplete" : "onReverseComplete", !0),
                t._prom && t._prom())));
        } else t._zTime || (t._zTime = e);
      },
      t5 = function (t, e, r) {
        var i;
        if (r > e)
          for (i = t._first; i && i._start <= r; ) {
            if ("isPause" === i.data && i._start > e) return i;
            i = i._next;
          }
        else
          for (i = t._last; i && i._start >= r; ) {
            if ("isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
      },
      t3 = function (t, e, r, i) {
        var n = t._repeat,
          s = tk(e) || 0,
          o = t._tTime / t._tDur;
        return (
          o && !i && (t._time *= s / t._dur),
          (t._dur = s),
          (t._tDur = n ? (n < 0 ? 1e10 : tk(s * (n + 1) + t._rDelay * n)) : s),
          o > 0 && !i && tG(t, (t._tTime = t._tDur * o)),
          t.parent && t$(t),
          r || tX(t.parent, t),
          t
        );
      },
      t4 = function (t) {
        return t instanceof eH ? tX(t) : t3(t, t._dur);
      },
      t8 = { _start: 0, endTime: tl, totalDuration: tl },
      t9 = function t(e, r, i) {
        var n,
          s,
          o,
          a = e.labels,
          l = e._recent || t8,
          u = e.duration() >= 1e8 ? l.endTime(!1) : e._dur;
        return j(r) && (isNaN(r) || r in a)
          ? ((s = r.charAt(0)),
            (o = "%" === r.substr(-1)),
            (n = r.indexOf("=")),
            "<" === s || ">" === s)
            ? (n >= 0 && (r = r.replace(/=/, "")),
              ("<" === s ? l._start : l.endTime(l._repeat >= 0)) +
                (parseFloat(r.substr(1)) || 0) *
                  (o ? (n < 0 ? l : i).totalDuration() / 100 : 1))
            : n < 0
              ? (r in a || (a[r] = u), a[r])
              : ((s = parseFloat(r.charAt(n - 1) + r.substr(n + 1))),
                o && i && (s = (s / 100) * (q(i) ? i[0] : i).totalDuration()),
                n > 1 ? t(e, r.substr(0, n - 1), i) + s : u + s)
          : null == r
            ? u
            : +r;
      },
      t6 = function (t, e, r) {
        var i,
          n,
          s = I(e[1]),
          o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
          a = e[o];
        if ((s && (a.duration = e[1]), (a.parent = r), t)) {
          for (i = a, n = r; n && !("immediateRender" in i); )
            ((i = n.vars.defaults || {}), (n = X(n.vars.inherit) && n.parent));
          ((a.immediateRender = X(i.immediateRender)),
            t < 2 ? (a.runBackwards = 1) : (a.startAt = e[o - 1]));
        }
        return new e6(e[0], a, e[o + 1]);
      },
      t7 = function (t, e) {
        return t || 0 === t ? e(t) : e;
      },
      et = function (t, e, r) {
        return r < t ? t : r > e ? e : r;
      },
      ee = function (t, e) {
        return j(t) && (e = te.exec(t)) ? e[1] : "";
      },
      er = [].slice,
      ei = function (t, e) {
        return (
          t &&
          B(t) &&
          "length" in t &&
          ((!e && !t.length) || (t.length - 1 in t && B(t[0]))) &&
          !t.nodeType &&
          t !== w
        );
      },
      en = function (t, e, r) {
        var i;
        return x && !e && x.selector
          ? x.selector(t)
          : j(t) && !r && (T || !eO())
            ? er.call((e || S).querySelectorAll(t), 0)
            : q(t)
              ? (void 0 === i && (i = []),
                t.forEach(function (t) {
                  var e;
                  return (j(t) && !r) || ei(t, 1)
                    ? (e = i).push.apply(e, en(t))
                    : i.push(t);
                }) || i)
              : ei(t)
                ? er.call(t, 0)
                : t
                  ? [t]
                  : [];
      },
      es = function (t) {
        return (
          (t = en(t)[0] || to("Invalid scope") || {}),
          function (e) {
            var r = t.current || t.nativeElement || t;
            return en(
              e,
              r.querySelectorAll
                ? r
                : r === t
                  ? to("Invalid scope") || S.createElement("div")
                  : t,
            );
          }
        );
      },
      eo = function (t) {
        return t.sort(function () {
          return 0.5 - Math.random();
        });
      },
      ea = function (t) {
        if (F(t)) return t;
        var e = B(t) ? t : { each: t },
          r = ej(e.ease),
          i = e.from || 0,
          n = parseFloat(e.base) || 0,
          s = {},
          o = i > 0 && i < 1,
          a = isNaN(i) || o,
          l = e.axis,
          u = i,
          c = i;
        return (
          j(i)
            ? (u = c = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
            : !o && a && ((u = i[0]), (c = i[1])),
          function (t, o, h) {
            var f,
              p,
              d,
              m,
              g,
              v,
              _,
              y,
              x,
              b = (h || e).length,
              w = s[b];
            if (!w) {
              if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
                for (
                  _ = -1e8;
                  _ < (_ = h[x++].getBoundingClientRect().left) && x < b;
                );
                x < b && x--;
              }
              for (
                v = 0,
                  w = s[b] = [],
                  f = a ? Math.min(x, b) * u - 0.5 : i % x,
                  p = 1e8 === x ? 0 : a ? (b * c) / x - 0.5 : (i / x) | 0,
                  _ = 0,
                  y = 1e8;
                v < b;
                v++
              )
                ((d = (v % x) - f),
                  (m = p - ((v / x) | 0)),
                  (w[v] = g =
                    l ? Math.abs("y" === l ? m : d) : N(d * d + m * m)),
                  g > _ && (_ = g),
                  g < y && (y = g));
              ("random" === i && eo(w),
                (w.max = _ - y),
                (w.min = y),
                (w.v = b =
                  (parseFloat(e.amount) ||
                    parseFloat(e.each) *
                      (x > b
                        ? b - 1
                        : l
                          ? "y" === l
                            ? b / x
                            : x
                          : Math.max(x, b / x)) ||
                    0) * ("edges" === i ? -1 : 1)),
                (w.b = b < 0 ? n - b : n),
                (w.u = ee(e.amount || e.each) || 0),
                (r = r && b < 0 ? eD(r) : r));
            }
            return (
              (b = (w[t] - w.min) / w.max || 0),
              tk(w.b + (r ? r(b) : b) * w.v) + w.u
            );
          }
        );
      },
      el = function (t) {
        var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
        return function (r) {
          var i = tk(Math.round(parseFloat(r) / t) * t * e);
          return (i - (i % 1)) / e + (I(r) ? 0 : ee(r));
        };
      },
      eu = function (t, e) {
        var r,
          i,
          n = q(t);
        return (
          !n &&
            B(t) &&
            ((r = n = t.radius || 1e8),
            t.values
              ? (i = !I((t = en(t.values))[0])) && (r *= r)
              : (t = el(t.increment))),
          t7(
            e,
            n
              ? F(t)
                ? function (e) {
                    return Math.abs((i = t(e)) - e) <= r ? i : e;
                  }
                : function (e) {
                    for (
                      var n,
                        s,
                        o = parseFloat(i ? e.x : e),
                        a = parseFloat(i ? e.y : 0),
                        l = 1e8,
                        u = 0,
                        c = t.length;
                      c--;
                    )
                      (n = i
                        ? (n = t[c].x - o) * n + (s = t[c].y - a) * s
                        : Math.abs(t[c] - o)) < l && ((l = n), (u = c));
                    return (
                      (u = !r || l <= r ? t[u] : e),
                      i || u === e || I(e) ? u : u + ee(e)
                    );
                  }
              : el(t),
          )
        );
      },
      ec = function (t, e, r, i) {
        return t7(q(t) ? !e : !0 === r ? ((r = 0), !1) : !i, function () {
          return q(t)
            ? t[~~(Math.random() * t.length)]
            : (i =
                (r = r || 1e-5) < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                Math.floor(
                  Math.round(
                    (t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r,
                  ) *
                    r *
                    i,
                ) / i;
        });
      },
      eh = function (t, e, r) {
        return t7(r, function (r) {
          return t[~~e(r)];
        });
      },
      ef = function (t) {
        return t.replace(V, function (t) {
          var e = t.indexOf("[") + 1,
            r = t.substring(e || 7, e ? t.indexOf("]") : t.length - 1).split($);
          return ec(e ? r : +r[0], e ? 0 : +r[1], +r[2] || 1e-5);
        });
      },
      ep = function (t, e, r, i, n) {
        var s = e - t,
          o = i - r;
        return t7(n, function (e) {
          return r + (((e - t) / s) * o || 0);
        });
      },
      ed = function (t, e, r) {
        var i,
          n,
          s,
          o = t.labels,
          a = 1e8;
        for (i in o)
          (n = o[i] - e) < 0 == !!r &&
            n &&
            a > (n = Math.abs(n)) &&
            ((s = i), (a = n));
        return s;
      },
      em = function (t, e, r) {
        var i,
          n,
          s,
          o = t.vars,
          a = o[e],
          l = x,
          u = t._ctx;
        if (a)
          return (
            (i = o[e + "Params"]),
            (n = o.callbackScope || t),
            r && tp.length && tO(),
            u && (x = u),
            (s = i ? a.apply(n, i) : a.call(n)),
            (x = l),
            s
          );
      },
      eg = function (t) {
        return (
          tB(t),
          t.scrollTrigger && t.scrollTrigger.kill(!!y),
          1 > t.progress() && em(t, "onInterrupt"),
          t
        );
      },
      ev = [],
      e_ = function (t) {
        if (t)
          if (((t = (!t.name && t.default) || t), W() || t.headless)) {
            var e = t.name,
              r = F(t),
              i =
                e && !r && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              n = {
                init: tl,
                render: ra,
                add: eK,
                kill: ru,
                modifier: rl,
                rawVars: 0,
              },
              s = {
                targetTest: 0,
                get: 0,
                getSetter: ri,
                aliases: {},
                register: 0,
              };
            if ((eO(), t !== i)) {
              if (tm[e]) return;
              (tz(i, tz(tL(t, n), s)),
                tN(i.prototype, tN(n, tL(t, s))),
                (tm[(i.prop = e)] = i),
                t.targetTest && (t_.push(i), (tf[e] = 1)),
                (e =
                  ("css" === e
                    ? "CSS"
                    : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"));
            }
            (ta(e, i), t.register && t.register(rE, i, rf));
          } else ev.push(t);
      },
      ey = {
        aqua: [0, 255, 255],
        lime: [0, 255, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, 255],
        navy: [0, 0, 128],
        white: [255, 255, 255],
        olive: [128, 128, 0],
        yellow: [255, 255, 0],
        orange: [255, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [255, 0, 0],
        pink: [255, 192, 203],
        cyan: [0, 255, 255],
        transparent: [255, 255, 255, 0],
      },
      ex = function (t, e, r) {
        return (
          ((6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1
            ? e + (r - e) * t * 6
            : t < 0.5
              ? r
              : 3 * t < 2
                ? e + (r - e) * (2 / 3 - t) * 6
                : e) *
            255 +
            0.5) |
          0
        );
      },
      eb = function (t, e, r) {
        var i,
          n,
          s,
          o,
          a,
          l,
          u,
          c,
          h,
          f,
          p = t ? (I(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : ey.black;
        if (!p) {
          if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ey[t]))
            p = ey[t];
          else if ("#" === t.charAt(0)) {
            if (
              (t.length < 6 &&
                ((i = t.charAt(1)),
                (t =
                  "#" +
                  i +
                  i +
                  (n = t.charAt(2)) +
                  n +
                  (s = t.charAt(3)) +
                  s +
                  (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
              9 === t.length)
            )
              return [
                (p = parseInt(t.substr(1, 6), 16)) >> 16,
                (p >> 8) & 255,
                255 & p,
                parseInt(t.substr(7), 16) / 255,
              ];
            p = [
              (t = parseInt(t.substr(1), 16)) >> 16,
              (t >> 8) & 255,
              255 & t,
            ];
          } else if ("hsl" === t.substr(0, 3))
            if (((p = f = t.match(G)), e)) {
              if (~t.indexOf("="))
                return ((p = t.match(Q)), r && p.length < 4 && (p[3] = 1), p);
            } else
              ((o = (p[0] % 360) / 360),
                (a = p[1] / 100),
                (n = (l = p[2] / 100) <= 0.5 ? l * (a + 1) : l + a - l * a),
                (i = 2 * l - n),
                p.length > 3 && (p[3] *= 1),
                (p[0] = ex(o + 1 / 3, i, n)),
                (p[1] = ex(o, i, n)),
                (p[2] = ex(o - 1 / 3, i, n)));
          else p = t.match(G) || ey.transparent;
          p = p.map(Number);
        }
        return (
          e &&
            !f &&
            ((i = p[0] / 255),
            (l =
              ((u = Math.max(i, (n = p[1] / 255), (s = p[2] / 255))) +
                (c = Math.min(i, n, s))) /
              2),
            u === c
              ? (o = a = 0)
              : ((h = u - c),
                (a = l > 0.5 ? h / (2 - u - c) : h / (u + c)),
                (o =
                  (u === i
                    ? (n - s) / h + 6 * (n < s)
                    : u === n
                      ? (s - i) / h + 2
                      : (i - n) / h + 4) * 60)),
            (p[0] = ~~(o + 0.5)),
            (p[1] = ~~(100 * a + 0.5)),
            (p[2] = ~~(100 * l + 0.5))),
          r && p.length < 4 && (p[3] = 1),
          p
        );
      },
      ew = function (t) {
        var e = [],
          r = [],
          i = -1;
        return (
          t.split(eS).forEach(function (t) {
            var n = t.match(Z) || [];
            (e.push.apply(e, n), r.push((i += n.length + 1)));
          }),
          (e.c = r),
          e
        );
      },
      eT = function (t, e, r) {
        var i,
          n,
          s,
          o,
          a = "",
          l = (t + a).match(eS),
          u = e ? "hsla(" : "rgba(",
          c = 0;
        if (!l) return t;
        if (
          ((l = l.map(function (t) {
            return (
              (t = eb(t, e, 1)) &&
              u +
                (e
                  ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                  : t.join(",")) +
                ")"
            );
          })),
          r && ((s = ew(t)), (i = r.c).join(a) !== s.c.join(a)))
        )
          for (o = (n = t.replace(eS, "1").split(Z)).length - 1; c < o; c++)
            a +=
              n[c] +
              (~i.indexOf(c)
                ? l.shift() || u + "0,0,0,0)"
                : (s.length ? s : l.length ? l : r).shift());
        if (!n)
          for (o = (n = t.split(eS)).length - 1; c < o; c++) a += n[c] + l[c];
        return a + n[o];
      },
      eS = (function () {
        var t,
          e =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in ey) e += "|" + t + "\\b";
        return RegExp(e + ")", "gi");
      })(),
      ek = /hsl[a]?\(/,
      eE = function (t) {
        var e,
          r = t.join(" ");
        if (((eS.lastIndex = 0), eS.test(r)))
          return (
            (e = ek.test(r)),
            (t[1] = eT(t[1], e)),
            (t[0] = eT(t[0], e, ew(t[1]))),
            !0
          );
      },
      eM =
        ((u = Date.now),
        (c = 500),
        (h = 33),
        (p = f = u()),
        (d = 1e3 / 240),
        (m = 1e3 / 240),
        (g = []),
        (v = function t(e) {
          var r,
            s,
            v,
            _,
            y = u() - p,
            x = !0 === e;
          if (
            ((y > c || y < 0) && (f += y - h),
            (p += y),
            ((r = (v = p - f) - m) > 0 || x) &&
              ((_ = ++o.frame),
              (a = v - 1e3 * o.time),
              (o.time = v /= 1e3),
              (m += r + (r >= d ? 4 : d - r)),
              (s = 1)),
            x || (i = n(t)),
            s)
          )
            for (l = 0; l < g.length; l++) g[l](v, a, _, e);
        }),
        (o = {
          time: 0,
          frame: 0,
          tick: function () {
            v(!0);
          },
          deltaRatio: function (t) {
            return a / (1e3 / (t || 60));
          },
          wake: function () {
            k &&
              (!T &&
                W() &&
                ((S = (w = T = window).document || {}),
                (tr.gsap = rE),
                (w.gsapVersions || (w.gsapVersions = [])).push(rE.version),
                tn(ti || w.GreenSockGlobals || (!w.gsap && w) || {}),
                ev.forEach(e_)),
              (s = "u" > typeof requestAnimationFrame && requestAnimationFrame),
              i && o.sleep(),
              (n =
                s ||
                function (t) {
                  return setTimeout(t, (m - 1e3 * o.time + 1) | 0);
                }),
              (O = 1),
              v(2));
          },
          sleep: function () {
            ((s ? cancelAnimationFrame : clearTimeout)(i), (O = 0), (n = tl));
          },
          lagSmoothing: function (t, e) {
            h = Math.min(e || 33, (c = t || 1 / 0));
          },
          fps: function (t) {
            ((d = 1e3 / (t || 240)), (m = 1e3 * o.time + d));
          },
          add: function (t, e, r) {
            var i = e
              ? function (e, r, n, s) {
                  (t(e, r, n, s), o.remove(i));
                }
              : t;
            return (o.remove(t), g[r ? "unshift" : "push"](i), eO(), i);
          },
          remove: function (t, e) {
            ~(e = g.indexOf(t)) && g.splice(e, 1) && l >= e && l--;
          },
          _listeners: g,
        })),
      eO = function () {
        return !O && eM.wake();
      },
      eC = {},
      eP = /^[\d.\-M][\d.\-,\s]/,
      eA = /["']/g,
      eR = function (t) {
        for (
          var e,
            r,
            i,
            n = {},
            s = t.substr(1, t.length - 3).split(":"),
            o = s[0],
            a = 1,
            l = s.length;
          a < l;
          a++
        )
          ((r = s[a]),
            (e = a !== l - 1 ? r.lastIndexOf(",") : r.length),
            (i = r.substr(0, e)),
            (n[o] = isNaN(i) ? i.replace(eA, "").trim() : +i),
            (o = r.substr(e + 1).trim()));
        return n;
      },
      ez = function (t) {
        var e = t.indexOf("(") + 1,
          r = t.indexOf(")"),
          i = t.indexOf("(", e);
        return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
      },
      eN = function (t) {
        var e = (t + "").split("("),
          r = eC[e[0]];
        return r && e.length > 1 && r.config
          ? r.config.apply(
              null,
              ~t.indexOf("{") ? [eR(e[1])] : ez(t).split(",").map(tA),
            )
          : eC._CE && eP.test(t)
            ? eC._CE("", t)
            : r;
      },
      eD = function (t) {
        return function (e) {
          return 1 - t(1 - e);
        };
      },
      eL = function t(e, r) {
        for (var i, n = e._first; n; )
          (n instanceof eH
            ? t(n, r)
            : !n.vars.yoyoEase ||
              (n._yoyo && n._repeat) ||
              n._yoyo === r ||
              (n.timeline
                ? t(n.timeline, r)
                : ((i = n._ease),
                  (n._ease = n._yEase),
                  (n._yEase = i),
                  (n._yoyo = r))),
            (n = n._next));
      },
      ej = function (t, e) {
        return (t && (F(t) ? t : eC[t] || eN(t))) || e;
      },
      eF = function (t, e, r, i) {
        (void 0 === r &&
          (r = function (t) {
            return 1 - e(1 - t);
          }),
          void 0 === i &&
            (i = function (t) {
              return t < 0.5 ? e(2 * t) / 2 : 1 - e((1 - t) * 2) / 2;
            }));
        var n,
          s = { easeIn: e, easeOut: r, easeInOut: i };
        return (
          tT(t, function (t) {
            for (var e in ((eC[t] = tr[t] = s),
            (eC[(n = t.toLowerCase())] = r),
            s))
              eC[
                n +
                  ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
              ] = eC[t + "." + e] = s[e];
          }),
          s
        );
      },
      eI = function (t) {
        return function (e) {
          return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
        };
      },
      eY = function t(e, r, i) {
        var n = r >= 1 ? r : 1,
          s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
          o = (s / A) * (Math.asin(1 / n) || 0),
          a = function (t) {
            return 1 === t ? 1 : n * Math.pow(2, -10 * t) * L((t - o) * s) + 1;
          },
          l =
            "out" === e
              ? a
              : "in" === e
                ? function (t) {
                    return 1 - a(1 - t);
                  }
                : eI(a);
        return (
          (s = A / s),
          (l.config = function (r, i) {
            return t(e, r, i);
          }),
          l
        );
      },
      eB = function t(e, r) {
        void 0 === r && (r = 1.70158);
        var i = function (t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
          },
          n =
            "out" === e
              ? i
              : "in" === e
                ? function (t) {
                    return 1 - i(1 - t);
                  }
                : eI(i);
        return (
          (n.config = function (r) {
            return t(e, r);
          }),
          n
        );
      };
    (tT("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var r = e < 5 ? e + 1 : e;
      eF(
        t + ",Power" + (r - 1),
        e
          ? function (t) {
              return Math.pow(t, r);
            }
          : function (t) {
              return t;
            },
        function (t) {
          return 1 - Math.pow(1 - t, r);
        },
        function (t) {
          return t < 0.5
            ? Math.pow(2 * t, r) / 2
            : 1 - Math.pow((1 - t) * 2, r) / 2;
        },
      );
    }),
      (eC.Linear.easeNone = eC.none = eC.Linear.easeIn),
      eF("Elastic", eY("in"), eY("out"), eY()),
      (eq = 2 * (eU = 1 / 2.75)),
      (eV = 2.5 * eU),
      eF(
        "Bounce",
        function (t) {
          return 1 - e$(1 - t);
        },
        (e$ = function (t) {
          return t < eU
            ? 7.5625 * t * t
            : t < eq
              ? 7.5625 * Math.pow(t - 1.5 / 2.75, 2) + 0.75
              : t < eV
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
        }),
      ),
      eF("Expo", function (t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t);
      }),
      eF("Circ", function (t) {
        return -(N(1 - t * t) - 1);
      }),
      eF("Sine", function (t) {
        return 1 === t ? 1 : -D(t * R) + 1;
      }),
      eF("Back", eB("in"), eB("out"), eB()),
      (eC.SteppedEase =
        eC.steps =
        tr.SteppedEase =
          {
            config: function (t, e) {
              void 0 === t && (t = 1);
              var r = 1 / t,
                i = t + +!e,
                n = +!!e,
                s = 0.99999999;
              return function (t) {
                return (((i * et(0, s, t)) | 0) + n) * r;
              };
            },
          }),
      (P.ease = eC["quad.out"]),
      tT(
        "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
        function (t) {
          return (ty += t + "," + t + "Params,");
        },
      ));
    var eX = function (t, e) {
        ((this.id = z++),
          (t._gsap = this),
          (this.target = t),
          (this.harness = e),
          (this.get = e ? e.get : tw),
          (this.set = e ? e.getSetter : ri));
      },
      eW = (function () {
        function t(t) {
          ((this.vars = t),
            (this._delay = +t.delay || 0),
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
              ((this._rDelay = t.repeatDelay || 0),
              (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
            (this._ts = 1),
            t3(this, +t.duration, 1, 1),
            (this.data = t.data),
            x && ((this._ctx = x), x.data.push(this)),
            O || eM.wake());
        }
        var e = t.prototype;
        return (
          (e.delay = function (t) {
            return t || 0 === t
              ? (this.parent &&
                  this.parent.smoothChildTiming &&
                  this.startTime(this._start + t - this._delay),
                (this._delay = t),
                this)
              : this._delay;
          }),
          (e.duration = function (t) {
            return arguments.length
              ? this.totalDuration(
                  this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t,
                )
              : this.totalDuration() && this._dur;
          }),
          (e.totalDuration = function (t) {
            return arguments.length
              ? ((this._dirty = 0),
                t3(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1),
                ))
              : this._tDur;
          }),
          (e.totalTime = function (t, e) {
            if ((eO(), !arguments.length)) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
              for (
                tG(this, t), !r._dp || r.parent || tQ(r, this);
                r && r.parent;
              )
                (r.parent._time !==
                  r._start +
                    (r._ts >= 0
                      ? r._tTime / r._ts
                      : -((r.totalDuration() - r._tTime) / r._ts)) &&
                  r.totalTime(r._tTime, !0),
                  (r = r.parent));
              !this.parent &&
                this._dp.autoRemoveChildren &&
                ((this._ts > 0 && t < this._tDur) ||
                  (this._ts < 0 && t > 0) ||
                  (!this._tDur && !t)) &&
                tZ(this._dp, this, this._start - this._delay);
            }
            return (
              (this._tTime !== t ||
                (!this._dur && !e) ||
                (this._initted && 1e-8 === Math.abs(this._zTime)) ||
                (!this._initted && this._dur && t) ||
                (!t && !this._initted && (this.add || this._ptLookup))) &&
                (this._ts || (this._pTime = t), tP(this, t, e)),
              this
            );
          }),
          (e.time = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  Math.min(this.totalDuration(), t + tU(this)) %
                    (this._dur + this._rDelay) || (t ? this._dur : 0),
                  e,
                )
              : this._time;
          }),
          (e.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.rawTime() >= 0 && this._initted
                  ? 1
                  : 0;
          }),
          (e.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && !(1 & this.iteration()) ? 1 - t : t) +
                    tU(this),
                  e,
                )
              : this.duration()
                ? Math.min(1, this._time / this._dur)
                : +(this.rawTime() > 0);
          }),
          (e.iteration = function (t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length
              ? this.totalTime(this._time + (t - 1) * r, e)
              : this._repeat
                ? tq(this._tTime, r) + 1
                : 1;
          }),
          (e.timeScale = function (t, e) {
            if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
            if (this._rts === t) return this;
            var r =
              this.parent && this._ts
                ? tV(this.parent._time, this)
                : this._tTime;
            return (
              (this._rts = +t || 0),
              (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
              this.totalTime(
                et(-Math.abs(this._delay), this.totalDuration(), r),
                !1 !== e,
              ),
              t$(this),
              tW(this)
            );
          }),
          (e.paused = function (t) {
            return arguments.length
              ? (this._ps !== t &&
                  ((this._ps = t),
                  t
                    ? ((this._pTime =
                        this._tTime || Math.max(-this._delay, this.rawTime())),
                      (this._ts = this._act = 0))
                    : (eO(),
                      (this._ts = this._rts),
                      this.totalTime(
                        this.parent && !this.parent.smoothChildTiming
                          ? this.rawTime()
                          : this._tTime || this._pTime,
                        1 === this.progress() &&
                          1e-8 !== Math.abs(this._zTime) &&
                          (this._tTime -= 1e-8),
                      ))),
                this)
              : this._ps;
          }),
          (e.startTime = function (t) {
            if (arguments.length) {
              this._start = tk(t);
              var e = this.parent || this._dp;
              return (
                e &&
                  (e._sort || !this.parent) &&
                  tZ(e, this, this._start - this._delay),
                this
              );
            }
            return this._start;
          }),
          (e.endTime = function (t) {
            return (
              this._start +
              (X(t) ? this.totalDuration() : this.duration()) /
                Math.abs(this._ts || 1)
            );
          }),
          (e.rawTime = function (t) {
            var e = this.parent || this._dp;
            return e
              ? t &&
                (!this._ts ||
                  (this._repeat && this._time && 1 > this.totalProgress()))
                ? this._tTime % (this._dur + this._rDelay)
                : this._ts
                  ? tV(e.rawTime(t), this)
                  : this._tTime
              : this._tTime;
          }),
          (e.revert = function (t) {
            void 0 === t && (t = th);
            var e = y;
            return (
              (y = t),
              tC(this) &&
                (this.timeline && this.timeline.revert(t),
                this.totalTime(-0.01, t.suppressEvents)),
              "nested" !== this.data && !1 !== t.kill && this.kill(),
              (y = e),
              this
            );
          }),
          (e.globalTime = function (t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
              ((r = e._start + r / (Math.abs(e._ts) || 1)), (e = e._dp));
            return !this.parent && this._sat ? this._sat.globalTime(t) : r;
          }),
          (e.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t === 1 / 0 ? -2 : t), t4(this))
              : -2 === this._repeat
                ? 1 / 0
                : this._repeat;
          }),
          (e.repeatDelay = function (t) {
            if (arguments.length) {
              var e = this._time;
              return ((this._rDelay = t), t4(this), e ? this.time(e) : this);
            }
            return this._rDelay;
          }),
          (e.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (e.seek = function (t, e) {
            return this.totalTime(t9(this, t), X(e));
          }),
          (e.restart = function (t, e) {
            return (
              this.play().totalTime(t ? -this._delay : 0, X(e)),
              this._dur || (this._zTime = -1e-8),
              this
            );
          }),
          (e.play = function (t, e) {
            return (null != t && this.seek(t, e), this.reversed(!1).paused(!1));
          }),
          (e.reverse = function (t, e) {
            return (
              null != t && this.seek(t || this.totalDuration(), e),
              this.reversed(!0).paused(!1)
            );
          }),
          (e.pause = function (t, e) {
            return (null != t && this.seek(t, e), this.paused(!0));
          }),
          (e.resume = function () {
            return this.paused(!1);
          }),
          (e.reversed = function (t) {
            return arguments.length
              ? (!!t !== this.reversed() &&
                  this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                this)
              : this._rts < 0;
          }),
          (e.invalidate = function () {
            return (
              (this._initted = this._act = 0),
              (this._zTime = -1e-8),
              this
            );
          }),
          (e.isActive = function () {
            var t,
              e = this.parent || this._dp,
              r = this._start;
            return !!(
              !e ||
              (this._ts &&
                this._initted &&
                e.isActive() &&
                (t = e.rawTime(!0)) >= r &&
                t < this.endTime(!0) - 1e-8)
            );
          }),
          (e.eventCallback = function (t, e, r) {
            var i = this.vars;
            return arguments.length > 1
              ? (e
                  ? ((i[t] = e),
                    r && (i[t + "Params"] = r),
                    "onUpdate" === t && (this._onUpdate = e))
                  : delete i[t],
                this)
              : i[t];
          }),
          (e.then = function (t) {
            var e = this,
              r = e._prom;
            return new Promise(function (i) {
              var n = F(t) ? t : tR,
                s = function () {
                  var t = e.then;
                  ((e.then = null),
                    r && r(),
                    F(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                    i(n),
                    (e.then = t));
                };
              (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
              (!e._tTime && e._ts < 0)
                ? s()
                : (e._prom = s);
            });
          }),
          (e.kill = function () {
            eg(this);
          }),
          t
        );
      })();
    tz(eW.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -1e-8,
      _prom: 0,
      _ps: !1,
      _rts: 1,
    });
    var eH = (function (t) {
      function i(r, i) {
        var n;
        return (
          void 0 === r && (r = {}),
          ((n = t.call(this, r) || this).labels = {}),
          (n.smoothChildTiming = !!r.smoothChildTiming),
          (n.autoRemoveChildren = !!r.autoRemoveChildren),
          (n._sort = X(r.sortChildren)),
          b && tZ(r.parent || b, e(n), i),
          r.reversed && n.reverse(),
          r.paused && n.paused(!0),
          r.scrollTrigger && tK(e(n), r.scrollTrigger),
          n
        );
      }
      r(i, t);
      var n = i.prototype;
      return (
        (n.to = function (t, e, r) {
          return (t6(0, arguments, this), this);
        }),
        (n.from = function (t, e, r) {
          return (t6(1, arguments, this), this);
        }),
        (n.fromTo = function (t, e, r, i) {
          return (t6(2, arguments, this), this);
        }),
        (n.set = function (t, e, r) {
          return (
            (e.duration = 0),
            (e.parent = this),
            tj(e).repeatDelay || (e.repeat = 0),
            (e.immediateRender = !!e.immediateRender),
            new e6(t, e, t9(this, r), 1),
            this
          );
        }),
        (n.call = function (t, e, r) {
          return tZ(this, e6.delayedCall(0, t, e), r);
        }),
        (n.staggerTo = function (t, e, r, i, n, s, o) {
          return (
            (r.duration = e),
            (r.stagger = r.stagger || i),
            (r.onComplete = s),
            (r.onCompleteParams = o),
            (r.parent = this),
            new e6(t, r, t9(this, n)),
            this
          );
        }),
        (n.staggerFrom = function (t, e, r, i, n, s, o) {
          return (
            (r.runBackwards = 1),
            (tj(r).immediateRender = X(r.immediateRender)),
            this.staggerTo(t, e, r, i, n, s, o)
          );
        }),
        (n.staggerFromTo = function (t, e, r, i, n, s, o, a) {
          return (
            (i.startAt = r),
            (tj(i).immediateRender = X(i.immediateRender)),
            this.staggerTo(t, e, i, n, s, o, a)
          );
        }),
        (n.render = function (t, e, r) {
          var i,
            n,
            s,
            o,
            a,
            l,
            u,
            c,
            h,
            f,
            p,
            d,
            m = this._time,
            g = this._dirty ? this.totalDuration() : this._tDur,
            v = this._dur,
            _ = t <= 0 ? 0 : tk(t),
            x = this._zTime < 0 != t < 0 && (this._initted || !v);
          if (
            (this !== b && _ > g && t >= 0 && (_ = g),
            _ !== this._tTime || r || x)
          ) {
            if (
              (m !== this._time &&
                v &&
                ((_ += this._time - m), (t += this._time - m)),
              (i = _),
              (h = this._start),
              (l = !(c = this._ts)),
              x && (v || (m = this._zTime), (t || !e) && (this._zTime = t)),
              this._repeat)
            ) {
              if (
                ((p = this._yoyo),
                (a = v + this._rDelay),
                this._repeat < -1 && t < 0)
              )
                return this.totalTime(100 * a + t, e, r);
              if (
                ((i = tk(_ % a)),
                _ === g
                  ? ((o = this._repeat), (i = v))
                  : ((o = ~~(f = tk(_ / a))) && o === f && ((i = v), o--),
                    i > v && (i = v)),
                (f = tq(this._tTime, a)),
                !m &&
                  this._tTime &&
                  f !== o &&
                  this._tTime - f * a - this._dur <= 0 &&
                  (f = o),
                p && 1 & o && ((i = v - i), (d = 1)),
                o !== f && !this._lock)
              ) {
                var w = p && 1 & f,
                  T = w === (p && 1 & o);
                if (
                  (o < f && (w = !w),
                  (m = w ? 0 : _ % v ? v : _),
                  (this._lock = 1),
                  (this.render(m || (d ? 0 : tk(o * a)), e, !v)._lock = 0),
                  (this._tTime = _),
                  !e && this.parent && em(this, "onRepeat"),
                  this.vars.repeatRefresh &&
                    !d &&
                    ((this.invalidate()._lock = 1), (f = o)),
                  (m && m !== this._time) ||
                    !this._ts !== l ||
                    (this.vars.onRepeat && !this.parent && !this._act) ||
                    ((v = this._dur),
                    (g = this._tDur),
                    T &&
                      ((this._lock = 2),
                      (m = w ? v : -1e-4),
                      this.render(m, !0),
                      this.vars.repeatRefresh && !d && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !l))
                )
                  return this;
                eL(this, d);
              }
            }
            if (
              (this._hasPause &&
                !this._forcing &&
                this._lock < 2 &&
                (u = t5(this, tk(m), tk(i))) &&
                (_ -= i - (i = u._start)),
              (this._tTime = _),
              (this._time = i),
              (this._act = !c),
              this._initted ||
                ((this._onUpdate = this.vars.onUpdate),
                (this._initted = 1),
                (this._zTime = t),
                (m = 0)),
              !m &&
                _ &&
                v &&
                !e &&
                !f &&
                (em(this, "onStart"), this._tTime !== _))
            )
              return this;
            if (i >= m && t >= 0)
              for (n = this._first; n; ) {
                if (
                  ((s = n._next), (n._act || i >= n._start) && n._ts && u !== n)
                ) {
                  if (n.parent !== this) return this.render(t, e, r);
                  if (
                    (n.render(
                      n._ts > 0
                        ? (i - n._start) * n._ts
                        : (n._dirty ? n.totalDuration() : n._tDur) +
                            (i - n._start) * n._ts,
                      e,
                      r,
                    ),
                    i !== this._time || (!this._ts && !l))
                  ) {
                    ((u = 0), s && (_ += this._zTime = -1e-8));
                    break;
                  }
                }
                n = s;
              }
            else {
              n = this._last;
              for (var S = t < 0 ? t : i; n; ) {
                if (
                  ((s = n._prev), (n._act || S <= n._end) && n._ts && u !== n)
                ) {
                  if (n.parent !== this) return this.render(t, e, r);
                  if (
                    (n.render(
                      n._ts > 0
                        ? (S - n._start) * n._ts
                        : (n._dirty ? n.totalDuration() : n._tDur) +
                            (S - n._start) * n._ts,
                      e,
                      r || (y && tC(n)),
                    ),
                    i !== this._time || (!this._ts && !l))
                  ) {
                    ((u = 0), s && (_ += this._zTime = S ? -1e-8 : 1e-8));
                    break;
                  }
                }
                n = s;
              }
            }
            if (
              u &&
              !e &&
              (this.pause(),
              (u.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1),
              this._ts)
            )
              return ((this._start = h), t$(this), this.render(t, e, r));
            (this._onUpdate && !e && em(this, "onUpdate", !0),
              ((_ === g && this._tTime >= this.totalDuration()) || (!_ && m)) &&
                (h === this._start || Math.abs(c) !== Math.abs(this._ts)) &&
                !this._lock &&
                ((t || !v) &&
                  ((_ === g && this._ts > 0) || (!_ && this._ts < 0)) &&
                  tB(this, 1),
                e ||
                  (t < 0 && !m) ||
                  (!_ && !m && g) ||
                  (em(
                    this,
                    _ === g && t >= 0 ? "onComplete" : "onReverseComplete",
                    !0,
                  ),
                  this._prom &&
                    !(_ < g && this.timeScale() > 0) &&
                    this._prom())));
          }
          return this;
        }),
        (n.add = function (t, e) {
          var r = this;
          if ((I(e) || (e = t9(this, e, t)), !(t instanceof eW))) {
            if (q(t))
              return (
                t.forEach(function (t) {
                  return r.add(t, e);
                }),
                this
              );
            if (j(t)) return this.addLabel(t, e);
            if (!F(t)) return this;
            t = e6.delayedCall(0, t);
          }
          return this !== t ? tZ(this, t, e) : this;
        }),
        (n.getChildren = function (t, e, r, i) {
          (void 0 === t && (t = !0),
            void 0 === e && (e = !0),
            void 0 === r && (r = !0),
            void 0 === i && (i = -1e8));
          for (var n = [], s = this._first; s; )
            (s._start >= i &&
              (s instanceof e6
                ? e && n.push(s)
                : (r && n.push(s),
                  t && n.push.apply(n, s.getChildren(!0, e, r)))),
              (s = s._next));
          return n;
        }),
        (n.getById = function (t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
            if (e[r].vars.id === t) return e[r];
        }),
        (n.remove = function (t) {
          return j(t)
            ? this.removeLabel(t)
            : F(t)
              ? this.killTweensOf(t)
              : (t.parent === this && tY(this, t),
                t === this._recent && (this._recent = this._last),
                tX(this));
        }),
        (n.totalTime = function (e, r) {
          return arguments.length
            ? ((this._forcing = 1),
              !this._dp &&
                this._ts &&
                (this._start = tk(
                  eM.time -
                    (this._ts > 0
                      ? e / this._ts
                      : -((this.totalDuration() - e) / this._ts)),
                )),
              t.prototype.totalTime.call(this, e, r),
              (this._forcing = 0),
              this)
            : this._tTime;
        }),
        (n.addLabel = function (t, e) {
          return ((this.labels[t] = t9(this, e)), this);
        }),
        (n.removeLabel = function (t) {
          return (delete this.labels[t], this);
        }),
        (n.addPause = function (t, e, r) {
          var i = e6.delayedCall(0, e || tl, r);
          return (
            (i.data = "isPause"),
            (this._hasPause = 1),
            tZ(this, i, t9(this, t))
          );
        }),
        (n.removePause = function (t) {
          var e = this._first;
          for (t = t9(this, t); e; )
            (e._start === t && "isPause" === e.data && tB(e), (e = e._next));
        }),
        (n.killTweensOf = function (t, e, r) {
          for (var i = this.getTweensOf(t, r), n = i.length; n--; )
            eG !== i[n] && i[n].kill(t, e);
          return this;
        }),
        (n.getTweensOf = function (t, e) {
          for (var r, i = [], n = en(t), s = this._first, o = I(e); s; )
            (s instanceof e6
              ? tM(s._targets, n) &&
                (o
                  ? (!eG || (s._initted && s._ts)) &&
                    s.globalTime(0) <= e &&
                    s.globalTime(s.totalDuration()) > e
                  : !e || s.isActive()) &&
                i.push(s)
              : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
              (s = s._next));
          return i;
        }),
        (n.tweenTo = function (t, e) {
          e = e || {};
          var r,
            i = this,
            n = t9(i, t),
            s = e,
            o = s.startAt,
            a = s.onStart,
            l = s.onStartParams,
            u = s.immediateRender,
            c = e6.to(
              i,
              tz(
                {
                  ease: e.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: n,
                  overwrite: "auto",
                  duration:
                    e.duration ||
                    Math.abs(
                      (n - (o && "time" in o ? o.time : i._time)) /
                        i.timeScale(),
                    ) ||
                    1e-8,
                  onStart: function () {
                    if ((i.pause(), !r)) {
                      var t =
                        e.duration ||
                        Math.abs(
                          (n - (o && "time" in o ? o.time : i._time)) /
                            i.timeScale(),
                        );
                      (c._dur !== t && t3(c, t, 0, 1).render(c._time, !0, !0),
                        (r = 1));
                    }
                    a && a.apply(c, l || []);
                  },
                },
                e,
              ),
            );
          return u ? c.render(0) : c;
        }),
        (n.tweenFromTo = function (t, e, r) {
          return this.tweenTo(e, tz({ startAt: { time: t9(this, t) } }, r));
        }),
        (n.recent = function () {
          return this._recent;
        }),
        (n.nextLabel = function (t) {
          return (void 0 === t && (t = this._time), ed(this, t9(this, t)));
        }),
        (n.previousLabel = function (t) {
          return (void 0 === t && (t = this._time), ed(this, t9(this, t), 1));
        }),
        (n.currentLabel = function (t) {
          return arguments.length
            ? this.seek(t, !0)
            : this.previousLabel(this._time + 1e-8);
        }),
        (n.shiftChildren = function (t, e, r) {
          void 0 === r && (r = 0);
          var i,
            n = this._first,
            s = this.labels;
          for (t = tk(t); n; )
            (n._start >= r && ((n._start += t), (n._end += t)), (n = n._next));
          if (e) for (i in s) s[i] >= r && (s[i] += t);
          return tX(this);
        }),
        (n.invalidate = function (e) {
          var r = this._first;
          for (this._lock = 0; r; ) (r.invalidate(e), (r = r._next));
          return t.prototype.invalidate.call(this, e);
        }),
        (n.clear = function (t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r; )
            ((e = r._next), this.remove(r), (r = e));
          return (
            this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            tX(this)
          );
        }),
        (n.totalDuration = function (t) {
          var e,
            r,
            i,
            n = 0,
            s = this._last,
            o = 1e8;
          if (arguments.length)
            return this.timeScale(
              (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                (this.reversed() ? -t : t),
            );
          if (this._dirty) {
            for (i = this.parent; s; )
              ((e = s._prev),
                s._dirty && s.totalDuration(),
                (r = s._start) > o && this._sort && s._ts && !this._lock
                  ? ((this._lock = 1), (tZ(this, s, r - s._delay, 1)._lock = 0))
                  : (o = r),
                r < 0 &&
                  s._ts &&
                  ((n -= r),
                  ((!i && !this._dp) || (i && i.smoothChildTiming)) &&
                    ((this._start += tk(r / this._ts)),
                    (this._time -= r),
                    (this._tTime -= r)),
                  this.shiftChildren(-r, !1, -Infinity),
                  (o = 0)),
                s._end > n && s._ts && (n = s._end),
                (s = e));
            (t3(this, this === b && this._time > n ? this._time : n, 1, 1),
              (this._dirty = 0));
          }
          return this._tDur;
        }),
        (i.updateRoot = function (t) {
          if ((b._ts && (tP(b, tV(t, b)), (E = eM.frame)), eM.frame >= tv)) {
            tv += C.autoSleep || 120;
            var e = b._first;
            if ((!e || !e._ts) && C.autoSleep && eM._listeners.length < 2) {
              for (; e && !e._ts; ) e = e._next;
              e || eM.sleep();
            }
          }
        }),
        i
      );
    })(eW);
    tz(eH.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
    var eU,
      eq,
      eV,
      e$,
      eG,
      eQ,
      eZ = function (t, e, r, i, n, s, o) {
        var a,
          l,
          u,
          c,
          h,
          f,
          p,
          d,
          m = new rf(this._pt, t, e, 0, 1, ro, null, n),
          g = 0,
          v = 0;
        for (
          m.b = r,
            m.e = i,
            r += "",
            i += "",
            (p = ~i.indexOf("random(")) && (i = ef(i)),
            s && (s((d = [r, i]), t, e), (r = d[0]), (i = d[1])),
            l = r.match(K) || [];
          (a = K.exec(i));
        )
          ((c = a[0]),
            (h = i.substring(g, a.index)),
            u ? (u = (u + 1) % 5) : "rgba(" === h.substr(-5) && (u = 1),
            c !== l[v++] &&
              ((f = parseFloat(l[v - 1]) || 0),
              (m._pt = {
                _next: m._pt,
                p: h || 1 === v ? h : ",",
                s: f,
                c: "=" === c.charAt(1) ? tE(f, c) - f : parseFloat(c) - f,
                m: u && u < 4 ? Math.round : 0,
              }),
              (g = K.lastIndex)));
        return (
          (m.c = g < i.length ? i.substring(g, i.length) : ""),
          (m.fp = o),
          (J.test(i) || p) && (m.e = 0),
          (this._pt = m),
          m
        );
      },
      eK = function (t, e, r, i, n, s, o, a, l, u) {
        F(i) && (i = i(n || 0, t, s));
        var c,
          h = t[e],
          f =
            "get" !== r
              ? r
              : F(h)
                ? l
                  ? t[
                      e.indexOf("set") || !F(t["get" + e.substr(3)])
                        ? e
                        : "get" + e.substr(3)
                    ](l)
                  : t[e]()
                : h,
          p = F(h) ? (l ? re : rt) : e7;
        if (
          (j(i) &&
            (~i.indexOf("random(") && (i = ef(i)),
            "=" === i.charAt(1) &&
              ((c = tE(f, i) + (ee(f) || 0)) || 0 === c) &&
              (i = c)),
          !u || f !== i || eQ)
        )
          return isNaN(f * i) || "" === i
            ? (h || e in t || ts(e, i),
              eZ.call(this, t, e, f, i, p, a || C.stringFilter, l))
            : ((c = new rf(
                this._pt,
                t,
                e,
                +f || 0,
                i - (f || 0),
                "boolean" == typeof h ? rs : rn,
                0,
                p,
              )),
              l && (c.fp = l),
              o && c.modifier(o, this, t),
              (this._pt = c));
      },
      eJ = function (t, e, r, i, n) {
        if (
          (F(t) && (t = e4(t, n, e, r, i)),
          !B(t) || (t.style && t.nodeType) || q(t) || U(t))
        )
          return j(t) ? e4(t, n, e, r, i) : t;
        var s,
          o = {};
        for (s in t) o[s] = e4(t[s], n, e, r, i);
        return o;
      },
      e0 = function (t, e, r, i, n, s) {
        var o, a, l, u;
        if (
          tm[t] &&
          !1 !==
            (o = new tm[t]()).init(
              n,
              o.rawVars ? e[t] : eJ(e[t], i, n, s, r),
              r,
              i,
              s,
            ) &&
          ((r._pt = a = new rf(r._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
          r !== M)
        )
          for (
            l = r._ptLookup[r._targets.indexOf(n)], u = o._props.length;
            u--;
          )
            l[o._props[u]] = a;
        return o;
      },
      e1 = function t(e, r, i) {
        var n,
          s,
          o,
          a,
          l,
          u,
          c,
          h,
          f,
          p,
          d,
          m,
          g,
          v = e.vars,
          x = v.ease,
          w = v.startAt,
          T = v.immediateRender,
          S = v.lazy,
          k = v.onUpdate,
          E = v.runBackwards,
          M = v.yoyoEase,
          O = v.keyframes,
          C = v.autoRevert,
          A = e._dur,
          R = e._startAt,
          z = e._targets,
          N = e.parent,
          D = N && "nested" === N.data ? N.vars.targets : z,
          L = "auto" === e._overwrite && !_,
          j = e.timeline;
        if (
          (!j || (O && x) || (x = "none"),
          (e._ease = ej(x, P.ease)),
          (e._yEase = M ? eD(ej(!0 === M ? x : M, P.ease)) : 0),
          M &&
            e._yoyo &&
            !e._repeat &&
            ((M = e._yEase), (e._yEase = e._ease), (e._ease = M)),
          (e._from = !j && !!v.runBackwards),
          !j || (O && !v.stagger))
        ) {
          if (
            ((m = (h = z[0] ? tb(z[0]).harness : 0) && v[h.prop]),
            (n = tL(v, tf)),
            R &&
              (R._zTime < 0 && R.progress(1),
              r < 0 && E && T && !C
                ? R.render(-1, !0)
                : R.revert(E && A ? tc : tu),
              (R._lazy = 0)),
            w)
          ) {
            if (
              (tB(
                (e._startAt = e6.set(
                  z,
                  tz(
                    {
                      data: "isStart",
                      overwrite: !1,
                      parent: N,
                      immediateRender: !0,
                      lazy: !R && X(S),
                      startAt: null,
                      delay: 0,
                      onUpdate:
                        k &&
                        function () {
                          return em(e, "onUpdate");
                        },
                      stagger: 0,
                    },
                    w,
                  ),
                )),
              ),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              r < 0 && (y || (!T && !C)) && e._startAt.revert(tc),
              T && A && r <= 0 && i <= 0)
            ) {
              r && (e._zTime = r);
              return;
            }
          } else if (E && A && !R)
            if (
              (r && (T = !1),
              (o = tz(
                {
                  overwrite: !1,
                  data: "isFromStart",
                  lazy: T && !R && X(S),
                  immediateRender: T,
                  stagger: 0,
                  parent: N,
                },
                n,
              )),
              m && (o[h.prop] = m),
              tB((e._startAt = e6.set(z, o))),
              (e._startAt._dp = 0),
              (e._startAt._sat = e),
              r < 0 && (y ? e._startAt.revert(tc) : e._startAt.render(-1, !0)),
              (e._zTime = r),
              T)
            ) {
              if (!r) return;
            } else t(e._startAt, 1e-8, 1e-8);
          for (
            s = 0, e._pt = e._ptCache = 0, S = (A && X(S)) || (S && !A);
            s < z.length;
            s++
          ) {
            if (
              ((c = (l = z[s])._gsap || tx(z)[s]._gsap),
              (e._ptLookup[s] = p = {}),
              td[c.id] && tp.length && tO(),
              (d = D === z ? s : D.indexOf(l)),
              h &&
                !1 !== (f = new h()).init(l, m || n, e, d, D) &&
                ((e._pt = a =
                  new rf(e._pt, l, f.name, 0, 1, f.render, f, 0, f.priority)),
                f._props.forEach(function (t) {
                  p[t] = a;
                }),
                f.priority && (u = 1)),
              !h || m)
            )
              for (o in n)
                tm[o] && (f = e0(o, n, e, d, l, D))
                  ? f.priority && (u = 1)
                  : (p[o] = a =
                      eK.call(e, l, o, "get", n[o], d, D, 0, v.stringFilter));
            (e._op && e._op[s] && e.kill(l, e._op[s]),
              L &&
                e._pt &&
                ((eG = e),
                b.killTweensOf(l, p, e.globalTime(r)),
                (g = !e.parent),
                (eG = 0)),
              e._pt && S && (td[c.id] = 1));
          }
          (u && rh(e), e._onInit && e._onInit(e));
        }
        ((e._onUpdate = k),
          (e._initted = (!e._op || e._pt) && !g),
          O && r <= 0 && j.render(1e8, !0, !0));
      },
      e2 = function (t, e, r, i, n, s, o, a) {
        var l,
          u,
          c,
          h,
          f = ((t._pt && t._ptCache) || (t._ptCache = {}))[e];
        if (!f)
          for (
            f = t._ptCache[e] = [], c = t._ptLookup, h = t._targets.length;
            h--;
          ) {
            if ((l = c[h][e]) && l.d && l.d._pt)
              for (l = l.d._pt; l && l.p !== e && l.fp !== e; ) l = l._next;
            if (!l)
              return (
                (eQ = 1),
                (t.vars[e] = "+=0"),
                e1(t, o),
                (eQ = 0),
                a ? to(e + " not eligible for reset") : 1
              );
            f.push(l);
          }
        for (h = f.length; h--; )
          (((l = (u = f[h])._pt || u).s =
            (i || 0 === i) && !n ? i : l.s + (i || 0) + s * l.c),
            (l.c = r - l.s),
            u.e && (u.e = tS(r) + ee(u.e)),
            u.b && (u.b = l.s + ee(u.b)));
      },
      e5 = function (t, e) {
        var r,
          i,
          n,
          s,
          o = t[0] ? tb(t[0]).harness : 0,
          a = o && o.aliases;
        if (!a) return e;
        for (i in ((r = tN({}, e)), a))
          if (i in r)
            for (n = (s = a[i].split(",")).length; n--; ) r[s[n]] = r[i];
        return r;
      },
      e3 = function (t, e, r, i) {
        var n,
          s,
          o = e.ease || i || "power1.inOut";
        if (q(e))
          ((s = r[t] || (r[t] = [])),
            e.forEach(function (t, r) {
              return s.push({ t: (r / (e.length - 1)) * 100, v: t, e: o });
            }));
        else
          for (n in e)
            ((s = r[n] || (r[n] = [])),
              "ease" === n || s.push({ t: parseFloat(t), v: e[n], e: o }));
      },
      e4 = function (t, e, r, i, n) {
        return F(t)
          ? t.call(e, r, i, n)
          : j(t) && ~t.indexOf("random(")
            ? ef(t)
            : t;
      },
      e8 = ty + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      e9 = {};
    tT(e8 + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
      return (e9[t] = 1);
    });
    var e6 = (function (t) {
      function i(r, i, n, s) {
        "number" == typeof i && ((n.duration = i), (i = n), (n = null));
        var o,
          a,
          l,
          u,
          c,
          h,
          f,
          p,
          d = t.call(this, s ? i : tj(i)) || this,
          m = d.vars,
          g = m.duration,
          v = m.delay,
          y = m.immediateRender,
          x = m.stagger,
          w = m.overwrite,
          T = m.keyframes,
          S = m.defaults,
          k = m.scrollTrigger,
          E = m.yoyoEase,
          M = i.parent || b,
          O = (q(r) || U(r) ? I(r[0]) : "length" in i) ? [r] : en(r);
        if (
          ((d._targets = O.length
            ? tx(O)
            : to(
                "GSAP target " + r + " not found. https://gsap.com",
                !C.nullTargetWarn,
              ) || []),
          (d._ptLookup = []),
          (d._overwrite = w),
          T || x || H(g) || H(v))
        ) {
          if (
            ((i = d.vars),
            (o = d.timeline =
              new eH({
                data: "nested",
                defaults: S || {},
                targets: M && "nested" === M.data ? M.vars.targets : O,
              })).kill(),
            (o.parent = o._dp = e(d)),
            (o._start = 0),
            x || H(g) || H(v))
          ) {
            if (((u = O.length), (f = x && ea(x)), B(x)))
              for (c in x) ~e8.indexOf(c) && (p || (p = {}), (p[c] = x[c]));
            for (a = 0; a < u; a++)
              (((l = tL(i, e9)).stagger = 0),
                E && (l.yoyoEase = E),
                p && tN(l, p),
                (h = O[a]),
                (l.duration = +e4(g, e(d), a, h, O)),
                (l.delay = (+e4(v, e(d), a, h, O) || 0) - d._delay),
                !x &&
                  1 === u &&
                  l.delay &&
                  ((d._delay = v = l.delay), (d._start += v), (l.delay = 0)),
                o.to(h, l, f ? f(a, h, O) : 0),
                (o._ease = eC.none));
            o.duration() ? (g = v = 0) : (d.timeline = 0);
          } else if (T) {
            (tj(tz(o.vars.defaults, { ease: "none" })),
              (o._ease = ej(T.ease || i.ease || "none")));
            var P,
              A,
              R,
              z = 0;
            if (q(T))
              (T.forEach(function (t) {
                return o.to(O, t, ">");
              }),
                o.duration());
            else {
              for (c in ((l = {}), T))
                "ease" === c || "easeEach" === c || e3(c, T[c], l, T.easeEach);
              for (c in l)
                for (
                  a = 0,
                    P = l[c].sort(function (t, e) {
                      return t.t - e.t;
                    }),
                    z = 0;
                  a < P.length;
                  a++
                )
                  (((R = {
                    ease: (A = P[a]).e,
                    duration: ((A.t - (a ? P[a - 1].t : 0)) / 100) * g,
                  })[c] = A.v),
                    o.to(O, R, z),
                    (z += R.duration));
              o.duration() < g && o.to({}, { duration: g - o.duration() });
            }
          }
          g || d.duration((g = o.duration()));
        } else d.timeline = 0;
        return (
          !0 !== w || _ || ((eG = e(d)), b.killTweensOf(O), (eG = 0)),
          tZ(M, e(d), n),
          i.reversed && d.reverse(),
          i.paused && d.paused(!0),
          (y ||
            (!g &&
              !T &&
              d._start === tk(M._time) &&
              X(y) &&
              (function t(e) {
                return !e || (e._ts && t(e.parent));
              })(e(d)) &&
              "nested" !== M.data)) &&
            ((d._tTime = -1e-8), d.render(Math.max(0, -v) || 0)),
          k && tK(e(d), k),
          d
        );
      }
      r(i, t);
      var n = i.prototype;
      return (
        (n.render = function (t, e, r) {
          var i,
            n,
            s,
            o,
            a,
            l,
            u,
            c,
            h,
            f = this._time,
            p = this._tDur,
            d = this._dur,
            m = t < 0,
            g = t > p - 1e-8 && !m ? p : t < 1e-8 ? 0 : t;
          if (d) {
            if (
              g !== this._tTime ||
              !t ||
              r ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 !== m) ||
              this._lazy
            ) {
              if (((i = g), (c = this.timeline), this._repeat)) {
                if (((o = d + this._rDelay), this._repeat < -1 && m))
                  return this.totalTime(100 * o + t, e, r);
                if (
                  ((i = tk(g % o)),
                  g === p
                    ? ((s = this._repeat), (i = d))
                    : (s = ~~(a = tk(g / o))) && s === a
                      ? ((i = d), s--)
                      : i > d && (i = d),
                  (l = this._yoyo && 1 & s) && ((h = this._yEase), (i = d - i)),
                  (a = tq(this._tTime, o)),
                  i === f && !r && this._initted && s === a)
                )
                  return ((this._tTime = g), this);
                s !== a &&
                  (c && this._yEase && eL(c, l),
                  this.vars.repeatRefresh &&
                    !l &&
                    !this._lock &&
                    i !== o &&
                    this._initted &&
                    ((this._lock = r = 1),
                    (this.render(tk(o * s), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (tJ(this, m ? t : i, r, e, g))
                  return ((this._tTime = 0), this);
                if (
                  f !== this._time &&
                  !(r && this.vars.repeatRefresh && s !== a)
                )
                  return this;
                if (d !== this._dur) return this.render(t, e, r);
              }
              if (
                ((this._tTime = g),
                (this._time = i),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = u = (h || this._ease)(i / d)),
                this._from && (this.ratio = u = 1 - u),
                !f && g && !e && !a && (em(this, "onStart"), this._tTime !== g))
              )
                return this;
              for (n = this._pt; n; ) (n.r(u, n.d), (n = n._next));
              ((c &&
                c.render(t < 0 ? t : c._dur * c._ease(i / this._dur), e, r)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (m && tH(this, t, e, r), em(this, "onUpdate")),
                this._repeat &&
                  s !== a &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  em(this, "onRepeat"),
                (g === this._tDur || !g) &&
                  this._tTime === g &&
                  (m && !this._onUpdate && tH(this, t, !0, !0),
                  (t || !d) &&
                    ((g === this._tDur && this._ts > 0) ||
                      (!g && this._ts < 0)) &&
                    tB(this, 1),
                  !e &&
                    !(m && !f) &&
                    (g || f || l) &&
                    (em(this, g === p ? "onComplete" : "onReverseComplete", !0),
                    this._prom &&
                      !(g < p && this.timeScale() > 0) &&
                      this._prom())));
            }
          } else t2(this, t, e, r);
          return this;
        }),
        (n.targets = function () {
          return this._targets;
        }),
        (n.invalidate = function (e) {
          return (
            (e && this.vars.runBackwards) || (this._startAt = 0),
            (this._pt =
              this._op =
              this._onUpdate =
              this._lazy =
              this.ratio =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(e),
            t.prototype.invalidate.call(this, e)
          );
        }),
        (n.resetTo = function (t, e, r, i, n) {
          (O || eM.wake(), this._ts || this.play());
          var s = Math.min(
            this._dur,
            (this._dp._time - this._start) * this._ts,
          );
          return (this._initted || e1(this, s),
          e2(this, t, e, r, i, this._ease(s / this._dur), s, n))
            ? this.resetTo(t, e, r, i, 1)
            : (tG(this, 0),
              this.parent ||
                tI(
                  this._dp,
                  this,
                  "_first",
                  "_last",
                  this._dp._sort ? "_start" : 0,
                ),
              this.render(0));
        }),
        (n.kill = function (t, e) {
          if ((void 0 === e && (e = "all"), !t && (!e || "all" === e)))
            return (
              (this._lazy = this._pt = 0),
              this.parent
                ? eg(this)
                : this.scrollTrigger && this.scrollTrigger.kill(!!y),
              this
            );
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, eG && !0 !== eG.vars.overwrite)
                ._first || eg(this),
              this.parent &&
                r !== this.timeline.totalDuration() &&
                t3(this, (this._dur * this.timeline._tDur) / r, 0, 1),
              this
            );
          }
          var i,
            n,
            s,
            o,
            a,
            l,
            u,
            c = this._targets,
            h = t ? en(t) : c,
            f = this._ptLookup,
            p = this._pt;
          if ((!e || "all" === e) && tF(c, h))
            return ("all" === e && (this._pt = 0), eg(this));
          for (
            i = this._op = this._op || [],
              "all" !== e &&
                (j(e) &&
                  ((a = {}),
                  tT(e, function (t) {
                    return (a[t] = 1);
                  }),
                  (e = a)),
                (e = e5(c, e))),
              u = c.length;
            u--;
          )
            if (~h.indexOf(c[u]))
              for (a in ((n = f[u]),
              "all" === e
                ? ((i[u] = e), (o = n), (s = {}))
                : ((s = i[u] = i[u] || {}), (o = e)),
              o))
                ((l = n && n[a]) &&
                  (("kill" in l.d && !0 !== l.d.kill(a)) || tY(this, l, "_pt"),
                  delete n[a]),
                  "all" !== s && (s[a] = 1));
          return (this._initted && !this._pt && p && eg(this), this);
        }),
        (i.to = function (t, e) {
          return new i(t, e, arguments[2]);
        }),
        (i.from = function (t, e) {
          return t6(1, arguments);
        }),
        (i.delayedCall = function (t, e, r, n) {
          return new i(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: n,
          });
        }),
        (i.fromTo = function (t, e, r) {
          return t6(2, arguments);
        }),
        (i.set = function (t, e) {
          return (
            (e.duration = 0),
            e.repeatDelay || (e.repeat = 0),
            new i(t, e)
          );
        }),
        (i.killTweensOf = function (t, e, r) {
          return b.killTweensOf(t, e, r);
        }),
        i
      );
    })(eW);
    (tz(e6.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0,
    }),
      tT("staggerTo,staggerFrom,staggerFromTo", function (t) {
        e6[t] = function () {
          var e = new eH(),
            r = er.call(arguments, 0);
          return (
            r.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
            e[t].apply(e, r)
          );
        };
      }));
    var e7 = function (t, e, r) {
        return (t[e] = r);
      },
      rt = function (t, e, r) {
        return t[e](r);
      },
      re = function (t, e, r, i) {
        return t[e](i.fp, r);
      },
      rr = function (t, e, r) {
        return t.setAttribute(e, r);
      },
      ri = function (t, e) {
        return F(t[e]) ? rt : Y(t[e]) && t.setAttribute ? rr : e7;
      },
      rn = function (t, e) {
        return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
      },
      rs = function (t, e) {
        return e.set(e.t, e.p, !!(e.s + e.c * t), e);
      },
      ro = function (t, e) {
        var r = e._pt,
          i = "";
        if (!t && e.b) i = e.b;
        else if (1 === t && e.e) i = e.e;
        else {
          for (; r; )
            ((i =
              r.p +
              (r.m
                ? r.m(r.s + r.c * t)
                : Math.round((r.s + r.c * t) * 1e4) / 1e4) +
              i),
              (r = r._next));
          i += e.c;
        }
        e.set(e.t, e.p, i, e);
      },
      ra = function (t, e) {
        for (var r = e._pt; r; ) (r.r(t, r.d), (r = r._next));
      },
      rl = function (t, e, r, i) {
        for (var n, s = this._pt; s; )
          ((n = s._next), s.p === i && s.modifier(t, e, r), (s = n));
      },
      ru = function (t) {
        for (var e, r, i = this._pt; i; )
          ((r = i._next),
            (i.p !== t || i.op) && i.op !== t
              ? i.dep || (e = 1)
              : tY(this, i, "_pt"),
            (i = r));
        return !e;
      },
      rc = function (t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
      },
      rh = function (t) {
        for (var e, r, i, n, s = t._pt; s; ) {
          for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
          ((s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
            (s._next = r) ? (r._prev = s) : (n = s),
            (s = e));
        }
        t._pt = i;
      },
      rf = (function () {
        function t(t, e, r, i, n, s, o, a, l) {
          ((this.t = e),
            (this.s = i),
            (this.c = n),
            (this.p = r),
            (this.r = s || rn),
            (this.d = o || this),
            (this.set = a || e7),
            (this.pr = l || 0),
            (this._next = t),
            t && (t._prev = this));
        }
        return (
          (t.prototype.modifier = function (t, e, r) {
            ((this.mSet = this.mSet || this.set),
              (this.set = rc),
              (this.m = t),
              (this.mt = r),
              (this.tween = e));
          }),
          t
        );
      })();
    (tT(
      ty +
        "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
      function (t) {
        return (tf[t] = 1);
      },
    ),
      (tr.TweenMax = tr.TweenLite = e6),
      (tr.TimelineLite = tr.TimelineMax = eH),
      (b = new eH({
        sortChildren: !1,
        defaults: P,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0,
      })),
      (C.stringFilter = eE));
    var rp = [],
      rd = {},
      rm = [],
      rg = 0,
      rv = 0,
      r_ = function (t) {
        return (rd[t] || rm).map(function (t) {
          return t();
        });
      },
      ry = function () {
        var t = Date.now(),
          e = [];
        t - rg > 2 &&
          (r_("matchMediaInit"),
          rp.forEach(function (t) {
            var r,
              i,
              n,
              s,
              o = t.queries,
              a = t.conditions;
            for (i in o)
              ((r = w.matchMedia(o[i]).matches) && (n = 1),
                r !== a[i] && ((a[i] = r), (s = 1)));
            s && (t.revert(), n && e.push(t));
          }),
          r_("matchMediaRevert"),
          e.forEach(function (t) {
            return t.onMatch(t, function (e) {
              return t.add(null, e);
            });
          }),
          (rg = t),
          r_("matchMedia"));
      },
      rx = (function () {
        function t(t, e) {
          ((this.selector = e && es(e)),
            (this.data = []),
            (this._r = []),
            (this.isReverted = !1),
            (this.id = rv++),
            t && this.add(t));
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, r) {
            F(t) && ((r = e), (e = t), (t = F));
            var i = this,
              n = function () {
                var t,
                  n = x,
                  s = i.selector;
                return (
                  n && n !== i && n.data.push(i),
                  r && (i.selector = es(r)),
                  (x = i),
                  (t = e.apply(i, arguments)),
                  F(t) && i._r.push(t),
                  (x = n),
                  (i.selector = s),
                  (i.isReverted = !1),
                  t
                );
              };
            return (
              (i.last = n),
              t === F
                ? n(i, function (t) {
                    return i.add(null, t);
                  })
                : t
                  ? (i[t] = n)
                  : n
            );
          }),
          (e.ignore = function (t) {
            var e = x;
            ((x = null), t(this), (x = e));
          }),
          (e.getTweens = function () {
            var e = [];
            return (
              this.data.forEach(function (r) {
                return r instanceof t
                  ? e.push.apply(e, r.getTweens())
                  : r instanceof e6 &&
                      !(r.parent && "nested" === r.parent.data) &&
                      e.push(r);
              }),
              e
            );
          }),
          (e.clear = function () {
            this._r.length = this.data.length = 0;
          }),
          (e.kill = function (t, e) {
            var r = this;
            if (t) {
              for (var i, n = r.getTweens(), s = r.data.length; s--; )
                "isFlip" === (i = r.data[s]).data &&
                  (i.revert(),
                  i.getChildren(!0, !0, !1).forEach(function (t) {
                    return n.splice(n.indexOf(t), 1);
                  }));
              for (
                n
                  .map(function (t) {
                    return {
                      g:
                        t._dur ||
                        t._delay ||
                        (t._sat && !t._sat.vars.immediateRender)
                          ? t.globalTime(0)
                          : -1 / 0,
                      t: t,
                    };
                  })
                  .sort(function (t, e) {
                    return e.g - t.g || -1 / 0;
                  })
                  .forEach(function (e) {
                    return e.t.revert(t);
                  }),
                  s = r.data.length;
                s--;
              )
                (i = r.data[s]) instanceof eH
                  ? "nested" !== i.data &&
                    (i.scrollTrigger && i.scrollTrigger.revert(), i.kill())
                  : i instanceof e6 || !i.revert || i.revert(t);
              (r._r.forEach(function (e) {
                return e(t, r);
              }),
                (r.isReverted = !0));
            } else
              this.data.forEach(function (t) {
                return t.kill && t.kill();
              });
            if ((this.clear(), e))
              for (var o = rp.length; o--; )
                rp[o].id === this.id && rp.splice(o, 1);
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          t
        );
      })(),
      rb = (function () {
        function t(t) {
          ((this.contexts = []), (this.scope = t), x && x.data.push(this));
        }
        var e = t.prototype;
        return (
          (e.add = function (t, e, r) {
            B(t) || (t = { matches: t });
            var i,
              n,
              s,
              o = new rx(0, r || this.scope),
              a = (o.conditions = {});
            for (n in (x && !o.selector && (o.selector = x.selector),
            this.contexts.push(o),
            (e = o.add("onMatch", e)),
            (o.queries = t),
            t))
              "all" === n
                ? (s = 1)
                : (i = w.matchMedia(t[n])) &&
                  (0 > rp.indexOf(o) && rp.push(o),
                  (a[n] = i.matches) && (s = 1),
                  i.addListener
                    ? i.addListener(ry)
                    : i.addEventListener("change", ry));
            return (
              s &&
                e(o, function (t) {
                  return o.add(null, t);
                }),
              this
            );
          }),
          (e.revert = function (t) {
            this.kill(t || {});
          }),
          (e.kill = function (t) {
            this.contexts.forEach(function (e) {
              return e.kill(t, !0);
            });
          }),
          t
        );
      })(),
      rw = {
        registerPlugin: function () {
          for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
            e[r] = arguments[r];
          e.forEach(function (t) {
            return e_(t);
          });
        },
        timeline: function (t) {
          return new eH(t);
        },
        getTweensOf: function (t, e) {
          return b.getTweensOf(t, e);
        },
        getProperty: function (t, e, r, i) {
          j(t) && (t = en(t)[0]);
          var n = tb(t || {}).get,
            s = r ? tR : tA;
          return (
            "native" === r && (r = ""),
            t
              ? e
                ? s(((tm[e] && tm[e].get) || n)(t, e, r, i))
                : function (e, r, i) {
                    return s(((tm[e] && tm[e].get) || n)(t, e, r, i));
                  }
              : t
          );
        },
        quickSetter: function (t, e, r) {
          if ((t = en(t)).length > 1) {
            var i = t.map(function (t) {
                return rE.quickSetter(t, e, r);
              }),
              n = i.length;
            return function (t) {
              for (var e = n; e--; ) i[e](t);
            };
          }
          t = t[0] || {};
          var s = tm[e],
            o = tb(t),
            a = (o.harness && (o.harness.aliases || {})[e]) || e,
            l = s
              ? function (e) {
                  var i = new s();
                  ((M._pt = 0),
                    i.init(t, r ? e + r : e, M, 0, [t]),
                    i.render(1, i),
                    M._pt && ra(1, M));
                }
              : o.set(t, a);
          return s
            ? l
            : function (e) {
                return l(t, a, r ? e + r : e, o, 1);
              };
        },
        quickTo: function (t, e, r) {
          var i,
            n = rE.to(
              t,
              tz(
                (((i = {})[e] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
                r || {},
              ),
            ),
            s = function (t, r, i) {
              return n.resetTo(e, t, r, i);
            };
          return ((s.tween = n), s);
        },
        isTweening: function (t) {
          return b.getTweensOf(t, !0).length > 0;
        },
        defaults: function (t) {
          return (t && t.ease && (t.ease = ej(t.ease, P.ease)), tD(P, t || {}));
        },
        config: function (t) {
          return tD(C, t || {});
        },
        registerEffect: function (t) {
          var e = t.name,
            r = t.effect,
            i = t.plugins,
            n = t.defaults,
            s = t.extendTimeline;
          ((i || "").split(",").forEach(function (t) {
            return (
              t &&
              !tm[t] &&
              !tr[t] &&
              to(e + " effect requires " + t + " plugin.")
            );
          }),
            (tg[e] = function (t, e, i) {
              return r(en(t), tz(e || {}, n), i);
            }),
            s &&
              (eH.prototype[e] = function (t, r, i) {
                return this.add(tg[e](t, B(r) ? r : (i = r) && {}, this), i);
              }));
        },
        registerEase: function (t, e) {
          eC[t] = ej(e);
        },
        parseEase: function (t, e) {
          return arguments.length ? ej(t, e) : eC;
        },
        getById: function (t) {
          return b.getById(t);
        },
        exportRoot: function (t, e) {
          void 0 === t && (t = {});
          var r,
            i,
            n = new eH(t);
          for (
            n.smoothChildTiming = X(t.smoothChildTiming),
              b.remove(n),
              n._dp = 0,
              n._time = n._tTime = b._time,
              r = b._first;
            r;
          )
            ((i = r._next),
              (e ||
                !(
                  !r._dur &&
                  r instanceof e6 &&
                  r.vars.onComplete === r._targets[0]
                )) &&
                tZ(n, r, r._start - r._delay),
              (r = i));
          return (tZ(b, n, 0), n);
        },
        context: function (t, e) {
          return t ? new rx(t, e) : x;
        },
        matchMedia: function (t) {
          return new rb(t);
        },
        matchMediaRefresh: function () {
          return (
            rp.forEach(function (t) {
              var e,
                r,
                i = t.conditions;
              for (r in i) i[r] && ((i[r] = !1), (e = 1));
              e && t.revert();
            }) || ry()
          );
        },
        addEventListener: function (t, e) {
          var r = rd[t] || (rd[t] = []);
          ~r.indexOf(e) || r.push(e);
        },
        removeEventListener: function (t, e) {
          var r = rd[t],
            i = r && r.indexOf(e);
          i >= 0 && r.splice(i, 1);
        },
        utils: {
          wrap: function t(e, r, i) {
            var n = r - e;
            return q(e)
              ? eh(e, t(0, e.length), r)
              : t7(i, function (t) {
                  return ((n + ((t - e) % n)) % n) + e;
                });
          },
          wrapYoyo: function t(e, r, i) {
            var n = r - e,
              s = 2 * n;
            return q(e)
              ? eh(e, t(0, e.length - 1), r)
              : t7(i, function (t) {
                  return (
                    (t = (s + ((t - e) % s)) % s || 0),
                    e + (t > n ? s - t : t)
                  );
                });
          },
          distribute: ea,
          random: ec,
          snap: eu,
          normalize: function (t, e, r) {
            return ep(t, e, 0, 1, r);
          },
          getUnit: ee,
          clamp: function (t, e, r) {
            return t7(r, function (r) {
              return et(t, e, r);
            });
          },
          splitColor: eb,
          toArray: en,
          selector: es,
          mapRange: ep,
          pipe: function () {
            for (var t = arguments.length, e = Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          unitize: function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || ee(r));
            };
          },
          interpolate: function t(e, r, i, n) {
            var s = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!s) {
              var o,
                a,
                l,
                u,
                c,
                h = j(e),
                f = {};
              if ((!0 === i && (n = 1) && (i = null), h))
                ((e = { p: e }), (r = { p: r }));
              else if (q(e) && !q(r)) {
                for (a = 1, l = [], c = (u = e.length) - 2; a < u; a++)
                  l.push(t(e[a - 1], e[a]));
                (u--,
                  (s = function (t) {
                    var e = Math.min(c, ~~(t *= u));
                    return l[e](t - e);
                  }),
                  (i = r));
              } else n || (e = tN(q(e) ? [] : {}, e));
              if (!l) {
                for (o in r) eK.call(f, e, o, "get", r[o]);
                s = function (t) {
                  return ra(t, f) || (h ? e.p : e);
                };
              }
            }
            return t7(i, s);
          },
          shuffle: eo,
        },
        install: tn,
        effects: tg,
        ticker: eM,
        updateRoot: eH.updateRoot,
        plugins: tm,
        globalTimeline: b,
        core: {
          PropTween: rf,
          globals: ta,
          Tween: e6,
          Timeline: eH,
          Animation: eW,
          getCache: tb,
          _removeLinkedListItem: tY,
          reverting: function () {
            return y;
          },
          context: function (t) {
            return (t && x && (x.data.push(t), (t._ctx = x)), x);
          },
          suppressOverwrites: function (t) {
            return (_ = t);
          },
        },
      };
    (tT("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return (rw[t] = e6[t]);
    }),
      eM.add(eH.updateRoot),
      (M = rw.to({}, { duration: 0 })));
    var rT = function (t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
          r = r._next;
        return r;
      },
      rS = function (t, e) {
        var r,
          i,
          n,
          s = t._targets;
        for (r in e)
          for (i = s.length; i--; )
            (n = t._ptLookup[i][r]) &&
              (n = n.d) &&
              (n._pt && (n = rT(n, r)),
              n && n.modifier && n.modifier(e[r], t, s[i], r));
      },
      rk = function (t, e) {
        return {
          name: t,
          headless: 1,
          rawVars: 1,
          init: function (t, r, i) {
            i._onInit = function (t) {
              var i, n;
              if (
                (j(r) &&
                  ((i = {}),
                  tT(r, function (t) {
                    return (i[t] = 1);
                  }),
                  (r = i)),
                e)
              ) {
                for (n in ((i = {}), r)) i[n] = e(r[n]);
                r = i;
              }
              rS(t, r);
            };
          },
        };
      },
      rE =
        rw.registerPlugin(
          {
            name: "attr",
            init: function (t, e, r, i, n) {
              var s, o, a;
              for (s in ((this.tween = r), e))
                ((a = t.getAttribute(s) || ""),
                  ((o = this.add(
                    t,
                    "setAttribute",
                    (a || 0) + "",
                    e[s],
                    i,
                    n,
                    0,
                    0,
                    s,
                  )).op = s),
                  (o.b = a),
                  this._props.push(s));
            },
            render: function (t, e) {
              for (var r = e._pt; r; )
                (y ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), (r = r._next));
            },
          },
          {
            name: "endArray",
            headless: 1,
            init: function (t, e) {
              for (var r = e.length; r--; )
                this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
            },
          },
          rk("roundProps", el),
          rk("modifiers"),
          rk("snap", eu),
        ) || rw;
    ((e6.version = eH.version = rE.version = "3.14.2"),
      (k = 1),
      W() && eO(),
      eC.Power0,
      eC.Power1,
      eC.Power2,
      eC.Power3,
      eC.Power4,
      eC.Linear,
      eC.Quad,
      eC.Cubic,
      eC.Quart,
      eC.Quint,
      eC.Strong,
      eC.Elastic,
      eC.Back,
      eC.SteppedEase,
      eC.Bounce,
      eC.Sine,
      eC.Expo,
      eC.Circ);
    var rM,
      rO,
      rC,
      rP,
      rA,
      rR,
      rz,
      rN = {},
      rD = 180 / Math.PI,
      rL = Math.PI / 180,
      rj = Math.atan2,
      rF = /([A-Z])/g,
      rI = /(left|right|width|margin|padding|x)/i,
      rY = /[\s,\(]\S/,
      rB = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity",
      },
      rX = function (t, e) {
        return e.set(
          e.t,
          e.p,
          Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
          e,
        );
      },
      rW = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
          e,
        );
      },
      rH = function (t, e) {
        return e.set(
          e.t,
          e.p,
          t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
          e,
        );
      },
      rU = function (t, e) {
        return e.set(
          e.t,
          e.p,
          1 === t
            ? e.e
            : t
              ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u
              : e.b,
          e,
        );
      },
      rq = function (t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
      },
      rV = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e);
      },
      r$ = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
      },
      rG = function (t, e, r) {
        return (t.style[e] = r);
      },
      rQ = function (t, e, r) {
        return t.style.setProperty(e, r);
      },
      rZ = function (t, e, r) {
        return (t._gsap[e] = r);
      },
      rK = function (t, e, r) {
        return (t._gsap.scaleX = t._gsap.scaleY = r);
      },
      rJ = function (t, e, r, i, n) {
        var s = t._gsap;
        ((s.scaleX = s.scaleY = r), s.renderTransform(n, s));
      },
      r0 = function (t, e, r, i, n) {
        var s = t._gsap;
        ((s[e] = r), s.renderTransform(n, s));
      },
      r1 = "transform",
      r2 = r1 + "Origin",
      r5 = function t(e, r) {
        var i = this,
          n = this.target,
          s = n.style,
          o = n._gsap;
        if (e in rN && s) {
          if (((this.tfm = this.tfm || {}), "transform" === e))
            return rB.transform.split(",").forEach(function (e) {
              return t.call(i, e, r);
            });
          if (
            (~(e = rB[e] || e).indexOf(",")
              ? e.split(",").forEach(function (t) {
                  return (i.tfm[t] = ip(n, t));
                })
              : (this.tfm[e] = o.x ? o[e] : ip(n, e)),
            e === r2 && (this.tfm.zOrigin = o.zOrigin),
            this.props.indexOf(r1) >= 0)
          )
            return;
          (o.svg &&
            ((this.svgo = n.getAttribute("data-svg-origin")),
            this.props.push(r2, r, "")),
            (e = r1));
        }
        (s || r) && this.props.push(e, r, s[e]);
      },
      r3 = function (t) {
        t.translate &&
          (t.removeProperty("translate"),
          t.removeProperty("scale"),
          t.removeProperty("rotate"));
      },
      r4 = function () {
        var t,
          e,
          r = this.props,
          i = this.target,
          n = i.style,
          s = i._gsap;
        for (t = 0; t < r.length; t += 3)
          r[t + 1]
            ? 2 === r[t + 1]
              ? i[r[t]](r[t + 2])
              : (i[r[t]] = r[t + 2])
            : r[t + 2]
              ? (n[r[t]] = r[t + 2])
              : n.removeProperty(
                  "--" === r[t].substr(0, 2)
                    ? r[t]
                    : r[t].replace(rF, "-$1").toLowerCase(),
                );
        if (this.tfm) {
          for (e in this.tfm) s[e] = this.tfm[e];
          (s.svg &&
            (s.renderTransform(),
            i.setAttribute("data-svg-origin", this.svgo || "")),
            ((t = rR()) && t.isStart) ||
              n[r1] ||
              (r3(n),
              s.zOrigin &&
                n[r2] &&
                ((n[r2] += " " + s.zOrigin + "px"),
                (s.zOrigin = 0),
                s.renderTransform()),
              (s.uncache = 1)));
        }
      },
      r8 = function (t, e) {
        var r = { target: t, props: [], revert: r4, save: r5 };
        return (
          t._gsap || rE.core.getCache(t),
          e &&
            t.style &&
            t.nodeType &&
            e.split(",").forEach(function (t) {
              return r.save(t);
            }),
          r
        );
      },
      r9 = function (t, e) {
        var r = rM.createElementNS
          ? rM.createElementNS(
              (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
              t,
            )
          : rM.createElement(t);
        return r && r.style ? r : rM.createElement(t);
      },
      r6 = function t(e, r, i) {
        var n = getComputedStyle(e);
        return (
          n[r] ||
          n.getPropertyValue(r.replace(rF, "-$1").toLowerCase()) ||
          n.getPropertyValue(r) ||
          (!i && t(e, it(r) || r, 1)) ||
          ""
        );
      },
      r7 = "O,Moz,ms,Ms,Webkit".split(","),
      it = function (t, e, r) {
        var i = (e || rP).style,
          n = 5;
        if (t in i && !r) return t;
        for (
          t = t.charAt(0).toUpperCase() + t.substr(1);
          n-- && !(r7[n] + t in i);
        );
        return n < 0 ? null : (3 === n ? "ms" : n >= 0 ? r7[n] : "") + t;
      },
      ie = function () {
        "u" > typeof window &&
          window.document &&
          ((rO = (rM = window.document).documentElement),
          (rP = r9("div") || { style: {} }),
          r9("div"),
          (r2 = (r1 = it(r1)) + "Origin"),
          (rP.style.cssText =
            "border-width:0;line-height:0;position:absolute;padding:0"),
          (rz = !!it("perspective")),
          (rR = rE.core.reverting),
          (rC = 1));
      },
      ir = function (t) {
        var e,
          r = t.ownerSVGElement,
          i = r9(
            "svg",
            (r && r.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
          ),
          n = t.cloneNode(!0);
        ((n.style.display = "block"), i.appendChild(n), rO.appendChild(i));
        try {
          e = n.getBBox();
        } catch (t) {}
        return (i.removeChild(n), rO.removeChild(i), e);
      },
      ii = function (t, e) {
        for (var r = e.length; r--; )
          if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
      },
      is = function (t) {
        var e, r;
        try {
          e = t.getBBox();
        } catch (i) {
          ((e = ir(t)), (r = 1));
        }
        return (
          (e && (e.width || e.height)) || r || (e = ir(t)),
          !e || e.width || e.x || e.y
            ? e
            : {
                x: +ii(t, ["x", "cx", "x1"]) || 0,
                y: +ii(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0,
              }
        );
      },
      io = function (t) {
        return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && is(t));
      },
      ia = function (t, e) {
        if (e) {
          var r,
            i = t.style;
          (e in rN && e !== r2 && (e = r1),
            i.removeProperty
              ? (("ms" === (r = e.substr(0, 2)) ||
                  "webkit" === e.substr(0, 6)) &&
                  (e = "-" + e),
                i.removeProperty(
                  "--" === r ? e : e.replace(rF, "-$1").toLowerCase(),
                ))
              : i.removeAttribute(e));
        }
      },
      il = function (t, e, r, i, n, s) {
        var o = new rf(t._pt, e, r, 0, 1, s ? r$ : rV);
        return ((t._pt = o), (o.b = i), (o.e = n), t._props.push(r), o);
      },
      iu = { deg: 1, rad: 1, turn: 1 },
      ic = { grid: 1, flex: 1 },
      ih = function t(e, r, i, n) {
        var s,
          o,
          a,
          l,
          u = parseFloat(i) || 0,
          c = (i + "").trim().substr((u + "").length) || "px",
          h = rP.style,
          f = rI.test(r),
          p = "svg" === e.tagName.toLowerCase(),
          d = (p ? "client" : "offset") + (f ? "Width" : "Height"),
          m = "px" === n,
          g = "%" === n;
        if (n === c || !u || iu[n] || iu[c]) return u;
        if (
          ("px" === c || m || (u = t(e, r, i, "px")),
          (l = e.getCTM && io(e)),
          (g || "%" === c) && (rN[r] || ~r.indexOf("adius")))
        )
          return (
            (s = l ? e.getBBox()[f ? "width" : "height"] : e[d]),
            tS(g ? (u / s) * 100 : (u / 100) * s)
          );
        if (
          ((h[f ? "width" : "height"] = 100 + (m ? c : n)),
          (o =
            ("rem" !== n && ~r.indexOf("adius")) ||
            ("em" === n && e.appendChild && !p)
              ? e
              : e.parentNode),
          l && (o = (e.ownerSVGElement || {}).parentNode),
          (o && o !== rM && o.appendChild) || (o = rM.body),
          (a = o._gsap) &&
            g &&
            a.width &&
            f &&
            a.time === eM.time &&
            !a.uncache)
        )
          return tS((u / a.width) * 100);
        if (g && ("height" === r || "width" === r)) {
          var v = e.style[r];
          ((e.style[r] = 100 + n), (s = e[d]), v ? (e.style[r] = v) : ia(e, r));
        } else
          ((g || "%" === c) &&
            !ic[r6(o, "display")] &&
            (h.position = r6(e, "position")),
            o === e && (h.position = "static"),
            o.appendChild(rP),
            (s = rP[d]),
            o.removeChild(rP),
            (h.position = "absolute"));
        return (
          f && g && (((a = tb(o)).time = eM.time), (a.width = o[d])),
          tS(m ? (s * u) / 100 : s && u ? (100 / s) * u : 0)
        );
      },
      ip = function (t, e, r, i) {
        var n;
        return (
          rC || ie(),
          e in rB &&
            "transform" !== e &&
            ~(e = rB[e]).indexOf(",") &&
            (e = e.split(",")[0]),
          rN[e] && "transform" !== e
            ? ((n = ik(t, i)),
              (n =
                "transformOrigin" !== e
                  ? n[e]
                  : n.svg
                    ? n.origin
                    : iE(r6(t, r2)) + " " + n.zOrigin + "px"))
            : (!(n = t.style[e]) ||
                "auto" === n ||
                i ||
                ~(n + "").indexOf("calc(")) &&
              (n =
                (i_[e] && i_[e](t, e, r)) ||
                r6(t, e) ||
                tw(t, e) ||
                +("opacity" === e)),
          r && !~(n + "").trim().indexOf(" ") ? ih(t, e, n, r) + r : n
        );
      },
      id = function (t, e, r, i) {
        if (!r || "none" === r) {
          var n = it(e, t, 1),
            s = n && r6(t, n, 1);
          s && s !== r
            ? ((e = n), (r = s))
            : "borderColor" === e && (r = r6(t, "borderTopColor"));
        }
        var o,
          a,
          l,
          u,
          c,
          h,
          f,
          p,
          d,
          m,
          g,
          v = new rf(this._pt, t.style, e, 0, 1, ro),
          _ = 0,
          y = 0;
        if (
          ((v.b = r),
          (v.e = i),
          (r += ""),
          "var(--" === (i += "").substring(0, 6) &&
            (i = r6(t, i.substring(4, i.indexOf(")")))),
          "auto" === i &&
            ((h = t.style[e]),
            (t.style[e] = i),
            (i = r6(t, e) || i),
            h ? (t.style[e] = h) : ia(t, e)),
          eE((o = [r, i])),
          (r = o[0]),
          (i = o[1]),
          (l = r.match(Z) || []),
          (i.match(Z) || []).length)
        ) {
          for (; (a = Z.exec(i)); )
            ((f = a[0]),
              (d = i.substring(_, a.index)),
              c
                ? (c = (c + 1) % 5)
                : ("rgba(" === d.substr(-5) || "hsla(" === d.substr(-5)) &&
                  (c = 1),
              f !== (h = l[y++] || "") &&
                ((u = parseFloat(h) || 0),
                (g = h.substr((u + "").length)),
                "=" === f.charAt(1) && (f = tE(u, f) + g),
                (p = parseFloat(f)),
                (m = f.substr((p + "").length)),
                (_ = Z.lastIndex - m.length),
                m ||
                  ((m = m || C.units[e] || g),
                  _ === i.length && ((i += m), (v.e += m))),
                g !== m && (u = ih(t, e, h, m) || 0),
                (v._pt = {
                  _next: v._pt,
                  p: d || 1 === y ? d : ",",
                  s: u,
                  c: p - u,
                  m: (c && c < 4) || "zIndex" === e ? Math.round : 0,
                })));
          v.c = _ < i.length ? i.substring(_, i.length) : "";
        } else v.r = "display" === e && "none" === i ? r$ : rV;
        return (J.test(i) && (v.e = 0), (this._pt = v), v);
      },
      im = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%",
      },
      ig = function (t) {
        var e = t.split(" "),
          r = e[0],
          i = e[1] || "50%";
        return (
          ("top" === r || "bottom" === r || "left" === i || "right" === i) &&
            ((t = r), (r = i), (i = t)),
          (e[0] = im[r] || r),
          (e[1] = im[i] || i),
          e.join(" ")
        );
      },
      iv = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
          var r,
            i,
            n,
            s = e.t,
            o = s.style,
            a = e.u,
            l = s._gsap;
          if ("all" === a || !0 === a) ((o.cssText = ""), (i = 1));
          else
            for (n = (a = a.split(",")).length; --n > -1; )
              (rN[(r = a[n])] &&
                ((i = 1), (r = "transformOrigin" === r ? r2 : r1)),
                ia(s, r));
          i &&
            (ia(s, r1),
            l &&
              (l.svg && s.removeAttribute("transform"),
              (o.scale = o.rotate = o.translate = "none"),
              ik(s, 1),
              (l.uncache = 1),
              r3(o)));
        }
      },
      i_ = {
        clearProps: function (t, e, r, i, n) {
          if ("isFromStart" !== n.data) {
            var s = (t._pt = new rf(t._pt, e, r, 0, 0, iv));
            return (
              (s.u = i),
              (s.pr = -10),
              (s.tween = n),
              t._props.push(r),
              1
            );
          }
        },
      },
      iy = [1, 0, 0, 1, 0, 0],
      ix = {},
      ib = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
      },
      iw = function (t) {
        var e = r6(t, r1);
        return ib(e) ? iy : e.substr(7).match(Q).map(tS);
      },
      iT = function (t, e) {
        var r,
          i,
          n,
          s,
          o = t._gsap || tb(t),
          a = t.style,
          l = iw(t);
        return o.svg && t.getAttribute("transform")
          ? "1,0,0,1,0,0" ===
            (l = [
              (n = t.transform.baseVal.consolidate().matrix).a,
              n.b,
              n.c,
              n.d,
              n.e,
              n.f,
            ]).join(",")
            ? iy
            : l
          : (l !== iy ||
              t.offsetParent ||
              t === rO ||
              o.svg ||
              ((n = a.display),
              (a.display = "block"),
              ((r = t.parentNode) &&
                (t.offsetParent || t.getBoundingClientRect().width)) ||
                ((s = 1), (i = t.nextElementSibling), rO.appendChild(t)),
              (l = iw(t)),
              n ? (a.display = n) : ia(t, "display"),
              s &&
                (i
                  ? r.insertBefore(t, i)
                  : r
                    ? r.appendChild(t)
                    : rO.removeChild(t))),
            e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
      },
      iS = function (t, e, r, i, n, s) {
        var o,
          a,
          l,
          u,
          c = t._gsap,
          h = n || iT(t, !0),
          f = c.xOrigin || 0,
          p = c.yOrigin || 0,
          d = c.xOffset || 0,
          m = c.yOffset || 0,
          g = h[0],
          v = h[1],
          _ = h[2],
          y = h[3],
          x = h[4],
          b = h[5],
          w = e.split(" "),
          T = parseFloat(w[0]) || 0,
          S = parseFloat(w[1]) || 0;
        (r
          ? h !== iy &&
            (a = g * y - v * _) &&
            ((l = (y / a) * T + (-_ / a) * S + (_ * b - y * x) / a),
            (u = (-v / a) * T + (g / a) * S - (g * b - v * x) / a),
            (T = l),
            (S = u))
          : ((T =
              (o = is(t)).x + (~w[0].indexOf("%") ? (T / 100) * o.width : T)),
            (S =
              o.y + (~(w[1] || w[0]).indexOf("%") ? (S / 100) * o.height : S))),
          i || (!1 !== i && c.smooth)
            ? ((c.xOffset = d + ((x = T - f) * g + (b = S - p) * _) - x),
              (c.yOffset = m + (x * v + b * y) - b))
            : (c.xOffset = c.yOffset = 0),
          (c.xOrigin = T),
          (c.yOrigin = S),
          (c.smooth = !!i),
          (c.origin = e),
          (c.originIsAbsolute = !!r),
          (t.style[r2] = "0px 0px"),
          s &&
            (il(s, c, "xOrigin", f, T),
            il(s, c, "yOrigin", p, S),
            il(s, c, "xOffset", d, c.xOffset),
            il(s, c, "yOffset", m, c.yOffset)),
          t.setAttribute("data-svg-origin", T + " " + S));
      },
      ik = function (t, e) {
        var r = t._gsap || new eX(t);
        if ("x" in r && !e && !r.uncache) return r;
        var i,
          n,
          s,
          o,
          a,
          l,
          u,
          c,
          h,
          f,
          p,
          d,
          m,
          g,
          v,
          _,
          y,
          x,
          b,
          w,
          T,
          S,
          k,
          E,
          M,
          O,
          P,
          A,
          R,
          z,
          N,
          D,
          L = t.style,
          j = r.scaleX < 0,
          F = getComputedStyle(t),
          I = r6(t, r2) || "0";
        return (
          (i = n = s = l = u = c = h = f = p = 0),
          (o = a = 1),
          (r.svg = !!(t.getCTM && io(t))),
          F.translate &&
            (("none" !== F.translate ||
              "none" !== F.scale ||
              "none" !== F.rotate) &&
              (L[r1] =
                ("none" !== F.translate
                  ? "translate3d(" +
                    (F.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                    ") "
                  : "") +
                ("none" !== F.rotate ? "rotate(" + F.rotate + ") " : "") +
                ("none" !== F.scale
                  ? "scale(" + F.scale.split(" ").join(",") + ") "
                  : "") +
                ("none" !== F[r1] ? F[r1] : "")),
            (L.scale = L.rotate = L.translate = "none")),
          (g = iT(t, r.svg)),
          r.svg &&
            (r.uncache
              ? ((M = t.getBBox()),
                (I = r.xOrigin - M.x + "px " + (r.yOrigin - M.y) + "px"),
                (E = ""))
              : (E = !e && t.getAttribute("data-svg-origin")),
            iS(t, E || I, !!E || r.originIsAbsolute, !1 !== r.smooth, g)),
          (d = r.xOrigin || 0),
          (m = r.yOrigin || 0),
          g !== iy &&
            ((x = g[0]),
            (b = g[1]),
            (w = g[2]),
            (T = g[3]),
            (i = S = g[4]),
            (n = k = g[5]),
            6 === g.length
              ? ((o = Math.sqrt(x * x + b * b)),
                (a = Math.sqrt(T * T + w * w)),
                (l = x || b ? rj(b, x) * rD : 0),
                (h = w || T ? rj(w, T) * rD + l : 0) &&
                  (a *= Math.abs(Math.cos(h * rL))),
                r.svg &&
                  ((i -= d - (d * x + m * w)), (n -= m - (d * b + m * T))))
              : ((D = g[6]),
                (z = g[7]),
                (P = g[8]),
                (A = g[9]),
                (R = g[10]),
                (N = g[11]),
                (i = g[12]),
                (n = g[13]),
                (s = g[14]),
                (u = (v = rj(D, R)) * rD),
                v &&
                  ((E = S * (_ = Math.cos(-v)) + P * (y = Math.sin(-v))),
                  (M = k * _ + A * y),
                  (O = D * _ + R * y),
                  (P = -(S * y) + P * _),
                  (A = -(k * y) + A * _),
                  (R = -(D * y) + R * _),
                  (N = -(z * y) + N * _),
                  (S = E),
                  (k = M),
                  (D = O)),
                (c = (v = rj(-w, R)) * rD),
                v &&
                  ((E = x * (_ = Math.cos(-v)) - P * (y = Math.sin(-v))),
                  (M = b * _ - A * y),
                  (O = w * _ - R * y),
                  (N = T * y + N * _),
                  (x = E),
                  (b = M),
                  (w = O)),
                (l = (v = rj(b, x)) * rD),
                v &&
                  ((E = x * (_ = Math.cos(v)) + b * (y = Math.sin(v))),
                  (M = S * _ + k * y),
                  (b = b * _ - x * y),
                  (k = k * _ - S * y),
                  (x = E),
                  (S = M)),
                u &&
                  Math.abs(u) + Math.abs(l) > 359.9 &&
                  ((u = l = 0), (c = 180 - c)),
                (o = tS(Math.sqrt(x * x + b * b + w * w))),
                (a = tS(Math.sqrt(k * k + D * D))),
                (h = Math.abs((v = rj(S, k))) > 2e-4 ? v * rD : 0),
                (p = N ? 1 / (N < 0 ? -N : N) : 0)),
            r.svg &&
              ((E = t.getAttribute("transform")),
              (r.forceCSS = t.setAttribute("transform", "") || !ib(r6(t, r1))),
              E && t.setAttribute("transform", E))),
          Math.abs(h) > 90 &&
            270 > Math.abs(h) &&
            (j
              ? ((o *= -1),
                (h += l <= 0 ? 180 : -180),
                (l += l <= 0 ? 180 : -180))
              : ((a *= -1), (h += h <= 0 ? 180 : -180))),
          (e = e || r.uncache),
          (r.x =
            i -
            ((r.xPercent =
              i &&
              ((!e && r.xPercent) ||
                (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
              ? (t.offsetWidth * r.xPercent) / 100
              : 0) +
            "px"),
          (r.y =
            n -
            ((r.yPercent =
              n &&
              ((!e && r.yPercent) ||
                (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
              ? (t.offsetHeight * r.yPercent) / 100
              : 0) +
            "px"),
          (r.z = s + "px"),
          (r.scaleX = tS(o)),
          (r.scaleY = tS(a)),
          (r.rotation = tS(l) + "deg"),
          (r.rotationX = tS(u) + "deg"),
          (r.rotationY = tS(c) + "deg"),
          (r.skewX = h + "deg"),
          (r.skewY = f + "deg"),
          (r.transformPerspective = p + "px"),
          (r.zOrigin = parseFloat(I.split(" ")[2]) || (!e && r.zOrigin) || 0) &&
            (L[r2] = iE(I)),
          (r.xOffset = r.yOffset = 0),
          (r.force3D = C.force3D),
          (r.renderTransform = r.svg ? iA : rz ? iP : iO),
          (r.uncache = 0),
          r
        );
      },
      iE = function (t) {
        return (t = t.split(" "))[0] + " " + t[1];
      },
      iM = function (t, e, r) {
        var i = ee(e);
        return tS(parseFloat(e) + parseFloat(ih(t, "x", r + "px", i))) + i;
      },
      iO = function (t, e) {
        ((e.z = "0px"),
          (e.rotationY = e.rotationX = "0deg"),
          (e.force3D = 0),
          iP(t, e));
      },
      iC = "0deg",
      iP = function (t, e) {
        var r = e || this,
          i = r.xPercent,
          n = r.yPercent,
          s = r.x,
          o = r.y,
          a = r.z,
          l = r.rotation,
          u = r.rotationY,
          c = r.rotationX,
          h = r.skewX,
          f = r.skewY,
          p = r.scaleX,
          d = r.scaleY,
          m = r.transformPerspective,
          g = r.force3D,
          v = r.target,
          _ = r.zOrigin,
          y = "",
          x = ("auto" === g && t && 1 !== t) || !0 === g;
        if (_ && (c !== iC || u !== iC)) {
          var b,
            w = parseFloat(u) * rL,
            T = Math.sin(w),
            S = Math.cos(w);
          ((s = iM(v, s, -(T * (b = Math.cos((w = parseFloat(c) * rL))) * _))),
            (o = iM(v, o, -(-Math.sin(w) * _))),
            (a = iM(v, a, -(S * b * _) + _)));
        }
        ("0px" !== m && (y += "perspective(" + m + ") "),
          (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
          (x || "0px" !== s || "0px" !== o || "0px" !== a) &&
            (y +=
              "0px" !== a || x
                ? "translate3d(" + s + ", " + o + ", " + a + ") "
                : "translate(" + s + ", " + o + ") "),
          l !== iC && (y += "rotate(" + l + ") "),
          u !== iC && (y += "rotateY(" + u + ") "),
          c !== iC && (y += "rotateX(" + c + ") "),
          (h !== iC || f !== iC) && (y += "skew(" + h + ", " + f + ") "),
          (1 !== p || 1 !== d) && (y += "scale(" + p + ", " + d + ") "),
          (v.style[r1] = y || "translate(0, 0)"));
      },
      iA = function (t, e) {
        var r,
          i,
          n,
          s,
          o,
          a = e || this,
          l = a.xPercent,
          u = a.yPercent,
          c = a.x,
          h = a.y,
          f = a.rotation,
          p = a.skewX,
          d = a.skewY,
          m = a.scaleX,
          g = a.scaleY,
          v = a.target,
          _ = a.xOrigin,
          y = a.yOrigin,
          x = a.xOffset,
          b = a.yOffset,
          w = a.forceCSS,
          T = parseFloat(c),
          S = parseFloat(h);
        ((f = parseFloat(f)),
          (p = parseFloat(p)),
          (d = parseFloat(d)) && ((p += d = parseFloat(d)), (f += d)),
          f || p
            ? ((f *= rL),
              (p *= rL),
              (r = Math.cos(f) * m),
              (i = Math.sin(f) * m),
              (n = -(Math.sin(f - p) * g)),
              (s = Math.cos(f - p) * g),
              p &&
                ((d *= rL),
                (n *= o = Math.sqrt(1 + (o = Math.tan(p - d)) * o)),
                (s *= o),
                d &&
                  ((r *= o = Math.sqrt(1 + (o = Math.tan(d)) * o)), (i *= o))),
              (r = tS(r)),
              (i = tS(i)),
              (n = tS(n)),
              (s = tS(s)))
            : ((r = m), (s = g), (i = n = 0)),
          ((T && !~(c + "").indexOf("px")) ||
            (S && !~(h + "").indexOf("px"))) &&
            ((T = ih(v, "x", c, "px")), (S = ih(v, "y", h, "px"))),
          (_ || y || x || b) &&
            ((T = tS(T + _ - (_ * r + y * n) + x)),
            (S = tS(S + y - (_ * i + y * s) + b))),
          (l || u) &&
            ((T = tS(T + (l / 100) * (o = v.getBBox()).width)),
            (S = tS(S + (u / 100) * o.height))),
          (o =
            "matrix(" +
            r +
            "," +
            i +
            "," +
            n +
            "," +
            s +
            "," +
            T +
            "," +
            S +
            ")"),
          v.setAttribute("transform", o),
          w && (v.style[r1] = o));
      },
      iR = function (t, e, r, i, n) {
        var s,
          o,
          a = j(n),
          l = parseFloat(n) * (a && ~n.indexOf("rad") ? rD : 1) - i,
          u = i + l + "deg";
        return (
          a &&
            ("short" === (s = n.split("_")[1]) &&
              (l %= 360) != l % 180 &&
              (l += l < 0 ? 360 : -360),
            "cw" === s && l < 0
              ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
              : "ccw" === s &&
                l > 0 &&
                (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
          (t._pt = o = new rf(t._pt, e, r, i, l, rW)),
          (o.e = u),
          (o.u = "deg"),
          t._props.push(r),
          o
        );
      },
      iz = function (t, e) {
        for (var r in e) t[r] = e[r];
        return t;
      },
      iN = function (t, e, r) {
        var i,
          n,
          s,
          o,
          a,
          l,
          u,
          c = iz({}, r._gsap),
          h = r.style;
        for (n in (c.svg
          ? ((s = r.getAttribute("transform")),
            r.setAttribute("transform", ""),
            (h[r1] = e),
            (i = ik(r, 1)),
            ia(r, r1),
            r.setAttribute("transform", s))
          : ((s = getComputedStyle(r)[r1]),
            (h[r1] = e),
            (i = ik(r, 1)),
            (h[r1] = s)),
        rN))
          (s = c[n]) !== (o = i[n]) &&
            0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) &&
            ((a = ee(s) !== (u = ee(o)) ? ih(r, n, s, u) : parseFloat(s)),
            (l = parseFloat(o)),
            (t._pt = new rf(t._pt, i, n, a, l - a, rX)),
            (t._pt.u = u || 0),
            t._props.push(n));
        iz(i, c);
      };
    tT("padding,margin,Width,Radius", function (t, e) {
      var r = "Right",
        i = "Bottom",
        n = "Left",
        s = (
          e < 3 ? ["Top", r, i, n] : ["Top" + n, "Top" + r, i + r, i + n]
        ).map(function (r) {
          return e < 2 ? t + r : "border" + r + t;
        });
      i_[e > 1 ? "border" + t : t] = function (t, e, r, i, n) {
        var o, a;
        if (arguments.length < 4)
          return 5 ===
            (a = (o = s.map(function (e) {
              return ip(t, e, r);
            })).join(" ")).split(o[0]).length
            ? o[0]
            : a;
        ((o = (i + "").split(" ")),
          (a = {}),
          s.forEach(function (t, e) {
            return (a[t] = o[e] = o[e] || o[((e - 1) / 2) | 0]);
          }),
          t.init(e, a, n));
      };
    });
    var iD = {
      name: "css",
      register: ie,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, r, i, n) {
        var s,
          o,
          a,
          l,
          u,
          c,
          h,
          f,
          p,
          d,
          m,
          g,
          v,
          _,
          y,
          x,
          b,
          w = this._props,
          T = t.style,
          S = r.vars.startAt;
        for (h in (rC || ie(),
        (this.styles = this.styles || r8(t)),
        (x = this.styles.props),
        (this.tween = r),
        e))
          if (
            "autoRound" !== h &&
            ((o = e[h]), !(tm[h] && e0(h, e, r, i, t, n)))
          ) {
            if (
              ((u = typeof o),
              (c = i_[h]),
              "function" === u && (u = typeof (o = o.call(r, i, t, n))),
              "string" === u && ~o.indexOf("random(") && (o = ef(o)),
              c)
            )
              c(this, t, h, o, r) && (y = 1);
            else if ("--" === h.substr(0, 2))
              ((s = (getComputedStyle(t).getPropertyValue(h) + "").trim()),
                (o += ""),
                (eS.lastIndex = 0),
                !eS.test(s) &&
                  ((f = ee(s)),
                  (p = ee(o))
                    ? f !== p && (s = ih(t, h, s, p) + p)
                    : f && (o += f)),
                this.add(T, "setProperty", s, o, i, n, 0, 0, h),
                w.push(h),
                x.push(h, 0, T[h]));
            else if ("undefined" !== u) {
              if (
                (S && h in S
                  ? (j(
                      (s =
                        "function" == typeof S[h]
                          ? S[h].call(r, i, t, n)
                          : S[h]),
                    ) &&
                      ~s.indexOf("random(") &&
                      (s = ef(s)),
                    ee(s + "") ||
                      "auto" === s ||
                      (s += C.units[h] || ee(ip(t, h)) || ""),
                    "=" === (s + "").charAt(1) && (s = ip(t, h)))
                  : (s = ip(t, h)),
                (l = parseFloat(s)),
                (d = "string" === u && "=" === o.charAt(1) && o.substr(0, 2)) &&
                  (o = o.substr(2)),
                (a = parseFloat(o)),
                h in rB &&
                  ("autoAlpha" === h &&
                    (1 === l &&
                      "hidden" === ip(t, "visibility") &&
                      a &&
                      (l = 0),
                    x.push("visibility", 0, T.visibility),
                    il(
                      this,
                      T,
                      "visibility",
                      l ? "inherit" : "hidden",
                      a ? "inherit" : "hidden",
                      !a,
                    )),
                  "scale" !== h &&
                    "transform" !== h &&
                    ~(h = rB[h]).indexOf(",") &&
                    (h = h.split(",")[0])),
                (m = h in rN))
              ) {
                if (
                  (this.styles.save(h),
                  (b = o),
                  "string" === u && "var(--" === o.substring(0, 6))
                ) {
                  if (
                    "calc(" ===
                    (o = r6(t, o.substring(4, o.indexOf(")")))).substring(0, 5)
                  ) {
                    var k = t.style.perspective;
                    ((t.style.perspective = o),
                      (o = r6(t, "perspective")),
                      k ? (t.style.perspective = k) : ia(t, "perspective"));
                  }
                  a = parseFloat(o);
                }
                if (
                  (g ||
                    (((v = t._gsap).renderTransform && !e.parseTransform) ||
                      ik(t, e.parseTransform),
                    (_ = !1 !== e.smoothOrigin && v.smooth),
                    ((g = this._pt =
                      new rf(
                        this._pt,
                        T,
                        r1,
                        0,
                        1,
                        v.renderTransform,
                        v,
                        0,
                        -1,
                      )).dep = 1)),
                  "scale" === h)
                )
                  ((this._pt = new rf(
                    this._pt,
                    v,
                    "scaleY",
                    v.scaleY,
                    (d ? tE(v.scaleY, d + a) : a) - v.scaleY || 0,
                    rX,
                  )),
                    (this._pt.u = 0),
                    w.push("scaleY", h),
                    (h += "X"));
                else if ("transformOrigin" === h) {
                  (x.push(r2, 0, T[r2]),
                    (o = ig(o)),
                    v.svg
                      ? iS(t, o, 0, _, 0, this)
                      : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin &&
                          il(this, v, "zOrigin", v.zOrigin, p),
                        il(this, T, h, iE(s), iE(o))));
                  continue;
                } else if ("svgOrigin" === h) {
                  iS(t, o, 1, _, 0, this);
                  continue;
                } else if (h in ix) {
                  iR(this, v, h, l, d ? tE(l, d + o) : o);
                  continue;
                } else if ("smoothOrigin" === h) {
                  il(this, v, "smooth", v.smooth, o);
                  continue;
                } else if ("force3D" === h) {
                  v[h] = o;
                  continue;
                } else if ("transform" === h) {
                  iN(this, o, t);
                  continue;
                }
              } else h in T || (h = it(h) || h);
              if (
                m ||
                ((a || 0 === a) && (l || 0 === l) && !rY.test(o) && h in T)
              )
                ((f = (s + "").substr((l + "").length)),
                  a || (a = 0),
                  (p = ee(o) || (h in C.units ? C.units[h] : f)),
                  f !== p && (l = ih(t, h, s, p)),
                  (this._pt = new rf(
                    this._pt,
                    m ? v : T,
                    h,
                    l,
                    (d ? tE(l, d + a) : a) - l,
                    !m && ("px" === p || "zIndex" === h) && !1 !== e.autoRound
                      ? rq
                      : rX,
                  )),
                  (this._pt.u = p || 0),
                  m && b !== o
                    ? ((this._pt.b = s), (this._pt.e = b), (this._pt.r = rU))
                    : f !== p &&
                      "%" !== p &&
                      ((this._pt.b = s), (this._pt.r = rH)));
              else if (h in T) id.call(this, t, h, s, d ? d + o : o);
              else if (h in t) this.add(t, h, s || t[h], d ? d + o : o, i, n);
              else if ("parseTransform" !== h) {
                ts(h, o);
                continue;
              }
              (m ||
                (h in T
                  ? x.push(h, 0, T[h])
                  : "function" == typeof t[h]
                    ? x.push(h, 2, t[h]())
                    : x.push(h, 1, s || t[h])),
                w.push(h));
            }
          }
        y && rh(this);
      },
      render: function (t, e) {
        if (e.tween._time || !rR())
          for (var r = e._pt; r; ) (r.r(t, r.d), (r = r._next));
        else e.styles.revert();
      },
      get: ip,
      aliases: rB,
      getSetter: function (t, e, r) {
        var i = rB[e];
        return (
          i && 0 > i.indexOf(",") && (e = i),
          e in rN && e !== r2 && (t._gsap.x || ip(t, "x"))
            ? r && rA === r
              ? "scale" === e
                ? rK
                : rZ
              : ((rA = r || {}), "scale" === e ? rJ : r0)
            : t.style && !Y(t.style[e])
              ? rG
              : ~e.indexOf("-")
                ? rQ
                : ri(t, e)
        );
      },
      core: { _removeProperty: ia, _getMatrix: iT },
    };
    ((rE.utils.checkPrefix = it),
      (rE.core.getStyleSaver = r8),
      (iF = tT(
        "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
          (ij = "rotation,rotationX,rotationY,skewX,skewY") +
          ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
        function (t) {
          rN[t] = 1;
        },
      )),
      tT(ij, function (t) {
        ((C.units[t] = "deg"), (ix[t] = 1));
      }),
      (rB[iF[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + ij),
      tT(
        "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
        function (t) {
          var e = t.split(":");
          rB[e[1]] = iF[e[0]];
        },
      ),
      tT(
        "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
        function (t) {
          C.units[t] = "px";
        },
      ),
      rE.registerPlugin(iD));
    var iL = rE.registerPlugin(iD) || rE;
    (iL.core.Tween, t.s(["gsap", () => iL], 89970));
    var ij,
      iF,
      iI,
      iY,
      iB,
      iX,
      iW,
      iH,
      iU,
      iq,
      iV,
      i$,
      iG,
      iQ,
      iZ,
      iK = function () {
        return (
          iI ||
          ("u" > typeof window && (iI = window.gsap) && iI.registerPlugin && iI)
        );
      },
      iJ = 1,
      i0 = [],
      i1 = [],
      i2 = [],
      i5 = Date.now,
      i3 = function (t, e) {
        return e;
      },
      i4 = function () {
        var t = iV.core,
          e = t.bridge || {},
          r = t._scrollers,
          i = t._proxies;
        (r.push.apply(r, i1),
          i.push.apply(i, i2),
          (i1 = r),
          (i2 = i),
          (i3 = function (t, r) {
            return e[t](r);
          }));
      },
      i8 = function (t, e) {
        return ~i2.indexOf(t) && i2[i2.indexOf(t) + 1][e];
      },
      i9 = function (t) {
        return !!~i$.indexOf(t);
      },
      i6 = function (t, e, r, i, n) {
        return t.addEventListener(e, r, { passive: !1 !== i, capture: !!n });
      },
      i7 = function (t, e, r, i) {
        return t.removeEventListener(e, r, !!i);
      },
      nt = "scrollLeft",
      ne = "scrollTop",
      nr = function () {
        return (iG && iG.isPressed) || i1.cache++;
      },
      ni = function (t, e) {
        var r = function r(i) {
          if (i || 0 === i) {
            iJ && (iB.history.scrollRestoration = "manual");
            var n = iG && iG.isPressed;
            (t((i = r.v = Math.round(i) || (iG && iG.iOS ? 1 : 0))),
              (r.cacheID = i1.cache),
              n && i3("ss", i));
          } else
            (e || i1.cache !== r.cacheID || i3("ref")) &&
              ((r.cacheID = i1.cache), (r.v = t()));
          return r.v + r.offset;
        };
        return ((r.offset = 0), t && r);
      },
      nn = {
        s: nt,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: ni(function (t) {
          return arguments.length
            ? iB.scrollTo(t, ns.sc())
            : iB.pageXOffset || iX[nt] || iW[nt] || iH[nt] || 0;
        }),
      },
      ns = {
        s: ne,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: nn,
        sc: ni(function (t) {
          return arguments.length
            ? iB.scrollTo(nn.sc(), t)
            : iB.pageYOffset || iX[ne] || iW[ne] || iH[ne] || 0;
        }),
      },
      no = function (t, e) {
        return (
          ((e && e._ctx && e._ctx.selector) || iI.utils.toArray)(t)[0] ||
          ("string" == typeof t && !1 !== iI.config().nullTargetWarn
            ? console.warn("Element not found:", t)
            : null)
        );
      },
      na = function (t, e) {
        for (var r = e.length; r--; )
          if (e[r] === t || e[r].contains(t)) return !0;
        return !1;
      },
      nl = function (t, e) {
        var r = e.s,
          i = e.sc;
        i9(t) && (t = iX.scrollingElement || iW);
        var n = i1.indexOf(t),
          s = i === ns.sc ? 1 : 2;
        (~n || (n = i1.push(t) - 1), i1[n + s] || i6(t, "scroll", nr));
        var o = i1[n + s],
          a =
            o ||
            (i1[n + s] =
              ni(i8(t, r), !0) ||
              (i9(t)
                ? i
                : ni(function (e) {
                    return arguments.length ? (t[r] = e) : t[r];
                  })));
        return (
          (a.target = t),
          o || (a.smooth = "smooth" === iI.getProperty(t, "scrollBehavior")),
          a
        );
      },
      nu = function (t, e, r) {
        var i = t,
          n = t,
          s = i5(),
          o = s,
          a = e || 50,
          l = Math.max(500, 3 * a),
          u = function (t, e) {
            var l = i5();
            e || l - s > a
              ? ((n = i), (i = t), (o = s), (s = l))
              : r
                ? (i += t)
                : (i = n + ((t - n) / (l - o)) * (s - o));
          };
        return {
          update: u,
          reset: function () {
            ((n = i = r ? 0 : i), (o = s = 0));
          },
          getVelocity: function (t) {
            var e = o,
              a = n,
              c = i5();
            return (
              (t || 0 === t) && t !== i && u(t),
              s === o || c - o > l
                ? 0
                : ((i + (r ? a : -a)) / ((r ? c : s) - e)) * 1e3
            );
          },
        };
      },
      nc = function (t, e) {
        return (
          e && !t._gsapAllow && t.preventDefault(),
          t.changedTouches ? t.changedTouches[0] : t
        );
      },
      nh = function (t) {
        var e = Math.max.apply(Math, t),
          r = Math.min.apply(Math, t);
        return Math.abs(e) >= Math.abs(r) ? e : r;
      },
      nf = function () {
        (iV = iI.core.globals().ScrollTrigger) && iV.core && i4();
      },
      np = function (t) {
        return (
          (iI = t || iK()),
          !iY &&
            iI &&
            "u" > typeof document &&
            document.body &&
            ((iB = window),
            (iW = (iX = document).documentElement),
            (iH = iX.body),
            (i$ = [iB, iX, iW, iH]),
            iI.utils.clamp,
            (iZ = iI.core.context || function () {}),
            (iq = "onpointerenter" in iH ? "pointer" : "mouse"),
            (iU = nd.isTouch =
              iB.matchMedia &&
              iB.matchMedia("(hover: none), (pointer: coarse)").matches
                ? 1
                : 2 *
                  ("ontouchstart" in iB ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0)),
            (iQ = nd.eventTypes =
              (
                "ontouchstart" in iW
                  ? "touchstart,touchmove,touchcancel,touchend"
                  : !("onpointerdown" in iW)
                    ? "mousedown,mousemove,mouseup,mouseup"
                    : "pointerdown,pointermove,pointercancel,pointerup"
              ).split(",")),
            setTimeout(function () {
              return (iJ = 0);
            }, 500),
            nf(),
            (iY = 1)),
          iY
        );
      };
    ((nn.op = ns), (i1.cache = 0));
    var nd = (function () {
      var t;
      function e(t) {
        this.init(t);
      }
      return (
        (e.prototype.init = function (t) {
          (iY || np(iI) || console.warn("Please gsap.registerPlugin(Observer)"),
            iV || nf());
          var e = t.tolerance,
            r = t.dragMinimum,
            i = t.type,
            n = t.target,
            s = t.lineHeight,
            o = t.debounce,
            a = t.preventDefault,
            l = t.onStop,
            u = t.onStopDelay,
            c = t.ignore,
            h = t.wheelSpeed,
            f = t.event,
            p = t.onDragStart,
            d = t.onDragEnd,
            m = t.onDrag,
            g = t.onPress,
            v = t.onRelease,
            _ = t.onRight,
            y = t.onLeft,
            x = t.onUp,
            b = t.onDown,
            w = t.onChangeX,
            T = t.onChangeY,
            S = t.onChange,
            k = t.onToggleX,
            E = t.onToggleY,
            M = t.onHover,
            O = t.onHoverEnd,
            C = t.onMove,
            P = t.ignoreCheck,
            A = t.isNormalizer,
            R = t.onGestureStart,
            z = t.onGestureEnd,
            N = t.onWheel,
            D = t.onEnable,
            L = t.onDisable,
            j = t.onClick,
            F = t.scrollSpeed,
            I = t.capture,
            Y = t.allowClicks,
            B = t.lockAxis,
            X = t.onLockAxis;
          ((this.target = n = no(n) || iW),
            (this.vars = t),
            c && (c = iI.utils.toArray(c)),
            (e = e || 1e-9),
            (r = r || 0),
            (h = h || 1),
            (F = F || 1),
            (i = i || "wheel,touch,pointer"),
            (o = !1 !== o),
            s || (s = parseFloat(iB.getComputedStyle(iH).lineHeight) || 22));
          var W,
            H,
            U,
            q,
            V,
            $,
            G,
            Q = this,
            Z = 0,
            K = 0,
            J = t.passive || (!a && !1 !== t.passive),
            tt = nl(n, nn),
            te = nl(n, ns),
            tr = tt(),
            ti = te(),
            tn =
              ~i.indexOf("touch") &&
              !~i.indexOf("pointer") &&
              "pointerdown" === iQ[0],
            ts = i9(n),
            to = n.ownerDocument || iX,
            ta = [0, 0, 0],
            tl = [0, 0, 0],
            tu = 0,
            tc = function () {
              return (tu = i5());
            },
            th = function (t, e) {
              return (
                ((Q.event = t) && c && na(t.target, c)) ||
                (e && tn && "touch" !== t.pointerType) ||
                (P && P(t, e))
              );
            },
            tf = function () {
              var t = (Q.deltaX = nh(ta)),
                r = (Q.deltaY = nh(tl)),
                i = Math.abs(t) >= e,
                n = Math.abs(r) >= e;
              (S && (i || n) && S(Q, t, r, ta, tl),
                i &&
                  (_ && Q.deltaX > 0 && _(Q),
                  y && Q.deltaX < 0 && y(Q),
                  w && w(Q),
                  k && Q.deltaX < 0 != Z < 0 && k(Q),
                  (Z = Q.deltaX),
                  (ta[0] = ta[1] = ta[2] = 0)),
                n &&
                  (b && Q.deltaY > 0 && b(Q),
                  x && Q.deltaY < 0 && x(Q),
                  T && T(Q),
                  E && Q.deltaY < 0 != K < 0 && E(Q),
                  (K = Q.deltaY),
                  (tl[0] = tl[1] = tl[2] = 0)),
                (q || U) &&
                  (C && C(Q),
                  U && (p && 1 === U && p(Q), m && m(Q), (U = 0)),
                  (q = !1)),
                $ && (($ = !1), 1) && X && X(Q),
                V && (N(Q), (V = !1)),
                (W = 0));
            },
            tp = function (t, e, r) {
              ((ta[r] += t),
                (tl[r] += e),
                Q._vx.update(t),
                Q._vy.update(e),
                o ? W || (W = requestAnimationFrame(tf)) : tf());
            },
            td = function (t, e) {
              (B &&
                !G &&
                ((Q.axis = G = Math.abs(t) > Math.abs(e) ? "x" : "y"),
                ($ = !0)),
                "y" !== G && ((ta[2] += t), Q._vx.update(t, !0)),
                "x" !== G && ((tl[2] += e), Q._vy.update(e, !0)),
                o ? W || (W = requestAnimationFrame(tf)) : tf());
            },
            tm = function (t) {
              if (!th(t, 1)) {
                var e = (t = nc(t, a)).clientX,
                  i = t.clientY,
                  n = e - Q.x,
                  s = i - Q.y,
                  o = Q.isDragging;
                ((Q.x = e),
                  (Q.y = i),
                  (o ||
                    ((n || s) &&
                      (Math.abs(Q.startX - e) >= r ||
                        Math.abs(Q.startY - i) >= r))) &&
                    (U || (U = o ? 2 : 1), o || (Q.isDragging = !0), td(n, s)));
              }
            },
            tg = (Q.onPress = function (t) {
              th(t, 1) ||
                (t && t.button) ||
                ((Q.axis = G = null),
                H.pause(),
                (Q.isPressed = !0),
                (t = nc(t)),
                (Z = K = 0),
                (Q.startX = Q.x = t.clientX),
                (Q.startY = Q.y = t.clientY),
                Q._vx.reset(),
                Q._vy.reset(),
                i6(A ? n : to, iQ[1], tm, J, !0),
                (Q.deltaX = Q.deltaY = 0),
                g && g(Q));
            }),
            tv = (Q.onRelease = function (t) {
              if (!th(t, 1)) {
                i7(A ? n : to, iQ[1], tm, !0);
                var e = !isNaN(Q.y - Q.startY),
                  r = Q.isDragging,
                  i =
                    r &&
                    (Math.abs(Q.x - Q.startX) > 3 ||
                      Math.abs(Q.y - Q.startY) > 3),
                  s = nc(t);
                (!i &&
                  e &&
                  (Q._vx.reset(),
                  Q._vy.reset(),
                  a &&
                    Y &&
                    iI.delayedCall(0.08, function () {
                      if (i5() - tu > 300 && !t.defaultPrevented) {
                        if (t.target.click) t.target.click();
                        else if (to.createEvent) {
                          var e = to.createEvent("MouseEvents");
                          (e.initMouseEvent(
                            "click",
                            !0,
                            !0,
                            iB,
                            1,
                            s.screenX,
                            s.screenY,
                            s.clientX,
                            s.clientY,
                            !1,
                            !1,
                            !1,
                            !1,
                            0,
                            null,
                          ),
                            t.target.dispatchEvent(e));
                        }
                      }
                    })),
                  (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
                  l && r && !A && H.restart(!0),
                  U && tf(),
                  d && r && d(Q),
                  v && v(Q, i));
              }
            }),
            t_ = function (t) {
              return (
                t.touches &&
                t.touches.length > 1 &&
                (Q.isGesturing = !0) &&
                R(t, Q.isDragging)
              );
            },
            ty = function () {
              return ((Q.isGesturing = !1), z(Q));
            },
            tx = function (t) {
              if (!th(t)) {
                var e = tt(),
                  r = te();
                (tp((e - tr) * F, (r - ti) * F, 1),
                  (tr = e),
                  (ti = r),
                  l && H.restart(!0));
              }
            },
            tb = function (t) {
              if (!th(t)) {
                ((t = nc(t, a)), N && (V = !0));
                var e =
                  (1 === t.deltaMode
                    ? s
                    : 2 === t.deltaMode
                      ? iB.innerHeight
                      : 1) * h;
                (tp(t.deltaX * e, t.deltaY * e, 0), l && !A && H.restart(!0));
              }
            },
            tw = function (t) {
              if (!th(t)) {
                var e = t.clientX,
                  r = t.clientY,
                  i = e - Q.x,
                  n = r - Q.y;
                ((Q.x = e),
                  (Q.y = r),
                  (q = !0),
                  l && H.restart(!0),
                  (i || n) && td(i, n));
              }
            },
            tT = function (t) {
              ((Q.event = t), M(Q));
            },
            tS = function (t) {
              ((Q.event = t), O(Q));
            },
            tk = function (t) {
              return th(t) || (nc(t, a) && j(Q));
            };
          ((H = Q._dc =
            iI
              .delayedCall(u || 0.25, function () {
                (Q._vx.reset(), Q._vy.reset(), H.pause(), l && l(Q));
              })
              .pause()),
            (Q.deltaX = Q.deltaY = 0),
            (Q._vx = nu(0, 50, !0)),
            (Q._vy = nu(0, 50, !0)),
            (Q.scrollX = tt),
            (Q.scrollY = te),
            (Q.isDragging = Q.isGesturing = Q.isPressed = !1),
            iZ(this),
            (Q.enable = function (t) {
              return (
                !Q.isEnabled &&
                  (i6(ts ? to : n, "scroll", nr),
                  i.indexOf("scroll") >= 0 &&
                    i6(ts ? to : n, "scroll", tx, J, I),
                  i.indexOf("wheel") >= 0 && i6(n, "wheel", tb, J, I),
                  ((i.indexOf("touch") >= 0 && iU) ||
                    i.indexOf("pointer") >= 0) &&
                    (i6(n, iQ[0], tg, J, I),
                    i6(to, iQ[2], tv),
                    i6(to, iQ[3], tv),
                    Y && i6(n, "click", tc, !0, !0),
                    j && i6(n, "click", tk),
                    R && i6(to, "gesturestart", t_),
                    z && i6(to, "gestureend", ty),
                    M && i6(n, iq + "enter", tT),
                    O && i6(n, iq + "leave", tS),
                    C && i6(n, iq + "move", tw)),
                  (Q.isEnabled = !0),
                  (Q.isDragging = Q.isGesturing = Q.isPressed = q = U = !1),
                  Q._vx.reset(),
                  Q._vy.reset(),
                  (tr = tt()),
                  (ti = te()),
                  t && t.type && tg(t),
                  D && D(Q)),
                Q
              );
            }),
            (Q.disable = function () {
              Q.isEnabled &&
                (i0.filter(function (t) {
                  return t !== Q && i9(t.target);
                }).length || i7(ts ? to : n, "scroll", nr),
                Q.isPressed &&
                  (Q._vx.reset(), Q._vy.reset(), i7(A ? n : to, iQ[1], tm, !0)),
                i7(ts ? to : n, "scroll", tx, I),
                i7(n, "wheel", tb, I),
                i7(n, iQ[0], tg, I),
                i7(to, iQ[2], tv),
                i7(to, iQ[3], tv),
                i7(n, "click", tc, !0),
                i7(n, "click", tk),
                i7(to, "gesturestart", t_),
                i7(to, "gestureend", ty),
                i7(n, iq + "enter", tT),
                i7(n, iq + "leave", tS),
                i7(n, iq + "move", tw),
                (Q.isEnabled = Q.isPressed = Q.isDragging = !1),
                L && L(Q));
            }),
            (Q.kill = Q.revert =
              function () {
                Q.disable();
                var t = i0.indexOf(Q);
                (t >= 0 && i0.splice(t, 1), iG === Q && (iG = 0));
              }),
            i0.push(Q),
            A && i9(n) && (iG = Q),
            Q.enable(f));
        }),
        (t = [
          {
            key: "velocityX",
            get: function () {
              return this._vx.getVelocity();
            },
          },
          {
            key: "velocityY",
            get: function () {
              return this._vy.getVelocity();
            },
          },
        ]),
        (function (t, e) {
          for (var r = 0; r < e.length; r++) {
            var i = e[r];
            ((i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(t, i.key, i));
          }
        })(e.prototype, t),
        e
      );
    })();
    ((nd.version = "3.14.2"),
      (nd.create = function (t) {
        return new nd(t);
      }),
      (nd.register = np),
      (nd.getAll = function () {
        return i0.slice();
      }),
      (nd.getById = function (t) {
        return i0.filter(function (e) {
          return e.vars.id === t;
        })[0];
      }),
      iK() && iI.registerPlugin(nd));
    var nm,
      ng,
      nv,
      n_,
      ny,
      nx,
      nb,
      nw,
      nT,
      nS,
      nk,
      nE,
      nM,
      nO,
      nC,
      nP,
      nA,
      nR,
      nz,
      nN,
      nD,
      nL,
      nj,
      nF,
      nI,
      nY,
      nB,
      nX,
      nW,
      nH,
      nU,
      nq,
      nV,
      n$,
      nG,
      nQ,
      nZ,
      nK,
      nJ = 1,
      n0 = Date.now,
      n1 = n0(),
      n2 = 0,
      n5 = 0,
      n3 = function (t, e, r) {
        var i = sl(t) && ("clamp(" === t.substr(0, 6) || t.indexOf("max") > -1);
        return ((r["_" + e + "Clamp"] = i), i ? t.substr(6, t.length - 7) : t);
      },
      n4 = function (t, e) {
        return e && (!sl(t) || "clamp(" !== t.substr(0, 6))
          ? "clamp(" + t + ")"
          : t;
      },
      n8 = function () {
        return (nO = 1);
      },
      n9 = function () {
        return (nO = 0);
      },
      n6 = function (t) {
        return t;
      },
      n7 = function (t) {
        return Math.round(1e5 * t) / 1e5 || 0;
      },
      st = function () {
        return "u" > typeof window;
      },
      se = function () {
        return nm || (st() && (nm = window.gsap) && nm.registerPlugin && nm);
      },
      sr = function (t) {
        return !!~nb.indexOf(t);
      },
      si = function (t) {
        return (
          ("Height" === t ? nU : nv["inner" + t]) ||
          ny["client" + t] ||
          nx["client" + t]
        );
      },
      sn = function (t) {
        return (
          i8(t, "getBoundingClientRect") ||
          (sr(t)
            ? function () {
                return ((oh.width = nv.innerWidth), (oh.height = nU), oh);
              }
            : function () {
                return sP(t);
              })
        );
      },
      ss = function (t, e, r) {
        var i = r.d,
          n = r.d2,
          s = r.a;
        return (s = i8(t, "getBoundingClientRect"))
          ? function () {
              return s()[i];
            }
          : function () {
              return (e ? si(n) : t["client" + n]) || 0;
            };
      },
      so = function (t, e) {
        var r = e.s,
          i = e.d2,
          n = e.d,
          s = e.a;
        return Math.max(
          0,
          (s = i8(t, (r = "scroll" + i)))
            ? s() - sn(t)()[n]
            : sr(t)
              ? (ny[r] || nx[r]) - si(i)
              : t[r] - t["offset" + i],
        );
      },
      sa = function (t, e) {
        for (var r = 0; r < nz.length; r += 3)
          (!e || ~e.indexOf(nz[r + 1])) && t(nz[r], nz[r + 1], nz[r + 2]);
      },
      sl = function (t) {
        return "string" == typeof t;
      },
      su = function (t) {
        return "function" == typeof t;
      },
      sc = function (t) {
        return "number" == typeof t;
      },
      sh = function (t) {
        return "object" == typeof t;
      },
      sf = function (t, e, r) {
        return t && t.progress(+!e) && r && t.pause();
      },
      sp = function (t, e) {
        if (t.enabled) {
          var r = t._ctx
            ? t._ctx.add(function () {
                return e(t);
              })
            : e(t);
          r && r.totalTime && (t.callbackAnimation = r);
        }
      },
      sd = Math.abs,
      sm = "left",
      sg = "right",
      sv = "bottom",
      s_ = "width",
      sy = "height",
      sx = "Right",
      sb = "Left",
      sw = "Bottom",
      sT = "padding",
      sS = "margin",
      sk = "Width",
      sE = "Height",
      sM = function (t) {
        return nv.getComputedStyle(t);
      },
      sO = function (t) {
        var e = sM(t).position;
        t.style.position = "absolute" === e || "fixed" === e ? e : "relative";
      },
      sC = function (t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t;
      },
      sP = function (t, e) {
        var r =
            e &&
            "matrix(1, 0, 0, 1, 0, 0)" !== sM(t)[nC] &&
            nm
              .to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0,
              })
              .progress(1),
          i = t.getBoundingClientRect();
        return (r && r.progress(0).kill(), i);
      },
      sA = function (t, e) {
        var r = e.d2;
        return t["offset" + r] || t["client" + r] || 0;
      },
      sR = function (t) {
        var e,
          r = [],
          i = t.labels,
          n = t.duration();
        for (e in i) r.push(i[e] / n);
        return r;
      },
      sz = function (t) {
        var e = nm.utils.snap(t),
          r =
            Array.isArray(t) &&
            t.slice(0).sort(function (t, e) {
              return t - e;
            });
        return r
          ? function (t, i, n) {
              var s;
              if ((void 0 === n && (n = 0.001), !i)) return e(t);
              if (i > 0) {
                for (t -= n, s = 0; s < r.length; s++)
                  if (r[s] >= t) return r[s];
                return r[s - 1];
              }
              for (s = r.length, t += n; s--; ) if (r[s] <= t) return r[s];
              return r[0];
            }
          : function (r, i, n) {
              void 0 === n && (n = 0.001);
              var s = e(r);
              return !i || Math.abs(s - r) < n || s - r < 0 == i < 0
                ? s
                : e(i < 0 ? r - t : r + t);
            };
      },
      sN = function (t, e, r, i) {
        return r.split(",").forEach(function (r) {
          return t(e, r, i);
        });
      },
      sD = function (t, e, r, i, n) {
        return t.addEventListener(e, r, { passive: !i, capture: !!n });
      },
      sL = function (t, e, r, i) {
        return t.removeEventListener(e, r, !!i);
      },
      sj = function (t, e, r) {
        (r = r && r.wheelHandler) && (t(e, "wheel", r), t(e, "touchmove", r));
      },
      sF = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal",
      },
      sI = { toggleActions: "play", anticipatePin: 0 },
      sY = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
      sB = function (t, e) {
        if (sl(t)) {
          var r = t.indexOf("="),
            i = ~r ? (t.charAt(r - 1) + 1) * parseFloat(t.substr(r + 1)) : 0;
          (~r &&
            (t.indexOf("%") > r && (i *= e / 100), (t = t.substr(0, r - 1))),
            (t =
              i +
              (t in sY
                ? sY[t] * e
                : ~t.indexOf("%")
                  ? (parseFloat(t) * e) / 100
                  : parseFloat(t) || 0)));
        }
        return t;
      },
      sX = function (t, e, r, i, n, s, o, a) {
        var l = n.startColor,
          u = n.endColor,
          c = n.fontSize,
          h = n.indent,
          f = n.fontWeight,
          p = n_.createElement("div"),
          d = sr(r) || "fixed" === i8(r, "pinType"),
          m = -1 !== t.indexOf("scroller"),
          g = d ? nx : r,
          v = -1 !== t.indexOf("start"),
          _ = v ? l : u,
          y =
            "border-color:" +
            _ +
            ";font-size:" +
            c +
            ";color:" +
            _ +
            ";font-weight:" +
            f +
            ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return (
          (y += "position:" + ((m || a) && d ? "fixed;" : "absolute;")),
          (m || a || !d) &&
            (y += (i === ns ? sg : sv) + ":" + (s + parseFloat(h)) + "px;"),
          o &&
            (y +=
              "box-sizing:border-box;text-align:left;width:" +
              o.offsetWidth +
              "px;"),
          (p._isStart = v),
          p.setAttribute(
            "class",
            "gsap-marker-" + t + (e ? " marker-" + e : ""),
          ),
          (p.style.cssText = y),
          (p.innerText = e || 0 === e ? t + "-" + e : t),
          g.children[0] ? g.insertBefore(p, g.children[0]) : g.appendChild(p),
          (p._offset = p["offset" + i.op.d2]),
          sW(p, 0, i, v),
          p
        );
      },
      sW = function (t, e, r, i) {
        var n = { display: "block" },
          s = r[i ? "os2" : "p2"],
          o = r[i ? "p2" : "os2"];
        ((t._isFlipped = i),
          (n[r.a + "Percent"] = i ? -100 : 0),
          (n[r.a] = i ? "1px" : 0),
          (n["border" + s + sk] = 1),
          (n["border" + o + sk] = 0),
          (n[r.p] = e + "px"),
          nm.set(t, n));
      },
      sH = [],
      sU = {},
      sq = function () {
        return n0() - n2 > 34 && (nG || (nG = requestAnimationFrame(or)));
      },
      sV = function () {
        (nj && nj.isPressed && !(nj.startX > nx.clientWidth)) ||
          (i1.cache++,
          nj ? nG || (nG = requestAnimationFrame(or)) : or(),
          n2 || sJ("scrollStart"),
          (n2 = n0()));
      },
      s$ = function () {
        ((nY = nv.innerWidth), (nI = nv.innerHeight));
      },
      sG = function (t) {
        (i1.cache++,
          (!0 === t ||
            (!nM &&
              !nL &&
              !n_.fullscreenElement &&
              !n_.webkitFullscreenElement &&
              (!nF ||
                nY !== nv.innerWidth ||
                Math.abs(nv.innerHeight - nI) > 0.25 * nv.innerHeight))) &&
            nw.restart(!0));
      },
      sQ = {},
      sZ = [],
      sK = function t() {
        return sL(o_, "scrollEnd", t) || s7(!0);
      },
      sJ = function (t) {
        return (
          (sQ[t] &&
            sQ[t].map(function (t) {
              return t();
            })) ||
          sZ
        );
      },
      s0 = [],
      s1 = function (t) {
        for (var e = 0; e < s0.length; e += 5)
          (!t || (s0[e + 4] && s0[e + 4].query === t)) &&
            ((s0[e].style.cssText = s0[e + 1]),
            s0[e].getBBox && s0[e].setAttribute("transform", s0[e + 2] || ""),
            (s0[e + 3].uncache = 1));
      },
      s2 = function () {
        return i1.forEach(function (t) {
          return su(t) && ++t.cacheID && (t.rec = t());
        });
      },
      s5 = function (t, e) {
        var r;
        for (nP = 0; nP < sH.length; nP++)
          (r = sH[nP]) &&
            (!e || r._ctx === e) &&
            (t ? r.kill(1) : r.revert(!0, !0));
        ((nq = !0), e && s1(e), e || sJ("revert"));
      },
      s3 = function (t, e) {
        (i1.cache++,
          (e || !nQ) &&
            i1.forEach(function (t) {
              return su(t) && t.cacheID++ && (t.rec = 0);
            }),
          sl(t) && (nv.history.scrollRestoration = nW = t));
      },
      s4 = 0,
      s8 = function () {
        if (nZ !== s4) {
          var t = (nZ = s4);
          requestAnimationFrame(function () {
            return t === s4 && s7(!0);
          });
        }
      },
      s9 = function () {
        (nx.appendChild(nH),
          (nU = (!nj && nH.offsetHeight) || nv.innerHeight),
          nx.removeChild(nH));
      },
      s6 = function (t) {
        return nT(
          ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
        ).forEach(function (e) {
          return (e.style.display = t ? "none" : "block");
        });
      },
      s7 = function (t, e) {
        if (
          ((ny = n_.documentElement),
          (nx = n_.body),
          (nb = [nv, n_, ny, nx]),
          n2 && !t && !nq)
        )
          return void sD(o_, "scrollEnd", sK);
        (s9(), (nQ = o_.isRefreshing = !0), nq || s2());
        var r = sJ("refreshInit");
        (nN && o_.sort(),
          e || s5(),
          i1.forEach(function (t) {
            su(t) &&
              (t.smooth && (t.target.style.scrollBehavior = "auto"), t(0));
          }),
          sH.slice(0).forEach(function (t) {
            return t.refresh();
          }),
          (nq = !1),
          sH.forEach(function (t) {
            if (t._subPinOffset && t.pin) {
              var e = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
                r = t.pin[e];
              (t.revert(!0, 1), t.adjustPinSpacing(t.pin[e] - r), t.refresh());
            }
          }),
          (nV = 1),
          s6(!0),
          sH.forEach(function (t) {
            var e = so(t.scroller, t._dir),
              r = "max" === t.vars.end || (t._endClamp && t.end > e),
              i = t._startClamp && t.start >= e;
            (r || i) &&
              t.setPositions(
                i ? e - 1 : t.start,
                r ? Math.max(i ? e : t.start + 1, e) : t.end,
                !0,
              );
          }),
          s6(!1),
          (nV = 0),
          r.forEach(function (t) {
            return t && t.render && t.render(-1);
          }),
          i1.forEach(function (t) {
            su(t) &&
              (t.smooth &&
                requestAnimationFrame(function () {
                  return (t.target.style.scrollBehavior = "smooth");
                }),
              t.rec && t(t.rec));
          }),
          s3(nW, 1),
          nw.pause(),
          s4++,
          (nQ = 2),
          or(2),
          sH.forEach(function (t) {
            return su(t.vars.onRefresh) && t.vars.onRefresh(t);
          }),
          (nQ = o_.isRefreshing = !1),
          sJ("refresh"));
      },
      ot = 0,
      oe = 1,
      or = function (t) {
        if (2 === t || (!nQ && !nq)) {
          ((o_.isUpdating = !0), nK && nK.update(0));
          var e = sH.length,
            r = n0(),
            i = r - n1 >= 50,
            n = e && sH[0].scroll();
          if (
            ((oe = ot > n ? -1 : 1),
            nQ || (ot = n),
            i &&
              (n2 && !nO && r - n2 > 200 && ((n2 = 0), sJ("scrollEnd")),
              (nk = n1),
              (n1 = r)),
            oe < 0)
          ) {
            for (nP = e; nP-- > 0; ) sH[nP] && sH[nP].update(0, i);
            oe = 1;
          } else for (nP = 0; nP < e; nP++) sH[nP] && sH[nP].update(0, i);
          o_.isUpdating = !1;
        }
        nG = 0;
      },
      oi = [
        sm,
        "top",
        sv,
        sg,
        sS + sw,
        sS + sx,
        sS + "Top",
        sS + sb,
        "display",
        "flexShrink",
        "float",
        "zIndex",
        "gridColumnStart",
        "gridColumnEnd",
        "gridRowStart",
        "gridRowEnd",
        "gridArea",
        "justifySelf",
        "alignSelf",
        "placeSelf",
        "order",
      ],
      on = oi.concat([
        s_,
        sy,
        "boxSizing",
        "max" + sk,
        "max" + sE,
        "position",
        sS,
        sT,
        sT + "Top",
        sT + sx,
        sT + sw,
        sT + sb,
      ]),
      os = function (t, e, r) {
        ol(r);
        var i = t._gsap;
        if (i.spacerIsNative) ol(i.spacerState);
        else if (t._gsap.swappedIn) {
          var n = e.parentNode;
          n && (n.insertBefore(t, e), n.removeChild(e));
        }
        t._gsap.swappedIn = !1;
      },
      oo = function (t, e, r, i) {
        if (!t._gsap.swappedIn) {
          for (var n, s = oi.length, o = e.style, a = t.style; s--; )
            o[(n = oi[s])] = r[n];
          ((o.position = "absolute" === r.position ? "absolute" : "relative"),
            "inline" === r.display && (o.display = "inline-block"),
            (a[sv] = a[sg] = "auto"),
            (o.flexBasis = r.flexBasis || "auto"),
            (o.overflow = "visible"),
            (o.boxSizing = "border-box"),
            (o[s_] = sA(t, nn) + "px"),
            (o[sy] = sA(t, ns) + "px"),
            (o[sT] = a[sS] = a.top = a[sm] = "0"),
            ol(i),
            (a[s_] = a["max" + sk] = r[s_]),
            (a[sy] = a["max" + sE] = r[sy]),
            (a[sT] = r[sT]),
            t.parentNode !== e &&
              (t.parentNode.insertBefore(e, t), e.appendChild(t)),
            (t._gsap.swappedIn = !0));
        }
      },
      oa = /([A-Z])/g,
      ol = function (t) {
        if (t) {
          var e,
            r,
            i = t.t.style,
            n = t.length,
            s = 0;
          for ((t.t._gsap || nm.core.getCache(t.t)).uncache = 1; s < n; s += 2)
            ((r = t[s + 1]),
              (e = t[s]),
              r
                ? (i[e] = r)
                : i[e] && i.removeProperty(e.replace(oa, "-$1").toLowerCase()));
        }
      },
      ou = function (t) {
        for (var e = on.length, r = t.style, i = [], n = 0; n < e; n++)
          i.push(on[n], r[on[n]]);
        return ((i.t = t), i);
      },
      oc = function (t, e, r) {
        for (var i, n = [], s = t.length, o = 8 * !!r; o < s; o += 2)
          ((i = t[o]), n.push(i, i in e ? e[i] : t[o + 1]));
        return ((n.t = t.t), n);
      },
      oh = { left: 0, top: 0 },
      of = function (t, e, r, i, n, s, o, a, l, u, c, h, f, p) {
        (su(t) && (t = t(a)),
          sl(t) &&
            "max" === t.substr(0, 3) &&
            (t = h + ("=" === t.charAt(4) ? sB("0" + t.substr(3), r) : 0)));
        var d,
          m,
          g,
          v = f ? f.time() : 0;
        if ((f && f.seek(0), isNaN(t) || (t *= 1), sc(t)))
          (f &&
            (t = nm.utils.mapRange(
              f.scrollTrigger.start,
              f.scrollTrigger.end,
              0,
              h,
              t,
            )),
            o && sW(o, r, i, !0));
        else {
          su(e) && (e = e(a));
          var _,
            y,
            x,
            b,
            w = (t || "0").split(" ");
          ((_ = sP((g = no(e, a) || nx)) || {}).left ||
            _.top ||
            "none" !== sM(g).display ||
            ((b = g.style.display),
            (g.style.display = "block"),
            (_ = sP(g)),
            b ? (g.style.display = b) : g.style.removeProperty("display")),
            (y = sB(w[0], _[i.d])),
            (x = sB(w[1] || "0", r)),
            (t = _[i.p] - l[i.p] - u + y + n - x),
            o && sW(o, x, i, r - x < 20 || (o._isStart && x > 20)),
            (r -= r - x));
        }
        if ((p && ((a[p] = t || -0.001), t < 0 && (t = 0)), s)) {
          var T = t + r,
            S = s._isStart;
          ((d = "scroll" + i.d2),
            sW(
              s,
              T,
              i,
              (S && T > 20) ||
                (!S && (c ? Math.max(nx[d], ny[d]) : s.parentNode[d]) <= T + 1),
            ),
            c &&
              ((l = sP(o)),
              c && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + "px")));
        }
        return (
          f &&
            g &&
            ((d = sP(g)),
            f.seek(h),
            (m = sP(g)),
            (f._caScrollDist = d[i.p] - m[i.p]),
            (t = (t / f._caScrollDist) * h)),
          f && f.seek(v),
          f ? t : Math.round(t)
        );
      },
      op = /(webkit|moz|length|cssText|inset)/i,
      od = function (t, e, r, i) {
        if (t.parentNode !== e) {
          var n,
            s,
            o = t.style;
          if (e === nx) {
            for (n in ((t._stOrig = o.cssText), (s = sM(t))))
              +n ||
                op.test(n) ||
                !s[n] ||
                "string" != typeof o[n] ||
                "0" === n ||
                (o[n] = s[n]);
            ((o.top = r), (o.left = i));
          } else o.cssText = t._stOrig;
          ((nm.core.getCache(t).uncache = 1), e.appendChild(t));
        }
      },
      om = function (t, e, r) {
        var i = e,
          n = i;
        return function (e) {
          var s = Math.round(t());
          return (
            s !== i &&
              s !== n &&
              Math.abs(s - i) > 3 &&
              Math.abs(s - n) > 3 &&
              ((e = s), r && r()),
            (n = i),
            (i = Math.round(e))
          );
        };
      },
      og = function (t, e, r) {
        var i = {};
        ((i[e.p] = "+=" + r), nm.set(t, i));
      },
      ov = function (t, e) {
        var r = nl(t, e),
          i = "_scroll" + e.p2,
          n = function e(n, s, o, a, l) {
            var u = e.tween,
              c = s.onComplete,
              h = {};
            o = o || r();
            var f = om(r, o, function () {
              (u.kill(), (e.tween = 0));
            });
            return (
              (l = (a && l) || 0),
              (a = a || n - o),
              u && u.kill(),
              (s[i] = n),
              (s.inherit = !1),
              (s.modifiers = h),
              (h[i] = function () {
                return f(o + a * u.ratio + l * u.ratio * u.ratio);
              }),
              (s.onUpdate = function () {
                (i1.cache++, e.tween && or());
              }),
              (s.onComplete = function () {
                ((e.tween = 0), c && c.call(u));
              }),
              (u = e.tween = nm.to(t, s))
            );
          };
        return (
          (t[i] = r),
          (r.wheelHandler = function () {
            return n.tween && n.tween.kill() && (n.tween = 0);
          }),
          sD(t, "wheel", r.wheelHandler),
          o_.isTouch && sD(t, "touchmove", r.wheelHandler),
          n
        );
      },
      o_ = (function () {
        function t(e, r) {
          (ng ||
            t.register(nm) ||
            console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
            nX(this),
            this.init(e, r));
        }
        return (
          (t.prototype.init = function (e, r) {
            if (
              ((this.progress = this.start = 0),
              this.vars && this.kill(!0, !0),
              !n5)
            ) {
              this.update = this.refresh = this.kill = n6;
              return;
            }
            var i,
              n,
              s,
              o,
              a,
              l,
              u,
              c,
              h,
              f,
              p,
              d,
              m,
              g,
              v,
              _,
              y,
              x,
              b,
              w,
              T,
              S,
              k,
              E,
              M,
              O,
              C,
              P,
              A,
              R,
              z,
              N,
              D,
              L,
              j,
              F,
              I,
              Y,
              B,
              X,
              W,
              H = (e = sC(
                sl(e) || sc(e) || e.nodeType ? { trigger: e } : e,
                sI,
              )),
              U = H.onUpdate,
              q = H.toggleClass,
              V = H.id,
              $ = H.onToggle,
              G = H.onRefresh,
              Q = H.scrub,
              Z = H.trigger,
              K = H.pin,
              J = H.pinSpacing,
              tt = H.invalidateOnRefresh,
              te = H.anticipatePin,
              tr = H.onScrubComplete,
              ti = H.onSnapComplete,
              tn = H.once,
              ts = H.snap,
              to = H.pinReparent,
              ta = H.pinSpacer,
              tl = H.containerAnimation,
              tu = H.fastScrollEnd,
              tc = H.preventOverlaps,
              th =
                e.horizontal || (e.containerAnimation && !1 !== e.horizontal)
                  ? nn
                  : ns,
              tf = !Q && 0 !== Q,
              tp = no(e.scroller || nv),
              td = nm.core.getCache(tp),
              tm = sr(tp),
              tg =
                ("pinType" in e
                  ? e.pinType
                  : i8(tp, "pinType") || (tm && "fixed")) === "fixed",
              tv = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
              t_ = tf && e.toggleActions.split(" "),
              ty = "markers" in e ? e.markers : sI.markers,
              tx = tm ? 0 : parseFloat(sM(tp)["border" + th.p2 + sk]) || 0,
              tb = this,
              tw =
                e.onRefreshInit &&
                function () {
                  return e.onRefreshInit(tb);
                },
              tT = ss(tp, tm, th),
              tS =
                !tm || ~i2.indexOf(tp)
                  ? sn(tp)
                  : function () {
                      return oh;
                    },
              tk = 0,
              tE = 0,
              tM = 0,
              tO = nl(tp, th);
            if (
              ((tb._startClamp = tb._endClamp = !1),
              (tb._dir = th),
              (te *= 45),
              (tb.scroller = tp),
              (tb.scroll = tl ? tl.time.bind(tl) : tO),
              (l = tO()),
              (tb.vars = e),
              (r = r || e.animation),
              "refreshPriority" in e &&
                ((nN = 1), -9999 === e.refreshPriority && (nK = tb)),
              (td.tweenScroll = td.tweenScroll || {
                top: ov(tp, ns),
                left: ov(tp, nn),
              }),
              (tb.tweenTo = s = td.tweenScroll[th.p]),
              (tb.scrubDuration = function (t) {
                (j = sc(t) && t)
                  ? L
                    ? L.duration(t)
                    : (L = nm.to(r, {
                        ease: "expo",
                        totalProgress: "+=0",
                        inherit: !1,
                        duration: j,
                        paused: !0,
                        onComplete: function () {
                          return tr && tr(tb);
                        },
                      }))
                  : (L && L.progress(1).kill(), (L = 0));
              }),
              r &&
                ((r.vars.lazy = !1),
                (r._initted && !tb.isReverted) ||
                  (!1 !== r.vars.immediateRender &&
                    !1 !== e.immediateRender &&
                    r.duration() &&
                    r.render(0, !0, !0)),
                (tb.animation = r.pause()),
                (r.scrollTrigger = tb),
                tb.scrubDuration(Q),
                (N = 0),
                V || (V = r.vars.id)),
              ts &&
                ((!sh(ts) || ts.push) && (ts = { snapTo: ts }),
                "scrollBehavior" in nx.style &&
                  nm.set(tm ? [nx, ny] : tp, { scrollBehavior: "auto" }),
                i1.forEach(function (t) {
                  return (
                    su(t) &&
                    t.target === (tm ? n_.scrollingElement || ny : tp) &&
                    (t.smooth = !1)
                  );
                }),
                (a = su(ts.snapTo)
                  ? ts.snapTo
                  : "labels" === ts.snapTo
                    ? ((i = r),
                      function (t) {
                        return nm.utils.snap(sR(i), t);
                      })
                    : "labelsDirectional" === ts.snapTo
                      ? ((n = r),
                        function (t, e) {
                          return sz(sR(n))(t, e.direction);
                        })
                      : !1 !== ts.directional
                        ? function (t, e) {
                            return sz(ts.snapTo)(
                              t,
                              n0() - tE < 500 ? 0 : e.direction,
                            );
                          }
                        : nm.utils.snap(ts.snapTo)),
                (F = sh((F = ts.duration || { min: 0.1, max: 2 }))
                  ? nS(F.min, F.max)
                  : nS(F, F)),
                (I = nm
                  .delayedCall(ts.delay || j / 2 || 0.1, function () {
                    var t = tO(),
                      e = n0() - tE < 500,
                      i = s.tween;
                    if (
                      (e || 10 > Math.abs(tb.getVelocity())) &&
                      !i &&
                      !nO &&
                      tk !== t
                    ) {
                      var n,
                        o,
                        l = (t - c) / _,
                        u = r && !tf ? r.totalProgress() : l,
                        f = e ? 0 : ((u - D) / (n0() - nk)) * 1e3 || 0,
                        p = nm.utils.clamp(-l, 1 - l, (sd(f / 2) * f) / 0.185),
                        d = l + (!1 === ts.inertia ? 0 : p),
                        m = ts,
                        g = m.onStart,
                        v = m.onInterrupt,
                        y = m.onComplete;
                      if (
                        (sc((n = a(d, tb))) || (n = d),
                        (o = Math.max(0, Math.round(c + n * _))),
                        t <= h && t >= c && o !== t)
                      ) {
                        if (i && !i._initted && i.data <= sd(o - t)) return;
                        (!1 === ts.inertia && (p = n - l),
                          s(
                            o,
                            {
                              duration: F(
                                sd(
                                  (0.185 * Math.max(sd(d - u), sd(n - u))) /
                                    f /
                                    0.05 || 0,
                                ),
                              ),
                              ease: ts.ease || "power3",
                              data: sd(o - t),
                              onInterrupt: function () {
                                return I.restart(!0) && v && v(tb);
                              },
                              onComplete: function () {
                                (tb.update(),
                                  (tk = tO()),
                                  r &&
                                    !tf &&
                                    (L
                                      ? L.resetTo(
                                          "totalProgress",
                                          n,
                                          r._tTime / r._tDur,
                                        )
                                      : r.progress(n)),
                                  (N = D =
                                    r && !tf ? r.totalProgress() : tb.progress),
                                  ti && ti(tb),
                                  y && y(tb));
                              },
                            },
                            t,
                            p * _,
                            o - t - p * _,
                          ),
                          g && g(tb, s.tween));
                      }
                    } else tb.isActive && tk !== t && I.restart(!0);
                  })
                  .pause())),
              V && (sU[V] = tb),
              (W =
                (Z = tb.trigger = no(Z || (!0 !== K && K))) &&
                Z._gsap &&
                Z._gsap.stRevert) && (W = W(tb)),
              (K = !0 === K ? Z : no(K)),
              sl(q) && (q = { targets: Z, className: q }),
              K &&
                (!1 === J ||
                  J === sS ||
                  (J =
                    (!!J ||
                      !K.parentNode ||
                      !K.parentNode.style ||
                      "flex" !== sM(K.parentNode).display) &&
                    sT),
                (tb.pin = K),
                (o = nm.core.getCache(K)).spacer
                  ? (y = o.pinState)
                  : (ta &&
                      ((ta = no(ta)) &&
                        !ta.nodeType &&
                        (ta = ta.current || ta.nativeElement),
                      (o.spacerIsNative = !!ta),
                      ta && (o.spacerState = ou(ta))),
                    (o.spacer = w = ta || n_.createElement("div")),
                    w.classList.add("pin-spacer"),
                    V && w.classList.add("pin-spacer-" + V),
                    (o.pinState = y = ou(K))),
                !1 !== e.force3D && nm.set(K, { force3D: !0 }),
                (tb.spacer = w = o.spacer),
                (O = (z = sM(K))[J + th.os2]),
                (S = nm.getProperty(K)),
                (k = nm.quickSetter(K, th.a, "px")),
                oo(K, w, z),
                (b = ou(K))),
              ty)
            ) {
              ((g = sh(ty) ? sC(ty, sF) : sF),
                (d = sX("scroller-start", V, tp, th, g, 0)),
                (m = sX("scroller-end", V, tp, th, g, 0, d)),
                (T = d["offset" + th.op.d2]));
              var tC = no(i8(tp, "content") || tp);
              ((f = this.markerStart = sX("start", V, tC, th, g, T, 0, tl)),
                (p = this.markerEnd = sX("end", V, tC, th, g, T, 0, tl)),
                tl && (X = nm.quickSetter([f, p], th.a, "px")),
                tg ||
                  (i2.length && !0 === i8(tp, "fixedMarkers")) ||
                  (sO(tm ? nx : tp),
                  nm.set([d, m], { force3D: !0 }),
                  (P = nm.quickSetter(d, th.a, "px")),
                  (R = nm.quickSetter(m, th.a, "px"))));
            }
            if (tl) {
              var tP = tl.vars.onUpdate,
                tA = tl.vars.onUpdateParams;
              tl.eventCallback("onUpdate", function () {
                (tb.update(0, 0, 1), tP && tP.apply(tl, tA || []));
              });
            }
            if (
              ((tb.previous = function () {
                return sH[sH.indexOf(tb) - 1];
              }),
              (tb.next = function () {
                return sH[sH.indexOf(tb) + 1];
              }),
              (tb.revert = function (t, e) {
                if (!e) return tb.kill(!0);
                var i = !1 !== t || !tb.enabled,
                  n = nM;
                i !== tb.isReverted &&
                  (i &&
                    ((Y = Math.max(tO(), tb.scroll.rec || 0)),
                    (tM = tb.progress),
                    (B = r && r.progress())),
                  f &&
                    [f, p, d, m].forEach(function (t) {
                      return (t.style.display = i ? "none" : "block");
                    }),
                  i && ((nM = tb), tb.update(i)),
                  !K ||
                    (to && tb.isActive) ||
                    (i ? os(K, w, y) : oo(K, w, sM(K), C)),
                  i || tb.update(i),
                  (nM = n),
                  (tb.isReverted = i));
              }),
              (tb.refresh = function (i, n, o, a) {
                if ((!nM && tb.enabled) || n) {
                  if (K && i && n2) return void sD(t, "scrollEnd", sK);
                  (!nQ && tw && tw(tb),
                    (nM = tb),
                    s.tween && !o && (s.tween.kill(), (s.tween = 0)),
                    L && L.pause(),
                    tt &&
                      r &&
                      (r.revert({ kill: !1 }).invalidate(),
                      r.getChildren
                        ? r.getChildren(!0, !0, !1).forEach(function (t) {
                            return (
                              t.vars.immediateRender && t.render(0, !0, !0)
                            );
                          })
                        : r.vars.immediateRender && r.render(0, !0, !0)),
                    tb.isReverted || tb.revert(!0, !0),
                    (tb._subPinOffset = !1));
                  var g,
                    T,
                    k,
                    O,
                    P,
                    R,
                    z,
                    N,
                    D,
                    j,
                    F,
                    X,
                    W,
                    H = tT(),
                    U = tS(),
                    q = tl ? tl.duration() : so(tp, th),
                    V = _ <= 0.01 || !_,
                    $ = 0,
                    Q = a || 0,
                    te = sh(o) ? o.end : e.end,
                    tr = e.endTrigger || Z,
                    ti = sh(o)
                      ? o.start
                      : e.start ||
                        (0 !== e.start && Z ? (K ? "0 0" : "0 100%") : 0),
                    tn = (tb.pinnedContainer =
                      e.pinnedContainer && no(e.pinnedContainer, tb)),
                    ts = (Z && Math.max(0, sH.indexOf(tb))) || 0,
                    ta = ts;
                  for (
                    ty &&
                    sh(o) &&
                    ((X = nm.getProperty(d, th.p)),
                    (W = nm.getProperty(m, th.p)));
                    ta-- > 0;
                  )
                    ((R = sH[ta]).end || R.refresh(0, 1) || (nM = tb),
                      (z = R.pin) &&
                        (z === Z || z === K || z === tn) &&
                        !R.isReverted &&
                        (j || (j = []), j.unshift(R), R.revert(!0, !0)),
                      R !== sH[ta] && (ts--, ta--));
                  for (
                    su(ti) && (ti = ti(tb)),
                      c =
                        of(
                          (ti = n3(ti, "start", tb)),
                          Z,
                          H,
                          th,
                          tO(),
                          f,
                          d,
                          tb,
                          U,
                          tx,
                          tg,
                          q,
                          tl,
                          tb._startClamp && "_startClamp",
                        ) || (K ? -0.001 : 0),
                      su(te) && (te = te(tb)),
                      sl(te) &&
                        !te.indexOf("+=") &&
                        (~te.indexOf(" ")
                          ? (te = (sl(ti) ? ti.split(" ")[0] : "") + te)
                          : (($ = sB(te.substr(2), H)),
                            (te = sl(ti)
                              ? ti
                              : (tl
                                  ? nm.utils.mapRange(
                                      0,
                                      tl.duration(),
                                      tl.scrollTrigger.start,
                                      tl.scrollTrigger.end,
                                      c,
                                    )
                                  : c) + $),
                            (tr = Z))),
                      te = n3(te, "end", tb),
                      h =
                        Math.max(
                          c,
                          of(
                            te || (tr ? "100% 0" : q),
                            tr,
                            H,
                            th,
                            tO() + $,
                            p,
                            m,
                            tb,
                            U,
                            tx,
                            tg,
                            q,
                            tl,
                            tb._endClamp && "_endClamp",
                          ),
                        ) || -0.001,
                      $ = 0,
                      ta = ts;
                    ta--;
                  )
                    (z = (R = sH[ta] || {}).pin) &&
                      R.start - R._pinPush <= c &&
                      !tl &&
                      R.end > 0 &&
                      ((g =
                        R.end -
                        (tb._startClamp ? Math.max(0, R.start) : R.start)),
                      ((z === Z && R.start - R._pinPush < c) || z === tn) &&
                        isNaN(ti) &&
                        ($ += g * (1 - R.progress)),
                      z === K && (Q += g));
                  if (
                    ((c += $),
                    (h += $),
                    tb._startClamp && (tb._startClamp += $),
                    tb._endClamp &&
                      !nQ &&
                      ((tb._endClamp = h || -0.001),
                      (h = Math.min(h, so(tp, th)))),
                    (_ = h - c || ((c -= 0.01) && 0.001)),
                    V &&
                      (tM = nm.utils.clamp(0, 1, nm.utils.normalize(c, h, Y))),
                    (tb._pinPush = Q),
                    f &&
                      $ &&
                      (((g = {})[th.a] = "+=" + $),
                      tn && (g[th.p] = "-=" + tO()),
                      nm.set([f, p], g)),
                    K && !(nV && tb.end >= so(tp, th)))
                  )
                    ((g = sM(K)),
                      (O = th === ns),
                      (k = tO()),
                      (E = parseFloat(S(th.a)) + Q),
                      !q &&
                        h > 1 &&
                        ((F = {
                          style: (F = (tm ? n_.scrollingElement || ny : tp)
                            .style),
                          value: F["overflow" + th.a.toUpperCase()],
                        }),
                        tm &&
                          "scroll" !==
                            sM(nx)["overflow" + th.a.toUpperCase()] &&
                          (F.style["overflow" + th.a.toUpperCase()] =
                            "scroll")),
                      oo(K, w, g),
                      (b = ou(K)),
                      (T = sP(K, !0)),
                      (N = tg && nl(tp, O ? nn : ns)()),
                      J
                        ? (((C = [J + th.os2, _ + Q + "px"]).t = w),
                          (ta = J === sT ? sA(K, th) + _ + Q : 0) &&
                            (C.push(th.d, ta + "px"),
                            "auto" !== w.style.flexBasis &&
                              (w.style.flexBasis = ta + "px")),
                          ol(C),
                          tn &&
                            sH.forEach(function (t) {
                              t.pin === tn &&
                                !1 !== t.vars.pinSpacing &&
                                (t._subPinOffset = !0);
                            }),
                          tg && tO(Y))
                        : (ta = sA(K, th)) &&
                          "auto" !== w.style.flexBasis &&
                          (w.style.flexBasis = ta + "px"),
                      tg &&
                        (((P = {
                          top: T.top + (O ? k - c : N) + "px",
                          left: T.left + (O ? N : k - c) + "px",
                          boxSizing: "border-box",
                          position: "fixed",
                        })[s_] = P["max" + sk] =
                          Math.ceil(T.width) + "px"),
                        (P[sy] = P["max" + sE] = Math.ceil(T.height) + "px"),
                        (P[sS] =
                          P[sS + "Top"] =
                          P[sS + sx] =
                          P[sS + sw] =
                          P[sS + sb] =
                            "0"),
                        (P[sT] = g[sT]),
                        (P[sT + "Top"] = g[sT + "Top"]),
                        (P[sT + sx] = g[sT + sx]),
                        (P[sT + sw] = g[sT + sw]),
                        (P[sT + sb] = g[sT + sb]),
                        (x = oc(y, P, to)),
                        nQ && tO(0)),
                      r
                        ? ((D = r._initted),
                          nD(1),
                          r.render(r.duration(), !0, !0),
                          (M = S(th.a) - E + _ + Q),
                          (A = Math.abs(_ - M) > 1),
                          tg && A && x.splice(x.length - 2, 2),
                          r.render(0, !0, !0),
                          D || r.invalidate(!0),
                          r.parent || r.totalTime(r.totalTime()),
                          nD(0))
                        : (M = _),
                      F &&
                        (F.value
                          ? (F.style["overflow" + th.a.toUpperCase()] = F.value)
                          : F.style.removeProperty("overflow-" + th.a)));
                  else if (Z && tO() && !tl)
                    for (T = Z.parentNode; T && T !== nx; )
                      (T._pinOffset &&
                        ((c -= T._pinOffset), (h -= T._pinOffset)),
                        (T = T.parentNode));
                  (j &&
                    j.forEach(function (t) {
                      return t.revert(!1, !0);
                    }),
                    (tb.start = c),
                    (tb.end = h),
                    (l = u = nQ ? Y : tO()),
                    tl || nQ || (l < Y && tO(Y), (tb.scroll.rec = 0)),
                    tb.revert(!1, !0),
                    (tE = n0()),
                    I && ((tk = -1), I.restart(!0)),
                    (nM = 0),
                    r &&
                      tf &&
                      (r._initted || B) &&
                      r.progress() !== B &&
                      r.progress(B || 0, !0).render(r.time(), !0, !0),
                    (V ||
                      tM !== tb.progress ||
                      tl ||
                      tt ||
                      (r && !r._initted)) &&
                      (r &&
                        !tf &&
                        (r._initted || tM || !1 !== r.vars.immediateRender) &&
                        r.totalProgress(
                          tl && c < -0.001 && !tM
                            ? nm.utils.normalize(c, h, 0)
                            : tM,
                          !0,
                        ),
                      (tb.progress = V || (l - c) / _ === tM ? 0 : tM)),
                    K && J && (w._pinOffset = Math.round(tb.progress * M)),
                    L && L.invalidate(),
                    isNaN(X) ||
                      ((X -= nm.getProperty(d, th.p)),
                      (W -= nm.getProperty(m, th.p)),
                      og(d, th, X),
                      og(f, th, X - (a || 0)),
                      og(m, th, W),
                      og(p, th, W - (a || 0))),
                    V && !nQ && tb.update(),
                    !G || nQ || v || ((v = !0), G(tb), (v = !1)));
                }
              }),
              (tb.getVelocity = function () {
                return ((tO() - u) / (n0() - nk)) * 1e3 || 0;
              }),
              (tb.endAnimation = function () {
                (sf(tb.callbackAnimation),
                  r &&
                    (L
                      ? L.progress(1)
                      : r.paused()
                        ? tf || sf(r, tb.direction < 0, 1)
                        : sf(r, r.reversed())));
              }),
              (tb.labelToScroll = function (t) {
                return (
                  (r &&
                    r.labels &&
                    (c || tb.refresh() || c) +
                      (r.labels[t] / r.duration()) * _) ||
                  0
                );
              }),
              (tb.getTrailing = function (t) {
                var e = sH.indexOf(tb),
                  r =
                    tb.direction > 0
                      ? sH.slice(0, e).reverse()
                      : sH.slice(e + 1);
                return (
                  sl(t)
                    ? r.filter(function (e) {
                        return e.vars.preventOverlaps === t;
                      })
                    : r
                ).filter(function (t) {
                  return tb.direction > 0 ? t.end <= c : t.start >= h;
                });
              }),
              (tb.update = function (t, e, i) {
                if (!tl || i || t) {
                  var n,
                    o,
                    a,
                    f,
                    p,
                    m,
                    g,
                    v = !0 === nQ ? Y : tb.scroll(),
                    y = t ? 0 : (v - c) / _,
                    T = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                    S = tb.progress;
                  if (
                    (e &&
                      ((u = l),
                      (l = tl ? tO() : v),
                      ts && ((D = N), (N = r && !tf ? r.totalProgress() : T))),
                    te &&
                      K &&
                      !nM &&
                      !nJ &&
                      n2 &&
                      (!T && c < v + ((v - u) / (n0() - nk)) * te
                        ? (T = 1e-4)
                        : 1 === T &&
                          h > v + ((v - u) / (n0() - nk)) * te &&
                          (T = 0.9999)),
                    T !== S && tb.enabled)
                  ) {
                    if (
                      ((f =
                        (p =
                          (n = tb.isActive = !!T && T < 1) != (!!S && S < 1)) ||
                        !!T != !!S),
                      (tb.direction = T > S ? 1 : -1),
                      (tb.progress = T),
                      f &&
                        !nM &&
                        ((o = T && !S ? 0 : 1 === T ? 1 : 1 === S ? 2 : 3),
                        tf &&
                          ((a =
                            (!p && "none" !== t_[o + 1] && t_[o + 1]) || t_[o]),
                          (g =
                            r &&
                            ("complete" === a || "reset" === a || a in r)))),
                      tc &&
                        (p || g) &&
                        (g || Q || !r) &&
                        (su(tc)
                          ? tc(tb)
                          : tb.getTrailing(tc).forEach(function (t) {
                              return t.endAnimation();
                            })),
                      !tf &&
                        (!L || nM || nJ
                          ? r && r.totalProgress(T, !!(nM && (tE || t)))
                          : (L._dp._time - L._start !== L._time &&
                              L.render(L._dp._time - L._start),
                            L.resetTo
                              ? L.resetTo(
                                  "totalProgress",
                                  T,
                                  r._tTime / r._tDur,
                                )
                              : ((L.vars.totalProgress = T),
                                L.invalidate().restart()))),
                      K)
                    )
                      if ((t && J && (w.style[J + th.os2] = O), tg)) {
                        if (f) {
                          if (
                            ((m =
                              !t && T > S && h + 1 > v && v + 1 >= so(tp, th)),
                            to)
                          )
                            if (!t && (n || m)) {
                              var C = sP(K, !0),
                                z = v - c;
                              od(
                                K,
                                nx,
                                C.top + (th === ns ? z : 0) + "px",
                                C.left + (th === ns ? 0 : z) + "px",
                              );
                            } else od(K, w);
                          (ol(n || m ? x : b),
                            (A && T < 1 && n) || k(E + (1 !== T || m ? 0 : M)));
                        }
                      } else k(n7(E + M * T));
                    (!ts || s.tween || nM || nJ || I.restart(!0),
                      q &&
                        (p || (tn && T && (T < 1 || !n$))) &&
                        nT(q.targets).forEach(function (t) {
                          return t.classList[n || tn ? "add" : "remove"](
                            q.className,
                          );
                        }),
                      !U || tf || t || U(tb),
                      f && !nM
                        ? (tf &&
                            (g &&
                              ("complete" === a
                                ? r.pause().totalProgress(1)
                                : "reset" === a
                                  ? r.restart(!0).pause()
                                  : "restart" === a
                                    ? r.restart(!0)
                                    : r[a]()),
                            U && U(tb)),
                          (p || !n$) &&
                            ($ && p && sp(tb, $),
                            tv[o] && sp(tb, tv[o]),
                            tn && (1 === T ? tb.kill(!1, 1) : (tv[o] = 0)),
                            !p && tv[(o = 1 === T ? 1 : 3)] && sp(tb, tv[o])),
                          tu &&
                            !n &&
                            Math.abs(tb.getVelocity()) > (sc(tu) ? tu : 2500) &&
                            (sf(tb.callbackAnimation),
                            L
                              ? L.progress(1)
                              : sf(r, "reverse" === a ? 1 : !T, 1)))
                        : tf && U && !nM && U(tb));
                  }
                  if (R) {
                    var j = tl
                      ? (v / tl.duration()) * (tl._caScrollDist || 0)
                      : v;
                    (P(j + +!!d._isFlipped), R(j));
                  }
                  X && X((-v / tl.duration()) * (tl._caScrollDist || 0));
                }
              }),
              (tb.enable = function (e, r) {
                tb.enabled ||
                  ((tb.enabled = !0),
                  sD(tp, "resize", sG),
                  tm || sD(tp, "scroll", sV),
                  tw && sD(t, "refreshInit", tw),
                  !1 !== e && ((tb.progress = tM = 0), (l = u = tk = tO())),
                  !1 !== r && tb.refresh());
              }),
              (tb.getTween = function (t) {
                return t && s ? s.tween : L;
              }),
              (tb.setPositions = function (t, e, r, i) {
                if (tl) {
                  var n = tl.scrollTrigger,
                    s = tl.duration(),
                    o = n.end - n.start;
                  ((t = n.start + (o * t) / s), (e = n.start + (o * e) / s));
                }
                (tb.refresh(
                  !1,
                  !1,
                  {
                    start: n4(t, r && !!tb._startClamp),
                    end: n4(e, r && !!tb._endClamp),
                  },
                  i,
                ),
                  tb.update());
              }),
              (tb.adjustPinSpacing = function (t) {
                if (C && t) {
                  var e = C.indexOf(th.d) + 1;
                  ((C[e] = parseFloat(C[e]) + t + "px"),
                    (C[1] = parseFloat(C[1]) + t + "px"),
                    ol(C));
                }
              }),
              (tb.disable = function (e, r) {
                if (
                  (!1 !== e && tb.revert(!0, !0),
                  tb.enabled &&
                    ((tb.enabled = tb.isActive = !1),
                    r || (L && L.pause()),
                    (Y = 0),
                    o && (o.uncache = 1),
                    tw && sL(t, "refreshInit", tw),
                    I &&
                      (I.pause(), s.tween && s.tween.kill() && (s.tween = 0)),
                    !tm))
                ) {
                  for (var i = sH.length; i--; )
                    if (sH[i].scroller === tp && sH[i] !== tb) return;
                  (sL(tp, "resize", sG), tm || sL(tp, "scroll", sV));
                }
              }),
              (tb.kill = function (t, i) {
                (tb.disable(t, i), L && !i && L.kill(), V && delete sU[V]);
                var n = sH.indexOf(tb);
                (n >= 0 && sH.splice(n, 1),
                  n === nP && oe > 0 && nP--,
                  (n = 0),
                  sH.forEach(function (t) {
                    return t.scroller === tb.scroller && (n = 1);
                  }),
                  n || nQ || (tb.scroll.rec = 0),
                  r &&
                    ((r.scrollTrigger = null),
                    t && r.revert({ kill: !1 }),
                    i || r.kill()),
                  f &&
                    [f, p, d, m].forEach(function (t) {
                      return t.parentNode && t.parentNode.removeChild(t);
                    }),
                  nK === tb && (nK = 0),
                  K &&
                    (o && (o.uncache = 1),
                    (n = 0),
                    sH.forEach(function (t) {
                      return t.pin === K && n++;
                    }),
                    n || (o.spacer = 0)),
                  e.onKill && e.onKill(tb));
              }),
              sH.push(tb),
              tb.enable(!1, !1),
              W && W(tb),
              r && r.add && !_)
            ) {
              var tR = tb.update;
              ((tb.update = function () {
                ((tb.update = tR), i1.cache++, c || h || tb.refresh());
              }),
                nm.delayedCall(0.01, tb.update),
                (_ = 0.01),
                (c = h = 0));
            } else tb.refresh();
            K && s8();
          }),
          (t.register = function (e) {
            return (
              ng ||
                ((nm = e || se()),
                st() && window.document && t.enable(),
                (ng = n5)),
              ng
            );
          }),
          (t.defaults = function (t) {
            if (t) for (var e in t) sI[e] = t[e];
            return sI;
          }),
          (t.disable = function (t, e) {
            ((n5 = 0),
              sH.forEach(function (r) {
                return r[e ? "kill" : "disable"](t);
              }),
              sL(nv, "wheel", sV),
              sL(n_, "scroll", sV),
              clearInterval(nE),
              sL(n_, "touchcancel", n6),
              sL(nx, "touchstart", n6),
              sN(sL, n_, "pointerdown,touchstart,mousedown", n8),
              sN(sL, n_, "pointerup,touchend,mouseup", n9),
              nw.kill(),
              sa(sL));
            for (var r = 0; r < i1.length; r += 3)
              (sj(sL, i1[r], i1[r + 1]), sj(sL, i1[r], i1[r + 2]));
          }),
          (t.enable = function () {
            if (
              ((nv = window),
              (ny = (n_ = document).documentElement),
              (nx = n_.body),
              nm &&
                ((nT = nm.utils.toArray),
                (nS = nm.utils.clamp),
                (nX = nm.core.context || n6),
                (nD = nm.core.suppressOverwrites || n6),
                (nW = nv.history.scrollRestoration || "auto"),
                (ot = nv.pageYOffset || 0),
                nm.core.globals("ScrollTrigger", t),
                nx))
            ) {
              ((n5 = 1),
                ((nH = document.createElement("div")).style.height = "100vh"),
                (nH.style.position = "absolute"),
                s9(),
                (function t() {
                  return n5 && requestAnimationFrame(t);
                })(),
                nd.register(nm),
                (t.isTouch = nd.isTouch),
                (nB =
                  nd.isTouch &&
                  /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                (nF = 1 === nd.isTouch),
                sD(nv, "wheel", sV),
                (nb = [nv, n_, ny, nx]),
                nm.matchMedia
                  ? ((t.matchMedia = function (t) {
                      var e,
                        r = nm.matchMedia();
                      for (e in t) r.add(e, t[e]);
                      return r;
                    }),
                    nm.addEventListener("matchMediaInit", function () {
                      (s2(), s5());
                    }),
                    nm.addEventListener("matchMediaRevert", function () {
                      return s1();
                    }),
                    nm.addEventListener("matchMedia", function () {
                      (s7(0, 1), sJ("matchMedia"));
                    }),
                    nm.matchMedia().add("(orientation: portrait)", function () {
                      return (s$(), s$);
                    }))
                  : console.warn("Requires GSAP 3.11.0 or later"),
                s$(),
                sD(n_, "scroll", sV));
              var e,
                r,
                i = nx.hasAttribute("style"),
                n = nx.style,
                s = n.borderTopStyle,
                o = nm.core.Animation.prototype;
              for (
                o.revert ||
                  Object.defineProperty(o, "revert", {
                    value: function () {
                      return this.time(-0.01, !0);
                    },
                  }),
                  n.borderTopStyle = "solid",
                  ns.m = Math.round((e = sP(nx)).top + ns.sc()) || 0,
                  nn.m = Math.round(e.left + nn.sc()) || 0,
                  s
                    ? (n.borderTopStyle = s)
                    : n.removeProperty("border-top-style"),
                  i ||
                    (nx.setAttribute("style", ""), nx.removeAttribute("style")),
                  nE = setInterval(sq, 250),
                  nm.delayedCall(0.5, function () {
                    return (nJ = 0);
                  }),
                  sD(n_, "touchcancel", n6),
                  sD(nx, "touchstart", n6),
                  sN(sD, n_, "pointerdown,touchstart,mousedown", n8),
                  sN(sD, n_, "pointerup,touchend,mouseup", n9),
                  nC = nm.utils.checkPrefix("transform"),
                  on.push(nC),
                  ng = n0(),
                  nw = nm.delayedCall(0.2, s7).pause(),
                  nz = [
                    n_,
                    "visibilitychange",
                    function () {
                      var t = nv.innerWidth,
                        e = nv.innerHeight;
                      n_.hidden
                        ? ((nA = t), (nR = e))
                        : (nA !== t || nR !== e) && sG();
                    },
                    n_,
                    "DOMContentLoaded",
                    s7,
                    nv,
                    "load",
                    s7,
                    nv,
                    "resize",
                    sG,
                  ],
                  sa(sD),
                  sH.forEach(function (t) {
                    return t.enable(0, 1);
                  }),
                  r = 0;
                r < i1.length;
                r += 3
              )
                (sj(sL, i1[r], i1[r + 1]), sj(sL, i1[r], i1[r + 2]));
            }
          }),
          (t.config = function (e) {
            "limitCallbacks" in e && (n$ = !!e.limitCallbacks);
            var r = e.syncInterval;
            ((r && clearInterval(nE)) || ((nE = r) && setInterval(sq, r)),
              "ignoreMobileResize" in e &&
                (nF = 1 === t.isTouch && e.ignoreMobileResize),
              "autoRefreshEvents" in e &&
                (sa(sL) || sa(sD, e.autoRefreshEvents || "none"),
                (nL = -1 === (e.autoRefreshEvents + "").indexOf("resize"))));
          }),
          (t.scrollerProxy = function (t, e) {
            var r = no(t),
              i = i1.indexOf(r),
              n = sr(r);
            (~i && i1.splice(i, n ? 6 : 2),
              e && (n ? i2.unshift(nv, e, nx, e, ny, e) : i2.unshift(r, e)));
          }),
          (t.clearMatchMedia = function (t) {
            sH.forEach(function (e) {
              return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0);
            });
          }),
          (t.isInViewport = function (t, e, r) {
            var i = (sl(t) ? no(t) : t).getBoundingClientRect(),
              n = i[r ? s_ : sy] * e || 0;
            return r
              ? i.right - n > 0 && i.left + n < nv.innerWidth
              : i.bottom - n > 0 && i.top + n < nv.innerHeight;
          }),
          (t.positionInViewport = function (t, e, r) {
            sl(t) && (t = no(t));
            var i = t.getBoundingClientRect(),
              n = i[r ? s_ : sy],
              s =
                null == e
                  ? n / 2
                  : e in sY
                    ? sY[e] * n
                    : ~e.indexOf("%")
                      ? (parseFloat(e) * n) / 100
                      : parseFloat(e) || 0;
            return r
              ? (i.left + s) / nv.innerWidth
              : (i.top + s) / nv.innerHeight;
          }),
          (t.killAll = function (t) {
            if (
              (sH.slice(0).forEach(function (t) {
                return "ScrollSmoother" !== t.vars.id && t.kill();
              }),
              !0 !== t)
            ) {
              var e = sQ.killAll || [];
              ((sQ = {}),
                e.forEach(function (t) {
                  return t();
                }));
            }
          }),
          t
        );
      })();
    ((o_.version = "3.14.2"),
      (o_.saveStyles = function (t) {
        return t
          ? nT(t).forEach(function (t) {
              if (t && t.style) {
                var e = s0.indexOf(t);
                (e >= 0 && s0.splice(e, 5),
                  s0.push(
                    t,
                    t.style.cssText,
                    t.getBBox && t.getAttribute("transform"),
                    nm.core.getCache(t),
                    nX(),
                  ));
              }
            })
          : s0;
      }),
      (o_.revert = function (t, e) {
        return s5(!t, e);
      }),
      (o_.create = function (t, e) {
        return new o_(t, e);
      }),
      (o_.refresh = function (t) {
        return t ? sG(!0) : (ng || o_.register()) && s7(!0);
      }),
      (o_.update = function (t) {
        return ++i1.cache && or(2 * (!0 === t));
      }),
      (o_.clearScrollMemory = s3),
      (o_.maxScroll = function (t, e) {
        return so(t, e ? nn : ns);
      }),
      (o_.getScrollFunc = function (t, e) {
        return nl(no(t), e ? nn : ns);
      }),
      (o_.getById = function (t) {
        return sU[t];
      }),
      (o_.getAll = function () {
        return sH.filter(function (t) {
          return "ScrollSmoother" !== t.vars.id;
        });
      }),
      (o_.isScrolling = function () {
        return !!n2;
      }),
      (o_.snapDirectional = sz),
      (o_.addEventListener = function (t, e) {
        var r = sQ[t] || (sQ[t] = []);
        ~r.indexOf(e) || r.push(e);
      }),
      (o_.removeEventListener = function (t, e) {
        var r = sQ[t],
          i = r && r.indexOf(e);
        i >= 0 && r.splice(i, 1);
      }),
      (o_.batch = function (t, e) {
        var r,
          i = [],
          n = {},
          s = e.interval || 0.016,
          o = e.batchMax || 1e9,
          a = function (t, e) {
            var r = [],
              i = [],
              n = nm
                .delayedCall(s, function () {
                  (e(r, i), (r = []), (i = []));
                })
                .pause();
            return function (t) {
              (r.length || n.restart(!0),
                r.push(t.trigger),
                i.push(t),
                o <= r.length && n.progress(1));
            };
          };
        for (r in e)
          n[r] =
            "on" === r.substr(0, 2) && su(e[r]) && "onRefreshInit" !== r
              ? a(r, e[r])
              : e[r];
        return (
          su(o) &&
            ((o = o()),
            sD(o_, "refresh", function () {
              return (o = e.batchMax());
            })),
          nT(t).forEach(function (t) {
            var e = {};
            for (r in n) e[r] = n[r];
            ((e.trigger = t), i.push(o_.create(e)));
          }),
          i
        );
      }));
    var oy,
      ox = function (t, e, r, i) {
        return (
          e > i ? t(i) : e < 0 && t(0),
          r > i ? (i - e) / (r - e) : r < 0 ? e / (e - r) : 1
        );
      },
      ob = function t(e, r) {
        (!0 === r
          ? e.style.removeProperty("touch-action")
          : (e.style.touchAction =
              !0 === r
                ? "auto"
                : r
                  ? "pan-" + r + (nd.isTouch ? " pinch-zoom" : "")
                  : "none"),
          e === ny && t(nx, r));
      },
      ow = { auto: 1, scroll: 1 },
      oT = function (t) {
        var e,
          r = t.event,
          i = t.target,
          n = t.axis,
          s = (r.changedTouches ? r.changedTouches[0] : r).target,
          o = s._gsap || nm.core.getCache(s),
          a = n0();
        if (!o._isScrollT || a - o._isScrollT > 2e3) {
          for (
            ;
            s &&
            s !== nx &&
            ((s.scrollHeight <= s.clientHeight &&
              s.scrollWidth <= s.clientWidth) ||
              !(ow[(e = sM(s)).overflowY] || ow[e.overflowX]));
          )
            s = s.parentNode;
          ((o._isScroll =
            s &&
            s !== i &&
            !sr(s) &&
            (ow[(e = sM(s)).overflowY] || ow[e.overflowX])),
            (o._isScrollT = a));
        }
        (o._isScroll || "x" === n) &&
          (r.stopPropagation(), (r._gsapAllow = !0));
      },
      oS = function (t, e, r, i) {
        return nd.create({
          target: t,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: e,
          onWheel: (i = i && oT),
          onPress: i,
          onDrag: i,
          onScroll: i,
          onEnable: function () {
            return r && sD(n_, nd.eventTypes[0], oE, !1, !0);
          },
          onDisable: function () {
            return sL(n_, nd.eventTypes[0], oE, !0);
          },
        });
      },
      ok = /(input|label|select|textarea)/i,
      oE = function (t) {
        var e = ok.test(t.target.tagName);
        (e || oy) && ((t._gsapAllow = !0), (oy = e));
      },
      oM = function (t) {
        (sh(t) || (t = {}),
          (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
          t.type || (t.type = "wheel,touch"),
          (t.debounce = !!t.debounce),
          (t.id = t.id || "normalizer"));
        var e,
          r,
          i,
          n,
          s,
          o,
          a,
          l,
          u = t,
          c = u.normalizeScrollX,
          h = u.momentum,
          f = u.allowNestedScroll,
          p = u.onRelease,
          d = no(t.target) || ny,
          m = nm.core.globals().ScrollSmoother,
          g = m && m.get(),
          v =
            nB &&
            ((t.content && no(t.content)) ||
              (g && !1 !== t.content && !g.smooth() && g.content())),
          _ = nl(d, ns),
          y = nl(d, nn),
          x = 1,
          b =
            (nd.isTouch && nv.visualViewport
              ? nv.visualViewport.scale * nv.visualViewport.width
              : nv.outerWidth) / nv.innerWidth,
          w = 0,
          T = su(h)
            ? function () {
                return h(e);
              }
            : function () {
                return h || 2.8;
              },
          S = oS(d, t.type, !0, f),
          k = function () {
            return (n = !1);
          },
          E = n6,
          M = n6,
          O = function () {
            ((r = so(d, ns)),
              (M = nS(+!!nB, r)),
              c && (E = nS(0, so(d, nn))),
              (i = s4));
          },
          C = function () {
            ((v._gsap.y = n7(parseFloat(v._gsap.y) + _.offset) + "px"),
              (v.style.transform =
                "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                parseFloat(v._gsap.y) +
                ", 0, 1)"),
              (_.offset = _.cacheID = 0));
          },
          P = function () {
            if (n) {
              requestAnimationFrame(k);
              var t = n7(e.deltaY / 2),
                r = M(_.v - t);
              if (v && r !== _.v + _.offset) {
                _.offset = r - _.v;
                var i = n7((parseFloat(v && v._gsap.y) || 0) - _.offset);
                ((v.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  i +
                  ", 0, 1)"),
                  (v._gsap.y = i + "px"),
                  (_.cacheID = i1.cache),
                  or());
              }
              return !0;
            }
            (_.offset && C(), (n = !0));
          },
          A = function () {
            (O(),
              s.isActive() &&
                s.vars.scrollY > r &&
                (_() > r ? s.progress(1) && _(r) : s.resetTo("scrollY", r)));
          };
        return (
          v && nm.set(v, { y: "+=0" }),
          (t.ignoreCheck = function (t) {
            return (
              (nB && "touchmove" === t.type && P(t)) ||
              (x > 1.05 && "touchstart" !== t.type) ||
              e.isGesturing ||
              (t.touches && t.touches.length > 1)
            );
          }),
          (t.onPress = function () {
            n = !1;
            var t = x;
            ((x = n7(
              ((nv.visualViewport && nv.visualViewport.scale) || 1) / b,
            )),
              s.pause(),
              t !== x && ob(d, x > 1.01 || (!c && "x")),
              (o = y()),
              (a = _()),
              O(),
              (i = s4));
          }),
          (t.onRelease = t.onGestureStart =
            function (t, e) {
              if ((_.offset && C(), e)) {
                i1.cache++;
                var i,
                  n,
                  o = T();
                (c &&
                  ((n = (i = y()) + -(0.05 * o * t.velocityX) / 0.227),
                  (o *= ox(y, i, n, so(d, nn))),
                  (s.vars.scrollX = E(n))),
                  (n = (i = _()) + -(0.05 * o * t.velocityY) / 0.227),
                  (o *= ox(_, i, n, so(d, ns))),
                  (s.vars.scrollY = M(n)),
                  s.invalidate().duration(o).play(0.01),
                  ((nB && s.vars.scrollY >= r) || i >= r - 1) &&
                    nm.to({}, { onUpdate: A, duration: o }));
              } else l.restart(!0);
              p && p(t);
            }),
          (t.onWheel = function () {
            (s._ts && s.pause(), n0() - w > 1e3 && ((i = 0), (w = n0())));
          }),
          (t.onChange = function (t, e, r, n, s) {
            if (
              (s4 !== i && O(),
              e &&
                c &&
                y(E(n[2] === e ? o + (t.startX - t.x) : y() + e - n[1])),
              r)
            ) {
              _.offset && C();
              var l = s[2] === r,
                u = l ? a + t.startY - t.y : _() + r - s[1],
                h = M(u);
              (l && u !== h && (a += h - u), _(h));
            }
            (r || e) && or();
          }),
          (t.onEnable = function () {
            (ob(d, !c && "x"),
              o_.addEventListener("refresh", A),
              sD(nv, "resize", A),
              _.smooth &&
                ((_.target.style.scrollBehavior = "auto"),
                (_.smooth = y.smooth = !1)),
              S.enable());
          }),
          (t.onDisable = function () {
            (ob(d, !0),
              sL(nv, "resize", A),
              o_.removeEventListener("refresh", A),
              S.kill());
          }),
          (t.lockAxis = !1 !== t.lockAxis),
          ((e = new nd(t)).iOS = nB),
          nB && !_() && _(1),
          nB && nm.ticker.add(n6),
          (l = e._dc),
          (s = nm.to(e, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: om(_, _(), function () {
                return s.pause();
              }),
            },
            onUpdate: or,
            onComplete: l.vars.onComplete,
          })),
          e
        );
      };
    ((o_.sort = function (t) {
      if (su(t)) return sH.sort(t);
      var e = nv.pageYOffset || 0;
      return (
        o_.getAll().forEach(function (t) {
          return (t._sortY = t.trigger
            ? e + t.trigger.getBoundingClientRect().top
            : t.start + nv.innerHeight);
        }),
        sH.sort(
          t ||
            function (t, e) {
              return (
                -1e6 * (t.vars.refreshPriority || 0) +
                (t.vars.containerAnimation ? 1e6 : t._sortY) -
                ((e.vars.containerAnimation ? 1e6 : e._sortY) +
                  -1e6 * (e.vars.refreshPriority || 0))
              );
            },
        )
      );
    }),
      (o_.observe = function (t) {
        return new nd(t);
      }),
      (o_.normalizeScroll = function (t) {
        if (void 0 === t) return nj;
        if (!0 === t && nj) return nj.enable();
        if (!1 === t) {
          (nj && nj.kill(), (nj = t));
          return;
        }
        var e = t instanceof nd ? t : oM(t);
        return (
          nj && nj.target === e.target && nj.kill(),
          sr(e.target) && (nj = e),
          e
        );
      }),
      (o_.core = {
        _getVelocityProp: nu,
        _inputObserver: oS,
        _scrollers: i1,
        _proxies: i2,
        bridge: {
          ss: function () {
            (n2 || sJ("scrollStart"), (n2 = n0()));
          },
          ref: function () {
            return nM;
          },
        },
      }),
      se() && nm.registerPlugin(o_),
      t.s(["ScrollTrigger", () => o_], 83495));
  },
  7482,
  (t) => {
    "use strict";
    var e = t.i(43476),
      r = t.i(71645),
      i = "1.3.18";
    function n(t, e, r) {
      return Math.max(t, Math.min(e, r));
    }
    var s = class {
        isRunning = !1;
        value = 0;
        from = 0;
        to = 0;
        currentTime = 0;
        lerp;
        duration;
        easing;
        onUpdate;
        advance(t) {
          if (!this.isRunning) return;
          let e = !1;
          if (this.duration && this.easing) {
            this.currentTime += t;
            let r = n(0, this.currentTime / this.duration, 1),
              i = (e = r >= 1) ? 1 : this.easing(r);
            this.value = this.from + (this.to - this.from) * i;
          } else if (this.lerp) {
            var r, i, s, o;
            ((this.value =
              ((r = this.value),
              (i = this.to),
              (s = 60 * this.lerp),
              (1 - (o = 1 - Math.exp(-s * t))) * r + o * i)),
              Math.round(this.value) === this.to &&
                ((this.value = this.to), (e = !0)));
          } else ((this.value = this.to), (e = !0));
          (e && this.stop(), this.onUpdate?.(this.value, e));
        }
        stop() {
          this.isRunning = !1;
        }
        fromTo(
          t,
          e,
          { lerp: r, duration: i, easing: n, onStart: s, onUpdate: o },
        ) {
          ((this.from = this.value = t),
            (this.to = e),
            (this.lerp = r),
            (this.duration = i),
            (this.easing = n),
            (this.currentTime = 0),
            (this.isRunning = !0),
            s?.(),
            (this.onUpdate = o));
        }
      },
      o = class {
        constructor(t, e, { autoResize: r = !0, debounce: i = 250 } = {}) {
          ((this.wrapper = t),
            (this.content = e),
            r &&
              ((this.debouncedResize = (function (t, e) {
                let r;
                return function (...i) {
                  (clearTimeout(r),
                    (r = setTimeout(() => {
                      ((r = void 0), t.apply(this, i));
                    }, e)));
                };
              })(this.resize, i)),
              this.wrapper instanceof Window
                ? window.addEventListener("resize", this.debouncedResize)
                : ((this.wrapperResizeObserver = new ResizeObserver(
                    this.debouncedResize,
                  )),
                  this.wrapperResizeObserver.observe(this.wrapper)),
              (this.contentResizeObserver = new ResizeObserver(
                this.debouncedResize,
              )),
              this.contentResizeObserver.observe(this.content)),
            this.resize());
        }
        width = 0;
        height = 0;
        scrollHeight = 0;
        scrollWidth = 0;
        debouncedResize;
        wrapperResizeObserver;
        contentResizeObserver;
        destroy() {
          (this.wrapperResizeObserver?.disconnect(),
            this.contentResizeObserver?.disconnect(),
            this.wrapper === window &&
              this.debouncedResize &&
              window.removeEventListener("resize", this.debouncedResize));
        }
        resize = () => {
          (this.onWrapperResize(), this.onContentResize());
        };
        onWrapperResize = () => {
          this.wrapper instanceof Window
            ? ((this.width = window.innerWidth),
              (this.height = window.innerHeight))
            : ((this.width = this.wrapper.clientWidth),
              (this.height = this.wrapper.clientHeight));
        };
        onContentResize = () => {
          this.wrapper instanceof Window
            ? ((this.scrollHeight = this.content.scrollHeight),
              (this.scrollWidth = this.content.scrollWidth))
            : ((this.scrollHeight = this.wrapper.scrollHeight),
              (this.scrollWidth = this.wrapper.scrollWidth));
        };
        get limit() {
          return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
          };
        }
      },
      a = class {
        events = {};
        emit(t, ...e) {
          let r = this.events[t] || [];
          for (let t = 0, i = r.length; t < i; t++) r[t]?.(...e);
        }
        on(t, e) {
          return (
            this.events[t] ? this.events[t].push(e) : (this.events[t] = [e]),
            () => {
              this.events[t] = this.events[t]?.filter((t) => e !== t);
            }
          );
        }
        off(t, e) {
          this.events[t] = this.events[t]?.filter((t) => e !== t);
        }
        destroy() {
          this.events = {};
        }
      },
      l = 100 / 6,
      u = { passive: !1 };
    function c(t, e) {
      return 1 === t ? l : 2 === t ? e : 1;
    }
    var h = class {
        constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          ((this.element = t),
            (this.options = e),
            window.addEventListener("resize", this.onWindowResize),
            this.onWindowResize(),
            this.element.addEventListener("wheel", this.onWheel, u),
            this.element.addEventListener("touchstart", this.onTouchStart, u),
            this.element.addEventListener("touchmove", this.onTouchMove, u),
            this.element.addEventListener("touchend", this.onTouchEnd, u));
        }
        touchStart = { x: 0, y: 0 };
        lastDelta = { x: 0, y: 0 };
        window = { width: 0, height: 0 };
        emitter = new a();
        on(t, e) {
          return this.emitter.on(t, e);
        }
        destroy() {
          (this.emitter.destroy(),
            window.removeEventListener("resize", this.onWindowResize),
            this.element.removeEventListener("wheel", this.onWheel, u),
            this.element.removeEventListener(
              "touchstart",
              this.onTouchStart,
              u,
            ),
            this.element.removeEventListener("touchmove", this.onTouchMove, u),
            this.element.removeEventListener("touchend", this.onTouchEnd, u));
        }
        onTouchStart = (t) => {
          let { clientX: e, clientY: r } = t.targetTouches
            ? t.targetTouches[0]
            : t;
          ((this.touchStart.x = e),
            (this.touchStart.y = r),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t }));
        };
        onTouchMove = (t) => {
          let { clientX: e, clientY: r } = t.targetTouches
              ? t.targetTouches[0]
              : t,
            i = -(e - this.touchStart.x) * this.options.touchMultiplier,
            n = -(r - this.touchStart.y) * this.options.touchMultiplier;
          ((this.touchStart.x = e),
            (this.touchStart.y = r),
            (this.lastDelta = { x: i, y: n }),
            this.emitter.emit("scroll", { deltaX: i, deltaY: n, event: t }));
        };
        onTouchEnd = (t) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: t,
          });
        };
        onWheel = (t) => {
          let { deltaX: e, deltaY: r, deltaMode: i } = t,
            n = c(i, this.window.width),
            s = c(i, this.window.height);
          ((e *= n),
            (r *= s),
            (e *= this.options.wheelMultiplier),
            (r *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: e, deltaY: r, event: t }));
        };
        onWindowResize = () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        };
      },
      f = (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      p = class {
        _isScrolling = !1;
        _isStopped = !1;
        _isLocked = !1;
        _preventNextNativeScrollEvent = !1;
        _resetVelocityTimeout = null;
        _rafId = null;
        isTouching;
        time = 0;
        userData = {};
        lastVelocity = 0;
        velocity = 0;
        direction = 0;
        options;
        targetScroll;
        animatedScroll;
        animate = new s();
        emitter = new a();
        dimensions;
        virtualScroll;
        constructor({
          wrapper: t = window,
          content: e = document.documentElement,
          eventsTarget: r = t,
          smoothWheel: n = !0,
          syncTouch: s = !1,
          syncTouchLerp: a = 0.075,
          touchInertiaExponent: l = 1.7,
          duration: u,
          easing: c,
          lerp: p = 0.1,
          infinite: d = !1,
          orientation: m = "vertical",
          gestureOrientation: g = "horizontal" === m ? "both" : "vertical",
          touchMultiplier: v = 1,
          wheelMultiplier: _ = 1,
          autoResize: y = !0,
          prevent: x,
          virtualScroll: b,
          overscroll: w = !0,
          autoRaf: T = !1,
          anchors: S = !1,
          autoToggle: k = !1,
          allowNestedScroll: E = !1,
          __experimental__naiveDimensions: M = !1,
          naiveDimensions: O = M,
          stopInertiaOnNavigate: C = !1,
        } = {}) {
          ((window.lenisVersion = i),
            window.lenis || (window.lenis = {}),
            (window.lenis.version = i),
            "horizontal" === m && (window.lenis.horizontal = !0),
            (t && t !== document.documentElement) || (t = window),
            "number" == typeof u && "function" != typeof c
              ? (c = f)
              : "function" == typeof c && "number" != typeof u && (u = 1),
            (this.options = {
              wrapper: t,
              content: e,
              eventsTarget: r,
              smoothWheel: n,
              syncTouch: s,
              syncTouchLerp: a,
              touchInertiaExponent: l,
              duration: u,
              easing: c,
              lerp: p,
              infinite: d,
              gestureOrientation: g,
              orientation: m,
              touchMultiplier: v,
              wheelMultiplier: _,
              autoResize: y,
              prevent: x,
              virtualScroll: b,
              overscroll: w,
              autoRaf: T,
              anchors: S,
              autoToggle: k,
              allowNestedScroll: E,
              naiveDimensions: O,
              stopInertiaOnNavigate: C,
            }),
            (this.dimensions = new o(t, e, { autoResize: y })),
            this.updateClassName(),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
              "scroll",
              this.onNativeScroll,
            ),
            this.options.wrapper.addEventListener(
              "scrollend",
              this.onScrollEnd,
              { capture: !0 },
            ),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.addEventListener("click", this.onClick),
            this.options.wrapper.addEventListener(
              "pointerdown",
              this.onPointerDown,
            ),
            (this.virtualScroll = new h(r, {
              touchMultiplier: v,
              wheelMultiplier: _,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll),
            this.options.autoToggle &&
              (this.checkOverflow(),
              this.rootElement.addEventListener(
                "transitionend",
                this.onTransitionEnd,
              )),
            this.options.autoRaf &&
              (this._rafId = requestAnimationFrame(this.raf)));
        }
        destroy() {
          (this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
              "scroll",
              this.onNativeScroll,
            ),
            this.options.wrapper.removeEventListener(
              "scrollend",
              this.onScrollEnd,
              { capture: !0 },
            ),
            this.options.wrapper.removeEventListener(
              "pointerdown",
              this.onPointerDown,
            ),
            (this.options.anchors || this.options.stopInertiaOnNavigate) &&
              this.options.wrapper.removeEventListener("click", this.onClick),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.cleanUpClassName(),
            this._rafId && cancelAnimationFrame(this._rafId));
        }
        on(t, e) {
          return this.emitter.on(t, e);
        }
        off(t, e) {
          return this.emitter.off(t, e);
        }
        onScrollEnd = (t) => {
          t instanceof CustomEvent ||
            ("smooth" !== this.isScrolling && !1 !== this.isScrolling) ||
            t.stopPropagation();
        };
        dispatchScrollendEvent = () => {
          this.options.wrapper.dispatchEvent(
            new CustomEvent("scrollend", {
              bubbles: this.options.wrapper === window,
              detail: { lenisScrollEnd: !0 },
            }),
          );
        };
        get overflow() {
          let t = this.isHorizontal ? "overflow-x" : "overflow-y";
          return getComputedStyle(this.rootElement)[t];
        }
        checkOverflow() {
          ["hidden", "clip"].includes(this.overflow)
            ? this.internalStop()
            : this.internalStart();
        }
        onTransitionEnd = (t) => {
          t.propertyName.includes("overflow") && this.checkOverflow();
        };
        setScroll(t) {
          this.isHorizontal
            ? this.options.wrapper.scrollTo({ left: t, behavior: "instant" })
            : this.options.wrapper.scrollTo({ top: t, behavior: "instant" });
        }
        onClick = (t) => {
          let e = t
            .composedPath()
            .filter(
              (t) => t instanceof HTMLAnchorElement && t.getAttribute("href"),
            );
          if (this.options.anchors) {
            let t = e.find((t) => t.getAttribute("href")?.includes("#"));
            if (t) {
              let e = t.getAttribute("href");
              if (e) {
                let t =
                    "object" == typeof this.options.anchors &&
                    this.options.anchors
                      ? this.options.anchors
                      : void 0,
                  r = `#${e.split("#")[1]}`;
                this.scrollTo(r, t);
              }
            }
          }
          this.options.stopInertiaOnNavigate &&
            e.find((t) => t.host === window.location.host) &&
            this.reset();
        };
        onPointerDown = (t) => {
          1 === t.button && this.reset();
        };
        onVirtualScroll = (t) => {
          if (
            "function" == typeof this.options.virtualScroll &&
            !1 === this.options.virtualScroll(t)
          )
            return;
          let { deltaX: e, deltaY: r, event: i } = t;
          if (
            (this.emitter.emit("virtual-scroll", {
              deltaX: e,
              deltaY: r,
              event: i,
            }),
            i.ctrlKey || i.lenisStopPropagation)
          )
            return;
          let n = i.type.includes("touch"),
            s = i.type.includes("wheel");
          this.isTouching = "touchstart" === i.type || "touchmove" === i.type;
          let o = 0 === e && 0 === r;
          if (
            this.options.syncTouch &&
            n &&
            "touchstart" === i.type &&
            o &&
            !this.isStopped &&
            !this.isLocked
          )
            return void this.reset();
          let a =
            ("vertical" === this.options.gestureOrientation && 0 === r) ||
            ("horizontal" === this.options.gestureOrientation && 0 === e);
          if (o || a) return;
          let l = i.composedPath();
          l = l.slice(0, l.indexOf(this.rootElement));
          let u = this.options.prevent,
            c = Math.abs(e) >= Math.abs(r) ? "horizontal" : "vertical";
          if (
            l.find(
              (t) =>
                t instanceof HTMLElement &&
                (("function" == typeof u && u?.(t)) ||
                  t.hasAttribute?.("data-lenis-prevent") ||
                  ("vertical" === c &&
                    t.hasAttribute?.("data-lenis-prevent-vertical")) ||
                  ("horizontal" === c &&
                    t.hasAttribute?.("data-lenis-prevent-horizontal")) ||
                  (n && t.hasAttribute?.("data-lenis-prevent-touch")) ||
                  (s && t.hasAttribute?.("data-lenis-prevent-wheel")) ||
                  (this.options.allowNestedScroll &&
                    this.hasNestedScroll(t, { deltaX: e, deltaY: r }))),
            )
          )
            return;
          if (this.isStopped || this.isLocked) {
            i.cancelable && i.preventDefault();
            return;
          }
          if (
            !((this.options.syncTouch && n) || (this.options.smoothWheel && s))
          ) {
            ((this.isScrolling = "native"),
              this.animate.stop(),
              (i.lenisStopPropagation = !0));
            return;
          }
          let h = r;
          ("both" === this.options.gestureOrientation
            ? (h = Math.abs(r) > Math.abs(e) ? r : e)
            : "horizontal" === this.options.gestureOrientation && (h = e),
            (!this.options.overscroll ||
              this.options.infinite ||
              (this.options.wrapper !== window &&
                this.limit > 0 &&
                ((this.animatedScroll > 0 &&
                  this.animatedScroll < this.limit) ||
                  (0 === this.animatedScroll && r > 0) ||
                  (this.animatedScroll === this.limit && r < 0)))) &&
              (i.lenisStopPropagation = !0),
            i.cancelable && i.preventDefault());
          let f = n && this.options.syncTouch,
            p = n && "touchend" === i.type;
          (p &&
            (h =
              Math.sign(this.velocity) *
              Math.abs(this.velocity) ** this.options.touchInertiaExponent),
            this.scrollTo(this.targetScroll + h, {
              programmatic: !1,
              ...(f
                ? { lerp: p ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }),
            }));
        };
        resize() {
          (this.dimensions.resize(),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            this.emit());
        }
        emit() {
          this.emitter.emit("scroll", this);
        }
        onNativeScroll = () => {
          if (
            (null !== this._resetVelocityTimeout &&
              (clearTimeout(this._resetVelocityTimeout),
              (this._resetVelocityTimeout = null)),
            this._preventNextNativeScrollEvent)
          ) {
            this._preventNextNativeScrollEvent = !1;
            return;
          }
          if (!1 === this.isScrolling || "native" === this.isScrolling) {
            let t = this.animatedScroll;
            ((this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity),
              (this.velocity = this.animatedScroll - t),
              (this.direction = Math.sign(this.animatedScroll - t)),
              this.isStopped || (this.isScrolling = "native"),
              this.emit(),
              0 !== this.velocity &&
                (this._resetVelocityTimeout = setTimeout(() => {
                  ((this.lastVelocity = this.velocity),
                    (this.velocity = 0),
                    (this.isScrolling = !1),
                    this.emit());
                }, 400)));
          }
        };
        reset() {
          ((this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.lastVelocity = this.velocity = 0),
            this.animate.stop());
        }
        start() {
          if (this.isStopped) {
            if (this.options.autoToggle)
              return void this.rootElement.style.removeProperty("overflow");
            this.internalStart();
          }
        }
        internalStart() {
          this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
        }
        stop() {
          if (!this.isStopped) {
            if (this.options.autoToggle)
              return void this.rootElement.style.setProperty(
                "overflow",
                "clip",
              );
            this.internalStop();
          }
        }
        internalStop() {
          this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
        }
        raf = (t) => {
          let e = t - (this.time || t);
          ((this.time = t),
            this.animate.advance(0.001 * e),
            this.options.autoRaf &&
              (this._rafId = requestAnimationFrame(this.raf)));
        };
        scrollTo(
          t,
          {
            offset: e = 0,
            immediate: r = !1,
            lock: i = !1,
            programmatic: s = !0,
            lerp: o = s ? this.options.lerp : void 0,
            duration: a = s ? this.options.duration : void 0,
            easing: l = s ? this.options.easing : void 0,
            onStart: u,
            onComplete: c,
            force: h = !1,
            userData: p,
          } = {},
        ) {
          if ((this.isStopped || this.isLocked) && !h) return;
          let d = t,
            m = e;
          if ("string" == typeof d && ["top", "left", "start", "#"].includes(d))
            d = 0;
          else if (
            "string" == typeof d &&
            ["bottom", "right", "end"].includes(d)
          )
            d = this.limit;
          else {
            let t = null;
            if (
              ("string" == typeof d
                ? (t = document.querySelector(d)) ||
                  ("#top" === d
                    ? (d = 0)
                    : console.warn("Lenis: Target not found", d))
                : d instanceof HTMLElement && d?.nodeType && (t = d),
              t)
            ) {
              if (this.options.wrapper !== window) {
                let t = this.rootElement.getBoundingClientRect();
                m -= this.isHorizontal ? t.left : t.top;
              }
              let e = t.getBoundingClientRect();
              d = (this.isHorizontal ? e.left : e.top) + this.animatedScroll;
            }
          }
          if ("number" == typeof d) {
            if (((d += m), (d = Math.round(d)), this.options.infinite)) {
              if (s) {
                this.targetScroll = this.animatedScroll = this.scroll;
                let t = d - this.animatedScroll;
                t > this.limit / 2
                  ? (d -= this.limit)
                  : t < -this.limit / 2 && (d += this.limit);
              }
            } else d = n(0, d, this.limit);
            if (d === this.targetScroll) {
              (u?.(this), c?.(this));
              return;
            }
            if (((this.userData = p ?? {}), r)) {
              ((this.animatedScroll = this.targetScroll = d),
                this.setScroll(this.scroll),
                this.reset(),
                this.preventNextNativeScrollEvent(),
                this.emit(),
                c?.(this),
                (this.userData = {}),
                requestAnimationFrame(() => {
                  this.dispatchScrollendEvent();
                }));
              return;
            }
            (s || (this.targetScroll = d),
              "number" == typeof a && "function" != typeof l
                ? (l = f)
                : "function" == typeof l && "number" != typeof a && (a = 1),
              this.animate.fromTo(this.animatedScroll, d, {
                duration: a,
                easing: l,
                lerp: o,
                onStart: () => {
                  (i && (this.isLocked = !0),
                    (this.isScrolling = "smooth"),
                    u?.(this));
                },
                onUpdate: (t, e) => {
                  ((this.isScrolling = "smooth"),
                    (this.lastVelocity = this.velocity),
                    (this.velocity = t - this.animatedScroll),
                    (this.direction = Math.sign(this.velocity)),
                    (this.animatedScroll = t),
                    this.setScroll(this.scroll),
                    s && (this.targetScroll = t),
                    e || this.emit(),
                    e &&
                      (this.reset(),
                      this.emit(),
                      c?.(this),
                      (this.userData = {}),
                      requestAnimationFrame(() => {
                        this.dispatchScrollendEvent();
                      }),
                      this.preventNextNativeScrollEvent()));
                },
              }));
          }
        }
        preventNextNativeScrollEvent() {
          ((this._preventNextNativeScrollEvent = !0),
            requestAnimationFrame(() => {
              this._preventNextNativeScrollEvent = !1;
            }));
        }
        hasNestedScroll(t, { deltaX: e, deltaY: r }) {
          let i,
            n,
            s,
            o,
            a,
            l,
            u,
            c,
            h,
            f,
            p,
            d,
            m,
            g,
            v,
            _,
            y = Date.now();
          t._lenis || (t._lenis = {});
          let x = t._lenis;
          if (y - (x.time ?? 0) > 2e3) {
            x.time = Date.now();
            let e = window.getComputedStyle(t);
            if (
              ((x.computedStyle = e),
              (i = ["auto", "overlay", "scroll"].includes(e.overflowX)),
              (n = ["auto", "overlay", "scroll"].includes(e.overflowY)),
              (a = ["auto"].includes(e.overscrollBehaviorX)),
              (l = ["auto"].includes(e.overscrollBehaviorY)),
              (x.hasOverflowX = i),
              (x.hasOverflowY = n),
              !(i || n))
            )
              return !1;
            ((u = t.scrollWidth),
              (c = t.scrollHeight),
              (h = t.clientWidth),
              (f = t.clientHeight),
              (s = u > h),
              (o = c > f),
              (x.isScrollableX = s),
              (x.isScrollableY = o),
              (x.scrollWidth = u),
              (x.scrollHeight = c),
              (x.clientWidth = h),
              (x.clientHeight = f),
              (x.hasOverscrollBehaviorX = a),
              (x.hasOverscrollBehaviorY = l));
          } else
            ((s = x.isScrollableX),
              (o = x.isScrollableY),
              (i = x.hasOverflowX),
              (n = x.hasOverflowY),
              (u = x.scrollWidth),
              (c = x.scrollHeight),
              (h = x.clientWidth),
              (f = x.clientHeight),
              (a = x.hasOverscrollBehaviorX),
              (l = x.hasOverscrollBehaviorY));
          if (!((i && s) || (n && o))) return !1;
          let b = Math.abs(e) >= Math.abs(r) ? "horizontal" : "vertical";
          if ("horizontal" === b)
            ((p = Math.round(t.scrollLeft)),
              (d = u - h),
              (m = e),
              (g = i),
              (v = s),
              (_ = a));
          else {
            if ("vertical" !== b) return !1;
            ((p = Math.round(t.scrollTop)),
              (d = c - f),
              (m = r),
              (g = n),
              (v = o),
              (_ = l));
          }
          return (
            (!_ && (p >= d || p <= 0)) || ((m > 0 ? p < d : p > 0) && g && v)
          );
        }
        get rootElement() {
          return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
        }
        get limit() {
          return this.options.naiveDimensions
            ? this.isHorizontal
              ? this.rootElement.scrollWidth - this.rootElement.clientWidth
              : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
        }
        get isHorizontal() {
          return "horizontal" === this.options.orientation;
        }
        get actualScroll() {
          let t = this.options.wrapper;
          return this.isHorizontal
            ? (t.scrollX ?? t.scrollLeft)
            : (t.scrollY ?? t.scrollTop);
        }
        get scroll() {
          var t;
          return this.options.infinite
            ? ((this.animatedScroll % (t = this.limit)) + t) % t
            : this.animatedScroll;
        }
        get progress() {
          return 0 === this.limit ? 1 : this.scroll / this.limit;
        }
        get isScrolling() {
          return this._isScrolling;
        }
        set isScrolling(t) {
          this._isScrolling !== t &&
            ((this._isScrolling = t), this.updateClassName());
        }
        get isStopped() {
          return this._isStopped;
        }
        set isStopped(t) {
          this._isStopped !== t &&
            ((this._isStopped = t), this.updateClassName());
        }
        get isLocked() {
          return this._isLocked;
        }
        set isLocked(t) {
          this._isLocked !== t &&
            ((this._isLocked = t), this.updateClassName());
        }
        get isSmooth() {
          return "smooth" === this.isScrolling;
        }
        get className() {
          let t = "lenis";
          return (
            this.options.autoToggle && (t += " lenis-autoToggle"),
            this.isStopped && (t += " lenis-stopped"),
            this.isLocked && (t += " lenis-locked"),
            this.isScrolling && (t += " lenis-scrolling"),
            "smooth" === this.isScrolling && (t += " lenis-smooth"),
            t
          );
        }
        updateClassName() {
          (this.cleanUpClassName(),
            (this.rootElement.className =
              `${this.rootElement.className} ${this.className}`.trim()));
        }
        cleanUpClassName() {
          this.rootElement.className = this.rootElement.className
            .replace(/lenis(-\w+)?/g, "")
            .trim();
        }
      },
      d = t.i(89970),
      m = t.i(83495);
    d.gsap.registerPlugin(m.ScrollTrigger);
    let g = (0, r.createContext)({ lenis: null });
    function v({ children: t }) {
      let i = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let t = new p({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: !0,
            touchMultiplier: 2,
          });
          return (
            (i.current = t),
            t.on("scroll", m.ScrollTrigger.update),
            d.gsap.ticker.add((e) => {
              t.raf(1e3 * e);
            }),
            d.gsap.ticker.lagSmoothing(0),
            () => {
              (t.destroy(), d.gsap.ticker.remove(t.raf));
            }
          );
        }, []),
        (0, e.jsx)(g.Provider, { value: { lenis: i.current }, children: t })
      );
    }
    t.s(["SmoothScrollProvider", () => v], 7482);
  },
  13474,
  76841,
  (t) => {
    "use strict";
    var e = t.i(43476),
      r = t.i(71645),
      i = t.i(89970),
      n = t.i(83495);
    i.gsap.registerPlugin(n.ScrollTrigger);
    let s = [
      { id: "hero", label: "Inicio" },
      { id: "about", label: "Sobre" },
      { id: "services", label: "Servicos" },
      { id: "projects", label: "Trabalhos" },
      { id: "process", label: "Processo" },
      { id: "testimonials", label: "Clientes" },
      { id: "contact", label: "Contato" },
    ];
    function o() {
      let t = (0, r.useRef)(null),
        o = (0, r.useRef)(null),
        a = (0, r.useRef)(null),
        l = (0, r.useRef)(null),
        [u, c] = (0, r.useState)(!1),
        [h, f] = (0, r.useState)("hero"),
        [p, d] = (0, r.useState)(!1),
        [m, g] = (0, r.useState)({ left: 0, width: 0 });
      return (
        (0, r.useEffect)(() => {
          let e = i.gsap.context(() => {
            (i.gsap.fromTo(
              t.current,
              { y: -100, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" },
            ),
              n.ScrollTrigger.create({
                trigger: "#hero",
                start: "bottom 100px",
                onEnter: () => c(!0),
                onLeaveBack: () => c(!1),
              }),
              s.forEach((t) => {
                n.ScrollTrigger.create({
                  trigger: `#${t.id}`,
                  start: "top center",
                  end: "bottom center",
                  onEnter: () => f(t.id),
                  onEnterBack: () => f(t.id),
                });
              }));
          }, t);
          return () => e.revert();
        }, []),
        (0, r.useEffect)(() => {
          let t = () => {
            if (!l.current) return;
            let t = l.current.querySelector(`[data-nav="${h}"]`);
            if (t) {
              let e = t.getBoundingClientRect(),
                r = l.current.getBoundingClientRect();
              g({ left: e.left - r.left, width: e.width });
            }
          };
          return (
            t(),
            window.addEventListener("resize", t),
            () => window.removeEventListener("resize", t)
          );
        }, [h]),
        (0, e.jsxs)(e.Fragment, {
          children: [
            (0, e.jsx)("nav", {
              ref: t,
              className: `fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-4 transition-all duration-500 ${u ? "bg-[#0e1425]/80 backdrop-blur-2xl" : ""}`,
              children: (0, e.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, e.jsx)("div", {
                    ref: o,
                    className:
                      "flex items-center gap-3 transition-all duration-500",
                    style: {
                      opacity: +!!u,
                      transform: u ? "translateY(0)" : "translateY(-20px)",
                      pointerEvents: u ? "auto" : "none",
                    },
                    children: (0, e.jsxs)("a", {
                      href: "#hero",
                      className: "flex items-center gap-3 group",
                      children: [
                        (0, e.jsx)("div", {
                          className:
                            "w-9 h-9 rounded-xl bg-[#0742e8] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#0742e8]/30",
                          children: (0, e.jsx)("span", {
                            className:
                              "text-base font-display font-bold text-[#e9eeff]",
                            children: "O",
                          }),
                        }),
                        (0, e.jsx)("span", {
                          className:
                            "text-lg font-display font-semibold text-[#e9eeff] hidden sm:block tracking-tight",
                          children: "ORIUX",
                        }),
                      ],
                    }),
                  }),
                  (0, e.jsxs)("div", {
                    ref: l,
                    className:
                      "hidden md:flex items-center relative px-2 py-2 rounded-full",
                    style: {
                      background: "rgba(14, 20, 37, 0.6)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(95, 153, 255, 0.1)",
                    },
                    children: [
                      (0, e.jsx)("div", {
                        ref: a,
                        className:
                          "absolute top-1/2 -translate-y-1/2 h-[calc(100%-8px)] rounded-full pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                        style: {
                          left: m.left,
                          width: m.width,
                          background: `
                  linear-gradient(
                    135deg,
                    rgba(95, 153, 255, 0.25) 0%,
                    rgba(7, 66, 232, 0.35) 50%,
                    rgba(95, 153, 255, 0.25) 100%
                  )
                `,
                          backdropFilter: "blur(20px) saturate(180%)",
                          WebkitBackdropFilter: "blur(20px) saturate(180%)",
                          border: "1px solid rgba(233, 238, 255, 0.15)",
                          boxShadow: `
                  0 0 0 0.5px rgba(233, 238, 255, 0.1),
                  0 2px 4px rgba(0, 0, 0, 0.1),
                  0 4px 16px rgba(7, 66, 232, 0.15),
                  inset 0 1px 1px rgba(233, 238, 255, 0.15),
                  inset 0 -1px 1px rgba(7, 66, 232, 0.1)
                `,
                        },
                        children: (0, e.jsx)("div", {
                          className: "absolute inset-0 rounded-full opacity-50",
                          style: {
                            background:
                              "radial-gradient(ellipse at 50% 0%, rgba(233, 238, 255, 0.2) 0%, transparent 60%)",
                          },
                        }),
                      }),
                      s
                        .slice(1, 6)
                        .map((t) =>
                          (0, e.jsx)(
                            "a",
                            {
                              href: `#${t.id}`,
                              "data-nav": t.id,
                              className: `relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full z-10 ${h === t.id ? "text-[#e9eeff]" : "text-[#5c647a] hover:text-[#e9eeff]"}`,
                              children: t.label,
                            },
                            t.id,
                          ),
                        ),
                    ],
                  }),
                  (0, e.jsxs)("a", {
                    href: "#contact",
                    className:
                      "hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#0742e8] rounded-full hover:bg-[#0742e8]/80 transition-all duration-300 group shadow-lg shadow-[#0742e8]/20",
                    children: [
                      (0, e.jsx)("span", {
                        className: "text-sm font-medium text-[#e9eeff]",
                        children: "Fale Conosco",
                      }),
                      (0, e.jsx)("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        className:
                          "transform group-hover:translate-x-1 transition-transform duration-300",
                        children: (0, e.jsx)("path", {
                          d: "M5 12H19M19 12L12 5M19 12L12 19",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: "text-[#e9eeff]",
                        }),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("button", {
                    onClick: () => d(!p),
                    className:
                      "md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5",
                    "aria-label": "Toggle menu",
                    children: [
                      (0, e.jsx)("span", {
                        className: `w-6 h-0.5 bg-[#e9eeff] transition-all duration-300 ${p ? "rotate-45 translate-y-2" : ""}`,
                      }),
                      (0, e.jsx)("span", {
                        className: `w-6 h-0.5 bg-[#e9eeff] transition-all duration-300 ${p ? "opacity-0" : ""}`,
                      }),
                      (0, e.jsx)("span", {
                        className: `w-6 h-0.5 bg-[#e9eeff] transition-all duration-300 ${p ? "-rotate-45 -translate-y-2" : ""}`,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, e.jsx)("div", {
              className: `fixed inset-0 z-40 bg-[#0e1425] transition-all duration-500 md:hidden ${p ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`,
              children: (0, e.jsx)("div", {
                className:
                  "flex flex-col items-center justify-center h-full gap-6",
                children: s.map((t, r) =>
                  (0, e.jsx)(
                    "a",
                    {
                      href: `#${t.id}`,
                      onClick: () => d(!1),
                      className: `display-md font-display transition-colors duration-300 ${h === t.id ? "text-[#0742e8]" : "text-[#e9eeff] hover:text-[#5f99ff]"}`,
                      style: {
                        opacity: +!!p,
                        transform: p ? "translateY(0)" : "translateY(20px)",
                        transition: `all 0.5s ease ${0.1 * r}s`,
                      },
                      children: t.label,
                    },
                    t.id,
                  ),
                ),
              }),
            }),
          ],
        })
      );
    }
    function a() {
      let t = (0, r.useRef)(null),
        n = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let e = () => {
            let t = new Date();
            n.current &&
              (n.current.textContent = t.toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
                timeZone: "America/Sao_Paulo",
              }));
          };
          e();
          let r = setInterval(e, 1e3),
            s = i.gsap.context(() => {
              i.gsap.fromTo(
                ".footer-content",
                { y: 50, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power3.out",
                  stagger: 0.1,
                  scrollTrigger: {
                    trigger: t.current,
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                  },
                },
              );
            }, t);
          return () => {
            (clearInterval(r), s.revert());
          };
        }, []),
        (0, e.jsx)("footer", {
          ref: t,
          className:
            "relative py-16 px-6 md:px-12 lg:px-24 bg-[#0e1425] border-t border-[#5f99ff]/10",
          children: (0, e.jsxs)("div", {
            className: "max-w-7xl mx-auto",
            children: [
              (0, e.jsxs)("div", {
                className:
                  "footer-content flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16",
                children: [
                  (0, e.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, e.jsx)("div", {
                        className:
                          "w-12 h-12 rounded-lg bg-[#0742e8] flex items-center justify-center",
                        children: (0, e.jsx)("span", {
                          className:
                            "text-xl font-display font-bold text-[#e9eeff]",
                          children: "O",
                        }),
                      }),
                      (0, e.jsxs)("div", {
                        children: [
                          (0, e.jsx)("span", {
                            className:
                              "text-xl font-display font-semibold text-[#e9eeff] block",
                            children: "ORIUX",
                          }),
                          (0, e.jsx)("span", {
                            className: "text-sm text-[#5c647a]",
                            children: "Estudio Criativo",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: "flex items-center gap-8",
                    children: [
                      (0, e.jsxs)("div", {
                        className: "text-right",
                        children: [
                          (0, e.jsx)("span", {
                            className: "label text-[#5c647a] block mb-1",
                            children: "Hora Local",
                          }),
                          (0, e.jsx)("span", {
                            ref: n,
                            className: "text-xl font-mono text-[#5f99ff]",
                            children: "--:--",
                          }),
                        ],
                      }),
                      (0, e.jsxs)("div", {
                        className: "text-right",
                        children: [
                          (0, e.jsx)("span", {
                            className: "label text-[#5c647a] block mb-1",
                            children: "Localizado em",
                          }),
                          (0, e.jsx)("span", {
                            className: "text-xl text-[#e9eeff]",
                            children: "Sao Paulo, BR",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className:
                  "footer-content grid grid-cols-2 md:grid-cols-4 gap-8 mb-16",
                children: [
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("span", {
                        className: "label text-[#5c647a] block mb-4",
                        children: "Navegacao",
                      }),
                      (0, e.jsx)("ul", {
                        className: "space-y-3",
                        children: [
                          { label: "Trabalhos", href: "#projects" },
                          { label: "Servicos", href: "#services" },
                          { label: "Processo", href: "#process" },
                          { label: "Sobre", href: "#about" },
                        ].map((t) =>
                          (0, e.jsx)(
                            "li",
                            {
                              children: (0, e.jsx)("a", {
                                href: t.href,
                                className:
                                  "text-[#e9eeff] hover:text-[#5f99ff] transition-colors duration-300",
                                children: t.label,
                              }),
                            },
                            t.label,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("span", {
                        className: "label text-[#5c647a] block mb-4",
                        children: "Servicos",
                      }),
                      (0, e.jsx)("ul", {
                        className: "space-y-3",
                        children: [
                          "Estrategia",
                          "Design",
                          "Desenvolvimento",
                          "Motion",
                        ].map((t) =>
                          (0, e.jsx)(
                            "li",
                            {
                              children: (0, e.jsx)("span", {
                                className: "text-[#e9eeff]",
                                children: t,
                              }),
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    children: [
                      (0, e.jsx)("span", {
                        className: "label text-[#5c647a] block mb-4",
                        children: "Social",
                      }),
                      (0, e.jsx)("ul", {
                        className: "space-y-3",
                        children: [
                          "Twitter",
                          "Instagram",
                          "LinkedIn",
                          "Dribbble",
                        ].map((t) =>
                          (0, e.jsx)(
                            "li",
                            {
                              children: (0, e.jsxs)("a", {
                                href: "#",
                                className:
                                  "text-[#e9eeff] hover:text-[#5f99ff] transition-colors duration-300 flex items-center gap-2 group",
                                children: [
                                  t,
                                  (0, e.jsx)("svg", {
                                    width: "12",
                                    height: "12",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    className:
                                      "opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300",
                                    children: (0, e.jsx)("path", {
                                      d: "M7 17L17 7M17 7H7M17 7V17",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                    }),
                                  }),
                                ],
                              }),
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: "min-w-0",
                    children: [
                      (0, e.jsx)("span", {
                        className: "label text-[#5c647a] block mb-4",
                        children: "Contato",
                      }),
                      (0, e.jsxs)("ul", {
                        className: "space-y-3",
                        children: [
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("a", {
                              href: "mailto:contato.devoriux@gmail.com",
                              className:
                                "break-all min-w-0 text-[#5f99ff] hover:text-[#e9eeff] transition-colors duration-300",
                              children: "",
                            }),
                          }),
                          (0, e.jsx)("li", {
                            children: (0, e.jsx)("span", {
                              className: "text-[#e9eeff]",
                              children: "+55 83 996607709",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, e.jsxs)("div", {
                className:
                  "footer-content flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#5f99ff]/10",
                children: [
                  (0, e.jsxs)("span", {
                    className: "text-sm text-[#5c647a]",
                    children: [
                      "© ",
                      new Date().getFullYear(),
                      " ORIUX. Todos os direitos reservados.",
                    ],
                  }),
                  (0, e.jsxs)("div", {
                    className: "flex items-center gap-6",
                    children: [
                      (0, e.jsx)("a", {
                        href: "#",
                        className:
                          "text-sm text-[#5c647a] hover:text-[#e9eeff] transition-colors duration-300",
                        children: "Politica de Privacidade",
                      }),
                      (0, e.jsx)("a", {
                        href: "#",
                        className:
                          "text-sm text-[#5c647a] hover:text-[#e9eeff] transition-colors duration-300",
                        children: "Termos de Uso",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      );
    }
    (t.s(["Navigation", () => o], 13474),
      i.gsap.registerPlugin(n.ScrollTrigger),
      t.s(["Footer", () => a], 76841));
  },
]);
