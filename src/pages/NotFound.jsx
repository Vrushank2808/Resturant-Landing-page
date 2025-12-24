import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-page">
            <div className="not-found-content">
                <div className="error-code">404</div>
                <h1>Page Not Found</h1>
                <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
                <Link to="/" className="home-btn">
                    <span>Back to Home</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
            <div className="decoration">
                <div className="plate"></div>
                <div className="utensils">
                    <div className="fork"></div>
                    <div className="knife"></div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
