(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  16015,
  (e, t, r) => {},
  98547,
  (e, t, r) => {
    var s = e.i(47167);
    e.r(16015);
    var a = e.r(71645),
      i = a && "object" == typeof a && "default" in a ? a : { default: a },
      o = void 0 !== s.default && s.default.env && !0,
      n = function (e) {
        return "[object String]" === Object.prototype.toString.call(e);
      },
      l = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            r = t.name,
            s = void 0 === r ? "stylesheet" : r,
            a = t.optimizeForSpeed,
            i = void 0 === a ? o : a;
          (c(n(s), "`name` must be a string"),
            (this._name = s),
            (this._deletedRulePlaceholder = "#" + s + "-deleted-rule____{}"),
            c("boolean" == typeof i, "`optimizeForSpeed` must be a boolean"),
            (this._optimizeForSpeed = i),
            (this._serverSheet = void 0),
            (this._tags = []),
            (this._injected = !1),
            (this._rulesCount = 0));
          var l =
            "u" > typeof window &&
            document.querySelector('meta[property="csp-nonce"]');
          this._nonce = l ? l.getAttribute("content") : null;
        }
        var t,
          r = e.prototype;
        return (
          (r.setOptimizeForSpeed = function (e) {
            (c(
              "boolean" == typeof e,
              "`setOptimizeForSpeed` accepts a boolean",
            ),
              c(
                0 === this._rulesCount,
                "optimizeForSpeed cannot be when rules have already been inserted",
              ),
              this.flush(),
              (this._optimizeForSpeed = e),
              this.inject());
          }),
          (r.isOptimizeForSpeed = function () {
            return this._optimizeForSpeed;
          }),
          (r.inject = function () {
            var e = this;
            if (
              (c(!this._injected, "sheet already injected"),
              (this._injected = !0),
              "u" > typeof window && this._optimizeForSpeed)
            ) {
              ((this._tags[0] = this.makeStyleTag(this._name)),
                (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                this._optimizeForSpeed ||
                  (o ||
                    console.warn(
                      "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.",
                    ),
                  this.flush(),
                  (this._injected = !0)));
              return;
            }
            this._serverSheet = {
              cssRules: [],
              insertRule: function (t, r) {
                return (
                  "number" == typeof r
                    ? (e._serverSheet.cssRules[r] = { cssText: t })
                    : e._serverSheet.cssRules.push({ cssText: t }),
                  r
                );
              },
              deleteRule: function (t) {
                e._serverSheet.cssRules[t] = null;
              },
            };
          }),
          (r.getSheetForTag = function (e) {
            if (e.sheet) return e.sheet;
            for (var t = 0; t < document.styleSheets.length; t++)
              if (document.styleSheets[t].ownerNode === e)
                return document.styleSheets[t];
          }),
          (r.getSheet = function () {
            return this.getSheetForTag(this._tags[this._tags.length - 1]);
          }),
          (r.insertRule = function (e, t) {
            if (
              (c(n(e), "`insertRule` accepts only strings"),
              "u" < typeof window)
            )
              return (
                "number" != typeof t && (t = this._serverSheet.cssRules.length),
                this._serverSheet.insertRule(e, t),
                this._rulesCount++
              );
            if (this._optimizeForSpeed) {
              var r = this.getSheet();
              "number" != typeof t && (t = r.cssRules.length);
              try {
                r.insertRule(e, t);
              } catch (t) {
                return (
                  o ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        e +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info",
                    ),
                  -1
                );
              }
            } else {
              var s = this._tags[t];
              this._tags.push(this.makeStyleTag(this._name, e, s));
            }
            return this._rulesCount++;
          }),
          (r.replaceRule = function (e, t) {
            if (this._optimizeForSpeed || "u" < typeof window) {
              var r = "u" > typeof window ? this.getSheet() : this._serverSheet;
              if (
                (t.trim() || (t = this._deletedRulePlaceholder), !r.cssRules[e])
              )
                return e;
              r.deleteRule(e);
              try {
                r.insertRule(t, e);
              } catch (s) {
                (o ||
                  console.warn(
                    "StyleSheet: illegal rule: \n\n" +
                      t +
                      "\n\nSee https://stackoverflow.com/q/20007992 for more info",
                  ),
                  r.insertRule(this._deletedRulePlaceholder, e));
              }
            } else {
              var s = this._tags[e];
              (c(s, "old rule at index `" + e + "` not found"),
                (s.textContent = t));
            }
            return e;
          }),
          (r.deleteRule = function (e) {
            if ("u" < typeof window)
              return void this._serverSheet.deleteRule(e);
            if (this._optimizeForSpeed) this.replaceRule(e, "");
            else {
              var t = this._tags[e];
              (c(t, "rule at index `" + e + "` not found"),
                t.parentNode.removeChild(t),
                (this._tags[e] = null));
            }
          }),
          (r.flush = function () {
            ((this._injected = !1),
              (this._rulesCount = 0),
              "u" > typeof window
                ? (this._tags.forEach(function (e) {
                    return e && e.parentNode.removeChild(e);
                  }),
                  (this._tags = []))
                : (this._serverSheet.cssRules = []));
          }),
          (r.cssRules = function () {
            var e = this;
            return "u" < typeof window
              ? this._serverSheet.cssRules
              : this._tags.reduce(function (t, r) {
                  return (
                    r
                      ? (t = t.concat(
                          Array.prototype.map.call(
                            e.getSheetForTag(r).cssRules,
                            function (t) {
                              return t.cssText === e._deletedRulePlaceholder
                                ? null
                                : t;
                            },
                          ),
                        ))
                      : t.push(null),
                    t
                  );
                }, []);
          }),
          (r.makeStyleTag = function (e, t, r) {
            t &&
              c(n(t), "makeStyleTag accepts only strings as second parameter");
            var s = document.createElement("style");
            (this._nonce && s.setAttribute("nonce", this._nonce),
              (s.type = "text/css"),
              s.setAttribute("data-" + e, ""),
              t && s.appendChild(document.createTextNode(t)));
            var a = document.head || document.getElementsByTagName("head")[0];
            return (r ? a.insertBefore(s, r) : a.appendChild(s), s);
          }),
          (t = [
            {
              key: "length",
              get: function () {
                return this._rulesCount;
              },
            },
          ]),
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var s = t[r];
              ((s.enumerable = s.enumerable || !1),
                (s.configurable = !0),
                "value" in s && (s.writable = !0),
                Object.defineProperty(e, s.key, s));
            }
          })(e.prototype, t),
          e
        );
      })();
    function c(e, t) {
      if (!e) throw Error("StyleSheet: " + t + ".");
    }
    var d = function (e) {
        for (var t = 5381, r = e.length; r; ) t = (33 * t) ^ e.charCodeAt(--r);
        return t >>> 0;
      },
      u = {};
    function p(e, t) {
      if (!t) return "jsx-" + e;
      var r = String(t),
        s = e + r;
      return (u[s] || (u[s] = "jsx-" + d(e + "-" + r)), u[s]);
    }
    function f(e, t) {
      "u" < typeof window && (t = t.replace(/\/style/gi, "\\/style"));
      var r = e + t;
      return (
        u[r] || (u[r] = t.replace(/__jsx-style-dynamic-selector/g, e)),
        u[r]
      );
    }
    var h = (function () {
        function e(e) {
          var t = void 0 === e ? {} : e,
            r = t.styleSheet,
            s = void 0 === r ? null : r,
            a = t.optimizeForSpeed,
            i = void 0 !== a && a;
          ((this._sheet =
            s || new l({ name: "styled-jsx", optimizeForSpeed: i })),
            this._sheet.inject(),
            s &&
              "boolean" == typeof i &&
              (this._sheet.setOptimizeForSpeed(i),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {}));
        }
        var t = e.prototype;
        return (
          (t.add = function (e) {
            var t = this;
            (void 0 === this._optimizeForSpeed &&
              ((this._optimizeForSpeed = Array.isArray(e.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              "u" > typeof window &&
                !this._fromServer &&
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(
                  function (e, t) {
                    return ((e[t] = 0), e);
                  },
                  {},
                ))));
            var r = this.getIdAndRules(e),
              s = r.styleId,
              a = r.rules;
            if (s in this._instancesCounts) {
              this._instancesCounts[s] += 1;
              return;
            }
            var i = a
              .map(function (e) {
                return t._sheet.insertRule(e);
              })
              .filter(function (e) {
                return -1 !== e;
              });
            ((this._indices[s] = i), (this._instancesCounts[s] = 1));
          }),
          (t.remove = function (e) {
            var t = this,
              r = this.getIdAndRules(e).styleId;
            if (
              ((function (e, t) {
                if (!e) throw Error("StyleSheetRegistry: " + t + ".");
              })(r in this._instancesCounts, "styleId: `" + r + "` not found"),
              (this._instancesCounts[r] -= 1),
              this._instancesCounts[r] < 1)
            ) {
              var s = this._fromServer && this._fromServer[r];
              (s
                ? (s.parentNode.removeChild(s), delete this._fromServer[r])
                : (this._indices[r].forEach(function (e) {
                    return t._sheet.deleteRule(e);
                  }),
                  delete this._indices[r]),
                delete this._instancesCounts[r]);
            }
          }),
          (t.update = function (e, t) {
            (this.add(t), this.remove(e));
          }),
          (t.flush = function () {
            (this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}));
          }),
          (t.cssRules = function () {
            var e = this,
              t = this._fromServer
                ? Object.keys(this._fromServer).map(function (t) {
                    return [t, e._fromServer[t]];
                  })
                : [],
              r = this._sheet.cssRules();
            return t.concat(
              Object.keys(this._indices)
                .map(function (t) {
                  return [
                    t,
                    e._indices[t]
                      .map(function (e) {
                        return r[e].cssText;
                      })
                      .join(e._optimizeForSpeed ? "" : "\n"),
                  ];
                })
                .filter(function (e) {
                  return !!e[1];
                }),
            );
          }),
          (t.styles = function (e) {
            var t, r;
            return (
              (t = this.cssRules()),
              void 0 === (r = e) && (r = {}),
              t.map(function (e) {
                var t = e[0],
                  s = e[1];
                return i.default.createElement("style", {
                  id: "__" + t,
                  key: "__" + t,
                  nonce: r.nonce ? r.nonce : void 0,
                  dangerouslySetInnerHTML: { __html: s },
                });
              })
            );
          }),
          (t.getIdAndRules = function (e) {
            var t = e.children,
              r = e.dynamic,
              s = e.id;
            if (r) {
              var a = p(s, r);
              return {
                styleId: a,
                rules: Array.isArray(t)
                  ? t.map(function (e) {
                      return f(a, e);
                    })
                  : [f(a, t)],
              };
            }
            return { styleId: p(s), rules: Array.isArray(t) ? t : [t] };
          }),
          (t.selectFromServer = function () {
            return Array.prototype.slice
              .call(document.querySelectorAll('[id^="__jsx-"]'))
              .reduce(function (e, t) {
                return ((e[t.id.slice(2)] = t), e);
              }, {});
          }),
          e
        );
      })(),
      m = a.createContext(null);
    function x() {
      return new h();
    }
    function g() {
      return a.useContext(m);
    }
    m.displayName = "StyleSheetContext";
    var y = i.default.useInsertionEffect || i.default.useLayoutEffect,
      v = "u" > typeof window ? x() : void 0;
    function b(e) {
      var t = v || g();
      return (
        t &&
          ("u" < typeof window
            ? t.add(e)
            : y(
                function () {
                  return (
                    t.add(e),
                    function () {
                      t.remove(e);
                    }
                  );
                },
                [e.id, String(e.dynamic)],
              )),
        null
      );
    }
    ((b.dynamic = function (e) {
      return e
        .map(function (e) {
          return p(e[0], e[1]);
        })
        .join(" ");
    }),
      (r.StyleRegistry = function (e) {
        var t = e.registry,
          r = e.children,
          s = a.useContext(m),
          o = a.useState(function () {
            return s || t || x();
          })[0];
        return i.default.createElement(m.Provider, { value: o }, r);
      }),
      (r.createStyleRegistry = x),
      (r.style = b),
      (r.useStyleRegistry = g));
  },
  37902,
  (e, t, r) => {
    t.exports = e.r(98547).style;
  },
  31713,
  (e) => {
    "use strict";
    var t = e.i(43476),
      r = e.i(71645),
      s = e.i(89970),
      a = e.i(83495),
      i = e.i(7482),
      o = e.i(13474);
    function n() {
      let e = (0, r.useRef)(null),
        i = (0, r.useRef)(null),
        o = (0, r.useRef)(null),
        n = (0, r.useRef)(null),
        l = (0, r.useRef)(null),
        c = (0, r.useRef)(null),
        d = (0, r.useRef)(null),
        u = (0, r.useRef)(null),
        p = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let t = s.gsap.context(() => {
            let t = s.gsap.timeline({ delay: 0.3 });
            if (
              (t.fromTo(
                n.current,
                { opacity: 0, y: 20, scale: 0.9 },
                {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.8,
                  ease: "power3.out",
                },
              ),
              i.current)
            ) {
              let e = i.current.querySelectorAll(".char");
              t.fromTo(
                e,
                { opacity: 0, y: 100, rotateX: -90 },
                {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  duration: 1,
                  ease: "power4.out",
                  stagger: 0.05,
                },
                "-=0.4",
              );
            }
            (t.fromTo(
              o.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
              "-=0.5",
            ),
              t.fromTo(
                l.current,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "-=0.3",
              ),
              s.gsap.to(c.current, {
                y: 30,
                x: 15,
                duration: 4,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: !0,
              }),
              a.ScrollTrigger.create({
                trigger: e.current,
                start: "top top",
                end: "bottom top",
                scrub: 0.5,
                onUpdate: (e) => {
                  let t = e.progress;
                  (s.gsap.to(i.current, {
                    y: 300 * t,
                    scale: 1 - 0.15 * t,
                    duration: 0,
                  }),
                    s.gsap.to(d.current, {
                      y: 500 * t,
                      opacity: 1 - 2 * t,
                      duration: 0,
                    }),
                    s.gsap.to(u.current, {
                      y: 350 * t,
                      opacity: 1 - 1.5 * t,
                      duration: 0,
                    }),
                    s.gsap.to(p.current, {
                      y: 150 * t,
                      opacity: 0.3 - 0.3 * t,
                      duration: 0,
                    }),
                    s.gsap.to(c.current, {
                      y: 200 * t + 30,
                      scale: 1 + 0.8 * t,
                      opacity: 0.4 - 0.4 * t,
                      duration: 0,
                    }));
                },
              }));
          }, e);
          return () => t.revert();
        }, []),
        (0, t.jsxs)("section", {
          id: "hero",
          ref: e,
          className:
            "relative min-h-[200vh] flex flex-col items-center justify-start overflow-hidden",
          children: [
            (0, t.jsxs)("div", {
              ref: p,
              className: "absolute inset-0 pointer-events-none opacity-30",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full",
                  style: {
                    background:
                      "radial-gradient(circle, rgba(0,46,147,0.3) 0%, transparent 70%)",
                    filter: "blur(80px)",
                  },
                }),
                (0, t.jsx)("div", {
                  className:
                    "absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full",
                  style: {
                    background:
                      "radial-gradient(circle, rgba(7,66,232,0.2) 0%, transparent 70%)",
                    filter: "blur(60px)",
                  },
                }),
              ],
            }),
            (0, t.jsx)("div", {
              ref: u,
              className: "absolute inset-0 pointer-events-none",
              children: (0, t.jsxs)("svg", {
                className: "w-full h-full opacity-20",
                "aria-hidden": "true",
                children: [
                  (0, t.jsx)("line", {
                    x1: "50%",
                    y1: "0",
                    x2: "50%",
                    y2: "100%",
                    stroke: "#5f99ff",
                    strokeWidth: "0.5",
                    strokeDasharray: "8 8",
                  }),
                  (0, t.jsx)("line", {
                    x1: "0",
                    y1: "50%",
                    x2: "100%",
                    y2: "50%",
                    stroke: "#5f99ff",
                    strokeWidth: "0.5",
                    strokeDasharray: "8 8",
                  }),
                  (0, t.jsx)("line", {
                    x1: "25%",
                    y1: "0",
                    x2: "25%",
                    y2: "100%",
                    stroke: "#5f99ff",
                    strokeWidth: "0.3",
                    strokeDasharray: "4 12",
                    opacity: "0.5",
                  }),
                  (0, t.jsx)("line", {
                    x1: "75%",
                    y1: "0",
                    x2: "75%",
                    y2: "100%",
                    stroke: "#5f99ff",
                    strokeWidth: "0.3",
                    strokeDasharray: "4 12",
                    opacity: "0.5",
                  }),
                  (0, t.jsx)("circle", {
                    cx: "50%",
                    cy: "50%",
                    r: "200",
                    fill: "none",
                    stroke: "#0742e8",
                    strokeWidth: "0.5",
                    opacity: "0.3",
                  }),
                  (0, t.jsx)("circle", {
                    cx: "50%",
                    cy: "50%",
                    r: "350",
                    fill: "none",
                    stroke: "#0742e8",
                    strokeWidth: "0.5",
                    opacity: "0.2",
                  }),
                  (0, t.jsx)("circle", {
                    cx: "50%",
                    cy: "50%",
                    r: "500",
                    fill: "none",
                    stroke: "#002e93",
                    strokeWidth: "0.3",
                    opacity: "0.1",
                  }),
                ],
              }),
            }),
            (0, t.jsx)("div", {
              ref: c,
              className:
                "absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-40 pointer-events-none",
              style: {
                background:
                  "radial-gradient(circle, rgba(7,66,232,0.5) 0%, rgba(0,46,147,0.3) 40%, transparent 70%)",
                filter: "blur(60px)",
              },
            }),
            (0, t.jsxs)("div", {
              ref: d,
              className:
                "sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6",
              children: [
                (0, t.jsxs)("div", {
                  ref: n,
                  className:
                    "mb-8 px-4 py-2 border border-[#5f99ff]/30 rounded-full flex items-center gap-3 opacity-0",
                  children: [
                    (0, t.jsx)("span", {
                      className:
                        "w-2 h-2 rounded-full bg-[#0742e8] animate-pulse",
                    }),
                    (0, t.jsx)("span", {
                      className: "label text-[#5c647a]",
                      children: "Estudio de Desenvolvimento Web Criativo",
                    }),
                  ],
                }),
                (0, t.jsx)("h1", {
                  ref: i,
                  className:
                    "display-xl font-display text-center tracking-tighter perspective-1000",
                  style: { transformStyle: "preserve-3d" },
                  children: "ORIUX"
                    .split("")
                    .map((e, r) =>
                      (0, t.jsx)(
                        "span",
                        {
                          className: "char inline-block text-[#e9eeff]",
                          children: e,
                        },
                        r,
                      ),
                    ),
                }),
                (0, t.jsx)("p", {
                  ref: o,
                  className:
                    "mt-8 body-lg text-[#5c647a] max-w-xl text-center opacity-0",
                  children:
                    "Criamos experiencias digitais imersivas que transcendem o comum. Onde codigo encontra arte.",
                }),
                (0, t.jsxs)("div", {
                  ref: l,
                  className:
                    "absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0",
                  children: [
                    (0, t.jsx)("span", {
                      className: "label text-[#5c647a]",
                      children: "Role para explorar",
                    }),
                    (0, t.jsx)("div", {
                      className:
                        "w-6 h-10 border border-[#5f99ff]/30 rounded-full flex justify-center pt-2",
                      children: (0, t.jsx)("div", {
                        className:
                          "w-1 h-3 bg-[#0742e8] rounded-full animate-bounce",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    }
    function l() {
      let e = (0, r.useRef)(null),
        i = (0, r.useRef)(null),
        o = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let t = s.gsap.context(() => {
            let e = i.current?.querySelectorAll(".word");
            e &&
              (s.gsap.set(e, { opacity: 0.1, y: 20 }),
              e.forEach((e, t) => {
                s.gsap.to(e, {
                  opacity: 1,
                  y: 0,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: e,
                    start: "top 85%",
                    end: "top 50%",
                    scrub: 0.5,
                  },
                });
              }));
            let t = o.current?.querySelectorAll(".stat-number");
            t?.forEach((e) => {
              let t = parseInt(e.getAttribute("data-value") || "0");
              a.ScrollTrigger.create({
                trigger: e,
                start: "top 80%",
                onEnter: () => {
                  s.gsap.to(e, {
                    textContent: t,
                    duration: 2,
                    ease: "power2.out",
                    snap: { textContent: 1 },
                    onUpdate: function () {
                      e.textContent = Math.round(
                        parseFloat(e.textContent || "0"),
                      ).toString();
                    },
                  });
                },
                once: !0,
              });
            });
          }, e);
          return () => t.revert();
        }, []),
        (0, t.jsxs)("section", {
          id: "about",
          ref: e,
          className:
            "relative min-h-[150vh] bg-[#0e1425] overflow-hidden py-32",
          children: [
            (0, t.jsx)("div", {
              className: "absolute inset-0 opacity-50",
              style: {
                background:
                  "radial-gradient(ellipse at 30% 50%, rgba(0,46,147,0.3) 0%, transparent 50%)",
              },
            }),
            (0, t.jsxs)("div", {
              className: "relative px-6 md:px-12 lg:px-24",
              children: [
                (0, t.jsx)("div", {
                  className: "mb-12",
                  children: (0, t.jsx)("span", {
                    className: "label text-[#0742e8]",
                    children: "[ Sobre Nos ]",
                  }),
                }),
                (0, t.jsx)("div", {
                  ref: i,
                  className: "max-w-5xl mb-32",
                  children: (0, t.jsx)("p", {
                    className: "display-md font-display leading-tight",
                    children: [
                      "Na",
                      "ORIUX, ",
                      "acreditamos",
                      "que",
                      "um",
                      "site",
                      "deve",
                      "ser",
                      "mais",
                      "do",
                      "que",
                      "apenas",
                      "uma",
                      "página",
                      "na",
                      "internet.",
                    ].map((e, r) =>
                      (0, t.jsx)(
                        "span",
                        {
                          className: "word inline-block mr-[0.3em]",
                          style: {
                            color: [
                              "ORIUX, ",
                              "site",
                              "página",
                              "na",
                              "internet.",
                            ].includes(e)
                              ? "#5f99ff"
                              : "#e9eeff",
                          },
                          children: e,
                        },
                        r,
                      ),
                    ),
                  }),
                }),
                (0, t.jsxs)("div", {
                  className: "max-w-2xl mb-32",
                  children: [
                    (0, t.jsx)("p", {
                      className: "body-lg text-[#5c647a] mb-6",
                      children:
                        "Criamos experiências digitais modernas que elevam o nível da sua marca, aumentam sua credibilidade e fazem seu negócio parecer muito mais profissional.",
                    }),
                    (0, t.jsx)("p", {
                      className: "body-lg text-[#5c647a]",
                      children:
                        "Combinamos design, desenvolvimento e animações avançadas para entregar sites que realmente se destacam da concorrência.",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  ref: o,
                  className: "grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "stat-number display-md text-[#0742e8] mb-2",
                          "data-value": "23",
                          children: "0",
                        }),
                        (0, t.jsx)("span", {
                          className: "label text-[#5c647a]",
                          children: "Projetos Entregues",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "stat-number display-md text-[#0742e8] mb-2",
                          "data-value": "3",
                          children: "0",
                        }),
                        (0, t.jsx)("span", {
                          className: "label text-[#5c647a]",
                          children: "Certificações",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "stat-number display-md text-[#0742e8] mb-2",
                          "data-value": "3",
                          children: "0",
                        }),
                        (0, t.jsx)("span", {
                          className: "label text-[#5c647a]",
                          children: "Anos de Experiencia",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "stat-number display-md text-[#0742e8] mb-2",
                          "data-value": "3",
                          children: "0",
                        }),
                        (0, t.jsx)("span", {
                          className: "label text-[#5c647a]",
                          children: "Parcerias fechadas",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    }
    (s.gsap.registerPlugin(a.ScrollTrigger),
      s.gsap.registerPlugin(a.ScrollTrigger),
      s.gsap.registerPlugin(a.ScrollTrigger));
    let c = [
      {
        number: "01",
        title: "Websites Profissionais",
        description:
          "Sites modernos, rápidos e responsivos que elevam a imagem da sua empresa.",
        tags: ["Site", "Estrategia UX", "Crescimento de Marca"],
      },
      {
        number: "02",
        title: "Animações e Experiências Interativas",
        description:
          "Interfaces animadas e interações que tornam seu site memorável.",
        tags: ["UI/UX Design", "Motion Design", "Animação"],
      },
      {
        number: "03",
        title: "Design Estratégico",
        description:
          "Cada detalhe é pensado para transmitir profissionalismo e gerar confiança.",
        tags: ["Profissionalismo", "Marca", "Cuidado"],
      },
      {
        number: "04",
        title: "Performance e Otimização",
        description:
          "Sites rápidos, leves e preparados para oferecer a melhor experiência.",
        tags: ["Performance", "Boas práticas", "Cuidado com usuário"],
      },
    ];
    function d() {
      let e = (0, r.useRef)(null),
        a = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let t = s.gsap.context(() => {
            let t = a.current?.querySelectorAll(".service-card");
            if (a.current && t) {
              let r = a.current.scrollWidth - window.innerWidth;
              (s.gsap.to(a.current, {
                x: -r,
                ease: "none",
                scrollTrigger: {
                  trigger: e.current,
                  start: "top top",
                  end: () => `+=${r}`,
                  pin: !0,
                  scrub: 1,
                  anticipatePin: 1,
                },
              }),
                t.forEach((e) => {
                  let t = e.querySelector(".card-content"),
                    r = e.querySelector(".card-number");
                  (s.gsap.fromTo(
                    t,
                    { opacity: 0, y: 60 },
                    {
                      opacity: 1,
                      y: 0,
                      ease: "power3.out",
                      scrollTrigger: {
                        trigger: e,
                        containerAnimation: s.gsap.getById("horizontal-scroll"),
                        start: "left 80%",
                        end: "left 30%",
                        scrub: 1,
                      },
                    },
                  ),
                    s.gsap.fromTo(
                      r,
                      { scale: 0.5, opacity: 0 },
                      {
                        scale: 1,
                        opacity: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                          trigger: e,
                          containerAnimation:
                            s.gsap.getById("horizontal-scroll"),
                          start: "left 90%",
                          end: "left 50%",
                          scrub: 1,
                        },
                      },
                    ));
                }));
            }
          }, e);
          return () => t.revert();
        }, []),
        (0, t.jsxs)("section", {
          id: "services",
          ref: e,
          className: "relative min-h-screen bg-[#0e1425] overflow-hidden",
          children: [
            (0, t.jsx)("div", {
              className: "absolute top-8 left-6 md:left-12 lg:left-24 z-10",
              children: (0, t.jsx)("span", {
                className: "label text-[#0742e8]",
                children: "[ Servicos ]",
              }),
            }),
            (0, t.jsxs)("div", {
              ref: a,
              className: "flex items-center h-screen gap-8 pl-[10vw] pr-[5vw] md:pr-[20vw]",
              style: { width: "max-content" },
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "flex-shrink-0 w-[85vw] md:w-[40vw] h-[70vh] flex flex-col justify-center pr-12",
                  children: [
                    (0, t.jsx)("h2", {
                      className: "display-lg font-display text-gradient mb-6",
                      children: "O que fazemos",
                    }),
                    (0, t.jsx)("p", {
                      className: "body-lg text-[#5c647a] max-w-md",
                      children:
                        "Especializamos em criar experiencias digitais que quebram barreiras e desafiam convencões.",
                    }),
                  ],
                }),
                c.map((e) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className:
                        "service-card relative flex-shrink-0 md:w-[30vw] w-[65vw] h-[70vh] p-8 rounded-2xl overflow-hidden",
                      style: {
                        background:
                          "linear-gradient(135deg, rgba(14,20,37,0.8) 0%, rgba(0,46,147,0.1) 100%)",
                        border: "1px solid rgba(95,153,255,0.15)",
                      },
                      children: [
                        (0, t.jsx)("span", {
                          className:
                            "card-number absolute -right-8 -top-12 text-[20rem] font-display font-bold text-[#0742e8] opacity-10 pointer-events-none select-none",
                          children: e.number,
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "card-content relative z-10 h-full flex flex-col justify-between",
                          children: [
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("span", {
                                  className: "label text-[#5f99ff]",
                                  children: e.number,
                                }),
                                (0, t.jsx)("h3", {
                                  className:
                                    "display-md font-display mt-4 mb-6 text-[#e9eeff]",
                                  children: e.title,
                                }),
                                (0, t.jsx)("p", {
                                  className: "body-lg text-[#5c647a] max-w-sm",
                                  children: e.description,
                                }),
                              ],
                            }),
                            (0, t.jsx)("div", {
                              className: "flex flex-wrap gap-3",
                              children: e.tags.map((e) =>
                                (0, t.jsx)(
                                  "span",
                                  {
                                    className:
                                      "px-4 py-2 text-sm border border-[#5f99ff]/30 rounded-full text-[#5f99ff]",
                                    children: e,
                                  },
                                  e,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                          style: {
                            background:
                              "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(7,66,232,0.15) 0%, transparent 50%)",
                          },
                        }),
                      ],
                    },
                    e.number,
                  ),
                ),
              ],
            }),
          ],
        })
      );
    }
    s.gsap.registerPlugin(a.ScrollTrigger);
    let u = [
      {
        id: "01",
        name: "Oca da Serra",
        category: "Hospedagem tecnológica",
        year: "2025",
        url: "https://ocadaserra.com",
        color: "#0742e8",
        description:
          "Um sistema feito com cuidado para um empreendimento de hospedagens",
      },
      {
        id: "02",
        name: "Digital Kings",
        category: "Studio de arte criativa",
        year: "2026",
        url: "https://studio-kings.netlify.app",
        color: "#5f99ff",
        description:
          "Website animado feito desenvolvido para mostrar os melhores feitos da empresa",
      },
      {
        id: "03",
        name: "Torra Café Bistrô",
        category: "Cardápio Digital",
        year: "2024",
        url: "https://cafe-torra.web.app",
        color: "#002e93",
        description:
          "Um cardápio digital para melhor visualização tecnológica dos seus produtos",
      },
      {
        id: "04",
        name: "DusolAgro",
        category: "Site institucional",
        year: "2024",
        url: "https://dusolagro.com.br",
        color: "#0742e8",
        description: "Um site feito sob medida para uma empresa do agronegócio",
      },
    ];
    function p() {
      let e = (0, r.useRef)(null),
        [i, o] = (0, r.useState)(0);
      return (
        (0, r.useEffect)(() => {
          let t = s.gsap.context(() => {
            let t = e.current?.querySelectorAll(".project-item");
            t?.forEach((e, t) => {
              a.ScrollTrigger.create({
                trigger: e,
                start: "top 60%",
                end: "bottom 40%",
                onEnter: () => o(t),
                onEnterBack: () => o(t),
              });
              let r = e.querySelector(".project-title"),
                i = e.querySelector(".project-meta"),
                n = e.querySelector(".project-line");
              (s.gsap.fromTo(
                n,
                { scaleX: 0 },
                {
                  scaleX: 1,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: e,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                  },
                },
              ),
                s.gsap.fromTo(
                  r,
                  { y: 100, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: e,
                      start: "top 80%",
                      toggleActions: "play none none reverse",
                    },
                  },
                ),
                s.gsap.fromTo(
                  i,
                  { y: 30, opacity: 0 },
                  {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                      trigger: e,
                      start: "top 80%",
                      toggleActions: "play none none reverse",
                    },
                  },
                ));
            });
          }, e);
          return () => t.revert();
        }, []),
        (0, t.jsxs)("section", {
          id: "projects",
          ref: e,
          className: "relative min-h-screen py-32 bg-[#0e1425]",
          children: [
            (0, t.jsx)("div", {
              className:
                "fixed top-0 left-0 w-1/2 h-screen pointer-events-none transition-opacity duration-700 hidden lg:block",
              style: {
                opacity: 0.5,
                background: `radial-gradient(circle at 30% 50%, ${u[i].color}40 0%, transparent 50%)`,
              },
            }),
            (0, t.jsxs)("div", {
              className: "px-6 md:px-12 lg:px-24 mb-24",
              children: [
                (0, t.jsx)("span", {
                  className: "label text-[#0742e8] block mb-4",
                  children: "[ Trabalhos Selecionados ]",
                }),
                (0, t.jsxs)("h2", {
                  className: "display-lg font-display",
                  children: [
                    (0, t.jsx)("span", {
                      className: "text-[#e9eeff]",
                      children: "Projetos que ",
                    }),
                    (0, t.jsx)("span", {
                      className: "text-[#5f99ff]",
                      children: "definem",
                    }),
                    (0, t.jsx)("br", {}),
                    (0, t.jsx)("span", {
                      className: "text-[#e9eeff]",
                      children: "nosso trabalho",
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "relative",
              children: [
                u.map((e, r) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className:
                        "project-item group px-6 md:px-12 lg:px-24 py-12 cursor-pointer",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "project-line h-px w-full bg-[#5f99ff]/20 mb-8 origin-left",
                          style: { transform: "scaleX(0)" },
                        }),
                        (0, t.jsxs)("a", {
                          href: e.url,
                          target: "_blank",
                          className:
                            "flex flex-col lg:flex-row lg:items-end justify-between gap-8",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex-1 overflow-hidden",
                              children: [
                                (0, t.jsxs)("div", {
                                  className:
                                    "project-meta flex items-center gap-6 mb-4",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "label text-[#5c647a]",
                                      children: e.id,
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "w-12 h-px bg-[#5f99ff]/30",
                                    }),
                                    (0, t.jsx)("span", {
                                      className: "label text-[#5c647a]",
                                      children: e.category,
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("h3", {
                                  className:
                                    "project-title display-lg font-display text-[#e9eeff] group-hover:text-[#5f99ff] transition-colors duration-500",
                                  style: {
                                    WebkitTextStroke:
                                      i === r ? "none" : "1px #5f99ff",
                                  },
                                  children: e.name,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "flex items-center gap-8 lg:gap-16",
                              children: [
                                (0, t.jsx)("p", {
                                  className:
                                    "body-lg text-[#5c647a] max-w-xs hidden md:block",
                                  children: e.description,
                                }),
                                (0, t.jsxs)("div", {
                                  className: "flex flex-col items-end",
                                  children: [
                                    (0, t.jsx)("span", {
                                      className: "label text-[#5c647a] mb-2",
                                      children: "Ano",
                                    }),
                                    (0, t.jsx)("span", {
                                      className:
                                        "text-2xl font-display text-[#e9eeff]",
                                      children: e.year,
                                    }),
                                  ],
                                }),
                                (0, t.jsx)("div", {
                                  className:
                                    "w-16 h-16 rounded-full border border-[#5f99ff]/30 flex items-center justify-center group-hover:bg-[#0742e8] group-hover:border-[#0742e8] transition-all duration-500",
                                  children: (0, t.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    className:
                                      "transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300",
                                    children: (0, t.jsx)("path", {
                                      d: "M7 17L17 7M17 7H7M17 7V17",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className:
                                        "text-[#5f99ff] group-hover:text-[#e9eeff]",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
                (0, t.jsx)("div", {
                  className: "mx-6 md:mx-12 lg:mx-24 h-px bg-[#5f99ff]/20",
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className: "px-6 md:px-12 lg:px-24 mt-16 flex justify-end",
              children: (0, t.jsxs)("button", {
                className:
                  "group flex items-center gap-4 text-[#5f99ff] hover:text-[#e9eeff] transition-colors duration-300",
                children: [
                  (0, t.jsx)("span", {
                    className: "label",
                    children: "Ver Todos os Projetos",
                  }),
                  (0, t.jsx)("span", {
                    className:
                      "w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:bg-[#0742e8] transition-colors duration-300",
                    children: (0, t.jsx)("svg", {
                      width: "16",
                      height: "16",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      children: (0, t.jsx)("path", {
                        d: "M5 12H19M19 12L12 5M19 12L12 19",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
      );
    }
    s.gsap.registerPlugin(a.ScrollTrigger);
    let f = [
      {
        phase: "Descoberta",
        title: "Entender",
        description:
          "Mergulhamos no seu mundo. Pesquisa, entrevistas e imersao profunda na sua visao.",
        icon: (0, t.jsxs)("svg", {
          width: "48",
          height: "48",
          viewBox: "0 0 48 48",
          fill: "none",
          children: [
            (0, t.jsx)("circle", {
              cx: "24",
              cy: "24",
              r: "20",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("circle", {
              cx: "24",
              cy: "24",
              r: "8",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("line", {
              x1: "24",
              y1: "4",
              x2: "24",
              y2: "12",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("line", {
              x1: "24",
              y1: "36",
              x2: "24",
              y2: "44",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("line", {
              x1: "4",
              y1: "24",
              x2: "12",
              y2: "24",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("line", {
              x1: "36",
              y1: "24",
              x2: "44",
              y2: "24",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
          ],
        }),
      },
      {
        phase: "Ideacao",
        title: "Conceituar",
        description:
          "Ideias ganham forma atraves de wireframes, moodboards e exploracao criativa.",
        icon: (0, t.jsxs)("svg", {
          width: "48",
          height: "48",
          viewBox: "0 0 48 48",
          fill: "none",
          children: [
            (0, t.jsx)("rect", {
              x: "6",
              y: "6",
              width: "16",
              height: "16",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("rect", {
              x: "26",
              y: "6",
              width: "16",
              height: "16",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("rect", {
              x: "6",
              y: "26",
              width: "16",
              height: "16",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("circle", {
              cx: "34",
              cy: "34",
              r: "8",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
          ],
        }),
      },
      {
        phase: "Design",
        title: "Visualizar",
        description:
          "Designs de alta fidelidade que dao vida a visao com atencao meticulosa aos detalhes.",
        icon: (0, t.jsxs)("svg", {
          width: "48",
          height: "48",
          viewBox: "0 0 48 48",
          fill: "none",
          children: [
            (0, t.jsx)("path", {
              d: "M24 4L44 14V34L24 44L4 34V14L24 4Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("path", {
              d: "M24 24L44 14",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("path", {
              d: "M24 24L4 14",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("path", {
              d: "M24 24V44",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
          ],
        }),
      },
      {
        phase: "Desenvolvimento",
        title: "Construir",
        description:
          "Codigo limpo, animacoes suaves e implementacao pixel-perfect.",
        icon: (0, t.jsxs)("svg", {
          width: "48",
          height: "48",
          viewBox: "0 0 48 48",
          fill: "none",
          children: [
            (0, t.jsx)("path", {
              d: "M14 16L6 24L14 32",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            (0, t.jsx)("path", {
              d: "M34 16L42 24L34 32",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            (0, t.jsx)("path", {
              d: "M28 8L20 40",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
          ],
        }),
      },
      {
        phase: "Lancamento",
        title: "Entregar",
        description:
          "Testes, otimizacao e um lancamento impecavel no mundo digital.",
        icon: (0, t.jsxs)("svg", {
          width: "48",
          height: "48",
          viewBox: "0 0 48 48",
          fill: "none",
          children: [
            (0, t.jsx)("path", {
              d: "M24 4L24 44",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("path", {
              d: "M12 16L24 4L36 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            (0, t.jsx)("circle", {
              cx: "24",
              cy: "36",
              r: "4",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("path", {
              d: "M4 28H16",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            (0, t.jsx)("path", {
              d: "M32 28H44",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
          ],
        }),
      },
    ];
    function h() {
      let e = (0, r.useRef)(null),
        i = (0, r.useRef)(null),
        o = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let t = s.gsap.context(() => {
            s.gsap.fromTo(
              i.current,
              { scaleY: 0 },
              {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: e.current,
                  start: "top 20%",
                  end: "bottom 80%",
                  scrub: 1,
                },
              },
            );
            let t = o.current?.querySelectorAll(".process-step");
            t?.forEach((e, t) => {
              let r = e.querySelector(".step-icon"),
                i = e.querySelector(".step-content"),
                o = e.querySelector(".step-dot");
              (a.ScrollTrigger.create({
                trigger: e,
                start: "top 60%",
                end: "top 40%",
                onEnter: () => {
                  s.gsap.to(o, {
                    scale: 1.5,
                    boxShadow: "0 0 30px rgba(7,66,232,0.5)",
                    duration: 0.4,
                  });
                },
                onLeave: () => {
                  s.gsap.to(o, {
                    scale: 1,
                    boxShadow: "0 0 0px rgba(7,66,232,0)",
                    duration: 0.4,
                  });
                },
                onEnterBack: () => {
                  s.gsap.to(o, {
                    scale: 1.5,
                    boxShadow: "0 0 30px rgba(7,66,232,0.5)",
                    duration: 0.4,
                  });
                },
                onLeaveBack: () => {
                  s.gsap.to(o, {
                    scale: 1,
                    boxShadow: "0 0 0px rgba(7,66,232,0)",
                    duration: 0.4,
                  });
                },
              }),
                s.gsap.fromTo(
                  [r, i],
                  { opacity: 0, x: t % 2 == 0 ? -50 : 50 },
                  {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.1,
                    scrollTrigger: {
                      trigger: e,
                      start: "top 70%",
                      toggleActions: "play none none reverse",
                    },
                  },
                ));
            });
          }, e);
          return () => t.revert();
        }, []),
        (0, t.jsxs)("section", {
          id: "process",
          ref: e,
          className: "relative py-32 bg-[#0e1425] overflow-hidden",
          children: [
            (0, t.jsxs)("div", {
              className: "px-6 md:px-12 lg:px-24 mb-24 text-center",
              children: [
                (0, t.jsx)("span", {
                  className: "label text-[#0742e8] block mb-4",
                  children: "[ Nosso Processo ]",
                }),
                (0, t.jsxs)("h2", {
                  className: "display-lg font-display",
                  children: [
                    (0, t.jsx)("span", {
                      className: "text-[#e9eeff]",
                      children: "Da visao ",
                    }),
                    (0, t.jsx)("span", {
                      className: "text-[#5f99ff]",
                      children: "a realidade",
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              ref: o,
              className: "relative max-w-6xl mx-auto px-6",
              children: [
                (0, t.jsx)("div", {
                  className:
                    "absolute left-1/2 top-0 bottom-0 w-px bg-[#5f99ff]/10 -translate-x-1/2 hidden md:block",
                  children: (0, t.jsx)("div", {
                    ref: i,
                    className:
                      "absolute top-0 left-0 w-full bg-[#0742e8] origin-top",
                    style: { height: "100%", transform: "scaleY(0)" },
                  }),
                }),
                (0, t.jsx)("div", {
                  className: "space-y-24 md:space-y-32",
                  children: f.map((e, r) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className: `process-step relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${r % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "step-dot absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0742e8] border-4 border-[#0e1425] z-10 hidden md:block",
                          }),
                          (0, t.jsx)("div", {
                            className: `step-icon flex-shrink-0 w-24 h-24 rounded-2xl border border-[#5f99ff]/20 flex items-center justify-center text-[#5f99ff] ${r % 2 == 0 ? "md:ml-auto" : "md:mr-auto"}`,
                            style: {
                              background:
                                "linear-gradient(135deg, rgba(7,66,232,0.1) 0%, transparent 100%)",
                            },
                            children: e.icon,
                          }),
                          (0, t.jsxs)("div", {
                            className: `step-content flex-1 max-w-md ${r % 2 == 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"} text-center md:text-inherit`,
                            children: [
                              (0, t.jsx)("span", {
                                className: "label text-[#0742e8] block mb-2",
                                children: e.phase,
                              }),
                              (0, t.jsx)("h3", {
                                className:
                                  "display-md font-display text-[#e9eeff] mb-4",
                                children: e.title,
                              }),
                              (0, t.jsx)("p", {
                                className: "body-lg text-[#5c647a]",
                                children: e.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      e.phase,
                    ),
                  ),
                }),
              ],
            }),
          ],
        })
      );
    }
    s.gsap.registerPlugin(a.ScrollTrigger);
    let m = [
      {
        quote:
          "A ORIUX nao construiu apenas um site para nos. Eles criaram uma experiencia que transformou fundamentalmente como nossos clientes percebem nossa marca.",
        author: "Acácia Silva",
        role: "CEO, Torra café Bistrô",
        company: "Torra Café Bistrô",
      },
      {
        quote:
          "Quando escolhemos a ORIUX para essa parceria foi pela coerência, dedicação e profissionalismo. Foi super profissional, e era exatamente o que buscávamos para agregar a nossa empresa.",
        author: "Thaísa Carvalho",
        role: "CEO, Oca da Serra",
        company: "Oca da Serra",
      },
      {
        quote:
          "Trabalhar com a ORIUX foi transformador. Eles ultrapassaram limites que nem sabiamos que existiam no desenvolvimento web.",
        author: "Rogério Passos",
        role: "CEO, Studio kings",
        company: "Studio kings",
      },
    ];
    function x() {
      let e = (0, r.useRef)(null),
        [a, i] = (0, r.useState)(0),
        o = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let t = s.gsap.context(() => {
            s.gsap.to(".quote-mark", {
              y: -100,
              ease: "none",
              scrollTrigger: {
                trigger: e.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            });
          }, e);
          return () => t.revert();
        }, []),
        (0, r.useEffect)(() => {
          let e = setInterval(() => {
            i((e) => (e + 1) % m.length);
          }, 6e3);
          return () => clearInterval(e);
        }, []),
        (0, r.useEffect)(() => {
          o.current &&
            s.gsap.fromTo(
              o.current,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            );
        }, [a]),
        (0, t.jsxs)("section", {
          id: "testimonials",
          ref: e,
          className: "relative min-h-screen py-32 overflow-hidden",
          style: {
            background:
              "linear-gradient(180deg, #0e1425 0%, #002e93 50%, #0e1425 100%)",
          },
          children: [
            (0, t.jsx)("div", {
              className:
                "quote-mark absolute top-24 left-12 text-[30rem] font-display text-[#0742e8]/10 leading-none pointer-events-none select-none hidden lg:block",
              children: '"',
            }),
            (0, t.jsxs)("div", {
              className: "relative z-10 max-w-5xl mx-auto px-6 md:px-12",
              children: [
                (0, t.jsx)("span", {
                  className: "label text-[#5f99ff] block mb-16",
                  children: "[ O que dizem ]",
                }),
                (0, t.jsxs)("div", {
                  ref: o,
                  className: "mb-16",
                  children: [
                    (0, t.jsxs)("blockquote", {
                      className:
                        "display-md font-display text-[#e9eeff] mb-12 leading-tight",
                      children: ['"', m[a].quote, '"'],
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex items-center gap-6",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "w-16 h-16 rounded-full border border-[#5f99ff]/30 flex items-center justify-center",
                          style: {
                            background:
                              "linear-gradient(135deg, rgba(7,66,232,0.3) 0%, rgba(0,46,147,0.2) 100%)",
                          },
                          children: (0, t.jsx)("span", {
                            className: "text-2xl font-display text-[#5f99ff]",
                            children: m[a].author.charAt(0),
                          }),
                        }),
                        (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)("p", {
                              className: "text-lg font-medium text-[#e9eeff]",
                              children: m[a].author,
                            }),
                            (0, t.jsx)("p", {
                              className: "text-[#5c647a]",
                              children: m[a].role,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "flex gap-4",
                  children: m.map((e, r) =>
                    (0, t.jsx)(
                      "button",
                      {
                        onClick: () => i(r),
                        className: `relative w-12 h-1 rounded-full transition-all duration-500 ${r === a ? "bg-[#0742e8]" : "bg-[#5f99ff]/20"}`,
                        "aria-label": `Ir para depoimento ${r + 1}`,
                        children:
                          r === a &&
                          (0, t.jsx)("span", {
                            className:
                              "absolute inset-0 bg-[#5f99ff] rounded-full animate-pulse",
                            style: { animationDuration: "6s" },
                          }),
                      },
                      r,
                    ),
                  ),
                }),
                (0, t.jsx)("div", {
                  className: "absolute bottom-24 right-12 hidden lg:block",
                  children: (0, t.jsxs)("svg", {
                    width: "200",
                    height: "200",
                    viewBox: "0 0 200 200",
                    fill: "none",
                    className: "text-[#0742e8]/20",
                    children: [
                      (0, t.jsx)("circle", {
                        cx: "100",
                        cy: "100",
                        r: "80",
                        stroke: "currentColor",
                        strokeWidth: "0.5",
                      }),
                      (0, t.jsx)("circle", {
                        cx: "100",
                        cy: "100",
                        r: "60",
                        stroke: "currentColor",
                        strokeWidth: "0.5",
                      }),
                      (0, t.jsx)("circle", {
                        cx: "100",
                        cy: "100",
                        r: "40",
                        stroke: "currentColor",
                        strokeWidth: "0.5",
                      }),
                      (0, t.jsx)("line", {
                        x1: "100",
                        y1: "20",
                        x2: "100",
                        y2: "180",
                        stroke: "currentColor",
                        strokeWidth: "0.5",
                      }),
                      (0, t.jsx)("line", {
                        x1: "20",
                        y1: "100",
                        x2: "180",
                        y2: "100",
                        stroke: "currentColor",
                        strokeWidth: "0.5",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
      );
    }
    var g = e.i(37902);
    function y() {
      let e = (0, r.useRef)(null),
        a = (0, r.useRef)(null),
        i = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let t = s.gsap.context(() => {
            (s.gsap.fromTo(
              a.current,
              { scale: 0.8, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: e.current,
                  start: "top 60%",
                  end: "top 20%",
                  scrub: 1,
                },
              },
            ),
              s.gsap.fromTo(
                i.current,
                { y: 60, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.8,
                  ease: "power3.out",
                  scrollTrigger: {
                    trigger: i.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                  },
                },
              ));
          }, e);
          return () => t.revert();
        }, []),
        (0, t.jsxs)("section", {
          id: "contact",
          ref: e,
          className:
            "jsx-5b1e9bde95932903 relative min-h-screen flex flex-col justify-center py-32 overflow-hidden bg-[#0e1425]",
          children: [
            (0, t.jsx)("div", {
              style: {
                background:
                  "radial-gradient(ellipse at 50% 100%, rgba(7,66,232,0.2) 0%, transparent 60%)",
              },
              className:
                "jsx-5b1e9bde95932903 absolute inset-0 pointer-events-none",
            }),
            (0, t.jsxs)("div", {
              className: "jsx-5b1e9bde95932903 relative z-10 text-center px-6",
              children: [
                (0, t.jsx)("span", {
                  className:
                    "jsx-5b1e9bde95932903 label text-[#0742e8] block mb-8",
                  children: "[ Vamos Criar Juntos ]",
                }),
                (0, t.jsxs)("h2", {
                  ref: a,
                  className:
                    "jsx-5b1e9bde95932903 display-xl font-display mb-12",
                  children: [
                    (0, t.jsx)("span", {
                      className: "jsx-5b1e9bde95932903 block text-[#e9eeff]",
                      children: "Pronto para",
                    }),
                    (0, t.jsx)("span", {
                      style: {
                        background:
                          "linear-gradient(90deg, #5f99ff 0%, #0742e8 50%, #5f99ff 100%)",
                        backgroundSize: "200% 100%",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        animation: "gradient-shift 3s ease infinite",
                      },
                      className: "jsx-5b1e9bde95932903 block",
                      children: "transformar?",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  ref: i,
                  className: "jsx-5b1e9bde95932903",
                  children: [
                    (0, t.jsxs)("a", {
                      href: "mailto:contato.devoriux@gmail.com",
                      className:
                        "jsx-5b1e9bde95932903 group relative inline-flex items-center gap-6 px-12 py-6 rounded-full border border-[#5f99ff]/30 hover:border-[#0742e8] transition-all duration-500 overflow-hidden",
                      children: [
                        (0, t.jsx)("span", {
                          className:
                            "jsx-5b1e9bde95932903 absolute inset-0 bg-[#0742e8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
                        }),
                        (0, t.jsx)("span", {
                          className:
                            "jsx-5b1e9bde95932903 relative z-10 text-xl font-display text-[#e9eeff]",
                          children: "Iniciar Projeto",
                        }),
                        (0, t.jsx)("span", {
                          className:
                            "jsx-5b1e9bde95932903 relative z-10 w-12 h-12 rounded-full bg-[#0742e8] group-hover:bg-[#5f99ff] flex items-center justify-center transition-colors duration-500",
                          children: (0, t.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            className:
                              "jsx-5b1e9bde95932903 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300",
                            children: (0, t.jsx)("path", {
                              d: "M7 17L17 7M17 7H7M17 7V17",
                              stroke: "#e9eeff",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              className: "jsx-5b1e9bde95932903",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("p", {
                      className: "jsx-5b1e9bde95932903 mt-8 text-[#5c647a]",
                      children: [
                        "ou envie um email para",
                        " ",
                        (0, t.jsx)("a", {
                          href: "mailto:contato.devoriux@gmail.com",
                          className:
                            "jsx-5b1e9bde95932903 text-[#5f99ff] hover:text-[#e9eeff] transition-colors duration-300 underline underline-offset-4",
                          children: "contato.devoriux@gmail.com",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)("div", {
              className:
                "jsx-5b1e9bde95932903 absolute bottom-0 left-0 right-0 h-64 pointer-events-none overflow-hidden",
              children: (0, t.jsx)("div", {
                style: {
                  backgroundImage: `
              linear-gradient(rgba(95,153,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(95,153,255,0.05) 1px, transparent 1px)
            `,
                  backgroundSize: "60px 60px",
                  transform: "perspective(500px) rotateX(60deg)",
                  transformOrigin: "center top",
                },
                className: "jsx-5b1e9bde95932903 absolute inset-0",
              }),
            }),
            (0, t.jsx)(g.default, {
              id: "5b1e9bde95932903",
              children:
                "@keyframes gradient-shift{0%,to{background-position:0%}50%{background-position:100%}}",
            }),
          ],
        })
      );
    }
    s.gsap.registerPlugin(a.ScrollTrigger);
    var v = e.i(76841);
    function b() {
      let e = (0, r.useRef)(null),
        c = (0, r.useRef)(null),
        u = (0, r.useRef)(null);
      return (
        (0, r.useEffect)(() => {
          let e = c.current,
            t = u.current;
          if (!e || !t) return;
          let r = (r) => {
              (s.gsap.to(e, {
                x: r.clientX,
                y: r.clientY,
                duration: 0.5,
                ease: "power3.out",
              }),
                s.gsap.to(t, { x: r.clientX, y: r.clientY, duration: 0.1 }));
            },
            i = () => {
              s.gsap.to(e, { scale: 2, opacity: 0.5, duration: 0.3 });
            },
            o = () => {
              s.gsap.to(e, { scale: 1, opacity: 1, duration: 0.3 });
            };
          window.addEventListener("mousemove", r);
          let n = document.querySelectorAll(
            "a, button, .service-card, .project-item",
          );
          n.forEach((e) => {
            (e.addEventListener("mouseenter", i),
              e.addEventListener("mouseleave", o));
          });
          let l = () => {
            a.ScrollTrigger.refresh();
          };
          return (
            window.addEventListener("resize", l),
            () => {
              (window.removeEventListener("mousemove", r),
                window.removeEventListener("resize", l),
                n.forEach((e) => {
                  (e.removeEventListener("mouseenter", i),
                    e.removeEventListener("mouseleave", o));
                }));
            }
          );
        }, []),
        (0, t.jsxs)(i.SmoothScrollProvider, {
          children: [
            (0, t.jsx)("svg", {
              className: "absolute w-0 h-0",
              "aria-hidden": "true",
              children: (0, t.jsxs)("defs", {
                children: [
                  (0, t.jsxs)("filter", {
                    id: "liquid-distortion",
                    x: "-20%",
                    y: "-20%",
                    width: "140%",
                    height: "140%",
                    children: [
                      (0, t.jsx)("feTurbulence", {
                        type: "fractalNoise",
                        baseFrequency: "0.01 0.01",
                        numOctaves: "3",
                        seed: "2",
                        result: "noise",
                      }),
                      (0, t.jsx)("feDisplacementMap", {
                        in: "SourceGraphic",
                        in2: "noise",
                        scale: "8",
                        xChannelSelector: "R",
                        yChannelSelector: "G",
                      }),
                    ],
                  }),
                  (0, t.jsxs)("filter", {
                    id: "glow",
                    children: [
                      (0, t.jsx)("feGaussianBlur", {
                        stdDeviation: "4",
                        result: "coloredBlur",
                      }),
                      (0, t.jsxs)("feMerge", {
                        children: [
                          (0, t.jsx)("feMergeNode", { in: "coloredBlur" }),
                          (0, t.jsx)("feMergeNode", { in: "SourceGraphic" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, t.jsx)("div", { className: "noise-overlay" }),
            (0, t.jsx)("div", {
              ref: c,
              className:
                "fixed w-10 h-10 rounded-full border border-[#5f99ff]/50 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden lg:block",
              style: { left: 0, top: 0 },
            }),
            (0, t.jsx)("div", {
              ref: u,
              className:
                "fixed w-2 h-2 rounded-full bg-[#5f99ff] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block",
              style: { left: 0, top: 0 },
            }),
            (0, t.jsx)(o.Navigation, {}),
            (0, t.jsxs)("main", {
              ref: e,
              className: "relative",
              children: [
                (0, t.jsx)(n, {}),
                (0, t.jsx)(l, {}),
                (0, t.jsx)(d, {}),
                (0, t.jsx)(p, {}),
                (0, t.jsx)(h, {}),
                (0, t.jsx)(x, {}),
                (0, t.jsx)(y, {}),
              ],
            }),
            (0, t.jsx)(v.Footer, {}),
          ],
        })
      );
    }
    (s.gsap.registerPlugin(a.ScrollTrigger), e.s(["default", () => b], 31713));
  },
]);
