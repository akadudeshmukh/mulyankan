import { useState } from "react";


//const SubscriptionForm = ({success}:{success:()=>void}) =>{
const SubscriptionForm = ({success}:{success:(email:string)=>void}) =>{   
    //handle form submit event
    const handleSubmit =async (event:any)=>{        
        //stop refreshing the page on submit
        event.preventDefault()
        const data={
            email:event.target.email.value
        }
        const jsonResult=JSON.stringify(data);

        const endPoint='https://sample-apis.azurewebsites.net/api/open/subscribe';
        const options={
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:jsonResult
        }

        //submit the form to API
        const resp=await fetch(endPoint,options);      
        resp.status==201?success(event.target.email.value):'';
    }
    return(
        <>
    
    <div className="container-fluid bg-secondary my-5">
        <div className="row justify-content-md-center py-5 px-xl-5">
            <div className="col-md-6 col-12 py-5">
                <div className="text-center mb-2 pb-2">
                    <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">Stay Updated</span></h2>
                    <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</p>
                </div>
                <form onSubmit={handleSubmit} >
                    <div className="input-group">
                    <label htmlFor="email"></label>
                    <input type="text" required id="email" name="email" className="form-control border-white p-4" placeholder="Email Goes Here" />
                        
                        <div className="input-group-append">
                            <button className="btn btn-primary px-4"  type="submit">Subscribe</button>
                        </div>
                    </div>
                </form>               
            </div>
        </div>
    </div>
   
        </>
    )
}

type SubscriptionProps={
    title:string,
    desc:string
}
const Subscription = (props:SubscriptionProps)=>{
    const [formSubmitted,setFormSubmitted]=useState(false)
    const [emailadd,setemailadd]=useState("")
    return(
        <>
        {/* {!formSubmitted && <SubscriptionForm success={()=>setFormSubmitted(true)}></SubscriptionForm> } */}
        {!formSubmitted  && <SubscriptionForm success={(email:string)=>{
            setFormSubmitted(true)
            setemailadd(email)
        }}></SubscriptionForm> }
        {formSubmitted &&
        
            <div className="container-fluid bg-secondary my-5">
            <div className="row justify-content-md-center py-5 px-xl-5">
                <div className="col-md-6 col-12 py-5">
                    <div className="text-center mb-2 pb-2">
                        <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">{props.title}</span></h2>
                        <p>{props.desc}</p>
                    </div>
                    <div className="text-center mb-2 pb-2">                      
                        {/* <p>You have subscribed!</p> */}
                        <p> Thank you. You have subscribed successfully with {emailadd}</p>
                    </div>       
                </div>
            </div>
        </div>
        }

        </>
    )
}

export default Subscription;
