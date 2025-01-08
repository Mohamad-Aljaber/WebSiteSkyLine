import React from "react";
import BlogItem from "./BlogItem";
import BlogPagination from "./BlogPagination";

import ProjectPhotos from "./ProjectPhotos.tsx";
import TagCloudWidget from "./TagCloudWidget.tsx";

const blogItemsData = [
  {
    imageSrc: "assets/img/blog/single_blog_1.png",
    date: "2024",
    month: "Jan",
    title: "FSN Credit Store",
    description:
      "A store for agents who provide credit recharge and mobile number reactivation services, where an integrated system is automated between FSN and the company’s authorized agents.",
    category: " Systems and balance",
    comments: "13 Comments",
  },

  {
    imageSrc: "assets/img/blog/single_blog_2.png",
    date: "2024",
    month: "Mar",
    title:
      " Tawsella StarTaxi management system with applications for user and driver ",
    description:
      "Mobile application (driver-user): A request is sent to obtain a service (transportation - car rental) from the company providing the services and enabling the driver to monitor the customer on the map. A chat can also be opened between the driver and the user. Control panel: To manage drivers and users and monitor drivers on the map permanently and effectively, in addition to an accounting section to adjust drivers' financial accounts and generate weekly and on-demand reports. In addition to many scheduled and distinctive operations in the back-end section that the average user does not see. In addition to many other features that support the project and increase its efficiency.",
    category: " system with applications",
    comments: "30 Comments",
  },

  {
    imageSrc: "assets/img/blog/single_blog_3.png",
    date: "2024",
    month: "Apr",
    title: "Store",
    description:
      "An online store to sell different types of products and provide different services within an integrated and effective system",
    category: "Store",
    comments: "03 Comments",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="blog_area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="blog_left_sidebar">
              {blogItemsData.map((item, index) => (
                <BlogItem
                  key={index}
                  imageSrc={item.imageSrc}
                  date={item.date}
                  month={item.month}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  comments={item.comments}
                />
              ))}
              <BlogPagination />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              {/* <SearchWidget /> */}
              <TagCloudWidget />
              <ProjectPhotos />
              {/* <NewsletterWidget /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
