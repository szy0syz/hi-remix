import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix'
import styles from '~/styles/syntax/show.css';

export interface IShow {
  number: number;
  title: string;
  html: string;
  url: string;
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export let loader: LoaderFunction = async ({ params }: any) => {
  const response = await fetch('https://syntax.fm/api/shows/' + params.show);
  return response.json();
};

export default function () {
  const show = useLoaderData<IShow>();

  return (
    <section>
      <h1>
        #={show.number}: {show.title}
      </h1>
      <audio src={show.url} />
      <div dangerouslySetInnerHTML={{ __html: show.html }}></div>
    </section>
  );
}
