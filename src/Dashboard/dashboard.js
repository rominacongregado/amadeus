import { Link } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="heroes-links">
      <Link>
        <div className="module hero">
          <h4>Heroe</h4>
        </div>
      </Link>
      <Link>
        <div className="module hero">
          <h4>Heroe</h4>
        </div>
      </Link>
      <Link>
        <div className="module hero">
          <h4>Heroe</h4>
        </div>
      </Link>
      <Link>
        <div className="module hero">
          <h4>Heroe</h4>
        </div>
      </Link>
    </div>
  );
}
