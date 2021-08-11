import '../../../styles/BlogPage.css'
import '../../../styles/MainLayout.css'

import blogs from "../data/blogs"
import Title from '../../Title'

function BlogPage(){
  return(
    <div className="all ">
    <div className=" blogpage__container ">
    <Title title={'Blogs'} span={'Blogs'} />
    <div className="innerLayout blog">
    {blogs.map((blog)=>{
      return <div key={blog.id} className="blog__item">
        <div className="blog__image">
          <img src={blog.image} alt=""/>
        </div>
        <div className="title">
          <a href={blog.link}>
            {blog.title}
          </a>
        </div>
      </div>
    })}
    </div>


    </div>
    </div>
  )

}
export default BlogPage
