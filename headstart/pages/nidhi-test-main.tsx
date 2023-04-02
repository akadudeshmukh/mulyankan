import Layout from "@/components/Layout/Layout";

const Posts = () => {
    const data = {"id":1,"title":"This is a test page fdgdf","body":"His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.","userId":9,"tags":["history","american","crime"],"reactions":2};
    return(
        <Layout title="test">
            <div className="row bg-secondary py-2 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center">
                    <a className="text-dark" href="">FAQs</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark" href="">Help</a>
                    <span className="text-muted px-2">|</span>
                    <a className="text-dark" href="">Support</a>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-dark px-2" href="">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-dark px-2" href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-dark px-2" href="">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-dark px-2" href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-dark pl-2" href="">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
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
</Layout>
    );
}

export default Posts;