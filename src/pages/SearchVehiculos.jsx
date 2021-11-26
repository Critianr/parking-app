import Dashboar from "../components/Dashboar";
import Header from '../components/header';
import Footer from '../components/footer'
import SearchPlaca from "../components/searchPlaca";
import '../assets/css/busqueda.css'
export default function SearchVechiculos()  {
    // const contextPlaca = props =>{
    //     const [vehiculo, setVehiculo] = useState([])
    //     con
    // }
    return (
        <>
        <Header />
        {/* <div className="container"> */}
        {/* <div className="container-fluid"> */}
        <div className="row ">
        <div className="col-10  centro">
        <SearchPlaca />
     </div>
     <div className="col-2 derecha">
         
         <Dashboar />
     {/* <PanelTickets /> */}
     
     </div>
     </div>
     {/* </div> */}
     {/* </div> */}
     <Footer />
     </>

    )
}

