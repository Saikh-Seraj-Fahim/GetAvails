"use client"
import Footer from "@/myComponents/footer";
import HomePageHero from "@/myComponents/HomePageHero";
import NavBar from "@/myComponents/NavBar";

export default function HomePage(){
    return(
        <div>
            <NavBar/>
            <HomePageHero/>
            <Footer/>
        </div>
    );
}