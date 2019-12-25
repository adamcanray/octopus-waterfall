import React from 'react'
import { Link } from 'react-router-dom';
import QuoteSummery from "./QuoteSummery";

const QuoteList = (props) => {
  const { quotes } = props;
  return (
    <div className="row mt-5">
        {quotes && quotes.map(quote => {
          return (
            <Link className="col-lg-12 mt-3 quote-list" to={'/quote/'+quote.id} key={quote.id}>
              <QuoteSummery quote={quote} />
            </Link>
          )
        })}
    </div>
  )
}

export default QuoteList
