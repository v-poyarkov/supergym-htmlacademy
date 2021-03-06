/**
 * Swiper 4.5.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2019 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 22, 2019
 */
! function (e, t) {
  typeof exports === `object` && typeof module !== `undefined` ? module.exports = t() : typeof define === `function` && define.amd ? define(t) : (e = e || self).Swiper = t();
}(this, function () {
  'use strict';
  let f = typeof document === `undefined` ? {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: {
        blur() {},
        nodeName: ``
      },
      querySelector() {
        return null;
      },
      querySelectorAll() {
        return [];
      },
      getElementById() {
        return null;
      },
      createEvent() {
        return {
          initEvent() {}
        };
      },
      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName() {
            return [];
          }
        };
      },
      location: {
        hash: ``
      }
    } :
    document;
  let J = typeof window === `undefined` ? {
      document: f,
      navigator: {
        userAgent: ``
      },
      location: {},
      history: {},
      CustomEvent() {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle() {
        return {
          getPropertyValue() {
            return ``;
          }
        };
      },
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {}
    } :
    window;
  let l = function (e) {
    for (let t = 0; t < e.length; t += 1) {
      this[t] = e[t];
    }
    return this.length = e.length,
      this;
  };

  function L(e, t) {
    let a = [];
    let i = 0;
    if (e && !t && e instanceof l) {
      return e;
    }
    if (e) {
      if (typeof e === `string`) {
        let s;
        let r;
        let n = e.trim();
        if (n.indexOf(`<`) >= 0 && n.indexOf(`>`) >= 0) {
          let o = `div`;
          for (n.indexOf(`<li`) === 0 && (o = `ul`), n.indexOf(`<tr`) === 0 && (o = `tbody`), n.indexOf(`<td`) !== 0 && n.indexOf(`<th`) !== 0 || (o = `tr`), n.indexOf(`<tbody`) === 0 && (o = `table`), n.indexOf(`<option`) === 0 && (o = `select`), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) {
            a.push(r.childNodes[i]);
          }
        } else {
          for (s = t || e[0] !== `#` || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [
              f.getElementById(e.trim().split(`#`)[1])
            ], i = 0; i < s.length; i += 1) {
            s[i] && a.push(s[i]);
          }
        }
      } else if (e.nodeType || e === J || e === f) {
        a.push(e);
      } else if (e.length > 0 && e[0].nodeType) {
        for (i = 0; i < e.length; i += 1) {
          a.push(e[i]);
        }
      }
    }
    return new l(a);
  }

  function r(e) {
    for (var t = [], a = 0; a < e.length; a += 1) {
      t.indexOf(e[a]) === -1 && t.push(e[a]);
    }
    return t;
  }
  L.fn = l.prototype,
    L.Class = l,
    L.Dom7 = l;
  let t = {
    addClass(e) {
      if (void 0 === e) {
        return this;
      }
      for (let t = e.split(` `), a = 0; a < t.length; a += 1) {
        for (let i = 0; i < this.length; i += 1) {
          void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
        }
      }
      return this;
    },
    removeClass(e) {
      for (let t = e.split(` `), a = 0; a < t.length; a += 1) {
        for (let i = 0; i < this.length; i += 1) {
          void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
        }
      }
      return this;
    },
    hasClass(e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass(e) {
      for (let t = e.split(` `), a = 0; a < t.length; a += 1) {
        for (let i = 0; i < this.length; i += 1) {
          void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
        }
      }
      return this;
    },
    attr(e, t) {
      let a = arguments;
      if (arguments.length === 1 && typeof e === `string`) {
        return this[0] ? this[0].getAttribute(e) : void 0;
      }
      for (let i = 0; i < this.length; i += 1) {
        if (a.length === 2) {
          this[i].setAttribute(e, t);
        } else {
          for (let s in e) {
            this[i][s] = e[s],
              this[i].setAttribute(s, e[s]);
          }
        }
      }
      return this;
    },
    removeAttr(e) {
      for (let t = 0; t < this.length; t += 1) {
        this[t].removeAttribute(e);
      }
      return this;
    },
    data(e, t) {
      let a;
      if (void 0 !== t) {
        for (let i = 0; i < this.length; i += 1) {
          (a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}),
            a.dom7ElementDataStorage[e] = t;
        }
        return this;
      }
      if (a = this[0]) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) {
          return a.dom7ElementDataStorage[e];
        }
        let s = a.getAttribute(`data-` + e);
        return s || void 0;
      }
    },
    transform(e) {
      for (let t = 0; t < this.length; t += 1) {
        let a = this[t].style;
        a.webkitTransform = e,
          a.transform = e;
      }
      return this;
    },
    transition(e) {
      typeof e !== `string` && (e += `ms`);
      for (let t = 0; t < this.length; t += 1) {
        let a = this[t].style;
        a.webkitTransitionDuration = e,
          a.transitionDuration = e;
      }
      return this;
    },
    on() {
      for (var e, t = [], a = arguments.length; a--;) {
        t[a] = arguments[a];
      }
      let i = t[0];
      let r = t[1];
      let n = t[2];
      let s = t[3];

      function o(e) {
        let t = e.target;
        if (t) {
          let a = e.target.dom7EventData || [];
          if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) {
            n.apply(t, a);
          } else {
            for (let i = L(t).parents(), s = 0; s < i.length; s += 1) {
              L(i[s]).is(r) && n.apply(i[s], a);
            }
          }
        }
      }

      function l(e) {
        let t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e),
          n.apply(this, t);
      }
      typeof t[1] === `function` && (i = (e = t)[0], n = e[1], s = e[2], r = void 0),
        s || (s = !1);
      for (var d, p = i.split(` `), c = 0; c < this.length; c += 1) {
        let u = this[c];
        if (r) {
          for (d = 0; d < p.length; d += 1) {
            let h = p[d];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}),
              u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []),
              u.dom7LiveListeners[h].push({
                listener: n,
                proxyListener: o
              }),
              u.addEventListener(h, o, s);
          }
        } else {
          for (d = 0; d < p.length; d += 1) {
            let v = p[d];
            u.dom7Listeners || (u.dom7Listeners = {}),
              u.dom7Listeners[v] || (u.dom7Listeners[v] = []),
              u.dom7Listeners[v].push({
                listener: n,
                proxyListener: l
              }),
              u.addEventListener(v, l, s);
          }
        }
      }
      return this;
    },
    off() {
      for (var e, t = [], a = arguments.length; a--;) {
        t[a] = arguments[a];
      }
      let i = t[0];
      let s = t[1];
      let r = t[2];
      let n = t[3];
      typeof t[1] === `function` && (i = (e = t)[0], r = e[1], n = e[2], s = void 0),
        n || (n = !1);
      for (let o = i.split(` `), l = 0; l < o.length; l += 1) {
        for (let d = o[l], p = 0; p < this.length; p += 1) {
          let c = this[p];
          let u = void 0;
          if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length) {
            for (let h = u.length - 1; h >= 0; h -= 1) {
              let v = u[h];
              r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1));
            }
          }
        }
      }
      return this;
    },
    trigger() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      for (let a = e[0].split(` `), i = e[1], s = 0; s < a.length; s += 1) {
        for (let r = a[s], n = 0; n < this.length; n += 1) {
          let o = this[n];
          let l = void 0;
          try {
            l = new J.CustomEvent(r, {
              detail: i,
              bubbles: !0,
              cancelable: !0
            });
          } catch (e) {
            (l = f.createEvent(`Event`)).initEvent(r, !0, !0),
              l.detail = i;
          }
          o.dom7EventData = e.filter(function (e, t) {
              return t > 0;
            }),
            o.dispatchEvent(l),
            o.dom7EventData = [],
            delete o.dom7EventData;
        }
      }
      return this;
    },
    transitionEnd(t) {
      let a;
      let i = [
        `webkitTransitionEnd`,
        `transitionend`
      ];
      let s = this;

      function r(e) {
        if (e.target === this) {
          for (t.call(this, e), a = 0; a < i.length; a += 1) {
            s.off(i[a], r);
          }
        }
      }
      if (t) {
        for (a = 0; a < i.length; a += 1) {
          s.on(i[a], r);
        }
      }
      return this;
    },
    outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          let t = this.styles();
          return this[0].offsetWidth + parseFloat(t.getPropertyValue(`margin-right`)) + parseFloat(t.getPropertyValue(`margin-left`));
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          let t = this.styles();
          return this[0].offsetHeight + parseFloat(t.getPropertyValue(`margin-top`)) + parseFloat(t.getPropertyValue(`margin-bottom`));
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset() {
      if (this.length > 0) {
        let e = this[0];
        let t = e.getBoundingClientRect();
        let a = f.body;
        let i = e.clientTop || a.clientTop || 0;
        let s = e.clientLeft || a.clientLeft || 0;
        let r = e === J ? J.scrollY : e.scrollTop;
        let n = e === J ? J.scrollX : e.scrollLeft;
        return {
          top: t.top + r - i,
          left: t.left + n - s
        };
      }
      return null;
    },
    css(e, t) {
      let a;
      if (arguments.length === 1) {
        if (typeof e !== `string`) {
          for (a = 0; a < this.length; a += 1) {
            for (let i in e) {
              this[a].style[i] = e[i];
            }
          }
          return this;
        }
        if (this[0]) {
          return J.getComputedStyle(this[0], null).getPropertyValue(e);
        }
      }
      if (arguments.length === 2 && typeof e === `string`) {
        for (a = 0; a < this.length; a += 1) {
          this[a].style[e] = t;
        }
        return this;
      }
      return this;
    },
    each(e) {
      if (!e) {
        return this;
      }
      for (let t = 0; t < this.length; t += 1) {
        if (!1 === e.call(this[t], t, this[t])) {
          return this;
        }
      }
      return this;
    },
    html(e) {
      if (void 0 === e) {
        return this[0] ? this[0].innerHTML : void 0;
      }
      for (let t = 0; t < this.length; t += 1) {
        this[t].innerHTML = e;
      }
      return this;
    },
    text(e) {
      if (void 0 === e) {
        return this[0] ? this[0].textContent.trim() : null;
      }
      for (let t = 0; t < this.length; t += 1) {
        this[t].textContent = e;
      }
      return this;
    },
    is(e) {
      let t;
      let a;
      let i = this[0];
      if (!i || void 0 === e) {
        return !1;
      }
      if (typeof e === `string`) {
        if (i.matches) {
          return i.matches(e);
        }
        if (i.webkitMatchesSelector) {
          return i.webkitMatchesSelector(e);
        }
        if (i.msMatchesSelector) {
          return i.msMatchesSelector(e);
        }
        for (t = L(e), a = 0; a < t.length; a += 1) {
          if (t[a] === i) {
            return !0;
          }
        }
        return !1;
      }
      if (e === f) {
        return i === f;
      }
      if (e === J) {
        return i === J;
      }
      if (e.nodeType || e instanceof l) {
        for (t = e.nodeType ? [
            e
          ] : e, a = 0; a < t.length; a += 1) {
          if (t[a] === i) {
            return !0;
          }
        }
        return !1;
      }
      return !1;
    },
    index() {
      let e;
      let t = this[0];
      if (t) {
        for (e = 0;
          (t = t.previousSibling) !== null;) {
          t.nodeType === 1 && (e += 1);
        }
        return e;
      }
    },
    eq(e) {
      if (void 0 === e) {
        return this;
      }
      let t;
      let a = this.length;
      return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [
        this[t]
      ] : [
        this[e]
      ]);
    },
    append() {
      for (var e, t = [], a = arguments.length; a--;) {
        t[a] = arguments[a];
      }
      for (let i = 0; i < t.length; i += 1) {
        e = t[i];
        for (let s = 0; s < this.length; s += 1) {
          if (typeof e === `string`) {
            let r = f.createElement(`div`);
            for (r.innerHTML = e; r.firstChild;) {
              this[s].appendChild(r.firstChild);
            }
          } else if (e instanceof l) {
            for (let n = 0; n < e.length; n += 1) {
              this[s].appendChild(e[n]);
            }
          } else {
            this[s].appendChild(e);
          }
        }
      }
      return this;
    },
    prepend(e) {
      let t;
      let a;
      for (t = 0; t < this.length; t += 1) {
        if (typeof e === `string`) {
          let i = f.createElement(`div`);
          for (i.innerHTML = e, a = i.childNodes.length - 1; a >= 0; a -= 1) {
            this[t].insertBefore(i.childNodes[a], this[t].childNodes[0]);
          }
        } else if (e instanceof l) {
          for (a = 0; a < e.length; a += 1) {
            this[t].insertBefore(e[a], this[t].childNodes[0]);
          }
        } else {
          this[t].insertBefore(e, this[t].childNodes[0]);
        }
      }
      return this;
    },
    next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([]);
    },
    nextAll(e) {
      let t = [];
      let a = this[0];
      if (!a) {
        return new l([]);
      }
      for (; a.nextElementSibling;) {
        let i = a.nextElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i),
          a = i;
      }
      return new l(t);
    },
    prev(e) {
      if (this.length > 0) {
        let t = this[0];
        return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]);
      }
      return new l([]);
    },
    prevAll(e) {
      let t = [];
      let a = this[0];
      if (!a) {
        return new l([]);
      }
      for (; a.previousElementSibling;) {
        let i = a.previousElementSibling;
        e ? L(i).is(e) && t.push(i) : t.push(i),
          a = i;
      }
      return new l(t);
    },
    parent(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        this[a].parentNode !== null && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
      }
      return L(r(t));
    },
    parents(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (let i = this[a].parentNode; i;) {
          e ? L(i).is(e) && t.push(i) : t.push(i),
            i = i.parentNode;
        }
      }
      return L(r(t));
    },
    closest(e) {
      let t = this;
      return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (let i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) {
          t.push(i[s]);
        }
      }
      return new l(t);
    },
    children(e) {
      for (var t = [], a = 0; a < this.length; a += 1) {
        for (let i = this[a].childNodes, s = 0; s < i.length; s += 1) {
          e ? i[s].nodeType === 1 && L(i[s]).is(e) && t.push(i[s]) : i[s].nodeType === 1 && t.push(i[s]);
        }
      }
      return new l(r(t));
    },
    remove() {
      for (let e = 0; e < this.length; e += 1) {
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      }
      return this;
    },
    add() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      let a;
      let i;
      for (a = 0; a < e.length; a += 1) {
        let s = L(e[a]);
        for (i = 0; i < s.length; i += 1) {
          this[this.length] = s[i],
            this.length += 1;
        }
      }
      return this;
    },
    styles() {
      return this[0] ? J.getComputedStyle(this[0], null) : {};
    }
  };
  Object.keys(t).forEach(function (e) {
    L.fn[e] = t[e];
  });
  let e;
  let a;
  let i;
  let s;
  var ee = {
    deleteProps(e) {
      let t = e;
      Object.keys(t).forEach(function (e) {
        try {
          t[e] = null;
        } catch (e) {}
        try {
          delete t[e];
        } catch (e) {}
      });
    },
    nextTick(e, t) {
      return void 0 === t && (t = 0),
        setTimeout(e, t);
    },
    now() {
      return Date.now();
    },
    getTranslate(e, t) {
      let a;
      let i;
      let s;
      void 0 === t && (t = `x`);
      let r = J.getComputedStyle(e, null);
      return J.WebKitCSSMatrix ? ((i = r.transform || r.webkitTransform).split(`,`).length > 6 && (i = i.split(`, `).map(function (e) {
          return e.replace(`,`, `.`);
        }).join(`, `)), s = new J.WebKitCSSMatrix(i === `none` ? `` : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue(`transform`).replace(`translate(`, `matrix(1, 0, 0, 1,`)).toString().split(`,`),
        t === `x` && (i = J.WebKitCSSMatrix ? s.m41 : a.length === 16 ? parseFloat(a[12]) : parseFloat(a[4])),
        t === `y` && (i = J.WebKitCSSMatrix ? s.m42 : a.length === 16 ? parseFloat(a[13]) : parseFloat(a[5])),
        i || 0;
    },
    parseUrlQuery(e) {
      let t;
      let a;
      let i;
      let s;
      let r = {};
      let n = e || J.location.href;
      if (typeof n === `string` && n.length) {
        for (s = (a = (n = n.indexOf(`?`) > -1 ? n.replace(/\S*\?/, ``) : ``).split(`&`).filter(function (e) {
            return e !== ``;
          })).length, t = 0; t < s; t += 1) {
          i = a[t].replace(/#\S+/g, ``).split(`=`),
            r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || ``;
        }
      }
      return r;
    },
    isObject(e) {
      return typeof e === `object` && e !== null && e.constructor && e.constructor === Object;
    },
    extend() {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
        let s = e[i];
        if (s != null) {
          for (let r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
            let l = r[n];
            let d = Object.getOwnPropertyDescriptor(s, l);
            void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l]);
          }
        }
      }
      return a;
    }
  };
  let te = (i = f.createElement(`div`), {
    touch: J.Modernizr && !0 === J.Modernizr.touch || !!(J.navigator.maxTouchPoints > 0 || `ontouchstart` in J || J.DocumentTouch && f instanceof J.DocumentTouch),
    pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || `maxTouchPoints` in J.navigator && J.navigator.maxTouchPoints > 0),
    prefixedPointerEvents: !!J.navigator.msPointerEnabled,
    transition: (a = i.style, `transition` in a || `webkitTransition` in a || `MozTransition` in a),
    transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, `webkitPerspective` in e || `MozPerspective` in e || `OPerspective` in e || `MsPerspective` in e || `perspective` in e),
    flexbox: function () {
      for (let e = i.style, t = `alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient`.split(` `), a = 0; a < t.length; a += 1) {
        if (t[a] in e) {
          return !0;
        }
      }
      return !1;
    }(),
    observer: `MutationObserver` in J || `WebkitMutationObserver` in J,
    passiveListener: function () {
      let e = !1;
      try {
        let t = Object.defineProperty({}, `passive`, {
          get() {
            e = !0;
          }
        });
        J.addEventListener(`testPassiveListener`, null, t);
      } catch (e) {}
      return e;
    }(),
    gestures: `ongesturestart` in J
  });
  let I = {
    isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
    isEdge: !!J.navigator.userAgent.match(/Edge/g),
    isSafari: (s = J.navigator.userAgent.toLowerCase(), s.indexOf(`safari`) >= 0 && s.indexOf(`chrome`) < 0 && s.indexOf(`android`) < 0),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
  };
  let n = function (e) {
    void 0 === e && (e = {});
    let t = this;
    t.params = e,
      t.eventsListeners = {},
      t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
        t.on(e, t.params.on[e]);
      });
  };
  let o = {
    components: {
      configurable: !0
    }
  };
  n.prototype.on = function (e, t, a) {
      let i = this;
      if (typeof t !== `function`) {
        return i;
      }
      let s = a ? `unshift` : `push`;
      return e.split(` `).forEach(function (e) {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][s](t);
        }),
        i;
    },
    n.prototype.once = function (a, i, e) {
      let s = this;
      if (typeof i !== `function`) {
        return s;
      }

      function r() {
        for (var e = [], t = arguments.length; t--;) {
          e[t] = arguments[t];
        }
        i.apply(s, e),
          s.off(a, r),
          r.f7proxy && delete r.f7proxy;
      }
      return r.f7proxy = i,
        s.on(a, r, e);
    },
    n.prototype.off = function (e, i) {
      let s = this;
      return s.eventsListeners && e.split(` `).forEach(function (a) {
          void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function (e, t) {
            (e === i || e.f7proxy && e.f7proxy === i) && s.eventsListeners[a].splice(t, 1);
          });
        }),
        s;
    },
    n.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--;) {
        e[t] = arguments[t];
      }
      let a;
      let i;
      let s;
      let r = this;
      return r.eventsListeners && (typeof e[0] === `string` || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(` `)).forEach(function (e) {
          if (r.eventsListeners && r.eventsListeners[e]) {
            let t = [];
            r.eventsListeners[e].forEach(function (e) {
                t.push(e);
              }),
              t.forEach(function (e) {
                e.apply(s, i);
              });
          }
        })),
        r;
    },
    n.prototype.useModulesParams = function (a) {
      let i = this;
      i.modules && Object.keys(i.modules).forEach(function (e) {
        let t = i.modules[e];
        t.params && ee.extend(a, t.params);
      });
    },
    n.prototype.useModules = function (i) {
      void 0 === i && (i = {});
      let s = this;
      s.modules && Object.keys(s.modules).forEach(function (e) {
        let a = s.modules[e];
        let t = i[e] || {};
        a.instance && Object.keys(a.instance).forEach(function (e) {
            let t = a.instance[e];
            s[e] = typeof t === `function` ? t.bind(s) : t;
          }),
          a.on && s.on && Object.keys(a.on).forEach(function (e) {
            s.on(e, a.on[e]);
          }),
          a.create && a.create.bind(s)(t);
      });
    },
    o.components.set = function (e) {
      this.use && this.use(e);
    },
    n.installModule = function (t) {
      for (var e = [], a = arguments.length - 1; a-- > 0;) {
        e[a] = arguments[a + 1];
      }
      let i = this;
      i.prototype.modules || (i.prototype.modules = {});
      let s = t.name || Object.keys(i.prototype.modules).length + `_` + ee.now();
      return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function (e) {
          i.prototype[e] = t.proto[e];
        }),
        t.static && Object.keys(t.static).forEach(function (e) {
          i[e] = t.static[e];
        }),
        t.install && t.install.apply(i, e),
        i;
    },
    n.use = function (e) {
      for (var t = [], a = arguments.length - 1; a-- > 0;) {
        t[a] = arguments[a + 1];
      }
      let i = this;
      return Array.isArray(e) ? (e.forEach(function (e) {
        return i.installModule(e);
      }), i) : i.installModule.apply(i, [
        e
      ].concat(t));
    },
    Object.defineProperties(n, o);
  let d = {
    updateSize() {
      let e;
      let t;
      let a = this;
      let i = a.$el;
      e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth,
        t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight,
        e === 0 && a.isHorizontal() || t === 0 && a.isVertical() || (e = e - parseInt(i.css(`padding-left`), 10) - parseInt(i.css(`padding-right`), 10), t = t - parseInt(i.css(`padding-top`), 10) - parseInt(i.css(`padding-bottom`), 10), ee.extend(a, {
          width: e,
          height: t,
          size: a.isHorizontal() ? e : t
        }));
    },
    updateSlides() {
      let e = this;
      let t = e.params;
      let a = e.$wrapperEl;
      let i = e.size;
      let s = e.rtlTranslate;
      let r = e.wrongRTL;
      let n = e.virtual && t.virtual.enabled;
      let o = n ? e.virtual.slides.length : e.slides.length;
      let l = a.children(`.` + e.params.slideClass);
      let d = n ? e.virtual.slides.length : l.length;
      let p = [];
      let c = [];
      let u = [];
      let h = t.slidesOffsetBefore;
      typeof h === `function` && (h = t.slidesOffsetBefore.call(e));
      let v = t.slidesOffsetAfter;
      typeof v === `function` && (v = t.slidesOffsetAfter.call(e));
      let f = e.snapGrid.length;
      let m = e.snapGrid.length;
      let g = t.spaceBetween;
      let b = -h;
      let w = 0;
      let y = 0;
      if (void 0 !== i) {
        let x;
        let T;
        typeof g === `string` && g.indexOf(`%`) >= 0 && (g = parseFloat(g.replace(`%`, ``)) / 100 * i),
          e.virtualSize = -g,
          s ? l.css({
            marginLeft: ``,
            marginTop: ``
          }) : l.css({
            marginRight: ``,
            marginBottom: ``
          }),
          t.slidesPerColumn > 1 && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, t.slidesPerView !== `auto` && t.slidesPerColumnFill === `row` && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
        for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), z = 0; z < d; z += 1) {
          T = 0;
          let P = l.eq(z);
          if (t.slidesPerColumn > 1) {
            let k = void 0;
            let $ = void 0;
            let L = void 0;
            t.slidesPerColumnFill === `column` ? (L = z - ($ = Math.floor(z / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), k = $ + L * x / S, P.css({
                '-webkit-box-ordinal-group': k,
                '-moz-box-ordinal-group': k,
                '-ms-flex-order': k,
                '-webkit-order': k,
                "order": k
              })) : $ = z - (L = Math.floor(z / C)) * C,
              P.css(`margin-` + (e.isHorizontal() ? `top` : `left`), L !== 0 && t.spaceBetween && t.spaceBetween + `px`).attr(`data-swiper-column`, $).attr(`data-swiper-row`, L);
          }
          if (P.css(`display`) !== `none`) {
            if (t.slidesPerView === `auto`) {
              let I = J.getComputedStyle(P[0], null);
              let D = P[0].style.transform;
              let O = P[0].style.webkitTransform;
              if (D && (P[0].style.transform = `none`), O && (P[0].style.webkitTransform = `none`), t.roundLengths) {
                T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
              } else if (e.isHorizontal()) {
                let A = parseFloat(I.getPropertyValue(`width`));
                let H = parseFloat(I.getPropertyValue(`padding-left`));
                let N = parseFloat(I.getPropertyValue(`padding-right`));
                let G = parseFloat(I.getPropertyValue(`margin-left`));
                let B = parseFloat(I.getPropertyValue(`margin-right`));
                let X = I.getPropertyValue(`box-sizing`);
                T = X && X === `border-box` ? A + G + B : A + H + N + G + B;
              } else {
                let Y = parseFloat(I.getPropertyValue(`height`));
                let V = parseFloat(I.getPropertyValue(`padding-top`));
                let F = parseFloat(I.getPropertyValue(`padding-bottom`));
                let R = parseFloat(I.getPropertyValue(`margin-top`));
                let q = parseFloat(I.getPropertyValue(`margin-bottom`));
                let W = I.getPropertyValue(`box-sizing`);
                T = W && W === `border-box` ? Y + R + q : Y + V + F + R + q;
              }
              D && (P[0].style.transform = D),
                O && (P[0].style.webkitTransform = O),
                t.roundLengths && (T = Math.floor(T));
            } else {
              T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView,
                t.roundLengths && (T = Math.floor(T)),
                l[z] && (e.isHorizontal() ? l[z].style.width = T + `px` : l[z].style.height = T + `px`);
            }
            l[z] && (l[z].swiperSlideSize = T),
              u.push(T),
              t.centeredSlides ? (b = b + T / 2 + w / 2 + g, w === 0 && z !== 0 && (b = b - i / 2 - g), z === 0 && (b = b - i / 2 - g), Math.abs(b) < 0.001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g),
              e.virtualSize += T + g,
              w = T,
              y += 1;
          }
        }
        if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && (t.effect === `slide` || t.effect === `coverflow`) && a.css({
            width: e.virtualSize + t.spaceBetween + `px`
          }), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
            width: e.virtualSize + t.spaceBetween + `px`
          }) : a.css({
            height: e.virtualSize + t.spaceBetween + `px`
          })), t.slidesPerColumn > 1 && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
            width: e.virtualSize + t.spaceBetween + `px`
          }) : a.css({
            height: e.virtualSize + t.spaceBetween + `px`
          }), t.centeredSlides)) {
          E = [];
          for (let j = 0; j < p.length; j += 1) {
            let U = p[j];
            t.roundLengths && (U = Math.floor(U)),
              p[j] < e.virtualSize + p[0] && E.push(U);
          }
          p = E;
        }
        if (!t.centeredSlides) {
          E = [];
          for (let K = 0; K < p.length; K += 1) {
            let _ = p[K];
            t.roundLengths && (_ = Math.floor(_)),
              p[K] <= e.virtualSize - i && E.push(_);
          }
          p = E,
            Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) > 1 && p.push(e.virtualSize - i);
        }
        if (p.length === 0 && (p = [
            0
          ]), t.spaceBetween !== 0 && (e.isHorizontal() ? s ? l.css({
            marginLeft: g + `px`
          }) : l.css({
            marginRight: g + `px`
          }) : l.css({
            marginBottom: g + `px`
          })), t.centerInsufficientSlides) {
          let Z = 0;
          if (u.forEach(function (e) {
              Z += e + (t.spaceBetween ? t.spaceBetween : 0);
            }), (Z -= t.spaceBetween) < i) {
            let Q = (i - Z) / 2;
            p.forEach(function (e, t) {
                p[t] = e - Q;
              }),
              c.forEach(function (e, t) {
                c[t] = e + Q;
              });
          }
        }
        ee.extend(e, {
            slides: l,
            snapGrid: p,
            slidesGrid: c,
            slidesSizesGrid: u
          }),
          d !== o && e.emit(`slidesLengthChange`),
          p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit(`snapGridLengthChange`)),
          c.length !== m && e.emit(`slidesGridLengthChange`),
          (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
      }
    },
    updateAutoHeight(e) {
      let t;
      let a = this;
      let i = [];
      let s = 0;
      if (typeof e === `number` ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), a.params.slidesPerView !== `auto` && a.params.slidesPerView > 1) {
        for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
          let r = a.activeIndex + t;
          if (r > a.slides.length) {
            break;
          }
          i.push(a.slides.eq(r)[0]);
        }
      } else {
        i.push(a.slides.eq(a.activeIndex)[0]);
      }
      for (t = 0; t < i.length; t += 1) {
        if (void 0 !== i[t]) {
          let n = i[t].offsetHeight;
          s = s < n ? n : s;
        }
      }
      s && a.$wrapperEl.css(`height`, s + `px`);
    },
    updateSlidesOffset() {
      for (let e = this.slides, t = 0; t < e.length; t += 1) {
        e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
      }
    },
    updateSlidesProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      let t = this;
      let a = t.params;
      let i = t.slides;
      let s = t.rtlTranslate;
      if (i.length !== 0) {
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let r = -e;
        s && (r = e),
          i.removeClass(a.slideVisibleClass),
          t.visibleSlidesIndexes = [],
          t.visibleSlides = [];
        for (let n = 0; n < i.length; n += 1) {
          let o = i[n];
          let l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
          if (a.watchSlidesVisibility) {
            let d = -(r - o.swiperSlideOffset);
            let p = d + t.slidesSizesGrid[n];
            (d >= 0 && d < t.size || p > 0 && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass));
          }
          o.progress = s ? -l : l;
        }
        t.visibleSlides = L(t.visibleSlides);
      }
    },
    updateProgress(e) {
      void 0 === e && (e = this && this.translate || 0);
      let t = this;
      let a = t.params;
      let i = t.maxTranslate() - t.minTranslate();
      let s = t.progress;
      let r = t.isBeginning;
      let n = t.isEnd;
      let o = r;
      let l = n;
      i === 0 ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = s >= 1),
        ee.extend(t, {
          progress: s,
          isBeginning: r,
          isEnd: n
        }),
        (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e),
        r && !o && t.emit(`reachBeginning toEdge`),
        n && !l && t.emit(`reachEnd toEdge`),
        (o && !r || l && !n) && t.emit(`fromEdge`),
        t.emit(`progress`, s);
    },
    updateSlidesClasses() {
      let e;
      let t = this;
      let a = t.slides;
      let i = t.params;
      let s = t.$wrapperEl;
      let r = t.activeIndex;
      let n = t.realIndex;
      let o = t.virtual && i.virtual.enabled;
      a.removeClass(i.slideActiveClass + ` ` + i.slideNextClass + ` ` + i.slidePrevClass + ` ` + i.slideDuplicateActiveClass + ` ` + i.slideDuplicateNextClass + ` ` + i.slideDuplicatePrevClass),
        (e = o ? t.$wrapperEl.find(`.` + i.slideClass + `[data-swiper-slide-index="` + r + `"]`) : a.eq(r)).addClass(i.slideActiveClass),
        i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children(`.` + i.slideClass + `:not(.` + i.slideDuplicateClass + `)[data-swiper-slide-index="` + n + `"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.` + i.slideClass + `.` + i.slideDuplicateClass + `[data-swiper-slide-index="` + n + `"]`).addClass(i.slideDuplicateActiveClass));
      let l = e.nextAll(`.` + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && l.length === 0 && (l = a.eq(0)).addClass(i.slideNextClass);
      let d = e.prevAll(`.` + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && d.length === 0 && (d = a.eq(-1)).addClass(i.slidePrevClass),
        i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children(`.` + i.slideClass + `:not(.` + i.slideDuplicateClass + `)[data-swiper-slide-index="` + l.attr(`data-swiper-slide-index`) + `"]`).addClass(i.slideDuplicateNextClass) : s.children(`.` + i.slideClass + `.` + i.slideDuplicateClass + `[data-swiper-slide-index="` + l.attr(`data-swiper-slide-index`) + `"]`).addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children(`.` + i.slideClass + `:not(.` + i.slideDuplicateClass + `)[data-swiper-slide-index="` + d.attr(`data-swiper-slide-index`) + `"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.` + i.slideClass + `.` + i.slideDuplicateClass + `[data-swiper-slide-index="` + d.attr(`data-swiper-slide-index`) + `"]`).addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex(e) {
      let t;
      let a = this;
      let i = a.rtlTranslate ? a.translate : -a.translate;
      let s = a.slidesGrid;
      let r = a.snapGrid;
      let n = a.params;
      let o = a.activeIndex;
      let l = a.realIndex;
      let d = a.snapIndex;
      let p = e;
      if (void 0 === p) {
        for (let c = 0; c < s.length; c += 1) {
          void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
        }
        n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0);
      }
      if ((t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
        let u = parseInt(a.slides.eq(p).attr(`data-swiper-slide-index`) || p, 10);
        ee.extend(a, {
            snapIndex: t,
            realIndex: u,
            previousIndex: o,
            activeIndex: p
          }),
          a.emit(`activeIndexChange`),
          a.emit(`snapIndexChange`),
          l !== u && a.emit(`realIndexChange`),
          a.emit(`slideChange`);
      } else {
        t !== d && (a.snapIndex = t, a.emit(`snapIndexChange`));
      }
    },
    updateClickedSlide(e) {
      let t = this;
      let a = t.params;
      let i = L(e.target).closest(`.` + a.slideClass)[0];
      let s = !1;
      if (i) {
        for (let r = 0; r < t.slides.length; r += 1) {
          t.slides[r] === i && (s = !0);
        }
      }
      if (!i || !s) {
        return t.clickedSlide = void 0,
          void(t.clickedIndex = void 0);
      }
      t.clickedSlide = i,
        t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr(`data-swiper-slide-index`), 10) : t.clickedIndex = L(i).index(),
        a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  let p = {
    getTranslate(e) {
      void 0 === e && (e = this.isHorizontal() ? `x` : `y`);
      let t = this.params;
      let a = this.rtlTranslate;
      let i = this.translate;
      let s = this.$wrapperEl;
      if (t.virtualTranslate) {
        return a ? -i : i;
      }
      let r = ee.getTranslate(s[0], e);
      return a && (r = -r),
        r || 0;
    },
    setTranslate(e, t) {
      let a = this;
      let i = a.rtlTranslate;
      let s = a.params;
      let r = a.$wrapperEl;
      let n = a.progress;
      let o = 0;
      let l = 0;
      a.isHorizontal() ? o = i ? -e : e : l = e,
        s.roundLengths && (o = Math.floor(o), l = Math.floor(l)),
        s.virtualTranslate || (te.transforms3d ? r.transform(`translate3d(` + o + `px, ` + l + `px, 0px)`) : r.transform(`translate(` + o + `px, ` + l + `px)`)),
        a.previousTranslate = a.translate,
        a.translate = a.isHorizontal() ? o : l;
      let d = a.maxTranslate() - a.minTranslate();
      (d === 0 ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e),
        a.emit(`setTranslate`, a.translate, t);
    },
    minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
  };
  let c = {
    setTransition(e, t) {
      this.$wrapperEl.transition(e),
        this.emit(`setTransition`, e, t);
    },
    transitionStart(e, t) {
      void 0 === e && (e = !0);
      let a = this;
      let i = a.activeIndex;
      let s = a.params;
      let r = a.previousIndex;
      s.autoHeight && a.updateAutoHeight();
      let n = t;
      if (n || (n = r < i ? `next` : i < r ? `prev` : `reset`), a.emit(`transitionStart`), e && i !== r) {
        if (n === `reset`) {
          return void a.emit(`slideResetTransitionStart`);
        }
        a.emit(`slideChangeTransitionStart`),
          n === `next` ? a.emit(`slideNextTransitionStart`) : a.emit(`slidePrevTransitionStart`);
      }
    },
    transitionEnd(e, t) {
      void 0 === e && (e = !0);
      let a = this;
      let i = a.activeIndex;
      let s = a.previousIndex;
      a.animating = !1,
        a.setTransition(0);
      let r = t;
      if (r || (r = s < i ? `next` : i < s ? `prev` : `reset`), a.emit(`transitionEnd`), e && i !== s) {
        if (r === `reset`) {
          return void a.emit(`slideResetTransitionEnd`);
        }
        a.emit(`slideChangeTransitionEnd`),
          r === `next` ? a.emit(`slideNextTransitionEnd`) : a.emit(`slidePrevTransitionEnd`);
      }
    }
  };
  let u = {
    slideTo(e, t, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === a && (a = !0);
      let s = this;
      let r = e;
      r < 0 && (r = 0);
      let n = s.params;
      let o = s.snapGrid;
      let l = s.slidesGrid;
      let d = s.previousIndex;
      let p = s.activeIndex;
      let c = s.rtlTranslate;
      if (s.animating && n.preventInteractionOnTransition) {
        return !1;
      }
      let u = Math.floor(r / n.slidesPerGroup);
      u >= o.length && (u = o.length - 1),
        (p || n.initialSlide || 0) === (d || 0) && a && s.emit(`beforeSlideChangeStart`);
      let h;
      let v = -o[u];
      if (s.updateProgress(v), n.normalizeSlideIndex) {
        for (let f = 0; f < l.length; f += 1) {
          -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
        }
      }
      if (s.initialized && r !== p) {
        if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) {
          return !1;
        }
        if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) {
          return !1;
        }
      }
      return h = p < r ? `next` : r < p ? `prev` : `reset`,
        c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), n.effect !== `slide` && s.setTranslate(v), h !== `reset` && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (t !== 0 && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit(`beforeTransitionStart`, t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
          s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener(`transitionend`, s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener(`webkitTransitionEnd`, s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h));
        }), s.$wrapperEl[0].addEventListener(`transitionend`, s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener(`webkitTransitionEnd`, s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit(`beforeTransitionStart`, t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0);
    },
    slideToLoop(e, t, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === a && (a = !0);
      let s = e;
      return this.params.loop && (s += this.loopedSlides),
        this.slideTo(s, t, a, i);
    },
    slideNext(e, t, a) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0);
      let i = this;
      let s = i.params;
      let r = i.animating;
      return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
    },
    slidePrev(e, t, a) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0);
      let i = this;
      let s = i.params;
      let r = i.animating;
      let n = i.snapGrid;
      let o = i.slidesGrid;
      let l = i.rtlTranslate;
      if (s.loop) {
        if (r) {
          return !1;
        }
        i.loopFix(),
          i._clientLeft = i.$wrapperEl[0].clientLeft;
      }

      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      let p;
      let c = d(l ? i.translate : -i.translate);
      let u = n.map(function (e) {
        return d(e);
      });
      let h = (o.map(function (e) {
        return d(e);
      }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
      return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1),
        i.slideTo(p, e, t, a);
    },
    slideReset(e, t, a) {
      return void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, a);
    },
    slideToClosest(e, t, a) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0);
      let i = this;
      let s = i.activeIndex;
      let r = Math.floor(s / i.params.slidesPerGroup);
      if (r < i.snapGrid.length - 1) {
        let n = i.rtlTranslate ? i.translate : -i.translate;
        let o = i.snapGrid[r];
        (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup);
      }
      return i.slideTo(s, e, t, a);
    },
    slideToClickedSlide() {
      let e;
      let t = this;
      let a = t.params;
      let i = t.$wrapperEl;
      let s = a.slidesPerView === `auto` ? t.slidesPerViewDynamic() : a.slidesPerView;
      let r = t.clickedIndex;
      if (a.loop) {
        if (t.animating) {
          return;
        }
        e = parseInt(L(t.clickedSlide).attr(`data-swiper-slide-index`), 10),
          a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children(`.` + a.slideClass + `[data-swiper-slide-index="` + e + `"]:not(.` + a.slideDuplicateClass + `)`).eq(0).index(), ee.nextTick(function () {
            t.slideTo(r);
          })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children(`.` + a.slideClass + `[data-swiper-slide-index="` + e + `"]:not(.` + a.slideDuplicateClass + `)`).eq(0).index(), ee.nextTick(function () {
            t.slideTo(r);
          })) : t.slideTo(r);
      } else {
        t.slideTo(r);
      }
    }
  };
  let h = {
    loopCreate() {
      let i = this;
      let e = i.params;
      let t = i.$wrapperEl;
      t.children(`.` + e.slideClass + `.` + e.slideDuplicateClass).remove();
      let s = t.children(`.` + e.slideClass);
      if (e.loopFillGroupWithBlank) {
        let a = e.slidesPerGroup - s.length % e.slidesPerGroup;
        if (a !== e.slidesPerGroup) {
          for (let r = 0; r < a; r += 1) {
            let n = L(f.createElement(`div`)).addClass(e.slideClass + ` ` + e.slideBlankClass);
            t.append(n);
          }
          s = t.children(`.` + e.slideClass);
        }
      }
      e.slidesPerView !== `auto` || e.loopedSlides || (e.loopedSlides = s.length),
        i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10),
        i.loopedSlides += e.loopAdditionalSlides,
        i.loopedSlides > s.length && (i.loopedSlides = s.length);
      let o = [];
      let l = [];
      s.each(function (e, t) {
        let a = L(t);
        e < i.loopedSlides && l.push(t),
          e < s.length && e >= s.length - i.loopedSlides && o.push(t),
          a.attr(`data-swiper-slide-index`, e);
      });
      for (let d = 0; d < l.length; d += 1) {
        t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
      }
      for (let p = o.length - 1; p >= 0; p -= 1) {
        t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass));
      }
    },
    loopFix() {
      let e;
      let t = this;
      let a = t.params;
      let i = t.activeIndex;
      let s = t.slides;
      let r = t.loopedSlides;
      let n = t.allowSlidePrev;
      let o = t.allowSlideNext;
      let l = t.snapGrid;
      let d = t.rtlTranslate;
      t.allowSlidePrev = !0,
        t.allowSlideNext = !0;
      let p = -l[i] - t.getTranslate();
      i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && p !== 0 && t.setTranslate((d ? -t.translate : t.translate) - p)) : (a.slidesPerView === `auto` && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && p !== 0 && t.setTranslate((d ? -t.translate : t.translate) - p));
      t.allowSlidePrev = n,
        t.allowSlideNext = o;
    },
    loopDestroy() {
      let e = this.$wrapperEl;
      let t = this.params;
      let a = this.slides;
      e.children(`.` + t.slideClass + `.` + t.slideDuplicateClass + `,.` + t.slideClass + `.` + t.slideBlankClass).remove(),
        a.removeAttr(`data-swiper-slide-index`);
    }
  };
  let v = {
    setGrabCursor(e) {
      if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
        let t = this.el;
        t.style.cursor = `move`,
          t.style.cursor = e ? `-webkit-grabbing` : `-webkit-grab`,
          t.style.cursor = e ? `-moz-grabbin` : `-moz-grab`,
          t.style.cursor = e ? `grabbing` : `grab`;
      }
    },
    unsetGrabCursor() {
      te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = ``);
    }
  };
  let m = {
    appendSlide(e) {
      let t = this;
      let a = t.$wrapperEl;
      let i = t.params;
      if (i.loop && t.loopDestroy(), typeof e === `object` && `length` in e) {
        for (let s = 0; s < e.length; s += 1) {
          e[s] && a.append(e[s]);
        }
      } else {
        a.append(e);
      }
      i.loop && t.loopCreate(),
        i.observer && te.observer || t.update();
    },
    prependSlide(e) {
      let t = this;
      let a = t.params;
      let i = t.$wrapperEl;
      let s = t.activeIndex;
      a.loop && t.loopDestroy();
      let r = s + 1;
      if (typeof e === `object` && `length` in e) {
        for (let n = 0; n < e.length; n += 1) {
          e[n] && i.prepend(e[n]);
        }
        r = s + e.length;
      } else {
        i.prepend(e);
      }
      a.loop && t.loopCreate(),
        a.observer && te.observer || t.update(),
        t.slideTo(r, 0, !1);
    },
    addSlide(e, t) {
      let a = this;
      let i = a.$wrapperEl;
      let s = a.params;
      let r = a.activeIndex;
      s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children(`.` + s.slideClass));
      let n = a.slides.length;
      if (e <= 0) {
        a.prependSlide(t);
      } else if (n <= e) {
        a.appendSlide(t);
      } else {
        for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
          let p = a.slides.eq(d);
          p.remove(),
            l.unshift(p);
        }
        if (typeof t === `object` && `length` in t) {
          for (let c = 0; c < t.length; c += 1) {
            t[c] && i.append(t[c]);
          }
          o = e < r ? r + t.length : r;
        } else {
          i.append(t);
        }
        for (let u = 0; u < l.length; u += 1) {
          i.append(l[u]);
        }
        s.loop && a.loopCreate(),
          s.observer && te.observer || a.update(),
          s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1);
      }
    },
    removeSlide(e) {
      let t = this;
      let a = t.params;
      let i = t.$wrapperEl;
      let s = t.activeIndex;
      a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children(`.` + a.slideClass));
      let r;
      let n = s;
      if (typeof e === `object` && `length` in e) {
        for (let o = 0; o < e.length; o += 1) {
          r = e[o],
            t.slides[r] && t.slides.eq(r).remove(),
            r < n && (n -= 1);
        }
        n = Math.max(n, 0);
      } else {
        r = e,
          t.slides[r] && t.slides.eq(r).remove(),
          r < n && (n -= 1),
          n = Math.max(n, 0);
      }
      a.loop && t.loopCreate(),
        a.observer && te.observer || t.update(),
        a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
    },
    removeAllSlides() {
      for (var e = [], t = 0; t < this.slides.length; t += 1) {
        e.push(t);
      }
      this.removeSlide(e);
    }
  };
  let g = function () {
    let e = J.navigator.userAgent;
    let t = {
      ios: !1,
      android: !1,
      androidChrome: !1,
      desktop: !1,
      windows: !1,
      iphone: !1,
      ipod: !1,
      ipad: !1,
      cordova: J.cordova || J.phonegap,
      phonegap: J.cordova || J.phonegap
    };
    let a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/);
    let i = e.match(/(Android);?[\s\/]+([\d.]+)?/);
    let s = e.match(/(iPad).*OS\s([\d_]+)/);
    let r = e.match(/(iPod)(.*OS\s([\d_]+))?/);
    let n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    if (a && (t.os = `windows`, t.osVersion = a[2], t.windows = !0), i && !a && (t.os = `android`, t.osVersion = i[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf(`chrome`) >= 0), (s || n || r) && (t.os = `ios`, t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, `.`), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, `.`), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, `.`) : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf(`Version/`) >= 0 && t.osVersion.split(`.`)[0] === `10` && (t.osVersion = e.toLowerCase().split(`version/`)[1].split(` `)[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && t.os === `ios`) {
      let o = t.osVersion.split(`.`);
      let l = f.querySelector(`meta[name="viewport"]`);
      t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 * o[1] >= 1 : 1 * o[0] > 7) && l && l.getAttribute(`content`).indexOf(`minimal-ui`) >= 0;
    }
    return t.pixelRatio = J.devicePixelRatio || 1,
      t;
  }();

  function b() {
    let e = this;
    let t = e.params;
    let a = e.el;
    if (!a || a.offsetWidth !== 0) {
      t.breakpoints && e.setBreakpoint();
      let i = e.allowSlideNext;
      let s = e.allowSlidePrev;
      let r = e.snapGrid;
      if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
        let n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
        e.setTranslate(n),
          e.updateActiveIndex(),
          e.updateSlidesClasses(),
          t.autoHeight && e.updateAutoHeight();
      } else {
        e.updateSlidesClasses(),
          (t.slidesPerView === `auto` || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
      }
      e.allowSlidePrev = s,
        e.allowSlideNext = i,
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }
  let w = {
    init: !0,
    direction: `horizontal`,
    touchEventsTarget: `container`,
    initialSlide: 0,
    speed: 300,
    preventInteractionOnTransition: !1,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: 0.02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: `slide`,
    breakpoints: void 0,
    breakpointsInverse: !1,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: `column`,
    slidesPerGroup: 1,
    centeredSlides: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !0,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: `swiper-no-swiping`,
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: `swiper-container-`,
    slideClass: `swiper-slide`,
    slideBlankClass: `swiper-slide-invisible-blank`,
    slideActiveClass: `swiper-slide-active`,
    slideDuplicateActiveClass: `swiper-slide-duplicate-active`,
    slideVisibleClass: `swiper-slide-visible`,
    slideDuplicateClass: `swiper-slide-duplicate`,
    slideNextClass: `swiper-slide-next`,
    slideDuplicateNextClass: `swiper-slide-duplicate-next`,
    slidePrevClass: `swiper-slide-prev`,
    slideDuplicatePrevClass: `swiper-slide-duplicate-prev`,
    wrapperClass: `swiper-wrapper`,
    runCallbacksOnInit: !0
  };
  let y = {
    update: d,
    translate: p,
    transition: c,
    slide: u,
    loop: h,
    grabCursor: v,
    manipulation: m,
    events: {
      attachEvents() {
        let e = this;
        let t = e.params;
        let a = e.touchEvents;
        let i = e.el;
        let s = e.wrapperEl;
        e.onTouchStart = function (e) {
            let t = this;
            let a = t.touchEventsData;
            let i = t.params;
            let s = t.touches;
            if (!t.animating || !i.preventInteractionOnTransition) {
              let r = e;
              if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = r.type === `touchstart`, (a.isTouchEvent || !(`which` in r) || r.which !== 3) && !(!a.isTouchEvent && `button` in r && r.button > 0 || a.isTouched && a.isMoved)) {
                if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : `.` + i.noSwipingClass)[0]) {
                  t.allowClick = !0;
                } else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                  s.currentX = r.type === `touchstart` ? r.targetTouches[0].pageX : r.pageX,
                    s.currentY = r.type === `touchstart` ? r.targetTouches[0].pageY : r.pageY;
                  let n = s.currentX;
                  let o = s.currentY;
                  let l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection;
                  let d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                  if (!l || !(n <= d || n >= J.screen.width - d)) {
                    if (ee.extend(a, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                      }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, i.threshold > 0 && (a.allowThresholdMove = !1), r.type !== `touchstart`) {
                      let p = !0;
                      L(r.target).is(a.formElements) && (p = !1),
                        f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                      let c = p && t.allowTouchMove && i.touchStartPreventDefault;
                      (i.touchStartForcePreventDefault || c) && r.preventDefault();
                    }
                    t.emit(`touchStart`, r);
                  }
                }
              }
            }
          }.bind(e),
          e.onTouchMove = function (e) {
            let t = this;
            let a = t.touchEventsData;
            let i = t.params;
            let s = t.touches;
            let r = t.rtlTranslate;
            let n = e;
            if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
              if (!a.isTouchEvent || n.type !== `mousemove`) {
                let o = n.type === `touchmove` ? n.targetTouches[0].pageX : n.pageX;
                let l = n.type === `touchmove` ? n.targetTouches[0].pageY : n.pageY;
                if (n.preventedByNestedSwiper) {
                  return s.startX = o,
                    void(s.startY = l);
                }
                if (!t.allowTouchMove) {
                  return t.allowClick = !1,
                    void(a.isTouched && (ee.extend(s, {
                      startX: o,
                      startY: l,
                      currentX: o,
                      currentY: l
                    }), a.touchStartTime = ee.now()));
                }
                if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop) {
                  if (t.isVertical()) {
                    if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) {
                      return a.isTouched = !1,
                        void(a.isMoved = !1);
                    }
                  } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) {
                    return;
                  }
                }
                if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) {
                  return a.isMoved = !0,
                    void(t.allowClick = !1);
                }
                if (a.allowTouchCallbacks && t.emit(`touchMove`, n), !(n.targetTouches && n.targetTouches.length > 1)) {
                  s.currentX = o,
                    s.currentY = l;
                  let d;
                  let p = s.currentX - s.startX;
                  let c = s.currentY - s.startY;
                  if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold)) {
                    if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : p * p + c * c >= 25 && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit(`touchMoveOpposite`, n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) {
                      a.isTouched = !1;
                    } else if (a.startMoving) {
                      t.allowClick = !1,
                        n.preventDefault(),
                        i.touchMoveStopPropagation && !i.nested && n.stopPropagation(),
                        a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger(`webkitTransitionEnd transitionend`), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit(`sliderFirstMove`, n)),
                        t.emit(`sliderMove`, n),
                        a.isMoved = !0;
                      let u = t.isHorizontal() ? p : c;
                      s.diff = u,
                        u *= i.touchRatio,
                        r && (u = -u),
                        t.swipeDirection = u > 0 ? `prev` : `next`,
                        a.currentTranslate = u + a.startTranslate;
                      let h = !0;
                      let v = i.resistanceRatio;
                      if (i.touchReleaseOnEdges && (v = 0), u > 0 && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === `next` && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && t.swipeDirection === `prev` && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), i.threshold > 0) {
                        if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) {
                          return void(a.currentTranslate = a.startTranslate);
                        }
                        if (!a.allowThresholdMove) {
                          return a.allowThresholdMove = !0,
                            s.startX = s.currentX,
                            s.startY = s.currentY,
                            a.currentTranslate = a.startTranslate,
                            void(s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
                        }
                      }
                      i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (a.velocities.length === 0 && a.velocities.push({
                        position: s[t.isHorizontal() ? `startX` : `startY`],
                        time: a.touchStartTime
                      }), a.velocities.push({
                        position: s[t.isHorizontal() ? `currentX` : `currentY`],
                        time: ee.now()
                      })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate));
                    }
                  }
                }
              }
            } else {
              a.startMoving && a.isScrolling && t.emit(`touchMoveOpposite`, n);
            }
          }.bind(e),
          e.onTouchEnd = function (e) {
            let t = this;
            let a = t.touchEventsData;
            let i = t.params;
            let s = t.touches;
            let r = t.rtlTranslate;
            let n = t.$wrapperEl;
            let o = t.slidesGrid;
            let l = t.snapGrid;
            let d = e;
            if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit(`touchEnd`, d), a.allowTouchCallbacks = !1, !a.isTouched) {
              return a.isMoved && i.grabCursor && t.setGrabCursor(!1),
                a.isMoved = !1,
                void(a.startMoving = !1);
            }
            i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            let p;
            let c = ee.now();
            let u = c - a.touchStartTime;
            if (t.allowClick && (t.updateClickedSlide(d), t.emit(`tap`, d), u < 300 && c - a.lastClickTime > 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function () {
                t && !t.destroyed && t.emit(`click`, d);
              }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit(`doubleTap`, d))), a.lastClickTime = ee.now(), ee.nextTick(function () {
                t.destroyed || (t.allowClick = !0);
              }), !a.isTouched || !a.isMoved || !t.swipeDirection || s.diff === 0 || a.currentTranslate === a.startTranslate) {
              return a.isTouched = !1,
                a.isMoved = !1,
                void(a.startMoving = !1);
            }
            if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
              if (p < -t.minTranslate()) {
                return void t.slideTo(t.activeIndex);
              }
              if (p > -t.maxTranslate()) {
                return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
              }
              if (i.freeModeMomentum) {
                if (a.velocities.length > 1) {
                  let h = a.velocities.pop();
                  let v = a.velocities.pop();
                  let f = h.position - v.position;
                  let m = h.time - v.time;
                  t.velocity = f / m,
                    t.velocity /= 2,
                    Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0),
                    (m > 150 || ee.now() - h.time > 300) && (t.velocity = 0);
                } else {
                  t.velocity = 0;
                }
                t.velocity *= i.freeModeMomentumVelocityRatio,
                  a.velocities.length = 0;
                let g = 1000 * i.freeModeMomentumRatio;
                let b = t.velocity * g;
                let w = t.translate + b;
                r && (w = -w);
                let y;
                let x;
                let T = !1;
                let E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                if (w < t.maxTranslate()) {
                  i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(),
                    i.loop && i.centeredSlides && (x = !0);
                } else if (w > t.minTranslate()) {
                  i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(),
                    i.loop && i.centeredSlides && (x = !0);
                } else if (i.freeModeSticky) {
                  for (var S, C = 0; C < l.length; C += 1) {
                    if (l[C] > -w) {
                      S = C;
                      break;
                    }
                  }
                  w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || t.swipeDirection === `next` ? l[S] : l[S - 1]);
                }
                if (x && t.once(`transitionEnd`, function () {
                    t.loopFix();
                  }), t.velocity !== 0) {
                  g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                } else if (i.freeModeSticky) {
                  return void t.slideToClosest();
                }
                i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                    t && !t.destroyed && a.allowMomentumBounce && (t.emit(`momentumBounce`), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function () {
                      t && !t.destroyed && t.transitionEnd();
                    }));
                  })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  }))) : t.updateProgress(w),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses();
              } else if (i.freeModeSticky) {
                return void t.slideToClosest();
              }
              (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
            } else {
              for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) {
                void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (z = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, z = o[o.length - 1] - o[o.length - 2]);
              }
              let k = (p - o[M]) / z;
              if (u > i.longSwipesMs) {
                if (!i.longSwipes) {
                  return void t.slideTo(t.activeIndex);
                }
                t.swipeDirection === `next` && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)),
                  t.swipeDirection === `prev` && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M));
              } else {
                if (!i.shortSwipes) {
                  return void t.slideTo(t.activeIndex);
                }
                t.swipeDirection === `next` && t.slideTo(M + i.slidesPerGroup),
                  t.swipeDirection === `prev` && t.slideTo(M);
              }
            }
          }.bind(e),
          e.onClick = function (e) {
            this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
          }.bind(e);
        let r = t.touchEventsTarget === `container` ? i : s;
        let n = !!t.nested;
        if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
          if (te.touch) {
            let o = !(a.start !== `touchstart` || !te.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            r.addEventListener(a.start, e.onTouchStart, o),
              r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
                  passive: !1,
                  capture: n
                } :
                n),
              r.addEventListener(a.end, e.onTouchEnd, o);
          }(t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.addEventListener(`mousedown`, e.onTouchStart, !1), f.addEventListener(`mousemove`, e.onTouchMove, n), f.addEventListener(`mouseup`, e.onTouchEnd, !1));
        } else {
          r.addEventListener(a.start, e.onTouchStart, !1),
            f.addEventListener(a.move, e.onTouchMove, n),
            f.addEventListener(a.end, e.onTouchEnd, !1);
        }
        (t.preventClicks || t.preventClicksPropagation) && r.addEventListener(`click`, e.onClick, !0),
          e.on(g.ios || g.android ? `resize orientationchange observerUpdate` : `resize observerUpdate`, b, !0);
      },
      detachEvents() {
        let e = this;
        let t = e.params;
        let a = e.touchEvents;
        let i = e.el;
        let s = e.wrapperEl;
        let r = t.touchEventsTarget === `container` ? i : s;
        let n = !!t.nested;
        if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
          if (te.touch) {
            let o = !(a.start !== `onTouchStart` || !te.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            r.removeEventListener(a.start, e.onTouchStart, o),
              r.removeEventListener(a.move, e.onTouchMove, n),
              r.removeEventListener(a.end, e.onTouchEnd, o);
          }(t.simulateTouch && !g.ios && !g.android || t.simulateTouch && !te.touch && g.ios) && (r.removeEventListener(`mousedown`, e.onTouchStart, !1), f.removeEventListener(`mousemove`, e.onTouchMove, n), f.removeEventListener(`mouseup`, e.onTouchEnd, !1));
        } else {
          r.removeEventListener(a.start, e.onTouchStart, !1),
            f.removeEventListener(a.move, e.onTouchMove, n),
            f.removeEventListener(a.end, e.onTouchEnd, !1);
        }
        (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener(`click`, e.onClick, !0),
          e.off(g.ios || g.android ? `resize orientationchange observerUpdate` : `resize observerUpdate`, b);
      }
    },
    breakpoints: {
      setBreakpoint() {
        let e = this;
        let t = e.activeIndex;
        let a = e.initialized;
        let i = e.loopedSlides;
        void 0 === i && (i = 0);
        let s = e.params;
        let r = s.breakpoints;
        if (r && (!r || Object.keys(r).length !== 0)) {
          let n = e.getBreakpoint(r);
          if (n && e.currentBreakpoint !== n) {
            let o = n in r ? r[n] : void 0;
            o && [
              `slidesPerView`,
              `spaceBetween`,
              `slidesPerGroup`
            ].forEach(function (e) {
              let t = o[e];
              void 0 !== t && (o[e] = e !== `slidesPerView` || t !== `AUTO` && t !== `auto` ? e === `slidesPerView` ? parseFloat(t) : parseInt(t, 10) : `auto`);
            });
            let l = o || e.originalParams;
            let d = l.direction && l.direction !== s.direction;
            let p = s.loop && (l.slidesPerView !== s.slidesPerView || d);
            d && a && e.changeDirection(),
              ee.extend(e.params, l),
              ee.extend(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }),
              e.currentBreakpoint = n,
              p && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)),
              e.emit(`breakpoint`, l);
          }
        }
      },
      getBreakpoint(e) {
        if (e) {
          let t = !1;
          let a = [];
          Object.keys(e).forEach(function (e) {
              a.push(e);
            }),
            a.sort(function (e, t) {
              return parseInt(e, 10) - parseInt(t, 10);
            });
          for (let i = 0; i < a.length; i += 1) {
            let s = a[i];
            this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s);
          }
          return t || `max`;
        }
      }
    },
    checkOverflow: {
      checkOverflow() {
        let e = this;
        let t = e.isLocked;
        e.isLocked = e.snapGrid.length === 1,
          e.allowSlideNext = !e.isLocked,
          e.allowSlidePrev = !e.isLocked,
          t !== e.isLocked && e.emit(e.isLocked ? `lock` : `unlock`),
          t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update());
      }
    },
    classes: {
      addClasses() {
        let t = this.classNames;
        let a = this.params;
        let e = this.rtl;
        let i = this.$el;
        let s = [];
        s.push(`initialized`),
          s.push(a.direction),
          a.freeMode && s.push(`free-mode`),
          te.flexbox || s.push(`no-flexbox`),
          a.autoHeight && s.push(`autoheight`),
          e && s.push(`rtl`),
          a.slidesPerColumn > 1 && s.push(`multirow`),
          g.android && s.push(`android`),
          g.ios && s.push(`ios`),
          (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push(`wp8-` + a.direction),
          s.forEach(function (e) {
            t.push(a.containerModifierClass + e);
          }),
          i.addClass(t.join(` `));
      },
      removeClasses() {
        let e = this.$el;
        let t = this.classNames;
        e.removeClass(t.join(` `));
      }
    },
    images: {
      loadImage(e, t, a, i, s, r) {
        let n;

        function o() {
          r && r();
        }
        e.complete && s ? o() : t ? ((n = new J.Image()).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o();
      },
      preloadImages() {
        let e = this;

        function t() {
          e != null && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit(`imagesReady`)));
        }
        e.imagesToLoad = e.$el.find(`img`);
        for (let a = 0; a < e.imagesToLoad.length; a += 1) {
          let i = e.imagesToLoad[a];
          e.loadImage(i, i.currentSrc || i.getAttribute(`src`), i.srcset || i.getAttribute(`srcset`), i.sizes || i.getAttribute(`sizes`), !0, t);
        }
      }
    }
  };
  let x = {};
  let T = function (u) {
    function h() {
      for (var e, t, s, a = [], i = arguments.length; i--;) {
        a[i] = arguments[i];
      }
      a.length === 1 && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]),
        s || (s = {}),
        s = ee.extend({}, s),
        t && !s.el && (s.el = t),
        u.call(this, s),
        Object.keys(y).forEach(function (t) {
          Object.keys(y[t]).forEach(function (e) {
            h.prototype[e] || (h.prototype[e] = y[t][e]);
          });
        });
      let r = this;
      void 0 === r.modules && (r.modules = {}),
        Object.keys(r.modules).forEach(function (e) {
          let t = r.modules[e];
          if (t.params) {
            let a = Object.keys(t.params)[0];
            let i = t.params[a];
            if (typeof i !== `object` || i === null) {
              return;
            }
            if (!(a in s && `enabled` in i)) {
              return;
            }!0 === s[a] && (s[a] = {
                enabled: !0
              }),
              typeof s[a] !== `object` || `enabled` in s[a] || (s[a].enabled = !0),
              s[a] || (s[a] = {
                enabled: !1
              });
          }
        });
      let n = ee.extend({}, w);
      r.useModulesParams(n),
        r.params = ee.extend({}, n, x, s),
        r.originalParams = ee.extend({}, r.params),
        r.passedParams = ee.extend({}, s);
      let o = (r.$ = L)(r.params.el);
      if (t = o[0]) {
        if (o.length > 1) {
          let l = [];
          return o.each(function (e, t) {
              let a = ee.extend({}, s, {
                el: t
              });
              l.push(new h(a));
            }),
            l;
        }
        t.swiper = r,
          o.data(`swiper`, r);
        let d;
        let p;
        let c = o.children(`.` + r.params.wrapperClass);
        return ee.extend(r, {
            $el: o,
            el: t,
            $wrapperEl: c,
            wrapperEl: c[0],
            classNames: [],
            slides: L(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
              return r.params.direction === `horizontal`;
            },
            isVertical() {
              return r.params.direction === `vertical`;
            },
            rtl: t.dir.toLowerCase() === `rtl` || o.css(`direction`) === `rtl`,
            rtlTranslate: r.params.direction === `horizontal` && (t.dir.toLowerCase() === `rtl` || o.css(`direction`) === `rtl`),
            wrongRTL: c.css(`display`) === `-webkit-box`,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (d = [
              `touchstart`,
              `touchmove`,
              `touchend`
            ], p = [
              `mousedown`,
              `mousemove`,
              `mouseup`
            ], te.pointerEvents ? p = [
              `pointerdown`,
              `pointermove`,
              `pointerup`
            ] : te.prefixedPointerEvents && (p = [
              `MSPointerDown`,
              `MSPointerMove`,
              `MSPointerUp`
            ]), r.touchEventsTouch = {
              start: d[0],
              move: d[1],
              end: d[2]
            }, r.touchEventsDesktop = {
              start: p[0],
              move: p[1],
              end: p[2]
            }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              formElements: `input, select, option, textarea, button, video`,
              lastClickTime: ee.now(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }),
          r.useModules(),
          r.params.init && r.init(),
          r;
      }
    }
    u && (h.__proto__ = u);
    let e = {
      extendedDefaults: {
        configurable: !0
      },
      defaults: {
        configurable: !0
      },
      Class: {
        configurable: !0
      },
      $: {
        configurable: !0
      }
    };
    return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function () {
        let e = this;
        let t = e.params;
        let a = e.slides;
        let i = e.slidesGrid;
        let s = e.size;
        let r = e.activeIndex;
        let n = 1;
        if (t.centeredSlides) {
          for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) {
            a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
          }
          for (let p = r - 1; p >= 0; p -= 1) {
            a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0));
          }
        } else {
          for (let c = r + 1; c < a.length; c += 1) {
            i[c] - i[r] < s && (n += 1);
          }
        }
        return n;
      },
      h.prototype.update = function () {
        let a = this;
        if (a && !a.destroyed) {
          let e = a.snapGrid;
          let t = a.params;
          t.breakpoints && a.setBreakpoint(),
            a.updateSize(),
            a.updateSlides(),
            a.updateProgress(),
            a.updateSlidesClasses(),
            a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : ((a.params.slidesPerView === `auto` || a.params.slidesPerView > 1) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(),
            t.watchOverflow && e !== a.snapGrid && a.checkOverflow(),
            a.emit(`update`);
        }

        function i() {
          let e = a.rtlTranslate ? -1 * a.translate : a.translate;
          let t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
          a.setTranslate(t),
            a.updateActiveIndex(),
            a.updateSlidesClasses();
        }
      },
      h.prototype.changeDirection = function (a, e) {
        void 0 === e && (e = !0);
        let t = this;
        let i = t.params.direction;
        return a || (a = i === `horizontal` ? `vertical` : `horizontal`),
          a === i || a !== `horizontal` && a !== `vertical` || (i === `vertical` && (t.$el.removeClass(t.params.containerModifierClass + `vertical wp8-vertical`).addClass(`` + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + `wp8-` + a)), i === `horizontal` && (t.$el.removeClass(t.params.containerModifierClass + `horizontal wp8-horizontal`).addClass(`` + t.params.containerModifierClass + a), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && t.$el.addClass(t.params.containerModifierClass + `wp8-` + a)), t.params.direction = a, t.slides.each(function (e, t) {
            a === `vertical` ? t.style.width = `` : t.style.height = ``;
          }), t.emit(`changeDirection`), e && t.update()),
          t;
      },
      h.prototype.init = function () {
        let e = this;
        e.initialized || (e.emit(`beforeInit`), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit(`init`));
      },
      h.prototype.destroy = function (e, t) {
        void 0 === e && (e = !0),
          void 0 === t && (t = !0);
        let a = this;
        let i = a.params;
        let s = a.$el;
        let r = a.$wrapperEl;
        let n = a.slides;
        return void 0 === a.params || a.destroyed || (a.emit(`beforeDestroy`), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr(`style`), r.removeAttr(`style`), n && n.length && n.removeClass([i.slideVisibleClass,
            i.slideActiveClass,
            i.slideNextClass,
            i.slidePrevClass
          ].join(` `)).removeAttr(`style`).removeAttr(`data-swiper-slide-index`).removeAttr(`data-swiper-column`).removeAttr(`data-swiper-row`)), a.emit(`destroy`), Object.keys(a.eventsListeners).forEach(function (e) {
            a.off(e);
          }), !1 !== e && (a.$el[0].swiper = null, a.$el.data(`swiper`, null), ee.deleteProps(a)), a.destroyed = !0),
          null;
      },
      h.extendDefaults = function (e) {
        ee.extend(x, e);
      },
      e.extendedDefaults.get = function () {
        return x;
      },
      e.defaults.get = function () {
        return w;
      },
      e.Class.get = function () {
        return u;
      },
      e.$.get = function () {
        return L;
      },
      Object.defineProperties(h, e),
      h;
  }(n);
  let E = {
    name: `device`,
    proto: {
      device: g
    },
    static: {
      device: g
    }
  };
  let S = {
    name: `support`,
    proto: {
      support: te
    },
    static: {
      support: te
    }
  };
  let C = {
    name: `browser`,
    proto: {
      browser: I
    },
    static: {
      browser: I
    }
  };
  let M = {
    name: `resize`,
    create() {
      let e = this;
      ee.extend(e, {
        resize: {
          resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit(`beforeResize`), e.emit(`resize`));
          },
          orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit(`orientationchange`);
          }
        }
      });
    },
    on: {
      init() {
        J.addEventListener(`resize`, this.resize.resizeHandler),
          J.addEventListener(`orientationchange`, this.resize.orientationChangeHandler);
      },
      destroy() {
        J.removeEventListener(`resize`, this.resize.resizeHandler),
          J.removeEventListener(`orientationchange`, this.resize.orientationChangeHandler);
      }
    }
  };
  var z = {
    func: J.MutationObserver || J.WebkitMutationObserver,
    attach(e, t) {
      void 0 === t && (t = {});
      let a = this;
      let i = new z.func(function (e) {
        if (e.length !== 1) {
          let t = function () {
            a.emit(`observerUpdate`, e[0]);
          };
          J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0);
        } else {
          a.emit(`observerUpdate`, e[0]);
        }
      });
      i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData
        }),
        a.observer.observers.push(i);
    },
    init() {
      let e = this;
      if (te.observer && e.params.observer) {
        if (e.params.observeParents) {
          for (let t = e.$el.parents(), a = 0; a < t.length; a += 1) {
            e.observer.attach(t[a]);
          }
        }
        e.observer.attach(e.$el[0], {
            childList: e.params.observeSlideChildren
          }),
          e.observer.attach(e.$wrapperEl[0], {
            attributes: !1
          });
      }
    },
    destroy() {
      this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
        this.observer.observers = [];
    }
  };
  let P = {
    name: `observer`,
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create() {
      ee.extend(this, {
        observer: {
          init: z.init.bind(this),
          attach: z.attach.bind(this),
          destroy: z.destroy.bind(this),
          observers: []
        }
      });
    },
    on: {
      init() {
        this.observer.init();
      },
      destroy() {
        this.observer.destroy();
      }
    }
  };
  let k = {
    update(e) {
      let t = this;
      let a = t.params;
      let i = a.slidesPerView;
      let s = a.slidesPerGroup;
      let r = a.centeredSlides;
      let n = t.params.virtual;
      let o = n.addSlidesBefore;
      let l = n.addSlidesAfter;
      let d = t.virtual;
      let p = d.from;
      let c = d.to;
      let u = d.slides;
      let h = d.slidesGrid;
      let v = d.renderSlide;
      let f = d.offset;
      t.updateActiveIndex();
      let m;
      let g;
      let b;
      let w = t.activeIndex || 0;
      m = t.rtlTranslate ? `right` : t.isHorizontal() ? `left` : `top`,
        r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
      let y = Math.max((w || 0) - b, 0);
      let x = Math.min((w || 0) + g, u.length - 1);
      let T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

      function E() {
        t.updateSlides(),
          t.updateProgress(),
          t.updateSlidesClasses(),
          t.lazy && t.params.lazy.enabled && t.lazy.load();
      }
      if (ee.extend(t.virtual, {
          from: y,
          to: x,
          offset: T,
          slidesGrid: t.slidesGrid
        }), p === y && c === x && !e) {
        return t.slidesGrid !== h && T !== f && t.slides.css(m, T + `px`),
          void t.updateProgress();
      }
      if (t.params.virtual.renderExternal) {
        return t.params.virtual.renderExternal.call(t, {
            offset: T,
            from: y,
            to: x,
            slides: function () {
              for (var e = [], t = y; t <= x; t += 1) {
                e.push(u[t]);
              }
              return e;
            }()
          }),
          void E();
      }
      let S = [];
      let C = [];
      if (e) {
        t.$wrapperEl.find(`.` + t.params.slideClass).remove();
      } else {
        for (let M = p; M <= c; M += 1) {
          (M < y || x < M) && t.$wrapperEl.find(`.` + t.params.slideClass + `[data-swiper-slide-index="` + M + `"]`).remove();
        }
      }
      for (let z = 0; z < u.length; z += 1) {
        y <= z && z <= x && (void 0 === c || e ? C.push(z) : (c < z && C.push(z), z < p && S.push(z)));
      }
      C.forEach(function (e) {
          t.$wrapperEl.append(v(u[e], e));
        }),
        S.sort(function (e, t) {
          return t - e;
        }).forEach(function (e) {
          t.$wrapperEl.prepend(v(u[e], e));
        }),
        t.$wrapperEl.children(`.swiper-slide`).css(m, T + `px`),
        E();
    },
    renderSlide(e, t) {
      let a = this;
      let i = a.params.virtual;
      if (i.cache && a.virtual.cache[t]) {
        return a.virtual.cache[t];
      }
      let s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L(`<div class="` + a.params.slideClass + `" data-swiper-slide-index="` + t + `">` + e + `</div>`);
      return s.attr(`data-swiper-slide-index`) || s.attr(`data-swiper-slide-index`, t),
        i.cache && (a.virtual.cache[t] = s),
        s;
    },
    appendSlide(e) {
      if (typeof e === `object` && `length` in e) {
        for (let t = 0; t < e.length; t += 1) {
          e[t] && this.virtual.slides.push(e[t]);
        }
      } else {
        this.virtual.slides.push(e);
      }
      this.virtual.update(!0);
    },
    prependSlide(e) {
      let t = this;
      let a = t.activeIndex;
      let i = a + 1;
      let s = 1;
      if (Array.isArray(e)) {
        for (let r = 0; r < e.length; r += 1) {
          e[r] && t.virtual.slides.unshift(e[r]);
        }
        i = a + e.length,
          s = e.length;
      } else {
        t.virtual.slides.unshift(e);
      }
      if (t.params.virtual.cache) {
        let n = t.virtual.cache;
        let o = {};
        Object.keys(n).forEach(function (e) {
            o[parseInt(e, 10) + s] = n[e];
          }),
          t.virtual.cache = o;
      }
      t.virtual.update(!0),
        t.slideTo(i, 0);
    },
    removeSlide(e) {
      let t = this;
      if (e != null) {
        let a = t.activeIndex;
        if (Array.isArray(e)) {
          for (let i = e.length - 1; i >= 0; i -= 1) {
            t.virtual.slides.splice(e[i], 1),
              t.params.virtual.cache && delete t.virtual.cache[e[i]],
              e[i] < a && (a -= 1),
              a = Math.max(a, 0);
          }
        } else {
          t.virtual.slides.splice(e, 1),
            t.params.virtual.cache && delete t.virtual.cache[e],
            e < a && (a -= 1),
            a = Math.max(a, 0);
        }
        t.virtual.update(!0),
          t.slideTo(a, 0);
      }
    },
    removeAllSlides() {
      let e = this;
      e.virtual.slides = [],
        e.params.virtual.cache && (e.virtual.cache = {}),
        e.virtual.update(!0),
        e.slideTo(0, 0);
    }
  };
  let $ = {
    name: `virtual`,
    params: {
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create() {
      let e = this;
      ee.extend(e, {
        virtual: {
          update: k.update.bind(e),
          appendSlide: k.appendSlide.bind(e),
          prependSlide: k.prependSlide.bind(e),
          removeSlide: k.removeSlide.bind(e),
          removeAllSlides: k.removeAllSlides.bind(e),
          renderSlide: k.renderSlide.bind(e),
          slides: e.params.virtual.slides,
          cache: {}
        }
      });
    },
    on: {
      beforeInit() {
        let e = this;
        if (e.params.virtual.enabled) {
          e.classNames.push(e.params.containerModifierClass + `virtual`);
          let t = {
            watchSlidesProgress: !0
          };
          ee.extend(e.params, t),
            ee.extend(e.originalParams, t),
            e.params.initialSlide || e.virtual.update();
        }
      },
      setTranslate() {
        this.params.virtual.enabled && this.virtual.update();
      }
    }
  };
  let D = {
    handle(e) {
      let t = this;
      let a = t.rtlTranslate;
      let i = e;
      i.originalEvent && (i = i.originalEvent);
      let s = i.keyCode || i.charCode;
      if (!t.allowSlideNext && (t.isHorizontal() && s === 39 || t.isVertical() && s === 40)) {
        return !1;
      }
      if (!t.allowSlidePrev && (t.isHorizontal() && s === 37 || t.isVertical() && s === 38)) {
        return !1;
      }
      if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && (f.activeElement.nodeName.toLowerCase() === `input` || f.activeElement.nodeName.toLowerCase() === `textarea`))) {
        if (t.params.keyboard.onlyInViewport && (s === 37 || s === 39 || s === 38 || s === 40)) {
          let r = !1;
          if (t.$el.parents(`.` + t.params.slideClass).length > 0 && t.$el.parents(`.` + t.params.slideActiveClass).length === 0) {
            return;
          }
          let n = J.innerWidth;
          let o = J.innerHeight;
          let l = t.$el.offset();
          a && (l.left -= t.$el[0].scrollLeft);
          for (let d = [
              [l.left,
                l.top
              ],
              [
                l.left + t.width,
                l.top
              ],
              [
                l.left,
                l.top + t.height
              ],
              [
                l.left + t.width,
                l.top + t.height
              ]
            ], p = 0; p < d.length; p += 1) {
            let c = d[p];
            c[0] >= 0 && c[0] <= n && c[1] >= 0 && c[1] <= o && (r = !0);
          }
          if (!r) {
            return;
          }
        }
        t.isHorizontal() ? (s !== 37 && s !== 39 || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (s === 39 && !a || s === 37 && a) && t.slideNext(), (s === 37 && !a || s === 39 && a) && t.slidePrev()) : (s !== 38 && s !== 40 || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), s === 40 && t.slideNext(), s === 38 && t.slidePrev()),
          t.emit(`keyPress`, s);
      }
    },
    enable() {
      this.keyboard.enabled || (L(f).on(`keydown`, this.keyboard.handle), this.keyboard.enabled = !0);
    },
    disable() {
      this.keyboard.enabled && (L(f).off(`keydown`, this.keyboard.handle), this.keyboard.enabled = !1);
    }
  };
  let O = {
    name: `keyboard`,
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0
      }
    },
    create() {
      ee.extend(this, {
        keyboard: {
          enabled: !1,
          enable: D.enable.bind(this),
          disable: D.disable.bind(this),
          handle: D.handle.bind(this)
        }
      });
    },
    on: {
      init() {
        this.params.keyboard.enabled && this.keyboard.enable();
      },
      destroy() {
        this.keyboard.enabled && this.keyboard.disable();
      }
    }
  };
  var A = {
    lastScrollTime: ee.now(),
    event: J.navigator.userAgent.indexOf(`firefox`) > -1 ? `DOMMouseScroll` : function () {
      let e = `onwheel`;
      let t = e in f;
      if (!t) {
        let a = f.createElement(`div`);
        a.setAttribute(e, `return;`),
          t = typeof a[e] === `function`;
      }
      return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature(``, ``) && (t = f.implementation.hasFeature(`Events.wheel`, `3.0`)),
        t;
    }() ? `wheel` : `mousewheel`,
    normalize(e) {
      let t = 0;
      let a = 0;
      let i = 0;
      let s = 0;
      return `detail` in e && (a = e.detail),
        `wheelDelta` in e && (a = -e.wheelDelta / 120),
        `wheelDeltaY` in e && (a = -e.wheelDeltaY / 120),
        `wheelDeltaX` in e && (t = -e.wheelDeltaX / 120),
        `axis` in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0),
        i = 10 * t,
        s = 10 * a,
        `deltaY` in e && (s = e.deltaY),
        `deltaX` in e && (i = e.deltaX),
        (i || s) && e.deltaMode && (e.deltaMode === 1 ? (i *= 40, s *= 40) : (i *= 800, s *= 800)),
        i && !t && (t = i < 1 ? -1 : 1),
        s && !a && (a = s < 1 ? -1 : 1), {
          spinX: t,
          spinY: a,
          pixelX: i,
          pixelY: s
        };
    },
    handleMouseEnter() {
      this.mouseEntered = !0;
    },
    handleMouseLeave() {
      this.mouseEntered = !1;
    },
    handle(e) {
      let t = e;
      let a = this;
      let i = a.params.mousewheel;
      if (!a.mouseEntered && !i.releaseOnEdges) {
        return !0;
      }
      t.originalEvent && (t = t.originalEvent);
      let s = 0;
      let r = a.rtlTranslate ? -1 : 1;
      let n = A.normalize(t);
      if (i.forceToAxis) {
        if (a.isHorizontal()) {
          if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) {
            return !0;
          }
          s = n.pixelX * r;
        } else {
          if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) {
            return !0;
          }
          s = n.pixelY;
        }
      } else {
        s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
      }
      if (s === 0) {
        return !0;
      }
      if (i.invert && (s = -s), a.params.freeMode) {
        a.params.loop && a.loopFix();
        let o = a.getTranslate() + s * i.sensitivity;
        let l = a.isBeginning;
        let d = a.isEnd;
        if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function () {
            a.slideToClosest();
          }, 300)), a.emit(`scroll`, t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) {
          return !0;
        }
      } else {
        if (ee.now() - a.mousewheel.lastScrollTime > 60) {
          if (s < 0) {
            if (a.isEnd && !a.params.loop || a.animating) {
              if (i.releaseOnEdges) {
                return !0;
              }
            } else {
              a.slideNext(),
                a.emit(`scroll`, t);
            }
          } else if (a.isBeginning && !a.params.loop || a.animating) {
            if (i.releaseOnEdges) {
              return !0;
            }
          } else {
            a.slidePrev(),
              a.emit(`scroll`, t);
          }
        }
        a.mousewheel.lastScrollTime = (new J.Date()).getTime();
      }
      return t.preventDefault ? t.preventDefault() : t.returnValue = !1,
        !1;
    },
    enable() {
      let e = this;
      if (!A.event) {
        return !1;
      }
      if (e.mousewheel.enabled) {
        return !1;
      }
      let t = e.$el;
      return e.params.mousewheel.eventsTarged !== `container` && (t = L(e.params.mousewheel.eventsTarged)),
        t.on(`mouseenter`, e.mousewheel.handleMouseEnter),
        t.on(`mouseleave`, e.mousewheel.handleMouseLeave),
        t.on(A.event, e.mousewheel.handle),
        e.mousewheel.enabled = !0;
    },
    disable() {
      let e = this;
      if (!A.event) {
        return !1;
      }
      if (!e.mousewheel.enabled) {
        return !1;
      }
      let t = e.$el;
      return e.params.mousewheel.eventsTarged !== `container` && (t = L(e.params.mousewheel.eventsTarged)),
        t.off(A.event, e.mousewheel.handle),
        !(e.mousewheel.enabled = !1);
    }
  };
  let H = {
    update() {
      let e = this;
      let t = e.params.navigation;
      if (!e.params.loop) {
        let a = e.navigation;
        let i = a.$nextEl;
        let s = a.$prevEl;
        s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? `addClass` : `removeClass`](t.lockClass)),
          i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? `addClass` : `removeClass`](t.lockClass));
      }
    },
    onPrevClick(e) {
      e.preventDefault(),
        this.isBeginning && !this.params.loop || this.slidePrev();
    },
    onNextClick(e) {
      e.preventDefault(),
        this.isEnd && !this.params.loop || this.slideNext();
    },
    init() {
      let e;
      let t;
      let a = this;
      let i = a.params.navigation;
      (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && typeof i.nextEl === `string` && e.length > 1 && a.$el.find(i.nextEl).length === 1 && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && typeof i.prevEl === `string` && t.length > 1 && a.$el.find(i.prevEl).length === 1 && (t = a.$el.find(i.prevEl))), e && e.length > 0 && e.on(`click`, a.navigation.onNextClick), t && t.length > 0 && t.on(`click`, a.navigation.onPrevClick), ee.extend(a.navigation, {
        $nextEl: e,
        nextEl: e && e[0],
        $prevEl: t,
        prevEl: t && t[0]
      }));
    },
    destroy() {
      let e = this;
      let t = e.navigation;
      let a = t.$nextEl;
      let i = t.$prevEl;
      a && a.length && (a.off(`click`, e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)),
        i && i.length && (i.off(`click`, e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
    }
  };
  let N = {
    update() {
      let e = this;
      let t = e.rtl;
      let s = e.params.pagination;
      if (s.el && e.pagination.el && e.pagination.$el && e.pagination.$el.length !== 0) {
        let r;
        let a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length;
        let i = e.pagination.$el;
        let n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
        if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && e.params.paginationType !== `bullets` && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, s.type === `bullets` && e.pagination.bullets && e.pagination.bullets.length > 0) {
          let o;
          let l;
          let d;
          let p = e.pagination.bullets;
          if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? `outerWidth` : `outerHeight`](!0), i.css(e.isHorizontal() ? `width` : `height`, e.pagination.bulletSize * (s.dynamicMainBullets + 4) + `px`), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + ` ` + s.bulletActiveClass + `-next ` + s.bulletActiveClass + `-next-next ` + s.bulletActiveClass + `-prev ` + s.bulletActiveClass + `-prev-prev ` + s.bulletActiveClass + `-main`), i.length > 1) {
            p.each(function (e, t) {
              let a = L(t);
              let i = a.index();
              i === r && a.addClass(s.bulletActiveClass),
                s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + `-main`), i === o && a.prev().addClass(s.bulletActiveClass + `-prev`).prev().addClass(s.bulletActiveClass + `-prev-prev`), i === l && a.next().addClass(s.bulletActiveClass + `-next`).next().addClass(s.bulletActiveClass + `-next-next`));
            });
          } else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
            for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) {
              p.eq(h).addClass(s.bulletActiveClass + `-main`);
            }
            c.prev().addClass(s.bulletActiveClass + `-prev`).prev().addClass(s.bulletActiveClass + `-prev-prev`),
              u.next().addClass(s.bulletActiveClass + `-next`).next().addClass(s.bulletActiveClass + `-next-next`);
          }
          if (s.dynamicBullets) {
            let v = Math.min(p.length, s.dynamicMainBullets + 4);
            let f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize;
            let m = t ? `right` : `left`;
            p.css(e.isHorizontal() ? m : `top`, f + `px`);
          }
        }
        if (s.type === `fraction` && (i.find(`.` + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find(`.` + s.totalClass).text(s.formatFractionTotal(n))), s.type === `progressbar`) {
          let g;
          g = s.progressbarOpposite ? e.isHorizontal() ? `vertical` : `horizontal` : e.isHorizontal() ? `horizontal` : `vertical`;
          let b = (r + 1) / n;
          let w = 1;
          let y = 1;
          g === `horizontal` ? w = b : y = b,
            i.find(`.` + s.progressbarFillClass).transform(`translate3d(0,0,0) scaleX(` + w + `) scaleY(` + y + `)`).transition(e.params.speed);
        }
        s.type === `custom` && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit(`paginationRender`, e, i[0])) : e.emit(`paginationUpdate`, e, i[0]),
          i[e.params.watchOverflow && e.isLocked ? `addClass` : `removeClass`](s.lockClass);
      }
    },
    render() {
      let e = this;
      let t = e.params.pagination;
      if (t.el && e.pagination.el && e.pagination.$el && e.pagination.$el.length !== 0) {
        let a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length;
        let i = e.pagination.$el;
        let s = ``;
        if (t.type === `bullets`) {
          for (let r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) {
            t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += `<` + t.bulletElement + ` class="` + t.bulletClass + `"></` + t.bulletElement + `>`;
          }
          i.html(s),
            e.pagination.bullets = i.find(`.` + t.bulletClass);
        }
        t.type === `fraction` && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="` + t.currentClass + `"></span> / <span class="` + t.totalClass + `"></span>`, i.html(s)),
          t.type === `progressbar` && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="` + t.progressbarFillClass + `"></span>`, i.html(s)),
          t.type !== `custom` && e.emit(`paginationRender`, e.pagination.$el[0]);
      }
    },
    init() {
      let a = this;
      let e = a.params.pagination;
      if (e.el) {
        let t = L(e.el);
        t.length !== 0 && (a.params.uniqueNavElements && typeof e.el === `string` && t.length > 1 && a.$el.find(e.el).length === 1 && (t = a.$el.find(e.el)), e.type === `bullets` && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), e.type === `bullets` && e.dynamicBullets && (t.addClass(`` + e.modifierClass + e.type + `-dynamic`), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), e.type === `progressbar` && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on(`click`, `.` + e.bulletClass, function (e) {
          e.preventDefault();
          let t = L(this).index() * a.params.slidesPerGroup;
          a.params.loop && (t += a.loopedSlides),
            a.slideTo(t);
        }), ee.extend(a.pagination, {
          $el: t,
          el: t[0]
        }));
      }
    },
    destroy() {
      let e = this;
      let t = e.params.pagination;
      if (t.el && e.pagination.el && e.pagination.$el && e.pagination.$el.length !== 0) {
        let a = e.pagination.$el;
        a.removeClass(t.hiddenClass),
          a.removeClass(t.modifierClass + t.type),
          e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass),
          t.clickable && a.off(`click`, `.` + t.bulletClass);
      }
    }
  };
  let G = {
    setTranslate() {
      let e = this;
      if (e.params.scrollbar.el && e.scrollbar.el) {
        let t = e.scrollbar;
        let a = e.rtlTranslate;
        let i = e.progress;
        let s = t.dragSize;
        let r = t.trackSize;
        let n = t.$dragEl;
        let o = t.$el;
        let l = e.params.scrollbar;
        let d = s;
        let p = (r - s) * i;
        a ? (p = -p) > 0 ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p),
          e.isHorizontal() ? (te.transforms3d ? n.transform(`translate3d(` + p + `px, 0, 0)`) : n.transform(`translateX(` + p + `px)`), n[0].style.width = d + `px`) : (te.transforms3d ? n.transform(`translate3d(0px, ` + p + `px, 0)`) : n.transform(`translateY(` + p + `px)`), n[0].style.height = d + `px`),
          l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
            o[0].style.opacity = 0,
              o.transition(400);
          }, 1000));
      }
    },
    setTransition(e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    },
    updateSize() {
      let e = this;
      if (e.params.scrollbar.el && e.scrollbar.el) {
        let t = e.scrollbar;
        let a = t.$dragEl;
        let i = t.$el;
        a[0].style.width = ``,
          a[0].style.height = ``;
        let s;
        let r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight;
        let n = e.size / e.virtualSize;
        let o = n * (r / e.size);
        s = e.params.scrollbar.dragSize === `auto` ? r * n : parseInt(e.params.scrollbar.dragSize, 10),
          e.isHorizontal() ? a[0].style.width = s + `px` : a[0].style.height = s + `px`,
          i[0].style.display = n >= 1 ? `none` : ``,
          e.params.scrollbar.hide && (i[0].style.opacity = 0),
          ee.extend(t, {
            trackSize: r,
            divider: n,
            moveDivider: o,
            dragSize: s
          }),
          t.$el[e.params.watchOverflow && e.isLocked ? `addClass` : `removeClass`](e.params.scrollbar.lockClass);
      }
    },
    setDragPosition(e) {
      let t;
      let a = this;
      let i = a.scrollbar;
      let s = a.rtlTranslate;
      let r = i.$el;
      let n = i.dragSize;
      let o = i.trackSize;
      t = ((a.isHorizontal() ? e.type === `touchstart` || e.type === `touchmove` ? e.targetTouches[0].pageX : e.pageX || e.clientX : e.type === `touchstart` || e.type === `touchmove` ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? `left` : `top`] - n / 2) / (o - n),
        t = Math.max(Math.min(t, 1), 0),
        s && (t = 1 - t);
      let l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
      a.updateProgress(l),
        a.setTranslate(l),
        a.updateActiveIndex(),
        a.updateSlidesClasses();
    },
    onDragStart(e) {
      let t = this;
      let a = t.params.scrollbar;
      let i = t.scrollbar;
      let s = t.$wrapperEl;
      let r = i.$el;
      let n = i.$dragEl;
      t.scrollbar.isTouched = !0,
        e.preventDefault(),
        e.stopPropagation(),
        s.transition(100),
        n.transition(100),
        i.setDragPosition(e),
        clearTimeout(t.scrollbar.dragTimeout),
        r.transition(0),
        a.hide && r.css(`opacity`, 1),
        t.emit(`scrollbarDragStart`, e);
    },
    onDragMove(e) {
      let t = this.scrollbar;
      let a = this.$wrapperEl;
      let i = t.$el;
      let s = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit(`scrollbarDragMove`, e));
    },
    onDragEnd(e) {
      let t = this;
      let a = t.params.scrollbar;
      let i = t.scrollbar.$el;
      t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function () {
        i.css(`opacity`, 0),
          i.transition(400);
      }, 1000)), t.emit(`scrollbarDragEnd`, e), a.snapOnRelease && t.slideToClosest());
    },
    enableDraggable() {
      let e = this;
      if (e.params.scrollbar.el) {
        let t = e.scrollbar;
        let a = e.touchEventsTouch;
        let i = e.touchEventsDesktop;
        let s = e.params;
        let r = t.$el[0];
        let n = !(!te.passiveListener || !s.passiveListeners) && {
          passive: !1,
          capture: !1
        };
        let o = !(!te.passiveListener || !s.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o));
      }
    },
    disableDraggable() {
      let e = this;
      if (e.params.scrollbar.el) {
        let t = e.scrollbar;
        let a = e.touchEventsTouch;
        let i = e.touchEventsDesktop;
        let s = e.params;
        let r = t.$el[0];
        let n = !(!te.passiveListener || !s.passiveListeners) && {
          passive: !1,
          capture: !1
        };
        let o = !(!te.passiveListener || !s.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o));
      }
    },
    init() {
      let e = this;
      if (e.params.scrollbar.el) {
        let t = e.scrollbar;
        let a = e.$el;
        let i = e.params.scrollbar;
        let s = L(i.el);
        e.params.uniqueNavElements && typeof i.el === `string` && s.length > 1 && a.find(i.el).length === 1 && (s = a.find(i.el));
        let r = s.find(`.` + e.params.scrollbar.dragClass);
        r.length === 0 && (r = L(`<div class="` + e.params.scrollbar.dragClass + `"></div>`), s.append(r)),
          ee.extend(t, {
            $el: s,
            el: s[0],
            $dragEl: r,
            dragEl: r[0]
          }),
          i.draggable && t.enableDraggable();
      }
    },
    destroy() {
      this.scrollbar.disableDraggable();
    }
  };
  let B = {
    setTransform(e, t) {
      let a = this.rtl;
      let i = L(e);
      let s = a ? -1 : 1;
      let r = i.attr(`data-swiper-parallax`) || `0`;
      let n = i.attr(`data-swiper-parallax-x`);
      let o = i.attr(`data-swiper-parallax-y`);
      let l = i.attr(`data-swiper-parallax-scale`);
      let d = i.attr(`data-swiper-parallax-opacity`);
      if (n || o ? (n = n || `0`, o = o || `0`) : this.isHorizontal() ? (n = r, o = `0`) : (o = r, n = `0`), n = n.indexOf(`%`) >= 0 ? parseInt(n, 10) * t * s + `%` : n * t * s + `px`, o = o.indexOf(`%`) >= 0 ? parseInt(o, 10) * t + `%` : o * t + `px`, d != null) {
        let p = d - (d - 1) * (1 - Math.abs(t));
        i[0].style.opacity = p;
      }
      if (l == null) {
        i.transform(`translate3d(` + n + `, ` + o + `, 0px)`);
      } else {
        let c = l - (l - 1) * (1 - Math.abs(t));
        i.transform(`translate3d(` + n + `, ` + o + `, 0px) scale(` + c + `)`);
      }
    },
    setTranslate() {
      let i = this;
      let e = i.$el;
      let t = i.slides;
      let s = i.progress;
      let r = i.snapGrid;
      e.children(`[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]`).each(function (e, t) {
          i.parallax.setTransform(t, s);
        }),
        t.each(function (e, t) {
          let a = t.progress;
          i.params.slidesPerGroup > 1 && i.params.slidesPerView !== `auto` && (a += Math.ceil(e / 2) - s * (r.length - 1)),
            a = Math.min(Math.max(a, -1), 1),
            L(t).find(`[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]`).each(function (e, t) {
              i.parallax.setTransform(t, a);
            });
        });
    },
    setTransition(s) {
      void 0 === s && (s = this.params.speed);
      this.$el.find(`[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]`).each(function (e, t) {
        let a = L(t);
        let i = parseInt(a.attr(`data-swiper-parallax-duration`), 10) || s;
        s === 0 && (i = 0),
          a.transition(i);
      });
    }
  };
  var X = {
    getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) {
        return 1;
      }
      let t = e.targetTouches[0].pageX;
      let a = e.targetTouches[0].pageY;
      let i = e.targetTouches[1].pageX;
      let s = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
    },
    onGestureStart(e) {
      let t = this;
      let a = t.params.zoom;
      let i = t.zoom;
      let s = i.gesture;
      if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
        if (e.type !== `touchstart` || e.type === `touchstart` && e.targetTouches.length < 2) {
          return;
        }
        i.fakeGestureTouched = !0,
          s.scaleStart = X.getDistanceBetweenTouches(e);
      }
      s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(`.swiper-slide`), s.$slideEl.length === 0 && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find(`img, svg, canvas`), s.$imageWrapEl = s.$imageEl.parent(`.` + a.containerClass), s.maxRatio = s.$imageWrapEl.attr(`data-swiper-zoom`) || a.maxRatio, s.$imageWrapEl.length !== 0) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0;
    },
    onGestureChange(e) {
      let t = this.params.zoom;
      let a = this.zoom;
      let i = a.gesture;
      if (!te.gestures) {
        if (e.type !== `touchmove` || e.type === `touchmove` && e.targetTouches.length < 2) {
          return;
        }
        a.fakeGestureMoved = !0,
          i.scaleMove = X.getDistanceBetweenTouches(e);
      }
      i.$imageEl && i.$imageEl.length !== 0 && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, 0.5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, 0.5)), i.$imageEl.transform(`translate3d(0,0,0) scale(` + a.scale + `)`));
    },
    onGestureEnd(e) {
      let t = this.params.zoom;
      let a = this.zoom;
      let i = a.gesture;
      if (!te.gestures) {
        if (!a.fakeGestureTouched || !a.fakeGestureMoved) {
          return;
        }
        if (e.type !== `touchend` || e.type === `touchend` && e.changedTouches.length < 2 && !g.android) {
          return;
        }
        a.fakeGestureTouched = !1,
          a.fakeGestureMoved = !1;
      }
      i.$imageEl && i.$imageEl.length !== 0 && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform(`translate3d(0,0,0) scale(` + a.scale + `)`), a.currentScale = a.scale, a.isScaling = !1, a.scale === 1 && (i.$slideEl = void 0));
    },
    onTouchStart(e) {
      let t = this.zoom;
      let a = t.gesture;
      let i = t.image;
      a.$imageEl && a.$imageEl.length !== 0 && (i.isTouched || (g.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = e.type === `touchstart` ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = e.type === `touchstart` ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove(e) {
      let t = this;
      let a = t.zoom;
      let i = a.gesture;
      let s = a.image;
      let r = a.velocity;
      if (i.$imageEl && i.$imageEl.length !== 0 && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
        s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], `x`) || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], `y`) || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
        let n = s.width * a.scale;
        let o = s.height * a.scale;
        if (!(n < i.slideWidth && o < i.slideHeight)) {
          if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = e.type === `touchmove` ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = e.type === `touchmove` ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) {
              return void(s.isTouched = !1);
            }
            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) {
              return void(s.isTouched = !1);
            }
          }
          e.preventDefault(),
            e.stopPropagation(),
            s.isMoved = !0,
            s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX,
            s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY,
            s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
            s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
            s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
            s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
            r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
            r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
            r.prevTime || (r.prevTime = Date.now()),
            r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2,
            r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2,
            Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
            Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
            r.prevPositionX = s.touchesCurrent.x,
            r.prevPositionY = s.touchesCurrent.y,
            r.prevTime = Date.now(),
            i.$imageWrapEl.transform(`translate3d(` + s.currentX + `px, ` + s.currentY + `px,0)`);
        }
      }
    },
    onTouchEnd() {
      let e = this.zoom;
      let t = e.gesture;
      let a = e.image;
      let i = e.velocity;
      if (t.$imageEl && t.$imageEl.length !== 0) {
        if (!a.isTouched || !a.isMoved) {
          return a.isTouched = !1,
            void(a.isMoved = !1);
        }
        a.isTouched = !1,
          a.isMoved = !1;
        let s = 300;
        let r = 300;
        let n = i.x * s;
        let o = a.currentX + n;
        let l = i.y * r;
        let d = a.currentY + l;
        i.x !== 0 && (s = Math.abs((o - a.currentX) / i.x)),
          i.y !== 0 && (r = Math.abs((d - a.currentY) / i.y));
        let p = Math.max(s, r);
        a.currentX = o,
          a.currentY = d;
        let c = a.width * e.scale;
        let u = a.height * e.scale;
        a.minX = Math.min(t.slideWidth / 2 - c / 2, 0),
          a.maxX = -a.minX,
          a.minY = Math.min(t.slideHeight / 2 - u / 2, 0),
          a.maxY = -a.minY,
          a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX),
          a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY),
          t.$imageWrapEl.transition(p).transform(`translate3d(` + a.currentX + `px, ` + a.currentY + `px,0)`);
      }
    },
    onTransitionEnd() {
      let e = this.zoom;
      let t = e.gesture;
      t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform(`translate3d(0,0,0) scale(1)`), t.$imageWrapEl.transform(`translate3d(0,0,0)`), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
    },
    toggle(e) {
      let t = this.zoom;
      t.scale && t.scale !== 1 ? t.out() : t.in(e);
    },
    in (e) {
      let t;
      let a;
      let i;
      let s;
      let r;
      let n;
      let o;
      let l;
      let d;
      let p;
      let c;
      let u;
      let h;
      let v;
      let f;
      let m;
      let g = this;
      let b = g.zoom;
      let w = g.params.zoom;
      let y = b.gesture;
      let x = b.image;
      (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find(`img, svg, canvas`), y.$imageWrapEl = y.$imageEl.parent(`.` + w.containerClass)), y.$imageEl && y.$imageEl.length !== 0) && (y.$slideEl.addClass(`` + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = e.type === `touchend` ? e.changedTouches[0].pageX : e.pageX, a = e.type === `touchend` ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr(`data-swiper-zoom`) || w.maxRatio, b.currentScale = y.$imageWrapEl.attr(`data-swiper-zoom`) || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform(`translate3d(` + r + `px, ` + n + `px,0)`), y.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(` + b.scale + `)`));
    },
    out() {
      let e = this;
      let t = e.zoom;
      let a = e.params.zoom;
      let i = t.gesture;
      i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find(`img, svg, canvas`), i.$imageWrapEl = i.$imageEl.parent(`.` + a.containerClass)),
        i.$imageEl && i.$imageEl.length !== 0 && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform(`translate3d(0,0,0)`), i.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(1)`), i.$slideEl.removeClass(`` + a.zoomedSlideClass), i.$slideEl = void 0);
    },
    enable() {
      let e = this;
      let t = e.zoom;
      if (!t.enabled) {
        t.enabled = !0;
        let a = !(e.touchEvents.start !== `touchstart` || !te.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        te.gestures ? (e.$wrapperEl.on(`gesturestart`, `.swiper-slide`, t.onGestureStart, a), e.$wrapperEl.on(`gesturechange`, `.swiper-slide`, t.onGestureChange, a), e.$wrapperEl.on(`gestureend`, `.swiper-slide`, t.onGestureEnd, a)) : e.touchEvents.start === `touchstart` && (e.$wrapperEl.on(e.touchEvents.start, `.swiper-slide`, t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, `.swiper-slide`, t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, `.swiper-slide`, t.onGestureEnd, a)),
          e.$wrapperEl.on(e.touchEvents.move, `.` + e.params.zoom.containerClass, t.onTouchMove);
      }
    },
    disable() {
      let e = this;
      let t = e.zoom;
      if (t.enabled) {
        e.zoom.enabled = !1;
        let a = !(e.touchEvents.start !== `touchstart` || !te.passiveListener || !e.params.passiveListeners) && {
          passive: !0,
          capture: !1
        };
        te.gestures ? (e.$wrapperEl.off(`gesturestart`, `.swiper-slide`, t.onGestureStart, a), e.$wrapperEl.off(`gesturechange`, `.swiper-slide`, t.onGestureChange, a), e.$wrapperEl.off(`gestureend`, `.swiper-slide`, t.onGestureEnd, a)) : e.touchEvents.start === `touchstart` && (e.$wrapperEl.off(e.touchEvents.start, `.swiper-slide`, t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, `.swiper-slide`, t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, `.swiper-slide`, t.onGestureEnd, a)),
          e.$wrapperEl.off(e.touchEvents.move, `.` + e.params.zoom.containerClass, t.onTouchMove);
      }
    }
  };
  let Y = {
    loadInSlide(e, l) {
      void 0 === l && (l = !0);
      let d = this;
      let p = d.params.lazy;
      if (void 0 !== e && d.slides.length !== 0) {
        let c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children(`.` + d.params.slideClass + `[data-swiper-slide-index="` + e + `"]`) : d.slides.eq(e);
        let t = c.find(`.` + p.elementClass + `:not(.` + p.loadedClass + `):not(.` + p.loadingClass + `)`);
        !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])),
          t.length !== 0 && t.each(function (e, t) {
            let i = L(t);
            i.addClass(p.loadingClass);
            let s = i.attr(`data-background`);
            let r = i.attr(`data-src`);
            let n = i.attr(`data-srcset`);
            let o = i.attr(`data-sizes`);
            d.loadImage(i[0], r || s, n, o, !1, function () {
                if (d != null && d && (!d || d.params) && !d.destroyed) {
                  if (s ? (i.css(`background-image`, `url("` + s + `")`), i.removeAttr(`data-background`)) : (n && (i.attr(`srcset`, n), i.removeAttr(`data-srcset`)), o && (i.attr(`sizes`, o), i.removeAttr(`data-sizes`)), r && (i.attr(`src`, r), i.removeAttr(`data-src`))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find(`.` + p.preloaderClass).remove(), d.params.loop && l) {
                    let e = c.attr(`data-swiper-slide-index`);
                    if (c.hasClass(d.params.slideDuplicateClass)) {
                      let t = d.$wrapperEl.children(`[data-swiper-slide-index="` + e + `"]:not(.` + d.params.slideDuplicateClass + `)`);
                      d.lazy.loadInSlide(t.index(), !1);
                    } else {
                      let a = d.$wrapperEl.children(`.` + d.params.slideDuplicateClass + `[data-swiper-slide-index="` + e + `"]`);
                      d.lazy.loadInSlide(a.index(), !1);
                    }
                  }
                  d.emit(`lazyImageReady`, c[0], i[0]);
                }
              }),
              d.emit(`lazyImageLoad`, c[0], i[0]);
          });
      }
    },
    load() {
      let i = this;
      let t = i.$wrapperEl;
      let a = i.params;
      let s = i.slides;
      let e = i.activeIndex;
      let r = i.virtual && a.virtual.enabled;
      let n = a.lazy;
      let o = a.slidesPerView;

      function l(e) {
        if (r) {
          if (t.children(`.` + a.slideClass + `[data-swiper-slide-index="` + e + `"]`).length) {
            return !0;
          }
        } else if (s[e]) {
          return !0;
        }
        return !1;
      }

      function d(e) {
        return r ? L(e).attr(`data-swiper-slide-index`) : L(e).index();
      }
      if (o === `auto` && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) {
        t.children(`.` + a.slideVisibleClass).each(function (e, t) {
          let a = r ? L(t).attr(`data-swiper-slide-index`) : L(t).index();
          i.lazy.loadInSlide(a);
        });
      } else if (o > 1) {
        for (let p = e; p < e + o; p += 1) {
          l(p) && i.lazy.loadInSlide(p);
        }
      } else {
        i.lazy.loadInSlide(e);
      }
      if (n.loadPrevNext) {
        if (o > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
          for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) {
            l(f) && i.lazy.loadInSlide(f);
          }
          for (let m = v; m < e; m += 1) {
            l(m) && i.lazy.loadInSlide(m);
          }
        } else {
          let g = t.children(`.` + a.slideNextClass);
          g.length > 0 && i.lazy.loadInSlide(d(g));
          let b = t.children(`.` + a.slidePrevClass);
          b.length > 0 && i.lazy.loadInSlide(d(b));
        }
      }
    }
  };
  var V = {
    LinearSpline(e, t) {
      let a;
      let i;
      let s;
      let r;
      let n;
      let o = function (e, t) {
        for (i = -1, a = e.length; a - i > 1;) {
          e[s = a + i >> 1] <= t ? i = s : a = s;
        }
        return a;
      };
      return this.x = e,
        this.y = t,
        this.lastIndex = e.length - 1,
        this.interpolate = function (e) {
          return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0;
        },
        this;
    },
    getInterpolateFunction(e) {
      let t = this;
      t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid, e.slidesGrid) : new V.LinearSpline(t.snapGrid, e.snapGrid));
    },
    setTranslate(e, t) {
      let a;
      let i;
      let s = this;
      let r = s.controller.control;

      function n(e) {
        let t = s.rtlTranslate ? -s.translate : s.translate;
        s.params.controller.by === `slide` && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)),
          i && s.params.controller.by !== `container` || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()),
          s.params.controller.inverse && (i = e.maxTranslate() - i),
          e.updateProgress(i),
          e.setTranslate(i, s),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      }
      if (Array.isArray(r)) {
        for (let o = 0; o < r.length; o += 1) {
          r[o] !== t && r[o] instanceof T && n(r[o]);
        }
      } else {
        r instanceof T && t !== r && n(r);
      }
    },
    setTransition(t, e) {
      let a;
      let i = this;
      let s = i.controller.control;

      function r(e) {
        e.setTransition(t, i),
          t !== 0 && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function () {
            e.updateAutoHeight();
          }), e.$wrapperEl.transitionEnd(function () {
            s && (e.params.loop && i.params.controller.by === `slide` && e.loopFix(), e.transitionEnd());
          }));
      }
      if (Array.isArray(s)) {
        for (a = 0; a < s.length; a += 1) {
          s[a] !== e && s[a] instanceof T && r(s[a]);
        }
      } else {
        s instanceof T && e !== s && r(s);
      }
    }
  };
  let F = {
    makeElFocusable(e) {
      return e.attr(`tabIndex`, `0`),
        e;
    },
    addElRole(e, t) {
      return e.attr(`role`, t),
        e;
    },
    addElLabel(e, t) {
      return e.attr(`aria-label`, t),
        e;
    },
    disableEl(e) {
      return e.attr(`aria-disabled`, !0),
        e;
    },
    enableEl(e) {
      return e.attr(`aria-disabled`, !1),
        e;
    },
    onEnterKey(e) {
      let t = this;
      let a = t.params.a11y;
      if (e.keyCode === 13) {
        let i = L(e.target);
        t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)),
          t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)),
          t.pagination && i.is(`.` + t.params.pagination.bulletClass) && i[0].click();
      }
    },
    notify(e) {
      let t = this.a11y.liveRegion;
      t.length !== 0 && (t.html(``), t.html(e));
    },
    updateNavigation() {
      let e = this;
      if (!e.params.loop) {
        let t = e.navigation;
        let a = t.$nextEl;
        let i = t.$prevEl;
        i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
          a && a.length > 0 && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
      }
    },
    updatePagination() {
      let i = this;
      let s = i.params.a11y;
      i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function (e, t) {
        let a = L(t);
        i.a11y.makeElFocusable(a),
          i.a11y.addElRole(a, `button`),
          i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
      });
    },
    init() {
      let e = this;
      e.$el.append(e.a11y.liveRegion);
      let t;
      let a;
      let i = e.params.a11y;
      e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
        e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
        t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, `button`), e.a11y.addElLabel(t, i.nextSlideMessage), t.on(`keydown`, e.a11y.onEnterKey)),
        a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, `button`), e.a11y.addElLabel(a, i.prevSlideMessage), a.on(`keydown`, e.a11y.onEnterKey)),
        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on(`keydown`, `.` + e.params.pagination.bulletClass, e.a11y.onEnterKey);
    },
    destroy() {
      let e;
      let t;
      let a = this;
      a.a11y.liveRegion && a.a11y.liveRegion.length > 0 && a.a11y.liveRegion.remove(),
        a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl),
        a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl),
        e && e.off(`keydown`, a.a11y.onEnterKey),
        t && t.off(`keydown`, a.a11y.onEnterKey),
        a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off(`keydown`, `.` + a.params.pagination.bulletClass, a.a11y.onEnterKey);
    }
  };
  var R = {
    init() {
      let e = this;
      if (e.params.history) {
        if (!J.history || !J.history.pushState) {
          return e.params.history.enabled = !1,
            void(e.params.hashNavigation.enabled = !0);
        }
        let t = e.history;
        t.initialized = !0,
          t.paths = R.getPathValues(),
          (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener(`popstate`, e.history.setHistoryPopState));
      }
    },
    destroy() {
      this.params.history.replaceState || J.removeEventListener(`popstate`, this.history.setHistoryPopState);
    },
    setHistoryPopState() {
      this.history.paths = R.getPathValues(),
        this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    },
    getPathValues() {
      let e = J.location.pathname.slice(1).split(`/`).filter(function (e) {
        return e !== ``;
      });
      let t = e.length;
      return {
        key: e[t - 2],
        value: e[t - 1]
      };
    },
    setHistory(e, t) {
      if (this.history.initialized && this.params.history.enabled) {
        let a = this.slides.eq(t);
        let i = R.slugify(a.attr(`data-history`));
        J.location.pathname.includes(e) || (i = e + `/` + i);
        let s = J.history.state;
        s && s.value === i || (this.params.history.replaceState ? J.history.replaceState({
          value: i
        }, null, i) : J.history.pushState({
          value: i
        }, null, i));
      }
    },
    slugify(e) {
      return e.toString().replace(/\s+/g, `-`).replace(/[^\w-]+/g, ``).replace(/--+/g, `-`).replace(/^-+/, ``).replace(/-+$/, ``);
    },
    scrollToSlide(e, t, a) {
      let i = this;
      if (t) {
        for (let s = 0, r = i.slides.length; s < r; s += 1) {
          let n = i.slides.eq(s);
          if (R.slugify(n.attr(`data-history`)) === t && !n.hasClass(i.params.slideDuplicateClass)) {
            let o = n.index();
            i.slideTo(o, e, a);
          }
        }
      } else {
        i.slideTo(0, e, a);
      }
    }
  };
  let q = {
    onHashCange() {
      let e = this;
      let t = f.location.hash.replace(`#`, ``);
      if (t !== e.slides.eq(e.activeIndex).attr(`data-hash`)) {
        let a = e.$wrapperEl.children(`.` + e.params.slideClass + `[data-hash="` + t + `"]`).index();
        if (void 0 === a) {
          return;
        }
        e.slideTo(a);
      }
    },
    setHash() {
      let e = this;
      if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) {
        if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) {
          J.history.replaceState(null, null, `#` + e.slides.eq(e.activeIndex).attr(`data-hash`) || ``);
        } else {
          let t = e.slides.eq(e.activeIndex);
          let a = t.attr(`data-hash`) || t.attr(`data-history`);
          f.location.hash = a || ``;
        }
      }
    },
    init() {
      let e = this;
      if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
        e.hashNavigation.initialized = !0;
        let t = f.location.hash.replace(`#`, ``);
        if (t) {
          for (let a = 0, i = e.slides.length; a < i; a += 1) {
            let s = e.slides.eq(a);
            if ((s.attr(`data-hash`) || s.attr(`data-history`)) === t && !s.hasClass(e.params.slideDuplicateClass)) {
              let r = s.index();
              e.slideTo(r, 0, e.params.runCallbacksOnInit, !0);
            }
          }
        }
        e.params.hashNavigation.watchState && L(J).on(`hashchange`, e.hashNavigation.onHashCange);
      }
    },
    destroy() {
      this.params.hashNavigation.watchState && L(J).off(`hashchange`, this.hashNavigation.onHashCange);
    }
  };
  let W = {
    run() {
      let e = this;
      let t = e.slides.eq(e.activeIndex);
      let a = e.params.autoplay.delay;
      t.attr(`data-swiper-autoplay`) && (a = t.attr(`data-swiper-autoplay`) || e.params.autoplay.delay),
        e.autoplay.timeout = ee.nextTick(function () {
          e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit(`autoplay`)) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit(`autoplay`)) : (e.slidePrev(e.params.speed, !0, !0), e.emit(`autoplay`)) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit(`autoplay`)) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit(`autoplay`)) : (e.slideNext(e.params.speed, !0, !0), e.emit(`autoplay`));
        }, a);
    },
    start() {
      let e = this;
      return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit(`autoplayStart`), e.autoplay.run(), !0));
    },
    stop() {
      let e = this;
      return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit(`autoplayStop`), !0));
    },
    pause(e) {
      let t = this;
      t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, e !== 0 && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener(`transitionend`, t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener(`webkitTransitionEnd`, t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())));
    }
  };
  let j = {
    setTranslate() {
      for (let e = this, t = e.slides, a = 0; a < t.length; a += 1) {
        let i = e.slides.eq(a);
        let s = -i[0].swiperSlideOffset;
        e.params.virtualTranslate || (s -= e.translate);
        let r = 0;
        e.isHorizontal() || (r = s, s = 0);
        let n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
        i.css({
          opacity: n
        }).transform(`translate3d(` + s + `px, ` + r + `px, 0px)`);
      }
    },
    setTransition(e) {
      let a = this;
      let t = a.slides;
      let i = a.$wrapperEl;
      if (t.transition(e), a.params.virtualTranslate && e !== 0) {
        let s = !1;
        t.transitionEnd(function () {
          if (!s && a && !a.destroyed) {
            s = !0,
              a.animating = !1;
            for (let e = [
                `webkitTransitionEnd`,
                `transitionend`
              ], t = 0; t < e.length; t += 1) {
              i.trigger(e[t]);
            }
          }
        });
      }
    }
  };
  let U = {
    setTranslate() {
      let e;
      let t = this;
      let a = t.$el;
      let i = t.$wrapperEl;
      let s = t.slides;
      let r = t.width;
      let n = t.height;
      let o = t.rtlTranslate;
      let l = t.size;
      let d = t.params.cubeEffect;
      let p = t.isHorizontal();
      let c = t.virtual && t.params.virtual.enabled;
      let u = 0;
      d.shadow && (p ? ((e = i.find(`.swiper-cube-shadow`)).length === 0 && (e = L(`<div class="swiper-cube-shadow"></div>`), i.append(e)), e.css({
        height: r + `px`
      })) : (e = a.find(`.swiper-cube-shadow`)).length === 0 && (e = L(`<div class="swiper-cube-shadow"></div>`), a.append(e)));
      for (let h = 0; h < s.length; h += 1) {
        let v = s.eq(h);
        let f = h;
        c && (f = parseInt(v.attr(`data-swiper-slide-index`), 10));
        let m = 90 * f;
        let g = Math.floor(m / 360);
        o && (m = -m, g = Math.floor(-m / 360));
        let b = Math.max(Math.min(v[0].progress, 1), -1);
        let w = 0;
        let y = 0;
        let x = 0;
        f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g),
          o && (w = -w),
          p || (y = w, w = 0);
        let T = `rotateX(` + (p ? 0 : -m) + `deg) rotateY(` + (p ? m : 0) + `deg) translate3d(` + w + `px, ` + y + `px, ` + x + `px)`;
        if (b <= 1 && b > -1 && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
          let E = p ? v.find(`.swiper-slide-shadow-left`) : v.find(`.swiper-slide-shadow-top`);
          let S = p ? v.find(`.swiper-slide-shadow-right`) : v.find(`.swiper-slide-shadow-bottom`);
          E.length === 0 && (E = L(`<div class="swiper-slide-shadow-` + (p ? `left` : `top`) + `"></div>`), v.append(E)),
            S.length === 0 && (S = L(`<div class="swiper-slide-shadow-` + (p ? `right` : `bottom`) + `"></div>`), v.append(S)),
            E.length && (E[0].style.opacity = Math.max(-b, 0)),
            S.length && (S[0].style.opacity = Math.max(b, 0));
        }
      }
      if (i.css({
          '-webkit-transform-origin': `50% 50% -` + l / 2 + `px`,
          '-moz-transform-origin': `50% 50% -` + l / 2 + `px`,
          '-ms-transform-origin': `50% 50% -` + l / 2 + `px`,
          'transform-origin': `50% 50% -` + l / 2 + `px`
        }), d.shadow) {
        if (p) {
          e.transform(`translate3d(0px, ` + (r / 2 + d.shadowOffset) + `px, ` + -r / 2 + `px) rotateX(90deg) rotateZ(0deg) scale(` + d.shadowScale + `)`);
        } else {
          let C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90);
          let M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2);
          let z = d.shadowScale;
          let P = d.shadowScale / M;
          let k = d.shadowOffset;
          e.transform(`scale3d(` + z + `, 1, ` + P + `) translate3d(0px, ` + (n / 2 + k) + `px, ` + -n / 2 / P + `px) rotateX(-90deg)`);
        }
      }
      let $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
      i.transform(`translate3d(0px,0,` + $ + `px) rotateX(` + (t.isHorizontal() ? 0 : u) + `deg) rotateY(` + (t.isHorizontal() ? -u : 0) + `deg)`);
    },
    setTransition(e) {
      let t = this.$el;
      this.slides.transition(e).find(`.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left`).transition(e),
        this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(`.swiper-cube-shadow`).transition(e);
    }
  };
  let K = {
    setTranslate() {
      for (let e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
        let s = t.eq(i);
        let r = s[0].progress;
        e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
        let n = -180 * r;
        let o = 0;
        let l = -s[0].swiperSlideOffset;
        let d = 0;
        if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
          let p = e.isHorizontal() ? s.find(`.swiper-slide-shadow-left`) : s.find(`.swiper-slide-shadow-top`);
          let c = e.isHorizontal() ? s.find(`.swiper-slide-shadow-right`) : s.find(`.swiper-slide-shadow-bottom`);
          p.length === 0 && (p = L(`<div class="swiper-slide-shadow-` + (e.isHorizontal() ? `left` : `top`) + `"></div>`), s.append(p)),
            c.length === 0 && (c = L(`<div class="swiper-slide-shadow-` + (e.isHorizontal() ? `right` : `bottom`) + `"></div>`), s.append(c)),
            p.length && (p[0].style.opacity = Math.max(-r, 0)),
            c.length && (c[0].style.opacity = Math.max(r, 0));
        }
        s.transform(`translate3d(` + l + `px, ` + d + `px, 0px) rotateX(` + o + `deg) rotateY(` + n + `deg)`);
      }
    },
    setTransition(e) {
      let a = this;
      let t = a.slides;
      let i = a.activeIndex;
      let s = a.$wrapperEl;
      if (t.transition(e).find(`.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left`).transition(e), a.params.virtualTranslate && e !== 0) {
        let r = !1;
        t.eq(i).transitionEnd(function () {
          if (!r && a && !a.destroyed) {
            r = !0,
              a.animating = !1;
            for (let e = [
                `webkitTransitionEnd`,
                `transitionend`
              ], t = 0; t < e.length; t += 1) {
              s.trigger(e[t]);
            }
          }
        });
      }
    }
  };
  let _ = {
    setTranslate() {
      for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
        let v = i.eq(u);
        let f = r[u];
        let m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier;
        let g = o ? p * m : 0;
        let b = o ? 0 : p * m;
        let w = -c * Math.abs(m);
        let y = o ? 0 : n.stretch * m;
        let x = o ? n.stretch * m : 0;
        Math.abs(x) < 0.001 && (x = 0),
          Math.abs(y) < 0.001 && (y = 0),
          Math.abs(w) < 0.001 && (w = 0),
          Math.abs(g) < 0.001 && (g = 0),
          Math.abs(b) < 0.001 && (b = 0);
        let T = `translate3d(` + x + `px,` + y + `px,` + w + `px)  rotateX(` + b + `deg) rotateY(` + g + `deg)`;
        if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
          let E = o ? v.find(`.swiper-slide-shadow-left`) : v.find(`.swiper-slide-shadow-top`);
          let S = o ? v.find(`.swiper-slide-shadow-right`) : v.find(`.swiper-slide-shadow-bottom`);
          E.length === 0 && (E = L(`<div class="swiper-slide-shadow-` + (o ? `left` : `top`) + `"></div>`), v.append(E)),
            S.length === 0 && (S = L(`<div class="swiper-slide-shadow-` + (o ? `right` : `bottom`) + `"></div>`), v.append(S)),
            E.length && (E[0].style.opacity = m > 0 ? m : 0),
            S.length && (S[0].style.opacity = -m > 0 ? -m : 0);
        }
      }(te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + `px 50%`);
    },
    setTransition(e) {
      this.slides.transition(e).find(`.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left`).transition(e);
    }
  };
  let Z = {
    init() {
      let e = this;
      let t = e.params.thumbs;
      let a = e.constructor;
      t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        }), ee.extend(e.thumbs.swiper.params, {
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
          watchSlidesVisibility: !0,
          watchSlidesProgress: !0,
          slideToClickedSlide: !1
        })), e.thumbs.swiperCreated = !0),
        e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
        e.thumbs.swiper.on(`tap`, e.thumbs.onThumbClick);
    },
    onThumbClick() {
      let e = this;
      let t = e.thumbs.swiper;
      if (t) {
        let a = t.clickedIndex;
        let i = t.clickedSlide;
        if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || a == null)) {
          let s;
          if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr(`data-swiper-slide-index`), 10) : a, e.params.loop) {
            let r = e.activeIndex;
            e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
            let n = e.slides.eq(r).prevAll(`[data-swiper-slide-index="` + s + `"]`).eq(0).index();
            let o = e.slides.eq(r).nextAll(`[data-swiper-slide-index="` + s + `"]`).eq(0).index();
            s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
          }
          e.slideTo(s);
        }
      }
    },
    update(e) {
      let t = this;
      let a = t.thumbs.swiper;
      if (a) {
        let i = a.params.slidesPerView === `auto` ? a.slidesPerViewDynamic() : a.params.slidesPerView;
        if (t.realIndex !== a.realIndex) {
          let s;
          let r = a.activeIndex;
          if (a.params.loop) {
            a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
            let n = a.slides.eq(r).prevAll(`[data-swiper-slide-index="` + t.realIndex + `"]`).eq(0).index();
            let o = a.slides.eq(r).nextAll(`[data-swiper-slide-index="` + t.realIndex + `"]`).eq(0).index();
            s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n;
          } else {
            s = t.realIndex;
          }
          a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0));
        }
        let l = 1;
        let d = t.params.thumbs.slideThumbActiveClass;
        if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop) {
          for (let p = 0; p < l; p += 1) {
            a.$wrapperEl.children(`[data-swiper-slide-index="` + (t.realIndex + p) + `"]`).addClass(d);
          }
        } else {
          for (let c = 0; c < l; c += 1) {
            a.slides.eq(t.realIndex + c).addClass(d);
          }
        }
      }
    }
  };
  let Q = [
    E,
    S,
    C,
    M,
    P,
    $,
    O,
    {
      name: `mousewheel`,
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: `container`
        }
      },
      create() {
        let e = this;
        ee.extend(e, {
          mousewheel: {
            enabled: !1,
            enable: A.enable.bind(e),
            disable: A.disable.bind(e),
            handle: A.handle.bind(e),
            handleMouseEnter: A.handleMouseEnter.bind(e),
            handleMouseLeave: A.handleMouseLeave.bind(e),
            lastScrollTime: ee.now()
          }
        });
      },
      on: {
        init() {
          this.params.mousewheel.enabled && this.mousewheel.enable();
        },
        destroy() {
          this.mousewheel.enabled && this.mousewheel.disable();
        }
      }
    },
    {
      name: `navigation`,
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: `swiper-button-disabled`,
          hiddenClass: `swiper-button-hidden`,
          lockClass: `swiper-button-lock`
        }
      },
      create() {
        let e = this;
        ee.extend(e, {
          navigation: {
            init: H.init.bind(e),
            update: H.update.bind(e),
            destroy: H.destroy.bind(e),
            onNextClick: H.onNextClick.bind(e),
            onPrevClick: H.onPrevClick.bind(e)
          }
        });
      },
      on: {
        init() {
          this.navigation.init(),
            this.navigation.update();
        },
        toEdge() {
          this.navigation.update();
        },
        fromEdge() {
          this.navigation.update();
        },
        destroy() {
          this.navigation.destroy();
        },
        click(e) {
          let t;
          let a = this;
          let i = a.navigation;
          let s = i.$nextEl;
          let r = i.$prevEl;
          !a.params.navigation.hideOnClick || L(e.target).is(r) || L(e.target).is(s) || (s ? t = s.hasClass(a.params.navigation.hiddenClass) : r && (t = r.hasClass(a.params.navigation.hiddenClass)), !0 === t ? a.emit(`navigationShow`, a) : a.emit(`navigationHide`, a), s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass));
        }
      }
    },
    {
      name: `pagination`,
      params: {
        pagination: {
          el: null,
          bulletElement: `span`,
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: `bullets`,
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent(e) {
            return e;
          },
          formatFractionTotal(e) {
            return e;
          },
          bulletClass: `swiper-pagination-bullet`,
          bulletActiveClass: `swiper-pagination-bullet-active`,
          modifierClass: `swiper-pagination-`,
          currentClass: `swiper-pagination-current`,
          totalClass: `swiper-pagination-total`,
          hiddenClass: `swiper-pagination-hidden`,
          progressbarFillClass: `swiper-pagination-progressbar-fill`,
          progressbarOppositeClass: `swiper-pagination-progressbar-opposite`,
          clickableClass: `swiper-pagination-clickable`,
          lockClass: `swiper-pagination-lock`
        }
      },
      create() {
        let e = this;
        ee.extend(e, {
          pagination: {
            init: N.init.bind(e),
            render: N.render.bind(e),
            update: N.update.bind(e),
            destroy: N.destroy.bind(e),
            dynamicBulletIndex: 0
          }
        });
      },
      on: {
        init() {
          this.pagination.init(),
            this.pagination.render(),
            this.pagination.update();
        },
        activeIndexChange() {
          this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
        },
        snapIndexChange() {
          this.params.loop || this.pagination.update();
        },
        slidesLengthChange() {
          this.params.loop && (this.pagination.render(), this.pagination.update());
        },
        snapGridLengthChange() {
          this.params.loop || (this.pagination.render(), this.pagination.update());
        },
        destroy() {
          this.pagination.destroy();
        },
        click(e) {
          let t = this;
          t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !L(e.target).hasClass(t.params.pagination.bulletClass) && (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit(`paginationShow`, t) : t.emit(`paginationHide`, t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
        }
      }
    },
    {
      name: `scrollbar`,
      params: {
        scrollbar: {
          el: null,
          dragSize: `auto`,
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: `swiper-scrollbar-lock`,
          dragClass: `swiper-scrollbar-drag`
        }
      },
      create() {
        let e = this;
        ee.extend(e, {
          scrollbar: {
            init: G.init.bind(e),
            destroy: G.destroy.bind(e),
            updateSize: G.updateSize.bind(e),
            setTranslate: G.setTranslate.bind(e),
            setTransition: G.setTransition.bind(e),
            enableDraggable: G.enableDraggable.bind(e),
            disableDraggable: G.disableDraggable.bind(e),
            setDragPosition: G.setDragPosition.bind(e),
            onDragStart: G.onDragStart.bind(e),
            onDragMove: G.onDragMove.bind(e),
            onDragEnd: G.onDragEnd.bind(e),
            isTouched: !1,
            timeout: null,
            dragTimeout: null
          }
        });
      },
      on: {
        init() {
          this.scrollbar.init(),
            this.scrollbar.updateSize(),
            this.scrollbar.setTranslate();
        },
        update() {
          this.scrollbar.updateSize();
        },
        resize() {
          this.scrollbar.updateSize();
        },
        observerUpdate() {
          this.scrollbar.updateSize();
        },
        setTranslate() {
          this.scrollbar.setTranslate();
        },
        setTransition(e) {
          this.scrollbar.setTransition(e);
        },
        destroy() {
          this.scrollbar.destroy();
        }
      }
    },
    {
      name: `parallax`,
      params: {
        parallax: {
          enabled: !1
        }
      },
      create() {
        ee.extend(this, {
          parallax: {
            setTransform: B.setTransform.bind(this),
            setTranslate: B.setTranslate.bind(this),
            setTransition: B.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit() {
          this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
        },
        init() {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTranslate() {
          this.params.parallax.enabled && this.parallax.setTranslate();
        },
        setTransition(e) {
          this.params.parallax.enabled && this.parallax.setTransition(e);
        }
      }
    },
    {
      name: `zoom`,
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: `swiper-zoom-container`,
          zoomedSlideClass: `swiper-slide-zoomed`
        }
      },
      create() {
        let i = this;
        let t = {
          enabled: !1,
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            $slideEl: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            $imageEl: void 0,
            $imageWrapEl: void 0,
            maxRatio: 3
          },
          image: {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0
          }
        };
        `onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out`.split(` `).forEach(function (e) {
            t[e] = X[e].bind(i);
          }),
          ee.extend(i, {
            zoom: t
          });
        let s = 1;
        Object.defineProperty(i.zoom, `scale`, {
          get() {
            return s;
          },
          set(e) {
            if (s !== e) {
              let t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0;
              let a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
              i.emit(`zoomChange`, e, t, a);
            }
            s = e;
          }
        });
      },
      on: {
        init() {
          this.params.zoom.enabled && this.zoom.enable();
        },
        destroy() {
          this.zoom.disable();
        },
        touchStart(e) {
          this.zoom.enabled && this.zoom.onTouchStart(e);
        },
        touchEnd(e) {
          this.zoom.enabled && this.zoom.onTouchEnd(e);
        },
        doubleTap(e) {
          this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
        },
        transitionEnd() {
          this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
        }
      }
    },
    {
      name: `lazy`,
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: `swiper-lazy`,
          loadingClass: `swiper-lazy-loading`,
          loadedClass: `swiper-lazy-loaded`,
          preloaderClass: `swiper-lazy-preloader`
        }
      },
      create() {
        ee.extend(this, {
          lazy: {
            initialImageLoaded: !1,
            load: Y.load.bind(this),
            loadInSlide: Y.loadInSlide.bind(this)
          }
        });
      },
      on: {
        beforeInit() {
          this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
        },
        init() {
          this.params.lazy.enabled && !this.params.loop && this.params.initialSlide === 0 && this.lazy.load();
        },
        scroll() {
          this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
        },
        resize() {
          this.params.lazy.enabled && this.lazy.load();
        },
        scrollbarDragMove() {
          this.params.lazy.enabled && this.lazy.load();
        },
        transitionStart() {
          let e = this;
          e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
        },
        transitionEnd() {
          this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
        }
      }
    },
    {
      name: `controller`,
      params: {
        controller: {
          control: void 0,
          inverse: !1,
          by: `slide`
        }
      },
      create() {
        let e = this;
        ee.extend(e, {
          controller: {
            control: e.params.controller.control,
            getInterpolateFunction: V.getInterpolateFunction.bind(e),
            setTranslate: V.setTranslate.bind(e),
            setTransition: V.setTransition.bind(e)
          }
        });
      },
      on: {
        update() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        resize() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        observerUpdate() {
          this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
        },
        setTranslate(e, t) {
          this.controller.control && this.controller.setTranslate(e, t);
        },
        setTransition(e, t) {
          this.controller.control && this.controller.setTransition(e, t);
        }
      }
    },
    {
      name: `a11y`,
      params: {
        a11y: {
          enabled: !0,
          notificationClass: `swiper-notification`,
          prevSlideMessage: `Previous slide`,
          nextSlideMessage: `Next slide`,
          firstSlideMessage: `This is the first slide`,
          lastSlideMessage: `This is the last slide`,
          paginationBulletMessage: `Go to slide {{index}}`
        }
      },
      create() {
        let t = this;
        ee.extend(t, {
            a11y: {
              liveRegion: L(`<span class="` + t.params.a11y.notificationClass + `" aria-live="assertive" aria-atomic="true"></span>`)
            }
          }),
          Object.keys(F).forEach(function (e) {
            t.a11y[e] = F[e].bind(t);
          });
      },
      on: {
        init() {
          this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
        },
        toEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        fromEdge() {
          this.params.a11y.enabled && this.a11y.updateNavigation();
        },
        paginationUpdate() {
          this.params.a11y.enabled && this.a11y.updatePagination();
        },
        destroy() {
          this.params.a11y.enabled && this.a11y.destroy();
        }
      }
    },
    {
      name: `history`,
      params: {
        history: {
          enabled: !1,
          replaceState: !1,
          key: `slides`
        }
      },
      create() {
        let e = this;
        ee.extend(e, {
          history: {
            init: R.init.bind(e),
            setHistory: R.setHistory.bind(e),
            setHistoryPopState: R.setHistoryPopState.bind(e),
            scrollToSlide: R.scrollToSlide.bind(e),
            destroy: R.destroy.bind(e)
          }
        });
      },
      on: {
        init() {
          this.params.history.enabled && this.history.init();
        },
        destroy() {
          this.params.history.enabled && this.history.destroy();
        },
        transitionEnd() {
          this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
        }
      }
    },
    {
      name: `hash-navigation`,
      params: {
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1
        }
      },
      create() {
        let e = this;
        ee.extend(e, {
          hashNavigation: {
            initialized: !1,
            init: q.init.bind(e),
            destroy: q.destroy.bind(e),
            setHash: q.setHash.bind(e),
            onHashCange: q.onHashCange.bind(e)
          }
        });
      },
      on: {
        init() {
          this.params.hashNavigation.enabled && this.hashNavigation.init();
        },
        destroy() {
          this.params.hashNavigation.enabled && this.hashNavigation.destroy();
        },
        transitionEnd() {
          this.hashNavigation.initialized && this.hashNavigation.setHash();
        }
      }
    },
    {
      name: `autoplay`,
      params: {
        autoplay: {
          enabled: !1,
          delay: 3000,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1
        }
      },
      create() {
        let t = this;
        ee.extend(t, {
          autoplay: {
            running: !1,
            paused: !1,
            run: W.run.bind(t),
            start: W.start.bind(t),
            stop: W.stop.bind(t),
            pause: W.pause.bind(t),
            onTransitionEnd(e) {
              t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener(`transitionend`, t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener(`webkitTransitionEnd`, t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
            }
          }
        });
      },
      on: {
        init() {
          this.params.autoplay.enabled && this.autoplay.start();
        },
        beforeTransitionStart(e, t) {
          this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
        },
        sliderFirstMove() {
          this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
        },
        destroy() {
          this.autoplay.running && this.autoplay.stop();
        }
      }
    },
    {
      name: `effect-fade`,
      params: {
        fadeEffect: {
          crossFade: !1
        }
      },
      create() {
        ee.extend(this, {
          fadeEffect: {
            setTranslate: j.setTranslate.bind(this),
            setTransition: j.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit() {
          let e = this;
          if (e.params.effect === `fade`) {
            e.classNames.push(e.params.containerModifierClass + `fade`);
            let t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            ee.extend(e.params, t),
              ee.extend(e.originalParams, t);
          }
        },
        setTranslate() {
          this.params.effect === `fade` && this.fadeEffect.setTranslate();
        },
        setTransition(e) {
          this.params.effect === `fade` && this.fadeEffect.setTransition(e);
        }
      }
    },
    {
      name: `effect-cube`,
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94
        }
      },
      create() {
        ee.extend(this, {
          cubeEffect: {
            setTranslate: U.setTranslate.bind(this),
            setTransition: U.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit() {
          let e = this;
          if (e.params.effect === `cube`) {
            e.classNames.push(e.params.containerModifierClass + `cube`),
              e.classNames.push(e.params.containerModifierClass + `3d`);
            let t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0
            };
            ee.extend(e.params, t),
              ee.extend(e.originalParams, t);
          }
        },
        setTranslate() {
          this.params.effect === `cube` && this.cubeEffect.setTranslate();
        },
        setTransition(e) {
          this.params.effect === `cube` && this.cubeEffect.setTransition(e);
        }
      }
    },
    {
      name: `effect-flip`,
      params: {
        flipEffect: {
          slideShadows: !0,
          limitRotation: !0
        }
      },
      create() {
        ee.extend(this, {
          flipEffect: {
            setTranslate: K.setTranslate.bind(this),
            setTransition: K.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit() {
          let e = this;
          if (e.params.effect === `flip`) {
            e.classNames.push(e.params.containerModifierClass + `flip`),
              e.classNames.push(e.params.containerModifierClass + `3d`);
            let t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0
            };
            ee.extend(e.params, t),
              ee.extend(e.originalParams, t);
          }
        },
        setTranslate() {
          this.params.effect === `flip` && this.flipEffect.setTranslate();
        },
        setTransition(e) {
          this.params.effect === `flip` && this.flipEffect.setTransition(e);
        }
      }
    },
    {
      name: `effect-coverflow`,
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0
        }
      },
      create() {
        ee.extend(this, {
          coverflowEffect: {
            setTranslate: _.setTranslate.bind(this),
            setTransition: _.setTransition.bind(this)
          }
        });
      },
      on: {
        beforeInit() {
          let e = this;
          e.params.effect === `coverflow` && (e.classNames.push(e.params.containerModifierClass + `coverflow`), e.classNames.push(e.params.containerModifierClass + `3d`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
        },
        setTranslate() {
          this.params.effect === `coverflow` && this.coverflowEffect.setTranslate();
        },
        setTransition(e) {
          this.params.effect === `coverflow` && this.coverflowEffect.setTransition(e);
        }
      }
    },
    {
      name: `thumbs`,
      params: {
        thumbs: {
          swiper: null,
          slideThumbActiveClass: `swiper-slide-thumb-active`,
          thumbsContainerClass: `swiper-container-thumbs`
        }
      },
      create() {
        ee.extend(this, {
          thumbs: {
            swiper: null,
            init: Z.init.bind(this),
            update: Z.update.bind(this),
            onThumbClick: Z.onThumbClick.bind(this)
          }
        });
      },
      on: {
        beforeInit() {
          let e = this.params.thumbs;
          e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
        },
        slideChange() {
          this.thumbs.swiper && this.thumbs.update();
        },
        update() {
          this.thumbs.swiper && this.thumbs.update();
        },
        resize() {
          this.thumbs.swiper && this.thumbs.update();
        },
        observerUpdate() {
          this.thumbs.swiper && this.thumbs.update();
        },
        setTransition(e) {
          let t = this.thumbs.swiper;
          t && t.setTransition(e);
        },
        beforeDestroy() {
          let e = this.thumbs.swiper;
          e && this.thumbs.swiperCreated && e && e.destroy();
        }
      }
    }
  ];
  return void 0 === T.use && (T.use = T.Class.use, T.installModule = T.Class.installModule),
    T.use(Q),
    T;
});
// # sourceMappingURL=swiper.min.js.map