import React, { useContext, useEffect } from 'react'
import './Verify.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { StoreContext } from '../../components/context/StoreContext';
import axios from 'axios';
const Verify = () => {
    const [searchParams,setSearchParams]=useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    const {url} = useContext(StoreContext);
    const navigate = useNavigate();

    const verifyPayment = async ()=>{
        const response = await axios.post(url+"/api/order/verify",{success,orderId});
        if (response.data.success) {
            navigate("/myorders");
        }
        else{
            navigate("/")
        }
    }
    useEffect(()=>{
        verifyPayment();
    },[])
    
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //       navigate('/my-orders'); // Redirect to the "My Orders" page
    //     }, 5000); // 5 seconds delay
    
    //     return () => clearTimeout(timer); // Cleanup the timer on component unmount
    //   }, [navigate]);

  return (
    <div className='verify'>
        <div className="spinner">

        </div>
      
    </div>
  )
}

export default Verify
