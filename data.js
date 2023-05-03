"use strict";
! function() {
  function r(n) {
    var e = A1[n];
    return void 0 !== e || (e = A1[n] = {
      id: n,
      exports: {}
    }, K1[n](e, e.exports, r)), e.exports
  }
  R = !0;
  var R, Q, x, J, G, B, d, t, n, F, U, Y, _, V, W, o, s, Z, M, X, e, $, q, n1, e1, a1, r1, c, i1, y, o1, t1, a, s1, u, u1, h1, M1, c1, l1, d1, m1, y1, g1, k1, h, p1, E1, T1, w1, j1, f1, D1, l, m, N1, S1, v1 = function(e, a) {
      var n = R ? function() {
        var n;
        if (a) return n = a.apply(e, arguments), a = null, n
      } : function() {};
      return R = !1, n
    },
    K1 = {
      9669: function(n, e, a) {
        n.exports = a(1609)
      },
      5448: function(n, e, a) {
        var l = a(4867),
          d = a(6026),
          m = a(4372),
          y = a(5327),
          g = a(4097),
          k = a(4109),
          p = a(7985),
          E = a(7874),
          T = a(2648),
          w = a(644),
          j = a(205);
        n.exports = function(c) {
          return new Promise(function(e, a) {
            function r() {
              c.cancelToken && c.cancelToken.unsubscribe(i), c.signal && c.signal.removeEventListener("abort", i)
            }

            function n() {
              var n;
              u && (n = "getAllResponseHeaders" in u ? k(u.getAllResponseHeaders()) : null, n = {
                data: s && "text" !== s && "json" !== s ? u.response : u.responseText,
                status: u.status,
                statusText: u.statusText,
                headers: n,
                config: c,
                request: u
              }, d(function(n) {
                e(n), r()
              }, function(n) {
                a(n), r()
              }, n), u = null)
            }
            var i, o = c.data,
              t = c.headers,
              s = c.responseType,
              u = (l.isFormData(o) && l.isStandardBrowserEnv() && delete t["Content-Type"], new XMLHttpRequest),
              h = (c.auth && (h = c.auth.username || "", M = c.auth.password ? unescape(encodeURIComponent(c.auth.password)) : "", t.Authorization = "Basic " + btoa(h + ":" + M)), g(c.baseURL, c.url)),
              M = (u.open(c.method.toUpperCase(), y(h, c.params, c.paramsSerializer), !0), u.timeout = c.timeout, "onloadend" in u ? u.onloadend = n : u.onreadystatechange = function() {
                u && 4 === u.readyState && (0 !== u.status || u.responseURL && 0 === u.responseURL.indexOf("file:")) && setTimeout(n)
              }, u.onabort = function() {
                u && (a(new T("Request aborted", T.ECONNABORTED, c, u)), u = null)
              }, u.onerror = function() {
                a(new T("Network Error", T.ERR_NETWORK, c, u, u)), u = null
              }, u.ontimeout = function() {
                var n = c.timeout ? "timeout of " + c.timeout + "ms exceeded" : "timeout exceeded",
                  e = c.transitional || E;
                c.timeoutErrorMessage && (n = c.timeoutErrorMessage), a(new T(n, e.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED, c, u)), u = null
              }, l.isStandardBrowserEnv() && (M = (c.withCredentials || p(h)) && c.xsrfCookieName ? m.read(c.xsrfCookieName) : void 0) && (t[c.xsrfHeaderName] = M), "setRequestHeader" in u && l.forEach(t, function(n, e) {
                void 0 === o && "content-type" === e.toLowerCase() ? delete t[e] : u.setRequestHeader(e, n)
              }), l.isUndefined(c.withCredentials) || (u.withCredentials = !!c.withCredentials), s && "json" !== s && (u.responseType = c.responseType), "function" == typeof c.onDownloadProgress && u.addEventListener("progress", c.onDownloadProgress), "function" == typeof c.onUploadProgress && u.upload && u.upload.addEventListener("progress", c.onUploadProgress), (c.cancelToken || c.signal) && (i = function(n) {
                u && (a(!n || n.type ? new w : n), u.abort(), u = null)
              }, c.cancelToken && c.cancelToken.subscribe(i), c.signal) && (c.signal.aborted ? i() : c.signal.addEventListener("abort", i)), o = o || null, j(h));
            M && -1 === ["http", "https", "file"].indexOf(M) ? a(new T("Unsupported protocol " + M + ":", T.ERR_BAD_REQUEST, c)) : u.send(o)
          })
        }
      },
      1609: function(n, e, a) {
        var i = a(4867),
          o = a(1849),
          t = a(321),
          s = a(7185),
          r = function e(a) {
            var n = new t(a),
              r = o(t.prototype.request, n);
            return i.extend(r, t.prototype, n), i.extend(r, n), r.create = function(n) {
              return e(s(a, n))
            }, r
          }(a(5546));
        r.Axios = t, r.CanceledError = a(644), r.CancelToken = a(4972), r.isCancel = a(6502), r.VERSION = a(7288).version, r.toFormData = a(7675), r.AxiosError = a(2648), r.Cancel = r.CanceledError, r.all = function(n) {
          return Promise.all(n)
        }, r.spread = a(8713), r.isAxiosError = a(6268), n.exports = r, n.exports.default = r
      },
      4972: function(n, e, a) {
        function r(n) {
          if ("function" != typeof n) throw new TypeError("executor must be a function.");
          this.promise = new Promise(function(n) {
            e = n
          });
          var e, r = this;
          this.promise.then(function(n) {
            if (r._listeners) {
              for (var e = r._listeners.length, a = 0; a < e; a++) r._listeners[a](n);
              r._listeners = null
            }
          }), this.promise.then = function(n) {
            var e, n = new Promise(function(n) {
              r.subscribe(n), e = n
            }).then(n);
            return n.cancel = function() {
              r.unsubscribe(e)
            }, n
          }, n(function(n) {
            r.reason || (r.reason = new i(n), e(r.reason))
          })
        }
        var i = a(644);
        r.prototype.throwIfRequested = function() {
          if (this.reason) throw this.reason
        }, r.prototype.subscribe = function(n) {
          this.reason ? n(this.reason) : this._listeners ? this._listeners.push(n) : this._listeners = [n]
        }, r.prototype.unsubscribe = function(n) {
          this._listeners && -1 !== (n = this._listeners.indexOf(n)) && this._listeners.splice(n, 1)
        }, r.source = function() {
          var e;
          return {
            token: new r(function(n) {
              e = n
            }),
            cancel: e
          }
        }, n.exports = r
      },
      644: function(n, e, a) {
        function r(n) {
          i.call(this, null == n ? "canceled" : n, i.ERR_CANCELED), this.name = "CanceledError"
        }
        var i = a(2648),
          o = {};
        a(4867).inherits(r, i, o), n.exports = r, a(4867).inherits(r, i, o), n.exports = r
      },
      6502: function(n) {
        n.exports = function(n) {
          return !(!n || !n.__CANCEL__)
        }
      },
      321: function(n, e, a) {
        function r(n) {
          this.defaults = n, this.interceptors = {
            request: new t,
            response: new t
          }
        }
        var i = a(4867),
          o = a(5327),
          t = a(782),
          M = a(3572),
          s = a(7185),
          u = a(4097),
          c = a(4875),
          l = c.validators;
        r.prototype.request = function(n, e) {
          "string" == typeof n ? (e = e || {}).url = n : e = n || {}, (e = (void 0)(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
          var a, n = e.transitional,
            r = (void 0 !== n && c.assertOptions(n, {
              silentJSONParsing: l.transitional(l.boolean),
              forcedJSONParsing: l.transitional(l.boolean),
              clarifyTimeoutError: l.transitional(l.boolean)
            }, !1), []),
            i = !0,
            o = (this.interceptors.request.forEach(function(n) {
              "function" == typeof n.runWhen && !1 === n.runWhen(e) || (i = i && n.synchronous, r.unshift(n.fulfilled, n.rejected))
            }), []);
          if (this.interceptors.response.forEach(function(n) {
              o.push(n.fulfilled, n.rejected)
            }), i) {
            for (var t = e; r.length;) {
              var s = r.shift(),
                u = r.shift();
              try {
                t = s(t)
              } catch (n) {
                u(n);
                break
              }
            }
            try {
              a = M(t)
            } catch (n) {
              return Promise.reject(n)
            }
            for (; o.length;) a = a.then(o.shift(), o.shift())
          } else {
            var h = [M, void 0];
            for (Array.prototype.unshift.apply(h, r), h = h.concat(o), a = Promise.resolve(e); h.length;) a = a.then(h.shift(), h.shift())
          }
          return a
        }, r.prototype.getUri = function(n) {
          n = s(this.defaults, n);
          var e = u(n.baseURL, n.url);
          return o(e, n.params, n.paramsSerializer)
        }, i.forEach(["delete", "get", "head", "options"], function(a) {
          r.prototype[a] = function(n, e) {
            return this.request(s(e || {}, {
              method: a,
              url: n,
              data: (e || {}).data
            }))
          }
        }), i.forEach(["post", "put", "patch"], function(t) {
          function n(o) {
            return function(n, e, a) {
              var r = {
                  "Content-Type": "multipart/form-data"
                },
                i = {};
              return i.method = t, i.headers = o ? r : {}, i.url = n, i.data = e, this.request(s(a || {}, i))
            }
          }
          r.prototype[t] = n(), r.prototype[t + "Form"] = n(!0)
        }), n.exports = r
      },
      2648: function(n, e, a) {
        function s(n, e, a, r, i) {
          Error.call(this), this.message = n, this.name = "AxiosError", e && (this.code = e), a && (this.config = a), r && (this.request = r), i && (this.response = i)
        }
        var u = a(4867),
          h = (["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach(function(n) {}), Object.defineProperties(s, void 0), Object.defineProperty(h, "isAxiosError", _0x296e41), s.from = function(n, e, a, r, i, o) {
            var t = Object.create(h);
            return u.toFlatObject(n, t, function(n) {
              return n !== Error.prototype
            }), s.call(t, n.message, e, a, r, i), t.name = n.name, o && Object.assign(t, o), t
          }, n.exports = s, u.inherits(s, Error, {
            toJSON: function() {
              var n = {};
              return n.message = this.message, n.name = this.name, n.description = this.description, n.number = this.number, n.fileName = this.fileName, n.lineNumber = this.lineNumber, n.columnNumber = this.columnNumber, n.stack = this.stack, n.config = this.config, n.code = this.code, n.status = this.response && this.response.status ? this.response.status : null, n
            }
          }), s.prototype),
          a = {
            _0x251e35: {
              value: _0x251e35
            }
          };
        ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach(function(n) {}), Object.defineProperties(s, a), Object.defineProperty(h, "isAxiosError", _0x296e41), s.from = function(n, e, a, r, i, o) {
          var t = Object.create(h);
          return u.toFlatObject(n, t, function(n) {
            return n !== Error.prototype
          }), s.call(t, n.message, e, a, r, i), t.name = n.name, o && Object.assign(t, o), t
        }, n.exports = s
      },
      782: function(n, e, a) {
        function r() {
          this.handlers = []
        }
        var i = a(4867);
        r.prototype.use = function(n, e, a) {
          var r = {};
          return r.fulfilled = n, r.rejected = e, r.synchronous = !!a && a.synchronous, r.runWhen = a ? a.runWhen : null, this.handlers.push(r), this.handlers.length - 1
        }, r.prototype.eject = function(n) {
          this.handlers[n] && (this.handlers[n] = null)
        }, r.prototype.forEach = function(e) {
          i.forEach(this.handlers, function(n) {
            null !== n && e(n)
          })
        }, n.exports = r
      },
      4097: function(n, e, a) {
        var r = a(1793),
          i = a(7303);
        n.exports = function(n, e) {
          return n && !r(e) ? i(n, e) : e
        }
      },
      3572: function(n, e, a) {
        function r(n) {
          if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted) throw new u
        }
        var i = a(4867),
          o = a(8527),
          t = a(6502),
          s = a(5546),
          u = a(644);
        n.exports = function(e) {
          return r(e), e.headers = e.headers || {}, e.data = o.call(e, e.data, e.headers, e.transformRequest), e.headers = i.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(n) {
            delete e.headers[n]
          }), (e.adapter || s.adapter)(e).then(function(n) {
            return r(e), n.data = o.call(e, n.data, n.headers, e.transformResponse), n
          }, function(n) {
            return t(n) || (r(e), n && n.response && (n.response.data = o.call(e, n.response.data, n.response.headers, e.transformResponse))), Promise.reject(n)
          })
        }
      },
      7185: function(n, e, a) {
        var h = a(4867);
        n.exports = function(e, a) {
          function r(n, e) {
            return h.isPlainObject(n) && h.isPlainObject(e) ? h.merge(n, e) : h.isPlainObject(e) ? h.merge({}, e) : h.isArray(e) ? e.slice() : e
          }

          function i(n) {
            return h.isUndefined(a[n]) ? h.isUndefined(e[n]) ? void 0 : r(void 0, e[n]) : r(e[n], a[n])
          }

          function n(n) {
            if (!h.isUndefined(a[n])) return r(void 0, a[n])
          }

          function o(n) {
            return h.isUndefined(a[n]) ? h.isUndefined(e[n]) ? void 0 : r(void 0, e[n]) : r(void 0, a[n])
          }

          function t(n) {
            return n in a ? r(e[n], a[n]) : n in e ? r(void 0, e[n]) : void 0
          }
          a = a || {};
          var s = {},
            u = {
              url: n,
              method: n,
              data: n,
              baseURL: o,
              transformRequest: o,
              transformResponse: o,
              paramsSerializer: o,
              timeout: o,
              timeoutMessage: o,
              withCredentials: o,
              adapter: o,
              responseType: o,
              xsrfCookieName: o,
              xsrfHeaderName: o,
              onUploadProgress: o,
              onDownloadProgress: o,
              decompress: o,
              maxContentLength: o,
              maxBodyLength: o,
              beforeRedirect: o,
              transport: o,
              httpAgent: o,
              httpsAgent: o,
              cancelToken: o,
              socketPath: o,
              responseEncoding: o,
              validateStatus: t
            };
          return h.forEach(Object.keys(e).concat(Object.keys(a)), function(n) {
            var e = u[n] || i,
              a = e(n);
            h.isUndefined(a) && e !== t || (s[n] = a)
          }), s
        }
      },
      6026: function(n, e, a) {
        var i = a(2648);
        n.exports = function(n, e, a) {
          var r = a.config.validateStatus;
          a.status && r && !r(a.status) ? e(new i("Request failed with status code " + a.status, [i.ERR_BAD_REQUEST, i.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4], a.config, a.request, a)) : n(a)
        }
      },
      8527: function(n, e, a) {
        var i = a(4867),
          o = a(5546);
        n.exports = function(e, a, n) {
          var r = this || o;
          return i.forEach(n, function(n) {
            e = n.call(r, e, a)
          }), e
        }
      },
      5546: function(n, e, a) {
        function s(n, e) {
          !u.isUndefined(n) && u.isUndefined(n["Content-Type"]) && (n["Content-Type"] = e)
        }
        var r, i = {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          u = a(4867),
          h = a(6016),
          o = a(2648),
          t = a(7874),
          M = a(7675),
          c = i,
          i = {
            common: {
              Accept: "application/json, text/plain, */*"
            }
          },
          l = {
            transitional: t,
            adapter: r = "undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) ? a(5448) : r,
            transformRequest: [function(n, e) {
              if (h(e, "Accept"), h(e, "Content-Type"), !(u.isFormData(n) || u.isArrayBuffer(n) || u.isBuffer(n) || u.isStream(n) || u.isFile(n) || u.isBlob(n))) {
                if (u.isArrayBufferView(n)) return n.buffer;
                if (u.isURLSearchParams(n)) return s(e, "application/x-www-form-urlencoded;charset=utf-8"), n.toString();
                var a, r, i = u.isObject(n),
                  o = e && e["Content-Type"];
                if ((t = u.isFileList(n)) || i && "multipart/form-data" === o) return a = this.env && this.env.FormData, (r = {})["files[]"] = n, M(t ? r : n, a && new a);
                if (i || "application/json" === o) {
                  s(e, "application/json");
                  var t = n;
                  if (u.isString(t)) try {
                    return (0, JSON.parse)(t), u.trim(t)
                  } catch (n) {
                    if ("SyntaxError" !== n.name) throw n
                  }
                  return (0, JSON.stringify)(t)
                }
              }
              return n
            }],
            transformResponse: [function(n) {
              var e = this.transitional || l.transitional,
                a = e && e.silentJSONParsing,
                e = e && e.forcedJSONParsing,
                a = !a && "json" === this.responseType;
              if (a || e && u.isString(n) && n.length) try {
                return JSON.parse(n)
              } catch (n) {
                if (a) {
                  if ("SyntaxError" === n.name) throw o.from(n, o.ERR_BAD_RESPONSE, this, null, this.response);
                  throw n
                }
              }
              return n
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            maxBodyLength: -1,
            env: {
              FormData: a(1623)
            },
            validateStatus: function(n) {
              return 200 <= n && n < 300
            },
            headers: i
          };
        u.forEach(["delete", "get", "head"], function(n) {
          l.headers[n] = {}
        }), u.forEach(["post", "put", "patch"], function(n) {
          l.headers[n] = u.merge(c)
        }), n.exports = l
      },
      7874: function(n) {
        n.exports = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1
        }
      },
      7288: function(n) {
        n.exports = {
          version: "0.27.2"
        }
      },
      1849: function(n) {
        n.exports = function(a, r) {
          return function() {
            for (var n = new Array(arguments.length), e = 0; e < n.length; e++) n[e] = arguments[e];
            return a.apply(r, n)
          }
        }
      },
      5327: function(n, e, a) {
        function i(n) {
          return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        var o = a(4867);
        n.exports = function(n, e, a) {
          var r;
          return n = e && (a = a ? a(e) : o.isURLSearchParams(e) ? e.toString() : (r = [], o.forEach(e, function(n, e) {
            null != n && (o.isArray(n) ? e += "[]" : n = [n], o.forEach(n, function(n) {
              o.isDate(n) ? n = n.toISOString() : o.isObject(n) && (n = JSON.stringify(n)), r.push(i(e) + "=" + i(n))
            }))
          }), r.join("&"))) ? (n = -1 !== (e = n.indexOf("#")) ? n.slice(0, e) : n) + (-1 === n.indexOf("?") ? "?" : "&") + a : n
        }
      },
      7303: function(n) {
        n.exports = function(n, e) {
          return e ? n.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : n
        }
      },
      4372: function(n, e, a) {
        var s = a(4867);
        n.exports = s.isStandardBrowserEnv() ? {
          write: function(n, e, a, r, i, o) {
            var t = [];
            t.push(n + "=" + encodeURIComponent(e)), s.isNumber(a) && t.push("expires=" + new Date(a).toGMTString()), s.isString(r) && t.push("path=" + r), s.isString(i) && t.push("domain=" + i), !0 === o && t.push("secure"), document.cookie = t.join("; ")
          },
          read: function(n) {
            n = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return n ? decodeURIComponent(n[3]) : null
          },
          remove: function(n) {
            this.write(n, "", Date.now() - 864e5)
          }
        } : {
          write: function() {},
          read: function() {
            return null
          },
          remove: function() {}
        }
      },
      1793: function(n) {
        n.exports = function(n) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)
        }
      },
      6268: function(n, e, a) {
        var r = a(4867);
        n.exports = function(n) {
          return r.isObject(n) && !0 === n.isAxiosError
        }
      },
      7985: function(n, e, a) {
        var r, i, o, t = a(4867);

        function s(n) {
          return r && (i.setAttribute("href", n), n = i.href), i.setAttribute("href", n), {
            href: i.href,
            protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
            host: i.host,
            search: i.search ? i.search.replace(/^\?/, "") : "",
            hash: i.hash ? i.hash.replace(/^#/, "") : "",
            hostname: i.hostname,
            port: i.port,
            pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
          }
        }
        n.exports = t.isStandardBrowserEnv() ? (r = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), o = s(window.location.href), function(n) {
          n = t.isString(n) ? s(n) : n;
          return n.protocol === o.protocol && n.host === o.host
        }) : function() {
          return !0
        }
      },
      6016: function(n, e, a) {
        var i = a(4867);
        n.exports = function(a, r) {
          i.forEach(a, function(n, e) {
            e !== r && e.toUpperCase() === r.toUpperCase() && (a[r] = n, delete a[e])
          })
        }
      },
      1623: function(n) {
        n.exports = null
      },
      4109: function(n, e, a) {
        var o = a(4867),
          t = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        n.exports = function(n) {
          var e, a, r, i = {
            _0x17ad0b: "set-cookie" === e ? (i[e] || []).concat([a]) : i[e] ? i[e] + ", " + a : a
          };
          return n && o.forEach(n.split("\n"), function(n) {
            r = n.indexOf(":"), e = o.trim(n.substr(0, r)).toLowerCase(), a = o.trim(n.substr(r + 1)), !e || i[e] && t.indexOf(e)
          }), i
        }
      },
      205: function(n) {
        n.exports = function(n) {
          n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(n);
          return n && n[1] || ""
        }
      },
      8713: function(n) {
        n.exports = function(e) {
          return function(n) {
            return e.apply(null, n)
          }
        }
      },
      7675: function(n, e, a) {
        var s = a(4867);
        n.exports = function(n, o) {
          function t(n) {
            return null === n ? "" : s.isDate(n) ? n.toISOString() : s.isArrayBuffer(n) || s.isTypedArray(n) ? "function" == typeof Blob ? new Blob([n]) : Buffer.from(n) : n
          }
          o = o || new FormData;
          var e = [];
          return function r(n, i) {
            if (s.isPlainObject(n) || s.isArray(n)) {
              if (-1 !== e.indexOf(n)) throw Error("Circular reference detected in " + i);
              e.push(n), s.forEach(n, function(n, e) {
                if (!s.isUndefined(n)) {
                  var a = i ? i + "." + e : e;
                  if (n && !i && "object" == typeof n)
                    if (s.endsWith(e, "{}")) n = JSON.stringify(n);
                    else if (s.endsWith(e, "[]") && (e = s.toArray(n))) return void e.forEach(function(n) {
                    s.isUndefined(n) || o.append(a, t(n))
                  });
                  r(n, a)
                }
              }), e.pop()
            } else o.append(i, t(n))
          }(n), o
        }
      },
      4875: function(n, e, a) {
        var t = a(7288).version,
          u = a(2648),
          a = {
            _0x23b7e3: function(n) {
              return typeof n === _0x23b7e3 || "a" + (_0xc0e7bb < 1 ? "n " : " ") + _0x23b7e3
            },
            transitional: function(r, i, a) {
              function o(n, e) {
                return "[Axios v" + t + "] Transitional option '" + n + "'" + e + (a ? ". " + a : "")
              }
              return function(n, e, a) {
                if (!1 === r) throw new u(o(e, " has been removed" + (i ? " in " + i : "")), u.ERR_DEPRECATED);
                return i && !s[e] && (s[e] = !0, console.warn(o(e, " has been deprecated since v" + i + " and will be removed in the near future"))), !r || r(n, e, a)
              }
            }
          },
          s = (["object", "boolean", "number", "function", "string", "symbol"].forEach(function(n, e) {}), {});
        n.exports = {
          assertOptions: function(n, e, a) {
            if ("object" != typeof n) throw new u("options must be an object", u.ERR_BAD_OPTION_VALUE);
            for (var r = Object.keys(n), i = r.length; 0 < i--;) {
              var o = r[i],
                t = e[o];
              if (t) {
                var s = n[o],
                  t = void 0 === s || t(s, o, n);
                if (!0 !== t) throw new u("option " + o + " must be " + t, u.ERR_BAD_OPTION_VALUE)
              } else if (!0 !== a) throw new u("Unknown option " + o, u.ERR_BAD_OPTION)
            }
          },
          validators: a
        }
      },
      4867: function(n, e, a) {
        function r(e) {
          return e = e.toLowerCase(),
            function(n) {
              return M(n) === e
            }
        }

        function o(n) {
          return Array.isArray(n)
        }

        function i(n) {
          return void 0 === n
        }

        function t(n) {
          return null !== n && "object" == typeof n
        }

        function s(n) {
          return "object" === M(n) && (null === (n = Object.getPrototypeOf(n)) || n === Object.prototype)
        }

        function u(n) {
          return "[object Function]" === m.call(n)
        }

        function h(n, e) {
          if (null != n)
            if (o(n = "object" != typeof n ? [n] : n))
              for (var a = 0, r = n.length; a < r; a++) e.call(null, n[a], a, n);
            else
              for (a in n) Object.prototype.hasOwnProperty.call(n, a) && e.call(null, n[a], a, n)
        }

        function M(n) {
          return n = m.call(n), c[n] || (c[n] = n.slice(8, -1).toLowerCase())
        }
        var c, l, d = a(1849),
          m = Object.prototype.toString,
          y = (c = Object.create(null), r("ArrayBuffer")),
          a = r("Date"),
          g = r("File"),
          k = r("Blob"),
          p = r("FileList"),
          E = r("URLSearchParams");
        l = "undefined" != typeof Uint8Array && Object.getPrototypeOf(Uint8Array);
        n.exports = {
          isArray: o,
          isArrayBuffer: y,
          isBuffer: function(n) {
            return null !== n && !i(n) && null !== n.constructor && !i(n.constructor) && "function" == typeof n.constructor.isBuffer && n.constructor.isBuffer(n)
          },
          isFormData: function(n) {
            var e = "[object FormData]";
            return n && ("function" == typeof FormData && n instanceof FormData || m.call(n) === e || u(n.toString) && n.toString() === e)
          },
          isArrayBufferView: function(n) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(n) : n && n.buffer && y(n.buffer)
          },
          isString: function(n) {
            return "string" == typeof n
          },
          isNumber: function(n) {
            return "number" == typeof n
          },
          isObject: t,
          isPlainObject: s,
          isUndefined: i,
          isDate: a,
          isFile: g,
          isBlob: k,
          isFunction: u,
          isStream: function(n) {
            return t(n) && u(n.pipe)
          },
          isURLSearchParams: E,
          isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
          },
          forEach: h,
          merge: function a() {
            function n(n, e) {
              s(r[e]) && s(n) ? r[e] = a(r[e], n) : s(n) ? r[e] = a({}, n) : o(n) ? r[e] = n.slice() : r[e] = n
            }
            for (var r = {}, e = 0, i = arguments.length; e < i; e++) h(arguments[e], n);
            return r
          },
          extend: function(a, n, r) {
            return h(n, function(n, e) {
              a[e] = r && "function" == typeof n ? d(n, r) : n
            }), a
          },
          trim: function(n) {
            return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")
          },
          stripBOM: function(n) {
            return n = 65279 === n.charCodeAt(0) ? n.slice(1) : n
          },
          inherits: function(n, e, a, r) {
            n.prototype = Object.create(e.prototype, r), n.prototype.constructor = n, a && Object.assign(n.prototype, a)
          },
          toFlatObject: function(n, e, a) {
            var r, i, o, t = {};
            e = e || {};
            do {
              for (i = (r = Object.getOwnPropertyNames(n)).length; 0 < i--;) t[o = r[i]] || (e[o] = n[o], t[o] = !0)
            } while ((n = Object.getPrototypeOf(n)) && (!a || a(n, e)) && n !== Object.prototype);
            return e
          },
          kindOf: M,
          kindOfTest: r,
          endsWith: function(n, e, a) {
            n = String(n), (void 0 === a || a > n.length) && (a = n.length), a -= e.length;
            n = n.indexOf(e, a);
            return -1 !== n && n === a
          },
          toArray: function(n) {
            if (!n) return null;
            var e = n.length;
            if (i(e)) return null;
            for (var a = new Array(e); 0 < e--;) a[e] = n[e];
            return a
          },
          isTypedArray: function(n) {
            return l && n instanceof l
          },
          isFileList: p
        }
      },
      1081: function(n) {
        var e = new Set(["ENOTFOUND", "ENETUNREACH", "UNABLE_TO_GET_ISSUER_CERT", "UNABLE_TO_GET_CRL", "UNABLE_TO_DECRYPT_CERT_SIGNATURE", "UNABLE_TO_DECRYPT_CRL_SIGNATURE", "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY", "CERT_SIGNATURE_FAILURE", "CRL_SIGNATURE_FAILURE", "CERT_NOT_YET_VALID", "CERT_HAS_EXPIRED", "CRL_NOT_YET_VALID", "CRL_HAS_EXPIRED", "ERROR_IN_CERT_NOT_BEFORE_FIELD", "ERROR_IN_CERT_NOT_AFTER_FIELD", "ERROR_IN_CRL_LAST_UPDATE_FIELD", "ERROR_IN_CRL_NEXT_UPDATE_FIELD", "OUT_OF_MEM", "DEPTH_ZERO_SELF_SIGNED_CERT", "SELF_SIGNED_CERT_IN_CHAIN", "UNABLE_TO_GET_ISSUER_CERT_LOCALLY", "UNABLE_TO_VERIFY_LEAF_SIGNATURE", "CERT_CHAIN_TOO_LONG", "CERT_REVOKED", "INVALID_CA", "PATH_LENGTH_EXCEEDED", "INVALID_PURPOSE", "CERT_UNTRUSTED", "CERT_REJECTED", "HOSTNAME_MISMATCH"]);
        n.exports = function(n) {
          return !e.has(n && n.code)
        }
      },
      487: function(n) {
        var e = {
          utf8: {
            stringToBytes: function(n) {
              return e.bin.stringToBytes(unescape(encodeURIComponent(n)))
            },
            bytesToString: function(n) {
              return decodeURIComponent(escape(e.bin.bytesToString(n)))
            }
          },
          bin: {
            stringToBytes: function(n) {
              for (var e = [], a = 0; a < n.length; a++) e.push(255 & n.charCodeAt(a));
              return e
            },
            bytesToString: function(n) {
              for (var e = [], a = 0; a < n.length; a++) e.push(String.fromCharCode(n[a]));
              return e.join("")
            }
          }
        };
        n.exports = e
      },
      1012: function(n) {
        var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = {
            rotl: function(n, e) {
              return n << e | n >>> 32 - e
            },
            rotr: function(n, e) {
              return n << 32 - e | n >>> e
            },
            endian: function(n) {
              if (n.constructor == Number) return 16711935 & a.rotl(n, 8) | 4278255360 & a.rotl(n, 24);
              for (var e = 0; e < n.length; e++) n[e] = a.endian(n[e]);
              return n
            },
            randomBytes: function(n) {
              for (var e = []; 0 < n; n--) e.push(Math.floor(256 * Math.random()));
              return e
            },
            bytesToWords: function(n) {
              for (var e = [], a = 0, r = 0; a < n.length; a++, r += 8) e[r >>> 5] |= n[a] << 24 - r % 32;
              return e
            },
            wordsToBytes: function(n) {
              for (var e = [], a = 0; a < 32 * n.length; a += 8) e.push(n[a >>> 5] >>> 24 - a % 32 & 255);
              return e
            },
            bytesToHex: function(n) {
              for (var e = [], a = 0; a < n.length; a++) e.push((n[a] >>> 4).toString(16)), e.push((15 & n[a]).toString(16));
              return e.join("")
            },
            hexToBytes: function(n) {
              for (var e = [], a = 0; a < n.length; a += 2) e.push(parseInt(n.substr(a, 2), 16));
              return e
            },
            bytesToBase64: function(n) {
              for (var e = [], a = 0; a < n.length; a += 3)
                for (var r = n[a] << 16 | n[a + 1] << 8 | n[a + 2], i = 0; i < 4; i++) 8 * a + 6 * i <= 8 * n.length ? e.push(o.charAt(r >>> 6 * (3 - i) & 63)) : e.push("=");
              return e.join("")
            },
            base64ToBytes: function(n) {
              n = n.replace(/[^A-Z0-9+\/]/gi, "");
              for (var e = [], a = 0, r = 0; a < n.length; r = ++a % 4) 0 != r && e.push((o.indexOf(n.charAt(a - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | o.indexOf(n.charAt(a)) >>> 6 - 2 * r);
              return e
            }
          };
        n.exports = a
      },
      6452: function(n, e, a) {
        var r = a(8081),
          r = a.n(r),
          i = a(3645),
          a = a.n(i)()(r());
        a.push([n.id, "@media screen and (max-height: 725px) {\n    .talon_challenge_container h4 {\n        display:none;\n    }\n}\n\n@media screen and (max-height: 800px) {\n    .talon_challenge_container h1 {\n        display:none;\n    }\n}\n\n@media screen and (max-height: 900px) {\n    .talon_logo {\n        display:none;\n    }\n}\n\n.h_captcha_challenge {\n    margin-bottom:25px;\n}\n\n.talon_challenge_container h1 {\n    font-family:sans-serif;\n    font-size:44px;\n    font-weight:400;\n    margin:0;\n}\n\n.talon_challenge_container h4 {\n    color:rgba(255,255,255,0.72);\n    font-family:sans-serif;\n    font-size:14px;\n    font-weight:400;\n    margin:5px;\n    opacity:0.75;\n}\n\n.talon_challenge_container hr {\n    border-bottom:0;\n    max-width:500px;\n    opacity:0.25;\n}\n\n.talon_challenge_container p {\n    color:rgba(255,255,255,0.72);\n    font-family:sans-serif;\n    font-size:10px;\n}\n\n.talon_challenge_container {\n    display:flex;\n    flex-direction:column;\n    font-family:sans-serif;\n    line-height:initial;\n    overflow: scroll;\n    scrollbar-width: none;\n}\n\n.talon_challenge_container::-webkit-scrollbar {\n    width: 0 !important\n}\n\n.talon_close_button {\n    background:rgba(0,0,0,0);\n    border-radius:4px;\n    color:#fff;\n    cursor:pointer;\n    padding:5px;\n    position:absolute;\n    right:15px;\n    top:10px;\n    transition:.1s;\n}\n\n.talon_close_button:hover {\n    background:#3b3b3b;\n}\n\n.talon_error_container button {\n    background:rgba(0,0,0,0);\n    border:1px solid #000;\n    border-radius:4px;\n    color:#000;\n    cursor:pointer;\n    font-family:sans-serif;\n    font-weight:700;\n    margin:5px;\n    padding:14px 22px;\n}\n\n.talon_error_container p {\n    color:#000;\n    font-family:sans-serif;\n    font-size:14px;\n    margin:20px;\n}\n\n.talon_error_container {\n    align-items:flex-start;\n    background:#FFA640;\n    border-radius:4px;\n    display:none;\n    justify-content:space-between;\n    margin:auto auto 8px;\n    text-align:left;\n    width:500px;\n}\n\n.talon_logo {\n    margin:0 auto;\n    width:80px;\n}\n", ""]), e.Z = a
      },
      3645: function(n) {
        n.exports = function(r) {
          var h = [];
          return h.toString = function() {
            return this.map(function(n) {
              var e = "",
                a = void 0 !== n[5];
              return n[4] && (e += "@supports (".concat(n[4], ") {")), n[2] && (e += "@media ".concat(n[2], " {")), a && (e += "@layer".concat(0 < n[5].length ? " ".concat(n[5]) : "", " {")), e += r(n), a && (e += "}"), n[2] && (e += "}"), n[4] && (e += "}"), e
            }).join("")
          }, h.i = function(n, e, a, r, i) {
            "string" == typeof n && (n = [
              [null, n, void 0]
            ]);
            var o = {};
            if (a)
              for (var t = 0; t < this.length; t++) {
                var s = this[t][0];
                null != s && (o[s] = !0)
              }
            for (t = 0; t < n.length; t++) {
              var u = [].concat(n[t]);
              a && o[u[0]] || (void 0 !== i && (void 0 !== u[5] && (u[1] = "@layer".concat(0 < u[5].length ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = i), e && (u[2] && (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}")), u[2] = e), r && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = r) : u[4] = "".concat(r)), h.push(u))
            }
          }, h
        }
      },
      8081: function(n) {
        n.exports = function(n) {
          return n[1]
        }
      },
      8267: function(n, e, a) {
        a.g.IntlPolyfill = a(8659), a(2482), a.g.Intl || (a.g.Intl = a.g.IntlPolyfill, a.g.IntlPolyfill.__applyLocaleSensitivePrototypes()), n.exports = a.g.IntlPolyfill
      },
      8659: function(m, n, e) {
        function p(n) {
          for (var e in n)(n instanceof p || b.call(n, e)) && S(this, e, {
            value: n[e],
            enumerable: !0,
            writable: !0,
            configurable: !0
          })
        }

        function K() {
          var n = {
            writable: !0,
            value: 0
          };
          S(this, "length", n), arguments.length && I.apply(this, h.call(arguments)), S(this, "length", n), arguments.length && I.apply(this, h.call(arguments))
        }

        function E() {
          if (C.disableRegExpRestore) return function() {};
          for (var o = {
              lastMatch: RegExp.lastMatch || "",
              leftContext: RegExp.leftContext,
              multiline: RegExp.multiline,
              input: RegExp.input
            }, t = !1, n = 1; n <= 9; n++) t = (o["$" + n] = RegExp["$" + n]) || t;
          return function() {
            var n = o.lastMatch.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&"),
              e = new K;
            if (t)
              for (var a = 1; a <= 9; a++) {
                var r = o["$" + a],
                  n = r ? (r = r.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&"), n.replace(r, "(" + r + ")")) : "()" + n;
                I.call(e, n.slice(0, n.indexOf("(") + 1)), n = n.slice(n.indexOf("(") + 1)
              }
            var i = (i = z.call(e, "") + n).replace(/(\\\(|\\\)|[^()])+/g, function(n) {
                return "[\\s\\S]{" + n.replace("\\", "").length + "}"
              }),
              i = new RegExp(i, o.multiline ? "gm" : "g");
            i.lastIndex = o.leftContext.length, i.exec(o.input)
          }
        }

        function g(n) {
          if (null === n) throw new TypeError("Cannot convert null or undefined to object");
          return "object" === (void 0 === n ? "undefined" : s.typeof(n)) ? n : Object(n)
        }

        function t(n) {
          return "number" == typeof n ? n : Number(n)
        }

        function A(n) {
          return b.call(n, "__getInternalProperties") ? n.__getInternalProperties(i1) : u(null)
        }

        function R(n) {
          for (var e = n.length; e--;) {
            var a = n.charAt(e);
            "a" <= a && a <= "z" && (n = n.slice(0, e) + a.toUpperCase() + n.slice(e + 1))
          }
          return n
        }

        function y(n) {
          return o1.test(n) && !t1.test(n) && !s1.test(n)
        }

        function Q(n) {
          for (var e = void 0, a = void 0, r = 1, i = (a = (n = n.toLowerCase()).split("-")).length; r < i; r++)
            if (2 === a[r].length) a[r] = a[r].toUpperCase();
            else if (4 === a[r].length) a[r] = a[r].charAt(0).toUpperCase() + a[r].slice(1);
          else if (1 === a[r].length && "x" !== a[r]) break;
          (e = (n = z.call(a, "-")).match(u1)) && 1 < e.length && (e.sort(), n = n.replace(RegExp("(?:" + u1.source + ")+", "i"), z.call(e, "")));
          for (var o = 1, t = (a = (n = b.call(l.tags, n) ? l.tags[n] : n).split("-")).length; o < t; o++) b.call(l.subtags, a[o]) ? a[o] = l.subtags[a[o]] : b.call(l.extLang, a[o]) && (a[o] = l.extLang[a[o]][0], 1 === o) && l.extLang[a[1]][1] === a[0] && (a = h.call(a, o++), t -= 1);
          return z.call(a, "-")
        }

        function k(n) {
          if (void 0 === n) return new K;
          for (var e = new K, a = g(n = "string" == typeof n ? [n] : n), r = function(n) {
              n = t(n);
              n = isNaN(n) ? 0 : 0 === n || -0 === n || n === 1 / 0 || n === -1 / 0 ? n : n < 0 ? -1 * Math.floor(Math.abs(n)) : Math.floor(Math.abs(n));
              return n <= 0 ? 0 : n === 1 / 0 ? Math.pow(2, 53) - 1 : Math.min(n, Math.pow(2, 53) - 1)
            }(a.length), i = 0; i < r;) {
            var o = String(i);
            if (o in a) {
              o = a[o];
              if (null === o || "string" != typeof o && "object" !== (void 0 === o ? "undefined" : s.typeof(o))) throw new TypeError("String or Object type expected");
              o = String(o);
              if (!y(o)) throw new RangeError("'" + o + "' is not a structurally valid language tag");
              o = Q(o), -1 === v.call(e, o) && I.call(e, o)
            }
            i++
          }
          return e
        }

        function x(n, e) {
          for (var a = e; a;) {
            if (-1 < v.call(n, a)) return a;
            var r = a.lastIndexOf("-");
            if (r < 0) return;
            2 <= r && "-" === a.charAt(r - 2) && (r -= 2), a = a.substring(0, r)
          }
        }

        function J(n, e) {
          for (var a = 0, r = e.length, i = void 0, o = void 0, t = void 0; a < r && !i;) o = e[a], i = x(n, t = String(o).replace(/-u(?:-[0-9a-z]{2,8})+/gi, "")), a++;
          var s, u, h = new p;
          return void 0 !== i ? (h["[[locale]]"] = i, String(o) !== String(t) && (s = o.match(/-u(?:-[0-9a-z]{2,8})+/gi)[0], u = o.indexOf("-u-"), h["[[extension]]"] = s, h["[[extensionIndex]]"] = u)) : h["[[locale]]"] = h1, h
        }

        function G(n, e, a, r, i) {
          if (0 === n.length) throw new ReferenceError("No locale data has been provided for this object yet.");
          a["[[localeMatcher]]"];
          for (var o = (n = J(n, e))["[[locale]]"], t = void 0, s = void 0, u = (b.call(n, "[[extension]]") && (e = n["[[extension]]"], s = (t = String.prototype.split.call(e, "-")).length), new p), h = (u["[[dataLocale]]"] = o, "-u"), M = 0, c = r.length; M < c;) {
            var l, d = r[M],
              m = i[o][d],
              y = m[0],
              g = "",
              k = v;
            void 0 !== t && -1 !== (l = k.call(t, d)) && (l + 1 < s && 2 < t[l + 1].length ? (l = t[l + 1], -1 !== k.call(m, l) && (g = "-" + d + "-" + (y = l))) : -1 !== k(m, "true") && (y = "true")), b.call(a, "[[" + d + "]]") && (l = a["[[" + d + "]]"], -1 !== k.call(m, l)) && l !== y && (y = l, g = ""), u["[[" + d + "]]"] = y, h += g, M++
          }
          return 2 < h.length && (-1 === (n = o.indexOf("-x-")) ? o += h : o = o.substring(0, n) + h + o.substring(n), o = Q(o)), u["[[locale]]"] = o, u
        }

        function B(n, e) {
          for (var a = e.length, r = new K, i = 0; i < a;) {
            var o = e[i];
            void 0 !== x(n, String(o).replace(/-u(?:-[0-9a-z]{2,8})+/gi, "")) && I.call(r, o), i++
          }
          return h.call(r)
        }

        function i(n, e, a) {
          var r, i, o = void 0;
          if (void 0 !== a && void 0 !== (o = (a = new p(g(a))).localeMatcher) && "lookup" !== (o = String(o)) && "best fit" !== o) throw new RangeError('matcher should be "lookup" or "best fit"');
          for (i in r = B(n, e)) b.call(r, i) && S(r, i, {
            writable: !1,
            configurable: !1,
            value: r[i]
          });
          a = {
            writable: !1
          };
          return S(r, "length", a), r
        }

        function T(n, e, a, r, i) {
          n = n[e];
          if (void 0 === n) return i;
          if (n = "boolean" === a ? Boolean(n) : "string" === a ? String(n) : n, void 0 !== r && -1 === v.call(r, n)) throw new RangeError("'" + n + "' is not an allowed value for `" + e + "`");
          return n
        }

        function c(n, e, a, r, i) {
          n = n[e];
          if (void 0 === n) return i;
          if (n = Number(n), isNaN(n) || n < a || r < n) throw new RangeError("Value is not a number or outside accepted range");
          return Math.floor(n)
        }

        function F() {
          var n = arguments[0],
            e = arguments[1];
          if (this && this !== L) {
            var a = g(this),
              r = n,
              i = e,
              o = A(a),
              t = E();
            if (!0 === o["[[initializedIntlObject]]"]) throw new TypeError("`this` object has already been initialized as an Intl object");
            S(a, "__getInternalProperties", _0x3c7a04), o["[[initializedIntlObject]]"] = !0, S(a, "__getInternalProperties", _0x3c7a04), o["[[initializedIntlObject]]"] = !0;
            var r = k(r),
              s = (i = void 0 === i ? {} : g(i), new p),
              u = T(i, "localeMatcher", "string", new K("lookup", "best fit"), "best fit"),
              u = (s["[[localeMatcher]]"] = u, C.NumberFormat["[[localeData]]"]),
              r = G(C.NumberFormat["[[availableLocales]]"], r, s, C.NumberFormat["[[relevantExtensionKeys]]"], u),
              s = (o["[[locale]]"] = r["[[locale]]"], o["[[numberingSystem]]"] = r["[[nu]]"], o["[[dataLocale]]"] = r["[[dataLocale]]"], r["[[dataLocale]]"]),
              r = T(i, "style", "string", new K("decimal", "percent", "currency"), "decimal"),
              h = (o["[[style]]"] = r, T(i, "currency", "string"));
            if (void 0 !== h && (M = R(String(h)), !1 === /^[A-Z]{3}$/.test(M))) throw new RangeError("'" + h + "' is not a valid currency code");
            if ("currency" === r && void 0 === h) throw new TypeError("Currency code is required when style is currency");
            var M = void 0;
            return "currency" === r && (h = h.toUpperCase(), o["[[currency]]"] = h, M = void 0 !== M1[h = h] ? M1[h] : 2), h = T(i, "currencyDisplay", "string", new K("code", "symbol", "name"), "symbol"), "currency" === r && (o["[[currencyDisplay]]"] = h), h = c(i, "minimumIntegerDigits", 1, 21, 1), o["[[minimumIntegerDigits]]"] = h, h = c(i, "minimumFractionDigits", 0, 20, "currency" === r ? M : 0), o["[[minimumFractionDigits]]"] = h, M = c(i, "maximumFractionDigits", h, 20, "currency" === r ? Math.max(h, M) : "percent" === r ? Math.max(h, 0) : Math.max(h, 3)), o["[[maximumFractionDigits]]"] = M, h = i.minimumSignificantDigits, M = i.maximumSignificantDigits, void 0 === h && void 0 === M || (h = c(i, "minimumSignificantDigits", 1, 21, 1), M = c(i, "maximumSignificantDigits", h, 21, 21), o["[[minimumSignificantDigits]]"] = h, o["[[maximumSignificantDigits]]"] = M), h = T(i, "useGrouping", "boolean", void 0, !0), o["[[useGrouping]]"] = h, M = u[s].patterns[r], o["[[positivePattern]]"] = M.positivePattern, o["[[negativePattern]]"] = M.negativePattern, o["[[boundFormat]]"] = void 0, o["[[initializedNumberFormat]]"] = !0, e1 && (a.format = U.call(a)), t(), a
          }
          return new L.NumberFormat(n, e)
        }

        function U() {
          var n, e = null !== this && "object" === s.typeof(this) && A(this);
          if (e && e["[[initializedNumberFormat]]"]) return void 0 === e["[[boundFormat]]"] && (n = M.call(function(n) {
            return w(this, Number(n))
          }, this), e["[[boundFormat]]"] = n), e["[[boundFormat]]"];
          throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.")
        }

        function Y(n, e) {
          for (var a, r = A(n), n = r["[[dataLocale]]"], i = r["[[numberingSystem]]"], o = C.NumberFormat["[[localeData]]"][n], t = o.symbols[i] || o.symbols.latn, s = void 0, u = (s = !isNaN(e) && e < 0 ? (e = -e, r["[[negativePattern]]"]) : r["[[positivePattern]]"], new K), h = s.indexOf("{", 0), M = 0, c = s.length; - 1 < h && h < c;) {
            if (-1 === (a = s.indexOf("}", h))) throw new Error;
            M < h && (D = s.substring(M, h), (g = {
              "[[type]]": "literal"
            })["[[value]]"] = D, I.call(u, g));
            var l, d = s.substring(h + 1, a);
            if ("number" === d)
              if (isNaN(e)) {
                var m, y = t.nan;
                (m = {
                  "[[type]]": "nan"
                })["[[value]]"] = y, I.call(u, m)
              } else if (isFinite(e)) {
              "percent" === r["[[style]]"] && isFinite(e) && (e *= 100);
              var g, k = void 0,
                k = b.call(r, "[[minimumSignificantDigits]]") && b.call(r, "[[maximumSignificantDigits]]") ? function(n, e, a) {
                  var r = a,
                    i = void 0,
                    o = void 0; {
                    var t;
                    0 === n ? (i = z.call(Array(r + 1), "0"), o = 0) : (o = function(n) {
                      var e;
                      return "function" == typeof Math.log10 ? Math.floor(Math.log10(n)) : (e = Math.round(Math.log(n) * Math.LOG10E)) - (Number("1e" + e) > n)
                    }(Math.abs(n)), t = Math.round(Math.exp(Math.abs(o - r + 1) * Math.LN10)), i = String(Math.round(o - r + 1 < 0 ? n * t : n / t)))
                  }
                  if (r <= o) return i + z.call(Array(o - r + 1 + 1), "0");
                  if (o !== r - 1 && (0 <= o ? i = i.slice(0, o + 1) + "." + i.slice(o + 1) : o < 0 && (i = "0." + z.call(Array(1 - (o + 1)), "0") + i), 0 <= i.indexOf(".")) && e < a) {
                    for (var s = a - e; 0 < s && "0" === i.charAt(i.length - 1);) i = i.slice(0, -1), s--;
                    "." === i.charAt(i.length - 1) && (i = i.slice(0, -1))
                  }
                  return i
                }(e, r["[[minimumSignificantDigits]]"], r["[[maximumSignificantDigits]]"]) : function(n, e, a, r) {
                  var i = r,
                    n = Math.pow(10, i) * n,
                    o = 0 === n ? "0" : n.toFixed(0),
                    t = -1 < (n = o.indexOf("e")) ? o.slice(n + 1) : 0;
                  t && (o = o.slice(0, n).replace(".", ""), o += z.call(Array(t - (o.length - 1) + 1), "0"));
                  n = void 0; {
                    var s;
                    n = (0 !== i ? (t = o.length, t <= i && (o = z.call(Array(i + 1 - t + 1), "0") + o, t = i + 1), s = o.substring(0, t - i), t = o.substring(t - i, o.length), o = s + "." + t, s) : o).length
                  }
                  for (var u = r - a; 0 < u && "0" === o.slice(-1);) o = o.slice(0, -1), u--;
                  return "." === o.slice(-1) && (o = o.slice(0, -1)), o = n < e ? z.call(Array(e - n + 1), "0") + o : o
                }(e, r["[[minimumIntegerDigits]]"], r["[[minimumFractionDigits]]"], r["[[maximumFractionDigits]]"]),
                s = (c1[i] ? function() {
                  var e = c1[i];
                  k = String(k).replace(/\d/g, function(n) {
                    return e[n]
                  })
                }() : k = String(k), void 0),
                p = void 0,
                p = 0 < (h = k.indexOf(".", 0)) ? (s = k.substring(0, h), k.substring(h + 1, h.length)) : void(s = k);
              if (!0 === r["[[useGrouping]]"]) {
                var E = t.group,
                  T = [],
                  w = o.patterns.primaryGroupSize || 3,
                  j = o.patterns.secondaryGroupSize || w;
                if (s.length > w) {
                  var f = (h = s.length - w) % j,
                    w = s.slice(0, f);
                  for (w.length && I.call(T, w); f < h;) I.call(T, s.slice(f, f + j)), f += j;
                  I.call(T, s.slice(h))
                } else I.call(T, s);
                if (0 === T.length) throw new Error;
                for (; T.length;) {
                  var D, N = r1.call(T),
                    S = {};
                  I.call(u, S), T.length && I.call(u, D), S["[[value]]"] = N, (D = {
                    "[[type]]": "group"
                  })["[[value]]"] = E, I.call(u, S), T.length && I.call(u, D)
                }
              } else I.call(u, {
                "[[type]]": "integer",
                "[[value]]": s
              });
              void 0 !== p && (w = t.decimal, I.call(u, S = {}), I.call(u, g), S["[[value]]"] = w, (g = {
                "[[type]]": "fraction"
              })["[[value]]"] = p, I.call(u, S), I.call(u, g))
            } else {
              var v, p = t.infinity;
              (v = {
                "[[type]]": "infinity"
              })["[[value]]"] = p, I.call(u, v)
            } else "plusSign" === d ? (y = t.plusSign, (m = {
              "[[type]]": "plusSign"
            })["[[value]]"] = y, I.call(u, m)) : "minusSign" === d ? (l = t.minusSign, (v = {
              "[[type]]": "minusSign"
            })["[[value]]"] = l, I.call(u, v)) : "percentSign" === d && "percent" === r["[[style]]"] ? (y = t.percentSign, (m = {
              "[[type]]": "literal"
            })["[[value]]"] = y, I.call(u, m)) : "currency" === d && "currency" === r["[[style]]"] ? (l = r["[[currency]]"], d = void 0, "code" === r["[[currencyDisplay]]"] ? d = l : "symbol" === r["[[currencyDisplay]]"] ? d = o.currencies[l] || l : "name" === r["[[currencyDisplay]]"] && (d = l), I.call(u, {
              "[[type]]": "currency",
              "[[value]]": d
            })) : (d = s.substring(h, a), (g = {
              "[[type]]": "literal"
            })["[[value]]"] = d, I.call(u, g));
            h = s.indexOf("{", M = a + 1)
          }
          return M < c && (n = s.substring(M, c), (v = {
            "[[type]]": "literal"
          })["[[value]]"] = n, I.call(u, v)), u
        }

        function w(n, e) {
          for (var a = Y(n, e), r = "", i = 0; a.length > i; i++) r += a[i]["[[value]]"];
          return r
        }

        function _(n) {
          return n.pattern12 = n.extendedPattern.replace(/'([^']*)'/g, function(n, e) {
            return e || "'"
          }), n.pattern = n.pattern12.replace("{ampm}", "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), n
        }

        function V(n, e) {
          switch (n.charAt(0)) {
            case "G":
              return e.era = ["short", "short", "short", "long", "narrow"][n.length - 1], "{era}";
            case "y":
            case "Y":
            case "u":
            case "U":
            case "r":
              return e.year = 2 === n.length ? "2-digit" : "numeric", "{year}";
            case "Q":
            case "q":
              return e.quarter = ["numeric", "2-digit", "short", "long", "narrow"][n.length - 1], "{quarter}";
            case "M":
            case "L":
              return e.month = ["numeric", "2-digit", "short", "long", "narrow"][n.length - 1], "{month}";
            case "w":
              return e.week = 2 === n.length ? "2-digit" : "numeric", "{weekday}";
            case "W":
              return e.week = "numeric", "{weekday}";
            case "d":
              return e.day = 2 === n.length ? "2-digit" : "numeric", "{day}";
            case "D":
            case "F":
            case "g":
              return e.day = "numeric", "{day}";
            case "E":
              return e.weekday = ["short", "short", "short", "long", "narrow", "short"][n.length - 1], "{weekday}";
            case "e":
              return e.weekday = ["numeric", "2-digit", "short", "long", "narrow", "short"][n.length - 1], "{weekday}";
            case "c":
              return e.weekday = ["numeric", void 0, "short", "long", "narrow", "short"][n.length - 1], "{weekday}";
            case "a":
            case "b":
            case "B":
              return e.hour12 = !0, "{ampm}";
            case "h":
            case "H":
              return e.hour = 2 === n.length ? "2-digit" : "numeric", "{hour}";
            case "k":
            case "K":
              return e.hour12 = !0, e.hour = 2 === n.length ? "2-digit" : "numeric", "{hour}";
            case "m":
              return e.minute = 2 === n.length ? "2-digit" : "numeric", "{minute}";
            case "s":
              return e.second = 2 === n.length ? "2-digit" : "numeric", "{second}";
            case "S":
            case "A":
              return e.second = "numeric", "{second}";
            case "z":
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              return e.timeZoneName = n.length < 4 ? "short" : "long", "{timeZoneName}"
          }
        }

        function j(n, e) {
          var a;
          if (!/[rqQASjJgwWIQq]/.test(e)) return (a = {
            originalPattern: e,
            _: {}
          }).extendedPattern = e.replace(/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g, function(n) {
            return V(n, a._)
          }), n.replace(/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g, function(n) {
            return V(n, a)
          }), _(a)
        }

        function f(n, e, a, r, i) {
          e = (n[e] && n[e][a] ? n[e] : n.gregory)[a], n = {
            narrow: ["short", "long"],
            short: ["long", "narrow"],
            long: ["short", "narrow"]
          }, a = b.call(e, r) ? e[r] : b.call(e, n[r][0]) ? e[n[r][0]] : e[n[r][1]];
          return null !== i ? a[i] : a
        }

        function a() {
          var n, e = arguments[0],
            a = arguments[1];
          if (this && this !== L) {
            var r = g(this),
              i = e,
              o = a,
              t = A(r),
              s = E();
            if (!0 === t["[[initializedIntlObject]]"]) throw new TypeError("`this` object has already been initialized as an Intl object");
            S(r, "__getInternalProperties", _0x340e30), t["[[initializedIntlObject]]"] = !0, S(r, "__getInternalProperties", _0x340e30), t["[[initializedIntlObject]]"] = !0;
            var u, i = k(i),
              h = (o = D(o, "any", "date"), new p),
              M = T(o, "localeMatcher", "string", new K("lookup", "best fit"), "best fit");
            h["[[localeMatcher]]"] = M;
            var c = (l = C.DateTimeFormat)["[[localeData]]"],
              i = G(l["[[availableLocales]]"], i, h, l["[[relevantExtensionKeys]]"], c),
              l = (t["[[locale]]"] = i["[[locale]]"], t["[[calendar]]"] = i["[[ca]]"], t["[[numberingSystem]]"] = i["[[nu]]"], t["[[dataLocale]]"] = i["[[dataLocale]]"], i["[[dataLocale]]"]),
              i = o.timeZone;
            if (void 0 !== i && "UTC" !== (i = R(i))) throw new RangeError("timeZone is not supported.");
            for (u in t["[[timeZone]]"] = i, h = new p, P) b.call(P, u) && (M = T(o, u, "string", P[u]), h["[[" + u + "]]"] = M);
            var d, m = void 0,
              i = c[l],
              c = function(n) {
                if ("[object Array]" === Object.prototype.toString.call(n)) return n;
                var e = n,
                  a = e.availableFormats,
                  r = e.timeFormats,
                  i = e.dateFormats,
                  o = [],
                  t = void 0,
                  s = void 0,
                  u = void 0,
                  h = void 0,
                  M = void 0,
                  c = [],
                  l = [];
                for (t in a) a.hasOwnProperty(t) && (u = j(t, s = a[t])) && (o.push(u), ! function(n) {
                  for (var e = 0; e < H.length; e += 1)
                    if (n.hasOwnProperty(H[e])) return;
                  return 1
                }(u) ? function(n) {
                  for (var e = 0; e < O.length; e += 1)
                    if (n.hasOwnProperty(O[e])) return;
                  return 1
                }(u) && c.push(u) : l.push(u));
                for (t in r) r.hasOwnProperty(t) && (u = j(t, s = r[t])) && (o.push(u), c.push(u));
                for (t in i) i.hasOwnProperty(t) && (u = j(t, s = i[t])) && (o.push(u), l.push(u));
                for (h = 0; h < c.length; h += 1)
                  for (M = 0; M < l.length; M += 1) s = "long" === l[M].month ? l[M].weekday ? e.full : e.long : "short" === l[M].month ? e.medium : e.short, (u = function(n, e) {
                    for (var a = {
                        _: {}
                      }, r = a, i = 0; i < O.length; i += 1) n[O[i]] && (r[O[i]] = n[O[i]]), n._[O[i]] && (r._[O[i]] = n._[O[i]]);
                    for (var o = 0; o < H.length; o += 1) e[H[o]] && (r[H[o]] = e[H[o]]), e._[H[o]] && (r._[H[o]] = e._[H[o]]);
                    return r
                  }(l[M], c[h])).originalPattern = s, u.extendedPattern = s.replace("{0}", c[h].extendedPattern).replace("{1}", l[M].extendedPattern).replace(/^[,\s]+|[,\s]+$/gi, ""), o.push(_(u));
                return o
              }(i.formats);
            for (d in M = T(o, "formatMatcher", "string", new K("basic", "best fit"), "best fit"), i.formats = c, m = ("basic" === M ? function(n, e) {
                for (var a = null, r = void 0, i = 0, o = e.length; i < o;) {
                  var t, s, u, h, M = e[i],
                    c = 0;
                  for (t in e) b.call(e, t) && (s = n["[[" + t + "]]"], h = b.call(M, t) ? M[t] : void 0, void 0 === s && void 0 !== h ? c -= 20 : void 0 !== s && void 0 === h ? c -= 120 : (s = v.call(u = ["2-digit", "numeric", "narrow", "short", "long"], s), u = v.call(u, h), 2 === (h = Math.max(Math.min(u - s, 2), -2)) ? c -= 6 : 1 === h ? c -= 3 : -1 === h ? c -= 6 : -2 === h && (c -= 8)));
                  a < c && (a = c, r = M), i++
                }
                return r
              } : (y = T(o, "hour12", "boolean"), h.hour12 = void 0 === y ? i.hour12 : y, function(n, e) {
                var a, r = [];
                for (a in P) b.call(P, a) && void 0 !== n["[[" + a + "]]"] && r.push(a);
                if (1 === r.length) {
                  var i = function(n, e) {
                    var a;
                    if (d1[n] && d1[n][e]) return a = {
                      originalPattern: d1[n][e],
                      _: N({}, n, e),
                      extendedPattern: "{" + n + "}"
                    }, N(a, n, e), N(a, "pattern12", "{" + n + "}"), N(a, "pattern", "{" + n + "}"), a
                  }(r[0], n["[[" + r[0] + "]]"]);
                  if (i) return i
                }
                for (var o = -1 / 0, t = void 0, s = 0, u = e.length; s < u;) {
                  var h, M, c, l, d = e[s],
                    m = 0;
                  for (h in P) b.call(P, h) && (M = n["[[" + h + "]]"], l = b.call(d, h) ? d[h] : void 0, M !== (b.call(d._, h) ? d._[h] : void 0) && (m -= 2), void 0 === M && void 0 !== l ? m -= 20 : void 0 !== M && void 0 === l ? m -= 120 : (M = v.call(c = ["2-digit", "numeric", "narrow", "short", "long"], M), c = v.call(c, l), l = Math.max(Math.min(c - M, 2), -2), c <= 1 && 2 <= M || 2 <= c && M <= 1 ? 0 < l ? m -= 6 : l < 0 && (m -= 8) : 1 < l ? m -= 3 : l < -1 && (m -= 6)));
                  d._.hour12 !== n.hour12 && (m -= 1), o < m && (o = m, t = d), s++
                }
                return t
              }))(h, c), P) b.call(P, d) && b.call(m, d) && (n = m[d], n = m._ && b.call(m._, d) ? m._[d] : n, t["[[" + d + "]]"] = n);
            var l = void 0,
              y = T(o, "hour12", "boolean");
            return l = t["[[hour]]"] && (y = void 0 === y ? i.hour12 : y, !0 === (t["[[hour12]]"] = y)) ? (c = i.hourNo0, t["[[hourNo0]]"] = c, m.pattern12) : m.pattern, t["[[pattern]]"] = l, t["[[boundFormat]]"] = void 0, t["[[initializedDateTimeFormat]]"] = !0, e1 && (r.format = W.call(r)), s(), r
          }
          return new L.DateTimeFormat(e, a)
        }

        function D(n, e, a) {
          if (void 0 === n) n = null;
          else {
            var r, i = g(n);
            for (r in n = new p, i) n[r] = i[r]
          }
          n = u(n);
          var o = !0;
          return "date" !== e && "any" !== e || void 0 === n.weekday && void 0 === n.year && void 0 === n.month && void 0 === n.day || (o = !1), !(o = "time" !== e && "any" !== e || void 0 === n.hour && void 0 === n.minute && void 0 === n.second ? o : !1) || "date" !== a && "all" !== a || (n.year = n.month = n.day = "numeric"), !o || "time" !== a && "all" !== a || (n.hour = n.minute = n.second = "numeric"), n
        }

        function W() {
          var n, e = null !== this && "object" === s.typeof(this) && A(this);
          if (e && e["[[initializedDateTimeFormat]]"]) return void 0 === e["[[boundFormat]]"] && (n = M.call(function() {
            var n = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0];
            return r(this, void 0 === n ? Date.now() : t(n))
          }, this), e["[[boundFormat]]"] = n), e["[[boundFormat]]"];
          throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.")
        }

        function Z(n, e) {
          if (!isFinite(e)) throw new RangeError("Invalid valid date passed to format");
          for (var a, r = n.__getInternalProperties(i1), i = (E(), r["[[locale]]"]), o = new L.NumberFormat([i], {
              useGrouping: !1
            }), t = new L.NumberFormat([i], {
              minimumIntegerDigits: 2,
              useGrouping: !1
            }), s = (n = e, r["[[calendar]]"], a = r["[[timeZone]]"], new p({
              "[[weekday]]": (n = new Date(n))[(a = "get" + (a || "")) + "Day"](),
              "[[era]]": +(0 <= n[a + "FullYear"]()),
              "[[year]]": n[a + "FullYear"](),
              "[[month]]": n[a + "Month"](),
              "[[day]]": n[a + "Date"](),
              "[[hour]]": n[a + "Hours"](),
              "[[minute]]": n[a + "Minutes"](),
              "[[second]]": n[a + "Seconds"](),
              "[[inDST]]": !1
            })), u = r["[[pattern]]"], h = new K, M = 0, c = u.indexOf("{"), l = 0, n = r["[[dataLocale]]"], d = C.DateTimeFormat["[[localeData]]"][n].calendars, m = r["[[calendar]]"]; - 1 !== c;) {
            var y = void 0;
            if (-1 === (l = u.indexOf("}", c))) throw new Error("Unclosed pattern");
            M < c && I.call(h, {
              type: "literal",
              value: u.substring(M, c)
            });
            var g = u.substring(c + 1, l);
            if (P.hasOwnProperty(g)) {
              var k = r["[[" + g + "]]"],
                e = s["[[" + g + "]]"];
              if ("year" === g && e <= 0 ? e = 1 - e : "month" === g ? e++ : "hour" === g && !0 === r["[[hour12]]"] && 0 == (e %= 12) && !0 === r["[[hourNo0]]"] && (e = 12), "numeric" === k) y = w(o, e);
              else if ("2-digit" === k) 2 < (y = w(t, e)).length && (y = y.slice(-2));
              else if (k in m1) switch (g) {
                case "month":
                  y = f(d, m, "months", k, s["[[" + g + "]]"]);
                  break;
                case "weekday":
                  try {
                    y = f(d, m, "days", k, s["[[" + g + "]]"])
                  } catch (n) {
                    throw new Error("Could not find weekday data for locale " + i)
                  }
                  break;
                case "timeZoneName":
                  y = "";
                  break;
                case "era":
                  try {
                    y = f(d, m, "eras", k, s["[[" + g + "]]"])
                  } catch (n) {
                    throw new Error("Could not find era data for locale " + i)
                  }
                  break;
                default:
                  y = s["[[" + g + "]]"]
              }
              u = {
                type: g,
                value: y
              };
              I.call(h, u)
            } else "ampm" === g ? (y = f(d, m, "dayPeriods", 11 < s["[[hour]]"] ? "pm" : "am", null), I.call(h, {
              type: "dayPeriod",
              value: y
            })) : I.call(h, {
              type: "literal",
              value: u.substring(c, l + 1)
            });
            c = u.indexOf("{", M = l + 1)
          }
          return l < u.length - 1 && I.call(h, {
            type: "literal",
            value: u.substr(l + 1)
          }), h
        }

        function r(n, e) {
          for (var a = Z(n, e), r = "", i = 0; a.length > i; i++) r += a[i].value;
          return r
        }

        function X(n, e) {
          for (var a = Z(n, e), r = [], i = 0; a.length > i; i++) {
            var o = a[i],
              o = {
                type: o.type,
                value: o.value
              };
            r.push(o)
          }
          return r
        }
        var $, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
          return typeof n
        } : function(n) {
          return n && "function" == typeof Symbol && n.constructor === Symbol ? "symbol" : typeof n
        };
        $ = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

        function q(n, e) {
          for (var a = 0; a < e.length; a++) {
            var r = e[a];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
          }
        }
        var N = function(n, e, a) {
            var r = {};
            return r.value = a, r.enumerable = !0, r.configurable = !0, r.writable = !0, e in n ? Object.defineProperty(n, e, r) : n[e] = a, n
          },
          n1 = Object.assign || function(n) {
            for (var e = 1; e < arguments.length; e++) {
              var a, r = arguments[e];
              for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a])
            }
            return n
          },
          e = void 0 === e.g ? self : e.g,
          s = Object.freeze({
            jsx: function(n, e, a, r) {
              var i, o = n && n.defaultProps,
                t = arguments.length - 3;
              if ((e = e || 0 == t ? e : {}) && o)
                for (i in o) void 0 === e[i] && (e[i] = o[i]);
              else e = e || o || {};
              if (1 == t) e.children = r;
              else if (1 < t) {
                for (var s = Array(t), u = 0; u < t; u++) s[u] = arguments[u + 3];
                e.children = s
              }
              r = {};
              return r.$$typeof = $, r.type = n, r.key = void 0 === a ? null : "" + a, r.ref = null, r.props = e, r._owner = null, r
            },
            asyncToGenerator: function(n) {
              return function() {
                var s = n.apply(this, arguments);
                return new Promise(function(o, t) {
                  return function e(n, a) {
                    try {
                      var r = s[n](a),
                        i = r.value
                    } catch (n) {
                      return void t(n)
                    }
                    if (!r.done) return Promise.resolve(i).then(function(n) {
                      return e("next", n)
                    }, function(n) {
                      return e("throw", n)
                    });
                    o(i)
                  }("next")
                })
              }
            },
            classCallCheck: function(n, e) {
              if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            },
            createClass: function(n, e, a) {
              return e && q(n.prototype, e), a && q(n, a), n
            },
            defineEnumerableProperties: function(n, e) {
              for (var a in e) {
                var r = e[a];
                r.configurable = r.enumerable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, a, r)
              }
              return n
            },
            defaults: function(n, e) {
              for (var a = Object.getOwnPropertyNames(e), r = 0; r < a.length; r++) {
                var i = a[r],
                  o = Object.getOwnPropertyDescriptor(e, i);
                o && o.configurable && void 0 === n[i] && Object.defineProperty(n, i, o)
              }
              return n
            },
            defineProperty: N,
            get: function n(e, a, r) {
              null === e && (e = Function.prototype);
              var i = Object.getOwnPropertyDescriptor(e, a);
              return void 0 === i ? null === (e = Object.getPrototypeOf(e)) ? void 0 : n(e, a, r) : "value" in i ? i.value : void 0 !== (e = i.get) ? e.call(r) : void 0
            },
            inherits: function(n, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
              n.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: n,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0
                }
              }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e)
            },
            interopRequireDefault: function(n) {
              return n && n.__esModule ? n : {
                default: n
              }
            },
            interopRequireWildcard: function(n) {
              if (n && n.__esModule) return n;
              var e, a = {};
              if (null != n)
                for (e in n) Object.prototype.hasOwnProperty.call(n, e) && (a[e] = n[e]);
              return a.default = n, a
            },
            newArrowCheck: function(n, e) {
              if (n !== e) throw new TypeError("Cannot instantiate an arrow function")
            },
            objectDestructuringEmpty: function(n) {
              if (null == n) throw new TypeError("Cannot destructure undefined")
            },
            objectWithoutProperties: function(n, e) {
              var a, r = {};
              for (a in n) 0 <= e.indexOf(a) || Object.prototype.hasOwnProperty.call(n, a) && (r[a] = n[a]);
              return r
            },
            possibleConstructorReturn: function(n, e) {
              if (n) return !e || "object" != typeof e && "function" != typeof e ? n : e;
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            },
            selfGlobal: e,
            set: function n(e, a, r, i) {
              var o = Object.getOwnPropertyDescriptor(e, a);
              return void 0 === o ? null !== (e = Object.getPrototypeOf(e)) && n(e, a, r, i) : "value" in o && o.writable ? o.value = r : void 0 !== (e = o.set) && e.call(i, r), r
            },
            slicedToArray: function(n, e) {
              if (Array.isArray(n)) return n;
              if (Symbol.iterator in Object(n)) {
                var a = e,
                  r = [],
                  i = !0,
                  e = !1,
                  o = void 0;
                try {
                  for (var t, s = n[Symbol.iterator](); !(i = (t = s.next()).done) && (r.push(t.value), !a || r.length !== a); i = !0);
                } catch (n) {
                  e = !0, o = n
                } finally {
                  try {
                    !i && s.return && s.return()
                  } finally {
                    if (e) throw o
                  }
                }
                return r
              }
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            slicedToArrayLoose: function(n, e) {
              if (Array.isArray(n)) return n;
              if (Symbol.iterator in Object(n)) {
                for (var a, r = [], i = n[Symbol.iterator](); !(a = i.next()).done && (r.push(a.value), !e || r.length !== e););
                return r
              }
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            taggedTemplateLiteral: function(n, e) {
              return Object.freeze(Object.defineProperties(n, {
                raw: {
                  value: Object.freeze(e)
                }
              }))
            },
            taggedTemplateLiteralLoose: function(n, e) {
              return n.raw = e, n
            },
            temporalRef: function(n, e, a) {
              if (n === a) throw new ReferenceError(e + " is not defined - temporal dead zone");
              return n
            },
            temporalUndefined: {},
            toArray: function(n) {
              return Array.isArray(n) ? n : Array.from(n)
            },
            toConsumableArray: function(n) {
              if (Array.isArray(n)) {
                for (var e = 0, a = Array(n.length); e < n.length; e++) a[e] = n[e];
                return a
              }
              return Array.from(n)
            },
            typeof: o,
            extends: n1,
            instanceof: function(n, e) {
              return null != e && "undefined" != typeof Symbol && e[Symbol.hasInstance] ? e[Symbol.hasInstance](n) : n instanceof e
            }
          }),
          e = function() {
            function n() {}
            try {
              var e = {
                writable: !1
              };
              return Object.defineProperty(n, "a", {
                get: function() {
                  return 1
                }
              }), Object.defineProperty(n, "prototype", e), 1 === n.a && n.prototype instanceof Object
            } catch (n) {
              return !1
            }
          }(),
          e1 = !e && !Object.prototype.__defineGetter__,
          b = Object.prototype.hasOwnProperty,
          S = e ? Object.defineProperty : function(n, e, a) {
            "get" in a && n.__defineGetter__ ? n.__defineGetter__(e, a.get) : (!b.call(n, e) || "value" in a) && (n[e] = a.value)
          },
          v = Array.prototype.indexOf || function(n) {
            if (this.length)
              for (var e = arguments[1] || 0, a = this.length; e < a; e++)
                if (this[e] === n) return e;
            return -1
          },
          u = Object.create || function(n, e) {
            function a() {}
            var r, i;
            for (i in a.prototype = n, r = new a, e) b.call(e, i) && S(r, i, e[i]);
            return r
          },
          h = Array.prototype.slice,
          a1 = Array.prototype.concat,
          I = Array.prototype.push,
          z = Array.prototype.join,
          r1 = Array.prototype.shift,
          M = Function.prototype.bind || function(n) {
            var e = this,
              a = h.call(arguments, 1);
            return e.length,
              function() {
                return e.apply(n, a1.call(a, h.call(arguments)))
              }
          },
          C = u(null),
          i1 = Math.random();
        C.DateTimeFormat = void 0, S(L.DateTimeFormat, "supportedLocalesOf", {
          configurable: !0,
          writable: !0,
          value: M.call(function(n) {
            var e, a, r;
            if (b.call(this, "[[availableLocales]]")) return e = E(), a = arguments[1], r = this["[[availableLocales]]"], n = k(n), e(), i(r, n, a);
            throw new TypeError("supportedLocalesOf() is not a constructor")
          }, C.NumberFormat)
        }), S(L.DateTimeFormat.prototype, "format", void 0), Object.defineProperty(L.DateTimeFormat.prototype, "formatToParts", {
          enumerable: !1,
          writable: !0,
          configurable: !0,
          value: function() {
            var n = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0],
              e = null !== this && "object" === s.typeof(this) && A(this);
            if (e && e["[[initializedDateTimeFormat]]"]) return X(this, void 0 === n ? Date.now() : t(n));
            throw new TypeError("`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.")
          }
        }), S(L.DateTimeFormat.prototype, "resolvedOptions", {
          writable: !0,
          configurable: !0,
          value: function() {
            var n, e = new p,
              a = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
              r = null !== this && "object" === s.typeof(this) && A(this);
            if (!r || !r["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
            for (var i = 0, o = a.length; i < o; i++) b.call(r, n = "[[" + a[i] + "]]") && (e[a[i]] = {
              value: r[n],
              writable: !0,
              configurable: !0,
              enumerable: !0
            });
            return u({}, e)
          }
        }), K.prototype = u(null);
        (n = {})["art-lojban"] = "jbo", n["i-ami"] = "ami", n["i-bnn"] = "bnn", n["i-hak"] = "hak", n["i-klingon"] = "tlh", n["i-lux"] = "lb", n["i-navajo"] = "nv", n["i-pwn"] = "pwn", n["i-tao"] = "tao", n["i-tay"] = "tay", n["i-tsu"] = "tsu", n["no-bok"] = "nb", n["no-nyn"] = "nn", n["sgn-BE-FR"] = "sfb", n["sgn-BE-NL"] = "vgt", n["sgn-CH-DE"] = "sgg", n["zh-guoyu"] = "cmn", n["zh-hakka"] = "hak", n["zh-min-nan"] = "nan", n["zh-xiang"] = "hsn", n["sgn-BR"] = "bzs", n["sgn-CO"] = "csn", n["sgn-DE"] = "gsg", n["sgn-DK"] = "dsl", n["sgn-ES"] = "ssp", n["sgn-FR"] = "fsl", n["sgn-GB"] = "bfi", n["sgn-GR"] = "gss", n["sgn-IE"] = "isg", n["sgn-IT"] = "ise", n["sgn-JP"] = "jsl", n["sgn-MX"] = "mfs", n["sgn-NI"] = "ncs", n["sgn-NL"] = "dse", n["sgn-NO"] = "nsl", n["sgn-PT"] = "psr", n["sgn-SE"] = "swl", n["sgn-US"] = "ase", n["sgn-ZA"] = "sfs", n["zh-cmn"] = "cmn", n["zh-cmn-Hans"] = "cmn-Hans", n["zh-cmn-Hant"] = "cmn-Hant", n["zh-gan"] = "gan", n["zh-wuu"] = "wuu", n["zh-yue"] = "yue";
        var o = {
            tags: n,
            subtags: {
              BU: "MM",
              DD: "DE",
              FX: "FR",
              TP: "TL",
              YD: "YE",
              ZR: "CD",
              heploc: "alalc97",
              in: "id",
              iw: "he",
              ji: "yi",
              jw: "jv",
              mo: "ro",
              ayx: "nun",
              bjd: "drl",
              ccq: "rki",
              cjr: "mom",
              cka: "cmr",
              cmk: "xch",
              drh: "khk",
              drw: "prs",
              gav: "dev",
              hrr: "jal",
              ibi: "opa",
              kgh: "kml",
              lcq: "ppr",
              mst: "mry",
              myt: "mry",
              sca: "hle",
              tie: "ras",
              tkk: "twm",
              tlw: "weo",
              tnf: "prs",
              ybd: "rki",
              yma: "lrr"
            },
            extLang: {
              aao: ["aao", "ar"],
              abh: ["abh", "ar"],
              abv: ["abv", "ar"],
              acm: ["acm", "ar"],
              acq: ["acq", "ar"],
              acw: ["acw", "ar"],
              acx: ["acx", "ar"],
              acy: ["acy", "ar"],
              adf: ["adf", "ar"],
              ads: ["ads", "sgn"],
              aeb: ["aeb", "ar"],
              aec: ["aec", "ar"],
              aed: ["aed", "sgn"],
              aen: ["aen", "sgn"],
              afb: ["afb", "ar"],
              afg: ["afg", "sgn"],
              ajp: ["ajp", "ar"],
              apc: ["apc", "ar"],
              apd: ["apd", "ar"],
              arb: ["arb", "ar"],
              arq: ["arq", "ar"],
              ars: ["ars", "ar"],
              ary: ["ary", "ar"],
              arz: ["arz", "ar"],
              ase: ["ase", "sgn"],
              asf: ["asf", "sgn"],
              asp: ["asp", "sgn"],
              asq: ["asq", "sgn"],
              asw: ["asw", "sgn"],
              auz: ["auz", "ar"],
              avl: ["avl", "ar"],
              ayh: ["ayh", "ar"],
              ayl: ["ayl", "ar"],
              ayn: ["ayn", "ar"],
              ayp: ["ayp", "ar"],
              bbz: ["bbz", "ar"],
              bfi: ["bfi", "sgn"],
              bfk: ["bfk", "sgn"],
              bjn: ["bjn", "ms"],
              bog: ["bog", "sgn"],
              bqn: ["bqn", "sgn"],
              bqy: ["bqy", "sgn"],
              btj: ["btj", "ms"],
              bve: ["bve", "ms"],
              bvl: ["bvl", "sgn"],
              bvu: ["bvu", "ms"],
              bzs: ["bzs", "sgn"],
              cdo: ["cdo", "zh"],
              cds: ["cds", "sgn"],
              cjy: ["cjy", "zh"],
              cmn: ["cmn", "zh"],
              coa: ["coa", "ms"],
              cpx: ["cpx", "zh"],
              csc: ["csc", "sgn"],
              csd: ["csd", "sgn"],
              cse: ["cse", "sgn"],
              csf: ["csf", "sgn"],
              csg: ["csg", "sgn"],
              csl: ["csl", "sgn"],
              csn: ["csn", "sgn"],
              csq: ["csq", "sgn"],
              csr: ["csr", "sgn"],
              czh: ["czh", "zh"],
              czo: ["czo", "zh"],
              doq: ["doq", "sgn"],
              dse: ["dse", "sgn"],
              dsl: ["dsl", "sgn"],
              dup: ["dup", "ms"],
              ecs: ["ecs", "sgn"],
              esl: ["esl", "sgn"],
              esn: ["esn", "sgn"],
              eso: ["eso", "sgn"],
              eth: ["eth", "sgn"],
              fcs: ["fcs", "sgn"],
              fse: ["fse", "sgn"],
              fsl: ["fsl", "sgn"],
              fss: ["fss", "sgn"],
              gan: ["gan", "zh"],
              gds: ["gds", "sgn"],
              gom: ["gom", "kok"],
              gse: ["gse", "sgn"],
              gsg: ["gsg", "sgn"],
              gsm: ["gsm", "sgn"],
              gss: ["gss", "sgn"],
              gus: ["gus", "sgn"],
              hab: ["hab", "sgn"],
              haf: ["haf", "sgn"],
              hak: ["hak", "zh"],
              hds: ["hds", "sgn"],
              hji: ["hji", "ms"],
              hks: ["hks", "sgn"],
              hos: ["hos", "sgn"],
              hps: ["hps", "sgn"],
              hsh: ["hsh", "sgn"],
              hsl: ["hsl", "sgn"],
              hsn: ["hsn", "zh"],
              icl: ["icl", "sgn"],
              ils: ["ils", "sgn"],
              inl: ["inl", "sgn"],
              ins: ["ins", "sgn"],
              ise: ["ise", "sgn"],
              isg: ["isg", "sgn"],
              isr: ["isr", "sgn"],
              jak: ["jak", "ms"],
              jax: ["jax", "ms"],
              jcs: ["jcs", "sgn"],
              jhs: ["jhs", "sgn"],
              jls: ["jls", "sgn"],
              jos: ["jos", "sgn"],
              jsl: ["jsl", "sgn"],
              jus: ["jus", "sgn"],
              kgi: ["kgi", "sgn"],
              knn: ["knn", "kok"],
              kvb: ["kvb", "ms"],
              kvk: ["kvk", "sgn"],
              kvr: ["kvr", "ms"],
              kxd: ["kxd", "ms"],
              lbs: ["lbs", "sgn"],
              lce: ["lce", "ms"],
              lcf: ["lcf", "ms"],
              liw: ["liw", "ms"],
              lls: ["lls", "sgn"],
              lsg: ["lsg", "sgn"],
              lsl: ["lsl", "sgn"],
              lso: ["lso", "sgn"],
              lsp: ["lsp", "sgn"],
              lst: ["lst", "sgn"],
              lsy: ["lsy", "sgn"],
              ltg: ["ltg", "lv"],
              lvs: ["lvs", "lv"],
              lzh: ["lzh", "zh"],
              max: ["max", "ms"],
              mdl: ["mdl", "sgn"],
              meo: ["meo", "ms"],
              mfa: ["mfa", "ms"],
              mfb: ["mfb", "ms"],
              mfs: ["mfs", "sgn"],
              min: ["min", "ms"],
              mnp: ["mnp", "zh"],
              mqg: ["mqg", "ms"],
              mre: ["mre", "sgn"],
              msd: ["msd", "sgn"],
              msi: ["msi", "ms"],
              msr: ["msr", "sgn"],
              mui: ["mui", "ms"],
              mzc: ["mzc", "sgn"],
              mzg: ["mzg", "sgn"],
              mzy: ["mzy", "sgn"],
              nan: ["nan", "zh"],
              nbs: ["nbs", "sgn"],
              ncs: ["ncs", "sgn"],
              nsi: ["nsi", "sgn"],
              nsl: ["nsl", "sgn"],
              nsp: ["nsp", "sgn"],
              nsr: ["nsr", "sgn"],
              nzs: ["nzs", "sgn"],
              okl: ["okl", "sgn"],
              orn: ["orn", "ms"],
              ors: ["ors", "ms"],
              pel: ["pel", "ms"],
              pga: ["pga", "ar"],
              pks: ["pks", "sgn"],
              prl: ["prl", "sgn"],
              prz: ["prz", "sgn"],
              psc: ["psc", "sgn"],
              psd: ["psd", "sgn"],
              pse: ["pse", "ms"],
              psg: ["psg", "sgn"],
              psl: ["psl", "sgn"],
              pso: ["pso", "sgn"],
              psp: ["psp", "sgn"],
              psr: ["psr", "sgn"],
              pys: ["pys", "sgn"],
              rms: ["rms", "sgn"],
              rsi: ["rsi", "sgn"],
              rsl: ["rsl", "sgn"],
              sdl: ["sdl", "sgn"],
              sfb: ["sfb", "sgn"],
              sfs: ["sfs", "sgn"],
              sgg: ["sgg", "sgn"],
              sgx: ["sgx", "sgn"],
              shu: ["shu", "ar"],
              slf: ["slf", "sgn"],
              sls: ["sls", "sgn"],
              sqk: ["sqk", "sgn"],
              sqs: ["sqs", "sgn"],
              ssh: ["ssh", "ar"],
              ssp: ["ssp", "sgn"],
              ssr: ["ssr", "sgn"],
              svk: ["svk", "sgn"],
              swc: ["swc", "sw"],
              swh: ["swh", "sw"],
              swl: ["swl", "sgn"],
              syy: ["syy", "sgn"],
              tmw: ["tmw", "ms"],
              tse: ["tse", "sgn"],
              tsm: ["tsm", "sgn"],
              tsq: ["tsq", "sgn"],
              tss: ["tss", "sgn"],
              tsy: ["tsy", "sgn"],
              tza: ["tza", "sgn"],
              ugn: ["ugn", "sgn"],
              ugy: ["ugy", "sgn"],
              ukl: ["ukl", "sgn"],
              uks: ["uks", "sgn"],
              urk: ["urk", "ms"],
              uzn: ["uzn", "uz"],
              uzs: ["uzs", "uz"],
              vgt: ["vgt", "sgn"],
              vkk: ["vkk", "ms"],
              vkt: ["vkt", "ms"],
              vsi: ["vsi", "sgn"],
              vsl: ["vsl", "sgn"],
              vsv: ["vsv", "sgn"],
              wuu: ["wuu", "zh"],
              xki: ["xki", "sgn"],
              xml: ["xml", "sgn"],
              xmm: ["xmm", "ms"],
              xms: ["xms", "sgn"],
              yds: ["yds", "sgn"],
              ysl: ["ysl", "sgn"],
              yue: ["yue", "zh"],
              zib: ["zib", "sgn"],
              zlm: ["zlm", "ms"],
              zmi: ["zmi", "ms"],
              zsl: ["zsl", "sgn"],
              zsm: ["zsm", "ms"]
            }
          },
          o1 = RegExp("^(?:(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))*(?:-[0-9a-wy-z](?:-[a-z0-9]{2,8})+)*(?:-x(?:-[a-z0-9]{1,8})+)?|x(?:-[a-z0-9]{1,8})+|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$", "i"),
          t1 = RegExp("^(?!x).*?-((?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))-(?:\\w{4,8}-(?!x-))*\\1\\b", "i"),
          s1 = RegExp("^(?!x).*?-([0-9a-wy-z])-(?:\\w+-(?!x-))*\\1\\b", "i"),
          u1 = RegExp("-[0-9a-wy-z](?:-[a-z0-9]{2,8})+", "ig"),
          h1 = void 0,
          l = o,
          L = {},
          M1 = (Object.defineProperty(L, "getCanonicalLocales", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function(n) {
              for (var e = k(n), a = [], r = e.length, i = 0; i < r;) a[i] = e[i], i++;
              return a
            }
          }), {
            BHD: 3,
            BYR: 0,
            XOF: 0,
            BIF: 0,
            XAF: 0,
            CLF: 4,
            CLP: 0,
            KMF: 0,
            DJF: 0,
            XPF: 0,
            GNF: 0,
            ISK: 0,
            IQD: 3,
            JPY: 0,
            JOD: 3,
            KRW: 0,
            KWD: 3,
            LYD: 3,
            OMR: 3,
            PYG: 0,
            RWF: 0,
            TND: 3,
            UGX: 0,
            UYI: 0,
            VUV: 0,
            VND: 0
          }),
          n1 = {
            "[[availableLocales]]": [],
            "[[relevantExtensionKeys]]": ["nu"],
            "[[localeData]]": {}
          },
          e = {
            configurable: !0,
            get: U
          },
          c1 = (S(L, "NumberFormat", {
            configurable: !0,
            writable: !0,
            value: F
          }), S(L.NumberFormat, "prototype", {
            writable: !1
          }), C.NumberFormat = n1, S(L.NumberFormat, "supportedLocalesOf", {
            configurable: !0,
            writable: !0,
            value: M.call(function(n) {
              var e, a, r;
              if (b.call(this, "[[availableLocales]]")) return e = E(), a = arguments[1], r = this["[[availableLocales]]"], n = k(n), e(), i(r, n, a);
              throw new TypeError("supportedLocalesOf() is not a constructor")
            }, C.NumberFormat)
          }), S(L.NumberFormat.prototype, "format", e), Object.defineProperty(L.NumberFormat.prototype, "formatToParts", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function() {
              var n = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0],
                e = null !== this && "object" === s.typeof(this) && A(this);
              if (e && e["[[initializedNumberFormat]]"]) {
                for (var e = Number(n), n = this, a = Y(n, e), r = [], i = 0, o = 0; a.length > o; o++) {
                  var t = a[o],
                    t = {
                      type: t["[[type]]"],
                      value: t["[[value]]"]
                    };
                  r[i] = t, i += 1
                }
                return r
              }
              throw new TypeError("`this` value for formatToParts() is not an initialized Intl.NumberFormat object.")
            }
          }), {
            arab: ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
            arabext: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
            bali: ["᭐", "᭑", "᭒", "᭓", "᭔", "᭕", "᭖", "᭗", "᭘", "᭙"],
            beng: ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"],
            deva: ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"],
            fullwide: ["０", "１", "２", "３", "４", "５", "６", "７", "８", "９"],
            gujr: ["૦", "૧", "૨", "૩", "૪", "૫", "૬", "૭", "૮", "૯"],
            guru: ["੦", "੧", "੨", "੩", "੪", "੫", "੬", "੭", "੮", "੯"],
            hanidec: ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
            khmr: ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"],
            knda: ["೦", "೧", "೨", "೩", "೪", "೫", "೬", "೭", "೮", "೯"],
            laoo: ["໐", "໑", "໒", "໓", "໔", "໕", "໖", "໗", "໘", "໙"],
            latn: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            limb: ["᥆", "᥇", "᥈", "᥉", "᥊", "᥋", "᥌", "᥍", "᥎", "᥏"],
            mlym: ["൦", "൧", "൨", "൩", "൪", "൫", "൬", "൭", "൮", "൯"],
            mong: ["᠐", "᠑", "᠒", "᠓", "᠔", "᠕", "᠖", "᠗", "᠘", "᠙"],
            mymr: ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"],
            orya: ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"],
            tamldec: ["௦", "௧", "௨", "௩", "௪", "௫", "௬", "௭", "௮", "௯"],
            telu: ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯"],
            thai: ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"],
            tibt: ["༠", "༡", "༢", "༣", "༤", "༥", "༦", "༧", "༨", "༩"]
          }),
          O = (S(L.NumberFormat.prototype, "resolvedOptions", {
            configurable: !0,
            writable: !0,
            value: function() {
              var n, e = new p,
                a = ["locale", "numberingSystem", "style", "currency", "currencyDisplay", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "useGrouping"],
                r = null !== this && "object" === s.typeof(this) && A(this);
              if (!r || !r["[[initializedNumberFormat]]"]) throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.");
              for (var i = 0, o = a.length; i < o; i++) b.call(r, n = "[[" + a[i] + "]]") && (e[a[i]] = {
                value: r[n],
                writable: !0,
                configurable: !0,
                enumerable: !0
              });
              return u({}, e)
            }
          }), ["era", "year", "month", "day", "weekday", "quarter"]),
          H = ["hour", "minute", "second", "hour12", "timeZoneName"],
          n = {
            numeric: "s",
            "2-digit": "ss"
          },
          o = {
            numeric: "m",
            "2-digit": "mm"
          },
          n1 = {
            numeric: "y",
            "2-digit": "yy"
          },
          e = {
            numeric: "d",
            "2-digit": "dd"
          },
          l1 = {
            numeric: "L",
            narrow: "LLLLL",
            short: "LLL",
            long: "LLLL",
            "2-digit": "LL"
          },
          d1 = {
            second: n,
            minute: o,
            year: n1,
            day: e,
            month: l1,
            weekday: {
              narrow: "ccccc",
              short: "ccc",
              long: "cccc"
            }
          },
          m1 = u(null, {
            narrow: {},
            short: {},
            long: {}
          }),
          P = (S(L, "DateTimeFormat", {
            configurable: !0,
            writable: !0,
            value: a
          }), S(a, "prototype", {
            writable: !1
          }), {
            weekday: ["narrow", "short", "long"],
            era: ["narrow", "short", "long"],
            year: ["2-digit", "numeric"],
            month: ["2-digit", "numeric", "narrow", "short", "long"],
            day: ["2-digit", "numeric"],
            hour: ["2-digit", "numeric"],
            minute: ["2-digit", "numeric"],
            second: ["2-digit", "numeric"],
            timeZoneName: ["short", "long"]
          }),
          n = {
            "[[availableLocales]]": [],
            "[[relevantExtensionKeys]]": ["ca", "nu"],
            "[[localeData]]": {}
          },
          o = {
            configurable: !0,
            get: W
          },
          d = (C.DateTimeFormat = n, S(L.DateTimeFormat, "supportedLocalesOf", {
            configurable: !0,
            writable: !0,
            value: M.call(function(n) {
              var e, a, r;
              if (b.call(this, "[[availableLocales]]")) return e = E(), a = arguments[1], r = this["[[availableLocales]]"], n = k(n), e(), i(r, n, a);
              throw new TypeError("supportedLocalesOf() is not a constructor")
            }, C.NumberFormat)
          }), S(L.DateTimeFormat.prototype, "format", o), Object.defineProperty(L.DateTimeFormat.prototype, "formatToParts", {
            enumerable: !1,
            writable: !0,
            configurable: !0,
            value: function() {
              var n = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0],
                e = null !== this && "object" === s.typeof(this) && A(this);
              if (e && e["[[initializedDateTimeFormat]]"]) return X(this, void 0 === n ? Date.now() : t(n));
              throw new TypeError("`this` value for formatToParts() is not an initialized Intl.DateTimeFormat object.")
            }
          }), S(L.DateTimeFormat.prototype, "resolvedOptions", {
            writable: !0,
            configurable: !0,
            value: function() {
              var n, e = new p,
                a = ["locale", "calendar", "numberingSystem", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
                r = null !== this && "object" === s.typeof(this) && A(this);
              if (!r || !r["[[initializedDateTimeFormat]]"]) throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.");
              for (var i = 0, o = a.length; i < o; i++) b.call(r, n = "[[" + a[i] + "]]") && (e[a[i]] = {
                value: r[n],
                writable: !0,
                configurable: !0,
                enumerable: !0
              });
              return u({}, e)
            }
          }), L.__localeSensitiveProtos = {
            Number: {},
            Date: {}
          });
        d.Number.toLocaleString = function() {
          if ("[object Number]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()");
          return w(new F(arguments[0], arguments[1]), this)
        }, d.Date.toLocaleString = function() {
          if ("[object Date]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()");
          var n = +this;
          return isNaN(n) ? "Invalid Date" : r(new a(arguments[0], D(arguments[1], "any", "all")), n)
        }, d.Date.toLocaleDateString = function() {
          if ("[object Date]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()");
          var n = +this;
          return isNaN(n) ? "Invalid Date" : r(new a(arguments[0], D(arguments[1], "date", "date")), n)
        }, d.Date.toLocaleTimeString = function() {
          if ("[object Date]" !== Object.prototype.toString.call(this)) throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()");
          var n = +this;
          return isNaN(n) ? "Invalid Date" : r(new a(arguments[0], D(arguments[1], "time", "time")), n)
        }, S(L, "__applyLocaleSensitivePrototypes", {
          writable: !0,
          configurable: !0,
          value: function() {
            var n, e = {
                writable: !0,
                configurable: !0,
                value: d.Number.toLocaleString
              },
              a = {
                writable: !0,
                configurable: !0,
                value: d.Date.toLocaleString
              };
            for (n in S(Number.prototype, "toLocaleString", e), S(Date.prototype, "toLocaleString", a), d.Date) b.call(d.Date, n) && S(Date.prototype, n, {
              writable: !0,
              configurable: !0,
              value: d.Date[n]
            })
          }
        }), S(L, "__addLocaleData", {
          value: function(n) {
            if (!y(n.locale)) throw new Error("Object passed doesn't identify itself with a valid language tag");
            var e = n,
              n = n.locale;
            if (!e.number) throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat");
            var a, r = [n],
              i = n.split("-");
            for (2 < i.length && 4 === i[1].length && I.call(r, i[0] + "-" + i[2]); a = r1.call(r);) I.call(C.NumberFormat["[[availableLocales]]"], a), C.NumberFormat["[[localeData]]"][a] = e.number, e.date && (e.date.nu = e.number.nu, I.call(C.DateTimeFormat["[[availableLocales]]"], a), C.DateTimeFormat["[[localeData]]"][a] = e.date);
            void 0 === h1 && (h1 = n)
          }
        }), S(L, "__disableRegExpRestore", {
          value: function() {
            C.disableRegExpRestore = !0
          }
        }), m.exports = L
      },
      7489: function() {
        IntlPolyfill.__addLocaleData({
          locale: "ar",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !0,
            formats: {
              short: "{1} {0}",
              medium: "{1} {0}",
              full: "{1} {0}",
              long: "{1} {0}",
              availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "E، d",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "y G",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM، y G",
                GyMMMEd: "E، d MMM، y G",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "d/‏M",
                MEd: "E، d/M",
                MMdd: "dd‏/MM",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E، d MMM",
                MMMMd: "d MMMM",
                MMMMEd: "E، d MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "M‏/y",
                yMd: "d‏/M‏/y",
                yMEd: "E، d/‏M/‏y",
                yMM: "MM‏/y",
                yMMM: "MMM y",
                yMMMd: "d MMM، y",
                yMMMEd: "E، d MMM، y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y"
              },
              dateFormats: {
                yMMMMEEEEd: "EEEE، d MMMM، y",
                yMMMMd: "d MMMM، y",
                yMMMd: "dd‏/MM‏/y",
                yMd: "d‏/M‏/y"
              },
              timeFormats: {
                hmmsszzzz: "h:mm:ss a zzzz",
                hmsz: "h:mm:ss a z",
                hms: "h:mm:ss a",
                hm: "h:mm a"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["ي", "ف", "م", "أ", "و", "ن", "ل", "غ", "س", "ك", "ب", "د"],
                  short: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                  long: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["BE"],
                  short: ["BE"],
                  long: ["التقويم البوذي"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              coptic: {
                months: {
                  narrow: ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠", "١١", "١٢", "١٣"],
                  short: ["توت", "بابه", "هاتور", "كيهك", "طوبة", "أمشير", "برمهات", "برمودة", "بشنس", "بؤونة", "أبيب", "مسرى", "نسيئ"],
                  long: ["توت", "بابه", "هاتور", "كيهك", "طوبة", "أمشير", "برمهات", "برمودة", "بشنس", "بؤونة", "أبيب", "مسرى", "نسيئ"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["مسكريم", "تكمت", "هدار", "تهساس", "تر", "يكتت", "مجابيت", "ميازيا", "جنبت", "سين", "هامل", "نهاس", "باجمن"],
                  long: ["مسكريم", "تكمت", "هدار", "تهساس", "تر", "يكتت", "مجابيت", "ميازيا", "جنبت", "سين", "هامل", "نهاس", "باجمن"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["مسكريم", "تكمت", "هدار", "تهساس", "تر", "يكتت", "مجابيت", "ميازيا", "جنبت", "سين", "هامل", "نهاس", "باجمن"],
                  long: ["مسكريم", "تكمت", "هدار", "تهساس", "تر", "يكتت", "مجابيت", "ميازيا", "جنبت", "سين", "هامل", "نهاس", "باجمن"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              gregory: {
                months: {
                  narrow: ["ي", "ف", "م", "أ", "و", "ن", "ل", "غ", "س", "ك", "ب", "د"],
                  short: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                  long: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["ق.م", "م", "BCE", "ب.م"],
                  short: ["ق.م", "م", "BCE", "ب.م"],
                  long: ["قبل الميلاد", "ميلادي", "BCE", "بعد الميلاد"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["تشري", "مرحشوان", "كيسلو", "طيفت", "شباط", "آذار الأول", "آذار", "نيسان", "أيار", "سيفان", "تموز", "آب", "أيلول", "آذار الثاني"],
                  long: ["تشري", "مرحشوان", "كيسلو", "طيفت", "شباط", "آذار الأول", "آذار", "نيسان", "أيار", "سيفان", "تموز", "آب", "أيلول", "آذار الثاني"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["ص"],
                  short: ["ص"],
                  long: ["ص"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                  long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["Saka"],
                  short: ["Saka"],
                  long: ["Saka"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              islamic: {
                months: {
                  narrow: ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠", "١١", "١٢"],
                  short: ["محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"],
                  long: ["محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["هـ"],
                  short: ["هـ"],
                  long: ["هـ"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              islamicc: {
                months: {
                  narrow: ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "١٠", "١١", "١٢"],
                  short: ["محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"],
                  long: ["محرم", "صفر", "ربيع الأول", "ربيع الآخر", "جمادى الأولى", "جمادى الآخرة", "رجب", "شعبان", "رمضان", "شوال", "ذو القعدة", "ذو الحجة"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["هـ"],
                  short: ["هـ"],
                  long: ["هـ"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              japanese: {
                months: {
                  narrow: ["ي", "ف", "م", "أ", "و", "ن", "ل", "غ", "س", "ك", "ب", "د"],
                  short: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                  long: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["تيكا", "هاكتشي", "هاكهو", "شتشو", "تيهو", "كيين", "وادو", "رييكي", "يورو", "جينكي", "تمبيو", "تمبيو-كامبو", "تمبيو-شوهو", "تمبيو-هوجي", "تمفو-جينجو", "جينجو-كيين", "هوكي", "تن-أو", "إنرياكو", "ديدو", "كونين", "تنتشو", "شووا (٨٣٤–٨٤٨)‏", "كاجو", "نينجو", "سيكو", "تنان", "جوجان", "جينكيي", "نينا", "كامبيو", "شوتاي", "انجي", "انتشو", "شوهيي", "تنجيو", "تنرياكو", "تنتوكو", "أووا", "كوهو", "آنا", "تينروكو", "تن-نن", "جوجن", "تنجن", "إيكان", "كانا", "اي-ان", "ايسو", "شورياكو (٩٩٠–٩٩٥)‏", "تشوتوكو", "تشوهو", "كانكو", "تشووا", "كانين", "جاين", "مانجو", "تشوجين", "تشورياكو", "تشوكيو (١٠٤٠–١٠٤٤)‏", "كانتوكو", "ايشو (١٠٤٦–١٠٥٣)‏", "تينجي", "كوهيي", "جيرياكو", "انكيو (١٠٦٩–١٠٧٤)‏", "شوهو (١٠٧٤–١٠٧٧)‏", "شورياكو (١٠٧٧–١٠٨١)‏", "ايهو", "أوتوكو", "كانجي", "كاهو", "ايتشو", "شوتوكو", "كووا (١٠٩٩–١١٠٤)‏", "تشوجي", "كاشو", "تنين", "تن-اي", "ايكيو (١١١٣–١١١٨)‏", "جن-اي", "هوان", "تنجي", "ديجي", "تنشو (١١٣١–١١٣٢)‏", "تشوشو", "هوين", "ايجي", "كوجي (١١٤٢–١١٤٤)‏", "تنيو", "كيوان", "نينبيي", "كيوجو", "هجين", "هيجي", "ايرياكو", "أوهو", "تشوكان", "ايمان", "نين-ان", "كاو", "شون", "أنجين", "جيشو", "يووا", "جيي", "جنريوكو", "بنجي", "كنكيو", "شوجي", "كنين", "جنكيو (١٢٠٤–١٢٠٦)‏", "كن-اي", "شوجن (١٢٠٧–١٢١١)‏", "كنرياكو", "كنبو (١٢١٣–١٢١٩)‏", "شوكيو", "جو", "جيننين", "كروكو", "أنتيي", "كنكي", "جويي", "تمبكو", "بنرياكو", "كاتيي", "رياكنين", "ان-أو", "نينجي", "كنجين", "هوجي", "كنتشو", "كوجن", "شوكا", "شوجن (١٢٥٩–١٢٦٠)‏", "بن-أو", "كوتشو", "بن-اي", "كنجي", "كوان", "شوو (١٢٨٨–١٢٩٣)‏", "اينين", "شوان", "كنجن", "كجن", "توكجي", "انكي", "أوتشو", "شووا (١٣١٢–١٣١٧)‏", "بنبو", "جنو", "جنكيو (١٣٢١–١٣٢٤)‏", "شوتشو (١٣٢٤–١٣٢٦)‏", "كريكي", "جنتكو", "جنكو", "كمو", "إنجن", "كوككو", "شوهي", "كنتكو", "بنتشو", "تنجو", "كورياكو", "كووا (١٣٨١–١٣٨٤)‏", "جنتشو", "مييتكو (١٣٨٤–١٣٨٧)‏", "كاكي", "كو", "مييتكو (١٣٩٠–١٣٩٤)‏", "أويي", "شوتشو (١٤٢٨–١٤٢٩)‏", "ايكيو (١٤٢٩–١٤٤١)‏", "ككيتسو", "بن-أن", "هوتكو", "كيوتكو", "كوشو", "تشوركو", "كنشو", "بنشو", "أونين", "بنمي", "تشوكيو (١٤٨٧–١٤٨٩)‏", "انتكو", "ميو", "بنكي", "ايشو (١٥٠٤–١٥٢١)‏", "تييي", "كيوركو", "تنمن", "كوجي (١٥٥٥–١٥٥٨)‏", "ايركو", "جنكي", "تنشو (١٥٧٣–١٥٩٢)‏", "بنركو", "كيتشو", "جنوا", "كان-اي", "شوهو (١٦٤٤–١٦٤٨)‏", "كيان", "شوو (١٦٥٢–١٦٥٥)‏", "ميرياكو", "منجي", "كنبن", "انبو", "تنوا", "جوكيو", "جنركو", "هويي", "شوتكو", "كيوهو", "جنبن", "كنبو (١٧٤١–١٧٤٤)‏", "انكيو (١٧٤٤–١٧٤٨)‏", "كان-ان", "هورياكو", "مييوا", "ان-اي", "تنمي", "كنسي", "كيووا", "بنكا", "بنسي", "تنبو", "كوكا", "كاي", "أنسي", "من-ان", "بنكيو", "جنجي", "كيو", "ميجي", "تيشو", "شووا", "هيسي"],
                  long: ["تيكا", "هاكتشي", "هاكهو", "شتشو", "تيهو", "كيين", "وادو", "رييكي", "يورو", "جينكي", "تمبيو", "تمبيو-كامبو", "تمبيو-شوهو", "تمبيو-هوجي", "تمفو-جينجو", "جينجو-كيين", "هوكي", "تن-أو", "إنرياكو", "ديدو", "كونين", "تنتشو", "شووا (٨٣٤–٨٤٨)‏", "كاجو", "نينجو", "سيكو", "تنان", "جوجان", "جينكيي", "نينا", "كامبيو", "شوتاي", "انجي", "انتشو", "شوهيي", "تنجيو", "تنرياكو", "تنتوكو", "أووا", "كوهو", "آنا", "تينروكو", "تن-نن", "جوجن", "تنجن", "إيكان", "كانا", "اي-ان", "ايسو", "شورياكو (٩٩٠–٩٩٥)‏", "تشوتوكو", "تشوهو", "كانكو", "تشووا", "كانين", "جاين", "مانجو", "تشوجين", "تشورياكو", "تشوكيو (١٠٤٠–١٠٤٤)‏", "كانتوكو", "ايشو (١٠٤٦–١٠٥٣)‏", "تينجي", "كوهيي", "جيرياكو", "انكيو (١٠٦٩–١٠٧٤)‏", "شوهو (١٠٧٤–١٠٧٧)‏", "شورياكو (١٠٧٧–١٠٨١)‏", "ايهو", "أوتوكو", "كانجي", "كاهو", "ايتشو", "شوتوكو", "كووا (١٠٩٩–١١٠٤)‏", "تشوجي", "كاشو", "تنين", "تن-اي", "ايكيو (١١١٣–١١١٨)‏", "جن-اي", "هوان", "تنجي", "ديجي", "تنشو (١١٣١–١١٣٢)‏", "تشوشو", "هوين", "ايجي", "كوجي (١١٤٢–١١٤٤)‏", "تنيو", "كيوان", "نينبيي", "كيوجو", "هجين", "هيجي", "ايرياكو", "أوهو", "تشوكان", "ايمان", "نين-ان", "كاو", "شون", "أنجين", "جيشو", "يووا", "جيي", "جنريوكو", "بنجي", "كنكيو", "شوجي", "كنين", "جنكيو (١٢٠٤–١٢٠٦)‏", "كن-اي", "شوجن (١٢٠٧–١٢١١)‏", "كنرياكو", "كنبو (١٢١٣–١٢١٩)‏", "شوكيو", "جو", "جيننين", "كروكو", "أنتيي", "كنكي", "جويي", "تمبكو", "بنرياكو", "كاتيي", "رياكنين", "ان-أو", "نينجي", "كنجين", "هوجي", "كنتشو", "كوجن", "شوكا", "شوجن (١٢٥٩–١٢٦٠)‏", "بن-أو", "كوتشو", "بن-اي", "كنجي", "كوان", "شوو (١٢٨٨–١٢٩٣)‏", "اينين", "شوان", "كنجن", "كجن", "توكجي", "انكي", "أوتشو", "شووا (١٣١٢–١٣١٧)‏", "بنبو", "جنو", "جنكيو (١٣٢١–١٣٢٤)‏", "شوتشو (١٣٢٤–١٣٢٦)‏", "كريكي", "جنتكو", "جنكو", "كمو", "إنجن", "كوككو", "شوهي", "كنتكو", "بنتشو", "تنجو", "كورياكو", "كووا (١٣٨١–١٣٨٤)‏", "جنتشو", "مييتكو (١٣٨٤–١٣٨٧)‏", "كاكي", "كو", "مييتكو (١٣٩٠–١٣٩٤)‏", "أويي", "شوتشو (١٤٢٨–١٤٢٩)‏", "ايكيو (١٤٢٩–١٤٤١)‏", "ككيتسو", "بن-أن", "هوتكو", "كيوتكو", "كوشو", "تشوركو", "كنشو", "بنشو", "أونين", "بنمي", "تشوكيو (١٤٨٧–١٤٨٩)‏", "انتكو", "ميو", "بنكي", "ايشو (١٥٠٤–١٥٢١)‏", "تييي", "كيوركو", "تنمن", "كوجي (١٥٥٥–١٥٥٨)‏", "ايركو", "جنكي", "تنشو (١٥٧٣–١٥٩٢)‏", "بنركو", "كيتشو", "جنوا", "كان-اي", "شوهو (١٦٤٤–١٦٤٨)‏", "كيان", "شوو (١٦٥٢–١٦٥٥)‏", "ميرياكو", "منجي", "كنبن", "انبو", "تنوا", "جوكيو", "جنركو", "هويي", "شوتكو", "كيوهو", "جنبن", "كنبو (١٧٤١–١٧٤٤)‏", "انكيو (١٧٤٤–١٧٤٨)‏", "كان-ان", "هورياكو", "مييوا", "ان-اي", "تنمي", "كنسي", "كيووا", "بنكا", "بنسي", "تنبو", "كوكا", "كاي", "أنسي", "من-ان", "بنكيو", "جنجي", "كيو", "ميجي", "تيشو", "شووا", "هيسي"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["فرفردن", "أذربيهشت", "خرداد", "تار", "مرداد", "شهرفار", "مهر", "آيان", "آذر", "دي", "بهمن", "اسفندار"],
                  long: ["فرفردن", "أذربيهشت", "خرداد", "تار", "مرداد", "شهرفار", "مهر", "آيان", "آذر", "دي", "بهمن", "اسفندار"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["ه‍.ش"],
                  short: ["ه‍.ش"],
                  long: ["ه‍.ش"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              },
              roc: {
                months: {
                  narrow: ["ي", "ف", "م", "أ", "و", "ن", "ل", "غ", "س", "ك", "ب", "د"],
                  short: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
                  long: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                },
                days: {
                  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
                  short: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
                  long: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
                },
                eras: {
                  narrow: ["Before R.O.C.", "جمهورية الصي"],
                  short: ["Before R.O.C.", "جمهورية الصي"],
                  long: ["Before R.O.C.", "جمهورية الصي"]
                },
                dayPeriods: {
                  am: "ص",
                  pm: "م"
                }
              }
            }
          },
          number: {
            nu: ["arab", "latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{currency} {number}",
                negativePattern: "{minusSign}{currency} {number}"
              },
              percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
              }
            },
            symbols: {
              arab: {
                decimal: "٫",
                group: "٬",
                nan: "ليس رقم",
                plusSign: "‏+",
                minusSign: "‏-",
                percentSign: "٪",
                infinity: "∞"
              },
              latn: {
                decimal: ".",
                group: ",",
                nan: "ليس رقمًا",
                plusSign: "‎+",
                minusSign: "‎-",
                percentSign: "٪",
                infinity: "∞"
              }
            },
            currencies: {
              AED: "د.إ.‏",
              AUD: "AU$",
              BHD: "د.ب.‏",
              BRL: "R$",
              CAD: "CA$",
              CNY: "CN¥",
              DZD: "د.ج.‏",
              EGP: "ج.م.‏",
              EUR: "€",
              GBP: "£",
              HKD: "HK$",
              IDR: "ر.إن.",
              ILS: "₪",
              INR: "₹",
              IQD: "د.ع.‏",
              IRR: "ر.إ.",
              JOD: "د.أ.‏",
              JPY: "JP¥",
              KMF: "ف.ج.ق.‏",
              KRW: "₩",
              KWD: "د.ك.‏",
              LBP: "ل.ل.‏",
              LYD: "د.ل.‏",
              MAD: "د.م.‏",
              MRO: "أ.م.‏",
              MXN: "MX$",
              NZD: "NZ$",
              OMR: "ر.ع.‏",
              PKR: "ر.ب.",
              QAR: "ر.ق.‏",
              SAR: "ر.س.‏",
              SDD: "د.س.‏",
              SDG: "ج.س.",
              SSP: "ج.ج.س.",
              SYP: "ل.س.‏",
              THB: "฿",
              TND: "د.ت.‏",
              TRY: "ل.ت.",
              TWD: "NT$",
              USD: "US$",
              VND: "₫",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF",
              XXX: "***",
              YER: "ر.ي.‏"
            }
          }
        })
      },
      3178: function() {
        IntlPolyfill.__addLocaleData({
          locale: "de",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !1,
            formats: {
              short: "{1}, {0}",
              medium: "{1}, {0}",
              full: "{1} 'um' {0}",
              long: "{1} 'um' {0}",
              availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "E, d.",
                Ehm: "E h:mm a",
                EHm: "E, HH:mm",
                Ehms: "E, h:mm:ss a",
                EHms: "E, HH:mm:ss",
                Gy: "y G",
                GyMMM: "MMM y G",
                GyMMMd: "d. MMM y G",
                GyMMMEd: "E, d. MMM y G",
                h: "h a",
                H: "HH 'Uhr'",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "d.M.",
                MEd: "E, d.M.",
                MMd: "d.MM.",
                MMdd: "dd.MM.",
                MMM: "LLL",
                MMMd: "d. MMM",
                MMMEd: "E, d. MMM",
                MMMMd: "d. MMMM",
                MMMMEd: "E, d. MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "M.y",
                yMd: "d.M.y",
                yMEd: "E, d.M.y",
                yMM: "MM.y",
                yMMdd: "dd.MM.y",
                yMMM: "MMM y",
                yMMMd: "d. MMM y",
                yMMMEd: "E, d. MMM y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y"
              },
              dateFormats: {
                yMMMMEEEEd: "EEEE, d. MMMM y",
                yMMMMd: "d. MMMM y",
                yMMMd: "dd.MM.y",
                yMd: "dd.MM.yy"
              },
              timeFormats: {
                hmmsszzzz: "HH:mm:ss zzzz",
                hmsz: "HH:mm:ss z",
                hms: "HH:mm:ss",
                hm: "HH:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
                  long: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["BE"],
                  short: ["BE"],
                  long: ["BE"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                  long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              gregory: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
                  long: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["v. Chr.", "n. Chr.", "v. u. Z.", "u. Z."],
                  short: ["v. Chr.", "n. Chr.", "v. u. Z.", "u. Z."],
                  long: ["v. Chr.", "n. Chr.", "vor unserer Zeitrechnung", "unserer Zeitrechnung"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
                  long: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["AM"],
                  short: ["AM"],
                  long: ["AM"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                  long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["Saka"],
                  short: ["Saka"],
                  long: ["Saka"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              japanese: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
                  long: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"],
                  long: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                  long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["AP"],
                  short: ["AP"],
                  long: ["AP"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              },
              roc: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sep.", "Okt.", "Nov.", "Dez."],
                  long: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
                },
                days: {
                  narrow: ["S", "M", "D", "M", "D", "F", "S"],
                  short: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
                  long: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
                },
                eras: {
                  narrow: ["Before R.O.C.", "Minguo"],
                  short: ["Before R.O.C.", "Minguo"],
                  long: ["Before R.O.C.", "Minguo"]
                },
                dayPeriods: {
                  am: "vorm.",
                  pm: "nachm."
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{number} {currency}",
                negativePattern: "{minusSign}{number} {currency}"
              },
              percent: {
                positivePattern: "{number} {percentSign}",
                negativePattern: "{minusSign}{number} {percentSign}"
              }
            },
            symbols: {
              latn: {
                decimal: ",",
                group: ".",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              ATS: "öS",
              AUD: "AU$",
              BGM: "BGK",
              BGO: "BGJ",
              BRL: "R$",
              CAD: "CA$",
              CNY: "CN¥",
              DEM: "DM",
              EUR: "€",
              GBP: "£",
              HKD: "HK$",
              ILS: "₪",
              INR: "₹",
              JPY: "¥",
              KRW: "₩",
              MXN: "MX$",
              NZD: "NZ$",
              THB: "฿",
              TWD: "NT$",
              USD: "$",
              VND: "₫",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF"
            }
          }
        })
      },
      8750: function() {
        IntlPolyfill.__addLocaleData({
          locale: "en",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !0,
            formats: {
              short: "{1}, {0}",
              medium: "{1}, {0}",
              full: "{1} 'at' {0}",
              long: "{1} 'at' {0}",
              availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "d E",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "y G",
                GyMMM: "MMM y G",
                GyMMMd: "MMM d, y G",
                GyMMMEd: "E, MMM d, y G",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "M/d",
                MEd: "E, M/d",
                MMM: "LLL",
                MMMd: "MMM d",
                MMMEd: "E, MMM d",
                MMMMd: "MMMM d",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "M/d/y",
                yMEd: "E, M/d/y",
                yMMM: "MMM y",
                yMMMd: "MMM d, y",
                yMMMEd: "E, MMM d, y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y"
              },
              dateFormats: {
                yMMMMEEEEd: "EEEE, MMMM d, y",
                yMMMMd: "MMMM d, y",
                yMMMd: "MMM d, y",
                yMd: "M/d/yy"
              },
              timeFormats: {
                hmmsszzzz: "h:mm:ss a zzzz",
                hmsz: "h:mm:ss a z",
                hms: "h:mm:ss a",
                hm: "h:mm a"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["BE"],
                  short: ["BE"],
                  long: ["BE"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Mo1", "Mo2", "Mo3", "Mo4", "Mo5", "Mo6", "Mo7", "Mo8", "Mo9", "Mo10", "Mo11", "Mo12"],
                  long: ["Month1", "Month2", "Month3", "Month4", "Month5", "Month6", "Month7", "Month8", "Month9", "Month10", "Month11", "Month12"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                  long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Mo1", "Mo2", "Mo3", "Mo4", "Mo5", "Mo6", "Mo7", "Mo8", "Mo9", "Mo10", "Mo11", "Mo12"],
                  long: ["Month1", "Month2", "Month3", "Month4", "Month5", "Month6", "Month7", "Month8", "Month9", "Month10", "Month11", "Month12"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              gregory: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["B", "A", "BCE", "CE"],
                  short: ["BC", "AD", "BCE", "CE"],
                  long: ["Before Christ", "Anno Domini", "Before Common Era", "Common Era"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
                  long: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["AM"],
                  short: ["AM"],
                  long: ["AM"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                  long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["Saka"],
                  short: ["Saka"],
                  long: ["Saka"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              japanese: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"],
                  long: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                  long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["AP"],
                  short: ["AP"],
                  long: ["AP"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              roc: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                  long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                },
                days: {
                  narrow: ["S", "M", "T", "W", "T", "F", "S"],
                  short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                },
                eras: {
                  narrow: ["Before R.O.C.", "Minguo"],
                  short: ["Before R.O.C.", "Minguo"],
                  long: ["Before R.O.C.", "Minguo"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
              },
              percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
              }
            },
            symbols: {
              latn: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              AUD: "A$",
              BRL: "R$",
              CAD: "CA$",
              CNY: "CN¥",
              EUR: "€",
              GBP: "£",
              HKD: "HK$",
              ILS: "₪",
              INR: "₹",
              JPY: "¥",
              KRW: "₩",
              MXN: "MX$",
              NZD: "NZ$",
              TWD: "NT$",
              USD: "$",
              VND: "₫",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF"
            }
          }
        })
      },
      7305: function() {
        IntlPolyfill.__addLocaleData({
          locale: "es-ES",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !1,
            formats: {
              short: "{1} {0}",
              medium: "{1} {0}",
              full: "{1}, {0}",
              long: "{1}, {0}",
              availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "E d",
                Ehm: "E, h:mm a",
                EHm: "E, H:mm",
                Ehms: "E, h:mm:ss a",
                EHms: "E, H:mm:ss",
                Gy: "y G",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM y G",
                GyMMMEd: "E, d MMM y G",
                GyMMMM: "MMMM 'de' y G",
                GyMMMMd: "d 'de' MMMM 'de' y G",
                GyMMMMEd: "E, d 'de' MMMM 'de' y G",
                h: "h a",
                H: "H",
                hm: "h:mm a",
                Hm: "H:mm",
                hms: "h:mm:ss a",
                Hms: "H:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "H:mm:ss v",
                hmsvvvv: "h:mm:ss a (vvvv)",
                Hmsvvvv: "H:mm:ss (vvvv)",
                hmv: "h:mm a v",
                Hmv: "H:mm v",
                M: "L",
                Md: "d/M",
                MEd: "E, d/M",
                MMd: "d/M",
                MMdd: "d/M",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E, d MMM",
                MMMMd: "d 'de' MMMM",
                MMMMEd: "E, d 'de' MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "EEE, d/M/y",
                yMM: "M/y",
                yMMM: "MMM y",
                yMMMd: "d MMM y",
                yMMMEd: "EEE, d MMM y",
                yMMMM: "MMMM 'de' y",
                yMMMMd: "d 'de' MMMM 'de' y",
                yMMMMEd: "EEE, d 'de' MMMM 'de' y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ 'de' y"
              },
              dateFormats: {
                yMMMMEEEEd: "EEEE, d 'de' MMMM 'de' y",
                yMMMMd: "d 'de' MMMM 'de' y",
                yMMMd: "d MMM y",
                yMd: "d/M/yy"
              },
              timeFormats: {
                hmmsszzzz: "H:mm:ss (zzzz)",
                hmsz: "H:mm:ss z",
                hms: "H:mm:ss",
                hm: "H:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
                  long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["BE"],
                  short: ["BE"],
                  long: ["BE"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                  long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              gregory: {
                months: {
                  narrow: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
                  long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["a. C.", "d. C.", "a. e. c.", "e. c."],
                  short: ["a. C.", "d. C.", "a. e. c.", "e. c."],
                  long: ["antes de Cristo", "después de Cristo", "antes de la era común", "era común"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
                  long: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["AM"],
                  short: ["AM"],
                  long: ["AM"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                  long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["Saka"],
                  short: ["Saka"],
                  long: ["Saka"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              japanese: {
                months: {
                  narrow: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
                  long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"],
                  long: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                  long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["AP"],
                  short: ["AP"],
                  long: ["AP"]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              },
              roc: {
                months: {
                  narrow: ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."],
                  long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "X", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["antes de R.O.C.", "R.O.C."],
                  short: ["antes de R.O.C.", "R.O.C."],
                  long: ["antes de R.O.C.", "R.O.C."]
                },
                dayPeriods: {
                  am: "a. m.",
                  pm: "p. m."
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{number} {currency}",
                negativePattern: "{minusSign}{number} {currency}"
              },
              percent: {
                positivePattern: "{number} {percentSign}",
                negativePattern: "{minusSign}{number} {percentSign}"
              }
            },
            symbols: {
              latn: {
                decimal: ",",
                group: ".",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              CAD: "CA$",
              ESP: "₧",
              EUR: "€",
              THB: "฿",
              USD: "$",
              VND: "₫",
              XPF: "CFPF"
            }
          }
        })
      },
      7929: function() {
        IntlPolyfill.__addLocaleData({
          locale: "es-MX",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !1,
            formats: {
              short: "{1} {0}",
              medium: "{1} {0}",
              full: "{1}, {0}",
              long: "{1}, {0}",
              availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "E d",
                Ehm: "E h:mm a",
                EHm: "E H:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E H:mm:ss",
                Gy: "y G",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM y G",
                GyMMMEd: "E, d MMM y G",
                GyMMMM: "MMMM 'de' y G",
                GyMMMMd: "d 'de' MMMM 'de' y G",
                GyMMMMEd: "E, d 'de' MMMM 'de' y G",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "H:mm",
                hms: "h:mm:ss a",
                Hms: "H:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "H:mm:ss v",
                hmsvvvv: "h:mm:ss a (vvvv)",
                Hmsvvvv: "H:mm:ss (vvvv)",
                hmv: "h:mm a v",
                Hmv: "H:mm v",
                M: "L",
                Md: "d/M",
                MEd: "E, d/M",
                MMd: "d/MM",
                MMdd: "dd/MM",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMdd: "dd-MMM",
                MMMEd: "E d 'de' MMM",
                MMMMd: "d 'de' MMMM",
                MMMMEd: "E, d 'de' MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "E d/M/y",
                yMM: "MM/y",
                yMMM: "MMMM 'de' y",
                yMMMd: "d 'de' MMMM 'de' y",
                yMMMEd: "EEE, d 'de' MMMM 'de' y",
                yMMMM: "MMMM 'de' y",
                yMMMMd: "d 'de' MMMM 'de' y",
                yMMMMEd: "EEE, d 'de' MMMM 'de' y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ 'de' y"
              },
              dateFormats: {
                yMMMMEEEEd: "EEEE, d 'de' MMMM 'de' y",
                yMMMMd: "d 'de' MMMM 'de' y",
                yMMMd: "dd/MM/y",
                yMd: "dd/MM/yy"
              },
              timeFormats: {
                hmmsszzzz: "HH:mm:ss zzzz",
                hmsz: "HH:mm:ss z",
                hms: "HH:mm:ss",
                hm: "HH:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
                  short: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
                  long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["BE"],
                  short: ["BE"],
                  long: ["BE"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                  long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              gregory: {
                months: {
                  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
                  short: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
                  long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["a. C.", "d. C.", "a. e. c.", "e. c."],
                  short: ["a. C.", "d. C.", "a. e. c.", "e. c."],
                  long: ["antes de Cristo", "después de Cristo", "antes de la era común", "era común"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
                  long: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["AM"],
                  short: ["AM"],
                  long: ["AM"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                  long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["Saka"],
                  short: ["Saka"],
                  long: ["Saka"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              japanese: {
                months: {
                  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
                  short: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
                  long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"],
                  long: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                  long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["AP"],
                  short: ["AP"],
                  long: ["AP"]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              },
              roc: {
                months: {
                  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
                  short: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
                  long: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dom.", "lun.", "mar.", "mié.", "jue.", "vie.", "sáb."],
                  long: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
                },
                eras: {
                  narrow: ["antes de R.O.C.", "R.O.C."],
                  short: ["antes de R.O.C.", "R.O.C."],
                  long: ["antes de R.O.C.", "R.O.C."]
                },
                dayPeriods: {
                  am: "a.m.",
                  pm: "p.m."
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
              },
              percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
              }
            },
            symbols: {
              latn: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              AFN: "Af",
              ANG: "Naf",
              AOA: "Kz",
              ARS: "$a",
              AUD: "AU$",
              AWG: "Afl.",
              CNY: "CN¥",
              ESP: "₧",
              MXN: "$"
            }
          }
        })
      },
      3474: function() {
        IntlPolyfill.__addLocaleData({
          locale: "fr",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !1,
            formats: {
              short: "{1} {0}",
              medium: "{1} 'à' {0}",
              full: "{1} 'à' {0}",
              long: "{1} 'à' {0}",
              availableFormats: {
                d: "d",
                E: "E",
                Ed: "E d",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "y G",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM y G",
                GyMMMEd: "E d MMM y G",
                h: "h a",
                H: "HH 'h'",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "dd/MM",
                MEd: "E dd/MM",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E d MMM",
                MMMMd: "d MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "MM/y",
                yMd: "dd/MM/y",
                yMEd: "E dd/MM/y",
                yMMM: "MMM y",
                yMMMd: "d MMM y",
                yMMMEd: "E d MMM y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y"
              },
              dateFormats: {
                yMMMMEEEEd: "EEEE d MMMM y",
                yMMMMd: "d MMMM y",
                yMMMd: "d MMM y",
                yMd: "dd/MM/y"
              },
              timeFormats: {
                hmmsszzzz: "HH:mm:ss zzzz",
                hmsz: "HH:mm:ss z",
                hms: "HH:mm:ss",
                hm: "HH:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
                  long: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["E.B."],
                  short: ["ère b."],
                  long: ["ère bouddhiste"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1yuè", "2yuè", "3yuè", "4yuè", "5yuè", "6yuè", "7yuè", "8yuè", "9yuè", "10yuè", "11yuè", "12yuè"],
                  long: ["zhēngyuè", "èryuè", "sānyuè", "sìyuè", "wǔyuè", "liùyuè", "qīyuè", "bāyuè", "jiǔyuè", "shíyuè", "shíyīyuè", "shí’èryuè"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                  long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1yuè", "2yuè", "3yuè", "4yuè", "5yuè", "6yuè", "7yuè", "8yuè", "9yuè", "10yuè", "11yuè", "12yuè"],
                  long: ["zhēngyuè", "èryuè", "sānyuè", "sìyuè", "wǔyuè", "liùyuè", "qīyuè", "bāyuè", "jiǔyuè", "shíyuè", "shíyīyuè", "shí’èryuè"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              gregory: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
                  long: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["av. J.-C.", "ap. J.-C.", "AEC", "EC"],
                  short: ["av. J.-C.", "ap. J.-C.", "AEC", "EC"],
                  long: ["avant Jésus-Christ", "après Jésus-Christ", "avant l’ère commune", "de l’ère commune"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["Tisseri", "Hesvan", "Kislev", "Tébeth", "Schébat", "Adar I", "Adar", "Nissan", "Iyar", "Sivan", "Tamouz", "Ab", "Elloul", "Adar II"],
                  long: ["Tisseri", "Hesvan", "Kislev", "Tébeth", "Schébat", "Adar I", "Adar", "Nissan", "Iyar", "Sivan", "Tamouz", "Ab", "Elloul", "Adar II"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["AM"],
                  short: ["AM"],
                  long: ["AM"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                  long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["Saka"],
                  short: ["Saka"],
                  long: ["Saka"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["mouh.", "saf.", "rab. aw.", "rab. th.", "joum. oul.", "joum. tha.", "raj.", "chaa.", "ram.", "chaw.", "dhou. q.", "dhou. h."],
                  long: ["mouharram", "safar", "rabia al awal", "rabia ath-thani", "joumada al oula", "joumada ath-thania", "rajab", "chaabane", "ramadan", "chawwal", "dhou al qi`da", "dhou al-hijja"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["mouh.", "saf.", "rab. aw.", "rab. th.", "joum. oul.", "joum. tha.", "raj.", "chaa.", "ram.", "chaw.", "dhou. q.", "dhou. h."],
                  long: ["mouharram", "safar", "rabia al awal", "rabia ath-thani", "joumada al oula", "joumada ath-thania", "rajab", "chaabane", "ramadan", "chawwal", "dhou al qi`da", "dhou al-hijja"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              japanese: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
                  long: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"],
                  long: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                  long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["AP"],
                  short: ["AP"],
                  long: ["AP"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              roc: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."],
                  long: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "J", "V", "S"],
                  short: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
                  long: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
                },
                eras: {
                  narrow: ["avant RdC", "RdC"],
                  short: ["avant RdC", "RdC"],
                  long: ["avant RdC", "RdC"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{number} {currency}",
                negativePattern: "{minusSign}{number} {currency}"
              },
              percent: {
                positivePattern: "{number} {percentSign}",
                negativePattern: "{minusSign}{number} {percentSign}"
              }
            },
            symbols: {
              latn: {
                decimal: ",",
                group: " ",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              ARS: "$AR",
              AUD: "$AU",
              BEF: "FB",
              BMD: "$BM",
              BND: "$BN",
              BRL: "R$",
              BSD: "$BS",
              BZD: "$BZ",
              CAD: "$CA",
              CLP: "$CL",
              COP: "$CO",
              CYP: "£CY",
              EUR: "€",
              FJD: "$FJ",
              FKP: "£FK",
              FRF: "F",
              GBP: "£GB",
              GIP: "£GI",
              IEP: "£IE",
              ILP: "£IL",
              ILS: "₪",
              INR: "₹",
              ITL: "₤IT",
              KRW: "₩",
              LBP: "£LB",
              MTP: "£MT",
              MXN: "$MX",
              NAD: "$NA",
              NZD: "$NZ",
              RHD: "$RH",
              SBD: "$SB",
              SGD: "$SG",
              SRD: "$SR",
              TTD: "$TT",
              USD: "$US",
              UYU: "$UY",
              VND: "₫",
              WST: "WS$",
              XAF: "FCFA",
              XOF: "CFA",
              XPF: "FCFP"
            }
          }
        })
      },
      5330: function() {
        IntlPolyfill.__addLocaleData({
          locale: "it",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !1,
            formats: {
              short: "{1}, {0}",
              medium: "{1}, {0}",
              full: "{1} {0}",
              long: "{1} {0}",
              availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "E d",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "y G",
                GyMMM: "MMM y G",
                GyMMMd: "d MMM y G",
                GyMMMEd: "E d MMM y G",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "d/M",
                MEd: "E d/M",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E d MMM",
                MMMMd: "d MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "E d/M/y",
                yMMM: "MMM y",
                yMMMd: "d MMM y",
                yMMMEd: "E d MMM y",
                yMMMM: "MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y"
              },
              dateFormats: {
                yMMMMEEEEd: "EEEE d MMMM y",
                yMMMMd: "d MMMM y",
                yMMMd: "dd MMM y",
                yMd: "dd/MM/yy"
              },
              timeFormats: {
                hmmsszzzz: "HH:mm:ss zzzz",
                hmsz: "HH:mm:ss z",
                hms: "HH:mm:ss",
                hm: "HH:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
                  short: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
                  long: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["EB"],
                  short: ["EB"],
                  long: ["EB"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                  long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              gregory: {
                months: {
                  narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
                  short: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
                  long: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["aC", "dC", "BCE", "CE"],
                  short: ["a.C.", "d.C.", "a.E.V.", "E.V."],
                  long: ["a.C.", "d.C.", "avanti Era Volgare", "Era Volgare"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
                  long: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["AM"],
                  short: ["AM"],
                  long: ["AM"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                  long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["Saka"],
                  short: ["Saka"],
                  long: ["Saka"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              japanese: {
                months: {
                  narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
                  short: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
                  long: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"],
                  long: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                  long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["AP"],
                  short: ["AP"],
                  long: ["AP"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              roc: {
                months: {
                  narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
                  short: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"],
                  long: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
                },
                days: {
                  narrow: ["D", "L", "M", "M", "G", "V", "S"],
                  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
                  long: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"]
                },
                eras: {
                  narrow: ["Prima di R.O.C.", "Minguo"],
                  short: ["Prima di R.O.C.", "Minguo"],
                  long: ["Prima di R.O.C.", "Minguo"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{number} {currency}",
                negativePattern: "{minusSign}{number} {currency}"
              },
              percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
              }
            },
            symbols: {
              latn: {
                decimal: ",",
                group: ".",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              AUD: "A$",
              CAD: "CA$",
              CNY: "CN¥",
              EUR: "€",
              GBP: "£",
              ILS: "₪",
              INR: "₹",
              NZD: "NZ$",
              THB: "฿",
              USD: "US$",
              VND: "₫",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF"
            }
          }
        })
      },
      7108: function() {
        IntlPolyfill.__addLocaleData({
          locale: "ja",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !1,
            hour12: !1,
            formats: {
              short: "{1} {0}",
              medium: "{1} {0}",
              full: "{1} {0}",
              long: "{1} {0}",
              availableFormats: {
                d: "d日",
                E: "ccc",
                Ed: "d日(E)",
                EEEEd: "d日EEEE",
                Ehm: "aK:mm (E)",
                EHm: "H:mm (E)",
                Ehms: "aK:mm:ss (E)",
                EHms: "H:mm:ss (E)",
                Gy: "Gy年",
                GyMMM: "Gy年M月",
                GyMMMd: "Gy年M月d日",
                GyMMMEd: "Gy年M月d日(E)",
                GyMMMEEEEd: "Gy年M月d日EEEE",
                h: "aK時",
                H: "H時",
                hm: "aK:mm",
                Hm: "H:mm",
                hms: "aK:mm:ss",
                Hms: "H:mm:ss",
                hmsv: "aK:mm:ss v",
                Hmsv: "H:mm:ss v",
                hmv: "aK:mm v",
                Hmv: "H:mm v",
                M: "M月",
                Md: "M/d",
                MEd: "M/d(E)",
                MEEEEd: "M/dEEEE",
                MMM: "M月",
                MMMd: "M月d日",
                MMMEd: "M月d日(E)",
                MMMEEEEd: "M月d日EEEE",
                MMMMd: "M月d日",
                ms: "mm:ss",
                y: "y年",
                yM: "y/M",
                yMd: "y/M/d",
                yMEd: "y/M/d(E)",
                yMEEEEd: "y/M/dEEEE",
                yMM: "y/MM",
                yMMM: "y年M月",
                yMMMd: "y年M月d日",
                yMMMEd: "y年M月d日(E)",
                yMMMEEEEd: "y年M月d日EEEE",
                yMMMM: "y年M月",
                yQQQ: "y/QQQ",
                yQQQQ: "yQQQQ"
              },
              dateFormats: {
                yMMMMEEEEd: "y年M月d日EEEE",
                yMMMMd: "y年M月d日",
                yMMMd: "y/MM/dd",
                yMd: "y/MM/dd"
              },
              timeFormats: {
                hmmsszzzz: "H時mm分ss秒 zzzz",
                hmsz: "H:mm:ss z",
                hms: "H:mm:ss",
                hm: "H:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["BE"],
                  short: ["BE"],
                  long: ["仏暦"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              chinese: {
                months: {
                  narrow: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
                  short: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                  long: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["トウト", "ババ", "ハトール", "キアック", "トーバ", "アムシール", "バラムハート", "バラモウダ", "バシャンス", "パオーナ", "エペープ", "メスラ", "ナシエ"],
                  long: ["トウト", "ババ", "ハトール", "キアック", "トーバ", "アムシール", "バラムハート", "バラモウダ", "バシャンス", "パオーナ", "エペープ", "メスラ", "ナシエ"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              dangi: {
                months: {
                  narrow: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
                  short: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                  long: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["メスケレム", "テケムト", "ヘダル", "ターサス", "テル", "イェカティト", "メガビト", "ミアジア", "ゲンボト", "セネ", "ハムレ", "ネハッセ", "パグメン"],
                  long: ["メスケレム", "テケムト", "ヘダル", "ターサス", "テル", "イェカティト", "メガビト", "ミアジア", "ゲンボト", "セネ", "ハムレ", "ネハッセ", "パグメン"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["メスケレム", "テケムト", "ヘダル", "ターサス", "テル", "イェカティト", "メガビト", "ミアジア", "ゲンボト", "セネ", "ハムレ", "ネハッセ", "パグメン"],
                  long: ["メスケレム", "テケムト", "ヘダル", "ターサス", "テル", "イェカティト", "メガビト", "ミアジア", "ゲンボト", "セネ", "ハムレ", "ネハッセ", "パグメン"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              gregory: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["BC", "AD", "BCE", "CE"],
                  short: ["紀元前", "西暦", "西暦紀元前", "西暦紀元"],
                  long: ["紀元前", "西暦", "西暦紀元前", "西暦紀元"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["ティスレ", "へシボン", "キスレブ", "テベット", "シバット", "アダル I", "アダル", "ニサン", "イヤル", "シバン", "タムズ", "アヴ", "エルル", "アダル II"],
                  long: ["ティスレ", "へシボン", "キスレブ", "テベット", "シバット", "アダル I", "アダル", "ニサン", "イヤル", "シバン", "タムズ", "アヴ", "エルル", "アダル II"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["AM"],
                  short: ["AM"],
                  long: ["AM"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["カイトラ", "ヴァイサカ", "ジャイスタ", "アーサダ", "スラバナ", "バードラ", "アスビナ", "カルディカ", "アヴラハヤナ", "パウサ", "マーガ", "パルグナ"],
                  long: ["カイトラ", "ヴァイサカ", "ジャイスタ", "アーサダ", "スラバナ", "バードラ", "アスビナ", "カルディカ", "アヴラハヤナ", "パウサ", "マーガ", "パルグナ"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["サカ"],
                  short: ["サカ"],
                  long: ["サカ"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["ムハッラム", "サフアル", "ラビー・ウル・アウワル", "ラビー・ウッ・サーニー", "ジュマーダル・アウワル", "ジュマーダッサーニー", "ラジャブ", "シャアバーン", "ラマダーン", "シャウワール", "ズル・カイダ", "ズル・ヒッジャ"],
                  long: ["ムハッラム", "サフアル", "ラビー・ウル・アウワル", "ラビー・ウッ・サーニー", "ジュマーダル・アウワル", "ジュマーダッサーニー", "ラジャブ", "シャアバーン", "ラマダーン", "シャウワール", "ズル・カイダ", "ズル・ヒッジャ"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["ムハッラム", "サフアル", "ラビー・ウル・アウワル", "ラビー・ウッ・サーニー", "ジュマーダル・アウワル", "ジュマーダッサーニー", "ラジャブ", "シャアバーン", "ラマダーン", "シャウワール", "ズル・カイダ", "ズル・ヒッジャ"],
                  long: ["ムハッラム", "サフアル", "ラビー・ウル・アウワル", "ラビー・ウッ・サーニー", "ジュマーダル・アウワル", "ジュマーダッサーニー", "ラジャブ", "シャアバーン", "ラマダーン", "シャウワール", "ズル・カイダ", "ズル・ヒッジャ"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              japanese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["大化", "白雉", "白鳯", "朱鳥", "大宝", "慶雲", "和銅", "霊亀", "養老", "神亀", "天平", "天平感宝", "天平勝宝", "天平宝字", "天平神護", "神護景雲", "宝亀", "天応", "延暦", "大同", "弘仁", "天長", "承和", "嘉祥", "仁寿", "斉衡", "天安", "貞観", "元慶", "仁和", "寛平", "昌泰", "延喜", "延長", "承平", "天慶", "天暦", "天徳", "応和", "康保", "安和", "天禄", "天延", "貞元", "天元", "永観", "寛和", "永延", "永祚", "正暦", "長徳", "長保", "寛弘", "長和", "寛仁", "治安", "万寿", "長元", "長暦", "長久", "寛徳", "永承", "天喜", "康平", "治暦", "延久", "承保", "承暦", "永保", "応徳", "寛治", "嘉保", "永長", "承徳", "康和", "長治", "嘉承", "天仁", "天永", "永久", "元永", "保安", "天治", "大治", "天承", "長承", "保延", "永治", "康治", "天養", "久安", "仁平", "久寿", "保元", "平治", "永暦", "応保", "長寛", "永万", "仁安", "嘉応", "承安", "安元", "治承", "養和", "寿永", "元暦", "文治", "建久", "正治", "建仁", "元久", "建永", "承元", "建暦", "建保", "承久", "貞応", "元仁", "嘉禄", "安貞", "寛喜", "貞永", "天福", "文暦", "嘉禎", "暦仁", "延応", "仁治", "寛元", "宝治", "建長", "康元", "正嘉", "正元", "文応", "弘長", "文永", "建治", "弘安", "正応", "永仁", "正安", "乾元", "嘉元", "徳治", "延慶", "応長", "正和", "文保", "元応", "元亨", "正中", "嘉暦", "元徳", "元弘", "建武", "延元", "興国", "正平", "建徳", "文中", "天授", "康暦", "弘和", "元中", "至徳", "嘉慶", "康応", "明徳", "応永", "正長", "永享", "嘉吉", "文安", "宝徳", "享徳", "康正", "長禄", "寛正", "文正", "応仁", "文明", "長享", "延徳", "明応", "文亀", "永正", "大永", "享禄", "天文", "弘治", "永禄", "元亀", "天正", "文禄", "慶長", "元和", "寛永", "正保", "慶安", "承応", "明暦", "万治", "寛文", "延宝", "天和", "貞享", "元禄", "宝永", "正徳", "享保", "元文", "寛保", "延享", "寛延", "宝暦", "明和", "安永", "天明", "寛政", "享和", "文化", "文政", "天保", "弘化", "嘉永", "安政", "万延", "文久", "元治", "慶応", "M", "T", "S", "H"],
                  short: ["大化", "白雉", "白鳯", "朱鳥", "大宝", "慶雲", "和銅", "霊亀", "養老", "神亀", "天平", "天平感宝", "天平勝宝", "天平宝字", "天平神護", "神護景雲", "宝亀", "天応", "延暦", "大同", "弘仁", "天長", "承和", "嘉祥", "仁寿", "斉衡", "天安", "貞観", "元慶", "仁和", "寛平", "昌泰", "延喜", "延長", "承平", "天慶", "天暦", "天徳", "応和", "康保", "安和", "天禄", "天延", "貞元", "天元", "永観", "寛和", "永延", "永祚", "正暦", "長徳", "長保", "寛弘", "長和", "寛仁", "治安", "万寿", "長元", "長暦", "長久", "寛徳", "永承", "天喜", "康平", "治暦", "延久", "承保", "承暦", "永保", "応徳", "寛治", "嘉保", "永長", "承徳", "康和", "長治", "嘉承", "天仁", "天永", "永久", "元永", "保安", "天治", "大治", "天承", "長承", "保延", "永治", "康治", "天養", "久安", "仁平", "久寿", "保元", "平治", "永暦", "応保", "長寛", "永万", "仁安", "嘉応", "承安", "安元", "治承", "養和", "寿永", "元暦", "文治", "建久", "正治", "建仁", "元久", "建永", "承元", "建暦", "建保", "承久", "貞応", "元仁", "嘉禄", "安貞", "寛喜", "貞永", "天福", "文暦", "嘉禎", "暦仁", "延応", "仁治", "寛元", "宝治", "建長", "康元", "正嘉", "正元", "文応", "弘長", "文永", "建治", "弘安", "正応", "永仁", "正安", "乾元", "嘉元", "徳治", "延慶", "応長", "正和", "文保", "元応", "元亨", "正中", "嘉暦", "元徳", "元弘", "建武", "延元", "興国", "正平", "建徳", "文中", "天授", "康暦", "弘和", "元中", "至徳", "嘉慶", "康応", "明徳", "応永", "正長", "永享", "嘉吉", "文安", "宝徳", "享徳", "康正", "長禄", "寛正", "文正", "応仁", "文明", "長享", "延徳", "明応", "文亀", "永正", "大永", "享禄", "天文", "弘治", "永禄", "元亀", "天正", "文禄", "慶長", "元和", "寛永", "正保", "慶安", "承応", "明暦", "万治", "寛文", "延宝", "天和", "貞享", "元禄", "宝永", "正徳", "享保", "元文", "寛保", "延享", "寛延", "宝暦", "明和", "安永", "天明", "寛政", "享和", "文化", "文政", "天保", "弘化", "嘉永", "安政", "万延", "文久", "元治", "慶応", "明治", "大正", "昭和", "平成"],
                  long: ["大化", "白雉", "白鳯", "朱鳥", "大宝", "慶雲", "和銅", "霊亀", "養老", "神亀", "天平", "天平感宝", "天平勝宝", "天平宝字", "天平神護", "神護景雲", "宝亀", "天応", "延暦", "大同", "弘仁", "天長", "承和", "嘉祥", "仁寿", "斉衡", "天安", "貞観", "元慶", "仁和", "寛平", "昌泰", "延喜", "延長", "承平", "天慶", "天暦", "天徳", "応和", "康保", "安和", "天禄", "天延", "貞元", "天元", "永観", "寛和", "永延", "永祚", "正暦", "長徳", "長保", "寛弘", "長和", "寛仁", "治安", "万寿", "長元", "長暦", "長久", "寛徳", "永承", "天喜", "康平", "治暦", "延久", "承保", "承暦", "永保", "応徳", "寛治", "嘉保", "永長", "承徳", "康和", "長治", "嘉承", "天仁", "天永", "永久", "元永", "保安", "天治", "大治", "天承", "長承", "保延", "永治", "康治", "天養", "久安", "仁平", "久寿", "保元", "平治", "永暦", "応保", "長寛", "永万", "仁安", "嘉応", "承安", "安元", "治承", "養和", "寿永", "元暦", "文治", "建久", "正治", "建仁", "元久", "建永", "承元", "建暦", "建保", "承久", "貞応", "元仁", "嘉禄", "安貞", "寛喜", "貞永", "天福", "文暦", "嘉禎", "暦仁", "延応", "仁治", "寛元", "宝治", "建長", "康元", "正嘉", "正元", "文応", "弘長", "文永", "建治", "弘安", "正応", "永仁", "正安", "乾元", "嘉元", "徳治", "延慶", "応長", "正和", "文保", "元応", "元亨", "正中", "嘉暦", "元徳", "元弘", "建武", "延元", "興国", "正平", "建徳", "文中", "天授", "康暦", "弘和", "元中", "至徳", "嘉慶", "康応", "明徳", "応永", "正長", "永享", "嘉吉", "文安", "宝徳", "享徳", "康正", "長禄", "寛正", "文正", "応仁", "文明", "長享", "延徳", "明応", "文亀", "永正", "大永", "享禄", "天文", "弘治", "永禄", "元亀", "天正", "文禄", "慶長", "元和", "寛永", "正保", "慶安", "承応", "明暦", "万治", "寛文", "延宝", "天和", "貞享", "元禄", "宝永", "正徳", "享保", "元文", "寛保", "延享", "寛延", "宝暦", "明和", "安永", "天明", "寛政", "享和", "文化", "文政", "天保", "弘化", "嘉永", "安政", "万延", "文久", "元治", "慶応", "明治", "大正", "昭和", "平成"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["ファルヴァルディーン", "オルディーベヘシュト", "ホルダード", "ティール", "モルダード", "シャハリーヴァル", "メフル", "アーバーン", "アーザル", "デイ", "バフマン", "エスファンド"],
                  long: ["ファルヴァルディーン", "オルディーベヘシュト", "ホルダード", "ティール", "モルダード", "シャハリーヴァル", "メフル", "アーバーン", "アーザル", "デイ", "バフマン", "エスファンド"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["AP"],
                  short: ["AP"],
                  long: ["AP"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              },
              roc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                },
                days: {
                  narrow: ["日", "月", "火", "水", "木", "金", "土"],
                  short: ["日", "月", "火", "水", "木", "金", "土"],
                  long: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
                },
                eras: {
                  narrow: ["民国前", "民国"],
                  short: ["民国前", "民国"],
                  long: ["民国前", "民国"]
                },
                dayPeriods: {
                  am: "午前",
                  pm: "午後"
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
              },
              percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
              }
            },
            symbols: {
              latn: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              AUD: "AU$",
              BRL: "R$",
              CAD: "CA$",
              CNY: "元",
              EUR: "€",
              GBP: "£",
              HKD: "HK$",
              ILS: "₪",
              INR: "₹",
              JPY: "￥",
              KRW: "₩",
              MXN: "MX$",
              NZD: "NZ$",
              THB: "฿",
              TWD: "NT$",
              USD: "$",
              VND: "₫",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF"
            }
          }
        })
      },
      7646: function() {
        IntlPolyfill.__addLocaleData({
          locale: "ko",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !0,
            formats: {
              short: "{1} {0}",
              medium: "{1} {0}",
              full: "{1} {0}",
              long: "{1} {0}",
              availableFormats: {
                d: "d일",
                E: "ccc",
                Ed: "d일 (E)",
                EEEEd: "d일 EEEE",
                Ehm: "(E) a h:mm",
                EHm: "(E) HH:mm",
                Ehms: "(E) a h:mm:ss",
                EHms: "(E) HH:mm:ss",
                Gy: "G y년",
                GyMMM: "G y년 MMM",
                GyMMMd: "G y년 MMM d일",
                GyMMMEd: "G y년 MMM d일 (E)",
                GyMMMEEEEd: "G y년 MMM d일 EEEE",
                h: "a h시",
                H: "H시",
                HHmmss: "HH:mm:ss",
                hm: "a h:mm",
                Hm: "HH:mm",
                hms: "a h:mm:ss",
                Hms: "H시 m분 s초",
                hmsv: "a h:mm:ss v",
                Hmsv: "H시 m분 s초 v",
                hmv: "a h:mm v",
                Hmv: "HH:mm v",
                M: "M월",
                Md: "M. d.",
                MEd: "M. d. (E)",
                MEEEEd: "M. d. EEEE",
                MMM: "LLL",
                MMMd: "MMM d일",
                MMMEd: "MMM d일 (E)",
                MMMEEEEd: "MMM d일 EEEE",
                MMMMd: "MMMM d일",
                mmss: "mm:ss",
                ms: "mm:ss",
                y: "y년",
                yM: "y. M.",
                yMd: "y. M. d.",
                yMEd: "y. M. d. (E)",
                yMEEEEd: "y. M. d. EEEE",
                yMM: "y. M.",
                yMMM: "y년 MMM",
                yMMMd: "y년 MMM d일",
                yMMMEd: "y년 MMM d일 (E)",
                yMMMEEEEd: "y년 MMM d일 EEEE",
                yMMMM: "y년 MMMM",
                yQQQ: "y년 QQQ",
                yQQQQ: "y년 QQQQ"
              },
              dateFormats: {
                yMMMMEEEEd: "y년 M월 d일 EEEE",
                yMMMMd: "y년 M월 d일",
                yMMMd: "y. M. d.",
                yMd: "yy. M. d."
              },
              timeFormats: {
                hmmsszzzz: "a h시 m분 s초 zzzz",
                hmsz: "a h시 m분 s초 z",
                hms: "a h:mm:ss",
                hm: "a h:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                  short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                  long: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["불기"],
                  short: ["불기"],
                  long: ["불기"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                  long: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["투트", "바바흐", "하투르", "키야흐크", "투바흐", "암쉬르", "바라마트", "바라문다흐", "바샨스", "바우나흐", "아비브", "미스라", "나시"],
                  long: ["투트", "바바흐", "하투르", "키야흐크", "투바흐", "암쉬르", "바라마트", "바라문다흐", "바샨스", "바우나흐", "아비브", "미스라", "나시"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                  long: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["매스캐램", "테켐트", "헤다르", "타흐사스", "테르", "얘카티트", "매가비트", "미야지야", "겐보트", "새네", "함레", "내하세", "파구맨"],
                  long: ["매스캐램", "테켐트", "헤다르", "타흐사스", "테르", "얘카티트", "매가비트", "미야지야", "겐보트", "새네", "함레", "내하세", "파구맨"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["매스캐램", "테켐트", "헤다르", "타흐사스", "테르", "얘카티트", "매가비트", "미야지야", "겐보트", "새네", "함레", "내하세", "파구맨"],
                  long: ["매스캐램", "테켐트", "헤다르", "타흐사스", "테르", "얘카티트", "매가비트", "미야지야", "겐보트", "새네", "함레", "내하세", "파구맨"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              gregory: {
                months: {
                  narrow: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                  short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                  long: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["BC", "AD", "BCE", "CE"],
                  short: ["BC", "AD", "BCE", "CE"],
                  long: ["기원전", "서기", "BCE", "CE"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["디스리월", "말케스월", "기슬르월", "데벳월", "스밧월", "아달월 1", "아달월", "닛산월", "이야르월", "시완월", "담무르월", "압월", "엘룰월", "아달월 2"],
                  long: ["디스리월", "말케스월", "기슬르월", "데벳월", "스밧월", "아달월 1", "아달월", "닛산월", "이야르월", "시완월", "담무르월", "압월", "엘룰월", "아달월 2"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["AM"],
                  short: ["AM"],
                  long: ["AM"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                  long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["Saka"],
                  short: ["Saka"],
                  long: ["Saka"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["무하람", "사파르", "라비 알 아왈", "라비 알 쎄니", "주마다 알 아왈", "주마다 알 쎄니", "라잡", "쉐아반", "라마단", "쉐왈", "듀 알 까다", "듀 알 히자"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["무하람", "사파르", "라비 알 아왈", "라비 알 쎄니", "주마다 알 아왈", "주마다 알 쎄니", "라잡", "쉐아반", "라마단", "쉐왈", "듀 알 까다", "듀 알 히자"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              japanese: {
                months: {
                  narrow: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                  short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                  long: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["다이카 (645 ~ 650)", "하쿠치 (650 ~ 671)", "하쿠호 (672 ~ 686)", "슈초 (686 ~ 701)", "다이호 (701 ~ 704)", "게이운 (704 ~ 708)", "와도 (708 ~ 715)", "레이키 (715 ~ 717)", "요로 (717 ~ 724)", "진키 (724 ~ 729)", "덴표 (729 ~ 749)", "덴표칸포 (749 ~ 749)", "덴표쇼호 (749 ~ 757)", "덴표호지 (757 ~ 765)", "덴표진고 (765 ~ 767)", "진고케이운 (767 ~ 770)", "호키 (770 ~ 780)", "덴오 (781 ~ 782)", "엔랴쿠 (782 ~ 806)", "다이도 (806 ~ 810)", "고닌 (810 ~ 824)", "덴초 (824 ~ 834)", "조와 (834 ~ 848)", "가쇼 (848 ~ 851)", "닌주 (851 ~ 854)", "사이코 (854 ~ 857)", "덴난 (857 ~ 859)", "조간 (859 ~ 877)", "간교 (877 ~ 885)", "닌나 (885 ~ 889)", "간표 (889 ~ 898)", "쇼타이 (898 ~ 901)", "엔기 (901 ~ 923)", "엔초 (923 ~ 931)", "조헤이 (931 ~ 938)", "덴교 (938 ~ 947)", "덴랴쿠 (947 ~ 957)", "덴토쿠 (957 ~ 961)", "오와 (961 ~ 964)", "고호 (964 ~ 968)", "안나 (968 ~ 970)", "덴로쿠 (970 ~ 973)", "덴엔 (973 ~ 976)", "조겐 (976 ~ 978)", "덴겐 (978 ~ 983)", "에이간 (983 ~ 985)", "간나 (985 ~ 987)", "에이엔 (987 ~ 989)", "에이소 (989 ~ 990)", "쇼랴쿠 (990 ~ 995)", "조토쿠 (995 ~ 999)", "조호 (999 ~ 1004)", "간코 (1004 ~ 1012)", "조와 (1012 ~ 1017)", "간닌 (1017 ~ 1021)", "지안 (1021 ~ 1024)", "만주 (1024 ~ 1028)", "조겐 (1028 ~ 1037)", "조랴쿠 (1037 ~ 1040)", "조큐 (1040 ~ 1044)", "간토쿠 (1044 ~ 1046)", "에이쇼 (1046 ~ 1053)", "덴기 (1053 ~ 1058)", "고헤이 (1058 ~ 1065)", "지랴쿠 (1065 ~ 1069)", "엔큐 (1069 ~ 1074)", "조호 (1074 ~ 1077)", "쇼랴쿠 (1077 ~ 1081)", "에이호 (1081 ~ 1084)", "오토쿠 (1084 ~ 1087)", "간지 (1087 ~ 1094)", "가호 (1094 ~ 1096)", "에이초 (1096 ~ 1097)", "조토쿠 (1097 ~ 1099)", "고와 (1099 ~ 1104)", "조지 (1104 ~ 1106)", "가쇼 (1106 ~ 1108)", "덴닌 (1108 ~ 1110)", "덴에이 (1110 ~ 1113)", "에이큐 (1113 ~ 1118)", "겐에이 (1118 ~ 1120)", "호안 (1120 ~ 1124)", "덴지 (1124 ~ 1126)", "다이지 (1126 ~ 1131)", "덴쇼 (1131 ~ 1132)", "조쇼 (1132 ~ 1135)", "호엔 (1135 ~ 1141)", "에이지 (1141 ~ 1142)", "고지 (1142 ~ 1144)", "덴요 (1144 ~ 1145)", "규안 (1145 ~ 1151)", "닌페이 (1151 ~ 1154)", "규주 (1154 ~ 1156)", "호겐 (1156 ~ 1159)", "헤이지 (1159 ~ 1160)", "에이랴쿠 (1160 ~ 1161)", "오호 (1161 ~ 1163)", "조칸 (1163 ~ 1165)", "에이만 (1165 ~ 1166)", "닌난 (1166 ~ 1169)", "가오 (1169 ~ 1171)", "조안 (1171 ~ 1175)", "안겐 (1175 ~ 1177)", "지쇼 (1177 ~ 1181)", "요와 (1181 ~ 1182)", "주에이 (1182 ~ 1184)", "겐랴쿠 (1184 ~ 1185)", "분지 (1185 ~ 1190)", "겐큐 (1190 ~ 1199)", "쇼지 (1199 ~ 1201)", "겐닌 (1201 ~ 1204)", "겐큐 (1204 ~ 1206)", "겐에이 (1206 ~ 1207)", "조겐 (1207 ~ 1211)", "겐랴쿠 (1211 ~ 1213)", "겐포 (1213 ~ 1219)", "조큐 (1219 ~ 1222)", "조오 (1222 ~ 1224)", "겐닌 (1224 ~ 1225)", "가로쿠 (1225 ~ 1227)", "안테이 (1227 ~ 1229)", "간키 (1229 ~ 1232)", "조에이 (1232 ~ 1233)", "덴푸쿠 (1233 ~ 1234)", "분랴쿠 (1234 ~ 1235)", "가테이 (1235 ~ 1238)", "랴쿠닌 (1238 ~ 1239)", "엔오 (1239 ~ 1240)", "닌지 (1240 ~ 1243)", "간겐 (1243 ~ 1247)", "호지 (1247 ~ 1249)", "겐초 (1249 ~ 1256)", "고겐 (1256 ~ 1257)", "쇼카 (1257 ~ 1259)", "쇼겐 (1259 ~ 1260)", "분오 (1260 ~ 1261)", "고초 (1261 ~ 1264)", "분에이 (1264 ~ 1275)", "겐지 (1275 ~ 1278)", "고안 (1278 ~ 1288)", "쇼오 (1288 ~ 1293)", "에이닌 (1293 ~ 1299)", "쇼안 (1299 ~ 1302)", "겐겐 (1302 ~ 1303)", "가겐 (1303 ~ 1306)", "도쿠지 (1306 ~ 1308)", "엔쿄 (1308 ~ 1311)", "오초 (1311 ~ 1312)", "쇼와 (1312 ~ 1317)", "분포 (1317 ~ 1319)", "겐오 (1319 ~ 1321)", "겐코 (1321 ~ 1324)", "쇼추 (1324 ~ 1326)", "가랴쿠 (1326 ~ 1329)", "겐토쿠 (1329 ~ 1331)", "겐코 (1331 ~ 1334)", "겐무 (1334 ~ 1336)", "엔겐 (1336 ~ 1340)", "고코쿠 (1340 ~ 1346)", "쇼헤이 (1346 ~ 1370)", "겐토쿠 (1370 ~ 1372)", "분추 (1372 ~ 1375)", "덴주 (1375 ~ 1379)", "고랴쿠 (1379 ~ 1381)", "고와 (1381 ~ 1384)", "겐추 (1384 ~ 1392)", "메이토쿠 (1384 ~ 1387)", "가쿄 (1387 ~ 1389)", "고오 (1389 ~ 1390)", "메이토쿠 (1390 ~ 1394)", "오에이 (1394 ~ 1428)", "쇼초 (1428 ~ 1429)", "에이쿄 (1429 ~ 1441)", "가키쓰 (1441 ~ 1444)", "분안 (1444 ~ 1449)", "호토쿠 (1449 ~ 1452)", "교토쿠 (1452 ~ 1455)", "고쇼 (1455 ~ 1457)", "조로쿠 (1457 ~ 1460)", "간쇼 (1460 ~ 1466)", "분쇼 (1466 ~ 1467)", "오닌 (1467 ~ 1469)", "분메이 (1469 ~ 1487)", "조쿄 (1487 ~ 1489)<", "엔토쿠 (1489 ~ 1492)", "메이오 (1492 ~ 1501)", "분키 (1501 ~ 1504)", "에이쇼 (1504 ~ 1521)", "다이에이 (1521 ~ 1528)", "교로쿠 (1528 ~ 1532)", "덴분 (1532 ~ 1555)", "고지 (1555 ~ 1558)", "에이로쿠 (1558 ~ 1570)", "겐키 (1570 ~ 1573)", "덴쇼 (1573 ~ 1592)", "분로쿠 (1592 ~ 1596)", "게이초 (1596 ~ 1615)", "겐나 (1615 ~ 1624)", "간에이 (1624 ~ 1644)", "쇼호 (1644 ~ 1648)", "게이안 (1648 ~ 1652)", "조오 (1652 ~ 1655)", "메이레키 (1655 ~ 1658)", "만지 (1658 ~ 1661)", "간분 (1661 ~ 1673)", "엔포 (1673 ~ 1681)", "덴나 (1681 ~ 1684)", "조쿄 (1684 ~ 1688)", "겐로쿠 (1688 ~ 1704)", "호에이 (1704 ~ 1711)", "쇼토쿠 (1711 ~ 1716)", "교호 (1716 ~ 1736)", "겐분 (1736 ~ 1741)", "간포 (1741 ~ 1744)", "엔쿄 (1744 ~ 1748)", "간엔 (1748 ~ 1751)", "호레키 (1751 ~ 1764)", "메이와 (1764 ~ 1772)", "안에이 (1772 ~ 1781)", "덴메이 (1781 ~ 1789)", "간세이 (1789 ~ 1801)", "교와 (1801 ~ 1804)", "분카 (1804 ~ 1818)", "분세이 (1818 ~ 1830)", "덴포 (1830 ~ 1844)", "고카 (1844 ~ 1848)", "가에이 (1848 ~ 1854)", "안세이 (1854 ~ 1860)", "만엔 (1860 ~ 1861)", "분큐 (1861 ~ 1864)", "겐지 (1864 ~ 1865)", "게이오 (1865 ~ 1868)", "메이지", "다이쇼", "쇼와", "헤이세이"],
                  long: ["다이카 (645 ~ 650)", "하쿠치 (650 ~ 671)", "하쿠호 (672 ~ 686)", "슈초 (686 ~ 701)", "다이호 (701 ~ 704)", "게이운 (704 ~ 708)", "와도 (708 ~ 715)", "레이키 (715 ~ 717)", "요로 (717 ~ 724)", "진키 (724 ~ 729)", "덴표 (729 ~ 749)", "덴표칸포 (749 ~ 749)", "덴표쇼호 (749 ~ 757)", "덴표호지 (757 ~ 765)", "덴표진고 (765 ~ 767)", "진고케이운 (767 ~ 770)", "호키 (770 ~ 780)", "덴오 (781 ~ 782)", "엔랴쿠 (782 ~ 806)", "다이도 (806 ~ 810)", "고닌 (810 ~ 824)", "덴초 (824 ~ 834)", "조와 (834 ~ 848)", "가쇼 (848 ~ 851)", "닌주 (851 ~ 854)", "사이코 (854 ~ 857)", "덴난 (857 ~ 859)", "조간 (859 ~ 877)", "간교 (877 ~ 885)", "닌나 (885 ~ 889)", "간표 (889 ~ 898)", "쇼타이 (898 ~ 901)", "엔기 (901 ~ 923)", "엔초 (923 ~ 931)", "조헤이 (931 ~ 938)", "덴교 (938 ~ 947)", "덴랴쿠 (947 ~ 957)", "덴토쿠 (957 ~ 961)", "오와 (961 ~ 964)", "고호 (964 ~ 968)", "안나 (968 ~ 970)", "덴로쿠 (970 ~ 973)", "덴엔 (973 ~ 976)", "조겐 (976 ~ 978)", "덴겐 (978 ~ 983)", "에이간 (983 ~ 985)", "간나 (985 ~ 987)", "에이엔 (987 ~ 989)", "에이소 (989 ~ 990)", "쇼랴쿠 (990 ~ 995)", "조토쿠 (995 ~ 999)", "조호 (999 ~ 1004)", "간코 (1004 ~ 1012)", "조와 (1012 ~ 1017)", "간닌 (1017 ~ 1021)", "지안 (1021 ~ 1024)", "만주 (1024 ~ 1028)", "조겐 (1028 ~ 1037)", "조랴쿠 (1037 ~ 1040)", "조큐 (1040 ~ 1044)", "간토쿠 (1044 ~ 1046)", "에이쇼 (1046 ~ 1053)", "덴기 (1053 ~ 1058)", "고헤이 (1058 ~ 1065)", "지랴쿠 (1065 ~ 1069)", "엔큐 (1069 ~ 1074)", "조호 (1074 ~ 1077)", "쇼랴쿠 (1077 ~ 1081)", "에이호 (1081 ~ 1084)", "오토쿠 (1084 ~ 1087)", "간지 (1087 ~ 1094)", "가호 (1094 ~ 1096)", "에이초 (1096 ~ 1097)", "조토쿠 (1097 ~ 1099)", "고와 (1099 ~ 1104)", "조지 (1104 ~ 1106)", "가쇼 (1106 ~ 1108)", "덴닌 (1108 ~ 1110)", "덴에이 (1110 ~ 1113)", "에이큐 (1113 ~ 1118)", "겐에이 (1118 ~ 1120)", "호안 (1120 ~ 1124)", "덴지 (1124 ~ 1126)", "다이지 (1126 ~ 1131)", "덴쇼 (1131 ~ 1132)", "조쇼 (1132 ~ 1135)", "호엔 (1135 ~ 1141)", "에이지 (1141 ~ 1142)", "고지 (1142 ~ 1144)", "덴요 (1144 ~ 1145)", "규안 (1145 ~ 1151)", "닌페이 (1151 ~ 1154)", "규주 (1154 ~ 1156)", "호겐 (1156 ~ 1159)", "헤이지 (1159 ~ 1160)", "에이랴쿠 (1160 ~ 1161)", "오호 (1161 ~ 1163)", "조칸 (1163 ~ 1165)", "에이만 (1165 ~ 1166)", "닌난 (1166 ~ 1169)", "가오 (1169 ~ 1171)", "조안 (1171 ~ 1175)", "안겐 (1175 ~ 1177)", "지쇼 (1177 ~ 1181)", "요와 (1181 ~ 1182)", "주에이 (1182 ~ 1184)", "겐랴쿠 (1184 ~ 1185)", "분지 (1185 ~ 1190)", "겐큐 (1190 ~ 1199)", "쇼지 (1199 ~ 1201)", "겐닌 (1201 ~ 1204)", "겐큐 (1204 ~ 1206)", "겐에이 (1206 ~ 1207)", "조겐 (1207 ~ 1211)", "겐랴쿠 (1211 ~ 1213)", "겐포 (1213 ~ 1219)", "조큐 (1219 ~ 1222)", "조오 (1222 ~ 1224)", "겐닌 (1224 ~ 1225)", "가로쿠 (1225 ~ 1227)", "안테이 (1227 ~ 1229)", "간키 (1229 ~ 1232)", "조에이 (1232 ~ 1233)", "덴푸쿠 (1233 ~ 1234)", "분랴쿠 (1234 ~ 1235)", "가테이 (1235 ~ 1238)", "랴쿠닌 (1238 ~ 1239)", "엔오 (1239 ~ 1240)", "닌지 (1240 ~ 1243)", "간겐 (1243 ~ 1247)", "호지 (1247 ~ 1249)", "겐초 (1249 ~ 1256)", "고겐 (1256 ~ 1257)", "쇼카 (1257 ~ 1259)", "쇼겐 (1259 ~ 1260)", "분오 (1260 ~ 1261)", "고초 (1261 ~ 1264)", "분에이 (1264 ~ 1275)", "겐지 (1275 ~ 1278)", "고안 (1278 ~ 1288)", "쇼오 (1288 ~ 1293)", "에이닌 (1293 ~ 1299)", "쇼안 (1299 ~ 1302)", "겐겐 (1302 ~ 1303)", "가겐 (1303 ~ 1306)", "도쿠지 (1306 ~ 1308)", "엔쿄 (1308 ~ 1311)", "오초 (1311 ~ 1312)", "쇼와 (1312 ~ 1317)", "분포 (1317 ~ 1319)", "겐오 (1319 ~ 1321)", "겐코 (1321 ~ 1324)", "쇼추 (1324 ~ 1326)", "가랴쿠 (1326 ~ 1329)", "겐토쿠 (1329 ~ 1331)", "겐코 (1331 ~ 1334)", "겐무 (1334 ~ 1336)", "엔겐 (1336 ~ 1340)", "고코쿠 (1340 ~ 1346)", "쇼헤이 (1346 ~ 1370)", "겐토쿠 (1370 ~ 1372)", "분추 (1372 ~ 1375)", "덴주 (1375 ~ 1379)", "고랴쿠 (1379 ~ 1381)", "고와 (1381 ~ 1384)", "겐추 (1384 ~ 1392)", "메이토쿠 (1384 ~ 1387)", "가쿄 (1387 ~ 1389)", "고오 (1389 ~ 1390)", "메이토쿠 (1390 ~ 1394)", "오에이 (1394 ~ 1428)", "쇼초 (1428 ~ 1429)", "에이쿄 (1429 ~ 1441)", "가키쓰 (1441 ~ 1444)", "분안 (1444 ~ 1449)", "호토쿠 (1449 ~ 1452)", "교토쿠 (1452 ~ 1455)", "고쇼 (1455 ~ 1457)", "조로쿠 (1457 ~ 1460)", "간쇼 (1460 ~ 1466)", "분쇼 (1466 ~ 1467)", "오닌 (1467 ~ 1469)", "분메이 (1469 ~ 1487)", "조쿄 (1487 ~ 1489)<", "엔토쿠 (1489 ~ 1492)", "메이오 (1492 ~ 1501)", "분키 (1501 ~ 1504)", "에이쇼 (1504 ~ 1521)", "다이에이 (1521 ~ 1528)", "교로쿠 (1528 ~ 1532)", "덴분 (1532 ~ 1555)", "고지 (1555 ~ 1558)", "에이로쿠 (1558 ~ 1570)", "겐키 (1570 ~ 1573)", "덴쇼 (1573 ~ 1592)", "분로쿠 (1592 ~ 1596)", "게이초 (1596 ~ 1615)", "겐나 (1615 ~ 1624)", "간에이 (1624 ~ 1644)", "쇼호 (1644 ~ 1648)", "게이안 (1648 ~ 1652)", "조오 (1652 ~ 1655)", "메이레키 (1655 ~ 1658)", "만지 (1658 ~ 1661)", "간분 (1661 ~ 1673)", "엔포 (1673 ~ 1681)", "덴나 (1681 ~ 1684)", "조쿄 (1684 ~ 1688)", "겐로쿠 (1688 ~ 1704)", "호에이 (1704 ~ 1711)", "쇼토쿠 (1711 ~ 1716)", "교호 (1716 ~ 1736)", "겐분 (1736 ~ 1741)", "간포 (1741 ~ 1744)", "엔쿄 (1744 ~ 1748)", "간엔 (1748 ~ 1751)", "호레키 (1751 ~ 1764)", "메이와 (1764 ~ 1772)", "안에이 (1772 ~ 1781)", "덴메이 (1781 ~ 1789)", "간세이 (1789 ~ 1801)", "교와 (1801 ~ 1804)", "분카 (1804 ~ 1818)", "분세이 (1818 ~ 1830)", "덴포 (1830 ~ 1844)", "고카 (1844 ~ 1848)", "가에이 (1848 ~ 1854)", "안세이 (1854 ~ 1860)", "만엔 (1860 ~ 1861)", "분큐 (1861 ~ 1864)", "겐지 (1864 ~ 1865)", "게이오 (1865 ~ 1868)", "메이지", "다이쇼", "쇼와", "헤이세이"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["화르바딘", "오르디베헤쉬트", "호르다드", "티르", "모르다드", "샤흐리바르", "메흐르", "아반", "아자르", "다이", "바흐만", "에스판드"],
                  long: ["화르바딘", "오르디베헤쉬트", "호르다드", "티르", "모르다드", "샤흐리바르", "메흐르", "아반", "아자르", "다이", "바흐만", "에스판드"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["AP"],
                  short: ["AP"],
                  long: ["AP"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              },
              roc: {
                months: {
                  narrow: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                  short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                  long: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
                },
                days: {
                  narrow: ["일", "월", "화", "수", "목", "금", "토"],
                  short: ["일", "월", "화", "수", "목", "금", "토"],
                  long: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
                },
                eras: {
                  narrow: ["중화민국전", "중화민국"],
                  short: ["중화민국전", "중화민국"],
                  long: ["중화민국전", "중화민국"]
                },
                dayPeriods: {
                  am: "오전",
                  pm: "오후"
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
              },
              percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
              }
            },
            symbols: {
              latn: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              AUD: "AU$",
              BRL: "R$",
              CAD: "CA$",
              CNY: "CN¥",
              EUR: "€",
              GBP: "£",
              HKD: "HK$",
              ILS: "₪",
              INR: "₹",
              JPY: "JP¥",
              KRW: "₩",
              MXN: "MX$",
              NZD: "NZ$",
              THB: "฿",
              TWD: "NT$",
              USD: "US$",
              VND: "₫",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF"
            }
          }
        })
      },
      935: function() {
        IntlPolyfill.__addLocaleData({
          locale: "pl",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !1,
            formats: {
              short: "{1}, {0}",
              medium: "{1}, {0}",
              full: "{1} {0}",
              long: "{1} {0}",
              availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "E, d",
                Ehm: "E, h:mm a",
                EHm: "E, HH:mm",
                Ehms: "E, h:mm:ss a",
                EHms: "E, HH:mm:ss",
                Gy: "y G",
                GyMMM: "MMM y G",
                GyMMMd: "d.MM.y G",
                GyMMMEd: "E, d MMM y G",
                GyMMMM: "LLLL y G",
                GyMMMMd: "d MMMM y G",
                GyMMMMEd: "E, d MMMM y G",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "d.MM",
                MEd: "E, d.MM",
                MMM: "LLL",
                MMMd: "d.MM",
                MMMEd: "E, d.MM",
                MMMMd: "d MMMM",
                MMMMEd: "E, d MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "MM.y",
                yMd: "d.MM.y",
                yMEd: "E, d.MM.y",
                yMMM: "MM.y",
                yMMMd: "d.MM.y",
                yMMMEd: "E, d.MM.y",
                yMMMM: "LLLL y",
                yMMMMd: "d MMMM y",
                yMMMMEd: "E, d MMMM y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ y"
              },
              dateFormats: {
                yMMMMEEEEd: "EEEE, d MMMM y",
                yMMMMd: "d MMMM y",
                yMMMd: "dd.MM.y",
                yMd: "dd.MM.y"
              },
              timeFormats: {
                hmmsszzzz: "HH:mm:ss zzzz",
                hmsz: "HH:mm:ss z",
                hms: "HH:mm:ss",
                hm: "HH:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
                  short: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
                  long: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["BE"],
                  short: ["BE"],
                  long: ["BE"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                  long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              gregory: {
                months: {
                  narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
                  short: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
                  long: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["p.n.e.", "n.e.", "BCE", "CE"],
                  short: ["p.n.e.", "n.e.", "BCE", "CE"],
                  long: ["p.n.e.", "n.e.", "BCE", "CE"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["Tiszri", "Cheszwan", "Kislew", "Tewet", "Szwat", "Adar I", "Adar", "Nisan", "Ijar", "Siwan", "Tamuz", "Aw", "Elul", "Adar II"],
                  long: ["Tiszri", "Cheszwan", "Kislew", "Tewet", "Szwat", "Adar I", "Adar", "Nisan", "Ijar", "Siwan", "Tamuz", "Aw", "Elul", "Adar II"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["AM"],
                  short: ["AM"],
                  long: ["AM"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                  long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["Saka"],
                  short: ["Saka"],
                  long: ["Saka"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Dżu. I", "Dżu. II", "Ra.", "Sza.", "Ram.", "Szaw.", "Zu al-k.", "Zu al-h."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Dżumada I", "Dżumada II", "Radżab", "Szaban", "Ramadan", "Szawwal", "Zu al-kada", "Zu al-hidżdża"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Dżu. I", "Dżu. II", "Ra.", "Sza.", "Ram.", "Szaw.", "Zu al-k.", "Zu al-h."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Dżumada I", "Dżumada II", "Radżab", "Szaban", "Ramadan", "Szawwal", "Zu al-kada", "Zu al-hidżdża"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              japanese: {
                months: {
                  narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
                  short: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
                  long: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"],
                  long: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Farwardin", "Ordibeheszt", "Chordād", "Tir", "Mordād", "Szahriwar", "Mehr", "Ābān", "Āsar", "Déi", "Bahman", "Esfand"],
                  long: ["Farwardin", "Ordibeheszt", "Chordād", "Tir", "Mordād", "Szahriwar", "Mehr", "Ābān", "Āsar", "Déi", "Bahman", "Esfand"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["AP"],
                  short: ["AP"],
                  long: ["AP"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              roc: {
                months: {
                  narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
                  short: ["sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paź", "lis", "gru"],
                  long: ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"]
                },
                days: {
                  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
                  short: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
                  long: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
                },
                eras: {
                  narrow: ["Przed ROC", "ROC"],
                  short: ["Przed ROC", "ROC"],
                  long: ["Przed ROC", "ROC"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{number} {currency}",
                negativePattern: "{minusSign}{number} {currency}"
              },
              percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
              }
            },
            symbols: {
              latn: {
                decimal: ",",
                group: " ",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              BRL: "R$",
              EUR: "€",
              PLN: "zł",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF"
            }
          }
        })
      },
      1630: function() {
        IntlPolyfill.__addLocaleData({
          locale: "pt-BR",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !1,
            formats: {
              short: "{1} {0}",
              medium: "{1} {0}",
              full: "{1} {0}",
              long: "{1} {0}",
              availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "E, d",
                Ehm: "E, h:mm a",
                EHm: "E, HH:mm",
                Ehms: "E, h:mm:ss a",
                EHms: "E, HH:mm:ss",
                Gy: "y G",
                GyMMM: "MMM 'de' y G",
                GyMMMd: "d 'de' MMM 'de' y G",
                GyMMMEd: "E, d 'de' MMM 'de' y G",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "d/M",
                MEd: "E, dd/MM",
                MMdd: "dd/MM",
                MMM: "LLL",
                MMMd: "d 'de' MMM",
                MMMEd: "E, d 'de' MMM",
                MMMMd: "d 'de' MMMM",
                MMMMEd: "E, d 'de' MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "MM/y",
                yMd: "dd/MM/y",
                yMEd: "E, dd/MM/y",
                yMM: "MM/y",
                yMMM: "MMM 'de' y",
                yMMMd: "d 'de' MMM 'de' y",
                yMMMEd: "E, d 'de' MMM 'de' y",
                yMMMM: "MMMM 'de' y",
                yMMMMd: "d 'de' MMMM 'de' y",
                yMMMMEd: "E, d 'de' MMMM 'de' y",
                yQQQ: "y QQQ",
                yQQQQ: "y QQQQ"
              },
              dateFormats: {
                yMMMMEEEEd: "EEEE, d 'de' MMMM 'de' y",
                yMMMMd: "d 'de' MMMM 'de' y",
                yMMMd: "d 'de' MMM 'de' y",
                yMd: "dd/MM/yy"
              },
              timeFormats: {
                hmmsszzzz: "HH:mm:ss zzzz",
                hmsz: "HH:mm:ss z",
                hms: "HH:mm:ss",
                hm: "HH:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
                  long: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["BE"],
                  short: ["BE"],
                  long: ["BE"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Mês 1", "Mês 2", "Mês 3", "Mês 4", "Mês 5", "Mês 6", "Mês 7", "Mês 8", "Mês 9", "Mês 10", "Mês 11", "Mês 12"],
                  long: ["Mês 1", "Mês 2", "Mês 3", "Mês 4", "Mês 5", "Mês 6", "Mês 7", "Mês 8", "Mês 9", "Mês 10", "Mês 11", "Mês 12"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"],
                  long: ["Tout", "Baba", "Hator", "Kiahk", "Toba", "Amshir", "Baramhat", "Baramouda", "Bashans", "Paona", "Epep", "Mesra", "Nasie"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Mês 1", "Mês 2", "Mês 3", "Mês 4", "Mês 5", "Mês 6", "Mês 7", "Mês 8", "Mês 9", "Mês 10", "Mês 11", "Mês 12"],
                  long: ["Mês 1", "Mês 2", "Mês 3", "Mês 4", "Mês 5", "Mês 6", "Mês 7", "Mês 8", "Mês 9", "Mês 10", "Mês 11", "Mês 12"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"],
                  long: ["Meskerem", "Tekemt", "Hedar", "Tahsas", "Ter", "Yekatit", "Megabit", "Miazia", "Genbot", "Sene", "Hamle", "Nehasse", "Pagumen"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              gregory: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
                  long: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["a.C.", "d.C.", "AEC", "EC"],
                  short: ["a.C.", "d.C.", "AEC", "EC"],
                  long: ["antes de Cristo", "depois de Cristo", "antes da Era Comum", "Era Comum"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
                  long: ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "Adar I", "Adar", "Nisan", "Iyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["AM"],
                  short: ["AM"],
                  long: ["AM"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                  long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["Saka"],
                  short: ["Saka"],
                  long: ["Saka"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muh.", "Saf.", "Rab. I", "Rab. II", "Jum. I", "Jum. II", "Raj.", "Sha.", "Ram.", "Shaw.", "Dhuʻl-Q.", "Dhuʻl-H."],
                  long: ["Muharram", "Safar", "Rabiʻ I", "Rabiʻ II", "Jumada I", "Jumada II", "Rajab", "Shaʻban", "Ramadan", "Shawwal", "Dhuʻl-Qiʻdah", "Dhuʻl-Hijjah"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              japanese: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
                  long: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"],
                  long: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                  long: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["AP"],
                  short: ["AP"],
                  long: ["AP"]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              },
              roc: {
                months: {
                  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                  short: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
                  long: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
                },
                days: {
                  narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
                  long: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
                },
                eras: {
                  narrow: ["Antes de R.O.C.", "R.O.C."],
                  short: ["Antes de R.O.C.", "R.O.C."],
                  long: ["Antes de R.O.C.", "R.O.C."]
                },
                dayPeriods: {
                  am: "AM",
                  pm: "PM"
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
              },
              percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
              }
            },
            symbols: {
              latn: {
                decimal: ",",
                group: ".",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              AUD: "AU$",
              BRL: "R$",
              CAD: "CA$",
              CNY: "CN¥",
              EUR: "€",
              GBP: "£",
              HKD: "HK$",
              ILS: "₪",
              INR: "₹",
              JPY: "JP¥",
              KRW: "₩",
              MXN: "MX$",
              NZD: "NZ$",
              PTE: "Esc.",
              THB: "฿",
              TWD: "NT$",
              USD: "US$",
              VND: "₫",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF"
            }
          }
        })
      },
      6602: function() {
        IntlPolyfill.__addLocaleData({
          locale: "ru",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !1,
            formats: {
              short: "{1}, {0}",
              medium: "{1}, {0}",
              full: "{1}, {0}",
              long: "{1}, {0}",
              availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "ccc, d",
                Ehm: "E h:mm a",
                EHm: "E HH:mm",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "y 'г'. G",
                GyMMM: "LLL y G",
                GyMMMd: "d MMM y 'г'. G",
                GyMMMEd: "E, d MMM y 'г'. G",
                h: "h a",
                H: "H",
                hm: "h:mm a",
                Hm: "H:mm",
                hms: "h:mm:ss a",
                Hms: "H:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "H:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "H:mm v",
                M: "L",
                Md: "dd.MM",
                MEd: "E, dd.MM",
                MMdd: "dd.MM",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "ccc, d MMM",
                MMMMd: "d MMMM",
                ms: "mm:ss",
                y: "y",
                yM: "MM.y",
                yMd: "dd.MM.y",
                yMEd: "ccc, d.MM.y 'г'.",
                yMM: "MM.y",
                yMMM: "LLL y 'г'.",
                yMMMd: "d MMM y 'г'.",
                yMMMEd: "E, d MMM y 'г'.",
                yMMMM: "LLLL y 'г'.",
                yQQQ: "QQQ y 'г'.",
                yQQQQ: "QQQQ y 'г'."
              },
              dateFormats: {
                yMMMMEEEEd: "EEEE, d MMMM y 'г'.",
                yMMMMd: "d MMMM y 'г'.",
                yMMMd: "d MMM y 'г'.",
                yMd: "dd.MM.yy"
              },
              timeFormats: {
                hmmsszzzz: "H:mm:ss zzzz",
                hmsz: "H:mm:ss z",
                hms: "H:mm:ss",
                hm: "H:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
                  short: ["янв.", "февр.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."],
                  long: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["BE"],
                  short: ["BE"],
                  long: ["BE"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Тот", "Бабэ", "Хатур", "Кихак", "Тубэ", "Амшир", "Барамхат", "Бармуда", "Башнас", "Бауна", "Абиб", "Мисра", "Наси"],
                  long: ["Тот", "Бабэ", "Хатур", "Кихак", "Тубэ", "Амшир", "Барамхат", "Бармуда", "Башнас", "Бауна", "Абиб", "Мисра", "Наси"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Мескерем", "Текемт", "Хедар", "Тахсас", "Тер", "Якатит", "Магабит", "Миазия", "Генбот", "Сэнэ", "Хамлэ", "Нахасэ", "Эпагомен"],
                  long: ["Мескерем", "Текемт", "Хедар", "Тахсас", "Тер", "Якатит", "Магабит", "Миазия", "Генбот", "Сэнэ", "Хамлэ", "Нахасэ", "Эпагомен"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Мескерем", "Текемт", "Хедар", "Тахсас", "Тер", "Якатит", "Магабит", "Миазия", "Генбот", "Сэнэ", "Хамлэ", "Нахасэ", "Эпагомен"],
                  long: ["Мескерем", "Текемт", "Хедар", "Тахсас", "Тер", "Якатит", "Магабит", "Миазия", "Генбот", "Сэнэ", "Хамлэ", "Нахасэ", "Эпагомен"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              gregory: {
                months: {
                  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
                  short: ["янв.", "февр.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."],
                  long: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["до н.э.", "н.э.", "BCE", "CE"],
                  short: ["до н. э.", "н. э.", "BCE", "CE"],
                  long: ["до Рождества Христова", "от Рождества Христова", "до нашей эры", "нашей эры"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["Тишрей", "Хешван", "Кислев", "Тевет", "Шеват", "Адар I", "Адар", "Нисан", "Ияр", "Сиван", "Таммуз", "Ав", "Элул", "Адар II"],
                  long: ["Тишрей", "Хешван", "Кислев", "Тевет", "Шеват", "Адар I", "Адар", "Нисан", "Ияр", "Сиван", "Таммуз", "Ав", "Элул", "Адар II"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["AM"],
                  short: ["AM"],
                  long: ["AM"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Чайтра", "Ваисакха", "Джанштха", "Асадха", "Сравана", "Бхадра", "Азвина", "Картика", "Аграхайана", "Пауза", "Магха", "Пхалгуна"],
                  long: ["Чайтра", "Ваисакха", "Джанштха", "Асадха", "Сравана", "Бхадра", "Азвина", "Картика", "Аграхайана", "Пауза", "Магха", "Пхалгуна"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["Saka"],
                  short: ["Saka"],
                  long: ["Saka"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Мухаррам", "Сафар", "Раби-уль-авваль", "Раби-уль-ахир", "Джумад-уль-авваль", "Джумад-уль-ахир", "Раджаб", "Шаабан", "Рамадан", "Шавваль", "Зуль-Каада", "Зуль-Хиджжа"],
                  long: ["Мухаррам", "Сафар", "Раби-уль-авваль", "Раби-уль-ахир", "Джумад-уль-авваль", "Джумад-уль-ахир", "Раджаб", "Шаабан", "Рамадан", "Шавваль", "Зуль-Каада", "Зуль-Хиджжа"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Мухаррам", "Сафар", "Раби-уль-авваль", "Раби-уль-ахир", "Джумад-уль-авваль", "Джумад-уль-ахир", "Раджаб", "Шаабан", "Рамадан", "Шавваль", "Зуль-Каада", "Зуль-Хиджжа"],
                  long: ["Мухаррам", "Сафар", "Раби-уль-авваль", "Раби-уль-ахир", "Джумад-уль-авваль", "Джумад-уль-ахир", "Раджаб", "Шаабан", "Рамадан", "Шавваль", "Зуль-Каада", "Зуль-Хиджжа"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["AH"],
                  short: ["AH"],
                  long: ["AH"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              japanese: {
                months: {
                  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
                  short: ["янв.", "февр.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."],
                  long: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["Эпоха Тайка (645–650)", "Эпоха Хакути (650–671)", "Эпоха Хакухо (672–686)", "Эпоха Сючё (686–701)", "Эпоха Тайхо (701–704)", "Эпоха Кёюн (704–708)", "Эпоха Вадо (708–715)", "Эпоха Рэйки (715–717)", "Эпоха Ёро (717–724)", "Эпоха Дзинки (724–729)", "Эпоха Темпьё (729–749)", "Эпоха Темпьё (749–749)", "Эпоха Темпьё-Сьохо (749-757)", "Эпоха Темпьё-Ходзи (757-765)", "Эпоха Темпьё-Ходзи (765-767)", "Эпоха Джинго-Кёюн (767-770)", "Эпоха Хоки (770–780)", "Эпоха Теньё (781–782)", "Эпоха Енряку (782–806)", "Эпоха Дайдо (806–810)", "Эпоха Конин (810–824)", "Эпоха Тентьо (824–834)", "Эпоха Шова (834–848)", "Эпоха Кайо (848–851)", "Эпоха Ниндзю (851–854)", "Эпоха Сайко (854–857)", "Эпоха Теннан (857–859)", "Эпоха Йоган (859–877)", "Эпоха Генкей (877–885)", "Эпоха Нинна (885–889)", "Эпоха Кампьё (889–898)", "Эпоха Сьотай (898–901)", "Эпоха Энги (901–923)", "Эпоха Ентьо (923–931)", "Эпоха Сьёхэй (931–938)", "Эпоха Тенгьо (938–947)", "Эпоха Тенрияку (947–957)", "Эпоха Тентоку (957–961)", "Эпоха Ова (961–964)", "Эпоха Кохо (964–968)", "Эпоха Анна (968–970)", "Эпоха Тенроку (970–973)", "Эпоха Теньен (973–976)", "Эпоха Дзьоген (976–978)", "Эпоха Тенген (978–983)", "Эпоха Ейкан (983–985)", "Эпоха Канна (985–987)", "Эпоха Ейен (987–989)", "Эпоха Ейсо (989–990)", "Эпоха Сёряку (990–995)", "Эпоха Тётоку (995–999)", "Эпоха Тёхо (999–1004)", "Эпоха Канко (1004–1012)", "Эпоха Тёва (1012–1017)", "Эпоха Каннин (1017–1021)", "Эпоха Дзиан (1021–1024)", "Эпоха Мандзю (1024–1028)", "Эпоха Тёгэн (1028–1037)", "Эпоха Тёряку (1037–1040)", "Эпоха Тёкю (1040–1044)", "Эпоха Катоку (1044–1046)", "Эпоха Эйсо (1046–1053)", "Эпоха Тэнги (1053–1058)", "Эпоха Кохэй (1058–1065)", "Эпоха Дзиряку (1065–1069)", "Эпоха Энкю (1069–1074)", "Эпоха Сёхо (1074–1077)", "Эпоха Сёряку (1077–1081)", "Эпоха Эйхо (1081–1084)", "Эпоха Отоку (1084–1087)", "Эпоха Кандзи (1087–1094)", "Эпоха Кахо (1094–1096)", "Эпоха Эйтё (1096–1097)", "Эпоха Сётоку (1097–1099)", "Эпоха Кова (1099–1104)", "Эпоха Тёдзи (1104–1106)", "Эпоха Касё (1106–1108)", "Эпоха Тэннин (1108–1110)", "Эпоха Тэнъэй (1110–1113)", "Эпоха Эйкю (1113–1118)", "Эпоха Гэнъэй (1118–1120)", "Эпоха Хоан (1120–1124)", "Эпоха Тэндзи (1124–1126)", "Эпоха Дайдзи (1126–1131)", "Эпоха Тэнсё (1131–1132)", "Эпоха Тёсё (1132–1135)", "Эпоха Хоэн (1135–1141)", "Эпоха Эйдзи (1141–1142)", "Эпоха Кодзи (1142–1144)", "Эпоха Тэнё (1144–1145)", "Эпоха Кюан (1145–1151)", "Эпоха Нимпэй (1151–1154)", "Эпоха Кюдзю (1154–1156)", "Эпоха Хогэн (1156–1159)", "Эпоха Хэйдзи (1159–1160)", "Эпоха Эйряку (1160–1161)", "Эпоха Охо (1161–1163)", "Эпоха Тёкан (1163–1165)", "Эпоха Эйман (1165–1166)", "Эпоха Нинъан (1166–1169)", "Эпоха Као (1169–1171)", "Эпоха Сёан (1171–1175)", "Эпоха Ангэн (1175–1177)", "Эпоха Дзисё (1177–1181)", "Эпоха Ёва (1181–1182)", "Эпоха Дзюэй (1182–1184)", "Эпоха Гэнрюку (1184–1185)", "Эпоха Бундзи (1185–1190)", "Эпоха Кэнкю (1190–1199)", "Эпоха Сёдзи (1199–1201)", "Эпоха Кэннин (1201–1204)", "Эпоха Гэнкю (1204–1206)", "Эпоха Кэнъэй (1206–1207)", "Эпоха Сёгэн (1207–1211)", "Эпоха Кэнряку (1211–1213)", "Эпоха Кэмпо (1213–1219)", "Эпоха Сёкю (1219–1222)", "Эпоха Дзёо (1222–1224)", "Эпоха Гэннин (1224–1225)", "Эпоха Кароку (1225–1227)", "Эпоха Антэй (1227–1229)", "Эпоха Канки (1229–1232)", "Эпоха Дзёэй (1232–1233)", "Эпоха Тэмпуку (1233–1234)", "Эпоха Бунряку (1234–1235)", "Эпоха Катэй (1235–1238)", "Эпоха Рякунин (1238–1239)", "Эпоха Энъо (1239–1240)", "Эпоха Ниндзи (1240–1243)", "Эпоха Кангэн (1243–1247)", "Эпоха Ходзи (1247–1249)", "Эпоха Кэнтё (1249–1256)", "Эпоха Когэн (1256–1257)", "Эпоха Сёка (1257–1259)", "Эпоха Сёгэн (1259–1260)", "Эпоха Бунъо (1260–1261)", "Эпоха Котё (1261–1264)", "Эпоха Бунъэй (1264–1275)", "Эпоха Кэндзи (1275–1278)", "Эпоха Коан (1278–1288)", "Эпоха Сёо (1288–1293)", "Эпоха Эйнин (1293–1299)", "Эпоха Сёан (1299–1302)", "Эпоха Кэнгэн (1302–1303)", "Эпоха Кагэн (1303–1306)", "Эпоха Токудзи (1306–1308)", "Эпоха Энкэй (1308–1311)", "Эпоха Отё (1311–1312)", "Эпоха Сёва (1312–1317)", "Эпоха Бумпо (1317–1319)", "Эпоха Гэно (1319–1321)", "Эпоха Гэнкё (1321–1324)", "Эпоха Сётю (1324–1326)", "Эпоха Карэки (1326–1329)", "Эпоха Гэнтоку (1329–1331)", "Эпоха Гэнко (1331–1334)", "Эпоха Кэмму (1334–1336)", "Эпоха Энгэн (1336–1340)", "Эпоха Кококу (1340–1346)", "Эпоха Сёхэй (1346–1370)", "Эпоха Кэнтоку (1370–1372)", "Эпоха Бунтю (1372–1375)", "Эпоха Иэндзю (1375–1379)", "Эпоха Коряку (1379–1381)", "Эпоха Кова (1381–1384)", "Эпоха Гэнтю (1384–1392)", "Эпоха Мэйтоку (1384–1387)", "Эпоха Какэй (1387–1389)", "Эпоха Коо (1389–1390)", "Эпоха Мэйтоку (1390–1394)", "Эпоха Оэй (1394–1428)", "Эпоха Сётё (1428–1429)", "Эпоха Эйкё (1429–1441)", "Эпоха Какицу (1441–1444)", "Эпоха Банъан (1444–1449)", "Эпоха Хотоку (1449–1452)", "Эпоха Кётоку (1452–1455)", "Эпоха Косё (1455–1457)", "Эпоха Тёроку (1457–1460)", "Эпоха Кансё (1460–1466)", "Эпоха Бунсё (1466–1467)", "Эпоха Онин (1467–1469)", "Эпоха Буммэй (1469–1487)", "Эпоха Тёкё (1487–1489)", "Эпоха Энтоку (1489–1492)", "Эпоха Мэйо (1492–1501)", "Эпоха Бунки (1501–1504)", "Эпоха Эйсё (1504–1521)", "Эпоха Тайэй (1521–1528)", "Эпоха Кёроку (1528–1532)", "Эпоха Тэммон (1532–1555)", "Эпоха Кодзи (1555–1558)", "Эпоха Эйроку (1558–1570)", "Эпоха Гэнки (1570–1573)", "Эпоха Тэнсё (1573–1592)", "Эпоха Бунроку (1592–1596)", "Эпоха Кэйтё (1596–1615)", "Эпоха Гэнва (1615–1624)", "Эпоха Канъэй (1624–1644)", "Эпоха Сёхо (1644–1648)", "Эпоха Кэйан (1648–1652)", "Эпоха Сё (1652–1655)", "Эпоха Мэйряку (1655–1658)", "Эпоха Мандзи (1658–1661)", "Эпоха Камбун (1661–1673)", "Эпоха Эмпо (1673–1681)", "Эпоха Тэнва (1681–1684)", "Эпоха Дзёкё (1684–1688)", "Эпоха Гэнроку (1688–1704)", "Эпоха Хоэй (1704–1711)", "Эпоха Сётоку (1711–1716)", "Эпоха Кёхо (1716–1736)", "Эпоха Гэмбун (1736–1741)", "Эпоха Кампо (1741–1744)", "Эпоха Энкё (1744–1748)", "Эпоха Канъэн (1748–1751)", "Эпоха Хоряку (1751–1764)", "Эпоха Мэйва (1764–1772)", "Эпоха Анъэй (1772–1781)", "Эпоха Тэммэй (1781–1789)", "Эпоха Кансэй (1789–1801)", "Эпоха Кёва (1801–1804)", "Эпоха Бунка (1804–1818)", "Эпоха Бунсэй (1818–1830)", "Эпоха Тэмпо (1830–1844)", "Эпоха Кока (1844–1848)", "Эпоха Каэй (1848–1854)", "Эпоха Ансэй (1854–1860)", "Эпоха Манъэн (1860–1861)", "Эпоха Бункю (1861–1864)", "Эпоха Гендзи (1864–1865)", "Эпоха Кейо (1865–1868)", "Эпоха Мэйдзи", "Эпоха Тайсьо", "Сьова", "Эпоха Хэйсэй"],
                  long: ["Эпоха Тайка (645–650)", "Эпоха Хакути (650–671)", "Эпоха Хакухо (672–686)", "Эпоха Сючё (686–701)", "Эпоха Тайхо (701–704)", "Эпоха Кёюн (704–708)", "Эпоха Вадо (708–715)", "Эпоха Рэйки (715–717)", "Эпоха Ёро (717–724)", "Эпоха Дзинки (724–729)", "Эпоха Темпьё (729–749)", "Эпоха Темпьё (749–749)", "Эпоха Темпьё-Сьохо (749-757)", "Эпоха Темпьё-Ходзи (757-765)", "Эпоха Темпьё-Ходзи (765-767)", "Эпоха Джинго-Кёюн (767-770)", "Эпоха Хоки (770–780)", "Эпоха Теньё (781–782)", "Эпоха Енряку (782–806)", "Эпоха Дайдо (806–810)", "Эпоха Конин (810–824)", "Эпоха Тентьо (824–834)", "Эпоха Шова (834–848)", "Эпоха Кайо (848–851)", "Эпоха Ниндзю (851–854)", "Эпоха Сайко (854–857)", "Эпоха Теннан (857–859)", "Эпоха Йоган (859–877)", "Эпоха Генкей (877–885)", "Эпоха Нинна (885–889)", "Эпоха Кампьё (889–898)", "Эпоха Сьотай (898–901)", "Эпоха Энги (901–923)", "Эпоха Ентьо (923–931)", "Эпоха Сьёхэй (931–938)", "Эпоха Тенгьо (938–947)", "Эпоха Тенрияку (947–957)", "Эпоха Тентоку (957–961)", "Эпоха Ова (961–964)", "Эпоха Кохо (964–968)", "Эпоха Анна (968–970)", "Эпоха Тенроку (970–973)", "Эпоха Теньен (973–976)", "Эпоха Дзьоген (976–978)", "Эпоха Тенген (978–983)", "Эпоха Ейкан (983–985)", "Эпоха Канна (985–987)", "Эпоха Ейен (987–989)", "Эпоха Ейсо (989–990)", "Эпоха Сёряку (990–995)", "Эпоха Тётоку (995–999)", "Эпоха Тёхо (999–1004)", "Эпоха Канко (1004–1012)", "Эпоха Тёва (1012–1017)", "Эпоха Каннин (1017–1021)", "Эпоха Дзиан (1021–1024)", "Эпоха Мандзю (1024–1028)", "Эпоха Тёгэн (1028–1037)", "Эпоха Тёряку (1037–1040)", "Эпоха Тёкю (1040–1044)", "Эпоха Катоку (1044–1046)", "Эпоха Эйсо (1046–1053)", "Эпоха Тэнги (1053–1058)", "Эпоха Кохэй (1058–1065)", "Эпоха Дзиряку (1065–1069)", "Эпоха Энкю (1069–1074)", "Эпоха Сёхо (1074–1077)", "Эпоха Сёряку (1077–1081)", "Эпоха Эйхо (1081–1084)", "Эпоха Отоку (1084–1087)", "Эпоха Кандзи (1087–1094)", "Эпоха Кахо (1094–1096)", "Эпоха Эйтё (1096–1097)", "Эпоха Сётоку (1097–1099)", "Эпоха Кова (1099–1104)", "Эпоха Тёдзи (1104–1106)", "Эпоха Касё (1106–1108)", "Эпоха Тэннин (1108–1110)", "Эпоха Тэнъэй (1110–1113)", "Эпоха Эйкю (1113–1118)", "Эпоха Гэнъэй (1118–1120)", "Эпоха Хоан (1120–1124)", "Эпоха Тэндзи (1124–1126)", "Эпоха Дайдзи (1126–1131)", "Эпоха Тэнсё (1131–1132)", "Эпоха Тёсё (1132–1135)", "Эпоха Хоэн (1135–1141)", "Эпоха Эйдзи (1141–1142)", "Эпоха Кодзи (1142–1144)", "Эпоха Тэнё (1144–1145)", "Эпоха Кюан (1145–1151)", "Эпоха Нимпэй (1151–1154)", "Эпоха Кюдзю (1154–1156)", "Эпоха Хогэн (1156–1159)", "Эпоха Хэйдзи (1159–1160)", "Эпоха Эйряку (1160–1161)", "Эпоха Охо (1161–1163)", "Эпоха Тёкан (1163–1165)", "Эпоха Эйман (1165–1166)", "Эпоха Нинъан (1166–1169)", "Эпоха Као (1169–1171)", "Эпоха Сёан (1171–1175)", "Эпоха Ангэн (1175–1177)", "Эпоха Дзисё (1177–1181)", "Эпоха Ёва (1181–1182)", "Эпоха Дзюэй (1182–1184)", "Эпоха Гэнрюку (1184–1185)", "Эпоха Бундзи (1185–1190)", "Эпоха Кэнкю (1190–1199)", "Эпоха Сёдзи (1199–1201)", "Эпоха Кэннин (1201–1204)", "Эпоха Гэнкю (1204–1206)", "Эпоха Кэнъэй (1206–1207)", "Эпоха Сёгэн (1207–1211)", "Эпоха Кэнряку (1211–1213)", "Эпоха Кэмпо (1213–1219)", "Эпоха Сёкю (1219–1222)", "Эпоха Дзёо (1222–1224)", "Эпоха Гэннин (1224–1225)", "Эпоха Кароку (1225–1227)", "Эпоха Антэй (1227–1229)", "Эпоха Канки (1229–1232)", "Эпоха Дзёэй (1232–1233)", "Эпоха Тэмпуку (1233–1234)", "Эпоха Бунряку (1234–1235)", "Эпоха Катэй (1235–1238)", "Эпоха Рякунин (1238–1239)", "Эпоха Энъо (1239–1240)", "Эпоха Ниндзи (1240–1243)", "Эпоха Кангэн (1243–1247)", "Эпоха Ходзи (1247–1249)", "Эпоха Кэнтё (1249–1256)", "Эпоха Когэн (1256–1257)", "Эпоха Сёка (1257–1259)", "Эпоха Сёгэн (1259–1260)", "Эпоха Бунъо (1260–1261)", "Эпоха Котё (1261–1264)", "Эпоха Бунъэй (1264–1275)", "Эпоха Кэндзи (1275–1278)", "Эпоха Коан (1278–1288)", "Эпоха Сёо (1288–1293)", "Эпоха Эйнин (1293–1299)", "Эпоха Сёан (1299–1302)", "Эпоха Кэнгэн (1302–1303)", "Эпоха Кагэн (1303–1306)", "Эпоха Токудзи (1306–1308)", "Эпоха Энкэй (1308–1311)", "Эпоха Отё (1311–1312)", "Эпоха Сёва (1312–1317)", "Эпоха Бумпо (1317–1319)", "Эпоха Гэно (1319–1321)", "Эпоха Гэнкё (1321–1324)", "Эпоха Сётю (1324–1326)", "Эпоха Карэки (1326–1329)", "Эпоха Гэнтоку (1329–1331)", "Эпоха Гэнко (1331–1334)", "Эпоха Кэмму (1334–1336)", "Эпоха Энгэн (1336–1340)", "Эпоха Кококу (1340–1346)", "Эпоха Сёхэй (1346–1370)", "Эпоха Кэнтоку (1370–1372)", "Эпоха Бунтю (1372–1375)", "Эпоха Иэндзю (1375–1379)", "Эпоха Коряку (1379–1381)", "Эпоха Кова (1381–1384)", "Эпоха Гэнтю (1384–1392)", "Эпоха Мэйтоку (1384–1387)", "Эпоха Какэй (1387–1389)", "Эпоха Коо (1389–1390)", "Эпоха Мэйтоку (1390–1394)", "Эпоха Оэй (1394–1428)", "Эпоха Сётё (1428–1429)", "Эпоха Эйкё (1429–1441)", "Эпоха Какицу (1441–1444)", "Эпоха Банъан (1444–1449)", "Эпоха Хотоку (1449–1452)", "Эпоха Кётоку (1452–1455)", "Эпоха Косё (1455–1457)", "Эпоха Тёроку (1457–1460)", "Эпоха Кансё (1460–1466)", "Эпоха Бунсё (1466–1467)", "Эпоха Онин (1467–1469)", "Эпоха Буммэй (1469–1487)", "Эпоха Тёкё (1487–1489)", "Эпоха Энтоку (1489–1492)", "Эпоха Мэйо (1492–1501)", "Эпоха Бунки (1501–1504)", "Эпоха Эйсё (1504–1521)", "Эпоха Тайэй (1521–1528)", "Эпоха Кёроку (1528–1532)", "Эпоха Тэммон (1532–1555)", "Эпоха Кодзи (1555–1558)", "Эпоха Эйроку (1558–1570)", "Эпоха Гэнки (1570–1573)", "Эпоха Тэнсё (1573–1592)", "Эпоха Бунроку (1592–1596)", "Эпоха Кэйтё (1596–1615)", "Эпоха Гэнва (1615–1624)", "Эпоха Канъэй (1624–1644)", "Эпоха Сёхо (1644–1648)", "Эпоха Кэйан (1648–1652)", "Эпоха Сё (1652–1655)", "Эпоха Мэйряку (1655–1658)", "Эпоха Мандзи (1658–1661)", "Эпоха Камбун (1661–1673)", "Эпоха Эмпо (1673–1681)", "Эпоха Тэнва (1681–1684)", "Эпоха Дзёкё (1684–1688)", "Эпоха Гэнроку (1688–1704)", "Эпоха Хоэй (1704–1711)", "Эпоха Сётоку (1711–1716)", "Эпоха Кёхо (1716–1736)", "Эпоха Гэмбун (1736–1741)", "Эпоха Кампо (1741–1744)", "Эпоха Энкё (1744–1748)", "Эпоха Канъэн (1748–1751)", "Эпоха Хоряку (1751–1764)", "Эпоха Мэйва (1764–1772)", "Эпоха Анъэй (1772–1781)", "Эпоха Тэммэй (1781–1789)", "Эпоха Кансэй (1789–1801)", "Эпоха Кёва (1801–1804)", "Эпоха Бунка (1804–1818)", "Эпоха Бунсэй (1818–1830)", "Эпоха Тэмпо (1830–1844)", "Эпоха Кока (1844–1848)", "Эпоха Каэй (1848–1854)", "Эпоха Ансэй (1854–1860)", "Эпоха Манъэн (1860–1861)", "Эпоха Бункю (1861–1864)", "Эпоха Гендзи (1864–1865)", "Эпоха Кейо (1865–1868)", "Эпоха Мэйдзи", "Эпоха Тайсьо", "Сьова", "Эпоха Хэйсэй"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Фарвардин", "Ордибехешт", "Хордад", "Тир", "Мордад", "Шахривер", "Мехр", "Абан", "Азер", "Дей", "Бахман", "Эсфанд"],
                  long: ["Фарвардин", "Ордибехешт", "Хордад", "Тир", "Мордад", "Шахривер", "Мехр", "Абан", "Азер", "Дей", "Бахман", "Эсфанд"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["AP"],
                  short: ["AP"],
                  long: ["AP"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              },
              roc: {
                months: {
                  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
                  short: ["янв.", "февр.", "мар.", "апр.", "мая", "июн.", "июл.", "авг.", "сент.", "окт.", "нояб.", "дек."],
                  long: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
                },
                days: {
                  narrow: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
                  long: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
                },
                eras: {
                  narrow: ["Before R.O.C.", "Minguo"],
                  short: ["Before R.O.C.", "Minguo"],
                  long: ["Before R.O.C.", "Minguo"]
                },
                dayPeriods: {
                  am: "ДП",
                  pm: "ПП"
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{number} {currency}",
                negativePattern: "{minusSign}{number} {currency}"
              },
              percent: {
                positivePattern: "{number} {percentSign}",
                negativePattern: "{minusSign}{number} {percentSign}"
              }
            },
            symbols: {
              latn: {
                decimal: ",",
                group: " ",
                nan: "не число",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              AUD: "A$",
              BRL: "R$",
              CAD: "CA$",
              CNY: "CN¥",
              EUR: "€",
              GBP: "£",
              HKD: "HK$",
              ILS: "₪",
              INR: "₹",
              JPY: "¥",
              KRW: "₩",
              MXN: "MX$",
              NZD: "NZ$",
              RUB: "₽",
              RUR: "р.",
              THB: "฿",
              TMT: "ТМТ",
              TWD: "NT$",
              UAH: "₴",
              USD: "$",
              VND: "₫",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF",
              XXX: "XXXX"
            }
          }
        })
      },
      6924: function() {
        IntlPolyfill.__addLocaleData({
          locale: "th",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !1,
            formats: {
              short: "{1} {0}",
              medium: "{1} {0}",
              full: "{1} {0}",
              long: "{1} {0}",
              availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "E d",
                Ehm: "E h:mm a",
                EHm: "E HH:mm น.",
                Ehms: "E h:mm:ss a",
                EHms: "E HH:mm:ss",
                Gy: "G y",
                GyMMM: "MMM G y",
                GyMMMd: "d MMM G y",
                GyMMMEd: "E d MMM G y",
                GyMMMEEEEd: "EEEEที่ d MMM G y",
                h: "h a",
                H: "HH",
                hm: "h:mm a",
                Hm: "HH:mm น.",
                hms: "h:mm:ss a",
                Hms: "HH:mm:ss",
                hmsv: "h:mm:ss a v",
                Hmsv: "HH:mm:ss v",
                hmv: "h:mm a v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "d/M",
                MEd: "E d/M",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "E d MMM",
                MMMEEEEd: "EEEEที่ d MMM",
                MMMMd: "d MMMM",
                MMMMEd: "E d MMMM",
                MMMMEEEEd: "EEEEที่ d MMMM",
                mmss: "mm:ss",
                ms: "mm:ss",
                y: "y",
                yM: "M/y",
                yMd: "d/M/y",
                yMEd: "E d/M/y",
                yMMM: "MMM y",
                yMMMd: "d MMM y",
                yMMMEd: "E d MMM y",
                yMMMEEEEd: "EEEEที่ d MMM y",
                yMMMM: "MMMM G y",
                yMMMMd: "d MMMM G y",
                yMMMMEd: "E d MMMM G y",
                yMMMMEEEEd: "EEEEที่ d MMMM G y",
                yQQQ: "QQQ y",
                yQQQQ: "QQQQ G y"
              },
              dateFormats: {
                yMMMMEEEEd: "EEEEที่ d MMMM G y",
                yMMMMd: "d MMMM G y",
                yMMMd: "d MMM y",
                yMd: "d/M/yy"
              },
              timeFormats: {
                hmmsszzzz: "H นาฬิกา mm นาที ss วินาที zzzz",
                hmsz: "H นาฬิกา mm นาที ss วินาที z",
                hms: "HH:mm:ss",
                hm: "HH:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                  short: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                  long: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["พ.ศ."],
                  short: ["พ.ศ."],
                  long: ["พุทธศักราช"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  long: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["เทาท์", "บาบา", "ฮาเทอร์", "เคียฟ", "โทบา", "อัมเชอร์", "บารัมฮัท", "บาราเมาดา", "บาชันส์", "พาโอนา", "อีเปป", "เมสรา", "นาซี"],
                  long: ["เทาท์", "บาบา", "ฮาเทอร์", "เคียฟ", "โทบา", "อัมเชอร์", "บารัมฮัท", "บาราเมาดา", "บาชันส์", "พาโอนา", "อีเปป", "เมสรา", "นาซี"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  long: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["เมสเคอเรม", "เตเกมท", "เฮดาร์", "ทาฮ์ซัส", "เทอร์", "เยคาทิท", "เมกาบิต", "เมียเซีย", "เจนบอต", "เซเน", "ฮัมเล", "เนแฮซ", "พากูเมน"],
                  long: ["เมสเคอเรม", "เตเกมท", "เฮดาร์", "ทาฮ์ซัส", "เทอร์", "เยคาทิท", "เมกาบิต", "เมียเซีย", "เจนบอต", "เซเน", "ฮัมเล", "เนแฮซ", "พากูเมน"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["เมสเคอเรม", "เตเกมท", "เฮดาร์", "ทาฮ์ซัส", "เทอร์", "เยคาทิท", "เมกาบิต", "เมียเซีย", "เจนบอต", "เซเน", "ฮัมเล", "เนแฮซ", "พากูเมน"],
                  long: ["เมสเคอเรม", "เตเกมท", "เฮดาร์", "ทาฮ์ซัส", "เทอร์", "เยคาทิท", "เมกาบิต", "เมียเซีย", "เจนบอต", "เซเน", "ฮัมเล", "เนแฮซ", "พากูเมน"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              gregory: {
                months: {
                  narrow: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                  short: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                  long: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["ก่อน ค.ศ.", "ค.ศ.", "ก.ส.ศ.", "ส.ศ."],
                  short: ["ปีก่อน ค.ศ.", "ค.ศ.", "ก.ส.ศ.", "ส.ศ."],
                  long: ["ปีก่อนคริสต์ศักราช", "คริสต์ศักราช", "ก่อนสามัญศักราช", "สามัญศักราช"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["ทิชรี", "เฮวาน", "กีสเลฟ", "เตเวต", "เชวัต", "อาดาร์ I", "อาดาร์", "นิสซาน", "อิยาร์", "สีวัน", "ตามูซ", "อัฟ", "เอลอุล", "อาดาร์ II"],
                  long: ["ทิชรี", "เฮวาน", "กีสเลฟ", "เตเวต", "เชวัต", "อาดาร์ I", "อาดาร์", "นิสซาน", "อิยาร์", "สีวัน", "ตามูซ", "อัฟ", "เอลอุล", "อาดาร์ II"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["ย.ศ."],
                  short: ["ย.ศ."],
                  long: ["ย.ศ."]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["จิตรา", "วิสาขา", "เชษฐา", "อัษฎา", "ศรวณา", "พัตรา", "อัศวิชา", "การติกา", "มฤคศิรา", "ปุษยา", "มาฆะ", "ผลคุณี"],
                  long: ["จิตรา", "วิสาขา", "เชษฐา", "อัษฎา", "ศรวณา", "พัตรา", "อัศวิชา", "การติกา", "มฤคศิรา", "ปุษยา", "มาฆะ", "ผลคุณี"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["ม.ศ."],
                  short: ["ม.ศ."],
                  long: ["ม.ศ."]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["มุฮัร.", "เศาะ.", "รอบี I", "รอบี II", "จุมาดา I", "จุมาดา II", "เราะ.", "ชะอ์.", "เราะมะ.", "เชาว.", "ซุลกิอฺ.", "ซุลหิจ."],
                  long: ["มุฮะร์รอม", "ซอฟาร์", "รอบี I", "รอบี II", "จุมาดา I", "จุมาดา II", "รอจับ", "ชะอะบาน", "รอมะดอน", "เชาวัล", "ซุลกิอฺดะฮฺ", "ซุลหิจญะฮฺ"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["ฮ.ศ."],
                  short: ["ฮ.ศ."],
                  long: ["ฮิจเราะห์ศักราช"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["มุฮัร.", "เศาะ.", "รอบี I", "รอบี II", "จุมาดา I", "จุมาดา II", "เราะ.", "ชะอ์.", "เราะมะ.", "เชาว.", "ซุลกิอฺ.", "ซุลหิจ."],
                  long: ["มุฮะร์รอม", "ซอฟาร์", "รอบี I", "รอบี II", "จุมาดา I", "จุมาดา II", "รอจับ", "ชะอะบาน", "รอมะดอน", "เชาวัล", "ซุลกิอฺดะฮฺ", "ซุลหิจญะฮฺ"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["ฮ.ศ."],
                  short: ["ฮ.ศ."],
                  long: ["ฮิจเราะห์ศักราช"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              japanese: {
                months: {
                  narrow: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                  short: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                  long: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["ทะอิกะ (645–650)", "ฮะกุชิ (650–671)", "ฮากุโฮ (672–686)", "ชุโช (686–701)", "ทะอิโฮ (701–704)", "เคอุง (704–708)", "วะโด (708–715)", "เรกิ (715–717)", "โยโร (717–724)", "จิงกิ (724–729)", "เท็มเพียว (729–749)", "เท็มเพียว-คัมโป (749-749)", "เท็มเพียว-โชโฮ (749-757)", "เท็มเพียว-โฮจิ (757-765)", "เท็มเพียว-จิงโงะ (765-767)", "จิงโงะ-เคอุง (767-770)", "โฮกิ (770–780)", "เท็นโอ (781–782)", "เอ็นเรียะกุ (782–806)", "ดะอิโด (806–810)", "โคนิง (810–824)", "เท็นโช (824–834)", "โชวะ (834–848)", "คะโจ (848–851)", "นินจุ (851–854)", "ซะอิโกะ (854–857)", "เท็นนัง (857–859)", "โจงัง (859–877)", "เก็งเก (877–885)", "นินนะ (885–889)", "คัมเพียว (889–898)", "โชตะอิ (898–901)", "เอ็งงิ (901–923)", "เอ็นโช (923–931)", "โชเฮ (931–938)", "เท็งเงียว (938–947)", "เท็นเรียะกุ (947–957)", "เท็นโตะกุ (957–961)", "โอวะ (961–964)", "โคโฮ (964–968)", "อันนะ (968–970)", "เท็นโระกุ (970–973)", "เท็นเอ็ง (973–976)", "โจเง็ง (976–978)", "เท็งเง็ง (978–983)", "เอกัง (983–985)", "คันนะ (985–987)", "เอเอ็ง (987–989)", "เอโซ (989–990)", "โชเรียะกุ (990–995)", "โชโตะกุ (995–999)", "โชโฮ (999–1004)", "คันโก (1004–1012)", "โชวะ (1012–1017)", "คันนิง (1017–1021)", "จิอัง (1021–1024)", "มันจุ (1024–1028)", "โชเง็ง (1028–1037)", "โชเรียะกุ (1037–1040)", "โชคีว (1040–1044)", "คันโตะกุ (1044–1046)", "เอโช (1046–1053)", "เท็งงิ (1053–1058)", "โคเฮ (1058–1065)", "จิเรียะกุ (1065–1069)", "เอ็งคีว (1069–1074)", "โชโฮ (1074–1077)", "โชเรียะกุ (1077–1081)", "เอโฮะ (1081–1084)", "โอโตะกุ (1084–1087)", "คันจิ (1087–1094)", "คะโฮะ (1094–1096)", "เอโช (1096–1097)", "โชโตะกุ (1097–1099)", "โควะ (1099–1104)", "โชจิ (1104–1106)", "คะโช (1106–1108)", "เท็นนิง (1108–1110)", "เท็นเอ (1110–1113)", "เอกีว (1113–1118)", "เก็นเอ (1118–1120)", "โฮะอัง (1120–1124)", "เท็นจิ (1124–1126)", "ดะอิจิ (1126–1131)", "เท็นโช (1131–1132)", "โชโช (1132–1135)", "โฮะเอ็ง (1135–1141)", "เอจิ (1141–1142)", "โคจิ (1142–1144)", "เท็นโย (1144–1145)", "คีวอัง (1145–1151)", "นิมเป (1151–1154)", "คีวจุ (1154–1156)", "โฮะเง็ง (1156–1159)", "เฮจิ (1159–1160)", "เอเรียะกุ (1160–1161)", "โอโฮ (1161–1163)", "โชกัง (1163–1165)", "เอมัง (1165–1166)", "นินอัง (1166–1169)", "คะโอ (1169–1171)", "โชอัง (1171–1175)", "อังเง็ง (1175–1177)", "จิโช (1177–1181)", "โยวะ (1181–1182)", "จุเอ (1182–1184)", "เก็นเรียะกุ (1184–1185)", "บุนจิ (1185–1190)", "เค็งกีว (1190–1199)", "โชจิ (1199–1201)", "เค็นนิง (1201–1204)", "เก็งกีว (1204–1206)", "เค็นเอ (1206–1207)", "โชเก็ง (1207–1211)", "เค็นเรียะกุ (1211–1213)", "เค็มโป (1213–1219)", "โชกีว (1219–1222)", "โจโอ (1222–1224)", "เก็นนิง (1224–1225)", "คะโระกุ (1225–1227)", "อันเต (1227–1229)", "คังกิ (1229–1232)", "โจเอ (1232–1233)", "เท็มปุกุ (1233–1234)", "บุนเรียะกุ (1234–1235)", "คะเต (1235–1238)", "เรียะกุนิง (1238–1239)", "เอ็นโอ (1239–1240)", "นินจิ (1240–1243)", "คังเง็ง (1243–1247)", "โฮจิ (1247–1249)", "เค็นโช (1249–1256)", "โคเง็ง (1256–1257)", "โชกะ (1257–1259)", "โชเง็ง (1259–1260)", "บุนโอ (1260–1261)", "โคโช (1261–1264)", "บุนเอ (1264–1275)", "เค็นจิ (1275–1278)", "โคอัง (1278–1288)", "โชโอ (1288–1293)", "เอนิง (1293–1299)", "โชอัง (1299–1302)", "เค็งเง็ง (1302–1303)", "คะเง็ง (1303–1306)", "โทะกุจิ (1306–1308)", "เอ็งเก (1308–1311)", "โอโช (1311–1312)", "โชวะ (1312–1317)", "บุมโป (1317–1319)", "เก็นโอ (1319–1321)", "เก็งเกียว (1321–1324)", "โชชู (1324–1326)", "คะเระกิ (1326–1329)", "เก็นโตะกุ (1329–1331)", "เก็งโก (1331–1334)", "เค็มมุ (1334–1336)", "เอ็งเง็ง (1336–1340)", "โคโกะกุ (1340–1346)", "โชเฮ (1346–1370)", "เค็นโตะกุ (1370–1372)", "บุนชู (1372–1375)", "เท็นจุ (1375–1379)", "โคเรียะกุ (1379–1381)", "โควะ (1381–1384)", "เก็นชู (1384–1392)", "เมโตะกุ (1384–1387)", "คะเค (1387–1389)", "โคโอ (1389–1390)", "เมโตะกุ (1390–1394)", "โอเอ (1394–1428)", "โชโช (1428–1429)", "เอเกียว (1429–1441)", "คะกิสึ (1441–1444)", "บุนอัง (1444–1449)", "โฮโตะกุ (1449–1452)", "เคียวโตะกุ (1452–1455)", "โคโช (1455–1457)", "โชโระกุ (1457–1460)", "คันโช (1460–1466)", "บุนโช (1466–1467)", "โอนิง (1467–1469)", "บุมเม (1469–1487)", "โชเกียว (1487–1489)", "เอ็นโตะกุ (1489–1492)", "เมโอ (1492–1501)", "บุงกิ (1501–1504)", "เอโช (1504–1521)", "ทะอิเอ (1521–1528)", "เคียวโระกุ (1528–1532)", "เท็มมน (1532–1555)", "โคจิ (1555–1558)", "เอโระกุ (1558–1570)", "เก็งกิ (1570–1573)", "เท็นโช (1573–1592)", "บุนโระกุ (1592–1596)", "เคโช (1596–1615)", "เก็งวะ (1615–1624)", "คันเอ (1624–1644)", "โชโฮ (1644–1648)", "เคอัง (1648–1652)", "โชโอ (1652–1655)", "เมเรียะกุ (1655–1658)", "มันจิ (1658–1661)", "คัมบุง (1661–1673)", "เอ็มโป (1673–1681)", "เท็นวะ (1681–1684)", "โจเกียว (1684–1688)", "เก็นโระกุ (1688–1704)", "โฮเอ (1704–1711)", "โชโตะกุ (1711–1716)", "เคียวโฮ (1716–1736)", "เก็มบุง (1736–1741)", "คัมโป (1741–1744)", "เอ็งเกียว (1744–1748)", "คันเอ็ง (1748–1751)", "โฮเรียะกุ (1751–1764)", "เมวะ (1764–1772)", "อันเอ (1772–1781)", "เท็มเม (1781–1789)", "คันเซ (1789–1801)", "เคียววะ (1801–1804)", "บุงกะ (1804–1818)", "บุนเซ (1818–1830)", "เท็มโป (1830–1844)", "โคกะ (1844–1848)", "คะเอ (1848–1854)", "อันเซ (1854–1860)", "มันเอ็ง (1860–1861)", "บุงกีว (1861–1864)", "เก็นจิ (1864–1865)", "เคโอ (1865–1868)", "เมจิ", "ทะอิโช", "โชวะ", "เฮเซ"],
                  long: ["ทะอิกะ (645–650)", "ฮะกุชิ (650–671)", "ฮากุโฮ (672–686)", "ชุโช (686–701)", "ทะอิโฮ (701–704)", "เคอุง (704–708)", "วะโด (708–715)", "เรกิ (715–717)", "โยโร (717–724)", "จิงกิ (724–729)", "เท็มเพียว (729–749)", "เท็มเพียว-คัมโป (749-749)", "เท็มเพียว-โชโฮ (749-757)", "เท็มเพียว-โฮจิ (757-765)", "เท็มเพียว-จิงโงะ (765-767)", "จิงโงะ-เคอุง (767-770)", "โฮกิ (770–780)", "เท็นโอ (781–782)", "เอ็นเรียะกุ (782–806)", "ดะอิโด (806–810)", "โคนิง (810–824)", "เท็นโช (824–834)", "โชวะ (834–848)", "คะโจ (848–851)", "นินจุ (851–854)", "ซะอิโกะ (854–857)", "เท็นนัง (857–859)", "โจงัง (859–877)", "เก็งเก (877–885)", "นินนะ (885–889)", "คัมเพียว (889–898)", "โชตะอิ (898–901)", "เอ็งงิ (901–923)", "เอ็นโช (923–931)", "โชเฮ (931–938)", "เท็งเงียว (938–947)", "เท็นเรียะกุ (947–957)", "เท็นโตะกุ (957–961)", "โอวะ (961–964)", "โคโฮ (964–968)", "อันนะ (968–970)", "เท็นโระกุ (970–973)", "เท็นเอ็ง (973–976)", "โจเง็ง (976–978)", "เท็งเง็ง (978–983)", "เอกัง (983–985)", "คันนะ (985–987)", "เอเอ็ง (987–989)", "เอโซ (989–990)", "โชเรียะกุ (990–995)", "โชโตะกุ (995–999)", "โชโฮ (999–1004)", "คันโก (1004–1012)", "โชวะ (1012–1017)", "คันนิง (1017–1021)", "จิอัง (1021–1024)", "มันจุ (1024–1028)", "โชเง็ง (1028–1037)", "โชเรียะกุ (1037–1040)", "โชคีว (1040–1044)", "คันโตะกุ (1044–1046)", "เอโช (1046–1053)", "เท็งงิ (1053–1058)", "โคเฮ (1058–1065)", "จิเรียะกุ (1065–1069)", "เอ็งคีว (1069–1074)", "โชโฮ (1074–1077)", "โชเรียะกุ (1077–1081)", "เอโฮะ (1081–1084)", "โอโตะกุ (1084–1087)", "คันจิ (1087–1094)", "คะโฮะ (1094–1096)", "เอโช (1096–1097)", "โชโตะกุ (1097–1099)", "โควะ (1099–1104)", "โชจิ (1104–1106)", "คะโช (1106–1108)", "เท็นนิง (1108–1110)", "เท็นเอ (1110–1113)", "เอกีว (1113–1118)", "เก็นเอ (1118–1120)", "โฮะอัง (1120–1124)", "เท็นจิ (1124–1126)", "ดะอิจิ (1126–1131)", "เท็นโช (1131–1132)", "โชโช (1132–1135)", "โฮะเอ็ง (1135–1141)", "เอจิ (1141–1142)", "โคจิ (1142–1144)", "เท็นโย (1144–1145)", "คีวอัง (1145–1151)", "นิมเป (1151–1154)", "คีวจุ (1154–1156)", "โฮะเง็ง (1156–1159)", "เฮจิ (1159–1160)", "เอเรียะกุ (1160–1161)", "โอโฮ (1161–1163)", "โชกัง (1163–1165)", "เอมัง (1165–1166)", "นินอัง (1166–1169)", "คะโอ (1169–1171)", "โชอัง (1171–1175)", "อังเง็ง (1175–1177)", "จิโช (1177–1181)", "โยวะ (1181–1182)", "จุเอ (1182–1184)", "เก็นเรียะกุ (1184–1185)", "บุนจิ (1185–1190)", "เค็งกีว (1190–1199)", "โชจิ (1199–1201)", "เค็นนิง (1201–1204)", "เก็งกีว (1204–1206)", "เค็นเอ (1206–1207)", "โชเก็ง (1207–1211)", "เค็นเรียะกุ (1211–1213)", "เค็มโป (1213–1219)", "โชกีว (1219–1222)", "โจโอ (1222–1224)", "เก็นนิง (1224–1225)", "คะโระกุ (1225–1227)", "อันเต (1227–1229)", "คังกิ (1229–1232)", "โจเอ (1232–1233)", "เท็มปุกุ (1233–1234)", "บุนเรียะกุ (1234–1235)", "คะเต (1235–1238)", "เรียะกุนิง (1238–1239)", "เอ็นโอ (1239–1240)", "นินจิ (1240–1243)", "คังเง็ง (1243–1247)", "โฮจิ (1247–1249)", "เค็นโช (1249–1256)", "โคเง็ง (1256–1257)", "โชกะ (1257–1259)", "โชเง็ง (1259–1260)", "บุนโอ (1260–1261)", "โคโช (1261–1264)", "บุนเอ (1264–1275)", "เค็นจิ (1275–1278)", "โคอัง (1278–1288)", "โชโอ (1288–1293)", "เอนิง (1293–1299)", "โชอัง (1299–1302)", "เค็งเง็ง (1302–1303)", "คะเง็ง (1303–1306)", "โทะกุจิ (1306–1308)", "เอ็งเก (1308–1311)", "โอโช (1311–1312)", "โชวะ (1312–1317)", "บุมโป (1317–1319)", "เก็นโอ (1319–1321)", "เก็งเกียว (1321–1324)", "โชชู (1324–1326)", "คะเระกิ (1326–1329)", "เก็นโตะกุ (1329–1331)", "เก็งโก (1331–1334)", "เค็มมุ (1334–1336)", "เอ็งเง็ง (1336–1340)", "โคโกะกุ (1340–1346)", "โชเฮ (1346–1370)", "เค็นโตะกุ (1370–1372)", "บุนชู (1372–1375)", "เท็นจุ (1375–1379)", "โคเรียะกุ (1379–1381)", "โควะ (1381–1384)", "เก็นชู (1384–1392)", "เมโตะกุ (1384–1387)", "คะเค (1387–1389)", "โคโอ (1389–1390)", "เมโตะกุ (1390–1394)", "โอเอ (1394–1428)", "โชโช (1428–1429)", "เอเกียว (1429–1441)", "คะกิสึ (1441–1444)", "บุนอัง (1444–1449)", "โฮโตะกุ (1449–1452)", "เคียวโตะกุ (1452–1455)", "โคโช (1455–1457)", "โชโระกุ (1457–1460)", "คันโช (1460–1466)", "บุนโช (1466–1467)", "โอนิง (1467–1469)", "บุมเม (1469–1487)", "โชเกียว (1487–1489)", "เอ็นโตะกุ (1489–1492)", "เมโอ (1492–1501)", "บุงกิ (1501–1504)", "เอโช (1504–1521)", "ทะอิเอ (1521–1528)", "เคียวโระกุ (1528–1532)", "เท็มมน (1532–1555)", "โคจิ (1555–1558)", "เอโระกุ (1558–1570)", "เก็งกิ (1570–1573)", "เท็นโช (1573–1592)", "บุนโระกุ (1592–1596)", "เคโช (1596–1615)", "เก็งวะ (1615–1624)", "คันเอ (1624–1644)", "โชโฮ (1644–1648)", "เคอัง (1648–1652)", "โชโอ (1652–1655)", "เมเรียะกุ (1655–1658)", "มันจิ (1658–1661)", "คัมบุง (1661–1673)", "เอ็มโป (1673–1681)", "เท็นวะ (1681–1684)", "โจเกียว (1684–1688)", "เก็นโระกุ (1688–1704)", "โฮเอ (1704–1711)", "โชโตะกุ (1711–1716)", "เคียวโฮ (1716–1736)", "เก็มบุง (1736–1741)", "คัมโป (1741–1744)", "เอ็งเกียว (1744–1748)", "คันเอ็ง (1748–1751)", "โฮเรียะกุ (1751–1764)", "เมวะ (1764–1772)", "อันเอ (1772–1781)", "เท็มเม (1781–1789)", "คันเซ (1789–1801)", "เคียววะ (1801–1804)", "บุงกะ (1804–1818)", "บุนเซ (1818–1830)", "เท็มโป (1830–1844)", "โคกะ (1844–1848)", "คะเอ (1848–1854)", "อันเซ (1854–1860)", "มันเอ็ง (1860–1861)", "บุงกีว (1861–1864)", "เก็นจิ (1864–1865)", "เคโอ (1865–1868)", "เมจิ", "ทะอิโช", "โชวะ", "เฮเซ"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["ฟาร์วาร์ดิน", "ออร์ดิเบเฮชต์", "คอร์แดด", "เตอร์", "มอร์แดด", "ชาหริวาร์", "เมฮร์", "อะบาน", "อะซาร์", "เดย์", "บาฮ์มาน", "เอสฟานด์"],
                  long: ["ฟาร์วาร์ดิน", "ออร์ดิเบเฮชต์", "คอร์แดด", "เตอร์", "มอร์แดด", "ชาหริวาร์", "เมฮร์", "อะบาน", "อะซาร์", "เดย์", "บาฮ์มาน", "เอสฟานด์"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["ปีเปอร์เซีย"],
                  short: ["ปีเปอร์เซีย"],
                  long: ["ปีเปอร์เซีย"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              },
              roc: {
                months: {
                  narrow: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                  short: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
                  long: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
                },
                days: {
                  narrow: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
                  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
                  long: ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"]
                },
                eras: {
                  narrow: ["ปีก่อนไต้หวัน", "ไต้หวัน"],
                  short: ["ปีก่อนไต้หวัน", "ไต้หวัน"],
                  long: ["ปีก่อนไต้หวัน", "ไต้หวัน"]
                },
                dayPeriods: {
                  am: "ก่อนเที่ยง",
                  pm: "หลังเที่ยง"
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
              },
              percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
              }
            },
            symbols: {
              latn: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              },
              thai: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              AUD: "AU$",
              BRL: "R$",
              CAD: "CA$",
              CNY: "CN¥",
              EUR: "€",
              GBP: "£",
              HKD: "HK$",
              ILS: "₪",
              INR: "₹",
              JPY: "¥",
              KRW: "₩",
              MXN: "MX$",
              NZD: "NZ$",
              TWD: "NT$",
              USD: "US$",
              VND: "₫",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF"
            }
          }
        })
      },
      787: function() {
        IntlPolyfill.__addLocaleData({
          locale: "tr",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !1,
            formats: {
              short: "{1} {0}",
              medium: "{1} {0}",
              full: "{1} {0}",
              long: "{1} {0}",
              availableFormats: {
                d: "d",
                E: "ccc",
                Ed: "d E",
                Ehm: "E a h:mm",
                EHm: "E HH:mm",
                Ehms: "E a h:mm:ss",
                EHms: "E HH:mm:ss",
                Gy: "G y",
                GyMMM: "G MMM y",
                GyMMMd: "G dd MMM y",
                GyMMMEd: "G d MMM y E",
                h: "a h",
                H: "HH",
                hm: "a h:mm",
                Hm: "HH:mm",
                hms: "a h:mm:ss",
                Hms: "HH:mm:ss",
                hmsv: "a h:mm:ss v",
                Hmsv: "HH:mm:ss v",
                hmv: "a h:mm v",
                Hmv: "HH:mm v",
                M: "L",
                Md: "dd/MM",
                MEd: "dd/MM E",
                MMM: "LLL",
                MMMd: "d MMM",
                MMMEd: "d MMMM E",
                MMMMd: "dd MMMM",
                MMMMEd: "dd MMMM E",
                mmss: "mm:ss",
                ms: "mm:ss",
                y: "y",
                yM: "MM/y",
                yMd: "dd.MM.y",
                yMEd: "dd.MM.y E",
                yMM: "MM.y",
                yMMM: "MMM y",
                yMMMd: "dd MMM y",
                yMMMEd: "d MMM y E",
                yMMMM: "MMMM y",
                yQQQ: "y/QQQ",
                yQQQQ: "y/QQQQ"
              },
              dateFormats: {
                yMMMMEEEEd: "d MMMM y EEEE",
                yMMMMd: "d MMMM y",
                yMMMd: "d MMM y",
                yMd: "d.MM.y"
              },
              timeFormats: {
                hmmsszzzz: "HH:mm:ss zzzz",
                hmsz: "HH:mm:ss z",
                hms: "HH:mm:ss",
                hm: "HH:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
                  short: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                  long: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["BE"],
                  short: ["BE"],
                  long: ["BE"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              chinese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Tût", "Bâbe", "Hatur", "Keyhek", "Tûbe", "Imşir", "Bermuhat", "Bermude", "Peyştes", "Bune", "Ebip", "Mısrî", "Nesî"],
                  long: ["Tût", "Bâbe", "Hatur", "Keyhek", "Tûbe", "Imşir", "Bermuhat", "Bermude", "Peyştes", "Bune", "Ebip", "Mısrî", "Nesî"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              dangi: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tikimt", "Hidar", "Tahsas", "Tir", "Yakatit", "Magabit", "Miyazya", "Ginbot", "Sene", "Hamle", "Nehasa", "Pagumiene"],
                  long: ["Meskerem", "Tikimt", "Hidar", "Tahsas", "Tir", "Yakatit", "Magabit", "Miyazya", "Ginbot", "Sene", "Hamle", "Nehasa", "Pagumiene"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["Meskerem", "Tikimt", "Hidar", "Tahsas", "Tir", "Yakatit", "Magabit", "Miyazya", "Ginbot", "Sene", "Hamle", "Nehasa", "Pagumiene"],
                  long: ["Meskerem", "Tikimt", "Hidar", "Tahsas", "Tir", "Yakatit", "Magabit", "Miyazya", "Ginbot", "Sene", "Hamle", "Nehasa", "Pagumiene"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              gregory: {
                months: {
                  narrow: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
                  short: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                  long: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["MÖ", "MS", "İÖ", "İS"],
                  short: ["MÖ", "MS", "İÖ", "İS"],
                  long: ["Milattan Önce", "Milattan Sonra", "İsa’dan Önce", "İsa’dan Sonra"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["Tişri", "Heşvan", "Kislev", "Tevet", "Şevat", "Veadar", "Adar", "Nisan", "İyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"],
                  long: ["Tişri", "Heşvan", "Kislev", "Tevet", "Şevat", "Veadar", "Adar", "Nisan", "İyar", "Sivan", "Tamuz", "Av", "Elul", "Adar II"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["AM"],
                  short: ["AM"],
                  long: ["AM"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"],
                  long: ["Chaitra", "Vaisakha", "Jyaistha", "Asadha", "Sravana", "Bhadra", "Asvina", "Kartika", "Agrahayana", "Pausa", "Magha", "Phalguna"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["Saka"],
                  short: ["Saka"],
                  long: ["Saka"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muharrem", "Safer", "Rebiülevvel", "Rebiülahir", "Cemaziyelevvel", "Cemaziyelahir", "Recep", "Şaban", "Ramazan", "Şevval", "Zilkade", "Zilhicce"],
                  long: ["Muharrem", "Safer", "Rebiülevvel", "Rebiülahir", "Cemaziyelevvel", "Cemaziyelahir", "Recep", "Şaban", "Ramazan", "Şevval", "Zilkade", "Zilhicce"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["Hicri"],
                  short: ["Hicri"],
                  long: ["Hicri"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Muharrem", "Safer", "Rebiülevvel", "Rebiülahir", "Cemaziyelevvel", "Cemaziyelahir", "Recep", "Şaban", "Ramazan", "Şevval", "Zilkade", "Zilhicce"],
                  long: ["Muharrem", "Safer", "Rebiülevvel", "Rebiülahir", "Cemaziyelevvel", "Cemaziyelahir", "Recep", "Şaban", "Ramazan", "Şevval", "Zilkade", "Zilhicce"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["Hicri"],
                  short: ["Hicri"],
                  long: ["Hicri"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              japanese: {
                months: {
                  narrow: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
                  short: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                  long: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"],
                  long: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "Meiji", "Taishō", "Shōwa", "Heisei"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["Ferverdin", "Ordibeheşt", "Hordad", "Tir", "Mordad", "Şehriver", "Mehr", "Aban", "Azer", "Dey", "Behmen", "Esfend"],
                  long: ["Ferverdin", "Ordibeheşt", "Hordad", "Tir", "Mordad", "Şehriver", "Mehr", "Aban", "Azer", "Dey", "Behmen", "Esfend"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["AP"],
                  short: ["AP"],
                  long: ["AP"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              },
              roc: {
                months: {
                  narrow: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
                  short: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
                  long: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]
                },
                days: {
                  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
                  short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
                  long: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
                },
                eras: {
                  narrow: ["Before R.O.C.", "Minguo"],
                  short: ["Before R.O.C.", "Minguo"],
                  long: ["Before R.O.C.", "Minguo"]
                },
                dayPeriods: {
                  am: "ÖÖ",
                  pm: "ÖS"
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{number} {currency}",
                negativePattern: "{minusSign}{number} {currency}"
              },
              percent: {
                positivePattern: "{percentSign}{number}",
                negativePattern: "{minusSign}{percentSign}{number}"
              }
            },
            symbols: {
              latn: {
                decimal: ",",
                group: ".",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              AUD: "AU$",
              BRL: "R$",
              CAD: "CA$",
              CNY: "CN¥",
              EUR: "€",
              GBP: "£",
              HKD: "HK$",
              ILS: "₪",
              INR: "₹",
              JPY: "¥",
              KRW: "₩",
              MXN: "MX$",
              NZD: "NZ$",
              THB: "฿",
              TRY: "₺",
              TWD: "NT$",
              USD: "$",
              VND: "₫",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF"
            }
          }
        })
      },
      3606: function() {
        IntlPolyfill.__addLocaleData({
          locale: "zh-Hans-CN",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !0,
            formats: {
              short: "{1} {0}",
              medium: "{1} {0}",
              full: "{1} {0}",
              long: "{1} {0}",
              availableFormats: {
                d: "d日",
                E: "ccc",
                Ed: "d日E",
                Ehm: "E ah:mm",
                EHm: "EHH:mm",
                Ehms: "E ah:mm:ss",
                EHms: "EHH:mm:ss",
                Gy: "Gy年",
                GyMMM: "Gy年M月",
                GyMMMd: "Gy年M月d日",
                GyMMMEd: "Gy年M月d日E",
                h: "ah时",
                H: "H时",
                hm: "ah:mm",
                Hm: "HH:mm",
                hms: "ah:mm:ss",
                Hms: "HH:mm:ss",
                hmsv: "v ah:mm:ss",
                Hmsv: "v HH:mm:ss",
                hmv: "v ah:mm",
                Hmv: "v HH:mm",
                M: "M月",
                Md: "M/d",
                MEd: "M/dE",
                MMdd: "MM/dd",
                MMM: "LLL",
                MMMd: "M月d日",
                MMMEd: "M月d日E",
                MMMMd: "M月d日",
                ms: "mm:ss",
                y: "y年",
                yM: "y年M月",
                yMd: "y/M/d",
                yMEd: "y/M/dE",
                yMM: "y年M月",
                yMMM: "y年M月",
                yMMMd: "y年M月d日",
                yMMMEd: "y年M月d日E",
                yMMMM: "y年M月",
                yQQQ: "y年第Q季度",
                yQQQQ: "y年第Q季度"
              },
              dateFormats: {
                yMMMMEEEEd: "y年M月d日EEEE",
                yMMMMd: "y年M月d日",
                yMMMd: "y年M月d日",
                yMd: "y/M/d"
              },
              timeFormats: {
                hmmsszzzz: "zzzz ah:mm:ss",
                hmsz: "z ah:mm:ss",
                hms: "ah:mm:ss",
                hm: "ah:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["佛历"],
                  short: ["佛历"],
                  long: ["佛历"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              chinese: {
                months: {
                  narrow: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
                  short: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"],
                  long: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月"],
                  long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", "十三月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              dangi: {
                months: {
                  narrow: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"],
                  short: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"],
                  long: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月"],
                  long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", "十三月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月"],
                  long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", "十三月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              gregory: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["公元前", "公元", "西元前", "西元"],
                  short: ["公元前", "公元", "西元前", "西元"],
                  long: ["公元前", "公元", "西元前", "西元"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月", "闰7月"],
                  long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", "十三月", "闰七月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["希伯来历"],
                  short: ["希伯来历"],
                  long: ["希伯来历"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["印度历"],
                  short: ["印度历"],
                  long: ["印度历"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["伊斯兰历"],
                  short: ["伊斯兰历"],
                  long: ["伊斯兰历"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["伊斯兰历"],
                  short: ["伊斯兰历"],
                  long: ["伊斯兰历"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              japanese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["大化 (645–650)", "白雉 (650–671)", "白凤 (672–686)", "朱鸟 (686–701)", "大宝 (701–704)", "庆云 (704–708)", "和铜 (708–715)", "灵龟 (715–717)", "养老 (717–724)", "神龟 (724–729)", "天平 (729–749)", "天平感宝 (749–749)", "天平胜宝 (749–757)", "天平宝字 (757–765)", "天平神护 (765–767)", "神护景云 (767–770)", "宝龟 (770–780)", "天应 (781–782)", "延历 (782–806)", "大同 (806–810)", "弘仁 (810–824)", "天长 (824–834)", "承和 (834–848)", "嘉祥 (848–851)", "仁寿 (851–854)", "齐衡 (854–857)", "天安 (857–859)", "贞观 (859–877)", "元庆 (877–885)", "仁和 (885–889)", "宽平 (889–898)", "昌泰 (898–901)", "延喜 (901–923)", "延长 (923–931)", "承平 (931–938)", "天庆 (938–947)", "天历 (947–957)", "天德 (957–961)", "应和 (961–964)", "康保 (964–968)", "安和 (968–970)", "天禄 (970–973)", "天延 (973–976)", "贞元 (976–978)", "天元 (978–983)", "永观 (983–985)", "宽和 (985–987)", "永延 (987–989)", "永祚 (989–990)", "正历 (990–995)", "长德 (995–999)", "长保 (999–1004)", "宽弘 (1004–1012)", "长和 (1012–1017)", "宽仁 (1017–1021)", "治安 (1021–1024)", "万寿 (1024–1028)", "长元 (1028–1037)", "长历 (1037–1040)", "长久 (1040–1044)", "宽德 (1044–1046)", "永承 (1046–1053)", "天喜 (1053–1058)", "康平 (1058–1065)", "治历 (1065–1069)", "延久 (1069–1074)", "承保 (1074–1077)", "正历 (1077–1081)", "永保 (1081–1084)", "应德 (1084–1087)", "宽治 (1087–1094)", "嘉保 (1094–1096)", "永长 (1096–1097)", "承德 (1097–1099)", "康和 (1099–1104)", "长治 (1104–1106)", "嘉承 (1106–1108)", "天仁 (1108–1110)", "天永 (1110–1113)", "永久 (1113–1118)", "元永 (1118–1120)", "保安 (1120–1124)", "天治 (1124–1126)", "大治 (1126–1131)", "天承 (1131–1132)", "长承 (1132–1135)", "保延 (1135–1141)", "永治 (1141–1142)", "康治 (1142–1144)", "天养 (1144–1145)", "久安 (1145–1151)", "仁平 (1151–1154)", "久寿 (1154–1156)", "保元 (1156–1159)", "平治 (1159–1160)", "永历 (1160–1161)", "应保 (1161–1163)", "长宽 (1163–1165)", "永万 (1165–1166)", "仁安 (1166–1169)", "嘉应 (1169–1171)", "承安 (1171–1175)", "安元 (1175–1177)", "治承 (1177–1181)", "养和 (1181–1182)", "寿永 (1182–1184)", "元历 (1184–1185)", "文治 (1185–1190)", "建久 (1190–1199)", "正治 (1199–1201)", "建仁 (1201–1204)", "元久 (1204–1206)", "建永 (1206–1207)", "承元 (1207–1211)", "建历 (1211–1213)", "建保 (1213–1219)", "承久 (1219–1222)", "贞应 (1222–1224)", "元仁 (1224–1225)", "嘉禄 (1225–1227)", "安贞 (1227–1229)", "宽喜 (1229–1232)", "贞永 (1232–1233)", "天福 (1233–1234)", "文历 (1234–1235)", "嘉祯 (1235–1238)", "历仁 (1238–1239)", "延应 (1239–1240)", "仁治 (1240–1243)", "宽元 (1243–1247)", "宝治 (1247–1249)", "建长 (1249–1256)", "康元 (1256–1257)", "正嘉 (1257–1259)", "正元 (1259–1260)", "文应 (1260–1261)", "弘长 (1261–1264)", "文永 (1264–1275)", "建治 (1275–1278)", "弘安 (1278–1288)", "正应 (1288–1293)", "永仁 (1293–1299)", "正安 (1299–1302)", "干元 (1302–1303)", "嘉元 (1303–1306)", "德治 (1306–1308)", "延庆 (1308–1311)", "应长 (1311–1312)", "正和 (1312–1317)", "文保 (1317–1319)", "元应 (1319–1321)", "元亨 (1321–1324)", "正中 (1324–1326)", "嘉历 (1326–1329)", "元德 (1329–1331)", "元弘 (1331–1334)", "建武 (1334–1336)", "延元 (1336–1340)", "兴国 (1340–1346)", "正平 (1346–1370)", "建德 (1370–1372)", "文中 (1372–1375)", "天授 (1375–1379)", "康历 (1379–1381)", "弘和 (1381–1384)", "元中 (1384–1392)", "至德 (1384–1387)", "嘉庆 (1387–1389)", "康应 (1389–1390)", "明德 (1390–1394)", "应永 (1394–1428)", "正长 (1428–1429)", "永享 (1429–1441)", "嘉吉 (1441–1444)", "文安 (1444–1449)", "宝德 (1449–1452)", "享德 (1452–1455)", "康正 (1455–1457)", "长禄 (1457–1460)", "宽正 (1460–1466)", "文正 (1466–1467)", "应仁 (1467–1469)", "文明 (1469–1487)", "长享 (1487–1489)", "延德 (1489–1492)", "明应 (1492–1501)", "文龟 (1501–1504)", "永正 (1504–1521)", "大永 (1521–1528)", "享禄 (1528–1532)", "天文 (1532–1555)", "弘治 (1555–1558)", "永禄 (1558–1570)", "元龟 (1570–1573)", "天正 (1573–1592)", "文禄 (1592–1596)", "庆长 (1596–1615)", "元和 (1615–1624)", "宽永 (1624–1644)", "正保 (1644–1648)", "庆安 (1648–1652)", "承应 (1652–1655)", "明历 (1655–1658)", "万治 (1658–1661)", "宽文 (1661–1673)", "延宝 (1673–1681)", "天和 (1681–1684)", "贞享 (1684–1688)", "元禄 (1688–1704)", "宝永 (1704–1711)", "正德 (1711–1716)", "享保 (1716–1736)", "元文 (1736–1741)", "宽保 (1741–1744)", "延享 (1744–1748)", "宽延 (1748–1751)", "宝历 (1751–1764)", "明和 (1764–1772)", "安永 (1772–1781)", "天明 (1781–1789)", "宽政 (1789–1801)", "享和 (1801–1804)", "文化 (1804–1818)", "文政 (1818–1830)", "天保 (1830–1844)", "弘化 (1844–1848)", "嘉永 (1848–1854)", "安政 (1854–1860)", "万延 (1860–1861)", "文久 (1861–1864)", "元治 (1864–1865)", "庆应 (1865–1868)", "明治", "大正", "昭和", "平成"],
                  long: ["大化 (645–650)", "白雉 (650–671)", "白凤 (672–686)", "朱鸟 (686–701)", "大宝 (701–704)", "庆云 (704–708)", "和铜 (708–715)", "灵龟 (715–717)", "养老 (717–724)", "神龟 (724–729)", "天平 (729–749)", "天平感宝 (749–749)", "天平胜宝 (749–757)", "天平宝字 (757–765)", "天平神护 (765–767)", "神护景云 (767–770)", "宝龟 (770–780)", "天应 (781–782)", "延历 (782–806)", "大同 (806–810)", "弘仁 (810–824)", "天长 (824–834)", "承和 (834–848)", "嘉祥 (848–851)", "仁寿 (851–854)", "齐衡 (854–857)", "天安 (857–859)", "贞观 (859–877)", "元庆 (877–885)", "仁和 (885–889)", "宽平 (889–898)", "昌泰 (898–901)", "延喜 (901–923)", "延长 (923–931)", "承平 (931–938)", "天庆 (938–947)", "天历 (947–957)", "天德 (957–961)", "应和 (961–964)", "康保 (964–968)", "安和 (968–970)", "天禄 (970–973)", "天延 (973–976)", "贞元 (976–978)", "天元 (978–983)", "永观 (983–985)", "宽和 (985–987)", "永延 (987–989)", "永祚 (989–990)", "正历 (990–995)", "长德 (995–999)", "长保 (999–1004)", "宽弘 (1004–1012)", "长和 (1012–1017)", "宽仁 (1017–1021)", "治安 (1021–1024)", "万寿 (1024–1028)", "长元 (1028–1037)", "长历 (1037–1040)", "长久 (1040–1044)", "宽德 (1044–1046)", "永承 (1046–1053)", "天喜 (1053–1058)", "康平 (1058–1065)", "治历 (1065–1069)", "延久 (1069–1074)", "承保 (1074–1077)", "正历 (1077–1081)", "永保 (1081–1084)", "应德 (1084–1087)", "宽治 (1087–1094)", "嘉保 (1094–1096)", "永长 (1096–1097)", "承德 (1097–1099)", "康和 (1099–1104)", "长治 (1104–1106)", "嘉承 (1106–1108)", "天仁 (1108–1110)", "天永 (1110–1113)", "永久 (1113–1118)", "元永 (1118–1120)", "保安 (1120–1124)", "天治 (1124–1126)", "大治 (1126–1131)", "天承 (1131–1132)", "长承 (1132–1135)", "保延 (1135–1141)", "永治 (1141–1142)", "康治 (1142–1144)", "天养 (1144–1145)", "久安 (1145–1151)", "仁平 (1151–1154)", "久寿 (1154–1156)", "保元 (1156–1159)", "平治 (1159–1160)", "永历 (1160–1161)", "应保 (1161–1163)", "长宽 (1163–1165)", "永万 (1165–1166)", "仁安 (1166–1169)", "嘉应 (1169–1171)", "承安 (1171–1175)", "安元 (1175–1177)", "治承 (1177–1181)", "养和 (1181–1182)", "寿永 (1182–1184)", "元历 (1184–1185)", "文治 (1185–1190)", "建久 (1190–1199)", "正治 (1199–1201)", "建仁 (1201–1204)", "元久 (1204–1206)", "建永 (1206–1207)", "承元 (1207–1211)", "建历 (1211–1213)", "建保 (1213–1219)", "承久 (1219–1222)", "贞应 (1222–1224)", "元仁 (1224–1225)", "嘉禄 (1225–1227)", "安贞 (1227–1229)", "宽喜 (1229–1232)", "贞永 (1232–1233)", "天福 (1233–1234)", "文历 (1234–1235)", "嘉祯 (1235–1238)", "历仁 (1238–1239)", "延应 (1239–1240)", "仁治 (1240–1243)", "宽元 (1243–1247)", "宝治 (1247–1249)", "建长 (1249–1256)", "康元 (1256–1257)", "正嘉 (1257–1259)", "正元 (1259–1260)", "文应 (1260–1261)", "弘长 (1261–1264)", "文永 (1264–1275)", "建治 (1275–1278)", "弘安 (1278–1288)", "正应 (1288–1293)", "永仁 (1293–1299)", "正安 (1299–1302)", "干元 (1302–1303)", "嘉元 (1303–1306)", "德治 (1306–1308)", "延庆 (1308–1311)", "应长 (1311–1312)", "正和 (1312–1317)", "文保 (1317–1319)", "元应 (1319–1321)", "元亨 (1321–1324)", "正中 (1324–1326)", "嘉历 (1326–1329)", "元德 (1329–1331)", "元弘 (1331–1334)", "建武 (1334–1336)", "延元 (1336–1340)", "兴国 (1340–1346)", "正平 (1346–1370)", "建德 (1370–1372)", "文中 (1372–1375)", "天授 (1375–1379)", "康历 (1379–1381)", "弘和 (1381–1384)", "元中 (1384–1392)", "至德 (1384–1387)", "嘉庆 (1387–1389)", "康应 (1389–1390)", "明德 (1390–1394)", "应永 (1394–1428)", "正长 (1428–1429)", "永享 (1429–1441)", "嘉吉 (1441–1444)", "文安 (1444–1449)", "宝德 (1449–1452)", "享德 (1452–1455)", "康正 (1455–1457)", "长禄 (1457–1460)", "宽正 (1460–1466)", "文正 (1466–1467)", "应仁 (1467–1469)", "文明 (1469–1487)", "长享 (1487–1489)", "延德 (1489–1492)", "明应 (1492–1501)", "文龟 (1501–1504)", "永正 (1504–1521)", "大永 (1521–1528)", "享禄 (1528–1532)", "天文 (1532–1555)", "弘治 (1555–1558)", "永禄 (1558–1570)", "元龟 (1570–1573)", "天正 (1573–1592)", "文禄 (1592–1596)", "庆长 (1596–1615)", "元和 (1615–1624)", "宽永 (1624–1644)", "正保 (1644–1648)", "庆安 (1648–1652)", "承应 (1652–1655)", "明历 (1655–1658)", "万治 (1658–1661)", "宽文 (1661–1673)", "延宝 (1673–1681)", "天和 (1681–1684)", "贞享 (1684–1688)", "元禄 (1688–1704)", "宝永 (1704–1711)", "正德 (1711–1716)", "享保 (1716–1736)", "元文 (1736–1741)", "宽保 (1741–1744)", "延享 (1744–1748)", "宽延 (1748–1751)", "宝历 (1751–1764)", "明和 (1764–1772)", "安永 (1772–1781)", "天明 (1781–1789)", "宽政 (1789–1801)", "享和 (1801–1804)", "文化 (1804–1818)", "文政 (1818–1830)", "天保 (1830–1844)", "弘化 (1844–1848)", "嘉永 (1848–1854)", "安政 (1854–1860)", "万延 (1860–1861)", "文久 (1861–1864)", "元治 (1864–1865)", "庆应 (1865–1868)", "明治", "大正", "昭和", "平成"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["波斯历"],
                  short: ["波斯历"],
                  long: ["波斯历"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              roc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["民国前", "民国"],
                  short: ["民国前", "民国"],
                  long: ["民国前", "民国"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
              },
              percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
              }
            },
            symbols: {
              hanidec: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              },
              latn: {
                decimal: ".",
                group: ",",
                nan: "NaN",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              AUD: "AU$",
              BRL: "R$",
              CAD: "CA$",
              CNY: "￥",
              EUR: "€",
              GBP: "£",
              HKD: "HK$",
              ILR: "ILS",
              ILS: "₪",
              INR: "₹",
              JPY: "JP¥",
              KRW: "￦",
              MXN: "MX$",
              NZD: "NZ$",
              TWD: "NT$",
              USD: "US$",
              VND: "₫",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF"
            }
          }
        })
      },
      9937: function() {
        IntlPolyfill.__addLocaleData({
          locale: "zh-Hant-TW",
          date: {
            ca: ["gregory", "buddhist", "chinese", "coptic", "dangi", "ethioaa", "ethiopic", "generic", "hebrew", "indian", "islamic", "islamicc", "japanese", "persian", "roc"],
            hourNo0: !0,
            hour12: !0,
            formats: {
              short: "{1} {0}",
              medium: "{1} {0}",
              full: "{1} {0}",
              long: "{1} {0}",
              availableFormats: {
                d: "d日",
                E: "ccc",
                Ed: "d E",
                Ehm: "E ah:mm",
                EHm: "E HH:mm",
                Ehms: "E ah:mm:ss",
                EHms: "E HH:mm:ss",
                Gy: "Gy年",
                GyMMM: "Gy年M月",
                GyMMMd: "Gy年M月d日",
                GyMMMEd: "Gy年M月d日 E",
                h: "ah時",
                H: "H時",
                hm: "ah:mm",
                Hm: "HH:mm",
                hms: "ah:mm:ss",
                Hms: "HH:mm:ss",
                hmsv: "ah:mm:ss [v]",
                Hmsv: "HH:mm:ss [v]",
                hmv: "ah:mm [v]",
                Hmv: "HH:mm [v]",
                M: "M月",
                Md: "M/d",
                MEd: "M/d（E）",
                MMdd: "MM/dd",
                MMM: "LLL",
                MMMd: "M月d日",
                MMMEd: "M月d日 E",
                MMMMd: "M月d日",
                ms: "mm:ss",
                y: "y年",
                yM: "y/M",
                yMd: "y/M/d",
                yMEd: "y/M/d（E）",
                yMM: "y/MM",
                yMMM: "y年M月",
                yMMMd: "y年M月d日",
                yMMMEd: "y年M月d日 E",
                yMMMM: "y年M月",
                yQQQ: "y年QQQ",
                yQQQQ: "y年QQQQ"
              },
              dateFormats: {
                yMMMMEEEEd: "y年M月d日 EEEE",
                yMMMMd: "y年M月d日",
                yMMMd: "y年M月d日",
                yMd: "y/M/d"
              },
              timeFormats: {
                hmmsszzzz: "ah:mm:ss [zzzz]",
                hmsz: "ah:mm:ss [z]",
                hms: "ah:mm:ss",
                hm: "ah:mm"
              }
            },
            calendars: {
              buddhist: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["佛曆"],
                  short: ["佛曆"],
                  long: ["佛曆"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              chinese: {
                months: {
                  narrow: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "臘"],
                  short: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "臘月"],
                  long: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "臘月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              coptic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月"],
                  long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              dangi: {
                months: {
                  narrow: ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
                  short: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                  long: ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              ethiopic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月"],
                  long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              ethioaa: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月"],
                  long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", "13月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["ERA0"],
                  short: ["ERA0"],
                  long: ["ERA0"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              generic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"],
                  long: ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08", "M09", "M10", "M11", "M12"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["ERA0", "ERA1"],
                  short: ["ERA0", "ERA1"],
                  long: ["ERA0", "ERA1"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              gregory: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["西元前", "西元", "公元前", "公元"],
                  short: ["西元前", "西元", "公元前", "公元"],
                  long: ["西元前", "西元", "公元前", "公元"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              hebrew: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "7"],
                  short: ["提斯利月", "瑪西班月", "基斯流月", "提別月", "細罷特月", "亞達月 I", "亞達月", "尼散月", "以珥月", "西彎月", "搭模斯月", "埃波月", "以祿月", "亞達月 II"],
                  long: ["提斯利月", "瑪西班月", "基斯流月", "提別月", "細罷特月", "亞達月 I", "亞達月", "尼散月", "以珥月", "西彎月", "搭模斯月", "埃波月", "以祿月", "亞達月 II"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["創世紀元"],
                  short: ["創世紀元"],
                  long: ["創世紀元"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              indian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["制檀邏月", "吠舍佉月", "逝瑟吒月", "頞沙荼月", "室羅伐拏月", "婆羅鉢陀月", "頞涇縛庚闍月", "迦剌底迦月", "末伽始羅月", "報沙月", "磨祛月", "頗勒窶拏月"],
                  long: ["制檀邏月", "吠舍佉月", "逝瑟吒月", "頞沙荼月", "室羅伐拏月", "婆羅鉢陀月", "頞涇縛庚闍月", "迦剌底迦月", "末伽始羅月", "報沙月", "磨祛月", "頗勒窶拏月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["印度曆"],
                  short: ["印度曆"],
                  long: ["印度曆"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              islamic: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["穆哈蘭姆月", "色法爾月", "賴比月 I", "賴比月 II", "主馬達月 I", "主馬達月 II", "賴哲卜月", "舍爾邦月", "賴買丹月", "閃瓦魯月", "都爾喀爾德月", "都爾黑哲月"],
                  long: ["穆哈蘭姆月", "色法爾月", "賴比月 I", "賴比月 II", "主馬達月 I", "主馬達月 II", "賴哲卜月", "舍爾邦月", "賴買丹月", "閃瓦魯月", "都爾喀爾德月", "都爾黑哲月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["伊斯蘭曆"],
                  short: ["伊斯蘭曆"],
                  long: ["伊斯蘭曆"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              islamicc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["穆哈蘭姆月", "色法爾月", "賴比月 I", "賴比月 II", "主馬達月 I", "主馬達月 II", "賴哲卜月", "舍爾邦月", "賴買丹月", "閃瓦魯月", "都爾喀爾德月", "都爾黑哲月"],
                  long: ["穆哈蘭姆月", "色法爾月", "賴比月 I", "賴比月 II", "主馬達月 I", "主馬達月 II", "賴哲卜月", "舍爾邦月", "賴買丹月", "閃瓦魯月", "都爾喀爾德月", "都爾黑哲月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["伊斯蘭曆"],
                  short: ["伊斯蘭曆"],
                  long: ["伊斯蘭曆"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              japanese: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["Taika (645–650)", "Hakuchi (650–671)", "Hakuhō (672–686)", "Shuchō (686–701)", "Taihō (701–704)", "Keiun (704–708)", "Wadō (708–715)", "Reiki (715–717)", "Yōrō (717–724)", "Jinki (724–729)", "Tenpyō (729–749)", "Tenpyō-kampō (749-749)", "Tenpyō-shōhō (749-757)", "Tenpyō-hōji (757-765)", "Tenpyō-jingo (765-767)", "Jingo-keiun (767-770)", "Hōki (770–780)", "Ten-ō (781-782)", "Enryaku (782–806)", "Daidō (806–810)", "Kōnin (810–824)", "Tenchō (824–834)", "Jōwa (834–848)", "Kajō (848–851)", "Ninju (851–854)", "Saikō (854–857)", "Ten-an (857-859)", "Jōgan (859–877)", "Gangyō (877–885)", "Ninna (885–889)", "Kanpyō (889–898)", "Shōtai (898–901)", "Engi (901–923)", "Enchō (923–931)", "Jōhei (931–938)", "Tengyō (938–947)", "Tenryaku (947–957)", "Tentoku (957–961)", "Ōwa (961–964)", "Kōhō (964–968)", "Anna (968–970)", "Tenroku (970–973)", "Ten’en (973–976)", "Jōgen (976–978)", "Tengen (978–983)", "Eikan (983–985)", "Kanna (985–987)", "Eien (987–989)", "Eiso (989–990)", "Shōryaku (990–995)", "Chōtoku (995–999)", "Chōhō (999–1004)", "Kankō (1004–1012)", "Chōwa (1012–1017)", "Kannin (1017–1021)", "Jian (1021–1024)", "Manju (1024–1028)", "Chōgen (1028–1037)", "Chōryaku (1037–1040)", "Chōkyū (1040–1044)", "Kantoku (1044–1046)", "Eishō (1046–1053)", "Tengi (1053–1058)", "Kōhei (1058–1065)", "Jiryaku (1065–1069)", "Enkyū (1069–1074)", "Shōho (1074–1077)", "Shōryaku (1077–1081)", "Eihō (1081–1084)", "Ōtoku (1084–1087)", "Kanji (1087–1094)", "Kahō (1094–1096)", "Eichō (1096–1097)", "Jōtoku (1097–1099)", "Kōwa (1099–1104)", "Chōji (1104–1106)", "Kashō (1106–1108)", "Tennin (1108–1110)", "Ten-ei (1110-1113)", "Eikyū (1113–1118)", "Gen’ei (1118–1120)", "Hōan (1120–1124)", "Tenji (1124–1126)", "Daiji (1126–1131)", "Tenshō (1131–1132)", "Chōshō (1132–1135)", "Hōen (1135–1141)", "Eiji (1141–1142)", "Kōji (1142–1144)", "Ten’yō (1144–1145)", "Kyūan (1145–1151)", "Ninpei (1151–1154)", "Kyūju (1154–1156)", "Hōgen (1156–1159)", "Heiji (1159–1160)", "Eiryaku (1160–1161)", "Ōho (1161–1163)", "Chōkan (1163–1165)", "Eiman (1165–1166)", "Nin’an (1166–1169)", "Kaō (1169–1171)", "Shōan (1171–1175)", "Angen (1175–1177)", "Jishō (1177–1181)", "Yōwa (1181–1182)", "Juei (1182–1184)", "Genryaku (1184–1185)", "Bunji (1185–1190)", "Kenkyū (1190–1199)", "Shōji (1199–1201)", "Kennin (1201–1204)", "Genkyū (1204–1206)", "Ken’ei (1206–1207)", "Jōgen (1207–1211)", "Kenryaku (1211–1213)", "Kenpō (1213–1219)", "Jōkyū (1219–1222)", "Jōō (1222–1224)", "Gennin (1224–1225)", "Karoku (1225–1227)", "Antei (1227–1229)", "Kanki (1229–1232)", "Jōei (1232–1233)", "Tenpuku (1233–1234)", "Bunryaku (1234–1235)", "Katei (1235–1238)", "Ryakunin (1238–1239)", "En’ō (1239–1240)", "Ninji (1240–1243)", "Kangen (1243–1247)", "Hōji (1247–1249)", "Kenchō (1249–1256)", "Kōgen (1256–1257)", "Shōka (1257–1259)", "Shōgen (1259–1260)", "Bun’ō (1260–1261)", "Kōchō (1261–1264)", "Bun’ei (1264–1275)", "Kenji (1275–1278)", "Kōan (1278–1288)", "Shōō (1288–1293)", "Einin (1293–1299)", "Shōan (1299–1302)", "Kengen (1302–1303)", "Kagen (1303–1306)", "Tokuji (1306–1308)", "Enkyō (1308–1311)", "Ōchō (1311–1312)", "Shōwa (1312–1317)", "Bunpō (1317–1319)", "Genō (1319–1321)", "Genkō (1321–1324)", "Shōchū (1324–1326)", "Karyaku (1326–1329)", "Gentoku (1329–1331)", "Genkō (1331–1334)", "Kenmu (1334–1336)", "Engen (1336–1340)", "Kōkoku (1340–1346)", "Shōhei (1346–1370)", "Kentoku (1370–1372)", "Bunchū (1372–1375)", "Tenju (1375–1379)", "Kōryaku (1379–1381)", "Kōwa (1381–1384)", "Genchū (1384–1392)", "Meitoku (1384–1387)", "Kakei (1387–1389)", "Kōō (1389–1390)", "Meitoku (1390–1394)", "Ōei (1394–1428)", "Shōchō (1428–1429)", "Eikyō (1429–1441)", "Kakitsu (1441–1444)", "Bun’an (1444–1449)", "Hōtoku (1449–1452)", "Kyōtoku (1452–1455)", "Kōshō (1455–1457)", "Chōroku (1457–1460)", "Kanshō (1460–1466)", "Bunshō (1466–1467)", "Ōnin (1467–1469)", "Bunmei (1469–1487)", "Chōkyō (1487–1489)", "Entoku (1489–1492)", "Meiō (1492–1501)", "Bunki (1501–1504)", "Eishō (1504–1521)", "Taiei (1521–1528)", "Kyōroku (1528–1532)", "Tenbun (1532–1555)", "Kōji (1555–1558)", "Eiroku (1558–1570)", "Genki (1570–1573)", "Tenshō (1573–1592)", "Bunroku (1592–1596)", "Keichō (1596–1615)", "Genna (1615–1624)", "Kan’ei (1624–1644)", "Shōho (1644–1648)", "Keian (1648–1652)", "Jōō (1652–1655)", "Meireki (1655–1658)", "Manji (1658–1661)", "Kanbun (1661–1673)", "Enpō (1673–1681)", "Tenna (1681–1684)", "Jōkyō (1684–1688)", "Genroku (1688–1704)", "Hōei (1704–1711)", "Shōtoku (1711–1716)", "Kyōhō (1716–1736)", "Genbun (1736–1741)", "Kanpō (1741–1744)", "Enkyō (1744–1748)", "Kan’en (1748–1751)", "Hōreki (1751–1764)", "Meiwa (1764–1772)", "An’ei (1772–1781)", "Tenmei (1781–1789)", "Kansei (1789–1801)", "Kyōwa (1801–1804)", "Bunka (1804–1818)", "Bunsei (1818–1830)", "Tenpō (1830–1844)", "Kōka (1844–1848)", "Kaei (1848–1854)", "Ansei (1854–1860)", "Man’en (1860–1861)", "Bunkyū (1861–1864)", "Genji (1864–1865)", "Keiō (1865–1868)", "M", "T", "S", "H"],
                  short: ["大化", "白雉", "白鳳", "朱鳥", "大寶", "慶雲", "和銅", "靈龜", "養老", "神龜", "天平", "天平感寶", "天平勝寶", "天平寶字", "天平神護", "神護景雲", "寶龜", "天應", "延曆", "大同", "弘仁", "天長", "承和", "嘉祥", "仁壽", "齊衡", "天安", "貞觀", "元慶", "仁和", "寬平", "昌泰", "延喜", "延長", "承平", "天慶", "天曆", "天德", "應和", "康保", "安和", "天祿", "天延", "貞元", "天元", "永觀", "寬和", "永延", "永祚", "正曆", "長德", "長保", "寬弘", "長和", "寬仁", "治安", "萬壽", "長元", "長曆", "長久", "寬德", "永承", "天喜", "康平", "治曆", "延久", "承保", "承曆", "永保", "應德", "寬治", "嘉保", "永長", "承德", "康和", "長治", "嘉承", "天仁", "天永", "永久", "元永", "保安", "天治", "大治", "天承", "長承", "保延", "永治", "康治", "天養", "久安", "仁平", "久壽", "保元", "平治", "永曆", "應保", "長寬", "永萬", "仁安", "嘉應", "承安", "安元", "治承", "養和", "壽永", "元曆", "文治", "建久", "正治", "建仁", "元久", "建永", "承元", "建曆", "建保", "承久", "貞應", "元仁", "嘉祿", "安貞", "寬喜", "貞永", "天福", "文曆", "嘉禎", "曆仁", "延應", "仁治", "寬元", "寶治", "建長", "康元", "正嘉", "正元", "文應", "弘長", "文永", "建治", "弘安", "正應", "永仁", "正安", "乾元", "嘉元", "德治", "延慶", "應長", "正和", "文保", "元應", "元亨", "正中", "嘉曆", "元德", "元弘", "建武", "延元", "興國", "正平", "建德", "文中", "天授", "康曆", "弘和", "元中", "至德", "嘉慶", "康應", "明德", "應永", "正長", "永享", "嘉吉", "文安", "寶德", "享德", "康正", "長祿", "寬正", "文正", "應仁", "文明", "長享", "延德", "明應", "文龜", "永正", "大永", "享祿", "天文", "弘治", "永祿", "元龜", "天正", "文祿", "慶長", "元和", "寬永", "正保", "慶安", "承應", "明曆", "萬治", "寬文", "延寶", "天和", "貞享", "元祿", "寶永", "正德", "享保", "元文", "寬保", "延享", "寬延", "寶曆", "明和", "安永", "天明", "寬政", "享和", "文化", "文政", "天保", "弘化", "嘉永", "安政", "萬延", "文久", "元治", "慶應", "明治", "大正", "昭和", "平成"],
                  long: ["大化", "白雉", "白鳳", "朱鳥", "大寶", "慶雲", "和銅", "靈龜", "養老", "神龜", "天平", "天平感寶", "天平勝寶", "天平寶字", "天平神護", "神護景雲", "寶龜", "天應", "延曆", "大同", "弘仁", "天長", "承和", "嘉祥", "仁壽", "齊衡", "天安", "貞觀", "元慶", "仁和", "寬平", "昌泰", "延喜", "延長", "承平", "天慶", "天曆", "天德", "應和", "康保", "安和", "天祿", "天延", "貞元", "天元", "永觀", "寬和", "永延", "永祚", "正曆", "長德", "長保", "寬弘", "長和", "寬仁", "治安", "萬壽", "長元", "長曆", "長久", "寬德", "永承", "天喜", "康平", "治曆", "延久", "承保", "承曆", "永保", "應德", "寬治", "嘉保", "永長", "承德", "康和", "長治", "嘉承", "天仁", "天永", "永久", "元永", "保安", "天治", "大治", "天承", "長承", "保延", "永治", "康治", "天養", "久安", "仁平", "久壽", "保元", "平治", "永曆", "應保", "長寬", "永萬", "仁安", "嘉應", "承安", "安元", "治承", "養和", "壽永", "元曆", "文治", "建久", "正治", "建仁", "元久", "建永", "承元", "建曆", "建保", "承久", "貞應", "元仁", "嘉祿", "安貞", "寬喜", "貞永", "天福", "文曆", "嘉禎", "曆仁", "延應", "仁治", "寬元", "寶治", "建長", "康元", "正嘉", "正元", "文應", "弘長", "文永", "建治", "弘安", "正應", "永仁", "正安", "乾元", "嘉元", "德治", "延慶", "應長", "正和", "文保", "元應", "元亨", "正中", "嘉曆", "元德", "元弘", "建武", "延元", "興國", "正平", "建德", "文中", "天授", "康曆", "弘和", "元中", "至德", "嘉慶", "康應", "明德", "應永", "正長", "永享", "嘉吉", "文安", "寶德", "享德", "康正", "長祿", "寬正", "文正", "應仁", "文明", "長享", "延德", "明應", "文龜", "永正", "大永", "享祿", "天文", "弘治", "永祿", "元龜", "天正", "文祿", "慶長", "元和", "寬永", "正保", "慶安", "承應", "明曆", "萬治", "寬文", "延寶", "天和", "貞享", "元祿", "寶永", "正德", "享保", "元文", "寬保", "延享", "寬延", "寶曆", "明和", "安永", "天明", "寬政", "享和", "文化", "文政", "天保", "弘化", "嘉永", "安政", "萬延", "文久", "元治", "慶應", "明治", "大正", "昭和", "平成"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              persian: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["波斯曆"],
                  short: ["波斯曆"],
                  long: ["波斯曆"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              },
              roc: {
                months: {
                  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
                  short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                  long: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
                },
                days: {
                  narrow: ["日", "一", "二", "三", "四", "五", "六"],
                  short: ["週日", "週一", "週二", "週三", "週四", "週五", "週六"],
                  long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
                },
                eras: {
                  narrow: ["民國前", "民國"],
                  short: ["民國前", "民國"],
                  long: ["民國前", "民國"]
                },
                dayPeriods: {
                  am: "上午",
                  pm: "下午"
                }
              }
            }
          },
          number: {
            nu: ["latn"],
            patterns: {
              decimal: {
                positivePattern: "{number}",
                negativePattern: "{minusSign}{number}"
              },
              currency: {
                positivePattern: "{currency}{number}",
                negativePattern: "{minusSign}{currency}{number}"
              },
              percent: {
                positivePattern: "{number}{percentSign}",
                negativePattern: "{minusSign}{number}{percentSign}"
              }
            },
            symbols: {
              hanidec: {
                decimal: ".",
                group: ",",
                nan: "非數值",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              },
              latn: {
                decimal: ".",
                group: ",",
                nan: "非數值",
                plusSign: "+",
                minusSign: "-",
                percentSign: "%",
                infinity: "∞"
              }
            },
            currencies: {
              AUD: "AU$",
              BRL: "R$",
              CAD: "CA$",
              CNY: "CN¥",
              EUR: "€",
              GBP: "£",
              HKD: "HK$",
              ILS: "₪",
              INR: "₹",
              JPY: "¥",
              KRW: "￦",
              MXN: "MX$",
              NZD: "NZ$",
              TWD: "$",
              USD: "US$",
              VND: "₫",
              XAF: "FCFA",
              XCD: "EC$",
              XOF: "CFA",
              XPF: "CFPF"
            }
          }
        })
      },
      8738: function(n) {
        function a(n) {
          return !!n.constructor && "function" == typeof n.constructor.isBuffer && n.constructor.isBuffer(n)
        }
        n.exports = function(n) {
          return null != n && (a(n) || "function" == typeof(e = n).readFloatLE && "function" == typeof e.slice && a(e.slice(0, 0)) || !!n._isBuffer);
          var e
        }
      },
      2568: function(n, e, a) {
        var g, k = a(1012),
          p = a(487).utf8,
          E = a(8738),
          T = a(487).bin;
        (g = function(n, e) {
          n.constructor == String ? n = (e && "binary" === e.encoding ? T : p).stringToBytes(n) : E(n) ? n = Array.prototype.slice.call(n, 0) : Array.isArray(n) || n.constructor === Uint8Array || (n = n.toString());
          for (var a = k.bytesToWords(n), e = 8 * n.length, r = 1732584193, i = -271733879, o = -1732584194, t = 271733878, s = 0; s < a.length; s++) a[s] = 16711935 & (a[s] << 8 | a[s] >>> 24) | 4278255360 & (a[s] << 24 | a[s] >>> 8);
          a[e >>> 5] |= 128 << e % 32, a[14 + (64 + e >>> 9 << 4)] = e;
          for (var u = g._ff, h = g._gg, M = g._hh, c = g._ii, s = 0; s < a.length; s += 16) {
            var l = r,
              d = i,
              m = o,
              y = t,
              r = u(r, i, o, t, a[s + 0], 7, -680876936),
              t = u(t, r, i, o, a[s + 1], 12, -389564586),
              o = u(o, t, r, i, a[s + 2], 17, 606105819),
              i = u(i, o, t, r, a[s + 3], 22, -1044525330);
            r = u(r, i, o, t, a[s + 4], 7, -176418897), t = u(t, r, i, o, a[s + 5], 12, 1200080426), o = u(o, t, r, i, a[s + 6], 17, -1473231341), i = u(i, o, t, r, a[s + 7], 22, -45705983), r = u(r, i, o, t, a[s + 8], 7, 1770035416), t = u(t, r, i, o, a[s + 9], 12, -1958414417), o = u(o, t, r, i, a[s + 10], 17, -42063), i = u(i, o, t, r, a[s + 11], 22, -1990404162), r = u(r, i, o, t, a[s + 12], 7, 1804603682), t = u(t, r, i, o, a[s + 13], 12, -40341101), o = u(o, t, r, i, a[s + 14], 17, -1502002290), r = h(r, i = u(i, o, t, r, a[s + 15], 22, 1236535329), o, t, a[s + 1], 5, -165796510), t = h(t, r, i, o, a[s + 6], 9, -1069501632), o = h(o, t, r, i, a[s + 11], 14, 643717713), i = h(i, o, t, r, a[s + 0], 20, -373897302), r = h(r, i, o, t, a[s + 5], 5, -701558691), t = h(t, r, i, o, a[s + 10], 9, 38016083), o = h(o, t, r, i, a[s + 15], 14, -660478335), i = h(i, o, t, r, a[s + 4], 20, -405537848), r = h(r, i, o, t, a[s + 9], 5, 568446438), t = h(t, r, i, o, a[s + 14], 9, -1019803690), o = h(o, t, r, i, a[s + 3], 14, -187363961), i = h(i, o, t, r, a[s + 8], 20, 1163531501), r = h(r, i, o, t, a[s + 13], 5, -1444681467), t = h(t, r, i, o, a[s + 2], 9, -51403784), o = h(o, t, r, i, a[s + 7], 14, 1735328473), r = M(r, i = h(i, o, t, r, a[s + 12], 20, -1926607734), o, t, a[s + 5], 4, -378558), t = M(t, r, i, o, a[s + 8], 11, -2022574463), o = M(o, t, r, i, a[s + 11], 16, 1839030562), i = M(i, o, t, r, a[s + 14], 23, -35309556), r = M(r, i, o, t, a[s + 1], 4, -1530992060), t = M(t, r, i, o, a[s + 4], 11, 1272893353), o = M(o, t, r, i, a[s + 7], 16, -155497632), i = M(i, o, t, r, a[s + 10], 23, -1094730640), r = M(r, i, o, t, a[s + 13], 4, 681279174), t = M(t, r, i, o, a[s + 0], 11, -358537222), o = M(o, t, r, i, a[s + 3], 16, -722521979), i = M(i, o, t, r, a[s + 6], 23, 76029189), r = M(r, i, o, t, a[s + 9], 4, -640364487), t = M(t, r, i, o, a[s + 12], 11, -421815835), o = M(o, t, r, i, a[s + 15], 16, 530742520), r = c(r, i = M(i, o, t, r, a[s + 2], 23, -995338651), o, t, a[s + 0], 6, -198630844), t = c(t, r, i, o, a[s + 7], 10, 1126891415), o = c(o, t, r, i, a[s + 14], 15, -1416354905), i = c(i, o, t, r, a[s + 5], 21, -57434055), r = c(r, i, o, t, a[s + 12], 6, 1700485571), t = c(t, r, i, o, a[s + 3], 10, -1894986606), o = c(o, t, r, i, a[s + 10], 15, -1051523), i = c(i, o, t, r, a[s + 1], 21, -2054922799), r = c(r, i, o, t, a[s + 8], 6, 1873313359), t = c(t, r, i, o, a[s + 15], 10, -30611744), o = c(o, t, r, i, a[s + 6], 15, -1560198380), i = c(i, o, t, r, a[s + 13], 21, 1309151649), r = c(r, i, o, t, a[s + 4], 6, -145523070), t = c(t, r, i, o, a[s + 11], 10, -1120210379), o = c(o, t, r, i, a[s + 2], 15, 718787259), i = c(i, o, t, r, a[s + 9], 21, -343485551), r = r + l >>> 0, i = i + d >>> 0, o = o + m >>> 0, t = t + y >>> 0
          }
          return k.endian([r, i, o, t])
        })._ff = function(n, e, a, r, i, o, t) {
          n = n + (e & a | ~e & r) + (i >>> 0) + t;
          return (n << o | n >>> 32 - o) + e
        }, g._gg = function(n, e, a, r, i, o, t) {
          n = n + (e & r | a & ~r) + (i >>> 0) + t;
          return (n << o | n >>> 32 - o) + e
        }, g._hh = function(n, e, a, r, i, o, t) {
          n = n + (e ^ a ^ r) + (i >>> 0) + t;
          return (n << o | n >>> 32 - o) + e
        }, g._ii = function(n, e, a, r, i, o, t) {
          n = n + (a ^ (e | ~r)) + (i >>> 0) + t;
          return (n << o | n >>> 32 - o) + e
        }, g._blocksize = 16, g._digestsize = 16, n.exports = function(n, e) {
          if (null == n) throw new Error("Illegal argument " + n);
          n = k.wordsToBytes(g(n, e));
          return e && e.asBytes ? n : e && e.asString ? T.bytesToString(n) : k.bytesToHex(n)
        }
      },
      3379: function(n) {
        function u(n) {
          for (var e = -1, a = 0; a < h.length; a++)
            if (h[a].identifier === n) {
              e = a;
              break
            } return e
        }

        function s(n, e) {
          for (var a = {
              _0xbc305d: NaN
            }, r = [], i = 0; i < n.length; i++) {
            var o = n[i],
              t = e.base ? o[0] + e.base : o[0],
              s = a[t] || 0,
              t = "".concat(t, " ").concat(s),
              s = {
                css: o[1],
                media: o[2],
                sourceMap: o[3],
                supports: o[4],
                layer: o[5]
              },
              o = u(t); - 1 !== o ? (h[o].references++, h[o].updater(s)) : (o = {
              identifier: t,
              updater: function(e, n) {
                var a = n.domAPI(n);
                return a.update(e),
                  function(n) {
                    n ? n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer || a.update(e = n) : a.remove()
                  }
              }(s, e),
              references: 1
            }, e.byIndex = i, h.splice(i, 0, o), e.byIndex = i, h.splice(i, 0, o)), r.push(t)
          }
          return r
        }
        var h = [];
        n.exports = function(n, o) {
          var t = s(n = n || [], o = o || {});
          return function(n) {
            n = n || [];
            for (var e = 0; e < t.length; e++) {
              var a = u(t[e]);
              h[a].references--
            }
            for (var n = s(n, o), r = 0; r < t.length; r++) {
              var i = u(t[r]);
              0 === h[i].references && (h[i].updater(), h.splice(i, 1))
            }
            t = n
          }
        }
      },
      569: function(n) {
        var a = {
          _0x1258dc: _0x1b753e
        };
        n.exports = function(n, e) {
          n = function(n) {
            if (void 0 === a[n]) {
              var e = document.querySelector(n);
              if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
                e = e.contentDocument.head
              } catch (n) {
                e = null
              }
            }
            return a[n]
          }(n);
          if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          n.appendChild(e)
        }
      },
      9216: function(n) {
        n.exports = function(n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e
        }
      },
      3565: function(n, e, a) {
        n.exports = function(n) {
          var e = a.nc;
          e && n.setAttribute("nonce", e)
        }
      },
      7795: function(n) {
        n.exports = function(o) {
          var t = o.insertStyleElement(o);
          return {
            update: function(n) {
              var e, a, r, i;
              e = t, a = o, r = "", (n = n).supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {")), (i = void 0 !== n.layer) && (r += "@layer".concat(0 < n.layer.length ? " ".concat(n.layer) : "", " {")), r += n.css, i && (r += "}"), n.media && (r += "}"), n.supports && (r += "}"), (i = n.sourceMap) && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), a.styleTagTransform(r, e, a.options)
            },
            remove: function() {
              var n;
              null !== (n = t).parentNode && n.parentNode.removeChild(n)
            }
          }
        }
      },
      4589: function(n) {
        n.exports = function(n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n))
          }
        }
      },
      6222: function(n, e, a) {
        var d = a(8439),
          m = a(9640),
          y = a(2196);
        n.exports = function(n) {
          for (var e, a, r, i, o, t = n ? n.length : 0, s = Array.apply(null, Array(256)).map(Number.prototype.valueOf, 0), u = new m, h = function(n) {
              s[n] ? s[n]++ : s[n] = 1
            }, M = 0; M < t; M++) {
            var c = n.charCodeAt(M),
              l = u.getPivot();
            u.put(c), e = u.getChecksum(l, e), u.getTripletHashes(l).forEach(h)
          }
          return a = t, i = e, o = new y(r = s), new d(i, r, a, o)
        }
      },
      7172: function(n, e, a) {
        var r = a(219),
          i = a(2095),
          o = a(641),
          t = a(6357),
          s = a(6828);
        n.exports = function() {
          return {
            withChecksum: function(n) {
              return this.checksum = new i(n), this
            },
            withLength: function(n) {
              return this.lValue = new t((n = n) <= 656 ? Math.floor(Math.log(n) / .4054651) % 256 : n <= 3199 ? Math.floor(Math.log(n) / .26236426 - 8.72777) % 256 : Math.floor(Math.log(n) / .09531018 - 62.5472) % 256), this
            },
            withQuartiles: function(n) {
              return this.q = new function(n, e) {
                return new s(15 & (0 | 15 & n) | (15 & e) << 4)
              }(n.getQ1Ratio(), n.getQ2Ratio()), this
            },
            withBody: function(n) {
              return this.body = new r(n), this
            },
            build: function() {
              return new o(this.checksum, this.lValue, this.q, this.body)
            }
          }
        }
      },
      2056: function(n) {
        var a;
        a = [1, 87, 49, 12, 176, 178, 102, 166, 121, 193, 6, 84, 249, 230, 44, 163, 14, 197, 213, 181, 161, 85, 218, 80, 64, 239, 24, 226, 236, 142, 38, 200, 110, 177, 104, 103, 141, 253, 255, 50, 77, 101, 81, 18, 45, 96, 31, 222, 25, 107, 190, 70, 86, 237, 240, 34, 72, 242, 20, 214, 244, 227, 149, 235, 97, 234, 57, 22, 60, 250, 82, 175, 208, 5, 127, 199, 111, 62, 135, 248, 174, 169, 211, 58, 66, 154, 106, 195, 245, 171, 17, 187, 182, 179, 0, 243, 132, 56, 148, 75, 128, 133, 158, 100, 130, 126, 91, 13, 153, 246, 216, 219, 119, 68, 223, 78, 83, 88, 201, 99, 122, 11, 92, 32, 136, 114, 52, 10, 138, 30, 48, 183, 156, 35, 61, 26, 143, 74, 251, 94, 129, 162, 63, 152, 170, 7, 115, 167, 241, 206, 3, 150, 55, 59, 151, 220, 90, 53, 23, 131, 125, 173, 15, 238, 79, 95, 89, 16, 105, 137, 225, 224, 217, 160, 37, 123, 118, 73, 2, 157, 46, 116, 9, 145, 134, 228, 207, 212, 202, 215, 69, 229, 27, 188, 67, 124, 168, 252, 42, 4, 29, 108, 21, 247, 19, 205, 39, 203, 233, 40, 186, 147, 198, 192, 155, 33, 164, 191, 98, 204, 165, 180, 117, 76, 140, 36, 210, 172, 41, 54, 159, 8, 185, 232, 113, 196, 231, 47, 146, 120, 51, 65, 28, 144, 254, 221, 93, 189, 194, 139, 112, 43, 71, 109, 184, 209];
        n.exports = function(n) {
          var e = 0;
          return n.forEach(function(n) {
            e = a[e ^ n]
          }), e
        }
      },
      8439: function(n, e, a) {
        var r = a(7172);
        n.exports = function(n, o, e, t) {
          this.isProcessedDataTooSimple = function() {
            return !(512 <= e && function() {
              for (var n = 0, e = 0; e < 128; e++) 0 < o[e] && n++;
              return 64 < n
            }())
          }, this.buildDigest = function() {
            return (new r).withChecksum(n).withLength(e).withQuartiles(t).withBody(function() {
              for (var n = new Array(32), e = 0; e < 32; e++) {
                for (var a = 0, r = 0; r < 4; r++) {
                  var i = o[4 * e + r];
                  t.getThird() < i ? a += 3 << 2 * r : t.getSecond() < i ? a += 2 << 2 * r : t.getFirst() < i && (a += 1 << 2 * r)
                }
                n[e] = a
              }
              return n
            }()).build()
          }
        }
      },
      2196: function(n) {
        n.exports = function(n) {
          if (n.length < 128) throw new Error;
          var e = n.slice(0, 128).sort(function(n, e) {
            return n - e
          });
          this.getQ1Ratio = function() {
            return Math.floor(100 * this.getFirst() / this.getThird()) % 16
          }, this.getQ2Ratio = function() {
            return Math.floor(100 * this.getSecond() / this.getThird()) % 16
          }, this.getFirst = function() {
            return e[31]
          }, this.getSecond = function() {
            return e[63]
          }, this.getThird = function() {
            return e[95]
          }
        }
      },
      9640: function(n, e, a) {
        var i = a(1990);
        n.exports = function() {
          function h(n) {
            return o[n]
          }

          function M(n, e, a, r) {
            return new i(n, e, a, r).getHash()
          }

          function c() {
            return 5 <= e
          }
          var o = new Array(5),
            e = 0;
          this.put = function(n) {
            o[this.getPivot()] = 255 & n, e++
          }, this.getPivot = function() {
            return e % 5
          }, this.getTripletHashes = function(n) {
            var e, a, r, i;
            return c() ? (e = ((n = n) + 1) % 5, a = (n + 2) % 5, [M(o[n], o[i = (n + 4) % 5], o[r = (n + 3) % 5], 2), M(o[n], o[i], o[a], 3), M(o[n], o[r], o[a], 5), M(o[n], o[r], o[e], 7), M(o[n], o[i], o[e], 11), M(o[n], o[a], o[e], 13)]) : []
          }, this.getChecksum = function(n, e) {
            if (!c()) return null;
            for (var a = (n + 4) % 5, r = new Array(1), i = 0; i < 1; i++) {
              var o = h(n),
                t = h(a),
                s = 0,
                u = 0;
              e && (s = e[i]), 0 !== i && (u = r[i - 1]), r[i] = M(o, t, s, u)
            }
            return r
          }
        }
      },
      1990: function(n, e, a) {
        function r(n, e, a, r) {
          this.c1 = n, this.c2 = e, this.c3 = a, this.salt = r
        }
        var i = a(2056);
        r.prototype.getHash = function() {
          return i([this.salt, this.c1, this.c2, this.c3])
        }, n.exports = r
      },
      6109: function(n) {
        var a;
        a = function() {
          for (var n = new Array(256), e = 0; e < n.length; e++) n[e] = new Array(256);
          for (e = 0; e < 256; e++)
            for (var a = 0; a < 256; a++) {
              for (var r = e, i = a, o = 0, t = 0; t < 4; t++) {
                var s = Math.abs(r % 4 - i % 4);
                o += 3 == s ? 2 * s : s, t < 3 && (r = Math.floor(r / 4), i = Math.floor(i / 4))
              }
              n[e][a] = o
            }
          return n
        }();
        n.exports = function(n, e) {
          return a[n][e]
        }
      },
      219: function(n, e, a) {
        var o = a(6109);
        n.exports = function(i) {
          this.calculateDifference = function(n) {
            for (var e = n, a = 0, r = 0; r < i.length; r++) a += o(i[r], e.getValue(r));
            return a
          }, this.getValue = function(n) {
            return i[n]
          }
        }
      },
      344: function(n) {
        n.exports = function(n) {
          return (240 & n) >> 4 & 15 | (15 & n) << 4 & 240
        }
      },
      2095: function(n) {
        n.exports = function(e) {
          this.calculateDifference = function(n) {
            return function(n, e) {
              var a = n.length;
              if (a == e.length) {
                for (; a--;)
                  if (n[a] !== e[a]) return;
                return 1
              }
            }(e, n.getValue()) ? 0 : 1
          }, this.getValue = function() {
            return e
          }
        }
      },
      5111: function(n, e, a) {
        var o = a(344);
        n.exports = function(n) {
          function a(n) {
            for (var e = "", a = 0; a < n.length; a++) n[a] < 16 && (e += "0"), e += n[a].toString(16).toUpperCase();
            return e
          }
          var e, r = "",
            r = "" + function(n) {
              var e = new Array(1);
              for (k = 0; k < 1; k++) e[k] = o(n.getValue()[k]);
              return a(e)
            }(n.getChecksum());
          return (r = (r += (e = n.getLValue(), a([o(e.getValue())]))) + (e = n.getQ(), a([o(e.getValue())]))) + function(n) {
            var e = new Array(32);
            for (i = 0; i < 32; i++) e[i] = n.getValue(31 - i);
            return a(e)
          }(n.getBody())
        }
      },
      641: function(n, e, a) {
        var s = a(5111);
        n.exports = function(r, i, o, t) {
          this.getLValue = function() {
            return i
          }, this.getQ = function() {
            return o
          }, this.getChecksum = function() {
            return r
          }, this.getBody = function() {
            return t
          }, this.calculateDifference = function(n, e) {
            var a = 0;
            return e && (a += i.calculateDifference(n.getLValue())), (a = (a += o.calculateDifference(n.getQ())) + r.calculateDifference(n.getChecksum())) + t.calculateDifference(n.getBody())
          }, this.toString = function() {
            return s(this)
          }
        }
      },
      6357: function(n, e, a) {
        var r = a(2945);
        n.exports = function(e) {
          this.calculateDifference = function(n) {
            n = r(e, n.getValue(), 256);
            return 0 === n ? 0 : 1 === n ? 1 : 12 * n
          }, this.getValue = function() {
            return e
          }
        }
      },
      2945: function(n) {
        n.exports = function(n, e, a) {
          e = Math.abs(e - n);
          return Math.min(e, a - e)
        }
      },
      6828: function(n, e, a) {
        var r = a(2945);
        n.exports = function(n) {
          this.getQLo = function() {
            return 15 & n
          }, this.getQHi = function() {
            return (240 & n) >> 4
          }, this.calculateDifference = function(n) {
            var e = r(this.getQLo(), n.getQLo(), 16),
              e = 0 + (e <= 1 ? e : 12 * (e - 1)),
              n = r(this.getQHi(), n.getQHi(), 16);
            return e + (n <= 1 ? n : 12 * (n - 1))
          }, this.getValue = function() {
            return n
          }
        }
      },
      8383: function(n) {
        function e(n) {
          this.name = "InsufficientComplexityError", this.message = n, this.stack = (new Error).stack
        }(e.prototype = Object.create(Error.prototype)).constructor = e, n.exports = e
      },
      4704: function(n, e, a) {
        var r = a(6222),
          i = a(8383);
        n.exports = function(n) {
          n = r(n);
          if (n.isProcessedDataTooSimple()) throw new i("Input data hasn't enough complexity");
          return n.buildDigest().toString()
        }
      },
      2482: function() {},
      7061: function(f, n, e) {
        function a() {
          function a(n, e, a) {
            var r = {};
            return r.value = a, r.enumerable = !0, r.configurable = !0, r.writable = !0, Object.defineProperty(n, e, r), n[e]
          }

          function t(n, e, a, r) {
            var o, t, s, e = e && e.prototype instanceof i ? e : i,
              e = Object.create(e.prototype),
              r = new M(r || []);
            return e._invoke = (o = a, t = r, s = "suspendedStart", function(n, e) {
              if ("executing" === s) throw new Error("Generator is already running");
              if ("completed" === s) {
                if ("throw" === n) throw e;
                var a = {
                  value: void 0,
                  done: !0
                };
                return a
              }
              for (t.method = n, t.arg = e;;) {
                var r = t.delegate;
                if (r) {
                  r = function n(e, a) {
                    var r = e.iterator[a.method];
                    if (void 0 === r) {
                      if (a.delegate = null, "throw" === a.method) {
                        if (e.iterator.return && (a.method = "return", a.arg = void 0, n(e, a), "throw" === a.method)) return T;
                        a.method = "throw", a.arg = new TypeError("The iterator does not provide a 'throw' method")
                      }
                      return T
                    }
                    r = u(r, e.iterator, a.arg);
                    if ("throw" === r.type) return a.method = "throw", a.arg = r.arg, a.delegate = null, T;
                    r = r.arg;
                    return r ? r.done ? (a[e.resultName] = r.value, a.next = e.nextLoc, "return" !== a.method && (a.method = "next", a.arg = void 0), a.delegate = null, T) : r : (a.method = "throw", a.arg = new TypeError("iterator result is not an object"), a.delegate = null, T)
                  }(r, t);
                  if (r) {
                    if (r === T) continue;
                    return r
                  }
                }
                if ("next" === t.method) t.sent = t._sent = t.arg;
                else if ("throw" === t.method) {
                  if ("suspendedStart" === s) throw s = "completed", t.arg;
                  t.dispatchException(t.arg)
                } else "return" === t.method && t.abrupt("return", t.arg);
                s = "executing";
                r = u(i, o, t);
                if ("normal" === r.type) {
                  if (s = t.done ? "completed" : "suspendedYield", r.arg === T) continue;
                  var i = {};
                  return i.value = r.arg, i.done = t.done, i
                }
                "throw" === r.type && (s = "completed", t.method = "throw", t.arg = r.arg)
              }
            }), e
          }

          function u(n, e, a) {
            try {
              return {
                type: "normal",
                arg: n.call(e, a)
              }
            } catch (a) {
              n = {
                type: "throw"
              };
              return n.arg = a, n
            }
          }

          function i() {}

          function e() {}

          function r() {}

          function n(n) {
            ["next", "throw", "return"].forEach(function(e) {
              a(n, e, function(n) {
                return this._invoke(e, n)
              })
            })
          }

          function s(t, e) {
            var i;
            this._invoke = function(a, r) {
              function n() {
                return new e(function(n, e) {
                  ! function e(n, a, r, i) {
                    var o, n = u(t[n], t, a);
                    if ("throw" !== n.type) return (a = (o = n.arg).value) && "object" == D(a) && y.call(a, "__await") ? r.resolve(a.__await).then(function(n) {
                      e("next", n, r, i)
                    }, function(n) {
                      e("throw", n, r, i)
                    }) : r.resolve(a).then(function(n) {
                      o.value = n, r(o)
                    }, function(n) {
                      return e("throw", n, r, i)
                    });
                    i(n.arg)
                  }(a, r, n, e)
                })
              }
              return i = i ? i.then(n, n) : n()
            }
          }

          function o(n) {
            var e = {
              tryLoc: n[0]
            };
            1 in n && (e.catchLoc = n[1]), 2 in n && (e.finallyLoc = n[2], e.afterLoc = n[3]), this.tryEntries.push(e)
          }

          function h(n) {
            var e = n.completion || {};
            e.type = "normal", delete e.arg, n.completion = e
          }

          function M(n) {
            var e = {
              tryLoc: "root"
            };
            this.tryEntries = [e], n.forEach(o, this), this.reset(!0), this.tryEntries = [e], n.forEach(o, this), this.reset(!0)
          }

          function c(e) {
            if (e) {
              var a, n = e[k];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) return a = -1, (n = function n() {
                for (; ++a < e.length;)
                  if (y.call(e, a)) return n.value = e[a], n.done = !1, n;
                return n.value = void 0, n.done = !0, n
              }).next = n
            }
            n = {};
            return n.next = l, n
          }

          function l() {
            var n = {
              value: void 0,
              done: !0
            };
            return n
          }
          f.exports = function() {
            return d
          }, f.exports.__esModule = !0, f.exports.default = f.exports;
          var d = {
              wrap: t
            },
            m = Object.prototype,
            y = m.hasOwnProperty,
            g = "function" == typeof Symbol ? Symbol : {},
            k = g.iterator || "@@iterator",
            p = g.asyncIterator || "@@asyncIterator",
            E = g.toStringTag || "@@toStringTag";
          try {
            a({}, "")
          } catch (n) {
            a = function(n, e, a) {
              return n[e] = a
            }
          }
          var T = {},
            g = {},
            w = (a(g, k, function() {
              return this
            }), Object.getPrototypeOf),
            w = w && w(w(c([]))),
            j = (w && w !== m && y.call(w, k) && (g = w), r.prototype = i.prototype = Object.create(g));
          return a(j, "constructor", e.prototype = r), a(r, "constructor", e), e.displayName = a(r, E, "GeneratorFunction"), d.isGeneratorFunction = function(n) {
            n = "function" == typeof n && n.constructor;
            return !!n && (n === e || "GeneratorFunction" === (n.displayName || n.name))
          }, d.mark = function(n) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : (n.__proto__ = r, a(n, E, "GeneratorFunction")), n.prototype = Object.create(j), n
          }, d.awrap = function(n) {
            var e = {};
            return e.__await = n, e
          }, n(s.prototype), a(s.prototype, p, function() {
            return this
          }), d.AsyncIterator = s, d.async = function(n, e, a, r, i) {
            void 0 === i && (i = Promise);
            var o = new s(t(0, e, a, r), i);
            return d.isGeneratorFunction(e) ? o : o.next().then(function(n) {
              return n.done ? n.value : o.next()
            })
          }, n(j), a(j, E, "Generator"), a(j, k, function() {
            return this
          }), a(j, "toString", function() {
            return "[object Generator]"
          }), d.keys = function(a) {
            var n, r = [];
            for (n in a) r.push(n);
            return r.reverse(),
              function n() {
                for (; r.length;) {
                  var e = r.pop();
                  if (e in a) return n.value = e, n.done = !1, n
                }
                return n.done = !0, n
              }
          }, d.values = c, M.prototype = {
            constructor: M,
            reset: function(n) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(h), !n)
                for (var e in this) "t" === e.charAt(0) && y.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
              this.done = !0;
              var n = this.tryEntries[0].completion;
              if ("throw" === n.type) throw n.arg;
              return this.rval
            },
            dispatchException: function(a) {
              function n(n, e) {
                return o.type = "throw", o.arg = a, r.next = n, e && (r.method = "next", r.arg = void 0), !!e
              }
              if (this.done) throw a;
              for (var r = this, e = this.tryEntries.length - 1; 0 <= e; --e) {
                var i = this.tryEntries[e],
                  o = i.completion;
                if ("root" === i.tryLoc) return n("end");
                if (i.tryLoc <= this.prev) {
                  var t = y.call(i, "catchLoc"),
                    s = y.call(i, "finallyLoc");
                  if (t && s) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  } else if (t) {
                    if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  } else {
                    if (!s) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                  }
                }
              }
            },
            abrupt: function(n, e) {
              for (var a = this.tryEntries.length - 1; 0 <= a; --a) {
                var r = this.tryEntries[a];
                if (r.tryLoc <= this.prev && y.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                  var i = r;
                  break
                }
              }
              var o = (i = i && ("break" === n || "continue" === n) && i.tryLoc <= e && e <= i.finallyLoc ? null : i) ? i.completion : {};
              return o.type = n, o.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, T) : this.complete(o)
            },
            complete: function(n, e) {
              if ("throw" === n.type) throw n.arg;
              return "break" === n.type || "continue" === n.type ? this.next = n.arg : "return" === n.type ? (this.rval = this.arg = n.arg, this.method = "return", this.next = "end") : "normal" === n.type && e && (this.next = e), T
            },
            finish: function(n) {
              for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var a = this.tryEntries[e];
                if (a.finallyLoc === n) return this.complete(a.completion, a.afterLoc), h(a), T
              }
            },
            catch: function(n) {
              for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                var a, r, i = this.tryEntries[e];
                if (i.tryLoc === n) return "throw" === (a = i.completion).type && (r = a.arg, h(i)), r
              }
              throw new Error("illegal catch attempt")
            },
            delegateYield: function(n, e, a) {
              return this.delegate = {
                iterator: c(n),
                resultName: e,
                nextLoc: a
              }, "next" === this.method && (this.arg = void 0), T
            }
          }, d
        }
        var D = e(8698).default;
        f.exports = a, f.exports.__esModule = !0, f.exports.default = f.exports
      },
      8698: function(e) {
        function a(n) {
          return e.exports = a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
          } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
          }, e.exports.__esModule = !0, e.exports.default = e.exports, a(n)
        }
        e.exports = a, e.exports.__esModule = !0, e.exports.default = e.exports
      },
      4687: function(n, e, a) {
        a = a(7061)();
        n.exports = a;
        try {
          regeneratorRuntime = a
        } catch (n) {
          "object" == typeof globalThis ? globalThis.regeneratorRuntime = a : Function("r", "regeneratorRuntime = r")(a)
        }
      }
    },
    A1 = {};

  function b1(n, e, a, r, i, o, t) {
    try {
      var s = n[o](t),
        u = s.value
    } catch (n) {
      return a(n)
    }
    s.done ? e(u) : Promise.resolve(u).then(r, i)
  }

  function g(s) {
    return function() {
      var n = this,
        t = arguments;
      return new Promise(function(e, a) {
        function r(n) {
          b1(o, e, a, r, i, "next", n)
        }

        function i(n) {
          b1(o, e, a, r, i, "throw", n)
        }
        var o = s.apply(n, t);
        r(void 0)
      })
    }
  }

  function I1(n) {
    return (I1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
      return typeof n
    } : function(n) {
      return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    })(n)
  }

  function z1(n, e, a, r, i, o, t) {
    try {
      var s = n[o](t),
        u = s.value
    } catch (n) {
      return a(n)
    }
    s.done ? e(u) : Promise.resolve(u).then(r, i)
  }

  function C1(s) {
    return function() {
      var n = this,
        t = arguments;
      return new Promise(function(e, a) {
        function r(n) {
          z1(o, e, a, r, i, "next", n)
        }

        function i(n) {
          z1(o, e, a, r, i, "throw", n)
        }
        var o = s.apply(n, t);
        r(void 0)
      })
    }
  }

  function L1(e, n) {
    var a, r = Object.keys(e);
    return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(e), n && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable
    })), r.push.apply(r, a)), r
  }

  function O1(i) {
    for (var n = 1; n < arguments.length; n++) {
      var o = null != arguments[n] ? arguments[n] : {};
      n % 2 ? L1(Object(o), !0).forEach(function(n) {
        var e, a, r;
        e = i, a = o[n = n], (r = {}).value = a, r.enumerable = !0, r.configurable = !0, r.writable = !0, n in e ? Object.defineProperty(e, n, r) : e[n] = a
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : L1(Object(o)).forEach(function(n) {
        Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(o, n))
      })
    }
    return i
  }

  function H1(n) {
    return "ECONNABORTED" !== n.code && (!n.response || 500 <= n.response.status && n.response.status <= 599)
  }

  function P1(n) {
    return !!n.config && H1(n) && -1 !== V.indexOf(n.config.method)
  }

  function R1(n) {
    return !(e = n).response && Boolean(e.code) && "ECONNABORTED" !== e.code && U(e) || P1(n);
    var e
  }

  function Q1() {
    return 0
  }

  function x1() {
    var n = 100 * Math.pow(2, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0);
    return n + .2 * n * Math.random()
  }

  function J1(n) {
    var e = n[Y] || {};
    return e.retryCount = e.retryCount || 0, n[Y] = e
  }

  function G1() {
    return (G1 = C1(d.mark(function n(e, a, r, i) {
      var o, t;
      return d.wrap(function(n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            if ("object" === I1(o = r.retryCount < e && a(i))) return n.prev = 2, n.next = 5, o;
            n.next = 12;
            break;
          case 5:
            return t = n.sent, n.abrupt("return", !1 !== t);
          case 9:
            return n.prev = 9, n.t0 = n.catch(2), n.abrupt("return", !1);
          case 12:
            return n.abrupt("return", o);
          case 13:
          case "end":
            return n.stop()
        }
      }, n, null, [
        [2, 9]
      ])
    }))).apply(this, arguments)
  }

  function p(c, l) {
    var e;
    c.interceptors.request.use(function(n) {
      return J1(n).lastRequestTime = Date.now(), n
    }), c.interceptors.response.use(null, (e = C1(d.mark(function n(r) {
      var i, o, t, s, u, h, M;
      return d.wrap(function(n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            if (i = r.config) {
              n.next = 3;
              break
            }
            return n.abrupt("return", Promise.reject(r));
          case 3:
            return a = i, s = O1(O1({}, l), a[Y]), h = s.retries, h = void 0 === h ? 3 : h, M = s.retryCondition, M = void 0 === M ? R1 : M, o = s.retryDelay, o = void 0 === o ? Q1 : o, t = s.shouldResetTimeout, t = void 0 !== t && t, s = s.onRetry, s = void 0 === s ? function() {} : s, u = J1(i), n.next = 7,
              function() {
                return G1.apply(this, arguments)
              }(h, M, u, r);
          case 7:
            if (n.sent) return u.retryCount += 1, h = o(u.retryCount, r), a = i, (e = c).defaults.agent === a.agent && delete a.agent, e.defaults.httpAgent === a.httpAgent && delete a.httpAgent, e.defaults.httpsAgent === a.httpsAgent && delete a.httpsAgent, !t && i.timeout && u.lastRequestTime && (M = Date.now() - u.lastRequestTime, i.timeout = Math.max(i.timeout - M - h, 1)), i.transformRequest = [function(n) {
              return n
            }], s(u.retryCount, r, i), n.abrupt("return", new Promise(z));
            n.next = 15;
            break;
          case 15:
            return n.abrupt("return", Promise.reject(r));
          case 16:
          case "end":
            return n.stop()
        }
        var e, a
      }, n)
    })), function(n) {
      return e.apply(this, arguments)
    }))
  }

  function B1(n) {
    return n || "prod"
  }

  function F1() {
    return U1.apply(this, arguments)
  }

  function U1() {
    return (U1 = g(t().mark(function n(a, r) {
      return t().wrap(function(n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            var e = {};
            e.env = a, e.event = r, Z.push(e);
          case 1:
          case "end":
            return n.stop()
        }
      }, n)
    }))).apply(this, arguments)
  }

  function Y1() {
    return (Y1 = g(t().mark(function n() {
      var a, e, r, i, o;
      return t().wrap(function(n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            a = {}, Z.drain().forEach(function(n) {
              var e;
              null != n && n.event && (e = B1(null == n ? void 0 : n.env), a[e] ? a[e].push(n.event) : a[e] = [n.event])
            }), n.t0 = t().keys(a);
          case 3:
            if ((n.t1 = n.t0()).done) {
              n.next = 20;
              break
            }
            return r = n.t1.value, e = a[r], p(r = F().create({
              baseURL: W[B1(r)],
              timeout: 12e3
            }), {
              retries: 3,
              shouldResetTimeout: !0,
              retryCondition: function(n) {
                return p.isNetworkOrIdempotentRequestError(n) || "ECONNABORTED" === n.code
              },
              retryDelay: x1
            }), n.prev = 8, o = {}, null != (i = talon) && null != (i = i.session) && null != (i = i.session) && null != (i = i.config) && i.acid && null != (i = talon) && null != (i = i.session) && null != (i = i.session) && null != (i = i.config) && i.acid.includes("xenon") && (o["X-Acid-Xenon"] = talon.session.session.id), n.next = 13, r.post("/v1/phaser/batch", e, {
              withCredentials: !0,
              headers: o
            });
          case 13:
            n.next = 18;
            break;
          case 15:
            n.prev = 15, n.t2 = n.catch(8), console.error(n.t2);
          case 18:
            n.next = 3;
            break;
          case 20:
          case "end":
            return n.stop()
        }
      }, n, null, [
        [8, 15]
      ])
    }))).apply(this, arguments)
  }

  function E(n, e, a) {
    var r = {
      event: e,
      timestamp: (new Date).toISOString()
    };
    o.push(r), o.length < 50 && F1(n, {
      event: e,
      session: a,
      timing: o,
      errors: s
    }).catch(console.error), o.push(r), o.length < 50 && F1(n, {
      event: e,
      session: a,
      timing: o,
      errors: s
    }).catch(console.error)
  }

  function T(n, e, a, r, i) {
    console.error(r, i);
    r = {
      type: e,
      timestamp: (new Date).toISOString(),
      message: r,
      stack_trace: i
    };
    s.push(r), s.length < 50 && F1(n, {
      event: e,
      session: a,
      timing: o,
      errors: s,
      error: r
    }).catch(console.error)
  }

  function w(n, t, s, u) {
    return new(s = s || Promise)(function(a, e) {
      function r(n) {
        try {
          o(u.next(n))
        } catch (n) {
          e(n)
        }
      }

      function i(n) {
        try {
          o(u.throw(n))
        } catch (n) {
          e(n)
        }
      }

      function o(n) {
        var e;
        n.done ? a(n.value) : ((e = n.value) instanceof s ? e : new s(function(n) {
          n(e)
        })).then(r, i)
      }
      o((u = u.apply(n, t || [])).next())
    })
  }

  function j(i, o) {
    function n(r) {
      return function(n) {
        var e = [r, n];
        if (t) throw new TypeError("Generator is already executing.");
        for (; h;) try {
          if (t = 1, s && (u = 2 & e[0] ? s.return : e[0] ? s.throw || ((u = s.return) && u.call(s), 0) : s.next) && !(u = u.call(s, e[1])).done) return u;
          switch (s = 0, (e = u ? [2 & e[0], u.value] : e)[0]) {
            case 0:
            case 1:
              u = e;
              break;
            case 4:
              var a = {};
              return a.value = e[1], a.done = !1, h.label++, a;
            case 5:
              h.label++, s = e[1], e = [0];
              continue;
            case 7:
              e = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (!((u = 0 < (u = h.trys).length && u[u.length - 1]) || 6 !== e[0] && 2 !== e[0])) {
                h = 0;
                continue
              }
              if (3 === e[0] && (!u || e[1] > u[0] && e[1] < u[3])) h.label = e[1];
              else if (6 === e[0] && h.label < u[1]) h.label = u[1], u = e;
              else {
                if (!(u && h.label < u[2])) {
                  u[2] && h.ops.pop(), h.trys.pop();
                  continue
                }
                h.label = u[2], h.ops.push(e)
              }
          }
          e = o.call(i, h)
        } catch (n) {
          e = [6, n], s = 0
        } finally {
          t = u = 0
        }
        if (5 & e[0]) throw e[1];
        n = {};
        return n.value = e[0] ? e[1] : void 0, n.done = !0, n
      }
    }
    var t, s, u, h = {
        label: 0,
        sent: function() {
          if (1 & u[0]) throw u[1];
          return u[1]
        },
        trys: [],
        ops: []
      },
      e = {
        next: n(0),
        throw: n(1),
        return: n(2)
      };
    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
      return this
    }), e
  }

  function _1() {
    for (var n = 0, e = 0, a = arguments.length; e < a; e++) n += arguments[e].length;
    for (var r = Array(n), i = 0, e = 0; e < a; e++)
      for (var o = arguments[e], t = 0, s = o.length; t < s; t++, i++) r[i] = o[t];
    return r
  }

  function f() {
    return new Promise(z)
  }

  function V1(n, e) {
    try {
      var a = n();
      a && "function" == typeof a.then ? a.then(function(n) {
        return e(!0, n)
      }, function(n) {
        return e(!1, n)
      }) : e(!0, a)
    } catch (n) {
      e(!1, n)
    }
  }

  function W1(i, o, t) {
    return void 0 === t && (t = 16), w(this, void 0, void 0, function() {
      var e, a, r;
      return o(this, function(n) {
        switch (n.label) {
          case 0:
            e = Date.now(), a = 0, n.label = 1;
          case 1:
            return a < i.length ? (o(i[a], a), (r = Date.now()) >= e + t ? (e = r, [4, f()]) : [3, 3]) : [3, 4];
          case 2:
            n.sent(), n.label = 3;
          case 3:
            return ++a, [3, 1];
          case 4:
            return [2]
        }
      })
    })
  }

  function Z1(n) {
    n.then(void 0, function() {})
  }

  function D(n, e) {
    n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
    var a = [0, 0, 0, 0];
    return a[3] += n[3] + e[3], a[2] += a[3] >>> 16, a[3] &= 65535, a[2] += n[2] + e[2], a[1] += a[2] >>> 16, a[2] &= 65535, a[1] += n[1] + e[1], a[0] += a[1] >>> 16, a[1] &= 65535, a[0] += n[0] + e[0], a[0] &= 65535, [a[0] << 16 | a[1], a[2] << 16 | a[3]]
  }

  function N(n, e) {
    n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
    var a = [0, 0, 0, 0];
    return a[3] += n[3] * e[3], a[2] += a[3] >>> 16, a[3] &= 65535, a[2] += n[2] * e[3], a[1] += a[2] >>> 16, a[2] &= 65535, a[2] += n[3] * e[2], a[1] += a[2] >>> 16, a[2] &= 65535, a[1] += n[1] * e[3], a[0] += a[1] >>> 16, a[1] &= 65535, a[1] += n[2] * e[2], a[0] += a[1] >>> 16, a[1] &= 65535, a[1] += n[3] * e[1], a[0] += a[1] >>> 16, a[1] &= 65535, a[0] += n[0] * e[3] + n[1] * e[2] + n[2] * e[1] + n[3] * e[0], a[0] &= 65535, [a[0] << 16 | a[1], a[2] << 16 | a[3]]
  }

  function S(n, e) {
    return 32 == (e %= 64) ? [n[1], n[0]] : e < 32 ? [n[0] << e | n[1] >>> 32 - e, n[1] << e | n[0] >>> 32 - e] : [n[1] << (e -= 32) | n[0] >>> 32 - e, n[0] << e | n[1] >>> 32 - e]
  }

  function v(n, e) {
    return 0 == (e %= 64) ? n : e < 32 ? [n[0] << e | n[1] >>> 32 - e, n[1] << e] : [n[1] << e - 32, 0]
  }

  function K(n, e) {
    return [n[0] ^ e[0], n[1] ^ e[1]]
  }

  function X1(n) {
    return n = K(n, [0, n[0] >>> 1]), n = K(n = N(n, [4283543511, 3981806797]), [0, n[0] >>> 1]), K(n = N(n, [3301882366, 444984403]), [0, n[0] >>> 1])
  }

  function $1(n) {
    return An(n)
  }

  function A(n) {
    return parseFloat(n)
  }

  function b(n, e) {
    return "number" == typeof n && isNaN(n) ? e : n
  }

  function I(n) {
    return n.reduce(function(n, e) {
      return n + (e ? 1 : 0)
    }, 0)
  }

  function q1(n, e) {
    return void 0 === e && (e = 1), 1 <= Math.abs(e) ? Math.round(n / e) * e : (e = 1 / e, Math.round(n * e) / e)
  }

  function nn(n) {
    return n && "object" == typeof n && "message" in n ? n : {
      message: n
    }
  }

  function en() {
    var n = window,
      e = navigator;
    return 4 <= I(["MSCSSMatrix" in n, "msSetImmediate" in n, "msIndexedDB" in n, "msMaxTouchPoints" in e, "msPointerEnabled" in e])
  }

  function an() {
    var n = window,
      e = navigator;
    return 5 <= I(["webkitPersistentStorage" in e, "webkitTemporaryStorage" in e, 0 === e.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in n, "BatteryManager" in n, "webkitMediaStream" in n, "webkitSpeechGrammar" in n])
  }

  function rn() {
    var n = window,
      e = navigator;
    return 4 <= I(["ApplePayError" in n, "CSSPrimitiveValue" in n, "Counter" in n, 0 === e.vendor.indexOf("Apple"), "getStorageUpdates" in e, "WebKitMediaKeys" in n])
  }

  function on() {
    var n = window;
    return 3 <= I(["safari" in n, !("DeviceMotionEvent" in n), !("ongestureend" in n), !("standalone" in navigator)])
  }

  function tn() {
    var n, e = an(),
      a = (n = window, 4 <= I(["buildID" in navigator, "MozAppearance" in (null != (a = null == (a = document.documentElement) ? void 0 : a.style) ? a : {}), "onmozfullscreenchange" in n, "mozInnerScreenX" in n, "CSSMozDocumentRule" in n, "CanvasCaptureMediaStream" in n]));
    if (e || a) return 2 <= I(["onorientationchange" in (n = window), "orientation" in n, e && !("SharedWorker" in n), a && /android/i.test(navigator.appVersion)])
  }

  function sn(n) {
    var e = new Error(n);
    return e.name = n, e
  }

  function un(e, u, n) {
    var a;
    return void 0 === n && (n = 50), w(this, void 0, void 0, function() {
      var t, s;
      return j(this, function(n) {
        switch (n.label) {
          case 0:
            t = document, n.label = 1;
          case 1:
            return t.body ? [3, 3] : [4, f()];
          case 2:
            return n.sent(), [3, 1];
          case 3:
            s = t.createElement("iframe"), n.label = 4;
          case 4:
            return n.trys.push([4, , 10, 11]), [4, new Promise(function(n, e) {
              var a = !1,
                r = function() {
                  a = !0, n()
                },
                i = (s.onload = r, s.onerror = function(n) {
                  a = !0, e(n)
                }, s.style),
                o = (i.setProperty("display", "block", "important"), i.position = "absolute", i.top = "0", i.left = "0", i.visibility = "hidden", u && "srcdoc" in s ? s.srcdoc = u : s.src = "about:blank", t.body.appendChild(s), function() {
                  var n;
                  a || ("complete" === (null == (n = null == (n = s.contentWindow) ? void 0 : n.document) ? void 0 : n.readyState) ? r() : z())
                });
              o()
            })];
          case 5:
            n.sent(), n.label = 6;
          case 6:
            return null != (a = null == (a = s.contentWindow) ? void 0 : a.document) && a.body ? [3, 8] : [4, f()];
          case 7:
            return n.sent(), [3, 6];
          case 8:
            return [4, e(s, s.contentWindow)];
          case 9:
            return [2, n.sent()];
          case 10:
            return null != (a = s.parentNode) && a.removeChild(s), [7];
          case 11:
            return [2]
        }
      })
    })
  }

  function hn(n) {
    return n.toDataURL()
  }

  function z() {
    var n = screen;
    return [b(A(n.availTop), null), b(A(n.width) - A(n.availWidth) - b(A(n.availLeft), 0), null), b(A(n.height) - A(n.availHeight) - b(A(n.availTop), 0), null), b(A(n.availLeft), null)]
  }

  function Mn(n) {
    for (var e = 0; e < 4; ++e)
      if (n[e]) return;
    return 1
  }

  function cn(u) {
    var h;
    return w(this, void 0, void 0, function() {
      var e, a, r, i, o, t, s;
      return j(this, function(n) {
        switch (n.label) {
          case 0:
            for (e = document, a = e.createElement("div"), r = new Array(u.length), i = {}, ln(a), s = 0; s < u.length; ++s) o = function(h) {
              for (var n = function() {
                  for (var n, e = "Unexpected syntax '" + h + "'", a = /^\s*([a-z-]*)(.*)$/i.exec(h), r = a[1] || void 0, i = {
                      _0x50fb03: i[_0x50fb03] || []
                    }, o = function(n, e) {
                      i[n].push(e)
                    };;) {
                    var t = /([.:#][\w-]+|\[.+?\])/gi.exec(a[2]);
                    if (!t) break;
                    var s = t[0];
                    switch (s[0]) {
                      case ".":
                        o("class", s.slice(1));
                        break;
                      case "#":
                        o("id", s.slice(1));
                        break;
                      case "[":
                        var u = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);
                        if (!u) throw new Error(e);
                        o(u[1], null != (n = null != (n = u[4]) ? n : u[5]) ? n : "");
                        break;
                      default:
                        throw new Error(e)
                    }
                  }
                  return [r, i]
                }(), e = n[0], a = n[1], r = document.createElement(null != e ? e : "div"), i = 0, o = Object.keys(a); i < o.length; i++) {
                var t = o[i],
                  s = a[t].join(" ");
                if ("style" === t) {
                  m = d = y = l = c = M = u = void 0;
                  for (var u = r.style, M = s, c = 0, l = M.split(";"); c < l.length; c++) {
                    var d, m, y = l[c],
                      y = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(y);
                    y && (d = y[1], m = y[2], y = y[4], u.setProperty(d, m, y || ""))
                  }
                } else r.setAttribute(t, s)
              }
              return r
            }(u[s]), ln(t = e.createElement("div")), t.appendChild(o), a.appendChild(t), r[s] = o;
            n.label = 1;
          case 1:
            return e.body ? [3, 3] : [4, f()];
          case 2:
            return n.sent(), [3, 1];
          case 3:
            e.body.appendChild(a);
            try {
              for (s = 0; s < u.length; ++s) r[s].offsetParent || (i[u[s]] = !0)
            } finally {
              null != (h = a.parentNode) && h.removeChild(a)
            }
            return [2, i]
        }
      })
    })
  }

  function ln(n) {
    n.style.setProperty("display", "block", "important")
  }

  function dn(n) {
    return matchMedia("(inverted-colors: " + n + ")").matches
  }

  function mn(n) {
    return matchMedia("(forced-colors: " + n + ")").matches
  }

  function C(n) {
    return matchMedia("(prefers-contrast: " + n + ")").matches
  }

  function yn(n) {
    return matchMedia("(prefers-reduced-motion: " + n + ")").matches
  }

  function gn(n) {
    return matchMedia("(dynamic-range: " + n + ")").matches
  }

  function kn(n) {
    return JSON.stringify(n, function(n, e) {
      return e instanceof Error ? r1({
        name: (a = e).name,
        message: a.message,
        stack: null == (r = a.stack) ? void 0 : r.split("\n")
      }, a) : e;
      var a, r
    }, 2)
  }

  function pn(n) {
    for (var e = function(n) {
        for (var e = "", a = 0, r = Object.keys(n).sort(); a < r.length; a++) var i = r[a],
          o = n[i],
          o = o.error ? "error" : JSON.stringify(o.value),
          e = e + ((e ? "|" : "") + i.replace(/([:|\\])/g, "\\$1")) + ":" + o;
        return e
      }(n), n = (e = e || "").length % 16, a = e.length - n, r = [0, 0], i = [0, 0], o = [0, 0], t = [0, 0], s = [2277735313, 289559509], u = [1291169091, 658871167], h = 0; h < a; h += 16) o = [255 & e.charCodeAt(h + 4) | (255 & e.charCodeAt(h + 5)) << 8 | (255 & e.charCodeAt(h + 6)) << 16 | (255 & e.charCodeAt(h + 7)) << 24, 255 & e.charCodeAt(h) | (255 & e.charCodeAt(h + 1)) << 8 | (255 & e.charCodeAt(h + 2)) << 16 | (255 & e.charCodeAt(h + 3)) << 24], t = [255 & e.charCodeAt(h + 12) | (255 & e.charCodeAt(h + 13)) << 8 | (255 & e.charCodeAt(h + 14)) << 16 | (255 & e.charCodeAt(h + 15)) << 24, 255 & e.charCodeAt(h + 8) | (255 & e.charCodeAt(h + 9)) << 8 | (255 & e.charCodeAt(h + 10)) << 16 | (255 & e.charCodeAt(h + 11)) << 24], o = S(o = N(o, s), 31), r = D(r = S(r = K(r, o = N(o, u)), 27), i), r = D(N(r, [0, 5]), [0, 1390208809]), t = S(t = N(t, u), 33), i = D(i = S(i = K(i, t = N(t, s)), 31), r), i = D(N(i, [0, 5]), [0, 944331445]);
    switch (o = [0, 0], t = [0, 0], n) {
      case 15:
        t = K(t, v([0, e.charCodeAt(h + 14)], 48));
      case 14:
        t = K(t, v([0, e.charCodeAt(h + 13)], 40));
      case 13:
        t = K(t, v([0, e.charCodeAt(h + 12)], 32));
      case 12:
        t = K(t, v([0, e.charCodeAt(h + 11)], 24));
      case 11:
        t = K(t, v([0, e.charCodeAt(h + 10)], 16));
      case 10:
        t = K(t, v([0, e.charCodeAt(h + 9)], 8));
      case 9:
        t = N(t = K(t, [0, e.charCodeAt(h + 8)]), u), i = K(i, t = N(t = S(t, 33), s));
      case 8:
        o = K(o, v([0, e.charCodeAt(h + 7)], 56));
      case 7:
        o = K(o, v([0, e.charCodeAt(h + 6)], 48));
      case 6:
        o = K(o, v([0, e.charCodeAt(h + 5)], 40));
      case 5:
        o = K(o, v([0, e.charCodeAt(h + 4)], 32));
      case 4:
        o = K(o, v([0, e.charCodeAt(h + 3)], 24));
      case 3:
        o = K(o, v([0, e.charCodeAt(h + 2)], 16));
      case 2:
        o = K(o, v([0, e.charCodeAt(h + 1)], 8));
      case 1:
        o = N(o = K(o, [0, e.charCodeAt(h)]), s), r = K(r, o = N(o = S(o, 31), u))
    }
    return r = D(r = K(r, [0, e.length]), i = K(i, [0, e.length])), i = D(i, r), r = D(r = X1(r), i = X1(i)), i = D(i, r), ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8)
  }

  function En(h, M) {
    var c = Date.now();
    return {
      get: function(u) {
        return w(this, void 0, void 0, function() {
          var o, t, s;
          return j(this, function(n) {
            switch (n.label) {
              case 0:
                return o = Date.now(), [4, h()];
              case 1:
                return t = n.sent(), e = t, s = {
                  get visitorId() {
                    return a = void 0 === a ? pn(this.components) : a
                  },
                  set visitorId(n) {
                    a = n
                  },
                  confidence: (r = r = e, i = q1(.99 + .01 * (r = tn() ? .4 : rn() ? on() ? .5 : .3 : (r = r.platform.value || "", /^Win/.test(r) ? .6 : /^Mac/.test(r) ? .5 : .7)), 1e-4), {
                    score: r,
                    comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, "" + i)
                  }),
                  components: e,
                  version: "3.3.6"
                }, (M || null != u && u.debug) && console.log("Copy the text below to get the debug data:\n\n```\nversion: " + s.version + "\nuserAgent: " + navigator.userAgent + "\ntimeBetweenLoadAndGet: " + (o - c) + "\nvisitorId: " + s.visitorId + "\ncomponents: " + kn(t) + "\n```"), [2, s]
            }
            var e, a, r, i
          })
        })
      }
    }
  }

  function Tn(e, n) {
    var a, r = Object.keys(e);
    return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(e), n && (a = a.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable
    })), r.push.apply(r, a)), r
  }

  function wn(i) {
    for (var n = 1; n < arguments.length; n++) {
      var o = null != arguments[n] ? arguments[n] : {};
      n % 2 ? Tn(Object(o), !0).forEach(function(n) {
        var e, a, r;
        e = i, a = o[n = n], (r = {}).value = a, r.enumerable = !0, r.configurable = !0, r.writable = !0, n in e ? Object.defineProperty(e, n, r) : e[n] = a
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : Tn(Object(o)).forEach(function(n) {
        Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(o, n))
      })
    }
    return i
  }

  function jn() {
    return fn.apply(this, arguments)
  }

  function fn() {
    return (fn = g(t().mark(function n(a, r) {
      var i;
      return t().wrap(function(n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.prev = 0, n.t0 = wn, n.t1 = wn, n.t2 = wn, n.t3 = {}, n.next = 7,
              function() {
                return Dn.apply(this, arguments)
              }();
          case 7:
            var e = {
              solve_token: r
            };
            return n.t4 = n.sent, n.t5 = (0, n.t2)(n.t3, n.t4), n.t6 = a, n.t7 = (0, n.t1)(n.t5, n.t6), n.t8 = {}, n.t9 = e, i = (0, n.t0)(n.t7, n.t8, n.t9), n.abrupt("return", {
              v: 1,
              xal: function(n) {
                for (var e = unescape(encodeURIComponent(JSON.stringify(n))), a = "", r = 0; r < e.length; r++) {
                  var i = e.charCodeAt(r) ^ u1.charCodeAt(r % u1.length);
                  a += "0".concat((255 & i).toString(16)).slice(-2)
                }
                return a
              }(i),
              ewa: "b",
              kid: "p98hck"
            });
          case 17:
            n.prev = 17, n.t10 = n.catch(0), T(talon.env, M, talon.session, n.t10.message, n.t10.stack);
          case 20:
          case "end":
            return n.stop()
        }
      }, n, null, [
        [0, 17]
      ])
    }))).apply(this, arguments)
  }

  function Dn() {
    return (Dn = g(t().mark(function n() {
      var a;
      return t().wrap(function(n) {
        for (;;) switch (n.prev = n.next) {
          case 0:
            return n.t0 = function() {
              try {
                return (new Date).toISOString()
              } catch (n) {
                T(talon.env, M, talon.session, n.message, n.stack)
              }
            }(), n.t1 = function() {
              var n, e, a, r, i, o, t, s, u = Math.floor(Math.pow(10, 16) * Math.random()).toString(16);
              if (null !== (n = talon) && void 0 !== n && null !== (e = n.session) && void 0 !== e && null !== (a = e.session) && void 0 !== a && null !== (r = a.config) && void 0 !== r && r.acid && null !== (i = talon) && void 0 !== i && null !== (o = i.session) && void 0 !== o && null !== (t = o.session) && void 0 !== t && null !== (s = t.config) && void 0 !== s && s.acid.includes("iridium")) u = u + u.substr(3, 3);
              try {
                return u
              } catch (n) {
                T(talon.env, M, talon.session, n.message, n.stack)
              }
            }(), n.t2 = function() {
              try {
                var n = {};
                return n.title = document.title, n.referrer = document.referrer, n
              } catch (n) {
                T(talon.env, M, talon.session, n.message, n.stack)
              }
            }(), n.t3 = function() {
              try {
                return {
                  user_agent: navigator.userAgent,
                  platform: navigator.platform,
                  language: navigator.language,
                  languages: navigator.languages,
                  hardware_concurrency: navigator.hardwareConcurrency,
                  device_memory: navigator.deviceMemory,
                  product: navigator.product,
                  product_sub: navigator.productSub,
                  vendor: navigator.vendor,
                  vendor_sub: navigator.vendorSub,
                  webdriver: navigator.webdriver,
                  max_touch_points: navigator.maxTouchPoints,
                  cookie_enabled: navigator.cookieEnabled,
                  property_list: X(navigator, {})
                }
              } catch (n) {
                T(talon.env, M, talon.session, n.message, n.stack)
              }
            }(), n.t4 = function() {
              if (Q) return Q;
              try {
                var n = document.createElement("canvas");
                var e = n.getContext("webgl2") || n.getContext("webgl") || n.getContext("experimental-webgl2") || n.getContext("experimental-webgl");
                if (!e) return {
                  canvas_fingerprint: n1()
                };
                var a = e.getExtension("WEBGL_debug_renderer_info");
                return Q = {
                  canvas_fingerprint: n1(),
                  parameters: {
                    renderer: a && e.getParameter(a.UNMASKED_RENDERER_WEBGL),
                    vendor: a && e.getParameter(a.UNMASKED_VENDOR_WEBGL)
                  }
                }
              } catch (n) {
                T(talon.env, M, talon.session, n.message, n.stack)
              }
            }(), n.next = 7, e1();
          case 7:
            return n.t5 = n.sent, n.t6 = function() {
              try {
                var n = Intl.DateTimeFormat().resolvedOptions();
                var e = {};
                return e.calendar = n.calendar, e.day = n.day, e.locale = n.locale, e.month = n.month, e.numbering_system = n.numberingSystem, e.time_zone = n.timeZone, e.year = n.year, {
                  timezone_offset: (new Date).getTimezoneOffset(),
                  format: e
                }
              } catch (n) {
                T(talon.env, M, talon.session, n.message, n.stack)
              }
            }(), n.t7 = function() {
              try {
                return {
                  sd_recurse: a1()
                }
              } catch (n) {
                T(talon.env, M, talon.session, n.message, n.stack)
              }
            }(), n.next = 12, s1();
          case 12:
            return n.t8 = n.sent, n.t9 = (e = void 0, e = {
              _0x31f351: u[_0x31f351].peek()
            }, Object.keys(u).forEach(function(n) {}), e), n.t10 = (null == (a = talon) || null == (a = a.session) || null == (a = a.session) || null == (a = a.config) ? void 0 : a.acid) && (null == (a = talon) || null == (a = a.session) || null == (a = a.session) || null == (a = a.config) ? void 0 : a.acid.includes("boron")), n.abrupt("return", {
              fingerprint_version: 30,
              timestamp: n.t0,
              math_rand: n.t1,
              document: n.t2,
              navigator: n.t3,
              web_gl: n.t4,
              window: n.t5,
              date: n.t6,
              runtime: n.t7,
              fpjs: n.t8,
              motion: n.t9,
              acid_boron: n.t10
            });
          case 16:
          case "end":
            return n.stop()
        }
        var e
      }, n)
    }))).apply(this, arguments)
  }

  function L() {
    for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
    T1 && console.log.apply(console, n)
  }

  function Nn() {
    for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
    T1 && console.error.apply(console, n)
  }

  function Sn() {
    return new Promise(z)
  }

  function vn(s, u) {
    return w1(this, void 0, void 0, function() {
      var a, r, i, o, t;
      return j1(this, function(n) {
        switch (n.label) {
          case 0:
            var e = {};
            return e.source = u, e.encountered_report_error = !1, L("[nelly] sending report"), t = e, [4, function(y) {
              return w1(this, void 0, void 0, function() {
                var r, i, o, t, s, u, h, M, c, l, d, m;
                return j1(this, function(n) {
                  switch (n.label) {
                    case 0:
                      r = {}, i = 0, o = y.sub_tasks, n.label = 1;
                    case 1:
                      return i < o.length ? (m = o[i], [4, Sn()]) : [3, 8];
                    case 2:
                      n.sent(), L("[nelly] starting task", m.endpoint), t = {
                        provider: m.provider,
                        successful: !1
                      }, n.label = 3;
                    case 3:
                      var e = {
                          "Cache-Control": "no-cache",
                          Pragma: "no-cache",
                          Expires: "0"
                        },
                        a = {
                          method: "GET",
                          mode: "no-cors"
                        };
                      return a.headers = e, n.trys.push([3, 5, , 6]), [4, fetch(m.endpoint, a)];
                    case 4:
                      return n.sent(), t.successful = !0, L("[nelly] task completed", m.endpoint), [3, 6];
                    case 5:
                      return u = n.sent(), t.error = u.message, Nn("[nelly] error sending report", m.endpoint, u), [3, 6];
                    case 6:
                      r[m.task_id] = t, n.label = 7;
                    case 7:
                      return i++, [3, 1];
                    case 8:
                      s = 0, n.label = 9;
                    case 9:
                      if (!(s < Object.keys(r).length)) return [3, 11];
                      for (s = 0, u = performance.getEntriesByType("resource"), h = 0, M = u; h < M.length; h++)
                        for (c = M[h], l = 0, d = y.sub_tasks; l < d.length; l++) m = d[l], c.name === m.endpoint && (r[m.task_id].performance = {
                          e2e: Math.floor(c.duration)
                        }, s++);
                      return [4, Sn()];
                    case 10:
                      return n.sent(), [3, 9];
                    case 11:
                      return L("[nelly]", r), [2, r]
                  }
                })
              })
            }(s)];
          case 1:
            t.results = n.sent(), a = t, r = 0, i = s.report_to, n.label = 2;
          case 2:
            if (!(r < i.length)) return [3, 7];
            o = i[r], a.provider = o.provider, n.label = 3;
          case 3:
            return n.trys.push([3, 5, , 6]), [4, f1.post(o.endpoint, a)];
          case 4:
            return n.sent(), L("[nelly] report acknowledged"), [2];
          case 5:
            return Nn("[nelly] error sending report", n.sent()), a.encountered_report_error = !0, [3, 6];
          case 6:
            return r++, [3, 2];
          case 7:
            return [2]
        }
      })
    })
  }

  function Kn(r, M, c) {
    return n = this, s = function() {
      var e, i, o, t, s, u, h, n;
      return i = this, o = function(n) {
        switch (n.label) {
          case 0:
            return "sleep" === function(n) {
              var e, a = Object.values(n).reduce(function(n, e) {
                  return n + e
                }),
                r = Math.random() * a,
                i = 0;
              for (e in n)
                if ((i += n[e]) >= r) return e;
              return ""
            }({
              run: c,
              sleep: 1 - c
            }) ? (L("[nelly] skipping invocation"), [2]) : [4, Sn()];
          case 1:
            n.sent(), L("[nelly] running nelly"), n.label = 2;
          case 2:
            return n.trys.push([2, 5, , 6]), e = vn, [4, function(o) {
              return w1(this, void 0, void 0, function() {
                var e, a, r, i;
                return j1(this, function(n) {
                  switch (n.label) {
                    case 0:
                      e = 0, a = o, n.label = 1;
                    case 1:
                      if (!(e < a.length)) return [3, 6];
                      L("[nelly] discovering task", r = a[e]), n.label = 2;
                    case 2:
                      return n.trys.push([2, 4, , 5]), [4, f1.get(r)];
                    case 3:
                      return i = n.sent(), L("[nelly] discovered task", r), [2, i.data];
                    case 4:
                      return Nn("[nelly] error fetching discovery url", n.sent()), [3, 5];
                    case 5:
                      return e++, [3, 1];
                    case 6:
                      throw "[nelly] failed to discover nelly task"
                  }
                })
              })
            }(r)];
          case 3:
            return [4, e.apply(void 0, [n.sent(), M])];
          case 4:
            return n.sent(), [3, 6];
          case 5:
            return Nn("[nelly] failed to discover nelly task", n.sent()), [3, 6];
          case 6:
            return L("[nelly] nelly complete"), [2]
        }
      }, h = {
        label: 0,
        sent: function() {
          if (1 & u[0]) throw u[1];
          return u[1]
        },
        trys: [],
        ops: []
      }, n = {
        next: a(0),
        throw: a(1),
        return: a(2)
      }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
        return this
      }), n;

      function a(r) {
        return function(n) {
          var e = [r, n];
          if (t) throw new TypeError("Generator is already executing.");
          for (; h;) try {
            if (t = 1, s && (u = 2 & e[0] ? s.return : e[0] ? s.throw || ((u = s.return) && u.call(s), 0) : s.next) && !(u = u.call(s, e[1])).done) return u;
            switch (s = 0, (e = u ? [2 & e[0], u.value] : e)[0]) {
              case 0:
              case 1:
                u = e;
                break;
              case 4:
                var a = {};
                return a.value = e[1], a.done = !1, h.label++, a;
              case 5:
                h.label++, s = e[1], e = [0];
                continue;
              case 7:
                e = h.ops.pop(), h.trys.pop();
                continue;
              default:
                if (!((u = 0 < (u = h.trys).length && u[u.length - 1]) || 6 !== e[0] && 2 !== e[0])) {
                  h = 0;
                  continue
                }
                if (3 === e[0] && (!u || e[1] > u[0] && e[1] < u[3])) h.label = e[1];
                else if (6 === e[0] && h.label < u[1]) h.label = u[1], u = e;
                else {
                  if (!(u && h.label < u[2])) {
                    u[2] && h.ops.pop(), h.trys.pop();
                    continue
                  }
                  h.label = u[2], h.ops.push(e)
                }
            }
            e = o.call(i, h)
          } catch (n) {
            e = [6, n], s = 0
          } finally {
            t = u = 0
          }
          if (5 & e[0]) throw e[1];
          n = {};
          return n.value = e[0] ? e[1] : void 0, n.done = !0, n
        }
      }
    }, new(t = (t = void 0, Promise))(function(a, e) {
      function r(n) {
        try {
          o(s.next(n))
        } catch (n) {
          e(n)
        }
      }

      function i(n) {
        try {
          o(s.throw(n))
        } catch (n) {
          e(n)
        }
      }

      function o(n) {
        var e;
        n.done ? a(n.value) : ((e = n.value) instanceof t ? e : new t(function(n) {
          n(e)
        })).then(r, i)
      }
      o((s = s.apply(n, [])).next())
    });
    var n, t, s
  }

  function An(n) {
    return n || "prod"
  }

  function O(n) {
    if (window.talon.flows[n]) return window.talon.flows[n];
    throw Hn(new Error('attempted to access flow_id "'.concat(n, '" but it did not exist')), void 0), 'attempted to access flow_id "'.concat(n, '" but it did not exist')
  }

  function bn(e) {
    var n;
    (n = window.talon.flows[e.flow] ? O(e.flow) : n) ? (n.config = e).onReady && n.session && e.onReady(n.session): (window.talon.flows[e.flow] = {
      config: e,
      ready: !1,
      open: !1,
      loadWatchdog: z()
    }, function(h) {
      return l(this, void 0, void 0, function() {
        var i, o, t, s, u;
        return m(this, function(n) {
          switch (n.label) {
            case 0:
              return E(h.env, "sdk_init"), p(i = F().create({
                baseURL: N1[An(h.env)],
                timeout: 12e3
              }), {
                retries: 3,
                shouldResetTimeout: !0,
                retryCondition: function(n) {
                  return p.isNetworkOrIdempotentRequestError(n) || "ECONNABORTED" === n.code
                },
                retryDelay: x1
              }), [4, i.post("/v1/init", {
                flow_id: h.flow
              }, {
                withCredentials: !0
              })];
            case 1:
              return i = n.sent(), o = i.data, O(h.flow).session = o, s = i.data.session, t = s.plan.mode, s = s.config, u = O(h.flow), E(h.env, "sdk_init_complete", u.session), "h_captcha" === (e = u).session.session.plan.mode && ((r = document.createElement("div")).id = "h_captcha_checkbox_".concat(e.session.session.flow_id), document.body.appendChild(r)), (r = document.createElement("div")).id = "talon_container_".concat(e.session.session.flow_id), r.style.visibility = "hidden", r.style.opacity = "0", r.style.zIndex = "-1", r.style.width = "100%", r.style.height = "100%", r.style.border = "none", r.style.top = "0", r.style.left = "0", r.style.position = "fixed", r.style.transition = "0.3s", r.style.background = "#141414", r.style.color = "#fff", r.style.textAlign = "center", r.style.display = "flex", r.style.justifyContent = "center", r.style.flexDirection = "column", r.innerHTML = (e = {
                sessionIDValue: e.session.session.id,
                ipAddressValue: e.session.session.ip_address,
                flowID: e.session.session.flow_id,
                logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTQ2IiBoZWlnaHQ9IjYzMiIgdmlld0JveD0iMCAwIDU0NiA2MzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yMzYuMjQ1IDIxMC42NjdDMjQ1LjIzNiAyMTAuNjY3IDI0Ny45NDUgMjA2Ljc3NCAyNDcuOTQ1IDE5Ni44NTlWMTM0LjU0MUMyNDcuOTQ1IDEyNC42MjYgMjQ1LjIzNiAxMjAuMDI4IDIzNi4yNDUgMTIwLjAyOEgyMjMuMTQyVjIxMC42NjdIMjM2LjI0NVoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yMDYuMTgzIDQzOS4xMjlMMjA2LjQ4NiA0NDAuMDIxTDIwNi44ODMgNDQwLjkwNEgxOTAuMDM4TDE5MC40MzUgNDQwLjAyMUwxOTAuNzM4IDQzOS4xMjlMMTkxLjEzNSA0MzguMTQ0TDE5MS41NDEgNDM3LjI2MUwxOTEuODM1IDQzNi4zNjlMMTkyLjIzMiA0MzUuNDg2TDE5Mi42MjkgNDM0LjUwMUwxOTMuMDI2IDQzMy42MDlMMTkzLjMyOSA0MzIuNzI2TDE5My43MjYgNDMxLjg0NEwxOTQuMTI0IDQzMC45NTJMMTk0LjQyNiA0MjkuOTY2TDE5NC44MjQgNDI5LjA4NEwxOTUuMjIxIDQyOC4xOTFMMTk1LjUyNCA0MjcuMzA5TDE5NS45MjEgNDI2LjQxN0wxOTYuMzE4IDQyNS40MzJMMTk2LjcxNSA0MjQuNTQ5TDE5Ny4wMTggNDIzLjY1N0wxOTcuNDE1IDQyMi43NjRMMTk3LjgxMiA0MjEuNzg5TDE5OC4xMTUgNDIwLjg5N0wxOTguNTEyIDQyMC4wMDRMMTk4LjkxIDQyMC44OTdMMTk5LjIxMiA0MjEuNzg5TDE5OS42IDQyMi43NjRMMjAwLjAwNyA0MjMuNjU3TDIwMC4zMSA0MjQuNTQ5TDIwMC43MDcgNDI1LjQzMkwyMDEuMTA0IDQyNi40MTdMMjAxLjM5NyA0MjcuMzA5TDIwMS44MDQgNDI4LjE5MUwyMDIuMjAxIDQyOS4wODRMMjAyLjQ5NCA0MjkuOTY2TDIwMi45MDEgNDMwLjk1MkwyMDMuMTk0IDQzMS44NDRMMjAzLjk4OSA0MzMuNjA5TDIwNC4yOTIgNDM0LjUwMUwyMDQuNjg5IDQzNS40ODZMMjA1LjA4NiA0MzYuMzY5TDIwNS4zODkgNDM3LjI2MUwyMDUuNzg2IDQzOC4xNDRMMjA2LjE4MyA0MzkuMTI5WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDQ5LjUyOTJDMCAxMy4zNDggMTMuMTk2NyAwIDQ4Ljk0OTIgMEg0OTYuNTY3QzUzMi4zMTkgMCA1NDUuNTE2IDEzLjM0OCA1NDUuNTE2IDQ5LjUyOTJWNDg2LjEyMUM1NDUuNTE2IDQ5MC4yMjIgNTQ1LjUxNiA1MTguNTQ2IDUxNy40MzkgNTMzLjUxQzQ4OS4zNjIgNTQ4LjQ3MyAyOTcuNzQ2IDYyNS41NTYgMjk3Ljc0NiA2MjUuNTU2QzI4Ni40NjkgNjMwLjc4OSAyODEuMDE2IDYzMi4xNDkgMjcyLjc1OCA2MzEuOTg3QzI2My40ODggNjMxLjk4NyAyNjAuMDEyIDYzMC43NTcgMjQ3LjY1NyA2MjUuNTU2QzI0Ny42NTcgNjI1LjU1NiA1Ni4xNzMxIDU0NS45NzQgMjguMDg2NSA1MzMuNTFDMi4zNDIxNCA1MjEuNTU4IDEuMzE3NSA1MDcuOTM2IDAuNjk1NDMgNDk5LjY2NkMwLjYzODgzNiA0OTguOTE0IDAuNTg1NTc1IDQ5OC4yMDYgMC41MTczMzQgNDk3LjU0N0MwLjE1OTkwMyA0OTQuMDE4IDAgNDkwLjIyMiAwIDQ4Ni4xMjFWNDkuNTI5MlpNMTczLjU4NSAxODYuMDE2VjIyMy4xNTZIMTI0LjEyOFYyOTcuNTI0SDE3My41ODVWMzM0LjU4OEg4Ni43OTI0Vjg2Ljc0NTFIMTczLjU4NVYxMjMuODY2SDEyNC4xMjhWMTg2LjAxNkgxNzMuNTg1Wk00MDcuMDY2IDMwMi40ODVDNDE2LjY4NSAzMDIuNDg1IDQyMS41ODQgMjk3Ljk2NSA0MjEuNTg0IDI4OC4yMTdWMjM1LjQ4N0g0NTguNzZWMjg5Ljk1NkM0NTguNzYgMzIwLjI0MiA0NDMuMzYzIDMzNC43MzkgNDEyLjM0MyAzMzQuNzM5SDM5My40NEMzNjIuNDMgMzM0LjczOSAzNDcuMTcgMzIwLjI0MiAzNDcuMTcgMjg5Ljk1NlYxMzYuMzQzQzM0Ny4xNyAxMDYuMDU4IDM2Mi40MyA4Ni45Njk3IDM5My40NCA4Ni45Njk3SDQxMS45ODlDNDQzIDg2Ljk2OTcgNDU4Ljc2IDEwMi4yODMgNDU4Ljc2IDEzMi41NTlWMTg1LjkzOEw0MjEuNTg0IDE4NS44NzJWMTM2LjM0M0M0MjEuNTg0IDEyNC4wNDEgNDE4LjA1MSAxMjAuMDg2IDQwNi4zNDggMTIwLjA4NkgzOTkuOTM1QzM4OS45NTMgMTIwLjA4NiAzODQuNDc5IDEyNi41OTUgMzg0LjQ3OSAxMzYuMzQzVjI4OC4yMTdDMzg0LjQ3OSAyOTcuOTY1IDM4OS45NTMgMzAyLjQ4NSAzOTkuOTM1IDMwMi40ODVINDA3LjA2NlpNMjk3LjU3NCAzMzQuNTg4SDMzNC43NzFWODYuNzQ1MUgyOTcuNTc0VjMzNC41ODhaTTE4NS45ODQgMzM0LjU4OFY4Ni43NDUxSDI0MS45MDJDMjcwLjg2NyA4Ni43NDUxIDI4NS4xNzUgMTAxLjk2NyAyODUuMTc1IDEzMi43NzJWMTk4LjYzOEMyODUuMTc1IDIyOS40MzIgMjcwLjg2NyAyNDQuNjU0IDI0MS45MDIgMjQ0LjY1NEgyMjMuMTQyVjMzNC41ODhIMTg1Ljk4NFpNNDY0Ljc2MSA0NTAuODQ4TDQ2NC44NjUgNDQ5Ljg2M0w0NjQuOTU5IDQ0OC43NzVWNDQ2LjQxNUw0NjQuODY1IDQ0NS4zMzdMNDY0Ljc2MSA0NDQuMzUyTDQ2NC4zNjMgNDQyLjM4Mkw0NjQuMTY1IDQ0MS40OTlMNDYzLjg3MSA0NDAuNjE2TDQ2My41NjkgNDM5LjcyNEw0NjMuMTcyIDQzOC45NDNMNDYyLjY3IDQzOC4wNTFMNDYyLjE2OSA0MzcuMjcxTDQ2MS41NzMgNDM2LjM4OEw0NjAuOTc3IDQzNS41OThMNDYwLjI3NyA0MzQuOTFMNDU5LjU3NyA0MzQuMTJMNDU3Ljk4OCA0MzIuNzQ1TDQ1Ny4xODQgNDMyLjI1M0w0NTYuMzkgNDMxLjY1OEw0NTUuNTk1IDQzMS4xNzVMNDUzLjc5OCA0MzAuMTlMNDUyLjgwNSA0MjkuNjk3TDQ1MS44MDIgNDI5LjI5N0w0NTAuODA5IDQyOC44MDVMNDQ5LjcxMiA0MjguNDI0TDQ0OC44MTQgNDI4LjEyNkw0NDcuOTI0IDQyNy44MjlMNDQ2LjkyMiA0MjcuNTQxTDQ0Ni4wMjMgNDI3LjI0NEw0NDQuMDM3IDQyNi42NDlMNDQzLjAzNCA0MjYuNDU0TDQ0MS45MzcgNDI2LjE1Nkw0NDAuOTQ0IDQyNS44NjhMNDM5Ljg0NyA0MjUuNjY0TDQzOC43NSA0MjUuMzc2TDQzNi41NTUgNDI0Ljc4MUw0MzUuNTYyIDQyNC41ODZMNDM0LjY2NCA0MjQuMjg5TDQzMy43NjUgNDI0LjA5M0w0MzIuOTcgNDIzLjc5Nkw0MzIuMTc2IDQyMy42MDFMNDMwLjk3NSA0MjMuMjExTDQyOS44NzggNDIyLjgxMUw0MjguODg0IDQyMi40MjFMNDI4LjA5IDQyMS45MjhMNDI3LjE4MiA0MjEuNDM2TDQyNi40OTEgNDIwLjc0OEw0MjYuMDg1IDQyMC4xNjJMNDI1LjU5MyA0MTkuMDc1TDQyNS40ODkgNDE3LjgwMlY0MTcuNTk4TDQyNS41OTMgNDE2LjYyMkw0MjUuOTkgNDE1LjczTDQyNi41ODYgNDE0Ljg0N0w0MjcuNDg1IDQxNC4wNTdMNDI4LjE4NCA0MTMuNjY3TDQyOC45NzkgNDEzLjI3Nkw0MjkuODc4IDQxMy4wODFMNDMwLjg4IDQxMi44NzdMNDMxLjk2OCA0MTIuNjgySDQzNC4xNjJMNDM1LjA2MSA0MTIuNzg0TDQzNi4wNjMgNDEyLjg3N0w0MzcuMDU3IDQxMi45NzlMNDM5LjA0MyA0MTMuMzY5TDQ0MC4wNDUgNDEzLjU2NEw0NDEuMDM5IDQxMy44NjJMNDQyLjA0MSA0MTQuMTU5TDQ0My4xMjkgNDE0LjQ1N0w0NDMuOTMzIDQxNC44NDdMNDQ0LjgzMSA0MTUuMTQ0TDQ0NS42MjYgNDE1LjUzNUw0NDYuNTI1IDQxNS45MjVMNDQ3LjMxOSA0MTYuMzI0TDQ0OC4yMTggNDE2LjcxNUw0NDkuMDEyIDQxNy4yMDdMNDQ5LjkxMSA0MTcuNTk4TDQ1MC43MTUgNDE4LjE5Mkw0NTEuNTA5IDQxOC42ODVMNDUyLjM5OCA0MTkuMTc3TDQ1My4yMDIgNDE5Ljc2M0w0NTMuNzk4IDQxOC45ODJMNDU0LjI5OSA0MTguMTkyTDQ1NC44OTUgNDE3LjQwMkw0NTUuNDkxIDQxNi42MjJMNDU2LjA4NyA0MTUuNzNMNDU2LjU4OCA0MTQuOTQ5TDQ1Ny4xODQgNDE0LjE1OUw0NTcuNzkgNDEzLjM2OUw0NTguMjgxIDQxMi41ODlMNDU4Ljg3NyA0MTEuNzk5TDQ1OS40ODMgNDExLjAwOUw0NTkuOTg0IDQxMC4yMjhMNDYwLjU3IDQwOS4zMzZMNDYxLjE3NiA0MDguNTU2TDQ2MS43NzIgNDA3Ljc2Nkw0NjIuMjczIDQwNi45NzZMNDYyLjg2OSA0MDYuMTg2TDQ2MS4yOCA0MDUuMDE1TDQ2MC40NzYgNDA0LjQyTDQ1OS42ODEgNDAzLjkyOEw0NTguNzgzIDQwMy4zNDJMNDU3Ljk4OCA0MDIuODVMNDU2LjE5MSA0MDEuODY1TDQ1NS4zOTcgNDAxLjQ2NUw0NTQuNDk4IDQwMC45ODJMNDUzLjQ5NSA0MDAuNTgyTDQ1Mi42MDYgNDAwLjE5Mkw0NTEuNzA4IDM5OS44MDJMNDUwLjgwOSAzOTkuNTA0TDQ0OS44MDcgMzk5LjEwNUw0NDguOTE4IDM5OC45MDlMNDQ4LjAxOSAzOTguNjEyTDQ0Ny4wMTYgMzk4LjMyNEw0NDYuMTI3IDM5OC4xMjlMNDQ1LjEyNSAzOTcuOTI0TDQ0NC4xMzIgMzk3LjcyOUw0NDMuMjMzIDM5Ny41MzRMNDQyLjI0IDM5Ny4zMzlMNDQxLjE0MyAzOTcuMjM3TDQ0MC4xNDkgMzk3LjA0Mkw0MzkuMDQzIDM5Ni45NDlINDM4LjA1TDQzNS44NTUgMzk2Ljc0NEg0MzEuNTcxTDQyOS41ODQgMzk2Ljk0OUw0MjguNTgyIDM5Ny4wNDJMNDI3LjU4OSAzOTcuMTQ0TDQyNi42OSAzOTcuMzM5TDQyNS42OTcgMzk3LjUzNEw0MjQuNzg5IDM5Ny43MjlMNDIzLjkgMzk3LjkyNEw0MjMuMTA1IDM5OC4xMjlMNDIyLjE5NyAzOTguNDE3TDQyMS4yMDQgMzk4LjgxNkw0MjAuMjExIDM5OS4xMDVMNDE5LjMxMiAzOTkuNTA0TDQxOC40MTQgMzk5Ljk5N0w0MTcuNTE1IDQwMC4zODdMNDE2LjYxNyA0MDAuODhMNDE1LjgyMiA0MDEuMzcyTDQxNS4wMjggNDAxLjk1OEw0MTQuMjI0IDQwMi41NTJMNDEzLjUzMyA0MDMuMDQ1TDQxMi43MjkgNDAzLjczMkw0MTIuMDM5IDQwNC41MjJMNDExLjMzOSA0MDUuMjFMNDEwLjYzOSA0MDUuOTkxTDQwOS40NDcgNDA3LjU3TDQwOC45NDYgNDA4LjQ1M0w0MDguNDU0IDQwOS4zMzZMNDA4LjA0NyA0MTAuMjI4TDQwNy4yNTMgNDExLjk5NEw0MDcuMDU0IDQxMi44NzdMNDA2Ljc1MSA0MTMuNzY5TDQwNi4zNTQgNDE1LjUzNUw0MDYuMjUgNDE2LjUyTDQwNi4xNTYgNDE3LjQwMkw0MDYuMDUyIDQxOC4zODdWNDIwLjY1NUw0MDYuMjUgNDIyLjcxOEw0MDYuMzU0IDQyMy43MDNMNDA2LjU1MyA0MjQuNTg2TDQwNi43NTEgNDI1LjU3MUw0MDcuMDU0IDQyNi4zNTJMNDA3LjM0NyA0MjcuMjQ0TDQwNy42NSA0MjguMDI0TDQwOC4wNDcgNDI4LjcxMkw0MDguNTQ5IDQyOS41OTVMNDA5LjA0IDQzMC4zODVMNDA5LjU0MiA0MzEuMDcyTDQxMC4xMzggNDMxLjc2TDQxMC43NDMgNDMyLjQ0OEw0MTEuNDMzIDQzMy4xMzVMNDEyLjEzMyA0MzMuODIzTDQxMi44MzMgNDM0LjQxOEw0MTMuNjI4IDQzNC45MUw0MTQuNDMyIDQzNS40OTZMNDE1LjMyMSA0MzUuOTg4TDQxNi4xMjUgNDM2LjQ4MUw0MTcuMTE4IDQzNi45NzNMNDE4LjAxNyA0MzcuNDY2TDQxOS4wMSA0MzcuODU2TDQyMC4wMTIgNDM4LjI1Nkw0MjEuMDA1IDQzOC42NDZMNDIyLjEwMyA0MzkuMDM2TDQyMy45IDQzOS42MzFMNDI0Ljc4OSA0MzkuOTI5TDQyNS43OTEgNDQwLjEyNEw0MjYuNjkgNDQwLjQyMUw0MjcuNjgzIDQ0MC43MDlMNDI4LjY3NiA0NDAuOTA0TDQyOS42NzkgNDQxLjIwMkw0MzAuNjcyIDQ0MS4zOTdMNDMxLjc2OSA0NDEuNjk0TDQzMi43NzIgNDQxLjg4OUw0MzMuODYgNDQyLjE4N0w0MzQuODYyIDQ0Mi4zODJMNDM1Ljg1NSA0NDIuNjc5TDQzNi43NTQgNDQyLjg3NEw0MzcuNjUyIDQ0My4xNzJMNDM4LjQ0NyA0NDMuMzY3TDQzOS4xNDcgNDQzLjU2Mkw0NDAuMzM5IDQ0NC4wNTVMNDQxLjM0MSA0NDQuNDU0TDQ0Mi4yNCA0NDQuODQ1TDQ0My4wMzQgNDQ1LjIzNUw0NDMuODI5IDQ0NS44M0w0NDQuNTI5IDQ0Ni40MTVMNDQ1LjAzIDQ0Ny4xMDNMNDQ1LjQyNyA0NDguMDg4TDQ0NS41MzEgNDQ5LjI2OFY0NDkuNDYzTDQ0NS40MjcgNDUwLjQ0OEw0NDUuMTI1IDQ1MS4zMzFMNDQ0LjcyNyA0NTIuMTIxTDQ0NC4xMzIgNDUyLjgwOUw0NDMuMzM3IDQ1My40MDNMNDQyLjYzNyA0NTMuNzk0TDQ0MS44MzMgNDU0LjA5MUw0NDAuOTQ0IDQ1NC4yODZMNDQwLjA0NSA0NTQuNDgxTDQzOS4wNDMgNDU0LjY3Nkw0MzcuOTQ2IDQ1NC43NzlINDM1Ljc2MUw0MzQuNjY0IDQ1NC42NzZINDMzLjY3TDQzMi42NjggNDU0LjQ4MUw0MzEuNTcxIDQ1NC4zODhMNDMwLjU3NyA0NTQuMTg0TDQyOS41ODQgNDUzLjk4OUw0MjguNTgyIDQ1My43OTRMNDI3LjY4MyA0NTMuNDk2TDQyNi42OSA0NTMuMjA4TDQyNS42OTcgNDUyLjkxMUw0MjQuNzg5IDQ1Mi41Mkw0MjMuOSA0NTIuMjIzTDQyMy4wMDEgNDUxLjgyNEw0MjEuMjA0IDQ1MS4wNDNMNDIwLjQxIDQ1MC41NUw0MTkuNTExIDQ1MC4xNkw0MTguNzE2IDQ0OS42NThMNDE3LjgxOCA0NDkuMDczTDQxNy4wMTQgNDQ4LjU4TDQxNi4xMjUgNDQ3Ljk5NUw0MTUuMzIxIDQ0Ny40TDQxNC40MzIgNDQ2LjgwNUw0MTMuNjI4IDQ0Ni4yMkw0MTMuMDMyIDQ0Ny4wMUw0MTIuMzMyIDQ0Ny42OTdMNDExLjczNiA0NDguNDg3TDQxMS4wMzYgNDQ5LjI2OEw0MTAuNDQgNDQ5Ljk1Nkw0MDkuODQ0IDQ1MC43NDZMNDA5LjE0NCA0NTEuNTM1TDQwOC41NDkgNDUyLjIyM0w0MDcuODQ5IDQ1My4wMDRMNDA3LjI1MyA0NTMuNzAxTDQwNi41NTMgNDU0LjQ4MUw0MDUuOTU3IDQ1NS4yNzFMNDA1LjM2MSA0NTUuOTU5TDQwNC42NjEgNDU2Ljc0OUw0MDQuMDY1IDQ1Ny41MjlMNDAzLjM2NSA0NTguMjE3TDQwMi43NjkgNDU5LjAwN0w0MDMuNTY0IDQ1OS42OTVMNDA0LjI2NCA0NjAuMjg5TDQwNS4wNTggNDYwLjg3NUw0MDUuODUzIDQ2MS40N0w0MDYuNjU3IDQ2Mi4wNTVMNDA3LjQ1MSA0NjIuNjVMNDA5LjA0IDQ2My42MzVMNDA5Ljk0OCA0NjQuMTI3TDQxMC43NDMgNDY0LjYxMUw0MTEuNjMyIDQ2NS4xMDNMNDEyLjU0IDQ2NS41MDNMNDEzLjQyOSA0NjUuOTg2TDQxNC4zMjggNDY2LjM3Nkw0MTUuMjI2IDQ2Ni43NzZMNDE2LjIxOSA0NjcuMTY2TDQxNy4xMTggNDY3LjQ2NEw0MTguMTExIDQ2Ny43NjFMNDE5LjAxIDQ2OC4xNTFMNDIwLjAxMiA0NjguNDQ5TDQyMS4wMDUgNDY4LjczN0w0MjEuOTA0IDQ2OC45NDFMNDIyLjg5NyA0NjkuMjI5TDQyMy45IDQ2OS40MzRMNDI2Ljg4OSA0NzAuMDE5TDQyNy44ODIgNDcwLjEyMUw0MjguODg0IDQ3MC4zMTZMNDI5Ljk3MiA0NzAuNDA5TDQzMS45NjggNDcwLjYxNEg0MzMuMDY1TDQzNC4wNTggNDcwLjcwN0g0MzguMjQ4TDQ0MC4zMzkgNDcwLjUxMkw0NDEuMzQxIDQ3MC40MDlMNDQzLjIzMyA0NzAuMjE0TDQ0NC4yMzYgNDcwLjAxOUw0NDUuMTI1IDQ2OS44MjRMNDQ2LjAyMyA0NjkuNjI5TDQ0Ny4wMTYgNDY5LjQzNEw0NDcuOTI0IDQ2OS4xMzZMNDQ5LjkxMSA0NjguNTQyTDQ1MC45MDQgNDY4LjE1MUw0NTEuOTA2IDQ2Ny43NjFMNDUyLjgwNSA0NjcuMjY4TDQ1My42OTQgNDY2Ljg2OUw0NTQuNjAyIDQ2Ni4zNzZMNDU1LjM5NyA0NjUuNzkxTDQ1Ni4xOTEgNDY1LjMwOEw0NTYuOTg2IDQ2NC43MTNMNDU3LjY4NiA0NjQuMTI3TDQ1OC40OCA0NjMuNDNMNDU5Ljc3NiA0NjIuMTU3TDQ2MC4zNzIgNDYxLjQ3TDQ2MC44NzMgNDYwLjY4TDQ2MS40NjkgNDU5Ljg5TDQ2Mi40NzIgNDU4LjMxOUw0NjIuODY5IDQ1Ny40MzZMNDYzLjI2NiA0NTYuNjQ3TDQ2My42NjMgNDU1Ljc2NEw0NjMuOTY2IDQ1NC43NzlMNDY0LjE2NSA0NTMuODk2TDQ2NC40NTggNDUyLjkxMUw0NjQuNjY2IDQ1MS45MjZMNDY0Ljc2MSA0NTAuODQ4Wk0zMzcuODQ2IDQ2OS41MjdIMzk1Ljk1OVY0NTMuMzAxSDM1Ni44ODZWNDQxLjEwOUgzOTEuNTdWNDI1Ljg2OEgzNTYuODg2VjQxNC4xNTlIMzk1LjQ1OFYzOTcuOTI0SDMzNy44NDZWNDY5LjUyN1pNMzAzLjg5IDQ2OS41MjdIMzIzLjEyOVYzOTcuOTI0SDMwMi42OThMMzAyLjE5NyAzOTguNzE0TDMwMS43MDUgMzk5LjU5N0wzMDEuMSA0MDAuMzc4TDMwMC41OTggNDAxLjI3TDMwMC4xMDcgNDAyLjA1TDI5OS42MDUgNDAyLjk0M0wyOTkuMDA5IDQwMy43MjNMMjk4LjUwOCA0MDQuNjA2TDI5OC4wMDcgNDA1LjM5NkwyOTcuNTE1IDQwNi4xNzZMMjk2LjkxOSA0MDcuMDU5TDI5Ni40MTggNDA3Ljg0OUwyOTUuOTE2IDQwOC43MzJMMjk1LjQxNSA0MDkuNTIyTDI5NC44MjkgNDEwLjM5NkwyOTMuODI2IDQxMS45NzVMMjkzLjMyNSA0MTIuODQ5TDI5Mi44MzMgNDEzLjYzOUwyOTIuMjM3IDQxNC41MjJMMjkxLjczNiA0MTUuMzExTDI5MS4yMzQgNDE2LjE4NUwyOTAuNzMzIDQxNi45NzVMMjkwLjEzNyA0MTcuODU4TDI4OS42NDUgNDE4LjYzOEwyODkuMTQ0IDQxOS40MjhMMjg4LjY0MyA0MjAuMzExTDI4OC4wNDcgNDIxLjEwMUwyODcuNTQ2IDQyMS45ODRMMjg3LjA1NCA0MjIuNzY0TDI4Ni41NTIgNDIzLjY1N0wyODUuOTU3IDQyNC40MzdMMjg1LjQ1NSA0MjUuMzJMMjg0Ljk1NCA0MjYuMTFMMjg0LjQ2MiA0MjUuMzJMMjgzLjk2MSA0MjQuNDM3TDI4My4zNTUgNDIzLjY1N0wyODIuODY0IDQyMi43NjRMMjgyLjM2MiA0MjEuOTg0TDI4MS44NyA0MjEuMTAxTDI4MS4zNjkgNDIwLjMxMUwyODAuNzY0IDQxOS40MjhMMjgwLjI3MiA0MTguNjM4TDI3OS43NzEgNDE3Ljg1OEwyNzkuMjc5IDQxNi45NzVMMjc4Ljc3NyA0MTYuMTg1TDI3OC4xNzIgNDE1LjMxMUwyNzcuNjggNDE0LjUyMkwyNzcuMTc5IDQxMy42MzlMMjc2LjY4NyA0MTIuODQ5TDI3Ni4xODYgNDExLjk3NUwyNzUuNTgxIDQxMS4xODVMMjc1LjA4OSA0MTAuMzk2TDI3NC41ODcgNDA5LjUyMkwyNzQuMDg2IDQwOC43MzJMMjczLjQ5IDQwNy44NDlMMjcyLjk4OSA0MDcuMDU5TDI3Mi40OTcgNDA2LjE3NkwyNzEuOTk2IDQwNS4zOTZMMjcxLjQ5NCA0MDQuNjA2TDI3MC44OTkgNDAzLjcyM0wyNzAuNDA3IDQwMi45NDNMMjY5LjkwNSA0MDIuMDVMMjY5LjQwNCA0MDEuMjdMMjY4LjkwMyA0MDAuMzc4TDI2OC4zMDcgMzk5LjU5N0wyNjcuODA2IDM5OC43MTRMMjY3LjMxNCAzOTcuOTI0SDI0Ni44ODNWNDY5LjUyN0gyNjUuODE5VjQyNy4zODNMMjY2LjQxNSA0MjguMTczTDI2Ni45MTcgNDI5LjA2NUwyNjcuNTEyIDQyOS44NDZMMjY4LjAxNCA0MzAuNzM4TDI2OC42MSA0MzEuNTI4TDI2OS4xMDEgNDMyLjQxMUwyNjkuNzA3IDQzMy4yTDI3MC4xOTkgNDM0LjA4M0wyNzAuODA0IDQzNC44NzNMMjcxLjMwNSA0MzUuNzU2TDI3MS45MDEgNDM2LjU0NkwyNzIuNDAyIDQzNy40MzhMMjcyLjk4OSA0MzguMjI4TDI3My40OSA0MzkuMTExTDI3NC4wODYgNDM5LjkwMUwyNzQuNTg3IDQ0MC43ODNMMjc1LjE5MyA0NDEuNTczTDI3NS43ODkgNDQyLjQ1NkwyNzYuMjggNDQzLjI0NkwyNzYuODc2IDQ0NC4xMzhMMjc3LjM3OCA0NDQuOTI4TDI3Ny45ODMgNDQ1LjgxMUwyNzguNDc1IDQ0Ni42MDFMMjc5LjA4IDQ0Ny40ODRMMjc5LjU3MiA0NDguMjc0TDI4MC4xNjggNDQ5LjE1NkwyODAuNjY5IDQ0OS45NDZMMjgxLjI2NSA0NTAuODI5TDI4MS43NjYgNDUxLjYyOEwyODIuMzYyIDQ1Mi41MTFMMjgyLjg2NCA0NTMuMzAxTDI4My40NTkgNDU0LjE4NEwyODMuOTYxIDQ1NC45NzRMMjg0LjU1NyA0NTUuODU3SDI4NC45NTRMMjg1LjQ1NSA0NTUuMDc2TDI4Ni4wNTEgNDU0LjE4NEwyODYuNTUyIDQ1My4zOTRMMjg3LjE0OCA0NTIuNjA0TDI4Ny42NSA0NTEuNzIxTDI4OC4yNDUgNDUwLjkzMUwyODguNzM3IDQ1MC4xNDFMMjg5LjIzOSA0NDkuMjU5TDI4OS44NDQgNDQ4LjQ2OUwyOTAuMzM2IDQ0Ny42ODhMMjkwLjk0MSA0NDYuODg5TDI5MS40MzMgNDQ2LjAwNkwyOTIuMDI5IDQ0NS4yMTZMMjkyLjUzIDQ0NC40MzZMMjkzLjAzMSA0NDMuNTQzTDI5My42MjcgNDQyLjc1NEwyOTQuMTI5IDQ0MS45NjRMMjk0LjcyNSA0NDEuMDgxTDI5NS4yMTYgNDQwLjI5MUwyOTUuODIyIDQzOS41MDFMMjk2LjMyMyA0MzguNjE4TDI5Ni44MTUgNDM3LjgyOEwyOTcuNDIgNDM3LjA0OEwyOTcuOTEyIDQzNi4xNTZMMjk4LjUwOCA0MzUuMzY2TDI5OS4wMDkgNDM0LjU3NkwyOTkuNjA1IDQzMy43OTVMMzAwLjEwNyA0MzIuOTAzTDMwMC41OTggNDMyLjExM0wzMDEuMjA0IDQzMS4zMjNMMzAxLjcwNSA0MzAuNDRMMzAyLjMwMSA0MjkuNjUxTDMwMi44MDIgNDI4Ljg3TDMwMy4zOTggNDI3Ljk3OEwzMDMuODkgNDI3LjE4OFY0NjkuNTI3Wk0yMTguMjQzIDQ2OS41MjdIMjM4Ljc3N0wyMzcuOTgzIDQ2Ny43NjFMMjM3LjU4NiA0NjYuODY5TDIzNy4yODMgNDY1Ljg4NEwyMzYuODg2IDQ2NS4wMUwyMzYuNDg4IDQ2NC4xMjdMMjM2LjA5MSA0NjMuMjM1TDIzNS4yODcgNDYxLjQ3TDIzNC44OTkgNDYwLjQ4NUwyMzQuNDkzIDQ1OS42MDJMMjM0LjE5IDQ1OC43MUwyMzMuODAyIDQ1Ny44MjdMMjMzLjM5NSA0NTYuOTQ0TDIzMi45OTggNDU2LjA2MUwyMzIuNjAxIDQ1NS4wNzZMMjMyLjIwNCA0NTQuMTg0TDIzMS40IDQ1Mi40MThMMjMxLjEwNyA0NTEuNTM1TDIzMC43MDkgNDUwLjY0M0wyMzAuMzAzIDQ0OS42NThMMjI4LjcxNCA0NDYuMTI3TDIyOC4zMTYgNDQ1LjIzNUwyMjguMDE0IDQ0NC4yNUwyMjYuODIyIDQ0MS42MDFMMjI2LjQxNSA0NDAuNzA5TDIyNi4wMTggNDM5LjgyNkwyMjUuNjIxIDQzOC44NDFMMjI1LjIyMyA0MzcuOTU4TDIyNC45MjEgNDM3LjA3NkwyMjQuNTMzIDQzNi4xODNMMjI0LjEyNiA0MzUuMzAxTDIyMy43MjkgNDM0LjQxOEwyMjMuMzMyIDQzMy40MzNMMjIyLjkzNCA0MzIuNTVMMjIyLjEzIDQzMC43NzVMMjIxLjgzNyA0MjkuODkyTDIyMS40NCA0MjkuMDA5TDIyMS4wMzMgNDI4LjEyNkwyMjAuNjQ1IDQyNy4xNDFMMjE5Ljg0MSA0MjUuMzc2TDIxOS40NDQgNDI0LjQ4NEwyMTkuMDQ3IDQyMy42MDFMMjE4Ljc0NCA0MjIuNzE4TDIxOC4zNDcgNDIxLjczM0wyMTcuOTUgNDIwLjg1TDIxNy41NTIgNDE5Ljk1OEwyMTcuMTQ2IDQxOS4wNzVMMjE2LjM1MSA0MTcuMzFMMjE1Ljk1NCA0MTYuMzI0TDIxNS42NTEgNDE1LjQ0MkwyMTUuMjYzIDQxNC41NDlMMjE0Ljg1NyA0MTMuNjY3TDIxNC40NiA0MTIuNzg0TDIxNC4wNjIgNDExLjg5MkwyMTMuNjY1IDQxMC45MTZMMjEzLjI1OCA0MTAuMDI0TDIxMi44NjEgNDA5LjE0MUwyMTIuNTY4IDQwOC4yNThMMjEyLjE3MSA0MDcuMzc1TDIxMS43NjQgNDA2LjQ4M0wyMTEuMzc2IDQwNS40OThMMjEwLjk2OSA0MDQuNjE1TDIxMC4xNzUgNDAyLjg1TDIwOS43NzggNDAxLjk1OEwyMDkuNDc1IDQwMS4wNzVMMjA5LjA3OCA0MDAuMDlMMjA4LjI4MyAzOTguMzI0TDIwNy44NzYgMzk3LjQzMkgxODkuNDQyTDE4OS4wNDQgMzk4LjMyNEwxODguNjQ3IDM5OS4yMDdMMTg4LjI0IDQwMC4wOUwxODcuOTQ3IDQwMS4wNzVMMTg3LjU1IDQwMS45NThMMTg3LjE1MyA0MDIuODVMMTg2Ljc0NiA0MDMuNzMyTDE4Ni4zNTggNDA0LjYxNUwxODUuOTUyIDQwNS40OThMMTg1LjU1NCA0MDYuNDgzTDE4NS4xNDggNDA3LjM3NUwxODQuODU0IDQwOC4yNThMMTg0LjA2IDQxMC4wMjRMMTgzLjY2MyA0MTAuOTE2TDE4My4yNjUgNDExLjg5MkwxODIuODU5IDQxMi43ODRMMTgyLjA2NCA0MTQuNTQ5TDE4MS43NjEgNDE1LjQ0MkwxODEuMzY0IDQxNi4zMjRMMTgwLjk2NyA0MTcuMzFMMTc5Ljc3NSA0MTkuOTU4TDE3OS4zNzggNDIwLjg1TDE3OC45NzEgNDIxLjczM0wxNzguNjc4IDQyMi43MThMMTc3Ljg4MyA0MjQuNDg0TDE3Ny40NzcgNDI1LjM3NkwxNzYuNjgyIDQyNy4xNDFMMTc2LjI4NSA0MjguMTI2TDE3NS44ODggNDI5LjAwOUwxNzUuNTg1IDQyOS44OTJMMTc0Ljc5IDQzMS42NThMMTc0LjM5MyA0MzIuNTVMMTczLjk4NiA0MzMuNDMzTDE3My41ODkgNDM0LjQxOEwxNzIuNzk1IDQzNi4xODNMMTcyLjQ5MiA0MzcuMDc2TDE3MS42OTcgNDM4Ljg0MUwxNzEuMyA0MzkuODI2TDE3MC45MDMgNDQwLjcwOUwxNzAuNTA2IDQ0MS42MDFMMTcwLjEwOCA0NDIuNDg0TDE2OS43MDIgNDQzLjM2N0wxNjkuNDA5IDQ0NC4yNUwxNjkuMDExIDQ0NS4yMzVMMTY4LjYwNSA0NDYuMTI3TDE2Ny4wMTYgNDQ5LjY1OEwxNjYuNjE4IDQ1MC42NDNMMTY2LjMxNiA0NTEuNTM1TDE2NS4xMjQgNDU0LjE4NEwxNjQuNzE3IDQ1NS4wNzZMMTY0LjMyIDQ1Ni4wNjFMMTYzLjkzMiA0NTYuOTQ0TDE2My41MjUgNDU3LjgyN0wxNjMuMjIzIDQ1OC43MUwxNjIuODI1IDQ1OS42MDJMMTYyLjQyOCA0NjAuNDg1TDE2Mi4wMzEgNDYxLjQ3TDE2MS4yMzYgNDYzLjIzNUwxNjAuNDMyIDQ2NS4wMUwxNjAuMTMgNDY1Ljg4NEwxNTkuNzQyIDQ2Ni44NjlMMTU4LjkzOCA0NjguNjQ0TDE1OC41NDEgNDY5LjUyN0gxNzguNjc4TDE3OS4wNzUgNDY4LjY0NEwxNzkuMzc4IDQ2Ny43NjFMMTc5Ljc3NSA0NjYuODY5TDE4MC4xNzIgNDY1Ljg4NEwxODAuNDc1IDQ2NS4wMUwxODAuODcyIDQ2NC4xMjdMMTgxLjI3IDQ2My4yMzVMMTgxLjU2MyA0NjIuMzUyTDE4MS45NjkgNDYxLjQ3TDE4Mi4zNjcgNDYwLjU4N0wxODIuNjYgNDU5LjY5NUwxODMuMDU3IDQ1OC43MUwxODMuNDY0IDQ1Ny44MjdMMTgzLjc2NyA0NTYuOTQ0TDE4NC4xNTQgNDU2LjA2MUgyMTIuNzY2TDIxMy4xNjQgNDU2Ljk0NEwyMTMuNDY2IDQ1Ny44MjdMMjEzLjg2NCA0NTguNzFMMjE0LjI2MSA0NTkuNjk1TDIxNC41NTQgNDYwLjU4N0wyMTQuOTYxIDQ2MS40N0wyMTUuMzU4IDQ2Mi4zNTJMMjE1LjY1MSA0NjMuMjM1TDIxNi40NTUgNDY1LjAxTDIxNi43NDggNDY1Ljg4NEwyMTcuMTQ2IDQ2Ni44NjlMMjE3LjU1MiA0NjcuNzYxTDIxNy44NTUgNDY4LjY0NEwyMTguMjQzIDQ2OS41MjdaTTE0OS42NTkgNDYwLjk3N0wxNTAuNDYzIDQ2MC4zODJMMTUxLjE2MyA0NTkuNzk3VjQyNy44MjlIMTE4LjI2NlY0NDIuMTg3SDEzMi44MjNWNDUxLjEzNkwxMzIuMDI4IDQ1MS42MjhMMTMxLjMxOSA0NTIuMDI4TDEzMC40MyA0NTIuNDE4TDEyOS42MjYgNDUyLjgwOUwxMjguNzI3IDQ1My4yMDhMMTI3LjgzOCA0NTMuNDAzTDEyNi44NDUgNDUzLjcwMUwxMjUuODQzIDQ1My44OTZMMTI0Ljg0OSA0NTQuMDkxTDEyMS42NTIgNDU0LjM4OEgxMTkuMzYzTDExOC4yNjYgNDU0LjI4NkwxMTcuMjczIDQ1NC4xODRMMTE2LjI3MSA0NTMuOTg5TDExNS4yNzcgNDUzLjc5NEwxMTQuMjc1IDQ1My40OTZMMTEzLjI4MiA0NTMuMjA4TDExMi4zODMgNDUyLjgwOUwxMTEuNDg0IDQ1Mi40MThMMTEwLjU5NSA0NTIuMDI4TDEwOS43OTEgNDUxLjUzNUwxMDguOTk3IDQ1MS4wNDNMMTA4LjIwMiA0NTAuNDQ4TDEwNy4zOTggNDQ5Ljg2M0wxMDYuNzA4IDQ0OS4yNjhMMTA2LjEwMyA0NDguNThMMTA1LjQxMiA0NDcuODkzTDEwNC44MDcgNDQ3LjIwNUwxMDQuMjExIDQ0Ni40MTVMMTAzLjcxOSA0NDUuNjM0TDEwMy4yMDggNDQ0Ljg0NUwxMDIuNzE2IDQ0My45NjJMMTAyLjMxOSA0NDMuMDdMMTAxLjkxMiA0NDIuMDg1TDEwMS42MTkgNDQxLjMwNEwxMDEuMzI2IDQ0MC40MjFMMTAxLjEyNyA0MzkuNTI5TDEwMC43MjEgNDM3Ljc2M0wxMDAuNTIyIDQzNS44ODZMMTAwLjQyNyA0MzQuOTFWNDMyLjY0M0wxMDAuNjE3IDQzMC42ODJMMTAwLjgyNSA0MjkuNTk1TDEwMS4wMjMgNDI4LjcxMkwxMDEuMjIyIDQyNy43MzZMMTAxLjUyNSA0MjYuNzUxTDEwMS45MTIgNDI1Ljg2OEwxMDIuMjE1IDQyNC45NzZMMTAyLjYyMiA0MjQuMDkzTDEwMy4xMjMgNDIzLjMwM0wxMDMuNjE1IDQyMi40MjFMMTA0LjExNiA0MjEuNjMxTDEwNC42MDggNDIwLjk0M0wxMDUuMjEzIDQyMC4xNjJMMTA1LjkwNCA0MTkuNDY1TDEwNi41MDkgNDE4Ljc3OEwxMDcuMiA0MTguMTkyTDEwNy45IDQxNy41OThMMTA4LjYgNDE3LjAxMkwxMTAuMTg5IDQxNi4wMjdMMTEwLjk5MyA0MTUuNTM1TDExMS44OTEgNDE1LjE0NEwxMTIuNzggNDE0Ljc0NUwxMTMuNjc5IDQxNC40NTdMMTE0LjU3NyA0MTQuMTU5TDExNS40NzYgNDEzLjk2NEwxMTYuNDY5IDQxMy43NjlMMTE3LjM2OCA0MTMuNjY3TDExOC4zNyA0MTMuNTY0SDEyMC40NjFMMTIzLjY0OCA0MTMuODYyTDEyNC42NDEgNDE0LjA1N0wxMjUuNjQ0IDQxNC4yNjFMMTI2LjU0MiA0MTQuNDU3TDEyNy40MzIgNDE0Ljc0NUwxMjguMzMgNDE1LjA0MkwxMjkuMTM0IDQxNS4zMzlMMTI5LjkyOSA0MTUuNzNMMTMwLjczMyA0MTYuMTI5TDEzMS42MjIgNDE2LjYyMkwxMzIuNDE2IDQxNy4xMDVMMTMzLjIyIDQxNy41OThMMTM0LjAxNSA0MTguMDlMMTM0LjgwOSA0MTguNjg1TDEzNS42MTMgNDE5LjE3N0wxMzYuNDA4IDQxOS44NjVMMTM3LjIwMiA0MjAuNDVMMTM3Ljc5OCA0MTkuNjdMMTM4LjQ5OCA0MTguOTgyTDEzOS4wOTQgNDE4LjE5MkwxMzkuNzk0IDQxNy40MDJMMTQwLjM5IDQxNi42MjJMMTQwLjk5NSA0MTUuOTI1TDE0MS42ODYgNDE1LjE0NEwxNDIuMjkxIDQxNC4zNTRMMTQyLjk4MSA0MTMuNTY0TDE0My41ODcgNDEyLjg3N0wxNDQuMTgzIDQxMi4wOTZMMTQ0Ljg4MyA0MTEuMzA2TDE0NS40NzggNDEwLjYxOUwxNDYuMDc0IDQwOS44MjlMMTQ2Ljc3NCA0MDkuMDM5TDE0Ny4zNyA0MDguMjU4TDE0OC4wNyA0MDcuNTdMMTQ4LjY2NiA0MDYuNzgxTDE0Ny44NzEgNDA2LjE4NkwxNDcuMDY3IDQwNS40OThMMTQ2LjI3MyA0MDQuOTEzTDE0NS40NzggNDA0LjMxOEwxNDQuNjg0IDQwMy44MjVMMTQzLjg4OSA0MDMuMjRMMTQyLjk4MSA0MDIuNzQ3TDE0Mi4xODcgNDAyLjI1NUwxNDEuMjk4IDQwMS43NjJMMTQwLjQ5NCA0MDEuMjdMMTM5LjU5NSA0MDAuODhMMTM4LjcwNiA0MDAuMzg3TDEzNy43OTggMzk5Ljk5N0wxMzYuOTA5IDM5OS41OTdMMTM2LjAxIDM5OS4yMDdMMTM1LjExMiAzOTguOTA5TDEzNC4zMTcgMzk4LjYxMkwxMzMuNDE5IDM5OC40MTdMMTMyLjUyIDM5OC4xMjlMMTMxLjYyMiAzOTcuOTI0TDEzMC43MzMgMzk3LjcyOUwxMjkuODI1IDM5Ny41MzRMMTI3LjgzOCAzOTcuMTQ0TDEyNi45NCAzOTcuMDQyTDEyNS44NDMgMzk2Ljg0NkwxMjQuODQ5IDM5Ni43NDRIMTIzLjg0N0wxMjIuNzUgMzk2LjY1MUwxMjEuNjUyIDM5Ni41NDlIMTE3LjM2OEwxMTYuMzc1IDM5Ni42NTFMMTE1LjM3MiAzOTYuNzQ0TDExMy4zODYgMzk2Ljk0OUwxMTIuMzgzIDM5Ny4xNDRMMTExLjM5IDM5Ny4yMzdMMTEwLjM5NyAzOTcuNDMyTDEwOS40OTggMzk3LjcyOUwxMDguNDk2IDM5Ny45MjRMMTA3LjU5NyAzOTguMjIyTDEwNi43MDggMzk4LjQxN0wxMDUuODA5IDM5OC44MTZMMTA0LjgwNyAzOTkuMTA1TDEwNC4wMTIgMzk5LjQwMkwxMDMuMDE5IDM5OS44OTRMMTAyLjEyMSA0MDAuMjg1TDEwMS4yMjIgNDAwLjY4NEw5OC41MjYzIDQwMi4xNjJMOTcuNzQxMiA0MDIuNjU1TDk2LjkzNzMgNDAzLjEzOEw5Ni4xNDI4IDQwMy43MzJMOTUuMzM4OCA0MDQuMjI1TDk0LjU0NDMgNDA0LjgxTDkzLjg0NDMgNDA1LjQwNUw5My4wNDk4IDQwNi4wOTNMOTIuMzQ5OSA0MDYuNjc4TDkwLjk1OTUgNDA4LjA2M0w5MC4zNTQxIDQwOC43NTFMODkuNjYzNyA0MDkuNDM4TDg5LjA1ODMgNDEwLjEyNkw4OC40NjI0IDQxMC45MTZMODcuODY2NSA0MTEuNjk3TDg3LjI3MDcgNDEyLjQ4Nkw4Ni4yNjggNDE0LjA1N0w4NS43NzYyIDQxNC44NDdMODUuMjc0OSA0MTUuNjM3TDg0Ljc3MzYgNDE2LjUyTDg0LjM3NjMgNDE3LjQwMkw4My41ODE4IDQxOS4xNzdMODMuMTg0NiA0MjAuMDZMODIuNzc3OCA0MjEuMDQ1TDgyLjQ4NDYgNDIxLjkyOEw4Mi4xODIgNDIyLjkxM0w4MS44ODg3IDQyMy43OTZMODEuNjkwMSA0MjQuNzgxTDgxLjM4NzUgNDI1Ljc2Nkw4MS4xODg4IDQyNi42NDlMODEuMDg0OCA0MjcuNjM0TDgwLjg4NjEgNDI4LjYxTDgwLjY4NzUgNDMwLjY4MlY0MzEuNjU4TDgwLjU5MjkgNDMyLjc0NVY0MzUuOTg4TDgwLjc4MjEgNDM3Ljk1OEw4MC44ODYxIDQzOC45NDNMODAuOTkwMiA0MzkuODI2TDgxLjE4ODggNDQwLjgxMUw4MS4yODM0IDQ0MS42OTRMODEuNDgyIDQ0Mi42NzlMODEuNzg0NyA0NDMuNTYyTDgxLjk4MzMgNDQ0LjU0N0w4Mi4yODYgNDQ1LjQzTDgyLjQ4NDYgNDQ2LjMyMkw4Mi44ODE5IDQ0Ny4yMDVMODMuMTg0NiA0NDcuOTk1TDg0LjM3NjMgNDUwLjY0M0w4NC43NzM2IDQ1MS41MzVMODUuMjc0OSA0NTIuMzE2TDg1Ljc3NjIgNDUzLjIwOEw4Ni4yNjggNDUzLjk4OUw4Ni43Njk0IDQ1NC43NzlMODcuMzY1MiA0NTUuNTY5TDg3Ljg2NjUgNDU2LjM0OUw4OC40NjI0IDQ1Ny4wMzdMODkuMDU4MyA0NTcuODI3TDg5LjY2MzcgNDU4LjUxNEw5MC4zNTQxIDQ1OS4yMDJMOTEuMDU0MSA0NTkuODlMOTEuNzU0IDQ2MC40ODVMOTIuNDUzOSA0NjEuMTcyTDkzLjE0NDQgNDYxLjc2N0w5My44NDQzIDQ2Mi4zNTJMOTQuNjQ4MyA0NjIuOTQ3TDk1LjQ0MjggNDYzLjUzM0w5Ni4yMzczIDQ2NC4xMjdMOTcuMDMxOSA0NjQuNjExTDk3LjgzNTggNDY1LjEwM0w5OC43MzQ0IDQ2NS41OTZMOTkuNTI4OSA0NjYuMDg4TDEwMC40MjcgNDY2LjU4MUwxMDEuMzI2IDQ2Ni45NzFMMTAzLjEyMyA0NjcuNzYxTDEwNC4xMTYgNDY4LjE1MUwxMDUuMDA1IDQ2OC40NDlMMTA1LjkwNCA0NjguODM5TDEwNi44MDMgNDY5LjEzNkwxMDcuODA1IDQ2OS4zMzFMMTA4LjY5NCA0NjkuNjI5TDEwOS42OTcgNDY5LjgyNEwxMTAuNTk1IDQ3MC4wMTlMMTEyLjU4MiA0NzAuNDA5TDExNC41NzcgNDcwLjYxNEwxMTcuNjYxIDQ3MC45MDJIMTIxLjk1NUwxMjMuMDUyIDQ3MC44MDlMMTI0LjA0NSA0NzAuNzA3TDEyNS4xNDMgNDcwLjYxNEwxMjYuMTQ1IDQ3MC41MTJMMTI3LjIzMyA0NzAuNDA5TDEyOC4yMzYgNDcwLjMxNkwxMjkuMjI5IDQ3MC4xMjFMMTMwLjIzMSA0NjkuOTE3TDEzMS4xMiA0NjkuNzIyTDEzMi4xMjMgNDY5LjUyN0wxMzMuMDIyIDQ2OS4yMjlMMTM0LjAxNSA0NjguOTQxTDEzNi43MSA0NjguMDQ5TDEzNy41OTkgNDY3LjY1OUwxMzguNjAyIDQ2Ny4yNjhMMTM5LjUwMSA0NjYuODY5TDE0MC40OTQgNDY2LjQ3OEwxNDEuMzkyIDQ2NS45ODZMMTQyLjI5MSA0NjUuNTk2TDE0My4xOCA0NjUuMTAzTDE0NC4wNzkgNDY0LjYxMUwxNDQuOTc3IDQ2NC4xMjdMMTQ1Ljc3MiA0NjMuNjM1TDE0Ni41NzYgNDYzLjE0MkwxNDcuMzcgNDYyLjU0OEwxNDguMTY1IDQ2Mi4wNTVMMTQ4Ljk2OSA0NjEuNDdMMTQ5LjY1OSA0NjAuOTc3Wk0yNzIuNzc2IDU5NC44MjNMMzcxLjk2NyA1NTcuNjQ3SDE3My41ODVMMjcyLjc3NiA1OTQuODIzWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==",
                close: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iMjRweCIgZmlsbD0iI0ZGRkZGRiI+PHBhdGggZD0iTTAgMGgyNHYyNEgwVjB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE5IDYuNDFMMTcuNTkgNSAxMiAxMC41OSA2LjQxIDUgNSA2LjQxIDEwLjU5IDEyIDUgMTcuNTkgNi40MSAxOSAxMiAxMy40MSAxNy41OSAxOSAxOSAxNy41OSAxMy40MSAxMiAxOSA2LjQxeiIvPjwvc3ZnPg=="
              }, In((a = "undefined" != typeof window ? window.navigator.language : "en-US", In('<div class="talon_challenge_container"> <a onclick=\'talon.close("{{flowID}}")\' class="talon_close_button"><img src="{{close}}" alt="Close"/></a> <div class="talon_challenge_header"> <img class="talon_logo" src="{{logo}}" alt="Epic Games Logo"/> <h1>{{challengeTitle}}</h1> <h4>{{challengeSubtitle}}</h4> <p><b>{{sessionID}}</b>: {{sessionIDValue}} | <b>{{ipAddress}}</b>: {{ipAddressValue}}</p> <hr/> <div id="talon_error_container_{{flowID}}" class="talon_error_container"> <p id="talon_error_message_{{flowID}}">{{errorMessage}}</p> <button onclick=\'talon.execute("{{flowID}}"),document.getElementById("talon_error_container_{{flowID}}").style.display="none"\'>TRY AGAIN</button> </div> </div> <div id="h_captcha_challenge_{{flowID}}" class="h_captcha_challenge"></div> </div>', E1[a] || E1["en-US"])), e)), document.body.appendChild(r), "h_captcha" === t ? [3, 2] : [3, 5];
            case 2:
              return [4, function(i) {
                return l(this, void 0, void 0, function() {
                  var e, a;
                  return m(this, function(n) {
                    switch (n.label) {
                      case 0:
                        return window.hCaptchaReady ? [4, window.hCaptchaReady] : [3, 2];
                      case 1:
                      case 4:
                        return n.sent(), [2];
                      case 2:
                        return window.hCaptchaReady = new Promise(function(n) {
                          window.hCaptchaLoaded = n
                        }), e = null != i && i.sdk_base_url ? null == i ? void 0 : i.sdk_base_url : "https://js.hcaptcha.com", a = "", null != i && i.sdk_endpoint && (a += "&endpoint=".concat(encodeURIComponent(null == i ? void 0 : i.sdk_endpoint))), null != i && i.sdk_img_host && (a += "&imghost=".concat(encodeURIComponent(null == i ? void 0 : i.sdk_img_host))), null != i && i.sdk_report_api && (a += "&reportapi=".concat(encodeURIComponent(null == i ? void 0 : i.sdk_report_api))), null != i && i.sdk_asset_host && (a += "&assethost=".concat(encodeURIComponent(null == i ? void 0 : i.sdk_asset_host))), [4, (r = "".concat(e, "/1/api.js?onload=hCaptchaLoaded&render=explicit").concat(a), new Promise(function(n, e) {
                          var a = document.createElement("script");
                          a.src = r, a.async = !0, a.defer = !0, a.onload = function() {
                            n()
                          }, a.onerror = function(n) {
                            e(n)
                          }, document.head.appendChild(a)
                        }))];
                      case 3:
                        return n.sent(), [4, window.hCaptchaReady]
                    }
                    var r
                  })
                })
              }(s.h_captcha_config)];
            case 3:
              return n.sent(), [4, function(e) {
                var n; {
                  var a, r;
                  e.ready || (a = function() {
                    e.config.onExpired && e.config.onExpired()
                  }, r = function() {
                    H(e, !1), e.config.onClosed && e.config.onClosed()
                  }, e.widgetID = window.hcaptcha.render("h_captcha_checkbox_".concat(e.session.session.flow_id), {
                    sitekey: null == (n = e.session.session.plan.h_captcha) ? void 0 : n.site_key,
                    theme: window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark",
                    callback: function(n) {
                      Cn(e, {
                        h_captcha: {
                          value: n,
                          resp_key: window.hcaptcha.getRespKey(e.widgetID)
                        }
                      }).catch(function(n) {
                        return Hn(n, e)
                      })
                    },
                    "expire-callback": a,
                    "expired-callback": a,
                    "chalexpired-callback": r,
                    "error-callback": function(n) {
                      "challenge-error" === n ? (H(e, !0), E(e.config.env, "challenge_rejected_answer", e.session), Ln(e.config.flow)) : (H(e, !0), T(e.config.env, "challenge_error", e.session, n, null), document.getElementById("talon_error_container_".concat(e.config.flow)).style.display = "flex", document.getElementById("talon_error_message_".concat(e.config.flow)).innerText = n)
                    },
                    "open-callback": function() {
                      H(e, !0), e.executeWatchdog && clearTimeout(e.executeWatchdog)
                    },
                    "close-callback": r,
                    size: "invisible",
                    "challenge-container": "h_captcha_challenge_".concat(e.session.session.flow_id)
                  }))
                }
              }(u)];
            case 4:
              return n.sent(), [3, 5];
            case 5:
              return O(h.flow).ready = !0, E(h.env, "challenge_ready", u.session), u.loadWatchdog && clearTimeout(u.loadWatchdog), [2, o]
          }
          var e, a, r
        })
      })
    }(e).then(function(n) {
      e.onReady && e.onReady(n)
    }).catch(function(n) {
      return Hn(n, O(e.flow))
    }))
  }

  function In(n, e) {
    var a = n;
    return Object.keys(e).forEach(function(n) {
      for (; a.includes("{{".concat(n, "}}"));) a = a.replace("{{".concat(n, "}}"), e[n])
    }), a
  }

  function H(n, e) {
    var a = document.getElementById("talon_container_".concat(n.session.session.flow_id));
    e !== n.open && (e ? (E(n.config.env, "challenge_opened", n.session), a.style.visibility = "visible", a.style.opacity = "1", a.style.zIndex = "100000", document.body.style.height = "100vh", document.body.style.overflow = "hidden") : (E(n.config.env, "challenge_closed", n.session), a.style.visibility = "hidden", a.style.opacity = "0", a.style.zIndex = "-1", document.body.style.height = "auto", document.body.style.overflow = "auto", document.activeElement && document.activeElement.blur()), n.open = e)
  }

  function zn(o) {
    return l(this, void 0, void 0, function() {
      return m(this, function(n) {
        return [2, new Promise(function(e, a) {
          var r = o.onReady,
            i = o.onError;
          o.onReady = function(n) {
            r && r(n), e(n)
          }, o.onError = function(n) {
            i && i(n), a(n)
          }
        })]
      })
    })
  }

  function Cn(i, o) {
    return l(this, void 0, void 0, function() {
      var a, r;
      return m(this, function(n) {
        switch (n.label) {
          case 0:
            var e = {};
            return e.session_wrapper = i.session, e.plan_results = o, r = [e], [4, jn({}, !0)];
          case 1:
            return a = D1.apply(void 0, r.concat([n.sent()])), E(i.config.env, "challenge_complete", i.session), H(i, !1), i.executeWatchdog && clearTimeout(i.executeWatchdog), i.config.onComplete && i.config.onComplete(btoa(JSON.stringify(a))), [2]
        }
      })
    })
  }

  function Ln(n, e) {
    var a = O(n),
      r = (E(a.config.env, "sdk_execute", a.session), a.executeWatchdog = z(), e);
    e ? a.formData = e : a.formData && (r = a.formData),
      function(h, M) {
        return l(this, void 0, void 0, function() {
          var r, i, o, t, s, u;
          return m(this, function(n) {
            switch (n.label) {
              case 0:
                return h.ready && h.session ? [3, 2] : [4, zn(h.config)];
              case 1:
                n.sent(), n.label = 2;
              case 2:
                return r = {}, h.session.session.config.acid && h.session.session.config.acid.includes("argon") && (r["X-Acid-Argon"] = h.session.session.id), i = F().create({
                  baseURL: S1[An(h.config.env)],
                  timeout: 12e3
                }), o = (i = i).post, t = ["/v1/init/execute"], [4, jn({}, !(s = [{
                  session: h.session,
                  form_data: M
                }]))];
              case 3:
                var e = {
                  withCredentials: !0
                };
                return e.headers = r, [4, o.apply(i, t.concat([D1.apply(void 0, s.concat([n.sent()])), e]))];
              case 4:
                if (u = n.sent(), u = u.data, E(h.config.env, "challenge_execute", h.session), "h_captcha" === h.session.session.plan.mode) {
                  e = h;
                  var a = u.h_captcha;
                  a = {
                    rqdata: null == a ? void 0 : a.data
                  };
                  window.hcaptcha.execute(e.widgetID, a)
                } else Cn(h, {}).catch(function(n) {
                  return Hn(n, h)
                });
                return [2]
            }
          })
        })
      }(a, r).catch(function(n) {
        return Hn(n, O(a.config.flow))
      })
  }

  function On(n) {
    n = O(n);
    H(n, !1), n.config.onClosed && n.config.onClosed()
  }

  function Hn(n, e) {
    T((null == e ? void 0 : e.config.env) || "prod", M, null == e ? void 0 : e.session, n.message, n.stack), e.config.onError && e.config.onError(n.message)
  }

  function Pn() {
    try {
      var n, e, a, r = {};
      return r.js_heap_size_limit = null == (n = window.performance.memory) ? void 0 : n.jsHeapSizeLimit, r.total_js_heap_size = null == (e = window.performance.memory) ? void 0 : e.totalJSHeapSize, r.used_js_heap_size = null == (a = window.performance.memory) ? void 0 : a.usedJSHeapSize, {
        memory: r,
        resources: function() {
          try {
            var n;
            if (null != (n = window.performance) && n.getEntriesByType) return window.performance.getEntriesByType("resource").filter(function(n) {
              return n.name.length < 512
            }).map(function(n) {
              return n.name
            })
          } catch (n) {
            T(talon.env, M, talon.session, n.message, n.stack)
          }
        }()
      }
    } catch (n) {
      T(talon.env, M, talon.session, n.message, n.stack)
    }
  }

  function P() {
    return 0
  }
  r.n = function(n) {
    var e = n && n.__esModule ? function() {
      return n.default
    } : function() {
      return n
    };
    return r.d(e, {
      a: e
    }), e
  }, r.d = function(n, e) {
    for (var a in e) r.o(e, a) && !r.o(n, a) && Object.defineProperty(n, a, {
      enumerable: !0,
      get: e[a]
    })
  }, r.g = function() {
    var n = v1(this, function() {
      return n.toString().search("(((.+)+)+)+$").toString().constructor(n).search("(((.+)+)+)+$")
    });
    if (n(), "object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")()
    } catch (n) {
      if ("object" == typeof window) return window
    }
  }(), r.o = function(n, e) {
    return Object.prototype.hasOwnProperty.call(n, e)
  }, r.nc = void 0, d = r(4687), t = r.n(d), n = r(9669), F = r.n(n), U = r(1081), Y = "axios-retry", V = (_ = ["get", "head", "options"]).concat(["put", "delete"]), r(8267), r(7489), r(3178), r(8750), r(7305), r(7929), r(3474), r(5330), r(7108), r(7646), r(935), r(1630), r(6602), r(6924), r(787), r(3606), r(9937), p.isSafeRequestError = function(n) {
    return !!n.config && H1(n) && -1 !== _.indexOf(n.config.method)
  }, p.isIdempotentRequestError = P1, p.isNetworkOrIdempotentRequestError = R1, p.exponentialDelay = x1, p.isRetryableError = H1, W = {
    dev: "http://epicgames-local.ol.epicgames.net:12080",
    ci: "https://talon-service-ci.ecac.dev.use1a.on.epicgames.com",
    gamedev: "https://talon-service-gamedev.ecac.dev.use1a.on.epicgames.com",
    prod: "https://talon-service-prod.ecosec.on.epicgames.com",
    prod_akamai: "https://talon-service-prod.ak.epicgames.com",
    prod_cloudflare: "https://talon-service-prod.ecosec.on.epicgames.com"
  }, n = function() {
    function i(n, e) {
      var s, u, h, M, c, l, d, m, a = this;
      if (!(this instanceof i)) throw new TypeError("Cannot call a class as a function");

      function y() {
        h && clearTimeout(h)
      }

      function r() {
        function n() {
          m = Date.now(), u.apply(o, r)
        }

        function e() {
          h = void 0
        }
        for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++) r[i] = arguments[i];
        var o = this,
          t = Date.now() - m;
        d || (c || !l || h || n(), y(), void 0 === l && s < t ? c ? (m = Date.now(), M || (h = z())) : n() : !0 !== M && (h = z()))
      }
      this.depth = n, this.pushThrottle = e ? (s = e, u = function(n) {
        a.buffer.push(n), a.buffer.length > a.depth && a.buffer.shift()
      }, M = void 0 !== (e = (n = {}).noTrailing) && e, c = void 0 !== (e = n.noLeading) && e, l = void 0 === (e = n.debounceMode) ? void 0 : e, d = !1, m = 0, r.cancel = function(n) {
        n = (n || {}).upcomingOnly, n = void 0 !== n && n;
        y(), d = !n
      }, r) : function(n) {
        a.buffer.push(n), a.buffer.length > a.depth && a.buffer.shift()
      }, this.buffer = []
    }
    for (var n = {
        writable: !1
      }, e = i, a = e.prototype, r = [{
        key: "push",
        value: function(n) {
          this.pushThrottle(n)
        }
      }, {
        key: "peek",
        value: function() {
          return this.buffer
        }
      }, {
        key: "drain",
        value: function() {
          var n = this.buffer;
          return this.buffer = [], n
        }
      }], o = 0; o < r.length; o++) {
      var t = r[o];
      t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(a, t.key, t)
    }
    return Object.defineProperty(e, "prototype", n), i
  }(), o = [], s = [], Z = new n(50), M = "sdk_error", window.setInterval(function() {
    return Y1.apply(this, arguments)
  }, 2e3), X = function(n, e) {
    var a, r = [];
    try {
      for (a in n) e[a] || r.push(a);
      return r
    } catch (n) {
      T(talon.env, M, talon.session, n.message, n.stack)
    }
  }, e = r(2568), $ = r.n(e), e = r(4704), q = r.n(e), n1 = function() {
    try {
      for (var n, e, a = document.createElement("canvas"), r = (a.width = 600, a.height = 50, a.getContext("2d")), i = "👾 https://www.epicgames.com/site/en-US/careers 🔒 https://hackerone.com/epicgames 🕹️", o = (r.font = "14px 'Arial'", r.fillStyle = "#333", r.fillRect(30, 0, 183, 90), r.fillStyle = "#4287f5", r.fillRect(450, 1, 200, 90), r.createLinearGradient(250, 0, 600, 50)), t = (o.addColorStop(0, "black"), o.addColorStop(.5, "cyan"), o.addColorStop(1, "yellow"), r.fillStyle = o, r.fillRect(300, 7, 200, 100), r.fillStyle = "#42f584", r.fillText(i, 0, 15), r.strokeStyle = "rgba(255, 0, 50, 0.7)", r.strokeText(i, 20, 20), r.fillStyle = "rgba(245, 66, 66, 0.5)", r.fillRect(100, 10, 50, 50), a.toDataURL()), s = r.getImageData(0, 0, 600, 50), u = {}, h = 0; h < s.data.length; h += 4) u[e = s.data[h].toString(16) + s.data[h + 1].toString(16) + s.data[h + 2].toString(16) + s.data[h + 3].toString(16)] ? u[e]++ : u[e] = 1;
      for (n in s.data) u[e = s.data[n]] ? u[e]++ : u[e] = 1;
      return {
        length: t.length,
        num_colors: Object.keys(u).length,
        md5: $()(t),
        tlsh: q()(t)
      }
    } catch (n) {
      T(talon.env, M, talon.session, n.message, n.stack)
    }
  }, x = g(t().mark(function n() {
    return t().wrap(function(n) {
      for (;;) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", {
            location: function() {
              try {
                var n = {};
                return n.origin = window.location.origin, n.pathname = window.location.pathname, n.href = window.location.href, n
              } catch (n) {
                console.error(n)
              }
            }(),
            history: function() {
              try {
                var n = {};
                return n.length = window.history.length, n
              } catch (n) {
                T(talon.env, M, talon.session, n.message, n.stack)
              }
            }(),
            screen: function() {
              try {
                var n = {};
                return n.avail_height = window.screen.availHeight, n.avail_width = window.screen.availWidth, n.avail_top = window.screen.availTop, n.height = window.screen.height, n.width = window.screen.width, n.color_depth = window.screen.colorDepth, n
              } catch (n) {
                T(talon.env, M, talon.session, n.message, n.stack)
              }
            }(),
            performance: Pn(),
            device_pixel_ratio: window.devicePixelRatio,
            dark_mode: function() {
              try {
                return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
              } catch (n) {
                T(talon.env, M, talon.session, n.message, n.stack)
              }
            }(),
            chrome: !!window.chrome,
            property_list: X(window, {})
          });
        case 1:
        case "end":
          return n.stop()
      }
    }, n)
  })), e1 = function() {
    return x.apply(this, arguments)
  }, a1 = function() {
    try {
      var n = document.createElement("iframe");
      return !!n.srcdoc && "" !== n.srcdoc
    } catch (n) {
      return !0
    }
  }, r1 = function() {
    return (r1 = Object.assign || function(n) {
      for (var e, a, r = 1, i = arguments.length; r < i; r++)
        for (a in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
      return n
    }).apply(this, arguments)
  }, Object.create, Object.create, c = ["monospace", "sans-serif", "serif"], i1 = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"], y = Math, o1 = {
    default: [],
    apple: [{
      font: "-apple-system-body"
    }],
    serif: [{
      fontFamily: "serif"
    }],
    sans: [{
      fontFamily: "sans-serif"
    }],
    mono: [{
      fontFamily: "monospace"
    }],
    min: [{
      fontSize: "1px"
    }],
    system: [{
      fontFamily: "system-ui"
    }]
  }, t1 = {
    fonts: function() {
      return un(function(n, e) {
        for (var r = e.document, e = r.body, i = (e.style.fontSize = "48px", r.createElement("div")), o = {}, t = {}, s = function(n) {
            var e = r.createElement("span"),
              a = e.style;
            return a.position = "absolute", a.top = "0", a.left = "0", a.fontFamily = n, e.textContent = "mmMwWLliI0O&1", i.appendChild(e), e
          }, a = c.map(s), u = function() {
            for (var n = {
                _0x10b9e5: c.map(function(n) {
                  return e = _0x10b9e5, s("'" + e + "'," + n);
                  var e
                })
              }, e = 0, a = i1; e < a.length; e++) a[e];
            return n
          }(), h = (e.appendChild(i), 0); h < c.length; h++) o[c[h]] = a[h].offsetWidth, t[c[h]] = a[h].offsetHeight;
        return i1.filter(function(n) {
          return a = u[n], c.some(function(n, e) {
            return a[e].offsetWidth !== o[n] || a[e].offsetHeight !== t[n]
          });
          var a
        })
      })
    },
    domBlockers: function(n) {
      var y = (void 0 === n ? {} : n).debug;
      return w(this, void 0, void 0, function() {
        var c, l, d, m;
        return j(this, function(n) {
          switch (n.label) {
            case 0:
              return rn() || tn() ? (M = atob, c = {
                abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", M("YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld"), '[title="ALIENBOLA" i]'],
                abpvn: ["#quangcaomb", M("Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ="), ".quangcao", M("W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=="), M("W2hyZWZePSJodHRwczovL3piZXQudm4vIl0=")],
                adBlockFinland: [".mainostila", M("LnNwb25zb3JpdA=="), ".ylamainos", M("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), M("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", M("I2FkMl9pbmxpbmU=")],
                adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", M("LmhlYWRlci1ibG9ja2VkLWFk"), M("I2FkX2Jsb2NrZXI=")],
                adGuardAnnoyances: ['amp-embed[type="zen"]', ".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil"],
                adGuardBase: [".BetterJsPopOverlay", M("I2FkXzMwMFgyNTA="), M("I2Jhbm5lcmZsb2F0MjI="), M("I2FkLWJhbm5lcg=="), M("I2NhbXBhaWduLWJhbm5lcg==")],
                adGuardChinese: [M("LlppX2FkX2FfSA=="), M("YVtocmVmKj0iL29kMDA1LmNvbSJd"), M("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), ".qq_nr_lad", "#widget-quan"],
                adGuardFrench: [M("I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr"), "#pavePub", M("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv"],
                adGuardGerman: [M("LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=="), M("LmJveHN0YXJ0d2VyYnVuZw=="), M("LndlcmJ1bmcz"), M("YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0="), M("YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0=")],
                adGuardJapanese: ["#kauli_yad_1", M("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), M("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), M("LmFkZ29vZ2xl"), M("LmFkX3JlZ3VsYXIz")],
                adGuardMobile: [M("YW1wLWF1dG8tYWRz"), M("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", M("I2FkX2ludmlld19hcmVh")],
                adGuardRussian: [M("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), M("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', M("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), M("I2FkX3NxdWFyZQ==")],
                adGuardSocial: [M("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), M("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", M("W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0=")],
                adGuardTrackingProtection: ["#qoo-counter", M("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), M("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), M("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                adGuardTurkish: ["#backkapat", M("I3Jla2xhbWk="), M("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), M("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), M("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                bulgarian: [M("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers", M("I25ld0Fk")],
                easyList: [M("I0FEX0NPTlRST0xfMjg="), M("LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy"), ".universalboxADVBOX03", M("LmFkdmVydGlzZW1lbnQtNzI4eDkw"), M("LnNxdWFyZV9hZHM=")],
                easyListChina: [M("YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0="), M("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), M("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box"],
                easyListCookie: ["#AdaCompliance.app-notice", ".text-center.rgpd", ".panel--cookie", ".js-cookies-andromeda", ".elxtr-consent"],
                easyListCzechSlovak: ["#onlajny-stickers", M("I3Jla2xhbW5pLWJveA=="), M("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", M("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                easyListDutch: [M("I2FkdmVydGVudGll"), M("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", M("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                easyListGermany: [M("I0FkX1dpbjJkYXk="), M("I3dlcmJ1bmdzYm94MzAw"), M("YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd"), M("I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu"), M("YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0=")],
                easyListItaly: [M("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", M("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), M("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), M("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                easyListLithuania: [M("LnJla2xhbW9zX3RhcnBhcw=="), M("LnJla2xhbW9zX251b3JvZG9z"), M("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), M("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), M("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                estonian: [M("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                fanboyAnnoyances: ["#feedback-tab", "#taboola-below-article", ".feedburnerFeedBlock", ".widget-feedburner-counter", '[title="Subscribe to our blog"]'],
                fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                fanboySocial: [".td-tags-and-social-wrapper-box", ".twitterContainer", ".youtube-social", 'a[title^="Like us on Facebook"]', 'img[alt^="Share on Digg"]'],
                frellwitSwedish: [M("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), M("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", M("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                greekAdBlock: [M("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), M("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), M("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                hungarian: ["#cemp_doboz", ".optimonk-iframe-container", M("LmFkX19tYWlu"), M("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", ".cookie-msg-info-container", "#cookies-policy-sticky"],
                icelandicAbp: [M("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                latvian: [M("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), M("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                listKr: [M("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), M("I2xpdmVyZUFkV3JhcHBlcg=="), M("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), M("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                listeAr: [M("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", M("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), M("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), M("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                listeFr: [M("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), M("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), M("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                officialPolish: ["#ceneo-placeholder-ceneo-12", M("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), M("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), M("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), M("ZGl2I3NrYXBpZWNfYWQ=")],
                ro: [M("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), 'a[href^="/magazin/"]', M("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), M("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), M("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd")],
                ruAd: [M("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), M("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), M("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                thaiAds: ["a[href*=macau-uta-popup]", M("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), M("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", M("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
              }, l = Object.keys(c), [4, cn((m = []).concat.apply(m, l.map(function(n) {
                return c[n]
              })))]) : [2, void 0];
            case 1:
              if (d = n.sent(), y) {
                var e = c;
                var a = d;
                for (var r = "DOM blockers debug:\n```", i = 0, o = Object.keys(e); i < o.length; i++)
                  for (var t = o[i], s = (r = r + "\n" + t + ":", 0), u = e[t]; s < u.length; s++) var h = u[s],
                    r = r + ("\n  " + (a[h] ? "🚫" : "➡️")) + " " + h;
                console.log(r + "\n```")
              }
              return (m = l.filter(function(n) {
                n = c[n];
                return I(n.map(function(n) {
                  return d[n]
                })) > .6 * n.length
              })).sort(), [2, m]
          }
          var M
        })
      })
    },
    fontPreferences: function() {
      return void 0 === w && (w = 4e3), un(function(n, e) {
        for (var a = e.document, r = a.body, i = r.style, i = (i.width = w + "px", i.webkitTextSizeAdjust = i.textSizeAdjust = "none", an() ? r.style.zoom = "" + 1 / e.devicePixelRatio : rn() && (r.style.zoom = "reset"), a.createElement("div")), o = (i.textContent = _1(Array(w / 20 << 0)).map(function() {
            return "word"
          }).join(" "), r.appendChild(i), a), t = r, s = {
            _0x6483aa: void 0
          }, u = {}, h = 0, M = Object.keys(o1); h < M.length; h++) {
          for (var c = M[h], l = o1[c], d = l[0], m = void 0 === d ? {} : d, d = l[1], l = void 0 === d ? "mmMwWLliI0fiflO&1" : d, y = o.createElement("span"), g = (y.textContent = l, y.style.whiteSpace = "nowrap", 0), k = Object.keys(m); g < k.length; g++) {
            var p = m[E = k[g]];
            void 0 !== p && (y.style[E] = p)
          }
          t.appendChild(o.createElement("br")), t.appendChild(y)
        }
        for (var E = 0, T = Object.keys(o1); E < T.length; E++) u[c = T[E]] = s[c].getBoundingClientRect().width;
        return u
      }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
      var w
    },
    audio: function() {
      var n, e, t, s, a, r, i = window,
        i = i.OfflineAudioContext || i.webkitOfflineAudioContext;
      return i ? !rn() || on() || 3 <= I(["DOMRectList" in (n = window), "RTCPeerConnectionIceEvent" in n, "SVGGeometryElement" in n, "ontransitioncancel" in n]) ? ((i = (n = new i(1, 5e3, 44100)).createOscillator()).type = "triangle", i.frequency.value = 1e4, (e = n.createDynamicsCompressor()).threshold.value = -50, e.knee.value = 40, e.ratio.value = 12, e.attack.value = 0, e.release.value = .25, i.connect(e), e.connect(n.destination), i.start(0), t = n, s = function() {}, e = [new Promise(function(e, a) {
        function n() {
          try {
            switch (t.startRendering(), t.state) {
              case "running":
                o = Date.now(), r && e();
                break;
              case "suspended":
                document.hidden || i++, r && 3 <= i ? a(sn("suspended")) : z()
            }
          } catch (n) {
            a(n)
          }
        }
        var r = !1,
          i = 0,
          o = 0,
          e = (t.oncomplete = function(n) {
            return e(n.renderedBuffer)
          }, function() {
            z(Math.min(500, o + 5e3 - Date.now()))
          });
        n(), s = function() {
          r || (r = !0, 0 < o && e())
        }
      }), s], a = e[1], Z1(r = e[0].then(function(n) {
        for (var e = n.getChannelData(0).subarray(4500), a = 0, r = 0; r < e.length; ++r) a += Math.abs(e[r]);
        return a
      }, function(n) {
        if ("timeout" === n.name || "suspended" === n.name) return -3;
        throw n
      })), function() {
        return a(), r
      }) : -1 : -2
    },
    screenFrame: function() {
      var n = this,
        r = function() {
          var n, e = this;
          return void 0 === G && (n = function() {
              var n = z();
              G = Mn(n) ? z() : void(J = n)
            })(),
            function() {
              return w(e, void 0, void 0, function() {
                var a;
                return j(this, function(n) {
                  switch (n.label) {
                    case 0:
                      return Mn(a = z()) ? J ? [2, _1(J)] : (e = document).fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement ? [4, ((e = document).exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen).call(e)] : [3, 2] : [3, 2];
                    case 1:
                      n.sent(), a = z(), n.label = 2;
                    case 2:
                      return Mn(a) || (J = a), [2, a]
                  }
                  var e
                })
              })
            }
        }();
      return function() {
        return w(n, void 0, void 0, function() {
          var e, a;
          return j(this, function(n) {
            switch (n.label) {
              case 0:
                return [4, r()];
              case 1:
                return e = n.sent(), [2, [(a = function(n) {
                  return null === n ? null : q1(n, 10)
                })(e[0]), a(e[1]), a(e[2]), a(e[3])]]
            }
          })
        })
      }
    },
    osCpu: function() {
      return navigator.oscpu
    },
    languages: function() {
      var n = navigator,
        e = [],
        a = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
      return void 0 !== a && e.push([a]), Array.isArray(n.languages) ? an() && 3 <= I([!("MediaSettingsRange" in (a = window)), "RTCEncodedAudioFrame" in a, "" + a.Intl == "[object Intl]", "" + a.Reflect == "[object Reflect]"]) || e.push(n.languages) : "string" == typeof n.languages && (a = n.languages) && e.push(a.split(",")), e
    },
    colorDepth: function() {
      return window.screen.colorDepth
    },
    deviceMemory: function() {
      return b(A(navigator.deviceMemory), void 0)
    },
    screenResolution: function() {
      function n(n) {
        return b($1(n), null)
      }
      var e = screen,
        e = [n(e.width), n(e.height)];
      return e.sort().reverse(), e
    },
    hardwareConcurrency: function() {
      return b($1(navigator.hardwareConcurrency), void 0)
    },
    timezone: function() {
      var n = null == (n = window.Intl) ? void 0 : n.DateTimeFormat;
      if (n) {
        var n = (new n).resolvedOptions().timeZone;
        if (n) return n
      }
      n = (new Date).getFullYear();
      n = -Math.max(A(new Date(n, 0, 1).getTimezoneOffset()), A(new Date(n, 6, 1).getTimezoneOffset()));
      return "UTC" + (0 <= n ? "+" : "") + Math.abs(n)
    },
    sessionStorage: function() {
      try {
        return !!window.sessionStorage
      } catch (n) {
        return !0
      }
    },
    localStorage: function() {
      try {
        return !!window.localStorage
      } catch (n) {
        return !0
      }
    },
    indexedDB: function() {
      var n, e;
      if (!(en() || (n = window, e = navigator, 3 <= I(["msWriteProfilerMark" in n, "MSStream" in n, "msLaunchUri" in e, "msSaveBlob" in e]) && !en()))) try {
        return !!window.indexedDB
      } catch (n) {
        return !0
      }
    },
    openDatabase: function() {
      return !!window.openDatabase
    },
    cpuClass: function() {
      return navigator.cpuClass
    },
    platform: function() {
      var n, e = navigator.platform;
      return "MacIntel" === e && rn() && !on() ? "iPad" === navigator.platform || (n = (n = screen).width / n.height, 2 <= I(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, .65 < n && n < 1.53])) ? "iPad" : "iPhone" : e
    },
    plugins: function() {
      if (n = navigator.plugins) {
        for (var n = [], e = 0; e < n.length; ++e) {
          var a = n[e];
          if (a) {
            for (var r = [], e = 0; e < a.length; ++e) {
              var i = a[e],
                i = {
                  type: i.type,
                  suffixes: i.suffixes
                };
              r.push(i)
            }
            var o = {
              name: a.name,
              description: a.description,
              mimeTypes: r
            };
            n.push(o)
          }
        }
        return n
      }
    },
    canvas: function() {
      var n, e = !1,
        a = ((a = document.createElement("canvas")).width = 1, a.height = 1, [a, a.getContext("2d")]),
        r = a[0],
        a = a[1];
      if (a && r.toDataURL) {
        (i = a).rect(0, 0, 10, 10), i.rect(2, 2, 6, 6);
        var e = !i.isPointInPath(5, 5, "evenodd"),
          i = r,
          o = a,
          o = (i.width = 240, i.height = 60, o.textBaseline = "alphabetic", o.fillStyle = "#f60", o.fillRect(100, 1, 62, 20), o.fillStyle = "#069", o.font = '11pt "Times New Roman"', i = "Cwm fjordbank gly " + K.fromCharCode(55357, 56835), o.fillText(i, 2, 15), o.fillStyle = "rgba(102, 204, 0, 0.2)", o.font = "18pt Arial", o.fillText(i, 4, 45), hn(r));
        if (o !== hn(r)) n = t = "unstable";
        else {
          var t = o,
            i = r,
            s = a;
          i.width = 122, i.height = 110, s.globalCompositeOperation = "multiply";
          for (var u = 0, h = [
              ["#f2f", 40, 40],
              ["#2ff", 80, 40],
              ["#ff2", 60, 80]
            ]; u < h.length; u++) {
            var M = h[u],
              c = M[0],
              l = M[1],
              M = M[2];
            s.fillStyle = c, s.beginPath(), s.arc(l, M, 40, 0, 2 * Math.PI, !0), s.closePath(), s.fill()
          }
          s.fillStyle = "#f9c", s.arc(60, 60, 60, 0, 2 * Math.PI, !0), s.arc(60, 60, 20, 0, 2 * Math.PI, !0), s.fill("evenodd"), n = hn(r)
        }
      } else n = t = "";
      o = {};
      return o.winding = e, o.geometry = n, o.text = t, o
    },
    touchSupport: function() {
      var e, n = navigator,
        a = 0;
      void 0 !== n.maxTouchPoints ? a = $1(n.maxTouchPoints) : void 0 !== n.msMaxTouchPoints && (a = n.msMaxTouchPoints);
      try {
        document.createEvent("TouchEvent"), e = !0
      } catch (n) {
        e = !1
      }
      n = {};
      return n.maxTouchPoints = a, n.touchEvent = e, n.touchStart = "ontouchstart" in window, n
    },
    vendor: function() {
      return navigator.vendor || ""
    },
    vendorFlavors: function() {
      for (var n = [], e = 0, a = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; e < a.length; e++) {
        var r = a[e],
          i = window[r];
        i && "object" == typeof i && n.push(r)
      }
      return n.sort()
    },
    cookiesEnabled: function() {
      var n = document;
      try {
        n.cookie = "cookietest=1; SameSite=Strict;";
        var e = -1 !== n.cookie.indexOf("cookietest=");
        return n.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", e
      } catch (n) {
        return !1
      }
    },
    colorGamut: function() {
      for (var n = 0, e = ["rec2020", "p3", "srgb"]; n < e.length; n++) {
        var a = e[n];
        if (matchMedia("(color-gamut: " + a + ")").matches) return a
      }
    },
    invertedColors: function() {
      return !!dn("inverted") || !dn("none") && void 0
    },
    forcedColors: function() {
      return !!mn("active") || !mn("none") && void 0
    },
    monochrome: function() {
      if (matchMedia("(min-monochrome: 0)").matches) {
        for (var n = 0; n <= 100; ++n)
          if (matchMedia("(max-monochrome: " + n + ")").matches) return n;
        throw new Error("Too high value")
      }
    },
    contrast: function() {
      return C("no-preference") ? 0 : C("high") || C("more") ? 1 : C("low") || C("less") ? -1 : C("forced") ? 10 : void 0
    },
    reducedMotion: function() {
      return !!yn("reduce") || !yn("no-preference") && void 0
    },
    hdr: function() {
      return !!gn("high") || !gn("standard") && void 0
    },
    math: function() {
      var n = y.acos || P,
        e = y.acosh || P,
        a = y.asin || P,
        r = y.asinh || P,
        i = y.atanh || P,
        o = y.atan || P,
        t = y.sin || P,
        s = y.sinh || P,
        u = y.cos || P,
        h = y.cosh || P,
        M = y.tan || P,
        c = y.tanh || P,
        l = y.exp || P,
        d = y.expm1 || P,
        m = y.log1p || P;
      return {
        acos: n(.12312423423423424),
        acosh: e(1e308),
        acoshPf: y.log(1e154 + y.sqrt(1e308)),
        asin: a(.12312423423423424),
        asinh: r(1),
        asinhPf: y.log(1 + y.sqrt(2)),
        atanh: i(.5),
        atanhPf: y.log(3) / 2,
        atan: o(.5),
        sin: t(-1e300),
        sinh: s(1),
        sinhPf: y.exp(1) - 1 / y.exp(1) / 2,
        cos: u(10.000000000123),
        cosh: h(1),
        coshPf: (y.exp(1) + 1 / y.exp(1)) / 2,
        tan: M(-1e300),
        tanh: c(1),
        tanhPf: (y.exp(2) - 1) / (y.exp(2) + 1),
        exp: l(1),
        expm1: d(1),
        expm1Pf: y.exp(1) - 1,
        log1p: m(10),
        log1pPf: y.log(11),
        powPI: y.pow(y.PI, -100)
      }
    }
  }, a = {
    load: function(n) {
      var n = void 0 === n ? {} : n,
        h = n.delayFallback,
        M = n.debug,
        n = n.monitoring,
        c = void 0 === n || n;
      return w(this, void 0, void 0, function() {
        return j(this, function(n) {
          switch (n.label) {
            case 0:
              if (c)
                if (!(window.__fpjs_d_m || .001 <= Math.random())) try {
                  var e = new XMLHttpRequest;
                  e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v3.3.6/npm-monitoring", !0), e.send()
                } catch (n) {
                  console.error(n)
                }
              return [4, (void 0 === (a = 2 * (e = e = void 0 === (e = h) ? 50 : e)) && (a = 1 / 0), (r = window.requestIdleCallback) ? new Promise(function(n) {
                var e = {};
                return e.timeout = a, r.call(window, function() {
                  return n()
                }, e)
              }) : f(Math.min(e, a)))];
            case 1:
              return n.sent(), i = t1, t = {
                debug: M
              }, o = [], s = Object.keys(i).filter(function(n) {
                for (var e = o, a = n, r = 0, i = e.length; r < i; ++r)
                  if (e[r] === a) return !1;
                return !0
              }), u = Array(s.length), W1(s, function(n, e) {
                var a, o, r;
                u[e] = (a = i[n], o = t, Z1(r = new Promise(function(r) {
                  var i = Date.now();
                  V1(a.bind(null, o), function() {
                    for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                    var a, o = Date.now() - i;
                    return n[0] ? "function" != typeof(a = n[1]) ? r(function() {
                      var n = {};
                      return n.value = a, n.duration = o, n
                    }) : void r(function() {
                      return new Promise(function(r) {
                        var i = Date.now();
                        V1(a, function() {
                          for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
                          var a = o + Date.now() - i;
                          if (!n[0]) return r({
                            error: nn(n[1]),
                            duration: a
                          });
                          r({
                            value: n[1],
                            duration: a
                          })
                        })
                      })
                    }) : r(function() {
                      return {
                        error: nn(n[1]),
                        duration: o
                      }
                    })
                  })
                })), function() {
                  return r.then(function(n) {
                    return n()
                  })
                })
              }), [2, En(function() {
                return w(this, void 0, void 0, function() {
                  var i, e, a, r, o, t;
                  return j(this, function(n) {
                    switch (n.label) {
                      case 0:
                        for (i = {}, e = 0, a = s; e < a.length; e++) r = a[e], i[r] = void 0;
                        o = Array(s.length), t = function() {
                          var r;
                          return j(this, function(n) {
                            switch (n.label) {
                              case 0:
                                return r = !0, [4, W1(s, function(e, n) {
                                  var a;
                                  o[n] || (u[n] ? (Z1(a = u[n]().then(function(n) {
                                    return i[e] = n
                                  })), o[n] = a) : r = !1)
                                })];
                              case 1:
                                return n.sent(), r ? [2, "break"] : [4, f()];
                              case 2:
                                return n.sent(), [2]
                            }
                          })
                        }, n.label = 1;
                      case 1:
                        return [5, t()];
                      case 2:
                        if ("break" === n.sent()) return [3, 4];
                        n.label = 3;
                      case 3:
                        return [3, 1];
                      case 4:
                        return [4, Promise.all(o)];
                      case 5:
                        return n.sent(), [2, i]
                    }
                  })
                })
              }, M)]
          }
          var i, t, o, s, u, a, r
        })
      })
    },
    hashComponents: pn,
    componentsToDebugString: kn
  }, B = g(t().mark(function n() {
    var e;
    return t().wrap(function(n) {
      for (;;) switch (n.prev = n.next) {
        case 0:
          return n.prev = 0, n.next = 3, a.load({
            monitoring: !1
          });
        case 3:
          return e = n.sent, n.next = 6, e.get();
        case 6:
          return e = n.sent, n.abrupt("return", {
            version: e.version,
            visitor_id: e.visitorId,
            confidence: e.confidence.score,
            hashes: {
              fonts: a.hashComponents({
                fonts: e.components.fonts,
                fontPreferences: e.components.fontPreferences
              }),
              plugins: a.hashComponents({
                plugins: e.components.plugins
              }),
              audio: a.hashComponents({
                audio: e.components.audio
              }),
              canvas: a.hashComponents({
                canvas: e.components.canvas
              }),
              screen: a.hashComponents({
                screenFrame: e.components.screenFrame,
                colorDepth: e.components.colorDepth,
                screenResolution: e.components.screenResolution,
                touchSupport: e.components.touchSupport,
                invertedColors: e.components.invertedColors,
                forcedColors: e.components.forcedColors,
                monochrome: e.components.monochrome,
                contrast: e.components.contrast,
                reducedMotion: e.components.reducedMotion,
                hdr: e.components.hdr
              })
            }
          });
        case 10:
          n.prev = 10, n.t0 = n.catch(0), T(talon.env, M, talon.session, n.t0.message, n.t0.stack);
        case 13:
        case "end":
          return n.stop()
      }
    }, n, null, [
      [0, 10]
    ])
  })), s1 = function() {
    return B.apply(this, arguments)
  }, u = {
    mousemove: new n(500, 50),
    mousedown: new n(50),
    mouseup: new n(50),
    wheel: new n(100, 50),
    touchstart: new n(50),
    touchend: new n(50),
    touchmove: new n(500, 50),
    scroll: new n(50),
    keydown: new n(50),
    keyup: new n(50),
    resize: new n(50),
    paste: new n(50)
  }, u1 = "0é\b7°-³xûËfîâÀZâ©SÑä`Á'", E1 = {
    ar: {
      challengeTitle: "خطوة واحدة إضافية",
      challengeSubtitle: "يُرجى إكمال فحص الأمان للمتابعة",
      sessionID: "مُعرّف الجلسة",
      ipAddress: "عنوان IP",
      errorTryAgain: "يرجى المحاولة مرة أخرى.",
      tryAgainButton: "أعد المحاولة"
    },
    "de-DE": e = {
      challengeTitle: "Ein letzter Schritt",
      challengeSubtitle: "Bitte führe eine Sicherheitskontrolle aus, um fortzufahren.",
      sessionID: "Sitzungs-ID",
      ipAddress: "IP-Adresse",
      errorTryAgain: "Bitte versuche es erneut.",
      tryAgainButton: "Erneut versuchen"
    },
    de: e,
    "en-US": n = {
      challengeTitle: "One More Step",
      challengeSubtitle: "Please complete a security check to continue",
      sessionID: "Session ID",
      ipAddress: "IP Address",
      errorTryAgain: "Please try again",
      tryAgainButton: "Try Again"
    },
    "en-us": n,
    en: n,
    "es-ES": h1 = {
      challengeTitle: "Un paso más",
      challengeSubtitle: "Completa el control de seguridad para continuar",
      sessionID: "ID de sesión",
      ipAddress: "Dirección IP",
      errorTryAgain: "Inténtalo de nuevo.",
      tryAgainButton: "Intentar de nuevo"
    },
    "es-es": h1,
    "es-MX": M1 = {
      challengeTitle: "Un paso más",
      challengeSubtitle: "Completa el control de seguridad para continuar",
      sessionID: "ID de sesión",
      ipAddress: "Dirección IP",
      errorTryAgain: "Inténtalo de nuevo.",
      tryAgainButton: "Reintentar"
    },
    "es-mx": M1,
    es: h1,
    "fr-FR": c1 = {
      challengeTitle: "Encore une étape",
      challengeSubtitle: "Remplissez l'enquête de sécurité pour continuer",
      sessionID: "ID de session",
      ipAddress: "Adresse IP",
      errorTryAgain: "Veuillez réessayer.",
      tryAgainButton: "Réessayer"
    },
    "fr-fr": c1,
    fr: c1,
    "it-IT": l1 = {
      challengeTitle: "Ancora un passo da compiere",
      challengeSubtitle: "Completa un controllo di sicurezza per continuare",
      sessionID: "ID della sessione",
      ipAddress: "Indirizzo IP",
      errorTryAgain: "Ti preghiamo di ritentare",
      tryAgainButton: "Ritenta"
    },
    "it-it": l1,
    it: l1,
    "ja-JP": d1 = {
      challengeTitle: "あともう1ステップ",
      challengeSubtitle: "継続するにはセキュリティチェックを完了してください",
      sessionID: "セッションID",
      ipAddress: "IPアドレス",
      errorTryAgain: "もう一度お試しください",
      tryAgainButton: "もう一度試す"
    },
    "ja-jp": d1,
    ja: d1,
    "ko-KR": m1 = {
      challengeTitle: "한 단계가 더 남았습니다",
      challengeSubtitle: "계속하려면 보안 검사를 완료해주세요",
      sessionID: "세션 ID",
      ipAddress: "IP 주소",
      errorTryAgain: "다시 시도해주세요",
      tryAgainButton: "다시 시도"
    },
    "ko-kr": m1,
    ko: m1,
    "pl-PL": y1 = {
      challengeTitle: "Jeszcze jeden krok",
      challengeSubtitle: "Przeprowadź kontrolę bezpieczeństwa, by kontynuować",
      sessionID: "Identyfikator sesji",
      ipAddress: "Adres IP",
      errorTryAgain: "Proszę spróbować ponownie.",
      tryAgainButton: "Spróbuj ponownie"
    },
    "pl-pl": y1,
    pl: y1,
    "pt-BR": g1 = {
      challengeTitle: "Mais uma etapa",
      challengeSubtitle: "Complete uma verificação de segurança para continuar",
      sessionID: "ID da sessão",
      ipAddress: "Endereço IP",
      errorTryAgain: "Tente novamente",
      tryAgainButton: "Tentar novamente"
    },
    "pt-br": g1,
    pt: g1,
    "ru-RU": k1 = {
      challengeTitle: "Ещё один шаг",
      challengeSubtitle: "Перед тем как продолжить, завершите проверку безопасности",
      sessionID: "Идентификатор сеанса",
      ipAddress: "IP-адрес",
      errorTryAgain: "Повторите попытку.",
      tryAgainButton: "Повторить попытку"
    },
    "ru-ru": k1,
    ru: k1,
    th: {
      challengeTitle: "อีกขั้นตอนเดียวเท่านั้น",
      challengeSubtitle: "โปรดทำการตรวจสอบความปลอดภัยให้เสร็จเพื่อดำเนินการต่อ",
      sessionID: "ID เซสชัน",
      ipAddress: "ที่อยู่ IP",
      errorTryAgain: "โปรดลองอีกครั้ง",
      tryAgainButton: "ลองอีกครั้ง"
    },
    tr: {
      challengeTitle: "Son Bir Adım Daha",
      challengeSubtitle: "Devam etmek için lütfen bir güvenlik kontrolünü tamamla",
      sessionID: "Oturum NO",
      ipAddress: "IP Adresi",
      errorTryAgain: "Lütfen tekrar dene.",
      tryAgainButton: "Tekrar Dene"
    },
    "zh-CN": h = {
      challengeTitle: "再进行一步操作",
      challengeSubtitle: "请完成安全检查以继续",
      sessionID: "会话 ID",
      ipAddress: "IP 地址",
      errorTryAgain: "请重试",
      tryAgainButton: "重试"
    },
    "zh-cn": h,
    "zh-TW": p1 = {
      challengeTitle: "再一個步驟",
      challengeSubtitle: "請完成安全性確認以繼續",
      sessionID: "階段 ID",
      ipAddress: "IP 位址",
      errorTryAgain: "請再試一次",
      tryAgainButton: "再試一次"
    },
    "zh-tw": p1,
    zh: h
  }, e = r(3379), n = r.n(e), M1 = r(7795), h1 = r.n(M1), c1 = r(569), l1 = r.n(c1), d1 = r(3565), m1 = r.n(d1), y1 = r(9216), g1 = r.n(y1), k1 = r(4589), p1 = r.n(k1), h = r(6452), e = {
    styleTagTransform: p1(),
    setAttributes: m1(),
    insert: l1().bind(null, "head"),
    domAPI: h1(),
    insertStyleElement: g1()
  }, n()(h.Z, e), h.Z && h.Z.locals && h.Z.locals, r(8267), r(7489), r(3178), r(8750), r(7305), r(7929), r(3474), r(5330), r(7108), r(7646), r(935), r(1630), r(6602), r(6924), r(787), r(3606), r(9937), T1 = !1, w1 = function(n, t, s, u) {
    return new(s = s || Promise)(function(a, e) {
      function r(n) {
        try {
          o(u.next(n))
        } catch (n) {
          e(n)
        }
      }

      function i(n) {
        try {
          o(u.throw(n))
        } catch (n) {
          e(n)
        }
      }

      function o(n) {
        var e;
        n.done ? a(n.value) : ((e = n.value) instanceof s ? e : new s(function(n) {
          n(e)
        })).then(r, i)
      }
      o((u = u.apply(n, t || [])).next())
    })
  }, j1 = function(i, o) {
    function n(r) {
      return function(n) {
        var e = [r, n];
        if (t) throw new TypeError("Generator is already executing.");
        for (; h;) try {
          if (t = 1, s && (u = 2 & e[0] ? s.return : e[0] ? s.throw || ((u = s.return) && u.call(s), 0) : s.next) && !(u = u.call(s, e[1])).done) return u;
          switch (s = 0, (e = u ? [2 & e[0], u.value] : e)[0]) {
            case 0:
            case 1:
              u = e;
              break;
            case 4:
              var a = {};
              return a.value = e[1], a.done = !1, h.label++, a;
            case 5:
              h.label++, s = e[1], e = [0];
              continue;
            case 7:
              e = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (!((u = 0 < (u = h.trys).length && u[u.length - 1]) || 6 !== e[0] && 2 !== e[0])) {
                h = 0;
                continue
              }
              if (3 === e[0] && (!u || e[1] > u[0] && e[1] < u[3])) h.label = e[1];
              else if (6 === e[0] && h.label < u[1]) h.label = u[1], u = e;
              else {
                if (!(u && h.label < u[2])) {
                  u[2] && h.ops.pop(), h.trys.pop();
                  continue
                }
                h.label = u[2], h.ops.push(e)
              }
          }
          e = o.call(i, h)
        } catch (n) {
          e = [6, n], s = 0
        } finally {
          t = u = 0
        }
        if (5 & e[0]) throw e[1];
        n = {};
        return n.value = e[0] ? e[1] : void 0, n.done = !0, n
      }
    }
    var t, s, u, h = {
        label: 0,
        sent: function() {
          if (1 & u[0]) throw u[1];
          return u[1]
        },
        trys: [],
        ops: []
      },
      e = {
        next: n(0),
        throw: n(1),
        return: n(2)
      };
    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
      return this
    }), e
  }, f1 = F().create({
    timeout: 1e4
  }), D1 = function() {
    return (D1 = Object.assign || function(n) {
      for (var e, a, r = 1, i = arguments.length; r < i; r++)
        for (a in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, a) && (n[a] = e[a]);
      return n
    }).apply(this, arguments)
  }, l = function(n, t, s, u) {
    return new(s = s || Promise)(function(a, e) {
      function r(n) {
        try {
          o(u.next(n))
        } catch (n) {
          e(n)
        }
      }

      function i(n) {
        try {
          o(u.throw(n))
        } catch (n) {
          e(n)
        }
      }

      function o(n) {
        var e;
        n.done ? a(n.value) : ((e = n.value) instanceof s ? e : new s(function(n) {
          n(e)
        })).then(r, i)
      }
      o((u = u.apply(n, t || [])).next())
    })
  }, m = function(i, o) {
    function n(r) {
      return function(n) {
        var e = [r, n];
        if (t) throw new TypeError("Generator is already executing.");
        for (; h;) try {
          if (t = 1, s && (u = 2 & e[0] ? s.return : e[0] ? s.throw || ((u = s.return) && u.call(s), 0) : s.next) && !(u = u.call(s, e[1])).done) return u;
          switch (s = 0, (e = u ? [2 & e[0], u.value] : e)[0]) {
            case 0:
            case 1:
              u = e;
              break;
            case 4:
              var a = {};
              return a.value = e[1], a.done = !1, h.label++, a;
            case 5:
              h.label++, s = e[1], e = [0];
              continue;
            case 7:
              e = h.ops.pop(), h.trys.pop();
              continue;
            default:
              if (!((u = 0 < (u = h.trys).length && u[u.length - 1]) || 6 !== e[0] && 2 !== e[0])) {
                h = 0;
                continue
              }
              if (3 === e[0] && (!u || e[1] > u[0] && e[1] < u[3])) h.label = e[1];
              else if (6 === e[0] && h.label < u[1]) h.label = u[1], u = e;
              else {
                if (!(u && h.label < u[2])) {
                  u[2] && h.ops.pop(), h.trys.pop();
                  continue
                }
                h.label = u[2], h.ops.push(e)
              }
          }
          e = o.call(i, h)
        } catch (n) {
          e = [6, n], s = 0
        } finally {
          t = u = 0
        }
        if (5 & e[0]) throw e[1];
        n = {};
        return n.value = e[0] ? e[1] : void 0, n.done = !0, n
      }
    }
    var t, s, u, h = {
        label: 0,
        sent: function() {
          if (1 & u[0]) throw u[1];
          return u[1]
        },
        trys: [],
        ops: []
      },
      e = {
        next: n(0),
        throw: n(1),
        return: n(2)
      };
    return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
      return this
    }), e
  }, N1 = {
    dev: "http://epicgames-local.ol.epicgames.net:12080",
    ci: "https://talon-service-ci.ecac.dev.use1a.on.epicgames.com",
    gamedev: "https://talon-service-gamedev.ecac.dev.use1a.on.epicgames.com",
    prod: "https://talon-service-prod.ecosec.on.epicgames.com",
    prod_akamai: "https://talon-service-prod.ak.epicgames.com",
    prod_cloudflare: "https://talon-service-prod.ecosec.on.epicgames.com"
  }, S1 = {
    dev: "http://epicgames-local.ol.epicgames.net:12080",
    ci: "https://talon-service-ci.ecac.dev.use1a.on.epicgames.com",
    gamedev: "https://talon-service-gamedev.ecac.dev.use1a.on.epicgames.com",
    prod: "https://talon-service-prod.ecosec.on.epicgames.com",
    prod_akamai: "https://talon-service-v4-prod.ak.epicgames.com",
    prod_cloudflare: "https://talon-service-prod.ecosec.on.epicgames.com"
  }, null !== window && void 0 !== window && window.talon || (window.talon = {
    flows: {},
    load: bn,
    loadSync: function(a) {
      return l(this, void 0, void 0, function() {
        var e;
        return m(this, function(n) {
          return e = zn(a), bn(a), [2, e]
        })
      })
    },
    waitForLoad: zn,
    execute: Ln,
    executeSync: function(a, r) {
      return l(this, void 0, void 0, function() {
        var e;
        return m(this, function(n) {
          switch (n.label) {
            case 0:
              return e = function(r) {
                return l(this, void 0, void 0, function() {
                  return m(this, function(n) {
                    return [2, new Promise(function(e, a) {
                      var n = O(r).config;
                      n.onComplete = function(n) {
                        e(n)
                      }, n.onError = function(n) {
                        a(n)
                      }, n.onClosed = function() {
                        a("challenge closed")
                      }
                    })]
                  })
                })
              }(a), [4, Ln(a, r)];
            case 1:
              return n.sent(), [2, e]
          }
        })
      })
    },
    remove: function(n) {
      var e = O(n),
        e = (e.ready = !1, e.widgetID = void 0, e.formData = void 0, e.loadWatchdog && clearTimeout(e.loadWatchdog), e.executeWatchdog && clearTimeout(e.executeWatchdog), e.loadWatchdog = void 0, e.executeWatchdog = void 0, document.getElementById("talon_container_".concat(n))),
        e = (e && e.parentNode.removeChild(e), document.getElementById("h_captcha_checkbox_".concat(n)));
      e && e.parentNode.removeChild(e)
    },
    reset: function(n) {
      var e = O(n);
      e.session && e.config.onReady ? e.config.onReady(e.session) : Hn(new Error("'attempting to reset flow_id \"".concat(n, '" that is not initialized')), void 0)
    },
    close: On,
    debug: {
      openDialog: function(n) {
        H(O(n), !0)
      },
      closeDialog: On,
      nelly: function() {
        T1 = !0, Kn(["https://nelly-service-prod-cloudflare.ecosec.on.epicgames.com/v1/task", "https://nelly-service-prod-cloudfront.ecosec.on.epicgames.com/v1/task", "https://nelly-service-prod-fastly.ecosec.on.epicgames.com/v1/task", "https://nelly-service-prod-akamai.ecosec.on.epicgames.com/v1/task", "https://nelly-service-prod.ecbc.live.use1a.on.epicgames.com/v1/task"].sort(function() {
          return Math.random() - .5
        }), "talon", 1).then()
      }
    }
  }, Object.keys(u).forEach(function(n) {
    window.addEventListener(n, function(n) {
      var e;
      u[n.type] && (e = u[n.type]).push.apply(e, function(a) {
        var n, e = {
          t: a.timeStamp
        };
        switch (a.type) {
          case "mousemove":
          case "mousedown":
          case "mouseup":
            var r = {};
            return r.t = a.timeStamp, r.x = a.x, r.y = a.y, [r];
          case "wheel":
            r = {};
            return r.t = a.timeStamp, r.x = a.x, r.y = a.y, r.dy = a.deltaY, r.dx = a.deltaX, [r];
          case "touchstart":
            return Object.values(a.touches).map(function(n) {
              var e = {};
              return e.t = a.timeStamp, e.id = n.identifier, e.x = n.pageX, e.y = n.pageY, e.sx = n.clientX, e.sy = n.clientY, e.n = a.touches.length, e
            });
          case "touchend":
          case "touchmove":
            return Object.values(a.changedTouches).map(function(n) {
              var e = {};
              return e.t = a.timeStamp, e.id = n.identifier, e.x = n.pageX, e.y = n.pageY, e.sx = n.clientX, e.sy = n.clientY, e.n = a.touches.length, e
            });
          case "scroll":
            r = {};
            return r.t = a.timeStamp, r.x = window.scrollX, r.y = window.scrollY, [r];
          case "keydown":
          case "keyup":
            return !a.metaKey || "KeyC" !== a.code && "KeyX" !== a.code || (e.c = !0), a.metaKey && "KeyV" === a.code && (e.p = !0), [e];
          case "resize":
            r = {};
            return r.t = a.timeStamp, r.w = null == (n = window.screen) ? void 0 : n.width, r.h = null == (n = window.screen) ? void 0 : n.height, [r];
          case "paste":
            return [{
              t: a.timeStamp,
              tg: "".concat(a.target.tagName.toLowerCase(), "#").concat(a.target.id).concat(Object.values(a.target.classList).join("."))
            }];
          default:
            return [e]
        }
      }(n))
    })
  }), Kn(["https://nelly-service-prod-cloudflare.ecosec.on.epicgames.com/v1/task", "https://nelly-service-prod-cloudfront.ecosec.on.epicgames.com/v1/task", "https://nelly-service-prod-fastly.ecosec.on.epicgames.com/v1/task", "https://nelly-service-prod-akamai.ecosec.on.epicgames.com/v1/task", "https://nelly-service-prod.ecbc.live.use1a.on.epicgames.com/v1/task"].sort(function() {
    return Math.random() - .5
  }), "talon", .05).then())
}();
