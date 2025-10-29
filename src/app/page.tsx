import Image from 'next/image';
import bai from "./bai.jpg";

export default function Home() {
  return (
		<div>
			<h1 className="page-title">Home</h1>
            <Image src={bai} alt="An image of a bike in front of a sunset." width = "300" height = "200"/>
            <div className ="about">
                <div className ="about-image"></div>
                <div className ="about-text">
                    <p>Hello, my name is <strong>Gary Chiu</strong>. I come from Elk Grove (next to Sacramento) and I'm a 2nd year in <em>Computer Science</em>.</p>
                    <p>A fun fact about me is that I have a massive birthmark on my left shoulder.</p>
                    <p>I love doing any kind of sports from wrestling to table tennis and I love playing weirdo characters in fighting games.</p>
                </div>
            </div>
		</div>
		) 
} 