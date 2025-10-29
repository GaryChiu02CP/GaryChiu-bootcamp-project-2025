import Image from 'next/image';
import bai from "../bai.jpg";

export default function blogs() {
  return (
    <main>
        <h1 className="page-title">Portfolio</h1>
        <div className="project">
            <a href="index.html"><Image src={bai} alt="An image of a bike in front of a sunset." width = "300" height = "200"/></a>
        </div>
        <div className="project-details">
            <p className="project-name">Personal Website</p>
            <p className="project-description">Description of project.</p>
            <a href="index.html">Learn More</a>
        </div>
    </main>
  )
}