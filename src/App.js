import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';
import AllContext from './context/AllContext';
import AboutUs from './pages/AboutUs/AboutUs';
import Appointment from './pages/Appointment/Appointment';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import BlogLeftSideBar from './pages/BlogLeftSideBar/BlogLeftSideBar';
import BlogNoSideBar from './pages/BlogNoSideBar/BlogNoSideBar';
import Blogs from './pages/Blogs/Blogs';
import BlogThreeColMasonry from './pages/BlogThreeColMasonry/BlogThreeColMasonry';
import BlogThreeColumn from './pages/BlogThreeColumn/BlogThreeColumn';
import BlogTwoColumn from './pages/BlogTwoColumn/BlogTwoColumn';
import BlogTwoColumnMasonry from './pages/BlogTwoColumnMasonry/BlogTwoColumnMasonry';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import Contact from './pages/Contact/Contact';
import DetailsAudio from './pages/DetailsAudio/DetailsAudio';
import DetailsGallery from './pages/DetailsGallery/DetailsGallery';
import DetailsLeftSideBar from './pages/DetailsLeftSideBar/DetailsLeftSideBar';
import DetailsVideo from './pages/DetailsVideo/DetailsVideo';
import DoctorDetails from './pages/Doctors/DoctorDetails/DoctorDetails';
import DoctorsOne from './pages/Doctors/DoctorsOne/DoctorsOne';
import DoctorsTwo from './pages/Doctors/DoctorsTwo/DoctorsTwo';
import Home from './pages/Home/Home/Home';
import HomeThree from './pages/HomeThree/HomeThree';
import HomeTwo from './pages/HomeTwo/HomeTwo';
import HomeFour from './pages/HomeFour/HomeFour';
import Login from './pages/Login/Login';
import PortfolioSlider from './pages/PortfolioSlider/PortfolioSlider';
import PortfolioThreeCol from './pages/PortfolioThreeCol/PortfolioThreeCol';
import PortfolioTwoColumn from './pages/PortfolioTwoColumn/PortfolioTwoColumn';
import Register from './pages/Register/Register';
import ServicesDetails from './pages/Services/ServicesDetails/ServicesDetails';

import ShopDetails from './pages/ShopDetails/ShopDetails/ShopDetails';
import ShopPage from './pages/ShopPage/ShopPage/ShopPage';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import WishList from './pages/wishList/WishList';
import HomeFive from './pages/HomeFive/HomeFive';
import './App.css';
import NotFound from './pages/NotFound/NotFound';
import Services from './pages/Services/ServicesTwo/ServicesTwo';
import TraumaCare from './pages/Trauma/TraumaCare';
import CriticalCare from './pages/Critical Care/CriticalCare';
import PaediatricsNeonaology from './pages/Paediatrics & Neonaology/PaediatricsNeonaology';
import MedicineRehabilitation from './pages/Medicine & Rehabilitation/MedicineRehabilitation';
import Neuroscience from './pages/Neuroscience/Neuroscience';
import FindADoctor from './pages/FindADoctor/FindADoctor';
import MakeAnAppointment from './pages/MakeAnAppointment/MakeAnAppointment';
import BoneJoint from './pages/BoneJoint/BoneJoint';
import DiabetesBariatricSurgery from './pages/DiabetesBariatricSurgery/DiabetesBariatricSurgery';
import Billing from './pages/Billing/Billing';
import Testimonials from './pages/Testimonials/Testimonials';
import PatientGuide from './pages/PatientGuide/PatientGuide';
import Timing from './pages/Timings/Timings';
import Healthtips from './pages/Healthtips/Healthtips';
import Events from './pages/Events/Events';
import Bulletin from './pages/Bulletin/Bulletin';
import Newshead from './pages/Newshead/Newswhead';
import DoctorProfile from './pages/DoctorProfile/DoctorProfile';
import PhoneDirectory from './pages/PhoneDirectory/PhoneDirectory';
import Enquiry from './pages/Enquiry/Enquiry';
import PntVisComp from './pages/PntVisComp/PntVisComp';
import Deptser from './pages/deptser/Deptser';
import Healthinfo from './pages/Healthinfo/Healthinfo';
import ReachUs from './pages/ReachUs/ReachUs';



