import { BiRefresh } from 'react-icons/bi';

const Footer = ({ quote, addQuote}) => {
  return (
    <footer>
      <p className="quote-text">{quote}</p>
      <BiRefresh onClick={() => addQuote()} className="quote-refresh-btn" />
    </footer>
  )
}

export default Footer
