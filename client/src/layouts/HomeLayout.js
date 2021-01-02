import Navbar from './sections/Navbar'
import Footer from './sections/Footer'

const HomeLayout = ({ title, desc, children }) => {
    return (
     <div class="flex flex-col">
      <div className=" flex-grow relative bg-white min-h-screen">
        <div className="mx-auto h-full">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20  lg:w-full lg:pb-28 xl:pb-32 h-full">
            <div className="dark ">
              <Navbar/>
            </div>
  
            <main className=" mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8 h-full">
              {children}
            </main>
          </div>
        </div>
        <div className="dark" >
          <Footer />
        </div>
      </div>
    </div>  
    );
  };
  
  export default HomeLayout;
  