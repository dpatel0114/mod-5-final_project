import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/Chart'

export class BalanceContainer extends Component {
  render() {
    return (

    <div>
        <div>
            <div class="card text-white bg-primary mb-3 col-md-10 border-light text-center">
              <div class="card-body">
                <h5>Remaining Balance </h5> <i class="fas fa-dollar-sign fa-3x"></i>  &nbsp; <span class="display-4"> {Math.round(this.props.stock.remaining_balance, 2)}</span>
              </div>
            </div>

            <div class="card text-white bg-success mb-3 col-md-10 border-light text-center">
              <div class="card-body" >
                  <h5> Invested Balance </h5> <i class="fas fa-dollar-sign fa-3x"></i> &nbsp;  <span class="display-4">  {Math.round(this.props.stock.invested_balance, 2)} </span>
              </div>
            </div>
       </div>

        <div class="card col-md-10" >
            <div class="card-header text-center" >
                Balance History 
            </div>
            <div class="card-body" >
                  <Chart/>
            </div>
        </div>
    </div>

    )
  }
}


const mapStateToProps = (state) => {
  return {stock: state.stock }
}

export default connect(mapStateToProps)(BalanceContainer)
 