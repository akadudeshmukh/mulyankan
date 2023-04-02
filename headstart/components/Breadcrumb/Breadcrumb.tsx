import useSWR from 'swr'
import Link from "next/link";

type Props = {
    page: string,
    category: string
}

const Breadcrumb = (props: Props) => {    
    return(
    <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column justify-content-center" style={{minHeight: "100px"}}>            
            <div className="d-inline-flex">
                <p className="m-0" style={{color: "#D19C97"}}>
                    <Link href="/" title="Home">Home</Link>
                </p>
                <p className="m-0 px-2">|</p>
                <p className="m-0" style={{color: "#D19C97"}}>
                    <Link href={"/" + props.category} title="Home">{props.category.toLocaleUpperCase()}</Link>
                </p>
                <p className="m-0 px-2">|</p>
                <p className="m-0">{props.page}</p>
            </div>
        </div>
    </div>
    );
}

export default Breadcrumb;