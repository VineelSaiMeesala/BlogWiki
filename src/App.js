import logo from './logo.svg';
import './App.css';
import BlogCard from './BlogCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function App() {
  const blogdata=[
    {
      id:1,
      title:'IPL 2023 news',
      description:'lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek'
    },
    {
      id:2,
      title:'Pubg news',
      description:'lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek'
    },
    {
      id:3,
      title:'Love news',
      description:'lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek'
    }
  ]
  const elements=blogdata.map((item)=>{
    return(
      <BlogCard key={item.id} title={item.title} description={item.description} />
    )
  })
  return (
    <div className="App">
      <div className='Headear'>
        <div className='Logo'>
          <h2>BlogWiki</h2>
          <p>Inspired by Information</p>
        </div>
        <div className='line'></div>
      </div>
      <div className='menu'>
          <span>Home</span>
          <span>News</span>
          <span>Tech</span>
          <span>Gadgets</span>
          <span>Weather</span>
          <span>About</span>
          <span>Contact</span>
          <span>Services</span>
        </div>
        <div className='search'>
          <input type='search' placeholder='  Search....'/>
          <FontAwesomeIcon icon={faSearchengin} size="2xs" style={{color: "#ffffff",}} />
        </div>
      <div>
        {elements}
      </div>
    </div>
  );
}

export default App;
