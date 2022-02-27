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

> 说实话初次使用，并没发现有什么好的？可能要再用用才知道作者的用意。

### loader

> 这样的获取数据方式我喜欢。

```js
export let loader = () => {
  return {
    podcaseName: 'The Syntax Podcase',
    episodes: [
      {
        title: 'Episode 1',
        link: 'episode-1',
      },
      {
        title: 'Episode 2',
        link: 'episode-2',
      },
    ],
  };
};

export default function () {
  let { podcaseName, episodes } = useLoaderData();

  return <></>
}
```

### parameterized-routes

> 获取路由参数也是loader，竟然那么巧妙。

```ts
export let loader = ({ params }: any) => {
  return params.slug;
};

export default function () {
  const slug = useLoaderData();

  return <div>({slug})</div>;
}
```