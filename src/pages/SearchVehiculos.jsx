import Dashboar from "../components/Dashboar";
import Header from '../components/header';
import Footer from '../components/footer'
import SearchPlaca from "../components/searchPlaca";

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
        <div class="row g-0">
        <div class="col-10 centro">
        <SearchPlaca />
     </div>
     <div class="col-2">
         
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

