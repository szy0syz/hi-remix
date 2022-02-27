import { Link } from 'remix';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1 style={{ color: 'rgba(0,0,0,0.7)' }}>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/syntax">Syntax</Link>
        </li>
      </ul>
    </div>
  );
}