function App() {
  return (
    <>
      <AllContext>
        <BrowserRouter>
          <ScrollTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/homeTwo" element={<HomeTwo />} />
            <Route path="/homeThree" element={<HomeThree />} />
            <Route path="/homeFour" element={<HomeFour />} />
            <Route path="/homeFive" element={<HomeFive />} />
            
            


            <Route path="/departments" element={<Services />} />
            <Route path="/trauma-care" element={<TraumaCare />} />
            <Route path="/critical-care" element={<CriticalCare />} />
            <Route path="/paediatrics-neonatology" element={<PaediatricsNeonaology />} />
            <Route path="/medicine-rehabilitation" element={<MedicineRehabilitation />} />
            <Route path="/neuroscience" element={<Neuroscience />} />
            <Route path="/find-a-doctor" element={<FindADoctor />} />
            <Route path="/make-an-appointment" element={<MakeAnAppointment />} />
            <Route path="/bone-joint" element={<BoneJoint/>}/>
            <Route path="/diabetes-bariatrics-surgery" element={<DiabetesBariatricSurgery/>}/>
            <Route path="/billing" element={<Billing/>}/>
            <Route path="/testimonials" element={<Testimonials/>}/>
            <Route path="/patient-guide-visitors" element={<PatientGuide/>}/>
            <Route path="/timings" element={<Timing/>}/>
            <Route path="/health-tips" element={<Healthtips/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path="/event-bulletin" element={<Bulletin/>}/>
            <Route path="/news-head" element={<Newshead/>}/>
            <Route path="/doctors-profile" element={<DoctorProfile/>}/>
            <Route path="/phone-directory" element={<PhoneDirectory/>}/>
            <Route path="/enquiry" element={<Enquiry/>}/>
            <Route path="/doctors" element={<PntVisComp/>}/>
            <Route path="/online-reports-portal" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/departments" element={<Deptser/>}/>
            <Route path="/health-info" element={<Healthinfo/>}/>
            <Route path="/reachus" element={<ReachUs/>}/>


            


















            <Route path="/servicesDetails" element={<ServicesDetails />} />
            <Route path="/doctors" element={<DoctorsOne />} />
            <Route path="/doctorsTwo" element={<DoctorsTwo />} />
            <Route path="/doctorDetails" element={<DoctorDetails />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shopDetails" element={<ShopDetails />} />
            <Route path="/shoppingCart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/wishList" element={<WishList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogLeftSideBar" element={<BlogLeftSideBar />} />
            <Route path="/blogNoSideBar" element={<BlogNoSideBar />} />
            <Route path="/blogTwoColumn" element={<BlogTwoColumn />} />
            <Route path="/blogTwoMasonry" element={<BlogTwoColumnMasonry/>} />
            <Route path="/blogThreeColumn" element={<BlogThreeColumn />} />
            <Route path="/blogThreeColMasonry" element={<BlogThreeColMasonry />} />
            <Route path="/blogDetails" element={<BlogDetails />} />
            <Route path="/blogDetailsLeftSidebar" element={<DetailsLeftSideBar />} />
            <Route path="/blogDetailsAudio" element={<DetailsAudio />} />
            <Route path="/blogDetailsVideo" element={<DetailsVideo />} />
            <Route path="/blogDetailsGallery" element={<DetailsGallery />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/appoinment" element={<Appointment />} />
            <Route path="/portfolioTwoColumn" element={<PortfolioTwoColumn />} />
            <Route path="/portfolioThreeColumn" element={<PortfolioThreeCol />} />
            <Route path="/portfolioSlider" element={<PortfolioSlider />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/notMatch" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AllContext>
    </>
  );
}

export default App;
