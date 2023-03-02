import { Image } from '@mantine/core';

export default function About() {
  
  // Image Link goes in src put inside "" delete brackets
  
  return (
    <>
      <div className='about_container'>
        <div className='about_image'>
          <Image
              radius="md"
            height={500}
            fit="contain"
            src={null}
            alt={null}
            withPlaceholder
          />
        </div>
        <div className='about'>
          <p className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non quam lacus suspendisse faucibus interdum posuere. At augue eget arcu dictum varius duis at consectetur. Quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Scelerisque fermentum dui faucibus in ornare quam viverra. Purus gravida quis blandit turpis. Luctus venenatis lectus magna fringilla urna porttitor. Risus in hendrerit gravida rutrum quisque non. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Tortor id aliquet lectus proin nibh nisl condimentum. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Ac turpis egestas integer eget aliquet nibh praesent. Nisl condimentum id venenatis a condimentum.
          </p>
        </div>
      </div>
    </>
  );
}
