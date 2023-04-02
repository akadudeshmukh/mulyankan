import PageLayout from "@/components/layout";
import PostComponent from "@/components/testposts";
const PostProps = (props: any) => {
  const resp = props.posts;
  console.log(resp);
  return (
    <PageLayout title="API Data">
      <PostComponent posts={resp} />
      <PostComponent posts={resp} />
    </PageLayout>    
  );
}

export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts/')
  const data = await res.json()

  return data
}


export async function getStaticProps(){
  const resp = await fetch('http://localhost:3000/api/posts');
  var json = await resp.json();
  console.log(json);
  return {
    props: {
      posts: json
    }
  };
}

export default PostProps;