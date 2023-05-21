import './App.css';
import BlogCard from './BlogCard';
import NavigationBar from './NavigationBar';
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
      description:'lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek'
    },
    {
      id:4,
      title:'Love news',
      description:'lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek lorem epsum dollor resdrek'
    }
  ]
  const elements=blogdata.map((item)=>{
    return(
      <BlogCard key={item.id} title={item.title} description={item.description} />
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
