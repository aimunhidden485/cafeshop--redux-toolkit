import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMeals } from "../redux/features/mealSlice";
import { useGetMealQuery } from "../apiSlice";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BreakfastSection from "./BreakfastSection";
import Blogs from "./Blogs";

const Home = () => {
        const {isLoading, data, isError}=useGetMealQuery()
        console.log(data)
//  const state=useSelector(state=>state.meals)
//  const dispatch=useDispatch()
//  console.log(state);
//  useEffect(()=>{
// dispatch(getMeals())
//  },[])
        return (
                <div  style={{backgroundImage: "url('https://i.ibb.co/sbm06W6/cafe1-1.jpg')",  backgroundSize:'cover'}} className='h-screen relative'>
                       <Navbar/>
                       <Banner/>
                      <BreakfastSection/>
                      <Blogs/>
                </div>
        );
};

export default Home;