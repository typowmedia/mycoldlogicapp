import React, { Component } from 'react';
import axios from 'axios';
import { COLDLOGIC_TOKEN } from '../../config/tokens';
import LeaveOfAbsenceData from '../LeaveOfAbsenceData';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      pageCount: null,
      pages: [],
      data: [],
      start: null,
      end: null,
    };
  }

  componentDidMount() {
    const pageCount = Math.ceil(this.props.loaCount / 5);

    const start = this.props.loaCount - 4;
    const end = this.props.loaCount;

    this.setState({
      pageCount,
      start,
      end,
    });

    this._setPages(end, pageCount);
    this._getLeaveOfAbsenceRange(start, end);
  }

  _setPages = (end, pageCount) => {
    const pages = [];
    let rangeEnd = end;
    for (let i = 0; i < pageCount; i++) {
      let start = rangeEnd - 4;
      let end = rangeEnd;
      if (start <= 0) {
        start = 0;
      }
      pages.push({
        id: i,
        number: i + 1,
        start,
        end,
      });
      rangeEnd -= 5;
    }
    this.setState({ pages });
  };

  _formatLeaveOfAbsence = (loa, stat, reasons) => {
    const data = loa
      .reduce((acc, curr) => {
        const status = stat.find(s => s.id === curr.torLoaStatusId);
        const reason = reasons.find(r => r.id === curr.leaveAbsReasonId);
        acc.push({
          id: curr.id,
          reason: reason.name,
          status: status.name,
          from: moment(curr.timeOffBeg).format('YYYY/MM/DD'),
          to: moment(curr.timeOffEnd).format('YYYY/MM/DD'),
        });
        return acc;
      }, [])
      .reverse();
    return data;
  };

  _getToken = () => {
    return localStorage.getItem(COLDLOGIC_TOKEN);
  };

  _getLeaveOfAbsenceRange = async (start, end) => {
    const Token = await this._getToken();
    axios
      .get(`/LeaveAbs/0/range/${start}/${end}`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${Token}`,
        },
      })
      .then(res => {
        const data = this._formatLeaveOfAbsence(
          res.data,
          this.props.torLoaStat,
          this.props.reasons,
        );
        this.setState({ data });
      })
      .catch(err => console.log(err));
  };
  _goToPage = page => {
    this._getLeaveOfAbsenceRange(page.start, page.end);

    this.setState({ page: page.number });
  };
  _prevPage = () => {
    let currPage = this.state.page;
    if (currPage <= 1) return;
    const pages = this.state.pages;
    const page = pages.filter(page => page.number === currPage - 1)[0];

    this._goToPage(page);
  };
  _nextPage = () => {
    let currPage = this.state.page;
    if (currPage >= this.state.pageCount) return;
    const pages = this.state.pages;
    const page = pages.filter(page => page.number === currPage + 1)[0];

    this._goToPage(page);
  };

  pagePlusOrMinusTwo = (page, currPage, lastPage) => {
    if (
      +page === +currPage ||
      +page === +currPage - 1 ||
      +page === +currPage - 2 ||
      +page === +currPage + 1 ||
      +page === +currPage + 2 ||
      (+currPage === 1 && +page === +currPage + 4) ||
      (+currPage === 1 && +page === +currPage + 3) ||
      (+currPage === 2 && +page === +currPage + 3) ||
      (+currPage === 2 && +page === +currPage + 2) ||
      (+currPage === +lastPage && +page === +lastPage - 4) ||
      (+currPage === +lastPage && +page === +lastPage - 3) ||
      (+currPage === +lastPage - 1 && +page === +lastPage - 4) ||
      (+currPage === +lastPage - 1 && +page === +lastPage - 3)
    ) {
      return true;
    }
    return false;
  };

  render() {
    const { classes, mobile } = this.props;
    const { data } = this.state;
    return (
      <div className={classes.pagination}>
        <div className={classes.paginationControls}>
          <button className={classes.paginationButton} onClick={this._prevPage}>
            &laquo;
          </button>
          {this.state.pages.map(page => {
            const currPage = this.state.page;
            const lastPage = this.state.pageCount;

            if (this.pagePlusOrMinusTwo(page.number, currPage, lastPage))
              return (
                <button
                  className={`${classes.paginationButton} ${
                    page.number === this.state.page
                      ? classes.paginationButtonActive
                      : ''
                  }`}
                  key={page.id}
                  onClick={() => this._goToPage(page)}
                >
                  {page.number}
                </button>
              );
            return null;
          })}
          <button className={classes.paginationButton} onClick={this._nextPage}>
            &raquo;
          </button>
        </div>
        <div>
          <LeaveOfAbsenceData data={data} mobile={mobile} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Pagination);

// if (this.state.pageCount > 10) {
//   if (page.number === 1) {
//     return (
//       <button
//         className={`${classes.paginationButton} ${
//           page.number === this.state.page
//             ? classes.paginationButtonActive
//             : ''
//         }`}
//         key={page.id}
//         onClick={() => this._goToPage(page)}
//       >
//         {page.number}
//       </button>
//     );
//   }
//   if (page.number === lastPage) {
//     return (
//       <button
//         className={`${classes.paginationButton} ${
//           page.number === this.state.page
//             ? classes.paginationButtonActive
//             : ''
//         }`}
//         key={page.id}
//         onClick={() => this._goToPage(page)}
//       >
//         {page.number}
//       </button>
//     );
//   }

//   if (currPage >= 7) {
//     if (page.number === currPage - 5) {
//       return (
//         <button
//           className={`${classes.paginationButton} ${
//             page.number === this.state.page
//               ? classes.paginationButtonActive
//               : ''
//           }`}
//           key={page.id}
//           onClick={() => this._goToPage(page)}
//         >
//           ...
//         </button>
//       );
//     }
//   } else {
//     if (page.number === currPage - 1) {
//       return (
//         <button
//           className={`${classes.paginationButton} ${
//             page.number === this.state.page
//               ? classes.paginationButtonActive
//               : ''
//           }`}
//           key={page.id}
//           onClick={() => this._goToPage(page)}
//         >
//           ...
//         </button>
//       );
//     }
//   }

//   if (page.number === currPage + 5) {
//     return (
//       <button
//         className={`${classes.paginationButton} ${
//           page.number === this.state.page
//             ? classes.paginationButtonActive
//             : ''
//         }`}
//         key={page.id}
//         onClick={() => this._goToPage(page)}
//       >
//         ...
//       </button>
//     );
//   }

//   if (page.number >= currPage + 5) return;
//   if (page.number <= currPage - 1) return;
// }

// return (
//   <button
//     className={`${classes.paginationButton} ${
//       page.number === this.state.page
//         ? classes.paginationButtonActive
//         : ''
//     }`}
//     key={page.id}
//     onClick={() => this._goToPage(page)}
//   >
//     {page.number}
//   </button>
// );
