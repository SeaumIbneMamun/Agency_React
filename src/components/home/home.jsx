import React from 'react';
import Blog from '../blog/blog';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';

function Home() {
    return (
        <div>
          <Blog></Blog>
          <Services></Services>
          <Gallery></Gallery>
          <Footer></Footer>
        </div>
    )
}
export default Home