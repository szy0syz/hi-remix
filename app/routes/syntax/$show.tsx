import { useLoaderData } from 'remix';

export let loader = async ({ params }: any) => {
  const response = await fetch('https://syntax.fm/api/shows/' + params.show);
  return response.json();
};

export default function () {
  const show = useLoaderData();

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
