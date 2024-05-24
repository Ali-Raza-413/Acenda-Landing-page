import './App.css';
import Navbarsection from './Components/NavbarSection/Navbarsection';
import Section2 from './Components/NavbarSection/Section2.js/Section2';
import Section4 from './Components/Section4/Section4';
import Section3 from './Components/Section3/Section3';
import Section5 from './Components/Section5/Section5';
import Section6 from './Components/Section6/Section6';
import Section7 from './Components/Section7/Section7';
import Footer from './Components/Footer/Footer';
import UseMemo from './Components/Hooks/UseMemo';

function App() {
  return (
   <>
<div className='bg-gray-300'>
<Navbarsection/> 
<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Section6/>
<Section7/>
<Footer/>
</div>
</>
  );
}

export default App;
