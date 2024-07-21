import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import axios from "axios";
import Card from "./Card";

const Home = () => {

    const checkoutHandler= async(amount)=>{

        const {data:{key}} = await axios.get("https://razorpaypayment-mern-backend.onrender.com/api/getKey")

        const { data:{order} } = await axios.post("https://razorpaypayment-mern-backend.onrender.com/api/checkout", {amount})


        const options = {
            key, 
            amount: order.amount, 
            currency: "INR",
            name: "Dhairya Pandya",
            description: "Test Transaction",
            image: "https://avatars.githubusercontent.com/u/119549418?s=96&v=4",
            order_id: order.id, 
            callback_url: "https://razorpaypayment-mern-backend.onrender.com/api/paymentverfication",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        };
        var razor = new window.Razorpay(options);
            razor.open();
        
    }
    

  return (
    <Box>
        <Stack h={"100vh"} justifyContent="center" alignItems="center" direction={["column", "row"]}>
            <Card amount={5000} img={"https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}  checkoutHandler={checkoutHandler}/>


            <Card amount={3000} img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMyro3RO6S7hMgbV1ED-62kwhv4aORTTN8-uDx3E0wlgUrMLX1RucmUa0FlQ&s"}  checkoutHandler={checkoutHandler}/>
        </Stack>
    </Box>
  );
};

export default Home;
