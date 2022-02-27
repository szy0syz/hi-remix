import { Link, Outlet, useLoaderData } from 'remix';

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

  console.log(`⭐️ podcaseName: ${podcaseName}`);

  return (
    <div>
      <section>
        <h1>The Syntax Podcase</h1>
      </section>
      <aside>
        <nav>
          <ul>
            {episodes.map((episode: any) => (
              <li key={episode.link}>
                <Link to={`/syntax/${episode.link}`}>{episode.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
}
