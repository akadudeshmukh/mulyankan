import Image from "next/image";
import Link from "next/link";

const Posts = () => {
    const data = {"id":1,"title":"His mother had always taught him","body":"His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.","userId":9,"tags":["history","american","crime"],"reactions":2};
    return(
<div className="max-w-sm rounded overflow-hidden shadow-lg">  
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{data.title}</div>
    <p className="text-gray-700 text-base">
      {data.body}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    {
        data.tags.map((val: string, i) => { 
        return <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" key={i}>{val}</span>
})
    }    
  </div>
</div>
    );
}

export default Posts;