import './App.css';
import BlogCard from './BlogCard';
import NavigationBar from './NavigationBar';
function App() {
  const blogdata=[
    {
      id:1,
      img:'https://th.bing.com/th/id/OIP.aRx3JR_qNEPtkCkl4aL_ZQHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title:'IPL 2023 news',
      description:'lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek'
    },
    {
      id:2,
      title:'Pubg news',
      img:'https://th.bing.com/th/id/OIP.aRx3JR_qNEPtkCkl4aL_ZQHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description:'lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek'
    },
    {
      id:3,
      title:'Love news',
      img:'https://th.bing.com/th/id/OIP.aRx3JR_qNEPtkCkl4aL_ZQHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description:'lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek'
    },
    {
      id:4,
      title:'Love news',
      img:'https://th.bing.com/th/id/OIP.aRx3JR_qNEPtkCkl4aL_ZQHaEK?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      description:'lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek'
    }
  ]
  const elements=blogdata.map((item)=>{
    return(
      <BlogCard key={item.id} title={item.title} description={item.description} img={item.img} />
    )
  })
  return (
    <div className="App">
      <div className='Nav'>
        <NavigationBar />
      </div>
      <div className='body'>
        {elements}
      </div>
    </div>
  );
}

export default App;
