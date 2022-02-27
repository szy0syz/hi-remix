import { Link, Outlet } from 'remix';

export default function () {
  return (
    <div>
      <section>
        <h1>The Syntax Podcase</h1>
      </section>
      <aside>
        <nav>
          <ul>
            <li>
              <Link to="/syntax1/episode-1">Episode 1</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <Outlet />
    </div>
  );
}
