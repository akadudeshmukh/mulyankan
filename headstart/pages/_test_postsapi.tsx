import Layout from "@/components/Layout/Layout";
import PostComponent from "@/components/testposts";
// const PostProps = (props: any) => {
//   const resp = props.posts;
//   console.log(resp);
//   return (
//     <Layout title="API Data">
//       <PostComponent posts={resp} />
//       <PostComponent posts={resp} />
//     </Layout>    
//   );
// }

const PostProps = () => {  
  return (<></>)
}

export default PostProps;


// export async function getStaticProps(){
//   const resp = await fetch('http://localhost:3000/api/posts');
//   var json = await resp.json();
//   console.log(json);
//   return {
//     props: {
//       posts: json
//     }
//   };
// }

