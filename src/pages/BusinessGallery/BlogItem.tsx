import React from 'react';

interface BlogItemProps {
  imageSrc: string;
  date: string;
  month: string;
  title: string;
  description: string;
  category: string;
  comments: string;
}

const BlogItem: React.FC<BlogItemProps> = ({ imageSrc, date, month, title, description, category, comments }) => {
  return (
    <article className="blog_item">
      <div className="blog_item_img">
        <img className="card-img rounded-0" src={imageSrc} alt={title} />
        <a href="#" className="blog_item_date">
          <h3>{date}</h3>
          <p>{month}</p>
        </a>
      </div>
      <div className="blog_details">
        <a className="d-inline-block" href="blog_details.html">
          <h2 className="blog-head" style={{ color: '#2d2d2d' }}>{title}</h2>
        </a>
        <p>{description}</p>
        <ul className="blog-info-link">
          <li><a href="#"><i className="fa fa-user"></i> {category}</a></li>
          <li><a href="#"><i className="fa fa-comments"></i> {comments}</a></li>
        </ul>
      </div>
    </article>
  );
};

export default BlogItem;
