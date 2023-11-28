
export function PostsList({ posts }) {
    console.log(posts)
    return (
        <>
            {posts.map(el => {
                return (
                  <ul key={el.id}>
                    <a href={el.article_url}>{el.title}</a>
                    <img src={el.main_image} width={500} />
                  </ul>
                );
        })}
        </>
    )
};
