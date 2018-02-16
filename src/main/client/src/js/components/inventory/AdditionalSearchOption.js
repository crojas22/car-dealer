import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import FaCheckCircle from "react-icons/lib/fa/check-circle";
import { fetchData, getData } from "../../actions";
import { ADD_TO_URL } from "../../types/actionTypes";
import { fetchDataFunction } from "../../functions/HelperFunctions";
import OnOff from "../../hoc/OnOff";

const AdditionalSearchOption = ({active, url, index, getData, selectedType, clickHandle, sort, fetchData, search, color, title, counter}) => {
    const clickHandles = (e, variable) => {
        if (active && !url.join("").includes(variable)) {
            let uri = [...url];
            uri[index] = `${variable}=${e.target.innerHTML}&`;
            getData(uri, ADD_TO_URL);
            getData(e.target.innerHTML, selectedType);
            clickHandle();
            fetchDataFunction(uri, sort.sortBy, sort.direction, fetchData);
        }
    };

    const displayInfo = (object={}, variable) => {
        const obj = object[variable] ? object[variable] : {};
        return Object.keys(obj).map(each => {
            return(
                <li className="pb-2" key={each}>
                    <div className="each">
                        <FaCheckCircle color={each}/>
                        <span onClick={e => clickHandles(e, search)}>
                            {
                                each
                            }
                        </span>
                    </div>
                    <div className="badge badge-secondary rounded-0">
                        {
                            obj[each]
                        }
                    </div>
                </li>
            )
        })
    };

    const style = {
        backgroundColor: color
    };

    return(
        <div className="additional-search col-md-6 col-sm-6 col-lg-12 mt-4 px-2">
            <div className="d-flex justify-content-between py-2 px-3 bg-light border" onClick={clickHandle}>
                <div className="d-flex">
                    {
                        title
                    }
                    {
                        url.join("").includes(search) ? <div style={style}> </div> : null
                    }
                </div>
                <div>
                    {
                        active ? "-" : "+"
                    }
                </div>
            </div>
            {
                active ?
                    <ul className="bg-grey">
                        {
                            displayInfo(counter, search)
                        }
                    </ul>
                    :
                    null
            }
        </div>
    )
};

const mapStateToProps = state => {
    return {
        url: state.inventorySearchURL,
        sort: state.inventorySortInfo
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchData,
        getData
    }, dispatch)
};

export default OnOff(connect(mapStateToProps, mapDispatchToProps)(AdditionalSearchOption));



// class AdditionalSearchOption extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             active: false
//         }
//     }
//
//     clickHandle(e, variable) {
//         if (this.state.active && !this.props.url.join("").includes(variable)) {
//             let uri = [...this.props.url];
//             uri[this.props.index] = `${variable}=${e.target.innerHTML}&`;
//             this.props.getData(uri, ADD_TO_URL);
//             this.props.getData(e.target.innerHTML, this.props.selectedType);
//             this.setState({
//                 active: false
//             });
//             fetchDataFunction(uri, this.props.sort.sortBy, this.props.sort.direction, this.props.fetchData);
//         }
//     };
//
//     displayInfo(object={}, variable) {
//         const obj = object[variable] ? object[variable] : {};
//         return Object.keys(obj).map(each => {
//             return(
//                 <li className="pb-2" key={each}>
//                     <div className="each">
//                         <FaCheckCircle color={each}/>
//                         <span onClick={e => this.clickHandle(e, this.props.search)}>
//                             {
//                                 each
//                             }
//                         </span>
//                     </div>
//                     <div className="badge badge-secondary rounded-0">
//                         {
//                             obj[each]
//                         }
//                     </div>
//                 </li>
//             )
//         })
//     }
//
//     render() {
//         const style = {
//             backgroundColor: this.props.color
//         };
//         return(
//             <div className="additional-search col-md-6 col-sm-6 col-lg-12 mt-4 px-2">
//                 <div className="d-flex justify-content-between py-2 px-3 bg-light border" onClick={() => this.setState({active: !this.state.active})}>
//                     <div className="d-flex">
//                         {
//                             this.props.title
//                         }
//                         {
//                             this.props.url.join("").includes(this.props.search) ? <div style={style}> </div> : null
//                         }
//                     </div>
//                     <div>
//                         {
//                             this.state.active ? "-" : "+"
//                         }
//                     </div>
//                 </div>
//                 {
//                     this.state.active ?
//                         <ul className="bg-grey">
//                             {
//                                 this.displayInfo(this.props.counter, this.props.search)
//                             }
//                         </ul>
//                         :
//                         null
//                 }
//             </div>
//         )
//     }
// }
//
// const mapStateToProps = state => {
//     return {
//         url: state.inventorySearchURL,
//         sort: state.inventorySortInfo
//     }
// };
//
// const mapDispatchToProps = dispatch => {
//     return bindActionCreators({
//         fetchData,
//         getData
//     }, dispatch)
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(AdditionalSearchOption);