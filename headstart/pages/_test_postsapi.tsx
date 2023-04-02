import Layout from "@/components/Layout/Layout";
import PostComponent from "@/components/testposts";
const PostProps = (props: any) => {
  const resp = props.posts;
  console.log(resp);
  return (
    <Layout title="API Data">
      <PostComponent posts={resp} />
      <PostComponent posts={resp} />
    </Layout>    
  );
}

export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://.../posts/')
  const data = await res.json()

  return data
}


export async function getStaticProps(){
  const resp = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT+'/api/posts');
  var json = await resp.json();
  console.log(json);
  return {
    props: {
      posts: json
    }
  };
}

export default PostProps;