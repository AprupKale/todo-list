(() => {
  "use strict";
  var n = {
      426: (n, r, e) => {
        e.d(r, { Z: () => p });
        var t = e(537),
          o = e.n(t),
          i = e(645),
          a = e.n(i),
          A = e(667),
          c = e.n(A),
          l = new URL(e(648), e.b),
          d = new URL(e(287), e.b),
          s = a()(o()),
          f = c()(l),
          u = c()(d);
        s.push([
          n.id,
          `@font-face {\n    font-family: 'Barlow';\n    src: url(${f}) format('truetype');\n}\n\n@font-face {\n    font-family: 'Caveat';\n    src: url(${u}) format('truetype');\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    overflow: auto;\n    cursor: default;\n}\n\n*::-webkit-scrollbar {\n    display: none;\n}\n\nbody {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 1fr 9fr;\n    grid-template-columns: 2fr 5fr;\n}\n\nh1 {\n    font-size: calc(calc(3vw + 5vh) / 1.5);\n}\n\nh2 {\n    font-size: calc(calc(3vw + 5vh) / 3);\n}\n\nh3 {\n    font-size: calc(calc(3vw + 5vh) / 4);\n}\n\n.header {\n    background-color: #277da1;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-family: 'Caveat';\n}\n\n.header>* {\n    display: inline-block;\n    padding: calc((3vw + 5vh) / 6);\n}\n\n.header>img {\n    width: calc((3vw + 5vh) / 1.5);\n    height: auto;\n}\n\n.sidebar {\n    background-color: rgb(39, 125, 161, 0.7);\n    font-family: 'Barlow';\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n}\n\n.sidebar div {\n    margin-top: calc(calc(3vw + 5vh) / 5);\n    padding-left: 5%;\n    padding-top: 2.5%;\n    padding-bottom: 2.5%;\n    box-sizing: border-box;\n}\n\n.sidebar .division {\n    width: 100%;\n}\n\n.sidebar .division>* {\n    display: inline-block;\n}\n\n.sidebar>.division>img {\n    width: calc(calc(3vw + 5vh) / 3);\n    height: auto;\n    margin: 0 calc(calc(3vw + 5vh) / 3);\n}\n\n.sidebar .projects div {\n    margin-top: calc(calc(3vw + 5vh) / 6);\n    padding-left: 5%;\n    margin-left: 5%\n}\n\n.sidebar .projects {\n    width: 100%;\n}\n\n.sidebar .projects .division {\n    width: 100%;\n}\n\n.sidebar .projects .division>* {\n    display: inline-block;\n}\n\n.sidebar>.projects>.division>img {\n    width: calc(calc(3vw + 5vh) / 4);\n    height: auto;\n    margin: 0 calc(calc(3vw + 5vh) / 4);\n}\n\n.sidebar .division:hover {\n    background-color: #577590;\n}\n\n.sidebar .selected {\n    background-color: #577590;\n}\n\n.sidebar button {\n    width: 10%;\n    height: 10ch;\n    border: #f3722c 2px solid;\n    background-color:#f8961e;\n    border-radius: 32px;\n    position: fixed;\n    font-family: 'Barlow';\n    font-size: calc(calc(3vw + 5vh) / 6);\n    font-weight: bold;\n}\n\n.sidebar button:hover {\n    background-color: rgb(248, 150, 30, 0.5);\n}\n\n#new-task {\n    bottom: 5vh;\n    left: 15%;\n}\n\n#new-project {\n    bottom: 5vh;\n    left: 3%;\n}\n\n.main form {\n    position: relative;\n    width: 30%;\n    top: 5vh;\n    margin: auto;\n    padding: 8px;\n    border: #277da1 4px solid;\n    background-color: #577590;\n    border-radius: 16px;\n    font-family: 'Barlow';\n    font-size: calc(calc(3vw + 5vh) / 4);\n}\n\n.main form>* {\n    margin: 8px;\n    margin-bottom: 2vh;\n}\n\n.main form div>* {\n    display: block;\n}\n\n.main form div.inline>* {\n    display: inline;\n}\n\n.main form input {\n    margin-top: 2vh;\n    width: 15vw;\n    height: 3ch;\n    background-color: lightgray;\n    border-radius: 16px;\n    border: none;\n    padding: 4px 4ch;\n    cursor: auto;\n    font-family: 'Barlow';\n    font-size: calc(calc(3vw + 5vh) / 6);\n}\n\n.main form textarea {\n    margin-top: 2vh;\n    width: 15vw;\n    background-color: lightgray;\n    border-radius: 16px;\n    border: none;\n    padding: 4px 4ch;\n    cursor: auto;\n    font-family: 'Barlow';\n    font-size: calc(calc(3vw + 5vh) / 6);\n}\n\n.main form select {\n    margin-top: 2vh;\n    width: 15vw;\n    height: 3ch;\n    background-color: lightgray;\n    border-radius: 16px;\n    border: none;\n    padding: 4px 4ch;\n    cursor: auto;\n    font-family: 'Barlow';\n    font-size: calc(calc(3vw + 5vh) / 6);\n}\n\n.main form button {\n    width: 35%;\n    height: 5ch;\n    border: #f3722c 2px solid;\n    background-color:#f8961e;\n    border-radius: 32px;\n    font-weight: bold;\n    font-family: 'Barlow';\n    font-size: calc(calc(3vw + 5vh) / 6);\n    margin-top: 1vh;\n    position: relative;\n}\n\nlabel[for="priority"] {\n    display: inline;\n}\n\n.main form input[type="checkbox"] {\n    display: inline;\n    width: 2vw;\n    height: 3ch;\n    margin-top: none;\n}\n\n#create {\n    bottom: 1vh;\n}\n\n#cancel {\n    right: 5%;\n    bottom: 1vh;\n}\n\n.main form button:hover {\n    background-color: rgb(248, 150, 30, 0.5);\n}`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/style.css"],
            names: [],
            mappings:
              "AAAA;IACI,qBAAqB;IACrB,+DAAqD;AACzD;;AAEA;IACI,qBAAqB;IACrB,+DAAsD;AAC1D;;AAEA;IACI,SAAS;IACT,UAAU;IACV,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,2BAA2B;IAC3B,8BAA8B;AAClC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;IAC9B,YAAY;AAChB;;AAEA;IACI,wCAAwC;IACxC,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,2BAA2B;AAC/B;;AAEA;IACI,qCAAqC;IACrC,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,qCAAqC;IACrC,gBAAgB;IAChB;AACJ;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,gCAAgC;IAChC,YAAY;IACZ,mCAAmC;AACvC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,yBAAyB;IACzB,wBAAwB;IACxB,mBAAmB;IACnB,eAAe;IACf,qBAAqB;IACrB,oCAAoC;IACpC,iBAAiB;AACrB;;AAEA;IACI,wCAAwC;AAC5C;;AAEA;IACI,WAAW;IACX,SAAS;AACb;;AAEA;IACI,WAAW;IACX,QAAQ;AACZ;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,YAAY;IACZ,YAAY;IACZ,yBAAyB;IACzB,yBAAyB;IACzB,mBAAmB;IACnB,qBAAqB;IACrB,oCAAoC;AACxC;;AAEA;IACI,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,WAAW;IACX,2BAA2B;IAC3B,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,qBAAqB;IACrB,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,WAAW;IACX,2BAA2B;IAC3B,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,qBAAqB;IACrB,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,WAAW;IACX,WAAW;IACX,2BAA2B;IAC3B,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,qBAAqB;IACrB,oCAAoC;AACxC;;AAEA;IACI,UAAU;IACV,WAAW;IACX,yBAAyB;IACzB,wBAAwB;IACxB,mBAAmB;IACnB,iBAAiB;IACjB,qBAAqB;IACrB,oCAAoC;IACpC,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,SAAS;IACT,WAAW;AACf;;AAEA;IACI,wCAAwC;AAC5C",
            sourcesContent: [
              "@font-face {\r\n    font-family: 'Barlow';\r\n    src: url(./fonts/Barlow-Light.ttf) format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Caveat';\r\n    src: url(./fonts/Caveat-Medium.ttf) format('truetype');\r\n}\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: auto;\r\n    cursor: default;\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\nbody {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-rows: 1fr 9fr;\r\n    grid-template-columns: 2fr 5fr;\r\n}\r\n\r\nh1 {\r\n    font-size: calc(calc(3vw + 5vh) / 1.5);\r\n}\r\n\r\nh2 {\r\n    font-size: calc(calc(3vw + 5vh) / 3);\r\n}\r\n\r\nh3 {\r\n    font-size: calc(calc(3vw + 5vh) / 4);\r\n}\r\n\r\n.header {\r\n    background-color: #277da1;\r\n    grid-column: 1 / 3;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    font-family: 'Caveat';\r\n}\r\n\r\n.header>* {\r\n    display: inline-block;\r\n    padding: calc((3vw + 5vh) / 6);\r\n}\r\n\r\n.header>img {\r\n    width: calc((3vw + 5vh) / 1.5);\r\n    height: auto;\r\n}\r\n\r\n.sidebar {\r\n    background-color: rgb(39, 125, 161, 0.7);\r\n    font-family: 'Barlow';\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.sidebar div {\r\n    margin-top: calc(calc(3vw + 5vh) / 5);\r\n    padding-left: 5%;\r\n    padding-top: 2.5%;\r\n    padding-bottom: 2.5%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.sidebar .division {\r\n    width: 100%;\r\n}\r\n\r\n.sidebar .division>* {\r\n    display: inline-block;\r\n}\r\n\r\n.sidebar>.division>img {\r\n    width: calc(calc(3vw + 5vh) / 3);\r\n    height: auto;\r\n    margin: 0 calc(calc(3vw + 5vh) / 3);\r\n}\r\n\r\n.sidebar .projects div {\r\n    margin-top: calc(calc(3vw + 5vh) / 6);\r\n    padding-left: 5%;\r\n    margin-left: 5%\r\n}\r\n\r\n.sidebar .projects {\r\n    width: 100%;\r\n}\r\n\r\n.sidebar .projects .division {\r\n    width: 100%;\r\n}\r\n\r\n.sidebar .projects .division>* {\r\n    display: inline-block;\r\n}\r\n\r\n.sidebar>.projects>.division>img {\r\n    width: calc(calc(3vw + 5vh) / 4);\r\n    height: auto;\r\n    margin: 0 calc(calc(3vw + 5vh) / 4);\r\n}\r\n\r\n.sidebar .division:hover {\r\n    background-color: #577590;\r\n}\r\n\r\n.sidebar .selected {\r\n    background-color: #577590;\r\n}\r\n\r\n.sidebar button {\r\n    width: 10%;\r\n    height: 10ch;\r\n    border: #f3722c 2px solid;\r\n    background-color:#f8961e;\r\n    border-radius: 32px;\r\n    position: fixed;\r\n    font-family: 'Barlow';\r\n    font-size: calc(calc(3vw + 5vh) / 6);\r\n    font-weight: bold;\r\n}\r\n\r\n.sidebar button:hover {\r\n    background-color: rgb(248, 150, 30, 0.5);\r\n}\r\n\r\n#new-task {\r\n    bottom: 5vh;\r\n    left: 15%;\r\n}\r\n\r\n#new-project {\r\n    bottom: 5vh;\r\n    left: 3%;\r\n}\r\n\r\n.main form {\r\n    position: relative;\r\n    width: 30%;\r\n    top: 5vh;\r\n    margin: auto;\r\n    padding: 8px;\r\n    border: #277da1 4px solid;\r\n    background-color: #577590;\r\n    border-radius: 16px;\r\n    font-family: 'Barlow';\r\n    font-size: calc(calc(3vw + 5vh) / 4);\r\n}\r\n\r\n.main form>* {\r\n    margin: 8px;\r\n    margin-bottom: 2vh;\r\n}\r\n\r\n.main form div>* {\r\n    display: block;\r\n}\r\n\r\n.main form div.inline>* {\r\n    display: inline;\r\n}\r\n\r\n.main form input {\r\n    margin-top: 2vh;\r\n    width: 15vw;\r\n    height: 3ch;\r\n    background-color: lightgray;\r\n    border-radius: 16px;\r\n    border: none;\r\n    padding: 4px 4ch;\r\n    cursor: auto;\r\n    font-family: 'Barlow';\r\n    font-size: calc(calc(3vw + 5vh) / 6);\r\n}\r\n\r\n.main form textarea {\r\n    margin-top: 2vh;\r\n    width: 15vw;\r\n    background-color: lightgray;\r\n    border-radius: 16px;\r\n    border: none;\r\n    padding: 4px 4ch;\r\n    cursor: auto;\r\n    font-family: 'Barlow';\r\n    font-size: calc(calc(3vw + 5vh) / 6);\r\n}\r\n\r\n.main form select {\r\n    margin-top: 2vh;\r\n    width: 15vw;\r\n    height: 3ch;\r\n    background-color: lightgray;\r\n    border-radius: 16px;\r\n    border: none;\r\n    padding: 4px 4ch;\r\n    cursor: auto;\r\n    font-family: 'Barlow';\r\n    font-size: calc(calc(3vw + 5vh) / 6);\r\n}\r\n\r\n.main form button {\r\n    width: 35%;\r\n    height: 5ch;\r\n    border: #f3722c 2px solid;\r\n    background-color:#f8961e;\r\n    border-radius: 32px;\r\n    font-weight: bold;\r\n    font-family: 'Barlow';\r\n    font-size: calc(calc(3vw + 5vh) / 6);\r\n    margin-top: 1vh;\r\n    position: relative;\r\n}\r\n\r\nlabel[for=\"priority\"] {\r\n    display: inline;\r\n}\r\n\r\n.main form input[type=\"checkbox\"] {\r\n    display: inline;\r\n    width: 2vw;\r\n    height: 3ch;\r\n    margin-top: none;\r\n}\r\n\r\n#create {\r\n    bottom: 1vh;\r\n}\r\n\r\n#cancel {\r\n    right: 5%;\r\n    bottom: 1vh;\r\n}\r\n\r\n.main form button:hover {\r\n    background-color: rgb(248, 150, 30, 0.5);\r\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const p = s;
      },
      645: (n) => {
        n.exports = function (n) {
          var r = [];
          return (
            (r.toString = function () {
              return this.map(function (r) {
                var e = "",
                  t = void 0 !== r[5];
                return (
                  r[4] && (e += "@supports (".concat(r[4], ") {")),
                  r[2] && (e += "@media ".concat(r[2], " {")),
                  t &&
                    (e += "@layer".concat(
                      r[5].length > 0 ? " ".concat(r[5]) : "",
                      " {",
                    )),
                  (e += n(r)),
                  t && (e += "}"),
                  r[2] && (e += "}"),
                  r[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (r.i = function (n, e, t, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (t)
                for (var A = 0; A < this.length; A++) {
                  var c = this[A][0];
                  null != c && (a[c] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var d = [].concat(n[l]);
                (t && a[d[0]]) ||
                  (void 0 !== i &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = i)),
                  e &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = e))
                      : (d[2] = e)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  r.push(d));
              }
            }),
            r
          );
        };
      },
      667: (n) => {
        n.exports = function (n, r) {
          return (
            r || (r = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                r.hash && (n += r.hash),
                /["'() \t\n]|(%20)/.test(n) || r.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : n)
              : n
          );
        };
      },
      537: (n) => {
        n.exports = function (n) {
          var r = n[1],
            e = n[3];
          if (!e) return r;
          if ("function" == typeof btoa) {
            var t = btoa(unescape(encodeURIComponent(JSON.stringify(e)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  t,
                ),
              i = "/*# ".concat(o, " */");
            return [r].concat([i]).join("\n");
          }
          return [r].join("\n");
        };
      },
      379: (n) => {
        var r = [];
        function e(n) {
          for (var e = -1, t = 0; t < r.length; t++)
            if (r[t].identifier === n) {
              e = t;
              break;
            }
          return e;
        }
        function t(n, t) {
          for (var i = {}, a = [], A = 0; A < n.length; A++) {
            var c = n[A],
              l = t.base ? c[0] + t.base : c[0],
              d = i[l] || 0,
              s = "".concat(l, " ").concat(d);
            i[l] = d + 1;
            var f = e(s),
              u = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== f) r[f].references++, r[f].updater(u);
            else {
              var p = o(u, t);
              (t.byIndex = A),
                r.splice(A, 0, { identifier: s, updater: p, references: 1 });
            }
            a.push(s);
          }
          return a;
        }
        function o(n, r) {
          var e = r.domAPI(r);
          return (
            e.update(n),
            function (r) {
              if (r) {
                if (
                  r.css === n.css &&
                  r.media === n.media &&
                  r.sourceMap === n.sourceMap &&
                  r.supports === n.supports &&
                  r.layer === n.layer
                )
                  return;
                e.update((n = r));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = t((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var A = e(i[a]);
              r[A].references--;
            }
            for (var c = t(n, o), l = 0; l < i.length; l++) {
              var d = e(i[l]);
              0 === r[d].references && (r[d].updater(), r.splice(d, 1));
            }
            i = c;
          };
        };
      },
      569: (n) => {
        var r = {};
        n.exports = function (n, e) {
          var t = (function (n) {
            if (void 0 === r[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              r[n] = e;
            }
            return r[n];
          })(n);
          if (!t)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          t.appendChild(e);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var r = document.createElement("style");
          return n.setAttributes(r, n.attributes), n.insert(r, n.options), r;
        };
      },
      565: (n, r, e) => {
        n.exports = function (n) {
          var r = e.nc;
          r && n.setAttribute("nonce", r);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var r = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, r, e) {
                var t = "";
                e.supports && (t += "@supports (".concat(e.supports, ") {")),
                  e.media && (t += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (t += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {",
                  )),
                  (t += e.css),
                  o && (t += "}"),
                  e.media && (t += "}"),
                  e.supports && (t += "}");
                var i = e.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (t +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  r.styleTagTransform(t, n, r.options);
              })(r, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(r);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, r) {
          if (r.styleSheet) r.styleSheet.cssText = n;
          else {
            for (; r.firstChild; ) r.removeChild(r.firstChild);
            r.appendChild(document.createTextNode(n));
          }
        };
      },
      648: (n, r, e) => {
        n.exports = e.p + "19f244ecb11218b9a7de.ttf";
      },
      287: (n, r, e) => {
        n.exports = e.p + "f7a72dfa6e8c4f239ede.ttf";
      },
    },
    r = {};
  function e(t) {
    var o = r[t];
    if (void 0 !== o) return o.exports;
    var i = (r[t] = { id: t, exports: {} });
    return n[t](i, i.exports, e), i.exports;
  }
  (e.m = n),
    (e.n = (n) => {
      var r = n && n.__esModule ? () => n.default : () => n;
      return e.d(r, { a: r }), r;
    }),
    (e.d = (n, r) => {
      for (var t in r)
        e.o(r, t) &&
          !e.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: r[t] });
    }),
    (e.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (e.o = (n, r) => Object.prototype.hasOwnProperty.call(n, r)),
    (() => {
      var n;
      e.g.importScripts && (n = e.g.location + "");
      var r = e.g.document;
      if (!n && r && (r.currentScript && (n = r.currentScript.src), !n)) {
        var t = r.getElementsByTagName("script");
        if (t.length) for (var o = t.length - 1; o > -1 && !n; ) n = t[o--].src;
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (e.p = n);
    })(),
    (e.b = document.baseURI || self.location.href),
    (e.nc = void 0);
  var t = {};
  (() => {
    e.d(t, {
      B: () => S,
      gI: () => W,
      $6: () => x,
      ef: () => q,
      q: () => j,
      Lg: () => k,
      g0: () => E,
    });
    var n = e(379),
      r = e.n(n),
      o = e(795),
      i = e.n(o),
      a = e(569),
      A = e.n(a),
      c = e(565),
      l = e.n(c),
      d = e(216),
      s = e.n(d),
      f = e(589),
      u = e.n(f),
      p = e(426),
      m = {};
    function C(n) {
      let r = [];
      return {
        getName: function () {
          return n;
        },
        getTasks: function () {
          return r;
        },
        addTask: function (n) {
          r.push(n);
        },
        removeTask: function (n) {
          r.filter((r) => n.equals(r));
        },
      };
    }
    function h() {
      document.querySelectorAll("div.division").forEach((n) =>
        n.addEventListener("click", (n) => {
          if ("All" === n.target.id) w(x);
          else if ("Today" === n.target.id) w(k);
          else if ("Week" === n.target.id) w(E);
          else if ("Important" === n.target.id) w(q);
          else
            for (let r = 0; r < j.length; r++)
              n.target.id === j[r].getName() && w(j[r]);
        }),
      ),
        document.querySelector("#new-project").addEventListener("click", (n) =>
          (function (n) {
            n.preventDefault(),
              (document.querySelector("#new-project").disabled = !0),
              (document.querySelector("#new-task").disabled = !0),
              S();
          })(n),
        ),
        document.querySelector("#new-task").addEventListener("click", (n) =>
          (function (n) {
            n.preventDefault(),
              (document.querySelector("#new-project").disabled = !0),
              (document.querySelector("#new-task").disabled = !0),
              W();
          })(n),
        );
    }
    (m.styleTagTransform = u()),
      (m.setAttributes = l()),
      (m.insert = A().bind(null, "head")),
      (m.domAPI = i()),
      (m.insertStyleElement = s()),
      r()(p.Z, m),
      p.Z && p.Z.locals && p.Z.locals;
    const v = e.p + "2b63d8cbe6c8f4280ad4.svg",
      g = e.p + "3efcb2c4f942b01673bc.svg",
      b = e.p + "85abddfeb1d5707b7180.svg",
      B = e.p + "dba2a01ff507dfa95dd9.svg",
      I = e.p + "65b05fb47286d5deb5f9.svg",
      y = e.p + "4d2bf1fb16fb508fd1fe.svg";
    function w(n) {
      (document.querySelector(".header>img").src = v),
        (function (n) {
          (document.querySelector("#All>img").src = g),
            (document.querySelector("#Today>img").src = b),
            (document.querySelector("#Week>img").src = B),
            (document.querySelector("#Important>img").src = I),
            (document.querySelector("#All").className = "division"),
            (document.querySelector("#Today").className = "division"),
            (document.querySelector("#Week").className = "division"),
            (document.querySelector("#Important").className = "division");
          const r = document.querySelector(".projects");
          r.innerHTML = "<h2>Projects<h2>";
          for (let n = 0; n < j.length; n++) {
            const e = j[n],
              t = document.createElement("div");
            (t.className = "division"), (t.id = e.getName());
            const o = document.createElement("img");
            o.src = y;
            const i = document.createElement("h3");
            (i.textContent = e.getName()),
              t.appendChild(o),
              t.appendChild(i),
              r.appendChild(t);
          }
          (document.querySelector(`#${n.getName()}`).className =
            "division selected"),
            h();
        })(n);
    }
    let x = C("All"),
      k = C("Today"),
      E = C("Week"),
      q = C("Important"),
      j = [C("Home"), C("School"), C("Work")];
    function S() {
      !(function () {
        const n = document.createElement("form");
        (n.innerHTML =
          '\n        <div>\n            <label for="project-name">Project Name</label>\n            <input type="text" name="project-name" id="project-name" placeholder="Enter project name">\n        </div>\n        <button id="create">Create</button>\n        <button id="cancel">Cancel</button>\n    '),
          document.querySelector(".main").appendChild(n);
      })();
    }
    function W() {
      !(function () {
        const n = document.createElement("form");
        (n.innerHTML =
          '\n        <div>\n            <label for="task-name">Task Name</label>\n            <input type="text" name="task-name" id="task-name" placeholder="Enter task name">\n        </div>\n        <div>\n            <label for="description">Description</label>\n            <textarea name="description" id="description" rows="5" placeholder="Enter description"></textarea>\n        </div>\n        <div>\n            <label for="due-date">Due Date</label>\n            <input type="date" name="due-date" id="due-date">\n        </div>\n        <div class="inline">\n            <label for="priority">Is important?</label>\n            <input type="checkbox" name="priority" id="priority">\n        </div>\n        <div>\n            <label for="project-select">Project to assign task to</label>\n            <select name="project-select" id="project-select">\n                <option value="none">None</option>\n            </select>\n        </div>\n        <button id="create">Create</button>\n        <button id="cancel">Cancel</button>\n    '),
          document.querySelector(".main").appendChild(n);
      })();
    }
    w(x), h();
  })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUUsSUFBSyxDQUN0QyxNQUFNOEosRUFBVVgsRUFBU25KLEdBRW5CK0osRUFBa0JoRyxTQUFTVyxjQUFjLE9BQy9DcUYsRUFBZ0JKLFVBQVksV0FDNUJJLEVBQWdCNUssR0FBSzJLLEVBQVE1QixVQUU3QixNQUFNOEIsRUFBUWpHLFNBQVNXLGNBQWMsT0FDckNzRixFQUFNMUMsSUFBTSxFQUNaLE1BQU0yQyxFQUFVbEcsU0FBU1csY0FBYyxNQUN2Q3VGLEVBQVFDLFlBQWNKLEVBQVE1QixVQUU5QjZCLEVBQWdCdkYsWUFBWXdGLEdBQzVCRCxFQUFnQnZGLFlBQVl5RixHQUU1QkwsRUFBZXBGLFlBQVl1RixFQUMvQixDQUVBaEcsU0FBU0MsY0FBYyxJQUFJMEYsRUFBZ0J4QixhQUFheUIsVUFBWSxvQkFDcEVqQixHQUNKLENBMUNJeUIsQ0FBY1QsRUFFbEIsQ0NQQSxJQUFJLEVBQU0zQixFQUFRLE9BQ2RpQixFQUFRakIsRUFBUSxTQUNoQmtCLEVBQU9sQixFQUFRLFFBQ2ZtQixFQUFZbkIsRUFBUSxhQUNwQm9CLEVBQVcsQ0FBQ3BCLEVBQVEsUUFBU0EsRUFBUSxVQUFXQSxFQUFRLFNBSzVELFNBQVN1QixLRDRDVCxXQUNJLE1BQU1jLEVBQWlCckcsU0FBU1csY0FBYyxRQUM5QzBGLEVBQWVQLFVBQVksc1NBUzNCOUYsU0FBU0MsY0FBYyxTQUNsQlEsWUFBWTRGLEVBQ3JCLENDeERJQyxFQUVKLENBRUEsU0FBU2pDLEtEc0RULFdBQ0ksTUFBTWtDLEVBQWN2RyxTQUFTVyxjQUFjLFFBQzNDNEYsRUFBWVQsVUFBWSxpaENBMkJ4QjlGLFNBQVNDLGNBQWMsU0FDbEJRLFlBQVk4RixFQUNyQixDQ3BGSUMsRUFFSixDQVhBeEIsRUFBYyxHQUNkTCxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9CYXJsb3ctTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9DYXZlYXQtTWVkaXVtLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KCd0cnVldHlwZScpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxufVxyXG5cclxuKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA1ZnI7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYyhjYWxjKDN2dyArIDV2aCkgLyAxLjUpO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoY2FsYygzdncgKyA1dmgpIC8gMyk7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogY2FsYyhjYWxjKDN2dyArIDV2aCkgLyA0KTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc3ZGExO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0NhdmVhdCc7XHJcbn1cclxuXHJcbi5oZWFkZXI+KiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiBjYWxjKCgzdncgKyA1dmgpIC8gNik7XHJcbn1cclxuXHJcbi5oZWFkZXI+aW1nIHtcclxuICAgIHdpZHRoOiBjYWxjKCgzdncgKyA1dmgpIC8gMS41KTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCAxMjUsIDE2MSwgMC43KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93JztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKGNhbGMoM3Z3ICsgNXZoKSAvIDUpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctdG9wOiAyLjUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIuNSU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uc2lkZWJhciAuZGl2aXNpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5kaXZpc2lvbj4qIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNpZGViYXI+LmRpdmlzaW9uPmltZyB7XHJcbiAgICB3aWR0aDogY2FsYyhjYWxjKDN2dyArIDV2aCkgLyAzKTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMCBjYWxjKGNhbGMoM3Z3ICsgNXZoKSAvIDMpO1xyXG59XHJcblxyXG4uc2lkZWJhciAucHJvamVjdHMgZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoY2FsYygzdncgKyA1dmgpIC8gNik7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlXHJcbn1cclxuXHJcbi5zaWRlYmFyIC5wcm9qZWN0cyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpZGViYXIgLnByb2plY3RzIC5kaXZpc2lvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNpZGViYXIgLnByb2plY3RzIC5kaXZpc2lvbj4qIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNpZGViYXI+LnByb2plY3RzPi5kaXZpc2lvbj5pbWcge1xyXG4gICAgd2lkdGg6IGNhbGMoY2FsYygzdncgKyA1dmgpIC8gNCk7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDAgY2FsYyhjYWxjKDN2dyArIDV2aCkgLyA0KTtcclxufVxyXG5cclxuLnNpZGViYXIgLmRpdmlzaW9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Nzc1OTA7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc3NTkwO1xyXG59XHJcblxyXG4uc2lkZWJhciBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIGhlaWdodDogMTBjaDtcclxuICAgIGJvcmRlcjogI2YzNzIyYyAycHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmODk2MWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKGNhbGMoM3Z3ICsgNXZoKSAvIDYpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5zaWRlYmFyIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNTAsIDMwLCAwLjUpO1xyXG59XHJcblxyXG4jbmV3LXRhc2sge1xyXG4gICAgYm90dG9tOiA1dmg7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbn1cclxuXHJcbiNuZXctcHJvamVjdCB7XHJcbiAgICBib3R0b206IDV2aDtcclxuICAgIGxlZnQ6IDMlO1xyXG59XHJcblxyXG4ubWFpbiBmb3JtIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICB0b3A6IDV2aDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGJvcmRlcjogIzI3N2RhMSA0cHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc3NTkwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93JztcclxuICAgIGZvbnQtc2l6ZTogY2FsYyhjYWxjKDN2dyArIDV2aCkgLyA0KTtcclxufVxyXG5cclxuLm1haW4gZm9ybT4qIHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG59XHJcblxyXG4ubWFpbiBmb3JtIGRpdj4qIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubWFpbiBmb3JtIGRpdi5pbmxpbmU+KiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5tYWluIGZvcm0gaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMnZoO1xyXG4gICAgd2lkdGg6IDE1dnc7XHJcbiAgICBoZWlnaHQ6IDNjaDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA0cHggNGNoO1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnO1xyXG4gICAgZm9udC1zaXplOiBjYWxjKGNhbGMoM3Z3ICsgNXZoKSAvIDYpO1xyXG59XHJcblxyXG4ubWFpbiBmb3JtIHRleHRhcmVhIHtcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDRweCA0Y2g7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbiAgICBmb250LWZhbWlseTogJ0Jhcmxvdyc7XHJcbiAgICBmb250LXNpemU6IGNhbGMoY2FsYygzdncgKyA1dmgpIC8gNik7XHJcbn1cclxuXHJcbi5tYWluIGZvcm0gc2VsZWN0IHtcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIHdpZHRoOiAxNXZ3O1xyXG4gICAgaGVpZ2h0OiAzY2g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNHB4IDRjaDtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93JztcclxuICAgIGZvbnQtc2l6ZTogY2FsYyhjYWxjKDN2dyArIDV2aCkgLyA2KTtcclxufVxyXG5cclxuLm1haW4gZm9ybSBidXR0b24ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogNWNoO1xyXG4gICAgYm9yZGVyOiAjZjM3MjJjIDJweCBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y4OTYxZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93JztcclxuICAgIGZvbnQtc2l6ZTogY2FsYyhjYWxjKDN2dyArIDV2aCkgLyA2KTtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxubGFiZWxbZm9yPVwicHJpb3JpdHlcIl0ge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcblxyXG4ubWFpbiBmb3JtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB3aWR0aDogMnZ3O1xyXG4gICAgaGVpZ2h0OiAzY2g7XHJcbiAgICBtYXJnaW4tdG9wOiBub25lO1xyXG59XHJcblxyXG4jY3JlYXRlIHtcclxuICAgIGJvdHRvbTogMXZoO1xyXG59XHJcblxyXG4jY2FuY2VsIHtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIGJvdHRvbTogMXZoO1xyXG59XHJcblxyXG4ubWFpbiBmb3JtIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ4LCAxNTAsIDMwLCAwLjUpO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9z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QjtJQUNqQixxQkFBcUI7SUFDckIsb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnO1xcclxcbiAgICBzcmM6IHVybCguL2ZvbnRzL0Jhcmxvdy1MaWdodC50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQ2F2ZWF0JztcXHJcXG4gICAgc3JjOiB1cmwoLi9mb250cy9DYXZlYXQtTWVkaXVtLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbn1cXHJcXG5cXHJcXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgNWZyO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyhjYWxjKDN2dyArIDV2aCkgLyAxLjUpO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyhjYWxjKDN2dyArIDV2aCkgLyAzKTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoY2FsYygzdncgKyA1dmgpIC8gNCk7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc3ZGExO1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdDYXZlYXQnO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyPioge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IGNhbGMoKDN2dyArIDV2aCkgLyA2KTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlcj5pbWcge1xcclxcbiAgICB3aWR0aDogY2FsYygoM3Z3ICsgNXZoKSAvIDEuNSk7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDEyNSwgMTYxLCAwLjcpO1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhcmxvdyc7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGRpdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGNhbGMoY2FsYygzdncgKyA1dmgpIC8gNSk7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNSU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyLjUlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMi41JTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgLmRpdmlzaW9uIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIC5kaXZpc2lvbj4qIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhcj4uZGl2aXNpb24+aW1nIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoY2FsYygzdncgKyA1dmgpIC8gMyk7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luOiAwIGNhbGMoY2FsYygzdncgKyA1dmgpIC8gMyk7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIC5wcm9qZWN0cyBkaXYge1xcclxcbiAgICBtYXJnaW4tdG9wOiBjYWxjKGNhbGMoM3Z3ICsgNXZoKSAvIDYpO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNSVcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgLnByb2plY3RzIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIC5wcm9qZWN0cyAuZGl2aXNpb24ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgLnByb2plY3RzIC5kaXZpc2lvbj4qIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhcj4ucHJvamVjdHM+LmRpdmlzaW9uPmltZyB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKGNhbGMoM3Z3ICsgNXZoKSAvIDQpO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbjogMCBjYWxjKGNhbGMoM3Z3ICsgNXZoKSAvIDQpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciAuZGl2aXNpb246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc3NTkwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciAuc2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc3NTkwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMTAlO1xcclxcbiAgICBoZWlnaHQ6IDEwY2g7XFxyXFxuICAgIGJvcmRlcjogI2YzNzIyYyAycHggc29saWQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6I2Y4OTYxZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMzJweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhcmxvdyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyhjYWxjKDN2dyArIDV2aCkgLyA2KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsIDE1MCwgMzAsIDAuNSk7XFxyXFxufVxcclxcblxcclxcbiNuZXctdGFzayB7XFxyXFxuICAgIGJvdHRvbTogNXZoO1xcclxcbiAgICBsZWZ0OiAxNSU7XFxyXFxufVxcclxcblxcclxcbiNuZXctcHJvamVjdCB7XFxyXFxuICAgIGJvdHRvbTogNXZoO1xcclxcbiAgICBsZWZ0OiAzJTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gZm9ybSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgdG9wOiA1dmg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBib3JkZXI6ICMyNzdkYTEgNHB4IHNvbGlkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc3NTkwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhcmxvdyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyhjYWxjKDN2dyArIDV2aCkgLyA0KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gZm9ybT4qIHtcXHJcXG4gICAgbWFyZ2luOiA4cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJ2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gZm9ybSBkaXY+KiB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiBmb3JtIGRpdi5pbmxpbmU+KiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gZm9ybSBpbnB1dCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXHJcXG4gICAgd2lkdGg6IDE1dnc7XFxyXFxuICAgIGhlaWdodDogM2NoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNHB4IDRjaDtcXHJcXG4gICAgY3Vyc29yOiBhdXRvO1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhcmxvdyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyhjYWxjKDN2dyArIDV2aCkgLyA2KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gZm9ybSB0ZXh0YXJlYSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXHJcXG4gICAgd2lkdGg6IDE1dnc7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA0cHggNGNoO1xcclxcbiAgICBjdXJzb3I6IGF1dG87XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93JztcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKGNhbGMoM3Z3ICsgNXZoKSAvIDYpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiBmb3JtIHNlbGVjdCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDJ2aDtcXHJcXG4gICAgd2lkdGg6IDE1dnc7XFxyXFxuICAgIGhlaWdodDogM2NoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNHB4IDRjaDtcXHJcXG4gICAgY3Vyc29yOiBhdXRvO1xcclxcbiAgICBmb250LWZhbWlseTogJ0Jhcmxvdyc7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2FsYyhjYWxjKDN2dyArIDV2aCkgLyA2KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4gZm9ybSBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMzUlO1xcclxcbiAgICBoZWlnaHQ6IDVjaDtcXHJcXG4gICAgYm9yZGVyOiAjZjM3MjJjIDJweCBzb2xpZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZjg5NjFlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzMnB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnO1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoY2FsYygzdncgKyA1dmgpIC8gNik7XFxyXFxuICAgIG1hcmdpbi10b3A6IDF2aDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5sYWJlbFtmb3I9XFxcInByaW9yaXR5XFxcIl0ge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVxcclxcblxcclxcbi5tYWluIGZvcm0gaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZTtcXHJcXG4gICAgd2lkdGg6IDJ2dztcXHJcXG4gICAgaGVpZ2h0OiAzY2g7XFxyXFxuICAgIG1hcmdpbi10b3A6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNjcmVhdGUge1xcclxcbiAgICBib3R0b206IDF2aDtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbCB7XFxyXFxuICAgIHJpZ2h0OiA1JTtcXHJcXG4gICAgYm90dG9tOiAxdmg7XFxyXFxufVxcclxcblxcclxcbi5tYWluIGZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMTUwLCAzMCwgMC41KTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MTc5OiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJmdW5jdGlvbiBQcm9qZWN0KG5hbWUpIHtcclxuICAgIGxldCB0YXNrcyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xyXG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFzayh0YXNrKSB7XHJcbiAgICAgICAgdGFza3MuZmlsdGVyKHQgPT4gdGFzay5lcXVhbHModCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGdldE5hbWUsIGdldFRhc2tzLCBhZGRUYXNrLCByZW1vdmVUYXNrIH07XHJcbn1cclxuXHJcbmV4cG9ydCB7IFByb2plY3QgfTsiLCJpbXBvcnQgeyB1cGRhdGVEaXNwbGF5LCBzaG93TmV3UHJvamVjdEZvcm0sIHNob3dOZXdUYXNrRm9ybSB9IGZyb20gJy4vZGlzcGxheS5qcyc7XHJcbmltcG9ydCB7IGFsbCwgdG9kYXksIHdlZWssIGltcG9ydGFudCwgcHJvamVjdHMsIGFkZFByb2plY3QsIGFkZFRhc2sgfSBmcm9tICcuL2luZGV4LmpzJ1xyXG5cclxuZnVuY3Rpb24gYWRkRXZlbnRzKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmRpdmlzaW9uJylcclxuICAgICAgICAuZm9yRWFjaChlbGUgPT4gZWxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ0FsbCcpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoYWxsKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ1RvZGF5Jykge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRGlzcGxheSh0b2RheSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdXZWVrJykge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlRGlzcGxheSh3ZWVrKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ0ltcG9ydGFudCcpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3BsYXkoaW1wb3J0YW50KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09IHByb2plY3RzW2ldLmdldE5hbWUoKSkgdXBkYXRlRGlzcGxheShwcm9qZWN0c1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0JylcclxuICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IG5ld1Byb2plY3RDbGlja2VkKGUpKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2snKVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gbmV3VGFza0NsaWNrZWQoZSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdQcm9qZWN0Q2xpY2tlZChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QnKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXRhc2snKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBhZGRQcm9qZWN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld1Rhc2tDbGlja2VkKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdCcpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctdGFzaycpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIGFkZFRhc2soKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbmV3UHJvamVjdEZvcm1FdmVudHMoKSB7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdUYXNrRm9ybUV2ZW50cygpIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZEV2ZW50cywgbmV3UHJvamVjdEZvcm1FdmVudHMsIG5ld1Rhc2tGb3JtRXZlbnRzIH07IiwiaW1wb3J0IHsgYWxsLCB0b2RheSwgd2VlaywgaW1wb3J0YW50LCBwcm9qZWN0cyB9IGZyb20gJy4vaW5kZXguanMnO1xyXG5pbXBvcnQgeyBhZGRFdmVudHMsIG5ld1Byb2plY3RGb3JtRXZlbnRzLCBuZXdUYXNrRm9ybUV2ZW50cyB9IGZyb20gJy4vZXZlbnRzLmpzJztcclxuaW1wb3J0IGNoZWNrbGlzdCBmcm9tICcuL2ltYWdlcy9pY29ucy9jaGVja2xpc3Quc3ZnJztcclxuaW1wb3J0IGFsbEltYWdlIGZyb20gJy4vaW1hZ2VzL2ljb25zL2FsbC5zdmcnO1xyXG5pbXBvcnQgdG9kYXlJbWFnZSBmcm9tICcuL2ltYWdlcy9pY29ucy90b2RheS5zdmcnO1xyXG5pbXBvcnQgd2Vla0ltYWdlIGZyb20gJy4vaW1hZ2VzL2ljb25zL3dlZWsuc3ZnJztcclxuaW1wb3J0IGltcG9ydGFudEltYWdlIGZyb20gJy4vaW1hZ2VzL2ljb25zL3ByaW9yaXR5LnN2Zyc7XHJcbmltcG9ydCBwcm9qZWN0SW1hZ2UgZnJvbSAnLi9pbWFnZXMvaWNvbnMvcHJvamVjdC5zdmcnO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheShzZWxlY3RlZFByb2plY3QpIHtcclxuICAgIHVwZGF0ZUhlYWRlcigpO1xyXG4gICAgdXBkYXRlU2lkZWJhcihzZWxlY3RlZFByb2plY3QpO1xyXG4gICAgdXBkYXRlQ29udGVudChzZWxlY3RlZFByb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVIZWFkZXIoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyPmltZycpLnNyYyA9IGNoZWNrbGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2lkZWJhcihzZWxlY3RlZFByb2plY3QpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNBbGw+aW1nJykuc3JjID0gYWxsSW1hZ2U7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVG9kYXk+aW1nJykuc3JjID0gdG9kYXlJbWFnZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNXZWVrPmltZycpLnNyYyA9IHdlZWtJbWFnZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNJbXBvcnRhbnQ+aW1nJykuc3JjID0gaW1wb3J0YW50SW1hZ2U7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0FsbCcpLmNsYXNzTmFtZSA9ICdkaXZpc2lvbic7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVG9kYXknKS5jbGFzc05hbWUgPSAnZGl2aXNpb24nO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1dlZWsnKS5jbGFzc05hbWUgPSAnZGl2aXNpb24nO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0ltcG9ydGFudCcpLmNsYXNzTmFtZSA9ICdkaXZpc2lvbic7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdFNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuICAgIHByb2plY3RTaWRlYmFyLmlubmVySFRNTCA9ICc8aDI+UHJvamVjdHM8aDI+JztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2ldO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0RGl2aXNpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0RGl2aXNpb24uY2xhc3NOYW1lID0gJ2RpdmlzaW9uJztcclxuICAgICAgICBwcm9qZWN0RGl2aXNpb24uaWQgPSBwcm9qZWN0LmdldE5hbWUoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBwcm9qZWN0SW1hZ2U7XHJcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xyXG5cclxuICAgICAgICBwcm9qZWN0RGl2aXNpb24uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG4gICAgICAgIHByb2plY3REaXZpc2lvbi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcclxuXHJcbiAgICAgICAgcHJvamVjdFNpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdERpdmlzaW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzZWxlY3RlZFByb2plY3QuZ2V0TmFtZSgpfWApLmNsYXNzTmFtZSA9ICdkaXZpc2lvbiBzZWxlY3RlZCc7XHJcbiAgICBhZGRFdmVudHMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ29udGVudChzZWxlY3RlZFByb2plY3QpIHtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dOZXdQcm9qZWN0Rm9ybSgpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgbmV3UHJvamVjdEZvcm0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LW5hbWVcIj5Qcm9qZWN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwicHJvamVjdC1uYW1lXCIgaWQ9XCJwcm9qZWN0LW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHByb2plY3QgbmFtZVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJjcmVhdGVcIj5DcmVhdGU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICBgO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJylcclxuICAgICAgICAuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93TmV3VGFza0Zvcm0oKSB7XHJcbiAgICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgIG5ld1Rhc2tGb3JtLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwidGFzay1uYW1lXCI+VGFzayBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhc2stbmFtZVwiIGlkPVwidGFzay1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrIG5hbWVcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZHVlLWRhdGVcIj5EdWUgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkdWUtZGF0ZVwiIGlkPVwiZHVlLWRhdGVcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5saW5lXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPklzIGltcG9ydGFudD88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByaW9yaXR5XCIgaWQ9XCJwcmlvcml0eVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0LXNlbGVjdFwiPlByb2plY3QgdG8gYXNzaWduIHRhc2sgdG88L2xhYmVsPlxyXG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwcm9qZWN0LXNlbGVjdFwiIGlkPVwicHJvamVjdC1zZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJub25lXCI+Tm9uZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGlkPVwiY3JlYXRlXCI+Q3JlYXRlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cImNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgYDtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXHJcbiAgICAgICAgLmFwcGVuZENoaWxkKG5ld1Rhc2tGb3JtKTtcclxufVxyXG5cclxuZXhwb3J0IHsgdXBkYXRlRGlzcGxheSwgc2hvd05ld1Byb2plY3RGb3JtLCBzaG93TmV3VGFza0Zvcm0gfTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdC5qcyc7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL3Rhc2suanMnO1xyXG5pbXBvcnQgeyB1cGRhdGVEaXNwbGF5LCBzaG93TmV3UHJvamVjdEZvcm0sIHNob3dOZXdUYXNrRm9ybSB9IGZyb20gJy4vZGlzcGxheS5qcyc7XHJcbmltcG9ydCB7IGFkZEV2ZW50cywgbmV3UHJvamVjdEZvcm1FdmVudHMsIG5ld1Rhc2tGb3JtRXZlbnRzIH0gZnJvbSAnLi9ldmVudHMuanMnO1xyXG5cclxubGV0IGFsbCA9IFByb2plY3QoJ0FsbCcpO1xyXG5sZXQgdG9kYXkgPSBQcm9qZWN0KCdUb2RheScpXHJcbmxldCB3ZWVrID0gUHJvamVjdCgnV2VlaycpO1xyXG5sZXQgaW1wb3J0YW50ID0gUHJvamVjdCgnSW1wb3J0YW50Jyk7XHJcbmxldCBwcm9qZWN0cyA9IFtQcm9qZWN0KCdIb21lJyksIFByb2plY3QoJ1NjaG9vbCcpLCBQcm9qZWN0KCdXb3JrJyldO1xyXG5cclxudXBkYXRlRGlzcGxheShhbGwpO1xyXG5hZGRFdmVudHMoKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKSB7XHJcbiAgICBzaG93TmV3UHJvamVjdEZvcm0oKTtcclxuICAgIG5ld1Byb2plY3RGb3JtRXZlbnRzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRhc2soKSB7XHJcbiAgICBzaG93TmV3VGFza0Zvcm0oKTtcclxuICAgIG5ld1Rhc2tGb3JtRXZlbnRzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBhbGwsIHRvZGF5LCB3ZWVrLCBpbXBvcnRhbnQsIHByb2plY3RzLFxyXG4gICAgYWRkUHJvamVjdCwgYWRkVGFza1xyXG59OyJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyIsIlVSTCIsIl9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIiwiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fIiwiX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJfayIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsInRlc3QiLCJzbGljZSIsImhhc2giLCJuZWVkUXVvdGVzIiwicmVwbGFjZSIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzdHlsZXNJbkRPTSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4QnlJZGVudGlmaWVyIiwib2JqIiwiY3NzIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRFbGVtZW50U3R5bGUiLCJieUluZGV4Iiwic3BsaWNlIiwiYXBpIiwiZG9tQVBJIiwidXBkYXRlIiwibmV3T2JqIiwicmVtb3ZlIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsImluZGV4IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2kiLCJfaW5kZXgiLCJtZW1vIiwiaW5zZXJ0Iiwic3R5bGUiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJnZXRUYXJnZXQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGVzIiwiYXR0cmlidXRlcyIsInN0eWxlRWxlbWVudCIsIm5vbmNlIiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0U3R5bGVFbGVtZW50Iiwic3R5bGVUYWdUcmFuc2Zvcm0iLCJhcHBseSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInJlbW92ZVN0eWxlRWxlbWVudCIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiZmlyc3RDaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsIm0iLCJuIiwiZ2V0dGVyIiwiZCIsImEiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImciLCJnbG9iYWxUaGlzIiwiRnVuY3Rpb24iLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiY3VycmVudFNjcmlwdCIsInNyYyIsInNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInAiLCJiIiwiYmFzZVVSSSIsInNlbGYiLCJocmVmIiwibmMiLCJQcm9qZWN0IiwibmFtZSIsInRhc2tzIiwiZ2V0TmFtZSIsImdldFRhc2tzIiwiYWRkVGFzayIsInRhc2siLCJyZW1vdmVUYXNrIiwiZmlsdGVyIiwidCIsImVxdWFscyIsImFkZEV2ZW50cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVwZGF0ZURpc3BsYXkiLCJ0b2RheSIsIndlZWsiLCJpbXBvcnRhbnQiLCJwcm9qZWN0cyIsInByZXZlbnREZWZhdWx0IiwiZGlzYWJsZWQiLCJhZGRQcm9qZWN0IiwibmV3UHJvamVjdENsaWNrZWQiLCJuZXdUYXNrQ2xpY2tlZCIsImxvY2FscyIsInNlbGVjdGVkUHJvamVjdCIsImNsYXNzTmFtZSIsInByb2plY3RTaWRlYmFyIiwiaW5uZXJIVE1MIiwicHJvamVjdCIsInByb2plY3REaXZpc2lvbiIsImltYWdlIiwiaGVhZGluZyIsInRleHRDb250ZW50IiwidXBkYXRlU2lkZWJhciIsIm5ld1Byb2plY3RGb3JtIiwic2hvd05ld1Byb2plY3RGb3JtIiwibmV3VGFza0Zvcm0iLCJzaG93TmV3VGFza0Zvcm0iXSwic291cmNlUm9vdCI6IiJ9
