import { useLoaderData } from "remix";

export let loader = ({ params }: any) => {
  return params.slug;
};

export default function () {
  const slug = useLoaderData();

  return <div>({slug})</div>;
}
