import { Link, Outlet, useLoaderData } from 'remix';
import styles from '~/styles/syntax.css';
import { IShow } from './syntax/$show';

// Set <Link> tags for this page
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
}

// incordination with useMatches()
export const handle = {
  // object you can anything in
}

// Sets the meta data for a route
export function meta() {
  return {
    title: 'The Syntax Podcast',
    'og:title': 'The Syntax Podcase',
  };
}

export function headers() {
  // return http headers
  // mose common use is caching
}

export let loader = async () => {
  const response = await fetch('https://syntax.fm/api/shows');
  const shows: IShow[] = await response.json();

  return { shows, podcaseName: 'The Syntax Podcase' };
};

export default function () {
  let { shows = [], podcaseName } =
    useLoaderData<{ podcaseName: string; shows: IShow[] }>();

  return (
    <div>
      <section>
        <h1>{podcaseName}</h1>
      </section>
      <section className="cols">
        <aside>
          <nav>
            <ul>
              {shows.map((show) => (
                <li key={show.number}>
                  <Link to={`/syntax/${show.number}`}>
                    #={show.number}: {show.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </section>
      <Outlet />
    </div>
  );
}
