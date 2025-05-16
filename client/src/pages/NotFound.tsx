
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold font-serif text-robin mb-6">404</h1>
        <p className="text-2xl text-olive mb-8">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you were trying to access may have been moved or deleted, or you might have mistyped the URL.
        </p>
        <Button asChild className="bg-robin hover:bg-robin/80 text-white">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
