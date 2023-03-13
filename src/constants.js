export const slider = `
query{
  slider{
   slider_images{
    directus_files_id{
     id
   }
   }
 }
 }
 `;

export const About = `
 query{
  About{
   About_heading
   About_para
 }
 }`;

export const Gallery = `
 query{
  Gallery{
   gallery_images{
     directus_files_id{
       id
     }
   }
 }
 }
`;

export const Topper = `
query{
  Topper{
    Topper_name
   Topper_image
   {
     id
   }
 }
 }`;

export const Notice = `
 query{
  Notice{
  Notice1_Date
   Notice1_Data
    Notice2_Date
   Notice2_data
   Notice3_Date
   Notice3_Data
   Notice4_Date
   Notice4_Data
 }
 }`;

export const Blog = `
 query{
  Blogs{
    id
    Blog_description
    blog_para
    blog_heading
    Blog_date
    blog_image
    {
      id
    }
  }
  }
  
  `;

  export const Blog_right=`
  query{
    Blog_right{
      right_title
      right_img{
        id
      }
    }
    }
  `
  export const Blogright=`
  query{
    Blog_right{
      right_description
      right_title
      right_img{
        id
      }
    }
  }
  `