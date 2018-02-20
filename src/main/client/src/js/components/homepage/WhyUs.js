import React from 'react';
import FaTags from 'react-icons/lib/fa/tags';
import FaMoney from 'react-icons/lib/fa/money';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaWrench from 'react-icons/lib/fa/wrench';
import { BtnLink } from "../reusables/Buttons";

const WhyUs = () => {

    const content = [
        {
            title: "Financing made easy",
            content: "Our stress-free finance department that can find financial solutions to save you money.",
            icon: <FaMoney size={45}/>
        },
        {
            title: "Wide range of brands",
            content: "Our stress-free finance department that can find financial solutions to save you money.",
            icon: <FaTags size={45}/>
        },
        {
            title: "Trusted by thousands",
            content: "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
            icon: <FaThumbsOUp size={45}/>
        },
        {
            title: "Car service & maintenance",
            content: "Our service department maintain your car to stay safe on the road for many more years.",
            icon: <FaWrench size={45}/>
        }
    ];

    return(
        <div className="why-us container-fluid py-4 bg-light px-lg-5">
            <div className="text-center">
                <h2 className="font-weight-bold mb-lg-5">WHY CHOOSE US</h2>
            </div>
            <div className="row">
                {
                    content.map((each, index) => {
                        return(
                            <div key={index} className="col-md-3 d-lg-flex mb-2">
                                <div className="my-3 my-lg-0 mx-lg-3">
                                    {each.icon}
                                </div>
                                <div>
                                    <h6 className="font-weight-bold">{each.title}</h6>
                                    <p className="text-muted mb-3">{each.content}</p>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
            <div className="d-flex w-100 my-4">
                <BtnLink title="LEARN MORE" to="/about-us" classes="btn-primary d-block mx-auto"/>
            </div>
        </div>
    )
};

export default WhyUs;