import Layout from "@/components/Layout/Layout";
import TrandyProducts_d from "@/components/PageComponents/TrandyProducts_d";

const PostProdutcs = (props: any) => {
  const resp = props.posts;
  console.log(resp);
  return (
    <Layout title="API Data">
      {/* <TrandyProducts_d posts={resp} /> */}
    </Layout>    
  );
}

export async function getStaticProps(){
  const resp = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT+'/api/product');
  var json = await resp.json();
  console.log(json);
  return {
    props: {
      posts: json
    }
  };
}

export default PostProdutcs;