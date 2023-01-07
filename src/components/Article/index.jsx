import Post from '../Post'

function Article() {
  return (
    <section className='container'>
      <h3>Article</h3>
      <div className='mt-5 container-posts'>
        <Post subtitle="tecnologia" title="O guia definitivo sobre o Blog" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos quasi veritatis facilis, sint rerum, maiores nobis dicta nulla dolor obcaecati repellat modi eum itaque, quas est nesciunt excepturi minima?
        </Post>
        <Post subtitle="fotografia" title="Quais as melhores câmeras para 2023" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni unde reiciendis sunt temporibus eius quos nostrum debitis eum voluptatibus in velit earum, rem a praesentium ut ea molestias sit.
        </Post>
        <Post subtitle="cinema" title="Os melhores filmes em 2023" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi magni unde reiciendis sunt temporibus eius quos nostrum debitis eum voluptatibus in velit earum, rem a praesentium ut ea molestias sit.
        </Post>
      </div>
    </section>
  )
}

export default Article