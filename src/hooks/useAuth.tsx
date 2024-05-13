import { useEffect, useState } from "react";

const useAuth = () => {
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(localStorage.id);
  }, []);

  return { id };
};

export default useAuth;
