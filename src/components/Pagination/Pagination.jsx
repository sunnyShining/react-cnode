/**
 * @author sunny
 * @email 17765293970@163.com
 * @create date 2018-01-27 10:18:39
 * @modify date 2018-01-27 10:18:39
 * @desc 分页
*/

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


export default class Pagination extends Component {
	render() {
        let { currentPage, handlePage, total } = this.props;
        if (total <= 0 || total < currentPage) {
            return null
        } else if (total <= 5) {
            let numbs = [];
            for (let i = 1; i <= total; i++) {
                numbs.push(i);
            }
            return (
                <div className="pagination">
                    <ul>
                        <li className={classnames({'disabled': currentPage === 1})} onClick={() => {handlePage(1)}}><a>«</a></li>
                        {
                            numbs.map((item, index) => {
                                return (<li className={classnames({'disabled active': currentPage === item})} onClick={() => {handlePage(item)}}><a>{item}</a></li>);
                            })
                        }
                        <li className={classnames({'disabled': currentPage === total})} onClick={() => {handlePage(total)}}><a>»</a></li>
                    </ul>
                </div>
            )
        } else if (currentPage < 4) {
            return (
                <div className="pagination">
                    <ul>
                        <li className={classnames({'disabled': currentPage === 1})} onClick={() => {handlePage(1)}}><a>«</a></li>
                        <li className={classnames({'disabled active': currentPage === 1})} onClick={() => {handlePage(1)}}><a>1</a></li>
                        <li className={classnames({'disabled active': currentPage === 2})} onClick={() => {handlePage(2)}}><a>2</a></li>
                        <li className={classnames({'disabled active': currentPage === 3})} onClick={() => {handlePage(3)}}><a>3</a></li>
                        <li className={classnames({'disabled active': currentPage === 4})} onClick={() => {handlePage(4)}}><a>4</a></li>
                        <li className={classnames({'disabled active': currentPage === 5})} onClick={() => {handlePage(5)}}><a>5</a></li>
                        <li onClick={() => {handlePage(currentPage + 2)}}><a>...</a></li>
                        <li onClick={() => {handlePage(total)}}><a>»</a></li>
                    </ul>
                </div>
            );
        } else if (currentPage < total - 2) {
            return (
                <div className="pagination">
                    <ul>
                        <li onClick={() => {handlePage(1)}}><a>«</a></li>
                        <li onClick={() => {handlePage(currentPage - 2)}}><a>...</a></li>
                        <li onClick={() => {handlePage(currentPage - 2)}}><a>{currentPage - 2}</a></li>
                        <li onClick={() => {handlePage(currentPage - 1)}}><a>{currentPage - 1}</a></li>
                        <li className="disabled active"><a>{currentPage}</a></li>
                        <li onClick={() => {handlePage(currentPage + 1)}}><a>{currentPage + 1}</a></li>
                        <li onClick={() => {handlePage(currentPage + 2)}}><a>{currentPage + 2}</a></li>
                        <li onClick={() => {handlePage(currentPage + 2)}}><a>...</a></li>
                        <li onClick={() => {handlePage(total)}}><a>»</a></li>
                    </ul>
                </div>
                );
        } else {
            return (
                <div className="pagination">
                    <ul>
                        <li onClick={() => {handlePage(1)}}><a>«</a></li>
                        <li onClick={() => {handlePage(currentPage - 2)}}><a>...</a></li>
                        <li className={classnames({'disabled active': currentPage === total - 4})} onClick={() => {handlePage(total - 4)}}><a>{total - 4}</a></li>
                        <li className={classnames({'disabled active': currentPage === total - 3})} onClick={() => {handlePage(total - 3)}}><a>{total - 3}</a></li>
                        <li className={classnames({'disabled active': currentPage === total - 2})} onClick={() => {handlePage(total - 2)}}><a>{total - 2}</a></li>
                        <li className={classnames({'disabled active': currentPage === total - 1})} onClick={() => {handlePage(total - 1)}}><a>{total - 1}</a></li>
                        <li className={classnames({'disabled active': currentPage === total})} onClick={() => {handlePage(total)}}><a>{total}</a></li>
                        <li className="disabled"><a>»</a></li>
                    </ul>
                </div>
            );
        }
	}
}

Pagination.propTypes = {
    currentPage: PropTypes.number,
    total: PropTypes.number,
};

