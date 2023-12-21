import './Gallery.css'
import React from 'react';
import Gallery1 from '../../assets/images/GallerySC/Gallery1.jpg';
import Gallery2 from '../../assets/images/GallerySC/Gallery2.jpg';
import Gallery3 from '../../assets/images/GallerySC/Gallery3.jpg';
import Rectangle from '../../assets/images/GallerySC/Rectangle.png';
import circle from '../../assets/images/GallerySC/[CITYPNG.COM]Gray Half Semi Circle Transparent PNG - 2000x2000.png'
const Gallery = () => {
    return (
        <div className='gallery'>
            <div className='gallery-items'>
                <div className='cd'>
                    <img className='circle' src={circle} alt="" />
                    <h3 className='recent'>Our recent <span className='spang'>projects</span></h3>
                    <span className='spanbgg'><svg xmlns="http://www.w3.org/2000/svg" width="107" height="6" viewBox="0 0 107 6" fill="none">
  <path d="M3.5 3H103.5" stroke="#FFC700" stroke-width="6" stroke-linecap="square"/>
</svg></span>
                    <h4 className='digital'>
                        Website Development for Digital Company
                    </h4>
                    <p className='thought'>
                        My first thought about art, as a child, was that the artist brings something into the world that didn't exist before, and that he does it without destroying something else
                    </p>
                    <img className='img-s' src={Gallery1} alt="" />
                </div>
            </div>
            <div className='img-boxr'>
            <div className='gallery-items2'>
                <img className='img-1' src={Gallery2} alt="" />
                <img className='img-2' src={Gallery3} alt="" />
                <img className='rect' src={Rectangle} alt="" />
            </div>
            <div>
                
            </div>
            </div>
        </div>
    );
};

export default Gallery;