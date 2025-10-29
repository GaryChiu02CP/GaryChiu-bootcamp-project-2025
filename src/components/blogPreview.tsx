import React from 'react';
import style from './blogPreview.module.css';
import { Blog } from "@/app/blogData";

export default function BlogPreview(props: Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.blogPreview}>
        <h2> {props.title} </h2>
        <h4> Posted on {props.date} </h4>
        <img src={props.image} alt={props.imageAlt} width={500} height={300} />
        <p>{props.description}</p>
	</div>  
  );
}