import { useEffect } from 'react';
import {useNavigate} from "react-router-dom";


export default function RedirectToMinhaApp() {
    const navigate = useNavigate();
  
    useEffect(() => {
  
      navigate('/minha-app', { replace: true });
    }, [navigate]);
  
    return null;
  }