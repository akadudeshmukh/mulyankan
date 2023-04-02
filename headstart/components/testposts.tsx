
export default function PostComponent(props: any){
    const posts = props.posts;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">  
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{posts.title}</div>
        <p className="text-gray-700 text-base">
          {posts.body}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {
            posts.tags.map((val: string, i: number) => { 
            return <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" >{val}</span>
    })
        }    
      </div>
    </div>
      );
}