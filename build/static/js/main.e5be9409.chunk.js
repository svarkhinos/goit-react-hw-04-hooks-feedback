(this['webpackJsonpgoit-react-hw-04-hooks-feedback'] =
  this['webpackJsonpgoit-react-hw-04-hooks-feedback'] || []).push([
  [0],
  [
    ,
    ,
    function (e, t, c) {
      e.exports = { count: 'Statistics_count__1_WHI' };
    },
    ,
    ,
    function (e, t, c) {
      e.exports = {
        control: 'FeedbackOptions_control__1XtPy',
        btn: 'FeedbackOptions_btn__2UzQ2',
      };
    },
    ,
    function (e, t, c) {
      e.exports = { section: 'Section_section__bCgQ6' };
    },
    function (e, t, c) {
      e.exports = { message: 'Notification_message__2slME' };
    },
    ,
    ,
    ,
    ,
    function (e, t, c) {},
    ,
    function (e, t, c) {
      'use strict';
      c.r(t);
      var n = c(1),
        s = c.n(n),
        a = c(6),
        o = c.n(a),
        r = (c(13), c(3)),
        i = c(5),
        j = c.n(i),
        b = c(0),
        u = function (e) {
          var t = e.options,
            c = e.onLeaveFeedback;
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsx)('div', {
              className: j.a.control,
              children: t.map(function (e, t) {
                return Object(b.jsx)(
                  'button',
                  {
                    type: 'button',
                    className: j.a.btn,
                    onClick: function () {
                      return c(t);
                    },
                    children: e,
                  },
                  t,
                );
              }),
            }),
          });
        },
        l = c(2),
        d = c.n(l),
        O = function (e) {
          var t = e.good,
            c = e.neutral,
            n = e.bad,
            s = e.total,
            a = e.positivePercentage;
          return Object(b.jsxs)('div', {
            children: [
              Object(b.jsxs)('p', {
                children: [
                  'Good: ',
                  Object(b.jsx)('span', { className: d.a.count, children: t }),
                ],
              }),
              Object(b.jsxs)('p', {
                children: [
                  'Neutral: ',
                  Object(b.jsx)('span', { className: d.a.count, children: c }),
                ],
              }),
              Object(b.jsxs)('p', {
                children: [
                  'Bad: ',
                  Object(b.jsx)('span', { className: d.a.count, children: n }),
                ],
              }),
              Object(b.jsxs)('p', {
                children: [
                  'Total: ',
                  Object(b.jsx)('span', { className: d.a.count, children: s }),
                ],
              }),
              Object(b.jsxs)('p', {
                children: [
                  'Positive feedback:',
                  ' ',
                  Object(b.jsxs)('span', {
                    className: d.a.count,
                    children: [a, ' %'],
                  }),
                ],
              }),
            ],
          });
        },
        h = c(7),
        x = c.n(h),
        p = function (e) {
          var t = e.title,
            c = e.children;
          return Object(b.jsxs)('section', {
            className: x.a.section,
            children: [t && Object(b.jsx)('h2', { children: t }), ' ', c],
          });
        },
        f = c(8),
        m = c.n(f),
        k = function (e) {
          var t = e.message;
          return Object(b.jsx)(b.Fragment, {
            children: Object(b.jsx)('p', {
              className: m.a.message,
              children: t,
            }),
          });
        },
        g = function () {
          var e = Object(n.useState)(0),
            t = Object(r.a)(e, 2),
            c = t[0],
            s = t[1],
            a = Object(n.useState)(0),
            o = Object(r.a)(a, 2),
            i = o[0],
            j = o[1],
            l = Object(n.useState)(0),
            d = Object(r.a)(l, 2),
            h = d[0],
            x = d[1],
            f = Object(n.useState)(0),
            m = Object(r.a)(f, 2),
            g = m[0],
            v = m[1],
            _ = Object(n.useState)(0),
            N = Object(r.a)(_, 2),
            S = N[0],
            w = N[1];
          return (
            Object(n.useEffect)(
              function () {
                v(c + i + h), w(Math.round((c / g) * 100));
              },
              [c, i, h, g],
            ),
            Object(b.jsxs)('div', {
              children: [
                'Homework-4',
                Object(b.jsx)(p, {
                  title: 'Please leave feedback',
                  children: Object(b.jsx)(u, {
                    options: ['good', 'neutral', 'bad'],
                    onLeaveFeedback: function (e) {
                      switch (e) {
                        case 0:
                          s(function (e) {
                            return e + 1;
                          });
                          break;
                        case 1:
                          j(function (e) {
                            return e + 1;
                          });
                          break;
                        case 2:
                          x(function (e) {
                            return e + 1;
                          });
                          break;
                        default:
                          return;
                      }
                    },
                  }),
                }),
                Object(b.jsx)(p, {
                  title: 'Statistics',
                  children:
                    0 === g
                      ? Object(b.jsx)(k, { message: 'No feedback given' })
                      : Object(b.jsx)(O, {
                          good: c,
                          neutral: i,
                          bad: h,
                          total: g,
                          positivePercentage: S,
                        }),
                }),
              ],
            })
          );
        };
      o.a.render(
        Object(b.jsx)(s.a.StrictMode, { children: Object(b.jsx)(g, {}) }),
        document.getElementById('root'),
      );
    },
  ],
  [[15, 1, 2]],
]);
//# sourceMappingURL=main.e5be9409.chunk.js.map
