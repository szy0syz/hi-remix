# hi-remix

## Notes

### create pages

- 基本和 Next.js 一样，可以不需要引入 react-jsx
- 页面跳转也是一样的用 `<Link to="/syntax">` 标签

```js
createElement(
  import_remix3.Link,
  {
    to: '/syntax',
  },
  'Syntax'
);
```

### nested layouts

出乎意料，在remix里竟然用 `<Outlet />` 完成嵌套路由，但有个前提就是url前缀要一致

- `/syntax/sp1`  ✅
- `/syntax1/sp1` ❎
