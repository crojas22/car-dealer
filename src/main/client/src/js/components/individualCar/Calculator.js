import React from 'react';
import FaCalculator from "react-icons/lib/fa/calculator";
import { InputLabel } from "../reusables/Form";
import { BtnSubmit } from "../reusables/Buttons";

const Calculator = props => {
    let _price, _rate, _period, _downPayment;

    const submitHandle = e => {
        e.preventDefault();
        let monthlyRate = (_rate.value/100) /12,
            result = ((_price.value - _downPayment.value) * monthlyRate) / (1-Math.pow(1+monthlyRate, -_period.value));
        props.submit(Math.ceil(result * 100)/100);
    };

    return(
        <form className="calculator mb-3" onSubmit={submitHandle}>
            <div className="d-flex mb-3">
                <div>
                    <FaCalculator/>
                </div>
                <h5>FINANCING CALCULATOR</h5>
            </div>
            <InputLabel inputRef={input => _price = input} value={props.price} title="Vehicle price ($):" type="number"/>
            <div className="form-row">
                <InputLabel inputRef={input => _rate = input} divClass="col-md-6" value={3}
                            title="Interest rate (%):" type="number"/>
                <InputLabel inputRef={input => _period = input} divClass="col-md-6" value={72}
                            title="Period (months):" type="number"/>
            </div>
            <InputLabel inputRef={input => _downPayment = input} value={3000} title="Down payment ($):" type="number"/>
            <BtnSubmit title="Calculate" classes="btn-primary mb-3" />
            <div className="result p-3 bg-light-blue position-relative">
                <span>Monthly Payment</span>
                <br/>
                $
                {
                    props.result
                }
            </div>
        </form>
    )
};

export default Calculator;